import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ExportModal } from "./ExportModal";

const meta: Meta = {
  title: "Components/ExportModal",
  parameters: {
    layout: "centered",
    docs: { description: { component: "Modal para seleccionar formato de exportación (CSV, Excel, PDF, JSON) con selección visual." } },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  name: "Default",
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button onClick={() => setOpen(true)} className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm">Exportar datos</button>
        <ExportModal isOpen={open} onClose={() => setOpen(false)} onExport={(fmt) => { alert(`Exportando como ${fmt}`); setOpen(false); }} />
      </>
    );
  },
};
