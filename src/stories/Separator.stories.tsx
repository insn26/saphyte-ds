import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "../components/Separator/Separator";

const meta: Meta<typeof Separator> = {
  title: "Components/Separator",
  component: Separator,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      table: { defaultValue: { summary: "horizontal" } },
    },
    label: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ width: 360 }}>
      <p style={{ margin: 0, fontSize: 14 }}>Content above the separator.</p>
      <Separator />
      <p style={{ margin: 0, fontSize: 14 }}>Content below the separator.</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 16, height: 32 }}>
      <span style={{ fontSize: 14 }}>Home</span>
      <Separator orientation="vertical" />
      <span style={{ fontSize: 14 }}>Library</span>
      <Separator orientation="vertical" />
      <span style={{ fontSize: 14 }}>Settings</span>
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div style={{ width: 360 }}>
      <p style={{ margin: 0, fontSize: 14 }}>Section A</p>
      <Separator label="OR" />
      <p style={{ margin: 0, fontSize: 14 }}>Section B</p>
    </div>
  ),
};

export const WithLabelVertical: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
        gap: 16,
        height: 200,
      }}
    >
      <span style={{ fontSize: 14 }}>Left content</span>
      <Separator orientation="vertical" label="AND" />
      <span style={{ fontSize: 14 }}>Right content</span>
    </div>
  ),
};

export const InList: Story = {
  render: () => (
    <div
      style={{
        width: 320,
        display: "flex",
        flexDirection: "column",
        border: "1px solid #e4e4e7",
        borderRadius: 8,
        overflow: "hidden",
      }}
    >
      <div style={{ padding: "12px 16px", fontSize: 14 }}>Inbox</div>
      <Separator />
      <div style={{ padding: "12px 16px", fontSize: 14 }}>Drafts</div>
      <Separator />
      <div style={{ padding: "12px 16px", fontSize: 14 }}>Sent</div>
      <Separator />
      <div style={{ padding: "12px 16px", fontSize: 14 }}>Trash</div>
    </div>
  ),
};
