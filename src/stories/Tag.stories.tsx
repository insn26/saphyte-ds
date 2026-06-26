import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Tag, TagLabel, TagCloseButton, TagLeftIcon } from "../components/Tag";

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    variant: { control: "select", options: ["solid", "subtle", "outline"] },
    colorPalette: {
      control: "select",
      options: ["gray", "danger", "warning", "success", "info", "saphyte"],
    },
    closable: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Tag {...args}>
      <TagLabel>Tag label</TagLabel>
    </Tag>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Tag size="sm">
        <TagLabel>Small</TagLabel>
      </Tag>
      <Tag size="md">
        <TagLabel>Medium</TagLabel>
      </Tag>
      <Tag size="lg">
        <TagLabel>Large</TagLabel>
      </Tag>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {(["subtle", "solid", "outline"] as const).map((variant) => (
        <div key={variant} style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {(["gray", "danger", "warning", "success", "info", "saphyte"] as const).map(
            (p) => (
              <Tag key={p} variant={variant} colorPalette={p}>
                <TagLabel>{p}</TagLabel>
              </Tag>
            )
          )}
        </div>
      ))}
    </div>
  ),
};

export const Closable: Story = {
  render: () => {
    const ClosableTags: React.FC = () => {
      const [tags, setTags] = React.useState([
        "React",
        "TypeScript",
        "Saphyte",
        "Design System",
      ]);
      return (
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {tags.map((t) => (
            <Tag
              key={t}
              colorPalette="saphyte"
              variant="subtle"
              onClose={() => setTags(tags.filter((x) => x !== t))}
            >
              <TagLabel>{t}</TagLabel>
              <TagCloseButton />
            </Tag>
          ))}
        </div>
      );
    };
    return <ClosableTags />;
  },
};

export const WithIcon: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8 }}>
      <Tag colorPalette="saphyte" variant="subtle">
        <TagLeftIcon>
          <span>●</span>
        </TagLeftIcon>
        <TagLabel>Active</TagLabel>
      </Tag>
      <Tag colorPalette="success" variant="subtle">
        <TagLeftIcon>
          <span>✓</span>
        </TagLeftIcon>
        <TagLabel>Verified</TagLabel>
      </Tag>
      <Tag colorPalette="danger" variant="subtle">
        <TagLeftIcon>
          <span>✕</span>
        </TagLeftIcon>
        <TagLabel>Failed</TagLabel>
      </Tag>
    </div>
  ),
};
