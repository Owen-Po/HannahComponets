import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as h,b as D,a as f}from"./Card-B-tRbqqk.js";import{B as m}from"./Badge-CZzP7Vd2.js";import{A}from"./Alert-BZFxIk2u.js";import{H as c,S as u}from"./settings-B_M1OEhR.js";import{C as g,B as I}from"./chart-no-axes-column-BMFAZgbe.js";import{U as p}from"./users-C98adPvD.js";import{F as N}from"./file-text--pO0lu8n.js";import"./iframe-DfrHIFEz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BE5fGFUm.js";import"./cn-BQHNewu7.js";import"./info-CSXqvgec.js";import"./createLucideIcon-DplafLFN.js";import"./triangle-alert-CaRAGLCk.js";import"./x-B3QzdPaV.js";const x=[{id:"general",title:"General",icon:c,modules:[{id:1,name:"Dashboard",path:"/dashboard",icon:c,roles:["ADMINISTRADOR","EDITOR"]},{id:2,name:"Reportes",path:"/dashboard/reportes",icon:g,roles:["ADMINISTRADOR"]}]},{id:"gestion",title:"Gestión",icon:p,modules:[{id:3,name:"Usuarios",path:"/dashboard/usuarios",icon:p,roles:["ADMINISTRADOR"]},{id:4,name:"Documentos",path:"/dashboard/documentos",icon:N,roles:["ADMINISTRADOR","EDITOR"]}]},{id:"sistema",title:"Sistema",icon:u,modules:[{id:5,name:"Notificaciones",path:"/dashboard/notif",icon:I,roles:["ADMINISTRADOR","EDITOR"]},{id:6,name:"Configuración",path:"/dashboard/config",icon:u,roles:["ADMINISTRADOR"]}]}],d=({filterRole:o})=>{const R=o?x.map(s=>({...s,modules:s.modules.filter(r=>r.roles.includes(o))})).filter(s=>s.modules.length>0):x;return e.jsxs("div",{className:"space-y-3 w-[460px]",children:[o&&e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs text-gray-500",children:"Mostrando módulos para rol:"}),e.jsx(m,{variant:"primary",children:o})]}),R.map(s=>e.jsxs(h,{shadow:"sm",children:[e.jsx(f,{title:s.title}),e.jsx(D,{children:e.jsx("div",{className:"space-y-2",children:s.modules.map(r=>e.jsxs("div",{className:"flex items-center justify-between py-1.5 px-2 rounded-lg bg-gray-50",children:[e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"w-7 h-7 rounded-md bg-white border border-gray-200 flex items-center justify-center text-gray-500",children:e.jsx(r.icon,{className:"w-4 h-4"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold text-gray-800",children:r.name}),e.jsx("p",{className:"text-[11px] text-gray-400 font-mono",children:r.path})]})]}),e.jsx("div",{className:"flex gap-1 flex-wrap justify-end",children:r.roles.map(l=>e.jsx(m,{variant:"default",size:"sm",children:l},l))})]},r.id))})})]},s.id))]})},z={title:"Templates/Modulos",parameters:{layout:"centered",docs:{description:{component:"Archivo de configuración de módulos y categorías del sidebar. Define `moduleCategories` con las rutas, íconos y roles permitidos de cada módulo. El AppSidebar lo usa para construir la navegación filtrada por rol."}}}},a={name:"Vista · Todos los módulos",render:()=>e.jsx(d,{})},i={name:"Rol · ADMINISTRADOR",render:()=>e.jsx(d,{filterRole:"ADMINISTRADOR"})},n={name:"Rol · EDITOR",render:()=>e.jsx(d,{filterRole:"EDITOR"})},t={name:"Docs · Cómo usarlo",render:()=>e.jsxs("div",{className:"w-[460px] space-y-3",children:[e.jsx(A,{variant:"info",title:"modulos.ts — archivo de configuración",children:"Define aquí todas las rutas de tu app con sus íconos y roles permitidos. El AppSidebar filtra automáticamente según el rol del usuario autenticado."}),e.jsx(h,{shadow:"sm",children:e.jsx(D,{children:e.jsx("pre",{className:"text-xs text-gray-700 leading-relaxed overflow-x-auto",children:`// routes/modulos.ts
import { Home, Users } from "lucide-react";

export const moduleCategories = [
  {
    id: "general",
    title: "General",
    icon: Home,
    modules: [
      {
        id: 1,
        name: "Dashboard",
        path: "/dashboard",
        icon: Home,
        roles: ["ADMINISTRADOR", "EDITOR"],
      },
      {
        id: 2,
        name: "Usuarios",
        path: "/dashboard/usuarios",
        icon: Users,
        roles: ["ADMINISTRADOR"],  // solo admins
      },
    ],
  },
];`})})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Vista · Todos los módulos",
  render: () => <ModulesVisualizer />
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Rol · ADMINISTRADOR",
  render: () => <ModulesVisualizer filterRole="ADMINISTRADOR" />
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Rol · EDITOR",
  render: () => <ModulesVisualizer filterRole="EDITOR" />
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Docs · Cómo usarlo",
  render: () => <div className="w-[460px] space-y-3">\r
      <Alert variant="info" title="modulos.ts — archivo de configuración">\r
        Define aquí todas las rutas de tu app con sus íconos y roles permitidos.\r
        El AppSidebar filtra automáticamente según el rol del usuario autenticado.\r
      </Alert>\r
      <Card shadow="sm">\r
        <CardBody>\r
          <pre className="text-xs text-gray-700 leading-relaxed overflow-x-auto">{\`// routes/modulos.ts
import { Home, Users } from "lucide-react";

export const moduleCategories = [
  {
    id: "general",
    title: "General",
    icon: Home,
    modules: [
      {
        id: 1,
        name: "Dashboard",
        path: "/dashboard",
        icon: Home,
        roles: ["ADMINISTRADOR", "EDITOR"],
      },
      {
        id: 2,
        name: "Usuarios",
        path: "/dashboard/usuarios",
        icon: Users,
        roles: ["ADMINISTRADOR"],  // solo admins
      },
    ],
  },
];\`}\r
          </pre>\r
        </CardBody>\r
      </Card>\r
    </div>
}`,...t.parameters?.docs?.source}}};const G=["TodosLosModulos","FiltradoPorAdministrador","FiltradoPorEditor","ComoUsarlo"];export{t as ComoUsarlo,i as FiltradoPorAdministrador,n as FiltradoPorEditor,a as TodosLosModulos,G as __namedExportsOrder,z as default};
