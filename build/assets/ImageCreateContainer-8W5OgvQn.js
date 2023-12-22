import{r as a,_ as p,O as h,u as b,j as e,Q as j,K as _,G as d}from"./index-cVx9Zqte.js";import{L as C}from"./LandingHeader--0FiA91-.js";import{N as L}from"./NavTabs-5r6SmvRp.js";import"./SafeTabPanel-mYwDHsH9.js";import"./TabList-Vcpmm6u6.js";import"./TabLinkList-d9SkE5Nv.js";const D=a.lazy(()=>p(()=>import("./CreateImageTab-cboXjZnN.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),v=a.lazy(()=>p(()=>import("./ImageUpload-pI30TF5d.js"),__vite__mapDeps([8,1,2,9,10,11,12,6,13,14,15,16,17,18]))),S=()=>{const{url:n}=h(),{location:t}=b(),[i,g]=a.useState(t!=null&&t.state?t.state.imageLabel:""),[c,x]=a.useState(t!=null&&t.state?t.state.imageDescription:""),[s,l]=a.useState(!1),m=r=>{const o=r.target.value;g(o)},u=r=>{const o=r.target.value;x(o)},I=[{render:e.jsx(D,{changeDescription:u,changeIsCloudInit:()=>l(!s),changeLabel:m,description:c,isCloudInit:s,label:i}),routeName:`${n}/disk`,title:"Capture Image"},{render:e.jsx(v,{changeDescription:u,changeIsCloudInit:()=>l(!s),changeLabel:m,description:c,isCloudInit:s,label:i}),routeName:`${n}/upload`,title:"Upload Image"}];return e.jsxs(e.Fragment,{children:[e.jsx(j,{segment:"Create Image"}),e.jsx(a.Suspense,{fallback:e.jsx(_,{}),children:e.jsx(L,{tabs:I})})]})},w=()=>e.jsxs(d,{container:!0,children:[e.jsx(C,{breadcrumbDataAttrs:{"data-qa-create-image-header":!0},docsLabel:"Docs",docsLink:"https://www.linode.com/docs/products/tools/images/",removeCrumbX:2,title:"Create"}),e.jsx(d,{className:"p0",xs:12,children:e.jsx(S,{})})]});export{w as ImagesCreateContainer,w as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CreateImageTab-cboXjZnN.js","assets/index-cVx9Zqte.js","assets/index-RL6WRErT.css","assets/DiskSelect-fqnA5sw3.js","assets/RenderGuard-G_iNJx_w.js","assets/LinodeSelect-MycnhSc0.js","assets/Autocomplete-vchTD_Ph.js","assets/getAPIErrorFor-tzBGcA7R.js","assets/ImageUpload-pI30TF5d.js","assets/CopyTooltip-nIZAIwkd.js","assets/index-nat4f1EQ.js","assets/Prompt-4d0RXpW0.js","assets/RegionSelect-bPwNTvP1.js","assets/Flag-3tAA4S-o.js","assets/Flag-_y0A-gKD.css","assets/ListItem-HwDJ8kDZ.js","assets/visuallyHidden-DVicuktI.js","assets/ObjectUploader-ztkupN1X.js","assets/immer.esm--MpJ8fpr.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}