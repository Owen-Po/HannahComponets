import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as w}from"./iframe-Bq8VPCYT.js";import{c as n}from"./cn-BQt2Fkck.js";import{H as f}from"./house-iiKrECw4.js";import{S as h}from"./search-j_5FbvxU.js";import{c as j}from"./createLucideIcon-E9JdFZrH.js";import{C as x}from"./calendar-DjAt9xN5.js";import{S as y}from"./settings-UKe4XZUN.js";import{B as N}from"./bell-BZcJ0bC_.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-Ce1ZTWB2.js";const C=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],S=j("mail",C),D={sm:{icon:18,button:"h-9 w-9",gap:"gap-1",padding:"px-2 py-1.5"},md:{icon:22,button:"h-11 w-11",gap:"gap-1.5",padding:"px-3 py-2"},lg:{icon:26,button:"h-13 w-13",gap:"gap-2",padding:"px-4 py-2.5"}};function v({items:e,position:s="bottom",accentColor:t="#7c6aff",size:r="md",className:g}){const o=D[r];return a.jsx("div",{className:n("fixed left-1/2 z-50 -translate-x-1/2",s==="bottom"?"bottom-4":"top-4",g),children:a.jsx("div",{className:n("flex items-center rounded-2xl border","border-white/15 bg-black/50 shadow-2xl shadow-black/30","backdrop-blur-xl backdrop-saturate-150","dark:border-white/10 dark:bg-white/10",o.gap,o.padding),children:e.map((i,k)=>i.type==="separator"?a.jsx("div",{className:"mx-1 h-6 w-px shrink-0 bg-white/20"},`sep-${k}`):a.jsx(I,{item:i,size:o,accentColor:t,tooltipPosition:s==="bottom"?"top":"bottom"},i.id))})})}function I({item:e,size:s,accentColor:t,tooltipPosition:r}){const[g,o]=w.useState(!1),i=e.icon;return a.jsxs("div",{className:"relative flex flex-col items-center",onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:[a.jsxs("div",{className:n("pointer-events-none absolute whitespace-nowrap rounded-lg px-2.5 py-1","bg-gray-900 text-xs font-medium text-white shadow-lg","dark:bg-white dark:text-gray-900","transition-all duration-200",r==="top"?"bottom-full mb-2.5":"top-full mt-2.5",g?"translate-y-0 scale-100 opacity-100":r==="top"?"translate-y-1 scale-95 opacity-0":"-translate-y-1 scale-95 opacity-0"),children:[e.label,a.jsx("div",{className:n("absolute left-1/2 h-2 w-2 -translate-x-1/2 rotate-45","bg-gray-900 dark:bg-white",r==="top"?"top-full -mt-1":"bottom-full -mb-1")})]}),a.jsxs("button",{type:"button",onClick:e.onClick,className:n("relative flex items-center justify-center rounded-xl","text-white/80 transition-transform duration-200 ease-out","hover:scale-110 hover:text-white","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",s.button),style:e.isActive?{backgroundColor:t+"30",color:t}:void 0,"aria-label":e.label,children:[a.jsx(i,{size:s.icon,strokeWidth:1.8}),e.isActive&&a.jsx("span",{className:"absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full",style:{backgroundColor:t}}),e.badge!=null&&e.badge>0&&a.jsx("span",{className:n("absolute -right-1 -top-1 flex items-center justify-center","min-w-[18px] rounded-full px-1 py-0.5","text-[10px] font-bold leading-none text-white"),style:{backgroundColor:t},children:e.badge>99?"99+":e.badge})]})]})}v.__docgenInfo={description:"",methods:[],displayName:"Dock",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"DockActionItem | DockSeparator",elements:[{name:"DockActionItem"},{name:"DockSeparator"}]}],raw:"DockItem[]"},description:""},position:{required:!1,tsType:{name:"union",raw:'"bottom" | "top"',elements:[{name:"literal",value:'"bottom"'},{name:"literal",value:'"top"'}]},description:"",defaultValue:{value:'"bottom"',computed:!1}},accentColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#7c6aff"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const W={title:"Components/Dock",component:v,parameters:{layout:"fullscreen"}},b=[{id:"home",icon:f,label:"Home"},{id:"search",icon:h,label:"Search"},{id:"mail",icon:S,label:"Mail",badge:3},{id:"calendar",icon:x,label:"Calendar"},{id:"settings",icon:y,label:"Settings"}],l={args:{items:b}},c={args:{items:b,position:"top"}},d={args:{items:[{id:"home",icon:f,label:"Home"},{id:"search",icon:h,label:"Search"},{type:"separator"},{id:"mail",icon:S,label:"Mail",badge:3},{id:"calendar",icon:x,label:"Calendar"},{id:"bell",icon:N,label:"Notifications",badge:12},{type:"separator"},{id:"settings",icon:y,label:"Settings"}]}},m={args:{items:b,size:"sm"}},p={args:{items:b,size:"lg"}},u={args:{items:[{id:"home",icon:f,label:"Home",isActive:!0},{id:"search",icon:h,label:"Search"},{id:"mail",icon:S,label:"Mail",badge:3},{id:"calendar",icon:x,label:"Calendar"},{id:"settings",icon:y,label:"Settings"}]}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    position: "top"
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "home",
      icon: Home,
      label: "Home"
    }, {
      id: "search",
      icon: Search,
      label: "Search"
    }, {
      type: "separator"
    }, {
      id: "mail",
      icon: Mail,
      label: "Mail",
      badge: 3
    }, {
      id: "calendar",
      icon: Calendar,
      label: "Calendar"
    }, {
      id: "bell",
      icon: Bell,
      label: "Notifications",
      badge: 12
    }, {
      type: "separator"
    }, {
      id: "settings",
      icon: Settings,
      label: "Settings"
    }] as DockItem[]
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    size: "sm"
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    size: "lg"
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "home",
      icon: Home,
      label: "Home",
      isActive: true
    }, {
      id: "search",
      icon: Search,
      label: "Search"
    }, {
      id: "mail",
      icon: Mail,
      label: "Mail",
      badge: 3
    }, {
      id: "calendar",
      icon: Calendar,
      label: "Calendar"
    }, {
      id: "settings",
      icon: Settings,
      label: "Settings"
    }]
  }
}`,...u.parameters?.docs?.source}}};const O=["Default","TopPosition","WithSeparators","Small","Large","ActiveState"];export{u as ActiveState,l as Default,p as Large,m as Small,c as TopPosition,d as WithSeparators,O as __namedExportsOrder,W as default};
