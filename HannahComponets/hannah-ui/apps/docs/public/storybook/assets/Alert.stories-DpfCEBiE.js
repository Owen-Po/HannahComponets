import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as a}from"./Alert-DppD7Afm.js";import"./iframe-vHIwjOwQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bj1Z-dc7.js";import"./bundle-mjs-Ce1ZTWB2.js";import"./cn-C1oRmgnl.js";import"./info-DJRSzZyo.js";import"./createLucideIcon-C-Otocs2.js";import"./circle-x-ujsON0m5.js";import"./triangle-alert-DGtE15Lw.js";import"./x-KLBMarr-.js";const w={title:"Components/Alert",component:a,parameters:{layout:"centered",docs:{description:{component:"Alerta informativa con 5 variantes (info, success, warning, danger, default), ícono automático, título opcional y botón de dismiss."}}},argTypes:{variant:{control:"select",options:["info","success","warning","danger","default"],description:"Variante de color e ícono",table:{category:"Variantes",defaultValue:{summary:"info"}}},title:{control:"text",table:{category:"Contenido"}},dismissible:{control:"boolean",description:"Muestra botón cerrar",table:{category:"Layout",defaultValue:{summary:"false"}}},children:{control:"text",table:{category:"Contenido"}}},args:{variant:"info",title:"Información",children:"Este es un mensaje informativo para el usuario.",dismissible:!1},decorators:[u=>e.jsx("div",{style:{width:420},children:e.jsx(u,{})})]},r={},n={name:"Variant · Info",args:{variant:"info",title:"Nueva actualización disponible",children:"Versión 2.4.1 lista para instalar."}},t={name:"Variant · Success",args:{variant:"success",title:"Guardado correctamente",children:"Los cambios fueron aplicados con éxito."}},s={name:"Variant · Warning",args:{variant:"warning",title:"Atención requerida",children:"Tu suscripción vence en 3 días."}},i={name:"Variant · Danger",args:{variant:"danger",title:"Error crítico",children:"No se pudo completar la operación. Intenta de nuevo."}},o={name:"Variant · Default",args:{variant:"default",title:"Nota",children:"Este comportamiento puede cambiar en futuras versiones."}},c={name:"Content · No title",args:{title:void 0,children:"Solo el mensaje, sin título."}},l={name:"Layout · Dismissible",args:{dismissible:!0,title:"Alerta descartable",children:"Haz clic en la X para cerrarla."}},d={name:"Showcase · All variants",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10,width:420},children:[e.jsx(a,{variant:"info",title:"Info",children:"Nueva versión disponible."}),e.jsx(a,{variant:"success",title:"Éxito",children:"Cambios guardados correctamente."}),e.jsx(a,{variant:"warning",title:"Advertencia",children:"La suscripción vence pronto."}),e.jsx(a,{variant:"danger",title:"Error",children:"No se pudo completar la acción."}),e.jsx(a,{variant:"default",title:"Nota",children:"Este campo es opcional."})]})},m={name:"Showcase · Dismissible",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10,width:420},children:[e.jsx(a,{variant:"info",dismissible:!0,onDismiss:()=>alert("cerrado"),children:"Haz clic en la X para descartar esta alerta."}),e.jsx(a,{variant:"danger",title:"Error",dismissible:!0,onDismiss:()=>alert("cerrado"),children:"Error en el servidor. Intenta de nuevo."})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Variant · Info",
  args: {
    variant: "info",
    title: "Nueva actualización disponible",
    children: "Versión 2.4.1 lista para instalar."
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Variant · Success",
  args: {
    variant: "success",
    title: "Guardado correctamente",
    children: "Los cambios fueron aplicados con éxito."
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Variant · Warning",
  args: {
    variant: "warning",
    title: "Atención requerida",
    children: "Tu suscripción vence en 3 días."
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Variant · Danger",
  args: {
    variant: "danger",
    title: "Error crítico",
    children: "No se pudo completar la operación. Intenta de nuevo."
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Variant · Default",
  args: {
    variant: "default",
    title: "Nota",
    children: "Este comportamiento puede cambiar en futuras versiones."
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Content · No title",
  args: {
    title: undefined,
    children: "Solo el mensaje, sin título."
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Layout · Dismissible",
  args: {
    dismissible: true,
    title: "Alerta descartable",
    children: "Haz clic en la X para cerrarla."
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Showcase · All variants",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 10,
    width: 420
  }}>
      <Alert variant="info" title="Info">Nueva versión disponible.</Alert>
      <Alert variant="success" title="Éxito">Cambios guardados correctamente.</Alert>
      <Alert variant="warning" title="Advertencia">La suscripción vence pronto.</Alert>
      <Alert variant="danger" title="Error">No se pudo completar la acción.</Alert>
      <Alert variant="default" title="Nota">Este campo es opcional.</Alert>
    </div>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Showcase · Dismissible",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 10,
    width: 420
  }}>
      <Alert variant="info" dismissible onDismiss={() => alert("cerrado")}>
        Haz clic en la X para descartar esta alerta.
      </Alert>
      <Alert variant="danger" title="Error" dismissible onDismiss={() => alert("cerrado")}>
        Error en el servidor. Intenta de nuevo.
      </Alert>
    </div>
}`,...m.parameters?.docs?.source}}};const j=["Playground","VariantInfo","VariantSuccess","VariantWarning","VariantDanger","VariantDefault","NoTitle","Dismissible","ShowcaseAllVariants","ShowcaseDismissible"];export{l as Dismissible,c as NoTitle,r as Playground,d as ShowcaseAllVariants,m as ShowcaseDismissible,i as VariantDanger,o as VariantDefault,n as VariantInfo,t as VariantSuccess,s as VariantWarning,j as __namedExportsOrder,w as default};
