import React from "react";
import { render, screen } from "@testing-library/react";
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption } from "./Table";

describe("Table", () => {
  it("renders table structure", () => {
    render(
      <Table>
        <TableCaption>Users</TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>John</Td>
          </Tr>
        </Tbody>
      </Table>
    );
    expect(screen.getByText("Users")).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("John")).toBeInTheDocument();
  });

  it("renders table element inside container", () => {
    const { container } = render(
      <Table>
        <Thead>
          <Tr>
            <Th>H</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>D</Td>
          </Tr>
        </Tbody>
      </Table>
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveClass("ds-table__container");
    const table = wrapper.querySelector("table");
    expect(table).toHaveClass("ds-table");
  });

  it("forwards ref to table element", () => {
    const ref = React.createRef<HTMLTableElement>();
    render(
      <Table ref={ref}>
        <Thead>
          <Tr>
            <Th>H</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>D</Td>
          </Tr>
        </Tbody>
      </Table>
    );
    expect(ref.current).toBeInstanceOf(HTMLTableElement);
  });

  it("sets displayNames", () => {
    expect(Table.displayName).toBe("Table");
    expect(Thead.displayName).toBe("Thead");
    expect(Tbody.displayName).toBe("Tbody");
    expect(Tr.displayName).toBe("Tr");
    expect(Th.displayName).toBe("Th");
    expect(Td.displayName).toBe("Td");
    expect(TableCaption.displayName).toBe("TableCaption");
  });
});
