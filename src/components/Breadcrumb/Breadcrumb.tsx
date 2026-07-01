import React from "react";
import "./Breadcrumb.css";

/** Size variant of the breadcrumb. */
export type BreadcrumbSize = "sm" | "md" | "lg";
/** Allowed characters for the breadcrumb separator. */
export type BreadcrumbSeparatorChar = "/" | ">" | "→" | "•" | "-";

/** Props for the Breadcrumb component. Use with Breadcrumb.Item, Breadcrumb.Link, Breadcrumb.Separator. */
export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  separator?: React.ReactNode;
  spacing?: string;
  size?: BreadcrumbSize;
  children?: React.ReactNode;
}

interface BreadcrumbContextValue {
  separator: React.ReactNode;
  size: BreadcrumbSize;
}

const BreadcrumbContext = React.createContext<BreadcrumbContextValue | null>(null);

const useBreadcrumbContext = (): BreadcrumbContextValue => {
  const ctx = React.useContext(BreadcrumbContext);
  if (!ctx) {
    throw new Error(
      "Breadcrumb subcomponents must be used within <Breadcrumb />"
    );
  }
  return ctx;
};

export const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  (
    {
      separator = "/",
      size = "md",
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const value = React.useMemo<BreadcrumbContextValue>(
      () => ({ separator, size }),
      [separator, size]
    );

    const items = React.Children.toArray(children);
    const lastIndex = items.length - 1;

    return (
      <BreadcrumbContext.Provider value={value}>
        <nav
          ref={ref}
          aria-label="Breadcrumb"
          className={["ds-breadcrumb", className].filter(Boolean).join(" ")}
          {...props}
        >
          <ol
            className={["ds-breadcrumb__list", `ds-breadcrumb__list--${size}`]
              .filter(Boolean)
              .join(" ")}
          >
            {items.map((child, index) => {
              const isLast = index === lastIndex;
              return (
                <React.Fragment
                  key={(React.isValidElement(child) && child.key) || index}
                >
                  <BreadcrumbItemContext.Provider value={{ isLast }}>
                    {child}
                  </BreadcrumbItemContext.Provider>
                  {!isLast && (
                    <li
                      className="ds-breadcrumb__separator"
                      aria-hidden="true"
                    >
                      {separator}
                    </li>
                  )}
                </React.Fragment>
              );
            })}
          </ol>
        </nav>
      </BreadcrumbContext.Provider>
    );
  }
);
Breadcrumb.displayName = "Breadcrumb";

interface BreadcrumbItemContextValue {
  isLast: boolean;
}

const BreadcrumbItemContext = React.createContext<BreadcrumbItemContextValue>({
  isLast: false,
});

/** Props for the BreadcrumbItem subcomponent. Represents a single breadcrumb item. */
export interface BreadcrumbItemProps
  extends React.LiHTMLAttributes<HTMLLIElement> {
  isCurrentPage?: boolean;
  children?: React.ReactNode;
}

export const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ className = "", isCurrentPage, children, ...props }, ref) => {
    const { isLast } = React.useContext(BreadcrumbItemContext);
    const isCurrent = isCurrentPage ?? isLast;
    return (
      <li
        ref={ref}
        className={["ds-breadcrumb__item", className].filter(Boolean).join(" ")}
        aria-current={isCurrent ? "page" : undefined}
        {...props}
      >
        {children}
      </li>
    );
  }
);
BreadcrumbItem.displayName = "BreadcrumbItem";

/** Props for the BreadcrumbLink subcomponent. Renders a clickable breadcrumb link. */
export interface BreadcrumbLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href?: string;
  isCurrentPage?: boolean;
  children?: React.ReactNode;
}

export const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  BreadcrumbLinkProps
>(({ className = "", isCurrentPage, href, children, ...props }, ref) => {
  const { isLast } = React.useContext(BreadcrumbItemContext);
  const isCurrent = isCurrentPage ?? isLast;

  if (isCurrent) {
    return (
      <span
        ref={ref as unknown as React.Ref<HTMLSpanElement>}
        aria-current="page"
        className={["ds-breadcrumb__current", className]
          .filter(Boolean)
          .join(" ")}
      >
        {children}
      </span>
    );
  }

  return (
    <a
      ref={ref}
      href={href}
      className={["ds-breadcrumb__link", className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </a>
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";

/** Props for the BreadcrumbSeparator subcomponent. Renders a custom separator between breadcrumb items. */
export interface BreadcrumbSeparatorProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

export const BreadcrumbSeparator = React.forwardRef<
  HTMLSpanElement,
  BreadcrumbSeparatorProps
>(({ className = "", children, ...props }, ref) => {
  const { separator } = useBreadcrumbContext();
  return (
    <li
      ref={ref as unknown as React.Ref<HTMLLIElement>}
      className={["ds-breadcrumb__separator", className]
        .filter(Boolean)
        .join(" ")}
      aria-hidden="true"
      {...(props as React.LiHTMLAttributes<HTMLLIElement>)}
    >
      {children ?? separator}
    </li>
  );
});
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
