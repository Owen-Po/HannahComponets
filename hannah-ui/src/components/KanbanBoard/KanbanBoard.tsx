import React, { useState, useCallback, useRef } from "react";
import { Plus, AlertTriangle, Calendar, GripVertical } from "lucide-react";
import { cn } from "../../utils/cn";

// ── Types ──────────────────────────────────────────────────────────────────────

export interface KanbanCard {
  id: string;
  title: string;
  description?: string;
  tags?: { label: string; color: string }[];
  assignee?: { name: string; avatar?: string };
  priority?: "low" | "medium" | "high" | "urgent";
  dueDate?: string;
  metadata?: React.ReactNode;
}

export interface KanbanColumn {
  id: string;
  title: string;
  color?: string;
  cards: KanbanCard[];
  limit?: number;
}

export interface KanbanBoardProps {
  columns: KanbanColumn[];
  onCardMove?: (
    cardId: string,
    fromColumn: string,
    toColumn: string,
    newIndex: number
  ) => void;
  onCardClick?: (card: KanbanCard, columnId: string) => void;
  onAddCard?: (columnId: string) => void;
  renderCard?: (card: KanbanCard) => React.ReactNode;
  accentColor?: string;
  addCardLabel?: string;
  className?: string;
}

// ── Priority helpers ───────────────────────────────────────────────────────────

const PRIORITY_BORDER: Record<string, string> = {
  low: "border-l-gray-300 dark:border-l-gray-600",
  medium: "border-l-amber-400 dark:border-l-amber-500",
  high: "border-l-orange-500 dark:border-l-orange-600",
  urgent: "border-l-red-500 dark:border-l-red-600",
};

// ── Default Card ───────────────────────────────────────────────────────────────

