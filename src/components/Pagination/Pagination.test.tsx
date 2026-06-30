import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Pagination } from "./Pagination";

describe("Pagination", () => {
  it("renders page buttons", () => {
    render(<Pagination count={5} page={1} />);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("renders navigation with pagination label", () => {
    const { container } = render(<Pagination count={5} page={1} />);
    expect(container.firstChild).toHaveAttribute("aria-label", "Pagination");
  });

  it("calls onPageChange when page clicked", async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<Pagination count={5} page={1} onPageChange={handleChange} />);
    await user.click(screen.getByText("3"));
    expect(handleChange).toHaveBeenCalledWith(3);
  });

  it("marks current page as active", () => {
    render(<Pagination count={5} page={3} />);
    const btn = screen.getByLabelText("Go to page 3");
    expect(btn).toHaveAttribute("aria-current", "page");
  });

  it("disables navigation buttons on first page", () => {
    render(<Pagination count={5} page={1} />);
    const buttons = screen.getAllByRole("button");
    const disabled = buttons.filter((b) => b.hasAttribute("disabled"));
    expect(disabled.length).toBeGreaterThanOrEqual(1);
  });

  it("disables navigation on last page", () => {
    render(<Pagination count={5} page={5} />);
    const buttons = screen.getAllByRole("button");
    const disabled = buttons.filter((b) => b.hasAttribute("disabled"));
    expect(disabled.length).toBeGreaterThanOrEqual(1);
  });

  it("applies default class", () => {
    const { container } = render(<Pagination count={3} page={1} />);
    expect(container.firstChild).toHaveClass("ds-pagination");
  });

  it("sets displayName", () => {
    expect(Pagination.displayName).toBe("Pagination");
  });
});
