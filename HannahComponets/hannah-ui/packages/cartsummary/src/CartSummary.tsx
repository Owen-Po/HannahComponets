import { Lock, Loader2, Tag } from "lucide-react";
import { cn } from "@hannah-ui/core";

export interface CartSummaryPromoCode {
  value: string;
  onChange: (v: string) => void;
  onApply: () => void;
  applied?: boolean;
  applyLabel?: string;
  placeholder?: string;
}

export interface CartSummaryProps {
  subtotal: number;
  shipping?: number;
  tax?: number;
  discount?: number;
  total: number;
  currency?: string;
  items?: number;
  ctaLabel?: string;
  onCheckout?: () => void;
  loading?: boolean;
  promoCode?: CartSummaryPromoCode;
  accentColor?: string;
  freeShippingLabel?: string;
  subtotalLabel?: string;
  shippingLabel?: string;
  taxLabel?: string;
  discountLabel?: string;
  totalLabel?: string;
  className?: string;
}

export function CartSummary({
  subtotal,
  shipping,
  tax,
  discount,
  total,
  currency = "$",
  items,
  ctaLabel = "Checkout",
  onCheckout,
  loading = false,
  promoCode,
  accentColor = "#7c6aff",
  freeShippingLabel = "Free",
  subtotalLabel = "Subtotal",
  shippingLabel = "Shipping",
  taxLabel = "Tax",
  discountLabel = "Discount",
  totalLabel = "Total",
  className,
}: CartSummaryProps) {
  const fmt = (v: number) =>
    `${currency}${v.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  const isFreeShipping = shipping === undefined || shipping === 0;

  return (
    <div
      className={cn(
        "w-full max-w-sm rounded-2xl border border-neutral-800 bg-neutral-950 p-6",
        className,
      )}
    >
      {/* Header */}
      {items !== undefined && (
        <h3 className="mb-4 text-base font-semibold text-neutral-100">
          Order Summary
          <span className="ml-2 text-sm font-normal text-neutral-500">
            ({items} {items === 1 ? "item" : "items"})
          </span>
        </h3>
      )}

      {/* Line items */}
      <div className="flex flex-col gap-3 text-sm">
        <Row label={subtotalLabel} value={fmt(subtotal)} />
        <Row
          label={shippingLabel}
          value={isFreeShipping ? freeShippingLabel : fmt(shipping!)}
          valueClassName={isFreeShipping ? "text-emerald-400" : undefined}
        />
        {tax !== undefined && <Row label={taxLabel} value={fmt(tax)} />}
        {discount !== undefined && discount > 0 && (
          <Row
            label={discountLabel}
            value={`-${fmt(discount)}`}
            valueClassName="text-emerald-400"
          />
        )}
      </div>

      {/* Promo code */}
      {promoCode && (
        <div className="mt-4 flex gap-2">
          <div className="relative flex-1">
            <Tag
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"
            />
            <input
              type="text"
              value={promoCode.value}
              onChange={(e) => promoCode.onChange(e.target.value)}
              placeholder={promoCode.placeholder ?? "Promo code"}
              disabled={promoCode.applied}
              className={cn(
                "h-9 w-full rounded-lg border border-neutral-700 bg-neutral-900 pl-9 pr-3 text-sm text-neutral-100 placeholder:text-neutral-500 outline-none transition-colors focus:border-neutral-500",
                promoCode.applied && "border-emerald-700 bg-emerald-950/30 text-emerald-300",
              )}
            />
          </div>
          <button
            type="button"
            onClick={promoCode.onApply}
            disabled={promoCode.applied || !promoCode.value}
            className="h-9 shrink-0 rounded-lg px-3 text-sm font-medium text-white transition-opacity hover:opacity-80 disabled:opacity-40"
            style={{ backgroundColor: accentColor }}
          >
            {promoCode.applied ? "Applied" : (promoCode.applyLabel ?? "Apply")}
          </button>
        </div>
      )}

      {/* Total */}
      <div className="mt-4 flex items-center justify-between border-t border-neutral-800 pt-4">
        <span className="text-base font-semibold text-neutral-100">
          {totalLabel}
        </span>
        <span className="text-lg font-bold text-neutral-100">{fmt(total)}</span>
      </div>

      {/* CTA */}
      <button
        type="button"
        onClick={onCheckout}
        disabled={loading}
        className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
        style={{ backgroundColor: accentColor }}
      >
        {loading ? (
          <Loader2 size={18} className="animate-spin" />
        ) : (
          ctaLabel
        )}
      </button>

      {/* Secure badge */}
      <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-neutral-500">
        <Lock size={12} />
        Secure checkout
      </p>
    </div>
  );
}

/* ── Helper ── */

function Row({
  label,
  value,
  valueClassName,
}: {
  label: string;
  value: string;
  valueClassName?: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-neutral-400">{label}</span>
      <span className={cn("font-medium text-neutral-200", valueClassName)}>
        {value}
      </span>
    </div>
  );
}
