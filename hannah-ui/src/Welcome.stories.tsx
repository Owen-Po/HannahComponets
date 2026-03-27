import type { Meta, StoryObj } from "@storybook/react";

/* ─────────────────────────────────────────
   Navigation helper — works in Storybook 10
   Uses the Storybook URL API to navigate
───────────────────────────────────────── */
function navigateTo(path: string) {
  // Storybook 10 URL format: ?path=/docs/<story-id>--docs
  const url = `/?path=/docs/${path}--docs`;

  // Try the Storybook channel API first (works within iframe)
  try {
    const channel = (window.parent as any).__STORYBOOK_ADDONS_CHANNEL__;
    if (channel) {
      channel.emit("setCurrentStory", { storyId: `${path}--docs` });
      return;
    }
  } catch {
    // fallback below
  }

  // Fallback: navigate parent window
  if (window.parent !== window) {
    window.parent.location.href = url;
  } else {
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
        borderRadius: "12px",
        border: "1px solid #2a2a2a",
        background: "#0f0f0f",
        textDecoration: "none",
        transition: "all 0.2s ease",
        cursor: "pointer",
        textAlign: "left",
        color: "inherit",
        fontFamily: "inherit",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(204, 255, 0, 0.3)";
        e.currentTarget.style.background = "rgba(204, 255, 0, 0.03)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#2a2a2a";
        e.currentTarget.style.background = "#0f0f0f";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "8px",
        }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#CCFF00",
            flexShrink: 0,
          }}
        />
        <span style={{ fontSize: "14px", fontWeight: 600, color: "#fff" }}>
          {name}
        </span>
      </div>
      <p
        style={{
          fontSize: "12px",
          color: "#666",
          margin: 0,
          lineHeight: 1.5,
          paddingLeft: "18px",
        }}
      >
        {description}
      </p>
    </button>
  );
}

/* ─── Section header ─── */
function SectionTitle({ title }: { title: string }) {
  return (
    <h2
      style={{
        fontSize: "12px",
        color: "#666",
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        marginBottom: "16px",
        marginTop: "0",
        fontWeight: 600,
      }}
    >
      {title}
    </h2>
  );
}

/* ─── Grid ─── */
function Grid({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: "12px",
        marginBottom: "36px",
      }}
    >
      {children}
    </div>
  );
}

