import type { Meta, StoryObj } from "@storybook/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
} from "../components/Popover";
import { Button } from "../components/Button";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    position: { control: "select", options: ["top", "right", "bottom", "left"] },
    variant: { control: "select", options: ["default", "subtle"] },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popover position="bottom">
      <PopoverTrigger asChild>
        <Button colorPalette="saphyte">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>About this feature</PopoverHeader>
        <PopoverBody>
          Popovers are perfect for floating content related to a trigger
          element.
        </PopoverBody>
      </PopoverContent>
    </Popover>
  ),
};

export const Positions: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 16,
        padding: 100,
      }}
    >
      {(["top", "right", "bottom", "left"] as const).map((p) => (
        <Popover key={p} position={p}>
          <PopoverTrigger asChild>
            <Button colorPalette="saphyte" variant="outline">
              {p}
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverBody>This popover is on the {p}.</PopoverBody>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Popover position="bottom">
      <PopoverTrigger asChild>
        <Button colorPalette="saphyte">Settings</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>Confirm action</PopoverHeader>
        <PopoverBody>Are you sure you want to continue?</PopoverBody>
        <PopoverFooter>
          <Button size="sm" variant="ghost">
            Cancel
          </Button>
          <Button size="sm" colorPalette="saphyte">
            Confirm
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  ),
};

export const NoArrow: Story = {
  render: () => (
    <Popover position="bottom">
      <PopoverTrigger asChild>
        <Button>No arrow</Button>
      </PopoverTrigger>
      <PopoverContent withArrow={false}>
        <PopoverBody>This popover has no arrow indicator.</PopoverBody>
      </PopoverContent>
    </Popover>
  ),
};
