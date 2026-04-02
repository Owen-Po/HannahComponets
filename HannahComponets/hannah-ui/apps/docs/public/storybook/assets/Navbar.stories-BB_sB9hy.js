import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as m}from"./iframe-vHIwjOwQ.js";import{c as B}from"./index-Bj1Z-dc7.js";import{c as s}from"./cn-C1oRmgnl.js";import{M as C}from"./menu-CqAEeLpO.js";import{X as I}from"./x-KLBMarr-.js";import{H as R}from"./house-BaI5cvEy.js";import{P as q}from"./package-DU7Dq9_V.js";import{C as E}from"./credit-card-ByFh7_IN.js";import{I as D}from"./info-DJRSzZyo.js";import{c as M}from"./createLucideIcon-C-Otocs2.js";import{S as T}from"./search--ED0pyHv.js";import{B as V}from"./bell-B5dtEpOB.js";import{Z as _}from"./zap-XxdpCn70.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-Ce1ZTWB2.js";const P=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],G=M("layers",P),O=B(["w-full z-50 transition-all duration-300","backdrop-blur-xl bg-white/70 dark:bg-zinc-900/70","supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-900/60"],{variants:{variant:{floating:["mx-auto max-w-6xl mt-4 rounded-2xl","shadow-lg shadow-black/[0.04] dark:shadow-black/20","border border-zinc-200/60 dark:border-zinc-700/50"],fixed:["shadow-sm shadow-black/[0.03] dark:shadow-black/20","border-b-0"],bordered:["border-b border-zinc-200 dark:border-zinc-700/60"]}},defaultVariants:{variant:"floating"}}),w=({logo:a,brandName:c,links:v=[],actions:d,variant:N="floating",sticky:A=!0,accentColor:i,className:S})=>{const[r,l]=m.useState(!1),z=m.useRef(null);m.useEffect(()=>{if(!r)return;const t=n=>{z.current&&!z.current.contains(n.target)&&l(!1)};return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[r]),m.useEffect(()=>{if(!r)return;const t=n=>{n.key==="Escape"&&l(!1)};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[r]);const y=i?{color:i}:void 0,j=i?"":"text-zinc-900 dark:text-white";return e.jsxs("nav",{ref:z,className:s(O({variant:N}),A&&"sticky top-0",S),children:[e.jsxs("div",{className:"flex h-14 items-center justify-between px-5",children:[e.jsxs("div",{className:"flex items-center gap-2.5 shrink-0",children:[a&&e.jsx("span",{className:"flex items-center",children:a}),c&&e.jsx("span",{className:"text-[15px] font-semibold tracking-tight text-zinc-900 dark:text-white",children:c})]}),v.length>0&&e.jsx("div",{className:"hidden md:flex items-center gap-1",children:v.map(t=>{const n=t.icon;return e.jsxs("a",{href:t.href,onClick:t.onClick,style:t.isActive?y:void 0,className:s("relative flex items-center gap-1.5 px-3 py-1.5 text-[13.5px] font-medium rounded-lg","transition-all duration-200","text-zinc-500 dark:text-zinc-400","hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100/70 dark:hover:bg-zinc-800/60",t.isActive&&[j,"bg-zinc-100/80 dark:bg-zinc-800/50"]),children:[n&&e.jsx(n,{className:"size-3.5"}),t.label,t.isActive&&e.jsx("span",{className:"absolute -bottom-[3px] left-1/2 -translate-x-1/2 h-[2px] w-4 rounded-full",style:i?{backgroundColor:i}:void 0,"aria-hidden":!0})]},t.href)})}),e.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[d&&e.jsx("div",{className:"hidden md:flex items-center gap-2",children:d}),e.jsx("button",{type:"button","aria-label":r?"Close menu":"Open menu",onClick:()=>l(t=>!t),className:s("md:hidden flex items-center justify-center size-8 rounded-lg","text-zinc-500 dark:text-zinc-400","hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-200"),children:e.jsxs("div",{className:"relative size-4",children:[e.jsx(C,{className:s("absolute inset-0 size-4 transition-all duration-300",r?"opacity-0 rotate-90 scale-75":"opacity-100 rotate-0 scale-100")}),e.jsx(I,{className:s("absolute inset-0 size-4 transition-all duration-300",r?"opacity-100 rotate-0 scale-100":"opacity-0 -rotate-90 scale-75")})]})})]})]}),e.jsx("div",{className:s("md:hidden overflow-hidden transition-all duration-300 ease-in-out",r?"max-h-[400px] opacity-100":"max-h-0 opacity-0"),children:e.jsxs("div",{className:"px-4 pb-4 pt-1 space-y-1",children:[v.map(t=>{const n=t.icon;return e.jsxs("a",{href:t.href,onClick:L=>{t.onClick?.(L),l(!1)},style:t.isActive?y:void 0,className:s("flex items-center gap-2.5 px-3 py-2.5 text-[14px] font-medium rounded-xl","transition-colors duration-200","text-zinc-600 dark:text-zinc-400","hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100/80 dark:hover:bg-zinc-800/60",t.isActive&&[j,"bg-zinc-100/80 dark:bg-zinc-800/50"]),children:[n&&e.jsx(n,{className:"size-4"}),t.label]},t.href)}),d&&e.jsx("div",{className:"flex items-center gap-2 pt-2 border-t border-zinc-200/60 dark:border-zinc-700/50",children:d})]})})]})};w.__docgenInfo={description:"",methods:[],displayName:"Navbar",props:{logo:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Logo element (icon, image, etc.)"},brandName:{required:!1,tsType:{name:"string"},description:"Brand name displayed next to logo"},links:{required:!1,tsType:{name:"Array",elements:[{name:"NavbarLink"}],raw:"NavbarLink[]"},description:"Navigation links rendered in the center",defaultValue:{value:"[]",computed:!1}},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Actions area (buttons, avatars, etc.) rendered on the right"},variant:{required:!1,tsType:{name:"union",raw:'"floating" | "fixed" | "bordered"',elements:[{name:"literal",value:'"floating"'},{name:"literal",value:'"fixed"'},{name:"literal",value:'"bordered"'}]},description:"Navbar style variant",defaultValue:{value:'"floating"',computed:!1}},sticky:{required:!1,tsType:{name:"boolean"},description:"Whether the navbar sticks to the top on scroll",defaultValue:{value:"true",computed:!1}},accentColor:{required:!1,tsType:{name:"string"},description:"Custom accent color for active links (any valid CSS color)"},className:{required:!1,tsType:{name:"string"},description:"Additional class names"}},composes:["VariantProps"]};const oe={title:"Components/Navbar",component:w,parameters:{layout:"padded"}},h=[{label:"Home",href:"#",icon:R,isActive:!0},{label:"Products",href:"#",icon:q},{label:"Pricing",href:"#",icon:E},{label:"About",href:"#",icon:D}],o=()=>e.jsx("div",{className:"flex items-center justify-center size-7 rounded-lg bg-zinc-900 dark:bg-white",children:e.jsx(_,{className:"size-3.5 text-white dark:text-zinc-900"})}),k=({children:a})=>e.jsx("button",{type:"button",className:"px-3.5 py-1.5 text-[13px] font-medium rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors duration-200",children:a}),H=({children:a,badge:c})=>e.jsxs("button",{type:"button",className:"relative flex items-center justify-center size-8 rounded-lg text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-200",children:[a,c&&e.jsx("span",{className:"absolute top-1 right-1 size-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-zinc-900"})]}),W=()=>e.jsx("div",{className:"size-7 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 ring-2 ring-white/80 dark:ring-zinc-800"}),p={args:{logo:e.jsx(o,{}),brandName:"Acme",links:h,actions:e.jsx(k,{children:"Get Started"}),variant:"floating"}},u={args:{logo:e.jsx(o,{}),brandName:"Acme",links:h.map(a=>({...a,icon:void 0})),variant:"fixed",actions:e.jsxs("div",{className:"flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-800/50 text-zinc-400 dark:text-zinc-500 text-[13px] w-52",children:[e.jsx(T,{className:"size-3.5 shrink-0"}),e.jsx("span",{children:"Search..."})]})}},x={args:{logo:e.jsx(o,{}),brandName:"Acme",links:h,variant:"bordered",actions:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(H,{badge:!0,children:e.jsx(V,{className:"size-4"})}),e.jsx(W,{})]})}},g={args:{logo:e.jsx("div",{className:"flex items-center justify-center size-7 rounded-lg bg-violet-600",children:e.jsx(G,{className:"size-3.5 text-white"})}),brandName:"Violet",links:[{label:"Dashboard",href:"#",isActive:!0},{label:"Analytics",href:"#"},{label:"Settings",href:"#"},{label:"Docs",href:"#"}],accentColor:"#7c3aed",variant:"floating",actions:e.jsx("button",{type:"button",className:"px-3.5 py-1.5 text-[13px] font-medium rounded-lg bg-violet-600 text-white hover:bg-violet-700 transition-colors duration-200",children:"Upgrade"})}},b={args:{logo:e.jsx(o,{}),brandName:"Acme",variant:"floating",actions:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button",className:"px-3 py-1.5 text-[13px] font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors",children:"Sign in"}),e.jsx(k,{children:"Sign up"})]})}},f={args:{logo:e.jsx(o,{}),brandName:"Acme",links:h,variant:"floating",actions:e.jsx(k,{children:"Get Started"})},decorators:[a=>e.jsx("div",{className:"dark bg-zinc-950 p-8 -m-4 min-h-[200px]",children:e.jsx(a,{})})]};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    logo: <LogoIcon />,
    brandName: "Acme",
    links: defaultLinks,
    actions: <ActionButton>Get Started</ActionButton>,
    variant: "floating"
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    logo: <LogoIcon />,
    brandName: "Acme",
    links: defaultLinks.map(l => ({
      ...l,
      icon: undefined
    })),
    variant: "fixed",
    actions: <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-800/50 text-zinc-400 dark:text-zinc-500 text-[13px] w-52">
        <Search className="size-3.5 shrink-0" />
        <span>Search...</span>
      </div>
  }
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    logo: <LogoIcon />,
    brandName: "Acme",
    links: defaultLinks,
    variant: "bordered",
    actions: <div className="flex items-center gap-1">
        <IconButton badge>
          <Bell className="size-4" />
        </IconButton>
        <AvatarCircle />
      </div>
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    logo: <div className="flex items-center justify-center size-7 rounded-lg bg-violet-600">
        <Layers className="size-3.5 text-white" />
      </div>,
    brandName: "Violet",
    links: [{
      label: "Dashboard",
      href: "#",
      isActive: true
    }, {
      label: "Analytics",
      href: "#"
    }, {
      label: "Settings",
      href: "#"
    }, {
      label: "Docs",
      href: "#"
    }],
    accentColor: "#7c3aed",
    variant: "floating",
    actions: <button type="button" className="px-3.5 py-1.5 text-[13px] font-medium rounded-lg bg-violet-600 text-white hover:bg-violet-700 transition-colors duration-200">
        Upgrade
      </button>
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    logo: <LogoIcon />,
    brandName: "Acme",
    variant: "floating",
    actions: <div className="flex items-center gap-2">
        <button type="button" className="px-3 py-1.5 text-[13px] font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
          Sign in
        </button>
        <ActionButton>Sign up</ActionButton>
      </div>
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    logo: <LogoIcon />,
    brandName: "Acme",
    links: defaultLinks,
    variant: "floating",
    actions: <ActionButton>Get Started</ActionButton>
  },
  decorators: [Story => <div className="dark bg-zinc-950 p-8 -m-4 min-h-[200px]">
        <Story />
      </div>]
}`,...f.parameters?.docs?.source}}};const ce=["Default","Fixed","WithAvatar","Branded","Minimal","Dark"];export{g as Branded,f as Dark,p as Default,u as Fixed,b as Minimal,x as WithAvatar,ce as __namedExportsOrder,oe as default};
