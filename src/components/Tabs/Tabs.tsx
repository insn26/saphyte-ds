import React from "react";
import "./Tabs.css";

export type TabsVariant = "line" | "enclosed" | "soft-rounded";
export type TabsSize = "sm" | "md" | "lg";

export interface TabsContextValue {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  variant: TabsVariant;
  size: TabsSize;
  isLazy?: boolean;
}

const TabsContext = React.createContext<TabsContextValue | null>(null);

const TabIndexContext = React.createContext<number>(-1);

export const useTabsContext = (): TabsContextValue => {
  const ctx = React.useContext(TabsContext);
  if (!ctx) {
    throw new Error("Tabs compound components must be used within <Tabs />");
  }
  return ctx;
};

export const useTabIndex = (): number => React.useContext(TabIndexContext);

export interface TabsProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  defaultIndex?: number;
  index?: number;
  onChange?: (index: number) => void;
  variant?: TabsVariant;
  size?: TabsSize;
  isLazy?: boolean;
  children?: React.ReactNode;
}

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      defaultIndex = 0,
      index,
      onChange,
      variant = "line",
      size = "md",
      isLazy = false,
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const isControlled = index !== undefined;
    const [internalIndex, setInternalIndex] = React.useState(defaultIndex);
    const activeIndex = isControlled ? index : internalIndex;

    const setActiveIndex = React.useCallback(
      (next: number) => {
        if (!isControlled) setInternalIndex(next);
        onChange?.(next);
      },
      [isControlled, onChange]
    );

    const value = React.useMemo<TabsContextValue>(
      () => ({ activeIndex, setActiveIndex, variant, size, isLazy }),
      [activeIndex, setActiveIndex, variant, size, isLazy]
    );

    return (
      <TabsContext.Provider value={value}>
        <div
          ref={ref}
          className={["ds-tabs", className].filter(Boolean).join(" ")}
          {...props}
        >
          {children}
        </div>
      </TabsContext.Provider>
    );
  }
);
Tabs.displayName = "Tabs";

export interface TabListProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const TabList = React.forwardRef<HTMLDivElement, TabListProps>(
  ({ className = "", children, ...props }, ref) => {
    const { variant, size } = useTabsContext();

    const mapped = React.Children.map(children, (child, index) => {
      if (!React.isValidElement(child)) return child;
      return (
        <TabIndexContext.Provider key={child.key ?? index} value={index}>
          {child}
        </TabIndexContext.Provider>
      );
    });

    const classNames = [
      "ds-tabs__list",
      `ds-tabs__list--${variant}`,
      `ds-tabs__list--${size}`,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div ref={ref} role="tablist" className={classNames} {...props}>
        {mapped}
      </div>
    );
  }
);
TabList.displayName = "TabList";

export interface TabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isDisabled?: boolean;
  children?: React.ReactNode;
}

export const Tab = React.forwardRef<HTMLButtonElement, TabProps>(
  ({ className = "", isDisabled = false, children, onClick, ...props }, ref) => {
    const { activeIndex, setActiveIndex, variant, size } = useTabsContext();
    const index = useTabIndex();
    const isActive = index >= 0 && index === activeIndex;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!isDisabled && index >= 0) setActiveIndex(index);
      onClick?.(e);
    };

    const classNames = [
      "ds-tabs__tab",
      `ds-tabs__tab--${variant}`,
      `ds-tabs__tab--${size}`,
      isActive && "ds-tabs__tab--active",
      isDisabled && "ds-tabs__tab--disabled",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        role="tab"
        type="button"
        aria-selected={isActive}
        aria-disabled={isDisabled || undefined}
        tabIndex={isActive ? 0 : -1}
        disabled={isDisabled}
        className={classNames}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Tab.displayName = "Tab";

export interface TabPanelsProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const TabPanels = React.forwardRef<HTMLDivElement, TabPanelsProps>(
  ({ className = "", children, ...props }, ref) => {
    const { activeIndex, isLazy } = useTabsContext();
    const [mounted, setMounted] = React.useState<Set<number>>(
      () => (isLazy ? new Set([activeIndex]) : new Set())
    );

    React.useEffect(() => {
      if (isLazy) {
        setMounted((prev) => {
          if (prev.has(activeIndex)) return prev;
          const next = new Set(prev);
          next.add(activeIndex);
          return next;
        });
      }
    }, [activeIndex, isLazy]);

    const mapped = React.Children.map(children, (child, index) => {
      if (!React.isValidElement(child)) return child;
      const isActive = index === activeIndex;
      const shouldRender = isLazy ? mounted.has(index) : true;
      if (isLazy && !shouldRender) return null;
      return (
        <TabIndexContext.Provider key={child.key ?? index} value={index}>
          <div
            role="tabpanel"
            hidden={!isActive}
            className="ds-tabs__panel-wrapper"
          >
            {child}
          </div>
        </TabIndexContext.Provider>
      );
    });

    return (
      <div
        ref={ref}
        className={["ds-tabs__panels", className].filter(Boolean).join(" ")}
        {...props}
      >
        {mapped}
      </div>
    );
  }
);
TabPanels.displayName = "TabPanels";

export interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const TabPanel = React.forwardRef<HTMLDivElement, TabPanelProps>(
  ({ className = "", children, ...props }, ref) => {
    const classNames = ["ds-tabs__panel", className].filter(Boolean).join(" ");
    return (
      <div ref={ref} className={classNames} {...props}>
        {children}
      </div>
    );
  }
);
TabPanel.displayName = "TabPanel";
