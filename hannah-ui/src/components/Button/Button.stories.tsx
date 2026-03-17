import type { Meta, StoryObj } from "@storybook/react";
import { Button, type ButtonProps } from "./Button";

/* ─────────────────────────────────────────
   Inline SVG icons (no extra deps)
───────────────────────────────────────── */
const PlusIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 5v14M5 12h14" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const TrashIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14H6L5 6" />
    <path d="M10 11v6M14 11v6" />
    <path d="M9 6V4h6v2" />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const DownloadIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const StarIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

/* ─────────────────────────────────────────
   Meta
───────────────────────────────────────── */
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Botón bold con efecto de profundidad 3D, shine animado en hover y press effect al click. Soporta variantes de color, tamaños, outline, iconos izquierdo/derecho, modo loading y layout icon-only. Construido con CVA.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "success", "warning", "danger", "ghost"],
      description: "Esquema de color",
      table: {
        category: "Variantes",
        defaultValue: { summary: "primary" },
        type: {
          summary:
            '"default" | "primary" | "success" | "warning" | "danger" | "ghost"',
        },
      },
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      description: "Tamaño del botón",
      table: {
        category: "Variantes",
        defaultValue: { summary: "md" },
        type: { summary: '"sm" | "md" | "lg" | "xl"' },
      },
    },
    rounded: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
      description: "Radio de borde (sobreescribe el del size)",
      table: {
        category: "Variantes",
        type: { summary: '"none" | "sm" | "md" | "lg" | "full"' },
      },
    },
    outline: {
      control: "boolean",
      description: "Modo outline: borde coloreado, fondo transparente",
      table: { category: "Variantes", defaultValue: { summary: "false" } },
    },
    loading: {
      control: "boolean",
      description: "Muestra spinner y deshabilita interacción",
      table: { category: "Estado", defaultValue: { summary: "false" } },
    },
    loadingText: {
      control: "text",
      description: "Texto alternativo mientras loading=true",
      table: { category: "Estado" },
    },
    disabled: {
      control: "boolean",
      description: "Deshabilita el botón",
      table: { category: "Estado", defaultValue: { summary: "false" } },
    },
    iconOnly: {
      control: "boolean",
      description: "Layout cuadrado para botones solo-icono",
      table: { category: "Layout", defaultValue: { summary: "false" } },
    },
    children: {
      control: "text",
      description: "Label del botón",
      table: { category: "Contenido" },
    },
    leftIcon: { table: { disable: true } },
    rightIcon: { table: { disable: true } },
    onClick: { action: "clicked", table: { category: "Eventos" } },
  },
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
    outline: false,
    loading: false,
    disabled: false,
    iconOnly: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/* ─────────────────────────────────────────
   Playground
───────────────────────────────────────── */

/** Modifica todos los controles del panel para explorar combinaciones */
export const Playground: Story = {};

/* ─────────────────────────────────────────
   Variantes de color
───────────────────────────────────────── */

export const VariantDefault: Story = {
  name: "Variant · Default",
  args: { variant: "default", children: "Default" },
};

export const VariantPrimary: Story = {
  name: "Variant · Primary",
  args: { variant: "primary", children: "Primary" },
};

export const VariantSuccess: Story = {
  name: "Variant · Success",
  args: { variant: "success", children: "Success" },
};

export const VariantWarning: Story = {
  name: "Variant · Warning",
  args: { variant: "warning", children: "Warning" },
};

export const VariantDanger: Story = {
  name: "Variant · Danger",
  args: { variant: "danger", children: "Danger" },
};

export const VariantGhost: Story = {
  name: "Variant · Ghost",
  args: { variant: "ghost", children: "Ghost" },
};

/* ─────────────────────────────────────────
   Outline
───────────────────────────────────────── */

export const OutlineDefault: Story = {
  name: "Outline · Default",
  args: { variant: "default", outline: true, children: "Default" },
};

export const OutlinePrimary: Story = {
  name: "Outline · Primary",
  args: { variant: "primary", outline: true, children: "Primary" },
};

