import { useState } from "react";
import { Download, FileText, FileSpreadsheet, X } from "lucide-react";

export type ExportFormat = "csv" | "excel" | "pdf" | "json";

export interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExport: (format: ExportFormat) => void;
  title?: string;
  formats?: ExportFormat[];
  isExporting?: boolean;
  accentColor?: string;
}

const formatConfig: Record<ExportFormat, { label: string; description: string; icon: typeof FileText }> = {
  csv: { label: "CSV", description: "Archivo separado por comas", icon: FileText },
  excel: { label: "Excel", description: "Hoja de cálculo .xlsx", icon: FileSpreadsheet },
  pdf: { label: "PDF", description: "Documento portable", icon: FileText },
  json: { label: "JSON", description: "Formato de datos JSON", icon: FileText },
};

export const ExportModal = ({
  isOpen,
  onClose,
  onExport,
  title = "Exportar datos",
  formats = ["csv", "excel", "pdf"],
  isExporting = false,
  accentColor = "#d97706",
}: ExportModalProps) => {
  const [selected, setSelected] = useState<ExportFormat>(formats[0]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm mx-4 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <Download size={18} style={{ color: accentColor }} />
            <h3 className="text-base font-semibold text-gray-900">{title}</h3>
          </div>
          <button type="button" onClick={onClose} className="p-1 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
            <X size={18} />
          </button>
        </div>
        <div className="p-5 flex flex-col gap-2">
          {formats.map((format) => {
            const config = formatConfig[format];
            const Icon = config.icon;
            return (
              <button
                key={format}
                type="button"
                onClick={() => setSelected(format)}
                className={`flex items-center gap-3 p-3 rounded-xl border transition-all text-left w-full ${
                  selected === format
                    ? "ring-2"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
                style={selected === format ? { borderColor: accentColor, backgroundColor: `${accentColor}12`, outline: `2px solid ${accentColor}33`, outlineOffset: "-1px" } : undefined}
              >
                <Icon size={20} style={selected === format ? { color: accentColor } : undefined} className={selected !== format ? "text-gray-400" : ""} />
                <div>
                  <p className="text-sm font-medium text-gray-900">{config.label}</p>
                  <p className="text-xs text-gray-500">{config.description}</p>
                </div>
              </button>
            );
          })}
        </div>
        <div className="px-5 py-4 border-t border-gray-100 flex gap-3">
          <button type="button" onClick={onClose} className="flex-1 px-4 py-2.5 text-sm font-medium border border-gray-200 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors">
            Cancelar
          </button>
          <button
            type="button"
            onClick={() => onExport(selected)}
            disabled={isExporting}
            className="flex-1 px-4 py-2.5 text-sm font-medium text-white rounded-lg disabled:opacity-50 transition-colors hover:brightness-110"
            style={{ backgroundColor: accentColor }}
          >
            {isExporting ? "Exportando..." : "Exportar"}
          </button>
        </div>
      </div>
    </div>
  );
};
