(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0b22496b":"80990710","chunk-2d0e95df":"5e6a4302","chunk-396465ab":"6d9422e8","chunk-5929c351":"3a0c24e5","chunk-c05c1fc4":"01c7c900","chunk-2d0d7fc5":"428a1aa1","chunk-71ce888e":"392de6ee","chunk-c4b35b0a":"1772ee40"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-396465ab":1,"chunk-5929c351":1,"chunk-c05c1fc4":1,"chunk-71ce888e":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0b22496b":"31d6cfe0","chunk-2d0e95df":"31d6cfe0","chunk-396465ab":"a8544810","chunk-5929c351":"938c653e","chunk-c05c1fc4":"e7049cf8","chunk-2d0d7fc5":"31d6cfe0","chunk-71ce888e":"baaaf007","chunk-c4b35b0a":"31d6cfe0"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],f.parentNode.removeChild(f),n(c)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"position-fixed d-flex justify-content-center flex-wrap w-100 pt-3",staticStyle:{"z-index":"999"}},e._l(e.alerts,(function(t,r){return n("alert",{key:r,attrs:{type:t.type||"danger",dismiss:t.dismiss,close:t.close}},[e._v(e._s(t.text)+" ")])})),1),n("router-view",{on:{alert:function(t){return e.trigAlert(t)}}})],1)},o=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"alert alert-dismissible fade show col-12 col-md-10 col-xl-8",class:["alert-"+e.type],attrs:{role:"alert"}},[e._t("default"),n("button",{directives:[{name:"show",rawName:"v-show",value:e.close,expression:"close"}],ref:"btn",staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[n("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])],2)},u=[],i=(n("c975"),n("a9e3"),{name:"alert",props:{dismiss:{type:Number,default:5,validator:function(e){return e>=0}},type:{type:String,default:"danger",validator:function(e){return-1!==["primary","secondary","success","danger","warning","info","light","dark"].indexOf(e)}},close:{type:Boolean,default:!0}},mounted:function(){var e=this;this.dismiss&&setTimeout((function(){e.$refs.btn.click()}),1e3*this.dismiss)}}),s=i,l=n("2877"),d=Object(l["a"])(s,c,u,!1,null,"0a7b8a11",null),f=d.exports,p={name:"App",data:function(){return{alerts:[]}},mounted:function(){var e=this;this.$on("alert",(function(t){e.trigAlert(t)}))},methods:{trigAlert:function(e){console.debug(e),"string"===typeof e&&(e={text:e}),this.alerts.push(e)}},components:{alert:f}},h=p,m=(n("034f"),Object(l["a"])(h,a,o,!1,null,null,null)),v=m.exports,b=(n("d3b7"),n("8c4f"));r["a"].use(b["a"]);var g=b["a"].prototype.push;b["a"].prototype.push=function(e){return g.call(this,e).catch((function(e){return e}))};var y=[{path:"/",name:"Home",component:function(){return n.e("chunk-c4b35b0a").then(n.bind(null,"bb51"))}},{path:"/live",name:"live",component:function(){return n.e("chunk-5929c351").then(n.bind(null,"c638"))}},{path:"/login",name:"login",component:function(){return n.e("chunk-396465ab").then(n.bind(null,"a55b"))}},{path:"/video/:videoId",name:"video",component:function(){return Promise.all([n.e("chunk-c05c1fc4"),n.e("chunk-71ce888e")]).then(n.bind(null,"81a8"))},props:!0},{path:"/user",name:"user",component:function(){return n.e("chunk-0b22496b").then(n.bind(null,"1511"))}},{path:"/test",name:"test",component:function(){return Promise.all([n.e("chunk-c05c1fc4"),n.e("chunk-2d0d7fc5")]).then(n.bind(null,"78c1"))}},{path:"*",name:"404",component:function(){return n.e("chunk-2d0e95df").then(n.bind(null,"8cdb"))}}],k=new b["a"]({routes:y}),w=k,x=n("2f62"),_=(n("96cf"),n("1da1")),O=n("7c15"),j={namespaced:!0,state:function(){return{logged:!1,username:"",flag:null}},mutations:{update:function(e,t){for(var n in t)e[n]=t[n]}},actions:{updateUserInfo:function(e){var t=arguments;return Object(_["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=t.length>1&&void 0!==t[1]&&t[1],r||!e.state.logged){n.next=3;break}return n.abrupt("return");case 3:return n.prev=3,n.next=6,O["a"].user.get();case 6:a=n.sent,e.commit("update",{logged:!0,username:a.data.uname,flag:a.data.flag}),n.next=13;break;case 10:n.prev=10,n.t0=n["catch"](3),console.debug(n.t0);case 13:case"end":return n.stop()}}),n,null,[[3,10]])})))()}}},S={namespaced:!0,state:function(){return{videoList:[]}},mutations:{update:function(e,t){for(var n in t)e[n]=t[n]}},actions:{updateVideoList:function(e){var t=arguments;return Object(_["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=t.length>1&&void 0!==t[1]&&t[1],r||!e.state.videoList.length){n.next=3;break}return n.abrupt("return");case 3:return n.prev=3,n.next=6,O["a"].video.findVideoAll();case 6:a=n.sent,e.commit("update",{videoList:a.data}),n.next=13;break;case 10:n.prev=10,n.t0=n["catch"](3),console.debug(n.t0);case 13:case"end":return n.stop()}}),n,null,[[3,10]])})))()}}};r["a"].use(x["a"]);var C=new x["a"].Store({state:{},mutations:{},actions:{},modules:{user:j,video:S}});n("4989"),n("ab8b"),n("15f5"),n("fda2"),n("db28");r["a"].config.productionTip=!1,new r["a"]({router:w,store:C,render:function(e){return e(v)}}).$mount("#app")},"7c15":function(e,t,n){"use strict";n("d3b7");var r={baseURL:"/meclass-0.0.1-SNAPSHOT",CORS:!1};function a(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return new Promise((function(o,c){var u=new XMLHttpRequest;u.open(t,e),r.CORS&&(u.withCredentials=!0),u.onload=function(){if(200===u.status)if("application/json"===u.getResponseHeader("Content-Type")){var e=JSON.parse(u.response);0===e.code?o(e):c(e)}else c(u.response);else c(u.responseText)},u.onerror=u.onabort=function(){c(u.responseText)},a&&(u.upload.onprogress=a),n instanceof FormData?u.send(n):(u.setRequestHeader("Content-Type","application/json"),u.send(JSON.stringify(n)))}))}var o={get:function(e,t){return t in e?e[t]:("_url"in e?e._url+="/".concat(t):e._url="/".concat(t),new Proxy(e,o))},apply:function(e,t,n){var o=r.baseURL+e._url;return e._url="",a(o,"post",n[0],n[1])}};t["a"]=new Proxy((function(){}),o)},"85ec":function(e,t,n){}});