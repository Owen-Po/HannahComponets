import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as v}from"./iframe-vHIwjOwQ.js";import{c as x}from"./cn-C1oRmgnl.js";import{T as D}from"./tag-C8SW0jaZ.js";import{L as F}from"./loader-circle-C1dUG3Ou.js";import{c as _}from"./createLucideIcon-C-Otocs2.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-Ce1ZTWB2.js";const $=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],z=_("lock",$);function b({subtotal:r,shipping:s,tax:a,discount:n,total:j,currency:T="$",items:m,ctaLabel:S="Checkout",onCheckout:N,loading:g=!1,promoCode:t,accentColor:h="#7c6aff",freeShippingLabel:q="Free",subtotalLabel:C="Subtotal",shippingLabel:L="Shipping",taxLabel:w="Tax",discountLabel:k="Discount",totalLabel:V="Total",className:A}){const o=f=>`${T}${f.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}`,y=s===void 0||s===0;return e.jsxs("div",{className:x("w-full max-w-sm rounded-2xl border border-neutral-800 bg-neutral-950 p-6",A),children:[m!==void 0&&e.jsxs("h3",{className:"mb-4 text-base font-semibold text-neutral-100",children:["Order Summary",e.jsxs("span",{className:"ml-2 text-sm font-normal text-neutral-500",children:["(",m," ",m===1?"item":"items",")"]})]}),e.jsxs("div",{className:"flex flex-col gap-3 text-sm",children:[e.jsx(l,{label:C,value:o(r)}),e.jsx(l,{label:L,value:y?q:o(s),valueClassName:y?"text-emerald-400":void 0}),a!==void 0&&e.jsx(l,{label:w,value:o(a)}),n!==void 0&&n>0&&e.jsx(l,{label:k,value:`-${o(n)}`,valueClassName:"text-emerald-400"})]}),t&&e.jsxs("div",{className:"mt-4 flex gap-2",children:[e.jsxs("div",{className:"relative flex-1",children:[e.jsx(D,{size:14,className:"absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"}),e.jsx("input",{type:"text",value:t.value,onChange:f=>t.onChange(f.target.value),placeholder:t.placeholder??"Promo code",disabled:t.applied,className:x("h-9 w-full rounded-lg border border-neutral-700 bg-neutral-900 pl-9 pr-3 text-sm text-neutral-100 placeholder:text-neutral-500 outline-none transition-colors focus:border-neutral-500",t.applied&&"border-emerald-700 bg-emerald-950/30 text-emerald-300")})]}),e.jsx("button",{type:"button",onClick:t.onApply,disabled:t.applied||!t.value,className:"h-9 shrink-0 rounded-lg px-3 text-sm font-medium text-white transition-opacity hover:opacity-80 disabled:opacity-40",style:{backgroundColor:h},children:t.applied?"Applied":t.applyLabel??"Apply"})]}),e.jsxs("div",{className:"mt-4 flex items-center justify-between border-t border-neutral-800 pt-4",children:[e.jsx("span",{className:"text-base font-semibold text-neutral-100",children:V}),e.jsx("span",{className:"text-lg font-bold text-neutral-100",children:o(j)})]}),e.jsx("button",{type:"button",onClick:N,disabled:g,className:"mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60",style:{backgroundColor:h},children:g?e.jsx(F,{size:18,className:"animate-spin"}):S}),e.jsxs("p",{className:"mt-3 flex items-center justify-center gap-1.5 text-xs text-neutral-500",children:[e.jsx(z,{size:12}),"Secure checkout"]})]})}function l({label:r,value:s,valueClassName:a}){return e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-neutral-400",children:r}),e.jsx("span",{className:x("font-medium text-neutral-200",a),children:s})]})}b.__docgenInfo={description:"",methods:[],displayName:"CartSummary",props:{subtotal:{required:!0,tsType:{name:"number"},description:""},shipping:{required:!1,tsType:{name:"number"},description:""},tax:{required:!1,tsType:{name:"number"},description:""},discount:{required:!1,tsType:{name:"number"},description:""},total:{required:!0,tsType:{name:"number"},description:""},currency:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"$"',computed:!1}},items:{required:!1,tsType:{name:"number"},description:""},ctaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Checkout"',computed:!1}},onCheckout:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},promoCode:{required:!1,tsType:{name:"CartSummaryPromoCode"},description:""},accentColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#7c6aff"',computed:!1}},freeShippingLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Free"',computed:!1}},subtotalLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Subtotal"',computed:!1}},shippingLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Shipping"',computed:!1}},taxLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Tax"',computed:!1}},discountLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Discount"',computed:!1}},totalLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Total"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const G={title:"Components/CartSummary",component:b,parameters:{layout:"centered",docs:{description:{component:"Order summary card showing subtotal, shipping, tax, discount, total, optional promo code input, and checkout CTA."}}},argTypes:{subtotal:{control:"number"},shipping:{control:"number"},tax:{control:"number"},discount:{control:"number"},total:{control:"number"},items:{control:"number"},loading:{control:"boolean"},accentColor:{control:"color"},ctaLabel:{control:"text"}}},i={args:{subtotal:299,shipping:9.99,tax:25,total:333.99,items:3}},u={render:()=>{const[r,s]=v.useState(""),[a,n]=v.useState(!1);return e.jsx(b,{subtotal:299,shipping:9.99,tax:25,total:a?303.99:333.99,discount:a?30:void 0,items:3,promoCode:{value:r,onChange:s,onApply:()=>n(!0),applied:a}})}},c={args:{subtotal:299,shipping:0,tax:25,total:324,items:3}},d={args:{subtotal:299,shipping:9.99,tax:25,discount:50,total:283.99,items:3}},p={args:{subtotal:299,shipping:9.99,tax:25,total:333.99,items:3,loading:!0}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    subtotal: 299.0,
    shipping: 9.99,
    tax: 25.0,
    total: 333.99,
    items: 3
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [code, setCode] = useState("");
    const [applied, setApplied] = useState(false);
    return <CartSummary subtotal={299.0} shipping={9.99} tax={25.0} total={applied ? 303.99 : 333.99} discount={applied ? 30 : undefined} items={3} promoCode={{
      value: code,
      onChange: setCode,
      onApply: () => setApplied(true),
      applied
    }} />;
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    subtotal: 299.0,
    shipping: 0,
    tax: 25.0,
    total: 324.0,
    items: 3
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    subtotal: 299.0,
    shipping: 9.99,
    tax: 25.0,
    discount: 50.0,
    total: 283.99,
    items: 3
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    subtotal: 299.0,
    shipping: 9.99,
    tax: 25.0,
    total: 333.99,
    items: 3,
    loading: true
  }
}`,...p.parameters?.docs?.source}}};const H=["Default","WithPromo","FreeShipping","WithDiscount","Loading"];export{i as Default,c as FreeShipping,p as Loading,d as WithDiscount,u as WithPromo,H as __namedExportsOrder,G as default};
