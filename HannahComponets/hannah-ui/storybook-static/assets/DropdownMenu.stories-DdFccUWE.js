import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as t}from"./iframe-D75dh1fk.js";import{c as h}from"./cn-CFNvqZE-.js";import{P as j}from"./pencil-DHgl9sd8.js";import{c as f}from"./createLucideIcon-CrPkD7AF.js";import{F as R}from"./folder-open-BmTcKmUh.js";import{T as C}from"./trash-2-BDp7_0oV.js";import{U as _}from"./user-DbrfftVs.js";import{S as L}from"./settings-AhYoJ-1D.js";import{L as U}from"./log-out-DRdQr-Ob.js";import{S as W}from"./star-DSEYpkKH.js";import{C as u}from"./chevron-down-DABnpbVf.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-Ce1ZTWB2.js";const V=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],$=f("archive",V);const F=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],S=f("copy",F);const O=[["path",{d:"M12 2v13",key:"1km8f5"}],["path",{d:"m16 6-4-4-4 4",key:"13yo43"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}]],P=f("share",O);function D({trigger:E,items:q,align:p="end",side:k="bottom",width:s=220,className:T}){const[n,i]=t.useState(!1),y=t.useRef(null),b=t.useRef(null),[M,A]=t.useState(0);t.useEffect(()=>{s==="trigger"&&b.current&&A(b.current.offsetWidth)},[s,n]),t.useEffect(()=>{if(!n)return;function e(a){y.current&&!y.current.contains(a.target)&&i(!1)}return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[n]),t.useEffect(()=>{if(!n)return;function e(a){a.key==="Escape"&&i(!1)}return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[n]);const v=t.useCallback(()=>i(e=>!e),[]),I=s==="trigger"?M:s;return r.jsxs("div",{ref:y,className:"relative inline-flex",children:[r.jsx("div",{ref:b,onClick:v,className:"cursor-pointer",role:"button",tabIndex:0,onKeyDown:e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),v())},children:E}),n&&r.jsx("div",{role:"menu",className:h("absolute z-50",k==="bottom"?"top-full mt-1.5":"bottom-full mb-1.5",p==="start"&&"left-0",p==="center"&&"left-1/2 -translate-x-1/2",p==="end"&&"right-0","rounded-xl border border-gray-200 bg-white p-1 shadow-lg","dark:border-gray-700 dark:bg-gray-900","animate-in fade-in zoom-in-95",k==="bottom"?"origin-top":"origin-bottom","max-h-80 overflow-y-auto",T),style:{width:I},children:q.map((e,a)=>{if(e.type==="separator")return r.jsx("div",{className:"my-1 h-px bg-gray-200 dark:bg-gray-700",role:"separator"},`sep-${a}`);if(e.type==="label")return r.jsx("div",{className:"px-2.5 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500",children:e.text},`lbl-${a}`);const w=e.icon,o=e.disabled??!1,N=e.danger??!1;return r.jsxs("button",{role:"menuitem",disabled:o,onClick:()=>{!o&&e.onClick&&e.onClick(),i(!1)},className:h("flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-[13px] outline-none transition-colors","text-gray-700 dark:text-gray-200",!o&&!N&&"hover:bg-gray-100 dark:hover:bg-gray-800",!o&&N&&"hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950 dark:hover:text-red-400",o&&"cursor-not-allowed text-gray-300 dark:text-gray-600"),children:[w&&r.jsx(w,{className:h("h-4 w-4 shrink-0",o?"text-gray-300 dark:text-gray-600":"text-gray-400 dark:text-gray-500")}),r.jsx("span",{className:"flex-1 truncate",children:e.label}),e.shortcut&&r.jsx("span",{className:"ml-auto shrink-0 text-[11px] tracking-wide text-gray-400 dark:text-gray-500",children:e.shortcut})]},`item-${a}`)})})]})}D.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu",props:{trigger:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:`| {
    type?: "item";
    label: string;
    icon?: React.ElementType;
    shortcut?: string;
    onClick?: () => void;
    disabled?: boolean;
    danger?: boolean;
  }
