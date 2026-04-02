"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ExternalLink,
  Box,
  Layers,
  Layout,
  Filter,
  Table as TableIcon,
  MousePointer2,
  Bell,
  Navigation,
  Globe,
  Settings,
  ShieldCheck,
  CreditCard,
  Zap,
  Github,
  X,
  Copy,
  Check,
  Maximize2
} from "lucide-react";

/* ─────────────────────────────────────────
   Data & Helpers
───────────────────────────────────────── */

interface ComponentInfo {
  name: string;
  description: string;
  category: string;
  storybookId: string;
  code: string;
}

// Storybook logic to handle production vs development environment
const IS_SERVER = typeof window === "undefined";
const STORYBOOK_BASE_URL = !IS_SERVER && window.location.hostname === "localhost" 
  ? "http://localhost:6006" 
  : "/storybook/"; // Note the trailing slash for correct relative internal assets

const COMPONENTS: ComponentInfo[] = [
  {
    name: "Button",
    description: "Highly customizable buttons with multiple states and loading indicators.",
    category: "Controls",
    storybookId: "components-button",
    code: `import { Button } from "@hannah-ui/button";\n\n<Button variant="primary" size="md">\n  Click me\n</Button>`
  },
  {
    name: "Input",
    description: "Floating labels, icons support and validation focus states.",
    category: "Inputs",
    storybookId: "components-input",
    code: `import { Input } from "@hannah-ui/input";\n\n<Input placeholder="Search..." icon={<Search />} />`
  },
  {
    name: "Select",
    description: "Native and custom search-aware dropdown selections.",
    category: "Inputs",
    storybookId: "components-select",
    code: `import { Select } from "@hannah-ui/select";\n\n<Select options={[{ value: '1', label: 'Option 1' }]} />`
  },
  {
    name: "Table",
    description: "Tablas con sorting y striped.",
    category: "Data",
    storybookId: "components-table",
    code: `import { Table } from "@hannah-ui/table";\n\n<Table data={items} columns={cols} />`
  },
  {
    name: "Alert",
    description: "Mensajes contextuales con variantes.",
    category: "Feedback",
    storybookId: "components-alert",
    code: `import { Alert } from "@hannah-ui/alert";\n\n<Alert variant="success">Operation completed!</Alert>`
  },
  {
    name: "Modal",
    description: "Dialogos modales con animaciones.",
    category: "Overlays",
    storybookId: "components-modal",
    code: `import { Modal } from "@hannah-ui/modal";\n\n<Modal isOpen={true} onClose={() => {}} title="Title" />`
  },
  {
    name: "Sidebar",
    description: "Menu lateral colapsable.",
    category: "Layout",
    storybookId: "components-sidebar",
    code: `import { Sidebar } from "@hannah-ui/sidebar";\n\n<Sidebar items={navItems} />`
  },
  {
    name: "StatsCard",
    description: "Tarjetas de estadisticas.",
    category: "Display",
    storybookId: "components-statscard",
    code: `import { StatsCard } from "@hannah-ui/statscard";\n\n<StatsCard label="Sales" value="$1,200" trend="+12%" />`
  }
];

const FALLBACK_COMPONENTS: ComponentInfo[] = [
  { name: "DatePicker", description: "Advanced date and range selection.", category: "Advanced", storybookId: "components-datepicker", code: `import { DatePicker } from "@hannah-ui/datepicker";` },
  { name: "ColorPicker", description: "RGB/HEX color selector.", category: "Specialized", storybookId: "components-colorpicker", code: `import { ColorPicker } from "@hannah-ui/colorpicker";` },
  { name: "FileDropzone", description: "Drag & drop file upload.", category: "Upload", storybookId: "components-filedropzone", code: `import { FileDropzone } from "@hannah-ui/filedropzone";` },
  { name: "Switch", description: "Toggle switch with label.", category: "Toggles", storybookId: "components-switch", code: `import { Switch } from "@hannah-ui/switch";` },
  { name: "PhoneInput", description: "International phone input.", category: "Inputs", storybookId: "components-phoneinput", code: `import { PhoneInput } from "@hannah-ui/phoneinput";` },
  { name: "DraggableTable", description: "Table with drag & drop sorting.", category: "Advanced", storybookId: "components-draggabletable", code: `import { DraggableTable } from "@hannah-ui/draggabletable";` },
  { name: "DataGrid", description: "Optimized grid for large datasets.", category: "Grid", storybookId: "components-datagrid", code: `import { DataGrid } from "@hannah-ui/datagrid";` },
  { name: "Avatar", description: "Grouped user photos.", category: "UX", storybookId: "components-avatar", code: `import { Avatar } from "@hannah-ui/avatar";` },
  { name: "ModernSidebar", description: "Collapsible sidebar menu.", category: "Layout", storybookId: "components-modernsidebar", code: `import { ModernSidebar } from "@hannah-ui/modernsidebar";` },
];

/* ─────────────────────────────────────────
   Sub-Components
───────────────────────────────────────── */