export const OutlineSuccess: Story = {
  name: "Outline · Success",
  args: { variant: "success", outline: true, children: "Success" },
};

export const OutlineWarning: Story = {
  name: "Outline · Warning",
  args: { variant: "warning", outline: true, children: "Warning" },
};

export const OutlineDanger: Story = {
  name: "Outline · Danger",
  args: { variant: "danger", outline: true, children: "Danger" },
};

/* ─────────────────────────────────────────
   Tamaños
───────────────────────────────────────── */

export const SizeSm: Story = {
  name: "Size · sm",
  args: { size: "sm", children: "Small" },
};

export const SizeMd: Story = {
  name: "Size · md",
  args: { size: "md", children: "Medium" },
};

export const SizeLg: Story = {
  name: "Size · lg",
  args: { size: "lg", children: "Large" },
};

export const SizeXl: Story = {
  name: "Size · xl",
  args: { size: "xl", children: "Extra Large" },
};

/* ─────────────────────────────────────────
   Iconos
───────────────────────────────────────── */

export const IconLeft: Story = {
  name: "Icon · Left",
  args: { children: "Nuevo elemento", leftIcon: <PlusIcon /> },
};

export const IconRight: Story = {
  name: "Icon · Right",
  args: { children: "Continuar", rightIcon: <ArrowRightIcon /> },
};

export const IconBoth: Story = {
  name: "Icon · Both sides",
  args: {
    children: "Descargar",
    leftIcon: <DownloadIcon />,
    rightIcon: <ArrowRightIcon />,
  },
};

export const IconDanger: Story = {
  name: "Icon · Danger delete",
  args: { variant: "danger", children: "Eliminar", leftIcon: <TrashIcon /> },
};

export const IconSuccess: Story = {
  name: "Icon · Success confirm",
  args: { variant: "success", children: "Confirmar", leftIcon: <CheckIcon /> },
};

/* ─────────────────────────────────────────
   Icon Only
───────────────────────────────────────── */

export const IconOnlySm: Story = {
  name: "Icon Only · sm",
  args: {
    iconOnly: true,
    size: "sm",
    "aria-label": "Agregar",
    children: <PlusIcon />,
  },
};

export const IconOnlyMd: Story = {
  name: "Icon Only · md",
  args: {
    iconOnly: true,
    size: "md",
    "aria-label": "Agregar",
    children: <PlusIcon />,
  },
};

export const IconOnlyLg: Story = {
  name: "Icon Only · lg",
  args: {
    iconOnly: true,
    size: "lg",
    "aria-label": "Agregar",
    children: <PlusIcon />,
  },
};

export const IconOnlyDanger: Story = {
  name: "Icon Only · Danger",
  args: {
    iconOnly: true,
    variant: "danger",
    size: "md",
    "aria-label": "Eliminar",
    children: <TrashIcon />,
  },
};

export const IconOnlyOutline: Story = {
  name: "Icon Only · Outline",
  args: {
    iconOnly: true,
    variant: "primary",
    outline: true,
    size: "md",
    "aria-label": "Favorito",
    children: <StarIcon />,
  },
};

export const IconOnlyPill: Story = {
  name: "Icon Only · Pill",
  args: {
    iconOnly: true,
    variant: "primary",
    rounded: "full",
    size: "md",
    "aria-label": "Agregar",
    children: <PlusIcon />,
  },
};

/* ─────────────────────────────────────────
   Loading
───────────────────────────────────────── */

export const LoadingSpinner: Story = {
  name: "Loading · Spinner only",
  args: { loading: true, children: "Guardar" },
};

export const LoadingWithText: Story = {
  name: "Loading · With text",
  args: { loading: true, children: "Guardar", loadingText: "Guardando..." },
};

export const LoadingDanger: Story = {
  name: "Loading · Danger",
  args: {
    variant: "danger",
    loading: true,
    children: "Eliminar",
    loadingText: "Eliminando...",
  },
};

export const LoadingOutline: Story = {
  name: "Loading · Outline",
  args: {
    variant: "primary",
    outline: true,
    loading: true,
    loadingText: "Cargando...",
  },
};

