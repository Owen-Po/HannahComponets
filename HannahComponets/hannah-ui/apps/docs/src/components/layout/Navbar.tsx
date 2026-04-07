import React, { useState } from "react";
import { Github, Menu, X } from "lucide-react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-6 md:py-8 relative z-10">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-[#c4ff0d] flex items-center justify-center font-black text-black text-sm">H</div>
        <span className="font-black text-xl tracking-tighter opacity-90">HANNAH <span className="text-[#c4ff0d]">UI</span></span>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-white/30">
        <a href="#" className="hover:text-[#c4ff0d] transition-colors">Documentation</a>
        <a href="#" className="hover:text-[#c4ff0d] transition-colors">v0.0.9</a>
        <a href="https://github.com/Owen-Po/HannahComponets" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-white/5 hover:bg-white/5 transition-colors">
          <Github className="w-5 h-5 text-white/60" />
        </a>
      </div>

      {/* Mobile toggle */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-lg border border-white/5 hover:bg-white/5 transition-colors">
        {menuOpen ? <X className="w-5 h-5 text-white/60" /> : <Menu className="w-5 h-5 text-white/60" />}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 p-4 rounded-2xl border border-white/5 bg-[#0c0c0c]/95 backdrop-blur-md flex flex-col gap-4 text-xs font-bold uppercase tracking-widest text-white/30 md:hidden">
          <a href="#" className="hover:text-[#c4ff0d] transition-colors py-2">Documentation</a>
          <a href="#" className="hover:text-[#c4ff0d] transition-colors py-2">v0.0.9</a>
          <a href="https://github.com/Owen-Po/HannahComponets" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#c4ff0d] transition-colors py-2">
            <Github className="w-4 h-4" /> GitHub
          </a>
        </div>
      )}
    </nav>
  );
};
