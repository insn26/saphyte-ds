import React from "react";
import "./Stat.css";

export type StatTrend = "up" | "down" | "flat";

export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const Stat = React.forwardRef<HTMLDivElement, StatProps>(
  ({ className = "", children, ...props }, ref) => (
    <div
      ref={ref}
      role="group"
      className={["ds-stat", className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </div>
  )
);
Stat.displayName = "Stat";

export interface StatLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const StatLabel = React.forwardRef<HTMLDivElement, StatLabelProps>(
  ({ className = "", children, ...props }, ref) => (
    <div
      ref={ref}
      className={["ds-stat__label", className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </div>
  )
);
StatLabel.displayName = "StatLabel";

export interface StatNumberProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const StatNumber = React.forwardRef<HTMLDivElement, StatNumberProps>(
  ({ className = "", children, ...props }, ref) => (
    <div
      ref={ref}
      className={["ds-stat__number", className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </div>
  )
);
StatNumber.displayName = "StatNumber";

export interface StatHelpTextProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const StatHelpText = React.forwardRef<HTMLDivElement, StatHelpTextProps>(
  ({ className = "", children, ...props }, ref) => (
    <div
      ref={ref}
      className={["ds-stat__help-text", className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </div>
  )
);
StatHelpText.displayName = "StatHelpText";

export interface StatArrowProps extends React.SVGAttributes<SVGSVGElement> {
  type?: StatTrend;
}

export const StatArrow = React.forwardRef<SVGSVGElement, StatArrowProps>(
  ({ type = "up", className = "", ...props }, ref) => {
    const classNames = [
      "ds-stat__arrow",
      `ds-stat__arrow--${type}`,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    if (type === "up") {
      return (
        <svg
          ref={ref}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={classNames}
          aria-label="Increased"
          {...props}
        >
          <polyline points="6 15 12 9 18 15" />
        </svg>
      );
    }
    if (type === "down") {
      return (
        <svg
          ref={ref}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={classNames}
          aria-label="Decreased"
          {...props}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      );
    }
    return (
      <svg
        ref={ref}
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={classNames}
        aria-label="No change"
        {...props}
      >
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    );
  }
);
StatArrow.displayName = "StatArrow";

export interface StatGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const StatGroup = React.forwardRef<HTMLDivElement, StatGroupProps>(
  ({ className = "", children, ...props }, ref) => (
    <div
      ref={ref}
      className={["ds-stat-group", className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </div>
  )
);
StatGroup.displayName = "StatGroup";
