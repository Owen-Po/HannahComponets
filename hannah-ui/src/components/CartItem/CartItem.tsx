import { Minus, Plus, Trash2 } from "lucide-react";
import { cn } from "../../utils/cn";

export interface CartItemProps {
  image: string;
  title: string;
  variant?: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  maxQuantity?: number;
  currency?: string;
  onQuantityChange?: (qty: number) => void;
  onRemove?: () => void;
  disabled?: boolean;
  accentColor?: string;
  removeLabel?: string;
  className?: string;
}

export function CartItem({
  image,
  title,
  variant,
  price,
  originalPrice,
  quantity,
  maxQuantity = 99,
  currency = "$",
  onQuantityChange,
  onRemove,
  disabled = false,
  accentColor = "#7c6aff",
  removeLabel = "Remove",
  className,
}: CartItemProps) {
  const fmt = (v: number) =>
    `${currency}${v.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  const handleDecrement = () => {
    if (quantity > 1) onQuantityChange?.(quantity - 1);
  };

  const handleIncrement = () => {
    if (quantity < maxQuantity) onQuantityChange?.(quantity + 1);
  };

  return (
    <div
      className={cn(
        "flex items-center gap-4 border-b border-neutral-800 py-4 transition-opacity",
        disabled && "pointer-events-none opacity-50",
        className,
      )}
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="h-20 w-20 shrink-0 rounded-xl object-cover"
      />

      {/* Info */}
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <span className="truncate text-sm font-semibold text-neutral-100">
          {title}
        </span>
        {variant && (
          <span className="text-xs text-neutral-400">{variant}</span>
        )}
        <div className="flex items-center gap-2 md:hidden">
          {originalPrice && originalPrice > price ? (
            <>
              <span className="text-sm font-bold text-neutral-100">
                {fmt(price)}
              </span>
              <span className="text-xs text-neutral-500 line-through">
                {fmt(originalPrice)}
              </span>
            </>
          ) : (
            <span className="text-sm font-bold text-neutral-100">
              {fmt(price)}
            </span>
          )}
        </div>
      </div>

      {/* Quantity controls */}
      <div className="flex items-center gap-0.5 rounded-full border border-neutral-700 bg-neutral-800/60">
        <button
          type="button"
          aria-label="Decrease quantity"
          disabled={disabled || quantity <= 1}
          onClick={handleDecrement}
          className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-neutral-700 hover:text-neutral-100 disabled:opacity-30"
        >
          <Minus size={14} />
        </button>
        <span className="min-w-[2rem] text-center text-sm font-medium text-neutral-100">
          {quantity}
        </span>
        <button
          type="button"
          aria-label="Increase quantity"
          disabled={disabled || quantity >= maxQuantity}
          onClick={handleIncrement}
          className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-neutral-700 hover:text-neutral-100 disabled:opacity-30"
        >
          <Plus size={14} />
        </button>
      </div>

      {/* Price (desktop) */}
      <div className="hidden w-24 flex-col items-end gap-0.5 md:flex">
        {originalPrice && originalPrice > price ? (
          <>
            <span className="text-sm font-bold text-neutral-100">
              {fmt(price)}
            </span>
            <span className="text-xs text-neutral-500 line-through">
              {fmt(originalPrice)}
            </span>
          </>
        ) : (
          <span className="text-sm font-bold text-neutral-100">
            {fmt(price)}
          </span>
        )}
      </div>

      {/* Remove */}
      <button
        type="button"
        aria-label={removeLabel}
        title={removeLabel}
        disabled={disabled}
        onClick={onRemove}
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-neutral-500 transition-colors hover:bg-red-500/10 hover:text-red-400"
        style={{ "--accent": accentColor } as React.CSSProperties}
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}
