import {
  type FC,
  type ReactNode,
  type ChangeEvent,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import { Search, X, ChevronDown, SlidersHorizontal, Calendar } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@hannah-ui/core";

/* ═══════════════════════════════════════════
   1. FilterSelect — Dropdown con búsqueda
═══════════════════════════════════════════ */
export interface FilterOption {
  value: string;
  label: string;
  icon?: ReactNode;
  disabled?: boolean;
}

const filterSelect = cva(
  [
    "relative inline-flex items-center gap-2 border rounded-lg text-sm font-medium cursor-pointer",
    "transition-all duration-200 outline-none",
    "focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-1",
  ],
  {
    variants: {
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-3.5",
        lg: "h-12 px-4 text-base",
      },
      variant: {
        default: [
          "bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700",
          "text-gray-700 dark:text-gray-300",
          "hover:border-gray-400 dark:hover:border-gray-600",
        ],
        filled: [
          "bg-gray-100 dark:bg-gray-800 border-transparent",
          "text-gray-700 dark:text-gray-300",
          "hover:bg-gray-200 dark:hover:bg-gray-700",
        ],
        ghost: [
          "bg-transparent border-transparent",
          "text-gray-600 dark:text-gray-400",
          "hover:bg-gray-100 dark:hover:bg-gray-800",
        ],
      },
      active: {
        true: "border-blue-500 dark:border-blue-500 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300",
        false: "",
      },
    },
    defaultVariants: { size: "md", variant: "default", active: false },
  },
);

export interface FilterSelectProps extends Omit<VariantProps<typeof filterSelect>, "active"> {
  options: FilterOption[];
  value?: string;
  onChange: (value?: string) => void;
  placeholder?: string;
  isClearable?: boolean;
  isSearchable?: boolean;
  icon?: ReactNode;
  label?: string;
  className?: string;
  accentColor?: string;
  searchPlaceholder?: string;
  noResultsText?: string;
}

