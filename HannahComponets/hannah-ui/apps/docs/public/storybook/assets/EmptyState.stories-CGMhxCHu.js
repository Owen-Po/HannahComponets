import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as x}from"./iframe-Bq8VPCYT.js";import{c as a}from"./cn-BQt2Fkck.js";import{c as h}from"./createLucideIcon-E9JdFZrH.js";import{F as q}from"./folder-plus-CPMCb37c.js";import{B as T}from"./bell-BZcJ0bC_.js";import{S as A}from"./search-j_5FbvxU.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-Ce1ZTWB2.js";const z=[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83",key:"1bzlo9"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21",key:"1q0aeu"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15",key:"5mozeu"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",key:"mmje98"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}]],I=h("image-off",z);const E=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]],b=h("inbox",E),_={sm:{wrapper:"gap-2 py-6 px-4",iconCircle:"h-10 w-10",iconSize:"h-5 w-5",title:"text-sm font-semibold",description:"text-xs",button:"text-xs px-3 py-1.5",secondary:"text-xs"},md:{wrapper:"gap-3 py-10 px-6",iconCircle:"h-14 w-14",iconSize:"h-7 w-7",title:"text-base font-semibold",description:"text-sm",button:"text-sm px-4 py-2",secondary:"text-sm"},lg:{wrapper:"gap-4 py-14 px-8",iconCircle:"h-18 w-18",iconSize:"h-9 w-9",title:"text-lg font-semibold",description:"text-base",button:"text-base px-5 py-2.5",secondary:"text-base"}},k=({icon:N,title:C,description:p,action:o,secondaryAction:r,accentColor:s="#7c6aff",size:w="md",variant:u="default",className:f})=>{const[v,j]=x.useState(!1),t=_[w];x.useEffect(()=>{const S=requestAnimationFrame(()=>j(!0));return()=>cancelAnimationFrame(S)},[]);const g=o?.icon,y=e.jsxs("div",{className:a("flex flex-col items-center justify-center text-center transition-all duration-500 ease-out",v?"opacity-100 scale-100":"opacity-0 scale-95",t.wrapper,f),children:[u!=="minimal"&&e.jsx("div",{className:a("flex items-center justify-center rounded-full shrink-0",t.iconCircle),style:{backgroundColor:`${s}15`},children:N??e.jsx(b,{className:t.iconSize,style:{color:s}})}),e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx("h3",{className:a(t.title,"text-gray-900 dark:text-gray-100"),children:C}),p&&e.jsx("p",{className:a(t.description,"max-w-xs text-gray-500 dark:text-gray-400"),children:p})]}),(o||r)&&e.jsxs("div",{className:"flex flex-col items-center gap-2 mt-1",children:[o&&e.jsxs("button",{type:"button",onClick:o.onClick,className:a(t.button,"inline-flex items-center gap-1.5 rounded-lg font-medium text-white shadow-sm transition-colors hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer"),style:{backgroundColor:s,outlineColor:s},children:[g&&e.jsx(g,{className:"h-4 w-4"}),o.label]}),r&&e.jsx("button",{type:"button",onClick:r.onClick,className:a(t.secondary,"text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 underline underline-offset-2 transition-colors cursor-pointer"),children:r.label})]})]});return u==="card"?e.jsx("div",{className:a("rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900",f),children:y}):y};k.__docgenInfo={description:"",methods:[],displayName:"EmptyState",props:{icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},action:{required:!1,tsType:{name:"EmptyStateAction"},description:""},secondaryAction:{required:!1,tsType:{name:"signature",type:"object",raw:"{ label: string; onClick: () => void }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},description:""},accentColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#7c6aff"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"default" | "card" | "minimal"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"card"'},{name:"literal",value:'"minimal"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const H={title:"Components/EmptyState",component:k,parameters:{layout:"centered"}},n={args:{title:"No projects yet",description:"Get started by creating your first project. It only takes a few seconds.",action:{label:"Create Project",onClick:()=>console.log("create"),icon:q}}},i={args:{icon:e.jsx(A,{className:"h-7 w-7",style:{color:"#7c6aff"}}),title:"No results found",description:"We couldn't find anything matching your search. Try adjusting your filters.",action:{label:"Clear filters",onClick:()=>console.log("clear")},secondaryAction:{label:"Back to all items",onClick:()=>console.log("back")}}},l={args:{icon:e.jsx(T,{className:"h-7 w-7",style:{color:"#7c6aff"}}),title:"No notifications",description:"You're all caught up! Check back later for new updates.",variant:"card"}},c={args:{title:"Nothing here",description:"This section is empty for now.",variant:"minimal",action:{label:"Add item",onClick:()=>console.log("add")}}},d={args:{icon:e.jsx(b,{className:"h-5 w-5",style:{color:"#7c6aff"}}),title:"No items",description:"Add your first item to get started.",size:"sm",action:{label:"Add item",onClick:()=>console.log("add")}}},m={args:{icon:e.jsx(I,{className:"h-7 w-7",style:{color:"#e05d44"}}),title:"No images uploaded",description:"Drag and drop images here, or click the button below.",accentColor:"#e05d44",action:{label:"Upload images",onClick:()=>console.log("upload")}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: "No projects yet",
    description: "Get started by creating your first project. It only takes a few seconds.",
    action: {
      label: "Create Project",
      onClick: () => console.log("create"),
      icon: FolderPlus
    }
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Search className="h-7 w-7" style={{
      color: "#7c6aff"
    }} />,
    title: "No results found",
    description: "We couldn't find anything matching your search. Try adjusting your filters.",
    action: {
      label: "Clear filters",
      onClick: () => console.log("clear")
    },
    secondaryAction: {
      label: "Back to all items",
      onClick: () => console.log("back")
    }
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Bell className="h-7 w-7" style={{
      color: "#7c6aff"
    }} />,
    title: "No notifications",
    description: "You're all caught up! Check back later for new updates.",
    variant: "card"
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Nothing here",
    description: "This section is empty for now.",
    variant: "minimal",
    action: {
      label: "Add item",
      onClick: () => console.log("add")
    }
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Inbox className="h-5 w-5" style={{
      color: "#7c6aff"
    }} />,
    title: "No items",
    description: "Add your first item to get started.",
    size: "sm",
    action: {
      label: "Add item",
      onClick: () => console.log("add")
    }
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <ImageOff className="h-7 w-7" style={{
      color: "#e05d44"
    }} />,
    title: "No images uploaded",
    description: "Drag and drop images here, or click the button below.",
    accentColor: "#e05d44",
    action: {
      label: "Upload images",
      onClick: () => console.log("upload")
    }
  }
}`,...m.parameters?.docs?.source}}};const U=["Default","NoSearchResults","Card","Minimal","Small","CustomIcon"];export{l as Card,m as CustomIcon,n as Default,c as Minimal,i as NoSearchResults,d as Small,U as __namedExportsOrder,H as default};
