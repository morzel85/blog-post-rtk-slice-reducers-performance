(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function _(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var ze=typeof Symbol=="function"&&Symbol.observable||"@@observable",le=ze,Y=()=>Math.random().toString(36).substring(7).split("").join("."),Fe={INIT:`@@redux/INIT${Y()}`,REPLACE:`@@redux/REPLACE${Y()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Y()}`},B=Fe;function se(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function be(e,t,r){if(typeof e!="function")throw new Error(_(2));if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(_(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(_(1));return r(be)(e,t)}let n=e,i=t,o=new Map,c=o,s=0,f=!1;function a(){c===o&&(c=new Map,o.forEach((h,S)=>{c.set(S,h)}))}function u(){if(f)throw new Error(_(3));return i}function l(h){if(typeof h!="function")throw new Error(_(4));if(f)throw new Error(_(5));let S=!0;a();const O=s++;return c.set(O,h),function(){if(S){if(f)throw new Error(_(6));S=!1,a(),c.delete(O),o=null}}}function p(h){if(!se(h))throw new Error(_(7));if(typeof h.type>"u")throw new Error(_(8));if(typeof h.type!="string")throw new Error(_(17));if(f)throw new Error(_(9));try{f=!0,i=n(i,h)}finally{f=!1}return(o=c).forEach(O=>{O()}),h}function C(h){if(typeof h!="function")throw new Error(_(10));n=h,p({type:B.REPLACE})}function E(){const h=l;return{subscribe(S){if(typeof S!="object"||S===null)throw new Error(_(11));function O(){const y=S;y.next&&y.next(u())}return O(),{unsubscribe:h(O)}},[le](){return this}}}return p({type:B.INIT}),{dispatch:p,subscribe:l,getState:u,replaceReducer:C,[le]:E}}function xe(e){Object.keys(e).forEach(t=>{const r=e[t];if(typeof r(void 0,{type:B.INIT})>"u")throw new Error(_(12));if(typeof r(void 0,{type:B.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(_(13))})}function $e(e){const t=Object.keys(e),r={};for(let o=0;o<t.length;o++){const c=t[o];typeof e[c]=="function"&&(r[c]=e[c])}const n=Object.keys(r);let i;try{xe(r)}catch(o){i=o}return function(c={},s){if(i)throw i;let f=!1;const a={};for(let u=0;u<n.length;u++){const l=n[u],p=r[l],C=c[l],E=p(C,s);if(typeof E>"u")throw s&&s.type,new Error(_(14));a[l]=E,f=f||E!==C}return f=f||n.length!==Object.keys(c).length,f?a:c}}function L(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,r)=>(...n)=>t(r(...n)))}function je(...e){return t=>(r,n)=>{const i=t(r,n);let o=()=>{throw new Error(_(15))};const c={getState:i.getState,dispatch:(f,...a)=>o(f,...a)},s=e.map(f=>f(c));return o=L(...s)(i.dispatch),{...i,dispatch:o}}}function Be(e){return se(e)&&"type"in e&&typeof e.type=="string"}var Ee=Symbol.for("immer-nothing"),de=Symbol.for("immer-draftable"),g=Symbol.for("immer-state");function P(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var z=Object.getPrototypeOf;function k(e){return!!e&&!!e[g]}function R(e){var t;return e?Se(e)||Array.isArray(e)||!!e[de]||!!((t=e.constructor)!=null&&t[de])||X(e)||G(e):!1}var Le=Object.prototype.constructor.toString();function Se(e){if(!e||typeof e!="object")return!1;const t=z(e);if(t===null)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===Le}function K(e,t){q(e)===0?Reflect.ownKeys(e).forEach(r=>{t(r,e[r],e)}):e.forEach((r,n)=>t(n,r,e))}function q(e){const t=e[g];return t?t.type_:Array.isArray(e)?1:X(e)?2:G(e)?3:0}function V(e,t){return q(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Ce(e,t,r){const n=q(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function Ke(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function X(e){return e instanceof Map}function G(e){return e instanceof Set}function A(e){return e.copy_||e.base_}function ee(e,t){if(X(e))return new Map(e);if(G(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=Se(e);if(t===!0||t==="class_only"&&!r){const n=Object.getOwnPropertyDescriptors(e);delete n[g];let i=Reflect.ownKeys(n);for(let o=0;o<i.length;o++){const c=i[o],s=n[c];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(n[c]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[c]})}return Object.create(z(e),n)}else{const n=z(e);if(n!==null&&r)return{...e};const i=Object.create(n);return Object.assign(i,e)}}function ue(e,t=!1){return H(e)||k(e)||!R(e)||(q(e)>1&&(e.set=e.add=e.clear=e.delete=Ue),Object.freeze(e),t&&Object.entries(e).forEach(([r,n])=>ue(n,!0))),e}function Ue(){P(2)}function H(e){return Object.isFrozen(e)}var We={};function N(e){const t=We[e];return t||P(0,e),t}var x;function Pe(){return x}function qe(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function ye(e,t){t&&(N("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function te(e){re(e),e.drafts_.forEach(Xe),e.drafts_=null}function re(e){e===x&&(x=e.parent_)}function pe(e){return x=qe(x,e)}function Xe(e){const t=e[g];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function he(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return e!==void 0&&e!==r?(r[g].modified_&&(te(t),P(4)),R(e)&&(e=U(t,e),t.parent_||W(t,e)),t.patches_&&N("Patches").generateReplacementPatches_(r[g].base_,e,t.patches_,t.inversePatches_)):e=U(t,r,[]),te(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Ee?e:void 0}function U(e,t,r){if(H(t))return t;const n=t[g];if(!n)return K(t,(i,o)=>_e(e,n,t,i,o,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return W(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const i=n.copy_;let o=i,c=!1;n.type_===3&&(o=new Set(i),i.clear(),c=!0),K(o,(s,f)=>_e(e,n,i,s,f,r,c)),W(e,i,!1),r&&e.patches_&&N("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function _e(e,t,r,n,i,o,c){if(k(i)){const s=o&&t&&t.type_!==3&&!V(t.assigned_,n)?o.concat(n):void 0,f=U(e,i,s);if(Ce(r,n,f),k(f))e.canAutoFreeze_=!1;else return}else c&&r.add(i);if(R(i)&&!H(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;U(e,i),(!t||!t.scope_.parent_)&&typeof n!="symbol"&&Object.prototype.propertyIsEnumerable.call(r,n)&&W(e,i)}}function W(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&ue(t,r)}function Ge(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:Pe(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=n,o=fe;r&&(i=[n],o=$);const{revoke:c,proxy:s}=Proxy.revocable(i,o);return n.draft_=s,n.revoke_=c,s}var fe={get(e,t){if(t===g)return e;const r=A(e);if(!V(r,t))return He(e,r,t);const n=r[t];return e.finalized_||!R(n)?n:n===J(e.base_,t)?(Z(e),e.copy_[t]=ie(n,e)):n},has(e,t){return t in A(e)},ownKeys(e){return Reflect.ownKeys(A(e))},set(e,t,r){const n=Oe(A(e),t);if(n!=null&&n.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const i=J(A(e),t),o=i==null?void 0:i[g];if(o&&o.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(Ke(r,i)&&(r!==void 0||V(e.base_,t)))return!0;Z(e),ne(e)}return e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty(e,t){return J(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,Z(e),ne(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const r=A(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty(){P(11)},getPrototypeOf(e){return z(e.base_)},setPrototypeOf(){P(12)}},$={};K(fe,(e,t)=>{$[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});$.deleteProperty=function(e,t){return $.set.call(this,e,t,void 0)};$.set=function(e,t,r){return fe.set.call(this,e[0],t,r,e[0])};function J(e,t){const r=e[g];return(r?A(r):e)[t]}function He(e,t,r){var i;const n=Oe(t,r);return n?"value"in n?n.value:(i=n.get)==null?void 0:i.call(e.draft_):void 0}function Oe(e,t){if(!(t in e))return;let r=z(e);for(;r;){const n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=z(r)}}function ne(e){e.modified_||(e.modified_=!0,e.parent_&&ne(e.parent_))}function Z(e){e.copy_||(e.copy_=ee(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var Qe=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,r,n)=>{if(typeof t=="function"&&typeof r!="function"){const o=r;r=t;const c=this;return function(f=o,...a){return c.produce(f,u=>r.call(this,u,...a))}}typeof r!="function"&&P(6),n!==void 0&&typeof n!="function"&&P(7);let i;if(R(t)){const o=pe(this),c=ie(t,void 0);let s=!0;try{i=r(c),s=!1}finally{s?te(o):re(o)}return ye(o,n),he(i,o)}else if(!t||typeof t!="object"){if(i=r(t),i===void 0&&(i=t),i===Ee&&(i=void 0),this.autoFreeze_&&ue(i,!0),n){const o=[],c=[];N("Patches").generateReplacementPatches_(t,i,o,c),n(o,c)}return i}else P(1,t)},this.produceWithPatches=(t,r)=>{if(typeof t=="function")return(c,...s)=>this.produceWithPatches(c,f=>t(f,...s));let n,i;return[this.produce(t,r,(c,s)=>{n=c,i=s}),n,i]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){R(e)||P(8),k(e)&&(e=Ye(e));const t=pe(this),r=ie(e,void 0);return r[g].isManual_=!0,re(t),r}finishDraft(e,t){const r=e&&e[g];(!r||!r.isManual_)&&P(9);const{scope_:n}=r;return ye(n,t),he(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const i=t[r];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}r>-1&&(t=t.slice(r+1));const n=N("Patches").applyPatches_;return k(e)?n(e,t):this.produce(e,i=>n(i,t))}};function ie(e,t){const r=X(e)?N("MapSet").proxyMap_(e,t):G(e)?N("MapSet").proxySet_(e,t):Ge(e,t);return(t?t.scope_:Pe()).drafts_.push(r),r}function Ye(e){return k(e)||P(10,e),ve(e)}function ve(e){if(!R(e)||H(e))return e;const t=e[g];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=ee(e,t.scope_.immer_.useStrictShallowCopy_)}else r=ee(e,!0);return K(r,(n,i)=>{Ce(r,n,ve(i))}),t&&(t.finalized_=!1),r}var b=new Qe,Te=b.produce;b.produceWithPatches.bind(b);b.setAutoFreeze.bind(b);b.setUseStrictShallowCopy.bind(b);b.applyPatches.bind(b);b.createDraft.bind(b);b.finishDraft.bind(b);function Re(e){return({dispatch:r,getState:n})=>i=>o=>typeof o=="function"?o(r,n,e):i(o)}var Je=Re(),Ze=Re,Ve=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?L:L.apply(null,arguments)};function me(e,t){function r(...n){if(t){let i=t(...n);if(!i)throw new Error(v(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:n[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=n=>Be(n)&&n.type===e,r}var Me=class F extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,F.prototype)}static get[Symbol.species](){return F}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new F(...t[0].concat(this)):new F(...t.concat(this))}};function we(e){return R(e)?Te(e,()=>{}):e}function ge(e,t,r){if(e.has(t)){let i=e.get(t);return r.update&&(i=r.update(i,t,e),e.set(t,i)),i}if(!r.insert)throw new Error(v(10));const n=r.insert(t,e);return e.set(t,n),n}function et(e){return typeof e=="boolean"}var tt=()=>function(t){const{thunk:r=!0,immutableCheck:n=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=t??{};let c=new Me;return r&&(et(r)?c.push(Je):c.push(Ze(r.extraArgument))),c},rt="RTK_autoBatch",Ae=e=>t=>{setTimeout(t,e)},nt=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Ae(10),it=(e={type:"raf"})=>t=>(...r)=>{const n=t(...r);let i=!0,o=!1,c=!1;const s=new Set,f=e.type==="tick"?queueMicrotask:e.type==="raf"?nt:e.type==="callback"?e.queueNotification:Ae(e.timeout),a=()=>{c=!1,o&&(o=!1,s.forEach(u=>u()))};return Object.assign({},n,{subscribe(u){const l=()=>i&&u(),p=n.subscribe(l);return s.add(u),()=>{p(),s.delete(u)}},dispatch(u){var l;try{return i=!((l=u==null?void 0:u.meta)!=null&&l[rt]),o=!i,o&&(c||(c=!0,f(a))),n.dispatch(u)}finally{i=!0}}})},ot=e=>function(r){const{autoBatch:n=!0}=r??{};let i=new Me(e);return n&&i.push(it(typeof n=="object"?n:void 0)),i};function ct(e){const t=tt(),{reducer:r=void 0,middleware:n,devTools:i=!0,preloadedState:o=void 0,enhancers:c=void 0}=e||{};let s;if(typeof r=="function")s=r;else if(se(r))s=$e(r);else throw new Error(v(1));let f;typeof n=="function"?f=n(t):f=t();let a=L;i&&(a=Ve({trace:!1,...typeof i=="object"&&i}));const u=je(...f),l=ot(u);let p=typeof c=="function"?c(l):l();const C=a(...p);return be(s,o,C)}function De(e){const t={},r=[];let n;const i={addCase(o,c){const s=typeof o=="string"?o:o.type;if(!s)throw new Error(v(28));if(s in t)throw new Error(v(29));return t[s]=c,i},addMatcher(o,c){return r.push({matcher:o,reducer:c}),i},addDefaultCase(o){return n=o,i}};return e(i),[t,r,n]}function st(e){return typeof e=="function"}function ut(e,t){let[r,n,i]=De(t),o;if(st(e))o=()=>we(e());else{const s=we(e);o=()=>s}function c(s=o(),f){let a=[r[f.type],...n.filter(({matcher:u})=>u(f)).map(({reducer:u})=>u)];return a.filter(u=>!!u).length===0&&(a=[i]),a.reduce((u,l)=>{if(l)if(k(u)){const C=l(u,f);return C===void 0?u:C}else{if(R(u))return Te(u,p=>l(p,f));{const p=l(u,f);if(p===void 0){if(u===null)return u;throw Error("A case reducer on a non-draftable value must not return undefined")}return p}}return u},s)}return c.getInitialState=o,c}var ft=Symbol.for("rtk-slice-createasyncthunk");function at(e,t){return`${e}/${t}`}function lt({creators:e}={}){var r;const t=(r=e==null?void 0:e.asyncThunk)==null?void 0:r[ft];return function(i){const{name:o,reducerPath:c=o}=i;if(!o)throw new Error(v(11));typeof process<"u";const s=(typeof i.reducers=="function"?i.reducers(pt()):i.reducers)||{},f=Object.keys(s),a={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},u={addCase(d,y){const m=typeof d=="string"?d:d.type;if(!m)throw new Error(v(12));if(m in a.sliceCaseReducersByType)throw new Error(v(13));return a.sliceCaseReducersByType[m]=y,u},addMatcher(d,y){return a.sliceMatchers.push({matcher:d,reducer:y}),u},exposeAction(d,y){return a.actionCreators[d]=y,u},exposeCaseReducer(d,y){return a.sliceCaseReducersByName[d]=y,u}};f.forEach(d=>{const y=s[d],m={reducerName:d,type:at(o,d),createNotation:typeof i.reducers=="function"};_t(y)?wt(m,y,u,t):ht(m,y,u)});function l(){const[d={},y=[],m=void 0]=typeof i.extraReducers=="function"?De(i.extraReducers):[i.extraReducers],M={...d,...a.sliceCaseReducersByType};return ut(i.initialState,T=>{for(let w in M)T.addCase(w,M[w]);for(let w of a.sliceMatchers)T.addMatcher(w.matcher,w.reducer);for(let w of y)T.addMatcher(w.matcher,w.reducer);m&&T.addDefaultCase(m)})}const p=d=>d,C=new Map;let E;function Q(d,y){return E||(E=l()),E(d,y)}function h(){return E||(E=l()),E.getInitialState()}function S(d,y=!1){function m(T){let w=T[d];return typeof w>"u"&&y&&(w=h()),w}function M(T=p){const w=ge(C,y,{insert:()=>new WeakMap});return ge(w,T,{insert:()=>{const ae={};for(const[Ne,Ie]of Object.entries(i.selectors??{}))ae[Ne]=dt(Ie,T,h,y);return ae}})}return{reducerPath:d,getSelectors:M,get selectors(){return M(m)},selectSlice:m}}const O={name:o,reducer:Q,actions:a.actionCreators,caseReducers:a.sliceCaseReducersByName,getInitialState:h,...S(c),injectInto(d,{reducerPath:y,...m}={}){const M=y??c;return d.inject({reducerPath:M,reducer:Q},m),{...O,...S(M,!0)}}};return O}}function dt(e,t,r,n){function i(o,...c){let s=t(o);return typeof s>"u"&&n&&(s=r()),e(s,...c)}return i.unwrapped=e,i}var yt=lt();function pt(){function e(t,r){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...r}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...r){return t(...r)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,r){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:r}},asyncThunk:e}}function ht({type:e,reducerName:t,createNotation:r},n,i){let o,c;if("reducer"in n){if(r&&!mt(n))throw new Error(v(17));o=n.reducer,c=n.prepare}else o=n;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,c?me(e,c):me(e))}function _t(e){return e._reducerDefinitionType==="asyncThunk"}function mt(e){return e._reducerDefinitionType==="reducerWithPrepare"}function wt({type:e,reducerName:t},r,n,i){if(!i)throw new Error(v(18));const{payloadCreator:o,fulfilled:c,pending:s,rejected:f,settled:a,options:u}=r,l=i(e,o,u);n.exposeAction(t,l),c&&n.addCase(l.fulfilled,c),s&&n.addCase(l.pending,s),f&&n.addCase(l.rejected,f),a&&n.addMatcher(l.settled,a),n.exposeCaseReducer(t,{fulfilled:c||j,pending:s||j,rejected:f||j,settled:a||j})}function j(){}function v(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const D=500,I=25,gt=()=>{const e=[];let t=0;for(let i=0;i<D;i++){const o={},c={};for(let u=0;u<I;u++)o[`value_${u}`]=0,c[`changed_${u}`]=(l,p)=>{l[`value_${u}`]=p.payload};const s=performance.now(),f=yt({name:`slice_${i}`,initialState:o,reducers:c}),a=performance.now();t+=a-s,e.push(f)}console.log(performance.measure("create-slices",{start:0,duration:t}));const r=e.reduce((i,{name:o,reducer:c})=>(i[o]=c,i),{});performance.mark("configure-store-start");const n=ct({reducer:r});return performance.mark("configure-store-end"),console.log(performance.measure("configure-store",{start:"configure-store-start",end:"configure-store-end",detail:{slices:D,actionsPerSlice:I,actionsTotal:D*I,statePropertiesTotal:D+D*I}})),n.subscribe(()=>{performance.mark("action-end"),console.log(performance.measure("action","action-start","action-end"))}),n};let oe;const ce=document.getElementById("setupStore"),ke=document.getElementById("randomChange");ce.textContent+=` (slices: ${D}, actions per slice: ${I})`;ce.addEventListener("click",()=>{oe=gt(),ce.disabled=!0,ke.disabled=!1});ke.addEventListener("click",()=>{if(oe){const e=`slice_${Math.floor(Math.random()*D)}`,t=`changed_${Math.floor(Math.random()*I)}`,r={type:`${e}/${t}`,payload:Math.random()};performance.mark("action-start"),oe.dispatch(r)}});