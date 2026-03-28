import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";

const meta: Meta = {
  title: "Components/Switch",
  parameters: { layout: "centered", docs: { description: { component: "Toggle switch con label, descripción y estado de error. Soporta modo controlado y no controlado." } } },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  name: "Default",
  render: () => {
    const [val, setVal] = useState(false);
    return <div className="w-64"><Switch label="Notificaciones" description="Recibir alertas por email" checked={val} onChange={setVal} /></div>;
  },
};

export const WithError: Story = {
  name: "Con error",
  render: () => <div className="w-64"><Switch label="Aceptar términos" error="Debes aceptar los términos" /></div>,
};

export const Disabled: Story = {
  name: "Disabled",
  render: () => <div className="w-64"><Switch label="Función premium" description="Solo disponible en plan Pro" disabled defaultChecked /></div>,
};
