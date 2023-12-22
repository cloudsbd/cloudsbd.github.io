import{r as b,s as k,j as e,bL as ue,d0 as pe,T as S,b3 as me,b4 as be,dg as oe,C as ge,lz as he,ad as J,a1 as ye,bB as je,ag as re,W as X,af as xe,lA as ke,Q as Ce,lB as fe,lC as we,an as H,ak as Z,lD as Se,lE as ve,lF as Ae,lG as Te}from"./index-cVx9Zqte.js";import{P as Ke}from"./PaginationFooter-8MfyrbrN.js";import{S as Re}from"./SecretTokenDialog-NExnlDah.js";import{s as De}from"./scrollErrorIntoView-6n4Cku1Y.js";import{u as W}from"./useOpenClose-nIo3Pywg.js";import{u as Ee}from"./usePagination-oVzoT3VV.js";import{F as Oe}from"./formik.esm-XrBweJub.js";import{D as ne}from"./Drawer-Zv-UzsLT.js";import{E as _e}from"./ObjectStorageLanding-lAbSukXT.js";import{c as Le}from"./utilities-QIVW8bV0.js";import{T as Pe}from"./Toggle-GPvvuUvh.js";import{R as G}from"./Radio-9QvviwDe.js";import{b as le,a as i,T as $,c as ce}from"./TableRow-WjckZ-OR.js";import{A as Y}from"./AccessCell-Ds3WEkHL.js";import{T as ie}from"./TableHead-aAnFvqns.js";import{C as qe}from"./CopyTooltip-nIZAIwkd.js";import{T as ee}from"./TableRowEmpty-HXunljlo.js";import{T as Be}from"./TableRowError-VT_K71YW.js";import{T as Fe}from"./TableRowLoading-enpzcj9B.js";import{A as Ie}from"./ActionMenu-LQcZWhDC.js";import{I as Ue}from"./InlineMenuAction-1MvHCfFL.js";import{C as Ne}from"./CancelNotice-qrfv--GB.js";import"./download-Yb77-Dhe.js";import"./downloadFile-7KribbgA.js";import"./LandingHeader--0FiA91-.js";import"./useWindowDimensions-o3pYvEf4.js";import"./SafeTabPanel-mYwDHsH9.js";import"./TabList-Vcpmm6u6.js";import"./TabLinkList-d9SkE5Nv.js";import"./RegionSelect-bPwNTvP1.js";import"./Autocomplete-vchTD_Ph.js";import"./Flag-3tAA4S-o.js";import"./ListItem-HwDJ8kDZ.js";import"./visuallyHidden-DVicuktI.js";import"./constants-KokzTiEs.js";import"./TextTooltip-h4BIBq-b.js";import"./dynamicPricing-n5eCZqTg.js";import"./monitor-ok-3EdbH5qi.js";import"./index-nat4f1EQ.js";import"./Skeleton-Ei33_jCb.js";const ze=()=>{const[t,s]=b.useState([]);return b.useEffect(()=>{t&&De()},[t]),[t,s,()=>s([])]},$e=k(le,{label:"StyledTableRoot"})(()=>({maxHeight:800,overflowY:"auto"})),Me=k(i,{label:"StyledClusterCell"})(()=>({width:"18%"})),Ve=k(i,{label:"StyledBucketCell"})(()=>({width:"28%"})),se=k($,{label:"StyledRadioRow"})(({disabled:t,mode:s,theme:a})=>({"& td ":{color:`${a.palette.text.primary} !important`},...t&&s!=="viewing"&&{backgroundColor:a.bg.tableHeader,cursor:"not-allowed",opacity:.4}})),Q=k(i,{label:"StyledRadioCell"})(()=>({width:"18%"})),He=(t,s)=>{const a=t.findIndex(n=>n.bucket_name===s.bucket_name&&n.cluster===s.cluster);return a<0?t:ue(a,s,t)},j={none:"none",read:"read_only",write:"read_write"},de=b.memo(t=>{const{bucket_access:s,checked:a,mode:n,updateScopes:p}=t;if(!s)return null;const m=o=>{const r=He(s,o);p(r)},c=o=>{const r=s.map(h=>({...h,permissions:o}));p(r)},l=o=>s.every(r=>r.permissions===o),d=!a;return e.jsxs($e,{"aria-label":"Object Storage Access Key Permissions",spacingTop:24,children:[e.jsx(ie,{children:e.jsxs($,{children:[e.jsx(i,{"data-qa-perm-cluster":!0,children:"Cluster"}),e.jsx(i,{"data-qa-perm-bucket":!0,children:"Bucket"}),e.jsx(i,{"data-qa-perm-none":!0,children:"None"}),e.jsx(i,{"data-qa-perm-read":!0,children:"Read Only"}),e.jsx(i,{"data-qa-perm-rw":!0,children:"Read/Write"})]})}),e.jsxs(ce,{children:[n==="creating"&&e.jsxs(se,{"data-qa-row":"Select All",disabled:d,children:[e.jsx(i,{colSpan:2,padding:"checkbox",parentColumn:"Cluster",children:e.jsx("strong",{children:"Select All"})}),e.jsx(i,{padding:"checkbox",parentColumn:"None",children:e.jsx(G,{inputProps:{"aria-label":"Select none for all"},checked:l(j.none),"data-qa-perm-none-radio":!0,"data-testid":"set-all-none",disabled:d,name:"Select All",onChange:()=>c(j.none),value:"none"})}),e.jsx(i,{padding:"checkbox",parentColumn:"Read Only",children:e.jsx(G,{inputProps:{"aria-label":"Select read-only for all"},checked:l("read_only"),"data-qa-perm-read-radio":!0,"data-testid":"set-all-read",disabled:d,name:"Select All",onChange:()=>c("read_only"),value:"read-only"})}),e.jsx(i,{padding:"checkbox",parentColumn:"Read/Write",children:e.jsx(G,{inputProps:{"aria-label":"Select read/write for all"},checked:l(j.write),"data-qa-perm-rw-radio":!0,"data-testid":"set-all-write",disabled:d,name:"Select All",onChange:()=>c(j.write),value:"read-write"})})]}),s.map(o=>{const r=`${o.cluster}-${o.bucket_name}`;return e.jsxs(se,{"data-testid":r,disabled:d,mode:n,children:[e.jsx(Me,{padding:"checkbox",children:o.cluster}),e.jsx(Ve,{padding:"checkbox",children:o.bucket_name}),e.jsx(Q,{padding:"checkbox",children:e.jsx(Y,{onChange:()=>m({...o,permissions:j.none}),active:o.permissions===j.none,disabled:d,scope:"none",scopeDisplay:r,viewOnly:n==="viewing"})}),e.jsx(Q,{padding:"checkbox",children:e.jsx(Y,{onChange:()=>m({...o,permissions:j.read}),active:o.permissions===j.read,disabled:d,scope:"read-only",scopeDisplay:r,viewOnly:n==="viewing"})}),e.jsx(Q,{padding:"checkbox",children:e.jsx(Y,{onChange:()=>m({...o,permissions:j.write}),active:o.permissions===j.write,disabled:d,scope:"read-write",scopeDisplay:r,viewOnly:n==="viewing"})})]},r)})]})]})}),We=b.memo(t=>{const{checked:s,handleToggle:a,...n}=t;return e.jsxs(e.Fragment,{children:[e.jsx(pe,{control:e.jsx(Pe,{checked:s,"data-testid":"limited-permissions-toggle",disabled:t.mode!=="creating",onChange:a}),label:"Limited Access"}),e.jsx(S,{children:"Limited access keys can list all buckets, regardless of access. They can also create new buckets, but will not have access to the buckets they create."}),e.jsx(de,{checked:s,...n})]})}),Ge=(t,s)=>t.cluster>s.cluster?1:t.cluster<s.cluster?-1:0,te=t=>t.map(s=>({bucket_name:s.label,cluster:s.cluster,permissions:"none"})).sort(Ge),Ye=t=>{const{isRestrictedUser:s,mode:a,objectStorageKey:n,onClose:p,onSubmit:m,open:c}=t,{data:l,isLoading:d}=me(),{data:o,error:r,isLoading:h}=be(l),{data:D}=oe(),v=(o==null?void 0:o.buckets)||[],I=(v==null?void 0:v.length)>0,C=r||(o==null?void 0:o.buckets.length)===0,f=a==="creating",[A,U]=b.useState(!1),[N,E]=b.useState(!1);b.useEffect(()=>{c&&E(!1)},[c]);const M=f?"Create Access Key":"Edit Access Key Label",O=!f&&n?n.label:"",P={bucket_access:te(v),label:O},_=(y,L)=>{const q=y.bucket_access??[],B=N?{...y,bucket_access:q.filter(F=>F.permissions!=="none")}:{...y,bucket_access:null};return m(B,L)};return e.jsx(ne,{onClose:p,open:c,title:M,wide:f&&I,children:h||d?e.jsx(ge,{}):e.jsx(Oe,{initialValues:P,onSubmit:_,validateOnBlur:!0,validateOnChange:!1,validationSchema:he,children:y=>{const{errors:L,handleBlur:q,handleChange:B,handleSubmit:F,isSubmitting:V,setFieldValue:z,status:u,values:g}=y,T=()=>{Le((D==null?void 0:D.object_storage)||"active",y,()=>U(!0))},x=K=>{z("bucket_access",K)},w=()=>{E(K=>!K),z("bucket_access",te(v))};return e.jsxs(e.Fragment,{children:[u&&e.jsx(J,{"data-qa-error":!0,text:u,variant:"error"},u),s&&e.jsx(J,{important:!0,text:"You don't have bucket_access to create an Access Key. Please contact an account administrator for details.",variant:"error"}),f&&e.jsxs(S,{children:["Generate an Access Key for use with an"," ",e.jsx(ye,{className:"h-u",to:"https://linode.com/docs/platform/object-storage/how-to-use-object-storage/#object-storage-tools",children:"S3-compatible client"}),"."]}),I?null:e.jsx(S,{sx:{paddingTop:"10px"},children:"This key will have unlimited access to all buckets on your account. The option to create a limited access key is only available after creating one or more buckets."}),e.jsx(je,{"data-qa-add-label":!0,disabled:s||a==="viewing",error:!!L.label,errorText:L.label,label:"Label",name:"label",onBlur:q,onChange:B,value:g.label}),f&&!C?e.jsx(We,{bucket_access:g.bucket_access,checked:N,handleToggle:w,mode:a,updateScopes:x}):null,e.jsx(re,{primaryButtonProps:{"data-testid":"submit",disabled:s||a!=="creating"&&g.label===O,label:f?"Create Access Key":"Save Changes",loading:V,onClick:T},secondaryButtonProps:{"data-testid":"cancel",label:"Cancel",onClick:p}}),e.jsx(_e,{handleSubmit:F,onClose:()=>U(!1),open:A})]})}})})},Qe=t=>{const{objectStorageKey:s,openDrawer:a,openRevokeDialog:n}=t,p=[{onClick:()=>{a("editing",s)},title:"Edit Label"},{onClick:()=>{a("viewing",s)},title:"Permissions"},{onClick:()=>{n(s)},title:"Revoke"}];return e.jsxs(Je,{children:[e.jsx(X,{mdDown:!0,children:p.map(m=>e.jsx(Ue,{actionText:m.title,onClick:m.onClick},m.title))}),e.jsx(X,{mdUp:!0,children:e.jsx(Ie,{actionsList:p,ariaLabel:`Action menu for Object Storage Key ${t.label}`})})]})},Je=k("div",{label:"StyledInlineActionsContainer"})(()=>({alignItems:"center",display:"flex",justifyContent:"flex-end"})),Xe=t=>{const{data:s,error:a,isLoading:n,isRestrictedUser:p,openDrawer:m,openRevokeDialog:c}=t,l=()=>p?e.jsx(ee,{colSpan:12}):n?e.jsx(Fe,{columns:3}):a?e.jsx(Be,{colSpan:6,message:"We were unable to load your Access Keys."}):s&&s.length>0?d(s):e.jsx(ee,{colSpan:12}),d=o=>o.map(r=>e.jsxs($,{"data-qa-table-row":r.label,children:[e.jsx(i,{parentColumn:"Label",children:e.jsx(S,{component:"h3","data-qa-key-label":!0,variant:"body1",children:r.label})}),e.jsx(i,{parentColumn:"Access Key",children:e.jsxs(S,{"data-qa-key-created":!0,variant:"body1",children:[r.access_key,e.jsx(Ze,{text:r.access_key})]})}),e.jsx(i,{children:e.jsx(Qe,{label:r.label,objectStorageKey:r,openDrawer:m,openRevokeDialog:c})})]},r.id));return e.jsxs(le,{"aria-label":"List of Object Storage Access Keys",colCount:2,"data-testid":"data-qa-access-key-table",rowCount:s==null?void 0:s.length,children:[e.jsx(ie,{children:e.jsxs($,{"data-qa-table-head":!0,children:[e.jsx(ae,{"data-qa-header-label":!0,children:"Label"}),e.jsx(ae,{"data-qa-header-key":!0,children:"Access Key"}),e.jsx(i,{})]})}),e.jsx(ce,{children:l()})]})},Ze=k(qe)(({theme:t})=>({"& svg":{height:12,top:1,width:12},marginLeft:t.spacing()})),ae=k(i)(()=>({width:"35%"})),es=t=>{const{errors:s,handleClose:a,handleSubmit:n,isLoading:p,isOpen:m,label:c,numAccessKeys:l}=t,d=()=>e.jsx(re,{primaryButtonProps:{label:"Revoke",loading:p,onClick:n},secondaryButtonProps:{"data-testid":"cancel",label:"Cancel",onClick:a}});return e.jsxs(xe,{actions:d,error:(s||[]).map(o=>o.reason).join(","),onClose:a,open:m,title:`Revoking ${c}`,children:[e.jsx(S,{children:"Are you sure you want to revoke this Access Key?"}),l===1&&e.jsx(ss,{})]})},ss=k(Ne,{label:"StyledCancelNotice"})(({theme:t})=>({marginTop:t.spacing(1)})),ts=t=>{const{objectStorageKey:s,onClose:a,open:n}=t;return s===null?null:e.jsx(ne,{onClose:a,open:n,title:`Permissions for ${s.label}`,wide:!0,children:s.bucket_access===null?e.jsx(S,{children:"This key has unlimited access to all buckets on your account."}):e.jsxs(e.Fragment,{children:[e.jsx(S,{children:"This access key has the following permissions:"}),e.jsx(de,{bucket_access:s.bucket_access,checked:s.limited,mode:"viewing",updateScopes:()=>null})]})})},as=b.memo(ts),Ms=t=>{const{accessDrawerOpen:s,closeAccessDrawer:a,isRestrictedUser:n,mode:p,openAccessDrawer:m}=t,c=Ee(1),{data:l,error:d,isLoading:o,refetch:r}=ke({page:c.page,page_size:c.pageSize}),{data:h,refetch:D}=oe(),[v,I]=b.useState(null),[C,f]=b.useState(null),[A,U]=b.useState(null),[N,E]=b.useState(!1),[M,O]=ze(),P=W(),_=W(),y=W(),L=(u,{setErrors:g,setStatus:T,setSubmitting:x})=>{T(null),x(!0),fe(u).then(w=>{x(!1),I(w),r(),t.closeAccessDrawer(),P.open(),(h==null?void 0:h.object_storage)==="disabled"&&D(),we()}).catch(w=>{(h==null?void 0:h.object_storage)==="disabled"&&D(),x(!1);const K=H(w,"There was an issue creating your Access Key."),R=Z(["label"],K);R.none&&T(R.none),g(R)})},q=(u,{setErrors:g,setStatus:T,setSubmitting:x})=>{if(C){if(T(null),u.label===C.label)return a();x(!0),Se(C.id,{label:u.label}).then(w=>{x(!1),r(),a(),ve()}).catch(w=>{x(!1);const K=H(w,"There was an issue updating your Access Key."),R=Z(["label"],K);R.none&&T(R.none),g(R)})}},B=()=>{A&&(E(!0),O([]),Ae(A.id).then(u=>{E(!1),r(),_.close(),Te()}).catch(u=>{E(!1);const g=H(u,"There was an issue revoking your Access Key.");O(g)}))},F=(u,g=null)=>{switch(f(g),u){case"creating":case"editing":m(u);break;case"viewing":y.open()}},V=u=>{U(u),_.open()},z=()=>{O([]),_.close()};return e.jsxs("div",{children:[e.jsx(Ce,{segment:"Access Keys"}),e.jsx(Xe,{data:l==null?void 0:l.data,"data-qa-access-key-table":!0,error:d,isLoading:o,isRestrictedUser:n,openDrawer:F,openRevokeDialog:V}),e.jsx(Ke,{count:(l==null?void 0:l.results)||0,eventCategory:"object storage keys table",handlePageChange:c.handlePageChange,handleSizeChange:c.handlePageSizeChange,page:c.page,pageSize:c.pageSize}),e.jsx(Ye,{isRestrictedUser:t.isRestrictedUser,mode:p,objectStorageKey:C||void 0,onClose:a,onSubmit:p==="creating"?L:q,open:s}),e.jsx(as,{objectStorageKey:C,onClose:y.close,open:y.isOpen}),e.jsx(Re,{objectStorageKey:v,onClose:P.close,open:P.isOpen,title:"Access Keys"}),e.jsx(es,{errors:M,handleClose:z,handleSubmit:B,isLoading:N,isOpen:_.isOpen,label:(A==null?void 0:A.label)||"",numAccessKeys:(l==null?void 0:l.results)||0})]})};export{Ms as AccessKeyLanding};