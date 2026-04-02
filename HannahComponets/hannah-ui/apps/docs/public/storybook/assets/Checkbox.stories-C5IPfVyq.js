import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as z}from"./iframe-vHIwjOwQ.js";import{c as v}from"./index-Bj1Z-dc7.js";import{c as r}from"./cn-C1oRmgnl.js";import{C as M}from"./check-DDGJN-oM.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-Ce1ZTWB2.js";import"./createLucideIcon-C-Otocs2.js";const T=v(["appearance-none border-2 rounded transition-all duration-150","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 dark:focus-visible:ring-blue-700 focus-visible:ring-offset-1"],{variants:{size:{sm:"w-4 h-4",md:"w-5 h-5",lg:"w-6 h-6"},checked:{true:"bg-blue-500 border-blue-500 dark:bg-blue-600 dark:border-blue-600",false:"bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500"}},defaultVariants:{size:"md",checked:!1}}),V=v("font-medium text-gray-800 dark:text-gray-200 leading-snug",{variants:{size:{sm:"text-xs",md:"text-sm",lg:"text-base"}},defaultVariants:{size:"md"}}),q={sm:10,md:12,lg:14},a=z.forwardRef(({className:j,label:b,description:h,size:g="md",disabled:f,id:S,checked:x,defaultChecked:C,onChange:D,...w},N)=>{const[A,O]=z.useState(!!C),s=x!==void 0,k=s?x:A,G=y=>{s||O(y.target.checked),D?.(y)};return e.jsxs("label",{htmlFor:S,className:r("inline-flex items-start gap-2.5 cursor-pointer select-none",f&&"pointer-events-none opacity-40",j),children:[e.jsxs("div",{className:"relative flex items-center justify-center shrink-0 mt-0.5",children:[e.jsx("input",{ref:N,id:S,type:"checkbox",disabled:f,checked:s?x:void 0,defaultChecked:s?void 0:C,onChange:G,"aria-checked":k,className:r(T({size:g,checked:!!k})),...w}),e.jsx(M,{size:q[g??"md"],strokeWidth:3,className:r("absolute pointer-events-none text-white transition-opacity duration-150",k?"opacity-100":"opacity-0"),"aria-hidden":"true"})]}),(b||h)&&e.jsxs("div",{className:"flex flex-col gap-0.5",children:[b&&e.jsx("span",{className:r(V({size:g})),children:b}),h&&e.jsx("span",{className:"text-xs text-gray-500 dark:text-gray-400 leading-snug",children:h})]})]})});a.displayName="Checkbox";a.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"ReactNode"},description:""},description:{required:!1,tsType:{name:"string"},description:""},size:{defaultValue:{value:'"md"',computed:!1},required:!1}},composes:["Omit"]};const I={title:"Components/Checkbox",component:a,parameters:{layout:"centered",docs:{description:{component:"Checkbox accesible con label, descripción opcional y 3 tamaños. Usa estado nativo del input."}}},argTypes:{label:{control:"text",table:{category:"Contenido"}},description:{control:"text",table:{category:"Contenido"}},size:{control:"select",options:["sm","md","lg"],description:"Tamaño",table:{category:"Variantes",defaultValue:{summary:"md"}}},disabled:{control:"boolean",table:{category:"Estado",defaultValue:{summary:"false"}}},defaultChecked:{control:"boolean",table:{category:"Estado"}}},args:{label:"Acepto los términos y condiciones",size:"md",disabled:!1}},o={},n={name:"Content · With description",args:{label:"Recibir notificaciones",description:"Te enviaremos actualizaciones importantes por correo."}},t={name:"Size · sm",args:{size:"sm",label:"Pequeño"}},c={name:"Size · md",args:{size:"md",label:"Mediano"}},i={name:"Size · lg",args:{size:"lg",label:"Grande"}},l={name:"State · Checked",args:{defaultChecked:!0,label:"Ya seleccionado"}},d={name:"State · Disabled",args:{disabled:!0,label:"No disponible"}},m={name:"State · Disabled checked",args:{disabled:!0,defaultChecked:!0,label:"Fijo seleccionado"}},p={name:"Showcase · Group",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(a,{label:"Opción A",description:"Descripción breve de la opción A.",defaultChecked:!0}),e.jsx(a,{label:"Opción B",description:"Descripción breve de la opción B."}),e.jsx(a,{label:"Opción C — no disponible",disabled:!0})]})},u={name:"Showcase · All sizes",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:14},children:[e.jsx(a,{size:"sm",label:"Small checkbox",defaultChecked:!0}),e.jsx(a,{size:"md",label:"Medium checkbox",defaultChecked:!0}),e.jsx(a,{size:"lg",label:"Large checkbox",defaultChecked:!0})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Content · With description",
  args: {
    label: "Recibir notificaciones",
    description: "Te enviaremos actualizaciones importantes por correo."
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Size · sm",
  args: {
    size: "sm",
    label: "Pequeño"
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Size · md",
  args: {
    size: "md",
    label: "Mediano"
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Size · lg",
  args: {
    size: "lg",
    label: "Grande"
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "State · Checked",
  args: {
    defaultChecked: true,
    label: "Ya seleccionado"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "State · Disabled",
  args: {
    disabled: true,
    label: "No disponible"
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "State · Disabled checked",
  args: {
    disabled: true,
    defaultChecked: true,
    label: "Fijo seleccionado"
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Showcase · Group",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12
  }}>
      <Checkbox label="Opción A" description="Descripción breve de la opción A." defaultChecked />
      <Checkbox label="Opción B" description="Descripción breve de la opción B." />
      <Checkbox label="Opción C — no disponible" disabled />
    </div>
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Showcase · All sizes",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 14
  }}>
      <Checkbox size="sm" label="Small checkbox" defaultChecked />
      <Checkbox size="md" label="Medium checkbox" defaultChecked />
      <Checkbox size="lg" label="Large checkbox" defaultChecked />
    </div>
}`,...u.parameters?.docs?.source}}};const Y=["Playground","WithDescription","SizeSm","SizeMd","SizeLg","StateChecked","StateDisabled","StateDisabledChecked","ShowcaseGroup","ShowcaseAllSizes"];export{o as Playground,u as ShowcaseAllSizes,p as ShowcaseGroup,i as SizeLg,c as SizeMd,t as SizeSm,l as StateChecked,d as StateDisabled,m as StateDisabledChecked,n as WithDescription,Y as __namedExportsOrder,I as default};
