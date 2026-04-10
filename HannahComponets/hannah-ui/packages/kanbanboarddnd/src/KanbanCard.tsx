import { Calendar, User, MoreHorizontal, Loader2 } from "lucide-react";
import type { KanbanTarea } from "./KanbanBoard";

const prioridadConfig = {
  alta: "bg-red-50 text-red-600 border border-red-100",
  media: "bg-amber-50 text-amber-600 border border-amber-100",
  baja: "bg-gray-100 text-gray-500 border border-gray-200",
};

interface KanbanCardProps {
  tarea: KanbanTarea;
  isSaving?: boolean;
  isDragging?: boolean;
  onDragStart?: (e: React.DragEvent) => void;
  onDragEnd?: (e: React.DragEvent) => void;
  onDragOver?: (e: React.DragEvent) => void;
}

export function KanbanCard({
  tarea,
  isSaving,
  isDragging,
  onDragStart,
  onDragEnd,
  onDragOver,
}: KanbanCardProps) {
  return (
    <div
      draggable={!isSaving}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      className={`relative bg-white rounded-xl border p-3.5 shadow-sm transition-all duration-150 group
        ${isSaving
          ? "opacity-60 pointer-events-none border-amber-200"
          : isDragging
            ? "opacity-40 border-dashed border-gray-300 scale-[0.98]"
            : "border-gray-100 hover:shadow-md hover:border-gray-200 cursor-grab active:cursor-grabbing"
        }`}
    >
      {isSaving && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/50 rounded-xl z-10">
          <div className="flex items-center gap-1.5 text-xs text-amber-600 font-medium">
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
            Guardando...
          </div>
        </div>
      )}
      <div className="flex items-start justify-between gap-2 mb-2">
        <p className="text-sm font-semibold text-gray-800 leading-tight">
          {tarea.titulo}
        </p>
        <button className="w-6 h-6 flex items-center justify-center rounded-md text-gray-300 hover:text-gray-500 hover:bg-gray-100 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
          <MoreHorizontal className="w-3.5 h-3.5" />
        </button>
      </div>

      {tarea.descripcion && (
        <p className="text-xs text-gray-400 mb-2 line-clamp-2">
          {tarea.descripcion}
        </p>
      )}

      <div className="flex items-center gap-3 text-[11px] text-gray-400 mb-2">
        {tarea.responsable && (
          <div className="flex items-center gap-1">
            <User className="w-3 h-3 shrink-0" />
            {tarea.responsable}
          </div>
        )}
        {tarea.fechaLimite && (
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3 shrink-0" />
            {tarea.fechaLimite}
          </div>
        )}
      </div>

      <div className="flex items-center gap-1.5 flex-wrap">
        {tarea.prioridad && (
          <span
            className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-md capitalize ${prioridadConfig[tarea.prioridad]}`}
          >
            {tarea.prioridad}
          </span>
        )}
        {tarea.etiquetas?.map((etiqueta) => (
          <span
            key={etiqueta}
            className="text-[10px] font-medium px-1.5 py-0.5 rounded-md bg-blue-50 text-blue-600 border border-blue-100"
          >
            {etiqueta}
          </span>
        ))}
      </div>
    </div>
  );
}

export function KanbanCardOverlay({ tarea }: { tarea: KanbanTarea }) {
  return (
    <div className="bg-white rounded-xl border-2 border-amber-300 p-3.5 shadow-2xl w-64 rotate-[2deg] scale-105">
      <p className="text-sm font-semibold text-gray-800 mb-1">{tarea.titulo}</p>
      {tarea.descripcion && (
        <p className="text-xs text-gray-400 line-clamp-2">{tarea.descripcion}</p>
      )}
      {tarea.prioridad && (
        <span
          className={`inline-block mt-2 text-[10px] font-semibold px-1.5 py-0.5 rounded-md capitalize ${prioridadConfig[tarea.prioridad]}`}
        >
          {tarea.prioridad}
        </span>
      )}
    </div>
  );
}
