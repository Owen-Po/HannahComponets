import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const SearchIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
  </svg>
);

const MailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" />
  </svg>
);

const EyeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
  </svg>
);

const LockIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

/* ─────────────────────────────────────────
   Meta
───────────────────────────────────────── */
const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Campo de texto con variantes de estado (default, error, success, warning), tamaños y soporte de íconos izquierdo/derecho. Construido con CVA.",
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Tamaño del input",
      table: { category: "Variantes", defaultValue: { summary: "md" } },
    },
    status: {
      control: "select",
      options: ["default", "error", "success", "warning"],
      description: "Estado visual del input",
      table: { category: "Variantes", defaultValue: { summary: "default" } },
    },
    placeholder: { control: "text", table: { category: "Contenido" } },
    disabled: { control: "boolean", table: { category: "Estado", defaultValue: { summary: "false" } } },
    leftElement: { table: { disable: true } },
    rightElement: { table: { disable: true } },
  },
  args: {
    placeholder: "Escribe aquí...",
    size: "md",
    status: "default",
    disabled: false,
  },
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof Input>;

/* ─────────────────────────────────────────
   Playground
───────────────────────────────────────── */
export const Playground: Story = {};

/* ─────────────────────────────────────────
   Estados
───────────────────────────────────────── */
export const StatusDefault: Story = { name: "Status · Default", args: { status: "default" } };
export const StatusError: Story = { name: "Status · Error", args: { status: "error", placeholder: "Correo inválido" } };
export const StatusSuccess: Story = { name: "Status · Success", args: { status: "success", placeholder: "Correo verificado" } };
export const StatusWarning: Story = { name: "Status · Warning", args: { status: "warning", placeholder: "Revisa este campo" } };

/* ─────────────────────────────────────────
   Tamaños
───────────────────────────────────────── */
export const SizeSm: Story = { name: "Size · sm", args: { size: "sm", placeholder: "Small" } };
export const SizeMd: Story = { name: "Size · md", args: { size: "md", placeholder: "Medium" } };
export const SizeLg: Story = { name: "Size · lg", args: { size: "lg", placeholder: "Large" } };

/* ─────────────────────────────────────────
   Con íconos
───────────────────────────────────────── */
export const WithLeftIcon: Story = {
  name: "Icon · Left",
  args: { leftElement: <SearchIcon />, placeholder: "Buscar..." },
};

export const WithRightIcon: Story = {
  name: "Icon · Right",
  args: { rightElement: <EyeIcon />, placeholder: "Contraseña", type: "password" },
};

export const WithBothIcons: Story = {
  name: "Icon · Both",
  args: { leftElement: <MailIcon />, rightElement: <EyeIcon />, placeholder: "correo@ejemplo.com" },
};

export const PasswordField: Story = {
  name: "Icon · Password",
  args: { leftElement: <LockIcon />, rightElement: <EyeIcon />, type: "password", placeholder: "Contraseña" },
};

/* ─────────────────────────────────────────
   Estado deshabilitado
───────────────────────────────────────── */
export const StateDisabled: Story = { name: "State · Disabled", args: { disabled: true, placeholder: "No editable" } };

/* ─────────────────────────────────────────
   Showcase
───────────────────────────────────────── */
export const ShowcaseAllStatuses: Story = {
  name: "Showcase · All statuses",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 320 }}>
      <Input status="default" placeholder="Default" />
      <Input status="error" placeholder="Error — campo inválido" />
      <Input status="success" placeholder="Success — verificado" />
      <Input status="warning" placeholder="Warning — revisa el valor" />
    </div>
  ),
};

export const ShowcaseWithIcons: Story = {
  name: "Showcase · With icons",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 320 }}>
      <Input leftElement={<SearchIcon />} placeholder="Buscar..." />
      <Input leftElement={<MailIcon />} placeholder="correo@ejemplo.com" type="email" />
      <Input leftElement={<LockIcon />} rightElement={<EyeIcon />} placeholder="Contraseña" type="password" />
    </div>
  ),
};

export const ShowcaseAllSizes: Story = {
  name: "Showcase · All sizes",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 320 }}>
      <Input size="sm" leftElement={<SearchIcon />} placeholder="Small" />
      <Input size="md" leftElement={<SearchIcon />} placeholder="Medium" />
      <Input size="lg" leftElement={<SearchIcon />} placeholder="Large" />
    </div>
  ),
};
