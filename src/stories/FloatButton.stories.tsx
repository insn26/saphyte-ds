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
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const PlusIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M9 3V15M3 9H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const SettingIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M9 11.5C10.3807 11.5 11.5 10.3807 11.5 9C11.5 7.61929 10.3807 6.5 9 6.5C7.61929 6.5 6.5 7.61929 6.5 9C6.5 10.3807 7.61929 11.5 9 11.5Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M14.8 11.28L13.68 10.64C13.84 10.16 13.96 9.64 14.04 9.12L15.12 8.48C15.28 8.36 15.32 8.12 15.2 7.96L14.2 6.76C14.08 6.6 13.84 6.56 13.68 6.68L12.6 7.32C12.24 7.04 11.84 6.8 11.4 6.64L11.16 5.48C11.12 5.28 10.92 5.16 10.72 5.2H9.28C9.08 5.16 8.88 5.28 8.84 5.48L8.6 6.64C8.16 6.8 7.76 7.04 7.4 7.32L6.32 6.68C6.16 6.56 5.92 6.6 5.8 6.76L4.8 7.96C4.68 8.12 4.72 8.36 4.88 8.48L5.96 9.12C6.04 9.64 6.16 10.16 6.32 10.64L5.2 11.28C5.04 11.4 5 11.64 5.12 11.8L6.12 13C6.24 13.16 6.48 13.2 6.64 13.08L7.72 12.44C8.08 12.72 8.48 12.96 8.92 13.12L9.16 14.28C9.2 14.48 9.4 14.6 9.6 14.56H11.04C11.24 14.6 11.44 14.48 11.48 14.28L11.72 13.12C12.16 12.96 12.56 12.72 12.92 12.44L14 13.08C14.16 13.2 14.4 13.16 14.52 13L15.52 11.8C15.64 11.64 15.6 11.4 15.44 11.28H14.8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const QuestionIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M9 16.5C12.866 16.5 16 13.366 16 9.5C16 5.63401 12.866 2.5 9 2.5C5.13401 2.5 2 5.63401 2 9.5C2 13.366 5.13401 16.5 9 16.5Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6.9 6.5C6.9 5.39543 7.79543 4.5 8.9 4.5C10.0046 4.5 10.9 5.39543 10.9 6.5C10.9 7.60457 10.0046 8.5 8.9 8.5H8.4V10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="8.9" cy="12.5" r="0.75" fill="currentColor" />
  </svg>
);

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
          Type x Shape
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

export const WithCustomIcons: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <FloatButton type="default" shape="circle" iconNode={<PlusIcon />} />
      <FloatButton type="default" shape="circle" iconNode={<SettingIcon />} />
      <FloatButton type="default" shape="circle" iconNode={<QuestionIcon />} />
      <FloatButton type="primary" shape="circle" iconNode={<PlusIcon />} />
      <FloatButton type="primary" shape="circle" iconNode={<SettingIcon />} />
      <FloatButton type="primary" shape="circle" iconNode={<QuestionIcon />} />
    </div>
  ),
};
