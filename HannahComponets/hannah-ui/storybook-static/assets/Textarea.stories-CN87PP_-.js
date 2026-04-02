import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as S}from"./iframe-Bq8VPCYT.js";import{c as f}from"./index-Bj1Z-dc7.js";import{c as x}from"./cn-BQt2Fkck.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-Ce1ZTWB2.js";const y=f(["w-full font-medium border outline-none resize-y","bg-white dark:bg-gray-800","transition-all duration-150 ease-out","placeholder:text-gray-400 dark:placeholder:text-gray-500 placeholder:font-normal","disabled:pointer-events-none disabled:opacity-40 disabled:bg-gray-50 dark:disabled:bg-gray-700","focus-visible:ring-2 focus-visible:ring-offset-1"],{variants:{size:{sm:"px-3 py-2 text-xs rounded-lg",md:"px-4 py-2.5 text-sm rounded-xl",lg:"px-5 py-3 text-base rounded-xl"},status:{default:["border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100","hover:border-gray-400 dark:hover:border-gray-500","focus-visible:border-blue-500 focus-visible:ring-blue-200 dark:focus-visible:ring-blue-800"],error:["border-red-400 dark:border-red-600 text-gray-900 dark:text-gray-100 bg-red-50/40 dark:bg-red-950/20","hover:border-red-500","focus-visible:border-red-500 focus-visible:ring-red-200 dark:focus-visible:ring-red-900"],success:["border-emerald-400 dark:border-emerald-600 text-gray-900 dark:text-gray-100","hover:border-emerald-500","focus-visible:border-emerald-500 focus-visible:ring-emerald-200 dark:focus-visible:ring-emerald-900"]}},defaultVariants:{size:"md",status:"default"}}),r=S.forwardRef(({className:u,size:m,status:p,...g},b)=>e.jsx("textarea",{ref:b,className:x(y({size:m,status:p,className:u})),...g}));r.displayName="Textarea";r.__docgenInfo={description:"",methods:[],displayName:"Textarea",composes:["TextareaHTMLAttributes","VariantProps"]};const E={title:"Components/Textarea",component:r,parameters:{layout:"centered",docs:{description:{component:"Área de texto multi-línea con los mismos estados visuales que Input (default, error, success). Redimensionable verticalmente."}}},argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Tamaño del textarea",table:{category:"Variantes",defaultValue:{summary:"md"}}},status:{control:"select",options:["default","error","success"],description:"Estado visual",table:{category:"Variantes",defaultValue:{summary:"default"}}},placeholder:{control:"text",table:{category:"Contenido"}},rows:{control:"number",table:{category:"Layout"}},disabled:{control:"boolean",table:{category:"Estado",defaultValue:{summary:"false"}}}},args:{placeholder:"Escribe un mensaje...",size:"md",status:"default",rows:4,disabled:!1},decorators:[u=>e.jsx("div",{style:{width:360},children:e.jsx(u,{})})]},a={},s={name:"Status · Default",args:{status:"default"}},t={name:"Status · Error",args:{status:"error",placeholder:"El mensaje es demasiado corto"}},o={name:"Status · Success",args:{status:"success",placeholder:"Mensaje guardado correctamente"}},d={name:"Size · sm",args:{size:"sm",rows:3}},n={name:"Size · md",args:{size:"md",rows:4}},c={name:"Size · lg",args:{size:"lg",rows:5}},l={name:"State · Disabled",args:{disabled:!0,placeholder:"No editable"}},i={name:"Showcase · All statuses",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:14,width:360},children:[e.jsx(r,{status:"default",placeholder:"Default — escribe tu mensaje",rows:3}),e.jsx(r,{status:"error",placeholder:"Error — mensaje muy corto",rows:3}),e.jsx(r,{status:"success",placeholder:"Success — guardado correctamente",rows:3})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Status · Default",
  args: {
    status: "default"
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Status · Error",
  args: {
    status: "error",
    placeholder: "El mensaje es demasiado corto"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Status · Success",
  args: {
    status: "success",
    placeholder: "Mensaje guardado correctamente"
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Size · sm",
  args: {
    size: "sm",
    rows: 3
  }
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Size · md",
  args: {
    size: "md",
    rows: 4
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Size · lg",
  args: {
    size: "lg",
    rows: 5
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "State · Disabled",
  args: {
    disabled: true,
    placeholder: "No editable"
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Showcase · All statuses",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 14,
    width: 360
  }}>
      <Textarea status="default" placeholder="Default — escribe tu mensaje" rows={3} />
      <Textarea status="error" placeholder="Error — mensaje muy corto" rows={3} />
      <Textarea status="success" placeholder="Success — guardado correctamente" rows={3} />
    </div>
}`,...i.parameters?.docs?.source}}};const D=["Playground","StatusDefault","StatusError","StatusSuccess","SizeSm","SizeMd","SizeLg","StateDisabled","ShowcaseAllStatuses"];export{a as Playground,i as ShowcaseAllStatuses,c as SizeLg,n as SizeMd,d as SizeSm,l as StateDisabled,s as StatusDefault,t as StatusError,o as StatusSuccess,D as __namedExportsOrder,E as default};
