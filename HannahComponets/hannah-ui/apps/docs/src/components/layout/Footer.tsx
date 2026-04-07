import React from "react";

export const Footer = () => {
  return (
    <footer className="pt-20 pb-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 opacity-40">
      <div className="text-[10px] font-black tracking-[0.3em] uppercase flex items-center gap-4">
        <div className="w-4 h-4 rounded-sm bg-[#c4ff0d]" />
        HANNAH UI © 2026
      </div>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-[10px] font-black uppercase tracking-[0.2em]">
        <a href="#" className="hover:text-[#c4ff0d] transition-colors">Documentation</a>
        <a href="#" className="hover:text-[#c4ff0d] transition-colors">Components</a>
        <a href="#" className="hover:text-[#c4ff0d] transition-colors">Templates</a>
        <a href="#" className="hover:text-[#c4ff0d] transition-colors">Changelog</a>
      </div>
    </footer>
  );
};
