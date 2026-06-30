import { render, screen } from "@testing-library/react";
import { EmptyState, EmptyStateIcon, EmptyStateTitle, EmptyStateDescription, EmptyStateAction } from "./EmptyState";

describe("EmptyState", () => {
  it("renders with children", () => {
    render(
      <EmptyState>
        <EmptyStateTitle>No data</EmptyStateTitle>
        <EmptyStateDescription>There is nothing here</EmptyStateDescription>
      </EmptyState>
    );
    expect(screen.getByText("No data")).toBeInTheDocument();
    expect(screen.getByText("There is nothing here")).toBeInTheDocument();
  });

  it("renders action button", () => {
    render(
      <EmptyState>
        <EmptyStateAction>
          <button>Add item</button>
        </EmptyStateAction>
      </EmptyState>
    );
    expect(screen.getByText("Add item")).toBeInTheDocument();
  });

  it("renders icon", () => {
    render(
      <EmptyState>
        <EmptyStateIcon data-testid="icon" />
      </EmptyState>
    );
    expect(screen.getByTestId("icon")).toHaveClass("ds-empty-state__icon");
  });

  it("applies default class", () => {
    const { container } = render(
      <EmptyState>
        <EmptyStateTitle>Empty</EmptyStateTitle>
      </EmptyState>
    );
    expect(container.firstChild).toHaveClass("ds-empty-state");
  });

  it("sets displayNames", () => {
    expect(EmptyState.displayName).toBe("EmptyState");
    expect(EmptyStateIcon.displayName).toBe("EmptyStateIcon");
    expect(EmptyStateTitle.displayName).toBe("EmptyStateTitle");
    expect(EmptyStateDescription.displayName).toBe("EmptyStateDescription");
    expect(EmptyStateAction.displayName).toBe("EmptyStateAction");
  });
});
