import{m as e,r,e as c,p as l,j as s,R as u,S as d,H as g,T as n,f as p}from"./index-cVx9Zqte.js";const y=e()(o=>({logo:{width:"100px"},root:{"& button":{backgroundColor:"#00b159",color:"#fff",marginTop:o.spacing(8)},"& h1":{marginBottom:o.spacing(4),marginTop:o.spacing(4)},"& p":{fontSize:o.spacing(2),lineHeight:o.spacing(3),marginTop:o.spacing(2)},alignItems:"center",backgroundColor:o.bg.main,display:"flex",flexDirection:"column",height:"100vh",padding:`${o.spacing(4)} ${o.spacing(2)} 0px`}})),f=r.memo(()=>{const{classes:o}=y(),t=c(),a=l(["state","survey_link"],t);if(!a)return s.jsx(u,{to:"/"});const i=()=>{window.location.assign(a)};return s.jsxs("div",{className:o.root,"data-testid":"body",children:[s.jsx(d,{className:o.logo}),s.jsx(g,{title:"It’s been our pleasure to serve you."}),s.jsx(n,{children:"Your account is closed. We hope you’ll consider us for your future cloud hosting needs."}),s.jsx(n,{children:"Would you mind taking a brief survey? It will help us understand why you’re leaving and what we can do better."}),s.jsx(p,{buttonType:"primary","data-testid":"survey-button",onClick:i,children:"Take our exit survey"})]})});export{f as CancelLanding,f as default};
