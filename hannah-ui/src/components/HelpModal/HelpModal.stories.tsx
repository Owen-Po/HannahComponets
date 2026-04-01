import type { Meta, StoryObj } from "@storybook/react";
import { HelpModal, HelpList, HelpParagraph, HelpKeyboard } from "./HelpModal";
import { Settings, Users, FileText } from "lucide-react";

const meta: Meta = {
  title: "Components/HelpModal",
  parameters: { layout: "centered", docs: { description: { component: "Modal de ayuda con secciones tabuladas, indicadores de navegación y componentes auxiliares para contenido." } } },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  name: "Default",
  render: () => (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-600">Haz click aquí →</span>
      <HelpModal
        title="Ayuda del módulo"
        description="Guía rápida para usar este módulo correctamente."
        sections={[
          { title: "General", icon: <Settings size={14} />, content: <HelpList items={["Usa la barra de búsqueda para filtrar", "Click en columnas para ordenar", "Doble click para editar"]} /> },
          { title: "Usuarios", icon: <Users size={14} />, content: <HelpParagraph>Los usuarios se gestionan desde la pestaña de configuración. Usa <HelpKeyboard keys="Ctrl+N" /> para crear uno nuevo.</HelpParagraph> },
          { title: "Exportar", icon: <FileText size={14} />, content: <HelpList items={["CSV para hojas de cálculo", "PDF para reportes formales", "JSON para integraciones"]} /> },
        ]}
      />
    </div>
  ),
};
