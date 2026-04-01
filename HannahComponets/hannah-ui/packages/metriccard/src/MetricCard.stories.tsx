import type { Meta, StoryObj } from "@storybook/react";
import { MetricCard } from "./MetricCard";
import { DollarSign, Users, ShoppingCart, Percent } from "lucide-react";

const meta: Meta<typeof MetricCard> = {
  title: "Components/MetricCard",
  component: MetricCard,
  parameters: { layout: "padded" },
};
export default meta;

type Story = StoryObj<typeof MetricCard>;

/* ── Default ─────────────────────────── */
export const Default: Story = {
  args: {
    title: "Total Revenue",
    value: "48,235",
    prefix: "$",
    change: { value: 12.5, label: "vs last month" },
    trend: "up",
    icon: DollarSign,
    sparkline: [30, 40, 35, 50, 45, 60, 55, 70, 65, 80],
  },
};

/* ── Grid ────────────────────────────── */
export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <MetricCard
        title="Total Revenue"
        value="48,235"
        prefix="$"
        change={{ value: 12.5, label: "vs last month" }}
        trend="up"
        icon={DollarSign}
        sparkline={[30, 40, 35, 50, 45, 60, 55, 70, 65, 80]}
      />
      <MetricCard
        title="Active Users"
        value="2,420"
        change={{ value: 8.1, label: "vs last week" }}
        trend="up"
        icon={Users}
        sparkline={[20, 25, 22, 30, 28, 35, 40, 38, 42, 50]}
        accentColor="#8b5cf6"
      />
      <MetricCard
        title="Orders"
        value="1,210"
        change={{ value: 3.2, label: "vs last month" }}
        trend="down"
        icon={ShoppingCart}
        sparkline={[60, 55, 50, 48, 52, 45, 40, 42, 38, 35]}
      />
      <MetricCard
        title="Conversion Rate"
        value="3.24"
        suffix="%"
        change={{ value: 0.8, label: "vs last month" }}
        trend="neutral"
        icon={Percent}
        sparkline={[3.1, 3.0, 3.2, 3.1, 3.3, 3.2, 3.4, 3.2, 3.3, 3.24]}
      />
    </div>
  ),
};

/* ── Glass ────────────────────────────── */
export const Glass: Story = {
  render: () => (
    <div className="rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8">
      <MetricCard
        title="Total Revenue"
        value="48,235"
        prefix="$"
        change={{ value: 12.5, label: "vs last month" }}
        trend="up"
        icon={DollarSign}
        variant="glass"
        sparkline={[30, 40, 35, 50, 45, 60, 55, 70, 65, 80]}
        sparklineColor="#ffffff"
      />
    </div>
  ),
};

/* ── Bordered ────────────────────────── */
export const Bordered: Story = {
  args: {
    title: "Active Users",
    value: "2,420",
    change: { value: 8.1, label: "vs last week" },
    trend: "up",
    icon: Users,
    variant: "bordered",
    accentColor: "#8b5cf6",
    sparkline: [20, 25, 22, 30, 28, 35, 40, 38, 42, 50],
  },
};

/* ── Loading ──────────────────────────── */
export const Loading: Story = {
  args: {
    title: "Total Revenue",
    value: "",
    loading: true,
  },
};

/* ── Negative ────────────────────────── */
export const Negative: Story = {
  args: {
    title: "Churn Rate",
    value: "5.2",
    suffix: "%",
    change: { value: 2.4, label: "vs last month" },
    trend: "down",
    icon: Users,
    sparkline: [2.8, 3.1, 3.5, 3.8, 4.0, 4.3, 4.6, 4.9, 5.0, 5.2],
  },
};
