import type { Meta, StoryObj } from "@storybook/react";
import { Stack, VStack, HStack } from "../components/Stack";
import { Box } from "./helpers/Box";

const meta: Meta<typeof Stack> = {
  title: "Components/Stack",
  component: Stack,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: "select",
      options: ["row", "column", "row-reverse", "column-reverse"],
    },
    align: {
      control: "select",
      options: ["start", "center", "end", "stretch", "baseline"],
    },
    justify: {
      control: "select",
      options: ["start", "center", "end", "space-between", "space-around", "space-evenly"],
    },
    wrap: { control: "select", options: ["nowrap", "wrap", "wrap-reverse"] },
    spacing: { control: "number" },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const VStackDefault: Story = {
  render: () => (
    <VStack spacing={4}>
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
    </VStack>
  ),
};

export const HStackDefault: Story = {
  render: () => (
    <HStack spacing={4}>
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
    </HStack>
  ),
};

export const Spacing: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 32 }}>
      <VStack spacing={2}>
        <Box>1 (8px)</Box>
        <Box>2</Box>
        <Box>3</Box>
      </VStack>
      <VStack spacing={4}>
        <Box>2 (16px)</Box>
        <Box>2</Box>
        <Box>2</Box>
      </VStack>
      <VStack spacing={6}>
        <Box>3 (24px)</Box>
        <Box>3</Box>
        <Box>3</Box>
      </VStack>
    </div>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 32 }}>
      <Stack spacing={2} align="start" style={{ border: "1px dashed #d4d4d8", padding: 8 }}>
        <Box>align start</Box>
        <Box>align start</Box>
      </Stack>
      <Stack spacing={2} align="center" style={{ border: "1px dashed #d4d4d8", padding: 8 }}>
        <Box>align center</Box>
        <Box>align center</Box>
      </Stack>
      <Stack spacing={2} align="end" style={{ border: "1px dashed #d4d4d8", padding: 8 }}>
        <Box>align end</Box>
        <Box>align end</Box>
      </Stack>
    </div>
  ),
};
