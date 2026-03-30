import { useState } from "react";
import {
  Eye,
  EyeOff,
  Loader2,
  AlertCircle,
  ArrowRight,
  Check,
  UserPlus,
} from "lucide-react";
import { cn } from "../../utils/cn";

/* ─────────────────────────────────────────
   Types
───────────────────────────────────────── */
export interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface RegisterValidationRules {
  minPasswordLength?: number;
  emailPattern?: RegExp;
  nameMinLength?: number;
  emailErrorMessage?: string;
  passwordErrorMessage?: string;
  confirmPasswordErrorMessage?: string;
  nameErrorMessage?: string;
}

export interface RegisterLink {
  label: string;
  href: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export interface RegisterSocialProvider {
  id: string;
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}

export interface RegisterProps {
  // ── Content ──
  title?: string;
  description?: string;
  companyName?: string;
  heroTitle?: React.ReactNode;
  heroSubtitle?: string;
  heroTagline?: string;
  submitLabel?: string;
  nameLabel?: string;
  namePlaceholder?: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  passwordLabel?: string;
  passwordPlaceholder?: string;
  confirmPasswordLabel?: string;
  confirmPasswordPlaceholder?: string;

  // ── Visual ──
  showHero?: boolean;
  logo?: React.ReactNode;
  accentColor?: string;
  heroImage?: string;

  // ── State ──
  loading?: boolean;
  error?: string;

  // ── Validation ──
  validationRules?: RegisterValidationRules;

  // ── Extra links ──
  loginLink?: RegisterLink;
  termsLink?: RegisterLink;

  // ── Social login ──
  socialProviders?: RegisterSocialProvider[];

  // ── Terms checkbox ──
  showTermsCheckbox?: boolean;
  termsCheckboxLabel?: React.ReactNode;

  // ── Callbacks ──
  onSubmit: (data: RegisterData) => void | Promise<void>;
  onChange?: (data: RegisterData) => void;
}

/* ─────────────────────────────────────────
   Main component
───────────────────────────────────────── */
export const Register = ({
  title = "Crear cuenta",
  description = "Completa tus datos para registrarte.",
  companyName = "Sistema",
  heroTitle,
  heroSubtitle,
  heroTagline = "Component Library",
  heroImage,
  submitLabel = "Registrarme",
  nameLabel = "Nombre completo",
  namePlaceholder = "Tu nombre",
  emailLabel = "Correo electrónico",
  emailPlaceholder = "correo@empresa.com",
  passwordLabel = "Contraseña",
  passwordPlaceholder = "••••••••",
  confirmPasswordLabel = "Confirmar contraseña",
  confirmPasswordPlaceholder = "••••••••",
  showHero = true,
  logo,
  accentColor = "#7c6aff",
  loading = false,
  error,
  validationRules = {},
  loginLink,
  termsLink,
  socialProviders,
  showTermsCheckbox = false,
  termsCheckboxLabel,
  onSubmit,
  onChange,
}: RegisterProps) => {
  const {
    minPasswordLength = 6,
    emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    nameMinLength = 2,
    emailErrorMessage = "Ingresa un correo válido.",
    passwordErrorMessage = `La contraseña debe tener al menos ${minPasswordLength} caracteres.`,
    confirmPasswordErrorMessage = "Las contraseñas no coinciden.",
    nameErrorMessage = `El nombre debe tener al menos ${nameMinLength} caracteres.`,
  } = validationRules;

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [touched, setTouched] = useState({ name: false, email: false, password: false, confirmPassword: false });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [form, setForm] = useState<RegisterData>({ name: "", email: "", password: "", confirmPassword: "" });

  const nameInvalid = touched.name && form.name.trim().length < nameMinLength;
  const emailInvalid = touched.email && !emailPattern.test(form.email);
  const passwordInvalid = touched.password && form.password.length < minPasswordLength;
  const confirmInvalid = touched.confirmPassword && form.password !== form.confirmPassword;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updated = { ...form, [e.target.name]: e.target.value };
    setForm(updated);
    onChange?.(updated);
  };

  const handleBlur = (field: keyof typeof touched) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setFocusedField(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched({ name: true, email: true, password: true, confirmPassword: true });
    if (form.name.trim().length < nameMinLength) return;
    if (!emailPattern.test(form.email)) return;
    if (form.password.length < minPasswordLength) return;
    if (form.password !== form.confirmPassword) return;
    if (showTermsCheckbox && !termsAccepted) return;
    await onSubmit(form);
  };

  const getInputStyle = (field: string, hasError: boolean): React.CSSProperties => {
    if (hasError) return { borderColor: "rgba(248,113,113,0.5)", backgroundColor: "rgba(248,113,113,0.05)" };
    if (focusedField === field) return { borderColor: accentColor, backgroundColor: `${accentColor}12` };
    return {};
  };

