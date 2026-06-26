import React from "react";
import "./Radio.css";

export type RadioSize = "sm" | "md" | "lg";

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  size?: RadioSize;
  label?: React.ReactNode;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      size = "md",
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
    const inputId = id ?? `ds-radio-${reactId}`;

    const circleClass = [
      "ds-radio__circle",
      `ds-radio__circle--${size}`,
      checked && "ds-radio__circle--checked",
      disabled && "ds-radio__circle--disabled",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <label
        className={["ds-radio", disabled && "ds-radio--disabled", className]
          .filter(Boolean)
          .join(" ")}
        htmlFor={inputId}
      >
        <span className="ds-radio__control">
          <input
            ref={ref}
            id={inputId}
            type="radio"
            className="ds-radio__input"
            checked={checked}
            disabled={disabled}
            {...props}
          />
          <span className={circleClass} aria-hidden="true">
            <span className="ds-radio__dot" />
          </span>
        </span>
        {label && <span className="ds-radio__label">{label}</span>}
      </label>
    );
  }
);

Radio.displayName = "Radio";
