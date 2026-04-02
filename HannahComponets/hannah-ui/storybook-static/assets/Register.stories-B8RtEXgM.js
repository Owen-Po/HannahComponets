import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as i}from"./iframe-vHIwjOwQ.js";import{c as _}from"./cn-C1oRmgnl.js";import{c as Ae}from"./createLucideIcon-C-Otocs2.js";import{C as c}from"./circle-alert-I7kSXSZc.js";import{a as U,E as K}from"./eye-DIqHd74S.js";import{L as qe}from"./loader-circle-C1dUG3Ou.js";import{A as Ee}from"./arrow-right-DM0dZBG_.js";import{C as Ve}from"./check-DDGJN-oM.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-Ce1ZTWB2.js";const Me=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],Ie=Ae("user-plus",Me),X=({title:re="Crear cuenta",description:se="Completa tus datos para registrarte.",companyName:$="Sistema",heroTitle:te,heroSubtitle:oe,heroTagline:ne="Component Library",heroImage:O,submitLabel:ie="Registrarme",nameLabel:le="Nombre completo",namePlaceholder:ce="Tu nombre",emailLabel:de="Correo electrónico",emailPlaceholder:me="correo@empresa.com",passwordLabel:ue="Contraseña",passwordPlaceholder:pe="••••••••",confirmPasswordLabel:ge="Confirmar contraseña",confirmPasswordPlaceholder:he="••••••••",showHero:xe=!0,logo:J,accentColor:s="#7c6aff",loading:t=!1,error:Q,validationRules:fe={},loginLink:m,termsLink:o,socialProviders:F,showTermsCheckbox:u=!1,termsCheckboxLabel:be,onSubmit:ye,onChange:ve})=>{const{minPasswordLength:W=6,emailPattern:Y=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,nameMinLength:G=2,emailErrorMessage:ke="Ingresa un correo válido.",passwordErrorMessage:we=`La contraseña debe tener al menos ${W} caracteres.`,confirmPasswordErrorMessage:je="Las contraseñas no coinciden.",nameErrorMessage:Ce=`El nombre debe tener al menos ${G} caracteres.`}=fe,[H,Ne]=i.useState(!1),[D,Le]=i.useState(!1),[B,Se]=i.useState(!1),[p,Z]=i.useState({name:!1,email:!1,password:!1,confirmPassword:!1}),[Pe,l]=i.useState(null),[r,Te]=i.useState({name:"",email:"",password:"",confirmPassword:""}),g=p.name&&r.name.trim().length<G,h=p.email&&!Y.test(r.email),x=p.password&&r.password.length<W,f=p.confirmPassword&&r.password!==r.confirmPassword,b=a=>{const n={...r,[a.target.name]:a.target.value};Te(n),ve?.(n)},y=a=>{Z(n=>({...n,[a]:!0})),l(null)},Re=async a=>{a.preventDefault(),Z({name:!0,email:!0,password:!0,confirmPassword:!0}),!(r.name.trim().length<G)&&Y.test(r.email)&&(r.password.length<W||r.password===r.confirmPassword&&(u&&!B||await ye(r)))},v=(a,n)=>n?{borderColor:"rgba(248,113,113,0.5)",backgroundColor:"rgba(248,113,113,0.05)"}:Pe===a?{borderColor:s,backgroundColor:`${s}12`}:{},k=_("h-[46px] w-full rounded-lg border px-4 text-sm outline-none transition-all duration-200 disabled:opacity-50","border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400","dark:border-gray-700 dark:bg-gray-800/60 dark:text-white dark:placeholder:text-gray-600"),w="mb-2 block text-[11.5px] font-medium uppercase tracking-[0.08em] text-gray-400 dark:text-gray-500";return e.jsx("div",{className:"flex min-h-screen w-full items-center justify-center bg-gray-50 px-4 py-16 dark:bg-gray-950",children:e.jsxs("div",{className:"flex w-full max-w-225 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:shadow-2xl",children:[xe&&e.jsxs("div",{className:"relative hidden w-[44%] overflow-hidden bg-gray-100 lg:flex dark:bg-gray-950",children:[O?e.jsx("img",{src:O,alt:"",className:"absolute inset-0 size-full object-cover"}):e.jsx("div",{className:"absolute inset-0",style:{backgroundColor:`${s}18`}}),e.jsx("div",{className:"pointer-events-none absolute inset-0 z-1 bg-linear-to-b from-gray-100/50 via-transparent to-gray-100/85 dark:from-gray-950/50 dark:to-gray-950/85"}),e.jsxs("div",{className:"absolute inset-0 z-10 flex flex-col justify-end p-10",children:[J&&e.jsx("div",{className:"mb-auto pt-4",children:J}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-4 text-[11px] uppercase tracking-[0.18em] text-gray-400 dark:text-gray-600",children:ne}),e.jsx("h2",{className:"mb-2 text-[2rem] font-extrabold leading-[1.15] text-gray-900 dark:text-white",children:te??e.jsxs(e.Fragment,{children:["Únete al"," ",e.jsx("span",{style:{color:s},children:"equipo"})]})}),e.jsx("p",{className:"text-[13px] leading-relaxed text-gray-500 dark:text-gray-600",children:oe??"Crea tu cuenta y comienza a gestionar tu equipo."}),e.jsxs("p",{className:"mt-6 text-xs text-gray-400 dark:text-gray-700",children:["© ",new Date().getFullYear()," ",$]})]})]})]}),e.jsx("div",{className:"flex flex-1 items-center justify-center px-10 py-12",children:e.jsxs("div",{className:"w-full max-w-90",children:[e.jsx("div",{className:"mb-7 flex size-8 items-center justify-center rounded-lg",style:{backgroundColor:s},children:e.jsx(Ie,{size:16,color:"#fff",strokeWidth:2.5})}),e.jsx("h1",{className:"mb-1.5 text-2xl font-bold text-gray-900 dark:text-white",children:re}),e.jsx("p",{className:"mb-8 text-[13.5px] leading-relaxed text-gray-500 dark:text-gray-500",children:se}),F&&F.length>0&&e.jsxs("div",{className:"mb-6 space-y-2.5",children:[F.map(a=>e.jsxs("button",{type:"button",onClick:a.onClick,disabled:t,className:"flex h-11 w-full items-center justify-center gap-2.5 rounded-lg border border-gray-200 bg-gray-50 text-[13.5px] font-medium text-gray-600 transition-all hover:bg-gray-100 hover:text-gray-900 disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800/60 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white",children:[a.icon,a.label]},a.id)),e.jsxs("div",{className:"flex items-center gap-3 py-1",children:[e.jsx("div",{className:"h-px flex-1 bg-gray-200 dark:bg-gray-800"}),e.jsx("span",{className:"text-[11px] uppercase tracking-wider text-gray-400 dark:text-gray-700",children:"o regístrate con email"}),e.jsx("div",{className:"h-px flex-1 bg-gray-200 dark:bg-gray-800"})]})]}),e.jsxs("form",{onSubmit:Re,className:"space-y-5",noValidate:!0,children:[Q&&e.jsxs("div",{className:"flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3.5 py-2.5 text-[13px] text-red-600 dark:border-red-500/25 dark:bg-red-500/10 dark:text-red-400",children:[e.jsx(c,{size:15,className:"shrink-0"}),Q]}),e.jsxs("div",{children:[e.jsx("label",{className:w,children:le}),e.jsx("input",{type:"text",name:"name",placeholder:ce,value:r.name,onChange:b,onBlur:()=>y("name"),onFocus:()=>l("name"),disabled:t,autoComplete:"name",className:k,style:v("name",g),"aria-invalid":g,"aria-describedby":g?"name-error":void 0}),g&&e.jsxs("p",{id:"name-error",className:"mt-1.5 flex items-center gap-1.5 text-xs text-red-500 dark:text-red-400",children:[e.jsx(c,{size:12,className:"shrink-0"}),Ce]})]}),e.jsxs("div",{children:[e.jsx("label",{className:w,children:de}),e.jsx("input",{type:"email",name:"email",placeholder:me,value:r.email,onChange:b,onBlur:()=>y("email"),onFocus:()=>l("email"),disabled:t,autoComplete:"email",className:k,style:v("email",h),"aria-invalid":h,"aria-describedby":h?"email-error":void 0}),h&&e.jsxs("p",{id:"email-error",className:"mt-1.5 flex items-center gap-1.5 text-xs text-red-500 dark:text-red-400",children:[e.jsx(c,{size:12,className:"shrink-0"}),ke]})]}),e.jsxs("div",{children:[e.jsx("label",{className:w,children:ue}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:H?"text":"password",name:"password",placeholder:pe,value:r.password,onChange:b,onBlur:()=>y("password"),onFocus:()=>l("password"),disabled:t,autoComplete:"new-password",className:_(k,"pr-11"),style:v("password",x),"aria-invalid":x,"aria-describedby":x?"password-error":void 0}),e.jsx("button",{type:"button",onClick:()=>Ne(a=>!a),className:"absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-400",tabIndex:-1,"aria-label":H?"Ocultar contraseña":"Mostrar contraseña",children:H?e.jsx(U,{size:18}):e.jsx(K,{size:18})})]}),x&&e.jsxs("p",{id:"password-error",className:"mt-1.5 flex items-center gap-1.5 text-xs text-red-500 dark:text-red-400",children:[e.jsx(c,{size:12,className:"shrink-0"}),we]})]}),e.jsxs("div",{children:[e.jsx("label",{className:w,children:ge}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:D?"text":"password",name:"confirmPassword",placeholder:he,value:r.confirmPassword,onChange:b,onBlur:()=>y("confirmPassword"),onFocus:()=>l("confirmPassword"),disabled:t,autoComplete:"new-password",className:_(k,"pr-11"),style:v("confirmPassword",f),"aria-invalid":f,"aria-describedby":f?"confirm-error":void 0}),e.jsx("button",{type:"button",onClick:()=>Le(a=>!a),className:"absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-400",tabIndex:-1,"aria-label":D?"Ocultar contraseña":"Mostrar contraseña",children:D?e.jsx(U,{size:18}):e.jsx(K,{size:18})})]}),f&&e.jsxs("p",{id:"confirm-error",className:"mt-1.5 flex items-center gap-1.5 text-xs text-red-500 dark:text-red-400",children:[e.jsx(c,{size:12,className:"shrink-0"}),je]})]}),u&&e.jsxs("label",{className:"flex items-start gap-2.5 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:B,onChange:a=>Se(a.target.checked),disabled:t,className:"mt-0.5 size-4 rounded border-gray-300 accent-current",style:{accentColor:s}}),e.jsx("span",{className:"text-[13px] text-gray-500 dark:text-gray-400",children:be??e.jsxs(e.Fragment,{children:["Acepto los"," ",o?e.jsx("a",{href:o.href,onClick:o.onClick,className:"underline underline-offset-2 transition-colors hover:opacity-70",style:{color:s},children:o.label}):"términos y condiciones"]})})]}),e.jsx("button",{type:"submit",disabled:t||u&&!B,className:"flex h-12 w-full items-center justify-center gap-2 rounded-lg text-sm font-bold tracking-[0.04em] text-white transition-all duration-200 hover:-translate-y-px active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50",style:{backgroundColor:s},children:t?e.jsxs(e.Fragment,{children:[e.jsx(qe,{size:17,className:"animate-spin"}),"Creando cuenta..."]}):e.jsxs(e.Fragment,{children:[ie,e.jsx(Ee,{size:16})]})}),!u&&o&&e.jsxs("p",{className:"text-center text-[11.5px] leading-relaxed text-gray-400 dark:text-gray-700",children:["Al registrarte aceptas los"," ",e.jsx("a",{href:o.href,onClick:o.onClick,className:"underline underline-offset-2 transition-colors hover:text-gray-600 dark:hover:text-gray-400",children:o.label})]}),m&&e.jsxs("p",{className:"text-center text-[13px] text-gray-500 dark:text-gray-600",children:["¿Ya tienes cuenta?"," ",e.jsx("a",{href:m.href,onClick:m.onClick,className:"font-medium transition-colors hover:opacity-80",style:{color:s},children:m.label})]}),e.jsxs("div",{className:"flex items-center gap-2.5 pt-1",children:[e.jsx("div",{className:"h-px flex-1 bg-gray-200 dark:bg-gray-800"}),e.jsxs("span",{className:"flex items-center gap-1.5 text-[11px] text-gray-400 dark:text-gray-700",children:[e.jsx(Ve,{size:11}),$]}),e.jsx("div",{className:"h-px flex-1 bg-gray-200 dark:bg-gray-800"})]})]})]})})]})})};X.__docgenInfo={description:"",methods:[],displayName:"Register",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Crear cuenta"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Completa tus datos para registrarte."',computed:!1}},companyName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Sistema"',computed:!1}},heroTitle:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},heroSubtitle:{required:!1,tsType:{name:"string"},description:""},heroTagline:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Component Library"',computed:!1}},submitLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Registrarme"',computed:!1}},nameLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Nombre completo"',computed:!1}},namePlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Tu nombre"',computed:!1}},emailLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Correo electrónico"',computed:!1}},emailPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"correo@empresa.com"',computed:!1}},passwordLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Contraseña"',computed:!1}},passwordPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"••••••••"',computed:!1}},confirmPasswordLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Confirmar contraseña"',computed:!1}},confirmPasswordPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"••••••••"',computed:!1}},showHero:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},logo:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},accentColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#7c6aff"',computed:!1}},heroImage:{required:!1,tsType:{name:"string"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:""},validationRules:{required:!1,tsType:{name:"RegisterValidationRules"},description:"",defaultValue:{value:"{}",computed:!1}},loginLink:{required:!1,tsType:{name:"RegisterLink"},description:""},termsLink:{required:!1,tsType:{name:"RegisterLink"},description:""},socialProviders:{required:!1,tsType:{name:"Array",elements:[{name:"RegisterSocialProvider"}],raw:"RegisterSocialProvider[]"},description:""},showTermsCheckbox:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},termsCheckboxLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: RegisterData) => void | Promise<void>",signature:{arguments:[{type:{name:"RegisterData"},name:"data"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: RegisterData) => void",signature:{arguments:[{type:{name:"RegisterData"},name:"data"}],return:{name:"void"}}},description:""}}};const ee=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",children:[e.jsx("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),e.jsx("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),e.jsx("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z",fill:"#FBBC05"}),e.jsx("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]}),ae=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"})}),d=()=>{},ze=async()=>{},Ye={title:"Components/Register",component:X,parameters:{layout:"fullscreen",docs:{description:{component:"Componente de registro con hero animado de partículas, validación de campos en tiempo real, soporte para proveedores sociales, checkbox de términos y color de acento dinámico."}}},argTypes:{onSubmit:{action:"submitted"},onChange:{action:"changed"},title:{control:"text",description:"Título principal del formulario",table:{category:"Contenido",defaultValue:{summary:"Crear cuenta"}}},description:{control:"text",description:"Subtítulo debajo del título",table:{category:"Contenido"}},companyName:{control:"text",description:"Nombre de la empresa (footer y hero)",table:{category:"Contenido",defaultValue:{summary:"Sistema"}}},heroTagline:{control:"text",table:{category:"Contenido"}},heroSubtitle:{control:"text",table:{category:"Contenido"}},submitLabel:{control:"text",table:{category:"Contenido",defaultValue:{summary:"Registrarme"}}},nameLabel:{control:"text",table:{category:"Contenido"}},emailLabel:{control:"text",table:{category:"Contenido"}},passwordLabel:{control:"text",table:{category:"Contenido"}},confirmPasswordLabel:{control:"text",table:{category:"Contenido"}},accentColor:{control:"color",description:"Color de acento",table:{category:"Visual",defaultValue:{summary:"#7c6aff"}}},showHero:{control:"boolean",table:{category:"Visual",defaultValue:{summary:"true"}}},showTermsCheckbox:{control:"boolean",table:{category:"Visual",defaultValue:{summary:"false"}}},loading:{control:"boolean",table:{category:"Estado",defaultValue:{summary:"false"}}},error:{control:"text",table:{category:"Estado"}},validationRules:{control:"object",table:{category:"Validación"}},loginLink:{control:"object",table:{category:"Links"}},termsLink:{control:"object",table:{category:"Links"}},logo:{table:{disable:!0}},heroTitle:{table:{disable:!0}},socialProviders:{table:{disable:!0}},termsCheckboxLabel:{table:{disable:!0}}},args:{onSubmit:ze,onChange:d,companyName:"Acme Corp"}},j={name:"Light mode"},C={name:"Dark mode",parameters:{backgrounds:{default:"Dark"}}},N={args:{loading:!0}},L={name:"Server error",args:{error:"Este correo ya está registrado. Intenta con otro o inicia sesión."}},S={name:"Strict validation",args:{validationRules:{minPasswordLength:10,nameMinLength:3,passwordErrorMessage:"La contraseña debe tener al menos 10 caracteres."}}},P={name:"Without hero",args:{showHero:!1}},T={name:"With links",args:{loginLink:{label:"Iniciar sesión",href:"#"},termsLink:{label:"Términos y Condiciones",href:"#"}}},R={name:"With terms checkbox",args:{showTermsCheckbox:!0,termsLink:{label:"Términos de Servicio",href:"#"},loginLink:{label:"Iniciar sesión",href:"#"}}},A={name:"Social providers",args:{socialProviders:[{id:"google",label:"Registrarse con Google",icon:e.jsx(ee,{}),onClick:d},{id:"github",label:"Registrarse con GitHub",icon:e.jsx(ae,{}),onClick:d}]}},q={name:"Full featured",args:{title:"Crear cuenta",description:"Regístrate para acceder a todas las funcionalidades.",heroTagline:"Acme Platform",heroSubtitle:"Gestiona equipos, proyectos y métricas en un solo lugar.",loginLink:{label:"Iniciar sesión",href:"#"},termsLink:{label:"Términos de Servicio",href:"#"},showTermsCheckbox:!0,validationRules:{minPasswordLength:8},socialProviders:[{id:"google",label:"Registrarse con Google",icon:e.jsx(ee,{}),onClick:d},{id:"github",label:"Registrarse con GitHub",icon:e.jsx(ae,{}),onClick:d}]}},E={name:"Accent · Green",args:{accentColor:"#10b981",companyName:"GreenApp"}},V={name:"Accent · Amber",args:{accentColor:"#f59e0b",companyName:"Dashboard"}},M={name:"Accent · Blue",args:{accentColor:"#3b82f6",companyName:"CloudHQ"}},I={name:"With logo",args:{companyName:"Acme Corp",logo:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("div",{style:{width:28,height:28,borderRadius:6,background:"#fff",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:e.jsx("path",{d:"M7 1L13 12H1L7 1Z",fill:"#0e0e18"})})}),e.jsx("span",{style:{color:"#fff",fontWeight:700,fontSize:15},children:"Acme"})]})}},z={name:"English copy",args:{title:"Create account",description:"Fill in your details to get started.",submitLabel:"Sign up",nameLabel:"Full name",namePlaceholder:"John Doe",emailLabel:"Email address",emailPlaceholder:"you@company.com",passwordLabel:"Password",confirmPasswordLabel:"Confirm password",companyName:"Acme Corp",loginLink:{label:"Sign in",href:"#"},validationRules:{emailErrorMessage:"Please enter a valid email.",passwordErrorMessage:"Password must be at least 6 characters.",confirmPasswordErrorMessage:"Passwords do not match.",nameErrorMessage:"Name must be at least 2 characters."}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Light mode"
}`,...j.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Dark mode",
  parameters: {
    backgrounds: {
      default: "Dark"
    }
  }
}`,...C.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...N.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: "Server error",
  args: {
    error: "Este correo ya está registrado. Intenta con otro o inicia sesión."
  }
}`,...L.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Strict validation",
  args: {
    validationRules: {
      minPasswordLength: 10,
      nameMinLength: 3,
      passwordErrorMessage: "La contraseña debe tener al menos 10 caracteres."
    }
  }
}`,...S.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: "Without hero",
  args: {
    showHero: false
  }
}`,...P.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "With links",
  args: {
    loginLink: {
      label: "Iniciar sesión",
      href: "#"
    },
    termsLink: {
      label: "Términos y Condiciones",
      href: "#"
    }
  }
}`,...T.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "With terms checkbox",
  args: {
    showTermsCheckbox: true,
    termsLink: {
      label: "Términos de Servicio",
      href: "#"
    },
    loginLink: {
      label: "Iniciar sesión",
      href: "#"
    }
  }
}`,...R.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "Social providers",
  args: {
    socialProviders: [{
      id: "google",
      label: "Registrarse con Google",
      icon: <GoogleIcon />,
      onClick: noop
    }, {
      id: "github",
      label: "Registrarse con GitHub",
      icon: <GitHubIcon />,
      onClick: noop
    }]
  }
}`,...A.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "Full featured",
  args: {
    title: "Crear cuenta",
    description: "Regístrate para acceder a todas las funcionalidades.",
    heroTagline: "Acme Platform",
    heroSubtitle: "Gestiona equipos, proyectos y métricas en un solo lugar.",
    loginLink: {
      label: "Iniciar sesión",
      href: "#"
    },
    termsLink: {
      label: "Términos de Servicio",
      href: "#"
    },
    showTermsCheckbox: true,
    validationRules: {
      minPasswordLength: 8
    },
    socialProviders: [{
      id: "google",
      label: "Registrarse con Google",
      icon: <GoogleIcon />,
      onClick: noop
    }, {
      id: "github",
      label: "Registrarse con GitHub",
      icon: <GitHubIcon />,
      onClick: noop
    }]
  }
}`,...q.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Accent · Green",
  args: {
    accentColor: "#10b981",
    companyName: "GreenApp"
  }
}`,...E.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "Accent · Amber",
  args: {
    accentColor: "#f59e0b",
    companyName: "Dashboard"
  }
}`,...V.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "Accent · Blue",
  args: {
    accentColor: "#3b82f6",
    companyName: "CloudHQ"
  }
}`,...M.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: "With logo",
  args: {
    companyName: "Acme Corp",
    logo: <div style={{
      display: "flex",
      alignItems: "center",
      gap: 8
    }}>
        <div style={{
        width: 28,
        height: 28,
        borderRadius: 6,
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1L13 12H1L7 1Z" fill="#0e0e18" /></svg>
        </div>
        <span style={{
        color: "#fff",
        fontWeight: 700,
        fontSize: 15
      }}>Acme</span>
      </div>
  }
}`,...I.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "English copy",
  args: {
    title: "Create account",
    description: "Fill in your details to get started.",
    submitLabel: "Sign up",
    nameLabel: "Full name",
    namePlaceholder: "John Doe",
    emailLabel: "Email address",
    emailPlaceholder: "you@company.com",
    passwordLabel: "Password",
    confirmPasswordLabel: "Confirm password",
    companyName: "Acme Corp",
    loginLink: {
      label: "Sign in",
      href: "#"
    },
    validationRules: {
      emailErrorMessage: "Please enter a valid email.",
      passwordErrorMessage: "Password must be at least 6 characters.",
      confirmPasswordErrorMessage: "Passwords do not match.",
      nameErrorMessage: "Name must be at least 2 characters."
    }
  }
}`,...z.parameters?.docs?.source}}};const Ze=["Default","DarkMode","Loading","WithServerError","StrictValidation","WithoutHero","WithLinks","WithTermsCheckbox","WithSocialProviders","FullFeatured","AccentGreen","AccentAmber","AccentBlue","WithLogo","English"];export{V as AccentAmber,M as AccentBlue,E as AccentGreen,C as DarkMode,j as Default,z as English,q as FullFeatured,N as Loading,S as StrictValidation,T as WithLinks,I as WithLogo,L as WithServerError,A as WithSocialProviders,R as WithTermsCheckbox,P as WithoutHero,Ze as __namedExportsOrder,Ye as default};
