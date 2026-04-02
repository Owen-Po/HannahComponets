import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as h,b as f,a as R}from"./Card-17Wkl2l9.js";import{B as m}from"./Badge-g2r6wNxb.js";import{A}from"./Alert-DppD7Afm.js";import{H as c}from"./house-BaI5cvEy.js";import{C as g}from"./chart-no-axes-column-DYKqmAvz.js";import{U as p}from"./users-CKjCIu9G.js";import{F as I}from"./file-text-Bk_-emGE.js";import{B as N}from"./bell-B5dtEpOB.js";import{S as u}from"./settings-DC-O13jL.js";import"./iframe-vHIwjOwQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bj1Z-dc7.js";import"./bundle-mjs-Ce1ZTWB2.js";import"./cn-C1oRmgnl.js";import"./info-DJRSzZyo.js";import"./createLucideIcon-C-Otocs2.js";import"./circle-x-ujsON0m5.js";import"./triangle-alert-DGtE15Lw.js";import"./x-KLBMarr-.js";const x=[{id:"general",title:"General",icon:c,modules:[{id:1,name:"Dashboard",path:"/dashboard",icon:c,roles:["ADMINISTRADOR","EDITOR"]},{id:2,name:"Reportes",path:"/dashboard/reportes",icon:g,roles:["ADMINISTRADOR"]}]},{id:"gestion",title:"Gestión",icon:p,modules:[{id:3,name:"Usuarios",path:"/dashboard/usuarios",icon:p,roles:["ADMINISTRADOR"]},{id:4,name:"Documentos",path:"/dashboard/documentos",icon:I,roles:["ADMINISTRADOR","EDITOR"]}]},{id:"sistema",title:"Sistema",icon:u,modules:[{id:5,name:"Notificaciones",path:"/dashboard/notif",icon:N,roles:["ADMINISTRADOR","EDITOR"]},{id:6,name:"Configuración",path:"/dashboard/config",icon:u,roles:["ADMINISTRADOR"]}]}],d=({filterRole:r})=>{const D=r?x.map(s=>({...s,modules:s.modules.filter(o=>o.roles.includes(r))})).filter(s=>s.modules.length>0):x;return e.jsxs("div",{className:"space-y-3 w-[460px]",children:[r&&e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs text-gray-500",children:"Mostrando módulos para rol:"}),e.jsx(m,{variant:"primary",children:r})]}),D.map(s=>e.jsxs(h,{shadow:"sm",children:[e.jsx(R,{title:s.title}),e.jsx(f,{children:e.jsx("div",{className:"space-y-2",children:s.modules.map(o=>e.jsxs("div",{className:"flex items-center justify-between py-1.5 px-2 rounded-lg bg-gray-50",children:[e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"w-7 h-7 rounded-md bg-white border border-gray-200 flex items-center justify-center text-gray-500",children:e.jsx(o.icon,{className:"w-4 h-4"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold text-gray-800",children:o.name}),e.jsx("p",{className:"text-[11px] text-gray-400 font-mono",children:o.path})]})]}),e.jsx("div",{className:"flex gap-1 flex-wrap justify-end",children:o.roles.map(l=>e.jsx(m,{variant:"default",size:"sm",children:l},l))})]},o.id))})})]},s.id))]})},_={title:"Templates/Modulos",parameters:{layout:"centered",docs:{description:{component:"Archivo de configuración de módulos y categorías del sidebar. Define `moduleCategories` con las rutas, íconos y roles permitidos de cada módulo. El AppSidebar lo usa para construir la navegación filtrada por rol."}}}},a={name:"Vista · Todos los módulos",render:()=>e.jsx(d,{})},i={name:"Rol · ADMINISTRADOR",render:()=>e.jsx(d,{filterRole:"ADMINISTRADOR"})},t={name:"Rol · EDITOR",render:()=>e.jsx(d,{filterRole:"EDITOR"})},n={name:"Docs · Cómo usarlo",render:()=>e.jsxs("div",{className:"w-[460px] space-y-3",children:[e.jsx(A,{variant:"info",title:"modulos.ts — archivo de configuración",children:"Define aquí todas las rutas de tu app con sus íconos y roles permitidos. El AppSidebar filtra automáticamente según el rol del usuario autenticado."}),e.jsx(h,{shadow:"sm",children:e.jsx(f,{children:e.jsx("pre",{className:"text-xs text-gray-700 leading-relaxed overflow-x-auto",children:`// routes/modulos.ts
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
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Rol · EDITOR",
  render: () => <ModulesVisualizer filterRole="EDITOR" />
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Docs · Cómo usarlo",
  render: () => <div className="w-[460px] space-y-3">
      <Alert variant="info" title="modulos.ts — archivo de configuración">
        Define aquí todas las rutas de tu app con sus íconos y roles permitidos.
        El AppSidebar filtra automáticamente según el rol del usuario autenticado.
      </Alert>
      <Card shadow="sm">
        <CardBody>
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
];\`}
          </pre>
        </CardBody>
      </Card>
    </div>
}`,...n.parameters?.docs?.source}}};const q=["TodosLosModulos","FiltradoPorAdministrador","FiltradoPorEditor","ComoUsarlo"];export{n as ComoUsarlo,i as FiltradoPorAdministrador,t as FiltradoPorEditor,a as TodosLosModulos,q as __namedExportsOrder,_ as default};
