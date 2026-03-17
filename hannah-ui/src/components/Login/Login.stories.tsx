import type { Meta, StoryObj } from "@storybook/react";
import { Login, type LoginProps } from "./Login";

/* ─────────────────────────────────────────
   Google icon SVG (inline, no dependency)
───────────────────────────────────────── */
const GoogleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

/* ─────────────────────────────────────────
   Shared handlers (no @storybook/test needed)
───────────────────────────────────────── */
const noop = (): void => {};
const noopAsync = async (): Promise<void> => {};

/* ─────────────────────────────────────────
   Meta
───────────────────────────────────────── */
const meta: Meta<typeof Login> = {
  title: "Components/Login",
  component: Login,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Componente de login con hero animado de partículas, validación de campos en tiempo real, soporte para proveedores sociales, links configurables y color de acento dinámico.",
      },
    },
  },
  argTypes: {
    // ── Callbacks ──
    onSubmit: { action: "submitted" },
    onChange: { action: "changed" },

    // ── Content ──
    title: {
      control: "text",
      description: "Título principal del formulario",
      table: { category: "Contenido", defaultValue: { summary: "Bienvenido" } },
    },
    description: {
      control: "text",
      description: "Subtítulo debajo del título",
      table: { category: "Contenido" },
    },
    companyName: {
      control: "text",
      description: "Nombre de la empresa (footer y hero)",
      table: { category: "Contenido", defaultValue: { summary: "Sistema" } },
    },
    heroTagline: {
      control: "text",
      description: "Etiqueta pequeña sobre el título del hero",
      table: {
        category: "Contenido",
        defaultValue: { summary: "Component Library" },
      },
    },
    heroSubtitle: {
      control: "text",
      description: "Subtítulo descriptivo en el panel hero",
      table: { category: "Contenido" },
    },
    submitLabel: {
      control: "text",
      description: "Texto del botón de envío",
      table: {
        category: "Contenido",
        defaultValue: { summary: "Iniciar sesión" },
      },
    },
    emailLabel: {
      control: "text",
      description: "Label del campo de correo",
      table: { category: "Contenido" },
    },
    emailPlaceholder: {
      control: "text",
      description: "Placeholder del campo de correo",
      table: { category: "Contenido" },
    },
    passwordLabel: {
      control: "text",
      description: "Label del campo de contraseña",
      table: { category: "Contenido" },
    },
    passwordPlaceholder: {
      control: "text",
      description: "Placeholder del campo de contraseña",
      table: { category: "Contenido" },
    },
    defaultEmail: {
      control: "text",
      description: "Pre-rellena el campo email",
      table: { category: "Contenido" },
    },

    // ── Visual ──
    accentColor: {
      control: "color",
      description: "Color de acento: botón, partículas, inputs y links",
      table: { category: "Visual", defaultValue: { summary: "#7c6aff" } },
    },
    showHero: {
      control: "boolean",
      description: "Muestra u oculta el panel hero izquierdo",
      table: { category: "Visual", defaultValue: { summary: "true" } },
    },

    // ── Estado ──
    loading: {
      control: "boolean",
      description: "Estado de carga: deshabilita el form y muestra spinner",
      table: { category: "Estado", defaultValue: { summary: "false" } },
    },
    error: {
      control: "text",
      description: "Error de servidor para mostrar en el banner rojo",
      table: { category: "Estado" },
    },

    // ── Validación ──
    validationRules: {
      control: "object",
      description: "Reglas de validación del lado del cliente",
      table: {
        category: "Validación",
        type: {
          summary: "LoginValidationRules",
          detail:
            "{ minPasswordLength?: number; emailPattern?: RegExp; emailErrorMessage?: string; passwordErrorMessage?: string }",
        },
      },
    },

    // ── Links ──
    forgotPasswordLink: {
      control: "object",
      description: "Link de 'olvidé mi contraseña' (junto al label)",
      table: {
        category: "Links",
        type: {
          summary: "LoginLink",
          detail: "{ label: string; href: string; onClick?: fn }",
        },
      },
    },
    registerLink: {
      control: "object",
      description: "Link de registro debajo del botón",
      table: { category: "Links" },
    },
    termsLink: {
      control: "object",
      description: "Link de términos y condiciones",
      table: { category: "Links" },
    },

    // ── Ocultar props complejos del panel ──
    logo: { table: { disable: true } },
    heroTitle: { table: { disable: true } },
    socialProviders: { table: { disable: true } },
  },
  args: {
    onSubmit: noopAsync,
    onChange: noop,
    companyName: "Acme Corp",
  },
};

export default meta;
type Story = StoryObj<typeof Login>;

/* ─────────────────────────────────────────
   Stories
───────────────────────────────────────── */

/** Estado limpio con valores por defecto */
export const Default: Story = {};

