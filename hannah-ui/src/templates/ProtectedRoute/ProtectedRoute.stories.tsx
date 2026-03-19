import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter, Routes, Route, Link } from "react-router-dom";
import { AuthProvider, useAuth } from "../AuthContext/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import { Badge } from "../../components/Badge/Badge";
import { Alert } from "../../components/Alert/Alert";
import { Card, CardBody, CardHeader } from "../../components/Card/Card";
import { Button } from "../../components/Button/Button";

/* ─────────────────────────────────────────
   Páginas de ejemplo
───────────────────────────────────────── */
const LoginPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-gray-50">
    <Alert variant="warning" title="Redirigido a login">
      No hay sesión activa — ProtectedRoute redirigió a esta página.
    </Alert>
    <p className="text-xs text-gray-400">URL: /</p>
  </div>
);

const DashboardPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-gray-50">
    <Alert variant="success" title="Acceso permitido">
      Ruta protegida — usuario autenticado con rol correcto.
    </Alert>
    <p className="text-xs text-gray-400">URL: /dashboard</p>
  </div>
);

const ForbiddenPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-gray-50">
    <Alert variant="danger" title="Sin permisos">
      El usuario no tiene el rol requerido — redirigido aquí.
    </Alert>
    <p className="text-xs text-gray-400">URL: /dashboard (fallback)</p>
  </div>
);

/* ─────────────────────────────────────────
   Demo con AuthProvider real
───────────────────────────────────────── */
const ProtectedRouteDemo = ({ requiredRoles = [] }: { requiredRoles?: string[] }) => {
  const { isAuthenticated, loading } = useAuth();

  return (
    <div className="space-y-3 w-[420px]">
      {/* Estado actual */}
      <div className="flex items-center gap-2">
        <Badge variant={isAuthenticated ? "success" : "default"} dot>
          {isAuthenticated ? "Autenticado" : "No autenticado"}
        </Badge>
        {requiredRoles.length > 0 && (
          <Badge variant="info">Roles requeridos: {requiredRoles.join(", ")}</Badge>
        )}
      </div>

      {loading ? (
        <Alert variant="default">Verificando sesión...</Alert>
      ) : !isAuthenticated ? (
        <Alert variant="warning" title="Sin sesión">
          ProtectedRoute redirigirá a <code className="font-mono text-xs">/</code> al intentar acceder a una ruta protegida.
        </Alert>
      ) : (
        <Alert variant="success" title="Sesión activa">
          El usuario puede acceder a rutas protegidas.
        </Alert>
      )}

      <Card shadow="sm">
        <CardHeader
          title="ProtectedRoute"
          description="Guarda rutas por autenticación y/o roles."
        />
        <CardBody>
          <pre className="text-xs text-gray-600 leading-relaxed">{`// Uso básico — solo requiere autenticación
<ProtectedRoute>
  <DashboardPage />
</ProtectedRoute>

// Con roles requeridos
<ProtectedRoute requiredRoles={["ADMINISTRADOR"]}>
  <AdminPage />
</ProtectedRoute>`}
          </pre>
        </CardBody>
      </Card>
    </div>
  );
};

/* ─────────────────────────────────────────
   Router demo completo
───────────────────────────────────────── */
const RouterDemo = () => (
  <MemoryRouter initialEntries={["/dashboard"]}>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute requiredRoles={["ADMINISTRADOR"]}>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route path="/forbidden" element={<ForbiddenPage />} />
      </Routes>
    </AuthProvider>
  </MemoryRouter>
);

/* ─────────────────────────────────────────
   Meta
───────────────────────────────────────── */
const meta: Meta = {
  title: "Templates/ProtectedRoute",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "HOC que protege rutas por autenticación y/o roles. Si no hay sesión redirige a `/`. Si el rol no coincide redirige a `/dashboard`. Requiere `AuthProvider` en el árbol.",
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/* ─────────────────────────────────────────
   Stories
───────────────────────────────────────── */
export const SinSesion: Story = {
  name: "State · Sin sesión → redirige a /",
  render: () => <RouterDemo />,
};

export const ComoUsarlo: Story = {
  name: "Docs · Cómo usarlo",
  render: () => (
    <AuthProvider>
      <ProtectedRouteDemo />
    </AuthProvider>
  ),
};

export const ConRoles: Story = {
  name: "Docs · Con roles requeridos",
  render: () => (
    <AuthProvider>
      <ProtectedRouteDemo requiredRoles={["ADMINISTRADOR"]} />
    </AuthProvider>
  ),
};
