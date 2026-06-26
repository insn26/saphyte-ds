import type { Meta, StoryObj } from "@storybook/react";
import { Steps, Step } from "../components/Steps";

const meta: Meta<typeof Steps> = {
  title: "Components/Steps",
  component: Steps,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: {
    activeStep: { control: "number" },
    orientation: { control: "select", options: ["horizontal", "vertical"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
    colorPalette: { control: "select", options: ["gray", "saphyte"] },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Steps activeStep={1}>
      <Step
        title="Account"
        description="Create your account"
      />
      <Step
        title="Profile"
        description="Set up your profile"
      />
      <Step
        title="Confirm"
        description="Confirm and finish"
      />
    </Steps>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Steps activeStep={1} orientation="vertical">
      <Step
        title="Account"
        description="Create your account"
      />
      <Step
        title="Profile"
        description="Set up your profile"
      />
      <Step
        title="Confirm"
        description="Confirm and finish"
      />
    </Steps>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <Steps activeStep={1} size="sm">
        <Step title="Step 1" description="Description" />
        <Step title="Step 2" description="Description" />
        <Step title="Step 3" description="Description" />
      </Steps>
      <Steps activeStep={1} size="md">
        <Step title="Step 1" description="Description" />
        <Step title="Step 2" description="Description" />
        <Step title="Step 3" description="Description" />
      </Steps>
      <Steps activeStep={1} size="lg">
        <Step title="Step 1" description="Description" />
        <Step title="Step 2" description="Description" />
        <Step title="Step 3" description="Description" />
      </Steps>
    </div>
  ),
};

export const WithCustomIcon: Story = {
  render: () => (
    <Steps activeStep={1}>
      <Step
        title="Account"
        description="Create your account"
        icon={<span>👤</span>}
      />
      <Step
        title="Profile"
        description="Set up your profile"
        icon={<span>📝</span>}
      />
      <Step
        title="Confirm"
        description="Confirm and finish"
        icon={<span>✓</span>}
      />
    </Steps>
  ),
};

export const Gray: Story = {
  render: () => (
    <Steps activeStep={1} colorPalette="gray">
      <Step title="Account" description="Create your account" />
      <Step title="Profile" description="Set up your profile" />
      <Step title="Confirm" description="Confirm and finish" />
    </Steps>
  ),
};
