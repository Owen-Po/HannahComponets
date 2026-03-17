import type { Meta, StoryObj } from "@storybook/react";
import { Login } from "./Login";

const meta: Meta<typeof Login> = {
  title: "Components/Login",
  component: Login,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    onSubmit: { action: "submit" },
  },
};

export default meta;

type Story = StoryObj<typeof Login>;

export const Default: Story = {};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Error: Story = {
  args: {
    error: "Credenciales incorrectas",
  },
};

export const WithoutHero: Story = {
  args: {
    showHero: false,
  },
};
