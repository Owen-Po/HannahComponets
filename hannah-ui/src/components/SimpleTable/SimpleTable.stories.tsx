import type { Meta, StoryObj } from "@storybook/react";
import { SimpleTable } from "./SimpleTable";
import type { ColumnDef } from "@tanstack/react-table";

interface Product { id: number; nombre: string; precio: string; stock: number; }

const MOCK: Product[] = [
  { id: 1, nombre: "Laptop", precio: "$999", stock: 15 },
  { id: 2, nombre: "Mouse", precio: "$29", stock: 150 },
  { id: 3, nombre: "Teclado", precio: "$59", stock: 80 },
  { id: 4, nombre: "Monitor", precio: "$349", stock: 25 },
  { id: 5, nombre: "Webcam", precio: "$79", stock: 45 },
];

const columns: ColumnDef<Product>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "nombre", header: "Producto" },
  { accessorKey: "precio", header: "Precio" },
  { accessorKey: "stock", header: "Stock" },
];

const meta: Meta = {
  title: "Components/SimpleTable",
  parameters: { layout: "padded", docs: { description: { component: "Tabla simple y ligera usando TanStack React Table. Sin paginación ni búsqueda, ideal para datasets pequeños." } } },
};
export default meta;
type Story = StoryObj;

export const Default: Story = { name: "Default", render: () => <SimpleTable data={MOCK} columns={columns} /> };
export const Empty: Story = { name: "Sin datos", render: () => <SimpleTable data={[]} columns={columns} /> };
