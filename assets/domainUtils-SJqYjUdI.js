import{h8 as a}from"./index-cVx9Zqte.js";const m=(t,e)=>i(t,e),i=(t,e)=>!e.some(s=>s.type==="CNAME"&&s.name===t),c=(t,e)=>!e.some(s=>s.name===t),y=`IP addresses that may perform a zone transfer for this Domain. This is
potentially dangerous, and should be left empty unless you intend to
use it.`,A=t=>{const e=t??[""];return e.length>0?e:[""]},u=t=>t==="master"?"primary":"secondary",g=(t,e,s,r)=>{const n=r&&r.includes("/")?r.substr(0,r.indexOf("/")):r,o=[a(e,{target:s,type:"A"}),a(e,{name:"www",target:s,type:"A"}),a(e,{name:"mail",target:s,type:"A"})];return Promise.all(n?[...o,a(e,{target:n,type:"AAAA"}),a(e,{name:"www",target:n,type:"AAAA"}),a(e,{name:"mail",target:n,type:"AAAA"}),a(e,{priority:10,target:`mail.${t}`,type:"MX"})]:o)};export{u as a,A as b,m as c,g,c as i,y as t};
