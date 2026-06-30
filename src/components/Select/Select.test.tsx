import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Select } from "./Select";

describe("Select", () => {
  it("renders select element", () => {
    render(<Select options={[{ label: "A", value: "a" }]} />);
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("renders options", () => {
    render(
      <Select
        options={[
          { label: "Option 1", value: "1" },
          { label: "Option 2", value: "2" },
        ]}
      />
    );
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
  });

  it("applies default classes", () => {
    render(<Select options={[{ label: "A", value: "a" }]} />);
    const select = screen.getByRole("combobox");
    expect(select).toHaveClass("ds-select");
    expect(select).toHaveClass("ds-select--md");
  });

  it("renders placeholder", () => {
    render(<Select options={[{ label: "A", value: "a" }]} placeholder="Choose..." />);
    expect(screen.getByText("Choose...")).toBeInTheDocument();
  });

  it("renders label", () => {
    render(<Select label="Country" options={[{ label: "A", value: "a" }]} />);
    expect(screen.getByText("Country")).toBeInTheDocument();
  });

  it("renders helper text", () => {
    render(<Select helperText="Select one" options={[{ label: "A", value: "a" }]} />);
    expect(screen.getByText("Select one")).toBeInTheDocument();
  });

  it("renders error text and marks invalid", () => {
    render(
      <Select invalid errorText="Required" options={[{ label: "A", value: "a" }]} />
    );
    expect(screen.getByRole("alert")).toHaveTextContent("Required");
    expect(screen.getByRole("combobox")).toHaveAttribute("aria-invalid", "true");
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLSelectElement>();
    render(<Select ref={ref} options={[{ label: "A", value: "a" }]} />);
    expect(ref.current).toBeInstanceOf(HTMLSelectElement);
  });

  it("calls onChange handler", async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(
      <Select
        onChange={handleChange}
        options={[
          { label: "A", value: "a" },
          { label: "B", value: "b" },
        ]}
      />
    );
    await user.selectOptions(screen.getByRole("combobox"), "b");
    expect(handleChange).toHaveBeenCalled();
  });

  it("sets displayName", () => {
    expect(Select.displayName).toBe("Select");
  });
});
