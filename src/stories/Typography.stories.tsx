import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta = {
  title: "Design Tokens/Typography",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const typeScale = [
  { name: "6xl", size: "40px", lineHeight: "48px", weight: 400 },
  { name: "5xl", size: "32px", lineHeight: "40px", weight: 400 },
  { name: "4xl", size: "28px", lineHeight: "36px", weight: 400 },
  { name: "3xl", size: "24px", lineHeight: "32px", weight: 400 },
  { name: "2xl", size: "22px", lineHeight: "32px", weight: 400 },
  { name: "xl", size: "20px", lineHeight: "28px", weight: 400 },
  { name: "lg", size: "18px", lineHeight: "28px", weight: 400 },
  { name: "md", size: "16px", lineHeight: "24px", weight: 400 },
  { name: "sm", size: "14px", lineHeight: "20px", weight: 400 },
  { name: "xs", size: "12px", lineHeight: "16px", weight: 400 },
];

const fontWeights = [
  { name: "Regular", value: 400 },
  { name: "Medium", value: 500 },
  { name: "Semi Bold", value: 600 },
  { name: "Bold", value: 700 },
];

export const TypeScale: Story = {
  render: () => (
    <div>
      {typeScale.map((item) => (
        <div
          key={item.name}
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "16px",
            padding: "8px 0",
            borderBottom: "1px solid #E8E8E8",
          }}
        >
          <span
            style={{
              width: "48px",
              fontSize: "12px",
              color: "#8C8C8C",
              fontFamily: "monospace",
              flexShrink: 0,
            }}
          >
            {item.name}
          </span>
          <span
            style={{
              fontSize: item.size,
              lineHeight: item.lineHeight,
              fontWeight: item.weight,
              fontFamily: "Inter, sans-serif",
            }}
          >
            The quick brown fox
          </span>
          <span
            style={{
              fontSize: "11px",
              color: "#8C8C8C",
              fontFamily: "monospace",
              flexShrink: 0,
            }}
          >
            {item.size} / {item.lineHeight}
          </span>
        </div>
      ))}
    </div>
  ),
};

export const FontWeights: Story = {
  render: () => (
    <div>
      {fontWeights.map((item) => (
        <div
          key={item.name}
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "16px",
            padding: "8px 0",
            borderBottom: "1px solid #E8E8E8",
          }}
        >
          <span
            style={{
              width: "80px",
              fontSize: "12px",
              color: "#8C8C8C",
              fontFamily: "monospace",
              flexShrink: 0,
            }}
          >
            {item.name}
          </span>
          <span
            style={{
              fontSize: "18px",
              fontWeight: item.value,
              fontFamily: "Inter, sans-serif",
            }}
          >
            The quick brown fox jumps over the lazy dog
          </span>
          <span
            style={{
              fontSize: "11px",
              color: "#8C8C8C",
              fontFamily: "monospace",
              flexShrink: 0,
            }}
          >
            {item.value}
          </span>
        </div>
      ))}
    </div>
  ),
};

export const AllCombinations: Story = {
  render: () => (
    <div>
      <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "Inter, sans-serif" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left", padding: "8px", borderBottom: "2px solid #E8E8E8", fontSize: "12px", color: "#8C8C8C" }}>
              Size
            </th>
            {fontWeights.map((w) => (
              <th
                key={w.name}
                style={{
                  textAlign: "left",
                  padding: "8px",
                  borderBottom: "2px solid #E8E8E8",
                  fontSize: "12px",
                  color: "#8C8C8C",
                }}
              >
                {w.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {typeScale.slice(0, 6).map((item) => (
            <tr key={item.name}>
              <td
                style={{
                  padding: "8px",
                  borderBottom: "1px solid #E8E8E8",
                  fontSize: "12px",
                  fontFamily: "monospace",
                  color: "#8C8C8C",
                  width: "48px",
                }}
              >
                {item.name}
              </td>
              {fontWeights.map((w) => (
                <td
                  key={w.name}
                  style={{
                    padding: "8px",
                    borderBottom: "1px solid #E8E8E8",
                    fontSize: item.size,
                    fontWeight: w.value,
                    lineHeight: item.lineHeight,
                  }}
                >
                  Aa
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
};
