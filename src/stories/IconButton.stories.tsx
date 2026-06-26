import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "../components/IconButton/IconButton";
import { Icon } from "../components/Icon/Icon";

const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
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
      options: ["solid", "subtle", "surface", "outline", "ghost"],
      table: { defaultValue: { summary: "subtle" } },
    },
    colorPalette: {
      control: "select",
      options: [
        "gray", "danger", "pink", "purple", "cyan",
        "saphyte", "info", "teal", "success", "yellow", "warning",
      ],
      table: { defaultValue: { summary: "gray" } },
    },
    disabled: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    "aria-label": "Add",
    size: "md",
    variant: "subtle",
    colorPalette: "gray",
    children: <Icon name="plus" />,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <IconButton aria-label="Add" size="2xs" colorPalette="saphyte" variant="solid">
        <Icon name="plus" />
      </IconButton>
      <IconButton aria-label="Add" size="xs" colorPalette="saphyte" variant="solid">
        <Icon name="plus" />
      </IconButton>
      <IconButton aria-label="Add" size="sm" colorPalette="saphyte" variant="solid">
        <Icon name="plus" />
      </IconButton>
      <IconButton aria-label="Add" size="md" colorPalette="saphyte" variant="solid">
        <Icon name="plus" />
      </IconButton>
      <IconButton aria-label="Add" size="lg" colorPalette="saphyte" variant="solid">
        <Icon name="plus" />
      </IconButton>
    </div>
  ),
};

export const Solid: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {(["gray", "danger", "pink", "purple", "cyan", "saphyte", "info", "teal", "success", "yellow", "warning"] as const).map((p) => (
        <IconButton
          key={p}
          aria-label={p}
          colorPalette={p}
          variant="solid"
        >
          <Icon name="plus" />
        </IconButton>
      ))}
    </div>
  ),
};

export const Subtle: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {(["gray", "danger", "pink", "purple", "cyan", "saphyte", "info", "teal", "success", "yellow", "warning"] as const).map((p) => (
        <IconButton
          key={p}
          aria-label={p}
          colorPalette={p}
          variant="subtle"
        >
          <Icon name="plus" />
        </IconButton>
      ))}
    </div>
  ),
};

export const Surface: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {(["gray", "danger", "pink", "purple", "cyan", "saphyte", "info", "teal", "success", "yellow", "warning"] as const).map((p) => (
        <IconButton
          key={p}
          aria-label={p}
          colorPalette={p}
          variant="surface"
        >
          <Icon name="plus" />
        </IconButton>
      ))}
    </div>
  ),
};

export const Outline: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {(["gray", "danger", "pink", "purple", "cyan", "saphyte", "info", "teal", "success", "yellow", "warning"] as const).map((p) => (
        <IconButton
          key={p}
          aria-label={p}
          colorPalette={p}
          variant="outline"
        >
          <Icon name="plus" />
        </IconButton>
      ))}
    </div>
  ),
};

export const Ghost: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {(["gray", "danger", "pink", "purple", "cyan", "saphyte", "info", "teal", "success", "yellow", "warning"] as const).map((p) => (
        <IconButton
          key={p}
          aria-label={p}
          colorPalette={p}
          variant="ghost"
        >
          <Icon name="plus" />
        </IconButton>
      ))}
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <IconButton aria-label="Add" colorPalette="saphyte" variant="solid">
        <Icon name="plus" />
      </IconButton>
      <IconButton aria-label="Add" colorPalette="saphyte" variant="solid" disabled>
        <Icon name="plus" />
      </IconButton>
    </div>
  ),
};

export const WithDifferentIcons: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <IconButton aria-label="Add" colorPalette="success" variant="solid">
        <Icon name="plus" />
      </IconButton>
      <IconButton aria-label="Delete" colorPalette="danger" variant="solid">
        <Icon name="trash" />
      </IconButton>
      <IconButton aria-label="Edit" colorPalette="saphyte" variant="solid">
        <Icon name="settings" />
      </IconButton>
      <IconButton aria-label="Search" colorPalette="gray" variant="subtle">
        <Icon name="search" />
      </IconButton>
      <IconButton aria-label="Menu" colorPalette="gray" variant="subtle">
        <Icon name="menu" />
      </IconButton>
      <IconButton aria-label="Close" colorPalette="gray" variant="ghost">
        <Icon name="x" />
      </IconButton>
    </div>
  ),
};
