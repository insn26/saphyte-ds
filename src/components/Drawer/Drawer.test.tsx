import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter, DrawerCloseButton } from "./Drawer";

describe("Drawer", () => {
  it("renders nothing when closed", () => {
    const { container } = render(
      <Drawer isOpen={false} onClose={() => undefined}>
        <DrawerContent>
          <DrawerHeader>Title</DrawerHeader>
        </DrawerContent>
      </Drawer>
    );
    expect(container.innerHTML).toBe("");
  });

  it("renders content when open", () => {
    render(
      <Drawer isOpen onClose={() => undefined}>
        <DrawerContent>
          <DrawerHeader>Title</DrawerHeader>
          <DrawerBody>Content</DrawerBody>
        </DrawerContent>
      </Drawer>
    );
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("renders close button", () => {
    render(
      <Drawer isOpen onClose={() => undefined}>
        <DrawerContent>
          <DrawerCloseButton />
        </DrawerContent>
      </Drawer>
    );
    expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument();
  });

  it("calls onClose when close button clicked", async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();
    render(
      <Drawer isOpen onClose={handleClose}>
        <DrawerContent>
          <DrawerCloseButton />
        </DrawerContent>
      </Drawer>
    );
    await user.click(screen.getByRole("button", { name: /close/i }));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("sets displayNames", () => {
    expect(Drawer.displayName).toBe("Drawer");
    expect(DrawerOverlay.displayName).toBe("DrawerOverlay");
    expect(DrawerContent.displayName).toBe("DrawerContent");
    expect(DrawerHeader.displayName).toBe("DrawerHeader");
    expect(DrawerBody.displayName).toBe("DrawerBody");
    expect(DrawerFooter.displayName).toBe("DrawerFooter");
    expect(DrawerCloseButton.displayName).toBe("DrawerCloseButton");
  });
});
