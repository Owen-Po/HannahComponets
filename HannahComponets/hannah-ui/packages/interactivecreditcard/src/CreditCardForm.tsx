import { type FC, type ChangeEvent, useState } from "react";
import { InteractiveCreditCard, formatCardNumber, type CardBank } from "./InteractiveCreditCard";
import { cn } from "@hannah-ui/core";

export interface CreditCardFormProps {
  /** Banco emisor — aplica tema visual a la tarjeta */
  bank?: CardBank;
  onSubmit?: (data: { cardNumber: string; cardHolder: string; expiryDate: string; cvv: string; bank: CardBank }) => void;
  className?: string;
}

const banks: { value: CardBank; label: string }[] = [
  { value: "none", label: "Sin banco" },
  { value: "bcp", label: "BCP" },
  { value: "interbank", label: "Interbank" },
  { value: "bbva", label: "BBVA" },
  { value: "scotiabank", label: "Scotiabank" },
  { value: "banbif", label: "BanBif" },
  { value: "falabella", label: "Falabella" },
  { value: "ripley", label: "Ripley" },
];

export const CreditCardForm: FC<CreditCardFormProps> = ({ bank: initialBank = "bcp", onSubmit, className }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cvvFocused, setCvvFocused] = useState(false);
  const [bank, setBank] = useState<CardBank>(initialBank);

  const handleNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "").slice(0, 16);
    setCardNumber(raw);
  };

  const handleExpiryChange = (e: ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, "").slice(0, 4);
    if (val.length >= 3) val = val.slice(0, 2) + "/" + val.slice(2);
    setExpiryDate(val);
  };

  const handleCvvChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCvv(e.target.value.replace(/\D/g, "").slice(0, 4));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.({ cardNumber, cardHolder, expiryDate, cvv, bank });
  };

  const inputClass = cn(
    "w-full h-11 px-4 text-sm font-medium rounded-xl border outline-none transition-all duration-200",
    "bg-white dark:bg-gray-900",
    "border-gray-300 dark:border-gray-700",
    "text-gray-900 dark:text-white",
    "placeholder:text-gray-400 dark:placeholder:text-gray-600",
    "focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800",
  );

  const labelClass = "block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5";

  return (
    <div className={cn("w-full max-w-[440px]", className)}>
      {/* Card preview */}
      <div className="flex justify-center mb-8">
        <InteractiveCreditCard
          cardNumber={cardNumber}
          cardHolder={cardHolder}
          expiryDate={expiryDate}
          cvv={cvv}
          isCvvFocused={cvvFocused}
          bank={bank}
        />
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Bank selector */}
        <div>
          <label className={labelClass}>Banco emisor</label>
          <select
            value={bank}
            onChange={(e) => setBank(e.target.value as CardBank)}
            className={cn(inputClass, "cursor-pointer")}
          >
            {banks.map((b) => (
              <option key={b.value} value={b.value}>{b.label}</option>
            ))}
          </select>
        </div>

        {/* Card number */}
        <div>
          <label className={labelClass}>Número de tarjeta</label>
          <input
            type="text"
            inputMode="numeric"
            placeholder="1234 5678 9012 3456"
            value={formatCardNumber(cardNumber)}
            onChange={handleNumberChange}
            maxLength={19}
            autoComplete="cc-number"
            className={cn(inputClass, "font-mono tracking-wider")}
          />
        </div>

        {/* Card holder */}
        <div>
          <label className={labelClass}>Titular</label>
          <input
            type="text"
            placeholder="NOMBRE COMO APARECE EN LA TARJETA"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
            maxLength={30}
            autoComplete="cc-name"
            className={inputClass}
          />
        </div>

        {/* Expiry + CVV */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Vencimiento</label>
            <input
              type="text"
              inputMode="numeric"
              placeholder="MM/AA"
              value={expiryDate}
              onChange={handleExpiryChange}
              maxLength={5}
              autoComplete="cc-exp"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>CVV</label>
            <input
              type="text"
              inputMode="numeric"
              placeholder="•••"
              value={cvv}
              onChange={handleCvvChange}
              onFocus={() => setCvvFocused(true)}
              onBlur={() => setCvvFocused(false)}
              maxLength={4}
              autoComplete="cc-csc"
              className={cn(inputClass, "font-mono tracking-widest")}
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className={cn(
            "w-full h-12 rounded-xl text-sm font-bold tracking-wide text-white",
            "bg-blue-600 hover:bg-blue-700 active:scale-[0.98]",
            "transition-all duration-200",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2",
          )}
        >
          Pagar ahora
        </button>
      </form>
    </div>
  );
};

CreditCardForm.displayName = "CreditCardForm";
