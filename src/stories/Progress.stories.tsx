import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Progress } from "../components/Progress/Progress";

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
      table: { defaultValue: { summary: "md" } },
    },
    color: {
      control: "select",
      options: ["saphyte", "success", "warning", "error"],
      table: { defaultValue: { summary: "saphyte" } },
    },
    value: { control: { type: "range", min: 0, max: 100, step: 1 } },
    min: { control: "number" },
    max: { control: "number" },
    showLabel: { control: "boolean" },
    label: { control: "text" },
    striped: { control: "boolean" },
    animated: { control: "boolean" },
    indeterminate: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50,
    size: "md",
    color: "saphyte",
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, width: 360 }}>
      <Progress size="xs" value={60} />
      <Progress size="sm" value={60} />
      <Progress size="md" value={60} />
      <Progress size="lg" value={60} />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 360 }}>
      <Progress value={70} color="saphyte" showLabel label="Default" />
      <Progress value={70} color="success" showLabel label="Success" />
      <Progress value={70} color="warning" showLabel label="Warning" />
      <Progress value={70} color="error" showLabel label="Error" />
    </div>
  ),
};

export const Values: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 360 }}>
      <Progress value={10} showLabel label="10%" />
      <Progress value={30} showLabel label="30%" />
      <Progress value={50} showLabel label="50%" />
      <Progress value={70} showLabel label="70%" />
      <Progress value={90} showLabel label="90%" />
      <Progress value={100} showLabel label="100%" />
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, width: 360 }}>
      <Progress value={45} showLabel />
      <Progress value={75} label="Storage usage" showLabel />
      <Progress value={30} label="Download" showLabel color="success" />
    </div>
  ),
};

export const Striped: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 360 }}>
      <Progress value={60} striped />
      <Progress value={60} striped animated color="success" />
      <Progress value={60} striped animated color="warning" />
    </div>
  ),
};

export const Indeterminate: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 360 }}>
      <Progress indeterminate />
      <Progress indeterminate size="lg" color="saphyte" />
    </div>
  ),
};

export const Animated: Story = {
  render: () => {
    const [value, setValue] = React.useState(0);
    React.useEffect(() => {
      const t = setInterval(() => {
        setValue((v) => (v >= 100 ? 0 : v + 5));
      }, 200);
      return () => clearInterval(t);
    }, []);
    return (
      <div style={{ width: 360 }}>
        <Progress
          value={value}
          label="Uploading..."
          showLabel
          striped
          animated
          color="saphyte"
        />
      </div>
    );
  },
};
