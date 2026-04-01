import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ExpandableTable } from "./ExpandableTable";
import type { ColumnDef } from "@tanstack/react-table";

interface Order { id: number; cliente: string; total: string; estado: string; fecha: string; detalles: string; }

const MOCK: Order[] = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  cliente: `Cliente ${i + 1}`,
  total: `$${(Math.random() * 1000).toFixed(2)}`,
  estado: ["Completado", "Pendiente", "Cancelado"][i % 3],
  fecha: `2026-03-${String(i + 10).padStart(2, "0")}`,
  detalles: `Detalle del pedido ${i + 1}. Incluye ${i + 2} productos.`,
}));

const columns: ColumnDef<Order>[] = [
  { id: "expander", header: "", size: 40, cell: ({ row }) => (
    <button onClick={row.getToggleExpandedHandler()} className="text-gray-500 hover:text-amber-600 transition-colors">
      {row.getIsExpanded() ? "▼" : "▶"}
    </button>
  )},
  { accessorKey: "id", header: "ID", size: 60 },
  { accessorKey: "cliente", header: "Cliente" },
  { accessorKey: "total", header: "Total", size: 100 },
  { accessorKey: "estado", header: "Estado", size: 120 },
  { accessorKey: "fecha", header: "Fecha", size: 120 },
];

const SubComponent = ({ row }: { row: Order }) => (
  <div className="p-4 bg-amber-50 border-t border-amber-200">
    <p className="text-sm text-gray-700"><strong>Detalles:</strong> {row.detalles}</p>
  </div>
);

const meta: Meta = {
  title: "Components/ExpandableTable",
  parameters: { layout: "padded", docs: { description: { component: "Tabla con filas expandibles para mostrar contenido adicional. Soporta minimización de columnas con Alt+Click." } } },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  name: "Default",
  render: () => <ExpandableTable data={MOCK} columns={columns} SubComponent={SubComponent} tableId="story-expandable" />,
};
