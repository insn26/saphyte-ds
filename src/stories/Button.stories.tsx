import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["2xs", "xs", "sm", "md", "lg"],
      table: { defaultValue: { summary: "md" } },
    },
    variant: {
      control: "select",
      options: ["solid", "subtle", "surface", "outline", "ghost", "plain"],
      table: { defaultValue: { summary: "solid" } },
    },
    colorPalette: {
      control: "select",
      options: [
        "gray", "danger", "pink", "purple", "cyan",
        "saphyte", "info", "teal", "success", "yellow", "warning",
      ],
      table: { defaultValue: { summary: "gray" } },
    },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Button", size: "md", variant: "solid", colorPalette: "saphyte" },
};

export const Solid: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {(["gray", "danger", "pink", "purple", "cyan", "saphyte", "info", "teal", "success", "yellow", "warning"] as const).map((p) => (
        <Button key={p} colorPalette={p} variant="solid">Button</Button>
      ))}
    </div>
  ),
};

export const Subtle: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {(["gray", "danger", "pink", "purple", "cyan", "saphyte", "info", "teal", "success", "yellow", "warning"] as const).map((p) => (
        <Button key={p} colorPalette={p} variant="subtle">Button</Button>
      ))}
    </div>
  ),
};

export const Surface: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {(["gray", "danger", "pink", "purple", "cyan", "saphyte", "info", "teal", "success", "yellow", "warning"] as const).map((p) => (
        <Button key={p} colorPalette={p} variant="surface">Button</Button>
      ))}
    </div>
  ),
};

export const Outline: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {(["gray", "danger", "pink", "purple", "cyan", "saphyte", "info", "teal", "success", "yellow", "warning"] as const).map((p) => (
        <Button key={p} colorPalette={p} variant="outline">Button</Button>
      ))}
    </div>
  ),
};

export const Ghost: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {(["gray", "danger", "pink", "purple", "cyan", "saphyte", "info", "teal", "success", "yellow", "warning"] as const).map((p) => (
        <Button key={p} colorPalette={p} variant="ghost">Button</Button>
      ))}
    </div>
  ),
};

export const Plain: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {(["gray", "danger", "pink", "purple", "cyan", "saphyte", "info", "teal", "success", "yellow", "warning"] as const).map((p) => (
        <Button key={p} colorPalette={p} variant="plain">Button</Button>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Button size="2xs" colorPalette="saphyte">2xs</Button>
      <Button size="xs" colorPalette="saphyte">xs</Button>
      <Button size="sm" colorPalette="saphyte">sm</Button>
      <Button size="md" colorPalette="saphyte">md</Button>
      <Button size="lg" colorPalette="saphyte">lg</Button>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Button colorPalette="saphyte">Default</Button>
      <Button colorPalette="saphyte" disabled>Disabled</Button>
      <Button colorPalette="saphyte" loading>Loading</Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Button leftIcon={<span>←</span>} colorPalette="saphyte">Back</Button>
      <Button rightIcon={<span>→</span>} colorPalette="saphyte">Next</Button>
      <Button leftIcon={<span>+</span>} colorPalette="success">Add item</Button>
      <Button leftIcon={<span>×</span>} colorPalette="danger" variant="ghost">Delete</Button>
    </div>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <Button fullWidth colorPalette="saphyte" size="lg">Full width button</Button>
    </div>
  ),
};
