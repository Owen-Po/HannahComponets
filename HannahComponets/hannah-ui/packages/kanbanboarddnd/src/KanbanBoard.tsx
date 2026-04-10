import { useState, useMemo, useCallback, useRef } from "react";
import { KanbanColumn } from "./KanbanColumn";

// ─── Tipos genéricos del Kanban ─────────────────────────────────────────────

export interface KanbanColumna {
  id: string;
  nombre: string;
  color: string;
  bgColor: string;
  dotColor: string;
  borderColor: string;
  orden: number;
}

export interface KanbanTarea {
  id: string;
  titulo: string;
  descripcion?: string;
  columnaId: string;
  orden: number;
  prioridad?: "alta" | "media" | "baja";
  responsable?: string;
  fechaLimite?: string;
  etiquetas?: string[];
  fechaCreacion: string;
}

interface KanbanBoardDndProps {
  columnas: KanbanColumna[];
  tareas: KanbanTarea[];
  onTareasChange?: (tareas: KanbanTarea[]) => void;
  /** Llamado al soltar una tarea en otra columna. Retorna una Promise para mostrar loading. */
  onTareaMove?: (tareaId: string, nuevaColumnaId: string, orden: number) => Promise<void>;
}

function arrayMove<T>(arr: T[], from: number, to: number): T[] {
  const result = [...arr];
  const [removed] = result.splice(from, 1);
  result.splice(to, 0, removed);
  return result;
}

