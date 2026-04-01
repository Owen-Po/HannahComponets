import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-D75dh1fk.js";import{c as f}from"./cn-CFNvqZE-.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-Ce1ZTWB2.js";const S=`
@keyframes skeleton-shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
`,N={text:"rounded-md h-4 w-full",circular:"rounded-full",rectangular:"rounded-none",rounded:"rounded-xl"},T={text:"h-4",circular:"",rectangular:"h-24",rounded:"h-24"};function u({variant:n="text",width:a,height:t,animation:h="pulse",lines:s,circle:x,className:g,style:v,...y}){const k=x?"circular":n;if(s&&s>1)return e.jsx(p,{children:Array.from({length:s}).map((_,j)=>e.jsx(u,{variant:"text",animation:h,width:j===s-1?"60%":a,height:t,className:g,style:v,...y},j))});const b={...v,...a!=null?{width:typeof a=="number"?`${a}px`:a}:{},...t!=null?{height:typeof t=="number"?`${t}px`:t}:{},...x&&a&&!t?{height:typeof a=="number"?`${a}px`:a}:{}},w=h==="shimmer";return w&&Object.assign(b,{backgroundImage:"linear-gradient(90deg, var(--skeleton-base) 25%, var(--skeleton-highlight) 50%, var(--skeleton-base) 75%)",backgroundSize:"200% 100%",animation:"skeleton-shimmer 1.5s ease-in-out infinite"}),e.jsxs(e.Fragment,{children:[w&&e.jsx("style",{children:S}),e.jsx("div",{className:f("bg-gray-200 dark:bg-gray-700","[--skeleton-base:theme(--color-gray-200)] [--skeleton-highlight:theme(--color-gray-300)]","dark:[--skeleton-base:theme(--color-gray-700)] dark:[--skeleton-highlight:theme(--color-gray-600)]",N[k],!t&&T[k],h==="pulse"&&"animate-pulse",g),style:b,...y})]})}function p({children:n,className:a}){return e.jsx("div",{className:f("space-y-3",a),children:n})}const r=u;p.__docgenInfo={description:"",methods:[],displayName:"SkeletonGroup",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};u.__docgenInfo={description:"",methods:[],displayName:"SkeletonBase",props:{variant:{required:!1,tsType:{name:"union",raw:'"text" | "circular" | "rectangular" | "rounded"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"circular"'},{name:"literal",value:'"rectangular"'},{name:"literal",value:'"rounded"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},animation:{required:!1,tsType:{name:"union",raw:'"pulse" | "shimmer" | "none"',elements:[{name:"literal",value:'"pulse"'},{name:"literal",value:'"shimmer"'},{name:"literal",value:'"none"'}]},description:"",defaultValue:{value:'"pulse"',computed:!1}},lines:{required:!1,tsType:{name:"number"},description:""},circle:{required:!1,tsType:{name:"boolean"},description:""}}};const G={title:"Components/Skeleton",component:r,parameters:{layout:"centered"}},i={args:{width:320}},d={args:{lines:4,width:320}},o={render:()=>e.jsxs("div",{className:"w-80 rounded-xl border border-gray-200 p-4 dark:border-gray-700",children:[e.jsx(r,{variant:"rounded",height:160}),e.jsxs(p,{className:"mt-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(r,{circle:!0,width:40}),e.jsx(r,{variant:"text",width:"60%"})]}),e.jsx(r,{variant:"text"}),e.jsx(r,{variant:"text",width:"80%"}),e.jsx(r,{variant:"text",width:"45%"})]})]})},l={render:()=>e.jsxs("div",{className:"w-80 space-y-3",children:[e.jsx(r,{animation:"shimmer",variant:"rounded",height:120}),e.jsx(r,{animation:"shimmer"}),e.jsx(r,{animation:"shimmer",width:"75%"})]})},c={render:()=>e.jsxs("div",{className:"flex items-end gap-6",children:[e.jsxs("div",{className:"space-y-2 text-center",children:[e.jsx(r,{variant:"text",width:120}),e.jsx("span",{className:"text-xs text-gray-500",children:"text"})]}),e.jsxs("div",{className:"space-y-2 text-center",children:[e.jsx(r,{variant:"circular",width:48,height:48}),e.jsx("span",{className:"text-xs text-gray-500",children:"circular"})]}),e.jsxs("div",{className:"space-y-2 text-center",children:[e.jsx(r,{variant:"rectangular",width:120,height:48}),e.jsx("span",{className:"text-xs text-gray-500",children:"rectangular"})]}),e.jsxs("div",{className:"space-y-2 text-center",children:[e.jsx(r,{variant:"rounded",width:120,height:48}),e.jsx("span",{className:"text-xs text-gray-500",children:"rounded"})]})]})},m={render:()=>e.jsxs("div",{className:"w-[480px] rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsxs("div",{className:"flex gap-4 border-b border-gray-200 p-3 dark:border-gray-700",children:[e.jsx(r,{width:"20%",height:12}),e.jsx(r,{width:"30%",height:12}),e.jsx(r,{width:"25%",height:12}),e.jsx(r,{width:"15%",height:12})]}),Array.from({length:5}).map((n,a)=>e.jsxs("div",{className:"flex items-center gap-4 border-b border-gray-100 p-3 last:border-b-0 dark:border-gray-800",children:[e.jsx(r,{width:"20%"}),e.jsx(r,{width:"30%"}),e.jsx(r,{width:"25%"}),e.jsx(r,{variant:"rounded",width:"15%",height:24})]},a))]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    width: 320
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    lines: 4,
    width: 320
  }
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-80 rounded-xl border border-gray-200 p-4 dark:border-gray-700">
      <Skeleton variant="rounded" height={160} />
      <SkeletonGroup className="mt-4">
        <div className="flex items-center gap-3">
          <Skeleton circle width={40} />
          <Skeleton variant="text" width="60%" />
        </div>
        <Skeleton variant="text" />
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="45%" />
      </SkeletonGroup>
    </div>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-80 space-y-3">
      <Skeleton animation="shimmer" variant="rounded" height={120} />
      <Skeleton animation="shimmer" />
      <Skeleton animation="shimmer" width="75%" />
    </div>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-end gap-6">
      <div className="space-y-2 text-center">
        <Skeleton variant="text" width={120} />
        <span className="text-xs text-gray-500">text</span>
      </div>
      <div className="space-y-2 text-center">
        <Skeleton variant="circular" width={48} height={48} />
        <span className="text-xs text-gray-500">circular</span>
      </div>
      <div className="space-y-2 text-center">
        <Skeleton variant="rectangular" width={120} height={48} />
        <span className="text-xs text-gray-500">rectangular</span>
      </div>
      <div className="space-y-2 text-center">
        <Skeleton variant="rounded" width={120} height={48} />
        <span className="text-xs text-gray-500">rounded</span>
      </div>
    </div>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-[480px] rounded-lg border border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="flex gap-4 border-b border-gray-200 p-3 dark:border-gray-700">
        <Skeleton width="20%" height={12} />
        <Skeleton width="30%" height={12} />
        <Skeleton width="25%" height={12} />
        <Skeleton width="15%" height={12} />
      </div>
      {/* Rows */}
      {Array.from({
      length: 5
    }).map((_, i) => <div key={i} className="flex items-center gap-4 border-b border-gray-100 p-3 last:border-b-0 dark:border-gray-800">
          <Skeleton width="20%" />
          <Skeleton width="30%" />
          <Skeleton width="25%" />
          <Skeleton variant="rounded" width="15%" height={24} />
        </div>)}
    </div>
}`,...m.parameters?.docs?.source}}};const A=["Default","TextBlock","Card","Shimmer","Variants","TableRows"];export{o as Card,i as Default,l as Shimmer,m as TableRows,d as TextBlock,c as Variants,A as __namedExportsOrder,G as default};
