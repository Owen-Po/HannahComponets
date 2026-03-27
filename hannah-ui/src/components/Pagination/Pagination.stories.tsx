import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "./Pagination";

/* ─────────────────────────────────────────
   Meta
───────────────────────────────────────── */
const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Componente de paginación para tablas y listas con navegación por páginas, ellipsis para rangos largos, información de registros y color de acento dinámico.",
      },
    },
  },
  argTypes: {
    currentPage: {
      control: "number",
      description: "Página actual",
      table: { category: "Estado" },
    },
    totalPages: {
      control: "number",
      description: "Total de páginas",
      table: { category: "Estado" },
    },
    onPageChange: {
      action: "pageChanged",
      table: { category: "Callbacks" },
    },
    siblingCount: {
      control: "number",
      description: "Páginas visibles a cada lado de la actual",
      table: { category: "Visual", defaultValue: { summary: "1" } },
    },
    accentColor: {
      control: "color",
      description: "Color de acento para la página activa",
      table: { category: "Visual", defaultValue: { summary: "#7c6aff" } },
    },
    showInfo: {
      control: "boolean",
      description: "Muestra texto informativo de registros",
      table: { category: "Visual", defaultValue: { summary: "false" } },
    },
    totalItems: {
      control: "number",
      description: "Total de registros (para texto informativo)",
      table: { category: "Estado" },
    },
    itemsPerPage: {
      control: "number",
      description: "Registros por página (para texto informativo)",
      table: { category: "Estado" },
    },
    disabled: {
      control: "boolean",
      description: "Deshabilita toda la paginación",
      table: { category: "Estado", defaultValue: { summary: "false" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

/* ─────────────────────────────────────────
   Stories
───────────────────────────────────────── */

/** Primera página */
export const Default: Story = {
  name: "Default",
  args: {
    currentPage: 1,
    totalPages: 10,
  },
};

/** Página intermedia */
export const MiddlePage: Story = {
  name: "Middle page",
  args: {
    currentPage: 5,
    totalPages: 10,
  },
};

/** Última página */
export const LastPage: Story = {
  name: "Last page",
  args: {
    currentPage: 10,
    totalPages: 10,
  },
};

/** Pocas páginas (sin ellipsis) */
export const FewPages: Story = {
  name: "Few pages",
  args: {
    currentPage: 2,
    totalPages: 3,
  },
};

/** Muchas páginas */
export const ManyPages: Story = {
  name: "Many pages",
  args: {
    currentPage: 25,
    totalPages: 50,
  },
};

/** Con información de registros */
export const WithInfo: Story = {
  name: "With info",
  parameters: {
    docs: {
      description: {
        story: "Muestra 'Mostrando X–Y de Z' junto a los controles de paginación.",
      },
    },
  },
  args: {
    currentPage: 3,
    totalPages: 20,
    showInfo: true,
    totalItems: 195,
    itemsPerPage: 10,
  },
};

/** Deshabilitada */
export const Disabled: Story = {
  name: "Disabled",
  args: {
    currentPage: 3,
    totalPages: 10,
    disabled: true,
  },
};

/** Acento verde */
export const AccentGreen: Story = {
  name: "Accent · Green",
  args: {
    currentPage: 4,
    totalPages: 12,
    accentColor: "#10b981",
  },
};

/** Acento azul */
export const AccentBlue: Story = {
  name: "Accent · Blue",
  args: {
    currentPage: 7,
    totalPages: 15,
    accentColor: "#3b82f6",
  },
};

/** Modo oscuro */
export const DarkMode: Story = {
  name: "Dark mode",
  parameters: {
    backgrounds: { default: "Dark" },
  },
  args: {
    currentPage: 5,
    totalPages: 10,
  },
};

/** Interactiva */
export const Interactive: Story = {
  name: "Interactive",
  parameters: {
    docs: {
      description: {
        story: "Story interactiva: haz clic en las páginas para navegar.",
      },
    },
  },
  render: (args) => {
    const [page, setPage] = useState(1);
    return (
      <Pagination
        {...args}
        currentPage={page}
        totalPages={20}
        showInfo
        totalItems={200}
        itemsPerPage={10}
        onPageChange={setPage}
      />
    );
  },
};
