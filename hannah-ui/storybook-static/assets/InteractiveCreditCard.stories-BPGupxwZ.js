import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as m}from"./iframe-DTzrpb2v.js";import{c as l}from"./cn-BQHNewu7.js";import"./preload-helper-PPVm8Dsz.js";function U(a){const s=a.replace(/\D/g,"");if(!s)return"unknown";const c=parseInt(s[0],10),r=s.length>=2?parseInt(s.slice(0,2),10):-1;return c===4?"visa":r>=51&&r<=55||r>=22&&r<=27?"mastercard":r===34||r===37?"amex":r===36||r===38||r>=30&&r<=30?"diners":"unknown"}function M(a){return a.replace(/\D/g,"").slice(0,16).replace(/(.{4})/g,"$1 ").trim()}const Z=()=>e.jsx("svg",{viewBox:"0 0 80 26",className:"h-6","aria-label":"Visa",children:e.jsx("text",{x:"0",y:"22",fill:"#fff",fontSize:"24",fontWeight:"800",fontStyle:"italic",fontFamily:"sans-serif",children:"VISA"})}),G=()=>e.jsxs("svg",{viewBox:"0 0 60 36",className:"h-8","aria-label":"Mastercard",children:[e.jsx("circle",{cx:"22",cy:"18",r:"14",fill:"#EB001B",opacity:"0.9"}),e.jsx("circle",{cx:"38",cy:"18",r:"14",fill:"#F79E1B",opacity:"0.9"}),e.jsx("path",{d:"M30 7.5a14 14 0 010 21 14 14 0 000-21z",fill:"#FF5F00"})]}),W=()=>e.jsx("svg",{viewBox:"0 0 80 26",className:"h-6","aria-label":"American Express",children:e.jsx("text",{x:"0",y:"22",fill:"#fff",fontSize:"14",fontWeight:"700",fontFamily:"sans-serif",children:"AMEX"})}),Y=()=>e.jsx("svg",{viewBox:"0 0 100 26",className:"h-6","aria-label":"Diners Club",children:e.jsx("text",{x:"0",y:"22",fill:"#fff",fontSize:"12",fontWeight:"700",fontFamily:"sans-serif",children:"DINERS"})}),F=({brand:a})=>{switch(a){case"visa":return e.jsx(Z,{});case"mastercard":return e.jsx(G,{});case"amex":return e.jsx(W,{});case"diners":return e.jsx(Y,{});default:return e.jsx("div",{className:"h-6 w-12 rounded bg-white/20"})}},V=({bank:a})=>{const s={bcp:{text:"BCP",color:"#ff6600"},interbank:{text:"INTERBANK",color:"#00b140"},bbva:{text:"BBVA",color:"#004481"},scotiabank:{text:"SCOTIABANK",color:"#ec111a"},banbif:{text:"BANBIF",color:"#e30613"},falabella:{text:"FALABELLA",color:"#8bc53f"},ripley:{text:"RIPLEY",color:"#6b2fa0"}};if(a==="none")return null;const{text:c,color:r}=s[a];return e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("div",{className:"w-5 h-5 rounded-full flex items-center justify-center",style:{backgroundColor:r},children:e.jsx("span",{className:"text-white text-[7px] font-black",children:c[0]})}),e.jsx("span",{className:"text-[11px] font-bold text-white/90 tracking-wide",children:c})]})},z=()=>e.jsxs("svg",{viewBox:"0 0 50 40",className:"w-12 h-9","aria-hidden":"true",children:[e.jsx("rect",{x:"0",y:"0",width:"50",height:"40",rx:"6",fill:"url(#chipGrad)"}),e.jsx("line",{x1:"0",y1:"14",x2:"50",y2:"14",stroke:"#b8860b",strokeWidth:"0.8",opacity:"0.5"}),e.jsx("line",{x1:"0",y1:"26",x2:"50",y2:"26",stroke:"#b8860b",strokeWidth:"0.8",opacity:"0.5"}),e.jsx("line",{x1:"18",y1:"0",x2:"18",y2:"40",stroke:"#b8860b",strokeWidth:"0.8",opacity:"0.5"}),e.jsx("line",{x1:"32",y1:"0",x2:"32",y2:"40",stroke:"#b8860b",strokeWidth:"0.8",opacity:"0.5"}),e.jsx("defs",{children:e.jsxs("linearGradient",{id:"chipGrad",x1:"0",y1:"0",x2:"50",y2:"40",children:[e.jsx("stop",{offset:"0%",stopColor:"#daa520"}),e.jsx("stop",{offset:"50%",stopColor:"#f0d060"}),e.jsx("stop",{offset:"100%",stopColor:"#daa520"})]})})]}),K={bcp:"from-[#002a5c] via-[#003d80] to-[#ff6600]",interbank:"from-[#003224] via-[#004d35] to-[#00b140]",bbva:"from-[#004481] via-[#005da4] to-[#0073ce]",scotiabank:"from-[#7a0019] via-[#9a0022] to-[#ec111a]",banbif:"from-[#1a1a2e] via-[#2d2d4a] to-[#e30613]",falabella:"from-[#2d5016] via-[#3d6b1e] to-[#8bc53f]",ripley:"from-[#2e0854] via-[#4a1080] to-[#6b2fa0]",none:"from-gray-700 via-gray-800 to-gray-900"},Q={visa:"from-[#1a1f71] via-[#2d3a8c] to-[#1a1f71]",mastercard:"from-[#1a1a2e] via-[#16213e] to-[#0f3460]",amex:"from-[#006fcf] via-[#0080e0] to-[#006fcf]",diners:"from-[#0a3d6b] via-[#125a9e] to-[#0a3d6b]",unknown:"from-gray-700 via-gray-800 to-gray-900"},i=({cardNumber:a="",cardHolder:s="",expiryDate:c="",cvv:r="",isCvvFocused:S=!1,bank:n="none",className:D})=>{const o=U(a),u=M(a)||"•••• •••• •••• ••••",L=s.toUpperCase()||"NOMBRE DEL TITULAR",R=c||"MM/AA",b=n!=="none"?K[n]:Q[o];return e.jsx("div",{className:l("w-full max-w-[400px] aspect-[1.586/1]",D),style:{perspective:"1200px"},children:e.jsxs("div",{className:"relative w-full h-full transition-transform duration-700 ease-in-out",style:{transformStyle:"preserve-3d",transform:S?"rotateY(180deg)":"rotateY(0deg)"},children:[e.jsxs("div",{className:l("absolute inset-0 rounded-2xl overflow-hidden","bg-gradient-to-br",b,"shadow-2xl","p-6 flex flex-col justify-between"),style:{backfaceVisibility:"hidden"},children:[e.jsx("div",{className:"absolute inset-0 opacity-[0.07] pointer-events-none",style:{backgroundImage:"radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)"}}),e.jsxs("div",{className:"relative flex items-start justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(z,{}),n!=="none"&&e.jsx(V,{bank:n})]}),e.jsx(F,{brand:o})]}),e.jsx("div",{className:"relative",children:e.jsx("p",{className:"text-xl sm:text-2xl font-mono tracking-[0.18em] text-white drop-shadow-sm",children:u})}),e.jsxs("div",{className:"relative flex items-end justify-between gap-4",children:[e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[10px] text-white/50 uppercase tracking-wider mb-0.5",children:"Titular"}),e.jsx("p",{className:"text-sm font-medium text-white tracking-wider truncate",children:L})]}),e.jsxs("div",{className:"text-right shrink-0",children:[e.jsx("p",{className:"text-[10px] text-white/50 uppercase tracking-wider mb-0.5",children:"Vence"}),e.jsx("p",{className:"text-sm font-medium text-white font-mono tracking-wider",children:R})]})]})]}),e.jsxs("div",{className:l("absolute inset-0 rounded-2xl overflow-hidden","bg-gradient-to-br",b,"shadow-2xl flex flex-col"),style:{backfaceVisibility:"hidden",transform:"rotateY(180deg)"},children:[e.jsx("div",{className:"mt-8 w-full h-12 bg-gray-950/80"}),e.jsxs("div",{className:"flex items-center gap-3 px-6 mt-6",children:[e.jsxs("div",{className:"flex-1 h-10 rounded bg-gray-200 relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 opacity-30",style:{backgroundImage:"repeating-linear-gradient(90deg, transparent, transparent 3px, #999 3px, #999 4px)"}}),e.jsx("p",{className:"absolute right-0 top-0 bottom-0 flex items-center px-3 text-gray-700 font-mono text-base italic tracking-wider",children:s.toUpperCase().slice(0,20)})]}),e.jsx("div",{className:"w-16 h-10 rounded bg-white flex items-center justify-center border border-gray-300",children:e.jsx("p",{className:"font-mono text-lg text-gray-900 font-bold tracking-wider",children:r||"•••"})})]}),e.jsx("div",{className:"flex-1 flex items-end px-6 pb-5",children:e.jsxs("div",{className:"flex items-end justify-between w-full",children:[e.jsxs("p",{className:"text-[10px] text-white/40 leading-tight max-w-[55%]",children:["Tarjeta emitida",n!=="none"?` por ${n.toUpperCase()}`:"",". Su uso indebido está penalizado por la ley."]}),e.jsxs("div",{className:"flex items-center gap-2",children:[n!=="none"&&e.jsx(V,{bank:n}),e.jsx(F,{brand:o})]})]})})]})]})})};i.displayName="InteractiveCreditCard";i.__docgenInfo={description:"",methods:[],displayName:"InteractiveCreditCard",props:{cardNumber:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},cardHolder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},expiryDate:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},cvv:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},isCvvFocused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},bank:{required:!1,tsType:{name:"union",raw:`| "bcp"
| "interbank"
| "bbva"
| "scotiabank"
| "banbif"
| "falabella"
| "ripley"
| "none"`,elements:[{name:"literal",value:'"bcp"'},{name:"literal",value:'"interbank"'},{name:"literal",value:'"bbva"'},{name:"literal",value:'"scotiabank"'},{name:"literal",value:'"banbif"'},{name:"literal",value:'"falabella"'},{name:"literal",value:'"ripley"'},{name:"literal",value:'"none"'}]},description:"Banco emisor peruano — aplica gradiente y logo del banco",defaultValue:{value:'"none"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const $=[{value:"none",label:"Sin banco"},{value:"bcp",label:"BCP"},{value:"interbank",label:"Interbank"},{value:"bbva",label:"BBVA"},{value:"scotiabank",label:"Scotiabank"},{value:"banbif",label:"BanBif"},{value:"falabella",label:"Falabella"},{value:"ripley",label:"Ripley"}],B=({bank:a="bcp",onSubmit:s,className:c})=>{const[r,S]=m.useState(""),[n,D]=m.useState(""),[o,H]=m.useState(""),[u,L]=m.useState(""),[R,b]=m.useState(!1),[T,O]=m.useState(a),_=t=>{const d=t.target.value.replace(/\D/g,"").slice(0,16);S(d)},P=t=>{let d=t.target.value.replace(/\D/g,"").slice(0,4);d.length>=3&&(d=d.slice(0,2)+"/"+d.slice(2)),H(d)},q=t=>{L(t.target.value.replace(/\D/g,"").slice(0,4))},J=t=>{t.preventDefault(),s?.({cardNumber:r,cardHolder:n,expiryDate:o,cvv:u,bank:T})},p=l("w-full h-11 px-4 text-sm font-medium rounded-xl border outline-none transition-all duration-200","bg-white dark:bg-gray-900","border-gray-300 dark:border-gray-700","text-gray-900 dark:text-white","placeholder:text-gray-400 dark:placeholder:text-gray-600","focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800"),x="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5";return e.jsxs("div",{className:l("w-full max-w-[440px]",c),children:[e.jsx("div",{className:"flex justify-center mb-8",children:e.jsx(i,{cardNumber:r,cardHolder:n,expiryDate:o,cvv:u,isCvvFocused:R,bank:T})}),e.jsxs("form",{onSubmit:J,className:"space-y-5",noValidate:!0,children:[e.jsxs("div",{children:[e.jsx("label",{className:x,children:"Banco emisor"}),e.jsx("select",{value:T,onChange:t=>O(t.target.value),className:l(p,"cursor-pointer"),children:$.map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))})]}),e.jsxs("div",{children:[e.jsx("label",{className:x,children:"Número de tarjeta"}),e.jsx("input",{type:"text",inputMode:"numeric",placeholder:"1234 5678 9012 3456",value:M(r),onChange:_,maxLength:19,autoComplete:"cc-number",className:l(p,"font-mono tracking-wider")})]}),e.jsxs("div",{children:[e.jsx("label",{className:x,children:"Titular"}),e.jsx("input",{type:"text",placeholder:"NOMBRE COMO APARECE EN LA TARJETA",value:n,onChange:t=>D(t.target.value),maxLength:30,autoComplete:"cc-name",className:p})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:x,children:"Vencimiento"}),e.jsx("input",{type:"text",inputMode:"numeric",placeholder:"MM/AA",value:o,onChange:P,maxLength:5,autoComplete:"cc-exp",className:p})]}),e.jsxs("div",{children:[e.jsx("label",{className:x,children:"CVV"}),e.jsx("input",{type:"text",inputMode:"numeric",placeholder:"•••",value:u,onChange:q,onFocus:()=>b(!0),onBlur:()=>b(!1),maxLength:4,autoComplete:"cc-csc",className:l(p,"font-mono tracking-widest")})]})]}),e.jsx("button",{type:"submit",className:l("w-full h-12 rounded-xl text-sm font-bold tracking-wide text-white","bg-blue-600 hover:bg-blue-700 active:scale-[0.98]","transition-all duration-200","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"),children:"Pagar ahora"})]})]})};B.displayName="CreditCardForm";B.__docgenInfo={description:"",methods:[],displayName:"CreditCardForm",props:{bank:{required:!1,tsType:{name:"union",raw:`| "bcp"
| "interbank"
| "bbva"
| "scotiabank"
| "banbif"
| "falabella"
| "ripley"
| "none"`,elements:[{name:"literal",value:'"bcp"'},{name:"literal",value:'"interbank"'},{name:"literal",value:'"bbva"'},{name:"literal",value:'"scotiabank"'},{name:"literal",value:'"banbif"'},{name:"literal",value:'"falabella"'},{name:"literal",value:'"ripley"'},{name:"literal",value:'"none"'}]},description:"Banco emisor — aplica tema visual a la tarjeta",defaultValue:{value:'"bcp"',computed:!1}},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: { cardNumber: string; cardHolder: string; expiryDate: string; cvv: string; bank: CardBank }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ cardNumber: string; cardHolder: string; expiryDate: string; cvv: string; bank: CardBank }",signature:{properties:[{key:"cardNumber",value:{name:"string",required:!0}},{key:"cardHolder",value:{name:"string",required:!0}},{key:"expiryDate",value:{name:"string",required:!0}},{key:"cvv",value:{name:"string",required:!0}},{key:"bank",value:{name:"union",raw:`| "bcp"
| "interbank"
| "bbva"
| "scotiabank"
| "banbif"
| "falabella"
| "ripley"
| "none"`,elements:[{name:"literal",value:'"bcp"'},{name:"literal",value:'"interbank"'},{name:"literal",value:'"bbva"'},{name:"literal",value:'"scotiabank"'},{name:"literal",value:'"banbif"'},{name:"literal",value:'"falabella"'},{name:"literal",value:'"ripley"'},{name:"literal",value:'"none"'}],required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const te={title:"Components/InteractiveCreditCard",component:i,tags:["autodocs"],argTypes:{cardNumber:{control:"text"},cardHolder:{control:"text"},expiryDate:{control:"text"},cvv:{control:"text"},isCvvFocused:{control:"boolean"},bank:{control:"select",options:["none","bcp","interbank","bbva","scotiabank","banbif","falabella","ripley"]}},decorators:[a=>e.jsx("div",{className:"p-8",children:e.jsx(a,{})})]},v={args:{cardNumber:"4557880012345678",cardHolder:"JOSE RAMIREZ",expiryDate:"09/27",cvv:"321",bank:"bcp"}},f={args:{cardNumber:"5491020012345678",cardHolder:"MARIA QUISPE",expiryDate:"03/28",cvv:"456",bank:"interbank"}},g={args:{cardNumber:"4110120012345678",cardHolder:"CARLOS FLORES",expiryDate:"11/26",cvv:"789",bank:"bbva"}},y={args:{cardNumber:"5254130012345678",cardHolder:"ANA TORRES",expiryDate:"06/29",cvv:"112",bank:"scotiabank"}},N={args:{cardNumber:"4213440012345678",cardHolder:"PEDRO GARCIA",expiryDate:"01/28",cvv:"654",bank:"falabella"}},h={args:{cardNumber:"5200830012345678",cardHolder:"LUCIA MENDOZA",expiryDate:"08/27",cvv:"998",bank:"ripley"}},k={args:{cardNumber:"4557880012345678",cardHolder:"JOSE RAMIREZ",expiryDate:"09/27",cvv:"321",bank:"bcp",isCvvFocused:!0}},j={args:{cardNumber:"4532015112830366",cardHolder:"JUAN PEREZ",expiryDate:"12/26"}},C={args:{cardNumber:"5425233430109903",cardHolder:"ROSA LOPEZ",expiryDate:"05/28"}},E={args:{}},w={render:()=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl",children:[e.jsx(i,{cardNumber:"4557880012345678",cardHolder:"BCP CLIENTE",expiryDate:"12/27",bank:"bcp"}),e.jsx(i,{cardNumber:"5491020012345678",cardHolder:"INTERBANK CLIENTE",expiryDate:"06/28",bank:"interbank"}),e.jsx(i,{cardNumber:"4110120012345678",cardHolder:"BBVA CLIENTE",expiryDate:"03/26",bank:"bbva"}),e.jsx(i,{cardNumber:"5254130012345678",cardHolder:"SCOTIA CLIENTE",expiryDate:"09/29",bank:"scotiabank"}),e.jsx(i,{cardNumber:"4213440012345678",cardHolder:"FALABELLA CLIENTE",expiryDate:"01/27",bank:"falabella"}),e.jsx(i,{cardNumber:"5200830012345678",cardHolder:"RIPLEY CLIENTE",expiryDate:"11/28",bank:"ripley"}),e.jsx(i,{cardNumber:"4916380012345678",cardHolder:"BANBIF CLIENTE",expiryDate:"04/27",bank:"banbif"})]})},A={render:()=>e.jsx(B,{bank:"bcp",onSubmit:a=>alert(JSON.stringify(a,null,2))})},I={render:()=>e.jsx(B,{bank:"interbank",onSubmit:a=>alert(JSON.stringify(a,null,2))})};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    cardNumber: "4557880012345678",
    cardHolder: "JOSE RAMIREZ",
    expiryDate: "09/27",
    cvv: "321",
    bank: "bcp"
  }
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    cardNumber: "5491020012345678",
    cardHolder: "MARIA QUISPE",
    expiryDate: "03/28",
    cvv: "456",
    bank: "interbank"
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    cardNumber: "4110120012345678",
    cardHolder: "CARLOS FLORES",
    expiryDate: "11/26",
    cvv: "789",
    bank: "bbva"
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    cardNumber: "5254130012345678",
    cardHolder: "ANA TORRES",
    expiryDate: "06/29",
    cvv: "112",
    bank: "scotiabank"
  }
}`,...y.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    cardNumber: "4213440012345678",
    cardHolder: "PEDRO GARCIA",
    expiryDate: "01/28",
    cvv: "654",
    bank: "falabella"
  }
}`,...N.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    cardNumber: "5200830012345678",
    cardHolder: "LUCIA MENDOZA",
    expiryDate: "08/27",
    cvv: "998",
    bank: "ripley"
  }
}`,...h.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    cardNumber: "4557880012345678",
    cardHolder: "JOSE RAMIREZ",
    expiryDate: "09/27",
    cvv: "321",
    bank: "bcp",
    isCvvFocused: true
  }
}`,...k.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    cardNumber: "4532015112830366",
    cardHolder: "JUAN PEREZ",
    expiryDate: "12/26"
  }
}`,...j.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    cardNumber: "5425233430109903",
    cardHolder: "ROSA LOPEZ",
    expiryDate: "05/28"
  }
}`,...C.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...E.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">\r
      <InteractiveCreditCard cardNumber="4557880012345678" cardHolder="BCP CLIENTE" expiryDate="12/27" bank="bcp" />\r
      <InteractiveCreditCard cardNumber="5491020012345678" cardHolder="INTERBANK CLIENTE" expiryDate="06/28" bank="interbank" />\r
      <InteractiveCreditCard cardNumber="4110120012345678" cardHolder="BBVA CLIENTE" expiryDate="03/26" bank="bbva" />\r
      <InteractiveCreditCard cardNumber="5254130012345678" cardHolder="SCOTIA CLIENTE" expiryDate="09/29" bank="scotiabank" />\r
      <InteractiveCreditCard cardNumber="4213440012345678" cardHolder="FALABELLA CLIENTE" expiryDate="01/27" bank="falabella" />\r
      <InteractiveCreditCard cardNumber="5200830012345678" cardHolder="RIPLEY CLIENTE" expiryDate="11/28" bank="ripley" />\r
      <InteractiveCreditCard cardNumber="4916380012345678" cardHolder="BANBIF CLIENTE" expiryDate="04/27" bank="banbif" />\r
    </div>
}`,...w.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <CreditCardForm bank="bcp" onSubmit={data => alert(JSON.stringify(data, null, 2))} />
}`,...A.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <CreditCardForm bank="interbank" onSubmit={data => alert(JSON.stringify(data, null, 2))} />
}`,...I.parameters?.docs?.source}}};const se=["BCP_Visa","Interbank_Mastercard","BBVA_Visa","Scotiabank_Mastercard","Falabella_Visa","Ripley_Mastercard","BCP_Reverso","Visa_SinBanco","Mastercard_SinBanco","Vacia","TodosLosBancos","FormularioBCP","FormularioInterbank"];export{g as BBVA_Visa,k as BCP_Reverso,v as BCP_Visa,N as Falabella_Visa,A as FormularioBCP,I as FormularioInterbank,f as Interbank_Mastercard,C as Mastercard_SinBanco,h as Ripley_Mastercard,y as Scotiabank_Mastercard,w as TodosLosBancos,E as Vacia,j as Visa_SinBanco,se as __namedExportsOrder,te as default};
