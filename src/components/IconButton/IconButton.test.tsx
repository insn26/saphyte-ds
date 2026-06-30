import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { IconButton } from "./IconButton";

describe("IconButton", () => {
  it("renders with aria-label", () => {
    render(<IconButton aria-label="Close" />);
    expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument();
  });

  it("applies default classes", () => {
    render(<IconButton aria-label="Close" />);
    const btn = screen.getByRole("button");
    expect(btn).toHaveClass("ds-icon-button");
    expect(btn).toHaveClass("ds-icon-button--md");
    expect(btn).toHaveClass("ds-icon-button--subtle");
    expect(btn).toHaveClass("ds-icon-button--gray");
  });

  it("applies size variant", () => {
    render(<IconButton aria-label="Close" size="lg" />);
    expect(screen.getByRole("button")).toHaveClass("ds-icon-button--lg");
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<IconButton ref={ref} aria-label="Close" />);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it("calls onClick handler", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(<IconButton aria-label="Close" onClick={handleClick} />);
    await user.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("sets displayName", () => {
    expect(IconButton.displayName).toBe("IconButton");
  });
});
