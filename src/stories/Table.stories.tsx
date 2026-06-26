import type { Meta, StoryObj } from "@storybook/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "../components/Table";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    variant: { control: "select", options: ["simple", "striped", "bordered"] },
    interactive: { control: "boolean" },
    stickyHeader: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = [
  { id: 1, name: "Liam James", email: "liam@saphyte.com", role: "Engineer", status: "Active" },
  { id: 2, name: "Olivia Chen", email: "olivia@saphyte.com", role: "Designer", status: "Active" },
  { id: 3, name: "Noah Patel", email: "noah@saphyte.com", role: "PM", status: "Inactive" },
  { id: 4, name: "Ava Johnson", email: "ava@saphyte.com", role: "Engineer", status: "Active" },
  { id: 5, name: "Ethan Lee", email: "ethan@saphyte.com", role: "QA", status: "Active" },
];

export const Default: Story = {
  render: () => (
    <Table>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Role</Th>
          <Th>Status</Th>
        </Tr>
      </Thead>
      <Tbody>
        {sampleData.map((row) => (
          <Tr key={row.id}>
            <Td>{row.name}</Td>
            <Td>{row.email}</Td>
            <Td>{row.role}</Td>
            <Td>{row.status}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {(["simple", "striped", "bordered"] as const).map((variant) => (
        <Table key={variant} variant={variant}>
          <caption style={{ textAlign: "left", padding: 4, textTransform: "capitalize" }}>
            {variant}
          </caption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Role</Th>
            </Tr>
          </Thead>
          <Tbody>
            {sampleData.slice(0, 3).map((row) => (
              <Tr key={row.id}>
                <Td>{row.name}</Td>
                <Td>{row.email}</Td>
                <Td>{row.role}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      ))}
    </div>
  ),
};

export const Interactive: Story = {
  render: () => (
    <Table interactive variant="striped">
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Role</Th>
        </Tr>
      </Thead>
      <Tbody>
        {sampleData.map((row) => (
          <Tr key={row.id}>
            <Td>{row.name}</Td>
            <Td>{row.email}</Td>
            <Td>{row.role}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {(["sm", "md", "lg"] as const).map((size) => (
        <Table key={size} size={size}>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Role</Th>
            </Tr>
          </Thead>
          <Tbody>
            {sampleData.slice(0, 2).map((row) => (
              <Tr key={row.id}>
                <Td>{row.name}</Td>
                <Td>{row.role}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      ))}
    </div>
  ),
};
