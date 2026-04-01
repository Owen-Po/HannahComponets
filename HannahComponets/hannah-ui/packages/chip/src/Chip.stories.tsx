import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "./Chip";
import { Star, Zap, Tag } from "lucide-react";

const meta: Meta<typeof Chip> = {
  title: "Components/Chip",
  component: Chip,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "neon", "purple", "primary", "success", "warning", "danger"],
    },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: { children: "Default Chip", variant: "default" },
};

export const Neon: Story = {
  args: { children: "Neon Chip", variant: "neon" },
};

export const Purple: Story = {
  args: { children: "Purple Chip", variant: "purple" },
};

export const Removable: Story = {
  args: { children: "Removable", variant: "neon", onRemove: () => {} },
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Chip variant="neon"><Star className="w-3 h-3" />Featured</Chip>
      <Chip variant="purple"><Zap className="w-3 h-3" />Premium</Chip>
      <Chip variant="default"><Tag className="w-3 h-3" />Tagged</Chip>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Chip variant="neon" size="sm">Small</Chip>
      <Chip variant="neon" size="md">Medium</Chip>
      <Chip variant="neon" size="lg">Large</Chip>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Chip variant="default">Default</Chip>
      <Chip variant="neon">Neon</Chip>
      <Chip variant="purple">Purple</Chip>
      <Chip variant="primary">Primary</Chip>
      <Chip variant="success">Success</Chip>
      <Chip variant="warning">Warning</Chip>
      <Chip variant="danger">Danger</Chip>
    </div>
  ),
};
