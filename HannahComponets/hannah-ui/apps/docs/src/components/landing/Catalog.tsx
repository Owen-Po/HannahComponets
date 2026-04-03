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
      <div className="flex flex-col items-center mb-20 text-center">
        <div className="w-12 h-1 overflow-hidden rounded-full bg-white/5 mb-8">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-full h-full bg-[#c4ff0d]"
          />
        </div>
        <h2 className="text-4xl font-black mb-4 tracking-tight uppercase">Component Catalog</h2>
        <p className="text-white/40 max-w-lg mb-8 uppercase text-[10px] tracking-[0.3em] font-bold">Meticulously Crafted Primitives</p>
        <button onClick={onBack} className="px-6 py-2 rounded-full border border-white/5 bg-white/[0.02] text-[10px] font-black text-white/30 uppercase tracking-[0.2em] hover:text-[#c4ff0d] hover:border-[#c4ff0d]/20 transition-all flex items-center gap-3">
          <div className="w-1 h-3 bg-[#c4ff0d]" /> Back to Home
        </button>
      </div>

      {/* ──── GRIDS ──── */}
      <SectionTitle title="Core Controls" icon={MousePointer2} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {COMPONENTS.filter(c => c.category === "Controls" || c.category === "Inputs").map(c => (
          <ComponentCard key={c.name} component={c} onClick={onSelectComponent} />
        ))}
      </div>

      <SectionTitle title="Data & Display" icon={TableIcon} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {COMPONENTS.filter(c => c.category === "Data" || c.category === "Display").map(c => (
          <ComponentCard key={c.name} component={c} onClick={onSelectComponent} />
        ))}
      </div>

      <SectionTitle title="Layout & Overlays" icon={Layers} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {COMPONENTS.filter(c => c.category === "Layout" || c.category === "Overlays").map(c => (
          <ComponentCard key={c.name} component={c} onClick={onSelectComponent} />
        ))}
        {COMPONENTS.filter(c => c.category === "Feedback").map(c => (
          <ComponentCard key={c.name} component={c} onClick={onSelectComponent} />
        ))}
      </div>

      <SectionTitle title="More Components" icon={Box} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
        {FALLBACK_COMPONENTS.map(c => (
          <ComponentCard key={c.name} component={c} onClick={onSelectComponent} />
        ))}
      </div>
    </motion.div>
  );
};
