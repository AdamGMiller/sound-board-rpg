if(!self.define){let e,r={};const i=(i,n)=>(i=new URL(i+".js",n).href,r[i]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=r,document.head.appendChild(e)}else e=i,importScripts(i),r()})).then((()=>{let e=r[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(r[o])return;let d={};const t=e=>i(e,o),l={module:{uri:o},exports:d,require:t};r[o]=Promise.all(n.map((e=>l[e]||t(e)))).then((e=>(s(...e),d)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/Gallery-23c1df2c.js",revision:null},{url:"assets/index-0b9a9116.js",revision:null},{url:"assets/index-aa44b84d.css",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"index.html",revision:"b3bcba8d68387691c5ab2746430a9888"},{url:"favicon.png",revision:"ddc7574953929ad7d634cff3303ba0e3"},{url:"robots.txt",revision:"cd9cd94aaa699e0a16e692b6bb16f672"},{url:"apple-touch-icon.png",revision:"1e26578dc5a905b1e46b51293fc1e2ca"},{url:"android-chrome-192x192.png",revision:"8db2e61a3b6ad329952434814b8823bb"},{url:"android-chrome-512x512.png",revision:"8e269a916c366a02d2e135176c8a3e6a"},{url:"icons/arrow-left.svg",revision:"5344bb894484f478b2ad912ef0440436"},{url:"fonts/Inter-Bold.woff2",revision:"444a7284663a3bc886683eb81450b294"},{url:"fonts/Inter-Medium.woff2",revision:"75db5319e7e87c587019a5df08d7272c"},{url:"fonts/Inter-Regular.woff2",revision:"dc131113894217b5031000575d9de002"},{url:"manifest.webmanifest",revision:"8e6db72fd2620f505878663a2c98994b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
