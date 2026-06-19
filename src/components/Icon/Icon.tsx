import React from "react";
import iconNames from "./icon-names.json";

// Dynamic import for all SVG icons
const iconModules = import.meta.glob("./icons/*.svg", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

// Build icon lookup map
const iconMap: Record<string, string> = {};
for (const [path, content] of Object.entries(iconModules)) {
  const name = path.split("/").pop()?.replace(".svg", "").replace(/_/g, "-") || "";
  iconMap[name] = content as string;
}

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
  const svgContent = iconMap[name];

  if (!svgContent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  // Parse SVG and inject size + className
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
