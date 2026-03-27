import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as t}from"./iframe-DTzrpb2v.js";import{r as S}from"./index-B7-UdLj-.js";import{c as k}from"./cn-BQHNewu7.js";import{X as M}from"./x-DNarHMw2.js";import{B as o}from"./Button-BU_J3Vv8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B3XRPXJV.js";import"./createLucideIcon-D-Eaw1KF.js";import"./index-BE5fGFUm.js";import"./loader-circle-BGE3xZRa.js";const B={sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg",xl:"max-w-xl",full:"max-w-full mx-4"},l=({open:n,onClose:r,title:a,description:x,children:f,footer:g,size:h="md",closeOnBackdrop:b=!0,showCloseButton:y=!0,className:j})=>{const v=t.useRef(null);if(t.useEffect(()=>{if(!n)return;const s=C=>{C.key==="Escape"&&r()};return document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)},[n,r]),t.useEffect(()=>(n?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[n]),!n)return null;const z=s=>{b&&s.target===s.currentTarget&&r()};return S.createPortal(e.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":typeof a=="string"?a:void 0,className:"fixed inset-0 z-50 flex items-center justify-center p-4",onClick:z,children:[e.jsx("div",{className:"absolute inset-0 bg-black/40 backdrop-blur-sm animate-in fade-in duration-150"}),e.jsxs("div",{ref:v,className:k("relative z-10 w-full flex flex-col","bg-white dark:bg-gray-900","rounded-2xl shadow-2xl","animate-in zoom-in-95 fade-in duration-150",B[h],j),children:[(a||y)&&e.jsxs("div",{className:"flex items-start justify-between gap-4 px-6 py-4 border-b border-gray-100 dark:border-gray-700",children:[e.jsxs("div",{className:"flex flex-col gap-0.5 min-w-0",children:[a&&e.jsx("h2",{className:"font-semibold text-gray-900 dark:text-white text-base leading-tight",children:a}),x&&e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 leading-snug",children:x})]}),y&&e.jsx("button",{onClick:r,className:"shrink-0 p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-700 transition-all duration-150","aria-label":"Cerrar",children:e.jsx(M,{size:18})})]}),f&&e.jsx("div",{className:"px-6 py-4 flex-1 overflow-y-auto",children:f}),g&&e.jsx("div",{className:"flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-100 dark:border-gray-700",children:g})]})]}),document.body)};l.displayName="Modal";const T={title:"Components/Modal",component:l,parameters:{layout:"centered",docs:{description:{component:"Modal con portal React, backdrop blur, cierre por tecla Escape o clic exterior, bloqueo de scroll y 5 tamaños. Footer configurable."}}},argTypes:{size:{control:"select",options:["sm","md","lg","xl","full"],description:"Ancho máximo del modal",table:{category:"Variantes",defaultValue:{summary:"md"}}},closeOnBackdrop:{control:"boolean",description:"Cerrar al hacer clic fuera",table:{category:"Layout",defaultValue:{summary:"true"}}},showCloseButton:{control:"boolean",description:"Mostrar botón X",table:{category:"Layout",defaultValue:{summary:"true"}}},title:{control:"text",table:{category:"Contenido"}},description:{control:"text",table:{category:"Contenido"}}}},u=n=>{const[r,a]=t.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"primary",onClick:()=>a(!0),children:"Abrir modal"}),e.jsx(l,{...n,open:r,onClose:()=>a(!1)})]})},i={render:n=>e.jsx(u,{...n,title:"Título del modal",description:"Descripción opcional del modal.",footer:e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"ghost",size:"sm",onClick:()=>{},children:"Cancelar"}),e.jsx(o,{variant:"primary",size:"sm",children:"Confirmar"})]}),children:e.jsx("p",{style:{fontSize:14,color:"#374151"},children:"Aquí va el contenido principal del modal."})})},d={name:"Size · sm",render:()=>e.jsx(u,{size:"sm",title:"Modal pequeño",children:e.jsx("p",{style:{fontSize:14,color:"#374151"},children:"Contenido compacto."})})},c={name:"Size · lg",render:()=>e.jsx(u,{size:"lg",title:"Modal grande",description:"Con más espacio para contenido.",children:e.jsx("p",{style:{fontSize:14,color:"#374151"},children:"Contenido extenso con más ancho disponible."})})},m={name:"Use case · Confirm delete",render:()=>{const[n,r]=t.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"danger",onClick:()=>r(!0),children:"Eliminar registro"}),e.jsx(l,{open:n,onClose:()=>r(!1),size:"sm",title:"¿Eliminar registro?",description:"Esta acción no se puede deshacer.",footer:e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"ghost",size:"sm",onClick:()=>r(!1),children:"Cancelar"}),e.jsx(o,{variant:"danger",size:"sm",onClick:()=>r(!1),children:"Sí, eliminar"})]}),children:e.jsx("p",{style:{fontSize:14,color:"#374151"},children:"Se eliminarán todos los datos asociados a este registro de forma permanente."})})]})}},p={name:"Use case · Form modal",render:()=>{const[n,r]=t.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"primary",onClick:()=>r(!0),children:"Nuevo usuario"}),e.jsx(l,{open:n,onClose:()=>r(!1),title:"Crear usuario",description:"Completa los datos para agregar un nuevo usuario.",footer:e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"ghost",size:"sm",onClick:()=>r(!1),children:"Cancelar"}),e.jsx(o,{variant:"primary",size:"sm",children:"Crear"})]}),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsx("label",{style:{fontSize:13,fontWeight:600,color:"#374151"},children:"Nombre"}),e.jsx("input",{style:{border:"1px solid #d1d5db",borderRadius:10,padding:"8px 12px",fontSize:14,outline:"none"},placeholder:"Juan Pérez"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsx("label",{style:{fontSize:13,fontWeight:600,color:"#374151"},children:"Correo"}),e.jsx("input",{style:{border:"1px solid #d1d5db",borderRadius:10,padding:"8px 12px",fontSize:14,outline:"none"},placeholder:"juan@ejemplo.com",type:"email"})]})]})})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <ModalDemo {...args} title="Título del modal" description="Descripción opcional del modal." footer={<>\r
          <Button variant="ghost" size="sm" onClick={() => {}}>Cancelar</Button>\r
          <Button variant="primary" size="sm">Confirmar</Button>\r
        </>}>\r
      <p style={{
      fontSize: 14,
      color: "#374151"
    }}>Aquí va el contenido principal del modal.</p>\r
    </ModalDemo>
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Size · sm",
  render: () => <ModalDemo size="sm" title="Modal pequeño">\r
      <p style={{
      fontSize: 14,
      color: "#374151"
    }}>Contenido compacto.</p>\r
    </ModalDemo>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Size · lg",
  render: () => <ModalDemo size="lg" title="Modal grande" description="Con más espacio para contenido.">\r
      <p style={{
      fontSize: 14,
      color: "#374151"
    }}>Contenido extenso con más ancho disponible.</p>\r
    </ModalDemo>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Use case · Confirm delete",
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <Button variant="danger" onClick={() => setOpen(true)}>Eliminar registro</Button>\r
        <Modal open={open} onClose={() => setOpen(false)} size="sm" title="¿Eliminar registro?" description="Esta acción no se puede deshacer." footer={<>\r
              <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>Cancelar</Button>\r
              <Button variant="danger" size="sm" onClick={() => setOpen(false)}>Sí, eliminar</Button>\r
            </>}>\r
          <p style={{
          fontSize: 14,
          color: "#374151"
        }}>Se eliminarán todos los datos asociados a este registro de forma permanente.</p>\r
        </Modal>\r
      </>;
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Use case · Form modal",
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <Button variant="primary" onClick={() => setOpen(true)}>Nuevo usuario</Button>\r
        <Modal open={open} onClose={() => setOpen(false)} title="Crear usuario" description="Completa los datos para agregar un nuevo usuario." footer={<>\r
              <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>Cancelar</Button>\r
              <Button variant="primary" size="sm">Crear</Button>\r
            </>}>\r
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 12
        }}>\r
            <div style={{
            display: "flex",
            flexDirection: "column",
            gap: 4
          }}>\r
              <label style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#374151"
            }}>Nombre</label>\r
              <input style={{
              border: "1px solid #d1d5db",
              borderRadius: 10,
              padding: "8px 12px",
              fontSize: 14,
              outline: "none"
            }} placeholder="Juan Pérez" />\r
            </div>\r
            <div style={{
            display: "flex",
            flexDirection: "column",
            gap: 4
          }}>\r
              <label style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#374151"
            }}>Correo</label>\r
              <input style={{
              border: "1px solid #d1d5db",
              borderRadius: 10,
              padding: "8px 12px",
              fontSize: 14,
              outline: "none"
            }} placeholder="juan@ejemplo.com" type="email" />\r
            </div>\r
          </div>\r
        </Modal>\r
      </>;
  }
}`,...p.parameters?.docs?.source}}};const U=["Playground","SizeSm","SizeLg","ConfirmDelete","FormModal"];export{m as ConfirmDelete,p as FormModal,i as Playground,c as SizeLg,d as SizeSm,U as __namedExportsOrder,T as default};
