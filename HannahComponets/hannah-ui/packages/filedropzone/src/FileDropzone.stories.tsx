import type { Meta, StoryObj } from "@storybook/react";
import { FileDropzone } from "./FileDropzone";

const meta: Meta = {
  title: "Components/FileDropzone",
  parameters: {
    layout: "centered",
    docs: { description: { component: "Zona de carga de archivos con drag & drop, previsualización de imágenes y confirmación antes de subir." } },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  name: "Default",
  render: () => (
    <div className="w-96">
      <FileDropzone onUpload={async (file) => { await new Promise((r) => setTimeout(r, 1500)); alert(`Archivo "${file.name}" subido!`); }} />
    </div>
  ),
};

export const ImagesOnly: Story = {
  name: "Solo imágenes",
  render: () => (
    <div className="w-96">
      <FileDropzone
        onUpload={async (file) => alert(`Imagen "${file.name}" subida!`)}
        title="Cargar Imagen"
        accept={{ "image/*": [".jpg", ".jpeg", ".png", ".webp"] }}
        formatText="JPG, PNG, WebP hasta 5MB"
      />
    </div>
  ),
};
