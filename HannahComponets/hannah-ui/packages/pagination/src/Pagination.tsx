import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@hannah-ui/core";

/* ─────────────────────────────────────────
   Types
───────────────────────────────────────── */
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  accentColor?: string;
  showInfo?: boolean;
  totalItems?: number;
  itemsPerPage?: number;
  disabled?: boolean;
  className?: string;
  showingLabel?: (start: number, end: number, total: number) => string;
  prevLabel?: string;
  nextLabel?: string;
  pageLabel?: string;
}

/* ─────────────────────────────────────────
   Helpers
───────────────────────────────────────── */
const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

const DOTS = "…";

function buildPages(current: number, total: number, siblings: number): (number | string)[] {
  const totalNumbers = siblings * 2 + 5; // siblings + boundaries + current + 2 dots
  if (totalNumbers >= total) return range(1, total);

  const leftSibling = Math.max(current - siblings, 1);
  const rightSibling = Math.min(current + siblings, total);

  const showLeftDots = leftSibling > 3;
  const showRightDots = rightSibling < total - 2;

  if (!showLeftDots && showRightDots) {
    const leftRange = range(1, 3 + 2 * siblings);
    return [...leftRange, DOTS, total];
  }
  if (showLeftDots && !showRightDots) {
    const rightRange = range(total - (2 + 2 * siblings), total);
    return [1, DOTS, ...rightRange];
  }
  return [1, DOTS, ...range(leftSibling, rightSibling), DOTS, total];
}

/* ─────────────────────────────────────────
   Main component
───────────────────────────────────────── */
export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  accentColor = "#7c6aff",
  showInfo = false,
  totalItems,
  itemsPerPage,
  disabled = false,
  className,
  showingLabel,
  prevLabel = "Página anterior",
  nextLabel = "Página siguiente",
  pageLabel = "Página",
}: PaginationProps) => {
  const pages = buildPages(currentPage, totalPages, siblingCount);

  const btnBase = cn(
    "flex h-9 min-w-9 items-center justify-center rounded-lg text-sm font-medium transition-all duration-150 disabled:cursor-not-allowed disabled:opacity-40",
  );

  const infoStart = totalItems && itemsPerPage ? (currentPage - 1) * itemsPerPage + 1 : null;
  const infoEnd = totalItems && itemsPerPage ? Math.min(currentPage * itemsPerPage, totalItems) : null;

  return (
    <div className={cn("flex flex-wrap items-center justify-between gap-4", className)}>
      {/* Info */}
      {showInfo && totalItems != null && itemsPerPage != null && (
        <p className="text-sm text-gray-500 dark:text-gray-500">
          {showingLabel && infoStart && infoEnd ? showingLabel(infoStart, infoEnd, totalItems!) : (<>Mostrando <span className="font-medium text-gray-700 dark:text-gray-300">{infoStart}–{infoEnd}</span> de{" "}
          <span className="font-medium text-gray-700 dark:text-gray-300">{totalItems}</span></>)}
        </p>
      )}

      {/* Controls */}
      <div className="flex items-center gap-1">
        {/* Previous */}
        <button
          type="button"
          disabled={disabled || currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className={cn(
            btnBase,
            "px-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-white",
          )}
          aria-label={prevLabel}
        >
          <ChevronLeft size={16} />
        </button>

        {/* Pages */}
        {pages.map((page, i) =>
          typeof page === "string" ? (
            <span
              key={`dots-${i}`}
              className="flex h-9 min-w-9 items-center justify-center text-sm text-gray-400 dark:text-gray-600"
            >
              {page}
            </span>
          ) : (
            <button
              key={page}
              type="button"
              disabled={disabled}
              onClick={() => page !== currentPage && onPageChange(page)}
              className={cn(
                btnBase,
                page === currentPage
                  ? "text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white",
              )}
              style={page === currentPage ? { backgroundColor: accentColor } : undefined}
              aria-current={page === currentPage ? "page" : undefined}
              aria-label={`${pageLabel} ${page}`}
            >
              {page}
            </button>
          ),
        )}

        {/* Next */}
        <button
          type="button"
          disabled={disabled || currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className={cn(
            btnBase,
            "px-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-white",
          )}
          aria-label={nextLabel}
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};
