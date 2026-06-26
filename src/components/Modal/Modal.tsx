import React from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

export type ModalSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
export type ModalVariant = "default" | "fullscreen";

const SIZE_WIDTHS: Record<ModalSize, string> = {
  xs: "320px",
  sm: "384px",
  md: "448px",
  lg: "512px",
  xl: "576px",
  "2xl": "672px",
  full: "100%",
};

interface ModalContextValue {
  onClose: () => void;
  size: ModalSize;
}

const ModalContext = React.createContext<ModalContextValue | null>(null);

const useModalContext = (): ModalContextValue => {
  const ctx = React.useContext(ModalContext);
  if (!ctx) {
    throw new Error("Modal subcomponents must be used within <Modal />");
  }
  return ctx;
};

const FOCUSABLE_SELECTOR =
  'a[href],button:not([disabled]),textarea:not([disabled]),input:not([disabled]):not([type="hidden"]),select:not([disabled]),[tabindex]:not([tabindex="-1"])';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  size?: ModalSize;
  variant?: ModalVariant;
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
  lockFocus?: boolean;
  returnFocus?: boolean;
  initialFocusRef?: React.RefObject<HTMLElement | null>;
  finalFocusRef?: React.RefObject<HTMLElement | null>;
  children?: React.ReactNode;
  contentProps?: React.HTMLAttributes<HTMLDivElement>;
  container?: HTMLElement | null;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  size = "md",
  variant = "default",
  closeOnOverlayClick = true,
  closeOnEsc = true,
  lockFocus = true,
  returnFocus = true,
  initialFocusRef,
  finalFocusRef,
  children,
  contentProps,
  container,
  ...rest
}) => {
  const overlayRef = React.useRef<HTMLDivElement | null>(null);
  const contentRef = React.useRef<HTMLDivElement | null>(null);
  const previouslyFocused = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    if (isOpen) {
      previouslyFocused.current = document.activeElement as HTMLElement | null;
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = previousOverflow;
        if (returnFocus) {
          if (finalFocusRef?.current) {
            finalFocusRef.current.focus();
          } else if (previouslyFocused.current) {
            previouslyFocused.current.focus();
          }
        }
      };
    }
    return undefined;
  }, [isOpen, returnFocus, finalFocusRef]);

  React.useEffect(() => {
    if (!isOpen) return;

    if (lockFocus) {
      const target = initialFocusRef?.current;
      const focusTarget = target ?? contentRef.current?.querySelector<HTMLElement>(FOCUSABLE_SELECTOR) ?? contentRef.current;
      focusTarget?.focus();
    }
  }, [isOpen, lockFocus, initialFocusRef]);

  React.useEffect(() => {
    if (!isOpen || !closeOnEsc) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && lockFocus && contentRef.current) {
        const focusable = Array.from(
          contentRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
        ).filter((el) => !el.hasAttribute("data-focus-skip"));
        if (focusable.length === 0) {
          e.preventDefault();
          contentRef.current.focus();
          return;
        }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!first || !last) return;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, closeOnEsc, onClose, lockFocus]);

  if (!isOpen) return null;

  const ctxValue: ModalContextValue = { onClose, size };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOverlayClick && e.target === overlayRef.current) {
      onClose();
    }
  };

  const modalRoot =
    container ?? (typeof document !== "undefined" ? document.body : null);

  if (!modalRoot) return null;

  return createPortal(
    <ModalContext.Provider value={ctxValue}>
      <div
        className={[
          "ds-modal",
          variant === "fullscreen" && "ds-modal--fullscreen",
          "ds-modal--open",
        ]
          .filter(Boolean)
          .join(" ")}
        {...rest}
      >
        <div
          ref={overlayRef}
          className="ds-modal__overlay"
          onClick={handleOverlayClick}
          aria-hidden="true"
        />
        <div
          ref={contentRef}
          className={[
            "ds-modal__content",
            `ds-modal__content--${size}`,
            contentProps?.className,
          ]
            .filter(Boolean)
            .join(" ")}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          style={{
            width: variant === "fullscreen" ? "100%" : SIZE_WIDTHS[size],
            ...contentProps?.style,
          }}
          {...contentProps}
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    modalRoot
  );
};
Modal.displayName = "Modal";

export interface ModalOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const ModalOverlay: React.FC<ModalOverlayProps> = () => null;
ModalOverlay.displayName = "ModalOverlay";

export interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const ModalContent = React.forwardRef<HTMLDivElement, ModalContentProps>(
  ({ className = "", children, ...props }, ref) => {
    const { size } = useModalContext();
    return (
      <div
        ref={ref}
        className={["ds-modal__content", `ds-modal__content--${size}`, className]
          .filter(Boolean)
          .join(" ")}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        {...props}
      >
        {children}
      </div>
    );
  }
);
ModalContent.displayName = "ModalContent";

export interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const ModalHeader = React.forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ className = "", children, ...props }, ref) => (
    <div
      ref={ref}
      className={["ds-modal__header", className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </div>
  )
);
ModalHeader.displayName = "ModalHeader";

export interface ModalBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const ModalBody = React.forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ className = "", children, ...props }, ref) => (
    <div
      ref={ref}
      className={["ds-modal__body", className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </div>
  )
);
ModalBody.displayName = "ModalBody";

export interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const ModalFooter = React.forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ className = "", children, ...props }, ref) => (
    <div
      ref={ref}
      className={["ds-modal__footer", className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </div>
  )
);
ModalFooter.displayName = "ModalFooter";

export interface ModalCloseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const ModalCloseButton = React.forwardRef<
  HTMLButtonElement,
  ModalCloseButtonProps
>(({ className = "", children, ...props }, ref) => {
  const { onClose } = useModalContext();
  return (
    <button
      ref={ref}
      type="button"
      aria-label="Close"
      className={["ds-modal__close", className].filter(Boolean).join(" ")}
      onClick={onClose}
      {...props}
    >
      {children ?? (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      )}
    </button>
  );
});
ModalCloseButton.displayName = "ModalCloseButton";