export const FilterSelect: FC<FilterSelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "Seleccionar",
  isClearable = true,
  isSearchable = false,
  icon,
  label,
  size = "md",
  variant = "default",
  className,
  accentColor = "#3b82f6",
  searchPlaceholder = "Buscar...",
  noResultsText = "Sin resultados",
}) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const selected = options.find((o) => o.value === value);
  const hasValue = selected !== undefined;

  const filtered = search
    ? options.filter((o) => o.label.toLowerCase().includes(search.toLowerCase()))
    : options;

  const handleSelect = (opt: FilterOption) => {
    onChange(opt.value);
    setOpen(false);
    setSearch("");
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(undefined);
    setSearch("");
  };

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Focus search on open
  useEffect(() => {
    if (open && isSearchable) searchRef.current?.focus();
  }, [open, isSearchable]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      {label && (
        <span className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">
          {label}
        </span>
      )}

      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={cn(filterSelect({ size, variant, active: false }), "w-full justify-between")}
        style={hasValue ? { borderColor: accentColor, backgroundColor: `${accentColor}10`, color: accentColor } : undefined}
      >
        <span className="flex items-center gap-2 truncate">
          {icon && <span className="shrink-0 text-current opacity-60">{icon}</span>}
          {selected ? selected.label : placeholder}
        </span>
        <span className="flex items-center gap-1 shrink-0">
          {hasValue && isClearable && (
            <span
              role="button"
              tabIndex={-1}
              onClick={handleClear}
              className="p-0.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Limpiar"
            >
              <X className="w-3.5 h-3.5" />
            </span>
          )}
          <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", open && "rotate-180")} />
        </span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className={cn(
          "absolute z-50 mt-1 w-full min-w-[180px] rounded-xl border shadow-lg overflow-hidden",
          "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700",
          "animate-in fade-in slide-in-from-top-1 duration-150",
        )}>
          {isSearchable && (
            <div className="p-2 border-b border-gray-100 dark:border-gray-800">
              <div className="relative">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                <input
                  ref={searchRef}
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={searchPlaceholder}
                  className="w-full h-8 pl-8 pr-3 text-xs rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white outline-none"
                  onFocus={(e) => { e.currentTarget.style.borderColor = accentColor; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = ""; }}
                />
              </div>
            </div>
          )}

          <div className="max-h-52 overflow-y-auto py-1">
            {filtered.length === 0 ? (
              <p className="px-3 py-2 text-xs text-gray-400">{noResultsText}</p>
            ) : (
              filtered.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  disabled={opt.disabled}
                  onClick={() => handleSelect(opt)}
                  className={cn(
                    "w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors",
                    "disabled:opacity-40 disabled:cursor-not-allowed",
                    opt.value === value
                      ? ""
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800",
                  )}
                  style={opt.value === value ? { backgroundColor: `${accentColor}15`, color: accentColor } : undefined}
                >
                  {opt.icon && <span className="shrink-0">{opt.icon}</span>}
                  {opt.label}
                  {opt.value === value && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                  )}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

FilterSelect.displayName = "FilterSelect";

/* ═══════════════════════════════════════════
   2. FilterSearch — Input de búsqueda
═══════════════════════════════════════════ */
export interface FilterSearchProps {
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  debounceMs?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
  accentColor?: string;
  clearSearchLabel?: string;
}

export const FilterSearch: FC<FilterSearchProps> = ({
  value: externalValue,
  onChange,
  placeholder = "Buscar...",
  debounceMs = 300,
  size = "md",
  className,
  accentColor = "#3b82f6",
  clearSearchLabel = "Limpiar búsqueda",
}) => {
  const [internal, setInternal] = useState(externalValue ?? "");
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const sizeClass = size === "sm" ? "h-8 text-xs pl-8" : size === "lg" ? "h-12 text-base pl-11" : "h-10 text-sm pl-10";
  const iconSize = size === "sm" ? "w-3.5 h-3.5 left-2.5" : size === "lg" ? "w-5 h-5 left-3.5" : "w-4 h-4 left-3";

  useEffect(() => {
    if (externalValue !== undefined) setInternal(externalValue);
  }, [externalValue]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      setInternal(val);
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => onChange(val), debounceMs);
    },
    [onChange, debounceMs],
  );

  const handleClear = () => {
    setInternal("");
    onChange("");
  };

  return (
    <div className={cn("relative", className)}>
      <Search className={cn("absolute top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none", iconSize)} />
      <input
        type="text"
        value={internal}
        onChange={handleChange}
        placeholder={placeholder}
        className={cn(
          "w-full pr-9 border rounded-lg outline-none transition-all duration-200",
          "bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700",
          "text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600",
          "focus:ring-2",
          sizeClass,
        )}
        onFocus={(e) => { e.currentTarget.style.borderColor = accentColor; e.currentTarget.style.boxShadow = `0 0 0 2px ${accentColor}40`; }}
        onBlur={(e) => { e.currentTarget.style.borderColor = ""; e.currentTarget.style.boxShadow = ""; }}
      />
      {internal && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 rounded text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          aria-label={clearSearchLabel}
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

FilterSearch.displayName = "FilterSearch";

/* ═══════════════════════════════════════════
   3. FilterDateRange — Rango de fechas
═══════════════════════════════════════════ */
export interface FilterDateRangeProps {
  from?: string;
  to?: string;
  onChange: (from?: string, to?: string) => void;
  labelFrom?: string;
  labelTo?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  accentColor?: string;
}

export const FilterDateRange: FC<FilterDateRangeProps> = ({
  from,
  to,
  onChange,
  labelFrom = "Desde",
  labelTo = "Hasta",
  size = "md",
  className,
  accentColor = "#3b82f6",
}) => {
  const sizeClass = size === "sm" ? "h-8 text-xs" : size === "lg" ? "h-12 text-base" : "h-10 text-sm";
  const inputClass = cn(
    "w-full px-3 border rounded-lg outline-none transition-all duration-200",
    "bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700",
    "text-gray-900 dark:text-white",
    "focus:ring-2",
    sizeClass,
  );
  const handleDateFocus = (e: React.FocusEvent<HTMLInputElement>) => { e.currentTarget.style.borderColor = accentColor; e.currentTarget.style.boxShadow = `0 0 0 2px ${accentColor}40`; };
  const handleDateBlur = (e: React.FocusEvent<HTMLInputElement>) => { e.currentTarget.style.borderColor = ""; e.currentTarget.style.boxShadow = ""; };

  return (
    <div className={cn("flex items-end gap-2", className)}>
      <div className="flex-1">
        <span className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">
          {labelFrom}
        </span>
        <div className="relative">
          <input
            type="date"
            value={from ?? ""}
            onChange={(e) => onChange(e.target.value || undefined, to)}
            onFocus={handleDateFocus}
            onBlur={handleDateBlur}
            className={inputClass}
          />
        </div>
      </div>
      <span className="pb-2.5 text-gray-400">—</span>
      <div className="flex-1">
        <span className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">
          {labelTo}
        </span>
        <input
          type="date"
          value={to ?? ""}
          onChange={(e) => onChange(from, e.target.value || undefined)}
          onFocus={handleDateFocus}
          onBlur={handleDateBlur}
          className={inputClass}
        />
      </div>
    </div>
  );
};

FilterDateRange.displayName = "FilterDateRange";

/* ═══════════════════════════════════════════
   3b. FilterDate — Single date picker (estilo AppDatePicker)
   Uso: <FilterDate value={fecha} onChange={setFecha} placeholder="Seleccionar fecha..." />
═══════════════════════════════════════════ */
export interface FilterDateProps {
  value?: string;
  onChange: (value?: string) => void;
  placeholder?: string;
  isClearable?: boolean;
  label?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  accentColor?: string;
  clearDateLabel?: string;
}

export const FilterDate: FC<FilterDateProps> = ({
  value,
  onChange,
  placeholder = "Seleccionar fecha...",
  isClearable = true,
  label,
  size = "md",
  className,
  accentColor = "#3b82f6",
  clearDateLabel = "Limpiar fecha",
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const hasValue = !!value;

  const sizeMap = { sm: "h-8 text-xs", md: "h-10 text-sm", lg: "h-12 text-base" };
  const iconSizeMap = { sm: "w-3.5 h-3.5", md: "w-4 h-4", lg: "w-5 h-5" };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(undefined);
    if (inputRef.current) inputRef.current.value = "";
  };

  const openPicker = () => {
    inputRef.current?.showPicker?.();
    inputRef.current?.focus();
  };

  // Format date for display
  const displayValue = value
    ? new Date(value + "T00:00:00").toLocaleDateString("es-PE", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "";

  return (
    <div className={className}>
      {label && (
        <span className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">
          {label}
        </span>
      )}

      <div className="relative">
        {/* Visual button trigger */}
        <button
          type="button"
          onClick={openPicker}
          className={cn(
            "w-full flex items-center gap-2 px-3 border rounded-lg cursor-pointer",
            "transition-all duration-200 outline-none text-left",
            "focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-1",
            sizeMap[size],
            hasValue
              ? ""
              : "border-gray-300 bg-white text-gray-400 hover:border-gray-400 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-500 dark:hover:border-gray-600",
          )}
          style={hasValue ? { borderColor: accentColor, backgroundColor: `${accentColor}10`, color: accentColor } : undefined}
        >
          <Calendar className={cn("shrink-0 opacity-60", iconSizeMap[size])} />
          <span className={cn("flex-1 truncate", hasValue && "text-gray-900 dark:text-white font-medium")}>
            {displayValue || placeholder}
          </span>
          {hasValue && isClearable && (
            <span
              role="button"
              tabIndex={-1}
              onClick={handleClear}
              className="shrink-0 p-0.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={clearDateLabel}
            >
              <X className="w-3.5 h-3.5" />
            </span>
          )}
        </button>

        {/* Hidden native date input */}
        <input
          ref={inputRef}
          type="date"
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value || undefined)}
          className="absolute inset-0 opacity-0 cursor-pointer"
          tabIndex={-1}
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

FilterDate.displayName = "FilterDate";

/* ═══════════════════════════════════════════
   4. FilterChips — Multi-select con chips
═══════════════════════════════════════════ */
export interface FilterChipsProps {
  options: FilterOption[];
  value: string[];
  onChange: (value: string[]) => void;
  label?: string;
  className?: string;
  accentColor?: string;
}

export const FilterChips: FC<FilterChipsProps> = ({
  options,
  value,
  onChange,
  label,
  className,
  accentColor = "#3b82f6",
}) => {
  const toggle = (val: string) => {
    onChange(
      value.includes(val) ? value.filter((v) => v !== val) : [...value, val],
    );
  };

  return (
    <div className={className}>
      {label && (
        <span className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
          {label}
        </span>
      )}
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const isActive = value.includes(opt.value);
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => toggle(opt.value)}
              disabled={opt.disabled}
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                "disabled:opacity-40 disabled:cursor-not-allowed",
                isActive
                  ? "ring-1"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700",
              )}
              style={isActive ? { backgroundColor: `${accentColor}20`, color: accentColor, ["--tw-ring-color" as any]: `${accentColor}60` } as React.CSSProperties : undefined}
            >
              {opt.icon && <span className="shrink-0">{opt.icon}</span>}
              {opt.label}
              {isActive && <X className="w-3 h-3 ml-0.5" />}
            </button>
          );
        })}
      </div>
    </div>
  );
};

