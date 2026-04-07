import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, Box, Check, Copy, ExternalLink } from "lucide-react";
import { ComponentInfo, STORYBOOK_BASE_URL } from "../../data/components-data";

interface ShowcaseModalProps {
  component: ComponentInfo;
  onClose: () => void;
}

export const ShowcaseModal = ({ component, onClose }: ShowcaseModalProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(component.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const previewUrl = `${STORYBOOK_BASE_URL}/iframe.html?id=${component.storybookId}--docs&viewMode=docs&shortcuts=false&singleStory=true`;
  const fullUrl = `${STORYBOOK_BASE_URL}/?path=/docs/${component.storybookId}--docs`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        className="relative w-full max-w-5xl max-h-[95vh] bg-[#0c0c0c] border border-white/10 rounded-2xl sm:rounded-[32px] overflow-hidden overflow-y-auto shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 md:px-10 border-b border-white/5 bg-white/[0.01]">
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-xl bg-[#c4ff0d]/10 border border-[#c4ff0d]/20">
              <Box className="w-5 h-5 text-[#c4ff0d]" />
            </div>
            <div>
              <h3 className="text-xl font-black text-white">{component.name}</h3>
              <p className="text-xs text-white/30 uppercase tracking-widest font-bold font-mono">@hannah-ui/{component.name.toLowerCase()}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-white/5 text-white/40 hover:text-white transition-all">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row lg:h-[60vh] lg:max-h-[700px]">
          {/* Preview Panel */}
          <div className="flex-1 bg-white/[0.02] relative min-h-[200px] sm:min-h-[300px]">
            <iframe
              src={previewUrl}
              className="w-full h-full border-none opacity-90 hover:opacity-100 transition-opacity"
              title={`${component.name} Preview`}
            />
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/5 text-[10px] font-bold text-white/40 uppercase tracking-widest">
              Live Preview
            </div>
          </div>

          {/* Details Panel */}
          <div className="w-full lg:w-[400px] p-4 sm:p-6 md:p-10 flex flex-col gap-6 sm:gap-8 border-t lg:border-t-0 lg:border-l border-white/5 bg-black/20">

            {/* Description */}
            <div>
              <h4 className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] mb-3">About</h4>
              <p className="text-sm text-white/50 leading-relaxed">{component.description}</p>
            </div>

            {/* Code */}
            <div className="flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">Usage</h4>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 text-[10px] font-bold text-[#c4ff0d]/60 hover:text-[#c4ff0d] transition-colors"
                >
                  {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  {copied ? "Copied!" : "Copy Code"}
                </button>
              </div>
              <div className="flex-1 p-4 rounded-xl bg-black border border-white/5 font-mono text-xs text-[#c4ff0d]/80 leading-relaxed overflow-auto scrollbar-hide">
                <pre>{component.code}</pre>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <a
                href={fullUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#c4ff0d] text-black font-black text-sm rounded-xl flex items-center justify-center gap-3 shadow-[0_10px_20px_-5px_rgba(196,255,13,0.3)] hover:scale-[1.02] transition-all"
              >
                View Full Documentation
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
