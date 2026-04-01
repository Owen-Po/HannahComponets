import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardBody, CardFooter } from "./Card";
import { Button } from "@hannah-ui/button";
import { Badge } from "@hannah-ui/badge";

/* ─────────────────────────────────────────
   Meta
───────────────────────────────────────── */
const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Contenedor composable con subcomponentes CardHeader, CardBody y CardFooter. Soporta sombras, bordes redondeados y efecto hover.",
      },
    },
  },
  argTypes: {
    rounded: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      description: "Radio de borde",
      table: { category: "Variantes", defaultValue: { summary: "lg" } },
    },
    shadow: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
      description: "Sombra",
      table: { category: "Variantes", defaultValue: { summary: "sm" } },
    },
    hoverable: {
      control: "boolean",
      description: "Efecto lift al hover",
      table: { category: "Layout", defaultValue: { summary: "false" } },
    },
    padding: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
      description: "Padding interno (cuando no se usan sub-componentes)",
      table: { category: "Layout", defaultValue: { summary: "none" } },
    },
  },
  args: {
    rounded: "lg",
    shadow: "sm",
    hoverable: false,
  },
  decorators: [(Story) => <div style={{ width: 380 }}><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof Card>;

/* ─────────────────────────────────────────
   Playground
───────────────────────────────────────── */
export const Playground: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader title="Título de la tarjeta" description="Descripción breve del contenido." />
      <CardBody>
        <p style={{ fontSize: 14, color: "#6b7280" }}>Aquí va el contenido principal de la tarjeta.</p>
      </CardBody>
      <CardFooter>
        <Button variant="ghost" size="sm">Cancelar</Button>
        <Button variant="primary" size="sm">Guardar</Button>
      </CardFooter>
    </Card>
  ),
};

/* ─────────────────────────────────────────
   Composición
───────────────────────────────────────── */
export const HeaderOnly: Story = {
  name: "Composition · Header only",
  render: () => (
    <Card>
      <CardHeader
        title="Resumen del proyecto"
        description="Última actualización hace 2 horas."
        action={<Badge variant="success" dot>Activo</Badge>}
      />
    </Card>
  ),
};

export const WithFooter: Story = {
  name: "Composition · Header + Body + Footer",
  render: () => (
    <Card>
      <CardHeader title="Confirmar acción" description="Esta acción no se puede deshacer." />
      <CardBody>
        <p style={{ fontSize: 14, color: "#374151" }}>¿Estás seguro de que deseas eliminar este registro? Se perderán todos los datos asociados.</p>
      </CardBody>
      <CardFooter justify="between">
        <Button variant="ghost" size="sm">Cancelar</Button>
        <Button variant="danger" size="sm">Eliminar</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithPadding: Story = {
  name: "Layout · Flat padding",
  render: () => (
    <Card padding="md">
      <p style={{ fontSize: 14, color: "#374151", margin: 0 }}>Tarjeta con padding directo, sin sub-componentes.</p>
    </Card>
  ),
};

/* ─────────────────────────────────────────
   Sombras
───────────────────────────────────────── */
export const ShadowNone: Story = { name: "Shadow · none", render: () => <Card shadow="none" padding="md"><p style={{fontSize:14,margin:0}}>Sin sombra</p></Card> };
export const ShadowSm: Story = { name: "Shadow · sm", render: () => <Card shadow="sm" padding="md"><p style={{fontSize:14,margin:0}}>Sombra sm</p></Card> };
export const ShadowMd: Story = { name: "Shadow · md", render: () => <Card shadow="md" padding="md"><p style={{fontSize:14,margin:0}}>Sombra md</p></Card> };
export const ShadowLg: Story = { name: "Shadow · lg", render: () => <Card shadow="lg" padding="md"><p style={{fontSize:14,margin:0}}>Sombra lg</p></Card> };

/* ─────────────────────────────────────────
   Hoverable
───────────────────────────────────────── */
export const Hoverable: Story = {
  name: "Layout · Hoverable",
  render: () => (
    <Card hoverable shadow="sm">
      <CardHeader title="Tarjeta clickable" description="Pasa el cursor para ver el efecto." />
      <CardBody><p style={{fontSize:14,color:"#6b7280"}}>Contenido de la tarjeta.</p></CardBody>
    </Card>
  ),
};

/* ─────────────────────────────────────────
   Showcase
───────────────────────────────────────── */
export const ShowcaseGrid: Story = {
  name: "Showcase · Grid of cards",
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, width: 700 }}>
      {[
        { title: "Usuarios", value: "1,248", badge: "primary" as const, desc: "+12% este mes" },
        { title: "Ingresos", value: "$24,500", badge: "success" as const, desc: "+8% este mes" },
        { title: "Tickets abiertos", value: "37", badge: "warning" as const, desc: "5 sin asignar" },
        { title: "Errores", value: "3", badge: "danger" as const, desc: "↓ 2 resueltos hoy" },
      ].map((item) => (
        <Card key={item.title} hoverable shadow="sm">
          <CardHeader
            title={item.title}
            description={item.desc}
            action={<Badge variant={item.badge}>{item.value}</Badge>}
          />
        </Card>
      ))}
    </div>
  ),
};
