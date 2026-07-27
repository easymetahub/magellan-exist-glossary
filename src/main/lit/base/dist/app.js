(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=globalThis,t=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap,i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,n=this.t;if(t&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=r.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(n,e))}return e}toString(){return this.cssText}},a=e=>new i(typeof e==`string`?e:e+``,void 0,n),o=(e,...t)=>new i(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,n),s=(n,r)=>{if(t)n.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let t of r){let r=document.createElement(`style`),i=e.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=t.cssText,n.appendChild(r)}},c=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return a(t)})(e):e,{is:l,defineProperty:u,getOwnPropertyDescriptor:ee,getOwnPropertyNames:te,getOwnPropertySymbols:ne,getPrototypeOf:re}=Object,d=globalThis,ie=d.trustedTypes,ae=ie?ie.emptyScript:``,oe=d.reactiveElementPolyfillSupport,f=(e,t)=>e,p={toAttribute(e,t){switch(t){case Boolean:e=e?ae:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},se=(e,t)=>!l(e,t),ce={attribute:!0,type:String,converter:p,reflect:!1,useDefault:!1,hasChanged:se};Symbol.metadata??=Symbol(`metadata`),d.litPropertyMetadata??=new WeakMap;var m=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ce){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&u(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=ee(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ce}static _$Ei(){if(this.hasOwnProperty(f(`elementProperties`)))return;let e=re(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(f(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f(`properties`))){let e=this.properties,t=[...te(e),...ne(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(c(e))}else e!==void 0&&t.push(c(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return s(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?p:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?p:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??se)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};m.elementStyles=[],m.shadowRootOptions={mode:`open`},m[f(`elementProperties`)]=new Map,m[f(`finalized`)]=new Map,oe?.({ReactiveElement:m}),(d.reactiveElementVersions??=[]).push(`2.1.2`);var le=globalThis,ue=e=>e,h=le.trustedTypes,de=h?h.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,fe=`$lit$`,g=`lit$${Math.random().toFixed(9).slice(2)}$`,pe=`?`+g,me=`<${pe}>`,_=document,v=()=>_.createComment(``),y=e=>e===null||typeof e!=`object`&&typeof e!=`function`,he=Array.isArray,ge=e=>he(e)||typeof e?.[Symbol.iterator]==`function`,_e=`[ 	
\f\r]`,b=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ve=/-->/g,ye=/>/g,x=RegExp(`>|${_e}(?:([^\\s"'>=/]+)(${_e}*=${_e}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),be=/'/g,xe=/"/g,Se=/^(?:script|style|textarea|title)$/i,S=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),C=Symbol.for(`lit-noChange`),w=Symbol.for(`lit-nothing`),Ce=new WeakMap,T=_.createTreeWalker(_,129);function we(e,t){if(!he(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return de===void 0?t:de.createHTML(t)}var Te=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=b;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===b?c[1]===`!--`?o=ve:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=x):(Se.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=x):o=ye:o===x?c[0]===`>`?(o=i??b,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?x:c[3]===`"`?xe:be):o===xe||o===be?o=x:o===ve||o===ye?o=b:(o=x,i=void 0);let ee=o===x&&e[t+1].startsWith(`/>`)?` `:``;a+=o===b?n+me:l>=0?(r.push(s),n.slice(0,l)+fe+n.slice(l)+g+ee):n+g+(l===-2?t:ee)}return[we(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},Ee=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Te(t,n);if(this.el=e.createElement(l,r),T.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=T.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(fe)){let t=u[o++],n=i.getAttribute(e).split(g),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?ke:r[1]===`?`?Ae:r[1]===`@`?je:D}),i.removeAttribute(e)}else e.startsWith(g)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Se.test(i.tagName)){let e=i.textContent.split(g),t=e.length-1;if(t>0){i.textContent=h?h.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],v()),T.nextNode(),c.push({type:2,index:++a});i.append(e[t],v())}}}else if(i.nodeType===8)if(i.data===pe)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(g,e+1))!==-1;)c.push({type:7,index:a}),e+=g.length-1}a++}}static createElement(e,t){let n=_.createElement(`template`);return n.innerHTML=e,n}};function E(e,t,n=e,r){if(t===C)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=y(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=E(e,i._$AS(e,t.values),i,r)),t}var De=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??_).importNode(t,!0);T.currentNode=r;let i=T.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Oe(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Me(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=T.nextNode(),a++)}return T.currentNode=_,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Oe=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=E(this,e,t),y(e)?e===w||e==null||e===``?(this._$AH!==w&&this._$AR(),this._$AH=w):e!==this._$AH&&e!==C&&this._(e):e._$litType$===void 0?e.nodeType===void 0?ge(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==w&&y(this._$AH)?this._$AA.nextSibling.data=e:this.T(_.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Ee.createElement(we(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new De(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Ce.get(e.strings);return t===void 0&&Ce.set(e.strings,t=new Ee(e)),t}k(t){he(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(v()),this.O(v()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=ue(e).nextSibling;ue(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},D=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=w,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=w}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=E(this,e,t,0),a=!y(e)||e!==this._$AH&&e!==C,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=E(this,r[n+o],t,o),s===C&&(s=this._$AH[o]),a||=!y(s)||s!==this._$AH[o],s===w?e=w:e!==w&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},ke=class extends D{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===w?void 0:e}},Ae=class extends D{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==w)}},je=class extends D{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=E(this,e,t,0)??w)===C)return;let n=this._$AH,r=e===w&&n!==w||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==w&&(n===w||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Me=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){E(this,e)}},Ne={M:fe,P:g,A:pe,C:1,L:Te,R:De,D:ge,V:E,I:Oe,H:D,N:Ae,U:je,B:ke,F:Me},Pe=le.litHtmlPolyfillSupport;Pe?.(Ee,Oe),(le.litHtmlVersions??=[]).push(`3.3.3`);var Fe=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Oe(t.insertBefore(v(),e),e,void 0,n??{})}return i._$AI(e),i},Ie=globalThis,O=class extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Fe(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return C}};O._$litElement$=!0,O.finalized=!0,Ie.litElementHydrateSupport?.({LitElement:O});var Le=Ie.litElementPolyfillSupport;Le?.({LitElement:O}),(Ie.litElementVersions??=[]).push(`4.2.2`);var k=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},Re={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:se},ze=(e=Re,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function A(e){return(t,n)=>typeof n==`object`?ze(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function j(e){return A({...e,state:!0,attribute:!1})}var Be=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);function Ve(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Be(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return Be(n,r,{get(){return a(this)}})}}function He(e){if(!e)return``;let t=new URLSearchParams;for(let[n,r]of Object.entries(e))r!=null&&t.set(n,String(r));let n=t.toString();return n?`?${n}`:``}async function Ue(e,t={}){let{method:n=`GET`,params:r,body:i,headers:a={},signal:o}=t,s={method:n,signal:o,headers:{Accept:`application/json`,...a}};i!==void 0&&(s.headers[`Content-Type`]=`application/json`,s.body=JSON.stringify(i));let c=await fetch(e+He(r),s);if(!c.ok){let t=await c.text().catch(()=>``);throw Error(`API ${n} ${e} failed [${c.status}]: ${t}`)}return(c.headers.get(`content-type`)??``).includes(`application/json`)?await c.json():await c.text()}function We(){let e={};return new URLSearchParams(location.search).forEach((t,n)=>e[n]=t),e}function M(e,t=!1){let n=new URLSearchParams(location.search);for(let[t,r]of Object.entries(e))r===``||r==null?n.delete(t):n.set(t,r);let r=n.toString(),i=`${location.pathname}${r?`?${r}`:``}${location.hash}`;t?history.replaceState(null,``,i):history.pushState(null,``,i),window.dispatchEvent(new CustomEvent(`params-change`,{detail:We()}))}window.addEventListener(`popstate`,()=>{window.dispatchEvent(new CustomEvent(`params-change`,{detail:We()}))});function N(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var P=class extends O{constructor(...e){super(...e),this.facet={name:``,values:[]},this._expanded=!1}static{this.styles=o`
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
  `}_hasExt(){return!!(this.facet.extvalues&&this.facet.extvalues.length>0)}willUpdate(e){e.has(`facet`)&&(this._expanded=!1)}_row(e){let t=`${this.facet.name}:${e.name}`;return S`
      <div class="row">
        <label title=${e.name}>
          <input
            type="checkbox"
            .checked=${!!e.selected}
            @change=${t=>this._onToggle(t,e)}
            name=${t}
          />
          <span class="name">${e.name}</span>
        </label>
        <span class="counter">${e.count}</span>
      </div>
    `}_onToggle(e,t){let n=e.target.checked;t.selected=n,this.dispatchEvent(new CustomEvent(`facet-toggle`,{detail:{facet:this.facet.name,value:t,checked:n},bubbles:!0,composed:!0})),this.requestUpdate()}render(){let e=this.facet.values??[],t=this.facet.extvalues??[];return S`
      ${e.map(e=>this._row(e))}
      <div class="ext" ?hidden=${!this._expanded}>
        ${t.map(e=>this._row(e))}
      </div>
      <button
        class="toggle"
        ?hidden=${!this._hasExt()}
        @click=${()=>this._expanded=!this._expanded}
      >
        ${this._expanded?`less…`:`more…`}
      </button>
    `}};N([A({attribute:!1})],P.prototype,`facet`,void 0),N([j()],P.prototype,`_expanded`,void 0),P=N([k(`facet-selector`)],P);var Ge=class extends O{constructor(...e){super(...e),this.facet={name:``}}static{this.styles=o`
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
  `}render(){return S`
      <div class="card">
        <div class="title"><span>${this.facet.name}</span></div>
        ${this.facet.min===void 0?S`<facet-selector .facet=${this.facet}></facet-selector>`:S`<div class="range-todo">Range facet — Phase 2c.</div>`}
      </div>
    `}};N([A({attribute:!1})],Ge.prototype,`facet`,void 0),Ge=N([k(`facet-card`)],Ge);var Ke={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},qe=e=>(...t)=>({_$litDirective$:e,values:t}),Je=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},Ye=class extends Je{constructor(e){if(super(e),this.it=w,e.type!==Ke.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===w||e==null)return this._t=void 0,this.it=e;if(e===C)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Ye.directiveName=`unsafeHTML`,Ye.resultType=1;var Xe=qe(Ye),Ze=class extends O{constructor(...e){super(...e),this.snippet=`Hello <span class="hi">World</span>!`}static{this.styles=o`
    :host { display: block; }
    .hi { background-color: ${a(`yellow`)}; }
  `}render(){return S`<div>${Xe(this.snippet)}</div>`}};N([A({type:String})],Ze.prototype,`snippet`,void 0),Ze=N([k(`search-snippet-highlight`)],Ze);var Qe=o`
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
`,$e=new Set,F=new Map,I,et=`ltr`,tt=`en`,nt=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(nt){let e=new MutationObserver(it);et=document.documentElement.dir||`ltr`,tt=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function rt(...e){e.map(e=>{let t=e.$code.toLowerCase();F.has(t)?F.set(t,Object.assign(Object.assign({},F.get(t)),e)):F.set(t,e),I||=e}),it()}function it(){nt&&(et=document.documentElement.dir||`ltr`,tt=document.documentElement.lang||navigator.language),[...$e.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var at=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){$e.add(this.host)}hostDisconnected(){$e.delete(this.host)}dir(){return`${this.host.dir||et}`.toLowerCase()}lang(){return`${this.host.lang||tt}`.toLowerCase()}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=F.get(`${n}-${r}`),a=F.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&I&&I[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(I&&I[e])i=I[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},ot={$code:`en`,$name:`English`,$dir:`ltr`,carousel:`Carousel`,clearEntry:`Clear entry`,close:`Close`,copied:`Copied`,copy:`Copy`,currentValue:`Current value`,error:`Error`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:`Hide password`,loading:`Loading`,nextSlide:`Next slide`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,previousSlide:`Previous slide`,progress:`Progress`,remove:`Remove`,resize:`Resize`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,selectAColorFromTheScreen:`Select a color from the screen`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,toggleColorFormat:`Toggle color format`};rt(ot);var st=ot,ct=class extends at{};rt(st);var lt=o`
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
`,ut=Object.defineProperty,dt=Object.defineProperties,ft=Object.getOwnPropertyDescriptor,pt=Object.getOwnPropertyDescriptors,mt=Object.getOwnPropertySymbols,ht=Object.prototype.hasOwnProperty,gt=Object.prototype.propertyIsEnumerable,_t=e=>{throw TypeError(e)},vt=(e,t,n)=>t in e?ut(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,L=(e,t)=>{for(var n in t||={})ht.call(t,n)&&vt(e,n,t[n]);if(mt)for(var n of mt(t))gt.call(t,n)&&vt(e,n,t[n]);return e},yt=(e,t)=>dt(e,pt(t)),R=(e,t,n,r)=>{for(var i=r>1?void 0:r?ft(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&ut(t,n,i),i},bt=(e,t,n)=>t.has(e)||_t(`Cannot `+n),xt=(e,t,n)=>(bt(e,t,`read from private field`),n?n.call(e):t.get(e)),St=(e,t,n)=>t.has(e)?_t(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),Ct=(e,t,n,r)=>(bt(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),z,B=class extends O{constructor(){super(),St(this,z,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let n=new CustomEvent(e,L({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(n),n}static define(e,t=this,n={}){let r=customElements.get(e);if(!r){try{customElements.define(e,t,n)}catch{customElements.define(e,class extends t{},n)}return}let i=` (unknown version)`,a=i;`version`in t&&t.version&&(i=` v`+t.version),`version`in r&&r.version&&(a=` v`+r.version),!(i&&a&&i===a)&&console.warn(`Attempted to register <${e}>${i}, but <${e}>${a} has already been registered.`)}attributeChangedCallback(e,t,n){xt(this,z)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),Ct(this,z,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}};z=new WeakMap,B.version=`2.20.1`,B.dependencies={},R([A()],B.prototype,`dir`,2),R([A()],B.prototype,`lang`,2);var wt=class extends B{constructor(){super(...arguments),this.localize=new ct(this)}render(){return S`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term(`loading`)}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};wt.styles=[lt,Qe];var V=new WeakMap,H=new WeakMap,U=new WeakMap,Tt=new WeakSet,W=new WeakMap,Et=class{constructor(e,t){this.handleFormData=e=>{let t=this.options.disabled(this.host),n=this.options.name(this.host),r=this.options.value(this.host),i=this.host.tagName.toLowerCase()===`sl-button`;this.host.isConnected&&!t&&!i&&typeof n==`string`&&n.length>0&&r!==void 0&&(Array.isArray(r)?r.forEach(t=>{e.formData.append(n,t.toString())}):e.formData.append(n,r.toString()))},this.handleFormSubmit=e=>{var t;let n=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&((t=V.get(this.form))==null||t.forEach(e=>{this.setUserInteracted(e,!0)})),this.form&&!this.form.noValidate&&!n&&!r(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),W.set(this.host,[])},this.handleInteraction=e=>{let t=W.get(this.host);t.includes(e.type)||t.push(e.type),t.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){let e=this.form.querySelectorAll(`*`);for(let t of e)if(typeof t.checkValidity==`function`&&!t.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){let e=this.form.querySelectorAll(`*`);for(let t of e)if(typeof t.reportValidity==`function`&&!t.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=L({form:e=>{let t=e.form;if(t){let n=e.getRootNode().querySelector(`#${t}`);if(n)return n}return e.closest(`form`)},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>e.disabled??!1,reportValidity:e=>typeof e.reportValidity!=`function`||e.reportValidity(),checkValidity:e=>typeof e.checkValidity!=`function`||e.checkValidity(),setValue:(e,t)=>e.value=t,assumeInteractionOn:[`sl-input`]},t)}hostConnected(){let e=this.options.form(this.host);e&&this.attachForm(e),W.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),W.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){let e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,V.has(this.form)?V.get(this.form).add(this.host):V.set(this.form,new Set([this.host])),this.form.addEventListener(`formdata`,this.handleFormData),this.form.addEventListener(`submit`,this.handleFormSubmit),this.form.addEventListener(`reset`,this.handleFormReset),H.has(this.form)||(H.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),U.has(this.form)||(U.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;let e=V.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener(`formdata`,this.handleFormData),this.form.removeEventListener(`submit`,this.handleFormSubmit),this.form.removeEventListener(`reset`,this.handleFormReset),H.has(this.form)&&(this.form.reportValidity=H.get(this.form),H.delete(this.form)),U.has(this.form)&&(this.form.checkValidity=U.get(this.form),U.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?Tt.add(e):Tt.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){let n=document.createElement(`button`);n.type=e,n.style.position=`absolute`,n.style.width=`0`,n.style.height=`0`,n.style.clipPath=`inset(50%)`,n.style.overflow=`hidden`,n.style.whiteSpace=`nowrap`,t&&(n.name=t.name,n.value=t.value,[`formaction`,`formenctype`,`formmethod`,`formnovalidate`,`formtarget`].forEach(e=>{t.hasAttribute(e)&&n.setAttribute(e,t.getAttribute(e))})),this.form.append(n),n.click(),n.remove()}}getForm(){return this.form??null}reset(e){this.doAction(`reset`,e)}submit(e){this.doAction(`submit`,e)}setValidity(e){let t=this.host,n=!!Tt.has(t),r=!!t.required;t.toggleAttribute(`data-required`,r),t.toggleAttribute(`data-optional`,!r),t.toggleAttribute(`data-invalid`,!e),t.toggleAttribute(`data-valid`,e),t.toggleAttribute(`data-user-invalid`,!e&&n),t.toggleAttribute(`data-user-valid`,e&&n)}updateValidity(){let e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){let t=new CustomEvent(`sl-invalid`,{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e?.preventDefault()}},Dt=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(yt(L({},Dt),{valid:!1,valueMissing:!0})),Object.freeze(yt(L({},Dt),{valid:!1,customError:!0}));var Ot=o`
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
`,kt=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===e.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`sl-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener(`slotchange`,this.handleSlotChange)}},At=``;function jt(e){At=e}function Mt(e=``){if(!At){let e=[...document.getElementsByTagName(`script`)],t=e.find(e=>e.hasAttribute(`data-shoelace`));if(t)jt(t.getAttribute(`data-shoelace`));else{let t=e.find(e=>/shoelace(\.min)?\.js($|\?)/.test(e.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(e.src)),n=``;t&&(n=t.getAttribute(`src`)),jt(n.split(`/`).slice(0,-1).join(`/`))}}return At.replace(/\/$/,``)+(e?`/${e.replace(/^\//,``)}`:``)}var Nt={name:`default`,resolver:e=>Mt(`assets/icons/${e}.svg`)},Pt={caret:`
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
  `},Ft=[Nt,{name:`system`,resolver:e=>e in Pt?`data:image/svg+xml,${encodeURIComponent(Pt[e])}`:``}],It=[];function Lt(e){It.push(e)}function Rt(e){It=It.filter(t=>t!==e)}function zt(e){return Ft.find(t=>t.name===e)}var Bt=o`
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
`;function Vt(e,t){let n=L({waitUntilFirstUpdate:!1},t);return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}var{I:Ht}=Ne,Ut=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,G=Symbol(),K=Symbol(),Wt,Gt=new Map,q=class extends B{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label=``,this.library=`default`}async resolveIcon(e,t){let n;if(t?.spriteSheet)return this.svg=S`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?G:K}catch{return K}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if((t?.tagName)?.toLowerCase()!==`svg`)return G;Wt||=new DOMParser;let r=Wt.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):G}catch{return G}}connectedCallback(){super.connectedCallback(),Lt(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Rt(this)}getIconSource(){let e=zt(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){var e;let{url:t,fromLibrary:n}=this.getIconSource(),r=n?zt(this.library):void 0;if(!t){this.svg=null;return}let i=Gt.get(t);if(i||(i=this.resolveIcon(t,r),Gt.set(t,i)),!this.initialRender)return;let a=await i;if(a===K&&Gt.delete(t),t===this.getIconSource().url){if(Ut(a)){if(this.svg=a,r){await this.updateComplete;let e=this.shadowRoot.querySelector(`[part='svg']`);typeof r.mutator==`function`&&e&&r.mutator(e)}return}switch(a){case K:case G:this.svg=null,this.emit(`sl-error`);break;default:this.svg=a.cloneNode(!0),(e=r?.mutator)==null||e.call(r,this.svg),this.emit(`sl-load`)}}}render(){return this.svg}};q.styles=[lt,Bt],R([j()],q.prototype,`svg`,2),R([A({reflect:!0})],q.prototype,`name`,2),R([A()],q.prototype,`src`,2),R([A()],q.prototype,`label`,2),R([A({reflect:!0})],q.prototype,`library`,2),R([Vt(`label`)],q.prototype,`handleLabelChange`,1),R([Vt([`name`,`src`,`library`])],q.prototype,`setIcon`,1);var Kt=qe(class extends Je{constructor(e){if(super(e),e.type!==Ke.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return C}}),qt=Symbol.for(``),Jt=e=>{if(e?.r===qt)return e?._$litStatic$},Yt=(e,...t)=>({_$litStatic$:t.reduce((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]),r:qt}),Xt=new Map,Zt=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],i=Jt(a))!==void 0;)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Xt.get(e))===void 0&&(o.raw=o,Xt.set(e,t=o)),n=s}return e(t,...n)})(S),J=e=>e??w,Y=class extends B{constructor(){super(...arguments),this.formControlController=new Et(this,{assumeInteractionOn:[`click`]}),this.hasSlotController=new kt(this,`[default]`,`prefix`,`suffix`),this.localize=new ct(this),this.hasFocus=!1,this.invalid=!1,this.title=``,this.variant=`default`,this.size=`medium`,this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type=`button`,this.name=``,this.value=``,this.href=``,this.rel=`noreferrer noopener`}get validity(){return this.isButton()?this.button.validity:Dt}get validationMessage(){return this.isButton()?this.button.validationMessage:``}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit(`sl-blur`)}handleFocus(){this.hasFocus=!0,this.emit(`sl-focus`)}handleClick(){this.type===`submit`&&this.formControlController.submit(this),this.type===`reset`&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return!this.isButton()||this.button.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.isButton()||this.button.reportValidity()}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){let e=this.isLink(),t=e?Yt`a`:Yt`button`;return Zt`
      <${t}
        part="base"
        class=${Kt({button:!0,"button--default":this.variant==="default","button--primary":this.variant===`primary`,"button--success":this.variant===`success`,"button--neutral":this.variant===`neutral`,"button--warning":this.variant===`warning`,"button--danger":this.variant===`danger`,"button--text":this.variant===`text`,"button--small":this.size===`small`,"button--medium":this.size===`medium`,"button--large":this.size===`large`,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()===`rtl`,"button--has-label":this.hasSlotController.test(`[default]`),"button--has-prefix":this.hasSlotController.test(`prefix`),"button--has-suffix":this.hasSlotController.test(`suffix`)})}
        ?disabled=${J(e?void 0:this.disabled)}
        type=${J(e?void 0:this.type)}
        title=${this.title}
        name=${J(e?void 0:this.name)}
        value=${J(e?void 0:this.value)}
        href=${J(e&&!this.disabled?this.href:void 0)}
        target=${J(e?this.target:void 0)}
        download=${J(e?this.download:void 0)}
        rel=${J(e?this.rel:void 0)}
        role=${J(e?void 0:`button`)}
        aria-disabled=${this.disabled?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Zt` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:``}
        ${this.loading?Zt`<sl-spinner part="spinner"></sl-spinner>`:``}
      </${t}>
    `}};Y.styles=[lt,Ot],Y.dependencies={"sl-icon":q,"sl-spinner":wt},R([Ve(`.button`)],Y.prototype,`button`,2),R([j()],Y.prototype,`hasFocus`,2),R([j()],Y.prototype,`invalid`,2),R([A()],Y.prototype,`title`,2),R([A({reflect:!0})],Y.prototype,`variant`,2),R([A({reflect:!0})],Y.prototype,`size`,2),R([A({type:Boolean,reflect:!0})],Y.prototype,`caret`,2),R([A({type:Boolean,reflect:!0})],Y.prototype,`disabled`,2),R([A({type:Boolean,reflect:!0})],Y.prototype,`loading`,2),R([A({type:Boolean,reflect:!0})],Y.prototype,`outline`,2),R([A({type:Boolean,reflect:!0})],Y.prototype,`pill`,2),R([A({type:Boolean,reflect:!0})],Y.prototype,`circle`,2),R([A()],Y.prototype,`type`,2),R([A()],Y.prototype,`name`,2),R([A()],Y.prototype,`value`,2),R([A()],Y.prototype,`href`,2),R([A()],Y.prototype,`target`,2),R([A()],Y.prototype,`rel`,2),R([A()],Y.prototype,`download`,2),R([A()],Y.prototype,`form`,2),R([A({attribute:`formaction`})],Y.prototype,`formAction`,2),R([A({attribute:`formenctype`})],Y.prototype,`formEnctype`,2),R([A({attribute:`formmethod`})],Y.prototype,`formMethod`,2),R([A({attribute:`formnovalidate`,type:Boolean})],Y.prototype,`formNoValidate`,2),R([A({attribute:`formtarget`})],Y.prototype,`formTarget`,2),R([Vt(`disabled`,{waitUntilFirstUpdate:!0})],Y.prototype,`handleDisabledChange`,1),Y.define(`sl-button`);var Qt=class extends O{constructor(...e){super(...e),this.item={glossary:``,label:``,name:``},this._selectLink=()=>{let e=[this.item.glossary,this.item.label].join(`~~`);this.dispatchEvent(new CustomEvent(`params-change`,{detail:{facets:e,selected:!0},bubbles:!0,composed:!0}))}}static{this.styles=o`
    :host { display: inline-block; }
    sl-button::part(base) { padding-top: 4px; padding-bottom: 3px; }
  `}render(){return S`<sl-button variant="primary" size="small" @click=${this._selectLink}
      >${this.item.name}</sl-button
    >`}};N([A({type:Object})],Qt.prototype,`item`,void 0),Qt=N([k(`result-item-button`)],Qt);var X=class extends O{constructor(...e){super(...e),this.params={},this.editable=!1,this._expanded=!1}static{this.styles=o`
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
  `}updated(e){e.has(`item`)&&(this._expanded=!1)}_show(e){return Array.isArray(e)&&e.length>0}_renderGrid(){let e=this.item.grid;return e?S`
      <table class="grid">
        <thead>
          <tr>${e.columns.map(e=>S`<th>${e}</th>`)}</tr>
        </thead>
        <tbody>
          ${e.rows.map(t=>S`<tr>${e.columns.map(e=>S`<td>${t[e]??``}</td>`)}</tr>`)}
        </tbody>
      </table>
    `:``}render(){let e=this.item.concept;return S`
      <div class="card">
        <div>
          <span class="circle">${this.item.index}</span>
          <span class="term">${e.term}</span>
        </div>
        <div class="glossary">Glossary: ${this.item.glossary}</div>
        ${(this.item.snippets??[]).map(e=>S`<search-snippet-highlight .snippet=${e}></search-snippet-highlight>`)}
        ${this._renderGrid()}
        <button class="expand" @click=${()=>this._expanded=!this._expanded}>
          ${this._expanded?`▲ Hide details`:`▼ Show details`}
        </button>
        ${this._expanded?S`
              <div class="concept-card">
                ${e.altlabel?S`<h5>AltLabel</h5><p>${e.altlabel}</p>`:``}
                <h5>Definition</h5>
                ${(e.definition??[]).map(e=>S`<p>${e}</p>`)}
                ${this._show(e.related)?S`<h5>Related</h5>
                      <div class="chips">
                        ${e.related.map(e=>S`<result-item-button
                            .item=${e}
                            .params=${this.params}
                          ></result-item-button>`)}
                      </div>`:``}
                ${this._show(e.broader)?S`<h5>Broader</h5>
                      <div class="chips">
                        ${e.broader.map(e=>S`<result-item-button
                            .item=${e}
                            .params=${this.params}
                          ></result-item-button>`)}
                      </div>`:``}
                ${this._show(e.narrower)?S`<h5>Narrower</h5>
                      <div class="chips">
                        ${e.narrower.map(e=>S`<result-item-button
                            .item=${e}
                            .params=${this.params}
                          ></result-item-button>`)}
                      </div>`:``}
              </div>
            `:``}
      </div>
    `}};N([A({attribute:!1})],X.prototype,`item`,void 0),N([A({attribute:!1})],X.prototype,`params`,void 0),N([A({type:Boolean})],X.prototype,`editable`,void 0),N([j()],X.prototype,`_expanded`,void 0),X=N([k(`result-item`)],X);var Z=class extends O{constructor(...e){super(...e),this.rangeSize=5,this.pageSize=10,this.total=0,this.offset=0}static{this.styles=o`
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
  `}get _pageCount(){return!this.total||!this.pageSize?0:Math.max(1,Math.ceil(this.total/this.pageSize))}get _current(){return this.pageSize?Math.floor((this.offset||0)/this.pageSize)+1:1}_go(e){let t=this._pageCount;if(!t)return;let n=Math.min(Math.max(e,1),t),r=(n-1)*this.pageSize;r!==this.offset&&(this.offset=r,this.dispatchEvent(new CustomEvent(`offset-change`,{detail:{offset:r,page:n},bubbles:!0,composed:!0})))}_pageBtn(e){let t=this._current;return S`<button
      class=${e===t?`current`:``}
      @click=${()=>this._go(e)}
      aria-current=${e===t?`page`:`false`}
    >
      ${e}
    </button>`}render(){let e=this._pageCount;if(e<=1)return S``;let t=this._current,n=Math.max(1,this.rangeSize),r=Math.floor(n/2),i=Math.max(1,t-r),a=Math.min(e,i+n-1);return i=Math.max(1,a-n+1),S`
      <button ?disabled=${t===1} @click=${()=>this._go(t-1)}>‹</button>
      ${i>1?S`${this._pageBtn(1)}${i>2?S`<span class="ellipsis">…</span>`:``}`:``}
      ${Array.from({length:a-i+1},(e,t)=>this._pageBtn(i+t))}
      ${a<e?S`${a<e-1?S`<span class="ellipsis">…</span>`:``}${this._pageBtn(e)}`:``}
      <button ?disabled=${t===e} @click=${()=>this._go(t+1)}>›</button>
    `}};N([A({type:Number,attribute:`range-size`})],Z.prototype,`rangeSize`,void 0),N([A({type:Number})],Z.prototype,`pageSize`,void 0),N([A({type:Number})],Z.prototype,`total`,void 0),N([A({type:Number})],Z.prototype,`offset`,void 0),Z=N([k(`emh-pagination`)],Z);var Q=`~~`,$t=1e3,en=new Set([`emh`,`dba`]),$=class extends O{constructor(...e){super(...e),this._params=We(),this._user={id:`guest`,groups:[]},this._result={total:0,available:0,results:[],facets:[]},this._search=``,this._loading=!1,this._drawerOpen=!0,this._loginData={user:``,password:``},this._onParams=()=>{this._params=We(),this._runSearch()},this._onFacetToggle=e=>{let{facet:t,value:n,checked:r}=e.detail;n.value??`${t}${n.name}`;let i=this._params.facets?this._params.facets.split(Q):[],a=`${t}${Q}${n.name}`;i.filter((e,t,n)=>t%2==1||`${n[t]}${Q}${n[t+1]??``}`!==a);let o=[];for(let e=0;e<i.length;e+=2)`${i[e]}${Q}${i[e+1]??``}`!==a&&o.push(i[e],i[e+1]);r&&o.push(t,n.name),M({facets:o.filter(Boolean).join(Q),start:``})},this._onOffsetChange=e=>{M({start:String(e.detail.offset)})}}static{this.styles=o`
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
  `}connectedCallback(){super.connectedCallback(),window.addEventListener(`params-change`,this._onParams),this.addEventListener(`facet-toggle`,this._onFacetToggle),this.addEventListener(`offset-change`,this._onOffsetChange),this._search=this._params.q??``,this._params.pagelength||(this._params={...this._params,pagelength:`10`}),this._loadUser(),this._runSearch(),this._maybeShowInfoOnFirstVisit()}disconnectedCallback(){window.removeEventListener(`params-change`,this._onParams),this.removeEventListener(`facet-toggle`,this._onFacetToggle),this.removeEventListener(`offset-change`,this._onOffsetChange),super.disconnectedCallback()}_maybeShowInfoOnFirstVisit(){document.cookie.replace(/(?:(?:^|.*;\s*)_emh_notify\s*=\s*([^;]*).*$)|^.*$/,`$1`)!==`true`&&(queueMicrotask(()=>this._emhinfo?.showModal()),document.cookie=`_emh_notify=true; expires=Fri, 31 Dec 9999 23:59:59 GMT`)}async _loadUser(){try{this._user=await Ue(`modules/who-am-i.xq`)}catch{}}async _runSearch(){this._searchAbort?.abort(),this._searchAbort=new AbortController,this._loading=!0;try{let e={...this._params};this._result=await Ue(`modules/search.xq`,{params:e,signal:this._searchAbort.signal})}catch(e){e?.name!==`AbortError`&&console.error(`search failed`,e)}finally{this._loading=!1}}_onSearchInput(e){this._search=e.target.value,clearTimeout(this._debounceTimer),this._debounceTimer=window.setTimeout(()=>{M({q:this._search,start:``})},$t)}_clearInput(){clearTimeout(this._debounceTimer),this._search=``,M({q:``,facets:``,start:``})}_isLoggedIn(){return this._user.id!==`guest`}_isAdmin(){return(this._user.groups??[]).some(e=>en.has((e.id??``).toLowerCase()))}_openLoginDialog(){this._isLoggedIn()?this._userdata.showModal():this._login.showModal()}async _attemptLogin(e){e.preventDefault();try{let e=await Ue(`modules/who-am-i.xq`,{params:this._loginData});this._user=e,e.error||this._login.close()}catch(e){console.error(`login failed`,e)}}async _attemptLogout(){try{this._user=await Ue(`modules/who-am-i.xq`,{params:{logout:`true`}})}catch(e){console.error(`logout failed`,e)}}_goAdmin(){window.location.href=`admin/index.html`}_fmt(e){return(e??0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,`,`)}_onPageSize(e){let t=e.target.value;M({pagelength:t,start:``})}render(){let e=this._result.facets??[];return S`
      <div class="layout">
        <aside class=${`drawer`+(this._drawerOpen?``:` hidden`)}>
          <header>Facets</header>
          <section>
            ${e.filter(e=>e.values&&e.values.length).map(e=>S`<facet-card .facet=${e}></facet-card>`)}
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
              <span>Page size: ${this._params.pagelength??`10`}</span>
              <input
                type="range"
                min="10" max="100" step="10"
                .value=${this._params.pagelength??`10`}
                @change=${this._onPageSize}
              />
            </label>
            <button @click=${this._openLoginDialog}>
              Hello ${this._user.name??this._user.id}
            </button>
            ${this._isLoggedIn()?S`<button @click=${this._attemptLogout} title="Log out">✕</button>`:``}
            ${this._isAdmin()?S`<button @click=${this._goAdmin} title="Admin">⚙</button>`:``}
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
            ${(this._result.results??[]).map(e=>S`<result-item .item=${e} .params=${this._params}></result-item>`)}
            <div class="card copyright">
              Copyright © 2018 Magellan AI Corporation. All rights reserved.
            </div>
            <footer class="spacer"></footer>
          </section>
        </main>
      </div>

      ${this._loading?S`<div class="spinner-backdrop"><div class="spinner"></div></div>`:``}

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
        ${this._user.error?S`<p class="error">Invalid password</p>`:``}
        <form @submit=${this._attemptLogin}>
          <label>User</label>
          <input
            type="text"
            .value=${this._loginData.user}
            @input=${e=>this._loginData={...this._loginData,user:e.target.value}}
          />
          <label>Password</label>
          <input
            type="password"
            .value=${this._loginData.password}
            @input=${e=>this._loginData={...this._loginData,password:e.target.value}}
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
            ${(this._user.groups??[]).map(e=>S`<tr><td>${e.id}</td><td>${e.description??``}</td></tr>`)}
          </tbody>
        </table>
        <div class="buttons">
          <button @click=${()=>this._userdata.close()}>Close</button>
        </div>
      </dialog>
    `}};N([j()],$.prototype,`_params`,void 0),N([j()],$.prototype,`_user`,void 0),N([j()],$.prototype,`_result`,void 0),N([j()],$.prototype,`_search`,void 0),N([j()],$.prototype,`_loading`,void 0),N([j()],$.prototype,`_drawerOpen`,void 0),N([j()],$.prototype,`_loginData`,void 0),N([Ve(`#emhinfo`)],$.prototype,`_emhinfo`,void 0),N([Ve(`#login`)],$.prototype,`_login`,void 0),N([Ve(`#userdata`)],$.prototype,`_userdata`,void 0),$=N([k(`emh-accelerator-app`)],$);