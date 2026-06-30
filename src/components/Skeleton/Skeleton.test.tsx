import React from "react";
import { render } from "@testing-library/react";
import { Skeleton } from "./Skeleton";

describe("Skeleton", () => {
  it("renders with default classes", () => {
    const { container } = render(<Skeleton />);
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveClass("ds-skeleton");
    expect(el).toHaveClass("ds-skeleton--text");
  });

  it("applies shape variant", () => {
    const { container } = render(<Skeleton shape="circle" />);
    expect(container.firstChild).toHaveClass("ds-skeleton--circle");
  });

  it("applies rect shape with size via inline styles", () => {
    const { container } = render(<Skeleton size="lg" shape="rect" />);
    expect(container.firstChild).toHaveClass("ds-skeleton--rect");
    expect((container.firstChild as HTMLElement).style.width).toBeTruthy();
  });

  it("applies custom className", () => {
    const { container } = render(<Skeleton className="custom" />);
    expect(container.firstChild).toHaveClass("custom");
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<Skeleton ref={ref} />);
    expect(ref.current).toBe(container.firstChild);
  });

  it("sets displayName", () => {
    expect(Skeleton.displayName).toBe("Skeleton");
  });
});