FilterChips.displayName = "FilterChips";

/* ═══════════════════════════════════════════
   5. FilterBar — Contenedor de filtros
═══════════════════════════════════════════ */
export interface FilterBarProps {
  children: ReactNode;
  onClearAll?: () => void;
  activeCount?: number;
  className?: string;
  accentColor?: string;
  filtersLabel?: string;
  clearAllLabel?: string;
}

export const FilterBar: FC<FilterBarProps> = ({
  children,
  onClearAll,
  activeCount = 0,
  className,
  accentColor = "#3b82f6",
  filtersLabel = "Filtros",
  clearAllLabel = "Limpiar todo",
}) => (
  <div
    className={cn(
      "flex flex-wrap items-end gap-3 p-4 rounded-xl border",
      "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800",
      className,
    )}
  >
    <div className="flex items-center gap-2 mr-2 shrink-0">
      <SlidersHorizontal className="w-4 h-4 text-gray-400" />
      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{filtersLabel}</span>
      {activeCount > 0 && (
        <span className="flex items-center justify-center w-5 h-5 rounded-full text-white text-[10px] font-bold" style={{ backgroundColor: accentColor }}>
          {activeCount}
        </span>
      )}
    </div>

    {children}

    {activeCount > 0 && onClearAll && (
      <button
        type="button"
        onClick={onClearAll}
        className="ml-auto text-xs font-medium text-red-500 hover:text-red-600 dark:text-red-400 transition-colors"
      >
        {clearAllLabel}
      </button>
    )}
  </div>
);

