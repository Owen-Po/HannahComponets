import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { Button } from "@hannah-ui/button";

/* ─────────────────────────────────────────
   Meta
───────────────────────────────────────── */
const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Modal con portal React, backdrop blur, cierre por tecla Escape o clic exterior, bloqueo de scroll y 5 tamaños. Footer configurable.",
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "full"],
      description: "Ancho máximo del modal",
      table: { category: "Variantes", defaultValue: { summary: "md" } },
    },
    closeOnBackdrop: { control: "boolean", description: "Cerrar al hacer clic fuera", table: { category: "Layout", defaultValue: { summary: "true" } } },
    showCloseButton: { control: "boolean", description: "Mostrar botón X", table: { category: "Layout", defaultValue: { summary: "true" } } },
    title: { control: "text", table: { category: "Contenido" } },
    description: { control: "text", table: { category: "Contenido" } },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

/* ─────────────────────────────────────────
   Wrapper reutilizable
───────────────────────────────────────── */
const ModalDemo = (props: Omit<React.ComponentProps<typeof Modal>, "open" | "onClose">) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)}>Abrir modal</Button>
      <Modal {...props} open={open} onClose={() => setOpen(false)} />
    </>
  );
};

/* ─────────────────────────────────────────
   Playground
───────────────────────────────────────── */
export const Playground: Story = {
  render: (args) => (
    <ModalDemo
      {...args}
      title="Título del modal"
      description="Descripción opcional del modal."
      footer={
        <>
          <Button variant="ghost" size="sm" onClick={() => {}}>Cancelar</Button>
          <Button variant="primary" size="sm">Confirmar</Button>
        </>
      }
    >
      <p style={{ fontSize: 14, color: "#374151" }}>Aquí va el contenido principal del modal.</p>
    </ModalDemo>
  ),
};

/* ─────────────────────────────────────────
   Tamaños
───────────────────────────────────────── */
export const SizeSm: Story = {
  name: "Size · sm",
  render: () => (
    <ModalDemo size="sm" title="Modal pequeño">
      <p style={{ fontSize: 14, color: "#374151" }}>Contenido compacto.</p>
    </ModalDemo>
  ),
};

export const SizeLg: Story = {
  name: "Size · lg",
  render: () => (
    <ModalDemo size="lg" title="Modal grande" description="Con más espacio para contenido.">
      <p style={{ fontSize: 14, color: "#374151" }}>Contenido extenso con más ancho disponible.</p>
    </ModalDemo>
  ),
};

/* ─────────────────────────────────────────
   Confirmación
───────────────────────────────────────── */
export const ConfirmDelete: Story = {
  name: "Use case · Confirm delete",
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="danger" onClick={() => setOpen(true)}>Eliminar registro</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          size="sm"
          title="¿Eliminar registro?"
          description="Esta acción no se puede deshacer."
          footer={
            <>
              <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>Cancelar</Button>
              <Button variant="danger" size="sm" onClick={() => setOpen(false)}>Sí, eliminar</Button>
            </>
          }
        >
          <p style={{ fontSize: 14, color: "#374151" }}>Se eliminarán todos los datos asociados a este registro de forma permanente.</p>
        </Modal>
      </>
    );
  },
};

/* ─────────────────────────────────────────
   Formulario
───────────────────────────────────────── */
export const FormModal: Story = {
  name: "Use case · Form modal",
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="primary" onClick={() => setOpen(true)}>Nuevo usuario</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Crear usuario"
          description="Completa los datos para agregar un nuevo usuario."
          footer={
            <>
              <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>Cancelar</Button>
              <Button variant="primary" size="sm">Crear</Button>
            </>
          }
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <label style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}>Nombre</label>
              <input style={{ border: "1px solid #d1d5db", borderRadius: 10, padding: "8px 12px", fontSize: 14, outline: "none" }} placeholder="Juan Pérez" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <label style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}>Correo</label>
              <input style={{ border: "1px solid #d1d5db", borderRadius: 10, padding: "8px 12px", fontSize: 14, outline: "none" }} placeholder="juan@ejemplo.com" type="email" />
            </div>
          </div>
        </Modal>
      </>
    );
  },
};
