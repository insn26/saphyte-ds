import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "../components/Select/Select";

const FRUITS = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "durian", label: "Durian" },
  { value: "elderberry", label: "Elderberry", disabled: true },
];

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
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
    placeholder: "Choose a fruit",
    options: FRUITS,
    size: "md",
    variant: "outline",
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 320 }}>
      <Select size="xs" placeholder="Extra small" options={FRUITS} />
      <Select size="sm" placeholder="Small" options={FRUITS} />
      <Select size="md" placeholder="Medium" options={FRUITS} />
      <Select size="lg" placeholder="Large" options={FRUITS} />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 320 }}>
      <Select variant="outline" placeholder="Outline variant" options={FRUITS} />
      <Select variant="filled" placeholder="Filled variant" options={FRUITS} />
      <Select variant="flushed" placeholder="Flushed variant" options={FRUITS} />
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 320 }}>
      <Select
        label="Country"
        placeholder="Select your country"
        options={[
          { value: "us", label: "United States" },
          { value: "uk", label: "United Kingdom" },
          { value: "id", label: "Indonesia" },
          { value: "jp", label: "Japan" },
        ]}
      />
      <Select
        label="Timezone"
        placeholder="Choose timezone"
        options={[
          { value: "utc", label: "UTC" },
          { value: "gmt", label: "GMT" },
          { value: "wib", label: "WIB (UTC+7)" },
        ]}
      />
    </div>
  ),
};

export const WithHelperText: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 320 }}>
      <Select
        label="Plan"
        placeholder="Choose a plan"
        helperText="You can change this any time"
        options={[
          { value: "free", label: "Free" },
          { value: "pro", label: "Pro" },
          { value: "team", label: "Team" },
        ]}
      />
    </div>
  ),
};

export const WithErrorText: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 320 }}>
      <Select
        label="Role"
        placeholder="Choose a role"
        invalid
        defaultValue=""
        errorText="Please select a role"
        options={[
          { value: "admin", label: "Admin" },
          { value: "member", label: "Member" },
          { value: "viewer", label: "Viewer" },
        ]}
      />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 320 }}>
      <Select placeholder="Default" options={FRUITS} />
      <Select placeholder="Disabled" options={FRUITS} disabled />
      <Select placeholder="Invalid" options={FRUITS} invalid defaultValue="" />
    </div>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div style={{ width: 480 }}>
      <Select fullWidth placeholder="Full width select" options={FRUITS} size="lg" />
    </div>
  ),
};
