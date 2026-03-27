import { type FC } from "react";
import { cn } from "../../utils/cn";

/* ─────────────────────────────────────────
   Card brand detection (red de la tarjeta)
───────────────────────────────────────── */
export type CardBrand = "visa" | "mastercard" | "amex" | "diners" | "unknown";

export function detectCardBrand(cardNumber: string): CardBrand {
  const d = cardNumber.replace(/\D/g, "");
  if (!d) return "unknown";

  const d1 = parseInt(d[0], 10);
  const d2 = d.length >= 2 ? parseInt(d.slice(0, 2), 10) : -1;

  if (d1 === 4) return "visa";
  if (d2 >= 51 && d2 <= 55) return "mastercard";
  if (d2 >= 22 && d2 <= 27) return "mastercard";
  if (d2 === 34 || d2 === 37) return "amex";
  if (d2 === 36 || d2 === 38 || (d2 >= 30 && d2 <= 30)) return "diners";
  return "unknown";
}

/* ─────────────────────────────────────────
   Banco emisor peruano
───────────────────────────────────────── */
export type CardBank =
  | "bcp"
  | "interbank"
  | "bbva"
  | "scotiabank"
  | "banbif"
  | "falabella"
  | "ripley"
  | "none";

export function formatCardNumber(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 16);
  return digits.replace(/(.{4})/g, "$1 ").trim();
}

/* ─────────────────────────────────────────
   SVG Logos — Redes
───────────────────────────────────────── */
const VisaLogo: FC = () => (
  <svg viewBox="0 0 80 26" className="h-6" aria-label="Visa">
    <text x="0" y="22" fill="#fff" fontSize="24" fontWeight="800" fontStyle="italic" fontFamily="sans-serif">VISA</text>
  </svg>
);

const MastercardLogo: FC = () => (
  <svg viewBox="0 0 60 36" className="h-8" aria-label="Mastercard">
    <circle cx="22" cy="18" r="14" fill="#EB001B" opacity="0.9" />
    <circle cx="38" cy="18" r="14" fill="#F79E1B" opacity="0.9" />
    <path d="M30 7.5a14 14 0 010 21 14 14 0 000-21z" fill="#FF5F00" />
  </svg>
);

const AmexLogo: FC = () => (
  <svg viewBox="0 0 80 26" className="h-6" aria-label="American Express">
    <text x="0" y="22" fill="#fff" fontSize="14" fontWeight="700" fontFamily="sans-serif">AMEX</text>
  </svg>
);

const DinersLogo: FC = () => (
  <svg viewBox="0 0 100 26" className="h-6" aria-label="Diners Club">
    <text x="0" y="22" fill="#fff" fontSize="12" fontWeight="700" fontFamily="sans-serif">DINERS</text>
  </svg>
);

const BrandLogo: FC<{ brand: CardBrand }> = ({ brand }) => {
  switch (brand) {
    case "visa": return <VisaLogo />;
    case "mastercard": return <MastercardLogo />;
    case "amex": return <AmexLogo />;
    case "diners": return <DinersLogo />;
    default: return <div className="h-6 w-12 rounded bg-white/20" />;
  }
};

/* ─────────────────────────────────────────
   SVG Logos — Bancos peruanos
───────────────────────────────────────── */
const BankLogo: FC<{ bank: CardBank }> = ({ bank }) => {
  const logos: Record<Exclude<CardBank, "none">, { text: string; color: string }> = {
    bcp: { text: "BCP", color: "#ff6600" },
    interbank: { text: "INTERBANK", color: "#00b140" },
    bbva: { text: "BBVA", color: "#004481" },
    scotiabank: { text: "SCOTIABANK", color: "#ec111a" },
    banbif: { text: "BANBIF", color: "#e30613" },
    falabella: { text: "FALABELLA", color: "#8bc53f" },
    ripley: { text: "RIPLEY", color: "#6b2fa0" },
  };

  if (bank === "none") return null;

  const { text, color } = logos[bank];
  return (
    <div className="flex items-center gap-1.5">
      <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: color }}>
        <span className="text-white text-[7px] font-black">{text[0]}</span>
      </div>
      <span className="text-[11px] font-bold text-white/90 tracking-wide">{text}</span>
    </div>
  );
};

/* ─────────────────────────────────────────
   Chip SVG
───────────────────────────────────────── */
const ChipIcon: FC = () => (
  <svg viewBox="0 0 50 40" className="w-12 h-9" aria-hidden="true">
    <rect x="0" y="0" width="50" height="40" rx="6" fill="url(#chipGrad)" />
    <line x1="0" y1="14" x2="50" y2="14" stroke="#b8860b" strokeWidth="0.8" opacity="0.5" />
    <line x1="0" y1="26" x2="50" y2="26" stroke="#b8860b" strokeWidth="0.8" opacity="0.5" />
    <line x1="18" y1="0" x2="18" y2="40" stroke="#b8860b" strokeWidth="0.8" opacity="0.5" />
    <line x1="32" y1="0" x2="32" y2="40" stroke="#b8860b" strokeWidth="0.8" opacity="0.5" />
    <defs>
      <linearGradient id="chipGrad" x1="0" y1="0" x2="50" y2="40">
        <stop offset="0%" stopColor="#daa520" />
        <stop offset="50%" stopColor="#f0d060" />
        <stop offset="100%" stopColor="#daa520" />
      </linearGradient>
    </defs>
  </svg>
);

