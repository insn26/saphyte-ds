import React from "react";
import "./RadioGroup.css";

export type RadioGroupOrientation = "horizontal" | "vertical";
export type RadioGroupSize = "sm" | "md" | "lg";

export interface RadioOption<T extends string = string> {
  value: T;
  label: React.ReactNode;
  isDisabled?: boolean;
  description?: React.ReactNode;
}

export interface RadioGroupProps<T extends string = string>
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "defaultValue" | "onChange" | "value"
  > {
  name: string;
  options?: RadioOption<T>[];
  value?: T;
  defaultValue?: T;
  onChange?: (value: T) => void;
  orientation?: RadioGroupOrientation;
  size?: RadioGroupSize;
  isDisabled?: boolean;
  isInvalid?: boolean;
  spacing?: string;
  children?: React.ReactNode;
}

interface RadioGroupContextValue {
  name: string;
  value: string | undefined;
  onChange: (value: string) => void;
  isDisabled: boolean;
  isInvalid: boolean;
  size: RadioGroupSize;
}

const RadioGroupContext = React.createContext<RadioGroupContextValue | null>(null);

const useRadioGroupContext = (): RadioGroupContextValue => {
  const ctx = React.useContext(RadioGroupContext);
  return ctx ?? {
    name: "",
    value: undefined,
    onChange: () => undefined,
    isDisabled: false,
    isInvalid: false,
    size: "md",
  };
};

export function RadioGroup<T extends string = string>({
  name,
  options,
  value,
  defaultValue,
  onChange,
  orientation = "vertical",
  size = "md",
  isDisabled = false,
  isInvalid = false,
  spacing = "8px",
  className = "",
  children,
  ...props
}: RadioGroupProps<T>) {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = React.useState<T | undefined>(defaultValue);
  const currentValue = (isControlled ? value : internalValue) as T | undefined;

  const handleChange = React.useCallback(
    (next: T) => {
      if (!isControlled) setInternalValue(next);
      onChange?.(next);
    },
    [isControlled, onChange]
  );

  const ctxValue = React.useMemo<RadioGroupContextValue>(
    () => ({
      name,
      value: currentValue as string | undefined,
      onChange: handleChange as unknown as (value: string) => void,
      isDisabled,
      isInvalid,
      size,
    }),
    [name, currentValue, handleChange, isDisabled, isInvalid, size]
  );

  return (
    <RadioGroupContext.Provider value={ctxValue}>
      <div
        role="radiogroup"
        className={[
          "ds-radio-group",
          `ds-radio-group--${orientation}`,
          `ds-radio-group--${size}`,
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        style={
          orientation === "horizontal"
            ? { gap: spacing, display: "flex", flexWrap: "wrap", alignItems: "center" }
            : { gap: spacing, display: "flex", flexDirection: "column" }
        }
        {...props}
      >
        {options
          ? options.map((opt) => (
              <RadioGroupItem
                key={opt.value}
                value={opt.value}
                label={opt.label}
                description={opt.description}
                isDisabled={opt.isDisabled}
              />
            ))
          : children}
      </div>
    </RadioGroupContext.Provider>
  );
}
RadioGroup.displayName = "RadioGroup";

export interface RadioGroupItemProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "value" | "size"> {
  value: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
  isDisabled?: boolean;
}

export const RadioGroupItem = React.forwardRef<HTMLInputElement, RadioGroupItemProps>(
  ({ className = "", value, label, description, isDisabled, id, ...props }, ref) => {
    const ctx = useRadioGroupContext();
    const reactId = React.useId();
    const inputId = id ?? `ds-radio-${reactId}`;
    const checked = ctx.value === value;
    const finalDisabled = isDisabled ?? ctx.isDisabled;

    return (
      <label
        className={[
          "ds-radio",
          `ds-radio--${ctx.size}`,
          finalDisabled && "ds-radio--disabled",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        htmlFor={inputId}
      >
        <input
          ref={ref}
          id={inputId}
          type="radio"
          name={ctx.name}
          value={value}
          checked={checked}
          disabled={finalDisabled}
          onChange={() => ctx.onChange(value)}
          className="ds-radio__input"
          aria-invalid={ctx.isInvalid || undefined}
          {...props}
        />
        <span
          className={[
            "ds-radio__control",
            checked && "ds-radio__control--checked",
          ]
            .filter(Boolean)
            .join(" ")}
          aria-hidden="true"
        >
          <span className="ds-radio__dot" />
        </span>
        {(label || description) && (
          <span className="ds-radio__label">
            {label && <span className="ds-radio__label-text">{label}</span>}
            {description && (
              <span className="ds-radio__description">{description}</span>
            )}
          </span>
        )}
      </label>
    );
  }
);
RadioGroupItem.displayName = "RadioGroupItem";
