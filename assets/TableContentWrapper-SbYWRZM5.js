import{j as r}from"./index-cVx9Zqte.js";import{T as d}from"./TableRowEmpty-HXunljlo.js";import{T as g}from"./TableRowError-VT_K71YW.js";import{T as f}from"./TableRowLoading-enpzcj9B.js";const j=a=>{const{children:s,customFirstRow:t,emptyMessage:n,error:o,lastUpdated:i,length:m,loading:p,loadingProps:l,rowEmptyState:e}=a;return p?r.jsx(f,{...l}):o&&o.length>0?r.jsx(g,{colSpan:6,message:o[0].reason}):i!==0&&m===0?e||r.jsx(d,{colSpan:6,message:n??"No data to display."}):r.jsxs(r.Fragment,{children:[t||void 0,s]})};export{j as T};
