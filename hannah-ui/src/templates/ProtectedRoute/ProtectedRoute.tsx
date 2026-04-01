import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

// ── Dependencia ────────────────────────────────────────────────────────────────
// Asegúrate de importar useAuth desde tu AuthContext:
// import { useAuth } from "@/context/AuthContext";
import { useAuth } from "../AuthContext/AuthContext";

// ── Types ──────────────────────────────────────────────────────────────────────
interface Props {
  children: ReactNode;
  /** Roles que pueden acceder a esta ruta. Si está vacío, solo requiere autenticación. */
  requiredRoles?: string[];
}

// ── Component ──────────────────────────────────────────────────────────────────
const ProtectedRoute = ({ children, requiredRoles = [] }: Props) => {
  const { isAuthenticated, loading, hasRole } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Cargando...
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  if (requiredRoles.length > 0 && !hasRole(requiredRoles)) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
