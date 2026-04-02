import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as c}from"./iframe-vHIwjOwQ.js";import"./preload-helper-PPVm8Dsz.js";const i=({tabs:r,activeTab:o,onChange:d,accentColor:n="#d97706",className:l=""})=>a.jsx("div",{className:`border-b border-gray-200 ${l}`,children:a.jsx("nav",{className:"flex gap-0 -mb-px",role:"tablist",children:r.map(e=>{const t=e.id===o;return a.jsxs("button",{type:"button",role:"tab","aria-selected":t,disabled:e.disabled,onClick:()=>d(e.id),className:`relative px-4 py-2.5 text-sm font-medium transition-colors whitespace-nowrap ${t?"border-b-2":"text-gray-500 hover:text-gray-700 border-b-2 border-transparent"} ${e.disabled?"opacity-40 cursor-not-allowed":"cursor-pointer"}`,style:t?{color:n,borderBottomColor:n}:void 0,children:[e.label,e.count!==void 0&&a.jsx("span",{className:`ml-2 inline-flex items-center justify-center min-w-5 h-5 px-1.5 rounded-full text-xs font-bold ${t?"":"bg-gray-100 text-gray-600"}`,style:t?{backgroundColor:`${n}20`,color:n}:void 0,children:e.count})]},e.id)})})});i.__docgenInfo={description:"",methods:[],displayName:"PageTabs",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"PageTab"}],raw:"PageTab[]"},description:""},activeTab:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(tabId: string) => void",signature:{arguments:[{type:{name:"string"},name:"tabId"}],return:{name:"void"}}},description:""},accentColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#d97706"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const m={title:"Components/PageTabs",parameters:{layout:"padded",docs:{description:{component:"Tabs de navegación por página con contadores opcionales y soporte para tabs deshabilitados."}}}},s={name:"Default",render:()=>{const[r,o]=c.useState("all");return a.jsxs("div",{children:[a.jsx(i,{activeTab:r,onChange:o,tabs:[{id:"all",label:"Todos",count:128},{id:"active",label:"Activos",count:96},{id:"inactive",label:"Inactivos",count:32},{id:"archived",label:"Archivados",disabled:!0}]}),a.jsxs("div",{className:"mt-4 p-4 bg-gray-50 rounded-lg text-sm text-gray-600",children:["Tab activo: ",a.jsx("strong",{children:r})]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Default",
  render: () => {
    const [tab, setTab] = useState("all");
    return <div>
        <PageTabs activeTab={tab} onChange={setTab} tabs={[{
        id: "all",
        label: "Todos",
        count: 128
      }, {
        id: "active",
        label: "Activos",
        count: 96
      }, {
        id: "inactive",
        label: "Inactivos",
        count: 32
      }, {
        id: "archived",
        label: "Archivados",
        disabled: true
      }]} />
        <div className="mt-4 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
          Tab activo: <strong>{tab}</strong>
        </div>
      </div>;
  }
}`,...s.parameters?.docs?.source}}};const g=["Default"];export{s as Default,g as __namedExportsOrder,m as default};