FilterBar.displayName = "FilterBar";

/* ═══════════════════════════════════════════
   6. FilterButton — Botón con popover de filtros
   Uso global: le pasas children con los filtros
   que necesites (id, nombre, fecha, etc.)
═══════════════════════════════════════════ */
export interface FilterButtonProps {
  children: ReactNode;
  /** Cantidad de filtros activos — muestra badge */
  activeCount?: number;
  /** Texto del botón */
  label?: string;
  /** Callback al limpiar todo */
  onClearAll?: () => void;
  /** Callback al aplicar (cierra el popover) */
  onApply?: () => void;
  /** Ancho del panel */
  panelWidth?: string;
  /** Alineación: izquierda o derecha */
  align?: "left" | "right";
  className?: string;
  accentColor?: string;
  clearAllLabel?: string;
  applyLabel?: string;
}

export const FilterButton: FC<FilterButtonProps> = ({
  children,
  activeCount = 0,
  label = "Filtros",
  onClearAll,
  onApply,
  panelWidth = "320px",
  align = "left",
  className,
  accentColor = "#3b82f6",
  clearAllLabel = "Limpiar todo",
  applyLabel = "Aplicar",
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  const handleApply = () => {
    onApply?.();
    setOpen(false);
  };

  return (
    <div ref={ref} className={cn("relative", className)}>
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={cn(
          "inline-flex items-center gap-2 h-10 px-4 rounded-lg border text-sm font-medium",
          "transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-1",
          open || activeCount > 0
            ? ""
            : "border-gray-300 bg-white text-gray-700 hover:border-gray-400 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-gray-600",
        )}
        style={open || activeCount > 0 ? { borderColor: accentColor, backgroundColor: `${accentColor}10`, color: accentColor } : undefined}
      >
        <SlidersHorizontal className="w-4 h-4" />
        {label}
        {activeCount > 0 && (
          <span className="flex items-center justify-center min-w-5 h-5 px-1 rounded-full text-white text-[10px] font-bold" style={{ backgroundColor: accentColor }}>
            {activeCount}
          </span>
        )}
      </button>

      {/* Popover panel */}
      {open && (
        <div
          className={cn(
            "absolute z-50 mt-2 rounded-xl border shadow-xl overflow-hidden",
            "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700",
            "animate-in fade-in slide-in-from-top-2 duration-200",
            align === "right" ? "right-0" : "left-0",
          )}
          style={{ width: panelWidth }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-semibold text-gray-800 dark:text-white">{label}</span>
              {activeCount > 0 && (
                <span className="text-xs text-gray-400 dark:text-gray-500">
                  ({activeCount} activo{activeCount > 1 ? "s" : ""})
                </span>
              )}
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:text-gray-300 dark:hover:bg-gray-800 transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Filter content — lo que sea que le pases como children */}
          <div className="p-4 space-y-4 max-h-[400px] overflow-y-auto">
            {children}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
            {onClearAll ? (
              <button
                type="button"
                onClick={onClearAll}
                className="text-xs font-medium text-red-500 hover:text-red-600 dark:text-red-400 transition-colors"
              >
                {clearAllLabel}
              </button>
            ) : (
              <span />
            )}
            <button
              type="button"
              onClick={handleApply}
              className={cn(
                "h-8 px-4 rounded-lg text-xs font-semibold text-white",
                "active:scale-[0.97]",
                "transition-all duration-200",
              )}
              style={{ backgroundColor: accentColor }}
            >
              {applyLabel}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

FilterButton.displayName = "FilterButton";
