import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";
import { Badge } from "../Badge/Badge";
import { Button } from "../Button/Button";

const USERS = [
  { id: 1, name: "Ana García", email: "ana@ejemplo.com", role: "Admin", status: "active" },
  { id: 2, name: "Carlos Ruiz", email: "carlos@ejemplo.com", role: "Editor", status: "active" },
  { id: 3, name: "María López", email: "maria@ejemplo.com", role: "Viewer", status: "inactive" },
  { id: 4, name: "Pedro Sánchez", email: "pedro@ejemplo.com", role: "Editor", status: "active" },
  { id: 5, name: "Laura Torres", email: "laura@ejemplo.com", role: "Admin", status: "pending" },
];

const BASE_COLUMNS = [
  { key: "name", header: "Nombre" },
  { key: "email", header: "Correo" },
  { key: "role", header: "Rol" },
];

const STATUS_COLUMN = {
  key: "status",
  header: "Estado",
  render: (value: unknown) => {
    const map: Record<string, "success" | "default" | "warning"> = {
      active: "success",
      inactive: "default",
      pending: "warning",
    };
    const label: Record<string, string> = {
      active: "Activo",
      inactive: "Inactivo",
      pending: "Pendiente",
    };
    const v = String(value);
    return <Badge variant={map[v] ?? "default"} dot>{label[v] ?? v}</Badge>;
  },
};

const ACTIONS_COLUMN = {
  key: "id",
  header: "Acciones",
  align: "right" as const,
  render: () => (
    <div style={{ display: "flex", gap: 6, justifyContent: "flex-end" }}>
      <Button size="sm" variant="ghost">Editar</Button>
      <Button size="sm" variant="danger" outline>Eliminar</Button>
    </div>
  ),
};

/* ─────────────────────────────────────────
   Meta
───────────────────────────────────────── */
const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Tabla de datos con columnas tipadas, render personalizado por celda, estados striped/hoverable/bordered, loading y empty state.",
      },
    },
  },
  argTypes: {
    striped: { control: "boolean", description: "Filas alternas", table: { category: "Layout", defaultValue: { summary: "false" } } },
    hoverable: { control: "boolean", description: "Hover en filas", table: { category: "Layout", defaultValue: { summary: "true" } } },
    bordered: { control: "boolean", description: "Bordes en celdas", table: { category: "Layout", defaultValue: { summary: "false" } } },
    compact: { control: "boolean", description: "Padding reducido", table: { category: "Layout", defaultValue: { summary: "false" } } },
    loading: { control: "boolean", description: "Estado de carga", table: { category: "Estado", defaultValue: { summary: "false" } } },
    stickyHeader: { control: "boolean", description: "Encabezado fijo", table: { category: "Layout", defaultValue: { summary: "false" } } },
  },
  args: {
    columns: [...BASE_COLUMNS, STATUS_COLUMN],
    data: USERS,
    striped: false,
    hoverable: true,
    bordered: false,
    compact: false,
    loading: false,
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

/* ─────────────────────────────────────────
   Playground
───────────────────────────────────────── */
export const Playground: Story = {};

/* ─────────────────────────────────────────
   Variantes de layout
───────────────────────────────────────── */
export const Striped: Story = {
  name: "Layout · Striped",
  args: { striped: true, columns: BASE_COLUMNS },
};

export const Bordered: Story = {
  name: "Layout · Bordered",
  args: { bordered: true, columns: BASE_COLUMNS },
};

export const Compact: Story = {
  name: "Layout · Compact",
  args: { compact: true, columns: BASE_COLUMNS },
};

/* ─────────────────────────────────────────
   Con render personalizado
───────────────────────────────────────── */
export const WithStatusBadge: Story = {
  name: "Render · Status badge",
  args: { columns: [...BASE_COLUMNS, STATUS_COLUMN] },
};

export const WithActions: Story = {
  name: "Render · With actions",
  args: { columns: [...BASE_COLUMNS, STATUS_COLUMN, ACTIONS_COLUMN] },
};

/* ─────────────────────────────────────────
   Estados
───────────────────────────────────────── */
export const StateLoading: Story = {
  name: "State · Loading",
  args: { columns: BASE_COLUMNS, loading: true },
};

export const StateEmpty: Story = {
  name: "State · Empty",
  args: { columns: BASE_COLUMNS, data: [], emptyMessage: "No se encontraron usuarios." },
};

/* ─────────────────────────────────────────
   Showcase
───────────────────────────────────────── */
export const ShowcaseComplete: Story = {
  name: "Showcase · Complete table",
  parameters: { controls: { disable: true } },
  render: () => (
    <Table
      columns={[...BASE_COLUMNS, STATUS_COLUMN, ACTIONS_COLUMN]}
      data={USERS}
      striped
      hoverable
    />
  ),
};
