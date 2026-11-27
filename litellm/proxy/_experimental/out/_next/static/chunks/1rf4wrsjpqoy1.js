(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,306228,e=>{"use strict";let t=(0,e.i(475254).f)("link-2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);e.s(["f",0,t],306228)},605500,(e,t,i)=>{"use strict";e.i(247167),Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"Image",{enumerable:!0,get:function(){return _}});let r=e.r(555682),a=e.r(190809),s=e.r(843476),n=a._(e.r(271645)),l=r._(e.r(174080)),o=r._(e.r(325633)),d=e.r(908927),u=e.r(65856),p=e.r(49381),c=r._(e.r(1948)),m=e.r(818581);function g(e,t,i,r,a,s,n){let l=e?.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&a(!0),i?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,a=!1;i.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}})}r?.current&&r.current(e)}}))}function f(e){return n.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let h="u"<typeof window?n.useEffect:n.useLayoutEffect,x=(0,n.forwardRef)(({src:e,srcSet:t,sizes:i,height:r,width:a,decoding:l,className:o,style:d,fetchPriority:u,placeholder:p,loading:c,unoptimized:x,fill:b,onLoadRef:_,onLoadingCompleteRef:y,setBlurComplete:v,setShowAltText:j,sizesInput:w,onLoad:P,onError:C,...k},$)=>{let N=(0,n.useRef)(!1),S=(0,n.useRef)(null);h(()=>{let{current:e}=N,{current:t}=S;e||null===t||(C&&(t.src=t.src),t.complete&&g(t,p,_,y,v,x,w),N.current=!0)},[e,p,_,y,C,x,w]);let I=(0,m.useMergedRef)($,S);return(0,s.jsx)("img",{...k,...f(u),loading:c,width:a,height:r,decoding:l,"data-nimg":b?"fill":"1",className:o,style:d,sizes:i,srcSet:t,src:e,ref:I,onLoad:e=>{g(e.currentTarget,p,_,y,v,x,w)},onError:e=>{j(!0),"empty"!==p&&v(!0),C&&C(e)}})});function b({isAppRouter:e,imgAttributes:t}){let i={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...f(t.fetchPriority)};return e&&l.default.preload?(l.default.preload(t.src,i),null):(0,s.jsx)(o.default,{children:(0,s.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...i},"__nimg-"+t.src+t.srcSet+t.sizes)})}let _=(0,n.forwardRef)((e,t)=>{let i=(0,n.useContext)(u.RouterContext),r=(0,p.useImageConfig)(),{onLoad:a,onLoadingComplete:l}=e,o=(0,n.useRef)(a);(0,n.useEffect)(()=>{o.current=a},[a]);let m=(0,n.useRef)(l);(0,n.useEffect)(()=>{m.current=l},[l]);let[g,f]=(0,n.useState)(!1),[h,_]=(0,n.useState)(!1),{props:y,meta:v}=(0,d.getImgProps)(e,{defaultLoader:c.default,imgConf:r,blurComplete:g,showAltText:h});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(x,{...y,unoptimized:v.unoptimized,placeholder:v.placeholder,fill:v.fill,onLoadRef:o,onLoadingCompleteRef:m,setBlurComplete:f,setShowAltText:_,sizesInput:e.sizes,ref:t}),v.preload?(0,s.jsx)(b,{isAppRouter:!i,imgAttributes:y}):null]})});("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},325164,e=>{"use strict";var t=e.i(605500);e.s(["default",()=>t.Image])},49381,(e,t,i)=>{"use strict";e.i(247167),Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"useImageConfig",{enumerable:!0,get:function(){return l}});let r=e.r(271645),a=e.r(987690),s=e.r(918556),n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function l(){let e=(0,r.useContext)(s.ImageConfigContext);return(0,a.prepareImageConfig)(n,e)}("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},670965,(e,t,i)=>{"use strict";function r(e,t){let i=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-i)<Math.abs(e-i)?t:e,t.qualities[0]):i}Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"findClosestQuality",{enumerable:!0,get:function(){return r}})},908927,(e,t,i)=>{"use strict";e.i(247167),Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"getImgProps",{enumerable:!0,get:function(){return o}});let r=e.r(543369),a=e.r(488143),s=["-moz-initial","fill","none","scale-down",void 0];function n(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:0/0:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):0/0}function o({src:e,sizes:t,unoptimized:i=!1,priority:d=!1,preload:u=!1,loading:p,className:c,quality:m,width:g,height:f,fill:h=!1,style:x,overrideSrc:b,onLoad:_,onLoadingComplete:y,placeholder:v="empty",blurDataURL:j,fetchPriority:w,decoding:P="async",layout:C,objectFit:k,objectPosition:$,lazyBoundary:N,lazyRoot:S,...I},O){var z;let D,E,{imgConf:A,showAltText:M,blurComplete:R,defaultLoader:L}=O;if(void 0===L)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let T=I.loader||L;delete I.loader,delete I.srcSet;let F="__next_img_default"in T;if(F){if("custom"===A.loader)throw Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`)}else{let e=T;T=t=>{let{config:i,...r}=t;return e(r)}}if(C){"fill"===C&&(h=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(x={...x,...e});let i={responsive:"100vw",fill:"100vw"}[C];i&&!t&&(t=i)}let U="",q=l(g),W=l(f);if((z=e)&&"object"==typeof z&&(n(z)||void 0!==z.src)){let t=n(e)?e.default:e;if(!t.src)throw Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`);if(!t.height||!t.width)throw Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`);if(D=t.blurWidth,E=t.blurHeight,j=j||t.blurDataURL,U=t.src,!h)if(q||W){if(q&&!W){let e=q/t.width;W=Math.round(t.height*e)}else if(!q&&W){let e=W/t.height;q=Math.round(t.width*e)}}else q=t.width,W=t.height}let B=!d&&!u&&("lazy"===p||void 0===p);(!(e="string"==typeof e?e:U)||e.startsWith("data:")||e.startsWith("blob:"))&&(i=!0,B=!1),A.unoptimized&&(i=!0),F&&!A.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(i=!0);let H=l(m),G=Object.assign(h?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:k,objectPosition:$}:{},M?{}:{color:"transparent"},x),Y=R||"empty"===v?null:"blur"===v?`url("data:image/svg+xml;charset=utf-8,${(0,a.getImageBlurSvg)({widthInt:q,heightInt:W,blurWidth:D,blurHeight:E,blurDataURL:j||"",objectFit:G.objectFit})}")`:`url("${v}")`,Q=s.includes(G.objectFit)?"fill"===G.objectFit?"100% 100%":"cover":G.objectFit,Z=Y?{backgroundSize:Q,backgroundPosition:G.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Y}:{},K=function({config:e,src:t,unoptimized:i,width:a,quality:s,sizes:n,loader:l}){if(i){if(t.startsWith("/")&&!t.startsWith("//")){let e=(0,r.getDeploymentId)();if(t.includes("/_next/static/immutable")&&!(0,r.getAssetToken)())e=void 0;else if(e){let i=t.indexOf("?");if(-1!==i){let r=new URLSearchParams(t.slice(i+1));r.get("dpl")||(r.append("dpl",e),t=t.slice(0,i)+"?"+r.toString())}else t+=`?dpl=${e}`}}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:o,kind:d}=function({deviceSizes:e,allSizes:t},i,r){if(r){let i=/(^|\s)(1?\d?\d)vw/g,a=[];for(let e;e=i.exec(r);)a.push(parseInt(e[2]));if(a.length){let i=.01*Math.min(...a);return{widths:t.filter(t=>t>=e[0]*i),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof i?{widths:e,kind:"w"}:{widths:[...new Set([i,2*i].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,a,n),u=o.length-1;return{sizes:n||"w"!==d?n:"100vw",srcSet:o.map((i,r)=>`${l({config:e,src:t,quality:s,width:i})} ${"w"===d?i:r+1}${d}`).join(", "),src:l({config:e,src:t,quality:s,width:o[u]})}}({config:A,src:e,unoptimized:i,width:q,quality:H,sizes:t,loader:T}),J=B?"lazy":p;return{props:{...I,loading:J,fetchPriority:w,width:q,height:W,decoding:P,className:c,style:{...G,...Z},sizes:K.sizes,srcSet:K.srcSet,src:b||K.src},meta:{unoptimized:i,preload:u||d,placeholder:v,fill:h}}}},325633,(e,t,i)=>{"use strict";e.i(247167),Object.defineProperty(i,"__esModule",{value:!0});var r={default:function(){return f},defaultHead:function(){return p}};for(var a in r)Object.defineProperty(i,a,{enumerable:!0,get:r[a]});let s=e.r(555682),n=e.r(190809),l=e.r(843476),o=n._(e.r(271645)),d=s._(e.r(898879)),u=e.r(742732);function p(){return[(0,l.jsx)("meta",{charSet:"utf-8"},"charset"),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function c(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}let m=["name","httpEquiv","charSet","itemProp"];function g(e){let t,i,r,a;return e.reduce(c,[]).reverse().concat(p().reverse()).filter((t=new Set,i=new Set,r=new Set,a={},e=>{let s=!0,n=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){n=!0;let i=e.key.slice(e.key.indexOf("$")+1);t.has(i)?s=!1:t.add(i)}switch(e.type){case"title":case"base":i.has(e.type)?s=!1:i.add(e.type);break;case"meta":for(let t=0,i=m.length;t<i;t++){let i=m[t];if(e.props.hasOwnProperty(i))if("charSet"===i)r.has(i)?s=!1:r.add(i);else{let t=e.props[i],r=a[i]||new Set;("name"!==i||!n)&&r.has(t)?s=!1:(r.add(t),a[i]=r)}}}return s})).reverse().map((e,t)=>{let i=e.key||t;return o.default.cloneElement(e,{key:i})})}let f=function({children:e}){let t=(0,o.useContext)(u.HeadManagerContext);return(0,l.jsx)(d.default,{reduceComponentsToState:g,headManager:t,children:e})};("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},488143,(e,t,i)=>{"use strict";function r({widthInt:e,heightInt:t,blurWidth:i,blurHeight:a,blurDataURL:s,objectFit:n}){let l=i?40*i:e,o=a?40*a:t,d=l&&o?`viewBox='0 0 ${l} ${o}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${d}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${d?"none":"contain"===n?"xMidYMid":"cover"===n?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${s}'/%3E%3C/svg%3E`}Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},918556,(e,t,i)=>{"use strict";e.i(247167),Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"ImageConfigContext",{enumerable:!0,get:function(){return s}});let r=e.r(555682)._(e.r(271645)),a=e.r(987690),s=r.default.createContext(a.imageConfigDefault)},987690,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r={VALID_LOADERS:function(){return s},imageConfigDefault:function(){return d},prepareImageConfig:function(){return o}};for(var a in r)Object.defineProperty(i,a,{enumerable:!0,get:r[a]});let s=["default","imgix","cloudinary","akamai","custom"],n={},l=new WeakMap;function o(e,t){let i=e??n,r=t??n,a=l.get(i);if(a){let e=a.get(r);if(e)return e}let s=e||t||d,o=[...s.deviceSizes].sort((e,t)=>e-t),u=[...s.imageSizes],p={deviceSizes:o,imageSizes:u,allSizes:[...o,...u].sort((e,t)=>e-t),qualities:void 0===s.qualities?void 0:[...s.qualities].sort((e,t)=>e-t),path:s.path,loader:s.loader,dangerouslyAllowSVG:s.dangerouslyAllowSVG,unoptimized:s.unoptimized,domains:s.domains,remotePatterns:s.remotePatterns,localPatterns:"u"<typeof window&&void 0!==t?t.localPatterns:s.localPatterns,output:s.output};return a||(a=new WeakMap,l.set(i,a)),a.set(r,p),p}let d={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1,customCacheHandler:!1}},1948,(e,t,i)=>{"use strict";e.i(247167),Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return n}});let r=e.r(670965),a=e.r(543369);function s({config:e,src:t,width:i,quality:n}){let l=(0,a.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//"))if(t.includes("/_next/static/immutable")&&!(0,a.getAssetToken)())l=void 0;else{let e=t.indexOf("?");if(-1!==e){let i=new URLSearchParams(t.slice(e+1)),r=i.get("dpl");if(r){l=r,i.delete("dpl");let a=i.toString();t=t.slice(0,e)+(a?"?"+a:"")}}}if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`);let o=(0,r.findClosestQuality)(n,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${i}&q=${o}${t.startsWith("/")&&l?`&dpl=${l}`:""}`}s.__next_img_default=!0;let n=s},65856,(e,t,i)=>{"use strict";e.i(247167),Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"RouterContext",{enumerable:!0,get:function(){return r}});let r=(e.r(555682)._(e.r(271645))).default.createContext(null)},898879,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return l}});let r=e.r(271645),a="u"<typeof window,s=a?()=>{}:r.useLayoutEffect,n=a?()=>{}:r.useEffect;function l(e){let{headManager:t,reduceComponentsToState:i}=e;function l(){if(t&&t.mountedInstances){let e=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(i(e))}}return a&&(t?.mountedInstances?.add(e.children),l()),s(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),s(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),n(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},842354,e=>{"use strict";var t=e.i(768371);e.s(["f",0,()=>t.q.useQuery("get","/.well-known/litellm-ui-config").data?.claude_code_marketplace_auth_required!==!1])},909947,e=>{"use strict";var t=e.i(865361);e.s(["f",0,e=>{let i,{apiKeySource:r,accessToken:a,apiKey:s,inputMessage:n,chatHistory:l,selectedTags:o,selectedVectorStores:d,selectedGuardrails:u,selectedPolicies:p,selectedVoice:c,endpointType:m,selectedModel:g,selectedSdk:f,proxySettings:h,customHeaders:x}=e,b="session"===r?a:s,_=window.location.origin,y=h?.LITELLM_UI_API_DOC_BASE_URL;y&&y.trim()?_=y:h?.PROXY_BASE_URL&&(_=h.PROXY_BASE_URL);let v=n||"Your prompt here",j=v.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n"),w=l.filter(e=>!e.isImage).map(({role:e,content:t})=>({role:e,content:t})),P={};o.length>0&&(P.tags=o),d.length>0&&(P.vector_stores=d),u.length>0&&(P.guardrails=u),p.length>0&&(P.policies=p);let C=g||"your-model-name",k=x&&Object.keys(x).length>0?`,
	default_headers=${JSON.stringify(x,null,2).replace(/\n/g,"\n	")}`:"",$="azure"===f?`import openai

client = openai.AzureOpenAI(
	api_key="${b||"YOUR_LITELLM_API_KEY"}",
	azure_endpoint="${_}",
	api_version="2024-02-01"${k}
)`:`import openai

client = openai.OpenAI(
	api_key="${b||"YOUR_LITELLM_API_KEY"}",
	base_url="${_}"${k}
)`;switch(m){case t.Q.CHAT:{let e=Object.keys(P).length>0,t="";if(e){let e=JSON.stringify({metadata:P},null,2).split("\n").map(e=>" ".repeat(4)+e).join("\n").trim();t=`,
    extra_body=${e}`}let r=w.length>0?w:[{role:"user",content:v}];i=`
import base64

# Helper function to encode images to base64
def encode_image(image_path):
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode('utf-8')

# Example with text only
response = client.chat.completions.create(
    model="${C}",
    messages=${JSON.stringify(r,null,4)}${t}
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
#                     "text": "${j}"
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
`;break}case t.Q.RESPONSES:{let e=Object.keys(P).length>0,t="";if(e){let e=JSON.stringify({metadata:P},null,2).split("\n").map(e=>" ".repeat(4)+e).join("\n").trim();t=`,
    extra_body=${e}`}let r=w.length>0?w:[{role:"user",content:v}];i=`
import base64

# Helper function to encode images to base64
def encode_image(image_path):
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode('utf-8')

# Example with text only
response = client.responses.create(
    model="${C}",
    input=${JSON.stringify(r,null,4)}${t}
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
#                 {"type": "input_text", "text": "${j}"},
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
`;break}case t.Q.IMAGE:i="azure"===f?`
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
prompt = "${j}"

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
`;break;case t.Q.IMAGE_EDITS:i="azure"===f?`
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
prompt = "${j}"

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
prompt = "${j}"

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
`;break;case t.Q.EMBEDDINGS:i=`
response = client.embeddings.create(
	input="${n||"Your string here"}",
	model="${C}",
	encoding_format="base64" # or "float"
)

print(response.data[0].embedding)
`;break;case t.Q.TRANSCRIPTION:i=`
# Open the audio file
audio_file = open("path/to/your/audio/file.mp3", "rb")

# Make the transcription request
response = client.audio.transcriptions.create(
	model="${C}",
	file=audio_file${n?`,
	prompt="${n.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}"`:""}
)

print(response.text)
`;break;case t.Q.SPEECH:i=`
# Make the text-to-speech request
response = client.audio.speech.create(
	model="${C}",
	input="${n||"Your text to convert to speech here"}",
	voice="${c}"  # Options: alloy, ash, ballad, coral, echo, fable, nova, onyx, sage, shimmer
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
`;break;default:i="\n# Code generation for this endpoint is not implemented yet."}return`${$}
${i}`}])},209261,e=>{"use strict";var t=e.i(201787);let i=/^[a-zA-Z0-9][a-zA-Z0-9._-]*(\/[a-zA-Z0-9][a-zA-Z0-9._-]*)*$/,r=e=>e.trim().replace(/\/+$/,""),a=/\.(md|markdown|txt|json|ya?ml|toml)$/i,s=/\.zip$/i,n=/^[0-9a-fA-F]{64}$/,l=/^\d{1,3}(\.\d{1,3}){3}$/,o=/^[A-Za-z0-9-]+$/,d=/^[A-Za-z0-9._-]+$/,u=/^https?:\/\//i,p="ssh://",c=/^([a-z0-9._-]+)@([^:/@]+):(?!\/)(.+)$/i,m=e=>e.pathname.split("/").filter(e=>""!==e),g=e=>{try{return new URL(e)}catch{return null}},f=e=>e.hostname.includes(".")&&!e.hostname.startsWith("[")&&!l.test(e.hostname),h=e=>{let t=e.split("/").filter(e=>""!==e);return t[t.length-1]??""},x=e=>e.toLowerCase().replace(/[^a-z0-9-]+/g,"-").replace(/-+/g,"-").replace(/^-+|-+$/g,""),b=(e,a,s,n)=>{let l=r(n??"");return""!==l?i.test(l)?{parsed:{source:"git-subdir",url:a,path:l},label:t.f.t("claudeCodePlugins.sources.gitSubdir",{kind:e,url:a,path:l}),suggestedName:x(h(l))}:null:{parsed:{source:"url",url:a},label:t.f.t("claudeCodePlugins.sources.gitRepo",{kind:e,url:a}),suggestedName:x(s)}},_="<your-litellm-key>";e.s(["i",0,_,"U",0,(e,t)=>JSON.stringify({extraKnownMarketplaces:{litellm:{source:{source:"url",url:`${e}/claude-code/marketplace.json`,...t?{headers:{Authorization:`Bearer ${_}`}}:{}}}}},null,2),"a",0,e=>`/plugin install ${e.name}@litellm`,"u",0,e=>{if(!e)return"gray";let t=e.toLowerCase();if(t.includes("development")||t.includes("dev"))return"blue";if(t.includes("productivity")||t.includes("workflow"))return"green";if(t.includes("learning")||t.includes("education"))return"purple";if(t.includes("security")||t.includes("safety"))return"red";if(t.includes("data")||t.includes("analytics"))return"orange";else if(t.includes("integration")||t.includes("api"))return"yellow";return"gray"},"_",0,e=>"github"===e.source&&e.repo?t.f.t("claudeCodePlugins.sources.githubDisplay",{repo:e.repo}):"git-subdir"===e.source&&e.url&&e.path?`${e.url} @ ${e.path}`:("url"===e.source||"archive"===e.source)&&e.url?e.url:t.f.t("claudeCodePlugins.sources.unknown"),"E",0,e=>"github"===e.source&&e.repo?`https://github.com/${e.repo}`:("url"===e.source||"git-subdir"===e.source||"archive"===e.source)&&e.url&&u.test(e.url)?e.url:null,"r",0,e=>!e||/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),"R",0,e=>!e||/^\d+\.\d+\.\d+(-[a-zA-Z0-9.-]+)?(\+[a-zA-Z0-9.-]+)?$/.test(e),"b",0,e=>""===e.trim()||n.test(e.trim()),"P",0,e=>{let t=r(e);return""!==t&&i.test(t)},"D",0,e=>e&&""!==e.trim()?e.split(",").map(e=>e.trim()).filter(e=>""!==e):[],"Z",0,(e,n)=>{let l=((e,t)=>{let i=e.trim(),r=c.exec(i),a=r?`${p}${r[1]}@${r[2]}/${r[3]}`:i;if(!a.toLowerCase().startsWith(p))return null;let s=g(a);if(!s||""===s.username||""!==s.password||!f(s))return null;let n=a.indexOf("/",p.length);return -1===n||s.pathname!==a.slice(n)||m(s).length<2?null:b("SSH",i,h(s.pathname).replace(/\.git$/i,""),t)})(e,n);if(l)return l;let u=(e=>{let t=e.trim();if(""===t||t.startsWith("//"))return null;let i=g(/^[a-z][a-z0-9+.-]*:\/\//i.test(t)?t:`https://${t}`);return i&&"https:"===i.protocol&&""===i.username&&""===i.password&&f(i)?i:null})(e);if(!u)return null;if(s.test(u.pathname))return{parsed:{source:"archive",url:u.href},label:t.f.t("claudeCodePlugins.sources.zipArchive",{location:`${u.host}${u.pathname}`}),suggestedName:x(h(u.pathname).replace(s,""))};if("github.com"===u.hostname.replace(/^www\./,""))return((e,s)=>{let n=m(e);if(n.length<2)return null;let l=n[0],u=n[1].replace(/\.git$/,"");if(!o.test(l)||!d.test(u))return null;let p=`${l}/${u}`,c=`https://github.com/${p}`,g={parsed:{source:"github",repo:p},label:t.f.t("claudeCodePlugins.sources.githubRepo",{repo:p}),suggestedName:x(u)};if(n.length>=4&&("tree"===n[2]||"blob"===n[2])){let e=n.slice(4),s=h(e.join("/")),l=a.test(s)?e.slice(0,-1):e;if(0===l.length)return g;let o=r(l.join("/"));return i.test(o)?{parsed:{source:"git-subdir",url:c,path:o},label:t.f.t("claudeCodePlugins.sources.githubSubdir",{repo:p,path:o}),suggestedName:x(h(o))}:null}if(2!==n.length)return null;let f=r(s??"");return""!==f?i.test(f)?{parsed:{source:"git-subdir",url:c,path:f},label:t.f.t("claudeCodePlugins.sources.githubSubdir",{repo:p,path:f}),suggestedName:x(h(f))}:null:g})(u,n);if(m(u).length<2)return null;let _=h(u.pathname).replace(/\.git$/,"");return b("Git",`${u.protocol}//${u.host}${u.pathname.replace(/\/+$/,"")}`,_,n)},"e",0,e=>!!e&&""!==e.trim()&&/^[a-z0-9-]+$/.test(e)])},652272,e=>{"use strict";var t=e.i(843476),i=e.i(271645),r=e.i(871689),a=e.i(643531),s=e.i(174886),n=e.i(306228),l=e.i(345771),o=e.i(322831),d=e.i(842354),u=e.i(196631),p=e.i(209261);let c=({source:e})=>{let{t:i}=(0,o.f)(),r=(0,p.E)(e),a=r&&"git-subdir"===e.source&&e.path?`${r}/tree/main/${e.path}`:r;return a?(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("div",{className:"mb-1 text-xs text-muted-foreground",children:i("claudeCodePlugins.skillDetail.overview.source")}),(0,t.jsxs)("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1 break-all text-[13px] text-info",children:[a.replace("https://",""),(0,t.jsx)(n.f,{className:"size-3 shrink-0"})]})]}):e.url?(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("div",{className:"mb-1 text-xs text-muted-foreground",children:i("claudeCodePlugins.skillDetail.overview.source")}),(0,t.jsx)("div",{className:"break-all text-[13px] text-foreground",children:(0,p._)(e)})]}):null};e.s(["f",0,({skill:e,onBack:n})=>{let{t:m}=(0,o.f)(),[g,f]=(0,i.useState)("overview"),[h,x]=(0,i.useState)(null),b=(0,d.f)(),_=(e,t)=>{navigator.clipboard.writeText(e),x(t),setTimeout(()=>x(null),2e3)},y=(0,p.a)(e),v=(0,p.U)(window.location.origin,b),j=[...e.category?[{property:m("claudeCodePlugins.skillDetail.properties.category"),value:e.category}]:[],...e.domain?[{property:m("claudeCodePlugins.skillDetail.properties.domain"),value:e.domain}]:[],...e.namespace?[{property:m("claudeCodePlugins.skillDetail.properties.namespace"),value:e.namespace}]:[],...e.version?[{property:m("claudeCodePlugins.skillDetail.properties.version"),value:e.version}]:[],...e.author?.name?[{property:m("claudeCodePlugins.skillDetail.properties.author"),value:e.author.name}]:[],...e.created_at?[{property:m("claudeCodePlugins.skillDetail.properties.added"),value:new Date(e.created_at).toLocaleDateString()}]:[]],w=[{key:"overview",label:m("claudeCodePlugins.skillDetail.tabs.overview")},{key:"usage",label:m("claudeCodePlugins.skillDetail.tabs.usage")}];return(0,t.jsxs)("div",{className:"py-6 pl-0 pr-8",children:[(0,t.jsxs)("div",{onClick:n,className:"mb-6 inline-flex cursor-pointer items-center gap-1.5 text-sm text-muted-foreground",children:[(0,t.jsx)(r.f,{className:"size-3"}),(0,t.jsx)("span",{children:m("claudeCodePlugins.skillDetail.back")})]}),(0,t.jsxs)("div",{className:"mb-2",children:[(0,t.jsx)("h1",{className:"m-0 text-[28px] font-normal leading-tight text-foreground",children:e.name}),e.description&&(0,t.jsx)("p",{className:"mb-0 ml-0 mr-0 mt-2 text-sm leading-relaxed text-muted-foreground",children:e.description})]}),(0,t.jsx)("div",{className:"mb-7 mt-6 border-b border-border",children:(0,t.jsx)("div",{className:"flex",children:w.map(e=>(0,t.jsx)("div",{onClick:()=>f(e.key),className:(0,u.c)("-mb-px cursor-pointer border-b-[3px] px-5 py-3 text-sm",g===e.key?"border-info font-medium text-info":"border-transparent font-normal text-muted-foreground"),children:e.label},e.key))})}),"overview"===g&&(0,t.jsxs)("div",{className:"flex gap-16",children:[(0,t.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,t.jsx)("h2",{className:"m-0 mb-1 text-lg font-normal text-foreground",children:m("claudeCodePlugins.skillDetail.overview.title")}),(0,t.jsx)("p",{className:"m-0 mb-4 text-[13px] text-muted-foreground",children:m("claudeCodePlugins.skillDetail.overview.subtitle")}),(0,t.jsxs)("table",{className:"w-full border-collapse text-sm",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{className:"border-b border-border",children:[(0,t.jsx)("th",{className:"w-40 py-3 text-left font-medium text-muted-foreground",children:m("claudeCodePlugins.skillDetail.overview.propertyHeader")}),(0,t.jsx)("th",{className:"py-3 text-left font-medium text-muted-foreground",children:e.name})]})}),(0,t.jsx)("tbody",{children:j.map((e,i)=>(0,t.jsxs)("tr",{className:"border-b border-border",children:[(0,t.jsx)("td",{className:"py-3 text-foreground",children:e.property}),(0,t.jsx)("td",{className:"py-3 text-foreground",children:e.value})]},i))})]})]}),(0,t.jsxs)("div",{className:"w-60 shrink-0",children:[(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("div",{className:"mb-1 text-xs text-muted-foreground",children:m("claudeCodePlugins.skillDetail.overview.status")}),(0,t.jsx)("span",{className:(0,u.c)("rounded-xl px-2.5 py-[3px] text-xs font-medium",e.enabled?"bg-success/10 text-success":"bg-muted text-muted-foreground"),children:m(e.enabled?"claudeCodePlugins.skillDetail.overview.public":"claudeCodePlugins.skillDetail.overview.draft")})]}),(0,t.jsx)(c,{source:e.source}),e.keywords&&e.keywords.length>0&&(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("div",{className:"mb-2 text-xs text-muted-foreground",children:m("claudeCodePlugins.skillDetail.overview.tags")}),(0,t.jsx)("div",{className:"flex flex-wrap gap-1.5",children:e.keywords.map(e=>(0,t.jsx)("span",{className:"rounded-2xl border border-border bg-card px-3 py-1 text-xs text-foreground",children:e},e))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"mb-1 text-xs text-muted-foreground",children:m("claudeCodePlugins.skillDetail.overview.skillId")}),(0,t.jsx)("div",{className:"break-all font-mono text-xs text-foreground",children:e.id})]})]})]}),"usage"===g&&(0,t.jsxs)("div",{className:"max-w-[640px]",children:[(0,t.jsx)("h2",{className:"m-0 mb-2 text-lg font-normal text-foreground",children:m("claudeCodePlugins.skillDetail.usage.title")}),(0,t.jsx)("p",{className:"m-0 mb-6 text-sm leading-relaxed text-muted-foreground",children:m("claudeCodePlugins.skillDetail.usage.intro")}),(0,t.jsxs)("div",{className:"mb-6 overflow-hidden rounded-lg border border-border",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between border-b border-border bg-muted px-4 py-2.5",children:[(0,t.jsx)("span",{className:"text-[13px] font-medium text-foreground",children:m("claudeCodePlugins.skillDetail.runInClaudeCode")}),(0,t.jsxs)("button",{onClick:()=>_(y,"install"),className:(0,u.c)("flex cursor-pointer items-center gap-1 border-none bg-transparent p-0 text-xs","install"===h?"text-success":"text-info"),children:["install"===h?(0,t.jsx)(a.f,{className:"size-3"}):(0,t.jsx)(s.f,{className:"size-3"}),m("install"===h?"claudeCodePlugins.skillDetail.copied":"claudeCodePlugins.skillDetail.copy")]})]}),(0,t.jsx)("pre",{className:"m-0 bg-card px-4 py-3.5 font-mono text-sm text-foreground",children:y})]}),(0,t.jsxs)("div",{className:"mb-4 rounded-lg border border-warning/30 bg-warning/10 px-4 py-3",children:[(0,t.jsx)("p",{className:"m-0 mb-2 text-[13px] leading-relaxed text-muted-foreground",children:m("claudeCodePlugins.skillDetail.usage.staleCatalog",{name:e.name})}),(0,t.jsx)("pre",{className:"m-0 bg-transparent font-mono text-[13px] text-foreground",children:"/plugin marketplace update litellm"})]}),(0,t.jsxs)("p",{className:"m-0 text-[13px] leading-relaxed text-muted-foreground",children:[m("claudeCodePlugins.skillDetail.usage.notConfigured")," ",(0,t.jsx)("span",{onClick:()=>f("setup"),className:"cursor-pointer text-info",children:m("claudeCodePlugins.skillDetail.usage.seeSetup")})]})]}),"setup"===g&&(0,t.jsxs)("div",{className:"max-w-[640px]",children:[(0,t.jsx)("h2",{className:"m-0 mb-2 text-lg font-normal text-foreground",children:m("claudeCodePlugins.skillDetail.setup.title")}),b?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"mb-4 rounded-lg border border-warning/30 bg-warning/10 px-4 py-3",children:[(0,t.jsx)("p",{className:"m-0 mb-2 text-[13px] leading-relaxed text-muted-foreground",children:m("claudeCodePlugins.skillDetail.setup.removeFirst")}),(0,t.jsx)("pre",{className:"m-0 bg-transparent font-mono text-[13px] text-foreground",children:"/plugin marketplace remove litellm"})]}),(0,t.jsx)("p",{className:"m-0 mb-3 text-sm leading-relaxed text-muted-foreground",children:(0,t.jsx)(l.f,{i18nKey:"claudeCodePlugins.skillDetail.setup.requiresKey",components:{settings:(0,t.jsx)("code",{className:"rounded bg-muted px-1.5 py-px text-[13px]",children:"~/.claude/settings.json"}),placeholder:(0,t.jsx)("code",{className:"rounded bg-muted px-1.5 py-px text-[13px]",children:p.i})}})})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("p",{className:"m-0 mb-3 text-sm leading-relaxed text-muted-foreground",children:m("claudeCodePlugins.skillDetail.setup.runCommand")}),(0,t.jsxs)("div",{className:"mb-6 overflow-hidden rounded-lg border border-border",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between border-b border-border bg-muted px-4 py-2.5",children:[(0,t.jsx)("span",{className:"text-[13px] font-medium text-foreground",children:m("claudeCodePlugins.skillDetail.runInClaudeCode")}),(0,t.jsxs)("button",{onClick:()=>{let e=window.location.origin;_(`/plugin marketplace add ${e}/claude-code/marketplace.json`,"marketplace-cmd")},className:(0,u.c)("flex cursor-pointer items-center gap-1 border-none bg-transparent p-0 text-xs","marketplace-cmd"===h?"text-success":"text-info"),children:["marketplace-cmd"===h?(0,t.jsx)(a.f,{className:"size-3"}):(0,t.jsx)(s.f,{className:"size-3"}),m("marketplace-cmd"===h?"claudeCodePlugins.skillDetail.copied":"claudeCodePlugins.skillDetail.copy")]})]}),(0,t.jsx)("pre",{className:"m-0 bg-card px-4 py-3.5 font-mono text-[13px] text-foreground",children:`/plugin marketplace add ${window.location.origin}/claude-code/marketplace.json`})]}),(0,t.jsx)("p",{className:"m-0 mb-3 text-sm leading-relaxed text-muted-foreground",children:(0,t.jsx)(l.f,{i18nKey:"claudeCodePlugins.skillDetail.setup.orSettings",components:{settings:(0,t.jsx)("code",{className:"rounded bg-muted px-1.5 py-px text-[13px]",children:"~/.claude/settings.json"})}})})]}),(0,t.jsxs)("div",{className:"overflow-hidden rounded-lg border border-border",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between border-b border-border bg-muted px-4 py-2.5",children:[(0,t.jsx)("span",{className:"text-[13px] font-medium text-foreground",children:"~/.claude/settings.json"}),(0,t.jsxs)("button",{onClick:()=>_(v,"settings"),className:(0,u.c)("flex cursor-pointer items-center gap-1 border-none bg-transparent p-0 text-xs","settings"===h?"text-success":"text-info"),children:["settings"===h?(0,t.jsx)(a.f,{className:"size-3"}):(0,t.jsx)(s.f,{className:"size-3"}),m("settings"===h?"claudeCodePlugins.skillDetail.copied":"claudeCodePlugins.skillDetail.copy")]})]}),(0,t.jsx)("pre",{className:"m-0 bg-card px-4 py-3.5 font-mono text-[13px] text-foreground",children:v})]})]})]})}])},735450,e=>{"use strict";var t=e.i(411382),i=e.i(772325),r=e.i(54105),a=e.i(240192),s=e.i(138620);let n="https://docs.litellm.ai/docs/decisions",l=`${n}#supported-providers`,o=`${n}#self-hosted-laya-and-nimble`,d=new Set(["/v1/decisions","/v1/systemone"]),u=t.z.object({litellm_provider:r.z.string(),mode:r.z.string().nullish(),supported_endpoints:i.z.array(r.z.string()).nullish()}),p="decisions",c=["evaluation",p],m=e=>null!=e&&c.includes(e),g=e=>m(e.mode)||(e.supported_endpoints??[]).some(e=>d.has(e)),f=e=>{let t=a.z.record(r.z.string(),s.z.unknown()).safeParse(e);return t.success?Object.entries(t.data).flatMap(([e,t])=>{let i=u.safeParse(t);return i.success?[[e,i.data]]:[]}):[]},h={decisions:0,"self-hosted":1,"needs-upgrade":2},x=t.z.object({decision_model_providers:i.z.array(r.z.string())}),b=(e,t)=>e.model.length-t.model.length||e.model.localeCompare(t.model),_=(e,t,i)=>({row:e,routeOrder:h[e.route],rankInProvider:i.slice(0,t).filter(t=>t.provider===e.provider).length});e.s(["O",0,n,"d",0,p,"Z",0,l,"L",0,o,"B",0,"playground?tab=system-one","F",0,function(e){let t=f(e),i=t.filter(([,e])=>g(e)),r=new Map([...new Set(i.map(([,e])=>e.litellm_provider))].map(e=>{let i=t.filter(([,t])=>t.litellm_provider===e);return[e,{decisionOnly:i.every(([,e])=>g(e))}]}));return{models:new Set(i.map(([e])=>e)),providers:r}},"W",0,(e,t)=>f(e).filter(([,e])=>g(e)).map(([e,i])=>({model:e,provider:i.litellm_provider,route:t?.has(i.litellm_provider)?"decisions":(i.supported_endpoints??["/v1/decisions"]).includes("/v1/decisions")?null===t?"decisions":"needs-upgrade":"self-hosted"})).toSorted(b).map(_).toSorted((e,t)=>e.routeOrder-t.routeOrder||e.rankInProvider-t.rankInProvider||e.row.provider.localeCompare(t.row.provider)).map(({row:e})=>e),"i",0,e=>m(e)?p:e??void 0,"q",0,e=>e.flatMap(e=>e===p?c:[e]),"m",0,g,"_",0,m,"r",0,(e,t,i)=>void 0!==t&&e.providers.get(t)?.decisionOnly===!0||i.some(t=>e.models.has(t)),"P",0,e=>{let t=x.safeParse(e);return t.success?new Set(t.data.decision_model_providers):null}])},899426,e=>{"use strict";let t=e=>e.trim().toLowerCase();function i(e,i){let r=t(e);if(""===r)return!0;let a=i.filter(e=>"string"==typeof e).map(e=>e.toLowerCase());return!!a.some(e=>e.includes(r))||r.split(/\s+/).every(e=>a.some(t=>t.includes(e)))}e.s(["$",0,function(e,t,r){return e.filter(e=>i(t,r(e)))},"h",0,i,"e",0,function(e,i,r){let a=t(i);if(""===a)return[...e];let s=e=>{let t=r(e).toLowerCase();return 1e3*(t===a)+100*!!t.startsWith(a)+(1e3-t.length)};return[...e].sort((e,t)=>s(t)-s(e))}])}]);