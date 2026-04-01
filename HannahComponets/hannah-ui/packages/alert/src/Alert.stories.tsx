import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";

/* ─────────────────────────────────────────
   Meta
───────────────────────────────────────── */
const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Alerta informativa con 5 variantes (info, success, warning, danger, default), ícono automático, título opcional y botón de dismiss.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "success", "warning", "danger", "default"],
      description: "Variante de color e ícono",
      table: { category: "Variantes", defaultValue: { summary: "info" } },
    },
    title: { control: "text", table: { category: "Contenido" } },
    dismissible: { control: "boolean", description: "Muestra botón cerrar", table: { category: "Layout", defaultValue: { summary: "false" } } },
    children: { control: "text", table: { category: "Contenido" } },
  },
  args: {
    variant: "info",
    title: "Información",
    children: "Este es un mensaje informativo para el usuario.",
    dismissible: false,
  },
  decorators: [(Story) => <div style={{ width: 420 }}><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof Alert>;

/* ─────────────────────────────────────────
   Playground
───────────────────────────────────────── */
export const Playground: Story = {};

/* ─────────────────────────────────────────
   Variantes
───────────────────────────────────────── */
export const VariantInfo: Story = { name: "Variant · Info", args: { variant: "info", title: "Nueva actualización disponible", children: "Versión 2.4.1 lista para instalar." } };
export const VariantSuccess: Story = { name: "Variant · Success", args: { variant: "success", title: "Guardado correctamente", children: "Los cambios fueron aplicados con éxito." } };
export const VariantWarning: Story = { name: "Variant · Warning", args: { variant: "warning", title: "Atención requerida", children: "Tu suscripción vence en 3 días." } };
export const VariantDanger: Story = { name: "Variant · Danger", args: { variant: "danger", title: "Error crítico", children: "No se pudo completar la operación. Intenta de nuevo." } };
export const VariantDefault: Story = { name: "Variant · Default", args: { variant: "default", title: "Nota", children: "Este comportamiento puede cambiar en futuras versiones." } };

/* ─────────────────────────────────────────
   Sin título
───────────────────────────────────────── */
export const NoTitle: Story = { name: "Content · No title", args: { title: undefined, children: "Solo el mensaje, sin título." } };

/* ─────────────────────────────────────────
   Dismissible
───────────────────────────────────────── */
export const Dismissible: Story = {
  name: "Layout · Dismissible",
  args: { dismissible: true, title: "Alerta descartable", children: "Haz clic en la X para cerrarla." },
};

/* ─────────────────────────────────────────
   Showcase
───────────────────────────────────────── */
export const ShowcaseAllVariants: Story = {
  name: "Showcase · All variants",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, width: 420 }}>
      <Alert variant="info" title="Info">Nueva versión disponible.</Alert>
      <Alert variant="success" title="Éxito">Cambios guardados correctamente.</Alert>
      <Alert variant="warning" title="Advertencia">La suscripción vence pronto.</Alert>
      <Alert variant="danger" title="Error">No se pudo completar la acción.</Alert>
      <Alert variant="default" title="Nota">Este campo es opcional.</Alert>
    </div>
  ),
};

export const ShowcaseDismissible: Story = {
  name: "Showcase · Dismissible",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, width: 420 }}>
      <Alert variant="info" dismissible onDismiss={() => alert("cerrado")}>
        Haz clic en la X para descartar esta alerta.
      </Alert>
      <Alert variant="danger" title="Error" dismissible onDismiss={() => alert("cerrado")}>
        Error en el servidor. Intenta de nuevo.
      </Alert>
    </div>
  ),
};
