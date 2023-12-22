import{j as e,af as J,ag as Y,iW as K,T as y,ad as U,bB as g,a0 as S,$ as B,c3 as H,d0 as R,B as X,bJ as Z,bN as D,W as b,b as ee,r as E,C as te,a4 as ae,bC as le,f as oe}from"./index-cVx9Zqte.js";import{P as re}from"./PaginationFooter-8MfyrbrN.js";import{T as q,a as m,b as se,c as ne}from"./TableRow-WjckZ-OR.js";import{T as ie}from"./TableRowEmpty-HXunljlo.js";import{T as ce}from"./TableRowError-VT_K71YW.js";import{T as w}from"./TableSortCell-N7Qxf5YK.js";import{u as he}from"./useOrder-iGt70Yxe.js";import{u as de}from"./usePagination-oVzoT3VV.js";import{a as pe,b as ue,c as me,d as xe}from"./serviceTargets-QRnOufKR.js";import{u as ge,y as be}from"./formik.esm-XrBweJub.js";import{A as M,S as je}from"./Autocomplete-vchTD_Ph.js";import{D as Te}from"./Drawer-Zv-UzsLT.js";import{F as ve}from"./FormLabel-FY4umEKC.js";import{R as W}from"./Radio-9QvviwDe.js";import{R as Ce}from"./RadioGroup-2qEaOjEa.js";import{T as fe}from"./Toggle-GPvvuUvh.js";import{g as ke}from"./formikErrorUtils-k3dWKVdg.js";import{s as ye}from"./scrollErrorIntoView-6n4Cku1Y.js";import{C as Se}from"./CertificateSelect-vTDVPfvx.js";import{i as _e,S as p,p as $,a as G,E as Pe,A as De}from"./EndpointTable-QH5DIRiR.js";import{A as Ee}from"./ActionMenu-LQcZWhDC.js";import{b as we}from"./certificates-5KyUA-_n.js";import{T as Ae}from"./TableHead-aAnFvqns.js";import"./OrderBy-9siuTGWJ.js";import"./splitAt-OlbwoBj3.js";import"./loadbalancers-nrmT-zr6.js";import"./vpcs-bwb8r1IC.js";import"./stackscripts-siJ8mX0s.js";const Fe=r=>{var c;const{loadbalancerId:s,onClose:u,open:n,serviceTarget:o}=r,{error:i,isLoading:x,mutateAsync:C}=pe(s,(o==null?void 0:o.id)??-1),j=async()=>{await C(),u()};return e.jsx(J,{actions:e.jsx(Y,{primaryButtonProps:{label:"Delete",loading:x,onClick:j},secondaryButtonProps:{label:"Cancel",onClick:u}}),error:(c=i==null?void 0:i[0])==null?void 0:c.reason,onClose:u,open:n,title:`Delete Service Target ${o==null?void 0:o.label}?`,children:"Are you sure you want to delete this Service Target?"})},Ie=r=>({...r,endpoints:r.endpoints.map(s=>({...s,host:s.host?s.host:null})),healthcheck:{...r.healthcheck,host:r.healthcheck.host?r.healthcheck.host:null,path:r.healthcheck.path?r.healthcheck.path:null}}),Be=r=>{var _,h,L,O,V,z,N;const{loadbalancerId:s,onClose:u,open:n,serviceTarget:o}=r,i=o!==void 0,{error:x,mutateAsync:C,reset:j}=ue(s),{error:c,mutateAsync:f,reset:T}=me(s,(o==null?void 0:o.id)??-1),t=ge({enableReinitialize:!0,initialValues:i?o:_e,async onSubmit(a){const l=Ie(a);try{i?await f(l):await C(l),k()}catch(P){t.setErrors(ke(P)),ye()}},validate(a){try{return K.validateSync(a,{abortEarly:!1}),{}}catch(l){return be(l)}},validateOnBlur:!1,validateOnChange:!c||!x}),k=()=>{t.resetForm(),j(),T(),u()},A=a=>{t.setFieldValue("endpoints",[...t.values.endpoints,a])},F=a=>{t.setFieldValue("endpoints",t.values.endpoints.filter((l,P)=>P!==a))},d=x==null?void 0:x.filter(a=>{var l;return!!(!a.field||(l=a.field)!=null&&l.startsWith("endpoints"))}).map(a=>a.reason).join(", "),v=c==null?void 0:c.filter(a=>{var l;return!!(!a.field||(l=a.field)!=null&&l.startsWith("endpoints"))}).map(a=>a.reason).join(", "),I=i?`Edit ${o.label}`:"Add a Service Target";return e.jsxs(Te,{onClose:k,open:n,title:I,children:[!i&&e.jsx(y,{children:p.Description}),e.jsxs("form",{onSubmit:t.handleSubmit,children:[d&&e.jsx(U,{spacingBottom:0,spacingTop:12,text:d,variant:"error"}),v&&e.jsx(U,{spacingBottom:0,spacingTop:12,text:v,variant:"error"}),e.jsx(g,{errorText:t.errors.label,label:"Service Target Label",name:"label",onChange:t.handleChange,value:t.values.label}),e.jsx(M,{textFieldProps:{labelTooltipText:p.Tooltips.Protocol},value:$.find(a=>a.value===t.values.protocol),disableClearable:!0,errorText:t.errors.protocol,label:"Service Target Protocol",onChange:(a,{value:l})=>t.setFieldValue("protocol",l),options:$}),e.jsx(M,{onChange:(a,l)=>t.setFieldValue("load_balancing_policy",l.value),renderOption:(a,l,P)=>e.jsxs("li",{...a,children:[e.jsxs(S,{flexGrow:1,children:[e.jsx(y,{color:"inherit",children:e.jsx("b",{children:l.label})}),e.jsx(y,{color:"inherit",children:l.description})]}),e.jsx(je,{visible:P.selected})]}),textFieldProps:{labelTooltipText:p.Tooltips.Algorithm},value:G.find(a=>a.value===t.values.load_balancing_policy),disableClearable:!0,errorText:t.errors.load_balancing_policy,label:"Algorithm",options:G}),e.jsx(B,{spacingBottom:24,spacingTop:24}),e.jsx(y,{sx:{marginBottom:2},variant:"h3",children:"Endpoints"}),e.jsx(Pe,{endpoints:t.values.endpoints,onRemove:F}),e.jsx(De,{onAdd:A}),t.values.protocol==="https"&&e.jsxs(e.Fragment,{children:[e.jsx(B,{spacingBottom:12,spacingTop:24}),e.jsxs(S,{alignItems:"center",direction:"row",children:[e.jsx(y,{variant:"h3",children:"Service Target CA Certificate"}),e.jsx(H,{status:"help",text:p.Tooltips.Certificate})]}),e.jsx(Se,{onChange:a=>t.setFieldValue("certificate_id",(a==null?void 0:a.id)??null),errorText:t.errors.certificate_id,filter:{type:"ca"},loadbalancerId:s,value:t.values.certificate_id})]}),e.jsx(B,{spacingBottom:12,spacingTop:24}),e.jsxs(S,{alignItems:"center",direction:"row",children:[e.jsx(y,{variant:"h3",children:"Health Checks"}),e.jsx(H,{status:"help",text:p.Tooltips.Healthcheck.Description})]}),e.jsx(R,{control:e.jsx(fe,{onChange:(a,l)=>t.setFieldValue("healthcheck.interval",l?10:0),checked:t.values.healthcheck.interval!==0}),label:"Use Health Checks"}),t.values.healthcheck.interval!==0&&e.jsxs(X,{"data-qa-healthcheck-options":!0,children:[e.jsxs(Ce,{onChange:(a,l)=>t.setFieldValue("healthcheck.protocol",l),sx:{marginBottom:"0px !important"},value:t.values.healthcheck.protocol,children:[e.jsxs(ve,{children:["Protocol",e.jsx(H,{status:"help",sxTooltipIcon:{marginLeft:1.5,padding:0},text:p.Tooltips.Healthcheck.Protocol})]}),e.jsx(R,{control:e.jsx(W,{}),label:"HTTP",value:"http"}),e.jsx(R,{control:e.jsx(W,{}),label:"TCP",value:"tcp"}),e.jsx(Z,{children:(_=t.errors.healthcheck)==null?void 0:_.protocol})]}),e.jsxs(S,{direction:"row",spacing:2,children:[e.jsx(g,{InputProps:{endAdornment:e.jsx(D,{position:"start",children:"seconds"})},labelTooltipText:p.Tooltips.Healthcheck.Interval,errorText:(h=t.errors.healthcheck)==null?void 0:h.interval,label:"Interval",name:"healthcheck.interval",onChange:t.handleChange,type:"number",value:t.values.healthcheck.interval}),e.jsx(g,{InputProps:{endAdornment:e.jsx(D,{position:"start",children:"checks"})},labelTooltipText:p.Tooltips.Healthcheck.Healthy,errorText:(L=t.errors.healthcheck)==null?void 0:L.healthy_threshold,label:"Healthy Threshold",name:"healthcheck.healthy_threshold",onChange:t.handleChange,type:"number",value:t.values.healthcheck.healthy_threshold})]}),e.jsxs(S,{direction:"row",spacing:2,children:[e.jsx(g,{InputProps:{endAdornment:e.jsx(D,{position:"start",children:"seconds"})},labelTooltipText:p.Tooltips.Healthcheck.Timeout,errorText:(O=t.errors.healthcheck)==null?void 0:O.timeout,label:"Timeout",name:"healthcheck.timeout",onChange:t.handleChange,type:"number",value:t.values.healthcheck.timeout}),e.jsx(g,{InputProps:{endAdornment:e.jsx(D,{position:"start",children:"checks"})},labelTooltipText:p.Tooltips.Healthcheck.Unhealthy,errorText:(V=t.errors.healthcheck)==null?void 0:V.unhealthy_threshold,label:"Unhealthy Threshold",name:"healthcheck.unhealthy_threshold",onChange:t.handleChange,type:"number",value:t.values.healthcheck.unhealthy_threshold})]}),t.values.healthcheck.protocol==="http"&&e.jsxs(e.Fragment,{children:[e.jsx(g,{labelTooltipText:p.Tooltips.Healthcheck.Path,errorText:(z=t.errors.healthcheck)==null?void 0:z.path,label:"Health Check Path",name:"healthcheck.path",onChange:t.handleChange,optional:!0,value:t.values.healthcheck.path}),e.jsx(g,{labelTooltipText:p.Tooltips.Healthcheck.Host,errorText:(N=t.errors.healthcheck)==null?void 0:N.host,label:"Health Check Host",name:"healthcheck.host",onChange:t.handleChange,optional:!0,value:t.values.healthcheck.host})]})]}),e.jsx(Y,{primaryButtonProps:{label:`${i?"Save":"Create"} Service Target`,loading:t.isSubmitting,type:"submit"},secondaryButtonProps:{label:"Cancel",onClick:k}})]})]})},He=r=>{const{onDelete:s,onEdit:u,serviceTarget:n,loadbalancerId:o}=r,{data:i}=we(o,n.certificate_id??-1,n.certificate_id!==null);return e.jsxs(q,{children:[e.jsx(m,{children:n.label}),e.jsx(m,{children:n.protocol.toUpperCase()}),e.jsx(b,{smDown:!0,children:e.jsx(m,{sx:{textTransform:"capitalize"},children:n.load_balancing_policy.replace("_"," ")})}),e.jsx(b,{mdDown:!0,children:e.jsx(m,{children:(i==null?void 0:i.label)??n.certificate_id??"None"})}),e.jsx(b,{lgDown:!0,children:e.jsx(m,{children:n.healthcheck.interval!==0?"Yes":"No"})}),e.jsx(b,{smDown:!0,children:e.jsx(m,{children:n.id})}),e.jsx(m,{actionCell:!0,children:e.jsx(Ee,{actionsList:[{onClick:u,title:"Edit"},{onClick:s,title:"Delete"}],ariaLabel:`Action Menu for service target ${n.label}`})})]},n.label)},Q="loadbalancer-service-targets",ht=()=>{var _;const{loadbalancerId:r}=ee(),[s,u]=E.useState(),[n,o]=E.useState(!1),[i,x]=E.useState(!1),[C,j]=E.useState(),c=de(1,Q),{handleOrderChange:f,order:T,orderBy:t}=he({order:"desc",orderBy:"label"},`${Q}-order`),k={"+order":T,"+order_by":t},A=h=>{o(!0),j(h)},F=h=>{x(!0),j(h)};s&&(k.label={"+contains":s});const{data:d,error:v,isLoading:I}=xe(Number(r),{page:c.page,page_size:c.pageSize},k);return I?e.jsx(te,{}):e.jsxs(e.Fragment,{children:[e.jsxs(S,{direction:"row",flexWrap:"wrap",gap:2,justifyContent:"space-between",mb:2,mt:1.5,children:[e.jsx(g,{InputProps:{endAdornment:s&&e.jsx(D,{position:"end",children:e.jsx(ae,{"aria-label":"Clear",onClick:()=>u(""),size:"small",sx:{padding:"unset"},children:e.jsx(le,{sx:{color:"#aaa !important"}})})})},hideLabel:!0,label:"Filter",onChange:h=>u(h.target.value),placeholder:"Filter",style:{minWidth:"320px"},value:s}),e.jsx(oe,{buttonType:"primary",onClick:()=>o(!0),children:"Create Service Target"})]}),e.jsxs(se,{children:[e.jsx(Ae,{children:e.jsxs(q,{children:[e.jsx(w,{active:t==="label",direction:T,handleClick:f,label:"label",children:"Label"}),e.jsx(w,{active:t==="protocol",direction:T,handleClick:f,label:"protocol",children:"Protocol"}),e.jsx(b,{smDown:!0,children:e.jsx(w,{active:t==="load_balancing_policy",direction:T,handleClick:f,label:"load_balancing_policy",children:"Algorithm"})}),e.jsx(b,{mdDown:!0,children:e.jsx(m,{children:"Certificate"})}),e.jsx(b,{lgDown:!0,children:e.jsx(m,{children:"Health Checks"})}),e.jsx(b,{smDown:!0,children:e.jsx(w,{active:t==="id",direction:T,handleClick:f,label:"id",children:"ID"})}),e.jsx(m,{})]})}),e.jsxs(ne,{children:[v&&e.jsx(ce,{colSpan:8,message:(_=v==null?void 0:v[0])==null?void 0:_.reason}),(d==null?void 0:d.results)===0&&e.jsx(ie,{colSpan:8}),d==null?void 0:d.data.map(h=>e.jsx(He,{loadbalancerId:Number(r),onDelete:()=>F(h),onEdit:()=>A(h),serviceTarget:h},h.id))]})]}),e.jsx(re,{count:(d==null?void 0:d.results)??0,handlePageChange:c.handlePageChange,handleSizeChange:c.handlePageSizeChange,page:c.page,pageSize:c.pageSize}),e.jsx(Be,{onClose:()=>{o(!1),j(void 0)},loadbalancerId:Number(r),open:n,serviceTarget:C}),e.jsx(Fe,{loadbalancerId:Number(r),onClose:()=>x(!1),open:i,serviceTarget:C})]})};export{ht as LoadBalancerServiceTargets};