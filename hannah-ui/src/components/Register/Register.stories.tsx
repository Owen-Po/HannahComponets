import type { Meta, StoryObj } from "@storybook/react";
import { Register } from "./Register";

/* ─────────────────────────────────────────
   Google icon SVG (inline, no dependency)
───────────────────────────────────────── */
const GoogleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

/* ─────────────────────────────────────────
   Shared handlers
───────────────────────────────────────── */
const noop = (): void => {};
const noopAsync = async (): Promise<void> => {};

/* ─────────────────────────────────────────
   Meta
───────────────────────────────────────── */
const meta: Meta<typeof Register> = {
  title: "Components/Register",
  component: Register,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Componente de registro con hero animado de partículas, validación de campos en tiempo real, soporte para proveedores sociales, checkbox de términos y color de acento dinámico.",
      },
    },
  },
  argTypes: {
    onSubmit: { action: "submitted" },
    onChange: { action: "changed" },

    title: {
      control: "text",
      description: "Título principal del formulario",
      table: { category: "Contenido", defaultValue: { summary: "Crear cuenta" } },
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
    heroTagline: { control: "text", table: { category: "Contenido" } },
    heroSubtitle: { control: "text", table: { category: "Contenido" } },
    submitLabel: {
      control: "text",
      table: { category: "Contenido", defaultValue: { summary: "Registrarme" } },
    },
    nameLabel: { control: "text", table: { category: "Contenido" } },
    emailLabel: { control: "text", table: { category: "Contenido" } },
    passwordLabel: { control: "text", table: { category: "Contenido" } },
    confirmPasswordLabel: { control: "text", table: { category: "Contenido" } },

    accentColor: {
      control: "color",
      description: "Color de acento",
      table: { category: "Visual", defaultValue: { summary: "#7c6aff" } },
    },
    showHero: {
      control: "boolean",
      table: { category: "Visual", defaultValue: { summary: "true" } },
    },
    showTermsCheckbox: {
      control: "boolean",
      table: { category: "Visual", defaultValue: { summary: "false" } },
    },

    loading: {
      control: "boolean",
      table: { category: "Estado", defaultValue: { summary: "false" } },
    },
    error: { control: "text", table: { category: "Estado" } },
    validationRules: { control: "object", table: { category: "Validación" } },
    loginLink: { control: "object", table: { category: "Links" } },
    termsLink: { control: "object", table: { category: "Links" } },

    logo: { table: { disable: true } },
    heroTitle: { table: { disable: true } },
    socialProviders: { table: { disable: true } },
    termsCheckboxLabel: { table: { disable: true } },
  },
  args: {
    onSubmit: noopAsync,
    onChange: noop,
    companyName: "Acme Corp",
  },
};

export default meta;
type Story = StoryObj<typeof Register>;

/* ─────────────────────────────────────────
   Stories
───────────────────────────────────────── */

export const Default: Story = {
  name: "Light mode",
};

export const DarkMode: Story = {
  name: "Dark mode",
  parameters: { backgrounds: { default: "Dark" } },
};

export const Loading: Story = {
  args: { loading: true },
};

export const WithServerError: Story = {
  name: "Server error",
  args: { error: "Este correo ya está registrado. Intenta con otro o inicia sesión." },
};

export const StrictValidation: Story = {
  name: "Strict validation",
  args: {
    validationRules: {
      minPasswordLength: 10,
      nameMinLength: 3,
      passwordErrorMessage: "La contraseña debe tener al menos 10 caracteres.",
    },
  },
};

export const WithoutHero: Story = {
  name: "Without hero",
  args: { showHero: false },
};

export const WithLinks: Story = {
  name: "With links",
  args: {
    loginLink: { label: "Iniciar sesión", href: "#" },
    termsLink: { label: "Términos y Condiciones", href: "#" },
  },
};

export const WithTermsCheckbox: Story = {
  name: "With terms checkbox",
  args: {
    showTermsCheckbox: true,
    termsLink: { label: "Términos de Servicio", href: "#" },
    loginLink: { label: "Iniciar sesión", href: "#" },
  },
};

export const WithSocialProviders: Story = {
  name: "Social providers",
  args: {
    socialProviders: [
      { id: "google", label: "Registrarse con Google", icon: <GoogleIcon />, onClick: noop },
      { id: "github", label: "Registrarse con GitHub", icon: <GitHubIcon />, onClick: noop },
    ],
  },
};

export const FullFeatured: Story = {
  name: "Full featured",
  args: {
    title: "Crear cuenta",
    description: "Regístrate para acceder a todas las funcionalidades.",
    heroTagline: "Acme Platform",
    heroSubtitle: "Gestiona equipos, proyectos y métricas en un solo lugar.",
    loginLink: { label: "Iniciar sesión", href: "#" },
    termsLink: { label: "Términos de Servicio", href: "#" },
    showTermsCheckbox: true,
    validationRules: { minPasswordLength: 8 },
    socialProviders: [
      { id: "google", label: "Registrarse con Google", icon: <GoogleIcon />, onClick: noop },
      { id: "github", label: "Registrarse con GitHub", icon: <GitHubIcon />, onClick: noop },
    ],
  },
};

export const AccentGreen: Story = {
  name: "Accent · Green",
  args: { accentColor: "#10b981", companyName: "GreenApp" },
};

export const AccentAmber: Story = {
  name: "Accent · Amber",
  args: { accentColor: "#f59e0b", companyName: "Dashboard" },
};

export const AccentBlue: Story = {
  name: "Accent · Blue",
  args: { accentColor: "#3b82f6", companyName: "CloudHQ" },
};

export const WithLogo: Story = {
  name: "With logo",
  args: {
    companyName: "Acme Corp",
    logo: (
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ width: 28, height: 28, borderRadius: 6, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1L13 12H1L7 1Z" fill="#0e0e18" /></svg>
        </div>
        <span style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>Acme</span>
      </div>
    ),
  },
};

export const English: Story = {
  name: "English copy",
  args: {
    title: "Create account",
    description: "Fill in your details to get started.",
    submitLabel: "Sign up",
    nameLabel: "Full name",
    namePlaceholder: "John Doe",
    emailLabel: "Email address",
    emailPlaceholder: "you@company.com",
    passwordLabel: "Password",
    confirmPasswordLabel: "Confirm password",
    companyName: "Acme Corp",
    loginLink: { label: "Sign in", href: "#" },
    validationRules: {
      emailErrorMessage: "Please enter a valid email.",
      passwordErrorMessage: "Password must be at least 6 characters.",
      confirmPasswordErrorMessage: "Passwords do not match.",
      nameErrorMessage: "Name must be at least 2 characters.",
    },
  },
};
