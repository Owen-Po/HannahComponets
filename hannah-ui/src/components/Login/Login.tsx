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

/* ─────────────────────────────────────────
   Types
───────────────────────────────────────── */
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginValidationRules {
  /** Minimum password length. Default: 6 */
  minPasswordLength?: number;
  /** Regex to validate email format. Defaults to standard email regex */
  emailPattern?: RegExp;
  /** Custom error message for invalid email */
  emailErrorMessage?: string;
  /** Custom error message for invalid password */
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
  /** External server-side error to display */
  error?: string;
  /** Pre-fill email field (e.g. from URL param) */
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
  /** Fires on every field change */
  onChange?: (data: LoginCredentials) => void;
}

/* ─────────────────────────────────────────
   Particle canvas
───────────────────────────────────────── */
interface ParticleCanvasProps {
  accentColor: string;
}

const ParticleCanvas = ({ accentColor }: ParticleCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    interface Pt {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
    }

    let pts: Pt[] = [];

    const resize = (): void => {
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

    const draw = (): void => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
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
            const alpha = Math.round(50 * (1 - dist / 90))
              .toString(16)
              .padStart(2, "0");
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

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [accentColor]);

  return <canvas ref={canvasRef} className="absolute inset-0 size-full" />;
};

/* ─────────────────────────────────────────
   Field-level error message
───────────────────────────────────────── */
interface FieldErrorProps {
  message?: string;
}

const FieldError = ({ message }: FieldErrorProps) => {
  if (!message) return null;
  return (
    <p className="mt-1.5 flex items-center gap-1.5 text-[12px] text-red-400">
      <AlertCircle size={12} className="shrink-0" />
      {message}
    </p>
  );
};

/* ─────────────────────────────────────────
   Helpers
───────────────────────────────────────── */
const ERROR_BORDER: React.CSSProperties = {
  borderColor: "rgba(248,113,113,0.5)",
  backgroundColor: "rgba(248,113,113,0.05)",
};

