import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-DTzrpb2v.js";import{c as n}from"./cn-BQHNewu7.js";import{B as O}from"./Badge-DdA7di8h.js";import{B as C}from"./Button-BU_J3Vv8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BE5fGFUm.js";import"./loader-circle-BGE3xZRa.js";import"./createLucideIcon-D-Eaw1KF.js";function f({columns:s,data:d,keyField:h="id",striped:o=!1,hoverable:j=!0,bordered:N=!1,compact:k=!1,loading:A=!1,emptyMessage:E="No hay datos para mostrar",stickyHeader:M=!1,className:U,...B}){const v=k?"px-3 py-2":"px-4 py-3";return e.jsx("div",{className:n("w-full overflow-auto rounded-xl border border-gray-200 dark:border-gray-700",U),...B,children:e.jsxs("table",{className:"w-full text-sm border-collapse",role:"table",children:[e.jsx("thead",{className:n("bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700",M&&"sticky top-0 z-10"),children:e.jsx("tr",{children:s.map(a=>e.jsx("th",{className:n(v,"text-xs font-semibold uppercase tracking-wider whitespace-nowrap","text-gray-500 dark:text-gray-400",a.align==="center"&&"text-center",a.align==="right"&&"text-right",N&&"border border-gray-200 dark:border-gray-700",a.headerClassName),children:a.header},a.key))})}),e.jsx("tbody",{children:A?e.jsx("tr",{children:e.jsx("td",{colSpan:s.length,className:"py-12 text-center text-gray-400 dark:text-gray-500",children:e.jsxs("div",{className:"flex items-center justify-center gap-2",children:[e.jsxs("svg",{className:"animate-spin w-5 h-5 text-blue-500 dark:text-blue-400",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8v8z"})]}),e.jsx("span",{children:"Cargando..."})]})})}):d.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:s.length,className:"py-12 text-center text-gray-400 dark:text-gray-500 text-sm",children:E})}):d.map((a,x)=>e.jsx("tr",{className:n("border-b border-gray-100 dark:border-gray-700 last:border-0",o&&x%2!==0&&"bg-gray-50/60 dark:bg-gray-800/40",j&&"hover:bg-blue-50/40 dark:hover:bg-blue-950/20 transition-colors duration-100"),children:s.map(t=>e.jsx("td",{className:n(v,"text-sm text-gray-800 dark:text-gray-200",t.align==="center"&&"text-center",t.align==="right"&&"text-right",N&&"border border-gray-200 dark:border-gray-700",t.className),children:t.render?t.render(a[t.key],a,x):String(a[t.key]??"")},t.key))},String(a[h]??x)))})]})})}f.displayName="Table";f.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"Column",elements:[{name:"T"}],raw:"Column<T>"}],raw:"Column<T>[]"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},keyField:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"id"',computed:!1}},striped:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hoverable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},compact:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"No hay datos para mostrar"',computed:!1}},stickyHeader:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["HTMLAttributes"]};const T=[{id:1,name:"Ana García",email:"ana@ejemplo.com",role:"Admin",status:"active"},{id:2,name:"Carlos Ruiz",email:"carlos@ejemplo.com",role:"Editor",status:"active"},{id:3,name:"María López",email:"maria@ejemplo.com",role:"Viewer",status:"inactive"},{id:4,name:"Pedro Sánchez",email:"pedro@ejemplo.com",role:"Editor",status:"active"},{id:5,name:"Laura Torres",email:"laura@ejemplo.com",role:"Admin",status:"pending"}],r=[{key:"name",header:"Nombre"},{key:"email",header:"Correo"},{key:"role",header:"Rol"}],S={key:"status",header:"Estado",render:s=>{const d={active:"success",inactive:"default",pending:"warning"},h={active:"Activo",inactive:"Inactivo",pending:"Pendiente"},o=String(s);return e.jsx(O,{variant:d[o]??"default",dot:!0,children:h[o]??o})}},L={key:"id",header:"Acciones",align:"right",render:()=>e.jsxs("div",{style:{display:"flex",gap:6,justifyContent:"flex-end"},children:[e.jsx(C,{size:"sm",variant:"ghost",children:"Editar"}),e.jsx(C,{size:"sm",variant:"danger",outline:!0,children:"Eliminar"})]})},I={title:"Components/Table",component:f,parameters:{layout:"padded",docs:{description:{component:"Tabla de datos con columnas tipadas, render personalizado por celda, estados striped/hoverable/bordered, loading y empty state."}}},argTypes:{striped:{control:"boolean",description:"Filas alternas",table:{category:"Layout",defaultValue:{summary:"false"}}},hoverable:{control:"boolean",description:"Hover en filas",table:{category:"Layout",defaultValue:{summary:"true"}}},bordered:{control:"boolean",description:"Bordes en celdas",table:{category:"Layout",defaultValue:{summary:"false"}}},compact:{control:"boolean",description:"Padding reducido",table:{category:"Layout",defaultValue:{summary:"false"}}},loading:{control:"boolean",description:"Estado de carga",table:{category:"Estado",defaultValue:{summary:"false"}}},stickyHeader:{control:"boolean",description:"Encabezado fijo",table:{category:"Layout",defaultValue:{summary:"false"}}}},args:{columns:[...r,S],data:T,striped:!1,hoverable:!0,bordered:!1,compact:!1,loading:!1}},l={},c={name:"Layout · Striped",args:{striped:!0,columns:r}},i={name:"Layout · Bordered",args:{bordered:!0,columns:r}},m={name:"Layout · Compact",args:{compact:!0,columns:r}},u={name:"Render · Status badge",args:{columns:[...r,S]}},p={name:"Render · With actions",args:{columns:[...r,S,L]}},g={name:"State · Loading",args:{columns:r,loading:!0}},y={name:"State · Empty",args:{columns:r,data:[],emptyMessage:"No se encontraron usuarios."}},b={name:"Showcase · Complete table",parameters:{controls:{disable:!0}},render:()=>e.jsx(f,{columns:[...r,S,L],data:T,striped:!0,hoverable:!0})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Layout · Striped",
  args: {
    striped: true,
    columns: BASE_COLUMNS
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Layout · Bordered",
  args: {
    bordered: true,
    columns: BASE_COLUMNS
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Layout · Compact",
  args: {
    compact: true,
    columns: BASE_COLUMNS
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Render · Status badge",
  args: {
    columns: [...BASE_COLUMNS, STATUS_COLUMN]
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Render · With actions",
  args: {
    columns: [...BASE_COLUMNS, STATUS_COLUMN, ACTIONS_COLUMN]
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "State · Loading",
  args: {
    columns: BASE_COLUMNS,
    loading: true
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "State · Empty",
  args: {
    columns: BASE_COLUMNS,
    data: [],
    emptyMessage: "No se encontraron usuarios."
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Showcase · Complete table",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Table columns={[...BASE_COLUMNS, STATUS_COLUMN, ACTIONS_COLUMN]} data={USERS} striped hoverable />
}`,...b.parameters?.docs?.source}}};const F=["Playground","Striped","Bordered","Compact","WithStatusBadge","WithActions","StateLoading","StateEmpty","ShowcaseComplete"];export{i as Bordered,m as Compact,l as Playground,b as ShowcaseComplete,y as StateEmpty,g as StateLoading,c as Striped,p as WithActions,u as WithStatusBadge,F as __namedExportsOrder,I as default};
