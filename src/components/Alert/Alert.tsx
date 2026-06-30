import React from "react";
import "./Alert.css";

/** Status variant of the alert. Determines the color and icon. */
export type AlertStatus = "info" | "success" | "warning" | "error";
/** Visual style variant of the alert. */
export type AlertVariant = "subtle" | "solid" | "outline" | "left-accent";

/** Props for the Alert component. Displays a contextual notification message. */
export interface AlertProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  status?: AlertStatus;
  variant?: AlertVariant;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
}

const DefaultIcon: React.FC<{ status: AlertStatus }> = ({ status }) => {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (status) {
    case "success":
      return (
        <svg {...common}>
          <path d="M20 6L9 17l-5-5" />
        </svg>
      );
    case "warning":
      return (
        <svg {...common}>
          <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      );
    case "error":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
      );
    case "info":
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      );
  }
};

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      status = "info",
      variant = "subtle",
      icon,
      title,
      description,
      closable = false,
      onClose,
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const [closed, setClosed] = React.useState(false);
    if (closed) return null;

    const classNames = [
      "ds-alert",
      `ds-alert--${status}`,
      `ds-alert--${variant}`,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const handleClose = () => {
      setClosed(true);
      onClose?.();
    };

    return (
      <div ref={ref} role="alert" className={classNames} {...props}>
        <div className="ds-alert__icon" aria-hidden="true">
          {icon ?? <DefaultIcon status={status} />}
        </div>
        <div className="ds-alert__content">
          {title && <div className="ds-alert__title">{title}</div>}
          {description && <div className="ds-alert__description">{description}</div>}
          {children}
        </div>
        {closable && (
          <button
            type="button"
            className="ds-alert__close"
            aria-label="Close alert"
            onClick={handleClose}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>
    );
  }
);

Alert.displayName = "Alert";
