import { type FC, type HTMLAttributes, type TdHTMLAttributes, type ThHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

export interface Column<T = Record<string, unknown>> {
  key: string;
  header: string;
  render?: (value: unknown, row: T, index: number) => React.ReactNode;
  className?: string;
  headerClassName?: string;
  align?: "left" | "center" | "right";
}

export interface TableProps<T = Record<string, unknown>>
  extends HTMLAttributes<HTMLDivElement> {
  columns: Column<T>[];
  data: T[];
  keyField?: string;
  striped?: boolean;
  hoverable?: boolean;
  bordered?: boolean;
  compact?: boolean;
  loading?: boolean;
  emptyMessage?: string;
  stickyHeader?: boolean;
}

export const Th: FC<ThHTMLAttributes<HTMLTableCellElement>> = ({
  className,
  children,
  ...props
}) => (
  <th
    className={cn(
      "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider whitespace-nowrap",
      "text-gray-500 dark:text-gray-400",
      className,
    )}
    {...props}
  >
    {children}
  </th>
);

Th.displayName = "Th";

export const Td: FC<TdHTMLAttributes<HTMLTableCellElement>> = ({
  className,
  children,
  ...props
}) => (
  <td
    className={cn("px-4 py-3 text-sm text-gray-800 dark:text-gray-200 whitespace-nowrap", className)}
    {...props}
  >
    {children}
  </td>
);

Td.displayName = "Td";

export function Table<T extends Record<string, unknown>>({
  columns,
  data,
  keyField = "id",
  striped = false,
  hoverable = true,
  bordered = false,
  compact = false,
  loading = false,
  emptyMessage = "No hay datos para mostrar",
  stickyHeader = false,
  className,
  ...props
}: TableProps<T>) {
  const cellPad = compact ? "px-3 py-2" : "px-4 py-3";

  return (
    <div
      className={cn(
        "w-full overflow-auto rounded-xl border border-gray-200 dark:border-gray-700",
        className,
      )}
      {...props}
    >
      <table className="w-full text-sm border-collapse" role="table">
        <thead
          className={cn(
            "bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700",
            stickyHeader && "sticky top-0 z-10",
          )}
        >
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className={cn(
                  cellPad,
                  "text-xs font-semibold uppercase tracking-wider whitespace-nowrap",
                  "text-gray-500 dark:text-gray-400",
                  col.align === "center" && "text-center",
                  col.align === "right" && "text-right",
                  bordered && "border border-gray-200 dark:border-gray-700",
                  col.headerClassName,
                )}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={columns.length} className="py-12 text-center text-gray-400 dark:text-gray-500">
                <div className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-5 h-5 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  <span>Cargando...</span>
                </div>
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="py-12 text-center text-gray-400 dark:text-gray-500 text-sm">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr
                key={String(row[keyField] ?? rowIndex)}
                className={cn(
                  "border-b border-gray-100 dark:border-gray-700 last:border-0",
                  striped && rowIndex % 2 !== 0 && "bg-gray-50/60 dark:bg-gray-800/40",
                  hoverable && "hover:bg-blue-50/40 dark:hover:bg-blue-950/20 transition-colors duration-100",
                )}
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={cn(
                      cellPad,
                      "text-sm text-gray-800 dark:text-gray-200",
                      col.align === "center" && "text-center",
                      col.align === "right" && "text-right",
                      bordered && "border border-gray-200 dark:border-gray-700",
                      col.className,
                    )}
                  >
                    {col.render
                      ? col.render(row[col.key], row, rowIndex)
                      : String(row[col.key] ?? "")}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

Table.displayName = "Table";
