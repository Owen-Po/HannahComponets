import type { Meta, StoryObj } from "@storybook/react";
import { CategoryShowcase } from "./CategoryShowcase";

/* ─────────────────────────────────────────
   Meta
───────────────────────────────────────── */
const meta: Meta<typeof CategoryShowcase> = {
  title: "Components/CategoryShowcase",
  component: CategoryShowcase,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof CategoryShowcase>;

/* ─────────────────────────────────────────
   Sample data
───────────────────────────────────────── */
const categories = [
  {
    id: "electronics",
    label: "Electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=600&fit=crop",
    itemCount: 124,
    description: "Latest gadgets & devices",
  },
  {
    id: "fashion",
    label: "Fashion",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=600&fit=crop",
    itemCount: 256,
    description: "Trending styles for everyone",
  },
  {
    id: "home",
    label: "Home & Living",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop",
    itemCount: 89,
    description: "Furniture & decor",
  },
  {
    id: "sports",
    label: "Sports",
    image: "https://images.unsplash.com/photo-1461896836934-bd45ba8fcfdb?w=600&h=600&fit=crop",
    itemCount: 178,
  },
  {
    id: "books",
    label: "Books",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=600&fit=crop",
    itemCount: 432,
  },
  {
    id: "beauty",
    label: "Beauty",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop",
    itemCount: 67,
  },
];

/* ─────────────────────────────────────────
   Stories
───────────────────────────────────────── */
export const Grid: Story = {
  args: {
    categories,
    variant: "grid",
    columns: 3,
  },
};

export const Scroll: Story = {
  args: {
    categories,
    variant: "scroll",
  },
};

export const Featured: Story = {
  args: {
    categories,
    variant: "featured",
  },
};

export const Portrait: Story = {
  args: {
    categories: categories.slice(0, 4),
    variant: "grid",
    columns: 4,
    aspectRatio: "portrait",
  },
};
