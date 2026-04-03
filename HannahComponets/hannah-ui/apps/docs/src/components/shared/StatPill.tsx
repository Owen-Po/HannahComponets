import React from "react";

interface StatPillProps {
  label: string;
  value: string;
}

export const StatPill = ({ label, value }: StatPillProps) => (
  <div className="px-6 py-4 rounded-2xl border border-[#c4ff0d]/10 bg-[#c4ff0d]/[0.03] backdrop-blur-sm flex flex-col items-center gap-1 min-w-[140px]">
    <span className="text-3xl font-black text-[#c4ff0d] drop-shadow-[0_0_15px_rgba(196,255,13,0.3)]">{value}</span>
    <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.15em]">{label}</span>
  </div>
);
