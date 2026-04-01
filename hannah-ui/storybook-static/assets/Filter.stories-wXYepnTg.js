import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r}from"./iframe-D7DoABNO.js";import{c as ne}from"./index-BE5fGFUm.js";import{c as g}from"./cn-BQHNewu7.js";import{c as k}from"./createLucideIcon-CYD34EDm.js";import{X as F}from"./x-C2qkR_gp.js";import{C as le}from"./chevron-down-BA7w4HPa.js";import{U as Z}from"./users-B8zQS3Xu.js";import{T as ee}from"./tag-brFw5Y8S.js";import"./preload-helper-PPVm8Dsz.js";const oe=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],W=k("building-2",oe);const ie=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],de=k("calendar",ie);const ce=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]],B=k("circle-dot",ce);const ue=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],N=k("folder-open",ue);const me=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],pe=k("map-pin",me);const ge=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],ae=k("search",ge);const he=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],G=k("sliders-horizontal",he),be=ne(["relative inline-flex items-center gap-2 border rounded-lg text-sm font-medium cursor-pointer","transition-all duration-200 outline-none","focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-1"],{variants:{size:{sm:"h-8 px-3 text-xs",md:"h-10 px-3.5",lg:"h-12 px-4 text-base"},variant:{default:["bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700","text-gray-700 dark:text-gray-300","hover:border-gray-400 dark:hover:border-gray-600"],filled:["bg-gray-100 dark:bg-gray-800 border-transparent","text-gray-700 dark:text-gray-300","hover:bg-gray-200 dark:hover:bg-gray-700"],ghost:["bg-transparent border-transparent","text-gray-600 dark:text-gray-400","hover:bg-gray-100 dark:hover:bg-gray-800"]},active:{true:"border-blue-500 dark:border-blue-500 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300",false:""}},defaultVariants:{size:"md",variant:"default",active:!1}}),x=({options:a,value:t,onChange:s,placeholder:o="Seleccionar",isClearable:l=!0,isSearchable:i=!1,icon:n,label:d,size:c="md",variant:u="default",className:p})=>{const[h,b]=r.useState(!1),[v,f]=r.useState(""),S=r.useRef(null),T=r.useRef(null),C=a.find(m=>m.value===t),Q=C!==void 0,Y=v?a.filter(m=>m.label.toLowerCase().includes(v.toLowerCase())):a,te=m=>{s(m.value),b(!1),f("")},re=m=>{m.stopPropagation(),s(void 0),f("")};return r.useEffect(()=>{const m=se=>{S.current&&!S.current.contains(se.target)&&(b(!1),f(""))};return document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m)},[]),r.useEffect(()=>{h&&i&&T.current?.focus()},[h,i]),e.jsxs("div",{ref:S,className:g("relative",p),children:[d&&e.jsx("span",{className:"block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5",children:d}),e.jsxs("button",{type:"button",onClick:()=>b(!h),className:g(be({size:c,variant:u,active:Q}),"w-full justify-between"),children:[e.jsxs("span",{className:"flex items-center gap-2 truncate",children:[n&&e.jsx("span",{className:"shrink-0 text-current opacity-60",children:n}),C?C.label:o]}),e.jsxs("span",{className:"flex items-center gap-1 shrink-0",children:[Q&&l&&e.jsx("span",{role:"button",tabIndex:-1,onClick:re,className:"p-0.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors","aria-label":"Limpiar",children:e.jsx(F,{className:"w-3.5 h-3.5"})}),e.jsx(le,{className:g("w-4 h-4 transition-transform duration-200",h&&"rotate-180")})]})]}),h&&e.jsxs("div",{className:g("absolute z-50 mt-1 w-full min-w-[180px] rounded-xl border shadow-lg overflow-hidden","bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700","animate-in fade-in slide-in-from-top-1 duration-150"),children:[i&&e.jsx("div",{className:"p-2 border-b border-gray-100 dark:border-gray-800",children:e.jsxs("div",{className:"relative",children:[e.jsx(ae,{className:"absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400"}),e.jsx("input",{ref:T,type:"text",value:v,onChange:m=>f(m.target.value),placeholder:"Buscar...",className:"w-full h-8 pl-8 pr-3 text-xs rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white outline-none focus:border-blue-400"})]})}),e.jsx("div",{className:"max-h-52 overflow-y-auto py-1",children:Y.length===0?e.jsx("p",{className:"px-3 py-2 text-xs text-gray-400",children:"Sin resultados"}):Y.map(m=>e.jsxs("button",{type:"button",disabled:m.disabled,onClick:()=>te(m),className:g("w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors","disabled:opacity-40 disabled:cursor-not-allowed",m.value===t?"bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300":"text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"),children:[m.icon&&e.jsx("span",{className:"shrink-0",children:m.icon}),m.label,m.value===t&&e.jsx("span",{className:"ml-auto w-1.5 h-1.5 rounded-full bg-blue-500"})]},m.value))})]})]})};x.displayName="FilterSelect";const q=({value:a,onChange:t,placeholder:s="Buscar...",debounceMs:o=300,size:l="md",className:i})=>{const[n,d]=r.useState(a??""),c=r.useRef(void 0),u=l==="sm"?"h-8 text-xs pl-8":l==="lg"?"h-12 text-base pl-11":"h-10 text-sm pl-10",p=l==="sm"?"w-3.5 h-3.5 left-2.5":l==="lg"?"w-5 h-5 left-3.5":"w-4 h-4 left-3";r.useEffect(()=>{a!==void 0&&d(a)},[a]);const h=r.useCallback(v=>{const f=v.target.value;d(f),clearTimeout(c.current),c.current=setTimeout(()=>t(f),o)},[t,o]),b=()=>{d(""),t("")};return e.jsxs("div",{className:g("relative",i),children:[e.jsx(ae,{className:g("absolute top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none",p)}),e.jsx("input",{type:"text",value:n,onChange:h,placeholder:s,className:g("w-full pr-9 border rounded-lg outline-none transition-all duration-200","bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700","text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600","focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800",u)}),n&&e.jsx("button",{type:"button",onClick:b,className:"absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 rounded text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors","aria-label":"Limpiar búsqueda",children:e.jsx(F,{className:"w-4 h-4"})})]})};q.displayName="FilterSearch";const j=({from:a,to:t,onChange:s,labelFrom:o="Desde",labelTo:l="Hasta",size:i="md",className:n})=>{const c=g("w-full px-3 border rounded-lg outline-none transition-all duration-200","bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700","text-gray-900 dark:text-white","focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800",i==="sm"?"h-8 text-xs":i==="lg"?"h-12 text-base":"h-10 text-sm");return e.jsxs("div",{className:g("flex items-end gap-2",n),children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("span",{className:"block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5",children:o}),e.jsx("div",{className:"relative",children:e.jsx("input",{type:"date",value:a??"",onChange:u=>s(u.target.value||void 0,t),className:c})})]}),e.jsx("span",{className:"pb-2.5 text-gray-400",children:"—"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("span",{className:"block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5",children:l}),e.jsx("input",{type:"date",value:t??"",onChange:u=>s(a,u.target.value||void 0),className:c})]})]})};j.displayName="FilterDateRange";const y=({value:a,onChange:t,placeholder:s="Seleccionar fecha...",isClearable:o=!0,label:l,size:i="md",className:n})=>{const d=r.useRef(null),c=!!a,u={sm:"h-8 text-xs",md:"h-10 text-sm",lg:"h-12 text-base"},p={sm:"w-3.5 h-3.5",md:"w-4 h-4",lg:"w-5 h-5"},h=f=>{f.stopPropagation(),t(void 0),d.current&&(d.current.value="")},b=()=>{d.current?.showPicker?.(),d.current?.focus()},v=a?new Date(a+"T00:00:00").toLocaleDateString("es-PE",{day:"2-digit",month:"short",year:"numeric"}):"";return e.jsxs("div",{className:n,children:[l&&e.jsx("span",{className:"block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5",children:l}),e.jsxs("div",{className:"relative",children:[e.jsxs("button",{type:"button",onClick:b,className:g("w-full flex items-center gap-2 px-3 border rounded-lg cursor-pointer","transition-all duration-200 outline-none text-left","focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-1",u[i],c?"border-blue-500 bg-blue-50 text-blue-700 dark:border-blue-500 dark:bg-blue-950/30 dark:text-blue-300":"border-gray-300 bg-white text-gray-400 hover:border-gray-400 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-500 dark:hover:border-gray-600"),children:[e.jsx(de,{className:g("shrink-0 opacity-60",p[i])}),e.jsx("span",{className:g("flex-1 truncate",c&&"text-gray-900 dark:text-white font-medium"),children:v||s}),c&&o&&e.jsx("span",{role:"button",tabIndex:-1,onClick:h,className:"shrink-0 p-0.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors","aria-label":"Limpiar fecha",children:e.jsx(F,{className:"w-3.5 h-3.5"})})]}),e.jsx("input",{ref:d,type:"date",value:a??"",onChange:f=>t(f.target.value||void 0),className:"absolute inset-0 opacity-0 cursor-pointer",tabIndex:-1,"aria-hidden":"true"})]})]})};y.displayName="FilterDate";const U=({options:a,value:t,onChange:s,label:o,className:l})=>{const i=n=>{s(t.includes(n)?t.filter(d=>d!==n):[...t,n])};return e.jsxs("div",{className:l,children:[o&&e.jsx("span",{className:"block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2",children:o}),e.jsx("div",{className:"flex flex-wrap gap-2",children:a.map(n=>{const d=t.includes(n.value);return e.jsxs("button",{type:"button",onClick:()=>i(n.value),disabled:n.disabled,className:g("inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200","disabled:opacity-40 disabled:cursor-not-allowed",d?"bg-blue-100 text-blue-700 ring-1 ring-blue-300 dark:bg-blue-950/50 dark:text-blue-300 dark:ring-blue-700":"bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"),children:[n.icon&&e.jsx("span",{className:"shrink-0",children:n.icon}),n.label,d&&e.jsx(F,{className:"w-3 h-3 ml-0.5"})]},n.value)})})]})};U.displayName="FilterChips";const X=({children:a,onClearAll:t,activeCount:s=0,className:o})=>e.jsxs("div",{className:g("flex flex-wrap items-end gap-3 p-4 rounded-xl border","bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800",o),children:[e.jsxs("div",{className:"flex items-center gap-2 mr-2 shrink-0",children:[e.jsx(G,{className:"w-4 h-4 text-gray-400"}),e.jsx("span",{className:"text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Filtros"}),s>0&&e.jsx("span",{className:"flex items-center justify-center w-5 h-5 rounded-full bg-blue-500 text-white text-[10px] font-bold",children:s})]}),a,s>0&&t&&e.jsx("button",{type:"button",onClick:t,className:"ml-auto text-xs font-medium text-red-500 hover:text-red-600 dark:text-red-400 transition-colors",children:"Limpiar todo"})]});X.displayName="FilterBar";const w=({children:a,activeCount:t=0,label:s="Filtros",onClearAll:o,onApply:l,panelWidth:i="320px",align:n="left",className:d})=>{const[c,u]=r.useState(!1),p=r.useRef(null);r.useEffect(()=>{const b=v=>{p.current&&!p.current.contains(v.target)&&u(!1)};return document.addEventListener("mousedown",b),()=>document.removeEventListener("mousedown",b)},[]),r.useEffect(()=>{if(!c)return;const b=v=>{v.key==="Escape"&&u(!1)};return document.addEventListener("keydown",b),()=>document.removeEventListener("keydown",b)},[c]);const h=()=>{l?.(),u(!1)};return e.jsxs("div",{ref:p,className:g("relative",d),children:[e.jsxs("button",{type:"button",onClick:()=>u(!c),className:g("inline-flex items-center gap-2 h-10 px-4 rounded-lg border text-sm font-medium","transition-all duration-200","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-1",c||t>0?"border-blue-500 bg-blue-50 text-blue-700 dark:border-blue-500 dark:bg-blue-950/30 dark:text-blue-300":"border-gray-300 bg-white text-gray-700 hover:border-gray-400 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-gray-600"),children:[e.jsx(G,{className:"w-4 h-4"}),s,t>0&&e.jsx("span",{className:"flex items-center justify-center min-w-5 h-5 px-1 rounded-full bg-blue-500 text-white text-[10px] font-bold",children:t})]}),c&&e.jsxs("div",{className:g("absolute z-50 mt-2 rounded-xl border shadow-xl overflow-hidden","bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700","animate-in fade-in slide-in-from-top-2 duration-200",n==="right"?"right-0":"left-0"),style:{width:i},children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-gray-800",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(G,{className:"w-4 h-4 text-gray-400"}),e.jsx("span",{className:"text-sm font-semibold text-gray-800 dark:text-white",children:s}),t>0&&e.jsxs("span",{className:"text-xs text-gray-400 dark:text-gray-500",children:["(",t," activo",t>1?"s":"",")"]})]}),e.jsx("button",{type:"button",onClick:()=>u(!1),className:"p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:text-gray-300 dark:hover:bg-gray-800 transition-colors","aria-label":"Cerrar",children:e.jsx(F,{className:"w-4 h-4"})})]}),e.jsx("div",{className:"p-4 space-y-4 max-h-[400px] overflow-y-auto",children:a}),e.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50",children:[o?e.jsx("button",{type:"button",onClick:o,className:"text-xs font-medium text-red-500 hover:text-red-600 dark:text-red-400 transition-colors",children:"Limpiar todo"}):e.jsx("span",{}),e.jsx("button",{type:"button",onClick:h,className:g("h-8 px-4 rounded-lg text-xs font-semibold text-white","bg-blue-600 hover:bg-blue-700 active:scale-[0.97]","transition-all duration-200"),children:"Aplicar"})]})]})]})};w.displayName="FilterButton";x.__docgenInfo={description:"",methods:[],displayName:"FilterSelect",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"FilterOption"}],raw:"FilterOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value?: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Seleccionar"',computed:!1}},isClearable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isSearchable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:""},label:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},size:{defaultValue:{value:'"md"',computed:!1},required:!1},variant:{defaultValue:{value:'"default"',computed:!1},required:!1}},composes:["Omit"]};q.__docgenInfo={description:"",methods:[],displayName:"FilterSearch",props:{value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Buscar..."',computed:!1}},debounceMs:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};j.__docgenInfo={description:"",methods:[],displayName:"FilterDateRange",props:{from:{required:!1,tsType:{name:"string"},description:""},to:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(from?: string, to?: string) => void",signature:{arguments:[{type:{name:"string"},name:"from"},{type:{name:"string"},name:"to"}],return:{name:"void"}}},description:""},labelFrom:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Desde"',computed:!1}},labelTo:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Hasta"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};y.__docgenInfo={description:"",methods:[],displayName:"FilterDate",props:{value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value?: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Seleccionar fecha..."',computed:!1}},isClearable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};U.__docgenInfo={description:"",methods:[],displayName:"FilterChips",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"FilterOption"}],raw:"FilterOption[]"},description:""},value:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},label:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};X.__docgenInfo={description:"",methods:[],displayName:"FilterBar",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},onClearAll:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},activeCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};w.__docgenInfo={description:"",methods:[],displayName:"FilterButton",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},activeCount:{required:!1,tsType:{name:"number"},description:"Cantidad de filtros activos — muestra badge",defaultValue:{value:"0",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Texto del botón",defaultValue:{value:'"Filtros"',computed:!1}},onClearAll:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback al limpiar todo"},onApply:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback al aplicar (cierra el popover)"},panelWidth:{required:!1,tsType:{name:"string"},description:"Ancho del panel",defaultValue:{value:'"320px"',computed:!1}},align:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"Alineación: izquierda o derecha",defaultValue:{value:'"left"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const Fe={title:"Components/Filter",tags:["autodocs"],decorators:[a=>e.jsx("div",{className:"p-6 max-w-3xl",children:e.jsx(a,{})})]},K=[{value:"p1",label:"Sistema de Ventas",icon:e.jsx(N,{className:"w-4 h-4"})},{value:"p2",label:"App Móvil",icon:e.jsx(N,{className:"w-4 h-4"})},{value:"p3",label:"Portal Web",icon:e.jsx(N,{className:"w-4 h-4"})},{value:"p4",label:"API Gateway",icon:e.jsx(N,{className:"w-4 h-4"})}],V={render:()=>{const[a,t]=r.useState();return e.jsx(x,{options:K,value:a,onChange:t,placeholder:"Proyecto",icon:e.jsx(N,{className:"w-4 h-4"})})}},A={render:()=>{const[a,t]=r.useState(),s=[{value:"lima",label:"Lima"},{value:"arequipa",label:"Arequipa"},{value:"trujillo",label:"Trujillo"},{value:"cusco",label:"Cusco"},{value:"piura",label:"Piura"},{value:"chiclayo",label:"Chiclayo"},{value:"huancayo",label:"Huancayo"},{value:"iquitos",label:"Iquitos"}];return e.jsx(x,{options:s,value:a,onChange:t,placeholder:"Ciudad",isSearchable:!0,icon:e.jsx(pe,{className:"w-4 h-4"}),label:"Ciudad"})}},z={render:()=>{const[a,t]=r.useState(),[s,o]=r.useState(),[l,i]=r.useState(),n=[{value:"a",label:"Opción A"},{value:"b",label:"Opción B"},{value:"c",label:"Opción C"}];return e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(x,{options:n,value:a,onChange:t,variant:"default",placeholder:"Default"}),e.jsx(x,{options:n,value:s,onChange:o,variant:"filled",placeholder:"Filled"}),e.jsx(x,{options:n,value:l,onChange:i,variant:"ghost",placeholder:"Ghost"})]})}},D={render:()=>{const[a,t]=r.useState(),[s,o]=r.useState(),[l,i]=r.useState(),n=[{value:"a",label:"Opción"}];return e.jsxs("div",{className:"flex items-end gap-4",children:[e.jsx(x,{options:n,value:a,onChange:t,size:"sm",placeholder:"Small"}),e.jsx(x,{options:n,value:s,onChange:o,size:"md",placeholder:"Medium"}),e.jsx(x,{options:n,value:l,onChange:i,size:"lg",placeholder:"Large"})]})}},E={render:()=>{const[a,t]=r.useState("");return e.jsxs("div",{className:"space-y-2",children:[e.jsx(q,{value:a,onChange:t,placeholder:"Buscar empleado..."}),e.jsxs("p",{className:"text-xs text-gray-500",children:['Valor (debounced): "',a,'"']})]})}},I={render:()=>{const[a,t]=r.useState(),[s,o]=r.useState();return e.jsxs("div",{className:"space-y-2",children:[e.jsx(j,{from:a,to:s,onChange:(l,i)=>{t(l),o(i)}}),e.jsxs("p",{className:"text-xs text-gray-500",children:["Desde: ",a??"—"," / Hasta: ",s??"—"]})]})}},P={render:()=>{const[a,t]=r.useState(["activo"]),s=[{value:"activo",label:"Activo",icon:e.jsx(B,{className:"w-3 h-3 text-emerald-500"})},{value:"pausado",label:"Pausado",icon:e.jsx(B,{className:"w-3 h-3 text-amber-500"})},{value:"cerrado",label:"Cerrado",icon:e.jsx(B,{className:"w-3 h-3 text-red-500"})},{value:"borrador",label:"Borrador",icon:e.jsx(B,{className:"w-3 h-3 text-gray-400"})}];return e.jsx(U,{options:s,value:a,onChange:t,label:"Estado"})}},_={render:()=>{const[a,t]=r.useState(),[s,o]=r.useState(),[l,i]=r.useState(""),[n,d]=r.useState([]),[c,u]=r.useState(),[p,h]=r.useState(),b=[{value:"ti",label:"TI",icon:e.jsx(W,{className:"w-4 h-4"})},{value:"rrhh",label:"RRHH",icon:e.jsx(Z,{className:"w-4 h-4"})},{value:"ventas",label:"Ventas",icon:e.jsx(ee,{className:"w-4 h-4"})}],v=[{value:"activo",label:"Activo"},{value:"inactivo",label:"Inactivo"},{value:"pendiente",label:"Pendiente"}],f=[a,s,l,n.length>0?"x":void 0,c,p].filter(Boolean).length,S=()=>{t(void 0),o(void 0),i(""),d([]),u(void 0),h(void 0)};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs(X,{activeCount:f,onClearAll:S,children:[e.jsx(q,{value:l,onChange:i,placeholder:"Buscar...",className:"w-52"}),e.jsx(x,{options:K,value:a,onChange:t,placeholder:"Proyecto",icon:e.jsx(N,{className:"w-4 h-4"}),isSearchable:!0}),e.jsx(x,{options:b,value:s,onChange:o,placeholder:"Área",icon:e.jsx(W,{className:"w-4 h-4"})})]}),e.jsx(U,{options:v,value:n,onChange:d,label:"Estado"}),e.jsx(j,{from:c,to:p,onChange:(T,C)=>{u(T),h(C)}}),e.jsx("div",{className:"p-4 rounded-lg bg-gray-50 dark:bg-gray-800 text-xs font-mono text-gray-600 dark:text-gray-400",children:e.jsx("pre",{children:JSON.stringify({proyecto:a,area:s,busqueda:l,estados:n,from:c,to:p},null,2)})})]})}},M={render:()=>{const[a,t]=r.useState(""),[s,o]=r.useState(""),[l,i]=r.useState(),[n,d]=r.useState(),c=[a,s,l,n].filter(Boolean).length,u=()=>{t(""),o(""),i(void 0),d(void 0)};return e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Haz click en el botón para abrir los filtros:"}),e.jsxs(w,{activeCount:c,onClearAll:u,children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5",children:"ID"}),e.jsx("input",{type:"text",value:s,onChange:p=>o(p.target.value),placeholder:"Ej: 001",className:"w-full h-9 px-3 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5",children:"Nombre"}),e.jsx("input",{type:"text",value:a,onChange:p=>t(p.target.value),placeholder:"Buscar por nombre...",className:"w-full h-9 px-3 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-blue-500"})]}),e.jsx(j,{from:l,to:n,onChange:(p,h)=>{i(p),d(h)},size:"sm"})]}),c>0&&e.jsx("div",{className:"p-3 rounded-lg bg-gray-50 dark:bg-gray-800 text-xs font-mono text-gray-600 dark:text-gray-400",children:e.jsx("pre",{children:JSON.stringify({id:s,nombre:a,from:l,to:n},null,2)})})]})}},O={render:()=>{const[a,t]=r.useState(),[s,o]=r.useState(),[l,i]=r.useState(),n=[{value:"ti",label:"Tecnología",icon:e.jsx(W,{className:"w-4 h-4"})},{value:"rrhh",label:"Recursos Humanos",icon:e.jsx(Z,{className:"w-4 h-4"})},{value:"ventas",label:"Ventas",icon:e.jsx(ee,{className:"w-4 h-4"})}],d=[{value:"activo",label:"Activo"},{value:"inactivo",label:"Inactivo"},{value:"pendiente",label:"Pendiente"}],c=[a,s,l].filter(Boolean).length,u=()=>{t(void 0),o(void 0),i(void 0)};return e.jsxs(w,{activeCount:c,onClearAll:u,label:"Filtrar",panelWidth:"360px",children:[e.jsx(x,{options:K,value:a,onChange:t,placeholder:"Seleccionar proyecto",label:"Proyecto",icon:e.jsx(N,{className:"w-4 h-4"}),isSearchable:!0}),e.jsx(x,{options:n,value:s,onChange:o,placeholder:"Seleccionar área",label:"Área"}),e.jsx(x,{options:d,value:l,onChange:i,placeholder:"Seleccionar estado",label:"Estado"})]})}},R={render:()=>{const[a,t]=r.useState(""),[s,o]=r.useState(),[l,i]=r.useState(),n=[a,s,l].filter(Boolean).length;return e.jsx("div",{className:"flex justify-end",children:e.jsxs(w,{activeCount:n,onClearAll:()=>{t(""),o(void 0),i(void 0)},align:"right",children:[e.jsx(q,{value:a,onChange:t,placeholder:"Buscar...",size:"sm"}),e.jsx(j,{from:s,to:l,onChange:(d,c)=>{o(d),i(c)},size:"sm"})]})})}},L={render:()=>{const[a,t]=r.useState();return e.jsxs("div",{className:"space-y-3 max-w-xs",children:[e.jsx(y,{value:a,onChange:t,placeholder:"Seleccionar fecha..."}),e.jsxs("p",{className:"text-xs text-gray-500",children:["Valor: ",a??"—"]})]})}},H={render:()=>{const[a,t]=r.useState();return e.jsx(y,{value:a,onChange:t,label:"Fecha de nacimiento",className:"max-w-xs"})}},$={render:()=>{const[a,t]=r.useState(),[s,o]=r.useState(),[l,i]=r.useState();return e.jsxs("div",{className:"flex items-end gap-4",children:[e.jsx(y,{value:a,onChange:t,size:"sm",placeholder:"Small",className:"w-48"}),e.jsx(y,{value:s,onChange:o,size:"md",placeholder:"Medium",className:"w-52"}),e.jsx(y,{value:l,onChange:i,size:"lg",placeholder:"Large",className:"w-56"})]})}},J={render:()=>{const[a,t]=r.useState(""),[s,o]=r.useState(""),[l,i]=r.useState(),n=[a,s,l].filter(Boolean).length,d=()=>{t(""),o(""),i(void 0)};return e.jsxs(w,{activeCount:n,onClearAll:d,children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5",children:"ID"}),e.jsx("input",{type:"text",value:a,onChange:c=>t(c.target.value),placeholder:"Ej: 001",className:"w-full h-9 px-3 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5",children:"Nombre"}),e.jsx("input",{type:"text",value:s,onChange:c=>o(c.target.value),placeholder:"Buscar por nombre...",className:"w-full h-9 px-3 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-blue-500"})]}),e.jsx(y,{value:l,onChange:i,label:"Fecha",size:"sm"})]})}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = useState<string | undefined>();
    return <FilterSelect options={proyectos} value={val} onChange={setVal} placeholder="Proyecto" icon={<FolderOpen className="w-4 h-4" />} />;
  }
}`,...V.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = useState<string | undefined>();
    const ciudades = [{
      value: "lima",
      label: "Lima"
    }, {
      value: "arequipa",
      label: "Arequipa"
    }, {
      value: "trujillo",
      label: "Trujillo"
    }, {
      value: "cusco",
      label: "Cusco"
    }, {
      value: "piura",
      label: "Piura"
    }, {
      value: "chiclayo",
      label: "Chiclayo"
    }, {
      value: "huancayo",
      label: "Huancayo"
    }, {
      value: "iquitos",
      label: "Iquitos"
    }];
    return <FilterSelect options={ciudades} value={val} onChange={setVal} placeholder="Ciudad" isSearchable icon={<MapPin className="w-4 h-4" />} label="Ciudad" />;
  }
}`,...A.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [v1, setV1] = useState<string | undefined>();
    const [v2, setV2] = useState<string | undefined>();
    const [v3, setV3] = useState<string | undefined>();
    const opts = [{
      value: "a",
      label: "Opción A"
    }, {
      value: "b",
      label: "Opción B"
    }, {
      value: "c",
      label: "Opción C"
    }];
    return <div className="flex flex-wrap gap-4">\r
        <FilterSelect options={opts} value={v1} onChange={setV1} variant="default" placeholder="Default" />\r
        <FilterSelect options={opts} value={v2} onChange={setV2} variant="filled" placeholder="Filled" />\r
        <FilterSelect options={opts} value={v3} onChange={setV3} variant="ghost" placeholder="Ghost" />\r
      </div>;
  }
}`,...z.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [v1, setV1] = useState<string | undefined>();
    const [v2, setV2] = useState<string | undefined>();
    const [v3, setV3] = useState<string | undefined>();
    const opts = [{
      value: "a",
      label: "Opción"
    }];
    return <div className="flex items-end gap-4">\r
        <FilterSelect options={opts} value={v1} onChange={setV1} size="sm" placeholder="Small" />\r
        <FilterSelect options={opts} value={v2} onChange={setV2} size="md" placeholder="Medium" />\r
        <FilterSelect options={opts} value={v3} onChange={setV3} size="lg" placeholder="Large" />\r
      </div>;
  }
}`,...D.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = useState("");
    return <div className="space-y-2">\r
        <FilterSearch value={val} onChange={setVal} placeholder="Buscar empleado..." />\r
        <p className="text-xs text-gray-500">Valor (debounced): "{val}"</p>\r
      </div>;
  }
}`,...E.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [from, setFrom] = useState<string | undefined>();
    const [to, setTo] = useState<string | undefined>();
    return <div className="space-y-2">\r
        <FilterDateRange from={from} to={to} onChange={(f, t) => {
        setFrom(f);
        setTo(t);
      }} />\r
        <p className="text-xs text-gray-500">Desde: {from ?? "—"} / Hasta: {to ?? "—"}</p>\r
      </div>;
  }
}`,...I.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = useState<string[]>(["activo"]);
    const estados = [{
      value: "activo",
      label: "Activo",
      icon: <CircleDot className="w-3 h-3 text-emerald-500" />
    }, {
      value: "pausado",
      label: "Pausado",
      icon: <CircleDot className="w-3 h-3 text-amber-500" />
    }, {
      value: "cerrado",
      label: "Cerrado",
      icon: <CircleDot className="w-3 h-3 text-red-500" />
    }, {
      value: "borrador",
      label: "Borrador",
      icon: <CircleDot className="w-3 h-3 text-gray-400" />
    }];
    return <FilterChips options={estados} value={val} onChange={setVal} label="Estado" />;
  }
}`,...P.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [proyecto, setProyecto] = useState<string | undefined>();
    const [area, setArea] = useState<string | undefined>();
    const [busqueda, setBusqueda] = useState("");
    const [estados, setEstados] = useState<string[]>([]);
    const [from, setFrom] = useState<string | undefined>();
    const [to, setTo] = useState<string | undefined>();
    const areas = [{
      value: "ti",
      label: "TI",
      icon: <Building2 className="w-4 h-4" />
    }, {
      value: "rrhh",
      label: "RRHH",
      icon: <Users className="w-4 h-4" />
    }, {
      value: "ventas",
      label: "Ventas",
      icon: <Tag className="w-4 h-4" />
    }];
    const estadoOpts = [{
      value: "activo",
      label: "Activo"
    }, {
      value: "inactivo",
      label: "Inactivo"
    }, {
      value: "pendiente",
      label: "Pendiente"
    }];
    const activeCount = [proyecto, area, busqueda, estados.length > 0 ? "x" : undefined, from, to].filter(Boolean).length;
    const clearAll = () => {
      setProyecto(undefined);
      setArea(undefined);
      setBusqueda("");
      setEstados([]);
      setFrom(undefined);
      setTo(undefined);
    };
    return <div className="space-y-4">\r
        <FilterBar activeCount={activeCount} onClearAll={clearAll}>\r
          <FilterSearch value={busqueda} onChange={setBusqueda} placeholder="Buscar..." className="w-52" />\r
          <FilterSelect options={proyectos} value={proyecto} onChange={setProyecto} placeholder="Proyecto" icon={<FolderOpen className="w-4 h-4" />} isSearchable />\r
          <FilterSelect options={areas} value={area} onChange={setArea} placeholder="Área" icon={<Building2 className="w-4 h-4" />} />\r
        </FilterBar>\r
\r
        <FilterChips options={estadoOpts} value={estados} onChange={setEstados} label="Estado" />\r
\r
        <FilterDateRange from={from} to={to} onChange={(f, t) => {
        setFrom(f);
        setTo(t);
      }} />\r
\r
        <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 text-xs font-mono text-gray-600 dark:text-gray-400">\r
          <pre>{JSON.stringify({
            proyecto,
            area,
            busqueda,
            estados,
            from,
            to
          }, null, 2)}</pre>\r
        </div>\r
      </div>;
  }
}`,..._.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [nombre, setNombre] = useState("");
    const [id, setId] = useState("");
    const [from, setFrom] = useState<string | undefined>();
    const [to, setTo] = useState<string | undefined>();
    const activeCount = [nombre, id, from, to].filter(Boolean).length;
    const clearAll = () => {
      setNombre("");
      setId("");
      setFrom(undefined);
      setTo(undefined);
    };
    return <div className="space-y-4">\r
        <p className="text-sm text-gray-500 dark:text-gray-400">Haz click en el botón para abrir los filtros:</p>\r
        <FilterButton activeCount={activeCount} onClearAll={clearAll}>\r
          <div>\r
            <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">ID</label>\r
            <input type="text" value={id} onChange={e => setId(e.target.value)} placeholder="Ej: 001" className="w-full h-9 px-3 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-blue-500" />\r
          </div>\r
          <div>\r
            <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">Nombre</label>\r
            <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Buscar por nombre..." className="w-full h-9 px-3 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-blue-500" />\r
          </div>\r
          <FilterDateRange from={from} to={to} onChange={(f, t) => {
          setFrom(f);
          setTo(t);
        }} size="sm" />\r
        </FilterButton>\r
