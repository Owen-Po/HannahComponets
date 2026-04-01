import type { Meta, StoryObj } from "@storybook/react";
import { ProductCard } from "./ProductCard";

/* ─────────────────────────────────────────
   Meta
───────────────────────────────────────── */

const meta: Meta<typeof ProductCard> = {
  title: "Components/ProductCard",
  component: ProductCard,
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj<typeof ProductCard>;

/* ─────────────────────────────────────────
   Sample images (Unsplash)
───────────────────────────────────────── */

const IMG = {
  sneaker: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=750&fit=crop",
  sneaker2: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=750&fit=crop",
  sneaker3: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=750&fit=crop",
  headphones: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=750&fit=crop",
  watch: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=750&fit=crop",
  bag: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=750&fit=crop",
  jacket: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=750&fit=crop",
  sunglasses: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=750&fit=crop",
};

/* ─────────────────────────────────────────
   Stories
───────────────────────────────────────── */

export const Default: Story = {
  args: {
    image: IMG.sneaker,
    images: [IMG.sneaker, IMG.sneaker2, IMG.sneaker3],
    title: "Nike Air Max 270 React",
    subtitle: "Nike",
    price: 129,
    rating: 4.5,
    reviewCount: 128,
    badge: "New",
    onAddToCart: () => {},
    onWishlist: () => {},
  },
};

export const OnSale: Story = {
  args: {
    image: IMG.headphones,
    title: "Sony WH-1000XM5 Wireless",
    subtitle: "Sony",
    price: 149,
    originalPrice: 199,
    rating: 4.8,
    reviewCount: 2341,
    badge: "-25%",
    badgeVariant: "danger",
    onAddToCart: () => {},
    onWishlist: () => {},
  },
};

export const Minimal: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4" style={{ maxWidth: 900 }}>
      <ProductCard variant="minimal" image={IMG.sneaker} title="Air Max 270" subtitle="Nike" price={129} onWishlist={() => {}} />
      <ProductCard variant="minimal" image={IMG.watch} title="Classic Timepiece" subtitle="Mondaine" price={89} onWishlist={() => {}} />
      <ProductCard variant="minimal" image={IMG.bag} title="Explorer Backpack" subtitle="Herschel" price={64} originalPrice={80} onWishlist={() => {}} />
      <ProductCard variant="minimal" image={IMG.sunglasses} title="Round Frames" subtitle="Ray-Ban" price={154} onWishlist={() => {}} isWishlisted />
    </div>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <div className="flex flex-col gap-3" style={{ maxWidth: 480 }}>
      <ProductCard variant="horizontal" image={IMG.watch} title="Minimalist Analog Watch" subtitle="Mondaine" price={89} rating={4.2} reviewCount={56} onWishlist={() => {}} />
      <ProductCard variant="horizontal" image={IMG.headphones} title="Sony WH-1000XM5" subtitle="Sony" price={149} originalPrice={199} rating={4.8} reviewCount={2341} onWishlist={() => {}} isWishlisted />
      <ProductCard variant="horizontal" image={IMG.bag} title="Urban Explorer Backpack" subtitle="Herschel" price={64} rating={3.9} reviewCount={19} onWishlist={() => {}} />
    </div>
  ),
};

export const Featured: Story = {
  args: {
    image: IMG.jacket,
    title: "Premium Leather Jacket",
    subtitle: "All Saints",
    price: 399,
    variant: "featured",
    onAddToCart: () => {},
    onWishlist: () => {},
  },
  decorators: [(Story) => <div style={{ maxWidth: 400 }}><Story /></div>],
};

export const OutOfStock: Story = {
  args: {
    image: IMG.sneaker,
    title: "Nike Air Max 270 React",
    subtitle: "Nike",
    price: 129,
    rating: 4.5,
    reviewCount: 128,
    inStock: false,
    onWishlist: () => {},
  },
};

export const Grid: Story = {
  name: "Showcase · Product Grid",
  render: () => (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4" style={{ maxWidth: 1100 }}>
      <ProductCard
        image={IMG.sneaker}
        images={[IMG.sneaker, IMG.sneaker2, IMG.sneaker3]}
        title="Air Max 270 React"
        subtitle="Nike"
        price={129}
        rating={4.5}
        reviewCount={128}
        badge="New"
        onAddToCart={() => {}}
        onWishlist={() => {}}
      />
      <ProductCard
        image={IMG.headphones}
        title="WH-1000XM5 Wireless"
        subtitle="Sony"
        price={149}
        originalPrice={199}
        rating={4.8}
        reviewCount={2341}
        badge="-25%"
        badgeVariant="danger"
        onAddToCart={() => {}}
        onWishlist={() => {}}
      />
      <ProductCard
        image={IMG.watch}
        title="Classic Timepiece 40mm"
        subtitle="Mondaine"
        price={89}
        rating={4.2}
        reviewCount={56}
        onAddToCart={() => {}}
        onWishlist={() => {}}
      />
      <ProductCard
        image={IMG.bag}
        title="Explorer Backpack"
        subtitle="Herschel"
        price={64}
        rating={3.9}
        reviewCount={19}
        badge="Sale"
        badgeVariant="success"
        onAddToCart={() => {}}
        onWishlist={() => {}}
        isWishlisted
      />
    </div>
  ),
};
