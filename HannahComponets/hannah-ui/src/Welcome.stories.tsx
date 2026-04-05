import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

/* ─────────────────────────────────────────
   Navigation helper — works in Storybook 10
───────────────────────────────────────── */
function navigateTo(path: string) {
  const url = `/?path=/docs/${path}--docs`;
  try {
    if (window.parent !== window) {
      window.parent.location.href = url;
    } else {
      window.location.href = url;
    }
  } catch {
    window.location.href = url;
  }
}

/* ─── Card link component ─── */
function ComponentCard({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return (
    <button
      type="button"
      onClick={() => navigateTo(path)}
      style={{
        display: "block",
        width: "100%",
        padding: "20px",
        borderRadius: "14px",
        border: "1px solid rgba(196,255,13,0.08)",
        background: "rgba(255,255,255,0.02)",
        backdropFilter: "blur(10px)",
        textDecoration: "none",
        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
        cursor: "pointer",
        textAlign: "left",
        color: "inherit",
        fontFamily: "inherit",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(196,255,13,0.25)";
        e.currentTarget.style.background = "rgba(196,255,13,0.04)";
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "0 8px 32px rgba(196,255,13,0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(196,255,13,0.08)";
        e.currentTarget.style.background = "rgba(255,255,255,0.02)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#c4ff0d",
            flexShrink: 0,
            boxShadow: "0 0 8px rgba(196,255,13,0.4)",
          }}
        />
        <span style={{ fontSize: "14px", fontWeight: 600, color: "#fff" }}>{name}</span>
      </div>
      <p style={{ fontSize: "12px", color: "#666", margin: 0, lineHeight: 1.5, paddingLeft: "18px" }}>
        {description}
      </p>
    </button>
  );
}

/* ─── Section header ─── */
function SectionTitle({ title }: { title: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", marginTop: "0" }}>
      <div style={{ width: 3, height: 20, borderRadius: 2, background: "#c4ff0d" }} />
      <h2
        style={{
          fontSize: "11px",
          color: "#888",
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          margin: 0,
          fontWeight: 700,
        }}
      >
        {title}
      </h2>
      <div style={{ flex: 1, height: 1, background: "rgba(196,255,13,0.06)" }} />
    </div>
  );
}

/* ─── Grid ─── */
function Grid({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
        gap: "12px",
        marginBottom: "40px",
      }}
    >
      {children}
    </div>
  );
}

