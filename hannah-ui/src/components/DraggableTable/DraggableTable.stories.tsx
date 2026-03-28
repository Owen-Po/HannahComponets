import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DraggableTable } from "./DraggableTable";
import type { ColumnDef } from "@tanstack/react-table";

interface Person {
  id: number;
  nombre: string;
  email: string;
  rol: string;
  estado: string;
  ciudad: string;
}

const MOCK_DATA: Person[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  nombre: `Usuario ${i + 1}`,
  email: `usuario${i + 1}@ejemplo.com`,
  rol: ["Admin", "Editor", "Viewer"][i % 3],
  estado: ["Activo", "Inactivo", "Pendiente"][i % 3],
  ciudad: ["Lima", "Arequipa", "Cusco", "Trujillo", "Piura"][i % 5],
}));

const columns: ColumnDef<Person>[] = [
  { accessorKey: "id", header: "ID", size: 60 },
  { accessorKey: "nombre", header: "Nombre" },
  { accessorKey: "email", header: "Email" },
  { accessorKey: "rol", header: "Rol", size: 100 },
  { accessorKey: "estado", header: "Estado", size: 100, cell: ({ getValue }) => {
    const val = getValue() as string;
    const colors: Record<string, string> = { Activo: "bg-green-100 text-green-700", Inactivo: "bg-red-100 text-red-700", Pendiente: "bg-amber-100 text-amber-700" };
    return <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${colors[val] || ""}`}>{val}</span>;
  }},
  { accessorKey: "ciudad", header: "Ciudad", size: 120 },
];

const meta: Meta = {
  title: "Components/DraggableTable",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Tabla avanzada con columnas arrastrables (dnd-kit), sorting multi-columna, resize, minimizar columnas (Alt+Click), paginación, búsqueda global, visibilidad de columnas y pantalla completa. Persiste estado en localStorage via Zustand.",
      },
    },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  name: "Default",
  render: () => <DraggableTable data={MOCK_DATA} columns={columns} tableId="story-demo" />,
};

export const WithoutSearch: Story = {
  name: "Sin búsqueda",
  render: () => <DraggableTable data={MOCK_DATA} columns={columns} showSearch={false} tableId="story-no-search" />,
};

export const Loading: Story = {
  name: "Loading",
  render: () => <DraggableTable data={[]} columns={columns} isLoading tableId="story-loading" />,
};

export const Empty: Story = {
  name: "Sin datos",
  render: () => <DraggableTable data={[]} columns={columns} emptyMessage="No se encontraron registros" tableId="story-empty" />,
};

export const Compact: Story = {
  name: "Solo lectura (sin drag ni resize)",
  render: () => <DraggableTable data={MOCK_DATA.slice(0, 10)} columns={columns} enableColumnOrdering={false} enableColumnResizing={false} enableFullScreen={false} showColumnToggle={false} tableId="story-compact" />,
};