/* ─────────────────────────────────────────
   Estados
───────────────────────────────────────── */

export const StateDisabled: Story = {
  name: "State · Disabled",
  args: { disabled: true, children: "Disabled" },
};

export const StateDisabledOutline: Story = {
  name: "State · Disabled outline",
  args: { outline: true, disabled: true, children: "Disabled outline" },
};

/* ─────────────────────────────────────────
   Bordes redondeados
───────────────────────────────────────── */

export const RoundedNone: Story = {
  name: "Rounded · none",
  args: { rounded: "none", children: "Sharp" },
};

export const RoundedFull: Story = {
  name: "Rounded · full (pill)",
  args: { rounded: "full", children: "Pill button" },
};

export const RoundedPillIcon: Story = {
  name: "Rounded · pill + icon",
  args: { rounded: "full", children: "Agregar", leftIcon: <PlusIcon /> },
};

/* ─────────────────────────────────────────
   Showcases
───────────────────────────────────────── */

const ALL_VARIANTS: ButtonProps["variant"][] = [
  "default",
  "primary",
  "success",
  "warning",
  "danger",
  "ghost",
];

const ALL_SIZES: ButtonProps["size"][] = ["sm", "md", "lg", "xl"];

export const ShowcaseAllVariants: Story = {
  name: "Showcase · All variants",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          alignItems: "center",
        }}
      >
        {ALL_VARIANTS.map((v) => (
          <Button key={v} variant={v} size="md">
            {v}
          </Button>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          alignItems: "center",
        }}
      >
        {(
          [
            "default",
            "primary",
            "success",
            "warning",
            "danger",
          ] as ButtonProps["variant"][]
        ).map((v) => (
          <Button key={v} variant={v} size="md" outline>
            {v} outline
          </Button>
        ))}
      </div>
    </div>
  ),
};

export const ShowcaseAllSizes: Story = {
  name: "Showcase · All sizes",
  parameters: { controls: { disable: true } },
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 12,
      }}
    >
      {ALL_SIZES.map((s) => (
        <Button key={s} variant="primary" size={s}>
          {s}
        </Button>
      ))}
    </div>
  ),
};

export const ShowcaseWithIcons: Story = {
  name: "Showcase · With icons",
  parameters: { controls: { disable: true } },
  render: () => (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 10,
        alignItems: "center",
      }}
    >
      <Button variant="primary" leftIcon={<PlusIcon />}>
        Nuevo
      </Button>
      <Button variant="primary" rightIcon={<ArrowRightIcon />}>
        Continuar
      </Button>
      <Button variant="success" leftIcon={<CheckIcon />}>
        Confirmar
      </Button>
      <Button variant="danger" leftIcon={<TrashIcon />}>
        Eliminar
      </Button>
      <Button
        variant="default"
        leftIcon={<DownloadIcon />}
        rightIcon={<ArrowRightIcon />}
      >
        Descargar
      </Button>
      <Button variant="warning" loading loadingText="Procesando...">
        Procesar
      </Button>
    </div>
  ),
};

export const ShowcaseIconOnly: Story = {
  name: "Showcase · Icon only",
  parameters: { controls: { disable: true } },
  render: () => (
    <div
      style={{
        display: "flex",
        gap: 10,
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {(
        ["primary", "success", "warning", "danger"] as ButtonProps["variant"][]
      ).map((v) => (
        <Button key={v} variant={v} size="md" iconOnly aria-label={v}>
          <PlusIcon />
        </Button>
      ))}
      <Button variant="primary" size="sm" iconOnly aria-label="sm">
        <PlusIcon />
      </Button>
      <Button variant="primary" size="lg" iconOnly aria-label="lg">
        <PlusIcon />
      </Button>
      <Button variant="danger" size="md" iconOnly outline aria-label="delete">
        <TrashIcon />
      </Button>
      <Button
        variant="primary"
        size="md"
        rounded="full"
        iconOnly
        aria-label="star"
      >
        <StarIcon />
      </Button>
    </div>
  ),
};
