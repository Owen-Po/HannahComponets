import { useState, useEffect, useRef, useCallback } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
  type SortingState,
  type ColumnDef,
  type ColumnSizingState,
  type Header,
} from "@tanstack/react-table";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  DragOverlay,
  type DragStartEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  horizontalListSortingStrategy,
  useSortable,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
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
  Maximize2,
  Minimize2,
  Eye,
  EyeOff,
  ChevronsLeftRight,
  GripVertical,
  X,
} from "lucide-react";
import { useTableStore } from "./useTableStore";

// ---------------------------------------------------------------------------
// SortableTh
// ---------------------------------------------------------------------------
interface SortableThProps {
  header: Header<any, unknown>;
  isMinimized: boolean;
  width: number | undefined;
  colSize: number;
  enableColumnResizing: boolean;
  enableColumnOrdering: boolean;
  onHeaderClick: (header: Header<any, unknown>, e: React.MouseEvent) => void;
  isDraggingActive: boolean;
}

const SortableTh = ({
  header,
  isMinimized,
  width,
  colSize,
  enableColumnResizing,
  enableColumnOrdering,
  onHeaderClick,
  isDraggingActive,
}: SortableThProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
    isOver,
  } = useSortable({ id: header.id });

  const isSorted = header.column.getIsSorted();

  return (
    <th
      ref={setNodeRef}
      onClick={(e) => !isDragging && onHeaderClick(header, e)}
      style={{
        width: width
          ? `${width}px`
          : enableColumnResizing
            ? `${colSize}px`
            : undefined,
        minWidth: width
          ? `${width}px`
          : enableColumnResizing
            ? `${colSize}px`
            : undefined,
        maxWidth: width ? `${width}px` : undefined,
        transition: enableColumnResizing
          ? (transition ?? undefined)
          : "all 0.2s ease-in-out",
        position: "relative",
        transform: enableColumnOrdering
          ? CSS.Transform.toString(transform)
          : undefined,
        opacity: isDragging ? 0 : 1,
        zIndex: isDragging ? 1 : undefined,
        boxShadow:
          isOver && !isDragging ? "inset 3px 0 0 0 #f59e0b" : undefined,
      }}
      className={`
        px-3 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider
        select-none border-r border-gray-200 last:border-r-0 relative group
        ${
          isSorted
            ? "bg-amber-50 text-amber-800"
            : "bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        }
        transition-colors duration-100
        ${isDraggingActive && !isDragging ? "cursor-not-allowed" : "cursor-pointer"}
      `}
    >
      <div className="flex items-center gap-1.5">
        {/* Drag handle — visible siempre, no solo en hover */}
        {enableColumnOrdering && !isMinimized && (
          <div
            {...attributes}
            {...listeners}
            onClick={(e) => e.stopPropagation()}
            className="text-gray-300 hover:text-amber-400 shrink-0 touch-none cursor-grab active:cursor-grabbing transition-colors duration-100"
          >
            <GripVertical size={12} />
          </div>
        )}

        {isMinimized ? (
          <span className="text-gray-300 text-base font-bold leading-none">
            ·
          </span>
        ) : (
          <>
            <span className="truncate">
              {header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
            </span>

            {header.column.getCanSort() && (
              <div className="flex flex-col shrink-0 ml-auto pl-1">
                <ChevronUp
                  size={9}
                  className={
                    isSorted === "asc" ? "text-amber-600" : "text-gray-300"
                  }
                />
                <ChevronDown
                  size={9}
                  className={
                    isSorted === "desc" ? "text-amber-600" : "text-gray-300"
                  }
                />
              </div>
            )}

            {/* Badge de orden múltiple */}
            {isSorted && (
              <span className="text-[9px] font-bold text-amber-600 bg-amber-100 rounded-full w-3.5 h-3.5 flex items-center justify-center shrink-0">
                {header.column.getSortIndex() + 1}
              </span>
            )}
          </>
        )}
      </div>

      {/* Handle para resize */}
      {enableColumnResizing && header.column.getCanResize() && (
        <div
          onMouseDown={header.getResizeHandler()}
          onTouchStart={header.getResizeHandler()}
          onClick={(e) => e.stopPropagation()}
          className={`absolute right-0 top-0 h-full w-1 cursor-col-resize touch-none z-10 transition-colors ${
            header.column.getIsResizing()
              ? "bg-amber-400"
              : "bg-transparent hover:bg-amber-300"
          }`}
        />
      )}
    </th>
  );
};

