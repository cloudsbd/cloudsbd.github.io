import{a8 as m,a9 as d,j as e,r as s,m as g,u as h,E as f,T as o}from"./index-cVx9Zqte.js";import{S as v}from"./SupportTicketDialog-OsiQ7_Xj.js";import"./scrollErrorIntoView-6n4Cku1Y.js";import"./TabbedReply-6vlVk1ew.js";import"./remove-2JFCky0p.js";import"./TabbedPanel-7MRGLWE6.js";import"./TabList-Vcpmm6u6.js";var a={},S=d;Object.defineProperty(a,"__esModule",{value:!0});var i=a.default=void 0,x=S(m()),y=e,j=(0,x.default)((0,y.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckCircle");i=a.default=j;const k=g()(t=>({cta:{...t.applyLinkStyles},errorHeading:{marginBottom:t.spacing(2)},subheading:{margin:"0 auto",maxWidth:"60%"}})),C=()=>{const{classes:t}=k(),n=h(),[c,r]=s.useState(!1),u=(l,p)=>{n.push({pathname:`/support/tickets/${l}`,state:{attachmentErrors:p}}),r(!1)};return e.jsx(f,{errorText:e.jsxs(s.Fragment,{children:[e.jsx(o,{className:t.errorHeading,variant:"h2",children:"Your account is currently being reviewed."}),e.jsxs(o,{className:t.subheading,children:["Thanks for signing up! You’ll receive an email from us once our review is complete, so hang tight. If you have questions during this process"," ",e.jsx("button",{className:t.cta,onClick:()=>r(!0),children:"please open a Support ticket"}),"."]}),e.jsx(v,{hideProductSelection:!0,keepOpenOnSuccess:!0,onClose:()=>r(!1),onSuccess:u,open:c,prefilledTitle:"Help me activate my account"})]}),CustomIcon:i,CustomIconStyles:{color:"#63A701"}})},L=s.memo(C);export{L as default};