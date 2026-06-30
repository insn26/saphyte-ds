import React from "react";
import { render } from "@testing-library/react";
import { Separator } from "./Separator";

describe("Separator", () => {
  it("renders with default classes", () => {
    const { container } = render(<Separator />);
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveClass("ds-separator");
    expect(el).toHaveClass("ds-separator--horizontal");
  });

  it("applies orientation", () => {
    const { container } = render(<Separator orientation="vertical" />);
    expect(container.firstChild).toHaveClass("ds-separator--vertical");
  });

  it("renders as div element", () => {
    const { container } = render(<Separator />);
    expect(container.firstChild?.nodeName).toBe("DIV");
  });

  it("applies custom className", () => {
    const { container } = render(<Separator className="custom" />);
    expect(container.firstChild).toHaveClass("custom");
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<Separator ref={ref} />);
    expect(ref.current).toBe(container.firstChild);
  });

  it("sets displayName", () => {
    expect(Separator.displayName).toBe("Separator");
  });
});
