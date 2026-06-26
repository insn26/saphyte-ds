import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
} from "../components/Modal";
import { Button } from "../components/Button";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl", "full"],
    },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

const ModalExample: React.FC<{ size?: any; title?: string }> = ({
  size = "md",
  title = "Modal Title",
}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button colorPalette="saphyte" onClick={() => setOpen(true)}>
        Open modal
      </Button>
      <Modal isOpen={open} onClose={() => setOpen(false)} size={size}>
        <ModalContent>
          <ModalHeader>
            <span>{title}</span>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <p>
              Modal body content goes here. The modal can contain anything: text,
              forms, images, etc.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button colorPalette="saphyte" onClick={() => setOpen(false)}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export const Default: Story = {
  render: () => <ModalExample />,
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <ModalExample size="xs" title="Extra small" />
      <ModalExample size="sm" title="Small" />
      <ModalExample size="md" title="Medium" />
      <ModalExample size="lg" title="Large" />
      <ModalExample size="xl" title="Extra large" />
      <ModalExample size="2xl" title="2x large" />
    </div>
  ),
};
