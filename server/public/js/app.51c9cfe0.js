(function(){"use strict";var e={3390:function(e,t,n){var a=n(4206),r=n.n(a);t["Z"]=r().create({baseURL:"/api",headers:{"Content-type":"application/json"}})},7198:function(e,t,n){var a=n(144),r=n(3726),o=n(3102),i=function(){var e=this,t=e._self._c;return t(r.Z,[t("ToggleNav"),t(o.Z,[t("router-view")],1),t("FooterBar")],1)},l=[],s=n(7024),u=n(8984),c=function(){var e=this,t=e._self._c;return t(u.Z,{attrs:{padless:"",app:""}},[t(s.Z,{staticClass:"text-center",attrs:{cols:"12"}},[e._v(" "+e._s((new Date).getFullYear())+" — "),t("strong",[e._v("Vuetify")])])],1)},d=[],f=n(1001),p={},m=(0,f.Z)(p,c,d,!1,null,null,null),h=m.exports,v=n(3625),g=n(5078),b=n(9396),y=n(3381),Z=n(7690),w=n(9088),_=n(7970),P=n(5384),k=n(1667),x=n(9597),C=n(3560),O=n(7316),j=n(2515),S=n(3602),A=function(){var e=this,t=e._self._c;return t("div",[t(O.Z,{attrs:{app:""},on:{transitionend:e.collapseSubItems},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[t(k.Z,[t(x.km,[t(x.V9,{staticClass:"text-h6"},[e._v(" POS v1.0.0 ")]),t(x.oZ,[e._v(" point of sales ")])],1)],1),t(Z.Z),t(_.Z,[e._l(e.nav,(function(n,a){return[n.to?t(k.Z,{key:`${a}-a`,attrs:{to:n.to,link:""}},[t(C.Z,[t(w.Z,[e._v(e._s(n.icon))])],1),t(x.km,[t(x.V9,[e._v(e._s(n.label))])],1)],1):e._e(),n.subItems?t(P.Z,{key:`${a}-b`,attrs:{"prepend-icon":`${n.icon} fa-em`,"append-icon":"fas fa-chevron-down fa-sm"},scopedSlots:e._u([{key:"activator",fn:function(){return[t(x.km,[t(x.V9,[e._v(e._s(n.label))])],1)]},proxy:!0}],null,!0),model:{value:n.active,callback:function(t){e.$set(n,"active",t)},expression:"n.active"}},e._l(n.subItems,(function(n,a){return t(k.Z,{key:a,staticClass:"pl-8",attrs:{to:n.to,link:""}},[t(C.Z,[t(w.Z,{attrs:{small:""}},[e._v(e._s(n.icon))])],1),t(x.km,[t(x.V9,[e._v(e._s(n.label))])],1)],1)})),1):e._e()]}))],2)],1),t(v.Z,{attrs:{app:"",color:"white",flat:""}},[t(g.Z,{on:{click:function(t){e.drawer=!e.drawer}}}),t(S.qW,[e._v(e._s(this.$route.name))]),t(j.Z),t(b.Z,{attrs:{size:"36px"}},[t("img",{attrs:{src:"https://cdn.vuetifyjs.com/images/john.jpg",alt:"John"}})]),t(y.Z,{attrs:{icon:""}},[t(w.Z,[e._v("mdi-export")])],1)],1)],1)},F=[],T=n(2535),N={data:()=>({drawer:null,nav:[]}),async created(){try{const e=await T.Z.getAllMenu();this.nav=e.data.menus}catch(e){console.log(e.message)}},methods:{collapseSubItems(){this.nav.map((e=>e.active=!1))}}},E=N,$=(0,f.Z)(E,A,F,!1,null,null,null),L=$.exports,M={Name:"App",components:{FooterBar:h,ToggleNav:L}},B=M,D=(0,f.Z)(B,i,l,!1,null,null,null),I=D.exports,V=n(8986);a.ZP.use(V.Z);var U=new V.Z({icons:{iconfont:"md"}}),q=n(8345),R=n(5893),W=n(6530),G=n(3559),z=function(){var e=this,t=e._self._c;return t(W.Z,{staticClass:"white lighten-5 mb-6"},[t(R.Z,{staticClass:"d-flex flex-row mb-6",attrs:{color:e.$vuetify.theme.light?"white darken-3":"white lighten-4",flat:"",tile:""}},[t(R.Z,{staticClass:"pa-2",attrs:{outlined:"",tile:"","max-width":"800"}},[t(G.Z,{attrs:{value:e.value,gradient:e.gradient,smooth:e.radius||!1,padding:e.padding,"line-width":e.width,"stroke-linecap":e.lineCap,"gradient-direction":e.gradientDirection,fill:e.fill,type:e.type,"auto-line-width":e.autoLineWidth,"auto-draw":""}})],1),t(j.Z),t(R.Z,{staticClass:"pa-2",attrs:{outlined:"",tile:"","max-width":"800"}},[t(G.Z,{attrs:{fill:e.fill,gradient:e.selectedGradient,"line-width":e.width,padding:e.padding,smooth:e.radius||!1,value:e.value,"auto-draw":""}})],1)],1),t(R.Z,{staticClass:"d-flex flex-row-reverse",attrs:{color:e.$vuetify.theme.light?"white darken-3":"white lighten-4",flat:"",tile:""}},[t(R.Z,{staticClass:"pa-2",attrs:{outlined:"",tile:""}},[e._v(" Flex item ")])],1)],1)},H=[];const J=[["#222"],["#42b3f4"],["red","orange","yellow"],["purple","violet"],["#00c6ff","#F0F","#FF0"],["#f72047","#ffd200","#1feaea"]];var K={data(){return{width:2,radius:10,padding:8,lineCap:"round",selectedGradient:J[4],gradient:J[5],value:[0,2,5,9,5,10,3,5,0,0,1,8,2,9,0],gradientDirection:"top",gradients:J,fill:!1,type:"trend",autoLineWidth:!1}}},Y=K,Q=(0,f.Z)(Y,z,H,!1,null,null,null),X=Q.exports,ee=function(){var e=this,t=e._self._c;return t("div",[t(W.Z,[t("h1",[e._v("404 - Page Not Found")]),t("p",[e._v("This page no longer exists or was moved to another location.")])])],1)},te=[],ne={},ae=(0,f.Z)(ne,ee,te,!1,null,null,null),re=ae.exports;a.ZP.use(q.Z);const oe=[{path:"/",name:"Beranda",component:X},{path:"/about",name:"Tentang",component:()=>Promise.all([n.e(156),n.e(837),n.e(463)]).then(n.bind(n,2994))},{path:"/inventory",name:"Persediaan",component:()=>Promise.all([n.e(156),n.e(837),n.e(485)]).then(n.bind(n,4126))},{path:"/menu",name:"Menu",component:()=>Promise.all([n.e(156),n.e(479)]).then(n.bind(n,1479))},{path:"/customers",component:()=>Promise.all([n.e(580),n.e(469)]).then(n.bind(n,6534)),children:[{path:"",name:"Pelanggan",component:()=>Promise.all([n.e(156),n.e(837),n.e(474)]).then(n.bind(n,8665))},{path:"history",name:"Riwayat Pelanggan",component:()=>Promise.all([n.e(156),n.e(837),n.e(37),n.e(696)]).then(n.bind(n,9443))}]},{path:"/suppliers",component:()=>Promise.all([n.e(580),n.e(592)]).then(n.bind(n,8839)),children:[{path:"",name:"Supplier",component:()=>Promise.all([n.e(156),n.e(837),n.e(697)]).then(n.bind(n,6364))},{path:"history",name:"Riwayat Supplier",component:()=>n.e(995).then(n.bind(n,5995))}]},{path:"/payments",name:"Payment",component:()=>Promise.all([n.e(156),n.e(837),n.e(645)]).then(n.bind(n,8029))},{path:"/currencies",name:"Mata Uang",component:()=>Promise.all([n.e(156),n.e(837),n.e(305)]).then(n.bind(n,5928))},{path:"/uom",name:"Unit Of Measure",component:()=>Promise.all([n.e(156),n.e(837),n.e(669)]).then(n.bind(n,5865))},{path:"/category",name:"Category",component:()=>Promise.all([n.e(156),n.e(837),n.e(727)]).then(n.bind(n,9477))},{path:"/products",name:"Products",component:()=>Promise.all([n.e(156),n.e(837),n.e(329)]).then(n.bind(n,4753))},{path:"/so",component:()=>Promise.all([n.e(580),n.e(950)]).then(n.bind(n,4767)),children:[{path:"",name:"Sales Orders",component:()=>Promise.all([n.e(156),n.e(837),n.e(37),n.e(590)]).then(n.bind(n,3170))},{path:"new",name:"New Order",component:()=>Promise.all([n.e(156),n.e(837),n.e(37),n.e(315)]).then(n.bind(n,4235))},{path:"reports",name:"Laporan",component:()=>Promise.all([n.e(156),n.e(837),n.e(37),n.e(302)]).then(n.bind(n,3300))},{path:":id",name:"EditOrder",props:!0,component:()=>Promise.all([n.e(156),n.e(837),n.e(37),n.e(315)]).then(n.bind(n,4235))}]},{path:"/:catchAll(.*)*",name:"pageNotFound",component:re}],ie=new q.Z({mode:"history",base:"/",routes:oe});var le=ie,se=n(2954);a.ZP.config.productionTip=!1,a.ZP.use(n(2513)),a.ZP.use(se.ZP),new a.ZP({vuetify:U,router:le,render:e=>e(I)}).$mount("#app")},2535:function(e,t,n){var a=n(3390);class r{getAllMenu(){return a.Z.get("/menus")}get(e){return a.Z.get(`/menus/${e}`)}create(e){return a.Z.post("/menus",e)}update(e,t){return a.Z.put(`/menus/${e}`,t)}delete(e){return a.Z["delete"](`/menus/${e}`)}deleteAll(){return a.Z["delete"]("/menus")}findByLabel(e){return a.Z.get(`/menus?label=${e}`)}}t["Z"]=new r}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,o){if(!a){var i=1/0;for(c=0;c<e.length;c++){a=e[c][0],r=e[c][1],o=e[c][2];for(var l=!0,s=0;s<a.length;s++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[s])}))?a.splice(s--,1):(l=!1,o<i&&(i=o));if(l){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[a,r,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{37:"830fcd22",156:"50771271",302:"6b46dca5",305:"4b132949",315:"95b776e0",329:"c5d9063e",463:"59b978a3",469:"79032372",474:"c5127fbd",479:"6ed1c120",485:"cdd9423a",580:"fd7f2693",590:"b9f91b7a",592:"e69a7fa4",645:"ffd2581c",669:"d21fc41c",696:"9a9297c3",697:"20a2eb65",727:"78c03334",837:"4f26b6d0",950:"1f06ca45",995:"cf42999c"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{156:"e7a5f330",302:"f5cd29ba",305:"ab3c2d3d",315:"6f54227d",329:"5c23da6e",463:"44f5d4a3",469:"a438deff",474:"5c23da6e",479:"b162b847",485:"44f5d4a3",590:"74da1dc9",592:"a438deff",645:"ab3c2d3d",669:"80fc65dc",696:"fe8cd4fb",697:"5c23da6e",727:"80fc65dc",950:"a438deff"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="client:";n.l=function(a,r,o,i){if(e[a])e[a].push(r);else{var l,s;if(void 0!==o)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+o){l=d;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+o),l.src=a),e[a]=[r];var f=function(t,n){l.onerror=l.onload=null,clearTimeout(p);var r=e[a];if(delete e[a],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),s&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,a){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var o=function(o){if(r.onerror=r.onload=null,"load"===o.type)n();else{var i=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,r.parentNode.removeChild(r),a(s)}};return r.onerror=r.onload=o,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var r=n[a],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===e||o===t))return r}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){r=i[a],o=r.getAttribute("data-href");if(o===e||o===t)return r}},a=function(a){return new Promise((function(r,o){var i=n.miniCssF(a),l=n.p+i;if(t(i,l))return r();e(a,l,r,o)}))},r={143:0};n.f.miniCss=function(e,t){var n={156:1,302:1,305:1,315:1,329:1,463:1,469:1,474:1,479:1,485:1,590:1,592:1,645:1,669:1,696:1,697:1,727:1,950:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=a(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,a){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else{var o=new Promise((function(n,a){r=e[t]=[n,a]}));a.push(r[2]=o);var i=n.p+n.u(t),l=new Error,s=function(a){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,r[1](l)}};n.l(i,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,o,i=a[0],l=a[1],s=a[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(s)var c=s(n)}for(t&&t(a);u<i.length;u++)o=i[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},a=self["webpackChunkclient"]=self["webpackChunkclient"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(7198)}));a=n.O(a)})();
//# sourceMappingURL=app.51c9cfe0.js.map