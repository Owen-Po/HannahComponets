import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-vHIwjOwQ.js";import{c as i}from"./cn-C1oRmgnl.js";import{C as R}from"./check-DDGJN-oM.js";import{c as W}from"./createLucideIcon-C-Otocs2.js";import{Z as L}from"./zap-XxdpCn70.js";import{P as z}from"./package-DU7Dq9_V.js";import{T as J}from"./truck-Gbh3feN6.js";import{S as A}from"./star-BJfEYQjY.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-Ce1ZTWB2.js";const D=[["path",{d:"M15 6a9 9 0 0 0-9 9V3",key:"1cii5b"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}]],q=W("git-branch",D),w=({items:o,accentColor:f="#7c6aff",variant:x="default",showConnector:N=!0,className:j})=>{const t=x==="compact",C=x==="card";return e.jsx("div",{className:i("relative flex flex-col",j),children:o.map((s,u)=>{const h=u===o.length-1,a=s.status??"pending",n=s.icon,g=s.iconColor??f,P=t?"h-2.5 w-2.5":"h-4 w-4",S=t?0:10,y=t?"pl-6 pb-4":"pl-8 pb-8",v=t?"left-[5.5px]":"left-[8px]",M=e.jsxs("div",{className:i("relative z-10 flex shrink-0 items-center justify-center rounded-full",P,a==="pending"&&"border-2 border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-900"),style:a!=="pending"?{backgroundColor:g}:void 0,children:[a==="completed"&&!t&&e.jsx(R,{className:"h-2.5 w-2.5 text-white",strokeWidth:3}),a==="active"&&!t&&n&&e.jsx(n,{className:"text-white",size:S,strokeWidth:2.5}),a==="active"&&e.jsx("span",{className:"absolute inset-0 animate-ping rounded-full opacity-40",style:{backgroundColor:g}})]}),b=!t&&n&&a==="completed"?e.jsx("div",{className:"relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full",style:{backgroundColor:g},children:e.jsx(n,{className:"h-3 w-3 text-white",strokeWidth:2.5})}):!t&&n&&a!=="active"&&a!=="completed"?e.jsx("div",{className:"relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-900",children:e.jsx(n,{className:"h-3 w-3 text-gray-400 dark:text-gray-500",strokeWidth:2.5})}):null,r=b!==null,T=r?t?v:"left-[11.5px]":v,I=r?t?y:"pl-10 pb-8":y,k=e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:i("font-medium leading-tight",t?"text-sm":"text-[15px]",a==="pending"?"text-gray-400 dark:text-gray-500":"text-gray-900 dark:text-gray-100"),children:s.title}),s.timestamp&&e.jsx("span",{className:"whitespace-nowrap text-xs text-gray-400 dark:text-gray-500",children:s.timestamp})]}),s.description&&e.jsx("p",{className:i("mt-1 leading-relaxed text-gray-500 dark:text-gray-400",t?"text-xs":"text-sm"),children:s.description}),s.content&&e.jsx("div",{className:"mt-3",children:s.content})]});return e.jsxs("div",{className:"relative flex items-start",children:[N&&!h&&e.jsx("div",{className:i("absolute top-4 bottom-0 w-px",T,r&&"top-6",a==="pending"||o[u+1]?.status==="pending"?"bg-gray-200 dark:bg-gray-700":""),style:a!=="pending"&&o[u+1]?.status!=="pending"?{backgroundColor:`${f}33`}:void 0}),e.jsx("div",{className:i("mt-0.5 flex shrink-0 items-start",r?"mt-0":"mt-1"),children:r?b:M}),e.jsx("div",{className:i(I,h&&"pb-0","min-w-0"),children:C?e.jsx("div",{className:"rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800",children:k}):k})]},s.id)})})};w.__docgenInfo={description:"",methods:[],displayName:"Timeline",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"TimelineItem"}],raw:"TimelineItem[]"},description:""},accentColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#7c6aff"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"default" | "compact" | "card"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"compact"'},{name:"literal",value:'"card"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},showConnector:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const $={title:"Components/Timeline",component:w,parameters:{layout:"centered"}},d={args:{items:[{id:"1",title:"Order placed",description:"Your order #4821 has been confirmed.",timestamp:"Mar 15",status:"completed"},{id:"2",title:"Processing",description:"We are preparing your items for shipment.",timestamp:"Mar 16",status:"completed"},{id:"3",title:"Shipped",description:"Your package is on its way via express delivery.",timestamp:"Mar 17",status:"active"},{id:"4",title:"Delivered",description:"Estimated arrival: Mar 19",status:"pending"}]}},c={args:{items:[{id:"1",title:"John created a project",description:"New project 'Hannah UI' was initialized.",timestamp:"2 hours ago",status:"completed"},{id:"2",title:"Sarah commented",description:`"Looks great! Let's add a timeline component."`,timestamp:"1 hour ago",status:"completed"},{id:"3",title:"Mike uploaded files",description:"Added 3 design assets to the project.",timestamp:"30 min ago",status:"active"}]}},l={args:{variant:"compact",items:[{id:"1",title:"v2.0 released",timestamp:"Jan 10",status:"completed"},{id:"2",title:"Bug fix for login flow",timestamp:"Jan 8",status:"completed"},{id:"3",title:"New dashboard design",timestamp:"Jan 5",status:"completed"},{id:"4",title:"API v3 migration",timestamp:"In progress",status:"active"},{id:"5",title:"Mobile app launch",timestamp:"Planned",status:"pending"}]}},m={args:{variant:"card",items:[{id:"1",title:"Deployment successful",description:"Production build v3.2.1 deployed to all regions.",timestamp:"Today, 2:30 PM",status:"completed",content:e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400",children:"Production"}),e.jsx("span",{className:"rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",children:"v3.2.1"})]})},{id:"2",title:"Code review approved",description:"PR #142 was approved by 2 reviewers.",timestamp:"Today, 1:15 PM",status:"completed"},{id:"3",title:"Running tests",description:"Integration test suite in progress (47/120).",timestamp:"Now",status:"active",content:e.jsx("div",{className:"h-1.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700",children:e.jsx("div",{className:"h-full rounded-full bg-violet-500",style:{width:"39%"}})})},{id:"4",title:"Staging deployment",description:"Waiting for tests to complete.",status:"pending"}]}},p={args:{items:[{id:"1",title:"Repository created",icon:q,iconColor:"#10b981",status:"completed",timestamp:"Week ago"},{id:"2",title:"First commit pushed",icon:L,iconColor:"#f59e0b",status:"completed",timestamp:"6 days ago"},{id:"3",title:"Package published",icon:z,iconColor:"#6366f1",status:"completed",timestamp:"3 days ago"},{id:"4",title:"Shipping to users",icon:J,iconColor:"#3b82f6",status:"active",timestamp:"Now",description:"Rolling out to all customers."},{id:"5",title:"Community milestone",icon:A,iconColor:"#eab308",status:"pending",description:"Reach 1,000 stars on GitHub."}]}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "1",
      title: "Order placed",
      description: "Your order #4821 has been confirmed.",
      timestamp: "Mar 15",
      status: "completed"
    }, {
      id: "2",
      title: "Processing",
      description: "We are preparing your items for shipment.",
      timestamp: "Mar 16",
      status: "completed"
    }, {
      id: "3",
      title: "Shipped",
      description: "Your package is on its way via express delivery.",
      timestamp: "Mar 17",
      status: "active"
    }, {
      id: "4",
      title: "Delivered",
      description: "Estimated arrival: Mar 19",
      status: "pending"
    }]
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "1",
      title: "John created a project",
      description: "New project 'Hannah UI' was initialized.",
      timestamp: "2 hours ago",
      status: "completed"
    }, {
      id: "2",
      title: "Sarah commented",
      description: '"Looks great! Let\\'s add a timeline component."',
      timestamp: "1 hour ago",
      status: "completed"
    }, {
      id: "3",
      title: "Mike uploaded files",
      description: "Added 3 design assets to the project.",
      timestamp: "30 min ago",
      status: "active"
    }]
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "compact",
    items: [{
      id: "1",
      title: "v2.0 released",
      timestamp: "Jan 10",
      status: "completed"
    }, {
      id: "2",
      title: "Bug fix for login flow",
      timestamp: "Jan 8",
      status: "completed"
    }, {
      id: "3",
      title: "New dashboard design",
      timestamp: "Jan 5",
      status: "completed"
    }, {
      id: "4",
      title: "API v3 migration",
      timestamp: "In progress",
      status: "active"
    }, {
      id: "5",
      title: "Mobile app launch",
      timestamp: "Planned",
      status: "pending"
    }]
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "card",
    items: [{
      id: "1",
      title: "Deployment successful",
      description: "Production build v3.2.1 deployed to all regions.",
      timestamp: "Today, 2:30 PM",
      status: "completed",
      content: <div className="flex gap-2">
            <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
              Production
            </span>
            <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
              v3.2.1
            </span>
          </div>
    }, {
      id: "2",
      title: "Code review approved",
      description: "PR #142 was approved by 2 reviewers.",
      timestamp: "Today, 1:15 PM",
      status: "completed"
    }, {
      id: "3",
      title: "Running tests",
      description: "Integration test suite in progress (47/120).",
      timestamp: "Now",
      status: "active",
      content: <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
            <div className="h-full rounded-full bg-violet-500" style={{
          width: "39%"
        }} />
          </div>
    }, {
      id: "4",
      title: "Staging deployment",
      description: "Waiting for tests to complete.",
      status: "pending"
    }]
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "1",
      title: "Repository created",
      icon: GitBranch,
      iconColor: "#10b981",
      status: "completed",
      timestamp: "Week ago"
    }, {
      id: "2",
      title: "First commit pushed",
      icon: Zap,
      iconColor: "#f59e0b",
      status: "completed",
      timestamp: "6 days ago"
    }, {
      id: "3",
      title: "Package published",
      icon: Package,
      iconColor: "#6366f1",
      status: "completed",
      timestamp: "3 days ago"
    }, {
      id: "4",
      title: "Shipping to users",
      icon: Truck,
      iconColor: "#3b82f6",
      status: "active",
      timestamp: "Now",
      description: "Rolling out to all customers."
    }, {
      id: "5",
      title: "Community milestone",
      icon: Star,
      iconColor: "#eab308",
      status: "pending",
      description: "Reach 1,000 stars on GitHub."
    }]
  }
}`,...p.parameters?.docs?.source}}};const K=["Default","ActivityFeed","Compact","Card","CustomIcons"];export{c as ActivityFeed,m as Card,l as Compact,p as CustomIcons,d as Default,K as __namedExportsOrder,$ as default};
