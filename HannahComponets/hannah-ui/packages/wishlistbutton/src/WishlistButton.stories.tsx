import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { WishlistButton } from "./WishlistButton";

const meta: Meta<typeof WishlistButton> = {
  title: "Components/WishlistButton",
  component: WishlistButton,
  parameters: { layout: "centered" },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    variant: { control: "select", options: ["default", "circle", "ghost"] },
  },
};
export default meta;

type Story = StoryObj<typeof WishlistButton>;

const Interactive = (props: Partial<React.ComponentProps<typeof WishlistButton>>) => {
  const [w, setW] = useState(props.isWishlisted ?? false);
  return <WishlistButton isWishlisted={w} onToggle={() => setW(!w)} {...props} />;
};

export const Default: Story = {
  render: () => <Interactive />,
};

export const Wishlisted: Story = {
  render: () => <Interactive isWishlisted />,
};

export const Circle: Story = {
  render: () => <Interactive variant="circle" />,
};

export const Ghost: Story = {
  render: () => (
    <div className="group relative w-48 h-32 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
      <span className="text-sm text-gray-500">Hover me</span>
      <div className="absolute top-2 right-2">
        <Interactive variant="ghost" />
      </div>
    </div>
  ),
};

export const WithCount: Story = {
  render: () => <Interactive showCount={24} />,
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Interactive size="sm" />
      <Interactive size="md" />
      <Interactive size="lg" />
    </div>
  ),
};

export const CustomColor: Story = {
  render: () => <Interactive color="#ec4899" isWishlisted />,
};
