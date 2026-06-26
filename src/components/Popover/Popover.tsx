import React from "react";
import "./Popover.css";

export type PopoverPosition = "top" | "right" | "bottom" | "left";
export type PopoverVariant = "default" | "subtle";

interface PopoverContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  position: PopoverPosition;
  triggerRef: React.MutableRefObject<HTMLElement | null>;
  listRef: React.MutableRefObject<HTMLDivElement | null>;
  variant: PopoverVariant;
  closeOnBlur: boolean;
  closeOnEsc: boolean;
}

const PopoverContext = React.createContext<PopoverContextValue | null>(null);

const usePopoverContext = (): PopoverContextValue => {
  const ctx = React.useContext(PopoverContext);
  if (!ctx) {
    throw new Error("Popover subcomponents must be used within <Popover />");
  }
  return ctx;
};

export interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
  defaultOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  position?: PopoverPosition;
  variant?: PopoverVariant;
  closeOnBlur?: boolean;
  closeOnEsc?: boolean;
  children?: React.ReactNode;
}

export const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      isOpen,
      defaultOpen = false,
      onOpen,
      onClose,
      position = "bottom",
      variant = "default",
      closeOnBlur = true,
      closeOnEsc = true,
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const triggerRef = React.useRef<HTMLElement | null>(null);
    const listRef = React.useRef<HTMLDivElement | null>(null);
    const isControlled = isOpen !== undefined;
    const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
    const openState = isControlled ? isOpen : internalOpen;

    const setOpen = React.useCallback(
      (next: boolean) => {
        if (!isControlled) setInternalOpen(next);
        if (next) onOpen?.();
        else onClose?.();
      },
      [isControlled, onOpen, onClose]
    );

    const value = React.useMemo<PopoverContextValue>(
      () => ({
        isOpen: openState,
        open: () => setOpen(true),
        close: () => setOpen(false),
        toggle: () => setOpen(!openState),
        position,
        triggerRef,
        listRef,
        variant,
        closeOnBlur,
        closeOnEsc,
      }),
      [openState, setOpen, position, variant, closeOnBlur, closeOnEsc]
    );

    return (
      <PopoverContext.Provider value={value}>
        <div
          ref={ref}
          className={["ds-popover", className].filter(Boolean).join(" ")}
          {...props}
        >
          {children}
        </div>
      </PopoverContext.Provider>
    );
  }
);
Popover.displayName = "Popover";

export interface PopoverTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  children?: React.ReactNode;
}

