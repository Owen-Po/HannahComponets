import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SearchableSelect } from "./SearchableSelect";

const meta: Meta = {
  title: "Components/SearchableSelect",
  parameters: { layout: "centered", docs: { description: { component: "Combobox con búsqueda, opción de 'Todos', y soporte para valores personalizados. Sin dependencias externas." } } },
};
export default meta;
type Story = StoryObj;

const OPTIONS = [
  { value: "1", label: "Lima" },
  { value: "2", label: "Arequipa" },
  { value: "3", label: "Cusco", code: "CUS" },
  { value: "4", label: "Trujillo", code: "TRU" },
  { value: "5", label: "Piura", code: "PIU" },
];

export const Default: Story = {
  name: "Default",
  render: () => {
    const [val, setVal] = useState<string | number>("");
    return <div className="w-80"><SearchableSelect value={val} onChange={(v) => setVal(v ?? "")} options={OPTIONS} /></div>;
  },
};

export const WithCustom: Story = {
  name: "Permite valores personalizados",
  render: () => {
    const [val, setVal] = useState<string | number>("");
    return <div className="w-80"><SearchableSelect value={val} onChange={(v) => setVal(v ?? "")} options={OPTIONS} allowCustom /></div>;
  },
};
