import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Switch } from "../components/Switch/Switch";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    label: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Enable notifications",
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Switch label="Off" />
      <Switch label="On" defaultChecked />
      <Switch label="Disabled off" disabled />
      <Switch label="Disabled on" disabled defaultChecked />
    </div>
  ),
};

export const WithoutLabel: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Switch aria-label="Off" />
      <Switch aria-label="On" defaultChecked />
      <Switch aria-label="Disabled" disabled />
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [enabled, setEnabled] = React.useState(false);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
        <Switch
          label={`Notifications are ${enabled ? "on" : "off"}`}
          checked={enabled}
          onChange={(e) => setEnabled(e.target.checked)}
        />
        <button
          type="button"
          onClick={() => setEnabled((v) => !v)}
          style={{
            padding: "6px 12px",
            border: "1px solid #d4d4d8",
            borderRadius: 6,
            background: "white",
            cursor: "pointer",
            fontSize: 13,
          }}
        >
          Toggle externally
        </button>
      </div>
    );
  },
};

export const SettingsList: Story = {
  render: () => {
    const [settings, setSettings] = React.useState({
      wifi: true,
      bluetooth: false,
      airplane: false,
      hotspot: true,
    });
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          width: 320,
          padding: 16,
          border: "1px solid #e4e4e7",
          borderRadius: 8,
        }}
      >
        {(
          [
            ["wifi", "Wi-Fi"],
            ["bluetooth", "Bluetooth"],
            ["airplane", "Airplane mode"],
            ["hotspot", "Personal hotspot"],
          ] as const
        ).map(([key, label]) => (
          <label
            key={key}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8px 0",
              borderBottom: "1px solid #f4f4f5",
            }}
          >
            <span style={{ fontSize: 14 }}>{label}</span>
            <Switch
              checked={settings[key]}
              onChange={(e) =>
                setSettings((s) => ({ ...s, [key]: e.target.checked }))
              }
            />
          </label>
        ))}
      </div>
    );
  },
};
