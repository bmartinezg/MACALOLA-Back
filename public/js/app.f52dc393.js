(function(e){function n(n){for(var r,o,u=n[0],i=n[1],d=n[2],s=0,f=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&f.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(n);while(f.length)f.shift()();return a.push.apply(a,d||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,o=1;o<t.length;o++){var u=t[o];0!==c[u]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},c={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-117dac0a":"2b5fbe51","chunk-b707d8a0":"0ce727f0","chunk-e349e1ec":"f6a32d28","chunk-2d0b385a":"672c48ed","chunk-2d0c4ffa":"cefd244b","chunk-2d0c89f3":"026a3085","chunk-2d217727":"c122a7be","chunk-2ee7de72":"f74e58d6","chunk-66ce080e":"374ecdb4","chunk-712f2df5":"f3d17e74","chunk-bda6e090":"b4ffcc25"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-b707d8a0":1,"chunk-e349e1ec":1,"chunk-2ee7de72":1,"chunk-66ce080e":1,"chunk-bda6e090":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-117dac0a":"31d6cfe0","chunk-b707d8a0":"b8d3ba09","chunk-e349e1ec":"ba23bc71","chunk-2d0b385a":"31d6cfe0","chunk-2d0c4ffa":"31d6cfe0","chunk-2d0c89f3":"31d6cfe0","chunk-2d217727":"31d6cfe0","chunk-2ee7de72":"5414a528","chunk-66ce080e":"4227a3a3","chunk-712f2df5":"31d6cfe0","chunk-bda6e090":"2a6996df"}[e]+".css",c=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var d=a[u],s=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===r||s===c))return n()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){d=f[u],s=d.getAttribute("data-href");if(s===r||s===c)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var r=n&&n.target&&n.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],l.parentNode.removeChild(l),t(a)},l.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(l)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(n,t){r=c[e]=[n,t]}));n.push(r[2]=a);var d,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var f=new Error;d=function(n){s.onerror=s.onload=null,clearTimeout(l);var t=c[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,t[1](f)}c[e]=void 0}};var l=setTimeout((function(){d({type:"timeout",target:s})}),12e4);s.onerror=s.onload=d,document.head.appendChild(s)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=n,d=d.slice();for(var f=0;f<d.length;f++)n(d[f]);var l=s;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},c=[],a=t("2877"),u={},i=Object(a["a"])(u,o,c,!1,null,"5ce9d4ce",null),d=i.exports,s=t("9483");Object(s["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t("d3b7");var f=t("8c4f");r["default"].use(f["a"]);var l=[{path:"/",name:"Home",component:function(){return t.e("chunk-712f2df5").then(t.bind(null,"bb51"))}},{path:"/administration",name:"admin",component:function(){return t.e("chunk-2d0c4ffa").then(t.bind(null,"3ce9"))},children:[{path:"access",component:function(){return t.e("chunk-66ce080e").then(t.bind(null,"57f2"))}},{path:"",component:function(){return t.e("chunk-2ee7de72").then(t.bind(null,"d577"))},beforeEnter:function(e,n,t){sessionStorage.getItem("adminToken")?t():t({path:"/administration/access"})},children:[{path:"home",name:"adminhome",component:function(){return t.e("chunk-bda6e090").then(t.bind(null,"3c19"))}},{path:"orders",name:"orders",component:function(){return t.e("chunk-2d0c89f3").then(t.bind(null,"5651"))}},{path:"products",name:"products",component:function(){return Promise.all([t.e("chunk-117dac0a"),t.e("chunk-e349e1ec")]).then(t.bind(null,"d416"))}},{path:"product/:ref",name:"product",component:function(){return Promise.all([t.e("chunk-117dac0a"),t.e("chunk-b707d8a0")]).then(t.bind(null,"f70d"))}},{path:"users",name:"users",component:function(){return t.e("chunk-2d217727").then(t.bind(null,"c785"))}},{path:"returns",name:"returns",component:function(){return t.e("chunk-2d0b385a").then(t.bind(null,"2974"))}}]}]},{path:"*",component:function(){return t.e("chunk-712f2df5").then(t.bind(null,"bb51"))}}],h=new f["a"]({mode:"history",base:"/",routes:l}),p=h,m=t("2f62"),g=t("d0c1"),b=t.n(g),k=t("c2ff"),v=t.n(k),y=t("b5ce"),w=t.n(y);r["default"].use(m["a"]);var S=new m["a"].Store({state:{},mutations:{},actions:{},modules:{Category:b.a,Login:w.a,Product:v.a}}),T=(t("c1c3"),t("5f5b")),E=t("1dce"),O=t.n(E);t("15f5"),t("7051");r["default"].use(O.a),r["default"].use(T["a"]),r["default"].config.productionTip=!1,new r["default"]({router:p,store:S,render:function(e){return e(d)}}).$mount("#app")},b5ce:function(e,n){var t={},r={},o={},c={};e.exports={getters:t,state:r,mutations:o,actions:c}},c1c3:function(e,n,t){},c2ff:function(e,n,t){t("96cf");var r=t("c973"),o=t("bc3a").default,c={producst:function(){return a.productsDB},product:function(){return a.productDB}},a={productsDB:[],productDB:{}},u={SETALLPRODUCTS:function(e,n){e.productsDB=n.data.productDB},SETPRODUCT:function(e,n){e.productDB=n.data.productDB[0]}},i={getAllProducts:function(e){return r(regeneratorRuntime.mark((function n(){var t,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t=e.commit,n.next=3,o.get("http://localhost:3000/product",{headers:{authorization:sessionStorage.getItem("adminToken")}});case 3:r=n.sent,t("SETALLPRODUCTS",r);case 5:case"end":return n.stop()}}),n)})))()},getSingleProduct:function(e,n){return r(regeneratorRuntime.mark((function t(){var r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,o.get("http://localhost:3000/product/".concat(n),{headers:{authorization:sessionStorage.getItem("adminToken")}});case 3:c=t.sent,r("SETPRODUCT",c);case 5:case"end":return t.stop()}}),t)})))()}};e.exports={getters:c,state:a,mutations:u,actions:i}},d0c1:function(e,n,t){t("96cf");var r=t("c973"),o=t("bc3a").default,c={categories:function(){return a.categoryDB}},a={categoryDB:[]},u={SETCATEGORIES:function(e,n){e.categoryDB=n.data.categoryDB}},i={getCategories:function(e){return r(regeneratorRuntime.mark((function n(){var t,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t=e.commit,n.next=3,o.get("http://localhost:3000/category");case 3:r=n.sent,t("SETCATEGORIES",r);case 5:case"end":return n.stop()}}),n)})))()}};e.exports={getters:c,state:a,mutations:u,actions:i}}});
//# sourceMappingURL=app.f52dc393.js.map