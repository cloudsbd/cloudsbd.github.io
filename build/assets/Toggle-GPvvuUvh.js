import{bQ as $,bP as m,s as p,bZ as c,bT as l,db as f,bW as x,b$ as C,c0 as S,r,bX as y,bR as z,j as s,bY as R,b_ as T,c3 as j}from"./index-cVx9Zqte.js";function B(t){return m("MuiSwitch",t)}const E=$("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),a=E,N=["className","color","edge","size","sx"],M=t=>{const{classes:o,edge:e,size:i,color:h,checked:g,disabled:u}=t,w={root:["root",e&&`edge${c(e)}`,`size${c(i)}`],switchBase:["switchBase",`color${c(h)}`,g&&"checked",u&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},v=T(w,B,o);return l({},o,v)},I=p("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.root,e.edge&&o[`edge${c(e.edge)}`],o[`size${c(e.size)}`]]}})(({ownerState:t})=>l({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},t.edge==="start"&&{marginLeft:-8},t.edge==="end"&&{marginRight:-8},t.size==="small"&&{width:40,height:24,padding:7,[`& .${a.thumb}`]:{width:16,height:16},[`& .${a.switchBase}`]:{padding:4,[`&.${a.checked}`]:{transform:"translateX(16px)"}}})),O=p(f,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.switchBase,{[`& .${a.input}`]:o.input},e.color!=="default"&&o[`color${c(e.color)}`]]}})(({theme:t})=>({position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:`${t.palette.mode==="light"?t.palette.common.white:t.palette.grey[300]}`,transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),[`&.${a.checked}`]:{transform:"translateX(20px)"},[`&.${a.disabled}`]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:`${t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[600]}`},[`&.${a.checked} + .${a.track}`]:{opacity:.5},[`&.${a.disabled} + .${a.track}`]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:`${t.palette.mode==="light"?.12:.2}`},[`& .${a.input}`]:{left:"-100%",width:"300%"}}),({theme:t,ownerState:o})=>l({"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:x(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${a.checked}`]:{color:(t.vars||t).palette[o.color].main,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[o.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:x(t.palette[o.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${a.disabled}`]:{color:t.vars?t.vars.palette.Switch[`${o.color}DisabledColor`]:`${t.palette.mode==="light"?C(t.palette[o.color].main,.62):S(t.palette[o.color].main,.55)}`}},[`&.${a.checked} + .${a.track}`]:{backgroundColor:(t.vars||t).palette[o.color].main}})),X=p("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(t,o)=>o.track})(({theme:t})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:`${t.palette.mode==="light"?t.palette.common.black:t.palette.common.white}`,opacity:t.vars?t.vars.opacity.switchTrack:`${t.palette.mode==="light"?.38:.3}`})),P=p("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(t,o)=>o.thumb})(({theme:t})=>({boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),U=r.forwardRef(function(o,e){const i=y({props:o,name:"MuiSwitch"}),{className:h,color:g="primary",edge:u=!1,size:w="medium",sx:v}=i,k=z(i,N),n=l({},i,{color:g,edge:u,size:w}),d=M(n),b=s.jsx(P,{className:d.thumb,ownerState:n});return s.jsxs(I,{className:R(d.root,h),sx:v,ownerState:n,children:[s.jsx(O,l({type:"checkbox",icon:b,checkedIcon:b,ref:e,ownerState:n},k,{classes:l({},d,{root:d.switchBase})})),s.jsx(X,{className:d.track,ownerState:n})]})}),W=U,_=t=>r.createElement("svg",{width:"16px",height:"16px",viewBox:"0 0 16 16",className:"icon",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...t},r.createElement("g",{stroke:"none",strokeWidth:0,fill:"#C9CACB",fillRule:"evenodd"},r.createElement("rect",{className:"square",x:0,y:0,width:16,height:16,rx:1}))),q=t=>r.createElement("svg",{width:"16px",height:"16px",viewBox:"0 0 16 16",className:"icon",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...t},r.createElement("g",{stroke:"none",strokeWidth:0,fill:"#fff",fillRule:"evenodd"},r.createElement("rect",{className:"square",x:0,y:0,width:16,height:16,rx:1}))),D=t=>{const{interactive:o,tooltipText:e,...i}=t;return s.jsxs(r.Fragment,{children:[s.jsx(W,{checkedIcon:s.jsx(q,{}),color:"primary","data-qa-toggle":t.checked,icon:s.jsx(_,{}),...i}),e&&s.jsx(j,{interactive:o,status:"help",text:e})]})};export{D as T};