\r
        {activeCount > 0 && <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800 text-xs font-mono text-gray-600 dark:text-gray-400">\r
            <pre>{JSON.stringify({
            id,
            nombre,
            from,
            to
          }, null, 2)}</pre>\r
          </div>}\r
      </div>;
  }
}`,...M.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [proyecto, setProyecto] = useState<string | undefined>();
    const [area, setArea] = useState<string | undefined>();
    const [estado, setEstado] = useState<string | undefined>();
    const areas = [{
      value: "ti",
      label: "Tecnología",
      icon: <Building2 className="w-4 h-4" />
    }, {
      value: "rrhh",
      label: "Recursos Humanos",
      icon: <Users className="w-4 h-4" />
    }, {
      value: "ventas",
      label: "Ventas",
      icon: <Tag className="w-4 h-4" />
    }];
    const estados = [{
      value: "activo",
      label: "Activo"
    }, {
      value: "inactivo",
      label: "Inactivo"
    }, {
      value: "pendiente",
      label: "Pendiente"
    }];
    const activeCount = [proyecto, area, estado].filter(Boolean).length;
    const clearAll = () => {
      setProyecto(undefined);
      setArea(undefined);
      setEstado(undefined);
    };
    return <FilterButton activeCount={activeCount} onClearAll={clearAll} label="Filtrar" panelWidth="360px">\r
        <FilterSelect options={proyectos} value={proyecto} onChange={setProyecto} placeholder="Seleccionar proyecto" label="Proyecto" icon={<FolderOpen className="w-4 h-4" />} isSearchable />\r
        <FilterSelect options={areas} value={area} onChange={setArea} placeholder="Seleccionar área" label="Área" />\r
        <FilterSelect options={estados} value={estado} onChange={setEstado} placeholder="Seleccionar estado" label="Estado" />\r
      </FilterButton>;
  }
}`,...O.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [busqueda, setBusqueda] = useState("");
    const [from, setFrom] = useState<string | undefined>();
    const [to, setTo] = useState<string | undefined>();
    const activeCount = [busqueda, from, to].filter(Boolean).length;
    return <div className="flex justify-end">\r
        <FilterButton activeCount={activeCount} onClearAll={() => {
        setBusqueda("");
        setFrom(undefined);
        setTo(undefined);
      }} align="right">\r
          <FilterSearch value={busqueda} onChange={setBusqueda} placeholder="Buscar..." size="sm" />\r
          <FilterDateRange from={from} to={to} onChange={(f, t) => {
          setFrom(f);
          setTo(t);
        }} size="sm" />\r
        </FilterButton>\r
      </div>;
  }
}`,...R.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [fecha, setFecha] = useState<string | undefined>();
    return <div className="space-y-3 max-w-xs">\r
        <FilterDate value={fecha} onChange={setFecha} placeholder="Seleccionar fecha..." />\r
        <p className="text-xs text-gray-500">Valor: {fecha ?? "—"}</p>\r
      </div>;
  }
}`,...L.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [fecha, setFecha] = useState<string | undefined>();
    return <FilterDate value={fecha} onChange={setFecha} label="Fecha de nacimiento" className="max-w-xs" />;
  }
}`,...H.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [f1, setF1] = useState<string | undefined>();
    const [f2, setF2] = useState<string | undefined>();
    const [f3, setF3] = useState<string | undefined>();
    return <div className="flex items-end gap-4">\r
        <FilterDate value={f1} onChange={setF1} size="sm" placeholder="Small" className="w-48" />\r
        <FilterDate value={f2} onChange={setF2} size="md" placeholder="Medium" className="w-52" />\r
        <FilterDate value={f3} onChange={setF3} size="lg" placeholder="Large" className="w-56" />\r
      </div>;
  }
}`,...$.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [fecha, setFecha] = useState<string | undefined>();
    const activeCount = [id, nombre, fecha].filter(Boolean).length;
    const clearAll = () => {
      setId("");
      setNombre("");
      setFecha(undefined);
    };
    return <FilterButton activeCount={activeCount} onClearAll={clearAll}>\r
        <div>\r
          <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">ID</label>\r
          <input type="text" value={id} onChange={e => setId(e.target.value)} placeholder="Ej: 001" className="w-full h-9 px-3 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-blue-500" />\r
        </div>\r
        <div>\r
          <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">Nombre</label>\r
          <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Buscar por nombre..." className="w-full h-9 px-3 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-blue-500" />\r
        </div>\r
        <FilterDate value={fecha} onChange={setFecha} label="Fecha" size="sm" />\r
      </FilterButton>;
  }
}`,...J.parameters?.docs?.source}}};const qe=["SelectBasico","SelectConBusqueda","SelectVariantes","SelectTamaños","Busqueda","RangoFechas","ChipsMultiSelect","BarraCompleta","BotonFiltroBasico","BotonFiltroConSelects","BotonFiltroAlineadoDerecha","FechaSimple","FechaConLabel","FechaTamaños","FechaEnBotonFiltro"];export{_ as BarraCompleta,R as BotonFiltroAlineadoDerecha,M as BotonFiltroBasico,O as BotonFiltroConSelects,E as Busqueda,P as ChipsMultiSelect,H as FechaConLabel,J as FechaEnBotonFiltro,L as FechaSimple,$ as FechaTamaños,I as RangoFechas,V as SelectBasico,A as SelectConBusqueda,D as SelectTamaños,z as SelectVariantes,qe as __namedExportsOrder,Fe as default};
