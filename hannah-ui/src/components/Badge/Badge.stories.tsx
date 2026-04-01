import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

/* ─────────────────────────────────────────
   Meta
───────────────────────────────────────── */
const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Etiqueta/tag para estados, categorías o contadores. 11 variantes entre soft y solid, 3 tamaños y dot indicator opcional.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default", "primary", "success", "warning", "danger", "info", "purple",
        "solid_default", "solid_primary", "solid_success", "solid_warning", "solid_danger",
      ],
      description: "Variante de color",
      table: { category: "Variantes", defaultValue: { summary: "default" } },
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Tamaño",
      table: { category: "Variantes", defaultValue: { summary: "md" } },
    },
    dot: {
      control: "boolean",
      description: "Muestra un dot indicator de estado",
      table: { category: "Layout", defaultValue: { summary: "false" } },
    },
    children: { control: "text", table: { category: "Contenido" } },
  },
  args: {
    children: "Badge",
    variant: "primary",
    size: "md",
    dot: false,
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

/* ─────────────────────────────────────────
   Playground
───────────────────────────────────────── */
export const Playground: Story = {};

/* ─────────────────────────────────────────
   Variantes soft
───────────────────────────────────────── */
export const VariantDefault: Story = { name: "Variant · Default", args: { variant: "default", children: "Default" } };
export const VariantPrimary: Story = { name: "Variant · Primary", args: { variant: "primary", children: "Primary" } };
export const VariantSuccess: Story = { name: "Variant · Success", args: { variant: "success", children: "Success" } };
export const VariantWarning: Story = { name: "Variant · Warning", args: { variant: "warning", children: "Warning" } };
export const VariantDanger: Story = { name: "Variant · Danger", args: { variant: "danger", children: "Danger" } };
export const VariantInfo: Story = { name: "Variant · Info", args: { variant: "info", children: "Info" } };
export const VariantPurple: Story = { name: "Variant · Purple", args: { variant: "purple", children: "Purple" } };

/* ─────────────────────────────────────────
   Variantes solid
───────────────────────────────────────── */
export const SolidPrimary: Story = { name: "Solid · Primary", args: { variant: "solid_primary", children: "Primary" } };
export const SolidSuccess: Story = { name: "Solid · Success", args: { variant: "solid_success", children: "Success" } };
export const SolidDanger: Story = { name: "Solid · Danger", args: { variant: "solid_danger", children: "Danger" } };

/* ─────────────────────────────────────────
   Tamaños
───────────────────────────────────────── */
export const SizeSm: Story = { name: "Size · sm", args: { size: "sm", children: "Small" } };
export const SizeMd: Story = { name: "Size · md", args: { size: "md", children: "Medium" } };
export const SizeLg: Story = { name: "Size · lg", args: { size: "lg", children: "Large" } };

/* ─────────────────────────────────────────
   Dot
───────────────────────────────────────── */
export const DotDefault: Story = { name: "Dot · Default", args: { dot: true, variant: "default", children: "Inactivo" } };
export const DotSuccess: Story = { name: "Dot · Success", args: { dot: true, variant: "success", children: "Activo" } };
export const DotDanger: Story = { name: "Dot · Danger", args: { dot: true, variant: "danger", children: "Error" } };

/* ─────────────────────────────────────────
   Showcase
───────────────────────────────────────── */
export const ShowcaseAllSoft: Story = {
  name: "Showcase · All soft variants",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {(["default","primary","success","warning","danger","info","purple"] as const).map((v) => (
        <Badge key={v} variant={v}>{v}</Badge>
      ))}
    </div>
  ),
};

export const ShowcaseAllSolid: Story = {
  name: "Showcase · All solid variants",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {(["solid_default","solid_primary","solid_success","solid_warning","solid_danger"] as const).map((v) => (
        <Badge key={v} variant={v}>{v.replace("solid_", "")}</Badge>
      ))}
    </div>
  ),
};

export const ShowcaseDots: Story = {
  name: "Showcase · Status dots",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      <Badge dot variant="success">Activo</Badge>
      <Badge dot variant="warning">En revisión</Badge>
      <Badge dot variant="danger">Error</Badge>
      <Badge dot variant="default">Inactivo</Badge>
      <Badge dot variant="info">Procesando</Badge>
    </div>
  ),
};
