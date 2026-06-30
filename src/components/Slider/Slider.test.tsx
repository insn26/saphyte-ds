import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Slider } from "./Slider";

describe("Slider", () => {
  it("renders slider input", () => {
    render(<Slider />);
    expect(screen.getByRole("slider")).toBeInTheDocument();
  });

  it("applies default value of 0", () => {
    render(<Slider />);
    expect(screen.getByRole("slider")).toHaveValue("0");
  });

  it("applies custom value", () => {
    render(<Slider value={25} onChange={() => undefined} />);
    expect(screen.getByRole("slider")).toHaveValue("25");
  });

  it("applies default classes", () => {
    const { container } = render(<Slider />);
    const root = container.firstChild as HTMLElement;
    expect(root).toHaveClass("ds-slider");
  });

  it("renders label", () => {
    render(<Slider label="Volume" />);
    expect(screen.getByText("Volume")).toBeInTheDocument();
  });

  it("calls onChange when value changes", () => {
    const handleChange = vi.fn();
    render(<Slider onChange={handleChange} />);
    const slider = screen.getByRole("slider") as HTMLInputElement;
    fireEvent.change(slider, { target: { value: "75" } });
    expect(handleChange).toHaveBeenCalledWith(75);
  });

  it("disables the slider", () => {
    render(<Slider isDisabled />);
    expect(screen.getByRole("slider")).toBeDisabled();
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Slider ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it("sets displayName", () => {
    expect(Slider.displayName).toBe("Slider");
  });
});
