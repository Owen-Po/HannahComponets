import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as A}from"./iframe-DfrHIFEz.js";import{c}from"./cn-BQHNewu7.js";import{C as V}from"./chevron-left-Cs-CLZa3.js";import{C as q}from"./chevron-right-6wrygk66.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-DplafLFN.js";const C=(e,a)=>Array.from({length:a-e+1},(r,x)=>e+x),w="…";function E(e,a,r){if(r*2+5>=a)return C(1,a);const v=Math.max(e-r,1),k=Math.min(e+r,a),n=v>3,o=k<a-2;if(!n&&o)return[...C(1,3+2*r),w,a];if(n&&!o){const i=C(a-(2+2*r),a);return[1,w,...i]}return[1,w,...C(v,k),w,a]}const j=({currentPage:e,totalPages:a,onPageChange:r,siblingCount:x=1,accentColor:v="#7c6aff",showInfo:k=!1,totalItems:n,itemsPerPage:o,disabled:i=!1,className:D})=>{const S=E(e,a,x),M=c("flex h-9 min-w-9 items-center justify-center rounded-lg text-sm font-medium transition-all duration-150 disabled:cursor-not-allowed disabled:opacity-40"),I=n&&o?(e-1)*o+1:null,T=n&&o?Math.min(e*o,n):null;return t.jsxs("div",{className:c("flex flex-wrap items-center justify-between gap-4",D),children:[k&&n!=null&&o!=null&&t.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-500",children:["Mostrando ",t.jsxs("span",{className:"font-medium text-gray-700 dark:text-gray-300",children:[I,"–",T]})," de"," ",t.jsx("span",{className:"font-medium text-gray-700 dark:text-gray-300",children:n})]}),t.jsxs("div",{className:"flex items-center gap-1",children:[t.jsx("button",{type:"button",disabled:i||e===1,onClick:()=>r(e-1),className:c(M,"px-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-white"),"aria-label":"Página anterior",children:t.jsx(V,{size:16})}),S.map((s,N)=>typeof s=="string"?t.jsx("span",{className:"flex h-9 min-w-9 items-center justify-center text-sm text-gray-400 dark:text-gray-600",children:s},`dots-${N}`):t.jsx("button",{type:"button",disabled:i,onClick:()=>s!==e&&r(s),className:c(M,s===e?"text-white shadow-sm":"text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"),style:s===e?{backgroundColor:v}:void 0,"aria-current":s===e?"page":void 0,"aria-label":`Página ${s}`,children:s},s)),t.jsx("button",{type:"button",disabled:i||e===a,onClick:()=>r(e+1),className:c(M,"px-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-white"),"aria-label":"Página siguiente",children:t.jsx(q,{size:16})})]})]})};j.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{currentPage:{required:!0,tsType:{name:"number"},description:""},totalPages:{required:!0,tsType:{name:"number"},description:""},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},siblingCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},accentColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#7c6aff"',computed:!1}},showInfo:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},totalItems:{required:!1,tsType:{name:"number"},description:""},itemsPerPage:{required:!1,tsType:{name:"number"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const W={title:"Components/Pagination",component:j,parameters:{layout:"padded",docs:{description:{component:"Componente de paginación para tablas y listas con navegación por páginas, ellipsis para rangos largos, información de registros y color de acento dinámico."}}},argTypes:{currentPage:{control:"number",description:"Página actual",table:{category:"Estado"}},totalPages:{control:"number",description:"Total de páginas",table:{category:"Estado"}},onPageChange:{action:"pageChanged",table:{category:"Callbacks"}},siblingCount:{control:"number",description:"Páginas visibles a cada lado de la actual",table:{category:"Visual",defaultValue:{summary:"1"}}},accentColor:{control:"color",description:"Color de acento para la página activa",table:{category:"Visual",defaultValue:{summary:"#7c6aff"}}},showInfo:{control:"boolean",description:"Muestra texto informativo de registros",table:{category:"Visual",defaultValue:{summary:"false"}}},totalItems:{control:"number",description:"Total de registros (para texto informativo)",table:{category:"Estado"}},itemsPerPage:{control:"number",description:"Registros por página (para texto informativo)",table:{category:"Estado"}},disabled:{control:"boolean",description:"Deshabilita toda la paginación",table:{category:"Estado",defaultValue:{summary:"false"}}}}},d={name:"Default",args:{currentPage:1,totalPages:10}},l={name:"Middle page",args:{currentPage:5,totalPages:10}},g={name:"Last page",args:{currentPage:10,totalPages:10}},m={name:"Few pages",args:{currentPage:2,totalPages:3}},p={name:"Many pages",args:{currentPage:25,totalPages:50}},u={name:"With info",parameters:{docs:{description:{story:"Muestra 'Mostrando X–Y de Z' junto a los controles de paginación."}}},args:{currentPage:3,totalPages:20,showInfo:!0,totalItems:195,itemsPerPage:10}},f={name:"Disabled",args:{currentPage:3,totalPages:10,disabled:!0}},y={name:"Accent · Green",args:{currentPage:4,totalPages:12,accentColor:"#10b981"}},b={name:"Accent · Blue",args:{currentPage:7,totalPages:15,accentColor:"#3b82f6"}},P={name:"Dark mode",parameters:{backgrounds:{default:"Dark"}},args:{currentPage:5,totalPages:10}},h={name:"Interactive",parameters:{docs:{description:{story:"Story interactiva: haz clic en las páginas para navegar."}}},render:e=>{const[a,r]=A.useState(1);return t.jsx(j,{...e,currentPage:a,totalPages:20,showInfo:!0,totalItems:200,itemsPerPage:10,onPageChange:r})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source},description:{story:"Página intermedia",...l.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Last page",
  args: {
    currentPage: 10,
    totalPages: 10
  }
}`,...g.parameters?.docs?.source},description:{story:"Última página",...g.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Few pages",
  args: {
    currentPage: 2,
    totalPages: 3
  }
}`,...m.parameters?.docs?.source},description:{story:"Pocas páginas (sin ellipsis)",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Many pages",
  args: {
    currentPage: 25,
    totalPages: 50
  }
}`,...p.parameters?.docs?.source},description:{story:"Muchas páginas",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:"Interactiva",...h.parameters?.docs?.description}}};const O=["Default","MiddlePage","LastPage","FewPages","ManyPages","WithInfo","Disabled","AccentGreen","AccentBlue","DarkMode","Interactive"];export{b as AccentBlue,y as AccentGreen,P as DarkMode,d as Default,f as Disabled,m as FewPages,h as Interactive,g as LastPage,p as ManyPages,l as MiddlePage,u as WithInfo,O as __namedExportsOrder,W as default};
