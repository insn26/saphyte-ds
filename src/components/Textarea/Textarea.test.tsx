import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Textarea } from "./Textarea";

describe("Textarea", () => {
  it("renders textarea element", () => {
    render(<Textarea />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("applies default classes", () => {
    render(<Textarea />);
    const el = screen.getByRole("textbox");
    expect(el).toHaveClass("ds-textarea");
    expect(el).toHaveClass("ds-textarea--outline");
  });

  it("applies variant", () => {
    render(<Textarea variant="filled" />);
    expect(screen.getByRole("textbox")).toHaveClass("ds-textarea--filled");
  });

  it("renders label", () => {
    render(<Textarea label="Bio" />);
    expect(screen.getByText("Bio")).toBeInTheDocument();
  });

  it("renders helper text", () => {
    render(<Textarea helperText="Tell us about yourself" />);
    expect(screen.getByText("Tell us about yourself")).toBeInTheDocument();
  });

  it("renders error text and marks invalid", () => {
    render(<Textarea invalid errorText="Required" />);
    expect(screen.getByRole("alert")).toHaveTextContent("Required");
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });

  it("uses default rows", () => {
    render(<Textarea />);
    expect(screen.getByRole("textbox")).toHaveAttribute("rows", "4");
  });

  it("applies custom className", () => {
    render(<Textarea className="custom" />);
    expect(screen.getByRole("textbox")).toHaveClass("custom");
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLTextAreaElement>();
    render(<Textarea ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
  });

  it("calls onChange handler", async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<Textarea onChange={handleChange} />);
    await user.type(screen.getByRole("textbox"), "a");
    expect(handleChange).toHaveBeenCalled();
  });

  it("sets displayName", () => {
    expect(Textarea.displayName).toBe("Textarea");
  });
});
