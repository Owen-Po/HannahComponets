import{j as e}from"./jsx-runtime-u17CrQMm.js";import{T as d,a as m,D as c}from"./trending-up-C_L-dYAi.js";import{U as u}from"./users-CKjCIu9G.js";import{S as p}from"./shopping-cart-CNOeZXaa.js";import{T as v}from"./triangle-alert-DGtE15Lw.js";import"./createLucideIcon-C-Otocs2.js";import"./iframe-vHIwjOwQ.js";import"./preload-helper-PPVm8Dsz.js";const s=({title:n,value:l,icon:i,trend:r,className:o=""})=>{const t=r&&r.value>=0;return e.jsx("div",{className:`bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow ${o}`,children:e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"text-xs font-medium text-gray-500 uppercase tracking-wider mb-1",children:n}),e.jsx("p",{className:"text-2xl font-bold text-gray-900 tracking-tight",children:l}),r&&e.jsxs("div",{className:`flex items-center gap-1 mt-2 text-xs font-medium ${t?"text-green-600":"text-red-600"}`,children:[t?e.jsx(d,{size:14}):e.jsx(m,{size:14}),e.jsxs("span",{children:[t?"+":"",r.value,"%"]}),r.label&&e.jsx("span",{className:"text-gray-400 ml-1",children:r.label})]})]}),i&&e.jsx("div",{className:"p-2.5 bg-amber-50 text-amber-600 rounded-xl shrink-0",children:i})]})})};s.__docgenInfo={description:"",methods:[],displayName:"KPICard",props:{title:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},trend:{required:!1,tsType:{name:"signature",type:"object",raw:"{ value: number; label?: string }",signature:{properties:[{key:"value",value:{name:"number",required:!0}},{key:"label",value:{name:"string",required:!1}}]}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const N={title:"Components/KPICard",parameters:{layout:"padded",docs:{description:{component:"Tarjeta de indicador clave (KPI) con valor, icono, tendencia porcentual y etiqueta."}}}},a={name:"Grid de KPIs",render:()=>e.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4",children:[e.jsx(s,{title:"Usuarios",value:"1,248",icon:e.jsx(u,{size:20}),trend:{value:12.5,label:"vs mes anterior"}}),e.jsx(s,{title:"Ingresos",value:"$24.5k",icon:e.jsx(c,{size:20}),trend:{value:8.2,label:"vs mes anterior"}}),e.jsx(s,{title:"Pedidos",value:"384",icon:e.jsx(p,{size:20}),trend:{value:-3.1,label:"vs semana anterior"}}),e.jsx(s,{title:"Errores",value:"7",icon:e.jsx(v,{size:20}),trend:{value:-15,label:"vs ayer"}})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Grid de KPIs",
  render: () => <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <KPICard title="Usuarios" value="1,248" icon={<Users size={20} />} trend={{
      value: 12.5,
      label: "vs mes anterior"
    }} />
      <KPICard title="Ingresos" value="$24.5k" icon={<DollarSign size={20} />} trend={{
      value: 8.2,
      label: "vs mes anterior"
    }} />
      <KPICard title="Pedidos" value="384" icon={<ShoppingCart size={20} />} trend={{
      value: -3.1,
      label: "vs semana anterior"
    }} />
      <KPICard title="Errores" value="7" icon={<AlertTriangle size={20} />} trend={{
      value: -15,
      label: "vs ayer"
    }} />
    </div>
}`,...a.parameters?.docs?.source}}};const P=["Default"];export{a as Default,P as __namedExportsOrder,N as default};
