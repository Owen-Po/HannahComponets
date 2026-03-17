import { useState } from "react";
import { Eye, EyeOff, Loader2, AlertCircle, ArrowRight } from "lucide-react";

export interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginProps {
  title?: string;
  description?: string;
  loading?: boolean;
  error?: string;
  onSubmit: (data: LoginCredentials) => void | Promise<void>;
  showHero?: boolean;
  heroImage?: string;
  logo?: string;
  companyName?: string;
}

export const Login = ({
  title = "Bienvenido",
  description = "Ingresa tus credenciales para acceder al sistema",
  loading = false,
  error,
  onSubmit,
  showHero = true,
  heroImage = "/images/login-bg.webp",
  logo,
  companyName = "Sistema",
}: LoginProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState<LoginCredentials>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(form);
  };

  return (
    <div className="w-full flex justify-center bg-gray-100 py-16 px-4">
      <div className="flex w-full max-w-5xl rounded-2xl overflow-hidden bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-gray-100">
        {/* Left Hero */}
        {showHero && (
          <div className="hidden lg:flex w-1/2 bg-zinc-800 relative overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40"
              style={{ backgroundImage: `url(${heroImage})` }}
            />

            {logo && (
              <div className="absolute top-8 left-8 z-10">
                <img src={logo} alt="Logo" className="h-20 w-auto opacity-90" />
              </div>
            )}

            <div className="absolute bottom-8 left-8 right-8 z-10 text-white">
              <p className="text-4xl lg:text-5xl font-bold mb-4">
                ingrese un titulo aqui..
              </p>

              <div className="flex gap-4 text-sm text-zinc-300">
                <span>
                  © {new Date().getFullYear()} {companyName}
                </span>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/60 via-transparent to-zinc-900/80" />
          </div>
        )}

        {/* Right form */}
        <div className="flex-1 flex items-center justify-center p-10 bg-gray-50">
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">{title}</h2>
              <p className="text-gray-600">{description}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Correo
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="correo@empresa.com"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full h-12 px-4 bg-white border border-gray-200 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  disabled={loading}
                  required
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Contraseña
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="••••••••"
                    value={form.password}
                    onChange={handleChange}
                    className="w-full h-12 px-4 pr-12 bg-white border border-gray-200 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    disabled={loading}
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-800 hover:text-gray-900 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="flex items-center gap-2 text-sm text-red-500 bg-red-50 border border-red-200 px-3 py-2 rounded">
                  <AlertCircle className="h-4 w-4" />
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-black hover:bg-gray-900 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg disabled:bg-gray-300"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Iniciando sesión...
                  </>
                ) : (
                  <>
                    Iniciar sesión
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>

              {/* Footer */}
              <div className="flex items-center text-center text-gray-400 text-sm w-full pt-4">
                <span className="flex-1 border-b border-gray-200"></span>
                <span className="px-4">{companyName}</span>
                <span className="flex-1 border-b border-gray-200"></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
