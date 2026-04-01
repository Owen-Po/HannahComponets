import type { Meta, StoryObj } from "@storybook/react";
import { KPICard } from "./KPICard";
import { Users, DollarSign, ShoppingCart, AlertTriangle } from "lucide-react";

const meta: Meta = {
  title: "Components/KPICard",
  parameters: {
    layout: "padded",
    docs: { description: { component: "Tarjeta de indicador clave (KPI) con valor, icono, tendencia porcentual y etiqueta." } },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  name: "Grid de KPIs",
  render: () => (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <KPICard title="Usuarios" value="1,248" icon={<Users size={20} />} trend={{ value: 12.5, label: "vs mes anterior" }} />
      <KPICard title="Ingresos" value="$24.5k" icon={<DollarSign size={20} />} trend={{ value: 8.2, label: "vs mes anterior" }} />
      <KPICard title="Pedidos" value="384" icon={<ShoppingCart size={20} />} trend={{ value: -3.1, label: "vs semana anterior" }} />
      <KPICard title="Errores" value="7" icon={<AlertTriangle size={20} />} trend={{ value: -15, label: "vs ayer" }} />
    </div>
  ),
};
