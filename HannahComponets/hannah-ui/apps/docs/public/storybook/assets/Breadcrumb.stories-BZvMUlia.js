import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as D}from"./cn-BQt2Fkck.js";import{c as N}from"./createLucideIcon-E9JdFZrH.js";import{C as A}from"./chevron-right-CouIPLfX.js";import{S as T}from"./shield-_F0vXUwD.js";import{S as v}from"./settings-UKe4XZUN.js";import{H as y}from"./house-iiKrECw4.js";import{F as M}from"./file-text-Dn_SA4W6.js";import{U as R}from"./users-DPQHHZHD.js";import{U}from"./user-D0GCLOTo.js";import"./bundle-mjs-Ce1ZTWB2.js";import"./iframe-Bq8VPCYT.js";import"./preload-helper-PPVm8Dsz.js";const B=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],w=N("ellipsis",B),C=({items:u,separator:k,accentColor:h="#7c6aff",maxItems:b,className:S})=>{const g=(()=>{if(!b||u.length<=b)return u;const a=u.slice(0,1),r=u.slice(-(b-2));return[...a,{label:"…",_collapsed:!0},...r]})(),I=k??e.jsx(A,{size:14,className:"shrink-0 text-gray-300 dark:text-gray-700"});return e.jsx("nav",{"aria-label":"Breadcrumb",className:D("flex items-center gap-1.5 text-sm",S),children:g.map((a,r)=>{const j=r===g.length-1,z=a._collapsed;return e.jsxs("div",{className:"flex items-center gap-1.5",children:[r>0&&e.jsx("span",{className:"flex items-center",children:I}),z?e.jsx("span",{className:"flex items-center text-gray-400 dark:text-gray-600",children:e.jsx(w,{size:16})}):j?e.jsxs("span",{className:"flex items-center gap-1.5 font-medium text-gray-900 dark:text-white",children:[a.icon&&e.jsx("span",{className:"flex items-center",children:a.icon}),a.label]}):e.jsxs("a",{href:a.href??"#",onClick:a.onClick,className:"flex items-center gap-1.5 text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-500 dark:hover:text-white",style:{"--accent":h},onMouseEnter:f=>f.currentTarget.style.color=h,onMouseLeave:f=>f.currentTarget.style.color="",children:[a.icon&&e.jsx("span",{className:"flex items-center",children:a.icon}),a.label]})]},`${a.label}-${r}`)})})};C.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:""},separator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},accentColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#7c6aff"',computed:!1}},maxItems:{required:!1,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const x=()=>{},$={title:"Components/Breadcrumb",component:C,parameters:{layout:"padded",docs:{description:{component:"Componente de migas de pan para navegación jerárquica con soporte para iconos, colapso automático, separador personalizable y color de acento dinámico."}}},argTypes:{items:{control:"object",description:"Lista de elementos del breadcrumb",table:{category:"Contenido"}},separator:{table:{disable:!0}},accentColor:{control:"color",description:"Color de acento para hover en los links",table:{category:"Visual",defaultValue:{summary:"#7c6aff"}}},maxItems:{control:"number",description:"Máximo de items visibles antes de colapsar",table:{category:"Visual"}},className:{control:"text",description:"Clases CSS adicionales",table:{category:"Visual"}}},args:{items:[{label:"Dashboard",href:"#"},{label:"Usuarios",href:"#"},{label:"Juan Pérez"}]}},s={name:"Default"},n={name:"Dark mode",parameters:{backgrounds:{default:"Dark"}}},o={name:"Two items",args:{items:[{label:"Inicio",href:"#"},{label:"Configuración"}]}},t={name:"Single item",args:{items:[{label:"Dashboard"}]}},c={name:"Many items (collapsed)",parameters:{docs:{description:{story:"Cuando hay más items que maxItems, los intermedios se colapsan con un ícono de ellipsis."}}},args:{maxItems:4,items:[{label:"Inicio",href:"#"},{label:"Administración",href:"#"},{label:"Usuarios",href:"#"},{label:"Roles",href:"#"},{label:"Permisos",href:"#"},{label:"Detalle"}]}},i={name:"With icons",args:{items:[{label:"Inicio",href:"#",icon:e.jsx(y,{size:14})},{label:"Usuarios",href:"#",icon:e.jsx(R,{size:14})},{label:"Juan Pérez",icon:e.jsx(U,{size:14})}]}},l={name:"Custom separator",args:{separator:e.jsx("span",{className:"text-gray-300 dark:text-gray-700",children:"/"}),items:[{label:"app",href:"#"},{label:"settings",href:"#"},{label:"profile"}]}},m={name:"With onClick",args:{items:[{label:"Dashboard",href:"#",onClick:x},{label:"Reportes",href:"#",onClick:x},{label:"Ventas Q1"}]}},p={name:"Accent · Green",args:{accentColor:"#10b981",items:[{label:"Inicio",href:"#",icon:e.jsx(y,{size:14})},{label:"Documentos",href:"#",icon:e.jsx(M,{size:14})},{label:"Reporte Anual"}]}},d={name:"Accent · Blue",args:{accentColor:"#3b82f6",items:[{label:"Panel",href:"#"},{label:"Seguridad",href:"#",icon:e.jsx(T,{size:14})},{label:"Configuración",icon:e.jsx(v,{size:14})}]}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Default"
}`,...s.parameters?.docs?.source},description:{story:"Modo claro por defecto",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Dark mode",
  parameters: {
    backgrounds: {
      default: "Dark"
    }
  }
}`,...n.parameters?.docs?.source},description:{story:"Modo oscuro",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Two items",
  args: {
    items: [{
      label: "Inicio",
      href: "#"
    }, {
      label: "Configuración"
    }]
  }
}`,...o.parameters?.docs?.source},description:{story:"Solo dos elementos",...o.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Single item",
  args: {
    items: [{
      label: "Dashboard"
    }]
  }
}`,...t.parameters?.docs?.source},description:{story:"Un solo elemento (página actual)",...t.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Many items (collapsed)",
  parameters: {
    docs: {
      description: {
        story: "Cuando hay más items que maxItems, los intermedios se colapsan con un ícono de ellipsis."
      }
    }
  },
  args: {
    maxItems: 4,
    items: [{
      label: "Inicio",
      href: "#"
    }, {
      label: "Administración",
      href: "#"
    }, {
      label: "Usuarios",
      href: "#"
    }, {
      label: "Roles",
      href: "#"
    }, {
      label: "Permisos",
      href: "#"
    }, {
      label: "Detalle"
    }]
  }
}`,...c.parameters?.docs?.source},description:{story:"Muchos elementos con colapso",...c.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "With icons",
  args: {
    items: [{
      label: "Inicio",
      href: "#",
      icon: <Home size={14} />
    }, {
      label: "Usuarios",
      href: "#",
      icon: <Users size={14} />
    }, {
      label: "Juan Pérez",
      icon: <User size={14} />
    }]
  }
}`,...i.parameters?.docs?.source},description:{story:"Con iconos en cada nivel",...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Custom separator",
  args: {
    separator: <span className="text-gray-300 dark:text-gray-700">/</span>,
    items: [{
      label: "app",
      href: "#"
    }, {
      label: "settings",
      href: "#"
    }, {
      label: "profile"
    }]
  }
}`,...l.parameters?.docs?.source},description:{story:"Separador personalizado",...l.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "With onClick",
  args: {
    items: [{
      label: "Dashboard",
      href: "#",
      onClick: noop
    }, {
      label: "Reportes",
      href: "#",
      onClick: noop
    }, {
      label: "Ventas Q1"
    }]
  }
}`,...m.parameters?.docs?.source},description:{story:"Con handlers onClick",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Accent · Green",
  args: {
    accentColor: "#10b981",
    items: [{
      label: "Inicio",
      href: "#",
      icon: <Home size={14} />
    }, {
      label: "Documentos",
      href: "#",
      icon: <FileText size={14} />
    }, {
      label: "Reporte Anual"
    }]
  }
}`,...p.parameters?.docs?.source},description:{story:"Acento verde",...p.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Accent · Blue",
  args: {
    accentColor: "#3b82f6",
    items: [{
      label: "Panel",
      href: "#"
    }, {
      label: "Seguridad",
      href: "#",
      icon: <Shield size={14} />
    }, {
      label: "Configuración",
      icon: <Settings size={14} />
    }]
  }
}`,...d.parameters?.docs?.source},description:{story:"Acento azul",...d.parameters?.docs?.description}}};const K=["Default","DarkMode","TwoItems","SingleItem","ManyItems","WithIcons","CustomSeparator","WithOnClick","AccentGreen","AccentBlue"];export{d as AccentBlue,p as AccentGreen,l as CustomSeparator,n as DarkMode,s as Default,c as ManyItems,t as SingleItem,o as TwoItems,i as WithIcons,m as WithOnClick,K as __namedExportsOrder,$ as default};
