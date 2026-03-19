import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "./Radio";

const PLAN_OPTIONS = [
  { value: "free", label: "Gratuito", description: "Hasta 3 proyectos. Sin soporte." },
  { value: "pro", label: "Pro", description: "Proyectos ilimitados. Soporte prioritario." },
  { value: "enterprise", label: "Enterprise", description: "SSO, auditoría y SLA garantizado." },
];

const SIMPLE_OPTIONS = [
  { value: "si", label: "Sí" },
  { value: "no", label: "No" },
  { value: "tal_vez", label: "Tal vez", disabled: true },
];

/* ─────────────────────────────────────────
   Meta
───────────────────────────────────────── */
const meta: Meta<typeof RadioGroup> = {
  title: "Components/Radio",
  component: RadioGroup,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Grupo de radios accesible con layout vertical u horizontal, descripción por opción y soporte de opciones deshabilitadas.",
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Tamaño de los radios",
      table: { category: "Variantes", defaultValue: { summary: "md" } },
    },
    direction: {
      control: "select",
      options: ["vertical", "horizontal"],
      description: "Dirección del grupo",
      table: { category: "Layout", defaultValue: { summary: "vertical" } },
    },
  },
  args: {
    name: "plan",
    options: PLAN_OPTIONS,
    size: "md",
    direction: "vertical",
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

/* ─────────────────────────────────────────
   Playground
───────────────────────────────────────── */
export const Playground: Story = {};

/* ─────────────────────────────────────────
   Dirección
───────────────────────────────────────── */
export const DirectionVertical: Story = {
  name: "Direction · Vertical",
  args: { name: "dir-v", options: PLAN_OPTIONS, direction: "vertical" },
};

export const DirectionHorizontal: Story = {
  name: "Direction · Horizontal",
  args: { name: "dir-h", options: SIMPLE_OPTIONS, direction: "horizontal" },
};

/* ─────────────────────────────────────────
   Tamaños
───────────────────────────────────────── */
export const SizeSm: Story = { name: "Size · sm", args: { name: "sz-sm", options: SIMPLE_OPTIONS, size: "sm" } };
export const SizeMd: Story = { name: "Size · md", args: { name: "sz-md", options: SIMPLE_OPTIONS, size: "md" } };
export const SizeLg: Story = { name: "Size · lg", args: { name: "sz-lg", options: SIMPLE_OPTIONS, size: "lg" } };

/* ─────────────────────────────────────────
   Con opción deshabilitada
───────────────────────────────────────── */
export const WithDisabledOption: Story = {
  name: "Options · With disabled",
  args: { name: "disabled-opt", options: SIMPLE_OPTIONS },
};

/* ─────────────────────────────────────────
   Showcase
───────────────────────────────────────── */
export const ShowcasePlans: Story = {
  name: "Showcase · Plans selector",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ width: 300 }}>
      <p style={{ fontSize: 13, fontWeight: 600, marginBottom: 12, color: "#374151" }}>Selecciona tu plan</p>
      <RadioGroup name="showcase-plan" options={PLAN_OPTIONS} size="md" direction="vertical" />
    </div>
  ),
};
