import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "../components/Avatar/Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["2xs", "xs", "sm", "md", "lg", "xl", "2xl"],
      table: { defaultValue: { summary: "md" } },
    },
    variant: {
      control: "select",
      options: ["solid", "image"],
    },
    name: { control: "text" },
    src: { control: "text" },
    alt: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Jane Cooper",
    size: "md",
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Avatar size="2xs" name="Jane Cooper" />
      <Avatar size="xs" name="Jane Cooper" />
      <Avatar size="sm" name="Jane Cooper" />
      <Avatar size="md" name="Jane Cooper" />
      <Avatar size="lg" name="Jane Cooper" />
      <Avatar size="xl" name="Jane Cooper" />
      <Avatar size="2xl" name="Jane Cooper" />
    </div>
  ),
};

export const Initials: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Avatar name="Jane Cooper" />
      <Avatar name="John Doe" />
      <Avatar name="Alice" />
      <Avatar name="Michael" />
      <Avatar name="Robert Johnson" />
    </div>
  ),
};

export const WithImage: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Avatar
        size="sm"
        src="https://i.pravatar.cc/64?img=1"
        name="User 1"
      />
      <Avatar
        size="md"
        src="https://i.pravatar.cc/96?img=2"
        name="User 2"
      />
      <Avatar
        size="lg"
        src="https://i.pravatar.cc/128?img=3"
        name="User 3"
      />
      <Avatar
        size="xl"
        src="https://i.pravatar.cc/200?img=4"
        name="User 4"
      />
    </div>
  ),
};

export const CustomInitials: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Avatar>JD</Avatar>
      <Avatar size="lg">SA</Avatar>
      <Avatar size="lg">DS</Avatar>
    </div>
  ),
};

export const AvatarGroup: Story = {
  render: () => (
    <div style={{ display: "flex" }}>
      {[
        "https://i.pravatar.cc/64?img=11",
        "https://i.pravatar.cc/64?img=12",
        "https://i.pravatar.cc/64?img=13",
        "https://i.pravatar.cc/64?img=14",
      ].map((src, i) => (
        <Avatar
          key={src}
          size="md"
          src={src}
          name={`User ${i + 1}`}
          style={{
            border: "2px solid white",
            marginLeft: i === 0 ? 0 : -10,
            zIndex: 10 - i,
          }}
        />
      ))}
      <Avatar
        size="md"
        name="+5"
        style={{
          border: "2px solid white",
          marginLeft: -10,
        }}
      >
        +5
      </Avatar>
    </div>
  ),
};
