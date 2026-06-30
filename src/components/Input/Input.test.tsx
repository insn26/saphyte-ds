import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "./Input";

describe("Input", () => {
  it("renders input element", () => {
    render(<Input />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("applies default classes", () => {
    render(<Input />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("ds-input");
    expect(input).toHaveClass("ds-input--md");
    expect(input).toHaveClass("ds-input--outline");
  });

  it("applies size variant", () => {
    render(<Input size="lg" />);
    expect(screen.getByRole("textbox")).toHaveClass("ds-input--lg");
  });

  it("applies variant", () => {
    render(<Input variant="filled" />);
    expect(screen.getByRole("textbox")).toHaveClass("ds-input--filled");
  });

  it("renders label", () => {
    render(<Input label="Email" />);
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("renders helper text", () => {
    render(<Input helperText="Enter your email" />);
    expect(screen.getByText("Enter your email")).toBeInTheDocument();
  });

  it("renders error text and marks invalid", () => {
    render(<Input invalid errorText="This is required" />);
    expect(screen.getByRole("alert")).toHaveTextContent("This is required");
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });

  it("renders left icon", () => {
    render(<Input leftIcon={<span data-testid="left-icon" />} />);
    expect(screen.getByTestId("left-icon")).toBeInTheDocument();
  });

  it("renders right icon", () => {
    render(<Input rightIcon={<span data-testid="right-icon" />} />);
    expect(screen.getByTestId("right-icon")).toBeInTheDocument();
  });

  it("applies full width class", () => {
    const { container } = render(<Input fullWidth />);
    expect(container.firstChild).toHaveClass("ds-input-root--full");
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it("calls onChange handler", async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<Input onChange={handleChange} />);
    await user.type(screen.getByRole("textbox"), "a");
    expect(handleChange).toHaveBeenCalled();
  });

  it("sets displayName", () => {
    expect(Input.displayName).toBe("Input");
  });
});
