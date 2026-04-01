## Instalar la libreria
npm install hannah-ui
Esto instalara hannah-ui junto con sus dependencias directas (clsx, tailwind-merge, class-variance-authority, etc.). Las dependencias opcionales (como @tanstack/react-table o framer-motion) no se instalan automaticamente — solo instalalas si usas los componentes que las requieren (ver Dependencias opcionales).

Importante: react, react-dom y lucide-react son peerDependencies obligatorias. Tu proyecto ya debe tenerlas instaladas. Si no las tienes:

npm install react react-dom lucide-react
## Importar estilos
Hannah UI incluye un archivo CSS con todos los estilos de Tailwind compilados. Debes importarlo una sola vez en el entry point de tu aplicacion:

// main.tsx o App.tsx
import "hannah-ui/style.css";
Sin esta importacion, los componentes se renderizaran sin estilos.

## Usar componentes
import { Button, Input, Card, CardHeader, CardBody, Alert } from "hannah-ui";

function App() {
  return (
    <Card>
      <CardHeader>
        <h2>Formulario de contacto</h2>
      </CardHeader>
      <CardBody>
        <Input placeholder="Tu nombre" leftIcon={<UserIcon />} />
        <Input placeholder="Tu email" type="email" />
        <Button variant="primary" size="md">
          Enviar
        </Button>
        <Alert variant="success">Mensaje enviado correctamente.</Alert>
      </CardBody>
    </Card>
  );
}
