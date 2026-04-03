"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

// Components
import { Background } from "@/components/layout/Background";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/landing/Hero";
import { Catalog } from "@/components/landing/Catalog";
import { ShowcaseModal } from "@/components/shared/ShowcaseModal";

// Data
import { ComponentInfo } from "@/data/components-data";

/**
 * LANDING PAGE
 * Esta es la página principal refactorizada. 
 * Ahora es mucho más limpia y fácil de mantener.
 */
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
      <Background />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        
        {/* ──── NAVIGATION ──── */}
        <Navbar />

        <AnimatePresence mode="wait">
          {!showCatalog ? (
            <Hero onExplore={() => setShowCatalog(true)} />
          ) : (
            <div className="relative">
              <Catalog 
                onBack={() => setShowCatalog(false)} 
                onSelectComponent={(c) => setSelectedComponent(c)} 
              />
              {/* ──── FOOTER ──── */}
              <Footer />
            </div>
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
