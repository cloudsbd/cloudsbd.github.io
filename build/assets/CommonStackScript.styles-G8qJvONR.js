var V=Object.defineProperty;var K=(t,r,s)=>r in t?V(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s;var p=(t,r,s)=>(K(t,typeof r!="symbol"?r+"":r,s),s);import{s as a,c1 as H,j as e,W as x,bx as Q,eN as Y,di as X,fy as R,r as T,bg as L,E as Z,cb as J,C as P,ad as E,f as O,an as I,g as tt,w as et,fz as rt,fA as at,T as A,G as C,V as st}from"./index-cVx9Zqte.js";import{W as it}from"./index-m2Nl9sJq.js";import{i as ot,w as lt}from"./image.helpers-Yu4Zv1TD.js";import{g as nt}from"./RenderGuard-G_iNJx_w.js";import{a as y,T as B,b as ct}from"./TableRow-WjckZ-OR.js";import{T as dt}from"./TableSortCell-N7Qxf5YK.js";import{T as pt}from"./TableHead-aAnFvqns.js";import{D as St}from"./DebouncedSearchTextField-fJN9axDi.js";import{y as ut,b as gt,R as ht}from"./ResourcesSection-Ho8bmvI2.js";const f=t=>({"& span":{color:t.textColors.tableHeader},color:t.textColors.tableHeader,top:104}),bt=t=>({...f(t),[t.breakpoints.down("lg")]:{width:"15%"},[t.breakpoints.down("md")]:{width:"17%"},[t.breakpoints.down("sm")]:{width:"28%"},width:"10%"}),yt=t=>({...f(t),[t.breakpoints.down("lg")]:{width:"17%"},[t.breakpoints.down("md")]:{width:"23%"},whiteSpace:"nowrap",width:"13%"}),mt=(t,r,s)=>({...f(s),...t==="account"?{[s.breakpoints.down("lg")]:{width:"38%"},[s.breakpoints.down("md")]:{width:"50%"},[s.breakpoints.down("sm")]:{width:"60%"},width:"26%"}:{[s.breakpoints.down("lg")]:{width:"48%"},[s.breakpoints.down("md")]:{width:"50%"},[s.breakpoints.down("sm")]:{width:"60%"},width:"36%"},...r&&{paddingLeft:"20px !important",width:"calc(100% - 65px)"}}),ft=a(y,{label:"StyledCompatibleImagesCell",shouldForwardProp:H(["category"])})(({category:t,theme:r})=>({...f(r),...t==="account"?{width:"20%"}:{width:"26%"},cursor:"default !important"})),wt=a(y,{label:"StyledEmptyTableCell"})(({theme:t})=>({...f(t),cursor:"default !important"})),kt=a(pt,{label:"StyledRootTableHead"})(({theme:t})=>({"& th":{"&:first-of-type":{borderLeft:"none"},"&:hover":{...t.applyTableHeaderStyles},"&:last-of-type":{borderRight:"none"},backgroundColor:t.bg.tableHeader,borderBottom:`2px solid ${t.borderColors.borderTable}`,borderTop:`2px solid ${t.borderColors.borderTable}`,fontFamily:t.font.bold,padding:"10px 15px"}})),xt=a(y,{label:"StyledStatusCell"})(({theme:t})=>({...f(t),cursor:"default !important",width:"7%"})),Tt=t=>{const{category:r,currentFilterType:s,handleClickTableHeader:S,isSelecting:n,sortOrder:w}=t,k=S&&w?dt:y,i=o=>S&&w?{active:s===o,direction:w,handleClick:S,label:o}:{},c=r==="community";return e.jsx(kt,{children:e.jsxs(B,{children:[e.jsx(k,{sx:o=>({...mt(r,n,o)}),colSpan:n?2:1,"data-qa-stackscript-table-header":!0,...i("label"),children:"StackScript"}),!n&&e.jsx(k,{"data-qa-stackscript-active-deploy-header":!0,sx:o=>({...bt(o)}),...i("deploys"),children:"Deploys"}),!n&&e.jsx(x,{smDown:!0,children:e.jsx(k,{"data-qa-stackscript-revision-header":!0,sx:o=>({...yt(o)}),...i("revision"),children:"Last Revision"})}),!n&&e.jsx(x,{lgDown:!0,children:e.jsx(ft,{category:r,"data-qa-stackscript-compatible-images":!0,children:"Compatible Images"})}),!n&&!c?e.jsx(x,{lgDown:!0,children:e.jsx(xt,{"data-qa-stackscript-status-header":!0,children:"Status"})}):null,!n&&e.jsx(wt,{})]})})},Ct=(t,r)=>{let s=!1,S=[];try{S=t.filter(n=>typeof n.reason=="string"&&n.reason.toLowerCase().includes("unauthorized")?(s=!0,!1):!0)}catch(n){Q(`Error with Unauthed error handling: ${n}`,{apiError:t})}return s?[{reason:r},...S]:S},vt=a("div",{label:"StyledContentDiv",shouldForwardProp:H(["isSelecting"])})(({isSelecting:t,theme:r})=>({...t?{backgroundColor:`${r.bg.app} !important`,marginTop:`-${r.spacing()}`}:{backgroundColor:r.bg.bgPaper},display:"flex",flexWrap:"nowrap",paddingBottom:"8px !important",paddingTop:r.spacing(),position:"sticky",[r.breakpoints.up("sm")]:{alignItems:"center",display:"flex",justifyContent:"space-between"},top:0,width:"100%",zIndex:11})),Ft=a("div",{label:"StyledEmptyStateDiv"})(({theme:t})=>({color:t.palette.text.primary})),jt=a(St,{label:"StyledDebouncedSearchTextfield"})(({theme:t})=>({"& + button":{paddingBottom:0,paddingTop:0},"& .input":{backgroundColor:t.bg.bgPaper,border:`1px solid ${t.color.grey3}`,borderRadius:0,minHeight:"auto",minWidth:415},"& > div":{marginRight:0},"& > input":{padding:t.spacing()},backgroundColor:t.color.white,flexBasis:"100%",marginTop:0})),Dt=a("div",{label:"StyledLoaderDiv"})(({theme:t})=>({display:"flex",justifyContent:"center",padding:t.spacing(2)})),Lt=a(Y,{label:"StyledPlaceholder"})(({theme:t})=>({"& svg":{marginTop:4,transform:"scale(0.8)"},margin:0,padding:`${t.spacing(1)} 0`,width:"100%"})),Pt=a(ct,{label:"StyledTable"})(({theme:t})=>({backgroundColor:t.bg.bgPaper})),Et={description:"Run custom scripts to install and configure software when initializing Linode Compute Instances",subtitle:"Automate deployment scripts",title:"StackScripts"},It={links:[{text:"Getting Started with StackScripts",to:"https://www.linode.com/docs/products/tools/stackscripts/get-started/"},{text:"Create a StackScript",to:"https://www.linode.com/docs/products/tools/stackscripts/guides/create/"},{text:"Write a Custom Script for Use with StackScripts",to:"https://www.linode.com/docs/products/tools/stackscripts/guides/write-a-custom-script/"}],moreInfo:{text:"View additional StackScripts documentation",to:"https://www.linode.com/docs/products/tools/stackscripts/ "},title:"Getting Started Guides"},Mt={links:[{external:!0,text:"Automate Server Deployments Using Stackscripts",to:"https://www.youtube.com/watch?v=nygChMc1hX4"},{external:!0,text:"Shell Scripts Explained",to:"https://www.youtube.com/watch?v=EbyA5rZwyRw"},{external:!0,text:" Linux for Programmers #7 | Environment Variables",to:"https://www.youtube.com/watch?v=yM8v5i2Qjgg"}],moreInfo:{text:ut,to:gt},title:"Video Playlist"},M={action:"Click:link",category:"StackScripts landing page empty"},Ht=t=>{const{goToCreateStackScript:r}=t;return e.jsx(ht,{buttonProps:[{children:"Create StackScript",onClick:()=>{X({action:"Click:button",category:M.category,label:"Create StackScript"}),r()}}],gettingStartedGuidesData:It,headers:Et,icon:R,linkAnalyticsEvent:M,youtubeLinkData:Mt})},$t=t=>r=>{const{isSelecting:s,useQueryString:S}=t;class n extends T.Component{constructor(){super(...arguments);p(this,"generateFilterInfo",i=>{switch(i){case"label":return{apiFilter:"label",currentFilter:"label"};case"deploys":return{apiFilter:"deployments_total",currentFilter:"deploys"};case"revision":return{apiFilter:"updated",currentFilter:"revision"};default:return{apiFilter:null,currentFilter:null}}});p(this,"getDataAtPage",(i,c=this.state.currentFilter,o=!1)=>{const{category:h,request:b}=this.props;return this.setState({currentPage:i,gettingMoreStackScripts:!0,isSorting:o}),b({page:i,page_size:h==="community"?25:500},c).then(l=>{if(!this.mounted)return;(!l.data.length||l.data.length===l.results)&&this.setState({allStackScriptsLoaded:!0});const d=o?l.data:[...this.state.listOfStackScripts,...l.data],u=h==="community"?g=>this.hasNonDeprecatedImages(g.images)&&!this.usesKubeImage(g.images):g=>!this.usesKubeImage(g.images),m=d.filter(u);if(o&&d.length!==0&&m.length===0){this.getNext();return}return this.setState({getMoreStackScriptsFailed:!1,gettingMoreStackScripts:!1,isSorting:!1,listOfStackScripts:m,loading:!1}),m}).catch(l=>{this.mounted&&(i>1&&this.setState({getMoreStackScriptsFailed:!0}),this.setState({error:I(l,"There was an error loading StackScripts"),gettingMoreStackScripts:!1,loading:!1}))})});p(this,"getNext",()=>{this.mounted&&this.setState({currentPage:this.state.currentPage+1},()=>this.getDataAtPage(this.state.currentPage,this.state.currentFilter,this.state.isSorting))});p(this,"goToCreateStackScript",()=>{const{history:i}=this.props;i.push("/stackscripts/create")});p(this,"handleClickTableHeader",i=>{const{currentSearchFilter:c,sortOrder:o}=this.state,h=o==="asc"?"desc":"asc",b=i,l=this.generateFilterInfo(b),d=Object.keys(c).length?{"+order":o,"+order_by":l.apiFilter??void 0,...c}:{"+order":o,"+order_by":l.apiFilter??void 0};this.getDataAtPage(1,d,!0),this.setState({currentFilter:{"+order":o,"+order_by":l.apiFilter??void 0},currentFilterType:l.currentFilter,currentPage:1,sortOrder:h})});p(this,"handleSearch",i=>{const{currentFilter:c}=this.state,{category:o,history:h,request:b}=this.props,l=i.toLowerCase().trim();S&&Rt(l,h);let d;if(o==="community"&&(l.includes("username:")||l.includes("label:")||l.includes("description:"))){const u=l.indexOf(":"),m=l.substr(0,u),g=l.substr(u+1);d=rt(m,g)}else d=at(l);this.setState({didSearch:!0,isSearching:!0}),b({page:1,page_size:50},{...d,...c}).then(u=>{this.mounted&&(this.setState({isSearching:!1,listOfStackScripts:u.data,loading:!1}),i?this.setState({allStackScriptsLoaded:!0,currentSearchFilter:d}):this.setState({allStackScriptsLoaded:!1,currentSearchFilter:[]}))}).catch(u=>{this.mounted&&this.setState({error:I(u,"There was an error loading StackScripts"),isSearching:!1,loading:!1})})});p(this,"hasNonDeprecatedImages",i=>{const{publicImages:c}=this.props;for(const o of i)if(c[o])return!0;return!1});p(this,"mounted",!1);p(this,"state",{allStackScriptsLoaded:!1,currentFilter:{"+order":"desc","+order_by":"deployments_total"},currentFilterType:null,currentPage:1,currentSearchFilter:{},didSearch:!1,error:void 0,fieldError:void 0,getMoreStackScriptsFailed:!1,gettingMoreStackScripts:!1,isSearching:!1,isSorting:!1,listOfStackScripts:[],loading:!0,sortOrder:"asc",successMessage:""});p(this,"usesKubeImage",i=>i.some(c=>ot(c)))}componentDidMount(){this.mounted=!0;const i=L(this.props.location.search,"query");return i?this.handleSearch(i):this.getDataAtPage(1)}componentWillUnmount(){this.mounted=!1}render(){var j,D;const{allStackScriptsLoaded:i,currentFilterType:c,didSearch:o,error:h,fieldError:b,getMoreStackScriptsFailed:l,gettingMoreStackScripts:d,isSearching:u,isSorting:m,listOfStackScripts:g,sortOrder:U,successMessage:F}=this.state,{grants:N,profile:W}=this.props,_=!!((j=W.data)!=null&&j.restricted)&&!((D=N.data)!=null&&D.global.add_stackscripts);if(h)return e.jsx("div",{style:{overflow:"hidden"},children:e.jsx(Z,{errorText:J("There was an error.",[0,"reason"],Ct(h,"You are not authorized to view StackScripts for this account."))})});if(this.state.loading)return e.jsx(Dt,{children:e.jsx(P,{})});const $=S?L(this.props.location.search,"query"):void 0;return e.jsxs(T.Fragment,{children:[b&&b.reason&&e.jsx(E,{text:b.reason,variant:"error"}),F&&e.jsx(E,{text:F,variant:"success"}),!o&&g&&g.length===0?e.jsx(Ft,{"data-qa-stackscript-empty-msg":!0,children:_?e.jsx(Lt,{icon:R,isEntity:!0,renderAsSecondary:!0,title:"StackScripts",children:"You don’t have any StackScripts to select from."}):e.jsx(Ht,{goToCreateStackScript:this.goToCreateStackScript})}):e.jsxs(T.Fragment,{children:[e.jsx(vt,{isSelecting:!s,children:e.jsx(jt,{tooltipText:this.props.category==="community"?`Hint: try searching for a specific item by prepending your
                  search term with "username:", "label:", or "description:"`:"",debounceTime:400,defaultValue:$,hideLabel:!0,isSearching:u,label:"Search by Label, Username, or Description",onSearch:this.handleSearch,placeholder:"Search by Label, Username, or Description"})}),e.jsxs(Pt,{"aria-label":"List of StackScripts",colCount:s?1:4,noOverflow:!0,rowCount:g.length,style:s?void 0:{tableLayout:"fixed"},children:[e.jsx(Tt,{category:this.props.category,currentFilterType:c,handleClickTableHeader:this.handleClickTableHeader,isSelecting:s,sortOrder:U}),e.jsx(r,{...this.props,...this.state,getDataAtPage:this.getDataAtPage,getNext:this.getNext})]}),d&&!m&&e.jsx("div",{style:{margin:"32px 0 32px 0",textAlign:"center"},children:e.jsx(P,{mini:!0})})]}),!m&&!i&&!d&&e.jsx("div",{style:{textAlign:"center"},children:l?e.jsx(O,{buttonType:"secondary",disabled:this.state.gettingMoreStackScripts,onClick:this.getNext,style:{margin:"32px 0 32px 0"},title:"Show More StackScripts",value:"Show More",children:"Show More StackScripts"}):e.jsx(it,{onEnter:this.getNext,children:e.jsx("div",{style:{minHeight:"150px"}})})})]})}}return p(n,"displayName",`WithStackScriptBase(${nt(r)})`),tt(et,lt)(n)},Rt=(t,r)=>{const s=new URLSearchParams({query:t}).toString();r.replace({search:s})},v={cursor:"pointer"},G=t=>({...v,color:t.textColors.tableStatic,fontSize:"0.875rem",lineHeight:"1.125rem"}),q={"& > button":{height:46},height:46},z=t=>({fontSize:"0.875rem",lineHeight:"1.125rem",overflow:"hidden",textOverflow:"ellipsis",[t.breakpoints.down("md")]:{wordBreak:"break-all"},whiteSpace:"nowrap"}),Vt=a(A,{label:"StyledTitleTypography"})(({theme:t})=>({...z(t)})),Kt=a(y,{label:"StyledTitleTableCell"})(({theme:t})=>({...z(t)})),Qt=a(O,{label:"StyledDetailsButton"})(({theme:t})=>({"&:hover, &:focus":{backgroundColor:"transparent"},fontFamily:t.font.normal,fontSize:"0.875rem",marginTop:0,padding:t.spacing(),[t.breakpoints.down("sm")]:{marginBottom:4,marginLeft:0,paddingBottom:4,paddingTop:4},width:100})),Yt=a("label",{label:"StyledLabel"})({...v}),Xt=a(C,{label:"StyledSelectionGrid"})(({theme:t})=>({alignItems:"center",flexWrap:"nowrap",justifyContent:"space-between",[t.breakpoints.down("sm")]:{alignItems:"flex-start",flexDirection:"column"},width:"100%"})),Zt=a(C,{label:"StyledSelectionButtonGrid"})(({theme:t})=>({[t.breakpoints.down("sm")]:{"&.MuiGrid-item":{paddingLeft:0,paddingTop:0}}})),Jt=a(C,{label:"StyledSelectionDetailsGrid"})(({theme:t})=>({[t.breakpoints.down("sm")]:{"&.MuiGrid-item":{marginTop:4,paddingBottom:0}}})),te=a(y,{label:"StyledTableCell"})({padding:0,width:"100%"}),ee=a(y,{label:"StyledImagesTableCell"})({fontSize:"0.75rem",overflowWrap:"break-word",whiteSpace:"pre-wrap"}),re=a(B,{label:"StyledTableRow"})({...q}),ae=a(y,{label:"StyledRowTableCell"})({...q}),se=a(A,{label:"StyledTypography"})(({theme:t})=>({color:t.textColors.tableHeader,fontSize:".75rem",overflow:"hidden",textOverflow:"ellipsis",[t.breakpoints.between("sm","xl")]:{wordBreak:"break-word"},whiteSpace:"nowrap"})),ie=a("label",{label:"StyledUsernameLabel"})(({theme:t})=>({...G(t)})),oe=a("span",{label:"StyledLabelSpan"})({...v}),le=a("span",{label:"StyledUsernameSpan"})(({theme:t})=>({...G(t)})),ne=a(st,{label:"StyledLink"})(({theme:t})=>({color:t.textColors.tableStatic})),ce=a(y,{label:"StyledStackScriptSectionTableCell"})({border:0,paddingTop:100});export{te as S,Xt as a,Jt as b,ie as c,Yt as d,se as e,Zt as f,Qt as g,ce as h,Tt as i,re as j,Kt as k,ee as l,ae as m,ne as n,Vt as o,le as p,oe as q,$t as w};
