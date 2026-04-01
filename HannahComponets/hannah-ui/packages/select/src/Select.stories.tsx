import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const COUNTRIES = [
  { value: "pe", label: "Perú"},
  { value: "mx", label: "México" },
  { value: "ar", label: "Argentina" },
  { value: "co", label: "Colombia" },
  { value: "es", label: "España" },
  { value: "us", label: "Estados Unidos" },
];

const ROLES = [
  { value: "admin", label: "Administrador" },
  { value: "editor", label: "Editor" },
  { value: "viewer", label: "Solo lectura", disabled: true },
];

/* ─────────────────────────────────────────
   Meta
───────────────────────────────────────── */
const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Dropdown select nativo con flecha personalizada, prop options[] para carga declarativa, y los mismos estados que Input. Construido con CVA.",
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Tamaño del select",
      table: { category: "Variantes", defaultValue: { summary: "md" } },
    },
    status: {
      control: "select",
      options: ["default", "error", "success"],
      description: "Estado visual",
      table: { category: "Variantes", defaultValue: { summary: "default" } },
    },
    placeholder: { control: "text", table: { category: "Contenido" } },
    disabled: { control: "boolean", table: { category: "Estado", defaultValue: { summary: "false" } } },
  },
  args: {
    options: COUNTRIES,
    placeholder: "Selecciona un país",
    size: "md",
    status: "default",
    disabled: false,
  },
  decorators: [(Story) => <div style={{ width: 280 }}><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof Select>;

/* ─────────────────────────────────────────
   Playground
───────────────────────────────────────── */
export const Playground: Story = {};

/* ─────────────────────────────────────────
   Estados
───────────────────────────────────────── */
export const StatusDefault: Story = { name: "Status · Default", args: { status: "default" } };
export const StatusError: Story = { name: "Status · Error", args: { status: "error" } };
export const StatusSuccess: Story = { name: "Status · Success", args: { status: "success" } };

/* ─────────────────────────────────────────
   Tamaños
───────────────────────────────────────── */
export const SizeSm: Story = { name: "Size · sm", args: { size: "sm" } };
export const SizeMd: Story = { name: "Size · md", args: { size: "md" } };
export const SizeLg: Story = { name: "Size · lg", args: { size: "lg" } };

/* ─────────────────────────────────────────
   Opciones con disabled
───────────────────────────────────────── */
export const WithDisabledOptions: Story = {
  name: "Options · With disabled",
  args: { options: ROLES, placeholder: "Selecciona un rol" },
};

/* ─────────────────────────────────────────
   Estado deshabilitado
───────────────────────────────────────── */
export const StateDisabled: Story = { name: "State · Disabled", args: { disabled: true } };

/* ─────────────────────────────────────────
   Showcase
───────────────────────────────────────── */
export const ShowcaseAllStatuses: Story = {
  name: "Showcase · All statuses",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 280 }}>
      <Select options={COUNTRIES} placeholder="Default" status="default" />
      <Select options={COUNTRIES} placeholder="Error — selección inválida" status="error" />
      <Select options={COUNTRIES} placeholder="Success" status="success" />
    </div>
  ),
};

export const ShowcaseAllSizes: Story = {
  name: "Showcase · All sizes",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 280 }}>
      <Select options={COUNTRIES} placeholder="Small" size="sm" />
      <Select options={COUNTRIES} placeholder="Medium" size="md" />
      <Select options={COUNTRIES} placeholder="Large" size="lg" />
    </div>
  ),
};
