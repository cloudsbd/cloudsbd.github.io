import{g as p,r as h,h as u,i as m,k as l,w as d}from"./index-cVx9Zqte.js";class g extends h.PureComponent{componentDidMount(){const{history:t,location:s}=this.props;if(!s.hash||s.hash.length<2)return t.push("/");const e=u(s.hash.substr(1)),{access_token:r,destination:a,expires_in:i,token_type:c}=e;if(!r)return t.push("/");const o=new Date;o.setTime(o.getTime()+ +i*1e3),this.props.dispatchStartSession(r,c,o.toString()),t.push(`/${a}`)}render(){return null}}const S=n=>({dispatchStartSession:(t,s,e)=>n(l({expires:e,scopes:"*",token:`${s.charAt(0).toUpperCase()}${s.substr(1)} ${t}`}))}),k=m(void 0,S),C=p(k,d)(g);export{g as LoginAsCustomerCallback,C as default};
