import{bP as w,bQ as R,c7 as f,s as _,bT as o,bW as S,c8 as u,r as $,bX as U,bR as j,j as v,bY as M,b_ as X}from"./index-cVx9Zqte.js";function A(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function N(t){return parseFloat(t)}function P(t){return w("MuiSkeleton",t)}R("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const T=["animation","className","component","height","style","variant","width"];let r=t=>t,p,g,m,b;const W=t=>{const{classes:a,variant:e,animation:n,hasChildren:i,width:l,height:s}=t;return X({root:["root",e,n,i&&"withChildren",i&&!l&&"fitContent",i&&!s&&"heightAuto"]},P,a)},B=f(p||(p=r`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),E=f(g||(g=r`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),F=_("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:e}=t;return[a.root,a[e.variant],e.animation!==!1&&a[e.animation],e.hasChildren&&a.withChildren,e.hasChildren&&!e.width&&a.fitContent,e.hasChildren&&!e.height&&a.heightAuto]}})(({theme:t,ownerState:a})=>{const e=A(t.shape.borderRadius)||"px",n=N(t.shape.borderRadius);return o({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:S(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},a.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${n}${e}/${Math.round(n/.6*10)/10}${e}`,"&:empty:before":{content:'"\\00a0"'}},a.variant==="circular"&&{borderRadius:"50%"},a.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},a.hasChildren&&{"& > *":{visibility:"hidden"}},a.hasChildren&&!a.width&&{maxWidth:"fit-content"},a.hasChildren&&!a.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&u(m||(m=r`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),B),({ownerState:t,theme:a})=>t.animation==="wave"&&u(b||(b=r`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),E,(a.vars||a).palette.action.hover)),K=$.forwardRef(function(a,e){const n=U({props:a,name:"MuiSkeleton"}),{animation:i="pulse",className:l,component:s="span",height:h,style:k,variant:C="text",width:x}=n,d=j(n,T),c=o({},n,{animation:i,component:s,variant:C,hasChildren:!!d.children}),y=W(c);return v.jsx(F,o({as:s,ref:e,className:M(y.root,l),ownerState:c},d,{style:o({width:x,height:h},k)}))}),L=K,Q=t=>v.jsx(L,{...t});export{Q as S};
