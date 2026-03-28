import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { FilterPanel } from "./FilterPanel";

const meta: Meta = {
  title: "Components/FilterPanel",
  parameters: {
    layout: "centered",
    docs: { description: { component: "Panel popover de filtros con contador de filtros activos, animaciones y botón de limpiar." } },
  },
};
export default meta;
type Story = StoryObj;

const FilterDemo = () => {
  const [filters, setFilters] = useState({ estado: "", ciudad: "" });
  const activeCount = Object.values(filters).filter(Boolean).length;

  return (
    <FilterPanel
      activeFiltersCount={activeCount}
      onClear={() => setFilters({ estado: "", ciudad: "" })}
    >
      <div className="flex flex-col gap-3">
        <div>
          <label className="text-xs font-medium text-gray-600 mb-1 block">Estado</label>
          <select value={filters.estado} onChange={(e) => setFilters({ ...filters, estado: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm">
            <option value="">Todos</option>
            <option value="activo">Activo</option>
            <option value="inactivo">Inactivo</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-medium text-gray-600 mb-1 block">Ciudad</label>
          <select value={filters.ciudad} onChange={(e) => setFilters({ ...filters, ciudad: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm">
            <option value="">Todas</option>
            <option value="lima">Lima</option>
            <option value="cusco">Cusco</option>
          </select>
        </div>
      </div>
    </FilterPanel>
  );
};

export const Default: Story = {
  name: "Default",
  render: () => <FilterDemo />,
};
