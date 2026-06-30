import React from "react";
import { render, screen } from "@testing-library/react";
import { Spinner } from "./Spinner";

describe("Spinner", () => {
  it("renders with status role", () => {
    render(<Spinner />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("renders with default classes on root", () => {
    render(<Spinner />);
    expect(screen.getByRole("status")).toHaveClass("ds-spinner-root");
  });

  it("renders spinner indicator with size class", () => {
    render(<Spinner size="lg" />);
    const root = screen.getByRole("status");
    const spinner = root.querySelector(".ds-spinner");
    expect(spinner).toHaveClass("ds-spinner--lg");
  });

  it("renders label", () => {
    render(<Spinner label="Loading..." />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("applies custom className to inner spinner element", () => {
    render(<Spinner className="custom" />);
    const root = screen.getByRole("status");
    const spinner = root.querySelector(".ds-spinner");
    expect(spinner).toHaveClass("custom");
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLSpanElement>();
    render(<Spinner ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it("sets displayName", () => {
    expect(Spinner.displayName).toBe("Spinner");
  });
});
