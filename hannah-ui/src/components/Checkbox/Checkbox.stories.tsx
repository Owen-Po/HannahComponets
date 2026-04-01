import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

/* ─────────────────────────────────────────
   Meta
───────────────────────────────────────── */
const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Checkbox accesible con label, descripción opcional y 3 tamaños. Usa estado nativo del input.",
      },
    },
  },
  argTypes: {
    label: { control: "text", table: { category: "Contenido" } },
    description: { control: "text", table: { category: "Contenido" } },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Tamaño",
      table: { category: "Variantes", defaultValue: { summary: "md" } },
    },
    disabled: { control: "boolean", table: { category: "Estado", defaultValue: { summary: "false" } } },
    defaultChecked: { control: "boolean", table: { category: "Estado" } },
  },
  args: {
    label: "Acepto los términos y condiciones",
    size: "md",
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

/* ─────────────────────────────────────────
   Playground
───────────────────────────────────────── */
export const Playground: Story = {};

/* ─────────────────────────────────────────
   Con descripción
───────────────────────────────────────── */
export const WithDescription: Story = {
  name: "Content · With description",
  args: {
    label: "Recibir notificaciones",
    description: "Te enviaremos actualizaciones importantes por correo.",
  },
};

/* ─────────────────────────────────────────
   Tamaños
───────────────────────────────────────── */
export const SizeSm: Story = { name: "Size · sm", args: { size: "sm", label: "Pequeño" } };
export const SizeMd: Story = { name: "Size · md", args: { size: "md", label: "Mediano" } };
export const SizeLg: Story = { name: "Size · lg", args: { size: "lg", label: "Grande" } };

/* ─────────────────────────────────────────
   Estados
───────────────────────────────────────── */
export const StateChecked: Story = { name: "State · Checked", args: { defaultChecked: true, label: "Ya seleccionado" } };
export const StateDisabled: Story = { name: "State · Disabled", args: { disabled: true, label: "No disponible" } };
export const StateDisabledChecked: Story = { name: "State · Disabled checked", args: { disabled: true, defaultChecked: true, label: "Fijo seleccionado" } };

/* ─────────────────────────────────────────
   Showcase
───────────────────────────────────────── */
export const ShowcaseGroup: Story = {
  name: "Showcase · Group",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Checkbox label="Opción A" description="Descripción breve de la opción A." defaultChecked />
      <Checkbox label="Opción B" description="Descripción breve de la opción B." />
      <Checkbox label="Opción C — no disponible" disabled />
    </div>
  ),
};

export const ShowcaseAllSizes: Story = {
  name: "Showcase · All sizes",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <Checkbox size="sm" label="Small checkbox" defaultChecked />
      <Checkbox size="md" label="Medium checkbox" defaultChecked />
      <Checkbox size="lg" label="Large checkbox" defaultChecked />
    </div>
  ),
};
