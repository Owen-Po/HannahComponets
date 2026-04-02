import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as j}from"./iframe-vHIwjOwQ.js";import{c as p}from"./index-Bj1Z-dc7.js";import{c as i}from"./cn-C1oRmgnl.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-Ce1ZTWB2.js";const w=p(["rounded-full p-0.5 transition-all duration-200","focus:outline-none focus:ring-2 focus:ring-[#CCFF00] focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"],{variants:{size:{sm:"w-10 h-5",md:"w-12 h-6",lg:"w-14 h-7"},checked:{true:"bg-[#CCFF00] shadow-lg shadow-[#CCFF00]/30",false:"bg-gray-300 border border-gray-400 dark:bg-[#2a2a2a] dark:border-[#2a2a2a]"}},defaultVariants:{size:"md",checked:!1}}),N=p("block rounded-full transition-transform duration-200",{variants:{size:{sm:"w-4 h-4",md:"w-5 h-5",lg:"w-6 h-6"},checked:{true:"bg-[#0a0a0a]",false:"bg-white dark:bg-[#a0a0a0]"}},defaultVariants:{size:"md",checked:!1}}),T={sm:"translate-x-5",md:"translate-x-6",lg:"translate-x-7"},a=({checked:m,defaultChecked:b=!1,onChange:h,size:c="md",disabled:r=!1,label:g,className:x})=>{const[k,y]=j.useState(b),u=m!==void 0,s=u?m:k,v=()=>{if(r)return;const f=!s;u||y(f),h?.(f)};return e.jsxs("div",{className:i("inline-flex items-center gap-3",x),children:[e.jsx("button",{type:"button",role:"switch","aria-checked":s,onClick:v,disabled:r,className:i(w({size:c,checked:s}),r&&"opacity-50 cursor-not-allowed",!r&&"cursor-pointer"),children:e.jsx("span",{className:i(N({size:c,checked:s}),s?T[c??"md"]:"translate-x-0.5")})}),g&&e.jsx("span",{className:"font-medium text-gray-800 dark:text-white text-sm",children:g})]})};a.displayName="Toggle";a.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{checked:{required:!1,tsType:{name:"boolean"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},size:{defaultValue:{value:'"md"',computed:!1},required:!1}},composes:["Omit"]};const q={title:"Components/Toggle",component:a,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"},label:{control:"text"}}},t={args:{label:"Enable feature"}},d={args:{checked:!0,label:"Enabled"}},l={render:()=>e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsx(a,{size:"sm",label:"Small"}),e.jsx(a,{size:"md",label:"Medium"}),e.jsx(a,{size:"lg",label:"Large"})]})},n={render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsx(a,{checked:!1,label:"Off"}),e.jsx(a,{checked:!0,label:"On"}),e.jsx(a,{checked:!1,disabled:!0,label:"Disabled Off"}),e.jsx(a,{checked:!0,disabled:!0,label:"Disabled On"})]})},o={render:()=>e.jsxs("div",{className:"space-y-4 max-w-md",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-[#2a2a2a]",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"Dark Mode"}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Switch between themes"})]}),e.jsx(a,{size:"md"})]}),e.jsxs("div",{className:"flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-[#2a2a2a]",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"Notifications"}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Enable push notifications"})]}),e.jsx(a,{size:"md",defaultChecked:!0})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Enable feature"
  }
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    label: "Enabled"
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-8">
      <Toggle size="sm" label="Small" />
      <Toggle size="md" label="Medium" />
      <Toggle size="lg" label="Large" />
    </div>
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-6">
      <Toggle checked={false} label="Off" />
      <Toggle checked={true} label="On" />
      <Toggle checked={false} disabled label="Disabled Off" />
      <Toggle checked={true} disabled label="Disabled On" />
    </div>
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-md">
      <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-[#2a2a2a]">
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white">Dark Mode</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">Switch between themes</p>
        </div>
        <Toggle size="md" />
      </div>
      <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-[#2a2a2a]">
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white">Notifications</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">Enable push notifications</p>
        </div>
        <Toggle size="md" defaultChecked />
      </div>
    </div>
}`,...o.parameters?.docs?.source}}};const F=["Default","Checked","Sizes","States","UseCases"];export{d as Checked,t as Default,l as Sizes,n as States,o as UseCases,F as __namedExportsOrder,q as default};
