import{r as i,u as l,e as f,j as n,R as m,K as j,bq as h}from"./index-cVx9Zqte.js";import{S as b}from"./SafeTabPanel-mYwDHsH9.js";import{a as R,T,d as L}from"./TabList-Vcpmm6u6.js";import{T as N}from"./TabLinkList-d9SkE5Nv.js";const C=i.memo(s=>{const c=l(),t=f(),{navToTabRouteOnChange:u,tabs:a}=s,o=u??!0,x=e=>{a[e]&&c.push(a[e].routeName)},r=g(a,t.pathname);return r.idx===-1?n.jsx(m,{to:a[0].routeName}):r.isExact?n.jsxs(R,{index:Math.max(r.idx,0),onChange:o?x:void 0,children:[n.jsx(N,{noLink:!0,tabs:a}),n.jsx(i.Suspense,{fallback:n.jsx(j,{}),children:n.jsx(T,{children:a.map((e,d)=>{if(!e.render&&!e.component)return null;const p=e.backgroundRendering?L:b;return n.jsx(p,{index:d,children:e.component?n.jsx(e.component,{}):e.render?e.render:null},e.routeName)})})})]}):n.jsx(m,{to:a[r.idx].routeName})}),g=(s,c)=>s.reduce((t,u,a)=>{const o=h(c,{exact:!1,path:u.routeName});return o&&(t.idx=a,t.isExact=o.isExact),t},{idx:-1,isExact:!1});export{C as N};