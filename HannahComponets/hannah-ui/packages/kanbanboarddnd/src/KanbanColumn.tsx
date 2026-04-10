import { useRef, useCallback } from "react";
import type { KanbanColumna, KanbanTarea } from "./KanbanBoard";
import { KanbanCard } from "./KanbanCard";

interface KanbanColumnProps {
  columna: KanbanColumna;
  tareas: KanbanTarea[];
  savingTareaIds?: Set<string>;
  draggedTareaId: string | null;
  isOver: boolean;
  onColumnDragEnter: (e: React.DragEvent, columnaId: string) => void;
  onColumnDragLeave: (columnaId: string) => void;
  onColumnDragOver: (e: React.DragEvent, columnaId: string) => void;
  onColumnDrop: (e: React.DragEvent, columnaId: string) => void;
  onCardDragStart: (e: React.DragEvent, tareaId: string, columnaId: string) => void;
  onCardDragEnd: () => void;
  onCardDragOver: (e: React.DragEvent, tareaId: string) => void;
}

export function KanbanColumn({
  columna,
  tareas,
  savingTareaIds,
  draggedTareaId,
  isOver,
  onColumnDragEnter,
  onColumnDragLeave,
  onColumnDragOver,
  onColumnDrop,
  onCardDragStart,
  onCardDragEnd,
  onCardDragOver,
}: KanbanColumnProps) {
  const dragCounter = useRef(0);

  const handleDragEnter = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      dragCounter.current++;
      onColumnDragEnter(e, columna.id);
    },
    [onColumnDragEnter, columna.id],
  );

  const handleDragLeave = useCallback(() => {
    dragCounter.current--;
    if (dragCounter.current <= 0) {
      dragCounter.current = 0;
      onColumnDragLeave(columna.id);
    }
  }, [onColumnDragLeave, columna.id]);

  const handleDragOver = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      onColumnDragOver(e, columna.id);
    },
    [onColumnDragOver, columna.id],
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      dragCounter.current = 0;
      onColumnDrop(e, columna.id);
    },
    [onColumnDrop, columna.id],
  );

  return (
    <div
      className={`flex flex-col w-72 shrink-0 h-full rounded-2xl border-2 transition-all duration-150
        ${isOver
          ? `${columna.borderColor} bg-white/60 shadow-lg`
          : "border-transparent"
        }`}
    >
      {/* Header */}
      <div
        className={`flex items-center justify-between px-3 py-2.5 rounded-xl mb-2 transition-all ${columna.bgColor}`}
      >
        <div className="flex items-center gap-2">
          <div
            className={`w-2 h-2 rounded-full ${columna.dotColor} ${isOver ? "scale-125" : ""} transition-transform`}
          />
          <span className={`text-xs font-semibold ${columna.color}`}>
            {columna.nombre}
          </span>
        </div>
        <span
          className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-white/70 ${columna.color}`}
        >
          {tareas.length}
        </span>
      </div>

      {/* Cards area */}
      <div
        className="flex-1 overflow-y-auto space-y-2 px-1 pb-2 min-h-[80px]"
        style={{ scrollbarWidth: "thin" }}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {isOver && tareas.length === 0 && (
          <div
            className={`border-2 border-dashed rounded-xl transition-all duration-150 ${columna.borderColor}`}
            style={{ height: 80 }}
          >
            <div className="h-full flex items-center justify-center">
              <p className={`text-xs font-semibold ${columna.color}`}>
                Soltar aquí
              </p>
            </div>
          </div>
        )}
        {tareas.length === 0 && !isOver && (
          <div className="h-20 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center">
            <p className="text-xs text-gray-300 font-medium">Sin tareas</p>
          </div>
        )}
        {tareas.map((tarea) => (
          <KanbanCard
            key={tarea.id}
            tarea={tarea}
            isSaving={savingTareaIds?.has(tarea.id)}
            isDragging={draggedTareaId === tarea.id}
            onDragStart={(e) => onCardDragStart(e, tarea.id, columna.id)}
            onDragEnd={onCardDragEnd}
            onDragOver={(e) => onCardDragOver(e, tarea.id)}
          />
        ))}
      </div>
    </div>
  );
}
