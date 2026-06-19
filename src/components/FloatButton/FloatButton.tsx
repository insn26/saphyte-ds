import React from "react";
import { icons } from "../Icon/icons";
import "./FloatButton.css";

export interface FloatButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "default" | "primary";
  shape?: "circle" | "square";
  icon?: string;
  iconNode?: React.ReactNode;
}

export const FloatButton: React.FC<FloatButtonProps> = ({
  type = "default",
  shape = "circle",
  icon = "folder-open-line",
  iconNode,
  className = "",
  style,
  children,
  ...props
}) => {
  const classNames = [
    "ds-float-btn",
    `ds-float-btn-${type}`,
    `ds-float-btn-${shape}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const iconSize = 18;
  const renderIcon = iconNode || (icon && icons[icon] ? (
    <span
      className="ds-float-btn-icon"
      dangerouslySetInnerHTML={{
        __html: icons[icon]
          .replace(/<svg/, `<svg width="${iconSize}" height="${iconSize}"`)
          .replace(/fill="[^"]*"/g, 'fill="currentColor"'),
      }}
    />
  ) : null);

  return (
    <button className={classNames} style={style} {...props}>
      {children || renderIcon}
    </button>
  );
};
