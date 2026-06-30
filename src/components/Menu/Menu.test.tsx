import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Menu, MenuButton, MenuList, MenuItem, MenuDivider, MenuGroup } from "./Menu";

describe("Menu", () => {
  it("renders menu button", () => {
    render(
      <Menu>
        <MenuButton>Open</MenuButton>
        <MenuList>
          <MenuItem>Item 1</MenuItem>
        </MenuList>
      </Menu>
    );
    expect(screen.getByText("Open")).toBeInTheDocument();
  });

  it("shows menu items when opened via defaultIsOpen", () => {
    render(
      <Menu defaultIsOpen>
        <MenuButton>Open</MenuButton>
        <MenuList>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
        </MenuList>
      </Menu>
    );
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  it("shows menu on button click", async () => {
    const user = userEvent.setup();
    render(
      <Menu>
        <MenuButton>Open</MenuButton>
        <MenuList>
          <MenuItem>Item 1</MenuItem>
        </MenuList>
      </Menu>
    );
    await user.click(screen.getByText("Open"));
    expect(screen.getByText("Item 1")).toBeInTheDocument();
  });

  it("renders MenuGroup with title", () => {
    render(
      <Menu defaultIsOpen>
        <MenuButton>Open</MenuButton>
        <MenuList>
          <MenuGroup title="Group 1">
            <MenuItem>Item 1</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    );
    expect(screen.getByText("Group 1")).toBeInTheDocument();
  });

  it("renders MenuDivider", () => {
    const { container } = render(
      <Menu defaultIsOpen>
        <MenuButton>Open</MenuButton>
        <MenuList>
          <MenuItem>Item 1</MenuItem>
          <MenuDivider />
          <MenuItem>Item 2</MenuItem>
        </MenuList>
      </Menu>
    );
    const divider = container.querySelector('[role="separator"]');
    expect(divider).toBeInTheDocument();
  });

  it("sets displayNames", () => {
    expect(Menu.displayName).toBe("Menu");
    expect(MenuButton.displayName).toBe("MenuButton");
    expect(MenuList.displayName).toBe("MenuList");
    expect(MenuItem.displayName).toBe("MenuItem");
    expect(MenuDivider.displayName).toBe("MenuDivider");
    expect(MenuGroup.displayName).toBe("MenuGroup");
  });
});
