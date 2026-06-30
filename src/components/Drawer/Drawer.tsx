import React from "react";
import { createPortal } from "react-dom";
import "./Drawer.css";

/** Placement of the Drawer panel on screen. */
export type DrawerPlacement = "left" | "right" | "top" | "bottom";
/** Size preset for the Drawer panel dimensions. */
export type DrawerSize = "xs" | "sm" | "md" | "lg" | "xl" | "full";

const SIZE_DIMENSIONS: Record<
  DrawerSize,
  { width?: string; height?: string }
> = {
  xs: { width: "320px" },
  sm: { width: "384px" },
  md: { width: "448px" },
  lg: { width: "512px" },
  xl: { width: "576px" },
  full: { width: "100%" },
};

interface DrawerContextValue {
  onClose: () => void;
  placement: DrawerPlacement;
  size: DrawerSize;
}

const DrawerContext = React.createContext<DrawerContextValue | null>(null);

const useDrawerContext = (): DrawerContextValue => {
  const ctx = React.useContext(DrawerContext);
  if (!ctx) {
    throw new Error("Drawer subcomponents must be used within <Drawer />");
  }
  return ctx;
};

const FOCUSABLE_SELECTOR =
  'a[href],button:not([disabled]),textarea:not([disabled]),input:not([disabled]):not([type="hidden"]),select:not([disabled]),[tabindex]:not([tabindex="-1"])';

/** Props for the root Drawer component. Manages open state, placement, and overlay behavior. */
export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  placement?: DrawerPlacement;
  size?: DrawerSize;
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
  children?: React.ReactNode;
  contentProps?: React.HTMLAttributes<HTMLDivElement>;
  container?: HTMLElement | null;
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  placement = "right",
  size = "md",
  closeOnOverlayClick = true,
  closeOnEsc = true,
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
        if (previouslyFocused.current) {
          previouslyFocused.current.focus();
        }
      };
    }
    return undefined;
  }, [isOpen]);

  React.useEffect(() => {
    if (!isOpen) return;
    const target = contentRef.current?.querySelector<HTMLElement>(FOCUSABLE_SELECTOR) ?? contentRef.current;
    target?.focus();
  }, [isOpen]);

  React.useEffect(() => {
    if (!isOpen || !closeOnEsc) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, closeOnEsc, onClose]);

  if (!isOpen) return null;

  const ctxValue: DrawerContextValue = { onClose, placement, size };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOverlayClick && e.target === overlayRef.current) {
      onClose();
    }
  };

  const drawerRoot = container ?? (typeof document !== "undefined" ? document.body : null);
  if (!drawerRoot) return null;

  const dimensions = SIZE_DIMENSIONS[size];
  const isHorizontal = placement === "left" || placement === "right";

  const contentStyle: React.CSSProperties = {};
  if (isHorizontal) {
    contentStyle.width = dimensions.width;
    contentStyle.height = "100%";
  } else {
    contentStyle.height = dimensions.width; // for top/bottom we use width key as height
    contentStyle.width = "100%";
  }

  return createPortal(
    <DrawerContext.Provider value={ctxValue}>
      <div className={["ds-drawer", "ds-drawer--open"].join(" ")} {...rest}>
        <div
          ref={overlayRef}
          className="ds-drawer__overlay"
          onClick={handleOverlayClick}
          aria-hidden="true"
        />
        <div
          ref={contentRef}
          className={[
            "ds-drawer__content",
            `ds-drawer__content--${placement}`,
            `ds-drawer__content--${size}`,
            contentProps?.className,
          ]
            .filter(Boolean)
            .join(" ")}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          style={{ ...contentStyle, ...contentProps?.style }}
          {...contentProps}
        >
          {children}
        </div>
      </div>
    </DrawerContext.Provider>,
    drawerRoot
  );
};
Drawer.displayName = "Drawer";

/** Props for the Drawer overlay backdrop. */
export interface DrawerOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const DrawerOverlay: React.FC<DrawerOverlayProps> = () => null;
DrawerOverlay.displayName = "DrawerOverlay";

/** Props for the Drawer content panel. */
export interface DrawerContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const DrawerContent = React.forwardRef<HTMLDivElement, DrawerContentProps>(
  ({ className = "", children, ...props }, ref) => {
    const { placement, size } = useDrawerContext();
    const isHorizontal = placement === "left" || placement === "right";
    const dimensions = SIZE_DIMENSIONS[size];

    const contentStyle: React.CSSProperties = {};
    if (isHorizontal) {
      contentStyle.width = dimensions.width;
      contentStyle.height = "100%";
    } else {
      contentStyle.height = dimensions.width;
      contentStyle.width = "100%";
    }

    return (
      <div
        ref={ref}
        className={[
          "ds-drawer__content",
          `ds-drawer__content--${placement}`,
          `ds-drawer__content--${size}`,
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        style={contentStyle}
        {...props}
      >
        {children}
      </div>
    );
  }
);
DrawerContent.displayName = "DrawerContent";

/** Props for the Drawer header section. */
export interface DrawerHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const DrawerHeader = React.forwardRef<HTMLDivElement, DrawerHeaderProps>(
  ({ className = "", children, ...props }, ref) => (
    <div
      ref={ref}
      className={["ds-drawer__header", className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </div>
  )
);
DrawerHeader.displayName = "DrawerHeader";

/** Props for the Drawer body content area. */
export interface DrawerBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const DrawerBody = React.forwardRef<HTMLDivElement, DrawerBodyProps>(
  ({ className = "", children, ...props }, ref) => (
    <div
      ref={ref}
      className={["ds-drawer__body", className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </div>
  )
);
DrawerBody.displayName = "DrawerBody";

/** Props for the Drawer footer section. */
export interface DrawerFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const DrawerFooter = React.forwardRef<HTMLDivElement, DrawerFooterProps>(
  ({ className = "", children, ...props }, ref) => (
    <div
      ref={ref}
      className={["ds-drawer__footer", className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </div>
  )
);
DrawerFooter.displayName = "DrawerFooter";

/** Props for the Drawer close button. */
export interface DrawerCloseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const DrawerCloseButton = React.forwardRef<
  HTMLButtonElement,
  DrawerCloseButtonProps
>(({ className = "", children, ...props }, ref) => {
  const { onClose } = useDrawerContext();
  return (
    <button
      ref={ref}
      type="button"
      aria-label="Close"
      className={["ds-drawer__close", className].filter(Boolean).join(" ")}
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
DrawerCloseButton.displayName = "DrawerCloseButton";
