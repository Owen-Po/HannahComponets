import type { Meta, StoryObj } from "@storybook/react";
import { PricingCard } from "./PricingCard";
import type { PricingFeature } from "./PricingCard";

/* ─────────────────────────────────────────
   Meta
───────────────────────────────────────── */
const meta: Meta<typeof PricingCard> = {
  title: "Components/PricingCard",
  component: PricingCard,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof PricingCard>;

/* ─────────────────────────────────────────
   Shared feature sets
───────────────────────────────────────── */

const freeFeatures: PricingFeature[] = [
  { text: "Up to 3 projects", included: true },
  { text: "Basic analytics", included: true },
  { text: "Community support", included: true },
  { text: "Custom domains", included: false },
  { text: "Advanced integrations", included: false },
];

const proFeatures: PricingFeature[] = [
  { text: "Unlimited projects", included: true },
  { text: "Advanced analytics", included: true },
  { text: "Priority support", included: true, highlight: true },
  { text: "Custom domains", included: true },
  { text: "Advanced integrations", included: true },
  { text: "Team collaboration", included: true },
];

const enterpriseFeatures: PricingFeature[] = [
  { text: "Everything in Pro", included: true },
  { text: "Unlimited team members", included: true },
  { text: "SSO & SAML", included: true },
  { text: "Custom SLA", included: true },
  { text: "Dedicated account manager", included: true, highlight: true },
  { text: "On-premise deployment", included: true },
];

/* ─────────────────────────────────────────
   Stories
───────────────────────────────────────── */

export const Default: Story = {
  render: () => (
    <div className="flex flex-wrap items-start justify-center gap-6 p-8">
      <PricingCard
        name="Free"
        description="For side projects and experiments."
        price="Free"
        features={freeFeatures}
        ctaLabel="Start for free"
      />
      <PricingCard
        name="Pro"
        description="For growing teams and businesses."
        price="29"
        features={proFeatures}
        isPopular
      />
      <PricingCard
        name="Enterprise"
        description="For large-scale organizations."
        price="Custom"
        features={enterpriseFeatures}
        ctaLabel="Contact sales"
      />
    </div>
  ),
};

export const Filled: Story = {
  render: () => (
    <div className="flex flex-wrap items-start justify-center gap-6 p-8">
      <PricingCard
        name="Free"
        description="For side projects and experiments."
        price="Free"
        features={freeFeatures}
        ctaLabel="Start for free"
      />
      <PricingCard
        name="Pro"
        description="For growing teams and businesses."
        price="29"
        features={proFeatures}
        isPopular
        variant="filled"
      />
      <PricingCard
        name="Enterprise"
        description="For large-scale organizations."
        price="Custom"
        features={enterpriseFeatures}
        ctaLabel="Contact sales"
      />
    </div>
  ),
};

export const CustomColors: Story = {
  render: () => (
    <div className="flex flex-wrap items-start justify-center gap-6 p-8">
      <PricingCard
        name="Basic"
        description="Get started quickly."
        price="9"
        features={freeFeatures}
        accentColor="#0ea5e9"
        ctaLabel="Start basic"
      />
      <PricingCard
        name="Growth"
        description="Scale your business."
        price="49"
        features={proFeatures}
        accentColor="#f43f5e"
        isPopular
      />
      <PricingCard
        name="Scale"
        description="Enterprise-grade power."
        price="99"
        features={enterpriseFeatures}
        accentColor="#10b981"
        ctaLabel="Go big"
      />
    </div>
  ),
};

export const WithBadge: Story = {
  render: () => (
    <PricingCard
      name="Pro"
      description="Everything you need to grow."
      price="29"
      features={proFeatures}
      badge="Best value"
      variant="outlined"
    />
  ),
};

export const Disabled: Story = {
  render: () => (
    <PricingCard
      name="Coming Soon"
      description="This plan is not yet available."
      price="?"
      features={[
        { text: "AI-powered workflows", included: true },
        { text: "Predictive analytics", included: true },
        { text: "Auto-scaling", included: true },
        { text: "Quantum computing support", included: false },
      ]}
      ctaLabel="Coming soon"
      disabled
      badge="Coming soon"
    />
  ),
};
