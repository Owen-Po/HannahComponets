import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as L}from"./iframe-D75dh1fk.js";import{c}from"./cn-CFNvqZE-.js";import{C as R}from"./chevron-left-BapBcI8I.js";import{C as z}from"./chevron-right-D79_hjQL.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-Ce1ZTWB2.js";import"./createLucideIcon-CrPkD7AF.js";const w=(e,a)=>Array.from({length:a-e+1},(t,x)=>e+x),C="…";function B(e,a,t){if(t*2+5>=a)return w(1,a);const v=Math.max(e-t,1),k=Math.min(e+t,a),n=v>3,o=k<a-2;if(!n&&o)return[...w(1,3+2*t),C,a];if(n&&!o){const i=w(a-(2+2*t),a);return[1,C,...i]}return[1,C,...w(v,k),C,a]}const S=({currentPage:e,totalPages:a,onPageChange:t,siblingCount:x=1,accentColor:v="#7c6aff",showInfo:k=!1,totalItems:n,itemsPerPage:o,disabled:i=!1,className:I,showingLabel:T,prevLabel:q="Página anterior",nextLabel:V="Página siguiente",pageLabel:N="Página"})=>{const A=B(e,a,x),M=c("flex h-9 min-w-9 items-center justify-center rounded-lg text-sm font-medium transition-all duration-150 disabled:cursor-not-allowed disabled:opacity-40"),j=n&&o?(e-1)*o+1:null,D=n&&o?Math.min(e*o,n):null;return r.jsxs("div",{className:c("flex flex-wrap items-center justify-between gap-4",I),children:[k&&n!=null&&o!=null&&r.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-500",children:T&&j&&D?T(j,D,n):r.jsxs(r.Fragment,{children:["Mostrando ",r.jsxs("span",{className:"font-medium text-gray-700 dark:text-gray-300",children:[j,"–",D]})," de"," ",r.jsx("span",{className:"font-medium text-gray-700 dark:text-gray-300",children:n})]})}),r.jsxs("div",{className:"flex items-center gap-1",children:[r.jsx("button",{type:"button",disabled:i||e===1,onClick:()=>t(e-1),className:c(M,"px-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-white"),"aria-label":q,children:r.jsx(R,{size:16})}),A.map((s,E)=>typeof s=="string"?r.jsx("span",{className:"flex h-9 min-w-9 items-center justify-center text-sm text-gray-400 dark:text-gray-600",children:s},`dots-${E}`):r.jsx("button",{type:"button",disabled:i,onClick:()=>s!==e&&t(s),className:c(M,s===e?"text-white shadow-sm":"text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"),style:s===e?{backgroundColor:v}:void 0,"aria-current":s===e?"page":void 0,"aria-label":`${N} ${s}`,children:s},s)),r.jsx("button",{type:"button",disabled:i||e===a,onClick:()=>t(e+1),className:c(M,"px-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-white"),"aria-label":V,children:r.jsx(z,{size:16})})]})]})};S.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{currentPage:{required:!0,tsType:{name:"number"},description:""},totalPages:{required:!0,tsType:{name:"number"},description:""},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},siblingCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},accentColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#7c6aff"',computed:!1}},showInfo:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},totalItems:{required:!1,tsType:{name:"number"},description:""},itemsPerPage:{required:!1,tsType:{name:"number"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},showingLabel:{required:!1,tsType:{name:"signature",type:"function",raw:"(start: number, end: number, total: number) => string",signature:{arguments:[{type:{name:"number"},name:"start"},{type:{name:"number"},name:"end"},{type:{name:"number"},name:"total"}],return:{name:"string"}}},description:""},prevLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Página anterior"',computed:!1}},nextLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Página siguiente"',computed:!1}},pageLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Página"',computed:!1}}}};const Z={title:"Components/Pagination",component:S,parameters:{layout:"padded",docs:{description:{component:"Componente de paginación para tablas y listas con navegación por páginas, ellipsis para rangos largos, información de registros y color de acento dinámico."}}},argTypes:{currentPage:{control:"number",description:"Página actual",table:{category:"Estado"}},totalPages:{control:"number",description:"Total de páginas",table:{category:"Estado"}},onPageChange:{action:"pageChanged",table:{category:"Callbacks"}},siblingCount:{control:"number",description:"Páginas visibles a cada lado de la actual",table:{category:"Visual",defaultValue:{summary:"1"}}},accentColor:{control:"color",description:"Color de acento para la página activa",table:{category:"Visual",defaultValue:{summary:"#7c6aff"}}},showInfo:{control:"boolean",description:"Muestra texto informativo de registros",table:{category:"Visual",defaultValue:{summary:"false"}}},totalItems:{control:"number",description:"Total de registros (para texto informativo)",table:{category:"Estado"}},itemsPerPage:{control:"number",description:"Registros por página (para texto informativo)",table:{category:"Estado"}},disabled:{control:"boolean",description:"Deshabilita toda la paginación",table:{category:"Estado",defaultValue:{summary:"false"}}}}},d={name:"Default",args:{currentPage:1,totalPages:10}},l={name:"Middle page",args:{currentPage:5,totalPages:10}},m={name:"Last page",args:{currentPage:10,totalPages:10}},p={name:"Few pages",args:{currentPage:2,totalPages:3}},g={name:"Many pages",args:{currentPage:25,totalPages:50}},u={name:"With info",parameters:{docs:{description:{story:"Muestra 'Mostrando X–Y de Z' junto a los controles de paginación."}}},args:{currentPage:3,totalPages:20,showInfo:!0,totalItems:195,itemsPerPage:10}},f={name:"Disabled",args:{currentPage:3,totalPages:10,disabled:!0}},y={name:"Accent · Green",args:{currentPage:4,totalPages:12,accentColor:"#10b981"}},b={name:"Accent · Blue",args:{currentPage:7,totalPages:15,accentColor:"#3b82f6"}},P={name:"Dark mode",parameters:{backgrounds:{default:"Dark"}},args:{currentPage:5,totalPages:10}},h={name:"Interactive",parameters:{docs:{description:{story:"Story interactiva: haz clic en las páginas para navegar."}}},render:e=>{const[a,t]=L.useState(1);return r.jsx(S,{...e,currentPage:a,totalPages:20,showInfo:!0,totalItems:200,itemsPerPage:10,onPageChange:t})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    currentPage: 1,
    totalPages: 10
  }
}`,...d.parameters?.docs?.source},description:{story:"Primera página",...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Middle page",
  args: {
    currentPage: 5,
    totalPages: 10
  }
}`,...l.parameters?.docs?.source},description:{story:"Página intermedia",...l.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Last page",
  args: {
    currentPage: 10,
    totalPages: 10
  }
}`,...m.parameters?.docs?.source},description:{story:"Última página",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Few pages",
  args: {
    currentPage: 2,
    totalPages: 3
  }
}`,...p.parameters?.docs?.source},description:{story:"Pocas páginas (sin ellipsis)",...p.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Many pages",
  args: {
    currentPage: 25,
    totalPages: 50
  }
}`,...g.parameters?.docs?.source},description:{story:"Muchas páginas",...g.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "With info",
  parameters: {
    docs: {
      description: {
        story: "Muestra 'Mostrando X–Y de Z' junto a los controles de paginación."
      }
    }
  },
  args: {
    currentPage: 3,
    totalPages: 20,
    showInfo: true,
    totalItems: 195,
    itemsPerPage: 10
  }
}`,...u.parameters?.docs?.source},description:{story:"Con información de registros",...u.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Disabled",
  args: {
    currentPage: 3,
    totalPages: 10,
    disabled: true
  }
}`,...f.parameters?.docs?.source},description:{story:"Deshabilitada",...f.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Accent · Green",
  args: {
    currentPage: 4,
    totalPages: 12,
    accentColor: "#10b981"
  }
}`,...y.parameters?.docs?.source},description:{story:"Acento verde",...y.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Accent · Blue",
  args: {
    currentPage: 7,
    totalPages: 15,
    accentColor: "#3b82f6"
  }
}`,...b.parameters?.docs?.source},description:{story:"Acento azul",...b.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: "Dark mode",
  parameters: {
    backgrounds: {
      default: "Dark"
    }
  },
  args: {
    currentPage: 5,
    totalPages: 10
  }
}`,...P.parameters?.docs?.source},description:{story:"Modo oscuro",...P.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Interactive",
  parameters: {
    docs: {
      description: {
        story: "Story interactiva: haz clic en las páginas para navegar."
      }
    }
  },
  render: args => {
    const [page, setPage] = useState(1);
    return <Pagination {...args} currentPage={page} totalPages={20} showInfo totalItems={200} itemsPerPage={10} onPageChange={setPage} />;
  }
}`,...h.parameters?.docs?.source},description:{story:"Interactiva",...h.parameters?.docs?.description}}};const H=["Default","MiddlePage","LastPage","FewPages","ManyPages","WithInfo","Disabled","AccentGreen","AccentBlue","DarkMode","Interactive"];export{b as AccentBlue,y as AccentGreen,P as DarkMode,d as Default,f as Disabled,p as FewPages,h as Interactive,m as LastPage,g as ManyPages,l as MiddlePage,u as WithInfo,H as __namedExportsOrder,Z as default};
