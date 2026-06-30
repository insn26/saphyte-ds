import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverHeader, PopoverBody, PopoverFooter } from "./Popover";

describe("Popover", () => {
  it("renders trigger", () => {
    render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>
          <PopoverBody>Content</PopoverBody>
        </PopoverContent>
      </Popover>
    );
    expect(screen.getByText("Open")).toBeInTheDocument();
  });

  it("hides content by default", () => {
    render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>
          <PopoverBody>Content</PopoverBody>
        </PopoverContent>
      </Popover>
    );
    expect(screen.queryByText("Content")).not.toBeInTheDocument();
  });

  it("shows content when opened", () => {
    render(
      <Popover defaultOpen>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>
          <PopoverBody>Content</PopoverBody>
        </PopoverContent>
      </Popover>
    );
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("toggles content on trigger click", async () => {
    const user = userEvent.setup();
    render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>
          <PopoverBody>Content</PopoverBody>
        </PopoverContent>
      </Popover>
    );
    await user.click(screen.getByText("Open"));
    expect(screen.getByText("Content")).toBeInTheDocument();
    await user.click(screen.getByText("Open"));
    expect(screen.queryByText("Content")).not.toBeInTheDocument();
  });

  it("sets aria attributes on trigger", () => {
    render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>
          <PopoverBody>Content</PopoverBody>
        </PopoverContent>
      </Popover>
    );
    const btn = screen.getByText("Open");
    expect(btn).toHaveAttribute("aria-haspopup", "dialog");
    expect(btn).toHaveAttribute("aria-expanded", "false");
  });

  it("renders content with dialog role", () => {
    render(
      <Popover defaultOpen>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>
          <PopoverBody>Content</PopoverBody>
        </PopoverContent>
      </Popover>
    );
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("sets displayNames", () => {
    expect(Popover.displayName).toBe("Popover");
    expect(PopoverTrigger.displayName).toBe("PopoverTrigger");
    expect(PopoverContent.displayName).toBe("PopoverContent");
    expect(PopoverArrow.displayName).toBe("PopoverArrow");
    expect(PopoverHeader.displayName).toBe("PopoverHeader");
    expect(PopoverBody.displayName).toBe("PopoverBody");
    expect(PopoverFooter.displayName).toBe("PopoverFooter");
  });
});
