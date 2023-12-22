import{b as G,cx as U,bp as K,ao as Y,kg as V,j7 as z,aW as Q,ml as J,r as i,N as re,j as e,ag as X,an as H,mm as Z,ad as O,a1 as q,eq as ee,av as ie,b7 as le,gN as de,gL as ce,V as ue,u as pe,O as me,e as be,q as fe,G as M,f as he,s as ge,T as xe}from"./index-cVx9Zqte.js";import{D as ye}from"./DebouncedSearchTextField-fJN9axDi.js";import{A as te}from"./Autocomplete-vchTD_Ph.js";import{D as oe}from"./Drawer-Zv-UzsLT.js";import{g as ae}from"./grants-2yY1GgvJ.js";import{O as ve}from"./OrderBy-9siuTGWJ.js";import{P as je}from"./Paginate-_mtRUOjJ.js";import{P as Le}from"./PaginationFooter-8MfyrbrN.js";import{T as ne,a as W,b as we,c as De}from"./TableRow-WjckZ-OR.js";import{T as Te}from"./TableContentWrapper-SbYWRZM5.js";import{T as Se}from"./TableSortCell-N7Qxf5YK.js";import{R as Ie}from"./RemoveDeviceDialog-G6Uq1iP4.js";import{I as Ne}from"./InlineMenuAction-1MvHCfFL.js";import{T as Ce}from"./TableHead-aAnFvqns.js";import"./splitAt-OlbwoBj3.js";import"./TableRowEmpty-HXunljlo.js";import"./TableRowError-VT_K71YW.js";import"./TableRowLoading-enpzcj9B.js";import"./Skeleton-Ei33_jCb.js";const Fe=u=>{const{helperText:l,onClose:d,open:f}=u,{id:n}=G(),{enqueueSnackbar:h}=U(),{data:N}=K(),{data:y}=Y(),C=!!(y!=null&&y.restricted),{data:L}=V(Number(n)),{data:g,isLoading:v}=z(Number(n)),F=Q(),{isLoading:S,mutateAsync:w}=J(Number(n)),[p,s]=i.useState([]),[x,j]=i.useState(void 0),m=async()=>{let o;const t=[];(await Promise.allSettled(p.map(a=>w({id:a.id,type:"linode"})))).forEach((a,r)=>{const b=p[r].label,I=p[r].id;if(a.status==="fulfilled"){h(`Linode ${b} successfully added.`,{variant:"success"});return}t==null||t.push(p[r]);const E=H(a.reason,`Failed to add Linode ${b} (ID ${I}).`)[0].reason;o||(o=E)}),j(o),s(t),o||d()},A=()=>{let o=Z(x||"",{allowedAttributes:{},allowedTags:[]});const t=/Linode (.+?) \(ID ([^\)]+)\)/i.exec(o),c=o.match(/open a support ticket\./i);if(c&&(o=o.replace(/open a support ticket\./i,"")),t){const[,a,r]=t,b=o.substring(0,o.indexOf(`Linode ${a}`)),I=o.substring(o.indexOf(`(ID ${r})`)+`(ID ${r})`.length);return e.jsxs(O,{sx:{fontFamily:F.font.bold,fontSize:"1rem",lineHeight:"20px"},variant:"error",children:[b,e.jsx(q,{to:`/linodes/${r}`,children:a}),I,c?e.jsxs(e.Fragment,{children:[e.jsx(ee,{text:"open a Support ticket"}),"."]}):null]})}else return e.jsx(O,{text:x,variant:"error"})},R=(g==null?void 0:g.filter(o=>o.entity.type==="linode").map(o=>o.entity.id))??[],P=C?ae(N,"linode","read_only"):[],k=o=>![...R,...P].includes(o.id),{data:D,error:T,isLoading:$}=re();i.useEffect(()=>{T&&j("Could not load Linode Data")},[T]);const B=D==null?void 0:D.filter(k);return e.jsx(oe,{onClose:()=>{s([]),j(void 0),d()},open:f,title:`Add Linode to Firewall: ${L==null?void 0:L.label}`,children:e.jsxs("form",{onSubmit:o=>{o.preventDefault(),m()},children:[x?A():null,e.jsx(te,{"data-testid":"add-linode-autocomplete",disabled:v||$,helperText:l,label:"Linodes",loading:v||$,multiple:!0,noOptionsText:"No Linodes available to add",onChange:(o,t)=>s(t),options:B||[],value:p}),e.jsx(X,{primaryButtonProps:{disabled:p.length===0,label:"Add",loading:S,onClick:m},secondaryButtonProps:{label:"Cancel",onClick:d}})]})})},$e=u=>{const{helperText:l,onClose:d,open:f}=u,{enqueueSnackbar:n}=U(),{id:h}=G(),{data:N}=K(),{data:y}=Y(),C=!!(y!=null&&y.restricted),L=ie(),{data:g}=V(Number(h)),{data:v,isLoading:F}=z(Number(h)),S=Q(),{isLoading:w,mutateAsync:p}=J(Number(h)),[s,x]=i.useState([]),[j,m]=i.useState(void 0),A=async()=>{let t;const c=[];(await Promise.allSettled(s.map(r=>p({id:r.id,type:"nodebalancer"})))).forEach((r,b)=>{const I=s[b].label,E=s[b].id;if(r.status==="fulfilled"){n(`NodeBalancer ${I} successfully added`,{variant:"success"}),L.invalidateQueries([ce,"nodebalancer",E,"firewalls"]);return}c.push(s[b]);const se=H(r.reason,`Failed to add NodeBalancer ${I} (ID ${E}).`)[0].reason;t||(t=se)}),m(t),x(c),t||d()},R=()=>{let t=Z(j||"",{allowedAttributes:{},allowedTags:[]});const c=/NodeBalancer (.+?) \(ID ([^\)]+)\)/i.exec(t),a=t.match(/open a support ticket\./i);if(a&&(t=t.replace(/open a support ticket\./i,"")),c){const[,r,b]=c,I=t.substring(0,t.indexOf(`NodeBalancer ${r}`)),E=t.substring(t.indexOf(`(ID ${b})`)+`(ID ${b})`.length);return e.jsxs(O,{sx:{fontFamily:S.font.bold,fontSize:"1rem",lineHeight:"20px"},variant:"error",children:[I,e.jsx(q,{to:`/nodebalancers/${b}`,children:r}),E,a?e.jsxs(e.Fragment,{children:[e.jsx(ee,{text:"open a Support ticket"}),"."]}):null]})}else return e.jsx(O,{text:j,variant:"error"})},P=(v==null?void 0:v.filter(t=>t.entity.type==="nodebalancer").map(t=>t.entity.id))??[],k=C?ae(N,"nodebalancer","read_only"):[],D=t=>![...P,...k].includes(t.id),{data:T,error:$,isLoading:B}=le();i.useEffect(()=>{$&&m("Could not load NodeBalancer Data")},[$]);const o=T==null?void 0:T.filter(D);return e.jsxs(oe,{onClose:()=>{x([]),m(void 0),d()},open:f,title:`Add Nodebalancer to Firewall: ${g==null?void 0:g.label}`,children:[e.jsxs(O,{variant:"warning",children:["Only the Firewall's inbound rules apply to NodeBalancers. Any existing outbound rules won't be applied."," ",e.jsx(q,{to:de,children:"Learn more"}),"."]}),e.jsxs("form",{onSubmit:t=>{t.preventDefault(),A()},children:[j?R():null,e.jsx(te,{onChange:(t,c)=>x(c),"data-testid":"add-nodebalancer-autocomplete",disabled:F||B,helperText:l,label:"NodeBalancers",loading:F||B,multiple:!0,noOptionsText:"No NodeBalancers available to add",options:o||[],value:s}),e.jsx(X,{primaryButtonProps:{disabled:s.length===0,label:"Add",loading:w,onClick:A},secondaryButtonProps:{label:"Cancel",onClick:d}})]})]})},Ae=i.memo(u=>{const{deviceID:l,deviceLabel:d,disabled:f,triggerRemoveDevice:n}=u;return e.jsx(Ne,{actionText:"Remove",disabled:f,onClick:()=>n(l,d)},"Remove")}),ke=i.memo(u=>{const{deviceEntityID:l,deviceID:d,deviceLabel:f,deviceType:n}=u;return e.jsxs(ne,{ariaLabel:`Device ${f}`,"data-testid":`firewall-device-row-${d}`,children:[e.jsx(W,{children:e.jsx(ue,{tabIndex:0,to:`/${n}s/${l}/networking`,children:f})}),e.jsx(W,{actionCell:!0,children:e.jsx(Ae,{...u})})]})}),Be=i.memo(u=>{const{deviceType:l,devices:d,disabled:f,error:n,loading:h,triggerRemoveDevice:N}=u,y=n?H(n,`Unable to retrieve ${_[l]}s`):void 0,C=`List of ${_[l]}s attached to this firewall`;return e.jsx(ve,{data:d,order:"asc",orderBy:"entity:label",children:({data:L,handleOrderChange:g,order:v,orderBy:F})=>e.jsx(je,{data:L,children:({count:S,data:w,handlePageChange:p,handlePageSizeChange:s,page:x,pageSize:j})=>e.jsxs(e.Fragment,{children:[e.jsxs(we,{"aria-label":C,children:[e.jsx(Ce,{children:e.jsx(ne,{children:e.jsx(Se,{active:F==="entity:label",colSpan:2,"data-qa-firewall-device-linode-header":!0,direction:v,handleClick:g,label:"entity:label",children:_[l]})})}),e.jsx(De,{children:e.jsx(Te,{error:y,length:w.length,loading:h,children:w.map(m=>e.jsx(ke,{deviceEntityID:m.entity.id,deviceID:m.id,deviceLabel:m.entity.label,deviceType:l,disabled:f,triggerRemoveDevice:N},`device-row-${m.id}`))})})]}),e.jsx(Le,{count:S,eventCategory:"Firewall Devices Table",handlePageChange:p,handleSizeChange:s,page:x,pageSize:j})]})})})}),_={linode:"Linode",nodebalancer:"NodeBalancer"},tt=i.memo(u=>{const{disabled:l,firewallId:d,firewallLabel:f,type:n}=u,{data:h,error:N,isLoading:y}=z(d),C=Q(),L=pe(),g=me(),v=be(),S=fe().firewallNodebalancer?"services":"Linodes",w=`Assign one or more ${S} to this firewall. You can add ${S} later if you want to customize your rules first.`;i.useEffect(()=>{v.pathname.endsWith("add")&&D(!0)},[v.pathname]);const p=(h==null?void 0:h.filter(a=>a.entity.type===n))||[],[s,x]=i.useState([]);i.useEffect(()=>{x(p)},[h]);const[j,m]=i.useState(!1),[A,R]=i.useState(-1),P=s==null?void 0:s.find(a=>a.id===A),[k,D]=i.useState(!1),T=()=>{D(!1),L.push(g.url)},$=()=>{D(!0),L.push(g.url+"/add")},[B,o]=i.useState(""),t=a=>{o(a);const r=p==null?void 0:p.filter(b=>b.entity.label.toLowerCase().includes(a.toLowerCase()));x(r??[])},c=_[n];return e.jsxs(e.Fragment,{children:[l?e.jsx(O,{text:"You don't have permissions to modify this Firewall. Please contact an account administrator for details.",important:!0,variant:"error"}):null,e.jsxs(M,{container:!0,direction:"column",sx:{marginBottom:C.spacing(2)},children:[e.jsxs(Ee,{children:["The following ",c,"s have been assigned to this Firewall. A ",c," can only be assigned to a single Firewall."]}),e.jsxs(M,{alignItems:"center",container:!0,direction:"row",justifyContent:"space-between",children:[e.jsx(M,{sx:{width:"30%"},children:e.jsx(ye,{onSearch:a=>{t(a)},debounceTime:250,expand:!0,hideLabel:!0,label:"",placeholder:`Search ${c}s`,value:B})}),e.jsx(M,{children:e.jsxs(he,{buttonType:"primary","data-testid":"add-device-button",disabled:l,onClick:$,children:["Add ",c,"s to Firewall"]})})]})]}),e.jsx(Be,{triggerRemoveDevice:a=>{R(a),m(!0)},deviceType:n,devices:s??[],disabled:l,error:N??void 0,loading:y}),n==="linode"?e.jsx(Fe,{helperText:w,onClose:T,open:k}):e.jsx($e,{helperText:w,onClose:T,open:k}),e.jsx(Ie,{device:P,firewallId:d,firewallLabel:f,onClose:()=>m(!1),onService:void 0,open:j})]})}),Ee=ge(xe,{label:"StyledTypography"})(({theme:u})=>({fontSize:"0.875rem",marginBottom:u.spacing(2),marginTop:u.spacing()}));export{tt as FirewallDeviceLanding,_ as formattedTypes};
