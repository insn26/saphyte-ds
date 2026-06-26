import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "../components/Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["line", "enclosed", "soft-rounded"],
      table: { defaultValue: { summary: "line" } },
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      table: { defaultValue: { summary: "md" } },
    },
    defaultIndex: { control: "number" },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Tabs {...args}>
      <TabList>
        <Tab>Overview</Tab>
        <Tab>Activity</Tab>
        <Tab>Settings</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Overview content</TabPanel>
        <TabPanel>Activity content</TabPanel>
        <TabPanel>Settings content</TabPanel>
      </TabPanels>
    </Tabs>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      <Tabs variant="line">
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Content 1</TabPanel>
          <TabPanel>Content 2</TabPanel>
          <TabPanel>Content 3</TabPanel>
        </TabPanels>
      </Tabs>
      <Tabs variant="enclosed">
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Content 1</TabPanel>
          <TabPanel>Content 2</TabPanel>
          <TabPanel>Content 3</TabPanel>
        </TabPanels>
      </Tabs>
      <Tabs variant="soft-rounded">
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Content 1</TabPanel>
          <TabPanel>Content 2</TabPanel>
          <TabPanel>Content 3</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <Tabs size="sm">
        <TabList>
          <Tab>Small</Tab>
          <Tab>Tab Two</Tab>
          <Tab>Tab Three</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Content</TabPanel>
          <TabPanel>Content</TabPanel>
          <TabPanel>Content</TabPanel>
        </TabPanels>
      </Tabs>
      <Tabs size="md">
        <TabList>
          <Tab>Medium</Tab>
          <Tab>Tab Two</Tab>
          <Tab>Tab Three</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Content</TabPanel>
          <TabPanel>Content</TabPanel>
          <TabPanel>Content</TabPanel>
        </TabPanels>
      </Tabs>
      <Tabs size="lg">
        <TabList>
          <Tab>Large</Tab>
          <Tab>Tab Two</Tab>
          <Tab>Tab Three</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Content</TabPanel>
          <TabPanel>Content</TabPanel>
          <TabPanel>Content</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  ),
};

export const WithDisabledTab: Story = {
  render: () => (
    <Tabs>
      <TabList>
        <Tab>Active</Tab>
        <Tab isDisabled>Disabled</Tab>
        <Tab>Other</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Active content</TabPanel>
        <TabPanel>Disabled content</TabPanel>
        <TabPanel>Other content</TabPanel>
      </TabPanels>
    </Tabs>
  ),
};
