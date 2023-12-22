import{j as e,ad as A,gP as G,s as I,f as R,G as E,b1 as $,bB as y,bJ as U,bC as W,$ as Q,T as _,c1 as F,a1 as D,u as X,ao as q,bp as J,ba as z,r as w,gQ as K}from"./index-cVx9Zqte.js";import{C as Y,b as Z,c as ee}from"./constants-jI3mcPVd.js";import{R as se}from"./RegionSelect-bPwNTvP1.js";import{u as ae}from"./formik.esm-XrBweJub.js";import{a as te}from"./vpcs-2oJlMVgq.js";import{c as ne}from"./formikErrorUtils-k3dWKVdg.js";import{s as re}from"./scrollErrorIntoView-6n4Cku1Y.js";const xe=e.jsx(A,{important:!0,spacingTop:16,text:`${Y}`,variant:"error"}),L="10.0.4.0/24",oe=4,Ee=[{key:"label",label:"Linode Label"},{key:"id",label:"Linode ID"},{key:"ipv4",label:"IPv4"}],ie={0:4294967296,1:2147483648,2:1073741824,3:536870912,4:268435456,5:134217728,6:67108864,7:33554432,8:16777216,9:8388608,10:4194304,11:2097152,12:1048576,13:524288,14:262144,15:131072,16:65536,17:32768,18:16384,19:8192,20:4096,21:2048,22:1024,23:512,24:256,25:128,26:64,27:32,28:16,29:8,30:4,31:2,32:1},le=r=>{const[n,a]=r.split("/");if(G(r)!=="ipv4"||a===""||a===void 0)return;const[t,i]=n.split("."),s=parseInt(a,10),o=parseInt(i,10);if(!(t!=="10"&&t!=="172"&&t!=="192"||t==="10"&&s<8||t==="172"&&(o<16||o>31||s<12)||t==="192"&&(i!=="168"||i==="168"&&s<16)))return ie[a]},ce=r=>{const{disabled:n,idx:a,isCreateVPCDrawer:c,isRemovable:t,onChange:i,subnet:s}=r,o=C=>{const x={...s,label:C.target.value,labelError:""};i(x,a)},u=C=>{const x=le(C.target.value),T={...s,ip:{availIPv4s:x,ipv4:C.target.value}};i(T,a)},v=()=>{i(s,a,t)},p=c?a!==0&&t:t;return e.jsx(E,{sx:{maxWidth:460},children:e.jsxs(E,{container:!0,direction:"row",spacing:2,children:[e.jsx(E,{sx:{...!p&&{width:"100%"},flexGrow:1},xs:p?11:12,children:e.jsxs($,{children:[e.jsx(y,{"aria-label":"Enter a subnet label",disabled:n,errorText:s.labelError,inputId:`subnet-label-${a}`,label:"Subnet Label",onChange:o,placeholder:"Enter a subnet label",value:s.label}),e.jsx(y,{"aria-label":"Enter an IPv4",disabled:n,errorText:s.ip.ipv4Error,inputId:`subnet-ipv4-${a}`,label:"Subnet IP Address Range",onChange:u,value:s.ip.ipv4}),s.ip.availIPv4s&&e.jsxs(U,{children:["Number of Available IP Addresses:"," ",s.ip.availIPv4s>4?(s.ip.availIPv4s-oe).toLocaleString():0]})]})}),p&&e.jsx(E,{xs:1,children:e.jsx(de,{"aria-label":"Remove Subnet",onClick:v,children:e.jsx(W,{"data-testid":`delete-subnet-${a}`})})})]})},a)},de=I(R,{label:"StyledButton"})(({theme:r})=>({"& :hover, & :focus":{backgroundColor:r.color.grey2},"& > span":{padding:2},color:r.textColors.tableHeader,marginTop:r.spacing(6),minHeight:"auto",minWidth:"auto",padding:0})),ue=r=>{const{disabled:n,isDrawer:a,onChange:c,subnets:t}=r,i=()=>{c([...t,{ip:{availIPv4s:256,ipv4:L,ipv4Error:""},label:"",labelError:""}])},s=(o,u,v)=>{const p=[...t];v?p.splice(u,1):p[u]=o,c(p)};return e.jsxs(E,{children:[t.map((o,u)=>e.jsxs(E,{"data-qa-subnet-node":u,children:[u!==0&&e.jsx(Q,{sx:v=>({marginTop:v.spacing(2.5)})}),e.jsx(ce,{onChange:(v,p,C)=>s(v,p??0,!!C),disabled:n,idx:u,isCreateVPCDrawer:a,isRemovable:!0,subnet:o})]},`subnet-${u}`)),e.jsxs(R,{buttonType:"outlined",disabled:n,onClick:i,sx:o=>({marginTop:o.spacing(3)}),children:["Add ",t.length>0?"another":"a"," Subnet"]})]})},k=I(_,{label:"StyledBodyTypography",shouldForwardProp:F(["isDrawer"])})(({isDrawer:r,theme:n})=>({marginBottom:n.spacing(1),marginTop:n.spacing(2),...!r&&{[n.breakpoints.up("sm")]:{maxWidth:"80%"}}})),pe=I(_,{label:"StyledHeaderTypography",shouldForwardProp:F(["isDrawer"])})(({isDrawer:r,theme:n})=>({marginTop:r?n.spacing(3):n.spacing(1)})),ye=r=>{const{disabled:n,isDrawer:a,onChangeField:c,subnetErrors:t,subnets:i}=r;return e.jsxs(e.Fragment,{children:[e.jsx(pe,{isDrawer:a,variant:"h2",children:"Subnets"}),e.jsxs(k,{isDrawer:a,variant:"body1",children:[Z," ",e.jsx(D,{to:"https://www.linode.com/docs/products/networking/vpc/guides/subnets/",children:"Learn more"}),"."]}),t?t.map(s=>e.jsx(A,{spacingBottom:8,text:s.reason,variant:"error"},s.reason)):null,e.jsx(ue,{disabled:n,isDrawer:a,onChange:s=>c("subnets",s),subnets:i})]})},Te=r=>{const{disabled:n,errors:a,isDrawer:c,onChangeField:t,regions:i,values:s}=r;return e.jsxs(e.Fragment,{children:[e.jsxs(k,{isDrawer:c,variant:"body1",children:[ee," ",e.jsx(D,{to:"https://www.linode.com/docs/products/networking/vpc/",children:"Learn more"}),"."]}),e.jsx(se,{"aria-label":"Choose a region",currentCapability:"VPCs",disabled:c?!0:n,errorText:a.region,handleSelection:o=>t("region",o),isClearable:!0,regions:i,selectedId:s.region}),e.jsx(y,{onChange:o=>t("label",o.target.value),"aria-label":"Enter a label",disabled:n,errorText:a.label,label:"VPC Label",value:s.label}),e.jsx(y,{onChange:o=>t("description",o.target.value),disabled:n,errorText:a.description,label:"Description",maxRows:1,multiline:!0,optional:!0,value:s.description})]})},fe=r=>{const{handleSelectVPC:n,onDrawerClose:a,pushToVPCPage:c,selectedRegion:t}=r,i=X(),{data:s}=q(),{data:o}=J(),u=(s==null?void 0:s.restricted)&&!(o!=null&&o.global.add_vpcs),{data:v}=z(),p=v??[],[C,x]=w.useState(),[T,f]=w.useState(),{isLoading:B,mutateAsync:M}=te(),N=()=>{const b=[],h={};let m=0;for(let l=0;l<d.values.subnets.length;l++){const{ip:g,label:P}=d.values.subnets[l];(a&&l===0||g.ipv4||P)&&(b.push({ipv4:g.ipv4,label:P}),h[l]=m,m++)}return{subnetsPayload:b,visualToAPISubnetMapping:h}},H=(b,h)=>d.values.subnets.map((m,l)=>{const g=h[l];if((g||g===0)&&b[g]){const P=b[g];return{...m,ip:{...m.ip,ipv4Error:P.ipv4??""},labelError:P.label??""}}else return m}),j=async()=>{d.setSubmitting(!0),f(void 0);const{subnetsPayload:b,visualToAPISubnetMapping:h}=N(),m={...d.values,subnets:b};try{const l=await M(m);c?i.push(`/vpcs/${l.id}`):n&&a&&(n(l.id),a())}catch(l){const g=l.filter(S=>S.field&&S.field.includes("subnets")&&!S.field.includes("["));g&&x(g);const P=ne(l.filter(S=>{var V;return!((V=S.field)!=null&&V.includes("subnets"))||!S.field||S.field.includes("[")}),d.setFieldError,f),O=H(P,h);d.setFieldValue("subnets",O),re()}d.setSubmitting(!1)},d=ae({initialValues:{description:"",label:"",region:t??"",subnets:[{ip:{availIPv4s:256,ipv4:L,ipv4Error:""},label:"",labelError:""}]},onSubmit:j,validateOnChange:!1,validationSchema:K});return{formik:d,generalAPIError:T,generalSubnetErrorsFromAPI:C,isLoadingCreateVPC:B,onChangeField:(b,h)=>{d.setFieldValue(b,h),d.errors[b]&&d.setFieldError(b,void 0)},onCreateVPC:j,regionsData:p,setGeneralAPIError:f,setGeneralSubnetErrorsFromAPI:x,userCannotAddVPC:u}};export{xe as C,L as D,ye as S,Te as V,pe as a,Ee as b,ce as c,fe as u};