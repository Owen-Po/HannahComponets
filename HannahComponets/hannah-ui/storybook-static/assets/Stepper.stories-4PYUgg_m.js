import{j as e}from"./jsx-runtime-u17CrQMm.js";import{a as R,r as T}from"./iframe-vHIwjOwQ.js";import{c as o}from"./cn-C1oRmgnl.js";import{L as M}from"./loader-circle-C1dUG3Ou.js";import{C as B}from"./check-DDGJN-oM.js";import{S as E}from"./shopping-cart-CNOeZXaa.js";import{T as W}from"./truck-Gbh3feN6.js";import{C as _}from"./credit-card-ByFh7_IN.js";import{C as D}from"./circle-check-big-CxAwemoR.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-Ce1ZTWB2.js";import"./createLucideIcon-C-Otocs2.js";const H={sm:"h-7 w-7 text-xs",md:"h-9 w-9 text-sm",lg:"h-11 w-11 text-base"},P={sm:12,md:16,lg:20},V={sm:"text-xs",md:"text-sm",lg:"text-base"},A={sm:"text-[10px]",md:"text-xs",lg:"text-sm"},p=({steps:a,activeStep:s,onStepClick:n,accentColor:i="#7c6aff",variant:k="horizontal",size:d="md",showStepNumbers:S=!0,allowClickPast:N=!1,className:l})=>{const c=r=>r<s,h=r=>r===s,w=r=>n?!!(c(r)||N):!1,q=(r,t)=>{const j=c(t),f=h(t),I=r.icon;return e.jsxs("button",{type:"button",disabled:!w(t),onClick:()=>w(t)&&n?.(t),className:o("relative flex shrink-0 items-center justify-center rounded-full font-semibold transition-all duration-300 select-none",H[d],w(t)?"cursor-pointer":"cursor-default",!j&&!f&&"bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400"),style:{...j||f?{backgroundColor:i,color:"#fff"}:{}},"aria-current":f?"step":void 0,children:[f&&e.jsx("span",{className:"absolute inset-0 animate-ping rounded-full opacity-25",style:{backgroundColor:i}}),j?e.jsx(B,{size:P[d],strokeWidth:3}):I&&!S?e.jsx(I,{size:P[d]}):e.jsx("span",{children:t+1})]})},F=r=>{const t=c(r+1);return e.jsx("div",{className:o("mx-1 h-0.5 flex-1 transition-all duration-500",t?"":"border-t-2 border-dashed border-gray-300 dark:border-gray-600"),style:t?{backgroundColor:i}:{}})},L=r=>{const t=c(r+1);return e.jsx("div",{className:o("ml-[50%] w-0.5 -translate-x-1/2 transition-all duration-500",d==="sm"?"h-6":d==="md"?"h-8":"h-10",t?"":"border-l-2 border-dashed border-gray-300 dark:border-gray-600"),style:{...t?{backgroundColor:i}:{}}})};return k==="horizontal"?e.jsxs("div",{className:o("w-full",l),children:[e.jsx("div",{className:"flex items-center",children:a.map((r,t)=>e.jsxs(R.Fragment,{children:[e.jsxs("div",{className:"flex flex-col items-center gap-1.5",children:[q(r,t),e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:o("font-semibold leading-tight transition-colors duration-300",V[d],h(t)?"text-gray-900 dark:text-white":c(t)?"text-gray-700 dark:text-gray-300":"text-gray-400 dark:text-gray-500"),children:r.label}),r.description&&e.jsx("p",{className:o("mt-0.5 leading-tight text-gray-400 dark:text-gray-500",A[d]),children:r.description})]})]}),t<a.length-1&&F(t)]},r.id))}),a[s]?.content&&e.jsx("div",{className:"mt-6",children:a[s].content})]}):e.jsx("div",{className:o("w-full",l),children:a.map((r,t)=>e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("div",{className:"flex flex-col items-center",children:[q(r,t),t<a.length-1&&L(t)]}),e.jsxs("div",{className:o("pb-8",t===a.length-1&&"pb-0"),children:[e.jsx("p",{className:o("font-semibold leading-tight transition-colors duration-300",V[d],h(t)?"text-gray-900 dark:text-white":c(t)?"text-gray-700 dark:text-gray-300":"text-gray-400 dark:text-gray-500"),children:r.label}),r.description&&e.jsx("p",{className:o("mt-0.5 leading-tight text-gray-400 dark:text-gray-500",A[d]),children:r.description}),h(t)&&r.content&&e.jsx("div",{className:"mt-3",children:r.content})]})]},r.id))})},v=({onPrev:a,onNext:s,prevLabel:n="Back",nextLabel:i="Next",finishLabel:k="Finish",isFirst:d,isLast:S,accentColor:N="#7c6aff",loading:l=!1})=>e.jsxs("div",{className:"flex items-center justify-between gap-3 pt-6",children:[e.jsx("button",{type:"button",onClick:a,disabled:d||l,className:o("rounded-lg border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 transition-colors","hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40","dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"),children:n}),e.jsxs("button",{type:"button",onClick:s,disabled:l,className:o("flex items-center gap-2 rounded-lg px-5 py-2 text-sm font-medium text-white transition-colors","hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"),style:{backgroundColor:N},children:[l&&e.jsx(M,{size:14,className:"animate-spin"}),S?k:i]})]});p.displayName="Stepper";v.displayName="StepperActions";p.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"StepItem"}],raw:"StepItem[]"},description:""},activeStep:{required:!0,tsType:{name:"number"},description:""},onStepClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},accentColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#7c6aff"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},showStepNumbers:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},allowClickPast:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};v.__docgenInfo={description:"",methods:[],displayName:"StepperActions",props:{onPrev:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onNext:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},prevLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Back"',computed:!1}},nextLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Next"',computed:!1}},finishLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Finish"',computed:!1}},isFirst:{required:!0,tsType:{name:"boolean"},description:""},isLast:{required:!0,tsType:{name:"boolean"},description:""},accentColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#7c6aff"',computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const re={title:"Components/Stepper",component:p,parameters:{layout:"padded",docs:{description:{component:"Multi-step wizard indicator for onboarding flows, checkout processes and form wizards."}}}},z=[{id:"cart",label:"Cart",description:"Review items"},{id:"shipping",label:"Shipping",description:"Delivery address"},{id:"payment",label:"Payment",description:"Billing info"},{id:"confirm",label:"Confirmation",description:"Order summary"}],C=[{id:"profile",label:"Profile",description:"Tell us about yourself",content:e.jsxs("div",{className:"space-y-3 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900",children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:["Full name",e.jsx("input",{type:"text",placeholder:"Jane Doe",className:"mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white"})]}),e.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:["Email",e.jsx("input",{type:"email",placeholder:"jane@company.com",className:"mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white"})]})]})},{id:"preferences",label:"Preferences",description:"Customize your experience",content:e.jsxs("div",{className:"space-y-2 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900",children:[e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Select the topics you are interested in:"}),["Design Systems","React","TypeScript","Accessibility"].map(a=>e.jsxs("label",{className:"flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("input",{type:"checkbox",className:"accent-[#7c6aff]"}),a]},a))]})},{id:"done",label:"All set!",description:"You are ready to go",content:e.jsx("div",{className:"rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-300",children:"Your account is configured. Welcome aboard!"})}],m={args:{steps:z,activeStep:2,variant:"horizontal"}},g={render:()=>{const[a,s]=T.useState(0);return e.jsxs("div",{className:"max-w-md",children:[e.jsx(p,{steps:C,activeStep:a,variant:"vertical",onStepClick:n=>n<a&&s(n)}),e.jsx(v,{isFirst:a===0,isLast:a===C.length-1,onPrev:()=>s(n=>Math.max(0,n-1)),onNext:()=>s(n=>Math.min(C.length-1,n+1))})]})}},u={render:()=>{const a=[{id:"info",label:"Information",description:"Basic details",content:e.jsxs("div",{className:"rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-900",children:[e.jsx("h3",{className:"mb-2 font-semibold text-gray-800 dark:text-white",children:"Step 1: Information"}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Fill in your personal information to get started."})]})},{id:"address",label:"Address",description:"Where to ship",content:e.jsxs("div",{className:"rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-900",children:[e.jsx("h3",{className:"mb-2 font-semibold text-gray-800 dark:text-white",children:"Step 2: Address"}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Enter your shipping address details."})]})},{id:"review",label:"Review",description:"Confirm order",content:e.jsxs("div",{className:"rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-900",children:[e.jsx("h3",{className:"mb-2 font-semibold text-gray-800 dark:text-white",children:"Step 3: Review"}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Review your order before placing it."})]})}],[s,n]=T.useState(0);return e.jsxs("div",{className:"mx-auto max-w-xl",children:[e.jsx(p,{steps:a,activeStep:s,onStepClick:i=>i<s&&n(i)}),e.jsx(v,{isFirst:s===0,isLast:s===a.length-1,onPrev:()=>n(i=>Math.max(0,i-1)),onNext:()=>n(i=>Math.min(a.length-1,i+1))})]})}},x={args:{steps:z,activeStep:1,size:"sm"}},y={args:{steps:[{id:"cart",label:"Cart",icon:E},{id:"shipping",label:"Shipping",icon:W},{id:"payment",label:"Payment",icon:_},{id:"confirm",label:"Done",icon:D}],activeStep:1,showStepNumbers:!1,accentColor:"#10b981"}},b={render:()=>{const[a,s]=T.useState(2);return e.jsxs("div",{className:"mx-auto max-w-xl",children:[e.jsx(p,{steps:z,activeStep:a,onStepClick:n=>s(n),allowClickPast:!1}),e.jsx("p",{className:"mt-4 text-center text-sm text-gray-500 dark:text-gray-400",children:"Click a completed step to navigate back."})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    steps: checkoutSteps,
    activeStep: 2,
    variant: "horizontal"
  }
}`,...m.parameters?.docs?.source},description:{story:"Horizontal 4-step checkout with step 2 (Payment) active.",...m.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [step, setStep] = useState(0);
    return <div className="max-w-md">
        <Stepper steps={onboardingSteps} activeStep={step} variant="vertical" onStepClick={i => i < step && setStep(i)} />
        <StepperActions isFirst={step === 0} isLast={step === onboardingSteps.length - 1} onPrev={() => setStep(s => Math.max(0, s - 1))} onNext={() => setStep(s => Math.min(onboardingSteps.length - 1, s + 1))} />
      </div>;
  }
}`,...g.parameters?.docs?.source},description:{story:"Vertical onboarding with interactive step advancement.",...g.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const wizardSteps: StepItem[] = [{
      id: "info",
      label: "Information",
      description: "Basic details",
      content: <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-900">
            <h3 className="mb-2 font-semibold text-gray-800 dark:text-white">
              Step 1: Information
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Fill in your personal information to get started.
            </p>
          </div>
    }, {
      id: "address",
      label: "Address",
      description: "Where to ship",
      content: <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-900">
            <h3 className="mb-2 font-semibold text-gray-800 dark:text-white">
              Step 2: Address
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enter your shipping address details.
            </p>
          </div>
    }, {
      id: "review",
      label: "Review",
      description: "Confirm order",
      content: <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-900">
            <h3 className="mb-2 font-semibold text-gray-800 dark:text-white">
              Step 3: Review
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Review your order before placing it.
            </p>
          </div>
    }];
    const [step, setStep] = useState(0);
    return <div className="mx-auto max-w-xl">
        <Stepper steps={wizardSteps} activeStep={step} onStepClick={i => i < step && setStep(i)} />
        <StepperActions isFirst={step === 0} isLast={step === wizardSteps.length - 1} onPrev={() => setStep(s => Math.max(0, s - 1))} onNext={() => setStep(s => Math.min(wizardSteps.length - 1, s + 1))} />
      </div>;
  }
}`,...u.parameters?.docs?.source},description:{story:"Full interactive wizard with content panel.",...u.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    steps: checkoutSteps,
    activeStep: 1,
    size: "sm"
  }
}`,...x.parameters?.docs?.source},description:{story:"Small size variant.",...x.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      id: "cart",
      label: "Cart",
      icon: ShoppingCart
    }, {
      id: "shipping",
      label: "Shipping",
      icon: Truck
    }, {
      id: "payment",
      label: "Payment",
      icon: CreditCard
    }, {
      id: "confirm",
      label: "Done",
      icon: CheckCircle
    }],
    activeStep: 1,
    showStepNumbers: false,
    accentColor: "#10b981"
  }
}`,...y.parameters?.docs?.source},description:{story:"Custom icons per step instead of numbers.",...y.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [step, setStep] = useState(2);
    return <div className="mx-auto max-w-xl">
        <Stepper steps={checkoutSteps} activeStep={step} onStepClick={i => setStep(i)} allowClickPast={false} />
        <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          Click a completed step to navigate back.
        </p>
      </div>;
  }
}`,...b.parameters?.docs?.source},description:{story:"Click completed steps to go back.",...b.parameters?.docs?.description}}};const ae=["Horizontal","Vertical","Interactive","Small","WithIcons","ClickableSteps"];export{b as ClickableSteps,m as Horizontal,u as Interactive,x as Small,g as Vertical,y as WithIcons,ae as __namedExportsOrder,re as default};
