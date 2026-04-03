import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { ComponentInfo } from "../../data/components-data";

interface ComponentCardProps {
  component: ComponentInfo;
  onClick: (c: ComponentInfo) => void;
}

export const ComponentCard = ({ component, onClick }: ComponentCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5, borderColor: "rgba(196,255,13,0.3)", background: "rgba(196,255,13,0.04)" }}
      onClick={() => onClick(component)}
      className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md transition-all duration-300 cursor-pointer overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#c4ff0d] opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300" />

      <div className="flex items-center gap-3 mb-4">
        <div className="w-2 h-2 rounded-full bg-[#c4ff0d] shadow-[0_0_8px_rgba(196,255,13,0.4)]" />
        <span className="text-sm font-semibold text-white tracking-tight">{component.name}</span>
      </div>

      <p className="text-xs text-white/40 leading-relaxed mb-4 group-hover:text-white/60 transition-colors">
        {component.description}
      </p>

      <div className="flex items-center gap-2 mt-auto">
        <span className="text-[10px] uppercase tracking-widest font-bold text-white/20 group-hover:text-[#c4ff0d]/40 transition-colors">
          {component.category}
        </span>
        <ChevronRight className="w-3 h-3 text-white/10 group-hover:text-[#c4ff0d] group-hover:translate-x-1 transition-all" />
      </div>
    </motion.div>
  );
};
