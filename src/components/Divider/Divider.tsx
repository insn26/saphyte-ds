import React from "react";
import "./Divider.css";

export type DividerOrientation = "horizontal" | "vertical";
export type DividerVariant = "solid" | "dashed" | "dotted";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: DividerOrientation;
  variant?: DividerVariant;
  thickness?: number;
  color?: string;
  label?: React.ReactNode;
  labelPosition?: "start" | "center" | "end";
  children?: React.ReactNode;
}

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      orientation = "horizontal",
      variant = "solid",
      thickness = 1,
      color,
      label,
      labelPosition = "center",
      className = "",
      style,
      role,
      children,
      ...props
    },
    ref
  ) => {
    const isHorizontal = orientation === "horizontal";
    const hasLabel = label !== undefined || children !== undefined;

    const classNames = [
      "ds-divider",
      `ds-divider--${orientation}`,
      `ds-divider--${variant}`,
      hasLabel && "ds-divider--with-label",
      hasLabel && `ds-divider--label-${labelPosition}`,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const borderStyle: React.CSSProperties = {
      [isHorizontal ? "borderTopWidth" : "borderLeftWidth"]: `${thickness}px`,
      [isHorizontal ? "borderRightWidth" : "borderBottomWidth"]: 0,
      [isHorizontal ? "borderBottomWidth" : "borderRightWidth"]: 0,
      [isHorizontal ? "borderLeftWidth" : "borderTopWidth"]: 0,
      [isHorizontal ? "borderTopStyle" : "borderLeftStyle"]: variant,
      borderColor: color ?? "#e4e4e7",
    };

    if (!hasLabel) {
      const finalStyle: React.CSSProperties = {
        ...borderStyle,
        ...style,
      };
      if (isHorizontal) {
        finalStyle.width = "100%";
        finalStyle.height = 0;
      } else {
        finalStyle.width = 0;
        finalStyle.height = "100%";
        finalStyle.display = "inline-block";
      }
      return (
        <div
          ref={ref}
          className={classNames}
          role={role ?? "separator"}
          aria-orientation={orientation}
          style={finalStyle}
          {...props}
        />
      );
    }

    return (
      <div
        ref={ref}
        className={classNames}
        role={role ?? "separator"}
        aria-orientation={orientation}
        style={style}
        {...props}
      >
        <span
          className="ds-divider__line"
          style={{
            [isHorizontal ? "borderTopWidth" : "borderLeftWidth"]: `${thickness}px`,
            [isHorizontal ? "borderTopStyle" : "borderLeftStyle"]: variant,
            borderColor: color ?? "#e4e4e7",
          }}
          aria-hidden="true"
        />
        {(label || children) && (
          <span className="ds-divider__label">{label ?? children}</span>
        )}
        <span
          className="ds-divider__line"
          style={{
            [isHorizontal ? "borderTopWidth" : "borderLeftWidth"]: `${thickness}px`,
            [isHorizontal ? "borderTopStyle" : "borderLeftStyle"]: variant,
            borderColor: color ?? "#e4e4e7",
          }}
          aria-hidden="true"
        />
      </div>
    );
  }
);
Divider.displayName = "Divider";
