import React from "react";
import { LucideIcon } from "lucide-react";

interface SectionTitleProps {
  title: string;
  icon: LucideIcon;
}

export const SectionTitle = ({ title, icon: Icon }: SectionTitleProps) => {
  return (
    <div className="flex items-center gap-4 mb-8 mt-12">
      <div className="p-2 rounded-lg bg-[#c4ff0d]/5 border border-[#c4ff0d]/10">
        <Icon className="w-4 h-4 text-[#c4ff0d]" />
      </div>
      <h2 className="text-[11px] font-bold text-white/40 uppercase tracking-[0.2em]">
        {title}
      </h2>
      <div className="flex-1 h-[1px] bg-gradient-to-r from-[#c4ff0d]/10 to-transparent" />
    </div>
  );
};
