import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SegmentedControl } from "./SegmentedControl";

describe("SegmentedControl", () => {
  const options = [
    { value: "day", label: "Day" },
    { value: "week", label: "Week" },
    { value: "month", label: "Month" },
  ];

  it("renders with options", () => {
    render(<SegmentedControl options={options} />);
    expect(screen.getByText("Day")).toBeInTheDocument();
    expect(screen.getByText("Week")).toBeInTheDocument();
    expect(screen.getByText("Month")).toBeInTheDocument();
  });

  it("has radiogroup role", () => {
    render(<SegmentedControl options={options} />);
    expect(screen.getByRole("radiogroup")).toBeInTheDocument();
  });

  it("selects first option by default", () => {
    render(<SegmentedControl options={options} />);
    const buttons = screen.getAllByRole("radio");
    expect(buttons[0]).toHaveAttribute("aria-checked", "true");
    expect(buttons[1]).toHaveAttribute("aria-checked", "false");
  });

  it("changes selection on click", async () => {
    const user = userEvent.setup();
    render(<SegmentedControl options={options} />);
    await user.click(screen.getByText("Week"));
    const buttons = screen.getAllByRole("radio");
    expect(buttons[0]).toHaveAttribute("aria-checked", "false");
    expect(buttons[1]).toHaveAttribute("aria-checked", "true");
  });

  it("calls onChange", async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<SegmentedControl options={options} onChange={handleChange} />);
    await user.click(screen.getByText("Month"));
    expect(handleChange).toHaveBeenCalledWith("month");
  });

  it("applies default classes", () => {
    const { container } = render(<SegmentedControl options={options} />);
    expect(container.firstChild).toHaveClass("ds-segmented");
  });

  it("sets displayName", () => {
    expect(SegmentedControl.displayName).toBe("SegmentedControl");
  });
});
