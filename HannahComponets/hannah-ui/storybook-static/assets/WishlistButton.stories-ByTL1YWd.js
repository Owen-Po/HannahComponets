import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as h}from"./iframe-vHIwjOwQ.js";import{c as a}from"./cn-C1oRmgnl.js";import{H as W}from"./heart-CHQ_0IPR.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-Ce1ZTWB2.js";import"./createLucideIcon-C-Otocs2.js";const I={sm:{icon:16,circle:"h-8 w-8",text:"text-xs"},md:{icon:20,circle:"h-10 w-10",text:"text-sm"},lg:{icon:26,circle:"h-12 w-12",text:"text-base"}},f=({isWishlisted:s,onToggle:t,size:u="md",variant:p="default",color:v="#ef4444",showCount:x,label:j,className:b})=>{const[w,y]=h.useState(!1),g=I[u],C=h.useCallback(()=>{y(!0),t(),setTimeout(()=>y(!1),300)},[t]),N=j??(s?"Remove from wishlist":"Add to wishlist"),k=e.jsx(W,{size:g.icon,fill:s?v:"none",stroke:s?v:"currentColor",className:a("transition-transform duration-300 ease-out",w&&"animate-[wishlist-pop_0.3s_ease-out]",!s&&"text-gray-500 dark:text-gray-400")}),z=a("inline-flex items-center gap-1.5 cursor-pointer select-none transition-all duration-150",p==="default"&&"p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800",p==="circle"&&a("items-center justify-center rounded-full bg-white dark:bg-gray-800","shadow-md hover:shadow-lg",g.circle),p==="ghost"&&"p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-100 dark:hover:bg-gray-800",b);return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        @keyframes wishlist-pop {
          0%   { transform: scale(1); }
          50%  { transform: scale(1.3); }
          100% { transform: scale(1); }
        }
      `}),e.jsxs("button",{type:"button","aria-label":N,onClick:C,className:z,children:[k,x!==void 0&&e.jsx("span",{className:a("font-medium text-gray-600 dark:text-gray-300",g.text),children:x})]})]})};f.__docgenInfo={description:"",methods:[],displayName:"WishlistButton",props:{isWishlisted:{required:!0,tsType:{name:"boolean"},description:""},onToggle:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"default" | "circle" | "ghost"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"circle"'},{name:"literal",value:'"ghost"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#ef4444"',computed:!1}},showCount:{required:!1,tsType:{name:"number"},description:""},label:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const V={title:"Components/WishlistButton",component:f,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","md","lg"]},variant:{control:"select",options:["default","circle","ghost"]}}},r=s=>{const[t,u]=h.useState(s.isWishlisted??!1);return e.jsx(f,{isWishlisted:t,onToggle:()=>u(!t),...s})},o={render:()=>e.jsx(r,{})},n={render:()=>e.jsx(r,{isWishlisted:!0})},i={render:()=>e.jsx(r,{variant:"circle"})},c={render:()=>e.jsxs("div",{className:"group relative w-48 h-32 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center",children:[e.jsx("span",{className:"text-sm text-gray-500",children:"Hover me"}),e.jsx("div",{className:"absolute top-2 right-2",children:e.jsx(r,{variant:"ghost"})})]})},l={render:()=>e.jsx(r,{showCount:24})},d={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{size:"sm"}),e.jsx(r,{size:"md"}),e.jsx(r,{size:"lg"})]})},m={render:()=>e.jsx(r,{color:"#ec4899",isWishlisted:!0})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Interactive />
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Interactive isWishlisted />
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Interactive variant="circle" />
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="group relative w-48 h-32 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
      <span className="text-sm text-gray-500">Hover me</span>
      <div className="absolute top-2 right-2">
        <Interactive variant="ghost" />
      </div>
    </div>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Interactive showCount={24} />
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Interactive size="sm" />
      <Interactive size="md" />
      <Interactive size="lg" />
    </div>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Interactive color="#ec4899" isWishlisted />
}`,...m.parameters?.docs?.source}}};const A=["Default","Wishlisted","Circle","Ghost","WithCount","Sizes","CustomColor"];export{i as Circle,m as CustomColor,o as Default,c as Ghost,d as Sizes,n as Wishlisted,l as WithCount,A as __namedExportsOrder,V as default};
