import React from "react";
import "./Separator.css";

export type SeparatorOrientation = "horizontal" | "vertical";

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: SeparatorOrientation;
  label?: React.ReactNode;
}

export const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  (
    { orientation = "horizontal", label, className = "", role, ...props },
    ref
  ) => {
    const classNames = [
      "ds-separator",
      `ds-separator--${orientation}`,
      label && "ds-separator--with-label",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    if (!label) {
      return (
        <div
          ref={ref}
          className={classNames}
          role={role ?? "separator"}
          aria-orientation={orientation}
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
        {...props}
      >
        <span className="ds-separator__line" aria-hidden="true" />
        <span className="ds-separator__label">{label}</span>
        <span className="ds-separator__line" aria-hidden="true" />
      </div>
    );
  }
);

Separator.displayName = "Separator";
