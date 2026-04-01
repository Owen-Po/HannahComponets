import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AdvancedTableFilter, type FilterState } from "./AdvancedTableFilter";

const meta: Meta = {
  title: "Components/AdvancedTableFilter",
  parameters: {
    layout: "centered",
    docs: { description: { component: "Filtro avanzado multi-campo con lógica AND/OR. Permite agregar hasta N filtros por campo con valor libre." } },
  },
};
export default meta;
type Story = StoryObj;

const Demo = () => {
  const [filters, setFilters] = useState<FilterState[]>([
    { id: "1", field: "", value: "", operator: "AND" },
  ]);

  return (
    <AdvancedTableFilter
      filters={filters}
      onFiltersChange={setFilters}
      fieldOptions={[
        { value: "nombre", label: "Nombre" },
        { value: "email", label: "Email" },
        { value: "rol", label: "Rol" },
        { value: "ciudad", label: "Ciudad" },
      ]}
      maxFilters={4}
    />
  );
};

export const Default: Story = {
  name: "Default",
  render: () => <Demo />,
};
