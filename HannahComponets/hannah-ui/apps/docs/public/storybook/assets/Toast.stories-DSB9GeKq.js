import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as a}from"./iframe-vHIwjOwQ.js";import{r as R}from"./index-D09TOI3J.js";import{c as k}from"./cn-C1oRmgnl.js";import{X as L}from"./x-KLBMarr-.js";import{I as z}from"./info-DJRSzZyo.js";import{L as _}from"./loader-circle-C1dUG3Ou.js";import{T as q}from"./triangle-alert-DGtE15Lw.js";import{C as $,a as F}from"./circle-x-ujsON0m5.js";import{B as i}from"./Button-p-fQk3ph.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BvEP04iH.js";import"./bundle-mjs-Ce1ZTWB2.js";import"./createLucideIcon-C-Otocs2.js";import"./index-Bj1Z-dc7.js";const W=a.createContext(null);function u(){const r=a.useContext(W);if(!r)throw new Error("useToast must be used inside <ToastProvider>");return r}let U=0;const O=()=>`toast-${++U}-${Date.now()}`,X={success:4e3,error:6e3,warning:5e3,info:4e3,loading:0,default:4e3},G={success:e.jsx(F,{size:16}),error:e.jsx($,{size:16}),warning:e.jsx(q,{size:16}),info:e.jsx(z,{size:16}),loading:e.jsx(_,{size:16,className:"animate-spin"}),default:e.jsx(z,{size:16})},H={success:"border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/60",error:"border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/60",warning:"border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/60",info:"border-sky-200 bg-sky-50 dark:border-sky-800 dark:bg-sky-950/60",loading:"border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900",default:"border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"},A={success:"text-emerald-500 dark:text-emerald-400",error:"text-red-500 dark:text-red-400",warning:"text-amber-500 dark:text-amber-400",info:"text-sky-500 dark:text-sky-400",loading:"text-gray-500 dark:text-gray-400",default:"text-gray-500 dark:text-gray-400"},J={success:"bg-emerald-400 dark:bg-emerald-500",error:"bg-red-400 dark:bg-red-500",warning:"bg-amber-400 dark:bg-amber-500",info:"bg-sky-400 dark:bg-sky-500",loading:"bg-gray-300 dark:bg-gray-600",default:"bg-gray-300 dark:bg-gray-600"},K={"top-left":"top-4 left-4 items-start","top-center":"top-4 left-1/2 -translate-x-1/2 items-center","top-right":"top-4 right-4 items-end","bottom-left":"bottom-4 left-4 items-start","bottom-center":"bottom-4 left-1/2 -translate-x-1/2 items-center","bottom-right":"bottom-4 right-4 items-end"},Q=({item:r,onDismiss:n,position:s,closeAriaLabel:c="Cerrar notificación"})=>{const[f,x]=a.useState(100),[d,I]=a.useState(!1),[p,N]=a.useState(!1),m=a.useRef(null),v=a.useRef(Date.now()),t=a.useRef(r.duration),o=a.useCallback(()=>{p||(N(!0),setTimeout(()=>n(r.id),280))},[p,r.id,n]);a.useEffect(()=>{const b=setTimeout(()=>I(!0),10);return()=>clearTimeout(b)},[]),a.useEffect(()=>{if(r.duration===0)return;const b=50;return m.current=setInterval(()=>{const h=Date.now()-v.current,M=Math.max(0,100-h/r.duration*100);x(M),M===0&&o()},b),()=>{m.current&&clearInterval(m.current)}},[r.duration,o]);const g=()=>{r.duration===0||!m.current||(clearInterval(m.current),t.current=f/100*r.duration)},V=()=>{r.duration!==0&&(v.current=Date.now()-(r.duration-t.current),m.current=setInterval(()=>{const b=Date.now()-v.current,h=Math.max(0,100-b/r.duration*100);x(h),h===0&&o()},50))},y=s.startsWith("top");return e.jsxs("div",{onMouseEnter:g,onMouseLeave:V,role:"status","aria-live":"polite",className:k("relative w-80 rounded-xl border shadow-lg overflow-hidden","transition-all duration-300 ease-out",H[r.variant],d&&!p?"opacity-100 translate-y-0 scale-100":p?y?"opacity-0 -translate-y-2 scale-95":"opacity-0 translate-y-2 scale-95":y?"opacity-0 -translate-y-4 scale-95":"opacity-0 translate-y-4 scale-95"),children:[e.jsxs("div",{className:"flex items-start gap-3 px-4 py-3",children:[e.jsx("span",{className:k("shrink-0 mt-0.5",A[r.variant]),children:r.icon??G[r.variant]}),e.jsxs("div",{className:"flex-1 min-w-0",children:[r.title&&e.jsx("p",{className:"text-sm font-semibold text-gray-900 dark:text-white leading-snug",children:r.title}),r.description&&e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 leading-relaxed mt-0.5",children:r.description}),r.action&&e.jsx("button",{onClick:()=>{r.action.onClick(),o()},className:k("mt-2 text-xs font-semibold underline underline-offset-2","transition-opacity hover:opacity-70",A[r.variant]),children:r.action.label})]}),r.dismissible&&e.jsx("button",{onClick:o,className:"shrink-0 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors mt-0.5","aria-label":c,children:e.jsx(L,{size:14})})]}),r.duration>0&&e.jsx("div",{className:"h-0.5 w-full bg-black/5 dark:bg-white/5",children:e.jsx("div",{className:k("h-full transition-none",J[r.variant]),style:{width:`${f}%`}})})]})},l=({children:r,position:n="bottom-right",maxToasts:s=5,closeAriaLabel:c="Cerrar notificación"})=>{const[f,x]=a.useState([]),d=a.useCallback(t=>{const o=t.variant??"default",g={id:t.id??O(),title:t.title,description:t.description,variant:o,duration:t.duration??X[o],action:t.action,icon:t.icon,dismissible:t.dismissible??!0,createdAt:Date.now()};return x(V=>{const y=V.filter(h=>h.id!==g.id);return[g,...y].slice(0,s)}),g.id},[s]),I=a.useCallback(t=>d(typeof t=="string"?{title:t}:t),[d]),p=a.useCallback(t=>{x(o=>o.filter(g=>g.id!==t))},[]),N=a.useCallback(()=>x([]),[]),m={toast:I,success:(t,o)=>d({...o,title:t,variant:"success"}),error:(t,o)=>d({...o,title:t,variant:"error"}),warning:(t,o)=>d({...o,title:t,variant:"warning"}),info:(t,o)=>d({...o,title:t,variant:"info"}),loading:(t,o)=>d({...o,title:t,variant:"loading"}),dismiss:p,dismissAll:N},v=n.startsWith("bottom");return e.jsxs(W.Provider,{value:m,children:[r,R.createPortal(e.jsx("div",{className:k("fixed z-[9999] flex flex-col pointer-events-none",K[n],v?"flex-col-reverse gap-2":"flex-col gap-2"),children:f.map(t=>e.jsx("div",{className:"pointer-events-auto",children:e.jsx(Q,{item:t,onDismiss:p,position:n,closeAriaLabel:c})},t.id))}),document.body)]})};l.__docgenInfo={description:"",methods:[],displayName:"ToastProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:`| "top-left" | "top-center" | "top-right"
| "bottom-left" | "bottom-center" | "bottom-right"`,elements:[{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"bottom-right"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},maxToasts:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}},closeAriaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Cerrar notificación"',computed:!1}}}};const pe={title:"Components/Toast",parameters:{layout:"centered",docs:{description:{component:"Sistema de notificaciones con stack, progress bar animada, pausa en hover, acciones y 6 variantes. Usa `<ToastProvider>` en el root y `useToast()` en cualquier componente hijo."}}}},T={name:"Variant · Success",render:()=>{const r=()=>{const{success:n}=u();return e.jsx(i,{onClick:()=>n("Cambios guardados",{description:"Tu información fue actualizada correctamente."}),children:"Mostrar Success"})};return e.jsx(l,{position:"bottom-right",children:e.jsx(r,{})})}},j={name:"Variant · Error",render:()=>{const r=()=>{const{error:n}=u();return e.jsx(i,{variant:"danger",onClick:()=>n("Error al guardar",{description:"Revisa tu conexión e intenta de nuevo."}),children:"Mostrar Error"})};return e.jsx(l,{position:"bottom-right",children:e.jsx(r,{})})}},C={name:"Variant · Warning",render:()=>{const r=()=>{const{warning:n}=u();return e.jsx(i,{variant:"warning",onClick:()=>n("Sesión por expirar",{description:"Tu sesión expirará en 5 minutos."}),children:"Mostrar Warning"})};return e.jsx(l,{position:"bottom-right",children:e.jsx(r,{})})}},D={name:"Variant · Info",render:()=>{const r=()=>{const{info:n}=u();return e.jsx(i,{variant:"ghost",onClick:()=>n("Nueva actualización disponible",{description:"Versión 2.1.0 con mejoras de rendimiento."}),children:"Mostrar Info"})};return e.jsx(l,{position:"bottom-right",children:e.jsx(r,{})})}},P={name:"Variant · Loading",render:()=>{const r=()=>{const{loading:n,dismiss:s}=u();let c="";return e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(i,{onClick:()=>{c=n("Subiendo archivo...")},children:"Iniciar carga"}),e.jsx(i,{variant:"ghost",onClick:()=>s(c),children:"Cancelar"})]})};return e.jsx(l,{position:"bottom-right",children:e.jsx(r,{})})}},w={name:"With action",render:()=>{const r=()=>{const{toast:n}=u();return e.jsx(i,{onClick:()=>n({title:"Elemento eliminado",description:"El registro fue removido de la lista.",variant:"default",action:{label:"Deshacer",onClick:()=>alert("¡Deshecho!")}}),children:"Eliminar con deshacer"})};return e.jsx(l,{position:"bottom-right",children:e.jsx(r,{})})}},S={name:"Stack · Multiple toasts",render:()=>{const r=()=>{const{success:n,error:s,warning:c,info:f}=u();return e.jsx(i,{onClick:()=>{f("Iniciando proceso..."),setTimeout(()=>c("Verificando permisos..."),300),setTimeout(()=>n("¡Proceso completado!",{description:"Todos los archivos fueron procesados."}),600),setTimeout(()=>s("Fallo en 1 archivo",{description:"archivo_3.csv no pudo procesarse."}),900)},children:"Mostrar stack"})};return e.jsx(l,{position:"bottom-right",children:e.jsx(r,{})})}},B={name:"Positions · All",render:()=>{const r=["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"],n=({position:s})=>{const{success:c}=u();return e.jsx(i,{size:"sm",onClick:()=>c(`Posición: ${s}`),children:s})};return e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:r.map(s=>e.jsx(l,{position:s,children:e.jsx(n,{position:s})},s))})}},E={name:"Persistent (no auto-dismiss)",render:()=>{const r=()=>{const{toast:n,dismissAll:s}=u();return e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(i,{onClick:()=>n({title:"Actualización requerida",description:"Debes reiniciar la app para aplicar los cambios.",variant:"warning",duration:0,action:{label:"Reiniciar ahora",onClick:()=>{}}}),children:"Toast persistente"}),e.jsx(i,{variant:"ghost",onClick:s,children:"Cerrar todos"})]})};return e.jsx(l,{position:"bottom-right",children:e.jsx(r,{})})}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Variant · Success",
  render: () => {
    const Demo = () => {
      const {
        success
      } = useToast();
      return <Button onClick={() => success("Cambios guardados", {
        description: "Tu información fue actualizada correctamente."
      })}>
          Mostrar Success
        </Button>;
    };
    return <ToastProvider position="bottom-right"><Demo /></ToastProvider>;
  }
}`,...T.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Variant · Error",
  render: () => {
    const Demo = () => {
      const {
        error
      } = useToast();
      return <Button variant="danger" onClick={() => error("Error al guardar", {
        description: "Revisa tu conexión e intenta de nuevo."
      })}>
          Mostrar Error
        </Button>;
    };
    return <ToastProvider position="bottom-right"><Demo /></ToastProvider>;
  }
}`,...j.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Variant · Warning",
  render: () => {
    const Demo = () => {
      const {
        warning
      } = useToast();
      return <Button variant="warning" onClick={() => warning("Sesión por expirar", {
        description: "Tu sesión expirará en 5 minutos."
      })}>
          Mostrar Warning
        </Button>;
    };
    return <ToastProvider position="bottom-right"><Demo /></ToastProvider>;
  }
}`,...C.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Variant · Info",
  render: () => {
    const Demo = () => {
      const {
        info
      } = useToast();
      return <Button variant="ghost" onClick={() => info("Nueva actualización disponible", {
        description: "Versión 2.1.0 con mejoras de rendimiento."
      })}>
          Mostrar Info
        </Button>;
    };
    return <ToastProvider position="bottom-right"><Demo /></ToastProvider>;
  }
}`,...D.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
      }}>
          <Button onClick={() => {
          id = loading("Subiendo archivo...");
        }}>
            Iniciar carga
          </Button>
          <Button variant="ghost" onClick={() => dismiss(id)}>
            Cancelar
          </Button>
        </div>;
    };
    return <ToastProvider position="bottom-right"><Demo /></ToastProvider>;
  }
}`,...P.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
      })}>
          Eliminar con deshacer
        </Button>;
    };
    return <ToastProvider position="bottom-right"><Demo /></ToastProvider>;
  }
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
      }}>
          Mostrar stack
        </Button>;
    };
    return <ToastProvider position="bottom-right"><Demo /></ToastProvider>;
  }
}`,...S.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "Positions · All",
  render: () => {
    const positions: DemoProps["position"][] = ["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"];
    const Demo = ({
      position
    }: DemoProps) => {
      const {
        success
      } = useToast();
      return <Button size="sm" onClick={() => success(\`Posición: \${position}\`)}>
          {position}
        </Button>;
    };
    return <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }}>
        {positions.map(pos => <ToastProvider key={pos} position={pos}>
            <Demo position={pos} />
          </ToastProvider>)}
      </div>;
  }
}`,...B.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
      }}>
          <Button onClick={() => toast({
          title: "Actualización requerida",
          description: "Debes reiniciar la app para aplicar los cambios.",
          variant: "warning",
          duration: 0,
          action: {
            label: "Reiniciar ahora",
            onClick: () => {}
          }
        })}>
            Toast persistente
          </Button>
          <Button variant="ghost" onClick={dismissAll}>
            Cerrar todos
          </Button>
        </div>;
    };
    return <ToastProvider position="bottom-right"><Demo /></ToastProvider>;
  }
}`,...E.parameters?.docs?.source}}};const ge=["Success","Error","Warning","Info","Loading","WithAction","Stack","Positions","Persistent"];export{j as Error,D as Info,P as Loading,E as Persistent,B as Positions,S as Stack,T as Success,C as Warning,w as WithAction,ge as __namedExportsOrder,pe as default};
