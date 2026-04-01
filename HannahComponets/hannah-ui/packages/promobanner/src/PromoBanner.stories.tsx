import type { Meta, StoryObj } from "@storybook/react";
import { PromoBanner } from "./PromoBanner";

/* ─────────────────────────────────────────
   Meta
───────────────────────────────────────── */
const meta: Meta<typeof PromoBanner> = {
  title: "Components/PromoBanner",
  component: PromoBanner,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof PromoBanner>;

/* ─────────────────────────────────────────
   Stories
───────────────────────────────────────── */
export const Hero: Story = {
  args: {
    title: "Summer Sale",
    subtitle: "Limited time offer",
    description:
      "Up to 60% off on selected items. Refresh your wardrobe with this season's hottest trends.",
    ctaLabel: "Shop Now",
    ctaOnClick: () => {},
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop",
    variant: "hero",
  },
};

export const Banner: Story = {
  args: {
    title: "Flash Sale — 48h Only",
    subtitle: "Don't miss out",
    description: "Exclusive deals on premium brands. Use code FLASH48 at checkout.",
    ctaLabel: "Browse Deals",
    ctaOnClick: () => {},
    variant: "banner",
  },
};

export const Strip: Story = {
  args: {
    title: "Free shipping on orders over $50",
    ctaLabel: "Learn More",
    ctaOnClick: () => {},
    variant: "strip",
    dismissible: true,
    onDismiss: () => {},
  },
};

export const WithSecondary: Story = {
  args: {
    title: "New Collection",
    subtitle: "Spring 2026",
    description: "Discover our latest arrivals crafted with sustainable materials.",
    ctaLabel: "Shop Women",
    ctaOnClick: () => {},
    secondaryCta: { label: "Shop Men", onClick: () => {} },
    variant: "hero",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop",
  },
};

export const GradientCustom: Story = {
  args: {
    title: "Exclusive Members Deal",
    subtitle: "VIP Access",
    description: "Get early access to our upcoming drops and member-only pricing.",
    ctaLabel: "Join Free",
    ctaOnClick: () => {},
    variant: "banner",
    gradient: ["#e44d26", "#f7b733"],
  },
};
