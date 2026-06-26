import React from "react";
import "./Steps.css";

export type StepsOrientation = "horizontal" | "vertical";
export type StepsStatus = "active" | "complete" | "incomplete";
export type StepsSize = "sm" | "md" | "lg";
export type StepsColorPalette = "gray" | "saphyte";

interface StepsContextValue {
  orientation: StepsOrientation;
  size: StepsSize;
  colorPalette: StepsColorPalette;
  activeIndex: number;
  isLast: (index: number, total: number) => boolean;
}

const StepsContext = React.createContext<StepsContextValue | null>(null);

const useStepsContext = (): StepsContextValue => {
  const ctx = React.useContext(StepsContext);
  if (!ctx) {
    throw new Error("Step subcomponents must be used within <Steps />");
  }
  return ctx;
};

export interface StepsProps
  extends Omit<React.HTMLAttributes<HTMLOListElement>, "children"> {
  activeStep: number;
  orientation?: StepsOrientation;
  size?: StepsSize;
  colorPalette?: StepsColorPalette;
  responsive?: boolean;
  children?: React.ReactNode;
}

export const Steps = React.forwardRef<HTMLOListElement, StepsProps>(
  (
    {
      activeStep = 0,
      orientation = "horizontal",
      size = "md",
      colorPalette = "saphyte",
      responsive = true,
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const childArray = React.Children.toArray(children);
    const total = childArray.length;

    const value = React.useMemo<StepsContextValue>(
      () => ({
        orientation,
        size,
        colorPalette,
        activeIndex: activeStep,
        isLast: (i: number) => i === total - 1,
      }),
      [orientation, size, colorPalette, activeStep, total]
    );

    return (
      <StepsContext.Provider value={value}>
        <ol
          ref={ref}
          className={[
            "ds-steps",
            `ds-steps--${orientation}`,
            `ds-steps--${size}`,
            responsive && "ds-steps--responsive",
            className,
          ]
            .filter(Boolean)
            .join(" ")}
          {...props}
        >
          {childArray.map((child, index) => {
            if (!React.isValidElement(child)) return child;
            const status: StepsStatus =
              index < activeStep
                ? "complete"
                : index === activeStep
                  ? "active"
                  : "incomplete";
            return React.cloneElement(
              child as React.ReactElement<{ index: number; status: StepsStatus }>,
              { index, status }
            );
          })}
        </ol>
      </StepsContext.Provider>
    );
  }
);
Steps.displayName = "Steps";

export interface StepProps
  extends Omit<React.LiHTMLAttributes<HTMLLIElement>, "title"> {
  index?: number;
  status?: StepsStatus;
  isDisabled?: boolean;
  children?: React.ReactNode;
  description?: React.ReactNode;
  title?: React.ReactNode;
  icon?: React.ReactNode;
}

export const Step = React.forwardRef<HTMLLIElement, StepProps>(
  (
    {
      className = "",
      isDisabled = false,
      status = "incomplete",
      index = 0,
      children,
      title,
      description,
      icon,
      ...props
    },
    ref
  ) => {
    const { size, colorPalette } = useStepsContext();

    const classNames = [
      "ds-steps__step",
      `ds-steps__step--${status}`,
      `ds-steps__step--${size}`,
      `ds-steps__step--${colorPalette}`,
      isDisabled && "ds-steps__step--disabled",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <li
        ref={ref}
        className={classNames}
        aria-current={status === "active" ? "step" : undefined}
        {...props}
      >
        <div className="ds-steps__indicator-wrap">
          <div className="ds-steps__indicator">
            <StepIcon status={status} index={index} icon={icon} />
          </div>
          <div className="ds-steps__connector" aria-hidden="true" />
        </div>
        <div className="ds-steps__content">
          {children ?? (
            <>
              {title && <div className="ds-steps__title">{title}</div>}
              {description && (
                <div className="ds-steps__description">{description}</div>
              )}
            </>
          )}
        </div>
      </li>
    );
  }
);
Step.displayName = "Step";

export interface StepIconProps extends React.HTMLAttributes<HTMLDivElement> {
  status?: StepsStatus;
  index?: number;
  icon?: React.ReactNode;
}

export const StepIcon = React.forwardRef<HTMLDivElement, StepIconProps>(
  ({ className = "", status = "incomplete", index = 0, icon, ...props }, ref) => {
    const { size } = useStepsContext();

    const classNames = [
      "ds-steps__icon",
      `ds-steps__icon--${status}`,
      `ds-steps__icon--${size}`,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    let content: React.ReactNode = null;
    if (icon) {
      content = icon;
    } else if (status === "complete") {
      content = (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      );
    } else {
      content = index + 1;
    }

    return (
      <div ref={ref} className={classNames} {...props}>
        {content}
      </div>
    );
  }
);
StepIcon.displayName = "StepIcon";

export interface StepTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const StepTitle = React.forwardRef<HTMLDivElement, StepTitleProps>(
  ({ className = "", children, ...props }, ref) => (
    <div
      ref={ref}
      className={["ds-steps__title", className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </div>
  )
);
StepTitle.displayName = "StepTitle";

export interface StepDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const StepDescription = React.forwardRef<
  HTMLDivElement,
  StepDescriptionProps
>(({ className = "", children, ...props }, ref) => (
  <div
    ref={ref}
    className={["ds-steps__description", className].filter(Boolean).join(" ")}
    {...props}
  >
    {children}
  </div>
));
StepDescription.displayName = "StepDescription";
