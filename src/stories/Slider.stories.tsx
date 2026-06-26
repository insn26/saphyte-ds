import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Slider } from "../components/Slider";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    colorPalette: { control: "select", options: ["gray", "saphyte"] },
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
    showValueLabel: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = React.useState(40);
    return (
      <Slider
        label="Volume"
        value={value}
        onChange={setValue}
        showValueLabel
      />
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [v1, setV1] = React.useState(20);
    const [v2, setV2] = React.useState(40);
    const [v3, setV3] = React.useState(60);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <Slider size="sm" label="Small" value={v1} onChange={setV1} />
        <Slider size="md" label="Medium" value={v2} onChange={setV2} />
        <Slider size="lg" label="Large" value={v3} onChange={setV3} />
      </div>
    );
  },
};

export const WithMarks: Story = {
  render: () => {
    const [value, setValue] = React.useState(25);
    return (
      <Slider
        label="Brightness"
        min={0}
        max={100}
        step={25}
        value={value}
        onChange={setValue}
        showValueLabel
        marks={[
          { value: 0, label: "0" },
          { value: 25, label: "25" },
          { value: 50, label: "50" },
          { value: 75, label: "75" },
          { value: 100, label: "100" },
        ]}
      />
    );
  },
};

export const Disabled: Story = {
  render: () => <Slider label="Disabled" defaultValue={50} isDisabled />,
};

export const Gray: Story = {
  render: () => {
    const [value, setValue] = React.useState(30);
    return <Slider value={value} onChange={setValue} colorPalette="gray" />;
  },
};
