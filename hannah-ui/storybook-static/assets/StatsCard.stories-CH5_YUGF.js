import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as k}from"./cn-BQHNewu7.js";import{c as n}from"./createLucideIcon-CYD34EDm.js";import{U as w}from"./users-B8zQS3Xu.js";import"./iframe-D7DoABNO.js";import"./preload-helper-PPVm8Dsz.js";const M=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],N=n("activity",M);const I=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],U=n("chart-column",I);const A=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],j=n("dollar-sign",A);const W=[["path",{d:"M5 12h14",key:"1ays0h"}]],$=n("minus",W);const q=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],D=n("shopping-cart",q);const V=[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]],G=n("trending-down",V);const L=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],C=n("trending-up",L),o=({className:r})=>e.jsx("div",{className:k("animate-pulse rounded bg-gray-200 dark:bg-gray-700",r)}),B=({trend:r})=>{const h=r.direction==="up"?C:r.direction==="down"?G:$,t=r.direction==="up"?"text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-500/10":r.direction==="down"?"text-red-600 bg-red-50 dark:text-red-400 dark:bg-red-500/10":"text-gray-500 bg-gray-100 dark:text-gray-400 dark:bg-gray-700/50";return e.jsxs("span",{className:k("inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium",t),children:[e.jsx(h,{size:13}),r.value,"%"]})},a=({title:r,value:h,description:t,icon:T,trend:z,accentColor:S="#7c6aff",loading:_=!1,onClick:b})=>{const s=!!b;return _?e.jsx("div",{className:"rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900",children:e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{className:"flex-1 space-y-3",children:[e.jsx(o,{className:"h-3 w-20"}),e.jsx(o,{className:"h-7 w-28"}),e.jsx(o,{className:"h-3 w-36"})]}),e.jsx(o,{className:"size-10 rounded-lg"})]})}):e.jsx("div",{role:s?"button":void 0,tabIndex:s?0:void 0,onClick:b,onKeyDown:s?f=>{(f.key==="Enter"||f.key===" ")&&(f.preventDefault(),b())}:void 0,className:k("rounded-xl border border-gray-200 bg-white p-5 transition-all dark:border-gray-800 dark:bg-gray-900",s&&"cursor-pointer hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98] dark:hover:border-gray-700"),children:e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{className:"flex-1 space-y-1",children:[e.jsx("p",{className:"text-[12.5px] font-medium uppercase tracking-[0.06em] text-gray-500 dark:text-gray-400",children:r}),e.jsx("p",{className:"text-[1.65rem] font-bold leading-tight text-gray-900 dark:text-white",children:h}),e.jsxs("div",{className:"flex items-center gap-2 pt-0.5",children:[z&&e.jsx(B,{trend:z}),t&&e.jsx("span",{className:"text-[12.5px] text-gray-500 dark:text-gray-500",children:t})]})]}),T&&e.jsx("div",{className:"flex size-10 shrink-0 items-center justify-center rounded-lg",style:{backgroundColor:`${S}18`,color:S},children:T})]})})};a.__docgenInfo={description:"",methods:[],displayName:"StatsCard",props:{title:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},description:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trend:{required:!1,tsType:{name:"StatsCardTrend"},description:""},accentColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#7c6aff"',computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const E=()=>{},J={title:"Components/StatsCard",component:a,parameters:{layout:"centered",docs:{description:{component:"Tarjeta de KPI/métrica para dashboards con icono, tendencia, estado de carga y soporte de modo oscuro."}}},argTypes:{onClick:{action:"clicked"},title:{control:"text",description:"Etiqueta superior de la métrica",table:{category:"Contenido"}},value:{control:"text",description:"Valor principal de la métrica",table:{category:"Contenido"}},description:{control:"text",description:"Texto descriptivo debajo del valor",table:{category:"Contenido"}},accentColor:{control:"color",description:"Color de acento para el icono",table:{category:"Visual",defaultValue:{summary:"#7c6aff"}}},loading:{control:"boolean",description:"Muestra estado de carga skeleton",table:{category:"Estado",defaultValue:{summary:"false"}}},trend:{control:"object",description:"Indicador de tendencia con dirección y porcentaje",table:{category:"Datos",type:{summary:"StatsCardTrend",detail:'{ value: number; direction: "up" | "down" | "neutral" }'}}},icon:{table:{disable:!0}}},args:{title:"Ingresos totales",value:"$45,231.89",icon:e.jsx(j,{size:20}),onClick:void 0}},i={},c={name:"Trend up",args:{title:"Suscriptores",value:"2,350",icon:e.jsx(w,{size:20}),trend:{value:12.5,direction:"up"},description:"vs. mes anterior"}},d={name:"Trend down",args:{title:"Tasa de rebote",value:"42.3%",icon:e.jsx(N,{size:20}),trend:{value:3.2,direction:"down"},description:"vs. mes anterior"}},l={args:{loading:!0}},u={args:{title:"Pedidos activos",value:"1,234",icon:e.jsx(D,{size:20}),trend:{value:8.1,direction:"up"},onClick:E}},p={name:"Accent · Green",args:{title:"Conversiones",value:"89.4%",icon:e.jsx(C,{size:20}),accentColor:"#10b981",trend:{value:4.3,direction:"up"}}},m={name:"Accent · Blue",args:{title:"Visitantes",value:"14,502",icon:e.jsx(U,{size:20}),accentColor:"#3b82f6",trend:{value:2.1,direction:"up"}}},g={name:"With description",args:{title:"Tiempo promedio",value:"3m 42s",icon:e.jsx(N,{size:20}),description:"Duración media de sesión esta semana"}},v={name:"Without icon",args:{title:"Usuarios activos",value:"1,893",icon:void 0,trend:{value:5.7,direction:"up"},description:"últimas 24 horas"}},y={name:"Grid layout",render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,width:640},children:[e.jsx(a,{title:"Ingresos",value:"$45,231",icon:e.jsx(j,{size:20}),trend:{value:12.5,direction:"up"},description:"vs. mes anterior"}),e.jsx(a,{title:"Usuarios",value:"2,350",icon:e.jsx(w,{size:20}),trend:{value:8.1,direction:"up"},description:"nuevos este mes",accentColor:"#10b981"}),e.jsx(a,{title:"Pedidos",value:"1,234",icon:e.jsx(D,{size:20}),trend:{value:3.2,direction:"down"},description:"vs. semana pasada",accentColor:"#f59e0b"}),e.jsx(a,{title:"Conversión",value:"3.24%",icon:e.jsx(C,{size:20}),trend:{value:.8,direction:"neutral"},description:"sin cambios",accentColor:"#3b82f6"})]})},x={name:"Dark mode",parameters:{backgrounds:{default:"Dark"}},args:{title:"Ingresos totales",value:"$45,231.89",icon:e.jsx(j,{size:20}),trend:{value:12.5,direction:"up"},description:"vs. mes anterior"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "With description",
  args: {
    title: "Tiempo promedio",
    value: "3m 42s",
    icon: <Activity size={20} />,
    description: "Duración media de sesión esta semana"
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Grid layout",
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16,
    width: 640
  }}>\r
      <StatsCard title="Ingresos" value="$45,231" icon={<DollarSign size={20} />} trend={{
      value: 12.5,
      direction: "up"
    }} description="vs. mes anterior" />\r
      <StatsCard title="Usuarios" value="2,350" icon={<Users size={20} />} trend={{
      value: 8.1,
      direction: "up"
    }} description="nuevos este mes" accentColor="#10b981" />\r
      <StatsCard title="Pedidos" value="1,234" icon={<ShoppingCart size={20} />} trend={{
      value: 3.2,
      direction: "down"
    }} description="vs. semana pasada" accentColor="#f59e0b" />\r
      <StatsCard title="Conversión" value="3.24%" icon={<TrendingUp size={20} />} trend={{
      value: 0.8,
      direction: "neutral"
    }} description="sin cambios" accentColor="#3b82f6" />\r
    </div>
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const Q=["Default","WithTrendUp","WithTrendDown","Loading","Clickable","AccentGreen","AccentBlue","WithDescription","WithoutIcon","GridLayout","DarkMode"];export{m as AccentBlue,p as AccentGreen,u as Clickable,x as DarkMode,i as Default,y as GridLayout,l as Loading,g as WithDescription,d as WithTrendDown,c as WithTrendUp,v as WithoutIcon,Q as __namedExportsOrder,J as default};
