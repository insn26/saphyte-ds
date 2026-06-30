import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "./Tabs";

describe("Tabs", () => {
  it("renders tabs and panels", () => {
    render(
      <Tabs>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Content 1</TabPanel>
          <TabPanel>Content 2</TabPanel>
        </TabPanels>
      </Tabs>
    );
    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Tab 2")).toBeInTheDocument();
  });

  it("shows first panel by default", () => {
    render(
      <Tabs>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Content 1</TabPanel>
          <TabPanel>Content 2</TabPanel>
        </TabPanels>
      </Tabs>
    );
    expect(screen.getByText("Content 1")).toBeVisible();
  });

  it("switches tab on click", async () => {
    const user = userEvent.setup();
    render(
      <Tabs>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Content 1</TabPanel>
          <TabPanel>Content 2</TabPanel>
        </TabPanels>
      </Tabs>
    );
    await user.click(screen.getByText("Tab 2"));
    expect(screen.getByText("Content 2")).toBeVisible();
  });

  it("applies default classes", () => {
    const { container } = render(
      <Tabs>
        <TabList>
          <Tab>A</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>B</TabPanel>
        </TabPanels>
      </Tabs>
    );
    expect(container.firstChild).toHaveClass("ds-tabs");
  });

  it("sets displayNames", () => {
    expect(Tabs.displayName).toBe("Tabs");
    expect(TabList.displayName).toBe("TabList");
    expect(Tab.displayName).toBe("Tab");
    expect(TabPanels.displayName).toBe("TabPanels");
    expect(TabPanel.displayName).toBe("TabPanel");
  });
});
