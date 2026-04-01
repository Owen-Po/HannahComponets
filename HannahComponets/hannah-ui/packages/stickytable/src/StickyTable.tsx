import { useState, useEffect, useRef } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
  type ColumnDef,
  type SortingState,
  type VisibilityState,
} from "@tanstack/react-table";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ChevronUp,
  ChevronDown,
  FileText,
  Columns3,
  RotateCcw,
  Info,
} from "lucide-react";
import { useTableStore } from "@hannah-ui/draggabletable";

declare module "@tanstack/react-table" {
  interface ColumnMeta<TData, TValue> {
    sticky?: "left" | "right";
    [key: string]: any;
  }
}

export interface StickyTableProps<T> {
  tableId: string;
  data: T[];
  columns: ColumnDef<T>[];
  searchPlaceholder?: string;
  pageSize?: number;
  showSearch?: boolean;
  showPagination?: boolean;
  showColumnToggle?: boolean;
  emptyMessage?: string;
  getRowClassName?: ((row: T, index: number) => string) | null;
  accentColor?: string;
  manageColumnsLabel?: string;
  minimizeLabel?: string;
  restoreLabel?: string;
  restoreColumnsLabel?: string;
  sortHint?: string;
}

export const StickyTable = <T extends Record<string, any>>({
  data = [],
  columns = [],
  searchPlaceholder = "Buscar...",
  pageSize = 10,
  showSearch = true,
  showPagination = true,
  showColumnToggle = true,
  emptyMessage = "No hay datos disponibles",
  tableId = "default",
  getRowClassName = null,
  accentColor = "#d97706",
  manageColumnsLabel = "Gestionar Columnas",
  minimizeLabel = "Minimizar",
  restoreLabel = "Restaurar",
  restoreColumnsLabel = "Restaurar Columnas",
  sortHint = "Click para ordenar | Alt+Click para minimizar",
}: StickyTableProps<T>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [showColumnSelector, setShowColumnSelector] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const columnSelectorRef = useRef<HTMLDivElement>(null);

  const { minimizedColumns, setMinimizedColumns, resetMinimizedColumns: resetMinimizedColumnsStore } = useTableStore();
  const columnasMinimizadas = minimizedColumns[tableId] || {};

  const loadColumnVisibility = (): VisibilityState => {
    try {
      const saved = localStorage.getItem(`table-columns-${tableId}`);
      return saved ? JSON.parse(saved) : {};
    } catch { return {}; }
  };

  const saveColumnVisibility = (visibility: VisibilityState) => {
    try { localStorage.setItem(`table-columns-${tableId}`, JSON.stringify(visibility)); } catch {}
  };

  useEffect(() => {
    if (!isInitialized) {
      setColumnVisibility(loadColumnVisibility());
      setIsInitialized(true);
    }
  }, [tableId, isInitialized]);

  useEffect(() => {
    if (isInitialized && Object.keys(columnVisibility).length > 0) saveColumnVisibility(columnVisibility);
  }, [columnVisibility, tableId, isInitialized]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (columnSelectorRef.current && !columnSelectorRef.current.contains(e.target as Node)) setShowColumnSelector(false);
    };
    if (showColumnSelector) {
      document.addEventListener("mousedown", handler);
      return () => document.removeEventListener("mousedown", handler);
    }
  }, [showColumnSelector]);

  const handleHeaderClick = (header: any, event: React.MouseEvent) => {
    if (event.altKey || event.metaKey) {
      event.preventDefault();
      setMinimizedColumns(tableId, { ...columnasMinimizadas, [header.column.id]: !columnasMinimizadas[header.column.id] });
    } else {
      header.column.getToggleSortingHandler()?.(event);
    }
  };

  const getColumnWidth = (columnId: string) => columnasMinimizadas[columnId] ? 30 : undefined;

  const toggleMinimizeColumn = (columnId: string) => {
    setMinimizedColumns(tableId, { ...columnasMinimizadas, [columnId]: !columnasMinimizadas[columnId] });
  };

  const table = useReactTable({
    data,
    columns,
    state: { sorting, globalFilter, columnVisibility },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    initialState: { pagination: { pageSize } },
  });

  const renderHeader = (header: any, isMinimized: boolean, width: number | undefined) => (
    <th
      key={header.id}
      className="px-2 sm:px-3 py-2 text-left text-xs font-semibold text-gray-500 cursor-pointer hover:bg-gray-100 whitespace-nowrap group relative bg-gray-50"
      style={{ width: width ? `${width}px` : `${header.column.columnDef.size || 100}px`, minWidth: width ? `${width}px` : undefined, maxWidth: width ? `${width}px` : undefined, transition: "all 0.2s ease-in-out" }}
      onClick={(e) => handleHeaderClick(header, e)}
      title={sortHint}
    >
      <div className="flex items-center gap-1.5">
        {isMinimized ? (
          <span className="text-gray-300 text-base font-bold leading-none">·</span>
        ) : (
          <>
            {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
            {header.column.getCanSort() && (
              <div className="flex flex-col shrink-0 ml-auto pl-1">
                <ChevronUp size={9} className={header.column.getIsSorted() === "asc" ? "" : "text-gray-300"} style={header.column.getIsSorted() === "asc" ? { color: accentColor } : undefined} />
                <ChevronDown size={9} className={header.column.getIsSorted() === "desc" ? "" : "text-gray-300"} style={header.column.getIsSorted() === "desc" ? { color: accentColor } : undefined} />
              </div>
            )}
            {header.column.getIsSorted() && (
              <span className="text-[9px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center shrink-0" style={{ color: accentColor, backgroundColor: `${accentColor}22` }}>
                {header.column.getSortIndex() + 1}
              </span>
            )}
          </>
        )}
      </div>
    </th>
  );

  const renderCell = (cell: any, row: any, index: number) => {
    const width = getColumnWidth(cell.column.id);
    const isMinimized = columnasMinimizadas[cell.column.id];
    return (
      <td
        key={cell.id}
        className="px-2 sm:px-3 py-2 text-xs text-gray-900 whitespace-nowrap"
        style={{ width: width ? `${width}px` : `${cell.column.columnDef.size || 100}px`, minWidth: width ? `${width}px` : undefined, maxWidth: width ? `${width}px` : undefined, overflow: isMinimized ? "hidden" : "visible", transition: "all 0.2s ease-in-out" }}
      >
        {isMinimized ? null : flexRender(cell.column.columnDef.cell, cell.getContext())}
      </td>
    );
  };

  const getRowClass = (row: any, index: number) => {
    let cls = "transition-colors duration-150 ";
    if (getRowClassName) cls += getRowClassName(row.original, index);
    else cls += index % 2 === 0 ? "bg-white hover:bg-gray-100" : "bg-gray-50 hover:bg-gray-100";
    return cls;
  };

  return (
    <div className="space-y-6">
      {(showSearch || showColumnToggle) && (
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 items-stretch sm:items-center">
          {showSearch && (
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input type="text" placeholder={searchPlaceholder} value={globalFilter ?? ""} onChange={(e) => setGlobalFilter(e.target.value)} className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2" style={{ "--tw-ring-color": accentColor } as React.CSSProperties} />
            </div>
          )}
          {showColumnToggle && (
            <div className="relative shrink-0" ref={columnSelectorRef}>
              <button onClick={() => setShowColumnSelector(!showColumnSelector)} className={`inline-flex items-center gap-2 px-3 py-2.5 border rounded-lg text-sm font-medium transition-colors ${showColumnSelector ? "" : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"}`} style={showColumnSelector ? { borderColor: accentColor, backgroundColor: `${accentColor}11`, color: accentColor } : undefined}>
                <Columns3 size={18} />
                <span>Columnas</span>
              </button>
              {showColumnSelector && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-xl z-50 p-3">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-200">
                    <span className="text-sm font-semibold text-gray-900">{manageColumnsLabel}</span>
                    <button onClick={() => setShowColumnSelector(false)} className="text-gray-400 hover:text-gray-600 text-xl leading-none">×</button>
                  </div>
                  <div className="space-y-1.5 max-h-64 overflow-y-auto mb-3">
                    {table.getAllLeafColumns().map((column) => {
                      const isMinimized = columnasMinimizadas[column.id];
                      return (
                        <div key={column.id} className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-gray-50">
                          <span className="flex-1 text-sm text-gray-700 font-medium">{typeof column.columnDef.header === "string" ? column.columnDef.header : column.id}</span>
                          <button onClick={() => toggleMinimizeColumn(column.id)} className={`text-xs px-3 py-1.5 rounded font-medium transition-all ${isMinimized ? "text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`} style={isMinimized ? { backgroundColor: accentColor } : undefined}>
                            {isMinimized ? restoreLabel : minimizeLabel}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                  <button onClick={() => { resetMinimizedColumnsStore(tableId); setShowColumnSelector(false); }} className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                    <RotateCcw size={14} />
                    {restoreColumnsLabel}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="flex overflow-hidden">
          {/* Sticky left */}
          <div className="shrink-0 border-r border-gray-200">
            <table className="w-full">
              <thead className="border-b border-gray-200">
                {table.getHeaderGroups().map((hg) => (
                  <tr key={hg.id}>
                    {hg.headers.filter((h) => h.column.columnDef.meta?.sticky === "left").map((h) => renderHeader(h, columnasMinimizadas[h.id], getColumnWidth(h.id)))}
                  </tr>
                ))}
              </thead>
              <tbody className="divide-y divide-gray-200">
                {table.getRowModel().rows.length > 0 ? (
                  table.getRowModel().rows.map((row, i) => (
                    <tr key={row.id} className={getRowClass(row, i)}>
                      {row.getVisibleCells().filter((c) => c.column.columnDef.meta?.sticky === "left").map((c) => renderCell(c, row, i))}
                    </tr>
                  ))
                ) : (
                  <tr><td colSpan={table.getVisibleLeafColumns().filter((c) => c.columnDef.meta?.sticky === "left").length} className="px-4 py-12 text-center">
                    <div className="flex flex-col items-center gap-2"><div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center"><FileText className="w-7 h-7 text-gray-400" /></div><p className="text-gray-500">{emptyMessage}</p></div>
                  </td></tr>
                )}
              </tbody>
            </table>
          </div>
          {/* Scrollable right */}
          <div className="flex-1 overflow-x-auto">
            <table className="w-full min-w-max">
              <thead className="border-b border-gray-200">
                {table.getHeaderGroups().map((hg) => (
                  <tr key={hg.id}>
                    {hg.headers.filter((h) => !h.column.columnDef.meta?.sticky).map((h) => renderHeader(h, columnasMinimizadas[h.id], getColumnWidth(h.id)))}
                  </tr>
                ))}
              </thead>
              <tbody className="divide-y divide-gray-200">
                {table.getRowModel().rows.length > 0 ? (
                  table.getRowModel().rows.map((row, i) => (
                    <tr key={row.id} className={getRowClass(row, i)}>
                      {row.getVisibleCells().filter((c) => !c.column.columnDef.meta?.sticky).map((c) => renderCell(c, row, i))}
                    </tr>
                  ))
                ) : (
                  <tr><td colSpan={table.getVisibleLeafColumns().filter((c) => !c.columnDef.meta?.sticky).length} className="px-4 py-12" /></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {showPagination && table.getPageCount() > 1 && (
          <div className="px-4 py-3 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 bg-gray-50/50">
            <p className="text-xs text-gray-500">
              {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1}–{Math.min((table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize, table.getFilteredRowModel().rows.length)} de {table.getFilteredRowModel().rows.length}
            </p>
            <div className="flex items-center gap-1">
              <button onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()} className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"><ChevronsLeft size={13} /></button>
              <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"><ChevronLeft size={13} /></button>
              <div className="flex items-center gap-0.5 mx-1">
                {Array.from({ length: Math.min(5, table.getPageCount()) }, (_, i) => {
                  const cp = table.getState().pagination.pageIndex;
                  const tp = table.getPageCount();
                  let page: number;
                  if (tp <= 5) page = i;
                  else if (cp <= 2) page = i;
                  else if (cp >= tp - 3) page = tp - 5 + i;
                  else page = cp - 2 + i;
                  return (
                    <button key={page} onClick={() => table.setPageIndex(page)} className={`min-w-7 h-7 px-1.5 text-xs font-medium rounded-lg transition-colors ${cp === page ? "text-white shadow-sm" : "text-gray-600 hover:bg-white"}`} style={cp === page ? { backgroundColor: accentColor } : undefined}>{page + 1}</button>
                  );
                })}
              </div>
              <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"><ChevronRight size={13} /></button>
              <button onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()} className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"><ChevronsRight size={13} /></button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
