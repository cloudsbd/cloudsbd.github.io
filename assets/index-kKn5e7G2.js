import{r as s,_ as r,j as t,K as i,L as c,M as o,R as p}from"./index-cVx9Zqte.js";import{P as l}from"./ProductInformationBanner-F-a7gVWs.js";const a=s.lazy(()=>r(()=>import("./AccountLanding-LIXCzRJj.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]))),_=s.lazy(()=>r(()=>import("./InvoiceDetail-3jUvgLvk.js"),__vite__mapDeps([20,1,2,21,22,23,24,25,26,27,7,8,9,10,11,12,19])).then(n=>({default:n.InvoiceDetail}))),u=s.lazy(()=>r(()=>import("./EntityTransfersCreate-6OF0I0VR.js"),__vite__mapDeps([28,1,2,3,29,8,30,9,10,11,12,17,7,31,19,32])).then(n=>({default:n.EntityTransfersCreate}))),m=s.lazy(()=>r(()=>import("./UserDetail-a8M9-IVD.js"),__vite__mapDeps([33,1,2,3,4,5,6,34,35,36,37,38,39,40,41,8,42,7,17,27,19,43])).then(n=>({default:n.UserDetail})));class h extends s.Component{render(){const{match:{path:e}}=this.props;return t.jsxs(s.Suspense,{fallback:t.jsx(i,{}),children:[t.jsx(l,{bannerLocation:"Account"}),t.jsxs(c,{children:[t.jsx(o,{component:m,path:`${e}/users/:username`}),t.jsx(o,{component:a,exact:!0,path:`${e}/billing/edit`,strict:!0}),t.jsx(o,{component:_,path:`${e}/billing/invoices/:invoiceId`}),t.jsx(o,{component:u,path:`${e}/service-transfers/create`}),t.jsx(p,{exact:!0,from:e,to:`${e}/billing`}),t.jsx(o,{component:a,path:e})]})]})}}export{h as Account};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AccountLanding-LIXCzRJj.js","assets/index-cVx9Zqte.js","assets/index-RL6WRErT.css","assets/LandingHeader--0FiA91-.js","assets/SafeTabPanel-mYwDHsH9.js","assets/TabList-Vcpmm6u6.js","assets/TabLinkList-d9SkE5Nv.js","assets/PaginationFooter-8MfyrbrN.js","assets/TableRow-WjckZ-OR.js","assets/TableRowEmpty-HXunljlo.js","assets/TableRowError-VT_K71YW.js","assets/TableRowLoading-enpzcj9B.js","assets/Skeleton-Ei33_jCb.js","assets/TableSortCell-N7Qxf5YK.js","assets/useOrder-iGt70Yxe.js","assets/OrderBy-9siuTGWJ.js","assets/splitAt-OlbwoBj3.js","assets/usePagination-oVzoT3VV.js","assets/StatusIcon-d7wUM4gj.js","assets/TableHead-aAnFvqns.js","assets/InvoiceDetail-3jUvgLvk.js","assets/Currency-UAWCzS7H.js","assets/DownloadCSV-lzIl1jcQ.js","assets/lke-download-TdJ57SAK.js","assets/PdfGenerator-nHPSKAzF.js","assets/constants-KokzTiEs.js","assets/DateTimeDisplay-Ll7y9Gvy.js","assets/Paginate-_mtRUOjJ.js","assets/EntityTransfersCreate-6OF0I0VR.js","assets/utilities-IlPQVcEt.js","assets/TableContentWrapper-SbYWRZM5.js","assets/DebouncedSearchTextField-fJN9axDi.js","assets/immer.esm--MpJ8fpr.js","assets/UserDetail-a8M9-IVD.js","assets/over-DG6TlI65.js","assets/assocPath-K5W2bQH9.js","assets/set-KzCOjdyF.js","assets/SelectionCard-z2Lwslro.js","assets/Toggle-GPvvuUvh.js","assets/withQueryClient.container-zlDyK8fy.js","assets/getAPIErrorFor-tzBGcA7R.js","assets/scrollErrorIntoView-6n4Cku1Y.js","assets/Radio-9QvviwDe.js","assets/UserDeleteConfirmationDialog-hPxMXU_e.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}