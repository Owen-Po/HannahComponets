import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as a,a as n,b as h,c as y}from"./Card-17Wkl2l9.js";import{B as g}from"./Button-p-fQk3ph.js";import{B as C}from"./Badge-g2r6wNxb.js";import"./iframe-vHIwjOwQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bj1Z-dc7.js";import"./bundle-mjs-Ce1ZTWB2.js";import"./cn-C1oRmgnl.js";import"./loader-circle-C1dUG3Ou.js";import"./createLucideIcon-C-Otocs2.js";const E={title:"Components/Card",component:a,parameters:{layout:"centered",docs:{description:{component:"Contenedor composable con subcomponentes CardHeader, CardBody y CardFooter. Soporta sombras, bordes redondeados y efecto hover."}}},argTypes:{rounded:{control:"select",options:["sm","md","lg","xl"],description:"Radio de borde",table:{category:"Variantes",defaultValue:{summary:"lg"}}},shadow:{control:"select",options:["none","sm","md","lg"],description:"Sombra",table:{category:"Variantes",defaultValue:{summary:"sm"}}},hoverable:{control:"boolean",description:"Efecto lift al hover",table:{category:"Layout",defaultValue:{summary:"false"}}},padding:{control:"select",options:["none","sm","md","lg"],description:"Padding interno (cuando no se usan sub-componentes)",table:{category:"Layout",defaultValue:{summary:"none"}}}},args:{rounded:"lg",shadow:"sm",hoverable:!1},decorators:[r=>e.jsx("div",{style:{width:380},children:e.jsx(r,{})})]},o={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{title:"Título de la tarjeta",description:"Descripción breve del contenido."}),e.jsx(h,{children:e.jsx("p",{style:{fontSize:14,color:"#6b7280"},children:"Aquí va el contenido principal de la tarjeta."})}),e.jsxs(y,{children:[e.jsx(g,{variant:"ghost",size:"sm",children:"Cancelar"}),e.jsx(g,{variant:"primary",size:"sm",children:"Guardar"})]})]})},s={name:"Composition · Header only",render:()=>e.jsx(a,{children:e.jsx(n,{title:"Resumen del proyecto",description:"Última actualización hace 2 horas.",action:e.jsx(C,{variant:"success",dot:!0,children:"Activo"})})})},d={name:"Composition · Header + Body + Footer",render:()=>e.jsxs(a,{children:[e.jsx(n,{title:"Confirmar acción",description:"Esta acción no se puede deshacer."}),e.jsx(h,{children:e.jsx("p",{style:{fontSize:14,color:"#374151"},children:"¿Estás seguro de que deseas eliminar este registro? Se perderán todos los datos asociados."})}),e.jsxs(y,{justify:"between",children:[e.jsx(g,{variant:"ghost",size:"sm",children:"Cancelar"}),e.jsx(g,{variant:"danger",size:"sm",children:"Eliminar"})]})]})},t={name:"Layout · Flat padding",render:()=>e.jsx(a,{padding:"md",children:e.jsx("p",{style:{fontSize:14,color:"#374151",margin:0},children:"Tarjeta con padding directo, sin sub-componentes."})})},i={name:"Shadow · none",render:()=>e.jsx(a,{shadow:"none",padding:"md",children:e.jsx("p",{style:{fontSize:14,margin:0},children:"Sin sombra"})})},c={name:"Shadow · sm",render:()=>e.jsx(a,{shadow:"sm",padding:"md",children:e.jsx("p",{style:{fontSize:14,margin:0},children:"Sombra sm"})})},l={name:"Shadow · md",render:()=>e.jsx(a,{shadow:"md",padding:"md",children:e.jsx("p",{style:{fontSize:14,margin:0},children:"Sombra md"})})},m={name:"Shadow · lg",render:()=>e.jsx(a,{shadow:"lg",padding:"md",children:e.jsx("p",{style:{fontSize:14,margin:0},children:"Sombra lg"})})},p={name:"Layout · Hoverable",render:()=>e.jsxs(a,{hoverable:!0,shadow:"sm",children:[e.jsx(n,{title:"Tarjeta clickable",description:"Pasa el cursor para ver el efecto."}),e.jsx(h,{children:e.jsx("p",{style:{fontSize:14,color:"#6b7280"},children:"Contenido de la tarjeta."})})]})},u={name:"Showcase · Grid of cards",parameters:{controls:{disable:!0},layout:"padded"},render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:16,width:700},children:[{title:"Usuarios",value:"1,248",badge:"primary",desc:"+12% este mes"},{title:"Ingresos",value:"$24,500",badge:"success",desc:"+8% este mes"},{title:"Tickets abiertos",value:"37",badge:"warning",desc:"5 sin asignar"},{title:"Errores",value:"3",badge:"danger",desc:"↓ 2 resueltos hoy"}].map(r=>e.jsx(a,{hoverable:!0,shadow:"sm",children:e.jsx(n,{title:r.title,description:r.desc,action:e.jsx(C,{variant:r.badge,children:r.value})})},r.title))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <CardHeader title="Título de la tarjeta" description="Descripción breve del contenido." />
      <CardBody>
        <p style={{
        fontSize: 14,
        color: "#6b7280"
      }}>Aquí va el contenido principal de la tarjeta.</p>
      </CardBody>
      <CardFooter>
        <Button variant="ghost" size="sm">Cancelar</Button>
        <Button variant="primary" size="sm">Guardar</Button>
      </CardFooter>
    </Card>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Composition · Header only",
  render: () => <Card>
      <CardHeader title="Resumen del proyecto" description="Última actualización hace 2 horas." action={<Badge variant="success" dot>Activo</Badge>} />
    </Card>
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Composition · Header + Body + Footer",
  render: () => <Card>
      <CardHeader title="Confirmar acción" description="Esta acción no se puede deshacer." />
      <CardBody>
        <p style={{
        fontSize: 14,
        color: "#374151"
      }}>¿Estás seguro de que deseas eliminar este registro? Se perderán todos los datos asociados.</p>
      </CardBody>
      <CardFooter justify="between">
        <Button variant="ghost" size="sm">Cancelar</Button>
        <Button variant="danger" size="sm">Eliminar</Button>
      </CardFooter>
    </Card>
}`,...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Layout · Flat padding",
  render: () => <Card padding="md">
      <p style={{
      fontSize: 14,
      color: "#374151",
      margin: 0
    }}>Tarjeta con padding directo, sin sub-componentes.</p>
    </Card>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Shadow · none",
  render: () => <Card shadow="none" padding="md"><p style={{
      fontSize: 14,
      margin: 0
    }}>Sin sombra</p></Card>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Shadow · sm",
  render: () => <Card shadow="sm" padding="md"><p style={{
      fontSize: 14,
      margin: 0
    }}>Sombra sm</p></Card>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Shadow · md",
  render: () => <Card shadow="md" padding="md"><p style={{
      fontSize: 14,
      margin: 0
    }}>Sombra md</p></Card>
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Shadow · lg",
  render: () => <Card shadow="lg" padding="md"><p style={{
      fontSize: 14,
      margin: 0
    }}>Sombra lg</p></Card>
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Layout · Hoverable",
  render: () => <Card hoverable shadow="sm">
      <CardHeader title="Tarjeta clickable" description="Pasa el cursor para ver el efecto." />
      <CardBody><p style={{
        fontSize: 14,
        color: "#6b7280"
      }}>Contenido de la tarjeta.</p></CardBody>
    </Card>
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Showcase · Grid of cards",
  parameters: {
    controls: {
      disable: true
    },
    layout: "padded"
  },
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 16,
    width: 700
  }}>
      {[{
      title: "Usuarios",
      value: "1,248",
      badge: "primary" as const,
      desc: "+12% este mes"
    }, {
      title: "Ingresos",
      value: "$24,500",
      badge: "success" as const,
      desc: "+8% este mes"
    }, {
      title: "Tickets abiertos",
      value: "37",
      badge: "warning" as const,
      desc: "5 sin asignar"
    }, {
      title: "Errores",
      value: "3",
      badge: "danger" as const,
      desc: "↓ 2 resueltos hoy"
    }].map(item => <Card key={item.title} hoverable shadow="sm">
          <CardHeader title={item.title} description={item.desc} action={<Badge variant={item.badge}>{item.value}</Badge>} />
        </Card>)}
    </div>
}`,...u.parameters?.docs?.source}}};const T=["Playground","HeaderOnly","WithFooter","WithPadding","ShadowNone","ShadowSm","ShadowMd","ShadowLg","Hoverable","ShowcaseGrid"];export{s as HeaderOnly,p as Hoverable,o as Playground,m as ShadowLg,l as ShadowMd,i as ShadowNone,c as ShadowSm,u as ShowcaseGrid,d as WithFooter,t as WithPadding,T as __namedExportsOrder,E as default};
