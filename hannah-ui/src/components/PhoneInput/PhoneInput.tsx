import { forwardRef } from "react";
import PhoneInputOriginal, { type Value } from "react-phone-number-input";
import "react-phone-number-input/style.css";

export interface PhoneInputProps {
  value?: string;
  onChange?: (value: Value) => void;
  defaultCountry?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  className?: string;
}

export const PhoneInput = forwardRef<any, PhoneInputProps>(
  ({ className = "", error, onChange, value, defaultCountry = "PE", placeholder = "Número de teléfono", disabled, ...props }, ref) => {
    const parsedValue = value
      ? (String(value).startsWith("+") ? String(value) : `+51${value}`)
      : undefined;

    return (
      <div className={`grid gap-1.5 ${className}`}>
        <PhoneInputOriginal
          className={`flex h-10 w-full rounded-md border bg-white px-3 py-2 text-sm transition-colors focus-within:ring-2 focus-within:ring-amber-400 focus-within:border-amber-400 ${
            error ? "border-red-500" : "border-gray-200"
          } ${disabled ? "opacity-50 cursor-not-allowed" : ""} [&>.PhoneInputCountry]:mr-2 [&>input]:bg-transparent [&>input]:outline-none [&>input]:border-none [&>input]:h-full [&>input]:w-full`}
          defaultCountry={defaultCountry as any}
          limitMaxLength
          value={parsedValue as Value}
          onChange={(val) => onChange?.(val as Value)}
          placeholder={placeholder}
          disabled={disabled}
          ref={ref}
          {...props}
        />
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

PhoneInput.displayName = "PhoneInput";
