import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as P}from"./iframe-vHIwjOwQ.js";import{c as j}from"./index-Bj1Z-dc7.js";import{c as v}from"./cn-C1oRmgnl.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-Ce1ZTWB2.js";const N=({type:s})=>({visa:e.jsxs("svg",{viewBox:"0 0 48 32",className:"w-10 h-7","aria-hidden":"true",children:[e.jsx("rect",{width:"48",height:"32",rx:"4",fill:"#1A1F71"}),e.jsx("text",{x:"24",y:"20",textAnchor:"middle",fill:"#fff",fontSize:"11",fontWeight:"bold",fontFamily:"sans-serif",children:"VISA"})]}),mastercard:e.jsxs("svg",{viewBox:"0 0 48 32",className:"w-10 h-7","aria-hidden":"true",children:[e.jsx("rect",{width:"48",height:"32",rx:"4",fill:"#252525"}),e.jsx("circle",{cx:"19",cy:"16",r:"8",fill:"#EB001B"}),e.jsx("circle",{cx:"29",cy:"16",r:"8",fill:"#F79E1B"}),e.jsx("path",{d:"M24 10.3a8 8 0 010 11.4 8 8 0 000-11.4z",fill:"#FF5F00"})]}),paypal:e.jsxs("svg",{viewBox:"0 0 48 32",className:"w-10 h-7","aria-hidden":"true",children:[e.jsx("rect",{width:"48",height:"32",rx:"4",fill:"#003087"}),e.jsx("text",{x:"24",y:"20",textAnchor:"middle",fill:"#fff",fontSize:"9",fontWeight:"bold",fontFamily:"sans-serif",children:"PayPal"})]}),apple:e.jsxs("svg",{viewBox:"0 0 48 32",className:"w-10 h-7","aria-hidden":"true",children:[e.jsx("rect",{width:"48",height:"32",rx:"4",fill:"#000"}),e.jsx("text",{x:"24",y:"20",textAnchor:"middle",fill:"#fff",fontSize:"9",fontWeight:"bold",fontFamily:"sans-serif",children:" Pay"})]})})[s],k=j(["relative flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer","transition-all duration-200 ease-out","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"],{variants:{selected:{true:"border-blue-600 bg-blue-50 shadow-md dark:bg-blue-950/30 dark:border-blue-500",false:"border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:hover:border-gray-600"}},defaultVariants:{selected:!1}}),C=j(["shrink-0 w-5 h-5 rounded-full border-2 transition-all duration-200","flex items-center justify-center"],{variants:{selected:{true:"border-blue-600 dark:border-blue-500",false:"border-gray-300 dark:border-gray-600"}},defaultVariants:{selected:!1}}),b={visa:"Visa",mastercard:"Mastercard",paypal:"PayPal",apple:"Apple Pay"},i=({type:s,lastFour:n,expiry:l,isSelected:r=!1,onSelect:o,accentColor:t="#2563eb",endingInLabel:g="terminada en",expiresLabel:a="Expira",activeLabel:F="Activo",className:w})=>{const S=h=>{(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),o?.())};return e.jsxs("div",{role:"radio","aria-checked":r,"aria-label":`${b[s]}${n?` ${g} ${n}`:""}`,tabIndex:0,onClick:o,onKeyDown:S,className:v(k({selected:r}),w),style:r?{borderColor:t,backgroundColor:`${t}10`}:void 0,children:[e.jsx("div",{className:v(C({selected:r})),style:r?{borderColor:t}:void 0,children:r&&e.jsx("span",{className:"w-2.5 h-2.5 rounded-full animate-in zoom-in-50 duration-200",style:{backgroundColor:t}})}),e.jsx(N,{type:s}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("p",{className:"text-sm font-semibold text-gray-900 dark:text-white",children:[b[s],n&&e.jsxs("span",{className:"ml-1.5 font-mono text-gray-500 dark:text-gray-400",children:["•••• ",n]})]}),l&&e.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-0.5",children:[a," ",l]})]}),r&&e.jsx("span",{className:"shrink-0 px-2 py-0.5 rounded-full text-xs font-medium",style:{backgroundColor:`${t}20`,color:t},children:F})]})};i.displayName="PaymentMethodCard";i.__docgenInfo={description:"",methods:[],displayName:"PaymentMethodCard",props:{type:{required:!0,tsType:{name:"union",raw:'"visa" | "mastercard" | "paypal" | "apple"',elements:[{name:"literal",value:'"visa"'},{name:"literal",value:'"mastercard"'},{name:"literal",value:'"paypal"'},{name:"literal",value:'"apple"'}]},description:""},lastFour:{required:!1,tsType:{name:"string"},description:""},expiry:{required:!1,tsType:{name:"string"},description:""},isSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},accentColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#2563eb"',computed:!1}},endingInLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"terminada en"',computed:!1}},expiresLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Expira"',computed:!1}},activeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Activo"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const T=[{id:"visa-1",type:"visa",lastFour:"4242",expiry:"12/26"},{id:"mc-1",type:"mastercard",lastFour:"8888",expiry:"03/27"},{id:"paypal-1",type:"paypal"},{id:"apple-1",type:"apple"}],f=({options:s=T,defaultSelected:n,onChange:l,className:r})=>{const[o,t]=P.useState(n??s[0]?.id??""),g=a=>{t(a),l?.(a)};return e.jsxs("div",{className:v("w-full max-w-2xl",r),children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-1",children:"Método de pago"}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mb-4",children:"Selecciona cómo deseas realizar el pago."}),e.jsx("div",{role:"radiogroup","aria-label":"Métodos de pago",className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:s.map(a=>e.jsx(i,{type:a.type,lastFour:a.lastFour,expiry:a.expiry,isSelected:o===a.id,onSelect:()=>g(a.id)},a.id))})]})};f.displayName="PaymentForm";f.__docgenInfo={description:"",methods:[],displayName:"PaymentForm",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"PaymentOption"}],raw:"PaymentOption[]"},description:"",defaultValue:{value:`[
  { id: "visa-1", type: "visa", lastFour: "4242", expiry: "12/26" },
  { id: "mc-1", type: "mastercard", lastFour: "8888", expiry: "03/27" },
  { id: "paypal-1", type: "paypal" },
  { id: "apple-1", type: "apple" },
]`,computed:!1}},defaultSelected:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const O={title:"Components/PaymentMethodCard",component:i,tags:["autodocs"],argTypes:{type:{control:"select",options:["visa","mastercard","paypal","apple"]},isSelected:{control:"boolean"},lastFour:{control:"text"},expiry:{control:"text"}}},d={args:{type:"visa",lastFour:"4242",expiry:"12/26",isSelected:!1}},p={args:{type:"mastercard",lastFour:"8888",expiry:"03/27",isSelected:!0}},c={args:{type:"paypal",isSelected:!1}},m={args:{type:"apple",isSelected:!0}},u={render:()=>e.jsxs("div",{className:"space-y-3 max-w-sm",children:[e.jsx(i,{type:"visa",lastFour:"4242",expiry:"12/26",isSelected:!0}),e.jsx(i,{type:"mastercard",lastFour:"8888",expiry:"03/27"}),e.jsx(i,{type:"paypal"}),e.jsx(i,{type:"apple"})]})},y={render:()=>e.jsx(f,{})},x={render:()=>e.jsx(f,{options:[{id:"v1",type:"visa",lastFour:"1234",expiry:"06/25"},{id:"v2",type:"visa",lastFour:"5678",expiry:"11/27"},{id:"mc1",type:"mastercard",lastFour:"9999",expiry:"01/28"},{id:"pp1",type:"paypal"}],defaultSelected:"v2"})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    type: "visa",
    lastFour: "4242",
    expiry: "12/26",
    isSelected: false
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    type: "mastercard",
    lastFour: "8888",
    expiry: "03/27",
    isSelected: true
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: "paypal",
    isSelected: false
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    type: "apple",
    isSelected: true
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-3 max-w-sm">
      <PaymentMethodCard type="visa" lastFour="4242" expiry="12/26" isSelected />
      <PaymentMethodCard type="mastercard" lastFour="8888" expiry="03/27" />
      <PaymentMethodCard type="paypal" />
      <PaymentMethodCard type="apple" />
    </div>
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <PaymentForm />
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <PaymentForm options={[{
    id: "v1",
    type: "visa",
    lastFour: "1234",
    expiry: "06/25"
  }, {
    id: "v2",
    type: "visa",
    lastFour: "5678",
    expiry: "11/27"
  }, {
    id: "mc1",
    type: "mastercard",
    lastFour: "9999",
    expiry: "01/28"
  }, {
    id: "pp1",
    type: "paypal"
  }]} defaultSelected="v2" />
}`,...x.parameters?.docs?.source}}};const z=["Visa","Selected","PayPal","ApplePay","AllCards","FormExample","FormWithCustomOptions"];export{u as AllCards,m as ApplePay,y as FormExample,x as FormWithCustomOptions,c as PayPal,p as Selected,d as Visa,z as __namedExportsOrder,O as default};
