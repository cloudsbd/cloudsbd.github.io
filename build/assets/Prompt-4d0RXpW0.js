import{r as n,u as h,j as a,lp as v}from"./index-cVx9Zqte.js";const o=e=>{e.preventDefault(),e.returnValue=""},x=n.memo(e=>{const s=h();n.useEffect(()=>{if(!(!e.when||!e.confirmWhenLeaving))return window.addEventListener("beforeunload",o),()=>window.removeEventListener("beforeunload",o)},[e.when,e.confirmWhenLeaving]);const i=n.useRef(!1),[t,f]=n.useState(null),[l,r]=n.useState(!1),c=()=>r(!1),m=()=>{if(r(!1),!!t){if(i.current=!0,window.removeEventListener("beforeunload",o),e.onConfirm)return e.onConfirm(t.pathname);s.push(t.pathname)}},d=u=>u.pathname===s.location.pathname||i.current?!0:(r(!0),f(u),!1);return a.jsxs(a.Fragment,{children:[a.jsx(v,{message:d,when:e.when}),e.children({handleCancel:c,handleConfirm:m,isModalOpen:l})]})});export{x as P};