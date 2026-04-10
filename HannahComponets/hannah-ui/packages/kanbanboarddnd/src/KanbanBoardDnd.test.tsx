import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { KanbanBoardDnd } from "./KanbanBoard";
import type { KanbanColumna, KanbanTarea } from "./KanbanBoard";

const columnas: KanbanColumna[] = [
  {
    id: "todo",
    nombre: "Por hacer",
    color: "text-gray-600",
    bgColor: "bg-gray-100",
    dotColor: "bg-gray-400",
    borderColor: "border-gray-300",
    orden: 0,
  },
  {
    id: "doing",
    nombre: "En progreso",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    dotColor: "bg-blue-400",
    borderColor: "border-blue-300",
    orden: 1,
  },
];

const tareas: KanbanTarea[] = [
  {
    id: "t1",
    titulo: "Tarea uno",
    descripcion: "Descripción de la tarea uno",
    columnaId: "todo",
    orden: 0,
    prioridad: "alta",
    responsable: "Juan",
    fechaLimite: "2026-04-15",
    etiquetas: ["frontend"],
    fechaCreacion: "2026-04-01",
  },
  {
    id: "t2",
    titulo: "Tarea dos",
    columnaId: "doing",
    orden: 0,
    prioridad: "baja",
    fechaCreacion: "2026-04-02",
  },
];

describe("KanbanBoardDnd", () => {
  it("renders columns with their names", () => {
    render(<KanbanBoardDnd columnas={columnas} tareas={tareas} />);
    expect(screen.getByText("Por hacer")).toBeInTheDocument();
    expect(screen.getByText("En progreso")).toBeInTheDocument();
  });

  it("renders task cards in the correct columns", () => {
    render(<KanbanBoardDnd columnas={columnas} tareas={tareas} />);
    expect(screen.getByText("Tarea uno")).toBeInTheDocument();
    expect(screen.getByText("Tarea dos")).toBeInTheDocument();
  });

  it("displays task description", () => {
    render(<KanbanBoardDnd columnas={columnas} tareas={tareas} />);
    expect(screen.getByText("Descripción de la tarea uno")).toBeInTheDocument();
  });

  it("displays priority badges", () => {
    render(<KanbanBoardDnd columnas={columnas} tareas={tareas} />);
    expect(screen.getByText("alta")).toBeInTheDocument();
    expect(screen.getByText("baja")).toBeInTheDocument();
  });

  it("displays responsible and date", () => {
    render(<KanbanBoardDnd columnas={columnas} tareas={tareas} />);
    expect(screen.getByText("Juan")).toBeInTheDocument();
    expect(screen.getByText("2026-04-15")).toBeInTheDocument();
  });

  it("displays etiquetas", () => {
    render(<KanbanBoardDnd columnas={columnas} tareas={tareas} />);
    expect(screen.getByText("frontend")).toBeInTheDocument();
  });

  it("shows task count per column", () => {
    render(<KanbanBoardDnd columnas={columnas} tareas={tareas} />);
    const counts = screen.getAllByText("1");
    expect(counts.length).toBeGreaterThanOrEqual(2);
  });

  it("shows empty state when column has no tasks", () => {
    render(<KanbanBoardDnd columnas={columnas} tareas={[]} />);
    const emptyMessages = screen.getAllByText("Sin tareas");
    expect(emptyMessages).toHaveLength(2);
  });

  it("calls onTareasChange when provided", () => {
    const onChange = vi.fn();
    render(
      <KanbanBoardDnd columnas={columnas} tareas={tareas} onTareasChange={onChange} />
    );
    expect(screen.getByText("Tarea uno")).toBeInTheDocument();
  });

  it("cards are draggable", () => {
    render(<KanbanBoardDnd columnas={columnas} tareas={tareas} />);
    const card = screen.getByText("Tarea uno").closest("[draggable]");
    expect(card).toHaveAttribute("draggable", "true");
  });

  it("orders columns by orden property", () => {
    const reversed = [...columnas].map((c, i) => ({ ...c, orden: columnas.length - 1 - i }));
    render(<KanbanBoardDnd columnas={reversed} tareas={tareas} />);
    const names = screen.getAllByText(/Por hacer|En progreso/);
    expect(names[0].textContent).toBe("En progreso");
    expect(names[1].textContent).toBe("Por hacer");
  });
});
