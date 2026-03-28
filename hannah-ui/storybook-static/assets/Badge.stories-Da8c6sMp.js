import{j as a}from"./jsx-runtime-u17CrQMm.js";import{B as r}from"./Badge-CSuJe3Ut.js";import"./iframe-D7DoABNO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BE5fGFUm.js";import"./cn-BQHNewu7.js";const A={title:"Components/Badge",component:r,parameters:{layout:"centered",docs:{description:{component:"Etiqueta/tag para estados, categorías o contadores. 11 variantes entre soft y solid, 3 tamaños y dot indicator opcional."}}},argTypes:{variant:{control:"select",options:["default","primary","success","warning","danger","info","purple","solid_default","solid_primary","solid_success","solid_warning","solid_danger"],description:"Variante de color",table:{category:"Variantes",defaultValue:{summary:"default"}}},size:{control:"select",options:["sm","md","lg"],description:"Tamaño",table:{category:"Variantes",defaultValue:{summary:"md"}}},dot:{control:"boolean",description:"Muestra un dot indicator de estado",table:{category:"Layout",defaultValue:{summary:"false"}}},children:{control:"text",table:{category:"Contenido"}}},args:{children:"Badge",variant:"primary",size:"md",dot:!1}},n={},s={name:"Variant · Default",args:{variant:"default",children:"Default"}},o={name:"Variant · Primary",args:{variant:"primary",children:"Primary"}},t={name:"Variant · Success",args:{variant:"success",children:"Success"}},i={name:"Variant · Warning",args:{variant:"warning",children:"Warning"}},c={name:"Variant · Danger",args:{variant:"danger",children:"Danger"}},d={name:"Variant · Info",args:{variant:"info",children:"Info"}},l={name:"Variant · Purple",args:{variant:"purple",children:"Purple"}},m={name:"Solid · Primary",args:{variant:"solid_primary",children:"Primary"}},p={name:"Solid · Success",args:{variant:"solid_success",children:"Success"}},u={name:"Solid · Danger",args:{variant:"solid_danger",children:"Danger"}},g={name:"Size · sm",args:{size:"sm",children:"Small"}},S={name:"Size · md",args:{size:"md",children:"Medium"}},v={name:"Size · lg",args:{size:"lg",children:"Large"}},f={name:"Dot · Default",args:{dot:!0,variant:"default",children:"Inactivo"}},h={name:"Dot · Success",args:{dot:!0,variant:"success",children:"Activo"}},y={name:"Dot · Danger",args:{dot:!0,variant:"danger",children:"Error"}},D={name:"Showcase · All soft variants",parameters:{controls:{disable:!0}},render:()=>a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:["default","primary","success","warning","danger","info","purple"].map(e=>a.jsx(r,{variant:e,children:e},e))})},V={name:"Showcase · All solid variants",parameters:{controls:{disable:!0}},render:()=>a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:["solid_default","solid_primary","solid_success","solid_warning","solid_danger"].map(e=>a.jsx(r,{variant:e,children:e.replace("solid_","")},e))})},w={name:"Showcase · Status dots",parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[a.jsx(r,{dot:!0,variant:"success",children:"Activo"}),a.jsx(r,{dot:!0,variant:"warning",children:"En revisión"}),a.jsx(r,{dot:!0,variant:"danger",children:"Error"}),a.jsx(r,{dot:!0,variant:"default",children:"Inactivo"}),a.jsx(r,{dot:!0,variant:"info",children:"Procesando"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Variant · Default",
  args: {
    variant: "default",
    children: "Default"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Variant · Primary",
  args: {
    variant: "primary",
    children: "Primary"
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Variant · Success",
  args: {
    variant: "success",
    children: "Success"
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Variant · Warning",
  args: {
    variant: "warning",
    children: "Warning"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Variant · Danger",
  args: {
    variant: "danger",
    children: "Danger"
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Variant · Info",
  args: {
    variant: "info",
    children: "Info"
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Variant · Purple",
  args: {
    variant: "purple",
    children: "Purple"
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Solid · Primary",
  args: {
    variant: "solid_primary",
    children: "Primary"
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Solid · Success",
  args: {
    variant: "solid_success",
    children: "Success"
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Solid · Danger",
  args: {
    variant: "solid_danger",
    children: "Danger"
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Size · sm",
  args: {
    size: "sm",
    children: "Small"
  }
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Size · md",
  args: {
    size: "md",
    children: "Medium"
  }
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Size · lg",
  args: {
    size: "lg",
    children: "Large"
  }
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Dot · Default",
  args: {
    dot: true,
    variant: "default",
    children: "Inactivo"
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Dot · Success",
  args: {
    dot: true,
    variant: "success",
    children: "Activo"
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Dot · Danger",
  args: {
    dot: true,
    variant: "danger",
    children: "Error"
  }
}`,...y.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Showcase · All soft variants",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: 8
  }}>\r
      {(["default", "primary", "success", "warning", "danger", "info", "purple"] as const).map(v => <Badge key={v} variant={v}>{v}</Badge>)}\r
    </div>
}`,...D.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "Showcase · All solid variants",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: 8
  }}>\r
      {(["solid_default", "solid_primary", "solid_success", "solid_warning", "solid_danger"] as const).map(v => <Badge key={v} variant={v}>{v.replace("solid_", "")}</Badge>)}\r
    </div>
}`,...V.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Showcase · Status dots",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: 8
  }}>\r
      <Badge dot variant="success">Activo</Badge>\r
      <Badge dot variant="warning">En revisión</Badge>\r
      <Badge dot variant="danger">Error</Badge>\r
      <Badge dot variant="default">Inactivo</Badge>\r
      <Badge dot variant="info">Procesando</Badge>\r
    </div>
}`,...w.parameters?.docs?.source}}};const W=["Playground","VariantDefault","VariantPrimary","VariantSuccess","VariantWarning","VariantDanger","VariantInfo","VariantPurple","SolidPrimary","SolidSuccess","SolidDanger","SizeSm","SizeMd","SizeLg","DotDefault","DotSuccess","DotDanger","ShowcaseAllSoft","ShowcaseAllSolid","ShowcaseDots"];export{y as DotDanger,f as DotDefault,h as DotSuccess,n as Playground,D as ShowcaseAllSoft,V as ShowcaseAllSolid,w as ShowcaseDots,v as SizeLg,S as SizeMd,g as SizeSm,u as SolidDanger,m as SolidPrimary,p as SolidSuccess,c as VariantDanger,s as VariantDefault,d as VariantInfo,o as VariantPrimary,l as VariantPurple,t as VariantSuccess,i as VariantWarning,W as __namedExportsOrder,A as default};
