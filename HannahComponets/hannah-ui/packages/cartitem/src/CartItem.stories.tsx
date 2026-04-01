import type { Meta, StoryObj } from "@storybook/react";
import { CartItem } from "./CartItem";

const meta: Meta<typeof CartItem> = {
  title: "Components/CartItem",
  component: CartItem,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A single cart line item with image, title, variant, quantity controls, price, and remove action.",
      },
    },
  },
  argTypes: {
    price: { control: "number" },
    originalPrice: { control: "number" },
    quantity: { control: "number" },
    maxQuantity: { control: "number" },
    disabled: { control: "boolean" },
    variant: { control: "text" },
    currency: { control: "text" },
    accentColor: { control: "color" },
  },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-2xl rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CartItem>;

const IMG =
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop";
const IMG2 =
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop";
const IMG3 =
  "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200&h=200&fit=crop";

export const Default: Story = {
  args: {
    image: IMG,
    title: "Classic Leather Watch",
    variant: "Black / One Size",
    price: 149.0,
    quantity: 1,
  },
};

export const WithDiscount: Story = {
  args: {
    image: IMG2,
    title: "Wireless Headphones Pro",
    variant: "Matte Black",
    price: 79.99,
    originalPrice: 129.99,
    quantity: 2,
  },
};

export const Disabled: Story = {
  args: {
    image: IMG,
    title: "Classic Leather Watch",
    variant: "Black / One Size",
    price: 149.0,
    quantity: 1,
    disabled: true,
  },
};

export const Multiple: Story = {
  render: () => (
    <>
      <CartItem
        image={IMG}
        title="Classic Leather Watch"
        variant="Black / One Size"
        price={149.0}
        quantity={1}
      />
      <CartItem
        image={IMG2}
        title="Wireless Headphones Pro"
        variant="Matte Black"
        price={79.99}
        originalPrice={129.99}
        quantity={2}
      />
      <CartItem
        image={IMG3}
        title="Retro Sunglasses"
        variant="Tortoise / Medium"
        price={59.0}
        quantity={1}
      />
    </>
  ),
};
