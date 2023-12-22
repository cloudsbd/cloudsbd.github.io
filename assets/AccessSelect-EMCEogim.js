import{j as e,a1 as j,r as s,aq as G,bM as B,ad as R,bI as J,T as D,d0 as K,ag as U,af as Q,s as V,f as X}from"./index-cVx9Zqte.js";import{T as Y}from"./Toggle-GPvvuUvh.js";import{u as Z}from"./useOpenClose-nIo3Pywg.js";import{b as _,o as ee}from"./utilities-QIVW8bV0.js";const te={bucket:{"authenticated-read":e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"All authenticated Object Storage users "})," can list Objects in this Bucket, but only you can create, overwrite, and delete them."]}),custom:e.jsxs(e.Fragment,{children:["This Bucket has a custom ACL. Use"," ",e.jsx(j,{to:"https://www.linode.com/docs/guides/how-to-use-object-storage/#object-storage-tools",children:"another S3-compatible tool"})," ","to edit the ACL, or select a pre-defined ACL here."]}),private:e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Only you"})," can list, create, overwrite, and delete Objects in this Bucket."]}),"public-read":e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Everyone "})," can list Objects in this Bucket, but only you can create, overwrite, and delete them."]}),"public-read-write":e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Everyone "})," can list, create, overwrite, and delete Objects in this Bucket. ",e.jsx("strong",{children:"This is not recommended."})]})},object:{"authenticated-read":e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"All authenticated Object Storage users "})," can download this Object."]}),custom:e.jsxs(e.Fragment,{children:["This Object has a custom ACL. Use another"," ",e.jsx(j,{to:"https://www.linode.com/docs/guides/how-to-use-object-storage/#object-storage-tools",children:"S3-compatible tool"})," ","to edit the ACL, or select a predefined ACL."]}),private:e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Only you"})," can download this Object."]}),"public-read":e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Everyone "})," can download this Object."]})}},ne=s.memo(i=>{var F;const{getAccess:m,name:x,updateAccess:P,variant:o}=i,[f,C]=s.useState(null),[W,S]=s.useState(!0),[c,d]=s.useState(!1),[$,u]=s.useState(""),[a,A]=s.useState(null),[n,y]=s.useState(!0),[q,h]=s.useState(!1),[z,l]=s.useState(""),[H,r]=s.useState(!1),{close:p,isOpen:I,open:M}=Z(),O=G(o);s.useEffect(()=>{l(""),u(""),r(!1),d(!0),m().then(({acl:t,cors_enabled:b})=>{d(!1);const T=o==="object"&&t==="public-read-write"?"custom":t;C(T),A(T),typeof b<"u"&&(S(b),y(b))}).catch(t=>{d(!1),u(B(t))})},[m,o]);const w=()=>{!x||!a||(r(!1),h(!0),l(""),u(""),p(),P(a,n).then(()=>{r(!0),C(a),S(n),h(!1)}).catch(t=>{h(!1),l(B(t))}))},L=o==="bucket"?_:ee,g=f==="custom"?[{label:"Custom",value:"custom"},...L]:L,v=(F=g.find(t=>t.value===a))==null?void 0:F.label,k=a?te[o][a]:null,E=$||z,N=c?"Loading access...":n?"CORS Enabled":"CORS Disabled";return e.jsxs(e.Fragment,{children:[H?e.jsx(R,{text:`${O} access updated successfully.`,variant:"success"}):null,E?e.jsx(R,{text:E,variant:"error"}):null,e.jsx(J,{onChange:t=>{t&&(r(!1),l(""),A(t.value))},value:g.find(t=>t.value===a),"data-testid":"acl-select",disabled:c,isClearable:!1,isLoading:c,label:"Access Control List (ACL)",options:g,placeholder:c?"Loading access...":"Select an ACL..."}),e.jsx("div",{style:{marginTop:8,minHeight:16},children:v&&k?e.jsxs(D,{children:[v,": ",k]}):null}),o==="bucket"?e.jsx(K,{control:e.jsx(Y,{checked:n,disabled:c,onChange:()=>y(t=>!t)}),label:N,style:{display:"block",marginTop:16}}):null,o==="bucket"?e.jsxs(D,{children:["Whether Cross-Origin Resource Sharing is enabled for all origins. For more fine-grained control of CORS, please use another"," ",e.jsx(j,{to:"https://www.linode.com/docs/guides/how-to-use-object-storage/#object-storage-tools",children:"S3-compatible tool"}),"."]}):null,e.jsx(U,{primaryButtonProps:{disabled:f===a&&W===n,label:"Save",loading:q,onClick:()=>{a==="public-read-write"?M():w()},sx:t=>({marginTop:t.spacing(3)})},style:{padding:0}}),e.jsxs(Q,{actions:()=>e.jsx(U,{secondaryButtonProps:{"data-testid":"cancel",label:"Cancel",onClick:p},primaryButtonProps:{label:"Confirm",onClick:w},style:{padding:0}}),onClose:p,open:I,title:`Confirm ${O} Access`,children:["Are you sure you want to set access for ",x," to Public Read/Write? Everyone will be able to list, create, overwrite, and delete Objects in this Bucket. ",e.jsx("strong",{children:"This is not recommended."})]})]})});V(X,{label:"StyledFileUploadsContainer"})(({theme:i})=>({marginTop:i.spacing(3)}));export{ne as A};