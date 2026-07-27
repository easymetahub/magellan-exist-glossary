(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=globalThis,t=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap,i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,n=this.t;if(t&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=r.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(n,e))}return e}toString(){return this.cssText}},a=e=>new i(typeof e==`string`?e:e+``,void 0,n),o=(e,...t)=>new i(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,n),s=(n,r)=>{if(t)n.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let t of r){let r=document.createElement(`style`),i=e.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=t.cssText,n.appendChild(r)}},c=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return a(t)})(e):e,{is:l,defineProperty:u,getOwnPropertyDescriptor:d,getOwnPropertyNames:ee,getOwnPropertySymbols:te,getPrototypeOf:ne}=Object,f=globalThis,p=f.trustedTypes,re=p?p.emptyScript:``,ie=f.reactiveElementPolyfillSupport,m=(e,t)=>e,h={toAttribute(e,t){switch(t){case Boolean:e=e?re:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},g=(e,t)=>!l(e,t),_={attribute:!0,type:String,converter:h,reflect:!1,useDefault:!1,hasChanged:g};Symbol.metadata??=Symbol(`metadata`),f.litPropertyMetadata??=new WeakMap;var v=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&u(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_}static _$Ei(){if(this.hasOwnProperty(m(`elementProperties`)))return;let e=ne(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(m(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m(`properties`))){let e=this.properties,t=[...ee(e),...te(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(c(e))}else e!==void 0&&t.push(c(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return s(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?h:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?h:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??g)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};v.elementStyles=[],v.shadowRootOptions={mode:`open`},v[m(`elementProperties`)]=new Map,v[m(`finalized`)]=new Map,ie?.({ReactiveElement:v}),(f.reactiveElementVersions??=[]).push(`2.1.2`);var y=globalThis,ae=e=>e,b=y.trustedTypes,oe=b?b.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,se=`$lit$`,x=`lit$${Math.random().toFixed(9).slice(2)}$`,S=`?`+x,ce=`<${S}>`,C=document,w=()=>C.createComment(``),T=e=>e===null||typeof e!=`object`&&typeof e!=`function`,E=Array.isArray,le=e=>E(e)||typeof e?.[Symbol.iterator]==`function`,D=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,k=/-->/g,A=/>/g,j=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),M=/'/g,N=/"/g,P=/^(?:script|style|textarea|title)$/i,F=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),I=Symbol.for(`lit-noChange`),L=Symbol.for(`lit-nothing`),R=new WeakMap,z=C.createTreeWalker(C,129);function B(e,t){if(!E(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return oe===void 0?t:oe.createHTML(t)}var ue=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=O;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===O?c[1]===`!--`?o=k:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=j):(P.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=j):o=A:o===j?c[0]===`>`?(o=i??O,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?j:c[3]===`"`?N:M):o===N||o===M?o=j:o===k||o===A?o=O:(o=j,i=void 0);let d=o===j&&e[t+1].startsWith(`/>`)?` `:``;a+=o===O?n+ce:l>=0?(r.push(s),n.slice(0,l)+se+n.slice(l)+x+d):n+x+(l===-2?t:d)}return[B(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},V=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=ue(t,n);if(this.el=e.createElement(l,r),z.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=z.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(se)){let t=u[o++],n=i.getAttribute(e).split(x),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?fe:r[1]===`?`?pe:r[1]===`@`?me:W}),i.removeAttribute(e)}else e.startsWith(x)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(P.test(i.tagName)){let e=i.textContent.split(x),t=e.length-1;if(t>0){i.textContent=b?b.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],w()),z.nextNode(),c.push({type:2,index:++a});i.append(e[t],w())}}}else if(i.nodeType===8)if(i.data===S)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(x,e+1))!==-1;)c.push({type:7,index:a}),e+=x.length-1}a++}}static createElement(e,t){let n=C.createElement(`template`);return n.innerHTML=e,n}};function H(e,t,n=e,r){if(t===I)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=T(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=H(e,i._$AS(e,t.values),i,r)),t}var de=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??C).importNode(t,!0);z.currentNode=r;let i=z.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new U(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new he(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=z.nextNode(),a++)}return z.currentNode=C,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},U=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=H(this,e,t),T(e)?e===L||e==null||e===``?(this._$AH!==L&&this._$AR(),this._$AH=L):e!==this._$AH&&e!==I&&this._(e):e._$litType$===void 0?e.nodeType===void 0?le(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==L&&T(this._$AH)?this._$AA.nextSibling.data=e:this.T(C.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=V.createElement(B(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new de(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=R.get(e.strings);return t===void 0&&R.set(e.strings,t=new V(e)),t}k(t){E(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(w()),this.O(w()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=ae(e).nextSibling;ae(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},W=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=L,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=L}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=H(this,e,t,0),a=!T(e)||e!==this._$AH&&e!==I,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=H(this,r[n+o],t,o),s===I&&(s=this._$AH[o]),a||=!T(s)||s!==this._$AH[o],s===L?e=L:e!==L&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},fe=class extends W{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===L?void 0:e}},pe=class extends W{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==L)}},me=class extends W{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=H(this,e,t,0)??L)===I)return;let n=this._$AH,r=e===L&&n!==L||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==L&&(n===L||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},he=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){H(this,e)}},ge=y.litHtmlPolyfillSupport;ge?.(V,U),(y.litHtmlVersions??=[]).push(`3.3.3`);var _e=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new U(t.insertBefore(w(),e),e,void 0,n??{})}return i._$AI(e),i},G=globalThis,K=class extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=_e(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return I}};K._$litElement$=!0,K.finalized=!0,G.litElementHydrateSupport?.({LitElement:K});var ve=G.litElementPolyfillSupport;ve?.({LitElement:K}),(G.litElementVersions??=[]).push(`4.2.2`);var q=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},ye={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:g},be=(e=ye,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function J(e){return(t,n)=>typeof n==`object`?be(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function Y(e){return J({...e,state:!0,attribute:!1})}var xe=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);function Se(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return xe(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return xe(n,r,{get(){return a(this)}})}}function Ce(e){if(!e)return``;let t=new URLSearchParams;for(let[n,r]of Object.entries(e))r!=null&&t.set(n,String(r));let n=t.toString();return n?`?${n}`:``}async function X(e,t={}){let{method:n=`GET`,params:r,body:i,headers:a={},signal:o}=t,s={method:n,signal:o,headers:{Accept:`application/json`,...a}};i!==void 0&&(s.headers[`Content-Type`]=`application/json`,s.body=JSON.stringify(i));let c=await fetch(e+Ce(r),s);if(!c.ok){let t=await c.text().catch(()=>``);throw Error(`API ${n} ${e} failed [${c.status}]: ${t}`)}return(c.headers.get(`content-type`)??``).includes(`application/json`)?await c.json():await c.text()}function Z(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var Q=class extends K{constructor(...e){super(...e),this.item={id:``,filename:``}}static{this.styles=o`
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
  `}render(){let e=this.item,t=e.messages??[];return F`
      <div class="row">
        <span class="term">${e.filename}</span>
        ${e.responseFilename?F`<span class="response">→ ${e.responseFilename}</span>`:null}
        ${e.status?F`<b class="status">${e.status}</b>`:null}
        ${e.location?F`<a
              class="download"
              href="${e.location}"
              download="${e.responseFilename??e.filename}"
              title="Download response"
            >⬇︎</a>`:null}
      </div>
      ${e.status?F`<progress
            value="${e.progress??0}"
            max="100"
          ></progress>`:null}
      ${t.length?F`
            <table class="messages">
              <thead>
                <tr><th style="width: 6em;">Type</th><th>Message</th></tr>
              </thead>
              <tbody>
                ${t.map(e=>F`
                    <tr class="${e.type}">
                      <td>${e.type}</td>
                      <td>${e.message}</td>
                    </tr>
                  `)}
              </tbody>
            </table>
          `:null}
    `}};Z([J({type:Object})],Q.prototype,`item`,void 0),Q=Z([q(`upload-item`)],Q);var we=`../modules/upload.xq`,Te=`my-attachment`,Ee=3e5,De=new Set([`emh`,`dba`]),$=class extends K{constructor(...e){super(...e),this.glossaries=[],this.user={id:`guest`,groups:[]},this.files=[],this.dragOver=!1,this.drawerOpen=!0}static{this.styles=o`
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
  `}connectedCallback(){super.connectedCallback(),this.loadUser(),this.loadGlossaries()}async loadUser(){try{this.user=await X(`../modules/who-am-i.xq`)}catch(e){console.error(`who-am-i failed`,e)}}async loadGlossaries(){try{this.glossaries=await X(`../modules/glossaries.xq`)}catch(e){console.error(`glossaries load failed`,e),this.glossaries=[]}}async deleteGlossary(e){if(confirm(`Delete glossary "${e}"?`))try{let t=await X(`../modules/delete.xq`,{params:{glossary:e}});if(!t?.success){alert(t?.message??`Failed to delete "${e}".`);return}await this.loadGlossaries()}catch(t){console.error(`delete failed`,t),alert(`Failed to delete "${e}": ${t.message}`)}}async logout(){try{let e=await X(`../modules/who-am-i.xq`,{params:{logout:!0}});this.user=e}catch(e){console.error(`logout failed`,e)}}goHome(){window.location.href=`../index.html`}isAdmin(){return!!this.user?.groups?.some(e=>De.has((e.id??``).toLowerCase()))}isLoggedIn(){return this.user?.id!==`guest`&&!!this.user?.id}onFileInputChange(e){let t=e.target;t.files&&this.queueFiles(Array.from(t.files)),t.value=``}onDrop(e){e.preventDefault(),this.dragOver=!1;let t=e.dataTransfer?.files;t&&t.length&&this.queueFiles(Array.from(t))}onDragOver(e){e.preventDefault(),this.dragOver=!0}onDragLeave(){this.dragOver=!1}queueFiles(e){let t=e.filter(e=>e.name.toLowerCase().endsWith(`.rdf`)),n=e.length-t.length;n>0&&alert(`${n} file(s) skipped — only .rdf files are accepted.`);for(let e of t){let t={id:this.createUploadId(e),filename:e.name,status:`Uploading…`,progress:0,messages:[]};this.files=[...this.files,t],this.uploadOne(e,t.id)}}createUploadId(e){return globalThis.crypto?.randomUUID?.()??`${Date.now()}-${Math.random()}-${e.name}`}updateEntry(e,t){this.files=this.files.map(n=>n.id===e?{...n,...t}:n)}uploadOne(e,t){return new Promise(n=>{let r=new XMLHttpRequest,i=new FormData;i.append(Te,e,e.name),r.open(`POST`,we),r.timeout=Ee,r.upload.onprogress=e=>{if(!e.lengthComputable)return;let n=Math.round(e.loaded/e.total*100);this.updateEntry(t,{progress:n})},r.onerror=()=>{this.updateEntry(t,{status:void 0,progress:0,messages:[{type:`fatal`,message:`Network error during upload.`}]}),n()},r.ontimeout=()=>{this.updateEntry(t,{status:void 0,progress:0,messages:[{type:`fatal`,message:`Upload timed out.`}]}),n()},r.onload=()=>{this.applyUploadResponse(t,r),n()},r.send(i)})}applyUploadResponse(e,t){let n=null;try{n=JSON.parse(t.responseText)}catch{this.updateEntry(e,{status:void 0,progress:0,messages:[{type:`fatal`,message:`Server returned non-JSON (HTTP ${t.status}).`}]});return}if(n.errorResponse){this.updateEntry(e,{status:void 0,progress:0,messages:[{type:`fatal`,message:n.errorResponse.message}]});return}let r=n.results?.[0];r?.responseFilename?this.updateEntry(e,{status:void 0,progress:100,responseFilename:r.responseFilename,location:r.location,messages:r.messages?.length?r.messages:[]}):this.updateEntry(e,{status:void 0,progress:100,messages:r?.messages??[]}),this.loadGlossaries()}render(){return F`
      <div class="layout">
        <aside class="drawer ${this.drawerOpen?``:`hidden`}">
          <header>Drawer</header>
          <section>
            ${this.isLoggedIn()?F`
                  <p style="margin: 6px 0;">
                    Signed in as <b>${this.user.id}</b>
                  </p>
                  <button @click=${()=>this.userDialog?.showModal()}>
                    Groups (${this.user.groups?.length??0})
                  </button>
                `:F`<p class="empty">Not signed in.</p>`}
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
            <span class="user">${this.user?.id??``}</span>
            ${this.isLoggedIn()?F`<button @click=${this.logout}>Log out</button>`:null}
          </div>

          <section class="content">
            ${this.isLoggedIn()?null:F`<div class="card">
                  <b>Read-only view.</b> Sign in from the main app to manage glossaries.
                </div>`}

            <div class="card">
              <h2>Glossaries</h2>
              ${this.glossaries.length?F`
                    <table class="grid">
                      <thead>
                        <tr><th>ID</th><th class="actions">Actions</th></tr>
                      </thead>
                      <tbody>
                        ${this.glossaries.map(e=>F`
                            <tr>
                              <td>${e}</td>
                              <td class="actions">
                                ${this.isAdmin()?F`<button
                                      class="icon-btn"
                                      title="Delete ${e}"
                                      @click=${()=>this.deleteGlossary(e)}
                                    >🗑</button>`:F`<span class="empty">—</span>`}
                              </td>
                            </tr>
                          `)}
                      </tbody>
                    </table>
                  `:F`<p class="empty">No glossaries loaded.</p>`}
            </div>

            <div class="card">
              <h2>Upload RDF(s)</h2>
              <div
                class="drop-zone ${this.dragOver?`dragover`:``}"
                @dragover=${this.onDragOver}
                @dragleave=${this.onDragLeave}
                @drop=${this.onDrop}
                @click=${()=>this.fileInput?.click()}
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
              ${this.files.length?F`
                    <h4 style="margin: 12px 0 4px 0;">Files</h4>
                    ${this.files.map(e=>F`<upload-item .item=${e}></upload-item>`)}
                  `:null}
            </div>
          </section>
        </main>
      </div>

      <dialog id="userdata">
        <h2>Groups</h2>
        ${this.user.groups?.length?F`
              <table class="grid">
                <thead>
                  <tr><th style="width: 10em;">ID</th><th>Description</th></tr>
                </thead>
                <tbody>
                  ${this.user.groups.map(e=>F`
                      <tr>
                        <td>${e.id}</td>
                        <td>${e.description??``}</td>
                      </tr>
                    `)}
                </tbody>
              </table>
            `:F`<p class="empty">No groups.</p>`}
        <div class="dialog-actions">
          <button @click=${()=>this.userDialog?.close()}>Close</button>
        </div>
      </dialog>
    `}};Z([Y()],$.prototype,`glossaries`,void 0),Z([Y()],$.prototype,`user`,void 0),Z([Y()],$.prototype,`files`,void 0),Z([Y()],$.prototype,`dragOver`,void 0),Z([Y()],$.prototype,`drawerOpen`,void 0),Z([Se(`#userdata`)],$.prototype,`userDialog`,void 0),Z([Se(`#fileInput`)],$.prototype,`fileInput`,void 0),$=Z([q(`magellan-glossary-admin-app`)],$);