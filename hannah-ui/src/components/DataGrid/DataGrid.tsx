import React, { useState, useRef, useCallback, useEffect } from "react";
import { Check, ChevronDown, Minus } from "lucide-react";
import { cn } from "../../utils/cn";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface DataGridColumn<T> {
  key: string;
  label: string;
  width?: number;
  minWidth?: number;
  editable?: boolean;
  type?: "text" | "number" | "select" | "boolean";
  options?: { label: string; value: string }[];
  render?: (value: any, row: T, rowIndex: number) => React.ReactNode;
  align?: "left" | "center" | "right";
  pinned?: "left" | "right";
}

export interface DataGridProps<T extends Record<string, any>> {
  columns: DataGridColumn<T>[];
  data: T[];
  onCellEdit?: (rowIndex: number, key: string, value: any) => void;
  onRowClick?: (row: T, index: number) => void;
  selectedRows?: number[];
  onSelectionChange?: (indices: number[]) => void;
  rowKey?: string;
  striped?: boolean;
  compact?: boolean;
  stickyHeader?: boolean;
  maxHeight?: number | string;
  accentColor?: string;
  emptyMessage?: string;
  className?: string;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

type CellAddress = { row: number; col: number };

function cellEq(a: CellAddress | null, b: CellAddress | null) {
  if (!a || !b) return false;
  return a.row === b.row && a.col === b.col;
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function GridCheckbox({
  checked,
  indeterminate,
  onChange,
  accent,
}: {
  checked: boolean;
  indeterminate?: boolean;
  onChange: (v: boolean) => void;
  accent?: string;
}) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onChange(!checked);
      }}
      className={cn(
        "flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] border transition-colors",
        checked || indeterminate
          ? "border-transparent text-white"
          : "border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-800"
      )}
      style={
        checked || indeterminate ? { backgroundColor: accent || "#3b82f6" } : undefined
      }
    >
      {checked && <Check className="h-3 w-3" strokeWidth={3} />}
      {indeterminate && !checked && <Minus className="h-3 w-3" strokeWidth={3} />}
    </button>
  );
}

function InlineSelect({
  value,
  options,
  onChange,
  onCancel,
  compact,
}: {
  value: string;
  options: { label: string; value: string }[];
  onChange: (v: string) => void;
  onCancel: () => void;
  compact?: boolean;
}) {
  const ref = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <select
      ref={ref}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onBlur={onCancel}
      onKeyDown={(e) => {
        if (e.key === "Escape") onCancel();
      }}
      className={cn(
        "w-full bg-transparent text-[13px] outline-none appearance-none cursor-pointer",
        compact ? "py-0" : "py-0"
      )}
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}

function InlineInput({
  value,
  type,
  onCommit,
  onCancel,
}: {
  value: string | number;
  type: "text" | "number";
  onCommit: (v: string | number) => void;
  onCancel: () => void;
}) {
  const [draft, setDraft] = useState(String(value));
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus();
    ref.current?.select();
  }, []);

  const commit = () => {
    const result = type === "number" ? Number(draft) : draft;
    onCommit(result);
  };

  return (
    <input
      ref={ref}
      type={type}
      value={draft}
      onChange={(e) => setDraft(e.target.value)}
      onBlur={commit}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          commit();
        }
        if (e.key === "Escape") {
          e.preventDefault();
          onCancel();
        }
        // Stop arrow-key nav from propagating while editing
        e.stopPropagation();
      }}
      className="w-full bg-transparent text-[13px] outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
    />
  );
}

// ---------------------------------------------------------------------------
// DataGrid
// ---------------------------------------------------------------------------

