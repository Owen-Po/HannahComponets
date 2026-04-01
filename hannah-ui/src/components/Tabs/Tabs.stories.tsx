import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";
import { Badge } from "../Badge/Badge";

const UserIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const BellIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const BASIC_TABS = [
  { key: "perfil", label: "Perfil", content: <p style={{fontSize:14,color:"#374151",margin:0}}>Contenido de la pestaña Perfil.</p> },
  { key: "config", label: "Configuración", content: <p style={{fontSize:14,color:"#374151",margin:0}}>Contenido de la pestaña Configuración.</p> },
  { key: "seguridad", label: "Seguridad", content: <p style={{fontSize:14,color:"#374151",margin:0}}>Contenido de la pestaña Seguridad.</p> },
];

const ICON_TABS = [
  { key: "perfil", label: "Perfil", icon: <UserIcon />, content: <p style={{fontSize:14,color:"#374151",margin:0}}>Información del perfil de usuario.</p> },
  { key: "notif", label: "Notificaciones", icon: <BellIcon />, badge: <Badge variant="danger" size="sm">3</Badge>, content: <p style={{fontSize:14,color:"#374151",margin:0}}>Tus notificaciones pendientes.</p> },
  { key: "config", label: "Configuración", icon: <SettingsIcon />, content: <p style={{fontSize:14,color:"#374151",margin:0}}>Ajustes de la cuenta.</p> },
];

/* ─────────────────────────────────────────
   Meta
───────────────────────────────────────── */
const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Pestañas con 3 variantes visuales (underline, pill, boxed), soporte de íconos, badges, tamaños y control externo/interno del tab activo.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["underline", "pill", "boxed"],
      description: "Estilo visual",
      table: { category: "Variantes", defaultValue: { summary: "underline" } },
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Tamaño del texto y padding",
      table: { category: "Variantes", defaultValue: { summary: "md" } },
    },
    fullWidth: { control: "boolean", description: "Pestañas ocupan todo el ancho", table: { category: "Layout", defaultValue: { summary: "false" } } },
  },
  args: {
    tabs: BASIC_TABS,
    variant: "underline",
    size: "md",
    fullWidth: false,
  },
  decorators: [(Story) => <div style={{ width: 460 }}><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

/* ─────────────────────────────────────────
   Playground
───────────────────────────────────────── */
export const Playground: Story = {};

/* ─────────────────────────────────────────
   Variantes
───────────────────────────────────────── */
export const VariantUnderline: Story = { name: "Variant · Underline", args: { variant: "underline", tabs: BASIC_TABS } };
export const VariantPill: Story = { name: "Variant · Pill", args: { variant: "pill", tabs: BASIC_TABS } };
export const VariantBoxed: Story = { name: "Variant · Boxed", args: { variant: "boxed", tabs: BASIC_TABS } };

/* ─────────────────────────────────────────
   Tamaños
───────────────────────────────────────── */
export const SizeSm: Story = { name: "Size · sm", args: { size: "sm", tabs: BASIC_TABS } };
export const SizeMd: Story = { name: "Size · md", args: { size: "md", tabs: BASIC_TABS } };
export const SizeLg: Story = { name: "Size · lg", args: { size: "lg", tabs: BASIC_TABS } };

/* ─────────────────────────────────────────
   Con íconos y badges
───────────────────────────────────────── */
export const WithIcons: Story = { name: "Content · With icons", args: { tabs: ICON_TABS, variant: "underline" } };
export const WithIconsPill: Story = { name: "Content · Icons + pill", args: { tabs: ICON_TABS, variant: "pill" } };

/* ─────────────────────────────────────────
   Full width
───────────────────────────────────────── */
export const FullWidthBoxed: Story = { name: "Layout · Full width boxed", args: { fullWidth: true, variant: "boxed", tabs: BASIC_TABS } };
export const FullWidthUnderline: Story = { name: "Layout · Full width underline", args: { fullWidth: true, variant: "underline", tabs: BASIC_TABS } };

/* ─────────────────────────────────────────
   Showcase
───────────────────────────────────────── */
export const ShowcaseAllVariants: Story = {
  name: "Showcase · All variants",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, width: 460 }}>
      <Tabs tabs={BASIC_TABS} variant="underline" />
      <Tabs tabs={BASIC_TABS} variant="pill" />
      <Tabs tabs={BASIC_TABS} variant="boxed" />
    </div>
  ),
};
