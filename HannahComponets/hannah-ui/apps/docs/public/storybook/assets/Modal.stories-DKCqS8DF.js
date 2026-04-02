import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as t}from"./iframe-vHIwjOwQ.js";import{r as k}from"./index-D09TOI3J.js";import{c as M}from"./cn-C1oRmgnl.js";import{X as B}from"./x-KLBMarr-.js";import{B as r}from"./Button-p-fQk3ph.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BvEP04iH.js";import"./bundle-mjs-Ce1ZTWB2.js";import"./createLucideIcon-C-Otocs2.js";import"./index-Bj1Z-dc7.js";import"./loader-circle-C1dUG3Ou.js";const D={sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg",xl:"max-w-xl",full:"max-w-full mx-4"},i=({open:o,onClose:n,title:a,description:x,children:f,footer:g,size:h="md",closeOnBackdrop:b=!0,showCloseButton:y=!0,closeAriaLabel:j="Cerrar",className:v})=>{const z=t.useRef(null);if(t.useEffect(()=>{if(!o)return;const s=S=>{S.key==="Escape"&&n()};return document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)},[o,n]),t.useEffect(()=>(o?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[o]),!o)return null;const C=s=>{b&&s.target===s.currentTarget&&n()};return k.createPortal(e.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":typeof a=="string"?a:void 0,className:"fixed inset-0 z-50 flex items-center justify-center p-4",onClick:C,children:[e.jsx("div",{className:"absolute inset-0 bg-black/40 backdrop-blur-sm animate-in fade-in duration-150"}),e.jsxs("div",{ref:z,className:M("relative z-10 w-full flex flex-col","bg-white dark:bg-gray-900","rounded-2xl shadow-2xl","animate-in zoom-in-95 fade-in duration-150",D[h],v),children:[(a||y)&&e.jsxs("div",{className:"flex items-start justify-between gap-4 px-6 py-4 border-b border-gray-100 dark:border-gray-700",children:[e.jsxs("div",{className:"flex flex-col gap-0.5 min-w-0",children:[a&&e.jsx("h2",{className:"font-semibold text-gray-900 dark:text-white text-base leading-tight",children:a}),x&&e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 leading-snug",children:x})]}),y&&e.jsx("button",{onClick:n,className:"shrink-0 p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-700 transition-all duration-150","aria-label":j,children:e.jsx(B,{size:18})})]}),f&&e.jsx("div",{className:"px-6 py-4 flex-1 overflow-y-auto",children:f}),g&&e.jsx("div",{className:"flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-100 dark:border-gray-700",children:g})]})]}),document.body)};i.displayName="Modal";const V={title:"Components/Modal",component:i,parameters:{layout:"centered",docs:{description:{component:"Modal con portal React, backdrop blur, cierre por tecla Escape o clic exterior, bloqueo de scroll y 5 tamaños. Footer configurable."}}},argTypes:{size:{control:"select",options:["sm","md","lg","xl","full"],description:"Ancho máximo del modal",table:{category:"Variantes",defaultValue:{summary:"md"}}},closeOnBackdrop:{control:"boolean",description:"Cerrar al hacer clic fuera",table:{category:"Layout",defaultValue:{summary:"true"}}},showCloseButton:{control:"boolean",description:"Mostrar botón X",table:{category:"Layout",defaultValue:{summary:"true"}}},title:{control:"text",table:{category:"Contenido"}},description:{control:"text",table:{category:"Contenido"}}}},u=o=>{const[n,a]=t.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"primary",onClick:()=>a(!0),children:"Abrir modal"}),e.jsx(i,{...o,open:n,onClose:()=>a(!1)})]})},l={render:o=>e.jsx(u,{...o,title:"Título del modal",description:"Descripción opcional del modal.",footer:e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"ghost",size:"sm",onClick:()=>{},children:"Cancelar"}),e.jsx(r,{variant:"primary",size:"sm",children:"Confirmar"})]}),children:e.jsx("p",{style:{fontSize:14,color:"#374151"},children:"Aquí va el contenido principal del modal."})})},d={name:"Size · sm",render:()=>e.jsx(u,{size:"sm",title:"Modal pequeño",children:e.jsx("p",{style:{fontSize:14,color:"#374151"},children:"Contenido compacto."})})},c={name:"Size · lg",render:()=>e.jsx(u,{size:"lg",title:"Modal grande",description:"Con más espacio para contenido.",children:e.jsx("p",{style:{fontSize:14,color:"#374151"},children:"Contenido extenso con más ancho disponible."})})},m={name:"Use case · Confirm delete",render:()=>{const[o,n]=t.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"danger",onClick:()=>n(!0),children:"Eliminar registro"}),e.jsx(i,{open:o,onClose:()=>n(!1),size:"sm",title:"¿Eliminar registro?",description:"Esta acción no se puede deshacer.",footer:e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"ghost",size:"sm",onClick:()=>n(!1),children:"Cancelar"}),e.jsx(r,{variant:"danger",size:"sm",onClick:()=>n(!1),children:"Sí, eliminar"})]}),children:e.jsx("p",{style:{fontSize:14,color:"#374151"},children:"Se eliminarán todos los datos asociados a este registro de forma permanente."})})]})}},p={name:"Use case · Form modal",render:()=>{const[o,n]=t.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"primary",onClick:()=>n(!0),children:"Nuevo usuario"}),e.jsx(i,{open:o,onClose:()=>n(!1),title:"Crear usuario",description:"Completa los datos para agregar un nuevo usuario.",footer:e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"ghost",size:"sm",onClick:()=>n(!1),children:"Cancelar"}),e.jsx(r,{variant:"primary",size:"sm",children:"Crear"})]}),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsx("label",{style:{fontSize:13,fontWeight:600,color:"#374151"},children:"Nombre"}),e.jsx("input",{style:{border:"1px solid #d1d5db",borderRadius:10,padding:"8px 12px",fontSize:14,outline:"none"},placeholder:"Juan Pérez"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsx("label",{style:{fontSize:13,fontWeight:600,color:"#374151"},children:"Correo"}),e.jsx("input",{style:{border:"1px solid #d1d5db",borderRadius:10,padding:"8px 12px",fontSize:14,outline:"none"},placeholder:"juan@ejemplo.com",type:"email"})]})]})})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <ModalDemo {...args} title="Título del modal" description="Descripción opcional del modal." footer={<>
          <Button variant="ghost" size="sm" onClick={() => {}}>Cancelar</Button>
          <Button variant="primary" size="sm">Confirmar</Button>
        </>}>
      <p style={{
      fontSize: 14,
      color: "#374151"
    }}>Aquí va el contenido principal del modal.</p>
    </ModalDemo>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Size · sm",
  render: () => <ModalDemo size="sm" title="Modal pequeño">
      <p style={{
      fontSize: 14,
      color: "#374151"
    }}>Contenido compacto.</p>
    </ModalDemo>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Size · lg",
  render: () => <ModalDemo size="lg" title="Modal grande" description="Con más espacio para contenido.">
      <p style={{
      fontSize: 14,
      color: "#374151"
    }}>Contenido extenso con más ancho disponible.</p>
    </ModalDemo>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Use case · Confirm delete",
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="danger" onClick={() => setOpen(true)}>Eliminar registro</Button>
        <Modal open={open} onClose={() => setOpen(false)} size="sm" title="¿Eliminar registro?" description="Esta acción no se puede deshacer." footer={<>
              <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>Cancelar</Button>
              <Button variant="danger" size="sm" onClick={() => setOpen(false)}>Sí, eliminar</Button>
            </>}>
          <p style={{
          fontSize: 14,
          color: "#374151"
        }}>Se eliminarán todos los datos asociados a este registro de forma permanente.</p>
        </Modal>
      </>;
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Use case · Form modal",
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="primary" onClick={() => setOpen(true)}>Nuevo usuario</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="Crear usuario" description="Completa los datos para agregar un nuevo usuario." footer={<>
              <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>Cancelar</Button>
              <Button variant="primary" size="sm">Crear</Button>
            </>}>
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 12
        }}>
            <div style={{
            display: "flex",
            flexDirection: "column",
            gap: 4
          }}>
              <label style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#374151"
            }}>Nombre</label>
              <input style={{
              border: "1px solid #d1d5db",
              borderRadius: 10,
              padding: "8px 12px",
              fontSize: 14,
              outline: "none"
            }} placeholder="Juan Pérez" />
            </div>
            <div style={{
            display: "flex",
            flexDirection: "column",
            gap: 4
          }}>
              <label style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#374151"
            }}>Correo</label>
              <input style={{
              border: "1px solid #d1d5db",
              borderRadius: 10,
              padding: "8px 12px",
              fontSize: 14,
              outline: "none"
            }} placeholder="juan@ejemplo.com" type="email" />
            </div>
          </div>
        </Modal>
      </>;
  }
}`,...p.parameters?.docs?.source}}};const W=["Playground","SizeSm","SizeLg","ConfirmDelete","FormModal"];export{m as ConfirmDelete,p as FormModal,l as Playground,c as SizeLg,d as SizeSm,W as __namedExportsOrder,V as default};
