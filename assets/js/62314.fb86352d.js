"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[62314],{39933:(e,l,o)=>{o.r(l),o.d(l,{default:()=>j});var t=o(6254),s=o(55533);const n={class:"supported-devices"},i={class:"filters"},r={key:"no-results"};var a=o(28432),d=o(40698),u=o(41038),c=o(25598),v=o(38627);const p={class:"device"},m={class:"thumb"},f={class:"top-right"},h={key:0},b={key:0,class:"is-new"},w={class:"desc"},k={class:"model"};var g=o(2951),y=o(97185);const F={name:"Device",components:{QTooltip:g.A,QIcon:y.A},props:["device"],emits:["vendor-click"],setup(e){const l=(0,c.KR)(e.device.link.substr(2)),o=(0,c.KR)(!1);return(0,t.wB)(e.device,(e=>{o.value=new Date(e.addedAt)>Date.now()-2592e6,l.value=e.link.substr(2)}),{immediate:!0}),{isNew:o,link:l}}};var V=o(35459);const C=(0,V.A)(F,[["render",function(e,l,o,s,n,i){const r=(0,t.g2)("router-link"),a=(0,t.g2)("q-tooltip"),d=(0,t.g2)("q-icon");return(0,t.uX)(),(0,t.CE)("div",p,[(0,t.bF)(r,{class:"title",to:s.link},{default:(0,t.k6)((()=>[(0,t.eW)((0,v.v_)(o.device.description),1)])),_:1},8,["to"]),(0,t.Lk)("div",m,[(0,t.Lk)("div",f,[(0,t.Lk)("div",null,[(0,t.Lk)("div",{class:"vendor",onClick:l[0]||(l[0]=l=>e.$emit("vendor-click",o.device.vendor))},[(0,t.eW)((0,v.v_)(o.device.vendor),1),(0,t.bF)(a,{self:"center end"},{default:(0,t.k6)((()=>[o.device.isWhiteLabel?((0,t.uX)(),(0,t.CE)("span",h,"White-Label Device -")):(0,t.Q3)("",!0),(0,t.eW)(" Filter by "+(0,v.v_)(o.device.vendor),1)])),_:1}),o.device.isWhiteLabel?((0,t.uX)(),(0,t.Wv)(d,{key:0,name:"more"})):(0,t.Q3)("",!0)])])]),s.isNew?((0,t.uX)(),(0,t.CE)("div",b,[l[1]||(l[1]=(0,t.eW)("new")),(0,t.bF)(a,{self:"center start"},{default:(0,t.k6)((()=>[(0,t.eW)("Added at "+(0,v.v_)(new Date(o.device.addedAt).toLocaleString()),1)])),_:1})])):(0,t.Q3)("",!0),(0,t.bF)(r,{class:"device-img",to:s.link,style:(0,v.Tr)({backgroundImage:"url("+o.device.image+")"})},null,8,["to","style"])]),(0,t.Lk)("div",w,[(0,t.Lk)("div",k,(0,v.v_)(o.device.model),1),(0,t.eW)("- "+(0,v.v_)(o.device.exposes.join(", ")),1)])])}]]),A={class:"device-filters"},E={class:"vendor-filter"},I={class:"exposes-filter"},L={class:"search-filter"};var R=o(80639),S=o(25146),x=o(43738),K=o(79960);const _=(0,t.pM)({name:"multi-select",components:{QSelect:K.A,QItem:S.A,QItemSection:x.A},props:["label","options"],inheritAttrs:!0,setup(e,{emit:l,attrs:o}){const s=(0,c.KR)(null),n=(0,c.KR)(e.options);return((0,c.i9)(e.options)||(0,c.g8)(e.options))&&(0,t.wB)(e.options,(e=>{l("update:modelValue",o.modelValue.value.filter((l=>e.includes(l))))})),{el:s,hidePopup:()=>{s.value.hidePopup()},clearSearch(e){setTimeout((()=>{e.$el.querySelector("input").value=""}),10)},filteredOptions:n,filterFn(l,o){o((()=>{const o=l.toLowerCase();n.value=e.options.filter((e=>e.toLowerCase().includes(o)))}))}}}}),W=(0,V.A)(_,[["render",function(e,l,o,s,n,i){const r=(0,t.g2)("q-item-section"),a=(0,t.g2)("q-item"),d=(0,t.g2)("q-select");return(0,t.uX)(),(0,t.Wv)(d,{label:e.label,filled:"",clearable:"","use-chips":"","use-input":"","input-debounce":"0",options:e.filteredOptions,onFilter:e.filterFn,multiple:"","options-dense":"",onPopupHide:l[0]||(l[0]=l=>e.clearSearch(this)),ref:"el","onUpdate:modelValue":e.hidePopup},{"no-option":(0,t.k6)((()=>[(0,t.bF)(a,null,{default:(0,t.k6)((()=>[(0,t.bF)(r,{class:"text-grey"},{default:(0,t.k6)((()=>l[1]||(l[1]=[(0,t.eW)("No results")]))),_:1})])),_:1})])),_:1},8,["label","options","onFilter","onUpdate:modelValue"])}]]),B=window.ZIGBEE2MQTT_SUPPORTED_DEVICES,T=new Set,Q=new Set;B.forEach((({exposes:e,vendor:l})=>{Q.add(l),e.forEach((e=>T.add(e)))}));const q=(e,l)=>e.localeCompare(l,void 0,{sensitivity:"base"}),U=B,X=Array.from(Q).sort(q),D=Array.from(T).sort(q),P={arrayKeys:[],parseHash(){const e=location.hash.substr(1).split("&").map((e=>e.split("="))).map((([e,l])=>this.arrayKeys.includes(e)?[e,l.split(",").map((e=>decodeURIComponent(e)))]:[e,decodeURIComponent(l)])).filter((([e,l])=>e.length>0&&l.length>0));return Object.fromEntries(e)},updateHash(e){const l=this.parseHash();Object.entries(e).forEach((([e,o])=>{l[e]=o}));let o="#";Object.entries(l).forEach((([e,l])=>{if(null!=l&&""!==l)if(this.arrayKeys.includes(e)){const t=l.map((e=>encodeURIComponent(e))).join(",");o+=`${e}=${t}&`}else o+=`${e}=${encodeURIComponent(l)}&`})),location.hash=o.substr(0,o.length-1)}};P.arrayKeys.push("v"),P.arrayKeys.push("e");const H=(0,t.pM)({name:"filters",components:{QInput:R.A,QTooltip:g.A,QIcon:y.A,MultiSelect:W},props:["modelValue"],setup(e,{emit:l}){const o=P.parseHash(),s=(0,c.KR)(o.e||null),n=(0,c.KR)(o.v||null),i=(0,c.KR)(o.s||null),r=e=>()=>{Array.isArray(e.value)&&0===e.value.length&&(e.value=null)};(0,t.wB)((()=>e.modelValue),(e=>{if(!e)return;const{exposes:l,vendors:o,search:t}=e;l&&(s.value=l),o&&(n.value=o),t&&(i.value=t)}));const a=()=>{P.updateHash({e:s.value,v:n.value,s:i.value}),s.value||n.value||i.value?l("update:modelValue",{exposes:s.value,vendors:n.value,search:i.value}):l("update:modelValue",null)};return a(),(0,t.wB)(s,r(s)),(0,t.wB)(n,r(n)),(0,t.wB)(s,a),(0,t.wB)(n,a),(0,t.wB)(i,a),{exposes:D,vendors:X,exposesFilter:s,vendorFilter:n,searchFilter:i}}}),O=(0,V.A)(H,[["render",function(e,l,o,s,n,i){const r=(0,t.g2)("multi-select"),a=(0,t.g2)("q-icon"),d=(0,t.g2)("q-tooltip"),u=(0,t.g2)("q-input");return(0,t.uX)(),(0,t.CE)("div",A,[(0,t.Lk)("div",E,[(0,t.bF)(r,{label:"Vendor",options:e.vendors,modelValue:e.vendorFilter,"onUpdate:modelValue":l[0]||(l[0]=l=>e.vendorFilter=l)},null,8,["options","modelValue"])]),(0,t.Lk)("div",I,[(0,t.bF)(r,{label:"Exposes",options:e.exposes,modelValue:e.exposesFilter,"onUpdate:modelValue":l[1]||(l[1]=l=>e.exposesFilter=l)},null,8,["options","modelValue"])]),(0,t.Lk)("div",L,[(0,t.bF)(u,{modelValue:e.searchFilter,"onUpdate:modelValue":l[2]||(l[2]=l=>e.searchFilter=l),filled:"",debounce:500,type:"search",placeholder:"Search",label:"Search",clearable:""},{append:(0,t.k6)((()=>[(0,t.bF)(a,{name:"info"}),(0,t.bF)(d,{offset:[0,15],self:"bottom middle"},{default:(0,t.k6)((()=>l[3]||(l[3]=[(0,t.eW)("RegEx support. E.g you can use"),(0,t.Lk)("code",null," (wall|switch)",-1),(0,t.eW)(" to search for wall OR switch.")]))),_:1})])),_:1},8,["modelValue"])])])}]]);const N={name:"SupportedDevices",components:{InfiniteScroll:{name:"InfiniteScroll",props:{debounce:{default:350,type:Number},offset:{default:500,type:Number}},emits:["load"],setup(e,{slots:l,emit:o}){const s=(0,c.KR)(null),n=function(e,l=300){let o,t=!1;return(...s)=>{o?t=!0:(e.apply(this,s),o=setTimeout((()=>{o=void 0,t&&e.apply(this,s),t=!1}),l))}}((()=>{s.value&&s.value.getBoundingClientRect().bottom-window.innerHeight<e.offset&&o("load")}),e.debounce);return(0,t.sV)((()=>{window.addEventListener("scroll",n)})),(0,t.hi)((()=>{window.removeEventListener("scroll",n)})),()=>(0,t.h)("div",{class:"q-infinite-scroll",ref:s},l.default())}},Filters:O,Device:C},setup(){const e=(0,t.WQ)(a.Wz);(0,t.wB)(e,(e=>d.A.set(e)),{immediate:!0});const l=(0,c.KR)(null),o=(0,c.KR)(u.A.getItem("loadIndex")||1),s=(0,c.KR)([]),n=(0,c.KR)([]);return(0,t.wB)(s,(()=>{n.value=s.value.slice(0,20),o.value=1})),(0,t.wB)(o,(e=>{n.value=s.value.slice(0,20*e)})),function(e,l){(0,t.wB)(e,(()=>{if(!e.value)return void(l.value=U);const{exposes:o,vendors:t,search:s}=e.value;let n=!1;if(s)try{n=new RegExp(s,"i")}catch(e){}const i=U.filter((e=>!(o&&!o.every((l=>e.exposes.includes(l)))||t&&!t.includes(e.vendor)||n&&!["model","vendor","description"].some((l=>n.test(e[l]))))));l.value=(e=>e.sort(((e,l)=>{const o=q(e.vendor,l.vendor);return 0===o?q(e.model,l.model):o})))(i)}),{immediate:!0})}(l,s),(0,t.sV)((()=>{const e=u.A.getItem("zigbee2mqtt-devices-overview")||{};e.loadIndex&&(o.value=e.loadIndex),e.scrollTop&&setTimeout((()=>{window.scrollTo(null,e.scrollTop)}))})),{currentFilters:l,devicesToShow:n,loadItemsByScroll:()=>{20*o.value>=s.value.length||o.value++},storePosition:()=>{u.A.set("zigbee2mqtt-devices-overview",{loadIndex:o.value,scrollTop:window.scrollY})},onVendorClick:e=>{l.value?l.value.vendors?l.value.vendors.includes(e)||l.value.vendors.push(e):l.value.vendors=[e]:l.value={vendors:[e]}}}}},$=(0,V.A)(N,[["render",function(e,l,o,a,d,u){const c=(0,t.g2)("filters"),v=(0,t.g2)("device"),p=(0,t.g2)("infinite-scroll");return(0,t.uX)(),(0,t.CE)("div",n,[(0,t.Lk)("div",i,[(0,t.bF)(c,{modelValue:a.currentFilters,"onUpdate:modelValue":l[0]||(l[0]=e=>a.currentFilters=e)},null,8,["modelValue"])]),(0,t.bF)(p,{onLoad:a.loadItemsByScroll},{default:(0,t.k6)((()=>[(0,t.bF)(s.F,{class:"devices-list",tag:"div",name:"device"},{default:(0,t.k6)((()=>[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(a.devicesToShow,(e=>((0,t.uX)(),(0,t.Wv)(v,{key:e.vendor+e.model,device:e,onClick:a.storePosition,onVendorClick:a.onVendorClick},null,8,["device","onClick","onVendorClick"])))),128)),0===a.devicesToShow.length?((0,t.uX)(),(0,t.CE)("p",r,"No devices found.")):(0,t.Q3)("",!0)])),_:1})])),_:1},8,["onLoad"])])}]]),j=$}}]);