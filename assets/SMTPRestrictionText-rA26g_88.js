import{bm as r,j as n,T as o,a1 as a,gG as c,eq as d,gH as p}from"./index-cVx9Zqte.js";const u=t=>{const{supportLink:i}=t,{data:e}=r(),s=l(e==null?void 0:e.active_since)?n.jsxs(o,{variant:"body1",children:["SMTP ports may be restricted on this Linode. Need to send email? Review our"," ",n.jsx(a,{onClick:()=>c("SMTP Notice Link"),to:"https://www.linode.com/docs/email/best-practices/running-a-mail-server/",children:"mail server guide"}),", then"," ",i?n.jsx(d,{entity:{id:i.id,type:"linode_id"},text:"open a support ticket",ticketType:"smtp",title:`SMTP Restriction Removal on ${i.label}`}):"open a support ticket","."]}):null;return n.jsx(n.Fragment,{children:t.children({text:s})})},l=t=>{if(!t)return!0;const i=new Date(p).getTime(),e=new Date(t).getTime();return isNaN(e)?!0:e>=i};export{u as S};
