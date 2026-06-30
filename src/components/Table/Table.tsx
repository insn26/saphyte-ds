import React from "react";
import "./Table.css";

/** Size variant for the Table component. */
export type TableSize = "sm" | "md" | "lg";
/** Visual variant for the Table component. */
export type TableVariant = "simple" | "striped" | "bordered";

/** Props for the Table component. */
export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  size?: TableSize;
  variant?: TableVariant;
  interactive?: boolean;
  stickyHeader?: boolean;
  caption?: React.ReactNode;
  children?: React.ReactNode;
}

const TableContext = React.createContext<{
  size: TableSize;
  variant: TableVariant;
  interactive: boolean;
  stickyHeader: boolean;
} | null>(null);

const useTableContext = () => {
  const ctx = React.useContext(TableContext);
  if (!ctx) throw new Error("Table subcomponents must be used within <Table />");
  return ctx;
};

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  (
    {
      size = "md",
      variant = "simple",
      interactive = false,
      stickyHeader = false,
      className = "",
      caption,
      children,
      ...props
    },
    ref
  ) => {
    const value = React.useMemo(
      () => ({ size, variant, interactive, stickyHeader }),
      [size, variant, interactive, stickyHeader]
    );

    const classNames = [
      "ds-table",
      `ds-table--${size}`,
      `ds-table--${variant}`,
      interactive && "ds-table--interactive",
      stickyHeader && "ds-table--sticky-header",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <TableContext.Provider value={value}>
        <div className="ds-table__container">
          <table ref={ref} className={classNames} {...props}>
            {caption && <caption className="ds-table__caption">{caption}</caption>}
            {children}
          </table>
        </div>
      </TableContext.Provider>
    );
  }
);
Table.displayName = "Table";

/** Wrapper component for the table head. */
export interface TheadProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children?: React.ReactNode;
}

export const Thead = React.forwardRef<HTMLTableSectionElement, TheadProps>(
  ({ className = "", children, ...props }, ref) => (
    <thead
      ref={ref}
      className={["ds-table__thead", className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </thead>
  )
);
Thead.displayName = "Thead";

/** Wrapper component for the table body. */
export interface TbodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children?: React.ReactNode;
}

export const Tbody = React.forwardRef<HTMLTableSectionElement, TbodyProps>(
  ({ className = "", children, ...props }, ref) => (
    <tbody
      ref={ref}
      className={["ds-table__tbody", className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </tbody>
  )
);
Tbody.displayName = "Tbody";

/** Props for the table row component. */
export interface TrProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children?: React.ReactNode;
  isSelected?: boolean;
}

export const Tr = React.forwardRef<HTMLTableRowElement, TrProps>(
  ({ className = "", isSelected, children, ...props }, ref) => (
    <tr
      ref={ref}
      className={[
        "ds-table__tr",
        isSelected && "ds-table__tr--selected",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </tr>
  )
);
Tr.displayName = "Tr";

/** Props for the table header cell component. */
export interface ThProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  isNumeric?: boolean;
  children?: React.ReactNode;
}

export const Th = React.forwardRef<HTMLTableCellElement, ThProps>(
  ({ className = "", isNumeric = false, children, ...props }, ref) => {
    const { stickyHeader } = useTableContext();
    return (
      <th
        ref={ref}
        scope="col"
        className={[
          "ds-table__th",
          isNumeric && "ds-table__th--numeric",
          stickyHeader && "ds-table__th--sticky",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      >
        {children}
      </th>
    );
  }
);
Th.displayName = "Th";

/** Props for the table data cell component. */
export interface TdProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  isNumeric?: boolean;
  children?: React.ReactNode;
}

export const Td = React.forwardRef<HTMLTableCellElement, TdProps>(
  ({ className = "", isNumeric = false, children, ...props }, ref) => (
    <td
      ref={ref}
      className={[
        "ds-table__td",
        isNumeric && "ds-table__td--numeric",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </td>
  )
);
Td.displayName = "Td";

/** Props for the table caption component. */
export interface TableCaptionProps extends React.HTMLAttributes<HTMLTableCaptionElement> {
  placement?: "top" | "bottom";
  children?: React.ReactNode;
}

export const TableCaption = React.forwardRef<HTMLTableCaptionElement, TableCaptionProps>(
  ({ className = "", placement = "top", children, ...props }, ref) => (
    <caption
      ref={ref}
      className={[
        "ds-table__caption",
        `ds-table__caption--${placement}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </caption>
  )
);
TableCaption.displayName = "TableCaption";
