import type { Meta, StoryObj } from "@storybook/react";
import { Kbd, KbdGroup } from "../components/Kbd";

const meta: Meta<typeof Kbd> = {
  title: "Components/Kbd",
  component: Kbd,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["xs", "sm", "md"] },
    variant: { control: "select", options: ["default", "subtle", "solid"] },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Kbd>Ctrl</Kbd>,
};

export const Sizes: Story = {
  render: () => (
    <KbdGroup>
      <Kbd size="xs">⌘</Kbd>
      <Kbd size="sm">⌘</Kbd>
      <Kbd size="md">⌘</Kbd>
    </KbdGroup>
  ),
};

export const Variants: Story = {
  render: () => (
    <KbdGroup>
      <Kbd variant="default">Default</Kbd>
      <Kbd variant="subtle">Subtle</Kbd>
      <Kbd variant="solid">Solid</Kbd>
    </KbdGroup>
  ),
};

export const Combos: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div>
        Press <KbdGroup><Kbd>⌘</Kbd>+<Kbd>K</Kbd></KbdGroup> to open the search.
      </div>
      <div>
        Press <KbdGroup><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>P</Kbd></KbdGroup> for command palette.
      </div>
      <div>
        Press <KbdGroup><Kbd>Esc</Kbd></KbdGroup> to close.
      </div>
    </div>
  ),
};
