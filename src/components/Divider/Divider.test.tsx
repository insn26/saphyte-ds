import React from "react";
import { render } from "@testing-library/react";
import { Divider } from "./Divider";

describe("Divider", () => {
  it("renders with default classes", () => {
    const { container } = render(<Divider />);
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveClass("ds-divider");
    expect(el).toHaveClass("ds-divider--horizontal");
    expect(el).toHaveClass("ds-divider--solid");
  });

  it("applies orientation", () => {
    const { container } = render(<Divider orientation="vertical" />);
    expect(container.firstChild).toHaveClass("ds-divider--vertical");
  });

  it("applies variant", () => {
    const { container } = render(<Divider variant="dashed" />);
    expect(container.firstChild).toHaveClass("ds-divider--dashed");
  });

  it("applies custom className", () => {
    const { container } = render(<Divider className="custom" />);
    expect(container.firstChild).toHaveClass("custom");
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLHRElement>();
    const { container } = render(<Divider ref={ref} />);
    expect(ref.current).toBe(container.firstChild);
  });

  it("sets displayName", () => {
    expect(Divider.displayName).toBe("Divider");
  });
});
