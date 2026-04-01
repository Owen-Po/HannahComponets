import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r}from"./iframe-D75dh1fk.js";import{c as ie}from"./index-Bj1Z-dc7.js";import{c as f}from"./cn-CFNvqZE-.js";import{c as J}from"./createLucideIcon-CrPkD7AF.js";import{S as te}from"./search-Aq4T4es1.js";import{X as F}from"./x-DIPxPrr_.js";import{C as de}from"./chevron-down-DABnpbVf.js";import{C as ce}from"./calendar-YQ71LYVq.js";import{F as w}from"./folder-open-BmTcKmUh.js";import{U as re}from"./users-BBNMyoaY.js";import{T as se}from"./tag-BLT8l7CC.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-Ce1ZTWB2.js";const ue=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],X=J("building-2",ue);const me=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]],q=J("circle-dot",me);const pe=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],ge=J("map-pin",pe);const he=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],K=J("sliders-horizontal",he),be=ie(["relative inline-flex items-center gap-2 border rounded-lg text-sm font-medium cursor-pointer","transition-all duration-200 outline-none","focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-1"],{variants:{size:{sm:"h-8 px-3 text-xs",md:"h-10 px-3.5",lg:"h-12 px-4 text-base"},variant:{default:["bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700","text-gray-700 dark:text-gray-300","hover:border-gray-400 dark:hover:border-gray-600"],filled:["bg-gray-100 dark:bg-gray-800 border-transparent","text-gray-700 dark:text-gray-300","hover:bg-gray-200 dark:hover:bg-gray-700"],ghost:["bg-transparent border-transparent","text-gray-600 dark:text-gray-400","hover:bg-gray-100 dark:hover:bg-gray-800"]},active:{true:"border-blue-500 dark:border-blue-500 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300",false:""}},defaultVariants:{size:"md",variant:"default",active:!1}}),v=({options:t,value:a,onChange:s,placeholder:o="Seleccionar",isClearable:n=!0,isSearchable:l=!1,icon:i,label:d,size:c="md",variant:g="default",className:p,accentColor:u="#3b82f6",searchPlaceholder:h="Buscar...",noResultsText:N="Sin resultados"})=>{const[y,b]=r.useState(!1),[x,j]=r.useState(""),W=r.useRef(null),Z=r.useRef(null),G=t.find(m=>m.value===a),ee=G!==void 0,ae=x?t.filter(m=>m.label.toLowerCase().includes(x.toLowerCase())):t,ne=m=>{s(m.value),b(!1),j("")},le=m=>{m.stopPropagation(),s(void 0),j("")};return r.useEffect(()=>{const m=oe=>{W.current&&!W.current.contains(oe.target)&&(b(!1),j(""))};return document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m)},[]),r.useEffect(()=>{y&&l&&Z.current?.focus()},[y,l]),e.jsxs("div",{ref:W,className:f("relative",p),children:[d&&e.jsx("span",{className:"block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5",children:d}),e.jsxs("button",{type:"button",onClick:()=>b(!y),className:f(be({size:c,variant:g,active:!1}),"w-full justify-between"),style:ee?{borderColor:u,backgroundColor:`${u}10`,color:u}:void 0,children:[e.jsxs("span",{className:"flex items-center gap-2 truncate",children:[i&&e.jsx("span",{className:"shrink-0 text-current opacity-60",children:i}),G?G.label:o]}),e.jsxs("span",{className:"flex items-center gap-1 shrink-0",children:[ee&&n&&e.jsx("span",{role:"button",tabIndex:-1,onClick:le,className:"p-0.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors","aria-label":"Limpiar",children:e.jsx(F,{className:"w-3.5 h-3.5"})}),e.jsx(de,{className:f("w-4 h-4 transition-transform duration-200",y&&"rotate-180")})]})]}),y&&e.jsxs("div",{className:f("absolute z-50 mt-1 w-full min-w-[180px] rounded-xl border shadow-lg overflow-hidden","bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700","animate-in fade-in slide-in-from-top-1 duration-150"),children:[l&&e.jsx("div",{className:"p-2 border-b border-gray-100 dark:border-gray-800",children:e.jsxs("div",{className:"relative",children:[e.jsx(te,{className:"absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400"}),e.jsx("input",{ref:Z,type:"text",value:x,onChange:m=>j(m.target.value),placeholder:h,className:"w-full h-8 pl-8 pr-3 text-xs rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white outline-none",onFocus:m=>{m.currentTarget.style.borderColor=u},onBlur:m=>{m.currentTarget.style.borderColor=""}})]})}),e.jsx("div",{className:"max-h-52 overflow-y-auto py-1",children:ae.length===0?e.jsx("p",{className:"px-3 py-2 text-xs text-gray-400",children:N}):ae.map(m=>e.jsxs("button",{type:"button",disabled:m.disabled,onClick:()=>ne(m),className:f("w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors","disabled:opacity-40 disabled:cursor-not-allowed",m.value===a?"":"text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"),style:m.value===a?{backgroundColor:`${u}15`,color:u}:void 0,children:[m.icon&&e.jsx("span",{className:"shrink-0",children:m.icon}),m.label,m.value===a&&e.jsx("span",{className:"ml-auto w-1.5 h-1.5 rounded-full",style:{backgroundColor:u}})]},m.value))})]})]})};v.displayName="FilterSelect";const T=({value:t,onChange:a,placeholder:s="Buscar...",debounceMs:o=300,size:n="md",className:l,accentColor:i="#3b82f6",clearSearchLabel:d="Limpiar búsqueda"})=>{const[c,g]=r.useState(t??""),p=r.useRef(void 0),u=n==="sm"?"h-8 text-xs pl-8":n==="lg"?"h-12 text-base pl-11":"h-10 text-sm pl-10",h=n==="sm"?"w-3.5 h-3.5 left-2.5":n==="lg"?"w-5 h-5 left-3.5":"w-4 h-4 left-3";r.useEffect(()=>{t!==void 0&&g(t)},[t]);const N=r.useCallback(b=>{const x=b.target.value;g(x),clearTimeout(p.current),p.current=setTimeout(()=>a(x),o)},[a,o]),y=()=>{g(""),a("")};return e.jsxs("div",{className:f("relative",l),children:[e.jsx(te,{className:f("absolute top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none",h)}),e.jsx("input",{type:"text",value:c,onChange:N,placeholder:s,className:f("w-full pr-9 border rounded-lg outline-none transition-all duration-200","bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700","text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600","focus:ring-2",u),onFocus:b=>{b.currentTarget.style.borderColor=i,b.currentTarget.style.boxShadow=`0 0 0 2px ${i}40`},onBlur:b=>{b.currentTarget.style.borderColor="",b.currentTarget.style.boxShadow=""}}),c&&e.jsx("button",{type:"button",onClick:y,className:"absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 rounded text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors","aria-label":d,children:e.jsx(F,{className:"w-4 h-4"})})]})};T.displayName="FilterSearch";const C=({from:t,to:a,onChange:s,labelFrom:o="Desde",labelTo:n="Hasta",size:l="md",className:i,accentColor:d="#3b82f6"})=>{const g=f("w-full px-3 border rounded-lg outline-none transition-all duration-200","bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700","text-gray-900 dark:text-white","focus:ring-2",l==="sm"?"h-8 text-xs":l==="lg"?"h-12 text-base":"h-10 text-sm"),p=h=>{h.currentTarget.style.borderColor=d,h.currentTarget.style.boxShadow=`0 0 0 2px ${d}40`},u=h=>{h.currentTarget.style.borderColor="",h.currentTarget.style.boxShadow=""};return e.jsxs("div",{className:f("flex items-end gap-2",i),children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("span",{className:"block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5",children:o}),e.jsx("div",{className:"relative",children:e.jsx("input",{type:"date",value:t??"",onChange:h=>s(h.target.value||void 0,a),onFocus:p,onBlur:u,className:g})})]}),e.jsx("span",{className:"pb-2.5 text-gray-400",children:"—"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("span",{className:"block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5",children:n}),e.jsx("input",{type:"date",value:a??"",onChange:h=>s(t,h.target.value||void 0),onFocus:p,onBlur:u,className:g})]})]})};C.displayName="FilterDateRange";const k=({value:t,onChange:a,placeholder:s="Seleccionar fecha...",isClearable:o=!0,label:n,size:l="md",className:i,accentColor:d="#3b82f6",clearDateLabel:c="Limpiar fecha"})=>{const g=r.useRef(null),p=!!t,u={sm:"h-8 text-xs",md:"h-10 text-sm",lg:"h-12 text-base"},h={sm:"w-3.5 h-3.5",md:"w-4 h-4",lg:"w-5 h-5"},N=x=>{x.stopPropagation(),a(void 0),g.current&&(g.current.value="")},y=()=>{g.current?.showPicker?.(),g.current?.focus()},b=t?new Date(t+"T00:00:00").toLocaleDateString("es-PE",{day:"2-digit",month:"short",year:"numeric"}):"";return e.jsxs("div",{className:i,children:[n&&e.jsx("span",{className:"block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5",children:n}),e.jsxs("div",{className:"relative",children:[e.jsxs("button",{type:"button",onClick:y,className:f("w-full flex items-center gap-2 px-3 border rounded-lg cursor-pointer","transition-all duration-200 outline-none text-left","focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-1",u[l],p?"":"border-gray-300 bg-white text-gray-400 hover:border-gray-400 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-500 dark:hover:border-gray-600"),style:p?{borderColor:d,backgroundColor:`${d}10`,color:d}:void 0,children:[e.jsx(ce,{className:f("shrink-0 opacity-60",h[l])}),e.jsx("span",{className:f("flex-1 truncate",p&&"text-gray-900 dark:text-white font-medium"),children:b||s}),p&&o&&e.jsx("span",{role:"button",tabIndex:-1,onClick:N,className:"shrink-0 p-0.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors","aria-label":c,children:e.jsx(F,{className:"w-3.5 h-3.5"})})]}),e.jsx("input",{ref:g,type:"date",value:t??"",onChange:x=>a(x.target.value||void 0),className:"absolute inset-0 opacity-0 cursor-pointer",tabIndex:-1,"aria-hidden":"true"})]})]})};k.displayName="FilterDate";const U=({options:t,value:a,onChange:s,label:o,className:n,accentColor:l="#3b82f6"})=>{const i=d=>{s(a.includes(d)?a.filter(c=>c!==d):[...a,d])};return e.jsxs("div",{className:n,children:[o&&e.jsx("span",{className:"block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2",children:o}),e.jsx("div",{className:"flex flex-wrap gap-2",children:t.map(d=>{const c=a.includes(d.value);return e.jsxs("button",{type:"button",onClick:()=>i(d.value),disabled:d.disabled,className:f("inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200","disabled:opacity-40 disabled:cursor-not-allowed",c?"ring-1":"bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"),style:c?{backgroundColor:`${l}20`,color:l,"--tw-ring-color":`${l}60`}:void 0,children:[d.icon&&e.jsx("span",{className:"shrink-0",children:d.icon}),d.label,c&&e.jsx(F,{className:"w-3 h-3 ml-0.5"})]},d.value)})})]})};U.displayName="FilterChips";const Q=({children:t,onClearAll:a,activeCount:s=0,className:o,accentColor:n="#3b82f6",filtersLabel:l="Filtros",clearAllLabel:i="Limpiar todo"})=>e.jsxs("div",{className:f("flex flex-wrap items-end gap-3 p-4 rounded-xl border","bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800",o),children:[e.jsxs("div",{className:"flex items-center gap-2 mr-2 shrink-0",children:[e.jsx(K,{className:"w-4 h-4 text-gray-400"}),e.jsx("span",{className:"text-sm font-semibold text-gray-700 dark:text-gray-300",children:l}),s>0&&e.jsx("span",{className:"flex items-center justify-center w-5 h-5 rounded-full text-white text-[10px] font-bold",style:{backgroundColor:n},children:s})]}),t,s>0&&a&&e.jsx("button",{type:"button",onClick:a,className:"ml-auto text-xs font-medium text-red-500 hover:text-red-600 dark:text-red-400 transition-colors",children:i})]});Q.displayName="FilterBar";const S=({children:t,activeCount:a=0,label:s="Filtros",onClearAll:o,onApply:n,panelWidth:l="320px",align:i="left",className:d,accentColor:c="#3b82f6",clearAllLabel:g="Limpiar todo",applyLabel:p="Aplicar"})=>{const[u,h]=r.useState(!1),N=r.useRef(null);r.useEffect(()=>{const b=x=>{N.current&&!N.current.contains(x.target)&&h(!1)};return document.addEventListener("mousedown",b),()=>document.removeEventListener("mousedown",b)},[]),r.useEffect(()=>{if(!u)return;const b=x=>{x.key==="Escape"&&h(!1)};return document.addEventListener("keydown",b),()=>document.removeEventListener("keydown",b)},[u]);const y=()=>{n?.(),h(!1)};return e.jsxs("div",{ref:N,className:f("relative",d),children:[e.jsxs("button",{type:"button",onClick:()=>h(!u),className:f("inline-flex items-center gap-2 h-10 px-4 rounded-lg border text-sm font-medium","transition-all duration-200","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-1",u||a>0?"":"border-gray-300 bg-white text-gray-700 hover:border-gray-400 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-gray-600"),style:u||a>0?{borderColor:c,backgroundColor:`${c}10`,color:c}:void 0,children:[e.jsx(K,{className:"w-4 h-4"}),s,a>0&&e.jsx("span",{className:"flex items-center justify-center min-w-5 h-5 px-1 rounded-full text-white text-[10px] font-bold",style:{backgroundColor:c},children:a})]}),u&&e.jsxs("div",{className:f("absolute z-50 mt-2 rounded-xl border shadow-xl overflow-hidden","bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700","animate-in fade-in slide-in-from-top-2 duration-200",i==="right"?"right-0":"left-0"),style:{width:l},children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-gray-800",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(K,{className:"w-4 h-4 text-gray-400"}),e.jsx("span",{className:"text-sm font-semibold text-gray-800 dark:text-white",children:s}),a>0&&e.jsxs("span",{className:"text-xs text-gray-400 dark:text-gray-500",children:["(",a," activo",a>1?"s":"",")"]})]}),e.jsx("button",{type:"button",onClick:()=>h(!1),className:"p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:text-gray-300 dark:hover:bg-gray-800 transition-colors","aria-label":"Cerrar",children:e.jsx(F,{className:"w-4 h-4"})})]}),e.jsx("div",{className:"p-4 space-y-4 max-h-[400px] overflow-y-auto",children:t}),e.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50",children:[o?e.jsx("button",{type:"button",onClick:o,className:"text-xs font-medium text-red-500 hover:text-red-600 dark:text-red-400 transition-colors",children:g}):e.jsx("span",{}),e.jsx("button",{type:"button",onClick:y,className:f("h-8 px-4 rounded-lg text-xs font-semibold text-white","active:scale-[0.97]","transition-all duration-200"),style:{backgroundColor:c},children:p})]})]})]})};S.displayName="FilterButton";v.__docgenInfo={description:"",methods:[],displayName:"FilterSelect",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"FilterOption"}],raw:"FilterOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value?: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Seleccionar"',computed:!1}},isClearable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isSearchable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:""},label:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},accentColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#3b82f6"',computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Buscar..."',computed:!1}},noResultsText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Sin resultados"',computed:!1}},size:{defaultValue:{value:'"md"',computed:!1},required:!1},variant:{defaultValue:{value:'"default"',computed:!1},required:!1}},composes:["Omit"]};T.__docgenInfo={description:"",methods:[],displayName:"FilterSearch",props:{value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Buscar..."',computed:!1}},debounceMs:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},accentColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#3b82f6"',computed:!1}},clearSearchLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Limpiar búsqueda"',computed:!1}}}};C.__docgenInfo={description:"",methods:[],displayName:"FilterDateRange",props:{from:{required:!1,tsType:{name:"string"},description:""},to:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(from?: string, to?: string) => void",signature:{arguments:[{type:{name:"string"},name:"from"},{type:{name:"string"},name:"to"}],return:{name:"void"}}},description:""},labelFrom:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Desde"',computed:!1}},labelTo:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Hasta"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},accentColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#3b82f6"',computed:!1}}}};k.__docgenInfo={description:"",methods:[],displayName:"FilterDate",props:{value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value?: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Seleccionar fecha..."',computed:!1}},isClearable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},accentColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#3b82f6"',computed:!1}},clearDateLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Limpiar fecha"',computed:!1}}}};U.__docgenInfo={description:"",methods:[],displayName:"FilterChips",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"FilterOption"}],raw:"FilterOption[]"},description:""},value:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},label:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},accentColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#3b82f6"',computed:!1}}}};Q.__docgenInfo={description:"",methods:[],displayName:"FilterBar",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},onClearAll:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},activeCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},accentColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#3b82f6"',computed:!1}},filtersLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Filtros"',computed:!1}},clearAllLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Limpiar todo"',computed:!1}}}};S.__docgenInfo={description:"",methods:[],displayName:"FilterButton",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},activeCount:{required:!1,tsType:{name:"number"},description:"Cantidad de filtros activos — muestra badge",defaultValue:{value:"0",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Texto del botón",defaultValue:{value:'"Filtros"',computed:!1}},onClearAll:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback al limpiar todo"},onApply:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback al aplicar (cierra el popover)"},panelWidth:{required:!1,tsType:{name:"string"},description:"Ancho del panel",defaultValue:{value:'"320px"',computed:!1}},align:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"Alineación: izquierda o derecha",defaultValue:{value:'"left"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},accentColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#3b82f6"',computed:!1}},clearAllLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Limpiar todo"',computed:!1}},applyLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Aplicar"',computed:!1}}}};const Ve={title:"Components/Filter",tags:["autodocs"],decorators:[t=>e.jsx("div",{className:"p-6 max-w-3xl",children:e.jsx(t,{})})]},Y=[{value:"p1",label:"Sistema de Ventas",icon:e.jsx(w,{className:"w-4 h-4"})},{value:"p2",label:"App Móvil",icon:e.jsx(w,{className:"w-4 h-4"})},{value:"p3",label:"Portal Web",icon:e.jsx(w,{className:"w-4 h-4"})},{value:"p4",label:"API Gateway",icon:e.jsx(w,{className:"w-4 h-4"})}],B={render:()=>{const[t,a]=r.useState();return e.jsx(v,{options:Y,value:t,onChange:a,placeholder:"Proyecto",icon:e.jsx(w,{className:"w-4 h-4"})})}},V={render:()=>{const[t,a]=r.useState(),s=[{value:"lima",label:"Lima"},{value:"arequipa",label:"Arequipa"},{value:"trujillo",label:"Trujillo"},{value:"cusco",label:"Cusco"},{value:"piura",label:"Piura"},{value:"chiclayo",label:"Chiclayo"},{value:"huancayo",label:"Huancayo"},{value:"iquitos",label:"Iquitos"}];return e.jsx(v,{options:s,value:t,onChange:a,placeholder:"Ciudad",isSearchable:!0,icon:e.jsx(ge,{className:"w-4 h-4"}),label:"Ciudad"})}},A={render:()=>{const[t,a]=r.useState(),[s,o]=r.useState(),[n,l]=r.useState(),i=[{value:"a",label:"Opción A"},{value:"b",label:"Opción B"},{value:"c",label:"Opción C"}];return e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(v,{options:i,value:t,onChange:a,variant:"default",placeholder:"Default"}),e.jsx(v,{options:i,value:s,onChange:o,variant:"filled",placeholder:"Filled"}),e.jsx(v,{options:i,value:n,onChange:l,variant:"ghost",placeholder:"Ghost"})]})}},D={render:()=>{const[t,a]=r.useState(),[s,o]=r.useState(),[n,l]=r.useState(),i=[{value:"a",label:"Opción"}];return e.jsxs("div",{className:"flex items-end gap-4",children:[e.jsx(v,{options:i,value:t,onChange:a,size:"sm",placeholder:"Small"}),e.jsx(v,{options:i,value:s,onChange:o,size:"md",placeholder:"Medium"}),e.jsx(v,{options:i,value:n,onChange:l,size:"lg",placeholder:"Large"})]})}},z={render:()=>{const[t,a]=r.useState("");return e.jsxs("div",{className:"space-y-2",children:[e.jsx(T,{value:t,onChange:a,placeholder:"Buscar empleado..."}),e.jsxs("p",{className:"text-xs text-gray-500",children:['Valor (debounced): "',t,'"']})]})}},E={render:()=>{const[t,a]=r.useState(),[s,o]=r.useState();return e.jsxs("div",{className:"space-y-2",children:[e.jsx(C,{from:t,to:s,onChange:(n,l)=>{a(n),o(l)}}),e.jsxs("p",{className:"text-xs text-gray-500",children:["Desde: ",t??"—"," / Hasta: ",s??"—"]})]})}},I={render:()=>{const[t,a]=r.useState(["activo"]),s=[{value:"activo",label:"Activo",icon:e.jsx(q,{className:"w-3 h-3 text-emerald-500"})},{value:"pausado",label:"Pausado",icon:e.jsx(q,{className:"w-3 h-3 text-amber-500"})},{value:"cerrado",label:"Cerrado",icon:e.jsx(q,{className:"w-3 h-3 text-red-500"})},{value:"borrador",label:"Borrador",icon:e.jsx(q,{className:"w-3 h-3 text-gray-400"})}];return e.jsx(U,{options:s,value:t,onChange:a,label:"Estado"})}},L={render:()=>{const[t,a]=r.useState(),[s,o]=r.useState(),[n,l]=r.useState(""),[i,d]=r.useState([]),[c,g]=r.useState(),[p,u]=r.useState(),h=[{value:"ti",label:"TI",icon:e.jsx(X,{className:"w-4 h-4"})},{value:"rrhh",label:"RRHH",icon:e.jsx(re,{className:"w-4 h-4"})},{value:"ventas",label:"Ventas",icon:e.jsx(se,{className:"w-4 h-4"})}],N=[{value:"activo",label:"Activo"},{value:"inactivo",label:"Inactivo"},{value:"pendiente",label:"Pendiente"}],y=[t,s,n,i.length>0?"x":void 0,c,p].filter(Boolean).length,b=()=>{a(void 0),o(void 0),l(""),d([]),g(void 0),u(void 0)};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs(Q,{activeCount:y,onClearAll:b,children:[e.jsx(T,{value:n,onChange:l,placeholder:"Buscar...",className:"w-52"}),e.jsx(v,{options:Y,value:t,onChange:a,placeholder:"Proyecto",icon:e.jsx(w,{className:"w-4 h-4"}),isSearchable:!0}),e.jsx(v,{options:h,value:s,onChange:o,placeholder:"Área",icon:e.jsx(X,{className:"w-4 h-4"})})]}),e.jsx(U,{options:N,value:i,onChange:d,label:"Estado"}),e.jsx(C,{from:c,to:p,onChange:(x,j)=>{g(x),u(j)}}),e.jsx("div",{className:"p-4 rounded-lg bg-gray-50 dark:bg-gray-800 text-xs font-mono text-gray-600 dark:text-gray-400",children:e.jsx("pre",{children:JSON.stringify({proyecto:t,area:s,busqueda:n,estados:i,from:c,to:p},null,2)})})]})}},P={render:()=>{const[t,a]=r.useState(""),[s,o]=r.useState(""),[n,l]=r.useState(),[i,d]=r.useState(),c=[t,s,n,i].filter(Boolean).length,g=()=>{a(""),o(""),l(void 0),d(void 0)};return e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Haz click en el botón para abrir los filtros:"}),e.jsxs(S,{activeCount:c,onClearAll:g,children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5",children:"ID"}),e.jsx("input",{type:"text",value:s,onChange:p=>o(p.target.value),placeholder:"Ej: 001",className:"w-full h-9 px-3 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5",children:"Nombre"}),e.jsx("input",{type:"text",value:t,onChange:p=>a(p.target.value),placeholder:"Buscar por nombre...",className:"w-full h-9 px-3 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-blue-500"})]}),e.jsx(C,{from:n,to:i,onChange:(p,u)=>{l(p),d(u)},size:"sm"})]}),c>0&&e.jsx("div",{className:"p-3 rounded-lg bg-gray-50 dark:bg-gray-800 text-xs font-mono text-gray-600 dark:text-gray-400",children:e.jsx("pre",{children:JSON.stringify({id:s,nombre:t,from:n,to:i},null,2)})})]})}},R={render:()=>{const[t,a]=r.useState(),[s,o]=r.useState(),[n,l]=r.useState(),i=[{value:"ti",label:"Tecnología",icon:e.jsx(X,{className:"w-4 h-4"})},{value:"rrhh",label:"Recursos Humanos",icon:e.jsx(re,{className:"w-4 h-4"})},{value:"ventas",label:"Ventas",icon:e.jsx(se,{className:"w-4 h-4"})}],d=[{value:"activo",label:"Activo"},{value:"inactivo",label:"Inactivo"},{value:"pendiente",label:"Pendiente"}],c=[t,s,n].filter(Boolean).length,g=()=>{a(void 0),o(void 0),l(void 0)};return e.jsxs(S,{activeCount:c,onClearAll:g,label:"Filtrar",panelWidth:"360px",children:[e.jsx(v,{options:Y,value:t,onChange:a,placeholder:"Seleccionar proyecto",label:"Proyecto",icon:e.jsx(w,{className:"w-4 h-4"}),isSearchable:!0}),e.jsx(v,{options:i,value:s,onChange:o,placeholder:"Seleccionar área",label:"Área"}),e.jsx(v,{options:d,value:n,onChange:l,placeholder:"Seleccionar estado",label:"Estado"})]})}},O={render:()=>{const[t,a]=r.useState(""),[s,o]=r.useState(),[n,l]=r.useState(),i=[t,s,n].filter(Boolean).length;return e.jsx("div",{className:"flex justify-end",children:e.jsxs(S,{activeCount:i,onClearAll:()=>{a(""),o(void 0),l(void 0)},align:"right",children:[e.jsx(T,{value:t,onChange:a,placeholder:"Buscar...",size:"sm"}),e.jsx(C,{from:s,to:n,onChange:(d,c)=>{o(d),l(c)},size:"sm"})]})})}},M={render:()=>{const[t,a]=r.useState();return e.jsxs("div",{className:"space-y-3 max-w-xs",children:[e.jsx(k,{value:t,onChange:a,placeholder:"Seleccionar fecha..."}),e.jsxs("p",{className:"text-xs text-gray-500",children:["Valor: ",t??"—"]})]})}},_={render:()=>{const[t,a]=r.useState();return e.jsx(k,{value:t,onChange:a,label:"Fecha de nacimiento",className:"max-w-xs"})}},H={render:()=>{const[t,a]=r.useState(),[s,o]=r.useState(),[n,l]=r.useState();return e.jsxs("div",{className:"flex items-end gap-4",children:[e.jsx(k,{value:t,onChange:a,size:"sm",placeholder:"Small",className:"w-48"}),e.jsx(k,{value:s,onChange:o,size:"md",placeholder:"Medium",className:"w-52"}),e.jsx(k,{value:n,onChange:l,size:"lg",placeholder:"Large",className:"w-56"})]})}},$={render:()=>{const[t,a]=r.useState(""),[s,o]=r.useState(""),[n,l]=r.useState(),i=[t,s,n].filter(Boolean).length,d=()=>{a(""),o(""),l(void 0)};return e.jsxs(S,{activeCount:i,onClearAll:d,children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5",children:"ID"}),e.jsx("input",{type:"text",value:t,onChange:c=>a(c.target.value),placeholder:"Ej: 001",className:"w-full h-9 px-3 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5",children:"Nombre"}),e.jsx("input",{type:"text",value:s,onChange:c=>o(c.target.value),placeholder:"Buscar por nombre...",className:"w-full h-9 px-3 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-blue-500"})]}),e.jsx(k,{value:n,onChange:l,label:"Fecha",size:"sm"})]})}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = useState<string | undefined>();
    return <FilterSelect options={proyectos} value={val} onChange={setVal} placeholder="Proyecto" icon={<FolderOpen className="w-4 h-4" />} />;
  }
}`,...B.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
    return <div className="flex flex-wrap gap-4">
        <FilterSelect options={opts} value={v1} onChange={setV1} variant="default" placeholder="Default" />
        <FilterSelect options={opts} value={v2} onChange={setV2} variant="filled" placeholder="Filled" />
        <FilterSelect options={opts} value={v3} onChange={setV3} variant="ghost" placeholder="Ghost" />
      </div>;
  }
}`,...A.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [v1, setV1] = useState<string | undefined>();
    const [v2, setV2] = useState<string | undefined>();
    const [v3, setV3] = useState<string | undefined>();
    const opts = [{
      value: "a",
      label: "Opción"
    }];
    return <div className="flex items-end gap-4">
        <FilterSelect options={opts} value={v1} onChange={setV1} size="sm" placeholder="Small" />
        <FilterSelect options={opts} value={v2} onChange={setV2} size="md" placeholder="Medium" />
        <FilterSelect options={opts} value={v3} onChange={setV3} size="lg" placeholder="Large" />
      </div>;
  }
}`,...D.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = useState("");
    return <div className="space-y-2">
        <FilterSearch value={val} onChange={setVal} placeholder="Buscar empleado..." />
        <p className="text-xs text-gray-500">Valor (debounced): "{val}"</p>
      </div>;
  }
}`,...z.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [from, setFrom] = useState<string | undefined>();
    const [to, setTo] = useState<string | undefined>();
    return <div className="space-y-2">
        <FilterDateRange from={from} to={to} onChange={(f, t) => {
        setFrom(f);
        setTo(t);
      }} />
        <p className="text-xs text-gray-500">Desde: {from ?? "—"} / Hasta: {to ?? "—"}</p>
      </div>;
  }
}`,...E.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
    return <div className="space-y-4">
        <FilterBar activeCount={activeCount} onClearAll={clearAll}>
          <FilterSearch value={busqueda} onChange={setBusqueda} placeholder="Buscar..." className="w-52" />
          <FilterSelect options={proyectos} value={proyecto} onChange={setProyecto} placeholder="Proyecto" icon={<FolderOpen className="w-4 h-4" />} isSearchable />
          <FilterSelect options={areas} value={area} onChange={setArea} placeholder="Área" icon={<Building2 className="w-4 h-4" />} />
        </FilterBar>

        <FilterChips options={estadoOpts} value={estados} onChange={setEstados} label="Estado" />

        <FilterDateRange from={from} to={to} onChange={(f, t) => {
        setFrom(f);
        setTo(t);
      }} />

        <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 text-xs font-mono text-gray-600 dark:text-gray-400">
          <pre>{JSON.stringify({
            proyecto,
            area,
            busqueda,
            estados,
            from,
            to
          }, null, 2)}</pre>
        </div>
      </div>;
  }
}`,...L.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
    return <div className="space-y-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">Haz click en el botón para abrir los filtros:</p>
        <FilterButton activeCount={activeCount} onClearAll={clearAll}>
          <div>
            <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">ID</label>
            <input type="text" value={id} onChange={e => setId(e.target.value)} placeholder="Ej: 001" className="w-full h-9 px-3 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">Nombre</label>
            <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Buscar por nombre..." className="w-full h-9 px-3 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-blue-500" />
          </div>
          <FilterDateRange from={from} to={to} onChange={(f, t) => {
          setFrom(f);
          setTo(t);
        }} size="sm" />
        </FilterButton>

        {activeCount > 0 && <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800 text-xs font-mono text-gray-600 dark:text-gray-400">
            <pre>{JSON.stringify({
            id,
            nombre,
            from,
            to
          }, null, 2)}</pre>
          </div>}
      </div>;
  }
}`,...P.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
    return <FilterButton activeCount={activeCount} onClearAll={clearAll} label="Filtrar" panelWidth="360px">
        <FilterSelect options={proyectos} value={proyecto} onChange={setProyecto} placeholder="Seleccionar proyecto" label="Proyecto" icon={<FolderOpen className="w-4 h-4" />} isSearchable />
        <FilterSelect options={areas} value={area} onChange={setArea} placeholder="Seleccionar área" label="Área" />
        <FilterSelect options={estados} value={estado} onChange={setEstado} placeholder="Seleccionar estado" label="Estado" />
      </FilterButton>;
  }
}`,...R.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [busqueda, setBusqueda] = useState("");
    const [from, setFrom] = useState<string | undefined>();
    const [to, setTo] = useState<string | undefined>();
    const activeCount = [busqueda, from, to].filter(Boolean).length;
    return <div className="flex justify-end">
        <FilterButton activeCount={activeCount} onClearAll={() => {
        setBusqueda("");
        setFrom(undefined);
        setTo(undefined);
      }} align="right">
          <FilterSearch value={busqueda} onChange={setBusqueda} placeholder="Buscar..." size="sm" />
          <FilterDateRange from={from} to={to} onChange={(f, t) => {
          setFrom(f);
          setTo(t);
        }} size="sm" />
        </FilterButton>
      </div>;
  }
}`,...O.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [fecha, setFecha] = useState<string | undefined>();
    return <div className="space-y-3 max-w-xs">
        <FilterDate value={fecha} onChange={setFecha} placeholder="Seleccionar fecha..." />
        <p className="text-xs text-gray-500">Valor: {fecha ?? "—"}</p>
      </div>;
  }
}`,...M.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [fecha, setFecha] = useState<string | undefined>();
    return <FilterDate value={fecha} onChange={setFecha} label="Fecha de nacimiento" className="max-w-xs" />;
  }
}`,..._.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [f1, setF1] = useState<string | undefined>();
    const [f2, setF2] = useState<string | undefined>();
    const [f3, setF3] = useState<string | undefined>();
    return <div className="flex items-end gap-4">
        <FilterDate value={f1} onChange={setF1} size="sm" placeholder="Small" className="w-48" />
        <FilterDate value={f2} onChange={setF2} size="md" placeholder="Medium" className="w-52" />
        <FilterDate value={f3} onChange={setF3} size="lg" placeholder="Large" className="w-56" />
      </div>;
  }
}`,...H.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
    return <FilterButton activeCount={activeCount} onClearAll={clearAll}>
        <div>
          <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">ID</label>
          <input type="text" value={id} onChange={e => setId(e.target.value)} placeholder="Ej: 001" className="w-full h-9 px-3 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-blue-500" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">Nombre</label>
          <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Buscar por nombre..." className="w-full h-9 px-3 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-blue-500" />
        </div>
        <FilterDate value={fecha} onChange={setFecha} label="Fecha" size="sm" />
      </FilterButton>;
  }
}`,...$.parameters?.docs?.source}}};const Ae=["SelectBasico","SelectConBusqueda","SelectVariantes","SelectTamaños","Busqueda","RangoFechas","ChipsMultiSelect","BarraCompleta","BotonFiltroBasico","BotonFiltroConSelects","BotonFiltroAlineadoDerecha","FechaSimple","FechaConLabel","FechaTamaños","FechaEnBotonFiltro"];export{L as BarraCompleta,O as BotonFiltroAlineadoDerecha,P as BotonFiltroBasico,R as BotonFiltroConSelects,z as Busqueda,I as ChipsMultiSelect,_ as FechaConLabel,$ as FechaEnBotonFiltro,M as FechaSimple,H as FechaTamaños,E as RangoFechas,B as SelectBasico,V as SelectConBusqueda,D as SelectTamaños,A as SelectVariantes,Ae as __namedExportsOrder,Ve as default};
