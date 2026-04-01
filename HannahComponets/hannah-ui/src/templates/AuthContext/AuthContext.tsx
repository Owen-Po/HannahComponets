import { createContext, useState, useEffect, useContext } from "react";
import type { ReactNode } from "react";

// ── Types ──────────────────────────────────────────────────────────────────────
export interface User {
  id: string;
  nombre: string;
  email: string;
  rol: string;
  estaActivo: boolean;
  idTrabajador?: string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  login: (credentials: LoginCredentials) => Promise<boolean>;
  logout: () => Promise<boolean>;
  hasRole: (roles: string | string[]) => boolean;
}

// ── Helpers (cookies) ──────────────────────────────────────────────────────────
const setCookie = (name: string, value: string, days: number) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
};

const getCookie = (name: string) =>
  document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`)?.pop() ?? null;

const eraseCookie = (name: string) =>
  (document.cookie = `${name}=; Max-Age=0; path=/`);

// ── Context ────────────────────────────────────────────────────────────────────
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth debe usarse dentro de AuthProvider");
  return ctx;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Verificar token al cargar
  useEffect(() => {
    const token = getCookie("auth_token");
    if (!token) {
      setLoading(false);
      return;
    }
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      setUser({
        id: payload.sub,
        nombre: payload.nombre,
        email: payload.email,
        rol: payload.rol,
        estaActivo: true,
        idTrabajador: payload.idTrabajador,
      });
      setIsAuthenticated(true);
    } catch {
      eraseCookie("auth_token");
    } finally {
      setLoading(false);
    }
  }, []);

  const login = async ({ email, password }: LoginCredentials): Promise<boolean> => {
    try {
      setLoading(true);
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      setCookie("auth_token", data.access_token, 7);
      setUser(data.user);
      setIsAuthenticated(true);
      return true;
    } catch {
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = async (): Promise<boolean> => {
    try {
      await fetch("/api/auth/logout", { method: "POST" }).catch(() => {});
      eraseCookie("auth_token");
      setUser(null);
      setIsAuthenticated(false);
      return true;
    } catch {
      return false;
    }
  };

  const hasRole = (roles: string | string[]): boolean => {
    if (!user?.rol) return false;
    return (Array.isArray(roles) ? roles : [roles]).includes(user.rol);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, loading, login, logout, hasRole }}
    >
      {children}
    </AuthContext.Provider>
  );
};
