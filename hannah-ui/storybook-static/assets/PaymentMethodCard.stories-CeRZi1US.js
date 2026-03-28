import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as j}from"./iframe-D7DoABNO.js";import{c as b}from"./index-BE5fGFUm.js";import{c as h}from"./cn-BQHNewu7.js";import"./preload-helper-PPVm8Dsz.js";const F=({type:r})=>({visa:e.jsxs("svg",{viewBox:"0 0 48 32",className:"w-10 h-7","aria-hidden":"true",children:[e.jsx("rect",{width:"48",height:"32",rx:"4",fill:"#1A1F71"}),e.jsx("text",{x:"24",y:"20",textAnchor:"middle",fill:"#fff",fontSize:"11",fontWeight:"bold",fontFamily:"sans-serif",children:"VISA"})]}),mastercard:e.jsxs("svg",{viewBox:"0 0 48 32",className:"w-10 h-7","aria-hidden":"true",children:[e.jsx("rect",{width:"48",height:"32",rx:"4",fill:"#252525"}),e.jsx("circle",{cx:"19",cy:"16",r:"8",fill:"#EB001B"}),e.jsx("circle",{cx:"29",cy:"16",r:"8",fill:"#F79E1B"}),e.jsx("path",{d:"M24 10.3a8 8 0 010 11.4 8 8 0 000-11.4z",fill:"#FF5F00"})]}),paypal:e.jsxs("svg",{viewBox:"0 0 48 32",className:"w-10 h-7","aria-hidden":"true",children:[e.jsx("rect",{width:"48",height:"32",rx:"4",fill:"#003087"}),e.jsx("text",{x:"24",y:"20",textAnchor:"middle",fill:"#fff",fontSize:"9",fontWeight:"bold",fontFamily:"sans-serif",children:"PayPal"})]}),apple:e.jsxs("svg",{viewBox:"0 0 48 32",className:"w-10 h-7","aria-hidden":"true",children:[e.jsx("rect",{width:"48",height:"32",rx:"4",fill:"#000"}),e.jsx("text",{x:"24",y:"20",textAnchor:"middle",fill:"#fff",fontSize:"9",fontWeight:"bold",fontFamily:"sans-serif",children:" Pay"})]})})[r],w=b(["relative flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer","transition-all duration-200 ease-out","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"],{variants:{selected:{true:"border-blue-600 bg-blue-50 shadow-md dark:bg-blue-950/30 dark:border-blue-500",false:"border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:hover:border-gray-600"}},defaultVariants:{selected:!1}}),S=b(["shrink-0 w-5 h-5 rounded-full border-2 transition-all duration-200","flex items-center justify-center"],{variants:{selected:{true:"border-blue-600 dark:border-blue-500",false:"border-gray-300 dark:border-gray-600"}},defaultVariants:{selected:!1}}),v={visa:"Visa",mastercard:"Mastercard",paypal:"PayPal",apple:"Apple Pay"},s=({type:r,lastFour:t,expiry:n,isSelected:i=!1,onSelect:l,className:f})=>{const g=a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),l?.())};return e.jsxs("div",{role:"radio","aria-checked":i,"aria-label":`${v[r]}${t?` terminada en ${t}`:""}`,tabIndex:0,onClick:l,onKeyDown:g,className:h(w({selected:i}),f),children:[e.jsx("div",{className:h(S({selected:i})),children:i&&e.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-500 animate-in zoom-in-50 duration-200"})}),e.jsx(F,{type:r}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("p",{className:"text-sm font-semibold text-gray-900 dark:text-white",children:[v[r],t&&e.jsxs("span",{className:"ml-1.5 font-mono text-gray-500 dark:text-gray-400",children:["•••• ",t]})]}),n&&e.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-0.5",children:["Expira ",n]})]}),i&&e.jsx("span",{className:"shrink-0 px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-xs font-medium dark:bg-blue-900/50 dark:text-blue-300",children:"Activo"})]})};s.displayName="PaymentMethodCard";s.__docgenInfo={description:"",methods:[],displayName:"PaymentMethodCard",props:{type:{required:!0,tsType:{name:"union",raw:'"visa" | "mastercard" | "paypal" | "apple"',elements:[{name:"literal",value:'"visa"'},{name:"literal",value:'"mastercard"'},{name:"literal",value:'"paypal"'},{name:"literal",value:'"apple"'}]},description:""},lastFour:{required:!1,tsType:{name:"string"},description:""},expiry:{required:!1,tsType:{name:"string"},description:""},isSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const P=[{id:"visa-1",type:"visa",lastFour:"4242",expiry:"12/26"},{id:"mc-1",type:"mastercard",lastFour:"8888",expiry:"03/27"},{id:"paypal-1",type:"paypal"},{id:"apple-1",type:"apple"}],x=({options:r=P,defaultSelected:t,onChange:n,className:i})=>{const[l,f]=j.useState(t??r[0]?.id??""),g=a=>{f(a),n?.(a)};return e.jsxs("div",{className:h("w-full max-w-2xl",i),children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-1",children:"Método de pago"}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mb-4",children:"Selecciona cómo deseas realizar el pago."}),e.jsx("div",{role:"radiogroup","aria-label":"Métodos de pago",className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:r.map(a=>e.jsx(s,{type:a.type,lastFour:a.lastFour,expiry:a.expiry,isSelected:l===a.id,onSelect:()=>g(a.id)},a.id))})]})};x.displayName="PaymentForm";x.__docgenInfo={description:"",methods:[],displayName:"PaymentForm",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"PaymentOption"}],raw:"PaymentOption[]"},description:"",defaultValue:{value:`[
  { id: "visa-1", type: "visa", lastFour: "4242", expiry: "12/26" },
  { id: "mc-1", type: "mastercard", lastFour: "8888", expiry: "03/27" },
  { id: "paypal-1", type: "paypal" },
  { id: "apple-1", type: "apple" },
]`,computed:!1}},defaultSelected:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const T={title:"Components/PaymentMethodCard",component:s,tags:["autodocs"],argTypes:{type:{control:"select",options:["visa","mastercard","paypal","apple"]},isSelected:{control:"boolean"},lastFour:{control:"text"},expiry:{control:"text"}}},o={args:{type:"visa",lastFour:"4242",expiry:"12/26",isSelected:!1}},d={args:{type:"mastercard",lastFour:"8888",expiry:"03/27",isSelected:!0}},p={args:{type:"paypal",isSelected:!1}},c={args:{type:"apple",isSelected:!0}},m={render:()=>e.jsxs("div",{className:"space-y-3 max-w-sm",children:[e.jsx(s,{type:"visa",lastFour:"4242",expiry:"12/26",isSelected:!0}),e.jsx(s,{type:"mastercard",lastFour:"8888",expiry:"03/27"}),e.jsx(s,{type:"paypal"}),e.jsx(s,{type:"apple"})]})},y={render:()=>e.jsx(x,{})},u={render:()=>e.jsx(x,{options:[{id:"v1",type:"visa",lastFour:"1234",expiry:"06/25"},{id:"v2",type:"visa",lastFour:"5678",expiry:"11/27"},{id:"mc1",type:"mastercard",lastFour:"9999",expiry:"01/28"},{id:"pp1",type:"paypal"}],defaultSelected:"v2"})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: "visa",
    lastFour: "4242",
    expiry: "12/26",
    isSelected: false
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    type: "mastercard",
    lastFour: "8888",
    expiry: "03/27",
    isSelected: true
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    type: "paypal",
    isSelected: false
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: "apple",
    isSelected: true
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-3 max-w-sm">\r
      <PaymentMethodCard type="visa" lastFour="4242" expiry="12/26" isSelected />\r
      <PaymentMethodCard type="mastercard" lastFour="8888" expiry="03/27" />\r
      <PaymentMethodCard type="paypal" />\r
      <PaymentMethodCard type="apple" />\r
    </div>
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <PaymentForm />
}`,...y.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const q=["Visa","Selected","PayPal","ApplePay","AllCards","FormExample","FormWithCustomOptions"];export{m as AllCards,c as ApplePay,y as FormExample,u as FormWithCustomOptions,p as PayPal,d as Selected,o as Visa,q as __namedExportsOrder,T as default};
