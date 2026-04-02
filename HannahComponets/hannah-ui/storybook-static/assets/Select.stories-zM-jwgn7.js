import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as D}from"./iframe-vHIwjOwQ.js";import{c as j}from"./index-Bj1Z-dc7.js";import{c as v}from"./cn-C1oRmgnl.js";import{C as O}from"./chevron-down-BY11miSp.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-Ce1ZTWB2.js";import"./createLucideIcon-C-Otocs2.js";const k=j(["w-full appearance-none font-medium border outline-none cursor-pointer","bg-white dark:bg-gray-800","transition-all duration-150 ease-out","disabled:pointer-events-none disabled:opacity-40 disabled:bg-gray-50 dark:disabled:bg-gray-700","focus-visible:ring-2 focus-visible:ring-offset-1"],{variants:{size:{sm:"h-8 pl-3 pr-8 text-xs rounded-lg",md:"h-10 pl-4 pr-10 text-sm rounded-xl",lg:"h-12 pl-5 pr-12 text-base rounded-xl"},status:{default:["border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100","hover:border-gray-400 dark:hover:border-gray-500","focus-visible:border-blue-500 focus-visible:ring-blue-200 dark:focus-visible:ring-blue-800"],error:["border-red-400 dark:border-red-600 text-gray-900 dark:text-gray-100 bg-red-50/40 dark:bg-red-950/20","focus-visible:border-red-500 focus-visible:ring-red-200 dark:focus-visible:ring-red-900"],success:["border-emerald-400 dark:border-emerald-600 text-gray-900 dark:text-gray-100","focus-visible:border-emerald-500 focus-visible:ring-emerald-200 dark:focus-visible:ring-emerald-900"]}},defaultVariants:{size:"md",status:"default"}}),s=D.forwardRef(({className:S,size:b="md",status:x="default",options:f,placeholder:h,children:y,...z},w)=>{const E=b==="sm"?"w-3.5 h-3.5 right-2":b==="lg"?"w-5 h-5 right-3.5":"w-4 h-4 right-3";return e.jsxs("div",{className:"relative inline-flex w-full items-center",children:[e.jsxs("select",{ref:w,className:v(k({size:b,status:x,className:S})),...z,children:[h&&e.jsx("option",{value:"",disabled:!0,children:h}),f?f.map(r=>e.jsx("option",{value:r.value,disabled:r.disabled,children:r.label},r.value)):y]}),e.jsx(O,{className:v("absolute pointer-events-none text-gray-400 dark:text-gray-500 shrink-0",E)})]})});s.displayName="Select";s.__docgenInfo={description:"",methods:[],displayName:"Select",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},size:{defaultValue:{value:'"md"',computed:!1},required:!1},status:{defaultValue:{value:'"default"',computed:!1},required:!1}},composes:["Omit","VariantProps"]};const a=[{value:"pe",label:"Perú"},{value:"mx",label:"México"},{value:"ar",label:"Argentina"},{value:"co",label:"Colombia"},{value:"es",label:"España"},{value:"us",label:"Estados Unidos"}],C=[{value:"admin",label:"Administrador"},{value:"editor",label:"Editor"},{value:"viewer",label:"Solo lectura",disabled:!0}],q={title:"Components/Select",component:s,parameters:{layout:"centered",docs:{description:{component:"Dropdown select nativo con flecha personalizada, prop options[] para carga declarativa, y los mismos estados que Input. Construido con CVA."}}},argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Tamaño del select",table:{category:"Variantes",defaultValue:{summary:"md"}}},status:{control:"select",options:["default","error","success"],description:"Estado visual",table:{category:"Variantes",defaultValue:{summary:"default"}}},placeholder:{control:"text",table:{category:"Contenido"}},disabled:{control:"boolean",table:{category:"Estado",defaultValue:{summary:"false"}}}},args:{options:a,placeholder:"Selecciona un país",size:"md",status:"default",disabled:!1},decorators:[S=>e.jsx("div",{style:{width:280},children:e.jsx(S,{})})]},t={},o={name:"Status · Default",args:{status:"default"}},l={name:"Status · Error",args:{status:"error"}},n={name:"Status · Success",args:{status:"success"}},i={name:"Size · sm",args:{size:"sm"}},d={name:"Size · md",args:{size:"md"}},c={name:"Size · lg",args:{size:"lg"}},u={name:"Options · With disabled",args:{options:C,placeholder:"Selecciona un rol"}},m={name:"State · Disabled",args:{disabled:!0}},p={name:"Showcase · All statuses",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,width:280},children:[e.jsx(s,{options:a,placeholder:"Default",status:"default"}),e.jsx(s,{options:a,placeholder:"Error — selección inválida",status:"error"}),e.jsx(s,{options:a,placeholder:"Success",status:"success"})]})},g={name:"Showcase · All sizes",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,width:280},children:[e.jsx(s,{options:a,placeholder:"Small",size:"sm"}),e.jsx(s,{options:a,placeholder:"Medium",size:"md"}),e.jsx(s,{options:a,placeholder:"Large",size:"lg"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Status · Default",
  args: {
    status: "default"
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Status · Error",
  args: {
    status: "error"
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Status · Success",
  args: {
    status: "success"
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Size · sm",
  args: {
    size: "sm"
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Size · md",
  args: {
    size: "md"
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Size · lg",
  args: {
    size: "lg"
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Options · With disabled",
  args: {
    options: ROLES,
    placeholder: "Selecciona un rol"
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "State · Disabled",
  args: {
    disabled: true
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Showcase · All statuses",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: 280
  }}>
      <Select options={COUNTRIES} placeholder="Default" status="default" />
      <Select options={COUNTRIES} placeholder="Error — selección inválida" status="error" />
      <Select options={COUNTRIES} placeholder="Success" status="success" />
    </div>
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Showcase · All sizes",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: 280
  }}>
      <Select options={COUNTRIES} placeholder="Small" size="sm" />
      <Select options={COUNTRIES} placeholder="Medium" size="md" />
      <Select options={COUNTRIES} placeholder="Large" size="lg" />
    </div>
}`,...g.parameters?.docs?.source}}};const M=["Playground","StatusDefault","StatusError","StatusSuccess","SizeSm","SizeMd","SizeLg","WithDisabledOptions","StateDisabled","ShowcaseAllStatuses","ShowcaseAllSizes"];export{t as Playground,g as ShowcaseAllSizes,p as ShowcaseAllStatuses,c as SizeLg,d as SizeMd,i as SizeSm,m as StateDisabled,o as StatusDefault,l as StatusError,n as StatusSuccess,u as WithDisabledOptions,M as __namedExportsOrder,q as default};
