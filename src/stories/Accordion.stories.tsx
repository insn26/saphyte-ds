import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "../components/Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: {
    allowMultiple: { control: "boolean" },
    variant: {
      control: "select",
      options: ["default", "bordered", "flush"],
    },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Accordion defaultIndex={0}>
      <AccordionItem>
        <AccordionButton>Section 1</AccordionButton>
        <AccordionPanel>Content for section 1.</AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>Section 2</AccordionButton>
        <AccordionPanel>Content for section 2.</AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>Section 3</AccordionButton>
        <AccordionPanel>Content for section 3.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion allowMultiple defaultIndex={[0, 1]}>
      <AccordionItem>
        <AccordionButton>First section</AccordionButton>
        <AccordionPanel>Content of the first section.</AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>Second section</AccordionButton>
        <AccordionPanel>Content of the second section.</AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>Third section</AccordionButton>
        <AccordionPanel>Content of the third section.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
};

export const Bordered: Story = {
  render: () => (
    <Accordion variant="bordered">
      <AccordionItem>
        <AccordionButton>How do I get started?</AccordionButton>
        <AccordionPanel>
          Sign up for an account and follow our getting started guide.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>Where can I find pricing?</AccordionButton>
        <AccordionPanel>
          Visit our pricing page for the latest information.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>How do I contact support?</AccordionButton>
        <AccordionPanel>
          Email support@saphyte.com or use the in-app chat.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <Accordion>
      <AccordionItem>
        <AccordionButton>Available</AccordionButton>
        <AccordionPanel>This section is available.</AccordionPanel>
      </AccordionItem>
      <AccordionItem isDisabled>
        <AccordionButton>Disabled</AccordionButton>
        <AccordionPanel>This section is disabled.</AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>Available</AccordionButton>
        <AccordionPanel>This section is available.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
};
