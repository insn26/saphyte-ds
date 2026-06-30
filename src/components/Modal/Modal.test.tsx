import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton } from "./Modal";

describe("Modal", () => {
  it("renders nothing when closed", () => {
    const { container } = render(
      <Modal isOpen={false} onClose={() => undefined}>
        <ModalContent>
          <ModalHeader>Title</ModalHeader>
        </ModalContent>
      </Modal>
    );
    expect(container.innerHTML).toBe("");
  });

  it("renders content when open", () => {
    render(
      <Modal isOpen onClose={() => undefined}>
        <ModalContent>
          <ModalHeader>Title</ModalHeader>
          <ModalBody>Content</ModalBody>
        </ModalContent>
      </Modal>
    );
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("renders with dialog role on content", () => {
    render(
      <Modal isOpen onClose={() => undefined}>
        <ModalContent>
          <ModalBody>Content</ModalBody>
        </ModalContent>
      </Modal>
    );
    const dialog = document.querySelector('[role="dialog"]');
    expect(dialog).toBeInTheDocument();
    expect(dialog).toHaveAttribute("aria-modal", "true");
  });

  it("renders close button", () => {
    render(
      <Modal isOpen onClose={() => undefined}>
        <ModalContent>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    );
    expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument();
  });

  it("calls onClose when close button clicked", async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();
    render(
      <Modal isOpen onClose={handleClose}>
        <ModalContent>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    );
    await user.click(screen.getByRole("button", { name: /close/i }));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("renders overlay", () => {
    render(
      <Modal isOpen onClose={() => undefined}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>Content</ModalBody>
        </ModalContent>
      </Modal>
    );
    const overlay = document.querySelector(".ds-modal__overlay");
    expect(overlay).toBeInTheDocument();
  });

  it("sets displayNames", () => {
    expect(Modal.displayName).toBe("Modal");
    expect(ModalOverlay.displayName).toBe("ModalOverlay");
    expect(ModalContent.displayName).toBe("ModalContent");
    expect(ModalHeader.displayName).toBe("ModalHeader");
    expect(ModalBody.displayName).toBe("ModalBody");
    expect(ModalFooter.displayName).toBe("ModalFooter");
    expect(ModalCloseButton.displayName).toBe("ModalCloseButton");
  });
});
