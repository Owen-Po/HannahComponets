import { type FC, useState } from "react";
import { PaymentMethodCard, type PaymentType } from "./PaymentMethodCard";
import { cn } from "../../utils/cn";

interface PaymentOption {
  id: string;
  type: PaymentType;
  lastFour?: string;
  expiry?: string;
}

export interface PaymentFormProps {
  options?: PaymentOption[];
  defaultSelected?: string;
  onChange?: (id: string) => void;
  className?: string;
}

const defaultOptions: PaymentOption[] = [
  { id: "visa-1", type: "visa", lastFour: "4242", expiry: "12/26" },
  { id: "mc-1", type: "mastercard", lastFour: "8888", expiry: "03/27" },
  { id: "paypal-1", type: "paypal" },
  { id: "apple-1", type: "apple" },
];

export const PaymentForm: FC<PaymentFormProps> = ({
  options = defaultOptions,
  defaultSelected,
  onChange,
  className,
}) => {
  const [selected, setSelected] = useState(defaultSelected ?? options[0]?.id ?? "");

  const handleSelect = (id: string) => {
    setSelected(id);
    onChange?.(id);
  };

  return (
    <div className={cn("w-full max-w-2xl", className)}>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
        Método de pago
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        Selecciona cómo deseas realizar el pago.
      </p>

      <div role="radiogroup" aria-label="Métodos de pago" className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map((opt) => (
          <PaymentMethodCard
            key={opt.id}
            type={opt.type}
            lastFour={opt.lastFour}
            expiry={opt.expiry}
            isSelected={selected === opt.id}
            onSelect={() => handleSelect(opt.id)}
          />
        ))}
      </div>
    </div>
  );
};

PaymentForm.displayName = "PaymentForm";
