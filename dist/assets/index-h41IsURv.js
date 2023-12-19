(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function fo(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Z={},vn=[],Ge=()=>{},Pd=()=>!1,Fi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),po=t=>t.startsWith("onUpdate:"),he=Object.assign,_o=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},kd=Object.prototype.hasOwnProperty,H=(t,e)=>kd.call(t,e),O=Array.isArray,yn=t=>Ui(t)==="[object Map]",bc=t=>Ui(t)==="[object Set]",L=t=>typeof t=="function",ae=t=>typeof t=="string",Un=t=>typeof t=="symbol",ne=t=>t!==null&&typeof t=="object",Tc=t=>(ne(t)||L(t))&&L(t.then)&&L(t.catch),Sc=Object.prototype.toString,Ui=t=>Sc.call(t),Od=t=>Ui(t).slice(8,-1),Rc=t=>Ui(t)==="[object Object]",go=t=>ae(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Zs=fo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},xd=/-(\w)/g,Nn=Wi(t=>t.replace(xd,(e,n)=>n?n.toUpperCase():"")),Dd=/\B([A-Z])/g,Wn=Wi(t=>t.replace(Dd,"-$1").toLowerCase()),Nc=Wi(t=>t.charAt(0).toUpperCase()+t.slice(1)),cr=Wi(t=>t?`on${Nc(t)}`:""),Yt=(t,e)=>!Object.is(t,e),ei=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},li=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Or=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Pa;const xr=()=>Pa||(Pa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function mo(t){if(O(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=ae(s)?Ud(s):mo(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(ae(t)||ne(t))return t}const Md=/;(?![^(]*\))/g,Ld=/:([^]+)/,Fd=/\/\*[^]*?\*\//g;function Ud(t){const e={};return t.replace(Fd,"").split(Md).forEach(n=>{if(n){const s=n.split(Ld);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Bi(t){let e="";if(ae(t))e=t;else if(O(t))for(let n=0;n<t.length;n++){const s=Bi(t[n]);s&&(e+=s+" ")}else if(ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Wd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bd=fo(Wd);function Ac(t){return!!t||t===""}const Ze=t=>ae(t)?t:t==null?"":O(t)||ne(t)&&(t.toString===Sc||!L(t.toString))?JSON.stringify(t,Pc,2):String(t),Pc=(t,e)=>e&&e.__v_isRef?Pc(t,e.value):yn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[ur(s,r)+" =>"]=i,n),{})}:bc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ur(n))}:Un(e)?ur(e):ne(e)&&!O(e)&&!Rc(e)?String(e):e,ur=(t,e="")=>{var n;return Un(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let Ae;class kc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ae,!e&&Ae&&(this.index=(Ae.scopes||(Ae.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ae;try{return Ae=this,e()}finally{Ae=n}}}on(){Ae=this}off(){Ae=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Hd(t){return new kc(t)}function Vd(t,e=Ae){e&&e.active&&e.effects.push(t)}function $d(){return Ae}const vo=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Oc=t=>(t.w&Nt)>0,xc=t=>(t.n&Nt)>0,jd=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Nt},qd=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Oc(i)&&!xc(i)?i.delete(t):e[n++]=i,i.w&=~Nt,i.n&=~Nt}e.length=n}},Dr=new WeakMap;let ns=0,Nt=1;const Mr=30;let ke;const qt=Symbol(""),Lr=Symbol("");class yo{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Vd(this,s)}run(){if(!this.active)return this.fn();let e=ke,n=wt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ke,ke=this,wt=!0,Nt=1<<++ns,ns<=Mr?jd(this):ka(this),this.fn()}finally{ns<=Mr&&qd(this),Nt=1<<--ns,ke=this.parent,wt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ke===this?this.deferStop=!0:this.active&&(ka(this),this.onStop&&this.onStop(),this.active=!1)}}function ka(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let wt=!0;const Dc=[];function Bn(){Dc.push(wt),wt=!1}function Hn(){const t=Dc.pop();wt=t===void 0?!0:t}function we(t,e,n){if(wt&&ke){let s=Dr.get(t);s||Dr.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=vo()),Mc(i)}}function Mc(t,e){let n=!1;ns<=Mr?xc(t)||(t.n|=Nt,n=!Oc(t)):n=!t.has(ke),n&&(t.add(ke),ke.deps.push(t))}function ot(t,e,n,s,i,r){const o=Dr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&O(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||!Un(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":O(t)?go(n)&&a.push(o.get("length")):(a.push(o.get(qt)),yn(t)&&a.push(o.get(Lr)));break;case"delete":O(t)||(a.push(o.get(qt)),yn(t)&&a.push(o.get(Lr)));break;case"set":yn(t)&&a.push(o.get(qt));break}if(a.length===1)a[0]&&Fr(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Fr(vo(l))}}function Fr(t,e){const n=O(t)?t:[...t];for(const s of n)s.computed&&Oa(s);for(const s of n)s.computed||Oa(s)}function Oa(t,e){(t!==ke||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Kd=fo("__proto__,__v_isRef,__isVue"),Lc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Un)),xa=zd();function zd(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=$(this);for(let r=0,o=this.length;r<o;r++)we(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map($)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Bn();const s=$(this)[e].apply(this,n);return Hn(),s}}),t}function Gd(t){const e=$(this);return we(e,"has",t),e.hasOwnProperty(t)}class Fc{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,s){const i=this._isReadonly,r=this._shallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?lf:Hc:r?Bc:Wc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=O(e);if(!i){if(o&&H(xa,n))return Reflect.get(xa,n,s);if(n==="hasOwnProperty")return Gd}const a=Reflect.get(e,n,s);return(Un(n)?Lc.has(n):Kd(n))||(i||we(e,"get",n),r)?a:Ie(a)?o&&go(n)?a:a.value:ne(a)?i?Vc(a):wo(a):a}}class Uc extends Fc{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._shallow){const l=An(r);if(!ci(s)&&!An(s)&&(r=$(r),s=$(s)),!O(e)&&Ie(r)&&!Ie(s))return l?!1:(r.value=s,!0)}const o=O(e)&&go(n)?Number(n)<e.length:H(e,n),a=Reflect.set(e,n,s,i);return e===$(i)&&(o?Yt(s,r)&&ot(e,"set",n,s):ot(e,"add",n,s)),a}deleteProperty(e,n){const s=H(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&ot(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Un(n)||!Lc.has(n))&&we(e,"has",n),s}ownKeys(e){return we(e,"iterate",O(e)?"length":qt),Reflect.ownKeys(e)}}class Yd extends Fc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Qd=new Uc,Jd=new Yd,Xd=new Uc(!0),Eo=t=>t,Hi=t=>Reflect.getPrototypeOf(t);function js(t,e,n=!1,s=!1){t=t.__v_raw;const i=$(t),r=$(e);n||(Yt(e,r)&&we(i,"get",e),we(i,"get",r));const{has:o}=Hi(i),a=s?Eo:n?To:fs;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function qs(t,e=!1){const n=this.__v_raw,s=$(n),i=$(t);return e||(Yt(t,i)&&we(s,"has",t),we(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Ks(t,e=!1){return t=t.__v_raw,!e&&we($(t),"iterate",qt),Reflect.get(t,"size",t)}function Da(t){t=$(t);const e=$(this);return Hi(e).has.call(e,t)||(e.add(t),ot(e,"add",t,t)),this}function Ma(t,e){e=$(e);const n=$(this),{has:s,get:i}=Hi(n);let r=s.call(n,t);r||(t=$(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Yt(e,o)&&ot(n,"set",t,e):ot(n,"add",t,e),this}function La(t){const e=$(this),{has:n,get:s}=Hi(e);let i=n.call(e,t);i||(t=$(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&ot(e,"delete",t,void 0),r}function Fa(){const t=$(this),e=t.size!==0,n=t.clear();return e&&ot(t,"clear",void 0,void 0),n}function zs(t,e){return function(s,i){const r=this,o=r.__v_raw,a=$(o),l=e?Eo:t?To:fs;return!t&&we(a,"iterate",qt),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function Gs(t,e,n){return function(...s){const i=this.__v_raw,r=$(i),o=yn(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Eo:e?To:fs;return!e&&we(r,"iterate",l?Lr:qt),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function _t(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Zd(){const t={get(r){return js(this,r)},get size(){return Ks(this)},has:qs,add:Da,set:Ma,delete:La,clear:Fa,forEach:zs(!1,!1)},e={get(r){return js(this,r,!1,!0)},get size(){return Ks(this)},has:qs,add:Da,set:Ma,delete:La,clear:Fa,forEach:zs(!1,!0)},n={get(r){return js(this,r,!0)},get size(){return Ks(this,!0)},has(r){return qs.call(this,r,!0)},add:_t("add"),set:_t("set"),delete:_t("delete"),clear:_t("clear"),forEach:zs(!0,!1)},s={get(r){return js(this,r,!0,!0)},get size(){return Ks(this,!0)},has(r){return qs.call(this,r,!0)},add:_t("add"),set:_t("set"),delete:_t("delete"),clear:_t("clear"),forEach:zs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Gs(r,!1,!1),n[r]=Gs(r,!0,!1),e[r]=Gs(r,!1,!0),s[r]=Gs(r,!0,!0)}),[t,n,e,s]}const[ef,tf,nf,sf]=Zd();function Co(t,e){const n=e?t?sf:nf:t?tf:ef;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(H(n,i)&&i in s?n:s,i,r)}const rf={get:Co(!1,!1)},of={get:Co(!1,!0)},af={get:Co(!0,!1)},Wc=new WeakMap,Bc=new WeakMap,Hc=new WeakMap,lf=new WeakMap;function cf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function uf(t){return t.__v_skip||!Object.isExtensible(t)?0:cf(Od(t))}function wo(t){return An(t)?t:Io(t,!1,Qd,rf,Wc)}function hf(t){return Io(t,!1,Xd,of,Bc)}function Vc(t){return Io(t,!0,Jd,af,Hc)}function Io(t,e,n,s,i){if(!ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=uf(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function En(t){return An(t)?En(t.__v_raw):!!(t&&t.__v_isReactive)}function An(t){return!!(t&&t.__v_isReadonly)}function ci(t){return!!(t&&t.__v_isShallow)}function $c(t){return En(t)||An(t)}function $(t){const e=t&&t.__v_raw;return e?$(e):t}function bo(t){return li(t,"__v_skip",!0),t}const fs=t=>ne(t)?wo(t):t,To=t=>ne(t)?Vc(t):t;function jc(t){wt&&ke&&(t=$(t),Mc(t.dep||(t.dep=vo())))}function qc(t,e){t=$(t);const n=t.dep;n&&Fr(n)}function Ie(t){return!!(t&&t.__v_isRef===!0)}function dn(t){return df(t,!1)}function df(t,e){return Ie(t)?t:new ff(t,e)}class ff{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:$(e),this._value=n?e:fs(e)}get value(){return jc(this),this._value}set value(e){const n=this.__v_isShallow||ci(e)||An(e);e=n?e:$(e),Yt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:fs(e),qc(this))}}function et(t){return Ie(t)?t.value:t}const pf={get:(t,e,n)=>et(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ie(i)&&!Ie(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Kc(t){return En(t)?t:new Proxy(t,pf)}class _f{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new yo(e,()=>{this._dirty||(this._dirty=!0,qc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=$(this);return jc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function gf(t,e,n=!1){let s,i;const r=L(t);return r?(s=t,i=Ge):(s=t.get,i=t.set),new _f(s,i,r||!i,n)}function It(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Vi(r,e,n)}return i}function Fe(t,e,n,s){if(L(t)){const r=It(t,e,n,s);return r&&Tc(r)&&r.catch(o=>{Vi(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Fe(t[r],e,n,s));return i}function Vi(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){It(l,null,10,[t,o,a]);return}}mf(t,n,i,s)}function mf(t,e,n,s=!0){console.error(t)}let ps=!1,Ur=!1;const pe=[];let ze=0;const Cn=[];let tt=null,Ht=0;const zc=Promise.resolve();let So=null;function vf(t){const e=So||zc;return t?e.then(this?t.bind(this):t):e}function yf(t){let e=ze+1,n=pe.length;for(;e<n;){const s=e+n>>>1,i=pe[s],r=_s(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function Ro(t){(!pe.length||!pe.includes(t,ps&&t.allowRecurse?ze+1:ze))&&(t.id==null?pe.push(t):pe.splice(yf(t.id),0,t),Gc())}function Gc(){!ps&&!Ur&&(Ur=!0,So=zc.then(Qc))}function Ef(t){const e=pe.indexOf(t);e>ze&&pe.splice(e,1)}function Cf(t){O(t)?Cn.push(...t):(!tt||!tt.includes(t,t.allowRecurse?Ht+1:Ht))&&Cn.push(t),Gc()}function Ua(t,e,n=ps?ze+1:0){for(;n<pe.length;n++){const s=pe[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;pe.splice(n,1),n--,s()}}}function Yc(t){if(Cn.length){const e=[...new Set(Cn)];if(Cn.length=0,tt){tt.push(...e);return}for(tt=e,tt.sort((n,s)=>_s(n)-_s(s)),Ht=0;Ht<tt.length;Ht++)tt[Ht]();tt=null,Ht=0}}const _s=t=>t.id==null?1/0:t.id,wf=(t,e)=>{const n=_s(t)-_s(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Qc(t){Ur=!1,ps=!0,pe.sort(wf);try{for(ze=0;ze<pe.length;ze++){const e=pe[ze];e&&e.active!==!1&&It(e,null,14)}}finally{ze=0,pe.length=0,Yc(),ps=!1,So=null,(pe.length||Cn.length)&&Qc()}}function If(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Z;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||Z;f&&(i=n.map(g=>ae(g)?g.trim():g)),h&&(i=n.map(Or))}let a,l=s[a=cr(e)]||s[a=cr(Nn(e))];!l&&r&&(l=s[a=cr(Wn(e))]),l&&Fe(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Fe(c,t,6,i)}}function Jc(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!L(t)){const l=c=>{const u=Jc(c,e,!0);u&&(a=!0,he(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(ne(t)&&s.set(t,null),null):(O(r)?r.forEach(l=>o[l]=null):he(o,r),ne(t)&&s.set(t,o),o)}function $i(t,e){return!t||!Fi(e)?!1:(e=e.slice(2).replace(/Once$/,""),H(t,e[0].toLowerCase()+e.slice(1))||H(t,Wn(e))||H(t,e))}let xe=null,Xc=null;function ui(t){const e=xe;return xe=t,Xc=t&&t.type.__scopeId||null,e}function bf(t,e=xe,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Qa(-1);const r=ui(e);let o;try{o=t(...i)}finally{ui(r),s._d&&Qa(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function hr(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:g,ctx:I,inheritAttrs:S}=t;let M,j;const J=ui(t);try{if(n.shapeFlag&4){const D=i||s,Te=D;M=Ke(u.call(Te,D,h,r,g,f,I)),j=l}else{const D=e;M=Ke(D.length>1?D(r,{attrs:l,slots:a,emit:c}):D(r,null)),j=e.props?l:Tf(l)}}catch(D){as.length=0,Vi(D,t,1),M=at(Qt)}let ee=M;if(j&&S!==!1){const D=Object.keys(j),{shapeFlag:Te}=ee;D.length&&Te&7&&(o&&D.some(po)&&(j=Sf(j,o)),ee=Pn(ee,j))}return n.dirs&&(ee=Pn(ee),ee.dirs=ee.dirs?ee.dirs.concat(n.dirs):n.dirs),n.transition&&(ee.transition=n.transition),M=ee,ui(J),M}const Tf=t=>{let e;for(const n in t)(n==="class"||n==="style"||Fi(n))&&((e||(e={}))[n]=t[n]);return e},Sf=(t,e)=>{const n={};for(const s in t)(!po(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Rf(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Wa(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!$i(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Wa(s,o,c):!0:!!o;return!1}function Wa(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!$i(n,r))return!0}return!1}function Nf({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Af=Symbol.for("v-ndc"),Pf=t=>t.__isSuspense;function kf(t,e){e&&e.pendingBranch?O(t)?e.effects.push(...t):e.effects.push(t):Cf(t)}const Ys={};function dr(t,e,n){return Zc(t,e,n)}function Zc(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Z){var a;const l=$d()===((a=_e)==null?void 0:a.scope)?_e:null;let c,u=!1,h=!1;if(Ie(t)?(c=()=>t.value,u=ci(t)):En(t)?(c=()=>t,s=!0):O(t)?(h=!0,u=t.some(D=>En(D)||ci(D)),c=()=>t.map(D=>{if(Ie(D))return D.value;if(En(D))return $t(D);if(L(D))return It(D,l,2)})):L(t)?e?c=()=>It(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return f&&f(),Fe(t,l,3,[g])}:c=Ge,e&&s){const D=c;c=()=>$t(D())}let f,g=D=>{f=J.onStop=()=>{It(D,l,4),f=J.onStop=void 0}},I;if(ms)if(g=Ge,e?n&&Fe(e,l,3,[c(),h?[]:void 0,g]):c(),i==="sync"){const D=Tp();I=D.__watcherHandles||(D.__watcherHandles=[])}else return Ge;let S=h?new Array(t.length).fill(Ys):Ys;const M=()=>{if(J.active)if(e){const D=J.run();(s||u||(h?D.some((Te,He)=>Yt(Te,S[He])):Yt(D,S)))&&(f&&f(),Fe(e,l,3,[D,S===Ys?void 0:h&&S[0]===Ys?[]:S,g]),S=D)}else J.run()};M.allowRecurse=!!e;let j;i==="sync"?j=M:i==="post"?j=()=>ye(M,l&&l.suspense):(M.pre=!0,l&&(M.id=l.uid),j=()=>Ro(M));const J=new yo(c,j);e?n?M():S=J.run():i==="post"?ye(J.run.bind(J),l&&l.suspense):J.run();const ee=()=>{J.stop(),l&&l.scope&&_o(l.scope.effects,J)};return I&&I.push(ee),ee}function Of(t,e,n){const s=this.proxy,i=ae(t)?t.includes(".")?eu(s,t):()=>s[t]:t.bind(s,s);let r;L(e)?r=e:(r=e.handler,n=e);const o=_e;kn(this);const a=Zc(i,r.bind(s),n);return o?kn(o):Kt(),a}function eu(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function $t(t,e){if(!ne(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ie(t))$t(t.value,e);else if(O(t))for(let n=0;n<t.length;n++)$t(t[n],e);else if(bc(t)||yn(t))t.forEach(n=>{$t(n,e)});else if(Rc(t))for(const n in t)$t(t[n],e);return t}function Ba(t,e){const n=xe;if(n===null)return t;const s=zi(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=Z]=e[r];o&&(L(o)&&(o={mounted:o,updated:o}),o.deep&&$t(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Lt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Bn(),Fe(l,n,8,[t.el,a,t,e]),Hn())}}/*! #__NO_SIDE_EFFECTS__ */function tu(t,e){return L(t)?he({name:t.name},e,{setup:t}):t}const ti=t=>!!t.type.__asyncLoader,nu=t=>t.type.__isKeepAlive;function xf(t,e){su(t,"a",e)}function Df(t,e){su(t,"da",e)}function su(t,e,n=_e){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(ji(e,s,n),n){let i=n.parent;for(;i&&i.parent;)nu(i.parent.vnode)&&Mf(s,e,n,i),i=i.parent}}function Mf(t,e,n,s){const i=ji(e,t,s,!0);iu(()=>{_o(s[e],i)},n)}function ji(t,e,n=_e,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Bn(),kn(n);const a=Fe(e,n,t,o);return Kt(),Hn(),a});return s?i.unshift(r):i.push(r),r}}const ht=t=>(e,n=_e)=>(!ms||t==="sp")&&ji(t,(...s)=>e(...s),n),Lf=ht("bm"),Ff=ht("m"),Uf=ht("bu"),Wf=ht("u"),Bf=ht("bum"),iu=ht("um"),Hf=ht("sp"),Vf=ht("rtg"),$f=ht("rtc");function jf(t,e=_e){ji("ec",t,e)}function Ha(t,e,n,s){let i;const r=n&&n[s];if(O(t)||ae(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(ne(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const Wr=t=>t?gu(t)?zi(t)||t.proxy:Wr(t.parent):null,os=he(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Wr(t.parent),$root:t=>Wr(t.root),$emit:t=>t.emit,$options:t=>No(t),$forceUpdate:t=>t.f||(t.f=()=>Ro(t.update)),$nextTick:t=>t.n||(t.n=vf.bind(t.proxy)),$watch:t=>Of.bind(t)}),fr=(t,e)=>t!==Z&&!t.__isScriptSetup&&H(t,e),qf={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(fr(s,e))return o[e]=1,s[e];if(i!==Z&&H(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&H(c,e))return o[e]=3,r[e];if(n!==Z&&H(n,e))return o[e]=4,n[e];Br&&(o[e]=0)}}const u=os[e];let h,f;if(u)return e==="$attrs"&&we(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Z&&H(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,H(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return fr(i,e)?(i[e]=n,!0):s!==Z&&H(s,e)?(s[e]=n,!0):H(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Z&&H(t,o)||fr(e,o)||(a=r[0])&&H(a,o)||H(s,o)||H(os,o)||H(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:H(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Va(t){return O(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Br=!0;function Kf(t){const e=No(t),n=t.proxy,s=t.ctx;Br=!1,e.beforeCreate&&$a(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:g,updated:I,activated:S,deactivated:M,beforeDestroy:j,beforeUnmount:J,destroyed:ee,unmounted:D,render:Te,renderTracked:He,renderTriggered:pt,errorCaptured:Ve,serverPrefetch:xt,expose:Je,inheritAttrs:Yn,components:Bs,directives:Hs,filters:or}=e;if(c&&zf(c,s,null),o)for(const se in o){const G=o[se];L(G)&&(s[se]=G.bind(n))}if(i){const se=i.call(n,n);ne(se)&&(t.data=wo(se))}if(Br=!0,r)for(const se in r){const G=r[se],Dt=L(G)?G.bind(n,n):L(G.get)?G.get.bind(n,n):Ge,Vs=!L(G)&&L(G.set)?G.set.bind(n):Ge,Mt=fi({get:Dt,set:Vs});Object.defineProperty(s,se,{enumerable:!0,configurable:!0,get:()=>Mt.value,set:$e=>Mt.value=$e})}if(a)for(const se in a)ru(a[se],s,n,se);if(l){const se=L(l)?l.call(n):l;Reflect.ownKeys(se).forEach(G=>{Zf(G,se[G])})}u&&$a(u,t,"c");function me(se,G){O(G)?G.forEach(Dt=>se(Dt.bind(n))):G&&se(G.bind(n))}if(me(Lf,h),me(Ff,f),me(Uf,g),me(Wf,I),me(xf,S),me(Df,M),me(jf,Ve),me($f,He),me(Vf,pt),me(Bf,J),me(iu,D),me(Hf,xt),O(Je))if(Je.length){const se=t.exposed||(t.exposed={});Je.forEach(G=>{Object.defineProperty(se,G,{get:()=>n[G],set:Dt=>n[G]=Dt})})}else t.exposed||(t.exposed={});Te&&t.render===Ge&&(t.render=Te),Yn!=null&&(t.inheritAttrs=Yn),Bs&&(t.components=Bs),Hs&&(t.directives=Hs)}function zf(t,e,n=Ge){O(t)&&(t=Hr(t));for(const s in t){const i=t[s];let r;ne(i)?"default"in i?r=ni(i.from||s,i.default,!0):r=ni(i.from||s):r=ni(i),Ie(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function $a(t,e,n){Fe(O(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function ru(t,e,n,s){const i=s.includes(".")?eu(n,s):()=>n[s];if(ae(t)){const r=e[t];L(r)&&dr(i,r)}else if(L(t))dr(i,t.bind(n));else if(ne(t))if(O(t))t.forEach(r=>ru(r,e,n,s));else{const r=L(t.handler)?t.handler.bind(n):e[t.handler];L(r)&&dr(i,r,t)}}function No(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>hi(l,c,o,!0)),hi(l,e,o)),ne(e)&&r.set(e,l),l}function hi(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&hi(t,r,n,!0),i&&i.forEach(o=>hi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Gf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Gf={data:ja,props:qa,emits:qa,methods:ss,computed:ss,beforeCreate:ve,created:ve,beforeMount:ve,mounted:ve,beforeUpdate:ve,updated:ve,beforeDestroy:ve,beforeUnmount:ve,destroyed:ve,unmounted:ve,activated:ve,deactivated:ve,errorCaptured:ve,serverPrefetch:ve,components:ss,directives:ss,watch:Qf,provide:ja,inject:Yf};function ja(t,e){return e?t?function(){return he(L(t)?t.call(this,this):t,L(e)?e.call(this,this):e)}:e:t}function Yf(t,e){return ss(Hr(t),Hr(e))}function Hr(t){if(O(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ve(t,e){return t?[...new Set([].concat(t,e))]:e}function ss(t,e){return t?he(Object.create(null),t,e):e}function qa(t,e){return t?O(t)&&O(e)?[...new Set([...t,...e])]:he(Object.create(null),Va(t),Va(e??{})):e}function Qf(t,e){if(!t)return e;if(!e)return t;const n=he(Object.create(null),t);for(const s in e)n[s]=ve(t[s],e[s]);return n}function ou(){return{app:null,config:{isNativeTag:Pd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jf=0;function Xf(t,e){return function(s,i=null){L(s)||(s=he({},s)),i!=null&&!ne(i)&&(i=null);const r=ou(),o=new WeakSet;let a=!1;const l=r.app={_uid:Jf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Sp,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&L(c.install)?(o.add(c),c.install(l,...u)):L(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=at(s,i);return f.appContext=r,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,zi(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){di=l;try{return c()}finally{di=null}}};return l}}let di=null;function Zf(t,e){if(_e){let n=_e.provides;const s=_e.parent&&_e.parent.provides;s===n&&(n=_e.provides=Object.create(s)),n[t]=e}}function ni(t,e,n=!1){const s=_e||xe;if(s||di){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:di._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&L(e)?e.call(s&&s.proxy):e}}function ep(t,e,n,s=!1){const i={},r={};li(r,Ki,1),t.propsDefaults=Object.create(null),au(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:hf(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function tp(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=$(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if($i(t.emitsOptions,f))continue;const g=e[f];if(l)if(H(r,f))g!==r[f]&&(r[f]=g,c=!0);else{const I=Nn(f);i[I]=Vr(l,a,I,g,t,!1)}else g!==r[f]&&(r[f]=g,c=!0)}}}else{au(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!H(e,h)&&((u=Wn(h))===h||!H(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Vr(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!H(e,h))&&(delete r[h],c=!0)}c&&ot(t,"set","$attrs")}function au(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Zs(l))continue;const c=e[l];let u;i&&H(i,u=Nn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:$i(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=$(n),c=a||Z;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Vr(i,l,h,c[h],t,!H(c,h))}}return o}function Vr(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=H(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&L(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(kn(i),s=c[n]=l.call(null,e),Kt())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Wn(n))&&(s=!0))}return s}function lu(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!L(t)){const u=h=>{l=!0;const[f,g]=lu(h,e,!0);he(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return ne(t)&&s.set(t,vn),vn;if(O(r))for(let u=0;u<r.length;u++){const h=Nn(r[u]);Ka(h)&&(o[h]=Z)}else if(r)for(const u in r){const h=Nn(u);if(Ka(h)){const f=r[u],g=o[h]=O(f)||L(f)?{type:f}:he({},f);if(g){const I=Ya(Boolean,g.type),S=Ya(String,g.type);g[0]=I>-1,g[1]=S<0||I<S,(I>-1||H(g,"default"))&&a.push(h)}}}const c=[o,a];return ne(t)&&s.set(t,c),c}function Ka(t){return t[0]!=="$"}function za(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Ga(t,e){return za(t)===za(e)}function Ya(t,e){return O(e)?e.findIndex(n=>Ga(n,t)):L(e)&&Ga(e,t)?0:-1}const cu=t=>t[0]==="_"||t==="$stable",Ao=t=>O(t)?t.map(Ke):[Ke(t)],np=(t,e,n)=>{if(e._n)return e;const s=bf((...i)=>Ao(e(...i)),n);return s._c=!1,s},uu=(t,e,n)=>{const s=t._ctx;for(const i in t){if(cu(i))continue;const r=t[i];if(L(r))e[i]=np(i,r,s);else if(r!=null){const o=Ao(r);e[i]=()=>o}}},hu=(t,e)=>{const n=Ao(e);t.slots.default=()=>n},sp=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=$(e),li(e,"_",n)):uu(e,t.slots={})}else t.slots={},e&&hu(t,e);li(t.slots,Ki,1)},ip=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Z;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(he(i,e),!n&&a===1&&delete i._):(r=!e.$stable,uu(e,i)),o=e}else e&&(hu(t,e),o={default:1});if(r)for(const a in i)!cu(a)&&o[a]==null&&delete i[a]};function $r(t,e,n,s,i=!1){if(O(t)){t.forEach((f,g)=>$r(f,e&&(O(e)?e[g]:e),n,s,i));return}if(ti(s)&&!i)return;const r=s.shapeFlag&4?zi(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Z?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(ae(c)?(u[c]=null,H(h,c)&&(h[c]=null)):Ie(c)&&(c.value=null)),L(l))It(l,a,12,[o,u]);else{const f=ae(l),g=Ie(l);if(f||g){const I=()=>{if(t.f){const S=f?H(h,l)?h[l]:u[l]:l.value;i?O(S)&&_o(S,r):O(S)?S.includes(r)||S.push(r):f?(u[l]=[r],H(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,H(h,l)&&(h[l]=o)):g&&(l.value=o,t.k&&(u[t.k]=o))};o?(I.id=-1,ye(I,n)):I()}}}const ye=kf;function rp(t){return op(t)}function op(t,e){const n=xr();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:g=Ge,insertStaticContent:I}=t,S=(d,p,_,m=null,v=null,w=null,T=!1,C=null,b=!!p.dynamicChildren)=>{if(d===p)return;d&&!Jn(d,p)&&(m=$s(d),$e(d,v,w,!0),d=null),p.patchFlag===-2&&(b=!1,p.dynamicChildren=null);const{type:y,ref:N,shapeFlag:R}=p;switch(y){case qi:M(d,p,_,m);break;case Qt:j(d,p,_,m);break;case pr:d==null&&J(p,_,m,T);break;case Pe:Bs(d,p,_,m,v,w,T,C,b);break;default:R&1?Te(d,p,_,m,v,w,T,C,b):R&6?Hs(d,p,_,m,v,w,T,C,b):(R&64||R&128)&&y.process(d,p,_,m,v,w,T,C,b,ln)}N!=null&&v&&$r(N,d&&d.ref,w,p||d,!p)},M=(d,p,_,m)=>{if(d==null)s(p.el=a(p.children),_,m);else{const v=p.el=d.el;p.children!==d.children&&c(v,p.children)}},j=(d,p,_,m)=>{d==null?s(p.el=l(p.children||""),_,m):p.el=d.el},J=(d,p,_,m)=>{[d.el,d.anchor]=I(d.children,p,_,m,d.el,d.anchor)},ee=({el:d,anchor:p},_,m)=>{let v;for(;d&&d!==p;)v=f(d),s(d,_,m),d=v;s(p,_,m)},D=({el:d,anchor:p})=>{let _;for(;d&&d!==p;)_=f(d),i(d),d=_;i(p)},Te=(d,p,_,m,v,w,T,C,b)=>{T=T||p.type==="svg",d==null?He(p,_,m,v,w,T,C,b):xt(d,p,v,w,T,C,b)},He=(d,p,_,m,v,w,T,C)=>{let b,y;const{type:N,props:R,shapeFlag:A,transition:x,dirs:B}=d;if(b=d.el=o(d.type,w,R&&R.is,R),A&8?u(b,d.children):A&16&&Ve(d.children,b,null,m,v,w&&N!=="foreignObject",T,C),B&&Lt(d,null,m,"created"),pt(b,d,d.scopeId,T,m),R){for(const q in R)q!=="value"&&!Zs(q)&&r(b,q,null,R[q],w,d.children,m,v,Xe);"value"in R&&r(b,"value",null,R.value),(y=R.onVnodeBeforeMount)&&qe(y,m,d)}B&&Lt(d,null,m,"beforeMount");const Y=ap(v,x);Y&&x.beforeEnter(b),s(b,p,_),((y=R&&R.onVnodeMounted)||Y||B)&&ye(()=>{y&&qe(y,m,d),Y&&x.enter(b),B&&Lt(d,null,m,"mounted")},v)},pt=(d,p,_,m,v)=>{if(_&&g(d,_),m)for(let w=0;w<m.length;w++)g(d,m[w]);if(v){let w=v.subTree;if(p===w){const T=v.vnode;pt(d,T,T.scopeId,T.slotScopeIds,v.parent)}}},Ve=(d,p,_,m,v,w,T,C,b=0)=>{for(let y=b;y<d.length;y++){const N=d[y]=C?mt(d[y]):Ke(d[y]);S(null,N,p,_,m,v,w,T,C)}},xt=(d,p,_,m,v,w,T)=>{const C=p.el=d.el;let{patchFlag:b,dynamicChildren:y,dirs:N}=p;b|=d.patchFlag&16;const R=d.props||Z,A=p.props||Z;let x;_&&Ft(_,!1),(x=A.onVnodeBeforeUpdate)&&qe(x,_,p,d),N&&Lt(p,d,_,"beforeUpdate"),_&&Ft(_,!0);const B=v&&p.type!=="foreignObject";if(y?Je(d.dynamicChildren,y,C,_,m,B,w):T||G(d,p,C,null,_,m,B,w,!1),b>0){if(b&16)Yn(C,p,R,A,_,m,v);else if(b&2&&R.class!==A.class&&r(C,"class",null,A.class,v),b&4&&r(C,"style",R.style,A.style,v),b&8){const Y=p.dynamicProps;for(let q=0;q<Y.length;q++){const re=Y[q],Ne=R[re],cn=A[re];(cn!==Ne||re==="value")&&r(C,re,Ne,cn,v,d.children,_,m,Xe)}}b&1&&d.children!==p.children&&u(C,p.children)}else!T&&y==null&&Yn(C,p,R,A,_,m,v);((x=A.onVnodeUpdated)||N)&&ye(()=>{x&&qe(x,_,p,d),N&&Lt(p,d,_,"updated")},m)},Je=(d,p,_,m,v,w,T)=>{for(let C=0;C<p.length;C++){const b=d[C],y=p[C],N=b.el&&(b.type===Pe||!Jn(b,y)||b.shapeFlag&70)?h(b.el):_;S(b,y,N,null,m,v,w,T,!0)}},Yn=(d,p,_,m,v,w,T)=>{if(_!==m){if(_!==Z)for(const C in _)!Zs(C)&&!(C in m)&&r(d,C,_[C],null,T,p.children,v,w,Xe);for(const C in m){if(Zs(C))continue;const b=m[C],y=_[C];b!==y&&C!=="value"&&r(d,C,y,b,T,p.children,v,w,Xe)}"value"in m&&r(d,"value",_.value,m.value)}},Bs=(d,p,_,m,v,w,T,C,b)=>{const y=p.el=d?d.el:a(""),N=p.anchor=d?d.anchor:a("");let{patchFlag:R,dynamicChildren:A,slotScopeIds:x}=p;x&&(C=C?C.concat(x):x),d==null?(s(y,_,m),s(N,_,m),Ve(p.children,_,N,v,w,T,C,b)):R>0&&R&64&&A&&d.dynamicChildren?(Je(d.dynamicChildren,A,_,v,w,T,C),(p.key!=null||v&&p===v.subTree)&&du(d,p,!0)):G(d,p,_,N,v,w,T,C,b)},Hs=(d,p,_,m,v,w,T,C,b)=>{p.slotScopeIds=C,d==null?p.shapeFlag&512?v.ctx.activate(p,_,m,T,b):or(p,_,m,v,w,T,b):ba(d,p,b)},or=(d,p,_,m,v,w,T)=>{const C=d.component=vp(d,m,v);if(nu(d)&&(C.ctx.renderer=ln),yp(C),C.asyncDep){if(v&&v.registerDep(C,me),!d.el){const b=C.subTree=at(Qt);j(null,b,p,_)}return}me(C,d,p,_,v,w,T)},ba=(d,p,_)=>{const m=p.component=d.component;if(Rf(d,p,_))if(m.asyncDep&&!m.asyncResolved){se(m,p,_);return}else m.next=p,Ef(m.update),m.update();else p.el=d.el,m.vnode=p},me=(d,p,_,m,v,w,T)=>{const C=()=>{if(d.isMounted){let{next:N,bu:R,u:A,parent:x,vnode:B}=d,Y=N,q;Ft(d,!1),N?(N.el=B.el,se(d,N,T)):N=B,R&&ei(R),(q=N.props&&N.props.onVnodeBeforeUpdate)&&qe(q,x,N,B),Ft(d,!0);const re=hr(d),Ne=d.subTree;d.subTree=re,S(Ne,re,h(Ne.el),$s(Ne),d,v,w),N.el=re.el,Y===null&&Nf(d,re.el),A&&ye(A,v),(q=N.props&&N.props.onVnodeUpdated)&&ye(()=>qe(q,x,N,B),v)}else{let N;const{el:R,props:A}=p,{bm:x,m:B,parent:Y}=d,q=ti(p);if(Ft(d,!1),x&&ei(x),!q&&(N=A&&A.onVnodeBeforeMount)&&qe(N,Y,p),Ft(d,!0),R&&lr){const re=()=>{d.subTree=hr(d),lr(R,d.subTree,d,v,null)};q?p.type.__asyncLoader().then(()=>!d.isUnmounted&&re()):re()}else{const re=d.subTree=hr(d);S(null,re,_,m,d,v,w),p.el=re.el}if(B&&ye(B,v),!q&&(N=A&&A.onVnodeMounted)){const re=p;ye(()=>qe(N,Y,re),v)}(p.shapeFlag&256||Y&&ti(Y.vnode)&&Y.vnode.shapeFlag&256)&&d.a&&ye(d.a,v),d.isMounted=!0,p=_=m=null}},b=d.effect=new yo(C,()=>Ro(y),d.scope),y=d.update=()=>b.run();y.id=d.uid,Ft(d,!0),y()},se=(d,p,_)=>{p.component=d;const m=d.vnode.props;d.vnode=p,d.next=null,tp(d,p.props,m,_),ip(d,p.children,_),Bn(),Ua(d),Hn()},G=(d,p,_,m,v,w,T,C,b=!1)=>{const y=d&&d.children,N=d?d.shapeFlag:0,R=p.children,{patchFlag:A,shapeFlag:x}=p;if(A>0){if(A&128){Vs(y,R,_,m,v,w,T,C,b);return}else if(A&256){Dt(y,R,_,m,v,w,T,C,b);return}}x&8?(N&16&&Xe(y,v,w),R!==y&&u(_,R)):N&16?x&16?Vs(y,R,_,m,v,w,T,C,b):Xe(y,v,w,!0):(N&8&&u(_,""),x&16&&Ve(R,_,m,v,w,T,C,b))},Dt=(d,p,_,m,v,w,T,C,b)=>{d=d||vn,p=p||vn;const y=d.length,N=p.length,R=Math.min(y,N);let A;for(A=0;A<R;A++){const x=p[A]=b?mt(p[A]):Ke(p[A]);S(d[A],x,_,null,v,w,T,C,b)}y>N?Xe(d,v,w,!0,!1,R):Ve(p,_,m,v,w,T,C,b,R)},Vs=(d,p,_,m,v,w,T,C,b)=>{let y=0;const N=p.length;let R=d.length-1,A=N-1;for(;y<=R&&y<=A;){const x=d[y],B=p[y]=b?mt(p[y]):Ke(p[y]);if(Jn(x,B))S(x,B,_,null,v,w,T,C,b);else break;y++}for(;y<=R&&y<=A;){const x=d[R],B=p[A]=b?mt(p[A]):Ke(p[A]);if(Jn(x,B))S(x,B,_,null,v,w,T,C,b);else break;R--,A--}if(y>R){if(y<=A){const x=A+1,B=x<N?p[x].el:m;for(;y<=A;)S(null,p[y]=b?mt(p[y]):Ke(p[y]),_,B,v,w,T,C,b),y++}}else if(y>A)for(;y<=R;)$e(d[y],v,w,!0),y++;else{const x=y,B=y,Y=new Map;for(y=B;y<=A;y++){const Se=p[y]=b?mt(p[y]):Ke(p[y]);Se.key!=null&&Y.set(Se.key,y)}let q,re=0;const Ne=A-B+1;let cn=!1,Ra=0;const Qn=new Array(Ne);for(y=0;y<Ne;y++)Qn[y]=0;for(y=x;y<=R;y++){const Se=d[y];if(re>=Ne){$e(Se,v,w,!0);continue}let je;if(Se.key!=null)je=Y.get(Se.key);else for(q=B;q<=A;q++)if(Qn[q-B]===0&&Jn(Se,p[q])){je=q;break}je===void 0?$e(Se,v,w,!0):(Qn[je-B]=y+1,je>=Ra?Ra=je:cn=!0,S(Se,p[je],_,null,v,w,T,C,b),re++)}const Na=cn?lp(Qn):vn;for(q=Na.length-1,y=Ne-1;y>=0;y--){const Se=B+y,je=p[Se],Aa=Se+1<N?p[Se+1].el:m;Qn[y]===0?S(null,je,_,Aa,v,w,T,C,b):cn&&(q<0||y!==Na[q]?Mt(je,_,Aa,2):q--)}}},Mt=(d,p,_,m,v=null)=>{const{el:w,type:T,transition:C,children:b,shapeFlag:y}=d;if(y&6){Mt(d.component.subTree,p,_,m);return}if(y&128){d.suspense.move(p,_,m);return}if(y&64){T.move(d,p,_,ln);return}if(T===Pe){s(w,p,_);for(let R=0;R<b.length;R++)Mt(b[R],p,_,m);s(d.anchor,p,_);return}if(T===pr){ee(d,p,_);return}if(m!==2&&y&1&&C)if(m===0)C.beforeEnter(w),s(w,p,_),ye(()=>C.enter(w),v);else{const{leave:R,delayLeave:A,afterLeave:x}=C,B=()=>s(w,p,_),Y=()=>{R(w,()=>{B(),x&&x()})};A?A(w,B,Y):Y()}else s(w,p,_)},$e=(d,p,_,m=!1,v=!1)=>{const{type:w,props:T,ref:C,children:b,dynamicChildren:y,shapeFlag:N,patchFlag:R,dirs:A}=d;if(C!=null&&$r(C,null,_,d,!0),N&256){p.ctx.deactivate(d);return}const x=N&1&&A,B=!ti(d);let Y;if(B&&(Y=T&&T.onVnodeBeforeUnmount)&&qe(Y,p,d),N&6)Ad(d.component,_,m);else{if(N&128){d.suspense.unmount(_,m);return}x&&Lt(d,null,p,"beforeUnmount"),N&64?d.type.remove(d,p,_,v,ln,m):y&&(w!==Pe||R>0&&R&64)?Xe(y,p,_,!1,!0):(w===Pe&&R&384||!v&&N&16)&&Xe(b,p,_),m&&Ta(d)}(B&&(Y=T&&T.onVnodeUnmounted)||x)&&ye(()=>{Y&&qe(Y,p,d),x&&Lt(d,null,p,"unmounted")},_)},Ta=d=>{const{type:p,el:_,anchor:m,transition:v}=d;if(p===Pe){Nd(_,m);return}if(p===pr){D(d);return}const w=()=>{i(_),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(d.shapeFlag&1&&v&&!v.persisted){const{leave:T,delayLeave:C}=v,b=()=>T(_,w);C?C(d.el,w,b):b()}else w()},Nd=(d,p)=>{let _;for(;d!==p;)_=f(d),i(d),d=_;i(p)},Ad=(d,p,_)=>{const{bum:m,scope:v,update:w,subTree:T,um:C}=d;m&&ei(m),v.stop(),w&&(w.active=!1,$e(T,d,p,_)),C&&ye(C,p),ye(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Xe=(d,p,_,m=!1,v=!1,w=0)=>{for(let T=w;T<d.length;T++)$e(d[T],p,_,m,v)},$s=d=>d.shapeFlag&6?$s(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),Sa=(d,p,_)=>{d==null?p._vnode&&$e(p._vnode,null,null,!0):S(p._vnode||null,d,p,null,null,null,_),Ua(),Yc(),p._vnode=d},ln={p:S,um:$e,m:Mt,r:Ta,mt:or,mc:Ve,pc:G,pbc:Je,n:$s,o:t};let ar,lr;return e&&([ar,lr]=e(ln)),{render:Sa,hydrate:ar,createApp:Xf(Sa,ar)}}function Ft({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ap(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function du(t,e,n=!1){const s=t.children,i=e.children;if(O(s)&&O(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=mt(i[r]),a.el=o.el),n||du(o,a)),a.type===qi&&(a.el=o.el)}}function lp(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const cp=t=>t.__isTeleport,Pe=Symbol.for("v-fgt"),qi=Symbol.for("v-txt"),Qt=Symbol.for("v-cmt"),pr=Symbol.for("v-stc"),as=[];let De=null;function nt(t=!1){as.push(De=t?null:[])}function up(){as.pop(),De=as[as.length-1]||null}let gs=1;function Qa(t){gs+=t}function fu(t){return t.dynamicChildren=gs>0?De||vn:null,up(),gs>0&&De&&De.push(t),t}function Ut(t,e,n,s,i,r){return fu(te(t,e,n,s,i,r,!0))}function pu(t,e,n,s,i){return fu(at(t,e,n,s,i,!0))}function hp(t){return t?t.__v_isVNode===!0:!1}function Jn(t,e){return t.type===e.type&&t.key===e.key}const Ki="__vInternal",_u=({key:t})=>t??null,si=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ae(t)||Ie(t)||L(t)?{i:xe,r:t,k:e,f:!!n}:t:null);function te(t,e=null,n=null,s=0,i=null,r=t===Pe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&_u(e),ref:e&&si(e),scopeId:Xc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:xe};return a?(Po(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=ae(n)?8:16),gs>0&&!o&&De&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&De.push(l),l}const at=dp;function dp(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Af)&&(t=Qt),hp(t)){const a=Pn(t,e,!0);return n&&Po(a,n),gs>0&&!r&&De&&(a.shapeFlag&6?De[De.indexOf(t)]=a:De.push(a)),a.patchFlag|=-2,a}if(Ip(t)&&(t=t.__vccOpts),e){e=fp(e);let{class:a,style:l}=e;a&&!ae(a)&&(e.class=Bi(a)),ne(l)&&($c(l)&&!O(l)&&(l=he({},l)),e.style=mo(l))}const o=ae(t)?1:Pf(t)?128:cp(t)?64:ne(t)?4:L(t)?2:0;return te(t,e,n,s,i,o,r,!0)}function fp(t){return t?$c(t)||Ki in t?he({},t):t:null}function Pn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?_p(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&_u(a),ref:e&&e.ref?n&&i?O(i)?i.concat(si(e)):[i,si(e)]:si(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Pe?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Pn(t.ssContent),ssFallback:t.ssFallback&&Pn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function pn(t=" ",e=0){return at(qi,null,t,e)}function pp(t="",e=!1){return e?(nt(),pu(Qt,null,t)):at(Qt,null,t)}function Ke(t){return t==null||typeof t=="boolean"?at(Qt):O(t)?at(Pe,null,t.slice()):typeof t=="object"?mt(t):at(qi,null,String(t))}function mt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Pn(t)}function Po(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(O(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Po(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Ki in e)?e._ctx=xe:i===3&&xe&&(xe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else L(e)?(e={default:e,_ctx:xe},n=32):(e=String(e),s&64?(n=16,e=[pn(e)]):n=8);t.children=e,t.shapeFlag|=n}function _p(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Bi([e.class,s.class]));else if(i==="style")e.style=mo([e.style,s.style]);else if(Fi(i)){const r=e[i],o=s[i];o&&r!==o&&!(O(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function qe(t,e,n,s=null){Fe(t,e,7,[n,s])}const gp=ou();let mp=0;function vp(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||gp,r={uid:mp++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new kc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lu(s,i),emitsOptions:Jc(s,i),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:s.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=If.bind(null,r),t.ce&&t.ce(r),r}let _e=null,ko,un,Ja="__VUE_INSTANCE_SETTERS__";(un=xr()[Ja])||(un=xr()[Ja]=[]),un.push(t=>_e=t),ko=t=>{un.length>1?un.forEach(e=>e(t)):un[0](t)};const kn=t=>{ko(t),t.scope.on()},Kt=()=>{_e&&_e.scope.off(),ko(null)};function gu(t){return t.vnode.shapeFlag&4}let ms=!1;function yp(t,e=!1){ms=e;const{props:n,children:s}=t.vnode,i=gu(t);ep(t,n,i,e),sp(t,s);const r=i?Ep(t,e):void 0;return ms=!1,r}function Ep(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=bo(new Proxy(t.ctx,qf));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?wp(t):null;kn(t),Bn();const r=It(s,t,0,[t.props,i]);if(Hn(),Kt(),Tc(r)){if(r.then(Kt,Kt),e)return r.then(o=>{Xa(t,o,e)}).catch(o=>{Vi(o,t,0)});t.asyncDep=r}else Xa(t,r,e)}else mu(t,e)}function Xa(t,e,n){L(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ne(e)&&(t.setupState=Kc(e)),mu(t,n)}let Za;function mu(t,e,n){const s=t.type;if(!t.render){if(!e&&Za&&!s.render){const i=s.template||No(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=he(he({isCustomElement:r,delimiters:a},o),l);s.render=Za(i,c)}}t.render=s.render||Ge}{kn(t),Bn();try{Kf(t)}finally{Hn(),Kt()}}}function Cp(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return we(t,"get","$attrs"),e[n]}}))}function wp(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Cp(t)},slots:t.slots,emit:t.emit,expose:e}}function zi(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Kc(bo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in os)return os[n](t)},has(e,n){return n in e||n in os}}))}function Ip(t){return L(t)&&"__vccOpts"in t}const fi=(t,e)=>gf(t,e,ms),bp=Symbol.for("v-scx"),Tp=()=>ni(bp),Sp="3.3.12",Rp="http://www.w3.org/2000/svg",Vt=typeof document<"u"?document:null,el=Vt&&Vt.createElement("template"),Np={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Vt.createElementNS(Rp,t):Vt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Vt.createTextNode(t),createComment:t=>Vt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Vt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{el.innerHTML=s?`<svg>${t}</svg>`:t;const a=el.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ap=Symbol("_vtc");function Pp(t,e,n){const s=t[Ap];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const kp=Symbol("_vod"),Op=Symbol("");function xp(t,e,n){const s=t.style,i=ae(n);if(n&&!i){if(e&&!ae(e))for(const r in e)n[r]==null&&jr(s,r,"");for(const r in n)jr(s,r,n[r])}else{const r=s.display;if(i){if(e!==n){const o=s[Op];o&&(n+=";"+o),s.cssText=n}}else e&&t.removeAttribute("style");kp in t&&(s.display=r)}}const tl=/\s*!important$/;function jr(t,e,n){if(O(n))n.forEach(s=>jr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Dp(t,e);tl.test(n)?t.setProperty(Wn(s),n.replace(tl,""),"important"):t[s]=n}}const nl=["Webkit","Moz","ms"],_r={};function Dp(t,e){const n=_r[e];if(n)return n;let s=Nn(e);if(s!=="filter"&&s in t)return _r[e]=s;s=Nc(s);for(let i=0;i<nl.length;i++){const r=nl[i]+s;if(r in t)return _r[e]=r}return e}const sl="http://www.w3.org/1999/xlink";function Mp(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(sl,e.slice(6,e.length)):t.setAttributeNS(sl,e,n);else{const r=Bd(e);n==null||r&&!Ac(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Lp(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Ac(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function fn(t,e,n,s){t.addEventListener(e,n,s)}function Fp(t,e,n,s){t.removeEventListener(e,n,s)}const il=Symbol("_vei");function Up(t,e,n,s,i=null){const r=t[il]||(t[il]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=Wp(e);if(s){const c=r[e]=Vp(s,i);fn(t,a,c,l)}else o&&(Fp(t,a,o,l),r[e]=void 0)}}const rl=/(?:Once|Passive|Capture)$/;function Wp(t){let e;if(rl.test(t)){e={};let s;for(;s=t.match(rl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Wn(t.slice(2)),e]}let gr=0;const Bp=Promise.resolve(),Hp=()=>gr||(Bp.then(()=>gr=0),gr=Date.now());function Vp(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Fe($p(s,n.value),e,5,[s])};return n.value=t,n.attached=Hp(),n}function $p(t,e){if(O(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const ol=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,jp=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?Pp(t,s,i):e==="style"?xp(t,n,s):Fi(e)?po(e)||Up(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):qp(t,e,s,i))?Lp(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Mp(t,e,s,i))};function qp(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&ol(e)&&L(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return ol(e)&&ae(n)?!1:e in t}const al=t=>{const e=t.props["onUpdate:modelValue"]||!1;return O(e)?n=>ei(e,n):e};function Kp(t){t.target.composing=!0}function ll(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const mr=Symbol("_assign"),cl={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[mr]=al(i);const r=s||i.props&&i.props.type==="number";fn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Or(a)),t[mr](a)}),n&&fn(t,"change",()=>{t.value=t.value.trim()}),e||(fn(t,"compositionstart",Kp),fn(t,"compositionend",ll),fn(t,"change",ll))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t[mr]=al(r),t.composing)return;const o=i||t.type==="number"?Or(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===a)||(t.value=a))}},zp=he({patchProp:jp},Np);let ul;function Gp(){return ul||(ul=rp(zp))}const Yp=(...t)=>{const e=Gp().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Qp(s);if(!i)return;const r=e._component;!L(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Qp(t){return ae(t)?document.querySelector(t):t}var Jp=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const Xp=Symbol();var hl;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(hl||(hl={}));function Zp(){const t=Hd(!0),e=t.run(()=>dn({}));let n=[],s=[];const i=bo({install(r){i._a=r,r.provide(Xp,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!Jp?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}var dl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=function(t,e){if(!t)throw Vn(e)},Vn=function(t){return new Error("Firebase Database ("+vu.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},e_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Oo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(f=64)),s.push(n[u],n[h],n[f],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(yu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):e_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new t_;const f=r<<2|a>>4;if(s.push(f),c!==64){const g=a<<4&240|c>>2;if(s.push(g),h!==64){const I=c<<6&192|h;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class t_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Eu=function(t){const e=yu(t);return Oo.encodeByteArray(e,!0)},pi=function(t){return Eu(t).replace(/\./g,"")},_i=function(t){try{return Oo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(t){return Cu(void 0,t)}function Cu(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!s_(n)||(t[n]=Cu(t[n],e[n]));return t}function s_(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_=()=>i_().__FIREBASE_DEFAULTS__,o_=()=>{if(typeof process>"u"||typeof dl>"u")return;const t=dl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},a_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_i(t[1]);return e&&JSON.parse(e)},xo=()=>{try{return r_()||o_()||a_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},wu=t=>{var e,n;return(n=(e=xo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},l_=t=>{const e=wu(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Iu=()=>{var t;return(t=xo())===null||t===void 0?void 0:t.config},bu=t=>{var e;return(e=xo())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[pi(JSON.stringify(n)),pi(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ge())}function u_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Tu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function h_(){const t=ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Su(){return vu.NODE_ADMIN===!0}function d_(){try{return typeof indexedDB=="object"}catch{return!1}}function f_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_="FirebaseError";class kt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=p_,Object.setPrototypeOf(this,kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ps.prototype.create)}}class Ps{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?__(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new kt(i,a,s)}}function __(t,e){return t.replace(g_,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const g_=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(t){return JSON.parse(t)}function ue(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=vs(_i(r[0])||""),n=vs(_i(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},m_=function(t){const e=Ru(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},v_=function(t){const e=Ru(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function On(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function qr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function gi(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function mi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(fl(r)&&fl(o)){if(!mi(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function fl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function is(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function rs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function E_(t,e){const n=new C_(t,e);return n.subscribe.bind(n)}class C_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");w_(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=vr),i.error===void 0&&(i.error=vr),i.complete===void 0&&(i.complete=vr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function w_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function vr(){}function Nu(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,E(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Gi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(t){return t&&t._delegate?t._delegate:t}class Jt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Do;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(S_(e))try{this.getOrInitializeService({instanceIdentifier:Wt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Wt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wt){return this.instances.has(e)}getOptions(e=Wt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:T_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Wt){return this.component?this.component.multipleInstances?e:Wt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function T_(t){return t===Wt?void 0:t}function S_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new b_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(K||(K={}));const N_={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},A_=K.INFO,P_={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},k_=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=P_[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lo{constructor(e){this.name=e,this._logLevel=A_,this._logHandler=k_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?N_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const O_=(t,e)=>e.some(n=>t instanceof n);let pl,_l;function x_(){return pl||(pl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function D_(){return _l||(_l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Au=new WeakMap,Kr=new WeakMap,Pu=new WeakMap,yr=new WeakMap,Fo=new WeakMap;function M_(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(bt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Au.set(n,t)}).catch(()=>{}),Fo.set(e,t),e}function L_(t){if(Kr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Kr.set(t,e)}let zr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Kr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Pu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function F_(t){zr=t(zr)}function U_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Er(this),e,...n);return Pu.set(s,e.sort?e.sort():[e]),bt(s)}:D_().includes(t)?function(...e){return t.apply(Er(this),e),bt(Au.get(this))}:function(...e){return bt(t.apply(Er(this),e))}}function W_(t){return typeof t=="function"?U_(t):(t instanceof IDBTransaction&&L_(t),O_(t,x_())?new Proxy(t,zr):t)}function bt(t){if(t instanceof IDBRequest)return M_(t);if(yr.has(t))return yr.get(t);const e=W_(t);return e!==t&&(yr.set(t,e),Fo.set(e,t)),e}const Er=t=>Fo.get(t);function B_(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=bt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(bt(o.result),l.oldVersion,l.newVersion,bt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const H_=["get","getKey","getAll","getAllKeys","count"],V_=["put","add","delete","clear"],Cr=new Map;function gl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Cr.get(e))return Cr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=V_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||H_.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Cr.set(e,r),r}F_(t=>({...t,get:(e,n,s)=>gl(e,n)||t.get(e,n,s),has:(e,n)=>!!gl(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(j_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function j_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gr="@firebase/app",ml="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=new Lo("@firebase/app"),q_="@firebase/app-compat",K_="@firebase/analytics-compat",z_="@firebase/analytics",G_="@firebase/app-check-compat",Y_="@firebase/app-check",Q_="@firebase/auth",J_="@firebase/auth-compat",X_="@firebase/database",Z_="@firebase/database-compat",eg="@firebase/functions",tg="@firebase/functions-compat",ng="@firebase/installations",sg="@firebase/installations-compat",ig="@firebase/messaging",rg="@firebase/messaging-compat",og="@firebase/performance",ag="@firebase/performance-compat",lg="@firebase/remote-config",cg="@firebase/remote-config-compat",ug="@firebase/storage",hg="@firebase/storage-compat",dg="@firebase/firestore",fg="@firebase/firestore-compat",pg="firebase",_g="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr="[DEFAULT]",gg={[Gr]:"fire-core",[q_]:"fire-core-compat",[z_]:"fire-analytics",[K_]:"fire-analytics-compat",[Y_]:"fire-app-check",[G_]:"fire-app-check-compat",[Q_]:"fire-auth",[J_]:"fire-auth-compat",[X_]:"fire-rtdb",[Z_]:"fire-rtdb-compat",[eg]:"fire-fn",[tg]:"fire-fn-compat",[ng]:"fire-iid",[sg]:"fire-iid-compat",[ig]:"fire-fcm",[rg]:"fire-fcm-compat",[og]:"fire-perf",[ag]:"fire-perf-compat",[lg]:"fire-rc",[cg]:"fire-rc-compat",[ug]:"fire-gcs",[hg]:"fire-gcs-compat",[dg]:"fire-fst",[fg]:"fire-fst-compat","fire-js":"fire-js",[pg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=new Map,Qr=new Map;function mg(t,e){try{t.container.addComponent(e)}catch(n){Xt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xn(t){const e=t.name;if(Qr.has(e))return Xt.debug(`There were multiple attempts to register component ${e}.`),!1;Qr.set(e,t);for(const n of vi.values())mg(n,t);return!0}function Uo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Tt=new Ps("app","Firebase",vg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=_g;function ku(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Yr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Tt.create("bad-app-name",{appName:String(i)});if(n||(n=Iu()),!n)throw Tt.create("no-options");const r=vi.get(i);if(r){if(mi(n,r.options)&&mi(s,r.config))return r;throw Tt.create("duplicate-app",{appName:i})}const o=new R_(i);for(const l of Qr.values())o.addComponent(l);const a=new yg(n,s,o);return vi.set(i,a),a}function Ou(t=Yr){const e=vi.get(t);if(!e&&t===Yr&&Iu())return ku();if(!e)throw Tt.create("no-app",{appName:t});return e}function St(t,e,n){var s;let i=(s=gg[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xt.warn(a.join(" "));return}xn(new Jt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg="firebase-heartbeat-database",Cg=1,ys="firebase-heartbeat-store";let wr=null;function xu(){return wr||(wr=B_(Eg,Cg,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ys)}}}).catch(t=>{throw Tt.create("idb-open",{originalErrorMessage:t.message})})),wr}async function wg(t){try{return await(await xu()).transaction(ys).objectStore(ys).get(Du(t))}catch(e){if(e instanceof kt)Xt.warn(e.message);else{const n=Tt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xt.warn(n.message)}}}async function vl(t,e){try{const s=(await xu()).transaction(ys,"readwrite");await s.objectStore(ys).put(e,Du(t)),await s.done}catch(n){if(n instanceof kt)Xt.warn(n.message);else{const s=Tt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Xt.warn(s.message)}}}function Du(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=1024,bg=30*24*60*60*1e3;class Tg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Rg(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=yl();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=bg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=yl(),{heartbeatsToSend:s,unsentEntries:i}=Sg(this._heartbeatsCache.heartbeats),r=pi(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function yl(){return new Date().toISOString().substring(0,10)}function Sg(t,e=Ig){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),El(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),El(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Rg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return d_()?f_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await wg(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return vl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return vl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function El(t){return pi(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(t){xn(new Jt("platform-logger",e=>new $_(e),"PRIVATE")),xn(new Jt("heartbeat",e=>new Tg(e),"PRIVATE")),St(Gr,ml,t),St(Gr,ml,"esm2017"),St("fire-js","")}Ng("");var Ag="firebase",Pg="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */St(Ag,Pg,"app");var Cl={};const wl="@firebase/database",Il="1.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mu="";function kg(t){Mu=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ue(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:vs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return dt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Og(e)}}catch{}return new xg},jt=Lu("localStorage"),Jr=Lu("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=new Lo("@firebase/database"),Dg=function(){let t=1;return function(){return t++}}(),Fu=function(t){const e=I_(t),n=new y_;n.update(e);const s=n.digest();return Oo.encodeByteArray(s)},ks=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ks.apply(null,s):typeof s=="object"?e+=ue(s):e+=s,e+=" "}return e};let zt=null,bl=!0;const Mg=function(t,e){E(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(wn.logLevel=K.VERBOSE,zt=wn.log.bind(wn),e&&Jr.set("logging_enabled",!0)):typeof t=="function"?zt=t:(zt=null,Jr.remove("logging_enabled"))},de=function(...t){if(bl===!0&&(bl=!1,zt===null&&Jr.get("logging_enabled")===!0&&Mg(!0)),zt){const e=ks.apply(null,t);zt(e)}},Os=function(t){return function(...e){de(t,...e)}},Xr=function(...t){const e="FIREBASE INTERNAL ERROR: "+ks(...t);wn.error(e)},ct=function(...t){const e=`FIREBASE FATAL ERROR: ${ks(...t)}`;throw wn.error(e),new Error(e)},Re=function(...t){const e="FIREBASE WARNING: "+ks(...t);wn.warn(e)},Lg=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Re("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Uu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Fg=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Dn="[MIN_NAME]",Zt="[MAX_NAME]",qn=function(t,e){if(t===e)return 0;if(t===Dn||e===Zt)return-1;if(e===Dn||t===Zt)return 1;{const n=Tl(t),s=Tl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Ug=function(t,e){return t===e?0:t<e?-1:1},Xn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ue(e))},Wo=function(t){if(typeof t!="object"||t===null)return ue(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ue(e[s]),n+=":",n+=Wo(t[e[s]]);return n+="}",n},Wu=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function be(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Bu=function(t){E(!Uu(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},Wg=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Bg=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Hg(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Vg=new RegExp("^-?(0*)\\d{1,10}$"),$g=-2147483648,jg=2147483647,Tl=function(t){if(Vg.test(t)){const e=Number(t);if(e>=$g&&e<=jg)return e}return null},xs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Re("Exception was thrown by user callback.",n),e},Math.floor(0))}},qg=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ls=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Re(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(de("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Re(e)}}class In{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}In.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo="5",Hu="v",Vu="s",$u="r",ju="f",qu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ku="ls",zu="p",Zr="ac",Gu="websocket",Yu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=jt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&jt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Gg(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Ju(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let s;if(e===Gu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Yu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Gg(t)&&(n.ns=t.namespace);const i=[];return be(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(){this.counters_={}}incrementCounter(e,n=1){dt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return n_(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir={},br={};function Ho(t){const e=t.toString();return Ir[e]||(Ir[e]=new Yg),Ir[e]}function Qg(t,e){const n=t.toString();return br[n]||(br[n]=e()),br[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&xs(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl="start",Xg="close",Zg="pLPCommand",em="pRTLPCB",Xu="id",Zu="pw",eh="ser",tm="cb",nm="seg",sm="ts",im="d",rm="dframe",th=1870,nh=30,om=th-nh,am=25e3,lm=3e4;class _n{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Os(e),this.stats_=Ho(n),this.urlFn=l=>(this.appCheckToken&&(l[Zr]=this.appCheckToken),Ju(n,Yu,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Jg(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(lm)),Fg(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Vo((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Sl)this.id=a,this.password=l;else if(o===Xg)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Sl]="t",s[eh]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[tm]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Hu]=Bo,this.transportSessionId&&(s[Vu]=this.transportSessionId),this.lastSessionId&&(s[Ku]=this.lastSessionId),this.applicationId&&(s[zu]=this.applicationId),this.appCheckToken&&(s[Zr]=this.appCheckToken),typeof location<"u"&&location.hostname&&qu.test(location.hostname)&&(s[$u]=ju);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){_n.forceAllow_=!0}static forceDisallow(){_n.forceDisallow_=!0}static isAvailable(){return _n.forceAllow_?!0:!_n.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Wg()&&!Bg()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Eu(n),i=Wu(s,om);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[rm]="t",s[Xu]=e,s[Zu]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ue(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Vo{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Dg(),window[Zg+this.uniqueCallbackIdentifier]=e,window[em+this.uniqueCallbackIdentifier]=n,this.myIFrame=Vo.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){de("frame writing exception"),a.stack&&de(a.stack),de(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||de("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Xu]=this.myID,e[Zu]=this.myPW,e[eh]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+nh+s.length<=th;){const o=this.pendingSegs.shift();s=s+"&"+nm+i+"="+o.seg+"&"+sm+i+"="+o.ts+"&"+im+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(am)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{de("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm=16384,um=45e3;let yi=null;typeof MozWebSocket<"u"?yi=MozWebSocket:typeof WebSocket<"u"&&(yi=WebSocket);class Oe{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Os(this.connId),this.stats_=Ho(n),this.connURL=Oe.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Hu]=Bo,typeof location<"u"&&location.hostname&&qu.test(location.hostname)&&(o[$u]=ju),n&&(o[Vu]=n),s&&(o[Ku]=s),i&&(o[Zr]=i),r&&(o[zu]=r),Ju(e,Gu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,jt.set("previous_websocket_failure",!0);try{let s;Su(),this.mySock=new yi(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Oe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&yi!==null&&!Oe.forceDisallow_}static previouslyFailed(){return jt.isInMemoryStorage||jt.get("previous_websocket_failure")===!0}markConnectionHealthy(){jt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=vs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Wu(n,cm);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(um))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Oe.responsesRequiredToBeHealthy=2;Oe.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[_n,Oe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Oe&&Oe.isAvailable();let s=n&&!Oe.previouslyFailed();if(e.webSocketOnly&&(n||Re("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Oe];else{const i=this.transports_=[];for(const r of Es.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Es.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Es.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm=6e4,dm=5e3,fm=10*1024,pm=100*1024,Tr="t",Rl="d",_m="s",Nl="r",gm="e",Al="o",Pl="a",kl="n",Ol="p",mm="h";class vm{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Os("c:"+this.id+":"),this.transportManager_=new Es(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ls(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>pm?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>fm?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Tr in e){const n=e[Tr];n===Pl?this.upgradeIfSecondaryHealthy_():n===Nl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Al&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Xn("t",e),s=Xn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ol,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Pl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:kl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Xn("t",e),s=Xn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Xn(Tr,e);if(Rl in e){const s=e[Rl];if(n===mm){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===kl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===_m?this.onConnectionShutdown_(s):n===Nl?this.onReset_(s):n===gm?Xr("Server Error: "+s):n===Al?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Xr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Bo!==s&&Re("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ls(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(hm))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ls(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(dm))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ol,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(jt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){E(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends ih{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Mo()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ei}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl=32,Dl=768;class z{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function V(){return new z("")}function U(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function At(t){return t.pieces_.length-t.pieceNum_}function Q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new z(t.pieces_,e)}function rh(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ym(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function oh(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ah(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new z(e,0)}function oe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof z)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new z(n,0)}function W(t){return t.pieceNum_>=t.pieces_.length}function Ee(t,e){const n=U(t),s=U(e);if(n===null)return e;if(n===s)return Ee(Q(t),Q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function $o(t,e){if(At(t)!==At(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Me(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(At(t)>At(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Em{constructor(e,n){this.errorPrefix_=n,this.parts_=oh(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Gi(this.parts_[s]);lh(this)}}function Cm(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Gi(e),lh(t)}function wm(t){const e=t.parts_.pop();t.byteLength_-=Gi(e),t.parts_.length>0&&(t.byteLength_-=1)}function lh(t){if(t.byteLength_>Dl)throw new Error(t.errorPrefix_+"has a key path longer than "+Dl+" bytes ("+t.byteLength_+").");if(t.parts_.length>xl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+xl+") or object contains a cycle "+Bt(t))}function Bt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo extends ih{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new jo}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=1e3,Im=60*5*1e3,Ml=30*1e3,bm=1.3,Tm=3e4,Sm="server_kill",Ll=3;class lt extends sh{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=lt.nextPersistentConnectionId_++,this.log_=Os("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Zn,this.maxReconnectDelay_=Im,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Su())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");jo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ei.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ue(r)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Do,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;lt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&dt(e,"w")){const s=On(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Re(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||v_(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ml)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=m_(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ue(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Xr("Unrecognized action received from server: "+ue(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Zn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Zn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Tm&&(this.reconnectDelay_=Zn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*bm)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+lt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){E(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?de("getToken() completed but was canceled"):(de("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new vm(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{Re(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(Sm)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Re(h),l())}}}interrupt(e){de("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){de("Resuming connection for reason: "+e),delete this.interruptReasons_[e],qr(this.interruptReasons_)&&(this.reconnectDelay_=Zn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Wo(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new z(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){de("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ll&&(this.reconnectDelay_=Ml,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){de("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ll&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Mu.replace(/\./g,"-")]=1,Mo()?e["framework.cordova"]=1:Tu()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ei.getInstance().currentlyOnline();return qr(this.interruptReasons_)&&e}}lt.nextPersistentConnectionId_=0;lt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new F(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new F(Dn,e),i=new F(Dn,n);return this.compare(s,i)!==0}minPost(){return F.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qs;class ch extends Yi{static get __EMPTY_NODE(){return Qs}static set __EMPTY_NODE(e){Qs=e}compare(e,n){return qn(e.name,n.name)}isDefinedOn(e){throw Vn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return F.MIN}maxPost(){return new F(Zt,Qs)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,Qs)}toString(){return".key"}}const bn=new ch;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ce{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ce.RED,this.left=i??Ce.EMPTY_NODE,this.right=r??Ce.EMPTY_NODE}copy(e,n,s,i,r){return new ce(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ce.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ce.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ce.RED=!0;ce.BLACK=!1;class Rm{copy(e,n,s,i,r){return this}insert(e,n,s){return new ce(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ce{constructor(e,n=Ce.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ce(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ce.BLACK,null,null))}remove(e){return new Ce(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ce.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Js(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Js(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Js(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Js(this.root_,null,this.comparator_,!0,e)}}Ce.EMPTY_NODE=new Rm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(t,e){return qn(t.name,e.name)}function qo(t,e){return qn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eo;function Am(t){eo=t}const uh=function(t){return typeof t=="number"?"number:"+Bu(t):"string:"+t},hh=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&dt(e,".sv"),"Priority must be a string or number.")}else E(t===eo||t.isEmpty(),"priority of unexpected type.");E(t===eo||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fl;class le{constructor(e,n=le.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),hh(this.priorityNode_)}static set __childrenNodeConstructor(e){Fl=e}static get __childrenNodeConstructor(){return Fl}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new le(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:le.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return W(e)?this:U(e)===".priority"?this.priorityNode_:le.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:le.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=U(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(E(s!==".priority"||At(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,le.__childrenNodeConstructor.EMPTY_NODE.updateChild(Q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+uh(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Bu(this.value_):e+=this.value_,this.lazyHash_=Fu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===le.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof le.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=le.VALUE_TYPE_ORDER.indexOf(n),r=le.VALUE_TYPE_ORDER.indexOf(s);return E(i>=0,"Unknown leaf type: "+n),E(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}le.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dh,fh;function Pm(t){dh=t}function km(t){fh=t}class Om extends Yi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?qn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(Zt,new le("[PRIORITY-POST]",fh))}makePost(e,n){const s=dh(e);return new F(n,new le("[PRIORITY-POST]",s))}toString(){return".priority"}}const ie=new Om;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm=Math.log(2);class Dm{constructor(e){const n=r=>parseInt(Math.log(r)/xm,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ci=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new ce(f,h.node,ce.BLACK,null,null);{const g=parseInt(u/2,10)+l,I=i(l,g),S=i(g+1,c);return h=t[g],f=n?n(h):h,new ce(f,h.node,ce.BLACK,I,S)}},r=function(l){let c=null,u=null,h=t.length;const f=function(I,S){const M=h-I,j=h;h-=I;const J=i(M+1,j),ee=t[M],D=n?n(ee):ee;g(new ce(D,ee.node,S,null,J))},g=function(I){c?(c.left=I,c=I):(u=I,c=I)};for(let I=0;I<l.count;++I){const S=l.nextBitIsOne(),M=Math.pow(2,l.count-(I+1));S?f(M,ce.BLACK):(f(M,ce.BLACK),f(M,ce.RED))}return u},o=new Dm(t.length),a=r(o);return new Ce(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sr;const hn={};class st{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return E(hn&&ie,"ChildrenNode.ts has not been loaded"),Sr=Sr||new st({".priority":hn},{".priority":ie}),Sr}get(e){const n=On(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ce?n:null}hasIndex(e){return dt(this.indexSet_,e.toString())}addIndex(e,n){E(e!==bn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(F.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Ci(s,e.getCompare()):a=hn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new st(u,c)}addToIndexes(e,n){const s=gi(this.indexes_,(i,r)=>{const o=On(this.indexSet_,r);if(E(o,"Missing index implementation for "+r),i===hn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(F.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ci(a,o.getCompare())}else return hn;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new F(e.name,a))),l.insert(e,e.node)}});return new st(s,this.indexSet_)}removeFromIndexes(e,n){const s=gi(this.indexes_,i=>{if(i===hn)return i;{const r=n.get(e.name);return r?i.remove(new F(e.name,r)):i}});return new st(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let es;class P{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&hh(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return es||(es=new P(new Ce(qo),null,st.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||es}updatePriority(e){return this.children_.isEmpty()?this:new P(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?es:n}}getChild(e){const n=U(e);return n===null?this:this.getImmediateChild(n).getChild(Q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new F(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?es:this.priorityNode_;return new P(i,o,r)}}updateChild(e,n){const s=U(e);if(s===null)return n;{E(U(e)!==".priority"||At(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Q(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ie,(o,a)=>{n[o]=a.val(e),s++,r&&P.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+uh(this.getPriority().val())+":"),this.forEachChild(ie,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Fu(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new F(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new F(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new F(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,F.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ds?-1:0}withIndex(e){if(e===bn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new P(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===bn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ie),i=n.getIterator(ie);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===bn?null:this.indexMap_.get(e.toString())}}P.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Mm extends P{constructor(){super(new Ce(qo),P.EMPTY_NODE,st.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return P.EMPTY_NODE}isEmpty(){return!1}}const Ds=new Mm;Object.defineProperties(F,{MIN:{value:new F(Dn,P.EMPTY_NODE)},MAX:{value:new F(Zt,Ds)}});ch.__EMPTY_NODE=P.EMPTY_NODE;le.__childrenNodeConstructor=P;Am(Ds);km(Ds);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm=!0;function fe(t,e=null){if(t===null)return P.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new le(n,fe(e))}if(!(t instanceof Array)&&Lm){const n=[];let s=!1;if(be(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=fe(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new F(o,l)))}}),n.length===0)return P.EMPTY_NODE;const r=Ci(n,Nm,o=>o.name,qo);if(s){const o=Ci(n,ie.getCompare());return new P(r,fe(e),new st({".priority":o},{".priority":ie}))}else return new P(r,fe(e),st.Default)}else{let n=P.EMPTY_NODE;return be(t,(s,i)=>{if(dt(t,s)&&s.substring(0,1)!=="."){const r=fe(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(fe(e))}}Pm(fe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm extends Yi{constructor(e){super(),this.indexPath_=e,E(!W(e)&&U(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?qn(e.name,n.name):r}makePost(e,n){const s=fe(e),i=P.EMPTY_NODE.updateChild(this.indexPath_,s);return new F(n,i)}maxPost(){const e=P.EMPTY_NODE.updateChild(this.indexPath_,Ds);return new F(Zt,e)}toString(){return oh(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um extends Yi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?qn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,n){const s=fe(e);return new F(n,s)}toString(){return".value"}}const Wm=new Um;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ph(t){return{type:"value",snapshotNode:t}}function Mn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Cs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ws(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Bm(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Cs(n,a)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Mn(n,s)):o.trackChildChange(ws(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ie,(i,r)=>{n.hasChild(i)||s.trackChildChange(Cs(i,r))}),n.isLeafNode()||n.forEachChild(ie,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(ws(i,r,o))}else s.trackChildChange(Mn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?P.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){this.indexedFilter_=new Ko(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Is.getStartPost_(e),this.endPost_=Is.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new F(n,s))||(s=P.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=P.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(P.EMPTY_NODE);const r=this;return n.forEachChild(ie,(o,a)=>{r.matches(new F(o,a))||(i=i.updateImmediateChild(o,P.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Is(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new F(n,s))||(s=P.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=P.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=P.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(P.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,P.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,g)=>h(g,f)}else o=this.index_.getCompare();const a=e;E(a.numChildren()===this.limit_,"");const l=new F(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,l);if(u&&!s.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(ws(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Cs(n,h));const S=a.updateImmediateChild(n,P.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Mn(f.name,f.node)),S.updateImmediateChild(f.name,f.node)):S}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Cs(c.name,c.node)),r.trackChildChange(Mn(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,P.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ie}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Dn}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Zt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ie}copy(){const e=new zo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Vm(t){return t.loadsAllData()?new Ko(t.getIndex()):t.hasLimit()?new Hm(t):new Is(t)}function Ul(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ie?n="$priority":t.index_===Wm?n="$value":t.index_===bn?n="$key":(E(t.index_ instanceof Fm,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ue(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=ue(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+ue(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=ue(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+ue(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Wl(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ie&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends sh{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Os("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=wi.getListenId_(e,s),a={};this.listens_[o]=a;const l=Ul(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),On(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=wi.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Ul(e._queryParams),s=e._path.toString(),i=new Do;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+$n(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=vs(a.responseText)}catch{Re("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Re("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(){this.rootNode_=P.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(){return{value:null,children:new Map}}function _h(t,e,n){if(W(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=U(e);t.children.has(s)||t.children.set(s,Ii());const i=t.children.get(s);e=Q(e),_h(i,e,n)}}function to(t,e,n){t.value!==null?n(e,t.value):jm(t,(s,i)=>{const r=new z(e.toString()+"/"+s);to(i,r,n)})}function jm(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&be(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl=10*1e3,Km=30*1e3,zm=5*60*1e3;class Gm{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new qm(e);const s=Bl+(Km-Bl)*Math.random();ls(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;be(e,(i,r)=>{r>0&&dt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),ls(this.reportStats_.bind(this),Math.floor(Math.random()*2*zm))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Le||(Le={}));function gh(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Go(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Yo(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Le.ACK_USER_WRITE,this.source=gh()}operationForChild(e){if(W(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new z(e));return new bi(V(),n,this.revert)}}else return E(U(this.path)===e,"operationForChild called for unrelated child."),new bi(Q(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,n){this.source=e,this.path=n,this.type=Le.LISTEN_COMPLETE}operationForChild(e){return W(this.path)?new bs(this.source,V()):new bs(this.source,Q(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Le.OVERWRITE}operationForChild(e){return W(this.path)?new en(this.source,V(),this.snap.getImmediateChild(e)):new en(this.source,Q(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Le.MERGE}operationForChild(e){if(W(this.path)){const n=this.children.subtree(new z(e));return n.isEmpty()?null:n.value?new en(this.source,V(),n.value):new Ts(this.source,V(),n)}else return E(U(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ts(this.source,Q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(W(e))return this.isFullyInitialized()&&!this.filtered_;const n=U(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Qm(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Bm(o.childName,o.snapshotNode))}),ts(t,i,"child_removed",e,s,n),ts(t,i,"child_added",e,s,n),ts(t,i,"child_moved",r,s,n),ts(t,i,"child_changed",e,s,n),ts(t,i,"value",e,s,n),i}function ts(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>Xm(t,a,l)),o.forEach(a=>{const l=Jm(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Jm(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Xm(t,e,n){if(e.childName==null||n.childName==null)throw Vn("Should only compare child_ events.");const s=new F(e.childName,e.snapshotNode),i=new F(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(t,e){return{eventCache:t,serverCache:e}}function cs(t,e,n,s){return Qi(new tn(e,n,s),t.serverCache)}function mh(t,e,n,s){return Qi(t.eventCache,new tn(e,n,s))}function no(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function nn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rr;const Zm=()=>(Rr||(Rr=new Ce(Ug)),Rr);class X{constructor(e,n=Zm()){this.value=e,this.children=n}static fromObject(e){let n=new X(null);return be(e,(s,i)=>{n=n.set(new z(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:V(),value:this.value};if(W(e))return null;{const s=U(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Q(e),n);return r!=null?{path:oe(new z(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(W(e))return this;{const n=U(e),s=this.children.get(n);return s!==null?s.subtree(Q(e)):new X(null)}}set(e,n){if(W(e))return new X(n,this.children);{const s=U(e),r=(this.children.get(s)||new X(null)).set(Q(e),n),o=this.children.insert(s,r);return new X(this.value,o)}}remove(e){if(W(e))return this.children.isEmpty()?new X(null):new X(null,this.children);{const n=U(e),s=this.children.get(n);if(s){const i=s.remove(Q(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new X(null):new X(this.value,r)}else return this}}get(e){if(W(e))return this.value;{const n=U(e),s=this.children.get(n);return s?s.get(Q(e)):null}}setTree(e,n){if(W(e))return n;{const s=U(e),r=(this.children.get(s)||new X(null)).setTree(Q(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new X(this.value,o)}}fold(e){return this.fold_(V(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(oe(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,V(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(W(e))return null;{const r=U(e),o=this.children.get(r);return o?o.findOnPath_(Q(e),oe(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,V(),n)}foreachOnPath_(e,n,s){if(W(e))return this;{this.value&&s(n,this.value);const i=U(e),r=this.children.get(i);return r?r.foreachOnPath_(Q(e),oe(n,i),s):new X(null)}}foreach(e){this.foreach_(V(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(oe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.writeTree_=e}static empty(){return new Ue(new X(null))}}function us(t,e,n){if(W(e))return new Ue(new X(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ee(i,e);return r=r.updateChild(o,n),new Ue(t.writeTree_.set(i,r))}else{const i=new X(n),r=t.writeTree_.setTree(e,i);return new Ue(r)}}}function Hl(t,e,n){let s=t;return be(n,(i,r)=>{s=us(s,oe(e,i),r)}),s}function Vl(t,e){if(W(e))return Ue.empty();{const n=t.writeTree_.setTree(e,new X(null));return new Ue(n)}}function so(t,e){return rn(t,e)!=null}function rn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ee(n.path,e)):null}function $l(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ie,(s,i)=>{e.push(new F(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new F(s,i.value))}),e}function Rt(t,e){if(W(e))return t;{const n=rn(t,e);return n!=null?new Ue(new X(n)):new Ue(t.writeTree_.subtree(e))}}function io(t){return t.writeTree_.isEmpty()}function Ln(t,e){return vh(V(),t.writeTree_,e)}function vh(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(E(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=vh(oe(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(oe(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(t,e){return wh(e,t)}function ev(t,e,n,s,i){E(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=us(t.visibleWrites,e,n)),t.lastWriteId=s}function tv(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function nv(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&sv(a,s.path)?i=!1:Me(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return iv(t),!0;if(s.snap)t.visibleWrites=Vl(t.visibleWrites,s.path);else{const a=s.children;be(a,l=>{t.visibleWrites=Vl(t.visibleWrites,oe(s.path,l))})}return!0}else return!1}function sv(t,e){if(t.snap)return Me(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Me(oe(t.path,n),e))return!0;return!1}function iv(t){t.visibleWrites=yh(t.allWrites,rv,V()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function rv(t){return t.visible}function yh(t,e,n){let s=Ue.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Me(n,o)?(a=Ee(n,o),s=us(s,a,r.snap)):Me(o,n)&&(a=Ee(o,n),s=us(s,V(),r.snap.getChild(a)));else if(r.children){if(Me(n,o))a=Ee(n,o),s=Hl(s,a,r.children);else if(Me(o,n))if(a=Ee(o,n),W(a))s=Hl(s,V(),r.children);else{const l=On(r.children,U(a));if(l){const c=l.getChild(Q(a));s=us(s,V(),c)}}}else throw Vn("WriteRecord should have .snap or .children")}}return s}function Eh(t,e,n,s,i){if(!s&&!i){const r=rn(t.visibleWrites,e);if(r!=null)return r;{const o=Rt(t.visibleWrites,e);if(io(o))return n;if(n==null&&!so(o,V()))return null;{const a=n||P.EMPTY_NODE;return Ln(o,a)}}}else{const r=Rt(t.visibleWrites,e);if(!i&&io(r))return n;if(!i&&n==null&&!so(r,V()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Me(c.path,e)||Me(e,c.path))},a=yh(t.allWrites,o,e),l=n||P.EMPTY_NODE;return Ln(a,l)}}}function ov(t,e,n){let s=P.EMPTY_NODE;const i=rn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ie,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Rt(t.visibleWrites,e);return n.forEachChild(ie,(o,a)=>{const l=Ln(Rt(r,new z(o)),a);s=s.updateImmediateChild(o,l)}),$l(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Rt(t.visibleWrites,e);return $l(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function av(t,e,n,s,i){E(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=oe(e,n);if(so(t.visibleWrites,r))return null;{const o=Rt(t.visibleWrites,r);return io(o)?i.getChild(n):Ln(o,i.getChild(n))}}function lv(t,e,n,s){const i=oe(e,n),r=rn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Rt(t.visibleWrites,i);return Ln(o,s.getNode().getImmediateChild(n))}else return null}function cv(t,e){return rn(t.visibleWrites,e)}function uv(t,e,n,s,i,r,o){let a;const l=Rt(t.visibleWrites,e),c=rn(l,V());if(c!=null)a=c;else if(n!=null)a=Ln(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let g=f.getNext();for(;g&&u.length<i;)h(g,s)!==0&&u.push(g),g=f.getNext();return u}else return[]}function hv(){return{visibleWrites:Ue.empty(),allWrites:[],lastWriteId:-1}}function Ti(t,e,n,s){return Eh(t.writeTree,t.treePath,e,n,s)}function Jo(t,e){return ov(t.writeTree,t.treePath,e)}function jl(t,e,n,s){return av(t.writeTree,t.treePath,e,n,s)}function Si(t,e){return cv(t.writeTree,oe(t.treePath,e))}function dv(t,e,n,s,i,r){return uv(t.writeTree,t.treePath,e,n,s,i,r)}function Xo(t,e,n){return lv(t.writeTree,t.treePath,e,n)}function Ch(t,e){return wh(oe(t.treePath,e),t.writeTree)}function wh(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,ws(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Cs(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Mn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,ws(s,e.snapshotNode,i.oldSnap));else throw Vn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Ih=new pv;class Zo{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new tn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Xo(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:nn(this.viewCache_),r=dv(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _v(t){return{filter:t}}function gv(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function mv(t,e,n,s,i){const r=new fv;let o,a;if(n.type===Le.OVERWRITE){const c=n;c.source.fromUser?o=ro(t,e,c.path,c.snap,s,i,r):(E(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!W(c.path),o=Ri(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===Le.MERGE){const c=n;c.source.fromUser?o=yv(t,e,c.path,c.children,s,i,r):(E(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=oo(t,e,c.path,c.children,s,i,a,r))}else if(n.type===Le.ACK_USER_WRITE){const c=n;c.revert?o=wv(t,e,c.path,s,i,r):o=Ev(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Le.LISTEN_COMPLETE)o=Cv(t,e,n.path,s,r);else throw Vn("Unknown operation type: "+n.type);const l=r.getChanges();return vv(e,o,l),{viewCache:o,changes:l}}function vv(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=no(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(ph(no(e)))}}function bh(t,e,n,s,i,r){const o=e.eventCache;if(Si(s,n)!=null)return e;{let a,l;if(W(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=nn(e),u=c instanceof P?c:P.EMPTY_NODE,h=Jo(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Ti(s,nn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=U(n);if(c===".priority"){E(At(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=jl(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Q(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=jl(s,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=Xo(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return cs(e,a,o.isFullyInitialized()||W(n),t.filter.filtersNodes())}}function Ri(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(W(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),g,null)}else{const g=U(n);if(!l.isCompleteForPath(n)&&At(n)>1)return e;const I=Q(n),M=l.getNode().getImmediateChild(g).updateChild(I,s);g===".priority"?c=u.updatePriority(l.getNode(),M):c=u.updateChild(l.getNode(),g,M,I,Ih,null)}const h=mh(e,c,l.isFullyInitialized()||W(n),u.filtersNodes()),f=new Zo(i,h,r);return bh(t,h,n,i,f,a)}function ro(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Zo(i,e,r);if(W(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=cs(e,c,!0,t.filter.filtersNodes());else{const h=U(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=cs(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=Q(n),g=a.getNode().getImmediateChild(h);let I;if(W(f))I=s;else{const S=u.getCompleteChild(h);S!=null?rh(f)===".priority"&&S.getChild(ah(f)).isEmpty()?I=S:I=S.updateChild(f,s):I=P.EMPTY_NODE}if(g.equals(I))l=e;else{const S=t.filter.updateChild(a.getNode(),h,I,f,u,o);l=cs(e,S,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function ql(t,e){return t.eventCache.isCompleteForChild(e)}function yv(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=oe(n,l);ql(e,U(u))&&(a=ro(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=oe(n,l);ql(e,U(u))||(a=ro(t,a,u,c,i,r,o))}),a}function Kl(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function oo(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;W(n)?c=s:c=new X(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),I=Kl(t,g,f);l=Ri(t,l,new z(h),I,i,r,o,a)}}),c.children.inorderTraversal((h,f)=>{const g=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!g){const I=e.serverCache.getNode().getImmediateChild(h),S=Kl(t,I,f);l=Ri(t,l,new z(h),S,i,r,o,a)}}),l}function Ev(t,e,n,s,i,r,o){if(Si(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(W(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ri(t,e,n,l.getNode().getChild(n),i,r,a,o);if(W(n)){let c=new X(null);return l.getNode().forEachChild(bn,(u,h)=>{c=c.set(new z(u),h)}),oo(t,e,n,c,i,r,a,o)}else return e}else{let c=new X(null);return s.foreach((u,h)=>{const f=oe(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),oo(t,e,n,c,i,r,a,o)}}function Cv(t,e,n,s,i){const r=e.serverCache,o=mh(e,r.getNode(),r.isFullyInitialized()||W(n),r.isFiltered());return bh(t,o,n,s,Ih,i)}function wv(t,e,n,s,i,r){let o;if(Si(s,n)!=null)return e;{const a=new Zo(s,e,i),l=e.eventCache.getNode();let c;if(W(n)||U(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ti(s,nn(e));else{const h=e.serverCache.getNode();E(h instanceof P,"serverChildren would be complete if leaf node"),u=Jo(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=U(n);let h=Xo(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Q(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,P.EMPTY_NODE,Q(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ti(s,nn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Si(s,V())!=null,cs(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Ko(s.getIndex()),r=Vm(s);this.processor_=_v(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(P.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(P.EMPTY_NODE,a.getNode(),null),u=new tn(l,o.isFullyInitialized(),i.filtersNodes()),h=new tn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Qi(h,u),this.eventGenerator_=new Ym(this.query_)}get query(){return this.query_}}function bv(t){return t.viewCache_.serverCache.getNode()}function Tv(t,e){const n=nn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!W(e)&&!n.getImmediateChild(U(e)).isEmpty())?n.getChild(e):null}function zl(t){return t.eventRegistrations_.length===0}function Sv(t,e){t.eventRegistrations_.push(e)}function Gl(t,e,n){const s=[];if(n){E(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Yl(t,e,n,s){e.type===Le.MERGE&&e.source.queryId!==null&&(E(nn(t.viewCache_),"We should always have a full cache before handling merges"),E(no(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=mv(t.processor_,i,e,n,s);return gv(t.processor_,r.viewCache),E(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Th(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Rv(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ie,(r,o)=>{s.push(Mn(r,o))}),n.isFullyInitialized()&&s.push(ph(n.getNode())),Th(t,s,n.getNode(),e)}function Th(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Qm(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ni;class Nv{constructor(){this.views=new Map}}function Av(t){E(!Ni,"__referenceConstructor has already been defined"),Ni=t}function Pv(){return E(Ni,"Reference.ts has not been loaded"),Ni}function kv(t){return t.views.size===0}function ea(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return E(r!=null,"SyncTree gave us an op for an invalid query."),Yl(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Yl(o,e,n,s));return r}}function Ov(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Ti(n,i?s:null),l=!1;a?l=!0:s instanceof P?(a=Jo(n,s),l=!1):(a=P.EMPTY_NODE,l=!1);const c=Qi(new tn(a,l,!1),new tn(s,i,!1));return new Iv(e,c)}return o}function xv(t,e,n,s,i,r){const o=Ov(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Sv(o,n),Rv(o,n)}function Dv(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=Pt(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Gl(c,n,s)),zl(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Gl(l,n,s)),zl(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Pt(t)&&r.push(new(Pv())(e._repo,e._path)),{removed:r,events:o}}function Sh(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Tn(t,e){let n=null;for(const s of t.views.values())n=n||Tv(s,e);return n}function Rh(t,e){if(e._queryParams.loadsAllData())return Ji(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Nh(t,e){return Rh(t,e)!=null}function Pt(t){return Ji(t)!=null}function Ji(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ai;function Mv(t){E(!Ai,"__referenceConstructor has already been defined"),Ai=t}function Lv(){return E(Ai,"Reference.ts has not been loaded"),Ai}let Fv=1;class Ql{constructor(e){this.listenProvider_=e,this.syncPointTree_=new X(null),this.pendingWriteTree_=hv(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Uv(t,e,n,s,i){return ev(t.pendingWriteTree_,e,n,s,i),i?Ms(t,new en(gh(),e,n)):[]}function gn(t,e,n=!1){const s=tv(t.pendingWriteTree_,e);if(nv(t.pendingWriteTree_,e)){let r=new X(null);return s.snap!=null?r=r.set(V(),!0):be(s.children,o=>{r=r.set(new z(o),!0)}),Ms(t,new bi(s.path,r,n))}else return[]}function Xi(t,e,n){return Ms(t,new en(Go(),e,n))}function Wv(t,e,n){const s=X.fromObject(n);return Ms(t,new Ts(Go(),e,s))}function Bv(t,e){return Ms(t,new bs(Go(),e))}function Hv(t,e,n){const s=ta(t,n);if(s){const i=na(s),r=i.path,o=i.queryId,a=Ee(r,e),l=new bs(Yo(o),a);return sa(t,r,l)}else return[]}function ao(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Nh(o,e))){const l=Dv(o,e,n,s);kv(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(f,g)=>Pt(g));if(u&&!h){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const g=jv(f);for(let I=0;I<g.length;++I){const S=g[I],M=S.query,j=Oh(t,S);t.listenProvider_.startListening(hs(M),Pi(t,M),j.hashFn,j.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(hs(e),null):c.forEach(f=>{const g=t.queryToTagMap.get(Zi(f));t.listenProvider_.stopListening(hs(f),g)}))}qv(t,c)}return a}function Vv(t,e,n,s){const i=ta(t,s);if(i!=null){const r=na(i),o=r.path,a=r.queryId,l=Ee(o,e),c=new en(Yo(a),l,n);return sa(t,o,c)}else return[]}function $v(t,e,n,s){const i=ta(t,s);if(i){const r=na(i),o=r.path,a=r.queryId,l=Ee(o,e),c=X.fromObject(n),u=new Ts(Yo(a),l,c);return sa(t,o,u)}else return[]}function Jl(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,g)=>{const I=Ee(f,i);r=r||Tn(g,I),o=o||Pt(g)});let a=t.syncPointTree_.get(i);a?(o=o||Pt(a),r=r||Tn(a,V())):(a=new Nv,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=P.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,I)=>{const S=Tn(I,V());S&&(r=r.updateImmediateChild(g,S))}));const c=Nh(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=Zi(e);E(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const g=Kv();t.queryToTagMap.set(f,g),t.tagToQueryMap.set(g,f)}const u=Qo(t.pendingWriteTree_,i);let h=xv(a,e,n,u,r,l);if(!c&&!o&&!s){const f=Rh(a,e);h=h.concat(zv(t,e,f))}return h}function Ah(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ee(o,e),c=Tn(a,l);if(c)return c});return Eh(i,e,r,n,!0)}function Ms(t,e){return Ph(e,t.syncPointTree_,null,Qo(t.pendingWriteTree_,V()))}function Ph(t,e,n,s){if(W(t.path))return kh(t,e,n,s);{const i=e.get(V());n==null&&i!=null&&(n=Tn(i,V()));let r=[];const o=U(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Ch(s,o);r=r.concat(Ph(a,l,c,u))}return i&&(r=r.concat(ea(i,t,s,n))),r}}function kh(t,e,n,s){const i=e.get(V());n==null&&i!=null&&(n=Tn(i,V()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Ch(s,o),u=t.operationForChild(o);u&&(r=r.concat(kh(u,a,l,c)))}),i&&(r=r.concat(ea(i,t,s,n))),r}function Oh(t,e){const n=e.query,s=Pi(t,n);return{hashFn:()=>(bv(e)||P.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Hv(t,n._path,s):Bv(t,n._path);{const r=Hg(i,n);return ao(t,n,null,r)}}}}function Pi(t,e){const n=Zi(e);return t.queryToTagMap.get(n)}function Zi(t){return t._path.toString()+"$"+t._queryIdentifier}function ta(t,e){return t.tagToQueryMap.get(e)}function na(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new z(t.substr(0,e))}}function sa(t,e,n){const s=t.syncPointTree_.get(e);E(s,"Missing sync point for query tag that we're tracking");const i=Qo(t.pendingWriteTree_,e);return ea(s,n,i,null)}function jv(t){return t.fold((e,n,s)=>{if(n&&Pt(n))return[Ji(n)];{let i=[];return n&&(i=Sh(n)),be(s,(r,o)=>{i=i.concat(o)}),i}})}function hs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Lv())(t._repo,t._path):t}function qv(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Zi(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Kv(){return Fv++}function zv(t,e,n){const s=e._path,i=Pi(t,e),r=Oh(t,n),o=t.listenProvider_.startListening(hs(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)E(!Pt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!W(c)&&u&&Pt(u))return[Ji(u).query];{let f=[];return u&&(f=f.concat(Sh(u).map(g=>g.query))),be(h,(g,I)=>{f=f.concat(I)}),f}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(hs(u),Pi(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ia(n)}node(){return this.node_}}class ra{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=oe(this.path_,e);return new ra(this.syncTree_,n)}node(){return Ah(this.syncTree_,this.path_)}}const Gv=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Xl=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Yv(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Qv(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Yv=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},Qv=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&E(!1,"Unexpected increment value: "+s);const i=e.node();if(E(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Jv=function(t,e,n,s){return oa(e,new ra(n,t),s)},Xv=function(t,e,n){return oa(t,new ia(e),n)};function oa(t,e,n){const s=t.getPriority().val(),i=Xl(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Xl(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new le(a,fe(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new le(i))),o.forEachChild(ie,(a,l)=>{const c=oa(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function la(t,e){let n=e instanceof z?e:new z(e),s=t,i=U(n);for(;i!==null;){const r=On(s.node.children,i)||{children:{},childCount:0};s=new aa(i,s,r),n=Q(n),i=U(n)}return s}function Kn(t){return t.node.value}function xh(t,e){t.node.value=e,lo(t)}function Dh(t){return t.node.childCount>0}function Zv(t){return Kn(t)===void 0&&!Dh(t)}function er(t,e){be(t.node.children,(n,s)=>{e(new aa(n,t,s))})}function Mh(t,e,n,s){n&&!s&&e(t),er(t,i=>{Mh(i,e,!0,s)}),n&&s&&e(t)}function ey(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ls(t){return new z(t.parent===null?t.name:Ls(t.parent)+"/"+t.name)}function lo(t){t.parent!==null&&ty(t.parent,t.name,t)}function ty(t,e,n){const s=Zv(n),i=dt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,lo(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,lo(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny=/[\[\].#$\/\u0000-\u001F\u007F]/,sy=/[\[\].#$\u0000-\u001F\u007F]/,Nr=10*1024*1024,Lh=function(t){return typeof t=="string"&&t.length!==0&&!ny.test(t)},Fh=function(t){return typeof t=="string"&&t.length!==0&&!sy.test(t)},iy=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Fh(t)},Uh=function(t,e,n){const s=n instanceof z?new Em(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Bt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Bt(s)+" with contents = "+e.toString());if(Uu(e))throw new Error(t+"contains "+e.toString()+" "+Bt(s));if(typeof e=="string"&&e.length>Nr/3&&Gi(e)>Nr)throw new Error(t+"contains a string greater than "+Nr+" utf8 bytes "+Bt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(be(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Lh(o)))throw new Error(t+" contains an invalid key ("+o+") "+Bt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Cm(s,o),Uh(t,a,s),wm(s)}),i&&r)throw new Error(t+' contains ".value" child '+Bt(s)+" in addition to actual children.")}},Wh=function(t,e,n,s){if(!(s&&n===void 0)&&!Fh(n))throw new Error(Nu(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},ry=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Wh(t,e,n,s)},oy=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Lh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!iy(n))throw new Error(Nu(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Bh(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!$o(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Hh(t,e,n){Bh(t,n),Vh(t,s=>$o(s,e))}function on(t,e,n){Bh(t,n),Vh(t,s=>Me(s,e)||Me(e,s))}function Vh(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(ly(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function ly(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();zt&&de("event: "+n.toString()),xs(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy="repo_interrupt",uy=25;class hy{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ay,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ii(),this.transactionQueueTree_=new aa,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function dy(t,e,n){if(t.stats_=Ho(t.repoInfo_),t.forceRestClient_||qg())t.server_=new wi(t.repoInfo_,(s,i,r,o)=>{Zl(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ec(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ue(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new lt(t.repoInfo_,e,(s,i,r,o)=>{Zl(t,s,i,r,o)},s=>{ec(t,s)},s=>{py(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Qg(t.repoInfo_,()=>new Gm(t.stats_,t.server_)),t.infoData_=new $m,t.infoSyncTree_=new Ql({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Xi(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ca(t,"connected",!1),t.serverSyncTree_=new Ql({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);on(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function fy(t){const n=t.infoData_.getNode(new z(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function $h(t){return Gv({timestamp:fy(t)})}function Zl(t,e,n,s,i){t.dataUpdateCount++;const r=new z(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=gi(n,c=>fe(c));o=$v(t.serverSyncTree_,r,l,i)}else{const l=fe(n);o=Vv(t.serverSyncTree_,r,l,i)}else if(s){const l=gi(n,c=>fe(c));o=Wv(t.serverSyncTree_,r,l)}else{const l=fe(n);o=Xi(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=ha(t,r)),on(t.eventQueue_,a,o)}function ec(t,e){ca(t,"connected",e),e===!1&&gy(t)}function py(t,e){be(e,(n,s)=>{ca(t,n,s)})}function ca(t,e,n){const s=new z("/.info/"+e),i=fe(n);t.infoData_.updateSnapshot(s,i);const r=Xi(t.infoSyncTree_,s,i);on(t.eventQueue_,s,r)}function _y(t){return t.nextWriteId_++}function gy(t){jh(t,"onDisconnectEvents");const e=$h(t),n=Ii();to(t.onDisconnect_,V(),(i,r)=>{const o=Jv(i,r,t.serverSyncTree_,e);_h(n,i,o)});let s=[];to(n,V(),(i,r)=>{s=s.concat(Xi(t.serverSyncTree_,i,r));const o=Cy(t,i);ha(t,o)}),t.onDisconnect_=Ii(),on(t.eventQueue_,V(),s)}function my(t,e,n){let s;U(e._path)===".info"?s=Jl(t.infoSyncTree_,e,n):s=Jl(t.serverSyncTree_,e,n),Hh(t.eventQueue_,e._path,s)}function tc(t,e,n){let s;U(e._path)===".info"?s=ao(t.infoSyncTree_,e,n):s=ao(t.serverSyncTree_,e,n),Hh(t.eventQueue_,e._path,s)}function vy(t){t.persistentConnection_&&t.persistentConnection_.interrupt(cy)}function jh(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),de(n,...e)}function qh(t,e,n){return Ah(t.serverSyncTree_,e,n)||P.EMPTY_NODE}function ua(t,e=t.transactionQueueTree_){if(e||tr(t,e),Kn(e)){const n=zh(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&yy(t,Ls(e),n)}else Dh(e)&&er(e,n=>{ua(t,n)})}function yy(t,e,n){const s=n.map(c=>c.currentWriteId),i=qh(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];E(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ee(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{jh(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(gn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();tr(t,la(t.transactionQueueTree_,e)),ua(t,t.transactionQueueTree_),on(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)xs(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Re("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}ha(t,e)}},o)}function ha(t,e){const n=Kh(t,e),s=Ls(n),i=zh(t,n);return Ey(t,i,s),s}function Ey(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ee(n,l.path);let u=!1,h;if(E(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(gn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=uy)u=!0,h="maxretry",i=i.concat(gn(t.serverSyncTree_,l.currentWriteId,!0));else{const f=qh(t,l.path,o);l.currentInputSnapshot=f;const g=e[a].update(f.val());if(g!==void 0){Uh("transaction failed: Data returned ",g,l.path);let I=fe(g);typeof g=="object"&&g!=null&&dt(g,".priority")||(I=I.updatePriority(f.getPriority()));const M=l.currentWriteId,j=$h(t),J=Xv(I,f,j);l.currentOutputSnapshotRaw=I,l.currentOutputSnapshotResolved=J,l.currentWriteId=_y(t),o.splice(o.indexOf(M),1),i=i.concat(Uv(t.serverSyncTree_,l.path,J,l.currentWriteId,l.applyLocally)),i=i.concat(gn(t.serverSyncTree_,M,!0))}else u=!0,h="nodata",i=i.concat(gn(t.serverSyncTree_,l.currentWriteId,!0))}on(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}tr(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)xs(s[a]);ua(t,t.transactionQueueTree_)}function Kh(t,e){let n,s=t.transactionQueueTree_;for(n=U(e);n!==null&&Kn(s)===void 0;)s=la(s,n),e=Q(e),n=U(e);return s}function zh(t,e){const n=[];return Gh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Gh(t,e,n){const s=Kn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);er(e,i=>{Gh(t,i,n)})}function tr(t,e){const n=Kn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,xh(e,n.length>0?n:void 0)}er(e,s=>{tr(t,s)})}function Cy(t,e){const n=Ls(Kh(t,e)),s=la(t.transactionQueueTree_,e);return ey(s,i=>{Ar(t,i)}),Ar(t,s),Mh(s,i=>{Ar(t,i)}),n}function Ar(t,e){const n=Kn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(gn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?xh(e,void 0):n.length=r+1,on(t.eventQueue_,Ls(e),i);for(let o=0;o<s.length;o++)xs(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Iy(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Re(`Invalid query segment '${n}' in query '${t}'`)}return e}const nc=function(t,e){const n=by(t),s=n.namespace;n.domain==="firebase.com"&&ct(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&ct("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Lg();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Qu(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new z(n.pathString)}},by=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=wy(t.substring(u,h)));const f=Iy(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const I=e.indexOf(".");s=e.substring(0,I).toLowerCase(),n=e.substring(I+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ue(this.snapshot.exportVal())}}class Qh{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return W(this._path)?null:rh(this._path)}get ref(){return new ft(this._repo,this._path)}get _queryIdentifier(){const e=Wl(this._queryParams),n=Wo(e);return n==="{}"?"default":n}get _queryObject(){return Wl(this._queryParams)}isEqual(e){if(e=Be(e),!(e instanceof da))return!1;const n=this._repo===e._repo,s=$o(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ym(this._path)}}class ft extends da{constructor(e,n){super(e,n,new zo,!1)}get parent(){const e=ah(this._path);return e===null?null:new ft(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ss{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new z(e),s=ki(this.ref,e);return new Ss(this._node.getChild(n),s,ie)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Ss(i,ki(this.ref,s),ie)))}hasChild(e){const n=new z(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Sy(t,e){return t=Be(t),t._checkNotDeleted("ref"),e!==void 0?ki(t._root,e):t._root}function ki(t,e){return t=Be(t),U(t._path)===null?ry("child","path",e,!1):Wh("child","path",e,!1),new ft(t._repo,oe(t._path,e))}class fa{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Yh("value",this,new Ss(e.snapshotNode,new ft(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Qh(this,e,n):null}matches(e){return e instanceof fa?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class pa{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Qh(this,e,n):null}createEvent(e,n){E(e.childName!=null,"Child events should have a childName.");const s=ki(new ft(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Yh(e.type,this,new Ss(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof pa?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Ry(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=n,c=(u,h)=>{tc(t._repo,t,a),l(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Ty(n,r||void 0),a=e==="value"?new fa(o):new pa(e,o);return my(t._repo,t,a),()=>tc(t._repo,t,a)}function Ny(t,e,n,s){return Ry(t,"value",e,n,s)}Av(ft);Mv(ft);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay="FIREBASE_DATABASE_EMULATOR_HOST",co={};let Py=!1;function ky(t,e,n,s){t.repoInfo_=new Qu(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function Oy(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||ct("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),de("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=nc(r,i),a=o.repoInfo,l,c;typeof process<"u"&&Cl&&(c=Cl[Ay]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=nc(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new In(In.OWNER):new zg(t.name,t.options,e);oy("Invalid Firebase Database URL",o),W(o.path)||ct("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Dy(a,t,u,new Kg(t.name,n));return new My(h,t)}function xy(t,e){const n=co[e];(!n||n[t.key]!==t)&&ct(`Database ${e}(${t.repoInfo_}) has already been deleted.`),vy(t),delete n[t.key]}function Dy(t,e,n,s){let i=co[e.name];i||(i={},co[e.name]=i);let r=i[t.toURLString()];return r&&ct("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new hy(t,Py,n,s),i[t.toURLString()]=r,r}class My{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(dy(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ft(this._repo,V())),this._rootInternal}_delete(){return this._rootInternal!==null&&(xy(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ct("Cannot call "+e+" on a deleted database.")}}function Ly(t=Ou(),e){const n=Uo(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=l_("database");s&&Fy(n,...s)}return n}function Fy(t,e,n,s={}){t=Be(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&ct("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&ct('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new In(In.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:c_(s.mockUserToken,t.app.options.projectId);r=new In(o)}ky(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(t){kg(jn),xn(new Jt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Oy(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),St(wl,Il,t),St(wl,Il,"esm2017")}lt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};lt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Uy();function _a(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Jh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Wy=Jh,Xh=new Ps("auth","Firebase",Jh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=new Lo("@firebase/auth");function By(t,...e){Oi.logLevel<=K.WARN&&Oi.warn(`Auth (${jn}): ${t}`,...e)}function ii(t,...e){Oi.logLevel<=K.ERROR&&Oi.error(`Auth (${jn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(t,...e){throw ga(t,...e)}function Ye(t,...e){return ga(t,...e)}function Hy(t,e,n){const s=Object.assign(Object.assign({},Wy()),{[e]:n});return new Ps("auth","Firebase",s).create(e,{appName:t.name})}function ga(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Xh.create(t,...e)}function k(t,e,...n){if(!t)throw ga(e,...n)}function it(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ii(e),new Error(e)}function ut(t,e){t||it(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Vy(){return sc()==="http:"||sc()==="https:"}function sc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $y(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vy()||u_()||"connection"in navigator)?navigator.onLine:!0}function jy(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,n){this.shortDelay=e,this.longDelay=n,ut(n>e,"Short delay should be less than long delay!"),this.isMobile=Mo()||Tu()}get(){return $y()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(t,e){ut(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;it("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;it("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;it("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky=new Fs(3e4,6e4);function an(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ot(t,e,n,s,i={}){return ed(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=$n(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Zh.fetch()(td(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function ed(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},qy),e);try{const i=new Gy(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Xs(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xs(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Xs(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Xs(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Hy(t,u,c);We(t,u)}}catch(i){if(i instanceof kt)throw i;We(t,"network-request-failed",{message:String(i)})}}async function nr(t,e,n,s,i={}){const r=await Ot(t,e,n,s,i);return"mfaPendingCredential"in r&&We(t,"multi-factor-auth-required",{_serverResponse:r}),r}function td(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?ma(t.config,i):`${t.config.apiScheme}://${i}`}function zy(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Gy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ye(this.auth,"network-request-failed")),Ky.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Xs(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Ye(t,e,s);return i.customData._tokenResponse=n,i}function ic(t){return t!==void 0&&t.enterprise!==void 0}class Yy{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return zy(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Qy(t,e){return Ot(t,"GET","/v2/recaptchaConfig",an(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jy(t,e){return Ot(t,"POST","/v1/accounts:delete",e)}async function Xy(t,e){return Ot(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Zy(t,e=!1){const n=Be(t),s=await n.getIdToken(e),i=va(s);k(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:ds(Pr(i.auth_time)),issuedAtTime:ds(Pr(i.iat)),expirationTime:ds(Pr(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Pr(t){return Number(t)*1e3}function va(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ii("JWT malformed, contained fewer than 3 sections"),null;try{const i=_i(n);return i?JSON.parse(i):(ii("Failed to decode base64 JWT payload"),null)}catch(i){return ii("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function e0(t){const e=va(t);return k(e,"internal-error"),k(typeof e.exp<"u","internal-error"),k(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rs(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof kt&&t0(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function t0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ds(this.lastLoginAt),this.creationTime=ds(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xi(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Rs(t,Xy(n,{idToken:s}));k(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?r0(r.providerUserInfo):[],a=i0(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new nd(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function s0(t){const e=Be(t);await xi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function i0(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function r0(t){return t.map(e=>{var{providerId:n}=e,s=_a(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o0(t,e){const n=await ed(t,{},async()=>{const s=$n({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=td(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Zh.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function a0(t,e){return Ot(t,"POST","/v2/accounts:revokeToken",an(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){k(e.idToken,"internal-error"),k(typeof e.idToken<"u","internal-error"),k(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):e0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return k(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await o0(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Ns;return s&&(k(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(k(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(k(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ns,this.toJSON())}_performRefresh(){return it("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t,e){k(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Gt{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=_a(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new n0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new nd(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Rs(this,this.stsTokenManager.getToken(this.auth,e));return k(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Zy(this,e)}reload(){return s0(this)}_assign(e){this!==e&&(k(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Gt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){k(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await xi(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Rs(this,Jy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,M=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,j=(c=n.createdAt)!==null&&c!==void 0?c:void 0,J=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:ee,emailVerified:D,isAnonymous:Te,providerData:He,stsTokenManager:pt}=n;k(ee&&pt,e,"internal-error");const Ve=Ns.fromJSON(this.name,pt);k(typeof ee=="string",e,"internal-error"),gt(h,e.name),gt(f,e.name),k(typeof D=="boolean",e,"internal-error"),k(typeof Te=="boolean",e,"internal-error"),gt(g,e.name),gt(I,e.name),gt(S,e.name),gt(M,e.name),gt(j,e.name),gt(J,e.name);const xt=new Gt({uid:ee,auth:e,email:f,emailVerified:D,displayName:h,isAnonymous:Te,photoURL:I,phoneNumber:g,tenantId:S,stsTokenManager:Ve,createdAt:j,lastLoginAt:J});return He&&Array.isArray(He)&&(xt.providerData=He.map(Je=>Object.assign({},Je))),M&&(xt._redirectEventId=M),xt}static async _fromIdTokenResponse(e,n,s=!1){const i=new Ns;i.updateFromServerResponse(n);const r=new Gt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await xi(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc=new Map;function rt(t){ut(t instanceof Function,"Expected a class definition");let e=rc.get(t);return e?(ut(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,rc.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}sd.type="NONE";const oc=sd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t,e,n){return`firebase:${t}:${e}:${n}`}class Sn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=ri(this.userKey,i.apiKey,r),this.fullPersistenceKey=ri("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Gt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Sn(rt(oc),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||rt(oc);const o=ri(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Gt._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Sn(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Sn(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(od(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(id(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ld(e))return"Blackberry";if(cd(e))return"Webos";if(ya(e))return"Safari";if((e.includes("chrome/")||rd(e))&&!e.includes("edge/"))return"Chrome";if(ad(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function id(t=ge()){return/firefox\//i.test(t)}function ya(t=ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rd(t=ge()){return/crios\//i.test(t)}function od(t=ge()){return/iemobile/i.test(t)}function ad(t=ge()){return/android/i.test(t)}function ld(t=ge()){return/blackberry/i.test(t)}function cd(t=ge()){return/webos/i.test(t)}function sr(t=ge()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function l0(t=ge()){var e;return sr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function c0(){return h_()&&document.documentMode===10}function ud(t=ge()){return sr(t)||ad(t)||cd(t)||ld(t)||/windows phone/i.test(t)||od(t)}function u0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(t,e=[]){let n;switch(t){case"Browser":n=ac(ge());break;case"Worker":n=`${ac(ge())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${jn}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d0(t,e={}){return Ot(t,"GET","/v2/passwordPolicy",an(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0=6;class p0{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:f0,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lc(this),this.idTokenSubscription=new lc(this),this.beforeStateQueue=new h0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Sn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return k(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await xi(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Be(e):null;return n&&k(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&k(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(rt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await d0(this),n=new p0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ps("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await a0(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rt(e)||this._popupRedirectResolver;k(n,this,"argument-error"),this.redirectPersistenceManager=await Sn.create(this,[rt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(k(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return k(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&By(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function zn(t){return Be(t)}class lc{constructor(e){this.auth=e,this.observer=null,this.addObserver=E_(n=>this.observer=n)}get next(){return k(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function dd(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Ye("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",g0().appendChild(s)})}function m0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const v0="https://www.google.com/recaptcha/enterprise.js?render=",y0="recaptcha-enterprise",E0="NO_RECAPTCHA";class C0{constructor(e){this.type=y0,this.auth=zn(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Qy(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Yy(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;ic(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(E0)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&ic(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}dd(v0+a).then(()=>{i(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function cc(t,e,n,s=!1){const i=new C0(t);let r;try{r=await i.verify(n)}catch{r=await i.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function uc(t,e,n,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await cc(t,e,n,n==="getOobCode");return s(t,r)}else return s(t,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await cc(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(r)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w0(t,e){const n=Uo(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(mi(r,e??{}))return i;We(i,"already-initialized")}return n.initialize({options:e})}function I0(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(rt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function b0(t,e,n){const s=zn(t);k(s._canInitEmulator,s,"emulator-config-failed"),k(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=fd(e),{host:o,port:a}=T0(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||S0()}function fd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function T0(t){const e=fd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:hc(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:hc(o)}}}function hc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function S0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return it("not implemented")}_getIdTokenResponse(e){return it("not implemented")}_linkToIdToken(e,n){return it("not implemented")}_getReauthenticationResolver(e){return it("not implemented")}}async function R0(t,e){return Ot(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N0(t,e){return nr(t,"POST","/v1/accounts:signInWithPassword",an(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A0(t,e){return nr(t,"POST","/v1/accounts:signInWithEmailLink",an(t,e))}async function P0(t,e){return nr(t,"POST","/v1/accounts:signInWithEmailLink",an(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As extends Ea{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new As(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new As(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uc(e,n,"signInWithPassword",N0);case"emailLink":return A0(e,{email:this._email,oobCode:this._password});default:We(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uc(e,s,"signUpPassword",R0);case"emailLink":return P0(e,{idToken:n,email:this._email,oobCode:this._password});default:We(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rn(t,e){return nr(t,"POST","/v1/accounts:signInWithIdp",an(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0="http://localhost";class sn extends Ea{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new sn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):We("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=_a(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new sn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Rn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Rn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Rn(e,n)}buildRequest(){const e={requestUri:k0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$n(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function x0(t){const e=is(rs(t)).link,n=e?is(rs(e)).deep_link_id:null,s=is(rs(t)).deep_link_id;return(s?is(rs(s)).link:null)||s||n||e||t}class Ca{constructor(e){var n,s,i,r,o,a;const l=is(rs(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=O0((i=l.mode)!==null&&i!==void 0?i:null);k(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=x0(e);try{return new Ca(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(){this.providerId=Gn.PROVIDER_ID}static credential(e,n){return As._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Ca.parseLink(n);return k(s,"argument-error"),As._fromEmailAndCode(e,s.code,s.tenantId)}}Gn.PROVIDER_ID="password";Gn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Gn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us extends pd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends Us{constructor(){super("facebook.com")}static credential(e){return sn._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch{return null}}}vt.FACEBOOK_SIGN_IN_METHOD="facebook.com";vt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends Us{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return sn._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return yt.credential(n,s)}catch{return null}}}yt.GOOGLE_SIGN_IN_METHOD="google.com";yt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends Us{constructor(){super("github.com")}static credential(e){return sn._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch{return null}}}Et.GITHUB_SIGN_IN_METHOD="github.com";Et.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends Us{constructor(){super("twitter.com")}static credential(e,n){return sn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Ct.credential(n,s)}catch{return null}}}Ct.TWITTER_SIGN_IN_METHOD="twitter.com";Ct.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Gt._fromIdTokenResponse(e,s,i),o=dc(s);return new Fn({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=dc(s);return new Fn({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function dc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di extends kt{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Di.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Di(e,n,s,i)}}function _d(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Di._fromErrorAndOperation(t,r,e,s):r})}async function D0(t,e,n=!1){const s=await Rs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Fn._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M0(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await Rs(t,_d(s,i,e,t),n);k(r.idToken,s,"internal-error");const o=va(r.idToken);k(o,s,"internal-error");const{sub:a}=o;return k(t.uid===a,s,"user-mismatch"),Fn._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&We(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gd(t,e,n=!1){const s="signIn",i=await _d(t,s,e),r=await Fn._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function L0(t,e){return gd(zn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F0(t){const e=zn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function U0(t,e,n){return L0(Be(t),Gn.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&F0(t),s})}function W0(t,e,n,s){return Be(t).onIdTokenChanged(e,n,s)}function B0(t,e,n){return Be(t).beforeAuthStateChanged(e,n)}const Mi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Mi,"1"),this.storage.removeItem(Mi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(){const t=ge();return ya(t)||sr(t)}const V0=1e3,$0=10;class vd extends md{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=H0()&&u0(),this.fallbackToPolling=ud(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);c0()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,$0):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},V0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}vd.type="LOCAL";const j0=vd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd extends md{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}yd.type="SESSION";const Ed=yd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new ir(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await q0(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ir.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=wa("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return window}function z0(t){Qe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(){return typeof Qe().WorkerGlobalScope<"u"&&typeof Qe().importScripts=="function"}async function G0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Y0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Q0(){return Cd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd="firebaseLocalStorageDb",J0=1,Li="firebaseLocalStorage",Id="fbase_key";class Ws{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rr(t,e){return t.transaction([Li],e?"readwrite":"readonly").objectStore(Li)}function X0(){const t=indexedDB.deleteDatabase(wd);return new Ws(t).toPromise()}function ho(){const t=indexedDB.open(wd,J0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Li,{keyPath:Id})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Li)?e(s):(s.close(),await X0(),e(await ho()))})})}async function fc(t,e,n){const s=rr(t,!0).put({[Id]:e,value:n});return new Ws(s).toPromise()}async function Z0(t,e){const n=rr(t,!1).get(e),s=await new Ws(n).toPromise();return s===void 0?null:s.value}function pc(t,e){const n=rr(t,!0).delete(e);return new Ws(n).toPromise()}const eE=800,tE=3;class bd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ho(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>tE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ir._getInstance(Q0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await G0(),!this.activeServiceWorker)return;this.sender=new K0(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Y0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ho();return await fc(e,Mi,"1"),await pc(e,Mi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>fc(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Z0(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>pc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=rr(i,!1).getAll();return new Ws(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bd.type="LOCAL";const nE=bd;new Fs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(t,e){return e?rt(e):(k(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia extends Ea{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Rn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Rn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function iE(t){return gd(t.auth,new Ia(t),t.bypassAuthState)}function rE(t){const{auth:e,user:n}=t;return k(n,e,"internal-error"),M0(n,new Ia(t),t.bypassAuthState)}async function oE(t){const{auth:e,user:n}=t;return k(n,e,"internal-error"),D0(n,new Ia(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iE;case"linkViaPopup":case"linkViaRedirect":return oE;case"reauthViaPopup":case"reauthViaRedirect":return rE;default:We(this.auth,"internal-error")}}resolve(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE=new Fs(2e3,1e4);class mn extends Td{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,mn.currentPopupAction&&mn.currentPopupAction.cancel(),mn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return k(e,this.auth,"internal-error"),e}async onExecution(){ut(this.filter.length===1,"Popup operations only handle one event");const e=wa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ye(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,aE.get())};e()}}mn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE="pendingRedirect",oi=new Map;class cE extends Td{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=oi.get(this.auth._key());if(!e){try{const s=await uE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}oi.set(this.auth._key(),e)}return this.bypassAuthState||oi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function uE(t,e){const n=fE(e),s=dE(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function hE(t,e){oi.set(t._key(),e)}function dE(t){return rt(t._redirectPersistence)}function fE(t){return ri(lE,t.config.apiKey,t.name)}async function pE(t,e,n=!1){const s=zn(t),i=sE(s,e),o=await new cE(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E=10*60*1e3;class gE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Sd(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ye(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_E&&this.cachedEventUids.clear(),this.cachedEventUids.has(_c(e))}saveEventToCache(e){this.cachedEventUids.add(_c(e)),this.lastProcessedEventTime=Date.now()}}function _c(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Sd({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sd(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vE(t,e={}){return Ot(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,EE=/^https?/;async function CE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await vE(t);for(const n of e)try{if(wE(n))return}catch{}We(t,"unauthorized-domain")}function wE(t){const e=uo(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!EE.test(n))return!1;if(yE.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE=new Fs(3e4,6e4);function gc(){const t=Qe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function bE(t){return new Promise((e,n)=>{var s,i,r;function o(){gc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gc(),n(Ye(t,"network-request-failed"))},timeout:IE.get()})}if(!((i=(s=Qe().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Qe().gapi)===null||r===void 0)&&r.load)o();else{const a=m0("iframefcb");return Qe()[a]=()=>{gapi.load?o():n(Ye(t,"network-request-failed"))},dd(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ai=null,e})}let ai=null;function TE(t){return ai=ai||bE(t),ai}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE=new Fs(5e3,15e3),RE="__/auth/iframe",NE="emulator/auth/iframe",AE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kE(t){const e=t.config;k(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ma(e,NE):`https://${t.config.authDomain}/${RE}`,s={apiKey:e.apiKey,appName:t.name,v:jn},i=PE.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${$n(s).slice(1)}`}async function OE(t){const e=await TE(t),n=Qe().gapi;return k(n,t,"internal-error"),e.open({where:document.body,url:kE(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:AE,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Ye(t,"network-request-failed"),a=Qe().setTimeout(()=>{r(o)},SE.get());function l(){Qe().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},DE=500,ME=600,LE="_blank",FE="http://localhost";class mc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function UE(t,e,n,s=DE,i=ME){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},xE),{width:s.toString(),height:i.toString(),top:r,left:o}),c=ge().toLowerCase();n&&(a=rd(c)?LE:n),id(c)&&(e=e||FE,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[g,I])=>`${f}${g}=${I},`,"");if(l0(c)&&a!=="_self")return WE(e||"",a),new mc(null);const h=window.open(e||"",a,u);k(h,t,"popup-blocked");try{h.focus()}catch{}return new mc(h)}function WE(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE="__/auth/handler",HE="emulator/auth/handler",VE=encodeURIComponent("fac");async function vc(t,e,n,s,i,r){k(t.config.authDomain,t,"auth-domain-config-required"),k(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:jn,eventId:i};if(e instanceof pd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",qr(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof Us){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${VE}=${encodeURIComponent(l)}`:"";return`${$E(t)}?${$n(a).slice(1)}${c}`}function $E({config:t}){return t.emulator?ma(t,HE):`https://${t.authDomain}/${BE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr="webStorageSupport";class jE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ed,this._completeRedirectFn=pE,this._overrideRedirectResult=hE}async _openPopup(e,n,s,i){var r;ut((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await vc(e,n,s,uo(),i);return UE(e,o,wa())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await vc(e,n,s,uo(),i);return z0(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(ut(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await OE(e),s=new gE(e);return n.register("authEvent",i=>(k(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(kr,{type:kr},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[kr];o!==void 0&&n(!!o),We(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=CE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ud()||ya()||sr()}}const qE=jE;var yc="@firebase/auth",Ec="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){k(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function GE(t){xn(new Jt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;k(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hd(t)},c=new _0(s,i,r,l);return I0(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),xn(new Jt("auth-internal",e=>{const n=zn(e.getProvider("auth").getImmediate());return(s=>new KE(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),St(yc,Ec,zE(t)),St(yc,Ec,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE=5*60,QE=bu("authIdTokenMaxAge")||YE;let Cc=null;const JE=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>QE)return;const i=n==null?void 0:n.token;Cc!==i&&(Cc=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function XE(t=Ou()){const e=Uo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=w0(t,{popupRedirectResolver:qE,persistence:[nE,j0,Ed]}),s=bu("authTokenSyncURL");if(s){const r=JE(s);B0(n,r,()=>r(n.currentUser)),W0(n,o=>r(o))}const i=wu("auth");return i&&b0(n,`http://${i}`),n}GE("Browser");const ZE="data:image/svg+xml,%3csvg%20width='23'%20height='26'%20viewBox='0%200%2023%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='2'%20y='2'%20width='19.5'%20height='22'%20rx='1.5'%20stroke='%23175CD3'%20stroke-width='3'/%3e%3ccircle%20cx='11.75'%20cy='8'%20r='2.5'%20fill='%23175CD3'/%3e%3c/svg%3e",eC="data:image/svg+xml,%3csvg%20width='23'%20height='26'%20viewBox='0%200%2023%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1.8335'%20y='2'%20width='19.5'%20height='22'%20rx='1.5'%20stroke='%23B9C0D4'%20stroke-width='3'/%3e%3ccircle%20cx='11.584'%20cy='8'%20r='2.5'%20fill='%23B9C0D4'/%3e%3c/svg%3e",tC="data:image/svg+xml,%3csvg%20width='38'%20height='28'%20viewBox='0%200%2038%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.7903%2024.418L12.7905%2024.4178L12.7915%2024.4164L12.7939%2024.4134L15.7669%2020.6117L15.7671%2020.6115C16.1729%2020.0927%2016.6897%2019.6709%2017.281%2019.3799L17.8914%2020.6203L17.281%2019.3799C17.8726%2019.0888%2018.5224%2018.9368%2019.1819%2018.9368C19.8415%2018.9368%2020.4912%2019.0888%2021.0828%2019.3799L20.4725%2020.6203L21.0828%2019.3799C21.6742%2019.671%2022.191%2020.0929%2022.5968%2020.6116L22.597%2020.6118L25.5699%2024.4134L25.5724%2024.4165L25.5736%2024.4181L25.5736%2024.4182C26.0714%2025.0582%2026.7006%2025.5723%2027.4128%2025.9251L26.747%2027.2692L27.4128%2025.9251C28.1251%2026.2779%2028.9036%2026.461%2029.6912%2026.4627C29.6914%2026.4627%2029.6916%2026.4627%2029.6918%2026.4627M12.7903%2024.418L29.6907%2026.7553V26.9865M12.7903%2024.418C12.2925%2025.0582%2011.6633%2025.5723%2010.951%2025.9251C10.2387%2026.2779%209.46018%2026.461%208.67262%2026.4627C8.67243%2026.4627%208.67223%2026.4627%208.67204%2026.4627L8.67066%2026.4627L6.62542%2026.4627C5.48959%2026.4627%204.39236%2026.0003%203.57733%2025.1643C2.76103%2024.3271%202.2959%2023.1837%202.2959%2021.9837V5.14264C2.2959%204.2054%202.65927%203.31394%203.29443%202.6625C3.92833%202.01235%204.77987%201.6543%205.65954%201.6543H32.7043C33.584%201.6543%2034.4355%202.01235%2035.0694%202.6625C35.7046%203.31395%2036.0679%204.2054%2036.0679%205.14264V21.9837C36.0679%2023.1837%2035.6028%2024.3271%2034.7865%2025.1643C33.9715%2026.0003%2032.8742%2026.4627%2031.7384%2026.4627L29.6932%2026.4627M12.7903%2024.418L29.6932%2026.4627M29.6918%2026.4627L29.6907%2026.9865M29.6918%2026.4627L29.6932%2026.4627M29.6918%2026.4627L29.6932%2026.4627M29.6907%2026.9865V27.9621L29.6932%2026.4627M29.6907%2026.9865L29.6932%2026.4627'%20stroke='%23B9C0D4'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11.44%209C10.4502%209%209.50095%209.40327%208.80107%2010.1211C8.1012%2010.8389%207.70801%2011.8125%207.70801%2012.8276C7.70801%2013.8428%208.1012%2014.8164%208.80107%2015.5342C9.50095%2016.252%2010.4502%2016.6553%2011.44%2016.6553C12.4297%2016.6553%2013.379%2016.252%2014.0788%2015.5342C14.7787%2014.8164%2015.1719%2013.8428%2015.1719%2012.8276C15.1719%2011.8125%2014.7787%2010.8389%2014.0788%2010.1211C13.379%209.40327%2012.4297%209%2011.44%209ZM26.894%209C25.9042%209%2024.955%209.40327%2024.2551%2010.1211C23.5552%2010.8389%2023.1621%2011.8125%2023.1621%2012.8276C23.1621%2013.8428%2023.5552%2014.8164%2024.2551%2015.5342C24.955%2016.252%2025.9042%2016.6553%2026.894%2016.6553C27.8838%2016.6553%2028.833%2016.252%2029.5329%2015.5342C30.2328%2014.8164%2030.626%2013.8428%2030.626%2012.8276C30.626%2011.8125%2030.2328%2010.8389%2029.5329%2010.1211C28.833%209.40327%2027.8838%209%2026.894%209Z'%20fill='%23B9C0D4'/%3e%3c/svg%3e",nC="data:image/svg+xml,%3csvg%20width='38'%20height='28'%20viewBox='0%200%2038%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.9563%2024.418L12.9565%2024.4178L12.9576%2024.4164L12.9599%2024.4134L15.9329%2020.6117L15.9331%2020.6115C16.3389%2020.0927%2016.8557%2019.6709%2017.447%2019.3799L18.0574%2020.6203L17.447%2019.3799C18.0386%2019.0888%2018.6884%2018.9368%2019.3479%2018.9368C20.0075%2018.9368%2020.6572%2019.0888%2021.2488%2019.3799L20.6385%2020.6203L21.2488%2019.3799C21.8402%2019.671%2022.357%2020.0929%2022.7628%2020.6116L22.763%2020.6118L25.736%2024.4134L25.7384%2024.4165L25.7396%2024.4181L25.7397%2024.4182C26.2374%2025.0582%2026.8666%2025.5723%2027.5788%2025.9251L26.9131%2027.2692L27.5788%2025.9251C28.2911%2026.2779%2029.0697%2026.461%2029.8572%2026.4627C29.8574%2026.4627%2029.8576%2026.4627%2029.8578%2026.4627M12.9563%2024.418L29.8567%2026.7553V26.9865M12.9563%2024.418C12.4585%2025.0582%2011.8293%2025.5723%2011.117%2025.9251C10.4047%2026.2779%209.6262%2026.461%208.83863%2026.4627C8.83844%2026.4627%208.83825%2026.4627%208.83806%2026.4627L8.83668%2026.4627L6.79144%2026.4627C5.65561%2026.4627%204.55838%2026.0003%203.74334%2025.1643C2.92705%2024.3271%202.46191%2023.1837%202.46191%2021.9837V5.14264C2.46191%204.2054%202.82528%203.31394%203.46044%202.6625C4.09434%202.01235%204.94589%201.6543%205.82555%201.6543H32.8703C33.75%201.6543%2034.6015%202.01235%2035.2354%202.6625C35.8706%203.31395%2036.2339%204.2054%2036.2339%205.14264V21.9837C36.2339%2023.1837%2035.7688%2024.3271%2034.9525%2025.1643C34.1375%2026.0003%2033.0403%2026.4627%2031.9044%2026.4627L29.8592%2026.4627M12.9563%2024.418L29.8592%2026.4627M29.8578%2026.4627L29.8567%2026.9865M29.8578%2026.4627L29.8592%2026.4627M29.8578%2026.4627L29.8592%2026.4627M29.8567%2026.9865V27.9621L29.8592%2026.4627M29.8567%2026.9865L29.8592%2026.4627'%20stroke='%23175CD3'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11.607%209C10.6172%209%209.66794%209.40327%208.96806%2010.1211C8.26819%2010.8389%207.875%2011.8125%207.875%2012.8276C7.875%2013.8428%208.26819%2014.8164%208.96806%2015.5342C9.66794%2016.252%2010.6172%2016.6553%2011.607%2016.6553C12.5967%2016.6553%2013.546%2016.252%2014.2458%2015.5342C14.9457%2014.8164%2015.3389%2013.8428%2015.3389%2012.8276C15.3389%2011.8125%2014.9457%2010.8389%2014.2458%2010.1211C13.546%209.40327%2012.5967%209%2011.607%209ZM27.061%209C26.0712%209%2025.122%209.40327%2024.4221%2010.1211C23.7222%2010.8389%2023.329%2011.8125%2023.329%2012.8276C23.329%2013.8428%2023.7222%2014.8164%2024.4221%2015.5342C25.122%2016.252%2026.0712%2016.6553%2027.061%2016.6553C28.0508%2016.6553%2029%2016.252%2029.6999%2015.5342C30.3998%2014.8164%2030.7929%2013.8428%2030.7929%2012.8276C30.7929%2011.8125%2030.3998%2010.8389%2029.6999%2010.1211C29%209.40327%2028.0508%209%2027.061%209Z'%20fill='%23175CD3'/%3e%3c/svg%3e",wc="/LeadMeLabs-Realtime-Dashboard/assets/grey-controller--mcJft3n.svg",Ic="/LeadMeLabs-Realtime-Dashboard/assets/blue-controller-8RYZo1S4.svg",sC={class:"flex flex-row justify-end"},iC={class:"text-blue-600 font-semibold"},rC={class:"flex flex-row justify-center w-48 mt-2 mb-3"},oC={class:"bg-white p-2 rounded-full w-full h-6 font-semibold"},aC={class:"flex flex-row justify-between mx-5"},lC={class:"flex flex-col justify-between items-center font-semibold"},cC=["src"],uC={class:"flex flex-col justify-between items-center font-semibold"},hC=["src"],dC={class:"flex flex-col justify-between items-center font-semibold"},fC=["src"],pC={class:"flex flex-col justify-between items-center font-semibold"},_C=["src"],gC={class:"flex flex-row justify-between mt-2"},mC={class:"text-xs font-semibold"},vC={class:"text-xs font-semibold"},yC=tu({__name:"StationCard",props:{station:{type:Object,required:!0},now:{type:Number,required:!0}},setup(t){const e=t,n=fi(()=>{var i=e.now-Date.parse(e.station.latestUpdate),r=i/1e3;return r<3?"bg-blue-500":"bg-gray-200"}),s=fi(()=>{var i=e.now-Date.parse(e.station.latestUpdate),r=i/1e3;if(r<30)return"Just now";if(r<60)return"< 1 minute ago";if(r<120)return"1 minute ago";var o=r/60;if(o<60)return`${Math.round(o)} minutes ago`;var a=o/60;if(a<24)return`${Math.round(a)} hour(s) ago`;var l=a/24;return l<7?`${Math.round(l)} day(s) ago`:"More than 1 week ago"});return(i,r)=>(nt(),Ut("div",{class:Bi(["rounded-2xl p-2 relative ease-bg font-semibold",n.value])},[te("div",sC,[te("span",iC,Ze(t.station.status),1)]),te("div",rC,[te("div",oC,Ze(t.station.gameName??t.station.state??"N/A"),1)]),te("div",aC,[te("div",lC,[te("img",{src:t.station.baseStationsActive>0?et(ZE):et(eC),class:"h-18"},null,8,cC),pn(" "+Ze(t.station.baseStationsActive),1)]),te("div",uC,[te("img",{src:t.station.leftControllerBattery>0?et(Ic):et(wc),class:"h-18"},null,8,hC),pn(" "+Ze(t.station.leftControllerBattery),1)]),te("div",dC,[te("img",{src:t.station.rightControllerBattery>0?et(Ic):et(wc),class:"h-18"},null,8,fC),pn(" "+Ze(t.station.rightControllerBattery),1)]),te("div",pC,[te("img",{src:t.station.openVRHeadsetTracking==="On"?et(nC):et(tC),class:"h-18"},null,8,_C),pn(" "+Ze(t.station.openVRHeadsetTracking),1)])]),te("div",gC,[te("span",mC,Ze(t.station.versionCode),1),te("span",vC,Ze(s.value),1)])],2))}}),EC={key:0,class:"flex flex-col"},CC=te("label",{for:"email"},"Email",-1),wC=te("label",{for:"password"},"Password",-1),IC={key:1,class:"w-screen h-screen flex flex-col overflow-hidden p-10"},bC={class:"flex flex-row last-child:mr-0 overflow-x-scroll"},TC=tu({__name:"App",setup(t){ku({apiKey:"AIzaSyC_Dx2fpTHRmU4WaUg1hUYn2O9C4m76Bhg",authDomain:"leadme-labs.firebaseapp.com",databaseURL:"https://leadme-labs-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"leadme-labs",storageBucket:"leadme-labs.appspot.com",messagingSenderId:"676443233497",appId:"1:676443233497:web:006cb9cec48d3ba53972c8",measurementId:"G-8NZCSW9ZNB"});const n=dn(""),s=dn(""),i=fi(()=>!!(r.value&&r.value.email)),r=dn(null);var o=null;const a=XE();a.onAuthStateChanged(()=>{r.value=a.currentUser,r.value&&l()});function l(){if(o)return;o=Ly();const f=Sy(o,"lab_realtime_data");Ny(f,g=>{u.value=g.val()})}function c(){U0(a,n.value,s.value).then(f=>{l()})}const u=dn(null),h=dn(Date.now());return setInterval(()=>{h.value=Date.now()},1e3),(f,g)=>(nt(),Ut("div",null,[i.value?i.value&&u.value?(nt(),Ut("div",IC,[(nt(!0),Ut(Pe,null,Ha(u.value,(I,S)=>(nt(),Ut("div",{key:S},[pn(Ze(S)+" ",1),te("div",bC,[(nt(!0),Ut(Pe,null,Ha(I,(M,j)=>(nt(),pu(yC,{class:"mr-2",station:M,key:"1"+S+"-"+j,now:h.value},null,8,["station","now"]))),128))])]))),128))])):pp("",!0):(nt(),Ut("div",EC,[CC,Ba(te("input",{id:"email","onUpdate:modelValue":g[0]||(g[0]=I=>n.value=I),class:"border-2 border-black"},null,512),[[cl,n.value]]),wC,Ba(te("input",{id:"password","onUpdate:modelValue":g[1]||(g[1]=I=>s.value=I),type:"password",class:"border-2 border-black"},null,512),[[cl,s.value]]),te("button",{onClick:c,class:"bg-gray-300"},"Login")]))]))}}),Rd=Yp(TC);Rd.use(Zp());Rd.mount("#app");
