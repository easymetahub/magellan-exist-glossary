(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=globalThis,V=L.ShadowRoot&&(L.ShadyCSS===void 0||L.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),X=new WeakMap;let de=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(V&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=X.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&X.set(t,e))}return e}toString(){return this.cssText}};const be=r=>new de(typeof r=="string"?r:r+"",void 0,J),he=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new de(t,r,J)},_e=(r,e)=>{if(V)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),i=L.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,r.appendChild(s)}},Q=V?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return be(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ve,defineProperty:Ae,getOwnPropertyDescriptor:xe,getOwnPropertyNames:we,getOwnPropertySymbols:Ee,getPrototypeOf:Se}=Object,y=globalThis,Y=y.trustedTypes,Oe=Y?Y.emptyScript:"",F=y.reactiveElementPolyfillSupport,C=(r,e)=>r,j={toAttribute(r,e){switch(e){case Boolean:r=r?Oe:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},K=(r,e)=>!ve(r,e),ee={attribute:!0,type:String,converter:j,reflect:!1,useDefault:!1,hasChanged:K};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),y.litPropertyMetadata??(y.litPropertyMetadata=new WeakMap);let w=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ee){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&Ae(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:o}=xe(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:i,set(n){const l=i==null?void 0:i.call(this);o==null||o.call(this,n),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ee}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;const e=Se(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){const t=this.properties,s=[...we(t),...Ee(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(Q(i))}else e!==void 0&&t.push(Q(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _e(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){var o;const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const n=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:j).toAttribute(t,s.type);this._$Em=e,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){var o,n;const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const l=s.getPropertyOptions(i),a=typeof l.converter=="function"?{fromAttribute:l.converter}:((o=l.converter)==null?void 0:o.fromAttribute)!==void 0?l.converter:j;this._$Em=i;const h=a.fromAttribute(t,l.type);this[i]=h??((n=this._$Ej)==null?void 0:n.get(i))??h,this._$Em=null}}requestUpdate(e,t,s,i=!1,o){var n;if(e!==void 0){const l=this.constructor;if(i===!1&&(o=this[e]),s??(s=l.getPropertyOptions(e)),!((s.hasChanged??K)(o,t)||s.useDefault&&s.reflect&&o===((n=this._$Ej)==null?void 0:n.get(e))&&!this.hasAttribute(l._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:o},n){s&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,n??t??this[e]),o!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,n]of i){const{wrapped:l}=n,a=this[o];l!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,n,a)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[C("elementProperties")]=new Map,w[C("finalized")]=new Map,F==null||F({ReactiveElement:w}),(y.reactiveElementVersions??(y.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=globalThis,te=r=>r,z=U.trustedTypes,se=z?z.createPolicy("lit-html",{createHTML:r=>r}):void 0,ce="$lit$",m=`lit$${Math.random().toFixed(9).slice(2)}$`,pe="?"+m,Pe=`<${pe}>`,x=document,D=()=>x.createComment(""),M=r=>r===null||typeof r!="object"&&typeof r!="function",Z=Array.isArray,Ce=r=>Z(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",B=`[ 	
\f\r]`,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ie=/-->/g,re=/>/g,_=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),oe=/'/g,ne=/"/g,ue=/^(?:script|style|textarea|title)$/i,Ue=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),c=Ue(1),S=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),ae=new WeakMap,v=x.createTreeWalker(x,129);function fe(r,e){if(!Z(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return se!==void 0?se.createHTML(e):e}const De=(r,e)=>{const t=r.length-1,s=[];let i,o=e===2?"<svg>":e===3?"<math>":"",n=P;for(let l=0;l<t;l++){const a=r[l];let h,p,d=-1,g=0;for(;g<a.length&&(n.lastIndex=g,p=n.exec(a),p!==null);)g=n.lastIndex,n===P?p[1]==="!--"?n=ie:p[1]!==void 0?n=re:p[2]!==void 0?(ue.test(p[2])&&(i=RegExp("</"+p[2],"g")),n=_):p[3]!==void 0&&(n=_):n===_?p[0]===">"?(n=i??P,d=-1):p[1]===void 0?d=-2:(d=n.lastIndex-p[2].length,h=p[1],n=p[3]===void 0?_:p[3]==='"'?ne:oe):n===ne||n===oe?n=_:n===ie||n===re?n=P:(n=_,i=void 0);const $=n===_&&r[l+1].startsWith("/>")?" ":"";o+=n===P?a+Pe:d>=0?(s.push(h),a.slice(0,d)+ce+a.slice(d)+m+$):a+m+(d===-2?l:$)}return[fe(r,o+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class T{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let o=0,n=0;const l=e.length-1,a=this.parts,[h,p]=De(e,t);if(this.el=T.createElement(h,s),v.currentNode=this.el.content,t===2||t===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=v.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(ce)){const g=p[n++],$=i.getAttribute(d).split(m),k=/([.?@])?(.*)/.exec(g);a.push({type:1,index:o,name:k[2],strings:$,ctor:k[1]==="."?Te:k[1]==="?"?Ne:k[1]==="@"?Re:q}),i.removeAttribute(d)}else d.startsWith(m)&&(a.push({type:6,index:o}),i.removeAttribute(d));if(ue.test(i.tagName)){const d=i.textContent.split(m),g=d.length-1;if(g>0){i.textContent=z?z.emptyScript:"";for(let $=0;$<g;$++)i.append(d[$],D()),v.nextNode(),a.push({type:2,index:++o});i.append(d[g],D())}}}else if(i.nodeType===8)if(i.data===pe)a.push({type:2,index:o});else{let d=-1;for(;(d=i.data.indexOf(m,d+1))!==-1;)a.push({type:7,index:o}),d+=m.length-1}o++}}static createElement(e,t){const s=x.createElement("template");return s.innerHTML=e,s}}function O(r,e,t=r,s){var n,l;if(e===S)return e;let i=s!==void 0?(n=t._$Co)==null?void 0:n[s]:t._$Cl;const o=M(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=i:t._$Cl=i),i!==void 0&&(e=O(r,i._$AS(r,e.values),i,s)),e}class Me{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=((e==null?void 0:e.creationScope)??x).importNode(t,!0);v.currentNode=i;let o=v.nextNode(),n=0,l=0,a=s[0];for(;a!==void 0;){if(n===a.index){let h;a.type===2?h=new N(o,o.nextSibling,this,e):a.type===1?h=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(h=new ke(o,this,e)),this._$AV.push(h),a=s[++l]}n!==(a==null?void 0:a.index)&&(o=v.nextNode(),n++)}return v.currentNode=x,i}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class N{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=O(this,e,t),M(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==S&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ce(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==u&&M(this._$AH)?this._$AA.nextSibling.data=e:this.T(x.createTextNode(e)),this._$AH=e}$(e){var o;const{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=T.createElement(fe(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(t);else{const n=new Me(i,this),l=n.u(this.options);n.p(t),this.T(l),this._$AH=n}}_$AC(e){let t=ae.get(e.strings);return t===void 0&&ae.set(e.strings,t=new T(e)),t}k(e){Z(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const o of e)i===t.length?t.push(s=new N(this.O(D()),this.O(D()),this,this.options)):s=t[i],s._$AI(o),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e!==this._$AB;){const i=te(e).nextSibling;te(e).remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,o){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}_$AI(e,t=this,s,i){const o=this.strings;let n=!1;if(o===void 0)e=O(this,e,t,0),n=!M(e)||e!==this._$AH&&e!==S,n&&(this._$AH=e);else{const l=e;let a,h;for(e=o[0],a=0;a<o.length-1;a++)h=O(this,l[s+a],t,a),h===S&&(h=this._$AH[a]),n||(n=!M(h)||h!==this._$AH[a]),h===u?e=u:e!==u&&(e+=(h??"")+o[a+1]),this._$AH[a]=h}n&&!i&&this.j(e)}j(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Te extends q{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===u?void 0:e}}class Ne extends q{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==u)}}class Re extends q{constructor(e,t,s,i,o){super(e,t,s,i,o),this.type=5}_$AI(e,t=this){if((e=O(this,e,t,0)??u)===S)return;const s=this._$AH,i=e===u&&s!==u||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==u&&(s===u||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class ke{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){O(this,e)}}const G=U.litHtmlPolyfillSupport;G==null||G(T,N),(U.litHtmlVersions??(U.litHtmlVersions=[])).push("3.3.3");const He=(r,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let i=s._$litPart$;if(i===void 0){const o=(t==null?void 0:t.renderBefore)??null;s._$litPart$=i=new N(e.insertBefore(D(),o),o,void 0,t??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=globalThis;class E extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=He(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return S}}var le;E._$litElement$=!0,E.finalized=!0,(le=A.litElementHydrateSupport)==null||le.call(A,{LitElement:E});const W=A.litElementPolyfillSupport;W==null||W({LitElement:E});(A.litElementVersions??(A.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Le={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:K},je=(r=Le,e,t)=>{const{kind:s,metadata:i}=t;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(t.name,r),s==="accessor"){const{name:n}=t;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(n,a,r,!0,l)},init(l){return l!==void 0&&this.C(n,void 0,r,l),l}}}if(s==="setter"){const{name:n}=t;return function(l){const a=this[n];e.call(this,l),this.requestUpdate(n,a,r,!0,l)}}throw Error("Unsupported decorator location: "+s)};function $e(r){return(e,t)=>typeof t=="object"?je(r,e,t):((s,i,o)=>{const n=i.hasOwnProperty(o);return i.constructor.createProperty(o,s),n?Object.getOwnPropertyDescriptor(i,o):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function R(r){return $e({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ze=(r,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(r,e,t),t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function me(r,e){return(t,s,i)=>{const o=n=>{var l;return((l=n.renderRoot)==null?void 0:l.querySelector(r))??null};return ze(t,s,{get(){return o(this)}})}}function Ie(r){if(!r)return"";const e=new URLSearchParams;for(const[s,i]of Object.entries(r))i!=null&&e.set(s,String(i));const t=e.toString();return t?`?${t}`:""}async function H(r,e={}){const{method:t="GET",params:s,body:i,headers:o={},signal:n}=e,l={method:t,signal:n,headers:{Accept:"application/json",...o}};i!==void 0&&(l.headers["Content-Type"]="application/json",l.body=JSON.stringify(i));const a=await fetch(r+Ie(s),l);if(!a.ok){const p=await a.text().catch(()=>"");throw new Error(`API ${t} ${r} failed [${a.status}]: ${p}`)}return(a.headers.get("content-type")??"").includes("application/json")?await a.json():await a.text()}var qe=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor,ye=(r,e,t,s)=>{for(var i=s>1?void 0:s?Fe(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&qe(e,t,i),i};let I=class extends E{constructor(){super(...arguments),this.item={id:"",filename:""}}render(){const r=this.item,e=r.messages??[];return c`
      <div class="row">
        <span class="term">${r.filename}</span>
        ${r.responseFilename?c`<span class="response">→ ${r.responseFilename}</span>`:null}
        ${r.status?c`<b class="status">${r.status}</b>`:null}
        ${r.location?c`<a
              class="download"
              href="${r.location}"
              download="${r.responseFilename??r.filename}"
              title="Download response"
            >⬇︎</a>`:null}
      </div>
      ${r.status?c`<progress
            value="${r.progress??0}"
            max="100"
          ></progress>`:null}
      ${e.length?c`
            <table class="messages">
              <thead>
                <tr><th style="width: 6em;">Type</th><th>Message</th></tr>
              </thead>
              <tbody>
                ${e.map(t=>c`
                    <tr class="${t.type}">
                      <td>${t.type}</td>
                      <td>${t.message}</td>
                    </tr>
                  `)}
              </tbody>
            </table>
          `:null}
    `}};I.styles=he`
    :host { display: block; padding: 6px 0; border-bottom: 1px solid #eee; }
    .row { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
    .term { font-size: 14px; }
    .response { color: #555; font-size: 12px; }
    .status { font-weight: 600; }
    progress { width: 100%; height: 6px; }
    a.download { text-decoration: none; }
    table.messages {
      width: 100%;
      border-collapse: collapse;
      margin-top: 6px;
      font-size: 12px;
    }
    table.messages th, table.messages td {
      border: 1px solid #ddd;
      padding: 3px 6px;
      text-align: left;
      vertical-align: top;
    }
    table.messages th { background: #f4f4f4; }
    table.messages tr.fatal td { background: #fdecea; color: #7a1c14; }
    table.messages tr.warning td { background: #fff8e1; }
  `;ye([$e({type:Object})],I.prototype,"item",2);I=ye([ge("upload-item")],I);var Be=Object.defineProperty,Ge=Object.getOwnPropertyDescriptor,b=(r,e,t,s)=>{for(var i=s>1?void 0:s?Ge(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&Be(e,t,i),i};const We="../modules/upload.xq",Ve="my-attachment",Je=3e5,Ke=new Set(["emh","dba"]);let f=class extends E{constructor(){super(...arguments),this.glossaries=[],this.user={id:"guest",groups:[]},this.files=[],this.dragOver=!1,this.drawerOpen=!0}connectedCallback(){super.connectedCallback(),this.loadUser(),this.loadGlossaries()}async loadUser(){try{this.user=await H("../modules/who-am-i.xq")}catch(r){console.error("who-am-i failed",r)}}async loadGlossaries(){try{this.glossaries=await H("../modules/glossaries.xq")}catch(r){console.error("glossaries load failed",r),this.glossaries=[]}}async deleteGlossary(r){if(confirm(`Delete glossary "${r}"?`))try{await H("../modules/delete.xq",{params:{glossary:r}}),await this.loadGlossaries()}catch(e){console.error("delete failed",e),alert(`Failed to delete "${r}": ${e.message}`)}}async logout(){try{const r=await H("../modules/who-am-i.xq",{params:{logout:!0}});this.user=r}catch(r){console.error("logout failed",r)}}goHome(){window.location.href="../index.html"}isAdmin(){var r,e;return!!((e=(r=this.user)==null?void 0:r.groups)!=null&&e.some(t=>Ke.has((t.id??"").toLowerCase())))}isLoggedIn(){var r,e;return((r=this.user)==null?void 0:r.id)!=="guest"&&!!((e=this.user)!=null&&e.id)}onFileInputChange(r){const e=r.target;e.files&&this.queueFiles(Array.from(e.files)),e.value=""}onDrop(r){var t;r.preventDefault(),this.dragOver=!1;const e=(t=r.dataTransfer)==null?void 0:t.files;e&&e.length&&this.queueFiles(Array.from(e))}onDragOver(r){r.preventDefault(),this.dragOver=!0}onDragLeave(){this.dragOver=!1}queueFiles(r){const e=r.filter(s=>s.name.toLowerCase().endsWith(".rdf")),t=r.length-e.length;t>0&&alert(`${t} file(s) skipped — only .rdf files are accepted.`);for(const s of e){const i={id:this.createUploadId(s),filename:s.name,status:"Uploading…",progress:0,messages:[]};this.files=[...this.files,i],this.uploadOne(s,i.id)}}createUploadId(r){var e,t;return((t=(e=globalThis.crypto)==null?void 0:e.randomUUID)==null?void 0:t.call(e))??`${Date.now()}-${Math.random()}-${r.name}`}updateEntry(r,e){this.files=this.files.map(t=>t.id===r?{...t,...e}:t)}uploadOne(r,e){return new Promise(t=>{const s=new XMLHttpRequest,i=new FormData;i.append(Ve,r,r.name),s.open("POST",We),s.timeout=Je,s.upload.onprogress=o=>{if(!o.lengthComputable)return;const n=Math.round(o.loaded/o.total*100);this.updateEntry(e,{progress:n})},s.onerror=()=>{this.updateEntry(e,{status:void 0,progress:0,messages:[{type:"fatal",message:"Network error during upload."}]}),t()},s.ontimeout=()=>{this.updateEntry(e,{status:void 0,progress:0,messages:[{type:"fatal",message:"Upload timed out."}]}),t()},s.onload=()=>{this.applyUploadResponse(e,s),t()},s.send(i)})}applyUploadResponse(r,e){var i,o;let t=null;try{t=JSON.parse(e.responseText)}catch{this.updateEntry(r,{status:void 0,progress:0,messages:[{type:"fatal",message:`Server returned non-JSON (HTTP ${e.status}).`}]});return}if(t.errorResponse){this.updateEntry(r,{status:void 0,progress:0,messages:[{type:"fatal",message:t.errorResponse.message}]});return}const s=(i=t.results)==null?void 0:i[0];s!=null&&s.responseFilename?this.updateEntry(r,{status:void 0,progress:100,responseFilename:s.responseFilename,location:s.location,messages:(o=s.messages)!=null&&o.length?s.messages:[]}):this.updateEntry(r,{status:void 0,progress:100,messages:(s==null?void 0:s.messages)??[]}),this.loadGlossaries()}render(){var r,e,t;return c`
      <div class="layout">
        <aside class="drawer ${this.drawerOpen?"":"hidden"}">
          <header>Drawer</header>
          <section>
            ${this.isLoggedIn()?c`
                  <p style="margin: 6px 0;">
                    Signed in as <b>${this.user.id}</b>
                  </p>
                  <button @click=${()=>{var s;return(s=this.userDialog)==null?void 0:s.showModal()}}>
                    Groups (${((r=this.user.groups)==null?void 0:r.length)??0})
                  </button>
                `:c`<p class="empty">Not signed in.</p>`}
          </section>
        </aside>

        <main>
          <div class="toolbar">
            <button
              title="Toggle drawer"
              @click=${()=>this.drawerOpen=!this.drawerOpen}
            >☰</button>
            <button title="Back to app" @click=${this.goHome}>‹</button>
            <h1>Administration</h1>
            <span class="user">${((e=this.user)==null?void 0:e.id)??""}</span>
            ${this.isLoggedIn()?c`<button @click=${this.logout}>Log out</button>`:null}
          </div>

          <section class="content">
            ${this.isLoggedIn()?null:c`<div class="card">
                  <b>Read-only view.</b> Sign in from the main app to manage glossaries.
                </div>`}

            <div class="card">
              <h2>Glossaries</h2>
              ${this.glossaries.length?c`
                    <table class="grid">
                      <thead>
                        <tr><th>ID</th><th class="actions">Actions</th></tr>
                      </thead>
                      <tbody>
                        ${this.glossaries.map(s=>c`
                            <tr>
                              <td>${s}</td>
                              <td class="actions">
                                ${this.isAdmin()?c`<button
                                      class="icon-btn"
                                      title="Delete ${s}"
                                      @click=${()=>this.deleteGlossary(s)}
                                    >🗑</button>`:c`<span class="empty">—</span>`}
                              </td>
                            </tr>
                          `)}
                      </tbody>
                    </table>
                  `:c`<p class="empty">No glossaries loaded.</p>`}
            </div>

            <div class="card">
              <h2>Upload RDF(s)</h2>
              <div
                class="drop-zone ${this.dragOver?"dragover":""}"
                @dragover=${this.onDragOver}
                @dragleave=${this.onDragLeave}
                @drop=${this.onDrop}
                @click=${()=>{var s;return(s=this.fileInput)==null?void 0:s.click()}}
              >
                <div>📄 Drop your requests here (RDF files only)</div>
                <span class="browse">or browse…</span>
                <input
                  id="fileInput"
                  type="file"
                  accept=".rdf"
                  multiple
                  @change=${this.onFileInputChange}
                />
              </div>
              ${this.files.length?c`
                    <h4 style="margin: 12px 0 4px 0;">Files</h4>
                    ${this.files.map(s=>c`<upload-item .item=${s}></upload-item>`)}
                  `:null}
            </div>
          </section>
        </main>
      </div>

      <dialog id="userdata">
        <h2>Groups</h2>
        ${(t=this.user.groups)!=null&&t.length?c`
              <table class="grid">
                <thead>
                  <tr><th style="width: 10em;">ID</th><th>Description</th></tr>
                </thead>
                <tbody>
                  ${this.user.groups.map(s=>c`
                      <tr>
                        <td>${s.id}</td>
                        <td>${s.description??""}</td>
                      </tr>
                    `)}
                </tbody>
              </table>
            `:c`<p class="empty">No groups.</p>`}
        <div class="dialog-actions">
          <button @click=${()=>{var s;return(s=this.userDialog)==null?void 0:s.close()}}>Close</button>
        </div>
      </dialog>
    `}};f.styles=he`
    :host {
      display: block;
      background: lightgrey;
      min-height: 100vh;
      font-family: system-ui, sans-serif;
      color: #222;
    }
    .layout { display: flex; min-height: 100vh; }
    .drawer {
      width: 240px;
      background: #eaeaea;
      border-right: 1px solid #ccc;
      overflow-y: auto;
    }
    .drawer.hidden { display: none; }
    .drawer header {
      background: grey;
      color: #fff;
      padding: 10px 16px;
      font-weight: 600;
    }
    .drawer section { padding: 8px; min-height: 80px; }

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
    .toolbar button {
      background: rgba(255,255,255,0.15);
      color: #fff;
      border: 1px solid rgba(255,255,255,0.4);
      border-radius: 3px;
      padding: 4px 10px;
      font: inherit;
      cursor: pointer;
    }
    .toolbar button:hover { background: rgba(255,255,255,0.28); }
    .toolbar .user { font-size: 13px; opacity: 0.9; }

    section.content { padding: 12px; overflow: auto; }

    .card {
      background: #fff;
      border: 1px solid #d0d0d0;
      border-radius: 4px;
      padding: 12px 16px;
      margin: 0 0 12px 0;
      box-shadow: 0 1px 2px rgba(0,0,0,0.04);
      font-size: 13px;
    }
    .card h2 { margin: 0 0 10px 0; font-size: 16px; }

    table.grid {
      width: 100%;
      border-collapse: collapse;
      font-size: 13px;
    }
    table.grid th, table.grid td {
      border: 1px solid #e0e0e0;
      padding: 6px 8px;
      text-align: left;
      vertical-align: middle;
    }
    table.grid thead th { background: #f4f4f4; }
    table.grid tbody tr:nth-child(odd) { background: #fafafa; }
    table.grid td.actions { width: 5em; text-align: center; }
    .icon-btn {
      background: transparent;
      border: none;
      cursor: pointer;
      font-size: 16px;
      padding: 2px 6px;
      color: #b71c1c;
    }
    .icon-btn:hover { color: #d32f2f; }
    .empty { color: #666; font-style: italic; }

    .drop-zone {
      border: 2px dashed #bbb;
      border-radius: 6px;
      padding: 24px;
      text-align: center;
      background: #fafafa;
      color: #555;
      transition: background 120ms, border-color 120ms;
    }
    .drop-zone.dragover {
      background: #eef6ff;
      border-color: #4a90e2;
      color: #235a99;
    }
    .drop-zone input[type='file'] { display: none; }
    .drop-zone .browse {
      display: inline-block;
      margin-top: 6px;
      color: #1565c0;
      cursor: pointer;
      text-decoration: underline;
    }

    dialog {
      border: none;
      border-radius: 6px;
      padding: 16px 20px;
      box-shadow: 0 6px 24px rgba(0,0,0,0.2);
      max-width: 640px;
      width: 90%;
    }
    dialog::backdrop { background: rgba(0,0,0,0.35); }
    dialog h2 { margin-top: 0; }
    dialog .dialog-actions {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
      margin-top: 12px;
    }
  `;b([R()],f.prototype,"glossaries",2);b([R()],f.prototype,"user",2);b([R()],f.prototype,"files",2);b([R()],f.prototype,"dragOver",2);b([R()],f.prototype,"drawerOpen",2);b([me("#userdata")],f.prototype,"userDialog",2);b([me("#fileInput")],f.prototype,"fileInput",2);f=b([ge("magellan-glossary-admin-app")],f);