/* ─── Stat pill ─── */
function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        padding: "12px 20px",
        borderRadius: "12px",
        border: "1px solid rgba(196,255,13,0.1)",
        background: "rgba(196,255,13,0.03)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "4px",
      }}
    >
      <span style={{ fontSize: "22px", fontWeight: 800, color: "#c4ff0d" }}>{value}</span>
      <span style={{ fontSize: "10px", color: "#666", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>{label}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   DASHBOARD — Hero + Component Catalog
═══════════════════════════════════════════════════════════════════ */
function Dashboard() {
  const [showCatalog, setShowCatalog] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        overflow: "auto",
        background: "#0a0a0a",
        color: "#fff",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        zIndex: 1,
      }}
    >
      {/* ──── Background effects ──── */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        {/* Glow circles */}
        <div
          style={{
            position: "absolute",
            top: "-25%",
            right: "-15%",
            width: 800,
            height: 800,
            borderRadius: "50%",
            background: "#c4ff0d",
            opacity: 0.03,
            filter: "blur(120px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "-20%",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "#c4ff0d",
            opacity: 0.02,
            filter: "blur(100px)",
          }}
        />

        {/* Geometric shapes */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "15%",
            width: 300,
            height: 300,
            border: "1px solid rgba(196,255,13,0.04)",
            transform: "rotate(45deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "15%",
            left: "10%",
            width: 400,
            height: 400,
            border: "1px solid rgba(196,255,13,0.04)",
            transform: "rotate(12deg)",
            borderRadius: "50%",
          }}
        />

        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.015,
            backgroundImage: `linear-gradient(#c4ff0d 1px, transparent 1px), linear-gradient(90deg, #c4ff0d 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Corner borders */}
        <div style={{ position: "absolute", top: 0, left: 0, width: 120, height: 120, borderLeft: "2px solid rgba(196,255,13,0.08)", borderTop: "2px solid rgba(196,255,13,0.08)" }} />
        <div style={{ position: "absolute", bottom: 0, right: 0, width: 120, height: 120, borderRight: "2px solid rgba(196,255,13,0.08)", borderBottom: "2px solid rgba(196,255,13,0.08)" }} />
      </div>

      {/* ──── HERO Section ──── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: showCatalog ? "auto" : "100vh",
          padding: showCatalog ? "60px 48px 0" : "48px",
          transition: "all 0.5s ease",
        }}
      >
        {/* Logo with glow */}
        <div style={{ position: "relative", marginBottom: showCatalog ? 24 : 48 }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "#c4ff0d",
              opacity: 0.2,
              filter: "blur(40px)",
              transform: "scale(1.1)",
              borderRadius: "50%",
            }}
          />
          <img
            src="./logohanna.png"
            alt="HANNAH Logo"
            style={{
              position: "relative",
              width: showCatalog ? 80 : 180,
              height: showCatalog ? 80 : 180,
              objectFit: "contain",
              filter: "drop-shadow(0 0 30px rgba(196,255,13,0.3))",
              transition: "all 0.5s ease",
            }}
          />
        </div>

        {/* Title */}
        <h1
          style={{
            marginBottom: showCatalog ? 8 : 16,
            textAlign: "center",
            letterSpacing: "-0.03em",
            transition: "all 0.5s ease",
          }}
        >
          <span
            style={{
              display: "block",
              fontSize: showCatalog ? 32 : 56,
              fontWeight: 800,
              background: "linear-gradient(to right, #fff, #fff, rgba(255,255,255,0.6))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              transition: "all 0.5s ease",
              margin: 0,
            }}
          >
            HANNAH <span style={{ WebkitTextFillColor: "#c4ff0d" }}>UI</span>
          </span>
          <span
            style={{
              display: showCatalog ? "none" : "block",
              fontSize: 28,
              fontWeight: 300,
              color: "rgba(255,255,255,0.5)",
            }}
          >
            Design System
          </span>
        </h1>

        {/* Description */}
        <p
          style={{
            color: "#a0a0a0",
            textAlign: "center",
            maxWidth: 560,
            marginBottom: showCatalog ? 16 : 40,
            fontSize: showCatalog ? 14 : 17,
            lineHeight: 1.7,
            transition: "all 0.5s ease",
          }}
        >
          {showCatalog
            ? "Explora cada componente haciendo click en las tarjetas o usa la barra lateral."
            : (
              <>
                Libreria de componentes React + Tailwind CSS.<br />
                Explora cada componente con un diseno moderno y minimalista.
              </>
            )
          }
        </p>

        {/* Stats */}
        {!showCatalog && (
          <div style={{ display: "flex", gap: "16px", marginBottom: 40 }}>
            <StatPill value="78+" label="Componentes" />
            <StatPill value="12+" label="Filtros" />
            <StatPill value="6+" label="Templates" />
          </div>
        )}

        {/* Action buttons */}
        {!showCatalog && (
          <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: 32 }}>
            <button
              type="button"
              onClick={() => setShowCatalog(true)}
              style={{
                padding: "14px 36px",
                background: "#c4ff0d",
                color: "#000",
                fontWeight: 700,
                fontSize: 15,
                borderRadius: "12px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 0 30px rgba(196,255,13,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 50px rgba(196,255,13,0.5)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 30px rgba(196,255,13,0.3)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Explorar Componentes
            </button>
            <button
              type="button"
              onClick={() => {
                const el = document.querySelector("[data-install]");
                if (el) el.scrollIntoView({ behavior: "smooth" });
                setShowCatalog(true);
              }}
              style={{
                padding: "14px 36px",
                background: "transparent",
                color: "#c4ff0d",
                fontWeight: 600,
                fontSize: 15,
                borderRadius: "12px",
                border: "1px solid rgba(196,255,13,0.25)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(196,255,13,0.08)";
                e.currentTarget.style.borderColor = "rgba(196,255,13,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(196,255,13,0.25)";
              }}
            >
              Instalacion
            </button>
          </div>
        )}

        {/* Decorative line */}
        {!showCatalog && (
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 24 }}>
            <div style={{ width: 48, height: 1, background: "linear-gradient(to right, transparent, rgba(196,255,13,0.3))" }} />
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(196,255,13,0.5)", boxShadow: "0 0 8px rgba(196,255,13,0.4)" }} />
            <div style={{ width: 48, height: 1, background: "linear-gradient(to left, transparent, rgba(196,255,13,0.3))" }} />
          </div>
        )}
      </div>

      {/* ──── CATALOG Section ──── */}
      {showCatalog && (
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: "0 48px 48px" }}>
          {/* Install box */}
          <div
            data-install
            style={{
              padding: 24,
              borderRadius: 16,
              border: "1px solid rgba(196,255,13,0.1)",
              background: "rgba(196,255,13,0.02)",
              marginBottom: 48,
              display: "flex",
              flexDirection: "column",
              gap: "24px"
            }}
          >
            <div>
              <h3 style={{ fontSize: 13, color: "#c4ff0d", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 0, marginBottom: 8, fontWeight: 700 }}>
                Opcion 1: Libreria principal
              </h3>
              <p style={{ color: "#a0a0a0", fontSize: 14, marginTop: 0, marginBottom: 12, lineHeight: 1.5 }}>
                Paquete ligero que incluye solo los componentes esenciales.
              </p>
              <code
                style={{
                  display: "block",
                  padding: 16,
                  borderRadius: 10,
                  background: "#111",
                  border: "1px solid rgba(196,255,13,0.08)",
                  color: "#c4ff0d",
                  fontSize: 14,
                  fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                }}
              >
                npm install hannah-ui
              </code>
            </div>

            <div>
              <h3 style={{ fontSize: 13, color: "#c4ff0d", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 0, marginBottom: 8, fontWeight: 700 }}>
                Opcion 2: Componentes Individuales
              </h3>
              <p style={{ color: "#a0a0a0", fontSize: 14, marginTop: 0, marginBottom: 12, lineHeight: 1.5 }}>
                Instala <b>exclusivamente</b> los componentes a tu medida para maximizar la optimizacion de tu proyecto.
              </p>
              <code
                style={{
                  display: "block",
                  padding: 16,
                  borderRadius: 10,
                  background: "#111",
                  border: "1px solid rgba(196,255,13,0.08)",
                  color: "#c4ff0d",
                  fontSize: 14,
                  fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                }}
              >
                npm install @hannah-ui/button @hannah-ui/input
              </code>
            </div>
          </div>

          {/* Forms */}
          <SectionTitle title="Formularios" />
          <Grid>
            <ComponentCard name="Button" description="Botones con variantes y estados" path="components-button" />
            <ComponentCard name="Input" description="Campos de texto con iconos" path="components-input" />
            <ComponentCard name="Textarea" description="Area de texto expandible" path="components-textarea" />
            <ComponentCard name="Select" description="Dropdown de seleccion" path="components-select" />
            <ComponentCard name="Checkbox" description="Casillas de verificacion" path="components-checkbox" />
            <ComponentCard name="Radio" description="Botones de radio" path="components-radio" />
            <ComponentCard name="Toggle" description="Switch on/off" path="components-toggle" />
            <ComponentCard name="Stack" description="Layout de apilado flexible" path="components-stack" />
          </Grid>

          {/* Data */}
          <SectionTitle title="Datos y Display" />
          <Grid>
            <ComponentCard name="Table" description="Tablas con sorting y striped" path="components-table" />
            <ComponentCard name="Card" description="Contenedor composable" path="components-card" />
            <ComponentCard name="Badge" description="Indicadores de estado" path="components-badge" />
            <ComponentCard name="Chip" description="Tags removibles" path="components-chip" />
            <ComponentCard name="Avatar" description="Fotos de usuario con grupo" path="components-avatar" />
            <ComponentCard name="StatsCard" description="Tarjetas de estadisticas" path="components-statscard" />
            <ComponentCard name="Alert" description="Mensajes contextuales" path="components-alert" />
          </Grid>

          {/* Nav */}
          <SectionTitle title="Navegacion" />
          <Grid>
            <ComponentCard name="Header" description="Barra superior" path="components-header" />
            <ComponentCard name="Sidebar" description="Menu lateral colapsable" path="components-sidebar" />
            <ComponentCard name="Tabs" description="Pestanas con variantes" path="components-tabs" />
            <ComponentCard name="Breadcrumb" description="Rutas de navegacion" path="components-breadcrumb" />
            <ComponentCard name="Pagination" description="Paginacion de datos" path="components-pagination" />
          </Grid>

          {/* Overlays */}
          <SectionTitle title="Overlays" />
          <Grid>
            <ComponentCard name="Modal" description="Dialogos modales" path="components-modal" />
            <ComponentCard name="Toast" description="Notificaciones temporales" path="components-toast" />
          </Grid>

          {/* Filters */}
          <SectionTitle title="Filtros" />
          <Grid>
            <ComponentCard name="FilterButton" description="Boton con popover de filtros" path="components-filter" />
            <ComponentCard name="FilterSelect" description="Dropdown filtrable" path="components-filter" />
            <ComponentCard name="FilterDate" description="Selector de fecha" path="components-filter" />
            <ComponentCard name="FilterSearch" description="Busqueda con debounce" path="components-filter" />
            <ComponentCard name="FilterChips" description="Multi-select con chips" path="components-filter" />
            <ComponentCard name="FilterPanel" description="Popover de filtros con contador" path="components-filterpanel" />
            <ComponentCard name="AdvancedTableFilter" description="Filtros AND/OR multi-campo" path="components-advancedtablefilter" />
          </Grid>

          {/* Advanced Tables */}
          <SectionTitle title="Tablas Avanzadas" />
          <Grid>
            <ComponentCard name="DraggableTable" description="Tabla con drag & drop, sorting, resize" path="components-draggabletable" />
            <ComponentCard name="ExpandableTable" description="Tabla con filas expandibles" path="components-expandabletable" />
            <ComponentCard name="StickyTable" description="Tabla con columnas sticky" path="components-stickytable" />
            <ComponentCard name="SimpleTable" description="Tabla simple y ligera" path="components-simpletable" />
          </Grid>

          {/* Specialized Inputs */}
          <SectionTitle title="Inputs Especializados" />
          <Grid>
            <ComponentCard name="AppSelect" description="Select searchable y creatable" path="components-appselect" />
            <ComponentCard name="DatePicker" description="Selector de fecha con calendario" path="components-datepicker" />
            <ComponentCard name="PhoneInput" description="Input de telefono internacional" path="components-phoneinput" />
            <ComponentCard name="ColorPicker" description="Selector de color con presets" path="components-colorpicker" />
            <ComponentCard name="FileDropzone" description="Upload drag & drop con preview" path="components-filedropzone" />
            <ComponentCard name="SearchableSelect" description="Combobox con busqueda" path="components-searchableselect" />
          </Grid>

          {/* Specialized Modals */}
          <SectionTitle title="Modales Especializados" />
          <Grid>
            <ComponentCard name="ConfirmModal" description="Confirmacion con variantes" path="components-confirmmodal" />
            <ComponentCard name="ExportModal" description="Exportar datos CSV/Excel/PDF" path="components-exportmodal" />
            <ComponentCard name="HelpModal" description="Modal de ayuda con secciones" path="components-helpmodal" />
          </Grid>

          {/* UI Primitives */}
          <SectionTitle title="Primitivos UI" />
          <Grid>
            <ComponentCard name="KPICard" description="Tarjeta de indicador clave" path="components-kpicard" />
            <ComponentCard name="PageTabs" description="Tabs de navegacion por pagina" path="components-pagetabs" />
            <ComponentCard name="Switch" description="Toggle switch con label" path="components-switch" />
            <ComponentCard name="NoteBanner" description="Banner informativo con variantes" path="components-notebanner" />
            <ComponentCard name="ErrorMessage" description="Mensaje de error inline" path="components-errormessage" />
          </Grid>

          {/* Templates */}
          <SectionTitle title="Templates y Paginas" />
          <Grid>
            <ComponentCard name="Login" description="Pagina de inicio de sesion" path="components-login" />
            <ComponentCard name="Register" description="Pagina de registro" path="components-register" />
            <ComponentCard name="CreditCard" description="Tarjeta interactiva 3D" path="components-interactivecreditcard" />
            <ComponentCard name="PaymentForm" description="Selector de metodo de pago" path="components-paymentmethodcard" />
          </Grid>

          {/* Footer */}
          <div
            style={{
              marginTop: 48,
              paddingTop: 24,
              borderTop: "1px solid rgba(196,255,13,0.06)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#c4ff0d", opacity: 0.5 }} />
              <p style={{ fontSize: 12, color: "#444", margin: 0 }}>
                &copy; 2026 HANNAH UI &middot; React + Tailwind CSS
              </p>
            </div>
            <div style={{ display: "flex", gap: 16 }}>
              <span style={{ fontSize: 11, color: "#555" }}>78+ componentes</span>
              <span style={{ fontSize: 11, color: "#555" }}>12+ filtros</span>
              <span style={{ fontSize: 11, color: "#555" }}>6+ templates</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Storybook config ─── */
const meta: Meta = {
  title: "Welcome",
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen",
    backgrounds: { disable: true },
    controls: { disable: true },
    actions: { disable: true },
  },
};

export default meta;
type Story = StoryObj;

export const Dashboard_: Story = {
  name: "Dashboard",
  render: () => <Dashboard />,
};
