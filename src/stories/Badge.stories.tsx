import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../components/Badge/Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      table: { defaultValue: { summary: "md" } },
    },
    variant: {
      control: "select",
      options: ["solid", "subtle", "outline"],
      table: { defaultValue: { summary: "subtle" } },
    },
    colorPalette: {
      control: "select",
      options: ["gray", "danger", "success", "warning", "info", "saphyte"],
      table: { defaultValue: { summary: "gray" } },
    },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Badge",
    size: "md",
    variant: "subtle",
    colorPalette: "saphyte",
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Badge size="sm" colorPalette="saphyte">Small</Badge>
      <Badge size="md" colorPalette="saphyte">Medium</Badge>
      <Badge size="lg" colorPalette="saphyte">Large</Badge>
    </div>
  ),
};

export const Subtle: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {(["gray", "danger", "success", "warning", "info", "saphyte"] as const).map((p) => (
        <Badge key={p} variant="subtle" colorPalette={p}>
          {p}
        </Badge>
      ))}
    </div>
  ),
};

export const Solid: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {(["gray", "danger", "success", "warning", "info", "saphyte"] as const).map((p) => (
        <Badge key={p} variant="solid" colorPalette={p}>
          {p}
        </Badge>
      ))}
    </div>
  ),
};

export const Outline: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {(["gray", "danger", "success", "warning", "info", "saphyte"] as const).map((p) => (
        <Badge key={p} variant="outline" colorPalette={p}>
          {p}
        </Badge>
      ))}
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {(["subtle", "solid", "outline"] as const).map((variant) => (
        <div key={variant} style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {(["gray", "danger", "success", "warning", "info", "saphyte"] as const).map(
            (p) => (
              <Badge key={p} variant={variant} colorPalette={p}>
                {variant} · {p}
              </Badge>
            )
          )}
        </div>
      ))}
    </div>
  ),
};