// ---------------------------------------------------------------------------
// DragOverlay — "fantasma" flotante al arrastrar
// ---------------------------------------------------------------------------
const DragColumnGhost = ({ label }: { label: string }) => (
  <div className="px-3 py-2 bg-white border border-amber-400 rounded-lg shadow-lg text-[11px] font-semibold text-amber-700 uppercase tracking-wider flex items-center gap-1.5 opacity-90">
    <GripVertical size={12} className="text-amber-400" />
    {label}
  </div>
);

// ---------------------------------------------------------------------------

interface ServerPaginationConfig {
  currentPage: number;
  totalPages: number;
  totalRecords: number;
  onPageChange: (page: number) => void;
  isLoading?: boolean;
}

interface ServerSearchConfig {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export interface DraggableTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  searchPlaceholder?: string;
  pageSize?: number;
  showSearch?: boolean;
  showPagination?: boolean;
  showColumnToggle?: boolean;
  emptyMessage?: string;
  className?: string;
  initialColumnVisibility?: Record<string, boolean>;
  tableId?: string;
  serverPagination?: ServerPaginationConfig;
  serverSearch?: ServerSearchConfig;
  enableColumnResizing?: boolean;
  enableFullScreen?: boolean;
  enableColumnOrdering?: boolean;
  isLoading?: boolean;
  skeletonRows?: number;
}

