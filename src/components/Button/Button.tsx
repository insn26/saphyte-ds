import React from "react";
import "./Button.css";

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  variant?: "primary" | "default" | "dashed" | "text" | "link";
  size?: "small" | "default" | "large";
  ghost?: boolean;
  iconOnly?: boolean;
  shape?: "default" | "circle";
  danger?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "default",
  ghost = false,
  iconOnly = false,
  shape = "default",
  danger = false,
  loading = false,
  icon,
  iconPosition = "left",
  disabled,
  className = "",
  children,
  ...props
}) => {
  const classNames = [
    "ds-btn",
    `ds-btn--${variant}`,
    `ds-btn--${size}`,
    ghost && "ds-btn--ghost",
    iconOnly && "ds-btn--icon-only",
    shape === "circle" && "ds-btn--circle",
    danger && "ds-btn--danger",
    loading && "ds-btn--loading",
    disabled && "ds-btn--disabled",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type="button"
      className={classNames}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <span className="ds-btn__spinner" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="31.4 31.4" />
          </svg>
        </span>
      )}
      {!loading && icon && iconPosition === "left" && (
        <span className="ds-btn__icon ds-btn__icon--left">{icon}</span>
      )}
      {!iconOnly && children && <span className="ds-btn__label">{children}</span>}
      {!loading && icon && iconPosition === "right" && (
        <span className="ds-btn__icon ds-btn__icon--right">{icon}</span>
      )}
    </button>
  );
};