export function DataGrid<T extends Record<string, any>>({
  columns,
  data,
  onCellEdit,
  onRowClick,
  selectedRows,
  onSelectionChange,
  rowKey,
  striped = false,
  compact = false,
  stickyHeader = true,
  maxHeight,
  accentColor = "#3b82f6",
  emptyMessage = "No data to display",
  className,
}: DataGridProps<T>) {
  const showCheckboxes = !!onSelectionChange;
  const [activeCell, setActiveCell] = useState<CellAddress | null>(null);
  const [editingCell, setEditingCell] = useState<CellAddress | null>(null);
  const [lastClickedRow, setLastClickedRow] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Derived selection set for O(1) lookups
  const selectionSet = new Set(selectedRows ?? []);
  const allSelected = data.length > 0 && selectionSet.size === data.length;
  const someSelected = selectionSet.size > 0 && !allSelected;

  // ----- Selection helpers -----

  const toggleRow = useCallback(
    (rowIndex: number, e: React.MouseEvent) => {
      if (!onSelectionChange) return;
      const current = selectedRows ?? [];

      if (e.shiftKey && lastClickedRow !== null) {
        const start = Math.min(lastClickedRow, rowIndex);
        const end = Math.max(lastClickedRow, rowIndex);
        const range = Array.from({ length: end - start + 1 }, (_, i) => start + i);
        const merged = Array.from(new Set([...current, ...range]));
        onSelectionChange(merged);
      } else if (e.ctrlKey || e.metaKey) {
        if (current.includes(rowIndex)) {
          onSelectionChange(current.filter((i) => i !== rowIndex));
        } else {
          onSelectionChange([...current, rowIndex]);
        }
      } else {
        onSelectionChange(current.includes(rowIndex) ? [] : [rowIndex]);
      }
      setLastClickedRow(rowIndex);
    },
    [onSelectionChange, selectedRows, lastClickedRow]
  );

  const toggleAll = useCallback(() => {
    if (!onSelectionChange) return;
    if (allSelected) {
      onSelectionChange([]);
    } else {
      onSelectionChange(data.map((_, i) => i));
    }
  }, [onSelectionChange, allSelected, data]);

  // ----- Editing helpers -----

  const startEditing = useCallback(
    (cell: CellAddress) => {
      const col = columns[cell.col];
      if (!col?.editable) return;
      setEditingCell(cell);
    },
    [columns]
  );

  const commitEdit = useCallback(
    (rowIndex: number, key: string, value: any) => {
      onCellEdit?.(rowIndex, key, value);
      setEditingCell(null);
    },
    [onCellEdit]
  );

  const cancelEdit = useCallback(() => {
    setEditingCell(null);
  }, []);

  // ----- Keyboard navigation -----

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!activeCell) return;

      // If currently editing, let the inline editor handle keys
      if (editingCell) return;

      const { row, col } = activeCell;

      const move = (dr: number, dc: number) => {
        const nr = Math.max(0, Math.min(data.length - 1, row + dr));
        const nc = Math.max(0, Math.min(columns.length - 1, col + dc));
        setActiveCell({ row: nr, col: nc });
        e.preventDefault();
      };

      switch (e.key) {
        case "ArrowUp":
          move(-1, 0);
          break;
        case "ArrowDown":
          move(1, 0);
          break;
        case "ArrowLeft":
          move(0, -1);
          break;
        case "ArrowRight":
          move(0, 1);
          break;
        case "Enter":
          startEditing(activeCell);
          e.preventDefault();
          break;
        case "Tab": {
          e.preventDefault();
          // Move to next editable cell
          let nc = col + (e.shiftKey ? -1 : 1);
          let nr = row;
          while (nr >= 0 && nr < data.length) {
            if (nc < 0) {
              nr--;
              nc = columns.length - 1;
            } else if (nc >= columns.length) {
              nr++;
              nc = 0;
            }
            if (nr < 0 || nr >= data.length) break;
            if (columns[nc]?.editable) {
              setActiveCell({ row: nr, col: nc });
              return;
            }
            nc += e.shiftKey ? -1 : 1;
          }
          break;
        }
        case "Escape":
          setActiveCell(null);
          break;
      }
    },
    [activeCell, editingCell, data.length, columns, startEditing]
  );

  // ----- Cell padding -----
  const cellPad = compact ? "py-1.5 px-2.5" : "py-2.5 px-3";

  // ----- Render cell content -----
  const renderCell = (col: DataGridColumn<T>, row: T, rowIdx: number, colIdx: number) => {
    const isEditing = cellEq(editingCell, { row: rowIdx, col: colIdx });
    const value = row[col.key];

    if (isEditing && col.editable) {
      if (col.type === "boolean") {
        // Toggle immediately
        commitEdit(rowIdx, col.key, !value);
        return value ? (
          <Check className="h-4 w-4 text-green-600" />
        ) : (
          <span className="h-4 w-4" />
        );
      }

      if (col.type === "select" && col.options) {
        return (
          <InlineSelect
            value={String(value)}
            options={col.options}
            onChange={(v) => commitEdit(rowIdx, col.key, v)}
            onCancel={cancelEdit}
            compact={compact}
          />
        );
      }

      return (
        <InlineInput
          value={value ?? ""}
          type={col.type === "number" ? "number" : "text"}
          onCommit={(v) => commitEdit(rowIdx, col.key, v)}
          onCancel={cancelEdit}
        />
      );
    }

    if (col.render) {
      return col.render(value, row, rowIdx);
    }

    if (col.type === "boolean") {
      return value ? (
        <Check className="h-4 w-4 text-green-600" />
      ) : (
        <span className="block h-4 w-4 rounded-full border-2 border-gray-300 dark:border-gray-600" />
      );
    }

    if (col.type === "number") {
      return <span>{typeof value === "number" ? value.toLocaleString() : value}</span>;
    }

    return <span className="truncate">{value != null ? String(value) : ""}</span>;
  };

  // ----- Render -----

  return (
    <div
      ref={gridRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className={cn(
        "relative w-full overflow-auto rounded-lg border border-gray-200 bg-white outline-none dark:border-gray-800 dark:bg-gray-950",
        className
      )}
      style={maxHeight ? { maxHeight } : undefined}
    >
      <table className="w-full border-collapse text-[13px]">
        {/* ----- Header ----- */}
        <thead>
          <tr
            className={cn(
              "border-b border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900",
              stickyHeader && "sticky top-0 z-10"
            )}
          >
            {showCheckboxes && (
              <th className={cn("w-10 text-center", cellPad)}>
                <GridCheckbox
                  checked={allSelected}
                  indeterminate={someSelected}
                  onChange={toggleAll}
                  accent={accentColor}
                />
              </th>
            )}
            {columns.map((col) => (
              <th
                key={col.key}
                className={cn(
                  "whitespace-nowrap text-[11px] font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400",
                  cellPad,
                  col.align === "right" && "text-right",
                  col.align === "center" && "text-center",
                  col.align !== "right" && col.align !== "center" && "text-left"
                )}
                style={{
                  width: col.width ? `${col.width}px` : undefined,
                  minWidth: col.minWidth ? `${col.minWidth}px` : undefined,
                }}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        {/* ----- Body ----- */}
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length + (showCheckboxes ? 1 : 0)}
                className="py-12 text-center text-sm text-gray-400 dark:text-gray-500"
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, rowIdx) => {
              const isRowSelected = selectionSet.has(rowIdx);
              return (
                <tr
                  key={rowKey ? String(row[rowKey]) : rowIdx}
                  onClick={() => onRowClick?.(row, rowIdx)}
                  className={cn(
                    "border-b border-gray-100 transition-colors last:border-b-0 dark:border-gray-800/60",
                    "hover:bg-gray-50 dark:hover:bg-gray-900/50",
                    striped && rowIdx % 2 === 1 && "bg-gray-50/50 dark:bg-gray-900/30",
                    isRowSelected && "bg-blue-50/60 dark:bg-blue-950/30"
                  )}
                >
                  {showCheckboxes && (
                    <td
                      className={cn("w-10 text-center", cellPad)}
                      onClick={(e) => toggleRow(rowIdx, e)}
                    >
                      <GridCheckbox
                        checked={isRowSelected}
                        onChange={() => {}}
                        accent={accentColor}
                      />
                    </td>
                  )}
                  {columns.map((col, colIdx) => {
                    const isActive = cellEq(activeCell, { row: rowIdx, col: colIdx });
                    const isEditing = cellEq(editingCell, { row: rowIdx, col: colIdx });

                    return (
                      <td
                        key={col.key}
                        onClick={() => setActiveCell({ row: rowIdx, col: colIdx })}
                        onDoubleClick={() =>
                          startEditing({ row: rowIdx, col: colIdx })
                        }
                        className={cn(
                          "relative cursor-default transition-shadow",
                          cellPad,
                          col.align === "right" && "text-right",
                          col.align === "center" && "text-center",
                          col.type === "boolean" && col.align !== "right" && col.align !== "left" && "text-center",
                          isActive &&
                            !isEditing &&
                            "ring-2 ring-inset rounded-sm",
                          isEditing &&
                            "ring-[2.5px] ring-inset rounded-sm bg-white dark:bg-gray-950"
                        )}
                        style={
                          isActive || isEditing
                            ? { boxShadow: `inset 0 0 0 ${isEditing ? "2.5px" : "2px"} ${accentColor}` }
                            : undefined
                        }
                      >
                        <div className="flex items-center gap-1" style={{
                          justifyContent:
                            col.align === "right"
                              ? "flex-end"
                              : col.align === "center" || (col.type === "boolean" && !col.align)
                              ? "center"
                              : "flex-start",
                        }}>
                          {renderCell(col, row, rowIdx, colIdx)}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}
