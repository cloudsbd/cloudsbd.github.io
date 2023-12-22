import{D as k}from"./index-cVx9Zqte.js";var y={exports:{}};y.exports;(function(v){(function(){var I,s,u,w,d,l,P,g,c;s={},g=this,v!==null&&v.exports?v.exports=s:g.ipaddr=s,P=function(r,t,e,n){var i,o;if(r.length!==t.length)throw new Error("ipaddr: cannot match CIDR for objects with different lengths");for(i=0;n>0;){if(o=e-n,o<0&&(o=0),r[i]>>o!==t[i]>>o)return!1;n-=e,i+=1}return!0},s.subnetMatch=function(r,t,e){var n,i,o,a,f;e==null&&(e="unicast");for(o in t)for(a=t[o],a[0]&&!(a[0]instanceof Array)&&(a=[a]),n=0,i=a.length;n<i;n++)if(f=a[n],r.kind()===f[0].kind()&&r.match.apply(r,f))return o;return e},s.IPv4=function(){function r(t){var e,n,i;if(t.length!==4)throw new Error("ipaddr: ipv4 octet count should be 4");for(e=0,n=t.length;e<n;e++)if(i=t[e],!(0<=i&&i<=255))throw new Error("ipaddr: ipv4 octet should fit in 8 bits");this.octets=t}return r.prototype.kind=function(){return"ipv4"},r.prototype.toString=function(){return this.octets.join(".")},r.prototype.toNormalizedString=function(){return this.toString()},r.prototype.toByteArray=function(){return this.octets.slice(0)},r.prototype.match=function(t,e){var n;if(e===void 0&&(n=t,t=n[0],e=n[1]),t.kind()!=="ipv4")throw new Error("ipaddr: cannot match ipv4 address with non-ipv4 one");return P(this.octets,t.octets,8,e)},r.prototype.SpecialRanges={unspecified:[[new r([0,0,0,0]),8]],broadcast:[[new r([255,255,255,255]),32]],multicast:[[new r([224,0,0,0]),4]],linkLocal:[[new r([169,254,0,0]),16]],loopback:[[new r([127,0,0,0]),8]],carrierGradeNat:[[new r([100,64,0,0]),10]],private:[[new r([10,0,0,0]),8],[new r([172,16,0,0]),12],[new r([192,168,0,0]),16]],reserved:[[new r([192,0,0,0]),24],[new r([192,0,2,0]),24],[new r([192,88,99,0]),24],[new r([198,51,100,0]),24],[new r([203,0,113,0]),24],[new r([240,0,0,0]),4]]},r.prototype.range=function(){return s.subnetMatch(this,this.SpecialRanges)},r.prototype.toIPv4MappedAddress=function(){return s.IPv6.parse("::ffff:"+this.toString())},r.prototype.prefixLengthFromSubnetMask=function(){var t,e,n,i,o,a,f;for(f={0:8,128:7,192:6,224:5,240:4,248:3,252:2,254:1,255:0},t=0,o=!1,e=n=3;n>=0;e=n+=-1)if(i=this.octets[e],i in f){if(a=f[i],o&&a!==0)return null;a!==8&&(o=!0),t+=a}else return null;return 32-t},r}(),u="(0?\\d+|0x[a-f0-9]+)",w={fourOctet:new RegExp("^"+u+"\\."+u+"\\."+u+"\\."+u+"$","i"),longValue:new RegExp("^"+u+"$","i")},s.IPv4.parser=function(r){var t,e,n,i,o;if(e=function(a){return a[0]==="0"&&a[1]!=="x"?parseInt(a,8):parseInt(a)},t=r.match(w.fourOctet))return function(){var a,f,p,h;for(p=t.slice(1,6),h=[],a=0,f=p.length;a<f;a++)n=p[a],h.push(e(n));return h}();if(t=r.match(w.longValue)){if(o=e(t[1]),o>4294967295||o<0)throw new Error("ipaddr: address outside defined range");return function(){var a,f;for(f=[],i=a=0;a<=24;i=a+=8)f.push(o>>i&255);return f}().reverse()}else return null},s.IPv6=function(){function r(t,e){var n,i,o,a,f,p;if(t.length===16)for(this.parts=[],n=i=0;i<=14;n=i+=2)this.parts.push(t[n]<<8|t[n+1]);else if(t.length===8)this.parts=t;else throw new Error("ipaddr: ipv6 part count should be 8 or 16");for(p=this.parts,o=0,a=p.length;o<a;o++)if(f=p[o],!(0<=f&&f<=65535))throw new Error("ipaddr: ipv6 part should fit in 16 bits");e&&(this.zoneId=e)}return r.prototype.kind=function(){return"ipv6"},r.prototype.toString=function(){return this.toNormalizedString().replace(/((^|:)(0(:|$))+)/,"::")},r.prototype.toRFC5952String=function(){var t,e,n,i,o;for(i=/((^|:)(0(:|$)){2,})/g,o=this.toNormalizedString(),t=0,e=-1;n=i.exec(o);)n[0].length>e&&(t=n.index,e=n[0].length);return e<0?o:o.substring(0,t)+"::"+o.substring(t+e)},r.prototype.toByteArray=function(){var t,e,n,i,o;for(t=[],o=this.parts,e=0,n=o.length;e<n;e++)i=o[e],t.push(i>>8),t.push(i&255);return t},r.prototype.toNormalizedString=function(){var t,e,n;return t=(function(){var i,o,a,f;for(a=this.parts,f=[],i=0,o=a.length;i<o;i++)e=a[i],f.push(e.toString(16));return f}).call(this).join(":"),n="",this.zoneId&&(n="%"+this.zoneId),t+n},r.prototype.toFixedLengthString=function(){var t,e,n;return t=(function(){var i,o,a,f;for(a=this.parts,f=[],i=0,o=a.length;i<o;i++)e=a[i],f.push(e.toString(16).padStart(4,"0"));return f}).call(this).join(":"),n="",this.zoneId&&(n="%"+this.zoneId),t+n},r.prototype.match=function(t,e){var n;if(e===void 0&&(n=t,t=n[0],e=n[1]),t.kind()!=="ipv6")throw new Error("ipaddr: cannot match ipv6 address with non-ipv6 one");return P(this.parts,t.parts,16,e)},r.prototype.SpecialRanges={unspecified:[new r([0,0,0,0,0,0,0,0]),128],linkLocal:[new r([65152,0,0,0,0,0,0,0]),10],multicast:[new r([65280,0,0,0,0,0,0,0]),8],loopback:[new r([0,0,0,0,0,0,0,1]),128],uniqueLocal:[new r([64512,0,0,0,0,0,0,0]),7],ipv4Mapped:[new r([0,0,0,0,0,65535,0,0]),96],rfc6145:[new r([0,0,0,0,65535,0,0,0]),96],rfc6052:[new r([100,65435,0,0,0,0,0,0]),96],"6to4":[new r([8194,0,0,0,0,0,0,0]),16],teredo:[new r([8193,0,0,0,0,0,0,0]),32],reserved:[[new r([8193,3512,0,0,0,0,0,0]),32]]},r.prototype.range=function(){return s.subnetMatch(this,this.SpecialRanges)},r.prototype.isIPv4MappedAddress=function(){return this.range()==="ipv4Mapped"},r.prototype.toIPv4Address=function(){var t,e,n;if(!this.isIPv4MappedAddress())throw new Error("ipaddr: trying to convert a generic ipv6 address to ipv4");return n=this.parts.slice(-2),t=n[0],e=n[1],new s.IPv4([t>>8,t&255,e>>8,e&255])},r.prototype.prefixLengthFromSubnetMask=function(){var t,e,n,i,o,a,f;for(f={0:16,32768:15,49152:14,57344:13,61440:12,63488:11,64512:10,65024:9,65280:8,65408:7,65472:6,65504:5,65520:4,65528:3,65532:2,65534:1,65535:0},t=0,o=!1,e=n=7;n>=0;e=n+=-1)if(i=this.parts[e],i in f){if(a=f[i],o&&a!==0)return null;a!==16&&(o=!0),t+=a}else return null;return 128-t},r}(),d="(?:[0-9a-f]+::?)+",c="%[0-9a-z]{1,}",l={zoneIndex:new RegExp(c,"i"),native:new RegExp("^(::)?("+d+")?([0-9a-f]+)?(::)?("+c+")?$","i"),transitional:new RegExp("^((?:"+d+")|(?:::)(?:"+d+")?)"+(u+"\\."+u+"\\."+u+"\\."+u)+("("+c+")?$"),"i")},I=function(r,t){var e,n,i,o,a,f;if(r.indexOf("::")!==r.lastIndexOf("::"))return null;for(f=(r.match(l.zoneIndex)||[])[0],f&&(f=f.substring(1),r=r.replace(/%.+$/,"")),e=0,n=-1;(n=r.indexOf(":",n+1))>=0;)e++;if(r.substr(0,2)==="::"&&e--,r.substr(-2,2)==="::"&&e--,e>t)return null;for(a=t-e,o=":";a--;)o+="0:";return r=r.replace("::",o),r[0]===":"&&(r=r.slice(1)),r[r.length-1]===":"&&(r=r.slice(0,-1)),t=function(){var p,h,x,m;for(x=r.split(":"),m=[],p=0,h=x.length;p<h;p++)i=x[p],m.push(parseInt(i,16));return m}(),{parts:t,zoneId:f}},s.IPv6.parser=function(r){var t,e,n,i,o,a,f;if(l.native.test(r))return I(r,8);if((i=r.match(l.transitional))&&(f=i[6]||"",t=I(i[1].slice(0,-1)+f,6),t.parts)){for(a=[parseInt(i[2]),parseInt(i[3]),parseInt(i[4]),parseInt(i[5])],e=0,n=a.length;e<n;e++)if(o=a[e],!(0<=o&&o<=255))return null;return t.parts.push(a[0]<<8|a[1]),t.parts.push(a[2]<<8|a[3]),{parts:t.parts,zoneId:t.zoneId}}return null},s.IPv4.isIPv4=s.IPv6.isIPv6=function(r){return this.parser(r)!==null},s.IPv4.isValid=function(r){try{return new this(this.parser(r)),!0}catch{return!1}},s.IPv4.isValidFourPartDecimal=function(r){return!!(s.IPv4.isValid(r)&&r.match(/^(0|[1-9]\d*)(\.(0|[1-9]\d*)){3}$/))},s.IPv6.isValid=function(r){var t;if(typeof r=="string"&&r.indexOf(":")===-1)return!1;try{return t=this.parser(r),new this(t.parts,t.zoneId),!0}catch{return!1}},s.IPv4.parse=function(r){var t;if(t=this.parser(r),t===null)throw new Error("ipaddr: string is not formatted like ip address");return new this(t)},s.IPv6.parse=function(r){var t;if(t=this.parser(r),t.parts===null)throw new Error("ipaddr: string is not formatted like ip address");return new this(t.parts,t.zoneId)},s.IPv4.parseCIDR=function(r){var t,e,n;if((e=r.match(/^(.+)\/(\d+)$/))&&(t=parseInt(e[2]),t>=0&&t<=32))return n=[this.parse(e[1]),t],Object.defineProperty(n,"toString",{value:function(){return this.join("/")}}),n;throw new Error("ipaddr: string is not formatted like an IPv4 CIDR range")},s.IPv4.subnetMaskFromPrefixLength=function(r){var t,e,n;if(r=parseInt(r),r<0||r>32)throw new Error("ipaddr: invalid IPv4 prefix length");for(n=[0,0,0,0],e=0,t=Math.floor(r/8);e<t;)n[e]=255,e++;return t<4&&(n[t]=Math.pow(2,r%8)-1<<8-r%8),new this(n)},s.IPv4.broadcastAddressFromCIDR=function(r){var t,e,n,i,o;try{for(t=this.parseCIDR(r),n=t[0].toByteArray(),o=this.subnetMaskFromPrefixLength(t[1]).toByteArray(),i=[],e=0;e<4;)i.push(parseInt(n[e],10)|parseInt(o[e],10)^255),e++;return new this(i)}catch{throw new Error("ipaddr: the address does not have IPv4 CIDR format")}},s.IPv4.networkAddressFromCIDR=function(r){var t,e,n,i,o;try{for(t=this.parseCIDR(r),n=t[0].toByteArray(),o=this.subnetMaskFromPrefixLength(t[1]).toByteArray(),i=[],e=0;e<4;)i.push(parseInt(n[e],10)&parseInt(o[e],10)),e++;return new this(i)}catch{throw new Error("ipaddr: the address does not have IPv4 CIDR format")}},s.IPv6.parseCIDR=function(r){var t,e,n;if((e=r.match(/^(.+)\/(\d+)$/))&&(t=parseInt(e[2]),t>=0&&t<=128))return n=[this.parse(e[1]),t],Object.defineProperty(n,"toString",{value:function(){return this.join("/")}}),n;throw new Error("ipaddr: string is not formatted like an IPv6 CIDR range")},s.isValid=function(r){return s.IPv6.isValid(r)||s.IPv4.isValid(r)},s.parse=function(r){if(s.IPv6.isValid(r))return s.IPv6.parse(r);if(s.IPv4.isValid(r))return s.IPv4.parse(r);throw new Error("ipaddr: the address has neither IPv6 nor IPv4 format")},s.parseCIDR=function(r){try{return s.IPv6.parseCIDR(r)}catch{try{return s.IPv4.parseCIDR(r)}catch{throw new Error("ipaddr: the address has neither IPv6 nor IPv4 CIDR format")}}},s.fromByteArray=function(r){var t;if(t=r.length,t===4)return new s.IPv4(r);if(t===16)return new s.IPv6(r);throw new Error("ipaddr: the binary input is neither an IPv6 nor IPv4 address")},s.process=function(r){var t;return t=this.parse(r),t.kind()==="ipv6"&&t.isIPv4MappedAddress()?t.toIPv4Address():t}}).call(k)})(y);var E=y.exports;export{E as i};