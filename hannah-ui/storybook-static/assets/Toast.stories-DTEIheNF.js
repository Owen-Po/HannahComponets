import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as a}from"./iframe-DTzrpb2v.js";import{r as W}from"./index-B7-UdLj-.js";import{c as v}from"./cn-BQHNewu7.js";import{X as R}from"./x-DNarHMw2.js";import{I as V}from"./info-CR1jGMhd.js";import{L}from"./loader-circle-BGE3xZRa.js";import{T as _,C as $,a as q}from"./triangle-alert-Csb-Wykx.js";import{B as c}from"./Button-BU_J3Vv8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B3XRPXJV.js";import"./createLucideIcon-D-Eaw1KF.js";import"./index-BE5fGFUm.js";const A=a.createContext(null);function u(){const e=a.useContext(A);if(!e)throw new Error("useToast must be used inside <ToastProvider>");return e}let F=0;const U=()=>`toast-${++F}-${Date.now()}`,O={success:4e3,error:6e3,warning:5e3,info:4e3,loading:0,default:4e3},X={success:r.jsx(q,{size:16}),error:r.jsx($,{size:16}),warning:r.jsx(_,{size:16}),info:r.jsx(V,{size:16}),loading:r.jsx(L,{size:16,className:"animate-spin"}),default:r.jsx(V,{size:16})},G={success:"border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/60",error:"border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/60",warning:"border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/60",info:"border-sky-200 bg-sky-50 dark:border-sky-800 dark:bg-sky-950/60",loading:"border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900",default:"border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"},z={success:"text-emerald-500 dark:text-emerald-400",error:"text-red-500 dark:text-red-400",warning:"text-amber-500 dark:text-amber-400",info:"text-sky-500 dark:text-sky-400",loading:"text-gray-500 dark:text-gray-400",default:"text-gray-500 dark:text-gray-400"},H={success:"bg-emerald-400 dark:bg-emerald-500",error:"bg-red-400 dark:bg-red-500",warning:"bg-amber-400 dark:bg-amber-500",info:"bg-sky-400 dark:bg-sky-500",loading:"bg-gray-300 dark:bg-gray-600",default:"bg-gray-300 dark:bg-gray-600"},J={"top-left":"top-4 left-4 items-start","top-center":"top-4 left-1/2 -translate-x-1/2 items-center","top-right":"top-4 right-4 items-end","bottom-left":"bottom-4 left-4 items-start","bottom-center":"bottom-4 left-1/2 -translate-x-1/2 items-center","bottom-right":"bottom-4 right-4 items-end"},K=({item:e,onDismiss:n,position:s})=>{const[i,m]=a.useState(100),[d,E]=a.useState(!1),[g,I]=a.useState(!1),p=a.useRef(null),h=a.useRef(Date.now()),t=a.useRef(e.duration),o=a.useCallback(()=>{g||(I(!0),setTimeout(()=>n(e.id),280))},[g,e.id,n]);a.useEffect(()=>{const b=setTimeout(()=>E(!0),10);return()=>clearTimeout(b)},[]),a.useEffect(()=>{if(e.duration===0)return;const b=50;return p.current=setInterval(()=>{const f=Date.now()-h.current,M=Math.max(0,100-f/e.duration*100);m(M),M===0&&o()},b),()=>{p.current&&clearInterval(p.current)}},[e.duration,o]);const x=()=>{e.duration===0||!p.current||(clearInterval(p.current),t.current=i/100*e.duration)},N=()=>{e.duration!==0&&(h.current=Date.now()-(e.duration-t.current),p.current=setInterval(()=>{const b=Date.now()-h.current,f=Math.max(0,100-b/e.duration*100);m(f),f===0&&o()},50))},k=s.startsWith("top");return r.jsxs("div",{onMouseEnter:x,onMouseLeave:N,role:"status","aria-live":"polite",className:v("relative w-80 rounded-xl border shadow-lg overflow-hidden","transition-all duration-300 ease-out",G[e.variant],d&&!g?"opacity-100 translate-y-0 scale-100":g?k?"opacity-0 -translate-y-2 scale-95":"opacity-0 translate-y-2 scale-95":k?"opacity-0 -translate-y-4 scale-95":"opacity-0 translate-y-4 scale-95"),children:[r.jsxs("div",{className:"flex items-start gap-3 px-4 py-3",children:[r.jsx("span",{className:v("shrink-0 mt-0.5",z[e.variant]),children:e.icon??X[e.variant]}),r.jsxs("div",{className:"flex-1 min-w-0",children:[e.title&&r.jsx("p",{className:"text-sm font-semibold text-gray-900 dark:text-white leading-snug",children:e.title}),e.description&&r.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 leading-relaxed mt-0.5",children:e.description}),e.action&&r.jsx("button",{onClick:()=>{e.action.onClick(),o()},className:v("mt-2 text-xs font-semibold underline underline-offset-2","transition-opacity hover:opacity-70",z[e.variant]),children:e.action.label})]}),e.dismissible&&r.jsx("button",{onClick:o,className:"shrink-0 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors mt-0.5","aria-label":"Cerrar notificación",children:r.jsx(R,{size:14})})]}),e.duration>0&&r.jsx("div",{className:"h-0.5 w-full bg-black/5 dark:bg-white/5",children:r.jsx("div",{className:v("h-full transition-none",H[e.variant]),style:{width:`${i}%`}})})]})},l=({children:e,position:n="bottom-right",maxToasts:s=5})=>{const[i,m]=a.useState([]),d=a.useCallback(t=>{const o=t.variant??"default",x={id:t.id??U(),title:t.title,description:t.description,variant:o,duration:t.duration??O[o],action:t.action,icon:t.icon,dismissible:t.dismissible??!0,createdAt:Date.now()};return m(N=>{const k=N.filter(f=>f.id!==x.id);return[x,...k].slice(0,s)}),x.id},[s]),E=a.useCallback(t=>d(typeof t=="string"?{title:t}:t),[d]),g=a.useCallback(t=>{m(o=>o.filter(x=>x.id!==t))},[]),I=a.useCallback(()=>m([]),[]),p={toast:E,success:(t,o)=>d({...o,title:t,variant:"success"}),error:(t,o)=>d({...o,title:t,variant:"error"}),warning:(t,o)=>d({...o,title:t,variant:"warning"}),info:(t,o)=>d({...o,title:t,variant:"info"}),loading:(t,o)=>d({...o,title:t,variant:"loading"}),dismiss:g,dismissAll:I},h=n.startsWith("bottom");return r.jsxs(A.Provider,{value:p,children:[e,W.createPortal(r.jsx("div",{className:v("fixed z-[9999] flex flex-col pointer-events-none",J[n],h?"flex-col-reverse gap-2":"flex-col gap-2"),children:i.map(t=>r.jsx("div",{className:"pointer-events-auto",children:r.jsx(K,{item:t,onDismiss:g,position:n})},t.id))}),document.body)]})};l.__docgenInfo={description:"",methods:[],displayName:"ToastProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:`| "top-left" | "top-center" | "top-right"
| "bottom-left" | "bottom-center" | "bottom-right"`,elements:[{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"bottom-right"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},maxToasts:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}}}};const lr={title:"Components/Toast",parameters:{layout:"centered",docs:{description:{component:"Sistema de notificaciones con stack, progress bar animada, pausa en hover, acciones y 6 variantes. Usa `<ToastProvider>` en el root y `useToast()` en cualquier componente hijo."}}}},y={name:"Variant · Success",render:()=>{const e=()=>{const{success:n}=u();return r.jsx(c,{onClick:()=>n("Cambios guardados",{description:"Tu información fue actualizada correctamente."}),children:"Mostrar Success"})};return r.jsx(l,{position:"bottom-right",children:r.jsx(e,{})})}},T={name:"Variant · Error",render:()=>{const e=()=>{const{error:n}=u();return r.jsx(c,{variant:"danger",onClick:()=>n("Error al guardar",{description:"Revisa tu conexión e intenta de nuevo."}),children:"Mostrar Error"})};return r.jsx(l,{position:"bottom-right",children:r.jsx(e,{})})}},j={name:"Variant · Warning",render:()=>{const e=()=>{const{warning:n}=u();return r.jsx(c,{variant:"warning",onClick:()=>n("Sesión por expirar",{description:"Tu sesión expirará en 5 minutos."}),children:"Mostrar Warning"})};return r.jsx(l,{position:"bottom-right",children:r.jsx(e,{})})}},C={name:"Variant · Info",render:()=>{const e=()=>{const{info:n}=u();return r.jsx(c,{variant:"ghost",onClick:()=>n("Nueva actualización disponible",{description:"Versión 2.1.0 con mejoras de rendimiento."}),children:"Mostrar Info"})};return r.jsx(l,{position:"bottom-right",children:r.jsx(e,{})})}},D={name:"Variant · Loading",render:()=>{const e=()=>{const{loading:n,dismiss:s}=u();let i="";return r.jsxs("div",{style:{display:"flex",gap:8},children:[r.jsx(c,{onClick:()=>{i=n("Subiendo archivo...")},children:"Iniciar carga"}),r.jsx(c,{variant:"ghost",onClick:()=>s(i),children:"Cancelar"})]})};return r.jsx(l,{position:"bottom-right",children:r.jsx(e,{})})}},P={name:"With action",render:()=>{const e=()=>{const{toast:n}=u();return r.jsx(c,{onClick:()=>n({title:"Elemento eliminado",description:"El registro fue removido de la lista.",variant:"default",action:{label:"Deshacer",onClick:()=>alert("¡Deshecho!")}}),children:"Eliminar con deshacer"})};return r.jsx(l,{position:"bottom-right",children:r.jsx(e,{})})}},w={name:"Stack · Multiple toasts",render:()=>{const e=()=>{const{success:n,error:s,warning:i,info:m}=u();return r.jsx(c,{onClick:()=>{m("Iniciando proceso..."),setTimeout(()=>i("Verificando permisos..."),300),setTimeout(()=>n("¡Proceso completado!",{description:"Todos los archivos fueron procesados."}),600),setTimeout(()=>s("Fallo en 1 archivo",{description:"archivo_3.csv no pudo procesarse."}),900)},children:"Mostrar stack"})};return r.jsx(l,{position:"bottom-right",children:r.jsx(e,{})})}},S={name:"Positions · All",render:()=>{const e=["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"],n=({position:s})=>{const{success:i}=u();return r.jsx(c,{size:"sm",onClick:()=>i(`Posición: ${s}`),children:s})};return r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:e.map(s=>r.jsx(l,{position:s,children:r.jsx(n,{position:s})},s))})}},B={name:"Persistent (no auto-dismiss)",render:()=>{const e=()=>{const{toast:n,dismissAll:s}=u();return r.jsxs("div",{style:{display:"flex",gap:8},children:[r.jsx(c,{onClick:()=>n({title:"Actualización requerida",description:"Debes reiniciar la app para aplicar los cambios.",variant:"warning",duration:0,action:{label:"Reiniciar ahora",onClick:()=>{}}}),children:"Toast persistente"}),r.jsx(c,{variant:"ghost",onClick:s,children:"Cerrar todos"})]})};return r.jsx(l,{position:"bottom-right",children:r.jsx(e,{})})}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Variant · Success",
  render: () => {
    const Demo = () => {
      const {
        success
      } = useToast();
      return <Button onClick={() => success("Cambios guardados", {
        description: "Tu información fue actualizada correctamente."
      })}>\r
          Mostrar Success\r
        </Button>;
    };
    return <ToastProvider position="bottom-right"><Demo /></ToastProvider>;
  }
}`,...y.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Variant · Error",
  render: () => {
    const Demo = () => {
      const {
        error
      } = useToast();
      return <Button variant="danger" onClick={() => error("Error al guardar", {
        description: "Revisa tu conexión e intenta de nuevo."
      })}>\r
          Mostrar Error\r
        </Button>;
    };
    return <ToastProvider position="bottom-right"><Demo /></ToastProvider>;
  }
}`,...T.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Variant · Warning",
  render: () => {
    const Demo = () => {
      const {
        warning
      } = useToast();
      return <Button variant="warning" onClick={() => warning("Sesión por expirar", {
        description: "Tu sesión expirará en 5 minutos."
      })}>\r
          Mostrar Warning\r
        </Button>;
    };
    return <ToastProvider position="bottom-right"><Demo /></ToastProvider>;
  }
}`,...j.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Variant · Info",
  render: () => {
    const Demo = () => {
      const {
        info
      } = useToast();
      return <Button variant="ghost" onClick={() => info("Nueva actualización disponible", {
        description: "Versión 2.1.0 con mejoras de rendimiento."
      })}>\r
          Mostrar Info\r
        </Button>;
    };
    return <ToastProvider position="bottom-right"><Demo /></ToastProvider>;
  }
}`,...C.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Variant · Loading",
  render: () => {
    const Demo = () => {
      const {
        loading,
        dismiss
      } = useToast();
      let id = "";
      return <div style={{
        display: "flex",
        gap: 8
      }}>\r
          <Button onClick={() => {
          id = loading("Subiendo archivo...");
        }}>\r
            Iniciar carga\r
          </Button>\r
          <Button variant="ghost" onClick={() => dismiss(id)}>\r
            Cancelar\r
          </Button>\r
        </div>;
    };
    return <ToastProvider position="bottom-right"><Demo /></ToastProvider>;
  }
}`,...D.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: "With action",
  render: () => {
    const Demo = () => {
      const {
        toast
      } = useToast();
      return <Button onClick={() => toast({
        title: "Elemento eliminado",
        description: "El registro fue removido de la lista.",
        variant: "default",
        action: {
          label: "Deshacer",
          onClick: () => alert("¡Deshecho!")
        }
      })}>\r
          Eliminar con deshacer\r
        </Button>;
    };
    return <ToastProvider position="bottom-right"><Demo /></ToastProvider>;
  }
}`,...P.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Stack · Multiple toasts",
  render: () => {
    const Demo = () => {
      const {
        success,
        error,
        warning,
        info
      } = useToast();
      return <Button onClick={() => {
        info("Iniciando proceso...");
        setTimeout(() => warning("Verificando permisos..."), 300);
        setTimeout(() => success("¡Proceso completado!", {
          description: "Todos los archivos fueron procesados."
        }), 600);
        setTimeout(() => error("Fallo en 1 archivo", {
          description: "archivo_3.csv no pudo procesarse."
        }), 900);
      }}>\r
          Mostrar stack\r
        </Button>;
    };
    return <ToastProvider position="bottom-right"><Demo /></ToastProvider>;
  }
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Positions · All",
  render: () => {
    const positions: DemoProps["position"][] = ["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"];
    const Demo = ({
      position
    }: DemoProps) => {
      const {
        success
      } = useToast();
      return <Button size="sm" onClick={() => success(\`Posición: \${position}\`)}>\r
          {position}\r
        </Button>;
    };
    return <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }}>\r
        {positions.map(pos => <ToastProvider key={pos} position={pos}>\r
            <Demo position={pos} />\r
          </ToastProvider>)}\r
      </div>;
  }
}`,...S.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "Persistent (no auto-dismiss)",
  render: () => {
    const Demo = () => {
      const {
        toast,
        dismissAll
      } = useToast();
      return <div style={{
        display: "flex",
        gap: 8
      }}>\r
          <Button onClick={() => toast({
          title: "Actualización requerida",
          description: "Debes reiniciar la app para aplicar los cambios.",
          variant: "warning",
          duration: 0,
          action: {
            label: "Reiniciar ahora",
            onClick: () => {}
          }
        })}>\r
            Toast persistente\r
          </Button>\r
          <Button variant="ghost" onClick={dismissAll}>\r
            Cerrar todos\r
          </Button>\r
        </div>;
    };
    return <ToastProvider position="bottom-right"><Demo /></ToastProvider>;
  }
}`,...B.parameters?.docs?.source}}};const ur=["Success","Error","Warning","Info","Loading","WithAction","Stack","Positions","Persistent"];export{T as Error,C as Info,D as Loading,B as Persistent,S as Positions,w as Stack,y as Success,j as Warning,P as WithAction,ur as __namedExportsOrder,lr as default};
