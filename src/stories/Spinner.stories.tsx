import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "../components/Spinner/Spinner";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
      table: { defaultValue: { summary: "md" } },
    },
    label: { control: "text" },
    thickness: { control: "number" },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "md",
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
      <Spinner size="sm" label="Loading..." />
      <Spinner size="md" label="Please wait" />
      <Spinner size="lg" label="Fetching data" />
    </div>
  ),
};

export const CustomThickness: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      <Spinner size="lg" thickness={1} />
      <Spinner size="lg" thickness={2} />
      <Spinner size="lg" thickness={3} />
      <Spinner size="lg" thickness={5} />
    </div>
  ),
};

export const InButton: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12 }}>
      <button
        type="button"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "8px 14px",
          border: "none",
          borderRadius: 6,
          background: "#4f46e5",
          color: "white",
          cursor: "pointer",
          fontSize: 14,
          fontWeight: 500,
        }}
        disabled
      >
        <Spinner size="sm" /> Loading...
      </button>
      <button
        type="button"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "8px 14px",
          border: "1px solid #d4d4d8",
          borderRadius: 6,
          background: "white",
          cursor: "pointer",
          fontSize: 14,
        }}
      >
        <Spinner size="sm" /> Saving
      </button>
    </div>
  ),
};
