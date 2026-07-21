(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lt=globalThis,Ot=lt.ShadowRoot&&(lt.ShadyCSS===void 0||lt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,zt=Symbol(),Rt=new WeakMap;let ie=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==zt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Ot&&t===void 0){const o=e!==void 0&&e.length===1;o&&(t=Rt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Rt.set(e,t))}return t}toString(){return this.cssText}};const ae=r=>new ie(typeof r=="string"?r:r+"",void 0,zt),y=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((o,s,i)=>o+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[i+1],r[0]);return new ie(e,r,zt)},ke=(r,t)=>{if(Ot)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const o=document.createElement("style"),s=lt.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=e.cssText,r.appendChild(o)}},Vt=Ot?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return ae(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Pe,defineProperty:Oe,getOwnPropertyDescriptor:ze,getOwnPropertyNames:Le,getOwnPropertySymbols:Me,getPrototypeOf:De}=Object,E=globalThis,jt=E.trustedTypes,Te=jt?jt.emptyScript:"",vt=E.reactiveElementPolyfillSupport,Z=(r,t)=>r,dt={toAttribute(r,t){switch(t){case Boolean:r=r?Te:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},Lt=(r,t)=>!Pe(r,t),Ht={attribute:!0,type:String,converter:dt,reflect:!1,useDefault:!1,hasChanged:Lt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),E.litPropertyMetadata??(E.litPropertyMetadata=new WeakMap);let B=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Ht){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),s=this.getPropertyDescriptor(t,o,e);s!==void 0&&Oe(this.prototype,t,s)}}static getPropertyDescriptor(t,e,o){const{get:s,set:i}=ze(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get:s,set(a){const n=s==null?void 0:s.call(this);i==null||i.call(this,a),this.requestUpdate(t,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ht}static _$Ei(){if(this.hasOwnProperty(Z("elementProperties")))return;const t=De(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Z("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Z("properties"))){const e=this.properties,o=[...Le(e),...Me(e)];for(const s of o)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[o,s]of e)this.elementProperties.set(o,s)}this._$Eh=new Map;for(const[e,o]of this.elementProperties){const s=this._$Eu(e,o);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const s of o)e.unshift(Vt(s))}else t!==void 0&&e.push(Vt(t));return e}static _$Eu(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ke(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var o;return(o=e.hostConnected)==null?void 0:o.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var o;return(o=e.hostDisconnected)==null?void 0:o.call(e)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ET(t,e){var i;const o=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,o);if(s!==void 0&&o.reflect===!0){const a=(((i=o.converter)==null?void 0:i.toAttribute)!==void 0?o.converter:dt).toAttribute(e,o.type);this._$Em=t,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(t,e){var i,a;const o=this.constructor,s=o._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=o.getPropertyOptions(s),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)==null?void 0:i.fromAttribute)!==void 0?n.converter:dt;this._$Em=s;const u=l.fromAttribute(e,n.type);this[s]=u??((a=this._$Ej)==null?void 0:a.get(s))??u,this._$Em=null}}requestUpdate(t,e,o,s=!1,i){var a;if(t!==void 0){const n=this.constructor;if(s===!1&&(i=this[t]),o??(o=n.getPropertyOptions(t)),!((o.hasChanged??Lt)(i,e)||o.useDefault&&o.reflect&&i===((a=this._$Ej)==null?void 0:a.get(t))&&!this.hasAttribute(n._$Eu(t,o))))return;this.C(t,e,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:o,reflect:s,wrapped:i},a){o&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,a??e??this[t]),i!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||o||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,a]of s){const{wrapped:n}=a,l=this[i];n!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,a,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(o=this._$EO)==null||o.forEach(s=>{var i;return(i=s.hostUpdate)==null?void 0:i.call(s)}),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(o=>{var s;return(s=o.hostUpdated)==null?void 0:s.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};B.elementStyles=[],B.shadowRootOptions={mode:"open"},B[Z("elementProperties")]=new Map,B[Z("finalized")]=new Map,vt==null||vt({ReactiveElement:B}),(E.reactiveElementVersions??(E.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=globalThis,Ft=r=>r,ut=J.trustedTypes,qt=ut?ut.createPolicy("lit-html",{createHTML:r=>r}):void 0,ne="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,le="?"+S,Ue=`<${le}>`,M=document,K=()=>M.createComment(""),Q=r=>r===null||typeof r!="object"&&typeof r!="function",Mt=Array.isArray,Ie=r=>Mt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",_t=`[ 	
\f\r]`,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Wt=/-->/g,Gt=/>/g,P=RegExp(`>|${_t}(?:([^\\s"'>=/]+)(${_t}*=${_t}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Zt=/'/g,Jt=/"/g,ce=/^(?:script|style|textarea|title)$/i,Ne=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),c=Ne(1),k=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),Kt=new WeakMap,z=M.createTreeWalker(M,129);function de(r,t){if(!Mt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return qt!==void 0?qt.createHTML(t):t}const Be=(r,t)=>{const e=r.length-1,o=[];let s,i=t===2?"<svg>":t===3?"<math>":"",a=j;for(let n=0;n<e;n++){const l=r[n];let u,b,p=-1,w=0;for(;w<l.length&&(a.lastIndex=w,b=a.exec(l),b!==null);)w=a.lastIndex,a===j?b[1]==="!--"?a=Wt:b[1]!==void 0?a=Gt:b[2]!==void 0?(ce.test(b[2])&&(s=RegExp("</"+b[2],"g")),a=P):b[3]!==void 0&&(a=P):a===P?b[0]===">"?(a=s??j,p=-1):b[1]===void 0?p=-2:(p=a.lastIndex-b[2].length,u=b[1],a=b[3]===void 0?P:b[3]==='"'?Jt:Zt):a===Jt||a===Zt?a=P:a===Wt||a===Gt?a=j:(a=P,s=void 0);const C=a===P&&r[n+1].startsWith("/>")?" ":"";i+=a===j?l+Ue:p>=0?(o.push(u),l.slice(0,p)+ne+l.slice(p)+S+C):l+S+(p===-2?n:C)}return[de(r,i+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};class X{constructor({strings:t,_$litType$:e},o){let s;this.parts=[];let i=0,a=0;const n=t.length-1,l=this.parts,[u,b]=Be(t,e);if(this.el=X.createElement(u,o),z.currentNode=this.el.content,e===2||e===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(s=z.nextNode())!==null&&l.length<n;){if(s.nodeType===1){if(s.hasAttributes())for(const p of s.getAttributeNames())if(p.endsWith(ne)){const w=b[a++],C=s.getAttribute(p).split(S),st=/([.?@])?(.*)/.exec(w);l.push({type:1,index:i,name:st[2],strings:C,ctor:st[1]==="."?Ve:st[1]==="?"?je:st[1]==="@"?He:gt}),s.removeAttribute(p)}else p.startsWith(S)&&(l.push({type:6,index:i}),s.removeAttribute(p));if(ce.test(s.tagName)){const p=s.textContent.split(S),w=p.length-1;if(w>0){s.textContent=ut?ut.emptyScript:"";for(let C=0;C<w;C++)s.append(p[C],K()),z.nextNode(),l.push({type:2,index:++i});s.append(p[w],K())}}}else if(s.nodeType===8)if(s.data===le)l.push({type:2,index:i});else{let p=-1;for(;(p=s.data.indexOf(S,p+1))!==-1;)l.push({type:7,index:i}),p+=S.length-1}i++}}static createElement(t,e){const o=M.createElement("template");return o.innerHTML=t,o}}function V(r,t,e=r,o){var a,n;if(t===k)return t;let s=o!==void 0?(a=e._$Co)==null?void 0:a[o]:e._$Cl;const i=Q(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==i&&((n=s==null?void 0:s._$AO)==null||n.call(s,!1),i===void 0?s=void 0:(s=new i(r),s._$AT(r,e,o)),o!==void 0?(e._$Co??(e._$Co=[]))[o]=s:e._$Cl=s),s!==void 0&&(t=V(r,s._$AS(r,t.values),s,o)),t}class Re{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,s=((t==null?void 0:t.creationScope)??M).importNode(e,!0);z.currentNode=s;let i=z.nextNode(),a=0,n=0,l=o[0];for(;l!==void 0;){if(a===l.index){let u;l.type===2?u=new tt(i,i.nextSibling,this,t):l.type===1?u=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(u=new Fe(i,this,t)),this._$AV.push(u),l=o[++n]}a!==(l==null?void 0:l.index)&&(i=z.nextNode(),a++)}return z.currentNode=M,s}p(t){let e=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class tt{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,o,s){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=V(this,t,e),Q(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==k&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ie(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==g&&Q(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){var i;const{values:e,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=X.createElement(de(o.h,o.h[0]),this.options)),o);if(((i=this._$AH)==null?void 0:i._$AD)===s)this._$AH.p(e);else{const a=new Re(s,this),n=a.u(this.options);a.p(e),this.T(n),this._$AH=a}}_$AC(t){let e=Kt.get(t.strings);return e===void 0&&Kt.set(t.strings,e=new X(t)),e}k(t){Mt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,s=0;for(const i of t)s===e.length?e.push(o=new tt(this.O(K()),this.O(K()),this,this.options)):o=e[s],o._$AI(i),s++;s<e.length&&(this._$AR(o&&o._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,e);t!==this._$AB;){const s=Ft(t).nextSibling;Ft(t).remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class gt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,s,i){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=g}_$AI(t,e=this,o,s){const i=this.strings;let a=!1;if(i===void 0)t=V(this,t,e,0),a=!Q(t)||t!==this._$AH&&t!==k,a&&(this._$AH=t);else{const n=t;let l,u;for(t=i[0],l=0;l<i.length-1;l++)u=V(this,n[o+l],e,l),u===k&&(u=this._$AH[l]),a||(a=!Q(u)||u!==this._$AH[l]),u===g?t=g:t!==g&&(t+=(u??"")+i[l+1]),this._$AH[l]=u}a&&!s&&this.j(t)}j(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ve extends gt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===g?void 0:t}}class je extends gt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==g)}}class He extends gt{constructor(t,e,o,s,i){super(t,e,o,s,i),this.type=5}_$AI(t,e=this){if((t=V(this,t,e,0)??g)===k)return;const o=this._$AH,s=t===g&&o!==g||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,i=t!==g&&(o===g||s);s&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Fe{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t)}}const yt=J.litHtmlPolyfillSupport;yt==null||yt(X,tt),(J.litHtmlVersions??(J.litHtmlVersions=[])).push("3.3.3");const qe=(r,t,e)=>{const o=(e==null?void 0:e.renderBefore)??t;let s=o._$litPart$;if(s===void 0){const i=(e==null?void 0:e.renderBefore)??null;o._$litPart$=s=new tt(t.insertBefore(K(),i),i,void 0,e??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=globalThis;let v=class extends B{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=qe(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return k}};var se;v._$litElement$=!0,v.finalized=!0,(se=L.litElementHydrateSupport)==null||se.call(L,{LitElement:v});const $t=L.litElementPolyfillSupport;$t==null||$t({LitElement:v});(L.litElementVersions??(L.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const We={attribute:!0,type:String,converter:dt,reflect:!1,hasChanged:Lt},Ge=(r=We,t,e)=>{const{kind:o,metadata:s}=e;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),o==="setter"&&((r=Object.create(r)).wrapped=!0),i.set(e.name,r),o==="accessor"){const{name:a}=e;return{set(n){const l=t.get.call(this);t.set.call(this,n),this.requestUpdate(a,l,r,!0,n)},init(n){return n!==void 0&&this.C(a,void 0,r,n),n}}}if(o==="setter"){const{name:a}=e;return function(n){const l=this[a];t.call(this,n),this.requestUpdate(a,l,r,!0,n)}}throw Error("Unsupported decorator location: "+o)};function d(r){return(t,e)=>typeof e=="object"?Ge(r,t,e):((o,s,i)=>{const a=s.hasOwnProperty(i);return s.constructor.createProperty(i,o),a?Object.getOwnPropertyDescriptor(s,i):void 0})(r,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _(r){return d({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ze=(r,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(r,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function mt(r,t){return(e,o,s)=>{const i=a=>{var n;return((n=a.renderRoot)==null?void 0:n.querySelector(r))??null};return Ze(e,o,{get(){return i(this)}})}}function Je(r){if(!r)return"";const t=new URLSearchParams;for(const[o,s]of Object.entries(r))s!=null&&t.set(o,String(s));const e=t.toString();return e?`?${e}`:""}async function it(r,t={}){const{method:e="GET",params:o,body:s,headers:i={},signal:a}=t,n={method:e,signal:a,headers:{Accept:"application/json",...i}};s!==void 0&&(n.headers["Content-Type"]="application/json",n.body=JSON.stringify(s));const l=await fetch(r+Je(o),n);if(!l.ok){const b=await l.text().catch(()=>"");throw new Error(`API ${e} ${r} failed [${l.status}]: ${b}`)}return(l.headers.get("content-type")??"").includes("application/json")?await l.json():await l.text()}function ht(){const r={};return new URLSearchParams(location.search).forEach((t,e)=>r[e]=t),r}function H(r,t=!1){const e=new URLSearchParams(location.search);for(const[i,a]of Object.entries(r))a===""||a===void 0||a===null?e.delete(i):e.set(i,a);const o=e.toString(),s=`${location.pathname}${o?`?${o}`:""}${location.hash}`;t?history.replaceState(null,"",s):history.pushState(null,"",s),window.dispatchEvent(new CustomEvent("params-change",{detail:ht()}))}window.addEventListener("popstate",()=>{window.dispatchEvent(new CustomEvent("params-change",{detail:ht()}))});var Ke=Object.defineProperty,Qe=Object.getOwnPropertyDescriptor,Dt=(r,t,e,o)=>{for(var s=o>1?void 0:o?Qe(t,e):t,i=r.length-1,a;i>=0;i--)(a=r[i])&&(s=(o?a(t,e,s):a(s))||s);return o&&s&&Ke(t,e,s),s};let Y=class extends v{constructor(){super(...arguments),this.facet={name:"",values:[]},this._expanded=!1}_hasExt(){return!!(this.facet.extvalues&&this.facet.extvalues.length>0)}willUpdate(r){r.has("facet")&&(this._expanded=!1)}_row(r){const t=`${this.facet.name}:${r.name}`;return c`
      <div class="row">
        <label title=${r.name}>
          <input
            type="checkbox"
            .checked=${!!r.selected}
            @change=${e=>this._onToggle(e,r)}
            name=${t}
          />
          <span class="name">${r.name}</span>
        </label>
        <span class="counter">${r.count}</span>
      </div>
    `}_onToggle(r,t){const e=r.target.checked;t.selected=e,this.dispatchEvent(new CustomEvent("facet-toggle",{detail:{facet:this.facet.name,value:t,checked:e},bubbles:!0,composed:!0})),this.requestUpdate()}render(){const r=this.facet.values??[],t=this.facet.extvalues??[];return c`
      ${r.map(e=>this._row(e))}
      <div class="ext" ?hidden=${!this._expanded}>
        ${t.map(e=>this._row(e))}
      </div>
      <button
        class="toggle"
        ?hidden=${!this._hasExt()}
        @click=${()=>this._expanded=!this._expanded}
      >
        ${this._expanded?"less…":"more…"}
      </button>
    `}};Y.styles=y`
    :host { display: block; padding-left: 5px; font-size: 12px; }
    .row {
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 6px;
      padding: 2px 0;
    }
    label {
      display: flex;
      align-items: center;
      gap: 6px;
      flex: 1;
      min-width: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: pointer;
    }
    label span.name {
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .counter {
      background: #ddd;
      border-radius: 2px;
      padding: 0 6px;
      font-size: 11px;
      min-width: 24px;
      text-align: center;
    }
    button.toggle {
      appearance: none;
      background: none;
      border: none;
      color: #1565c0;
      cursor: pointer;
      font: inherit;
      padding: 4px 0;
    }
    button.toggle[hidden] { display: none; }
    .ext { overflow: hidden; transition: max-height 200ms ease; }
  `;Dt([d({attribute:!1})],Y.prototype,"facet",2);Dt([_()],Y.prototype,"_expanded",2);Y=Dt([U("facet-selector")],Y);var Xe=Object.defineProperty,Ye=Object.getOwnPropertyDescriptor,ue=(r,t,e,o)=>{for(var s=o>1?void 0:o?Ye(t,e):t,i=r.length-1,a;i>=0;i--)(a=r[i])&&(s=(o?a(t,e,s):a(s))||s);return o&&s&&Xe(t,e,s),s};let pt=class extends v{constructor(){super(...arguments),this.facet={name:""}}render(){return c`
      <div class="card">
        <div class="title"><span>${this.facet.name}</span></div>
        ${this.facet.min!==void 0?c`<div class="range-todo">Range facet — Phase 2c.</div>`:c`<facet-selector .facet=${this.facet}></facet-selector>`}
      </div>
    `}};pt.styles=y`
    :host { display: block; }
    .card {
      width: 100%;
      background: #fff;
      margin: 5px 0;
      padding: 6px 8px 10px;
      border-radius: 3px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
      font-size: 12px;
    }
    .title {
      display: block;
      height: 30px;
      margin: 0 8px;
    }
    .title span {
      font-weight: 600;
      font-size: 15px;
      line-height: 30px;
    }
    .range-todo {
      color: #888;
      font-style: italic;
      padding: 4px 8px;
    }
  `;ue([d({attribute:!1})],pt.prototype,"facet",2);pt=ue([U("facet-card")],pt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const he={ATTRIBUTE:1,CHILD:2},pe=r=>(...t)=>({_$litDirective$:r,values:t});let fe=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let St=class extends fe{constructor(t){if(super(t),this.it=g,t.type!==he.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===g||t==null)return this._t=void 0,this.it=t;if(t===k)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};St.directiveName="unsafeHTML",St.resultType=1;const tr=pe(St);var er=Object.defineProperty,rr=Object.getOwnPropertyDescriptor,be=(r,t,e,o)=>{for(var s=o>1?void 0:o?rr(t,e):t,i=r.length-1,a;i>=0;i--)(a=r[i])&&(s=(o?a(t,e,s):a(s))||s);return o&&s&&er(t,e,s),s};let ft=class extends v{constructor(){super(...arguments),this.snippet='Hello <span class="hi">World</span>!'}render(){return c`<div>${tr(this.snippet)}</div>`}};ft.styles=y`
    :host { display: block; }
    .hi { background-color: ${ae("yellow")}; }
  `;be([d({type:String})],ft.prototype,"snippet",2);ft=be([U("search-snippet-highlight")],ft);var or=y`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;const Et=new Set,R=new Map;let O,Tt="ltr",Ut="en";const ge=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(ge){const r=new MutationObserver(ve);Tt=document.documentElement.dir||"ltr",Ut=document.documentElement.lang||navigator.language,r.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function me(...r){r.map(t=>{const e=t.$code.toLowerCase();R.has(e)?R.set(e,Object.assign(Object.assign({},R.get(e)),t)):R.set(e,t),O||(O=t)}),ve()}function ve(){ge&&(Tt=document.documentElement.dir||"ltr",Ut=document.documentElement.lang||navigator.language),[...Et.keys()].map(r=>{typeof r.requestUpdate=="function"&&r.requestUpdate()})}let sr=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Et.add(this.host)}hostDisconnected(){Et.delete(this.host)}dir(){return`${this.host.dir||Tt}`.toLowerCase()}lang(){return`${this.host.lang||Ut}`.toLowerCase()}getTranslationData(t){var e,o;let s;try{s=new Intl.Locale(t.replace(/_/g,"-"))}catch{return{locale:void 0,language:"",region:"",primary:void 0,secondary:void 0}}const i=s.language.toLowerCase(),a=(o=(e=s.region)===null||e===void 0?void 0:e.toLowerCase())!==null&&o!==void 0?o:"",n=R.get(`${i}-${a}`),l=R.get(i);return{locale:s,language:i,region:a,primary:n,secondary:l}}exists(t,e){var o;const{primary:s,secondary:i}=this.getTranslationData((o=e.lang)!==null&&o!==void 0?o:this.lang());return e=Object.assign({includeFallback:!1},e),!!(s&&s[t]||i&&i[t]||e.includeFallback&&O&&O[t])}term(t,...e){const{primary:o,secondary:s}=this.getTranslationData(this.lang());let i;if(o&&o[t])i=o[t];else if(s&&s[t])i=s[t];else if(O&&O[t])i=O[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof i=="function"?i(...e):i}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,e)}};var _e={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(r,t)=>`Go to slide ${r} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:r=>r===0?"No options selected":r===1?"1 option selected":`${r} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:r=>`Slide ${r}`,toggleColorFormat:"Toggle color format"};me(_e);var ir=_e,ye=class extends sr{};me(ir);var It=y`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,$e=Object.defineProperty,ar=Object.defineProperties,nr=Object.getOwnPropertyDescriptor,lr=Object.getOwnPropertyDescriptors,Qt=Object.getOwnPropertySymbols,cr=Object.prototype.hasOwnProperty,dr=Object.prototype.propertyIsEnumerable,we=r=>{throw TypeError(r)},Xt=(r,t,e)=>t in r?$e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,et=(r,t)=>{for(var e in t||(t={}))cr.call(t,e)&&Xt(r,e,t[e]);if(Qt)for(var e of Qt(t))dr.call(t,e)&&Xt(r,e,t[e]);return r},xe=(r,t)=>ar(r,lr(t)),h=(r,t,e,o)=>{for(var s=o>1?void 0:o?nr(t,e):t,i=r.length-1,a;i>=0;i--)(a=r[i])&&(s=(o?a(t,e,s):a(s))||s);return o&&s&&$e(t,e,s),s},Ae=(r,t,e)=>t.has(r)||we("Cannot "+e),ur=(r,t,e)=>(Ae(r,t,"read from private field"),t.get(r)),hr=(r,t,e)=>t.has(r)?we("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(r):t.set(r,e),pr=(r,t,e,o)=>(Ae(r,t,"write to private field"),t.set(r,e),e),ct,I=class extends v{constructor(){super(),hr(this,ct,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([r,t])=>{this.constructor.define(r,t)})}emit(r,t){const e=new CustomEvent(r,et({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(e),e}static define(r,t=this,e={}){const o=customElements.get(r);if(!o){try{customElements.define(r,t,e)}catch{customElements.define(r,class extends t{},e)}return}let s=" (unknown version)",i=s;"version"in t&&t.version&&(s=" v"+t.version),"version"in o&&o.version&&(i=" v"+o.version),!(s&&i&&s===i)&&console.warn(`Attempted to register <${r}>${s}, but <${r}>${i} has already been registered.`)}attributeChangedCallback(r,t,e){ur(this,ct)||(this.constructor.elementProperties.forEach((o,s)=>{o.reflect&&this[s]!=null&&this.initialReflectedProperties.set(s,this[s])}),pr(this,ct,!0)),super.attributeChangedCallback(r,t,e)}willUpdate(r){super.willUpdate(r),this.initialReflectedProperties.forEach((t,e)=>{r.has(e)&&this[e]==null&&(this[e]=t)})}};ct=new WeakMap;I.version="2.20.1";I.dependencies={};h([d()],I.prototype,"dir",2);h([d()],I.prototype,"lang",2);var Ce=class extends I{constructor(){super(...arguments),this.localize=new ye(this)}render(){return c`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Ce.styles=[It,or];var F=new WeakMap,q=new WeakMap,W=new WeakMap,wt=new WeakSet,at=new WeakMap,fr=class{constructor(r,t){this.handleFormData=e=>{const o=this.options.disabled(this.host),s=this.options.name(this.host),i=this.options.value(this.host),a=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!o&&!a&&typeof s=="string"&&s.length>0&&typeof i<"u"&&(Array.isArray(i)?i.forEach(n=>{e.formData.append(s,n.toString())}):e.formData.append(s,i.toString()))},this.handleFormSubmit=e=>{var o;const s=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&((o=F.get(this.form))==null||o.forEach(a=>{this.setUserInteracted(a,!0)})),this.form&&!this.form.noValidate&&!s&&!i(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),at.set(this.host,[])},this.handleInteraction=e=>{const o=at.get(this.host);o.includes(e.type)||o.push(e.type),o.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const o of e)if(typeof o.checkValidity=="function"&&!o.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const o of e)if(typeof o.reportValidity=="function"&&!o.reportValidity())return!1}return!0},(this.host=r).addController(this),this.options=et({form:e=>{const o=e.form;if(o){const i=e.getRootNode().querySelector(`#${o}`);if(i)return i}return e.closest("form")},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>{var o;return(o=e.disabled)!=null?o:!1},reportValidity:e=>typeof e.reportValidity=="function"?e.reportValidity():!0,checkValidity:e=>typeof e.checkValidity=="function"?e.checkValidity():!0,setValue:(e,o)=>e.value=o,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const r=this.options.form(this.host);r&&this.attachForm(r),at.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),at.delete(this.host),this.options.assumeInteractionOn.forEach(r=>{this.host.removeEventListener(r,this.handleInteraction)})}hostUpdated(){const r=this.options.form(this.host);r||this.detachForm(),r&&this.form!==r&&(this.detachForm(),this.attachForm(r)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(r){r?(this.form=r,F.has(this.form)?F.get(this.form).add(this.host):F.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),q.has(this.form)||(q.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),W.has(this.form)||(W.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const r=F.get(this.form);r&&(r.delete(this.host),r.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),q.has(this.form)&&(this.form.reportValidity=q.get(this.form),q.delete(this.form)),W.has(this.form)&&(this.form.checkValidity=W.get(this.form),W.delete(this.form)),this.form=void 0))}setUserInteracted(r,t){t?wt.add(r):wt.delete(r),r.requestUpdate()}doAction(r,t){if(this.form){const e=document.createElement("button");e.type=r,e.style.position="absolute",e.style.width="0",e.style.height="0",e.style.clipPath="inset(50%)",e.style.overflow="hidden",e.style.whiteSpace="nowrap",t&&(e.name=t.name,e.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{t.hasAttribute(o)&&e.setAttribute(o,t.getAttribute(o))})),this.form.append(e),e.click(),e.remove()}}getForm(){var r;return(r=this.form)!=null?r:null}reset(r){this.doAction("reset",r)}submit(r){this.doAction("submit",r)}setValidity(r){const t=this.host,e=!!wt.has(t),o=!!t.required;t.toggleAttribute("data-required",o),t.toggleAttribute("data-optional",!o),t.toggleAttribute("data-invalid",!r),t.toggleAttribute("data-valid",r),t.toggleAttribute("data-user-invalid",!r&&e),t.toggleAttribute("data-user-valid",r&&e)}updateValidity(){const r=this.host;this.setValidity(r.validity.valid)}emitInvalidEvent(r){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});r||t.preventDefault(),this.host.dispatchEvent(t)||r==null||r.preventDefault()}},Nt=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(xe(et({},Nt),{valid:!1,valueMissing:!0}));Object.freeze(xe(et({},Nt),{valid:!1,customError:!0}));var br=y`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,gr=class{constructor(r,...t){this.slotNames=[],this.handleSlotChange=e=>{const o=e.target;(this.slotNames.includes("[default]")&&!o.name||o.name&&this.slotNames.includes(o.name))&&this.host.requestUpdate()},(this.host=r).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent.trim()!=="")return!0;if(r.nodeType===r.ELEMENT_NODE){const t=r;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(r){return this.host.querySelector(`:scope > [slot="${r}"]`)!==null}test(r){return r==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(r)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},kt="";function Yt(r){kt=r}function mr(r=""){if(!kt){const t=[...document.getElementsByTagName("script")],e=t.find(o=>o.hasAttribute("data-shoelace"));if(e)Yt(e.getAttribute("data-shoelace"));else{const o=t.find(i=>/shoelace(\.min)?\.js($|\?)/.test(i.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(i.src));let s="";o&&(s=o.getAttribute("src")),Yt(s.split("/").slice(0,-1).join("/"))}}return kt.replace(/\/$/,"")+(r?`/${r.replace(/^\//,"")}`:"")}var vr={name:"default",resolver:r=>mr(`assets/icons/${r}.svg`)},_r=vr,te={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},yr={name:"system",resolver:r=>r in te?`data:image/svg+xml,${encodeURIComponent(te[r])}`:""},$r=yr,wr=[_r,$r],Pt=[];function xr(r){Pt.push(r)}function Ar(r){Pt=Pt.filter(t=>t!==r)}function ee(r){return wr.find(t=>t.name===r)}var Cr=y`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function Bt(r,t){const e=et({waitUntilFirstUpdate:!1},t);return(o,s)=>{const{update:i}=o,a=Array.isArray(r)?r:[r];o.update=function(n){a.forEach(l=>{const u=l;if(n.has(u)){const b=n.get(u),p=this[u];b!==p&&(!e.waitUntilFirstUpdate||this.hasUpdated)&&this[s](b,p)}}),i.call(this,n)}}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sr=(r,t)=>(r==null?void 0:r._$litType$)!==void 0;var G=Symbol(),nt=Symbol(),xt,At=new Map,A=class extends I{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(r,t){var e;let o;if(t!=null&&t.spriteSheet)return this.svg=c`<svg part="svg">
        <use part="use" href="${r}"></use>
      </svg>`,this.svg;try{if(o=await fetch(r,{mode:"cors"}),!o.ok)return o.status===410?G:nt}catch{return nt}try{const s=document.createElement("div");s.innerHTML=await o.text();const i=s.firstElementChild;if(((e=i==null?void 0:i.tagName)==null?void 0:e.toLowerCase())!=="svg")return G;xt||(xt=new DOMParser);const n=xt.parseFromString(i.outerHTML,"text/html").body.querySelector("svg");return n?(n.part.add("svg"),document.adoptNode(n)):G}catch{return G}}connectedCallback(){super.connectedCallback(),xr(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Ar(this)}getIconSource(){const r=ee(this.library);return this.name&&r?{url:r.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var r;const{url:t,fromLibrary:e}=this.getIconSource(),o=e?ee(this.library):void 0;if(!t){this.svg=null;return}let s=At.get(t);if(s||(s=this.resolveIcon(t,o),At.set(t,s)),!this.initialRender)return;const i=await s;if(i===nt&&At.delete(t),t===this.getIconSource().url){if(Sr(i)){if(this.svg=i,o){await this.updateComplete;const a=this.shadowRoot.querySelector("[part='svg']");typeof o.mutator=="function"&&a&&o.mutator(a)}return}switch(i){case nt:case G:this.svg=null,this.emit("sl-error");break;default:this.svg=i.cloneNode(!0),(r=o==null?void 0:o.mutator)==null||r.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}};A.styles=[It,Cr];h([_()],A.prototype,"svg",2);h([d({reflect:!0})],A.prototype,"name",2);h([d()],A.prototype,"src",2);h([d()],A.prototype,"label",2);h([d({reflect:!0})],A.prototype,"library",2);h([Bt("label")],A.prototype,"handleLabelChange",1);h([Bt(["name","src","library"])],A.prototype,"setIcon",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Er=pe(class extends fe{constructor(r){var t;if(super(r),r.type!==he.ATTRIBUTE||r.name!=="class"||((t=r.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(t=>r[t]).join(" ")+" "}update(r,[t]){var o,s;if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!((o=this.nt)!=null&&o.has(i))&&this.st.add(i);return this.render(t)}const e=r.element.classList;for(const i of this.st)i in t||(e.remove(i),this.st.delete(i));for(const i in t){const a=!!t[i];a===this.st.has(i)||(s=this.nt)!=null&&s.has(i)||(a?(e.add(i),this.st.add(i)):(e.remove(i),this.st.delete(i)))}return k}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Se=Symbol.for(""),kr=r=>{if((r==null?void 0:r.r)===Se)return r==null?void 0:r._$litStatic$},re=(r,...t)=>({_$litStatic$:t.reduce((e,o,s)=>e+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+r[s+1],r[0]),r:Se}),oe=new Map,Pr=r=>(t,...e)=>{const o=e.length;let s,i;const a=[],n=[];let l,u=0,b=!1;for(;u<o;){for(l=t[u];u<o&&(i=e[u],(s=kr(i))!==void 0);)l+=s+t[++u],b=!0;u!==o&&n.push(i),a.push(l),u++}if(u===o&&a.push(t[o]),b){const p=a.join("$$lit$$");(t=oe.get(p))===void 0&&(a.raw=a,oe.set(p,t=a)),e=n}return r(t,...e)},Ct=Pr(c);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=r=>r??g;var f=class extends I{constructor(){super(...arguments),this.formControlController=new fr(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new gr(this,"[default]","prefix","suffix"),this.localize=new ye(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Nt}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(r){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(r)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(r){this.button.focus(r)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(r){this.isButton()&&(this.button.setCustomValidity(r),this.formControlController.updateValidity())}render(){const r=this.isLink(),t=r?re`a`:re`button`;return Ct`
      <${t}
        part="base"
        class=${Er({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${x(r?void 0:this.disabled)}
        type=${x(r?void 0:this.type)}
        title=${this.title}
        name=${x(r?void 0:this.name)}
        value=${x(r?void 0:this.value)}
        href=${x(r&&!this.disabled?this.href:void 0)}
        target=${x(r?this.target:void 0)}
        download=${x(r?this.download:void 0)}
        rel=${x(r?this.rel:void 0)}
        role=${x(r?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Ct` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Ct`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};f.styles=[It,br];f.dependencies={"sl-icon":A,"sl-spinner":Ce};h([mt(".button")],f.prototype,"button",2);h([_()],f.prototype,"hasFocus",2);h([_()],f.prototype,"invalid",2);h([d()],f.prototype,"title",2);h([d({reflect:!0})],f.prototype,"variant",2);h([d({reflect:!0})],f.prototype,"size",2);h([d({type:Boolean,reflect:!0})],f.prototype,"caret",2);h([d({type:Boolean,reflect:!0})],f.prototype,"disabled",2);h([d({type:Boolean,reflect:!0})],f.prototype,"loading",2);h([d({type:Boolean,reflect:!0})],f.prototype,"outline",2);h([d({type:Boolean,reflect:!0})],f.prototype,"pill",2);h([d({type:Boolean,reflect:!0})],f.prototype,"circle",2);h([d()],f.prototype,"type",2);h([d()],f.prototype,"name",2);h([d()],f.prototype,"value",2);h([d()],f.prototype,"href",2);h([d()],f.prototype,"target",2);h([d()],f.prototype,"rel",2);h([d()],f.prototype,"download",2);h([d()],f.prototype,"form",2);h([d({attribute:"formaction"})],f.prototype,"formAction",2);h([d({attribute:"formenctype"})],f.prototype,"formEnctype",2);h([d({attribute:"formmethod"})],f.prototype,"formMethod",2);h([d({attribute:"formnovalidate",type:Boolean})],f.prototype,"formNoValidate",2);h([d({attribute:"formtarget"})],f.prototype,"formTarget",2);h([Bt("disabled",{waitUntilFirstUpdate:!0})],f.prototype,"handleDisabledChange",1);f.define("sl-button");var Or=Object.defineProperty,zr=Object.getOwnPropertyDescriptor,Ee=(r,t,e,o)=>{for(var s=o>1?void 0:o?zr(t,e):t,i=r.length-1,a;i>=0;i--)(a=r[i])&&(s=(o?a(t,e,s):a(s))||s);return o&&s&&Or(t,e,s),s};let bt=class extends v{constructor(){super(...arguments),this.item={glossary:"",label:"",name:""},this._selectLink=()=>{const r=[this.item.glossary,this.item.label].join("~~");this.dispatchEvent(new CustomEvent("params-change",{detail:{facets:r,selected:!0},bubbles:!0,composed:!0}))}}render(){return c`<sl-button variant="primary" size="small" @click=${this._selectLink}
      >${this.item.name}</sl-button
    >`}};bt.styles=y`
    :host { display: inline-block; }
    sl-button::part(base) { padding-top: 4px; padding-bottom: 3px; }
  `;Ee([d({type:Object})],bt.prototype,"item",2);bt=Ee([U("result-item-button")],bt);var Lr=Object.defineProperty,Mr=Object.getOwnPropertyDescriptor,rt=(r,t,e,o)=>{for(var s=o>1?void 0:o?Mr(t,e):t,i=r.length-1,a;i>=0;i--)(a=r[i])&&(s=(o?a(t,e,s):a(s))||s);return o&&s&&Lr(t,e,s),s};let D=class extends v{constructor(){super(...arguments),this.params={},this.editable=!1,this._expanded=!1}updated(r){r.has("item")&&(this._expanded=!1)}_show(r){return Array.isArray(r)&&r.length>0}_renderGrid(){const r=this.item.grid;return r?c`
      <table class="grid">
        <thead>
          <tr>${r.columns.map(t=>c`<th>${t}</th>`)}</tr>
        </thead>
        <tbody>
          ${r.rows.map(t=>c`<tr>${r.columns.map(e=>c`<td>${t[e]??""}</td>`)}</tr>`)}
        </tbody>
      </table>
    `:""}render(){const r=this.item.concept;return c`
      <div class="card">
        <div>
          <span class="circle">${this.item.index}</span>
          <span class="term">${r.term}</span>
        </div>
        <div class="glossary">Glossary: ${this.item.glossary}</div>
        ${(this.item.snippets??[]).map(t=>c`<search-snippet-highlight .snippet=${t}></search-snippet-highlight>`)}
        ${this._renderGrid()}
        <button class="expand" @click=${()=>this._expanded=!this._expanded}>
          ${this._expanded?"▲ Hide details":"▼ Show details"}
        </button>
        ${this._expanded?c`
              <div class="concept-card">
                ${r.altlabel?c`<h5>AltLabel</h5><p>${r.altlabel}</p>`:""}
                <h5>Definition</h5>
                ${(r.definition??[]).map(t=>c`<p>${t}</p>`)}
                ${this._show(r.related)?c`<h5>Related</h5>
                      <div class="chips">
                        ${r.related.map(t=>c`<result-item-button
                            .item=${t}
                            .params=${this.params}
                          ></result-item-button>`)}
                      </div>`:""}
                ${this._show(r.broader)?c`<h5>Broader</h5>
                      <div class="chips">
                        ${r.broader.map(t=>c`<result-item-button
                            .item=${t}
                            .params=${this.params}
                          ></result-item-button>`)}
                      </div>`:""}
                ${this._show(r.narrower)?c`<h5>Narrower</h5>
                      <div class="chips">
                        ${r.narrower.map(t=>c`<result-item-button
                            .item=${t}
                            .params=${this.params}
                          ></result-item-button>`)}
                      </div>`:""}
              </div>
            `:""}
      </div>
    `}};D.styles=y`
    :host { display: block; margin: 5px 0; }
    .card {
      width: 100%;
      background: #fff;
      border-radius: 3px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
      padding: 8px 12px;
      font-size: 12px;
    }
    .circle {
      display: inline-block;
      height: 24px;
      min-width: 24px;
      border-radius: 50%;
      background: #ddd;
      line-height: 24px;
      font-size: 10px;
      color: #555;
      text-align: center;
      padding: 0 4px;
      margin-right: 6px;
    }
    .term { font-size: 14px; font-weight: 600; }
    .glossary { color: #666; margin: 4px 0; }
    button.expand {
      appearance: none;
      border: none;
      background: none;
      color: #1565c0;
      cursor: pointer;
      padding: 6px 0;
      font: inherit;
    }
    .concept-card {
      background: #fafafa;
      border-radius: 3px;
      padding: 6px 10px;
      margin-top: 6px;
      font-size: 12px;
    }
    h5 { margin: 8px 0 4px; }
    .chips { display: flex; flex-wrap: wrap; gap: 4px; }
    table.grid { border-collapse: collapse; width: 100%; margin-top: 6px; font-size: 11px; }
    table.grid th, table.grid td {
      border: 1px solid #ddd;
      padding: 2px 6px;
      text-align: left;
    }
    table.grid tr:nth-child(even) td { background: #f6f6f6; }
  `;rt([d({attribute:!1})],D.prototype,"item",2);rt([d({attribute:!1})],D.prototype,"params",2);rt([d({type:Boolean})],D.prototype,"editable",2);rt([_()],D.prototype,"_expanded",2);D=rt([U("result-item")],D);var Dr=Object.defineProperty,Tr=Object.getOwnPropertyDescriptor,ot=(r,t,e,o)=>{for(var s=o>1?void 0:o?Tr(t,e):t,i=r.length-1,a;i>=0;i--)(a=r[i])&&(s=(o?a(t,e,s):a(s))||s);return o&&s&&Dr(t,e,s),s};let T=class extends v{constructor(){super(...arguments),this.rangeSize=5,this.pageSize=10,this.total=0,this.offset=0}get _pageCount(){return!this.total||!this.pageSize?0:Math.max(1,Math.ceil(this.total/this.pageSize))}get _current(){return this.pageSize?Math.floor((this.offset||0)/this.pageSize)+1:1}_go(r){const t=this._pageCount;if(!t)return;const e=Math.min(Math.max(r,1),t),o=(e-1)*this.pageSize;o!==this.offset&&(this.offset=o,this.dispatchEvent(new CustomEvent("offset-change",{detail:{offset:o,page:e},bubbles:!0,composed:!0})))}_pageBtn(r){const t=this._current;return c`<button
      class=${r===t?"current":""}
      @click=${()=>this._go(r)}
      aria-current=${r===t?"page":"false"}
    >
      ${r}
    </button>`}render(){const r=this._pageCount;if(r<=1)return c``;const t=this._current,e=Math.max(1,this.rangeSize),o=Math.floor(e/2);let s=Math.max(1,t-o),i=Math.min(r,s+e-1);return s=Math.max(1,i-e+1),c`
      <button ?disabled=${t===1} @click=${()=>this._go(t-1)}>‹</button>
      ${s>1?c`${this._pageBtn(1)}${s>2?c`<span class="ellipsis">…</span>`:""}`:""}
      ${Array.from({length:i-s+1},(a,n)=>this._pageBtn(s+n))}
      ${i<r?c`${i<r-1?c`<span class="ellipsis">…</span>`:""}${this._pageBtn(r)}`:""}
      <button ?disabled=${t===r} @click=${()=>this._go(t+1)}>›</button>
    `}};T.styles=y`
    :host { display: flex; align-items: center; gap: 4px; flex-wrap: wrap; padding: 4px 8px; }
    button {
      appearance: none;
      border: 1px solid #ccc;
      background: #fafafa;
      color: #333;
      padding: 3px 8px;
      border-radius: 3px;
      cursor: pointer;
      font: inherit;
      min-width: 28px;
    }
    button[disabled] { opacity: 0.4; cursor: default; }
    button.current {
      background: #1565c0;
      color: #fff;
      border-color: #1565c0;
      font-weight: 600;
    }
    .ellipsis { padding: 3px 4px; color: #666; }
  `;ot([d({type:Number,attribute:"range-size"})],T.prototype,"rangeSize",2);ot([d({type:Number})],T.prototype,"pageSize",2);ot([d({type:Number})],T.prototype,"total",2);ot([d({type:Number})],T.prototype,"offset",2);T=ot([U("emh-pagination")],T);var Ur=Object.defineProperty,Ir=Object.getOwnPropertyDescriptor,$=(r,t,e,o)=>{for(var s=o>1?void 0:o?Ir(t,e):t,i=r.length-1,a;i>=0;i--)(a=r[i])&&(s=(o?a(t,e,s):a(s))||s);return o&&s&&Ur(t,e,s),s};const N="~~",Nr=1e3,Br=new Set(["emh","dba"]);let m=class extends v{constructor(){super(...arguments),this._params=ht(),this._user={id:"guest",groups:[]},this._result={total:0,available:0,results:[],facets:[]},this._search="",this._loading=!1,this._drawerOpen=!0,this._loginData={user:"",password:""},this._onParams=()=>{this._params=ht(),this._runSearch()},this._onFacetToggle=r=>{const{facet:t,value:e,checked:o}=r.detail;e.value??`${t}${N}${e.name}`;const s=this._params.facets?this._params.facets.split(N):[],i=`${t}${N}${e.name}`;s.filter((n,l,u)=>l%2===1?!0:`${u[l]}${N}${u[l+1]??""}`!==i);const a=[];for(let n=0;n<s.length;n+=2)`${s[n]}${N}${s[n+1]??""}`!==i&&a.push(s[n],s[n+1]);o&&a.push(t,e.name),H({facets:a.filter(Boolean).join(N),start:""})},this._onOffsetChange=r=>{H({start:String(r.detail.offset)})}}connectedCallback(){super.connectedCallback(),window.addEventListener("params-change",this._onParams),this.addEventListener("facet-toggle",this._onFacetToggle),this.addEventListener("offset-change",this._onOffsetChange),this._search=this._params.q??"",this._params.pagelength||(this._params={...this._params,pagelength:"10"}),this._loadUser(),this._runSearch(),this._maybeShowInfoOnFirstVisit()}disconnectedCallback(){window.removeEventListener("params-change",this._onParams),this.removeEventListener("facet-toggle",this._onFacetToggle),this.removeEventListener("offset-change",this._onOffsetChange),super.disconnectedCallback()}_maybeShowInfoOnFirstVisit(){document.cookie.replace(/(?:(?:^|.*;\s*)_emh_notify\s*=\s*([^;]*).*$)|^.*$/,"$1")!=="true"&&(queueMicrotask(()=>{var t;return(t=this._emhinfo)==null?void 0:t.showModal()}),document.cookie="_emh_notify=true; expires=Fri, 31 Dec 9999 23:59:59 GMT")}async _loadUser(){try{this._user=await it("modules/who-am-i.xq")}catch{}}async _runSearch(){var r;(r=this._searchAbort)==null||r.abort(),this._searchAbort=new AbortController,this._loading=!0;try{const t={...this._params};this._result=await it("modules/search.xq",{params:t,signal:this._searchAbort.signal})}catch(t){(t==null?void 0:t.name)!=="AbortError"&&console.error("search failed",t)}finally{this._loading=!1}}_onSearchInput(r){this._search=r.target.value,clearTimeout(this._debounceTimer),this._debounceTimer=window.setTimeout(()=>{H({q:this._search,start:""})},Nr)}_clearInput(){clearTimeout(this._debounceTimer),this._search="",H({q:"",facets:"",start:""})}_isLoggedIn(){return this._user.id!=="guest"}_isAdmin(){return(this._user.groups??[]).some(r=>Br.has((r.id??"").toLowerCase()))}_openLoginDialog(){this._isLoggedIn()?this._userdata.showModal():this._login.showModal()}async _attemptLogin(r){r.preventDefault();try{const t=await it("modules/who-am-i.xq",{params:this._loginData});this._user=t,t.error||this._login.close()}catch(t){console.error("login failed",t)}}async _attemptLogout(){try{this._user=await it("modules/who-am-i.xq",{params:{logout:"true"}})}catch(r){console.error("logout failed",r)}}_goAdmin(){window.location.href="admin/index.html"}_fmt(r){return(r??0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}_onPageSize(r){const t=r.target.value;H({pagelength:t,start:""})}render(){const r=this._result.facets??[];return c`
      <div class="layout">
        <aside class=${"drawer"+(this._drawerOpen?"":" hidden")}>
          <header>Facets</header>
          <section>
            ${r.filter(t=>t.values&&t.values.length).map(t=>c`<facet-card .facet=${t}></facet-card>`)}
          </section>
        </aside>
        <main>
          <div class="toolbar">
            <button
              @click=${()=>this._drawerOpen=!this._drawerOpen}
              title="Toggle facets"
              aria-label="Toggle facets"
            >☰</button>
            <button @click=${()=>this._emhinfo.showModal()} title="About">ⓘ</button>
            <h1>Glossary</h1>
            <label class="page-size" title="Page size">
              <span>Page size: ${this._params.pagelength??"10"}</span>
              <input
                type="range"
                min="10" max="100" step="10"
                .value=${this._params.pagelength??"10"}
                @change=${this._onPageSize}
              />
            </label>
            <button @click=${this._openLoginDialog}>
              Hello ${this._user.name??this._user.id}
            </button>
            ${this._isLoggedIn()?c`<button @click=${this._attemptLogout} title="Log out">✕</button>`:""}
            ${this._isAdmin()?c`<button @click=${this._goAdmin} title="Admin">⚙</button>`:""}
          </div>
          <div class="card">
            <div class="search-row">
              <input
                type="text"
                placeholder="Query text"
                .value=${this._search}
                @input=${this._onSearchInput}
              />
              <button @click=${this._clearInput} title="Clear">✕</button>
            </div>
          </div>
          <div class="card">
            <div class="totalcounter">
              Total Count: ${this._fmt(this._result.total)} of ${this._fmt(this._result.available)}
            </div>
            <emh-pagination
              range-size="5"
              .pageSize=${Number(this._params.pagelength??10)}
              .total=${this._result.total}
              .offset=${Number(this._params.start??0)}
            ></emh-pagination>
          </div>
          <section class="results">
            ${(this._result.results??[]).map(t=>c`<result-item .item=${t} .params=${this._params}></result-item>`)}
            <div class="card copyright">
              Copyright © 2018 Magellan AI Corporation. All rights reserved.
            </div>
            <footer class="spacer"></footer>
          </section>
        </main>
      </div>

      ${this._loading?c`<div class="spinner-backdrop"><div class="spinner"></div></div>`:""}

      <dialog id="emhinfo">
        <h2>Magellan AI</h2>
        <h3>Data Stewardship</h3>
        <p>
          At Magellan AI, we help our clients manage their data assets. We work
          closely with our users throughout development to ensure that we remain
          aligned with the end-goal.
        </p>
        <h3>Data Migration</h3>
        <p>
          One of the largest and most complicated parts of any development
          project is the data migration from an old data source to a new data
          source. Our tools take a complicated and time-consuming process and
          make it manageable.
        </p>
        <p>
          Please visit us at
          <a target="_blank" rel="noopener noreferrer" href="https://magellanmeta.ai/">
            magellanmeta.ai
          </a>
          or contact
          <a href="mailto:loren@magellanmeta.ai">loren@magellanmeta.ai</a>.
        </p>
        <div class="buttons">
          <button @click=${()=>this._emhinfo.close()}>Dismiss</button>
        </div>
      </dialog>

      <dialog id="login">
        <h2>Login</h2>
        ${this._user.error?c`<p class="error">Invalid password</p>`:""}
        <form @submit=${this._attemptLogin}>
          <label>User</label>
          <input
            type="text"
            .value=${this._loginData.user}
            @input=${t=>this._loginData={...this._loginData,user:t.target.value}}
          />
          <label>Password</label>
          <input
            type="password"
            .value=${this._loginData.password}
            @input=${t=>this._loginData={...this._loginData,password:t.target.value}}
          />
          <div class="buttons">
            <button type="button" class="secondary" @click=${()=>this._login.close()}>Close</button>
            <button type="submit">Login</button>
          </div>
        </form>
      </dialog>

      <dialog id="userdata">
        <h2>Groups</h2>
        <table class="groups">
          <thead><tr><th>ID</th><th>Description</th></tr></thead>
          <tbody>
            ${(this._user.groups??[]).map(t=>c`<tr><td>${t.id}</td><td>${t.description??""}</td></tr>`)}
          </tbody>
        </table>
        <div class="buttons">
          <button @click=${()=>this._userdata.close()}>Close</button>
        </div>
      </dialog>
    `}};m.styles=y`
    :host { display: block; background: lightgrey; min-height: 100vh; font-family: system-ui, sans-serif; }
    .layout { display: flex; min-height: 100vh; }
    .drawer {
      width: 280px;
      background: #eaeaea;
      border-right: 1px solid #ccc;
      overflow-y: auto;
      padding: 0;
    }
    .drawer.hidden { display: none; }
    .drawer header {
      background: grey;
      color: #fff;
      padding: 10px 16px;
      font-weight: 600;
    }
    .drawer section { padding: 8px; }
    main { flex: 1; display: flex; flex-direction: column; }
    .toolbar {
      background: grey;
      color: #fff;
      padding: 8px 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .toolbar h1 { flex: 1; font-size: 18px; margin: 0; }
    .toolbar button, .toolbar select {
      background: rgba(255,255,255,0.15);
      color: #fff;
      border: 1px solid rgba(255,255,255,0.4);
      border-radius: 3px;
      padding: 4px 8px;
      font: inherit;
      cursor: pointer;
    }
    .toolbar button:hover { background: rgba(255,255,255,0.28); }
    .card {
      background: #fff;
      margin: 6px;
      padding: 8px 12px;
      border-radius: 3px;
      box-shadow: 0 1px 2px rgba(0,0,0,0.15);
    }
    .search-row { display: flex; align-items: center; gap: 6px; }
    .search-row input {
      flex: 1;
      font: inherit;
      padding: 6px 8px;
      border: 1px solid #ccc;
      border-radius: 3px;
    }
    .search-row button {
      appearance: none;
      background: none;
      border: none;
      cursor: pointer;
      color: #666;
      padding: 4px 8px;
      font-size: 16px;
    }
    .totalcounter { font-size: 12px; color: #444; padding: 0 8px; }
    section.results { padding: 4px; flex: 1; overflow-y: auto; background: lightgrey; }
    .spinner-backdrop {
      position: fixed; inset: 0;
      background: rgba(0,0,0,0.35);
      display: flex; align-items: center; justify-content: center;
      z-index: 100;
    }
    .spinner {
      width: 44px; height: 44px;
      border: 4px solid #fff;
      border-top-color: transparent;
      border-radius: 50%;
      animation: spin 0.9s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    dialog {
      border: none;
      border-radius: 4px;
      padding: 20px 24px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.3);
      max-width: 90vw;
    }
    dialog::backdrop { background: rgba(0,0,0,0.4); }
    dialog h2 { margin-top: 0; }
    dialog .buttons { text-align: right; margin-top: 12px; display: flex; gap: 8px; justify-content: flex-end; }
    dialog button {
      appearance: none;
      border: 1px solid #1565c0;
      background: #1565c0;
      color: #fff;
      padding: 6px 12px;
      border-radius: 3px;
      cursor: pointer;
      font: inherit;
    }
    dialog button.secondary { background: #fff; color: #1565c0; }
    dialog label { display: block; margin: 8px 0 4px; font-size: 12px; color: #555; }
    dialog input {
      width: 260px;
      padding: 6px 8px;
      border: 1px solid #ccc;
      border-radius: 3px;
      font: inherit;
    }
    table.groups { border-collapse: collapse; margin-top: 8px; font-size: 12px; min-width: 320px; }
    table.groups th, table.groups td { border: 1px solid #ddd; padding: 4px 8px; text-align: left; }
    .page-size { display: flex; align-items: center; gap: 6px; font-size: 12px; }
    .page-size input[type=range] { width: 120px; }
    .error { color: #c62828; font-size: 12px; }
    .copyright { padding: 8px 12px; font-size: 11px; color: #666; }
    footer.spacer { height: 200px; }
  `;$([_()],m.prototype,"_params",2);$([_()],m.prototype,"_user",2);$([_()],m.prototype,"_result",2);$([_()],m.prototype,"_search",2);$([_()],m.prototype,"_loading",2);$([_()],m.prototype,"_drawerOpen",2);$([_()],m.prototype,"_loginData",2);$([mt("#emhinfo")],m.prototype,"_emhinfo",2);$([mt("#login")],m.prototype,"_login",2);$([mt("#userdata")],m.prototype,"_userdata",2);m=$([U("emh-accelerator-app")],m);
