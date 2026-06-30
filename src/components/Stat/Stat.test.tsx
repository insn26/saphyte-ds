import { render, screen } from "@testing-library/react";
import { Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup } from "./Stat";

describe("Stat", () => {
  it("renders with children", () => {
    render(
      <Stat>
        <StatLabel>Visitors</StatLabel>
        <StatNumber>1,234</StatNumber>
        <StatHelpText>+10%</StatHelpText>
      </Stat>
    );
    expect(screen.getByText("Visitors")).toBeInTheDocument();
    expect(screen.getByText("1,234")).toBeInTheDocument();
    expect(screen.getByText("+10%")).toBeInTheDocument();
  });

  it("applies default classes", () => {
    const { container } = render(
      <Stat>
        <StatNumber>100</StatNumber>
      </Stat>
    );
    expect(container.firstChild).toHaveClass("ds-stat");
  });

  it("renders StatArrow with increase (svg)", () => {
    const { container } = render(<StatArrow type="up" />);
    const svg = container.firstChild as HTMLElement;
    expect(svg).toHaveClass("ds-stat__arrow");
    expect(svg).toHaveClass("ds-stat__arrow--up");
    expect(svg).toHaveAttribute("aria-label", "Increased");
  });

  it("renders StatArrow with decrease (svg)", () => {
    const { container } = render(<StatArrow type="down" />);
    const svg = container.firstChild as HTMLElement;
    expect(svg).toHaveClass("ds-stat__arrow--down");
    expect(svg).toHaveAttribute("aria-label", "Decreased");
  });

  it("sets displayNames", () => {
    expect(Stat.displayName).toBe("Stat");
    expect(StatLabel.displayName).toBe("StatLabel");
    expect(StatNumber.displayName).toBe("StatNumber");
    expect(StatHelpText.displayName).toBe("StatHelpText");
    expect(StatArrow.displayName).toBe("StatArrow");
    expect(StatGroup.displayName).toBe("StatGroup");
  });
});
