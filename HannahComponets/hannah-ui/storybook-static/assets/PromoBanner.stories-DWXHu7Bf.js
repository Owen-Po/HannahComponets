import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as D}from"./iframe-D75dh1fk.js";import{c as i}from"./cn-CFNvqZE-.js";import{X as T}from"./x-DIPxPrr_.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-Ce1ZTWB2.js";import"./createLucideIcon-CrPkD7AF.js";function w({title:p,subtitle:a,description:n,ctaLabel:t,ctaOnClick:u,secondaryCta:r,image:b,variant:h="hero",gradient:v,accentColor:y="#7c6aff",align:j,dismissible:k=!1,onDismiss:N,className:f}){const[S,C]=D.useState(!1);if(S)return null;const s=v?.[0]??y,x=v?.[1]??"#1a1a2e",g=j??(h==="hero"?"left":"center"),q=()=>{C(!0),N?.()};return h==="strip"?e.jsxs("div",{className:i("relative flex w-full items-center justify-center gap-3 px-4 py-2.5 text-sm font-medium text-white",f),style:{background:`linear-gradient(135deg, ${s}, ${x})`},children:[a&&e.jsx("span",{className:"hidden font-normal text-white/70 sm:inline",children:a}),e.jsx("span",{children:p}),t&&e.jsx("button",{onClick:u,className:"ml-1 rounded-full border border-white/30 px-3 py-0.5 text-xs font-semibold text-white transition-colors hover:bg-white/20",children:t}),k&&e.jsx("button",{onClick:q,"aria-label":"Dismiss",className:"absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-white/60 transition-colors hover:bg-white/10 hover:text-white",children:e.jsx(T,{size:16})})]}):h==="banner"?e.jsxs("div",{className:i("relative overflow-hidden rounded-2xl px-8 py-12 text-white md:px-16 md:py-16",g==="center"&&"text-center",f),style:{background:`linear-gradient(135deg, ${s}, ${x})`},children:[e.jsx("div",{className:"pointer-events-none absolute -top-24 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full opacity-30 blur-3xl",style:{backgroundColor:s}}),e.jsxs("div",{className:"relative z-10 mx-auto max-w-2xl space-y-4",children:[a&&e.jsx("p",{className:"text-sm font-semibold tracking-widest uppercase text-white/70",children:a}),e.jsx("h2",{className:"text-3xl font-extrabold leading-tight md:text-5xl",children:p}),n&&e.jsx("p",{className:"text-base text-white/70 md:text-lg",children:n}),(t||r)&&e.jsxs("div",{className:i("flex flex-wrap gap-3 pt-2",g==="center"&&"justify-center"),children:[t&&e.jsx("button",{onClick:u,className:"rounded-full bg-white px-6 py-3 text-sm font-bold transition-transform hover:scale-105 active:scale-95",style:{color:s},children:t}),r&&e.jsx("button",{onClick:r.onClick,className:"rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10",children:r.label})]})]})]}):e.jsxs("div",{className:i("relative flex min-h-[400px] w-full flex-col overflow-hidden md:flex-row",f),style:{background:`linear-gradient(135deg, ${s}, ${x})`},children:[e.jsxs("div",{className:i("relative z-10 flex flex-1 flex-col justify-center gap-4 px-8 py-12 text-white md:px-16 md:py-20",g==="center"&&"items-center text-center"),children:[a&&e.jsx("p",{className:"text-sm font-semibold tracking-widest uppercase text-white/70",children:a}),e.jsx("h2",{className:"text-4xl font-extrabold leading-tight md:text-6xl",children:p}),n&&e.jsx("p",{className:"max-w-lg text-base text-white/70 md:text-lg",children:n}),(t||r)&&e.jsxs("div",{className:"flex flex-wrap gap-3 pt-2",children:[t&&e.jsx("button",{onClick:u,className:"rounded-full bg-white px-8 py-3.5 text-sm font-bold shadow-lg transition-transform hover:scale-105 active:scale-95",style:{color:s},children:t}),r&&e.jsx("button",{onClick:r.onClick,className:"rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10",children:r.label})]})]}),b&&e.jsxs("div",{className:"relative flex-1",children:[e.jsx("img",{src:b,alt:"",className:"absolute inset-0 h-full w-full object-cover"}),e.jsx("div",{className:"absolute inset-0",style:{background:`linear-gradient(to right, ${s}, transparent 60%)`}})]})]})}w.__docgenInfo={description:"",methods:[],displayName:"PromoBanner",props:{title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},ctaLabel:{required:!1,tsType:{name:"string"},description:""},ctaOnClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},secondaryCta:{required:!1,tsType:{name:"signature",type:"object",raw:"{ label: string; onClick: () => void }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},description:""},image:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"hero" | "banner" | "strip"',elements:[{name:"literal",value:'"hero"'},{name:"literal",value:'"banner"'},{name:"literal",value:'"strip"'}]},description:"",defaultValue:{value:'"hero"',computed:!1}},gradient:{required:!1,tsType:{name:"tuple",raw:"[string, string]",elements:[{name:"string"},{name:"string"}]},description:""},accentColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#7c6aff"',computed:!1}},align:{required:!1,tsType:{name:"union",raw:'"left" | "center"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'}]},description:""},dismissible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const A={title:"Components/PromoBanner",component:w,parameters:{layout:"fullscreen"}},o={args:{title:"Summer Sale",subtitle:"Limited time offer",description:"Up to 60% off on selected items. Refresh your wardrobe with this season's hottest trends.",ctaLabel:"Shop Now",ctaOnClick:()=>{},image:"https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop",variant:"hero"}},l={args:{title:"Flash Sale — 48h Only",subtitle:"Don't miss out",description:"Exclusive deals on premium brands. Use code FLASH48 at checkout.",ctaLabel:"Browse Deals",ctaOnClick:()=>{},variant:"banner"}},c={args:{title:"Free shipping on orders over $50",ctaLabel:"Learn More",ctaOnClick:()=>{},variant:"strip",dismissible:!0,onDismiss:()=>{}}},d={args:{title:"New Collection",subtitle:"Spring 2026",description:"Discover our latest arrivals crafted with sustainable materials.",ctaLabel:"Shop Women",ctaOnClick:()=>{},secondaryCta:{label:"Shop Men",onClick:()=>{}},variant:"hero",image:"https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop"}},m={args:{title:"Exclusive Members Deal",subtitle:"VIP Access",description:"Get early access to our upcoming drops and member-only pricing.",ctaLabel:"Join Free",ctaOnClick:()=>{},variant:"banner",gradient:["#e44d26","#f7b733"]}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Summer Sale",
    subtitle: "Limited time offer",
    description: "Up to 60% off on selected items. Refresh your wardrobe with this season's hottest trends.",
    ctaLabel: "Shop Now",
    ctaOnClick: () => {},
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop",
    variant: "hero"
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Flash Sale — 48h Only",
    subtitle: "Don't miss out",
    description: "Exclusive deals on premium brands. Use code FLASH48 at checkout.",
    ctaLabel: "Browse Deals",
    ctaOnClick: () => {},
    variant: "banner"
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Free shipping on orders over $50",
    ctaLabel: "Learn More",
    ctaOnClick: () => {},
    variant: "strip",
    dismissible: true,
    onDismiss: () => {}
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: "New Collection",
    subtitle: "Spring 2026",
    description: "Discover our latest arrivals crafted with sustainable materials.",
    ctaLabel: "Shop Women",
    ctaOnClick: () => {},
    secondaryCta: {
      label: "Shop Men",
      onClick: () => {}
    },
    variant: "hero",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop"
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Exclusive Members Deal",
    subtitle: "VIP Access",
    description: "Get early access to our upcoming drops and member-only pricing.",
    ctaLabel: "Join Free",
    ctaOnClick: () => {},
    variant: "banner",
    gradient: ["#e44d26", "#f7b733"]
  }
}`,...m.parameters?.docs?.source}}};const P=["Hero","Banner","Strip","WithSecondary","GradientCustom"];export{l as Banner,m as GradientCustom,o as Hero,c as Strip,d as WithSecondary,P as __namedExportsOrder,A as default};
