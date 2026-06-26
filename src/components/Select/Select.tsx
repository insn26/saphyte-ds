import React from "react";
import "./Select.css";

export type SelectSize = "xs" | "sm" | "md" | "lg";
export type SelectVariant = "outline" | "filled" | "flushed";

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  size?: SelectSize;
  variant?: SelectVariant;
  invalid?: boolean;
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  errorText?: React.ReactNode;
  fullWidth?: boolean;
  options?: SelectOption[];
  placeholder?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      size = "md",
      variant = "outline",
      invalid = false,
      disabled,
      label,
      helperText,
      errorText,
      fullWidth = false,
      options,
      placeholder,
      className = "",
      id,
      children,
      ...props
    },
    ref
  ) => {
    const reactId = React.useId();
    const selectId = id ?? `ds-select-${reactId}`;
    const describedById = errorText
      ? `${selectId}-error`
      : helperText
        ? `${selectId}-helper`
        : undefined;

    const wrapperClass = [
      "ds-select-wrapper",
      `ds-select-wrapper--${size}`,
      `ds-select-wrapper--${variant}`,
      invalid && "ds-select-wrapper--invalid",
      disabled && "ds-select-wrapper--disabled",
      fullWidth && "ds-select-wrapper--full-width",
    ]
      .filter(Boolean)
      .join(" ");

    const selectClass = [
      "ds-select",
      `ds-select--${size}`,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={fullWidth ? "ds-select-root ds-select-root--full" : "ds-select-root"}>
        {label && (
          <label className="ds-select__label" htmlFor={selectId}>
            {label}
          </label>
        )}
        <div className={wrapperClass}>
          <select
            ref={ref}
            id={selectId}
            className={selectClass}
            disabled={disabled}
            aria-invalid={invalid || undefined}
            aria-describedby={describedById}
            {...props}
          >
            {placeholder && (
              <option value="" disabled hidden>
                {placeholder}
              </option>
            )}
            {options
              ? options.map((opt) => (
                  <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                    {opt.label}
                  </option>
                ))
              : children}
          </select>
          <span className="ds-select__chevron" aria-hidden="true">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </span>
        </div>
        {errorText ? (
          <p id={`${selectId}-error`} className="ds-select__error-text" role="alert">
            {errorText}
          </p>
        ) : helperText ? (
          <p id={`${selectId}-helper`} className="ds-select__helper-text">
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);

Select.displayName = "Select";
