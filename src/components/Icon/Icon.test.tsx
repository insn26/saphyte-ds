import { render } from "@testing-library/react";
import { Icon } from "./Icon";

describe("Icon", () => {
  it("renders inside wrapper span", () => {
    const { container } = render(<Icon name="activity" />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveClass("ds-icon-wrapper");
  });

  it("sets icon class via inner HTML", () => {
    const { container } = render(<Icon name="activity" />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.innerHTML).toContain("ds-icon");
  });

  it("applies size via inner HTML attributes", () => {
    const { container } = render(<Icon name="activity" size={32} />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.innerHTML).toContain('width="32"');
    expect(wrapper.innerHTML).toContain('height="32"');
  });

  it("includes className in svg class attribute", () => {
    const { container } = render(<Icon name="activity" className="custom" />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.innerHTML).toContain("custom");
  });

  it("returns null for unknown icon", () => {
    const { container } = render(<Icon name="NonExistentIcon" />);
    expect(container.innerHTML).toBe("");
  });


});
