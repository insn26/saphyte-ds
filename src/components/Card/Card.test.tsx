import React from "react";
import { render, screen } from "@testing-library/react";
import { Card, CardHeader, CardBody, CardFooter } from "./Card";

describe("Card", () => {
  it("renders with children", () => {
    render(<Card>Content</Card>);
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("applies default classes", () => {
    render(<Card>Content</Card>);
    const card = screen.getByText("Content");
    expect(card).toHaveClass("ds-card");
    expect(card).toHaveClass("ds-card--md");
    expect(card).toHaveClass("ds-card--outline");
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Card ref={ref}>Ref</Card>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("sets displayNames", () => {
    expect(Card.displayName).toBe("Card");
    expect(CardHeader.displayName).toBe("CardHeader");
    expect(CardBody.displayName).toBe("CardBody");
    expect(CardFooter.displayName).toBe("CardFooter");
  });
});

describe("CardHeader", () => {
  it("renders children", () => {
    render(<CardHeader>Header</CardHeader>);
    expect(screen.getByText("Header")).toHaveClass("ds-card__header");
  });
});

describe("CardBody", () => {
  it("renders children", () => {
    render(<CardBody>Body</CardBody>);
    expect(screen.getByText("Body")).toHaveClass("ds-card__body");
  });
});

describe("CardFooter", () => {
  it("renders children", () => {
    render(<CardFooter>Footer</CardFooter>);
    expect(screen.getByText("Footer")).toHaveClass("ds-card__footer");
  });
});
