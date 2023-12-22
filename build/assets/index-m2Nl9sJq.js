import{bt as _,ce as j}from"./index-cVx9Zqte.js";var I=!!(typeof window<"u"&&window.document&&window.document.createElement);function M(){if(!I||!window.addEventListener||!window.removeEventListener||!Object.defineProperty)return!1;var e=!1;try{var n=Object.defineProperty({},"passive",{get:function(){function r(){e=!0}return r}()}),o=function(){};window.addEventListener("testPassiveEventSupport",o,n),window.removeEventListener("testPassiveEventSupport",o,n)}catch{}return e}var P=void 0;function $(){return P===void 0&&(P=M()),P}function F(e){if(e)return $()?e:!!e.capture}function V(e){if(!e)return 0;if(e===!0)return 100;var n=e.capture<<0,o=e.passive<<1,r=e.once<<2;return n+o+r}function L(e){e.handlers===e.nextHandlers&&(e.nextHandlers=e.handlers.slice())}function O(e){this.target=e,this.events={}}O.prototype.getEventHandlers=function(){function e(n,o){var r=String(n)+" "+String(V(o));return this.events[r]||(this.events[r]={handlers:[],handleEvent:void 0},this.events[r].nextHandlers=this.events[r].handlers),this.events[r]}return e}();O.prototype.handleEvent=function(){function e(n,o,r){var i=this.getEventHandlers(n,o);i.handlers=i.nextHandlers,i.handlers.forEach(function(t){t&&t(r)})}return e}();O.prototype.add=function(){function e(n,o,r){var i=this,t=this.getEventHandlers(n,r);L(t),t.nextHandlers.length===0&&(t.handleEvent=this.handleEvent.bind(this,n,r),this.target.addEventListener(n,t.handleEvent,r)),t.nextHandlers.push(o);var a=!0,s=function(){function l(){if(a){a=!1,L(t);var p=t.nextHandlers.indexOf(o);t.nextHandlers.splice(p,1),t.nextHandlers.length===0&&(i.target&&i.target.removeEventListener(n,t.handleEvent,r),t.handleEvent=void 0)}}return l}();return s}return e}();var x="__consolidated_events_handlers__";function R(e,n,o,r){e[x]||(e[x]=new O(e));var i=F(r);return e[x].add(n,o,i)}function K(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function A(e,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Q(e,n,o){return n&&A(e.prototype,n),o&&A(e,o),e}function Y(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&S(e,n)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},g(e)}function S(e,n){return S=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},S(e,n)}function q(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function G(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function J(e,n){return n&&(typeof n=="object"||typeof n=="function")?n:G(e)}function X(e){var n=q();return function(){var r=g(e),i;if(n){var t=g(this).constructor;i=Reflect.construct(r,arguments,t)}else i=r.apply(this,arguments);return J(this,i)}}function Z(e){if(e.slice(-1)==="%")return parseFloat(e.slice(0,-1))/100}function ee(e){if(!isNaN(parseFloat(e))&&isFinite(e))return parseFloat(e);if(e.slice(-2)==="px")return parseFloat(e.slice(0,-2))}function k(e,n){var o=ee(e);if(typeof o=="number")return o;var r=Z(e);if(typeof r=="number")return r*n}var b="above",c="inside",E="below",B="invisible";function H(e){return typeof e.type=="string"}var te=`<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.

See https://goo.gl/LrBNgw for more info.`;function ne(e,n){if(e&&!H(e)&&!n)throw new Error(te)}function re(e){return e.viewportBottom-e.viewportTop===0?B:e.viewportTop<=e.waypointTop&&e.waypointTop<=e.viewportBottom||e.viewportTop<=e.waypointBottom&&e.waypointBottom<=e.viewportBottom||e.waypointTop<=e.viewportTop&&e.viewportBottom<=e.waypointBottom?c:e.viewportBottom<e.waypointTop?E:e.waypointTop<e.viewportTop?b:B}var h,w=[];function N(e){w.push(e),h||(h=setTimeout(function(){h=null;for(var o;o=w.shift();)o()},0));var n=!0;return function(){if(n){n=!1;var r=w.indexOf(e);r!==-1&&(w.splice(r,1),!w.length&&h&&(clearTimeout(h),h=null))}}}function ie(e){return e==="window"?global.window:e}var oe={debug:!1,scrollableAncestor:void 0,children:void 0,topOffset:"0px",bottomOffset:"0px",horizontal:!1,onEnter:function(){},onLeave:function(){},onPositionChange:function(){},fireOnRapidScroll:!0},v=function(e){Y(o,e);var n=X(o);function o(r){var i;return K(this,o),i=n.call(this,r),i.refElement=function(t){i._ref=t},i}return Q(o,[{key:"componentDidMount",value:function(){var i=this;o.getWindow()&&(this.cancelOnNextTick=N(function(){i.cancelOnNextTick=null;var t=i.props,a=t.children;t.debug,ne(a,i._ref),i._handleScroll=i._handleScroll.bind(i),i.scrollableAncestor=i._findScrollableAncestor(),i.scrollEventListenerUnsubscribe=R(i.scrollableAncestor,"scroll",i._handleScroll,{passive:!0}),i.resizeEventListenerUnsubscribe=R(window,"resize",i._handleScroll,{passive:!0}),i._handleScroll(null)}))}},{key:"componentDidUpdate",value:function(){var i=this;o.getWindow()&&this.scrollableAncestor&&(this.cancelOnNextTick||(this.cancelOnNextTick=N(function(){i.cancelOnNextTick=null,i._handleScroll(null)})))}},{key:"componentWillUnmount",value:function(){o.getWindow()&&(this.scrollEventListenerUnsubscribe&&this.scrollEventListenerUnsubscribe(),this.resizeEventListenerUnsubscribe&&this.resizeEventListenerUnsubscribe(),this.cancelOnNextTick&&this.cancelOnNextTick())}},{key:"_findScrollableAncestor",value:function(){var i=this.props,t=i.horizontal,a=i.scrollableAncestor;if(a)return ie(a);for(var s=this._ref;s.parentNode;){if(s=s.parentNode,s===document.body)return window;var l=window.getComputedStyle(s),p=t?l.getPropertyValue("overflow-x"):l.getPropertyValue("overflow-y"),u=p||l.getPropertyValue("overflow");if(u==="auto"||u==="scroll"||u==="overlay")return s}return window}},{key:"_handleScroll",value:function(i){if(this._ref){var t=this._getBounds(),a=re(t),s=this._previousPosition,l=this.props;l.debug;var p=l.onPositionChange,u=l.onEnter,y=l.onLeave,T=l.fireOnRapidScroll;if(this._previousPosition=a,s!==a){var f={currentPosition:a,previousPosition:s,event:i,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom};p.call(this,f),a===c?u.call(this,f):s===c&&y.call(this,f);var d=s===E&&a===b,m=s===b&&a===E;T&&(d||m)&&(u.call(this,{currentPosition:c,previousPosition:s,event:i,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom}),y.call(this,{currentPosition:a,previousPosition:c,event:i,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom}))}}}},{key:"_getBounds",value:function(){var i=this.props,t=i.horizontal;i.debug;var a=this._ref.getBoundingClientRect(),s=a.left,l=a.top,p=a.right,u=a.bottom,y=t?s:l,T=t?p:u,f,d;this.scrollableAncestor===window?(f=t?window.innerWidth:window.innerHeight,d=0):(f=t?this.scrollableAncestor.offsetWidth:this.scrollableAncestor.offsetHeight,d=t?this.scrollableAncestor.getBoundingClientRect().left:this.scrollableAncestor.getBoundingClientRect().top);var m=this.props,W=m.bottomOffset,D=m.topOffset,U=k(D,f),C=k(W,f),z=d+f;return{waypointTop:y,waypointBottom:T,viewportTop:d+U,viewportBottom:z-C}}},{key:"render",value:function(){var i=this,t=this.props.children;if(!t)return _.createElement("span",{ref:this.refElement,style:{fontSize:0}});if(H(t)||j.isForwardRef(t)){var a=function(l){i.refElement(l),t.ref&&(typeof t.ref=="function"?t.ref(l):t.ref.current=l)};return _.cloneElement(t,{ref:a})}return _.cloneElement(t,{innerRef:this.refElement})}}]),o}(_.PureComponent);v.above=b;v.below=E;v.inside=c;v.invisible=B;v.getWindow=function(){if(typeof window<"u")return window};v.defaultProps=oe;v.displayName="Waypoint";export{v as W};
