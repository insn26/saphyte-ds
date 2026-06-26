import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { SegmentedControl } from "../components/SegmentedControl";

const meta: Meta<typeof SegmentedControl> = {
  title: "Components/SegmentedControl",
  component: SegmentedControl,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    colorPalette: { control: "select", options: ["gray", "saphyte"] },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = React.useState("month");
    return (
      <SegmentedControl
        value={value}
        onChange={setValue}
        options={[
          { value: "day", label: "Day" },
          { value: "week", label: "Week" },
          { value: "month", label: "Month" },
          { value: "year", label: "Year" },
        ]}
      />
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [v1, setV1] = React.useState("sm");
    const [v2, setV2] = React.useState("md");
    const [v3, setV3] = React.useState("lg");
    const opts = [
      { value: "sm", label: "Small" },
      { value: "md", label: "Medium" },
      { value: "lg", label: "Large" },
    ];
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}>
        <SegmentedControl size="sm" value={v1} onChange={setV1} options={opts} />
        <SegmentedControl size="md" value={v2} onChange={setV2} options={opts} />
        <SegmentedControl size="lg" value={v3} onChange={setV3} options={opts} />
      </div>
    );
  },
};

export const WithIcons: Story = {
  render: () => {
    const [value, setValue] = React.useState("list");
    return (
      <SegmentedControl
        value={value}
        onChange={setValue}
        options={[
          { value: "list", label: "List", icon: <span>≡</span> },
          { value: "grid", label: "Grid", icon: <span>▦</span> },
          { value: "table", label: "Table", icon: <span>⊞</span> },
        ]}
      />
    );
  },
};

export const FullWidth: Story = {
  render: () => {
    const [value, setValue] = React.useState("preview");
    return (
      <div style={{ width: 400 }}>
        <SegmentedControl
          fullWidth
          value={value}
          onChange={setValue}
          options={[
            { value: "preview", label: "Preview" },
            { value: "code", label: "Code" },
            { value: "raw", label: "Raw" },
          ]}
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <SegmentedControl
      isDisabled
      defaultValue="day"
      options={[
        { value: "day", label: "Day" },
        { value: "week", label: "Week" },
        { value: "month", label: "Month" },
      ]}
    />
  ),
};
