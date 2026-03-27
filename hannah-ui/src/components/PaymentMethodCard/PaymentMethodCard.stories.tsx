import type { Meta, StoryObj } from "@storybook/react";
import { PaymentMethodCard } from "./PaymentMethodCard";
import { PaymentForm } from "./PaymentForm";

/* ─── PaymentMethodCard ──────────────────────────── */
const meta: Meta<typeof PaymentMethodCard> = {
  title: "Components/PaymentMethodCard",
  component: PaymentMethodCard,
  tags: ["autodocs"],
  argTypes: {
    type: { control: "select", options: ["visa", "mastercard", "paypal", "apple"] },
    isSelected: { control: "boolean" },
    lastFour: { control: "text" },
    expiry: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof PaymentMethodCard>;

export const Visa: Story = {
  args: { type: "visa", lastFour: "4242", expiry: "12/26", isSelected: false },
};

export const Selected: Story = {
  args: { type: "mastercard", lastFour: "8888", expiry: "03/27", isSelected: true },
};

export const PayPal: Story = {
  args: { type: "paypal", isSelected: false },
};

export const ApplePay: Story = {
  args: { type: "apple", isSelected: true },
};

export const AllCards: Story = {
  render: () => (
    <div className="space-y-3 max-w-sm">
      <PaymentMethodCard type="visa" lastFour="4242" expiry="12/26" isSelected />
      <PaymentMethodCard type="mastercard" lastFour="8888" expiry="03/27" />
      <PaymentMethodCard type="paypal" />
      <PaymentMethodCard type="apple" />
    </div>
  ),
};

/* ─── PaymentForm ──────────────────────────── */
export const FormExample: Story = {
  render: () => <PaymentForm />,
};

export const FormWithCustomOptions: Story = {
  render: () => (
    <PaymentForm
      options={[
        { id: "v1", type: "visa", lastFour: "1234", expiry: "06/25" },
        { id: "v2", type: "visa", lastFour: "5678", expiry: "11/27" },
        { id: "mc1", type: "mastercard", lastFour: "9999", expiry: "01/28" },
        { id: "pp1", type: "paypal" },
      ]}
      defaultSelected="v2"
    />
  ),
};
