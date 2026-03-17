import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";
import { Button } from "../Button/Button";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    title: "Dashboard",
    description: "Panel principal",
    children: <Button>Acción</Button>,
  },
};

export const WithBreadcrumbs: Story = {
  args: {
    title: "Usuarios",
    breadcrumbs: [{ label: "Inicio" }, { label: "Usuarios" }],
  },
};

export const WithBack: Story = {
  args: {
    title: "Detalle",
    showBackButton: true,
    onBack: () => alert("Back"),
  },
};
