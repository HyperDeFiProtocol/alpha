(window.webpackJsonp=window.webpackJsonp||[]).push([[110,15,66,79,103],{1017:function(t,e,n){"use strict";n(991)},1018:function(t,e,n){var r=n(57)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.hdf-stat div dt[data-v-3ea505ef]{\n  --tw-text-opacity:1;\n  color:rgba(255, 228, 230, var(--tw-text-opacity))\n}\ntbody tr[data-v-3ea505ef]:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(136, 19, 55, var(--tw-bg-opacity))\n}\ntbody tr:hover td[data-v-3ea505ef]{\n  --tw-text-opacity:1;\n  color:rgba(254, 205, 211, var(--tw-text-opacity))\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},1064:function(t,e,n){"use strict";n.r(e);var r,o=n(1),l=(n(22),n(2)),c=n.n(l),d=n(74),f=n(256),v={name:"STaxLiquidity",data:function(){return{transactions:[]}},computed:{explorer:function(){return d.a},autoSwapAmountMin:function(){return"0"!==this.$store.state.bsc.genesis.liquidityCreatedTimestamp?this.$store.state.bsc.global.autoSwapAmountMin:new c.a(this.$store.state.bsc.global.initLiquidity).mul(new c.a(this.$store.state.bsc.global.autoSwapNumeratorMin)).div(new c.a(this.$store.state.bsc.global.autoSwapDenominator))}},watch:{"$store.state.bsc.synchronizing.fromBlock":(r=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.wait(1e3);case 2:return t.next=4,this.load();case 4:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.load();case 2:case"end":return e.stop()}}),e)})))()},methods:{load:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nuxt.context.app.db.buffer.where("sender").equals(t.$store.state.bsc.globalAccounts.buffer).reverse().limit(10).toArray();case 2:t.transactions=e.sent;case 3:case"end":return e.stop()}}),e)})))()}}},h=(n(1017),n(5)),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hdf-section-fee"},[n("div",{staticClass:"text-center"},[n("span",{staticClass:"span-icon bg-rose-50 text-rose-700"},[n("HeroIconOutlineServer",{staticClass:"h-8 w-8"})],1)]),t._v(" "),n("LAutoWidth",{staticClass:"auto-layout"},[n("main",[n("div",{staticClass:"header2"},[n("h2",{staticClass:"text-rose-400"},[t._v("\n            "+t._s(t.$t("sTaxLiquidity.title"))+"\n          ")]),t._v(" "),n("p",[t._v("\n            "+t._s(t.$t("sTaxLiquidity.text"))+"\n          ")])]),t._v(" "),n("div",{staticClass:"body1 to-red-900 from-rose-900 text-rose-300"},[n("h3",[t._v("\n            "+t._s(t.$t("sTax.forEachTransaction"))+"\n          ")]),t._v(" "),n("p",[t._v("\n            "+t._s(t.$t("sTax.take"))+"\n            "),t.$store.state.bsc.takerTax.liquidity>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.takerTax.liquidity)+"%\n              "+t._s(t.$t("sTax.fromTaker"))+"\n            ")]):t._e(),t._v(" "),t.$store.state.bsc.makerTax.liquidity>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.makerTax.liquidity)+"%\n              "+t._s(t.$t("sTax.fromMaker"))+"\n            ")]):t._e(),t._v(" "),t.$store.state.bsc.whaleTax.liquidity>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.whaleTax.liquidity)+"%\n              "+t._s(t.$t("sTax.fromWhale"))+"\n            ")]):t._e(),t._v("\n            "+t._s(t.$t("sTaxLiquidity.thenDeposit1__"))+"\n            "),n("CBN",{attrs:{value:t.autoSwapAmountMin,token:!0}}),t._v(" HyperDeFi\n            "+t._s(t.$t("sTaxLiquidity.thenDeposit2__"))+"\n            "+t._s(t.$store.state.bsc.global.autoSwapNumeratorMin)+"/"),n("CBN",{attrs:{value:t.$store.state.bsc.global.autoSwapDenominator}}),t._v("\n            "+t._s(t.$t("sTaxLiquidity.thenDeposit3__"))+"\n")],1),t._v(" "),n("p",[t._v("\n            "+t._s(t.$t("sTaxLiquidity.newLPTokens__"))+"\n          ")])])]),t._v(" "),t.$store.state.bsc.supply.liquidity>"0"?n("dl",{staticClass:"hdf-stat grid grid-cols-1 xl:max-w-7xl",class:{"xl:grid-cols-3":t.$store.state.stat.liquidity.count,"xl:grid-cols-2":!t.$store.state.stat.liquidity.count}},[n("div",[n("dt",[t._v("\n            "+t._s(t.$t("sTaxLiquidity.statLiquidity"))+"\n          ")]),t._v(" "),n("dd",[n("CBN",{attrs:{value:String(t.$store.state.bsc.supply.liquidity),token:!0}})],1)]),t._v(" "),n("div",[n("dt",[n("span",[t._v("\n              "+t._s(t.$t("sTaxLiquidity.statBuffer"))+"\n            ")]),t._v(" "),t.$store.state.bsc.global.autoSwapReady?n("span",[t._v("\n              "+t._s(t.$t("sTaxLiquidity.statReady"))+"\n            ")]):t._e()]),t._v(" "),n("dd",[n("CBN",{attrs:{value:t.$store.state.bsc.supply.buffer,token:!0}})],1)]),t._v(" "),t.$store.state.stat.liquidity.count?n("div",[n("dt",[t._v("\n            "+t._s(t.$t("sTaxLiquidity.statLiquidityAddTransfers"))+"\n          ")]),t._v(" "),n("dd",[n("CBN",{attrs:{value:t.$store.state.stat.liquidity.count}})],1)]):t._e()]):t._e(),t._v(" "),t.transactions.length?n("div",[n("h6",{staticClass:"mt-12 md:mt-16 ml-2 text-sm font-semibold text-rose-500 tracking-wide uppercase"},[t._v("\n          "+t._s(t.$t("txTable.latest"))+"\n          "+t._s(t.transactions.length)+"\n          "+t._s(t.$t("sTaxLiquidity.liquidityAddHistory"))+"\n        ")]),t._v(" "),n("div",{staticClass:"md:hidden mt-4"},[n("ul",{staticClass:"hdf-tx-ul"},t._l(t.transactions,(function(e){return n("li",[n("span",{staticClass:"span-icon-wrap"},[n("HeroIconSolidGift")],1),t._v(" "),n("div",{staticClass:"div-body"},[n("div",[n("h4",[n("CBN",{attrs:{value:e.amount}}),t._v("\n                    HyperDeFi\n                  ")],1),t._v(" "),n("p",[n("a",{attrs:{target:"_blank",href:t.explorer.exploreTx(e.txHash)}},[t._v("\n                      #"),n("CBN",{attrs:{value:e.blockNumber}})],1)])]),t._v(" "),n("p",{staticClass:"p-tx"},[n("a",{attrs:{target:"_blank",href:t.explorer.exploreToken4address(e.account)}},[t._v("\n                    "+t._s(e.txHash.slice(0,8))+"..."+t._s(e.txHash.slice(-4))+"\n                  ")])])])])})),0)]),t._v(" "),n("div",{staticClass:"hidden mt-4 overflow-x-auto md:block"},[n("div",{staticClass:"align-middle inline-block min-w-full"},[n("div",{staticClass:"shadow overflow-hidden border-b border-gray-700"},[n("table",{staticClass:"hdf-tx-table"},[n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("\n                    "+t._s(t.$t("txTable.block"))+"\n                  ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n                    "+t._s(t.$t("txTable.txHash"))+"\n                  ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n                    "+t._s(t.$t("txTable.amount"))+"\n                  ")])])]),t._v(" "),n("tbody",t._l(t.transactions,(function(e){return n("tr",[n("td",[n("a",{attrs:{target:"_blank",href:t.explorer.exploreTx(e.txHash)}},[t._v("\n                      #"),n("CBN",{attrs:{value:e.blockNumber}})],1)]),t._v(" "),n("td",{staticClass:"font-mono"},[n("a",{attrs:{target:"_blank",href:t.explorer.exploreTx(e.txHash)}},[t._v("\n                      "+t._s(e.txHash.slice(0,36))+"..."+t._s(e.txHash.slice(-4))+"\n                    ")])]),t._v(" "),n("td",[n("CBN",{attrs:{value:e.amount,token:!0,padding:2}}),t._v("\n                    HyperDeFi\n                  ")],1)])})),0)])])])])]):t._e()])],1)}),[],!1,null,"3ea505ef",null);e.default=component.exports;installComponents(component,{HeroIconOutlineServer:n(967).default,CBN:n(809).default,HeroIconSolidGift:n(965).default,LAutoWidth:n(143).default})},805:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},806:function(t,e,n){var r=n(48),o=n(24),l="["+n(805)+"]",c=RegExp("^"+l+l+"*"),d=RegExp(l+l+"*$"),f=function(t){return function(e){var n=o(r(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(d,"")),n}};t.exports={start:f(1),end:f(2),trim:f(3)}},807:function(t,e,n){var content=n(814);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("7f27037d",content,!0,{sourceMap:!1})},808:function(t,e,n){"use strict";var r=n(26),o=n(16),l=n(145),c=n(37),d=n(29),f=n(255),v=n(181),h=n(411),_=n(15),m=n(119).f,x=n(75).f,y=n(36).f,w=n(812),$=n(806).trim,C="Number",k=o.Number,T=k.prototype,N=function(t){var e=h(t,"number");return"bigint"==typeof e?e:I(e)},I=function(t){var e,n,r,o,l,c,d,code,f=h(t,"number");if(v(f))throw TypeError("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(43===(e=(f=$(f)).charCodeAt(0))||45===e){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(c=(l=f.slice(2)).length,d=0;d<c;d++)if((code=l.charCodeAt(d))<48||code>o)return NaN;return parseInt(l,r)}return+f};if(l(C,!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var S,E=function(t){var e=arguments.length<1?0:k(N(t)),n=this;return n instanceof E&&_((function(){w(n)}))?f(Object(e),n,E):e},A=r?m(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),H=0;A.length>H;H++)d(k,S=A[H])&&!d(E,S)&&y(E,S,x(k,S));E.prototype=T,T.constructor=E,c(o,C,E)}},809:function(t,e,n){"use strict";n.r(e);n(808),n(47),n(88),n(810),n(254),n(59),n(46),n(182);var r={name:"CBN",props:{value:{required:!0},decimals:{type:Number,default:0},padding:{type:Number,default:0},keep:{type:Boolean,default:!1},price:{type:Boolean,default:!1},token:{type:Boolean,default:!1}},computed:{numDecimals:function(){return this.token?parseInt(this.$store.state.bsc.metadata.tokenDecimals):this.price?parseInt(this.$store.state.bsc.metadata.priceDecimals):this.decimals},step1:function(){var s=String(this.value).trim().replace(new RegExp("^0+"),""),t={a:"0",b:null};if(this.numDecimals>0)if(this.numDecimals<s.length){var e=s.length-this.numDecimals;t.a=s.slice(0,e),t.b=s.slice(e)}else for(t.b=s;this.numDecimals>t.b.length;)t.b="0"+t.b;else t.a=s;if(t.b&&!this.keep&&(t.b=t.b.replace(new RegExp("0+$"),"")),this.padding)if(t.b||(t.b=""),this.padding>t.b.length)for(;this.padding>t.b.length;)t.b=t.b+"0";else this.padding<t.b.length&&(t.b=t.b.slice(0,this.padding));return t},display:function(){for(var t={a:[],b:[]},a=this.step1.a;3<a.length;)t.a.unshift(a.slice(-3)),a=a.slice(0,a.length-3);a.length&&t.a.unshift(a);var b=this.step1.b;if(b){for(;3<b.length;)t.b.push(b.slice(0,3)),b=b.slice(3);b.length&&t.b.push(b)}return 0===t.a.length&&(t.a=["0"]),t.a=t.a.join(","),t}}},o=(n(813),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"cbn-number"},[n("span",{staticClass:"cbn-integer"},[t._v(t._s(t.display.a))]),t.display.b.length?n("span",{staticClass:"cbn-dot"},[t._v(".")]):t._e(),t._l(t.display.b,(function(e){return n("span",{staticClass:"cbn-decimal"},[t._v(t._s(e))])}))],2)}),[],!1,null,"77384a03",null);e.default=component.exports},810:function(t,e,n){"use strict";var r=n(9),o=n(806).trim;r({target:"String",proto:!0,forced:n(811)("trim")},{trim:function(){return o(this)}})},811:function(t,e,n){var r=n(144).PROPER,o=n(15),l=n(805);t.exports=function(t){return o((function(){return!!l[t]()||"​᠎"!=="​᠎"[t]()||r&&l[t].name!==t}))}},812:function(t,e){var n=1..valueOf;t.exports=function(t){return n.call(t)}},813:function(t,e,n){"use strict";n(807)},814:function(t,e,n){var r=n(57)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.cbn-decimal[data-v-77384a03]{\n  margin-right:.2rem;\n  font-size:90%\n}\n.cbn-decimal[data-v-77384a03]:last-child{\n  margin-right:0\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},965:function(t,e,n){"use strict";n.r(e);var r={name:"HeroIconSolidGift"},o=n(5),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"flex-shrink-0",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z","clip-rule":"evenodd"}}),t._v(" "),n("path",{attrs:{d:"M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"}})])}),[],!1,null,"04cf8a48",null);e.default=component.exports},967:function(t,e,n){"use strict";n.r(e);var r={name:"HeroIconOutlineServer"},o=n(5),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"flex-shrink-0",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"}})])}),[],!1,null,"3acede91",null);e.default=component.exports},991:function(t,e,n){var content=n(1018);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("111ecad8",content,!0,{sourceMap:!1})}}]);