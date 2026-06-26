import React from "react";
import "./Skeleton.css";

export type SkeletonSize = "sm" | "md" | "lg" | "full";
export type SkeletonShape = "text" | "circle" | "rect";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: SkeletonSize;
  shape?: SkeletonShape;
  width?: number | string;
  height?: number | string;
}

const SIZE_DIMENSIONS: Record<
  SkeletonSize,
  { width: string; height: string }
> = {
  sm: { width: "120px", height: "12px" },
  md: { width: "200px", height: "16px" },
  lg: { width: "320px", height: "20px" },
  full: { width: "100%", height: "16px" },
};

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      size = "md",
      shape = "text",
      width,
      height,
      className = "",
      style,
      ...props
    },
    ref
  ) => {
    const dims = SIZE_DIMENSIONS[size];
    const isCircle = shape === "circle";

    const classNames = [
      "ds-skeleton",
      `ds-skeleton--${shape}`,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const finalStyle: React.CSSProperties = {
      width: width ?? (isCircle ? dims.height : dims.width),
      height: height ?? dims.height,
      borderRadius: isCircle ? "50%" : shape === "text" ? "4px" : "6px",
      ...style,
    };

    return <div ref={ref} className={classNames} style={finalStyle} {...props} />;
  }
);

Skeleton.displayName = "Skeleton";
