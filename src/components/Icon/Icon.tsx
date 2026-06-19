import React from "react";
import { icons, iconNames } from "./icons";

export interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
  size?: number | string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 16,
  className = "",
  style,
  ...props
}) => {
  const svgContent = icons[name];

  if (!svgContent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  const modifiedSvg = svgContent
    .replace(/<svg/, `<svg width="${size}" height="${size}" class="ds-icon ${className}"`)
    .replace(/fill="[^"]*"/g, 'fill="currentColor"')
    .replace(/stroke="[^"]*"/g, 'stroke="currentColor"');

  return (
    <span
      className="ds-icon-wrapper"
      style={{ display: "inline-flex", alignItems: "center", ...style }}
      dangerouslySetInnerHTML={{ __html: modifiedSvg }}
    />
  );
};

export { iconNames };
