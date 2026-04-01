import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { QuantitySelector } from "./QuantitySelector";

const meta: Meta<typeof QuantitySelector> = {
  title: "Components/QuantitySelector",
  component: QuantitySelector,
  parameters: { layout: "centered" },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    variant: { control: "select", options: ["default", "pill", "minimal"] },
  },
};
export default meta;

type Story = StoryObj<typeof QuantitySelector>;

/* helper wrapper so value is interactive */
const Interactive = (props: Partial<React.ComponentProps<typeof QuantitySelector>>) => {
  const [v, setV] = useState(props.value ?? 1);
  return <QuantitySelector value={v} onChange={setV} {...props} />;
};

export const Default: Story = {
  render: () => <Interactive />,
};

export const Pill: Story = {
  render: () => <Interactive variant="pill" />,
};

export const Minimal: Story = {
  render: () => <Interactive variant="minimal" />,
};

export const Small: Story = {
  render: () => <Interactive size="sm" />,
};

export const Large: Story = {
  render: () => <Interactive size="lg" />,
};

export const Disabled: Story = {
  render: () => <Interactive disabled value={3} />,
};

export const WithLimits: Story = {
  render: () => <Interactive min={1} max={5} value={3} />,
};
