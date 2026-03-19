import type { Meta, StoryObj } from "@storybook/react";
import { ToastProvider, useToast } from "./Toast";
import { Button } from "../Button/Button";

/* ─────────────────────────────────────────
   Wrapper helper — cada story necesita el provider
───────────────────────────────────────── */
interface DemoProps {
  position?: Parameters<typeof ToastProvider>[0]["position"];
}

/* ─────────────────────────────────────────
   Meta
───────────────────────────────────────── */
const meta: Meta = {
  title: "Components/Toast",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Sistema de notificaciones con stack, progress bar animada, pausa en hover, acciones y 6 variantes. Usa `<ToastProvider>` en el root y `useToast()` en cualquier componente hijo.",
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/* ─────────────────────────────────────────
   Stories
───────────────────────────────────────── */

export const Success: Story = {
  name: "Variant · Success",
  render: () => {
    const Demo = () => {
      const { success } = useToast();
      return (
        <Button onClick={() => success("Cambios guardados", { description: "Tu información fue actualizada correctamente." })}>
          Mostrar Success
        </Button>
      );
    };
    return <ToastProvider position="bottom-right"><Demo /></ToastProvider>;
  },
};

export const Error: Story = {
  name: "Variant · Error",
  render: () => {
    const Demo = () => {
      const { error } = useToast();
      return (
        <Button variant="danger" onClick={() => error("Error al guardar", { description: "Revisa tu conexión e intenta de nuevo." })}>
          Mostrar Error
        </Button>
      );
    };
    return <ToastProvider position="bottom-right"><Demo /></ToastProvider>;
  },
};

export const Warning: Story = {
  name: "Variant · Warning",
  render: () => {
    const Demo = () => {
      const { warning } = useToast();
      return (
        <Button variant="warning" onClick={() => warning("Sesión por expirar", { description: "Tu sesión expirará en 5 minutos." })}>
          Mostrar Warning
        </Button>
      );
    };
    return <ToastProvider position="bottom-right"><Demo /></ToastProvider>;
  },
};

export const Info: Story = {
  name: "Variant · Info",
  render: () => {
    const Demo = () => {
      const { info } = useToast();
      return (
        <Button variant="ghost" onClick={() => info("Nueva actualización disponible", { description: "Versión 2.1.0 con mejoras de rendimiento." })}>
          Mostrar Info
        </Button>
      );
    };
    return <ToastProvider position="bottom-right"><Demo /></ToastProvider>;
  },
};

export const Loading: Story = {
  name: "Variant · Loading",
  render: () => {
    const Demo = () => {
      const { loading, dismiss } = useToast();
      let id = "";
      return (
        <div style={{ display: "flex", gap: 8 }}>
          <Button onClick={() => { id = loading("Subiendo archivo..."); }}>
            Iniciar carga
          </Button>
          <Button variant="ghost" onClick={() => dismiss(id)}>
            Cancelar
          </Button>
        </div>
      );
    };
    return <ToastProvider position="bottom-right"><Demo /></ToastProvider>;
  },
};

export const WithAction: Story = {
  name: "With action",
  render: () => {
    const Demo = () => {
      const { toast } = useToast();
      return (
        <Button
          onClick={() =>
            toast({
              title: "Elemento eliminado",
              description: "El registro fue removido de la lista.",
              variant: "default",
              action: { label: "Deshacer", onClick: () => alert("¡Deshecho!") },
            })
          }
        >
          Eliminar con deshacer
        </Button>
      );
    };
    return <ToastProvider position="bottom-right"><Demo /></ToastProvider>;
  },
};

export const Stack: Story = {
  name: "Stack · Multiple toasts",
  render: () => {
    const Demo = () => {
      const { success, error, warning, info } = useToast();
      return (
        <Button
          onClick={() => {
            info("Iniciando proceso...");
            setTimeout(() => warning("Verificando permisos..."), 300);
            setTimeout(() => success("¡Proceso completado!", { description: "Todos los archivos fueron procesados." }), 600);
            setTimeout(() => error("Fallo en 1 archivo", { description: "archivo_3.csv no pudo procesarse." }), 900);
          }}
        >
          Mostrar stack
        </Button>
      );
    };
    return <ToastProvider position="bottom-right"><Demo /></ToastProvider>;
  },
};

export const Positions: Story = {
  name: "Positions · All",
  render: () => {
    const positions: DemoProps["position"][] = [
      "top-left", "top-center", "top-right",
      "bottom-left", "bottom-center", "bottom-right",
    ];

    const Demo = ({ position }: DemoProps) => {
      const { success } = useToast();
      return (
        <Button size="sm" onClick={() => success(`Posición: ${position}`)}>
          {position}
        </Button>
      );
    };

    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {positions.map((pos) => (
          <ToastProvider key={pos} position={pos}>
            <Demo position={pos} />
          </ToastProvider>
        ))}
      </div>
    );
  },
};

export const Persistent: Story = {
  name: "Persistent (no auto-dismiss)",
  render: () => {
    const Demo = () => {
      const { toast, dismissAll } = useToast();
      return (
        <div style={{ display: "flex", gap: 8 }}>
          <Button
            onClick={() =>
              toast({
                title: "Actualización requerida",
                description: "Debes reiniciar la app para aplicar los cambios.",
                variant: "warning",
                duration: 0,
                action: { label: "Reiniciar ahora", onClick: () => {} },
              })
            }
          >
            Toast persistente
          </Button>
          <Button variant="ghost" onClick={dismissAll}>
            Cerrar todos
          </Button>
        </div>
      );
    };
    return <ToastProvider position="bottom-right"><Demo /></ToastProvider>;
  },
};
