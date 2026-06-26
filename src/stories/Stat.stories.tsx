import type { Meta, StoryObj } from "@storybook/react";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "../components/Stat";

const meta: Meta<typeof Stat> = {
  title: "Components/Stat",
  component: Stat,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Stat>
      <StatLabel>Active users</StatLabel>
      <StatNumber>12,480</StatNumber>
      <StatHelpText>
        <StatArrow type="up" />
        12% vs last month
      </StatHelpText>
    </Stat>
  ),
};

export const WithDecrease: Story = {
  render: () => (
    <Stat>
      <StatLabel>Bounce rate</StatLabel>
      <StatNumber>42.3%</StatNumber>
      <StatHelpText>
        <StatArrow type="down" />
        3.2% vs last month
      </StatHelpText>
    </Stat>
  ),
};

export const Group: Story = {
  render: () => (
    <StatGroup>
      <Stat>
        <StatLabel>Revenue</StatLabel>
        <StatNumber>$24,580</StatNumber>
        <StatHelpText>
          <StatArrow type="up" />
          8.1% this month
        </StatHelpText>
      </Stat>
      <Stat>
        <StatLabel>New customers</StatLabel>
        <StatNumber>1,284</StatNumber>
        <StatHelpText>
          <StatArrow type="up" />
          5.4% this month
        </StatHelpText>
      </Stat>
      <Stat>
        <StatLabel>Churn</StatLabel>
        <StatNumber>2.1%</StatNumber>
        <StatHelpText>
          <StatArrow type="down" />
          0.4% this month
        </StatHelpText>
      </Stat>
      <Stat>
        <StatLabel>Active sessions</StatLabel>
        <StatNumber>847</StatNumber>
        <StatHelpText>
          <StatArrow type="flat" />
          No change
        </StatHelpText>
      </Stat>
    </StatGroup>
  ),
};
