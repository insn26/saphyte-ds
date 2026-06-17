import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta = {
  title: "Design Tokens/Shadows",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const shadowTokens = [
  {
    name: "sm",
    value: "0px 2px 4px rgba(0,0,0,0.02), 0px 1px 6px -1px rgba(0,0,0,0.02), 0px 1px 2px rgba(0,0,0,0.03)",
    description: "Subtle shadow for cards and surfaces",
  },
  {
    name: "md",
    value: "0px 9px 28px 8px rgba(0,0,0,0.05), 0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px rgba(0,0,0,0.08)",
    description: "Medium shadow for dropdowns and modals",
  },
];

const focusTokens = [
  {
    name: "primary",
    value: "0 0 0 2px rgba(235,230,255,1.00)",
    color: "#EBE6FF",
    description: "Focus ring for primary interactive elements",
  },
  {
    name: "danger",
    value: "0 0 0 2px rgba(255,77,79,0.20)",
    color: "#FF4D4F",
    description: "Focus ring for dangerous actions",
  },
  {
    name: "yellow",
    value: "0 0 0 2px rgba(255,197,61,0.20)",
    color: "#FFC53D",
    description: "Focus ring for warning states",
  },
];

export const BoxShadows: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
      {shadowTokens.map((token) => (
        <div
          key={token.name}
          style={{
            padding: "24px",
            borderRadius: "8px",
            boxShadow: token.value,
            backgroundColor: "white",
            width: "200px",
          }}
        >
          <div style={{ fontSize: "14px", fontWeight: 600, marginBottom: "4px" }}>{token.name}</div>
          <div style={{ fontSize: "12px", color: "#8C8C8C", marginBottom: "8px" }}>{token.description}</div>
          <code style={{ fontSize: "10px", color: "#6B6B6B", wordBreak: "break-all" }}>{token.value}</code>
        </div>
      ))}
    </div>
  ),
};

export const FocusRings: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
      {focusTokens.map((token) => (
        <div
          key={token.name}
          style={{
            padding: "24px",
            borderRadius: "8px",
            boxShadow: token.value,
            backgroundColor: "white",
            width: "200px",
            border: `1px solid ${token.color}`,
          }}
        >
          <div style={{ fontSize: "14px", fontWeight: 600, marginBottom: "4px" }}>{token.name}</div>
          <div style={{ fontSize: "12px", color: "#8C8C8C", marginBottom: "8px" }}>{token.description}</div>
          <code style={{ fontSize: "10px", color: "#6B6B6B", wordBreak: "break-all" }}>{token.value}</code>
        </div>
      ))}
    </div>
  ),
};