export const DraggableTable = <T,>({
  data = [],
  columns = [],
  searchPlaceholder = "Buscar...",
  pageSize = 10,
  showSearch = true,
  showPagination = true,
  showColumnToggle = true,
  emptyMessage = "No hay datos disponibles",
  className = "",
  initialColumnVisibility = {},
  tableId = "default",
  serverPagination,
  serverSearch,
  enableColumnResizing = true,
  enableFullScreen = true,
  enableColumnOrdering = true,
  isLoading = false,
  skeletonRows = 6,
}: DraggableTableProps<T>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [showColumnSelector, setShowColumnSelector] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [columnSizing, setColumnSizingState] = useState<ColumnSizingState>({});
  const [columnOrder, setColumnOrder] = useState<string[]>([]);
  const [activeDragId, setActiveDragId] = useState<string | null>(null);
  const columnSelectorRef = useRef<HTMLDivElement>(null);

  const {
    columnVisibility,
    setColumnVisibility,
    minimizedColumns,
    setMinimizedColumns,
    resetMinimizedColumns: resetMinimizedColumnsStore,
    columnSizing: storedColumnSizing,
    setColumnSizing,
    resetColumnSizing,
  } = useTableStore();

  const tableColumnVisibility =
    columnVisibility[tableId] || initialColumnVisibility;
  const columnasMinimizadas = minimizedColumns[tableId] || {};
  const persistedSizing = storedColumnSizing[tableId] || {};

  useEffect(() => {
    if (Object.keys(persistedSizing).length > 0) {
      setColumnSizingState(persistedSizing);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tableId]);

  const usingServerPagination = serverPagination !== undefined;
  const usingServerSearch = serverSearch !== undefined;

  useEffect(() => {
    if (
      Object.keys(initialColumnVisibility).length > 0 &&
      !columnVisibility[tableId]
    ) {
      setColumnVisibility(tableId, initialColumnVisibility);
    }
  }, [tableId, initialColumnVisibility, columnVisibility, setColumnVisibility]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        columnSelectorRef.current &&
        !columnSelectorRef.current.contains(event.target as Node)
      ) {
        setShowColumnSelector(false);
      }
    }
    if (showColumnSelector) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [showColumnSelector]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFullScreen) setIsFullScreen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isFullScreen]);

  const persistSizing = useCallback(
    (sizing: ColumnSizingState) => setColumnSizing(tableId, sizing),
    [tableId, setColumnSizing],
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter: usingServerSearch ? serverSearch.searchTerm : globalFilter,
      columnVisibility: tableColumnVisibility,
      columnSizing,
      columnOrder,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: usingServerSearch
      ? serverSearch.onSearchChange
      : setGlobalFilter,
    onColumnVisibilityChange: (updater) => {
      const newVisibility =
        typeof updater === "function"
          ? updater(tableColumnVisibility)
          : updater;
      setColumnVisibility(tableId, newVisibility);
    },
    onColumnSizingChange: (updater) => {
      const newSizing =
        typeof updater === "function" ? updater(columnSizing) : updater;
      setColumnSizingState(newSizing);
      persistSizing(newSizing);
    },
    onColumnOrderChange: setColumnOrder,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    enableMultiSort: true,
    enableColumnResizing,
    columnResizeMode: "onChange",
    ...(usingServerPagination
      ? { manualPagination: true, pageCount: serverPagination.totalPages }
      : {}),
    initialState: { pagination: { pageSize } },
  });

  const handleHeaderClick = (header: any, event: React.MouseEvent) => {
    if (event.altKey || event.metaKey) {
      event.preventDefault();
      setMinimizedColumns(tableId, {
        ...columnasMinimizadas,
        [header.column.id]: !columnasMinimizadas[header.column.id],
      });
    } else {
      header.column.getToggleSortingHandler()?.(event);
    }
  };

  const getColumnWidth = (columnId: string) =>
    columnasMinimizadas[columnId] ? 32 : undefined;

  const toggleMinimizeColumn = (columnId: string) => {
    setMinimizedColumns(tableId, {
      ...columnasMinimizadas,
      [columnId]: !columnasMinimizadas[columnId],
    });
  };

  const resetAll = () => {
    resetMinimizedColumnsStore(tableId);
    setColumnVisibility(tableId, initialColumnVisibility);
    setColumnOrder([]);
    if (enableColumnResizing) {
      resetColumnSizing(tableId);
      setColumnSizingState({});
    }
  };

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(TouchSensor, {
      activationConstraint: { delay: 250, tolerance: 5 },
    }),
  );

  const handleDragStart = (event: DragStartEvent) => {
    setActiveDragId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveDragId(null);
    if (!enableColumnOrdering) return;
    const { active, over } = event;
    if (active && over && active.id !== over.id) {
      const currentOrder = table.getVisibleLeafColumns().map((c) => c.id);
      const oldIndex = currentOrder.indexOf(active.id as string);
      const newIndex = currentOrder.indexOf(over.id as string);
      if (oldIndex !== -1 && newIndex !== -1) {
        setColumnOrder(arrayMove(currentOrder, oldIndex, newIndex));
      }
    }
  };

  // Label del fantasma de drag
  const activeDragLabel = activeDragId
    ? (() => {
        const col = table
          .getAllLeafColumns()
          .find((c) => c.id === activeDragId);
        return typeof col?.columnDef.header === "string"
          ? col.columnDef.header
          : activeDragId;
      })()
    : "";

  const currentPage = usingServerPagination
    ? serverPagination.currentPage - 1
    : table.getState().pagination.pageIndex;
  const totalPages = usingServerPagination
    ? serverPagination.totalPages
    : table.getPageCount();

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div
        className={
          isFullScreen
            ? "fixed inset-0 z-50 bg-white overflow-auto p-4 flex flex-col gap-3"
            : `flex flex-col gap-3 ${className}`
        }
      >
        {/* Toolbar */}
        {(showSearch || showColumnToggle || enableFullScreen) && (
          <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center sm:justify-between">
            {showSearch && (
              <div className="relative flex-1 max-w-sm">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={14}
                />
                <input
                  type="text"
                  placeholder={searchPlaceholder}
                  value={
                    usingServerSearch
                      ? serverSearch.searchTerm
                      : (globalFilter ?? "")
                  }
                  onChange={(e) =>
                    usingServerSearch
                      ? serverSearch.onSearchChange(e.target.value)
                      : setGlobalFilter(e.target.value)
                  }
                  className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-sm bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition-all"
                />
              </div>
            )}

            <div className="flex items-center gap-2 shrink-0">
              {/* Hint de Alt+Click */}
              {enableColumnOrdering && (
                <span className="hidden md:inline text-[11px] text-gray-400 italic">
                  Alt+Click en columna para minimizar
                </span>
              )}

              {enableFullScreen && (
                <button
                  onClick={() => setIsFullScreen(!isFullScreen)}
                  title={
                    isFullScreen
                      ? "Salir de pantalla completa"
                      : "Pantalla completa"
                  }
                  className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {isFullScreen ? (
                    <Minimize2 size={14} />
                  ) : (
                    <Maximize2 size={14} />
                  )}
                </button>
              )}

              {showColumnToggle && (
                <div className="relative" ref={columnSelectorRef}>
                  <button
                    onClick={() => setShowColumnSelector(!showColumnSelector)}
                    className={`inline-flex items-center gap-1.5 px-3 py-2 border rounded-lg text-sm font-medium transition-colors ${
                      showColumnSelector
                        ? "border-amber-400 bg-amber-50 text-amber-700"
                        : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <Columns3 size={14} />
                    <span>Columnas</span>
                  </button>

                  {/* Panel de columnas */}
                  {showColumnSelector && (
                    <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden">
                      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50">
                        <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Gestionar columnas
                        </span>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={resetAll}
                            title="Restablecer todo"
                            className="p-1.5 text-gray-400 hover:text-amber-600 rounded-lg hover:bg-amber-50 transition-colors"
                          >
                            <RotateCcw size={12} />
                          </button>
                          <button
                            onClick={() => setShowColumnSelector(false)}
                            className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
                          >
                            <X size={12} />
                          </button>
                        </div>
                      </div>

                      <div className="max-h-64 overflow-y-auto">
                        {table.getAllLeafColumns().map((column) => {
                          const isMinimized = columnasMinimizadas[column.id];
                          const isVisible = column.getIsVisible();
                          const label =
                            typeof column.columnDef.header === "string"
                              ? column.columnDef.header
                              : column.id;
                          return (
                            <div
                              key={column.id}
                              className="flex items-center gap-2 px-4 py-2.5 hover:bg-gray-50 border-b border-gray-50 last:border-b-0"
                            >
                              <span
                                className={`flex-1 text-sm truncate ${
                                  isVisible ? "text-gray-700" : "text-gray-400"
                                }`}
                                title={label}
                              >
                                {label}
                              </span>
                              <div className="flex items-center gap-1 shrink-0">
                                <button
                                  onClick={() => column.toggleVisibility()}
                                  title={isVisible ? "Ocultar" : "Mostrar"}
                                  className={`p-1.5 rounded-lg transition-colors ${
                                    isVisible
                                      ? "text-gray-500 hover:bg-gray-100"
                                      : "text-gray-300 hover:bg-gray-100 hover:text-gray-500"
                                  }`}
                                >
                                  {isVisible ? (
                                    <Eye size={13} />
                                  ) : (
                                    <EyeOff size={13} />
                                  )}
                                </button>
                                <button
                                  onClick={() =>
                                    toggleMinimizeColumn(column.id)
                                  }
                                  title={isMinimized ? "Expandir" : "Colapsar"}
                                  className={`p-1.5 rounded-lg transition-colors ${
                                    isMinimized
                                      ? "text-amber-500 bg-amber-50 hover:bg-amber-100"
                                      : "text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                                  }`}
                                >
                                  <ChevronsLeftRight size={13} />
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tabla */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="overflow-auto max-h-[600px]">
            <table className="w-full border-collapse">
              <thead className="sticky top-0 z-10">
                {table.getHeaderGroups().map((headerGroup) => (
                  <SortableContext
                    key={headerGroup.id}
                    items={table.getVisibleLeafColumns().map((c) => c.id)}
                    strategy={horizontalListSortingStrategy}
                  >
                    <tr
                      key={headerGroup.id}
                      className="border-b border-gray-200"
                    >
                      {headerGroup.headers.map((header) => (
                        <SortableTh
                          key={header.id}
                          header={header}
                          isMinimized={columnasMinimizadas[header.id] ?? false}
                          width={getColumnWidth(header.id)}
                          colSize={header.getSize()}
                          enableColumnResizing={enableColumnResizing}
                          enableColumnOrdering={enableColumnOrdering}
                          onHeaderClick={handleHeaderClick}
                          isDraggingActive={activeDragId !== null}
                        />
                      ))}
                    </tr>
                  </SortableContext>
                ))}
              </thead>
              <tbody className="divide-y divide-gray-100">
                {isLoading ? (
                  Array.from({ length: skeletonRows }).map((_, i) => (
                    <tr key={`skeleton-${i}`} className="animate-pulse">
                      {table.getVisibleLeafColumns().map((col, ci) => (
                        <td
                          key={col.id}
                          className="px-3 py-3 border-r border-gray-100 last:border-r-0"
                        >
                          <div
                            className={`h-3.5 bg-gray-100 rounded-lg ${
                              ci === 0
                                ? "w-4/5"
                                : ci % 3 === 0
                                  ? "w-2/3"
                                  : ci % 3 === 1
                                    ? "w-1/2"
                                    : "w-3/4"
                            }`}
                          />
                        </td>
                      ))}
                    </tr>
                  ))
                ) : table.getRowModel().rows.length > 0 ? (
                  table.getRowModel().rows.map((row, index) => (
                    <tr
                      key={row.id}
                      className={`transition-colors duration-100 ${
                        index % 2 === 0
                          ? "bg-white hover:bg-amber-50/40"
                          : "bg-gray-50/60 hover:bg-amber-50/40"
                      }`}
                    >
                      {row.getVisibleCells().map((cell) => {
                        const width = getColumnWidth(cell.column.id);
                        const isMinimized = columnasMinimizadas[cell.column.id];
                        return (
                          <td
                            key={cell.id}
                            className="px-3 py-2.5 text-sm text-gray-800 whitespace-nowrap border-r border-gray-100 last:border-r-0"
                            style={{
                              width: width ? `${width}px` : undefined,
                              minWidth: width ? `${width}px` : undefined,
                              maxWidth: width ? `${width}px` : undefined,
                              overflow: isMinimized ? "hidden" : undefined,
                              transition: "all 0.2s ease-in-out",
                            }}
                          >
                            {isMinimized
                              ? null
                              : flexRender(
                                  cell.column.columnDef.cell,
                                  cell.getContext(),
                                )}
                          </td>
                        );
                      })}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={table.getVisibleLeafColumns().length}
                      className="px-4 py-16 text-center"
                    >
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center">
                          <FileText className="w-7 h-7 text-gray-400" />
                        </div>
                        <p className="text-sm text-gray-500">{emptyMessage}</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Paginación */}
          {showPagination &&
            (usingServerPagination
              ? serverPagination.totalPages > 1
              : table.getPageCount() > 1) && (
              <div className="px-4 py-3 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 bg-gray-50/50">
                <p className="text-xs text-gray-500">
                  {usingServerPagination
                    ? `${(serverPagination.currentPage - 1) * pageSize + 1}–${Math.min(serverPagination.currentPage * pageSize, serverPagination.totalRecords)} de ${serverPagination.totalRecords}`
                    : `${currentPage * table.getState().pagination.pageSize + 1}–${Math.min((currentPage + 1) * table.getState().pagination.pageSize, table.getFilteredRowModel().rows.length)} de ${table.getFilteredRowModel().rows.length}`}
                  {usingServerPagination && serverPagination.isLoading && (
                    <span className="ml-2 text-amber-500 animate-pulse">
                      Cargando…
                    </span>
                  )}
                </p>

                <div className="flex items-center gap-1">
                  {/* Primera página */}
                  <button
                    onClick={() =>
                      usingServerPagination
                        ? serverPagination.onPageChange(1)
                        : table.setPageIndex(0)
                    }
                    disabled={
                      usingServerPagination
                        ? serverPagination.currentPage === 1
                        : !table.getCanPreviousPage()
                    }
                    className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-white hover:border-gray-300 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronsLeft size={13} />
                  </button>
                  <button
                    onClick={() =>
                      usingServerPagination
                        ? serverPagination.onPageChange(
                            serverPagination.currentPage - 1,
                          )
                        : table.previousPage()
                    }
                    disabled={
                      usingServerPagination
                        ? serverPagination.currentPage === 1
                        : !table.getCanPreviousPage()
                    }
                    className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-white hover:border-gray-300 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft size={13} />
                  </button>

                  {/* Números de página */}
                  <div className="flex items-center gap-0.5 mx-1">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let page: number;
                      if (totalPages <= 5) page = i;
                      else if (currentPage <= 2) page = i;
                      else if (currentPage >= totalPages - 3)
                        page = totalPages - 5 + i;
                      else page = currentPage - 2 + i;

                      const isActive = currentPage === page;
                      return (
                        <button
                          key={page}
                          onClick={() =>
                            usingServerPagination
                              ? serverPagination.onPageChange(page + 1)
                              : table.setPageIndex(page)
                          }
                          className={`min-w-7 h-7 px-1.5 text-xs font-medium rounded-lg transition-colors ${
                            isActive
                              ? "bg-amber-600 text-white shadow-sm"
                              : "text-gray-600 hover:bg-white hover:border hover:border-gray-200"
                          }`}
                        >
                          {page + 1}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={() =>
                      usingServerPagination
                        ? serverPagination.onPageChange(
                            serverPagination.currentPage + 1,
                          )
                        : table.nextPage()
                    }
                    disabled={
                      usingServerPagination
                        ? serverPagination.currentPage >=
                          serverPagination.totalPages
                        : !table.getCanNextPage()
                    }
                    className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-white hover:border-gray-300 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight size={13} />
                  </button>
                  <button
                    onClick={() =>
                      usingServerPagination
                        ? serverPagination.onPageChange(
                            serverPagination.totalPages,
                          )
                        : table.setPageIndex(table.getPageCount() - 1)
                    }
                    disabled={
                      usingServerPagination
                        ? serverPagination.currentPage >=
                          serverPagination.totalPages
                        : !table.getCanNextPage()
                    }
                    className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-white hover:border-gray-300 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronsRight size={13} />
                  </button>
                </div>
              </div>
            )}
        </div>
      </div>

      {/* Fantasma flotante durante drag */}
      <DragOverlay dropAnimation={null}>
        {activeDragId ? <DragColumnGhost label={activeDragLabel} /> : null}
      </DragOverlay>
    </DndContext>
  );
};
