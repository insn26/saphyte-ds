import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerCloseButton,
} from "../components/Drawer";
import { Button } from "../components/Button";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    placement: { control: "select", options: ["left", "right", "top", "bottom"] },
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl", "full"] },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

const DrawerExample: React.FC<{ placement?: any; size?: any; label: string }> = ({
  placement = "right",
  size = "md",
  label,
}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button colorPalette="saphyte" onClick={() => setOpen(true)}>
        Open {label}
      </Button>
      <Drawer isOpen={open} onClose={() => setOpen(false)} placement={placement} size={size}>
        <DrawerContent>
          <DrawerHeader>
            <span>Drawer ({label})</span>
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody>
            <p>Drawer body content for the {label} placement.</p>
            <p style={{ marginTop: 16 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button colorPalette="saphyte" onClick={() => setOpen(false)}>
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export const Default: Story = {
  render: () => <DrawerExample placement="right" size="md" label="right" />,
};

export const Placements: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <DrawerExample placement="left" label="left" />
      <DrawerExample placement="right" label="right" />
      <DrawerExample placement="top" size="md" label="top" />
      <DrawerExample placement="bottom" size="md" label="bottom" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <DrawerExample placement="right" size="xs" label="xs" />
      <DrawerExample placement="right" size="sm" label="sm" />
      <DrawerExample placement="right" size="md" label="md" />
      <DrawerExample placement="right" size="lg" label="lg" />
      <DrawerExample placement="right" size="xl" label="xl" />
    </div>
  ),
};
