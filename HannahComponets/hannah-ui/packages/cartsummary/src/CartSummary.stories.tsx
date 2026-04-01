import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CartSummary } from "./CartSummary";

const meta: Meta<typeof CartSummary> = {
  title: "Components/CartSummary",
  component: CartSummary,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Order summary card showing subtotal, shipping, tax, discount, total, optional promo code input, and checkout CTA.",
      },
    },
  },
  argTypes: {
    subtotal: { control: "number" },
    shipping: { control: "number" },
    tax: { control: "number" },
    discount: { control: "number" },
    total: { control: "number" },
    items: { control: "number" },
    loading: { control: "boolean" },
    accentColor: { control: "color" },
    ctaLabel: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof CartSummary>;

export const Default: Story = {
  args: {
    subtotal: 299.0,
    shipping: 9.99,
    tax: 25.0,
    total: 333.99,
    items: 3,
  },
};

export const WithPromo: Story = {
  render: () => {
    const [code, setCode] = useState("");
    const [applied, setApplied] = useState(false);
    return (
      <CartSummary
        subtotal={299.0}
        shipping={9.99}
        tax={25.0}
        total={applied ? 303.99 : 333.99}
        discount={applied ? 30 : undefined}
        items={3}
        promoCode={{
          value: code,
          onChange: setCode,
          onApply: () => setApplied(true),
          applied,
        }}
      />
    );
  },
};

export const FreeShipping: Story = {
  args: {
    subtotal: 299.0,
    shipping: 0,
    tax: 25.0,
    total: 324.0,
    items: 3,
  },
};

export const WithDiscount: Story = {
  args: {
    subtotal: 299.0,
    shipping: 9.99,
    tax: 25.0,
    discount: 50.0,
    total: 283.99,
    items: 3,
  },
};

export const Loading: Story = {
  args: {
    subtotal: 299.0,
    shipping: 9.99,
    tax: 25.0,
    total: 333.99,
    items: 3,
    loading: true,
  },
};
