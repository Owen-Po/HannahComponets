import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as m}from"./iframe-DfrHIFEz.js";import{c as te}from"./cn-BQHNewu7.js";import{c as Te}from"./createLucideIcon-DplafLFN.js";import{C as x,E as ce,a as de,A as Ae}from"./eye-DWH9AomM.js";import{L as Ee}from"./loader-circle-BdmA__hK.js";import{C as Me}from"./check-DZ1AcABI.js";import"./preload-helper-PPVm8Dsz.js";const qe=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],Ve=Te("user-plus",qe),Ie=({accentColor:p})=>{const b=m.useRef(null);return m.useEffect(()=>{const t=b.current;if(!t)return;const o=t.getContext("2d");if(!o)return;let y,n=[];const g=()=>{t.width=t.offsetWidth,t.height=t.offsetHeight,n=Array.from({length:55},()=>({x:Math.random()*t.width,y:Math.random()*t.height,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,r:Math.random()*1.5+.5}))},v=()=>{o.clearRect(0,0,t.width,t.height),n.forEach(a=>{a.x+=a.vx,a.y+=a.vy,(a.x<0||a.x>t.width)&&(a.vx*=-1),(a.y<0||a.y>t.height)&&(a.vy*=-1),o.beginPath(),o.arc(a.x,a.y,a.r,0,Math.PI*2),o.fillStyle=`${p}99`,o.fill()});for(let a=0;a<n.length;a++)for(let l=a+1;l<n.length;l++){const w=n[a].x-n[l].x,k=n[a].y-n[l].y,j=Math.sqrt(w*w+k*k);if(j<90){const U=Math.round(50*(1-j/90)).toString(16).padStart(2,"0");o.beginPath(),o.moveTo(n[a].x,n[a].y),o.lineTo(n[l].x,n[l].y),o.strokeStyle=`${p}${U}`,o.lineWidth=.7,o.stroke()}}y=requestAnimationFrame(v)};return g(),v(),window.addEventListener("resize",g),()=>{cancelAnimationFrame(y),window.removeEventListener("resize",g)}},[p]),e.jsx("canvas",{ref:b,className:"absolute inset-0 size-full"})},me=({title:p="Crear cuenta",description:b="Completa tus datos para registrarte.",companyName:t="Sistema",heroTitle:o,heroSubtitle:y,heroTagline:n="Component Library",submitLabel:g="Registrarme",nameLabel:v="Nombre completo",namePlaceholder:a="Tu nombre",emailLabel:l="Correo electrónico",emailPlaceholder:w="correo@empresa.com",passwordLabel:k="Contraseña",passwordPlaceholder:j="••••••••",confirmPasswordLabel:U="Confirmar contraseña",confirmPasswordPlaceholder:ge="••••••••",showHero:he=!0,logo:oe,accentColor:i="#7c6aff",loading:c=!1,error:ne,validationRules:xe={},loginLink:C,termsLink:d,socialProviders:K,showTermsCheckbox:N=!1,termsCheckboxLabel:fe,onSubmit:be,onChange:ye})=>{const{minPasswordLength:X=6,emailPattern:ie=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,nameMinLength:ee=2,emailErrorMessage:ve="Ingresa un correo válido.",passwordErrorMessage:we=`La contraseña debe tener al menos ${X} caracteres.`,confirmPasswordErrorMessage:ke="Las contraseñas no coinciden.",nameErrorMessage:je=`El nombre debe tener al menos ${ee} caracteres.`}=xe,[ae,Ce]=m.useState(!1),[re,Ne]=m.useState(!1),[se,Le]=m.useState(!1),[L,le]=m.useState({name:!1,email:!1,password:!1,confirmPassword:!1}),[Se,h]=m.useState(null),[s,Pe]=m.useState({name:"",email:"",password:"",confirmPassword:""}),S=L.name&&s.name.trim().length<ee,P=L.email&&!ie.test(s.email),R=L.password&&s.password.length<X,T=L.confirmPassword&&s.password!==s.confirmPassword,A=r=>{const u={...s,[r.target.name]:r.target.value};Pe(u),ye?.(u)},E=r=>{le(u=>({...u,[r]:!0})),h(null)},Re=async r=>{r.preventDefault(),le({name:!0,email:!0,password:!0,confirmPassword:!0}),!(s.name.trim().length<ee)&&ie.test(s.email)&&(s.password.length<X||s.password===s.confirmPassword&&(N&&!se||await be(s)))},M=(r,u)=>u?{borderColor:"rgba(248,113,113,0.5)",backgroundColor:"rgba(248,113,113,0.05)"}:Se===r?{borderColor:i,backgroundColor:`${i}12`}:{},q=te("h-[46px] w-full rounded-lg border px-4 text-sm outline-none transition-all duration-200 disabled:opacity-50","border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400","dark:border-gray-700 dark:bg-gray-800/60 dark:text-white dark:placeholder:text-gray-600"),V="mb-2 block text-[11.5px] font-medium uppercase tracking-[0.08em] text-gray-400 dark:text-gray-500";return e.jsx("div",{className:"flex min-h-screen w-full items-center justify-center bg-gray-50 px-4 py-16 dark:bg-gray-950",children:e.jsxs("div",{className:"flex w-full max-w-225 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:shadow-2xl",children:[he&&e.jsxs("div",{className:"relative hidden w-[44%] overflow-hidden bg-gray-100 lg:flex dark:bg-gray-950",children:[e.jsx(Ie,{accentColor:i}),e.jsx("div",{className:"pointer-events-none absolute inset-0 z-1 bg-linear-to-b from-gray-100/50 via-transparent to-gray-100/85 dark:from-gray-950/50 dark:to-gray-950/85"}),e.jsxs("div",{className:"absolute inset-0 z-10 flex flex-col justify-end p-10",children:[oe&&e.jsx("div",{className:"mb-auto pt-4",children:oe}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-4 text-[11px] uppercase tracking-[0.18em] text-gray-400 dark:text-gray-600",children:n}),e.jsx("h2",{className:"mb-2 text-[2rem] font-extrabold leading-[1.15] text-gray-900 dark:text-white",children:o??e.jsxs(e.Fragment,{children:["Únete al"," ",e.jsx("span",{style:{color:i},children:"equipo"})]})}),e.jsx("p",{className:"text-[13px] leading-relaxed text-gray-500 dark:text-gray-600",children:y??"Crea tu cuenta y comienza a gestionar tu equipo."}),e.jsxs("p",{className:"mt-6 text-xs text-gray-400 dark:text-gray-700",children:["© ",new Date().getFullYear()," ",t]})]})]})]}),e.jsx("div",{className:"flex flex-1 items-center justify-center px-10 py-12",children:e.jsxs("div",{className:"w-full max-w-90",children:[e.jsx("div",{className:"mb-7 flex size-8 items-center justify-center rounded-lg",style:{backgroundColor:i},children:e.jsx(Ve,{size:16,color:"#fff",strokeWidth:2.5})}),e.jsx("h1",{className:"mb-1.5 text-2xl font-bold text-gray-900 dark:text-white",children:p}),e.jsx("p",{className:"mb-8 text-[13.5px] leading-relaxed text-gray-500 dark:text-gray-500",children:b}),K&&K.length>0&&e.jsxs("div",{className:"mb-6 space-y-2.5",children:[K.map(r=>e.jsxs("button",{type:"button",onClick:r.onClick,disabled:c,className:"flex h-11 w-full items-center justify-center gap-2.5 rounded-lg border border-gray-200 bg-gray-50 text-[13.5px] font-medium text-gray-600 transition-all hover:bg-gray-100 hover:text-gray-900 disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800/60 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white",children:[r.icon,r.label]},r.id)),e.jsxs("div",{className:"flex items-center gap-3 py-1",children:[e.jsx("div",{className:"h-px flex-1 bg-gray-200 dark:bg-gray-800"}),e.jsx("span",{className:"text-[11px] uppercase tracking-wider text-gray-400 dark:text-gray-700",children:"o regístrate con email"}),e.jsx("div",{className:"h-px flex-1 bg-gray-200 dark:bg-gray-800"})]})]}),e.jsxs("form",{onSubmit:Re,className:"space-y-5",noValidate:!0,children:[ne&&e.jsxs("div",{className:"flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3.5 py-2.5 text-[13px] text-red-600 dark:border-red-500/25 dark:bg-red-500/10 dark:text-red-400",children:[e.jsx(x,{size:15,className:"shrink-0"}),ne]}),e.jsxs("div",{children:[e.jsx("label",{className:V,children:v}),e.jsx("input",{type:"text",name:"name",placeholder:a,value:s.name,onChange:A,onBlur:()=>E("name"),onFocus:()=>h("name"),disabled:c,autoComplete:"name",className:q,style:M("name",S),"aria-invalid":S,"aria-describedby":S?"name-error":void 0}),S&&e.jsxs("p",{id:"name-error",className:"mt-1.5 flex items-center gap-1.5 text-xs text-red-500 dark:text-red-400",children:[e.jsx(x,{size:12,className:"shrink-0"}),je]})]}),e.jsxs("div",{children:[e.jsx("label",{className:V,children:l}),e.jsx("input",{type:"email",name:"email",placeholder:w,value:s.email,onChange:A,onBlur:()=>E("email"),onFocus:()=>h("email"),disabled:c,autoComplete:"email",className:q,style:M("email",P),"aria-invalid":P,"aria-describedby":P?"email-error":void 0}),P&&e.jsxs("p",{id:"email-error",className:"mt-1.5 flex items-center gap-1.5 text-xs text-red-500 dark:text-red-400",children:[e.jsx(x,{size:12,className:"shrink-0"}),ve]})]}),e.jsxs("div",{children:[e.jsx("label",{className:V,children:k}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:ae?"text":"password",name:"password",placeholder:j,value:s.password,onChange:A,onBlur:()=>E("password"),onFocus:()=>h("password"),disabled:c,autoComplete:"new-password",className:te(q,"pr-11"),style:M("password",R),"aria-invalid":R,"aria-describedby":R?"password-error":void 0}),e.jsx("button",{type:"button",onClick:()=>Ce(r=>!r),className:"absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-400",tabIndex:-1,"aria-label":ae?"Ocultar contraseña":"Mostrar contraseña",children:ae?e.jsx(ce,{size:18}):e.jsx(de,{size:18})})]}),R&&e.jsxs("p",{id:"password-error",className:"mt-1.5 flex items-center gap-1.5 text-xs text-red-500 dark:text-red-400",children:[e.jsx(x,{size:12,className:"shrink-0"}),we]})]}),e.jsxs("div",{children:[e.jsx("label",{className:V,children:U}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:re?"text":"password",name:"confirmPassword",placeholder:ge,value:s.confirmPassword,onChange:A,onBlur:()=>E("confirmPassword"),onFocus:()=>h("confirmPassword"),disabled:c,autoComplete:"new-password",className:te(q,"pr-11"),style:M("confirmPassword",T),"aria-invalid":T,"aria-describedby":T?"confirm-error":void 0}),e.jsx("button",{type:"button",onClick:()=>Ne(r=>!r),className:"absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-400",tabIndex:-1,"aria-label":re?"Ocultar contraseña":"Mostrar contraseña",children:re?e.jsx(ce,{size:18}):e.jsx(de,{size:18})})]}),T&&e.jsxs("p",{id:"confirm-error",className:"mt-1.5 flex items-center gap-1.5 text-xs text-red-500 dark:text-red-400",children:[e.jsx(x,{size:12,className:"shrink-0"}),ke]})]}),N&&e.jsxs("label",{className:"flex items-start gap-2.5 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:se,onChange:r=>Le(r.target.checked),disabled:c,className:"mt-0.5 size-4 rounded border-gray-300 accent-current",style:{accentColor:i}}),e.jsx("span",{className:"text-[13px] text-gray-500 dark:text-gray-400",children:fe??e.jsxs(e.Fragment,{children:["Acepto los"," ",d?e.jsx("a",{href:d.href,onClick:d.onClick,className:"underline underline-offset-2 transition-colors hover:opacity-70",style:{color:i},children:d.label}):"términos y condiciones"]})})]}),e.jsx("button",{type:"submit",disabled:c||N&&!se,className:"flex h-12 w-full items-center justify-center gap-2 rounded-lg text-sm font-bold tracking-[0.04em] text-white transition-all duration-200 hover:-translate-y-px active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50",style:{backgroundColor:i},children:c?e.jsxs(e.Fragment,{children:[e.jsx(Ee,{size:17,className:"animate-spin"}),"Creando cuenta..."]}):e.jsxs(e.Fragment,{children:[g,e.jsx(Ae,{size:16})]})}),!N&&d&&e.jsxs("p",{className:"text-center text-[11.5px] leading-relaxed text-gray-400 dark:text-gray-700",children:["Al registrarte aceptas los"," ",e.jsx("a",{href:d.href,onClick:d.onClick,className:"underline underline-offset-2 transition-colors hover:text-gray-600 dark:hover:text-gray-400",children:d.label})]}),C&&e.jsxs("p",{className:"text-center text-[13px] text-gray-500 dark:text-gray-600",children:["¿Ya tienes cuenta?"," ",e.jsx("a",{href:C.href,onClick:C.onClick,className:"font-medium transition-colors hover:opacity-80",style:{color:i},children:C.label})]}),e.jsxs("div",{className:"flex items-center gap-2.5 pt-1",children:[e.jsx("div",{className:"h-px flex-1 bg-gray-200 dark:bg-gray-800"}),e.jsxs("span",{className:"flex items-center gap-1.5 text-[11px] text-gray-400 dark:text-gray-700",children:[e.jsx(Me,{size:11}),t]}),e.jsx("div",{className:"h-px flex-1 bg-gray-200 dark:bg-gray-800"})]})]})]})})]})})};me.__docgenInfo={description:"",methods:[],displayName:"Register",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Crear cuenta"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Completa tus datos para registrarte."',computed:!1}},companyName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Sistema"',computed:!1}},heroTitle:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},heroSubtitle:{required:!1,tsType:{name:"string"},description:""},heroTagline:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Component Library"',computed:!1}},submitLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Registrarme"',computed:!1}},nameLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Nombre completo"',computed:!1}},namePlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Tu nombre"',computed:!1}},emailLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Correo electrónico"',computed:!1}},emailPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"correo@empresa.com"',computed:!1}},passwordLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Contraseña"',computed:!1}},passwordPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"••••••••"',computed:!1}},confirmPasswordLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Confirmar contraseña"',computed:!1}},confirmPasswordPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"••••••••"',computed:!1}},showHero:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},logo:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},accentColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#7c6aff"',computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:""},validationRules:{required:!1,tsType:{name:"RegisterValidationRules"},description:"",defaultValue:{value:"{}",computed:!1}},loginLink:{required:!1,tsType:{name:"RegisterLink"},description:""},termsLink:{required:!1,tsType:{name:"RegisterLink"},description:""},socialProviders:{required:!1,tsType:{name:"Array",elements:[{name:"RegisterSocialProvider"}],raw:"RegisterSocialProvider[]"},description:""},showTermsCheckbox:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},termsCheckboxLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: RegisterData) => void | Promise<void>",signature:{arguments:[{type:{name:"RegisterData"},name:"data"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: RegisterData) => void",signature:{arguments:[{type:{name:"RegisterData"},name:"data"}],return:{name:"void"}}},description:""}}};const ue=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",children:[e.jsx("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),e.jsx("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),e.jsx("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z",fill:"#FBBC05"}),e.jsx("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]}),pe=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"})}),f=()=>{},ze=async()=>{},Oe={title:"Components/Register",component:me,parameters:{layout:"fullscreen",docs:{description:{component:"Componente de registro con hero animado de partículas, validación de campos en tiempo real, soporte para proveedores sociales, checkbox de términos y color de acento dinámico."}}},argTypes:{onSubmit:{action:"submitted"},onChange:{action:"changed"},title:{control:"text",description:"Título principal del formulario",table:{category:"Contenido",defaultValue:{summary:"Crear cuenta"}}},description:{control:"text",description:"Subtítulo debajo del título",table:{category:"Contenido"}},companyName:{control:"text",description:"Nombre de la empresa (footer y hero)",table:{category:"Contenido",defaultValue:{summary:"Sistema"}}},heroTagline:{control:"text",table:{category:"Contenido"}},heroSubtitle:{control:"text",table:{category:"Contenido"}},submitLabel:{control:"text",table:{category:"Contenido",defaultValue:{summary:"Registrarme"}}},nameLabel:{control:"text",table:{category:"Contenido"}},emailLabel:{control:"text",table:{category:"Contenido"}},passwordLabel:{control:"text",table:{category:"Contenido"}},confirmPasswordLabel:{control:"text",table:{category:"Contenido"}},accentColor:{control:"color",description:"Color de acento",table:{category:"Visual",defaultValue:{summary:"#7c6aff"}}},showHero:{control:"boolean",table:{category:"Visual",defaultValue:{summary:"true"}}},showTermsCheckbox:{control:"boolean",table:{category:"Visual",defaultValue:{summary:"false"}}},loading:{control:"boolean",table:{category:"Estado",defaultValue:{summary:"false"}}},error:{control:"text",table:{category:"Estado"}},validationRules:{control:"object",table:{category:"Validación"}},loginLink:{control:"object",table:{category:"Links"}},termsLink:{control:"object",table:{category:"Links"}},logo:{table:{disable:!0}},heroTitle:{table:{disable:!0}},socialProviders:{table:{disable:!0}},termsCheckboxLabel:{table:{disable:!0}}},args:{onSubmit:ze,onChange:f,companyName:"Acme Corp"}},I={name:"Light mode"},z={name:"Dark mode",parameters:{backgrounds:{default:"Dark"}}},F={args:{loading:!0}},W={name:"Server error",args:{error:"Este correo ya está registrado. Intenta con otro o inicia sesión."}},G={name:"Strict validation",args:{validationRules:{minPasswordLength:10,nameMinLength:3,passwordErrorMessage:"La contraseña debe tener al menos 10 caracteres."}}},H={name:"Without hero",args:{showHero:!1}},D={name:"With links",args:{loginLink:{label:"Iniciar sesión",href:"#"},termsLink:{label:"Términos y Condiciones",href:"#"}}},B={name:"With terms checkbox",args:{showTermsCheckbox:!0,termsLink:{label:"Términos de Servicio",href:"#"},loginLink:{label:"Iniciar sesión",href:"#"}}},$={name:"Social providers",args:{socialProviders:[{id:"google",label:"Registrarse con Google",icon:e.jsx(ue,{}),onClick:f},{id:"github",label:"Registrarse con GitHub",icon:e.jsx(pe,{}),onClick:f}]}},_={name:"Full featured",args:{title:"Crear cuenta",description:"Regístrate para acceder a todas las funcionalidades.",heroTagline:"Acme Platform",heroSubtitle:"Gestiona equipos, proyectos y métricas en un solo lugar.",loginLink:{label:"Iniciar sesión",href:"#"},termsLink:{label:"Términos de Servicio",href:"#"},showTermsCheckbox:!0,validationRules:{minPasswordLength:8},socialProviders:[{id:"google",label:"Registrarse con Google",icon:e.jsx(ue,{}),onClick:f},{id:"github",label:"Registrarse con GitHub",icon:e.jsx(pe,{}),onClick:f}]}},O={name:"Accent · Green",args:{accentColor:"#10b981",companyName:"GreenApp"}},J={name:"Accent · Amber",args:{accentColor:"#f59e0b",companyName:"Dashboard"}},Q={name:"Accent · Blue",args:{accentColor:"#3b82f6",companyName:"CloudHQ"}},Y={name:"With logo",args:{companyName:"Acme Corp",logo:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("div",{style:{width:28,height:28,borderRadius:6,background:"#fff",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:e.jsx("path",{d:"M7 1L13 12H1L7 1Z",fill:"#0e0e18"})})}),e.jsx("span",{style:{color:"#fff",fontWeight:700,fontSize:15},children:"Acme"})]})}},Z={name:"English copy",args:{title:"Create account",description:"Fill in your details to get started.",submitLabel:"Sign up",nameLabel:"Full name",namePlaceholder:"John Doe",emailLabel:"Email address",emailPlaceholder:"you@company.com",passwordLabel:"Password",confirmPasswordLabel:"Confirm password",companyName:"Acme Corp",loginLink:{label:"Sign in",href:"#"},validationRules:{emailErrorMessage:"Please enter a valid email.",passwordErrorMessage:"Password must be at least 6 characters.",confirmPasswordErrorMessage:"Passwords do not match.",nameErrorMessage:"Name must be at least 2 characters."}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: "Light mode"
}`,...I.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "Dark mode",
  parameters: {
    backgrounds: {
      default: "Dark"
    }
  }
}`,...z.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...F.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "Server error",
  args: {
    error: "Este correo ya está registrado. Intenta con otro o inicia sesión."
  }
}`,...W.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: "Strict validation",
  args: {
    validationRules: {
      minPasswordLength: 10,
      nameMinLength: 3,
      passwordErrorMessage: "La contraseña debe tener al menos 10 caracteres."
    }
  }
}`,...G.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "Without hero",
  args: {
    showHero: false
  }
}`,...H.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "Accent · Green",
  args: {
    accentColor: "#10b981",
    companyName: "GreenApp"
  }
}`,...O.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: "Accent · Amber",
  args: {
    accentColor: "#f59e0b",
    companyName: "Dashboard"
  }
}`,...J.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: "Accent · Blue",
  args: {
    accentColor: "#3b82f6",
    companyName: "CloudHQ"
  }
}`,...Q.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: "With logo",
  args: {
    companyName: "Acme Corp",
    logo: <div style={{
      display: "flex",
      alignItems: "center",
      gap: 8
    }}>\r
        <div style={{
        width: 28,
        height: 28,
        borderRadius: 6,
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>\r
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1L13 12H1L7 1Z" fill="#0e0e18" /></svg>\r
        </div>\r
        <span style={{
        color: "#fff",
        fontWeight: 700,
        fontSize: 15
      }}>Acme</span>\r
      </div>
  }
}`,...Y.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}};const Je=["Default","DarkMode","Loading","WithServerError","StrictValidation","WithoutHero","WithLinks","WithTermsCheckbox","WithSocialProviders","FullFeatured","AccentGreen","AccentAmber","AccentBlue","WithLogo","English"];export{J as AccentAmber,Q as AccentBlue,O as AccentGreen,z as DarkMode,I as Default,Z as English,_ as FullFeatured,F as Loading,G as StrictValidation,D as WithLinks,Y as WithLogo,W as WithServerError,$ as WithSocialProviders,B as WithTermsCheckbox,H as WithoutHero,Je as __namedExportsOrder,Oe as default};
