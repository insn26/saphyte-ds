import React from "react";
import "./EmptyState.css";

/** Size variant for the EmptyState component. */
export type EmptyStateSize = "sm" | "md" | "lg";

/** Props for the root EmptyState component. */
export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: EmptyStateSize;
  children?: React.ReactNode;
}

export const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className = "", size = "md", children, ...props }, ref) => (
    <div
      ref={ref}
      className={[
        "ds-empty-state",
        `ds-empty-state--${size}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </div>
  )
);
EmptyState.displayName = "EmptyState";

/** Props for the EmptyState icon wrapper. */
export interface EmptyStateIconProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  size?: number;
}

export const EmptyStateIcon = React.forwardRef<HTMLDivElement, EmptyStateIconProps>(
  ({ className = "", children, size: _size, ...props }, ref) => (
    <div
      ref={ref}
      className={["ds-empty-state__icon", className].filter(Boolean).join(" ")}
      aria-hidden="true"
      {...props}
    >
      {children}
    </div>
  )
);
EmptyStateIcon.displayName = "EmptyStateIcon";

/** Props for the EmptyState title heading. */
export interface EmptyStateTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode;
}

export const EmptyStateTitle = React.forwardRef<
  HTMLHeadingElement,
  EmptyStateTitleProps
>(({ className = "", children, ...props }, ref) => (
  <h3
    ref={ref}
    className={["ds-empty-state__title", className].filter(Boolean).join(" ")}
    {...props}
  >
    {children}
  </h3>
));
EmptyStateTitle.displayName = "EmptyStateTitle";

/** Props for the EmptyState description text. */
export interface EmptyStateDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode;
}

export const EmptyStateDescription = React.forwardRef<
  HTMLParagraphElement,
  EmptyStateDescriptionProps
>(({ className = "", children, ...props }, ref) => (
  <p
    ref={ref}
    className={["ds-empty-state__description", className]
      .filter(Boolean)
      .join(" ")}
    {...props}
  >
    {children}
  </p>
));
EmptyStateDescription.displayName = "EmptyStateDescription";

/** Props for the EmptyState action area. */
export interface EmptyStateActionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const EmptyStateAction = React.forwardRef<HTMLDivElement, EmptyStateActionProps>(
  ({ className = "", children, ...props }, ref) => (
    <div
      ref={ref}
      className={["ds-empty-state__action", className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </div>
  )
);
EmptyStateAction.displayName = "EmptyStateAction";

export const DefaultEmptyIcon: React.FC = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="9" y1="13" x2="15" y2="13" />
    <line x1="9" y1="17" x2="13" y2="17" />
  </svg>
);