function DefaultCard({
  card,
  onCardClick,
  columnId,
}: {
  card: KanbanCard;
  onCardClick?: (card: KanbanCard, columnId: string) => void;
  columnId: string;
}) {
  const initials = card.assignee?.name
    ? card.assignee.name
        .split(" ")
        .map((w) => w[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : null;

  return (
    <div
      className={cn(
        "rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-200/60 dark:border-gray-700/60",
        "p-3 flex flex-col gap-2 cursor-pointer hover:shadow-md transition-shadow",
        "border-l-[3px]",
        card.priority
          ? PRIORITY_BORDER[card.priority]
          : "border-l-transparent"
      )}
      onClick={() => onCardClick?.(card, columnId)}
    >
      {/* Title */}
      <span className="text-[13px] font-medium text-gray-900 dark:text-gray-100 leading-snug">
        {card.title}
      </span>

      {/* Description */}
      {card.description && (
        <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
          {card.description}
        </p>
      )}

      {/* Tags */}
      {card.tags && card.tags.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {card.tags.map((tag) => (
            <span
              key={tag.label}
              className="text-[10px] uppercase tracking-wider font-medium px-1.5 py-0.5 rounded-md"
              style={{
                backgroundColor: tag.color + "18",
                color: tag.color,
              }}
            >
              {tag.label}
            </span>
          ))}
        </div>
      )}

      {/* Footer: assignee + due date + metadata */}
      {(card.assignee || card.dueDate || card.metadata) && (
        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center gap-2">
            {card.assignee && (
              <div className="flex items-center gap-1.5">
                {card.assignee.avatar ? (
                  <img
                    src={card.assignee.avatar}
                    alt={card.assignee.name}
                    className="w-5 h-5 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center text-[9px] font-semibold text-gray-600 dark:text-gray-300">
                    {initials}
                  </div>
                )}
                <span className="text-[11px] text-gray-500 dark:text-gray-400">
                  {card.assignee.name}
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            {card.dueDate && (
              <span className="flex items-center gap-1 text-[11px] text-gray-400 dark:text-gray-500">
                <Calendar className="w-3 h-3" />
                {card.dueDate}
              </span>
            )}
            {card.metadata}
          </div>
        </div>
      )}
    </div>
  );
}

// ── KanbanBoard ────────────────────────────────────────────────────────────────

export function KanbanBoard({
  columns,
  onCardMove,
  onCardClick,
  onAddCard,
  renderCard,
  accentColor = "#6366f1",
  addCardLabel = "Add card",
  className,
}: KanbanBoardProps) {
  const [draggedCardId, setDraggedCardId] = useState<string | null>(null);
  const [dragSourceColumn, setDragSourceColumn] = useState<string | null>(null);
  const [dragOverColumn, setDragOverColumn] = useState<string | null>(null);
  const [dropIndex, setDropIndex] = useState<number>(0);
  const dragCounterRef = useRef<Record<string, number>>({});

  // ── Drag handlers ──

  const handleDragStart = useCallback(
    (e: React.DragEvent, cardId: string, columnId: string) => {
      setDraggedCardId(cardId);
      setDragSourceColumn(columnId);
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/plain", cardId);
      // Apply opacity after a tick so the drag image captures normal state
      requestAnimationFrame(() => {
        const el = document.getElementById(`kanban-card-${cardId}`);
        if (el) el.style.opacity = "0.5";
      });
    },
    []
  );

  const handleDragEnd = useCallback(() => {
    if (draggedCardId) {
      const el = document.getElementById(`kanban-card-${draggedCardId}`);
      if (el) el.style.opacity = "1";
    }
    setDraggedCardId(null);
    setDragSourceColumn(null);
    setDragOverColumn(null);
    setDropIndex(0);
    dragCounterRef.current = {};
  }, [draggedCardId]);

  const handleColumnDragEnter = useCallback(
    (e: React.DragEvent, columnId: string) => {
      e.preventDefault();
      dragCounterRef.current[columnId] =
        (dragCounterRef.current[columnId] || 0) + 1;
      setDragOverColumn(columnId);
    },
    []
  );

  const handleColumnDragLeave = useCallback(
    (columnId: string) => {
      dragCounterRef.current[columnId] =
        (dragCounterRef.current[columnId] || 0) - 1;
      if (dragCounterRef.current[columnId] <= 0) {
        dragCounterRef.current[columnId] = 0;
        if (dragOverColumn === columnId) {
          setDragOverColumn(null);
        }
      }
    },
    [dragOverColumn]
  );

  const handleColumnDragOver = useCallback(
    (e: React.DragEvent, column: KanbanColumn) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";

      // Calculate drop index based on mouse Y relative to cards
      const columnEl = e.currentTarget as HTMLElement;
      const cards = columnEl.querySelectorAll("[data-card-index]");
      const mouseY = e.clientY;
      let index = column.cards.length;

      for (let i = 0; i < cards.length; i++) {
        const rect = cards[i].getBoundingClientRect();
        const midY = rect.top + rect.height / 2;
        if (mouseY < midY) {
          index = i;
          break;
        }
      }
      setDropIndex(index);
    },
    []
  );

  const handleDrop = useCallback(
    (e: React.DragEvent, targetColumnId: string) => {
      e.preventDefault();
      const cardId = e.dataTransfer.getData("text/plain");
      if (cardId && dragSourceColumn && onCardMove) {
        onCardMove(cardId, dragSourceColumn, targetColumnId, dropIndex);
      }
      handleDragEnd();
    },
    [dragSourceColumn, dropIndex, onCardMove, handleDragEnd]
  );

  return (
    <div
      className={cn(
        "flex gap-4 overflow-x-auto p-4 min-h-0 h-full",
        className
      )}
    >
      {columns.map((column) => {
        const isOverLimit =
          column.limit !== undefined && column.cards.length >= column.limit;
        const isDragOver = dragOverColumn === column.id;

        return (
          <div
            key={column.id}
            className={cn(
              "flex flex-col min-w-[280px] max-w-[320px] shrink-0 rounded-xl",
              "bg-gray-50/80 dark:bg-gray-900/50",
              "border border-transparent transition-colors duration-150",
              isDragOver &&
                "border-dashed border-2 border-gray-300 dark:border-gray-600"
            )}
            style={
              isDragOver
                ? { backgroundColor: accentColor + "08" }
                : undefined
            }
          >
            {/* Column header */}
            <div className="flex items-center gap-2 px-3 py-3">
              {column.color && (
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: column.color }}
                />
              )}
              <span className="text-[13px] font-semibold text-gray-700 dark:text-gray-200 truncate">
                {column.title}
              </span>
              <span className="text-[11px] font-medium text-gray-400 dark:text-gray-500 bg-gray-200/60 dark:bg-gray-700/60 px-1.5 py-0.5 rounded-md">
                {column.cards.length}
              </span>
              {isOverLimit && (
                <span className="flex items-center gap-0.5 text-[10px] font-semibold text-red-500 bg-red-50 dark:bg-red-900/30 px-1.5 py-0.5 rounded-md">
                  <AlertTriangle className="w-3 h-3" />
                  WIP
                </span>
              )}
            </div>

            {/* Cards area */}
            <div
              className="flex-1 overflow-y-auto px-2 pb-2 flex flex-col gap-2"
              onDragEnter={(e) => handleColumnDragEnter(e, column.id)}
              onDragLeave={() => handleColumnDragLeave(column.id)}
              onDragOver={(e) => handleColumnDragOver(e, column)}
              onDrop={(e) => handleDrop(e, column.id)}
            >
              {column.cards.map((card, idx) => (
                <div
                  key={card.id}
                  id={`kanban-card-${card.id}`}
                  data-card-index={idx}
                  draggable
                  onDragStart={(e) => handleDragStart(e, card.id, column.id)}
                  onDragEnd={handleDragEnd}
                  className="relative group"
                >
                  {/* Drag handle indicator */}
                  <div className="absolute left-1 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-40 transition-opacity pointer-events-none z-10">
                    <GripVertical className="w-3 h-3 text-gray-400" />
                  </div>
                  {renderCard ? (
                    renderCard(card)
                  ) : (
                    <DefaultCard
                      card={card}
                      onCardClick={onCardClick}
                      columnId={column.id}
                    />
                  )}
                </div>
              ))}

              {/* Empty drop zone placeholder */}
              {column.cards.length === 0 && isDragOver && (
                <div className="h-16 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center text-[12px] text-gray-400">
                  Drop here
                </div>
              )}
            </div>

            {/* Add card button */}
            {onAddCard && (
              <button
                onClick={() => onAddCard(column.id)}
                className={cn(
                  "flex items-center gap-1.5 mx-2 mb-2 px-3 py-2 rounded-lg",
                  "text-[12px] text-gray-400 dark:text-gray-500",
                  "hover:bg-gray-200/50 dark:hover:bg-gray-700/40 hover:text-gray-600 dark:hover:text-gray-300",
                  "transition-colors cursor-pointer"
                )}
              >
                <Plus className="w-3.5 h-3.5" />
                {addCardLabel}
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
