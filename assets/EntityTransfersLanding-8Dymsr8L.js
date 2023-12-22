import{r as c,cx as ee,av as ne,j as e,af as te,ad as se,T as C,ag as re,kX as ue,kY as fe,an as _,bH as ae,s as i,cH as he,W as L,aq as B,cn as O,al as ye,aj as ie,Z as oe,J as Te,da as Q,f as I,kZ as xe,k_ as me,bL as H,ao as be,C as le,E as Se,cQ as Ce,ap as je,k$ as ve,l0 as ke,G as A,bB as we,u as ce,c3 as Ee,e as De,Q as Pe}from"./index-cVx9Zqte.js";import{u as W}from"./usePagination-oVzoT3VV.js";import{q as de,a as Le,c as Be,T as z,b as q}from"./utilities-IlPQVcEt.js";import{P as Re}from"./PaginationFooter-8MfyrbrN.js";import{a as x,T as pe,b as ze,c as Ie}from"./TableRow-WjckZ-OR.js";import{T as Oe}from"./TableContentWrapper-SbYWRZM5.js";import{D as N}from"./DateTimeDisplay-Ll7y9Gvy.js";import{C as Ae}from"./CopyTooltip-nIZAIwkd.js";import{I as $e}from"./InlineMenuAction-1MvHCfFL.js";import{T as Fe}from"./TableHead-aAnFvqns.js";import{c as We}from"./index-nat4f1EQ.js";import{C as qe}from"./CopyableTextField-zKZIzq_h.js";import"./TableRowEmpty-HXunljlo.js";import"./TableRowError-VT_K71YW.js";import"./TableRowLoading-enpzcj9B.js";import"./Skeleton-Ei33_jCb.js";const Ge=c.memo(n=>{const{entities:s,onClose:a,open:t,token:g}=n,{enqueueSnackbar:r}=ee(),[f,d]=c.useState(!1),[l,o]=c.useState(null),h=ne();c.useEffect(()=>{t&&(o(null),d(!1))},[t]);const p=()=>{g&&(o(null),d(!0),ue(g).then(()=>{fe(),h.invalidateQueries(de),a(),d(!1),r("Service transfer canceled successfully.",{variant:"success"})}).catch(y=>{o(_(y,"An unexpected error occurred.")),d(!1)}))},u=e.jsx(re,{primaryButtonProps:{disabled:f,label:"Cancel Service Transfer",loading:f,onClick:p},secondaryButtonProps:{label:"Keep Service Transfer",onClick:a},sx:{display:"flex",justifyContent:"flex-end"}});return s?e.jsxs(te,{actions:u,onClose:a,open:t,title:"Cancel this Service Transfer?",children:[l?l.map((y,T)=>e.jsx(se,{text:y.reason,variant:"error"},`form-submit-error-${T}`)):null,e.jsxs(C,{children:["The token generated for this service transfer will no longer be valid. To transfer ownership of"," ",(s==null?void 0:s.linodes.length)>1?"these Linodes":"this Linode",", you will need to create a new service transfer and share the new token with the receiving party."]})]}):null}),_e=c.memo(n=>{const{entities:s,isOpen:a,onClose:t,token:g}=n;return e.jsxs(ae,{fullWidth:!0,onClose:t,open:a,title:"Service Transfer Details",children:[e.jsxs(Ke,{children:[e.jsx(U,{children:"Token: "}),g]}),e.jsx(U,{children:"Linode IDs:"}),e.jsx(Me,{children:s==null?void 0:s.linodes.map((r,f)=>e.jsx(C,{"data-testid":f,children:r},f))})]})}),Me=i("div",{label:"StyledDiv"})(({theme:n})=>({marginBottom:n.spacing(2)})),U=i(C,{label:"StyledTypography"})(({theme:n})=>({color:n.textColors.headlineStatic,fontFamily:n.font.bold})),Ke=i("div",{label:"StyledTokenDiv"})(({theme:n})=>({marginBottom:n.spacing(3)})),X=i(x,{label:"StyledTableCell"})(({theme:n})=>({paddingLeft:n.spacing(2)})),Qe=i(x,{label:"StyledTokenTableCell"})(({theme:n})=>({paddingLeft:n.spacing(2),[n.breakpoints.down("md")]:{width:"50%"},width:"40%"})),Y=i(x,{label:"StyledCreatedExpiryTableCell"})(({theme:n})=>({paddingLeft:n.spacing(2),[n.breakpoints.down("sm")]:{width:"25%"},width:"20%"})),He=i(x,{label:"StyledEntitiesTableCell"})(({theme:n})=>({paddingLeft:n.spacing(2),[n.breakpoints.down("md")]:{width:"20%"},[n.breakpoints.down("sm")]:{width:"25%"},width:"15%"})),Ne=i(Ae,{label:"StyledCopyTooltip"})(({theme:n})=>({"& svg":{height:12,width:12},marginLeft:n.spacing(1),marginTop:n.spacing(.25)})),Ue=i(pe,{label:"StyledTableRow"})({"&:hover":{"& [data-qa-copy-token]":{opacity:1}}}),Xe=i("div",{label:"StyledDiv"})({"& [data-qa-copy-token]":{opacity:0},display:"flex"}),Ye=n=>{const{onCancelClick:s}=n,a=[{onClick:()=>{s()},title:"Cancel"}];return e.jsx(Ze,{children:a.map(t=>e.jsx($e,{actionText:t.title,disabled:t.disabled,onClick:t.onClick},t.title))})},Ze=i("div",{label:"StyledDiv"})({alignItems:"center",display:"flex",justifyContent:"flex-end"}),Je=c.memo(n=>{const{created:s,entities:a,expiry:t,handleCancelPendingTransferClick:g,handleTokenClick:r,status:f,token:d,transferType:l}=n,o=Object.entries(a),h=l==="pending",p=l==="received",u=l==="sent",y=p?X:He;return e.jsxs(Ue,{children:[e.jsx(Qe,{noWrap:!0,children:e.jsxs(Xe,{children:[e.jsx(he,{onClick:()=>r(d,a),children:d}),e.jsx("div",{"data-qa-copy-token":!0,children:e.jsx(Ne,{text:d})})]})}),e.jsx(L,{mdDown:h||u,children:e.jsx(Y,{noWrap:!0,children:e.jsx(N,{value:s})})}),e.jsx(L,{smDown:h,children:e.jsx(y,{noWrap:!0,children:o.map((T,j)=>e.jsxs("span",{children:[Ve(T),e.jsx("br",{})]},j))})}),h?e.jsxs(e.Fragment,{children:[e.jsx(Y,{noWrap:!0,children:e.jsx(N,{value:t??""})}),e.jsx(x,{actionCell:!0,children:e.jsx(Ye,{onCancelClick:()=>g(d,a)})})]}):null,u?e.jsx(X,{children:B(f??"")}):null]})}),Ve=n=>{const[s,a]=n,t=B(s),g=B(s.slice(0,-1)),r=a.length;return`${O(g,t,r)}`},en=i("div",{label:"StyledDiv"})(({theme:n})=>({"& .MuiAccordion-root table":{border:"none"},"& .MuiAccordionDetails-root":{padding:0},marginBottom:n.spacing(2)})),nn=i(ze,{label:"StyledTable"})({width:"100%"}),G=c.memo(n=>{const{error:s,handlePageChange:a,handlePageSizeChange:t,isLoading:g,page:r,pageSize:f,results:d,transferType:l,transfers:o}=n,[h,p]=c.useState(!1),[u,y]=c.useState(""),[T,j]=c.useState(!1),[w,P]=c.useState(""),[v,S]=c.useState(void 0),m=(o==null?void 0:o.length)??0,D=l==="pending",R=l==="sent",$=(b,E)=>{y(b),S(E),p(!0)},k=()=>{y(""),p(!1)},F=(b,E)=>{P(b),S(E),j(!0)};return e.jsxs(e.Fragment,{children:[e.jsxs(en,{children:[e.jsxs(ye,{defaultExpanded:m>0,heading:`${B(l)} Service Transfers`,children:[e.jsxs(nn,{children:[e.jsx(Fe,{children:e.jsxs(pe,{children:[e.jsx(x,{children:"Token"},"transfer-token-table-header-token"),D||R?e.jsx(L,{mdDown:!0,children:e.jsx(x,{children:"Created"},"transfer-token-table-header-created")}):e.jsx(x,{children:"Created"},"transfer-token-table-header-created"),D?e.jsxs(e.Fragment,{children:[e.jsx(L,{smDown:!0,children:e.jsx(x,{children:"Services"},"transfer-token-table-header-entities")}),e.jsx(x,{children:"Expiry"},"transfer-token-table-header-expiry"),e.jsx(x,{})]}):R?e.jsxs(e.Fragment,{children:[e.jsx(x,{children:"Services"},"transfer-token-table-header-entities"),e.jsx(x,{children:"Status"},"transfer-token-table-header-status")]}):e.jsx(x,{children:"Services"},"transfer-token-table-header-entities")]})}),e.jsx(Ie,{children:e.jsx(Oe,{loadingProps:{columns:3,responsive:{}},error:s??void 0,length:(o==null?void 0:o.length)??0,loading:g,children:o==null?void 0:o.map((b,E)=>e.jsx(Je,{handleCancelPendingTransferClick:$,created:b.created,entities:b.entities,expiry:b.expiry,handleTokenClick:F,status:b.status,token:b.token,transferType:l},`${l}-${E}`))})})]}),e.jsx(Re,{count:d,eventCategory:"Service Transfer Table",handlePageChange:a,handleSizeChange:t,page:r,pageSize:f})]}),D?e.jsx(Ge,{entities:v,onClose:k,open:h,token:u}):null]}),e.jsx(_e,{entities:v,isOpen:T,onClose:()=>j(!1),token:w})]})}),Z=i("div",{label:"StyledCopyDiv"})(({theme:n})=>({alignSelf:"flex-end",marginTop:n.spacing(2),maxWidth:220})),J=i("div",{label:"StyledInputDiv"})(({theme:n})=>({display:"flex",flexFlow:"column nowrap",paddingBottom:n.spacing(1)})),tn=i(ae,{label:"StyledDialog"})(({theme:n})=>({paddingBottom:n.spacing()})),sn=i(C,{label:"StyledTypography"})(({theme:n})=>({paddingBottom:n.spacing()})),V=i(qe,{label:"StyledCopyableTextField"})({maxWidth:"100%"}),rn=ie(10*1e3,!0,xe),an=ie(10*1e3,!0,me),on=c.memo(n=>{const{isOpen:s,onClose:a,transfer:t}=n,[g,r]=c.useState([!1,!1]),f=(o,h)=>{We(h),r(p=>H(o,!0,p)),setTimeout(()=>r(p=>H(o,!1,p)),1e3)};if(!t)return null;const d=O("Linode","Linodes",t.entities.linodes.length),l=`This token authorizes transfer of ${d} to you:

${t.token}
	
1) Log in to your account at cloud.linode.com.	
2) Navigate to the Service Transfers tab on your Account page.	
3) Copy and paste the token into the Receive a Service Transfer field to view	details and accept the transfer.

If you do not have an account with Linode you will need to create one.
This token will expire ${oe(t.expiry).toLocaleString(Te.DATETIME_FULL)}.`;return e.jsxs(tn,{onClose:a,open:s,title:"Service Transfer Token",children:[e.jsxs(sn,{children:["This token authorizes the transfer of ",d,"."]}),e.jsx(C,{children:"Copy and paste the token or draft text into an email or other secure delivery method. It may take up to an hour for the service transfer to take effect once accepted by the recipient."}),e.jsxs(J,{children:[e.jsx(V,{"aria-disabled":!0,fullWidth:!0,hideIcon:!0,label:"Token",value:t.token}),e.jsx(Q,{open:g[0],title:"Copied!",children:e.jsx(Z,{children:e.jsx(I,{onClick:()=>{rn(),f(0,t.token)},buttonType:"outlined",children:"Copy Token"})})})]}),e.jsxs(J,{children:[e.jsx(V,{"aria-disabled":!0,fullWidth:!0,hideIcon:!0,label:"Draft Email",multiline:!0,value:l}),e.jsx(Q,{open:g[1],title:"Copied!",children:e.jsx(Z,{children:e.jsx(I,{onClick:()=>{an(),f(1,l)},buttonType:"primary",children:"Copy Draft Email"})})})]})]})}),ln=i(re,{label:"StyledActionsPanel"})({display:"flex",justifyContent:"flex-end"}),cn=i(C,{label:"StyledEntityTypography"})(({theme:n})=>({marginBottom:n.spacing()})),dn=i(C,{label:"StyledExpiryTypography"})(({theme:n})=>({marginBottom:n.spacing(2),marginTop:n.spacing(2)})),pn=i("ul",{label:"StyledUl"})({listStyleType:"none",margin:0,paddingLeft:0}),gn=i(C,{label:"StyledSummaryTypography"})(({theme:n})=>({marginBottom:n.spacing(.5)})),un=i(C,{label:"StyledDiv"})(({theme:n})=>({marginBottom:n.spacing()})),fn=c.memo(n=>{const{onClose:s,open:a,token:t}=n,{enqueueSnackbar:g}=ee(),{data:r,error:f,isError:d,isLoading:l}=Le(t??"",a),[o,h]=c.useState(!1),[p,u]=c.useState(!1),[y,T]=c.useState(null),j=ne(),w=!!(r!=null&&r.is_sender),P=w?[{reason:"You cannot initiate a transfer to another user on your account."}]:f;c.useEffect(()=>{a&&(T(null),u(!1),h(!1))},[a]);const v=()=>{t&&(T(null),u(!0),ve(t).then(()=>{if(r!=null&&r.entities){const m=Be(r==null?void 0:r.entities);ke(m)}j.invalidateQueries({predicate:m=>m.queryKey[0]===de&&m.queryKey[2]===z.received}),s(),u(!1),g("Transfer accepted successfully.",{variant:"success"})}).catch(m=>{T(_(m,"An unexpected error occurred.")),u(!1)}))},S=e.jsx(ln,{primaryButtonProps:{disabled:!o||l||d,label:"Accept Transfer",loading:p,onClick:v},secondaryButtonProps:{label:"Cancel",onClick:s}});return e.jsx(te,{actions:S,onClose:s,open:a,title:"Receive a Service Transfer",children:e.jsx(hn,{entities:(r==null?void 0:r.entities)??{linodes:[]},errors:P,expiry:r==null?void 0:r.expiry,handleToggleConfirm:()=>h(m=>!m),hasConfirmed:o,isError:d||w,isLoading:l,onClose:s,onSubmit:v,submissionErrors:y})})}),hn=c.memo(n=>{const{entities:s,errors:a,expiry:t,handleToggleConfirm:g,hasConfirmed:r,isError:f,isLoading:d,submissionErrors:l}=n,{data:o}=be();if(d)return e.jsx("div",{style:{width:500},children:e.jsx(le,{})});if(f)return e.jsx("div",{style:{width:500},children:e.jsx(Se,{errorText:_(a??[],"Unable to load this transfer.")[0].reason})});const h=yn(t,o==null?void 0:o.timezone);return e.jsxs(e.Fragment,{children:[l?l.map((p,u)=>e.jsx(se,{text:p.reason,variant:"error"},`form-submit-error-${u}`)):null,e.jsxs(un,{children:[e.jsx(gn,{children:"This transfer contains:"}),e.jsx(pn,{children:Object.keys(s).map(p=>{const u=B(p).slice(0,-1);return e.jsx("li",{children:e.jsx(cn,{children:e.jsx("strong",{children:O(u,u+"s",s[p].length)})})},p)})})]}),h?e.jsx(dn,{children:h}):null,e.jsx("div",{children:e.jsx(Ce,{checked:r,onChange:g,text:"I accept responsibility for the billing of services listed above."})})]})}),yn=(n,s)=>{if(!n)return;const a=Math.floor(oe(n).diffNow("minutes").toObject().minutes??0);if(a<1)return"This token has expired.";const t=a>60?"hour":"minute";return`This token will expire in ${O(t,t+"s",t==="minute"?a:Math.round(a/60))} (${je(n,{timezone:s})}).`},M=450,Tn=i(C,{label:"StyledTypography"})(({theme:n})=>({color:n.textColors.headlineStatic,fontSize:n.spacing(2),marginRight:n.spacing(),[n.breakpoints.down("md")]:{flexBasis:"100%",marginBottom:n.spacing(1)},whiteSpace:"nowrap"})),xn=i(A,{label:"StyledLabelWrapperGrid"})(({theme:n})=>({margin:0,paddingLeft:0,[n.breakpoints.down("lg")]:{flexWrap:"wrap"},[n.breakpoints.down("md")]:{"& > div":{margin:0,padding:0},marginBottom:n.spacing(1),padding:0,width:"568px"},[n.breakpoints.down("sm")]:{margin:`${n.spacing(1)} 0`,width:"100%"},[n.breakpoints.down(M)]:{alignItems:"flex-start",flexDirection:"column"}})),mn=i(A,{label:"StyledTransferGrid"})(({theme:n})=>({paddingLeft:0,paddingRight:0,[n.breakpoints.down("md")]:{width:"568px"},[n.breakpoints.down("sm")]:{padding:0,width:"100%"}})),bn=i(I,{label:"StyledTransferButton"})(({theme:n})=>({marginBottom:n.spacing(),minWidth:152,[n.breakpoints.down("md")]:{width:"100%"},[n.breakpoints.down("sm")]:{margin:`${n.spacing()} 0`},[n.breakpoints.down(M)]:{marginTop:0,minWidth:"auto"},whiteSpace:"nowrap"})),Sn=i(I,{label:"StyledReviewButton"})(({theme:n})=>({marginLeft:n.spacing(2),[n.breakpoints.down(M)]:{marginLeft:0,marginTop:n.spacing(),width:"100%"}})),Cn=i(A,{label:"StyledRootGrid"})(({theme:n})=>({margin:`${n.spacing(2)} 0`,[n.breakpoints.down("md")]:{alignItems:"flex-start",flexDirection:"column",marginLeft:n.spacing(2)},[n.breakpoints.down("sm")]:{marginRight:n.spacing(2)}})),jn=i(we,{label:"StyledTextField"})(({theme:n})=>({[n.breakpoints.down("lg")]:{width:240},[n.breakpoints.down("md")]:{width:"100%"},width:360})),vn=i(A,{label:"StyledTransferWrapperGrid"})(({theme:n})=>({[n.breakpoints.down("md")]:{"& > div":{flexGrow:1},flexBasis:"100%",width:"568px"},[n.breakpoints.down("sm")]:{width:"100%"}})),kn=c.memo(()=>{const[n,s]=c.useState(""),[a,t]=c.useState(!1),{push:g}=ce(),r=l=>{s(l.target.value)},f=()=>{t(!1),setTimeout(()=>s(""),150)},d=()=>g("/account/service-transfers/create");return e.jsxs(e.Fragment,{children:[e.jsxs(Cn,{alignItems:"center",container:!0,justifyContent:"space-between",spacing:2,wrap:"nowrap",children:[e.jsxs(xn,{alignItems:"center",container:!0,wrap:"nowrap",children:[e.jsx(Tn,{children:e.jsx("strong",{children:"Receive a Service Transfer"})}),e.jsxs(vn,{alignItems:"center",container:!0,direction:"row",children:[e.jsx(jn,{hideLabel:!0,label:"Receive a Service Transfer",onChange:r,placeholder:"Enter a token",value:n}),e.jsx(Sn,{buttonType:"primary",disabled:n==="",onClick:()=>t(!0),children:"Review Details"}),e.jsx(L,{mdDown:!0,children:e.jsx(Ee,{status:"help",text:"Enter a service transfer token to review the details and accept the transfer."})})]})]}),e.jsx(mn,{children:e.jsx(bn,{buttonType:"primary",onClick:d,children:"Make a Service Transfer"})})]}),e.jsx(fn,{onClose:f,open:a,token:n})]})}),_n=()=>{const[n,s]=c.useState(!0),[a,t]=c.useState(void 0),g=De(),r=ce(),f=()=>{s(!1),t(void 0),r.replace({state:void 0})};c.useEffect(()=>{var K;(K=g.state)!=null&&K.transfer&&(s(!0),t(g.state.transfer))},[g]);const d=1,l="pending-transfers-table",o="received-transfers-table",h="sent-transfers-table",p=W(d,l,l),u=W(d,o,o),y=W(d,h,h),{data:T,error:j,isLoading:w}=q({page:p.page,page_size:p.pageSize},z.pending),P=Object.values((T==null?void 0:T.entityTransfers)??{}),v=(T==null?void 0:T.results)??0,{data:S,error:m,isLoading:D}=q({page:u.page,page_size:u.pageSize},z.received),R=Object.values((S==null?void 0:S.entityTransfers)??{}),$=(S==null?void 0:S.results)??0,{data:k,error:F,isLoading:b}=q({page:y.page,page_size:y.pageSize},z.sent),E=Object.values((k==null?void 0:k.entityTransfers)??{}),ge=(k==null?void 0:k.results)??0;return e.jsxs("div",{style:{overflowX:"hidden"},children:[e.jsx(Pe,{segment:"Transfers"}),e.jsx(kn,{}),e.jsx(on,{isOpen:n,onClose:f,transfer:a}),w||D||b?e.jsx(le,{}):e.jsxs(e.Fragment,{children:[v>0?e.jsx(G,{handlePageSizeChange:p.handlePageSizeChange,error:j,handlePageChange:p.handlePageChange,isLoading:w,page:p.page,pageSize:p.pageSize,results:v,transferType:"pending",transfers:P}):null,e.jsx(G,{handlePageSizeChange:u.handlePageSizeChange,error:m,handlePageChange:u.handlePageChange,isLoading:D,page:u.page,pageSize:u.pageSize,results:$,transferType:"received",transfers:R}),e.jsx(G,{error:F,handlePageChange:y.handlePageChange,handlePageSizeChange:y.handlePageSizeChange,isLoading:b,page:y.page,pageSize:y.pageSize,results:ge,transferType:"sent",transfers:E})]})]})};export{_n as EntityTransfersLanding};