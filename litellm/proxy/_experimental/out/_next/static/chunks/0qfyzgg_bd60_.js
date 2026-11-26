(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,546467,e=>{"use strict";let t=(0,e.i(475254).f)("external-link",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);e.s(["f",0,t])},778917,e=>{"use strict";var t=e.i(546467);e.s(["f",()=>t.f])},306228,e=>{"use strict";let t=(0,e.i(475254).f)("link-2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);e.s(["f",0,t],306228)},842354,e=>{"use strict";var t=e.i(768371);e.s(["f",0,()=>t.q.useQuery("get","/.well-known/litellm-ui-config").data?.claude_code_marketplace_auth_required!==!1])},895335,e=>{"use strict";var t=e.i(843476),s=e.i(143488),i=e.i(768371),a=e.i(271645),r=e.i(115571);function l(e){return window.addEventListener("storage",e),window.addEventListener(r.M,e),()=>{window.removeEventListener("storage",e),window.removeEventListener(r.M,e)}}var n=e.i(487486),o=e.i(519455),d=e.i(337822),c=e.i(772436),u=e.i(196631);let m=/^v?(\d+)\.(\d+)\.(\d+)/,p=e=>{let t=m.exec(e.trim());return t?[Number(t[1]),Number(t[2]),Number(t[3])]:null};var g=e.i(245423);let f={readKey:"litellmHideAutoRouterAnnouncement",title:"LiteLLM Auto Router",description:"Route every request to the cheapest model that can handle it, no prompt changes needed.",linkLabel:"Read the docs",href:"https://docs.litellm.ai/docs/proxy/auto_routing"},x=(e,t,s)=>`${e} ${1===e?t:s}`,h=({announcement:e})=>{var s;let i=(s=e.readKey,(0,a.useSyncExternalStore)(l,()=>"true"===(0,r.t)(s),()=>!1));return(0,t.jsxs)("article",{"aria-label":e.title,className:"flex flex-col gap-2",children:[(0,t.jsx)("p",{className:"text-sm font-medium",children:e.title}),(0,t.jsx)("p",{className:"text-sm leading-snug text-muted-foreground",children:e.description}),(0,t.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,t.jsx)("a",{className:(0,u.c)((0,o.i)({size:"sm"})),href:e.href,target:"_blank",rel:"noopener noreferrer",children:e.linkLabel}),i?null:(0,t.jsx)(o.K,{variant:"link",size:"sm",className:"px-1!",onClick:()=>{var t;return t=e.readKey,void((0,r.A)(t,"true"),(0,r.s)(t))},children:"Mark as read"})]})]})},b=({currentVersion:e,latestRelease:s})=>{var i;let o=e&&s&&((e,t)=>{let s=p(e),i=p(t);if(!s||!i)return!1;for(let e=0;e<3;e+=1)if(i[e]!==s[e])return i[e]>s[e];return!1})(e,s.version)?{readKey:`litellm:upgradeBannerDismissed:${s.version}`,title:`LiteLLM v${s.version} is available`,description:`${(({new_features:e,bug_fixes:t,other_updates:s})=>[x(e,"new feature","new features"),x(t,"fix","fixes"),`and ${x(s,"other update","other updates")}`].join(", "))(s)}. Your current version is v${e}`,linkLabel:"View release notes",href:s.release_url}:null,u=o?[o,f]:[f],m=(i=u.map(e=>e.readKey),(0,a.useSyncExternalStore)(l,()=>i.filter(e=>"true"!==(0,r.t)(e)).length,()=>i.length));return(0,t.jsxs)(d.V,{children:[(0,t.jsx)(d.J,{className:"flex! h-9! w-9! items-center justify-center rounded-md! text-muted-foreground transition-colors hover:bg-accent! hover:text-foreground!","aria-label":m>0?`Notifications, ${m} unread`:"Notifications",children:(0,t.jsxs)("span",{className:"relative inline-flex",children:[(0,t.jsx)(g.f,{className:"size-4","aria-hidden":!0}),m>0?(0,t.jsx)(n.f,{className:"absolute -top-0.5 -right-1 size-1.5 p-0","aria-hidden":!0}):null]})}),(0,t.jsx)(d.T,{align:"end","aria-label":"Notifications",children:u.map((e,s)=>(0,t.jsxs)(a.Fragment,{children:[s>0?(0,t.jsx)(c.f,{}):null,(0,t.jsx)(h,{announcement:e})]},e.readKey))})]})};e.s(["f",0,({accessToken:e})=>{let{data:a}=(0,s.f)(e),{data:r}=i.q.useQuery("get","/get/latest_release_info",{},{enabled:!!e,staleTime:36e5,retry:!1});return(0,t.jsx)(b,{currentVersion:a?.litellm_version,latestRelease:r})}],895335)},641141,e=>{"use strict";var t=e.i(843476),s=e.i(135214),i=e.i(912089),a=e.i(556260),r=e.i(319684),l=e.i(636772),n=e.i(115571),o=e.i(222038),d=e.i(782066),c=e.i(708347),u=e.i(664659),m=e.i(344523),p=e.i(243553),g=e.i(465261),f=e.i(292270),x=e.i(263488),h=e.i(581418),b=e.i(284614),_=e.i(618566),j=e.i(799676),v=e.i(487486),N=e.i(337822),w=e.i(772436),y=e.i(699375),k=e.i(746798),C=e.i(922407),$=e.i(196631),P=e.i(271645),z=e.i(322831),I=e.i(81920);e.s(["f",0,({onLogout:e,variant:S="navbar",collapsed:D=!1})=>{let{t:A}=(0,z.f)(),{userId:L,userEmail:E,userRole:O,userRoleLabel:R,isViewOnly:M,premiumUser:T,loginMethod:B}=(0,s.f)(),F=(0,_.useRouter)(),[U,q]=(0,P.useState)(!1),K=(0,l.f)(),H=(0,i.f)(),[Z,Y]=(0,a.f)(L),W=L&&!M&&(0,c.u)(O),[J,Q]=(0,P.useState)(!1);(0,P.useEffect)(()=>{Q("true"===(0,n.t)("disableShowNewBadge"))},[]);let V=E||L||"user",G=function(e,t){let s=e?.split("@")[0]?.trim();if(s){let e=s.replace(/[^a-zA-Z0-9]+/g," ").trim().split(/\s+/).filter(Boolean);if(e.length>=2)return`${e[0].charAt(0)}${e[1].charAt(0)}`.toUpperCase();if(1===e.length){let t=e[0];return t.length>=2?t.slice(0,2).toUpperCase():`${t.charAt(0)}`.toUpperCase()}}return t&&t.length>=2?t.slice(0,2).toUpperCase():t&&1===t.length?`${t.toUpperCase()}•`:"?"}(E,L),X=function(e){let t=0;for(let s=0;s<e.length;s+=1)t=e.charCodeAt(s)+((t<<5)-t);return Math.abs(t)%360}(V),ee=(0,o.f)(E,L);return(0,t.jsxs)(N.V,{open:U,onOpenChange:q,children:["sidebar"===S?(0,t.jsxs)(N.J,{render:(0,t.jsx)("button",{type:"button",className:(0,$.c)("flex w-full items-center rounded-lg border border-transparent transition-colors hover:bg-sidebar-accent",D?"justify-center px-0 py-1":"gap-2.5 px-2 py-1.5 text-left"),"aria-label":A("shell.account.menuLabel",{identity:E||L||A("shell.account.unknownIdentity")}),"aria-haspopup":"dialog",title:D?ee:void 0}),children:[(0,t.jsx)(j.E,{className:"size-[30px] shadow-inner ring-1 ring-black/5","aria-hidden":!0,children:(0,t.jsx)(j.b,{className:"font-semibold text-white",style:{backgroundColor:`hsl(${X} 46% 38%)`},children:G})}),!D&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("span",{className:"min-w-0 flex-1 leading-tight",children:[(0,t.jsx)("span",{className:"block truncate text-[13px] font-medium text-sidebar-foreground",children:ee}),R&&(0,t.jsx)("span",{className:"block truncate text-[11px] text-muted-foreground",children:R})]}),(0,t.jsx)(m.f,{size:16,strokeWidth:1.75,className:"shrink-0 text-muted-foreground","aria-hidden":!0})]})]}):(0,t.jsxs)(N.J,{render:(0,t.jsx)("button",{type:"button",className:"flex! max-w-[min(200px,34vw)] items-center gap-2 rounded-md! py-0.5! pl-1! pr-2! transition-colors hover:bg-accent!","aria-label":A("shell.account.menuLabel",{identity:E||L||A("shell.account.unknownIdentity")}),"aria-haspopup":"dialog"}),children:[(0,t.jsx)(j.E,{className:"shadow-inner ring-1 ring-black/5","aria-hidden":!0,children:(0,t.jsx)(j.b,{className:"font-semibold text-white",style:{backgroundColor:`hsl(${X} 46% 38%)`},children:G})}),(0,t.jsx)("span",{className:"hidden min-w-0 truncate text-left text-sm font-medium leading-none text-foreground md:inline",children:ee}),(0,t.jsx)(u.f,{className:"hidden size-2.5 shrink-0 text-muted-foreground md:inline","aria-hidden":!0})]}),(0,t.jsxs)(N.T,{align:"sidebar"===S?"start":"end",side:"sidebar"===S?"top":"bottom",className:"w-auto gap-0 rounded-lg bg-card p-1 shadow-lg","data-testid":"user-dropdown-panel",children:[(0,t.jsxs)("div",{className:"flex w-full flex-col gap-2 p-3 text-sm",children:[(0,t.jsxs)("div",{className:"flex w-full items-center justify-between gap-2",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(x.f,{className:"size-4"}),(0,t.jsx)("span",{className:"text-muted-foreground",children:E||"-"})]}),T?(0,t.jsxs)(v.f,{children:[(0,t.jsx)(p.f,{className:"size-3"}),A("shell.account.premium")]}):(0,t.jsx)(k.g,{children:(0,t.jsxs)(k.W,{children:[(0,t.jsxs)(k.y,{render:(0,t.jsx)(v.f,{variant:"outline"}),children:[(0,t.jsx)(p.f,{className:"size-3"}),A("shell.account.standard")]}),(0,t.jsx)(k.Y,{side:"left",children:A("shell.account.upgradeHint")})]})})]}),(0,t.jsx)(w.f,{className:"my-2"}),(0,t.jsxs)("div",{className:"flex w-full items-center justify-between gap-2",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(b.f,{className:"size-4"}),(0,t.jsx)("span",{className:"text-muted-foreground",children:A("shell.account.userId")})]}),(0,t.jsxs)("div",{className:"flex items-center gap-1",children:[(0,t.jsx)("span",{className:"max-w-[150px] truncate",title:L||"-",children:L||"-"}),(0,t.jsx)(C.f,{value:L,label:A("shell.account.copyUserId")})]})]}),(0,t.jsxs)("div",{className:"flex w-full items-center justify-between gap-2",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(h.f,{className:"size-4"}),(0,t.jsx)("span",{className:"text-muted-foreground",children:A("shell.account.role")})]}),(0,t.jsx)("span",{children:R})]}),(0,t.jsx)(w.f,{className:"my-2"}),(0,t.jsxs)("div",{className:"flex w-full items-center justify-between gap-2",children:[(0,t.jsx)("span",{className:"text-muted-foreground",children:A("common.language.label")}),(0,t.jsx)(I.f,{compact:!0})]}),(0,t.jsxs)("div",{className:"flex w-full items-center justify-between gap-2",children:[(0,t.jsx)("span",{className:"text-muted-foreground",children:A("shell.account.hideNewFeatures")}),(0,t.jsx)(y.f,{size:"sm",checked:J,onCheckedChange:e=>{Q(e),e?(0,n.A)("disableShowNewBadge","true"):(0,n.p)("disableShowNewBadge"),(0,n.s)("disableShowNewBadge")},"aria-label":A("shell.account.hideNewFeatures")})]}),(0,t.jsxs)("div",{className:"flex w-full items-center justify-between gap-2",children:[(0,t.jsx)("span",{className:"text-muted-foreground",children:A("shell.account.hidePrompts")}),(0,t.jsx)(y.f,{size:"sm",checked:K,onCheckedChange:e=>{e?(0,n.A)("disableShowPrompts","true"):(0,n.p)("disableShowPrompts"),(0,n.s)("disableShowPrompts")},"aria-label":A("shell.account.hidePrompts")})]}),(0,t.jsxs)("div",{className:"flex w-full items-center justify-between gap-2",children:[(0,t.jsx)("span",{className:"text-muted-foreground",children:A("shell.account.hideBouncingIcon")}),(0,t.jsx)(y.f,{size:"sm",checked:H,onCheckedChange:e=>{e?(0,n.A)("disableBouncingIcon","true"):(0,n.p)("disableBouncingIcon"),(0,n.s)("disableBouncingIcon")},"aria-label":A("shell.account.hideBouncingIcon")})]}),!0===T&&W&&(0,t.jsxs)("div",{className:"flex w-full items-center justify-between gap-2",children:[(0,t.jsx)("span",{className:"text-muted-foreground",children:A("shell.account.hideLiteAdmin",{name:r.f})}),(0,t.jsx)(y.f,{size:"sm",checked:Z,onCheckedChange:Y,"aria-label":A("shell.account.hideLiteAdmin",{name:r.f})})]})]}),(0,t.jsx)(w.f,{}),"username_password"===B&&(0,t.jsxs)("button",{type:"button",onClick:()=>{q(!1),F.push((0,d.B)("change-password"))},className:"flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent",children:[(0,t.jsx)(g.f,{className:"size-4"}),A("shell.account.changePassword")]}),(0,t.jsxs)("button",{type:"button",onClick:e,className:"flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent",children:[(0,t.jsx)(f.f,{className:"size-4"}),A("shell.account.logout")]})]})]})}])},383862,e=>{"use strict";var t=e.i(843476),s=e.i(618393),i=e.i(131792),a=e.i(950594),r=e.i(283713);e.s(["f",0,({onWorkerSwitch:e})=>{let{isControlPlane:l,selectedWorker:n,workers:o}=(0,r.f)();if(!l||!n)return null;let d=o.map(e=>({label:e.name,value:e.worker_id,disabled:e.worker_id===n.worker_id}));return(0,t.jsxs)(i.x,{items:d,value:d.find(e=>e.value===n.worker_id)??null,itemToStringLabel:e=>e.label,onValueChange:t=>{t&&e(t.value)},children:[(0,t.jsx)(i.c,{className:"min-w-[180px]","aria-label":"Worker",children:(0,t.jsx)(a.B,{align:"inline-start",children:(0,t.jsx)(s.f,{className:"size-4"})})}),(0,t.jsxs)(i.R,{children:[(0,t.jsx)(i.S,{children:"No matching workers"}),(0,t.jsx)(i.k,{children:e=>(0,t.jsx)(i.T,{value:e,disabled:e.disabled,children:e.label},e.value)})]})]})}])},909947,e=>{"use strict";var t=e.i(865361);e.s(["f",0,e=>{let s,{apiKeySource:i,accessToken:a,apiKey:r,inputMessage:l,chatHistory:n,selectedTags:o,selectedVectorStores:d,selectedGuardrails:c,selectedPolicies:u,selectedVoice:m,endpointType:p,selectedModel:g,selectedSdk:f,proxySettings:x,customHeaders:h}=e,b="session"===i?a:r,_=window.location.origin,j=x?.LITELLM_UI_API_DOC_BASE_URL;j&&j.trim()?_=j:x?.PROXY_BASE_URL&&(_=x.PROXY_BASE_URL);let v=l||"Your prompt here",N=v.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n"),w=n.filter(e=>!e.isImage).map(({role:e,content:t})=>({role:e,content:t})),y={};o.length>0&&(y.tags=o),d.length>0&&(y.vector_stores=d),c.length>0&&(y.guardrails=c),u.length>0&&(y.policies=u);let k=g||"your-model-name",C=h&&Object.keys(h).length>0?`,
	default_headers=${JSON.stringify(h,null,2).replace(/\n/g,"\n	")}`:"",$="azure"===f?`import openai

client = openai.AzureOpenAI(
	api_key="${b||"YOUR_LITELLM_API_KEY"}",
	azure_endpoint="${_}",
	api_version="2024-02-01"${C}
)`:`import openai

client = openai.OpenAI(
	api_key="${b||"YOUR_LITELLM_API_KEY"}",
	base_url="${_}"${C}
)`;switch(p){case t.Q.CHAT:{let e=Object.keys(y).length>0,t="";if(e){let e=JSON.stringify({metadata:y},null,2).split("\n").map(e=>" ".repeat(4)+e).join("\n").trim();t=`,
    extra_body=${e}`}let i=w.length>0?w:[{role:"user",content:v}];s=`
import base64

# Helper function to encode images to base64
def encode_image(image_path):
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode('utf-8')

# Example with text only
response = client.chat.completions.create(
    model="${k}",
    messages=${JSON.stringify(i,null,4)}${t}
)

print(response)

# Example with image or PDF (uncomment and provide file path to use)
# base64_file = encode_image("path/to/your/file.jpg")  # or .pdf
# response_with_file = client.chat.completions.create(
#     model="${k}",
#     messages=[
#         {
#             "role": "user",
#             "content": [
#                 {
#                     "type": "text",
#                     "text": "${N}"
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
`;break}case t.Q.RESPONSES:{let e=Object.keys(y).length>0,t="";if(e){let e=JSON.stringify({metadata:y},null,2).split("\n").map(e=>" ".repeat(4)+e).join("\n").trim();t=`,
    extra_body=${e}`}let i=w.length>0?w:[{role:"user",content:v}];s=`
import base64

# Helper function to encode images to base64
def encode_image(image_path):
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode('utf-8')

# Example with text only
response = client.responses.create(
    model="${k}",
    input=${JSON.stringify(i,null,4)}${t}
)

print(response.output_text)

# Example with image or PDF (uncomment and provide file path to use)
# base64_file = encode_image("path/to/your/file.jpg")  # or .pdf
# response_with_file = client.responses.create(
#     model="${k}",
#     input=[
#         {
#             "role": "user",
#             "content": [
#                 {"type": "input_text", "text": "${N}"},
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
`;break}case t.Q.IMAGE:s="azure"===f?`
# NOTE: The Azure SDK does not have a direct equivalent to the multi-modal 'responses.create' method shown for OpenAI.
# This snippet uses 'client.images.generate' and will create a new image based on your prompt.
# It does not use the uploaded image, as 'client.images.generate' does not support image inputs in this context.
import os
import requests
import json
import time
from PIL import Image

result = client.images.generate(
	model="${k}",
	prompt="${l}",
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
prompt = "${N}"

# Encode images to base64
base64_image1 = encode_image("body-lotion.png")
base64_image2 = encode_image("soap.png")

# Create file IDs
file_id1 = create_file("body-lotion.png")
file_id2 = create_file("incense-kit.png")

response = client.responses.create(
	model="${k}",
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
`;break;case t.Q.IMAGE_EDITS:s="azure"===f?`
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
prompt = "${N}"

# Encode images to base64
base64_image1 = encode_image("body-lotion.png")
base64_image2 = encode_image("soap.png")

# Create file IDs
file_id1 = create_file("body-lotion.png")
file_id2 = create_file("incense-kit.png")

response = client.responses.create(
	model="${k}",
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
prompt = "${N}"

# Encode images to base64
base64_image1 = encode_image("body-lotion.png")
base64_image2 = encode_image("soap.png")

# Create file IDs
file_id1 = create_file("body-lotion.png")
file_id2 = create_file("incense-kit.png")

response = client.responses.create(
	model="${k}",
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
`;break;case t.Q.EMBEDDINGS:s=`
response = client.embeddings.create(
	input="${l||"Your string here"}",
	model="${k}",
	encoding_format="base64" # or "float"
)

print(response.data[0].embedding)
`;break;case t.Q.TRANSCRIPTION:s=`
# Open the audio file
audio_file = open("path/to/your/audio/file.mp3", "rb")

# Make the transcription request
response = client.audio.transcriptions.create(
	model="${k}",
	file=audio_file${l?`,
	prompt="${l.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}"`:""}
)

print(response.text)
`;break;case t.Q.SPEECH:s=`
# Make the text-to-speech request
response = client.audio.speech.create(
	model="${k}",
	input="${l||"Your text to convert to speech here"}",
	voice="${m}"  # Options: alloy, ash, ballad, coral, echo, fable, nova, onyx, sage, shimmer
)

# Save the audio to a file
output_filename = "output_speech.mp3"
response.stream_to_file(output_filename)
print(f"Audio saved to {output_filename}")

# Optional: Customize response format and speed
# response = client.audio.speech.create(
#     model="${k}",
#     input="${l||"Your text to convert to speech here"}",
#     voice="alloy",
#     response_format="mp3",  # Options: mp3, opus, aac, flac, wav, pcm
#     speed=1.0  # Range: 0.25 to 4.0
# )
# response.stream_to_file("output_speech.mp3")
`;break;default:s="\n# Code generation for this endpoint is not implemented yet."}return`${$}
${s}`}])},209261,e=>{"use strict";var t=e.i(201787);let s=/^[a-zA-Z0-9][a-zA-Z0-9._-]*(\/[a-zA-Z0-9][a-zA-Z0-9._-]*)*$/,i=e=>e.trim().replace(/\/+$/,""),a=/\.(md|markdown|txt|json|ya?ml|toml)$/i,r=/\.zip$/i,l=/^[0-9a-fA-F]{64}$/,n=/^\d{1,3}(\.\d{1,3}){3}$/,o=/^[A-Za-z0-9-]+$/,d=/^[A-Za-z0-9._-]+$/,c=/^https?:\/\//i,u="ssh://",m=/^([a-z0-9._-]+)@([^:/@]+):(?!\/)(.+)$/i,p=e=>e.pathname.split("/").filter(e=>""!==e),g=e=>{try{return new URL(e)}catch{return null}},f=e=>e.hostname.includes(".")&&!e.hostname.startsWith("[")&&!n.test(e.hostname),x=e=>{let t=e.split("/").filter(e=>""!==e);return t[t.length-1]??""},h=e=>e.toLowerCase().replace(/[^a-z0-9-]+/g,"-").replace(/-+/g,"-").replace(/^-+|-+$/g,""),b=(e,a,r,l)=>{let n=i(l??"");return""!==n?s.test(n)?{parsed:{source:"git-subdir",url:a,path:n},label:t.f.t("claudeCodePlugins.sources.gitSubdir",{kind:e,url:a,path:n}),suggestedName:h(x(n))}:null:{parsed:{source:"url",url:a},label:t.f.t("claudeCodePlugins.sources.gitRepo",{kind:e,url:a}),suggestedName:h(r)}},_="<your-litellm-key>";e.s(["i",0,_,"U",0,(e,t)=>JSON.stringify({extraKnownMarketplaces:{litellm:{source:{source:"url",url:`${e}/claude-code/marketplace.json`,...t?{headers:{Authorization:`Bearer ${_}`}}:{}}}}},null,2),"a",0,e=>`/plugin install ${e.name}@litellm`,"u",0,e=>{if(!e)return"gray";let t=e.toLowerCase();if(t.includes("development")||t.includes("dev"))return"blue";if(t.includes("productivity")||t.includes("workflow"))return"green";if(t.includes("learning")||t.includes("education"))return"purple";if(t.includes("security")||t.includes("safety"))return"red";if(t.includes("data")||t.includes("analytics"))return"orange";else if(t.includes("integration")||t.includes("api"))return"yellow";return"gray"},"_",0,e=>"github"===e.source&&e.repo?t.f.t("claudeCodePlugins.sources.githubDisplay",{repo:e.repo}):"git-subdir"===e.source&&e.url&&e.path?`${e.url} @ ${e.path}`:("url"===e.source||"archive"===e.source)&&e.url?e.url:t.f.t("claudeCodePlugins.sources.unknown"),"E",0,e=>"github"===e.source&&e.repo?`https://github.com/${e.repo}`:("url"===e.source||"git-subdir"===e.source||"archive"===e.source)&&e.url&&c.test(e.url)?e.url:null,"r",0,e=>!e||/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),"R",0,e=>!e||/^\d+\.\d+\.\d+(-[a-zA-Z0-9.-]+)?(\+[a-zA-Z0-9.-]+)?$/.test(e),"b",0,e=>""===e.trim()||l.test(e.trim()),"P",0,e=>{let t=i(e);return""!==t&&s.test(t)},"D",0,e=>e&&""!==e.trim()?e.split(",").map(e=>e.trim()).filter(e=>""!==e):[],"Z",0,(e,l)=>{let n=((e,t)=>{let s=e.trim(),i=m.exec(s),a=i?`${u}${i[1]}@${i[2]}/${i[3]}`:s;if(!a.toLowerCase().startsWith(u))return null;let r=g(a);if(!r||""===r.username||""!==r.password||!f(r))return null;let l=a.indexOf("/",u.length);return -1===l||r.pathname!==a.slice(l)||p(r).length<2?null:b("SSH",s,x(r.pathname).replace(/\.git$/i,""),t)})(e,l);if(n)return n;let c=(e=>{let t=e.trim();if(""===t||t.startsWith("//"))return null;let s=g(/^[a-z][a-z0-9+.-]*:\/\//i.test(t)?t:`https://${t}`);return s&&"https:"===s.protocol&&""===s.username&&""===s.password&&f(s)?s:null})(e);if(!c)return null;if(r.test(c.pathname))return{parsed:{source:"archive",url:c.href},label:t.f.t("claudeCodePlugins.sources.zipArchive",{location:`${c.host}${c.pathname}`}),suggestedName:h(x(c.pathname).replace(r,""))};if("github.com"===c.hostname.replace(/^www\./,""))return((e,r)=>{let l=p(e);if(l.length<2)return null;let n=l[0],c=l[1].replace(/\.git$/,"");if(!o.test(n)||!d.test(c))return null;let u=`${n}/${c}`,m=`https://github.com/${u}`,g={parsed:{source:"github",repo:u},label:t.f.t("claudeCodePlugins.sources.githubRepo",{repo:u}),suggestedName:h(c)};if(l.length>=4&&("tree"===l[2]||"blob"===l[2])){let e=l.slice(4),r=x(e.join("/")),n=a.test(r)?e.slice(0,-1):e;if(0===n.length)return g;let o=i(n.join("/"));return s.test(o)?{parsed:{source:"git-subdir",url:m,path:o},label:t.f.t("claudeCodePlugins.sources.githubSubdir",{repo:u,path:o}),suggestedName:h(x(o))}:null}if(2!==l.length)return null;let f=i(r??"");return""!==f?s.test(f)?{parsed:{source:"git-subdir",url:m,path:f},label:t.f.t("claudeCodePlugins.sources.githubSubdir",{repo:u,path:f}),suggestedName:h(x(f))}:null:g})(c,l);if(p(c).length<2)return null;let _=x(c.pathname).replace(/\.git$/,"");return b("Git",`${c.protocol}//${c.host}${c.pathname.replace(/\/+$/,"")}`,_,l)},"e",0,e=>!!e&&""!==e.trim()&&/^[a-z0-9-]+$/.test(e)])},652272,e=>{"use strict";var t=e.i(843476),s=e.i(271645),i=e.i(871689),a=e.i(643531),r=e.i(174886),l=e.i(306228),n=e.i(345771),o=e.i(322831),d=e.i(842354),c=e.i(196631),u=e.i(209261);let m=({source:e})=>{let{t:s}=(0,o.f)(),i=(0,u.E)(e),a=i&&"git-subdir"===e.source&&e.path?`${i}/tree/main/${e.path}`:i;return a?(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("div",{className:"mb-1 text-xs text-muted-foreground",children:s("claudeCodePlugins.skillDetail.overview.source")}),(0,t.jsxs)("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1 break-all text-[13px] text-info",children:[a.replace("https://",""),(0,t.jsx)(l.f,{className:"size-3 shrink-0"})]})]}):e.url?(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("div",{className:"mb-1 text-xs text-muted-foreground",children:s("claudeCodePlugins.skillDetail.overview.source")}),(0,t.jsx)("div",{className:"break-all text-[13px] text-foreground",children:(0,u._)(e)})]}):null};e.s(["f",0,({skill:e,onBack:l})=>{let{t:p}=(0,o.f)(),[g,f]=(0,s.useState)("overview"),[x,h]=(0,s.useState)(null),b=(0,d.f)(),_=(e,t)=>{navigator.clipboard.writeText(e),h(t),setTimeout(()=>h(null),2e3)},j=(0,u.a)(e),v=(0,u.U)(window.location.origin,b),N=[...e.category?[{property:p("claudeCodePlugins.skillDetail.properties.category"),value:e.category}]:[],...e.domain?[{property:p("claudeCodePlugins.skillDetail.properties.domain"),value:e.domain}]:[],...e.namespace?[{property:p("claudeCodePlugins.skillDetail.properties.namespace"),value:e.namespace}]:[],...e.version?[{property:p("claudeCodePlugins.skillDetail.properties.version"),value:e.version}]:[],...e.author?.name?[{property:p("claudeCodePlugins.skillDetail.properties.author"),value:e.author.name}]:[],...e.created_at?[{property:p("claudeCodePlugins.skillDetail.properties.added"),value:new Date(e.created_at).toLocaleDateString()}]:[]],w=[{key:"overview",label:p("claudeCodePlugins.skillDetail.tabs.overview")},{key:"usage",label:p("claudeCodePlugins.skillDetail.tabs.usage")}];return(0,t.jsxs)("div",{className:"py-6 pl-0 pr-8",children:[(0,t.jsxs)("div",{onClick:l,className:"mb-6 inline-flex cursor-pointer items-center gap-1.5 text-sm text-muted-foreground",children:[(0,t.jsx)(i.f,{className:"size-3"}),(0,t.jsx)("span",{children:p("claudeCodePlugins.skillDetail.back")})]}),(0,t.jsxs)("div",{className:"mb-2",children:[(0,t.jsx)("h1",{className:"m-0 text-[28px] font-normal leading-tight text-foreground",children:e.name}),e.description&&(0,t.jsx)("p",{className:"mb-0 ml-0 mr-0 mt-2 text-sm leading-relaxed text-muted-foreground",children:e.description})]}),(0,t.jsx)("div",{className:"mb-7 mt-6 border-b border-border",children:(0,t.jsx)("div",{className:"flex",children:w.map(e=>(0,t.jsx)("div",{onClick:()=>f(e.key),className:(0,c.c)("-mb-px cursor-pointer border-b-[3px] px-5 py-3 text-sm",g===e.key?"border-info font-medium text-info":"border-transparent font-normal text-muted-foreground"),children:e.label},e.key))})}),"overview"===g&&(0,t.jsxs)("div",{className:"flex gap-16",children:[(0,t.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,t.jsx)("h2",{className:"m-0 mb-1 text-lg font-normal text-foreground",children:p("claudeCodePlugins.skillDetail.overview.title")}),(0,t.jsx)("p",{className:"m-0 mb-4 text-[13px] text-muted-foreground",children:p("claudeCodePlugins.skillDetail.overview.subtitle")}),(0,t.jsxs)("table",{className:"w-full border-collapse text-sm",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{className:"border-b border-border",children:[(0,t.jsx)("th",{className:"w-40 py-3 text-left font-medium text-muted-foreground",children:p("claudeCodePlugins.skillDetail.overview.propertyHeader")}),(0,t.jsx)("th",{className:"py-3 text-left font-medium text-muted-foreground",children:e.name})]})}),(0,t.jsx)("tbody",{children:N.map((e,s)=>(0,t.jsxs)("tr",{className:"border-b border-border",children:[(0,t.jsx)("td",{className:"py-3 text-foreground",children:e.property}),(0,t.jsx)("td",{className:"py-3 text-foreground",children:e.value})]},s))})]})]}),(0,t.jsxs)("div",{className:"w-60 shrink-0",children:[(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("div",{className:"mb-1 text-xs text-muted-foreground",children:p("claudeCodePlugins.skillDetail.overview.status")}),(0,t.jsx)("span",{className:(0,c.c)("rounded-xl px-2.5 py-[3px] text-xs font-medium",e.enabled?"bg-success/10 text-success":"bg-muted text-muted-foreground"),children:p(e.enabled?"claudeCodePlugins.skillDetail.overview.public":"claudeCodePlugins.skillDetail.overview.draft")})]}),(0,t.jsx)(m,{source:e.source}),e.keywords&&e.keywords.length>0&&(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("div",{className:"mb-2 text-xs text-muted-foreground",children:p("claudeCodePlugins.skillDetail.overview.tags")}),(0,t.jsx)("div",{className:"flex flex-wrap gap-1.5",children:e.keywords.map(e=>(0,t.jsx)("span",{className:"rounded-2xl border border-border bg-card px-3 py-1 text-xs text-foreground",children:e},e))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"mb-1 text-xs text-muted-foreground",children:p("claudeCodePlugins.skillDetail.overview.skillId")}),(0,t.jsx)("div",{className:"break-all font-mono text-xs text-foreground",children:e.id})]})]})]}),"usage"===g&&(0,t.jsxs)("div",{className:"max-w-[640px]",children:[(0,t.jsx)("h2",{className:"m-0 mb-2 text-lg font-normal text-foreground",children:p("claudeCodePlugins.skillDetail.usage.title")}),(0,t.jsx)("p",{className:"m-0 mb-6 text-sm leading-relaxed text-muted-foreground",children:p("claudeCodePlugins.skillDetail.usage.intro")}),(0,t.jsxs)("div",{className:"mb-6 overflow-hidden rounded-lg border border-border",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between border-b border-border bg-muted px-4 py-2.5",children:[(0,t.jsx)("span",{className:"text-[13px] font-medium text-foreground",children:p("claudeCodePlugins.skillDetail.runInClaudeCode")}),(0,t.jsxs)("button",{onClick:()=>_(j,"install"),className:(0,c.c)("flex cursor-pointer items-center gap-1 border-none bg-transparent p-0 text-xs","install"===x?"text-success":"text-info"),children:["install"===x?(0,t.jsx)(a.f,{className:"size-3"}):(0,t.jsx)(r.f,{className:"size-3"}),p("install"===x?"claudeCodePlugins.skillDetail.copied":"claudeCodePlugins.skillDetail.copy")]})]}),(0,t.jsx)("pre",{className:"m-0 bg-card px-4 py-3.5 font-mono text-sm text-foreground",children:j})]}),(0,t.jsxs)("div",{className:"mb-4 rounded-lg border border-warning/30 bg-warning/10 px-4 py-3",children:[(0,t.jsx)("p",{className:"m-0 mb-2 text-[13px] leading-relaxed text-muted-foreground",children:p("claudeCodePlugins.skillDetail.usage.staleCatalog",{name:e.name})}),(0,t.jsx)("pre",{className:"m-0 bg-transparent font-mono text-[13px] text-foreground",children:"/plugin marketplace update litellm"})]}),(0,t.jsxs)("p",{className:"m-0 text-[13px] leading-relaxed text-muted-foreground",children:[p("claudeCodePlugins.skillDetail.usage.notConfigured")," ",(0,t.jsx)("span",{onClick:()=>f("setup"),className:"cursor-pointer text-info",children:p("claudeCodePlugins.skillDetail.usage.seeSetup")})]})]}),"setup"===g&&(0,t.jsxs)("div",{className:"max-w-[640px]",children:[(0,t.jsx)("h2",{className:"m-0 mb-2 text-lg font-normal text-foreground",children:p("claudeCodePlugins.skillDetail.setup.title")}),b?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"mb-4 rounded-lg border border-warning/30 bg-warning/10 px-4 py-3",children:[(0,t.jsx)("p",{className:"m-0 mb-2 text-[13px] leading-relaxed text-muted-foreground",children:p("claudeCodePlugins.skillDetail.setup.removeFirst")}),(0,t.jsx)("pre",{className:"m-0 bg-transparent font-mono text-[13px] text-foreground",children:"/plugin marketplace remove litellm"})]}),(0,t.jsx)("p",{className:"m-0 mb-3 text-sm leading-relaxed text-muted-foreground",children:(0,t.jsx)(n.f,{i18nKey:"claudeCodePlugins.skillDetail.setup.requiresKey",components:{settings:(0,t.jsx)("code",{className:"rounded bg-muted px-1.5 py-px text-[13px]",children:"~/.claude/settings.json"}),placeholder:(0,t.jsx)("code",{className:"rounded bg-muted px-1.5 py-px text-[13px]",children:u.i})}})})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("p",{className:"m-0 mb-3 text-sm leading-relaxed text-muted-foreground",children:p("claudeCodePlugins.skillDetail.setup.runCommand")}),(0,t.jsxs)("div",{className:"mb-6 overflow-hidden rounded-lg border border-border",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between border-b border-border bg-muted px-4 py-2.5",children:[(0,t.jsx)("span",{className:"text-[13px] font-medium text-foreground",children:p("claudeCodePlugins.skillDetail.runInClaudeCode")}),(0,t.jsxs)("button",{onClick:()=>{let e=window.location.origin;_(`/plugin marketplace add ${e}/claude-code/marketplace.json`,"marketplace-cmd")},className:(0,c.c)("flex cursor-pointer items-center gap-1 border-none bg-transparent p-0 text-xs","marketplace-cmd"===x?"text-success":"text-info"),children:["marketplace-cmd"===x?(0,t.jsx)(a.f,{className:"size-3"}):(0,t.jsx)(r.f,{className:"size-3"}),p("marketplace-cmd"===x?"claudeCodePlugins.skillDetail.copied":"claudeCodePlugins.skillDetail.copy")]})]}),(0,t.jsx)("pre",{className:"m-0 bg-card px-4 py-3.5 font-mono text-[13px] text-foreground",children:`/plugin marketplace add ${window.location.origin}/claude-code/marketplace.json`})]}),(0,t.jsx)("p",{className:"m-0 mb-3 text-sm leading-relaxed text-muted-foreground",children:(0,t.jsx)(n.f,{i18nKey:"claudeCodePlugins.skillDetail.setup.orSettings",components:{settings:(0,t.jsx)("code",{className:"rounded bg-muted px-1.5 py-px text-[13px]",children:"~/.claude/settings.json"})}})})]}),(0,t.jsxs)("div",{className:"overflow-hidden rounded-lg border border-border",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between border-b border-border bg-muted px-4 py-2.5",children:[(0,t.jsx)("span",{className:"text-[13px] font-medium text-foreground",children:"~/.claude/settings.json"}),(0,t.jsxs)("button",{onClick:()=>_(v,"settings"),className:(0,c.c)("flex cursor-pointer items-center gap-1 border-none bg-transparent p-0 text-xs","settings"===x?"text-success":"text-info"),children:["settings"===x?(0,t.jsx)(a.f,{className:"size-3"}):(0,t.jsx)(r.f,{className:"size-3"}),p("settings"===x?"claudeCodePlugins.skillDetail.copied":"claudeCodePlugins.skillDetail.copy")]})]}),(0,t.jsx)("pre",{className:"m-0 bg-card px-4 py-3.5 font-mono text-[13px] text-foreground",children:v})]})]})]})}])},402874,e=>{"use strict";var t=e.i(843476),s=e.i(143488),i=e.i(912089),a=e.i(283713),r=e.i(602869),l=e.i(782066),n=e.i(275144),o=e.i(886400),d=e.i(321836),c=e.i(487486),u=e.i(972518),m=e.i(799647),p=e.i(522016),g=e.i(322831),f=e.i(196631),x=e.i(895335),h=e.i(641141),b=e.i(455880),_=e.i(853295),j=e.i(383862),v=e.i(81920);let N="h-auto max-h-full w-auto max-w-full object-contain";e.s(["f",0,({accessToken:e,isPublicPage:w=!1,sidebarCollapsed:y=!1,onToggleSidebar:k,deploymentHealth:C})=>{let{t:$}=(0,g.f)(),P=(0,r._h)(),{logoUrl:z,logoUrlDark:I}=(0,n.i)(),{data:S}=(0,s.f)(e),D=S?.litellm_version,A=(0,i.f)(),{isControlPlane:L,selectedWorker:E}=(0,a.f)(),O=z||`${P}/get_image`,R=I||z||`${P}/get_image?theme=dark`,M=(0,o.r)(e);return(0,t.jsx)("nav",{className:"sticky top-0 z-chrome border-b border-border bg-card",children:(0,t.jsx)("div",{className:"w-full",children:(0,t.jsxs)("div",{className:"flex h-14 items-center px-4",children:[(0,t.jsxs)("div",{className:"flex shrink-0 items-center",children:[k&&(0,t.jsx)("button",{onClick:k,className:"mr-2 flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",title:$(y?"shell.navbar.expandSidebar":"shell.navbar.collapseSidebar"),children:(0,t.jsx)("span",{className:"text-lg",children:y?(0,t.jsx)(m.f,{className:"size-[18px]"}):(0,t.jsx)(u.f,{className:"size-[18px]"})})}),(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(p.default,{href:(0,l.B)(""),className:"flex items-center",children:(0,t.jsx)("div",{className:"relative",children:(0,t.jsxs)("div",{className:"flex h-10 max-w-48 items-center justify-center overflow-hidden",children:[(0,t.jsx)("img",{src:O,alt:$("shell.navbar.liteLlmBrand"),className:(0,f.c)(N,"dark:hidden")}),(0,t.jsx)("img",{src:R,alt:"","aria-hidden":!0,className:(0,f.c)(N,"hidden dark:block")})]})})}),D&&(0,t.jsxs)("div",{className:"relative",children:[!A&&(0,t.jsx)("span",{className:"absolute -left-2 -top-1 animate-bounce text-lg",style:{animationDuration:"2s"},title:$("shell.account.thanks"),children:"🌑"}),(0,t.jsx)(c.f,{variant:"outline",className:"relative z-raised cursor-pointer text-xs font-medium",children:(0,t.jsxs)("a",{href:"https://docs.litellm.ai/release_notes",target:"_blank",rel:"noopener noreferrer",className:"shrink-0",children:["v",D]})})]})]})]}),!w&&(0,t.jsx)("div",{className:"ml-4 flex shrink-0 items-center border-l border-border pl-4",children:(0,t.jsx)(_.f,{})}),(0,t.jsxs)("div",{className:"ml-auto flex min-w-0 flex-1 items-center justify-end gap-4",children:[L&&null!==E&&(0,t.jsx)("div",{className:"flex shrink-0 items-center",children:(0,t.jsx)(j.f,{onWorkerSwitch:t=>{(0,o.v)(e).finally(()=>{window.location.href=`${(0,d.D)()}?worker=${encodeURIComponent(t)}`})}})}),!w&&(0,t.jsx)("div",{className:"flex shrink-0 items-center border-l border-border pl-4",children:(0,t.jsxs)("div",{className:"flex items-center gap-0.5 rounded-lg bg-muted px-1 py-0 transition-colors hover:bg-accent",children:[(0,t.jsx)(v.f,{compact:!0}),(0,t.jsx)(b.f,{}),(0,t.jsx)("span",{className:"mx-0.5 h-6 w-px shrink-0 bg-border","aria-hidden":!0}),C,(0,t.jsx)(x.f,{accessToken:e}),(0,t.jsx)("span",{className:"mx-0.5 h-6 w-px shrink-0 bg-border","aria-hidden":!0}),(0,t.jsx)(h.f,{onLogout:M})]})})]})]})})})}])},283713,e=>{"use strict";var t=e.i(271645),s=e.i(602869),i=e.i(612256);let a="litellm_selected_worker_id";e.s(["f",0,()=>{let{data:e}=(0,i.f)(),r=e?.is_control_plane??!1,l=e?.workers??[],[n,o]=(0,t.useState)(()=>localStorage.getItem(a));(0,t.useEffect)(()=>{if(!n||0===l.length)return;let e=l.find(e=>e.worker_id===n);e&&(0,s.NZ)(e.url)},[n,l]);let d=l.find(e=>e.worker_id===n)??null,c=(0,t.useCallback)(e=>{let t=l.find(t=>t.worker_id===e);t&&(o(e),localStorage.setItem(a,e),(0,s.NZ)(t.url))},[l]);return{isControlPlane:r,workers:l,selectedWorkerId:n,selectedWorker:d,selectWorker:c,disconnectFromWorker:(0,t.useCallback)(()=>{o(null),localStorage.removeItem(a),(0,s.NZ)(null)},[])}}])},735450,e=>{"use strict";var t=e.i(411382),s=e.i(772325),i=e.i(54105),a=e.i(240192),r=e.i(138620);let l="https://docs.litellm.ai/docs/decisions",n=`${l}#supported-providers`,o=`${l}#self-hosted-laya-and-nimble`,d=new Set(["/v1/decisions","/v1/systemone"]),c=t.z.object({litellm_provider:i.z.string(),mode:i.z.string().nullish(),supported_endpoints:s.z.array(i.z.string()).nullish()}),u="decisions",m=["evaluation",u],p=e=>null!=e&&m.includes(e),g=e=>p(e.mode)||(e.supported_endpoints??[]).some(e=>d.has(e)),f=e=>{let t=a.z.record(i.z.string(),r.z.unknown()).safeParse(e);return t.success?Object.entries(t.data).flatMap(([e,t])=>{let s=c.safeParse(t);return s.success?[[e,s.data]]:[]}):[]},x={decisions:0,"self-hosted":1,"needs-upgrade":2},h=t.z.object({decision_model_providers:s.z.array(i.z.string())}),b=(e,t)=>e.model.length-t.model.length||e.model.localeCompare(t.model),_=(e,t,s)=>({row:e,routeOrder:x[e.route],rankInProvider:s.slice(0,t).filter(t=>t.provider===e.provider).length});e.s(["O",0,l,"d",0,u,"Z",0,n,"L",0,o,"B",0,"playground?tab=system-one","F",0,function(e){let t=f(e),s=t.filter(([,e])=>g(e)),i=new Map([...new Set(s.map(([,e])=>e.litellm_provider))].map(e=>{let s=t.filter(([,t])=>t.litellm_provider===e);return[e,{decisionOnly:s.every(([,e])=>g(e))}]}));return{models:new Set(s.map(([e])=>e)),providers:i}},"W",0,(e,t)=>f(e).filter(([,e])=>g(e)).map(([e,s])=>({model:e,provider:s.litellm_provider,route:t?.has(s.litellm_provider)?"decisions":(s.supported_endpoints??["/v1/decisions"]).includes("/v1/decisions")?null===t?"decisions":"needs-upgrade":"self-hosted"})).toSorted(b).map(_).toSorted((e,t)=>e.routeOrder-t.routeOrder||e.rankInProvider-t.rankInProvider||e.row.provider.localeCompare(t.row.provider)).map(({row:e})=>e),"i",0,e=>p(e)?u:e??void 0,"q",0,e=>e.flatMap(e=>e===u?m:[e]),"m",0,g,"_",0,p,"r",0,(e,t,s)=>void 0!==t&&e.providers.get(t)?.decisionOnly===!0||s.some(t=>e.models.has(t)),"P",0,e=>{let t=h.safeParse(e);return t.success?new Set(t.data.decision_model_providers):null}])},899426,e=>{"use strict";let t=e=>e.trim().toLowerCase();function s(e,s){let i=t(e);if(""===i)return!0;let a=s.filter(e=>"string"==typeof e).map(e=>e.toLowerCase());return!!a.some(e=>e.includes(i))||i.split(/\s+/).every(e=>a.some(t=>t.includes(e)))}e.s(["$",0,function(e,t,i){return e.filter(e=>s(t,i(e)))},"h",0,s,"e",0,function(e,s,i){let a=t(s);if(""===a)return[...e];let r=e=>{let t=i(e).toLowerCase();return 1e3*(t===a)+100*!!t.startsWith(a)+(1e3-t.length)};return[...e].sort((e,t)=>r(t)-r(e))}])}]);