/* ─── Dashboard page (self-contained styles) ─── */
function Dashboard() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        overflow: "auto",
        background: "#0a0a0a",
        color: "#fff",
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        padding: "48px",
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "48px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: "#CCFF00",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                fontSize: 20,
                color: "#0a0a0a",
              }}
            >
              H
            </div>
            <div>
              <h1
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  margin: 0,
                  letterSpacing: "-0.02em",
                }}
              >
                HANNAH <span style={{ color: "#CCFF00" }}>UI</span>
              </h1>
              <p
                style={{
                  fontSize: 13,
                  color: "#666",
                  margin: 0,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Design System · v0.0.2
              </p>
            </div>
          </div>
          <p
            style={{
              fontSize: 15,
              color: "#a0a0a0",
              maxWidth: 600,
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Librería de componentes React + Tailwind CSS. Explora cada componente
            haciendo click en las tarjetas o usa la barra lateral.
          </p>
        </div>

        {/* Install */}
        <div
          style={{
            padding: 24,
            borderRadius: 16,
            border: "1px solid #2a2a2a",
            background: "#0f0f0f",
            marginBottom: 40,
          }}
        >
          <h3
            style={{
              fontSize: 13,
              color: "#CCFF00",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginTop: 0,
              marginBottom: 12,
            }}
          >
            Instalación
          </h3>
          <code
            style={{
              display: "block",
              padding: 16,
              borderRadius: 10,
              background: "#141414",
              border: "1px solid #2a2a2a",
              color: "#CCFF00",
              fontSize: 14,
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            npm install hannah-ui
          </code>
        </div>

        {/* Forms */}
        <SectionTitle title="Formularios" />
        <Grid>
          <ComponentCard name="Button" description="Botones con variantes y estados" path="components-button" />
          <ComponentCard name="Input" description="Campos de texto con iconos" path="components-input" />
          <ComponentCard name="Textarea" description="Área de texto expandible" path="components-textarea" />
          <ComponentCard name="Select" description="Dropdown de selección" path="components-select" />
          <ComponentCard name="Checkbox" description="Casillas de verificación" path="components-checkbox" />
          <ComponentCard name="Radio" description="Botones de radio" path="components-radio" />
          <ComponentCard name="Toggle" description="Switch on/off" path="components-toggle" />
          <ComponentCard name="Form" description="Layouts de formulario" path="components-form" />
        </Grid>

        {/* Data */}
        <SectionTitle title="Datos y Display" />
        <Grid>
          <ComponentCard name="Table" description="Tablas con sorting y striped" path="components-table" />
          <ComponentCard name="Card" description="Contenedor composable" path="components-card" />
          <ComponentCard name="Badge" description="Indicadores de estado" path="components-badge" />
          <ComponentCard name="Chip" description="Tags removibles" path="components-chip" />
          <ComponentCard name="Avatar" description="Fotos de usuario con grupo" path="components-avatar" />
          <ComponentCard name="StatsCard" description="Tarjetas de estadísticas" path="components-statscard" />
          <ComponentCard name="Alert" description="Mensajes contextuales" path="components-alert" />
        </Grid>

        {/* Nav */}
        <SectionTitle title="Navegación" />
        <Grid>
          <ComponentCard name="Header" description="Barra superior" path="components-header" />
          <ComponentCard name="Sidebar" description="Menú lateral colapsable" path="components-sidebar" />
          <ComponentCard name="Tabs" description="Pestañas con variantes" path="components-tabs" />
          <ComponentCard name="Breadcrumb" description="Rutas de navegación" path="components-breadcrumb" />
          <ComponentCard name="Pagination" description="Paginación de datos" path="components-pagination" />
        </Grid>

        {/* Overlays */}
        <SectionTitle title="Overlays" />
        <Grid>
          <ComponentCard name="Modal" description="Diálogos modales" path="components-modal" />
          <ComponentCard name="Toast" description="Notificaciones temporales" path="components-toast" />
        </Grid>

        {/* Filters */}
        <SectionTitle title="Filtros" />
        <Grid>
          <ComponentCard name="FilterButton" description="Botón con popover de filtros" path="components-filter" />
          <ComponentCard name="FilterSelect" description="Dropdown filtrable" path="components-filter" />
          <ComponentCard name="FilterDate" description="Selector de fecha" path="components-filter" />
          <ComponentCard name="FilterSearch" description="Búsqueda con debounce" path="components-filter" />
          <ComponentCard name="FilterChips" description="Multi-select con chips" path="components-filter" />
        </Grid>

        {/* Templates */}
        <SectionTitle title="Templates y Páginas" />
        <Grid>
          <ComponentCard name="Login" description="Página de inicio de sesión" path="components-login" />
          <ComponentCard name="Register" description="Página de registro" path="components-register" />
          <ComponentCard name="CreditCard" description="Tarjeta interactiva 3D" path="components-interactivecreditcard" />
          <ComponentCard name="PaymentForm" description="Selector de método de pago" path="components-paymentmethodcard" />
        </Grid>

        {/* Footer */}
        <div
          style={{
            marginTop: 48,
            paddingTop: 24,
            borderTop: "1px solid #1a1a1a",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: 12, color: "#444", margin: 0 }}>
            © 2026 HANNAH UI · React + Tailwind CSS
          </p>
          <div style={{ display: "flex", gap: 16 }}>
            <span style={{ fontSize: 11, color: "#555" }}>29 componentes</span>
            <span style={{ fontSize: 11, color: "#555" }}>7 filtros</span>
            <span style={{ fontSize: 11, color: "#555" }}>4 templates</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Storybook config ─── */
const meta: Meta = {
  title: "Welcome",
  parameters: {
    /*
      Estilos aislados: fullscreen + sin backgrounds toolbar.
      El Dashboard maneja su propio fondo (#0a0a0a) via inline styles.
      Otros stories mantienen layout "centered" + fondo blanco por defecto.
    */
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
