if(!self.define){let e,t={};const s=(s,i)=>(s=new URL(s+".js",i).href,t[s]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=t,document.head.appendChild(e)}else e=s,importScripts(s),t()})).then((()=>{let e=t[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(t[r])return;let n={};const c=e=>s(e,r),l={module:{uri:r},exports:n,require:c};t[r]=Promise.all(i.map((e=>l[e]||c(e)))).then((e=>(o(...e),n)))}}define(["./workbox-2671632a"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"mi estilo.css",revision:"c8a503ccb4b2fbc0b28826f1285ce6aa"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