export const PopoverTrigger = React.forwardRef<HTMLButtonElement, PopoverTriggerProps>(
  ({ className = "", asChild = false, children, onClick, ...props }, ref) => {
    const ctx = usePopoverContext();

    const handleClick: React.MouseEventHandler<HTMLElement> = (e) => {
      ctx.toggle();
      onClick?.(e as React.MouseEvent<HTMLButtonElement>);
    };

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<
        React.HTMLAttributes<HTMLElement> & { ref?: React.Ref<HTMLElement> }
      >;
      const mergedRef = (node: HTMLElement | null) => {
        ctx.triggerRef.current = node;
        if (typeof ref === "function") ref(node as unknown as HTMLButtonElement);
        else if (ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current =
          node as unknown as HTMLButtonElement;
        const origRef = (child as { ref?: React.Ref<HTMLElement> }).ref;
        if (typeof origRef === "function") origRef(node);
        else if (origRef && typeof origRef === "object") {
          (origRef as React.MutableRefObject<HTMLElement | null>).current = node;
        }
      };
      return React.cloneElement(child, {
        ...child.props,
        ref: mergedRef,
        onClick: (e: React.MouseEvent<HTMLElement>) => {
          handleClick(e);
          const orig = (child.props as { onClick?: React.MouseEventHandler<HTMLElement> })
            .onClick;
          orig?.(e);
        },
        "aria-haspopup": "dialog",
        "aria-expanded": ctx.isOpen,
      });
    }

    const buttonRef = (node: HTMLButtonElement | null) => {
      ctx.triggerRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node;
    };

    return (
      <button
        ref={buttonRef}
        type="button"
        className={["ds-popover__trigger", className].filter(Boolean).join(" ")}
        aria-haspopup="dialog"
        aria-expanded={ctx.isOpen}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);
PopoverTrigger.displayName = "PopoverTrigger";

export interface PopoverContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  withArrow?: boolean;
  arrowSize?: number;
}

export const PopoverContent = React.forwardRef<HTMLDivElement, PopoverContentProps>(
  (
    { className = "", children, withArrow = true, arrowSize = 8, ...props },
    ref
  ) => {
    const ctx = usePopoverContext();

    React.useEffect(() => {
      if (!ctx.isOpen) return;
      const handleOutside = (e: MouseEvent | TouchEvent) => {
        const target = e.target as Node;
        if (
          ctx.listRef.current?.contains(target) ||
          ctx.triggerRef.current?.contains(target)
        ) {
          return;
        }
        ctx.close();
      };
      const handleKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") ctx.close();
      };
      document.addEventListener("mousedown", handleOutside);
      document.addEventListener("touchstart", handleOutside);
      document.addEventListener("keydown", handleKey);
      return () => {
        document.removeEventListener("mousedown", handleOutside);
        document.removeEventListener("touchstart", handleOutside);
        document.removeEventListener("keydown", handleKey);
      };
    }, [ctx]);

    const localRef = (node: HTMLDivElement | null) => {
      ctx.listRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
    };

    if (!ctx.isOpen) return null;

    const classNames = [
      "ds-popover__content",
      `ds-popover__content--${ctx.position}`,
      `ds-popover__content--${ctx.variant}`,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div ref={localRef} role="dialog" className={classNames} {...props}>
        {withArrow && (
          <span
            className={["ds-popover__arrow", `ds-popover__arrow--${ctx.position}`].join(" ")}
            style={{ "--ds-popover-arrow-size": `${arrowSize}px` } as React.CSSProperties}
            aria-hidden="true"
          />
        )}
        <div className="ds-popover__inner">{children}</div>
      </div>
    );
  }
);
PopoverContent.displayName = "PopoverContent";

export interface PopoverArrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: number;
}

export const PopoverArrow = React.forwardRef<HTMLSpanElement, PopoverArrowProps>(
  ({ className = "", size = 8, ...props }, ref) => {
    const { position } = usePopoverContext();
    return (
      <span
        ref={ref}
        className={["ds-popover__arrow", `ds-popover__arrow--${position}`, className]
          .filter(Boolean)
          .join(" ")}
        style={{ "--ds-popover-arrow-size": `${size}px` } as React.CSSProperties}
        aria-hidden="true"
        {...props}
      />
    );
  }
);
PopoverArrow.displayName = "PopoverArrow";

export interface PopoverHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const PopoverHeader = React.forwardRef<HTMLDivElement, PopoverHeaderProps>(
  ({ className = "", children, ...props }, ref) => (
    <div
      ref={ref}
      className={["ds-popover__header", className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </div>
  )
);
PopoverHeader.displayName = "PopoverHeader";

export interface PopoverBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const PopoverBody = React.forwardRef<HTMLDivElement, PopoverBodyProps>(
  ({ className = "", children, ...props }, ref) => (
    <div
      ref={ref}
      className={["ds-popover__body", className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </div>
  )
);
PopoverBody.displayName = "PopoverBody";

export interface PopoverFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const PopoverFooter = React.forwardRef<HTMLDivElement, PopoverFooterProps>(
  ({ className = "", children, ...props }, ref) => (
    <div
      ref={ref}
      className={["ds-popover__footer", className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </div>
  )
);
PopoverFooter.displayName = "PopoverFooter";
