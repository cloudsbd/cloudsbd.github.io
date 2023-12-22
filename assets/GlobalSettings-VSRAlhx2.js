import{m as A,j as e,al as w,G as s,ad as S,T as m,a1 as C,d0 as B,s as E,r as a,u as $,ao as T,bB as N,l2 as _,f as v,av as M,cR as q,af as F,cn as W,eq as z,ag as H,l3 as I,l4 as O,l5 as Q,l6 as L,dg as U,N as G,cx as K,e4 as R,C as Y,E as J,an as V}from"./index-cVx9Zqte.js";import{B as X}from"./BackupDrawer-VB7t5kfM.js";import{T as D}from"./Toggle-GPvvuUvh.js";import{T as P}from"./TypeToConfirmDialog-OLeT3MiC.js";import"./DisplayPrice-m9AmNFV_.js";import"./Currency-UAWCzS7H.js";import"./Drawer-Zv-UzsLT.js";import"./TableRow-WjckZ-OR.js";import"./TableRowError-VT_K71YW.js";import"./TableRowLoading-enpzcj9B.js";import"./Skeleton-Ei33_jCb.js";import"./backups-brLSog0e.js";import"./constants-KokzTiEs.js";import"./TableHead-aAnFvqns.js";import"./TypeToConfirm-c9PkDm3L.js";const Z=A()(n=>({enableBackupsButton:{...n.applyLinkStyles,fontSize:"0.875rem"},footnote:{cursor:"pointer",fontSize:"0.875rem"},icon:{display:"inline-block",fontSize:"0.8em",marginLeft:`calc(${n.spacing(1)} / 3)`}})),ee=n=>{const{backups_enabled:t,hasLinodesWithoutBackups:i,isManagedCustomer:o,onChange:d,openBackupsDrawer:r}=n,{classes:u}=Z();return e.jsx(w,{defaultExpanded:!0,heading:"Backup Auto Enrollment",children:e.jsxs(s,{container:!0,direction:"column",spacing:2,children:[e.jsxs(s,{children:[o?e.jsx(S,{spacingBottom:20,variant:"info",children:"You’re a Managed customer, which means your Linodes are already automatically backed up - no need to toggle this setting."}):null,e.jsxs(m,{variant:"body1",children:["This controls whether Linode Backups are enabled, by default, for all Linodes when they are initially created. For each Linode with Backups enabled, your account will be billed the additional hourly rate noted on the ",e.jsx(C,{"data-qa-backups-price":!0,to:"https://www.linode.com/products/backups/",children:"Backups pricing page"}),"."]})]}),e.jsx(s,{alignItems:"center",container:!0,direction:"row",children:e.jsx(s,{children:e.jsx(B,{control:e.jsx(D,{checked:o?!0:t,"data-qa-toggle-auto-backup":!0,disabled:!!o,onChange:d}),label:t||o?"Enabled (Auto enroll all new Linodes in Backups)":"Disabled (Don’t enroll new Linodes in Backups automatically)"})})}),!o&&!t&&i&&e.jsx(s,{children:e.jsxs(m,{className:u.footnote,variant:"body1",children:["For existing Linodes without backups, ",e.jsx("button",{className:u.enableBackupsButton,"data-qa-backup-existing":!0,onClick:r,children:"enable now"}),"."]})})]})})},te=A()(n=>({dontgo:{marginTop:n.spacing(2),order:1}})),ne=({closeDialog:n,open:t})=>{const[i,o]=a.useState(!1),[d,r]=a.useState(void 0),[u,b]=a.useState(""),[g,p]=a.useState(""),[x,l]=a.useState(!1),{classes:j}=te(),y=$(),{data:c}=T();a.useEffect(()=>{t&&(r(void 0),p(""),l(!1))},[t]),a.useEffect(()=>{g===(c==null?void 0:c.username)?l(!0):l(!1)},[g,c]);const k=a.useCallback(h=>{h&&h.focus&&t===!0&&h.focus()},[t]),f=()=>(o(!0),_({comments:u}).then(h=>{o(!1),y.push("/cancel",{survey_link:h.survey_link})}).catch(h=>{o(!1),r(h)}));return c!=null&&c.username?e.jsxs(P,{entity:{name:c.username,primaryBtnText:"Close Account",subType:"CloseAccount",type:"AccountSetting"},disabled:!x,inputRef:k,label:`Please enter your Username (${c.username}) to confirm.`,loading:i,onClick:f,onClose:n,open:t,textFieldStyle:{maxWidth:"415px"},title:"Are you sure you want to close your Linode account?",children:[d?e.jsx(S,{text:d?d[0].reason:"",variant:"error"}):null,e.jsx(ae,{children:e.jsx(S,{spacingBottom:12,variant:"warning",children:e.jsxs(m,{sx:{fontSize:"0.875rem"},children:[e.jsx("strong",{children:"Warning:"})," Please note this is an extremely destructive action. Closing your account means that all services Linodes, Volumes, DNS Records, etc will be lost and may not be able be restored."]})})}),e.jsx(m,{className:j.dontgo,children:"We’d hate to see you go. Please let us know what we could be doing better in the comments section below. After your account is closed, you’ll be directed to a quick survey so we can better gauge your feedback."}),e.jsx(oe,{children:e.jsx(N,{"aria-label":"Optional comments field",label:"Comments",multiline:!0,onChange:h=>b(h.target.value),optional:!0,placeholder:"Provide Feedback",rows:1,value:u})})]}):null},ae=E("div")(()=>({order:0})),oe=E("div")(()=>({order:2})),se=a.memo(ne),re=()=>{const[n,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(w,{defaultExpanded:!0,heading:"Close Account",children:e.jsx(s,{container:!0,direction:"column",children:e.jsx(s,{children:e.jsx(v,{buttonType:"outlined",onClick:()=>t(!0),children:"Close Account"})})})}),e.jsx(se,{closeDialog:()=>t(!1),open:n})]})},ce=a.memo(re),ie=n=>{const{isManaged:t,openConfirmationModal:i}=n;return t?e.jsxs(m,{children:["Managed is already enabled on your account. To cancel Linode Managed, please open a "," ",e.jsx(z,{text:"Support Ticket",title:"Cancel Linode Managed"}),"."]}):e.jsxs(s,{container:!0,direction:"column",spacing:2,children:[e.jsx(s,{children:e.jsxs(m,{variant:"body1",children:["Linode Managed includes Backups, Longview Pro, cPanel, and round-the-clock monitoring to help keep your systems up and running. +$100/month per Linode.","  ",e.jsx(C,{to:"https://linode.com/managed",children:"Learn more"}),"."]})}),e.jsx(s,{children:e.jsx(v,{buttonType:"outlined",onClick:i,children:"Add Linode Managed"})})]})},le=n=>{const{isManaged:t}=n,i=M(),{data:o}=q(),[d,r]=a.useState(!1),[u,b]=a.useState(),[g,p]=a.useState(!1),x=(o==null?void 0:o.results)??0,l=()=>{r(!1),b(void 0)},j=k=>{b(k[0].reason),p(!1)},y=()=>{p(!0),b(void 0),I().then(()=>{l(),O({managed:!0},i)}).catch(j)},c=e.jsx(H,{primaryButtonProps:{"data-testid":"submit-managed-enrollment",label:"Add Linode Managed",loading:g,onClick:y},secondaryButtonProps:{"data-testid":"cancel",label:"Cancel",onClick:l}});return e.jsxs(e.Fragment,{children:[e.jsx(w,{defaultExpanded:!0,heading:"Linode Managed",children:e.jsx(ie,{isManaged:t,openConfirmationModal:()=>r(!0)})}),e.jsx(F,{actions:c,error:u,onClose:()=>l(),open:d,title:"Just to confirm...",children:e.jsxs(m,{variant:"subtitle1",children:["Linode Managed costs an additional"," ",e.jsx("strong",{children:"$100 per month per Linode."})," "," ","You currently have"," ",e.jsx("strong",{children:W("Linode","Linodes",x)}),", so Managed will increase your projected monthly bill by"," ",e.jsxs("strong",{children:["$",`${x*100}`]}),"."]})})]})},de=n=>{const{object_storage:t,openConfirmationModal:i}=n;return t!=="disabled"?e.jsxs(s,{container:!0,direction:"column",spacing:2,children:[e.jsx(s,{children:e.jsx(m,{variant:"body1",children:"Object Storage is enabled on your account. Upon cancellation, all Object Storage Access Keys will be revoked, all buckets will be removed, and their objects deleted."})}),e.jsx(s,{children:e.jsx(v,{buttonType:"outlined","data-testid":"open-dialog-button",onClick:i,children:"Cancel Object Storage"})})]}):e.jsxs(m,{variant:"body1",children:["Content storage and delivery for unstructured data. Great for multimedia, static sites, software delivery, archives, and data backups. ",e.jsx("br",{}),"To get started with Object Storage, create a"," ",e.jsx(C,{to:"/object-storage/buckets",children:"Bucket"})," or an"," ",e.jsx(C,{to:"/object-storage/access-keys",children:"Access Key."})," ",e.jsx(C,{to:"https://www.linode.com/docs/platform/object-storage/",children:"Learn more"}),"."]})},ue=n=>{const{object_storage:t}=n,[i,o]=a.useState(!1),[d,r]=a.useState(),[u,b]=a.useState(!1),{data:g}=T(),p=M(),x=g==null?void 0:g.username,l=()=>{o(!1),r(void 0)},j=c=>{r(c[0].reason),b(!1)},y=()=>{b(!0),r(void 0),Q().then(()=>{O({object_storage:"disabled"},p),l(),p.invalidateQueries(`${L}-buckets`),p.invalidateQueries(`${L}-access-keys`)}).catch(j)};return e.jsxs(e.Fragment,{children:[e.jsx(w,{defaultExpanded:!0,heading:"Object Storage",children:e.jsx(de,{object_storage:t,openConfirmationModal:()=>o(!0)})}),e.jsxs(P,{entity:{action:"cancellation",name:x,primaryBtnText:"Confirm Cancellation",subType:"ObjectStorage",type:"AccountSetting"},label:"Username",loading:u,onClick:y,onClose:l,open:i,title:"Cancel Object Storage",children:[d?e.jsx(S,{text:d,variant:"error"}):null,e.jsx(S,{variant:"warning",children:e.jsxs(m,{sx:{fontSize:"0.875rem"},children:[e.jsx("strong",{children:"Warning:"})," Canceling Object Storage will permanently delete all buckets and their objects. Object Storage Access Keys will be revoked."]})})]})]})},ge=a.memo(ue),pe=({networkHelperEnabled:n,onChange:t})=>e.jsx(w,{defaultExpanded:!0,heading:"Network Helper",children:e.jsxs(s,{container:!0,direction:"column",spacing:2,children:[e.jsx(s,{children:e.jsx(m,{variant:"body1",children:"Network Helper automatically deposits a static networking configuration into your Linode at boot."})}),e.jsx(s,{alignItems:"center",container:!0,direction:"row",children:e.jsx(s,{children:e.jsx(B,{control:e.jsx(D,{checked:n,"data-qa-toggle-network-helper":!0,onChange:t}),label:n?"Enabled (default behavior)":"Disabled"})})})]})}),Ee=()=>{const[n,t]=a.useState(!1),{data:i,error:o,isLoading:d}=U(),{data:r}=G(),u=(r==null?void 0:r.some(f=>!f.backups.enabled))??!1,{enqueueSnackbar:b}=K(),{mutateAsync:g}=R(),p=f=>{if(!f)return;const h=V(f,"There was an error updating your account settings.")[0].reason;return b(h,{variant:"error"})};if(d)return e.jsx(Y,{});if(o)return e.jsx(J,{errorText:"There was an error retrieving your account data."});if(!i)return null;const{backups_enabled:x,managed:l,network_helper:j,object_storage:y}=i,c=()=>{g({backups_enabled:!x}).catch(p)},k=()=>{g({network_helper:!j}).catch(p)};return e.jsxs("div",{children:[e.jsx(ee,{backups_enabled:x,hasLinodesWithoutBackups:u,isManagedCustomer:l,onChange:c,openBackupsDrawer:()=>t(!0)}),e.jsx(pe,{networkHelperEnabled:j,onChange:k}),e.jsx(ge,{object_storage:y}),e.jsx(le,{isManaged:l}),e.jsx(ce,{}),e.jsx(X,{onClose:()=>t(!1),open:n})]})};export{Ee as default};
