import{aW as Y,j as t,G as y,B as F,d0 as O,T as k,bB as R,bN as H,bz as K,$ as X,s as T,ag as A,cx as q,c as v,dh as D,dr as M,al as L,ad as _,dX as J,u as Z,r as w,f as ee,dE as te,ak as N,_ as ae,mF as se,bI as ne,K as re,b1 as oe,iU as V,mG as ie,b as le,bp as de}from"./index-cVx9Zqte.js";import{L as ue}from"./LinodePermissionsError-pDRXYuC4.js";import{u as W}from"./formik.esm-XrBweJub.js";import{g as ce}from"./getAPIErrorFor-tzBGcA7R.js";import{T as $}from"./Toggle-GPvvuUvh.js";import{T as ge}from"./TypeToConfirmDialog-OLeT3MiC.js";import{u as pe,e as he}from"./disks-JZFpnfFj.js";import"./TypeToConfirm-c9PkDm3L.js";const xe=g=>{const n=Y(),{copy:r,endAdornment:a,error:e,onStateChange:l,onValueChange:p,readOnly:h,state:i,textTitle:d,title:s,value:u}=g;return t.jsxs(t.Fragment,{children:[t.jsxs(y,{sx:{"&:last-of-type":{marginBottom:0},"&:last-of-type + hr":{display:"none"},alignItems:"flex-start",flex:1,marginBottom:n.spacing(2)},container:!0,"data-qa-alerts-panel":!0,spacing:2,children:[t.jsxs(y,{sx:{display:"flex",flexDirection:"column"},lg:7,md:9,xs:12,children:[t.jsx(F,{children:t.jsx(O,{control:t.jsx($,{checked:i,disabled:h,onChange:l}),sx:{"& > span:last-child":{...n.typography.h3},".MuiFormControlLabel-label":{paddingLeft:"12px"}},"data-qa-alert":s,label:s})}),t.jsx(F,{sx:{paddingLeft:"70px",[n.breakpoints.down("md")]:{marginTop:"-12px"}},children:t.jsx(k,{children:r})})]}),t.jsx(y,{sx:{paddingBottom:"0",paddingTop:"0",[n.breakpoints.down("md")]:{paddingLeft:"78px"}},lg:5,md:3,xs:12,children:t.jsx(R,{InputProps:{endAdornment:t.jsx(H,{position:"end",children:a})},sx:{".MuiInput-root":{animation:`${K} .3s ease-in-out forwards`,marginTop:0,maxWidth:150}},disabled:!i||h,error:!!e,errorText:e,label:d,max:1/0,min:0,onChange:p,type:"number",value:u})})]}),t.jsx(X,{})]})},fe=g=>{const{isReadOnly:n,linodeId:r}=g,{enqueueSnackbar:a}=q(),{data:e}=v(r),{error:l,isLoading:p,mutateAsync:h}=D(r),{data:i}=M((e==null?void 0:e.type)??"",!!(e!=null&&e.type)),d=(i==null?void 0:i.class)==="metal",s=W({enableReinitialize:!0,initialValues:{cpu:(e==null?void 0:e.alerts.cpu)??0,io:(e==null?void 0:e.alerts.io)??0,network_in:(e==null?void 0:e.alerts.network_in)??0,network_out:(e==null?void 0:e.alerts.network_out)??0,transfer_quota:(e==null?void 0:e.alerts.transfer_quota)??0},async onSubmit({cpu:o,io:c,network_in:I,network_out:P,transfer_quota:b}){await h({alerts:{cpu:d?void 0:o,io:c,network_in:d?void 0:I,network_out:P,transfer_quota:b}}),a(`Successfully updated alert settings for ${e==null?void 0:e.label}`,{variant:"success"})}}),u=ce({"alerts.cpu":"CPU","alerts.io":"Disk I/O rate","alerts.network_in":"Incoming traffic","alerts.network_out":"Outbound traffic","alerts.transfer_quota":"Transfer quota"},l??void 0),m=[{copy:"Average CPU usage over 2 hours exceeding this value triggers this alert.",endAdornment:"%",error:u("alerts.cpu"),hidden:d,onStateChange:(o,c)=>s.setFieldValue("cpu",c?e!=null&&e.alerts.cpu?e==null?void 0:e.alerts.cpu:90*((e==null?void 0:e.specs.vcpus)??1):0),onValueChange:o=>s.setFieldValue("cpu",o.target.valueAsNumber),radioInputLabel:"cpu_usage_state",state:s.values.cpu>0,textInputLabel:"cpu_usage_threshold",textTitle:"Usage Threshold",title:"CPU Usage",value:s.values.cpu},{copy:"Average Disk I/O ops/sec over 2 hours exceeding this value triggers this alert.",endAdornment:"IOPS",error:u("alerts.io"),hidden:d,onStateChange:(o,c)=>s.setFieldValue("io",c?e!=null&&e.alerts.io?e==null?void 0:e.alerts.io:1e4:0),onValueChange:o=>s.setFieldValue("io",o.target.valueAsNumber),radioInputLabel:"disk_io_state",state:s.values.io>0,textInputLabel:"disk_io_threshold",textTitle:"I/O Threshold",title:"Disk I/O Rate",value:s.values.io},{copy:`Average incoming traffic over a 2 hour period exceeding this value triggers this
        alert.`,endAdornment:"Mb/s",error:u("alerts.network_in"),onStateChange:(o,c)=>s.setFieldValue("network_in",c?e!=null&&e.alerts.network_in?e==null?void 0:e.alerts.network_in:10:0),onValueChange:o=>s.setFieldValue("network_in",o.target.valueAsNumber),radioInputLabel:"incoming_traffic_state",state:s.values.network_in>0,textInputLabel:"incoming_traffic_threshold",textTitle:"Traffic Threshold",title:"Incoming Traffic",value:s.values.network_in},{copy:`Average outbound traffic over a 2 hour period exceeding this value triggers this
        alert.`,endAdornment:"Mb/s",error:u("alerts.network_out"),onStateChange:(o,c)=>s.setFieldValue("network_out",c?e!=null&&e.alerts.network_out?e==null?void 0:e.alerts.network_out:10:0),onValueChange:o=>s.setFieldValue("network_out",o.target.valueAsNumber),radioInputLabel:"outbound_traffic_state",state:s.values.network_out>0,textInputLabel:"outbound_traffic_threshold",textTitle:"Traffic Threshold",title:"Outbound Traffic",value:s.values.network_out},{copy:`Percentage of network transfer quota used being greater than this value will trigger
          this alert.`,endAdornment:"%",error:u("alerts.transfer_quota"),onStateChange:(o,c)=>s.setFieldValue("transfer_quota",c?e!=null&&e.alerts.transfer_quota?e==null?void 0:e.alerts.transfer_quota:80:0),onValueChange:o=>s.setFieldValue("transfer_quota",o.target.valueAsNumber),radioInputLabel:"transfer_quota_state",state:s.values.transfer_quota>0,textInputLabel:"transfer_quota_threshold",textTitle:"Quota Threshold",title:"Transfer Quota",value:s.values.transfer_quota}].filter(o=>!o.hidden),S=()=>t.jsx(me,{primaryButtonProps:{"data-testid":"alerts-save",disabled:n||!s.dirty,label:"Save",loading:p,onClick:()=>s.handleSubmit()}}),j=u("none");return t.jsxs(L,{actions:S,defaultExpanded:!0,heading:"Notification Thresholds",children:[j&&t.jsx(_,{variant:"error",children:j}),m.map((o,c)=>t.jsx(xe,{...o,readOnly:n},c))]})},me=T(A,{label:"StyledActionsPanel"})({justifyContent:"flex-start",margin:0}),be=g=>{const{isReadOnly:n,linodeId:r}=g,{data:a}=v(r),{error:e,isLoading:l,mutateAsync:p}=J(r),h=Z(),[i,d]=w.useState(!1),s=async()=>{await p(),te(),h.push("/linodes")};return t.jsxs(w.Fragment,{children:[t.jsxs(L,{defaultExpanded:!0,heading:"Delete Linode",children:[t.jsx(ee,{buttonType:"primary","data-qa-delete-linode":!0,disabled:n,onClick:()=>d(!0),style:{marginBottom:8},children:"Delete"}),t.jsx(k,{variant:"body1",children:"Deleting a Linode will result in permanent data loss."})]}),t.jsx(ge,{entity:{action:"deletion",name:a==null?void 0:a.label,primaryBtnText:"Delete",type:"Linode"},errors:e,label:"Linode Label",loading:l,onClick:s,onClose:()=>d(!1),open:i,title:`Delete ${a==null?void 0:a.label}?`,children:t.jsx(_,{variant:"warning",children:t.jsxs(k,{style:{fontSize:"0.875rem"},children:[t.jsx("strong",{children:"Warning:"})," Deleting your Linode will result in permanent data loss."]})})})]})},ye=g=>{const{isReadOnly:n,linodeId:r}=g,{enqueueSnackbar:a}=q(),{data:e}=v(r),{error:l,isLoading:p,mutateAsync:h}=D(r),i=W({enableReinitialize:!0,initialValues:{label:(e==null?void 0:e.label)??""},async onSubmit({label:m}){await h({label:m}),a(`Successfully updated Linode label to ${m}`,{variant:"success"})}}),d=N(["label"],l),s=d.label,u=d.none;return t.jsxs(L,{actions:()=>t.jsx(we,{primaryButtonProps:{"data-testid":"label-save",disabled:n||!i.dirty,label:"Save",loading:p,onClick:()=>i.handleSubmit()}}),defaultExpanded:!0,heading:"Linode Label",children:[!!u&&t.jsx(_,{text:u,variant:"error"}),t.jsx(R,{"data-qa-label":!0,disabled:n,errorGroup:"linode-settings-label",errorText:s,label:"Label",name:"label",onChange:i.handleChange,value:i.values.label})]})},we=T(A,{label:"StyledActionsPanel"})({justifyContent:"flex-start",margin:0}),ve=w.lazy(()=>ae(()=>import("./PasswordInput-3GoVYZAt.js"),__vite__mapDeps([0,1,2,3]))),Le=g=>{const{isReadOnly:n,linodeId:r}=g,{data:a}=v(r),{data:e,error:l,isLoading:p}=pe(r),{enqueueSnackbar:h}=q(),{data:i}=M((a==null?void 0:a.type)??"",!!(a!=null&&a.type)),[d,s]=w.useState(null),[u,m]=w.useState(""),{error:S,isLoading:j,mutateAsync:o}=se(r),{error:c,isLoading:I,mutateAsync:P}=he(r,d??-1),b=(i==null?void 0:i.class)==="metal",U=b?j:I,z=b?S:c,G=async()=>{b?await o({root_pass:u}):await P({password:u}),m(""),h("Sucessfully changed password",{variant:"success"})},C=N(["root_pass","password"],z),E=b?C.root_pass:C.password,B=C.none,f=e==null?void 0:e.filter(x=>x.filesystem!=="swap").map(x=>({label:x.label,value:x.id}));w.useEffect(()=>{f!==void 0&&f.length===1&&s(f[0].value)},[f]);const Q=t.jsx(_e,{primaryButtonProps:{"data-testid":"password - save",disabled:n||(a==null?void 0:a.status)!=="offline",label:"Save",loading:U,onClick:G,tooltipText:(a==null?void 0:a.status)!=="offline"?"Your Linode must be fully powered down in order to change your root password":""}});return t.jsx(L,{actions:()=>Q,defaultExpanded:!0,heading:"Reset Root Password",children:t.jsxs("form",{children:[B&&t.jsx(_,{text:B,variant:"error"}),b?null:t.jsx(ne,{"data-qa-select-linode":!0,disabled:n,errorText:l==null?void 0:l[0].reason,isClearable:!1,isLoading:p,label:"Disk",onChange:x=>s(x.value),options:f,placeholder:"Select a Disk",value:f==null?void 0:f.find(x=>x.value===d)}),t.jsx(w.Suspense,{fallback:t.jsx(re,{}),children:t.jsx(ve,{disabledReason:n?"You don't have permissions to modify this Linode":void 0,autoComplete:"new-password","data-qa-password-input":!0,disabled:n,error:!!E,errorGroup:"linode-settings-password",errorText:E,label:"New Root Password",onChange:x=>m(x.target.value),value:u})})]})})},_e=T(A,{label:"StyledActionsPanel"})({justifyContent:"flex-start",margin:0}),je=g=>{const{isReadOnly:n,linodeId:r}=g,{data:a}=v(r),{error:e,isLoading:l,mutateAsync:p}=D(r);return t.jsx(L,{"data-qa-watchdog-panel":!0,defaultExpanded:!0,heading:"Shutdown Watchdog",children:t.jsxs(y,{alignItems:"center",container:!0,spacing:2,children:[!!e&&t.jsx(y,{xs:12,children:t.jsx(_,{text:e==null?void 0:e[0].reason,variant:"error"})}),t.jsx(y,{md:2,xs:12,children:t.jsx(O,{"aria-label":a!=null&&a.watchdog_enabled?"Shutdown Watchdog is enabled":"Shutdown Watchdog is disabled",control:t.jsx($,{onChange:(h,i)=>p({watchdog_enabled:i}),checked:(a==null?void 0:a.watchdog_enabled)??!1,"data-qa-watchdog-toggle":(a==null?void 0:a.watchdog_enabled)??!1}),label:t.jsxs(oe,{alignItems:"center",direction:"row",spacing:1,children:[t.jsx(V,{children:a!=null&&a.watchdog_enabled?"Enabled":"Disabled"}),t.jsx(V,{children:l&&t.jsx(ie,{size:16})})]}),disabled:n})}),t.jsx(y,{lg:8,md:10,xl:6,xs:12,children:t.jsx(k,{"data-qa-watchdog-desc":!0,children:"Shutdown Watchdog, also known as Lassie, is a Linode Manager feature capable of automatically rebooting your Linode if it powers off unexpectedly. Lassie is not technically an availability monitoring tool, but it can help get your Linode back online fast if it’s accidentally powered off."})})]})})},De=()=>{var e;const{linodeId:g}=le(),n=Number(g),{data:r}=de(),a=r!==void 0&&((e=r==null?void 0:r.linode.find(l=>l.id===n))==null?void 0:e.permissions)==="read_only";return t.jsxs(t.Fragment,{children:[a&&t.jsx(ue,{}),t.jsx(ye,{isReadOnly:a,linodeId:n}),t.jsx(Le,{isReadOnly:a,linodeId:n}),t.jsx(fe,{isReadOnly:a,linodeId:n}),t.jsx(je,{isReadOnly:a,linodeId:n}),t.jsx(be,{isReadOnly:a,linodeId:n})]})};export{De as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PasswordInput-3GoVYZAt.js","assets/index-cVx9Zqte.js","assets/index-RL6WRErT.css","assets/main-d_A-GefV.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}