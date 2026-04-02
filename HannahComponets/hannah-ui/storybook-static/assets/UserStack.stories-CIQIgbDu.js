import{j as s}from"./jsx-runtime-u17CrQMm.js";import"./iframe-vHIwjOwQ.js";import{c as t}from"./cn-C1oRmgnl.js";import{P as A}from"./plus-dFqypAPB.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-Ce1ZTWB2.js";import"./createLucideIcon-C-Otocs2.js";const U={sm:{box:"h-7 w-7",text:"text-[10px]",icon:12,overlap:"-space-x-1.5"},md:{box:"h-9 w-9",text:"text-xs",icon:14,overlap:"-space-x-2"},lg:{box:"h-11 w-11",text:"text-sm",icon:16,overlap:"-space-x-2.5"}};function N(r){return r.split(" ").map(a=>a[0]).slice(0,2).join("").toUpperCase()}function z(r){let a=0;for(let o=0;o<r.length;o++)a=r.charCodeAt(o)+((a<<5)-a);return`hsl(${(a%360+360)%360}, 55%, 55%)`}function h({users:r,max:a=4,size:y="md",onAdd:o,onClick:l,onOverflowClick:c,addLabel:k="Add member",className:S}){const i=U[y],w=r.slice(0,a),f=r.length-a,v=t(i.box,"rounded-full border-2 border-white dark:border-gray-900 inline-flex items-center justify-center shrink-0 relative");return s.jsxs("div",{className:t("inline-flex items-center",i.overlap,S),children:[w.map((e,j)=>{const C=e.color??z(e.name);return s.jsxs("div",{className:t(v,"group/av transition-transform hover:scale-110 hover:z-10",l&&"cursor-pointer"),style:e.avatar?void 0:{backgroundColor:C},onClick:()=>l?.(e),role:l?"button":void 0,tabIndex:l?0:void 0,"aria-label":e.name,children:[e.avatar?s.jsx("img",{src:e.avatar,alt:e.name,className:"h-full w-full rounded-full object-cover"}):s.jsx("span",{className:t("font-semibold text-white select-none",i.text),children:N(e.name)}),s.jsx("span",{className:"pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-900 dark:bg-gray-100 px-2 py-0.5 text-[11px] text-white dark:text-gray-900 opacity-0 group-hover/av:opacity-100 transition-opacity z-20",children:e.name})]},j)}),f>0&&s.jsx("div",{className:t(v,"bg-gray-200 dark:bg-gray-700",c&&"cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"),onClick:c,role:c?"button":void 0,tabIndex:c?0:void 0,"aria-label":`${f} more`,children:s.jsxs("span",{className:t("font-bold text-gray-600 dark:text-gray-300 select-none",i.text),children:["+",f]})}),o&&s.jsx("div",{className:t(v,"border-dashed border-gray-300 dark:border-gray-600 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"),onClick:o,role:"button",tabIndex:0,"aria-label":k,children:s.jsx(A,{size:i.icon,className:"text-gray-400 dark:text-gray-500"})})]})}h.__docgenInfo={description:"",methods:[],displayName:"UserStack",props:{users:{required:!0,tsType:{name:"Array",elements:[{name:"StackUser"}],raw:"StackUser[]"},description:""},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},onAdd:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(user: StackUser) => void",signature:{arguments:[{type:{name:"StackUser"},name:"user"}],return:{name:"void"}}},description:""},onOverflowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},addLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Add member"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const $={title:"Components/UserStack",component:h,parameters:{layout:"centered"}},n=[{name:"Alice Martin",color:"#7c6aff"},{name:"Bob Chen",color:"#f59e0b"},{name:"Carol Davis",color:"#10b981"},{name:"Dan Wilson",color:"#ef4444"},{name:"Eva Lopez",color:"#3b82f6"}],T=[...n,{name:"Frank Kim"},{name:"Grace Patel"},{name:"Hiro Tanaka"},{name:"Isla Brown"},{name:"Jake Lee"},{name:"Kara Singh"},{name:"Liam Zhang"}],m={args:{users:n,max:4}},d={args:{users:n.slice(0,3),max:5}},p={args:{users:n.slice(0,3),onAdd:()=>alert("Add member clicked")}},u={args:{users:n,max:4,size:"lg"}},g={args:{users:n,max:4,size:"sm"}},x={args:{users:n,max:4,onClick:r=>alert(`Clicked: ${r.name}`)}},b={args:{users:T,max:4,onOverflowClick:()=>alert("Show all members")}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    users,
    max: 4
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    users: users.slice(0, 3),
    max: 5
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    users: users.slice(0, 3),
    onAdd: () => alert("Add member clicked")
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    users,
    max: 4,
    size: "lg"
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    users,
    max: 4,
    size: "sm"
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    users,
    max: 4,
    onClick: user => alert(\`Clicked: \${user.name}\`)
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    users: manyUsers,
    max: 4,
    onOverflowClick: () => alert("Show all members")
  }
}`,...b.parameters?.docs?.source}}};const B=["Default","AllVisible","WithAdd","Large","Small","OnClick","ManyUsers"];export{d as AllVisible,m as Default,u as Large,b as ManyUsers,x as OnClick,g as Small,p as WithAdd,B as __namedExportsOrder,$ as default};
