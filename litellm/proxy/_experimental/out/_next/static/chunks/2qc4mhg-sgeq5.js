(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,810980,e=>{"use strict";let t=(0,e.i(475254).f)("book-open",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);e.s(["f",0,t],810980)},306228,e=>{"use strict";let t=(0,e.i(475254).f)("link-2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);e.s(["f",0,t],306228)},605500,(e,t,o)=>{"use strict";e.i(247167),Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"Image",{enumerable:!0,get:function(){return k}});let r=e.r(555682),i=e.r(190809),n=e.r(843476),a=i._(e.r(271645)),l=r._(e.r(174080)),s=r._(e.r(325633)),d=e.r(908927),p=e.r(65856),c=e.r(49381),u=r._(e.r(1948)),g=e.r(818581);function m(e,t,o,r,i,n,a){let l=e?.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),o?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;o.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}r?.current&&r.current(e)}}))}function f(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let h="u"<typeof window?a.useEffect:a.useLayoutEffect,b=(0,a.forwardRef)(({src:e,srcSet:t,sizes:o,height:r,width:i,decoding:l,className:s,style:d,fetchPriority:p,placeholder:c,loading:u,unoptimized:b,fill:_,onLoadRef:k,onLoadingCompleteRef:y,setBlurComplete:v,setShowAltText:w,sizesInput:x,onLoad:j,onError:S,...C},P)=>{let O=(0,a.useRef)(!1),I=(0,a.useRef)(null);h(()=>{let{current:e}=O,{current:t}=I;e||null===t||(S&&(t.src=t.src),t.complete&&m(t,c,k,y,v,b,x),O.current=!0)},[e,c,k,y,S,b,x]);let z=(0,g.useMergedRef)(P,I);return(0,n.jsx)("img",{...C,...f(p),loading:u,width:i,height:r,decoding:l,"data-nimg":_?"fill":"1",className:s,style:d,sizes:o,srcSet:t,src:e,ref:z,onLoad:e=>{m(e.currentTarget,c,k,y,v,b,x)},onError:e=>{w(!0),"empty"!==c&&v(!0),S&&S(e)}})});function _({isAppRouter:e,imgAttributes:t}){let o={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...f(t.fetchPriority)};return e&&l.default.preload?(l.default.preload(t.src,o),null):(0,n.jsx)(s.default,{children:(0,n.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...o},"__nimg-"+t.src+t.srcSet+t.sizes)})}let k=(0,a.forwardRef)((e,t)=>{let o=(0,a.useContext)(p.RouterContext),r=(0,c.useImageConfig)(),{onLoad:i,onLoadingComplete:l}=e,s=(0,a.useRef)(i);(0,a.useEffect)(()=>{s.current=i},[i]);let g=(0,a.useRef)(l);(0,a.useEffect)(()=>{g.current=l},[l]);let[m,f]=(0,a.useState)(!1),[h,k]=(0,a.useState)(!1),{props:y,meta:v}=(0,d.getImgProps)(e,{defaultLoader:u.default,imgConf:r,blurComplete:m,showAltText:h});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b,{...y,unoptimized:v.unoptimized,placeholder:v.placeholder,fill:v.fill,onLoadRef:s,onLoadingCompleteRef:g,setBlurComplete:f,setShowAltText:k,sizesInput:e.sizes,ref:t}),v.preload?(0,n.jsx)(_,{isAppRouter:!o,imgAttributes:y}):null]})});("function"==typeof o.default||"object"==typeof o.default&&null!==o.default)&&void 0===o.default.__esModule&&(Object.defineProperty(o.default,"__esModule",{value:!0}),Object.assign(o.default,o),t.exports=o.default)},325164,e=>{"use strict";var t=e.i(605500);e.s(["default",()=>t.Image])},49381,(e,t,o)=>{"use strict";e.i(247167),Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"useImageConfig",{enumerable:!0,get:function(){return l}});let r=e.r(271645),i=e.r(987690),n=e.r(918556),a={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function l(){let e=(0,r.useContext)(n.ImageConfigContext);return(0,i.prepareImageConfig)(a,e)}("function"==typeof o.default||"object"==typeof o.default&&null!==o.default)&&void 0===o.default.__esModule&&(Object.defineProperty(o.default,"__esModule",{value:!0}),Object.assign(o.default,o),t.exports=o.default)},670965,(e,t,o)=>{"use strict";function r(e,t){let o=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-o)<Math.abs(e-o)?t:e,t.qualities[0]):o}Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"findClosestQuality",{enumerable:!0,get:function(){return r}})},908927,(e,t,o)=>{"use strict";e.i(247167),Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"getImgProps",{enumerable:!0,get:function(){return s}});let r=e.r(543369),i=e.r(488143),n=["-moz-initial","fill","none","scale-down",void 0];function a(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:0/0:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):0/0}function s({src:e,sizes:t,unoptimized:o=!1,priority:d=!1,preload:p=!1,loading:c,className:u,quality:g,width:m,height:f,fill:h=!1,style:b,overrideSrc:_,onLoad:k,onLoadingComplete:y,placeholder:v="empty",blurDataURL:w,fetchPriority:x,decoding:j="async",layout:S,objectFit:C,objectPosition:P,lazyBoundary:O,lazyRoot:I,...z},$){var M;let E,R,{imgConf:A,showAltText:T,blurComplete:L,defaultLoader:D}=$;if(void 0===D)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let F=z.loader||D;delete z.loader,delete z.srcSet;let H="__next_img_default"in F;if(H){if("custom"===A.loader)throw Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`)}else{let e=F;F=t=>{let{config:o,...r}=t;return e(r)}}if(S){"fill"===S&&(h=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[S];e&&(b={...b,...e});let o={responsive:"100vw",fill:"100vw"}[S];o&&!t&&(t=o)}let N="",q=l(m),U=l(f);if((M=e)&&"object"==typeof M&&(a(M)||void 0!==M.src)){let t=a(e)?e.default:e;if(!t.src)throw Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`);if(!t.height||!t.width)throw Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`);if(E=t.blurWidth,R=t.blurHeight,w=w||t.blurDataURL,N=t.src,!h)if(q||U){if(q&&!U){let e=q/t.width;U=Math.round(t.height*e)}else if(!q&&U){let e=U/t.height;q=Math.round(t.width*e)}}else q=t.width,U=t.height}let B=!d&&!p&&("lazy"===c||void 0===c);(!(e="string"==typeof e?e:N)||e.startsWith("data:")||e.startsWith("blob:"))&&(o=!0,B=!1),A.unoptimized&&(o=!0),H&&!A.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(o=!0);let W=l(g),G=Object.assign(h?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:C,objectPosition:P}:{},T?{}:{color:"transparent"},b),Y=L||"empty"===v?null:"blur"===v?`url("data:image/svg+xml;charset=utf-8,${(0,i.getImageBlurSvg)({widthInt:q,heightInt:U,blurWidth:E,blurHeight:R,blurDataURL:w||"",objectFit:G.objectFit})}")`:`url("${v}")`,V=n.includes(G.objectFit)?"fill"===G.objectFit?"100% 100%":"cover":G.objectFit,Q=Y?{backgroundSize:V,backgroundPosition:G.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Y}:{},J=function({config:e,src:t,unoptimized:o,width:i,quality:n,sizes:a,loader:l}){if(o){if(t.startsWith("/")&&!t.startsWith("//")){let e=(0,r.getDeploymentId)();if(t.includes("/_next/static/immutable")&&!(0,r.getAssetToken)())e=void 0;else if(e){let o=t.indexOf("?");if(-1!==o){let r=new URLSearchParams(t.slice(o+1));r.get("dpl")||(r.append("dpl",e),t=t.slice(0,o)+"?"+r.toString())}else t+=`?dpl=${e}`}}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:s,kind:d}=function({deviceSizes:e,allSizes:t},o,r){if(r){let o=/(^|\s)(1?\d?\d)vw/g,i=[];for(let e;e=o.exec(r);)i.push(parseInt(e[2]));if(i.length){let o=.01*Math.min(...i);return{widths:t.filter(t=>t>=e[0]*o),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof o?{widths:e,kind:"w"}:{widths:[...new Set([o,2*o].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,i,a),p=s.length-1;return{sizes:a||"w"!==d?a:"100vw",srcSet:s.map((o,r)=>`${l({config:e,src:t,quality:n,width:o})} ${"w"===d?o:r+1}${d}`).join(", "),src:l({config:e,src:t,quality:n,width:s[p]})}}({config:A,src:e,unoptimized:o,width:q,quality:W,sizes:t,loader:F}),K=B?"lazy":c;return{props:{...z,loading:K,fetchPriority:x,width:q,height:U,decoding:j,className:u,style:{...G,...Q},sizes:J.sizes,srcSet:J.srcSet,src:_||J.src},meta:{unoptimized:o,preload:p||d,placeholder:v,fill:h}}}},325633,(e,t,o)=>{"use strict";e.i(247167),Object.defineProperty(o,"__esModule",{value:!0});var r={default:function(){return f},defaultHead:function(){return c}};for(var i in r)Object.defineProperty(o,i,{enumerable:!0,get:r[i]});let n=e.r(555682),a=e.r(190809),l=e.r(843476),s=a._(e.r(271645)),d=n._(e.r(898879)),p=e.r(742732);function c(){return[(0,l.jsx)("meta",{charSet:"utf-8"},"charset"),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function u(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}let g=["name","httpEquiv","charSet","itemProp"];function m(e){let t,o,r,i;return e.reduce(u,[]).reverse().concat(c().reverse()).filter((t=new Set,o=new Set,r=new Set,i={},e=>{let n=!0,a=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){a=!0;let o=e.key.slice(e.key.indexOf("$")+1);t.has(o)?n=!1:t.add(o)}switch(e.type){case"title":case"base":o.has(e.type)?n=!1:o.add(e.type);break;case"meta":for(let t=0,o=g.length;t<o;t++){let o=g[t];if(e.props.hasOwnProperty(o))if("charSet"===o)r.has(o)?n=!1:r.add(o);else{let t=e.props[o],r=i[o]||new Set;("name"!==o||!a)&&r.has(t)?n=!1:(r.add(t),i[o]=r)}}}return n})).reverse().map((e,t)=>{let o=e.key||t;return s.default.cloneElement(e,{key:o})})}let f=function({children:e}){let t=(0,s.useContext)(p.HeadManagerContext);return(0,l.jsx)(d.default,{reduceComponentsToState:m,headManager:t,children:e})};("function"==typeof o.default||"object"==typeof o.default&&null!==o.default)&&void 0===o.default.__esModule&&(Object.defineProperty(o.default,"__esModule",{value:!0}),Object.assign(o.default,o),t.exports=o.default)},488143,(e,t,o)=>{"use strict";function r({widthInt:e,heightInt:t,blurWidth:o,blurHeight:i,blurDataURL:n,objectFit:a}){let l=o?40*o:e,s=i?40*i:t,d=l&&s?`viewBox='0 0 ${l} ${s}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${d}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${d?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${n}'/%3E%3C/svg%3E`}Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},918556,(e,t,o)=>{"use strict";e.i(247167),Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"ImageConfigContext",{enumerable:!0,get:function(){return n}});let r=e.r(555682)._(e.r(271645)),i=e.r(987690),n=r.default.createContext(i.imageConfigDefault)},987690,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r={VALID_LOADERS:function(){return n},imageConfigDefault:function(){return d},prepareImageConfig:function(){return s}};for(var i in r)Object.defineProperty(o,i,{enumerable:!0,get:r[i]});let n=["default","imgix","cloudinary","akamai","custom"],a={},l=new WeakMap;function s(e,t){let o=e??a,r=t??a,i=l.get(o);if(i){let e=i.get(r);if(e)return e}let n=e||t||d,s=[...n.deviceSizes].sort((e,t)=>e-t),p=[...n.imageSizes],c={deviceSizes:s,imageSizes:p,allSizes:[...s,...p].sort((e,t)=>e-t),qualities:void 0===n.qualities?void 0:[...n.qualities].sort((e,t)=>e-t),path:n.path,loader:n.loader,dangerouslyAllowSVG:n.dangerouslyAllowSVG,unoptimized:n.unoptimized,domains:n.domains,remotePatterns:n.remotePatterns,localPatterns:"u"<typeof window&&void 0!==t?t.localPatterns:n.localPatterns,output:n.output};return i||(i=new WeakMap,l.set(o,i)),i.set(r,c),c}let d={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1,customCacheHandler:!1}},1948,(e,t,o)=>{"use strict";e.i(247167),Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"default",{enumerable:!0,get:function(){return a}});let r=e.r(670965),i=e.r(543369);function n({config:e,src:t,width:o,quality:a}){let l=(0,i.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//"))if(t.includes("/_next/static/immutable")&&!(0,i.getAssetToken)())l=void 0;else{let e=t.indexOf("?");if(-1!==e){let o=new URLSearchParams(t.slice(e+1)),r=o.get("dpl");if(r){l=r,o.delete("dpl");let i=o.toString();t=t.slice(0,e)+(i?"?"+i:"")}}}if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`);let s=(0,r.findClosestQuality)(a,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${o}&q=${s}${t.startsWith("/")&&l?`&dpl=${l}`:""}`}n.__next_img_default=!0;let a=n},65856,(e,t,o)=>{"use strict";e.i(247167),Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"RouterContext",{enumerable:!0,get:function(){return r}});let r=(e.r(555682)._(e.r(271645))).default.createContext(null)},898879,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"default",{enumerable:!0,get:function(){return l}});let r=e.r(271645),i="u"<typeof window,n=i?()=>{}:r.useLayoutEffect,a=i?()=>{}:r.useEffect;function l(e){let{headManager:t,reduceComponentsToState:o}=e;function l(){if(t&&t.mountedInstances){let e=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(o(e))}}return i&&(t?.mountedInstances?.add(e.children),l()),n(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),n(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},466828,e=>{"use strict";var t=e.i(843476),o=e.i(271645),r=e.i(678784);let i=(0,e.i(475254).f)("clipboard",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]]);var n=e.i(650056);let a={'code[class*="language-"]':{background:"hsl(230, 1%, 98%)",color:"hsl(230, 8%, 24%)",fontFamily:'"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"2",OTabSize:"2",tabSize:"2",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{background:"hsl(230, 1%, 98%)",color:"hsl(230, 8%, 24%)",fontFamily:'"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"2",OTabSize:"2",tabSize:"2",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:"0.5em 0",overflow:"auto",borderRadius:"0.3em"},'code[class*="language-"]::-moz-selection':{background:"hsl(230, 1%, 90%)",color:"inherit"},'code[class*="language-"] *::-moz-selection':{background:"hsl(230, 1%, 90%)",color:"inherit"},'pre[class*="language-"] *::-moz-selection':{background:"hsl(230, 1%, 90%)",color:"inherit"},'code[class*="language-"]::selection':{background:"hsl(230, 1%, 90%)",color:"inherit"},'code[class*="language-"] *::selection':{background:"hsl(230, 1%, 90%)",color:"inherit"},'pre[class*="language-"] *::selection':{background:"hsl(230, 1%, 90%)",color:"inherit"},':not(pre) > code[class*="language-"]':{padding:"0.2em 0.3em",borderRadius:"0.3em",whiteSpace:"normal"},comment:{color:"hsl(230, 4%, 64%)",fontStyle:"italic"},prolog:{color:"hsl(230, 4%, 64%)"},cdata:{color:"hsl(230, 4%, 64%)"},doctype:{color:"hsl(230, 8%, 24%)"},punctuation:{color:"hsl(230, 8%, 24%)"},entity:{color:"hsl(230, 8%, 24%)",cursor:"help"},"attr-name":{color:"hsl(35, 99%, 36%)"},"class-name":{color:"hsl(35, 99%, 36%)"},boolean:{color:"hsl(35, 99%, 36%)"},constant:{color:"hsl(35, 99%, 36%)"},number:{color:"hsl(35, 99%, 36%)"},atrule:{color:"hsl(35, 99%, 36%)"},keyword:{color:"hsl(301, 63%, 40%)"},property:{color:"hsl(5, 74%, 59%)"},tag:{color:"hsl(5, 74%, 59%)"},symbol:{color:"hsl(5, 74%, 59%)"},deleted:{color:"hsl(5, 74%, 59%)"},important:{color:"hsl(5, 74%, 59%)"},selector:{color:"hsl(119, 34%, 47%)"},string:{color:"hsl(119, 34%, 47%)"},char:{color:"hsl(119, 34%, 47%)"},builtin:{color:"hsl(119, 34%, 47%)"},inserted:{color:"hsl(119, 34%, 47%)"},regex:{color:"hsl(119, 34%, 47%)"},"attr-value":{color:"hsl(119, 34%, 47%)"},"attr-value > .token.punctuation":{color:"hsl(119, 34%, 47%)"},variable:{color:"hsl(221, 87%, 60%)"},operator:{color:"hsl(221, 87%, 60%)"},function:{color:"hsl(221, 87%, 60%)"},url:{color:"hsl(198, 99%, 37%)"},"attr-value > .token.punctuation.attr-equals":{color:"hsl(230, 8%, 24%)"},"special-attr > .token.attr-value > .token.value.css":{color:"hsl(230, 8%, 24%)"},".language-css .token.selector":{color:"hsl(5, 74%, 59%)"},".language-css .token.property":{color:"hsl(230, 8%, 24%)"},".language-css .token.function":{color:"hsl(198, 99%, 37%)"},".language-css .token.url > .token.function":{color:"hsl(198, 99%, 37%)"},".language-css .token.url > .token.string.url":{color:"hsl(119, 34%, 47%)"},".language-css .token.important":{color:"hsl(301, 63%, 40%)"},".language-css .token.atrule .token.rule":{color:"hsl(301, 63%, 40%)"},".language-javascript .token.operator":{color:"hsl(301, 63%, 40%)"},".language-javascript .token.template-string > .token.interpolation > .token.interpolation-punctuation.punctuation":{color:"hsl(344, 84%, 43%)"},".language-json .token.operator":{color:"hsl(230, 8%, 24%)"},".language-json .token.null.keyword":{color:"hsl(35, 99%, 36%)"},".language-markdown .token.url":{color:"hsl(230, 8%, 24%)"},".language-markdown .token.url > .token.operator":{color:"hsl(230, 8%, 24%)"},".language-markdown .token.url-reference.url > .token.string":{color:"hsl(230, 8%, 24%)"},".language-markdown .token.url > .token.content":{color:"hsl(221, 87%, 60%)"},".language-markdown .token.url > .token.url":{color:"hsl(198, 99%, 37%)"},".language-markdown .token.url-reference.url":{color:"hsl(198, 99%, 37%)"},".language-markdown .token.blockquote.punctuation":{color:"hsl(230, 4%, 64%)",fontStyle:"italic"},".language-markdown .token.hr.punctuation":{color:"hsl(230, 4%, 64%)",fontStyle:"italic"},".language-markdown .token.code-snippet":{color:"hsl(119, 34%, 47%)"},".language-markdown .token.bold .token.content":{color:"hsl(35, 99%, 36%)"},".language-markdown .token.italic .token.content":{color:"hsl(301, 63%, 40%)"},".language-markdown .token.strike .token.content":{color:"hsl(5, 74%, 59%)"},".language-markdown .token.strike .token.punctuation":{color:"hsl(5, 74%, 59%)"},".language-markdown .token.list.punctuation":{color:"hsl(5, 74%, 59%)"},".language-markdown .token.title.important > .token.punctuation":{color:"hsl(5, 74%, 59%)"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},namespace:{Opacity:"0.8"},"token.tab:not(:empty):before":{color:"hsla(230, 8%, 24%, 0.2)"},"token.cr:before":{color:"hsla(230, 8%, 24%, 0.2)"},"token.lf:before":{color:"hsla(230, 8%, 24%, 0.2)"},"token.space:before":{color:"hsla(230, 8%, 24%, 0.2)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item":{marginRight:"0.4em"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button":{background:"hsl(230, 1%, 90%)",color:"hsl(230, 6%, 44%)",padding:"0.1em 0.4em",borderRadius:"0.3em"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a":{background:"hsl(230, 1%, 90%)",color:"hsl(230, 6%, 44%)",padding:"0.1em 0.4em",borderRadius:"0.3em"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span":{background:"hsl(230, 1%, 90%)",color:"hsl(230, 6%, 44%)",padding:"0.1em 0.4em",borderRadius:"0.3em"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover":{background:"hsl(230, 1%, 78%)",color:"hsl(230, 8%, 24%)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus":{background:"hsl(230, 1%, 78%)",color:"hsl(230, 8%, 24%)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover":{background:"hsl(230, 1%, 78%)",color:"hsl(230, 8%, 24%)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus":{background:"hsl(230, 1%, 78%)",color:"hsl(230, 8%, 24%)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover":{background:"hsl(230, 1%, 78%)",color:"hsl(230, 8%, 24%)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus":{background:"hsl(230, 1%, 78%)",color:"hsl(230, 8%, 24%)"},".line-highlight.line-highlight":{background:"hsla(230, 8%, 24%, 0.05)"},".line-highlight.line-highlight:before":{background:"hsl(230, 1%, 90%)",color:"hsl(230, 8%, 24%)",padding:"0.1em 0.6em",borderRadius:"0.3em",boxShadow:"0 2px 0 0 rgba(0, 0, 0, 0.2)"},".line-highlight.line-highlight[data-end]:after":{background:"hsl(230, 1%, 90%)",color:"hsl(230, 8%, 24%)",padding:"0.1em 0.6em",borderRadius:"0.3em",boxShadow:"0 2px 0 0 rgba(0, 0, 0, 0.2)"},"pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before":{backgroundColor:"hsla(230, 8%, 24%, 0.05)"},".line-numbers.line-numbers .line-numbers-rows":{borderRightColor:"hsla(230, 8%, 24%, 0.2)"},".command-line .command-line-prompt":{borderRightColor:"hsla(230, 8%, 24%, 0.2)"},".line-numbers .line-numbers-rows > span:before":{color:"hsl(230, 1%, 62%)"},".command-line .command-line-prompt > span:before":{color:"hsl(230, 1%, 62%)"},".rainbow-braces .token.token.punctuation.brace-level-1":{color:"hsl(5, 74%, 59%)"},".rainbow-braces .token.token.punctuation.brace-level-5":{color:"hsl(5, 74%, 59%)"},".rainbow-braces .token.token.punctuation.brace-level-9":{color:"hsl(5, 74%, 59%)"},".rainbow-braces .token.token.punctuation.brace-level-2":{color:"hsl(119, 34%, 47%)"},".rainbow-braces .token.token.punctuation.brace-level-6":{color:"hsl(119, 34%, 47%)"},".rainbow-braces .token.token.punctuation.brace-level-10":{color:"hsl(119, 34%, 47%)"},".rainbow-braces .token.token.punctuation.brace-level-3":{color:"hsl(221, 87%, 60%)"},".rainbow-braces .token.token.punctuation.brace-level-7":{color:"hsl(221, 87%, 60%)"},".rainbow-braces .token.token.punctuation.brace-level-11":{color:"hsl(221, 87%, 60%)"},".rainbow-braces .token.token.punctuation.brace-level-4":{color:"hsl(301, 63%, 40%)"},".rainbow-braces .token.token.punctuation.brace-level-8":{color:"hsl(301, 63%, 40%)"},".rainbow-braces .token.token.punctuation.brace-level-12":{color:"hsl(301, 63%, 40%)"},"pre.diff-highlight > code .token.token.deleted:not(.prefix)":{backgroundColor:"hsla(353, 100%, 66%, 0.15)"},"pre > code.diff-highlight .token.token.deleted:not(.prefix)":{backgroundColor:"hsla(353, 100%, 66%, 0.15)"},"pre.diff-highlight > code .token.token.deleted:not(.prefix)::-moz-selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre.diff-highlight > code .token.token.deleted:not(.prefix) *::-moz-selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre > code.diff-highlight .token.token.deleted:not(.prefix)::-moz-selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre > code.diff-highlight .token.token.deleted:not(.prefix) *::-moz-selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre.diff-highlight > code .token.token.deleted:not(.prefix)::selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre.diff-highlight > code .token.token.deleted:not(.prefix) *::selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre > code.diff-highlight .token.token.deleted:not(.prefix)::selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre > code.diff-highlight .token.token.deleted:not(.prefix) *::selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre.diff-highlight > code .token.token.inserted:not(.prefix)":{backgroundColor:"hsla(137, 100%, 55%, 0.15)"},"pre > code.diff-highlight .token.token.inserted:not(.prefix)":{backgroundColor:"hsla(137, 100%, 55%, 0.15)"},"pre.diff-highlight > code .token.token.inserted:not(.prefix)::-moz-selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre.diff-highlight > code .token.token.inserted:not(.prefix) *::-moz-selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre > code.diff-highlight .token.token.inserted:not(.prefix)::-moz-selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre > code.diff-highlight .token.token.inserted:not(.prefix) *::-moz-selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre.diff-highlight > code .token.token.inserted:not(.prefix)::selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre.diff-highlight > code .token.token.inserted:not(.prefix) *::selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre > code.diff-highlight .token.token.inserted:not(.prefix)::selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre > code.diff-highlight .token.token.inserted:not(.prefix) *::selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},".prism-previewer.prism-previewer:before":{borderColor:"hsl(0, 0, 95%)"},".prism-previewer-gradient.prism-previewer-gradient div":{borderColor:"hsl(0, 0, 95%)",borderRadius:"0.3em"},".prism-previewer-color.prism-previewer-color:before":{borderRadius:"0.3em"},".prism-previewer-easing.prism-previewer-easing:before":{borderRadius:"0.3em"},".prism-previewer.prism-previewer:after":{borderTopColor:"hsl(0, 0, 95%)"},".prism-previewer-flipped.prism-previewer-flipped.after":{borderBottomColor:"hsl(0, 0, 95%)"},".prism-previewer-angle.prism-previewer-angle:before":{background:"hsl(0, 0%, 100%)"},".prism-previewer-time.prism-previewer-time:before":{background:"hsl(0, 0%, 100%)"},".prism-previewer-easing.prism-previewer-easing":{background:"hsl(0, 0%, 100%)"},".prism-previewer-angle.prism-previewer-angle circle":{stroke:"hsl(230, 8%, 24%)",strokeOpacity:"1"},".prism-previewer-time.prism-previewer-time circle":{stroke:"hsl(230, 8%, 24%)",strokeOpacity:"1"},".prism-previewer-easing.prism-previewer-easing circle":{stroke:"hsl(230, 8%, 24%)",fill:"transparent"},".prism-previewer-easing.prism-previewer-easing path":{stroke:"hsl(230, 8%, 24%)"},".prism-previewer-easing.prism-previewer-easing line":{stroke:"hsl(230, 8%, 24%)"}};var l=e.i(488012);e.s(["f",0,({code:e,language:s})=>{let d=(0,l.f)(a),[p,c]=(0,o.useState)(!1);return(0,t.jsxs)("div",{className:"relative rounded-lg border border-border bg-muted overflow-hidden",children:[(0,t.jsx)("button",{onClick:()=>{navigator.clipboard.writeText(e),c(!0),setTimeout(()=>c(!1),2e3)},className:"absolute top-3 right-3 p-2 rounded-md border border-border bg-background text-muted-foreground hover:bg-accent hover:text-foreground z-raised","aria-label":"Copy code",children:p?(0,t.jsx)(r.f,{size:16}):(0,t.jsx)(i,{size:16})}),(0,t.jsx)(n.f,{language:s,style:d,customStyle:{margin:0,padding:"1.5rem",borderRadius:"0.5rem",fontSize:"0.9rem",background:"transparent"},codeTagProps:{style:{background:"transparent"}},showLineNumbers:!0,children:e})]})}],466828)},909947,e=>{"use strict";var t=e.i(865361);e.s(["f",0,e=>{let o,{apiKeySource:r,accessToken:i,apiKey:n,inputMessage:a,chatHistory:l,selectedTags:s,selectedVectorStores:d,selectedGuardrails:p,selectedPolicies:c,selectedVoice:u,endpointType:g,selectedModel:m,selectedSdk:f,proxySettings:h,customHeaders:b}=e,_="session"===r?i:n,k=window.location.origin,y=h?.LITELLM_UI_API_DOC_BASE_URL;y&&y.trim()?k=y:h?.PROXY_BASE_URL&&(k=h.PROXY_BASE_URL);let v=a||"Your prompt here",w=v.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n"),x=l.filter(e=>!e.isImage).map(({role:e,content:t})=>({role:e,content:t})),j={};s.length>0&&(j.tags=s),d.length>0&&(j.vector_stores=d),p.length>0&&(j.guardrails=p),c.length>0&&(j.policies=c);let S=m||"your-model-name",C=b&&Object.keys(b).length>0?`,
	default_headers=${JSON.stringify(b,null,2).replace(/\n/g,"\n	")}`:"",P="azure"===f?`import openai

client = openai.AzureOpenAI(
	api_key="${_||"YOUR_LITELLM_API_KEY"}",
	azure_endpoint="${k}",
	api_version="2024-02-01"${C}
)`:`import openai

client = openai.OpenAI(
	api_key="${_||"YOUR_LITELLM_API_KEY"}",
	base_url="${k}"${C}
)`;switch(g){case t.Q.CHAT:{let e=Object.keys(j).length>0,t="";if(e){let e=JSON.stringify({metadata:j},null,2).split("\n").map(e=>" ".repeat(4)+e).join("\n").trim();t=`,
    extra_body=${e}`}let r=x.length>0?x:[{role:"user",content:v}];o=`
import base64

# Helper function to encode images to base64
def encode_image(image_path):
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode('utf-8')

# Example with text only
response = client.chat.completions.create(
    model="${S}",
    messages=${JSON.stringify(r,null,4)}${t}
)

print(response)

# Example with image or PDF (uncomment and provide file path to use)
# base64_file = encode_image("path/to/your/file.jpg")  # or .pdf
# response_with_file = client.chat.completions.create(
#     model="${S}",
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
`;break}case t.Q.RESPONSES:{let e=Object.keys(j).length>0,t="";if(e){let e=JSON.stringify({metadata:j},null,2).split("\n").map(e=>" ".repeat(4)+e).join("\n").trim();t=`,
    extra_body=${e}`}let r=x.length>0?x:[{role:"user",content:v}];o=`
import base64

# Helper function to encode images to base64
def encode_image(image_path):
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode('utf-8')

# Example with text only
response = client.responses.create(
    model="${S}",
    input=${JSON.stringify(r,null,4)}${t}
)

print(response.output_text)

# Example with image or PDF (uncomment and provide file path to use)
# base64_file = encode_image("path/to/your/file.jpg")  # or .pdf
# response_with_file = client.responses.create(
#     model="${S}",
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
`;break}case t.Q.IMAGE:o="azure"===f?`
# NOTE: The Azure SDK does not have a direct equivalent to the multi-modal 'responses.create' method shown for OpenAI.
# This snippet uses 'client.images.generate' and will create a new image based on your prompt.
# It does not use the uploaded image, as 'client.images.generate' does not support image inputs in this context.
import os
import requests
import json
import time
from PIL import Image

result = client.images.generate(
	model="${S}",
	prompt="${a}",
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
	model="${S}",
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
`;break;case t.Q.IMAGE_EDITS:o="azure"===f?`
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
	model="${S}",
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
	model="${S}",
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
`;break;case t.Q.EMBEDDINGS:o=`
response = client.embeddings.create(
	input="${a||"Your string here"}",
	model="${S}",
	encoding_format="base64" # or "float"
)

print(response.data[0].embedding)
`;break;case t.Q.TRANSCRIPTION:o=`
# Open the audio file
audio_file = open("path/to/your/audio/file.mp3", "rb")

# Make the transcription request
response = client.audio.transcriptions.create(
	model="${S}",
	file=audio_file${a?`,
	prompt="${a.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}"`:""}
)

print(response.text)
`;break;case t.Q.SPEECH:o=`
# Make the text-to-speech request
response = client.audio.speech.create(
	model="${S}",
	input="${a||"Your text to convert to speech here"}",
	voice="${u}"  # Options: alloy, ash, ballad, coral, echo, fable, nova, onyx, sage, shimmer
)

# Save the audio to a file
output_filename = "output_speech.mp3"
response.stream_to_file(output_filename)
print(f"Audio saved to {output_filename}")

# Optional: Customize response format and speed
# response = client.audio.speech.create(
#     model="${S}",
#     input="${a||"Your text to convert to speech here"}",
#     voice="alloy",
#     response_format="mp3",  # Options: mp3, opus, aac, flac, wav, pcm
#     speed=1.0  # Range: 0.25 to 4.0
# )
# response.stream_to_file("output_speech.mp3")
`;break;default:o="\n# Code generation for this endpoint is not implemented yet."}return`${P}
${o}`}])},735450,e=>{"use strict";var t=e.i(411382),o=e.i(772325),r=e.i(54105),i=e.i(240192),n=e.i(138620);let a="https://docs.litellm.ai/docs/decisions",l=`${a}#supported-providers`,s=`${a}#self-hosted-laya-and-nimble`,d=new Set(["/v1/decisions","/v1/systemone"]),p=t.z.object({litellm_provider:r.z.string(),mode:r.z.string().nullish(),supported_endpoints:o.z.array(r.z.string()).nullish()}),c="decisions",u=["evaluation",c],g=e=>null!=e&&u.includes(e),m=e=>g(e.mode)||(e.supported_endpoints??[]).some(e=>d.has(e)),f=e=>{let t=i.z.record(r.z.string(),n.z.unknown()).safeParse(e);return t.success?Object.entries(t.data).flatMap(([e,t])=>{let o=p.safeParse(t);return o.success?[[e,o.data]]:[]}):[]},h={decisions:0,"self-hosted":1,"needs-upgrade":2},b=t.z.object({decision_model_providers:o.z.array(r.z.string())}),_=(e,t)=>e.model.length-t.model.length||e.model.localeCompare(t.model),k=(e,t,o)=>({row:e,routeOrder:h[e.route],rankInProvider:o.slice(0,t).filter(t=>t.provider===e.provider).length});e.s(["O",0,a,"d",0,c,"Z",0,l,"L",0,s,"B",0,"playground?tab=system-one","F",0,function(e){let t=f(e),o=t.filter(([,e])=>m(e)),r=new Map([...new Set(o.map(([,e])=>e.litellm_provider))].map(e=>{let o=t.filter(([,t])=>t.litellm_provider===e);return[e,{decisionOnly:o.every(([,e])=>m(e))}]}));return{models:new Set(o.map(([e])=>e)),providers:r}},"W",0,(e,t)=>f(e).filter(([,e])=>m(e)).map(([e,o])=>({model:e,provider:o.litellm_provider,route:t?.has(o.litellm_provider)?"decisions":(o.supported_endpoints??["/v1/decisions"]).includes("/v1/decisions")?null===t?"decisions":"needs-upgrade":"self-hosted"})).toSorted(_).map(k).toSorted((e,t)=>e.routeOrder-t.routeOrder||e.rankInProvider-t.rankInProvider||e.row.provider.localeCompare(t.row.provider)).map(({row:e})=>e),"i",0,e=>g(e)?c:e??void 0,"q",0,e=>e.flatMap(e=>e===c?u:[e]),"m",0,m,"_",0,g,"r",0,(e,t,o)=>void 0!==t&&e.providers.get(t)?.decisionOnly===!0||o.some(t=>e.models.has(t)),"P",0,e=>{let t=b.safeParse(e);return t.success?new Set(t.data.decision_model_providers):null}])}]);