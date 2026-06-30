import React from "react";
import { render, screen } from "@testing-library/react";
import { Kbd, KbdGroup } from "./Kbd";

describe("Kbd", () => {
  it("renders with children", () => {
    render(<Kbd>Ctrl</Kbd>);
    expect(screen.getByText("Ctrl")).toBeInTheDocument();
  });

  it("applies default class", () => {
    render(<Kbd>K</Kbd>);
    expect(screen.getByText("K")).toHaveClass("ds-kbd");
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLElement>();
    render(<Kbd ref={ref}>Ref</Kbd>);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });

  it("sets displayName", () => {
    expect(Kbd.displayName).toBe("Kbd");
    expect(KbdGroup.displayName).toBe("KbdGroup");
  });
});

describe("KbdGroup", () => {
  it("renders children", () => {
    render(
      <KbdGroup>
        <Kbd>Cmd</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
    );
    expect(screen.getByText("Cmd")).toBeInTheDocument();
    expect(screen.getByText("K")).toBeInTheDocument();
  });

  it("applies default class", () => {
    const { container } = render(
      <KbdGroup>
        <Kbd>A</Kbd>
      </KbdGroup>
    );
    expect(container.firstChild).toHaveClass("ds-kbd-group");
  });
});
