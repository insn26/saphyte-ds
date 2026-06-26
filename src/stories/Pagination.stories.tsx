import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Pagination } from "../components/Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    variant: { control: "select", options: ["outline", "ghost", "solid"] },
    colorPalette: { control: "select", options: ["gray", "saphyte"] },
    count: { control: "number" },
    siblingCount: { control: "number" },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [page, setPage] = React.useState(1);
    return <Pagination count={10} page={page} onPageChange={setPage} />;
  },
};

export const Variants: Story = {
  render: () => {
    const [page, setPage] = React.useState(3);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Pagination count={10} page={page} onPageChange={setPage} variant="outline" />
        <Pagination count={10} page={page} onPageChange={setPage} variant="ghost" />
        <Pagination count={10} page={page} onPageChange={setPage} variant="solid" />
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [page, setPage] = React.useState(3);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}>
        <Pagination count={10} page={page} onPageChange={setPage} size="xs" />
        <Pagination count={10} page={page} onPageChange={setPage} size="sm" />
        <Pagination count={10} page={page} onPageChange={setPage} size="md" />
        <Pagination count={10} page={page} onPageChange={setPage} size="lg" />
      </div>
    );
  },
};

export const ManyPages: Story = {
  render: () => {
    const [page, setPage] = React.useState(5);
    return <Pagination count={100} page={page} onPageChange={setPage} siblingCount={2} />;
  },
};
