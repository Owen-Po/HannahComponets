import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as h}from"./cn-CFNvqZE-.js";import{T as j,a as I,D as C}from"./trending-up-B48WPVSI.js";import{M as U}from"./minus-Cjw9VBVs.js";import{C as A}from"./chart-column-4NeHJN3N.js";import{S as w}from"./shopping-cart-Bw10QpX0.js";import{U as z}from"./users-BBNMyoaY.js";import{c as W}from"./createLucideIcon-CrPkD7AF.js";import"./bundle-mjs-Ce1ZTWB2.js";import"./iframe-D75dh1fk.js";import"./preload-helper-PPVm8Dsz.js";const q=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],D=W("activity",q),s=({className:r})=>e.jsx("div",{className:h("animate-pulse rounded bg-gray-200 dark:bg-gray-700",r)}),G=({trend:r})=>{const y=r.direction==="up"?j:r.direction==="down"?I:U,n=r.direction==="up"?"text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-500/10":r.direction==="down"?"text-red-600 bg-red-50 dark:text-red-400 dark:bg-red-500/10":"text-gray-500 bg-gray-100 dark:text-gray-400 dark:bg-gray-700/50";return e.jsxs("span",{className:h("inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium",n),children:[e.jsx(y,{size:13}),r.value,"%"]})},a=({title:r,value:y,description:n,icon:k,trend:T,accentColor:S="#7c6aff",loading:N=!1,onClick:f})=>{const t=!!f;return N?e.jsx("div",{className:"rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900",children:e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{className:"flex-1 space-y-3",children:[e.jsx(s,{className:"h-3 w-20"}),e.jsx(s,{className:"h-7 w-28"}),e.jsx(s,{className:"h-3 w-36"})]}),e.jsx(s,{className:"size-10 rounded-lg"})]})}):e.jsx("div",{role:t?"button":void 0,tabIndex:t?0:void 0,onClick:f,onKeyDown:t?b=>{(b.key==="Enter"||b.key===" ")&&(b.preventDefault(),f())}:void 0,className:h("rounded-xl border border-gray-200 bg-white p-5 transition-all dark:border-gray-800 dark:bg-gray-900",t&&"cursor-pointer hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98] dark:hover:border-gray-700"),children:e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{className:"flex-1 space-y-1",children:[e.jsx("p",{className:"text-[12.5px] font-medium uppercase tracking-[0.06em] text-gray-500 dark:text-gray-400",children:r}),e.jsx("p",{className:"text-[1.65rem] font-bold leading-tight text-gray-900 dark:text-white",children:y}),e.jsxs("div",{className:"flex items-center gap-2 pt-0.5",children:[T&&e.jsx(G,{trend:T}),n&&e.jsx("span",{className:"text-[12.5px] text-gray-500 dark:text-gray-500",children:n})]})]}),k&&e.jsx("div",{className:"flex size-10 shrink-0 items-center justify-center rounded-lg",style:{backgroundColor:`${S}18`,color:S},children:k})]})})};a.__docgenInfo={description:"",methods:[],displayName:"StatsCard",props:{title:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},description:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trend:{required:!1,tsType:{name:"StatsCardTrend"},description:""},accentColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#7c6aff"',computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const V=()=>{},F={title:"Components/StatsCard",component:a,parameters:{layout:"centered",docs:{description:{component:"Tarjeta de KPI/métrica para dashboards con icono, tendencia, estado de carga y soporte de modo oscuro."}}},argTypes:{onClick:{action:"clicked"},title:{control:"text",description:"Etiqueta superior de la métrica",table:{category:"Contenido"}},value:{control:"text",description:"Valor principal de la métrica",table:{category:"Contenido"}},description:{control:"text",description:"Texto descriptivo debajo del valor",table:{category:"Contenido"}},accentColor:{control:"color",description:"Color de acento para el icono",table:{category:"Visual",defaultValue:{summary:"#7c6aff"}}},loading:{control:"boolean",description:"Muestra estado de carga skeleton",table:{category:"Estado",defaultValue:{summary:"false"}}},trend:{control:"object",description:"Indicador de tendencia con dirección y porcentaje",table:{category:"Datos",type:{summary:"StatsCardTrend",detail:'{ value: number; direction: "up" | "down" | "neutral" }'}}},icon:{table:{disable:!0}}},args:{title:"Ingresos totales",value:"$45,231.89",icon:e.jsx(C,{size:20}),onClick:void 0}},o={},i={name:"Trend up",args:{title:"Suscriptores",value:"2,350",icon:e.jsx(z,{size:20}),trend:{value:12.5,direction:"up"},description:"vs. mes anterior"}},c={name:"Trend down",args:{title:"Tasa de rebote",value:"42.3%",icon:e.jsx(D,{size:20}),trend:{value:3.2,direction:"down"},description:"vs. mes anterior"}},d={args:{loading:!0}},l={args:{title:"Pedidos activos",value:"1,234",icon:e.jsx(w,{size:20}),trend:{value:8.1,direction:"up"},onClick:V}},u={name:"Accent · Green",args:{title:"Conversiones",value:"89.4%",icon:e.jsx(j,{size:20}),accentColor:"#10b981",trend:{value:4.3,direction:"up"}}},p={name:"Accent · Blue",args:{title:"Visitantes",value:"14,502",icon:e.jsx(A,{size:20}),accentColor:"#3b82f6",trend:{value:2.1,direction:"up"}}},m={name:"With description",args:{title:"Tiempo promedio",value:"3m 42s",icon:e.jsx(D,{size:20}),description:"Duración media de sesión esta semana"}},g={name:"Without icon",args:{title:"Usuarios activos",value:"1,893",icon:void 0,trend:{value:5.7,direction:"up"},description:"últimas 24 horas"}},v={name:"Grid layout",render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,width:640},children:[e.jsx(a,{title:"Ingresos",value:"$45,231",icon:e.jsx(C,{size:20}),trend:{value:12.5,direction:"up"},description:"vs. mes anterior"}),e.jsx(a,{title:"Usuarios",value:"2,350",icon:e.jsx(z,{size:20}),trend:{value:8.1,direction:"up"},description:"nuevos este mes",accentColor:"#10b981"}),e.jsx(a,{title:"Pedidos",value:"1,234",icon:e.jsx(w,{size:20}),trend:{value:3.2,direction:"down"},description:"vs. semana pasada",accentColor:"#f59e0b"}),e.jsx(a,{title:"Conversión",value:"3.24%",icon:e.jsx(j,{size:20}),trend:{value:.8,direction:"neutral"},description:"sin cambios",accentColor:"#3b82f6"})]})},x={name:"Dark mode",parameters:{backgrounds:{default:"Dark"}},args:{title:"Ingresos totales",value:"$45,231.89",icon:e.jsx(C,{size:20}),trend:{value:12.5,direction:"up"},description:"vs. mes anterior"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Trend up",
  args: {
    title: "Suscriptores",
    value: "2,350",
    icon: <Users size={20} />,
    trend: {
      value: 12.5,
      direction: "up"
    },
    description: "vs. mes anterior"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Trend down",
  args: {
    title: "Tasa de rebote",
    value: "42.3%",
    icon: <Activity size={20} />,
    trend: {
      value: 3.2,
      direction: "down"
    },
    description: "vs. mes anterior"
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Pedidos activos",
    value: "1,234",
    icon: <ShoppingCart size={20} />,
    trend: {
      value: 8.1,
      direction: "up"
    },
    onClick: noop
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Accent · Green",
  args: {
    title: "Conversiones",
    value: "89.4%",
    icon: <TrendingUp size={20} />,
    accentColor: "#10b981",
    trend: {
      value: 4.3,
      direction: "up"
    }
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Accent · Blue",
  args: {
    title: "Visitantes",
    value: "14,502",
    icon: <BarChart3 size={20} />,
    accentColor: "#3b82f6",
    trend: {
      value: 2.1,
      direction: "up"
    }
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "With description",
  args: {
    title: "Tiempo promedio",
    value: "3m 42s",
    icon: <Activity size={20} />,
    description: "Duración media de sesión esta semana"
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Without icon",
  args: {
    title: "Usuarios activos",
    value: "1,893",
    icon: undefined,
    trend: {
      value: 5.7,
      direction: "up"
    },
    description: "últimas 24 horas"
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Grid layout",
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16,
    width: 640
  }}>
      <StatsCard title="Ingresos" value="$45,231" icon={<DollarSign size={20} />} trend={{
      value: 12.5,
      direction: "up"
    }} description="vs. mes anterior" />
      <StatsCard title="Usuarios" value="2,350" icon={<Users size={20} />} trend={{
      value: 8.1,
      direction: "up"
    }} description="nuevos este mes" accentColor="#10b981" />
      <StatsCard title="Pedidos" value="1,234" icon={<ShoppingCart size={20} />} trend={{
      value: 3.2,
      direction: "down"
    }} description="vs. semana pasada" accentColor="#f59e0b" />
      <StatsCard title="Conversión" value="3.24%" icon={<TrendingUp size={20} />} trend={{
      value: 0.8,
      direction: "neutral"
    }} description="sin cambios" accentColor="#3b82f6" />
    </div>
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Dark mode",
  parameters: {
    backgrounds: {
      default: "Dark"
    }
  },
  args: {
    title: "Ingresos totales",
    value: "$45,231.89",
    icon: <DollarSign size={20} />,
    trend: {
      value: 12.5,
      direction: "up"
    },
    description: "vs. mes anterior"
  }
}`,...x.parameters?.docs?.source}}};const J=["Default","WithTrendUp","WithTrendDown","Loading","Clickable","AccentGreen","AccentBlue","WithDescription","WithoutIcon","GridLayout","DarkMode"];export{p as AccentBlue,u as AccentGreen,l as Clickable,x as DarkMode,o as Default,v as GridLayout,d as Loading,m as WithDescription,c as WithTrendDown,i as WithTrendUp,g as WithoutIcon,J as __namedExportsOrder,F as default};
