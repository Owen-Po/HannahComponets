import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as r,a as n,b as h,c as y}from"./Card-wlx_y5UQ.js";import{B as g}from"./Button-DaBAKGsd.js";import{B as C}from"./Badge-CSuJe3Ut.js";import"./iframe-D7DoABNO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BE5fGFUm.js";import"./cn-BQHNewu7.js";import"./loader-circle-CrLMB4Ne.js";import"./createLucideIcon-CYD34EDm.js";const F={title:"Components/Card",component:r,parameters:{layout:"centered",docs:{description:{component:"Contenedor composable con subcomponentes CardHeader, CardBody y CardFooter. Soporta sombras, bordes redondeados y efecto hover."}}},argTypes:{rounded:{control:"select",options:["sm","md","lg","xl"],description:"Radio de borde",table:{category:"Variantes",defaultValue:{summary:"lg"}}},shadow:{control:"select",options:["none","sm","md","lg"],description:"Sombra",table:{category:"Variantes",defaultValue:{summary:"sm"}}},hoverable:{control:"boolean",description:"Efecto lift al hover",table:{category:"Layout",defaultValue:{summary:"false"}}},padding:{control:"select",options:["none","sm","md","lg"],description:"Padding interno (cuando no se usan sub-componentes)",table:{category:"Layout",defaultValue:{summary:"none"}}}},args:{rounded:"lg",shadow:"sm",hoverable:!1},decorators:[a=>e.jsx("div",{style:{width:380},children:e.jsx(a,{})})]},o={render:a=>e.jsxs(r,{...a,children:[e.jsx(n,{title:"Título de la tarjeta",description:"Descripción breve del contenido."}),e.jsx(h,{children:e.jsx("p",{style:{fontSize:14,color:"#6b7280"},children:"Aquí va el contenido principal de la tarjeta."})}),e.jsxs(y,{children:[e.jsx(g,{variant:"ghost",size:"sm",children:"Cancelar"}),e.jsx(g,{variant:"primary",size:"sm",children:"Guardar"})]})]})},s={name:"Composition · Header only",render:()=>e.jsx(r,{children:e.jsx(n,{title:"Resumen del proyecto",description:"Última actualización hace 2 horas.",action:e.jsx(C,{variant:"success",dot:!0,children:"Activo"})})})},d={name:"Composition · Header + Body + Footer",render:()=>e.jsxs(r,{children:[e.jsx(n,{title:"Confirmar acción",description:"Esta acción no se puede deshacer."}),e.jsx(h,{children:e.jsx("p",{style:{fontSize:14,color:"#374151"},children:"¿Estás seguro de que deseas eliminar este registro? Se perderán todos los datos asociados."})}),e.jsxs(y,{justify:"between",children:[e.jsx(g,{variant:"ghost",size:"sm",children:"Cancelar"}),e.jsx(g,{variant:"danger",size:"sm",children:"Eliminar"})]})]})},t={name:"Layout · Flat padding",render:()=>e.jsx(r,{padding:"md",children:e.jsx("p",{style:{fontSize:14,color:"#374151",margin:0},children:"Tarjeta con padding directo, sin sub-componentes."})})},i={name:"Shadow · none",render:()=>e.jsx(r,{shadow:"none",padding:"md",children:e.jsx("p",{style:{fontSize:14,margin:0},children:"Sin sombra"})})},c={name:"Shadow · sm",render:()=>e.jsx(r,{shadow:"sm",padding:"md",children:e.jsx("p",{style:{fontSize:14,margin:0},children:"Sombra sm"})})},l={name:"Shadow · md",render:()=>e.jsx(r,{shadow:"md",padding:"md",children:e.jsx("p",{style:{fontSize:14,margin:0},children:"Sombra md"})})},m={name:"Shadow · lg",render:()=>e.jsx(r,{shadow:"lg",padding:"md",children:e.jsx("p",{style:{fontSize:14,margin:0},children:"Sombra lg"})})},p={name:"Layout · Hoverable",render:()=>e.jsxs(r,{hoverable:!0,shadow:"sm",children:[e.jsx(n,{title:"Tarjeta clickable",description:"Pasa el cursor para ver el efecto."}),e.jsx(h,{children:e.jsx("p",{style:{fontSize:14,color:"#6b7280"},children:"Contenido de la tarjeta."})})]})},u={name:"Showcase · Grid of cards",parameters:{controls:{disable:!0},layout:"padded"},render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:16,width:700},children:[{title:"Usuarios",value:"1,248",badge:"primary",desc:"+12% este mes"},{title:"Ingresos",value:"$24,500",badge:"success",desc:"+8% este mes"},{title:"Tickets abiertos",value:"37",badge:"warning",desc:"5 sin asignar"},{title:"Errores",value:"3",badge:"danger",desc:"↓ 2 resueltos hoy"}].map(a=>e.jsx(r,{hoverable:!0,shadow:"sm",children:e.jsx(n,{title:a.title,description:a.desc,action:e.jsx(C,{variant:a.badge,children:a.value})})},a.title))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args}>\r
      <CardHeader title="Título de la tarjeta" description="Descripción breve del contenido." />\r
      <CardBody>\r
        <p style={{
        fontSize: 14,
        color: "#6b7280"
      }}>Aquí va el contenido principal de la tarjeta.</p>\r
      </CardBody>\r
      <CardFooter>\r
        <Button variant="ghost" size="sm">Cancelar</Button>\r
        <Button variant="primary" size="sm">Guardar</Button>\r
      </CardFooter>\r
    </Card>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Composition · Header only",
  render: () => <Card>\r
      <CardHeader title="Resumen del proyecto" description="Última actualización hace 2 horas." action={<Badge variant="success" dot>Activo</Badge>} />\r
    </Card>
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Composition · Header + Body + Footer",
  render: () => <Card>\r
      <CardHeader title="Confirmar acción" description="Esta acción no se puede deshacer." />\r
      <CardBody>\r
        <p style={{
        fontSize: 14,
        color: "#374151"
      }}>¿Estás seguro de que deseas eliminar este registro? Se perderán todos los datos asociados.</p>\r
      </CardBody>\r
      <CardFooter justify="between">\r
        <Button variant="ghost" size="sm">Cancelar</Button>\r
        <Button variant="danger" size="sm">Eliminar</Button>\r
      </CardFooter>\r
    </Card>
}`,...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Layout · Flat padding",
  render: () => <Card padding="md">\r
      <p style={{
      fontSize: 14,
      color: "#374151",
      margin: 0
    }}>Tarjeta con padding directo, sin sub-componentes.</p>\r
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
  render: () => <Card hoverable shadow="sm">\r
      <CardHeader title="Tarjeta clickable" description="Pasa el cursor para ver el efecto." />\r
      <CardBody><p style={{
        fontSize: 14,
        color: "#6b7280"
      }}>Contenido de la tarjeta.</p></CardBody>\r
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
  }}>\r
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
    }].map(item => <Card key={item.title} hoverable shadow="sm">\r
          <CardHeader title={item.title} description={item.desc} action={<Badge variant={item.badge}>{item.value}</Badge>} />\r
        </Card>)}\r
    </div>
}`,...u.parameters?.docs?.source}}};const E=["Playground","HeaderOnly","WithFooter","WithPadding","ShadowNone","ShadowSm","ShadowMd","ShadowLg","Hoverable","ShowcaseGrid"];export{s as HeaderOnly,p as Hoverable,o as Playground,m as ShadowLg,l as ShadowMd,i as ShadowNone,c as ShadowSm,u as ShowcaseGrid,d as WithFooter,t as WithPadding,E as __namedExportsOrder,F as default};
