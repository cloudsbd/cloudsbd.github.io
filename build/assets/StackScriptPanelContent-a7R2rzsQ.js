import{aW as T,bD as w,ao as L,u as A,j as e,W as j,jI as M,T as f,bp as I,C as v,jH as U,ap as q,g as B,r as h,cx as _,af as P,ag as C,mi as $,jJ as R}from"./index-cVx9Zqte.js";import{j as F,k as E,l as H,m as O,n as W,o as Y,p as z,q as G,e as N,h as Q,w as J}from"./CommonStackScript.styles-G8qJvONR.js";import{a as D,c as K,T as V}from"./TableRow-WjckZ-OR.js";import{A as X}from"./ActionMenu-LQcZWhDC.js";import{I as Z}from"./InlineMenuAction-1MvHCfFL.js";import"./index-m2Nl9sJq.js";import"./image.helpers-Yu4Zv1TD.js";import"./RenderGuard-G_iNJx_w.js";import"./TableSortCell-N7Qxf5YK.js";import"./TableHead-aAnFvqns.js";import"./DebouncedSearchTextField-fJN9axDi.js";import"./ResourcesSection-Ho8bmvI2.js";import"./ListItem-HwDJ8kDZ.js";const ee=a=>a.reduce((p,r)=>(r&&p.push(r.replace("linode/","")),p),[]),te=a=>{const p=T(),r=w(p.breakpoints.down("md")),{data:d}=L(),i=A(),{canAddLinodes:n,canModify:c,category:t,isPublic:o,stackScriptID:u,stackScriptLabel:S,stackScriptUsername:m,triggerDelete:s,triggerMakePublic:g}=a,b={disabled:!c,tooltip:c?void 0:"You don't have permissions to modify this StackScript"},k=[t==="account"?{title:"Edit",...b,onClick:()=>{i.push(`/stackscripts/${u}/edit`)}}:null,{disabled:!n,onClick:()=>{i.push(M(m,u,d==null?void 0:d.username))},title:"Deploy New Linode",tooltip:r?n?void 0:"You don't have permissions to add Linodes":void 0},o?null:{title:"Make StackScript Public",...b,onClick:()=>{g(u,S)}},o?null:{title:"Delete",...b,onClick:()=>{s(u,S)}}].filter(Boolean);return e.jsx(e.Fragment,{children:t==="account"||r?e.jsx(X,{actionsList:k,ariaLabel:`Action menu for StackScript ${a.stackScriptLabel}`}):e.jsx(j,{mdDown:!0,children:k.map(l=>e.jsx(Z,{actionText:l.title,disabled:l.disabled,onClick:l.onClick},l.title))})})},ae=a=>{const{canAddLinodes:p,canModify:r,category:d,deploymentsTotal:i,description:n,images:c,isPublic:t,label:o,stackScriptID:u,stackScriptUsername:S,triggerDelete:m,triggerMakePublic:s,updated:g}=a,b=d==="community",k=()=>e.jsxs(e.Fragment,{children:[e.jsx(W,{to:`/stackscripts/${u}`,children:e.jsxs(Y,{variant:"h3",children:[S&&e.jsxs(z,{children:[S," / "]}),e.jsx(G,{children:o})]})}),n&&e.jsx(N,{variant:"body1",children:n})]});return e.jsxs(F,{ariaLabel:o,"data-qa-table-row":o,children:[e.jsx(E,{"data-qa-stackscript-title":!0,children:k()}),e.jsx(D,{children:e.jsx(f,{"data-qa-stackscript-deploys":!0,children:i})}),e.jsx(j,{smDown:!0,children:e.jsx(D,{children:e.jsx(f,{"data-qa-stackscript-revision":!0,children:g})})}),e.jsx(j,{lgDown:!0,children:e.jsx(H,{"data-qa-stackscript-images":!0,children:c.includes("any/all")?"Any/All":c.join(",  ")})}),b?null:e.jsx(j,{lgDown:!0,children:e.jsx(D,{"data-qa-stackscript-status":!0,children:t?"Public":"Private"})}),e.jsx(O,{actionCell:!0,children:e.jsx(te,{canAddLinodes:p,canModify:r,category:d,isPublic:t,stackScriptID:u,stackScriptLabel:o,stackScriptUsername:S,triggerDelete:m,triggerMakePublic:s})})]})},ie=a=>{const{category:p,data:r,isSorting:d,triggerDelete:i,triggerMakePublic:n}=a,{data:c}=L(),{data:t}=I(),o=!!(c!=null&&c.restricted),u=t==null?void 0:t.stackscript,S=o&&(t==null?void 0:t.global.add_linodes),m=s=>e.jsx(ae,{canModify:U(o,u??[],s.id),updated:q(s.updated,{displayTime:!1,timezone:c==null?void 0:c.timezone}),canAddLinodes:!S,category:p,deploymentsTotal:s.deployments_total,description:s.description,images:ee(s.images),isPublic:s.is_public,label:s.label,stackScriptID:s.id,stackScriptUsername:s.username,triggerDelete:i,triggerMakePublic:n},s.id);return e.jsx(K,{children:d?e.jsx(V,{children:e.jsx(Q,{colSpan:5,children:e.jsx(v,{})})}):r&&r.map(m)})},y={delete:{open:!1,submitting:!1},makePublic:{open:!1,submitting:!1},stackScriptID:void 0,stackScriptLabel:""},se=a=>{const{currentFilter:p}=a,[r,d]=h.useState(!1),[i,n]=h.useState(y),{enqueueSnackbar:c}=_();h.useEffect(()=>(d(!0),()=>{d(!1)}),[]);const t=()=>{n({...y})},o=(l,x)=>{n({delete:{open:!0,submitting:!1},makePublic:{open:!1,submitting:!1},stackScriptID:l,stackScriptLabel:x})},u=(l,x)=>{n({delete:{open:!1,submitting:!1},makePublic:{open:!0,submitting:!1},stackScriptID:l,stackScriptLabel:x})},S=()=>{n({...y,delete:{...i.delete,error:void 0,submitting:!0}}),$(i.stackScriptID).then(l=>{r&&(t(),a.getDataAtPage(1,a.currentFilter,!0))}).catch(l=>{r&&n({...y,delete:{error:l[0].reason,open:!0,submitting:!1},makePublic:{open:!1,submitting:!1}})})},m=()=>{R(i.stackScriptID,{is_public:!0}).then(l=>{r&&(t(),c(`${i.stackScriptLabel} successfully published to the public library.`,{variant:"success"}),a.getDataAtPage(1,p,!0))}).catch(l=>{r&&(c(`There was an error publishing ${i.stackScriptLabel} to the public library.`,{variant:"error"}),t())})},s=()=>e.jsx(C,{primaryButtonProps:{label:"Delete StackScript",loading:i.delete.submitting,onClick:S},secondaryButtonProps:{label:"Cancel",onClick:t}}),g=()=>e.jsx(C,{primaryButtonProps:{label:"Yes, make me a star!",onClick:m},secondaryButtonProps:{label:"Cancel",onClick:t}}),b=()=>e.jsx(P,{actions:s,error:i.delete.error,onClose:t,open:i.delete.open,title:`Delete StackScript ${i.stackScriptLabel}?`,children:e.jsx(f,{children:"Are you sure you want to delete this StackScript?"})}),k=()=>e.jsx(P,{actions:g,onClose:t,open:i.makePublic.open,title:"Woah, just a word of caution...",children:e.jsxs(f,{children:["Are you sure you want to make ",i.stackScriptLabel," public? This action cannot be undone, nor will you be able to delete the StackScript once made available to the public."]})});return e.jsxs(h.Fragment,{children:[e.jsx(ie,{category:a.category,currentUser:a.currentUser,data:a.listOfStackScripts,isSorting:a.isSorting,publicImages:a.publicImages,triggerDelete:o,triggerMakePublic:u}),b(),k()]})},he=B(J({isSelecting:!1,useQueryString:!0}))(se);export{se as StackScriptPanelContent,he as default};