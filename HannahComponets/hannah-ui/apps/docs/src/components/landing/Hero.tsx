import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { StatPill } from "../shared/StatPill";

interface HeroProps {
  onExplore: () => void;
}

export const Hero = ({ onExplore }: HeroProps) => {
  return (
    <motion.div
      key="hero"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "circOut" }}
      className="flex flex-col items-center justify-center min-h-[80vh] text-center"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative mb-8"
      >
        <div className="absolute inset-0 bg-[#c4ff0d] opacity-20 blur-[50px] scale-150 rounded-full" />
        <Image
          src="/logohanna.png"
          alt="HANNAH Logo"
          width={200}
          height={200}
          priority
          className="relative z-10 drop-shadow-[0_0_40px_rgba(196,255,13,0.4)]"
        />
      </motion.div>

      <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-4 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent leading-[1.1]">
        HIGH PERFORMANCE <br /> <span className="text-[#c4ff0d]">HANNAH UI</span>
      </h1>

      <p className="max-w-2xl text-lg text-white/40 font-medium leading-relaxed mb-8">
        Libreria de componentes React + Tailwind CSS. <br />
        Explora cada componente con un diseno moderno y minimalista.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
        <StatPill label="Components" value="78+" />
        <StatPill label="Templates" value="12+" />
        <StatPill label="Icons" value="600+" />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={onExplore}
          className="px-9 py-3.5 bg-[#c4ff0d] text-black font-bold rounded-xl shadow-[0_0_30px_rgba(196,255,13,0.3)] hover:shadow-[0_0_50px_rgba(196,255,13,0.5)] hover:-translate-y-0.5 transition-all text-[15px]"
        >
          Explorar Componentes
        </button>
        <button 
          onClick={onExplore}
          className="px-9 py-3.5 bg-white/5 text-[#c4ff0d] font-semibold rounded-xl border border-[#c4ff0d]/25 hover:bg-[#c4ff0d]/10 hover:border-[#c4ff0d]/40 transition-all text-[15px]"
        >
          Instalacion
        </button>
      </div>
    </motion.div>
  );
};
