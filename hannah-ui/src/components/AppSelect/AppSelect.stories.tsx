import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AppSelect, type SelectOption } from "./AppSelect";

const meta: Meta = {
  title: "Components/AppSelect",
  parameters: {
    layout: "centered",
    docs: { description: { component: "Select searchable basado en react-select con soporte para creación de opciones (creatable), multi-select y estilos del sistema de diseño." } },
  },
};
export default meta;
type Story = StoryObj;

const OPTIONS: SelectOption[] = [
  { value: "lima", label: "Lima" },
  { value: "arequipa", label: "Arequipa" },
  { value: "cusco", label: "Cusco" },
  { value: "trujillo", label: "Trujillo" },
  { value: "piura", label: "Piura" },
];

export const Default: Story = {
  name: "Default",
  render: () => {
    const [val, setVal] = useState<SelectOption | null>(null);
    return <div className="w-80"><AppSelect options={OPTIONS} value={val} onChange={(v) => setVal(v as SelectOption)} /></div>;
  },
};

export const Multi: Story = {
  name: "Multi-select",
  render: () => {
    const [val, setVal] = useState<readonly SelectOption[]>([]);
    return <div className="w-80"><AppSelect isMulti options={OPTIONS} value={val} onChange={(v) => setVal(v as SelectOption[])} /></div>;
  },
};

export const Creatable: Story = {
  name: "Creatable",
  render: () => {
    const [opts, setOpts] = useState(OPTIONS);
    const [val, setVal] = useState<SelectOption | null>(null);
    return (
      <div className="w-80">
        <AppSelect
          isCreatable
          options={opts}
          value={val}
          onChange={(v) => setVal(v as SelectOption)}
          onCreateOption={(input) => {
            const newOpt = { value: input.toLowerCase(), label: input };
            setOpts([...opts, newOpt]);
            setVal(newOpt);
          }}
        />
      </div>
    );
  },
};
