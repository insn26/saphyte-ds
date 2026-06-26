import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Icon, iconNames } from "../components/Icon/Icon";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "select",
      options: iconNames.slice(0, 50),
      description: "Icon name (1508 available)",
    },
    size: {
      control: "number",
      table: { defaultValue: { summary: "16" } },
    },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { name: "circle", size: 24 },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      <Icon name="circle" size={12} />
      <Icon name="circle" size={16} />
      <Icon name="circle" size={20} />
      <Icon name="circle" size={24} />
      <Icon name="circle" size={32} />
      <Icon name="circle" size={40} />
    </div>
  ),
};

export const Common: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
      {["circle", "square", "check", "x", "arrow-right", "arrow-left", "plus", "minus", "search", "settings", "user", "home", "mail", "bell", "calendar", "clock", "heart", "star", "trash", "edit", "eye", "download", "upload", "share"].map((name) => (
        <div key={name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, padding: 8, border: "1px solid #e4e4e7", borderRadius: 6, minWidth: 60 }}>
          <Icon name={name} size={20} />
          <span style={{ fontSize: 10, color: "#71717a" }}>{name}</span>
        </div>
      ))}
    </div>
  ),
};

export const InButton: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <button style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 12px", borderRadius: 4, background: "#5d42e6", color: "white", border: "none" }}>
        <Icon name="plus" size={14} /> Add
      </button>
      <button style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 12px", borderRadius: 4, background: "transparent", color: "#27272a", border: "1px solid #d4d4d8" }}>
        <Icon name="download" size={14} /> Download
      </button>
      <button style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 12px", borderRadius: 4, background: "transparent", color: "#991919", border: "none" }}>
        <Icon name="trash" size={14} /> Delete
      </button>
    </div>
  ),
};

export const WithColor: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 16 }}>
      <div style={{ color: "#5d42e6" }}><Icon name="star" size={32} /></div>
      <div style={{ color: "#ef4444" }}><Icon name="heart" size={32} /></div>
      <div style={{ color: "#22c55e" }}><Icon name="check" size={32} /></div>
      <div style={{ color: "#eab308" }}><Icon name="star" size={32} /></div>
      <div style={{ color: "#3b82f6" }}><Icon name="info" size={32} /></div>
    </div>
  ),
};

export const AllIcons: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))", gap: 8, padding: 16, maxWidth: 1200 }}>
      {iconNames.map((name) => (
        <div key={name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, padding: 8, border: "1px solid #f4f4f5", borderRadius: 6 }}>
          <Icon name={name} size={18} />
          <span style={{ fontSize: 9, color: "#71717a", textAlign: "center", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", width: "100%" }}>{name}</span>
        </div>
      ))}
    </div>
  ),
  parameters: { layout: "fullscreen" },
};
