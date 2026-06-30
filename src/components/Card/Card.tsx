import React from "react";
import "./Card.css";

/** Visual variant of the card. */
export type CardVariant = "elevated" | "outline" | "subtle" | "solid";
/** Size variant of the card. */
export type CardSize = "sm" | "md" | "lg";

/** Props for the Card component. Use with Card.Header, Card.Body, Card.Footer. */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  size?: CardSize;
  fullWidth?: boolean;
  children?: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = "outline",
      size = "md",
      fullWidth = false,
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const classNames = [
      "ds-card",
      `ds-card--${variant}`,
      `ds-card--${size}`,
      fullWidth && "ds-card--full-width",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div ref={ref} className={classNames} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

/** Props for the CardHeader subcomponent. Renders the card header area. */
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className = "", children, ...props }, ref) => (
    <div ref={ref} className={["ds-card__header", className].filter(Boolean).join(" ")} {...props}>
      {children}
    </div>
  )
);
CardHeader.displayName = "CardHeader";

/** Props for the CardBody subcomponent. Renders the card body content area. */
export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className = "", children, ...props }, ref) => (
    <div ref={ref} className={["ds-card__body", className].filter(Boolean).join(" ")} {...props}>
      {children}
    </div>
  )
);
CardBody.displayName = "CardBody";

/** Props for the CardFooter subcomponent. Renders the card footer area. */
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className = "", children, ...props }, ref) => (
    <div ref={ref} className={["ds-card__footer", className].filter(Boolean).join(" ")} {...props}>
      {children}
    </div>
  )
);
CardFooter.displayName = "CardFooter";
