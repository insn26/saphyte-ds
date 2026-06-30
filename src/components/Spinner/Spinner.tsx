import React from "react";
import "./Spinner.css";

/** Size variant for the Spinner component. */
export type SpinnerSize = "xs" | "sm" | "md" | "lg" | "xl";

/** Props for the Spinner component. */
export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: SpinnerSize;
  label?: React.ReactNode;
  thickness?: number;
}

const SIZE_DIMENSIONS: Record<SpinnerSize, number> = {
  xs: 12,
  sm: 16,
  md: 24,
  lg: 32,
  xl: 48,
};

export const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
  (
    { size = "md", label, thickness, className = "", style, ...props },
    ref
  ) => {
    const dim = SIZE_DIMENSIONS[size];
    const borderWidth = thickness ?? (size === "xs" ? 1.5 : 2);

    const spinnerClass = [
      "ds-spinner",
      `ds-spinner--${size}`,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const spinnerStyle: React.CSSProperties = {
      width: dim,
      height: dim,
      borderWidth,
      ...style,
    };

    return (
      <span ref={ref} className="ds-spinner-root" role="status" {...props}>
        <span className={spinnerClass} style={spinnerStyle} aria-hidden="true" />
        {label && <span className="ds-spinner__label">{label}</span>}
      </span>
    );
  }
);

Spinner.displayName = "Spinner";
