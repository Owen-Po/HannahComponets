import type { Meta, StoryObj } from "@storybook/react";
import { Star } from "lucide-react";
import { Divider } from "./Divider";

/* ─────────────────────────────────────────
   Meta
───────────────────────────────────────── */
const meta: Meta<typeof Divider> = {
  title: "Components/Divider",
  component: Divider,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div style={{ width: 400 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Divider>;

/* ─────────────────────────────────────────
   Stories
───────────────────────────────────────── */
export const Default: Story = {};

export const WithText: Story = {
  name: "With Text",
  args: { children: "OR" },
};

export const WithIcon: Story = {
  name: "With Icon",
  render: () => (
    <Divider>
      <Star size={16} />
    </Divider>
  ),
};

export const Dashed: Story = {
  args: { variant: "dashed" },
};

export const Dotted: Story = {
  args: { variant: "dotted" },
};

export const Vertical: Story = {
  name: "Vertical",
  decorators: [
    (Story) => (
      <div style={{ display: "flex", alignItems: "center", height: 80 }}>
        <span>Left</span>
        <Story />
        <span>Right</span>
      </div>
    ),
  ],
  args: { orientation: "vertical" },
};

export const CustomColor: Story = {
  name: "Custom Color",
  args: { color: "border-blue-400 dark:border-blue-600", children: "Section" },
};
