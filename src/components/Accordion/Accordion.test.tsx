import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel } from "./Accordion";

describe("Accordion", () => {
  it("renders with content", () => {
    render(
      <Accordion>
        <AccordionItem>
          <AccordionButton>Section 1</AccordionButton>
          <AccordionPanel>Content 1</AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
    expect(screen.getByText("Section 1")).toBeInTheDocument();
  });

  it("starts collapsed by default", () => {
    render(
      <Accordion>
        <AccordionItem>
          <AccordionButton>Section 1</AccordionButton>
          <AccordionPanel>Content 1</AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
    const panel = screen.getByText("Content 1").closest(".ds-accordion__panel");
    expect(panel).toHaveAttribute("hidden");
  });

  it("expands panel on button click", async () => {
    const user = userEvent.setup();
    render(
      <Accordion>
        <AccordionItem>
          <AccordionButton>Section 1</AccordionButton>
          <AccordionPanel>Content 1</AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
    await user.click(screen.getByRole("button"));
    const panel = screen.getByText("Content 1").closest(".ds-accordion__panel");
    expect(panel).not.toHaveAttribute("hidden");
  });

  it("sets aria-expanded on button", async () => {
    const user = userEvent.setup();
    render(
      <Accordion>
        <AccordionItem>
          <AccordionButton>Toggle</AccordionButton>
          <AccordionPanel>Content</AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
    const btn = screen.getByRole("button");
    expect(btn).toHaveAttribute("aria-expanded", "false");
    await user.click(btn);
    expect(btn).toHaveAttribute("aria-expanded", "true");
  });



  it("applies default class", () => {
    const { container } = render(
      <Accordion>
        <AccordionItem>
          <AccordionButton>Item</AccordionButton>
          <AccordionPanel>Panel</AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
    expect(container.firstChild).toHaveClass("ds-accordion");
  });

  it("sets displayNames", () => {
    expect(Accordion.displayName).toBe("Accordion");
    expect(AccordionItem.displayName).toBe("AccordionItem");
    expect(AccordionButton.displayName).toBe("AccordionButton");
    expect(AccordionPanel.displayName).toBe("AccordionPanel");
  });
});
