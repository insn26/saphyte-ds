import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Icon, iconNames } from "../components/Icon/Icon";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "select",
      options: iconNames,
      description: "Icon name",
    },
    size: {
      control: "number",
      description: "Icon size in pixels",
      table: {
        defaultValue: { summary: "16" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "SearchOutlined",
    size: 24,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Icon name="SearchOutlined" size={12} />
      <Icon name="SearchOutlined" size={16} />
      <Icon name="SearchOutlined" size={20} />
      <Icon name="SearchOutlined" size={24} />
      <Icon name="SearchOutlined" size={32} />
      <Icon name="SearchOutlined" size={40} />
    </div>
  ),
};

export const CommonIcons: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <h3 style={{ fontSize: "14px", fontWeight: 600, marginBottom: "12px" }}>Navigation</h3>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Left", "Right", "Up", "Down", "Backward", "Forward", "Rollback"].map((name) => (
            <IconItem key={name} name={name} />
          ))}
        </div>
      </div>
      <div>
        <h3 style={{ fontSize: "14px", fontWeight: 600, marginBottom: "12px" }}>Actions</h3>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {["Plus", "Minus", "Close", "Check", "Search", "Edit", "Delete", "Copy", "Download", "Upload", "Share"].map((name) => (
            <IconItem key={name} name={name} />
          ))}
        </div>
      </div>
      <div>
        <h3 style={{ fontSize: "14px", fontWeight: 600, marginBottom: "12px" }}>Status</h3>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {["CheckCircle", "CloseCircle", "ExclamationCircle", "InfoCircle", "Warning", "QuestionCircle", "Bell", "Lock", "Unlock", "Eye", "EyeInvisible"].map((name) => (
            <IconItem key={name} name={name} />
          ))}
        </div>
      </div>
      <div>
        <h3 style={{ fontSize: "14px", fontWeight: 600, marginBottom: "12px" }}>Files</h3>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {["File", "Folder", "FileText", "FileAdd", "FolderAdd", "FileExcel", "FileImage", "FilePdf", "FileWord", "FileZip", "Inbox"].map((name) => (
            <IconItem key={name} name={name} />
          ))}
        </div>
      </div>
      <div>
        <h3 style={{ fontSize: "14px", fontWeight: 600, marginBottom: "12px" }}>User</h3>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {["User", "UserAdd", "UserDelete", "Team", "UserOutlined", "Contacts", "Idcard", "Profile"].map((name) => (
            <IconItem key={name} name={name} />
          ))}
        </div>
      </div>
    </div>
  ),
};

const IconItem: React.FC<{ name: string }> = ({ name }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "4px",
      padding: "12px",
      border: "1px solid #e5e9f0",
      borderRadius: "8px",
      minWidth: "80px",
    }}
  >
    <Icon name={name} size={20} />
    <span style={{ fontSize: "10px", color: "#69738d", textAlign: "center" }}>{name}</span>
  </div>
);

export const AllIcons: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      {iconNames.map((name) => (
        <IconItem key={name} name={name} />
      ))}
    </div>
  ),
};
