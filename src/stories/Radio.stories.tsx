import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Radio } from "../components/Radio/Radio";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      table: { defaultValue: { summary: "md" } },
    },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Option 1",
    name: "default",
    defaultChecked: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Radio size="sm" name="size-sm" label="Small" defaultChecked />
      <Radio size="md" name="size-md" label="Medium" defaultChecked />
      <Radio size="lg" name="size-lg" label="Large" defaultChecked />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Radio name="s1" label="Unchecked" />
      <Radio name="s1" label="Checked" defaultChecked />
      <Radio name="s2" label="Disabled" disabled />
      <Radio name="s2" label="Disabled checked" disabled defaultChecked />
    </div>
  ),
};

export const Group: Story = {
  render: () => {
    const [value, setValue] = React.useState("email");
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <Radio
          name="contact"
          value="email"
          label="Email"
          checked={value === "email"}
          onChange={(e) => setValue(e.target.value)}
        />
        <Radio
          name="contact"
          value="sms"
          label="SMS"
          checked={value === "sms"}
          onChange={(e) => setValue(e.target.value)}
        />
        <Radio
          name="contact"
          value="push"
          label="Push notification"
          checked={value === "push"}
          onChange={(e) => setValue(e.target.value)}
        />
        <Radio
          name="contact"
          value="none"
          label="None"
          checked={value === "none"}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    );
  },
};

export const HorizontalGroup: Story = {
  render: () => {
    const [value, setValue] = React.useState("sm");
    const opts = [
      { value: "sm", label: "Small" },
      { value: "md", label: "Medium" },
      { value: "lg", label: "Large" },
    ];
    return (
      <div style={{ display: "flex", gap: 16 }}>
        {opts.map((opt) => (
          <Radio
            key={opt.value}
            name="size-h"
            value={opt.value}
            label={opt.label}
            checked={value === opt.value}
            onChange={(e) => setValue(e.target.value)}
          />
        ))}
      </div>
    );
  },
};
