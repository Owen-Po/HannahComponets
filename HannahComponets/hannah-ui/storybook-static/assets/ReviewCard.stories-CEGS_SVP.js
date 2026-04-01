import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-D75dh1fk.js";import{c as f}from"./cn-CFNvqZE-.js";import{C as H}from"./circle-check-big-BML6Cd5O.js";import{c as v}from"./createLucideIcon-CrPkD7AF.js";import{S as R}from"./star-DSEYpkKH.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-Ce1ZTWB2.js";const M=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5",key:"slp6dd"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244",key:"o0xfot"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05",key:"wn3emo"}]],C=v("store",M);const V=[["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}],["path",{d:"M7 10v12",key:"1qc93n"}]],I=v("thumbs-up",V);function W(t){return t.split(" ").slice(0,2).map(a=>a[0]).join("").toUpperCase()}const J=({rating:t,accent:a})=>e.jsx("div",{className:"flex items-center gap-0.5",children:Array.from({length:5},(g,r)=>e.jsx(R,{size:14,className:f("shrink-0",r<Math.round(t)?"fill-current":"text-neutral-600"),style:r<Math.round(t)?{color:a}:void 0},r))});function s({author:t,avatar:a,rating:g,date:r,title:y,content:b,verified:w=!1,helpful:o,images:m,response:n,accentColor:p="#7c6aff",verifiedLabel:q="Verified Purchase",helpfulLabel:k="Helpful",responseLabel:j="Store Response",className:T}){const N={"--rc-accent":p};return e.jsxs("div",{className:f("rounded-xl border border-neutral-800 bg-neutral-900 p-5 space-y-3",T),style:N,children:[e.jsxs("div",{className:"flex items-center gap-3",children:[a?e.jsx("img",{src:a,alt:t,className:"h-10 w-10 rounded-full object-cover shrink-0"}):e.jsx("div",{className:"h-10 w-10 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0",style:{backgroundColor:p},children:W(t)}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[e.jsx("span",{className:"text-sm font-semibold text-white",children:t}),w&&e.jsxs("span",{className:"inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400",children:[e.jsx(H,{size:12}),q]})]}),e.jsx("span",{className:"text-xs text-neutral-500",children:r})]})]}),e.jsx(J,{rating:g,accent:p}),e.jsxs("div",{className:"space-y-1",children:[y&&e.jsx("p",{className:"text-sm font-semibold text-white",children:y}),e.jsx("p",{className:"text-sm text-neutral-300 leading-relaxed",children:b})]}),m&&m.length>0&&e.jsx("div",{className:"flex gap-2 overflow-x-auto pt-1",children:m.map((S,x)=>e.jsx("img",{src:S,alt:`Review photo ${x+1}`,className:"h-16 w-16 rounded-lg object-cover shrink-0 border border-neutral-700"},x))}),o&&e.jsx("div",{className:"pt-1",children:e.jsxs("button",{onClick:o.onHelpful,className:f("inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors",o.hasVoted?"text-[var(--rc-accent)] border-[var(--rc-accent)]/30 bg-[var(--rc-accent)]/10":"text-neutral-400 border-neutral-700 hover:border-neutral-500 hover:text-neutral-200"),children:[e.jsx(I,{size:13}),k," (",o.count,")"]})}),n&&e.jsxs("div",{className:"ml-4 mt-2 rounded-lg border border-neutral-800 bg-neutral-800/50 p-4 space-y-1.5",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(C,{size:14,className:"text-neutral-400"}),e.jsxs("span",{className:"text-xs font-semibold text-neutral-300",children:[j," — ",n.author]}),e.jsx("span",{className:"text-[11px] text-neutral-500",children:n.date})]}),e.jsx("p",{className:"text-sm text-neutral-400 leading-relaxed",children:n.content})]})]})}s.__docgenInfo={description:"",methods:[],displayName:"ReviewCard",props:{author:{required:!0,tsType:{name:"string"},description:""},avatar:{required:!1,tsType:{name:"string"},description:""},rating:{required:!0,tsType:{name:"number"},description:""},date:{required:!0,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},content:{required:!0,tsType:{name:"string"},description:""},verified:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},helpful:{required:!1,tsType:{name:"signature",type:"object",raw:"{ count: number; onHelpful?: () => void; hasVoted?: boolean }",signature:{properties:[{key:"count",value:{name:"number",required:!0}},{key:"onHelpful",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"hasVoted",value:{name:"boolean",required:!1}}]}},description:""},images:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},response:{required:!1,tsType:{name:"signature",type:"object",raw:"{ author: string; content: string; date: string }",signature:{properties:[{key:"author",value:{name:"string",required:!0}},{key:"content",value:{name:"string",required:!0}},{key:"date",value:{name:"string",required:!0}}]}},description:""},accentColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#7c6aff"',computed:!1}},verifiedLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Verified Purchase"',computed:!1}},helpfulLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Helpful"',computed:!1}},responseLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Store Response"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const G={title:"Components/ReviewCard",component:s,parameters:{layout:"padded"},decorators:[t=>e.jsx("div",{className:"max-w-xl mx-auto p-6",children:e.jsx(t,{})})]},i={args:{author:"Sarah Mitchell",rating:5,date:"March 15, 2026",title:"Absolutely love these!",content:"These are hands down the most comfortable sneakers I've ever owned. The cushioning is incredible and they look even better in person. Highly recommend for anyone looking for style and comfort.",verified:!0}},l={args:{author:"James Chen",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",rating:4,date:"February 28, 2026",title:"Great quality, minor fit issue",content:"The build quality is excellent and the materials feel premium. Runs slightly small so I'd recommend going half a size up. Colors are vibrant and match the product photos perfectly.",images:["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&q=80","https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200&q=80","https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=200&q=80"],verified:!0}},d={args:{author:"Emily Rodriguez",rating:3,date:"January 10, 2026",title:"Decent but expected more",content:"The product is okay but not quite what I expected from the description. The color was slightly different from the photos and shipping took longer than estimated.",response:{author:"Hannah Store",content:"Hi Emily, thank you for your feedback! We're sorry to hear about the color discrepancy. We've updated our product photos to be more accurate. Please reach out to our support team for a return or exchange.",date:"January 12, 2026"}}},c={args:{author:"Michael Park",avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",rating:5,date:"March 20, 2026",title:"Worth every penny",content:"Premium quality through and through. Fast shipping and beautiful packaging too.",verified:!0}},u={args:{author:"Lisa Wang",rating:4,date:"December 5, 2025",title:"Solid everyday sneaker",content:"Been wearing these daily for two months now and they still look and feel great. The sole has held up remarkably well on city streets. Would buy again.",verified:!0,helpful:{count:42,hasVoted:!1}}},h={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{author:"Sarah Mitchell",rating:5,date:"March 15, 2026",title:"Absolutely love these!",content:"These are hands down the most comfortable sneakers I've ever owned. Highly recommend.",verified:!0}),e.jsx(s,{author:"James Chen",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",rating:4,date:"February 28, 2026",title:"Great quality",content:"The build quality is excellent and the materials feel premium. Runs slightly small.",helpful:{count:18,hasVoted:!0}}),e.jsx(s,{author:"Emily Rodriguez",rating:3,date:"January 10, 2026",content:"Decent but not quite what I expected. The color was slightly different from the photos.",response:{author:"Hannah Store",content:"Hi Emily, we're sorry about the color discrepancy. Please contact support for assistance.",date:"January 12, 2026"}})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    author: "Sarah Mitchell",
    rating: 5,
    date: "March 15, 2026",
    title: "Absolutely love these!",
    content: "These are hands down the most comfortable sneakers I've ever owned. The cushioning is incredible and they look even better in person. Highly recommend for anyone looking for style and comfort.",
    verified: true
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    author: "James Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 4,
    date: "February 28, 2026",
    title: "Great quality, minor fit issue",
    content: "The build quality is excellent and the materials feel premium. Runs slightly small so I'd recommend going half a size up. Colors are vibrant and match the product photos perfectly.",
    images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&q=80", "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200&q=80", "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=200&q=80"],
    verified: true
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    author: "Emily Rodriguez",
    rating: 3,
    date: "January 10, 2026",
    title: "Decent but expected more",
    content: "The product is okay but not quite what I expected from the description. The color was slightly different from the photos and shipping took longer than estimated.",
    response: {
      author: "Hannah Store",
      content: "Hi Emily, thank you for your feedback! We're sorry to hear about the color discrepancy. We've updated our product photos to be more accurate. Please reach out to our support team for a return or exchange.",
      date: "January 12, 2026"
    }
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    author: "Michael Park",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    rating: 5,
    date: "March 20, 2026",
    title: "Worth every penny",
    content: "Premium quality through and through. Fast shipping and beautiful packaging too.",
    verified: true
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    author: "Lisa Wang",
    rating: 4,
    date: "December 5, 2025",
    title: "Solid everyday sneaker",
    content: "Been wearing these daily for two months now and they still look and feel great. The sole has held up remarkably well on city streets. Would buy again.",
    verified: true,
    helpful: {
      count: 42,
      hasVoted: false
    }
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <ReviewCard author="Sarah Mitchell" rating={5} date="March 15, 2026" title="Absolutely love these!" content="These are hands down the most comfortable sneakers I've ever owned. Highly recommend." verified />
      <ReviewCard author="James Chen" avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" rating={4} date="February 28, 2026" title="Great quality" content="The build quality is excellent and the materials feel premium. Runs slightly small." helpful={{
      count: 18,
      hasVoted: true
    }} />
      <ReviewCard author="Emily Rodriguez" rating={3} date="January 10, 2026" content="Decent but not quite what I expected. The color was slightly different from the photos." response={{
      author: "Hannah Store",
      content: "Hi Emily, we're sorry about the color discrepancy. Please contact support for assistance.",
      date: "January 12, 2026"
    }} />
    </div>
}`,...h.parameters?.docs?.source}}};const B=["Default","WithImages","WithResponse","Verified","Helpful","List"];export{i as Default,u as Helpful,h as List,c as Verified,l as WithImages,d as WithResponse,B as __namedExportsOrder,G as default};
