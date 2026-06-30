import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Radio } from "./Radio";

describe("Radio", () => {
  it("renders radio input", () => {
    render(<Radio />);
    expect(screen.getByRole("radio")).toBeInTheDocument();
  });

  it("renders label", () => {
    render(<Radio label="Option 1" />);
    expect(screen.getByText("Option 1")).toBeInTheDocument();
  });

  it("applies default classes", () => {
    const { container } = render(<Radio />);
    expect(container.firstChild).toHaveClass("ds-radio");
  });

  it("is checked when checked prop is true", () => {
    render(<Radio checked onChange={() => undefined} />);
    expect(screen.getByRole("radio")).toBeChecked();
  });

  it("calls onChange handler", async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<Radio onChange={handleChange} />);
    await user.click(screen.getByRole("radio"));
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("disables the radio", () => {
    render(<Radio disabled />);
    expect(screen.getByRole("radio")).toBeDisabled();
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Radio ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it("sets displayName", () => {
    expect(Radio.displayName).toBe("Radio");
  });
});
