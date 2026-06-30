import React from "react";
import { render, screen } from "@testing-library/react";
import { Stack, VStack, HStack } from "./Stack";

describe("Stack", () => {
  it("renders children", () => {
    render(<Stack>Content</Stack>);
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("applies default class", () => {
    const { container } = render(<Stack>Content</Stack>);
    expect(container.firstChild).toHaveClass("ds-stack");
  });

  it("applies direction via inline style", () => {
    const { container } = render(<Stack direction="row">Content</Stack>);
    expect((container.firstChild as HTMLElement).style.flexDirection).toBe("row");
  });

  it("defaults to column direction", () => {
    const { container } = render(<Stack>Content</Stack>);
    expect((container.firstChild as HTMLElement).style.flexDirection).toBe("column");
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<Stack ref={ref}>Ref</Stack>);
    expect(ref.current).toBe(container.firstChild);
  });

  it("sets displayNames", () => {
    expect(Stack.displayName).toBe("Stack");
    expect(VStack.displayName).toBe("VStack");
    expect(HStack.displayName).toBe("HStack");
  });
});

describe("VStack", () => {
  it("renders with column direction", () => {
    const { container } = render(<VStack>Content</VStack>);
    expect((container.firstChild as HTMLElement).style.flexDirection).toBe("column");
  });
});

describe("HStack", () => {
  it("renders with row direction", () => {
    const { container } = render(<HStack>Content</HStack>);
    expect((container.firstChild as HTMLElement).style.flexDirection).toBe("row");
  });
});
