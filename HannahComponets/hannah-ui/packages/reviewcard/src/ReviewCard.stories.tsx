import type { Meta, StoryObj } from "@storybook/react";
import { ReviewCard } from "./ReviewCard";

const meta: Meta<typeof ReviewCard> = {
  title: "Components/ReviewCard",
  component: ReviewCard,
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <div className="max-w-xl mx-auto p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ReviewCard>;

/* ─── Stories ───────────────────────────── */

export const Default: Story = {
  args: {
    author: "Sarah Mitchell",
    rating: 5,
    date: "March 15, 2026",
    title: "Absolutely love these!",
    content:
      "These are hands down the most comfortable sneakers I've ever owned. The cushioning is incredible and they look even better in person. Highly recommend for anyone looking for style and comfort.",
    verified: true,
  },
};

export const WithImages: Story = {
  args: {
    author: "James Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 4,
    date: "February 28, 2026",
    title: "Great quality, minor fit issue",
    content:
      "The build quality is excellent and the materials feel premium. Runs slightly small so I'd recommend going half a size up. Colors are vibrant and match the product photos perfectly.",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&q=80",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=200&q=80",
    ],
    verified: true,
  },
};

export const WithResponse: Story = {
  args: {
    author: "Emily Rodriguez",
    rating: 3,
    date: "January 10, 2026",
    title: "Decent but expected more",
    content:
      "The product is okay but not quite what I expected from the description. The color was slightly different from the photos and shipping took longer than estimated.",
    response: {
      author: "Hannah Store",
      content:
        "Hi Emily, thank you for your feedback! We're sorry to hear about the color discrepancy. We've updated our product photos to be more accurate. Please reach out to our support team for a return or exchange.",
      date: "January 12, 2026",
    },
  },
};

export const Verified: Story = {
  args: {
    author: "Michael Park",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    rating: 5,
    date: "March 20, 2026",
    title: "Worth every penny",
    content: "Premium quality through and through. Fast shipping and beautiful packaging too.",
    verified: true,
  },
};

export const Helpful: Story = {
  args: {
    author: "Lisa Wang",
    rating: 4,
    date: "December 5, 2025",
    title: "Solid everyday sneaker",
    content:
      "Been wearing these daily for two months now and they still look and feel great. The sole has held up remarkably well on city streets. Would buy again.",
    verified: true,
    helpful: { count: 42, hasVoted: false },
  },
};

export const List: Story = {
  render: () => (
    <div className="space-y-4">
      <ReviewCard
        author="Sarah Mitchell"
        rating={5}
        date="March 15, 2026"
        title="Absolutely love these!"
        content="These are hands down the most comfortable sneakers I've ever owned. Highly recommend."
        verified
      />
      <ReviewCard
        author="James Chen"
        avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
        rating={4}
        date="February 28, 2026"
        title="Great quality"
        content="The build quality is excellent and the materials feel premium. Runs slightly small."
        helpful={{ count: 18, hasVoted: true }}
      />
      <ReviewCard
        author="Emily Rodriguez"
        rating={3}
        date="January 10, 2026"
        content="Decent but not quite what I expected. The color was slightly different from the photos."
        response={{
          author: "Hannah Store",
          content: "Hi Emily, we're sorry about the color discrepancy. Please contact support for assistance.",
          date: "January 12, 2026",
        }}
      />
    </div>
  ),
};
