import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ProductQuickView, type ProductQuickViewProps } from "./ProductQuickView";

const meta: Meta<typeof ProductQuickView> = {
  title: "Components/ProductQuickView",
  component: ProductQuickView,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof ProductQuickView>;

/* ─── Wrapper to manage open state ─────── */

function Wrapper(props: Omit<ProductQuickViewProps, "isOpen" | "onClose">) {
  const [open, setOpen] = useState(true);
  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 rounded-lg bg-neutral-800 text-white text-sm"
      >
        Open Quick View
      </button>
      <ProductQuickView {...props} isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}

/* ─── Stories ───────────────────────────── */

export const Default: Story = {
  render: () => (
    <Wrapper
      image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80"
      images={[
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80",
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80",
      ]}
      title="Nike Air Max 270 React"
      description="Combining two of Nike's best technologies, the Air Max 270 React delivers an exceptionally smooth ride with a striking visual experience."
      price={129.99}
      originalPrice={179.99}
      rating={4.5}
      reviewCount={2341}
      variants={[
        {
          label: "Color",
          options: [
            { value: "#1a1a1a" },
            { value: "#e5e5e5" },
            { value: "#dc2626" },
            { value: "#2563eb", available: false },
          ],
        },
        {
          label: "Size",
          options: [
            { value: "US 7" },
            { value: "US 8" },
            { value: "US 9" },
            { value: "US 10", available: false },
            { value: "US 11" },
          ],
        },
      ]}
      selectedVariants={{ Color: "#1a1a1a", Size: "US 9" }}
      onVariantChange={() => {}}
      onAddToCart={() => alert("Added to cart!")}
      onViewDetails={() => alert("View details")}
    />
  ),
};

export const SingleImage: Story = {
  render: () => (
    <Wrapper
      image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80"
      title="Minimalist Watch"
      description="A sleek and modern timepiece for everyday wear."
      price={89.0}
      rating={4}
      reviewCount={128}
      onAddToCart={() => {}}
    />
  ),
};

export const OutOfStock: Story = {
  render: () => (
    <Wrapper
      image="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80"
      title="Limited Edition Headphones"
      description="Premium noise-cancelling headphones with studio-quality sound."
      price={349.99}
      originalPrice={449.99}
      rating={5}
      reviewCount={56}
      inStock={false}
      onAddToCart={() => {}}
    />
  ),
};

export const NoVariants: Story = {
  render: () => (
    <Wrapper
      image="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&q=80"
      title="Polaroid Camera"
      description="Capture your favorite moments with this vintage-inspired instant camera."
      price={64.99}
      rating={4}
      reviewCount={890}
      onAddToCart={() => {}}
      onViewDetails={() => {}}
    />
  ),
};
