import React from "react";
import "./Accordion.css";

/** Visual variant of the accordion. */
export type AccordionVariant = "default" | "bordered" | "flush";
/** Size of the accordion. */
export type AccordionSize = "sm" | "md" | "lg";

interface AccordionContextValue {
  expanded: Set<number>;
  toggle: (index: number) => void;
  variant: AccordionVariant;
  size: AccordionSize;
  isMultiple: boolean;
  disabledMap: Set<number>;
  setDisabled: (index: number, disabled: boolean) => void;
}

/** Change handler type for the Accordion. Receives the expanded index or array of indices. */
export type AccordionOnChangeHandler = (index: number | number[]) => void;

const AccordionContext = React.createContext<AccordionContextValue | null>(null);
const AccordionItemContext = React.createContext<number>(-1);

const useAccordionContext = (): AccordionContextValue => {
  const ctx = React.useContext(AccordionContext);
  if (!ctx) {
    throw new Error("Accordion subcomponents must be used within <Accordion />");
  }
  return ctx;
};

/** Props for the Accordion component. Use with Accordion.Item, Accordion.Button, Accordion.Panel. */
export interface AccordionProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  defaultIndex?: number | number[];
  index?: number | number[];
  onChange?: AccordionOnChangeHandler;
  allowMultiple?: boolean;
  allowToggle?: boolean;
  variant?: AccordionVariant;
  size?: AccordionSize;
  children?: React.ReactNode;
}

const toSet = (value: number | number[] | undefined): Set<number> => {
  if (value === undefined) return new Set();
  return new Set(Array.isArray(value) ? value : [value]);
};

const fromSet = (set: Set<number>, multiple: boolean): number | number[] => {
  const arr = Array.from(set).sort((a, b) => a - b);
  return multiple ? arr : (arr[0] ?? -1);
};

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      defaultIndex,
      index,
      onChange,
      allowMultiple = false,
      allowToggle = false,
      variant = "default",
      size = "md",
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const isControlled = index !== undefined;
    const [internalExpanded, setInternalExpanded] = React.useState<Set<number>>(() =>
      toSet(defaultIndex)
    );
    const expanded = isControlled ? toSet(index) : internalExpanded;
    const [disabledMap, setDisabledMapState] = React.useState<Set<number>>(new Set());

    const isMultiple = allowMultiple || allowToggle;

    const setDisabled = React.useCallback((i: number, disabled: boolean) => {
      setDisabledMapState((prev) => {
        const next = new Set(prev);
        if (disabled) next.add(i);
        else next.delete(i);
        return next;
      });
    }, []);

    const toggle = React.useCallback(
      (i: number) => {
        if (disabledMap.has(i)) return;
        const next = new Set(expanded);
        if (next.has(i)) {
          next.delete(i);
        } else {
          if (!isMultiple) {
            next.clear();
          }
          next.add(i);
        }
        if (!isControlled) {
          setInternalExpanded(next);
        }
        onChange?.(fromSet(next, isMultiple) as number | number[]);
      },
      [expanded, isControlled, isMultiple, onChange, disabledMap]
    );

    const value = React.useMemo<AccordionContextValue>(
      () => ({ expanded, toggle, variant, size, isMultiple, disabledMap, setDisabled }),
      [expanded, toggle, variant, size, isMultiple, disabledMap, setDisabled]
    );

    return (
      <AccordionContext.Provider value={value}>
        <div
          ref={ref}
          className={[
            "ds-accordion",
            `ds-accordion--${variant}`,
            className,
          ]
            .filter(Boolean)
            .join(" ")}
          {...props}
        >
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);
Accordion.displayName = "Accordion";

/** Props for the AccordionItem subcomponent. Wraps a single accordion section. */
export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  isDisabled?: boolean;
  children?: React.ReactNode;
}

export const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className = "", isDisabled = false, children, ...props }, ref) => {
    const { variant, setDisabled } = useAccordionContext();
    const [autoIndex] = React.useState(() => Math.floor(Math.random() * 1_000_000));

    React.useEffect(() => {
      setDisabled(autoIndex, isDisabled);
      return () => setDisabled(autoIndex, false);
    }, [autoIndex, isDisabled, setDisabled]);

    return (
      <AccordionItemContext.Provider value={autoIndex}>
        <div
          ref={ref}
          className={[
            "ds-accordion__item",
            `ds-accordion__item--${variant}`,
            isDisabled && "ds-accordion__item--disabled",
            className,
          ]
            .filter(Boolean)
            .join(" ")}
          {...props}
        >
          {children}
        </div>
      </AccordionItemContext.Provider>
    );
  }
);
AccordionItem.displayName = "AccordionItem";

/** Props for the AccordionButton subcomponent. Toggles the visibility of the associated panel. */
export interface AccordionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const AccordionButton = React.forwardRef<HTMLButtonElement, AccordionButtonProps>(
  ({ className = "", children, ...props }, ref) => {
    const { expanded, toggle, size } = useAccordionContext();
    const index = React.useContext(AccordionItemContext);
    const isOpen = expanded.has(index);

    const classNames = [
      "ds-accordion__button",
      `ds-accordion__button--${size}`,
      isOpen && "ds-accordion__button--open",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        type="button"
        className={classNames}
        aria-expanded={isOpen}
        onClick={() => toggle(index)}
        {...props}
      >
        <span className="ds-accordion__button-label">{children}</span>
        <span
          className={[
            "ds-accordion__icon",
            isOpen && "ds-accordion__icon--open",
          ]
            .filter(Boolean)
            .join(" ")}
          aria-hidden="true"
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
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>
    );
  }
);
AccordionButton.displayName = "AccordionButton";

/** Props for the AccordionPanel subcomponent. Contains the collapsible content for an accordion item. */
export interface AccordionPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const AccordionPanel = React.forwardRef<HTMLDivElement, AccordionPanelProps>(
  ({ className = "", children, ...props }, ref) => {
    const { expanded, size } = useAccordionContext();
    const index = React.useContext(AccordionItemContext);
    const isOpen = expanded.has(index);

    const classNames = [
      "ds-accordion__panel",
      `ds-accordion__panel--${size}`,
      isOpen && "ds-accordion__panel--open",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div
        ref={ref}
        className={classNames}
        role="region"
        hidden={!isOpen}
        {...props}
      >
        <div className="ds-accordion__panel-content">{children}</div>
      </div>
    );
  }
);
AccordionPanel.displayName = "AccordionPanel";
