import React from "react";
import "./Checkbox.css";

/** Size variant for the Checkbox component. */
export type CheckboxSize = "sm" | "md" | "lg";

/** Props for the Checkbox component. Supports indeterminate state and labels. */
export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  size?: CheckboxSize;
  indeterminate?: boolean;
  label?: React.ReactNode;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      size = "md",
      indeterminate = false,
      disabled = false,
      checked,
      label,
      className = "",
      id,
      ...props
    },
    ref
  ) => {
    const reactId = React.useId();
    const inputId = id ?? `ds-checkbox-${reactId}`;
    const inputRef = React.useRef<HTMLInputElement | null>(null);

    React.useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    const setRefs = (node: HTMLInputElement | null) => {
      inputRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) {
        (ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
      }
    };

    const isChecked = checked || false;

    const boxClass = [
      "ds-checkbox__box",
      `ds-checkbox__box--${size}`,
      isChecked && "ds-checkbox__box--checked",
      indeterminate && "ds-checkbox__box--indeterminate",
      disabled && "ds-checkbox__box--disabled",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <label
        className={["ds-checkbox", disabled && "ds-checkbox--disabled", className]
          .filter(Boolean)
          .join(" ")}
        htmlFor={inputId}
      >
        <span className="ds-checkbox__control">
          <input
            ref={setRefs}
            id={inputId}
            type="checkbox"
            className="ds-checkbox__input"
            checked={isChecked}
            disabled={disabled}
            {...props}
          />
          <span className={boxClass} aria-hidden="true">
            {indeterminate ? (
              <svg viewBox="0 0 16 16" className="ds-checkbox__icon" fill="none">
                <path
                  d="M3.5 8h9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : isChecked ? (
              <svg viewBox="0 0 16 16" className="ds-checkbox__icon" fill="none">
                <path
                  d="M3.5 8.5l3 3 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : null}
          </span>
        </span>
        {label && <span className="ds-checkbox__label">{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";
