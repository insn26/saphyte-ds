import type { Meta, StoryObj } from "@storybook/react";
import {
  EmptyState,
  EmptyStateIcon,
  EmptyStateTitle,
  EmptyStateDescription,
  EmptyStateAction,
  DefaultEmptyIcon,
} from "../components/EmptyState";
import { Button } from "../components/Button";

const meta: Meta<typeof EmptyState> = {
  title: "Components/EmptyState",
  component: EmptyState,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <EmptyState>
      <EmptyStateIcon>
        <DefaultEmptyIcon />
      </EmptyStateIcon>
      <EmptyStateTitle>No projects yet</EmptyStateTitle>
      <EmptyStateDescription>
        Get started by creating your first project.
      </EmptyStateDescription>
      <EmptyStateAction>
        <Button colorPalette="saphyte">Create project</Button>
      </EmptyStateAction>
    </EmptyState>
  ),
};

export const NoAction: Story = {
  render: () => (
    <EmptyState>
      <EmptyStateIcon>
        <span style={{ fontSize: 24 }}>📭</span>
      </EmptyStateIcon>
      <EmptyStateTitle>No results found</EmptyStateTitle>
      <EmptyStateDescription>
        Try adjusting your search or filters.
      </EmptyStateDescription>
    </EmptyState>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <EmptyState size="sm">
        <EmptyStateTitle>Small</EmptyStateTitle>
        <EmptyStateDescription>Compact empty state</EmptyStateDescription>
      </EmptyState>
      <EmptyState size="md">
        <EmptyStateTitle>Medium</EmptyStateTitle>
        <EmptyStateDescription>Default empty state</EmptyStateDescription>
      </EmptyState>
      <EmptyState size="lg">
        <EmptyStateTitle>Large</EmptyStateTitle>
        <EmptyStateDescription>Larger empty state with more breathing room</EmptyStateDescription>
      </EmptyState>
    </div>
  ),
};
