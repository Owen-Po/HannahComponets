import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

/* ─────────────────────────────────────────
   Meta
───────────────────────────────────────── */
const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Área de texto multi-línea con los mismos estados visuales que Input (default, error, success). Redimensionable verticalmente.",
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Tamaño del textarea",
      table: { category: "Variantes", defaultValue: { summary: "md" } },
    },
    status: {
      control: "select",
      options: ["default", "error", "success"],
      description: "Estado visual",
      table: { category: "Variantes", defaultValue: { summary: "default" } },
    },
    placeholder: { control: "text", table: { category: "Contenido" } },
    rows: { control: "number", table: { category: "Layout" } },
    disabled: { control: "boolean", table: { category: "Estado", defaultValue: { summary: "false" } } },
  },
  args: {
    placeholder: "Escribe un mensaje...",
    size: "md",
    status: "default",
    rows: 4,
    disabled: false,
  },
  decorators: [(Story) => <div style={{ width: 360 }}><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

/* ─────────────────────────────────────────
   Playground
───────────────────────────────────────── */
export const Playground: Story = {};

/* ─────────────────────────────────────────
   Estados
───────────────────────────────────────── */
export const StatusDefault: Story = { name: "Status · Default", args: { status: "default" } };
export const StatusError: Story = { name: "Status · Error", args: { status: "error", placeholder: "El mensaje es demasiado corto" } };
export const StatusSuccess: Story = { name: "Status · Success", args: { status: "success", placeholder: "Mensaje guardado correctamente" } };

/* ─────────────────────────────────────────
   Tamaños
───────────────────────────────────────── */
export const SizeSm: Story = { name: "Size · sm", args: { size: "sm", rows: 3 } };
export const SizeMd: Story = { name: "Size · md", args: { size: "md", rows: 4 } };
export const SizeLg: Story = { name: "Size · lg", args: { size: "lg", rows: 5 } };

/* ─────────────────────────────────────────
   Estado
───────────────────────────────────────── */
export const StateDisabled: Story = { name: "State · Disabled", args: { disabled: true, placeholder: "No editable" } };

/* ─────────────────────────────────────────
   Showcase
───────────────────────────────────────── */
export const ShowcaseAllStatuses: Story = {
  name: "Showcase · All statuses",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 14, width: 360 }}>
      <Textarea status="default" placeholder="Default — escribe tu mensaje" rows={3} />
      <Textarea status="error" placeholder="Error — mensaje muy corto" rows={3} />
      <Textarea status="success" placeholder="Success — guardado correctamente" rows={3} />
    </div>
  ),
};
