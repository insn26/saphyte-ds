import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Alert } from "../components/Alert/Alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: "select",
      options: ["info", "success", "warning", "error"],
      table: { defaultValue: { summary: "info" } },
    },
    variant: {
      control: "select",
      options: ["subtle", "solid", "outline", "left-accent"],
      table: { defaultValue: { summary: "subtle" } },
    },
    closable: { control: "boolean" },
    title: { control: "text" },
    description: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    status: "info",
    variant: "subtle",
    title: "Heads up!",
    description: "This is an informational alert to draw attention.",
  },
};

export const Statuses: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 480 }}>
      <Alert
        status="info"
        title="Information"
        description="New version available. Refresh to update."
      />
      <Alert
        status="success"
        title="Success"
        description="Your changes have been saved successfully."
      />
      <Alert
        status="warning"
        title="Warning"
        description="Your subscription will expire in 3 days."
      />
      <Alert
        status="error"
        title="Error"
        description="Something went wrong. Please try again."
      />
    </div>
  ),
};

export const Subtle: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 480 }}>
      <Alert status="info" variant="subtle" title="Info" description="Subtle info alert" />
      <Alert status="success" variant="subtle" title="Success" description="Subtle success alert" />
      <Alert status="warning" variant="subtle" title="Warning" description="Subtle warning alert" />
      <Alert status="error" variant="subtle" title="Error" description="Subtle error alert" />
    </div>
  ),
};

export const Solid: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 480 }}>
      <Alert status="info" variant="solid" title="Info" description="Solid info alert" />
      <Alert status="success" variant="solid" title="Success" description="Solid success alert" />
      <Alert status="warning" variant="solid" title="Warning" description="Solid warning alert" />
      <Alert status="error" variant="solid" title="Error" description="Solid error alert" />
    </div>
  ),
};

export const Outline: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 480 }}>
      <Alert status="info" variant="outline" title="Info" description="Outline info alert" />
      <Alert status="success" variant="outline" title="Success" description="Outline success alert" />
      <Alert status="warning" variant="outline" title="Warning" description="Outline warning alert" />
      <Alert status="error" variant="outline" title="Error" description="Outline error alert" />
    </div>
  ),
};

export const LeftAccent: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 480 }}>
      <Alert status="info" variant="left-accent" title="Info" description="Left-accent info alert" />
      <Alert status="success" variant="left-accent" title="Success" description="Left-accent success alert" />
      <Alert status="warning" variant="left-accent" title="Warning" description="Left-accent warning alert" />
      <Alert status="error" variant="left-accent" title="Error" description="Left-accent error alert" />
    </div>
  ),
};

export const Closable: Story = {
  render: () => {
    const [visible, setVisible] = React.useState(true);
    if (!visible) {
      return (
        <button
          type="button"
          onClick={() => setVisible(true)}
          style={{
            padding: "6px 12px",
            border: "1px solid #d4d4d8",
            borderRadius: 6,
            background: "white",
            cursor: "pointer",
          }}
        >
          Reset alert
        </button>
      );
    }
    return (
      <div style={{ width: 480 }}>
        <Alert
          status="warning"
          variant="subtle"
          title="Closable alert"
          description="Click the X to dismiss this alert."
          closable
          onClose={() => setVisible(false)}
        />
      </div>
    );
  },
};

export const WithCustomIcon: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 480 }}>
      <Alert
        status="info"
        variant="subtle"
        icon={<span style={{ fontSize: 18 }}>💡</span>}
        title="Tip"
        description="You can use a custom icon in the alert."
      />
    </div>
  ),
};

export const DescriptionOnly: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 480 }}>
      <Alert status="info" description="Just a description with no title." />
    </div>
  ),
};
