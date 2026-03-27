import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as P}from"./iframe-DfrHIFEz.js";import{c as S}from"./cn-BQHNewu7.js";import{B as N}from"./Badge-CZzP7Vd2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BE5fGFUm.js";const t=({tabs:s,defaultKey:j,activeKey:T,onChange:C,variant:n="underline",size:i="md",fullWidth:k=!1,className:I,...z})=>{const[w,V]=P.useState(j??s[0]?.key??""),A=T??w,W=a=>{V(a),C?.(a)},_=i==="sm"?"text-xs":i==="lg"?"text-base":"text-sm",L=i==="sm"?"px-3 py-1.5":i==="lg"?"px-5 py-3":"px-4 py-2",v=s.find(a=>a.key===A);return e.jsxs("div",{className:S("flex flex-col",I),...z,children:[e.jsx("div",{role:"tablist",className:S("flex",k&&"w-full",n==="underline"&&"border-b border-gray-200 dark:border-gray-700 gap-1",n==="pill"&&"gap-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl w-fit",n==="boxed"&&"border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden divide-x divide-gray-200 dark:divide-gray-700"),children:s.map(a=>{const o=a.key===A;return e.jsxs("button",{id:`tab-${a.key}`,role:"tab","aria-selected":o,disabled:a.disabled,onClick:()=>!a.disabled&&W(a.key),className:S("inline-flex items-center gap-1.5 font-medium select-none transition-all duration-150","disabled:pointer-events-none disabled:opacity-40","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 dark:focus-visible:ring-blue-700",_,L,k&&"flex-1 justify-center",n==="underline"&&["relative rounded-t-lg",o?"text-blue-600 dark:text-blue-400 after:absolute after:-bottom-px after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 after:rounded-full":"text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"],n==="pill"&&["rounded-lg",o?"bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm":"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"],n==="boxed"&&[o?"bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400":"text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"]),children:[a.icon&&e.jsx("span",{className:"shrink-0 inline-flex","aria-hidden":!0,children:a.icon}),a.label,a.badge&&e.jsx("span",{className:"shrink-0",children:a.badge})]},a.key)})}),v?.content!==void 0&&e.jsx("div",{role:"tabpanel","aria-labelledby":`tab-${v.key}`,className:"pt-4",children:v.content})]})};t.displayName="Tabs";t.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"TabItem"}],raw:"TabItem[]"},description:""},defaultKey:{required:!1,tsType:{name:"string"},description:""},activeKey:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string) => void",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:'"underline" | "pill" | "boxed"',elements:[{name:"literal",value:'"underline"'},{name:"literal",value:'"pill"'},{name:"literal",value:'"boxed"'}]},description:"",defaultValue:{value:'"underline"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const F=()=>e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),q=()=>e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"3"}),e.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),U=()=>e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),e.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),r=[{key:"perfil",label:"Perfil",content:e.jsx("p",{style:{fontSize:14,color:"#374151",margin:0},children:"Contenido de la pestaña Perfil."})},{key:"config",label:"Configuración",content:e.jsx("p",{style:{fontSize:14,color:"#374151",margin:0},children:"Contenido de la pestaña Configuración."})},{key:"seguridad",label:"Seguridad",content:e.jsx("p",{style:{fontSize:14,color:"#374151",margin:0},children:"Contenido de la pestaña Seguridad."})}],B=[{key:"perfil",label:"Perfil",icon:e.jsx(F,{}),content:e.jsx("p",{style:{fontSize:14,color:"#374151",margin:0},children:"Información del perfil de usuario."})},{key:"notif",label:"Notificaciones",icon:e.jsx(U,{}),badge:e.jsx(N,{variant:"danger",size:"sm",children:"3"}),content:e.jsx("p",{style:{fontSize:14,color:"#374151",margin:0},children:"Tus notificaciones pendientes."})},{key:"config",label:"Configuración",icon:e.jsx(q,{}),content:e.jsx("p",{style:{fontSize:14,color:"#374151",margin:0},children:"Ajustes de la cuenta."})}],$={title:"Components/Tabs",component:t,parameters:{layout:"centered",docs:{description:{component:"Pestañas con 3 variantes visuales (underline, pill, boxed), soporte de íconos, badges, tamaños y control externo/interno del tab activo."}}},argTypes:{variant:{control:"select",options:["underline","pill","boxed"],description:"Estilo visual",table:{category:"Variantes",defaultValue:{summary:"underline"}}},size:{control:"select",options:["sm","md","lg"],description:"Tamaño del texto y padding",table:{category:"Variantes",defaultValue:{summary:"md"}}},fullWidth:{control:"boolean",description:"Pestañas ocupan todo el ancho",table:{category:"Layout",defaultValue:{summary:"false"}}}},args:{tabs:r,variant:"underline",size:"md",fullWidth:!1},decorators:[s=>e.jsx("div",{style:{width:460},children:e.jsx(s,{})})]},l={},d={name:"Variant · Underline",args:{variant:"underline",tabs:r}},c={name:"Variant · Pill",args:{variant:"pill",tabs:r}},u={name:"Variant · Boxed",args:{variant:"boxed",tabs:r}},m={name:"Size · sm",args:{size:"sm",tabs:r}},p={name:"Size · md",args:{size:"md",tabs:r}},g={name:"Size · lg",args:{size:"lg",tabs:r}},b={name:"Content · With icons",args:{tabs:B,variant:"underline"}},x={name:"Content · Icons + pill",args:{tabs:B,variant:"pill"}},y={name:"Layout · Full width boxed",args:{fullWidth:!0,variant:"boxed",tabs:r}},f={name:"Layout · Full width underline",args:{fullWidth:!0,variant:"underline",tabs:r}},h={name:"Showcase · All variants",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,width:460},children:[e.jsx(t,{tabs:r,variant:"underline"}),e.jsx(t,{tabs:r,variant:"pill"}),e.jsx(t,{tabs:r,variant:"boxed"})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Variant · Underline",
  args: {
    variant: "underline",
    tabs: BASIC_TABS
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Variant · Pill",
  args: {
    variant: "pill",
    tabs: BASIC_TABS
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Variant · Boxed",
  args: {
    variant: "boxed",
    tabs: BASIC_TABS
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Size · sm",
  args: {
    size: "sm",
    tabs: BASIC_TABS
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Size · md",
  args: {
    size: "md",
    tabs: BASIC_TABS
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Size · lg",
  args: {
    size: "lg",
    tabs: BASIC_TABS
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Content · With icons",
  args: {
    tabs: ICON_TABS,
    variant: "underline"
  }
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Content · Icons + pill",
  args: {
    tabs: ICON_TABS,
    variant: "pill"
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Layout · Full width boxed",
  args: {
    fullWidth: true,
    variant: "boxed",
    tabs: BASIC_TABS
  }
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Layout · Full width underline",
  args: {
    fullWidth: true,
    variant: "underline",
    tabs: BASIC_TABS
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Showcase · All variants",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 24,
    width: 460
  }}>\r
      <Tabs tabs={BASIC_TABS} variant="underline" />\r
      <Tabs tabs={BASIC_TABS} variant="pill" />\r
      <Tabs tabs={BASIC_TABS} variant="boxed" />\r
    </div>
}`,...h.parameters?.docs?.source}}};const R=["Playground","VariantUnderline","VariantPill","VariantBoxed","SizeSm","SizeMd","SizeLg","WithIcons","WithIconsPill","FullWidthBoxed","FullWidthUnderline","ShowcaseAllVariants"];export{y as FullWidthBoxed,f as FullWidthUnderline,l as Playground,h as ShowcaseAllVariants,g as SizeLg,p as SizeMd,m as SizeSm,u as VariantBoxed,c as VariantPill,d as VariantUnderline,b as WithIcons,x as WithIconsPill,R as __namedExportsOrder,$ as default};
