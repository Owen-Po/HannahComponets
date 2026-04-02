import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as g}from"./iframe-Bq8VPCYT.js";import{A as v,u as x}from"./AuthContext-CFmaLnou.js";import{B as p}from"./Button-DJzimRAK.js";import{B as c}from"./Badge-D1pJbmqS.js";import{C as i,b as d,a as h,c as f}from"./Card-BvqlEU-5.js";import{A as m}from"./Alert-B56b_PvI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bj1Z-dc7.js";import"./bundle-mjs-Ce1ZTWB2.js";import"./cn-BQt2Fkck.js";import"./loader-circle-DJnCiCCC.js";import"./createLucideIcon-E9JdFZrH.js";import"./info-DEtqcVyt.js";import"./circle-x-m3BtaBdR.js";import"./triangle-alert-CKeKKRpi.js";import"./x-DBJmp3Rc.js";const A=()=>{const{isAuthenticated:r,user:s,loading:n,hasRole:l}=x();return n?e.jsx("div",{className:"flex items-center justify-center p-8 text-sm text-gray-400",children:"Verificando sesión..."}):e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(c,{variant:r?"success":"default",dot:!0,children:r?"Autenticado":"No autenticado"}),s&&e.jsx(c,{variant:"primary",children:s.rol})]}),s?e.jsx(i,{shadow:"sm",children:e.jsx(d,{children:e.jsxs("div",{className:"space-y-1.5 text-sm",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"text-gray-400 w-20 shrink-0",children:"Nombre:"}),e.jsx("span",{className:"font-medium text-gray-900",children:s.nombre})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"text-gray-400 w-20 shrink-0",children:"Email:"}),e.jsx("span",{className:"font-medium text-gray-900",children:s.email})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"text-gray-400 w-20 shrink-0",children:"Rol:"}),e.jsx("span",{className:"font-medium text-gray-900",children:s.rol})]})]})})}):e.jsxs(m,{variant:"default",children:["Sin sesión activa. En producción, ",e.jsx("code",{children:"login()"})," llama a ",e.jsx("code",{children:"/api/auth/login"})," y guarda el JWT en cookie."]}),e.jsxs(i,{shadow:"sm",children:[e.jsx(h,{title:"hasRole( )",description:"Comprueba si el usuario tiene uno o varios roles."}),e.jsx(d,{children:e.jsx("div",{className:"flex flex-wrap gap-2",children:["ADMINISTRADOR","EDITOR","VIEWER"].map(a=>e.jsx("div",{className:"flex items-center gap-1.5",children:e.jsx(c,{variant:l(a)?"success":"default",dot:!0,children:a})},a))})})]})]})},y=()=>{const{login:r,logout:s,isAuthenticated:n,loading:l}=x(),[a,u]=g.useState(!1),j=async()=>{u(!1),await r({email:"demo@ejemplo.com",password:"password123"})||u(!0)};return e.jsxs("div",{className:"space-y-3",children:[e.jsx(A,{}),e.jsxs(i,{shadow:"sm",children:[e.jsx(h,{title:"Acciones",description:"login() llama a /api/auth/login — fallará en Storybook (sin backend)."}),e.jsx(d,{children:a&&e.jsx(m,{variant:"danger",className:"mb-3",children:"Error al iniciar sesión — sin backend activo en Storybook."})}),e.jsxs(f,{justify:"between",children:[e.jsx(p,{variant:"primary",size:"sm",loading:l,loadingText:"Iniciando sesión...",onClick:j,disabled:n,children:"login( )"}),e.jsx(p,{variant:"ghost",size:"sm",onClick:()=>s(),disabled:!n,children:"logout( )"})]})]})]})},J={title:"Templates/AuthContext",parameters:{layout:"centered",docs:{description:{component:"Contexto de autenticación con JWT en cookies. Expone `isAuthenticated`, `user`, `loading`, `login()`, `logout()` y `hasRole()`. Envuelve tu app con `<AuthProvider>` en el punto de entrada."}}}},o={name:"Default · Estado inicial (sin sesión)",render:()=>e.jsx("div",{className:"w-[400px]",children:e.jsx(v,{children:e.jsx(y,{})})})},t={name:"Docs · Cómo usarlo",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{className:"w-[420px] space-y-3",children:[e.jsxs(m,{variant:"info",title:"Configuración en main.tsx",children:["Envuelve tu app con ",e.jsx("code",{className:"font-mono text-xs bg-sky-100 px-1 rounded",children:"<AuthProvider>"})," en el punto de entrada."]}),e.jsx(i,{shadow:"sm",children:e.jsx(d,{children:e.jsx("pre",{className:"text-xs text-gray-700 leading-relaxed overflow-x-auto",children:`// main.tsx
import { AuthProvider } from "hannah-ui";

<AuthProvider>
  <App />
</AuthProvider>

// En cualquier componente hijo:
import { useAuth } from "hannah-ui";

const { user, isAuthenticated, login, logout, hasRole } = useAuth();`})})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Default · Estado inicial (sin sesión)",
  render: () => <div className="w-[400px]">
      <AuthProvider>
        <LoginDemo />
      </AuthProvider>
    </div>
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Docs · Cómo usarlo",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="w-[420px] space-y-3">
      <Alert variant="info" title="Configuración en main.tsx">
        Envuelve tu app con <code className="font-mono text-xs bg-sky-100 px-1 rounded">{"<AuthProvider>"}</code> en el punto de entrada.
      </Alert>
      <Card shadow="sm">
        <CardBody>
          <pre className="text-xs text-gray-700 leading-relaxed overflow-x-auto">{\`// main.tsx
import { AuthProvider } from "hannah-ui";

<AuthProvider>
  <App />
</AuthProvider>

// En cualquier componente hijo:
import { useAuth } from "hannah-ui";

const { user, isAuthenticated, login, logout, hasRole } = useAuth();\`}
          </pre>
        </CardBody>
      </Card>
    </div>
}`,...t.parameters?.docs?.source}}};const U=["Default","ComoUsarlo"];export{t as ComoUsarlo,o as Default,U as __namedExportsOrder,J as default};
