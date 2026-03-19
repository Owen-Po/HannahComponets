import { useState, useEffect, useRef } from "react";
import {
  Eye,
  EyeOff,
  Loader2,
  AlertCircle,
  ArrowRight,
  Check,
  ShieldCheck,
} from "lucide-react";
import { cn } from "../../utils/cn";

/* ─────────────────────────────────────────
   Types
───────────────────────────────────────── */
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginValidationRules {
  minPasswordLength?: number;
  emailPattern?: RegExp;
  emailErrorMessage?: string;
  passwordErrorMessage?: string;
}

export interface LoginLink {
  label: string;
  href: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export interface SocialProvider {
  id: string;
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}

export interface LoginProps {
  // ── Content ──
  title?: string;
  description?: string;
  companyName?: string;
  heroTitle?: React.ReactNode;
  heroSubtitle?: string;
  heroTagline?: string;
  submitLabel?: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  passwordLabel?: string;
  passwordPlaceholder?: string;

  // ── Visual ──
  showHero?: boolean;
  logo?: React.ReactNode;
  accentColor?: string;

  // ── State ──
  loading?: boolean;
  error?: string;
  defaultEmail?: string;

  // ── Validation ──
  validationRules?: LoginValidationRules;

  // ── Extra links ──
  forgotPasswordLink?: LoginLink;
  registerLink?: LoginLink;
  termsLink?: LoginLink;

  // ── Social login ──
  socialProviders?: SocialProvider[];

