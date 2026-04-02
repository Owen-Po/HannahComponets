import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./iframe-vHIwjOwQ.js";import{A}from"./AppSidebar-DGmUZBMT.js";import{H as p}from"./house-BaI5cvEy.js";import{C as I}from"./chart-no-axes-column-DYKqmAvz.js";import{U as u}from"./users-CKjCIu9G.js";import{F as O}from"./file-text-Bk_-emGE.js";import{B as E}from"./bell-B5dtEpOB.js";import{S}from"./settings-DC-O13jL.js";import{M as j}from"./chunk-LFPYN7LY-DjAIVDEH.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-Ce1ZTWB2.js";import"./pin-BM6eJjnD.js";import"./createLucideIcon-C-Otocs2.js";import"./chevron-down-BY11miSp.js";import"./log-out-Bhh55pc6.js";const R={id:"1",nombre:"Ana García",email:"ana@ejemplo.com",rol:"ADMINISTRADOR",estaActivo:!0},f=[{id:"general",title:"General",icon:p,modules:[{id:1,name:"Dashboard",path:"/dashboard",icon:p,roles:["ADMINISTRADOR","EDITOR"]},{id:2,name:"Reportes",path:"/dashboard/reportes",icon:I,roles:["ADMINISTRADOR"]}]},{id:"gestion",title:"Gestión",icon:u,modules:[{id:3,name:"Usuarios",path:"/dashboard/usuarios",icon:u,roles:["ADMINISTRADOR"]},{id:4,name:"Documentos",path:"/dashboard/documentos",icon:O,roles:["ADMINISTRADOR","EDITOR"]}]},{id:"sistema",title:"Sistema",icon:S,modules:[{id:5,name:"Notificaciones",path:"/dashboard/notificaciones",icon:E,roles:["ADMINISTRADOR","EDITOR"]},{id:6,name:"Configuración",path:"/dashboard/config",icon:S,roles:["ADMINISTRADOR"]}]}],r=a=>{const{initialPath:m="/dashboard",initialPinned:x=!1,...h}=a,[D,b]=l.useState(!0),[c,g]=l.useState(x);return e.jsx(j,{initialEntries:[m],children:e.jsxs("div",{className:"h-screen bg-gray-50 relative overflow-hidden",children:[e.jsx(A,{isSidebarOpen:D,setIsSidebarOpen:b,isPinned:c,setIsPinned:g,user:R,categories:f,onLogout:()=>alert("Logout"),...h}),e.jsx("div",{className:`h-full flex items-center justify-center transition-all duration-300 ${c?"md:ml-64":"md:ml-[68px]"}`,children:e.jsxs("div",{className:"text-center space-y-1",children:[e.jsx("p",{className:"text-sm font-semibold text-gray-700",children:"Área de contenido"}),e.jsx("p",{className:"text-xs text-gray-400",children:c?"Sidebar fijo — haz clic en PinOff para colapsar":"Pasa el cursor sobre el sidebar para expandirlo"})]})})]})})},w={title:"Templates/AppSidebar",parameters:{layout:"fullscreen",docs:{description:{component:"Sidebar de aplicación con hover-expand, pin/unpin, categorías de navegación y logout. Recibe `user` y `categories` como props — conéctalo a tu AuthContext y moduleCategories según el rol del usuario."}}}},o={name:"Default · Hover expand",render:()=>e.jsx(r,{})},s={name:"State · Pinned (fijo expandido)",render:()=>e.jsx(r,{initialPinned:!0})},t={name:"State · Ruta activa marcada",render:()=>e.jsx(r,{initialPath:"/dashboard/usuarios"})},i={name:"Rol · Editor (módulos filtrados)",render:()=>e.jsx(r,{user:{...R,nombre:"Carlos Ruiz",rol:"EDITOR"},categories:f.map(a=>({...a,modules:a.modules.filter(m=>m.roles.includes("EDITOR"))})).filter(a=>a.modules.length>0)})},n={name:"State · Sin usuario",render:()=>e.jsx(r,{user:null})},d={name:"Config · App personalizada",render:()=>e.jsx(r,{appName:"Gestión HR",appSubtitle:"Recursos Humanos"})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Default · Hover expand",
  render: () => <SidebarDemo />
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "State · Pinned (fijo expandido)",
  render: () => <SidebarDemo initialPinned={true} />
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "State · Ruta activa marcada",
  render: () => <SidebarDemo initialPath="/dashboard/usuarios" />
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Rol · Editor (módulos filtrados)",
  render: () => <SidebarDemo user={{
    ...MOCK_USER,
    nombre: "Carlos Ruiz",
    rol: "EDITOR"
  }} categories={MOCK_CATEGORIES.map(cat => ({
    ...cat,
    modules: cat.modules.filter(m => m.roles.includes("EDITOR"))
  })).filter(cat => cat.modules.length > 0)} />
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "State · Sin usuario",
  render: () => <SidebarDemo user={null} />
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Config · App personalizada",
  render: () => <SidebarDemo appName="Gestión HR" appSubtitle="Recursos Humanos" />
}`,...d.parameters?.docs?.source}}};const $=["Default","Pinned","ActiveRoute","RolEditor","SinUsuario","AppPersonalizada"];export{t as ActiveRoute,d as AppPersonalizada,o as Default,s as Pinned,i as RolEditor,n as SinUsuario,$ as __namedExportsOrder,w as default};
