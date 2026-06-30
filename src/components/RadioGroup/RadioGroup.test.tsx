import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RadioGroup, RadioGroupItem } from "./RadioGroup";

describe("RadioGroup", () => {
  it("renders with radiogroup role", () => {
    render(
      <RadioGroup name="test">
        <RadioGroupItem value="a" label="A" />
      </RadioGroup>
    );
    expect(screen.getByRole("radiogroup")).toBeInTheDocument();
  });

  it("renders options", () => {
    render(
      <RadioGroup
        name="test"
        options={[
          { value: "a", label: "Option A" },
          { value: "b", label: "Option B" },
        ]}
      />
    );
    expect(screen.getByText("Option A")).toBeInTheDocument();
    expect(screen.getByText("Option B")).toBeInTheDocument();
  });

  it("applies default classes", () => {
    const { container } = render(
      <RadioGroup name="test">
        <RadioGroupItem value="a" label="A" />
      </RadioGroup>
    );
    expect(container.firstChild).toHaveClass("ds-radio-group");
  });

  it("checks the default value", () => {
    render(
      <RadioGroup name="test" defaultValue="b">
        <RadioGroupItem value="a" label="A" />
        <RadioGroupItem value="b" label="B" />
      </RadioGroup>
    );
    expect(screen.getByDisplayValue("b")).toBeChecked();
  });

  it("calls onChange when selection changes", async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(
      <RadioGroup name="test" onChange={handleChange}>
        <RadioGroupItem value="a" label="A" />
        <RadioGroupItem value="b" label="B" />
      </RadioGroup>
    );
    await user.click(screen.getByText("B"));
    expect(handleChange).toHaveBeenCalledWith("b");
  });

  it("sets displayName", () => {
    expect(RadioGroup.displayName).toBe("RadioGroup");
    expect(RadioGroupItem.displayName).toBe("RadioGroupItem");
  });
});
