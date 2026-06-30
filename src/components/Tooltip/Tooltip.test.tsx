import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tooltip } from "./Tooltip";

describe("Tooltip", () => {
  it("renders children", () => {
    render(
      <Tooltip label="Tooltip text">
        <button>Hover me</button>
      </Tooltip>
    );
    expect(screen.getByText("Hover me")).toBeInTheDocument();
  });

  it("hides tooltip by default", () => {
    render(
      <Tooltip label="Tooltip text">
        <button>Hover me</button>
      </Tooltip>
    );
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });

  it("shows tooltip when open is true", () => {
    render(
      <Tooltip label="Tooltip text" open>
        <button>Hover me</button>
      </Tooltip>
    );
    expect(screen.getByRole("tooltip")).toBeInTheDocument();
    expect(screen.getByText("Tooltip text")).toBeInTheDocument();
  });

  it("shows tooltip on mouse enter", async () => {
    const user = userEvent.setup();
    render(
      <Tooltip label="Tooltip text">
        <button>Hover me</button>
      </Tooltip>
    );
    await user.hover(screen.getByText("Hover me"));
    expect(screen.getByRole("tooltip")).toBeInTheDocument();
  });

  it("hides tooltip on mouse leave", async () => {
    const user = userEvent.setup();
    render(
      <Tooltip label="Tooltip text">
        <button>Hover me</button>
      </Tooltip>
    );
    const trigger = screen.getByText("Hover me");
    await user.hover(trigger);
    expect(screen.getByRole("tooltip")).toBeInTheDocument();
    await user.unhover(trigger);
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });

  it("does not show tooltip when disabled", () => {
    render(
      <Tooltip label="Tooltip text" open disabled>
        <button>Hover me</button>
      </Tooltip>
    );
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });

  it("sets displayName", () => {
    expect(Tooltip.displayName).toBe("Tooltip");
  });
});
