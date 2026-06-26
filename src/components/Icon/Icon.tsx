import React from "react";
import { icons, iconNames } from "./icons";

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
  ...props
}) => {
  const svgContent = icons[name];

  if (!svgContent) {
    if (typeof window !== "undefined" && process.env.NODE_ENV !== "production") {
      console.warn(`Icon "${name}" not found`);
    }
    return null;
  }

  // Replace size attributes and use currentColor
  const modifiedSvg = svgContent
    .replace(/<svg([^>]*)>/, (match, attrs) => {
      // Remove existing width/height attributes
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
