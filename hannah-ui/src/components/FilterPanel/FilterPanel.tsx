import { useState, useRef, useEffect, type ReactNode } from "react";
import { Filter, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface FilterPanelProps {
  children: ReactNode;
  activeFiltersCount?: number;
  onClear?: () => void;
  title?: string;
  accentColor?: string;
  clearAllLabel?: string;
  openLabel?: string;
}

export const FilterPanel = ({
  children,
  activeFiltersCount = 0,
  onClear,
  title = "Filtros",
  accentColor = "#d97706",
  clearAllLabel = "Limpiar todo",
  openLabel = "Abrir filtros",
}: FilterPanelProps) => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const hasActiveFilters = activeFiltersCount > 0;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [open]);

  return (
    <div className="relative inline-block" ref={panelRef}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium border border-gray-200 rounded-lg bg-white text-gray-700 hover:bg-gray-50 hover:shadow-md hover:border-gray-300 transition-all duration-200 relative group"
        aria-label={`${openLabel}${hasActiveFilters ? ` (${activeFiltersCount} activos)` : ""}`}
      >
        <motion.div animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.2 }}>
          <Filter className="w-4 h-4 transition-colors group-hover:text-current" style={{ color: accentColor }} />
        </motion.div>
        <span className="font-medium">{title}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-3.5 h-3.5 opacity-50" />
        </motion.div>

        <AnimatePresence>
          {hasActiveFilters && (
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="absolute -top-1.5 -right-1.5 inline-flex items-center justify-center min-w-5 h-5 px-1.5 rounded-full text-white text-xs font-bold shadow-lg ring-2 ring-white"
              style={{ background: accentColor }}
            >
              {activeFiltersCount}
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute left-0 top-full mt-2 w-80 bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3.5 bg-gray-50/80">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-md" style={{ backgroundColor: `${accentColor}18` }}>
                  <Filter className="w-3.5 h-3.5" style={{ color: accentColor }} />
                </div>
                <h3 className="text-sm font-semibold tracking-tight text-gray-800">{title}</h3>
              </div>
              <AnimatePresence mode="wait">
                {hasActiveFilters && (
                  <motion.button
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    type="button"
                    onClick={() => onClear?.()}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium bg-white hover:bg-red-50 hover:text-red-600 rounded-md transition-all duration-200 border border-transparent hover:border-red-200"
                  >
                    <X className="w-3.5 h-3.5" />
                    {clearAllLabel}
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            <div className="h-px bg-gray-200" />

            {/* Content */}
            <div className="max-h-[60vh] overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.05 }}
                className="flex flex-col gap-4 p-4"
              >
                {children}
              </motion.div>
            </div>

            {/* Footer hint */}
            {hasActiveFilters && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="px-4 py-2.5 bg-gray-50/50 border-t border-gray-100"
              >
                <p className="text-xs text-gray-400 text-center">
                  {activeFiltersCount} {activeFiltersCount === 1 ? "filtro aplicado" : "filtros aplicados"}
                </p>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
