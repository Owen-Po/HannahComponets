import{j as r}from"./jsx-runtime-u17CrQMm.js";import{c as p}from"./cn-BQHNewu7.js";const n=({children:a,col:s,spacing:e=4,className:o,style:l,...c})=>r.jsx("div",{className:p("flex flex-wrap",s&&"flex-col",o),style:{gap:e?`${e*.25}rem`:void 0,...l},...c,children:a});n.__docgenInfo={description:"",methods:[],displayName:"Stack",props:{col:{required:!1,tsType:{name:"boolean"},description:""},spacing:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}}},composes:["HtmlHTMLAttributes"]};const u={title:"Components/Stack",component:n,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{spacing:{control:"number",defaultValue:4},col:{type:"boolean",defaultValue:!1},childrenQuantity:{type:"number"}}},m={render:({childrenQuantity:a,...s})=>r.jsx(n,{...s,children:[...Array(a).keys()].map(e=>r.jsx("div",{className:"w-32 h-32 bg-red-400 flex items-center justify-center text-jxl font-bold",children:e+1}))})},t={...m,args:{spacing:4,col:!1,childrenQuantity:2}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...ExampleComponent,
  args: {
    spacing: 4,
    col: false,
    childrenQuantity: 2
  }
}`,...t.parameters?.docs?.source}}};const f=["Default"];export{t as Default,f as __namedExportsOrder,u as default};
