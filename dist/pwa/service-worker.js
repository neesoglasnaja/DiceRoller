if(!self.define){const n=n=>{"require"!==n&&(n+=".js");let e=Promise.resolve();return i[n]||(e=new Promise((async e=>{if("document"in self){const i=document.createElement("script");i.src=n,document.head.appendChild(i),i.onload=e}else importScripts(n),e()}))),e.then((()=>{if(!i[n])throw new Error(`Module ${n} didn’t register its module`);return i[n]}))},e=(e,i)=>{Promise.all(e.map(n)).then((n=>i(1===n.length?n[0]:n)))},i={require:Promise.resolve(e)};self.define=(e,r,s)=>{i[e]||(i[e]=Promise.resolve().then((()=>{let i={};const o={uri:location.origin+e.slice(1)};return Promise.all(r.map((e=>{switch(e){case"exports":return i;case"module":return o;default:return n(e)}}))).then((n=>{const e=s(...n);return i.default||(i.default=e),i}))})))}}define("./service-worker.js",["./workbox-90faa4c2"],(function(n){"use strict";n.setCacheNameDetails({prefix:"dicer"}),self.addEventListener("message",(n=>{n.data&&"SKIP_WAITING"===n.data.type&&self.skipWaiting()})),n.precacheAndRoute([{url:"css/669.05c2f08f.css",revision:null},{url:"css/app.31d6cfe0.css",revision:null},{url:"css/vendor.68cda035.css",revision:null},{url:"favicon.ico",revision:"f4facfeaed834544d622544acfbb7722"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.9391e6e2.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.ddd11dab.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.877b9231.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.0344cc3c.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.b555d228.woff",revision:null},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.9b78ea3b.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.bbf3b920.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.8e0a67eb.woff2",revision:null},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/favicon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/favicon-16x16.png",revision:"e4b046d41e08e6fa06626d6410ab381d"},{url:"icons/favicon-32x32.png",revision:"410858b01fa6d3d66b7bf21447c5f1fc"},{url:"icons/favicon-96x96.png",revision:"db2bde7f824fb4057ffd1c42f6ed756e"},{url:"icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"index.html",revision:"46511cfbf71234aac1b8b0bed58278d2"},{url:"js/434.d0e38f6d.js",revision:null},{url:"js/669.93ab86be.js",revision:null},{url:"js/99.a0f67a4b.js",revision:null},{url:"js/app.7330b1dc.js",revision:null},{url:"js/vendor.f984f0b3.js",revision:null},{url:"manifest.json",revision:"0639b7c6701a21a16382385de9427c6a"}],{}),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
