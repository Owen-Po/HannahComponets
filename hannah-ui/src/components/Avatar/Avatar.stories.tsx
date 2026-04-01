import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarGroup } from "./Avatar";

/* ─────────────────────────────────────────
   Meta
───────────────────────────────────────── */
const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Avatar con imagen, iniciales generadas automáticamente o ícono fallback. AvatarGroup para stacks con overlap. 6 tamaños, 7 colores, formas rounded/full.",
      },
    },
  },
  argTypes: {
    name: { control: "text", description: "Nombre del usuario — genera iniciales automáticamente", table: { category: "Contenido" } },
    src: { control: "text", description: "URL de imagen", table: { category: "Contenido" } },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
      description: "Tamaño",
      table: { category: "Variantes", defaultValue: { summary: "md" } },
    },
    rounded: {
      control: "select",
      options: ["full", "lg", "md", "sm", "none"],
      description: "Forma del borde",
      table: { category: "Variantes", defaultValue: { summary: "full" } },
    },
    color: {
      control: "select",
      options: ["gray", "blue", "emerald", "amber", "red", "purple", "pink"],
      description: "Color de fondo (para iniciales/fallback)",
      table: { category: "Variantes", defaultValue: { summary: "gray" } },
    },
  },
  args: {
    name: "Ana García",
    size: "md",
    rounded: "full",
    color: "blue",
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

/* ─────────────────────────────────────────
   Playground
───────────────────────────────────────── */
export const Playground: Story = {};

/* ─────────────────────────────────────────
   Contenido
───────────────────────────────────────── */
export const WithInitials: Story = { name: "Content · Initials", args: { name: "Carlos Ruiz", color: "emerald" } };
export const WithFallback: Story = { name: "Content · Fallback icon", args: { name: undefined } };

/* ─────────────────────────────────────────
   Tamaños
───────────────────────────────────────── */
export const AllSizes: Story = {
  name: "Size · All sizes",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      {(["xs", "sm", "md", "lg", "xl", "2xl"] as const).map((s) => (
        <Avatar key={s} size={s} name="Ana García" color="blue" />
      ))}
    </div>
  ),
};

/* ─────────────────────────────────────────
   Colores
───────────────────────────────────────── */
export const AllColors: Story = {
  name: "Color · All colors",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      {(["gray","blue","emerald","amber","red","purple","pink"] as const).map((c) => (
        <Avatar key={c} color={c} name="AB" size="md" />
      ))}
    </div>
  ),
};

/* ─────────────────────────────────────────
   Formas
───────────────────────────────────────── */
export const RoundedFull: Story = { name: "Shape · Full (circle)", args: { rounded: "full", name: "María López", color: "purple" } };
export const RoundedLg: Story = { name: "Shape · Rounded lg", args: { rounded: "lg", name: "María López", color: "purple" } };
export const RoundedNone: Story = { name: "Shape · Square", args: { rounded: "none", name: "María López", color: "purple" } };

/* ─────────────────────────────────────────
   AvatarGroup
───────────────────────────────────────── */
export const Group: Story = {
  name: "AvatarGroup · Default",
  parameters: { controls: { disable: true } },
  render: () => (
    <AvatarGroup
      size="md"
      avatars={[
        { name: "Ana García", color: "blue" },
        { name: "Carlos Ruiz", color: "emerald" },
        { name: "María López", color: "purple" },
        { name: "Pedro Sánchez", color: "amber" },
        { name: "Laura Torres", color: "red" },
        { name: "Jorge Díaz", color: "pink" },
      ]}
      max={4}
    />
  ),
};

export const GroupSizes: Story = {
  name: "AvatarGroup · Sizes",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {(["sm", "md", "lg"] as const).map((s) => (
        <AvatarGroup
          key={s}
          size={s}
          avatars={[
            { name: "Ana García", color: "blue" },
            { name: "Carlos Ruiz", color: "emerald" },
            { name: "María López", color: "purple" },
            { name: "Pedro Sánchez", color: "amber" },
          ]}
          max={3}
        />
      ))}
    </div>
  ),
};

/* ─────────────────────────────────────────
   Showcase
───────────────────────────────────────── */
export const ShowcaseAll: Story = {
  name: "Showcase · All features",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-start" }}>
      {/* Iniciales */}
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        {(["gray","blue","emerald","amber","red","purple","pink"] as const).map((c) => (
          <Avatar key={c} color={c} name="AB" size="md" />
        ))}
      </div>
      {/* Tamaños */}
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        {(["xs","sm","md","lg","xl","2xl"] as const).map((s) => (
          <Avatar key={s} size={s} name="Ana García" color="blue" />
        ))}
      </div>
      {/* Grupo */}
      <AvatarGroup
        size="md"
        avatars={[
          { name: "Ana G", color: "blue" },
          { name: "Carlos R", color: "emerald" },
          { name: "María L", color: "purple" },
          { name: "Pedro S", color: "amber" },
          { name: "Laura T", color: "red" },
        ]}
        max={4}
      />
    </div>
  ),
};
