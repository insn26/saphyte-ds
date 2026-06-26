import React from "react";
import "./Switch.css";

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: React.ReactNode;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ disabled = false, checked, label, className = "", id, ...props }, ref) => {
    const reactId = React.useId();
    const inputId = id ?? `ds-switch-${reactId}`;

    const trackClass = [
      "ds-switch__track",
      checked && "ds-switch__track--on",
      disabled && "ds-switch__track--disabled",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <label
        className={["ds-switch", disabled && "ds-switch--disabled", className]
          .filter(Boolean)
          .join(" ")}
        htmlFor={inputId}
      >
        <span className="ds-switch__control">
          <input
            ref={ref}
            id={inputId}
            type="checkbox"
            role="switch"
            className="ds-switch__input"
            checked={checked}
            disabled={disabled}
            {...props}
          />
          <span className={trackClass} aria-hidden="true">
            <span className="ds-switch__thumb" />
          </span>
        </span>
        {label && <span className="ds-switch__label">{label}</span>}
      </label>
    );
  }
);

Switch.displayName = "Switch";
