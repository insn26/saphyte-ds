import React from "react";
import "./Tooltip.css";

/** Position of the tooltip relative to the trigger element. */
export type TooltipPosition = "top" | "right" | "bottom" | "left";
/** Visual variant for the Tooltip component. */
export type TooltipVariant = "solid" | "subtle";

/** Props for the Tooltip component. */
export interface TooltipProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "content"> {
  label: React.ReactNode;
  position?: TooltipPosition;
  variant?: TooltipVariant;
  open?: boolean;
  defaultOpen?: boolean;
  disabled?: boolean;
  children: React.ReactElement;
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      label,
      position = "top",
      variant = "solid",
      open,
      defaultOpen = false,
      disabled = false,
      children,
      className = "",
      ...props
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
    const isControlled = open !== undefined;
    const visible = isControlled ? open : internalOpen;
    const showTooltip = visible && !disabled && Boolean(label);

    const handleShow = () => {
      if (!isControlled) setInternalOpen(true);
    };

    const handleHide = () => {
      if (!isControlled) setInternalOpen(false);
    };

    const tooltipClass = [
      "ds-tooltip",
      `ds-tooltip--${position}`,
      `ds-tooltip--${variant}`,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const clonedChild = React.cloneElement(children, {
      onMouseEnter: (e: React.MouseEvent) => {
        handleShow();
        const original = (children.props as { onMouseEnter?: (e: React.MouseEvent) => void })
          .onMouseEnter;
        original?.(e);
      },
      onMouseLeave: (e: React.MouseEvent) => {
        handleHide();
        const original = (children.props as { onMouseLeave?: (e: React.MouseEvent) => void })
          .onMouseLeave;
        original?.(e);
      },
      onFocus: (e: React.FocusEvent) => {
        handleShow();
        const original = (children.props as { onFocus?: (e: React.FocusEvent) => void })
          .onFocus;
        original?.(e);
      },
      onBlur: (e: React.FocusEvent) => {
        handleHide();
        const original = (children.props as { onBlur?: (e: React.FocusEvent) => void })
          .onBlur;
        original?.(e);
      },
    });

    return (
      <div ref={ref} className="ds-tooltip-wrapper" {...props}>
        {clonedChild}
        {showTooltip && (
          <div role="tooltip" className={tooltipClass}>
            <span className="ds-tooltip__arrow" aria-hidden="true" />
            <span className="ds-tooltip__label">{label}</span>
          </div>
        )}
      </div>
    );
  }
);

Tooltip.displayName = "Tooltip";
