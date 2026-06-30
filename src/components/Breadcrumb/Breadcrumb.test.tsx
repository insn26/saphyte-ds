import { render, screen } from "@testing-library/react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "./Breadcrumb";

describe("Breadcrumb", () => {
  it("renders breadcrumb items", () => {
    render(
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="/products">Products</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>Details</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Products")).toBeInTheDocument();
    expect(screen.getByText("Details")).toBeInTheDocument();
  });

  it("renders separators", () => {
    const { container } = render(
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="/products">Products</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    );
    const separators = container.querySelectorAll(".ds-breadcrumb__separator");
    expect(separators.length).toBeGreaterThan(0);
  });

  it("marks last item with aria-current", () => {
    render(
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="/products">Products</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    );
    const currentLink = screen.getByText("Products");
    expect(currentLink.closest("[aria-current]")).toBeInTheDocument();
  });

  it("renders as nav with aria-label", () => {
    const { container } = render(
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    );
    const nav = container.querySelector("nav");
    expect(nav).toHaveAttribute("aria-label", "Breadcrumb");
  });

  it("applies default class", () => {
    const { container } = render(
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    );
    expect(container.firstChild).toHaveClass("ds-breadcrumb");
  });

  it("sets displayNames", () => {
    expect(Breadcrumb.displayName).toBe("Breadcrumb");
    expect(BreadcrumbItem.displayName).toBe("BreadcrumbItem");
    expect(BreadcrumbLink.displayName).toBe("BreadcrumbLink");
    expect(BreadcrumbSeparator.displayName).toBe("BreadcrumbSeparator");
  });
});
