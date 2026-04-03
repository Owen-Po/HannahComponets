import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-Bq8VPCYT.js";import{c as u}from"./cn-BQt2Fkck.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-Ce1ZTWB2.js";const y={top:"bottom-full left-1/2 -translate-x-1/2 mb-2",bottom:"top-full left-1/2 -translate-x-1/2 mt-2",left:"right-full top-1/2 -translate-y-1/2 mr-2",right:"left-full top-1/2 -translate-y-1/2 ml-2"},v={top:"top-full left-1/2 -translate-x-1/2 border-t-[current] border-x-transparent border-b-transparent",bottom:"bottom-full left-1/2 -translate-x-1/2 border-b-[current] border-x-transparent border-t-transparent",left:"left-full top-1/2 -translate-y-1/2 border-l-[current] border-y-transparent border-r-transparent",right:"right-full top-1/2 -translate-y-1/2 border-r-[current] border-y-transparent border-l-transparent"},j={top:{dark:"border-t-gray-900 dark:border-t-gray-800",light:"border-t-white"},bottom:{dark:"border-b-gray-900 dark:border-b-gray-800",light:"border-b-white"},left:{dark:"border-l-gray-900 dark:border-l-gray-800",light:"border-l-white"},right:{dark:"border-r-gray-900 dark:border-r-gray-800",light:"border-r-white"}},t=({children:p,content:g,position:d="top",variant:c="dark",delay:m=0,className:b,arrow:h=!0,maxWidth:f=200})=>{const x=c==="dark"?"bg-gray-900 text-white dark:bg-gray-800":"bg-white text-gray-900 border border-gray-200 dark:bg-gray-100 dark:text-gray-900",T=m>0?{transitionDelay:`${m}ms`}:void 0;return e.jsxs("div",{className:"relative inline-flex group",children:[p,e.jsxs("div",{role:"tooltip",style:{maxWidth:f,...T},className:u("absolute z-50 px-2.5 py-1.5 text-xs font-medium rounded-md whitespace-normal pointer-events-none","opacity-0 invisible scale-95","transition-all duration-150 ease-in-out","group-hover:opacity-100 group-hover:visible group-hover:scale-100",y[d],x,b),children:[g,h&&e.jsx("span",{className:u("absolute w-0 h-0 border-4",v[d],j[d][c])})]})]})};t.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:'"top" | "bottom" | "left" | "right"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"top"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"dark" | "light"',elements:[{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'}]},description:"",defaultValue:{value:'"dark"',computed:!1}},delay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},arrow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},maxWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"200",computed:!1}}}};const S={title:"Components/Tooltip",component:t,parameters:{layout:"centered"}},r=({label:p="Hover me"})=>e.jsx("button",{className:"px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700",children:p}),o={render:()=>e.jsx(t,{content:"Save changes",children:e.jsx(r,{label:"Save"})})},a={render:()=>e.jsxs("div",{className:"flex items-center gap-8 p-16",children:[e.jsx(t,{content:"Top tooltip",position:"top",children:e.jsx(r,{label:"Top"})}),e.jsx(t,{content:"Bottom tooltip",position:"bottom",children:e.jsx(r,{label:"Bottom"})}),e.jsx(t,{content:"Left tooltip",position:"left",children:e.jsx(r,{label:"Left"})}),e.jsx(t,{content:"Right tooltip",position:"right",children:e.jsx(r,{label:"Right"})})]})},n={render:()=>e.jsx(t,{content:"Light variant tooltip",variant:"light",children:e.jsx(r,{})})},l={render:()=>e.jsx(t,{content:"I appear after 300ms",delay:300,children:e.jsx(r,{})})},s={render:()=>e.jsx(t,{content:e.jsxs("span",{children:[e.jsx("strong",{children:"Bold text"}),e.jsx("br",{}),"Additional info here"]}),maxWidth:250,children:e.jsx(r,{label:"Rich content"})})},i={render:()=>e.jsx(t,{content:"No arrow tooltip",arrow:!1,children:e.jsx(r,{})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Tooltip content="Save changes">
      <TriggerButton label="Save" />
    </Tooltip>
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-8 p-16">
      <Tooltip content="Top tooltip" position="top">
        <TriggerButton label="Top" />
      </Tooltip>
      <Tooltip content="Bottom tooltip" position="bottom">
        <TriggerButton label="Bottom" />
      </Tooltip>
      <Tooltip content="Left tooltip" position="left">
        <TriggerButton label="Left" />
      </Tooltip>
      <Tooltip content="Right tooltip" position="right">
        <TriggerButton label="Right" />
      </Tooltip>
    </div>
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Tooltip content="Light variant tooltip" variant="light">
      <TriggerButton />
    </Tooltip>
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Tooltip content="I appear after 300ms" delay={300}>
      <TriggerButton />
    </Tooltip>
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Tooltip content={<span>
          <strong>Bold text</strong>
          <br />
          Additional info here
        </span>} maxWidth={250}>
      <TriggerButton label="Rich content" />
    </Tooltip>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Tooltip content="No arrow tooltip" arrow={false}>
      <TriggerButton />
    </Tooltip>
}`,...i.parameters?.docs?.source}}};const q=["Default","Positions","Light","WithDelay","RichContent","NoArrow"];export{o as Default,n as Light,i as NoArrow,a as Positions,s as RichContent,l as WithDelay,q as __namedExportsOrder,S as default};
