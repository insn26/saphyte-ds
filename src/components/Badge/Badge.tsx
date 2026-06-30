import React from "react";
import "./Badge.css";

/** Size variant of the badge. */
export type BadgeSize = "sm" | "md" | "lg";
/** Visual style variant of the badge. */
export type BadgeVariant = "solid" | "subtle" | "outline";
/** Color palette options for the badge. */
export type BadgeColorPalette =
  | "gray"
  | "danger"
  | "success"
  | "warning"
  | "info"
  | "saphyte";

/** Props for the Badge component. Displays a small label or status indicator. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: BadgeSize;
  variant?: BadgeVariant;
  colorPalette?: BadgeColorPalette;
  children?: React.ReactNode;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      size = "md",
      variant = "subtle",
      colorPalette = "gray",
      children,
      className = "",
      ...props
    },
    ref
  ) => {
    const classNames = [
      "ds-badge",
      `ds-badge--${size}`,
      `ds-badge--${variant}`,
      `ds-badge--${colorPalette}`,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <span ref={ref} className={classNames} {...props}>
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";
