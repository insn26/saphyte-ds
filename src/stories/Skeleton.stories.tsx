import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "../components/Skeleton/Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "full"],
      table: { defaultValue: { summary: "md" } },
    },
    shape: {
      control: "select",
      options: ["text", "circle", "rect"],
      table: { defaultValue: { summary: "text" } },
    },
    width: { control: "text" },
    height: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "md",
    shape: "text",
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 320 }}>
      <Skeleton size="sm" />
      <Skeleton size="md" />
      <Skeleton size="lg" />
      <Skeleton size="full" />
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      <Skeleton shape="text" width={200} height={16} />
      <Skeleton shape="circle" width={48} height={48} />
      <Skeleton shape="rect" width={120} height={80} />
    </div>
  ),
};

export const CircleSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Skeleton shape="circle" width={24} height={24} />
      <Skeleton shape="circle" width={32} height={32} />
      <Skeleton shape="circle" width={48} height={48} />
      <Skeleton shape="circle" width={64} height={64} />
      <Skeleton shape="circle" width={96} height={96} />
    </div>
  ),
};

export const TextLines: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, width: 320 }}>
      <Skeleton shape="text" width="100%" height={18} />
      <Skeleton shape="text" width="92%" height={14} />
      <Skeleton shape="text" width="80%" height={14} />
      <Skeleton shape="text" width="60%" height={14} />
    </div>
  ),
};

export const CardSkeleton: Story = {
  render: () => (
    <div
      style={{
        width: 320,
        padding: 16,
        border: "1px solid #e4e4e7",
        borderRadius: 8,
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <Skeleton shape="circle" width={40} height={40} />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
          <Skeleton shape="text" width="60%" height={12} />
          <Skeleton shape="text" width="40%" height={10} />
        </div>
      </div>
      <Skeleton shape="rect" width="100%" height={120} />
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <Skeleton shape="text" width="100%" height={12} />
        <Skeleton shape="text" width="90%" height={12} />
        <Skeleton shape="text" width="70%" height={12} />
      </div>
    </div>
  ),
};
