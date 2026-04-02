import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as v}from"./iframe-vHIwjOwQ.js";import{c as i}from"./cn-C1oRmgnl.js";import{C as H}from"./check-DDGJN-oM.js";import{c as U}from"./createLucideIcon-C-Otocs2.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-Ce1ZTWB2.js";const I=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]],R=U("clipboard",I);function L({content:a,language:c,variant:t="code",showLineNumbers:_=!1,maxHeight:f,title:l,accentColor:k="#7c6aff",copiedMessage:w="Copied!",copyLabel:j="Copy",className:S}){const[d,p]=v.useState(!1),s=v.useRef(null),q=v.useCallback(async()=>{try{await navigator.clipboard.writeText(a),p(!0),s.current&&clearTimeout(s.current),s.current=setTimeout(()=>p(!1),2e3)}catch{const n=document.createElement("textarea");n.value=a,n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n),p(!0),s.current&&clearTimeout(s.current),s.current=setTimeout(()=>p(!1),2e3)}},[a]),B=a.split(`
`),r=t==="terminal",o=t==="inline",N=i("group relative w-full overflow-hidden text-sm",t==="code"&&["rounded-xl border border-gray-200 bg-gray-50","dark:border-gray-800 dark:bg-gray-900"],r&&["rounded-xl border border-gray-800 bg-gray-950"],o&&["inline-flex items-center rounded-lg border border-gray-200 bg-gray-100","dark:border-gray-700 dark:bg-gray-800"],S),E=l?e.jsxs("div",{className:i("flex items-center gap-2 border-b px-4 py-2 text-xs font-medium select-none",t==="code"&&"border-gray-200 bg-gray-100/60 text-gray-600 dark:border-gray-800 dark:bg-gray-800/50 dark:text-gray-400",r&&"border-gray-800 bg-gray-900 text-gray-400"),children:[r&&e.jsxs("span",{className:"flex gap-1.5",children:[e.jsx("span",{className:"h-3 w-3 rounded-full bg-red-500/80"}),e.jsx("span",{className:"h-3 w-3 rounded-full bg-yellow-500/80"}),e.jsx("span",{className:"h-3 w-3 rounded-full bg-green-500/80"})]}),e.jsx("span",{children:l})]}):null,u=c&&!o?e.jsx("span",{className:i("absolute left-3 top-2 z-10 rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider select-none",t==="code"&&"bg-gray-200/80 text-gray-500 dark:bg-gray-700/80 dark:text-gray-400",r&&"bg-gray-800 text-gray-500"),style:c?{borderBottom:`2px solid ${k}`}:void 0,children:c}):null,T=e.jsx("button",{type:"button",onClick:q,"aria-label":d?w:j,className:i("absolute z-10 flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all duration-200","opacity-0 group-hover:opacity-100 focus-visible:opacity-100",d&&"opacity-100",o?"relative right-0 top-0 shrink-0 opacity-100":"right-3 top-2",t==="code"&&["bg-white/80 text-gray-600 shadow-sm backdrop-blur-sm","hover:bg-white hover:text-gray-900","dark:bg-gray-800/80 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"],r&&["bg-gray-800/80 text-gray-400 backdrop-blur-sm","hover:bg-gray-700 hover:text-gray-200"],o&&["bg-transparent text-gray-500 hover:text-gray-900","dark:text-gray-400 dark:hover:text-gray-200"]),style:d?{color:k}:void 0,children:d?e.jsxs(e.Fragment,{children:[e.jsx(H,{size:14,strokeWidth:2.5}),e.jsx("span",{children:w})]}):e.jsxs(e.Fragment,{children:[e.jsx(R,{size:14}),!o&&e.jsx("span",{children:j})]})});if(o)return e.jsxs("span",{className:N,children:[e.jsx("code",{className:"flex-1 truncate px-3 py-2 font-mono text-xs text-gray-700 dark:text-gray-300",children:a}),T]});const A=e.jsx("div",{className:"overflow-x-auto overflow-y-auto",style:f?{maxHeight:f}:void 0,children:e.jsx("pre",{className:i("p-4 font-mono text-[13px] leading-relaxed",c&&!l&&"pt-9",t==="code"&&"text-gray-800 dark:text-gray-200",r&&"text-gray-100"),children:e.jsx("code",{children:B.map((n,C)=>e.jsxs("div",{className:"flex",children:[_&&e.jsx("span",{className:i("mr-6 inline-block w-6 shrink-0 text-right select-none",t==="code"&&"text-gray-400 dark:text-gray-600",r&&"text-gray-600"),children:C+1}),r&&e.jsx("span",{className:"mr-2 select-none text-green-400",children:"$"}),e.jsx("span",{className:"flex-1 whitespace-pre",children:n})]},C))})})});return e.jsxs("div",{className:N,children:[u&&!l&&u,E,u&&l&&u,T,A]})}L.__docgenInfo={description:"",methods:[],displayName:"CopyBlock",props:{content:{required:!0,tsType:{name:"string"},description:"The text to display and copy"},language:{required:!1,tsType:{name:"string"},description:'Language label shown as a pill (e.g. "bash", "tsx", "url")'},variant:{required:!1,tsType:{name:"union",raw:'"code" | "terminal" | "inline"',elements:[{name:"literal",value:'"code"'},{name:"literal",value:'"terminal"'},{name:"literal",value:'"inline"'}]},description:"Visual variant",defaultValue:{value:'"code"',computed:!1}},showLineNumbers:{required:!1,tsType:{name:"boolean"},description:"Show line numbers",defaultValue:{value:"false",computed:!1}},maxHeight:{required:!1,tsType:{name:"number"},description:"Max height in px — enables vertical scroll"},title:{required:!1,tsType:{name:"string"},description:"Title / filename shown as a tab header"},accentColor:{required:!1,tsType:{name:"string"},description:"Accent color for highlights",defaultValue:{value:'"#7c6aff"',computed:!1}},copiedMessage:{required:!1,tsType:{name:"string"},description:"Tooltip text after copying",defaultValue:{value:'"Copied!"',computed:!1}},copyLabel:{required:!1,tsType:{name:"string"},description:"Tooltip text before copying",defaultValue:{value:'"Copy"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class names"}}};const O={title:"Components/CopyBlock",component:L,parameters:{layout:"centered",docs:{description:{component:"Code/text block with one-click copy. Supports code, terminal, and inline variants with language tags, line numbers, and scroll."}}},argTypes:{variant:{control:"select",options:["code","terminal","inline"]},showLineNumbers:{control:"boolean"},maxHeight:{control:"number"}},decorators:[a=>e.jsx("div",{className:"w-[600px]",children:e.jsx(a,{})})]},m={args:{variant:"code",language:"tsx",title:"App.tsx",content:`import { CopyBlock } from "hannah-ui";

export default function App() {
  return (
    <CopyBlock
      content="npm install hannah-ui"
      variant="terminal"
      language="bash"
    />
  );
}`}},g={args:{variant:"terminal",title:"Terminal",content:`npm install hannah-ui
npm run dev`}},h={args:{variant:"inline",content:"YOUR_API_KEY_HERE"}},y={args:{variant:"code",language:"typescript",showLineNumbers:!0,content:`interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "member" | "viewer";
}

function getUser(id: string): Promise<User> {
  return fetch(\`/api/users/\${id}\`)
    .then((res) => res.json());
}`}},x={args:{variant:"code",language:"bash",title:"install.sh",content:`#!/bin/bash
curl -fsSL https://hannah-ui.dev/install.sh | bash
source ~/.bashrc
hannah init my-project`}},b={args:{variant:"code",language:"json",title:"package.json",maxHeight:200,showLineNumbers:!0,content:`{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext .ts,.tsx",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "hannah-ui": "^2.0.0",
    "lucide-react": "^0.400.0",
    "tailwindcss": "^4.0.0"
  },
  "devDependencies": {
    "typescript": "^5.6.0",
    "vite": "^6.0.0",
    "@storybook/react": "^8.0.0"
  }
}`}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "code",
    language: "tsx",
    title: "App.tsx",
    content: \`import { CopyBlock } from "hannah-ui";

export default function App() {
  return (
    <CopyBlock
      content="npm install hannah-ui"
      variant="terminal"
      language="bash"
    />
  );
}\`
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "terminal",
    title: "Terminal",
    content: \`npm install hannah-ui
npm run dev\`
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "inline",
    content: "YOUR_API_KEY_HERE"
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "code",
    language: "typescript",
    showLineNumbers: true,
    content: \`interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "member" | "viewer";
}

function getUser(id: string): Promise<User> {
  return fetch(\\\`/api/users/\\\${id}\\\`)
    .then((res) => res.json());
}\`
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "code",
    language: "bash",
    title: "install.sh",
    content: \`#!/bin/bash
curl -fsSL https://hannah-ui.dev/install.sh | bash
source ~/.bashrc
hannah init my-project\`
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "code",
    language: "json",
    title: "package.json",
    maxHeight: 200,
    showLineNumbers: true,
    content: \`{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext .ts,.tsx",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "hannah-ui": "^2.0.0",
    "lucide-react": "^0.400.0",
    "tailwindcss": "^4.0.0"
  },
  "devDependencies": {
    "typescript": "^5.6.0",
    "vite": "^6.0.0",
    "@storybook/react": "^8.0.0"
  }
}\`
  }
}`,...b.parameters?.docs?.source}}};const D=["Code","Terminal","Inline","WithLineNumbers","WithTitle","MaxHeight"];export{m as Code,h as Inline,b as MaxHeight,g as Terminal,y as WithLineNumbers,x as WithTitle,D as __namedExportsOrder,O as default};
