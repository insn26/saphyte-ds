import React from "react";
import "./Kbd.css";

/** Props for the Kbd component. */
export interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "subtle" | "solid";
  size?: "xs" | "sm" | "md";
  children?: React.ReactNode;
}

export const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  (
    { variant = "default", size = "sm", className = "", children, ...props },
    ref
  ) => {
    const classNames = [
      "ds-kbd",
      `ds-kbd--${variant}`,
      `ds-kbd--${size}`,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <kbd ref={ref as React.Ref<HTMLElement>} className={classNames} {...props}>
        {children}
      </kbd>
    );
  }
);
Kbd.displayName = "Kbd";

/** Props for the KbdGroup component. */
export interface KbdGroupProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

export const KbdGroup = React.forwardRef<HTMLSpanElement, KbdGroupProps>(
  ({ className = "", children, ...props }, ref) => (
    <span
      ref={ref}
      className={["ds-kbd-group", className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </span>
  )
);
KbdGroup.displayName = "KbdGroup";
