import{iL as o,au as g,iM as s,av as t,aw as u,iN as c,iO as f,iP as Q}from"./index-cVx9Zqte.js";import{Q as n}from"./loadbalancers-nrmT-zr6.js";const v=(e,i,a)=>g([n,"aglb",e,"configurations",i,a],()=>s(e,i,a),{keepPreviousData:!0}),L=e=>o([n,"aglb",e,"configurations","infinite"],({pageParam:i})=>s(e,{page:i,page_size:25}),{getNextPageParam:({page:i,pages:a})=>{if(i!==a)return i+1}}),d=(e,i)=>{const a=t();return u(r=>c(e,i,r),{onSuccess(){a.invalidateQueries([n,"aglb",e,"configurations"]),a.invalidateQueries([n,"paginated"]),a.invalidateQueries([n,"aglb",e])}})},p=e=>{const i=t();return u(a=>f(e,a),{onSuccess(){i.invalidateQueries([n,"aglb",e,"configurations"]),i.invalidateQueries([n,"paginated"]),i.invalidateQueries([n,"aglb",e])}})},y=(e,i)=>{const a=t();return u(()=>Q(e,i),{onSuccess(){a.invalidateQueries([n,"aglb",e,"configurations"]),a.invalidateQueries([n,"paginated"]),a.invalidateQueries([n,"aglb",e])}})};export{y as a,d as b,p as c,L as d,v as u};