const DEFAULT_BORDER: React.CSSProperties = {
  borderColor: "rgba(255,255,255,0.08)",
  backgroundColor: "rgba(255,255,255,0.04)",
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
  const [form, setForm] = useState<LoginCredentials>({
    email: defaultEmail,
    password: "",
  });

  const emailInvalid = touched.email && !emailPattern.test(form.email);
  const passwordInvalid =
    touched.password && form.password.length < minPasswordLength;

  const emailError = emailInvalid ? emailErrorMessage : undefined;
  const passwordError = passwordInvalid ? passwordErrorMessage : undefined;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const updated: LoginCredentials = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(updated);
    onChange?.(updated);
  };

  const handleBlur = (field: keyof typeof touched): void => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleFocus = (
    e: React.FocusEvent<HTMLInputElement>,
    hasError: boolean,
  ): void => {
    e.currentTarget.style.borderColor = hasError ? "#f87171" : accentColor;
    e.currentTarget.style.backgroundColor = hasError
      ? "rgba(248,113,113,0.06)"
      : `${accentColor}10`;
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.04)";
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    setTouched({ email: true, password: true });
    if (!emailPattern.test(form.email)) return;
    if (form.password.length < minPasswordLength) return;
    await onSubmit(form);
  };

  const inputBase =
    "h-[46px] w-full rounded-[10px] border border-white/[0.08] bg-white/[0.04] px-4 text-[14px] text-white placeholder:text-white/20 outline-none transition-all duration-200 disabled:opacity-50";

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#0a0a0f] px-4 py-16">
      <div className="flex w-full max-w-[900px] overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#0e0e18] shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
        {/* ── Hero ── */}
        {showHero && (
          <div className="relative hidden w-[44%] overflow-hidden bg-[#07070f] lg:flex">
            <ParticleCanvas accentColor={accentColor} />
            <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[#07070f]/50 via-transparent to-[#07070f]/85" />
            <div className="absolute inset-0 z-10 flex flex-col justify-end p-10">
              {logo && <div className="mb-auto pt-4">{logo}</div>}
              <div>
                <p className="mb-4 text-[11px] uppercase tracking-[0.18em] text-white/30">
                  {heroTagline}
                </p>
                <h2 className="mb-2 text-[2rem] font-extrabold leading-[1.15] text-white">
                  {heroTitle ?? (
                    <>
                      Acceso al{" "}
                      <span style={{ color: accentColor }}>sistema</span>
                    </>
                  )}
                </h2>
                <p className="text-[13px] leading-relaxed text-white/35">
                  {heroSubtitle ??
                    "Plataforma segura & moderna para tu equipo."}
                </p>
                <p className="mt-6 text-[12px] text-white/20">
                  © {new Date().getFullYear()} {companyName}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ── Form side ── */}
        <div className="flex flex-1 items-center justify-center px-10 py-12">
          <div className="w-full max-w-[360px]">
            {/* Logo mark */}
            <div
              className="mb-7 flex size-8 items-center justify-center rounded-lg"
              style={{ backgroundColor: accentColor }}
            >
              <ShieldCheck size={16} color="#fff" strokeWidth={2.5} />
            </div>

            <h1 className="mb-1.5 text-2xl font-bold text-white">{title}</h1>
            <p className="mb-8 text-[13.5px] leading-relaxed text-white/35">
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
                    className="flex h-[44px] w-full items-center justify-center gap-2.5 rounded-[10px] border border-white/[0.10] bg-white/[0.04] text-[13.5px] font-medium text-white/70 transition-all hover:bg-white/[0.08] hover:text-white disabled:opacity-50"
                  >
                    {provider.icon}
                    {provider.label}
                  </button>
                ))}
                <div className="flex items-center gap-3 py-1">
                  <div className="h-px flex-1 bg-white/[0.07]" />
                  <span className="text-[11px] uppercase tracking-wider text-white/20">
                    o continúa con email
                  </span>
                  <div className="h-px flex-1 bg-white/[0.07]" />
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Server error */}
              {error && (
                <div className="flex items-center gap-2 rounded-lg border border-red-500/25 bg-red-500/10 px-3.5 py-2.5 text-[13px] text-red-300">
                  <AlertCircle size={15} className="shrink-0" />
                  {error}
                </div>
              )}

              {/* Email */}
              <div>
                <label className="mb-2 block text-[11.5px] font-medium uppercase tracking-[0.08em] text-white/40">
                  {emailLabel}
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder={emailPlaceholder}
                  value={form.email}
                  onChange={handleChange}
                  onBlur={(e) => {
                    handleBlur("email");
                    handleInputBlur(e);
                  }}
                  onFocus={(e) => handleFocus(e, emailInvalid)}
                  disabled={loading}
                  autoComplete="email"
                  className={inputBase}
                  style={emailInvalid ? ERROR_BORDER : DEFAULT_BORDER}
                  aria-invalid={emailInvalid}
                  aria-describedby={emailInvalid ? "email-error" : undefined}
                />
                {emailError && (
                  <p
                    id="email-error"
                    className="mt-1.5 flex items-center gap-1.5 text-[12px] text-red-400"
                  >
                    <AlertCircle size={12} className="shrink-0" />
                    {emailError}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="block text-[11.5px] font-medium uppercase tracking-[0.08em] text-white/40">
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
                    onBlur={(e) => {
                      handleBlur("password");
                      handleInputBlur(e);
                    }}
                    onFocus={(e) => handleFocus(e, passwordInvalid)}
                    disabled={loading}
                    autoComplete="current-password"
                    className={`${inputBase} pr-11`}
                    style={passwordInvalid ? ERROR_BORDER : DEFAULT_BORDER}
                    aria-invalid={passwordInvalid}
                    aria-describedby={
                      passwordInvalid ? "password-error" : undefined
                    }
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 transition-colors hover:text-white/70"
                    tabIndex={-1}
                    aria-label={
                      showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
                    }
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {passwordError && (
                  <p
                    id="password-error"
                    className="mt-1.5 flex items-center gap-1.5 text-[12px] text-red-400"
                  >
                    <AlertCircle size={12} className="shrink-0" />
                    {passwordError}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-[10px] text-[14px] font-bold tracking-[0.04em] text-white transition-all duration-200 hover:-translate-y-px active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
                style={{ backgroundColor: accentColor }}
              >
                {loading ? (
                  <>
                    <Loader2 size={17} className="animate-spin" />
                    Iniciando sesión...
                  </>
                ) : (
                  <>
                    {submitLabel}
                    <ArrowRight size={16} />
                  </>
                )}
              </button>

              {/* Terms */}
              {termsLink && (
                <p className="text-center text-[11.5px] leading-relaxed text-white/25">
                  Al continuar aceptas los{" "}
                  <a
                    href={termsLink.href}
                    onClick={termsLink.onClick}
                    className="underline underline-offset-2 transition-colors hover:text-white/60"
                  >
                    {termsLink.label}
                  </a>
                </p>
              )}

              {/* Register link */}
              {registerLink && (
                <p className="text-center text-[13px] text-white/30">
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
                <div className="h-px flex-1 bg-white/[0.07]" />
                <span className="flex items-center gap-1.5 text-[11px] text-white/20">
                  <Check size={11} />
                  {companyName}
                </span>
                <div className="h-px flex-1 bg-white/[0.07]" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
