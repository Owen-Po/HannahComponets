import type { Meta, StoryObj } from "@storybook/react";
import { Home, Users, User, Settings, FileText, Shield } from "lucide-react";
import { Breadcrumb, type BreadcrumbProps } from "./Breadcrumb";

/* ─────────────────────────────────────────
   Shared handlers
───────────────────────────────────────── */
const noop = (): void => {};

/* ─────────────────────────────────────────
   Meta
───────────────────────────────────────── */
const meta: Meta<typeof Breadcrumb> = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Componente de migas de pan para navegación jerárquica con soporte para iconos, colapso automático, separador personalizable y color de acento dinámico.",
      },
    },
  },
  argTypes: {
    items: {
      control: "object",
      description: "Lista de elementos del breadcrumb",
      table: { category: "Contenido" },
    },
    separator: {
      table: { disable: true },
    },
    accentColor: {
      control: "color",
      description: "Color de acento para hover en los links",
      table: { category: "Visual", defaultValue: { summary: "#7c6aff" } },
    },
    maxItems: {
      control: "number",
      description: "Máximo de items visibles antes de colapsar",
      table: { category: "Visual" },
    },
    className: {
      control: "text",
      description: "Clases CSS adicionales",
      table: { category: "Visual" },
    },
  },
  args: {
    items: [
      { label: "Dashboard", href: "#" },
      { label: "Usuarios", href: "#" },
      { label: "Juan Pérez" },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

/* ─────────────────────────────────────────
   Stories
───────────────────────────────────────── */

/** Modo claro por defecto */
export const Default: Story = {
  name: "Default",
};

/** Modo oscuro */
export const DarkMode: Story = {
  name: "Dark mode",
  parameters: {
    backgrounds: { default: "Dark" },
  },
};

/** Solo dos elementos */
export const TwoItems: Story = {
  name: "Two items",
  args: {
    items: [
      { label: "Inicio", href: "#" },
      { label: "Configuración" },
    ],
  },
};

/** Un solo elemento (página actual) */
export const SingleItem: Story = {
  name: "Single item",
  args: {
    items: [{ label: "Dashboard" }],
  },
};

/** Muchos elementos con colapso */
export const ManyItems: Story = {
  name: "Many items (collapsed)",
  parameters: {
    docs: {
      description: {
        story: "Cuando hay más items que maxItems, los intermedios se colapsan con un ícono de ellipsis.",
      },
    },
  },
  args: {
    maxItems: 4,
    items: [
      { label: "Inicio", href: "#" },
      { label: "Administración", href: "#" },
      { label: "Usuarios", href: "#" },
      { label: "Roles", href: "#" },
      { label: "Permisos", href: "#" },
      { label: "Detalle" },
    ],
  },
};

/** Con iconos en cada nivel */
export const WithIcons: Story = {
  name: "With icons",
  args: {
    items: [
      { label: "Inicio", href: "#", icon: <Home size={14} /> },
      { label: "Usuarios", href: "#", icon: <Users size={14} /> },
      { label: "Juan Pérez", icon: <User size={14} /> },
    ],
  },
};

/** Separador personalizado */
export const CustomSeparator: Story = {
  name: "Custom separator",
  args: {
    separator: <span className="text-gray-300 dark:text-gray-700">/</span>,
    items: [
      { label: "app", href: "#" },
      { label: "settings", href: "#" },
      { label: "profile" },
    ],
  },
};

/** Con handlers onClick */
export const WithOnClick: Story = {
  name: "With onClick",
  args: {
    items: [
      { label: "Dashboard", href: "#", onClick: noop },
      { label: "Reportes", href: "#", onClick: noop },
      { label: "Ventas Q1" },
    ],
  },
};

/** Acento verde */
export const AccentGreen: Story = {
  name: "Accent · Green",
  args: {
    accentColor: "#10b981",
    items: [
      { label: "Inicio", href: "#", icon: <Home size={14} /> },
      { label: "Documentos", href: "#", icon: <FileText size={14} /> },
      { label: "Reporte Anual" },
    ],
  },
};

/** Acento azul */
export const AccentBlue: Story = {
  name: "Accent · Blue",
  args: {
    accentColor: "#3b82f6",
    items: [
      { label: "Panel", href: "#" },
      { label: "Seguridad", href: "#", icon: <Shield size={14} /> },
      { label: "Configuración", icon: <Settings size={14} /> },
    ],
  },
};