const ComponentCard = ({ component, onClick }: { component: ComponentInfo; onClick: (c: ComponentInfo) => void }) => {
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

const ShowcaseModal = ({ component, onClose }: { component: ComponentInfo; onClose: () => void }) => {
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
        className="relative w-full max-w-5xl bg-[#0c0c0c] border border-white/10 rounded-[32px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)]"
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

        <div className="flex flex-col lg:flex-row h-[60vh] max-h-[700px]">
          {/* Preview Panel */}
          <div className="flex-1 bg-white/[0.02] relative min-h-[300px]">
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
          <div className="w-full lg:w-[400px] p-6 md:p-10 flex flex-col gap-8 border-l border-white/5 bg-black/20">

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

const SectionTitle = ({ title, icon: Icon }: { title: string; icon: any }) => {
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

const StatPill = ({ label, value }: { label: string; value: string }) => (
  <div className="px-6 py-4 rounded-2xl border border-[#c4ff0d]/10 bg-[#c4ff0d]/[0.03] backdrop-blur-sm flex flex-col items-center gap-1 min-w-[140px]">
    <span className="text-3xl font-black text-[#c4ff0d] drop-shadow-[0_0_15px_rgba(196,255,13,0.3)]">{value}</span>
    <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.15em]">{label}</span>
  </div>
);

/* ─────────────────────────────────────────
   Main Page Component
───────────────────────────────────────── */

export default function LandingPage() {
  const [showCatalog, setShowCatalog] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState<ComponentInfo | null>(null);

  // Close modal on escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedComponent(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#c4ff0d] selection:text-black">

      {/* ──── Animated Background ──── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-[#c4ff0d] opacity-[0.03] blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#c4ff0d] opacity-[0.02] blur-[100px]" />

        <div className="absolute inset-0 opacity-[0.015]"
          style={{ backgroundImage: 'linear-gradient(#c4ff0d 1px, transparent 1px), linear-gradient(90deg, #c4ff0d 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

        <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-[#c4ff0d]/10" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-[#c4ff0d]/10" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">

        {/* ──── NAVIGATION ──── */}
        <nav className="flex justify-between items-center py-8">
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

        <AnimatePresence mode="wait">
          {!showCatalog ? (
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
                  onClick={() => setShowCatalog(true)}
                  className="px-9 py-3.5 bg-[#c4ff0d] text-black font-bold rounded-xl shadow-[0_0_30px_rgba(196,255,13,0.3)] hover:shadow-[0_0_50px_rgba(196,255,13,0.5)] hover:-translate-y-0.5 transition-all text-[15px]"
                >
                  Explorar Componentes
                </button>
                <button 
                  onClick={() => setShowCatalog(true)}
                  className="px-9 py-3.5 bg-white/5 text-[#c4ff0d] font-semibold rounded-xl border border-[#c4ff0d]/25 hover:bg-[#c4ff0d]/10 hover:border-[#c4ff0d]/40 transition-all text-[15px]"
                >
                  Instalacion
                </button>
              </div>
            </motion.div>
          ) : (
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
                <button onClick={() => setShowCatalog(false)} className="px-6 py-2 rounded-full border border-white/5 bg-white/[0.02] text-[10px] font-black text-white/30 uppercase tracking-[0.2em] hover:text-[#c4ff0d] hover:border-[#c4ff0d]/20 transition-all flex items-center gap-3">
                  <div className="w-1 h-3 bg-[#c4ff0d]" /> Back to Home
                </button>
              </div>

              {/* ──── GRIDS ──── */}
              <SectionTitle title="Core Controls" icon={MousePointer2} />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {COMPONENTS.filter(c => c.category === "Controls" || c.category === "Inputs").map(c => (
                  <ComponentCard key={c.name} component={c} onClick={(c) => setSelectedComponent(c)} />
                ))}
              </div>

              <SectionTitle title="Data & Display" icon={TableIcon} />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {COMPONENTS.filter(c => c.category === "Data" || c.category === "Display").map(c => (
                  <ComponentCard key={c.name} component={c} onClick={(c) => setSelectedComponent(c)} />
                ))}
              </div>

              <SectionTitle title="Layout & Overlays" icon={Layers} />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {COMPONENTS.filter(c => c.category === "Layout" || c.category === "Overlays").map(c => (
                  <ComponentCard key={c.name} component={c} onClick={(c) => setSelectedComponent(c)} />
                ))}
                {COMPONENTS.filter(c => c.category === "Feedback").map(c => (
                  <ComponentCard key={c.name} component={c} onClick={(c) => setSelectedComponent(c)} />
                ))}
              </div>

              <SectionTitle title="More Components" icon={Box} />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
                {FALLBACK_COMPONENTS.map(c => (
                  <ComponentCard key={c.name} component={c} onClick={(c) => setSelectedComponent(c)} />
                ))}
              </div>

              {/* ──── FOOTER ──── */}
              <footer className="pt-20 pb-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 opacity-40">
                <div className="text-[10px] font-black tracking-[0.3em] uppercase flex items-center gap-4">
                  <div className="w-4 h-4 rounded-sm bg-[#c4ff0d]" />
                  HANNAH UI © 2026
                </div>
                <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.2em]">
                  <a href="#" className="hover:text-[#c4ff0d] transition-colors">Documentation</a>
                  <a href="#" className="hover:text-[#c4ff0d] transition-colors">Components</a>
                  <a href="#" className="hover:text-[#c4ff0d] transition-colors">Templates</a>
                  <a href="#" className="hover:text-[#c4ff0d] transition-colors">Changelog</a>
                </div>
              </footer>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ──── MODAL ──── */}
        <AnimatePresence>
          {selectedComponent && (
            <ShowcaseModal
              component={selectedComponent}
              onClose={() => setSelectedComponent(null)}
            />
          )}
        </AnimatePresence>

      </div>
    </main>
  );
}
