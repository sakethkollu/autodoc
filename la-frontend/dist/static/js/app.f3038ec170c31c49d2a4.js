webpackJsonp([1],{0:function(n,t){},101:function(n,t,e){"use strict";var s=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"messagesView"},[e("van-col",{attrs:{span:"0"}},[e("p",[n._v("messages")]),n._v(" "),e("van-list",{attrs:{finished:n.finished},model:{value:n.loading,callback:function(t){n.loading=t},expression:"loading"}},n._l(n.list,function(n){return e("van-cell",{key:n,attrs:{title:"<"+n.timestamp+"> "+n.text+" "+n.tags}})}))],1)],1)},a=[],i={render:s,staticRenderFns:a};t.a=i},102:function(n,t,e){"use strict";function s(n){e(103)}var a=e(48),i=e(104),o=e(5),c=s,l=o(a.a,i.a,!1,c,null,null);t.a=l.exports},103:function(n,t){},104:function(n,t,e){"use strict";var s=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"todo"},[e("van-list",{attrs:{finished:n.finished},on:{load:n.onLoad},model:{value:n.loading,callback:function(t){n.loading=t},expression:"loading"}},n._l(n.list,function(n,t){return e("van-cell",{key:n,attrs:{title:n+""}})}))],1)},a=[],i={render:s,staticRenderFns:a};t.a=i},105:function(n,t,e){"use strict";function s(n){e(106)}var a=e(49),i=e(107),o=e(5),c=s,l=o(a.a,i.a,!1,c,null,null);t.a=l.exports},106:function(n,t){},107:function(n,t,e){"use strict";var s=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"logs"},[e("van-list",{attrs:{finished:n.finished},on:{load:n.onLoad},model:{value:n.loading,callback:function(t){n.loading=t},expression:"loading"}},n._l(n.list,function(n){return e("van-cell",{key:n,attrs:{title:n+""}})}))],1)},a=[],i={render:s,staticRenderFns:a};t.a=i},108:function(n,t,e){"use strict";function s(n){e(109)}var a=e(50),i=e(110),o=e(5),c=s,l=o(a.a,i.a,!1,c,null,null);t.a=l.exports},109:function(n,t){},110:function(n,t,e){"use strict";var s=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"tags"},[e("van-search",{attrs:{search:"Tag Search"},on:{search:n.onSearch},model:{value:n.searchString,callback:function(t){n.searchString=t},expression:"searchString"}}),n._v(" "),e("van-list",{attrs:{finished:n.finished},on:{load:n.onLoad},model:{value:n.loading,callback:function(t){n.loading=t},expression:"loading"}},n._l(n.list,function(n){return e("van-cell",{key:n,attrs:{title:n+""}})}))],1)},a=[],i={render:s,staticRenderFns:a};t.a=i},111:function(n,t,e){"use strict";var s=e(112),a=(e.n(s),e(51)),i=e.n(a),o=e(144),c=(e.n(o),e(145)),l=e.n(c),r=e(152),u=(e.n(r),e(154)),f=e.n(u),d=e(155),h=(e.n(d),e(157)),g=e.n(h),m=e(158),v=(e.n(m),e(160)),p=e.n(v),_=e(161),k=(e.n(_),e(64)),S=e.n(k),R=e(162),x=(e.n(R),e(65)),b=e.n(x),L=e(163),A=(e.n(L),e(165)),T=e.n(A),W=e(166),w=(e.n(W),e(168)),y=e.n(w),E=e(169),C=(e.n(E),e(170)),V=e.n(C),$=e(173),j=(e.n($),e(175)),F=e.n(j),P=e(178),O=(e.n(P),e(180)),Y=e.n(O),M=e(181),G=(e.n(M),e(182)),H=e.n(G),D=e(183),J=(e.n(D),e(185)),U=e.n(J),q=e(12),z=e(186),B=e.n(z);q.default.use(l.a).use(f.a).use(g.a).use(p.a).use(S.a).use(b.a).use(T.a).use(y.a).use(V.a).use(F.a).use(Y.a).use(H.a).use(U.a),i.a.use("en-US",B.a)},153:function(n,t){},156:function(n,t){},159:function(n,t){},164:function(n,t){},167:function(n,t){},174:function(n,t){},179:function(n,t){},184:function(n,t){},40:function(n,t,e){"use strict";t.a={name:"app",data:function(){return{tabs:[{name:"HOME",link:"messages"},{name:"LOGS",link:"logs"},{name:"TODO",link:"todo"},{name:"TAG SEARCH",link:"tags"}]}},methods:{handleTabClick:function(n){console.log("hello"),this.$router.push(this.tabs[n].link)}}}},41:function(n,t,e){"use strict";t.a={name:"mainScreen",data:function(){return{msg:"Welcome to Your Vue.js PWA",list:["todo","logs"],loading:!1,finished:!1}},methods:{onLoad:function(){var n=this;setTimeout(function(){for(var t=0;t<10;t++)n.list.push(n.list.length+1);n.loading=!1,n.list.length>=10&&(n.finished=!0)},100)}}}},42:function(n,t,e){"use strict";var s=e(17),a=e.n(s);t.a={name:"messagesView",data:function(){return{msg:"Welcome to Your Vue.js PWA",list:[],loading:!1,finished:!1}},mounted:function(){var n=this;a.a.get("/api/live").then(function(t){n.list=t.data.response,console.log(t)}).catch(function(n){console.log(n)})},methods:{onLoad:function(){var n=this;setTimeout(function(){for(var t=0;t<10;t++)n.list.push(n.list.length+1);n.loading=!1,n.list.length>=40&&(n.finished=!0)},500)}}}},48:function(n,t,e){"use strict";var s=e(17),a=e.n(s);t.a={name:"tags",data:function(){return{msg:"Welcome to Your Vue.js PWA",list:[],searchResults:[],logs:[],loading:!1,finished:!1,searchString:"",i:0}},mounted:function(){var n=this;a.a.get("/api/live").then(function(t){n.logs=t.data.response,console.log(t),n.onSearch()}).catch(function(n){console.log(n)})},methods:{onLoad:function(){var n=this;setTimeout(function(){n.loading=!1,n.list.push(n.searchResults[n.i].text),n.i++},50)},onSearch:function(){this.searchResults=[],this.list=[],console.log("Searching for todo"),this.searchResults=this.logs.filter(function(n){return n.tags.includes("tomorrow")||n.tags.includes("todo")||n.tags.includes("to do")||n.tags.includes("need to")||n.tags.includes("have to")}),console.log(this.searchResults),this.i=0;for(var n=0;n<this.searchResults.length;n++)this.onLoad()}}}},49:function(n,t,e){"use strict";var s=e(17),a=e.n(s);t.a={name:"todo",data:function(){return{msg:"Welcome to Your Vue.js PWA",list:[],logs:[],loading:!1,finished:!1,i:0}},mounted:function(){var n=this;a.a.get("/api/live").then(function(t){n.logs=t.data.response,console.log(t)}).catch(function(n){console.log(n)})},methods:{onLoad:function(){var n=this;setTimeout(function(){n.loading=!1,n.list.push(n.logs[n.i].text),n.i++},50)}}}},50:function(n,t,e){"use strict";var s=e(17),a=e.n(s);t.a={name:"tags",data:function(){return{msg:"Welcome to Your Vue.js PWA",list:[],searchResults:[],logs:[],loading:!1,finished:!1,searchString:"",i:0}},mounted:function(){var n=this;a.a.get("/api/live").then(function(t){n.logs=t.data.response,console.log(t)}).catch(function(n){console.log(n)})},methods:{onLoad:function(){var n=this;setTimeout(function(){n.loading=!1,n.list.push(n.searchResults[n.i].text),n.i++},50)},onSearch:function(){var n=this;this.searchResults=[],this.list=[],console.log("Searching for "+this.searchString),this.searchResults=this.logs.filter(function(t){return t.tags.includes(n.searchString)}),console.log(this.searchResults),this.i=0;for(var t=0;t<this.searchResults.length;t++)this.onLoad()}}}},68:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=e(12),a=e(71),i=e(76);e(111);s.default.config.productionTip=!1,new s.default({el:"#app",router:i.a,template:"<App/>",components:{App:a.a}})},71:function(n,t,e){"use strict";function s(n){e(72)}var a=e(40),i=e(74),o=e(5),c=s,l=o(a.a,i.a,!1,c,null,null);t.a=l.exports},72:function(n,t){},74:function(n,t,e){"use strict";var s=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[n._m(0),n._v(" "),e("main",[e("van-tabs",{attrs:{sticky:"",swipable:""},on:{click:n.handleTabClick}},n._l(n.tabs,function(n){return e("div",{key:n.name},[e("van-tab",{attrs:{title:n.name}})],1)})),n._v(" "),e("router-view")],1)])},a=[function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("header",[s("img",{attrs:{id:"autologimg",src:e(75),height:"100",sticky:""}}),n._v(" "),s("span",{attrs:{sticky:""}},[n._v("AutoLog: Automated Meeting Logger")])])}],i={render:s,staticRenderFns:a};t.a=i},75:function(n,t,e){n.exports=e.p+"static/img/autologger_logo.3d38aa0.png"},76:function(n,t,e){"use strict";var s=e(12),a=e(77),i=e(78),o=e(81),c=e(102),l=e(105),r=e(108);s.default.use(a.a),t.a=new a.a({routes:[{path:"/",name:"mainScreen",component:i.a},{path:"/todo",name:"todo",component:c.a},{path:"/messages",name:"messagesView",component:o.a},{path:"/logs",name:"logs",component:l.a},{path:"/tags",name:"tags",component:r.a}]})},78:function(n,t,e){"use strict";function s(n){e(79)}var a=e(41),i=e(80),o=e(5),c=s,l=o(a.a,i.a,!1,c,null,null);t.a=l.exports},79:function(n,t){},80:function(n,t,e){"use strict";var s=function(){var n=this,t=n.$createElement;return(n._self._c||t)("div",{staticClass:"mainScreen"})},a=[],i={render:s,staticRenderFns:a};t.a=i},81:function(n,t,e){"use strict";function s(n){e(82)}var a=e(42),i=e(101),o=e(5),c=s,l=o(a.a,i.a,!1,c,null,null);t.a=l.exports},82:function(n,t){}},[68]);
//# sourceMappingURL=app.f3038ec170c31c49d2a4.js.map