import{r as o,_ as i,b as m,hg as d,j as r,C as u,E as _,hh as l}from"./index-cVx9Zqte.js";const D=o.lazy(()=>i(()=>import("./DomainsLanding-zPu8xt6r.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33])).then(a=>({default:a.DomainsLanding}))),x=o.lazy(()=>i(()=>import("./DomainDetail-le3qymaV.js"),__vite__mapDeps([34,1,2,5,35,29,3,4,36,37,10,11,38,6,7,39,40,19,41,42,43,44,14,24,45,31,32,46,21,33,47])).then(a=>({default:a.DomainDetail}))),c=()=>{const a=m(),n=Number(a.domainId),{data:t,error:s,isLoading:e}=d(n);return e?r.jsx(u,{}):s?r.jsx(_,{errorText:"Unable to load this domain."}):t?t.type==="master"?r.jsx(x,{}):r.jsx(D,{domainForEditing:t}):r.jsx(l,{})};export{c as DomainDetailRouting};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DomainsLanding-zPu8xt6r.js","assets/index-cVx9Zqte.js","assets/index-RL6WRErT.css","assets/DeletionDialog-zxtOY8RE.js","assets/TypeToConfirm-c9PkDm3L.js","assets/LandingHeader--0FiA91-.js","assets/PaginationFooter-8MfyrbrN.js","assets/TableRow-WjckZ-OR.js","assets/TableSortCell-N7Qxf5YK.js","assets/useOrder-iGt70Yxe.js","assets/OrderBy-9siuTGWJ.js","assets/splitAt-OlbwoBj3.js","assets/usePagination-oVzoT3VV.js","assets/formik.esm-XrBweJub.js","assets/Drawer-Zv-UzsLT.js","assets/Radio-9QvviwDe.js","assets/RadioGroup-2qEaOjEa.js","assets/DateTimeDisplay-Ll7y9Gvy.js","assets/StatusIcon-d7wUM4gj.js","assets/ActionMenu-LQcZWhDC.js","assets/InlineMenuAction-1MvHCfFL.js","assets/domainUtils-SJqYjUdI.js","assets/ResourcesSection-Ho8bmvI2.js","assets/ListItem-HwDJ8kDZ.js","assets/MultipleIPInput-pKW7t-_Q.js","assets/TagsInput-STVelb0H.js","assets/concat-jPlDnPBS.js","assets/_isFunction-X3ooR5X_.js","assets/_contains-cAWwaXdv.js","assets/tags-i_yRfMC6.js","assets/formikTrimUtil-tfsUpEEv.js","assets/ipUtils-8Z2b8Iiq.js","assets/ipaddr-2fi-A9R9.js","assets/TableHead-aAnFvqns.js","assets/DomainDetail-le3qymaV.js","assets/TagsPanel-k3d7_0ry.js","assets/over-DG6TlI65.js","assets/assocPath-K5W2bQH9.js","assets/Paginate-_mtRUOjJ.js","assets/TableRowEmpty-HXunljlo.js","assets/scrollErrorIntoView-6n4Cku1Y.js","assets/immer.esm--MpJ8fpr.js","assets/cond-OExnIwqZ.js","assets/pick-VAKOZI3d.js","assets/set-KzCOjdyF.js","assets/getAPIErrorFor-tzBGcA7R.js","assets/maybeCastToNumber-wtDkqjHp.js","assets/downloadFile-7KribbgA.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}