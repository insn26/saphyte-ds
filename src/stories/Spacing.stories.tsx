import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta = {
  title: "Design Tokens/Spacing",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const spacingTokens = [
  { name: "0", value: "0px" },
  { name: "0.5", value: "2px" },
  { name: "1", value: "4px" },
  { name: "1.5", value: "6px" },
  { name: "2", value: "8px" },
  { name: "2.5", value: "10px" },
  { name: "3", value: "12px" },
  { name: "3.5", value: "14px" },
  { name: "4", value: "16px" },
  { name: "5", value: "20px" },
  { name: "6", value: "24px" },
  { name: "7", value: "28px" },
  { name: "8", value: "32px" },
  { name: "9", value: "36px" },
  { name: "10", value: "40px" },
  { name: "12", value: "48px" },
  { name: "14", value: "56px" },
  { name: "16", value: "64px" },
  { name: "20", value: "80px" },
  { name: "24", value: "96px" },
];

export const SpacingScale: Story = {
  render: () => (
    <div style={{ maxWidth: "600px" }}>
      {spacingTokens.map((token) => (
        <div
          key={token.name}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "4px 0",
          }}
        >
          <span
            style={{
              width: "32px",
              fontSize: "12px",
              color: "#8C8C8C",
              fontFamily: "monospace",
              textAlign: "right",
              flexShrink: 0,
            }}
          >
            {token.name}
          </span>
          <div
            style={{
              height: "16px",
              width: token.value,
              minWidth: token.value === "0px" ? "2px" : undefined,
              backgroundColor: "#6B3FFF",
              borderRadius: "2px",
            }}
          />
          <span
            style={{
              fontSize: "11px",
              color: "#8C8C8C",
              fontFamily: "monospace",
            }}
          >
            {token.value}
          </span>
        </div>
      ))}
    </div>
  ),
};

const radiusTokens = [
  { name: "none", value: "0px" },
  { name: "sm", value: "2px" },
  { name: "md", value: "4px" },
  { name: "lg", value: "6px" },
  { name: "xl", value: "8px" },
  { name: "2xl", value: "12px" },
  { name: "3xl", value: "16px" },
  { name: "full", value: "9999px" },
];

export const BorderRadius: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      {radiusTokens.map((token) => (
        <div
          key={token.name}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              backgroundColor: "#6B3FFF",
              borderRadius: token.value,
            }}
          />
          <span style={{ fontSize: "11px", fontFamily: "monospace" }}>{token.name}</span>
          <span style={{ fontSize: "10px", color: "#8C8C8C", fontFamily: "monospace" }}>
            {token.value}
          </span>
        </div>
      ))}
    </div>
  ),
};
