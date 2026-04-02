import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as S}from"./iframe-vHIwjOwQ.js";import{c as O}from"./cn-C1oRmgnl.js";import{c as he}from"./createLucideIcon-C-Otocs2.js";import{C as V}from"./circle-alert-I7kSXSZc.js";import{a as ye,E as be}from"./eye-DIqHd74S.js";import{L as fe}from"./loader-circle-C1dUG3Ou.js";import{A as xe}from"./arrow-right-DM0dZBG_.js";import{C as ve}from"./check-DDGJN-oM.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-Ce1ZTWB2.js";const ke=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Ce=he("shield-check",ke),_=({title:Z="Bienvenido",description:Y="Ingresa tus credenciales para continuar.",companyName:q="Sistema",heroTitle:J,heroSubtitle:K,heroTagline:U="Component Library",heroImage:I,submitLabel:X="Iniciar sesión",emailLabel:ee="Correo electrónico",emailPlaceholder:re="correo@empresa.com",passwordLabel:ae="Contraseña",passwordPlaceholder:te="••••••••",showHero:oe=!0,logo:z,accentColor:a="#7c6aff",loading:s=!1,error:G,defaultEmail:se="",validationRules:ne={},forgotPasswordLink:C,registerLink:j,termsLink:w,socialProviders:P,onSubmit:ie,onChange:le})=>{const{minPasswordLength:A=6,emailPattern:M=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,emailErrorMessage:ce="Ingresa un correo válido.",passwordErrorMessage:de=`La contraseña debe tener al menos ${A} caracteres.`}=ne,[T,me]=S.useState(!1),[R,W]=S.useState({email:!1,password:!1}),[pe,E]=S.useState(null),[t,ue]=S.useState({email:se,password:""}),L=R.email&&!M.test(t.email),N=R.password&&t.password.length<A,H=r=>{const o={...t,[r.target.name]:r.target.value};ue(o),le?.(o)},B=r=>{W(o=>({...o,[r]:!0})),E(null)},ge=async r=>{r.preventDefault(),W({email:!0,password:!0}),M.test(t.email)&&(t.password.length<A||await ie(t))},F=(r,o)=>o?{borderColor:"rgba(248,113,113,0.5)",backgroundColor:"rgba(248,113,113,0.05)"}:pe===r?{borderColor:a,backgroundColor:`${a}12`}:{},D=O("h-[46px] w-full rounded-lg border px-4 text-sm outline-none transition-all duration-200 disabled:opacity-50","border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400","dark:border-gray-700 dark:bg-gray-800/60 dark:text-white dark:placeholder:text-gray-600");return e.jsx("div",{className:"flex min-h-screen w-full items-center justify-center bg-gray-50 px-4 py-16 dark:bg-gray-950",children:e.jsxs("div",{className:"flex w-full max-w-225 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:shadow-2xl",children:[oe&&e.jsxs("div",{className:"relative hidden w-[44%] overflow-hidden bg-gray-100 lg:flex dark:bg-gray-950",children:[I?e.jsx("img",{src:I,alt:"",className:"absolute inset-0 size-full object-cover"}):e.jsx("div",{className:"absolute inset-0",style:{backgroundColor:`${a}18`}}),e.jsx("div",{className:"pointer-events-none absolute inset-0 z-1 bg-linear-to-b from-gray-100/50 via-transparent to-gray-100/85 dark:from-gray-950/50 dark:to-gray-950/85"}),e.jsxs("div",{className:"absolute inset-0 z-10 flex flex-col justify-end p-10",children:[z&&e.jsx("div",{className:"mb-auto pt-4",children:z}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-4 text-[11px] uppercase tracking-[0.18em] text-gray-400 dark:text-gray-600",children:U}),e.jsx("h2",{className:"mb-2 text-[2rem] font-extrabold leading-[1.15] text-gray-900 dark:text-white",children:J??e.jsxs(e.Fragment,{children:["Acceso al"," ",e.jsx("span",{style:{color:a},children:"sistema"})]})}),e.jsx("p",{className:"text-[13px] leading-relaxed text-gray-500 dark:text-gray-600",children:K??"Plataforma segura & moderna para tu equipo."}),e.jsxs("p",{className:"mt-6 text-xs text-gray-400 dark:text-gray-700",children:["© ",new Date().getFullYear()," ",q]})]})]})]}),e.jsx("div",{className:"flex flex-1 items-center justify-center px-10 py-12",children:e.jsxs("div",{className:"w-full max-w-90",children:[e.jsx("div",{className:"mb-7 flex size-8 items-center justify-center rounded-lg",style:{backgroundColor:a},children:e.jsx(Ce,{size:16,color:"#fff",strokeWidth:2.5})}),e.jsx("h1",{className:"mb-1.5 text-2xl font-bold text-gray-900 dark:text-white",children:Z}),e.jsx("p",{className:"mb-8 text-[13.5px] leading-relaxed text-gray-500 dark:text-gray-500",children:Y}),P&&P.length>0&&e.jsxs("div",{className:"mb-6 space-y-2.5",children:[P.map(r=>e.jsxs("button",{type:"button",onClick:r.onClick,disabled:s,className:"flex h-11 w-full items-center justify-center gap-2.5 rounded-lg border border-gray-200 bg-gray-50 text-[13.5px] font-medium text-gray-600 transition-all hover:bg-gray-100 hover:text-gray-900 disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800/60 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white",children:[r.icon,r.label]},r.id)),e.jsxs("div",{className:"flex items-center gap-3 py-1",children:[e.jsx("div",{className:"h-px flex-1 bg-gray-200 dark:bg-gray-800"}),e.jsx("span",{className:"text-[11px] uppercase tracking-wider text-gray-400 dark:text-gray-700",children:"o continúa con email"}),e.jsx("div",{className:"h-px flex-1 bg-gray-200 dark:bg-gray-800"})]})]}),e.jsxs("form",{onSubmit:ge,className:"space-y-5",noValidate:!0,children:[G&&e.jsxs("div",{className:"flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3.5 py-2.5 text-[13px] text-red-600 dark:border-red-500/25 dark:bg-red-500/10 dark:text-red-400",children:[e.jsx(V,{size:15,className:"shrink-0"}),G]}),e.jsxs("div",{children:[e.jsx("label",{className:"mb-2 block text-[11.5px] font-medium uppercase tracking-[0.08em] text-gray-400 dark:text-gray-500",children:ee}),e.jsx("input",{type:"email",name:"email",placeholder:re,value:t.email,onChange:H,onBlur:()=>B("email"),onFocus:()=>E("email"),disabled:s,autoComplete:"email",className:D,style:F("email",L),"aria-invalid":L,"aria-describedby":L?"email-error":void 0}),L&&e.jsxs("p",{id:"email-error",className:"mt-1.5 flex items-center gap-1.5 text-xs text-red-500 dark:text-red-400",children:[e.jsx(V,{size:12,className:"shrink-0"}),ce]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[e.jsx("label",{className:"block text-[11.5px] font-medium uppercase tracking-[0.08em] text-gray-400 dark:text-gray-500",children:ae}),C&&e.jsx("a",{href:C.href,onClick:C.onClick,className:"text-[11.5px] transition-colors hover:opacity-70",style:{color:a},children:C.label})]}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:T?"text":"password",name:"password",placeholder:te,value:t.password,onChange:H,onBlur:()=>B("password"),onFocus:()=>E("password"),disabled:s,autoComplete:"current-password",className:O(D,"pr-11"),style:F("password",N),"aria-invalid":N,"aria-describedby":N?"password-error":void 0}),e.jsx("button",{type:"button",onClick:()=>me(r=>!r),className:"absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-400",tabIndex:-1,"aria-label":T?"Ocultar contraseña":"Mostrar contraseña",children:T?e.jsx(ye,{size:18}):e.jsx(be,{size:18})})]}),N&&e.jsxs("p",{id:"password-error",className:"mt-1.5 flex items-center gap-1.5 text-xs text-red-500 dark:text-red-400",children:[e.jsx(V,{size:12,className:"shrink-0"}),de]})]}),e.jsx("button",{type:"submit",disabled:s,className:"flex h-12 w-full items-center justify-center gap-2 rounded-lg text-sm font-bold tracking-[0.04em] text-white transition-all duration-200 hover:-translate-y-px active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50",style:{backgroundColor:a},children:s?e.jsxs(e.Fragment,{children:[e.jsx(fe,{size:17,className:"animate-spin"}),"Iniciando sesión..."]}):e.jsxs(e.Fragment,{children:[X,e.jsx(xe,{size:16})]})}),w&&e.jsxs("p",{className:"text-center text-[11.5px] leading-relaxed text-gray-400 dark:text-gray-700",children:["Al continuar aceptas los"," ",e.jsx("a",{href:w.href,onClick:w.onClick,className:"underline underline-offset-2 transition-colors hover:text-gray-600 dark:hover:text-gray-400",children:w.label})]}),j&&e.jsxs("p",{className:"text-center text-[13px] text-gray-500 dark:text-gray-600",children:["¿No tienes cuenta?"," ",e.jsx("a",{href:j.href,onClick:j.onClick,className:"font-medium transition-colors hover:opacity-80",style:{color:a},children:j.label})]}),e.jsxs("div",{className:"flex items-center gap-2.5 pt-1",children:[e.jsx("div",{className:"h-px flex-1 bg-gray-200 dark:bg-gray-800"}),e.jsxs("span",{className:"flex items-center gap-1.5 text-[11px] text-gray-400 dark:text-gray-700",children:[e.jsx(ve,{size:11}),q]}),e.jsx("div",{className:"h-px flex-1 bg-gray-200 dark:bg-gray-800"})]})]})]})})]})})};_.__docgenInfo={description:"",methods:[],displayName:"Login",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Bienvenido"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Ingresa tus credenciales para continuar."',computed:!1}},companyName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Sistema"',computed:!1}},heroTitle:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},heroSubtitle:{required:!1,tsType:{name:"string"},description:""},heroTagline:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Component Library"',computed:!1}},submitLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Iniciar sesión"',computed:!1}},emailLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Correo electrónico"',computed:!1}},emailPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"correo@empresa.com"',computed:!1}},passwordLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Contraseña"',computed:!1}},passwordPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"••••••••"',computed:!1}},showHero:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},logo:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},accentColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#7c6aff"',computed:!1}},heroImage:{required:!1,tsType:{name:"string"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:""},defaultEmail:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},validationRules:{required:!1,tsType:{name:"LoginValidationRules"},description:"",defaultValue:{value:"{}",computed:!1}},forgotPasswordLink:{required:!1,tsType:{name:"LoginLink"},description:""},registerLink:{required:!1,tsType:{name:"LoginLink"},description:""},termsLink:{required:!1,tsType:{name:"LoginLink"},description:""},socialProviders:{required:!1,tsType:{name:"Array",elements:[{name:"SocialProvider"}],raw:"SocialProvider[]"},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: LoginCredentials) => void | Promise<void>",signature:{arguments:[{type:{name:"LoginCredentials"},name:"data"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: LoginCredentials) => void",signature:{arguments:[{type:{name:"LoginCredentials"},name:"data"}],return:{name:"void"}}},description:""}}};const $=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",children:[e.jsx("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),e.jsx("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),e.jsx("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z",fill:"#FBBC05"}),e.jsx("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]}),Q=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"})}),k=()=>{},je=async()=>{},ze={title:"Components/Login",component:_,parameters:{layout:"fullscreen",docs:{description:{component:"Componente de login con hero animado de partículas, validación de campos en tiempo real, soporte para proveedores sociales, links configurables y color de acento dinámico."}}},argTypes:{onSubmit:{action:"submitted"},onChange:{action:"changed"},title:{control:"text",description:"Título principal del formulario",table:{category:"Contenido",defaultValue:{summary:"Bienvenido"}}},description:{control:"text",description:"Subtítulo debajo del título",table:{category:"Contenido"}},companyName:{control:"text",description:"Nombre de la empresa (footer y hero)",table:{category:"Contenido",defaultValue:{summary:"Sistema"}}},heroTagline:{control:"text",description:"Etiqueta pequeña sobre el título del hero",table:{category:"Contenido",defaultValue:{summary:"Component Library"}}},heroSubtitle:{control:"text",description:"Subtítulo descriptivo en el panel hero",table:{category:"Contenido"}},submitLabel:{control:"text",description:"Texto del botón de envío",table:{category:"Contenido",defaultValue:{summary:"Iniciar sesión"}}},emailLabel:{control:"text",description:"Label del campo de correo",table:{category:"Contenido"}},emailPlaceholder:{control:"text",description:"Placeholder del campo de correo",table:{category:"Contenido"}},passwordLabel:{control:"text",description:"Label del campo de contraseña",table:{category:"Contenido"}},passwordPlaceholder:{control:"text",description:"Placeholder del campo de contraseña",table:{category:"Contenido"}},defaultEmail:{control:"text",description:"Pre-rellena el campo email",table:{category:"Contenido"}},accentColor:{control:"color",description:"Color de acento: botón, partículas, inputs y links",table:{category:"Visual",defaultValue:{summary:"#7c6aff"}}},showHero:{control:"boolean",description:"Muestra u oculta el panel hero izquierdo",table:{category:"Visual",defaultValue:{summary:"true"}}},loading:{control:"boolean",description:"Estado de carga: deshabilita el form y muestra spinner",table:{category:"Estado",defaultValue:{summary:"false"}}},error:{control:"text",description:"Error de servidor para mostrar en el banner rojo",table:{category:"Estado"}},validationRules:{control:"object",description:"Reglas de validación del lado del cliente",table:{category:"Validación",type:{summary:"LoginValidationRules",detail:"{ minPasswordLength?: number; emailPattern?: RegExp; emailErrorMessage?: string; passwordErrorMessage?: string }"}}},forgotPasswordLink:{control:"object",description:"Link de 'olvidé mi contraseña' (junto al label)",table:{category:"Links",type:{summary:"LoginLink",detail:"{ label: string; href: string; onClick?: fn }"}}},registerLink:{control:"object",description:"Link de registro debajo del botón",table:{category:"Links"}},termsLink:{control:"object",description:"Link de términos y condiciones",table:{category:"Links"}},logo:{table:{disable:!0}},heroTitle:{table:{disable:!0}},socialProviders:{table:{disable:!0}}},args:{onSubmit:je,onChange:k,companyName:"Acme Corp"}},n={name:"Light mode",parameters:{backgrounds:{default:"Light"}}},i={name:"Dark mode",parameters:{backgrounds:{default:"Dark"}}},l={args:{loading:!0}},c={name:"Server error",args:{error:"Credenciales incorrectas. Verifica tu correo y contraseña."}},d={name:"Strict validation",parameters:{docs:{description:{story:"Toca los campos y déjalos vacíos para ver los errores. La contraseña requiere mínimo 10 caracteres."}}},args:{validationRules:{minPasswordLength:10,passwordErrorMessage:"La contraseña debe tener al menos 10 caracteres."}}},m={name:"Without hero",args:{showHero:!1}},p={name:"Pre-filled email",args:{defaultEmail:"usuario@empresa.com"}},u={name:"With links",args:{forgotPasswordLink:{label:"¿Olvidaste tu contraseña?",href:"#"},registerLink:{label:"Crear cuenta",href:"#"},termsLink:{label:"Términos y Condiciones",href:"#"}}},g={name:"Social providers",args:{socialProviders:[{id:"google",label:"Continuar con Google",icon:e.jsx($,{}),onClick:k},{id:"github",label:"Continuar con GitHub",icon:e.jsx(Q,{}),onClick:k}]}},h={name:"Full featured",parameters:{docs:{description:{story:"Versión completa con social providers, todos los links y validación estricta."}}},args:{title:"Iniciar sesión",description:"Accede a tu espacio de trabajo.",heroTagline:"Acme Platform",heroSubtitle:"Gestiona equipos, proyectos y métricas en un solo lugar.",forgotPasswordLink:{label:"¿Olvidaste tu contraseña?",href:"#"},registerLink:{label:"Crear cuenta gratis",href:"#"},termsLink:{label:"Términos de Servicio",href:"#"},validationRules:{minPasswordLength:8},socialProviders:[{id:"google",label:"Continuar con Google",icon:e.jsx($,{}),onClick:k},{id:"github",label:"Continuar con GitHub",icon:e.jsx(Q,{}),onClick:k}]}},y={name:"Accent · Green",args:{accentColor:"#10b981",heroSubtitle:"Bienvenido de vuelta a tu panel de control.",companyName:"GreenApp"}},b={name:"Accent · Amber",args:{accentColor:"#f59e0b",heroSubtitle:"Accede a tus reportes y métricas en tiempo real.",companyName:"Dashboard"}},f={name:"Accent · Blue",args:{accentColor:"#3b82f6",heroSubtitle:"Tu centro de operaciones seguro y moderno.",companyName:"CloudHQ"}},x={name:"With logo",args:{companyName:"Acme Corp",logo:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("div",{style:{width:28,height:28,borderRadius:6,background:"#fff",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:e.jsx("path",{d:"M7 1L13 12H1L7 1Z",fill:"#0e0e18"})})}),e.jsx("span",{style:{color:"#fff",fontWeight:700,fontSize:15},children:"Acme"})]})}},v={name:"English copy",args:{title:"Welcome back",description:"Enter your credentials to access the system.",submitLabel:"Sign in",emailLabel:"Email address",emailPlaceholder:"you@company.com",passwordLabel:"Password",passwordPlaceholder:"••••••••",heroSubtitle:"A secure and modern platform for your team.",companyName:"Acme Corp",forgotPasswordLink:{label:"Forgot password?",href:"#"},registerLink:{label:"Create account",href:"#"},validationRules:{emailErrorMessage:"Please enter a valid email.",passwordErrorMessage:"Password must be at least 6 characters."}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Light mode",
  parameters: {
    backgrounds: {
      default: "Light"
    }
  }
}`,...n.parameters?.docs?.source},description:{story:"Modo claro (Light)",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Dark mode",
  parameters: {
    backgrounds: {
      default: "Dark"
    }
  }
}`,...i.parameters?.docs?.source},description:{story:"Modo oscuro (Dark)",...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...l.parameters?.docs?.source},description:{story:"Spinner activo, formulario bloqueado",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Server error",
  args: {
    error: "Credenciales incorrectas. Verifica tu correo y contraseña."
  }
}`,...c.parameters?.docs?.source},description:{story:"Banner de error de servidor",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Strict validation",
  parameters: {
    docs: {
      description: {
        story: "Toca los campos y déjalos vacíos para ver los errores. La contraseña requiere mínimo 10 caracteres."
      }
    }
  },
  args: {
    validationRules: {
      minPasswordLength: 10,
      passwordErrorMessage: "La contraseña debe tener al menos 10 caracteres."
    }
  }
}`,...d.parameters?.docs?.source},description:{story:"Validación estricta: mínimo 10 caracteres",...d.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Without hero",
  args: {
    showHero: false
  }
}`,...m.parameters?.docs?.source},description:{story:"Sin panel hero",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Pre-filled email",
  args: {
    defaultEmail: "usuario@empresa.com"
  }
}`,...p.parameters?.docs?.source},description:{story:"Email pre-rellenado",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "With links",
  args: {
    forgotPasswordLink: {
      label: "¿Olvidaste tu contraseña?",
      href: "#"
    },
    registerLink: {
      label: "Crear cuenta",
      href: "#"
    },
    termsLink: {
      label: "Términos y Condiciones",
      href: "#"
    }
  }
}`,...u.parameters?.docs?.source},description:{story:"Con links de recuperación, registro y términos",...u.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Social providers",
  args: {
    socialProviders: [{
      id: "google",
      label: "Continuar con Google",
      icon: <GoogleIcon />,
      onClick: noop
    }, {
      id: "github",
      label: "Continuar con GitHub",
      icon: <GitHubIcon />,
      onClick: noop
    }]
  }
}`,...g.parameters?.docs?.source},description:{story:"Social providers: Google y GitHub",...g.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Full featured",
  parameters: {
    docs: {
      description: {
        story: "Versión completa con social providers, todos los links y validación estricta."
      }
    }
  },
  args: {
    title: "Iniciar sesión",
    description: "Accede a tu espacio de trabajo.",
    heroTagline: "Acme Platform",
    heroSubtitle: "Gestiona equipos, proyectos y métricas en un solo lugar.",
    forgotPasswordLink: {
      label: "¿Olvidaste tu contraseña?",
      href: "#"
    },
    registerLink: {
      label: "Crear cuenta gratis",
      href: "#"
    },
    termsLink: {
      label: "Términos de Servicio",
      href: "#"
    },
    validationRules: {
      minPasswordLength: 8
    },
    socialProviders: [{
      id: "google",
      label: "Continuar con Google",
      icon: <GoogleIcon />,
      onClick: noop
    }, {
      id: "github",
      label: "Continuar con GitHub",
      icon: <GitHubIcon />,
      onClick: noop
    }]
  }
}`,...h.parameters?.docs?.source},description:{story:"Todo incluido",...h.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Accent · Green",
  args: {
    accentColor: "#10b981",
    heroSubtitle: "Bienvenido de vuelta a tu panel de control.",
    companyName: "GreenApp"
  }
}`,...y.parameters?.docs?.source},description:{story:"Acento verde",...y.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Accent · Amber",
  args: {
    accentColor: "#f59e0b",
    heroSubtitle: "Accede a tus reportes y métricas en tiempo real.",
    companyName: "Dashboard"
  }
}`,...b.parameters?.docs?.source},description:{story:"Acento ámbar",...b.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Accent · Blue",
  args: {
    accentColor: "#3b82f6",
    heroSubtitle: "Tu centro de operaciones seguro y moderno.",
    companyName: "CloudHQ"
  }
}`,...f.parameters?.docs?.source},description:{story:"Acento azul",...f.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1L13 12H1L7 1Z" fill="#0e0e18" />
          </svg>
        </div>
        <span style={{
        color: "#fff",
        fontWeight: 700,
        fontSize: 15
      }}>
          Acme
        </span>
      </div>
  }
}`,...x.parameters?.docs?.source},description:{story:"Con logo en el hero",...x.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "English copy",
  args: {
    title: "Welcome back",
    description: "Enter your credentials to access the system.",
    submitLabel: "Sign in",
    emailLabel: "Email address",
    emailPlaceholder: "you@company.com",
    passwordLabel: "Password",
    passwordPlaceholder: "••••••••",
    heroSubtitle: "A secure and modern platform for your team.",
    companyName: "Acme Corp",
    forgotPasswordLink: {
      label: "Forgot password?",
      href: "#"
    },
    registerLink: {
      label: "Create account",
      href: "#"
    },
    validationRules: {
      emailErrorMessage: "Please enter a valid email.",
      passwordErrorMessage: "Password must be at least 6 characters."
    }
  }
}`,...v.parameters?.docs?.source},description:{story:"Textos en inglés",...v.parameters?.docs?.description}}};const Ge=["Default","DarkMode","Loading","WithServerError","StrictValidation","WithoutHero","WithDefaultEmail","WithLinks","WithSocialProviders","FullFeatured","AccentGreen","AccentAmber","AccentBlue","WithLogo","English"];export{b as AccentAmber,f as AccentBlue,y as AccentGreen,i as DarkMode,n as Default,v as English,h as FullFeatured,l as Loading,d as StrictValidation,p as WithDefaultEmail,u as WithLinks,x as WithLogo,c as WithServerError,g as WithSocialProviders,m as WithoutHero,Ge as __namedExportsOrder,ze as default};
