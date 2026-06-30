import React from "react";
import { render, screen } from "@testing-library/react";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders with children", () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("applies default classes", () => {
    render(<Badge>Default</Badge>);
    const badge = screen.getByText("Default");
    expect(badge).toHaveClass("ds-badge");
    expect(badge).toHaveClass("ds-badge--md");
    expect(badge).toHaveClass("ds-badge--subtle");
    expect(badge).toHaveClass("ds-badge--gray");
  });

  it("applies size variant", () => {
    render(<Badge size="lg">Large</Badge>);
    expect(screen.getByText("Large")).toHaveClass("ds-badge--lg");
  });

  it("applies color palette", () => {
    render(<Badge colorPalette="danger">Danger</Badge>);
    expect(screen.getByText("Danger")).toHaveClass("ds-badge--danger");
  });

  it("applies variant", () => {
    render(<Badge variant="solid">Solid</Badge>);
    expect(screen.getByText("Solid")).toHaveClass("ds-badge--solid");
  });

  it("applies custom className", () => {
    render(<Badge className="custom">Custom</Badge>);
    expect(screen.getByText("Custom")).toHaveClass("custom");
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLSpanElement>();
    render(<Badge ref={ref}>Ref</Badge>);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it("sets displayName", () => {
    expect(Badge.displayName).toBe("Badge");
  });
});
