import type { Meta, StoryObj } from "@storybook/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuGroup,
} from "../components/Menu";

const meta: Meta<typeof Menu> = {
  title: "Components/Menu",
  component: Menu,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Menu>
      <MenuButton
        style={{
          padding: "6px 12px",
          border: "1px solid #d4d4d8",
          borderRadius: 6,
          background: "#fff",
          cursor: "pointer",
        }}
      >
        Actions ▾
      </MenuButton>
      <MenuList>
        <MenuItem>Edit</MenuItem>
        <MenuItem>Duplicate</MenuItem>
        <MenuDivider />
        <MenuItem>Archive</MenuItem>
        <MenuItem>Delete</MenuItem>
      </MenuList>
    </Menu>
  ),
};

export const WithGroups: Story = {
  render: () => (
    <Menu>
      <MenuButton
        style={{
          padding: "6px 12px",
          border: "1px solid #d4d4d8",
          borderRadius: 6,
          background: "#fff",
          cursor: "pointer",
        }}
      >
        Options ▾
      </MenuButton>
      <MenuList>
        <MenuGroup title="Account">
          <MenuItem>Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="Actions">
          <MenuItem>Help</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Menu>
      <MenuButton
        style={{
          padding: "6px 12px",
          border: "1px solid #d4d4d8",
          borderRadius: 6,
          background: "#fff",
          cursor: "pointer",
        }}
      >
        Open ▾
      </MenuButton>
      <MenuList>
        <MenuItem icon={<span>✏️</span>}>Edit</MenuItem>
        <MenuItem icon={<span>📋</span>} command="⌘C">
          Copy
        </MenuItem>
        <MenuItem icon={<span>📄</span>} command="⌘P">
          Print
        </MenuItem>
        <MenuDivider />
        <MenuItem icon={<span>🗑️</span>}>Delete</MenuItem>
      </MenuList>
    </Menu>
  ),
};
