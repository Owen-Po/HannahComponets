import { useState, useRef, useEffect } from "react";
import { Plus, X, Filter } from "lucide-react";

export interface FilterState {
  id: string;
  field: string;
  value: string;
  operator: "AND" | "OR";
}

export interface AdvancedTableFilterProps {
  filters: FilterState[];
  onFiltersChange: (filters: FilterState[]) => void;
  fieldOptions: { value: string; label: string }[];
  maxFilters?: number;
}

export const AdvancedTableFilter = ({
  filters,
  onFiltersChange,
  fieldOptions,
  maxFilters = 3,
}: AdvancedTableFilterProps) => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

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

  const handleAddFilter = () => {
    if (filters.length < maxFilters) {
      onFiltersChange([
        ...filters,
        {
          id: Math.random().toString(36).substr(2, 9),
          field: "",
          value: "",
          operator: "AND",
        },
      ]);
    }
  };

  const handleRemoveFilter = (id: string) => {
    if (filters.length > 1) {
      onFiltersChange(filters.filter((f) => f.id !== id));
    } else {
      onFiltersChange([{ id: "1", field: "", value: "", operator: "AND" }]);
    }
  };

  const handleFilterUpdate = (id: string, updates: Partial<FilterState>) => {
    onFiltersChange(
      filters.map((f) => (f.id === id ? { ...f, ...updates } : f))
    );
  };

  const activeCount = filters.filter((f) => f.field).length;

  return (
    <div className="relative inline-block" ref={panelRef}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 shadow-sm transition-colors cursor-pointer"
      >
        <Filter className="w-4 h-4" />
        <span>Filtros Avanzados</span>
        {activeCount > 0 && (
          <span className="flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-amber-500 rounded-full">
            {activeCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-2 z-50 bg-white border border-gray-200 rounded-xl shadow-xl p-4 w-[600px] max-w-[90vw]">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-900">Configurar Filtros</h3>
            </div>

            <div className="flex flex-col gap-2">
              {filters.map((filter, index) => (
                <div
                  key={filter.id}
                  className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg border border-gray-100"
                >
                  {index > 0 && (
                    <select
                      value={filter.operator}
                      onChange={(e) =>
                        handleFilterUpdate(filter.id, {
                          operator: e.target.value as "AND" | "OR",
                        })
                      }
                      className="appearance-none h-9 w-[50px] rounded-md border border-gray-100 bg-white px-1 text-center text-sm outline-none focus:border-amber-500 font-medium cursor-pointer"
                    >
                      <option value="AND">Y</option>
                      <option value="OR">O</option>
                    </select>
                  )}

                  <select
                    value={filter.field}
                    onChange={(e) =>
                      handleFilterUpdate(filter.id, { field: e.target.value, value: "" })
                    }
                    className="appearance-none h-9 flex-1 rounded-md border border-gray-100 bg-white px-3 text-sm outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 min-w-[140px]"
                  >
                    <option value="">Campo...</option>
                    {fieldOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>

                  {filter.field && (
                    <input
                      type="text"
                      value={filter.value}
                      onChange={(e) =>
                        handleFilterUpdate(filter.id, { value: e.target.value })
                      }
                      placeholder="Buscar..."
                      className="h-9 flex-1 rounded-md border border-gray-50 bg-white px-3 text-sm outline-none transition-all placeholder:text-gray-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 min-w-[140px]"
                    />
                  )}

                  <div className="flex items-center">
                    {index === filters.length - 1 && filters.length < maxFilters && (
                      <button
                        type="button"
                        onClick={handleAddFilter}
                        className="ml-1 p-1.5 text-green-600 hover:bg-green-100 rounded-full transition-colors font-medium border border-green-200 bg-green-50"
                        title="Agregar filtro"
                      >
                        <Plus size={16} strokeWidth={3} />
                      </button>
                    )}

                    {(filters.length > 1 ||
                      (index === 0 && (filter.field || filter.value))) && (
                      <button
                        type="button"
                        onClick={() => handleRemoveFilter(filter.id)}
                        className="ml-1 p-1.5 text-red-500 hover:bg-red-100 rounded-full transition-colors border border-red-200 bg-red-50"
                        title="Eliminar filtro"
                      >
                        <X size={14} strokeWidth={3} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
