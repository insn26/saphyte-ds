import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "../components/Divider";

const meta: Meta<typeof Divider> = {
  title: "Components/Divider",
  component: Divider,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: {
    orientation: { control: "select", options: ["horizontal", "vertical"] },
    variant: { control: "select", options: ["solid", "dashed", "dotted"] },
    labelPosition: { control: "select", options: ["start", "center", "end"] },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ width: 400 }}>
      <p>Some content above the divider.</p>
      <Divider />
      <p>Some content below the divider.</p>
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div style={{ width: 400 }}>
      <p>Above</p>
      <Divider label="OR" />
      <p>Below</p>
    </div>
  ),
};

export const LabelPositions: Story = {
  render: () => (
    <div style={{ width: 400, display: "flex", flexDirection: "column", gap: 32 }}>
      <Divider label="Start" labelPosition="start" />
      <Divider label="Center" labelPosition="center" />
      <Divider label="End" labelPosition="end" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ width: 400, display: "flex", flexDirection: "column", gap: 16 }}>
      <Divider variant="solid" />
      <Divider variant="dashed" />
      <Divider variant="dotted" />
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 16, alignItems: "center", height: 80 }}>
      <span>Left</span>
      <Divider orientation="vertical" />
      <span>Middle</span>
      <Divider orientation="vertical" label="OR" />
      <span>Right</span>
    </div>
  ),
};
