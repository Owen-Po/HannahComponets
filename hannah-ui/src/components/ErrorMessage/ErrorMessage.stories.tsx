import type { Meta, StoryObj } from "@storybook/react";
import { ErrorMessage } from "./ErrorMessage";

const meta: Meta = {
  title: "Components/ErrorMessage",
  parameters: { layout: "centered", docs: { description: { component: "Mensaje de error inline para formularios." } } },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  name: "Default",
  render: () => (
    <div className="space-y-3 w-64">
      <div>
        <label className="text-sm font-medium text-gray-700">Email</label>
        <input className="w-full mt-1 px-3 py-2 border border-red-300 rounded-lg text-sm" value="invalid" readOnly />
        <ErrorMessage>El email no es válido</ErrorMessage>
      </div>
    </div>
  ),
};
