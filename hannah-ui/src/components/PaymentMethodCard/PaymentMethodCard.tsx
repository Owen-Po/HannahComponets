import { type FC, type KeyboardEvent, type ReactElement } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

/* ─────────────────────────────────────────
   Card icons (inline SVGs para zero deps)
───────────────────────────────────────── */
const CardIcon: FC<{ type: PaymentType }> = ({ type }) => {
  const icons: Record<PaymentType, ReactElement> = {
    visa: (
      <svg viewBox="0 0 48 32" className="w-10 h-7" aria-hidden="true">
        <rect width="48" height="32" rx="4" fill="#1A1F71" />
        <text x="24" y="20" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">VISA</text>
      </svg>
    ),
    mastercard: (
      <svg viewBox="0 0 48 32" className="w-10 h-7" aria-hidden="true">
        <rect width="48" height="32" rx="4" fill="#252525" />
        <circle cx="19" cy="16" r="8" fill="#EB001B" />
        <circle cx="29" cy="16" r="8" fill="#F79E1B" />
        <path d="M24 10.3a8 8 0 010 11.4 8 8 0 000-11.4z" fill="#FF5F00" />
      </svg>
    ),
    paypal: (
      <svg viewBox="0 0 48 32" className="w-10 h-7" aria-hidden="true">
        <rect width="48" height="32" rx="4" fill="#003087" />
        <text x="24" y="20" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold" fontFamily="sans-serif">PayPal</text>
      </svg>
    ),
    apple: (
      <svg viewBox="0 0 48 32" className="w-10 h-7" aria-hidden="true">
        <rect width="48" height="32" rx="4" fill="#000" />
        <text x="24" y="20" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold" fontFamily="sans-serif"> Pay</text>
      </svg>
    ),
  };
  return icons[type];
};

/* ─────────────────────────────────────────
   CVA
───────────────────────────────────────── */
const card = cva(
  [
    "relative flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer",
    "transition-all duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2",
  ],
  {
    variants: {
      selected: {
        true: "border-blue-600 bg-blue-50 shadow-md dark:bg-blue-950/30 dark:border-blue-500",
        false: "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:hover:border-gray-600",
      },
    },
    defaultVariants: { selected: false },
  },
);

const radio = cva(
  [
    "shrink-0 w-5 h-5 rounded-full border-2 transition-all duration-200",
    "flex items-center justify-center",
  ],
  {
    variants: {
      selected: {
        true: "border-blue-600 dark:border-blue-500",
        false: "border-gray-300 dark:border-gray-600",
      },
    },
    defaultVariants: { selected: false },
  },
);

/* ─────────────────────────────────────────
   Types
───────────────────────────────────────── */
export type PaymentType = "visa" | "mastercard" | "paypal" | "apple";

export interface PaymentMethodCardProps extends Omit<VariantProps<typeof card>, "selected"> {
  type: PaymentType;
  lastFour?: string;
  expiry?: string;
  isSelected?: boolean;
  onSelect?: () => void;
  accentColor?: string;
  endingInLabel?: string;
  expiresLabel?: string;
  activeLabel?: string;
  className?: string;
}

const typeLabels: Record<PaymentType, string> = {
  visa: "Visa",
  mastercard: "Mastercard",
  paypal: "PayPal",
  apple: "Apple Pay",
};

/* ─────────────────────────────────────────
   Component
───────────────────────────────────────── */
export const PaymentMethodCard: FC<PaymentMethodCardProps> = ({
  type,
  lastFour,
  expiry,
  isSelected = false,
  onSelect,
  accentColor = "#2563eb",
  endingInLabel = "terminada en",
  expiresLabel = "Expira",
  activeLabel = "Activo",
  className,
}) => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect?.();
    }
  };

  return (
    <div
      role="radio"
      aria-checked={isSelected}
      aria-label={`${typeLabels[type]}${lastFour ? ` ${endingInLabel} ${lastFour}` : ""}`}
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={handleKeyDown}
      className={cn(card({ selected: isSelected }), className)}
      style={isSelected ? { borderColor: accentColor, backgroundColor: `${accentColor}10` } : undefined}
    >
      {/* Radio indicator */}
      <div className={cn(radio({ selected: isSelected }))} style={isSelected ? { borderColor: accentColor } : undefined}>
        {isSelected && (
          <span className="w-2.5 h-2.5 rounded-full animate-in zoom-in-50 duration-200" style={{ backgroundColor: accentColor }} />
        )}
      </div>

      {/* Card icon */}
      <CardIcon type={type} />

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-900 dark:text-white">
          {typeLabels[type]}
          {lastFour && (
            <span className="ml-1.5 font-mono text-gray-500 dark:text-gray-400">
              •••• {lastFour}
            </span>
          )}
        </p>
        {expiry && (
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            {expiresLabel} {expiry}
          </p>
        )}
      </div>

      {/* Selected badge */}
      {isSelected && (
        <span className="shrink-0 px-2 py-0.5 rounded-full text-xs font-medium" style={{ backgroundColor: `${accentColor}20`, color: accentColor }}>
          {activeLabel}
        </span>
      )}
    </div>
  );
};

PaymentMethodCard.displayName = "PaymentMethodCard";
