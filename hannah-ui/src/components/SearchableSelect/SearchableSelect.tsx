import { useState, useMemo, useRef, useEffect } from "react";
import { Check, ChevronsUpDown, Search } from "lucide-react";

export interface SearchableSelectOption {
  value: string | number;
  label: string;
  code?: string;
}

export interface SearchableSelectProps {
  value: string | number;
  onChange: (value: string | number | null) => void;
  options?: SearchableSelectOption[];
  placeholder?: string;
  disabled?: boolean;
  emptyMessage?: string;
  allowEmpty?: boolean;
  emptyLabel?: string;
  className?: string;
  allowCustom?: boolean;
}

export const SearchableSelect = ({
  value,
  onChange,
  options = [],
  placeholder = "Buscar y seleccionar...",
  disabled = false,
  emptyMessage = "No se encontraron resultados.",
  allowEmpty = true,
  emptyLabel = "Todos",
  className = "",
  allowCustom = false,
}: SearchableSelectProps) => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    if (open) {
      document.addEventListener("mousedown", handler);
      return () => document.removeEventListener("mousedown", handler);
    }
  }, [open]);

  const filteredOptions = useMemo(() => {
    let opts = options;
    if (query) {
      const q = query.toLowerCase();
      opts = options.filter((o) => o.label.toLowerCase().includes(q) || o.code?.toLowerCase().includes(q));
    }
    const result: SearchableSelectOption[] = [];
    if (allowEmpty) result.push({ value: "", label: emptyLabel });
    result.push(...opts);
    if (allowCustom && query && !opts.some((o) => o.label.toLowerCase() === query.toLowerCase())) {
      result.push({ value: query, label: `Usar: "${query}"` });
    }
    return result;
  }, [options, query, allowEmpty, emptyLabel, allowCustom]);

  const selectedLabel = options.find((o) => String(o.value) === String(value))?.label || (allowCustom && value ? String(value) : "");

  const handleSelect = (optValue: string | number) => {
    onChange(optValue === "" ? null : optValue);
    setQuery("");
    setOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={ref}>
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          className={`w-full border border-gray-200 rounded-lg p-2.5 pr-10 text-sm focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"}`}
          placeholder={placeholder}
          value={open ? query : selectedLabel}
          onChange={(e) => { setQuery(e.target.value); if (!open) setOpen(true); }}
          onFocus={() => { setOpen(true); setQuery(""); }}
          disabled={disabled}
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center pr-2"
          onClick={() => { if (!disabled) { setOpen(!open); if (!open) inputRef.current?.focus(); } }}
        >
          <ChevronsUpDown className="h-4 w-4 text-gray-400" />
        </button>
      </div>

      {open && (
        <div className="absolute z-50 mt-1 w-full max-h-60 overflow-auto rounded-lg bg-white border border-gray-200 shadow-lg">
          {filteredOptions.length === 0 ? (
            <div className="flex items-center gap-2 px-4 py-3 text-sm text-gray-500">
              <Search className="h-4 w-4 text-gray-400" />
              {emptyMessage}
            </div>
          ) : (
            filteredOptions.map((option) => {
              const isSelected = String(option.value) === String(value);
              return (
                <button
                  key={String(option.value)}
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm text-left transition-colors ${
                    isSelected ? "bg-amber-50 text-amber-800 font-medium" : "text-gray-900 hover:bg-gray-50"
                  } ${option.value === "" ? "font-medium border-b border-gray-100" : ""}`}
                >
                  <span className="w-4 shrink-0">
                    {isSelected && <Check className="h-4 w-4 text-amber-600" />}
                  </span>
                  <span className="flex-1 truncate">
                    {option.label}
                    {option.code && <span className="text-gray-400 ml-2">({option.code})</span>}
                  </span>
                </button>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};
