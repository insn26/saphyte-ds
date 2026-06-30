import React from "react";
import "./Tag.css";

/** Size variant for the Tag component. */
export type TagSize = "sm" | "md" | "lg";
/** Visual variant for the Tag component. */
export type TagVariant = "solid" | "subtle" | "outline";
/** Color palette for the Tag component. */
export type TagColorPalette =
  | "gray"
  | "danger"
  | "warning"
  | "success"
  | "info"
  | "saphyte";

interface TagContextValue {
  size: TagSize;
  variant: TagVariant;
  colorPalette: TagColorPalette;
  onClose?: () => void;
  isClosable: boolean;
}

const TagContext = React.createContext<TagContextValue | null>(null);

const useTagContext = (): TagContextValue => {
  const ctx = React.useContext(TagContext);
  if (!ctx) {
    throw new Error("Tag subcomponents must be used within <Tag />");
  }
  return ctx;
};

/** Props for the Tag component. */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: TagSize;
  variant?: TagVariant;
  colorPalette?: TagColorPalette;
  closable?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      size = "md",
      variant = "subtle",
      colorPalette = "gray",
      closable = false,
      onClose,
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const value = React.useMemo<TagContextValue>(
      () => ({
        size,
        variant,
        colorPalette,
        onClose,
        isClosable: closable || Boolean(onClose),
      }),
      [size, variant, colorPalette, onClose, closable]
    );

    const classNames = [
      "ds-tag",
      `ds-tag--${size}`,
      `ds-tag--${variant}`,
      `ds-tag--${colorPalette}`,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <TagContext.Provider value={value}>
        <span ref={ref} className={classNames} {...props}>
          {children}
        </span>
      </TagContext.Provider>
    );
  }
);
Tag.displayName = "Tag";

/** Wrapper component for the tag label. */
export interface TagLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

export const TagLabel = React.forwardRef<HTMLSpanElement, TagLabelProps>(
  ({ className = "", children, ...props }, ref) => {
    const { size } = useTagContext();
    return (
      <span
        ref={ref}
        className={["ds-tag__label", `ds-tag__label--${size}`, className]
          .filter(Boolean)
          .join(" ")}
        {...props}
      >
        {children}
      </span>
    );
  }
);
TagLabel.displayName = "TagLabel";

/** Props for the tag close button. */
export interface TagCloseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const TagCloseButton = React.forwardRef<
  HTMLButtonElement,
  TagCloseButtonProps
>(({ className = "", children, onClick, ...props }, ref) => {
  const { onClose, size } = useTagContext();
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    onClick?.(e);
    onClose?.();
  };

  return (
    <button
      ref={ref}
      type="button"
      aria-label="Remove tag"
      className={["ds-tag__close", `ds-tag__close--${size}`, className]
        .filter(Boolean)
        .join(" ")}
      onClick={handleClick}
      {...props}
    >
      {children ?? (
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      )}
    </button>
  );
});
TagCloseButton.displayName = "TagCloseButton";

/** Wrapper component for the tag left icon. */
export interface TagLeftIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

export const TagLeftIcon = React.forwardRef<HTMLSpanElement, TagLeftIconProps>(
  ({ className = "", children, ...props }, ref) => (
    <span
      ref={ref}
      className={["ds-tag__icon", "ds-tag__icon--left", className]
        .filter(Boolean)
        .join(" ")}
      aria-hidden="true"
      {...props}
    >
      {children}
    </span>
  )
);
TagLeftIcon.displayName = "TagLeftIcon";
