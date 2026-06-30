import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tag, TagLabel, TagCloseButton, TagLeftIcon } from "./Tag";

describe("Tag", () => {
  it("renders with children", () => {
    render(<Tag>Label</Tag>);
    expect(screen.getByText("Label")).toBeInTheDocument();
  });

  it("applies default classes", () => {
    render(<Tag>Default</Tag>);
    const tag = screen.getByText("Default");
    expect(tag).toHaveClass("ds-tag");
    expect(tag).toHaveClass("ds-tag--md");
    expect(tag).toHaveClass("ds-tag--subtle");
    expect(tag).toHaveClass("ds-tag--gray");
  });

  it("renders TagLabel within Tag", () => {
    render(
      <Tag>
        <TagLabel>Name</TagLabel>
      </Tag>
    );
    expect(screen.getByText("Name")).toHaveClass("ds-tag__label");
  });

  it("renders TagLeftIcon within Tag", () => {
    render(
      <Tag>
        <TagLeftIcon data-testid="icon" />
      </Tag>
    );
    expect(screen.getByTestId("icon")).toHaveClass("ds-tag__icon");
    expect(screen.getByTestId("icon")).toHaveClass("ds-tag__icon--left");
  });

  it("renders TagCloseButton and calls onClose", async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();
    render(
      <Tag onClose={handleClose}>
        <TagLabel>Dismiss</TagLabel>
        <TagCloseButton />
      </Tag>
    );
    const closeBtn = screen.getByRole("button");
    expect(closeBtn).toHaveClass("ds-tag__close");
    await user.click(closeBtn);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("forwards ref on Tag", () => {
    const ref = React.createRef<HTMLSpanElement>();
    render(<Tag ref={ref}>Ref</Tag>);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it("sets displayNames", () => {
    expect(Tag.displayName).toBe("Tag");
    expect(TagLabel.displayName).toBe("TagLabel");
    expect(TagCloseButton.displayName).toBe("TagCloseButton");
    expect(TagLeftIcon.displayName).toBe("TagLeftIcon");
  });
});
