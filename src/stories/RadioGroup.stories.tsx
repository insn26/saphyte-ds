import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { RadioGroup, RadioGroupItem } from "../components/RadioGroup";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: {
    orientation: { control: "select", options: ["horizontal", "vertical"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = React.useState("email");
    return (
      <RadioGroup
        name="contact"
        value={value}
        onChange={setValue}
        options={[
          { value: "email", label: "Email" },
          { value: "sms", label: "SMS" },
          { value: "push", label: "Push notification" },
        ]}
      />
    );
  },
};

export const Horizontal: Story = {
  render: () => {
    const [value, setValue] = React.useState("sm");
    return (
      <RadioGroup
        name="size"
        orientation="horizontal"
        value={value}
        onChange={setValue}
        options={[
          { value: "sm", label: "Small" },
          { value: "md", label: "Medium" },
          { value: "lg", label: "Large" },
        ]}
      />
    );
  },
};

export const WithDescriptions: Story = {
  render: () => {
    const [value, setValue] = React.useState("basic");
    return (
      <RadioGroup
        name="plan"
        value={value}
        onChange={setValue}
        options={[
          {
            value: "basic",
            label: "Basic",
            description: "Free for personal use",
          },
          {
            value: "pro",
            label: "Pro",
            description: "$9/month, advanced features",
          },
          {
            value: "team",
            label: "Team",
            description: "$29/month, collaboration tools",
          },
        ]}
      />
    );
  },
};

export const ChildrenAPI: Story = {
  render: () => {
    const [value, setValue] = React.useState("a");
    return (
      <RadioGroup name="opts" value={value} onChange={setValue}>
        <RadioGroupItem value="a" label="Option A" description="First option" />
        <RadioGroupItem value="b" label="Option B" description="Second option" />
        <RadioGroupItem value="c" label="Option C" description="Third option" />
      </RadioGroup>
    );
  },
};
