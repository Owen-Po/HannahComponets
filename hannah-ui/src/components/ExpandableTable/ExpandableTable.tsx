import { useState, useEffect, Fragment } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getExpandedRowModel,
  flexRender,
  type ColumnDef,
  type ExpandedState,
} from "@tanstack/react-table";
import { Info } from "lucide-react";

export interface ExpandableTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  SubComponent: React.ElementType<{ row: T }>;
  emptyMessage?: string;
  className?: string;
  tableId?: string;
  showMinimizeHint?: boolean;
}

export const ExpandableTable = <T,>({
  data = [],
  columns = [],
  SubComponent,
  emptyMessage = "No hay datos disponibles",
  className = "",
  tableId = "default-expandible",
  showMinimizeHint = true,
}: ExpandableTableProps<T>) => {
  const [expanded, setExpanded] = useState<ExpandedState>({});
  const [columnasMinimizadas, setColumnasMinimizadas] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const saved = localStorage.getItem(`${tableId}-minimized`);
    if (saved) {
      try { setColumnasMinimizadas(JSON.parse(saved)); } catch {}
    }
  }, [tableId]);

  useEffect(() => {
    localStorage.setItem(`${tableId}-minimized`, JSON.stringify(columnasMinimizadas));
  }, [columnasMinimizadas, tableId]);

  const handleColumnHeaderClick = (e: React.MouseEvent, columnId: string, minimizable?: boolean) => {
    if (e.altKey && minimizable !== false) {
      e.preventDefault();
      setColumnasMinimizadas((prev) => ({ ...prev, [columnId]: !prev[columnId] }));
    }
  };

  const getColumnWidth = (columnId: string, defaultSize: number) =>
    columnasMinimizadas[columnId] ? 30 : defaultSize;

  const table = useReactTable({
    data,
    columns,
    state: { expanded },
    onExpandedChange: setExpanded,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getRowCanExpand: () => true,
  });

  return (
    <div className={`w-full space-y-4 ${className}`}>
      {showMinimizeHint && (
        <div className="text-sm text-gray-600 bg-blue-50 border border-blue-200 rounded-lg p-3">
          <div className="flex items-start gap-2">
            <Info size={16} className="text-blue-600 mt-0.5 shrink-0" />
            <div>
              <strong>Consejo:</strong> Usa{" "}
              <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded text-xs">Alt</kbd>{" "}
              + Click en encabezados para minimizar. Click en expandir para ver detalles.
            </div>
          </div>
        </div>
      )}

      <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 border-b border-gray-200">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const columnMeta = header.column.columnDef.meta as { minimizable?: boolean } | undefined;
                  const isMinimized = columnasMinimizadas[header.id];
                  const columnSize = header.column.columnDef.size || 150;
                  const width = getColumnWidth(header.id, columnSize);

                  return (
                    <th
                      key={header.id}
                      onClick={(e) => handleColumnHeaderClick(e, header.id, columnMeta?.minimizable)}
                      className={`px-4 py-3 text-left text-[11px] font-semibold text-gray-500 uppercase tracking-wider ${
                        columnMeta?.minimizable !== false ? "cursor-pointer hover:bg-gray-100 transition-colors" : ""
                      }`}
                      style={{ width: `${width}px`, minWidth: `${width}px`, maxWidth: `${width}px`, transition: "all 0.2s ease-in-out" }}
                      title={columnMeta?.minimizable !== false ? "Alt + Click para minimizar" : undefined}
                    >
                      {isMinimized ? (
                        <span className="text-gray-300 text-base font-bold leading-none">·</span>
                      ) : (
                        flexRender(header.column.columnDef.header, header.getContext())
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {table.getRowModel().rows.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-6 py-8 text-center text-gray-500">{emptyMessage}</td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <Fragment key={row.id}>
                  <tr className="hover:bg-gray-50 transition-colors">
                    {row.getVisibleCells().map((cell) => {
                      const columnSize = cell.column.columnDef.size || 150;
                      const width = getColumnWidth(cell.column.id, columnSize);
                      const isMinimized = columnasMinimizadas[cell.column.id];

                      return (
                        <td
                          key={cell.id}
                          className="px-4 py-3 whitespace-nowrap text-sm"
                          style={{ width: `${width}px`, minWidth: `${width}px`, maxWidth: `${width}px`, overflow: isMinimized ? "hidden" : "visible", transition: "all 0.2s ease-in-out" }}
                        >
                          {isMinimized && cell.column.id !== "expander"
                            ? null
                            : flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      );
                    })}
                  </tr>
                  {row.getIsExpanded() && (
                    <tr>
                      <td colSpan={columns.length} className="p-0">
                        <SubComponent row={row.original} />
                      </td>
                    </tr>
                  )}
                </Fragment>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
