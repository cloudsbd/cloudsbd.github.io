import{b as d,j as r,T as o,aa as p,G as i,a0 as c}from"./index-cVx9Zqte.js";import{I as l}from"./IPAddress-4_lmPo4A.js";import{b as x}from"./loadbalancers-nrmT-zr6.js";import{P as u}from"./Ports-wq1QhgZe.js";import{L as j}from"./LoadBalancerRegions-3Xp-NjTx.js";import"./CopyTooltip-nIZAIwkd.js";import"./index-nat4f1EQ.js";import"./ShowMore-N_Z6fJvT.js";import"./PublicIpsUnassignedTooltip-Pn8zzLr7.js";import"./ipUtils-8Z2b8Iiq.js";import"./ipaddr-2fi-A9R9.js";import"./Skeleton-Ei33_jCb.js";import"./configurations-Ff-ab_W_.js";import"./Flag-3tAA4S-o.js";const S=()=>{const{loadbalancerId:e}=d(),t=Number(e),{data:s}=x(t),m=[{title:"Hostname",value:s!=null&&s.hostname?r.jsx(l,{ips:[s.hostname],isHovered:!0}):r.jsx(o,{children:"None"})},{title:"Load Balancer ID",value:r.jsx(o,{children:s==null?void 0:s.id})},{title:"Ports",value:r.jsx(u,{loadbalancerId:t})},{title:"Regions",value:r.jsx(j,{})}];return r.jsx(p,{sx:{paddingY:2.5},children:r.jsx(i,{columns:{lg:12,md:8,sm:4,xs:1},container:!0,spacing:1.5,children:m.map(({title:a,value:n})=>r.jsx(i,{md:4,sm:4,xs:2,children:r.jsxs(c,{direction:"row",spacing:2,children:[r.jsx(o,{minWidth:"70px",noWrap:!0,children:r.jsx("strong",{children:a})}),n]})},a))})})};export{S as LoadBalancerSummary};
