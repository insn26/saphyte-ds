import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardBody, CardFooter } from "../components/Card/Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["elevated", "outline", "subtle", "solid"],
      table: { defaultValue: { summary: "outline" } },
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      table: { defaultValue: { summary: "md" } },
    },
    fullWidth: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card style={{ width: 360 }}>
      <CardHeader>
        <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>Card title</h3>
      </CardHeader>
      <CardBody>
        <p style={{ margin: 0, fontSize: 14, color: "#52525b" }}>
          Cards contain content and actions about a single subject.
        </p>
      </CardBody>
      <CardFooter>
        <button
          type="button"
          style={{
            padding: "6px 12px",
            border: "1px solid #d4d4d8",
            borderRadius: 6,
            background: "white",
            cursor: "pointer",
            fontSize: 13,
          }}
        >
          Action
        </button>
      </CardFooter>
    </Card>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
      {(["elevated", "outline", "subtle", "solid"] as const).map((variant) => (
        <Card key={variant} variant={variant} style={{ width: 240 }}>
          <CardHeader>
            <h3 style={{ margin: 0, fontSize: 15, fontWeight: 600, textTransform: "capitalize" }}>
              {variant}
            </h3>
          </CardHeader>
          <CardBody>
            <p style={{ margin: 0, fontSize: 13, color: "#52525b" }}>
              A {variant} card example.
            </p>
          </CardBody>
        </Card>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
      {(["sm", "md", "lg"] as const).map((size) => (
        <Card key={size} size={size} style={{ width: 220 }}>
          <CardHeader>
            <h3 style={{ margin: 0, fontSize: 14, fontWeight: 600, textTransform: "capitalize" }}>
              {size} size
            </h3>
          </CardHeader>
          <CardBody>
            <p style={{ margin: 0, fontSize: 13, color: "#52525b" }}>
              Card content with {size} padding.
            </p>
          </CardBody>
        </Card>
      ))}
    </div>
  ),
};

export const SimpleBody: Story = {
  render: () => (
    <Card style={{ width: 320 }}>
      <p style={{ margin: 0, fontSize: 14 }}>A simple card with body content only.</p>
    </Card>
  ),
};

export const WithHeader: Story = {
  render: () => (
    <Card style={{ width: 360 }}>
      <CardHeader>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>Project name</h3>
          <span style={{ fontSize: 12, color: "#71717a" }}>2 hrs ago</span>
        </div>
      </CardHeader>
      <CardBody>
        <p style={{ margin: 0, fontSize: 14, color: "#52525b" }}>
          A short description of the project and its current status.
        </p>
      </CardBody>
    </Card>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div style={{ width: 600 }}>
      <Card fullWidth variant="elevated">
        <CardHeader>
          <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>Full width card</h3>
        </CardHeader>
        <CardBody>
          <p style={{ margin: 0, fontSize: 14, color: "#52525b" }}>
            This card stretches to fill the available width of its parent container.
          </p>
        </CardBody>
      </Card>
    </div>
  ),
};

export const ProductCard: Story = {
  render: () => (
    <Card variant="elevated" style={{ width: 300 }}>
      <div
        style={{
          width: "100%",
          height: 160,
          background: "linear-gradient(135deg, #818cf8, #c084fc)",
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
        }}
      />
      <CardBody>
        <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>Product name</h3>
        <p style={{ margin: "4px 0 0", fontSize: 13, color: "#71717a" }}>
          A short description about this product.
        </p>
      </CardBody>
      <CardFooter>
        <span style={{ fontSize: 16, fontWeight: 700 }}>$49.99</span>
        <button
          type="button"
          style={{
            padding: "6px 14px",
            border: "none",
            borderRadius: 6,
            background: "#4f46e5",
            color: "white",
            cursor: "pointer",
            fontSize: 13,
            fontWeight: 500,
          }}
        >
          Add to cart
        </button>
      </CardFooter>
    </Card>
  ),
};
