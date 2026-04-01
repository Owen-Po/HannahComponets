import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ConfirmModal } from "./ConfirmModal";

const meta: Meta = {
  title: "Components/ConfirmModal",
  parameters: {
    layout: "centered",
    docs: { description: { component: "Modal de confirmación con variantes danger, warning e info. Ideal para acciones destructivas o irreversibles." } },
  },
};
export default meta;
type Story = StoryObj;

const Demo = ({ variant }: { variant: "danger" | "warning" | "info" }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)} className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm">Abrir modal {variant}</button>
      <ConfirmModal isOpen={open} onClose={() => setOpen(false)} onConfirm={() => { alert("Confirmado!"); setOpen(false); }} variant={variant} title={`Confirmar acción (${variant})`} message="¿Estás seguro de realizar esta acción? No se puede deshacer." />
    </>
  );
};

export const Danger: Story = { name: "Danger", render: () => <Demo variant="danger" /> };
export const Warning: Story = { name: "Warning", render: () => <Demo variant="warning" /> };
export const Info: Story = { name: "Info", render: () => <Demo variant="info" /> };
