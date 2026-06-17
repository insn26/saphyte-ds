import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "../components/Button/Button";

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "default", "dashed", "text", "link"],
      description: "Button variant",
      table: {
        defaultValue: { summary: "default" },
      },
    },
    size: {
      control: "select",
      options: ["small", "default", "large"],
      description: "Button size",
      table: {
        defaultValue: { summary: "default" },
      },
    },
    ghost: {
      control: "boolean",
      description: "Ghost mode",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    iconOnly: {
      control: "boolean",
      description: "Icon only mode",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    shape: {
      control: "select",
      options: ["default", "circle"],
      description: "Button shape",
      table: {
        defaultValue: { summary: "default" },
      },
    },
    danger: {
      control: "boolean",
      description: "Danger mode",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    loading: {
      control: "boolean",
      description: "Loading state",
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary",
  },
};

export const Default: Story = {
  args: {
    variant: "default",
    children: "Default",
  },
};

export const Dashed: Story = {
  args: {
    variant: "dashed",
    children: "Dashed",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    children: "Text",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <Button variant="primary">Primary</Button>
        <Button variant="default">Default</Button>
        <Button variant="dashed">Dashed</Button>
        <Button variant="text">Text</Button>
        <Button variant="link">Link</Button>
      </div>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <Button variant="primary" danger>Primary Danger</Button>
        <Button variant="default" danger>Default Danger</Button>
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <Button variant="primary" size="small">Small</Button>
      <Button variant="primary" size="default">Default</Button>
      <Button variant="primary" size="large">Large</Button>
    </div>
  ),
};

export const Ghost: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <Button variant="primary" ghost>Primary Ghost</Button>
        <Button variant="default" ghost>Default Ghost</Button>
      </div>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <Button variant="primary" danger ghost>Primary Danger Ghost</Button>
        <Button variant="default" danger ghost>Default Danger Ghost</Button>
      </div>
    </div>
  ),
};

export const IconOnly: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <Button variant="primary" iconOnly icon={<SearchIcon />} />
      <Button variant="default" iconOnly icon={<SearchIcon />} />
      <Button variant="primary" iconOnly icon={<PlusIcon />} shape="circle" />
      <Button variant="default" iconOnly icon={<PlusIcon />} shape="circle" />
    </div>
  ),
};

export const WithIconLeft: Story = {
  args: {
    variant: "primary",
    icon: <SearchIcon />,
    iconPosition: "left",
    children: "Search",
  },
};

export const WithIconRight: Story = {
  args: {
    variant: "primary",
    icon: <ArrowRightIcon />,
    iconPosition: "right",
    children: "Next",
  },
};

export const Loading: Story = {
  args: {
    variant: "primary",
    loading: true,
    children: "Loading",
  },
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <Button variant="primary" disabled>Primary</Button>
        <Button variant="default" disabled>Default</Button>
        <Button variant="dashed" disabled>Dashed</Button>
        <Button variant="text" disabled>Text</Button>
        <Button variant="link" disabled>Link</Button>
      </div>
    </div>
  ),
};

export const Circle: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <Button variant="primary" shape="circle" iconOnly icon={<SearchIcon />} />
      <Button variant="default" shape="circle" iconOnly icon={<SearchIcon />} />
      <Button variant="primary" danger shape="circle" iconOnly icon={<SearchIcon />} />
    </div>
  ),
};
