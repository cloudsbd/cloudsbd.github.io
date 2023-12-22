import{j as e,k0 as xe,ad as he,bB as A,bI as B,G as m,bN as je,ag as K,s as g,V as ee,da as te,ao as fe,aX as Te,J as Me,Z as Se,E as De,an as Q,C as ve,aW as Ce,bD as we,cx as oe,T as H,r as j,Q as Ie}from"./index-cVx9Zqte.js";import{A as ke}from"./AddNewLink-EuioEAZT.js";import{D as Ee}from"./DeletionDialog-zxtOY8RE.js";import{O as Ae}from"./OrderBy-9siuTGWJ.js";import{P as Le}from"./Paginate-_mtRUOjJ.js";import{P as qe}from"./PaginationFooter-8MfyrbrN.js";import{T as re,a as L,b as Re,c as Fe}from"./TableRow-WjckZ-OR.js";import{T as U}from"./TableSortCell-N7Qxf5YK.js";import{u as Oe}from"./useDialog-8AOoxx2F.js";import{S as ne,d as ae,e as Pe,f as Ge,g as _e,h as Ne,i as $e,b as Be,j as He,k as Ue,l as Qe}from"./ManagedLanding-E-HgEkdO.js";import{h as Ve,a as ze}from"./formikErrorUtils-k3dWKVdg.js";import{F as Ye}from"./formik.esm-XrBweJub.js";import{p as Ze}from"./pickBy-Q_SibDEG.js";import{D as se}from"./Drawer-Zv-UzsLT.js";import{S as ie}from"./monitor-ok-3EdbH5qi.js";import{D as le}from"./DateTimeDisplay-Ll7y9Gvy.js";import{T as Je}from"./TableRowEmpty-HXunljlo.js";import{T as We}from"./TableRowError-VT_K71YW.js";import{T as Xe}from"./TableRowLoading-enpzcj9B.js";import{s as Ke}from"./splitAt-OlbwoBj3.js";import{A as et}from"./ActionMenu-LQcZWhDC.js";import{I as tt}from"./InlineMenuAction-1MvHCfFL.js";import{S as ot}from"./pending-zKBfbKNE.js";import{T as rt}from"./TableHead-aAnFvqns.js";import"./TypeToConfirm-c9PkDm3L.js";import"./LandingHeader--0FiA91-.js";import"./NavTabs-5r6SmvRp.js";import"./SafeTabPanel-mYwDHsH9.js";import"./TabList-Vcpmm6u6.js";import"./TabLinkList-d9SkE5Nv.js";import"./ProductInformationBanner-F-a7gVWs.js";import"./LineGraph-AxRgySpC.js";import"./utilities-JllwdoOg.js";import"./visuallyHidden-DVicuktI.js";import"./TabbedPanel-7MRGLWE6.js";import"./SupportTicketDialog-OsiQ7_Xj.js";import"./scrollErrorIntoView-6n4Cku1Y.js";import"./TabbedReply-6vlVk1ew.js";import"./remove-2JFCky0p.js";import"./Skeleton-Ei33_jCb.js";const I={CREATING:"create",EDITING:"edit"},nt={[I.CREATING]:"Add Monitor",[I.EDITING]:"Edit Monitor"},Y=[{label:"URL",value:"url"},{label:"TCP",value:"tcp"}],at=t=>t.map(r=>({label:r.label,value:r.id})),st=t=>t.map(r=>({label:r,value:r})),O={body:"Response must contain this string or an alert will be triggered.",consultation_group:"If we need help along the way, we'll contact someone from this group.",credentials:"Any additional credentials required for incident response or routine maintenance.",url:"The URL to request."},Z=(t,r)=>r.find(o=>o.value===t),it=(t,r)=>r.filter(o=>t.includes(o.value)),J={address:"",body:"",consultation_group:"",credentials:[],label:"",notes:"",service_type:"url",timeout:10},lt=t=>{const{credentials:r,groups:o,mode:n,monitor:a,onClose:i,onSubmit:p,open:f}=t,d=at(r),x=st(o),S=Ze((l,c)=>l!==null&&Object.keys(J).includes(c),a),v={...J,...S};return e.jsx(se,{onClose:i,open:f,title:nt[n],children:e.jsx(Ye,{initialValues:v,onSubmit:p,validateOnBlur:!1,validateOnChange:!1,validationSchema:xe,children:({errors:l,handleBlur:c,handleChange:T,handleSubmit:C,isSubmitting:k,setFieldValue:b,status:M,values:y})=>e.jsxs(e.Fragment,{children:[M&&e.jsx(he,{"data-qa-error":!0,text:M.generalError,variant:"error"},M),e.jsxs("form",{onSubmit:C,children:[e.jsx(A,{"data-qa-add-label":!0,error:!!l.label,errorText:l.label,label:"Monitor Label",name:"label",onBlur:c,onChange:T,required:n===I.CREATING,value:y.label}),e.jsx(B,{onChange:h=>b("consultation_group",h===null?"":h.value),textFieldProps:{tooltipText:O.consultation_group},value:Z(y.consultation_group||"",x),"data-qa-add-consultation-group":!0,errorText:l.consultation_group,isClearable:!0,label:"Contact Group",name:"consultation_group",onBlur:c,options:x,placeholder:"Select a group..."}),e.jsxs(m,{container:!0,spacing:2,children:[e.jsx(m,{sm:6,xs:12,children:e.jsx(B,{onChange:h=>b("service_type",h.value),textFieldProps:{required:n===I.CREATING},"data-qa-add-service-type":!0,errorText:l.service_type,isClearable:!1,label:"Monitor Type",name:"service_type",onBlur:c,options:Y,value:Z(y.service_type,Y)})}),e.jsx(m,{sm:6,xs:12,children:e.jsx(A,{InputProps:{endAdornment:e.jsx(je,{position:"end",children:"seconds"})},"data-qa-add-timeout":!0,error:!!l.timeout,errorText:l.timeout,label:"Response Timeout",name:"timeout",onBlur:c,onChange:T,required:n===I.CREATING,type:"number",value:y.timeout})})]}),e.jsx(A,{"data-qa-add-address":!0,error:!!l.address,errorText:l.address,label:"URL",name:"address",onBlur:c,onChange:T,required:n===I.CREATING,tooltipText:O.url,value:y.address}),e.jsx(A,{"data-qa-add-body":!0,error:!!l.body,errorText:l.body,label:"Response Body Match",name:"body",onBlur:c,onChange:T,tooltipText:O.body,value:y.body}),e.jsx(A,{"data-qa-add-notes":!0,error:!!l.notes,errorText:l.notes,label:"Instructions / Notes",multiline:!0,name:"notes",onBlur:c,onChange:T,value:y.notes}),e.jsx(B,{onChange:h=>{b("credentials",h.map(E=>E.value))},textFieldProps:{tooltipText:O.credentials},value:it(y.credentials||[],d),"data-qa-add-credentials":!0,errorText:l.credentials,isClearable:!1,isMulti:!0,label:"Credentials",name:"credentials",onBlur:c,options:d,placeholder:"None Required"}),e.jsx(K,{primaryButtonProps:{"data-testid":"submit",label:n==="create"?"Add Monitor":"Save Changes",loading:k,onClick:()=>C()},secondaryButtonProps:{"data-testid":"cancel",label:"Cancel",onClick:i}})]})]})})})},ct=g(m,{label:"StyledGrid"})(({theme:t})=>({marginTop:t.spacing(2)})),dt=g(ee,{label:"StyledLink"})(({theme:t})=>({"&:hover":{color:t.color.red},marginLeft:t.spacing(1),transition:"color 225ms ease-in-out"})),ut=g(le,{label:"StyledDateTimeDisplay"})(({theme:t})=>({color:t.color.red})),W=t=>{const{day:r,icon:o,ticketUrl:n}=t,a=n?ut:le;return e.jsxs(ct,{alignItems:"center",container:!0,direction:"row",spacing:2,children:[e.jsx(m,{children:o}),e.jsx(m,{children:e.jsx(a,{displayTime:!1,value:r})}),n&&e.jsx(te,{"data-qa-open-ticket-tooltip":!0,enterTouchDelay:0,leaveTouchDelay:5e3,placement:"top",title:"See the ticket associated with this incident",children:e.jsx(dt,{to:n,children:e.jsx(ae,{})})})]})},X={height:30,width:30},mt=t=>{const{day:r,issues:o}=t,n=o.map(a=>a.entity.id);return o.length===0?e.jsx(W,{day:r,icon:e.jsx(ie,{...X})}):e.jsx(W,{day:r,icon:e.jsx(ne,{...X}),ticketUrl:`/support/tickets/${n[0]}`})},pt=10,bt=(t,r,o)=>Se(r.created).setZone(t).hasSame(o,"day"),yt=(t,r)=>{const o=[];for(let n=0;n<pt;n++){const a=Me.local().minus({days:n}).setZone(t),i=r.filter(p=>bt(t,p,a));o.push({day:a.toISO(),issues:i})}return o},gt=t=>{const{issues:r}=t,{data:o}=fe(),n=Te(o==null?void 0:o.timezone),a=yt(n,r);return e.jsx(e.Fragment,{children:a.map((i,p)=>e.jsx(mt,{day:i.day,issues:i.issues},`issue-day-${p}`))})},xt=t=>{const{error:r,issues:o,loading:n,monitorLabel:a,onClose:i,open:p}=t;return e.jsxs(se,{onClose:i,open:p,title:`Issue History: ${a}`,children:[ht(o,n,r),e.jsx(K,{primaryButtonProps:{"data-testid":"close",label:"Close",onClick:()=>i()}})]})},ht=(t,r,o)=>o?e.jsx(De,{errorText:Q(o,"Error loading your issue history")[0].reason}):r||t===void 0?e.jsx(ve,{}):e.jsx(gt,{issues:t}),jt=g(m,{label:"SyledGrid"})(({theme:t})=>({marginBottom:5,[t.breakpoints.down("md")]:{marginRight:t.spacing()}})),ft=g(re,{label:"SyledTableRow"})(({theme:t})=>({"& > th":{fontFamily:t.font.bold}})),Tt=g(U,{label:"SyledTableSortCell"})(({theme:t})=>({...t.applyTableHeaderStyles,paddingLeft:"62px !important"})),Mt=t=>{const r=Ce(),o=we(r.breakpoints.down("md")),{enqueueSnackbar:n}=oe(),{label:a,monitorID:i,openDialog:p,openHistoryDrawer:f,openMonitorDrawer:d,status:x}=t,{mutateAsync:S}=Pe(i),{mutateAsync:v}=Ge(i),l=(b,M)=>{const y=Q(M,b);n(y[0].reason,{variant:"error"})},c=[{onClick:()=>{f(i,a)},title:"View Issue History"},{onClick:()=>{d(i,"edit")},title:"Edit"},x==="disabled"?{onClick:()=>{S().then(()=>{n("Monitor enabled successfully.",{variant:"success"})}).catch(b=>{l("Error enabling this Service Monitor.",b)})},title:"Enable"}:{onClick:()=>{v().then(()=>{n("Monitor disabled successfully.",{variant:"success"})}).catch(b=>{l("Error disabling this Service Monitor.",b)})},title:"Disable"},{onClick:()=>{p(i,a)},title:"Delete"}],T=o?0:2,[C,k]=Ke(T,c);return e.jsxs(e.Fragment,{children:[!o&&C.map(b=>e.jsx(tt,{actionText:b.title,onClick:b.onClick},b.title)),e.jsx(et,{actionsList:k,ariaLabel:`Action menu for Monitor ${t.label}`})]})},St=g(re,{label:"StyledTableRow"})({"&:before":{display:"none"}}),Dt=g(L,{label:"StyledTableCell"})(({theme:t})=>({fontFamily:t.font.bold,width:"30%"})),vt=g(m,{label:"StyledGrid"})(({theme:t})=>({"&:hover":{color:t.color.red},alignItems:"center",display:"flex",transition:"color 225ms ease-in-out"})),Ct=g(ee,{label:"StyledLink"})(({theme:t})=>({"&:hover":{color:t.color.red},alignItems:"center",transition:"color 225ms ease-in-out"})),wt=g(H,{label:"StyledTypography"})(({theme:t})=>({color:t.color.red})),It=t=>j.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:64,height:64,viewBox:"0 0 64 64",...t},j.createElement("g",{fill:"none",fillRule:"evenodd"},j.createElement("circle",{cx:32,cy:32,r:32,fill:"#E3E5E8"}),j.createElement("rect",{width:4,height:35,x:16,y:-14.501,fill:"#FFF",rx:2,transform:"rotate(90 10.5 24.499)"}))),kt={disabled:It,ok:ie,pending:ot,problem:ne},Et={disabled:"Disabled",ok:"Verified",pending:"Pending",problem:"Failed"},At=t=>{const{issues:r,monitor:o,openDialog:n,openHistoryDrawer:a,openMonitorDrawer:i}=t,p=kt[o.status],f=r.filter(x=>!x.dateClosed),d=o.status==="problem"?wt:H;return e.jsxs(St,{ariaLabel:`Monitor ${o.label}`,"data-qa-monitor-cell":o.id,"data-testid":"monitor-row",children:[e.jsx(Dt,{"data-qa-monitor-label":!0,children:e.jsxs(m,{alignItems:"center",container:!0,spacing:2,wrap:"nowrap",children:[e.jsx(vt,{children:e.jsx(p,{height:30,width:30})}),e.jsx(m,{children:o.label})]})}),e.jsx(L,{"data-qa-monitor-status":!0,children:e.jsxs(m,{alignItems:"center",container:!0,direction:"row",spacing:1,children:[e.jsx(m,{children:e.jsx(d,{children:Et[o.status]})}),e.jsx(m,{children:f.length>0&&e.jsx(te,{"data-qa-open-ticket-tooltip":!0,enterTouchDelay:0,leaveTouchDelay:5e3,placement:"top",title:"See the open ticket associated with this incident",children:e.jsx(Ct,{to:`/support/tickets/${r[0].entity.id}`,children:e.jsx(ae,{})})})})]})}),e.jsx(L,{"data-qa-monitor-resource":!0,children:e.jsx(H,{children:o.address})}),e.jsx(L,{actionCell:!0,children:e.jsx(Mt,{label:o.label,monitorID:o.id,openDialog:n,openHistoryDrawer:a,openMonitorDrawer:i,status:o.status})})]},o.id)},Lt=t=>{const{error:r,issues:o,loading:n,monitors:a,openDialog:i,openHistoryDrawer:p,openMonitorDrawer:f}=t;return n?e.jsx(Xe,{columns:3}):r?e.jsx(We,{colSpan:4,message:r[0].reason}):a.length===0?e.jsx(Je,{colSpan:4,message:"You don't have any Monitors on your account."}):e.jsx(e.Fragment,{children:a.map((d,x)=>e.jsx(At,{issues:o.filter(S=>S.services.includes(d.id)),monitor:d,openDialog:i,openHistoryDrawer:p,openMonitorDrawer:f},`service-monitor-row-${x}`))})},qt=()=>{const{enqueueSnackbar:t}=oe(),{data:r,error:o,isLoading:n}=_e(),{data:a,error:i,isLoading:p}=Ne(),{data:f}=$e(),{data:d}=Be(),{mutateAsync:x}=He(),S=j.useMemo(()=>{if(!d)return[];const s=[];let u=0;for(u;u<d.length;u++)d[u].group!==null&&!s.includes(d[u].group)&&s.push(d[u].group);return s},[d]),v=r||[],{closeDialog:l,dialog:c,handleError:T,openDialog:C,submitDialog:k}=Oe(s=>x({id:s||-1})),[b,M]=j.useState(!1),[y,h]=j.useState(!1),[E,V]=j.useState("create"),[P,G]=j.useState(0),{mutateAsync:ce}=Ue(P),{mutateAsync:de}=Qe(),[ue,me]=j.useState(""),z=()=>{G(0),V("create"),h(!1)},pe=(s,u)=>{G(s),V(u),h(!0)},be=(s,u)=>{G(s),me(u),M(!0)},ye=()=>{c.entityID&&k(c.entityID).then(s=>{t("Successfully deleted Service Monitor",{variant:"success"})}).catch(s=>{T(Q(s,"Error deleting this Service Monitor.")[0].reason)})},ge=(s,{setErrors:u,setStatus:w,setSubmitting:D})=>{const q=()=>{D(!1),z()},R=F=>{const _=`Unable to ${E==="create"?"create":"update"} this Monitor. Please try again later.`,N=$=>w({generalError:$});D(!1),Ve(u,F),ze(N,F,_),D(!1)};w(void 0),E==="create"?de({...s,timeout:+s.timeout}).then(q).catch(R):ce({...s,timeout:+s.timeout}).then(q).catch(R)};return e.jsxs(e.Fragment,{children:[e.jsx(Ie,{segment:"Monitors"}),e.jsx(m,{alignItems:"flex-end",container:!0,justifyContent:"flex-end",children:e.jsx(m,{children:e.jsx(m,{alignItems:"flex-end",container:!0,children:e.jsx(jt,{children:e.jsx(ke,{label:"Add Monitor",onClick:()=>h(!0)})})})})}),e.jsx(Ae,{data:v,order:"asc",orderBy:"label",children:({data:s,handleOrderChange:u,order:w,orderBy:D})=>e.jsx(Le,{data:s,children:({count:q,data:R,handlePageChange:F,handlePageSizeChange:_,page:N,pageSize:$})=>e.jsxs(e.Fragment,{children:[e.jsxs(Re,{"aria-label":"List of Your Managed Service Monitors",children:[e.jsx(rt,{children:e.jsxs(ft,{children:[e.jsx(Tt,{active:D==="label","data-qa-monitor-label-header":!0,direction:w,handleClick:u,label:"label",children:"Monitor"}),e.jsx(U,{active:D==="status","data-qa-monitor-status-header":!0,direction:w,handleClick:u,label:"status",children:"Status"}),e.jsx(U,{active:D==="address","data-qa-monitor-resource-header":!0,direction:w,handleClick:u,label:"address",children:"Resource"}),e.jsx(L,{})]})}),e.jsx(Fe,{children:e.jsx(Lt,{error:o,issues:a||[],loading:n,monitors:R,openDialog:C,openHistoryDrawer:be,openMonitorDrawer:pe})})]}),e.jsx(qe,{count:q,eventCategory:"managed service monitor table",handlePageChange:F,handleSizeChange:_,page:N,pageSize:$})]})})}),e.jsx(Ee,{entity:"monitor",error:c.error,label:c.entityLabel||"",loading:c.isLoading,onClose:l,onDelete:ye,open:c.isOpen}),e.jsx(lt,{credentials:f||[],groups:S,mode:E,monitor:v.find(s=>s.id===P),onClose:z,onSubmit:ge,open:y}),e.jsx(xt,{issues:a==null?void 0:a.filter(s=>s.services.includes(P)),error:i,loading:p,monitorLabel:ue,onClose:()=>M(!1),open:b})]})},To=qt;export{To as default};