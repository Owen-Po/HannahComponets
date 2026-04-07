import React from "react";
import { motion } from "framer-motion";
import { MousePointer2, Table as TableIcon, Layers, Box } from "lucide-react";
import { SectionTitle } from "../shared/SectionTitle";
import { ComponentCard } from "../shared/ComponentCard";
import { COMPONENTS, FALLBACK_COMPONENTS, ComponentInfo } from "../../data/components-data";

interface CatalogProps {
  onBack: () => void;
  onSelectComponent: (c: ComponentInfo) => void;
}

export const Catalog = ({ onBack, onSelectComponent }: CatalogProps) => {
  return (
    <motion.div
      key="catalog"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-12"
    >
      {/* ──── Catalog Header ──── */}
      <div className="flex flex-col items-center mb-12 md:mb-20 text-center px-2">
        <div className="w-12 h-1 overflow-hidden rounded-full bg-white/5 mb-8">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-full h-full bg-[#c4ff0d]"
          />
        </div>
        <h2 className="text-2xl sm:text-4xl font-black mb-4 tracking-tight uppercase">Component Catalog</h2>
        <p className="text-white/40 max-w-lg mb-8 uppercase text-[10px] tracking-[0.3em] font-bold">Meticulously Crafted Primitives</p>
        <button onClick={onBack} className="px-6 py-2 rounded-full border border-white/5 bg-white/[0.02] text-[10px] font-black text-white/30 uppercase tracking-[0.2em] hover:text-[#c4ff0d] hover:border-[#c4ff0d]/20 transition-all flex items-center gap-3">
          <div className="w-1 h-3 bg-[#c4ff0d]" /> Back to Home
        </button>
      </div>

      {/* ──── Installation Section ──── */}
      <div className="max-w-4xl mx-auto mb-16 p-4 sm:p-6 rounded-2xl border border-[#c4ff0d]/10 bg-[#c4ff0d]/[0.02] flex flex-col gap-6">

        <div>
          <h3 className="text-[13px] text-[#c4ff0d] uppercase tracking-[0.1em] mb-2 font-bold">
            Opcion 1: Libreria principal
          </h3>
          <p className="text-[#a0a0a0] text-sm mb-3 leading-relaxed">
            Paquete ligero que incluye solo los componentes esenciales.
          </p>
          <code className="block p-3 sm:p-4 rounded-[10px] bg-[#111] border border-[#c4ff0d]/[0.08] text-[#c4ff0d] text-xs sm:text-sm font-mono overflow-x-auto">
            npm install hannah-ui
          </code>
        </div>

        <div>
          <h3 className="text-[13px] text-[#c4ff0d] uppercase tracking-[0.1em] mb-2 font-bold">
            Opcion 2: Componentes Individuales
          </h3>
          <p className="text-[#a0a0a0] text-sm mb-3 leading-relaxed">
            Instala <b>exclusivamente</b> los componentes a tu medida para maximizar la optimizacion de tu proyecto.
          </p>
          <code className="block p-3 sm:p-4 rounded-[10px] bg-[#111] border border-[#c4ff0d]/[0.08] text-[#c4ff0d] text-xs sm:text-sm font-mono overflow-x-auto">
            npm install @hannah-ui/button @hannah-ui/input
          </code>
        </div>
      </div>

      {/* ──── GRIDS ──── */}
      <SectionTitle title="Core Controls" icon={MousePointer2} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {COMPONENTS.filter(c => c.category === "Controls" || c.category === "Inputs").map(c => (
          <ComponentCard key={c.name} component={c} onClick={onSelectComponent} />
        ))}
      </div>

      <SectionTitle title="Data & Display" icon={TableIcon} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {COMPONENTS.filter(c => c.category === "Data" || c.category === "Display").map(c => (
          <ComponentCard key={c.name} component={c} onClick={onSelectComponent} />
        ))}
      </div>

      <SectionTitle title="Layout & Overlays" icon={Layers} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {COMPONENTS.filter(c => c.category === "Layout" || c.category === "Overlays").map(c => (
          <ComponentCard key={c.name} component={c} onClick={onSelectComponent} />
        ))}
        {COMPONENTS.filter(c => c.category === "Feedback").map(c => (
          <ComponentCard key={c.name} component={c} onClick={onSelectComponent} />
        ))}
      </div>

      <SectionTitle title="More Components" icon={Box} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-20">
        {FALLBACK_COMPONENTS.map(c => (
          <ComponentCard key={c.name} component={c} onClick={onSelectComponent} />
        ))}
      </div>
    </motion.div>
  );
};
