import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta = {
  title: "Design Tokens/Colors",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const colorGroups = {
  "Primitive - Navy": [
    { name: "1", value: "#e8ecf4" },
    { name: "2", value: "#dce1ed" },
    { name: "3", value: "#c4cbd8" },
    { name: "4", value: "#9ca8be" },
    { name: "5", value: "#7484a3" },
    { name: "6", value: "#566690" },
    { name: "7", value: "#3f4f79" },
    { name: "8", value: "#2b3a62" },
    { name: "9", value: "#1a2650" },
    { name: "10", value: "#0f1730" },
  ],
  "Primitive - Cyan": [
    { name: "1", value: "#d5f6f0" },
    { name: "2", value: "#b5ede3" },
    { name: "3", value: "#85dfd1" },
    { name: "4", value: "#4ecac8" },
    { name: "5", value: "#2db8b9" },
    { name: "6", value: "#1c9b9f" },
    { name: "7", value: "#127d85" },
    { name: "8", value: "#0d646c" },
    { name: "9", value: "#094b53" },
    { name: "10", value: "#063238" },
  ],
  "Primitive - Blue": [
    { name: "1", value: "#d4e7ff" },
    { name: "2", value: "#b7d4ff" },
    { name: "3", value: "#8db9ff" },
    { name: "4", value: "#5c98ff" },
    { name: "5", value: "#3a7df8" },
    { name: "6", value: "#2564eb" },
    { name: "7", value: "#194dd4" },
    { name: "8", value: "#123bb5" },
    { name: "9", value: "#0b2991" },
    { name: "10", value: "#061a6b" },
  ],
  "Primitive - Purple": [
    { name: "1", value: "#f0e5ff" },
    { name: "2", value: "#e3ccff" },
    { name: "3", value: "#cda6ff" },
    { name: "4", value: "#b27aff" },
    { name: "5", value: "#9c57f5" },
    { name: "6", value: "#833ee6" },
    { name: "7", value: "#6c2bd0" },
    { name: "8", value: "#561fb0" },
    { name: "9", value: "#40158c" },
    { name: "10", value: "#2c0d68" },
  ],
  "Primitive - Green": [
    { name: "1", value: "#e5f8e2" },
    { name: "2", value: "#ccf0c7" },
    { name: "3", value: "#a2e299" },
    { name: "4", value: "#71cf64" },
    { name: "5", value: "#4dbd43" },
    { name: "6", value: "#36a52d" },
    { name: "7", value: "#288a20" },
    { name: "8", value: "#1d6e16" },
    { name: "9", value: "#14510f" },
    { name: "10", value: "#0c3609" },
  ],
  "Primitive - Magenta": [
    { name: "1", value: "#fce4f0" },
    { name: "2", value: "#f9c7e2" },
    { name: "3", value: "#f29dc8" },
    { name: "4", value: "#e96caa" },
    { name: "5", value: "#e04694" },
    { name: "6", value: "#cc2b7f" },
    { name: "7", value: "#b01d6a" },
    { name: "8", value: "#931557" },
    { name: "9", value: "#710f43" },
    { name: "10", value: "#500a2f" },
  ],
  "Primitive - Red": [
    { name: "1", value: "#ffe0d9" },
    { name: "2", value: "#ffc4ba" },
    { name: "3", value: "#ff9c90" },
    { name: "4", value: "#ff6c5e" },
    { name: "5", value: "#f74538" },
    { name: "6", value: "#e12820" },
    { name: "7", value: "#be1c18" },
    { name: "8", value: "#9a1516" },
    { name: "9", value: "#741013" },
    { name: "10", value: "#510c0f" },
  ],
  "Primitive - Orange": [
    { name: "1", value: "#fff0d5" },
    { name: "2", value: "#ffe0b2" },
    { name: "3", value: "#ffc580" },
    { name: "4", value: "#ffa54d" },
    { name: "5", value: "#ff8c26" },
    { name: "6", value: "#f07418" },
    { name: "7", value: "#cc5c11" },
    { name: "8", value: "#a8470d" },
    { name: "9", value: "#83340a" },
    { name: "10", value: "#5f2508" },
  ],
  "Primitive - Yellow": [
    { name: "1", value: "#fff9d5" },
    { name: "2", value: "#fff3b3" },
    { name: "3", value: "#ffe880" },
    { name: "4", value: "#ffda4d" },
    { name: "5", value: "#ffcd26" },
    { name: "6", value: "#f0ba18" },
    { name: "7", value: "#cca311" },
    { name: "8", value: "#a88a0d" },
    { name: "9", value: "#836d0a" },
    { name: "10", value: "#5f5008" },
  ],
  "Primitive - Volcano": [
    { name: "1", value: "#ffe2d5" },
    { name: "2", value: "#ffc5b3" },
    { name: "3", value: "#ffa187" },
    { name: "4", value: "#ff7a5c" },
    { name: "5", value: "#f55738" },
    { name: "6", value: "#dc3e21" },
    { name: "7", value: "#b82e19" },
    { name: "8", value: "#952415" },
    { name: "9", value: "#711b11" },
    { name: "10", value: "#50130d" },
  ],
  "Primitive - Geekblue": [
    { name: "1", value: "#e5edff" },
    { name: "2", value: "#c9d8ff" },
    { name: "3", value: "#9db8ff" },
    { name: "4", value: "#6c93ff" },
    { name: "5", value: "#4872e8" },
    { name: "6", value: "#3258cd" },
    { name: "7", value: "#2441b1" },
    { name: "8", value: "#192f91" },
    { name: "9", value: "#10206e" },
    { name: "10", value: "#08144a" },
  ],
  "Primitive - Lime": [
    { name: "1", value: "#e8f8c9" },
    { name: "2", value: "#d5f0a3" },
    { name: "3", value: "#b9e275" },
    { name: "4", value: "#9ad24b" },
    { name: "5", value: "#7ec22e" },
    { name: "6", value: "#64a822" },
    { name: "7", value: "#4d8d1a" },
    { name: "8", value: "#3a7214" },
    { name: "9", value: "#2a570f" },
    { name: "10", value: "#1c3d0b" },
  ],
  "Primitive - Gold": [
    { name: "1", value: "#fff5d5" },
    { name: "2", value: "#ffeab3" },
    { name: "3", value: "#ffd980" },
    { name: "4", value: "#ffc74d" },
    { name: "5", value: "#ffb926" },
    { name: "6", value: "#f0a318" },
    { name: "7", value: "#cc8b11" },
    { name: "8", value: "#a8730d" },
    { name: "9", value: "#835c0a" },
    { name: "10", value: "#5f4308" },
  ],
};

const ColorSwatch: React.FC<{ name: string; value: string }> = ({ name, value }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "4px",
        cursor: "pointer",
      }}
      onClick={handleCopy}
    >
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "8px",
          backgroundColor: value,
          border: "1px solid rgba(0,0,0,0.1)",
        }}
      />
      <span style={{ fontSize: "11px", fontWeight: 500 }}>{name}</span>
      <span style={{ fontSize: "10px", color: "#8C8C8C", fontFamily: "monospace" }}>
        {copied ? "Copied!" : value}
      </span>
    </div>
  );
};

const ColorGroup: React.FC<{ title: string; colors: Array<{ name: string; value: string }> }> = ({
  title,
  colors,
}) => (
  <div style={{ marginBottom: "24px" }}>
    <h3 style={{ fontSize: "14px", fontWeight: 600, marginBottom: "12px" }}>{title}</h3>
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      {colors.map((color) => (
        <ColorSwatch key={color.name} name={color.name} value={color.value} />
      ))}
    </div>
  </div>
);

export const AllColors: Story = {
  render: () => (
    <div>
      {Object.entries(colorGroups).map(([group, colors]) => (
        <ColorGroup key={group} title={group} colors={colors} />
      ))}
    </div>
  ),
};