export function KanbanBoardDnd({
  columnas,
  tareas: initialTareas,
  onTareasChange,
  onTareaMove,
}: KanbanBoardDndProps) {
  const [tareas, setTareas] = useState<KanbanTarea[]>(initialTareas);
  const [draggedTareaId, setDraggedTareaId] = useState<string | null>(null);
  const [dragSourceColumnaId, setDragSourceColumnaId] = useState<string | null>(null);
  const [dragOverColumnaId, setDragOverColumnaId] = useState<string | null>(null);
  const [savingTareaIds, setSavingTareaIds] = useState<Set<string>>(new Set());
  const dropTargetTareaIdRef = useRef<string | null>(null);

  const tareasGrouped = useMemo(() => {
    const map: Record<string, KanbanTarea[]> = {};
    for (const col of columnas) {
      map[col.id] = tareas
        .filter((t) => t.columnaId === col.id)
        .sort((a, b) => a.orden - b.orden);
    }
    return map;
  }, [columnas, tareas]);

  const updateTareas = useCallback(
    (updated: KanbanTarea[]) => {
      setTareas(updated);
      onTareasChange?.(updated);
    },
    [onTareasChange],
  );

  // ── Card drag handlers ──

  const handleCardDragStart = useCallback(
    (e: React.DragEvent, tareaId: string, columnaId: string) => {
      setDraggedTareaId(tareaId);
      setDragSourceColumnaId(columnaId);
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/plain", tareaId);
      requestAnimationFrame(() => {
        const el = e.target as HTMLElement;
        if (el) el.style.opacity = "0.5";
      });
    },
    [],
  );

  const handleCardDragEnd = useCallback(() => {
    if (draggedTareaId) {
      document.querySelectorAll("[draggable]").forEach((el) => {
        (el as HTMLElement).style.opacity = "1";
      });
    }
    setDraggedTareaId(null);
    setDragSourceColumnaId(null);
    setDragOverColumnaId(null);
    dropTargetTareaIdRef.current = null;
  }, [draggedTareaId]);

  const handleCardDragOver = useCallback((_e: React.DragEvent, tareaId: string) => {
    dropTargetTareaIdRef.current = tareaId;
  }, []);

  // ── Column drag handlers ──

  const handleColumnDragEnter = useCallback((_e: React.DragEvent, columnaId: string) => {
    setDragOverColumnaId(columnaId);
  }, []);

  const handleColumnDragLeave = useCallback(
    (columnaId: string) => {
      if (dragOverColumnaId === columnaId) {
        setDragOverColumnaId(null);
      }
    },
    [dragOverColumnaId],
  );

  const handleColumnDragOver = useCallback((_e: React.DragEvent, _columnaId: string) => {
    // handled by the column component
  }, []);

  const handleColumnDrop = useCallback(
    (_e: React.DragEvent, targetColumnaId: string) => {
      if (!draggedTareaId || !dragSourceColumnaId) return;

      const overTareaId = dropTargetTareaIdRef.current;

      // Same column reorder
      if (dragSourceColumnaId === targetColumnaId && overTareaId) {
        const colTareas = tareas
          .filter((t) => t.columnaId === targetColumnaId)
          .sort((a, b) => a.orden - b.orden);

        const oldIndex = colTareas.findIndex((t) => t.id === draggedTareaId);
        const newIndex = colTareas.findIndex((t) => t.id === overTareaId);

        if (oldIndex !== -1 && newIndex !== -1 && oldIndex !== newIndex) {
          const reordered = arrayMove(colTareas, oldIndex, newIndex).map(
            (t, i) => ({ ...t, orden: i }),
          );
          const rest = tareas.filter((t) => t.columnaId !== targetColumnaId);
          updateTareas([...rest, ...reordered]);
        }
      }
      // Cross-column move
      else if (dragSourceColumnaId !== targetColumnaId) {
        const targetColTareas = tareas
          .filter((t) => t.columnaId === targetColumnaId)
          .sort((a, b) => a.orden - b.orden);

        let insertIndex = targetColTareas.length;
        if (overTareaId) {
          const idx = targetColTareas.findIndex((t) => t.id === overTareaId);
          if (idx !== -1) insertIndex = idx;
        }

        const updated = tareas.map((t) =>
          t.id === draggedTareaId
            ? { ...t, columnaId: targetColumnaId, orden: insertIndex }
            : t,
        );

        // Re-index both columns
        const reindexed = updated.map((t) => {
          if (t.columnaId === targetColumnaId) {
            const colTareas = updated
              .filter((u) => u.columnaId === targetColumnaId)
              .sort((a, b) => {
                if (a.id === draggedTareaId) return 0;
                if (b.id === draggedTareaId) return 0;
                return a.orden - b.orden;
              });
            // Build proper order
            const withoutDragged = colTareas.filter((u) => u.id !== draggedTareaId);
            const dragged = colTareas.find((u) => u.id === draggedTareaId)!;
            withoutDragged.splice(insertIndex, 0, dragged);
            const idx = withoutDragged.findIndex((u) => u.id === t.id);
            return { ...t, orden: idx !== -1 ? idx : t.orden };
          }
          return t;
        });

        updateTareas(reindexed);

        if (onTareaMove) {
          setSavingTareaIds((prev) => new Set(prev).add(draggedTareaId));
          onTareaMove(draggedTareaId, targetColumnaId, insertIndex)
            .catch(() => {
              setTareas(initialTareas);
            })
            .finally(() => {
              setSavingTareaIds((prev) => {
                const next = new Set(prev);
                next.delete(draggedTareaId);
                return next;
              });
            });
        }
      }

      handleCardDragEnd();
    },
    [draggedTareaId, dragSourceColumnaId, tareas, updateTareas, onTareaMove, initialTareas, handleCardDragEnd],
  );

  const columnasOrdenadas = useMemo(
    () => [...columnas].sort((a, b) => a.orden - b.orden),
    [columnas],
  );

  return (
    <div className="flex-1 overflow-x-auto overflow-y-hidden">
      <div
        className="flex gap-3 p-4 h-full"
        style={{ minWidth: "max-content" }}
      >
        {columnasOrdenadas.map((columna) => {
          const colTareas = tareasGrouped[columna.id] ?? [];
          return (
            <KanbanColumn
              key={columna.id}
              columna={columna}
              tareas={colTareas}
              savingTareaIds={savingTareaIds}
              draggedTareaId={draggedTareaId}
              isOver={dragOverColumnaId === columna.id}
              onColumnDragEnter={handleColumnDragEnter}
              onColumnDragLeave={handleColumnDragLeave}
              onColumnDragOver={handleColumnDragOver}
              onColumnDrop={handleColumnDrop}
              onCardDragStart={handleCardDragStart}
              onCardDragEnd={handleCardDragEnd}
              onCardDragOver={handleCardDragOver}
            />
          );
        })}
      </div>
    </div>
  );
}
