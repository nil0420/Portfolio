(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function e(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=e(o);fetch(o.href,l)}})();function Sy(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Qh={exports:{}},nl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o_;function BM(){if(o_)return nl;o_=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function e(r,o,l){var u=null;if(l!==void 0&&(u=""+l),o.key!==void 0&&(u=""+o.key),"key"in o){l={};for(var f in o)f!=="key"&&(l[f]=o[f])}else l=o;return o=l.ref,{$$typeof:i,type:r,key:u,ref:o!==void 0?o:null,props:l}}return nl.Fragment=t,nl.jsx=e,nl.jsxs=e,nl}var l_;function HM(){return l_||(l_=1,Qh.exports=BM()),Qh.exports}var st=HM(),Jh={exports:{}},de={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c_;function GM(){if(c_)return de;c_=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),e=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function _(P){return P===null||typeof P!="object"?null:(P=v&&P[v]||P["@@iterator"],typeof P=="function"?P:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,b={};function S(P,et,yt){this.props=P,this.context=et,this.refs=b,this.updater=yt||y}S.prototype.isReactComponent={},S.prototype.setState=function(P,et){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,et,"setState")},S.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function x(){}x.prototype=S.prototype;function U(P,et,yt){this.props=P,this.context=et,this.refs=b,this.updater=yt||y}var D=U.prototype=new x;D.constructor=U,M(D,S.prototype),D.isPureReactComponent=!0;var A=Array.isArray,N={H:null,A:null,T:null,S:null,V:null},I=Object.prototype.hasOwnProperty;function z(P,et,yt,Et,Nt,Vt){return yt=Vt.ref,{$$typeof:i,type:P,key:et,ref:yt!==void 0?yt:null,props:Vt}}function X(P,et){return z(P.type,et,void 0,void 0,void 0,P.props)}function L(P){return typeof P=="object"&&P!==null&&P.$$typeof===i}function C(P){var et={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(yt){return et[yt]})}var H=/\/+/g;function Z(P,et){return typeof P=="object"&&P!==null&&P.key!=null?C(""+P.key):et.toString(36)}function lt(){}function tt(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(lt,lt):(P.status="pending",P.then(function(et){P.status==="pending"&&(P.status="fulfilled",P.value=et)},function(et){P.status==="pending"&&(P.status="rejected",P.reason=et)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function dt(P,et,yt,Et,Nt){var Vt=typeof P;(Vt==="undefined"||Vt==="boolean")&&(P=null);var it=!1;if(P===null)it=!0;else switch(Vt){case"bigint":case"string":case"number":it=!0;break;case"object":switch(P.$$typeof){case i:case t:it=!0;break;case g:return it=P._init,dt(it(P._payload),et,yt,Et,Nt)}}if(it)return Nt=Nt(P),it=Et===""?"."+Z(P,0):Et,A(Nt)?(yt="",it!=null&&(yt=it.replace(H,"$&/")+"/"),dt(Nt,et,yt,"",function($t){return $t})):Nt!=null&&(L(Nt)&&(Nt=X(Nt,yt+(Nt.key==null||P&&P.key===Nt.key?"":(""+Nt.key).replace(H,"$&/")+"/")+it)),et.push(Nt)),1;it=0;var vt=Et===""?".":Et+":";if(A(P))for(var Mt=0;Mt<P.length;Mt++)Et=P[Mt],Vt=vt+Z(Et,Mt),it+=dt(Et,et,yt,Vt,Nt);else if(Mt=_(P),typeof Mt=="function")for(P=Mt.call(P),Mt=0;!(Et=P.next()).done;)Et=Et.value,Vt=vt+Z(Et,Mt++),it+=dt(Et,et,yt,Vt,Nt);else if(Vt==="object"){if(typeof P.then=="function")return dt(tt(P),et,yt,Et,Nt);throw et=String(P),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return it}function F(P,et,yt){if(P==null)return P;var Et=[],Nt=0;return dt(P,Et,"","",function(Vt){return et.call(yt,Vt,Nt++)}),Et}function $(P){if(P._status===-1){var et=P._result;et=et(),et.then(function(yt){(P._status===0||P._status===-1)&&(P._status=1,P._result=yt)},function(yt){(P._status===0||P._status===-1)&&(P._status=2,P._result=yt)}),P._status===-1&&(P._status=0,P._result=et)}if(P._status===1)return P._result.default;throw P._result}var j=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)};function St(){}return de.Children={map:F,forEach:function(P,et,yt){F(P,function(){et.apply(this,arguments)},yt)},count:function(P){var et=0;return F(P,function(){et++}),et},toArray:function(P){return F(P,function(et){return et})||[]},only:function(P){if(!L(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},de.Component=S,de.Fragment=e,de.Profiler=o,de.PureComponent=U,de.StrictMode=r,de.Suspense=d,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,de.__COMPILER_RUNTIME={__proto__:null,c:function(P){return N.H.useMemoCache(P)}},de.cache=function(P){return function(){return P.apply(null,arguments)}},de.cloneElement=function(P,et,yt){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Et=M({},P.props),Nt=P.key,Vt=void 0;if(et!=null)for(it in et.ref!==void 0&&(Vt=void 0),et.key!==void 0&&(Nt=""+et.key),et)!I.call(et,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&et.ref===void 0||(Et[it]=et[it]);var it=arguments.length-2;if(it===1)Et.children=yt;else if(1<it){for(var vt=Array(it),Mt=0;Mt<it;Mt++)vt[Mt]=arguments[Mt+2];Et.children=vt}return z(P.type,Nt,void 0,void 0,Vt,Et)},de.createContext=function(P){return P={$$typeof:u,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:l,_context:P},P},de.createElement=function(P,et,yt){var Et,Nt={},Vt=null;if(et!=null)for(Et in et.key!==void 0&&(Vt=""+et.key),et)I.call(et,Et)&&Et!=="key"&&Et!=="__self"&&Et!=="__source"&&(Nt[Et]=et[Et]);var it=arguments.length-2;if(it===1)Nt.children=yt;else if(1<it){for(var vt=Array(it),Mt=0;Mt<it;Mt++)vt[Mt]=arguments[Mt+2];Nt.children=vt}if(P&&P.defaultProps)for(Et in it=P.defaultProps,it)Nt[Et]===void 0&&(Nt[Et]=it[Et]);return z(P,Vt,void 0,void 0,null,Nt)},de.createRef=function(){return{current:null}},de.forwardRef=function(P){return{$$typeof:f,render:P}},de.isValidElement=L,de.lazy=function(P){return{$$typeof:g,_payload:{_status:-1,_result:P},_init:$}},de.memo=function(P,et){return{$$typeof:p,type:P,compare:et===void 0?null:et}},de.startTransition=function(P){var et=N.T,yt={};N.T=yt;try{var Et=P(),Nt=N.S;Nt!==null&&Nt(yt,Et),typeof Et=="object"&&Et!==null&&typeof Et.then=="function"&&Et.then(St,j)}catch(Vt){j(Vt)}finally{N.T=et}},de.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},de.use=function(P){return N.H.use(P)},de.useActionState=function(P,et,yt){return N.H.useActionState(P,et,yt)},de.useCallback=function(P,et){return N.H.useCallback(P,et)},de.useContext=function(P){return N.H.useContext(P)},de.useDebugValue=function(){},de.useDeferredValue=function(P,et){return N.H.useDeferredValue(P,et)},de.useEffect=function(P,et,yt){var Et=N.H;if(typeof yt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Et.useEffect(P,et)},de.useId=function(){return N.H.useId()},de.useImperativeHandle=function(P,et,yt){return N.H.useImperativeHandle(P,et,yt)},de.useInsertionEffect=function(P,et){return N.H.useInsertionEffect(P,et)},de.useLayoutEffect=function(P,et){return N.H.useLayoutEffect(P,et)},de.useMemo=function(P,et){return N.H.useMemo(P,et)},de.useOptimistic=function(P,et){return N.H.useOptimistic(P,et)},de.useReducer=function(P,et,yt){return N.H.useReducer(P,et,yt)},de.useRef=function(P){return N.H.useRef(P)},de.useState=function(P){return N.H.useState(P)},de.useSyncExternalStore=function(P,et,yt){return N.H.useSyncExternalStore(P,et,yt)},de.useTransition=function(){return N.H.useTransition()},de.version="19.1.1",de}var u_;function rm(){return u_||(u_=1,Jh.exports=GM()),Jh.exports}var pt=rm();const sm=Sy(pt);var td={exports:{}},il={},ed={exports:{}},nd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f_;function VM(){return f_||(f_=1,(function(i){function t(F,$){var j=F.length;F.push($);t:for(;0<j;){var St=j-1>>>1,P=F[St];if(0<o(P,$))F[St]=$,F[j]=P,j=St;else break t}}function e(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var $=F[0],j=F.pop();if(j!==$){F[0]=j;t:for(var St=0,P=F.length,et=P>>>1;St<et;){var yt=2*(St+1)-1,Et=F[yt],Nt=yt+1,Vt=F[Nt];if(0>o(Et,j))Nt<P&&0>o(Vt,Et)?(F[St]=Vt,F[Nt]=j,St=Nt):(F[St]=Et,F[yt]=j,St=yt);else if(Nt<P&&0>o(Vt,j))F[St]=Vt,F[Nt]=j,St=Nt;else break t}}return $}function o(F,$){var j=F.sortIndex-$.sortIndex;return j!==0?j:F.id-$.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();i.unstable_now=function(){return u.now()-f}}var d=[],p=[],g=1,v=null,_=3,y=!1,M=!1,b=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function A(F){for(var $=e(p);$!==null;){if($.callback===null)r(p);else if($.startTime<=F)r(p),$.sortIndex=$.expirationTime,t(d,$);else break;$=e(p)}}function N(F){if(b=!1,A(F),!M)if(e(d)!==null)M=!0,I||(I=!0,Z());else{var $=e(p);$!==null&&dt(N,$.startTime-F)}}var I=!1,z=-1,X=5,L=-1;function C(){return S?!0:!(i.unstable_now()-L<X)}function H(){if(S=!1,I){var F=i.unstable_now();L=F;var $=!0;try{t:{M=!1,b&&(b=!1,U(z),z=-1),y=!0;var j=_;try{e:{for(A(F),v=e(d);v!==null&&!(v.expirationTime>F&&C());){var St=v.callback;if(typeof St=="function"){v.callback=null,_=v.priorityLevel;var P=St(v.expirationTime<=F);if(F=i.unstable_now(),typeof P=="function"){v.callback=P,A(F),$=!0;break e}v===e(d)&&r(d),A(F)}else r(d);v=e(d)}if(v!==null)$=!0;else{var et=e(p);et!==null&&dt(N,et.startTime-F),$=!1}}break t}finally{v=null,_=j,y=!1}$=void 0}}finally{$?Z():I=!1}}}var Z;if(typeof D=="function")Z=function(){D(H)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,tt=lt.port2;lt.port1.onmessage=H,Z=function(){tt.postMessage(null)}}else Z=function(){x(H,0)};function dt(F,$){z=x(function(){F(i.unstable_now())},$)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(F){F.callback=null},i.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<F?Math.floor(1e3/F):5},i.unstable_getCurrentPriorityLevel=function(){return _},i.unstable_next=function(F){switch(_){case 1:case 2:case 3:var $=3;break;default:$=_}var j=_;_=$;try{return F()}finally{_=j}},i.unstable_requestPaint=function(){S=!0},i.unstable_runWithPriority=function(F,$){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var j=_;_=F;try{return $()}finally{_=j}},i.unstable_scheduleCallback=function(F,$,j){var St=i.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?St+j:St):j=St,F){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=j+P,F={id:g++,callback:$,priorityLevel:F,startTime:j,expirationTime:P,sortIndex:-1},j>St?(F.sortIndex=j,t(p,F),e(d)===null&&F===e(p)&&(b?(U(z),z=-1):b=!0,dt(N,j-St))):(F.sortIndex=P,t(d,F),M||y||(M=!0,I||(I=!0,Z()))),F},i.unstable_shouldYield=C,i.unstable_wrapCallback=function(F){var $=_;return function(){var j=_;_=$;try{return F.apply(this,arguments)}finally{_=j}}}})(nd)),nd}var h_;function kM(){return h_||(h_=1,ed.exports=VM()),ed.exports}var id={exports:{}},Nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d_;function XM(){if(d_)return Nn;d_=1;var i=rm();function t(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function e(){}var r={d:{f:e,r:function(){throw Error(t(522))},D:e,C:e,L:e,m:e,X:e,S:e,M:e},p:0,findDOMNode:null},o=Symbol.for("react.portal");function l(d,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:d,containerInfo:p,implementation:g}}var u=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Nn.createPortal=function(d,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return l(d,p,null,g)},Nn.flushSync=function(d){var p=u.T,g=r.p;try{if(u.T=null,r.p=2,d)return d()}finally{u.T=p,r.p=g,r.d.f()}},Nn.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(d,p))},Nn.prefetchDNS=function(d){typeof d=="string"&&r.d.D(d)},Nn.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var g=p.as,v=f(g,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:y}):g==="script"&&r.d.X(d,{crossOrigin:v,integrity:_,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Nn.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=f(p.as,p.crossOrigin);r.d.M(d,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(d)},Nn.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=f(g,p.crossOrigin);r.d.L(d,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Nn.preloadModule=function(d,p){if(typeof d=="string")if(p){var g=f(p.as,p.crossOrigin);r.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(d)},Nn.requestFormReset=function(d){r.d.r(d)},Nn.unstable_batchedUpdates=function(d,p){return d(p)},Nn.useFormState=function(d,p,g){return u.H.useFormState(d,p,g)},Nn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Nn.version="19.1.1",Nn}var p_;function WM(){if(p_)return id.exports;p_=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),id.exports=XM(),id.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_;function jM(){if(m_)return il;m_=1;var i=kM(),t=rm(),e=WM();function r(n){var a="https://react.dev/errors/"+n;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)a+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var a=n,s=n;if(n.alternate)for(;a.return;)a=a.return;else{n=a;do a=n,(a.flags&4098)!==0&&(s=a.return),n=a.return;while(n)}return a.tag===3?s:null}function u(n){if(n.tag===13){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function f(n){if(l(n)!==n)throw Error(r(188))}function d(n){var a=n.alternate;if(!a){if(a=l(n),a===null)throw Error(r(188));return a!==n?null:n}for(var s=n,c=a;;){var h=s.return;if(h===null)break;var m=h.alternate;if(m===null){if(c=h.return,c!==null){s=c;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===s)return f(h),n;if(m===c)return f(h),a;m=m.sibling}throw Error(r(188))}if(s.return!==c.return)s=h,c=m;else{for(var T=!1,w=h.child;w;){if(w===s){T=!0,s=h,c=m;break}if(w===c){T=!0,c=h,s=m;break}w=w.sibling}if(!T){for(w=m.child;w;){if(w===s){T=!0,s=m,c=h;break}if(w===c){T=!0,c=m,s=h;break}w=w.sibling}if(!T)throw Error(r(189))}}if(s.alternate!==c)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?n:a}function p(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n;for(n=n.child;n!==null;){if(a=p(n),a!==null)return a;n=n.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),U=Symbol.for("react.consumer"),D=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function Z(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var lt=Symbol.for("react.client.reference");function tt(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===lt?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case M:return"Fragment";case S:return"Profiler";case b:return"StrictMode";case N:return"Suspense";case I:return"SuspenseList";case L:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case y:return"Portal";case D:return(n.displayName||"Context")+".Provider";case U:return(n._context.displayName||"Context")+".Consumer";case A:var a=n.render;return n=n.displayName,n||(n=a.displayName||a.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case z:return a=n.displayName||null,a!==null?a:tt(n.type)||"Memo";case X:a=n._payload,n=n._init;try{return tt(n(a))}catch{}}return null}var dt=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},St=[],P=-1;function et(n){return{current:n}}function yt(n){0>P||(n.current=St[P],St[P]=null,P--)}function Et(n,a){P++,St[P]=n.current,n.current=a}var Nt=et(null),Vt=et(null),it=et(null),vt=et(null);function Mt(n,a){switch(Et(it,a),Et(Vt,n),Et(Nt,null),a.nodeType){case 9:case 11:n=(n=a.documentElement)&&(n=n.namespaceURI)?P0(n):0;break;default:if(n=a.tagName,a=a.namespaceURI)a=P0(a),n=I0(a,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}yt(Nt),Et(Nt,n)}function $t(){yt(Nt),yt(Vt),yt(it)}function Yt(n){n.memoizedState!==null&&Et(vt,n);var a=Nt.current,s=I0(a,n.type);a!==s&&(Et(Vt,n),Et(Nt,s))}function he(n){Vt.current===n&&(yt(Nt),yt(Vt)),vt.current===n&&(yt(vt),$o._currentValue=j)}var Je=Object.prototype.hasOwnProperty,G=i.unstable_scheduleCallback,Ne=i.unstable_cancelCallback,le=i.unstable_shouldYield,ne=i.unstable_requestPaint,zt=i.unstable_now,Te=i.unstable_getCurrentPriorityLevel,kt=i.unstable_ImmediatePriority,ce=i.unstable_UserBlockingPriority,Xe=i.unstable_NormalPriority,We=i.unstable_LowPriority,O=i.unstable_IdlePriority,E=i.log,V=i.unstable_setDisableYieldValue,Q=null,ft=null;function at(n){if(typeof E=="function"&&V(n),ft&&typeof ft.setStrictMode=="function")try{ft.setStrictMode(Q,n)}catch{}}var Dt=Math.clz32?Math.clz32:Wt,Ct=Math.log,Ht=Math.LN2;function Wt(n){return n>>>=0,n===0?32:31-(Ct(n)/Ht|0)|0}var bt=256,Pt=4194304;function Qt(n){var a=n&42;if(a!==0)return a;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function qt(n,a,s){var c=n.pendingLanes;if(c===0)return 0;var h=0,m=n.suspendedLanes,T=n.pingedLanes;n=n.warmLanes;var w=c&134217727;return w!==0?(c=w&~m,c!==0?h=Qt(c):(T&=w,T!==0?h=Qt(T):s||(s=w&~n,s!==0&&(h=Qt(s))))):(w=c&~m,w!==0?h=Qt(w):T!==0?h=Qt(T):s||(s=c&~n,s!==0&&(h=Qt(s)))),h===0?0:a!==0&&a!==h&&(a&m)===0&&(m=h&-h,s=a&-a,m>=s||m===32&&(s&4194048)!==0)?a:h}function Lt(n,a){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&a)===0}function ue(n,a){switch(n){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W(){var n=bt;return bt<<=1,(bt&4194048)===0&&(bt=256),n}function wt(){var n=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),n}function Ut(n){for(var a=[],s=0;31>s;s++)a.push(n);return a}function Bt(n,a){n.pendingLanes|=a,a!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Tt(n,a,s,c,h,m){var T=n.pendingLanes;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=s,n.entangledLanes&=s,n.errorRecoveryDisabledLanes&=s,n.shellSuspendCounter=0;var w=n.entanglements,B=n.expirationTimes,nt=n.hiddenUpdates;for(s=T&~s;0<s;){var mt=31-Dt(s),_t=1<<mt;w[mt]=0,B[mt]=-1;var rt=nt[mt];if(rt!==null)for(nt[mt]=null,mt=0;mt<rt.length;mt++){var ot=rt[mt];ot!==null&&(ot.lane&=-536870913)}s&=~_t}c!==0&&xt(n,c,0),m!==0&&h===0&&n.tag!==0&&(n.suspendedLanes|=m&~(T&~a))}function xt(n,a,s){n.pendingLanes|=a,n.suspendedLanes&=~a;var c=31-Dt(a);n.entangledLanes|=a,n.entanglements[c]=n.entanglements[c]|1073741824|s&4194090}function jt(n,a){var s=n.entangledLanes|=a;for(n=n.entanglements;s;){var c=31-Dt(s),h=1<<c;h&a|n[c]&a&&(n[c]|=a),s&=~h}}function oe(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Oe(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function we(){var n=$.p;return n!==0?n:(n=window.event,n===void 0?32:e_(n.type))}function vi(n,a){var s=$.p;try{return $.p=n,a()}finally{$.p=s}}var pn=Math.random().toString(36).slice(2),mn="__reactFiber$"+pn,tn="__reactProps$"+pn,Li="__reactContainer$"+pn,Yr="__reactEvents$"+pn,Pl="__reactListeners$"+pn,Zr="__reactHandles$"+pn,lo="__reactResources$"+pn,Ni="__reactMarker$"+pn;function Kr(n){delete n[mn],delete n[tn],delete n[Yr],delete n[Pl],delete n[Zr]}function ji(n){var a=n[mn];if(a)return a;for(var s=n.parentNode;s;){if(a=s[Li]||s[mn]){if(s=a.alternate,a.child!==null||s!==null&&s.child!==null)for(n=H0(n);n!==null;){if(s=n[mn])return s;n=H0(n)}return a}n=s,s=n.parentNode}return null}function wa(n){if(n=n[mn]||n[Li]){var a=n.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return n}return null}function hr(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n.stateNode;throw Error(r(33))}function Ra(n){var a=n[lo];return a||(a=n[lo]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function ln(n){n[Ni]=!0}var Il=new Set,Fl={};function R(n,a){q(n,a),q(n+"Capture",a)}function q(n,a){for(Fl[n]=a,n=0;n<a.length;n++)Il.add(a[n])}var ut=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ht={},K={};function At(n){return Je.call(K,n)?!0:Je.call(ht,n)?!1:ut.test(n)?K[n]=!0:(ht[n]=!0,!1)}function Ot(n,a,s){if(At(a))if(s===null)n.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":n.removeAttribute(a);return;case"boolean":var c=a.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){n.removeAttribute(a);return}}n.setAttribute(a,""+s)}}function Gt(n,a,s){if(s===null)n.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttribute(a,""+s)}}function It(n,a,s,c){if(c===null)n.removeAttribute(s);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttributeNS(a,s,""+c)}}var ee,ae;function Zt(n){if(ee===void 0)try{throw Error()}catch(s){var a=s.stack.trim().match(/\n( *(at )?)/);ee=a&&a[1]||"",ae=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ee+n+ae}var me=!1;function Re(n,a){if(!n||me)return"";me=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(a){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(ot){var rt=ot}Reflect.construct(n,[],_t)}else{try{_t.call()}catch(ot){rt=ot}n.call(_t.prototype)}}else{try{throw Error()}catch(ot){rt=ot}(_t=n())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(ot){if(ot&&rt&&typeof ot.stack=="string")return[ot.stack,rt.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=c.DetermineComponentFrameRoot(),T=m[0],w=m[1];if(T&&w){var B=T.split(`
`),nt=w.split(`
`);for(h=c=0;c<B.length&&!B[c].includes("DetermineComponentFrameRoot");)c++;for(;h<nt.length&&!nt[h].includes("DetermineComponentFrameRoot");)h++;if(c===B.length||h===nt.length)for(c=B.length-1,h=nt.length-1;1<=c&&0<=h&&B[c]!==nt[h];)h--;for(;1<=c&&0<=h;c--,h--)if(B[c]!==nt[h]){if(c!==1||h!==1)do if(c--,h--,0>h||B[c]!==nt[h]){var mt=`
`+B[c].replace(" at new "," at ");return n.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",n.displayName)),mt}while(1<=c&&0<=h);break}}}finally{me=!1,Error.prepareStackTrace=s}return(s=n?n.displayName||n.name:"")?Zt(s):""}function Ze(n){switch(n.tag){case 26:case 27:case 5:return Zt(n.type);case 16:return Zt("Lazy");case 13:return Zt("Suspense");case 19:return Zt("SuspenseList");case 0:case 15:return Re(n.type,!1);case 11:return Re(n.type.render,!1);case 1:return Re(n.type,!0);case 31:return Zt("Activity");default:return""}}function Fe(n){try{var a="";do a+=Ze(n),n=n.return;while(n);return a}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function ge(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function te(n){var a=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function qe(n){var a=te(n)?"checked":"value",s=Object.getOwnPropertyDescriptor(n.constructor.prototype,a),c=""+n[a];if(!n.hasOwnProperty(a)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,m=s.set;return Object.defineProperty(n,a,{configurable:!0,get:function(){return h.call(this)},set:function(T){c=""+T,m.call(this,T)}}),Object.defineProperty(n,a,{enumerable:s.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[a]}}}}function ye(n){n._valueTracker||(n._valueTracker=qe(n))}function Dn(n){if(!n)return!1;var a=n._valueTracker;if(!a)return!0;var s=a.getValue(),c="";return n&&(c=te(n)?n.checked?"true":"false":n.value),n=c,n!==s?(a.setValue(n),!0):!1}function _i(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var In=/[\n"\\]/g;function yn(n){return n.replace(In,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Ve(n,a,s,c,h,m,T,w){n.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?n.type=T:n.removeAttribute("type"),a!=null?T==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+ge(a)):n.value!==""+ge(a)&&(n.value=""+ge(a)):T!=="submit"&&T!=="reset"||n.removeAttribute("value"),a!=null?Un(n,T,ge(a)):s!=null?Un(n,T,ge(s)):c!=null&&n.removeAttribute("value"),h==null&&m!=null&&(n.defaultChecked=!!m),h!=null&&(n.checked=h&&typeof h!="function"&&typeof h!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?n.name=""+ge(w):n.removeAttribute("name")}function Fn(n,a,s,c,h,m,T,w){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(n.type=m),a!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||a!=null))return;s=s!=null?""+ge(s):"",a=a!=null?""+ge(a):s,w||a===n.value||(n.value=a),n.defaultValue=a}c=c??h,c=typeof c!="function"&&typeof c!="symbol"&&!!c,n.checked=w?n.checked:!!c,n.defaultChecked=!!c,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(n.name=T)}function Un(n,a,s){a==="number"&&_i(n.ownerDocument)===n||n.defaultValue===""+s||(n.defaultValue=""+s)}function en(n,a,s,c){if(n=n.options,a){a={};for(var h=0;h<s.length;h++)a["$"+s[h]]=!0;for(s=0;s<n.length;s++)h=a.hasOwnProperty("$"+n[s].value),n[s].selected!==h&&(n[s].selected=h),h&&c&&(n[s].defaultSelected=!0)}else{for(s=""+ge(s),a=null,h=0;h<n.length;h++){if(n[h].value===s){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}a!==null||n[h].disabled||(a=n[h])}a!==null&&(a.selected=!0)}}function Tn(n,a,s){if(a!=null&&(a=""+ge(a),a!==n.value&&(n.value=a),s==null)){n.defaultValue!==a&&(n.defaultValue=a);return}n.defaultValue=s!=null?""+ge(s):""}function $r(n,a,s,c){if(a==null){if(c!=null){if(s!=null)throw Error(r(92));if(dt(c)){if(1<c.length)throw Error(r(93));c=c[0]}s=c}s==null&&(s=""),a=s}s=ge(a),n.defaultValue=s,c=n.textContent,c===s&&c!==""&&c!==null&&(n.value=c)}function Hn(n,a){if(a){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=a;return}}n.textContent=a}var IS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pm(n,a,s){var c=a.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?c?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="":c?n.setProperty(a,s):typeof s!="number"||s===0||IS.has(a)?a==="float"?n.cssFloat=s:n[a]=(""+s).trim():n[a]=s+"px"}function Im(n,a,s){if(a!=null&&typeof a!="object")throw Error(r(62));if(n=n.style,s!=null){for(var c in s)!s.hasOwnProperty(c)||a!=null&&a.hasOwnProperty(c)||(c.indexOf("--")===0?n.setProperty(c,""):c==="float"?n.cssFloat="":n[c]="");for(var h in a)c=a[h],a.hasOwnProperty(h)&&s[h]!==c&&Pm(n,h,c)}else for(var m in a)a.hasOwnProperty(m)&&Pm(n,m,a[m])}function Ku(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var FS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),zS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zl(n){return zS.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var $u=null;function Qu(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Qr=null,Jr=null;function Fm(n){var a=wa(n);if(a&&(n=a.stateNode)){var s=n[tn]||null;t:switch(n=a.stateNode,a.type){case"input":if(Ve(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),a=s.name,s.type==="radio"&&a!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+yn(""+a)+'"][type="radio"]'),a=0;a<s.length;a++){var c=s[a];if(c!==n&&c.form===n.form){var h=c[tn]||null;if(!h)throw Error(r(90));Ve(c,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(a=0;a<s.length;a++)c=s[a],c.form===n.form&&Dn(c)}break t;case"textarea":Tn(n,s.value,s.defaultValue);break t;case"select":a=s.value,a!=null&&en(n,!!s.multiple,a,!1)}}}var Ju=!1;function zm(n,a,s){if(Ju)return n(a,s);Ju=!0;try{var c=n(a);return c}finally{if(Ju=!1,(Qr!==null||Jr!==null)&&(Mc(),Qr&&(a=Qr,n=Jr,Jr=Qr=null,Fm(a),n)))for(a=0;a<n.length;a++)Fm(n[a])}}function co(n,a){var s=n.stateNode;if(s===null)return null;var c=s[tn]||null;if(c===null)return null;s=c[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break t;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(r(231,a,typeof s));return s}var qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tf=!1;if(qi)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){tf=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{tf=!1}var Ca=null,ef=null,Bl=null;function Bm(){if(Bl)return Bl;var n,a=ef,s=a.length,c,h="value"in Ca?Ca.value:Ca.textContent,m=h.length;for(n=0;n<s&&a[n]===h[n];n++);var T=s-n;for(c=1;c<=T&&a[s-c]===h[m-c];c++);return Bl=h.slice(n,1<c?1-c:void 0)}function Hl(n){var a=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&a===13&&(n=13)):n=a,n===10&&(n=13),32<=n||n===13?n:0}function Gl(){return!0}function Hm(){return!1}function Gn(n){function a(s,c,h,m,T){this._reactName=s,this._targetInst=h,this.type=c,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var w in n)n.hasOwnProperty(w)&&(s=n[w],this[w]=s?s(m):m[w]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Gl:Hm,this.isPropagationStopped=Hm,this}return g(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Gl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Gl)},persist:function(){},isPersistent:Gl}),a}var dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vl=Gn(dr),fo=g({},dr,{view:0,detail:0}),BS=Gn(fo),nf,af,ho,kl=g({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ho&&(ho&&n.type==="mousemove"?(nf=n.screenX-ho.screenX,af=n.screenY-ho.screenY):af=nf=0,ho=n),nf)},movementY:function(n){return"movementY"in n?n.movementY:af}}),Gm=Gn(kl),HS=g({},kl,{dataTransfer:0}),GS=Gn(HS),VS=g({},fo,{relatedTarget:0}),rf=Gn(VS),kS=g({},dr,{animationName:0,elapsedTime:0,pseudoElement:0}),XS=Gn(kS),WS=g({},dr,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),jS=Gn(WS),qS=g({},dr,{data:0}),Vm=Gn(qS),YS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ZS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},KS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $S(n){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(n):(n=KS[n])?!!a[n]:!1}function sf(){return $S}var QS=g({},fo,{key:function(n){if(n.key){var a=YS[n.key]||n.key;if(a!=="Unidentified")return a}return n.type==="keypress"?(n=Hl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?ZS[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sf,charCode:function(n){return n.type==="keypress"?Hl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Hl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),JS=Gn(QS),tE=g({},kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),km=Gn(tE),eE=g({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sf}),nE=Gn(eE),iE=g({},dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),aE=Gn(iE),rE=g({},kl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),sE=Gn(rE),oE=g({},dr,{newState:0,oldState:0}),lE=Gn(oE),cE=[9,13,27,32],of=qi&&"CompositionEvent"in window,po=null;qi&&"documentMode"in document&&(po=document.documentMode);var uE=qi&&"TextEvent"in window&&!po,Xm=qi&&(!of||po&&8<po&&11>=po),Wm=" ",jm=!1;function qm(n,a){switch(n){case"keyup":return cE.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ym(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ts=!1;function fE(n,a){switch(n){case"compositionend":return Ym(a);case"keypress":return a.which!==32?null:(jm=!0,Wm);case"textInput":return n=a.data,n===Wm&&jm?null:n;default:return null}}function hE(n,a){if(ts)return n==="compositionend"||!of&&qm(n,a)?(n=Bm(),Bl=ef=Ca=null,ts=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Xm&&a.locale!=="ko"?null:a.data;default:return null}}var dE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zm(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a==="input"?!!dE[n.type]:a==="textarea"}function Km(n,a,s,c){Qr?Jr?Jr.push(c):Jr=[c]:Qr=c,a=Cc(a,"onChange"),0<a.length&&(s=new Vl("onChange","change",null,s,c),n.push({event:s,listeners:a}))}var mo=null,go=null;function pE(n){D0(n,0)}function Xl(n){var a=hr(n);if(Dn(a))return n}function $m(n,a){if(n==="change")return a}var Qm=!1;if(qi){var lf;if(qi){var cf="oninput"in document;if(!cf){var Jm=document.createElement("div");Jm.setAttribute("oninput","return;"),cf=typeof Jm.oninput=="function"}lf=cf}else lf=!1;Qm=lf&&(!document.documentMode||9<document.documentMode)}function tg(){mo&&(mo.detachEvent("onpropertychange",eg),go=mo=null)}function eg(n){if(n.propertyName==="value"&&Xl(go)){var a=[];Km(a,go,n,Qu(n)),zm(pE,a)}}function mE(n,a,s){n==="focusin"?(tg(),mo=a,go=s,mo.attachEvent("onpropertychange",eg)):n==="focusout"&&tg()}function gE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Xl(go)}function vE(n,a){if(n==="click")return Xl(a)}function _E(n,a){if(n==="input"||n==="change")return Xl(a)}function xE(n,a){return n===a&&(n!==0||1/n===1/a)||n!==n&&a!==a}var Zn=typeof Object.is=="function"?Object.is:xE;function vo(n,a){if(Zn(n,a))return!0;if(typeof n!="object"||n===null||typeof a!="object"||a===null)return!1;var s=Object.keys(n),c=Object.keys(a);if(s.length!==c.length)return!1;for(c=0;c<s.length;c++){var h=s[c];if(!Je.call(a,h)||!Zn(n[h],a[h]))return!1}return!0}function ng(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ig(n,a){var s=ng(n);n=0;for(var c;s;){if(s.nodeType===3){if(c=n+s.textContent.length,n<=a&&c>=a)return{node:s,offset:a-n};n=c}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=ng(s)}}function ag(n,a){return n&&a?n===a?!0:n&&n.nodeType===3?!1:a&&a.nodeType===3?ag(n,a.parentNode):"contains"in n?n.contains(a):n.compareDocumentPosition?!!(n.compareDocumentPosition(a)&16):!1:!1}function rg(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var a=_i(n.document);a instanceof n.HTMLIFrameElement;){try{var s=typeof a.contentWindow.location.href=="string"}catch{s=!1}if(s)n=a.contentWindow;else break;a=_i(n.document)}return a}function uf(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a&&(a==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||a==="textarea"||n.contentEditable==="true")}var yE=qi&&"documentMode"in document&&11>=document.documentMode,es=null,ff=null,_o=null,hf=!1;function sg(n,a,s){var c=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;hf||es==null||es!==_i(c)||(c=es,"selectionStart"in c&&uf(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),_o&&vo(_o,c)||(_o=c,c=Cc(ff,"onSelect"),0<c.length&&(a=new Vl("onSelect","select",null,a,s),n.push({event:a,listeners:c}),a.target=es)))}function pr(n,a){var s={};return s[n.toLowerCase()]=a.toLowerCase(),s["Webkit"+n]="webkit"+a,s["Moz"+n]="moz"+a,s}var ns={animationend:pr("Animation","AnimationEnd"),animationiteration:pr("Animation","AnimationIteration"),animationstart:pr("Animation","AnimationStart"),transitionrun:pr("Transition","TransitionRun"),transitionstart:pr("Transition","TransitionStart"),transitioncancel:pr("Transition","TransitionCancel"),transitionend:pr("Transition","TransitionEnd")},df={},og={};qi&&(og=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function mr(n){if(df[n])return df[n];if(!ns[n])return n;var a=ns[n],s;for(s in a)if(a.hasOwnProperty(s)&&s in og)return df[n]=a[s];return n}var lg=mr("animationend"),cg=mr("animationiteration"),ug=mr("animationstart"),SE=mr("transitionrun"),EE=mr("transitionstart"),ME=mr("transitioncancel"),fg=mr("transitionend"),hg=new Map,pf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pf.push("scrollEnd");function xi(n,a){hg.set(n,a),R(a,[n])}var dg=new WeakMap;function si(n,a){if(typeof n=="object"&&n!==null){var s=dg.get(n);return s!==void 0?s:(a={value:n,source:a,stack:Fe(a)},dg.set(n,a),a)}return{value:n,source:a,stack:Fe(a)}}var oi=[],is=0,mf=0;function Wl(){for(var n=is,a=mf=is=0;a<n;){var s=oi[a];oi[a++]=null;var c=oi[a];oi[a++]=null;var h=oi[a];oi[a++]=null;var m=oi[a];if(oi[a++]=null,c!==null&&h!==null){var T=c.pending;T===null?h.next=h:(h.next=T.next,T.next=h),c.pending=h}m!==0&&pg(s,h,m)}}function jl(n,a,s,c){oi[is++]=n,oi[is++]=a,oi[is++]=s,oi[is++]=c,mf|=c,n.lanes|=c,n=n.alternate,n!==null&&(n.lanes|=c)}function gf(n,a,s,c){return jl(n,a,s,c),ql(n)}function as(n,a){return jl(n,null,null,a),ql(n)}function pg(n,a,s){n.lanes|=s;var c=n.alternate;c!==null&&(c.lanes|=s);for(var h=!1,m=n.return;m!==null;)m.childLanes|=s,c=m.alternate,c!==null&&(c.childLanes|=s),m.tag===22&&(n=m.stateNode,n===null||n._visibility&1||(h=!0)),n=m,m=m.return;return n.tag===3?(m=n.stateNode,h&&a!==null&&(h=31-Dt(s),n=m.hiddenUpdates,c=n[h],c===null?n[h]=[a]:c.push(a),a.lane=s|536870912),m):null}function ql(n){if(50<ko)throw ko=0,Eh=null,Error(r(185));for(var a=n.return;a!==null;)n=a,a=n.return;return n.tag===3?n.stateNode:null}var rs={};function bE(n,a,s,c){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(n,a,s,c){return new bE(n,a,s,c)}function vf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Yi(n,a){var s=n.alternate;return s===null?(s=Kn(n.tag,a,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=a,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&65011712,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,a=n.dependencies,s.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s.refCleanup=n.refCleanup,s}function mg(n,a){n.flags&=65011714;var s=n.alternate;return s===null?(n.childLanes=0,n.lanes=a,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,a=s.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),n}function Yl(n,a,s,c,h,m){var T=0;if(c=n,typeof n=="function")vf(n)&&(T=1);else if(typeof n=="string")T=AM(n,s,Nt.current)?26:n==="html"||n==="head"||n==="body"?27:5;else t:switch(n){case L:return n=Kn(31,s,a,h),n.elementType=L,n.lanes=m,n;case M:return gr(s.children,h,m,a);case b:T=8,h|=24;break;case S:return n=Kn(12,s,a,h|2),n.elementType=S,n.lanes=m,n;case N:return n=Kn(13,s,a,h),n.elementType=N,n.lanes=m,n;case I:return n=Kn(19,s,a,h),n.elementType=I,n.lanes=m,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case x:case D:T=10;break t;case U:T=9;break t;case A:T=11;break t;case z:T=14;break t;case X:T=16,c=null;break t}T=29,s=Error(r(130,n===null?"null":typeof n,"")),c=null}return a=Kn(T,s,a,h),a.elementType=n,a.type=c,a.lanes=m,a}function gr(n,a,s,c){return n=Kn(7,n,c,a),n.lanes=s,n}function _f(n,a,s){return n=Kn(6,n,null,a),n.lanes=s,n}function xf(n,a,s){return a=Kn(4,n.children!==null?n.children:[],n.key,a),a.lanes=s,a.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},a}var ss=[],os=0,Zl=null,Kl=0,li=[],ci=0,vr=null,Zi=1,Ki="";function _r(n,a){ss[os++]=Kl,ss[os++]=Zl,Zl=n,Kl=a}function gg(n,a,s){li[ci++]=Zi,li[ci++]=Ki,li[ci++]=vr,vr=n;var c=Zi;n=Ki;var h=32-Dt(c)-1;c&=~(1<<h),s+=1;var m=32-Dt(a)+h;if(30<m){var T=h-h%5;m=(c&(1<<T)-1).toString(32),c>>=T,h-=T,Zi=1<<32-Dt(a)+h|s<<h|c,Ki=m+n}else Zi=1<<m|s<<h|c,Ki=n}function yf(n){n.return!==null&&(_r(n,1),gg(n,1,0))}function Sf(n){for(;n===Zl;)Zl=ss[--os],ss[os]=null,Kl=ss[--os],ss[os]=null;for(;n===vr;)vr=li[--ci],li[ci]=null,Ki=li[--ci],li[ci]=null,Zi=li[--ci],li[ci]=null}var zn=null,nn=null,Ue=!1,xr=null,Oi=!1,Ef=Error(r(519));function yr(n){var a=Error(r(418,""));throw So(si(a,n)),Ef}function vg(n){var a=n.stateNode,s=n.type,c=n.memoizedProps;switch(a[mn]=n,a[tn]=c,s){case"dialog":Ee("cancel",a),Ee("close",a);break;case"iframe":case"object":case"embed":Ee("load",a);break;case"video":case"audio":for(s=0;s<Wo.length;s++)Ee(Wo[s],a);break;case"source":Ee("error",a);break;case"img":case"image":case"link":Ee("error",a),Ee("load",a);break;case"details":Ee("toggle",a);break;case"input":Ee("invalid",a),Fn(a,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),ye(a);break;case"select":Ee("invalid",a);break;case"textarea":Ee("invalid",a),$r(a,c.value,c.defaultValue,c.children),ye(a)}s=c.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||a.textContent===""+s||c.suppressHydrationWarning===!0||O0(a.textContent,s)?(c.popover!=null&&(Ee("beforetoggle",a),Ee("toggle",a)),c.onScroll!=null&&Ee("scroll",a),c.onScrollEnd!=null&&Ee("scrollend",a),c.onClick!=null&&(a.onclick=Dc),a=!0):a=!1,a||yr(n)}function _g(n){for(zn=n.return;zn;)switch(zn.tag){case 5:case 13:Oi=!1;return;case 27:case 3:Oi=!0;return;default:zn=zn.return}}function xo(n){if(n!==zn)return!1;if(!Ue)return _g(n),Ue=!0,!1;var a=n.tag,s;if((s=a!==3&&a!==27)&&((s=a===5)&&(s=n.type,s=!(s!=="form"&&s!=="button")||zh(n.type,n.memoizedProps)),s=!s),s&&nn&&yr(n),_g(n),a===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));t:{for(n=n.nextSibling,a=0;n;){if(n.nodeType===8)if(s=n.data,s==="/$"){if(a===0){nn=Si(n.nextSibling);break t}a--}else s!=="$"&&s!=="$!"&&s!=="$?"||a++;n=n.nextSibling}nn=null}}else a===27?(a=nn,Wa(n.type)?(n=Vh,Vh=null,nn=n):nn=a):nn=zn?Si(n.stateNode.nextSibling):null;return!0}function yo(){nn=zn=null,Ue=!1}function xg(){var n=xr;return n!==null&&(Xn===null?Xn=n:Xn.push.apply(Xn,n),xr=null),n}function So(n){xr===null?xr=[n]:xr.push(n)}var Mf=et(null),Sr=null,$i=null;function Da(n,a,s){Et(Mf,a._currentValue),a._currentValue=s}function Qi(n){n._currentValue=Mf.current,yt(Mf)}function bf(n,a,s){for(;n!==null;){var c=n.alternate;if((n.childLanes&a)!==a?(n.childLanes|=a,c!==null&&(c.childLanes|=a)):c!==null&&(c.childLanes&a)!==a&&(c.childLanes|=a),n===s)break;n=n.return}}function Tf(n,a,s,c){var h=n.child;for(h!==null&&(h.return=n);h!==null;){var m=h.dependencies;if(m!==null){var T=h.child;m=m.firstContext;t:for(;m!==null;){var w=m;m=h;for(var B=0;B<a.length;B++)if(w.context===a[B]){m.lanes|=s,w=m.alternate,w!==null&&(w.lanes|=s),bf(m.return,s,n),c||(T=null);break t}m=w.next}}else if(h.tag===18){if(T=h.return,T===null)throw Error(r(341));T.lanes|=s,m=T.alternate,m!==null&&(m.lanes|=s),bf(T,s,n),T=null}else T=h.child;if(T!==null)T.return=h;else for(T=h;T!==null;){if(T===n){T=null;break}if(h=T.sibling,h!==null){h.return=T.return,T=h;break}T=T.return}h=T}}function Eo(n,a,s,c){n=null;for(var h=a,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var T=h.alternate;if(T===null)throw Error(r(387));if(T=T.memoizedProps,T!==null){var w=h.type;Zn(h.pendingProps.value,T.value)||(n!==null?n.push(w):n=[w])}}else if(h===vt.current){if(T=h.alternate,T===null)throw Error(r(387));T.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(n!==null?n.push($o):n=[$o])}h=h.return}n!==null&&Tf(a,n,s,c),a.flags|=262144}function $l(n){for(n=n.firstContext;n!==null;){if(!Zn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Er(n){Sr=n,$i=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Ln(n){return yg(Sr,n)}function Ql(n,a){return Sr===null&&Er(n),yg(n,a)}function yg(n,a){var s=a._currentValue;if(a={context:a,memoizedValue:s,next:null},$i===null){if(n===null)throw Error(r(308));$i=a,n.dependencies={lanes:0,firstContext:a},n.flags|=524288}else $i=$i.next=a;return s}var TE=typeof AbortController<"u"?AbortController:function(){var n=[],a=this.signal={aborted:!1,addEventListener:function(s,c){n.push(c)}};this.abort=function(){a.aborted=!0,n.forEach(function(s){return s()})}},AE=i.unstable_scheduleCallback,wE=i.unstable_NormalPriority,gn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Af(){return{controller:new TE,data:new Map,refCount:0}}function Mo(n){n.refCount--,n.refCount===0&&AE(wE,function(){n.controller.abort()})}var bo=null,wf=0,ls=0,cs=null;function RE(n,a){if(bo===null){var s=bo=[];wf=0,ls=Ch(),cs={status:"pending",value:void 0,then:function(c){s.push(c)}}}return wf++,a.then(Sg,Sg),a}function Sg(){if(--wf===0&&bo!==null){cs!==null&&(cs.status="fulfilled");var n=bo;bo=null,ls=0,cs=null;for(var a=0;a<n.length;a++)(0,n[a])()}}function CE(n,a){var s=[],c={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return n.then(function(){c.status="fulfilled",c.value=a;for(var h=0;h<s.length;h++)(0,s[h])(a)},function(h){for(c.status="rejected",c.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),c}var Eg=F.S;F.S=function(n,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&RE(n,a),Eg!==null&&Eg(n,a)};var Mr=et(null);function Rf(){var n=Mr.current;return n!==null?n:je.pooledCache}function Jl(n,a){a===null?Et(Mr,Mr.current):Et(Mr,a.pool)}function Mg(){var n=Rf();return n===null?null:{parent:gn._currentValue,pool:n}}var To=Error(r(460)),bg=Error(r(474)),tc=Error(r(542)),Cf={then:function(){}};function Tg(n){return n=n.status,n==="fulfilled"||n==="rejected"}function ec(){}function Ag(n,a,s){switch(s=n[s],s===void 0?n.push(a):s!==a&&(a.then(ec,ec),a=s),a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,Rg(n),n;default:if(typeof a.status=="string")a.then(ec,ec);else{if(n=je,n!==null&&100<n.shellSuspendCounter)throw Error(r(482));n=a,n.status="pending",n.then(function(c){if(a.status==="pending"){var h=a;h.status="fulfilled",h.value=c}},function(c){if(a.status==="pending"){var h=a;h.status="rejected",h.reason=c}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,Rg(n),n}throw Ao=a,To}}var Ao=null;function wg(){if(Ao===null)throw Error(r(459));var n=Ao;return Ao=null,n}function Rg(n){if(n===To||n===tc)throw Error(r(483))}var Ua=!1;function Df(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Uf(n,a){n=n.updateQueue,a.updateQueue===n&&(a.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function La(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Na(n,a,s){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Pe&2)!==0){var h=c.pending;return h===null?a.next=a:(a.next=h.next,h.next=a),c.pending=a,a=ql(n),pg(n,null,s),a}return jl(n,c,a,s),ql(n)}function wo(n,a,s){if(a=a.updateQueue,a!==null&&(a=a.shared,(s&4194048)!==0)){var c=a.lanes;c&=n.pendingLanes,s|=c,a.lanes=s,jt(n,s)}}function Lf(n,a){var s=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,s===c)){var h=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var T={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?h=m=T:m=m.next=T,s=s.next}while(s!==null);m===null?h=m=a:m=m.next=a}else h=m=a;s={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:c.shared,callbacks:c.callbacks},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=a:n.next=a,s.lastBaseUpdate=a}var Nf=!1;function Ro(){if(Nf){var n=cs;if(n!==null)throw n}}function Co(n,a,s,c){Nf=!1;var h=n.updateQueue;Ua=!1;var m=h.firstBaseUpdate,T=h.lastBaseUpdate,w=h.shared.pending;if(w!==null){h.shared.pending=null;var B=w,nt=B.next;B.next=null,T===null?m=nt:T.next=nt,T=B;var mt=n.alternate;mt!==null&&(mt=mt.updateQueue,w=mt.lastBaseUpdate,w!==T&&(w===null?mt.firstBaseUpdate=nt:w.next=nt,mt.lastBaseUpdate=B))}if(m!==null){var _t=h.baseState;T=0,mt=nt=B=null,w=m;do{var rt=w.lane&-536870913,ot=rt!==w.lane;if(ot?(Ae&rt)===rt:(c&rt)===rt){rt!==0&&rt===ls&&(Nf=!0),mt!==null&&(mt=mt.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var se=n,ie=w;rt=a;var He=s;switch(ie.tag){case 1:if(se=ie.payload,typeof se=="function"){_t=se.call(He,_t,rt);break t}_t=se;break t;case 3:se.flags=se.flags&-65537|128;case 0:if(se=ie.payload,rt=typeof se=="function"?se.call(He,_t,rt):se,rt==null)break t;_t=g({},_t,rt);break t;case 2:Ua=!0}}rt=w.callback,rt!==null&&(n.flags|=64,ot&&(n.flags|=8192),ot=h.callbacks,ot===null?h.callbacks=[rt]:ot.push(rt))}else ot={lane:rt,tag:w.tag,payload:w.payload,callback:w.callback,next:null},mt===null?(nt=mt=ot,B=_t):mt=mt.next=ot,T|=rt;if(w=w.next,w===null){if(w=h.shared.pending,w===null)break;ot=w,w=ot.next,ot.next=null,h.lastBaseUpdate=ot,h.shared.pending=null}}while(!0);mt===null&&(B=_t),h.baseState=B,h.firstBaseUpdate=nt,h.lastBaseUpdate=mt,m===null&&(h.shared.lanes=0),Ga|=T,n.lanes=T,n.memoizedState=_t}}function Cg(n,a){if(typeof n!="function")throw Error(r(191,n));n.call(a)}function Dg(n,a){var s=n.callbacks;if(s!==null)for(n.callbacks=null,n=0;n<s.length;n++)Cg(s[n],a)}var us=et(null),nc=et(0);function Ug(n,a){n=ra,Et(nc,n),Et(us,a),ra=n|a.baseLanes}function Of(){Et(nc,ra),Et(us,us.current)}function Pf(){ra=nc.current,yt(us),yt(nc)}var Oa=0,_e=null,ze=null,cn=null,ic=!1,fs=!1,br=!1,ac=0,Do=0,hs=null,DE=0;function sn(){throw Error(r(321))}function If(n,a){if(a===null)return!1;for(var s=0;s<a.length&&s<n.length;s++)if(!Zn(n[s],a[s]))return!1;return!0}function Ff(n,a,s,c,h,m){return Oa=m,_e=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,F.H=n===null||n.memoizedState===null?pv:mv,br=!1,m=s(c,h),br=!1,fs&&(m=Ng(a,s,c,h)),Lg(n),m}function Lg(n){F.H=uc;var a=ze!==null&&ze.next!==null;if(Oa=0,cn=ze=_e=null,ic=!1,Do=0,hs=null,a)throw Error(r(300));n===null||Sn||(n=n.dependencies,n!==null&&$l(n)&&(Sn=!0))}function Ng(n,a,s,c){_e=n;var h=0;do{if(fs&&(hs=null),Do=0,fs=!1,25<=h)throw Error(r(301));if(h+=1,cn=ze=null,n.updateQueue!=null){var m=n.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}F.H=FE,m=a(s,c)}while(fs);return m}function UE(){var n=F.H,a=n.useState()[0];return a=typeof a.then=="function"?Uo(a):a,n=n.useState()[0],(ze!==null?ze.memoizedState:null)!==n&&(_e.flags|=1024),a}function zf(){var n=ac!==0;return ac=0,n}function Bf(n,a,s){a.updateQueue=n.updateQueue,a.flags&=-2053,n.lanes&=~s}function Hf(n){if(ic){for(n=n.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}ic=!1}Oa=0,cn=ze=_e=null,fs=!1,Do=ac=0,hs=null}function Vn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?_e.memoizedState=cn=n:cn=cn.next=n,cn}function un(){if(ze===null){var n=_e.alternate;n=n!==null?n.memoizedState:null}else n=ze.next;var a=cn===null?_e.memoizedState:cn.next;if(a!==null)cn=a,ze=n;else{if(n===null)throw _e.alternate===null?Error(r(467)):Error(r(310));ze=n,n={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},cn===null?_e.memoizedState=cn=n:cn=cn.next=n}return cn}function Gf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Uo(n){var a=Do;return Do+=1,hs===null&&(hs=[]),n=Ag(hs,n,a),a=_e,(cn===null?a.memoizedState:cn.next)===null&&(a=a.alternate,F.H=a===null||a.memoizedState===null?pv:mv),n}function rc(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Uo(n);if(n.$$typeof===D)return Ln(n)}throw Error(r(438,String(n)))}function Vf(n){var a=null,s=_e.updateQueue;if(s!==null&&(a=s.memoCache),a==null){var c=_e.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(a={data:c.data.map(function(h){return h.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),s===null&&(s=Gf(),_e.updateQueue=s),s.memoCache=a,s=a.data[a.index],s===void 0)for(s=a.data[a.index]=Array(n),c=0;c<n;c++)s[c]=C;return a.index++,s}function Ji(n,a){return typeof a=="function"?a(n):a}function sc(n){var a=un();return kf(a,ze,n)}function kf(n,a,s){var c=n.queue;if(c===null)throw Error(r(311));c.lastRenderedReducer=s;var h=n.baseQueue,m=c.pending;if(m!==null){if(h!==null){var T=h.next;h.next=m.next,m.next=T}a.baseQueue=h=m,c.pending=null}if(m=n.baseState,h===null)n.memoizedState=m;else{a=h.next;var w=T=null,B=null,nt=a,mt=!1;do{var _t=nt.lane&-536870913;if(_t!==nt.lane?(Ae&_t)===_t:(Oa&_t)===_t){var rt=nt.revertLane;if(rt===0)B!==null&&(B=B.next={lane:0,revertLane:0,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),_t===ls&&(mt=!0);else if((Oa&rt)===rt){nt=nt.next,rt===ls&&(mt=!0);continue}else _t={lane:0,revertLane:nt.revertLane,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},B===null?(w=B=_t,T=m):B=B.next=_t,_e.lanes|=rt,Ga|=rt;_t=nt.action,br&&s(m,_t),m=nt.hasEagerState?nt.eagerState:s(m,_t)}else rt={lane:_t,revertLane:nt.revertLane,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},B===null?(w=B=rt,T=m):B=B.next=rt,_e.lanes|=_t,Ga|=_t;nt=nt.next}while(nt!==null&&nt!==a);if(B===null?T=m:B.next=w,!Zn(m,n.memoizedState)&&(Sn=!0,mt&&(s=cs,s!==null)))throw s;n.memoizedState=m,n.baseState=T,n.baseQueue=B,c.lastRenderedState=m}return h===null&&(c.lanes=0),[n.memoizedState,c.dispatch]}function Xf(n){var a=un(),s=a.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=n;var c=s.dispatch,h=s.pending,m=a.memoizedState;if(h!==null){s.pending=null;var T=h=h.next;do m=n(m,T.action),T=T.next;while(T!==h);Zn(m,a.memoizedState)||(Sn=!0),a.memoizedState=m,a.baseQueue===null&&(a.baseState=m),s.lastRenderedState=m}return[m,c]}function Og(n,a,s){var c=_e,h=un(),m=Ue;if(m){if(s===void 0)throw Error(r(407));s=s()}else s=a();var T=!Zn((ze||h).memoizedState,s);T&&(h.memoizedState=s,Sn=!0),h=h.queue;var w=Fg.bind(null,c,h,n);if(Lo(2048,8,w,[n]),h.getSnapshot!==a||T||cn!==null&&cn.memoizedState.tag&1){if(c.flags|=2048,ds(9,oc(),Ig.bind(null,c,h,s,a),null),je===null)throw Error(r(349));m||(Oa&124)!==0||Pg(c,a,s)}return s}function Pg(n,a,s){n.flags|=16384,n={getSnapshot:a,value:s},a=_e.updateQueue,a===null?(a=Gf(),_e.updateQueue=a,a.stores=[n]):(s=a.stores,s===null?a.stores=[n]:s.push(n))}function Ig(n,a,s,c){a.value=s,a.getSnapshot=c,zg(a)&&Bg(n)}function Fg(n,a,s){return s(function(){zg(a)&&Bg(n)})}function zg(n){var a=n.getSnapshot;n=n.value;try{var s=a();return!Zn(n,s)}catch{return!0}}function Bg(n){var a=as(n,2);a!==null&&ei(a,n,2)}function Wf(n){var a=Vn();if(typeof n=="function"){var s=n;if(n=s(),br){at(!0);try{s()}finally{at(!1)}}}return a.memoizedState=a.baseState=n,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:n},a}function Hg(n,a,s,c){return n.baseState=s,kf(n,ze,typeof c=="function"?c:Ji)}function LE(n,a,s,c,h){if(cc(n))throw Error(r(485));if(n=a.action,n!==null){var m={payload:h,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){m.listeners.push(T)}};F.T!==null?s(!0):m.isTransition=!1,c(m),s=a.pending,s===null?(m.next=a.pending=m,Gg(a,m)):(m.next=s.next,a.pending=s.next=m)}}function Gg(n,a){var s=a.action,c=a.payload,h=n.state;if(a.isTransition){var m=F.T,T={};F.T=T;try{var w=s(h,c),B=F.S;B!==null&&B(T,w),Vg(n,a,w)}catch(nt){jf(n,a,nt)}finally{F.T=m}}else try{m=s(h,c),Vg(n,a,m)}catch(nt){jf(n,a,nt)}}function Vg(n,a,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(c){kg(n,a,c)},function(c){return jf(n,a,c)}):kg(n,a,s)}function kg(n,a,s){a.status="fulfilled",a.value=s,Xg(a),n.state=s,a=n.pending,a!==null&&(s=a.next,s===a?n.pending=null:(s=s.next,a.next=s,Gg(n,s)))}function jf(n,a,s){var c=n.pending;if(n.pending=null,c!==null){c=c.next;do a.status="rejected",a.reason=s,Xg(a),a=a.next;while(a!==c)}n.action=null}function Xg(n){n=n.listeners;for(var a=0;a<n.length;a++)(0,n[a])()}function Wg(n,a){return a}function jg(n,a){if(Ue){var s=je.formState;if(s!==null){t:{var c=_e;if(Ue){if(nn){e:{for(var h=nn,m=Oi;h.nodeType!==8;){if(!m){h=null;break e}if(h=Si(h.nextSibling),h===null){h=null;break e}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){nn=Si(h.nextSibling),c=h.data==="F!";break t}}yr(c)}c=!1}c&&(a=s[0])}}return s=Vn(),s.memoizedState=s.baseState=a,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wg,lastRenderedState:a},s.queue=c,s=fv.bind(null,_e,c),c.dispatch=s,c=Wf(!1),m=$f.bind(null,_e,!1,c.queue),c=Vn(),h={state:a,dispatch:null,action:n,pending:null},c.queue=h,s=LE.bind(null,_e,h,m,s),h.dispatch=s,c.memoizedState=n,[a,s,!1]}function qg(n){var a=un();return Yg(a,ze,n)}function Yg(n,a,s){if(a=kf(n,a,Wg)[0],n=sc(Ji)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var c=Uo(a)}catch(T){throw T===To?tc:T}else c=a;a=un();var h=a.queue,m=h.dispatch;return s!==a.memoizedState&&(_e.flags|=2048,ds(9,oc(),NE.bind(null,h,s),null)),[c,m,n]}function NE(n,a){n.action=a}function Zg(n){var a=un(),s=ze;if(s!==null)return Yg(a,s,n);un(),a=a.memoizedState,s=un();var c=s.queue.dispatch;return s.memoizedState=n,[a,c,!1]}function ds(n,a,s,c){return n={tag:n,create:s,deps:c,inst:a,next:null},a=_e.updateQueue,a===null&&(a=Gf(),_e.updateQueue=a),s=a.lastEffect,s===null?a.lastEffect=n.next=n:(c=s.next,s.next=n,n.next=c,a.lastEffect=n),n}function oc(){return{destroy:void 0,resource:void 0}}function Kg(){return un().memoizedState}function lc(n,a,s,c){var h=Vn();c=c===void 0?null:c,_e.flags|=n,h.memoizedState=ds(1|a,oc(),s,c)}function Lo(n,a,s,c){var h=un();c=c===void 0?null:c;var m=h.memoizedState.inst;ze!==null&&c!==null&&If(c,ze.memoizedState.deps)?h.memoizedState=ds(a,m,s,c):(_e.flags|=n,h.memoizedState=ds(1|a,m,s,c))}function $g(n,a){lc(8390656,8,n,a)}function Qg(n,a){Lo(2048,8,n,a)}function Jg(n,a){return Lo(4,2,n,a)}function tv(n,a){return Lo(4,4,n,a)}function ev(n,a){if(typeof a=="function"){n=n();var s=a(n);return function(){typeof s=="function"?s():a(null)}}if(a!=null)return n=n(),a.current=n,function(){a.current=null}}function nv(n,a,s){s=s!=null?s.concat([n]):null,Lo(4,4,ev.bind(null,a,n),s)}function qf(){}function iv(n,a){var s=un();a=a===void 0?null:a;var c=s.memoizedState;return a!==null&&If(a,c[1])?c[0]:(s.memoizedState=[n,a],n)}function av(n,a){var s=un();a=a===void 0?null:a;var c=s.memoizedState;if(a!==null&&If(a,c[1]))return c[0];if(c=n(),br){at(!0);try{n()}finally{at(!1)}}return s.memoizedState=[c,a],c}function Yf(n,a,s){return s===void 0||(Oa&1073741824)!==0?n.memoizedState=a:(n.memoizedState=s,n=o0(),_e.lanes|=n,Ga|=n,s)}function rv(n,a,s,c){return Zn(s,a)?s:us.current!==null?(n=Yf(n,s,c),Zn(n,a)||(Sn=!0),n):(Oa&42)===0?(Sn=!0,n.memoizedState=s):(n=o0(),_e.lanes|=n,Ga|=n,a)}function sv(n,a,s,c,h){var m=$.p;$.p=m!==0&&8>m?m:8;var T=F.T,w={};F.T=w,$f(n,!1,a,s);try{var B=h(),nt=F.S;if(nt!==null&&nt(w,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var mt=CE(B,c);No(n,a,mt,ti(n))}else No(n,a,c,ti(n))}catch(_t){No(n,a,{then:function(){},status:"rejected",reason:_t},ti())}finally{$.p=m,F.T=T}}function OE(){}function Zf(n,a,s,c){if(n.tag!==5)throw Error(r(476));var h=ov(n).queue;sv(n,h,a,j,s===null?OE:function(){return lv(n),s(c)})}function ov(n){var a=n.memoizedState;if(a!==null)return a;a={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:j},next:null};var s={};return a.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:s},next:null},n.memoizedState=a,n=n.alternate,n!==null&&(n.memoizedState=a),a}function lv(n){var a=ov(n).next.queue;No(n,a,{},ti())}function Kf(){return Ln($o)}function cv(){return un().memoizedState}function uv(){return un().memoizedState}function PE(n){for(var a=n.return;a!==null;){switch(a.tag){case 24:case 3:var s=ti();n=La(s);var c=Na(a,n,s);c!==null&&(ei(c,a,s),wo(c,a,s)),a={cache:Af()},n.payload=a;return}a=a.return}}function IE(n,a,s){var c=ti();s={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},cc(n)?hv(a,s):(s=gf(n,a,s,c),s!==null&&(ei(s,n,c),dv(s,a,c)))}function fv(n,a,s){var c=ti();No(n,a,s,c)}function No(n,a,s,c){var h={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(cc(n))hv(a,h);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=a.lastRenderedReducer,m!==null))try{var T=a.lastRenderedState,w=m(T,s);if(h.hasEagerState=!0,h.eagerState=w,Zn(w,T))return jl(n,a,h,0),je===null&&Wl(),!1}catch{}finally{}if(s=gf(n,a,h,c),s!==null)return ei(s,n,c),dv(s,a,c),!0}return!1}function $f(n,a,s,c){if(c={lane:2,revertLane:Ch(),action:c,hasEagerState:!1,eagerState:null,next:null},cc(n)){if(a)throw Error(r(479))}else a=gf(n,s,c,2),a!==null&&ei(a,n,2)}function cc(n){var a=n.alternate;return n===_e||a!==null&&a===_e}function hv(n,a){fs=ic=!0;var s=n.pending;s===null?a.next=a:(a.next=s.next,s.next=a),n.pending=a}function dv(n,a,s){if((s&4194048)!==0){var c=a.lanes;c&=n.pendingLanes,s|=c,a.lanes=s,jt(n,s)}}var uc={readContext:Ln,use:rc,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn},pv={readContext:Ln,use:rc,useCallback:function(n,a){return Vn().memoizedState=[n,a===void 0?null:a],n},useContext:Ln,useEffect:$g,useImperativeHandle:function(n,a,s){s=s!=null?s.concat([n]):null,lc(4194308,4,ev.bind(null,a,n),s)},useLayoutEffect:function(n,a){return lc(4194308,4,n,a)},useInsertionEffect:function(n,a){lc(4,2,n,a)},useMemo:function(n,a){var s=Vn();a=a===void 0?null:a;var c=n();if(br){at(!0);try{n()}finally{at(!1)}}return s.memoizedState=[c,a],c},useReducer:function(n,a,s){var c=Vn();if(s!==void 0){var h=s(a);if(br){at(!0);try{s(a)}finally{at(!1)}}}else h=a;return c.memoizedState=c.baseState=h,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:h},c.queue=n,n=n.dispatch=IE.bind(null,_e,n),[c.memoizedState,n]},useRef:function(n){var a=Vn();return n={current:n},a.memoizedState=n},useState:function(n){n=Wf(n);var a=n.queue,s=fv.bind(null,_e,a);return a.dispatch=s,[n.memoizedState,s]},useDebugValue:qf,useDeferredValue:function(n,a){var s=Vn();return Yf(s,n,a)},useTransition:function(){var n=Wf(!1);return n=sv.bind(null,_e,n.queue,!0,!1),Vn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,a,s){var c=_e,h=Vn();if(Ue){if(s===void 0)throw Error(r(407));s=s()}else{if(s=a(),je===null)throw Error(r(349));(Ae&124)!==0||Pg(c,a,s)}h.memoizedState=s;var m={value:s,getSnapshot:a};return h.queue=m,$g(Fg.bind(null,c,m,n),[n]),c.flags|=2048,ds(9,oc(),Ig.bind(null,c,m,s,a),null),s},useId:function(){var n=Vn(),a=je.identifierPrefix;if(Ue){var s=Ki,c=Zi;s=(c&~(1<<32-Dt(c)-1)).toString(32)+s,a="«"+a+"R"+s,s=ac++,0<s&&(a+="H"+s.toString(32)),a+="»"}else s=DE++,a="«"+a+"r"+s.toString(32)+"»";return n.memoizedState=a},useHostTransitionStatus:Kf,useFormState:jg,useActionState:jg,useOptimistic:function(n){var a=Vn();a.memoizedState=a.baseState=n;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=s,a=$f.bind(null,_e,!0,s),s.dispatch=a,[n,a]},useMemoCache:Vf,useCacheRefresh:function(){return Vn().memoizedState=PE.bind(null,_e)}},mv={readContext:Ln,use:rc,useCallback:iv,useContext:Ln,useEffect:Qg,useImperativeHandle:nv,useInsertionEffect:Jg,useLayoutEffect:tv,useMemo:av,useReducer:sc,useRef:Kg,useState:function(){return sc(Ji)},useDebugValue:qf,useDeferredValue:function(n,a){var s=un();return rv(s,ze.memoizedState,n,a)},useTransition:function(){var n=sc(Ji)[0],a=un().memoizedState;return[typeof n=="boolean"?n:Uo(n),a]},useSyncExternalStore:Og,useId:cv,useHostTransitionStatus:Kf,useFormState:qg,useActionState:qg,useOptimistic:function(n,a){var s=un();return Hg(s,ze,n,a)},useMemoCache:Vf,useCacheRefresh:uv},FE={readContext:Ln,use:rc,useCallback:iv,useContext:Ln,useEffect:Qg,useImperativeHandle:nv,useInsertionEffect:Jg,useLayoutEffect:tv,useMemo:av,useReducer:Xf,useRef:Kg,useState:function(){return Xf(Ji)},useDebugValue:qf,useDeferredValue:function(n,a){var s=un();return ze===null?Yf(s,n,a):rv(s,ze.memoizedState,n,a)},useTransition:function(){var n=Xf(Ji)[0],a=un().memoizedState;return[typeof n=="boolean"?n:Uo(n),a]},useSyncExternalStore:Og,useId:cv,useHostTransitionStatus:Kf,useFormState:Zg,useActionState:Zg,useOptimistic:function(n,a){var s=un();return ze!==null?Hg(s,ze,n,a):(s.baseState=n,[n,s.queue.dispatch])},useMemoCache:Vf,useCacheRefresh:uv},ps=null,Oo=0;function fc(n){var a=Oo;return Oo+=1,ps===null&&(ps=[]),Ag(ps,n,a)}function Po(n,a){a=a.props.ref,n.ref=a!==void 0?a:null}function hc(n,a){throw a.$$typeof===v?Error(r(525)):(n=Object.prototype.toString.call(a),Error(r(31,n==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":n)))}function gv(n){var a=n._init;return a(n._payload)}function vv(n){function a(Y,k){if(n){var J=Y.deletions;J===null?(Y.deletions=[k],Y.flags|=16):J.push(k)}}function s(Y,k){if(!n)return null;for(;k!==null;)a(Y,k),k=k.sibling;return null}function c(Y){for(var k=new Map;Y!==null;)Y.key!==null?k.set(Y.key,Y):k.set(Y.index,Y),Y=Y.sibling;return k}function h(Y,k){return Y=Yi(Y,k),Y.index=0,Y.sibling=null,Y}function m(Y,k,J){return Y.index=J,n?(J=Y.alternate,J!==null?(J=J.index,J<k?(Y.flags|=67108866,k):J):(Y.flags|=67108866,k)):(Y.flags|=1048576,k)}function T(Y){return n&&Y.alternate===null&&(Y.flags|=67108866),Y}function w(Y,k,J,gt){return k===null||k.tag!==6?(k=_f(J,Y.mode,gt),k.return=Y,k):(k=h(k,J),k.return=Y,k)}function B(Y,k,J,gt){var Xt=J.type;return Xt===M?mt(Y,k,J.props.children,gt,J.key):k!==null&&(k.elementType===Xt||typeof Xt=="object"&&Xt!==null&&Xt.$$typeof===X&&gv(Xt)===k.type)?(k=h(k,J.props),Po(k,J),k.return=Y,k):(k=Yl(J.type,J.key,J.props,null,Y.mode,gt),Po(k,J),k.return=Y,k)}function nt(Y,k,J,gt){return k===null||k.tag!==4||k.stateNode.containerInfo!==J.containerInfo||k.stateNode.implementation!==J.implementation?(k=xf(J,Y.mode,gt),k.return=Y,k):(k=h(k,J.children||[]),k.return=Y,k)}function mt(Y,k,J,gt,Xt){return k===null||k.tag!==7?(k=gr(J,Y.mode,gt,Xt),k.return=Y,k):(k=h(k,J),k.return=Y,k)}function _t(Y,k,J){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=_f(""+k,Y.mode,J),k.return=Y,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case _:return J=Yl(k.type,k.key,k.props,null,Y.mode,J),Po(J,k),J.return=Y,J;case y:return k=xf(k,Y.mode,J),k.return=Y,k;case X:var gt=k._init;return k=gt(k._payload),_t(Y,k,J)}if(dt(k)||Z(k))return k=gr(k,Y.mode,J,null),k.return=Y,k;if(typeof k.then=="function")return _t(Y,fc(k),J);if(k.$$typeof===D)return _t(Y,Ql(Y,k),J);hc(Y,k)}return null}function rt(Y,k,J,gt){var Xt=k!==null?k.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Xt!==null?null:w(Y,k,""+J,gt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case _:return J.key===Xt?B(Y,k,J,gt):null;case y:return J.key===Xt?nt(Y,k,J,gt):null;case X:return Xt=J._init,J=Xt(J._payload),rt(Y,k,J,gt)}if(dt(J)||Z(J))return Xt!==null?null:mt(Y,k,J,gt,null);if(typeof J.then=="function")return rt(Y,k,fc(J),gt);if(J.$$typeof===D)return rt(Y,k,Ql(Y,J),gt);hc(Y,J)}return null}function ot(Y,k,J,gt,Xt){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return Y=Y.get(J)||null,w(k,Y,""+gt,Xt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case _:return Y=Y.get(gt.key===null?J:gt.key)||null,B(k,Y,gt,Xt);case y:return Y=Y.get(gt.key===null?J:gt.key)||null,nt(k,Y,gt,Xt);case X:var xe=gt._init;return gt=xe(gt._payload),ot(Y,k,J,gt,Xt)}if(dt(gt)||Z(gt))return Y=Y.get(J)||null,mt(k,Y,gt,Xt,null);if(typeof gt.then=="function")return ot(Y,k,J,fc(gt),Xt);if(gt.$$typeof===D)return ot(Y,k,J,Ql(k,gt),Xt);hc(k,gt)}return null}function se(Y,k,J,gt){for(var Xt=null,xe=null,Kt=k,re=k=0,Mn=null;Kt!==null&&re<J.length;re++){Kt.index>re?(Mn=Kt,Kt=null):Mn=Kt.sibling;var Ce=rt(Y,Kt,J[re],gt);if(Ce===null){Kt===null&&(Kt=Mn);break}n&&Kt&&Ce.alternate===null&&a(Y,Kt),k=m(Ce,k,re),xe===null?Xt=Ce:xe.sibling=Ce,xe=Ce,Kt=Mn}if(re===J.length)return s(Y,Kt),Ue&&_r(Y,re),Xt;if(Kt===null){for(;re<J.length;re++)Kt=_t(Y,J[re],gt),Kt!==null&&(k=m(Kt,k,re),xe===null?Xt=Kt:xe.sibling=Kt,xe=Kt);return Ue&&_r(Y,re),Xt}for(Kt=c(Kt);re<J.length;re++)Mn=ot(Kt,Y,re,J[re],gt),Mn!==null&&(n&&Mn.alternate!==null&&Kt.delete(Mn.key===null?re:Mn.key),k=m(Mn,k,re),xe===null?Xt=Mn:xe.sibling=Mn,xe=Mn);return n&&Kt.forEach(function(Ka){return a(Y,Ka)}),Ue&&_r(Y,re),Xt}function ie(Y,k,J,gt){if(J==null)throw Error(r(151));for(var Xt=null,xe=null,Kt=k,re=k=0,Mn=null,Ce=J.next();Kt!==null&&!Ce.done;re++,Ce=J.next()){Kt.index>re?(Mn=Kt,Kt=null):Mn=Kt.sibling;var Ka=rt(Y,Kt,Ce.value,gt);if(Ka===null){Kt===null&&(Kt=Mn);break}n&&Kt&&Ka.alternate===null&&a(Y,Kt),k=m(Ka,k,re),xe===null?Xt=Ka:xe.sibling=Ka,xe=Ka,Kt=Mn}if(Ce.done)return s(Y,Kt),Ue&&_r(Y,re),Xt;if(Kt===null){for(;!Ce.done;re++,Ce=J.next())Ce=_t(Y,Ce.value,gt),Ce!==null&&(k=m(Ce,k,re),xe===null?Xt=Ce:xe.sibling=Ce,xe=Ce);return Ue&&_r(Y,re),Xt}for(Kt=c(Kt);!Ce.done;re++,Ce=J.next())Ce=ot(Kt,Y,re,Ce.value,gt),Ce!==null&&(n&&Ce.alternate!==null&&Kt.delete(Ce.key===null?re:Ce.key),k=m(Ce,k,re),xe===null?Xt=Ce:xe.sibling=Ce,xe=Ce);return n&&Kt.forEach(function(zM){return a(Y,zM)}),Ue&&_r(Y,re),Xt}function He(Y,k,J,gt){if(typeof J=="object"&&J!==null&&J.type===M&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case _:t:{for(var Xt=J.key;k!==null;){if(k.key===Xt){if(Xt=J.type,Xt===M){if(k.tag===7){s(Y,k.sibling),gt=h(k,J.props.children),gt.return=Y,Y=gt;break t}}else if(k.elementType===Xt||typeof Xt=="object"&&Xt!==null&&Xt.$$typeof===X&&gv(Xt)===k.type){s(Y,k.sibling),gt=h(k,J.props),Po(gt,J),gt.return=Y,Y=gt;break t}s(Y,k);break}else a(Y,k);k=k.sibling}J.type===M?(gt=gr(J.props.children,Y.mode,gt,J.key),gt.return=Y,Y=gt):(gt=Yl(J.type,J.key,J.props,null,Y.mode,gt),Po(gt,J),gt.return=Y,Y=gt)}return T(Y);case y:t:{for(Xt=J.key;k!==null;){if(k.key===Xt)if(k.tag===4&&k.stateNode.containerInfo===J.containerInfo&&k.stateNode.implementation===J.implementation){s(Y,k.sibling),gt=h(k,J.children||[]),gt.return=Y,Y=gt;break t}else{s(Y,k);break}else a(Y,k);k=k.sibling}gt=xf(J,Y.mode,gt),gt.return=Y,Y=gt}return T(Y);case X:return Xt=J._init,J=Xt(J._payload),He(Y,k,J,gt)}if(dt(J))return se(Y,k,J,gt);if(Z(J)){if(Xt=Z(J),typeof Xt!="function")throw Error(r(150));return J=Xt.call(J),ie(Y,k,J,gt)}if(typeof J.then=="function")return He(Y,k,fc(J),gt);if(J.$$typeof===D)return He(Y,k,Ql(Y,J),gt);hc(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,k!==null&&k.tag===6?(s(Y,k.sibling),gt=h(k,J),gt.return=Y,Y=gt):(s(Y,k),gt=_f(J,Y.mode,gt),gt.return=Y,Y=gt),T(Y)):s(Y,k)}return function(Y,k,J,gt){try{Oo=0;var Xt=He(Y,k,J,gt);return ps=null,Xt}catch(Kt){if(Kt===To||Kt===tc)throw Kt;var xe=Kn(29,Kt,null,Y.mode);return xe.lanes=gt,xe.return=Y,xe}finally{}}}var ms=vv(!0),_v=vv(!1),ui=et(null),Pi=null;function Pa(n){var a=n.alternate;Et(vn,vn.current&1),Et(ui,n),Pi===null&&(a===null||us.current!==null||a.memoizedState!==null)&&(Pi=n)}function xv(n){if(n.tag===22){if(Et(vn,vn.current),Et(ui,n),Pi===null){var a=n.alternate;a!==null&&a.memoizedState!==null&&(Pi=n)}}else Ia()}function Ia(){Et(vn,vn.current),Et(ui,ui.current)}function ta(n){yt(ui),Pi===n&&(Pi=null),yt(vn)}var vn=et(0);function dc(n){for(var a=n;a!==null;){if(a.tag===13){var s=a.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||Gh(s)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function Qf(n,a,s,c){a=n.memoizedState,s=s(c,a),s=s==null?a:g({},a,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var Jf={enqueueSetState:function(n,a,s){n=n._reactInternals;var c=ti(),h=La(c);h.payload=a,s!=null&&(h.callback=s),a=Na(n,h,c),a!==null&&(ei(a,n,c),wo(a,n,c))},enqueueReplaceState:function(n,a,s){n=n._reactInternals;var c=ti(),h=La(c);h.tag=1,h.payload=a,s!=null&&(h.callback=s),a=Na(n,h,c),a!==null&&(ei(a,n,c),wo(a,n,c))},enqueueForceUpdate:function(n,a){n=n._reactInternals;var s=ti(),c=La(s);c.tag=2,a!=null&&(c.callback=a),a=Na(n,c,s),a!==null&&(ei(a,n,s),wo(a,n,s))}};function yv(n,a,s,c,h,m,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,T):a.prototype&&a.prototype.isPureReactComponent?!vo(s,c)||!vo(h,m):!0}function Sv(n,a,s,c){n=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(s,c),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(s,c),a.state!==n&&Jf.enqueueReplaceState(a,a.state,null)}function Tr(n,a){var s=a;if("ref"in a){s={};for(var c in a)c!=="ref"&&(s[c]=a[c])}if(n=n.defaultProps){s===a&&(s=g({},s));for(var h in n)s[h]===void 0&&(s[h]=n[h])}return s}var pc=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function Ev(n){pc(n)}function Mv(n){console.error(n)}function bv(n){pc(n)}function mc(n,a){try{var s=n.onUncaughtError;s(a.value,{componentStack:a.stack})}catch(c){setTimeout(function(){throw c})}}function Tv(n,a,s){try{var c=n.onCaughtError;c(s.value,{componentStack:s.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function th(n,a,s){return s=La(s),s.tag=3,s.payload={element:null},s.callback=function(){mc(n,a)},s}function Av(n){return n=La(n),n.tag=3,n}function wv(n,a,s,c){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var m=c.value;n.payload=function(){return h(m)},n.callback=function(){Tv(a,s,c)}}var T=s.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(n.callback=function(){Tv(a,s,c),typeof h!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var w=c.stack;this.componentDidCatch(c.value,{componentStack:w!==null?w:""})})}function zE(n,a,s,c,h){if(s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(a=s.alternate,a!==null&&Eo(a,s,h,!0),s=ui.current,s!==null){switch(s.tag){case 13:return Pi===null?bh():s.alternate===null&&an===0&&(an=3),s.flags&=-257,s.flags|=65536,s.lanes=h,c===Cf?s.flags|=16384:(a=s.updateQueue,a===null?s.updateQueue=new Set([c]):a.add(c),Ah(n,c,h)),!1;case 22:return s.flags|=65536,c===Cf?s.flags|=16384:(a=s.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([c])},s.updateQueue=a):(s=a.retryQueue,s===null?a.retryQueue=new Set([c]):s.add(c)),Ah(n,c,h)),!1}throw Error(r(435,s.tag))}return Ah(n,c,h),bh(),!1}if(Ue)return a=ui.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=h,c!==Ef&&(n=Error(r(422),{cause:c}),So(si(n,s)))):(c!==Ef&&(a=Error(r(423),{cause:c}),So(si(a,s))),n=n.current.alternate,n.flags|=65536,h&=-h,n.lanes|=h,c=si(c,s),h=th(n.stateNode,c,h),Lf(n,h),an!==4&&(an=2)),!1;var m=Error(r(520),{cause:c});if(m=si(m,s),Vo===null?Vo=[m]:Vo.push(m),an!==4&&(an=2),a===null)return!0;c=si(c,s),s=a;do{switch(s.tag){case 3:return s.flags|=65536,n=h&-h,s.lanes|=n,n=th(s.stateNode,c,n),Lf(s,n),!1;case 1:if(a=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Va===null||!Va.has(m))))return s.flags|=65536,h&=-h,s.lanes|=h,h=Av(h),wv(h,n,s,c),Lf(s,h),!1}s=s.return}while(s!==null);return!1}var Rv=Error(r(461)),Sn=!1;function An(n,a,s,c){a.child=n===null?_v(a,null,s,c):ms(a,n.child,s,c)}function Cv(n,a,s,c,h){s=s.render;var m=a.ref;if("ref"in c){var T={};for(var w in c)w!=="ref"&&(T[w]=c[w])}else T=c;return Er(a),c=Ff(n,a,s,T,m,h),w=zf(),n!==null&&!Sn?(Bf(n,a,h),ea(n,a,h)):(Ue&&w&&yf(a),a.flags|=1,An(n,a,c,h),a.child)}function Dv(n,a,s,c,h){if(n===null){var m=s.type;return typeof m=="function"&&!vf(m)&&m.defaultProps===void 0&&s.compare===null?(a.tag=15,a.type=m,Uv(n,a,m,c,h)):(n=Yl(s.type,null,c,a,a.mode,h),n.ref=a.ref,n.return=a,a.child=n)}if(m=n.child,!lh(n,h)){var T=m.memoizedProps;if(s=s.compare,s=s!==null?s:vo,s(T,c)&&n.ref===a.ref)return ea(n,a,h)}return a.flags|=1,n=Yi(m,c),n.ref=a.ref,n.return=a,a.child=n}function Uv(n,a,s,c,h){if(n!==null){var m=n.memoizedProps;if(vo(m,c)&&n.ref===a.ref)if(Sn=!1,a.pendingProps=c=m,lh(n,h))(n.flags&131072)!==0&&(Sn=!0);else return a.lanes=n.lanes,ea(n,a,h)}return eh(n,a,s,c,h)}function Lv(n,a,s){var c=a.pendingProps,h=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden"){if((a.flags&128)!==0){if(c=m!==null?m.baseLanes|s:s,n!==null){for(h=a.child=n.child,m=0;h!==null;)m=m|h.lanes|h.childLanes,h=h.sibling;a.childLanes=m&~c}else a.childLanes=0,a.child=null;return Nv(n,a,c,s)}if((s&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},n!==null&&Jl(a,m!==null?m.cachePool:null),m!==null?Ug(a,m):Of(),xv(a);else return a.lanes=a.childLanes=536870912,Nv(n,a,m!==null?m.baseLanes|s:s,s)}else m!==null?(Jl(a,m.cachePool),Ug(a,m),Ia(),a.memoizedState=null):(n!==null&&Jl(a,null),Of(),Ia());return An(n,a,h,s),a.child}function Nv(n,a,s,c){var h=Rf();return h=h===null?null:{parent:gn._currentValue,pool:h},a.memoizedState={baseLanes:s,cachePool:h},n!==null&&Jl(a,null),Of(),xv(a),n!==null&&Eo(n,a,c,!0),null}function gc(n,a){var s=a.ref;if(s===null)n!==null&&n.ref!==null&&(a.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(n===null||n.ref!==s)&&(a.flags|=4194816)}}function eh(n,a,s,c,h){return Er(a),s=Ff(n,a,s,c,void 0,h),c=zf(),n!==null&&!Sn?(Bf(n,a,h),ea(n,a,h)):(Ue&&c&&yf(a),a.flags|=1,An(n,a,s,h),a.child)}function Ov(n,a,s,c,h,m){return Er(a),a.updateQueue=null,s=Ng(a,c,s,h),Lg(n),c=zf(),n!==null&&!Sn?(Bf(n,a,m),ea(n,a,m)):(Ue&&c&&yf(a),a.flags|=1,An(n,a,s,m),a.child)}function Pv(n,a,s,c,h){if(Er(a),a.stateNode===null){var m=rs,T=s.contextType;typeof T=="object"&&T!==null&&(m=Ln(T)),m=new s(c,m),a.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Jf,a.stateNode=m,m._reactInternals=a,m=a.stateNode,m.props=c,m.state=a.memoizedState,m.refs={},Df(a),T=s.contextType,m.context=typeof T=="object"&&T!==null?Ln(T):rs,m.state=a.memoizedState,T=s.getDerivedStateFromProps,typeof T=="function"&&(Qf(a,s,T,c),m.state=a.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(T=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),T!==m.state&&Jf.enqueueReplaceState(m,m.state,null),Co(a,c,m,h),Ro(),m.state=a.memoizedState),typeof m.componentDidMount=="function"&&(a.flags|=4194308),c=!0}else if(n===null){m=a.stateNode;var w=a.memoizedProps,B=Tr(s,w);m.props=B;var nt=m.context,mt=s.contextType;T=rs,typeof mt=="object"&&mt!==null&&(T=Ln(mt));var _t=s.getDerivedStateFromProps;mt=typeof _t=="function"||typeof m.getSnapshotBeforeUpdate=="function",w=a.pendingProps!==w,mt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w||nt!==T)&&Sv(a,m,c,T),Ua=!1;var rt=a.memoizedState;m.state=rt,Co(a,c,m,h),Ro(),nt=a.memoizedState,w||rt!==nt||Ua?(typeof _t=="function"&&(Qf(a,s,_t,c),nt=a.memoizedState),(B=Ua||yv(a,s,B,c,rt,nt,T))?(mt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(a.flags|=4194308)):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=c,a.memoizedState=nt),m.props=c,m.state=nt,m.context=T,c=B):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),c=!1)}else{m=a.stateNode,Uf(n,a),T=a.memoizedProps,mt=Tr(s,T),m.props=mt,_t=a.pendingProps,rt=m.context,nt=s.contextType,B=rs,typeof nt=="object"&&nt!==null&&(B=Ln(nt)),w=s.getDerivedStateFromProps,(nt=typeof w=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(T!==_t||rt!==B)&&Sv(a,m,c,B),Ua=!1,rt=a.memoizedState,m.state=rt,Co(a,c,m,h),Ro();var ot=a.memoizedState;T!==_t||rt!==ot||Ua||n!==null&&n.dependencies!==null&&$l(n.dependencies)?(typeof w=="function"&&(Qf(a,s,w,c),ot=a.memoizedState),(mt=Ua||yv(a,s,mt,c,rt,ot,B)||n!==null&&n.dependencies!==null&&$l(n.dependencies))?(nt||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(c,ot,B),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(c,ot,B)),typeof m.componentDidUpdate=="function"&&(a.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof m.componentDidUpdate!="function"||T===n.memoizedProps&&rt===n.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&rt===n.memoizedState||(a.flags|=1024),a.memoizedProps=c,a.memoizedState=ot),m.props=c,m.state=ot,m.context=B,c=mt):(typeof m.componentDidUpdate!="function"||T===n.memoizedProps&&rt===n.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&rt===n.memoizedState||(a.flags|=1024),c=!1)}return m=c,gc(n,a),c=(a.flags&128)!==0,m||c?(m=a.stateNode,s=c&&typeof s.getDerivedStateFromError!="function"?null:m.render(),a.flags|=1,n!==null&&c?(a.child=ms(a,n.child,null,h),a.child=ms(a,null,s,h)):An(n,a,s,h),a.memoizedState=m.state,n=a.child):n=ea(n,a,h),n}function Iv(n,a,s,c){return yo(),a.flags|=256,An(n,a,s,c),a.child}var nh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ih(n){return{baseLanes:n,cachePool:Mg()}}function ah(n,a,s){return n=n!==null?n.childLanes&~s:0,a&&(n|=fi),n}function Fv(n,a,s){var c=a.pendingProps,h=!1,m=(a.flags&128)!==0,T;if((T=m)||(T=n!==null&&n.memoizedState===null?!1:(vn.current&2)!==0),T&&(h=!0,a.flags&=-129),T=(a.flags&32)!==0,a.flags&=-33,n===null){if(Ue){if(h?Pa(a):Ia(),Ue){var w=nn,B;if(B=w){t:{for(B=w,w=Oi;B.nodeType!==8;){if(!w){w=null;break t}if(B=Si(B.nextSibling),B===null){w=null;break t}}w=B}w!==null?(a.memoizedState={dehydrated:w,treeContext:vr!==null?{id:Zi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},B=Kn(18,null,null,0),B.stateNode=w,B.return=a,a.child=B,zn=a,nn=null,B=!0):B=!1}B||yr(a)}if(w=a.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return Gh(w)?a.lanes=32:a.lanes=536870912,null;ta(a)}return w=c.children,c=c.fallback,h?(Ia(),h=a.mode,w=vc({mode:"hidden",children:w},h),c=gr(c,h,s,null),w.return=a,c.return=a,w.sibling=c,a.child=w,h=a.child,h.memoizedState=ih(s),h.childLanes=ah(n,T,s),a.memoizedState=nh,c):(Pa(a),rh(a,w))}if(B=n.memoizedState,B!==null&&(w=B.dehydrated,w!==null)){if(m)a.flags&256?(Pa(a),a.flags&=-257,a=sh(n,a,s)):a.memoizedState!==null?(Ia(),a.child=n.child,a.flags|=128,a=null):(Ia(),h=c.fallback,w=a.mode,c=vc({mode:"visible",children:c.children},w),h=gr(h,w,s,null),h.flags|=2,c.return=a,h.return=a,c.sibling=h,a.child=c,ms(a,n.child,null,s),c=a.child,c.memoizedState=ih(s),c.childLanes=ah(n,T,s),a.memoizedState=nh,a=h);else if(Pa(a),Gh(w)){if(T=w.nextSibling&&w.nextSibling.dataset,T)var nt=T.dgst;T=nt,c=Error(r(419)),c.stack="",c.digest=T,So({value:c,source:null,stack:null}),a=sh(n,a,s)}else if(Sn||Eo(n,a,s,!1),T=(s&n.childLanes)!==0,Sn||T){if(T=je,T!==null&&(c=s&-s,c=(c&42)!==0?1:oe(c),c=(c&(T.suspendedLanes|s))!==0?0:c,c!==0&&c!==B.retryLane))throw B.retryLane=c,as(n,c),ei(T,n,c),Rv;w.data==="$?"||bh(),a=sh(n,a,s)}else w.data==="$?"?(a.flags|=192,a.child=n.child,a=null):(n=B.treeContext,nn=Si(w.nextSibling),zn=a,Ue=!0,xr=null,Oi=!1,n!==null&&(li[ci++]=Zi,li[ci++]=Ki,li[ci++]=vr,Zi=n.id,Ki=n.overflow,vr=a),a=rh(a,c.children),a.flags|=4096);return a}return h?(Ia(),h=c.fallback,w=a.mode,B=n.child,nt=B.sibling,c=Yi(B,{mode:"hidden",children:c.children}),c.subtreeFlags=B.subtreeFlags&65011712,nt!==null?h=Yi(nt,h):(h=gr(h,w,s,null),h.flags|=2),h.return=a,c.return=a,c.sibling=h,a.child=c,c=h,h=a.child,w=n.child.memoizedState,w===null?w=ih(s):(B=w.cachePool,B!==null?(nt=gn._currentValue,B=B.parent!==nt?{parent:nt,pool:nt}:B):B=Mg(),w={baseLanes:w.baseLanes|s,cachePool:B}),h.memoizedState=w,h.childLanes=ah(n,T,s),a.memoizedState=nh,c):(Pa(a),s=n.child,n=s.sibling,s=Yi(s,{mode:"visible",children:c.children}),s.return=a,s.sibling=null,n!==null&&(T=a.deletions,T===null?(a.deletions=[n],a.flags|=16):T.push(n)),a.child=s,a.memoizedState=null,s)}function rh(n,a){return a=vc({mode:"visible",children:a},n.mode),a.return=n,n.child=a}function vc(n,a){return n=Kn(22,n,null,a),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function sh(n,a,s){return ms(a,n.child,null,s),n=rh(a,a.pendingProps.children),n.flags|=2,a.memoizedState=null,n}function zv(n,a,s){n.lanes|=a;var c=n.alternate;c!==null&&(c.lanes|=a),bf(n.return,a,s)}function oh(n,a,s,c,h){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:c,tail:s,tailMode:h}:(m.isBackwards=a,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=s,m.tailMode=h)}function Bv(n,a,s){var c=a.pendingProps,h=c.revealOrder,m=c.tail;if(An(n,a,c.children,s),c=vn.current,(c&2)!==0)c=c&1|2,a.flags|=128;else{if(n!==null&&(n.flags&128)!==0)t:for(n=a.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&zv(n,s,a);else if(n.tag===19)zv(n,s,a);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break t;for(;n.sibling===null;){if(n.return===null||n.return===a)break t;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}switch(Et(vn,c),h){case"forwards":for(s=a.child,h=null;s!==null;)n=s.alternate,n!==null&&dc(n)===null&&(h=s),s=s.sibling;s=h,s===null?(h=a.child,a.child=null):(h=s.sibling,s.sibling=null),oh(a,!1,h,s,m);break;case"backwards":for(s=null,h=a.child,a.child=null;h!==null;){if(n=h.alternate,n!==null&&dc(n)===null){a.child=h;break}n=h.sibling,h.sibling=s,s=h,h=n}oh(a,!0,s,null,m);break;case"together":oh(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function ea(n,a,s){if(n!==null&&(a.dependencies=n.dependencies),Ga|=a.lanes,(s&a.childLanes)===0)if(n!==null){if(Eo(n,a,s,!1),(s&a.childLanes)===0)return null}else return null;if(n!==null&&a.child!==n.child)throw Error(r(153));if(a.child!==null){for(n=a.child,s=Yi(n,n.pendingProps),a.child=s,s.return=a;n.sibling!==null;)n=n.sibling,s=s.sibling=Yi(n,n.pendingProps),s.return=a;s.sibling=null}return a.child}function lh(n,a){return(n.lanes&a)!==0?!0:(n=n.dependencies,!!(n!==null&&$l(n)))}function BE(n,a,s){switch(a.tag){case 3:Mt(a,a.stateNode.containerInfo),Da(a,gn,n.memoizedState.cache),yo();break;case 27:case 5:Yt(a);break;case 4:Mt(a,a.stateNode.containerInfo);break;case 10:Da(a,a.type,a.memoizedProps.value);break;case 13:var c=a.memoizedState;if(c!==null)return c.dehydrated!==null?(Pa(a),a.flags|=128,null):(s&a.child.childLanes)!==0?Fv(n,a,s):(Pa(a),n=ea(n,a,s),n!==null?n.sibling:null);Pa(a);break;case 19:var h=(n.flags&128)!==0;if(c=(s&a.childLanes)!==0,c||(Eo(n,a,s,!1),c=(s&a.childLanes)!==0),h){if(c)return Bv(n,a,s);a.flags|=128}if(h=a.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Et(vn,vn.current),c)break;return null;case 22:case 23:return a.lanes=0,Lv(n,a,s);case 24:Da(a,gn,n.memoizedState.cache)}return ea(n,a,s)}function Hv(n,a,s){if(n!==null)if(n.memoizedProps!==a.pendingProps)Sn=!0;else{if(!lh(n,s)&&(a.flags&128)===0)return Sn=!1,BE(n,a,s);Sn=(n.flags&131072)!==0}else Sn=!1,Ue&&(a.flags&1048576)!==0&&gg(a,Kl,a.index);switch(a.lanes=0,a.tag){case 16:t:{n=a.pendingProps;var c=a.elementType,h=c._init;if(c=h(c._payload),a.type=c,typeof c=="function")vf(c)?(n=Tr(c,n),a.tag=1,a=Pv(null,a,c,n,s)):(a.tag=0,a=eh(null,a,c,n,s));else{if(c!=null){if(h=c.$$typeof,h===A){a.tag=11,a=Cv(null,a,c,n,s);break t}else if(h===z){a.tag=14,a=Dv(null,a,c,n,s);break t}}throw a=tt(c)||c,Error(r(306,a,""))}}return a;case 0:return eh(n,a,a.type,a.pendingProps,s);case 1:return c=a.type,h=Tr(c,a.pendingProps),Pv(n,a,c,h,s);case 3:t:{if(Mt(a,a.stateNode.containerInfo),n===null)throw Error(r(387));c=a.pendingProps;var m=a.memoizedState;h=m.element,Uf(n,a),Co(a,c,null,s);var T=a.memoizedState;if(c=T.cache,Da(a,gn,c),c!==m.cache&&Tf(a,[gn],s,!0),Ro(),c=T.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:T.cache},a.updateQueue.baseState=m,a.memoizedState=m,a.flags&256){a=Iv(n,a,c,s);break t}else if(c!==h){h=si(Error(r(424)),a),So(h),a=Iv(n,a,c,s);break t}else{switch(n=a.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(nn=Si(n.firstChild),zn=a,Ue=!0,xr=null,Oi=!0,s=_v(a,null,c,s),a.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(yo(),c===h){a=ea(n,a,s);break t}An(n,a,c,s)}a=a.child}return a;case 26:return gc(n,a),n===null?(s=X0(a.type,null,a.pendingProps,null))?a.memoizedState=s:Ue||(s=a.type,n=a.pendingProps,c=Uc(it.current).createElement(s),c[mn]=a,c[tn]=n,Rn(c,s,n),ln(c),a.stateNode=c):a.memoizedState=X0(a.type,n.memoizedProps,a.pendingProps,n.memoizedState),null;case 27:return Yt(a),n===null&&Ue&&(c=a.stateNode=G0(a.type,a.pendingProps,it.current),zn=a,Oi=!0,h=nn,Wa(a.type)?(Vh=h,nn=Si(c.firstChild)):nn=h),An(n,a,a.pendingProps.children,s),gc(n,a),n===null&&(a.flags|=4194304),a.child;case 5:return n===null&&Ue&&((h=c=nn)&&(c=dM(c,a.type,a.pendingProps,Oi),c!==null?(a.stateNode=c,zn=a,nn=Si(c.firstChild),Oi=!1,h=!0):h=!1),h||yr(a)),Yt(a),h=a.type,m=a.pendingProps,T=n!==null?n.memoizedProps:null,c=m.children,zh(h,m)?c=null:T!==null&&zh(h,T)&&(a.flags|=32),a.memoizedState!==null&&(h=Ff(n,a,UE,null,null,s),$o._currentValue=h),gc(n,a),An(n,a,c,s),a.child;case 6:return n===null&&Ue&&((n=s=nn)&&(s=pM(s,a.pendingProps,Oi),s!==null?(a.stateNode=s,zn=a,nn=null,n=!0):n=!1),n||yr(a)),null;case 13:return Fv(n,a,s);case 4:return Mt(a,a.stateNode.containerInfo),c=a.pendingProps,n===null?a.child=ms(a,null,c,s):An(n,a,c,s),a.child;case 11:return Cv(n,a,a.type,a.pendingProps,s);case 7:return An(n,a,a.pendingProps,s),a.child;case 8:return An(n,a,a.pendingProps.children,s),a.child;case 12:return An(n,a,a.pendingProps.children,s),a.child;case 10:return c=a.pendingProps,Da(a,a.type,c.value),An(n,a,c.children,s),a.child;case 9:return h=a.type._context,c=a.pendingProps.children,Er(a),h=Ln(h),c=c(h),a.flags|=1,An(n,a,c,s),a.child;case 14:return Dv(n,a,a.type,a.pendingProps,s);case 15:return Uv(n,a,a.type,a.pendingProps,s);case 19:return Bv(n,a,s);case 31:return c=a.pendingProps,s=a.mode,c={mode:c.mode,children:c.children},n===null?(s=vc(c,s),s.ref=a.ref,a.child=s,s.return=a,a=s):(s=Yi(n.child,c),s.ref=a.ref,a.child=s,s.return=a,a=s),a;case 22:return Lv(n,a,s);case 24:return Er(a),c=Ln(gn),n===null?(h=Rf(),h===null&&(h=je,m=Af(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=s),h=m),a.memoizedState={parent:c,cache:h},Df(a),Da(a,gn,h)):((n.lanes&s)!==0&&(Uf(n,a),Co(a,null,null,s),Ro()),h=n.memoizedState,m=a.memoizedState,h.parent!==c?(h={parent:c,cache:c},a.memoizedState=h,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=h),Da(a,gn,c)):(c=m.cache,Da(a,gn,c),c!==h.cache&&Tf(a,[gn],s,!0))),An(n,a,a.pendingProps.children,s),a.child;case 29:throw a.pendingProps}throw Error(r(156,a.tag))}function na(n){n.flags|=4}function Gv(n,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Z0(a)){if(a=ui.current,a!==null&&((Ae&4194048)===Ae?Pi!==null:(Ae&62914560)!==Ae&&(Ae&536870912)===0||a!==Pi))throw Ao=Cf,bg;n.flags|=8192}}function _c(n,a){a!==null&&(n.flags|=4),n.flags&16384&&(a=n.tag!==22?wt():536870912,n.lanes|=a,xs|=a)}function Io(n,a){if(!Ue)switch(n.tailMode){case"hidden":a=n.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?a||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function $e(n){var a=n.alternate!==null&&n.alternate.child===n.child,s=0,c=0;if(a)for(var h=n.child;h!==null;)s|=h.lanes|h.childLanes,c|=h.subtreeFlags&65011712,c|=h.flags&65011712,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)s|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=s,a}function HE(n,a,s){var c=a.pendingProps;switch(Sf(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(a),null;case 1:return $e(a),null;case 3:return s=a.stateNode,c=null,n!==null&&(c=n.memoizedState.cache),a.memoizedState.cache!==c&&(a.flags|=2048),Qi(gn),$t(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(xo(a)?na(a):n===null||n.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,xg())),$e(a),null;case 26:return s=a.memoizedState,n===null?(na(a),s!==null?($e(a),Gv(a,s)):($e(a),a.flags&=-16777217)):s?s!==n.memoizedState?(na(a),$e(a),Gv(a,s)):($e(a),a.flags&=-16777217):(n.memoizedProps!==c&&na(a),$e(a),a.flags&=-16777217),null;case 27:he(a),s=it.current;var h=a.type;if(n!==null&&a.stateNode!=null)n.memoizedProps!==c&&na(a);else{if(!c){if(a.stateNode===null)throw Error(r(166));return $e(a),null}n=Nt.current,xo(a)?vg(a):(n=G0(h,c,s),a.stateNode=n,na(a))}return $e(a),null;case 5:if(he(a),s=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==c&&na(a);else{if(!c){if(a.stateNode===null)throw Error(r(166));return $e(a),null}if(n=Nt.current,xo(a))vg(a);else{switch(h=Uc(it.current),n){case 1:n=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:n=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":n=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":n=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":n=h.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof c.is=="string"?h.createElement("select",{is:c.is}):h.createElement("select"),c.multiple?n.multiple=!0:c.size&&(n.size=c.size);break;default:n=typeof c.is=="string"?h.createElement(s,{is:c.is}):h.createElement(s)}}n[mn]=a,n[tn]=c;t:for(h=a.child;h!==null;){if(h.tag===5||h.tag===6)n.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===a)break t;for(;h.sibling===null;){if(h.return===null||h.return===a)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}a.stateNode=n;t:switch(Rn(n,s,c),s){case"button":case"input":case"select":case"textarea":n=!!c.autoFocus;break t;case"img":n=!0;break t;default:n=!1}n&&na(a)}}return $e(a),a.flags&=-16777217,null;case 6:if(n&&a.stateNode!=null)n.memoizedProps!==c&&na(a);else{if(typeof c!="string"&&a.stateNode===null)throw Error(r(166));if(n=it.current,xo(a)){if(n=a.stateNode,s=a.memoizedProps,c=null,h=zn,h!==null)switch(h.tag){case 27:case 5:c=h.memoizedProps}n[mn]=a,n=!!(n.nodeValue===s||c!==null&&c.suppressHydrationWarning===!0||O0(n.nodeValue,s)),n||yr(a)}else n=Uc(n).createTextNode(c),n[mn]=a,a.stateNode=n}return $e(a),null;case 13:if(c=a.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(h=xo(a),c!==null&&c.dehydrated!==null){if(n===null){if(!h)throw Error(r(318));if(h=a.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(r(317));h[mn]=a}else yo(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;$e(a),h=!1}else h=xg(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=h),h=!0;if(!h)return a.flags&256?(ta(a),a):(ta(a),null)}if(ta(a),(a.flags&128)!==0)return a.lanes=s,a;if(s=c!==null,n=n!==null&&n.memoizedState!==null,s){c=a.child,h=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(h=c.alternate.memoizedState.cachePool.pool);var m=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(m=c.memoizedState.cachePool.pool),m!==h&&(c.flags|=2048)}return s!==n&&s&&(a.child.flags|=8192),_c(a,a.updateQueue),$e(a),null;case 4:return $t(),n===null&&Nh(a.stateNode.containerInfo),$e(a),null;case 10:return Qi(a.type),$e(a),null;case 19:if(yt(vn),h=a.memoizedState,h===null)return $e(a),null;if(c=(a.flags&128)!==0,m=h.rendering,m===null)if(c)Io(h,!1);else{if(an!==0||n!==null&&(n.flags&128)!==0)for(n=a.child;n!==null;){if(m=dc(n),m!==null){for(a.flags|=128,Io(h,!1),n=m.updateQueue,a.updateQueue=n,_c(a,n),a.subtreeFlags=0,n=s,s=a.child;s!==null;)mg(s,n),s=s.sibling;return Et(vn,vn.current&1|2),a.child}n=n.sibling}h.tail!==null&&zt()>Sc&&(a.flags|=128,c=!0,Io(h,!1),a.lanes=4194304)}else{if(!c)if(n=dc(m),n!==null){if(a.flags|=128,c=!0,n=n.updateQueue,a.updateQueue=n,_c(a,n),Io(h,!0),h.tail===null&&h.tailMode==="hidden"&&!m.alternate&&!Ue)return $e(a),null}else 2*zt()-h.renderingStartTime>Sc&&s!==536870912&&(a.flags|=128,c=!0,Io(h,!1),a.lanes=4194304);h.isBackwards?(m.sibling=a.child,a.child=m):(n=h.last,n!==null?n.sibling=m:a.child=m,h.last=m)}return h.tail!==null?(a=h.tail,h.rendering=a,h.tail=a.sibling,h.renderingStartTime=zt(),a.sibling=null,n=vn.current,Et(vn,c?n&1|2:n&1),a):($e(a),null);case 22:case 23:return ta(a),Pf(),c=a.memoizedState!==null,n!==null?n.memoizedState!==null!==c&&(a.flags|=8192):c&&(a.flags|=8192),c?(s&536870912)!==0&&(a.flags&128)===0&&($e(a),a.subtreeFlags&6&&(a.flags|=8192)):$e(a),s=a.updateQueue,s!==null&&_c(a,s.retryQueue),s=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),c=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==s&&(a.flags|=2048),n!==null&&yt(Mr),null;case 24:return s=null,n!==null&&(s=n.memoizedState.cache),a.memoizedState.cache!==s&&(a.flags|=2048),Qi(gn),$e(a),null;case 25:return null;case 30:return null}throw Error(r(156,a.tag))}function GE(n,a){switch(Sf(a),a.tag){case 1:return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 3:return Qi(gn),$t(),n=a.flags,(n&65536)!==0&&(n&128)===0?(a.flags=n&-65537|128,a):null;case 26:case 27:case 5:return he(a),null;case 13:if(ta(a),n=a.memoizedState,n!==null&&n.dehydrated!==null){if(a.alternate===null)throw Error(r(340));yo()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 19:return yt(vn),null;case 4:return $t(),null;case 10:return Qi(a.type),null;case 22:case 23:return ta(a),Pf(),n!==null&&yt(Mr),n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 24:return Qi(gn),null;case 25:return null;default:return null}}function Vv(n,a){switch(Sf(a),a.tag){case 3:Qi(gn),$t();break;case 26:case 27:case 5:he(a);break;case 4:$t();break;case 13:ta(a);break;case 19:yt(vn);break;case 10:Qi(a.type);break;case 22:case 23:ta(a),Pf(),n!==null&&yt(Mr);break;case 24:Qi(gn)}}function Fo(n,a){try{var s=a.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var h=c.next;s=h;do{if((s.tag&n)===n){c=void 0;var m=s.create,T=s.inst;c=m(),T.destroy=c}s=s.next}while(s!==h)}}catch(w){ke(a,a.return,w)}}function Fa(n,a,s){try{var c=a.updateQueue,h=c!==null?c.lastEffect:null;if(h!==null){var m=h.next;c=m;do{if((c.tag&n)===n){var T=c.inst,w=T.destroy;if(w!==void 0){T.destroy=void 0,h=a;var B=s,nt=w;try{nt()}catch(mt){ke(h,B,mt)}}}c=c.next}while(c!==m)}}catch(mt){ke(a,a.return,mt)}}function kv(n){var a=n.updateQueue;if(a!==null){var s=n.stateNode;try{Dg(a,s)}catch(c){ke(n,n.return,c)}}}function Xv(n,a,s){s.props=Tr(n.type,n.memoizedProps),s.state=n.memoizedState;try{s.componentWillUnmount()}catch(c){ke(n,a,c)}}function zo(n,a){try{var s=n.ref;if(s!==null){switch(n.tag){case 26:case 27:case 5:var c=n.stateNode;break;case 30:c=n.stateNode;break;default:c=n.stateNode}typeof s=="function"?n.refCleanup=s(c):s.current=c}}catch(h){ke(n,a,h)}}function Ii(n,a){var s=n.ref,c=n.refCleanup;if(s!==null)if(typeof c=="function")try{c()}catch(h){ke(n,a,h)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){ke(n,a,h)}else s.current=null}function Wv(n){var a=n.type,s=n.memoizedProps,c=n.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":s.autoFocus&&c.focus();break t;case"img":s.src?c.src=s.src:s.srcSet&&(c.srcset=s.srcSet)}}catch(h){ke(n,n.return,h)}}function ch(n,a,s){try{var c=n.stateNode;lM(c,n.type,s,a),c[tn]=a}catch(h){ke(n,n.return,h)}}function jv(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Wa(n.type)||n.tag===4}function uh(n){t:for(;;){for(;n.sibling===null;){if(n.return===null||jv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Wa(n.type)||n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function fh(n,a,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,a?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(n,a):(a=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,a.appendChild(n),s=s._reactRootContainer,s!=null||a.onclick!==null||(a.onclick=Dc));else if(c!==4&&(c===27&&Wa(n.type)&&(s=n.stateNode,a=null),n=n.child,n!==null))for(fh(n,a,s),n=n.sibling;n!==null;)fh(n,a,s),n=n.sibling}function xc(n,a,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,a?s.insertBefore(n,a):s.appendChild(n);else if(c!==4&&(c===27&&Wa(n.type)&&(s=n.stateNode),n=n.child,n!==null))for(xc(n,a,s),n=n.sibling;n!==null;)xc(n,a,s),n=n.sibling}function qv(n){var a=n.stateNode,s=n.memoizedProps;try{for(var c=n.type,h=a.attributes;h.length;)a.removeAttributeNode(h[0]);Rn(a,c,s),a[mn]=n,a[tn]=s}catch(m){ke(n,n.return,m)}}var ia=!1,on=!1,hh=!1,Yv=typeof WeakSet=="function"?WeakSet:Set,En=null;function VE(n,a){if(n=n.containerInfo,Ih=Fc,n=rg(n),uf(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else t:{s=(s=n.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var h=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break t}var T=0,w=-1,B=-1,nt=0,mt=0,_t=n,rt=null;e:for(;;){for(var ot;_t!==s||h!==0&&_t.nodeType!==3||(w=T+h),_t!==m||c!==0&&_t.nodeType!==3||(B=T+c),_t.nodeType===3&&(T+=_t.nodeValue.length),(ot=_t.firstChild)!==null;)rt=_t,_t=ot;for(;;){if(_t===n)break e;if(rt===s&&++nt===h&&(w=T),rt===m&&++mt===c&&(B=T),(ot=_t.nextSibling)!==null)break;_t=rt,rt=_t.parentNode}_t=ot}s=w===-1||B===-1?null:{start:w,end:B}}else s=null}s=s||{start:0,end:0}}else s=null;for(Fh={focusedElem:n,selectionRange:s},Fc=!1,En=a;En!==null;)if(a=En,n=a.child,(a.subtreeFlags&1024)!==0&&n!==null)n.return=a,En=n;else for(;En!==null;){switch(a=En,m=a.alternate,n=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&m!==null){n=void 0,s=a,h=m.memoizedProps,m=m.memoizedState,c=s.stateNode;try{var se=Tr(s.type,h,s.elementType===s.type);n=c.getSnapshotBeforeUpdate(se,m),c.__reactInternalSnapshotBeforeUpdate=n}catch(ie){ke(s,s.return,ie)}}break;case 3:if((n&1024)!==0){if(n=a.stateNode.containerInfo,s=n.nodeType,s===9)Hh(n);else if(s===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Hh(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(r(163))}if(n=a.sibling,n!==null){n.return=a.return,En=n;break}En=a.return}}function Zv(n,a,s){var c=s.flags;switch(s.tag){case 0:case 11:case 15:za(n,s),c&4&&Fo(5,s);break;case 1:if(za(n,s),c&4)if(n=s.stateNode,a===null)try{n.componentDidMount()}catch(T){ke(s,s.return,T)}else{var h=Tr(s.type,a.memoizedProps);a=a.memoizedState;try{n.componentDidUpdate(h,a,n.__reactInternalSnapshotBeforeUpdate)}catch(T){ke(s,s.return,T)}}c&64&&kv(s),c&512&&zo(s,s.return);break;case 3:if(za(n,s),c&64&&(n=s.updateQueue,n!==null)){if(a=null,s.child!==null)switch(s.child.tag){case 27:case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}try{Dg(n,a)}catch(T){ke(s,s.return,T)}}break;case 27:a===null&&c&4&&qv(s);case 26:case 5:za(n,s),a===null&&c&4&&Wv(s),c&512&&zo(s,s.return);break;case 12:za(n,s);break;case 13:za(n,s),c&4&&Qv(n,s),c&64&&(n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(s=$E.bind(null,s),mM(n,s))));break;case 22:if(c=s.memoizedState!==null||ia,!c){a=a!==null&&a.memoizedState!==null||on,h=ia;var m=on;ia=c,(on=a)&&!m?Ba(n,s,(s.subtreeFlags&8772)!==0):za(n,s),ia=h,on=m}break;case 30:break;default:za(n,s)}}function Kv(n){var a=n.alternate;a!==null&&(n.alternate=null,Kv(a)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(a=n.stateNode,a!==null&&Kr(a)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Ke=null,kn=!1;function aa(n,a,s){for(s=s.child;s!==null;)$v(n,a,s),s=s.sibling}function $v(n,a,s){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(Q,s)}catch{}switch(s.tag){case 26:on||Ii(s,a),aa(n,a,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:on||Ii(s,a);var c=Ke,h=kn;Wa(s.type)&&(Ke=s.stateNode,kn=!1),aa(n,a,s),qo(s.stateNode),Ke=c,kn=h;break;case 5:on||Ii(s,a);case 6:if(c=Ke,h=kn,Ke=null,aa(n,a,s),Ke=c,kn=h,Ke!==null)if(kn)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(s.stateNode)}catch(m){ke(s,a,m)}else try{Ke.removeChild(s.stateNode)}catch(m){ke(s,a,m)}break;case 18:Ke!==null&&(kn?(n=Ke,B0(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,s.stateNode),el(n)):B0(Ke,s.stateNode));break;case 4:c=Ke,h=kn,Ke=s.stateNode.containerInfo,kn=!0,aa(n,a,s),Ke=c,kn=h;break;case 0:case 11:case 14:case 15:on||Fa(2,s,a),on||Fa(4,s,a),aa(n,a,s);break;case 1:on||(Ii(s,a),c=s.stateNode,typeof c.componentWillUnmount=="function"&&Xv(s,a,c)),aa(n,a,s);break;case 21:aa(n,a,s);break;case 22:on=(c=on)||s.memoizedState!==null,aa(n,a,s),on=c;break;default:aa(n,a,s)}}function Qv(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{el(n)}catch(s){ke(a,a.return,s)}}function kE(n){switch(n.tag){case 13:case 19:var a=n.stateNode;return a===null&&(a=n.stateNode=new Yv),a;case 22:return n=n.stateNode,a=n._retryCache,a===null&&(a=n._retryCache=new Yv),a;default:throw Error(r(435,n.tag))}}function dh(n,a){var s=kE(n);a.forEach(function(c){var h=QE.bind(null,n,c);s.has(c)||(s.add(c),c.then(h,h))})}function $n(n,a){var s=a.deletions;if(s!==null)for(var c=0;c<s.length;c++){var h=s[c],m=n,T=a,w=T;t:for(;w!==null;){switch(w.tag){case 27:if(Wa(w.type)){Ke=w.stateNode,kn=!1;break t}break;case 5:Ke=w.stateNode,kn=!1;break t;case 3:case 4:Ke=w.stateNode.containerInfo,kn=!0;break t}w=w.return}if(Ke===null)throw Error(r(160));$v(m,T,h),Ke=null,kn=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)Jv(a,n),a=a.sibling}var yi=null;function Jv(n,a){var s=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:$n(a,n),Qn(n),c&4&&(Fa(3,n,n.return),Fo(3,n),Fa(5,n,n.return));break;case 1:$n(a,n),Qn(n),c&512&&(on||s===null||Ii(s,s.return)),c&64&&ia&&(n=n.updateQueue,n!==null&&(c=n.callbacks,c!==null&&(s=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=s===null?c:s.concat(c))));break;case 26:var h=yi;if($n(a,n),Qn(n),c&512&&(on||s===null||Ii(s,s.return)),c&4){var m=s!==null?s.memoizedState:null;if(c=n.memoizedState,s===null)if(c===null)if(n.stateNode===null){t:{c=n.type,s=n.memoizedProps,h=h.ownerDocument||h;e:switch(c){case"title":m=h.getElementsByTagName("title")[0],(!m||m[Ni]||m[mn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(c),h.head.insertBefore(m,h.querySelector("head > title"))),Rn(m,c,s),m[mn]=n,ln(m),c=m;break t;case"link":var T=q0("link","href",h).get(c+(s.href||""));if(T){for(var w=0;w<T.length;w++)if(m=T[w],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){T.splice(w,1);break e}}m=h.createElement(c),Rn(m,c,s),h.head.appendChild(m);break;case"meta":if(T=q0("meta","content",h).get(c+(s.content||""))){for(w=0;w<T.length;w++)if(m=T[w],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){T.splice(w,1);break e}}m=h.createElement(c),Rn(m,c,s),h.head.appendChild(m);break;default:throw Error(r(468,c))}m[mn]=n,ln(m),c=m}n.stateNode=c}else Y0(h,n.type,n.stateNode);else n.stateNode=j0(h,c,n.memoizedProps);else m!==c?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,c===null?Y0(h,n.type,n.stateNode):j0(h,c,n.memoizedProps)):c===null&&n.stateNode!==null&&ch(n,n.memoizedProps,s.memoizedProps)}break;case 27:$n(a,n),Qn(n),c&512&&(on||s===null||Ii(s,s.return)),s!==null&&c&4&&ch(n,n.memoizedProps,s.memoizedProps);break;case 5:if($n(a,n),Qn(n),c&512&&(on||s===null||Ii(s,s.return)),n.flags&32){h=n.stateNode;try{Hn(h,"")}catch(ot){ke(n,n.return,ot)}}c&4&&n.stateNode!=null&&(h=n.memoizedProps,ch(n,h,s!==null?s.memoizedProps:h)),c&1024&&(hh=!0);break;case 6:if($n(a,n),Qn(n),c&4){if(n.stateNode===null)throw Error(r(162));c=n.memoizedProps,s=n.stateNode;try{s.nodeValue=c}catch(ot){ke(n,n.return,ot)}}break;case 3:if(Oc=null,h=yi,yi=Lc(a.containerInfo),$n(a,n),yi=h,Qn(n),c&4&&s!==null&&s.memoizedState.isDehydrated)try{el(a.containerInfo)}catch(ot){ke(n,n.return,ot)}hh&&(hh=!1,t0(n));break;case 4:c=yi,yi=Lc(n.stateNode.containerInfo),$n(a,n),Qn(n),yi=c;break;case 12:$n(a,n),Qn(n);break;case 13:$n(a,n),Qn(n),n.child.flags&8192&&n.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(xh=zt()),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,dh(n,c)));break;case 22:h=n.memoizedState!==null;var B=s!==null&&s.memoizedState!==null,nt=ia,mt=on;if(ia=nt||h,on=mt||B,$n(a,n),on=mt,ia=nt,Qn(n),c&8192)t:for(a=n.stateNode,a._visibility=h?a._visibility&-2:a._visibility|1,h&&(s===null||B||ia||on||Ar(n)),s=null,a=n;;){if(a.tag===5||a.tag===26){if(s===null){B=s=a;try{if(m=B.stateNode,h)T=m.style,typeof T.setProperty=="function"?T.setProperty("display","none","important"):T.display="none";else{w=B.stateNode;var _t=B.memoizedProps.style,rt=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;w.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(ot){ke(B,B.return,ot)}}}else if(a.tag===6){if(s===null){B=a;try{B.stateNode.nodeValue=h?"":B.memoizedProps}catch(ot){ke(B,B.return,ot)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===n)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break t;for(;a.sibling===null;){if(a.return===null||a.return===n)break t;s===a&&(s=null),a=a.return}s===a&&(s=null),a.sibling.return=a.return,a=a.sibling}c&4&&(c=n.updateQueue,c!==null&&(s=c.retryQueue,s!==null&&(c.retryQueue=null,dh(n,s))));break;case 19:$n(a,n),Qn(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,dh(n,c)));break;case 30:break;case 21:break;default:$n(a,n),Qn(n)}}function Qn(n){var a=n.flags;if(a&2){try{for(var s,c=n.return;c!==null;){if(jv(c)){s=c;break}c=c.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var h=s.stateNode,m=uh(n);xc(n,m,h);break;case 5:var T=s.stateNode;s.flags&32&&(Hn(T,""),s.flags&=-33);var w=uh(n);xc(n,w,T);break;case 3:case 4:var B=s.stateNode.containerInfo,nt=uh(n);fh(n,nt,B);break;default:throw Error(r(161))}}catch(mt){ke(n,n.return,mt)}n.flags&=-3}a&4096&&(n.flags&=-4097)}function t0(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var a=n;t0(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),n=n.sibling}}function za(n,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Zv(n,a.alternate,a),a=a.sibling}function Ar(n){for(n=n.child;n!==null;){var a=n;switch(a.tag){case 0:case 11:case 14:case 15:Fa(4,a,a.return),Ar(a);break;case 1:Ii(a,a.return);var s=a.stateNode;typeof s.componentWillUnmount=="function"&&Xv(a,a.return,s),Ar(a);break;case 27:qo(a.stateNode);case 26:case 5:Ii(a,a.return),Ar(a);break;case 22:a.memoizedState===null&&Ar(a);break;case 30:Ar(a);break;default:Ar(a)}n=n.sibling}}function Ba(n,a,s){for(s=s&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var c=a.alternate,h=n,m=a,T=m.flags;switch(m.tag){case 0:case 11:case 15:Ba(h,m,s),Fo(4,m);break;case 1:if(Ba(h,m,s),c=m,h=c.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(nt){ke(c,c.return,nt)}if(c=m,h=c.updateQueue,h!==null){var w=c.stateNode;try{var B=h.shared.hiddenCallbacks;if(B!==null)for(h.shared.hiddenCallbacks=null,h=0;h<B.length;h++)Cg(B[h],w)}catch(nt){ke(c,c.return,nt)}}s&&T&64&&kv(m),zo(m,m.return);break;case 27:qv(m);case 26:case 5:Ba(h,m,s),s&&c===null&&T&4&&Wv(m),zo(m,m.return);break;case 12:Ba(h,m,s);break;case 13:Ba(h,m,s),s&&T&4&&Qv(h,m);break;case 22:m.memoizedState===null&&Ba(h,m,s),zo(m,m.return);break;case 30:break;default:Ba(h,m,s)}a=a.sibling}}function ph(n,a){var s=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==s&&(n!=null&&n.refCount++,s!=null&&Mo(s))}function mh(n,a){n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&Mo(n))}function Fi(n,a,s,c){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)e0(n,a,s,c),a=a.sibling}function e0(n,a,s,c){var h=a.flags;switch(a.tag){case 0:case 11:case 15:Fi(n,a,s,c),h&2048&&Fo(9,a);break;case 1:Fi(n,a,s,c);break;case 3:Fi(n,a,s,c),h&2048&&(n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&Mo(n)));break;case 12:if(h&2048){Fi(n,a,s,c),n=a.stateNode;try{var m=a.memoizedProps,T=m.id,w=m.onPostCommit;typeof w=="function"&&w(T,a.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(B){ke(a,a.return,B)}}else Fi(n,a,s,c);break;case 13:Fi(n,a,s,c);break;case 23:break;case 22:m=a.stateNode,T=a.alternate,a.memoizedState!==null?m._visibility&2?Fi(n,a,s,c):Bo(n,a):m._visibility&2?Fi(n,a,s,c):(m._visibility|=2,gs(n,a,s,c,(a.subtreeFlags&10256)!==0)),h&2048&&ph(T,a);break;case 24:Fi(n,a,s,c),h&2048&&mh(a.alternate,a);break;default:Fi(n,a,s,c)}}function gs(n,a,s,c,h){for(h=h&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var m=n,T=a,w=s,B=c,nt=T.flags;switch(T.tag){case 0:case 11:case 15:gs(m,T,w,B,h),Fo(8,T);break;case 23:break;case 22:var mt=T.stateNode;T.memoizedState!==null?mt._visibility&2?gs(m,T,w,B,h):Bo(m,T):(mt._visibility|=2,gs(m,T,w,B,h)),h&&nt&2048&&ph(T.alternate,T);break;case 24:gs(m,T,w,B,h),h&&nt&2048&&mh(T.alternate,T);break;default:gs(m,T,w,B,h)}a=a.sibling}}function Bo(n,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var s=n,c=a,h=c.flags;switch(c.tag){case 22:Bo(s,c),h&2048&&ph(c.alternate,c);break;case 24:Bo(s,c),h&2048&&mh(c.alternate,c);break;default:Bo(s,c)}a=a.sibling}}var Ho=8192;function vs(n){if(n.subtreeFlags&Ho)for(n=n.child;n!==null;)n0(n),n=n.sibling}function n0(n){switch(n.tag){case 26:vs(n),n.flags&Ho&&n.memoizedState!==null&&RM(yi,n.memoizedState,n.memoizedProps);break;case 5:vs(n);break;case 3:case 4:var a=yi;yi=Lc(n.stateNode.containerInfo),vs(n),yi=a;break;case 22:n.memoizedState===null&&(a=n.alternate,a!==null&&a.memoizedState!==null?(a=Ho,Ho=16777216,vs(n),Ho=a):vs(n));break;default:vs(n)}}function i0(n){var a=n.alternate;if(a!==null&&(n=a.child,n!==null)){a.child=null;do a=n.sibling,n.sibling=null,n=a;while(n!==null)}}function Go(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];En=c,r0(c,n)}i0(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)a0(n),n=n.sibling}function a0(n){switch(n.tag){case 0:case 11:case 15:Go(n),n.flags&2048&&Fa(9,n,n.return);break;case 3:Go(n);break;case 12:Go(n);break;case 22:var a=n.stateNode;n.memoizedState!==null&&a._visibility&2&&(n.return===null||n.return.tag!==13)?(a._visibility&=-3,yc(n)):Go(n);break;default:Go(n)}}function yc(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];En=c,r0(c,n)}i0(n)}for(n=n.child;n!==null;){switch(a=n,a.tag){case 0:case 11:case 15:Fa(8,a,a.return),yc(a);break;case 22:s=a.stateNode,s._visibility&2&&(s._visibility&=-3,yc(a));break;default:yc(a)}n=n.sibling}}function r0(n,a){for(;En!==null;){var s=En;switch(s.tag){case 0:case 11:case 15:Fa(8,s,a);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var c=s.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:Mo(s.memoizedState.cache)}if(c=s.child,c!==null)c.return=s,En=c;else t:for(s=n;En!==null;){c=En;var h=c.sibling,m=c.return;if(Kv(c),c===s){En=null;break t}if(h!==null){h.return=m,En=h;break t}En=m}}}var XE={getCacheForType:function(n){var a=Ln(gn),s=a.data.get(n);return s===void 0&&(s=n(),a.data.set(n,s)),s}},WE=typeof WeakMap=="function"?WeakMap:Map,Pe=0,je=null,Se=null,Ae=0,Ie=0,Jn=null,Ha=!1,_s=!1,gh=!1,ra=0,an=0,Ga=0,wr=0,vh=0,fi=0,xs=0,Vo=null,Xn=null,_h=!1,xh=0,Sc=1/0,Ec=null,Va=null,wn=0,ka=null,ys=null,Ss=0,yh=0,Sh=null,s0=null,ko=0,Eh=null;function ti(){if((Pe&2)!==0&&Ae!==0)return Ae&-Ae;if(F.T!==null){var n=ls;return n!==0?n:Ch()}return we()}function o0(){fi===0&&(fi=(Ae&536870912)===0||Ue?W():536870912);var n=ui.current;return n!==null&&(n.flags|=32),fi}function ei(n,a,s){(n===je&&(Ie===2||Ie===9)||n.cancelPendingCommit!==null)&&(Es(n,0),Xa(n,Ae,fi,!1)),Bt(n,s),((Pe&2)===0||n!==je)&&(n===je&&((Pe&2)===0&&(wr|=s),an===4&&Xa(n,Ae,fi,!1)),zi(n))}function l0(n,a,s){if((Pe&6)!==0)throw Error(r(327));var c=!s&&(a&124)===0&&(a&n.expiredLanes)===0||Lt(n,a),h=c?YE(n,a):Th(n,a,!0),m=c;do{if(h===0){_s&&!c&&Xa(n,a,0,!1);break}else{if(s=n.current.alternate,m&&!jE(s)){h=Th(n,a,!1),m=!1;continue}if(h===2){if(m=a,n.errorRecoveryDisabledLanes&m)var T=0;else T=n.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){a=T;t:{var w=n;h=Vo;var B=w.current.memoizedState.isDehydrated;if(B&&(Es(w,T).flags|=256),T=Th(w,T,!1),T!==2){if(gh&&!B){w.errorRecoveryDisabledLanes|=m,wr|=m,h=4;break t}m=Xn,Xn=h,m!==null&&(Xn===null?Xn=m:Xn.push.apply(Xn,m))}h=T}if(m=!1,h!==2)continue}}if(h===1){Es(n,0),Xa(n,a,0,!0);break}t:{switch(c=n,m=h,m){case 0:case 1:throw Error(r(345));case 4:if((a&4194048)!==a)break;case 6:Xa(c,a,fi,!Ha);break t;case 2:Xn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((a&62914560)===a&&(h=xh+300-zt(),10<h)){if(Xa(c,a,fi,!Ha),qt(c,0,!0)!==0)break t;c.timeoutHandle=F0(c0.bind(null,c,s,Xn,Ec,_h,a,fi,wr,xs,Ha,m,2,-0,0),h);break t}c0(c,s,Xn,Ec,_h,a,fi,wr,xs,Ha,m,0,-0,0)}}break}while(!0);zi(n)}function c0(n,a,s,c,h,m,T,w,B,nt,mt,_t,rt,ot){if(n.timeoutHandle=-1,_t=a.subtreeFlags,(_t&8192||(_t&16785408)===16785408)&&(Ko={stylesheets:null,count:0,unsuspend:wM},n0(a),_t=CM(),_t!==null)){n.cancelPendingCommit=_t(g0.bind(null,n,a,m,s,c,h,T,w,B,mt,1,rt,ot)),Xa(n,m,T,!nt);return}g0(n,a,m,s,c,h,T,w,B)}function jE(n){for(var a=n;;){var s=a.tag;if((s===0||s===11||s===15)&&a.flags&16384&&(s=a.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var c=0;c<s.length;c++){var h=s[c],m=h.getSnapshot;h=h.value;try{if(!Zn(m(),h))return!1}catch{return!1}}if(s=a.child,a.subtreeFlags&16384&&s!==null)s.return=a,a=s;else{if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Xa(n,a,s,c){a&=~vh,a&=~wr,n.suspendedLanes|=a,n.pingedLanes&=~a,c&&(n.warmLanes|=a),c=n.expirationTimes;for(var h=a;0<h;){var m=31-Dt(h),T=1<<m;c[m]=-1,h&=~T}s!==0&&xt(n,s,a)}function Mc(){return(Pe&6)===0?(Xo(0),!1):!0}function Mh(){if(Se!==null){if(Ie===0)var n=Se.return;else n=Se,$i=Sr=null,Hf(n),ps=null,Oo=0,n=Se;for(;n!==null;)Vv(n.alternate,n),n=n.return;Se=null}}function Es(n,a){var s=n.timeoutHandle;s!==-1&&(n.timeoutHandle=-1,uM(s)),s=n.cancelPendingCommit,s!==null&&(n.cancelPendingCommit=null,s()),Mh(),je=n,Se=s=Yi(n.current,null),Ae=a,Ie=0,Jn=null,Ha=!1,_s=Lt(n,a),gh=!1,xs=fi=vh=wr=Ga=an=0,Xn=Vo=null,_h=!1,(a&8)!==0&&(a|=a&32);var c=n.entangledLanes;if(c!==0)for(n=n.entanglements,c&=a;0<c;){var h=31-Dt(c),m=1<<h;a|=n[h],c&=~m}return ra=a,Wl(),s}function u0(n,a){_e=null,F.H=uc,a===To||a===tc?(a=wg(),Ie=3):a===bg?(a=wg(),Ie=4):Ie=a===Rv?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Jn=a,Se===null&&(an=1,mc(n,si(a,n.current)))}function f0(){var n=F.H;return F.H=uc,n===null?uc:n}function h0(){var n=F.A;return F.A=XE,n}function bh(){an=4,Ha||(Ae&4194048)!==Ae&&ui.current!==null||(_s=!0),(Ga&134217727)===0&&(wr&134217727)===0||je===null||Xa(je,Ae,fi,!1)}function Th(n,a,s){var c=Pe;Pe|=2;var h=f0(),m=h0();(je!==n||Ae!==a)&&(Ec=null,Es(n,a)),a=!1;var T=an;t:do try{if(Ie!==0&&Se!==null){var w=Se,B=Jn;switch(Ie){case 8:Mh(),T=6;break t;case 3:case 2:case 9:case 6:ui.current===null&&(a=!0);var nt=Ie;if(Ie=0,Jn=null,Ms(n,w,B,nt),s&&_s){T=0;break t}break;default:nt=Ie,Ie=0,Jn=null,Ms(n,w,B,nt)}}qE(),T=an;break}catch(mt){u0(n,mt)}while(!0);return a&&n.shellSuspendCounter++,$i=Sr=null,Pe=c,F.H=h,F.A=m,Se===null&&(je=null,Ae=0,Wl()),T}function qE(){for(;Se!==null;)d0(Se)}function YE(n,a){var s=Pe;Pe|=2;var c=f0(),h=h0();je!==n||Ae!==a?(Ec=null,Sc=zt()+500,Es(n,a)):_s=Lt(n,a);t:do try{if(Ie!==0&&Se!==null){a=Se;var m=Jn;e:switch(Ie){case 1:Ie=0,Jn=null,Ms(n,a,m,1);break;case 2:case 9:if(Tg(m)){Ie=0,Jn=null,p0(a);break}a=function(){Ie!==2&&Ie!==9||je!==n||(Ie=7),zi(n)},m.then(a,a);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:Tg(m)?(Ie=0,Jn=null,p0(a)):(Ie=0,Jn=null,Ms(n,a,m,7));break;case 5:var T=null;switch(Se.tag){case 26:T=Se.memoizedState;case 5:case 27:var w=Se;if(!T||Z0(T)){Ie=0,Jn=null;var B=w.sibling;if(B!==null)Se=B;else{var nt=w.return;nt!==null?(Se=nt,bc(nt)):Se=null}break e}}Ie=0,Jn=null,Ms(n,a,m,5);break;case 6:Ie=0,Jn=null,Ms(n,a,m,6);break;case 8:Mh(),an=6;break t;default:throw Error(r(462))}}ZE();break}catch(mt){u0(n,mt)}while(!0);return $i=Sr=null,F.H=c,F.A=h,Pe=s,Se!==null?0:(je=null,Ae=0,Wl(),an)}function ZE(){for(;Se!==null&&!le();)d0(Se)}function d0(n){var a=Hv(n.alternate,n,ra);n.memoizedProps=n.pendingProps,a===null?bc(n):Se=a}function p0(n){var a=n,s=a.alternate;switch(a.tag){case 15:case 0:a=Ov(s,a,a.pendingProps,a.type,void 0,Ae);break;case 11:a=Ov(s,a,a.pendingProps,a.type.render,a.ref,Ae);break;case 5:Hf(a);default:Vv(s,a),a=Se=mg(a,ra),a=Hv(s,a,ra)}n.memoizedProps=n.pendingProps,a===null?bc(n):Se=a}function Ms(n,a,s,c){$i=Sr=null,Hf(a),ps=null,Oo=0;var h=a.return;try{if(zE(n,h,a,s,Ae)){an=1,mc(n,si(s,n.current)),Se=null;return}}catch(m){if(h!==null)throw Se=h,m;an=1,mc(n,si(s,n.current)),Se=null;return}a.flags&32768?(Ue||c===1?n=!0:_s||(Ae&536870912)!==0?n=!1:(Ha=n=!0,(c===2||c===9||c===3||c===6)&&(c=ui.current,c!==null&&c.tag===13&&(c.flags|=16384))),m0(a,n)):bc(a)}function bc(n){var a=n;do{if((a.flags&32768)!==0){m0(a,Ha);return}n=a.return;var s=HE(a.alternate,a,ra);if(s!==null){Se=s;return}if(a=a.sibling,a!==null){Se=a;return}Se=a=n}while(a!==null);an===0&&(an=5)}function m0(n,a){do{var s=GE(n.alternate,n);if(s!==null){s.flags&=32767,Se=s;return}if(s=n.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!a&&(n=n.sibling,n!==null)){Se=n;return}Se=n=s}while(n!==null);an=6,Se=null}function g0(n,a,s,c,h,m,T,w,B){n.cancelPendingCommit=null;do Tc();while(wn!==0);if((Pe&6)!==0)throw Error(r(327));if(a!==null){if(a===n.current)throw Error(r(177));if(m=a.lanes|a.childLanes,m|=mf,Tt(n,s,m,T,w,B),n===je&&(Se=je=null,Ae=0),ys=a,ka=n,Ss=s,yh=m,Sh=h,s0=c,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,JE(Xe,function(){return S0(),null})):(n.callbackNode=null,n.callbackPriority=0),c=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||c){c=F.T,F.T=null,h=$.p,$.p=2,T=Pe,Pe|=4;try{VE(n,a,s)}finally{Pe=T,$.p=h,F.T=c}}wn=1,v0(),_0(),x0()}}function v0(){if(wn===1){wn=0;var n=ka,a=ys,s=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||s){s=F.T,F.T=null;var c=$.p;$.p=2;var h=Pe;Pe|=4;try{Jv(a,n);var m=Fh,T=rg(n.containerInfo),w=m.focusedElem,B=m.selectionRange;if(T!==w&&w&&w.ownerDocument&&ag(w.ownerDocument.documentElement,w)){if(B!==null&&uf(w)){var nt=B.start,mt=B.end;if(mt===void 0&&(mt=nt),"selectionStart"in w)w.selectionStart=nt,w.selectionEnd=Math.min(mt,w.value.length);else{var _t=w.ownerDocument||document,rt=_t&&_t.defaultView||window;if(rt.getSelection){var ot=rt.getSelection(),se=w.textContent.length,ie=Math.min(B.start,se),He=B.end===void 0?ie:Math.min(B.end,se);!ot.extend&&ie>He&&(T=He,He=ie,ie=T);var Y=ig(w,ie),k=ig(w,He);if(Y&&k&&(ot.rangeCount!==1||ot.anchorNode!==Y.node||ot.anchorOffset!==Y.offset||ot.focusNode!==k.node||ot.focusOffset!==k.offset)){var J=_t.createRange();J.setStart(Y.node,Y.offset),ot.removeAllRanges(),ie>He?(ot.addRange(J),ot.extend(k.node,k.offset)):(J.setEnd(k.node,k.offset),ot.addRange(J))}}}}for(_t=[],ot=w;ot=ot.parentNode;)ot.nodeType===1&&_t.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<_t.length;w++){var gt=_t[w];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}Fc=!!Ih,Fh=Ih=null}finally{Pe=h,$.p=c,F.T=s}}n.current=a,wn=2}}function _0(){if(wn===2){wn=0;var n=ka,a=ys,s=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||s){s=F.T,F.T=null;var c=$.p;$.p=2;var h=Pe;Pe|=4;try{Zv(n,a.alternate,a)}finally{Pe=h,$.p=c,F.T=s}}wn=3}}function x0(){if(wn===4||wn===3){wn=0,ne();var n=ka,a=ys,s=Ss,c=s0;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?wn=5:(wn=0,ys=ka=null,y0(n,n.pendingLanes));var h=n.pendingLanes;if(h===0&&(Va=null),Oe(s),a=a.stateNode,ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(Q,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=F.T,h=$.p,$.p=2,F.T=null;try{for(var m=n.onRecoverableError,T=0;T<c.length;T++){var w=c[T];m(w.value,{componentStack:w.stack})}}finally{F.T=a,$.p=h}}(Ss&3)!==0&&Tc(),zi(n),h=n.pendingLanes,(s&4194090)!==0&&(h&42)!==0?n===Eh?ko++:(ko=0,Eh=n):ko=0,Xo(0)}}function y0(n,a){(n.pooledCacheLanes&=a)===0&&(a=n.pooledCache,a!=null&&(n.pooledCache=null,Mo(a)))}function Tc(n){return v0(),_0(),x0(),S0()}function S0(){if(wn!==5)return!1;var n=ka,a=yh;yh=0;var s=Oe(Ss),c=F.T,h=$.p;try{$.p=32>s?32:s,F.T=null,s=Sh,Sh=null;var m=ka,T=Ss;if(wn=0,ys=ka=null,Ss=0,(Pe&6)!==0)throw Error(r(331));var w=Pe;if(Pe|=4,a0(m.current),e0(m,m.current,T,s),Pe=w,Xo(0,!1),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(Q,m)}catch{}return!0}finally{$.p=h,F.T=c,y0(n,a)}}function E0(n,a,s){a=si(s,a),a=th(n.stateNode,a,2),n=Na(n,a,2),n!==null&&(Bt(n,2),zi(n))}function ke(n,a,s){if(n.tag===3)E0(n,n,s);else for(;a!==null;){if(a.tag===3){E0(a,n,s);break}else if(a.tag===1){var c=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Va===null||!Va.has(c))){n=si(s,n),s=Av(2),c=Na(a,s,2),c!==null&&(wv(s,c,a,n),Bt(c,2),zi(c));break}}a=a.return}}function Ah(n,a,s){var c=n.pingCache;if(c===null){c=n.pingCache=new WE;var h=new Set;c.set(a,h)}else h=c.get(a),h===void 0&&(h=new Set,c.set(a,h));h.has(s)||(gh=!0,h.add(s),n=KE.bind(null,n,a,s),a.then(n,n))}function KE(n,a,s){var c=n.pingCache;c!==null&&c.delete(a),n.pingedLanes|=n.suspendedLanes&s,n.warmLanes&=~s,je===n&&(Ae&s)===s&&(an===4||an===3&&(Ae&62914560)===Ae&&300>zt()-xh?(Pe&2)===0&&Es(n,0):vh|=s,xs===Ae&&(xs=0)),zi(n)}function M0(n,a){a===0&&(a=wt()),n=as(n,a),n!==null&&(Bt(n,a),zi(n))}function $E(n){var a=n.memoizedState,s=0;a!==null&&(s=a.retryLane),M0(n,s)}function QE(n,a){var s=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(s=h.retryLane);break;case 19:c=n.stateNode;break;case 22:c=n.stateNode._retryCache;break;default:throw Error(r(314))}c!==null&&c.delete(a),M0(n,s)}function JE(n,a){return G(n,a)}var Ac=null,bs=null,wh=!1,wc=!1,Rh=!1,Rr=0;function zi(n){n!==bs&&n.next===null&&(bs===null?Ac=bs=n:bs=bs.next=n),wc=!0,wh||(wh=!0,eM())}function Xo(n,a){if(!Rh&&wc){Rh=!0;do for(var s=!1,c=Ac;c!==null;){if(n!==0){var h=c.pendingLanes;if(h===0)var m=0;else{var T=c.suspendedLanes,w=c.pingedLanes;m=(1<<31-Dt(42|n)+1)-1,m&=h&~(T&~w),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,w0(c,m))}else m=Ae,m=qt(c,c===je?m:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(m&3)===0||Lt(c,m)||(s=!0,w0(c,m));c=c.next}while(s);Rh=!1}}function tM(){b0()}function b0(){wc=wh=!1;var n=0;Rr!==0&&(cM()&&(n=Rr),Rr=0);for(var a=zt(),s=null,c=Ac;c!==null;){var h=c.next,m=T0(c,a);m===0?(c.next=null,s===null?Ac=h:s.next=h,h===null&&(bs=s)):(s=c,(n!==0||(m&3)!==0)&&(wc=!0)),c=h}Xo(n)}function T0(n,a){for(var s=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,m=n.pendingLanes&-62914561;0<m;){var T=31-Dt(m),w=1<<T,B=h[T];B===-1?((w&s)===0||(w&c)!==0)&&(h[T]=ue(w,a)):B<=a&&(n.expiredLanes|=w),m&=~w}if(a=je,s=Ae,s=qt(n,n===a?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c=n.callbackNode,s===0||n===a&&(Ie===2||Ie===9)||n.cancelPendingCommit!==null)return c!==null&&c!==null&&Ne(c),n.callbackNode=null,n.callbackPriority=0;if((s&3)===0||Lt(n,s)){if(a=s&-s,a===n.callbackPriority)return a;switch(c!==null&&Ne(c),Oe(s)){case 2:case 8:s=ce;break;case 32:s=Xe;break;case 268435456:s=O;break;default:s=Xe}return c=A0.bind(null,n),s=G(s,c),n.callbackPriority=a,n.callbackNode=s,a}return c!==null&&c!==null&&Ne(c),n.callbackPriority=2,n.callbackNode=null,2}function A0(n,a){if(wn!==0&&wn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var s=n.callbackNode;if(Tc()&&n.callbackNode!==s)return null;var c=Ae;return c=qt(n,n===je?c:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c===0?null:(l0(n,c,a),T0(n,zt()),n.callbackNode!=null&&n.callbackNode===s?A0.bind(null,n):null)}function w0(n,a){if(Tc())return null;l0(n,a,!0)}function eM(){fM(function(){(Pe&6)!==0?G(kt,tM):b0()})}function Ch(){return Rr===0&&(Rr=W()),Rr}function R0(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:zl(""+n)}function C0(n,a){var s=a.ownerDocument.createElement("input");return s.name=a.name,s.value=a.value,n.id&&s.setAttribute("form",n.id),a.parentNode.insertBefore(s,a),n=new FormData(n),s.parentNode.removeChild(s),n}function nM(n,a,s,c,h){if(a==="submit"&&s&&s.stateNode===h){var m=R0((h[tn]||null).action),T=c.submitter;T&&(a=(a=T[tn]||null)?R0(a.formAction):T.getAttribute("formAction"),a!==null&&(m=a,T=null));var w=new Vl("action","action",null,c,h);n.push({event:w,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(Rr!==0){var B=T?C0(h,T):new FormData(h);Zf(s,{pending:!0,data:B,method:h.method,action:m},null,B)}}else typeof m=="function"&&(w.preventDefault(),B=T?C0(h,T):new FormData(h),Zf(s,{pending:!0,data:B,method:h.method,action:m},m,B))},currentTarget:h}]})}}for(var Dh=0;Dh<pf.length;Dh++){var Uh=pf[Dh],iM=Uh.toLowerCase(),aM=Uh[0].toUpperCase()+Uh.slice(1);xi(iM,"on"+aM)}xi(lg,"onAnimationEnd"),xi(cg,"onAnimationIteration"),xi(ug,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(SE,"onTransitionRun"),xi(EE,"onTransitionStart"),xi(ME,"onTransitionCancel"),xi(fg,"onTransitionEnd"),q("onMouseEnter",["mouseout","mouseover"]),q("onMouseLeave",["mouseout","mouseover"]),q("onPointerEnter",["pointerout","pointerover"]),q("onPointerLeave",["pointerout","pointerover"]),R("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),R("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),R("onBeforeInput",["compositionend","keypress","textInput","paste"]),R("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wo));function D0(n,a){a=(a&4)!==0;for(var s=0;s<n.length;s++){var c=n[s],h=c.event;c=c.listeners;t:{var m=void 0;if(a)for(var T=c.length-1;0<=T;T--){var w=c[T],B=w.instance,nt=w.currentTarget;if(w=w.listener,B!==m&&h.isPropagationStopped())break t;m=w,h.currentTarget=nt;try{m(h)}catch(mt){pc(mt)}h.currentTarget=null,m=B}else for(T=0;T<c.length;T++){if(w=c[T],B=w.instance,nt=w.currentTarget,w=w.listener,B!==m&&h.isPropagationStopped())break t;m=w,h.currentTarget=nt;try{m(h)}catch(mt){pc(mt)}h.currentTarget=null,m=B}}}}function Ee(n,a){var s=a[Yr];s===void 0&&(s=a[Yr]=new Set);var c=n+"__bubble";s.has(c)||(U0(a,n,2,!1),s.add(c))}function Lh(n,a,s){var c=0;a&&(c|=4),U0(s,n,c,a)}var Rc="_reactListening"+Math.random().toString(36).slice(2);function Nh(n){if(!n[Rc]){n[Rc]=!0,Il.forEach(function(s){s!=="selectionchange"&&(rM.has(s)||Lh(s,!1,n),Lh(s,!0,n))});var a=n.nodeType===9?n:n.ownerDocument;a===null||a[Rc]||(a[Rc]=!0,Lh("selectionchange",!1,a))}}function U0(n,a,s,c){switch(e_(a)){case 2:var h=LM;break;case 8:h=NM;break;default:h=qh}s=h.bind(null,a,s,n),h=void 0,!tf||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(a,s,{capture:!0,passive:h}):n.addEventListener(a,s,!0):h!==void 0?n.addEventListener(a,s,{passive:h}):n.addEventListener(a,s,!1)}function Oh(n,a,s,c,h){var m=c;if((a&1)===0&&(a&2)===0&&c!==null)t:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var w=c.stateNode.containerInfo;if(w===h)break;if(T===4)for(T=c.return;T!==null;){var B=T.tag;if((B===3||B===4)&&T.stateNode.containerInfo===h)return;T=T.return}for(;w!==null;){if(T=ji(w),T===null)return;if(B=T.tag,B===5||B===6||B===26||B===27){c=m=T;continue t}w=w.parentNode}}c=c.return}zm(function(){var nt=m,mt=Qu(s),_t=[];t:{var rt=hg.get(n);if(rt!==void 0){var ot=Vl,se=n;switch(n){case"keypress":if(Hl(s)===0)break t;case"keydown":case"keyup":ot=JS;break;case"focusin":se="focus",ot=rf;break;case"focusout":se="blur",ot=rf;break;case"beforeblur":case"afterblur":ot=rf;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Gm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=GS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=nE;break;case lg:case cg:case ug:ot=XS;break;case fg:ot=aE;break;case"scroll":case"scrollend":ot=BS;break;case"wheel":ot=sE;break;case"copy":case"cut":case"paste":ot=jS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=km;break;case"toggle":case"beforetoggle":ot=lE}var ie=(a&4)!==0,He=!ie&&(n==="scroll"||n==="scrollend"),Y=ie?rt!==null?rt+"Capture":null:rt;ie=[];for(var k=nt,J;k!==null;){var gt=k;if(J=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||J===null||Y===null||(gt=co(k,Y),gt!=null&&ie.push(jo(k,gt,J))),He)break;k=k.return}0<ie.length&&(rt=new ot(rt,se,null,s,mt),_t.push({event:rt,listeners:ie}))}}if((a&7)===0){t:{if(rt=n==="mouseover"||n==="pointerover",ot=n==="mouseout"||n==="pointerout",rt&&s!==$u&&(se=s.relatedTarget||s.fromElement)&&(ji(se)||se[Li]))break t;if((ot||rt)&&(rt=mt.window===mt?mt:(rt=mt.ownerDocument)?rt.defaultView||rt.parentWindow:window,ot?(se=s.relatedTarget||s.toElement,ot=nt,se=se?ji(se):null,se!==null&&(He=l(se),ie=se.tag,se!==He||ie!==5&&ie!==27&&ie!==6)&&(se=null)):(ot=null,se=nt),ot!==se)){if(ie=Gm,gt="onMouseLeave",Y="onMouseEnter",k="mouse",(n==="pointerout"||n==="pointerover")&&(ie=km,gt="onPointerLeave",Y="onPointerEnter",k="pointer"),He=ot==null?rt:hr(ot),J=se==null?rt:hr(se),rt=new ie(gt,k+"leave",ot,s,mt),rt.target=He,rt.relatedTarget=J,gt=null,ji(mt)===nt&&(ie=new ie(Y,k+"enter",se,s,mt),ie.target=J,ie.relatedTarget=He,gt=ie),He=gt,ot&&se)e:{for(ie=ot,Y=se,k=0,J=ie;J;J=Ts(J))k++;for(J=0,gt=Y;gt;gt=Ts(gt))J++;for(;0<k-J;)ie=Ts(ie),k--;for(;0<J-k;)Y=Ts(Y),J--;for(;k--;){if(ie===Y||Y!==null&&ie===Y.alternate)break e;ie=Ts(ie),Y=Ts(Y)}ie=null}else ie=null;ot!==null&&L0(_t,rt,ot,ie,!1),se!==null&&He!==null&&L0(_t,He,se,ie,!0)}}t:{if(rt=nt?hr(nt):window,ot=rt.nodeName&&rt.nodeName.toLowerCase(),ot==="select"||ot==="input"&&rt.type==="file")var Xt=$m;else if(Zm(rt))if(Qm)Xt=_E;else{Xt=gE;var xe=mE}else ot=rt.nodeName,!ot||ot.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?nt&&Ku(nt.elementType)&&(Xt=$m):Xt=vE;if(Xt&&(Xt=Xt(n,nt))){Km(_t,Xt,s,mt);break t}xe&&xe(n,rt,nt),n==="focusout"&&nt&&rt.type==="number"&&nt.memoizedProps.value!=null&&Un(rt,"number",rt.value)}switch(xe=nt?hr(nt):window,n){case"focusin":(Zm(xe)||xe.contentEditable==="true")&&(es=xe,ff=nt,_o=null);break;case"focusout":_o=ff=es=null;break;case"mousedown":hf=!0;break;case"contextmenu":case"mouseup":case"dragend":hf=!1,sg(_t,s,mt);break;case"selectionchange":if(yE)break;case"keydown":case"keyup":sg(_t,s,mt)}var Kt;if(of)t:{switch(n){case"compositionstart":var re="onCompositionStart";break t;case"compositionend":re="onCompositionEnd";break t;case"compositionupdate":re="onCompositionUpdate";break t}re=void 0}else ts?qm(n,s)&&(re="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(re="onCompositionStart");re&&(Xm&&s.locale!=="ko"&&(ts||re!=="onCompositionStart"?re==="onCompositionEnd"&&ts&&(Kt=Bm()):(Ca=mt,ef="value"in Ca?Ca.value:Ca.textContent,ts=!0)),xe=Cc(nt,re),0<xe.length&&(re=new Vm(re,n,null,s,mt),_t.push({event:re,listeners:xe}),Kt?re.data=Kt:(Kt=Ym(s),Kt!==null&&(re.data=Kt)))),(Kt=uE?fE(n,s):hE(n,s))&&(re=Cc(nt,"onBeforeInput"),0<re.length&&(xe=new Vm("onBeforeInput","beforeinput",null,s,mt),_t.push({event:xe,listeners:re}),xe.data=Kt)),nM(_t,n,nt,s,mt)}D0(_t,a)})}function jo(n,a,s){return{instance:n,listener:a,currentTarget:s}}function Cc(n,a){for(var s=a+"Capture",c=[];n!==null;){var h=n,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=co(n,s),h!=null&&c.unshift(jo(n,h,m)),h=co(n,a),h!=null&&c.push(jo(n,h,m))),n.tag===3)return c;n=n.return}return[]}function Ts(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function L0(n,a,s,c,h){for(var m=a._reactName,T=[];s!==null&&s!==c;){var w=s,B=w.alternate,nt=w.stateNode;if(w=w.tag,B!==null&&B===c)break;w!==5&&w!==26&&w!==27||nt===null||(B=nt,h?(nt=co(s,m),nt!=null&&T.unshift(jo(s,nt,B))):h||(nt=co(s,m),nt!=null&&T.push(jo(s,nt,B)))),s=s.return}T.length!==0&&n.push({event:a,listeners:T})}var sM=/\r\n?/g,oM=/\u0000|\uFFFD/g;function N0(n){return(typeof n=="string"?n:""+n).replace(sM,`
`).replace(oM,"")}function O0(n,a){return a=N0(a),N0(n)===a}function Dc(){}function Be(n,a,s,c,h,m){switch(s){case"children":typeof c=="string"?a==="body"||a==="textarea"&&c===""||Hn(n,c):(typeof c=="number"||typeof c=="bigint")&&a!=="body"&&Hn(n,""+c);break;case"className":Gt(n,"class",c);break;case"tabIndex":Gt(n,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Gt(n,s,c);break;case"style":Im(n,c,m);break;case"data":if(a!=="object"){Gt(n,"data",c);break}case"src":case"href":if(c===""&&(a!=="a"||s!=="href")){n.removeAttribute(s);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(s);break}c=zl(""+c),n.setAttribute(s,c);break;case"action":case"formAction":if(typeof c=="function"){n.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(a!=="input"&&Be(n,a,"name",h.name,h,null),Be(n,a,"formEncType",h.formEncType,h,null),Be(n,a,"formMethod",h.formMethod,h,null),Be(n,a,"formTarget",h.formTarget,h,null)):(Be(n,a,"encType",h.encType,h,null),Be(n,a,"method",h.method,h,null),Be(n,a,"target",h.target,h,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(s);break}c=zl(""+c),n.setAttribute(s,c);break;case"onClick":c!=null&&(n.onclick=Dc);break;case"onScroll":c!=null&&Ee("scroll",n);break;case"onScrollEnd":c!=null&&Ee("scrollend",n);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(s=c.__html,s!=null){if(h.children!=null)throw Error(r(60));n.innerHTML=s}}break;case"multiple":n.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":n.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){n.removeAttribute("xlink:href");break}s=zl(""+c),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,""+c):n.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,""):n.removeAttribute(s);break;case"capture":case"download":c===!0?n.setAttribute(s,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,c):n.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?n.setAttribute(s,c):n.removeAttribute(s);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?n.removeAttribute(s):n.setAttribute(s,c);break;case"popover":Ee("beforetoggle",n),Ee("toggle",n),Ot(n,"popover",c);break;case"xlinkActuate":It(n,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":It(n,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":It(n,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":It(n,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":It(n,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":It(n,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":It(n,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":It(n,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":It(n,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Ot(n,"is",c);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=FS.get(s)||s,Ot(n,s,c))}}function Ph(n,a,s,c,h,m){switch(s){case"style":Im(n,c,m);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(s=c.__html,s!=null){if(h.children!=null)throw Error(r(60));n.innerHTML=s}}break;case"children":typeof c=="string"?Hn(n,c):(typeof c=="number"||typeof c=="bigint")&&Hn(n,""+c);break;case"onScroll":c!=null&&Ee("scroll",n);break;case"onScrollEnd":c!=null&&Ee("scrollend",n);break;case"onClick":c!=null&&(n.onclick=Dc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Fl.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),a=s.slice(2,h?s.length-7:void 0),m=n[tn]||null,m=m!=null?m[s]:null,typeof m=="function"&&n.removeEventListener(a,m,h),typeof c=="function")){typeof m!="function"&&m!==null&&(s in n?n[s]=null:n.hasAttribute(s)&&n.removeAttribute(s)),n.addEventListener(a,c,h);break t}s in n?n[s]=c:c===!0?n.setAttribute(s,""):Ot(n,s,c)}}}function Rn(n,a,s){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",n),Ee("load",n);var c=!1,h=!1,m;for(m in s)if(s.hasOwnProperty(m)){var T=s[m];if(T!=null)switch(m){case"src":c=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:Be(n,a,m,T,s,null)}}h&&Be(n,a,"srcSet",s.srcSet,s,null),c&&Be(n,a,"src",s.src,s,null);return;case"input":Ee("invalid",n);var w=m=T=h=null,B=null,nt=null;for(c in s)if(s.hasOwnProperty(c)){var mt=s[c];if(mt!=null)switch(c){case"name":h=mt;break;case"type":T=mt;break;case"checked":B=mt;break;case"defaultChecked":nt=mt;break;case"value":m=mt;break;case"defaultValue":w=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(r(137,a));break;default:Be(n,a,c,mt,s,null)}}Fn(n,m,w,B,nt,T,h,!1),ye(n);return;case"select":Ee("invalid",n),c=T=m=null;for(h in s)if(s.hasOwnProperty(h)&&(w=s[h],w!=null))switch(h){case"value":m=w;break;case"defaultValue":T=w;break;case"multiple":c=w;default:Be(n,a,h,w,s,null)}a=m,s=T,n.multiple=!!c,a!=null?en(n,!!c,a,!1):s!=null&&en(n,!!c,s,!0);return;case"textarea":Ee("invalid",n),m=h=c=null;for(T in s)if(s.hasOwnProperty(T)&&(w=s[T],w!=null))switch(T){case"value":c=w;break;case"defaultValue":h=w;break;case"children":m=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(91));break;default:Be(n,a,T,w,s,null)}$r(n,c,h,m),ye(n);return;case"option":for(B in s)if(s.hasOwnProperty(B)&&(c=s[B],c!=null))switch(B){case"selected":n.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:Be(n,a,B,c,s,null)}return;case"dialog":Ee("beforetoggle",n),Ee("toggle",n),Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":Ee("load",n);break;case"video":case"audio":for(c=0;c<Wo.length;c++)Ee(Wo[c],n);break;case"image":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"embed":case"source":case"link":Ee("error",n),Ee("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in s)if(s.hasOwnProperty(nt)&&(c=s[nt],c!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:Be(n,a,nt,c,s,null)}return;default:if(Ku(a)){for(mt in s)s.hasOwnProperty(mt)&&(c=s[mt],c!==void 0&&Ph(n,a,mt,c,s,void 0));return}}for(w in s)s.hasOwnProperty(w)&&(c=s[w],c!=null&&Be(n,a,w,c,s,null))}function lM(n,a,s,c){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,T=null,w=null,B=null,nt=null,mt=null;for(ot in s){var _t=s[ot];if(s.hasOwnProperty(ot)&&_t!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":B=_t;default:c.hasOwnProperty(ot)||Be(n,a,ot,null,c,_t)}}for(var rt in c){var ot=c[rt];if(_t=s[rt],c.hasOwnProperty(rt)&&(ot!=null||_t!=null))switch(rt){case"type":m=ot;break;case"name":h=ot;break;case"checked":nt=ot;break;case"defaultChecked":mt=ot;break;case"value":T=ot;break;case"defaultValue":w=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,a));break;default:ot!==_t&&Be(n,a,rt,ot,c,_t)}}Ve(n,T,w,B,nt,mt,m,h);return;case"select":ot=T=w=rt=null;for(m in s)if(B=s[m],s.hasOwnProperty(m)&&B!=null)switch(m){case"value":break;case"multiple":ot=B;default:c.hasOwnProperty(m)||Be(n,a,m,null,c,B)}for(h in c)if(m=c[h],B=s[h],c.hasOwnProperty(h)&&(m!=null||B!=null))switch(h){case"value":rt=m;break;case"defaultValue":w=m;break;case"multiple":T=m;default:m!==B&&Be(n,a,h,m,c,B)}a=w,s=T,c=ot,rt!=null?en(n,!!s,rt,!1):!!c!=!!s&&(a!=null?en(n,!!s,a,!0):en(n,!!s,s?[]:"",!1));return;case"textarea":ot=rt=null;for(w in s)if(h=s[w],s.hasOwnProperty(w)&&h!=null&&!c.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Be(n,a,w,null,c,h)}for(T in c)if(h=c[T],m=s[T],c.hasOwnProperty(T)&&(h!=null||m!=null))switch(T){case"value":rt=h;break;case"defaultValue":ot=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(r(91));break;default:h!==m&&Be(n,a,T,h,c,m)}Tn(n,rt,ot);return;case"option":for(var se in s)if(rt=s[se],s.hasOwnProperty(se)&&rt!=null&&!c.hasOwnProperty(se))switch(se){case"selected":n.selected=!1;break;default:Be(n,a,se,null,c,rt)}for(B in c)if(rt=c[B],ot=s[B],c.hasOwnProperty(B)&&rt!==ot&&(rt!=null||ot!=null))switch(B){case"selected":n.selected=rt&&typeof rt!="function"&&typeof rt!="symbol";break;default:Be(n,a,B,rt,c,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in s)rt=s[ie],s.hasOwnProperty(ie)&&rt!=null&&!c.hasOwnProperty(ie)&&Be(n,a,ie,null,c,rt);for(nt in c)if(rt=c[nt],ot=s[nt],c.hasOwnProperty(nt)&&rt!==ot&&(rt!=null||ot!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(r(137,a));break;default:Be(n,a,nt,rt,c,ot)}return;default:if(Ku(a)){for(var He in s)rt=s[He],s.hasOwnProperty(He)&&rt!==void 0&&!c.hasOwnProperty(He)&&Ph(n,a,He,void 0,c,rt);for(mt in c)rt=c[mt],ot=s[mt],!c.hasOwnProperty(mt)||rt===ot||rt===void 0&&ot===void 0||Ph(n,a,mt,rt,c,ot);return}}for(var Y in s)rt=s[Y],s.hasOwnProperty(Y)&&rt!=null&&!c.hasOwnProperty(Y)&&Be(n,a,Y,null,c,rt);for(_t in c)rt=c[_t],ot=s[_t],!c.hasOwnProperty(_t)||rt===ot||rt==null&&ot==null||Be(n,a,_t,rt,c,ot)}var Ih=null,Fh=null;function Uc(n){return n.nodeType===9?n:n.ownerDocument}function P0(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function I0(n,a){if(n===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&a==="foreignObject"?0:n}function zh(n,a){return n==="textarea"||n==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Bh=null;function cM(){var n=window.event;return n&&n.type==="popstate"?n===Bh?!1:(Bh=n,!0):(Bh=null,!1)}var F0=typeof setTimeout=="function"?setTimeout:void 0,uM=typeof clearTimeout=="function"?clearTimeout:void 0,z0=typeof Promise=="function"?Promise:void 0,fM=typeof queueMicrotask=="function"?queueMicrotask:typeof z0<"u"?function(n){return z0.resolve(null).then(n).catch(hM)}:F0;function hM(n){setTimeout(function(){throw n})}function Wa(n){return n==="head"}function B0(n,a){var s=a,c=0,h=0;do{var m=s.nextSibling;if(n.removeChild(s),m&&m.nodeType===8)if(s=m.data,s==="/$"){if(0<c&&8>c){s=c;var T=n.ownerDocument;if(s&1&&qo(T.documentElement),s&2&&qo(T.body),s&4)for(s=T.head,qo(s),T=s.firstChild;T;){var w=T.nextSibling,B=T.nodeName;T[Ni]||B==="SCRIPT"||B==="STYLE"||B==="LINK"&&T.rel.toLowerCase()==="stylesheet"||s.removeChild(T),T=w}}if(h===0){n.removeChild(m),el(a);return}h--}else s==="$"||s==="$?"||s==="$!"?h++:c=s.charCodeAt(0)-48;else c=0;s=m}while(s);el(a)}function Hh(n){var a=n.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var s=a;switch(a=a.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Hh(s),Kr(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}n.removeChild(s)}}function dM(n,a,s,c){for(;n.nodeType===1;){var h=s;if(n.nodeName.toLowerCase()!==a.toLowerCase()){if(!c&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(c){if(!n[Ni])switch(a){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(m=n.getAttribute("rel"),m==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(m!==h.rel||n.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||n.getAttribute("title")!==(h.title==null?null:h.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(m=n.getAttribute("src"),(m!==(h.src==null?null:h.src)||n.getAttribute("type")!==(h.type==null?null:h.type)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(a==="input"&&n.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&n.getAttribute("name")===m)return n}else return n;if(n=Si(n.nextSibling),n===null)break}return null}function pM(n,a,s){if(a==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=Si(n.nextSibling),n===null))return null;return n}function Gh(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function mM(n,a){var s=n.ownerDocument;if(n.data!=="$?"||s.readyState==="complete")a();else{var c=function(){a(),s.removeEventListener("DOMContentLoaded",c)};s.addEventListener("DOMContentLoaded",c),n._reactRetry=c}}function Si(n){for(;n!=null;n=n.nextSibling){var a=n.nodeType;if(a===1||a===3)break;if(a===8){if(a=n.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return n}var Vh=null;function H0(n){n=n.previousSibling;for(var a=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"){if(a===0)return n;a--}else s==="/$"&&a++}n=n.previousSibling}return null}function G0(n,a,s){switch(a=Uc(s),n){case"html":if(n=a.documentElement,!n)throw Error(r(452));return n;case"head":if(n=a.head,!n)throw Error(r(453));return n;case"body":if(n=a.body,!n)throw Error(r(454));return n;default:throw Error(r(451))}}function qo(n){for(var a=n.attributes;a.length;)n.removeAttributeNode(a[0]);Kr(n)}var hi=new Map,V0=new Set;function Lc(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var sa=$.d;$.d={f:gM,r:vM,D:_M,C:xM,L:yM,m:SM,X:MM,S:EM,M:bM};function gM(){var n=sa.f(),a=Mc();return n||a}function vM(n){var a=wa(n);a!==null&&a.tag===5&&a.type==="form"?lv(a):sa.r(n)}var As=typeof document>"u"?null:document;function k0(n,a,s){var c=As;if(c&&typeof a=="string"&&a){var h=yn(a);h='link[rel="'+n+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),V0.has(h)||(V0.add(h),n={rel:n,crossOrigin:s,href:a},c.querySelector(h)===null&&(a=c.createElement("link"),Rn(a,"link",n),ln(a),c.head.appendChild(a)))}}function _M(n){sa.D(n),k0("dns-prefetch",n,null)}function xM(n,a){sa.C(n,a),k0("preconnect",n,a)}function yM(n,a,s){sa.L(n,a,s);var c=As;if(c&&n&&a){var h='link[rel="preload"][as="'+yn(a)+'"]';a==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+yn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+yn(s.imageSizes)+'"]')):h+='[href="'+yn(n)+'"]';var m=h;switch(a){case"style":m=ws(n);break;case"script":m=Rs(n)}hi.has(m)||(n=g({rel:"preload",href:a==="image"&&s&&s.imageSrcSet?void 0:n,as:a},s),hi.set(m,n),c.querySelector(h)!==null||a==="style"&&c.querySelector(Yo(m))||a==="script"&&c.querySelector(Zo(m))||(a=c.createElement("link"),Rn(a,"link",n),ln(a),c.head.appendChild(a)))}}function SM(n,a){sa.m(n,a);var s=As;if(s&&n){var c=a&&typeof a.as=="string"?a.as:"script",h='link[rel="modulepreload"][as="'+yn(c)+'"][href="'+yn(n)+'"]',m=h;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Rs(n)}if(!hi.has(m)&&(n=g({rel:"modulepreload",href:n},a),hi.set(m,n),s.querySelector(h)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Zo(m)))return}c=s.createElement("link"),Rn(c,"link",n),ln(c),s.head.appendChild(c)}}}function EM(n,a,s){sa.S(n,a,s);var c=As;if(c&&n){var h=Ra(c).hoistableStyles,m=ws(n);a=a||"default";var T=h.get(m);if(!T){var w={loading:0,preload:null};if(T=c.querySelector(Yo(m)))w.loading=5;else{n=g({rel:"stylesheet",href:n,"data-precedence":a},s),(s=hi.get(m))&&kh(n,s);var B=T=c.createElement("link");ln(B),Rn(B,"link",n),B._p=new Promise(function(nt,mt){B.onload=nt,B.onerror=mt}),B.addEventListener("load",function(){w.loading|=1}),B.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Nc(T,a,c)}T={type:"stylesheet",instance:T,count:1,state:w},h.set(m,T)}}}function MM(n,a){sa.X(n,a);var s=As;if(s&&n){var c=Ra(s).hoistableScripts,h=Rs(n),m=c.get(h);m||(m=s.querySelector(Zo(h)),m||(n=g({src:n,async:!0},a),(a=hi.get(h))&&Xh(n,a),m=s.createElement("script"),ln(m),Rn(m,"link",n),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(h,m))}}function bM(n,a){sa.M(n,a);var s=As;if(s&&n){var c=Ra(s).hoistableScripts,h=Rs(n),m=c.get(h);m||(m=s.querySelector(Zo(h)),m||(n=g({src:n,async:!0,type:"module"},a),(a=hi.get(h))&&Xh(n,a),m=s.createElement("script"),ln(m),Rn(m,"link",n),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(h,m))}}function X0(n,a,s,c){var h=(h=it.current)?Lc(h):null;if(!h)throw Error(r(446));switch(n){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(a=ws(s.href),s=Ra(h).hoistableStyles,c=s.get(a),c||(c={type:"style",instance:null,count:0,state:null},s.set(a,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){n=ws(s.href);var m=Ra(h).hoistableStyles,T=m.get(n);if(T||(h=h.ownerDocument||h,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(n,T),(m=h.querySelector(Yo(n)))&&!m._p&&(T.instance=m,T.state.loading=5),hi.has(n)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},hi.set(n,s),m||TM(h,n,s,T.state))),a&&c===null)throw Error(r(528,""));return T}if(a&&c!==null)throw Error(r(529,""));return null;case"script":return a=s.async,s=s.src,typeof s=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Rs(s),s=Ra(h).hoistableScripts,c=s.get(a),c||(c={type:"script",instance:null,count:0,state:null},s.set(a,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,n))}}function ws(n){return'href="'+yn(n)+'"'}function Yo(n){return'link[rel="stylesheet"]['+n+"]"}function W0(n){return g({},n,{"data-precedence":n.precedence,precedence:null})}function TM(n,a,s,c){n.querySelector('link[rel="preload"][as="style"]['+a+"]")?c.loading=1:(a=n.createElement("link"),c.preload=a,a.addEventListener("load",function(){return c.loading|=1}),a.addEventListener("error",function(){return c.loading|=2}),Rn(a,"link",s),ln(a),n.head.appendChild(a))}function Rs(n){return'[src="'+yn(n)+'"]'}function Zo(n){return"script[async]"+n}function j0(n,a,s){if(a.count++,a.instance===null)switch(a.type){case"style":var c=n.querySelector('style[data-href~="'+yn(s.href)+'"]');if(c)return a.instance=c,ln(c),c;var h=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return c=(n.ownerDocument||n).createElement("style"),ln(c),Rn(c,"style",h),Nc(c,s.precedence,n),a.instance=c;case"stylesheet":h=ws(s.href);var m=n.querySelector(Yo(h));if(m)return a.state.loading|=4,a.instance=m,ln(m),m;c=W0(s),(h=hi.get(h))&&kh(c,h),m=(n.ownerDocument||n).createElement("link"),ln(m);var T=m;return T._p=new Promise(function(w,B){T.onload=w,T.onerror=B}),Rn(m,"link",c),a.state.loading|=4,Nc(m,s.precedence,n),a.instance=m;case"script":return m=Rs(s.src),(h=n.querySelector(Zo(m)))?(a.instance=h,ln(h),h):(c=s,(h=hi.get(m))&&(c=g({},s),Xh(c,h)),n=n.ownerDocument||n,h=n.createElement("script"),ln(h),Rn(h,"link",c),n.head.appendChild(h),a.instance=h);case"void":return null;default:throw Error(r(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(c=a.instance,a.state.loading|=4,Nc(c,s.precedence,n));return a.instance}function Nc(n,a,s){for(var c=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=c.length?c[c.length-1]:null,m=h,T=0;T<c.length;T++){var w=c[T];if(w.dataset.precedence===a)m=w;else if(m!==h)break}m?m.parentNode.insertBefore(n,m.nextSibling):(a=s.nodeType===9?s.head:s,a.insertBefore(n,a.firstChild))}function kh(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.title==null&&(n.title=a.title)}function Xh(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.integrity==null&&(n.integrity=a.integrity)}var Oc=null;function q0(n,a,s){if(Oc===null){var c=new Map,h=Oc=new Map;h.set(s,c)}else h=Oc,c=h.get(s),c||(c=new Map,h.set(s,c));if(c.has(n))return c;for(c.set(n,null),s=s.getElementsByTagName(n),h=0;h<s.length;h++){var m=s[h];if(!(m[Ni]||m[mn]||n==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var T=m.getAttribute(a)||"";T=n+T;var w=c.get(T);w?w.push(m):c.set(T,[m])}}return c}function Y0(n,a,s){n=n.ownerDocument||n,n.head.insertBefore(s,a==="title"?n.querySelector("head > title"):null)}function AM(n,a,s){if(s===1||a.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return n=a.disabled,typeof a.precedence=="string"&&n==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Z0(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var Ko=null;function wM(){}function RM(n,a,s){if(Ko===null)throw Error(r(475));var c=Ko;if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var h=ws(s.href),m=n.querySelector(Yo(h));if(m){n=m._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(c.count++,c=Pc.bind(c),n.then(c,c)),a.state.loading|=4,a.instance=m,ln(m);return}m=n.ownerDocument||n,s=W0(s),(h=hi.get(h))&&kh(s,h),m=m.createElement("link"),ln(m);var T=m;T._p=new Promise(function(w,B){T.onload=w,T.onerror=B}),Rn(m,"link",s),a.instance=m}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(c.count++,a=Pc.bind(c),n.addEventListener("load",a),n.addEventListener("error",a))}}function CM(){if(Ko===null)throw Error(r(475));var n=Ko;return n.stylesheets&&n.count===0&&Wh(n,n.stylesheets),0<n.count?function(a){var s=setTimeout(function(){if(n.stylesheets&&Wh(n,n.stylesheets),n.unsuspend){var c=n.unsuspend;n.unsuspend=null,c()}},6e4);return n.unsuspend=a,function(){n.unsuspend=null,clearTimeout(s)}}:null}function Pc(){if(this.count--,this.count===0){if(this.stylesheets)Wh(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Ic=null;function Wh(n,a){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Ic=new Map,a.forEach(DM,n),Ic=null,Pc.call(n))}function DM(n,a){if(!(a.state.loading&4)){var s=Ic.get(n);if(s)var c=s.get(null);else{s=new Map,Ic.set(n,s);for(var h=n.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var T=h[m];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(s.set(T.dataset.precedence,T),c=T)}c&&s.set(null,c)}h=a.instance,T=h.getAttribute("data-precedence"),m=s.get(T)||c,m===c&&s.set(null,h),s.set(T,h),this.count++,c=Pc.bind(this),h.addEventListener("load",c),h.addEventListener("error",c),m?m.parentNode.insertBefore(h,m.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(h,n.firstChild)),a.state.loading|=4}}var $o={$$typeof:D,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function UM(n,a,s,c,h,m,T,w){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ut(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ut(0),this.hiddenUpdates=Ut(null),this.identifierPrefix=c,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function K0(n,a,s,c,h,m,T,w,B,nt,mt,_t){return n=new UM(n,a,s,T,w,B,nt,_t),a=1,m===!0&&(a|=24),m=Kn(3,null,null,a),n.current=m,m.stateNode=n,a=Af(),a.refCount++,n.pooledCache=a,a.refCount++,m.memoizedState={element:c,isDehydrated:s,cache:a},Df(m),n}function $0(n){return n?(n=rs,n):rs}function Q0(n,a,s,c,h,m){h=$0(h),c.context===null?c.context=h:c.pendingContext=h,c=La(a),c.payload={element:s},m=m===void 0?null:m,m!==null&&(c.callback=m),s=Na(n,c,a),s!==null&&(ei(s,n,a),wo(s,n,a))}function J0(n,a){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<a?s:a}}function jh(n,a){J0(n,a),(n=n.alternate)&&J0(n,a)}function t_(n){if(n.tag===13){var a=as(n,67108864);a!==null&&ei(a,n,67108864),jh(n,67108864)}}var Fc=!0;function LM(n,a,s,c){var h=F.T;F.T=null;var m=$.p;try{$.p=2,qh(n,a,s,c)}finally{$.p=m,F.T=h}}function NM(n,a,s,c){var h=F.T;F.T=null;var m=$.p;try{$.p=8,qh(n,a,s,c)}finally{$.p=m,F.T=h}}function qh(n,a,s,c){if(Fc){var h=Yh(c);if(h===null)Oh(n,a,c,zc,s),n_(n,c);else if(PM(h,n,a,s,c))c.stopPropagation();else if(n_(n,c),a&4&&-1<OM.indexOf(n)){for(;h!==null;){var m=wa(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var T=Qt(m.pendingLanes);if(T!==0){var w=m;for(w.pendingLanes|=2,w.entangledLanes|=2;T;){var B=1<<31-Dt(T);w.entanglements[1]|=B,T&=~B}zi(m),(Pe&6)===0&&(Sc=zt()+500,Xo(0))}}break;case 13:w=as(m,2),w!==null&&ei(w,m,2),Mc(),jh(m,2)}if(m=Yh(c),m===null&&Oh(n,a,c,zc,s),m===h)break;h=m}h!==null&&c.stopPropagation()}else Oh(n,a,c,null,s)}}function Yh(n){return n=Qu(n),Zh(n)}var zc=null;function Zh(n){if(zc=null,n=ji(n),n!==null){var a=l(n);if(a===null)n=null;else{var s=a.tag;if(s===13){if(n=u(a),n!==null)return n;n=null}else if(s===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;n=null}else a!==n&&(n=null)}}return zc=n,null}function e_(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Te()){case kt:return 2;case ce:return 8;case Xe:case We:return 32;case O:return 268435456;default:return 32}default:return 32}}var Kh=!1,ja=null,qa=null,Ya=null,Qo=new Map,Jo=new Map,Za=[],OM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function n_(n,a){switch(n){case"focusin":case"focusout":ja=null;break;case"dragenter":case"dragleave":qa=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":Qo.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jo.delete(a.pointerId)}}function tl(n,a,s,c,h,m){return n===null||n.nativeEvent!==m?(n={blockedOn:a,domEventName:s,eventSystemFlags:c,nativeEvent:m,targetContainers:[h]},a!==null&&(a=wa(a),a!==null&&t_(a)),n):(n.eventSystemFlags|=c,a=n.targetContainers,h!==null&&a.indexOf(h)===-1&&a.push(h),n)}function PM(n,a,s,c,h){switch(a){case"focusin":return ja=tl(ja,n,a,s,c,h),!0;case"dragenter":return qa=tl(qa,n,a,s,c,h),!0;case"mouseover":return Ya=tl(Ya,n,a,s,c,h),!0;case"pointerover":var m=h.pointerId;return Qo.set(m,tl(Qo.get(m)||null,n,a,s,c,h)),!0;case"gotpointercapture":return m=h.pointerId,Jo.set(m,tl(Jo.get(m)||null,n,a,s,c,h)),!0}return!1}function i_(n){var a=ji(n.target);if(a!==null){var s=l(a);if(s!==null){if(a=s.tag,a===13){if(a=u(s),a!==null){n.blockedOn=a,vi(n.priority,function(){if(s.tag===13){var c=ti();c=oe(c);var h=as(s,c);h!==null&&ei(h,s,c),jh(s,c)}});return}}else if(a===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Bc(n){if(n.blockedOn!==null)return!1;for(var a=n.targetContainers;0<a.length;){var s=Yh(n.nativeEvent);if(s===null){s=n.nativeEvent;var c=new s.constructor(s.type,s);$u=c,s.target.dispatchEvent(c),$u=null}else return a=wa(s),a!==null&&t_(a),n.blockedOn=s,!1;a.shift()}return!0}function a_(n,a,s){Bc(n)&&s.delete(a)}function IM(){Kh=!1,ja!==null&&Bc(ja)&&(ja=null),qa!==null&&Bc(qa)&&(qa=null),Ya!==null&&Bc(Ya)&&(Ya=null),Qo.forEach(a_),Jo.forEach(a_)}function Hc(n,a){n.blockedOn===a&&(n.blockedOn=null,Kh||(Kh=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,IM)))}var Gc=null;function r_(n){Gc!==n&&(Gc=n,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Gc===n&&(Gc=null);for(var a=0;a<n.length;a+=3){var s=n[a],c=n[a+1],h=n[a+2];if(typeof c!="function"){if(Zh(c||s)===null)continue;break}var m=wa(s);m!==null&&(n.splice(a,3),a-=3,Zf(m,{pending:!0,data:h,method:s.method,action:c},c,h))}}))}function el(n){function a(B){return Hc(B,n)}ja!==null&&Hc(ja,n),qa!==null&&Hc(qa,n),Ya!==null&&Hc(Ya,n),Qo.forEach(a),Jo.forEach(a);for(var s=0;s<Za.length;s++){var c=Za[s];c.blockedOn===n&&(c.blockedOn=null)}for(;0<Za.length&&(s=Za[0],s.blockedOn===null);)i_(s),s.blockedOn===null&&Za.shift();if(s=(n.ownerDocument||n).$$reactFormReplay,s!=null)for(c=0;c<s.length;c+=3){var h=s[c],m=s[c+1],T=h[tn]||null;if(typeof m=="function")T||r_(s);else if(T){var w=null;if(m&&m.hasAttribute("formAction")){if(h=m,T=m[tn]||null)w=T.formAction;else if(Zh(h)!==null)continue}else w=T.action;typeof w=="function"?s[c+1]=w:(s.splice(c,3),c-=3),r_(s)}}}function $h(n){this._internalRoot=n}Vc.prototype.render=$h.prototype.render=function(n){var a=this._internalRoot;if(a===null)throw Error(r(409));var s=a.current,c=ti();Q0(s,c,n,a,null,null)},Vc.prototype.unmount=$h.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var a=n.containerInfo;Q0(n.current,2,null,n,null,null),Mc(),a[Li]=null}};function Vc(n){this._internalRoot=n}Vc.prototype.unstable_scheduleHydration=function(n){if(n){var a=we();n={blockedOn:null,target:n,priority:a};for(var s=0;s<Za.length&&a!==0&&a<Za[s].priority;s++);Za.splice(s,0,n),s===0&&i_(n)}};var s_=t.version;if(s_!=="19.1.1")throw Error(r(527,s_,"19.1.1"));$.findDOMNode=function(n){var a=n._reactInternals;if(a===void 0)throw typeof n.render=="function"?Error(r(188)):(n=Object.keys(n).join(","),Error(r(268,n)));return n=d(a),n=n!==null?p(n):null,n=n===null?null:n.stateNode,n};var FM={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kc.isDisabled&&kc.supportsFiber)try{Q=kc.inject(FM),ft=kc}catch{}}return il.createRoot=function(n,a){if(!o(n))throw Error(r(299));var s=!1,c="",h=Ev,m=Mv,T=bv,w=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(w=a.unstable_transitionCallbacks)),a=K0(n,1,!1,null,null,s,c,h,m,T,w,null),n[Li]=a.current,Nh(n),new $h(a)},il.hydrateRoot=function(n,a,s){if(!o(n))throw Error(r(299));var c=!1,h="",m=Ev,T=Mv,w=bv,B=null,nt=null;return s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(T=s.onCaughtError),s.onRecoverableError!==void 0&&(w=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(B=s.unstable_transitionCallbacks),s.formState!==void 0&&(nt=s.formState)),a=K0(n,1,!0,a,s??null,c,h,m,T,w,B,nt),a.context=$0(null),s=a.current,c=ti(),c=oe(c),h=La(c),h.callback=null,Na(s,h,c),s=c,a.current.lanes=s,Bt(a,s),zi(a),n[Li]=a.current,Nh(n),new Vc(a)},il.version="19.1.1",il}var g_;function qM(){if(g_)return td.exports;g_=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),td.exports=jM(),td.exports}var YM=qM();const ZM=Sy(YM);/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var v_="popstate";function KM(i={}){function t(r,o){let{pathname:l,search:u,hash:f}=r.location;return Zd("",{pathname:l,search:u,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function e(r,o){return typeof o=="string"?o:vl(o)}return QM(t,e,null,i)}function Qe(i,t){if(i===!1||i===null||typeof i>"u")throw new Error(t)}function Xi(i,t){if(!i){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function $M(){return Math.random().toString(36).substring(2,10)}function __(i,t){return{usr:i.state,key:i.key,idx:t}}function Zd(i,t,e=null,r){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof t=="string"?no(t):t,state:e,key:t&&t.key||r||$M()}}function vl({pathname:i="/",search:t="",hash:e=""}){return t&&t!=="?"&&(i+=t.charAt(0)==="?"?t:"?"+t),e&&e!=="#"&&(i+=e.charAt(0)==="#"?e:"#"+e),i}function no(i){let t={};if(i){let e=i.indexOf("#");e>=0&&(t.hash=i.substring(e),i=i.substring(0,e));let r=i.indexOf("?");r>=0&&(t.search=i.substring(r),i=i.substring(0,r)),i&&(t.pathname=i)}return t}function QM(i,t,e,r={}){let{window:o=document.defaultView,v5Compat:l=!1}=r,u=o.history,f="POP",d=null,p=g();p==null&&(p=0,u.replaceState({...u.state,idx:p},""));function g(){return(u.state||{idx:null}).idx}function v(){f="POP";let S=g(),x=S==null?null:S-p;p=S,d&&d({action:f,location:b.location,delta:x})}function _(S,x){f="PUSH";let U=Zd(b.location,S,x);p=g()+1;let D=__(U,p),A=b.createHref(U);try{u.pushState(D,"",A)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;o.location.assign(A)}l&&d&&d({action:f,location:b.location,delta:1})}function y(S,x){f="REPLACE";let U=Zd(b.location,S,x);p=g();let D=__(U,p),A=b.createHref(U);u.replaceState(D,"",A),l&&d&&d({action:f,location:b.location,delta:0})}function M(S){return JM(S)}let b={get action(){return f},get location(){return i(o,u)},listen(S){if(d)throw new Error("A history only accepts one active listener");return o.addEventListener(v_,v),d=S,()=>{o.removeEventListener(v_,v),d=null}},createHref(S){return t(o,S)},createURL:M,encodeLocation(S){let x=M(S);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:_,replace:y,go(S){return u.go(S)}};return b}function JM(i,t=!1){let e="http://localhost";typeof window<"u"&&(e=window.location.origin!=="null"?window.location.origin:window.location.href),Qe(e,"No window.location.(origin|href) available to create URL");let r=typeof i=="string"?i:vl(i);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=e+r),new URL(r,e)}function Ey(i,t,e="/"){return tb(i,t,e,!1)}function tb(i,t,e,r){let o=typeof t=="string"?no(t):t,l=xa(o.pathname||"/",e);if(l==null)return null;let u=My(i);eb(u);let f=null;for(let d=0;f==null&&d<u.length;++d){let p=hb(l);f=ub(u[d],p,r)}return f}function My(i,t=[],e=[],r="",o=!1){let l=(u,f,d=o,p)=>{let g={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(r)&&d)return;Qe(g.relativePath.startsWith(r),`Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(r.length)}let v=ga([r,g.relativePath]),_=e.concat(g);u.children&&u.children.length>0&&(Qe(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),My(u.children,t,_,v,d)),!(u.path==null&&!u.index)&&t.push({path:v,score:lb(v,u.index),routesMeta:_})};return i.forEach((u,f)=>{if(u.path===""||!u.path?.includes("?"))l(u,f);else for(let d of by(u.path))l(u,f,!0,d)}),t}function by(i){let t=i.split("/");if(t.length===0)return[];let[e,...r]=t,o=e.endsWith("?"),l=e.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let u=by(r.join("/")),f=[];return f.push(...u.map(d=>d===""?l:[l,d].join("/"))),o&&f.push(...u),f.map(d=>i.startsWith("/")&&d===""?"/":d)}function eb(i){i.sort((t,e)=>t.score!==e.score?e.score-t.score:cb(t.routesMeta.map(r=>r.childrenIndex),e.routesMeta.map(r=>r.childrenIndex)))}var nb=/^:[\w-]+$/,ib=3,ab=2,rb=1,sb=10,ob=-2,x_=i=>i==="*";function lb(i,t){let e=i.split("/"),r=e.length;return e.some(x_)&&(r+=ob),t&&(r+=ab),e.filter(o=>!x_(o)).reduce((o,l)=>o+(nb.test(l)?ib:l===""?rb:sb),r)}function cb(i,t){return i.length===t.length&&i.slice(0,-1).every((r,o)=>r===t[o])?i[i.length-1]-t[t.length-1]:0}function ub(i,t,e=!1){let{routesMeta:r}=i,o={},l="/",u=[];for(let f=0;f<r.length;++f){let d=r[f],p=f===r.length-1,g=l==="/"?t:t.slice(l.length)||"/",v=Cu({path:d.relativePath,caseSensitive:d.caseSensitive,end:p},g),_=d.route;if(!v&&p&&e&&!r[r.length-1].route.index&&(v=Cu({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},g)),!v)return null;Object.assign(o,v.params),u.push({params:o,pathname:ga([l,v.pathname]),pathnameBase:gb(ga([l,v.pathnameBase])),route:_}),v.pathnameBase!=="/"&&(l=ga([l,v.pathnameBase]))}return u}function Cu(i,t){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[e,r]=fb(i.path,i.caseSensitive,i.end),o=t.match(e);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:r.reduce((p,{paramName:g,isOptional:v},_)=>{if(g==="*"){let M=f[_]||"";u=l.slice(0,l.length-M.length).replace(/(.)\/+$/,"$1")}const y=f[_];return v&&!y?p[g]=void 0:p[g]=(y||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:u,pattern:i}}function fb(i,t=!1,e=!0){Xi(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let r=[],o="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,d)=>(r.push({paramName:f,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(r.push({paramName:"*"}),o+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):e?o+="\\/*$":i!==""&&i!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function hb(i){try{return i.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Xi(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),i}}function xa(i,t){if(t==="/")return i;if(!i.toLowerCase().startsWith(t.toLowerCase()))return null;let e=t.endsWith("/")?t.length-1:t.length,r=i.charAt(e);return r&&r!=="/"?null:i.slice(e)||"/"}function db(i,t="/"){let{pathname:e,search:r="",hash:o=""}=typeof i=="string"?no(i):i;return{pathname:e?e.startsWith("/")?e:pb(e,t):t,search:vb(r),hash:_b(o)}}function pb(i,t){let e=t.replace(/\/+$/,"").split("/");return i.split("/").forEach(o=>{o===".."?e.length>1&&e.pop():o!=="."&&e.push(o)}),e.length>1?e.join("/"):"/"}function ad(i,t,e,r){return`Cannot include a '${i}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${e}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function mb(i){return i.filter((t,e)=>e===0||t.route.path&&t.route.path.length>0)}function Ty(i){let t=mb(i);return t.map((e,r)=>r===t.length-1?e.pathname:e.pathnameBase)}function Ay(i,t,e,r=!1){let o;typeof i=="string"?o=no(i):(o={...i},Qe(!o.pathname||!o.pathname.includes("?"),ad("?","pathname","search",o)),Qe(!o.pathname||!o.pathname.includes("#"),ad("#","pathname","hash",o)),Qe(!o.search||!o.search.includes("#"),ad("#","search","hash",o)));let l=i===""||o.pathname==="",u=l?"/":o.pathname,f;if(u==null)f=e;else{let v=t.length-1;if(!r&&u.startsWith("..")){let _=u.split("/");for(;_[0]==="..";)_.shift(),v-=1;o.pathname=_.join("/")}f=v>=0?t[v]:"/"}let d=db(o,f),p=u&&u!=="/"&&u.endsWith("/"),g=(l||u===".")&&e.endsWith("/");return!d.pathname.endsWith("/")&&(p||g)&&(d.pathname+="/"),d}var ga=i=>i.join("/").replace(/\/\/+/g,"/"),gb=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),vb=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,_b=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function xb(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var wy=["POST","PUT","PATCH","DELETE"];new Set(wy);var yb=["GET",...wy];new Set(yb);var io=pt.createContext(null);io.displayName="DataRouter";var Bu=pt.createContext(null);Bu.displayName="DataRouterState";pt.createContext(!1);var Ry=pt.createContext({isTransitioning:!1});Ry.displayName="ViewTransition";var Sb=pt.createContext(new Map);Sb.displayName="Fetchers";var Eb=pt.createContext(null);Eb.displayName="Await";var Wi=pt.createContext(null);Wi.displayName="Navigation";var bl=pt.createContext(null);bl.displayName="Location";var ba=pt.createContext({outlet:null,matches:[],isDataRoute:!1});ba.displayName="Route";var om=pt.createContext(null);om.displayName="RouteError";function Mb(i,{relative:t}={}){Qe(Tl(),"useHref() may be used only in the context of a <Router> component.");let{basename:e,navigator:r}=pt.useContext(Wi),{hash:o,pathname:l,search:u}=Al(i,{relative:t}),f=l;return e!=="/"&&(f=l==="/"?e:ga([e,l])),r.createHref({pathname:f,search:u,hash:o})}function Tl(){return pt.useContext(bl)!=null}function qr(){return Qe(Tl(),"useLocation() may be used only in the context of a <Router> component."),pt.useContext(bl).location}var Cy="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Dy(i){pt.useContext(Wi).static||pt.useLayoutEffect(i)}function bb(){let{isDataRoute:i}=pt.useContext(ba);return i?Fb():Tb()}function Tb(){Qe(Tl(),"useNavigate() may be used only in the context of a <Router> component.");let i=pt.useContext(io),{basename:t,navigator:e}=pt.useContext(Wi),{matches:r}=pt.useContext(ba),{pathname:o}=qr(),l=JSON.stringify(Ty(r)),u=pt.useRef(!1);return Dy(()=>{u.current=!0}),pt.useCallback((d,p={})=>{if(Xi(u.current,Cy),!u.current)return;if(typeof d=="number"){e.go(d);return}let g=Ay(d,JSON.parse(l),o,p.relative==="path");i==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:ga([t,g.pathname])),(p.replace?e.replace:e.push)(g,p.state,p)},[t,e,l,o,i])}pt.createContext(null);function Al(i,{relative:t}={}){let{matches:e}=pt.useContext(ba),{pathname:r}=qr(),o=JSON.stringify(Ty(e));return pt.useMemo(()=>Ay(i,JSON.parse(o),r,t==="path"),[i,o,r,t])}function Ab(i,t){return Uy(i,t)}function Uy(i,t,e,r,o){Qe(Tl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=pt.useContext(Wi),{matches:u}=pt.useContext(ba),f=u[u.length-1],d=f?f.params:{},p=f?f.pathname:"/",g=f?f.pathnameBase:"/",v=f&&f.route;{let U=v&&v.path||"";Ly(p,!v||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let _=qr(),y;if(t){let U=typeof t=="string"?no(t):t;Qe(g==="/"||U.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${U.pathname}" was given in the \`location\` prop.`),y=U}else y=_;let M=y.pathname||"/",b=M;if(g!=="/"){let U=g.replace(/^\//,"").split("/");b="/"+M.replace(/^\//,"").split("/").slice(U.length).join("/")}let S=Ey(i,{pathname:b});Xi(v||S!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Xi(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=Ub(S&&S.map(U=>Object.assign({},U,{params:Object.assign({},d,U.params),pathname:ga([g,l.encodeLocation?l.encodeLocation(U.pathname).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?g:ga([g,l.encodeLocation?l.encodeLocation(U.pathnameBase).pathname:U.pathnameBase])})),u,e,r,o);return t&&x?pt.createElement(bl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},x):x}function wb(){let i=Ib(),t=xb(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),e=i instanceof Error?i.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},l={padding:"2px 4px",backgroundColor:r},u=null;return console.error("Error handled by React Router default ErrorBoundary:",i),u=pt.createElement(pt.Fragment,null,pt.createElement("p",null,"💿 Hey developer 👋"),pt.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",pt.createElement("code",{style:l},"ErrorBoundary")," or"," ",pt.createElement("code",{style:l},"errorElement")," prop on your route.")),pt.createElement(pt.Fragment,null,pt.createElement("h2",null,"Unexpected Application Error!"),pt.createElement("h3",{style:{fontStyle:"italic"}},t),e?pt.createElement("pre",{style:o},e):null,u)}var Rb=pt.createElement(wb,null),Cb=class extends pt.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,t){return t.location!==i.location||t.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:t.error,location:t.location,revalidation:i.revalidation||t.revalidation}}componentDidCatch(i,t){this.props.unstable_onError?this.props.unstable_onError(i,t):console.error("React Router caught the following error during render",i)}render(){return this.state.error!==void 0?pt.createElement(ba.Provider,{value:this.props.routeContext},pt.createElement(om.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Db({routeContext:i,match:t,children:e}){let r=pt.useContext(io);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),pt.createElement(ba.Provider,{value:i},e)}function Ub(i,t=[],e=null,r=null,o=null){if(i==null){if(!e)return null;if(e.errors)i=e.matches;else if(t.length===0&&!e.initialized&&e.matches.length>0)i=e.matches;else return null}let l=i,u=e?.errors;if(u!=null){let p=l.findIndex(g=>g.route.id&&u?.[g.route.id]!==void 0);Qe(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,p+1))}let f=!1,d=-1;if(e)for(let p=0;p<l.length;p++){let g=l[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=p),g.route.id){let{loaderData:v,errors:_}=e,y=g.route.loader&&!v.hasOwnProperty(g.route.id)&&(!_||_[g.route.id]===void 0);if(g.route.lazy||y){f=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((p,g,v)=>{let _,y=!1,M=null,b=null;e&&(_=u&&g.route.id?u[g.route.id]:void 0,M=g.route.errorElement||Rb,f&&(d<0&&v===0?(Ly("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,b=null):d===v&&(y=!0,b=g.route.hydrateFallbackElement||null)));let S=t.concat(l.slice(0,v+1)),x=()=>{let U;return _?U=M:y?U=b:g.route.Component?U=pt.createElement(g.route.Component,null):g.route.element?U=g.route.element:U=p,pt.createElement(Db,{match:g,routeContext:{outlet:p,matches:S,isDataRoute:e!=null},children:U})};return e&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?pt.createElement(Cb,{location:e.location,revalidation:e.revalidation,component:M,error:_,children:x(),routeContext:{outlet:null,matches:S,isDataRoute:!0},unstable_onError:r}):x()},null)}function lm(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Lb(i){let t=pt.useContext(io);return Qe(t,lm(i)),t}function Nb(i){let t=pt.useContext(Bu);return Qe(t,lm(i)),t}function Ob(i){let t=pt.useContext(ba);return Qe(t,lm(i)),t}function cm(i){let t=Ob(i),e=t.matches[t.matches.length-1];return Qe(e.route.id,`${i} can only be used on routes that contain a unique "id"`),e.route.id}function Pb(){return cm("useRouteId")}function Ib(){let i=pt.useContext(om),t=Nb("useRouteError"),e=cm("useRouteError");return i!==void 0?i:t.errors?.[e]}function Fb(){let{router:i}=Lb("useNavigate"),t=cm("useNavigate"),e=pt.useRef(!1);return Dy(()=>{e.current=!0}),pt.useCallback(async(o,l={})=>{Xi(e.current,Cy),e.current&&(typeof o=="number"?i.navigate(o):await i.navigate(o,{fromRouteId:t,...l}))},[i,t])}var y_={};function Ly(i,t,e){!t&&!y_[i]&&(y_[i]=!0,Xi(!1,e))}pt.memo(zb);function zb({routes:i,future:t,state:e,unstable_onError:r}){return Uy(i,void 0,e,r,t)}function fl(i){Qe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Bb({basename:i="/",children:t=null,location:e,navigationType:r="POP",navigator:o,static:l=!1}){Qe(!Tl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=i.replace(/^\/*/,"/"),f=pt.useMemo(()=>({basename:u,navigator:o,static:l,future:{}}),[u,o,l]);typeof e=="string"&&(e=no(e));let{pathname:d="/",search:p="",hash:g="",state:v=null,key:_="default"}=e,y=pt.useMemo(()=>{let M=xa(d,u);return M==null?null:{location:{pathname:M,search:p,hash:g,state:v,key:_},navigationType:r}},[u,d,p,g,v,_,r]);return Xi(y!=null,`<Router basename="${u}"> is not able to match the URL "${d}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:pt.createElement(Wi.Provider,{value:f},pt.createElement(bl.Provider,{children:t,value:y}))}function Hb({children:i,location:t}){return Ab(Kd(i),t)}function Kd(i,t=[]){let e=[];return pt.Children.forEach(i,(r,o)=>{if(!pt.isValidElement(r))return;let l=[...t,o];if(r.type===pt.Fragment){e.push.apply(e,Kd(r.props.children,l));return}Qe(r.type===fl,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qe(!r.props.index||!r.props.children,"An index route cannot have child routes.");let u={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=Kd(r.props.children,l)),e.push(u)}),e}var _u="get",xu="application/x-www-form-urlencoded";function Hu(i){return i!=null&&typeof i.tagName=="string"}function Gb(i){return Hu(i)&&i.tagName.toLowerCase()==="button"}function Vb(i){return Hu(i)&&i.tagName.toLowerCase()==="form"}function kb(i){return Hu(i)&&i.tagName.toLowerCase()==="input"}function Xb(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function Wb(i,t){return i.button===0&&(!t||t==="_self")&&!Xb(i)}var Xc=null;function jb(){if(Xc===null)try{new FormData(document.createElement("form"),0),Xc=!1}catch{Xc=!0}return Xc}var qb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function rd(i){return i!=null&&!qb.has(i)?(Xi(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${xu}"`),null):i}function Yb(i,t){let e,r,o,l,u;if(Vb(i)){let f=i.getAttribute("action");r=f?xa(f,t):null,e=i.getAttribute("method")||_u,o=rd(i.getAttribute("enctype"))||xu,l=new FormData(i)}else if(Gb(i)||kb(i)&&(i.type==="submit"||i.type==="image")){let f=i.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=i.getAttribute("formaction")||f.getAttribute("action");if(r=d?xa(d,t):null,e=i.getAttribute("formmethod")||f.getAttribute("method")||_u,o=rd(i.getAttribute("formenctype"))||rd(f.getAttribute("enctype"))||xu,l=new FormData(f,i),!jb()){let{name:p,type:g,value:v}=i;if(g==="image"){let _=p?`${p}.`:"";l.append(`${_}x`,"0"),l.append(`${_}y`,"0")}else p&&l.append(p,v)}}else{if(Hu(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');e=_u,r=null,o=xu,u=i}return l&&o==="text/plain"&&(u=l,l=void 0),{action:r,method:e.toLowerCase(),encType:o,formData:l,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function um(i,t){if(i===!1||i===null||typeof i>"u")throw new Error(t)}function Zb(i,t,e){let r=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return r.pathname==="/"?r.pathname=`_root.${e}`:t&&xa(r.pathname,t)==="/"?r.pathname=`${t.replace(/\/$/,"")}/_root.${e}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${e}`,r}async function Kb(i,t){if(i.id in t)return t[i.id];try{let e=await import(i.module);return t[i.id]=e,e}catch(e){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(e),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function $b(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function Qb(i,t,e){let r=await Promise.all(i.map(async o=>{let l=t.routes[o.route.id];if(l){let u=await Kb(l,e);return u.links?u.links():[]}return[]}));return nT(r.flat(1).filter($b).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function S_(i,t,e,r,o,l){let u=(d,p)=>e[p]?d.route.id!==e[p].route.id:!0,f=(d,p)=>e[p].pathname!==d.pathname||e[p].route.path?.endsWith("*")&&e[p].params["*"]!==d.params["*"];return l==="assets"?t.filter((d,p)=>u(d,p)||f(d,p)):l==="data"?t.filter((d,p)=>{let g=r.routes[d.route.id];if(!g||!g.hasLoader)return!1;if(u(d,p)||f(d,p))return!0;if(d.route.shouldRevalidate){let v=d.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:e[0]?.params||{},nextUrl:new URL(i,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function Jb(i,t,{includeHydrateFallback:e}={}){return tT(i.map(r=>{let o=t.routes[r.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),e&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function tT(i){return[...new Set(i)]}function eT(i){let t={},e=Object.keys(i).sort();for(let r of e)t[r]=i[r];return t}function nT(i,t){let e=new Set;return new Set(t),i.reduce((r,o)=>{let l=JSON.stringify(eT(o));return e.has(l)||(e.add(l),r.push({key:l,link:o})),r},[])}function Ny(){let i=pt.useContext(io);return um(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function iT(){let i=pt.useContext(Bu);return um(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var fm=pt.createContext(void 0);fm.displayName="FrameworkContext";function Oy(){let i=pt.useContext(fm);return um(i,"You must render this element inside a <HydratedRouter> element"),i}function aT(i,t){let e=pt.useContext(fm),[r,o]=pt.useState(!1),[l,u]=pt.useState(!1),{onFocus:f,onBlur:d,onMouseEnter:p,onMouseLeave:g,onTouchStart:v}=t,_=pt.useRef(null);pt.useEffect(()=>{if(i==="render"&&u(!0),i==="viewport"){let b=x=>{x.forEach(U=>{u(U.isIntersecting)})},S=new IntersectionObserver(b,{threshold:.5});return _.current&&S.observe(_.current),()=>{S.disconnect()}}},[i]),pt.useEffect(()=>{if(r){let b=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(b)}}},[r]);let y=()=>{o(!0)},M=()=>{o(!1),u(!1)};return e?i!=="intent"?[l,_,{}]:[l,_,{onFocus:al(f,y),onBlur:al(d,M),onMouseEnter:al(p,y),onMouseLeave:al(g,M),onTouchStart:al(v,y)}]:[!1,_,{}]}function al(i,t){return e=>{i&&i(e),e.defaultPrevented||t(e)}}function rT({page:i,...t}){let{router:e}=Ny(),r=pt.useMemo(()=>Ey(e.routes,i,e.basename),[e.routes,i,e.basename]);return r?pt.createElement(oT,{page:i,matches:r,...t}):null}function sT(i){let{manifest:t,routeModules:e}=Oy(),[r,o]=pt.useState([]);return pt.useEffect(()=>{let l=!1;return Qb(i,t,e).then(u=>{l||o(u)}),()=>{l=!0}},[i,t,e]),r}function oT({page:i,matches:t,...e}){let r=qr(),{manifest:o,routeModules:l}=Oy(),{basename:u}=Ny(),{loaderData:f,matches:d}=iT(),p=pt.useMemo(()=>S_(i,t,d,o,r,"data"),[i,t,d,o,r]),g=pt.useMemo(()=>S_(i,t,d,o,r,"assets"),[i,t,d,o,r]),v=pt.useMemo(()=>{if(i===r.pathname+r.search+r.hash)return[];let M=new Set,b=!1;if(t.forEach(x=>{let U=o.routes[x.route.id];!U||!U.hasLoader||(!p.some(D=>D.route.id===x.route.id)&&x.route.id in f&&l[x.route.id]?.shouldRevalidate||U.hasClientLoader?b=!0:M.add(x.route.id))}),M.size===0)return[];let S=Zb(i,u,"data");return b&&M.size>0&&S.searchParams.set("_routes",t.filter(x=>M.has(x.route.id)).map(x=>x.route.id).join(",")),[S.pathname+S.search]},[u,f,r,o,p,t,i,l]),_=pt.useMemo(()=>Jb(g,o),[g,o]),y=sT(g);return pt.createElement(pt.Fragment,null,v.map(M=>pt.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...e})),_.map(M=>pt.createElement("link",{key:M,rel:"modulepreload",href:M,...e})),y.map(({key:M,link:b})=>pt.createElement("link",{key:M,nonce:e.nonce,...b})))}function lT(...i){return t=>{i.forEach(e=>{typeof e=="function"?e(t):e!=null&&(e.current=t)})}}var Py=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Py&&(window.__reactRouterVersion="7.9.1")}catch{}function cT({basename:i,children:t,window:e}){let r=pt.useRef();r.current==null&&(r.current=KM({window:e,v5Compat:!0}));let o=r.current,[l,u]=pt.useState({action:o.action,location:o.location}),f=pt.useCallback(d=>{pt.startTransition(()=>u(d))},[u]);return pt.useLayoutEffect(()=>o.listen(f),[o,f]),pt.createElement(Bb,{basename:i,children:t,location:l.location,navigationType:l.action,navigator:o})}var Iy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hi=pt.forwardRef(function({onClick:t,discover:e="render",prefetch:r="none",relative:o,reloadDocument:l,replace:u,state:f,target:d,to:p,preventScrollReset:g,viewTransition:v,..._},y){let{basename:M}=pt.useContext(Wi),b=typeof p=="string"&&Iy.test(p),S,x=!1;if(typeof p=="string"&&b&&(S=p,Py))try{let L=new URL(window.location.href),C=p.startsWith("//")?new URL(L.protocol+p):new URL(p),H=xa(C.pathname,M);C.origin===L.origin&&H!=null?p=H+C.search+C.hash:x=!0}catch{Xi(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let U=Mb(p,{relative:o}),[D,A,N]=aT(r,_),I=dT(p,{replace:u,state:f,target:d,preventScrollReset:g,relative:o,viewTransition:v});function z(L){t&&t(L),L.defaultPrevented||I(L)}let X=pt.createElement("a",{..._,...N,href:S||U,onClick:x||l?t:z,ref:lT(y,A),target:d,"data-discover":!b&&e==="render"?"true":void 0});return D&&!b?pt.createElement(pt.Fragment,null,X,pt.createElement(rT,{page:U})):X});Hi.displayName="Link";var uT=pt.forwardRef(function({"aria-current":t="page",caseSensitive:e=!1,className:r="",end:o=!1,style:l,to:u,viewTransition:f,children:d,...p},g){let v=Al(u,{relative:p.relative}),_=qr(),y=pt.useContext(Bu),{navigator:M,basename:b}=pt.useContext(Wi),S=y!=null&&_T(v)&&f===!0,x=M.encodeLocation?M.encodeLocation(v).pathname:v.pathname,U=_.pathname,D=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;e||(U=U.toLowerCase(),D=D?D.toLowerCase():null,x=x.toLowerCase()),D&&b&&(D=xa(D,b)||D);const A=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let N=U===x||!o&&U.startsWith(x)&&U.charAt(A)==="/",I=D!=null&&(D===x||!o&&D.startsWith(x)&&D.charAt(x.length)==="/"),z={isActive:N,isPending:I,isTransitioning:S},X=N?t:void 0,L;typeof r=="function"?L=r(z):L=[r,N?"active":null,I?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let C=typeof l=="function"?l(z):l;return pt.createElement(Hi,{...p,"aria-current":X,className:L,ref:g,style:C,to:u,viewTransition:f},typeof d=="function"?d(z):d)});uT.displayName="NavLink";var fT=pt.forwardRef(({discover:i="render",fetcherKey:t,navigate:e,reloadDocument:r,replace:o,state:l,method:u=_u,action:f,onSubmit:d,relative:p,preventScrollReset:g,viewTransition:v,..._},y)=>{let M=gT(),b=vT(f,{relative:p}),S=u.toLowerCase()==="get"?"get":"post",x=typeof f=="string"&&Iy.test(f),U=D=>{if(d&&d(D),D.defaultPrevented)return;D.preventDefault();let A=D.nativeEvent.submitter,N=A?.getAttribute("formmethod")||u;M(A||D.currentTarget,{fetcherKey:t,method:N,navigate:e,replace:o,state:l,relative:p,preventScrollReset:g,viewTransition:v})};return pt.createElement("form",{ref:y,method:S,action:b,onSubmit:r?d:U,..._,"data-discover":!x&&i==="render"?"true":void 0})});fT.displayName="Form";function hT(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fy(i){let t=pt.useContext(io);return Qe(t,hT(i)),t}function dT(i,{target:t,replace:e,state:r,preventScrollReset:o,relative:l,viewTransition:u}={}){let f=bb(),d=qr(),p=Al(i,{relative:l});return pt.useCallback(g=>{if(Wb(g,t)){g.preventDefault();let v=e!==void 0?e:vl(d)===vl(p);f(i,{replace:v,state:r,preventScrollReset:o,relative:l,viewTransition:u})}},[d,f,p,e,r,t,i,o,l,u])}var pT=0,mT=()=>`__${String(++pT)}__`;function gT(){let{router:i}=Fy("useSubmit"),{basename:t}=pt.useContext(Wi),e=Pb();return pt.useCallback(async(r,o={})=>{let{action:l,method:u,encType:f,formData:d,body:p}=Yb(r,t);if(o.navigate===!1){let g=o.fetcherKey||mT();await i.fetch(g,e,o.action||l,{preventScrollReset:o.preventScrollReset,formData:d,body:p,formMethod:o.method||u,formEncType:o.encType||f,flushSync:o.flushSync})}else await i.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:d,body:p,formMethod:o.method||u,formEncType:o.encType||f,replace:o.replace,state:o.state,fromRouteId:e,flushSync:o.flushSync,viewTransition:o.viewTransition})},[i,t,e])}function vT(i,{relative:t}={}){let{basename:e}=pt.useContext(Wi),r=pt.useContext(ba);Qe(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),l={...Al(i||".",{relative:t})},u=qr();if(i==null){l.search=u.search;let f=new URLSearchParams(l.search),d=f.getAll("index");if(d.some(g=>g==="")){f.delete("index"),d.filter(v=>v).forEach(v=>f.append("index",v));let g=f.toString();l.search=g?`?${g}`:""}}return(!i||i===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),e!=="/"&&(l.pathname=l.pathname==="/"?e:ga([e,l.pathname])),vl(l)}function _T(i,{relative:t}={}){let e=pt.useContext(Ry);Qe(e!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Fy("useViewTransitionState"),o=Al(i,{relative:t});if(!e.isTransitioning)return!1;let l=xa(e.currentLocation.pathname,r)||e.currentLocation.pathname,u=xa(e.nextLocation.pathname,r)||e.nextLocation.pathname;return Cu(o.pathname,u)!=null||Cu(o.pathname,l)!=null}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hm="180",xT=0,E_=1,yT=2,zy=1,ST=2,pa=3,or=0,qn=1,ma=2,ar=0,qs=1,$d=2,M_=3,b_=4,ET=5,zr=100,MT=101,bT=102,TT=103,AT=104,wT=200,RT=201,CT=202,DT=203,Qd=204,Jd=205,UT=206,LT=207,NT=208,OT=209,PT=210,IT=211,FT=212,zT=213,BT=214,tp=0,ep=1,np=2,Ks=3,ip=4,ap=5,rp=6,sp=7,By=0,HT=1,GT=2,rr=0,VT=1,kT=2,XT=3,WT=4,jT=5,qT=6,YT=7,Hy=300,$s=301,Qs=302,op=303,lp=304,Gu=306,cp=1e3,wi=1001,up=1002,ai=1003,ZT=1004,Wc=1005,jn=1006,sd=1007,Hr=1008,ya=1009,Gy=1010,Vy=1011,_l=1012,dm=1013,kr=1014,Gi=1015,ao=1016,pm=1017,mm=1018,xl=1020,ky=35902,Xy=35899,Wy=1021,jy=1022,mi=1023,yl=1026,Sl=1027,qy=1028,gm=1029,Yy=1030,vm=1031,_m=1033,yu=33776,Su=33777,Eu=33778,Mu=33779,fp=35840,hp=35841,dp=35842,pp=35843,mp=36196,gp=37492,vp=37496,_p=37808,xp=37809,yp=37810,Sp=37811,Ep=37812,Mp=37813,bp=37814,Tp=37815,Ap=37816,wp=37817,Rp=37818,Cp=37819,Dp=37820,Up=37821,Lp=36492,Np=36494,Op=36495,Pp=36283,Ip=36284,Fp=36285,zp=36286,KT=3200,$T=3201,QT=0,JT=1,ir="",pi="srgb",Js="srgb-linear",Du="linear",Ge="srgb",Cs=7680,T_=519,tA=512,eA=513,nA=514,Zy=515,iA=516,aA=517,rA=518,sA=519,A_=35044,w_="300 es",Vi=2e3,Uu=2001;class ro{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(e)===-1&&r[t].push(e)}hasEventListener(t,e){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(e)!==-1}removeEventListener(t,e){const r=this._listeners;if(r===void 0)return;const o=r[t];if(o!==void 0){const l=o.indexOf(e);l!==-1&&o.splice(l,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const r=e[t.type];if(r!==void 0){t.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,t);t.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],od=Math.PI/180,Bp=180/Math.PI;function wl(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(On[i&255]+On[i>>8&255]+On[i>>16&255]+On[i>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[e&63|128]+On[e>>8&255]+"-"+On[e>>16&255]+On[e>>24&255]+On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]).toLowerCase()}function be(i,t,e){return Math.max(t,Math.min(e,i))}function oA(i,t){return(i%t+t)%t}function ld(i,t,e){return(1-e)*i+e*t}function rl(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Wn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class fe{constructor(t=0,e=0){fe.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,r=this.y,o=t.elements;return this.x=o[0]*e+o[3]*r+o[6],this.y=o[1]*e+o[4]*r+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this}clampLength(t,e){const r=this.length();return this.divideScalar(r||1).multiplyScalar(be(r,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const r=this.dot(t)/e;return Math.acos(be(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,r=this.y-t.y;return e*e+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const r=Math.cos(e),o=Math.sin(e),l=this.x-t.x,u=this.y-t.y;return this.x=l*r-u*o+t.x,this.y=l*o+u*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Rl{constructor(t=0,e=0,r=0,o=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=r,this._w=o}static slerpFlat(t,e,r,o,l,u,f){let d=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];const _=l[u+0],y=l[u+1],M=l[u+2],b=l[u+3];if(f===0){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(f===1){t[e+0]=_,t[e+1]=y,t[e+2]=M,t[e+3]=b;return}if(v!==b||d!==_||p!==y||g!==M){let S=1-f;const x=d*_+p*y+g*M+v*b,U=x>=0?1:-1,D=1-x*x;if(D>Number.EPSILON){const N=Math.sqrt(D),I=Math.atan2(N,x*U);S=Math.sin(S*I)/N,f=Math.sin(f*I)/N}const A=f*U;if(d=d*S+_*A,p=p*S+y*A,g=g*S+M*A,v=v*S+b*A,S===1-f){const N=1/Math.sqrt(d*d+p*p+g*g+v*v);d*=N,p*=N,g*=N,v*=N}}t[e]=d,t[e+1]=p,t[e+2]=g,t[e+3]=v}static multiplyQuaternionsFlat(t,e,r,o,l,u){const f=r[o],d=r[o+1],p=r[o+2],g=r[o+3],v=l[u],_=l[u+1],y=l[u+2],M=l[u+3];return t[e]=f*M+g*v+d*y-p*_,t[e+1]=d*M+g*_+p*v-f*y,t[e+2]=p*M+g*y+f*_-d*v,t[e+3]=g*M-f*v-d*_-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,r,o){return this._x=t,this._y=e,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const r=t._x,o=t._y,l=t._z,u=t._order,f=Math.cos,d=Math.sin,p=f(r/2),g=f(o/2),v=f(l/2),_=d(r/2),y=d(o/2),M=d(l/2);switch(u){case"XYZ":this._x=_*g*v+p*y*M,this._y=p*y*v-_*g*M,this._z=p*g*M+_*y*v,this._w=p*g*v-_*y*M;break;case"YXZ":this._x=_*g*v+p*y*M,this._y=p*y*v-_*g*M,this._z=p*g*M-_*y*v,this._w=p*g*v+_*y*M;break;case"ZXY":this._x=_*g*v-p*y*M,this._y=p*y*v+_*g*M,this._z=p*g*M+_*y*v,this._w=p*g*v-_*y*M;break;case"ZYX":this._x=_*g*v-p*y*M,this._y=p*y*v+_*g*M,this._z=p*g*M-_*y*v,this._w=p*g*v+_*y*M;break;case"YZX":this._x=_*g*v+p*y*M,this._y=p*y*v+_*g*M,this._z=p*g*M-_*y*v,this._w=p*g*v-_*y*M;break;case"XZY":this._x=_*g*v-p*y*M,this._y=p*y*v-_*g*M,this._z=p*g*M+_*y*v,this._w=p*g*v+_*y*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const r=e/2,o=Math.sin(r);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,r=e[0],o=e[4],l=e[8],u=e[1],f=e[5],d=e[9],p=e[2],g=e[6],v=e[10],_=r+f+v;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(g-d)*y,this._y=(l-p)*y,this._z=(u-o)*y}else if(r>f&&r>v){const y=2*Math.sqrt(1+r-f-v);this._w=(g-d)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(l+p)/y}else if(f>v){const y=2*Math.sqrt(1+f-r-v);this._w=(l-p)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(d+g)/y}else{const y=2*Math.sqrt(1+v-r-f);this._w=(u-o)/y,this._x=(l+p)/y,this._y=(d+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let r=t.dot(e)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const r=this.angleTo(t);if(r===0)return this;const o=Math.min(1,e/r);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const r=t._x,o=t._y,l=t._z,u=t._w,f=e._x,d=e._y,p=e._z,g=e._w;return this._x=r*g+u*f+o*p-l*d,this._y=o*g+u*d+l*f-r*p,this._z=l*g+u*p+r*d-o*f,this._w=u*g-r*f-o*d-l*p,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const r=this._x,o=this._y,l=this._z,u=this._w;let f=u*t._w+r*t._x+o*t._y+l*t._z;if(f<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,f=-f):this.copy(t),f>=1)return this._w=u,this._x=r,this._y=o,this._z=l,this;const d=1-f*f;if(d<=Number.EPSILON){const y=1-e;return this._w=y*u+e*this._w,this._x=y*r+e*this._x,this._y=y*o+e*this._y,this._z=y*l+e*this._z,this.normalize(),this}const p=Math.sqrt(d),g=Math.atan2(p,f),v=Math.sin((1-e)*g)/p,_=Math.sin(e*g)/p;return this._w=u*v+this._w*_,this._x=r*v+this._x*_,this._y=o*v+this._y*_,this._z=l*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,e,r){return this.copy(t).slerp(e,r)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(t),o*Math.cos(t),l*Math.sin(e),l*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ct{constructor(t=0,e=0,r=0){ct.prototype.isVector3=!0,this.x=t,this.y=e,this.z=r}set(t,e,r){return r===void 0&&(r=this.z),this.x=t,this.y=e,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(R_.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(R_.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,r=this.y,o=this.z,l=t.elements;return this.x=l[0]*e+l[3]*r+l[6]*o,this.y=l[1]*e+l[4]*r+l[7]*o,this.z=l[2]*e+l[5]*r+l[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,r=this.y,o=this.z,l=t.elements,u=1/(l[3]*e+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*e+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*e+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*e+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(t){const e=this.x,r=this.y,o=this.z,l=t.x,u=t.y,f=t.z,d=t.w,p=2*(u*o-f*r),g=2*(f*e-l*o),v=2*(l*r-u*e);return this.x=e+d*p+u*v-f*g,this.y=r+d*g+f*p-l*v,this.z=o+d*v+l*g-u*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,r=this.y,o=this.z,l=t.elements;return this.x=l[0]*e+l[4]*r+l[8]*o,this.y=l[1]*e+l[5]*r+l[9]*o,this.z=l[2]*e+l[6]*r+l[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this.z=be(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this.z=be(this.z,t,e),this}clampLength(t,e){const r=this.length();return this.divideScalar(r||1).multiplyScalar(be(r,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this.z=t.z+(e.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const r=t.x,o=t.y,l=t.z,u=e.x,f=e.y,d=e.z;return this.x=o*d-l*f,this.y=l*u-r*d,this.z=r*f-o*u,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const r=t.dot(this)/e;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return cd.copy(this).projectOnVector(t),this.sub(cd)}reflect(t){return this.sub(cd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const r=this.dot(t)/e;return Math.acos(be(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,r=this.y-t.y,o=this.z-t.z;return e*e+r*r+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,r){const o=Math.sin(e)*t;return this.x=o*Math.sin(r),this.y=Math.cos(e)*t,this.z=o*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,r){return this.x=t*Math.sin(e),this.y=r,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=r,this.z=o,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,r=Math.sqrt(1-e*e);return this.x=r*Math.cos(t),this.y=e,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cd=new ct,R_=new Rl;class pe{constructor(t,e,r,o,l,u,f,d,p){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,r,o,l,u,f,d,p)}set(t,e,r,o,l,u,f,d,p){const g=this.elements;return g[0]=t,g[1]=o,g[2]=f,g[3]=e,g[4]=l,g[5]=d,g[6]=r,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,r=t.elements;return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=r[7],e[8]=r[8],this}extractBasis(t,e,r){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const r=t.elements,o=e.elements,l=this.elements,u=r[0],f=r[3],d=r[6],p=r[1],g=r[4],v=r[7],_=r[2],y=r[5],M=r[8],b=o[0],S=o[3],x=o[6],U=o[1],D=o[4],A=o[7],N=o[2],I=o[5],z=o[8];return l[0]=u*b+f*U+d*N,l[3]=u*S+f*D+d*I,l[6]=u*x+f*A+d*z,l[1]=p*b+g*U+v*N,l[4]=p*S+g*D+v*I,l[7]=p*x+g*A+v*z,l[2]=_*b+y*U+M*N,l[5]=_*S+y*D+M*I,l[8]=_*x+y*A+M*z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],r=t[1],o=t[2],l=t[3],u=t[4],f=t[5],d=t[6],p=t[7],g=t[8];return e*u*g-e*f*p-r*l*g+r*f*d+o*l*p-o*u*d}invert(){const t=this.elements,e=t[0],r=t[1],o=t[2],l=t[3],u=t[4],f=t[5],d=t[6],p=t[7],g=t[8],v=g*u-f*p,_=f*d-g*l,y=p*l-u*d,M=e*v+r*_+o*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/M;return t[0]=v*b,t[1]=(o*p-g*r)*b,t[2]=(f*r-o*u)*b,t[3]=_*b,t[4]=(g*e-o*d)*b,t[5]=(o*l-f*e)*b,t[6]=y*b,t[7]=(r*d-p*e)*b,t[8]=(u*e-r*l)*b,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,r,o,l,u,f){const d=Math.cos(l),p=Math.sin(l);return this.set(r*d,r*p,-r*(d*u+p*f)+u+t,-o*p,o*d,-o*(-p*u+d*f)+f+e,0,0,1),this}scale(t,e){return this.premultiply(ud.makeScale(t,e)),this}rotate(t){return this.premultiply(ud.makeRotation(-t)),this}translate(t,e){return this.premultiply(ud.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),r=Math.sin(t);return this.set(e,-r,0,r,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,r=t.elements;for(let o=0;o<9;o++)if(e[o]!==r[o])return!1;return!0}fromArray(t,e=0){for(let r=0;r<9;r++)this.elements[r]=t[r+e];return this}toArray(t=[],e=0){const r=this.elements;return t[e]=r[0],t[e+1]=r[1],t[e+2]=r[2],t[e+3]=r[3],t[e+4]=r[4],t[e+5]=r[5],t[e+6]=r[6],t[e+7]=r[7],t[e+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ud=new pe;function Ky(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Lu(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lA(){const i=Lu("canvas");return i.style.display="block",i}const C_={};function El(i){i in C_||(C_[i]=!0,console.warn(i))}function cA(i,t,e){return new Promise(function(r,o){function l(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(l,e);break;default:r()}}setTimeout(l,e)})}const D_=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),U_=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uA(){const i={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Ge&&(o.r=va(o.r),o.g=va(o.g),o.b=va(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ge&&(o.r=Ys(o.r),o.g=Ys(o.g),o.b=Ys(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ir?Du:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return El("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return El("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(o,l)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],r=[.3127,.329];return i.define({[Js]:{primaries:t,whitePoint:r,transfer:Du,toXYZ:D_,fromXYZ:U_,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:t,whitePoint:r,transfer:Ge,toXYZ:D_,fromXYZ:U_,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),i}const De=uA();function va(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ds;class fA{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{Ds===void 0&&(Ds=Lu("canvas")),Ds.width=t.width,Ds.height=t.height;const o=Ds.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),r=Ds}return r.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Lu("canvas");e.width=t.width,e.height=t.height;const r=e.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const o=r.getImageData(0,0,t.width,t.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=va(l[u]/255)*255;return r.putImageData(o,0,0),e}else if(t.data){const e=t.data.slice(0);for(let r=0;r<e.length;r++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[r]=Math.floor(va(e[r]/255)*255):e[r]=va(e[r]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let hA=0;class xm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hA++}),this.uuid=wl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(fd(o[u].image)):l.push(fd(o[u]))}else l=fd(o);r.url=l}return e||(t.images[this.uuid]=r),r}}function fd(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fA.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dA=0;const hd=new ct;let Ui=class bu extends ro{constructor(t=bu.DEFAULT_IMAGE,e=bu.DEFAULT_MAPPING,r=wi,o=wi,l=jn,u=Hr,f=mi,d=ya,p=bu.DEFAULT_ANISOTROPY,g=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dA++}),this.uuid=wl(),this.name="",this.source=new xm(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=d,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(hd).x}get height(){return this.source.getSize(hd).y}get depth(){return this.source.getSize(hd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const r=t[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const o=this[e];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[e]=r}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),e||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hy)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cp:t.x=t.x-Math.floor(t.x);break;case wi:t.x=t.x<0?0:1;break;case up:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cp:t.y=t.y-Math.floor(t.y);break;case wi:t.y=t.y<0?0:1;break;case up:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ui.DEFAULT_IMAGE=null;Ui.DEFAULT_MAPPING=Hy;Ui.DEFAULT_ANISOTROPY=1;class rn{constructor(t=0,e=0,r=0,o=1){rn.prototype.isVector4=!0,this.x=t,this.y=e,this.z=r,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,r,o){return this.x=t,this.y=e,this.z=r,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,r=this.y,o=this.z,l=this.w,u=t.elements;return this.x=u[0]*e+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*e+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*e+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*e+u[7]*r+u[11]*o+u[15]*l,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,r,o,l;const d=t.elements,p=d[0],g=d[4],v=d[8],_=d[1],y=d[5],M=d[9],b=d[2],S=d[6],x=d[10];if(Math.abs(g-_)<.01&&Math.abs(v-b)<.01&&Math.abs(M-S)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+b)<.1&&Math.abs(M+S)<.1&&Math.abs(p+y+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const D=(p+1)/2,A=(y+1)/2,N=(x+1)/2,I=(g+_)/4,z=(v+b)/4,X=(M+S)/4;return D>A&&D>N?D<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(D),o=I/r,l=z/r):A>N?A<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(A),r=I/o,l=X/o):N<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(N),r=z/l,o=X/l),this.set(r,o,l,e),this}let U=Math.sqrt((S-M)*(S-M)+(v-b)*(v-b)+(_-g)*(_-g));return Math.abs(U)<.001&&(U=1),this.x=(S-M)/U,this.y=(v-b)/U,this.z=(_-g)/U,this.w=Math.acos((p+y+x-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this.z=be(this.z,t.z,e.z),this.w=be(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this.z=be(this.z,t,e),this.w=be(this.w,t,e),this}clampLength(t,e){const r=this.length();return this.divideScalar(r||1).multiplyScalar(be(r,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this.z=t.z+(e.z-t.z)*r,this.w=t.w+(e.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pA extends ro{constructor(t=1,e=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=r.depth,this.scissor=new rn(0,0,t,e),this.scissorTest=!1,this.viewport=new rn(0,0,t,e);const o={width:t,height:e,depth:r.depth},l=new Ui(o);this.textures=[];const u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const e={minFilter:jn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,r=1){if(this.width!==t||this.height!==e||this.depth!==r){this.width=t,this.height=e,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=t,this.textures[o].image.height=e,this.textures[o].image.depth=r,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,r=t.textures.length;e<r;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const o=Object.assign({},t.textures[e].image);this.textures[e].source=new xm(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lr extends pA{constructor(t=1,e=1,r={}){super(t,e,r),this.isWebGLRenderTarget=!0}}class $y extends Ui{constructor(t=null,e=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:r,depth:o},this.magFilter=ai,this.minFilter=ai,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class mA extends Ui{constructor(t=null,e=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:r,depth:o},this.magFilter=ai,this.minFilter=ai,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cl{constructor(t=new ct(1/0,1/0,1/0),e=new ct(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,r=t.length;e<r;e+=3)this.expandByPoint(Ei.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,r=t.count;e<r;e++)this.expandByPoint(Ei.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,r=t.length;e<r;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const r=Ei.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const l=r.getAttribute("position");if(e===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)t.isMesh===!0?t.getVertexPosition(u,Ei):Ei.fromBufferAttribute(l,u),Ei.applyMatrix4(t.matrixWorld),this.expandByPoint(Ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),jc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),jc.copy(r.boundingBox)),jc.applyMatrix4(t.matrixWorld),this.union(jc)}const o=t.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ei),Ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,r;return t.normal.x>0?(e=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),e<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(sl),qc.subVectors(this.max,sl),Us.subVectors(t.a,sl),Ls.subVectors(t.b,sl),Ns.subVectors(t.c,sl),$a.subVectors(Ls,Us),Qa.subVectors(Ns,Ls),Cr.subVectors(Us,Ns);let e=[0,-$a.z,$a.y,0,-Qa.z,Qa.y,0,-Cr.z,Cr.y,$a.z,0,-$a.x,Qa.z,0,-Qa.x,Cr.z,0,-Cr.x,-$a.y,$a.x,0,-Qa.y,Qa.x,0,-Cr.y,Cr.x,0];return!dd(e,Us,Ls,Ns,qc)||(e=[1,0,0,0,1,0,0,0,1],!dd(e,Us,Ls,Ns,qc))?!1:(Yc.crossVectors($a,Qa),e=[Yc.x,Yc.y,Yc.z],dd(e,Us,Ls,Ns,qc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const oa=[new ct,new ct,new ct,new ct,new ct,new ct,new ct,new ct],Ei=new ct,jc=new Cl,Us=new ct,Ls=new ct,Ns=new ct,$a=new ct,Qa=new ct,Cr=new ct,sl=new ct,qc=new ct,Yc=new ct,Dr=new ct;function dd(i,t,e,r,o){for(let l=0,u=i.length-3;l<=u;l+=3){Dr.fromArray(i,l);const f=o.x*Math.abs(Dr.x)+o.y*Math.abs(Dr.y)+o.z*Math.abs(Dr.z),d=t.dot(Dr),p=e.dot(Dr),g=r.dot(Dr);if(Math.max(-Math.max(d,p,g),Math.min(d,p,g))>f)return!1}return!0}const gA=new Cl,ol=new ct,pd=new ct;class Vu{constructor(t=new ct,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const r=this.center;e!==void 0?r.copy(e):gA.setFromPoints(t).getCenter(r);let o=0;for(let l=0,u=t.length;l<u;l++)o=Math.max(o,r.distanceToSquared(t[l]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const r=this.center.distanceToSquared(t);return e.copy(t),r>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ol.subVectors(t,this.center);const e=ol.lengthSq();if(e>this.radius*this.radius){const r=Math.sqrt(e),o=(r-this.radius)*.5;this.center.addScaledVector(ol,o/r),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ol.copy(t.center).add(pd)),this.expandByPoint(ol.copy(t.center).sub(pd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const la=new ct,md=new ct,Zc=new ct,Ja=new ct,gd=new ct,Kc=new ct,vd=new ct;class Qy{constructor(t=new ct,e=new ct(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,la)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const r=e.dot(this.direction);return r<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=la.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(la.copy(this.origin).addScaledVector(this.direction,e),la.distanceToSquared(t))}distanceSqToSegment(t,e,r,o){md.copy(t).add(e).multiplyScalar(.5),Zc.copy(e).sub(t).normalize(),Ja.copy(this.origin).sub(md);const l=t.distanceTo(e)*.5,u=-this.direction.dot(Zc),f=Ja.dot(this.direction),d=-Ja.dot(Zc),p=Ja.lengthSq(),g=Math.abs(1-u*u);let v,_,y,M;if(g>0)if(v=u*d-f,_=u*f-d,M=l*g,v>=0)if(_>=-M)if(_<=M){const b=1/g;v*=b,_*=b,y=v*(v+u*_+2*f)+_*(u*v+_+2*d)+p}else _=l,v=Math.max(0,-(u*_+f)),y=-v*v+_*(_+2*d)+p;else _=-l,v=Math.max(0,-(u*_+f)),y=-v*v+_*(_+2*d)+p;else _<=-M?(v=Math.max(0,-(-u*l+f)),_=v>0?-l:Math.min(Math.max(-l,-d),l),y=-v*v+_*(_+2*d)+p):_<=M?(v=0,_=Math.min(Math.max(-l,-d),l),y=_*(_+2*d)+p):(v=Math.max(0,-(u*l+f)),_=v>0?l:Math.min(Math.max(-l,-d),l),y=-v*v+_*(_+2*d)+p);else _=u>0?-l:l,v=Math.max(0,-(u*_+f)),y=-v*v+_*(_+2*d)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(md).addScaledVector(Zc,_),y}intersectSphere(t,e){la.subVectors(t.center,this.origin);const r=la.dot(this.direction),o=la.dot(la)-r*r,l=t.radius*t.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,d=r+u;return d<0?null:f<0?this.at(d,e):this.at(f,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/e;return r>=0?r:null}intersectPlane(t,e){const r=this.distanceToPlane(t);return r===null?null:this.at(r,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let r,o,l,u,f,d;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(r=(t.min.x-_.x)*p,o=(t.max.x-_.x)*p):(r=(t.max.x-_.x)*p,o=(t.min.x-_.x)*p),g>=0?(l=(t.min.y-_.y)*g,u=(t.max.y-_.y)*g):(l=(t.max.y-_.y)*g,u=(t.min.y-_.y)*g),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),v>=0?(f=(t.min.z-_.z)*v,d=(t.max.z-_.z)*v):(f=(t.max.z-_.z)*v,d=(t.min.z-_.z)*v),r>d||f>o)||((f>r||r!==r)&&(r=f),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,e)}intersectsBox(t){return this.intersectBox(t,la)!==null}intersectTriangle(t,e,r,o,l){gd.subVectors(e,t),Kc.subVectors(r,t),vd.crossVectors(gd,Kc);let u=this.direction.dot(vd),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Ja.subVectors(this.origin,t);const d=f*this.direction.dot(Kc.crossVectors(Ja,Kc));if(d<0)return null;const p=f*this.direction.dot(gd.cross(Ja));if(p<0||d+p>u)return null;const g=-f*Ja.dot(vd);return g<0?null:this.at(g/u,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dn{constructor(t,e,r,o,l,u,f,d,p,g,v,_,y,M,b,S){dn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,r,o,l,u,f,d,p,g,v,_,y,M,b,S)}set(t,e,r,o,l,u,f,d,p,g,v,_,y,M,b,S){const x=this.elements;return x[0]=t,x[4]=e,x[8]=r,x[12]=o,x[1]=l,x[5]=u,x[9]=f,x[13]=d,x[2]=p,x[6]=g,x[10]=v,x[14]=_,x[3]=y,x[7]=M,x[11]=b,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dn().fromArray(this.elements)}copy(t){const e=this.elements,r=t.elements;return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=r[7],e[8]=r[8],e[9]=r[9],e[10]=r[10],e[11]=r[11],e[12]=r[12],e[13]=r[13],e[14]=r[14],e[15]=r[15],this}copyPosition(t){const e=this.elements,r=t.elements;return e[12]=r[12],e[13]=r[13],e[14]=r[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,r){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,e,r){return this.set(t.x,e.x,r.x,0,t.y,e.y,r.y,0,t.z,e.z,r.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,r=t.elements,o=1/Os.setFromMatrixColumn(t,0).length(),l=1/Os.setFromMatrixColumn(t,1).length(),u=1/Os.setFromMatrixColumn(t,2).length();return e[0]=r[0]*o,e[1]=r[1]*o,e[2]=r[2]*o,e[3]=0,e[4]=r[4]*l,e[5]=r[5]*l,e[6]=r[6]*l,e[7]=0,e[8]=r[8]*u,e[9]=r[9]*u,e[10]=r[10]*u,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,r=t.x,o=t.y,l=t.z,u=Math.cos(r),f=Math.sin(r),d=Math.cos(o),p=Math.sin(o),g=Math.cos(l),v=Math.sin(l);if(t.order==="XYZ"){const _=u*g,y=u*v,M=f*g,b=f*v;e[0]=d*g,e[4]=-d*v,e[8]=p,e[1]=y+M*p,e[5]=_-b*p,e[9]=-f*d,e[2]=b-_*p,e[6]=M+y*p,e[10]=u*d}else if(t.order==="YXZ"){const _=d*g,y=d*v,M=p*g,b=p*v;e[0]=_+b*f,e[4]=M*f-y,e[8]=u*p,e[1]=u*v,e[5]=u*g,e[9]=-f,e[2]=y*f-M,e[6]=b+_*f,e[10]=u*d}else if(t.order==="ZXY"){const _=d*g,y=d*v,M=p*g,b=p*v;e[0]=_-b*f,e[4]=-u*v,e[8]=M+y*f,e[1]=y+M*f,e[5]=u*g,e[9]=b-_*f,e[2]=-u*p,e[6]=f,e[10]=u*d}else if(t.order==="ZYX"){const _=u*g,y=u*v,M=f*g,b=f*v;e[0]=d*g,e[4]=M*p-y,e[8]=_*p+b,e[1]=d*v,e[5]=b*p+_,e[9]=y*p-M,e[2]=-p,e[6]=f*d,e[10]=u*d}else if(t.order==="YZX"){const _=u*d,y=u*p,M=f*d,b=f*p;e[0]=d*g,e[4]=b-_*v,e[8]=M*v+y,e[1]=v,e[5]=u*g,e[9]=-f*g,e[2]=-p*g,e[6]=y*v+M,e[10]=_-b*v}else if(t.order==="XZY"){const _=u*d,y=u*p,M=f*d,b=f*p;e[0]=d*g,e[4]=-v,e[8]=p*g,e[1]=_*v+b,e[5]=u*g,e[9]=y*v-M,e[2]=M*v-y,e[6]=f*g,e[10]=b*v+_}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vA,t,_A)}lookAt(t,e,r){const o=this.elements;return ni.subVectors(t,e),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),tr.crossVectors(r,ni),tr.lengthSq()===0&&(Math.abs(r.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),tr.crossVectors(r,ni)),tr.normalize(),$c.crossVectors(ni,tr),o[0]=tr.x,o[4]=$c.x,o[8]=ni.x,o[1]=tr.y,o[5]=$c.y,o[9]=ni.y,o[2]=tr.z,o[6]=$c.z,o[10]=ni.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const r=t.elements,o=e.elements,l=this.elements,u=r[0],f=r[4],d=r[8],p=r[12],g=r[1],v=r[5],_=r[9],y=r[13],M=r[2],b=r[6],S=r[10],x=r[14],U=r[3],D=r[7],A=r[11],N=r[15],I=o[0],z=o[4],X=o[8],L=o[12],C=o[1],H=o[5],Z=o[9],lt=o[13],tt=o[2],dt=o[6],F=o[10],$=o[14],j=o[3],St=o[7],P=o[11],et=o[15];return l[0]=u*I+f*C+d*tt+p*j,l[4]=u*z+f*H+d*dt+p*St,l[8]=u*X+f*Z+d*F+p*P,l[12]=u*L+f*lt+d*$+p*et,l[1]=g*I+v*C+_*tt+y*j,l[5]=g*z+v*H+_*dt+y*St,l[9]=g*X+v*Z+_*F+y*P,l[13]=g*L+v*lt+_*$+y*et,l[2]=M*I+b*C+S*tt+x*j,l[6]=M*z+b*H+S*dt+x*St,l[10]=M*X+b*Z+S*F+x*P,l[14]=M*L+b*lt+S*$+x*et,l[3]=U*I+D*C+A*tt+N*j,l[7]=U*z+D*H+A*dt+N*St,l[11]=U*X+D*Z+A*F+N*P,l[15]=U*L+D*lt+A*$+N*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],r=t[4],o=t[8],l=t[12],u=t[1],f=t[5],d=t[9],p=t[13],g=t[2],v=t[6],_=t[10],y=t[14],M=t[3],b=t[7],S=t[11],x=t[15];return M*(+l*d*v-o*p*v-l*f*_+r*p*_+o*f*y-r*d*y)+b*(+e*d*y-e*p*_+l*u*_-o*u*y+o*p*g-l*d*g)+S*(+e*p*v-e*f*y-l*u*v+r*u*y+l*f*g-r*p*g)+x*(-o*f*g-e*d*v+e*f*_+o*u*v-r*u*_+r*d*g)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,r){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=e,o[14]=r),this}invert(){const t=this.elements,e=t[0],r=t[1],o=t[2],l=t[3],u=t[4],f=t[5],d=t[6],p=t[7],g=t[8],v=t[9],_=t[10],y=t[11],M=t[12],b=t[13],S=t[14],x=t[15],U=v*S*p-b*_*p+b*d*y-f*S*y-v*d*x+f*_*x,D=M*_*p-g*S*p-M*d*y+u*S*y+g*d*x-u*_*x,A=g*b*p-M*v*p+M*f*y-u*b*y-g*f*x+u*v*x,N=M*v*d-g*b*d-M*f*_+u*b*_+g*f*S-u*v*S,I=e*U+r*D+o*A+l*N;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/I;return t[0]=U*z,t[1]=(b*_*l-v*S*l-b*o*y+r*S*y+v*o*x-r*_*x)*z,t[2]=(f*S*l-b*d*l+b*o*p-r*S*p-f*o*x+r*d*x)*z,t[3]=(v*d*l-f*_*l-v*o*p+r*_*p+f*o*y-r*d*y)*z,t[4]=D*z,t[5]=(g*S*l-M*_*l+M*o*y-e*S*y-g*o*x+e*_*x)*z,t[6]=(M*d*l-u*S*l-M*o*p+e*S*p+u*o*x-e*d*x)*z,t[7]=(u*_*l-g*d*l+g*o*p-e*_*p-u*o*y+e*d*y)*z,t[8]=A*z,t[9]=(M*v*l-g*b*l-M*r*y+e*b*y+g*r*x-e*v*x)*z,t[10]=(u*b*l-M*f*l+M*r*p-e*b*p-u*r*x+e*f*x)*z,t[11]=(g*f*l-u*v*l-g*r*p+e*v*p+u*r*y-e*f*y)*z,t[12]=N*z,t[13]=(g*b*o-M*v*o+M*r*_-e*b*_-g*r*S+e*v*S)*z,t[14]=(M*f*o-u*b*o-M*r*d+e*b*d+u*r*S-e*f*S)*z,t[15]=(u*v*o-g*f*o+g*r*d-e*v*d-u*r*_+e*f*_)*z,this}scale(t){const e=this.elements,r=t.x,o=t.y,l=t.z;return e[0]*=r,e[4]*=o,e[8]*=l,e[1]*=r,e[5]*=o,e[9]*=l,e[2]*=r,e[6]*=o,e[10]*=l,e[3]*=r,e[7]*=o,e[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,r,o))}makeTranslation(t,e,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,r,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,e,-r,0,0,r,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),r=Math.sin(t);return this.set(e,0,r,0,0,1,0,0,-r,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),r=Math.sin(t);return this.set(e,-r,0,0,r,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const r=Math.cos(e),o=Math.sin(e),l=1-r,u=t.x,f=t.y,d=t.z,p=l*u,g=l*f;return this.set(p*u+r,p*f-o*d,p*d+o*f,0,p*f+o*d,g*f+r,g*d-o*u,0,p*d-o*f,g*d+o*u,l*d*d+r,0,0,0,0,1),this}makeScale(t,e,r){return this.set(t,0,0,0,0,e,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,e,r,o,l,u){return this.set(1,r,l,0,t,1,u,0,e,o,1,0,0,0,0,1),this}compose(t,e,r){const o=this.elements,l=e._x,u=e._y,f=e._z,d=e._w,p=l+l,g=u+u,v=f+f,_=l*p,y=l*g,M=l*v,b=u*g,S=u*v,x=f*v,U=d*p,D=d*g,A=d*v,N=r.x,I=r.y,z=r.z;return o[0]=(1-(b+x))*N,o[1]=(y+A)*N,o[2]=(M-D)*N,o[3]=0,o[4]=(y-A)*I,o[5]=(1-(_+x))*I,o[6]=(S+U)*I,o[7]=0,o[8]=(M+D)*z,o[9]=(S-U)*z,o[10]=(1-(_+b))*z,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,e,r){const o=this.elements;let l=Os.set(o[0],o[1],o[2]).length();const u=Os.set(o[4],o[5],o[6]).length(),f=Os.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),t.x=o[12],t.y=o[13],t.z=o[14],Mi.copy(this);const p=1/l,g=1/u,v=1/f;return Mi.elements[0]*=p,Mi.elements[1]*=p,Mi.elements[2]*=p,Mi.elements[4]*=g,Mi.elements[5]*=g,Mi.elements[6]*=g,Mi.elements[8]*=v,Mi.elements[9]*=v,Mi.elements[10]*=v,e.setFromRotationMatrix(Mi),r.x=l,r.y=u,r.z=f,this}makePerspective(t,e,r,o,l,u,f=Vi,d=!1){const p=this.elements,g=2*l/(e-t),v=2*l/(r-o),_=(e+t)/(e-t),y=(r+o)/(r-o);let M,b;if(d)M=l/(u-l),b=u*l/(u-l);else if(f===Vi)M=-(u+l)/(u-l),b=-2*u*l/(u-l);else if(f===Uu)M=-u/(u-l),b=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=g,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,e,r,o,l,u,f=Vi,d=!1){const p=this.elements,g=2/(e-t),v=2/(r-o),_=-(e+t)/(e-t),y=-(r+o)/(r-o);let M,b;if(d)M=1/(u-l),b=u/(u-l);else if(f===Vi)M=-2/(u-l),b=-(u+l)/(u-l);else if(f===Uu)M=-1/(u-l),b=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=g,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=v,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=M,p[14]=b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const e=this.elements,r=t.elements;for(let o=0;o<16;o++)if(e[o]!==r[o])return!1;return!0}fromArray(t,e=0){for(let r=0;r<16;r++)this.elements[r]=t[r+e];return this}toArray(t=[],e=0){const r=this.elements;return t[e]=r[0],t[e+1]=r[1],t[e+2]=r[2],t[e+3]=r[3],t[e+4]=r[4],t[e+5]=r[5],t[e+6]=r[6],t[e+7]=r[7],t[e+8]=r[8],t[e+9]=r[9],t[e+10]=r[10],t[e+11]=r[11],t[e+12]=r[12],t[e+13]=r[13],t[e+14]=r[14],t[e+15]=r[15],t}}const Os=new ct,Mi=new dn,vA=new ct(0,0,0),_A=new ct(1,1,1),tr=new ct,$c=new ct,ni=new ct,L_=new dn,N_=new Rl;let Xr=class Jy{constructor(t=0,e=0,r=0,o=Jy.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=r,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,r,o=this._order){return this._x=t,this._y=e,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,r=!0){const o=t.elements,l=o[0],u=o[4],f=o[8],d=o[1],p=o[5],g=o[9],v=o[2],_=o[6],y=o[10];switch(e){case"XYZ":this._y=Math.asin(be(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-be(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(be(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-be(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,r){return L_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(L_,e,r)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return N_.setFromEuler(this),this.setFromQuaternion(N_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xr.DEFAULT_ORDER="XYZ";let t1=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},xA=0;const O_=new ct,Ps=new Rl,ca=new dn,Qc=new ct,ll=new ct,yA=new ct,SA=new Rl,P_=new ct(1,0,0),I_=new ct(0,1,0),F_=new ct(0,0,1),z_={type:"added"},EA={type:"removed"},Is={type:"childadded",child:null},_d={type:"childremoved",child:null};class Yn extends ro{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xA++}),this.uuid=wl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yn.DEFAULT_UP.clone();const t=new ct,e=new Xr,r=new Rl,o=new ct(1,1,1);function l(){r.setFromEuler(e,!1)}function u(){e.setFromQuaternion(r,void 0,!1)}e._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new dn},normalMatrix:{value:new pe}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=Yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new t1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.premultiply(Ps),this}rotateX(t){return this.rotateOnAxis(P_,t)}rotateY(t){return this.rotateOnAxis(I_,t)}rotateZ(t){return this.rotateOnAxis(F_,t)}translateOnAxis(t,e){return O_.copy(t).applyQuaternion(this.quaternion),this.position.add(O_.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(P_,t)}translateY(t){return this.translateOnAxis(I_,t)}translateZ(t){return this.translateOnAxis(F_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ca.copy(this.matrixWorld).invert())}lookAt(t,e,r){t.isVector3?Qc.copy(t):Qc.set(t,e,r);const o=this.parent;this.updateWorldMatrix(!0,!1),ll.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ca.lookAt(ll,Qc,this.up):ca.lookAt(Qc,ll,this.up),this.quaternion.setFromRotationMatrix(ca),o&&(ca.extractRotation(o.matrixWorld),Ps.setFromRotationMatrix(ca),this.quaternion.premultiply(Ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(z_),Is.child=t,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(EA),_d.child=t,this.dispatchEvent(_d),_d.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ca.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ca.multiply(t.parent.matrixWorld)),t.applyMatrix4(ca),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(z_),Is.child=t,this.dispatchEvent(Is),Is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(t,e);if(u!==void 0)return u}}getObjectsByProperty(t,e,r=[]){this[t]===e&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(t,e,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ll,t,yA),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ll,SA,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let r=0,o=e.length;r<o;r++)e[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let r=0,o=e.length;r<o;r++)e[r].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let r=0,o=e.length;r<o;r++)e[r].updateMatrixWorld(t)}updateWorldMatrix(t,e){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",r={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let p=0,g=d.length;p<g;p++){const v=d[p];l(t.shapes,v)}else l(t.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,p=this.material.length;d<p;d++)f.push(l(t.materials,this.material[d]));o.material=f}else o.material=l(t.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];o.animations.push(l(t.animations,d))}}if(e){const f=u(t.geometries),d=u(t.materials),p=u(t.textures),g=u(t.images),v=u(t.shapes),_=u(t.skeletons),y=u(t.animations),M=u(t.nodes);f.length>0&&(r.geometries=f),d.length>0&&(r.materials=d),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),_.length>0&&(r.skeletons=_),y.length>0&&(r.animations=y),M.length>0&&(r.nodes=M)}return r.object=o,r;function u(f){const d=[];for(const p in f){const g=f[p];delete g.metadata,d.push(g)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let r=0;r<t.children.length;r++){const o=t.children[r];this.add(o.clone())}return this}}Yn.DEFAULT_UP=new ct(0,1,0);Yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bi=new ct,ua=new ct,xd=new ct,fa=new ct,Fs=new ct,zs=new ct,B_=new ct,yd=new ct,Sd=new ct,Ed=new ct,Md=new rn,bd=new rn,Td=new rn;class Ai{constructor(t=new ct,e=new ct,r=new ct){this.a=t,this.b=e,this.c=r}static getNormal(t,e,r,o){o.subVectors(r,e),bi.subVectors(t,e),o.cross(bi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(t,e,r,o,l){bi.subVectors(o,e),ua.subVectors(r,e),xd.subVectors(t,e);const u=bi.dot(bi),f=bi.dot(ua),d=bi.dot(xd),p=ua.dot(ua),g=ua.dot(xd),v=u*p-f*f;if(v===0)return l.set(0,0,0),null;const _=1/v,y=(p*d-f*g)*_,M=(u*g-f*d)*_;return l.set(1-y-M,M,y)}static containsPoint(t,e,r,o){return this.getBarycoord(t,e,r,o,fa)===null?!1:fa.x>=0&&fa.y>=0&&fa.x+fa.y<=1}static getInterpolation(t,e,r,o,l,u,f,d){return this.getBarycoord(t,e,r,o,fa)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,fa.x),d.addScaledVector(u,fa.y),d.addScaledVector(f,fa.z),d)}static getInterpolatedAttribute(t,e,r,o,l,u){return Md.setScalar(0),bd.setScalar(0),Td.setScalar(0),Md.fromBufferAttribute(t,e),bd.fromBufferAttribute(t,r),Td.fromBufferAttribute(t,o),u.setScalar(0),u.addScaledVector(Md,l.x),u.addScaledVector(bd,l.y),u.addScaledVector(Td,l.z),u}static isFrontFacing(t,e,r,o){return bi.subVectors(r,e),ua.subVectors(t,e),bi.cross(ua).dot(o)<0}set(t,e,r){return this.a.copy(t),this.b.copy(e),this.c.copy(r),this}setFromPointsAndIndices(t,e,r,o){return this.a.copy(t[e]),this.b.copy(t[r]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,e,r,o){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bi.subVectors(this.c,this.b),ua.subVectors(this.a,this.b),bi.cross(ua).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ai.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ai.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,r,o,l){return Ai.getInterpolation(t,this.a,this.b,this.c,e,r,o,l)}containsPoint(t){return Ai.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ai.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const r=this.a,o=this.b,l=this.c;let u,f;Fs.subVectors(o,r),zs.subVectors(l,r),yd.subVectors(t,r);const d=Fs.dot(yd),p=zs.dot(yd);if(d<=0&&p<=0)return e.copy(r);Sd.subVectors(t,o);const g=Fs.dot(Sd),v=zs.dot(Sd);if(g>=0&&v<=g)return e.copy(o);const _=d*v-g*p;if(_<=0&&d>=0&&g<=0)return u=d/(d-g),e.copy(r).addScaledVector(Fs,u);Ed.subVectors(t,l);const y=Fs.dot(Ed),M=zs.dot(Ed);if(M>=0&&y<=M)return e.copy(l);const b=y*p-d*M;if(b<=0&&p>=0&&M<=0)return f=p/(p-M),e.copy(r).addScaledVector(zs,f);const S=g*M-y*v;if(S<=0&&v-g>=0&&y-M>=0)return B_.subVectors(l,o),f=(v-g)/(v-g+(y-M)),e.copy(o).addScaledVector(B_,f);const x=1/(S+b+_);return u=b*x,f=_*x,e.copy(r).addScaledVector(Fs,u).addScaledVector(zs,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const e1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},Jc={h:0,s:0,l:0};function Ad(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Le{constructor(t,e,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,r)}set(t,e,r){if(e===void 0&&r===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,e,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.colorSpaceToWorking(this,e),this}setRGB(t,e,r,o=De.workingColorSpace){return this.r=t,this.g=e,this.b=r,De.colorSpaceToWorking(this,o),this}setHSL(t,e,r,o=De.workingColorSpace){if(t=oA(t,1),e=be(e,0,1),r=be(r,0,1),e===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+e):r+e-r*e,u=2*r-l;this.r=Ad(u,l,t+1/3),this.g=Ad(u,l,t),this.b=Ad(u,l,t-1/3)}return De.colorSpaceToWorking(this,o),this}setStyle(t,e=pi){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,e);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,e);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,e);if(u===6)return this.setHex(parseInt(l,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pi){const r=e1[t.toLowerCase()];return r!==void 0?this.setHex(r,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=va(t.r),this.g=va(t.g),this.b=va(t.b),this}copyLinearToSRGB(t){return this.r=Ys(t.r),this.g=Ys(t.g),this.b=Ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pi){return De.workingToColorSpace(Pn.copy(this),t),Math.round(be(Pn.r*255,0,255))*65536+Math.round(be(Pn.g*255,0,255))*256+Math.round(be(Pn.b*255,0,255))}getHexString(t=pi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=De.workingColorSpace){De.workingToColorSpace(Pn.copy(this),e);const r=Pn.r,o=Pn.g,l=Pn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let d,p;const g=(f+u)/2;if(f===u)d=0,p=0;else{const v=u-f;switch(p=g<=.5?v/(u+f):v/(2-u-f),u){case r:d=(o-l)/v+(o<l?6:0);break;case o:d=(l-r)/v+2;break;case l:d=(r-o)/v+4;break}d/=6}return t.h=d,t.s=p,t.l=g,t}getRGB(t,e=De.workingColorSpace){return De.workingToColorSpace(Pn.copy(this),e),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=pi){De.workingToColorSpace(Pn.copy(this),t);const e=Pn.r,r=Pn.g,o=Pn.b;return t!==pi?`color(${t} ${e.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(t,e,r){return this.getHSL(er),this.setHSL(er.h+t,er.s+e,er.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,r){return this.r=t.r+(e.r-t.r)*r,this.g=t.g+(e.g-t.g)*r,this.b=t.b+(e.b-t.b)*r,this}lerpHSL(t,e){this.getHSL(er),t.getHSL(Jc);const r=ld(er.h,Jc.h,e),o=ld(er.s,Jc.s,e),l=ld(er.l,Jc.l,e);return this.setHSL(r,o,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,r=this.g,o=this.b,l=t.elements;return this.r=l[0]*e+l[3]*r+l[6]*o,this.g=l[1]*e+l[4]*r+l[7]*o,this.b=l[2]*e+l[5]*r+l[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Le;Le.NAMES=e1;let MA=0;class Dl extends ro{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:MA++}),this.uuid=wl(),this.name="",this.type="Material",this.blending=qs,this.side=or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qd,this.blendDst=Jd,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=T_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const r=t[e];if(r===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const o=this[e];if(o===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[e]=r}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(r.blending=this.blending),this.side!==or&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Qd&&(r.blendSrc=this.blendSrc),this.blendDst!==Jd&&(r.blendDst=this.blendDst),this.blendEquation!==zr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==T_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const d=l[f];delete d.metadata,u.push(d)}return u}if(e){const l=o(t.textures),u=o(t.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let r=null;if(e!==null){const o=e.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=e[l].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class n1 extends Dl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xr,this.combine=By,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fn=new ct,tu=new fe;let bA=0;class Ci{constructor(t,e,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bA++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=r,this.usage=A_,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,r){t*=this.itemSize,r*=e.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[t+o]=e.array[r+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,r=this.count;e<r;e++)tu.fromBufferAttribute(this,e),tu.applyMatrix3(t),this.setXY(e,tu.x,tu.y);else if(this.itemSize===3)for(let e=0,r=this.count;e<r;e++)fn.fromBufferAttribute(this,e),fn.applyMatrix3(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let e=0,r=this.count;e<r;e++)fn.fromBufferAttribute(this,e),fn.applyMatrix4(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let e=0,r=this.count;e<r;e++)fn.fromBufferAttribute(this,e),fn.applyNormalMatrix(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let e=0,r=this.count;e<r;e++)fn.fromBufferAttribute(this,e),fn.transformDirection(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let r=this.array[t*this.itemSize+e];return this.normalized&&(r=rl(r,this.array)),r}setComponent(t,e,r){return this.normalized&&(r=Wn(r,this.array)),this.array[t*this.itemSize+e]=r,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=rl(e,this.array)),e}setX(t,e){return this.normalized&&(e=Wn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=rl(e,this.array)),e}setY(t,e){return this.normalized&&(e=Wn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=rl(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Wn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=rl(e,this.array)),e}setW(t,e){return this.normalized&&(e=Wn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,r){return t*=this.itemSize,this.normalized&&(e=Wn(e,this.array),r=Wn(r,this.array)),this.array[t+0]=e,this.array[t+1]=r,this}setXYZ(t,e,r,o){return t*=this.itemSize,this.normalized&&(e=Wn(e,this.array),r=Wn(r,this.array),o=Wn(o,this.array)),this.array[t+0]=e,this.array[t+1]=r,this.array[t+2]=o,this}setXYZW(t,e,r,o,l){return t*=this.itemSize,this.normalized&&(e=Wn(e,this.array),r=Wn(r,this.array),o=Wn(o,this.array),l=Wn(l,this.array)),this.array[t+0]=e,this.array[t+1]=r,this.array[t+2]=o,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==A_&&(t.usage=this.usage),t}}class i1 extends Ci{constructor(t,e,r){super(new Uint16Array(t),e,r)}}class a1 extends Ci{constructor(t,e,r){super(new Uint32Array(t),e,r)}}class _a extends Ci{constructor(t,e,r){super(new Float32Array(t),e,r)}}let TA=0;const di=new dn,wd=new Yn,Bs=new ct,ii=new Cl,cl=new Cl,bn=new ct;class Ta extends ro{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:TA++}),this.uuid=wl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ky(t)?a1:i1)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,r=0){this.groups.push({start:t,count:e,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new pe().getNormalMatrix(t);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,e,r){return di.makeTranslation(t,e,r),this.applyMatrix4(di),this}scale(t,e,r){return di.makeScale(t,e,r),this.applyMatrix4(di),this}lookAt(t){return wd.lookAt(t),wd.updateMatrix(),this.applyMatrix4(wd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const r=[];for(let o=0,l=t.length;o<l;o++){const u=t[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new _a(r,3))}else{const r=Math.min(t.length,e.count);for(let o=0;o<r;o++){const l=t[o];e.setXYZ(o,l.x,l.y,l.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ct(-1/0,-1/0,-1/0),new ct(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const l=e[r];ii.setFromBufferAttribute(l),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vu);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ct,1/0);return}if(t){const r=this.boundingSphere.center;if(ii.setFromBufferAttribute(t),e)for(let l=0,u=e.length;l<u;l++){const f=e[l];cl.setFromBufferAttribute(f),this.morphTargetsRelative?(bn.addVectors(ii.min,cl.min),ii.expandByPoint(bn),bn.addVectors(ii.max,cl.max),ii.expandByPoint(bn)):(ii.expandByPoint(cl.min),ii.expandByPoint(cl.max))}ii.getCenter(r);let o=0;for(let l=0,u=t.count;l<u;l++)bn.fromBufferAttribute(t,l),o=Math.max(o,r.distanceToSquared(bn));if(e)for(let l=0,u=e.length;l<u;l++){const f=e[l],d=this.morphTargetsRelative;for(let p=0,g=f.count;p<g;p++)bn.fromBufferAttribute(f,p),d&&(Bs.fromBufferAttribute(t,p),bn.add(Bs)),o=Math.max(o,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.position,o=e.normal,l=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ci(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],d=[];for(let X=0;X<r.count;X++)f[X]=new ct,d[X]=new ct;const p=new ct,g=new ct,v=new ct,_=new fe,y=new fe,M=new fe,b=new ct,S=new ct;function x(X,L,C){p.fromBufferAttribute(r,X),g.fromBufferAttribute(r,L),v.fromBufferAttribute(r,C),_.fromBufferAttribute(l,X),y.fromBufferAttribute(l,L),M.fromBufferAttribute(l,C),g.sub(p),v.sub(p),y.sub(_),M.sub(_);const H=1/(y.x*M.y-M.x*y.y);isFinite(H)&&(b.copy(g).multiplyScalar(M.y).addScaledVector(v,-y.y).multiplyScalar(H),S.copy(v).multiplyScalar(y.x).addScaledVector(g,-M.x).multiplyScalar(H),f[X].add(b),f[L].add(b),f[C].add(b),d[X].add(S),d[L].add(S),d[C].add(S))}let U=this.groups;U.length===0&&(U=[{start:0,count:t.count}]);for(let X=0,L=U.length;X<L;++X){const C=U[X],H=C.start,Z=C.count;for(let lt=H,tt=H+Z;lt<tt;lt+=3)x(t.getX(lt+0),t.getX(lt+1),t.getX(lt+2))}const D=new ct,A=new ct,N=new ct,I=new ct;function z(X){N.fromBufferAttribute(o,X),I.copy(N);const L=f[X];D.copy(L),D.sub(N.multiplyScalar(N.dot(L))).normalize(),A.crossVectors(I,L);const H=A.dot(d[X])<0?-1:1;u.setXYZW(X,D.x,D.y,D.z,H)}for(let X=0,L=U.length;X<L;++X){const C=U[X],H=C.start,Z=C.count;for(let lt=H,tt=H+Z;lt<tt;lt+=3)z(t.getX(lt+0)),z(t.getX(lt+1)),z(t.getX(lt+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ci(new Float32Array(e.count*3),3),this.setAttribute("normal",r);else for(let _=0,y=r.count;_<y;_++)r.setXYZ(_,0,0,0);const o=new ct,l=new ct,u=new ct,f=new ct,d=new ct,p=new ct,g=new ct,v=new ct;if(t)for(let _=0,y=t.count;_<y;_+=3){const M=t.getX(_+0),b=t.getX(_+1),S=t.getX(_+2);o.fromBufferAttribute(e,M),l.fromBufferAttribute(e,b),u.fromBufferAttribute(e,S),g.subVectors(u,l),v.subVectors(o,l),g.cross(v),f.fromBufferAttribute(r,M),d.fromBufferAttribute(r,b),p.fromBufferAttribute(r,S),f.add(g),d.add(g),p.add(g),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let _=0,y=e.count;_<y;_+=3)o.fromBufferAttribute(e,_+0),l.fromBufferAttribute(e,_+1),u.fromBufferAttribute(e,_+2),g.subVectors(u,l),v.subVectors(o,l),g.cross(v),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,r=t.count;e<r;e++)bn.fromBufferAttribute(t,e),bn.normalize(),t.setXYZ(e,bn.x,bn.y,bn.z)}toNonIndexed(){function t(f,d){const p=f.array,g=f.itemSize,v=f.normalized,_=new p.constructor(d.length*g);let y=0,M=0;for(let b=0,S=d.length;b<S;b++){f.isInterleavedBufferAttribute?y=d[b]*f.data.stride+f.offset:y=d[b]*g;for(let x=0;x<g;x++)_[M++]=p[y++]}return new Ci(_,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ta,r=this.index.array,o=this.attributes;for(const f in o){const d=o[f],p=t(d,r);e.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const d=[],p=l[f];for(let g=0,v=p.length;g<v;g++){const _=p[g],y=t(_,r);d.push(y)}e.morphAttributes[f]=d}e.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,d=u.length;f<d;f++){const p=u[f];e.addGroup(p.start,p.count,p.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(t[p]=d[p]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const r=this.attributes;for(const d in r){const p=r[d];t.data.attributes[d]=p.toJSON(t.data)}const o={};let l=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],g=[];for(let v=0,_=p.length;v<_;v++){const y=p[v];g.push(y.toJSON(t.data))}g.length>0&&(o[d]=g,l=!0)}l&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const o=t.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(e))}const l=t.morphAttributes;for(const p in l){const g=[],v=l[p];for(let _=0,y=v.length;_<y;_++)g.push(v[_].clone(e));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let p=0,g=u.length;p<g;p++){const v=u[p];this.addGroup(v.start,v.count,v.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const H_=new dn,Ur=new Qy,eu=new Vu,G_=new ct,nu=new ct,iu=new ct,au=new ct,Rd=new ct,ru=new ct,V_=new ct,su=new ct;let gi=class extends Yn{constructor(t=new Ta,e=new n1){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const o=e[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(t,e){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;e.fromBufferAttribute(o,t);const f=this.morphTargetInfluences;if(l&&f){ru.set(0,0,0);for(let d=0,p=l.length;d<p;d++){const g=f[d],v=l[d];g!==0&&(Rd.fromBufferAttribute(v,t),u?ru.addScaledVector(Rd,g):ru.addScaledVector(Rd.sub(e),g))}e.add(ru)}return e}raycast(t,e){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),eu.copy(r.boundingSphere),eu.applyMatrix4(l),Ur.copy(t.ray).recast(t.near),!(eu.containsPoint(Ur.origin)===!1&&(Ur.intersectSphere(eu,G_)===null||Ur.origin.distanceToSquared(G_)>(t.far-t.near)**2))&&(H_.copy(l).invert(),Ur.copy(t.ray).applyMatrix4(H_),!(r.boundingBox!==null&&Ur.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,e,Ur)))}_computeIntersections(t,e,r){let o;const l=this.geometry,u=this.material,f=l.index,d=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,v=l.attributes.normal,_=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,b=_.length;M<b;M++){const S=_[M],x=u[S.materialIndex],U=Math.max(S.start,y.start),D=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let A=U,N=D;A<N;A+=3){const I=f.getX(A),z=f.getX(A+1),X=f.getX(A+2);o=ou(this,x,t,r,p,g,v,I,z,X),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=S.materialIndex,e.push(o))}}else{const M=Math.max(0,y.start),b=Math.min(f.count,y.start+y.count);for(let S=M,x=b;S<x;S+=3){const U=f.getX(S),D=f.getX(S+1),A=f.getX(S+2);o=ou(this,u,t,r,p,g,v,U,D,A),o&&(o.faceIndex=Math.floor(S/3),e.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,b=_.length;M<b;M++){const S=_[M],x=u[S.materialIndex],U=Math.max(S.start,y.start),D=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let A=U,N=D;A<N;A+=3){const I=A,z=A+1,X=A+2;o=ou(this,x,t,r,p,g,v,I,z,X),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=S.materialIndex,e.push(o))}}else{const M=Math.max(0,y.start),b=Math.min(d.count,y.start+y.count);for(let S=M,x=b;S<x;S+=3){const U=S,D=S+1,A=S+2;o=ou(this,u,t,r,p,g,v,U,D,A),o&&(o.faceIndex=Math.floor(S/3),e.push(o))}}}};function AA(i,t,e,r,o,l,u,f){let d;if(t.side===qn?d=r.intersectTriangle(u,l,o,!0,f):d=r.intersectTriangle(o,l,u,t.side===or,f),d===null)return null;su.copy(f),su.applyMatrix4(i.matrixWorld);const p=e.ray.origin.distanceTo(su);return p<e.near||p>e.far?null:{distance:p,point:su.clone(),object:i}}function ou(i,t,e,r,o,l,u,f,d,p){i.getVertexPosition(f,nu),i.getVertexPosition(d,iu),i.getVertexPosition(p,au);const g=AA(i,t,e,r,nu,iu,au,V_);if(g){const v=new ct;Ai.getBarycoord(V_,nu,iu,au,v),o&&(g.uv=Ai.getInterpolatedAttribute(o,f,d,p,v,new fe)),l&&(g.uv1=Ai.getInterpolatedAttribute(l,f,d,p,v,new fe)),u&&(g.normal=Ai.getInterpolatedAttribute(u,f,d,p,v,new ct),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:f,b:d,c:p,normal:new ct,materialIndex:0};Ai.getNormal(nu,iu,au,_.normal),g.face=_,g.barycoord=v}return g}class Ul extends Ta{constructor(t=1,e=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const d=[],p=[],g=[],v=[];let _=0,y=0;M("z","y","x",-1,-1,r,e,t,u,l,0),M("z","y","x",1,-1,r,e,-t,u,l,1),M("x","z","y",1,1,t,r,e,o,u,2),M("x","z","y",1,-1,t,r,-e,o,u,3),M("x","y","z",1,-1,t,e,r,o,l,4),M("x","y","z",-1,-1,t,e,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new _a(p,3)),this.setAttribute("normal",new _a(g,3)),this.setAttribute("uv",new _a(v,2));function M(b,S,x,U,D,A,N,I,z,X,L){const C=A/z,H=N/X,Z=A/2,lt=N/2,tt=I/2,dt=z+1,F=X+1;let $=0,j=0;const St=new ct;for(let P=0;P<F;P++){const et=P*H-lt;for(let yt=0;yt<dt;yt++){const Et=yt*C-Z;St[b]=Et*U,St[S]=et*D,St[x]=tt,p.push(St.x,St.y,St.z),St[b]=0,St[S]=0,St[x]=I>0?1:-1,g.push(St.x,St.y,St.z),v.push(yt/z),v.push(1-P/X),$+=1}}for(let P=0;P<X;P++)for(let et=0;et<z;et++){const yt=_+et+dt*P,Et=_+et+dt*(P+1),Nt=_+(et+1)+dt*(P+1),Vt=_+(et+1)+dt*P;d.push(yt,Et,Vt),d.push(Et,Nt,Vt),j+=6}f.addGroup(y,j,L),y+=j,_+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ul(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function to(i){const t={};for(const e in i){t[e]={};for(const r in i[e]){const o=i[e][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][r]=null):t[e][r]=o.clone():Array.isArray(o)?t[e][r]=o.slice():t[e][r]=o}}return t}function Bn(i){const t={};for(let e=0;e<i.length;e++){const r=to(i[e]);for(const o in r)t[o]=r[o]}return t}function wA(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function r1(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}const RA={clone:to,merge:Bn};var CA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sa extends Dl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=CA,this.fragmentShader=DA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=to(t.uniforms),this.uniformsGroups=wA(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?e.uniforms[o]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?e.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?e.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?e.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?e.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?e.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?e.uniforms[o]={type:"m4",value:u.toArray()}:e.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(e.extensions=r),e}}let Nu=class extends Yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const nr=new ct,k_=new fe,X_=new fe;class Ti extends Nu{constructor(t=50,e=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Bp*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(od*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bp*2*Math.atan(Math.tan(od*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,r){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(nr.x,nr.y).multiplyScalar(-t/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(nr.x,nr.y).multiplyScalar(-t/nr.z)}getViewSize(t,e){return this.getViewBounds(t,k_,X_),e.subVectors(X_,k_)}setViewOffset(t,e,r,o,l,u){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(od*.5*this.fov)/this.zoom,r=2*e,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/d,e-=u.offsetY*r/p,o*=u.width/d,r*=u.height/p}const f=this.filmOffset;f!==0&&(l+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,e,e-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Hs=-90,Gs=1;class UA extends Yn{constructor(t,e,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ti(Hs,Gs,t,e);o.layers=this.layers,this.add(o);const l=new Ti(Hs,Gs,t,e);l.layers=this.layers,this.add(l);const u=new Ti(Hs,Gs,t,e);u.layers=this.layers,this.add(u);const f=new Ti(Hs,Gs,t,e);f.layers=this.layers,this.add(f);const d=new Ti(Hs,Gs,t,e);d.layers=this.layers,this.add(d);const p=new Ti(Hs,Gs,t,e);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[r,o,l,u,f,d]=e;for(const p of e)this.remove(p);if(t===Vi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===Uu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of e)this.add(p),p.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,d,p,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,o),t.render(e,l),t.setRenderTarget(r,1,o),t.render(e,u),t.setRenderTarget(r,2,o),t.render(e,f),t.setRenderTarget(r,3,o),t.render(e,d),t.setRenderTarget(r,4,o),t.render(e,p),r.texture.generateMipmaps=b,t.setRenderTarget(r,5,o),t.render(e,g),t.setRenderTarget(v,_,y),t.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class s1 extends Ui{constructor(t=[],e=$s,r,o,l,u,f,d,p,g){super(t,e,r,o,l,u,f,d,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class LA extends lr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},o=[r,r,r,r,r,r];this.texture=new s1(o),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Ul(5,5,5),l=new Sa({name:"CubemapFromEquirect",uniforms:to(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:qn,blending:ar});l.uniforms.tEquirect.value=e;const u=new gi(o,l),f=e.minFilter;return e.minFilter===Hr&&(e.minFilter=jn),new UA(1,10,this).update(t,u),e.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(t,e=!0,r=!0,o=!0){const l=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(e,r,o);t.setRenderTarget(l)}}class lu extends Yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const NA={type:"move"};class Cd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ct,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ct),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ct,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ct),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const r of t.hand.values())this._getHandJoint(e,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,r){let o=null,l=null,u=null;const f=this._targetRay,d=this._grip,p=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(p&&t.hand){u=!0;for(const b of t.hand.values()){const S=e.getJointPose(b,r),x=this._getHandJoint(p,b);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=g.position.distanceTo(v.position),y=.02,M=.005;p.inputState.pinching&&_>y+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&_<=y-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(l=e.getPose(t.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(o=e.getPose(t.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(NA)))}return f!==null&&(f.visible=o!==null),d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const r=new lu;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[e.jointName]=r,t.add(r)}return t.joints[e.jointName]}}class W_ extends Yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xr,this.environmentIntensity=1,this.environmentRotation=new Xr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class OA extends Ui{constructor(t=null,e=1,r=1,o,l,u,f,d,p=ai,g=ai,v,_){super(null,u,f,d,p,g,o,l,v,_),this.isDataTexture=!0,this.image={data:t,width:e,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Dd=new ct,PA=new ct,IA=new pe;let Pr=class{constructor(t=new ct(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,r,o){return this.normal.set(t,e,r),this.constant=o,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,r){const o=Dd.subVectors(r,e).cross(PA.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const r=t.delta(Dd),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const l=-(t.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:e.copy(t.start).addScaledVector(r,l)}intersectsLine(t){const e=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return e<0&&r>0||r<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const r=e||IA.getNormalMatrix(t),o=this.coplanarPoint(Dd).applyMatrix4(t),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Lr=new Vu,FA=new fe(.5,.5),cu=new ct;class o1{constructor(t=new Pr,e=new Pr,r=new Pr,o=new Pr,l=new Pr,u=new Pr){this.planes=[t,e,r,o,l,u]}set(t,e,r,o,l,u){const f=this.planes;return f[0].copy(t),f[1].copy(e),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(t){const e=this.planes;for(let r=0;r<6;r++)e[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,e=Vi,r=!1){const o=this.planes,l=t.elements,u=l[0],f=l[1],d=l[2],p=l[3],g=l[4],v=l[5],_=l[6],y=l[7],M=l[8],b=l[9],S=l[10],x=l[11],U=l[12],D=l[13],A=l[14],N=l[15];if(o[0].setComponents(p-u,y-g,x-M,N-U).normalize(),o[1].setComponents(p+u,y+g,x+M,N+U).normalize(),o[2].setComponents(p+f,y+v,x+b,N+D).normalize(),o[3].setComponents(p-f,y-v,x-b,N-D).normalize(),r)o[4].setComponents(d,_,S,A).normalize(),o[5].setComponents(p-d,y-_,x-S,N-A).normalize();else if(o[4].setComponents(p-d,y-_,x-S,N-A).normalize(),e===Vi)o[5].setComponents(p+d,y+_,x+S,N+A).normalize();else if(e===Uu)o[5].setComponents(d,_,S,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Lr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Lr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Lr)}intersectsSprite(t){Lr.center.set(0,0,0);const e=FA.distanceTo(t.center);return Lr.radius=.7071067811865476+e,Lr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Lr)}intersectsSphere(t){const e=this.planes,r=t.center,o=-t.radius;for(let l=0;l<6;l++)if(e[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(t){const e=this.planes;for(let r=0;r<6;r++){const o=e[r];if(cu.x=o.normal.x>0?t.max.x:t.min.x,cu.y=o.normal.y>0?t.max.y:t.min.y,cu.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(cu)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let r=0;r<6;r++)if(e[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zA extends Dl{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ou=new ct,Pu=new ct,j_=new dn,ul=new Qy,uu=new Vu,Ud=new ct,q_=new ct;class BA extends Yn{constructor(t=new Ta,e=new zA){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,r=[0];for(let o=1,l=e.count;o<l;o++)Ou.fromBufferAttribute(e,o-1),Pu.fromBufferAttribute(e,o),r[o]=r[o-1],r[o]+=Ou.distanceTo(Pu);t.setAttribute("lineDistance",new _a(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const r=this.geometry,o=this.matrixWorld,l=t.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),uu.copy(r.boundingSphere),uu.applyMatrix4(o),uu.radius+=l,t.ray.intersectsSphere(uu)===!1)return;j_.copy(o).invert(),ul.copy(t.ray).applyMatrix4(j_);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,p=this.isLineSegments?2:1,g=r.index,_=r.attributes.position;if(g!==null){const y=Math.max(0,u.start),M=Math.min(g.count,u.start+u.count);for(let b=y,S=M-1;b<S;b+=p){const x=g.getX(b),U=g.getX(b+1),D=fu(this,t,ul,d,x,U,b);D&&e.push(D)}if(this.isLineLoop){const b=g.getX(M-1),S=g.getX(y),x=fu(this,t,ul,d,b,S,M-1);x&&e.push(x)}}else{const y=Math.max(0,u.start),M=Math.min(_.count,u.start+u.count);for(let b=y,S=M-1;b<S;b+=p){const x=fu(this,t,ul,d,b,b+1,b);x&&e.push(x)}if(this.isLineLoop){const b=fu(this,t,ul,d,M-1,y,M-1);b&&e.push(b)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const o=e[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function fu(i,t,e,r,o,l,u){const f=i.geometry.attributes.position;if(Ou.fromBufferAttribute(f,o),Pu.fromBufferAttribute(f,l),e.distanceSqToSegment(Ou,Pu,Ud,q_)>r)return;Ud.applyMatrix4(i.matrixWorld);const p=t.ray.origin.distanceTo(Ud);if(!(p<t.near||p>t.far))return{distance:p,point:q_.clone().applyMatrix4(i.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:i}}const Y_=new ct,Z_=new ct;class HA extends BA{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,r=[];for(let o=0,l=e.count;o<l;o+=2)Y_.fromBufferAttribute(e,o),Z_.fromBufferAttribute(e,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Y_.distanceTo(Z_);t.setAttribute("lineDistance",new _a(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class l1 extends Ui{constructor(t,e,r=kr,o,l,u,f=ai,d=ai,p,g=yl,v=1){if(g!==yl&&g!==Sl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:e,depth:v};super(_,o,l,u,f,d,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new xm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class c1 extends Ui{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Vr extends Ta{constructor(t=1,e=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:r,heightSegments:o};const l=t/2,u=e/2,f=Math.floor(r),d=Math.floor(o),p=f+1,g=d+1,v=t/f,_=e/d,y=[],M=[],b=[],S=[];for(let x=0;x<g;x++){const U=x*_-u;for(let D=0;D<p;D++){const A=D*v-l;M.push(A,-U,0),b.push(0,0,1),S.push(D/f),S.push(1-x/d)}}for(let x=0;x<d;x++)for(let U=0;U<f;U++){const D=U+p*x,A=U+p*(x+1),N=U+1+p*(x+1),I=U+1+p*x;y.push(D,A,I),y.push(A,N,I)}this.setIndex(y),this.setAttribute("position",new _a(M,3)),this.setAttribute("normal",new _a(b,3)),this.setAttribute("uv",new _a(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vr(t.width,t.height,t.widthSegments,t.heightSegments)}}class hu extends Sa{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class GA extends Dl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=KT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class VA extends Dl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class kA extends Nu{constructor(t=-1,e=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-t,u=r+t,f=o+e,d=o-e;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=g*this.view.offsetY,d=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class XA extends Ti{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class WA{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function K_(i,t,e,r){const o=jA(r);switch(e){case Wy:return i*t;case qy:return i*t/o.components*o.byteLength;case gm:return i*t/o.components*o.byteLength;case Yy:return i*t*2/o.components*o.byteLength;case vm:return i*t*2/o.components*o.byteLength;case jy:return i*t*3/o.components*o.byteLength;case mi:return i*t*4/o.components*o.byteLength;case _m:return i*t*4/o.components*o.byteLength;case yu:case Su:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Eu:case Mu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case hp:case pp:return Math.max(i,16)*Math.max(t,8)/4;case fp:case dp:return Math.max(i,8)*Math.max(t,8)/2;case mp:case gp:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case vp:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _p:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xp:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case yp:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Sp:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ep:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Mp:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case bp:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Tp:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ap:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case wp:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Rp:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Cp:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Dp:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Up:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Lp:case Np:case Op:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Pp:case Ip:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Fp:case zp:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function jA(i){switch(i){case ya:case Gy:return{byteLength:1,components:1};case _l:case Vy:case ao:return{byteLength:2,components:1};case pm:case mm:return{byteLength:2,components:4};case kr:case dm:case Gi:return{byteLength:4,components:1};case ky:case Xy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function u1(){let i=null,t=!1,e=null,r=null;function o(l,u){e(l,u),r=i.requestAnimationFrame(o)}return{start:function(){t!==!0&&e!==null&&(r=i.requestAnimationFrame(o),t=!0)},stop:function(){i.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(l){e=l},setContext:function(l){i=l}}}function qA(i){const t=new WeakMap;function e(f,d){const p=f.array,g=f.usage,v=p.byteLength,_=i.createBuffer();i.bindBuffer(d,_),i.bufferData(d,p,g),f.onUploadCallback();let y;if(p instanceof Float32Array)y=i.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=i.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?y=i.HALF_FLOAT:y=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=i.SHORT;else if(p instanceof Uint32Array)y=i.UNSIGNED_INT;else if(p instanceof Int32Array)y=i.INT;else if(p instanceof Int8Array)y=i.BYTE;else if(p instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:v}}function r(f,d,p){const g=d.array,v=d.updateRanges;if(i.bindBuffer(p,f),v.length===0)i.bufferSubData(p,0,g);else{v.sort((y,M)=>y.start-M.start);let _=0;for(let y=1;y<v.length;y++){const M=v[_],b=v[y];b.start<=M.start+M.count+1?M.count=Math.max(M.count,b.start+b.count-M.start):(++_,v[_]=b)}v.length=_+1;for(let y=0,M=v.length;y<M;y++){const b=v[y];i.bufferSubData(p,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=t.get(f);d&&(i.deleteBuffer(d.buffer),t.delete(f))}function u(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=t.get(f);(!g||g.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=t.get(f);if(p===void 0)t.set(f,e(f,d));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,d),p.version=f.version}}return{get:o,remove:l,update:u}}var YA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ZA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,KA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$A=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,JA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,t2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,e2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,n2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,i2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,a2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,r2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,s2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,o2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,l2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,c2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,u2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,f2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,h2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,d2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,p2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,m2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,g2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,v2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,x2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,y2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,S2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,E2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,M2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,b2="gl_FragColor = linearToOutputTexel( gl_FragColor );",T2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,A2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,w2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,R2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,C2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,D2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,U2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,L2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,N2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,P2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,I2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,F2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,z2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,B2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,H2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,G2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,V2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,k2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,X2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,W2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,j2=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,q2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Y2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Z2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,K2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ew=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,iw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ow=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,uw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_w=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ew=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Mw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Aw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ww=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Dw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Uw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Lw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ow=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Iw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Fw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ww=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$w=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,eR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,iR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_R=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ER=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,TR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,AR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ve={alphahash_fragment:YA,alphahash_pars_fragment:ZA,alphamap_fragment:KA,alphamap_pars_fragment:$A,alphatest_fragment:QA,alphatest_pars_fragment:JA,aomap_fragment:t2,aomap_pars_fragment:e2,batching_pars_vertex:n2,batching_vertex:i2,begin_vertex:a2,beginnormal_vertex:r2,bsdfs:s2,iridescence_fragment:o2,bumpmap_pars_fragment:l2,clipping_planes_fragment:c2,clipping_planes_pars_fragment:u2,clipping_planes_pars_vertex:f2,clipping_planes_vertex:h2,color_fragment:d2,color_pars_fragment:p2,color_pars_vertex:m2,color_vertex:g2,common:v2,cube_uv_reflection_fragment:_2,defaultnormal_vertex:x2,displacementmap_pars_vertex:y2,displacementmap_vertex:S2,emissivemap_fragment:E2,emissivemap_pars_fragment:M2,colorspace_fragment:b2,colorspace_pars_fragment:T2,envmap_fragment:A2,envmap_common_pars_fragment:w2,envmap_pars_fragment:R2,envmap_pars_vertex:C2,envmap_physical_pars_fragment:H2,envmap_vertex:D2,fog_vertex:U2,fog_pars_vertex:L2,fog_fragment:N2,fog_pars_fragment:O2,gradientmap_pars_fragment:P2,lightmap_pars_fragment:I2,lights_lambert_fragment:F2,lights_lambert_pars_fragment:z2,lights_pars_begin:B2,lights_toon_fragment:G2,lights_toon_pars_fragment:V2,lights_phong_fragment:k2,lights_phong_pars_fragment:X2,lights_physical_fragment:W2,lights_physical_pars_fragment:j2,lights_fragment_begin:q2,lights_fragment_maps:Y2,lights_fragment_end:Z2,logdepthbuf_fragment:K2,logdepthbuf_pars_fragment:$2,logdepthbuf_pars_vertex:Q2,logdepthbuf_vertex:J2,map_fragment:tw,map_pars_fragment:ew,map_particle_fragment:nw,map_particle_pars_fragment:iw,metalnessmap_fragment:aw,metalnessmap_pars_fragment:rw,morphinstance_vertex:sw,morphcolor_vertex:ow,morphnormal_vertex:lw,morphtarget_pars_vertex:cw,morphtarget_vertex:uw,normal_fragment_begin:fw,normal_fragment_maps:hw,normal_pars_fragment:dw,normal_pars_vertex:pw,normal_vertex:mw,normalmap_pars_fragment:gw,clearcoat_normal_fragment_begin:vw,clearcoat_normal_fragment_maps:_w,clearcoat_pars_fragment:xw,iridescence_pars_fragment:yw,opaque_fragment:Sw,packing:Ew,premultiplied_alpha_fragment:Mw,project_vertex:bw,dithering_fragment:Tw,dithering_pars_fragment:Aw,roughnessmap_fragment:ww,roughnessmap_pars_fragment:Rw,shadowmap_pars_fragment:Cw,shadowmap_pars_vertex:Dw,shadowmap_vertex:Uw,shadowmask_pars_fragment:Lw,skinbase_vertex:Nw,skinning_pars_vertex:Ow,skinning_vertex:Pw,skinnormal_vertex:Iw,specularmap_fragment:Fw,specularmap_pars_fragment:zw,tonemapping_fragment:Bw,tonemapping_pars_fragment:Hw,transmission_fragment:Gw,transmission_pars_fragment:Vw,uv_pars_fragment:kw,uv_pars_vertex:Xw,uv_vertex:Ww,worldpos_vertex:jw,background_vert:qw,background_frag:Yw,backgroundCube_vert:Zw,backgroundCube_frag:Kw,cube_vert:$w,cube_frag:Qw,depth_vert:Jw,depth_frag:tR,distanceRGBA_vert:eR,distanceRGBA_frag:nR,equirect_vert:iR,equirect_frag:aR,linedashed_vert:rR,linedashed_frag:sR,meshbasic_vert:oR,meshbasic_frag:lR,meshlambert_vert:cR,meshlambert_frag:uR,meshmatcap_vert:fR,meshmatcap_frag:hR,meshnormal_vert:dR,meshnormal_frag:pR,meshphong_vert:mR,meshphong_frag:gR,meshphysical_vert:vR,meshphysical_frag:_R,meshtoon_vert:xR,meshtoon_frag:yR,points_vert:SR,points_frag:ER,shadow_vert:MR,shadow_frag:bR,sprite_vert:TR,sprite_frag:AR},Ft={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Bi={basic:{uniforms:Bn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Bn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Le(0)}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Bn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Bn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Bn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new Le(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Bn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Bn([Ft.points,Ft.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Bn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Bn([Ft.common,Ft.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Bn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Bn([Ft.sprite,Ft.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distanceRGBA:{uniforms:Bn([Ft.common,Ft.displacementmap,{referencePosition:{value:new ct},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distanceRGBA_vert,fragmentShader:ve.distanceRGBA_frag},shadow:{uniforms:Bn([Ft.lights,Ft.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};Bi.physical={uniforms:Bn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};const du={r:0,b:0,g:0},Nr=new Xr,wR=new dn;function RR(i,t,e,r,o,l,u){const f=new Le(0);let d=l===!0?0:1,p,g,v=null,_=0,y=null;function M(D){let A=D.isScene===!0?D.background:null;return A&&A.isTexture&&(A=(D.backgroundBlurriness>0?e:t).get(A)),A}function b(D){let A=!1;const N=M(D);N===null?x(f,d):N&&N.isColor&&(x(N,1),A=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,u):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(i.autoClear||A)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(D,A){const N=M(A);N&&(N.isCubeTexture||N.mapping===Gu)?(g===void 0&&(g=new gi(new Ul(1,1,1),new Sa({name:"BackgroundCubeMaterial",uniforms:to(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(I,z,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Nr.copy(A.backgroundRotation),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),g.material.uniforms.envMap.value=N,g.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(wR.makeRotationFromEuler(Nr)),g.material.toneMapped=De.getTransfer(N.colorSpace)!==Ge,(v!==N||_!==N.version||y!==i.toneMapping)&&(g.material.needsUpdate=!0,v=N,_=N.version,y=i.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):N&&N.isTexture&&(p===void 0&&(p=new gi(new Vr(2,2),new Sa({name:"BackgroundMaterial",uniforms:to(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=N,p.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,p.material.toneMapped=De.getTransfer(N.colorSpace)!==Ge,N.matrixAutoUpdate===!0&&N.updateMatrix(),p.material.uniforms.uvTransform.value.copy(N.matrix),(v!==N||_!==N.version||y!==i.toneMapping)&&(p.material.needsUpdate=!0,v=N,_=N.version,y=i.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function x(D,A){D.getRGB(du,r1(i)),r.buffers.color.setClear(du.r,du.g,du.b,A,u)}function U(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(D,A=1){f.set(D),d=A,x(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(D){d=D,x(f,d)},render:b,addToRenderList:S,dispose:U}}function CR(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),r={},o=_(null);let l=o,u=!1;function f(C,H,Z,lt,tt){let dt=!1;const F=v(lt,Z,H);l!==F&&(l=F,p(l.object)),dt=y(C,lt,Z,tt),dt&&M(C,lt,Z,tt),tt!==null&&t.update(tt,i.ELEMENT_ARRAY_BUFFER),(dt||u)&&(u=!1,A(C,H,Z,lt),tt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function d(){return i.createVertexArray()}function p(C){return i.bindVertexArray(C)}function g(C){return i.deleteVertexArray(C)}function v(C,H,Z){const lt=Z.wireframe===!0;let tt=r[C.id];tt===void 0&&(tt={},r[C.id]=tt);let dt=tt[H.id];dt===void 0&&(dt={},tt[H.id]=dt);let F=dt[lt];return F===void 0&&(F=_(d()),dt[lt]=F),F}function _(C){const H=[],Z=[],lt=[];for(let tt=0;tt<e;tt++)H[tt]=0,Z[tt]=0,lt[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Z,attributeDivisors:lt,object:C,attributes:{},index:null}}function y(C,H,Z,lt){const tt=l.attributes,dt=H.attributes;let F=0;const $=Z.getAttributes();for(const j in $)if($[j].location>=0){const P=tt[j];let et=dt[j];if(et===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(et=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(et=C.instanceColor)),P===void 0||P.attribute!==et||et&&P.data!==et.data)return!0;F++}return l.attributesNum!==F||l.index!==lt}function M(C,H,Z,lt){const tt={},dt=H.attributes;let F=0;const $=Z.getAttributes();for(const j in $)if($[j].location>=0){let P=dt[j];P===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(P=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(P=C.instanceColor));const et={};et.attribute=P,P&&P.data&&(et.data=P.data),tt[j]=et,F++}l.attributes=tt,l.attributesNum=F,l.index=lt}function b(){const C=l.newAttributes;for(let H=0,Z=C.length;H<Z;H++)C[H]=0}function S(C){x(C,0)}function x(C,H){const Z=l.newAttributes,lt=l.enabledAttributes,tt=l.attributeDivisors;Z[C]=1,lt[C]===0&&(i.enableVertexAttribArray(C),lt[C]=1),tt[C]!==H&&(i.vertexAttribDivisor(C,H),tt[C]=H)}function U(){const C=l.newAttributes,H=l.enabledAttributes;for(let Z=0,lt=H.length;Z<lt;Z++)H[Z]!==C[Z]&&(i.disableVertexAttribArray(Z),H[Z]=0)}function D(C,H,Z,lt,tt,dt,F){F===!0?i.vertexAttribIPointer(C,H,Z,tt,dt):i.vertexAttribPointer(C,H,Z,lt,tt,dt)}function A(C,H,Z,lt){b();const tt=lt.attributes,dt=Z.getAttributes(),F=H.defaultAttributeValues;for(const $ in dt){const j=dt[$];if(j.location>=0){let St=tt[$];if(St===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(St=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(St=C.instanceColor)),St!==void 0){const P=St.normalized,et=St.itemSize,yt=t.get(St);if(yt===void 0)continue;const Et=yt.buffer,Nt=yt.type,Vt=yt.bytesPerElement,it=Nt===i.INT||Nt===i.UNSIGNED_INT||St.gpuType===dm;if(St.isInterleavedBufferAttribute){const vt=St.data,Mt=vt.stride,$t=St.offset;if(vt.isInstancedInterleavedBuffer){for(let Yt=0;Yt<j.locationSize;Yt++)x(j.location+Yt,vt.meshPerAttribute);C.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Yt=0;Yt<j.locationSize;Yt++)S(j.location+Yt);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let Yt=0;Yt<j.locationSize;Yt++)D(j.location+Yt,et/j.locationSize,Nt,P,Mt*Vt,($t+et/j.locationSize*Yt)*Vt,it)}else{if(St.isInstancedBufferAttribute){for(let vt=0;vt<j.locationSize;vt++)x(j.location+vt,St.meshPerAttribute);C.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let vt=0;vt<j.locationSize;vt++)S(j.location+vt);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let vt=0;vt<j.locationSize;vt++)D(j.location+vt,et/j.locationSize,Nt,P,et*Vt,et/j.locationSize*vt*Vt,it)}}else if(F!==void 0){const P=F[$];if(P!==void 0)switch(P.length){case 2:i.vertexAttrib2fv(j.location,P);break;case 3:i.vertexAttrib3fv(j.location,P);break;case 4:i.vertexAttrib4fv(j.location,P);break;default:i.vertexAttrib1fv(j.location,P)}}}}U()}function N(){X();for(const C in r){const H=r[C];for(const Z in H){const lt=H[Z];for(const tt in lt)g(lt[tt].object),delete lt[tt];delete H[Z]}delete r[C]}}function I(C){if(r[C.id]===void 0)return;const H=r[C.id];for(const Z in H){const lt=H[Z];for(const tt in lt)g(lt[tt].object),delete lt[tt];delete H[Z]}delete r[C.id]}function z(C){for(const H in r){const Z=r[H];if(Z[C.id]===void 0)continue;const lt=Z[C.id];for(const tt in lt)g(lt[tt].object),delete lt[tt];delete Z[C.id]}}function X(){L(),u=!0,l!==o&&(l=o,p(l.object))}function L(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:X,resetDefaultState:L,dispose:N,releaseStatesOfGeometry:I,releaseStatesOfProgram:z,initAttributes:b,enableAttribute:S,disableUnusedAttributes:U}}function DR(i,t,e){let r;function o(p){r=p}function l(p,g){i.drawArrays(r,p,g),e.update(g,r,1)}function u(p,g,v){v!==0&&(i.drawArraysInstanced(r,p,g,v),e.update(g,r,v))}function f(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let y=0;for(let M=0;M<v;M++)y+=g[M];e.update(y,r,1)}function d(p,g,v,_){if(v===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<p.length;M++)u(p[M],g[M],_[M]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,g,0,_,0,v);let M=0;for(let b=0;b<v;b++)M+=g[b]*_[b];e.update(M,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function UR(i,t,e,r){let o;function l(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");o=i.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(z){return!(z!==mi&&r.convert(z)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(z){const X=z===ao&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==ya&&r.convert(z)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Gi&&!X)}function d(z){if(z==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=e.precision!==void 0?e.precision:"highp";const g=d(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=e.logarithmicDepthBuffer===!0,_=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),U=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),D=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=M>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:y,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:U,maxVaryings:D,maxFragmentUniforms:A,vertexTextures:N,maxSamples:I}}function LR(i){const t=this;let e=null,r=0,o=!1,l=!1;const u=new Pr,f=new pe,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const y=v.length!==0||_||r!==0||o;return o=_,r=v.length,y},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,_){e=g(v,_,0)},this.setState=function(v,_,y){const M=v.clippingPlanes,b=v.clipIntersection,S=v.clipShadows,x=i.get(v);if(!o||M===null||M.length===0||l&&!S)l?g(null):p();else{const U=l?0:r,D=U*4;let A=x.clippingState||null;d.value=A,A=g(M,_,D,y);for(let N=0;N!==D;++N)A[N]=e[N];x.clippingState=A,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=U}};function p(){d.value!==e&&(d.value=e,d.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(v,_,y,M){const b=v!==null?v.length:0;let S=null;if(b!==0){if(S=d.value,M!==!0||S===null){const x=y+b*4,U=_.matrixWorldInverse;f.getNormalMatrix(U),(S===null||S.length<x)&&(S=new Float32Array(x));for(let D=0,A=y;D!==b;++D,A+=4)u.copy(v[D]).applyMatrix4(U,f),u.normal.toArray(S,A),S[A+3]=u.constant}d.value=S,d.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,S}}function NR(i){let t=new WeakMap;function e(u,f){return f===op?u.mapping=$s:f===lp&&(u.mapping=Qs),u}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===op||f===lp)if(t.has(u)){const d=t.get(u).texture;return e(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const p=new LA(d.height);return p.fromEquirectangularTexture(i,u),t.set(u,p),u.addEventListener("dispose",o),e(p.texture,u.mapping)}else return null}}return u}function o(u){const f=u.target;f.removeEventListener("dispose",o);const d=t.get(f);d!==void 0&&(t.delete(f),d.dispose())}function l(){t=new WeakMap}return{get:r,dispose:l}}const Ws=4,$_=[.125,.215,.35,.446,.526,.582],Br=20,Ld=new kA,Q_=new Le;let Nd=null,Od=0,Pd=0,Id=!1;const Ir=(1+Math.sqrt(5))/2,Vs=1/Ir,J_=[new ct(-Ir,Vs,0),new ct(Ir,Vs,0),new ct(-Vs,0,Ir),new ct(Vs,0,Ir),new ct(0,Ir,-Vs),new ct(0,Ir,Vs),new ct(-1,1,-1),new ct(1,1,-1),new ct(-1,1,1),new ct(1,1,1)],OR=new ct;class tx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,r=.1,o=100,l={}){const{size:u=256,position:f=OR}=l;Nd=this._renderer.getRenderTarget(),Od=this._renderer.getActiveCubeFace(),Pd=this._renderer.getActiveMipmapLevel(),Id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(t,r,o,d,f),e>0&&this._blur(d,0,0,e),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ix(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Nd,Od,Pd),this._renderer.xr.enabled=Id,t.scissorTest=!1,pu(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$s||t.mapping===Qs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Nd=this._renderer.getRenderTarget(),Od=this._renderer.getActiveCubeFace(),Pd=this._renderer.getActiveMipmapLevel(),Id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=e||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,r={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:ao,format:mi,colorSpace:Js,depthBuffer:!1},o=ex(t,e,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ex(t,e,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=PR(l)),this._blurMaterial=IR(l,t,e)}return o}_compileMaterial(t){const e=new gi(this._lodPlanes[0],t);this._renderer.compile(e,Ld)}_sceneToCubeUV(t,e,r,o,l){const d=new Ti(90,1,e,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,y=v.toneMapping;v.getClearColor(Q_),v.toneMapping=rr,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null));const b=new n1({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1}),S=new gi(new Ul,b);let x=!1;const U=t.background;U?U.isColor&&(b.color.copy(U),t.background=null,x=!0):(b.color.copy(Q_),x=!0);for(let D=0;D<6;D++){const A=D%3;A===0?(d.up.set(0,p[D],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+g[D],l.y,l.z)):A===1?(d.up.set(0,0,p[D]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+g[D],l.z)):(d.up.set(0,p[D],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+g[D]));const N=this._cubeSize;pu(o,A*N,D>2?N:0,N,N),v.setRenderTarget(o),x&&v.render(S,d),v.render(t,d)}S.geometry.dispose(),S.material.dispose(),v.toneMapping=y,v.autoClear=_,t.background=U}_textureToCubeUV(t,e){const r=this._renderer,o=t.mapping===$s||t.mapping===Qs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=ix()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nx());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new gi(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=t;const d=this._cubeSize;pu(e,0,0,3*d,2*d),r.setRenderTarget(e),r.render(u,Ld)}_applyPMREM(t){const e=this._renderer,r=e.autoClear;e.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=J_[(o-l-1)%J_.length];this._blur(t,l-1,l,u,f)}e.autoClear=r}_blur(t,e,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(t,u,e,r,o,"latitudinal",l),this._halfBlur(u,t,r,r,o,"longitudinal",l)}_halfBlur(t,e,r,o,l,u,f){const d=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new gi(this._lodPlanes[o],p),_=p.uniforms,y=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*Br-1),b=l/M,S=isFinite(l)?1+Math.floor(g*b):Br;S>Br&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Br}`);const x=[];let U=0;for(let z=0;z<Br;++z){const X=z/b,L=Math.exp(-X*X/2);x.push(L),z===0?U+=L:z<S&&(U+=2*L)}for(let z=0;z<x.length;z++)x[z]=x[z]/U;_.envMap.value=t.texture,_.samples.value=S,_.weights.value=x,_.latitudinal.value=u==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:D}=this;_.dTheta.value=M,_.mipInt.value=D-r;const A=this._sizeLods[o],N=3*A*(o>D-Ws?o-D+Ws:0),I=4*(this._cubeSize-A);pu(e,N,I,3*A,2*A),d.setRenderTarget(e),d.render(v,Ld)}}function PR(i){const t=[],e=[],r=[];let o=i;const l=i-Ws+1+$_.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);e.push(f);let d=1/f;u>i-Ws?d=$_[u-i+Ws-1]:u===0&&(d=0),r.push(d);const p=1/(f-2),g=-p,v=1+p,_=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,M=6,b=3,S=2,x=1,U=new Float32Array(b*M*y),D=new Float32Array(S*M*y),A=new Float32Array(x*M*y);for(let I=0;I<y;I++){const z=I%3*2/3-1,X=I>2?0:-1,L=[z,X,0,z+2/3,X,0,z+2/3,X+1,0,z,X,0,z+2/3,X+1,0,z,X+1,0];U.set(L,b*M*I),D.set(_,S*M*I);const C=[I,I,I,I,I,I];A.set(C,x*M*I)}const N=new Ta;N.setAttribute("position",new Ci(U,b)),N.setAttribute("uv",new Ci(D,S)),N.setAttribute("faceIndex",new Ci(A,x)),t.push(N),o>Ws&&o--}return{lodPlanes:t,sizeLods:e,sigmas:r}}function ex(i,t,e){const r=new lr(i,t,e);return r.texture.mapping=Gu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function pu(i,t,e,r,o){i.viewport.set(t,e,r,o),i.scissor.set(t,e,r,o)}function IR(i,t,e){const r=new Float32Array(Br),o=new ct(0,1,0);return new Sa({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:ym(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function nx(){return new Sa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ym(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function ix(){return new Sa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ym(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function ym(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function FR(i){let t=new WeakMap,e=null;function r(f){if(f&&f.isTexture){const d=f.mapping,p=d===op||d===lp,g=d===$s||d===Qs;if(p||g){let v=t.get(f);const _=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return e===null&&(e=new tx(i)),v=p?e.fromEquirectangular(f,v):e.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,t.set(f,v),v.texture;if(v!==void 0)return v.texture;{const y=f.image;return p&&y&&y.height>0||g&&y&&o(y)?(e===null&&(e=new tx(i)),v=p?e.fromEquirectangular(f):e.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,t.set(f,v),f.addEventListener("dispose",l),v.texture):null}}}return f}function o(f){let d=0;const p=6;for(let g=0;g<p;g++)f[g]!==void 0&&d++;return d===p}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:r,dispose:u}}function zR(i){const t={};function e(r){if(t[r]!==void 0)return t[r];let o;switch(r){case"WEBGL_depth_texture":o=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=i.getExtension(r)}return t[r]=o,o}return{has:function(r){return e(r)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(r){const o=e(r);return o===null&&El("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function BR(i,t,e,r){const o={},l=new WeakMap;function u(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const M in _.attributes)t.remove(_.attributes[M]);_.removeEventListener("dispose",u),delete o[_.id];const y=l.get(_);y&&(t.remove(y),l.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function f(v,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,e.memory.geometries++),_}function d(v){const _=v.attributes;for(const y in _)t.update(_[y],i.ARRAY_BUFFER)}function p(v){const _=[],y=v.index,M=v.attributes.position;let b=0;if(y!==null){const U=y.array;b=y.version;for(let D=0,A=U.length;D<A;D+=3){const N=U[D+0],I=U[D+1],z=U[D+2];_.push(N,I,I,z,z,N)}}else if(M!==void 0){const U=M.array;b=M.version;for(let D=0,A=U.length/3-1;D<A;D+=3){const N=D+0,I=D+1,z=D+2;_.push(N,I,I,z,z,N)}}else return;const S=new(Ky(_)?a1:i1)(_,1);S.version=b;const x=l.get(v);x&&t.remove(x),l.set(v,S)}function g(v){const _=l.get(v);if(_){const y=v.index;y!==null&&_.version<y.version&&p(v)}else p(v);return l.get(v)}return{get:f,update:d,getWireframeAttribute:g}}function HR(i,t,e){let r;function o(_){r=_}let l,u;function f(_){l=_.type,u=_.bytesPerElement}function d(_,y){i.drawElements(r,y,l,_*u),e.update(y,r,1)}function p(_,y,M){M!==0&&(i.drawElementsInstanced(r,y,l,_*u,M),e.update(y,r,M))}function g(_,y,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,l,_,0,M);let S=0;for(let x=0;x<M;x++)S+=y[x];e.update(S,r,1)}function v(_,y,M,b){if(M===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<_.length;x++)p(_[x]/u,y[x],b[x]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,l,_,0,b,0,M);let x=0;for(let U=0;U<M;U++)x+=y[U]*b[U];e.update(x,r,1)}}this.setMode=o,this.setIndex=f,this.render=d,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function GR(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(e.calls++,u){case i.TRIANGLES:e.triangles+=f*(l/3);break;case i.LINES:e.lines+=f*(l/2);break;case i.LINE_STRIP:e.lines+=f*(l-1);break;case i.LINE_LOOP:e.lines+=f*l;break;case i.POINTS:e.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:o,update:r}}function VR(i,t,e){const r=new WeakMap,o=new rn;function l(u,f,d){const p=u.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=g!==void 0?g.length:0;let _=r.get(f);if(_===void 0||_.count!==v){let C=function(){X.dispose(),r.delete(f),f.removeEventListener("dispose",C)};var y=C;_!==void 0&&_.texture.dispose();const M=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],U=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let A=0;M===!0&&(A=1),b===!0&&(A=2),S===!0&&(A=3);let N=f.attributes.position.count*A,I=1;N>t.maxTextureSize&&(I=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const z=new Float32Array(N*I*4*v),X=new $y(z,N,I,v);X.type=Gi,X.needsUpdate=!0;const L=A*4;for(let H=0;H<v;H++){const Z=x[H],lt=U[H],tt=D[H],dt=N*I*4*H;for(let F=0;F<Z.count;F++){const $=F*L;M===!0&&(o.fromBufferAttribute(Z,F),z[dt+$+0]=o.x,z[dt+$+1]=o.y,z[dt+$+2]=o.z,z[dt+$+3]=0),b===!0&&(o.fromBufferAttribute(lt,F),z[dt+$+4]=o.x,z[dt+$+5]=o.y,z[dt+$+6]=o.z,z[dt+$+7]=0),S===!0&&(o.fromBufferAttribute(tt,F),z[dt+$+8]=o.x,z[dt+$+9]=o.y,z[dt+$+10]=o.z,z[dt+$+11]=tt.itemSize===4?o.w:1)}}_={count:v,texture:X,size:new fe(N,I)},r.set(f,_),f.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",u.morphTexture,e);else{let M=0;for(let S=0;S<p.length;S++)M+=p[S];const b=f.morphTargetsRelative?1:1-M;d.getUniforms().setValue(i,"morphTargetBaseInfluence",b),d.getUniforms().setValue(i,"morphTargetInfluences",p)}d.getUniforms().setValue(i,"morphTargetsTexture",_.texture,e),d.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:l}}function kR(i,t,e,r){let o=new WeakMap;function l(d){const p=r.render.frame,g=d.geometry,v=t.get(d,g);if(o.get(v)!==p&&(t.update(v),o.set(v,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),o.get(d)!==p&&(e.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,i.ARRAY_BUFFER),o.set(d,p))),d.isSkinnedMesh){const _=d.skeleton;o.get(_)!==p&&(_.update(),o.set(_,p))}return v}function u(){o=new WeakMap}function f(d){const p=d.target;p.removeEventListener("dispose",f),e.remove(p.instanceMatrix),p.instanceColor!==null&&e.remove(p.instanceColor)}return{update:l,dispose:u}}const f1=new Ui,ax=new l1(1,1),h1=new $y,d1=new mA,p1=new s1,rx=[],sx=[],ox=new Float32Array(16),lx=new Float32Array(9),cx=new Float32Array(4);function so(i,t,e){const r=i[0];if(r<=0||r>0)return i;const o=t*e;let l=rx[o];if(l===void 0&&(l=new Float32Array(o),rx[o]=l),t!==0){r.toArray(l,0);for(let u=1,f=0;u!==t;++u)f+=e,i[u].toArray(l,f)}return l}function _n(i,t){if(i.length!==t.length)return!1;for(let e=0,r=i.length;e<r;e++)if(i[e]!==t[e])return!1;return!0}function xn(i,t){for(let e=0,r=t.length;e<r;e++)i[e]=t[e]}function ku(i,t){let e=sx[t];e===void 0&&(e=new Int32Array(t),sx[t]=e);for(let r=0;r!==t;++r)e[r]=i.allocateTextureUnit();return e}function XR(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function WR(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_n(e,t))return;i.uniform2fv(this.addr,t),xn(e,t)}}function jR(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_n(e,t))return;i.uniform3fv(this.addr,t),xn(e,t)}}function qR(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_n(e,t))return;i.uniform4fv(this.addr,t),xn(e,t)}}function YR(i,t){const e=this.cache,r=t.elements;if(r===void 0){if(_n(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),xn(e,t)}else{if(_n(e,r))return;cx.set(r),i.uniformMatrix2fv(this.addr,!1,cx),xn(e,r)}}function ZR(i,t){const e=this.cache,r=t.elements;if(r===void 0){if(_n(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),xn(e,t)}else{if(_n(e,r))return;lx.set(r),i.uniformMatrix3fv(this.addr,!1,lx),xn(e,r)}}function KR(i,t){const e=this.cache,r=t.elements;if(r===void 0){if(_n(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),xn(e,t)}else{if(_n(e,r))return;ox.set(r),i.uniformMatrix4fv(this.addr,!1,ox),xn(e,r)}}function $R(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function QR(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_n(e,t))return;i.uniform2iv(this.addr,t),xn(e,t)}}function JR(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_n(e,t))return;i.uniform3iv(this.addr,t),xn(e,t)}}function tC(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_n(e,t))return;i.uniform4iv(this.addr,t),xn(e,t)}}function eC(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function nC(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_n(e,t))return;i.uniform2uiv(this.addr,t),xn(e,t)}}function iC(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_n(e,t))return;i.uniform3uiv(this.addr,t),xn(e,t)}}function aC(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_n(e,t))return;i.uniform4uiv(this.addr,t),xn(e,t)}}function rC(i,t,e){const r=this.cache,o=e.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o);let l;this.type===i.SAMPLER_2D_SHADOW?(ax.compareFunction=Zy,l=ax):l=f1,e.setTexture2D(t||l,o)}function sC(i,t,e){const r=this.cache,o=e.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),e.setTexture3D(t||d1,o)}function oC(i,t,e){const r=this.cache,o=e.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),e.setTextureCube(t||p1,o)}function lC(i,t,e){const r=this.cache,o=e.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),e.setTexture2DArray(t||h1,o)}function cC(i){switch(i){case 5126:return XR;case 35664:return WR;case 35665:return jR;case 35666:return qR;case 35674:return YR;case 35675:return ZR;case 35676:return KR;case 5124:case 35670:return $R;case 35667:case 35671:return QR;case 35668:case 35672:return JR;case 35669:case 35673:return tC;case 5125:return eC;case 36294:return nC;case 36295:return iC;case 36296:return aC;case 35678:case 36198:case 36298:case 36306:case 35682:return rC;case 35679:case 36299:case 36307:return sC;case 35680:case 36300:case 36308:case 36293:return oC;case 36289:case 36303:case 36311:case 36292:return lC}}function uC(i,t){i.uniform1fv(this.addr,t)}function fC(i,t){const e=so(t,this.size,2);i.uniform2fv(this.addr,e)}function hC(i,t){const e=so(t,this.size,3);i.uniform3fv(this.addr,e)}function dC(i,t){const e=so(t,this.size,4);i.uniform4fv(this.addr,e)}function pC(i,t){const e=so(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function mC(i,t){const e=so(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function gC(i,t){const e=so(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function vC(i,t){i.uniform1iv(this.addr,t)}function _C(i,t){i.uniform2iv(this.addr,t)}function xC(i,t){i.uniform3iv(this.addr,t)}function yC(i,t){i.uniform4iv(this.addr,t)}function SC(i,t){i.uniform1uiv(this.addr,t)}function EC(i,t){i.uniform2uiv(this.addr,t)}function MC(i,t){i.uniform3uiv(this.addr,t)}function bC(i,t){i.uniform4uiv(this.addr,t)}function TC(i,t,e){const r=this.cache,o=t.length,l=ku(e,o);_n(r,l)||(i.uniform1iv(this.addr,l),xn(r,l));for(let u=0;u!==o;++u)e.setTexture2D(t[u]||f1,l[u])}function AC(i,t,e){const r=this.cache,o=t.length,l=ku(e,o);_n(r,l)||(i.uniform1iv(this.addr,l),xn(r,l));for(let u=0;u!==o;++u)e.setTexture3D(t[u]||d1,l[u])}function wC(i,t,e){const r=this.cache,o=t.length,l=ku(e,o);_n(r,l)||(i.uniform1iv(this.addr,l),xn(r,l));for(let u=0;u!==o;++u)e.setTextureCube(t[u]||p1,l[u])}function RC(i,t,e){const r=this.cache,o=t.length,l=ku(e,o);_n(r,l)||(i.uniform1iv(this.addr,l),xn(r,l));for(let u=0;u!==o;++u)e.setTexture2DArray(t[u]||h1,l[u])}function CC(i){switch(i){case 5126:return uC;case 35664:return fC;case 35665:return hC;case 35666:return dC;case 35674:return pC;case 35675:return mC;case 35676:return gC;case 5124:case 35670:return vC;case 35667:case 35671:return _C;case 35668:case 35672:return xC;case 35669:case 35673:return yC;case 5125:return SC;case 36294:return EC;case 36295:return MC;case 36296:return bC;case 35678:case 36198:case 36298:case 36306:case 35682:return TC;case 35679:case 36299:case 36307:return AC;case 35680:case 36300:case 36308:case 36293:return wC;case 36289:case 36303:case 36311:case 36292:return RC}}class DC{constructor(t,e,r){this.id=t,this.addr=r,this.cache=[],this.type=e.type,this.setValue=cC(e.type)}}class UC{constructor(t,e,r){this.id=t,this.addr=r,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=CC(e.type)}}class LC{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(t,e[f.id],r)}}}const Fd=/(\w+)(\])?(\[|\.)?/g;function ux(i,t){i.seq.push(t),i.map[t.id]=t}function NC(i,t,e){const r=i.name,o=r.length;for(Fd.lastIndex=0;;){const l=Fd.exec(r),u=Fd.lastIndex;let f=l[1];const d=l[2]==="]",p=l[3];if(d&&(f=f|0),p===void 0||p==="["&&u+2===o){ux(e,p===void 0?new DC(f,i,t):new UC(f,i,t));break}else{let v=e.map[f];v===void 0&&(v=new LC(f),ux(e,v)),e=v}}}class Tu{constructor(t,e){this.seq=[],this.map={};const r=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=t.getActiveUniform(e,o),u=t.getUniformLocation(e,l.name);NC(l,u,this)}}setValue(t,e,r,o){const l=this.map[e];l!==void 0&&l.setValue(t,r,o)}setOptional(t,e,r){const o=e[r];o!==void 0&&this.setValue(t,r,o)}static upload(t,e,r,o){for(let l=0,u=e.length;l!==u;++l){const f=e[l],d=r[f.id];d.needsUpdate!==!1&&f.setValue(t,d.value,o)}}static seqWithValue(t,e){const r=[];for(let o=0,l=t.length;o!==l;++o){const u=t[o];u.id in e&&r.push(u)}return r}}function fx(i,t,e){const r=i.createShader(t);return i.shaderSource(r,e),i.compileShader(r),r}const OC=37297;let PC=0;function IC(i,t){const e=i.split(`
`),r=[],o=Math.max(t-6,0),l=Math.min(t+6,e.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===t?">":" "} ${f}: ${e[u]}`)}return r.join(`
`)}const hx=new pe;function FC(i){De._getMatrix(hx,De.workingColorSpace,i);const t=`mat3( ${hx.elements.map(e=>e.toFixed(4))} )`;switch(De.getTransfer(i)){case Du:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function dx(i,t,e){const r=i.getShaderParameter(t,i.COMPILE_STATUS),l=(i.getShaderInfoLog(t)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return e.toUpperCase()+`

`+l+`

`+IC(i.getShaderSource(t),f)}else return l}function zC(i,t){const e=FC(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function BC(i,t){let e;switch(t){case VT:e="Linear";break;case kT:e="Reinhard";break;case XT:e="Cineon";break;case WT:e="ACESFilmic";break;case qT:e="AgX";break;case YT:e="Neutral";break;case jT:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const mu=new ct;function HC(){De.getLuminanceCoefficients(mu);const i=mu.x.toFixed(4),t=mu.y.toFixed(4),e=mu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GC(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hl).join(`
`)}function VC(i){const t=[];for(const e in i){const r=i[e];r!==!1&&t.push("#define "+e+" "+r)}return t.join(`
`)}function kC(i,t){const e={},r=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=i.getActiveAttrib(t,o),u=l.name;let f=1;l.type===i.FLOAT_MAT2&&(f=2),l.type===i.FLOAT_MAT3&&(f=3),l.type===i.FLOAT_MAT4&&(f=4),e[u]={type:l.type,location:i.getAttribLocation(t,u),locationSize:f}}return e}function hl(i){return i!==""}function px(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mx(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const XC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hp(i){return i.replace(XC,jC)}const WC=new Map;function jC(i,t){let e=ve[t];if(e===void 0){const r=WC.get(t);if(r!==void 0)e=ve[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Hp(e)}const qC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gx(i){return i.replace(qC,YC)}function YC(i,t,e,r){let o="";for(let l=parseInt(t);l<parseInt(e);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function vx(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ZC(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===zy?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ST?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pa&&(t="SHADOWMAP_TYPE_VSM"),t}function KC(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case $s:case Qs:t="ENVMAP_TYPE_CUBE";break;case Gu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $C(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Qs:t="ENVMAP_MODE_REFRACTION";break}return t}function QC(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case By:t="ENVMAP_BLENDING_MULTIPLY";break;case HT:t="ENVMAP_BLENDING_MIX";break;case GT:t="ENVMAP_BLENDING_ADD";break}return t}function JC(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:r,maxMip:e}}function t3(i,t,e,r){const o=i.getContext(),l=e.defines;let u=e.vertexShader,f=e.fragmentShader;const d=ZC(e),p=KC(e),g=$C(e),v=QC(e),_=JC(e),y=GC(e),M=VC(l),b=o.createProgram();let S,x,U=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(S=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(hl).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(hl).join(`
`),x.length>0&&(x+=`
`)):(S=[vx(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+g:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hl).join(`
`),x=[vx(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.envMap?"#define "+g:"",e.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==rr?"#define TONE_MAPPING":"",e.toneMapping!==rr?ve.tonemapping_pars_fragment:"",e.toneMapping!==rr?BC("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,zC("linearToOutputTexel",e.outputColorSpace),HC(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hl).join(`
`)),u=Hp(u),u=px(u,e),u=mx(u,e),f=Hp(f),f=px(f,e),f=mx(f,e),u=gx(u),f=gx(f),e.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",e.glslVersion===w_?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===w_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const D=U+S+u,A=U+x+f,N=fx(o,o.VERTEX_SHADER,D),I=fx(o,o.FRAGMENT_SHADER,A);o.attachShader(b,N),o.attachShader(b,I),e.index0AttributeName!==void 0?o.bindAttribLocation(b,0,e.index0AttributeName):e.morphTargets===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function z(H){if(i.debug.checkShaderErrors){const Z=o.getProgramInfoLog(b)||"",lt=o.getShaderInfoLog(N)||"",tt=o.getShaderInfoLog(I)||"",dt=Z.trim(),F=lt.trim(),$=tt.trim();let j=!0,St=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,b,N,I);else{const P=dx(o,N,"vertex"),et=dx(o,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+dt+`
`+P+`
`+et)}else dt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",dt):(F===""||$==="")&&(St=!1);St&&(H.diagnostics={runnable:j,programLog:dt,vertexShader:{log:F,prefix:S},fragmentShader:{log:$,prefix:x}})}o.deleteShader(N),o.deleteShader(I),X=new Tu(o,b),L=kC(o,b)}let X;this.getUniforms=function(){return X===void 0&&z(this),X};let L;this.getAttributes=function(){return L===void 0&&z(this),L};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(b,OC)),C},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=PC++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=N,this.fragmentShader=I,this}let e3=0;class n3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,r=t.fragmentShader,o=this._getShaderStage(e),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(t);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const r of e)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let r=e.get(t);return r===void 0&&(r=new Set,e.set(t,r)),r}_getShaderStage(t){const e=this.shaderCache;let r=e.get(t);return r===void 0&&(r=new i3(t),e.set(t,r)),r}}class i3{constructor(t){this.id=e3++,this.code=t,this.usedTimes=0}}function a3(i,t,e,r,o,l,u){const f=new t1,d=new n3,p=new Set,g=[],v=o.logarithmicDepthBuffer,_=o.vertexTextures;let y=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(L){return p.add(L),L===0?"uv":`uv${L}`}function S(L,C,H,Z,lt){const tt=Z.fog,dt=lt.geometry,F=L.isMeshStandardMaterial?Z.environment:null,$=(L.isMeshStandardMaterial?e:t).get(L.envMap||F),j=$&&$.mapping===Gu?$.image.height:null,St=M[L.type];L.precision!==null&&(y=o.getMaxPrecision(L.precision),y!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",y,"instead."));const P=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,et=P!==void 0?P.length:0;let yt=0;dt.morphAttributes.position!==void 0&&(yt=1),dt.morphAttributes.normal!==void 0&&(yt=2),dt.morphAttributes.color!==void 0&&(yt=3);let Et,Nt,Vt,it;if(St){const we=Bi[St];Et=we.vertexShader,Nt=we.fragmentShader}else Et=L.vertexShader,Nt=L.fragmentShader,d.update(L),Vt=d.getVertexShaderID(L),it=d.getFragmentShaderID(L);const vt=i.getRenderTarget(),Mt=i.state.buffers.depth.getReversed(),$t=lt.isInstancedMesh===!0,Yt=lt.isBatchedMesh===!0,he=!!L.map,Je=!!L.matcap,G=!!$,Ne=!!L.aoMap,le=!!L.lightMap,ne=!!L.bumpMap,zt=!!L.normalMap,Te=!!L.displacementMap,kt=!!L.emissiveMap,ce=!!L.metalnessMap,Xe=!!L.roughnessMap,We=L.anisotropy>0,O=L.clearcoat>0,E=L.dispersion>0,V=L.iridescence>0,Q=L.sheen>0,ft=L.transmission>0,at=We&&!!L.anisotropyMap,Dt=O&&!!L.clearcoatMap,Ct=O&&!!L.clearcoatNormalMap,Ht=O&&!!L.clearcoatRoughnessMap,Wt=V&&!!L.iridescenceMap,bt=V&&!!L.iridescenceThicknessMap,Pt=Q&&!!L.sheenColorMap,Qt=Q&&!!L.sheenRoughnessMap,qt=!!L.specularMap,Lt=!!L.specularColorMap,ue=!!L.specularIntensityMap,W=ft&&!!L.transmissionMap,wt=ft&&!!L.thicknessMap,Ut=!!L.gradientMap,Bt=!!L.alphaMap,Tt=L.alphaTest>0,xt=!!L.alphaHash,jt=!!L.extensions;let oe=rr;L.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(oe=i.toneMapping);const Oe={shaderID:St,shaderType:L.type,shaderName:L.name,vertexShader:Et,fragmentShader:Nt,defines:L.defines,customVertexShaderID:Vt,customFragmentShaderID:it,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:y,batching:Yt,batchingColor:Yt&&lt._colorsTexture!==null,instancing:$t,instancingColor:$t&&lt.instanceColor!==null,instancingMorph:$t&&lt.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:vt===null?i.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Js,alphaToCoverage:!!L.alphaToCoverage,map:he,matcap:Je,envMap:G,envMapMode:G&&$.mapping,envMapCubeUVHeight:j,aoMap:Ne,lightMap:le,bumpMap:ne,normalMap:zt,displacementMap:_&&Te,emissiveMap:kt,normalMapObjectSpace:zt&&L.normalMapType===JT,normalMapTangentSpace:zt&&L.normalMapType===QT,metalnessMap:ce,roughnessMap:Xe,anisotropy:We,anisotropyMap:at,clearcoat:O,clearcoatMap:Dt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Ht,dispersion:E,iridescence:V,iridescenceMap:Wt,iridescenceThicknessMap:bt,sheen:Q,sheenColorMap:Pt,sheenRoughnessMap:Qt,specularMap:qt,specularColorMap:Lt,specularIntensityMap:ue,transmission:ft,transmissionMap:W,thicknessMap:wt,gradientMap:Ut,opaque:L.transparent===!1&&L.blending===qs&&L.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Tt,alphaHash:xt,combine:L.combine,mapUv:he&&b(L.map.channel),aoMapUv:Ne&&b(L.aoMap.channel),lightMapUv:le&&b(L.lightMap.channel),bumpMapUv:ne&&b(L.bumpMap.channel),normalMapUv:zt&&b(L.normalMap.channel),displacementMapUv:Te&&b(L.displacementMap.channel),emissiveMapUv:kt&&b(L.emissiveMap.channel),metalnessMapUv:ce&&b(L.metalnessMap.channel),roughnessMapUv:Xe&&b(L.roughnessMap.channel),anisotropyMapUv:at&&b(L.anisotropyMap.channel),clearcoatMapUv:Dt&&b(L.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&b(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ht&&b(L.clearcoatRoughnessMap.channel),iridescenceMapUv:Wt&&b(L.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&b(L.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&b(L.sheenColorMap.channel),sheenRoughnessMapUv:Qt&&b(L.sheenRoughnessMap.channel),specularMapUv:qt&&b(L.specularMap.channel),specularColorMapUv:Lt&&b(L.specularColorMap.channel),specularIntensityMapUv:ue&&b(L.specularIntensityMap.channel),transmissionMapUv:W&&b(L.transmissionMap.channel),thicknessMapUv:wt&&b(L.thicknessMap.channel),alphaMapUv:Bt&&b(L.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(zt||We),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:lt.isPoints===!0&&!!dt.attributes.uv&&(he||Bt),fog:!!tt,useFog:L.fog===!0,fogExp2:!!tt&&tt.isFogExp2,flatShading:L.flatShading===!0&&L.wireframe===!1,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Mt,skinning:lt.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:yt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:L.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:oe,decodeVideoTexture:he&&L.map.isVideoTexture===!0&&De.getTransfer(L.map.colorSpace)===Ge,decodeVideoTextureEmissive:kt&&L.emissiveMap.isVideoTexture===!0&&De.getTransfer(L.emissiveMap.colorSpace)===Ge,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===ma,flipSided:L.side===qn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:jt&&L.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&L.extensions.multiDraw===!0||Yt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return Oe.vertexUv1s=p.has(1),Oe.vertexUv2s=p.has(2),Oe.vertexUv3s=p.has(3),p.clear(),Oe}function x(L){const C=[];if(L.shaderID?C.push(L.shaderID):(C.push(L.customVertexShaderID),C.push(L.customFragmentShaderID)),L.defines!==void 0)for(const H in L.defines)C.push(H),C.push(L.defines[H]);return L.isRawShaderMaterial===!1&&(U(C,L),D(C,L),C.push(i.outputColorSpace)),C.push(L.customProgramCacheKey),C.join()}function U(L,C){L.push(C.precision),L.push(C.outputColorSpace),L.push(C.envMapMode),L.push(C.envMapCubeUVHeight),L.push(C.mapUv),L.push(C.alphaMapUv),L.push(C.lightMapUv),L.push(C.aoMapUv),L.push(C.bumpMapUv),L.push(C.normalMapUv),L.push(C.displacementMapUv),L.push(C.emissiveMapUv),L.push(C.metalnessMapUv),L.push(C.roughnessMapUv),L.push(C.anisotropyMapUv),L.push(C.clearcoatMapUv),L.push(C.clearcoatNormalMapUv),L.push(C.clearcoatRoughnessMapUv),L.push(C.iridescenceMapUv),L.push(C.iridescenceThicknessMapUv),L.push(C.sheenColorMapUv),L.push(C.sheenRoughnessMapUv),L.push(C.specularMapUv),L.push(C.specularColorMapUv),L.push(C.specularIntensityMapUv),L.push(C.transmissionMapUv),L.push(C.thicknessMapUv),L.push(C.combine),L.push(C.fogExp2),L.push(C.sizeAttenuation),L.push(C.morphTargetsCount),L.push(C.morphAttributeCount),L.push(C.numDirLights),L.push(C.numPointLights),L.push(C.numSpotLights),L.push(C.numSpotLightMaps),L.push(C.numHemiLights),L.push(C.numRectAreaLights),L.push(C.numDirLightShadows),L.push(C.numPointLightShadows),L.push(C.numSpotLightShadows),L.push(C.numSpotLightShadowsWithMaps),L.push(C.numLightProbes),L.push(C.shadowMapType),L.push(C.toneMapping),L.push(C.numClippingPlanes),L.push(C.numClipIntersection),L.push(C.depthPacking)}function D(L,C){f.disableAll(),C.supportsVertexTextures&&f.enable(0),C.instancing&&f.enable(1),C.instancingColor&&f.enable(2),C.instancingMorph&&f.enable(3),C.matcap&&f.enable(4),C.envMap&&f.enable(5),C.normalMapObjectSpace&&f.enable(6),C.normalMapTangentSpace&&f.enable(7),C.clearcoat&&f.enable(8),C.iridescence&&f.enable(9),C.alphaTest&&f.enable(10),C.vertexColors&&f.enable(11),C.vertexAlphas&&f.enable(12),C.vertexUv1s&&f.enable(13),C.vertexUv2s&&f.enable(14),C.vertexUv3s&&f.enable(15),C.vertexTangents&&f.enable(16),C.anisotropy&&f.enable(17),C.alphaHash&&f.enable(18),C.batching&&f.enable(19),C.dispersion&&f.enable(20),C.batchingColor&&f.enable(21),C.gradientMap&&f.enable(22),L.push(f.mask),f.disableAll(),C.fog&&f.enable(0),C.useFog&&f.enable(1),C.flatShading&&f.enable(2),C.logarithmicDepthBuffer&&f.enable(3),C.reversedDepthBuffer&&f.enable(4),C.skinning&&f.enable(5),C.morphTargets&&f.enable(6),C.morphNormals&&f.enable(7),C.morphColors&&f.enable(8),C.premultipliedAlpha&&f.enable(9),C.shadowMapEnabled&&f.enable(10),C.doubleSided&&f.enable(11),C.flipSided&&f.enable(12),C.useDepthPacking&&f.enable(13),C.dithering&&f.enable(14),C.transmission&&f.enable(15),C.sheen&&f.enable(16),C.opaque&&f.enable(17),C.pointsUvs&&f.enable(18),C.decodeVideoTexture&&f.enable(19),C.decodeVideoTextureEmissive&&f.enable(20),C.alphaToCoverage&&f.enable(21),L.push(f.mask)}function A(L){const C=M[L.type];let H;if(C){const Z=Bi[C];H=RA.clone(Z.uniforms)}else H=L.uniforms;return H}function N(L,C){let H;for(let Z=0,lt=g.length;Z<lt;Z++){const tt=g[Z];if(tt.cacheKey===C){H=tt,++H.usedTimes;break}}return H===void 0&&(H=new t3(i,C,L,l),g.push(H)),H}function I(L){if(--L.usedTimes===0){const C=g.indexOf(L);g[C]=g[g.length-1],g.pop(),L.destroy()}}function z(L){d.remove(L)}function X(){d.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:A,acquireProgram:N,releaseProgram:I,releaseShaderCache:z,programs:g,dispose:X}}function r3(){let i=new WeakMap;function t(u){return i.has(u)}function e(u){let f=i.get(u);return f===void 0&&(f={},i.set(u,f)),f}function r(u){i.delete(u)}function o(u,f,d){i.get(u)[f]=d}function l(){i=new WeakMap}return{has:t,get:e,remove:r,update:o,dispose:l}}function s3(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function _x(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function xx(){const i=[];let t=0;const e=[],r=[],o=[];function l(){t=0,e.length=0,r.length=0,o.length=0}function u(v,_,y,M,b,S){let x=i[t];return x===void 0?(x={id:v.id,object:v,geometry:_,material:y,groupOrder:M,renderOrder:v.renderOrder,z:b,group:S},i[t]=x):(x.id=v.id,x.object=v,x.geometry=_,x.material=y,x.groupOrder=M,x.renderOrder=v.renderOrder,x.z=b,x.group=S),t++,x}function f(v,_,y,M,b,S){const x=u(v,_,y,M,b,S);y.transmission>0?r.push(x):y.transparent===!0?o.push(x):e.push(x)}function d(v,_,y,M,b,S){const x=u(v,_,y,M,b,S);y.transmission>0?r.unshift(x):y.transparent===!0?o.unshift(x):e.unshift(x)}function p(v,_){e.length>1&&e.sort(v||s3),r.length>1&&r.sort(_||_x),o.length>1&&o.sort(_||_x)}function g(){for(let v=t,_=i.length;v<_;v++){const y=i[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:e,transmissive:r,transparent:o,init:l,push:f,unshift:d,finish:g,sort:p}}function o3(){let i=new WeakMap;function t(r,o){const l=i.get(r);let u;return l===void 0?(u=new xx,i.set(r,[u])):o>=l.length?(u=new xx,l.push(u)):u=l[o],u}function e(){i=new WeakMap}return{get:t,dispose:e}}function l3(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new ct,color:new Le};break;case"SpotLight":e={position:new ct,direction:new ct,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new ct,color:new Le,distance:0,decay:0};break;case"HemisphereLight":e={direction:new ct,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":e={color:new Le,position:new ct,halfWidth:new ct,halfHeight:new ct};break}return i[t.id]=e,e}}}function c3(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let u3=0;function f3(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function h3(i){const t=new l3,e=c3(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ct);const o=new ct,l=new dn,u=new dn;function f(p){let g=0,v=0,_=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let y=0,M=0,b=0,S=0,x=0,U=0,D=0,A=0,N=0,I=0,z=0;p.sort(f3);for(let L=0,C=p.length;L<C;L++){const H=p[L],Z=H.color,lt=H.intensity,tt=H.distance,dt=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=Z.r*lt,v+=Z.g*lt,_+=Z.b*lt;else if(H.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(H.sh.coefficients[F],lt);z++}else if(H.isDirectionalLight){const F=t.get(H);if(F.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const $=H.shadow,j=e.get(H);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,r.directionalShadow[y]=j,r.directionalShadowMap[y]=dt,r.directionalShadowMatrix[y]=H.shadow.matrix,U++}r.directional[y]=F,y++}else if(H.isSpotLight){const F=t.get(H);F.position.setFromMatrixPosition(H.matrixWorld),F.color.copy(Z).multiplyScalar(lt),F.distance=tt,F.coneCos=Math.cos(H.angle),F.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),F.decay=H.decay,r.spot[b]=F;const $=H.shadow;if(H.map&&(r.spotLightMap[N]=H.map,N++,$.updateMatrices(H),H.castShadow&&I++),r.spotLightMatrix[b]=$.matrix,H.castShadow){const j=e.get(H);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,r.spotShadow[b]=j,r.spotShadowMap[b]=dt,A++}b++}else if(H.isRectAreaLight){const F=t.get(H);F.color.copy(Z).multiplyScalar(lt),F.halfWidth.set(H.width*.5,0,0),F.halfHeight.set(0,H.height*.5,0),r.rectArea[S]=F,S++}else if(H.isPointLight){const F=t.get(H);if(F.color.copy(H.color).multiplyScalar(H.intensity),F.distance=H.distance,F.decay=H.decay,H.castShadow){const $=H.shadow,j=e.get(H);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,j.shadowCameraNear=$.camera.near,j.shadowCameraFar=$.camera.far,r.pointShadow[M]=j,r.pointShadowMap[M]=dt,r.pointShadowMatrix[M]=H.shadow.matrix,D++}r.point[M]=F,M++}else if(H.isHemisphereLight){const F=t.get(H);F.skyColor.copy(H.color).multiplyScalar(lt),F.groundColor.copy(H.groundColor).multiplyScalar(lt),r.hemi[x]=F,x++}}S>0&&(i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ft.LTC_FLOAT_1,r.rectAreaLTC2=Ft.LTC_FLOAT_2):(r.rectAreaLTC1=Ft.LTC_HALF_1,r.rectAreaLTC2=Ft.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=_;const X=r.hash;(X.directionalLength!==y||X.pointLength!==M||X.spotLength!==b||X.rectAreaLength!==S||X.hemiLength!==x||X.numDirectionalShadows!==U||X.numPointShadows!==D||X.numSpotShadows!==A||X.numSpotMaps!==N||X.numLightProbes!==z)&&(r.directional.length=y,r.spot.length=b,r.rectArea.length=S,r.point.length=M,r.hemi.length=x,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=A+N-I,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=z,X.directionalLength=y,X.pointLength=M,X.spotLength=b,X.rectAreaLength=S,X.hemiLength=x,X.numDirectionalShadows=U,X.numPointShadows=D,X.numSpotShadows=A,X.numSpotMaps=N,X.numLightProbes=z,r.version=u3++)}function d(p,g){let v=0,_=0,y=0,M=0,b=0;const S=g.matrixWorldInverse;for(let x=0,U=p.length;x<U;x++){const D=p[x];if(D.isDirectionalLight){const A=r.directional[v];A.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(S),v++}else if(D.isSpotLight){const A=r.spot[y];A.position.setFromMatrixPosition(D.matrixWorld),A.position.applyMatrix4(S),A.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(S),y++}else if(D.isRectAreaLight){const A=r.rectArea[M];A.position.setFromMatrixPosition(D.matrixWorld),A.position.applyMatrix4(S),u.identity(),l.copy(D.matrixWorld),l.premultiply(S),u.extractRotation(l),A.halfWidth.set(D.width*.5,0,0),A.halfHeight.set(0,D.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),M++}else if(D.isPointLight){const A=r.point[_];A.position.setFromMatrixPosition(D.matrixWorld),A.position.applyMatrix4(S),_++}else if(D.isHemisphereLight){const A=r.hemi[b];A.direction.setFromMatrixPosition(D.matrixWorld),A.direction.transformDirection(S),b++}}}return{setup:f,setupView:d,state:r}}function yx(i){const t=new h3(i),e=[],r=[];function o(g){p.camera=g,e.length=0,r.length=0}function l(g){e.push(g)}function u(g){r.push(g)}function f(){t.setup(e)}function d(g){t.setupView(e,g)}const p={lightsArray:e,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:u}}function d3(i){let t=new WeakMap;function e(o,l=0){const u=t.get(o);let f;return u===void 0?(f=new yx(i),t.set(o,[f])):l>=u.length?(f=new yx(i),u.push(f)):f=u[l],f}function r(){t=new WeakMap}return{get:e,dispose:r}}const p3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function g3(i,t,e){let r=new o1;const o=new fe,l=new fe,u=new rn,f=new GA({depthPacking:$T}),d=new VA,p={},g=e.maxTextureSize,v={[or]:qn,[qn]:or,[ma]:ma},_=new Sa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:p3,fragmentShader:m3}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const M=new Ta;M.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new gi(M,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zy;let x=this.type;this.render=function(I,z,X){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||I.length===0)return;const L=i.getRenderTarget(),C=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(ar),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const lt=x!==pa&&this.type===pa,tt=x===pa&&this.type!==pa;for(let dt=0,F=I.length;dt<F;dt++){const $=I[dt],j=$.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;o.copy(j.mapSize);const St=j.getFrameExtents();if(o.multiply(St),l.copy(j.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/St.x),o.x=l.x*St.x,j.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/St.y),o.y=l.y*St.y,j.mapSize.y=l.y)),j.map===null||lt===!0||tt===!0){const et=this.type!==pa?{minFilter:ai,magFilter:ai}:{};j.map!==null&&j.map.dispose(),j.map=new lr(o.x,o.y,et),j.map.texture.name=$.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();const P=j.getViewportCount();for(let et=0;et<P;et++){const yt=j.getViewport(et);u.set(l.x*yt.x,l.y*yt.y,l.x*yt.z,l.y*yt.w),Z.viewport(u),j.updateMatrices($,et),r=j.getFrustum(),A(z,X,j.camera,$,this.type)}j.isPointLightShadow!==!0&&this.type===pa&&U(j,X),j.needsUpdate=!1}x=this.type,S.needsUpdate=!1,i.setRenderTarget(L,C,H)};function U(I,z){const X=t.update(b);_.defines.VSM_SAMPLES!==I.blurSamples&&(_.defines.VSM_SAMPLES=I.blurSamples,y.defines.VSM_SAMPLES=I.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new lr(o.x,o.y)),_.uniforms.shadow_pass.value=I.map.texture,_.uniforms.resolution.value=I.mapSize,_.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(z,null,X,_,b,null),y.uniforms.shadow_pass.value=I.mapPass.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(z,null,X,y,b,null)}function D(I,z,X,L){let C=null;const H=X.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(H!==void 0)C=H;else if(C=X.isPointLight===!0?d:f,i.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const Z=C.uuid,lt=z.uuid;let tt=p[Z];tt===void 0&&(tt={},p[Z]=tt);let dt=tt[lt];dt===void 0&&(dt=C.clone(),tt[lt]=dt,z.addEventListener("dispose",N)),C=dt}if(C.visible=z.visible,C.wireframe=z.wireframe,L===pa?C.side=z.shadowSide!==null?z.shadowSide:z.side:C.side=z.shadowSide!==null?z.shadowSide:v[z.side],C.alphaMap=z.alphaMap,C.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,C.map=z.map,C.clipShadows=z.clipShadows,C.clippingPlanes=z.clippingPlanes,C.clipIntersection=z.clipIntersection,C.displacementMap=z.displacementMap,C.displacementScale=z.displacementScale,C.displacementBias=z.displacementBias,C.wireframeLinewidth=z.wireframeLinewidth,C.linewidth=z.linewidth,X.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const Z=i.properties.get(C);Z.light=X}return C}function A(I,z,X,L,C){if(I.visible===!1)return;if(I.layers.test(z.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&C===pa)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,I.matrixWorld);const lt=t.update(I),tt=I.material;if(Array.isArray(tt)){const dt=lt.groups;for(let F=0,$=dt.length;F<$;F++){const j=dt[F],St=tt[j.materialIndex];if(St&&St.visible){const P=D(I,St,L,C);I.onBeforeShadow(i,I,z,X,lt,P,j),i.renderBufferDirect(X,null,lt,P,I,j),I.onAfterShadow(i,I,z,X,lt,P,j)}}}else if(tt.visible){const dt=D(I,tt,L,C);I.onBeforeShadow(i,I,z,X,lt,dt,null),i.renderBufferDirect(X,null,lt,dt,I,null),I.onAfterShadow(i,I,z,X,lt,dt,null)}}const Z=I.children;for(let lt=0,tt=Z.length;lt<tt;lt++)A(Z[lt],z,X,L,C)}function N(I){I.target.removeEventListener("dispose",N);for(const X in p){const L=p[X],C=I.target.uuid;C in L&&(L[C].dispose(),delete L[C])}}}const v3={[tp]:ep,[np]:rp,[ip]:sp,[Ks]:ap,[ep]:tp,[rp]:np,[sp]:ip,[ap]:Ks};function _3(i,t){function e(){let W=!1;const wt=new rn;let Ut=null;const Bt=new rn(0,0,0,0);return{setMask:function(Tt){Ut!==Tt&&!W&&(i.colorMask(Tt,Tt,Tt,Tt),Ut=Tt)},setLocked:function(Tt){W=Tt},setClear:function(Tt,xt,jt,oe,Oe){Oe===!0&&(Tt*=oe,xt*=oe,jt*=oe),wt.set(Tt,xt,jt,oe),Bt.equals(wt)===!1&&(i.clearColor(Tt,xt,jt,oe),Bt.copy(wt))},reset:function(){W=!1,Ut=null,Bt.set(-1,0,0,0)}}}function r(){let W=!1,wt=!1,Ut=null,Bt=null,Tt=null;return{setReversed:function(xt){if(wt!==xt){const jt=t.get("EXT_clip_control");xt?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT),wt=xt;const oe=Tt;Tt=null,this.setClear(oe)}},getReversed:function(){return wt},setTest:function(xt){xt?vt(i.DEPTH_TEST):Mt(i.DEPTH_TEST)},setMask:function(xt){Ut!==xt&&!W&&(i.depthMask(xt),Ut=xt)},setFunc:function(xt){if(wt&&(xt=v3[xt]),Bt!==xt){switch(xt){case tp:i.depthFunc(i.NEVER);break;case ep:i.depthFunc(i.ALWAYS);break;case np:i.depthFunc(i.LESS);break;case Ks:i.depthFunc(i.LEQUAL);break;case ip:i.depthFunc(i.EQUAL);break;case ap:i.depthFunc(i.GEQUAL);break;case rp:i.depthFunc(i.GREATER);break;case sp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Bt=xt}},setLocked:function(xt){W=xt},setClear:function(xt){Tt!==xt&&(wt&&(xt=1-xt),i.clearDepth(xt),Tt=xt)},reset:function(){W=!1,Ut=null,Bt=null,Tt=null,wt=!1}}}function o(){let W=!1,wt=null,Ut=null,Bt=null,Tt=null,xt=null,jt=null,oe=null,Oe=null;return{setTest:function(we){W||(we?vt(i.STENCIL_TEST):Mt(i.STENCIL_TEST))},setMask:function(we){wt!==we&&!W&&(i.stencilMask(we),wt=we)},setFunc:function(we,vi,pn){(Ut!==we||Bt!==vi||Tt!==pn)&&(i.stencilFunc(we,vi,pn),Ut=we,Bt=vi,Tt=pn)},setOp:function(we,vi,pn){(xt!==we||jt!==vi||oe!==pn)&&(i.stencilOp(we,vi,pn),xt=we,jt=vi,oe=pn)},setLocked:function(we){W=we},setClear:function(we){Oe!==we&&(i.clearStencil(we),Oe=we)},reset:function(){W=!1,wt=null,Ut=null,Bt=null,Tt=null,xt=null,jt=null,oe=null,Oe=null}}}const l=new e,u=new r,f=new o,d=new WeakMap,p=new WeakMap;let g={},v={},_=new WeakMap,y=[],M=null,b=!1,S=null,x=null,U=null,D=null,A=null,N=null,I=null,z=new Le(0,0,0),X=0,L=!1,C=null,H=null,Z=null,lt=null,tt=null;const dt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,$=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(j)[1]),F=$>=1):j.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),F=$>=2);let St=null,P={};const et=i.getParameter(i.SCISSOR_BOX),yt=i.getParameter(i.VIEWPORT),Et=new rn().fromArray(et),Nt=new rn().fromArray(yt);function Vt(W,wt,Ut,Bt){const Tt=new Uint8Array(4),xt=i.createTexture();i.bindTexture(W,xt),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let jt=0;jt<Ut;jt++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(wt,0,i.RGBA,1,1,Bt,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(wt+jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return xt}const it={};it[i.TEXTURE_2D]=Vt(i.TEXTURE_2D,i.TEXTURE_2D,1),it[i.TEXTURE_CUBE_MAP]=Vt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[i.TEXTURE_2D_ARRAY]=Vt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),it[i.TEXTURE_3D]=Vt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),vt(i.DEPTH_TEST),u.setFunc(Ks),ne(!1),zt(E_),vt(i.CULL_FACE),Ne(ar);function vt(W){g[W]!==!0&&(i.enable(W),g[W]=!0)}function Mt(W){g[W]!==!1&&(i.disable(W),g[W]=!1)}function $t(W,wt){return v[W]!==wt?(i.bindFramebuffer(W,wt),v[W]=wt,W===i.DRAW_FRAMEBUFFER&&(v[i.FRAMEBUFFER]=wt),W===i.FRAMEBUFFER&&(v[i.DRAW_FRAMEBUFFER]=wt),!0):!1}function Yt(W,wt){let Ut=y,Bt=!1;if(W){Ut=_.get(wt),Ut===void 0&&(Ut=[],_.set(wt,Ut));const Tt=W.textures;if(Ut.length!==Tt.length||Ut[0]!==i.COLOR_ATTACHMENT0){for(let xt=0,jt=Tt.length;xt<jt;xt++)Ut[xt]=i.COLOR_ATTACHMENT0+xt;Ut.length=Tt.length,Bt=!0}}else Ut[0]!==i.BACK&&(Ut[0]=i.BACK,Bt=!0);Bt&&i.drawBuffers(Ut)}function he(W){return M!==W?(i.useProgram(W),M=W,!0):!1}const Je={[zr]:i.FUNC_ADD,[MT]:i.FUNC_SUBTRACT,[bT]:i.FUNC_REVERSE_SUBTRACT};Je[TT]=i.MIN,Je[AT]=i.MAX;const G={[wT]:i.ZERO,[RT]:i.ONE,[CT]:i.SRC_COLOR,[Qd]:i.SRC_ALPHA,[PT]:i.SRC_ALPHA_SATURATE,[NT]:i.DST_COLOR,[UT]:i.DST_ALPHA,[DT]:i.ONE_MINUS_SRC_COLOR,[Jd]:i.ONE_MINUS_SRC_ALPHA,[OT]:i.ONE_MINUS_DST_COLOR,[LT]:i.ONE_MINUS_DST_ALPHA,[IT]:i.CONSTANT_COLOR,[FT]:i.ONE_MINUS_CONSTANT_COLOR,[zT]:i.CONSTANT_ALPHA,[BT]:i.ONE_MINUS_CONSTANT_ALPHA};function Ne(W,wt,Ut,Bt,Tt,xt,jt,oe,Oe,we){if(W===ar){b===!0&&(Mt(i.BLEND),b=!1);return}if(b===!1&&(vt(i.BLEND),b=!0),W!==ET){if(W!==S||we!==L){if((x!==zr||A!==zr)&&(i.blendEquation(i.FUNC_ADD),x=zr,A=zr),we)switch(W){case qs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $d:i.blendFunc(i.ONE,i.ONE);break;case M_:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case b_:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case qs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $d:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case M_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case b_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}U=null,D=null,N=null,I=null,z.set(0,0,0),X=0,S=W,L=we}return}Tt=Tt||wt,xt=xt||Ut,jt=jt||Bt,(wt!==x||Tt!==A)&&(i.blendEquationSeparate(Je[wt],Je[Tt]),x=wt,A=Tt),(Ut!==U||Bt!==D||xt!==N||jt!==I)&&(i.blendFuncSeparate(G[Ut],G[Bt],G[xt],G[jt]),U=Ut,D=Bt,N=xt,I=jt),(oe.equals(z)===!1||Oe!==X)&&(i.blendColor(oe.r,oe.g,oe.b,Oe),z.copy(oe),X=Oe),S=W,L=!1}function le(W,wt){W.side===ma?Mt(i.CULL_FACE):vt(i.CULL_FACE);let Ut=W.side===qn;wt&&(Ut=!Ut),ne(Ut),W.blending===qs&&W.transparent===!1?Ne(ar):Ne(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),l.setMask(W.colorWrite);const Bt=W.stencilWrite;f.setTest(Bt),Bt&&(f.setMask(W.stencilWriteMask),f.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),f.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),kt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?vt(i.SAMPLE_ALPHA_TO_COVERAGE):Mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ne(W){C!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),C=W)}function zt(W){W!==xT?(vt(i.CULL_FACE),W!==H&&(W===E_?i.cullFace(i.BACK):W===yT?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Mt(i.CULL_FACE),H=W}function Te(W){W!==Z&&(F&&i.lineWidth(W),Z=W)}function kt(W,wt,Ut){W?(vt(i.POLYGON_OFFSET_FILL),(lt!==wt||tt!==Ut)&&(i.polygonOffset(wt,Ut),lt=wt,tt=Ut)):Mt(i.POLYGON_OFFSET_FILL)}function ce(W){W?vt(i.SCISSOR_TEST):Mt(i.SCISSOR_TEST)}function Xe(W){W===void 0&&(W=i.TEXTURE0+dt-1),St!==W&&(i.activeTexture(W),St=W)}function We(W,wt,Ut){Ut===void 0&&(St===null?Ut=i.TEXTURE0+dt-1:Ut=St);let Bt=P[Ut];Bt===void 0&&(Bt={type:void 0,texture:void 0},P[Ut]=Bt),(Bt.type!==W||Bt.texture!==wt)&&(St!==Ut&&(i.activeTexture(Ut),St=Ut),i.bindTexture(W,wt||it[W]),Bt.type=W,Bt.texture=wt)}function O(){const W=P[St];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{i.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function V(){try{i.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Q(){try{i.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ft(){try{i.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function at(){try{i.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Dt(){try{i.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ct(){try{i.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ht(){try{i.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Wt(){try{i.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function bt(){try{i.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Pt(W){Et.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),Et.copy(W))}function Qt(W){Nt.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),Nt.copy(W))}function qt(W,wt){let Ut=p.get(wt);Ut===void 0&&(Ut=new WeakMap,p.set(wt,Ut));let Bt=Ut.get(W);Bt===void 0&&(Bt=i.getUniformBlockIndex(wt,W.name),Ut.set(W,Bt))}function Lt(W,wt){const Bt=p.get(wt).get(W);d.get(wt)!==Bt&&(i.uniformBlockBinding(wt,Bt,W.__bindingPointIndex),d.set(wt,Bt))}function ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),u.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),g={},St=null,P={},v={},_=new WeakMap,y=[],M=null,b=!1,S=null,x=null,U=null,D=null,A=null,N=null,I=null,z=new Le(0,0,0),X=0,L=!1,C=null,H=null,Z=null,lt=null,tt=null,Et.set(0,0,i.canvas.width,i.canvas.height),Nt.set(0,0,i.canvas.width,i.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:vt,disable:Mt,bindFramebuffer:$t,drawBuffers:Yt,useProgram:he,setBlending:Ne,setMaterial:le,setFlipSided:ne,setCullFace:zt,setLineWidth:Te,setPolygonOffset:kt,setScissorTest:ce,activeTexture:Xe,bindTexture:We,unbindTexture:O,compressedTexImage2D:E,compressedTexImage3D:V,texImage2D:Wt,texImage3D:bt,updateUBOMapping:qt,uniformBlockBinding:Lt,texStorage2D:Ct,texStorage3D:Ht,texSubImage2D:Q,texSubImage3D:ft,compressedTexSubImage2D:at,compressedTexSubImage3D:Dt,scissor:Pt,viewport:Qt,reset:ue}}function x3(i,t,e,r,o,l,u){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new fe,g=new WeakMap;let v;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(O,E){return y?new OffscreenCanvas(O,E):Lu("canvas")}function b(O,E,V){let Q=1;const ft=We(O);if((ft.width>V||ft.height>V)&&(Q=V/Math.max(ft.width,ft.height)),Q<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const at=Math.floor(Q*ft.width),Dt=Math.floor(Q*ft.height);v===void 0&&(v=M(at,Dt));const Ct=E?M(at,Dt):v;return Ct.width=at,Ct.height=Dt,Ct.getContext("2d").drawImage(O,0,0,at,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ft.width+"x"+ft.height+") to ("+at+"x"+Dt+")."),Ct}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ft.width+"x"+ft.height+")."),O;return O}function S(O){return O.generateMipmaps}function x(O){i.generateMipmap(O)}function U(O){return O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?i.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function D(O,E,V,Q,ft=!1){if(O!==null){if(i[O]!==void 0)return i[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let at=E;if(E===i.RED&&(V===i.FLOAT&&(at=i.R32F),V===i.HALF_FLOAT&&(at=i.R16F),V===i.UNSIGNED_BYTE&&(at=i.R8)),E===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(at=i.R8UI),V===i.UNSIGNED_SHORT&&(at=i.R16UI),V===i.UNSIGNED_INT&&(at=i.R32UI),V===i.BYTE&&(at=i.R8I),V===i.SHORT&&(at=i.R16I),V===i.INT&&(at=i.R32I)),E===i.RG&&(V===i.FLOAT&&(at=i.RG32F),V===i.HALF_FLOAT&&(at=i.RG16F),V===i.UNSIGNED_BYTE&&(at=i.RG8)),E===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(at=i.RG8UI),V===i.UNSIGNED_SHORT&&(at=i.RG16UI),V===i.UNSIGNED_INT&&(at=i.RG32UI),V===i.BYTE&&(at=i.RG8I),V===i.SHORT&&(at=i.RG16I),V===i.INT&&(at=i.RG32I)),E===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(at=i.RGB8UI),V===i.UNSIGNED_SHORT&&(at=i.RGB16UI),V===i.UNSIGNED_INT&&(at=i.RGB32UI),V===i.BYTE&&(at=i.RGB8I),V===i.SHORT&&(at=i.RGB16I),V===i.INT&&(at=i.RGB32I)),E===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(at=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(at=i.RGBA16UI),V===i.UNSIGNED_INT&&(at=i.RGBA32UI),V===i.BYTE&&(at=i.RGBA8I),V===i.SHORT&&(at=i.RGBA16I),V===i.INT&&(at=i.RGBA32I)),E===i.RGB&&(V===i.UNSIGNED_INT_5_9_9_9_REV&&(at=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(at=i.R11F_G11F_B10F)),E===i.RGBA){const Dt=ft?Du:De.getTransfer(Q);V===i.FLOAT&&(at=i.RGBA32F),V===i.HALF_FLOAT&&(at=i.RGBA16F),V===i.UNSIGNED_BYTE&&(at=Dt===Ge?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(at=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(at=i.RGB5_A1)}return(at===i.R16F||at===i.R32F||at===i.RG16F||at===i.RG32F||at===i.RGBA16F||at===i.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function A(O,E){let V;return O?E===null||E===kr||E===xl?V=i.DEPTH24_STENCIL8:E===Gi?V=i.DEPTH32F_STENCIL8:E===_l&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===kr||E===xl?V=i.DEPTH_COMPONENT24:E===Gi?V=i.DEPTH_COMPONENT32F:E===_l&&(V=i.DEPTH_COMPONENT16),V}function N(O,E){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==ai&&O.minFilter!==jn?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function I(O){const E=O.target;E.removeEventListener("dispose",I),X(E),E.isVideoTexture&&g.delete(E)}function z(O){const E=O.target;E.removeEventListener("dispose",z),C(E)}function X(O){const E=r.get(O);if(E.__webglInit===void 0)return;const V=O.source,Q=_.get(V);if(Q){const ft=Q[E.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&L(O),Object.keys(Q).length===0&&_.delete(V)}r.remove(O)}function L(O){const E=r.get(O);i.deleteTexture(E.__webglTexture);const V=O.source,Q=_.get(V);delete Q[E.__cacheKey],u.memory.textures--}function C(O){const E=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let ft=0;ft<E.__webglFramebuffer[Q].length;ft++)i.deleteFramebuffer(E.__webglFramebuffer[Q][ft]);else i.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)i.deleteFramebuffer(E.__webglFramebuffer[Q]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const V=O.textures;for(let Q=0,ft=V.length;Q<ft;Q++){const at=r.get(V[Q]);at.__webglTexture&&(i.deleteTexture(at.__webglTexture),u.memory.textures--),r.remove(V[Q])}r.remove(O)}let H=0;function Z(){H=0}function lt(){const O=H;return O>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+o.maxTextures),H+=1,O}function tt(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function dt(O,E){const V=r.get(O);if(O.isVideoTexture&&ce(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&V.__version!==O.version){const Q=O.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(V,O,E);return}}else O.isExternalTexture&&(V.__webglTexture=O.sourceTexture?O.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+E)}function F(O,E){const V=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&V.__version!==O.version){it(V,O,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+E)}function $(O,E){const V=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&V.__version!==O.version){it(V,O,E);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+E)}function j(O,E){const V=r.get(O);if(O.version>0&&V.__version!==O.version){vt(V,O,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+E)}const St={[cp]:i.REPEAT,[wi]:i.CLAMP_TO_EDGE,[up]:i.MIRRORED_REPEAT},P={[ai]:i.NEAREST,[ZT]:i.NEAREST_MIPMAP_NEAREST,[Wc]:i.NEAREST_MIPMAP_LINEAR,[jn]:i.LINEAR,[sd]:i.LINEAR_MIPMAP_NEAREST,[Hr]:i.LINEAR_MIPMAP_LINEAR},et={[tA]:i.NEVER,[sA]:i.ALWAYS,[eA]:i.LESS,[Zy]:i.LEQUAL,[nA]:i.EQUAL,[rA]:i.GEQUAL,[iA]:i.GREATER,[aA]:i.NOTEQUAL};function yt(O,E){if(E.type===Gi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===jn||E.magFilter===sd||E.magFilter===Wc||E.magFilter===Hr||E.minFilter===jn||E.minFilter===sd||E.minFilter===Wc||E.minFilter===Hr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,St[E.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,St[E.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,St[E.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,P[E.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,P[E.minFilter]),E.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,et[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ai||E.minFilter!==Wc&&E.minFilter!==Hr||E.type===Gi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(O,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Et(O,E){let V=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",I));const Q=E.source;let ft=_.get(Q);ft===void 0&&(ft={},_.set(Q,ft));const at=tt(E);if(at!==O.__cacheKey){ft[at]===void 0&&(ft[at]={texture:i.createTexture(),usedTimes:0},u.memory.textures++,V=!0),ft[at].usedTimes++;const Dt=ft[O.__cacheKey];Dt!==void 0&&(ft[O.__cacheKey].usedTimes--,Dt.usedTimes===0&&L(E)),O.__cacheKey=at,O.__webglTexture=ft[at].texture}return V}function Nt(O,E,V){return Math.floor(Math.floor(O/V)/E)}function Vt(O,E,V,Q){const at=O.updateRanges;if(at.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,V,Q,E.data);else{at.sort((bt,Pt)=>bt.start-Pt.start);let Dt=0;for(let bt=1;bt<at.length;bt++){const Pt=at[Dt],Qt=at[bt],qt=Pt.start+Pt.count,Lt=Nt(Qt.start,E.width,4),ue=Nt(Pt.start,E.width,4);Qt.start<=qt+1&&Lt===ue&&Nt(Qt.start+Qt.count-1,E.width,4)===Lt?Pt.count=Math.max(Pt.count,Qt.start+Qt.count-Pt.start):(++Dt,at[Dt]=Qt)}at.length=Dt+1;const Ct=i.getParameter(i.UNPACK_ROW_LENGTH),Ht=i.getParameter(i.UNPACK_SKIP_PIXELS),Wt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let bt=0,Pt=at.length;bt<Pt;bt++){const Qt=at[bt],qt=Math.floor(Qt.start/4),Lt=Math.ceil(Qt.count/4),ue=qt%E.width,W=Math.floor(qt/E.width),wt=Lt,Ut=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ue),i.pixelStorei(i.UNPACK_SKIP_ROWS,W),e.texSubImage2D(i.TEXTURE_2D,0,ue,W,wt,Ut,V,Q,E.data)}O.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Ct),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ht),i.pixelStorei(i.UNPACK_SKIP_ROWS,Wt)}}function it(O,E,V){let Q=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=i.TEXTURE_3D);const ft=Et(O,E),at=E.source;e.bindTexture(Q,O.__webglTexture,i.TEXTURE0+V);const Dt=r.get(at);if(at.version!==Dt.__version||ft===!0){e.activeTexture(i.TEXTURE0+V);const Ct=De.getPrimaries(De.workingColorSpace),Ht=E.colorSpace===ir?null:De.getPrimaries(E.colorSpace),Wt=E.colorSpace===ir||Ct===Ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let bt=b(E.image,!1,o.maxTextureSize);bt=Xe(E,bt);const Pt=l.convert(E.format,E.colorSpace),Qt=l.convert(E.type);let qt=D(E.internalFormat,Pt,Qt,E.colorSpace,E.isVideoTexture);yt(Q,E);let Lt;const ue=E.mipmaps,W=E.isVideoTexture!==!0,wt=Dt.__version===void 0||ft===!0,Ut=at.dataReady,Bt=N(E,bt);if(E.isDepthTexture)qt=A(E.format===Sl,E.type),wt&&(W?e.texStorage2D(i.TEXTURE_2D,1,qt,bt.width,bt.height):e.texImage2D(i.TEXTURE_2D,0,qt,bt.width,bt.height,0,Pt,Qt,null));else if(E.isDataTexture)if(ue.length>0){W&&wt&&e.texStorage2D(i.TEXTURE_2D,Bt,qt,ue[0].width,ue[0].height);for(let Tt=0,xt=ue.length;Tt<xt;Tt++)Lt=ue[Tt],W?Ut&&e.texSubImage2D(i.TEXTURE_2D,Tt,0,0,Lt.width,Lt.height,Pt,Qt,Lt.data):e.texImage2D(i.TEXTURE_2D,Tt,qt,Lt.width,Lt.height,0,Pt,Qt,Lt.data);E.generateMipmaps=!1}else W?(wt&&e.texStorage2D(i.TEXTURE_2D,Bt,qt,bt.width,bt.height),Ut&&Vt(E,bt,Pt,Qt)):e.texImage2D(i.TEXTURE_2D,0,qt,bt.width,bt.height,0,Pt,Qt,bt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&wt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Bt,qt,ue[0].width,ue[0].height,bt.depth);for(let Tt=0,xt=ue.length;Tt<xt;Tt++)if(Lt=ue[Tt],E.format!==mi)if(Pt!==null)if(W){if(Ut)if(E.layerUpdates.size>0){const jt=K_(Lt.width,Lt.height,E.format,E.type);for(const oe of E.layerUpdates){const Oe=Lt.data.subarray(oe*jt/Lt.data.BYTES_PER_ELEMENT,(oe+1)*jt/Lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Tt,0,0,oe,Lt.width,Lt.height,1,Pt,Oe)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Tt,0,0,0,Lt.width,Lt.height,bt.depth,Pt,Lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Tt,qt,Lt.width,Lt.height,bt.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Ut&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Tt,0,0,0,Lt.width,Lt.height,bt.depth,Pt,Qt,Lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Tt,qt,Lt.width,Lt.height,bt.depth,0,Pt,Qt,Lt.data)}else{W&&wt&&e.texStorage2D(i.TEXTURE_2D,Bt,qt,ue[0].width,ue[0].height);for(let Tt=0,xt=ue.length;Tt<xt;Tt++)Lt=ue[Tt],E.format!==mi?Pt!==null?W?Ut&&e.compressedTexSubImage2D(i.TEXTURE_2D,Tt,0,0,Lt.width,Lt.height,Pt,Lt.data):e.compressedTexImage2D(i.TEXTURE_2D,Tt,qt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Ut&&e.texSubImage2D(i.TEXTURE_2D,Tt,0,0,Lt.width,Lt.height,Pt,Qt,Lt.data):e.texImage2D(i.TEXTURE_2D,Tt,qt,Lt.width,Lt.height,0,Pt,Qt,Lt.data)}else if(E.isDataArrayTexture)if(W){if(wt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Bt,qt,bt.width,bt.height,bt.depth),Ut)if(E.layerUpdates.size>0){const Tt=K_(bt.width,bt.height,E.format,E.type);for(const xt of E.layerUpdates){const jt=bt.data.subarray(xt*Tt/bt.data.BYTES_PER_ELEMENT,(xt+1)*Tt/bt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xt,bt.width,bt.height,1,Pt,Qt,jt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Pt,Qt,bt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,qt,bt.width,bt.height,bt.depth,0,Pt,Qt,bt.data);else if(E.isData3DTexture)W?(wt&&e.texStorage3D(i.TEXTURE_3D,Bt,qt,bt.width,bt.height,bt.depth),Ut&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Pt,Qt,bt.data)):e.texImage3D(i.TEXTURE_3D,0,qt,bt.width,bt.height,bt.depth,0,Pt,Qt,bt.data);else if(E.isFramebufferTexture){if(wt)if(W)e.texStorage2D(i.TEXTURE_2D,Bt,qt,bt.width,bt.height);else{let Tt=bt.width,xt=bt.height;for(let jt=0;jt<Bt;jt++)e.texImage2D(i.TEXTURE_2D,jt,qt,Tt,xt,0,Pt,Qt,null),Tt>>=1,xt>>=1}}else if(ue.length>0){if(W&&wt){const Tt=We(ue[0]);e.texStorage2D(i.TEXTURE_2D,Bt,qt,Tt.width,Tt.height)}for(let Tt=0,xt=ue.length;Tt<xt;Tt++)Lt=ue[Tt],W?Ut&&e.texSubImage2D(i.TEXTURE_2D,Tt,0,0,Pt,Qt,Lt):e.texImage2D(i.TEXTURE_2D,Tt,qt,Pt,Qt,Lt);E.generateMipmaps=!1}else if(W){if(wt){const Tt=We(bt);e.texStorage2D(i.TEXTURE_2D,Bt,qt,Tt.width,Tt.height)}Ut&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Pt,Qt,bt)}else e.texImage2D(i.TEXTURE_2D,0,qt,Pt,Qt,bt);S(E)&&x(Q),Dt.__version=at.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function vt(O,E,V){if(E.image.length!==6)return;const Q=Et(O,E),ft=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+V);const at=r.get(ft);if(ft.version!==at.__version||Q===!0){e.activeTexture(i.TEXTURE0+V);const Dt=De.getPrimaries(De.workingColorSpace),Ct=E.colorSpace===ir?null:De.getPrimaries(E.colorSpace),Ht=E.colorSpace===ir||Dt===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);const Wt=E.isCompressedTexture||E.image[0].isCompressedTexture,bt=E.image[0]&&E.image[0].isDataTexture,Pt=[];for(let xt=0;xt<6;xt++)!Wt&&!bt?Pt[xt]=b(E.image[xt],!0,o.maxCubemapSize):Pt[xt]=bt?E.image[xt].image:E.image[xt],Pt[xt]=Xe(E,Pt[xt]);const Qt=Pt[0],qt=l.convert(E.format,E.colorSpace),Lt=l.convert(E.type),ue=D(E.internalFormat,qt,Lt,E.colorSpace),W=E.isVideoTexture!==!0,wt=at.__version===void 0||Q===!0,Ut=ft.dataReady;let Bt=N(E,Qt);yt(i.TEXTURE_CUBE_MAP,E);let Tt;if(Wt){W&&wt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Bt,ue,Qt.width,Qt.height);for(let xt=0;xt<6;xt++){Tt=Pt[xt].mipmaps;for(let jt=0;jt<Tt.length;jt++){const oe=Tt[jt];E.format!==mi?qt!==null?W?Ut&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,jt,0,0,oe.width,oe.height,qt,oe.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,jt,ue,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,jt,0,0,oe.width,oe.height,qt,Lt,oe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,jt,ue,oe.width,oe.height,0,qt,Lt,oe.data)}}}else{if(Tt=E.mipmaps,W&&wt){Tt.length>0&&Bt++;const xt=We(Pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Bt,ue,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(bt){W?Ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Pt[xt].width,Pt[xt].height,qt,Lt,Pt[xt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ue,Pt[xt].width,Pt[xt].height,0,qt,Lt,Pt[xt].data);for(let jt=0;jt<Tt.length;jt++){const Oe=Tt[jt].image[xt].image;W?Ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,jt+1,0,0,Oe.width,Oe.height,qt,Lt,Oe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,jt+1,ue,Oe.width,Oe.height,0,qt,Lt,Oe.data)}}else{W?Ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,qt,Lt,Pt[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ue,qt,Lt,Pt[xt]);for(let jt=0;jt<Tt.length;jt++){const oe=Tt[jt];W?Ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,jt+1,0,0,qt,Lt,oe.image[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,jt+1,ue,qt,Lt,oe.image[xt])}}}S(E)&&x(i.TEXTURE_CUBE_MAP),at.__version=ft.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function Mt(O,E,V,Q,ft,at){const Dt=l.convert(V.format,V.colorSpace),Ct=l.convert(V.type),Ht=D(V.internalFormat,Dt,Ct,V.colorSpace),Wt=r.get(E),bt=r.get(V);if(bt.__renderTarget=E,!Wt.__hasExternalTextures){const Pt=Math.max(1,E.width>>at),Qt=Math.max(1,E.height>>at);ft===i.TEXTURE_3D||ft===i.TEXTURE_2D_ARRAY?e.texImage3D(ft,at,Ht,Pt,Qt,E.depth,0,Dt,Ct,null):e.texImage2D(ft,at,Ht,Pt,Qt,0,Dt,Ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,O),kt(E)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,ft,bt.__webglTexture,0,Te(E)):(ft===i.TEXTURE_2D||ft>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ft<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,ft,bt.__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(O,E,V){if(i.bindRenderbuffer(i.RENDERBUFFER,O),E.depthBuffer){const Q=E.depthTexture,ft=Q&&Q.isDepthTexture?Q.type:null,at=A(E.stencilBuffer,ft),Dt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=Te(E);kt(E)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ct,at,E.width,E.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,at,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,at,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Dt,i.RENDERBUFFER,O)}else{const Q=E.textures;for(let ft=0;ft<Q.length;ft++){const at=Q[ft],Dt=l.convert(at.format,at.colorSpace),Ct=l.convert(at.type),Ht=D(at.internalFormat,Dt,Ct,at.colorSpace),Wt=Te(E);V&&kt(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,Ht,E.width,E.height):kt(E)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,Ht,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Ht,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Yt(O,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=r.get(E.depthTexture);Q.__renderTarget=E,(!Q.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),dt(E.depthTexture,0);const ft=Q.__webglTexture,at=Te(E);if(E.depthTexture.format===yl)kt(E)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ft,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ft,0);else if(E.depthTexture.format===Sl)kt(E)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ft,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ft,0);else throw new Error("Unknown depthTexture format")}function he(O){const E=r.get(O),V=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const Q=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){const ft=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",ft)};Q.addEventListener("dispose",ft),E.__depthDisposeCallback=ft}E.__boundDepthTexture=Q}if(O.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const Q=O.texture.mipmaps;Q&&Q.length>0?Yt(E.__webglFramebuffer[0],O):Yt(E.__webglFramebuffer,O)}else if(V){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=i.createRenderbuffer(),$t(E.__webglDepthbuffer[Q],O,!1);else{const ft=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=E.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,at)}}else{const Q=O.texture.mipmaps;if(Q&&Q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),$t(E.__webglDepthbuffer,O,!1);else{const ft=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,at)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(O,E,V){const Q=r.get(O);E!==void 0&&Mt(Q.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&he(O)}function G(O){const E=O.texture,V=r.get(O),Q=r.get(E);O.addEventListener("dispose",z);const ft=O.textures,at=O.isWebGLCubeRenderTarget===!0,Dt=ft.length>1;if(Dt||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=E.version,u.memory.textures++),at){V.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[Ct]=[];for(let Ht=0;Ht<E.mipmaps.length;Ht++)V.__webglFramebuffer[Ct][Ht]=i.createFramebuffer()}else V.__webglFramebuffer[Ct]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let Ct=0;Ct<E.mipmaps.length;Ct++)V.__webglFramebuffer[Ct]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Dt)for(let Ct=0,Ht=ft.length;Ct<Ht;Ct++){const Wt=r.get(ft[Ct]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),u.memory.textures++)}if(O.samples>0&&kt(O)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Ct=0;Ct<ft.length;Ct++){const Ht=ft[Ct];V.__webglColorRenderbuffer[Ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[Ct]);const Wt=l.convert(Ht.format,Ht.colorSpace),bt=l.convert(Ht.type),Pt=D(Ht.internalFormat,Wt,bt,Ht.colorSpace,O.isXRRenderTarget===!0),Qt=Te(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt,Pt,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,V.__webglColorRenderbuffer[Ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),$t(V.__webglDepthRenderbuffer,O,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),yt(i.TEXTURE_CUBE_MAP,E);for(let Ct=0;Ct<6;Ct++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ht=0;Ht<E.mipmaps.length;Ht++)Mt(V.__webglFramebuffer[Ct][Ht],O,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Ht);else Mt(V.__webglFramebuffer[Ct],O,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);S(E)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let Ct=0,Ht=ft.length;Ct<Ht;Ct++){const Wt=ft[Ct],bt=r.get(Wt);let Pt=i.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Pt=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Pt,bt.__webglTexture),yt(Pt,Wt),Mt(V.__webglFramebuffer,O,Wt,i.COLOR_ATTACHMENT0+Ct,Pt,0),S(Wt)&&x(Pt)}e.unbindTexture()}else{let Ct=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ct=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Ct,Q.__webglTexture),yt(Ct,E),E.mipmaps&&E.mipmaps.length>0)for(let Ht=0;Ht<E.mipmaps.length;Ht++)Mt(V.__webglFramebuffer[Ht],O,E,i.COLOR_ATTACHMENT0,Ct,Ht);else Mt(V.__webglFramebuffer,O,E,i.COLOR_ATTACHMENT0,Ct,0);S(E)&&x(Ct),e.unbindTexture()}O.depthBuffer&&he(O)}function Ne(O){const E=O.textures;for(let V=0,Q=E.length;V<Q;V++){const ft=E[V];if(S(ft)){const at=U(O),Dt=r.get(ft).__webglTexture;e.bindTexture(at,Dt),x(at),e.unbindTexture()}}}const le=[],ne=[];function zt(O){if(O.samples>0){if(kt(O)===!1){const E=O.textures,V=O.width,Q=O.height;let ft=i.COLOR_BUFFER_BIT;const at=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=r.get(O),Ct=E.length>1;if(Ct)for(let Wt=0;Wt<E.length;Wt++)e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Wt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Wt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer);const Ht=O.texture.mipmaps;Ht&&Ht.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let Wt=0;Wt<E.length;Wt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ft|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ft|=i.STENCIL_BUFFER_BIT)),Ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[Wt]);const bt=r.get(E[Wt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,bt,0)}i.blitFramebuffer(0,0,V,Q,0,0,V,Q,ft,i.NEAREST),d===!0&&(le.length=0,ne.length=0,le.push(i.COLOR_ATTACHMENT0+Wt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(le.push(at),ne.push(at),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ne)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,le))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ct)for(let Wt=0;Wt<E.length;Wt++){e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Wt,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[Wt]);const bt=r.get(E[Wt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Wt,i.TEXTURE_2D,bt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&d){const E=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Te(O){return Math.min(o.maxSamples,O.samples)}function kt(O){const E=r.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ce(O){const E=u.render.frame;g.get(O)!==E&&(g.set(O,E),O.update())}function Xe(O,E){const V=O.colorSpace,Q=O.format,ft=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||V!==Js&&V!==ir&&(De.getTransfer(V)===Ge?(Q!==mi||ft!==ya)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),E}function We(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=lt,this.resetTextureUnits=Z,this.setTexture2D=dt,this.setTexture2DArray=F,this.setTexture3D=$,this.setTextureCube=j,this.rebindTextures=Je,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=kt}function y3(i,t){function e(r,o=ir){let l;const u=De.getTransfer(o);if(r===ya)return i.UNSIGNED_BYTE;if(r===pm)return i.UNSIGNED_SHORT_4_4_4_4;if(r===mm)return i.UNSIGNED_SHORT_5_5_5_1;if(r===ky)return i.UNSIGNED_INT_5_9_9_9_REV;if(r===Xy)return i.UNSIGNED_INT_10F_11F_11F_REV;if(r===Gy)return i.BYTE;if(r===Vy)return i.SHORT;if(r===_l)return i.UNSIGNED_SHORT;if(r===dm)return i.INT;if(r===kr)return i.UNSIGNED_INT;if(r===Gi)return i.FLOAT;if(r===ao)return i.HALF_FLOAT;if(r===Wy)return i.ALPHA;if(r===jy)return i.RGB;if(r===mi)return i.RGBA;if(r===yl)return i.DEPTH_COMPONENT;if(r===Sl)return i.DEPTH_STENCIL;if(r===qy)return i.RED;if(r===gm)return i.RED_INTEGER;if(r===Yy)return i.RG;if(r===vm)return i.RG_INTEGER;if(r===_m)return i.RGBA_INTEGER;if(r===yu||r===Su||r===Eu||r===Mu)if(u===Ge)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===yu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Su)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Eu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Mu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===yu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Su)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Eu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Mu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===fp||r===hp||r===dp||r===pp)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===fp)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===hp)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===dp)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===pp)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===mp||r===gp||r===vp)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(r===mp||r===gp)return u===Ge?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===vp)return u===Ge?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===_p||r===xp||r===yp||r===Sp||r===Ep||r===Mp||r===bp||r===Tp||r===Ap||r===wp||r===Rp||r===Cp||r===Dp||r===Up)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(r===_p)return u===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===xp)return u===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===yp)return u===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Sp)return u===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ep)return u===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Mp)return u===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===bp)return u===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Tp)return u===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ap)return u===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===wp)return u===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Rp)return u===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Cp)return u===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Dp)return u===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Up)return u===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Lp||r===Np||r===Op)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(r===Lp)return u===Ge?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Np)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Op)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Pp||r===Ip||r===Fp||r===zp)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(r===Pp)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Ip)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Fp)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===zp)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===xl?i.UNSIGNED_INT_24_8:i[r]!==void 0?i[r]:null}return{convert:e}}const S3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class M3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const r=new c1(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,r=new Sa({vertexShader:S3,fragmentShader:E3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new gi(new Vr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class b3 extends ro{constructor(t,e){super();const r=this;let o=null,l=1,u=null,f="local-floor",d=1,p=null,g=null,v=null,_=null,y=null,M=null;const b=typeof XRWebGLBinding<"u",S=new M3,x={},U=e.getContextAttributes();let D=null,A=null;const N=[],I=[],z=new fe;let X=null;const L=new Ti;L.viewport=new rn;const C=new Ti;C.viewport=new rn;const H=[L,C],Z=new XA;let lt=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let vt=N[it];return vt===void 0&&(vt=new Cd,N[it]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(it){let vt=N[it];return vt===void 0&&(vt=new Cd,N[it]=vt),vt.getGripSpace()},this.getHand=function(it){let vt=N[it];return vt===void 0&&(vt=new Cd,N[it]=vt),vt.getHandSpace()};function dt(it){const vt=I.indexOf(it.inputSource);if(vt===-1)return;const Mt=N[vt];Mt!==void 0&&(Mt.update(it.inputSource,it.frame,p||u),Mt.dispatchEvent({type:it.type,data:it.inputSource}))}function F(){o.removeEventListener("select",dt),o.removeEventListener("selectstart",dt),o.removeEventListener("selectend",dt),o.removeEventListener("squeeze",dt),o.removeEventListener("squeezestart",dt),o.removeEventListener("squeezeend",dt),o.removeEventListener("end",F),o.removeEventListener("inputsourceschange",$);for(let it=0;it<N.length;it++){const vt=I[it];vt!==null&&(I[it]=null,N[it].disconnect(vt))}lt=null,tt=null,S.reset();for(const it in x)delete x[it];t.setRenderTarget(D),y=null,_=null,v=null,o=null,A=null,Vt.stop(),r.isPresenting=!1,t.setPixelRatio(X),t.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){l=it,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){f=it,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(it){p=it},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return v===null&&b&&(v=new XRWebGLBinding(o,e)),v},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(it){if(o=it,o!==null){if(D=t.getRenderTarget(),o.addEventListener("select",dt),o.addEventListener("selectstart",dt),o.addEventListener("selectend",dt),o.addEventListener("squeeze",dt),o.addEventListener("squeezestart",dt),o.addEventListener("squeezeend",dt),o.addEventListener("end",F),o.addEventListener("inputsourceschange",$),U.xrCompatible!==!0&&await e.makeXRCompatible(),X=t.getPixelRatio(),t.getSize(z),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,$t=null,Yt=null;U.depth&&(Yt=U.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Mt=U.stencil?Sl:yl,$t=U.stencil?xl:kr);const he={colorFormat:e.RGBA8,depthFormat:Yt,scaleFactor:l};v=this.getBinding(),_=v.createProjectionLayer(he),o.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),A=new lr(_.textureWidth,_.textureHeight,{format:mi,type:ya,depthTexture:new l1(_.textureWidth,_.textureHeight,$t,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:U.stencil,colorSpace:t.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Mt={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,e,Mt),o.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),A=new lr(y.framebufferWidth,y.framebufferHeight,{format:mi,type:ya,colorSpace:t.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(d),p=null,u=await o.requestReferenceSpace(f),Vt.setContext(o),Vt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function $(it){for(let vt=0;vt<it.removed.length;vt++){const Mt=it.removed[vt],$t=I.indexOf(Mt);$t>=0&&(I[$t]=null,N[$t].disconnect(Mt))}for(let vt=0;vt<it.added.length;vt++){const Mt=it.added[vt];let $t=I.indexOf(Mt);if($t===-1){for(let he=0;he<N.length;he++)if(he>=I.length){I.push(Mt),$t=he;break}else if(I[he]===null){I[he]=Mt,$t=he;break}if($t===-1)break}const Yt=N[$t];Yt&&Yt.connect(Mt)}}const j=new ct,St=new ct;function P(it,vt,Mt){j.setFromMatrixPosition(vt.matrixWorld),St.setFromMatrixPosition(Mt.matrixWorld);const $t=j.distanceTo(St),Yt=vt.projectionMatrix.elements,he=Mt.projectionMatrix.elements,Je=Yt[14]/(Yt[10]-1),G=Yt[14]/(Yt[10]+1),Ne=(Yt[9]+1)/Yt[5],le=(Yt[9]-1)/Yt[5],ne=(Yt[8]-1)/Yt[0],zt=(he[8]+1)/he[0],Te=Je*ne,kt=Je*zt,ce=$t/(-ne+zt),Xe=ce*-ne;if(vt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Xe),it.translateZ(ce),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Yt[10]===-1)it.projectionMatrix.copy(vt.projectionMatrix),it.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{const We=Je+ce,O=G+ce,E=Te-Xe,V=kt+($t-Xe),Q=Ne*G/O*We,ft=le*G/O*We;it.projectionMatrix.makePerspective(E,V,Q,ft,We,O),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function et(it,vt){vt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(vt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(o===null)return;let vt=it.near,Mt=it.far;S.texture!==null&&(S.depthNear>0&&(vt=S.depthNear),S.depthFar>0&&(Mt=S.depthFar)),Z.near=C.near=L.near=vt,Z.far=C.far=L.far=Mt,(lt!==Z.near||tt!==Z.far)&&(o.updateRenderState({depthNear:Z.near,depthFar:Z.far}),lt=Z.near,tt=Z.far),Z.layers.mask=it.layers.mask|6,L.layers.mask=Z.layers.mask&3,C.layers.mask=Z.layers.mask&5;const $t=it.parent,Yt=Z.cameras;et(Z,$t);for(let he=0;he<Yt.length;he++)et(Yt[he],$t);Yt.length===2?P(Z,L,C):Z.projectionMatrix.copy(L.projectionMatrix),yt(it,Z,$t)};function yt(it,vt,Mt){Mt===null?it.matrix.copy(vt.matrixWorld):(it.matrix.copy(Mt.matrixWorld),it.matrix.invert(),it.matrix.multiply(vt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(vt.projectionMatrix),it.projectionMatrixInverse.copy(vt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Bp*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(_===null&&y===null))return d},this.setFoveation=function(it){d=it,_!==null&&(_.fixedFoveation=it),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=it)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Z)},this.getCameraTexture=function(it){return x[it]};let Et=null;function Nt(it,vt){if(g=vt.getViewerPose(p||u),M=vt,g!==null){const Mt=g.views;y!==null&&(t.setRenderTargetFramebuffer(A,y.framebuffer),t.setRenderTarget(A));let $t=!1;Mt.length!==Z.cameras.length&&(Z.cameras.length=0,$t=!0);for(let G=0;G<Mt.length;G++){const Ne=Mt[G];let le=null;if(y!==null)le=y.getViewport(Ne);else{const zt=v.getViewSubImage(_,Ne);le=zt.viewport,G===0&&(t.setRenderTargetTextures(A,zt.colorTexture,zt.depthStencilTexture),t.setRenderTarget(A))}let ne=H[G];ne===void 0&&(ne=new Ti,ne.layers.enable(G),ne.viewport=new rn,H[G]=ne),ne.matrix.fromArray(Ne.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(Ne.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(le.x,le.y,le.width,le.height),G===0&&(Z.matrix.copy(ne.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),$t===!0&&Z.cameras.push(ne)}const Yt=o.enabledFeatures;if(Yt&&Yt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&b){v=r.getBinding();const G=v.getDepthInformation(Mt[0]);G&&G.isValid&&G.texture&&S.init(G,o.renderState)}if(Yt&&Yt.includes("camera-access")&&b){t.state.unbindTexture(),v=r.getBinding();for(let G=0;G<Mt.length;G++){const Ne=Mt[G].camera;if(Ne){let le=x[Ne];le||(le=new c1,x[Ne]=le);const ne=v.getCameraImage(Ne);le.sourceTexture=ne}}}}for(let Mt=0;Mt<N.length;Mt++){const $t=I[Mt],Yt=N[Mt];$t!==null&&Yt!==void 0&&Yt.update($t,vt,p||u)}Et&&Et(it,vt),vt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:vt}),M=null}const Vt=new u1;Vt.setAnimationLoop(Nt),this.setAnimationLoop=function(it){Et=it},this.dispose=function(){}}}const Or=new Xr,T3=new dn;function A3(i,t){function e(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function r(S,x){x.color.getRGB(S.fogColor.value,r1(i)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function o(S,x,U,D,A){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(S,x):x.isMeshToonMaterial?(l(S,x),v(S,x)):x.isMeshPhongMaterial?(l(S,x),g(S,x)):x.isMeshStandardMaterial?(l(S,x),_(S,x),x.isMeshPhysicalMaterial&&y(S,x,A)):x.isMeshMatcapMaterial?(l(S,x),M(S,x)):x.isMeshDepthMaterial?l(S,x):x.isMeshDistanceMaterial?(l(S,x),b(S,x)):x.isMeshNormalMaterial?l(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&f(S,x)):x.isPointsMaterial?d(S,x,U,D):x.isSpriteMaterial?p(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,e(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,e(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,e(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===qn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,e(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===qn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,e(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,e(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,e(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const U=t.get(x),D=U.envMap,A=U.envMapRotation;D&&(S.envMap.value=D,Or.copy(A),Or.x*=-1,Or.y*=-1,Or.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),S.envMapRotation.value.setFromMatrix4(T3.makeRotationFromEuler(Or)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,e(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,e(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,e(x.map,S.mapTransform))}function f(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function d(S,x,U,D){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*U,S.scale.value=D*.5,x.map&&(S.map.value=x.map,e(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,e(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function p(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,e(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,e(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function v(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function _(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,e(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,e(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,U){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,e(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,e(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,e(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,e(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,e(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===qn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,e(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,e(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=U.texture,S.transmissionSamplerSize.value.set(U.width,U.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,e(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,e(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,e(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,e(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,e(x.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,x){x.matcap&&(S.matcap.value=x.matcap)}function b(S,x){const U=t.get(x).light;S.referencePosition.value.setFromMatrixPosition(U.matrixWorld),S.nearDistance.value=U.shadow.camera.near,S.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function w3(i,t,e,r){let o={},l={},u=[];const f=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function d(U,D){const A=D.program;r.uniformBlockBinding(U,A)}function p(U,D){let A=o[U.id];A===void 0&&(M(U),A=g(U),o[U.id]=A,U.addEventListener("dispose",S));const N=D.program;r.updateUBOMapping(U,N);const I=t.render.frame;l[U.id]!==I&&(_(U),l[U.id]=I)}function g(U){const D=v();U.__bindingPointIndex=D;const A=i.createBuffer(),N=U.__size,I=U.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,N,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,D,A),A}function v(){for(let U=0;U<f;U++)if(u.indexOf(U)===-1)return u.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(U){const D=o[U.id],A=U.uniforms,N=U.__cache;i.bindBuffer(i.UNIFORM_BUFFER,D);for(let I=0,z=A.length;I<z;I++){const X=Array.isArray(A[I])?A[I]:[A[I]];for(let L=0,C=X.length;L<C;L++){const H=X[L];if(y(H,I,L,N)===!0){const Z=H.__offset,lt=Array.isArray(H.value)?H.value:[H.value];let tt=0;for(let dt=0;dt<lt.length;dt++){const F=lt[dt],$=b(F);typeof F=="number"||typeof F=="boolean"?(H.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,Z+tt,H.__data)):F.isMatrix3?(H.__data[0]=F.elements[0],H.__data[1]=F.elements[1],H.__data[2]=F.elements[2],H.__data[3]=0,H.__data[4]=F.elements[3],H.__data[5]=F.elements[4],H.__data[6]=F.elements[5],H.__data[7]=0,H.__data[8]=F.elements[6],H.__data[9]=F.elements[7],H.__data[10]=F.elements[8],H.__data[11]=0):(F.toArray(H.__data,tt),tt+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Z,H.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(U,D,A,N){const I=U.value,z=D+"_"+A;if(N[z]===void 0)return typeof I=="number"||typeof I=="boolean"?N[z]=I:N[z]=I.clone(),!0;{const X=N[z];if(typeof I=="number"||typeof I=="boolean"){if(X!==I)return N[z]=I,!0}else if(X.equals(I)===!1)return X.copy(I),!0}return!1}function M(U){const D=U.uniforms;let A=0;const N=16;for(let z=0,X=D.length;z<X;z++){const L=Array.isArray(D[z])?D[z]:[D[z]];for(let C=0,H=L.length;C<H;C++){const Z=L[C],lt=Array.isArray(Z.value)?Z.value:[Z.value];for(let tt=0,dt=lt.length;tt<dt;tt++){const F=lt[tt],$=b(F),j=A%N,St=j%$.boundary,P=j+St;A+=St,P!==0&&N-P<$.storage&&(A+=N-P),Z.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=A,A+=$.storage}}}const I=A%N;return I>0&&(A+=N-I),U.__size=A,U.__cache={},this}function b(U){const D={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(D.boundary=4,D.storage=4):U.isVector2?(D.boundary=8,D.storage=8):U.isVector3||U.isColor?(D.boundary=16,D.storage=12):U.isVector4?(D.boundary=16,D.storage=16):U.isMatrix3?(D.boundary=48,D.storage=48):U.isMatrix4?(D.boundary=64,D.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),D}function S(U){const D=U.target;D.removeEventListener("dispose",S);const A=u.indexOf(D.__bindingPointIndex);u.splice(A,1),i.deleteBuffer(o[D.id]),delete o[D.id],delete l[D.id]}function x(){for(const U in o)i.deleteBuffer(o[U]);u=[],o={},l={}}return{bind:d,update:p,dispose:x}}class R3{constructor(t={}){const{canvas:e=lA(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=u;const M=new Uint32Array(4),b=new Int32Array(4);let S=null,x=null;const U=[],D=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let N=!1;this._outputColorSpace=pi;let I=0,z=0,X=null,L=-1,C=null;const H=new rn,Z=new rn;let lt=null;const tt=new Le(0);let dt=0,F=e.width,$=e.height,j=1,St=null,P=null;const et=new rn(0,0,F,$),yt=new rn(0,0,F,$);let Et=!1;const Nt=new o1;let Vt=!1,it=!1;const vt=new dn,Mt=new ct,$t=new rn,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function Je(){return X===null?j:1}let G=r;function Ne(R,q){return e.getContext(R,q)}try{const R={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${hm}`),e.addEventListener("webglcontextlost",Ut,!1),e.addEventListener("webglcontextrestored",Bt,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),G===null){const q="webgl2";if(G=Ne(q,R),G===null)throw Ne(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let le,ne,zt,Te,kt,ce,Xe,We,O,E,V,Q,ft,at,Dt,Ct,Ht,Wt,bt,Pt,Qt,qt,Lt,ue;function W(){le=new zR(G),le.init(),qt=new y3(G,le),ne=new UR(G,le,t,qt),zt=new _3(G,le),ne.reversedDepthBuffer&&_&&zt.buffers.depth.setReversed(!0),Te=new GR(G),kt=new r3,ce=new x3(G,le,zt,kt,ne,qt,Te),Xe=new NR(A),We=new FR(A),O=new qA(G),Lt=new CR(G,O),E=new BR(G,O,Te,Lt),V=new kR(G,E,O,Te),bt=new VR(G,ne,ce),Ct=new LR(kt),Q=new a3(A,Xe,We,le,ne,Lt,Ct),ft=new A3(A,kt),at=new o3,Dt=new d3(le),Wt=new RR(A,Xe,We,zt,V,y,d),Ht=new g3(A,V,ne),ue=new w3(G,Te,ne,zt),Pt=new DR(G,le,Te),Qt=new HR(G,le,Te),Te.programs=Q.programs,A.capabilities=ne,A.extensions=le,A.properties=kt,A.renderLists=at,A.shadowMap=Ht,A.state=zt,A.info=Te}W();const wt=new b3(A,G);this.xr=wt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=le.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=le.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(F,$,!1))},this.getSize=function(R){return R.set(F,$)},this.setSize=function(R,q,ut=!0){if(wt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=R,$=q,e.width=Math.floor(R*j),e.height=Math.floor(q*j),ut===!0&&(e.style.width=R+"px",e.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(F*j,$*j).floor()},this.setDrawingBufferSize=function(R,q,ut){F=R,$=q,j=ut,e.width=Math.floor(R*ut),e.height=Math.floor(q*ut),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(H)},this.getViewport=function(R){return R.copy(et)},this.setViewport=function(R,q,ut,ht){R.isVector4?et.set(R.x,R.y,R.z,R.w):et.set(R,q,ut,ht),zt.viewport(H.copy(et).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy(yt)},this.setScissor=function(R,q,ut,ht){R.isVector4?yt.set(R.x,R.y,R.z,R.w):yt.set(R,q,ut,ht),zt.scissor(Z.copy(yt).multiplyScalar(j).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(R){zt.setScissorTest(Et=R)},this.setOpaqueSort=function(R){St=R},this.setTransparentSort=function(R){P=R},this.getClearColor=function(R){return R.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor(...arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,ut=!0){let ht=0;if(R){let K=!1;if(X!==null){const At=X.texture.format;K=At===_m||At===vm||At===gm}if(K){const At=X.texture.type,Ot=At===ya||At===kr||At===_l||At===xl||At===pm||At===mm,Gt=Wt.getClearColor(),It=Wt.getClearAlpha(),ee=Gt.r,ae=Gt.g,Zt=Gt.b;Ot?(M[0]=ee,M[1]=ae,M[2]=Zt,M[3]=It,G.clearBufferuiv(G.COLOR,0,M)):(b[0]=ee,b[1]=ae,b[2]=Zt,b[3]=It,G.clearBufferiv(G.COLOR,0,b))}else ht|=G.COLOR_BUFFER_BIT}q&&(ht|=G.DEPTH_BUFFER_BIT),ut&&(ht|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ht)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ut,!1),e.removeEventListener("webglcontextrestored",Bt,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),Wt.dispose(),at.dispose(),Dt.dispose(),kt.dispose(),Xe.dispose(),We.dispose(),V.dispose(),Lt.dispose(),ue.dispose(),Q.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",pn),wt.removeEventListener("sessionend",mn),tn.stop()};function Ut(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const R=Te.autoReset,q=Ht.enabled,ut=Ht.autoUpdate,ht=Ht.needsUpdate,K=Ht.type;W(),Te.autoReset=R,Ht.enabled=q,Ht.autoUpdate=ut,Ht.needsUpdate=ht,Ht.type=K}function Tt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function xt(R){const q=R.target;q.removeEventListener("dispose",xt),jt(q)}function jt(R){oe(R),kt.remove(R)}function oe(R){const q=kt.get(R).programs;q!==void 0&&(q.forEach(function(ut){Q.releaseProgram(ut)}),R.isShaderMaterial&&Q.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,ut,ht,K,At){q===null&&(q=Yt);const Ot=K.isMesh&&K.matrixWorld.determinant()<0,Gt=wa(R,q,ut,ht,K);zt.setMaterial(ht,Ot);let It=ut.index,ee=1;if(ht.wireframe===!0){if(It=E.getWireframeAttribute(ut),It===void 0)return;ee=2}const ae=ut.drawRange,Zt=ut.attributes.position;let me=ae.start*ee,Re=(ae.start+ae.count)*ee;At!==null&&(me=Math.max(me,At.start*ee),Re=Math.min(Re,(At.start+At.count)*ee)),It!==null?(me=Math.max(me,0),Re=Math.min(Re,It.count)):Zt!=null&&(me=Math.max(me,0),Re=Math.min(Re,Zt.count));const Ze=Re-me;if(Ze<0||Ze===1/0)return;Lt.setup(K,ht,Gt,ut,It);let Fe,ge=Pt;if(It!==null&&(Fe=O.get(It),ge=Qt,ge.setIndex(Fe)),K.isMesh)ht.wireframe===!0?(zt.setLineWidth(ht.wireframeLinewidth*Je()),ge.setMode(G.LINES)):ge.setMode(G.TRIANGLES);else if(K.isLine){let te=ht.linewidth;te===void 0&&(te=1),zt.setLineWidth(te*Je()),K.isLineSegments?ge.setMode(G.LINES):K.isLineLoop?ge.setMode(G.LINE_LOOP):ge.setMode(G.LINE_STRIP)}else K.isPoints?ge.setMode(G.POINTS):K.isSprite&&ge.setMode(G.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)El("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ge.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))ge.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const te=K._multiDrawStarts,qe=K._multiDrawCounts,ye=K._multiDrawCount,Dn=It?O.get(It).bytesPerElement:1,_i=kt.get(ht).currentProgram.getUniforms();for(let In=0;In<ye;In++)_i.setValue(G,"_gl_DrawID",In),ge.render(te[In]/Dn,qe[In])}else if(K.isInstancedMesh)ge.renderInstances(me,Ze,K.count);else if(ut.isInstancedBufferGeometry){const te=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,qe=Math.min(ut.instanceCount,te);ge.renderInstances(me,Ze,qe)}else ge.render(me,Ze)};function Oe(R,q,ut){R.transparent===!0&&R.side===ma&&R.forceSinglePass===!1?(R.side=qn,R.needsUpdate=!0,Ni(R,q,ut),R.side=or,R.needsUpdate=!0,Ni(R,q,ut),R.side=ma):Ni(R,q,ut)}this.compile=function(R,q,ut=null){ut===null&&(ut=R),x=Dt.get(ut),x.init(q),D.push(x),ut.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),R!==ut&&R.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),x.setupLights();const ht=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const At=K.material;if(At)if(Array.isArray(At))for(let Ot=0;Ot<At.length;Ot++){const Gt=At[Ot];Oe(Gt,ut,K),ht.add(Gt)}else Oe(At,ut,K),ht.add(At)}),x=D.pop(),ht},this.compileAsync=function(R,q,ut=null){const ht=this.compile(R,q,ut);return new Promise(K=>{function At(){if(ht.forEach(function(Ot){kt.get(Ot).currentProgram.isReady()&&ht.delete(Ot)}),ht.size===0){K(R);return}setTimeout(At,10)}le.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let we=null;function vi(R){we&&we(R)}function pn(){tn.stop()}function mn(){tn.start()}const tn=new u1;tn.setAnimationLoop(vi),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(R){we=R,wt.setAnimationLoop(R),R===null?tn.stop():tn.start()},wt.addEventListener("sessionstart",pn),wt.addEventListener("sessionend",mn),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(q),q=wt.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,q,X),x=Dt.get(R,D.length),x.init(q),D.push(x),vt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Nt.setFromProjectionMatrix(vt,Vi,q.reversedDepth),it=this.localClippingEnabled,Vt=Ct.init(this.clippingPlanes,it),S=at.get(R,U.length),S.init(),U.push(S),wt.enabled===!0&&wt.isPresenting===!0){const At=A.xr.getDepthSensingMesh();At!==null&&Li(At,q,-1/0,A.sortObjects)}Li(R,q,0,A.sortObjects),S.finish(),A.sortObjects===!0&&S.sort(St,P),he=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,he&&Wt.addToRenderList(S,R),this.info.render.frame++,Vt===!0&&Ct.beginShadows();const ut=x.state.shadowsArray;Ht.render(ut,R,q),Vt===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const ht=S.opaque,K=S.transmissive;if(x.setupLights(),q.isArrayCamera){const At=q.cameras;if(K.length>0)for(let Ot=0,Gt=At.length;Ot<Gt;Ot++){const It=At[Ot];Pl(ht,K,R,It)}he&&Wt.render(R);for(let Ot=0,Gt=At.length;Ot<Gt;Ot++){const It=At[Ot];Yr(S,R,It,It.viewport)}}else K.length>0&&Pl(ht,K,R,q),he&&Wt.render(R),Yr(S,R,q);X!==null&&z===0&&(ce.updateMultisampleRenderTarget(X),ce.updateRenderTargetMipmap(X)),R.isScene===!0&&R.onAfterRender(A,R,q),Lt.resetDefaultState(),L=-1,C=null,D.pop(),D.length>0?(x=D[D.length-1],Vt===!0&&Ct.setGlobalState(A.clippingPlanes,x.state.camera)):x=null,U.pop(),U.length>0?S=U[U.length-1]:S=null};function Li(R,q,ut,ht){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)ut=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)x.pushLight(R),R.castShadow&&x.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Nt.intersectsSprite(R)){ht&&$t.setFromMatrixPosition(R.matrixWorld).applyMatrix4(vt);const Ot=V.update(R),Gt=R.material;Gt.visible&&S.push(R,Ot,Gt,ut,$t.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Nt.intersectsObject(R))){const Ot=V.update(R),Gt=R.material;if(ht&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),$t.copy(R.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),$t.copy(Ot.boundingSphere.center)),$t.applyMatrix4(R.matrixWorld).applyMatrix4(vt)),Array.isArray(Gt)){const It=Ot.groups;for(let ee=0,ae=It.length;ee<ae;ee++){const Zt=It[ee],me=Gt[Zt.materialIndex];me&&me.visible&&S.push(R,Ot,me,ut,$t.z,Zt)}}else Gt.visible&&S.push(R,Ot,Gt,ut,$t.z,null)}}const At=R.children;for(let Ot=0,Gt=At.length;Ot<Gt;Ot++)Li(At[Ot],q,ut,ht)}function Yr(R,q,ut,ht){const K=R.opaque,At=R.transmissive,Ot=R.transparent;x.setupLightsView(ut),Vt===!0&&Ct.setGlobalState(A.clippingPlanes,ut),ht&&zt.viewport(H.copy(ht)),K.length>0&&Zr(K,q,ut),At.length>0&&Zr(At,q,ut),Ot.length>0&&Zr(Ot,q,ut),zt.buffers.depth.setTest(!0),zt.buffers.depth.setMask(!0),zt.buffers.color.setMask(!0),zt.setPolygonOffset(!1)}function Pl(R,q,ut,ht){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ht.id]===void 0&&(x.state.transmissionRenderTarget[ht.id]=new lr(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float")?ao:ya,minFilter:Hr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const At=x.state.transmissionRenderTarget[ht.id],Ot=ht.viewport||H;At.setSize(Ot.z*A.transmissionResolutionScale,Ot.w*A.transmissionResolutionScale);const Gt=A.getRenderTarget(),It=A.getActiveCubeFace(),ee=A.getActiveMipmapLevel();A.setRenderTarget(At),A.getClearColor(tt),dt=A.getClearAlpha(),dt<1&&A.setClearColor(16777215,.5),A.clear(),he&&Wt.render(ut);const ae=A.toneMapping;A.toneMapping=rr;const Zt=ht.viewport;if(ht.viewport!==void 0&&(ht.viewport=void 0),x.setupLightsView(ht),Vt===!0&&Ct.setGlobalState(A.clippingPlanes,ht),Zr(R,ut,ht),ce.updateMultisampleRenderTarget(At),ce.updateRenderTargetMipmap(At),le.has("WEBGL_multisampled_render_to_texture")===!1){let me=!1;for(let Re=0,Ze=q.length;Re<Ze;Re++){const Fe=q[Re],ge=Fe.object,te=Fe.geometry,qe=Fe.material,ye=Fe.group;if(qe.side===ma&&ge.layers.test(ht.layers)){const Dn=qe.side;qe.side=qn,qe.needsUpdate=!0,lo(ge,ut,ht,te,qe,ye),qe.side=Dn,qe.needsUpdate=!0,me=!0}}me===!0&&(ce.updateMultisampleRenderTarget(At),ce.updateRenderTargetMipmap(At))}A.setRenderTarget(Gt,It,ee),A.setClearColor(tt,dt),Zt!==void 0&&(ht.viewport=Zt),A.toneMapping=ae}function Zr(R,q,ut){const ht=q.isScene===!0?q.overrideMaterial:null;for(let K=0,At=R.length;K<At;K++){const Ot=R[K],Gt=Ot.object,It=Ot.geometry,ee=Ot.group;let ae=Ot.material;ae.allowOverride===!0&&ht!==null&&(ae=ht),Gt.layers.test(ut.layers)&&lo(Gt,q,ut,It,ae,ee)}}function lo(R,q,ut,ht,K,At){R.onBeforeRender(A,q,ut,ht,K,At),R.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(A,q,ut,ht,R,At),K.transparent===!0&&K.side===ma&&K.forceSinglePass===!1?(K.side=qn,K.needsUpdate=!0,A.renderBufferDirect(ut,q,ht,K,R,At),K.side=or,K.needsUpdate=!0,A.renderBufferDirect(ut,q,ht,K,R,At),K.side=ma):A.renderBufferDirect(ut,q,ht,K,R,At),R.onAfterRender(A,q,ut,ht,K,At)}function Ni(R,q,ut){q.isScene!==!0&&(q=Yt);const ht=kt.get(R),K=x.state.lights,At=x.state.shadowsArray,Ot=K.state.version,Gt=Q.getParameters(R,K.state,At,q,ut),It=Q.getProgramCacheKey(Gt);let ee=ht.programs;ht.environment=R.isMeshStandardMaterial?q.environment:null,ht.fog=q.fog,ht.envMap=(R.isMeshStandardMaterial?We:Xe).get(R.envMap||ht.environment),ht.envMapRotation=ht.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,ee===void 0&&(R.addEventListener("dispose",xt),ee=new Map,ht.programs=ee);let ae=ee.get(It);if(ae!==void 0){if(ht.currentProgram===ae&&ht.lightsStateVersion===Ot)return ji(R,Gt),ae}else Gt.uniforms=Q.getUniforms(R),R.onBeforeCompile(Gt,A),ae=Q.acquireProgram(Gt,It),ee.set(It,ae),ht.uniforms=Gt.uniforms;const Zt=ht.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Zt.clippingPlanes=Ct.uniform),ji(R,Gt),ht.needsLights=Ra(R),ht.lightsStateVersion=Ot,ht.needsLights&&(Zt.ambientLightColor.value=K.state.ambient,Zt.lightProbe.value=K.state.probe,Zt.directionalLights.value=K.state.directional,Zt.directionalLightShadows.value=K.state.directionalShadow,Zt.spotLights.value=K.state.spot,Zt.spotLightShadows.value=K.state.spotShadow,Zt.rectAreaLights.value=K.state.rectArea,Zt.ltc_1.value=K.state.rectAreaLTC1,Zt.ltc_2.value=K.state.rectAreaLTC2,Zt.pointLights.value=K.state.point,Zt.pointLightShadows.value=K.state.pointShadow,Zt.hemisphereLights.value=K.state.hemi,Zt.directionalShadowMap.value=K.state.directionalShadowMap,Zt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Zt.spotShadowMap.value=K.state.spotShadowMap,Zt.spotLightMatrix.value=K.state.spotLightMatrix,Zt.spotLightMap.value=K.state.spotLightMap,Zt.pointShadowMap.value=K.state.pointShadowMap,Zt.pointShadowMatrix.value=K.state.pointShadowMatrix),ht.currentProgram=ae,ht.uniformsList=null,ae}function Kr(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=Tu.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function ji(R,q){const ut=kt.get(R);ut.outputColorSpace=q.outputColorSpace,ut.batching=q.batching,ut.batchingColor=q.batchingColor,ut.instancing=q.instancing,ut.instancingColor=q.instancingColor,ut.instancingMorph=q.instancingMorph,ut.skinning=q.skinning,ut.morphTargets=q.morphTargets,ut.morphNormals=q.morphNormals,ut.morphColors=q.morphColors,ut.morphTargetsCount=q.morphTargetsCount,ut.numClippingPlanes=q.numClippingPlanes,ut.numIntersection=q.numClipIntersection,ut.vertexAlphas=q.vertexAlphas,ut.vertexTangents=q.vertexTangents,ut.toneMapping=q.toneMapping}function wa(R,q,ut,ht,K){q.isScene!==!0&&(q=Yt),ce.resetTextureUnits();const At=q.fog,Ot=ht.isMeshStandardMaterial?q.environment:null,Gt=X===null?A.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Js,It=(ht.isMeshStandardMaterial?We:Xe).get(ht.envMap||Ot),ee=ht.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,ae=!!ut.attributes.tangent&&(!!ht.normalMap||ht.anisotropy>0),Zt=!!ut.morphAttributes.position,me=!!ut.morphAttributes.normal,Re=!!ut.morphAttributes.color;let Ze=rr;ht.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Ze=A.toneMapping);const Fe=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,ge=Fe!==void 0?Fe.length:0,te=kt.get(ht),qe=x.state.lights;if(Vt===!0&&(it===!0||R!==C)){const en=R===C&&ht.id===L;Ct.setState(ht,R,en)}let ye=!1;ht.version===te.__version?(te.needsLights&&te.lightsStateVersion!==qe.state.version||te.outputColorSpace!==Gt||K.isBatchedMesh&&te.batching===!1||!K.isBatchedMesh&&te.batching===!0||K.isBatchedMesh&&te.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&te.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&te.instancing===!1||!K.isInstancedMesh&&te.instancing===!0||K.isSkinnedMesh&&te.skinning===!1||!K.isSkinnedMesh&&te.skinning===!0||K.isInstancedMesh&&te.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&te.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&te.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&te.instancingMorph===!1&&K.morphTexture!==null||te.envMap!==It||ht.fog===!0&&te.fog!==At||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==Ct.numPlanes||te.numIntersection!==Ct.numIntersection)||te.vertexAlphas!==ee||te.vertexTangents!==ae||te.morphTargets!==Zt||te.morphNormals!==me||te.morphColors!==Re||te.toneMapping!==Ze||te.morphTargetsCount!==ge)&&(ye=!0):(ye=!0,te.__version=ht.version);let Dn=te.currentProgram;ye===!0&&(Dn=Ni(ht,q,K));let _i=!1,In=!1,yn=!1;const Ve=Dn.getUniforms(),Fn=te.uniforms;if(zt.useProgram(Dn.program)&&(_i=!0,In=!0,yn=!0),ht.id!==L&&(L=ht.id,In=!0),_i||C!==R){zt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ve.setValue(G,"projectionMatrix",R.projectionMatrix),Ve.setValue(G,"viewMatrix",R.matrixWorldInverse);const Tn=Ve.map.cameraPosition;Tn!==void 0&&Tn.setValue(G,Mt.setFromMatrixPosition(R.matrixWorld)),ne.logarithmicDepthBuffer&&Ve.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ht.isMeshPhongMaterial||ht.isMeshToonMaterial||ht.isMeshLambertMaterial||ht.isMeshBasicMaterial||ht.isMeshStandardMaterial||ht.isShaderMaterial)&&Ve.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,In=!0,yn=!0)}if(K.isSkinnedMesh){Ve.setOptional(G,K,"bindMatrix"),Ve.setOptional(G,K,"bindMatrixInverse");const en=K.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),Ve.setValue(G,"boneTexture",en.boneTexture,ce))}K.isBatchedMesh&&(Ve.setOptional(G,K,"batchingTexture"),Ve.setValue(G,"batchingTexture",K._matricesTexture,ce),Ve.setOptional(G,K,"batchingIdTexture"),Ve.setValue(G,"batchingIdTexture",K._indirectTexture,ce),Ve.setOptional(G,K,"batchingColorTexture"),K._colorsTexture!==null&&Ve.setValue(G,"batchingColorTexture",K._colorsTexture,ce));const Un=ut.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&bt.update(K,ut,Dn),(In||te.receiveShadow!==K.receiveShadow)&&(te.receiveShadow=K.receiveShadow,Ve.setValue(G,"receiveShadow",K.receiveShadow)),ht.isMeshGouraudMaterial&&ht.envMap!==null&&(Fn.envMap.value=It,Fn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),ht.isMeshStandardMaterial&&ht.envMap===null&&q.environment!==null&&(Fn.envMapIntensity.value=q.environmentIntensity),In&&(Ve.setValue(G,"toneMappingExposure",A.toneMappingExposure),te.needsLights&&hr(Fn,yn),At&&ht.fog===!0&&ft.refreshFogUniforms(Fn,At),ft.refreshMaterialUniforms(Fn,ht,j,$,x.state.transmissionRenderTarget[R.id]),Tu.upload(G,Kr(te),Fn,ce)),ht.isShaderMaterial&&ht.uniformsNeedUpdate===!0&&(Tu.upload(G,Kr(te),Fn,ce),ht.uniformsNeedUpdate=!1),ht.isSpriteMaterial&&Ve.setValue(G,"center",K.center),Ve.setValue(G,"modelViewMatrix",K.modelViewMatrix),Ve.setValue(G,"normalMatrix",K.normalMatrix),Ve.setValue(G,"modelMatrix",K.matrixWorld),ht.isShaderMaterial||ht.isRawShaderMaterial){const en=ht.uniformsGroups;for(let Tn=0,$r=en.length;Tn<$r;Tn++){const Hn=en[Tn];ue.update(Hn,Dn),ue.bind(Hn,Dn)}}return Dn}function hr(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Ra(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,q,ut){const ht=kt.get(R);ht.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ht.__autoAllocateDepthBuffer===!1&&(ht.__useRenderToTexture=!1),kt.get(R.texture).__webglTexture=q,kt.get(R.depthTexture).__webglTexture=ht.__autoAllocateDepthBuffer?void 0:ut,ht.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const ut=kt.get(R);ut.__webglFramebuffer=q,ut.__useDefaultFramebuffer=q===void 0};const ln=G.createFramebuffer();this.setRenderTarget=function(R,q=0,ut=0){X=R,I=q,z=ut;let ht=!0,K=null,At=!1,Ot=!1;if(R){const It=kt.get(R);if(It.__useDefaultFramebuffer!==void 0)zt.bindFramebuffer(G.FRAMEBUFFER,null),ht=!1;else if(It.__webglFramebuffer===void 0)ce.setupRenderTarget(R);else if(It.__hasExternalTextures)ce.rebindTextures(R,kt.get(R.texture).__webglTexture,kt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Zt=R.depthTexture;if(It.__boundDepthTexture!==Zt){if(Zt!==null&&kt.has(Zt)&&(R.width!==Zt.image.width||R.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ce.setupDepthRenderbuffer(R)}}const ee=R.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Ot=!0);const ae=kt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ae[q])?K=ae[q][ut]:K=ae[q],At=!0):R.samples>0&&ce.useMultisampledRTT(R)===!1?K=kt.get(R).__webglMultisampledFramebuffer:Array.isArray(ae)?K=ae[ut]:K=ae,H.copy(R.viewport),Z.copy(R.scissor),lt=R.scissorTest}else H.copy(et).multiplyScalar(j).floor(),Z.copy(yt).multiplyScalar(j).floor(),lt=Et;if(ut!==0&&(K=ln),zt.bindFramebuffer(G.FRAMEBUFFER,K)&&ht&&zt.drawBuffers(R,K),zt.viewport(H),zt.scissor(Z),zt.setScissorTest(lt),At){const It=kt.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,It.__webglTexture,ut)}else if(Ot){const It=q;for(let ee=0;ee<R.textures.length;ee++){const ae=kt.get(R.textures[ee]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+ee,ae.__webglTexture,ut,It)}}else if(R!==null&&ut!==0){const It=kt.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,It.__webglTexture,ut)}L=-1},this.readRenderTargetPixels=function(R,q,ut,ht,K,At,Ot,Gt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=kt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(It=It[Ot]),It){zt.bindFramebuffer(G.FRAMEBUFFER,It);try{const ee=R.textures[Gt],ae=ee.format,Zt=ee.type;if(!ne.textureFormatReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-ht&&ut>=0&&ut<=R.height-K&&(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Gt),G.readPixels(q,ut,ht,K,qt.convert(ae),qt.convert(Zt),At))}finally{const ee=X!==null?kt.get(X).__webglFramebuffer:null;zt.bindFramebuffer(G.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(R,q,ut,ht,K,At,Ot,Gt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=kt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(It=It[Ot]),It)if(q>=0&&q<=R.width-ht&&ut>=0&&ut<=R.height-K){zt.bindFramebuffer(G.FRAMEBUFFER,It);const ee=R.textures[Gt],ae=ee.format,Zt=ee.type;if(!ne.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const me=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,me),G.bufferData(G.PIXEL_PACK_BUFFER,At.byteLength,G.STREAM_READ),R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Gt),G.readPixels(q,ut,ht,K,qt.convert(ae),qt.convert(Zt),0);const Re=X!==null?kt.get(X).__webglFramebuffer:null;zt.bindFramebuffer(G.FRAMEBUFFER,Re);const Ze=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await cA(G,Ze,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,me),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,At),G.deleteBuffer(me),G.deleteSync(Ze),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,ut=0){const ht=Math.pow(2,-ut),K=Math.floor(R.image.width*ht),At=Math.floor(R.image.height*ht),Ot=q!==null?q.x:0,Gt=q!==null?q.y:0;ce.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,ut,0,0,Ot,Gt,K,At),zt.unbindTexture()};const Il=G.createFramebuffer(),Fl=G.createFramebuffer();this.copyTextureToTexture=function(R,q,ut=null,ht=null,K=0,At=null){At===null&&(K!==0?(El("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),At=K,K=0):At=0);let Ot,Gt,It,ee,ae,Zt,me,Re,Ze;const Fe=R.isCompressedTexture?R.mipmaps[At]:R.image;if(ut!==null)Ot=ut.max.x-ut.min.x,Gt=ut.max.y-ut.min.y,It=ut.isBox3?ut.max.z-ut.min.z:1,ee=ut.min.x,ae=ut.min.y,Zt=ut.isBox3?ut.min.z:0;else{const Un=Math.pow(2,-K);Ot=Math.floor(Fe.width*Un),Gt=Math.floor(Fe.height*Un),R.isDataArrayTexture?It=Fe.depth:R.isData3DTexture?It=Math.floor(Fe.depth*Un):It=1,ee=0,ae=0,Zt=0}ht!==null?(me=ht.x,Re=ht.y,Ze=ht.z):(me=0,Re=0,Ze=0);const ge=qt.convert(q.format),te=qt.convert(q.type);let qe;q.isData3DTexture?(ce.setTexture3D(q,0),qe=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ce.setTexture2DArray(q,0),qe=G.TEXTURE_2D_ARRAY):(ce.setTexture2D(q,0),qe=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);const ye=G.getParameter(G.UNPACK_ROW_LENGTH),Dn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),_i=G.getParameter(G.UNPACK_SKIP_PIXELS),In=G.getParameter(G.UNPACK_SKIP_ROWS),yn=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Fe.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Fe.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ee),G.pixelStorei(G.UNPACK_SKIP_ROWS,ae),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Zt);const Ve=R.isDataArrayTexture||R.isData3DTexture,Fn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const Un=kt.get(R),en=kt.get(q),Tn=kt.get(Un.__renderTarget),$r=kt.get(en.__renderTarget);zt.bindFramebuffer(G.READ_FRAMEBUFFER,Tn.__webglFramebuffer),zt.bindFramebuffer(G.DRAW_FRAMEBUFFER,$r.__webglFramebuffer);for(let Hn=0;Hn<It;Hn++)Ve&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,kt.get(R).__webglTexture,K,Zt+Hn),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,kt.get(q).__webglTexture,At,Ze+Hn)),G.blitFramebuffer(ee,ae,Ot,Gt,me,Re,Ot,Gt,G.DEPTH_BUFFER_BIT,G.NEAREST);zt.bindFramebuffer(G.READ_FRAMEBUFFER,null),zt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||kt.has(R)){const Un=kt.get(R),en=kt.get(q);zt.bindFramebuffer(G.READ_FRAMEBUFFER,Il),zt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Fl);for(let Tn=0;Tn<It;Tn++)Ve?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Un.__webglTexture,K,Zt+Tn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Un.__webglTexture,K),Fn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,en.__webglTexture,At,Ze+Tn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,en.__webglTexture,At),K!==0?G.blitFramebuffer(ee,ae,Ot,Gt,me,Re,Ot,Gt,G.COLOR_BUFFER_BIT,G.NEAREST):Fn?G.copyTexSubImage3D(qe,At,me,Re,Ze+Tn,ee,ae,Ot,Gt):G.copyTexSubImage2D(qe,At,me,Re,ee,ae,Ot,Gt);zt.bindFramebuffer(G.READ_FRAMEBUFFER,null),zt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Fn?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(qe,At,me,Re,Ze,Ot,Gt,It,ge,te,Fe.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(qe,At,me,Re,Ze,Ot,Gt,It,ge,Fe.data):G.texSubImage3D(qe,At,me,Re,Ze,Ot,Gt,It,ge,te,Fe):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,At,me,Re,Ot,Gt,ge,te,Fe.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,At,me,Re,Fe.width,Fe.height,ge,Fe.data):G.texSubImage2D(G.TEXTURE_2D,At,me,Re,Ot,Gt,ge,te,Fe);G.pixelStorei(G.UNPACK_ROW_LENGTH,ye),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Dn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,_i),G.pixelStorei(G.UNPACK_SKIP_ROWS,In),G.pixelStorei(G.UNPACK_SKIP_IMAGES,yn),At===0&&q.generateMipmaps&&G.generateMipmap(qe),zt.unbindTexture()},this.initRenderTarget=function(R){kt.get(R).__webglFramebuffer===void 0&&ce.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ce.setTextureCube(R,0):R.isData3DTexture?ce.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ce.setTexture2DArray(R,0):ce.setTexture2D(R,0),zt.unbindTexture()},this.resetState=function(){I=0,z=0,X=null,zt.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=De._getDrawingBufferColorSpace(t),e.unpackColorSpace=De._getUnpackColorSpace()}}function m1({mouseForce:i=20,cursorSize:t=100,isViscous:e=!1,viscous:r=30,iterationsViscous:o=32,iterationsPoisson:l=32,dt:u=.014,BFECC:f=!0,resolution:d=.5,isBounce:p=!1,colors:g=["#5227FF","#FF9FFC","#B19EEF"],style:v={},className:_="",autoDemo:y=!0,autoSpeed:M=.5,autoIntensity:b=2.2,takeoverDuration:S=.25,autoResumeDelay:x=1e3,autoRampDuration:U=.6}){const D=pt.useRef(null),A=pt.useRef(null),N=pt.useRef(null),I=pt.useRef(null),z=pt.useRef(null),X=pt.useRef(!0),L=pt.useRef(null);return pt.useEffect(()=>{if(!D.current)return;function C(O){let E;Array.isArray(O)&&O.length>0?O.length===1?E=[O[0],O[0]]:E=O:E=["#ffffff","#ffffff"];const V=E.length,Q=new Uint8Array(V*4);for(let at=0;at<V;at++){const Dt=new Le(E[at]);Q[at*4+0]=Math.round(Dt.r*255),Q[at*4+1]=Math.round(Dt.g*255),Q[at*4+2]=Math.round(Dt.b*255),Q[at*4+3]=255}const ft=new OA(Q,V,1,mi);return ft.magFilter=jn,ft.minFilter=jn,ft.wrapS=wi,ft.wrapT=wi,ft.generateMipmaps=!1,ft.needsUpdate=!0,ft}const H=C(g),Z=new rn(0,0,0,0);class lt{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(E){this.container=E,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new R3({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Le(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new WA,this.clock.start()}resize(){if(!this.container)return;const E=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(E.width)),this.height=Math.max(1,Math.floor(E.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const tt=new lt;class dt{constructor(){this.mouseMoved=!1,this.coords=new fe,this.coords_old=new fe,this.diff=new fe,this.timer=null,this.container=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onMouseEnter=this.onMouseEnter.bind(this),this._onMouseLeave=this.onMouseLeave.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new fe,this.takeoverTo=new fe,this.onInteract=null}init(E){this.container=E,E.addEventListener("mousemove",this._onMouseMove,!1),E.addEventListener("touchstart",this._onTouchStart,!1),E.addEventListener("touchmove",this._onTouchMove,!1),E.addEventListener("mouseenter",this._onMouseEnter,!1),E.addEventListener("mouseleave",this._onMouseLeave,!1),E.addEventListener("touchend",this._onTouchEnd,!1)}dispose(){this.container&&(this.container.removeEventListener("mousemove",this._onMouseMove,!1),this.container.removeEventListener("touchstart",this._onTouchStart,!1),this.container.removeEventListener("touchmove",this._onTouchMove,!1),this.container.removeEventListener("mouseenter",this._onMouseEnter,!1),this.container.removeEventListener("mouseleave",this._onMouseLeave,!1),this.container.removeEventListener("touchend",this._onTouchEnd,!1))}setCoords(E,V){if(!this.container)return;this.timer&&clearTimeout(this.timer);const Q=this.container.getBoundingClientRect(),ft=(E-Q.left)/Q.width,at=(V-Q.top)/Q.height;this.coords.set(ft*2-1,-(at*2-1)),this.mouseMoved=!0,this.timer=setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(E,V){this.coords.set(E,V),this.mouseMoved=!0}onDocumentMouseMove(E){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){const V=this.container.getBoundingClientRect(),Q=(E.clientX-V.left)/V.width,ft=(E.clientY-V.top)/V.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(Q*2-1,-(ft*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(E.clientX,E.clientY),this.hasUserControl=!0}onDocumentTouchStart(E){if(E.touches.length===1){const V=E.touches[0];this.onInteract&&this.onInteract(),this.setCoords(V.pageX,V.pageY),this.hasUserControl=!0}}onDocumentTouchMove(E){if(E.touches.length===1){const V=E.touches[0];this.onInteract&&this.onInteract(),this.setCoords(V.pageX,V.pageY)}}onTouchEnd(){this.isHoverInside=!1}onMouseEnter(){this.isHoverInside=!0}onMouseLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const E=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(E>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const V=E*E*(3-2*E);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,V)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const F=new dt;class ${constructor(E,V,Q){this.mouse=E,this.manager=V,this.enabled=Q.enabled,this.speed=Q.speed,this.resumeDelay=Q.resumeDelay||3e3,this.rampDurationMs=(Q.rampDuration||0)*1e3,this.active=!1,this.current=new fe(0,0),this.target=new fe,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new fe,this.pickNewTarget()}pickNewTarget(){const E=Math.random;this.target.set((E()*2-1)*(1-this.margin),(E()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const E=performance.now();if(E-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=E,this.activationTime=E),!this.active)return;this.mouse.isAutoActive=!0;let Q=(E-this.lastTime)/1e3;this.lastTime=E,Q>.2&&(Q=.016);const ft=this._tmpDir.subVectors(this.target,this.current),at=ft.length();if(at<.01){this.pickNewTarget();return}ft.normalize();let Dt=1;if(this.rampDurationMs>0){const Wt=Math.min(1,(E-this.activationTime)/this.rampDurationMs);Dt=Wt*Wt*(3-2*Wt)}const Ct=this.speed*Q*Dt,Ht=Math.min(Ct,at);this.current.addScaledVector(ft,Ht),this.mouse.setNormalized(this.current.x,this.current.y)}}const j=`
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`,St=`
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`,P=`
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`,et=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`,yt=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`,Et=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`,Nt=`
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,Vt=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`,it=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`,vt=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class Mt{constructor(E){this.props=E||{},this.uniforms=this.props.material?.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new W_,this.camera=new Nu,this.uniforms&&(this.material=new hu(this.props.material),this.geometry=new Vr(2,2),this.plane=new gi(this.geometry,this.material),this.scene.add(this.plane))}update(){tt.renderer.setRenderTarget(this.props.output||null),tt.renderer.render(this.scene,this.camera),tt.renderer.setRenderTarget(null)}}class $t extends Mt{constructor(E){super({material:{vertexShader:j,fragmentShader:et,uniforms:{boundarySpace:{value:E.cellScale},px:{value:E.cellScale},fboSize:{value:E.fboSize},velocity:{value:E.src.texture},dt:{value:E.dt},isBFECC:{value:!0}}},output:E.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const E=new Ta,V=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);E.setAttribute("position",new Ci(V,3));const Q=new hu({vertexShader:St,fragmentShader:et,uniforms:this.uniforms});this.line=new HA(E,Q),this.scene.add(this.line)}update({dt:E,isBounce:V,BFECC:Q}){this.uniforms.dt.value=E,this.line.visible=V,this.uniforms.isBFECC.value=Q,super.update()}}class Yt extends Mt{constructor(E){super({output:E.dst}),this.init(E)}init(E){super.init();const V=new Vr(1,1),Q=new hu({vertexShader:P,fragmentShader:Nt,blending:$d,depthWrite:!1,uniforms:{px:{value:E.cellScale},force:{value:new fe(0,0)},center:{value:new fe(0,0)},scale:{value:new fe(E.cursor_size,E.cursor_size)}}});this.mouse=new gi(V,Q),this.scene.add(this.mouse)}update(E){const V=F.diff.x/2*E.mouse_force,Q=F.diff.y/2*E.mouse_force,ft=E.cursor_size*E.cellScale.x,at=E.cursor_size*E.cellScale.y,Dt=Math.min(Math.max(F.coords.x,-1+ft+E.cellScale.x*2),1-ft-E.cellScale.x*2),Ct=Math.min(Math.max(F.coords.y,-1+at+E.cellScale.y*2),1-at-E.cellScale.y*2),Ht=this.mouse.material.uniforms;Ht.force.value.set(V,Q),Ht.center.value.set(Dt,Ct),Ht.scale.value.set(E.cursor_size,E.cursor_size),super.update()}}class he extends Mt{constructor(E){super({material:{vertexShader:j,fragmentShader:vt,uniforms:{boundarySpace:{value:E.boundarySpace},velocity:{value:E.src.texture},velocity_new:{value:E.dst_.texture},v:{value:E.viscous},px:{value:E.cellScale},dt:{value:E.dt}}},output:E.dst,output0:E.dst_,output1:E.dst}),this.init()}update({viscous:E,iterations:V,dt:Q}){let ft,at;this.uniforms.v.value=E;for(let Dt=0;Dt<V;Dt++)Dt%2===0?(ft=this.props.output0,at=this.props.output1):(ft=this.props.output1,at=this.props.output0),this.uniforms.velocity_new.value=ft.texture,this.props.output=at,this.uniforms.dt.value=Q,super.update();return at}}class Je extends Mt{constructor(E){super({material:{vertexShader:j,fragmentShader:Et,uniforms:{boundarySpace:{value:E.boundarySpace},velocity:{value:E.src.texture},px:{value:E.cellScale},dt:{value:E.dt}}},output:E.dst}),this.init()}update({vel:E}){this.uniforms.velocity.value=E.texture,super.update()}}class G extends Mt{constructor(E){super({material:{vertexShader:j,fragmentShader:Vt,uniforms:{boundarySpace:{value:E.boundarySpace},pressure:{value:E.dst_.texture},divergence:{value:E.src.texture},px:{value:E.cellScale}}},output:E.dst,output0:E.dst_,output1:E.dst}),this.init()}update({iterations:E}){let V,Q;for(let ft=0;ft<E;ft++)ft%2===0?(V=this.props.output0,Q=this.props.output1):(V=this.props.output1,Q=this.props.output0),this.uniforms.pressure.value=V.texture,this.props.output=Q,super.update();return Q}}class Ne extends Mt{constructor(E){super({material:{vertexShader:j,fragmentShader:it,uniforms:{boundarySpace:{value:E.boundarySpace},pressure:{value:E.src_p.texture},velocity:{value:E.src_v.texture},px:{value:E.cellScale},dt:{value:E.dt}}},output:E.dst}),this.init()}update({vel:E,pressure:V}){this.uniforms.velocity.value=E.texture,this.uniforms.pressure.value=V.texture,super.update()}}class le{constructor(E){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...E},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new fe,this.cellScale=new fe,this.boundarySpace=new fe,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?ao:Gi}createAllFBO(){const V={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:jn,magFilter:jn,wrapS:wi,wrapT:wi};for(let Q in this.fbos)this.fbos[Q]=new lr(this.fboSize.x,this.fboSize.y,V)}createShaderPass(){this.advection=new $t({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new Yt({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new he({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new Je({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new G({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new Ne({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const E=Math.max(1,Math.round(this.options.resolution*tt.width)),V=Math.max(1,Math.round(this.options.resolution*tt.height)),Q=1/E,ft=1/V;this.cellScale.set(Q,ft),this.fboSize.set(E,V)}resize(){this.calcSize();for(let E in this.fbos)this.fbos[E].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let E=this.fbos.vel_1;this.options.isViscous&&(E=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:E});const V=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:E,pressure:V})}}class ne{constructor(){this.init()}init(){this.simulation=new le,this.scene=new W_,this.camera=new Nu,this.output=new gi(new Vr(2,2),new hu({vertexShader:j,fragmentShader:yt,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new fe},palette:{value:H},bgColor:{value:Z}}})),this.scene.add(this.output)}addScene(E){this.scene.add(E)}resize(){this.simulation.resize()}render(){tt.renderer.setRenderTarget(null),tt.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class zt{constructor(E){this.props=E,tt.init(E.$wrapper),F.init(E.$wrapper),F.autoIntensity=E.autoIntensity,F.takeoverDuration=E.takeoverDuration,this.lastUserInteraction=performance.now(),F.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new $(F,this,{enabled:E.autoDemo,speed:E.autoSpeed,resumeDelay:E.autoResumeDelay,rampDuration:E.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():X.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(tt.renderer.domElement),this.output=new ne}resize(){tt.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),F.update(),tt.update(),this.output.update()}loop(){this.running&&(this.render(),I.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,I.current&&(cancelAnimationFrame(I.current),I.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),F.dispose(),tt.renderer){const E=tt.renderer.domElement;E&&E.parentNode&&E.parentNode.removeChild(E),tt.renderer.dispose()}}catch{}}}const Te=D.current;Te.style.position=Te.style.position||"relative",Te.style.overflow=Te.style.overflow||"hidden";const kt=new zt({$wrapper:Te,autoDemo:y,autoSpeed:M,autoIntensity:b,takeoverDuration:S,autoResumeDelay:x,autoRampDuration:U});A.current=kt,(()=>{if(!A.current)return;const O=A.current.output?.simulation;if(!O)return;const E=O.options.resolution;Object.assign(O.options,{mouse_force:i,cursor_size:t,isViscous:e,viscous:r,iterations_viscous:o,iterations_poisson:l,dt:u,BFECC:f,resolution:d,isBounce:p}),d!==E&&O.resize()})(),kt.start();const Xe=new IntersectionObserver(O=>{const E=O[0],V=E.isIntersecting&&E.intersectionRatio>0;X.current=V,A.current&&(V&&!document.hidden?A.current.start():A.current.pause())},{threshold:[0,.01,.1]});Xe.observe(Te),z.current=Xe;const We=new ResizeObserver(()=>{A.current&&(L.current&&cancelAnimationFrame(L.current),L.current=requestAnimationFrame(()=>{A.current&&A.current.resize()}))});return We.observe(Te),N.current=We,()=>{if(I.current&&cancelAnimationFrame(I.current),N.current)try{N.current.disconnect()}catch{}if(z.current)try{z.current.disconnect()}catch{}A.current&&A.current.dispose(),A.current=null}},[f,t,u,p,e,l,o,i,d,r,g,y,M,b,S,x,U]),pt.useEffect(()=>{const C=A.current;if(!C)return;const H=C.output?.simulation;if(!H)return;const Z=H.options.resolution;Object.assign(H.options,{mouse_force:i,cursor_size:t,isViscous:e,viscous:r,iterations_viscous:o,iterations_poisson:l,dt:u,BFECC:f,resolution:d,isBounce:p}),C.autoDriver&&(C.autoDriver.enabled=y,C.autoDriver.speed=M,C.autoDriver.resumeDelay=x,C.autoDriver.rampDurationMs=U*1e3,C.autoDriver.mouse&&(C.autoDriver.mouse.autoIntensity=b,C.autoDriver.mouse.takeoverDuration=S)),d!==Z&&H.resize()},[i,t,e,r,o,l,u,f,d,p,y,M,b,S,x,U]),st.jsx("div",{ref:D,className:`liquid-ether-container ${_||""}`,style:v})}const C3="/portfolio/assets/1-B47HqP1s.jpg",D3="/portfolio/assets/React_Next_Developer_3yearEXP-BeLJA0co.pdf";let U3=class extends HTMLElement{_propsToUpgrade={};shadow;template;defaultProps;isAttached=!1;constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.template=document.createElement("template")}storePropsToUpgrade(t){t.forEach((e=>{this.hasOwnProperty(e)&&this[e]!==void 0&&(this._propsToUpgrade[e]=this[e],delete this[e])}))}upgradeStoredProps(){Object.entries(this._propsToUpgrade).forEach((([t,e])=>{this.setAttribute(t,e)}))}reflect(t){t.forEach((e=>{Object.defineProperty(this,e,{set(r){"string,number".includes(typeof r)?this.setAttribute(e,r.toString()):this.removeAttribute(e)},get(){return this.getAttribute(e)}})}))}applyDefaultProps(t){this.defaultProps=t,Object.entries(t).forEach((([e,r])=>{this[e]=this[e]||r.toString()}))}};function Sx(i,t){return t.replace(/([-A-y])/g,",$1").split(",").filter((e=>e!=="")).map((e=>{const r=e.match(/(\d+\.?\d*)/g)?.[0],o=parseFloat(r)*i;return e.replace(r,o.toString())})).join(" ")}var Ex=":host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{height:var(--uib-size);overflow:visible;transform-origin:center;width:var(--uib-size)}.car{fill:none;stroke:var(--uib-color);stroke-dasharray:var(--uib-dash),var(--uib-gap);stroke-dashoffset:0;stroke-linecap:round;animation:travel var(--uib-speed) linear infinite;will-change:stroke-dasharray,stroke-dashoffset}.car,.track{transition:stroke .5s ease}.track{stroke:var(--uib-color);opacity:var(--uib-bg-opacity)}@keyframes travel{0%{stroke-dashoffset:0}to{stroke-dashoffset:-100}}";let Mx=class extends U3{_attributes=["size","color","speed","stroke","stroke-length","bg-opacity"];size;color;speed;stroke;"stroke-length";"bg-opacity";d;static get observedAttributes(){return["size","color","speed","stroke","stroke-length","bg-opacity"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes),this.d="M37.2,23.4c0,9.1-4.9,17-12.3,21.2c-3.6,2.1-7.8,3.3-12.3,3.3c-4.5,0-8.6-1.2-12.2-3.3c0-9.1,4.9-16.9,12.3-21.2c3.6-2.1,7.8-3.3,12.2-3.3S33.6,21.3,37.2,23.4c7.3,4.2,12.2,12.1,12.3,21.2c-3.6,2.1-7.8,3.3-12.2,3.3c-4.5,0-8.6-1.2-12.3-3.3c-7.3-4.2-12.2-12.1-12.2-21.2c0-9.1,4.9-17,12.2-21.2C32.3,6.4,37.2,14.3,37.2,23.4z"}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:40,color:"black",stroke:4,"stroke-length":.15,speed:1.4,"bg-opacity":.1});const t=Sx(parseInt(this.size)/50,this.d);this.template.innerHTML=`
      <svg
        class="container" 
        x="0px" 
        y="0px"
        viewBox="0 0 ${this.size} ${this.size}"
        height="${this.size}"
        width="${this.size}"
        preserveAspectRatio='xMidYMid meet'
      >
        <path
          class="track" 
          fill="none" 
          stroke-width="${this.stroke}" 
          pathlength="100"
          d="${t}"
        />

        <path
          class="car" 
          fill="none" 
          stroke-width="${this.stroke}" 
          pathlength="100"
          d="${t}"
        />
      </svg>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-dash: ${100*parseFloat(this["stroke-length"])};
          --uib-gap: ${100-100*parseFloat(this["stroke-length"])};
          --uib-bg-opacity: ${this["bg-opacity"]};
        }
        ${Ex}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){const t=this.shadow.querySelector("style"),e=this.shadow.querySelector("svg"),r=this.shadow.querySelectorAll("path");t&&(e.setAttribute("height",this.size),e.setAttribute("width",this.size),e.setAttribute("viewBox",`0 0 ${this.size} ${this.size}`),r.forEach((o=>{o.setAttribute("stroke-width",this.stroke),o.setAttribute("d",Sx(parseInt(this.size)/50,this.d))})),t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-dash: ${100*parseFloat(this["stroke-length"])};
        --uib-gap: ${100-100*parseFloat(this["stroke-length"])};
        --uib-bg-opacity: ${this["bg-opacity"]};
      }
      ${Ex}
    `)}};var Sm={register:(i="l-trefoil")=>{customElements.get(i)||customElements.define(i,class extends Mx{})},element:Mx};Sm.register();const L3=()=>{const[i,t]=pt.useState(!0);return pt.useEffect(()=>{const e=setTimeout(()=>t(!1),3e3);return()=>clearTimeout(e)},[]),st.jsxs("div",{className:"portfolio-container",children:[i&&st.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"rgba(255, 255, 255, 0.6)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3},children:st.jsx("l-trefoil",{size:"60",stroke:"6","stroke-length":"0.20","bg-opacity":"0.1",speed:"1.4",color:"black"})}),st.jsx("div",{className:"background",children:st.jsx(m1,{colors:["#5227FF","#FF9FFC","#B19EEF"],mouseForce:50,cursorSize:40,isViscous:!1,viscous:30,iterationsViscous:32,iterationsPoisson:32,resolution:.5,isBounce:!1,autoDemo:!0,autoSpeed:.5,autoIntensity:2.2,takeoverDuration:.25,autoResumeDelay:3e3,autoRampDuration:.6})}),st.jsxs("div",{className:"content",children:[st.jsxs("nav",{className:"navbar",children:[st.jsxs("div",{className:"nav-left",children:[st.jsx(Hi,{to:"/",children:"Home"}),st.jsx(Hi,{to:"/experience",children:"Experience"}),st.jsx(Hi,{to:"/contact",children:"Contact"})]}),st.jsxs("div",{className:"nav-right",children:[st.jsx(Hi,{to:"/",children:"Home"}),st.jsx("a",{href:D3,download:"Shankhanil_Sadhak_Resume.pdf",className:"resume-btn",children:"Resume"})]})]}),st.jsxs("section",{className:"hero",children:[st.jsxs("h1",{children:["Hi! I’m ",st.jsx("span",{className:"highlight",children:"Shankhanil Sadhak"})]}),st.jsx("p",{className:"subtitle",children:"I design and build multi-tenant web applications."})]}),st.jsxs("section",{className:"about",children:[st.jsx("img",{src:C3,alt:"profile",className:"profile-pic"}),st.jsxs("div",{className:"about-text",children:[st.jsx("h2",{children:"About Me"}),st.jsx("p",{children:"I'm a software engineer who creates exceptional digital products. I’ve spent a year building and scaling applications with Laravel and React with Typescript."})]})]}),st.jsxs("section",{id:"experience",className:"stats",children:[st.jsxs("div",{className:"card",children:[st.jsx("i",{className:"fas fa-image"}),st.jsx("h3",{children:"12"}),st.jsx("p",{children:"Projects"})]}),st.jsxs("div",{className:"card",children:[st.jsx("i",{className:"fas fa-briefcase"}),st.jsx("h3",{children:"2"}),st.jsx("p",{children:"Companies"})]}),st.jsxs("div",{className:"card",children:[st.jsx("i",{className:"fas fa-user"}),st.jsx("h3",{children:"12"}),st.jsx("p",{children:"Technology"})]}),st.jsxs("div",{className:"card",children:[st.jsx("i",{className:"fas fa-file"}),st.jsx("h3",{children:"3 Years"}),st.jsx("p",{children:"Experience"})]})]}),st.jsxs("footer",{className:"footer",children:[st.jsx("a",{href:"#",children:st.jsx("i",{className:"fab fa-github"})}),st.jsx("a",{href:"#",children:st.jsx("i",{className:"fab fa-twitter"})}),st.jsx("a",{href:"#",children:st.jsx("i",{className:"fab fa-linkedin"})})]})]})]})};/*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function Gp(i,t){(t==null||t>i.length)&&(t=i.length);for(var e=0,r=Array(t);e<t;e++)r[e]=i[e];return r}function N3(i){if(Array.isArray(i))return i}function O3(i){if(Array.isArray(i))return Gp(i)}function P3(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}function I3(i,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(i,g1(r.key),r)}}function F3(i,t,e){return t&&I3(i.prototype,t),Object.defineProperty(i,"prototype",{writable:!1}),i}function Au(i,t){var e=typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(!e){if(Array.isArray(i)||(e=Em(i))||t){e&&(i=e);var r=0,o=function(){};return{s:o,n:function(){return r>=i.length?{done:!0}:{done:!1,value:i[r++]}},e:function(d){throw d},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var l,u=!0,f=!1;return{s:function(){e=e.call(i)},n:function(){var d=e.next();return u=d.done,d},e:function(d){f=!0,l=d},f:function(){try{u||e.return==null||e.return()}finally{if(f)throw l}}}}function Me(i,t,e){return(t=g1(t))in i?Object.defineProperty(i,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[t]=e,i}function z3(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function B3(i,t){var e=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(e!=null){var r,o,l,u,f=[],d=!0,p=!1;try{if(l=(e=e.call(i)).next,t===0){if(Object(e)!==e)return;d=!1}else for(;!(d=(r=l.call(e)).done)&&(f.push(r.value),f.length!==t);d=!0);}catch(g){p=!0,o=g}finally{try{if(!d&&e.return!=null&&(u=e.return(),Object(u)!==u))return}finally{if(p)throw o}}return f}}function H3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bx(i,t){var e=Object.keys(i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(i,o).enumerable})),e.push.apply(e,r)}return e}function Rt(i){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?bx(Object(e),!0).forEach(function(r){Me(i,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(e)):bx(Object(e)).forEach(function(r){Object.defineProperty(i,r,Object.getOwnPropertyDescriptor(e,r))})}return i}function Xu(i,t){return N3(i)||B3(i,t)||Em(i,t)||H3()}function Di(i){return O3(i)||z3(i)||Em(i)||G3()}function V3(i,t){if(typeof i!="object"||!i)return i;var e=i[Symbol.toPrimitive];if(e!==void 0){var r=e.call(i,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(i)}function g1(i){var t=V3(i,"string");return typeof t=="symbol"?t:t+""}function Iu(i){"@babel/helpers - typeof";return Iu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Iu(i)}function Em(i,t){if(i){if(typeof i=="string")return Gp(i,t);var e={}.toString.call(i).slice(8,-1);return e==="Object"&&i.constructor&&(e=i.constructor.name),e==="Map"||e==="Set"?Array.from(i):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Gp(i,t):void 0}}var Tx=function(){},Mm={},v1={},_1=null,x1={mark:Tx,measure:Tx};try{typeof window<"u"&&(Mm=window),typeof document<"u"&&(v1=document),typeof MutationObserver<"u"&&(_1=MutationObserver),typeof performance<"u"&&(x1=performance)}catch{}var k3=Mm.navigator||{},Ax=k3.userAgent,wx=Ax===void 0?"":Ax,cr=Mm,Ye=v1,Rx=_1,gu=x1;cr.document;var Aa=!!Ye.documentElement&&!!Ye.head&&typeof Ye.addEventListener=="function"&&typeof Ye.createElement=="function",y1=~wx.indexOf("MSIE")||~wx.indexOf("Trident/"),zd,X3=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,W3=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,S1={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},j3={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},E1=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],Cn="classic",Ll="duotone",M1="sharp",b1="sharp-duotone",T1="chisel",A1="etch",w1="jelly",R1="jelly-duo",C1="jelly-fill",D1="notdog",U1="notdog-duo",L1="slab",N1="slab-press",O1="thumbprint",P1="whiteboard",q3="Classic",Y3="Duotone",Z3="Sharp",K3="Sharp Duotone",$3="Chisel",Q3="Etch",J3="Jelly",tD="Jelly Duo",eD="Jelly Fill",nD="Notdog",iD="Notdog Duo",aD="Slab",rD="Slab Press",sD="Thumbprint",oD="Whiteboard",I1=[Cn,Ll,M1,b1,T1,A1,w1,R1,C1,D1,U1,L1,N1,O1,P1];zd={},Me(Me(Me(Me(Me(Me(Me(Me(Me(Me(zd,Cn,q3),Ll,Y3),M1,Z3),b1,K3),T1,$3),A1,Q3),w1,J3),R1,tD),C1,eD),D1,nD),Me(Me(Me(Me(Me(zd,U1,iD),L1,aD),N1,rD),O1,sD),P1,oD);var lD={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},cD={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},uD=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),fD={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},F1=["fak","fa-kit","fakd","fa-kit-duotone"],Cx={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},hD=["kit"],dD="kit",pD="kit-duotone",mD="Kit",gD="Kit Duotone";Me(Me({},dD,mD),pD,gD);var vD={kit:{"fa-kit":"fak"}},_D={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},xD={kit:{fak:"fa-kit"}},Dx={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Bd,vu={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},yD=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],SD="classic",ED="duotone",MD="sharp",bD="sharp-duotone",TD="chisel",AD="etch",wD="jelly",RD="jelly-duo",CD="jelly-fill",DD="notdog",UD="notdog-duo",LD="slab",ND="slab-press",OD="thumbprint",PD="whiteboard",ID="Classic",FD="Duotone",zD="Sharp",BD="Sharp Duotone",HD="Chisel",GD="Etch",VD="Jelly",kD="Jelly Duo",XD="Jelly Fill",WD="Notdog",jD="Notdog Duo",qD="Slab",YD="Slab Press",ZD="Thumbprint",KD="Whiteboard";Bd={},Me(Me(Me(Me(Me(Me(Me(Me(Me(Me(Bd,SD,ID),ED,FD),MD,zD),bD,BD),TD,HD),AD,GD),wD,VD),RD,kD),CD,XD),DD,WD),Me(Me(Me(Me(Me(Bd,UD,jD),LD,qD),ND,YD),OD,ZD),PD,KD);var $D="kit",QD="kit-duotone",JD="Kit",tU="Kit Duotone";Me(Me({},$D,JD),QD,tU);var eU={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},nU={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},Vp={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},iU=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],z1=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(yD,iU),aU=["solid","regular","light","thin","duotone","brands","semibold"],B1=[1,2,3,4,5,6,7,8,9,10],rU=B1.concat([11,12,13,14,15,16,17,18,19,20]),sU=["aw","fw","pull-left","pull-right"],oU=[].concat(Di(Object.keys(nU)),aU,sU,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",vu.GROUP,vu.SWAP_OPACITY,vu.PRIMARY,vu.SECONDARY]).concat(B1.map(function(i){return"".concat(i,"x")})).concat(rU.map(function(i){return"w-".concat(i)})),lU={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Ea="___FONT_AWESOME___",kp=16,H1="fa",G1="svg-inline--fa",Wr="data-fa-i2svg",Xp="data-fa-pseudo-element",cU="data-fa-pseudo-element-pending",bm="data-prefix",Tm="data-icon",Ux="fontawesome-i2svg",uU="async",fU=["HTML","HEAD","STYLE","SCRIPT"],V1=["::before","::after",":before",":after"],k1=(function(){try{return!0}catch{return!1}})();function Nl(i){return new Proxy(i,{get:function(e,r){return r in e?e[r]:e[Cn]}})}var X1=Rt({},S1);X1[Cn]=Rt(Rt(Rt(Rt({},{"fa-duotone":"duotone"}),S1[Cn]),Cx.kit),Cx["kit-duotone"]);var hU=Nl(X1),Wp=Rt({},fD);Wp[Cn]=Rt(Rt(Rt(Rt({},{duotone:"fad"}),Wp[Cn]),Dx.kit),Dx["kit-duotone"]);var Lx=Nl(Wp),jp=Rt({},Vp);jp[Cn]=Rt(Rt({},jp[Cn]),xD.kit);var Am=Nl(jp),qp=Rt({},eU);qp[Cn]=Rt(Rt({},qp[Cn]),vD.kit);Nl(qp);var dU=X3,W1="fa-layers-text",pU=W3,mU=Rt({},lD);Nl(mU);var gU=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Hd=j3,vU=[].concat(Di(hD),Di(oU)),pl=cr.FontAwesomeConfig||{};function _U(i){var t=Ye.querySelector("script["+i+"]");if(t)return t.getAttribute(i)}function xU(i){return i===""?!0:i==="false"?!1:i==="true"?!0:i}if(Ye&&typeof Ye.querySelector=="function"){var yU=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];yU.forEach(function(i){var t=Xu(i,2),e=t[0],r=t[1],o=xU(_U(e));o!=null&&(pl[r]=o)})}var j1={styleDefault:"solid",familyDefault:Cn,cssPrefix:H1,replacementClass:G1,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};pl.familyPrefix&&(pl.cssPrefix=pl.familyPrefix);var eo=Rt(Rt({},j1),pl);eo.autoReplaceSvg||(eo.observeMutations=!1);var Jt={};Object.keys(j1).forEach(function(i){Object.defineProperty(Jt,i,{enumerable:!0,set:function(e){eo[i]=e,ml.forEach(function(r){return r(Jt)})},get:function(){return eo[i]}})});Object.defineProperty(Jt,"familyPrefix",{enumerable:!0,set:function(t){eo.cssPrefix=t,ml.forEach(function(e){return e(Jt)})},get:function(){return eo.cssPrefix}});cr.FontAwesomeConfig=Jt;var ml=[];function SU(i){return ml.push(i),function(){ml.splice(ml.indexOf(i),1)}}var ks=kp,ki={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function EU(i){if(!(!i||!Aa)){var t=Ye.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=i;for(var e=Ye.head.childNodes,r=null,o=e.length-1;o>-1;o--){var l=e[o],u=(l.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(u)>-1&&(r=l)}return Ye.head.insertBefore(t,r),i}}var MU="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Nx(){for(var i=12,t="";i-- >0;)t+=MU[Math.random()*62|0];return t}function oo(i){for(var t=[],e=(i||[]).length>>>0;e--;)t[e]=i[e];return t}function wm(i){return i.classList?oo(i.classList):(i.getAttribute("class")||"").split(" ").filter(function(t){return t})}function q1(i){return"".concat(i).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function bU(i){return Object.keys(i||{}).reduce(function(t,e){return t+"".concat(e,'="').concat(q1(i[e]),'" ')},"").trim()}function Wu(i){return Object.keys(i||{}).reduce(function(t,e){return t+"".concat(e,": ").concat(i[e].trim(),";")},"")}function Rm(i){return i.size!==ki.size||i.x!==ki.x||i.y!==ki.y||i.rotate!==ki.rotate||i.flipX||i.flipY}function TU(i){var t=i.transform,e=i.containerWidth,r=i.iconWidth,o={transform:"translate(".concat(e/2," 256)")},l="translate(".concat(t.x*32,", ").concat(t.y*32,") "),u="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),f="rotate(".concat(t.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(f)},p={transform:"translate(".concat(r/2*-1," -256)")};return{outer:o,inner:d,path:p}}function AU(i){var t=i.transform,e=i.width,r=e===void 0?kp:e,o=i.height,l=o===void 0?kp:o,u="";return y1?u+="translate(".concat(t.x/ks-r/2,"em, ").concat(t.y/ks-l/2,"em) "):u+="translate(calc(-50% + ".concat(t.x/ks,"em), calc(-50% + ").concat(t.y/ks,"em)) "),u+="scale(".concat(t.size/ks*(t.flipX?-1:1),", ").concat(t.size/ks*(t.flipY?-1:1),") "),u+="rotate(".concat(t.rotate,"deg) "),u}var wU=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function Y1(){var i=H1,t=G1,e=Jt.cssPrefix,r=Jt.replacementClass,o=wU;if(e!==i||r!==t){var l=new RegExp("\\.".concat(i,"\\-"),"g"),u=new RegExp("\\--".concat(i,"\\-"),"g"),f=new RegExp("\\.".concat(t),"g");o=o.replace(l,".".concat(e,"-")).replace(u,"--".concat(e,"-")).replace(f,".".concat(r))}return o}var Ox=!1;function Gd(){Jt.autoAddCss&&!Ox&&(EU(Y1()),Ox=!0)}var RU={mixout:function(){return{dom:{css:Y1,insertCss:Gd}}},hooks:function(){return{beforeDOMElementCreation:function(){Gd()},beforeI2svg:function(){Gd()}}}},Ma=cr||{};Ma[Ea]||(Ma[Ea]={});Ma[Ea].styles||(Ma[Ea].styles={});Ma[Ea].hooks||(Ma[Ea].hooks={});Ma[Ea].shims||(Ma[Ea].shims=[]);var Ri=Ma[Ea],Z1=[],K1=function(){Ye.removeEventListener("DOMContentLoaded",K1),Fu=1,Z1.map(function(t){return t()})},Fu=!1;Aa&&(Fu=(Ye.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ye.readyState),Fu||Ye.addEventListener("DOMContentLoaded",K1));function CU(i){Aa&&(Fu?setTimeout(i,0):Z1.push(i))}function Ol(i){var t=i.tag,e=i.attributes,r=e===void 0?{}:e,o=i.children,l=o===void 0?[]:o;return typeof i=="string"?q1(i):"<".concat(t," ").concat(bU(r),">").concat(l.map(Ol).join(""),"</").concat(t,">")}function Px(i,t,e){if(i&&i[t]&&i[t][e])return{prefix:t,iconName:e,icon:i[t][e]}}var Vd=function(t,e,r,o){var l=Object.keys(t),u=l.length,f=e,d,p,g;for(r===void 0?(d=1,g=t[l[0]]):(d=0,g=r);d<u;d++)p=l[d],g=f(g,t[p],p,t);return g};function $1(i){return Di(i).length!==1?null:i.codePointAt(0).toString(16)}function Ix(i){return Object.keys(i).reduce(function(t,e){var r=i[e],o=!!r.icon;return o?t[r.iconName]=r.icon:t[e]=r,t},{})}function Yp(i,t){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,o=r===void 0?!1:r,l=Ix(t);typeof Ri.hooks.addPack=="function"&&!o?Ri.hooks.addPack(i,Ix(t)):Ri.styles[i]=Rt(Rt({},Ri.styles[i]||{}),l),i==="fas"&&Yp("fa",t)}var Ml=Ri.styles,DU=Ri.shims,Q1=Object.keys(Am),UU=Q1.reduce(function(i,t){return i[t]=Object.keys(Am[t]),i},{}),Cm=null,J1={},tS={},eS={},nS={},iS={};function LU(i){return~vU.indexOf(i)}function NU(i,t){var e=t.split("-"),r=e[0],o=e.slice(1).join("-");return r===i&&o!==""&&!LU(o)?o:null}var aS=function(){var t=function(l){return Vd(Ml,function(u,f,d){return u[d]=Vd(f,l,{}),u},{})};J1=t(function(o,l,u){if(l[3]&&(o[l[3]]=u),l[2]){var f=l[2].filter(function(d){return typeof d=="number"});f.forEach(function(d){o[d.toString(16)]=u})}return o}),tS=t(function(o,l,u){if(o[u]=u,l[2]){var f=l[2].filter(function(d){return typeof d=="string"});f.forEach(function(d){o[d]=u})}return o}),iS=t(function(o,l,u){var f=l[2];return o[u]=u,f.forEach(function(d){o[d]=u}),o});var e="far"in Ml||Jt.autoFetchSvg,r=Vd(DU,function(o,l){var u=l[0],f=l[1],d=l[2];return f==="far"&&!e&&(f="fas"),typeof u=="string"&&(o.names[u]={prefix:f,iconName:d}),typeof u=="number"&&(o.unicodes[u.toString(16)]={prefix:f,iconName:d}),o},{names:{},unicodes:{}});eS=r.names,nS=r.unicodes,Cm=ju(Jt.styleDefault,{family:Jt.familyDefault})};SU(function(i){Cm=ju(i.styleDefault,{family:Jt.familyDefault})});aS();function Dm(i,t){return(J1[i]||{})[t]}function OU(i,t){return(tS[i]||{})[t]}function Gr(i,t){return(iS[i]||{})[t]}function rS(i){return eS[i]||{prefix:null,iconName:null}}function PU(i){var t=nS[i],e=Dm("fas",i);return t||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function ur(){return Cm}var sS=function(){return{prefix:null,iconName:null,rest:[]}};function IU(i){var t=Cn,e=Q1.reduce(function(r,o){return r[o]="".concat(Jt.cssPrefix,"-").concat(o),r},{});return I1.forEach(function(r){(i.includes(e[r])||i.some(function(o){return UU[r].includes(o)}))&&(t=r)}),t}function ju(i){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=t.family,r=e===void 0?Cn:e,o=hU[r][i];if(r===Ll&&!i)return"fad";var l=Lx[r][i]||Lx[r][o],u=i in Ri.styles?i:null,f=l||u||null;return f}function FU(i){var t=[],e=null;return i.forEach(function(r){var o=NU(Jt.cssPrefix,r);o?e=o:r&&t.push(r)}),{iconName:e,rest:t}}function Fx(i){return i.sort().filter(function(t,e,r){return r.indexOf(t)===e})}var zx=z1.concat(F1);function qu(i){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=t.skipLookups,r=e===void 0?!1:e,o=null,l=Fx(i.filter(function(y){return zx.includes(y)})),u=Fx(i.filter(function(y){return!zx.includes(y)})),f=l.filter(function(y){return o=y,!E1.includes(y)}),d=Xu(f,1),p=d[0],g=p===void 0?null:p,v=IU(l),_=Rt(Rt({},FU(u)),{},{prefix:ju(g,{family:v})});return Rt(Rt(Rt({},_),GU({values:i,family:v,styles:Ml,config:Jt,canonical:_,givenPrefix:o})),zU(r,o,_))}function zU(i,t,e){var r=e.prefix,o=e.iconName;if(i||!r||!o)return{prefix:r,iconName:o};var l=t==="fa"?rS(o):{},u=Gr(r,o);return o=l.iconName||u||o,r=l.prefix||r,r==="far"&&!Ml.far&&Ml.fas&&!Jt.autoFetchSvg&&(r="fas"),{prefix:r,iconName:o}}var BU=I1.filter(function(i){return i!==Cn||i!==Ll}),HU=Object.keys(Vp).filter(function(i){return i!==Cn}).map(function(i){return Object.keys(Vp[i])}).flat();function GU(i){var t=i.values,e=i.family,r=i.canonical,o=i.givenPrefix,l=o===void 0?"":o,u=i.styles,f=u===void 0?{}:u,d=i.config,p=d===void 0?{}:d,g=e===Ll,v=t.includes("fa-duotone")||t.includes("fad"),_=p.familyDefault==="duotone",y=r.prefix==="fad"||r.prefix==="fa-duotone";if(!g&&(v||_||y)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&BU.includes(e)){var M=Object.keys(f).find(function(S){return HU.includes(S)});if(M||p.autoFetchSvg){var b=uD.get(e).defaultShortPrefixId;r.prefix=b,r.iconName=Gr(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||l==="fa")&&(r.prefix=ur()||"fas"),r}var VU=(function(){function i(){P3(this,i),this.definitions={}}return F3(i,[{key:"add",value:function(){for(var e=this,r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];var u=o.reduce(this._pullDefinitions,{});Object.keys(u).forEach(function(f){e.definitions[f]=Rt(Rt({},e.definitions[f]||{}),u[f]),Yp(f,u[f]);var d=Am[Cn][f];d&&Yp(d,u[f]),aS()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var o=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(o).map(function(l){var u=o[l],f=u.prefix,d=u.iconName,p=u.icon,g=p[2];e[f]||(e[f]={}),g.length>0&&g.forEach(function(v){typeof v=="string"&&(e[f][v]=p)}),e[f][d]=p}),e}}])})(),Bx=[],js={},Zs={},kU=Object.keys(Zs);function XU(i,t){var e=t.mixoutsTo;return Bx=i,js={},Object.keys(Zs).forEach(function(r){kU.indexOf(r)===-1&&delete Zs[r]}),Bx.forEach(function(r){var o=r.mixout?r.mixout():{};if(Object.keys(o).forEach(function(u){typeof o[u]=="function"&&(e[u]=o[u]),Iu(o[u])==="object"&&Object.keys(o[u]).forEach(function(f){e[u]||(e[u]={}),e[u][f]=o[u][f]})}),r.hooks){var l=r.hooks();Object.keys(l).forEach(function(u){js[u]||(js[u]=[]),js[u].push(l[u])})}r.provides&&r.provides(Zs)}),e}function Zp(i,t){for(var e=arguments.length,r=new Array(e>2?e-2:0),o=2;o<e;o++)r[o-2]=arguments[o];var l=js[i]||[];return l.forEach(function(u){t=u.apply(null,[t].concat(r))}),t}function jr(i){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];var o=js[i]||[];o.forEach(function(l){l.apply(null,e)})}function fr(){var i=arguments[0],t=Array.prototype.slice.call(arguments,1);return Zs[i]?Zs[i].apply(null,t):void 0}function Kp(i){i.prefix==="fa"&&(i.prefix="fas");var t=i.iconName,e=i.prefix||ur();if(t)return t=Gr(e,t)||t,Px(oS.definitions,e,t)||Px(Ri.styles,e,t)}var oS=new VU,WU=function(){Jt.autoReplaceSvg=!1,Jt.observeMutations=!1,jr("noAuto")},jU={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Aa?(jr("beforeI2svg",t),fr("pseudoElements2svg",t),fr("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.autoReplaceSvgRoot;Jt.autoReplaceSvg===!1&&(Jt.autoReplaceSvg=!0),Jt.observeMutations=!0,CU(function(){YU({autoReplaceSvgRoot:e}),jr("watch",t)})}},qU={icon:function(t){if(t===null)return null;if(Iu(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Gr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=ju(t[0]);return{prefix:r,iconName:Gr(r,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(Jt.cssPrefix,"-"))>-1||t.match(dU))){var o=qu(t.split(" "),{skipLookups:!0});return{prefix:o.prefix||ur(),iconName:Gr(o.prefix,o.iconName)||o.iconName}}if(typeof t=="string"){var l=ur();return{prefix:l,iconName:Gr(l,t)||t}}}},ri={noAuto:WU,config:Jt,dom:jU,parse:qU,library:oS,findIconDefinition:Kp,toHtml:Ol},YU=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.autoReplaceSvgRoot,r=e===void 0?Ye:e;(Object.keys(Ri.styles).length>0||Jt.autoFetchSvg)&&Aa&&Jt.autoReplaceSvg&&ri.dom.i2svg({node:r})};function Yu(i,t){return Object.defineProperty(i,"abstract",{get:t}),Object.defineProperty(i,"html",{get:function(){return i.abstract.map(function(r){return Ol(r)})}}),Object.defineProperty(i,"node",{get:function(){if(Aa){var r=Ye.createElement("div");return r.innerHTML=i.html,r.children}}}),i}function ZU(i){var t=i.children,e=i.main,r=i.mask,o=i.attributes,l=i.styles,u=i.transform;if(Rm(u)&&e.found&&!r.found){var f=e.width,d=e.height,p={x:f/d/2,y:.5};o.style=Wu(Rt(Rt({},l),{},{"transform-origin":"".concat(p.x+u.x/16,"em ").concat(p.y+u.y/16,"em")}))}return[{tag:"svg",attributes:o,children:t}]}function KU(i){var t=i.prefix,e=i.iconName,r=i.children,o=i.attributes,l=i.symbol,u=l===!0?"".concat(t,"-").concat(Jt.cssPrefix,"-").concat(e):l;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Rt(Rt({},o),{},{id:u}),children:r}]}]}function $U(i){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(e){return e in i})}function Um(i){var t=i.icons,e=t.main,r=t.mask,o=i.prefix,l=i.iconName,u=i.transform,f=i.symbol,d=i.maskId,p=i.extra,g=i.watchable,v=g===void 0?!1:g,_=r.found?r:e,y=_.width,M=_.height,b=[Jt.replacementClass,l?"".concat(Jt.cssPrefix,"-").concat(l):""].filter(function(N){return p.classes.indexOf(N)===-1}).filter(function(N){return N!==""||!!N}).concat(p.classes).join(" "),S={children:[],attributes:Rt(Rt({},p.attributes),{},{"data-prefix":o,"data-icon":l,class:b,role:p.attributes.role||"img",viewBox:"0 0 ".concat(y," ").concat(M)})};!$U(p.attributes)&&!p.attributes["aria-hidden"]&&(S.attributes["aria-hidden"]="true"),v&&(S.attributes[Wr]="");var x=Rt(Rt({},S),{},{prefix:o,iconName:l,main:e,mask:r,maskId:d,transform:u,symbol:f,styles:Rt({},p.styles)}),U=r.found&&e.found?fr("generateAbstractMask",x)||{children:[],attributes:{}}:fr("generateAbstractIcon",x)||{children:[],attributes:{}},D=U.children,A=U.attributes;return x.children=D,x.attributes=A,f?KU(x):ZU(x)}function Hx(i){var t=i.content,e=i.width,r=i.height,o=i.transform,l=i.extra,u=i.watchable,f=u===void 0?!1:u,d=Rt(Rt({},l.attributes),{},{class:l.classes.join(" ")});f&&(d[Wr]="");var p=Rt({},l.styles);Rm(o)&&(p.transform=AU({transform:o,width:e,height:r}),p["-webkit-transform"]=p.transform);var g=Wu(p);g.length>0&&(d.style=g);var v=[];return v.push({tag:"span",attributes:d,children:[t]}),v}function QU(i){var t=i.content,e=i.extra,r=Rt(Rt({},e.attributes),{},{class:e.classes.join(" ")}),o=Wu(e.styles);o.length>0&&(r.style=o);var l=[];return l.push({tag:"span",attributes:r,children:[t]}),l}var kd=Ri.styles;function $p(i){var t=i[0],e=i[1],r=i.slice(4),o=Xu(r,1),l=o[0],u=null;return Array.isArray(l)?u={tag:"g",attributes:{class:"".concat(Jt.cssPrefix,"-").concat(Hd.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Jt.cssPrefix,"-").concat(Hd.SECONDARY),fill:"currentColor",d:l[0]}},{tag:"path",attributes:{class:"".concat(Jt.cssPrefix,"-").concat(Hd.PRIMARY),fill:"currentColor",d:l[1]}}]}:u={tag:"path",attributes:{fill:"currentColor",d:l}},{found:!0,width:t,height:e,icon:u}}var JU={found:!1,width:512,height:512};function tL(i,t){!k1&&!Jt.showMissingIcons&&i&&console.error('Icon with name "'.concat(i,'" and prefix "').concat(t,'" is missing.'))}function Qp(i,t){var e=t;return t==="fa"&&Jt.styleDefault!==null&&(t=ur()),new Promise(function(r,o){if(e==="fa"){var l=rS(i)||{};i=l.iconName||i,t=l.prefix||t}if(i&&t&&kd[t]&&kd[t][i]){var u=kd[t][i];return r($p(u))}tL(i,t),r(Rt(Rt({},JU),{},{icon:Jt.showMissingIcons&&i?fr("missingIconAbstract")||{}:{}}))})}var Gx=function(){},Jp=Jt.measurePerformance&&gu&&gu.mark&&gu.measure?gu:{mark:Gx,measure:Gx},dl='FA "7.0.1"',eL=function(t){return Jp.mark("".concat(dl," ").concat(t," begins")),function(){return lS(t)}},lS=function(t){Jp.mark("".concat(dl," ").concat(t," ends")),Jp.measure("".concat(dl," ").concat(t),"".concat(dl," ").concat(t," begins"),"".concat(dl," ").concat(t," ends"))},Lm={begin:eL,end:lS},wu=function(){};function Vx(i){var t=i.getAttribute?i.getAttribute(Wr):null;return typeof t=="string"}function nL(i){var t=i.getAttribute?i.getAttribute(bm):null,e=i.getAttribute?i.getAttribute(Tm):null;return t&&e}function iL(i){return i&&i.classList&&i.classList.contains&&i.classList.contains(Jt.replacementClass)}function aL(){if(Jt.autoReplaceSvg===!0)return Ru.replace;var i=Ru[Jt.autoReplaceSvg];return i||Ru.replace}function rL(i){return Ye.createElementNS("http://www.w3.org/2000/svg",i)}function sL(i){return Ye.createElement(i)}function cS(i){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=t.ceFn,r=e===void 0?i.tag==="svg"?rL:sL:e;if(typeof i=="string")return Ye.createTextNode(i);var o=r(i.tag);Object.keys(i.attributes||[]).forEach(function(u){o.setAttribute(u,i.attributes[u])});var l=i.children||[];return l.forEach(function(u){o.appendChild(cS(u,{ceFn:r}))}),o}function oL(i){var t=" ".concat(i.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Ru={replace:function(t){var e=t[0];if(e.parentNode)if(t[1].forEach(function(o){e.parentNode.insertBefore(cS(o),e)}),e.getAttribute(Wr)===null&&Jt.keepOriginalSource){var r=Ye.createComment(oL(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(t){var e=t[0],r=t[1];if(~wm(e).indexOf(Jt.replacementClass))return Ru.replace(t);var o=new RegExp("".concat(Jt.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var l=r[0].attributes.class.split(" ").reduce(function(f,d){return d===Jt.replacementClass||d.match(o)?f.toSvg.push(d):f.toNode.push(d),f},{toNode:[],toSvg:[]});r[0].attributes.class=l.toSvg.join(" "),l.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",l.toNode.join(" "))}var u=r.map(function(f){return Ol(f)}).join(`
`);e.setAttribute(Wr,""),e.innerHTML=u}};function kx(i){i()}function uS(i,t){var e=typeof t=="function"?t:wu;if(i.length===0)e();else{var r=kx;Jt.mutateApproach===uU&&(r=cr.requestAnimationFrame||kx),r(function(){var o=aL(),l=Lm.begin("mutate");i.map(o),l(),e()})}}var Nm=!1;function fS(){Nm=!0}function tm(){Nm=!1}var zu=null;function Xx(i){if(Rx&&Jt.observeMutations){var t=i.treeCallback,e=t===void 0?wu:t,r=i.nodeCallback,o=r===void 0?wu:r,l=i.pseudoElementsCallback,u=l===void 0?wu:l,f=i.observeMutationsRoot,d=f===void 0?Ye:f;zu=new Rx(function(p){if(!Nm){var g=ur();oo(p).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!Vx(v.addedNodes[0])&&(Jt.searchPseudoElements&&u(v.target),e(v.target)),v.type==="attributes"&&v.target.parentNode&&Jt.searchPseudoElements&&u([v.target],!0),v.type==="attributes"&&Vx(v.target)&&~gU.indexOf(v.attributeName))if(v.attributeName==="class"&&nL(v.target)){var _=qu(wm(v.target)),y=_.prefix,M=_.iconName;v.target.setAttribute(bm,y||g),M&&v.target.setAttribute(Tm,M)}else iL(v.target)&&o(v.target)})}}),Aa&&zu.observe(d,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function lL(){zu&&zu.disconnect()}function cL(i){var t=i.getAttribute("style"),e=[];return t&&(e=t.split(";").reduce(function(r,o){var l=o.split(":"),u=l[0],f=l.slice(1);return u&&f.length>0&&(r[u]=f.join(":").trim()),r},{})),e}function uL(i){var t=i.getAttribute("data-prefix"),e=i.getAttribute("data-icon"),r=i.innerText!==void 0?i.innerText.trim():"",o=qu(wm(i));return o.prefix||(o.prefix=ur()),t&&e&&(o.prefix=t,o.iconName=e),o.iconName&&o.prefix||(o.prefix&&r.length>0&&(o.iconName=OU(o.prefix,i.innerText)||Dm(o.prefix,$1(i.innerText))),!o.iconName&&Jt.autoFetchSvg&&i.firstChild&&i.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=i.firstChild.data)),o}function fL(i){var t=oo(i.attributes).reduce(function(e,r){return e.name!=="class"&&e.name!=="style"&&(e[r.name]=r.value),e},{});return t}function hL(){return{iconName:null,prefix:null,transform:ki,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Wx(i){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=uL(i),r=e.iconName,o=e.prefix,l=e.rest,u=fL(i),f=Zp("parseNodeAttributes",{},i),d=t.styleParser?cL(i):[];return Rt({iconName:r,prefix:o,transform:ki,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:l,styles:d,attributes:u}},f)}var dL=Ri.styles;function hS(i){var t=Jt.autoReplaceSvg==="nest"?Wx(i,{styleParser:!1}):Wx(i);return~t.extra.classes.indexOf(W1)?fr("generateLayersText",i,t):fr("generateSvgReplacementMutation",i,t)}function pL(){return[].concat(Di(F1),Di(z1))}function jx(i){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Aa)return Promise.resolve();var e=Ye.documentElement.classList,r=function(v){return e.add("".concat(Ux,"-").concat(v))},o=function(v){return e.remove("".concat(Ux,"-").concat(v))},l=Jt.autoFetchSvg?pL():E1.concat(Object.keys(dL));l.includes("fa")||l.push("fa");var u=[".".concat(W1,":not([").concat(Wr,"])")].concat(l.map(function(g){return".".concat(g,":not([").concat(Wr,"])")})).join(", ");if(u.length===0)return Promise.resolve();var f=[];try{f=oo(i.querySelectorAll(u))}catch{}if(f.length>0)r("pending"),o("complete");else return Promise.resolve();var d=Lm.begin("onTree"),p=f.reduce(function(g,v){try{var _=hS(v);_&&g.push(_)}catch(y){k1||y.name==="MissingIcon"&&console.error(y)}return g},[]);return new Promise(function(g,v){Promise.all(p).then(function(_){uS(_,function(){r("active"),r("complete"),o("pending"),typeof t=="function"&&t(),d(),g()})}).catch(function(_){d(),v(_)})})}function mL(i){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;hS(i).then(function(e){e&&uS([e],t)})}function gL(i){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Kp(t||{}),o=e.mask;return o&&(o=(o||{}).icon?o:Kp(o||{})),i(r,Rt(Rt({},e),{},{mask:o}))}}var vL=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,o=r===void 0?ki:r,l=e.symbol,u=l===void 0?!1:l,f=e.mask,d=f===void 0?null:f,p=e.maskId,g=p===void 0?null:p,v=e.classes,_=v===void 0?[]:v,y=e.attributes,M=y===void 0?{}:y,b=e.styles,S=b===void 0?{}:b;if(t){var x=t.prefix,U=t.iconName,D=t.icon;return Yu(Rt({type:"icon"},t),function(){return jr("beforeDOMElementCreation",{iconDefinition:t,params:e}),Um({icons:{main:$p(D),mask:d?$p(d.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:U,transform:Rt(Rt({},ki),o),symbol:u,maskId:g,extra:{attributes:M,styles:S,classes:_}})})}},_L={mixout:function(){return{icon:gL(vL)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=jx,e.nodeCallback=mL,e}}},provides:function(t){t.i2svg=function(e){var r=e.node,o=r===void 0?Ye:r,l=e.callback,u=l===void 0?function(){}:l;return jx(o,u)},t.generateSvgReplacementMutation=function(e,r){var o=r.iconName,l=r.prefix,u=r.transform,f=r.symbol,d=r.mask,p=r.maskId,g=r.extra;return new Promise(function(v,_){Promise.all([Qp(o,l),d.iconName?Qp(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var M=Xu(y,2),b=M[0],S=M[1];v([e,Um({icons:{main:b,mask:S},prefix:l,iconName:o,transform:u,symbol:f,maskId:p,extra:g,watchable:!0})])}).catch(_)})},t.generateAbstractIcon=function(e){var r=e.children,o=e.attributes,l=e.main,u=e.transform,f=e.styles,d=Wu(f);d.length>0&&(o.style=d);var p;return Rm(u)&&(p=fr("generateAbstractTransformGrouping",{main:l,transform:u,containerWidth:l.width,iconWidth:l.width})),r.push(p||l.icon),{children:r,attributes:o}}}},xL={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.classes,l=o===void 0?[]:o;return Yu({type:"layer"},function(){jr("beforeDOMElementCreation",{assembler:e,params:r});var u=[];return e(function(f){Array.isArray(f)?f.map(function(d){u=u.concat(d.abstract)}):u=u.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(Jt.cssPrefix,"-layers")].concat(Di(l)).join(" ")},children:u}]})}}}},yL={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var o=r.classes,l=o===void 0?[]:o,u=r.attributes,f=u===void 0?{}:u,d=r.styles,p=d===void 0?{}:d;return Yu({type:"counter",content:e},function(){return jr("beforeDOMElementCreation",{content:e,params:r}),QU({content:e.toString(),extra:{attributes:f,styles:p,classes:["".concat(Jt.cssPrefix,"-layers-counter")].concat(Di(l))}})})}}}},SL={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.transform,l=o===void 0?ki:o,u=r.classes,f=u===void 0?[]:u,d=r.attributes,p=d===void 0?{}:d,g=r.styles,v=g===void 0?{}:g;return Yu({type:"text",content:e},function(){return jr("beforeDOMElementCreation",{content:e,params:r}),Hx({content:e,transform:Rt(Rt({},ki),l),extra:{attributes:p,styles:v,classes:["".concat(Jt.cssPrefix,"-layers-text")].concat(Di(f))}})})}}},provides:function(t){t.generateLayersText=function(e,r){var o=r.transform,l=r.extra,u=null,f=null;if(y1){var d=parseInt(getComputedStyle(e).fontSize,10),p=e.getBoundingClientRect();u=p.width/d,f=p.height/d}return Promise.resolve([e,Hx({content:e.innerHTML,width:u,height:f,transform:o,extra:l,watchable:!0})])}}},dS=new RegExp('"',"ug"),qx=[1105920,1112319],Yx=Rt(Rt(Rt(Rt({},{FontAwesome:{normal:"fas",400:"fas"}}),cD),lU),_D),em=Object.keys(Yx).reduce(function(i,t){return i[t.toLowerCase()]=Yx[t],i},{}),EL=Object.keys(em).reduce(function(i,t){var e=em[t];return i[t]=e[900]||Di(Object.entries(e))[0][1],i},{});function ML(i){var t=i.replace(dS,"");return $1(Di(t)[0]||"")}function bL(i){var t=i.getPropertyValue("font-feature-settings").includes("ss01"),e=i.getPropertyValue("content"),r=e.replace(dS,""),o=r.codePointAt(0),l=o>=qx[0]&&o<=qx[1],u=r.length===2?r[0]===r[1]:!1;return l||u||t}function TL(i,t){var e=i.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),o=isNaN(r)?"normal":r;return(em[e]||{})[o]||EL[e]}function Zx(i,t){var e="".concat(cU).concat(t.replace(":","-"));return new Promise(function(r,o){if(i.getAttribute(e)!==null)return r();var l=oo(i.children),u=l.filter(function(I){return I.getAttribute(Xp)===t})[0],f=cr.getComputedStyle(i,t),d=f.getPropertyValue("font-family"),p=d.match(pU),g=f.getPropertyValue("font-weight"),v=f.getPropertyValue("content");if(u&&!p)return i.removeChild(u),r();if(p&&v!=="none"&&v!==""){var _=f.getPropertyValue("content"),y=TL(d,g),M=ML(_),b=p[0].startsWith("FontAwesome"),S=bL(f),x=Dm(y,M),U=x;if(b){var D=PU(M);D.iconName&&D.prefix&&(x=D.iconName,y=D.prefix)}if(x&&!S&&(!u||u.getAttribute(bm)!==y||u.getAttribute(Tm)!==U)){i.setAttribute(e,U),u&&i.removeChild(u);var A=hL(),N=A.extra;N.attributes[Xp]=t,Qp(x,y).then(function(I){var z=Um(Rt(Rt({},A),{},{icons:{main:I,mask:sS()},prefix:y,iconName:U,extra:N,watchable:!0})),X=Ye.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?i.insertBefore(X,i.firstChild):i.appendChild(X),X.outerHTML=z.map(function(L){return Ol(L)}).join(`
`),i.removeAttribute(e),r()}).catch(o)}else r()}else r()})}function AL(i){return Promise.all([Zx(i,"::before"),Zx(i,"::after")])}function wL(i){return i.parentNode!==document.head&&!~fU.indexOf(i.tagName.toUpperCase())&&!i.getAttribute(Xp)&&(!i.parentNode||i.parentNode.tagName!=="svg")}var RL=function(t){return!!t&&V1.some(function(e){return t.includes(e)})},CL=function(t){if(!t)return[];var e=new Set,r=t.split(/,(?![^()]*\))/).map(function(d){return d.trim()});r=r.flatMap(function(d){return d.includes("(")?d:d.split(",").map(function(p){return p.trim()})});var o=Au(r),l;try{for(o.s();!(l=o.n()).done;){var u=l.value;if(RL(u)){var f=V1.reduce(function(d,p){return d.replace(p,"")},u);f!==""&&f!=="*"&&e.add(f)}}}catch(d){o.e(d)}finally{o.f()}return e};function Kx(i){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Aa){var e;if(t)e=i;else if(Jt.searchPseudoElementsFullScan)e=i.querySelectorAll("*");else{var r=new Set,o=Au(document.styleSheets),l;try{for(o.s();!(l=o.n()).done;){var u=l.value;try{var f=Au(u.cssRules),d;try{for(f.s();!(d=f.n()).done;){var p=d.value,g=CL(p.selectorText),v=Au(g),_;try{for(v.s();!(_=v.n()).done;){var y=_.value;r.add(y)}}catch(b){v.e(b)}finally{v.f()}}}catch(b){f.e(b)}finally{f.f()}}catch(b){Jt.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(u.href," (").concat(b.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(b){o.e(b)}finally{o.f()}if(!r.size)return;var M=Array.from(r).join(", ");try{e=i.querySelectorAll(M)}catch{}}return new Promise(function(b,S){var x=oo(e).filter(wL).map(AL),U=Lm.begin("searchPseudoElements");fS(),Promise.all(x).then(function(){U(),tm(),b()}).catch(function(){U(),tm(),S()})})}}var DL={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Kx,e}}},provides:function(t){t.pseudoElements2svg=function(e){var r=e.node,o=r===void 0?Ye:r;Jt.searchPseudoElements&&Kx(o)}}},$x=!1,UL={mixout:function(){return{dom:{unwatch:function(){fS(),$x=!0}}}},hooks:function(){return{bootstrap:function(){Xx(Zp("mutationObserverCallbacks",{}))},noAuto:function(){lL()},watch:function(e){var r=e.observeMutationsRoot;$x?tm():Xx(Zp("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Qx=function(t){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,o){var l=o.toLowerCase().split("-"),u=l[0],f=l.slice(1).join("-");if(u&&f==="h")return r.flipX=!0,r;if(u&&f==="v")return r.flipY=!0,r;if(f=parseFloat(f),isNaN(f))return r;switch(u){case"grow":r.size=r.size+f;break;case"shrink":r.size=r.size-f;break;case"left":r.x=r.x-f;break;case"right":r.x=r.x+f;break;case"up":r.y=r.y-f;break;case"down":r.y=r.y+f;break;case"rotate":r.rotate=r.rotate+f;break}return r},e)},LL={mixout:function(){return{parse:{transform:function(e){return Qx(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,r){var o=r.getAttribute("data-fa-transform");return o&&(e.transform=Qx(o)),e}}},provides:function(t){t.generateAbstractTransformGrouping=function(e){var r=e.main,o=e.transform,l=e.containerWidth,u=e.iconWidth,f={transform:"translate(".concat(l/2," 256)")},d="translate(".concat(o.x*32,", ").concat(o.y*32,") "),p="scale(".concat(o.size/16*(o.flipX?-1:1),", ").concat(o.size/16*(o.flipY?-1:1),") "),g="rotate(".concat(o.rotate," 0 0)"),v={transform:"".concat(d," ").concat(p," ").concat(g)},_={transform:"translate(".concat(u/2*-1," -256)")},y={outer:f,inner:v,path:_};return{tag:"g",attributes:Rt({},y.outer),children:[{tag:"g",attributes:Rt({},y.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:Rt(Rt({},r.icon.attributes),y.path)}]}]}}}},Xd={x:0,y:0,width:"100%",height:"100%"};function Jx(i){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return i.attributes&&(i.attributes.fill||t)&&(i.attributes.fill="black"),i}function NL(i){return i.tag==="g"?i.children:[i]}var OL={hooks:function(){return{parseNodeAttributes:function(e,r){var o=r.getAttribute("data-fa-mask"),l=o?qu(o.split(" ").map(function(u){return u.trim()})):sS();return l.prefix||(l.prefix=ur()),e.mask=l,e.maskId=r.getAttribute("data-fa-mask-id"),e}}},provides:function(t){t.generateAbstractMask=function(e){var r=e.children,o=e.attributes,l=e.main,u=e.mask,f=e.maskId,d=e.transform,p=l.width,g=l.icon,v=u.width,_=u.icon,y=TU({transform:d,containerWidth:v,iconWidth:p}),M={tag:"rect",attributes:Rt(Rt({},Xd),{},{fill:"white"})},b=g.children?{children:g.children.map(Jx)}:{},S={tag:"g",attributes:Rt({},y.inner),children:[Jx(Rt({tag:g.tag,attributes:Rt(Rt({},g.attributes),y.path)},b))]},x={tag:"g",attributes:Rt({},y.outer),children:[S]},U="mask-".concat(f||Nx()),D="clip-".concat(f||Nx()),A={tag:"mask",attributes:Rt(Rt({},Xd),{},{id:U,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[M,x]},N={tag:"defs",children:[{tag:"clipPath",attributes:{id:D},children:NL(_)},A]};return r.push(N,{tag:"rect",attributes:Rt({fill:"currentColor","clip-path":"url(#".concat(D,")"),mask:"url(#".concat(U,")")},Xd)}),{children:r,attributes:o}}}},PL={provides:function(t){var e=!1;cr.matchMedia&&(e=cr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],o={fill:"currentColor"},l={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:Rt(Rt({},o),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var u=Rt(Rt({},l),{},{attributeName:"opacity"}),f={tag:"circle",attributes:Rt(Rt({},o),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||f.children.push({tag:"animate",attributes:Rt(Rt({},l),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Rt(Rt({},u),{},{values:"1;0;1;1;0;1;"})}),r.push(f),r.push({tag:"path",attributes:Rt(Rt({},o),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:Rt(Rt({},u),{},{values:"1;0;0;0;0;1;"})}]}),e||r.push({tag:"path",attributes:Rt(Rt({},o),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Rt(Rt({},u),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},IL={hooks:function(){return{parseNodeAttributes:function(e,r){var o=r.getAttribute("data-fa-symbol"),l=o===null?!1:o===""?!0:o;return e.symbol=l,e}}}},FL=[RU,_L,xL,yL,SL,DL,UL,LL,OL,PL,IL];XU(FL,{mixoutsTo:ri});ri.noAuto;var zL=ri.config;ri.library;ri.dom;var pS=ri.parse;ri.findIconDefinition;ri.toHtml;var BL=ri.icon;ri.layer;ri.text;ri.counter;function HL(i){return i=i-0,i===i}function mS(i){return HL(i)?i:(i=i.replaceAll(/[_-]+(.)?/g,(t,e)=>e?e.toUpperCase():""),i.charAt(0).toLowerCase()+i.slice(1))}function GL(i){return i.charAt(0).toUpperCase()+i.slice(1)}var Xs=new Map,VL=1e3;function kL(i){if(Xs.has(i))return Xs.get(i);const t={};let e=0;const r=i.length;for(;e<r;){const o=i.indexOf(";",e),l=o===-1?r:o,u=i.slice(e,l).trim();if(u){const f=u.indexOf(":");if(f>0){const d=u.slice(0,f).trim(),p=u.slice(f+1).trim();if(d&&p){const g=mS(d);t[g.startsWith("webkit")?GL(g):g]=p}}}e=l+1}if(Xs.size===VL){const o=Xs.keys().next().value;o&&Xs.delete(o)}return Xs.set(i,t),t}function gS(i,t,e={}){if(typeof t=="string")return t;const r=(t.children||[]).map(p=>gS(i,p)),o=t.attributes||{},l={};for(const[p,g]of Object.entries(o))switch(!0){case p==="class":{l.className=g,delete o.class;break}case p==="style":{l.style=kL(String(g));break}case p.startsWith("aria-"):case p.startsWith("data-"):{l[p.toLowerCase()]=g;break}default:l[mS(p)]=g}const{style:u,"aria-label":f,...d}=e;return u&&(l.style=l.style?{...l.style,...u}:u),f&&(l["aria-label"]=f,l["aria-hidden"]="false"),i(t.tag,{...d,...l},...r)}var ty=(i,t)=>{const e=pt.useId();return i||(t?e:void 0)},XL=class{constructor(i="react-fontawesome"){this.enabled=!1;let t=!1;try{t=typeof process<"u"&&!1}catch{}this.scope=i,this.enabled=t}log(...i){this.enabled&&console.log(`[${this.scope}]`,...i)}warn(...i){this.enabled&&console.warn(`[${this.scope}]`,...i)}error(...i){this.enabled&&console.error(`[${this.scope}]`,...i)}},WL="searchPseudoElementsFullScan"in zL?"7.0.0":"6.0.0",jL=Number.parseInt(WL)>=7,ha={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},qL={left:"fa-pull-left",right:"fa-pull-right"},YL={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},ZL={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},da={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function KL(i){const{beat:t,fade:e,beatFade:r,bounce:o,shake:l,spin:u,spinPulse:f,spinReverse:d,pulse:p,fixedWidth:g,inverse:v,border:_,flip:y,size:M,rotation:b,pull:S,swapOpacity:x,rotateBy:U,widthAuto:D,className:A}=i,N=[];return A&&N.push(...A.split(" ")),t&&N.push(ha.beat),e&&N.push(ha.fade),r&&N.push(ha.beatFade),o&&N.push(ha.bounce),l&&N.push(ha.shake),u&&N.push(ha.spin),d&&N.push(ha.spinReverse),f&&N.push(ha.spinPulse),p&&N.push(ha.pulse),g&&N.push(da.fixedWidth),v&&N.push(da.inverse),_&&N.push(da.border),y===!0&&N.push(da.flip),(y==="horizontal"||y==="both")&&N.push(da.flipHorizontal),(y==="vertical"||y==="both")&&N.push(da.flipVertical),M!=null&&N.push(ZL[M]),b!=null&&b!==0&&N.push(YL[b]),S!=null&&N.push(qL[S]),x&&N.push(da.swapOpacity),jL&&(U&&N.push(da.rotateBy),D&&N.push(da.widthAuto)),N}var $L=i=>typeof i=="object"&&"icon"in i&&!!i.icon;function ey(i){if(i)return $L(i)?i:pS.icon(i)}function QL(i){return Object.keys(i)}var ny=new XL("FontAwesomeIcon"),vS={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},JL=new Set(Object.keys(vS)),Fr=sm.forwardRef((i,t)=>{const e={...vS,...i},{icon:r,mask:o,symbol:l,title:u,titleId:f,maskId:d,transform:p}=e,g=ty(d,!!o),v=ty(f,!!u),_=ey(r);if(!_)return ny.error("Icon lookup is undefined",r),null;const y=KL(e),M=typeof p=="string"?pS.transform(p):p,b=ey(o),S=BL(_,{...y.length>0&&{classes:y},...M&&{transform:M},...b&&{mask:b},symbol:l,title:u,titleId:v,maskId:g});if(!S)return ny.error("Could not find icon",_),null;const{abstract:x}=S,U={ref:t};for(const D of QL(e))JL.has(D)||(U[D]=e[D]);return tN(x[0],U)});Fr.displayName="FontAwesomeIcon";var tN=gS.bind(null,sm.createElement);/*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var iy={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"]},eN={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"]},nN={prefix:"fas",iconName:"globe",icon:[512,512,[127760],"f0ac","M351.9 280l-190.9 0c2.9 64.5 17.2 123.9 37.5 167.4 11.4 24.5 23.7 41.8 35.1 52.4 11.2 10.5 18.9 12.2 22.9 12.2s11.7-1.7 22.9-12.2c11.4-10.6 23.7-28 35.1-52.4 20.3-43.5 34.6-102.9 37.5-167.4zM160.9 232l190.9 0C349 167.5 334.7 108.1 314.4 64.6 303 40.2 290.7 22.8 279.3 12.2 268.1 1.7 260.4 0 256.4 0s-11.7 1.7-22.9 12.2c-11.4 10.6-23.7 28-35.1 52.4-20.3 43.5-34.6 102.9-37.5 167.4zm-48 0C116.4 146.4 138.5 66.9 170.8 14.7 78.7 47.3 10.9 131.2 1.5 232l111.4 0zM1.5 280c9.4 100.8 77.2 184.7 169.3 217.3-32.3-52.2-54.4-131.7-57.9-217.3L1.5 280zm398.4 0c-3.5 85.6-25.6 165.1-57.9 217.3 92.1-32.7 159.9-116.5 169.3-217.3l-111.4 0zm111.4-48C501.9 131.2 434.1 47.3 342 14.7 374.3 66.9 396.4 146.4 399.9 232l111.4 0z"]};/*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var iN={prefix:"fab",iconName:"linkedin-in",icon:[448,512,[],"f0e1","M100.3 448l-92.9 0 0-299.1 92.9 0 0 299.1zM53.8 108.1C24.1 108.1 0 83.5 0 53.8 0 39.5 5.7 25.9 15.8 15.8s23.8-15.8 38-15.8 27.9 5.7 38 15.8 15.8 23.8 15.8 38c0 29.7-24.1 54.3-53.8 54.3zM447.9 448l-92.7 0 0-145.6c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7l0 148.1-92.8 0 0-299.1 89.1 0 0 40.8 1.3 0c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3l0 164.3-.1 0z"]},aN={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103l0-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"]};Sm.register();const rN=()=>{const[i,t]=pt.useState(!0);return pt.useEffect(()=>{const e=setTimeout(()=>t(!1),3e3);return()=>clearTimeout(e)},[]),st.jsxs("div",{className:"contact-container",children:[i&&st.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"rgba(255, 255, 255, 0.6)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3},children:st.jsx("l-trefoil",{size:"60",stroke:"6","stroke-length":"0.20","bg-opacity":"0.1",speed:"1.4",color:"black"})}),st.jsx("div",{className:"contact-background",children:st.jsx(m1,{colors:["#5227FF","#FF9FFC","#B19EEF"],mouseForce:50,cursorSize:40,isViscous:!1,viscous:30,iterationsViscous:32,iterationsPoisson:32,resolution:.5,isBounce:!1,autoDemo:!0,autoSpeed:.5,autoIntensity:2.2,takeoverDuration:.25,autoResumeDelay:3e3,autoRampDuration:.6})}),st.jsxs("div",{className:"content",children:[st.jsxs("section",{className:"contact-hero",children:[st.jsx("h1",{className:"contact-title",children:"Get In Touch"}),st.jsx("p",{className:"contact-subtitle",children:"I’d love to hear from you. Let’s build something amazing together."})]}),st.jsxs("section",{className:"contact-section",children:[st.jsxs("form",{className:"contact-form",children:[st.jsx("input",{type:"text",placeholder:"Name",required:!0}),st.jsx("input",{type:"email",placeholder:"Email",required:!0}),st.jsx("input",{type:"text",placeholder:"Subject",required:!0}),st.jsx("textarea",{placeholder:"Message",rows:"5",required:!0}),st.jsx("button",{className:"send-btn",children:"Send Message"})]}),st.jsxs("div",{className:"contact-info",children:[st.jsxs("div",{className:"contact-item big-icon",children:[st.jsx(Fr,{icon:eN}),st.jsx("span",{className:"contact-text",children:"+91 8697212093"})]}),st.jsxs("div",{className:"contact-item",children:[st.jsx(Fr,{icon:iy}),st.jsx("span",{className:"contact-text",children:"shankhanilsadhak20@gmail.com"})]}),st.jsxs("div",{className:"contact-socials",children:[st.jsx("a",{href:"#","aria-label":"LinkedIn",children:st.jsx(Fr,{icon:iN})}),st.jsx("a",{href:"#","aria-label":"Twitter",children:st.jsx(Fr,{icon:aN})}),st.jsx("a",{href:"mailto:shankhanilsadhak20@gmail.com","aria-label":"Email",children:st.jsx(Fr,{icon:iy})}),st.jsx("a",{href:"#","aria-label":"Portfolio Website",children:st.jsx(Fr,{icon:nN})})]})]})]})]}),st.jsx(Hi,{to:"/",className:"resume-btnnHome contact-home-btn",children:"Back"})]})};function gl(i){let t=i[0],e=i[1],r=i[2];return Math.sqrt(t*t+e*e+r*r)}function nm(i,t){return i[0]=t[0],i[1]=t[1],i[2]=t[2],i}function sN(i,t,e,r){return i[0]=t,i[1]=e,i[2]=r,i}function ay(i,t,e){return i[0]=t[0]+e[0],i[1]=t[1]+e[1],i[2]=t[2]+e[2],i}function ry(i,t,e){return i[0]=t[0]-e[0],i[1]=t[1]-e[1],i[2]=t[2]-e[2],i}function oN(i,t,e){return i[0]=t[0]*e[0],i[1]=t[1]*e[1],i[2]=t[2]*e[2],i}function lN(i,t,e){return i[0]=t[0]/e[0],i[1]=t[1]/e[1],i[2]=t[2]/e[2],i}function Wd(i,t,e){return i[0]=t[0]*e,i[1]=t[1]*e,i[2]=t[2]*e,i}function cN(i,t){let e=t[0]-i[0],r=t[1]-i[1],o=t[2]-i[2];return Math.sqrt(e*e+r*r+o*o)}function uN(i,t){let e=t[0]-i[0],r=t[1]-i[1],o=t[2]-i[2];return e*e+r*r+o*o}function sy(i){let t=i[0],e=i[1],r=i[2];return t*t+e*e+r*r}function fN(i,t){return i[0]=-t[0],i[1]=-t[1],i[2]=-t[2],i}function hN(i,t){return i[0]=1/t[0],i[1]=1/t[1],i[2]=1/t[2],i}function im(i,t){let e=t[0],r=t[1],o=t[2],l=e*e+r*r+o*o;return l>0&&(l=1/Math.sqrt(l)),i[0]=t[0]*l,i[1]=t[1]*l,i[2]=t[2]*l,i}function _S(i,t){return i[0]*t[0]+i[1]*t[1]+i[2]*t[2]}function oy(i,t,e){let r=t[0],o=t[1],l=t[2],u=e[0],f=e[1],d=e[2];return i[0]=o*d-l*f,i[1]=l*u-r*d,i[2]=r*f-o*u,i}function dN(i,t,e,r){let o=t[0],l=t[1],u=t[2];return i[0]=o+r*(e[0]-o),i[1]=l+r*(e[1]-l),i[2]=u+r*(e[2]-u),i}function pN(i,t,e,r,o){const l=Math.exp(-r*o);let u=t[0],f=t[1],d=t[2];return i[0]=e[0]+(u-e[0])*l,i[1]=e[1]+(f-e[1])*l,i[2]=e[2]+(d-e[2])*l,i}function mN(i,t,e){let r=t[0],o=t[1],l=t[2],u=e[3]*r+e[7]*o+e[11]*l+e[15];return u=u||1,i[0]=(e[0]*r+e[4]*o+e[8]*l+e[12])/u,i[1]=(e[1]*r+e[5]*o+e[9]*l+e[13])/u,i[2]=(e[2]*r+e[6]*o+e[10]*l+e[14])/u,i}function gN(i,t,e){let r=t[0],o=t[1],l=t[2],u=e[3]*r+e[7]*o+e[11]*l+e[15];return u=u||1,i[0]=(e[0]*r+e[4]*o+e[8]*l)/u,i[1]=(e[1]*r+e[5]*o+e[9]*l)/u,i[2]=(e[2]*r+e[6]*o+e[10]*l)/u,i}function vN(i,t,e){let r=t[0],o=t[1],l=t[2];return i[0]=r*e[0]+o*e[3]+l*e[6],i[1]=r*e[1]+o*e[4]+l*e[7],i[2]=r*e[2]+o*e[5]+l*e[8],i}function _N(i,t,e){let r=t[0],o=t[1],l=t[2],u=e[0],f=e[1],d=e[2],p=e[3],g=f*l-d*o,v=d*r-u*l,_=u*o-f*r,y=f*_-d*v,M=d*g-u*_,b=u*v-f*g,S=p*2;return g*=S,v*=S,_*=S,y*=2,M*=2,b*=2,i[0]=r+g+y,i[1]=o+v+M,i[2]=l+_+b,i}const xN=(function(){const i=[0,0,0],t=[0,0,0];return function(e,r){nm(i,e),nm(t,r),im(i,i),im(t,t);let o=_S(i,t);return o>1?0:o<-1?Math.PI:Math.acos(o)}})();function yN(i,t){return i[0]===t[0]&&i[1]===t[1]&&i[2]===t[2]}class hn extends Array{constructor(t=0,e=t,r=t){return super(t,e,r),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(t){this[0]=t}set y(t){this[1]=t}set z(t){this[2]=t}set(t,e=t,r=t){return t.length?this.copy(t):(sN(this,t,e,r),this)}copy(t){return nm(this,t),this}add(t,e){return e?ay(this,t,e):ay(this,this,t),this}sub(t,e){return e?ry(this,t,e):ry(this,this,t),this}multiply(t){return t.length?oN(this,this,t):Wd(this,this,t),this}divide(t){return t.length?lN(this,this,t):Wd(this,this,1/t),this}inverse(t=this){return hN(this,t),this}len(){return gl(this)}distance(t){return t?cN(this,t):gl(this)}squaredLen(){return sy(this)}squaredDistance(t){return t?uN(this,t):sy(this)}negate(t=this){return fN(this,t),this}cross(t,e){return e?oy(this,t,e):oy(this,this,t),this}scale(t){return Wd(this,this,t),this}normalize(){return im(this,this),this}dot(t){return _S(this,t)}equals(t){return yN(this,t)}applyMatrix3(t){return vN(this,this,t),this}applyMatrix4(t){return mN(this,this,t),this}scaleRotateMatrix4(t){return gN(this,this,t),this}applyQuaternion(t){return _N(this,this,t),this}angle(t){return xN(this,t)}lerp(t,e){return dN(this,this,t,e),this}smoothLerp(t,e,r){return pN(this,this,t,e,r),this}clone(){return new hn(this[0],this[1],this[2])}fromArray(t,e=0){return this[0]=t[e],this[1]=t[e+1],this[2]=t[e+2],this}toArray(t=[],e=0){return t[e]=this[0],t[e+1]=this[1],t[e+2]=this[2],t}transformDirection(t){const e=this[0],r=this[1],o=this[2];return this[0]=t[0]*e+t[4]*r+t[8]*o,this[1]=t[1]*e+t[5]*r+t[9]*o,this[2]=t[2]*e+t[6]*r+t[10]*o,this.normalize()}}const ly=new hn;let SN=1,EN=1,cy=!1;class MN{constructor(t,e={}){t.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=t,this.attributes=e,this.id=SN++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let r in e)this.addAttribute(r,e[r])}addAttribute(t,e){if(this.attributes[t]=e,e.id=EN++,e.size=e.size||1,e.type=e.type||(e.data.constructor===Float32Array?this.gl.FLOAT:e.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),e.target=t==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,e.normalized=e.normalized||!1,e.stride=e.stride||0,e.offset=e.offset||0,e.count=e.count||(e.stride?e.data.byteLength/e.stride:e.data.length/e.size),e.divisor=e.instanced||0,e.needsUpdate=!1,e.usage=e.usage||this.gl.STATIC_DRAW,e.buffer||this.updateAttribute(e),e.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==e.count*e.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,e.count*e.divisor);this.instancedCount=e.count*e.divisor}else t==="index"?this.drawRange.count=e.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,e.count))}updateAttribute(t){const e=!t.buffer;e&&(t.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==t.buffer&&(this.gl.bindBuffer(t.target,t.buffer),this.glState.boundBuffer=t.buffer),e?this.gl.bufferData(t.target,t.data,t.usage):this.gl.bufferSubData(t.target,0,t.data),t.needsUpdate=!1}setIndex(t){this.addAttribute("index",t)}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}setInstancedCount(t){this.instancedCount=t}createVAO(t){this.VAOs[t.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),this.bindAttributes(t)}bindAttributes(t){t.attributeLocations.forEach((e,{name:r,type:o})=>{if(!this.attributes[r]){console.warn(`active attribute ${r} not being supplied`);return}const l=this.attributes[r];this.gl.bindBuffer(l.target,l.buffer),this.glState.boundBuffer=l.buffer;let u=1;o===35674&&(u=2),o===35675&&(u=3),o===35676&&(u=4);const f=l.size/u,d=u===1?0:u*u*4,p=u===1?0:u*4;for(let g=0;g<u;g++)this.gl.vertexAttribPointer(e+g,f,l.type,l.normalized,l.stride+d,l.offset+g*p),this.gl.enableVertexAttribArray(e+g),this.gl.renderer.vertexAttribDivisor(e+g,l.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:t,mode:e=this.gl.TRIANGLES}){this.gl.renderer.currentGeometry!==`${this.id}_${t.attributeOrder}`&&(this.VAOs[t.attributeOrder]||this.createVAO(t),this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${t.attributeOrder}`),t.attributeLocations.forEach((o,{name:l})=>{const u=this.attributes[l];u.needsUpdate&&this.updateAttribute(u)});let r=2;this.attributes.index?.type===this.gl.UNSIGNED_INT&&(r=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(e,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*r,this.instancedCount):this.gl.renderer.drawArraysInstanced(e,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(e,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*r):this.gl.drawArrays(e,this.drawRange.start,this.drawRange.count)}getPosition(){const t=this.attributes.position;if(t.data)return t;if(!cy)return console.warn("No position buffer data found to compute bounds"),cy=!0}computeBoundingBox(t){t||(t=this.getPosition());const e=t.data,r=t.size;this.bounds||(this.bounds={min:new hn,max:new hn,center:new hn,scale:new hn,radius:1/0});const o=this.bounds.min,l=this.bounds.max,u=this.bounds.center,f=this.bounds.scale;o.set(1/0),l.set(-1/0);for(let d=0,p=e.length;d<p;d+=r){const g=e[d],v=e[d+1],_=e[d+2];o.x=Math.min(g,o.x),o.y=Math.min(v,o.y),o.z=Math.min(_,o.z),l.x=Math.max(g,l.x),l.y=Math.max(v,l.y),l.z=Math.max(_,l.z)}f.sub(l,o),u.add(o,l).divide(2)}computeBoundingSphere(t){t||(t=this.getPosition());const e=t.data,r=t.size;this.bounds||this.computeBoundingBox(t);let o=0;for(let l=0,u=e.length;l<u;l+=r)ly.fromArray(e,l),o=Math.max(o,this.bounds.center.squaredDistance(ly));this.bounds.radius=Math.sqrt(o)}remove(){for(let t in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[t]),delete this.VAOs[t];for(let t in this.attributes)this.gl.deleteBuffer(this.attributes[t].buffer),delete this.attributes[t]}}let bN=1;const uy={};class xS{constructor(t,{vertex:e,fragment:r,uniforms:o={},transparent:l=!1,cullFace:u=t.BACK,frontFace:f=t.CCW,depthTest:d=!0,depthWrite:p=!0,depthFunc:g=t.LEQUAL}={}){t.canvas||console.error("gl not passed as first argument to Program"),this.gl=t,this.uniforms=o,this.id=bN++,e||console.warn("vertex shader not supplied"),r||console.warn("fragment shader not supplied"),this.transparent=l,this.cullFace=u,this.frontFace=f,this.depthTest=d,this.depthWrite=p,this.depthFunc=g,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=t.createShader(t.VERTEX_SHADER),this.fragmentShader=t.createShader(t.FRAGMENT_SHADER),this.program=t.createProgram(),t.attachShader(this.program,this.vertexShader),t.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:e,fragment:r})}setShaders({vertex:t,fragment:e}){if(t&&(this.gl.shaderSource(this.vertexShader,t),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${fy(t)}`)),e&&(this.gl.shaderSource(this.fragmentShader,e),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${fy(e)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let r=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let u=0;u<r;u++){let f=this.gl.getActiveUniform(this.program,u);this.uniformLocations.set(f,this.gl.getUniformLocation(this.program,f.name));const d=f.name.match(/(\w+)/g);f.uniformName=d[0],f.nameComponents=d.slice(1)}this.attributeLocations=new Map;const o=[],l=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let u=0;u<l;u++){const f=this.gl.getActiveAttrib(this.program,u),d=this.gl.getAttribLocation(this.program,f.name);d!==-1&&(o[d]=f.name,this.attributeLocations.set(f,d))}this.attributeOrder=o.join("")}setBlendFunc(t,e,r,o){this.blendFunc.src=t,this.blendFunc.dst=e,this.blendFunc.srcAlpha=r,this.blendFunc.dstAlpha=o,t&&(this.transparent=!0)}setBlendEquation(t,e){this.blendEquation.modeRGB=t,this.blendEquation.modeAlpha=e}setStencilFunc(t,e,r){this.stencilRef=e,this.stencilFunc.func=t,this.stencilFunc.ref=e,this.stencilFunc.mask=r}setStencilOp(t,e,r){this.stencilOp.stencilFail=t,this.stencilOp.depthFail=e,this.stencilOp.depthPass=r}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:t=!1}={}){let e=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((o,l)=>{let u=this.uniforms[l.uniformName];for(const f of l.nameComponents){if(!u)break;if(f in u)u=u[f];else{if(Array.isArray(u.value))break;u=void 0;break}}if(!u)return hy(`Active uniform ${l.name} has not been supplied`);if(u&&u.value===void 0)return hy(`${l.name} uniform is missing a value parameter`);if(u.value.texture)return e=e+1,u.value.update(e),jd(this.gl,l.type,o,e);if(u.value.length&&u.value[0].texture){const f=[];return u.value.forEach(d=>{e=e+1,d.update(e),f.push(e)}),jd(this.gl,l.type,o,f)}jd(this.gl,l.type,o,u.value)}),this.applyState(),t&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function jd(i,t,e,r){r=r.length?TN(r):r;const o=i.renderer.state.uniformLocations.get(e);if(r.length)if(o===void 0||o.length!==r.length)i.renderer.state.uniformLocations.set(e,r.slice(0));else{if(AN(o,r))return;o.set?o.set(r):wN(o,r),i.renderer.state.uniformLocations.set(e,o)}else{if(o===r)return;i.renderer.state.uniformLocations.set(e,r)}switch(t){case 5126:return r.length?i.uniform1fv(e,r):i.uniform1f(e,r);case 35664:return i.uniform2fv(e,r);case 35665:return i.uniform3fv(e,r);case 35666:return i.uniform4fv(e,r);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return r.length?i.uniform1iv(e,r):i.uniform1i(e,r);case 35671:case 35667:return i.uniform2iv(e,r);case 35672:case 35668:return i.uniform3iv(e,r);case 35673:case 35669:return i.uniform4iv(e,r);case 35674:return i.uniformMatrix2fv(e,!1,r);case 35675:return i.uniformMatrix3fv(e,!1,r);case 35676:return i.uniformMatrix4fv(e,!1,r)}}function fy(i){let t=i.split(`
`);for(let e=0;e<t.length;e++)t[e]=e+1+": "+t[e];return t.join(`
`)}function TN(i){const t=i.length,e=i[0].length;if(e===void 0)return i;const r=t*e;let o=uy[r];o||(uy[r]=o=new Float32Array(r));for(let l=0;l<t;l++)o.set(i[l],l*e);return o}function AN(i,t){if(i.length!==t.length)return!1;for(let e=0,r=i.length;e<r;e++)if(i[e]!==t[e])return!1;return!0}function wN(i,t){for(let e=0,r=i.length;e<r;e++)i[e]=t[e]}let qd=0;function hy(i){qd>100||(console.warn(i),qd++,qd>100&&console.warn("More than 100 program warnings - stopping logs."))}const Yd=new hn;let RN=1;class CN{constructor({canvas:t=document.createElement("canvas"),width:e=300,height:r=150,dpr:o=1,alpha:l=!1,depth:u=!0,stencil:f=!1,antialias:d=!1,premultipliedAlpha:p=!1,preserveDrawingBuffer:g=!1,powerPreference:v="default",autoClear:_=!0,webgl:y=2}={}){const M={alpha:l,depth:u,stencil:f,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:g,powerPreference:v};this.dpr=o,this.alpha=l,this.color=!0,this.depth=u,this.stencil=f,this.premultipliedAlpha=p,this.autoClear=_,this.id=RN++,y===2&&(this.gl=t.getContext("webgl2",M)),this.isWebgl2=!!this.gl,this.gl||(this.gl=t.getContext("webgl",M)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(e,r),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(t,e){this.width=t,this.height=e,this.gl.canvas.width=t*this.dpr,this.gl.canvas.height=e*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:t+"px",height:e+"px"})}setViewport(t,e,r=0,o=0){this.state.viewport.width===t&&this.state.viewport.height===e||(this.state.viewport.width=t,this.state.viewport.height=e,this.state.viewport.x=r,this.state.viewport.y=o,this.gl.viewport(r,o,t,e))}setScissor(t,e,r=0,o=0){this.gl.scissor(r,o,t,e)}enable(t){this.state[t]!==!0&&(this.gl.enable(t),this.state[t]=!0)}disable(t){this.state[t]!==!1&&(this.gl.disable(t),this.state[t]=!1)}setBlendFunc(t,e,r,o){this.state.blendFunc.src===t&&this.state.blendFunc.dst===e&&this.state.blendFunc.srcAlpha===r&&this.state.blendFunc.dstAlpha===o||(this.state.blendFunc.src=t,this.state.blendFunc.dst=e,this.state.blendFunc.srcAlpha=r,this.state.blendFunc.dstAlpha=o,r!==void 0?this.gl.blendFuncSeparate(t,e,r,o):this.gl.blendFunc(t,e))}setBlendEquation(t,e){t=t||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===t&&this.state.blendEquation.modeAlpha===e)&&(this.state.blendEquation.modeRGB=t,this.state.blendEquation.modeAlpha=e,e!==void 0?this.gl.blendEquationSeparate(t,e):this.gl.blendEquation(t))}setCullFace(t){this.state.cullFace!==t&&(this.state.cullFace=t,this.gl.cullFace(t))}setFrontFace(t){this.state.frontFace!==t&&(this.state.frontFace=t,this.gl.frontFace(t))}setDepthMask(t){this.state.depthMask!==t&&(this.state.depthMask=t,this.gl.depthMask(t))}setDepthFunc(t){this.state.depthFunc!==t&&(this.state.depthFunc=t,this.gl.depthFunc(t))}setStencilMask(t){this.state.stencilMask!==t&&(this.state.stencilMask=t,this.gl.stencilMask(t))}setStencilFunc(t,e,r){this.state.stencilFunc===t&&this.state.stencilRef===e&&this.state.stencilFuncMask===r||(this.state.stencilFunc=t||this.gl.ALWAYS,this.state.stencilRef=e||0,this.state.stencilFuncMask=r||0,this.gl.stencilFunc(t||this.gl.ALWAYS,e||0,r||0))}setStencilOp(t,e,r){this.state.stencilFail===t&&this.state.stencilDepthFail===e&&this.state.stencilDepthPass===r||(this.state.stencilFail=t,this.state.stencilDepthFail=e,this.state.stencilDepthPass=r,this.gl.stencilOp(t,e,r))}activeTexture(t){this.state.activeTextureUnit!==t&&(this.state.activeTextureUnit=t,this.gl.activeTexture(this.gl.TEXTURE0+t))}bindFramebuffer({target:t=this.gl.FRAMEBUFFER,buffer:e=null}={}){this.state.framebuffer!==e&&(this.state.framebuffer=e,this.gl.bindFramebuffer(t,e))}getExtension(t,e,r){return e&&this.gl[e]?this.gl[e].bind(this.gl):(this.extensions[t]||(this.extensions[t]=this.gl.getExtension(t)),e?this.extensions[t]?this.extensions[t][r].bind(this.extensions[t]):null:this.extensions[t])}sortOpaque(t,e){return t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.program.id!==e.program.id?t.program.id-e.program.id:t.zDepth!==e.zDepth?t.zDepth-e.zDepth:e.id-t.id}sortTransparent(t,e){return t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.zDepth!==e.zDepth?e.zDepth-t.zDepth:e.id-t.id}sortUI(t,e){return t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.program.id!==e.program.id?t.program.id-e.program.id:e.id-t.id}getRenderList({scene:t,camera:e,frustumCull:r,sort:o}){let l=[];if(e&&r&&e.updateFrustum(),t.traverse(u=>{if(!u.visible)return!0;u.draw&&(r&&u.frustumCulled&&e&&!e.frustumIntersectsMesh(u)||l.push(u))}),o){const u=[],f=[],d=[];l.forEach(p=>{p.program.transparent?p.program.depthTest?f.push(p):d.push(p):u.push(p),p.zDepth=0,!(p.renderOrder!==0||!p.program.depthTest||!e)&&(p.worldMatrix.getTranslation(Yd),Yd.applyMatrix4(e.projectionViewMatrix),p.zDepth=Yd.z)}),u.sort(this.sortOpaque),f.sort(this.sortTransparent),d.sort(this.sortUI),l=u.concat(f,d)}return l}render({scene:t,camera:e,target:r=null,update:o=!0,sort:l=!0,frustumCull:u=!0,clear:f}){r===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(r),this.setViewport(r.width,r.height)),(f||this.autoClear&&f!==!1)&&(this.depth&&(!r||r.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!r||r.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),o&&t.updateMatrixWorld(),e&&e.updateMatrixWorld(),this.getRenderList({scene:t,camera:e,frustumCull:u,sort:l}).forEach(p=>{p.draw({camera:e})})}}function DN(i,t){return i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=t[3],i}function UN(i,t,e,r,o){return i[0]=t,i[1]=e,i[2]=r,i[3]=o,i}function LN(i,t){let e=t[0],r=t[1],o=t[2],l=t[3],u=e*e+r*r+o*o+l*l;return u>0&&(u=1/Math.sqrt(u)),i[0]=e*u,i[1]=r*u,i[2]=o*u,i[3]=l*u,i}function NN(i,t){return i[0]*t[0]+i[1]*t[1]+i[2]*t[2]+i[3]*t[3]}function ON(i){return i[0]=0,i[1]=0,i[2]=0,i[3]=1,i}function PN(i,t,e){e=e*.5;let r=Math.sin(e);return i[0]=r*t[0],i[1]=r*t[1],i[2]=r*t[2],i[3]=Math.cos(e),i}function dy(i,t,e){let r=t[0],o=t[1],l=t[2],u=t[3],f=e[0],d=e[1],p=e[2],g=e[3];return i[0]=r*g+u*f+o*p-l*d,i[1]=o*g+u*d+l*f-r*p,i[2]=l*g+u*p+r*d-o*f,i[3]=u*g-r*f-o*d-l*p,i}function IN(i,t,e){e*=.5;let r=t[0],o=t[1],l=t[2],u=t[3],f=Math.sin(e),d=Math.cos(e);return i[0]=r*d+u*f,i[1]=o*d+l*f,i[2]=l*d-o*f,i[3]=u*d-r*f,i}function FN(i,t,e){e*=.5;let r=t[0],o=t[1],l=t[2],u=t[3],f=Math.sin(e),d=Math.cos(e);return i[0]=r*d-l*f,i[1]=o*d+u*f,i[2]=l*d+r*f,i[3]=u*d-o*f,i}function zN(i,t,e){e*=.5;let r=t[0],o=t[1],l=t[2],u=t[3],f=Math.sin(e),d=Math.cos(e);return i[0]=r*d+o*f,i[1]=o*d-r*f,i[2]=l*d+u*f,i[3]=u*d-l*f,i}function BN(i,t,e,r){let o=t[0],l=t[1],u=t[2],f=t[3],d=e[0],p=e[1],g=e[2],v=e[3],_,y,M,b,S;return y=o*d+l*p+u*g+f*v,y<0&&(y=-y,d=-d,p=-p,g=-g,v=-v),1-y>1e-6?(_=Math.acos(y),M=Math.sin(_),b=Math.sin((1-r)*_)/M,S=Math.sin(r*_)/M):(b=1-r,S=r),i[0]=b*o+S*d,i[1]=b*l+S*p,i[2]=b*u+S*g,i[3]=b*f+S*v,i}function HN(i,t){let e=t[0],r=t[1],o=t[2],l=t[3],u=e*e+r*r+o*o+l*l,f=u?1/u:0;return i[0]=-e*f,i[1]=-r*f,i[2]=-o*f,i[3]=l*f,i}function GN(i,t){return i[0]=-t[0],i[1]=-t[1],i[2]=-t[2],i[3]=t[3],i}function VN(i,t){let e=t[0]+t[4]+t[8],r;if(e>0)r=Math.sqrt(e+1),i[3]=.5*r,r=.5/r,i[0]=(t[5]-t[7])*r,i[1]=(t[6]-t[2])*r,i[2]=(t[1]-t[3])*r;else{let o=0;t[4]>t[0]&&(o=1),t[8]>t[o*3+o]&&(o=2);let l=(o+1)%3,u=(o+2)%3;r=Math.sqrt(t[o*3+o]-t[l*3+l]-t[u*3+u]+1),i[o]=.5*r,r=.5/r,i[3]=(t[l*3+u]-t[u*3+l])*r,i[l]=(t[l*3+o]+t[o*3+l])*r,i[u]=(t[u*3+o]+t[o*3+u])*r}return i}function kN(i,t,e="YXZ"){let r=Math.sin(t[0]*.5),o=Math.cos(t[0]*.5),l=Math.sin(t[1]*.5),u=Math.cos(t[1]*.5),f=Math.sin(t[2]*.5),d=Math.cos(t[2]*.5);return e==="XYZ"?(i[0]=r*u*d+o*l*f,i[1]=o*l*d-r*u*f,i[2]=o*u*f+r*l*d,i[3]=o*u*d-r*l*f):e==="YXZ"?(i[0]=r*u*d+o*l*f,i[1]=o*l*d-r*u*f,i[2]=o*u*f-r*l*d,i[3]=o*u*d+r*l*f):e==="ZXY"?(i[0]=r*u*d-o*l*f,i[1]=o*l*d+r*u*f,i[2]=o*u*f+r*l*d,i[3]=o*u*d-r*l*f):e==="ZYX"?(i[0]=r*u*d-o*l*f,i[1]=o*l*d+r*u*f,i[2]=o*u*f-r*l*d,i[3]=o*u*d+r*l*f):e==="YZX"?(i[0]=r*u*d+o*l*f,i[1]=o*l*d+r*u*f,i[2]=o*u*f-r*l*d,i[3]=o*u*d-r*l*f):e==="XZY"&&(i[0]=r*u*d-o*l*f,i[1]=o*l*d-r*u*f,i[2]=o*u*f+r*l*d,i[3]=o*u*d+r*l*f),i}const XN=DN,WN=UN,jN=NN,qN=LN;class YN extends Array{constructor(t=0,e=0,r=0,o=1){super(t,e,r,o),this.onChange=()=>{},this._target=this;const l=["0","1","2","3"];return new Proxy(this,{set(u,f){const d=Reflect.set(...arguments);return d&&l.includes(f)&&u.onChange(),d}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(t){this._target[0]=t,this.onChange()}set y(t){this._target[1]=t,this.onChange()}set z(t){this._target[2]=t,this.onChange()}set w(t){this._target[3]=t,this.onChange()}identity(){return ON(this._target),this.onChange(),this}set(t,e,r,o){return t.length?this.copy(t):(WN(this._target,t,e,r,o),this.onChange(),this)}rotateX(t){return IN(this._target,this._target,t),this.onChange(),this}rotateY(t){return FN(this._target,this._target,t),this.onChange(),this}rotateZ(t){return zN(this._target,this._target,t),this.onChange(),this}inverse(t=this._target){return HN(this._target,t),this.onChange(),this}conjugate(t=this._target){return GN(this._target,t),this.onChange(),this}copy(t){return XN(this._target,t),this.onChange(),this}normalize(t=this._target){return qN(this._target,t),this.onChange(),this}multiply(t,e){return e?dy(this._target,t,e):dy(this._target,this._target,t),this.onChange(),this}dot(t){return jN(this._target,t)}fromMatrix3(t){return VN(this._target,t),this.onChange(),this}fromEuler(t,e){return kN(this._target,t,t.order),e||this.onChange(),this}fromAxisAngle(t,e){return PN(this._target,t,e),this.onChange(),this}slerp(t,e){return BN(this._target,this._target,t,e),this.onChange(),this}fromArray(t,e=0){return this._target[0]=t[e],this._target[1]=t[e+1],this._target[2]=t[e+2],this._target[3]=t[e+3],this.onChange(),this}toArray(t=[],e=0){return t[e]=this[0],t[e+1]=this[1],t[e+2]=this[2],t[e+3]=this[3],t}}const ZN=1e-6;function KN(i,t){return i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=t[3],i[4]=t[4],i[5]=t[5],i[6]=t[6],i[7]=t[7],i[8]=t[8],i[9]=t[9],i[10]=t[10],i[11]=t[11],i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15],i}function $N(i,t,e,r,o,l,u,f,d,p,g,v,_,y,M,b,S){return i[0]=t,i[1]=e,i[2]=r,i[3]=o,i[4]=l,i[5]=u,i[6]=f,i[7]=d,i[8]=p,i[9]=g,i[10]=v,i[11]=_,i[12]=y,i[13]=M,i[14]=b,i[15]=S,i}function QN(i){return i[0]=1,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=1,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=1,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function JN(i,t){let e=t[0],r=t[1],o=t[2],l=t[3],u=t[4],f=t[5],d=t[6],p=t[7],g=t[8],v=t[9],_=t[10],y=t[11],M=t[12],b=t[13],S=t[14],x=t[15],U=e*f-r*u,D=e*d-o*u,A=e*p-l*u,N=r*d-o*f,I=r*p-l*f,z=o*p-l*d,X=g*b-v*M,L=g*S-_*M,C=g*x-y*M,H=v*S-_*b,Z=v*x-y*b,lt=_*x-y*S,tt=U*lt-D*Z+A*H+N*C-I*L+z*X;return tt?(tt=1/tt,i[0]=(f*lt-d*Z+p*H)*tt,i[1]=(o*Z-r*lt-l*H)*tt,i[2]=(b*z-S*I+x*N)*tt,i[3]=(_*I-v*z-y*N)*tt,i[4]=(d*C-u*lt-p*L)*tt,i[5]=(e*lt-o*C+l*L)*tt,i[6]=(S*A-M*z-x*D)*tt,i[7]=(g*z-_*A+y*D)*tt,i[8]=(u*Z-f*C+p*X)*tt,i[9]=(r*C-e*Z-l*X)*tt,i[10]=(M*I-b*A+x*U)*tt,i[11]=(v*A-g*I-y*U)*tt,i[12]=(f*L-u*H-d*X)*tt,i[13]=(e*H-r*L+o*X)*tt,i[14]=(b*D-M*N-S*U)*tt,i[15]=(g*N-v*D+_*U)*tt,i):null}function yS(i){let t=i[0],e=i[1],r=i[2],o=i[3],l=i[4],u=i[5],f=i[6],d=i[7],p=i[8],g=i[9],v=i[10],_=i[11],y=i[12],M=i[13],b=i[14],S=i[15],x=t*u-e*l,U=t*f-r*l,D=t*d-o*l,A=e*f-r*u,N=e*d-o*u,I=r*d-o*f,z=p*M-g*y,X=p*b-v*y,L=p*S-_*y,C=g*b-v*M,H=g*S-_*M,Z=v*S-_*b;return x*Z-U*H+D*C+A*L-N*X+I*z}function py(i,t,e){let r=t[0],o=t[1],l=t[2],u=t[3],f=t[4],d=t[5],p=t[6],g=t[7],v=t[8],_=t[9],y=t[10],M=t[11],b=t[12],S=t[13],x=t[14],U=t[15],D=e[0],A=e[1],N=e[2],I=e[3];return i[0]=D*r+A*f+N*v+I*b,i[1]=D*o+A*d+N*_+I*S,i[2]=D*l+A*p+N*y+I*x,i[3]=D*u+A*g+N*M+I*U,D=e[4],A=e[5],N=e[6],I=e[7],i[4]=D*r+A*f+N*v+I*b,i[5]=D*o+A*d+N*_+I*S,i[6]=D*l+A*p+N*y+I*x,i[7]=D*u+A*g+N*M+I*U,D=e[8],A=e[9],N=e[10],I=e[11],i[8]=D*r+A*f+N*v+I*b,i[9]=D*o+A*d+N*_+I*S,i[10]=D*l+A*p+N*y+I*x,i[11]=D*u+A*g+N*M+I*U,D=e[12],A=e[13],N=e[14],I=e[15],i[12]=D*r+A*f+N*v+I*b,i[13]=D*o+A*d+N*_+I*S,i[14]=D*l+A*p+N*y+I*x,i[15]=D*u+A*g+N*M+I*U,i}function tO(i,t,e){let r=e[0],o=e[1],l=e[2],u,f,d,p,g,v,_,y,M,b,S,x;return t===i?(i[12]=t[0]*r+t[4]*o+t[8]*l+t[12],i[13]=t[1]*r+t[5]*o+t[9]*l+t[13],i[14]=t[2]*r+t[6]*o+t[10]*l+t[14],i[15]=t[3]*r+t[7]*o+t[11]*l+t[15]):(u=t[0],f=t[1],d=t[2],p=t[3],g=t[4],v=t[5],_=t[6],y=t[7],M=t[8],b=t[9],S=t[10],x=t[11],i[0]=u,i[1]=f,i[2]=d,i[3]=p,i[4]=g,i[5]=v,i[6]=_,i[7]=y,i[8]=M,i[9]=b,i[10]=S,i[11]=x,i[12]=u*r+g*o+M*l+t[12],i[13]=f*r+v*o+b*l+t[13],i[14]=d*r+_*o+S*l+t[14],i[15]=p*r+y*o+x*l+t[15]),i}function eO(i,t,e){let r=e[0],o=e[1],l=e[2];return i[0]=t[0]*r,i[1]=t[1]*r,i[2]=t[2]*r,i[3]=t[3]*r,i[4]=t[4]*o,i[5]=t[5]*o,i[6]=t[6]*o,i[7]=t[7]*o,i[8]=t[8]*l,i[9]=t[9]*l,i[10]=t[10]*l,i[11]=t[11]*l,i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15],i}function nO(i,t,e,r){let o=r[0],l=r[1],u=r[2],f=Math.hypot(o,l,u),d,p,g,v,_,y,M,b,S,x,U,D,A,N,I,z,X,L,C,H,Z,lt,tt,dt;return Math.abs(f)<ZN?null:(f=1/f,o*=f,l*=f,u*=f,d=Math.sin(e),p=Math.cos(e),g=1-p,v=t[0],_=t[1],y=t[2],M=t[3],b=t[4],S=t[5],x=t[6],U=t[7],D=t[8],A=t[9],N=t[10],I=t[11],z=o*o*g+p,X=l*o*g+u*d,L=u*o*g-l*d,C=o*l*g-u*d,H=l*l*g+p,Z=u*l*g+o*d,lt=o*u*g+l*d,tt=l*u*g-o*d,dt=u*u*g+p,i[0]=v*z+b*X+D*L,i[1]=_*z+S*X+A*L,i[2]=y*z+x*X+N*L,i[3]=M*z+U*X+I*L,i[4]=v*C+b*H+D*Z,i[5]=_*C+S*H+A*Z,i[6]=y*C+x*H+N*Z,i[7]=M*C+U*H+I*Z,i[8]=v*lt+b*tt+D*dt,i[9]=_*lt+S*tt+A*dt,i[10]=y*lt+x*tt+N*dt,i[11]=M*lt+U*tt+I*dt,t!==i&&(i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15]),i)}function iO(i,t){return i[0]=t[12],i[1]=t[13],i[2]=t[14],i}function SS(i,t){let e=t[0],r=t[1],o=t[2],l=t[4],u=t[5],f=t[6],d=t[8],p=t[9],g=t[10];return i[0]=Math.hypot(e,r,o),i[1]=Math.hypot(l,u,f),i[2]=Math.hypot(d,p,g),i}function aO(i){let t=i[0],e=i[1],r=i[2],o=i[4],l=i[5],u=i[6],f=i[8],d=i[9],p=i[10];const g=t*t+e*e+r*r,v=o*o+l*l+u*u,_=f*f+d*d+p*p;return Math.sqrt(Math.max(g,v,_))}const ES=(function(){const i=[1,1,1];return function(t,e){let r=i;SS(r,e);let o=1/r[0],l=1/r[1],u=1/r[2],f=e[0]*o,d=e[1]*l,p=e[2]*u,g=e[4]*o,v=e[5]*l,_=e[6]*u,y=e[8]*o,M=e[9]*l,b=e[10]*u,S=f+v+b,x=0;return S>0?(x=Math.sqrt(S+1)*2,t[3]=.25*x,t[0]=(_-M)/x,t[1]=(y-p)/x,t[2]=(d-g)/x):f>v&&f>b?(x=Math.sqrt(1+f-v-b)*2,t[3]=(_-M)/x,t[0]=.25*x,t[1]=(d+g)/x,t[2]=(y+p)/x):v>b?(x=Math.sqrt(1+v-f-b)*2,t[3]=(y-p)/x,t[0]=(d+g)/x,t[1]=.25*x,t[2]=(_+M)/x):(x=Math.sqrt(1+b-f-v)*2,t[3]=(d-g)/x,t[0]=(y+p)/x,t[1]=(_+M)/x,t[2]=.25*x),t}})();function rO(i,t,e,r){let o=gl([i[0],i[1],i[2]]);const l=gl([i[4],i[5],i[6]]),u=gl([i[8],i[9],i[10]]);yS(i)<0&&(o=-o),e[0]=i[12],e[1]=i[13],e[2]=i[14];const d=i.slice(),p=1/o,g=1/l,v=1/u;d[0]*=p,d[1]*=p,d[2]*=p,d[4]*=g,d[5]*=g,d[6]*=g,d[8]*=v,d[9]*=v,d[10]*=v,ES(t,d),r[0]=o,r[1]=l,r[2]=u}function sO(i,t,e,r){const o=i,l=t[0],u=t[1],f=t[2],d=t[3],p=l+l,g=u+u,v=f+f,_=l*p,y=l*g,M=l*v,b=u*g,S=u*v,x=f*v,U=d*p,D=d*g,A=d*v,N=r[0],I=r[1],z=r[2];return o[0]=(1-(b+x))*N,o[1]=(y+A)*N,o[2]=(M-D)*N,o[3]=0,o[4]=(y-A)*I,o[5]=(1-(_+x))*I,o[6]=(S+U)*I,o[7]=0,o[8]=(M+D)*z,o[9]=(S-U)*z,o[10]=(1-(_+b))*z,o[11]=0,o[12]=e[0],o[13]=e[1],o[14]=e[2],o[15]=1,o}function oO(i,t){let e=t[0],r=t[1],o=t[2],l=t[3],u=e+e,f=r+r,d=o+o,p=e*u,g=r*u,v=r*f,_=o*u,y=o*f,M=o*d,b=l*u,S=l*f,x=l*d;return i[0]=1-v-M,i[1]=g+x,i[2]=_-S,i[3]=0,i[4]=g-x,i[5]=1-p-M,i[6]=y+b,i[7]=0,i[8]=_+S,i[9]=y-b,i[10]=1-p-v,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function lO(i,t,e,r,o){let l=1/Math.tan(t/2),u=1/(r-o);return i[0]=l/e,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=l,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=(o+r)*u,i[11]=-1,i[12]=0,i[13]=0,i[14]=2*o*r*u,i[15]=0,i}function cO(i,t,e,r,o,l,u){let f=1/(t-e),d=1/(r-o),p=1/(l-u);return i[0]=-2*f,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=-2*d,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=2*p,i[11]=0,i[12]=(t+e)*f,i[13]=(o+r)*d,i[14]=(u+l)*p,i[15]=1,i}function uO(i,t,e,r){let o=t[0],l=t[1],u=t[2],f=r[0],d=r[1],p=r[2],g=o-e[0],v=l-e[1],_=u-e[2],y=g*g+v*v+_*_;y===0?_=1:(y=1/Math.sqrt(y),g*=y,v*=y,_*=y);let M=d*_-p*v,b=p*g-f*_,S=f*v-d*g;return y=M*M+b*b+S*S,y===0&&(p?f+=1e-6:d?p+=1e-6:d+=1e-6,M=d*_-p*v,b=p*g-f*_,S=f*v-d*g,y=M*M+b*b+S*S),y=1/Math.sqrt(y),M*=y,b*=y,S*=y,i[0]=M,i[1]=b,i[2]=S,i[3]=0,i[4]=v*S-_*b,i[5]=_*M-g*S,i[6]=g*b-v*M,i[7]=0,i[8]=g,i[9]=v,i[10]=_,i[11]=0,i[12]=o,i[13]=l,i[14]=u,i[15]=1,i}function my(i,t,e){return i[0]=t[0]+e[0],i[1]=t[1]+e[1],i[2]=t[2]+e[2],i[3]=t[3]+e[3],i[4]=t[4]+e[4],i[5]=t[5]+e[5],i[6]=t[6]+e[6],i[7]=t[7]+e[7],i[8]=t[8]+e[8],i[9]=t[9]+e[9],i[10]=t[10]+e[10],i[11]=t[11]+e[11],i[12]=t[12]+e[12],i[13]=t[13]+e[13],i[14]=t[14]+e[14],i[15]=t[15]+e[15],i}function gy(i,t,e){return i[0]=t[0]-e[0],i[1]=t[1]-e[1],i[2]=t[2]-e[2],i[3]=t[3]-e[3],i[4]=t[4]-e[4],i[5]=t[5]-e[5],i[6]=t[6]-e[6],i[7]=t[7]-e[7],i[8]=t[8]-e[8],i[9]=t[9]-e[9],i[10]=t[10]-e[10],i[11]=t[11]-e[11],i[12]=t[12]-e[12],i[13]=t[13]-e[13],i[14]=t[14]-e[14],i[15]=t[15]-e[15],i}function fO(i,t,e){return i[0]=t[0]*e,i[1]=t[1]*e,i[2]=t[2]*e,i[3]=t[3]*e,i[4]=t[4]*e,i[5]=t[5]*e,i[6]=t[6]*e,i[7]=t[7]*e,i[8]=t[8]*e,i[9]=t[9]*e,i[10]=t[10]*e,i[11]=t[11]*e,i[12]=t[12]*e,i[13]=t[13]*e,i[14]=t[14]*e,i[15]=t[15]*e,i}class sr extends Array{constructor(t=1,e=0,r=0,o=0,l=0,u=1,f=0,d=0,p=0,g=0,v=1,_=0,y=0,M=0,b=0,S=1){return super(t,e,r,o,l,u,f,d,p,g,v,_,y,M,b,S),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(t){this[12]=t}set y(t){this[13]=t}set z(t){this[14]=t}set w(t){this[15]=t}set(t,e,r,o,l,u,f,d,p,g,v,_,y,M,b,S){return t.length?this.copy(t):($N(this,t,e,r,o,l,u,f,d,p,g,v,_,y,M,b,S),this)}translate(t,e=this){return tO(this,e,t),this}rotate(t,e,r=this){return nO(this,r,t,e),this}scale(t,e=this){return eO(this,e,typeof t=="number"?[t,t,t]:t),this}add(t,e){return e?my(this,t,e):my(this,this,t),this}sub(t,e){return e?gy(this,t,e):gy(this,this,t),this}multiply(t,e){return t.length?e?py(this,t,e):py(this,this,t):fO(this,this,t),this}identity(){return QN(this),this}copy(t){return KN(this,t),this}fromPerspective({fov:t,aspect:e,near:r,far:o}={}){return lO(this,t,e,r,o),this}fromOrthogonal({left:t,right:e,bottom:r,top:o,near:l,far:u}){return cO(this,t,e,r,o,l,u),this}fromQuaternion(t){return oO(this,t),this}setPosition(t){return this.x=t[0],this.y=t[1],this.z=t[2],this}inverse(t=this){return JN(this,t),this}compose(t,e,r){return sO(this,t,e,r),this}decompose(t,e,r){return rO(this,t,e,r),this}getRotation(t){return ES(t,this),this}getTranslation(t){return iO(t,this),this}getScaling(t){return SS(t,this),this}getMaxScaleOnAxis(){return aO(this)}lookAt(t,e,r){return uO(this,t,e,r),this}determinant(){return yS(this)}fromArray(t,e=0){return this[0]=t[e],this[1]=t[e+1],this[2]=t[e+2],this[3]=t[e+3],this[4]=t[e+4],this[5]=t[e+5],this[6]=t[e+6],this[7]=t[e+7],this[8]=t[e+8],this[9]=t[e+9],this[10]=t[e+10],this[11]=t[e+11],this[12]=t[e+12],this[13]=t[e+13],this[14]=t[e+14],this[15]=t[e+15],this}toArray(t=[],e=0){return t[e]=this[0],t[e+1]=this[1],t[e+2]=this[2],t[e+3]=this[3],t[e+4]=this[4],t[e+5]=this[5],t[e+6]=this[6],t[e+7]=this[7],t[e+8]=this[8],t[e+9]=this[9],t[e+10]=this[10],t[e+11]=this[11],t[e+12]=this[12],t[e+13]=this[13],t[e+14]=this[14],t[e+15]=this[15],t}}function hO(i,t,e="YXZ"){return e==="XYZ"?(i[1]=Math.asin(Math.min(Math.max(t[8],-1),1)),Math.abs(t[8])<.99999?(i[0]=Math.atan2(-t[9],t[10]),i[2]=Math.atan2(-t[4],t[0])):(i[0]=Math.atan2(t[6],t[5]),i[2]=0)):e==="YXZ"?(i[0]=Math.asin(-Math.min(Math.max(t[9],-1),1)),Math.abs(t[9])<.99999?(i[1]=Math.atan2(t[8],t[10]),i[2]=Math.atan2(t[1],t[5])):(i[1]=Math.atan2(-t[2],t[0]),i[2]=0)):e==="ZXY"?(i[0]=Math.asin(Math.min(Math.max(t[6],-1),1)),Math.abs(t[6])<.99999?(i[1]=Math.atan2(-t[2],t[10]),i[2]=Math.atan2(-t[4],t[5])):(i[1]=0,i[2]=Math.atan2(t[1],t[0]))):e==="ZYX"?(i[1]=Math.asin(-Math.min(Math.max(t[2],-1),1)),Math.abs(t[2])<.99999?(i[0]=Math.atan2(t[6],t[10]),i[2]=Math.atan2(t[1],t[0])):(i[0]=0,i[2]=Math.atan2(-t[4],t[5]))):e==="YZX"?(i[2]=Math.asin(Math.min(Math.max(t[1],-1),1)),Math.abs(t[1])<.99999?(i[0]=Math.atan2(-t[9],t[5]),i[1]=Math.atan2(-t[2],t[0])):(i[0]=0,i[1]=Math.atan2(t[8],t[10]))):e==="XZY"&&(i[2]=Math.asin(-Math.min(Math.max(t[4],-1),1)),Math.abs(t[4])<.99999?(i[0]=Math.atan2(t[6],t[5]),i[1]=Math.atan2(t[8],t[0])):(i[0]=Math.atan2(-t[9],t[10]),i[1]=0)),i}const vy=new sr;class dO extends Array{constructor(t=0,e=t,r=t,o="YXZ"){super(t,e,r),this.order=o,this.onChange=()=>{},this._target=this;const l=["0","1","2"];return new Proxy(this,{set(u,f){const d=Reflect.set(...arguments);return d&&l.includes(f)&&u.onChange(),d}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(t){this._target[0]=t,this.onChange()}set y(t){this._target[1]=t,this.onChange()}set z(t){this._target[2]=t,this.onChange()}set(t,e=t,r=t){return t.length?this.copy(t):(this._target[0]=t,this._target[1]=e,this._target[2]=r,this.onChange(),this)}copy(t){return this._target[0]=t[0],this._target[1]=t[1],this._target[2]=t[2],this.onChange(),this}reorder(t){return this._target.order=t,this.onChange(),this}fromRotationMatrix(t,e=this.order){return hO(this._target,t,e),this.onChange(),this}fromQuaternion(t,e=this.order,r){return vy.fromQuaternion(t),this._target.fromRotationMatrix(vy,e),r||this.onChange(),this}fromArray(t,e=0){return this._target[0]=t[e],this._target[1]=t[e+1],this._target[2]=t[e+2],this}toArray(t=[],e=0){return t[e]=this[0],t[e+1]=this[1],t[e+2]=this[2],t}}class Om{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new sr,this.worldMatrix=new sr,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new hn,this.quaternion=new YN,this.scale=new hn(1),this.rotation=new dO,this.up=new hn(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(t,e=!0){this.parent&&t!==this.parent&&this.parent.removeChild(this,!1),this.parent=t,e&&t&&t.addChild(this,!1)}addChild(t,e=!0){~this.children.indexOf(t)||this.children.push(t),e&&t.setParent(this,!1)}removeChild(t,e=!0){~this.children.indexOf(t)&&this.children.splice(this.children.indexOf(t),1),e&&t.setParent(null,!1)}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||t)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,t=!0);for(let e=0,r=this.children.length;e<r;e++)this.children[e].updateMatrixWorld(t)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(t){if(!t(this))for(let e=0,r=this.children.length;e<r;e++)this.children[e].traverse(t)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(t,e=!1){e?this.matrix.lookAt(this.position,t,this.up):this.matrix.lookAt(t,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}}const pO=new sr,mO=new hn,gO=new hn;class vO extends Om{constructor(t,{near:e=.1,far:r=100,fov:o=45,aspect:l=1,left:u,right:f,bottom:d,top:p,zoom:g=1}={}){super(),Object.assign(this,{near:e,far:r,fov:o,aspect:l,left:u,right:f,bottom:d,top:p,zoom:g}),this.projectionMatrix=new sr,this.viewMatrix=new sr,this.projectionViewMatrix=new sr,this.worldPosition=new hn,this.type=u||f?"orthographic":"perspective",this.type==="orthographic"?this.orthographic():this.perspective()}perspective({near:t=this.near,far:e=this.far,fov:r=this.fov,aspect:o=this.aspect}={}){return Object.assign(this,{near:t,far:e,fov:r,aspect:o}),this.projectionMatrix.fromPerspective({fov:r*(Math.PI/180),aspect:o,near:t,far:e}),this.type="perspective",this}orthographic({near:t=this.near,far:e=this.far,left:r=this.left||-1,right:o=this.right||1,bottom:l=this.bottom||-1,top:u=this.top||1,zoom:f=this.zoom}={}){return Object.assign(this,{near:t,far:e,left:r,right:o,bottom:l,top:u,zoom:f}),r/=f,o/=f,l/=f,u/=f,this.projectionMatrix.fromOrthogonal({left:r,right:o,bottom:l,top:u,near:t,far:e}),this.type="orthographic",this}updateMatrixWorld(){return super.updateMatrixWorld(),this.viewMatrix.inverse(this.worldMatrix),this.worldMatrix.getTranslation(this.worldPosition),this.projectionViewMatrix.multiply(this.projectionMatrix,this.viewMatrix),this}updateProjectionMatrix(){return this.type==="perspective"?this.perspective():this.orthographic()}lookAt(t){return super.lookAt(t,!0),this}project(t){return t.applyMatrix4(this.viewMatrix),t.applyMatrix4(this.projectionMatrix),this}unproject(t){return t.applyMatrix4(pO.inverse(this.projectionMatrix)),t.applyMatrix4(this.worldMatrix),this}updateFrustum(){this.frustum||(this.frustum=[new hn,new hn,new hn,new hn,new hn,new hn]);const t=this.projectionViewMatrix;this.frustum[0].set(t[3]-t[0],t[7]-t[4],t[11]-t[8]).constant=t[15]-t[12],this.frustum[1].set(t[3]+t[0],t[7]+t[4],t[11]+t[8]).constant=t[15]+t[12],this.frustum[2].set(t[3]+t[1],t[7]+t[5],t[11]+t[9]).constant=t[15]+t[13],this.frustum[3].set(t[3]-t[1],t[7]-t[5],t[11]-t[9]).constant=t[15]-t[13],this.frustum[4].set(t[3]-t[2],t[7]-t[6],t[11]-t[10]).constant=t[15]-t[14],this.frustum[5].set(t[3]+t[2],t[7]+t[6],t[11]+t[10]).constant=t[15]+t[14];for(let e=0;e<6;e++){const r=1/this.frustum[e].distance();this.frustum[e].multiply(r),this.frustum[e].constant*=r}}frustumIntersectsMesh(t,e=t.worldMatrix){if(!t.geometry.attributes.position||((!t.geometry.bounds||t.geometry.bounds.radius===1/0)&&t.geometry.computeBoundingSphere(),!t.geometry.bounds))return!0;const r=mO;r.copy(t.geometry.bounds.center),r.applyMatrix4(e);const o=t.geometry.bounds.radius*e.getMaxScaleOnAxis();return this.frustumIntersectsSphere(r,o)}frustumIntersectsSphere(t,e){const r=gO;for(let o=0;o<6;o++){const l=this.frustum[o];if(r.copy(l).dot(t)+l.constant<-e)return!1}return!0}}function _O(i,t){return i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=t[4],i[4]=t[5],i[5]=t[6],i[6]=t[8],i[7]=t[9],i[8]=t[10],i}function xO(i,t){let e=t[0],r=t[1],o=t[2],l=t[3],u=e+e,f=r+r,d=o+o,p=e*u,g=r*u,v=r*f,_=o*u,y=o*f,M=o*d,b=l*u,S=l*f,x=l*d;return i[0]=1-v-M,i[3]=g-x,i[6]=_+S,i[1]=g+x,i[4]=1-p-M,i[7]=y-b,i[2]=_-S,i[5]=y+b,i[8]=1-p-v,i}function yO(i,t){return i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=t[3],i[4]=t[4],i[5]=t[5],i[6]=t[6],i[7]=t[7],i[8]=t[8],i}function SO(i,t,e,r,o,l,u,f,d,p){return i[0]=t,i[1]=e,i[2]=r,i[3]=o,i[4]=l,i[5]=u,i[6]=f,i[7]=d,i[8]=p,i}function EO(i){return i[0]=1,i[1]=0,i[2]=0,i[3]=0,i[4]=1,i[5]=0,i[6]=0,i[7]=0,i[8]=1,i}function MO(i,t){let e=t[0],r=t[1],o=t[2],l=t[3],u=t[4],f=t[5],d=t[6],p=t[7],g=t[8],v=g*u-f*p,_=-g*l+f*d,y=p*l-u*d,M=e*v+r*_+o*y;return M?(M=1/M,i[0]=v*M,i[1]=(-g*r+o*p)*M,i[2]=(f*r-o*u)*M,i[3]=_*M,i[4]=(g*e-o*d)*M,i[5]=(-f*e+o*l)*M,i[6]=y*M,i[7]=(-p*e+r*d)*M,i[8]=(u*e-r*l)*M,i):null}function _y(i,t,e){let r=t[0],o=t[1],l=t[2],u=t[3],f=t[4],d=t[5],p=t[6],g=t[7],v=t[8],_=e[0],y=e[1],M=e[2],b=e[3],S=e[4],x=e[5],U=e[6],D=e[7],A=e[8];return i[0]=_*r+y*u+M*p,i[1]=_*o+y*f+M*g,i[2]=_*l+y*d+M*v,i[3]=b*r+S*u+x*p,i[4]=b*o+S*f+x*g,i[5]=b*l+S*d+x*v,i[6]=U*r+D*u+A*p,i[7]=U*o+D*f+A*g,i[8]=U*l+D*d+A*v,i}function bO(i,t,e){let r=t[0],o=t[1],l=t[2],u=t[3],f=t[4],d=t[5],p=t[6],g=t[7],v=t[8],_=e[0],y=e[1];return i[0]=r,i[1]=o,i[2]=l,i[3]=u,i[4]=f,i[5]=d,i[6]=_*r+y*u+p,i[7]=_*o+y*f+g,i[8]=_*l+y*d+v,i}function TO(i,t,e){let r=t[0],o=t[1],l=t[2],u=t[3],f=t[4],d=t[5],p=t[6],g=t[7],v=t[8],_=Math.sin(e),y=Math.cos(e);return i[0]=y*r+_*u,i[1]=y*o+_*f,i[2]=y*l+_*d,i[3]=y*u-_*r,i[4]=y*f-_*o,i[5]=y*d-_*l,i[6]=p,i[7]=g,i[8]=v,i}function AO(i,t,e){let r=e[0],o=e[1];return i[0]=r*t[0],i[1]=r*t[1],i[2]=r*t[2],i[3]=o*t[3],i[4]=o*t[4],i[5]=o*t[5],i[6]=t[6],i[7]=t[7],i[8]=t[8],i}function wO(i,t){let e=t[0],r=t[1],o=t[2],l=t[3],u=t[4],f=t[5],d=t[6],p=t[7],g=t[8],v=t[9],_=t[10],y=t[11],M=t[12],b=t[13],S=t[14],x=t[15],U=e*f-r*u,D=e*d-o*u,A=e*p-l*u,N=r*d-o*f,I=r*p-l*f,z=o*p-l*d,X=g*b-v*M,L=g*S-_*M,C=g*x-y*M,H=v*S-_*b,Z=v*x-y*b,lt=_*x-y*S,tt=U*lt-D*Z+A*H+N*C-I*L+z*X;return tt?(tt=1/tt,i[0]=(f*lt-d*Z+p*H)*tt,i[1]=(d*C-u*lt-p*L)*tt,i[2]=(u*Z-f*C+p*X)*tt,i[3]=(o*Z-r*lt-l*H)*tt,i[4]=(e*lt-o*C+l*L)*tt,i[5]=(r*C-e*Z-l*X)*tt,i[6]=(b*z-S*I+x*N)*tt,i[7]=(S*A-M*z-x*D)*tt,i[8]=(M*I-b*A+x*U)*tt,i):null}class RO extends Array{constructor(t=1,e=0,r=0,o=0,l=1,u=0,f=0,d=0,p=1){return super(t,e,r,o,l,u,f,d,p),this}set(t,e,r,o,l,u,f,d,p){return t.length?this.copy(t):(SO(this,t,e,r,o,l,u,f,d,p),this)}translate(t,e=this){return bO(this,e,t),this}rotate(t,e=this){return TO(this,e,t),this}scale(t,e=this){return AO(this,e,t),this}multiply(t,e){return e?_y(this,t,e):_y(this,this,t),this}identity(){return EO(this),this}copy(t){return yO(this,t),this}fromMatrix4(t){return _O(this,t),this}fromQuaternion(t){return xO(this,t),this}fromBasis(t,e,r){return this.set(t[0],t[1],t[2],e[0],e[1],e[2],r[0],r[1],r[2]),this}inverse(t=this){return MO(this,t),this}getNormalMatrix(t){return wO(this,t),this}}let CO=0;class MS extends Om{constructor(t,{geometry:e,program:r,mode:o=t.TRIANGLES,frustumCulled:l=!0,renderOrder:u=0}={}){super(),t.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=t,this.id=CO++,this.geometry=e,this.program=r,this.mode=o,this.frustumCulled=l,this.renderOrder=u,this.modelViewMatrix=new sr,this.normalMatrix=new RO,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(t){return this.beforeRenderCallbacks.push(t),this}onAfterRender(t){return this.afterRenderCallbacks.push(t),this}draw({camera:t}={}){t&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=t.projectionMatrix,this.program.uniforms.cameraPosition.value=t.worldPosition,this.program.uniforms.viewMatrix.value=t.viewMatrix,this.modelViewMatrix.multiply(t.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(r=>r&&r({mesh:this,camera:t}));let e=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:e}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(r=>r&&r({mesh:this,camera:t}))}}const xy=new Uint8Array(4);function yy(i){return(i&i-1)===0}let DO=1;class bS{constructor(t,{image:e,target:r=t.TEXTURE_2D,type:o=t.UNSIGNED_BYTE,format:l=t.RGBA,internalFormat:u=l,wrapS:f=t.CLAMP_TO_EDGE,wrapT:d=t.CLAMP_TO_EDGE,wrapR:p=t.CLAMP_TO_EDGE,generateMipmaps:g=r===(t.TEXTURE_2D||t.TEXTURE_CUBE_MAP),minFilter:v=g?t.NEAREST_MIPMAP_LINEAR:t.LINEAR,magFilter:_=t.LINEAR,premultiplyAlpha:y=!1,unpackAlignment:M=4,flipY:b=r==(t.TEXTURE_2D||t.TEXTURE_3D),anisotropy:S=0,level:x=0,width:U,height:D=U,length:A=1}={}){this.gl=t,this.id=DO++,this.image=e,this.target=r,this.type=o,this.format=l,this.internalFormat=u,this.minFilter=v,this.magFilter=_,this.wrapS=f,this.wrapT=d,this.wrapR=p,this.generateMipmaps=g,this.premultiplyAlpha=y,this.unpackAlignment=M,this.flipY=b,this.anisotropy=Math.min(S,this.gl.renderer.parameters.maxAnisotropy),this.level=x,this.width=U,this.height=D,this.length=A,this.texture=this.gl.createTexture(),this.store={image:null},this.glState=this.gl.renderer.state,this.state={},this.state.minFilter=this.gl.NEAREST_MIPMAP_LINEAR,this.state.magFilter=this.gl.LINEAR,this.state.wrapS=this.gl.REPEAT,this.state.wrapT=this.gl.REPEAT,this.state.anisotropy=0}bind(){this.glState.textureUnits[this.glState.activeTextureUnit]!==this.id&&(this.gl.bindTexture(this.target,this.texture),this.glState.textureUnits[this.glState.activeTextureUnit]=this.id)}update(t=0){const e=!(this.image===this.store.image&&!this.needsUpdate);if((e||this.glState.textureUnits[t]!==this.id)&&(this.gl.renderer.activeTexture(t),this.bind()),!!e){if(this.needsUpdate=!1,this.flipY!==this.glState.flipY&&(this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,this.flipY),this.glState.flipY=this.flipY),this.premultiplyAlpha!==this.glState.premultiplyAlpha&&(this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),this.glState.premultiplyAlpha=this.premultiplyAlpha),this.unpackAlignment!==this.glState.unpackAlignment&&(this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,this.unpackAlignment),this.glState.unpackAlignment=this.unpackAlignment),this.minFilter!==this.state.minFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MIN_FILTER,this.minFilter),this.state.minFilter=this.minFilter),this.magFilter!==this.state.magFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MAG_FILTER,this.magFilter),this.state.magFilter=this.magFilter),this.wrapS!==this.state.wrapS&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_S,this.wrapS),this.state.wrapS=this.wrapS),this.wrapT!==this.state.wrapT&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_T,this.wrapT),this.state.wrapT=this.wrapT),this.wrapR!==this.state.wrapR&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_R,this.wrapR),this.state.wrapR=this.wrapR),this.anisotropy&&this.anisotropy!==this.state.anisotropy&&(this.gl.texParameterf(this.target,this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropy),this.state.anisotropy=this.anisotropy),this.image){if(this.image.width&&(this.width=this.image.width,this.height=this.image.height),this.target===this.gl.TEXTURE_CUBE_MAP)for(let r=0;r<6;r++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+r,this.level,this.internalFormat,this.format,this.type,this.image[r]);else if(ArrayBuffer.isView(this.image))this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,this.image):(this.target===this.gl.TEXTURE_2D_ARRAY||this.target===this.gl.TEXTURE_3D)&&this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);else if(this.image.isCompressedTexture)for(let r=0;r<this.image.length;r++)this.gl.compressedTexImage2D(this.target,r,this.internalFormat,this.image[r].width,this.image[r].height,0,this.image[r].data);else this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.format,this.type,this.image):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);this.generateMipmaps&&(!this.gl.renderer.isWebgl2&&(!yy(this.image.width)||!yy(this.image.height))?(this.generateMipmaps=!1,this.wrapS=this.wrapT=this.gl.CLAMP_TO_EDGE,this.minFilter=this.gl.LINEAR):this.gl.generateMipmap(this.target)),this.onUpdate&&this.onUpdate()}else if(this.target===this.gl.TEXTURE_CUBE_MAP)for(let r=0;r<6;r++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,xy);else this.width?this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,null):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,null):this.gl.texImage2D(this.target,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,xy);this.store.image=this.image}}}class Zu extends MN{constructor(t,{width:e=1,height:r=1,widthSegments:o=1,heightSegments:l=1,attributes:u={}}={}){const f=o,d=l,p=(f+1)*(d+1),g=f*d*6,v=new Float32Array(p*3),_=new Float32Array(p*3),y=new Float32Array(p*2),M=g>65536?new Uint32Array(g):new Uint16Array(g);Zu.buildPlane(v,_,y,M,e,r,0,f,d),Object.assign(u,{position:{size:3,data:v},normal:{size:3,data:_},uv:{size:2,data:y},index:{data:M}}),super(t,u)}static buildPlane(t,e,r,o,l,u,f,d,p,g=0,v=1,_=2,y=1,M=-1,b=0,S=0){const x=b,U=l/d,D=u/p;for(let A=0;A<=p;A++){let N=A*D-u/2;for(let I=0;I<=d;I++,b++){let z=I*U-l/2;if(t[b*3+g]=z*y,t[b*3+v]=N*M,t[b*3+_]=f/2,e[b*3+g]=0,e[b*3+v]=0,e[b*3+_]=f>=0?1:-1,r[b*2]=I/d,r[b*2+1]=1-A/p,A===p||I===d)continue;let X=x+I+A*(d+1),L=x+I+(A+1)*(d+1),C=x+I+(A+1)*(d+1)+1,H=x+I+A*(d+1)+1;o[S*6]=X,o[S*6+1]=L,o[S*6+2]=H,o[S*6+3]=L,o[S*6+4]=C,o[S*6+5]=H,S++}}}}const am="/portfolio/assets/13-CkCDvSft.jpg",TS="/portfolio/assets/2-BbM4WAcJ.jpg",AS="/portfolio/assets/3-CVxpcj4E.jpg",wS="/portfolio/assets/4-jB6_1YoH.jpg",RS="/portfolio/assets/5-BqdjnDvN.jpg",CS="/portfolio/assets/6-JO2_VRo5.jpg",DS="/portfolio/assets/7-DQw8fovT.jpg",US="/portfolio/assets/8-Bk_Is6MF.jpg",LS="/portfolio/assets/9-D58xgRJe.jpg",NS="/portfolio/assets/10-BhimEjrf.jpg",OS="/portfolio/assets/11-B77r06zh.jpg",PS="/portfolio/assets/12-_kzrXxge.jpg";function UO(i,t){let e;return function(...r){clearTimeout(e),e=setTimeout(()=>i.apply(this,r),t)}}function LO(i,t,e){return i+(t-i)*e}function NO(i){const t=Object.getPrototypeOf(i);Object.getOwnPropertyNames(t).forEach(e=>{e!=="constructor"&&typeof i[e]=="function"&&(i[e]=i[e].bind(i))})}function OO(i,t,e="bold 30px monospace",r="black"){const o=document.createElement("canvas"),l=o.getContext("2d");l.font=e;const u=l.measureText(t),f=Math.ceil(u.width),d=Math.ceil(parseInt(e,10)*1.2);o.width=f+20,o.height=d+20,l.font=e,l.fillStyle=r,l.textBaseline="middle",l.textAlign="center",l.clearRect(0,0,o.width,o.height),l.fillText(t,o.width/2,o.height/2);const p=new bS(i,{generateMipmaps:!1});return p.image=o,{texture:p,width:o.width,height:o.height}}class PO{constructor({gl:t,plane:e,renderer:r,text:o,textColor:l="#545050",font:u="30px sans-serif"}){NO(this),this.gl=t,this.plane=e,this.renderer=r,this.text=o,this.textColor=l,this.font=u,this.createMesh()}createMesh(){const{texture:t,width:e,height:r}=OO(this.gl,this.text,this.font,this.textColor),o=new Zu(this.gl),l=new xS(this.gl,{vertex:`
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragment:`
        precision highp float;
        uniform sampler2D tMap;
        varying vec2 vUv;
        void main() {
          vec4 color = texture2D(tMap, vUv);
          if (color.a < 0.1) discard;
          gl_FragColor = color;
        }
      `,uniforms:{tMap:{value:t}},transparent:!0});this.mesh=new MS(this.gl,{geometry:o,program:l});const u=e/r,f=this.plane.scale.y*.15,d=f*u;this.mesh.scale.set(d,f,1),this.mesh.position.y=-this.plane.scale.y*.5-f*.5-.05,this.mesh.setParent(this.plane)}}class IO{constructor({geometry:t,gl:e,image:r,index:o,length:l,renderer:u,scene:f,screen:d,text:p,viewport:g,bend:v,textColor:_,borderRadius:y=0,font:M}){this.extra=0,this.geometry=t,this.gl=e,this.image=r,this.index=o,this.length=l,this.renderer=u,this.scene=f,this.screen=d,this.text=p,this.viewport=g,this.bend=v,this.textColor=_,this.borderRadius=y,this.font=M,this.createShader(),this.createMesh(),this.createTitle(),this.onResize()}createShader(){const t=new bS(this.gl,{generateMipmaps:!0});this.program=new xS(this.gl,{depthTest:!1,depthWrite:!1,vertex:`
        precision highp float;
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        uniform float uTime;
        uniform float uSpeed;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 p = position;
          p.z = (sin(p.x * 4.0 + uTime) * 1.5 + cos(p.y * 2.0 + uTime) * 1.5) * (0.1 + uSpeed * 0.5);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,fragment:`
        precision highp float;
        uniform vec2 uImageSizes;
        uniform vec2 uPlaneSizes;
        uniform sampler2D tMap;
        uniform float uBorderRadius;
        varying vec2 vUv;
        
        float roundedBoxSDF(vec2 p, vec2 b, float r) {
          vec2 d = abs(p) - b;
          return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
        }
        
        void main() {
          vec2 ratio = vec2(
            min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
            min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
          );
          vec2 uv = vec2(
            vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
            vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
          );
          vec4 color = texture2D(tMap, uv);
          
          float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
          
          // Smooth antialiasing for edges
          float edgeSmooth = 0.002;
          float alpha = 1.0 - smoothstep(-edgeSmooth, edgeSmooth, d);
          
          gl_FragColor = vec4(color.rgb, alpha);
        }
      `,uniforms:{tMap:{value:t},uPlaneSizes:{value:[0,0]},uImageSizes:{value:[0,0]},uSpeed:{value:0},uTime:{value:100*Math.random()},uBorderRadius:{value:this.borderRadius}},transparent:!0});const e=new Image;e.crossOrigin="anonymous",e.src=this.image,e.onload=()=>{t.image=e,this.program.uniforms.uImageSizes.value=[e.naturalWidth,e.naturalHeight]}}createMesh(){this.plane=new MS(this.gl,{geometry:this.geometry,program:this.program}),this.plane.setParent(this.scene)}createTitle(){this.title=new PO({gl:this.gl,plane:this.plane,renderer:this.renderer,text:this.text,textColor:this.textColor,fontFamily:this.font})}update(t,e){this.plane.position.x=this.x-t.current-this.extra;const r=this.plane.position.x,o=this.viewport.width/2;if(this.bend===0)this.plane.position.y=0,this.plane.rotation.z=0;else{const f=Math.abs(this.bend),d=(o*o+f*f)/(2*f),p=Math.min(Math.abs(r),o),g=d-Math.sqrt(d*d-p*p);this.bend>0?(this.plane.position.y=-g,this.plane.rotation.z=-Math.sign(r)*Math.asin(p/d)):(this.plane.position.y=g,this.plane.rotation.z=Math.sign(r)*Math.asin(p/d))}this.speed=t.current-t.last,this.program.uniforms.uTime.value+=.04,this.program.uniforms.uSpeed.value=this.speed;const l=this.plane.scale.x/2,u=this.viewport.width/2;this.isBefore=this.plane.position.x+l<-u,this.isAfter=this.plane.position.x-l>u,e==="right"&&this.isBefore&&(this.extra-=this.widthTotal,this.isBefore=this.isAfter=!1),e==="left"&&this.isAfter&&(this.extra+=this.widthTotal,this.isBefore=this.isAfter=!1)}onResize({screen:t,viewport:e}={}){t&&(this.screen=t),e&&(this.viewport=e,this.plane.program.uniforms.uViewportSizes&&(this.plane.program.uniforms.uViewportSizes.value=[this.viewport.width,this.viewport.height])),this.scale=this.screen.height/1500,this.plane.scale.y=this.viewport.height*(900*this.scale)/this.screen.height,this.plane.scale.x=this.viewport.width*(700*this.scale)/this.screen.width,this.plane.program.uniforms.uPlaneSizes.value=[this.plane.scale.x,this.plane.scale.y],this.padding=2,this.width=this.plane.scale.x+this.padding,this.widthTotal=this.width*this.length,this.x=this.width*this.index}}let FO=class{constructor(t,{items:e,bend:r,textColor:o="#ffffff",borderRadius:l=0,font:u="bold 30px Figtree",scrollSpeed:f=2,scrollEase:d=.05}={}){document.documentElement.classList.remove("no-js"),this.container=t,this.scrollSpeed=f,this.scroll={ease:d,current:0,target:0,last:0},this.onCheckDebounce=UO(this.onCheck,200),this.createRenderer(),this.createCamera(),this.createScene(),this.onResize(),this.createGeometry(),this.createMedias(e,r,o,l,u),this.update(),this.addEventListeners()}createRenderer(){this.renderer=new CN({alpha:!0,antialias:!0,dpr:Math.min(window.devicePixelRatio||1,2)}),this.gl=this.renderer.gl,this.gl.clearColor(0,0,0,0),this.container.appendChild(this.gl.canvas)}createCamera(){this.camera=new vO(this.gl),this.camera.fov=45,this.camera.position.z=20}createScene(){this.scene=new Om}createGeometry(){this.planeGeometry=new Zu(this.gl,{heightSegments:50,widthSegments:100})}createMedias(t,e=1,r,o,l){const u=[{image:am,text:"Bridge"},{image:TS,text:"Desk Setup"},{image:AS,text:"Waterfall"},{image:wS,text:"Strawberries"},{image:RS,text:"Deep Diving"},{image:CS,text:"Deep Diving"},{image:DS,text:"Deep Diving"},{image:US,text:"Deep Diving"},{image:LS,text:"Deep Diving"},{image:NS,text:"Deep Diving"},{image:OS,text:"Deep Diving"},{image:PS,text:"Deep Diving"}],f=t&&t.length?t:u;this.mediasImages=f.concat(f),this.medias=this.mediasImages.map((d,p)=>new IO({geometry:this.planeGeometry,gl:this.gl,image:d.image,index:p,length:this.mediasImages.length,renderer:this.renderer,scene:this.scene,screen:this.screen,text:d.text,viewport:this.viewport,bend:e,textColor:r,borderRadius:o,font:l}))}onTouchDown(t){this.isDown=!0,this.scroll.position=this.scroll.current,this.start=t.touches?t.touches[0].clientX:t.clientX}onTouchMove(t){if(!this.isDown)return;const e=t.touches?t.touches[0].clientX:t.clientX,r=(this.start-e)*(this.scrollSpeed*.025);this.scroll.target=this.scroll.position+r}onTouchUp(){this.isDown=!1,this.onCheck()}onWheel(t){const e=t.deltaY||t.wheelDelta||t.detail;this.scroll.target+=(e>0?this.scrollSpeed:-this.scrollSpeed)*.2,this.onCheckDebounce()}onCheck(){if(!this.medias||!this.medias[0])return;const t=this.medias[0].width,e=Math.round(Math.abs(this.scroll.target)/t),r=t*e;this.scroll.target=this.scroll.target<0?-r:r}onResize(){this.screen={width:this.container.clientWidth,height:this.container.clientHeight},this.renderer.setSize(this.screen.width,this.screen.height),this.camera.perspective({aspect:this.screen.width/this.screen.height});const t=this.camera.fov*Math.PI/180,e=2*Math.tan(t/2)*this.camera.position.z,r=e*this.camera.aspect;this.viewport={width:r,height:e},this.medias&&this.medias.forEach(o=>o.onResize({screen:this.screen,viewport:this.viewport}))}update(){this.scroll.current=LO(this.scroll.current,this.scroll.target,this.scroll.ease);const t=this.scroll.current>this.scroll.last?"right":"left";this.medias&&this.medias.forEach(e=>e.update(this.scroll,t)),this.renderer.render({scene:this.scene,camera:this.camera}),this.scroll.last=this.scroll.current,this.raf=window.requestAnimationFrame(this.update.bind(this))}addEventListeners(){this.boundOnResize=this.onResize.bind(this),this.boundOnWheel=this.onWheel.bind(this),this.boundOnTouchDown=this.onTouchDown.bind(this),this.boundOnTouchMove=this.onTouchMove.bind(this),this.boundOnTouchUp=this.onTouchUp.bind(this),window.addEventListener("resize",this.boundOnResize),window.addEventListener("mousewheel",this.boundOnWheel),window.addEventListener("wheel",this.boundOnWheel),window.addEventListener("mousedown",this.boundOnTouchDown),window.addEventListener("mousemove",this.boundOnTouchMove),window.addEventListener("mouseup",this.boundOnTouchUp),window.addEventListener("touchstart",this.boundOnTouchDown),window.addEventListener("touchmove",this.boundOnTouchMove),window.addEventListener("touchend",this.boundOnTouchUp)}destroy(){window.cancelAnimationFrame(this.raf),window.removeEventListener("resize",this.boundOnResize),window.removeEventListener("mousewheel",this.boundOnWheel),window.removeEventListener("wheel",this.boundOnWheel),window.removeEventListener("mousedown",this.boundOnTouchDown),window.removeEventListener("mousemove",this.boundOnTouchMove),window.removeEventListener("mouseup",this.boundOnTouchUp),window.removeEventListener("touchstart",this.boundOnTouchDown),window.removeEventListener("touchmove",this.boundOnTouchMove),window.removeEventListener("touchend",this.boundOnTouchUp),this.renderer&&this.renderer.gl&&this.renderer.gl.canvas.parentNode&&this.renderer.gl.canvas.parentNode.removeChild(this.renderer.gl.canvas)}};function zO({items:i,bend:t=3,textColor:e="#ffffff",borderRadius:r=.05,font:o="bold 30px Figtree",scrollSpeed:l=2,scrollEase:u=.05}){const f=pt.useRef(null);return pt.useEffect(()=>{const d=new FO(f.current,{items:i,bend:t,textColor:e,borderRadius:r,font:o,scrollSpeed:l,scrollEase:u});return()=>{d.destroy()}},[i,t,e,r,o,l,u]),st.jsx("div",{className:"circular-gallery",ref:f})}Sm.register();const BO=()=>{const[i,t]=pt.useState(!0);return pt.useEffect(()=>{const e=setTimeout(()=>t(!1),3e3);return()=>clearTimeout(e)},[]),st.jsxs("div",{className:"experience-page",children:[i&&st.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"rgba(255, 255, 255, 0.6)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3},children:st.jsx("l-trefoil",{size:"60",stroke:"6","stroke-length":"0.20","bg-opacity":"0.1",speed:"1.4",color:"black"})}),st.jsx("div",{style:{height:"600px",position:"relative"},children:st.jsx(zO,{bend:3,textColor:"#ffffff",borderRadius:.05,scrollEase:.02})}),st.jsxs("div",{className:"experience-sections",children:[st.jsxs("section",{className:"company-block",children:[st.jsx("h2",{className:"company-title",children:"Pentachrome Technologies Pvt. Ltd"}),st.jsxs("ul",{className:"company-points",children:[st.jsxs("li",{children:["Led frontend development of healthcare platform ",st.jsx("b",{children:"Soft Clinic"})," for doctors, patients & admins."]}),st.jsxs("li",{children:["Delivered responsive, scalable UI with ",st.jsx("b",{children:"ReactJS"})," & ",st.jsx("b",{children:"CSS3"})," ensuring load-time optimization."]}),st.jsx("li",{children:"Integrated Google, Facebook & Outlook authentication."}),st.jsx("li",{children:"Performed performance audits with Google Lighthouse for fast, SEO‑compliant UX."}),st.jsx("li",{children:"Collaborated with backend engineers to connect REST APIs securely."})]})]}),st.jsxs("section",{className:"company-block",children:[st.jsx("h2",{className:"company-title",children:"Ecostance"}),st.jsxs("ul",{className:"company-points",children:[st.jsx("li",{children:"Partnered with product/design teams to create intuitive UI increasing workflow efficiency."}),st.jsxs("li",{children:["Applied ",st.jsx("b",{children:"mobile‑first design"})," for adaptive layouts."]}),st.jsx("li",{children:"Built modular React components to simplify logic & reuse code effectively."}),st.jsx("li",{children:"Conducted peer code reviews & sprint retrospectives."}),st.jsx("li",{children:"Integrated APIs with optimized data handling for real‑time efficiency."})]})]}),st.jsxs("section",{className:"company-block",children:[st.jsx("h2",{className:"company-title",children:"Winupskill"}),st.jsxs("ul",{className:"company-points",children:[st.jsxs("li",{children:["Developed a scalable ",st.jsx("b",{children:"admin panel"})," for managing content, users & system configs."]}),st.jsx("li",{children:"Implemented structured workflows for educational course material."}),st.jsxs("li",{children:["Built ",st.jsx("b",{children:"role‑based access control"})," with modern UI."]}),st.jsx("li",{children:"Created reusable React components reducing redundancy across modules."}),st.jsx("li",{children:"Architected official Winupskill website for responsive browsing with modern styling."})]})]}),st.jsxs("section",{className:"company-block",children:[st.jsx("h2",{className:"company-title",children:"Delostyle Studios (Contractual)"}),st.jsxs("ul",{className:"company-points",children:[st.jsxs("li",{children:["Delivered UI for healthcare project ",st.jsx("b",{children:"AKunah"}),"."]}),st.jsxs("li",{children:["Built technical showcase & brand portfolio site ",st.jsx("b",{children:"Effiel"}),"."]}),st.jsxs("li",{children:["Designed & developed ",st.jsx("b",{children:"Delostyle official company website"}),"."]}),st.jsx("li",{children:"Ensured pixel‑perfect design & responsive web builds."})]})]})]}),st.jsxs("div",{className:"experience-buttons",children:[st.jsx(Hi,{to:"/",className:"resume-btn back-btn",children:"Back"}),st.jsx(Hi,{to:"/allimages",className:"resume-btn access-btn",children:"Access All Photos"})]})]})},HO="/portfolio/assets/14-mzXnd39X.jpg",GO="/portfolio/assets/15-pYx6sLGE.jpg",VO="/portfolio/assets/16-8KFWD07Z.jpg",kO="/portfolio/assets/17-CrnUqP3B.jpg",XO="/portfolio/assets/18-DVtSKlIE.jpg",WO="/portfolio/assets/19-DZOuiXPq.jpg",jO="/portfolio/assets/20-C0KrwWXq.jpg",qO="/portfolio/assets/21-BhRv_B7n.jpg",YO="/portfolio/assets/22-Dy2MqQuS.jpg",ZO="/portfolio/assets/23-CZ83PJ-0.jpg",KO="/portfolio/assets/24-jhyBChQ1.jpg",$O="/portfolio/assets/25-daWLiKh-.jpg",QO="/portfolio/assets/26-Dc0EunXf.jpg",JO="/portfolio/assets/27-CgP0CctC.jpg",tP="/portfolio/assets/28-pgAFc9Y8.jpg",eP="/portfolio/assets/29-Db5uEAmB.jpg",nP="/portfolio/assets/30-CXxVe5W7.jpg",iP=[am,TS,AS,wS,RS,CS,DS,US,LS,NS,OS,PS,am,HO,GO,VO,kO,XO,WO,jO,qO,YO,ZO,KO,$O,QO,JO,tP,eP,nP],aP=()=>{const[i,t]=pt.useState(null);return st.jsxs("div",{className:"allimages-page",children:[st.jsx("h1",{className:"allimages-title",children:"✨ My Works Gallery ✨"}),st.jsx("div",{className:"images-grid",children:iP.map((e,r)=>st.jsx("div",{className:"image-card",onClick:()=>t(e),children:st.jsx("img",{src:e,alt:`work-${r}`,loading:"lazy"})},r))}),i&&st.jsxs("div",{className:"lightbox",onClick:()=>t(null),children:[st.jsx("span",{className:"close-btn",children:"✖"}),st.jsx("img",{src:i,alt:"enlarged-work",className:"lightbox-img"})]}),st.jsx(Hi,{to:"/experience",className:"resume-btn back-fixed-btn",children:"Back"})]})};function rP(){return st.jsxs(Hb,{children:[st.jsx(fl,{path:"/",element:st.jsx(L3,{})}),st.jsx(fl,{path:"/contact",element:st.jsx(rN,{})}),st.jsx(fl,{path:"/experience",element:st.jsx(BO,{})}),st.jsx(fl,{path:"/allimages",element:st.jsx(aP,{})})," "]})}ZM.createRoot(document.getElementById("root")).render(st.jsx(sm.StrictMode,{children:st.jsx(cT,{children:st.jsx(rP,{})})}));
