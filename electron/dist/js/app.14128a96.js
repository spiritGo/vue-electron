(function(e){function t(t){for(var r,i,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0b68f8":"04debc28"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e);var u=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"253f":function(e,t,n){"use strict";var r=n("b0c5"),a=n.n(r);a.a},"3b5f":function(e,t,n){"use strict";var r=n("4ce9"),a=n.n(r);a.a},"4ce9":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i=n("2877"),c={},s=Object(i["a"])(c,a,o,!1,null,null,null),u=s.exports,l=(n("d3b7"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("sidebar"),n("navbar"),n("div",{staticClass:"main"},[n("router-view")],1)],1)},d=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sidebar"})},b=[],v={},m=v,h=(n("3b5f"),Object(i["a"])(m,p,b,!1,null,"368d3009",null)),w=h.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar"},[e._m(0),n("el-row",{attrs:{type:"flex"}},[n("div",{staticClass:"menu"},e._l(e.menu,(function(t,r){return n("span",{key:r,staticClass:"menu-item",class:e.tabIndex==r?"on":"",attrs:{"data-index":r},on:{click:e.tabClick}},[e._v(" "+e._s(t)+" ")])})),0),n("div",{staticClass:"title-wrap"},[n("span",{staticClass:"title"},[e._v("标题")])]),n("div",{staticClass:"op"},[n("i",{staticClass:"el-icon-minus",attrs:{"data-op":"window-min"},on:{click:e.onOperation}}),n("i",{staticClass:"el-icon-full-screen",attrs:{"data-op":"window-max"},on:{click:e.onOperation}}),n("i",{staticClass:"el-icon-close",attrs:{"data-op":"window-close"},on:{click:e.onOperation}})])])],1)},y=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"icon-wrap"},[r("img",{staticClass:"icon",attrs:{src:n("99dd"),alt:"icon"}})])}],x=n("c383"),_=n.n(x),O={data:function(){return{menu:["File","Edit","Selection","View","Go","Debug","Terminal","Help"],tabIndex:0}},methods:{tabClick:function(e){this.tabIndex=e.target.dataset.index},onOperation:function(e){var t=e.target.dataset.op;if(window.electron)window.electron.ipcRenderer.send(t);else if("window-max"==t){if(!_.a.isEnabled)return this.$message({message:"该设备暂不支持全屏",type:"warning"}),!1;_.a.toggle()}}}},C=O,j=(n("d48c"),Object(i["a"])(C,g,y,!1,null,"75c4be42",null)),k=j.exports,E={components:{Sidebar:w,Navbar:k}},P=E,S=(n("253f"),Object(i["a"])(P,f,d,!1,null,"173779c9",null)),$=S.exports;r["default"].use(l["a"]);var T=[{path:"/",name:"home",component:$,children:[{path:"/",name:"index",component:function(){return n.e("chunk-2d0b68f8").then(n.bind(null,"1e4b"))}}]}],M=new l["a"]({mode:"hash",base:"",routes:T}),I=M,J=n("2f62");r["default"].use(J["a"]);var L=new J["a"].Store({state:{},mutations:{},actions:{},modules:{}}),N=n("b024"),q=n("2ca7"),A=n.n(q);n("46c6"),n("adcf");r["default"].config.productionTip=!1,r["default"].prototype.$conf=N,r["default"].use(A.a),new r["default"]({router:I,store:L,render:function(e){return e(u)}}).$mount("#app")},"99dd":function(e,t,n){e.exports=n.p+"img/favicon.fff84f43.png"},ab8c:function(e,t,n){},adcf:function(e,t,n){},b024:function(e){e.exports=JSON.parse("{}")},b0c5:function(e,t,n){},d48c:function(e,t,n){"use strict";var r=n("ab8c"),a=n.n(r);a.a}});
//# sourceMappingURL=app.14128a96.js.map