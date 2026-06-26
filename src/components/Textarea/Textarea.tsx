import React from "react";
import "./Textarea.css";

export type TextareaVariant = "outline" | "filled" | "flushed";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: TextareaVariant;
  invalid?: boolean;
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  errorText?: React.ReactNode;
  fullWidth?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      variant = "outline",
      invalid = false,
      disabled,
      label,
      helperText,
      errorText,
      fullWidth = false,
      className = "",
      id,
      rows = 4,
      ...props
    },
    ref
  ) => {
    const reactId = React.useId();
    const textareaId = id ?? `ds-textarea-${reactId}`;
    const describedById = errorText
      ? `${textareaId}-error`
      : helperText
        ? `${textareaId}-helper`
        : undefined;

    const wrapperClass = [
      "ds-textarea-wrapper",
      `ds-textarea-wrapper--${variant}`,
      invalid && "ds-textarea-wrapper--invalid",
      disabled && "ds-textarea-wrapper--disabled",
      fullWidth && "ds-textarea-wrapper--full-width",
    ]
      .filter(Boolean)
      .join(" ");

    const textareaClass = [
      "ds-textarea",
      `ds-textarea--${variant}`,
      invalid && "ds-textarea--invalid",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={fullWidth ? "ds-textarea-root ds-textarea-root--full" : "ds-textarea-root"}>
        {label && (
          <label className="ds-textarea__label" htmlFor={textareaId}>
            {label}
          </label>
        )}
        <div className={wrapperClass}>
          <textarea
            ref={ref}
            id={textareaId}
            className={textareaClass}
            rows={rows}
            disabled={disabled}
            aria-invalid={invalid || undefined}
            aria-describedby={describedById}
            {...props}
          />
        </div>
        {errorText ? (
          <p id={`${textareaId}-error`} className="ds-textarea__error-text" role="alert">
            {errorText}
          </p>
        ) : helperText ? (
          <p id={`${textareaId}-helper`} className="ds-textarea__helper-text">
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