  const inputBase = cn(
    "h-[46px] w-full rounded-lg border px-4 text-sm outline-none transition-all duration-200 disabled:opacity-50",
    "border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400",
    "dark:border-gray-700 dark:bg-gray-800/60 dark:text-white dark:placeholder:text-gray-600",
  );

  const labelClass = "mb-2 block text-[11.5px] font-medium uppercase tracking-[0.08em] text-gray-400 dark:text-gray-500";

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-50 px-4 py-16 dark:bg-gray-950">
      <div className="flex w-full max-w-225 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:shadow-2xl">

        {/* ── Hero ── */}
        {showHero && (
          <div className="relative hidden w-[44%] overflow-hidden bg-gray-100 lg:flex dark:bg-gray-950">
            {heroImage ? (
              <img src={heroImage} alt="" className="absolute inset-0 size-full object-cover" />
            ) : (
              <div className="absolute inset-0" style={{ backgroundColor: `${accentColor}18` }} />
            )}
            <div className="pointer-events-none absolute inset-0 z-1 bg-linear-to-b from-gray-100/50 via-transparent to-gray-100/85 dark:from-gray-950/50 dark:to-gray-950/85" />
            <div className="absolute inset-0 z-10 flex flex-col justify-end p-10">
              {logo && <div className="mb-auto pt-4">{logo}</div>}
              <div>
                <p className="mb-4 text-[11px] uppercase tracking-[0.18em] text-gray-400 dark:text-gray-600">
                  {heroTagline}
                </p>
                <h2 className="mb-2 text-[2rem] font-extrabold leading-[1.15] text-gray-900 dark:text-white">
                  {heroTitle ?? (
                    <>Únete al{" "}<span style={{ color: accentColor }}>equipo</span></>
                  )}
                </h2>
                <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-600">
                  {heroSubtitle ?? "Crea tu cuenta y comienza a gestionar tu equipo."}
                </p>
                <p className="mt-6 text-xs text-gray-400 dark:text-gray-700">
                  © {new Date().getFullYear()} {companyName}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ── Form side ── */}
        <div className="flex flex-1 items-center justify-center px-10 py-12">
          <div className="w-full max-w-90">

            {/* Logo mark */}
            <div
              className="mb-7 flex size-8 items-center justify-center rounded-lg"
              style={{ backgroundColor: accentColor }}
            >
              <UserPlus size={16} color="#fff" strokeWidth={2.5} />
            </div>

            <h1 className="mb-1.5 text-2xl font-bold text-gray-900 dark:text-white">
              {title}
            </h1>
            <p className="mb-8 text-[13.5px] leading-relaxed text-gray-500 dark:text-gray-500">
              {description}
            </p>

            {/* Social providers */}
            {socialProviders && socialProviders.length > 0 && (
              <div className="mb-6 space-y-2.5">
                {socialProviders.map((provider) => (
                  <button
                    key={provider.id}
                    type="button"
                    onClick={provider.onClick}
                    disabled={loading}
                    className="flex h-11 w-full items-center justify-center gap-2.5 rounded-lg border border-gray-200 bg-gray-50 text-[13.5px] font-medium text-gray-600 transition-all hover:bg-gray-100 hover:text-gray-900 disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800/60 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
                  >
                    {provider.icon}
                    {provider.label}
                  </button>
                ))}
                <div className="flex items-center gap-3 py-1">
                  <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
                  <span className="text-[11px] uppercase tracking-wider text-gray-400 dark:text-gray-700">
                    o regístrate con email
                  </span>
                  <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>

              {/* Server error */}
              {error && (
                <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3.5 py-2.5 text-[13px] text-red-600 dark:border-red-500/25 dark:bg-red-500/10 dark:text-red-400">
                  <AlertCircle size={15} className="shrink-0" />
                  {error}
                </div>
              )}

              {/* Name */}
              <div>
                <label className={labelClass}>{nameLabel}</label>
                <input
                  type="text"
                  name="name"
                  placeholder={namePlaceholder}
                  value={form.name}
                  onChange={handleChange}
                  onBlur={() => handleBlur("name")}
                  onFocus={() => setFocusedField("name")}
                  disabled={loading}
                  autoComplete="name"
                  className={inputBase}
                  style={getInputStyle("name", nameInvalid)}
                  aria-invalid={nameInvalid}
                  aria-describedby={nameInvalid ? "name-error" : undefined}
                />
                {nameInvalid && (
                  <p id="name-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500 dark:text-red-400">
                    <AlertCircle size={12} className="shrink-0" />
                    {nameErrorMessage}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className={labelClass}>{emailLabel}</label>
                <input
                  type="email"
                  name="email"
                  placeholder={emailPlaceholder}
                  value={form.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur("email")}
                  onFocus={() => setFocusedField("email")}
                  disabled={loading}
                  autoComplete="email"
                  className={inputBase}
                  style={getInputStyle("email", emailInvalid)}
                  aria-invalid={emailInvalid}
                  aria-describedby={emailInvalid ? "email-error" : undefined}
                />
                {emailInvalid && (
                  <p id="email-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500 dark:text-red-400">
                    <AlertCircle size={12} className="shrink-0" />
                    {emailErrorMessage}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className={labelClass}>{passwordLabel}</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder={passwordPlaceholder}
                    value={form.password}
                    onChange={handleChange}
                    onBlur={() => handleBlur("password")}
                    onFocus={() => setFocusedField("password")}
                    disabled={loading}
                    autoComplete="new-password"
                    className={cn(inputBase, "pr-11")}
                    style={getInputStyle("password", passwordInvalid)}
                    aria-invalid={passwordInvalid}
                    aria-describedby={passwordInvalid ? "password-error" : undefined}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-400"
                    tabIndex={-1}
                    aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {passwordInvalid && (
                  <p id="password-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500 dark:text-red-400">
                    <AlertCircle size={12} className="shrink-0" />
                    {passwordErrorMessage}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className={labelClass}>{confirmPasswordLabel}</label>
                <div className="relative">
                  <input
                    type={showConfirm ? "text" : "password"}
                    name="confirmPassword"
                    placeholder={confirmPasswordPlaceholder}
                    value={form.confirmPassword}
                    onChange={handleChange}
                    onBlur={() => handleBlur("confirmPassword")}
                    onFocus={() => setFocusedField("confirmPassword")}
                    disabled={loading}
                    autoComplete="new-password"
                    className={cn(inputBase, "pr-11")}
                    style={getInputStyle("confirmPassword", confirmInvalid)}
                    aria-invalid={confirmInvalid}
                    aria-describedby={confirmInvalid ? "confirm-error" : undefined}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-400"
                    tabIndex={-1}
                    aria-label={showConfirm ? "Ocultar contraseña" : "Mostrar contraseña"}
                  >
                    {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {confirmInvalid && (
                  <p id="confirm-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500 dark:text-red-400">
                    <AlertCircle size={12} className="shrink-0" />
                    {confirmPasswordErrorMessage}
                  </p>
                )}
              </div>

              {/* Terms checkbox */}
              {showTermsCheckbox && (
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    disabled={loading}
                    className="mt-0.5 size-4 rounded border-gray-300 accent-current"
                    style={{ accentColor }}
                  />
                  <span className="text-[13px] text-gray-500 dark:text-gray-400">
                    {termsCheckboxLabel ?? (
                      <>
                        Acepto los{" "}
                        {termsLink ? (
                          <a
                            href={termsLink.href}
                            onClick={termsLink.onClick}
                            className="underline underline-offset-2 transition-colors hover:opacity-70"
                            style={{ color: accentColor }}
                          >
                            {termsLink.label}
                          </a>
                        ) : (
                          "términos y condiciones"
                        )}
                      </>
                    )}
                  </span>
                </label>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading || (showTermsCheckbox && !termsAccepted)}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-lg text-sm font-bold tracking-[0.04em] text-white transition-all duration-200 hover:-translate-y-px active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
                style={{ backgroundColor: accentColor }}
              >
                {loading ? (
                  <><Loader2 size={17} className="animate-spin" />Creando cuenta...</>
                ) : (
                  <>{submitLabel}<ArrowRight size={16} /></>
                )}
              </button>

              {/* Terms (non-checkbox version) */}
              {!showTermsCheckbox && termsLink && (
                <p className="text-center text-[11.5px] leading-relaxed text-gray-400 dark:text-gray-700">
                  Al registrarte aceptas los{" "}
                  <a
                    href={termsLink.href}
                    onClick={termsLink.onClick}
                    className="underline underline-offset-2 transition-colors hover:text-gray-600 dark:hover:text-gray-400"
                  >
                    {termsLink.label}
                  </a>
                </p>
              )}

              {/* Login link */}
              {loginLink && (
                <p className="text-center text-[13px] text-gray-500 dark:text-gray-600">
                  ¿Ya tienes cuenta?{" "}
                  <a
                    href={loginLink.href}
                    onClick={loginLink.onClick}
                    className="font-medium transition-colors hover:opacity-80"
                    style={{ color: accentColor }}
                  >
                    {loginLink.label}
                  </a>
                </p>
              )}

              {/* Footer divider */}
              <div className="flex items-center gap-2.5 pt-1">
                <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
                <span className="flex items-center gap-1.5 text-[11px] text-gray-400 dark:text-gray-700">
                  <Check size={11} />
                  {companyName}
                </span>
                <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
