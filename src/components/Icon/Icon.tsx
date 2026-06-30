import React from "react";
import { icons, iconNames } from "./icons";

/** Props for the Icon component. Renders SVG icons by name. */
export interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
  size?: number | string;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 16,
  className = "",
  style,
}) => {
  const svgContent = icons[name];

  if (!svgContent) {
    if (import.meta.env.DEV) {
      console.warn(`Icon "${name}" not found`);
    }
    return null;
  }

  const modifiedSvg = svgContent
    .replace(/<svg([^>]*)>/, (_match, attrs) => {
      const cleanedAttrs = attrs
        .replace(/\s*width="[^"]*"/g, "")
        .replace(/\s*height="[^"]*"/g, "")
        .replace(/\s*stroke="[^"]*"/g, ' stroke="currentColor"');
      return `<svg width="${size}" height="${size}" class="ds-icon ${className}"${cleanedAttrs}>`;
    })
    .replace(/fill="(?!none)[^"]*"/g, 'fill="currentColor"');

  return (
    <span
      className="ds-icon-wrapper"
      style={{ display: "inline-flex", alignItems: "center", ...style }}
      dangerouslySetInnerHTML={{ __html: modifiedSvg }}
    />
  );
};

export { iconNames };
