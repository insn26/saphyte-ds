import React from "react";
import "./Input.css";

export type InputSize = "xs" | "sm" | "md" | "lg";
export type InputVariant = "outline" | "filled" | "flushed";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: InputSize;
  variant?: InputVariant;
  invalid?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  errorText?: React.ReactNode;
  fullWidth?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = "md",
      variant = "outline",
      invalid = false,
      disabled,
      leftIcon,
      rightIcon,
      label,
      helperText,
      errorText,
      fullWidth = false,
      className = "",
      id,
      ...props
    },
    ref
  ) => {
    const reactId = React.useId();
    const inputId = id ?? `ds-input-${reactId}`;
    const describedById = errorText
      ? `${inputId}-error`
      : helperText
        ? `${inputId}-helper`
        : undefined;

    const wrapperClass = [
      "ds-input-wrapper",
      `ds-input-wrapper--${size}`,
      `ds-input-wrapper--${variant}`,
      invalid && "ds-input-wrapper--invalid",
      disabled && "ds-input-wrapper--disabled",
      fullWidth && "ds-input-wrapper--full-width",
    ]
      .filter(Boolean)
      .join(" ");

    const inputClass = [
      "ds-input",
      `ds-input--${size}`,
      `ds-input--${variant}`,
      invalid && "ds-input--invalid",
      leftIcon && "ds-input--has-left-icon",
      rightIcon && "ds-input--has-right-icon",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={fullWidth ? "ds-input-root ds-input-root--full" : "ds-input-root"}>
        {label && (
          <label className="ds-input__label" htmlFor={inputId}>
            {label}
          </label>
        )}
        <div className={wrapperClass}>
          {leftIcon && (
            <span className="ds-input__icon ds-input__icon--left" aria-hidden="true">
              {leftIcon}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            className={inputClass}
            disabled={disabled}
            aria-invalid={invalid || undefined}
            aria-describedby={describedById}
            {...props}
          />
          {rightIcon && (
            <span className="ds-input__icon ds-input__icon--right" aria-hidden="true">
              {rightIcon}
            </span>
          )}
        </div>
        {errorText ? (
          <p id={`${inputId}-error`} className="ds-input__error-text" role="alert">
            {errorText}
          </p>
        ) : helperText ? (
          <p id={`${inputId}-helper`} className="ds-input__helper-text">
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";
