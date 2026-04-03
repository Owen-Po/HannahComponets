import{j as e}from"./jsx-runtime-u17CrQMm.js";const s=({children:a,className:t=""})=>e.jsxs("span",{className:`mt-1 text-xs text-red-500 flex items-center gap-1 ${t}`,children:[e.jsx("span",{className:"w-1 h-1 bg-red-500 rounded-full shrink-0"}),a]});s.__docgenInfo={description:"",methods:[],displayName:"ErrorMessage",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const n={title:"Components/ErrorMessage",parameters:{layout:"centered",docs:{description:{component:"Mensaje de error inline para formularios."}}}},r={name:"Default",render:()=>e.jsx("div",{className:"space-y-3 w-64",children:e.jsxs("div",{children:[e.jsx("label",{className:"text-sm font-medium text-gray-700",children:"Email"}),e.jsx("input",{className:"w-full mt-1 px-3 py-2 border border-red-300 rounded-lg text-sm",value:"invalid",readOnly:!0}),e.jsx(s,{children:"El email no es válido"})]})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Default",
  render: () => <div className="space-y-3 w-64">
      <div>
        <label className="text-sm font-medium text-gray-700">Email</label>
        <input className="w-full mt-1 px-3 py-2 border border-red-300 rounded-lg text-sm" value="invalid" readOnly />
        <ErrorMessage>El email no es válido</ErrorMessage>
      </div>
    </div>
}`,...r.parameters?.docs?.source}}};const d=["Default"];export{r as Default,d as __namedExportsOrder,n as default};
