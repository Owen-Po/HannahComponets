import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-D75dh1fk.js";import{c as r}from"./cn-CFNvqZE-.js";import{S as j}from"./star-DSEYpkKH.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-Ce1ZTWB2.js";import"./createLucideIcon-CrPkD7AF.js";const g={sm:"my-2",md:"my-4",lg:"my-8"},S={sm:"mx-2",md:"mx-4",lg:"mx-8"},D={solid:"border-solid",dashed:"border-dashed",dotted:"border-dotted"},p=({orientation:a="horizontal",variant:f="solid",color:y,spacing:u="md",className:h,children:x,...v})=>{const b=a==="vertical",t=y??"border-gray-200 dark:border-gray-700",s=D[f];return b?e.jsx("div",{role:"separator","aria-orientation":"vertical",className:r("inline-flex self-stretch",S[u],h),...v,children:e.jsx("div",{className:r("border-l h-full",s,t)})}):x?e.jsxs("div",{role:"separator","aria-orientation":"horizontal",className:r("flex items-center w-full",g[u],h),...v,children:[e.jsx("div",{className:r("flex-1 border-t",s,t)}),e.jsx("span",{className:"px-3 text-sm text-gray-500 dark:text-gray-400 shrink-0 select-none",children:x}),e.jsx("div",{className:r("flex-1 border-t",s,t)})]}):e.jsx("div",{role:"separator","aria-orientation":"horizontal",className:r("border-t w-full",s,t,g[u],h),...v})};p.displayName="Divider";p.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"solid" | "dashed" | "dotted"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"dashed"'},{name:"literal",value:'"dotted"'}]},description:"",defaultValue:{value:'"solid"',computed:!1}},color:{required:!1,tsType:{name:"string"},description:""},spacing:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}}},composes:["HTMLAttributes"]};const w={title:"Components/Divider",component:p,parameters:{layout:"centered"},decorators:[a=>e.jsx("div",{style:{width:400},children:e.jsx(a,{})})]},o={},n={name:"With Text",args:{children:"OR"}},i={name:"With Icon",render:()=>e.jsx(p,{children:e.jsx(j,{size:16})})},l={args:{variant:"dashed"}},d={args:{variant:"dotted"}},c={name:"Vertical",decorators:[a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",height:80},children:[e.jsx("span",{children:"Left"}),e.jsx(a,{}),e.jsx("span",{children:"Right"})]})],args:{orientation:"vertical"}},m={name:"Custom Color",args:{color:"border-blue-400 dark:border-blue-600",children:"Section"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "With Text",
  args: {
    children: "OR"
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "With Icon",
  render: () => <Divider>
      <Star size={16} />
    </Divider>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "dashed"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "dotted"
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Vertical",
  decorators: [Story => <div style={{
    display: "flex",
    alignItems: "center",
    height: 80
  }}>
        <span>Left</span>
        <Story />
        <span>Right</span>
      </div>],
  args: {
    orientation: "vertical"
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Custom Color",
  args: {
    color: "border-blue-400 dark:border-blue-600",
    children: "Section"
  }
}`,...m.parameters?.docs?.source}}};const k=["Default","WithText","WithIcon","Dashed","Dotted","Vertical","CustomColor"];export{m as CustomColor,l as Dashed,o as Default,d as Dotted,c as Vertical,i as WithIcon,n as WithText,k as __namedExportsOrder,w as default};
