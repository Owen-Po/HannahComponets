import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as y}from"./cn-CFNvqZE-.js";import{M as D}from"./minus-Cjw9VBVs.js";import{a as U,T as A,D as w}from"./trending-up-B48WPVSI.js";import{U as N}from"./users-BBNMyoaY.js";import{S as L}from"./shopping-cart-Bw10QpX0.js";import{c as P}from"./createLucideIcon-CrPkD7AF.js";import"./bundle-mjs-Ce1ZTWB2.js";import"./iframe-D75dh1fk.js";import"./preload-helper-PPVm8Dsz.js";const _=[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]],G=P("percent",_),m=({className:r})=>e.jsx("div",{className:y("animate-pulse rounded bg-gray-200 dark:bg-gray-700",r)});function $(r){if(r.length<2)return"";const a=Math.min(...r),p=Math.max(...r)-a||1,s=r.map((l,n)=>({x:n/(r.length-1)*100,y:40-(l-a)/p*36-2}));let i=`M ${s[0].x},${s[0].y}`;for(let l=0;l<s.length-1;l++){const n=s[l],c=s[l+1],g=(n.x+c.x)/2;i+=` Q ${g},${n.y} ${g},${(n.y+c.y)/2}`,l===s.length-2&&(i+=` T ${c.x},${c.y}`)}return i}function O(r){return r.length<2?"":`${$(r)} L 100,40 L 0,40 Z`}const q=({data:r,color:a="#6366f1"})=>{const t=`spark-grad-${a.replace(/[^a-zA-Z0-9]/g,"")}`;return e.jsxs("svg",{viewBox:"0 0 100 40",preserveAspectRatio:"none",className:"h-[60px] w-full","aria-hidden":"true",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:t,x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:a,stopOpacity:.3}),e.jsx("stop",{offset:"100%",stopColor:a,stopOpacity:0})]})}),e.jsx("path",{d:O(r),fill:`url(#${t})`}),e.jsx("path",{d:$(r),fill:"none",stroke:a,strokeWidth:"2",vectorEffect:"non-scaling-stroke",strokeLinecap:"round",strokeLinejoin:"round"})]})},E={up:{icon:A,text:"text-emerald-600 dark:text-emerald-400",bg:"bg-emerald-50 dark:bg-emerald-500/10",sign:"+",defaultSparkline:"#10b981"},down:{icon:U,text:"text-red-600 dark:text-red-400",bg:"bg-red-50 dark:bg-red-500/10",sign:"",defaultSparkline:"#ef4444"},neutral:{icon:D,text:"text-gray-500 dark:text-gray-400",bg:"bg-gray-100 dark:bg-gray-500/10",sign:"",defaultSparkline:"#6b7280"}},C={default:"bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm",glass:"bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-white/20 dark:border-gray-700/40 shadow-lg",bordered:"bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700"},d=({title:r,value:a,change:t,sparkline:p,icon:s,variant:i="default",trend:l="neutral",accentColor:n,sparklineColor:c,prefix:g,suffix:M,loading:R=!1,onClick:u,className:S})=>{const o=E[l],T=c??n??o.defaultSparkline;return R?e.jsxs("div",{className:y("rounded-xl p-5 overflow-hidden",C[i],S),children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(m,{className:"h-10 w-10 rounded-full"}),e.jsx(m,{className:"h-4 w-24 rounded"})]}),e.jsx(m,{className:"h-8 w-32 rounded mb-2"}),e.jsx(m,{className:"h-4 w-20 rounded mb-4"}),e.jsx(m,{className:"h-[60px] w-full rounded"})]}):e.jsxs("div",{role:u?"button":void 0,tabIndex:u?0:void 0,onClick:u,onKeyDown:j=>{u&&(j.key==="Enter"||j.key===" ")&&(j.preventDefault(),u())},className:y("rounded-xl overflow-hidden relative transition-all duration-200",C[i],u&&"cursor-pointer hover:shadow-md active:scale-[0.99]",S),children:[i==="bordered"&&e.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-1 rounded-l-xl",style:{backgroundColor:n??o.defaultSparkline}}),e.jsxs("div",{className:"p-5 pb-0",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[s&&e.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-full",style:{backgroundColor:`${n??o.defaultSparkline}15`,color:n??o.defaultSparkline},children:e.jsx(s,{className:"h-5 w-5"})}),e.jsx("span",{className:"text-sm font-medium text-gray-500 dark:text-gray-400",children:r})]}),e.jsxs("div",{className:"text-3xl font-bold tabular-nums text-gray-900 dark:text-white mb-1",children:[g,a,M]}),t&&e.jsxs("div",{className:"flex items-center gap-1.5 mb-3",children:[e.jsxs("span",{className:y("inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold",o.bg,o.text),children:[e.jsx(o.icon,{className:"h-3 w-3"}),o.sign,Math.abs(t.value),"%"]}),t.label&&e.jsx("span",{className:"text-xs text-gray-400 dark:text-gray-500",children:t.label})]})]}),p&&p.length>=2&&e.jsx("div",{className:"mt-auto",children:e.jsx(q,{data:p,color:T})})]})};d.__docgenInfo={description:"",methods:[],displayName:"MetricCard",props:{variant:{defaultValue:{value:'"default"',computed:!1},required:!1},trend:{defaultValue:{value:'"neutral"',computed:!1},required:!1},loading:{defaultValue:{value:"false",computed:!1},required:!1}}};const H={title:"Components/MetricCard",component:d,parameters:{layout:"padded"}},v={args:{title:"Total Revenue",value:"48,235",prefix:"$",change:{value:12.5,label:"vs last month"},trend:"up",icon:w,sparkline:[30,40,35,50,45,60,55,70,65,80]}},x={render:()=>e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",children:[e.jsx(d,{title:"Total Revenue",value:"48,235",prefix:"$",change:{value:12.5,label:"vs last month"},trend:"up",icon:w,sparkline:[30,40,35,50,45,60,55,70,65,80]}),e.jsx(d,{title:"Active Users",value:"2,420",change:{value:8.1,label:"vs last week"},trend:"up",icon:N,sparkline:[20,25,22,30,28,35,40,38,42,50],accentColor:"#8b5cf6"}),e.jsx(d,{title:"Orders",value:"1,210",change:{value:3.2,label:"vs last month"},trend:"down",icon:L,sparkline:[60,55,50,48,52,45,40,42,38,35]}),e.jsx(d,{title:"Conversion Rate",value:"3.24",suffix:"%",change:{value:.8,label:"vs last month"},trend:"neutral",icon:G,sparkline:[3.1,3,3.2,3.1,3.3,3.2,3.4,3.2,3.3,3.24]})]})},f={render:()=>e.jsx("div",{className:"rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8",children:e.jsx(d,{title:"Total Revenue",value:"48,235",prefix:"$",change:{value:12.5,label:"vs last month"},trend:"up",icon:w,variant:"glass",sparkline:[30,40,35,50,45,60,55,70,65,80],sparklineColor:"#ffffff"})})},h={args:{title:"Active Users",value:"2,420",change:{value:8.1,label:"vs last week"},trend:"up",icon:N,variant:"bordered",accentColor:"#8b5cf6",sparkline:[20,25,22,30,28,35,40,38,42,50]}},b={args:{title:"Total Revenue",value:"",loading:!0}},k={args:{title:"Churn Rate",value:"5.2",suffix:"%",change:{value:2.4,label:"vs last month"},trend:"down",icon:N,sparkline:[2.8,3.1,3.5,3.8,4,4.3,4.6,4.9,5,5.2]}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Total Revenue",
    value: "48,235",
    prefix: "$",
    change: {
      value: 12.5,
      label: "vs last month"
    },
    trend: "up",
    icon: DollarSign,
    sparkline: [30, 40, 35, 50, 45, 60, 55, 70, 65, 80]
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <MetricCard title="Total Revenue" value="48,235" prefix="$" change={{
      value: 12.5,
      label: "vs last month"
    }} trend="up" icon={DollarSign} sparkline={[30, 40, 35, 50, 45, 60, 55, 70, 65, 80]} />
      <MetricCard title="Active Users" value="2,420" change={{
      value: 8.1,
      label: "vs last week"
    }} trend="up" icon={Users} sparkline={[20, 25, 22, 30, 28, 35, 40, 38, 42, 50]} accentColor="#8b5cf6" />
      <MetricCard title="Orders" value="1,210" change={{
      value: 3.2,
      label: "vs last month"
    }} trend="down" icon={ShoppingCart} sparkline={[60, 55, 50, 48, 52, 45, 40, 42, 38, 35]} />
      <MetricCard title="Conversion Rate" value="3.24" suffix="%" change={{
      value: 0.8,
      label: "vs last month"
    }} trend="neutral" icon={Percent} sparkline={[3.1, 3.0, 3.2, 3.1, 3.3, 3.2, 3.4, 3.2, 3.3, 3.24]} />
    </div>
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8">
      <MetricCard title="Total Revenue" value="48,235" prefix="$" change={{
      value: 12.5,
      label: "vs last month"
    }} trend="up" icon={DollarSign} variant="glass" sparkline={[30, 40, 35, 50, 45, 60, 55, 70, 65, 80]} sparklineColor="#ffffff" />
    </div>
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Active Users",
    value: "2,420",
    change: {
      value: 8.1,
      label: "vs last week"
    },
    trend: "up",
    icon: Users,
    variant: "bordered",
    accentColor: "#8b5cf6",
    sparkline: [20, 25, 22, 30, 28, 35, 40, 38, 42, 50]
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Total Revenue",
    value: "",
    loading: true
  }
}`,...b.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Churn Rate",
    value: "5.2",
    suffix: "%",
    change: {
      value: 2.4,
      label: "vs last month"
    },
    trend: "down",
    icon: Users,
    sparkline: [2.8, 3.1, 3.5, 3.8, 4.0, 4.3, 4.6, 4.9, 5.0, 5.2]
  }
}`,...k.parameters?.docs?.source}}};const J=["Default","Grid","Glass","Bordered","Loading","Negative"];export{h as Bordered,v as Default,f as Glass,x as Grid,b as Loading,k as Negative,J as __namedExportsOrder,H as default};
