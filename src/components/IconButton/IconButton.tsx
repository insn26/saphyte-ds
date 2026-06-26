import React from "react";
import "./IconButton.css";

export type IconButtonSize = "2xs" | "xs" | "sm" | "md" | "lg";
export type IconButtonVariant = "solid" | "subtle" | "surface" | "outline" | "ghost";
export type IconButtonColorPalette =
  | "gray"
  | "danger"
  | "pink"
  | "purple"
  | "cyan"
  | "saphyte"
  | "info"
  | "teal"
  | "success"
  | "yellow"
  | "warning";

export interface IconButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  size?: IconButtonSize;
  variant?: IconButtonVariant;
  colorPalette?: IconButtonColorPalette;
  "aria-label": string;
  type?: "button" | "submit" | "reset";
}

const SIZE_DIMENSIONS: Record<IconButtonSize, number> = {
  "2xs": 20,
  xs: 24,
  sm: 28,
  md: 32,
  lg: 40,
};

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      size = "md",
      variant = "subtle",
      colorPalette = "gray",
      className = "",
      type = "button",
      style,
      ...props
    },
    ref
  ) => {
    const dim = SIZE_DIMENSIONS[size];
    const classNames = [
      "ds-icon-button",
      `ds-icon-button--${size}`,
      `ds-icon-button--${variant}`,
      `ds-icon-button--${colorPalette}`,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const iconStyle: React.CSSProperties = {
      width: dim,
      height: dim,
      ...style,
    };

    return (
      <button
        ref={ref}
        type={type}
        className={classNames}
        style={iconStyle}
        {...props}
      />
    );
  }
);

IconButton.displayName = "IconButton";
