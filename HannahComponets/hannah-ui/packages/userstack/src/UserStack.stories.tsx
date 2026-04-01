import type { Meta, StoryObj } from "@storybook/react";
import { UserStack } from "./UserStack";

const meta: Meta<typeof UserStack> = {
  title: "Components/UserStack",
  component: UserStack,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof UserStack>;

/* ── Sample data ─────────────────────── */

const users = [
  { name: "Alice Martin", color: "#7c6aff" },
  { name: "Bob Chen", color: "#f59e0b" },
  { name: "Carol Davis", color: "#10b981" },
  { name: "Dan Wilson", color: "#ef4444" },
  { name: "Eva Lopez", color: "#3b82f6" },
];

const manyUsers = [
  ...users,
  { name: "Frank Kim" },
  { name: "Grace Patel" },
  { name: "Hiro Tanaka" },
  { name: "Isla Brown" },
  { name: "Jake Lee" },
  { name: "Kara Singh" },
  { name: "Liam Zhang" },
];

/* ── Stories ──────────────────────────── */

export const Default: Story = {
  args: { users, max: 4 },
};

export const AllVisible: Story = {
  args: { users: users.slice(0, 3), max: 5 },
};

export const WithAdd: Story = {
  args: {
    users: users.slice(0, 3),
    onAdd: () => alert("Add member clicked"),
  },
};

export const Large: Story = {
  args: { users, max: 4, size: "lg" },
};

export const Small: Story = {
  args: { users, max: 4, size: "sm" },
};

export const OnClick: Story = {
  args: {
    users,
    max: 4,
    onClick: (user) => alert(`Clicked: ${user.name}`),
  },
};

export const ManyUsers: Story = {
  args: {
    users: manyUsers,
    max: 4,
    onOverflowClick: () => alert("Show all members"),
  },
};
