if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let n=Promise.resolve();return i[e]||(n=new Promise((async n=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=n}else importScripts(e),n()}))),n.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},n=(n,i)=>{Promise.all(n.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(n)};self.define=(n,r,s)=>{i[n]||(i[n]=Promise.resolve().then((()=>{let i={};const o={uri:location.origin+n.slice(1)};return Promise.all(r.map((n=>{switch(n){case"exports":return i;case"module":return o;default:return e(n)}}))).then((e=>{const n=s(...e);return i.default||(i.default=n),i}))})))}}define("./service-worker.js",["./workbox-90faa4c2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"dicer"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/691.05c2f08f.css",revision:null},{url:"css/app.31d6cfe0.css",revision:null},{url:"css/vendor.68cda035.css",revision:null},{url:"favicon.ico",revision:"0184b1e60d88572377f5e3e557e21177"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.9391e6e2.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.ddd11dab.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.877b9231.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.0344cc3c.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.b555d228.woff",revision:null},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.9b78ea3b.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.bbf3b920.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.8e0a67eb.woff2",revision:null},{url:"icons/apple-icon-120x120.png",revision:"9e0b809cc0e00ed375a72d2de0da0025"},{url:"icons/apple-icon-152x152.png",revision:"810f2d7f1653819b48cea2f477387241"},{url:"icons/apple-icon-167x167.png",revision:"d2afb174111fee92cb1ce4c119e3a2c7"},{url:"icons/apple-icon-180x180.png",revision:"8b08c494cc70ec49bff4c3200be1f7fd"},{url:"icons/favicon-128x128.png",revision:"b33150fc0a4239e77c070dbd66f66478"},{url:"icons/favicon-16x16.png",revision:"f68a49f5ed19f6e2a81608b3e0d992de"},{url:"icons/favicon-32x32.png",revision:"85bf789ee0b823d86180771c08c366cf"},{url:"icons/favicon-96x96.png",revision:"198e0dd85c47d76925b7b42381d103de"},{url:"icons/icon-128x128.png",revision:"406fe1f53558d232b8b4ffd2b23ad1d6"},{url:"icons/icon-192x192.png",revision:"805a45300e16062c9fc6e89464c5639e"},{url:"icons/icon-256x256.png",revision:"d1a51b30d9c1fc0fe488f5a5ecceac8f"},{url:"icons/icon-384x384.png",revision:"56a3a18e6f2298b4ab0f90b49cbb68f2"},{url:"icons/icon-512x512.png",revision:"4cfa42e7c0657d70756676e6880cb899"},{url:"icons/ms-icon-144x144.png",revision:"bb45623a448f3760fab6152f94aeba02"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"index.html",revision:"ad71c576b69990b1290049d8bc494cb2"},{url:"js/434.d0e38f6d.js",revision:null},{url:"js/691.00f35b03.js",revision:null},{url:"js/99.a0f67a4b.js",revision:null},{url:"js/app.c5202836.js",revision:null},{url:"js/vendor.f984f0b3.js",revision:null},{url:"manifest.json",revision:"cd48c42b2bfd98b98c05ccfaa4827650"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
