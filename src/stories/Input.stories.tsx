import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components/Input/Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
      table: { defaultValue: { summary: "md" } },
    },
    variant: {
      control: "select",
      options: ["outline", "filled", "flushed"],
      table: { defaultValue: { summary: "outline" } },
    },
    invalid: { control: "boolean" },
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
    placeholder: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
    size: "md",
    variant: "outline",
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 320 }}>
      <Input size="xs" placeholder="Extra small" />
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 320 }}>
      <Input variant="outline" placeholder="Outline variant" />
      <Input variant="filled" placeholder="Filled variant" />
      <Input variant="flushed" placeholder="Flushed variant" />
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 320 }}>
      <Input label="Email" placeholder="you@example.com" />
      <Input label="Username" placeholder="@handle" />
    </div>
  ),
};

export const WithHelperText: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 320 }}>
      <Input
        label="Password"
        type="password"
        placeholder="Enter password"
        helperText="Must be at least 8 characters"
      />
      <Input
        label="Email"
        placeholder="you@example.com"
        helperText="We will never share your email"
      />
    </div>
  ),
};

export const WithErrorText: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 320 }}>
      <Input
        label="Email"
        placeholder="you@example.com"
        defaultValue="not-an-email"
        invalid
        errorText="Please enter a valid email address"
      />
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 320 }}>
      <Input
        placeholder="Search..."
        leftIcon={<span>🔍</span>}
      />
      <Input
        placeholder="0.00"
        leftIcon={<span>$</span>}
        rightIcon={<span>USD</span>}
      />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 320 }}>
      <Input placeholder="Default" />
      <Input placeholder="Disabled" disabled />
      <Input placeholder="Invalid" invalid defaultValue="invalid value" />
      <Input placeholder="Read only" readOnly defaultValue="Read only value" />
    </div>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div style={{ width: 480 }}>
      <Input fullWidth placeholder="Full width input" size="lg" />
    </div>
  ),
};
