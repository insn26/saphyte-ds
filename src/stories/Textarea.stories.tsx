import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "../components/Textarea/Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["outline", "filled", "flushed"],
      table: { defaultValue: { summary: "outline" } },
    },
    invalid: { control: "boolean" },
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
    rows: { control: "number" },
    placeholder: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Write a comment...",
    variant: "outline",
    rows: 4,
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 360 }}>
      <Textarea variant="outline" placeholder="Outline variant" />
      <Textarea variant="filled" placeholder="Filled variant" />
      <Textarea variant="flushed" placeholder="Flushed variant" />
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 360 }}>
      <Textarea
        label="Description"
        placeholder="Tell us a bit about yourself"
        rows={4}
      />
      <Textarea
        label="Feedback"
        placeholder="What do you think?"
        rows={3}
      />
    </div>
  ),
};

export const WithHelperText: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 360 }}>
      <Textarea
        label="Bio"
        placeholder="Write a short bio"
        rows={3}
        helperText="Max 280 characters"
      />
    </div>
  ),
};

export const WithErrorText: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 360 }}>
      <Textarea
        label="Comment"
        placeholder="Add a comment"
        rows={3}
        invalid
        errorText="Comment cannot be empty"
      />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 360 }}>
      <Textarea placeholder="Default" />
      <Textarea placeholder="Disabled" disabled />
      <Textarea placeholder="Read only" readOnly defaultValue="Read only value" />
      <Textarea placeholder="Invalid" invalid defaultValue="Invalid value" />
    </div>
  ),
};

export const ResizableRows: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 360 }}>
      <Textarea rows={2} placeholder="2 rows" />
      <Textarea rows={4} placeholder="4 rows" />
      <Textarea rows={6} placeholder="6 rows" />
    </div>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div style={{ width: 480 }}>
      <Textarea
        fullWidth
        label="Full width"
        placeholder="Full width textarea"
        rows={5}
      />
    </div>
  ),
};
