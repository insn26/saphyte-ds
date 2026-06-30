import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Alert } from "./Alert";

describe("Alert", () => {
  it("renders with alert role", () => {
    render(<Alert>Message</Alert>);
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("renders children", () => {
    render(<Alert>Message</Alert>);
    expect(screen.getByText("Message")).toBeInTheDocument();
  });

  it("renders title", () => {
    render(<Alert title="Warning">Message</Alert>);
    expect(screen.getByText("Warning")).toBeInTheDocument();
  });

  it("renders description", () => {
    render(<Alert description="This is a warning">Message</Alert>);
    expect(screen.getByText("This is a warning")).toBeInTheDocument();
  });

  it("applies default classes", () => {
    render(<Alert>Default</Alert>);
    const alert = screen.getByRole("alert");
    expect(alert).toHaveClass("ds-alert");
    expect(alert).toHaveClass("ds-alert--info");
    expect(alert).toHaveClass("ds-alert--subtle");
  });

  it("applies status variant", () => {
    render(<Alert status="error">Error</Alert>);
    expect(screen.getByRole("alert")).toHaveClass("ds-alert--error");
  });

  it("renders close button when closable", () => {
    render(<Alert closable>Closable</Alert>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("dismisses alert on close button click", async () => {
    const user = userEvent.setup();
    render(<Alert closable>Dismiss me</Alert>);
    await user.click(screen.getByRole("button"));
    expect(screen.queryByText("Dismiss me")).not.toBeInTheDocument();
  });

  it("calls onClose when dismissed", async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();
    render(
      <Alert closable onClose={handleClose}>
        Dismiss
      </Alert>
    );
    await user.click(screen.getByRole("button"));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("renders default icon for each status", () => {
    const { container } = render(<Alert status="success">Success</Alert>);
    const icon = container.querySelector(".ds-alert__icon");
    expect(icon).toBeInTheDocument();
  });

  it("sets displayName", () => {
    expect(Alert.displayName).toBe("Alert");
  });
});
