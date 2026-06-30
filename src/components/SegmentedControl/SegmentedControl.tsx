import React from "react";
import "./SegmentedControl.css";

/** Size variant for the SegmentedControl component. */
export type SegmentedControlSize = "sm" | "md" | "lg";
/** Color palette for the SegmentedControl component. */
export type SegmentedControlColorPalette = "gray" | "saphyte";

const SIZE_DIMENSIONS: Record<SegmentedControlSize, { size: number; fontSize: number }> = {
  sm: { size: 28, fontSize: 12 },
  md: { size: 36, fontSize: 14 },
  lg: { size: 44, fontSize: 16 },
};

/** An individual option in the segmented control. */
export interface SegmentedControlOption<T extends string = string> {
  value: T;
  label: React.ReactNode;
  icon?: React.ReactNode;
  isDisabled?: boolean;
}

/** Props for the SegmentedControl component. */
export interface SegmentedControlProps<T extends string = string>
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "defaultValue" | "onChange" | "value"> {
  options: SegmentedControlOption<T>[];
  value?: T;
  defaultValue?: T;
  onChange?: (value: T) => void;
  size?: SegmentedControlSize;
  colorPalette?: SegmentedControlColorPalette;
  isDisabled?: boolean;
  fullWidth?: boolean;
  name?: string;
}

export function SegmentedControl<T extends string = string>({
  options,
  value,
  defaultValue,
  onChange,
  size = "md",
  colorPalette = "saphyte",
  isDisabled = false,
  fullWidth = false,
  className = "",
  name,
  ...props
}: SegmentedControlProps<T>) {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = React.useState<T | undefined>(
    defaultValue ?? options[0]?.value
  );
  const currentValue = (isControlled ? value : internalValue) as T | undefined;

  const dims = SIZE_DIMENSIONS[size];

  const handleSelect = (next: T) => {
    if (isDisabled) return;
    if (!isControlled) setInternalValue(next);
    onChange?.(next);
  };

  return (
    <div
      role="radiogroup"
      className={[
        "ds-segmented",
        `ds-segmented--${size}`,
        `ds-segmented--${colorPalette}`,
        isDisabled && "ds-segmented--disabled",
        fullWidth && "ds-segmented--full-width",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        height: dims.size,
        fontSize: dims.fontSize,
      }}
      {...props}
    >
      {options.map((opt) => {
        const isSelected = opt.value === currentValue;
        return (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={isSelected}
            aria-disabled={opt.isDisabled || isDisabled || undefined}
            disabled={opt.isDisabled || isDisabled}
            tabIndex={isSelected ? 0 : -1}
            onClick={() => handleSelect(opt.value)}
            className={[
              "ds-segmented__button",
              isSelected && "ds-segmented__button--selected",
            ]
              .filter(Boolean)
              .join(" ")}
            style={{ height: dims.size, fontSize: dims.fontSize }}
          >
            {opt.icon && <span className="ds-segmented__icon">{opt.icon}</span>}
            <span className="ds-segmented__label">{opt.label}</span>
            {name && isSelected && (
              <input type="hidden" name={name} value={opt.value} />
            )}
          </button>
        );
      })}
    </div>
  );
}
SegmentedControl.displayName = "SegmentedControl";
