import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AuthProvider, useAuth } from "./AuthContext";
import { Button } from "@hannah-ui/button";
import { Badge } from "@hannah-ui/badge";
import { Card, CardHeader, CardBody, CardFooter } from "@hannah-ui/card";
import { Alert } from "@hannah-ui/alert";

/* ─────────────────────────────────────────
   Demo component que consume el contexto
───────────────────────────────────────── */
const AuthDemo = () => {
  const { isAuthenticated, user, loading, hasRole } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8 text-sm text-gray-400">
        Verificando sesión...
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {/* Estado de autenticación */}
      <div className="flex items-center gap-2">
        <Badge variant={isAuthenticated ? "success" : "default"} dot>
          {isAuthenticated ? "Autenticado" : "No autenticado"}
        </Badge>
        {user && (
          <Badge variant="primary">{user.rol}</Badge>
        )}
      </div>

      {/* Info del usuario */}
      {user ? (
        <Card shadow="sm">
          <CardBody>
            <div className="space-y-1.5 text-sm">
              <div className="flex gap-2">
                <span className="text-gray-400 w-20 shrink-0">Nombre:</span>
                <span className="font-medium text-gray-900">{user.nombre}</span>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-400 w-20 shrink-0">Email:</span>
                <span className="font-medium text-gray-900">{user.email}</span>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-400 w-20 shrink-0">Rol:</span>
                <span className="font-medium text-gray-900">{user.rol}</span>
              </div>
            </div>
          </CardBody>
        </Card>
      ) : (
        <Alert variant="default">
          Sin sesión activa. En producción, <code>login()</code> llama a <code>/api/auth/login</code> y guarda el JWT en cookie.
        </Alert>
      )}

      {/* hasRole demo */}
      <Card shadow="sm">
        <CardHeader title="hasRole( )" description="Comprueba si el usuario tiene uno o varios roles." />
        <CardBody>
          <div className="flex flex-wrap gap-2">
            {["ADMINISTRADOR", "EDITOR", "VIEWER"].map((rol) => (
              <div key={rol} className="flex items-center gap-1.5">
                <Badge variant={hasRole(rol) ? "success" : "default"} dot>
                  {rol}
                </Badge>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

/* ─────────────────────────────────────────
   Login form demo
───────────────────────────────────────── */
const LoginDemo = () => {
  const { login, logout, isAuthenticated, loading } = useAuth();
  const [error, setError] = useState(false);

  const handleLogin = async () => {
    setError(false);
    const ok = await login({ email: "demo@ejemplo.com", password: "password123" });
    if (!ok) setError(true);
  };

  return (
    <div className="space-y-3">
      <AuthDemo />
      <Card shadow="sm">
        <CardHeader
          title="Acciones"
          description="login() llama a /api/auth/login — fallará en Storybook (sin backend)."
        />
        <CardBody>
          {error && (
            <Alert variant="danger" className="mb-3">
              Error al iniciar sesión — sin backend activo en Storybook.
            </Alert>
          )}
        </CardBody>
        <CardFooter justify="between">
          <Button
            variant="primary"
            size="sm"
            loading={loading}
            loadingText="Iniciando sesión..."
            onClick={handleLogin}
            disabled={isAuthenticated}
          >
            login( )
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => logout()}
            disabled={!isAuthenticated}
          >
            logout( )
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

/* ─────────────────────────────────────────
   Meta
───────────────────────────────────────── */
const meta: Meta = {
  title: "Templates/AuthContext",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Contexto de autenticación con JWT en cookies. Expone `isAuthenticated`, `user`, `loading`, `login()`, `logout()` y `hasRole()`. Envuelve tu app con `<AuthProvider>` en el punto de entrada.",
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/* ─────────────────────────────────────────
   Stories
───────────────────────────────────────── */
export const Default: Story = {
  name: "Default · Estado inicial (sin sesión)",
  render: () => (
    <div className="w-[400px]">
      <AuthProvider>
        <LoginDemo />
      </AuthProvider>
    </div>
  ),
};

export const ComoUsarlo: Story = {
  name: "Docs · Cómo usarlo",
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="w-[420px] space-y-3">
      <Alert variant="info" title="Configuración en main.tsx">
        Envuelve tu app con <code className="font-mono text-xs bg-sky-100 px-1 rounded">{"<AuthProvider>"}</code> en el punto de entrada.
      </Alert>
      <Card shadow="sm">
        <CardBody>
          <pre className="text-xs text-gray-700 leading-relaxed overflow-x-auto">{`// main.tsx
import { AuthProvider } from "hannah-ui";

<AuthProvider>
  <App />
</AuthProvider>

// En cualquier componente hijo:
import { useAuth } from "hannah-ui";

const { user, isAuthenticated, login, logout, hasRole } = useAuth();`}
          </pre>
        </CardBody>
      </Card>
    </div>
  ),
};
