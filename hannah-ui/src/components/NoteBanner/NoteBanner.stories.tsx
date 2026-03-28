import type { Meta, StoryObj } from "@storybook/react";
import { NoteBanner } from "./NoteBanner";

const meta: Meta = {
  title: "Components/NoteBanner",
  parameters: { layout: "padded", docs: { description: { component: "Banner de nota informativa con variantes de color para diferentes niveles de severidad." } } },
};
export default meta;
type Story = StoryObj;

export const AllVariants: Story = {
  name: "Todas las variantes",
  render: () => (
    <div className="space-y-3 max-w-md">
      <NoteBanner title="Información" description="Este campo es opcional." variant="info" />
      <NoteBanner title="Éxito" description="Los cambios se guardaron correctamente." variant="success" />
      <NoteBanner title="Advertencia" description="Esta acción no se puede deshacer." variant="warning" />
      <NoteBanner title="Error" description="No se pudo conectar con el servidor." variant="danger" />
    </div>
  ),
};
