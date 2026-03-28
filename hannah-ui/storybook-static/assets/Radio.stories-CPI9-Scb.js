import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as w}from"./iframe-D7DoABNO.js";import{c as T}from"./index-BE5fGFUm.js";import{c as n}from"./cn-BQHNewu7.js";import"./preload-helper-PPVm8Dsz.js";const L=T(["appearance-none border-2 rounded-full transition-all duration-150","bg-white focus-visible:outline-none","focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-1"],{variants:{size:{sm:"w-4 h-4",md:"w-5 h-5",lg:"w-6 h-6"},checked:{true:"border-blue-500",false:"border-gray-300 hover:border-blue-400"}},defaultVariants:{size:"md",checked:!1}}),R=T("absolute rounded-full bg-blue-500 pointer-events-none transition-all duration-150",{variants:{size:{sm:"w-1.5 h-1.5",md:"w-2 h-2",lg:"w-2.5 h-2.5"},checked:{true:"opacity-100 scale-100",false:"opacity-0 scale-0"}},defaultVariants:{size:"md",checked:!1}}),D=T("font-medium text-gray-800 dark:text-gray-200 leading-snug",{variants:{size:{sm:"text-xs",md:"text-sm",lg:"text-base"}},defaultVariants:{size:"md"}}),I=w.forwardRef(({className:x,label:s,description:o,size:r="md",disabled:l,id:c,checked:i,defaultChecked:d,onChange:N,...m},O)=>{const[a,j]=w.useState(!!d),p=i!==void 0,P=p?i:a,k=_=>{p||j(_.target.checked),N?.(_)};return e.jsxs("label",{htmlFor:c,className:n("inline-flex items-start gap-2.5 cursor-pointer select-none",l&&"pointer-events-none opacity-40",x),children:[e.jsxs("div",{className:n("relative flex items-center justify-center shrink-0 mt-0.5",r==="sm"?"w-4 h-4":r==="lg"?"w-6 h-6":"w-5 h-5"),children:[e.jsx("input",{ref:O,id:c,type:"radio",disabled:l,checked:p?i:void 0,defaultChecked:p?void 0:d,onChange:k,"aria-checked":P,className:n(L({size:r,checked:!!P})),...m}),e.jsx("span",{className:n(R({size:r,checked:!!P})),"aria-hidden":"true"})]}),(s||o)&&e.jsxs("div",{className:"flex flex-col gap-0.5",children:[s&&e.jsx("span",{className:n(D({size:r})),children:s}),o&&e.jsx("span",{className:"text-xs text-gray-500 dark:text-gray-400 leading-snug",children:o})]})]})});I.displayName="Radio";const b=({options:x,value:s,onChange:o,name:r,size:l="md",direction:c="vertical",className:i})=>{const[d,N]=w.useState(void 0),m=s!==void 0,O=m?s:d;return e.jsx("div",{className:n("flex",c==="vertical"?"flex-col gap-3":"flex-row flex-wrap gap-4",i),role:"radiogroup","aria-label":r,children:x.map(a=>e.jsx(I,{id:`${r}-${a.value}`,name:r,value:a.value,label:a.label,description:a.description,disabled:a.disabled,size:l,checked:O===a.value,onChange:()=>{m||N(a.value),o?.(a.value)}},a.value))})};b.displayName="RadioGroup";I.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{label:{required:!1,tsType:{name:"ReactNode"},description:""},description:{required:!1,tsType:{name:"string"},description:""},size:{defaultValue:{value:'"md"',computed:!1},required:!1}},composes:["Omit"]};b.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"RadioOption"}],raw:"RadioOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},name:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},direction:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const V=[{value:"free",label:"Gratuito",description:"Hasta 3 proyectos. Sin soporte."},{value:"pro",label:"Pro",description:"Proyectos ilimitados. Soporte prioritario."},{value:"enterprise",label:"Enterprise",description:"SSO, auditoría y SLA garantizado."}],t=[{value:"si",label:"Sí"},{value:"no",label:"No"},{value:"tal_vez",label:"Tal vez",disabled:!0}],W={title:"Components/Radio",component:b,parameters:{layout:"centered",docs:{description:{component:"Grupo de radios accesible con layout vertical u horizontal, descripción por opción y soporte de opciones deshabilitadas."}}},argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Tamaño de los radios",table:{category:"Variantes",defaultValue:{summary:"md"}}},direction:{control:"select",options:["vertical","horizontal"],description:"Dirección del grupo",table:{category:"Layout",defaultValue:{summary:"vertical"}}}},args:{name:"plan",options:V,size:"md",direction:"vertical"}},u={},g={name:"Direction · Vertical",args:{name:"dir-v",options:V,direction:"vertical"}},v={name:"Direction · Horizontal",args:{name:"dir-h",options:t,direction:"horizontal"}},h={name:"Size · sm",args:{name:"sz-sm",options:t,size:"sm"}},f={name:"Size · md",args:{name:"sz-md",options:t,size:"md"}},S={name:"Size · lg",args:{name:"sz-lg",options:t,size:"lg"}},z={name:"Options · With disabled",args:{name:"disabled-opt",options:t}},y={name:"Showcase · Plans selector",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{width:300},children:[e.jsx("p",{style:{fontSize:13,fontWeight:600,marginBottom:12,color:"#374151"},children:"Selecciona tu plan"}),e.jsx(b,{name:"showcase-plan",options:V,size:"md",direction:"vertical"})]})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"{}",...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Direction · Vertical",
  args: {
    name: "dir-v",
    options: PLAN_OPTIONS,
    direction: "vertical"
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Direction · Horizontal",
  args: {
    name: "dir-h",
    options: SIMPLE_OPTIONS,
    direction: "horizontal"
  }
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Size · sm",
  args: {
    name: "sz-sm",
    options: SIMPLE_OPTIONS,
    size: "sm"
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Size · md",
  args: {
    name: "sz-md",
    options: SIMPLE_OPTIONS,
    size: "md"
  }
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Size · lg",
  args: {
    name: "sz-lg",
    options: SIMPLE_OPTIONS,
    size: "lg"
  }
}`,...S.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "Options · With disabled",
  args: {
    name: "disabled-opt",
    options: SIMPLE_OPTIONS
  }
}`,...z.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Showcase · Plans selector",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    width: 300
  }}>\r
      <p style={{
      fontSize: 13,
      fontWeight: 600,
      marginBottom: 12,
      color: "#374151"
    }}>Selecciona tu plan</p>\r
      <RadioGroup name="showcase-plan" options={PLAN_OPTIONS} size="md" direction="vertical" />\r
    </div>
}`,...y.parameters?.docs?.source}}};const A=["Playground","DirectionVertical","DirectionHorizontal","SizeSm","SizeMd","SizeLg","WithDisabledOption","ShowcasePlans"];export{v as DirectionHorizontal,g as DirectionVertical,u as Playground,y as ShowcasePlans,S as SizeLg,f as SizeMd,h as SizeSm,z as WithDisabledOption,A as __namedExportsOrder,W as default};
