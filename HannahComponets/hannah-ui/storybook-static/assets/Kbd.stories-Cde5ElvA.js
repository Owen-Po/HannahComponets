import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-D75dh1fk.js";import{c as p}from"./cn-CFNvqZE-.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-Ce1ZTWB2.js";const x={sm:"min-w-5 h-5 px-1 text-[11px]",md:"min-w-6 h-6 px-1.5 text-xs"},a=({size:l="md",variant:m="default",className:i,children:c,...o})=>e.jsx("kbd",{className:p("inline-flex items-center justify-center rounded-md font-mono font-medium select-none shrink-0",x[l],m==="default"&&["bg-gray-100 text-gray-700 border border-gray-300 border-b-2","shadow-[0_1px_0_1px_rgba(0,0,0,0.04)_inset]","dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:border-b-gray-700"],m==="outline"&&["text-gray-600 border border-gray-300","dark:text-gray-400 dark:border-gray-600"],i),...o,children:c});a.displayName="Kbd";a.__docgenInfo={description:"",methods:[],displayName:"Kbd",props:{size:{required:!1,tsType:{name:"union",raw:'"sm" | "md"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"default" | "outline"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"outline"'}]},description:"",defaultValue:{value:'"default"',computed:!1}}},composes:["HTMLAttributes"]};const y={title:"Components/Kbd",component:a,parameters:{layout:"centered"}},s={args:{children:"K"}},r={name:"Combination",render:()=>e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(a,{children:"⌘"}),e.jsx(a,{children:"K"})]})},n={name:"Sizes",render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(a,{size:"sm",children:"sm"}),e.jsx(a,{size:"md",children:"md"})]})},t={name:"Outline",args:{variant:"outline",children:"Esc"}},d={name:"Common Shortcuts",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(a,{children:"Ctrl"}),e.jsx("span",{className:"text-gray-400",children:"+"}),e.jsx(a,{children:"C"}),e.jsx("span",{className:"ml-2 text-sm text-gray-500",children:"Copy"})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(a,{children:"Ctrl"}),e.jsx("span",{className:"text-gray-400",children:"+"}),e.jsx(a,{children:"V"}),e.jsx("span",{className:"ml-2 text-sm text-gray-500",children:"Paste"})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(a,{children:"⌘"}),e.jsx("span",{className:"text-gray-400",children:"+"}),e.jsx(a,{children:"Shift"}),e.jsx("span",{className:"text-gray-400",children:"+"}),e.jsx(a,{children:"P"}),e.jsx("span",{className:"ml-2 text-sm text-gray-500",children:"Command Palette"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: "K"
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Combination",
  render: () => <div className="flex items-center gap-1">
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </div>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Sizes",
  render: () => <div className="flex items-center gap-3">
      <Kbd size="sm">sm</Kbd>
      <Kbd size="md">md</Kbd>
    </div>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Outline",
  args: {
    variant: "outline",
    children: "Esc"
  }
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Common Shortcuts",
  render: () => <div className="flex flex-col gap-3">
      <div className="flex items-center gap-1">
        <Kbd>Ctrl</Kbd>
        <span className="text-gray-400">+</span>
        <Kbd>C</Kbd>
        <span className="ml-2 text-sm text-gray-500">Copy</span>
      </div>
      <div className="flex items-center gap-1">
        <Kbd>Ctrl</Kbd>
        <span className="text-gray-400">+</span>
        <Kbd>V</Kbd>
        <span className="ml-2 text-sm text-gray-500">Paste</span>
      </div>
      <div className="flex items-center gap-1">
        <Kbd>⌘</Kbd>
        <span className="text-gray-400">+</span>
        <Kbd>Shift</Kbd>
        <span className="text-gray-400">+</span>
        <Kbd>P</Kbd>
        <span className="ml-2 text-sm text-gray-500">Command Palette</span>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};const K=["Default","Combination","Sizes","Outline","CommonShortcuts"];export{r as Combination,d as CommonShortcuts,s as Default,t as Outline,n as Sizes,K as __namedExportsOrder,y as default};