| { type: "separator" }
| { type: "label"; text: string }`,elements:[{name:"signature",type:"object",raw:`{
  type?: "item";
  label: string;
  icon?: React.ElementType;
  shortcut?: string;
  onClick?: () => void;
  disabled?: boolean;
  danger?: boolean;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"item"',required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"icon",value:{name:"ReactElementType",raw:"React.ElementType",required:!1}},{key:"shortcut",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"danger",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:'{ type: "separator" }',signature:{properties:[{key:"type",value:{name:"literal",value:'"separator"',required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "label"; text: string }',signature:{properties:[{key:"type",value:{name:"literal",value:'"label"',required:!0}},{key:"text",value:{name:"string",required:!0}}]}}]}],raw:"DropdownItem[]"},description:""},align:{required:!1,tsType:{name:"union",raw:'"start" | "center" | "end"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'}]},description:"",defaultValue:{value:'"end"',computed:!1}},side:{required:!1,tsType:{name:"union",raw:'"bottom" | "top"',elements:[{name:"literal",value:'"bottom"'},{name:"literal",value:'"top"'}]},description:"",defaultValue:{value:'"bottom"',computed:!1}},width:{required:!1,tsType:{name:"union",raw:'number | "trigger"',elements:[{name:"number"},{name:"literal",value:'"trigger"'}]},description:"",defaultValue:{value:"220",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const se={title:"Components/DropdownMenu",component:D,parameters:{layout:"centered"}},x=[{label:"Edit",icon:j,onClick:()=>console.log("Edit")},{label:"Duplicate",icon:S,onClick:()=>console.log("Duplicate")},{type:"separator"},{label:"Share",icon:P,shortcut:"⌘S",onClick:()=>console.log("Share")},{label:"Move to",icon:R,onClick:()=>console.log("Move to")},{type:"separator"},{label:"Delete",icon:C,danger:!0,onClick:()=>console.log("Delete")}],l={args:{trigger:r.jsxs("button",{className:"inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",children:["Actions",r.jsx(u,{className:"h-4 w-4"})]}),items:x}},z=[{type:"label",text:"Signed in as"},{label:"user@email.com"},{type:"separator"},{label:"Profile",icon:_,onClick:()=>console.log("Profile")},{label:"Settings",icon:L,onClick:()=>console.log("Settings")},{type:"separator"},{label:"Sign out",icon:U,danger:!0,onClick:()=>console.log("Sign out")}],d={args:{trigger:r.jsx("div",{className:"flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white",children:"U"}),items:z}},K=[{label:"Edit",icon:j,onClick:()=>console.log("Edit")},{label:"Duplicate",icon:S,disabled:!0},{type:"separator"},{label:"Archive",icon:$,disabled:!0},{label:"Favorite",icon:W,onClick:()=>console.log("Favorite")},{type:"separator"},{label:"Delete",icon:C,danger:!0,disabled:!0}],c={args:{trigger:r.jsxs("button",{className:"inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",children:["Actions",r.jsx(u,{className:"h-4 w-4"})]}),items:K}},g={args:{trigger:r.jsxs("button",{className:"inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",children:["Actions",r.jsx(u,{className:"h-4 w-4"})]}),items:x,align:"start"}},m={args:{trigger:r.jsxs("button",{className:"inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",children:["Actions",r.jsx(u,{className:"h-4 w-4"})]}),items:x,side:"top"}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <button className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
        Actions
        <ChevronDown className="h-4 w-4" />
      </button>,
    items: defaultItems
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white">
        U
      </div>,
    items: userMenuItems
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <button className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
        Actions
        <ChevronDown className="h-4 w-4" />
      </button>,
    items: disabledItems
  }
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <button className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
        Actions
        <ChevronDown className="h-4 w-4" />
      </button>,
    items: defaultItems,
    align: "start"
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <button className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
        Actions
        <ChevronDown className="h-4 w-4" />
      </button>,
    items: defaultItems,
    side: "top"
  }
}`,...m.parameters?.docs?.source}}};const ie=["Default","UserMenu","WithDisabled","AlignStart","TopSide"];export{g as AlignStart,l as Default,m as TopSide,d as UserMenu,c as WithDisabled,ie as __namedExportsOrder,se as default};
