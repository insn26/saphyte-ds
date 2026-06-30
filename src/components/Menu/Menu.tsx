import React from "react";
import "./Menu.css";

/** Size variant for the Menu component. */
export type MenuSize = "sm" | "md" | "lg";

interface MenuContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  size: MenuSize;
  triggerRef: React.MutableRefObject<HTMLElement | null>;
  listRef: React.MutableRefObject<HTMLDivElement | null>;
  closeOnSelect: boolean;
  closeOnBlur: boolean;
}

const MenuContext = React.createContext<MenuContextValue | null>(null);

const useMenuContext = (): MenuContextValue => {
  const ctx = React.useContext(MenuContext);
  if (!ctx) {
    throw new Error("Menu subcomponents must be used within <Menu />");
  }
  return ctx;
};

/** Props for the Menu component. */
export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
  defaultIsOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  closeOnSelect?: boolean;
  closeOnBlur?: boolean;
  size?: MenuSize;
  children?: React.ReactNode;
}

export const Menu = React.forwardRef<HTMLDivElement, MenuProps>(
  (
    {
      isOpen,
      defaultIsOpen = false,
      onOpen,
      onClose,
      closeOnSelect = true,
      closeOnBlur = true,
      size = "md",
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const triggerRef = React.useRef<HTMLElement | null>(null);
    const listRef = React.useRef<HTMLDivElement | null>(null);
    const isControlled = isOpen !== undefined;
    const [internalOpen, setInternalOpen] = React.useState(defaultIsOpen);
    const openState = isControlled ? isOpen : internalOpen;

    const setOpen = React.useCallback(
      (next: boolean) => {
        if (!isControlled) setInternalOpen(next);
        if (next) onOpen?.();
        else onClose?.();
      },
      [isControlled, onOpen, onClose]
    );

    const value = React.useMemo<MenuContextValue>(
      () => ({
        isOpen: openState,
        open: () => setOpen(true),
        close: () => setOpen(false),
        toggle: () => setOpen(!openState),
        size,
        triggerRef,
        listRef,
        closeOnSelect,
        closeOnBlur,
      }),
      [openState, setOpen, size, closeOnSelect, closeOnBlur]
    );

    return (
      <MenuContext.Provider value={value}>
        <div
          ref={ref}
          className={["ds-menu", className].filter(Boolean).join(" ")}
          {...props}
        >
          {children}
        </div>
      </MenuContext.Provider>
    );
  }
);
Menu.displayName = "Menu";

/** Props for the MenuButton component. */
export interface MenuButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  children?: React.ReactNode;
}

export const MenuButton = React.forwardRef<HTMLButtonElement, MenuButtonProps>(
  ({ className = "", asChild = false, children, onClick, ...props }, ref) => {
    const ctx = useMenuContext();

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
        "aria-haspopup": "menu",
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
        className={["ds-menu__button", className].filter(Boolean).join(" ")}
        aria-haspopup="menu"
        aria-expanded={ctx.isOpen}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);
MenuButton.displayName = "MenuButton";

/** Props for the MenuList component. */
export interface MenuListProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  placement?: "bottom-start" | "bottom-end" | "top-start" | "top-end";
}

export const MenuList = React.forwardRef<HTMLDivElement, MenuListProps>(
  (
    { className = "", children, placement = "bottom-start", ...props },
    ref
  ) => {
    const ctx = useMenuContext();

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
        if (e.key === "Escape") {
          ctx.close();
        }
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
      "ds-menu__list",
      `ds-menu__list--${ctx.size}`,
      `ds-menu__list--${placement}`,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div
        ref={localRef}
        role="menu"
        className={classNames}
        {...props}
      >
        {children}
      </div>
    );
  }
);
MenuList.displayName = "MenuList";

/** Props for the MenuItem component. */
export interface MenuItemProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "value"> {
  isDisabled?: boolean;
  value?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  command?: React.ReactNode;
}

export const MenuItem = React.forwardRef<HTMLButtonElement, MenuItemProps>(
  (
    {
      className = "",
      isDisabled = false,
      onClick,
      value: _value,
      icon,
      command,
      children,
      ...props
    },
    ref
  ) => {
    const ctx = useMenuContext();

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
      if (isDisabled) {
        e.preventDefault();
        return;
      }
      onClick?.(e);
      if (ctx.closeOnSelect) ctx.close();
    };

    const classNames = [
      "ds-menu__item",
      `ds-menu__item--${ctx.size}`,
      isDisabled && "ds-menu__item--disabled",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        type="button"
        role="menuitem"
        disabled={isDisabled}
        className={classNames}
        onClick={handleClick}
        {...props}
      >
        {icon && <span className="ds-menu__item-icon">{icon}</span>}
        <span className="ds-menu__item-label">{children}</span>
        {command && <span className="ds-menu__item-command">{command}</span>}
      </button>
    );
  }
);
MenuItem.displayName = "MenuItem";

/** Props for the MenuDivider component. */
export interface MenuDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const MenuDivider = React.forwardRef<HTMLDivElement, MenuDividerProps>(
  ({ className = "", children, ...props }, ref) => (
    <div
      ref={ref}
      role="separator"
      aria-orientation="horizontal"
      className={["ds-menu__divider", className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </div>
  )
);
MenuDivider.displayName = "MenuDivider";

/** Props for the MenuGroup component. */
export interface MenuGroupProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode;
  children?: React.ReactNode;
}

export const MenuGroup = React.forwardRef<HTMLDivElement, MenuGroupProps>(
  ({ className = "", title, children, ...props }, ref) => (
    <div
      ref={ref}
      role="group"
      className={["ds-menu__group", className].filter(Boolean).join(" ")}
      {...props}
    >
      {title && <div className="ds-menu__group-title">{title}</div>}
      <div className="ds-menu__group-content">{children}</div>
    </div>
  )
);
MenuGroup.displayName = "MenuGroup";
