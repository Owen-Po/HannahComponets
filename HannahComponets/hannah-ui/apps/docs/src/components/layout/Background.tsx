import React from "react";

export const Background = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-[#c4ff0d] opacity-[0.03] blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#c4ff0d] opacity-[0.02] blur-[100px]" />

      <div className="absolute inset-0 opacity-[0.015]"
        style={{ backgroundImage: 'linear-gradient(#c4ff0d 1px, transparent 1px), linear-gradient(90deg, #c4ff0d 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-[#c4ff0d]/10" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-[#c4ff0d]/10" />
    </div>
  );
};