/** Spinner activo, formulario bloqueado */
export const Loading: Story = {
  args: {
    loading: true,
  },
};

/** Banner de error de servidor */
export const WithServerError: Story = {
  name: "Server error",
  args: {
    error: "Credenciales incorrectas. Verifica tu correo y contraseña.",
  },
};

/** Validación estricta: mínimo 10 caracteres */
export const StrictValidation: Story = {
  name: "Strict validation",
  parameters: {
    docs: {
      description: {
        story:
          "Toca los campos y déjalos vacíos para ver los errores. La contraseña requiere mínimo 10 caracteres.",
      },
    },
  },
  args: {
    validationRules: {
      minPasswordLength: 10,
      passwordErrorMessage: "La contraseña debe tener al menos 10 caracteres.",
    },
  },
};

/** Sin panel hero */
export const WithoutHero: Story = {
  name: "Without hero",
  args: {
    showHero: false,
  },
};

/** Email pre-rellenado */
export const WithDefaultEmail: Story = {
  name: "Pre-filled email",
  args: {
    defaultEmail: "usuario@empresa.com",
  },
};

/** Con links de recuperación, registro y términos */
export const WithLinks: Story = {
  name: "With links",
  args: {
    forgotPasswordLink: {
      label: "¿Olvidaste tu contraseña?",
      href: "#",
    },
    registerLink: {
      label: "Crear cuenta",
      href: "#",
    },
    termsLink: {
      label: "Términos y Condiciones",
      href: "#",
    },
  },
};

/** Social providers: Google y GitHub */
export const WithSocialProviders: Story = {
  name: "Social providers",
  args: {
    socialProviders: [
      {
        id: "google",
        label: "Continuar con Google",
        icon: <GoogleIcon />,
        onClick: noop,
      },
      {
        id: "github",
        label: "Continuar con GitHub",
        icon: <GitHubIcon />,
        onClick: noop,
      },
    ],
  },
};

/** Todo incluido */
export const FullFeatured: Story = {
  name: "Full featured",
  parameters: {
    docs: {
      description: {
        story:
          "Versión completa con social providers, todos los links y validación estricta.",
      },
    },
  },
  args: {
    title: "Iniciar sesión",
    description: "Accede a tu espacio de trabajo.",
    heroTagline: "Acme Platform",
    heroSubtitle: "Gestiona equipos, proyectos y métricas en un solo lugar.",
    forgotPasswordLink: { label: "¿Olvidaste tu contraseña?", href: "#" },
    registerLink: { label: "Crear cuenta gratis", href: "#" },
    termsLink: { label: "Términos de Servicio", href: "#" },
    validationRules: { minPasswordLength: 8 },
    socialProviders: [
      {
        id: "google",
        label: "Continuar con Google",
        icon: <GoogleIcon />,
        onClick: noop,
      },
      {
        id: "github",
        label: "Continuar con GitHub",
        icon: <GitHubIcon />,
        onClick: noop,
      },
    ],
  },
};

/** Acento verde */
export const AccentGreen: Story = {
  name: "Accent · Green",
  args: {
    accentColor: "#10b981",
    heroSubtitle: "Bienvenido de vuelta a tu panel de control.",
    companyName: "GreenApp",
  },
};

/** Acento ámbar */
export const AccentAmber: Story = {
  name: "Accent · Amber",
  args: {
    accentColor: "#f59e0b",
    heroSubtitle: "Accede a tus reportes y métricas en tiempo real.",
    companyName: "Dashboard",
  },
};

/** Acento azul */
export const AccentBlue: Story = {
  name: "Accent · Blue",
  args: {
    accentColor: "#3b82f6",
    heroSubtitle: "Tu centro de operaciones seguro y moderno.",
    companyName: "CloudHQ",
  },
};

/** Con logo en el hero */
export const WithLogo: Story = {
  name: "With logo",
  args: {
    companyName: "Acme Corp",
    logo: (
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 6,
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1L13 12H1L7 1Z" fill="#0e0e18" />
          </svg>
        </div>
        <span style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>
          Acme
        </span>
      </div>
    ),
  },
};

/** Textos en inglés */
export const English: Story = {
  name: "English copy",
  args: {
    title: "Welcome back",
    description: "Enter your credentials to access the system.",
    submitLabel: "Sign in",
    emailLabel: "Email address",
    emailPlaceholder: "you@company.com",
    passwordLabel: "Password",
    passwordPlaceholder: "••••••••",
    heroSubtitle: "A secure and modern platform for your team.",
    companyName: "Acme Corp",
    forgotPasswordLink: { label: "Forgot password?", href: "#" },
    registerLink: { label: "Create account", href: "#" },
    validationRules: {
      emailErrorMessage: "Please enter a valid email.",
      passwordErrorMessage: "Password must be at least 6 characters.",
    },
  },
};
