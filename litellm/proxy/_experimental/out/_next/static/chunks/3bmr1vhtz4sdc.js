(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,871943,502547,e=>{"use strict";var t=e.i(271645);let r=t.forwardRef(function(e,r){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:r},e),t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 9l-7 7-7-7"}))});e.s(["f",0,r],871943);let i=t.forwardRef(function(e,r){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:r},e),t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"}))});e.s(["f",0,i],502547)},360820,e=>{"use strict";var t=e.i(271645);let r=t.forwardRef(function(e,r){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:r},e),t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 15l7-7 7 7"}))});e.s(["f",0,r],360820)},434626,e=>{"use strict";var t=e.i(271645);let r=t.forwardRef(function(e,r){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:r},e),t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"}))});e.s(["f",0,r],434626)},250980,e=>{"use strict";var t=e.i(271645);let r=t.forwardRef(function(e,r){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:r},e),t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"}))});e.s(["f",0,r],250980)},278587,e=>{"use strict";var t=e.i(271645);let r=t.forwardRef(function(e,r){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:r},e),t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"}))});e.s(["f",0,r],278587)},68155,e=>{"use strict";var t=e.i(271645);let r=t.forwardRef(function(e,r){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:r},e),t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"}))});e.s(["f",0,r],68155)},586448,e=>{"use strict";var t=e.i(271645),r=e.i(540143),i=e.i(869230),s=e.i(915823),a=e.i(619273);function n(e,t){let r=new Set(t);return e.filter(e=>!r.has(e))}var l=class extends s.f{#e;#t;#r;#i;#s;#a;#n;#l;#o;#u=[];constructor(e,t,r){super(),this.#e=e,this.#i=r,this.#r=[],this.#s=[],this.#t=[],this.setQueries(t)}onSubscribe(){1===this.listeners.size&&this.#s.forEach(e=>{e.subscribe(t=>{this.#d(e,t)})})}onUnsubscribe(){this.listeners.size||this.destroy()}destroy(){this.listeners=new Set,this.#s.forEach(e=>{e.destroy()})}setQueries(e,t){this.#r=e,this.#i=t,r.f.batch(()=>{let e=this.#s,t=this.#c(this.#r);t.forEach(e=>e.observer.setOptions(e.defaultedQueryOptions));let r=t.map(e=>e.observer),i=r.map(e=>e.getCurrentResult()),s=e.length!==r.length,l=r.some((t,r)=>t!==e[r]),o=s||l,u=!!o||i.some((e,t)=>{let r=this.#t[t];return!r||!(0,a.U)(e,r)});(o||u)&&(o&&(this.#u=t,this.#s=r),this.#t=i,this.hasListeners()&&(o&&(n(e,r).forEach(e=>{e.destroy()}),n(r,e).forEach(e=>{e.subscribe(t=>{this.#d(e,t)})})),this.#p()))})}getCurrentResult(){return this.#t}getQueries(){return this.#s.map(e=>e.getCurrentQuery())}getObservers(){return this.#s}getOptimisticResult(e,t){let r=this.#c(e),i=r.map(e=>e.observer.getOptimisticResult(e.defaultedQueryOptions)),s=r.map(e=>e.defaultedQueryOptions.queryHash);return[i,e=>this.#m(e??i,t,s),()=>this.#g(i,r)]}#g(e,t){return t.map((r,i)=>{let s=e[i];return r.defaultedQueryOptions.notifyOnChangeProps?s:r.observer.trackResult(s,e=>{t.forEach(t=>{t.observer.trackProp(e)})})})}#m(e,t,r){if(t){let i=this.#o,s=void 0!==r&&void 0!==i&&(i.length!==r.length||r.some((e,t)=>e!==i[t]));return(!this.#a||this.#t!==this.#l||s||t!==this.#n)&&(this.#n=t,this.#l=this.#t,void 0!==r&&(this.#o=r),this.#a=(0,a.B)(this.#a,t(e))),this.#a}return e}#f(){return this.#i?.combine!==void 0&&this.#s.some((e,t)=>e.options.suspense&&this.#t[t]?.data===void 0)}#c(e){let t=new Map;this.#s.forEach(e=>{let r=e.options.queryHash;if(!r)return;let i=t.get(r);i?i.push(e):t.set(r,[e])});let r=[];return e.forEach(e=>{let s=this.#e.defaultQueryOptions(e),a=t.get(s.queryHash)?.shift()??new i.f(this.#e,s);r.push({defaultedQueryOptions:s,observer:a})}),r}#d(e,t){let r=this.#s.indexOf(e);if(-1!==r){var i;let e;this.#t=(i=this.#t,(e=i.slice(0))[r]=t,e),this.#p()}}#p(){if(this.hasListeners()){let e=this.#g(this.#t,this.#u),t=this.#f(),i=this.#a,s=t?i:this.#m(e,this.#i?.combine);(t||i!==s)&&r.f.batch(()=>{this.listeners.forEach(e=>{e(this.#t)})})}}},o=e.i(912598),u=e.i(381384),d=e.i(673664),c=e.i(427001),p=e.i(254440);e.s(["f",0,function({queries:e,...s},n){let m=(0,o.d)(n),g=(0,u.f)(),f=(0,d.f)(),h=t.useMemo(()=>e.map(e=>{let t=m.defaultQueryOptions(e);return t._optimisticResults=g?"isRestoring":"optimistic",t}),[e,m,g]);h.forEach(e=>{(0,p.p)(e);let t=m.getQueryCache().get(e.queryHash);(0,c.l)(e,f,t)}),(0,c.E)(f);let[b]=t.useState(()=>new l(m,h,s)),[x,_,v]=b.getOptimisticResult(h,s.combine),y=!g&&!1!==s.subscribed;t.useSyncExternalStore(t.useCallback(e=>y?b.subscribe(r.f.batchCalls(e)):a.z,[b,y]),()=>b.getCurrentResult(),()=>b.getCurrentResult()),t.useEffect(()=>{b.setQueries(h,s)},[h,s,b]);let w=x.some((e,t)=>(0,p.Q)(h[t],e))?x.flatMap((e,t)=>{let r=h[t];if(r&&(0,p.Q)(r,e)){let e=new i.f(m,r);return(0,p.X)(r,e,f)}return[]}):[];if(w.length>0)throw Promise.all(w);let j=x.find((e,t)=>{let r=h[t];return r&&(0,c.P)({result:e,errorResetBoundary:f,throwOnError:r.throwOnError,query:m.getQueryCache().get(r.queryHash),suspense:r.suspense})});if(j?.error)throw j.error;return _(v())}],586448)},180127,e=>{"use strict";let t=(0,e.i(475254).f)("arrow-left",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);e.s(["f",0,t])},871689,e=>{"use strict";var t=e.i(180127);e.s(["f",()=>t.f])},810980,e=>{"use strict";let t=(0,e.i(475254).f)("book-open",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);e.s(["f",0,t],810980)},306228,e=>{"use strict";let t=(0,e.i(475254).f)("link-2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);e.s(["f",0,t],306228)},283086,576144,e=>{"use strict";let t=(0,e.i(475254).f)("sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);e.s(["f",0,t],576144),e.s(["f",0,t],283086)},605500,(e,t,r)=>{"use strict";e.i(247167),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Image",{enumerable:!0,get:function(){return _}});let i=e.r(555682),s=e.r(190809),a=e.r(843476),n=s._(e.r(271645)),l=i._(e.r(174080)),o=i._(e.r(325633)),u=e.r(908927),d=e.r(65856),c=e.r(49381),p=i._(e.r(1948)),m=e.r(818581);function g(e,t,r,i,s,a,n){let l=e?.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&s(!0),r?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,s=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>s,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{s=!0,t.stopPropagation()}})}i?.current&&i.current(e)}}))}function f(e){return n.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let h="u"<typeof window?n.useEffect:n.useLayoutEffect,b=(0,n.forwardRef)(({src:e,srcSet:t,sizes:r,height:i,width:s,decoding:l,className:o,style:u,fetchPriority:d,placeholder:c,loading:p,unoptimized:b,fill:x,onLoadRef:_,onLoadingCompleteRef:v,setBlurComplete:y,setShowAltText:w,sizesInput:j,onLoad:k,onError:C,...O},E)=>{let N=(0,n.useRef)(!1),P=(0,n.useRef)(null);h(()=>{let{current:e}=N,{current:t}=P;e||null===t||(C&&(t.src=t.src),t.complete&&g(t,c,_,v,y,b,j),N.current=!0)},[e,c,_,v,C,b,j]);let S=(0,m.useMergedRef)(E,P);return(0,a.jsx)("img",{...O,...f(d),loading:p,width:s,height:i,decoding:l,"data-nimg":x?"fill":"1",className:o,style:u,sizes:r,srcSet:t,src:e,ref:S,onLoad:e=>{g(e.currentTarget,c,_,v,y,b,j)},onError:e=>{w(!0),"empty"!==c&&y(!0),C&&C(e)}})});function x({isAppRouter:e,imgAttributes:t}){let r={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...f(t.fetchPriority)};return e&&l.default.preload?(l.default.preload(t.src,r),null):(0,a.jsx)(o.default,{children:(0,a.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...r},"__nimg-"+t.src+t.srcSet+t.sizes)})}let _=(0,n.forwardRef)((e,t)=>{let r=(0,n.useContext)(d.RouterContext),i=(0,c.useImageConfig)(),{onLoad:s,onLoadingComplete:l}=e,o=(0,n.useRef)(s);(0,n.useEffect)(()=>{o.current=s},[s]);let m=(0,n.useRef)(l);(0,n.useEffect)(()=>{m.current=l},[l]);let[g,f]=(0,n.useState)(!1),[h,_]=(0,n.useState)(!1),{props:v,meta:y}=(0,u.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:g,showAltText:h});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b,{...v,unoptimized:y.unoptimized,placeholder:y.placeholder,fill:y.fill,onLoadRef:o,onLoadingCompleteRef:m,setBlurComplete:f,setShowAltText:_,sizesInput:e.sizes,ref:t}),y.preload?(0,a.jsx)(x,{isAppRouter:!r,imgAttributes:v}):null]})});("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},325164,e=>{"use strict";var t=e.i(605500);e.s(["default",()=>t.Image])},49381,(e,t,r)=>{"use strict";e.i(247167),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useImageConfig",{enumerable:!0,get:function(){return l}});let i=e.r(271645),s=e.r(987690),a=e.r(918556),n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function l(){let e=(0,i.useContext)(a.ImageConfigContext);return(0,s.prepareImageConfig)(n,e)}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},670965,(e,t,r)=>{"use strict";function i(e,t){let r=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,t.qualities[0]):r}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"findClosestQuality",{enumerable:!0,get:function(){return i}})},908927,(e,t,r)=>{"use strict";e.i(247167),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImgProps",{enumerable:!0,get:function(){return o}});let i=e.r(543369),s=e.r(488143),a=["-moz-initial","fill","none","scale-down",void 0];function n(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:0/0:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):0/0}function o({src:e,sizes:t,unoptimized:r=!1,priority:u=!1,preload:d=!1,loading:c,className:p,quality:m,width:g,height:f,fill:h=!1,style:b,overrideSrc:x,onLoad:_,onLoadingComplete:v,placeholder:y="empty",blurDataURL:w,fetchPriority:j,decoding:k="async",layout:C,objectFit:O,objectPosition:E,lazyBoundary:N,lazyRoot:P,...S},A){var I;let $,R,{imgConf:T,showAltText:z,blurComplete:M,defaultLoader:L}=A;if(void 0===L)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let D=S.loader||L;delete S.loader,delete S.srcSet;let H="__next_img_default"in D;if(H){if("custom"===T.loader)throw Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`)}else{let e=D;D=t=>{let{config:r,...i}=t;return e(i)}}if(C){"fill"===C&&(h=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(b={...b,...e});let r={responsive:"100vw",fill:"100vw"}[C];r&&!t&&(t=r)}let U="",q=l(g),B=l(f);if((I=e)&&"object"==typeof I&&(n(I)||void 0!==I.src)){let t=n(e)?e.default:e;if(!t.src)throw Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`);if(!t.height||!t.width)throw Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`);if($=t.blurWidth,R=t.blurHeight,w=w||t.blurDataURL,U=t.src,!h)if(q||B){if(q&&!B){let e=q/t.width;B=Math.round(t.height*e)}else if(!q&&B){let e=B/t.height;q=Math.round(t.width*e)}}else q=t.width,B=t.height}let G=!u&&!d&&("lazy"===c||void 0===c);(!(e="string"==typeof e?e:U)||e.startsWith("data:")||e.startsWith("blob:"))&&(r=!0,G=!1),T.unoptimized&&(r=!0),H&&!T.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(r=!0);let W=l(m),Q=Object.assign(h?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:E}:{},z?{}:{color:"transparent"},b),F=M||"empty"===y?null:"blur"===y?`url("data:image/svg+xml;charset=utf-8,${(0,s.getImageBlurSvg)({widthInt:q,heightInt:B,blurWidth:$,blurHeight:R,blurDataURL:w||"",objectFit:Q.objectFit})}")`:`url("${y}")`,K=a.includes(Q.objectFit)?"fill"===Q.objectFit?"100% 100%":"cover":Q.objectFit,V=F?{backgroundSize:K,backgroundPosition:Q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:F}:{},Y=function({config:e,src:t,unoptimized:r,width:s,quality:a,sizes:n,loader:l}){if(r){if(t.startsWith("/")&&!t.startsWith("//")){let e=(0,i.getDeploymentId)();if(t.includes("/_next/static/immutable")&&!(0,i.getAssetToken)())e=void 0;else if(e){let r=t.indexOf("?");if(-1!==r){let i=new URLSearchParams(t.slice(r+1));i.get("dpl")||(i.append("dpl",e),t=t.slice(0,r)+"?"+i.toString())}else t+=`?dpl=${e}`}}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:o,kind:u}=function({deviceSizes:e,allSizes:t},r,i){if(i){let r=/(^|\s)(1?\d?\d)vw/g,s=[];for(let e;e=r.exec(i);)s.push(parseInt(e[2]));if(s.length){let r=.01*Math.min(...s);return{widths:t.filter(t=>t>=e[0]*r),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof r?{widths:e,kind:"w"}:{widths:[...new Set([r,2*r].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,s,n),d=o.length-1;return{sizes:n||"w"!==u?n:"100vw",srcSet:o.map((r,i)=>`${l({config:e,src:t,quality:a,width:r})} ${"w"===u?r:i+1}${u}`).join(", "),src:l({config:e,src:t,quality:a,width:o[d]})}}({config:T,src:e,unoptimized:r,width:q,quality:W,sizes:t,loader:D}),J=G?"lazy":c;return{props:{...S,loading:J,fetchPriority:j,width:q,height:B,decoding:k,className:p,style:{...Q,...V},sizes:Y.sizes,srcSet:Y.srcSet,src:x||Y.src},meta:{unoptimized:r,preload:d||u,placeholder:y,fill:h}}}},325633,(e,t,r)=>{"use strict";e.i(247167),Object.defineProperty(r,"__esModule",{value:!0});var i={default:function(){return f},defaultHead:function(){return c}};for(var s in i)Object.defineProperty(r,s,{enumerable:!0,get:i[s]});let a=e.r(555682),n=e.r(190809),l=e.r(843476),o=n._(e.r(271645)),u=a._(e.r(898879)),d=e.r(742732);function c(){return[(0,l.jsx)("meta",{charSet:"utf-8"},"charset"),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}let m=["name","httpEquiv","charSet","itemProp"];function g(e){let t,r,i,s;return e.reduce(p,[]).reverse().concat(c().reverse()).filter((t=new Set,r=new Set,i=new Set,s={},e=>{let a=!0,n=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){n=!0;let r=e.key.slice(e.key.indexOf("$")+1);t.has(r)?a=!1:t.add(r)}switch(e.type){case"title":case"base":r.has(e.type)?a=!1:r.add(e.type);break;case"meta":for(let t=0,r=m.length;t<r;t++){let r=m[t];if(e.props.hasOwnProperty(r))if("charSet"===r)i.has(r)?a=!1:i.add(r);else{let t=e.props[r],i=s[r]||new Set;("name"!==r||!n)&&i.has(t)?a=!1:(i.add(t),s[r]=i)}}}return a})).reverse().map((e,t)=>{let r=e.key||t;return o.default.cloneElement(e,{key:r})})}let f=function({children:e}){let t=(0,o.useContext)(d.HeadManagerContext);return(0,l.jsx)(u.default,{reduceComponentsToState:g,headManager:t,children:e})};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},488143,(e,t,r)=>{"use strict";function i({widthInt:e,heightInt:t,blurWidth:r,blurHeight:s,blurDataURL:a,objectFit:n}){let l=r?40*r:e,o=s?40*s:t,u=l&&o?`viewBox='0 0 ${l} ${o}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${u}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${u?"none":"contain"===n?"xMidYMid":"cover"===n?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${a}'/%3E%3C/svg%3E`}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},918556,(e,t,r)=>{"use strict";e.i(247167),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ImageConfigContext",{enumerable:!0,get:function(){return a}});let i=e.r(555682)._(e.r(271645)),s=e.r(987690),a=i.default.createContext(s.imageConfigDefault)},987690,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={VALID_LOADERS:function(){return a},imageConfigDefault:function(){return u},prepareImageConfig:function(){return o}};for(var s in i)Object.defineProperty(r,s,{enumerable:!0,get:i[s]});let a=["default","imgix","cloudinary","akamai","custom"],n={},l=new WeakMap;function o(e,t){let r=e??n,i=t??n,s=l.get(r);if(s){let e=s.get(i);if(e)return e}let a=e||t||u,o=[...a.deviceSizes].sort((e,t)=>e-t),d=[...a.imageSizes],c={deviceSizes:o,imageSizes:d,allSizes:[...o,...d].sort((e,t)=>e-t),qualities:void 0===a.qualities?void 0:[...a.qualities].sort((e,t)=>e-t),path:a.path,loader:a.loader,dangerouslyAllowSVG:a.dangerouslyAllowSVG,unoptimized:a.unoptimized,domains:a.domains,remotePatterns:a.remotePatterns,localPatterns:"u"<typeof window&&void 0!==t?t.localPatterns:a.localPatterns,output:a.output};return s||(s=new WeakMap,l.set(r,s)),s.set(i,c),c}let u={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1,customCacheHandler:!1}},1948,(e,t,r)=>{"use strict";e.i(247167),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return n}});let i=e.r(670965),s=e.r(543369);function a({config:e,src:t,width:r,quality:n}){let l=(0,s.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//"))if(t.includes("/_next/static/immutable")&&!(0,s.getAssetToken)())l=void 0;else{let e=t.indexOf("?");if(-1!==e){let r=new URLSearchParams(t.slice(e+1)),i=r.get("dpl");if(i){l=i,r.delete("dpl");let s=r.toString();t=t.slice(0,e)+(s?"?"+s:"")}}}if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`);let o=(0,i.findClosestQuality)(n,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${o}${t.startsWith("/")&&l?`&dpl=${l}`:""}`}a.__next_img_default=!0;let n=a},65856,(e,t,r)=>{"use strict";e.i(247167),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"RouterContext",{enumerable:!0,get:function(){return i}});let i=(e.r(555682)._(e.r(271645))).default.createContext(null)},898879,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return l}});let i=e.r(271645),s="u"<typeof window,a=s?()=>{}:i.useLayoutEffect,n=s?()=>{}:i.useEffect;function l(e){let{headManager:t,reduceComponentsToState:r}=e;function l(){if(t&&t.mountedInstances){let e=i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(e))}}return s&&(t?.mountedInstances?.add(e.children),l()),a(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),a(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),n(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},455037,e=>{"use strict";var t=e.i(494144);e.s(["f",()=>t.f])},842354,e=>{"use strict";var t=e.i(768371);e.s(["f",0,()=>t.q.useQuery("get","/.well-known/litellm-ui-config").data?.claude_code_marketplace_auth_required!==!1])},198458,e=>{"use strict";var t=e.i(655063),r=e.i(266027),i=e.i(271645),s=e.i(741466);e.s(["f",0,function(e){let{queryKey:a,fetchPage:n,serializeFilters:l,defaultSorting:o,defaultPageSize:u,enabled:d}=e,[c,p]=(0,i.useState)(o),[m,g]=(0,i.useState)({pageIndex:0,pageSize:u}),[f,h]=(0,i.useState)([]),[b,x]=(0,i.useState)(""),[_]=(0,t.f)(b,{wait:s.f}),v=(0,i.useMemo)(()=>{let e=c.map(e=>e.desc?`-${e.id}`:e.id).join(","),t=_.trim();return{page:m.pageIndex+1,page_size:m.pageSize,...""===e?{}:{sort:e},...""===t?{}:{q:t},...l(f)}},[c,m.pageIndex,m.pageSize,_,f,l]),y={queryKey:[...a,v],queryFn:({signal:e})=>n(v,e),enabled:d,placeholderData:e=>e},{data:w,isLoading:j,isPlaceholderData:k,isFetching:C,error:O,refetch:E}=(0,r.f)(y),N=(0,i.useCallback)(()=>g(e=>({...e,pageIndex:0})),[]),P=(0,i.useCallback)(e=>{p(e),N()},[N]),S=(0,i.useCallback)(e=>{h(e),N()},[N]),A=(0,i.useCallback)(e=>{x(e),N()},[N]),I=(0,i.useCallback)(()=>{E()},[E]);return{rows:(0,i.useMemo)(()=>w?.data??[],[w]),rowCount:w?.meta.total_count??0,isLoading:j||k,isFetching:C,error:O,refetch:I,sorting:c,onSortingChange:P,pagination:m,onPaginationChange:g,columnFilters:f,onColumnFiltersChange:S,searchValue:b,onSearchChange:A}}])},803099,e=>{"use strict";var t=e.i(602869),r=e.i(266027);let i=(0,e.i(243652).f)("providerFields");e.s(["f",0,()=>(0,r.f)({queryKey:i.list({}),queryFn:async()=>await (0,t.Bg)(),staleTime:864e5,gcTime:864e5})])},909947,e=>{"use strict";var t=e.i(865361);e.s(["f",0,e=>{let r,{apiKeySource:i,accessToken:s,apiKey:a,inputMessage:n,chatHistory:l,selectedTags:o,selectedVectorStores:u,selectedGuardrails:d,selectedPolicies:c,selectedVoice:p,endpointType:m,selectedModel:g,selectedSdk:f,proxySettings:h,customHeaders:b}=e,x="session"===i?s:a,_=window.location.origin,v=h?.LITELLM_UI_API_DOC_BASE_URL;v&&v.trim()?_=v:h?.PROXY_BASE_URL&&(_=h.PROXY_BASE_URL);let y=n||"Your prompt here",w=y.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n"),j=l.filter(e=>!e.isImage).map(({role:e,content:t})=>({role:e,content:t})),k={};o.length>0&&(k.tags=o),u.length>0&&(k.vector_stores=u),d.length>0&&(k.guardrails=d),c.length>0&&(k.policies=c);let C=g||"your-model-name",O=b&&Object.keys(b).length>0?`,
	default_headers=${JSON.stringify(b,null,2).replace(/\n/g,"\n	")}`:"",E="azure"===f?`import openai

client = openai.AzureOpenAI(
	api_key="${x||"YOUR_LITELLM_API_KEY"}",
	azure_endpoint="${_}",
	api_version="2024-02-01"${O}
)`:`import openai

client = openai.OpenAI(
	api_key="${x||"YOUR_LITELLM_API_KEY"}",
	base_url="${_}"${O}
)`;switch(m){case t.Q.CHAT:{let e=Object.keys(k).length>0,t="";if(e){let e=JSON.stringify({metadata:k},null,2).split("\n").map(e=>" ".repeat(4)+e).join("\n").trim();t=`,
    extra_body=${e}`}let i=j.length>0?j:[{role:"user",content:y}];r=`
import base64

# Helper function to encode images to base64
def encode_image(image_path):
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode('utf-8')

# Example with text only
response = client.chat.completions.create(
    model="${C}",
    messages=${JSON.stringify(i,null,4)}${t}
)

print(response)

# Example with image or PDF (uncomment and provide file path to use)
# base64_file = encode_image("path/to/your/file.jpg")  # or .pdf
# response_with_file = client.chat.completions.create(
#     model="${C}",
#     messages=[
#         {
#             "role": "user",
#             "content": [
#                 {
#                     "type": "text",
#                     "text": "${w}"
#                 },
#                 {
#                     "type": "image_url",
#                     "image_url": {
#                         "url": f"data:image/jpeg;base64,{base64_file}"  # or data:application/pdf;base64,{base64_file}
#                     }
#                 }
#             ]
#         }
#     ]${t}
# )
# print(response_with_file)
`;break}case t.Q.RESPONSES:{let e=Object.keys(k).length>0,t="";if(e){let e=JSON.stringify({metadata:k},null,2).split("\n").map(e=>" ".repeat(4)+e).join("\n").trim();t=`,
    extra_body=${e}`}let i=j.length>0?j:[{role:"user",content:y}];r=`
import base64

# Helper function to encode images to base64
def encode_image(image_path):
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode('utf-8')

# Example with text only
response = client.responses.create(
    model="${C}",
    input=${JSON.stringify(i,null,4)}${t}
)

print(response.output_text)

# Example with image or PDF (uncomment and provide file path to use)
# base64_file = encode_image("path/to/your/file.jpg")  # or .pdf
# response_with_file = client.responses.create(
#     model="${C}",
#     input=[
#         {
#             "role": "user",
#             "content": [
#                 {"type": "input_text", "text": "${w}"},
#                 {
#                     "type": "input_image",
#                     "image_url": f"data:image/jpeg;base64,{base64_file}",  # or data:application/pdf;base64,{base64_file}
#                     "detail": "auto",
#                 },
#             ],
#         }
#     ]${t}
# )
# print(response_with_file.output_text)
`;break}case t.Q.IMAGE:r="azure"===f?`
# NOTE: The Azure SDK does not have a direct equivalent to the multi-modal 'responses.create' method shown for OpenAI.
# This snippet uses 'client.images.generate' and will create a new image based on your prompt.
# It does not use the uploaded image, as 'client.images.generate' does not support image inputs in this context.
import os
import requests
import json
import time
from PIL import Image

result = client.images.generate(
	model="${C}",
	prompt="${n}",
	n=1
)

json_response = json.loads(result.model_dump_json())

# Set the directory for the stored image
image_dir = os.path.join(os.curdir, 'images')

# If the directory doesn't exist, create it
if not os.path.isdir(image_dir):
	os.mkdir(image_dir)

# Initialize the image path
image_filename = f"generated_image_{int(time.time())}.png"
image_path = os.path.join(image_dir, image_filename)

try:
	# Retrieve the generated image
	if json_response.get("data") && len(json_response["data"]) > 0 && json_response["data"][0].get("url"):
			image_url = json_response["data"][0]["url"]
			generated_image = requests.get(image_url).content
			with open(image_path, "wb") as image_file:
					image_file.write(generated_image)

			print(f"Image saved to {image_path}")
			# Display the image
			image = Image.open(image_path)
			image.show()
	else:
			print("Could not find image URL in response.")
			print("Full response:", json_response)
except Exception as e:
	print(f"An error occurred: {e}")
	print("Full response:", json_response)
`:`
import base64
import os
import time
import json
from PIL import Image
import requests

# Helper function to encode images to base64
def encode_image(image_path):
	with open(image_path, "rb") as image_file:
			return base64.b64encode(image_file.read()).decode('utf-8')

# Helper function to create a file (simplified for this example)
def create_file(image_path):
	# In a real implementation, this would upload the file to OpenAI
	# For this example, we'll just return a placeholder ID
	return f"file_{os.path.basename(image_path).replace('.', '_')}"

# The prompt entered by the user
prompt = "${w}"

# Encode images to base64
base64_image1 = encode_image("body-lotion.png")
base64_image2 = encode_image("soap.png")

# Create file IDs
file_id1 = create_file("body-lotion.png")
file_id2 = create_file("incense-kit.png")

response = client.responses.create(
	model="${C}",
	input=[
			{
					"role": "user",
					"content": [
							{"type": "input_text", "text": prompt},
							{
									"type": "input_image",
									"image_url": f"data:image/jpeg;base64,{base64_image1}",
									"detail": "auto",
							},
							{
									"type": "input_image",
									"image_url": f"data:image/jpeg;base64,{base64_image2}",
									"detail": "auto",
							},
							{
									"type": "input_image",
									"file_id": file_id1,
									"detail": "auto",
							},
							{
									"type": "input_image",
									"file_id": file_id2,
									"detail": "auto",
							}
					],
			}
	],
	tools=[{"type": "image_generation"}],
)

# Process the response
image_generation_calls = [
	output
	for output in response.output
	if output.type == "image_generation_call"
]

image_data = [output.result for output in image_generation_calls]

if image_data:
	image_base64 = image_data[0]
	image_filename = f"edited_image_{int(time.time())}.png"
	with open(image_filename, "wb") as f:
			f.write(base64.b64decode(image_base64))
	print(f"Image saved to {image_filename}")
else:
	# If no image is generated, there might be a text response with an explanation
	text_response = [output.text for output in response.output if hasattr(output, 'text')]
	if text_response:
			print("No image generated. Model response:")
			print("\\n".join(text_response))
	else:
			print("No image data found in response.")
	print("Full response for debugging:")
	print(response)
`;break;case t.Q.IMAGE_EDITS:r="azure"===f?`
import base64
import os
import time
import json
from PIL import Image
import requests

# Helper function to encode images to base64
def encode_image(image_path):
	with open(image_path, "rb") as image_file:
			return base64.b64encode(image_file.read()).decode('utf-8')

# The prompt entered by the user
prompt = "${w}"

# Encode images to base64
base64_image1 = encode_image("body-lotion.png")
base64_image2 = encode_image("soap.png")

# Create file IDs
file_id1 = create_file("body-lotion.png")
file_id2 = create_file("incense-kit.png")

response = client.responses.create(
	model="${C}",
	input=[
			{
					"role": "user",
					"content": [
							{"type": "input_text", "text": prompt},
							{
									"type": "input_image",
									"image_url": f"data:image/jpeg;base64,{base64_image1}",
									"detail": "auto",
							},
							{
									"type": "input_image",
									"image_url": f"data:image/jpeg;base64,{base64_image2}",
									"detail": "auto",
							},
							{
									"type": "input_image",
									"file_id": file_id1,
									"detail": "auto",
							},
							{
									"type": "input_image",
									"file_id": file_id2,
									"detail": "auto",
							}
					],
			}
	],
	tools=[{"type": "image_generation"}],
)

# Process the response
image_generation_calls = [
	output
	for output in response.output
	if output.type == "image_generation_call"
]

image_data = [output.result for output in image_generation_calls]

if image_data:
	image_base64 = image_data[0]
	image_filename = f"edited_image_{int(time.time())}.png"
	with open(image_filename, "wb") as f:
			f.write(base64.b64decode(image_base64))
	print(f"Image saved to {image_filename}")
else:
	# If no image is generated, there might be a text response with an explanation
	text_response = [output.text for output in response.output if hasattr(output, 'text')]
	if text_response:
			print("No image generated. Model response:")
			print("\\n".join(text_response))
	else:
			print("No image data found in response.")
	print("Full response for debugging:")
	print(response)
`:`
import base64
import os
import time

# Helper function to encode images to base64
def encode_image(image_path):
	with open(image_path, "rb") as image_file:
			return base64.b64encode(image_file.read()).decode('utf-8')

# Helper function to create a file (simplified for this example)
def create_file(image_path):
	# In a real implementation, this would upload the file to OpenAI
	# For this example, we'll just return a placeholder ID
	return f"file_{os.path.basename(image_path).replace('.', '_')}"

# The prompt entered by the user
prompt = "${w}"

# Encode images to base64
base64_image1 = encode_image("body-lotion.png")
base64_image2 = encode_image("soap.png")

# Create file IDs
file_id1 = create_file("body-lotion.png")
file_id2 = create_file("incense-kit.png")

response = client.responses.create(
	model="${C}",
	input=[
			{
					"role": "user",
					"content": [
							{"type": "input_text", "text": prompt},
							{
									"type": "input_image",
									"image_url": f"data:image/jpeg;base64,{base64_image1}",
									"detail": "auto",
							},
							{
									"type": "input_image",
									"image_url": f"data:image/jpeg;base64,{base64_image2}",
									"detail": "auto",
							},
							{
									"type": "input_image",
									"file_id": file_id1,
									"detail": "auto",
							},
							{
									"type": "input_image",
									"file_id": file_id2,
									"detail": "auto",
							}
					],
			}
	],
	tools=[{"type": "image_generation"}],
)

# Process the response
image_generation_calls = [
	output
	for output in response.output
	if output.type == "image_generation_call"
]

image_data = [output.result for output in image_generation_calls]

if image_data:
	image_base64 = image_data[0]
	image_filename = f"edited_image_{int(time.time())}.png"
	with open(image_filename, "wb") as f:
			f.write(base64.b64decode(image_base64))
	print(f"Image saved to {image_filename}")
else:
	# If no image is generated, there might be a text response with an explanation
	text_response = [output.text for output in response.output if hasattr(output, 'text')]
	if text_response:
			print("No image generated. Model response:")
			print("\\n".join(text_response))
	else:
			print("No image data found in response.")
	print("Full response for debugging:")
	print(response)
`;break;case t.Q.EMBEDDINGS:r=`
response = client.embeddings.create(
	input="${n||"Your string here"}",
	model="${C}",
	encoding_format="base64" # or "float"
)

print(response.data[0].embedding)
`;break;case t.Q.TRANSCRIPTION:r=`
# Open the audio file
audio_file = open("path/to/your/audio/file.mp3", "rb")

# Make the transcription request
response = client.audio.transcriptions.create(
	model="${C}",
	file=audio_file${n?`,
	prompt="${n.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}"`:""}
)

print(response.text)
`;break;case t.Q.SPEECH:r=`
# Make the text-to-speech request
response = client.audio.speech.create(
	model="${C}",
	input="${n||"Your text to convert to speech here"}",
	voice="${p}"  # Options: alloy, ash, ballad, coral, echo, fable, nova, onyx, sage, shimmer
)

# Save the audio to a file
output_filename = "output_speech.mp3"
response.stream_to_file(output_filename)
print(f"Audio saved to {output_filename}")

# Optional: Customize response format and speed
# response = client.audio.speech.create(
#     model="${C}",
#     input="${n||"Your text to convert to speech here"}",
#     voice="alloy",
#     response_format="mp3",  # Options: mp3, opus, aac, flac, wav, pcm
#     speed=1.0  # Range: 0.25 to 4.0
# )
# response.stream_to_file("output_speech.mp3")
`;break;default:r="\n# Code generation for this endpoint is not implemented yet."}return`${E}
${r}`}])},209261,e=>{"use strict";var t=e.i(201787);let r=/^[a-zA-Z0-9][a-zA-Z0-9._-]*(\/[a-zA-Z0-9][a-zA-Z0-9._-]*)*$/,i=e=>e.trim().replace(/\/+$/,""),s=/\.(md|markdown|txt|json|ya?ml|toml)$/i,a=/\.zip$/i,n=/^[0-9a-fA-F]{64}$/,l=/^\d{1,3}(\.\d{1,3}){3}$/,o=/^[A-Za-z0-9-]+$/,u=/^[A-Za-z0-9._-]+$/,d=/^https?:\/\//i,c="ssh://",p=/^([a-z0-9._-]+)@([^:/@]+):(?!\/)(.+)$/i,m=e=>e.pathname.split("/").filter(e=>""!==e),g=e=>{try{return new URL(e)}catch{return null}},f=e=>e.hostname.includes(".")&&!e.hostname.startsWith("[")&&!l.test(e.hostname),h=e=>{let t=e.split("/").filter(e=>""!==e);return t[t.length-1]??""},b=e=>e.toLowerCase().replace(/[^a-z0-9-]+/g,"-").replace(/-+/g,"-").replace(/^-+|-+$/g,""),x=(e,s,a,n)=>{let l=i(n??"");return""!==l?r.test(l)?{parsed:{source:"git-subdir",url:s,path:l},label:t.f.t("claudeCodePlugins.sources.gitSubdir",{kind:e,url:s,path:l}),suggestedName:b(h(l))}:null:{parsed:{source:"url",url:s},label:t.f.t("claudeCodePlugins.sources.gitRepo",{kind:e,url:s}),suggestedName:b(a)}},_="<your-litellm-key>";e.s(["i",0,_,"U",0,(e,t)=>JSON.stringify({extraKnownMarketplaces:{litellm:{source:{source:"url",url:`${e}/claude-code/marketplace.json`,...t?{headers:{Authorization:`Bearer ${_}`}}:{}}}}},null,2),"a",0,e=>`/plugin install ${e.name}@litellm`,"u",0,e=>{if(!e)return"gray";let t=e.toLowerCase();if(t.includes("development")||t.includes("dev"))return"blue";if(t.includes("productivity")||t.includes("workflow"))return"green";if(t.includes("learning")||t.includes("education"))return"purple";if(t.includes("security")||t.includes("safety"))return"red";if(t.includes("data")||t.includes("analytics"))return"orange";else if(t.includes("integration")||t.includes("api"))return"yellow";return"gray"},"_",0,e=>"github"===e.source&&e.repo?t.f.t("claudeCodePlugins.sources.githubDisplay",{repo:e.repo}):"git-subdir"===e.source&&e.url&&e.path?`${e.url} @ ${e.path}`:("url"===e.source||"archive"===e.source)&&e.url?e.url:t.f.t("claudeCodePlugins.sources.unknown"),"E",0,e=>"github"===e.source&&e.repo?`https://github.com/${e.repo}`:("url"===e.source||"git-subdir"===e.source||"archive"===e.source)&&e.url&&d.test(e.url)?e.url:null,"r",0,e=>!e||/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),"R",0,e=>!e||/^\d+\.\d+\.\d+(-[a-zA-Z0-9.-]+)?(\+[a-zA-Z0-9.-]+)?$/.test(e),"b",0,e=>""===e.trim()||n.test(e.trim()),"P",0,e=>{let t=i(e);return""!==t&&r.test(t)},"D",0,e=>e&&""!==e.trim()?e.split(",").map(e=>e.trim()).filter(e=>""!==e):[],"Z",0,(e,n)=>{let l=((e,t)=>{let r=e.trim(),i=p.exec(r),s=i?`${c}${i[1]}@${i[2]}/${i[3]}`:r;if(!s.toLowerCase().startsWith(c))return null;let a=g(s);if(!a||""===a.username||""!==a.password||!f(a))return null;let n=s.indexOf("/",c.length);return -1===n||a.pathname!==s.slice(n)||m(a).length<2?null:x("SSH",r,h(a.pathname).replace(/\.git$/i,""),t)})(e,n);if(l)return l;let d=(e=>{let t=e.trim();if(""===t||t.startsWith("//"))return null;let r=g(/^[a-z][a-z0-9+.-]*:\/\//i.test(t)?t:`https://${t}`);return r&&"https:"===r.protocol&&""===r.username&&""===r.password&&f(r)?r:null})(e);if(!d)return null;if(a.test(d.pathname))return{parsed:{source:"archive",url:d.href},label:t.f.t("claudeCodePlugins.sources.zipArchive",{location:`${d.host}${d.pathname}`}),suggestedName:b(h(d.pathname).replace(a,""))};if("github.com"===d.hostname.replace(/^www\./,""))return((e,a)=>{let n=m(e);if(n.length<2)return null;let l=n[0],d=n[1].replace(/\.git$/,"");if(!o.test(l)||!u.test(d))return null;let c=`${l}/${d}`,p=`https://github.com/${c}`,g={parsed:{source:"github",repo:c},label:t.f.t("claudeCodePlugins.sources.githubRepo",{repo:c}),suggestedName:b(d)};if(n.length>=4&&("tree"===n[2]||"blob"===n[2])){let e=n.slice(4),a=h(e.join("/")),l=s.test(a)?e.slice(0,-1):e;if(0===l.length)return g;let o=i(l.join("/"));return r.test(o)?{parsed:{source:"git-subdir",url:p,path:o},label:t.f.t("claudeCodePlugins.sources.githubSubdir",{repo:c,path:o}),suggestedName:b(h(o))}:null}if(2!==n.length)return null;let f=i(a??"");return""!==f?r.test(f)?{parsed:{source:"git-subdir",url:p,path:f},label:t.f.t("claudeCodePlugins.sources.githubSubdir",{repo:c,path:f}),suggestedName:b(h(f))}:null:g})(d,n);if(m(d).length<2)return null;let _=h(d.pathname).replace(/\.git$/,"");return x("Git",`${d.protocol}//${d.host}${d.pathname.replace(/\/+$/,"")}`,_,n)},"e",0,e=>!!e&&""!==e.trim()&&/^[a-z0-9-]+$/.test(e)])},652272,e=>{"use strict";var t=e.i(843476),r=e.i(271645),i=e.i(871689),s=e.i(643531),a=e.i(174886),n=e.i(306228),l=e.i(345771),o=e.i(322831),u=e.i(842354),d=e.i(196631),c=e.i(209261);let p=({source:e})=>{let{t:r}=(0,o.f)(),i=(0,c.E)(e),s=i&&"git-subdir"===e.source&&e.path?`${i}/tree/main/${e.path}`:i;return s?(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("div",{className:"mb-1 text-xs text-muted-foreground",children:r("claudeCodePlugins.skillDetail.overview.source")}),(0,t.jsxs)("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1 break-all text-[13px] text-info",children:[s.replace("https://",""),(0,t.jsx)(n.f,{className:"size-3 shrink-0"})]})]}):e.url?(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("div",{className:"mb-1 text-xs text-muted-foreground",children:r("claudeCodePlugins.skillDetail.overview.source")}),(0,t.jsx)("div",{className:"break-all text-[13px] text-foreground",children:(0,c._)(e)})]}):null};e.s(["f",0,({skill:e,onBack:n})=>{let{t:m}=(0,o.f)(),[g,f]=(0,r.useState)("overview"),[h,b]=(0,r.useState)(null),x=(0,u.f)(),_=(e,t)=>{navigator.clipboard.writeText(e),b(t),setTimeout(()=>b(null),2e3)},v=(0,c.a)(e),y=(0,c.U)(window.location.origin,x),w=[...e.category?[{property:m("claudeCodePlugins.skillDetail.properties.category"),value:e.category}]:[],...e.domain?[{property:m("claudeCodePlugins.skillDetail.properties.domain"),value:e.domain}]:[],...e.namespace?[{property:m("claudeCodePlugins.skillDetail.properties.namespace"),value:e.namespace}]:[],...e.version?[{property:m("claudeCodePlugins.skillDetail.properties.version"),value:e.version}]:[],...e.author?.name?[{property:m("claudeCodePlugins.skillDetail.properties.author"),value:e.author.name}]:[],...e.created_at?[{property:m("claudeCodePlugins.skillDetail.properties.added"),value:new Date(e.created_at).toLocaleDateString()}]:[]],j=[{key:"overview",label:m("claudeCodePlugins.skillDetail.tabs.overview")},{key:"usage",label:m("claudeCodePlugins.skillDetail.tabs.usage")}];return(0,t.jsxs)("div",{className:"py-6 pl-0 pr-8",children:[(0,t.jsxs)("div",{onClick:n,className:"mb-6 inline-flex cursor-pointer items-center gap-1.5 text-sm text-muted-foreground",children:[(0,t.jsx)(i.f,{className:"size-3"}),(0,t.jsx)("span",{children:m("claudeCodePlugins.skillDetail.back")})]}),(0,t.jsxs)("div",{className:"mb-2",children:[(0,t.jsx)("h1",{className:"m-0 text-[28px] font-normal leading-tight text-foreground",children:e.name}),e.description&&(0,t.jsx)("p",{className:"mb-0 ml-0 mr-0 mt-2 text-sm leading-relaxed text-muted-foreground",children:e.description})]}),(0,t.jsx)("div",{className:"mb-7 mt-6 border-b border-border",children:(0,t.jsx)("div",{className:"flex",children:j.map(e=>(0,t.jsx)("div",{onClick:()=>f(e.key),className:(0,d.c)("-mb-px cursor-pointer border-b-[3px] px-5 py-3 text-sm",g===e.key?"border-info font-medium text-info":"border-transparent font-normal text-muted-foreground"),children:e.label},e.key))})}),"overview"===g&&(0,t.jsxs)("div",{className:"flex gap-16",children:[(0,t.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,t.jsx)("h2",{className:"m-0 mb-1 text-lg font-normal text-foreground",children:m("claudeCodePlugins.skillDetail.overview.title")}),(0,t.jsx)("p",{className:"m-0 mb-4 text-[13px] text-muted-foreground",children:m("claudeCodePlugins.skillDetail.overview.subtitle")}),(0,t.jsxs)("table",{className:"w-full border-collapse text-sm",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{className:"border-b border-border",children:[(0,t.jsx)("th",{className:"w-40 py-3 text-left font-medium text-muted-foreground",children:m("claudeCodePlugins.skillDetail.overview.propertyHeader")}),(0,t.jsx)("th",{className:"py-3 text-left font-medium text-muted-foreground",children:e.name})]})}),(0,t.jsx)("tbody",{children:w.map((e,r)=>(0,t.jsxs)("tr",{className:"border-b border-border",children:[(0,t.jsx)("td",{className:"py-3 text-foreground",children:e.property}),(0,t.jsx)("td",{className:"py-3 text-foreground",children:e.value})]},r))})]})]}),(0,t.jsxs)("div",{className:"w-60 shrink-0",children:[(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("div",{className:"mb-1 text-xs text-muted-foreground",children:m("claudeCodePlugins.skillDetail.overview.status")}),(0,t.jsx)("span",{className:(0,d.c)("rounded-xl px-2.5 py-[3px] text-xs font-medium",e.enabled?"bg-success/10 text-success":"bg-muted text-muted-foreground"),children:m(e.enabled?"claudeCodePlugins.skillDetail.overview.public":"claudeCodePlugins.skillDetail.overview.draft")})]}),(0,t.jsx)(p,{source:e.source}),e.keywords&&e.keywords.length>0&&(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("div",{className:"mb-2 text-xs text-muted-foreground",children:m("claudeCodePlugins.skillDetail.overview.tags")}),(0,t.jsx)("div",{className:"flex flex-wrap gap-1.5",children:e.keywords.map(e=>(0,t.jsx)("span",{className:"rounded-2xl border border-border bg-card px-3 py-1 text-xs text-foreground",children:e},e))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"mb-1 text-xs text-muted-foreground",children:m("claudeCodePlugins.skillDetail.overview.skillId")}),(0,t.jsx)("div",{className:"break-all font-mono text-xs text-foreground",children:e.id})]})]})]}),"usage"===g&&(0,t.jsxs)("div",{className:"max-w-[640px]",children:[(0,t.jsx)("h2",{className:"m-0 mb-2 text-lg font-normal text-foreground",children:m("claudeCodePlugins.skillDetail.usage.title")}),(0,t.jsx)("p",{className:"m-0 mb-6 text-sm leading-relaxed text-muted-foreground",children:m("claudeCodePlugins.skillDetail.usage.intro")}),(0,t.jsxs)("div",{className:"mb-6 overflow-hidden rounded-lg border border-border",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between border-b border-border bg-muted px-4 py-2.5",children:[(0,t.jsx)("span",{className:"text-[13px] font-medium text-foreground",children:m("claudeCodePlugins.skillDetail.runInClaudeCode")}),(0,t.jsxs)("button",{onClick:()=>_(v,"install"),className:(0,d.c)("flex cursor-pointer items-center gap-1 border-none bg-transparent p-0 text-xs","install"===h?"text-success":"text-info"),children:["install"===h?(0,t.jsx)(s.f,{className:"size-3"}):(0,t.jsx)(a.f,{className:"size-3"}),m("install"===h?"claudeCodePlugins.skillDetail.copied":"claudeCodePlugins.skillDetail.copy")]})]}),(0,t.jsx)("pre",{className:"m-0 bg-card px-4 py-3.5 font-mono text-sm text-foreground",children:v})]}),(0,t.jsxs)("div",{className:"mb-4 rounded-lg border border-warning/30 bg-warning/10 px-4 py-3",children:[(0,t.jsx)("p",{className:"m-0 mb-2 text-[13px] leading-relaxed text-muted-foreground",children:m("claudeCodePlugins.skillDetail.usage.staleCatalog",{name:e.name})}),(0,t.jsx)("pre",{className:"m-0 bg-transparent font-mono text-[13px] text-foreground",children:"/plugin marketplace update litellm"})]}),(0,t.jsxs)("p",{className:"m-0 text-[13px] leading-relaxed text-muted-foreground",children:[m("claudeCodePlugins.skillDetail.usage.notConfigured")," ",(0,t.jsx)("span",{onClick:()=>f("setup"),className:"cursor-pointer text-info",children:m("claudeCodePlugins.skillDetail.usage.seeSetup")})]})]}),"setup"===g&&(0,t.jsxs)("div",{className:"max-w-[640px]",children:[(0,t.jsx)("h2",{className:"m-0 mb-2 text-lg font-normal text-foreground",children:m("claudeCodePlugins.skillDetail.setup.title")}),x?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"mb-4 rounded-lg border border-warning/30 bg-warning/10 px-4 py-3",children:[(0,t.jsx)("p",{className:"m-0 mb-2 text-[13px] leading-relaxed text-muted-foreground",children:m("claudeCodePlugins.skillDetail.setup.removeFirst")}),(0,t.jsx)("pre",{className:"m-0 bg-transparent font-mono text-[13px] text-foreground",children:"/plugin marketplace remove litellm"})]}),(0,t.jsx)("p",{className:"m-0 mb-3 text-sm leading-relaxed text-muted-foreground",children:(0,t.jsx)(l.f,{i18nKey:"claudeCodePlugins.skillDetail.setup.requiresKey",components:{settings:(0,t.jsx)("code",{className:"rounded bg-muted px-1.5 py-px text-[13px]",children:"~/.claude/settings.json"}),placeholder:(0,t.jsx)("code",{className:"rounded bg-muted px-1.5 py-px text-[13px]",children:c.i})}})})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("p",{className:"m-0 mb-3 text-sm leading-relaxed text-muted-foreground",children:m("claudeCodePlugins.skillDetail.setup.runCommand")}),(0,t.jsxs)("div",{className:"mb-6 overflow-hidden rounded-lg border border-border",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between border-b border-border bg-muted px-4 py-2.5",children:[(0,t.jsx)("span",{className:"text-[13px] font-medium text-foreground",children:m("claudeCodePlugins.skillDetail.runInClaudeCode")}),(0,t.jsxs)("button",{onClick:()=>{let e=window.location.origin;_(`/plugin marketplace add ${e}/claude-code/marketplace.json`,"marketplace-cmd")},className:(0,d.c)("flex cursor-pointer items-center gap-1 border-none bg-transparent p-0 text-xs","marketplace-cmd"===h?"text-success":"text-info"),children:["marketplace-cmd"===h?(0,t.jsx)(s.f,{className:"size-3"}):(0,t.jsx)(a.f,{className:"size-3"}),m("marketplace-cmd"===h?"claudeCodePlugins.skillDetail.copied":"claudeCodePlugins.skillDetail.copy")]})]}),(0,t.jsx)("pre",{className:"m-0 bg-card px-4 py-3.5 font-mono text-[13px] text-foreground",children:`/plugin marketplace add ${window.location.origin}/claude-code/marketplace.json`})]}),(0,t.jsx)("p",{className:"m-0 mb-3 text-sm leading-relaxed text-muted-foreground",children:(0,t.jsx)(l.f,{i18nKey:"claudeCodePlugins.skillDetail.setup.orSettings",components:{settings:(0,t.jsx)("code",{className:"rounded bg-muted px-1.5 py-px text-[13px]",children:"~/.claude/settings.json"})}})})]}),(0,t.jsxs)("div",{className:"overflow-hidden rounded-lg border border-border",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between border-b border-border bg-muted px-4 py-2.5",children:[(0,t.jsx)("span",{className:"text-[13px] font-medium text-foreground",children:"~/.claude/settings.json"}),(0,t.jsxs)("button",{onClick:()=>_(y,"settings"),className:(0,d.c)("flex cursor-pointer items-center gap-1 border-none bg-transparent p-0 text-xs","settings"===h?"text-success":"text-info"),children:["settings"===h?(0,t.jsx)(s.f,{className:"size-3"}):(0,t.jsx)(a.f,{className:"size-3"}),m("settings"===h?"claudeCodePlugins.skillDetail.copied":"claudeCodePlugins.skillDetail.copy")]})]}),(0,t.jsx)("pre",{className:"m-0 bg-card px-4 py-3.5 font-mono text-[13px] text-foreground",children:y})]})]})]})}])},902555,e=>{"use strict";var t=e.i(843476),r=e.i(746798),i=e.i(271645);let s=i.forwardRef(function(e,t){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"}))}),a=i.forwardRef(function(e,t){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"}),i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}))});var n=e.i(278587),l=e.i(68155),o=e.i(360820),u=e.i(871943),d=e.i(434626);let c=i.forwardRef(function(e,t){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"}))});var p=e.i(196631);function m({icon:e,onClick:r,className:i,disabled:s,dataTestId:a}){return s?(0,t.jsx)("span",{className:"inline-flex shrink-0 cursor-not-allowed items-center justify-center p-1.5 opacity-50","data-testid":a,children:(0,t.jsx)(e,{className:"size-5 shrink-0"})}):(0,t.jsx)("span",{className:(0,p.P)("inline-flex shrink-0 cursor-pointer items-center justify-center p-1.5",i),onClick:r,"data-testid":a,children:(0,t.jsx)(e,{className:"size-5 shrink-0"})})}let g={Edit:{icon:s,className:"hover:text-info"},Delete:{icon:l.f,className:"hover:text-destructive"},Test:{icon:a,className:"hover:text-info"},Regenerate:{icon:n.f,className:"hover:text-success"},Reset:{icon:n.f,className:"hover:text-info"},Up:{icon:o.f,className:"hover:text-info"},Down:{icon:u.f,className:"hover:text-info"},Open:{icon:d.f,className:"hover:text-success"},Copy:{icon:c,className:"hover:text-info"}};e.s(["f",0,function({onClick:e,tooltipText:i,disabled:s=!1,disabledTooltipText:a,dataTestId:n,variant:l}){let{icon:o,className:u}=g[l],d=s?a:i,c=(0,t.jsx)(m,{icon:o,onClick:e,className:u,disabled:s,dataTestId:n});return d?(0,t.jsx)(r.g,{children:(0,t.jsxs)(r.W,{children:[(0,t.jsx)(r.y,{render:(0,t.jsx)("span",{tabIndex:s?0:void 0}),children:c}),(0,t.jsx)(r.Y,{children:d})]})}):(0,t.jsx)("span",{children:c})}],902555)},292335,e=>{"use strict";let t={NONE:"none",API_KEY:"api_key",BEARER_TOKEN:"bearer_token",TOKEN:"token",BASIC:"basic",AUTHORIZATION:"authorization",OAUTH2:"oauth2",OAUTH2_TOKEN_EXCHANGE:"oauth2_token_exchange",OAUTH2_ID_JAG:"oauth2_id_jag",AWS_SIGV4:"aws_sigv4",TRUE_PASSTHROUGH:"true_passthrough",OAUTH_DELEGATE:"oauth_delegate"},r=[{value:t.NONE,label:"None"},{value:t.API_KEY,label:"API Key"},{value:t.BEARER_TOKEN,label:"Bearer Token"},{value:t.TOKEN,label:"Token"},{value:t.BASIC,label:"Basic Auth"},{value:t.AUTHORIZATION,label:"Authorization (raw header)"},{value:t.OAUTH2,label:"OAuth"},{value:t.OAUTH2_TOKEN_EXCHANGE,label:"OAuth Token Exchange (OBO)"},{value:t.OAUTH2_ID_JAG,label:"ID-JAG (Okta Cross App Access)"},{value:t.AWS_SIGV4,label:"AWS SigV4 (Bedrock AgentCore MCPs)"},{value:t.TRUE_PASSTHROUGH,label:"True Passthrough (no LiteLLM auth)"},{value:t.OAUTH_DELEGATE,label:"OAuth Delegate (client-supplied upstream token)"}],i=e=>e===t.TRUE_PASSTHROUGH||e===t.OAUTH_DELEGATE,s={INTERACTIVE:"interactive",M2M:"m2m"},a=e=>{let t=e.credentials??{};return JSON.stringify({url:"string"==typeof e.url?e.url:null,spec_path:"string"==typeof e.spec_path?e.spec_path:null,auth_type:e.auth_type??null,oauth_flow_type:e.oauth_flow_type??null,client_id:t.client_id??null,client_secret:t.client_secret??null,scopes:t.scopes??null,upstream_resource:t.upstream_resource??null,issuer:e.issuer??null,authorization_url:e.authorization_url??null,token_url:e.token_url??null,registration_url:e.registration_url??null})},n=["client_id","client_secret"],l=["upstream_resource","upstream_token_header"],o=["access_token","refresh_token","expires_in","scope"],u=(e,t)=>{if(!e)return;let r=Object.fromEntries(t.filter(t=>"string"==typeof e[t]&&""!==e[t]).map(t=>[t,e[t]]));return Object.keys(r).length>0?r:void 0},d="client_credentials",c={SSE:"sse",HTTP:"http",STDIO:"stdio",OPENAPI:"openapi"},p=[{value:c.HTTP,label:"Streamable HTTP (Recommended)"},{value:c.SSE,label:"Server-Sent Events (SSE)"},{value:c.STDIO,label:"Standard Input/Output (stdio)"},{value:c.OPENAPI,label:"OpenAPI Spec"}];e.s(["_",0,l,"W",0,t,"B",0,r,"L",0,["credentials"],"V",0,"authorization_code","P",0,d,"S",0,"Server responded. Authentication and tools were not checked","n",0,s,"v",0,c,"m",0,p,"J",0,e=>e===t.TRUE_PASSTHROUGH||e===t.OAUTH_DELEGATE?"client_forwarded":e??null,"A",0,e=>e.auth_type===t.TRUE_PASSTHROUGH||e.auth_type===t.OAUTH_DELEGATE&&!e.dcr_bridge,"j",0,function(e){return e.auth_type===t.OAUTH2_TOKEN_EXCHANGE?"token_exchange":e.auth_type!==t.OAUTH2?null:e.oauth2_flow===d?"m2m":e.delegate_auth_to_upstream?"passthrough":"authorization_code"},"Z",0,a,"d",0,e=>null==e?t.NONE:e,"K",0,(e,t)=>null==e?c.SSE:t&&e!==c.STDIO?c.OPENAPI:e,"C",0,i,"i",0,(e,t)=>void 0!==t&&a(e)!==t,"z",0,e=>i(e)||e===t.OAUTH2_TOKEN_EXCHANGE,"Y",0,function(e){return e===d?s.M2M:e?s.INTERACTIVE:void 0},"o",0,e=>{let t=u(e,[...n,...l]),r=(e=>{if(!Array.isArray(e))return;let t=e.filter(e=>"string"==typeof e&&""!==e);return t.length>0?t:void 0})(e?.scopes);return void 0===r?t:{...t??{},scopes:r}},"T",0,e=>u(e,n),"f",0,e=>{if(!e)return;let t=Object.fromEntries(Object.entries(e).filter(([e])=>!o.includes(e)));return Object.keys(t).length>0?t:void 0}])},845150,e=>{"use strict";var t=e.i(843476),r=e.i(271645),i=e.i(131792);let s=(e,t)=>{let r=t.trim().toLowerCase();return!r||e.label.toLowerCase().includes(r)||e.value.toLowerCase().includes(r)||(e.description?.toLowerCase().includes(r)??!1)};e.s(["f",0,function({id:e,options:a,value:n=[],onValueChange:l,placeholder:o="Select options",emptyText:u="No options found",disabled:d=!1,loading:c=!1,allowCustomValues:p=!1,className:m,contentClassName:g}){let f=(0,i.d)(),[h,b]=(0,r.useState)(""),x=a.filter(e=>null!=e&&"string"==typeof e.value&&e.value.length>0),_=n.filter(e=>"string"==typeof e&&e.length>0).map(e=>x.find(t=>t.value===e)??{label:e,value:e}),v=h.trim(),y=x.some(e=>e.value.toLowerCase()===v.toLowerCase()),w=p&&v&&!y?[...x,{label:`Create "${v}"`,value:v}]:x;return(0,t.jsxs)(i.x,{multiple:!0,items:w,value:_,onValueChange:e=>{l(Array.from(new Set(p?e.flatMap(e=>n.includes(e.value)?[e.value]:e.value.split(",").map(e=>e.trim()).filter(e=>e.length>0)):e.map(e=>e.value)))),b("")},inputValue:h,onInputValueChange:b,isItemEqualToValue:(e,t)=>e.value===t.value,itemToStringLabel:e=>e.label,filter:s,disabled:d||c,children:[(0,t.jsx)(i.V,{render:(0,t.jsx)("div",{ref:f}),className:`min-h-8 py-1 text-sm ${m??""}`,children:(0,t.jsx)(i.l,{children:r=>(0,t.jsxs)(t.Fragment,{children:[r.map(e=>(0,t.jsx)(i.Q,{"aria-label":e.label,children:e.label},e.value)),(0,t.jsx)(i.z,{id:e,placeholder:c?"Loading...":o,className:"min-w-24","aria-label":o||void 0}),r.length>0&&!d&&!c&&(0,t.jsx)(i.y,{className:"ml-auto self-center","aria-label":"Clear all"})]})})}),(0,t.jsxs)(i.R,{anchor:f,className:g,children:[(0,t.jsx)(i.S,{children:u}),(0,t.jsx)(i.k,{children:e=>(0,t.jsx)(i.T,{value:e,disabled:e.disabled,children:(0,t.jsxs)("span",{className:"min-w-0",children:[(0,t.jsx)("span",{className:"block truncate",children:e.label}),e.description&&(0,t.jsx)("span",{className:"block truncate text-xs text-muted-foreground",children:e.description})]})},e.value)})]})]})}])},735450,e=>{"use strict";var t=e.i(411382),r=e.i(772325),i=e.i(54105),s=e.i(240192),a=e.i(138620);let n="https://docs.litellm.ai/docs/decisions",l=`${n}#supported-providers`,o=`${n}#self-hosted-laya-and-nimble`,u=new Set(["/v1/decisions","/v1/systemone"]),d=t.z.object({litellm_provider:i.z.string(),mode:i.z.string().nullish(),supported_endpoints:r.z.array(i.z.string()).nullish()}),c="decisions",p=["evaluation",c],m=e=>null!=e&&p.includes(e),g=e=>m(e.mode)||(e.supported_endpoints??[]).some(e=>u.has(e)),f=e=>{let t=s.z.record(i.z.string(),a.z.unknown()).safeParse(e);return t.success?Object.entries(t.data).flatMap(([e,t])=>{let r=d.safeParse(t);return r.success?[[e,r.data]]:[]}):[]},h={decisions:0,"self-hosted":1,"needs-upgrade":2},b=t.z.object({decision_model_providers:r.z.array(i.z.string())}),x=(e,t)=>e.model.length-t.model.length||e.model.localeCompare(t.model),_=(e,t,r)=>({row:e,routeOrder:h[e.route],rankInProvider:r.slice(0,t).filter(t=>t.provider===e.provider).length});e.s(["O",0,n,"d",0,c,"Z",0,l,"L",0,o,"B",0,"playground?tab=system-one","F",0,function(e){let t=f(e),r=t.filter(([,e])=>g(e)),i=new Map([...new Set(r.map(([,e])=>e.litellm_provider))].map(e=>{let r=t.filter(([,t])=>t.litellm_provider===e);return[e,{decisionOnly:r.every(([,e])=>g(e))}]}));return{models:new Set(r.map(([e])=>e)),providers:i}},"W",0,(e,t)=>f(e).filter(([,e])=>g(e)).map(([e,r])=>({model:e,provider:r.litellm_provider,route:t?.has(r.litellm_provider)?"decisions":(r.supported_endpoints??["/v1/decisions"]).includes("/v1/decisions")?null===t?"decisions":"needs-upgrade":"self-hosted"})).toSorted(x).map(_).toSorted((e,t)=>e.routeOrder-t.routeOrder||e.rankInProvider-t.rankInProvider||e.row.provider.localeCompare(t.row.provider)).map(({row:e})=>e),"i",0,e=>m(e)?c:e??void 0,"q",0,e=>e.flatMap(e=>e===c?p:[e]),"m",0,g,"_",0,m,"r",0,(e,t,r)=>void 0!==t&&e.providers.get(t)?.decisionOnly===!0||r.some(t=>e.models.has(t)),"P",0,e=>{let t=b.safeParse(e);return t.success?new Set(t.data.decision_model_providers):null}])},899426,e=>{"use strict";let t=e=>e.trim().toLowerCase();function r(e,r){let i=t(e);if(""===i)return!0;let s=r.filter(e=>"string"==typeof e).map(e=>e.toLowerCase());return!!s.some(e=>e.includes(i))||i.split(/\s+/).every(e=>s.some(t=>t.includes(e)))}e.s(["$",0,function(e,t,i){return e.filter(e=>r(t,i(e)))},"h",0,r,"e",0,function(e,r,i){let s=t(r);if(""===s)return[...e];let a=e=>{let t=i(e).toLowerCase();return 1e3*(t===s)+100*!!t.startsWith(s)+(1e3-t.length)};return[...e].sort((e,t)=>a(t)-a(e))}])}]);