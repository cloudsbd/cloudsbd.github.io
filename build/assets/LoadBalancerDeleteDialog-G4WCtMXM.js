import{r as m,j as p}from"./index-cVx9Zqte.js";import{T as f}from"./TypeToConfirmDialog-OLeT3MiC.js";import{a as D}from"./loadbalancers-nrmT-zr6.js";const L=r=>{const{loadbalancer:e,onClose:o,onSuccess:s,open:t}=r,{error:i,isLoading:n,mutateAsync:a,reset:l}=D((e==null?void 0:e.id)??-1);m.useEffect(()=>{t&&l()},[t]);const c=async()=>{await a(),o(),s&&s()};return p.jsx(f,{entity:{action:"deletion",name:e==null?void 0:e.label,primaryBtnText:"Delete",type:"Load Balancer"},errors:i,label:"Load Balancer Label",loading:n,onClick:c,onClose:o,open:t,title:`Delete ${(e==null?void 0:e.label)??""}?`})};export{L as D};