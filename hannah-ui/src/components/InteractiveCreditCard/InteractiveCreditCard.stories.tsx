import type { Meta, StoryObj } from "@storybook/react";
import { InteractiveCreditCard } from "./InteractiveCreditCard";
import { CreditCardForm } from "./CreditCardForm";

const meta: Meta<typeof InteractiveCreditCard> = {
  title: "Components/InteractiveCreditCard",
  component: InteractiveCreditCard,
  tags: ["autodocs"],
  argTypes: {
    cardNumber: { control: "text" },
    cardHolder: { control: "text" },
    expiryDate: { control: "text" },
    cvv: { control: "text" },
    isCvvFocused: { control: "boolean" },
    bank: {
      control: "select",
      options: ["none", "bcp", "interbank", "bbva", "scotiabank", "banbif", "falabella", "ripley"],
    },
  },
  decorators: [(Story) => <div className="p-8"><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof InteractiveCreditCard>;

/* ─── Tarjetas por banco ─────────────── */

export const BCP_Visa: Story = {
  args: {
    cardNumber: "4557880012345678",
    cardHolder: "JOSE RAMIREZ",
    expiryDate: "09/27",
    cvv: "321",
    bank: "bcp",
  },
};

export const Interbank_Mastercard: Story = {
  args: {
    cardNumber: "5491020012345678",
    cardHolder: "MARIA QUISPE",
    expiryDate: "03/28",
    cvv: "456",
    bank: "interbank",
  },
};

export const BBVA_Visa: Story = {
  args: {
    cardNumber: "4110120012345678",
    cardHolder: "CARLOS FLORES",
    expiryDate: "11/26",
    cvv: "789",
    bank: "bbva",
  },
};

export const Scotiabank_Mastercard: Story = {
  args: {
    cardNumber: "5254130012345678",
    cardHolder: "ANA TORRES",
    expiryDate: "06/29",
    cvv: "112",
    bank: "scotiabank",
  },
};

export const Falabella_Visa: Story = {
  args: {
    cardNumber: "4213440012345678",
    cardHolder: "PEDRO GARCIA",
    expiryDate: "01/28",
    cvv: "654",
    bank: "falabella",
  },
};

export const Ripley_Mastercard: Story = {
  args: {
    cardNumber: "5200830012345678",
    cardHolder: "LUCIA MENDOZA",
    expiryDate: "08/27",
    cvv: "998",
    bank: "ripley",
  },
};

/* ─── Reverso (CVV focus) ────────────── */

export const BCP_Reverso: Story = {
  args: {
    cardNumber: "4557880012345678",
    cardHolder: "JOSE RAMIREZ",
    expiryDate: "09/27",
    cvv: "321",
    bank: "bcp",
    isCvvFocused: true,
  },
};

/* ─── Sin banco (solo red) ───────────── */

export const Visa_SinBanco: Story = {
  args: {
    cardNumber: "4532015112830366",
    cardHolder: "JUAN PEREZ",
    expiryDate: "12/26",
  },
};

export const Mastercard_SinBanco: Story = {
  args: {
    cardNumber: "5425233430109903",
    cardHolder: "ROSA LOPEZ",
    expiryDate: "05/28",
  },
};

/* ─── Vacía ──────────────────────────── */

export const Vacia: Story = {
  args: {},
};

/* ─── Todos los bancos ───────────────── */

export const TodosLosBancos: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
      <InteractiveCreditCard cardNumber="4557880012345678" cardHolder="BCP CLIENTE" expiryDate="12/27" bank="bcp" />
      <InteractiveCreditCard cardNumber="5491020012345678" cardHolder="INTERBANK CLIENTE" expiryDate="06/28" bank="interbank" />
      <InteractiveCreditCard cardNumber="4110120012345678" cardHolder="BBVA CLIENTE" expiryDate="03/26" bank="bbva" />
      <InteractiveCreditCard cardNumber="5254130012345678" cardHolder="SCOTIA CLIENTE" expiryDate="09/29" bank="scotiabank" />
      <InteractiveCreditCard cardNumber="4213440012345678" cardHolder="FALABELLA CLIENTE" expiryDate="01/27" bank="falabella" />
      <InteractiveCreditCard cardNumber="5200830012345678" cardHolder="RIPLEY CLIENTE" expiryDate="11/28" bank="ripley" />
      <InteractiveCreditCard cardNumber="4916380012345678" cardHolder="BANBIF CLIENTE" expiryDate="04/27" bank="banbif" />
    </div>
  ),
};

/* ─── Formulario interactivo ─────────── */

export const FormularioBCP: Story = {
  render: () => (
    <CreditCardForm
      bank="bcp"
      onSubmit={(data) => alert(JSON.stringify(data, null, 2))}
    />
  ),
};

export const FormularioInterbank: Story = {
  render: () => (
    <CreditCardForm
      bank="interbank"
      onSubmit={(data) => alert(JSON.stringify(data, null, 2))}
    />
  ),
};
