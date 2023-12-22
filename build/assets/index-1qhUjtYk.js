import{r as l,_ as u,u as D,b as P,kk as S,kl as C,km as k,j as a,E as $,an as p,C as A,Q as I,bq as O}from"./index-cVx9Zqte.js";import{L as N}from"./LandingHeader--0FiA91-.js";import{S as i}from"./SafeTabPanel-mYwDHsH9.js";import{T as v}from"./TabLinkList-d9SkE5Nv.js";import{a as R,T as w}from"./TabList-Vcpmm6u6.js";import{u as z}from"./useEditableLabelState-sViKJWQc.js";const B=l.lazy(()=>u(()=>import("./index-0Qvgfs_y.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]))),H=l.lazy(()=>u(()=>import("./index--BKY9N4o.js"),__vite__mapDeps([24,1,2,6,25,26,27,28,29,30,31,32,33,34,35,5,36]))),Q=l.lazy(()=>u(()=>import("./index-venuVbRm.js"),__vite__mapDeps([37,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,33,34,38,39,40]))),U=()=>{const b=D(),{databaseId:x,engine:t}=P(),s=Number(x),{data:e,error:d,isLoading:h}=S(t,s),{isLoading:g}=C(),{mutateAsync:_}=k(t,s),{editableLabelError:E,resetEditableLabel:m,setEditableLabelError:T}=z();if(d)return a.jsx($,{errorText:p(d,"Error loading your database.")[0].reason});if(h||g)return a.jsx(A,{});if(!e)return null;const n=[{routeName:`/databases/${t}/${s}/summary`,title:"Summary"},{routeName:`/databases/${t}/${s}/backups`,title:"Backups"},{routeName:`/databases/${t}/${s}/settings`,title:"Settings"}],j=()=>{const r=n.findIndex(o=>!!O(o.routeName,{path:location.pathname}));return r<0?(b.push(`/databases/${t}/${s}`),0):r},L=r=>{b.push(n[r].routeName)},f=r=>_({allow_list:e.allow_list,label:r}).then(()=>{m()}).catch(o=>{const c=p(o,"An error occurred while updating label","label").map(y=>y.reason);return T(c[0]),Promise.reject(c[0])});return a.jsxs(a.Fragment,{children:[a.jsx(I,{segment:e.label}),a.jsx(N,{breadcrumbProps:{crumbOverrides:[{label:"Database Clusters",position:1}],firstAndLastOnly:!0,labelOptions:{noCap:!0},onEditHandlers:{editableTextTitle:e.label,errorText:E,onCancel:m,onEdit:f},pathname:location.pathname},title:e.label}),a.jsxs(R,{index:j(),onChange:L,children:[a.jsx(v,{tabs:n}),a.jsxs(w,{children:[a.jsx(i,{index:0,children:a.jsx(B,{database:e})}),a.jsx(i,{index:1,children:a.jsx(H,{})}),a.jsx(i,{index:2,children:a.jsx(Q,{database:e})})]})]})]})};export{U as DatabaseDetail,U as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-0Qvgfs_y.js","assets/index-cVx9Zqte.js","assets/index-RL6WRErT.css","assets/AccessControls-BkYoidaj.js","assets/AddNewLink-EuioEAZT.js","assets/InlineMenuAction-1MvHCfFL.js","assets/TableRow-WjckZ-OR.js","assets/ipUtils-8Z2b8Iiq.js","assets/ipaddr-2fi-A9R9.js","assets/formik.esm-XrBweJub.js","assets/Drawer-Zv-UzsLT.js","assets/MultipleIPInput-pKW7t-_Q.js","assets/FirewallRuleDrawer.utils-titeLSws.js","assets/uniq-ZuGeDKAp.js","assets/_contains-cAWwaXdv.js","assets/shared-nfxHZAvQ.js","assets/sortBy-6kuAXIsZ.js","assets/formikErrorUtils-k3dWKVdg.js","assets/StatusIcon-d7wUM4gj.js","assets/DatabaseRow-WRvpBw7P.js","assets/lke-download-TdJ57SAK.js","assets/CopyTooltip-nIZAIwkd.js","assets/index-nat4f1EQ.js","assets/downloadFile-7KribbgA.js","assets/index--BKY9N4o.js","assets/TableRowEmpty-HXunljlo.js","assets/TableRowError-VT_K71YW.js","assets/TableRowLoading-enpzcj9B.js","assets/Skeleton-Ei33_jCb.js","assets/TableSortCell-N7Qxf5YK.js","assets/useOrder-iGt70Yxe.js","assets/OrderBy-9siuTGWJ.js","assets/splitAt-OlbwoBj3.js","assets/TypeToConfirmDialog-OLeT3MiC.js","assets/TypeToConfirm-c9PkDm3L.js","assets/DateTimeDisplay-Ll7y9Gvy.js","assets/TableHead-aAnFvqns.js","assets/index-venuVbRm.js","assets/Radio-9QvviwDe.js","assets/FormControl-r0VmXCL0.js","assets/RadioGroup-2qEaOjEa.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}