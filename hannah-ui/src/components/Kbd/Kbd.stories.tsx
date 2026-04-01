import type { Meta, StoryObj } from "@storybook/react";
import { Kbd } from "./Kbd";

/* ─────────────────────────────────────────
   Meta
───────────────────────────────────────── */
const meta: Meta<typeof Kbd> = {
  title: "Components/Kbd",
  component: Kbd,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Kbd>;

/* ─────────────────────────────────────────
   Stories
───────────────────────────────────────── */
export const Default: Story = {
  args: { children: "K" },
};

export const Combination: Story = {
  name: "Combination",
  render: () => (
    <div className="flex items-center gap-1">
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </div>
  ),
};

export const Sizes: Story = {
  name: "Sizes",
  render: () => (
    <div className="flex items-center gap-3">
      <Kbd size="sm">sm</Kbd>
      <Kbd size="md">md</Kbd>
    </div>
  ),
};

export const Outline: Story = {
  name: "Outline",
  args: { variant: "outline", children: "Esc" },
};

export const CommonShortcuts: Story = {
  name: "Common Shortcuts",
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-1">
        <Kbd>Ctrl</Kbd>
        <span className="text-gray-400">+</span>
        <Kbd>C</Kbd>
        <span className="ml-2 text-sm text-gray-500">Copy</span>
      </div>
      <div className="flex items-center gap-1">
        <Kbd>Ctrl</Kbd>
        <span className="text-gray-400">+</span>
        <Kbd>V</Kbd>
        <span className="ml-2 text-sm text-gray-500">Paste</span>
      </div>
      <div className="flex items-center gap-1">
        <Kbd>⌘</Kbd>
        <span className="text-gray-400">+</span>
        <Kbd>Shift</Kbd>
        <span className="text-gray-400">+</span>
        <Kbd>P</Kbd>
        <span className="ml-2 text-sm text-gray-500">Command Palette</span>
      </div>
    </div>
  ),
};