/* ─────────────────────────────────────────
   Gradients — Bancos peruanos
───────────────────────────────────────── */
const bankGradients: Record<CardBank, string> = {
  bcp:        "from-[#002a5c] via-[#003d80] to-[#ff6600]",
  interbank:  "from-[#003224] via-[#004d35] to-[#00b140]",
  bbva:       "from-[#004481] via-[#005da4] to-[#0073ce]",
  scotiabank: "from-[#7a0019] via-[#9a0022] to-[#ec111a]",
  banbif:     "from-[#1a1a2e] via-[#2d2d4a] to-[#e30613]",
  falabella:  "from-[#2d5016] via-[#3d6b1e] to-[#8bc53f]",
  ripley:     "from-[#2e0854] via-[#4a1080] to-[#6b2fa0]",
  none:       "from-gray-700 via-gray-800 to-gray-900",
};

const brandGradients: Record<CardBrand, string> = {
  visa:       "from-[#1a1f71] via-[#2d3a8c] to-[#1a1f71]",
  mastercard: "from-[#1a1a2e] via-[#16213e] to-[#0f3460]",
  amex:       "from-[#006fcf] via-[#0080e0] to-[#006fcf]",
  diners:     "from-[#0a3d6b] via-[#125a9e] to-[#0a3d6b]",
  unknown:    "from-gray-700 via-gray-800 to-gray-900",
};

/* ─────────────────────────────────────────
   Types
───────────────────────────────────────── */
export interface InteractiveCreditCardProps {
  cardNumber?: string;
  cardHolder?: string;
  expiryDate?: string;
  cvv?: string;
  isCvvFocused?: boolean;
  /** Banco emisor peruano — aplica gradiente y logo del banco */
  bank?: CardBank;
  className?: string;
}

/* ─────────────────────────────────────────
   Component
───────────────────────────────────────── */
export const InteractiveCreditCard: FC<InteractiveCreditCardProps> = ({
  cardNumber = "",
  cardHolder = "",
  expiryDate = "",
  cvv = "",
  isCvvFocused = false,
  bank = "none",
  className,
}) => {
  const brand = detectCardBrand(cardNumber);
  const formatted = formatCardNumber(cardNumber);

  const displayNumber = formatted || "•••• •••• •••• ••••";
  const displayHolder = cardHolder.toUpperCase() || "NOMBRE DEL TITULAR";
  const displayExpiry = expiryDate || "MM/AA";

  const gradient = bank !== "none" ? bankGradients[bank] : brandGradients[brand];

  return (
    <div
      className={cn("w-full max-w-[400px] aspect-[1.586/1]", className)}
      style={{ perspective: "1200px" }}
    >
      <div
        className="relative w-full h-full transition-transform duration-700 ease-in-out"
        style={{
          transformStyle: "preserve-3d",
          transform: isCvvFocused ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* ── FRONT ────────────────────────── */}
        <div
          className={cn(
            "absolute inset-0 rounded-2xl overflow-hidden",
            "bg-gradient-to-br", gradient,
            "shadow-2xl",
            "p-6 flex flex-col justify-between",
          )}
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)",
            }}
          />

          {/* Top row: bank + chip + network logo */}
          <div className="relative flex items-start justify-between">
            <div className="flex items-center gap-3">
              <ChipIcon />
              {bank !== "none" && <BankLogo bank={bank} />}
            </div>
            <BrandLogo brand={brand} />
          </div>

          {/* Card number */}
          <div className="relative">
            <p className="text-xl sm:text-2xl font-mono tracking-[0.18em] text-white drop-shadow-sm">
              {displayNumber}
            </p>
          </div>

          {/* Bottom row: holder + expiry */}
          <div className="relative flex items-end justify-between gap-4">
            <div className="flex-1 min-w-0">
              <p className="text-[10px] text-white/50 uppercase tracking-wider mb-0.5">Titular</p>
              <p className="text-sm font-medium text-white tracking-wider truncate">
                {displayHolder}
              </p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-[10px] text-white/50 uppercase tracking-wider mb-0.5">Vence</p>
              <p className="text-sm font-medium text-white font-mono tracking-wider">
                {displayExpiry}
              </p>
            </div>
          </div>
        </div>

        {/* ── BACK ─────────────────────────── */}
        <div
          className={cn(
            "absolute inset-0 rounded-2xl overflow-hidden",
            "bg-gradient-to-br", gradient,
            "shadow-2xl flex flex-col",
          )}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Magnetic strip */}
          <div className="mt-8 w-full h-12 bg-gray-950/80" />

          {/* Signature + CVV */}
          <div className="flex items-center gap-3 px-6 mt-6">
            <div className="flex-1 h-10 rounded bg-gray-200 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 3px, #999 3px, #999 4px)",
                }}
              />
              <p className="absolute right-0 top-0 bottom-0 flex items-center px-3 text-gray-700 font-mono text-base italic tracking-wider">
                {cardHolder.toUpperCase().slice(0, 20)}
              </p>
            </div>
            <div className="w-16 h-10 rounded bg-white flex items-center justify-center border border-gray-300">
              <p className="font-mono text-lg text-gray-900 font-bold tracking-wider">
                {cvv || "•••"}
              </p>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex-1 flex items-end px-6 pb-5">
            <div className="flex items-end justify-between w-full">
              <p className="text-[10px] text-white/40 leading-tight max-w-[55%]">
                Tarjeta emitida{bank !== "none" ? ` por ${bank.toUpperCase()}` : ""}.
                Su uso indebido está penalizado por la ley.
              </p>
              <div className="flex items-center gap-2">
                {bank !== "none" && <BankLogo bank={bank} />}
                <BrandLogo brand={brand} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

InteractiveCreditCard.displayName = "InteractiveCreditCard";
