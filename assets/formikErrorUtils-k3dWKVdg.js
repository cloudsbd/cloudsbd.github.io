import{eV as f,bi as l,an as c,c2 as u}from"./index-cVx9Zqte.js";const h=(i,r)=>i.reduce((n,s)=>{if(s.field){const e=r?s.field.replace(r,""):s.field;u.set(n,e,s.reason)}return n},{}),b=(i,r=[])=>{const n=f(r).reduce((s,{field:e,reason:t})=>e?{...s,[e]:t}:s,{});if(!l(n))return i(n)},g=(i,r,n="An error has occurred.")=>{if(!r)return i(n);const e=c(r,n).reduce((t,{field:o,reason:a})=>o?t:[...t,a],[]).join(",");if(!l(e))return i(e)},E=(i,r,n)=>{i.forEach(s=>{if(s.field){const e=s.field.split(".")[s.field.split(".").length-1];e&&r(e,s.reason)}else n&&n(s.reason)})},x=(i,r,n)=>{const s={},e=[];return i.forEach(t=>{if(t.field&&t.field.includes("subnets[")){const[o,a]=t.field.split("."),d=parseInt(o.substring(o.indexOf("[")+1,o.indexOf("]")),10);s[d]?s[d]={...s[d],[a]:t.reason}:s[d]={[a]:t.reason}}else e.push(t)}),E(e,r,n),s};export{g as a,E as b,x as c,h as g,b as h};
