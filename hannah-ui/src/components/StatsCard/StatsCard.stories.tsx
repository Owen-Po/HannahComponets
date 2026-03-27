import type { Meta, StoryObj } from "@storybook/react";
import { DollarSign, Users, ShoppingCart, TrendingUp, Activity, BarChart3 } from "lucide-react";
import { StatsCard } from "./StatsCard";

/* ─────────────────────────────────────────
   Shared handlers
───────────────────────────────────────── */
const noop = (): void => {};

/* ─────────────────────────────────────────
   Meta
───────────────────────────────────────── */
const meta: Meta<typeof StatsCard> = {
  title: "Components/StatsCard",
  component: StatsCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Tarjeta de KPI/métrica para dashboards con icono, tendencia, estado de carga y soporte de modo oscuro.",
      },
    },
  },
  argTypes: {
    onClick: { action: "clicked" },

    title: {
      control: "text",
      description: "Etiqueta superior de la métrica",
      table: { category: "Contenido" },
    },
    value: {
      control: "text",
      description: "Valor principal de la métrica",
      table: { category: "Contenido" },
    },
    description: {
      control: "text",
      description: "Texto descriptivo debajo del valor",
      table: { category: "Contenido" },
    },

    accentColor: {
      control: "color",
      description: "Color de acento para el icono",
      table: { category: "Visual", defaultValue: { summary: "#7c6aff" } },
    },

    loading: {
      control: "boolean",
      description: "Muestra estado de carga skeleton",
      table: { category: "Estado", defaultValue: { summary: "false" } },
    },

    trend: {
      control: "object",
      description: "Indicador de tendencia con dirección y porcentaje",
      table: {
        category: "Datos",
        type: {
          summary: "StatsCardTrend",
          detail: '{ value: number; direction: "up" | "down" | "neutral" }',
        },
      },
    },

    icon: { table: { disable: true } },
  },
  args: {
    title: "Ingresos totales",
    value: "$45,231.89",
    icon: <DollarSign size={20} />,
    onClick: undefined,
  },
};

export default meta;
type Story = StoryObj<typeof StatsCard>;

/* ─────────────────────────────────────────
   Stories
───────────────────────────────────────── */

export const Default: Story = {};

export const WithTrendUp: Story = {
  name: "Trend up",
  args: {
    title: "Suscriptores",
    value: "2,350",
    icon: <Users size={20} />,
    trend: { value: 12.5, direction: "up" },
    description: "vs. mes anterior",
  },
};

export const WithTrendDown: Story = {
  name: "Trend down",
  args: {
    title: "Tasa de rebote",
    value: "42.3%",
    icon: <Activity size={20} />,
    trend: { value: 3.2, direction: "down" },
    description: "vs. mes anterior",
  },
};

export const Loading: Story = {
  args: { loading: true },
};

export const Clickable: Story = {
  args: {
    title: "Pedidos activos",
    value: "1,234",
    icon: <ShoppingCart size={20} />,
    trend: { value: 8.1, direction: "up" },
    onClick: noop,
  },
};

export const AccentGreen: Story = {
  name: "Accent · Green",
  args: {
    title: "Conversiones",
    value: "89.4%",
    icon: <TrendingUp size={20} />,
    accentColor: "#10b981",
    trend: { value: 4.3, direction: "up" },
  },
};

export const AccentBlue: Story = {
  name: "Accent · Blue",
  args: {
    title: "Visitantes",
    value: "14,502",
    icon: <BarChart3 size={20} />,
    accentColor: "#3b82f6",
    trend: { value: 2.1, direction: "up" },
  },
};

export const WithDescription: Story = {
  name: "With description",
  args: {
    title: "Tiempo promedio",
    value: "3m 42s",
    icon: <Activity size={20} />,
    description: "Duración media de sesión esta semana",
  },
};

export const WithoutIcon: Story = {
  name: "Without icon",
  args: {
    title: "Usuarios activos",
    value: "1,893",
    icon: undefined,
    trend: { value: 5.7, direction: "up" },
    description: "últimas 24 horas",
  },
};

export const GridLayout: Story = {
  name: "Grid layout",
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, width: 640 }}>
      <StatsCard
        title="Ingresos"
        value="$45,231"
        icon={<DollarSign size={20} />}
        trend={{ value: 12.5, direction: "up" }}
        description="vs. mes anterior"
      />
      <StatsCard
        title="Usuarios"
        value="2,350"
        icon={<Users size={20} />}
        trend={{ value: 8.1, direction: "up" }}
        description="nuevos este mes"
        accentColor="#10b981"
      />
      <StatsCard
        title="Pedidos"
        value="1,234"
        icon={<ShoppingCart size={20} />}
        trend={{ value: 3.2, direction: "down" }}
        description="vs. semana pasada"
        accentColor="#f59e0b"
      />
      <StatsCard
        title="Conversión"
        value="3.24%"
        icon={<TrendingUp size={20} />}
        trend={{ value: 0.8, direction: "neutral" }}
        description="sin cambios"
        accentColor="#3b82f6"
      />
    </div>
  ),
};

export const DarkMode: Story = {
  name: "Dark mode",
  parameters: { backgrounds: { default: "Dark" } },
  args: {
    title: "Ingresos totales",
    value: "$45,231.89",
    icon: <DollarSign size={20} />,
    trend: { value: 12.5, direction: "up" },
    description: "vs. mes anterior",
  },
};
