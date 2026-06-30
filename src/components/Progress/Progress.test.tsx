import { render, screen } from "@testing-library/react";
import { Progress } from "./Progress";

describe("Progress", () => {
  it("renders with progressbar role", () => {
    render(<Progress value={50} />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("sets aria-valuenow", () => {
    render(<Progress value={75} />);
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "75");
  });

  it("sets min and max", () => {
    render(<Progress value={50} />);
    const bar = screen.getByRole("progressbar");
    expect(bar).toHaveAttribute("aria-valuemin", "0");
    expect(bar).toHaveAttribute("aria-valuemax", "100");
  });

  it("renders label", () => {
    render(<Progress value={50} label="Uploading..." />);
    expect(screen.getByText("Uploading...")).toBeInTheDocument();
  });

  it("renders value text when showLabel is true", () => {
    render(<Progress value={50} showLabel />);
    expect(screen.getByText("50%")).toBeInTheDocument();
  });

  it("applies default classes", () => {
    render(<Progress value={50} />);
    const root = document.querySelector(".ds-progress") as HTMLElement;
    expect(root).toHaveClass("ds-progress", "ds-progress--md");
  });

  it("applies size variant", () => {
    render(<Progress value={50} size="lg" />);
    const root = document.querySelector(".ds-progress") as HTMLElement;
    expect(root).toHaveClass("ds-progress--lg");
  });

  it("clamps shown percentage but aria-valuenow uses raw value", () => {
    render(<Progress value={150} showLabel />);
    const bar = screen.getByRole("progressbar");
    expect(bar).toHaveAttribute("aria-valuenow", "150");
    expect(screen.getByText("100%")).toBeInTheDocument();
  });

  it("sets displayName", () => {
    expect(Progress.displayName).toBe("Progress");
  });
});
