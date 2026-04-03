import React from "react";
import { Github } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-8 relative z-10">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-[#c4ff0d] flex items-center justify-center font-black text-black text-sm">H</div>
        <span className="font-black text-xl tracking-tighter opacity-90">HANNAH <span className="text-[#c4ff0d]">UI</span></span>
      </div>
      <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-white/30">
        <a href="#" className="hover:text-[#c4ff0d] transition-colors">Documentation</a>
        <a href="#" className="hover:text-[#c4ff0d] transition-colors">v0.0.9</a>
        <a href="https://github.com/Owen-Po/HannahComponets" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-white/5 hover:bg-white/5 transition-colors">
          <Github className="w-5 h-5 text-white/60" />
        </a>
      </div>
    </nav>
  );
};
