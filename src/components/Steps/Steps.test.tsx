import { render, screen } from "@testing-library/react";
import { Steps, Step, StepIcon, StepTitle, StepDescription } from "./Steps";

describe("Steps", () => {
  it("renders steps", () => {
    render(
      <Steps activeStep={0}>
        <Step title="Step 1" description="Description 1" />
        <Step title="Step 2" description="Description 2" />
      </Steps>
    );
    expect(screen.getByText("Step 1")).toBeInTheDocument();
    expect(screen.getByText("Step 2")).toBeInTheDocument();
  });

  it("applies default classes", () => {
    const { container } = render(
      <Steps activeStep={0}>
        <Step title="A" />
      </Steps>
    );
    expect(container.firstChild).toHaveClass("ds-steps");
  });

  it("marks active step status", () => {
    const { container } = render(
      <Steps activeStep={1}>
        <Step title="Step 1" />
        <Step title="Step 2" />
        <Step title="Step 3" />
      </Steps>
    );
    const items = container.querySelectorAll("li");
    expect(items[0]).toHaveClass("ds-steps__step--complete");
    expect(items[1]).toHaveClass("ds-steps__step--active");
    expect(items[2]).toHaveClass("ds-steps__step--incomplete");
  });

  it("renders step numbers for incomplete steps", () => {
    render(
      <Steps activeStep={0}>
        <Step title="A" />
        <Step title="B" />
      </Steps>
    );
    const steps = screen.getAllByText(/^[0-9]+$/);
    expect(steps).toHaveLength(2);
  });

  it("sets displayNames", () => {
    expect(Steps.displayName).toBe("Steps");
    expect(Step.displayName).toBe("Step");
    expect(StepIcon.displayName).toBe("StepIcon");
    expect(StepTitle.displayName).toBe("StepTitle");
    expect(StepDescription.displayName).toBe("StepDescription");
  });
});