  // ── Callbacks ──
  onSubmit: (data: LoginCredentials) => void | Promise<void>;
  onChange?: (data: LoginCredentials) => void;
}

/* ─────────────────────────────────────────
   Particle canvas
───────────────────────────────────────── */
const ParticleCanvas = ({ accentColor }: { accentColor: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    interface Pt { x: number; y: number; vx: number; vy: number; r: number }
    let pts: Pt[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      pts = Array.from({ length: 55 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.5 + 0.5,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `${accentColor}99`;
        ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90) {
            const alpha = Math.round(50 * (1 - dist / 90)).toString(16).padStart(2, "0");
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `${accentColor}${alpha}`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };

    resize(); draw();
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, [accentColor]);

  return <canvas ref={canvasRef} className="absolute inset-0 size-full" />;
};

/* ─────────────────────────────────────────
   Main component
───────────────────────────────────────── */
export const Login = ({
  title = "Bienvenido",
  description = "Ingresa tus credenciales para continuar.",
  companyName = "Sistema",
  heroTitle,
  heroSubtitle,
  heroTagline = "Component Library",
  submitLabel = "Iniciar sesión",
  emailLabel = "Correo electrónico",
  emailPlaceholder = "correo@empresa.com",
  passwordLabel = "Contraseña",
  passwordPlaceholder = "••••••••",
  showHero = true,
  logo,
  accentColor = "#7c6aff",
  loading = false,
  error,
  defaultEmail = "",
  validationRules = {},
  forgotPasswordLink,
  registerLink,
  termsLink,
  socialProviders,
  onSubmit,
  onChange,
}: LoginProps) => {
  const {
    minPasswordLength = 6,
    emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    emailErrorMessage = "Ingresa un correo válido.",
    passwordErrorMessage = `La contraseña debe tener al menos ${minPasswordLength} caracteres.`,
  } = validationRules;

  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState({ email: false, password: false });
  const [focusedField, setFocusedField] = useState<"email" | "password" | null>(null);
  const [form, setForm] = useState<LoginCredentials>({ email: defaultEmail, password: "" });

  const emailInvalid = touched.email && !emailPattern.test(form.email);
  const passwordInvalid = touched.password && form.password.length < minPasswordLength;

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
    setTouched({ email: true, password: true });
    if (!emailPattern.test(form.email)) return;
    if (form.password.length < minPasswordLength) return;
    await onSubmit(form);
  };

  const getInputStyle = (field: "email" | "password", hasError: boolean): React.CSSProperties => {
    if (hasError) return { borderColor: "rgba(248,113,113,0.5)", backgroundColor: "rgba(248,113,113,0.05)" };
    if (focusedField === field) return { borderColor: accentColor, backgroundColor: `${accentColor}12` };
    return {};
  };

  // Light mode base, dark: override
  const inputBase = cn(
    "h-[46px] w-full rounded-lg border px-4 text-sm outline-none transition-all duration-200 disabled:opacity-50",
    "border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400",
    "dark:border-gray-700 dark:bg-gray-800/60 dark:text-white dark:placeholder:text-gray-600",
  );

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-50 px-4 py-16 dark:bg-gray-950">
      <div className="flex w-full max-w-225 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:shadow-2xl">

        {/* ── Hero ── */}
        {showHero && (
          <div className="relative hidden w-[44%] overflow-hidden bg-gray-100 lg:flex dark:bg-gray-950">
            <ParticleCanvas accentColor={accentColor} />
            <div className="pointer-events-none absolute inset-0 z-1 bg-linear-to-b from-gray-100/50 via-transparent to-gray-100/85 dark:from-gray-950/50 dark:to-gray-950/85" />
            <div className="absolute inset-0 z-10 flex flex-col justify-end p-10">
              {logo && <div className="mb-auto pt-4">{logo}</div>}
              <div>
                <p className="mb-4 text-[11px] uppercase tracking-[0.18em] text-gray-400 dark:text-gray-600">
                  {heroTagline}
                </p>
                <h2 className="mb-2 text-[2rem] font-extrabold leading-[1.15] text-gray-900 dark:text-white">
                  {heroTitle ?? (
                    <>Acceso al{" "}<span style={{ color: accentColor }}>sistema</span></>
                  )}
                </h2>
                <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-600">
                  {heroSubtitle ?? "Plataforma segura & moderna para tu equipo."}
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
              <ShieldCheck size={16} color="#fff" strokeWidth={2.5} />
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
                    o continúa con email
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

              {/* Email */}
              <div>
                <label className="mb-2 block text-[11.5px] font-medium uppercase tracking-[0.08em] text-gray-400 dark:text-gray-500">
                  {emailLabel}
                </label>
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
                <div className="mb-2 flex items-center justify-between">
                  <label className="block text-[11.5px] font-medium uppercase tracking-[0.08em] text-gray-400 dark:text-gray-500">
                    {passwordLabel}
                  </label>
                  {forgotPasswordLink && (
                    <a
                      href={forgotPasswordLink.href}
                      onClick={forgotPasswordLink.onClick}
                      className="text-[11.5px] transition-colors hover:opacity-70"
                      style={{ color: accentColor }}
                    >
                      {forgotPasswordLink.label}
                    </a>
                  )}
                </div>
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
                    autoComplete="current-password"
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

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-lg text-sm font-bold tracking-[0.04em] text-white transition-all duration-200 hover:-translate-y-px active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
                style={{ backgroundColor: accentColor }}
              >
                {loading ? (
                  <><Loader2 size={17} className="animate-spin" />Iniciando sesión...</>
                ) : (
                  <>{submitLabel}<ArrowRight size={16} /></>
                )}
              </button>

              {/* Terms */}
              {termsLink && (
                <p className="text-center text-[11.5px] leading-relaxed text-gray-400 dark:text-gray-700">
                  Al continuar aceptas los{" "}
                  <a
                    href={termsLink.href}
                    onClick={termsLink.onClick}
                    className="underline underline-offset-2 transition-colors hover:text-gray-600 dark:hover:text-gray-400"
                  >
                    {termsLink.label}
                  </a>
                </p>
              )}

              {/* Register link */}
              {registerLink && (
                <p className="text-center text-[13px] text-gray-500 dark:text-gray-600">
                  ¿No tienes cuenta?{" "}
                  <a
                    href={registerLink.href}
                    onClick={registerLink.onClick}
                    className="font-medium transition-colors hover:opacity-80"
                    style={{ color: accentColor }}
                  >
                    {registerLink.label}
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
