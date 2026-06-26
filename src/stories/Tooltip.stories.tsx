import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Tooltip } from "../components/Tooltip/Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    position: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
      table: { defaultValue: { summary: "top" } },
    },
    variant: {
      control: "select",
      options: ["solid", "subtle"],
      table: { defaultValue: { summary: "solid" } },
    },
    open: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

const TriggerButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button
    type="button"
    style={{
      padding: "8px 14px",
      border: "1px solid #d4d4d8",
      borderRadius: 6,
      background: "white",
      cursor: "pointer",
      fontSize: 13,
    }}
  >
    {children}
  </button>
);

export const Default: Story = {
  args: {
    label: "Hello! I'm a tooltip",
    position: "top",
    variant: "solid",
  },
  render: (args) => (
    <Tooltip label={args.label} position={args.position} variant={args.variant}>
      <TriggerButton>Hover me</TriggerButton>
    </Tooltip>
  ),
};

export const Positions: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(3, 1fr)",
        gap: 24,
        padding: 64,
      }}
    >
      <div />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Tooltip label="Top tooltip" position="top" defaultOpen>
          <TriggerButton>Top</TriggerButton>
        </Tooltip>
      </div>
      <div />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Tooltip label="Left tooltip" position="left" defaultOpen>
          <TriggerButton>Left</TriggerButton>
        </Tooltip>
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <TriggerButton>Center</TriggerButton>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <Tooltip label="Right tooltip" position="right" defaultOpen>
          <TriggerButton>Right</TriggerButton>
        </Tooltip>
      </div>
      <div />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Tooltip label="Bottom tooltip" position="bottom" defaultOpen>
          <TriggerButton>Bottom</TriggerButton>
        </Tooltip>
      </div>
      <div />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      <Tooltip label="Solid tooltip" variant="solid" defaultOpen>
        <TriggerButton>Solid</TriggerButton>
      </Tooltip>
      <Tooltip label="Subtle tooltip" variant="subtle" defaultOpen>
        <TriggerButton>Subtle</TriggerButton>
      </Tooltip>
    </div>
  ),
};

export const WithRichContent: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 16 }}>
      <Tooltip
        label={
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <strong>Pro tip</strong>
            <span style={{ fontSize: 12 }}>Use keyboard shortcuts to work faster</span>
          </div>
        }
        defaultOpen
      >
        <TriggerButton>Rich content</TriggerButton>
      </Tooltip>
      <Tooltip label="⌘ + S to save" defaultOpen>
        <TriggerButton>Save shortcut</TriggerButton>
      </Tooltip>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Tooltip label="You should not see this" disabled>
      <TriggerButton>Disabled tooltip</TriggerButton>
    </Tooltip>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
        <Tooltip
          label="Controlled tooltip"
          open={open}
        >
          <TriggerButton>Hover or click toggle</TriggerButton>
        </Tooltip>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          style={{
            padding: "4px 10px",
            border: "1px solid #d4d4d8",
            borderRadius: 6,
            background: "white",
            cursor: "pointer",
            fontSize: 12,
          }}
        >
          {open ? "Hide" : "Show"} tooltip
        </button>
      </div>
    );
  },
};
