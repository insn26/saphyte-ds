import React from "react";
import "./Button.css";

export type ButtonSize = "2xs" | "xs" | "sm" | "md" | "lg";
export type ButtonVariant = "solid" | "subtle" | "surface" | "outline" | "ghost" | "plain";
export type ButtonColorPalette =
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

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  colorPalette?: ButtonColorPalette;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = "md",
      variant = "solid",
      colorPalette = "gray",
      loading = false,
      disabled = false,
      fullWidth = false,
      leftIcon,
      rightIcon,
      children,
      className = "",
      type = "button",
      ...props
    },
    ref
  ) => {
    const classNames = [
      "ds-button",
      `ds-button--${size}`,
      `ds-button--${variant}`,
      `ds-button--${colorPalette}`,
      loading && "ds-button--loading",
      fullWidth && "ds-button--full-width",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        type={type}
        className={classNames}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <span className="ds-button__spinner" aria-hidden="true" />}
        {!loading && leftIcon && (
          <span className="ds-button__icon ds-button__icon--left">{leftIcon}</span>
        )}
        {children && <span className="ds-button__label">{children}</span>}
        {!loading && rightIcon && (
          <span className="ds-button__icon ds-button__icon--right">{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
