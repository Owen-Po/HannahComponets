import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "./Toggle";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    disabled: { control: "boolean" },
    label: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: { label: "Enable feature" },
};

export const Checked: Story = {
  args: { checked: true, label: "Enabled" },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <Toggle size="sm" label="Small" />
      <Toggle size="md" label="Medium" />
      <Toggle size="lg" label="Large" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <Toggle checked={false} label="Off" />
      <Toggle checked={true} label="On" />
      <Toggle checked={false} disabled label="Disabled Off" />
      <Toggle checked={true} disabled label="Disabled On" />
    </div>
  ),
};

export const UseCases: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-[#2a2a2a]">
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white">Dark Mode</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">Switch between themes</p>
        </div>
        <Toggle size="md" />
      </div>
      <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-[#2a2a2a]">
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white">Notifications</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">Enable push notifications</p>
        </div>
        <Toggle size="md" defaultChecked />
      </div>
    </div>
  ),
};
