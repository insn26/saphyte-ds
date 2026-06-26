import React from "react";
import "./Progress.css";

export type ProgressSize = "xs" | "sm" | "md" | "lg";
export type ProgressColor = "saphyte" | "success" | "warning" | "error";

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: ProgressSize;
  color?: ProgressColor;
  value?: number;
  min?: number;
  max?: number;
  showLabel?: boolean;
  label?: React.ReactNode;
  striped?: boolean;
  animated?: boolean;
  indeterminate?: boolean;
}

const SIZE_HEIGHTS: Record<ProgressSize, string> = {
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "12px",
};

function clamp(value: number, min: number, max: number): number {
  if (Number.isNaN(value)) return 0;
  return Math.min(max, Math.max(min, value));
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      size = "md",
      color = "saphyte",
      value = 0,
      min = 0,
      max = 100,
      showLabel = false,
      label,
      striped = false,
      animated = false,
      indeterminate = false,
      className = "",
      style,
      ...props
    },
    ref
  ) => {
    const safeMax = max - min;
    const percent = indeterminate
      ? null
      : Math.round((clamp(value, min, max) - min) / safeMax * 100);

    const classNames = [
      "ds-progress",
      `ds-progress--${size}`,
      indeterminate && "ds-progress--indeterminate",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const fillClass = [
      "ds-progress__fill",
      `ds-progress__fill--${color}`,
      striped && "ds-progress__fill--striped",
      animated && "ds-progress__fill--animated",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className="ds-progress-root" ref={ref} {...props}>
        {(label || showLabel) && (
          <div className="ds-progress__header">
            <span className="ds-progress__label">{label}</span>
            {showLabel && !indeterminate && (
              <span className="ds-progress__value">{percent}%</span>
            )}
          </div>
        )}
        <div
          className={classNames}
          style={{ height: SIZE_HEIGHTS[size], ...style }}
          role="progressbar"
          aria-valuemin={indeterminate ? undefined : min}
          aria-valuemax={indeterminate ? undefined : max}
          aria-valuenow={indeterminate ? undefined : value}
          aria-label={typeof label === "string" ? label : "Progress"}
        >
          <div
            className={fillClass}
            style={indeterminate ? undefined : { width: `${percent}%` }}
          />
        </div>
      </div>
    );
  }
);

Progress.displayName = "Progress";
