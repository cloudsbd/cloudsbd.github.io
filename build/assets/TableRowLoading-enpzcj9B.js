import{j as a,W as d}from"./index-cVx9Zqte.js";import{S as r}from"./Skeleton-Ei33_jCb.js";import{a as c,T as b}from"./TableRow-WjckZ-OR.js";const j=({columns:i=1,responsive:e,rows:n=1})=>{const t=[];for(let l=0;l<i;l++){const s=a.jsx(c,{children:a.jsx(r,{})},`table-loading-cell-${l}`);e&&e[l]?t.push(a.jsx(d,{...e[l],children:s},`table-loading-hidden-${l}`)):t.push(s)}const o=[];for(let l=0;l<n;l++)o.push(a.jsx(b,{sx:{"&& :last-child":{paddingRight:"15px"}},"aria-label":"Table content is loading","data-testid":"table-row-loading",children:t},`table-loading-row-${l}`));return a.jsx(a.Fragment,{children:o})};export{j as T};