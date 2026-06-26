import React from "react";
import "./Pagination.css";

export type PaginationSize = "xs" | "sm" | "md" | "lg";
export type PaginationVariant = "outline" | "ghost" | "solid";
export type PaginationColorPalette = "gray" | "saphyte";

const SIZE_DIMENSIONS: Record<PaginationSize, { size: number; fontSize: number }> = {
  xs: { size: 24, fontSize: 12 },
  sm: { size: 32, fontSize: 13 },
  md: { size: 40, fontSize: 14 },
  lg: { size: 48, fontSize: 16 },
};

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  count: number;
  page: number;
  onPageChange?: (page: number) => void;
  pageSize?: number;
  siblingCount?: number;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  size?: PaginationSize;
  variant?: PaginationVariant;
  colorPalette?: PaginationColorPalette;
  isDisabled?: boolean;
  getHref?: (page: number) => string;
}

const range = (start: number, end: number): number[] => {
  const length = end - start + 1;
  return Array.from({ length }, (_, i) => start + i);
};

const usePaginationRange = (
  count: number,
  page: number,
  siblingCount: number
): (number | "ellipsis-start" | "ellipsis-end")[] => {
  const totalPageNumbers = siblingCount * 2 + 5;

  if (totalPageNumbers >= count) {
    return range(1, count);
  }

  const leftSiblingIndex = Math.max(page - siblingCount, 1);
  const rightSiblingIndex = Math.min(page + siblingCount, count);

  const showLeftDots = leftSiblingIndex > 2;
  const showRightDots = rightSiblingIndex < count - 2;

  if (!showLeftDots && showRightDots) {
    const leftRange = range(1, 3 + 2 * siblingCount);
    return [...leftRange, "ellipsis-end"];
  }

  if (showLeftDots && !showRightDots) {
    const rightRange = range(count - (3 + 2 * siblingCount) + 1, count);
    return ["ellipsis-start", ...rightRange];
  }

  if (showLeftDots && showRightDots) {
    const middleRange = range(leftSiblingIndex, rightSiblingIndex);
    return ["ellipsis-start", ...middleRange, "ellipsis-end"];
  }

  return range(1, count);
};

interface PageButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  page: number;
  isActive?: boolean;
  isDisabled?: boolean;
  size: PaginationSize;
  variant: PaginationVariant;
  colorPalette: PaginationColorPalette;
  children: React.ReactNode;
  href?: string;
}

const PageButton = React.forwardRef<HTMLButtonElement, PageButtonProps>(
  (
    {
      page,
      isActive = false,
      isDisabled = false,
      size,
      variant,
      colorPalette,
      children,
      href,
      className = "",
      onClick,
      ...props
    },
    ref
  ) => {
    const dims = SIZE_DIMENSIONS[size];

    const classNames = [
      "ds-pagination__button",
      `ds-pagination__button--${size}`,
      `ds-pagination__button--${variant}`,
      `ds-pagination__button--${colorPalette}`,
      isActive && "ds-pagination__button--active",
      isDisabled && "ds-pagination__button--disabled",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const style: React.CSSProperties = {
      minWidth: dims.size,
      height: dims.size,
      fontSize: dims.fontSize,
    };

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
      if (isDisabled) return;
      onClick?.(e);
    };

    if (href) {
      return (
        <a
          href={href}
          aria-label={`Go to page ${page}`}
          aria-current={isActive ? "page" : undefined}
          className={classNames}
          style={style}
          onClick={handleClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        type="button"
        aria-label={`Go to page ${page}`}
        aria-current={isActive ? "page" : undefined}
        aria-disabled={isDisabled || undefined}
        disabled={isDisabled}
        className={classNames}
        style={style}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);
PageButton.displayName = "PageButton";

interface EllipsisProps {
  size: PaginationSize;
}

const Ellipsis: React.FC<EllipsisProps> = ({ size }) => {
  const dims = SIZE_DIMENSIONS[size];
  return (
    <span
      className="ds-pagination__ellipsis"
      style={{
        minWidth: dims.size,
        height: dims.size,
        fontSize: dims.fontSize,
      }}
      aria-hidden="true"
    >
      …
    </span>
  );
};
Ellipsis.displayName = "Ellipsis";

export const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  (
    {
      count,
      page,
      onPageChange,
      pageSize: _pageSize,
      siblingCount = 1,
      showFirstLast = true,
      showPrevNext = true,
      size = "md",
      variant = "outline",
      colorPalette = "gray",
      isDisabled = false,
      getHref,
      className = "",
      ...props
    },
    ref
  ) => {
    const pages = usePaginationRange(count, page, siblingCount);

    const handlePage = (next: number) => {
      if (isDisabled) return;
      if (next < 1 || next > count || next === page) return;
      onPageChange?.(next);
    };

    const commonButtonProps = {
      size,
      variant,
      colorPalette,
    } as const;

    return (
      <nav
        ref={ref}
        aria-label="Pagination"
        className={["ds-pagination", className].filter(Boolean).join(" ")}
        {...props}
      >
        <ul className="ds-pagination__list">
          {showFirstLast && (
            <li>
              <PageButton
                page={1}
                isDisabled={isDisabled || page === 1}
                onClick={() => handlePage(1)}
                {...commonButtonProps}
                href={getHref?.(1)}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="11 17 6 12 11 7" />
                  <polyline points="18 17 13 12 18 7" />
                </svg>
              </PageButton>
            </li>
          )}
          {showPrevNext && (
            <li>
              <PageButton
                page={page - 1}
                isDisabled={isDisabled || page === 1}
                onClick={() => handlePage(page - 1)}
                {...commonButtonProps}
                href={getHref?.(page - 1)}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </PageButton>
            </li>
          )}
          {pages.map((p, idx) => {
            if (p === "ellipsis-start" || p === "ellipsis-end") {
              return (
                <li key={`${p}-${idx}`}>
                  <Ellipsis size={size} />
                </li>
              );
            }
            return (
              <li key={p}>
                <PageButton
                  page={p}
                  isActive={p === page}
                  isDisabled={isDisabled}
                  onClick={() => handlePage(p)}
                  {...commonButtonProps}
                  href={getHref?.(p)}
                >
                  {p}
                </PageButton>
              </li>
            );
          })}
          {showPrevNext && (
            <li>
              <PageButton
                page={page + 1}
                isDisabled={isDisabled || page === count}
                onClick={() => handlePage(page + 1)}
                {...commonButtonProps}
                href={getHref?.(page + 1)}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </PageButton>
            </li>
          )}
          {showFirstLast && (
            <li>
              <PageButton
                page={count}
                isDisabled={isDisabled || page === count}
                onClick={() => handlePage(count)}
                {...commonButtonProps}
                href={getHref?.(count)}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="13 17 18 12 13 7" />
                  <polyline points="6 17 11 12 6 7" />
                </svg>
              </PageButton>
            </li>
          )}
        </ul>
      </nav>
    );
  }
);
Pagination.displayName = "Pagination";
