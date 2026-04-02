import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as k}from"./iframe-vHIwjOwQ.js";import{c as C}from"./index-Bj1Z-dc7.js";import{c as A}from"./cn-C1oRmgnl.js";import{U as I}from"./user-Mi5ebBa-.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-Ce1ZTWB2.js";import"./createLucideIcon-C-Otocs2.js";const G=C(["inline-flex items-center justify-center shrink-0 overflow-hidden","font-semibold select-none"],{variants:{size:{xs:"w-6 h-6 text-xs",sm:"w-8 h-8 text-xs",md:"w-10 h-10 text-sm",lg:"w-12 h-12 text-base",xl:"w-16 h-16 text-lg","2xl":"w-20 h-20 text-xl"},rounded:{full:"rounded-full",lg:"rounded-xl",md:"rounded-lg",sm:"rounded-md",none:"rounded-none"},color:{gray:"bg-gray-200 text-gray-700",blue:"bg-blue-100 text-blue-700",emerald:"bg-emerald-100 text-emerald-700",amber:"bg-amber-100 text-amber-700",red:"bg-red-100 text-red-700",purple:"bg-purple-100 text-purple-700",pink:"bg-pink-100 text-pink-700"}},defaultVariants:{size:"md",rounded:"full",color:"gray"}});function L(e){const a=e.trim().split(/\s+/);return a.length===1?a[0].charAt(0).toUpperCase():(a[0].charAt(0)+a[a.length-1].charAt(0)).toUpperCase()}const n=({className:e,size:a,rounded:s,color:z,src:t,alt:m,name:o,...h})=>{const[S,j]=k.useState(!1);return r.jsx("span",{className:A(G({size:a,rounded:s,color:z,className:e})),title:o,...h,children:t&&!S?r.jsx("img",{src:t,alt:m??o??"avatar",className:"w-full h-full object-cover",onError:()=>j(!0)}):o?L(o):r.jsx(I,{className:"w-1/2 h-1/2"})})};n.displayName="Avatar";const l=({avatars:e,max:a=4,size:s="md",className:z})=>{const t=e.slice(0,a),m=e.length-a,o=s==="xs"?"ring-1":"ring-2";return r.jsxs("div",{className:A("flex items-center",z),children:[t.map((h,S)=>r.jsx("span",{className:A("-ml-2 first:ml-0",o,"ring-white rounded-full"),children:r.jsx(n,{...h,size:s})},S)),m>0&&r.jsxs("span",{className:A("-ml-2 inline-flex items-center justify-center shrink-0","rounded-full bg-gray-200 text-gray-700 font-semibold ring-2 ring-white",G({size:s}),"text-xs"),children:["+",m]})]})};l.displayName="AvatarGroup";n.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit","VariantProps"]};l.__docgenInfo={description:"",methods:[],displayName:"AvatarGroup",props:{avatars:{required:!0,tsType:{name:"Array",elements:[{name:"AvatarProps"}],raw:"AvatarProps[]"},description:""},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}},size:{required:!1,tsType:{name:'AvatarProps["size"]',raw:'AvatarProps["size"]'},description:"",defaultValue:{value:'"md"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const F={title:"Components/Avatar",component:n,parameters:{layout:"centered",docs:{description:{component:"Avatar con imagen, iniciales generadas automáticamente o ícono fallback. AvatarGroup para stacks con overlap. 6 tamaños, 7 colores, formas rounded/full."}}},argTypes:{name:{control:"text",description:"Nombre del usuario — genera iniciales automáticamente",table:{category:"Contenido"}},src:{control:"text",description:"URL de imagen",table:{category:"Contenido"}},size:{control:"select",options:["xs","sm","md","lg","xl","2xl"],description:"Tamaño",table:{category:"Variantes",defaultValue:{summary:"md"}}},rounded:{control:"select",options:["full","lg","md","sm","none"],description:"Forma del borde",table:{category:"Variantes",defaultValue:{summary:"full"}}},color:{control:"select",options:["gray","blue","emerald","amber","red","purple","pink"],description:"Color de fondo (para iniciales/fallback)",table:{category:"Variantes",defaultValue:{summary:"gray"}}}},args:{name:"Ana García",size:"md",rounded:"full",color:"blue"}},c={},i={name:"Content · Initials",args:{name:"Carlos Ruiz",color:"emerald"}},d={name:"Content · Fallback icon",args:{name:void 0}},p={name:"Size · All sizes",parameters:{controls:{disable:!0}},render:()=>r.jsx("div",{style:{display:"flex",alignItems:"center",gap:12},children:["xs","sm","md","lg","xl","2xl"].map(e=>r.jsx(n,{size:e,name:"Ana García",color:"blue"},e))})},u={name:"Color · All colors",parameters:{controls:{disable:!0}},render:()=>r.jsx("div",{style:{display:"flex",alignItems:"center",gap:10},children:["gray","blue","emerald","amber","red","purple","pink"].map(e=>r.jsx(n,{color:e,name:"AB",size:"md"},e))})},g={name:"Shape · Full (circle)",args:{rounded:"full",name:"María López",color:"purple"}},x={name:"Shape · Rounded lg",args:{rounded:"lg",name:"María López",color:"purple"}},f={name:"Shape · Square",args:{rounded:"none",name:"María López",color:"purple"}},b={name:"AvatarGroup · Default",parameters:{controls:{disable:!0}},render:()=>r.jsx(l,{size:"md",avatars:[{name:"Ana García",color:"blue"},{name:"Carlos Ruiz",color:"emerald"},{name:"María López",color:"purple"},{name:"Pedro Sánchez",color:"amber"},{name:"Laura Torres",color:"red"},{name:"Jorge Díaz",color:"pink"}],max:4})},y={name:"AvatarGroup · Sizes",parameters:{controls:{disable:!0}},render:()=>r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:["sm","md","lg"].map(e=>r.jsx(l,{size:e,avatars:[{name:"Ana García",color:"blue"},{name:"Carlos Ruiz",color:"emerald"},{name:"María López",color:"purple"},{name:"Pedro Sánchez",color:"amber"}],max:3},e))})},v={name:"Showcase · All features",parameters:{controls:{disable:!0}},render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20,alignItems:"flex-start"},children:[r.jsx("div",{style:{display:"flex",gap:10,alignItems:"center"},children:["gray","blue","emerald","amber","red","purple","pink"].map(e=>r.jsx(n,{color:e,name:"AB",size:"md"},e))}),r.jsx("div",{style:{display:"flex",gap:10,alignItems:"center"},children:["xs","sm","md","lg","xl","2xl"].map(e=>r.jsx(n,{size:e,name:"Ana García",color:"blue"},e))}),r.jsx(l,{size:"md",avatars:[{name:"Ana G",color:"blue"},{name:"Carlos R",color:"emerald"},{name:"María L",color:"purple"},{name:"Pedro S",color:"amber"},{name:"Laura T",color:"red"}],max:4})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Content · Initials",
  args: {
    name: "Carlos Ruiz",
    color: "emerald"
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Content · Fallback icon",
  args: {
    name: undefined
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Size · All sizes",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: 12
  }}>
      {(["xs", "sm", "md", "lg", "xl", "2xl"] as const).map(s => <Avatar key={s} size={s} name="Ana García" color="blue" />)}
    </div>
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Color · All colors",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: 10
  }}>
      {(["gray", "blue", "emerald", "amber", "red", "purple", "pink"] as const).map(c => <Avatar key={c} color={c} name="AB" size="md" />)}
    </div>
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Shape · Full (circle)",
  args: {
    rounded: "full",
    name: "María López",
    color: "purple"
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Shape · Rounded lg",
  args: {
    rounded: "lg",
    name: "María López",
    color: "purple"
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Shape · Square",
  args: {
    rounded: "none",
    name: "María López",
    color: "purple"
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "AvatarGroup · Default",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <AvatarGroup size="md" avatars={[{
    name: "Ana García",
    color: "blue"
  }, {
    name: "Carlos Ruiz",
    color: "emerald"
  }, {
    name: "María López",
    color: "purple"
  }, {
    name: "Pedro Sánchez",
    color: "amber"
  }, {
    name: "Laura Torres",
    color: "red"
  }, {
    name: "Jorge Díaz",
    color: "pink"
  }]} max={4} />
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "AvatarGroup · Sizes",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>
      {(["sm", "md", "lg"] as const).map(s => <AvatarGroup key={s} size={s} avatars={[{
      name: "Ana García",
      color: "blue"
    }, {
      name: "Carlos Ruiz",
      color: "emerald"
    }, {
      name: "María López",
      color: "purple"
    }, {
      name: "Pedro Sánchez",
      color: "amber"
    }]} max={3} />)}
    </div>
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Showcase · All features",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 20,
    alignItems: "flex-start"
  }}>
      {/* Iniciales */}
      <div style={{
      display: "flex",
      gap: 10,
      alignItems: "center"
    }}>
        {(["gray", "blue", "emerald", "amber", "red", "purple", "pink"] as const).map(c => <Avatar key={c} color={c} name="AB" size="md" />)}
      </div>
      {/* Tamaños */}
      <div style={{
      display: "flex",
      gap: 10,
      alignItems: "center"
    }}>
        {(["xs", "sm", "md", "lg", "xl", "2xl"] as const).map(s => <Avatar key={s} size={s} name="Ana García" color="blue" />)}
      </div>
      {/* Grupo */}
      <AvatarGroup size="md" avatars={[{
      name: "Ana G",
      color: "blue"
    }, {
      name: "Carlos R",
      color: "emerald"
    }, {
      name: "María L",
      color: "purple"
    }, {
      name: "Pedro S",
      color: "amber"
    }, {
      name: "Laura T",
      color: "red"
    }]} max={4} />
    </div>
}`,...v.parameters?.docs?.source}}};const D=["Playground","WithInitials","WithFallback","AllSizes","AllColors","RoundedFull","RoundedLg","RoundedNone","Group","GroupSizes","ShowcaseAll"];export{u as AllColors,p as AllSizes,b as Group,y as GroupSizes,c as Playground,g as RoundedFull,x as RoundedLg,f as RoundedNone,v as ShowcaseAll,d as WithFallback,i as WithInitials,D as __namedExportsOrder,F as default};
