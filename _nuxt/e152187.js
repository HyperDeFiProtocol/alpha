(window.webpackJsonp=window.webpackJsonp||[]).push([[131,15,19,22,32,101],{1070:function(t,e,n){"use strict";n.r(e);var r=n(74),o={name:"CTableHolder",props:{holders:{type:Array,required:!0}},computed:{hdfLink:function(){return r.a}}},c=n(5),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.holders.length?n("div",{staticClass:"overflow-x-auto"},[n("div",{staticClass:"align-middle inline-block min-w-full"},[n("div",{staticClass:"shadow overflow-hidden border-b border-gray-700"},[n("table",{staticClass:"table-history"},[n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.id"))+"\n          ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.username"))+"\n          ")]),t._v(" "),n("th",{attrs:{scope:"col"}}),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.address"))+"\n          ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.balance"))+"\n          ")])])]),t._v(" "),n("tbody",t._l(t.holders,(function(e){return n("tr",[n("td",[t._v("\n            "+t._s(e.id)+"\n          ")]),t._v(" "),n("td",[t._v("\n            "+t._s(e.username?"@"+e.username:"")+"\n          ")]),t._v(" "),n("td",[e.isWhale?n("IconWhale",{staticClass:"h-5 w-5"}):t._e()],1),t._v(" "),n("td",{staticClass:"font-mono"},[t._v("\n            "+t._s(e.address)+"\n          ")]),t._v(" "),n("td",[n("CBN",{attrs:{value:e.balance,token:!0,padding:2}}),t._v("\n            HyperDeFi\n          ")],1)])})),0)])])])]):t._e()}),[],!1,null,"2334d1f3",null);e.default=component.exports;installComponents(component,{IconWhale:n(411).default,CBN:n(804).default})},1124:function(t,e,n){"use strict";n.r(e);var r,o=n(1),c=(n(22),{scrollToTop:!0,name:"HoldersTop",data:function(){return{holders:[],pageSize:20,pageRecords:0}},computed:{pageNumber:function(){if(this.$route.params.page&&this.$route.params.page>"1"){var t=parseInt(this.$route.params.page);if(t>1)return t}return 1},pageOffset:function(){return this.pageSize*(this.pageNumber-1)}},watch:{"$store.state.bsc.synchronizing.fromHolderId":(r=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.load();case 2:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.load();case 2:case"end":return e.stop()}}),e)})))()},methods:{load:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nuxt.context.app.db.holder.orderBy("balance").reverse().offset(t.pageOffset).limit(t.pageSize).toArray();case 2:for(t.holders=e.sent,n=t.pageOffset,i=0;i<t.holders.length;i++)n++,t.holders[i].rank=n;return e.next=7,t.$nuxt.context.app.db.holder.count();case 7:t.pageRecords=e.sent;case 8:case"end":return e.stop()}}),e)})))()},refresh:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nuxt.context.app.db.pointers.delete("holder");case 2:return e.next=4,t.$nuxt.context.app.db.holder.clear();case 4:return e.next=6,t.$nuxt.context.app.sync.holders();case 6:case"end":return e.stop()}}),e)})))()}}}),l=n(5),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("LAutoWidth",{staticClass:"py-10 md:py-20"},[n("CH3",{scopedSlots:t._u([{key:"tag",fn:function(){return[t._v("\n      On Chain\n    ")]},proxy:!0},{key:"desc",fn:function(){return[null!==t.$store.state.bsc.synchronizing.fromHolderId?n("span",{staticClass:"animate-pulse"},[t._v("\n        Updating... #"+t._s(t.$store.state.bsc.synchronizing.fromHolderId)+"\n      ")]):n("span",{on:{click:t.refresh}},[t._v("\n        Click to Refresh\n      ")])]},proxy:!0}])},[n("span",[t._v("\n      "+t._s(t.$t("siteNav.topAccount"))+"\n    ")])]),t._v(" "),n("CTableHolder",{staticClass:"mt-10 lg:mt-24",attrs:{holders:t.holders}}),t._v(" "),n("CPagination",{staticClass:"mt-8 lg:mt-12",attrs:{records:t.pageRecords,size:t.pageSize,number:t.pageNumber,path:"/holders"}})],1)}),[],!1,null,"6da05931",null);e.default=component.exports;installComponents(component,{CH3:n(810).default,CTableHolder:n(1070).default,CPagination:n(817).default,LAutoWidth:n(142).default})},800:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},801:function(t,e,n){var r=n(48),o=n(24),c="["+n(800)+"]",l=RegExp("^"+c+c+"*"),d=RegExp(c+c+"*$"),f=function(t){return function(e){var n=o(r(e));return 1&t&&(n=n.replace(l,"")),2&t&&(n=n.replace(d,"")),n}};t.exports={start:f(1),end:f(2),trim:f(3)}},802:function(t,e,n){var content=n(809);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(67).default)("7f27037d",content,!0,{sourceMap:!1})},803:function(t,e,n){"use strict";var r=n(26),o=n(16),c=n(144),l=n(37),d=n(29),f=n(254),h=n(180),m=n(410),v=n(15),_=n(118).f,x=n(75).f,y=n(36).f,C=n(807),w=n(801).trim,N="Number",$=o.Number,I=$.prototype,k=function(t){var e=m(t,"number");return"bigint"==typeof e?e:E(e)},E=function(t){var e,n,r,o,c,l,d,code,f=m(t,"number");if(h(f))throw TypeError("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(43===(e=(f=w(f)).charCodeAt(0))||45===e){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(l=(c=f.slice(2)).length,d=0;d<l;d++)if((code=c.charCodeAt(d))<48||code>o)return NaN;return parseInt(c,r)}return+f};if(c(N,!$(" 0o1")||!$("0b1")||$("+0x1"))){for(var T,R=function(t){var e=arguments.length<1?0:$(k(t)),n=this;return n instanceof R&&v((function(){C(n)}))?f(Object(e),n,R):e},O=r?_($):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),A=0;O.length>A;A++)d($,T=O[A])&&!d(R,T)&&y(R,T,x($,T));R.prototype=I,I.constructor=R,l(o,N,R)}},804:function(t,e,n){"use strict";n.r(e);n(803),n(47),n(88),n(805),n(253),n(57),n(46),n(181);var r={name:"CBN",props:{value:{required:!0},decimals:{type:Number,default:0},padding:{type:Number,default:0},keep:{type:Boolean,default:!1},price:{type:Boolean,default:!1},token:{type:Boolean,default:!1}},computed:{numDecimals:function(){return this.token?parseInt(this.$store.state.bsc.metadata.tokenDecimals):this.price?parseInt(this.$store.state.bsc.metadata.priceDecimals):this.decimals},step1:function(){var s=String(this.value).trim().replace(new RegExp("^0+"),""),t={a:"0",b:null};if(this.numDecimals>0)if(this.numDecimals<s.length){var e=s.length-this.numDecimals;t.a=s.slice(0,e),t.b=s.slice(e)}else for(t.b=s;this.numDecimals>t.b.length;)t.b="0"+t.b;else t.a=s;if(t.b&&!this.keep&&(t.b=t.b.replace(new RegExp("0+$"),"")),this.padding)if(t.b||(t.b=""),this.padding>t.b.length)for(;this.padding>t.b.length;)t.b=t.b+"0";else this.padding<t.b.length&&(t.b=t.b.slice(0,this.padding));return t},display:function(){for(var t={a:[],b:[]},a=this.step1.a;3<a.length;)t.a.unshift(a.slice(-3)),a=a.slice(0,a.length-3);a.length&&t.a.unshift(a);var b=this.step1.b;if(b){for(;3<b.length;)t.b.push(b.slice(0,3)),b=b.slice(3);b.length&&t.b.push(b)}return 0===t.a.length&&(t.a=["0"]),t.a=t.a.join(","),t}}},o=(n(808),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"cbn-number"},[n("span",{staticClass:"cbn-integer"},[t._v(t._s(t.display.a))]),t.display.b.length?n("span",{staticClass:"cbn-dot"},[t._v(".")]):t._e(),t._l(t.display.b,(function(e){return n("span",{staticClass:"cbn-decimal"},[t._v(t._s(e))])}))],2)}),[],!1,null,"77384a03",null);e.default=component.exports},805:function(t,e,n){"use strict";var r=n(9),o=n(801).trim;r({target:"String",proto:!0,forced:n(806)("trim")},{trim:function(){return o(this)}})},806:function(t,e,n){var r=n(143).PROPER,o=n(15),c=n(800);t.exports=function(t){return o((function(){return!!c[t]()||"​᠎"!=="​᠎"[t]()||r&&c[t].name!==t}))}},807:function(t,e){var n=1..valueOf;t.exports=function(t){return n.call(t)}},808:function(t,e,n){"use strict";n(802)},809:function(t,e,n){var r=n(66)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.cbn-decimal[data-v-77384a03]{\n  margin-right:.2rem;\n  font-size:90%\n}\n.cbn-decimal[data-v-77384a03]:last-child{\n  margin-right:0\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},810:function(t,e,n){"use strict";n.r(e);var r={name:"CH3"},o=n(5),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hdf-ch3"},[t.$slots.tag?n("header",[t._t("tag")],2):t._e(),t._v(" "),n("h3",[t._t("default")],2),t._v(" "),t.$slots.desc?n("main",[t._t("desc")],2):t._e()])}),[],!1,null,"31b9e2c9",null);e.default=component.exports},811:function(t,e,n){var content=n(815);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(67).default)("4df587ea",content,!0,{sourceMap:!1})},814:function(t,e,n){"use strict";n(811)},815:function(t,e,n){var r=n(66)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.c-pagination[data-v-b41c8ba6]{\n  display:grid;\n  width:100%;\n  grid-template-columns:repeat(3, minmax(0, 1fr));\n  gap:2.5rem;\n  --tw-text-opacity:1;\n  color:rgba(156, 163, 175, var(--tw-text-opacity))\n}\n.c-pagination a[data-v-b41c8ba6]{\n  width:100%;\n  max-width:20rem;\n  display:inline-flex;\n  align-items:center;\n  justify-content:center;\n  border-radius:0.375rem;\n  border-width:1px;\n  --tw-border-opacity:1;\n  border-color:rgba(55, 65, 81, var(--tw-border-opacity));\n  padding-top:0.75rem;\n  padding-bottom:0.75rem;\n  font-size:1rem;\n  line-height:1.5rem;\n  font-weight:500;\n  --tw-text-opacity:1;\n  color:rgba(107, 114, 128, var(--tw-text-opacity))\n}\n.c-pagination a[data-v-b41c8ba6]:focus{\n  outline:2px solid transparent;\n  outline-offset:2px\n}\n.c-pagination a[data-v-b41c8ba6]:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(31, 41, 55, var(--tw-bg-opacity))\n}\n.c-pagination span[data-v-b41c8ba6]{\n  padding-left:1rem;\n  padding-right:1rem;\n  padding-top:0.5rem;\n  padding-bottom:0.5rem\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},817:function(t,e,n){"use strict";n.r(e);n(803);var r={name:"CPagination",props:{path:{type:String,required:!0},number:{type:Number,required:!0},size:{type:Number,required:!0},records:{type:Number,required:!0}},computed:{pages:function(){return Math.ceil(this.records/this.size)},pathToPrevious:function(){var t=this.number-1;return t>0?this.path+"/"+t:null},pathToNext:function(){var t=this.number+1;return t<=this.pages?this.path+"/"+t:null}}},o=(n(814),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.pages>1&&t.number>t.size*(t.number-1)?n("div",{staticClass:"c-pagination"},[n("div",{staticClass:"flex items-center justify-start"},[t.pathToPrevious?n("nuxt-link",{attrs:{to:t.localeLocation(t.pathToPrevious)}},[t._v("\n      Previous Page\n    ")]):t._e()],1),t._v(" "),n("div",{staticClass:"flex items-center justify-center"},[n("span",[t._v("\n      Page "+t._s(t.number)+" of "+t._s(t.pages)+"\n    ")])]),t._v(" "),n("div",{staticClass:"flex items-center justify-end"},[t.pathToNext?n("nuxt-link",{attrs:{to:t.localeLocation(t.pathToNext)}},[t._v("\n      Next Page\n    ")]):t._e()],1)]):t._e()}),[],!1,null,"b41c8ba6",null);e.default=component.exports}}]);