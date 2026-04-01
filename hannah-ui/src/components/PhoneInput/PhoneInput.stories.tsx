import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PhoneInput } from "./PhoneInput";

const meta: Meta = {
  title: "Components/PhoneInput",
  parameters: {
    layout: "centered",
    docs: { description: { component: "Campo de teléfono internacional con selector de país, validación de formato y límite de longitud." } },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  name: "Default (Perú)",
  render: () => {
    const [val, setVal] = useState<string | undefined>();
    return <div className="w-80"><PhoneInput value={val} onChange={(v) => setVal(v as string)} /></div>;
  },
};

export const WithError: Story = {
  name: "Con error",
  render: () => {
    const [val, setVal] = useState<string | undefined>();
    return <div className="w-80"><PhoneInput value={val} onChange={(v) => setVal(v as string)} error="Número inválido" /></div>;
  },
};
