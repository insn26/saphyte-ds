import React from "react";
import "./Slider.css";

/** Size variant for the Slider component. */
export type SliderSize = "sm" | "md" | "lg";
/** Color palette for the Slider component. */
export type SliderColorPalette = "gray" | "saphyte";

const SIZE_DIMENSIONS: Record<SliderSize, { track: number; thumb: number }> = {
  sm: { track: 4, thumb: 14 },
  md: { track: 6, thumb: 18 },
  lg: { track: 8, thumb: 22 },
};

/** A mark to display along the slider track. */
export interface SliderMark {
  value: number;
  label?: React.ReactNode;
}

/** Props for the Slider component. */
export interface SliderProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "type" | "value" | "defaultValue" | "onChange" | "size"
  > {
  size?: SliderSize;
  colorPalette?: SliderColorPalette;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  isDisabled?: boolean;
  showValueLabel?: boolean;
  showMarks?: boolean;
  marks?: SliderMark[];
  label?: React.ReactNode;
}

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      size = "md",
      colorPalette = "saphyte",
      min = 0,
      max = 100,
      step = 1,
      value,
      defaultValue = 0,
      onChange,
      isDisabled = false,
      showValueLabel = false,
      showMarks = false,
      marks,
      label,
      className = "",
      id,
      ...props
    },
    ref
  ) => {
    const reactId = React.useId();
    const sliderId = id ?? `ds-slider-${reactId}`;

    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = React.useState<number>(defaultValue);
    const currentValue = isControlled ? value : internalValue;

    const dims = SIZE_DIMENSIONS[size];

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      const next = Number(e.target.value);
      if (!isControlled) setInternalValue(next);
      onChange?.(next);
    };

    const percent = ((currentValue - min) / (max - min)) * 100;

    const markList: SliderMark[] = React.useMemo(() => {
      if (marks && marks.length > 0) return marks;
      if (showMarks) {
        const count = Math.floor((max - min) / step) + 1;
        const out: SliderMark[] = [];
        const limit = Math.min(count, 20);
        for (let i = 0; i < limit; i++) {
          const v = Math.round((min + (i * (max - min)) / (limit - 1)) * 100) / 100;
          out.push({ value: v });
        }
        return out;
      }
      return [];
    }, [marks, showMarks, min, max, step]);

    return (
      <div
        className={[
          "ds-slider",
          `ds-slider--${size}`,
          `ds-slider--${colorPalette}`,
          isDisabled && "ds-slider--disabled",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {(label || showValueLabel) && (
          <div className="ds-slider__header">
            {label && (
              <label htmlFor={sliderId} className="ds-slider__label">
                {label}
              </label>
            )}
            {showValueLabel && (
              <span className="ds-slider__value-label">{currentValue}</span>
            )}
          </div>
        )}
        <div
          className="ds-slider__control"
          style={{
            ["--ds-slider-track-height" as string]: `${dims.track}px`,
            ["--ds-slider-thumb-size" as string]: `${dims.thumb}px`,
          }}
        >
          <div className="ds-slider__track" />
          <div
            className="ds-slider__filled"
            style={{ width: `${Math.min(100, Math.max(0, percent))}%` }}
          />
          {markList.length > 0 && (
            <div className="ds-slider__marks" aria-hidden="true">
              {markList.map((m) => {
                const markPercent = ((m.value - min) / (max - min)) * 100;
                return (
                  <span
                    key={m.value}
                    className="ds-slider__mark"
                    style={{ left: `${markPercent}%` }}
                  >
                    {m.label !== undefined && (
                      <span className="ds-slider__mark-label">{m.label}</span>
                    )}
                  </span>
                );
              })}
            </div>
          )}
          <input
            ref={ref}
            id={sliderId}
            type="range"
            min={min}
            max={max}
            step={step}
            value={currentValue}
            disabled={isDisabled}
            onChange={handleChange}
            className="ds-slider__input"
            {...props}
          />
        </div>
      </div>
    );
  }
);
Slider.displayName = "Slider";
