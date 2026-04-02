import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-vHIwjOwQ.js";import{c as v}from"./index-Bj1Z-dc7.js";import{c as x}from"./cn-C1oRmgnl.js";import{X as b}from"./x-KLBMarr-.js";import{S as f}from"./star-BJfEYQjY.js";import{Z as C}from"./zap-XxdpCn70.js";import{T as j}from"./tag-C8SW0jaZ.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-Ce1ZTWB2.js";import"./createLucideIcon-C-Otocs2.js";const N=v(["inline-flex items-center gap-2 rounded-full font-medium transition-all duration-200","select-none"],{variants:{variant:{default:"bg-gray-200 text-gray-800 border border-gray-300 dark:bg-[#2a2a2a] dark:text-white dark:border-[#2a2a2a]",neon:"bg-[#CCFF00]/10 text-[#CCFF00] border border-[#CCFF00]/30",purple:"bg-[#1a0f2e]/60 text-[#CCFF00] border border-[#1a0f2e]",primary:"bg-blue-100 text-blue-700 border border-blue-200 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-800",success:"bg-emerald-100 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800",warning:"bg-amber-100 text-amber-700 border border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800",danger:"bg-red-100 text-red-700 border border-red-200 dark:bg-red-950/60 dark:text-red-300 dark:border-red-800"},size:{sm:"px-2 py-0.5 text-xs",md:"px-3 py-1.5 text-sm",lg:"px-4 py-2 text-base"}},defaultVariants:{variant:"default",size:"md"}}),r=({variant:p,size:c,children:m,onRemove:l,removeAriaLabel:u="Eliminar",className:h,...g})=>e.jsxs("span",{className:x(N({variant:p,size:c,className:h})),...g,children:[m,l&&e.jsx("button",{onClick:l,className:"hover:bg-black/20 dark:hover:bg-white/10 rounded-full p-0.5 transition-colors duration-150","aria-label":u,children:e.jsx(b,{className:"w-3 h-3"})})]});r.displayName="Chip";r.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},removeAriaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Eliminar"',computed:!1}}},composes:["Omit","VariantProps"]};const E={title:"Components/Chip",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","neon","purple","primary","success","warning","danger"]},size:{control:"select",options:["sm","md","lg"]}}},a={args:{children:"Default Chip",variant:"default"}},n={args:{children:"Neon Chip",variant:"neon"}},s={args:{children:"Purple Chip",variant:"purple"}},i={args:{children:"Removable",variant:"neon",onRemove:()=>{}}},t={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsxs(r,{variant:"neon",children:[e.jsx(f,{className:"w-3 h-3"}),"Featured"]}),e.jsxs(r,{variant:"purple",children:[e.jsx(C,{className:"w-3 h-3"}),"Premium"]}),e.jsxs(r,{variant:"default",children:[e.jsx(j,{className:"w-3 h-3"}),"Tagged"]})]})},o={render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(r,{variant:"neon",size:"sm",children:"Small"}),e.jsx(r,{variant:"neon",size:"md",children:"Medium"}),e.jsx(r,{variant:"neon",size:"lg",children:"Large"})]})},d={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(r,{variant:"default",children:"Default"}),e.jsx(r,{variant:"neon",children:"Neon"}),e.jsx(r,{variant:"purple",children:"Purple"}),e.jsx(r,{variant:"primary",children:"Primary"}),e.jsx(r,{variant:"success",children:"Success"}),e.jsx(r,{variant:"warning",children:"Warning"}),e.jsx(r,{variant:"danger",children:"Danger"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Default Chip",
    variant: "default"
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Neon Chip",
    variant: "neon"
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Purple Chip",
    variant: "purple"
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Removable",
    variant: "neon",
    onRemove: () => {}
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3">
      <Chip variant="neon"><Star className="w-3 h-3" />Featured</Chip>
      <Chip variant="purple"><Zap className="w-3 h-3" />Premium</Chip>
      <Chip variant="default"><Tag className="w-3 h-3" />Tagged</Chip>
    </div>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <Chip variant="neon" size="sm">Small</Chip>
      <Chip variant="neon" size="md">Medium</Chip>
      <Chip variant="neon" size="lg">Large</Chip>
    </div>
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3">
      <Chip variant="default">Default</Chip>
      <Chip variant="neon">Neon</Chip>
      <Chip variant="purple">Purple</Chip>
      <Chip variant="primary">Primary</Chip>
      <Chip variant="success">Success</Chip>
      <Chip variant="warning">Warning</Chip>
      <Chip variant="danger">Danger</Chip>
    </div>
}`,...d.parameters?.docs?.source}}};const W=["Default","Neon","Purple","Removable","WithIcons","Sizes","AllVariants"];export{d as AllVariants,a as Default,n as Neon,s as Purple,i as Removable,o as Sizes,t as WithIcons,W as __namedExportsOrder,E as default};
