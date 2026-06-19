import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { FloatButton } from "../components/FloatButton/FloatButton";

const meta: Meta<typeof FloatButton> = {
  title: "Components/FloatButton",
  component: FloatButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["default", "primary"],
      description: "Button type",
      table: {
        defaultValue: { summary: "default" },
      },
    },
    shape: {
      control: "select",
      options: ["circle", "square"],
      description: "Button shape",
      table: {
        defaultValue: { summary: "circle" },
      },
    },
    icon: {
      control: "text",
      description: "Icon name from the icon set",
      table: {
        defaultValue: { summary: "folder-open-line" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "default",
    shape: "circle",
  },
};

export const Primary: Story = {
  args: {
    type: "primary",
    shape: "circle",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <div>
        <h3 style={{ fontSize: "14px", fontWeight: 600, marginBottom: "16px" }}>
          Type × Shape
        </h3>
        <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "center" }}>
            <span style={{ fontSize: "12px", color: "#69738d" }}>Default</span>
            <div style={{ display: "flex", gap: "12px" }}>
              <FloatButton type="default" shape="circle" />
              <FloatButton type="default" shape="square" />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "center" }}>
            <span style={{ fontSize: "12px", color: "#69738d" }}>Primary</span>
            <div style={{ display: "flex", gap: "12px" }}>
              <FloatButton type="primary" shape="circle" />
              <FloatButton type="primary" shape="square" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const DefaultType: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <FloatButton type="default" shape="circle" />
      <FloatButton type="default" shape="square" />
    </div>
  ),
};

export const PrimaryType: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <FloatButton type="primary" shape="circle" />
      <FloatButton type="primary" shape="square" />
    </div>
  ),
};

export const CircleShape: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <FloatButton type="default" shape="circle" />
      <FloatButton type="primary" shape="circle" />
    </div>
  ),
};

export const SquareShape: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <FloatButton type="default" shape="square" />
      <FloatButton type="primary" shape="square" />
    </div>
  ),
};

export const WithCustomIcon: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <FloatButton type="default" shape="circle" icon="plus" />
      <FloatButton type="default" shape="circle" icon="setting" />
      <FloatButton type="default" shape="circle" icon="question-circle" />
      <FloatButton type="primary" shape="circle" icon="plus" />
      <FloatButton type="primary" shape="circle" icon="setting" />
      <FloatButton type="primary" shape="circle" icon="question-circle" />
    </div>
  ),
};

export const WithCustomIconNode: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <FloatButton
        type="default"
        shape="circle"
        iconNode={
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M9 3L15 9L9 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      />
      <FloatButton
        type="primary"
        shape="circle"
        iconNode={
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M9 3V15M3 9H15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        }
      />
    </div>
  ),
};
