import React from "react";
import "./Stack.css";

export type StackDirection = "row" | "column" | "row-reverse" | "column-reverse";
export type StackAlign =
  | "start"
  | "center"
  | "end"
  | "stretch"
  | "baseline";
export type StackJustify =
  | "start"
  | "center"
  | "end"
  | "space-between"
  | "space-around"
  | "space-evenly";
export type StackWrap = "nowrap" | "wrap" | "wrap-reverse";

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: StackDirection;
  spacing?: string | number;
  align?: StackAlign;
  justify?: StackJustify;
  wrap?: StackWrap;
  inline?: boolean;
  as?: React.ElementType;
  children?: React.ReactNode;
}

const SPACING_SCALE = 4;

const resolveSpacing = (value: string | number | undefined): string => {
  if (value === undefined) return "0px";
  if (typeof value === "number") return `${value * SPACING_SCALE}px`;
  return value;
};

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  (
    {
      direction = "column",
      spacing = 0,
      align,
      justify,
      wrap = "nowrap",
      inline = false,
      as,
      className = "",
      style,
      children,
      ...props
    },
    ref
  ) => {
    const Component = (as ?? "div") as React.ElementType;

    const finalStyle: React.CSSProperties = {
      display: inline ? "inline-flex" : "flex",
      flexDirection: direction,
      flexWrap: wrap,
      gap: resolveSpacing(spacing),
      alignItems: align,
      justifyContent: justify,
      ...style,
    };

    return (
      <Component
        ref={ref}
        className={["ds-stack", className].filter(Boolean).join(" ")}
        style={finalStyle}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Stack.displayName = "Stack";

export interface VStackProps extends Omit<StackProps, "direction"> {
  spacing?: string | number;
  children?: React.ReactNode;
}

export const VStack = React.forwardRef<HTMLDivElement, VStackProps>(
  ({ spacing = 0, children, ...props }, ref) => (
    <Stack
      ref={ref}
      direction="column"
      spacing={spacing}
      {...props}
    >
      {children}
    </Stack>
  )
);
VStack.displayName = "VStack";

export interface HStackProps extends Omit<StackProps, "direction"> {
  spacing?: string | number;
  children?: React.ReactNode;
}

export const HStack = React.forwardRef<HTMLDivElement, HStackProps>(
  ({ spacing = 0, children, ...props }, ref) => (
    <Stack
      ref={ref}
      direction="row"
      spacing={spacing}
      {...props}
    >
      {children}
    </Stack>
  )
);
HStack.displayName = "HStack";
