import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Checkbox } from "../components/Checkbox/Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      table: { defaultValue: { summary: "md" } },
    },
    checked: { control: "boolean" },
    indeterminate: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Accept terms and conditions",
    size: "md",
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Checkbox size="sm" label="Small" defaultChecked />
      <Checkbox size="md" label="Medium" defaultChecked />
      <Checkbox size="lg" label="Large" defaultChecked />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
      <Checkbox label="Disabled indeterminate" disabled indeterminate />
    </div>
  ),
};

export const WithoutLabel: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Checkbox aria-label="Option 1" />
      <Checkbox aria-label="Option 2" defaultChecked />
      <Checkbox aria-label="Option 3" indeterminate />
    </div>
  ),
};

export const Group: Story = {
  render: () => {
    const options = ["Email", "SMS", "Push notifications"];
    const [selected, setSelected] = React.useState<string[]>(["Email"]);
    const allSelected = selected.length === options.length;
    const indeterminate =
      selected.length > 0 && selected.length < options.length;

    const toggle = (option: string) => {
      setSelected((prev) =>
        prev.includes(option)
          ? prev.filter((x) => x !== option)
          : [...prev, option]
      );
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <Checkbox
          label="Select all"
          checked={allSelected}
          indeterminate={indeterminate}
          onChange={(e) =>
            setSelected(e.target.checked ? [...options] : [])
          }
        />
        <div
          style={{
            borderLeft: "1px solid #e4e4e7",
            marginLeft: 8,
            paddingLeft: 16,
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          {options.map((opt) => (
            <Checkbox
              key={opt}
              label={opt}
              checked={selected.includes(opt)}
              onChange={() => toggle(opt)}
            />
          ))}
        </div>
      </div>
    );
  },
};
