import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as R}from"./iframe-Bq8VPCYT.js";import{c as M}from"./index-Bj1Z-dc7.js";import{c as I}from"./cn-BQt2Fkck.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-Ce1ZTWB2.js";const B=M(["w-full font-medium border outline-none","bg-white dark:bg-gray-800","transition-all duration-150 ease-out","placeholder:text-gray-400 dark:placeholder:text-gray-500 placeholder:font-normal","disabled:pointer-events-none disabled:opacity-40 disabled:bg-gray-50 dark:disabled:bg-gray-700","focus-visible:ring-2 focus-visible:ring-offset-1"],{variants:{size:{sm:"h-8 px-3 text-xs rounded-lg",md:"h-10 px-4 text-sm rounded-xl",lg:"h-12 px-5 text-base rounded-xl"},status:{default:["border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100","hover:border-gray-400 dark:hover:border-gray-500","focus-visible:border-blue-500 focus-visible:ring-blue-200 dark:focus-visible:ring-blue-800"],error:["border-red-400 dark:border-red-600 text-gray-900 dark:text-gray-100 bg-red-50/40 dark:bg-red-950/20","hover:border-red-500","focus-visible:border-red-500 focus-visible:ring-red-200 dark:focus-visible:ring-red-900"],success:["border-emerald-400 dark:border-emerald-600 text-gray-900 dark:text-gray-100","hover:border-emerald-500","focus-visible:border-emerald-500 focus-visible:ring-emerald-200 dark:focus-visible:ring-emerald-900"],warning:["border-amber-400 dark:border-amber-600 text-gray-900 dark:text-gray-100 bg-amber-50/40 dark:bg-amber-950/20","hover:border-amber-500","focus-visible:border-amber-500 focus-visible:ring-amber-200 dark:focus-visible:ring-amber-900"]},hasLeft:{true:""},hasRight:{true:""}},compoundVariants:[{hasLeft:!0,size:"sm",className:"pl-8"},{hasLeft:!0,size:"md",className:"pl-10"},{hasLeft:!0,size:"lg",className:"pl-12"},{hasRight:!0,size:"sm",className:"pr-8"},{hasRight:!0,size:"md",className:"pr-10"},{hasRight:!0,size:"lg",className:"pr-12"}],defaultVariants:{size:"md",status:"default"}}),r=R.forwardRef(({className:v,size:s="md",status:L="default",leftElement:j,rightElement:w,...W},C)=>{const E=s==="sm"?"w-4 h-4":s==="lg"?"w-5 h-5":"w-4 h-4",D=s==="sm"?"left-2.5":s==="lg"?"left-3.5":"left-3",N=s==="sm"?"right-2.5":s==="lg"?"right-3.5":"right-3";return e.jsxs("div",{className:"relative inline-flex w-full items-center",children:[j&&e.jsx("span",{className:I("absolute text-gray-400 dark:text-gray-500 pointer-events-none inline-flex shrink-0",D,E),children:j}),e.jsx("input",{ref:C,className:I(B({size:s,status:L,hasLeft:!!j,hasRight:!!w,className:v})),...W}),w&&e.jsx("span",{className:I("absolute text-gray-400 dark:text-gray-500 inline-flex shrink-0",N,E),children:w})]})});r.displayName="Input";r.__docgenInfo={description:"",methods:[],displayName:"Input",props:{leftElement:{required:!1,tsType:{name:"ReactNode"},description:""},rightElement:{required:!1,tsType:{name:"ReactNode"},description:""},size:{defaultValue:{value:'"md"',computed:!1},required:!1},status:{defaultValue:{value:'"default"',computed:!1},required:!1}},composes:["Omit","VariantProps"]};const a=()=>e.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("path",{d:"M21 21l-4.35-4.35"})]}),k=()=>e.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),e.jsx("path",{d:"M22 7l-10 7L2 7"})]}),y=()=>e.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),z=()=>e.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"}),e.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),_={title:"Components/Input",component:r,parameters:{layout:"centered",docs:{description:{component:"Campo de texto con variantes de estado (default, error, success, warning), tamaños y soporte de íconos izquierdo/derecho. Construido con CVA."}}},argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Tamaño del input",table:{category:"Variantes",defaultValue:{summary:"md"}}},status:{control:"select",options:["default","error","success","warning"],description:"Estado visual del input",table:{category:"Variantes",defaultValue:{summary:"default"}}},placeholder:{control:"text",table:{category:"Contenido"}},disabled:{control:"boolean",table:{category:"Estado",defaultValue:{summary:"false"}}},leftElement:{table:{disable:!0}},rightElement:{table:{disable:!0}}},args:{placeholder:"Escribe aquí...",size:"md",status:"default",disabled:!1},decorators:[v=>e.jsx("div",{style:{width:320},children:e.jsx(v,{})})]},t={},o={name:"Status · Default",args:{status:"default"}},n={name:"Status · Error",args:{status:"error",placeholder:"Correo inválido"}},l={name:"Status · Success",args:{status:"success",placeholder:"Correo verificado"}},c={name:"Status · Warning",args:{status:"warning",placeholder:"Revisa este campo"}},i={name:"Size · sm",args:{size:"sm",placeholder:"Small"}},d={name:"Size · md",args:{size:"md",placeholder:"Medium"}},m={name:"Size · lg",args:{size:"lg",placeholder:"Large"}},u={name:"Icon · Left",args:{leftElement:e.jsx(a,{}),placeholder:"Buscar..."}},p={name:"Icon · Right",args:{rightElement:e.jsx(y,{}),placeholder:"Contraseña",type:"password"}},h={name:"Icon · Both",args:{leftElement:e.jsx(k,{}),rightElement:e.jsx(y,{}),placeholder:"correo@ejemplo.com"}},g={name:"Icon · Password",args:{leftElement:e.jsx(z,{}),rightElement:e.jsx(y,{}),type:"password",placeholder:"Contraseña"}},f={name:"State · Disabled",args:{disabled:!0,placeholder:"No editable"}},x={name:"Showcase · All statuses",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,width:320},children:[e.jsx(r,{status:"default",placeholder:"Default"}),e.jsx(r,{status:"error",placeholder:"Error — campo inválido"}),e.jsx(r,{status:"success",placeholder:"Success — verificado"}),e.jsx(r,{status:"warning",placeholder:"Warning — revisa el valor"})]})},b={name:"Showcase · With icons",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,width:320},children:[e.jsx(r,{leftElement:e.jsx(a,{}),placeholder:"Buscar..."}),e.jsx(r,{leftElement:e.jsx(k,{}),placeholder:"correo@ejemplo.com",type:"email"}),e.jsx(r,{leftElement:e.jsx(z,{}),rightElement:e.jsx(y,{}),placeholder:"Contraseña",type:"password"})]})},S={name:"Showcase · All sizes",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,width:320},children:[e.jsx(r,{size:"sm",leftElement:e.jsx(a,{}),placeholder:"Small"}),e.jsx(r,{size:"md",leftElement:e.jsx(a,{}),placeholder:"Medium"}),e.jsx(r,{size:"lg",leftElement:e.jsx(a,{}),placeholder:"Large"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Status · Default",
  args: {
    status: "default"
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Status · Error",
  args: {
    status: "error",
    placeholder: "Correo inválido"
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Status · Success",
  args: {
    status: "success",
    placeholder: "Correo verificado"
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Status · Warning",
  args: {
    status: "warning",
    placeholder: "Revisa este campo"
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Size · sm",
  args: {
    size: "sm",
    placeholder: "Small"
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Size · md",
  args: {
    size: "md",
    placeholder: "Medium"
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Size · lg",
  args: {
    size: "lg",
    placeholder: "Large"
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Icon · Left",
  args: {
    leftElement: <SearchIcon />,
    placeholder: "Buscar..."
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Icon · Right",
  args: {
    rightElement: <EyeIcon />,
    placeholder: "Contraseña",
    type: "password"
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Icon · Both",
  args: {
    leftElement: <MailIcon />,
    rightElement: <EyeIcon />,
    placeholder: "correo@ejemplo.com"
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Icon · Password",
  args: {
    leftElement: <LockIcon />,
    rightElement: <EyeIcon />,
    type: "password",
    placeholder: "Contraseña"
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "State · Disabled",
  args: {
    disabled: true,
    placeholder: "No editable"
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
    width: 320
  }}>
      <Input status="default" placeholder="Default" />
      <Input status="error" placeholder="Error — campo inválido" />
      <Input status="success" placeholder="Success — verificado" />
      <Input status="warning" placeholder="Warning — revisa el valor" />
    </div>
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Showcase · With icons",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: 320
  }}>
      <Input leftElement={<SearchIcon />} placeholder="Buscar..." />
      <Input leftElement={<MailIcon />} placeholder="correo@ejemplo.com" type="email" />
      <Input leftElement={<LockIcon />} rightElement={<EyeIcon />} placeholder="Contraseña" type="password" />
    </div>
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
    width: 320
  }}>
      <Input size="sm" leftElement={<SearchIcon />} placeholder="Small" />
      <Input size="md" leftElement={<SearchIcon />} placeholder="Medium" />
      <Input size="lg" leftElement={<SearchIcon />} placeholder="Large" />
    </div>
}`,...S.parameters?.docs?.source}}};const F=["Playground","StatusDefault","StatusError","StatusSuccess","StatusWarning","SizeSm","SizeMd","SizeLg","WithLeftIcon","WithRightIcon","WithBothIcons","PasswordField","StateDisabled","ShowcaseAllStatuses","ShowcaseWithIcons","ShowcaseAllSizes"];export{g as PasswordField,t as Playground,S as ShowcaseAllSizes,x as ShowcaseAllStatuses,b as ShowcaseWithIcons,m as SizeLg,d as SizeMd,i as SizeSm,f as StateDisabled,o as StatusDefault,n as StatusError,l as StatusSuccess,c as StatusWarning,h as WithBothIcons,u as WithLeftIcon,p as WithRightIcon,F as __namedExportsOrder,_ as default};
