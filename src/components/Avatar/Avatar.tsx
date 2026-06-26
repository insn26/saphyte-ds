import React from "react";
import "./Avatar.css";

export type AvatarSize = "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
export type AvatarVariant = "solid" | "image";

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: AvatarSize;
  variant?: AvatarVariant;
  name?: string;
  src?: string;
  alt?: string;
}

const SIZE_DIMENSIONS: Record<AvatarSize, { size: number; fontSize: number }> = {
  "2xs": { size: 16, fontSize: 8 },
  xs: { size: 24, fontSize: 10 },
  sm: { size: 32, fontSize: 12 },
  md: { size: 40, fontSize: 14 },
  lg: { size: 48, fontSize: 16 },
  xl: { size: 64, fontSize: 20 },
  "2xl": { size: 96, fontSize: 28 },
};

function getInitials(name?: string): string {
  if (!name) return "";
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) {
    const first = parts[0];
    return first ? first.substring(0, 2).toUpperCase() : "";
  }
  const first = parts[0];
  const last = parts[parts.length - 1];
  const firstChar = first ? first[0] : "";
  const lastChar = last ? last[0] : "";
  return `${firstChar ?? ""}${lastChar ?? ""}`.toUpperCase();
}

export const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  (
    {
      size = "md",
      variant,
      name,
      src,
      alt,
      children,
      className = "",
      style,
      ...props
    },
    ref
  ) => {
    const dims = SIZE_DIMENSIONS[size];
    const resolvedVariant: AvatarVariant = variant ?? (src ? "image" : "solid");
    const initials = children ?? getInitials(name);

    const classNames = [
      "ds-avatar",
      `ds-avatar--${size}`,
      `ds-avatar--${resolvedVariant}`,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const baseStyle: React.CSSProperties = {
      width: dims.size,
      height: dims.size,
      fontSize: dims.fontSize,
      ...style,
    };

    if (resolvedVariant === "image" && src) {
      return (
        <span ref={ref} className={classNames} style={baseStyle} {...props}>
          <img
            className="ds-avatar__img"
            src={src}
            alt={alt ?? name ?? ""}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </span>
      );
    }

    return (
      <span
        ref={ref}
        className={classNames}
        style={baseStyle}
        role="img"
        aria-label={alt ?? name}
        {...props}
      >
        <span className="ds-avatar__initials">{initials}</span>
      </span>
    );
  }
);

Avatar.displayName = "Avatar";
