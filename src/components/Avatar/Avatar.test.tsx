import React from "react";
import { render, screen } from "@testing-library/react";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
  it("renders with initials", () => {
    render(<Avatar name="John Doe" />);
    expect(screen.getByText("JD")).toBeInTheDocument();
  });

  it("renders two initials for one-word name", () => {
    render(<Avatar name="Admin" />);
    expect(screen.getByText("AD")).toBeInTheDocument();
  });

  it("renders image when src provided", () => {
    render(<Avatar name="John" src="https://example.com/avatar.jpg" />);
    const img = screen.getByAltText("John");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "https://example.com/avatar.jpg");
  });

  it("applies custom className", () => {
    const { container } = render(<Avatar name="Test" className="custom" />);
    expect(container.firstChild).toHaveClass("custom");
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<Avatar name="Ref" ref={ref} />);
    expect(ref.current).toBe(container.firstChild);
  });

  it("sets displayName", () => {
    expect(Avatar.displayName).toBe("Avatar");
  });
});
