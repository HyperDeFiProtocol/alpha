(window.webpackJsonp=window.webpackJsonp||[]).push([[32,15,16,104],{832:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},833:function(t,e,n){var r=n(13),c=n(51),o=n(27),l=n(832),f=r("".replace),d="["+l+"]",h=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),v=function(t){return function(e){var n=o(c(e));return 1&t&&(n=f(n,h,"")),2&t&&(n=f(n,m,"")),n}};t.exports={start:v(1),end:v(2),trim:v(3)}},834:function(t,e,n){var content=n(841);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("7f27037d",content,!0,{sourceMap:!1})},835:function(t,e,n){"use strict";var r=n(29),c=n(6),o=n(13),l=n(153),f=n(41),d=n(30),h=n(269),m=n(97),v=n(193),_=n(426),x=n(16),y=n(127).f,N=n(82).f,$=n(40).f,k=n(839),C=n(833).trim,T="Number",A=c.Number,E=A.prototype,w=c.TypeError,I=o("".slice),D=o("".charCodeAt),R=function(t){var e=_(t,"number");return"bigint"==typeof e?e:F(e)},F=function(t){var e,n,r,c,o,l,f,code,d=_(t,"number");if(v(d))throw w("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=C(d),43===(e=D(d,0))||45===e){if(88===(n=D(d,2))||120===n)return NaN}else if(48===e){switch(D(d,1)){case 66:case 98:r=2,c=49;break;case 79:case 111:r=8,c=55;break;default:return+d}for(l=(o=I(d,2)).length,f=0;f<l;f++)if((code=D(o,f))<48||code>c)return NaN;return parseInt(o,r)}return+d};if(l(T,!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var O,S=function(t){var e=arguments.length<1?0:A(R(t)),n=this;return m(E,n)&&x((function(){k(n)}))?h(Object(e),n,S):e},B=r?y(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),j=0;B.length>j;j++)d(A,O=B[j])&&!d(S,O)&&$(S,O,N(A,O));S.prototype=E,E.constructor=S,f(c,T,S)}},836:function(t,e,n){"use strict";n.r(e);n(835),n(50),n(96),n(837),n(268),n(66),n(45),n(194);var r={name:"CBN",props:{value:{required:!0},decimals:{type:Number,default:0},padding:{type:Number,default:0},keep:{type:Boolean,default:!1},price:{type:Boolean,default:!1},token:{type:Boolean,default:!1}},computed:{numDecimals:function(){return this.token?parseInt(this.$store.state.bsc.metadata.tokenDecimals):this.price?parseInt(this.$store.state.bsc.metadata.priceDecimals):this.decimals},step1:function(){var s=String(this.value).trim().replace(new RegExp("^0+"),""),t={a:"0",b:null};if(this.numDecimals>0)if(this.numDecimals<s.length){var e=s.length-this.numDecimals;t.a=s.slice(0,e),t.b=s.slice(e)}else for(t.b=s;this.numDecimals>t.b.length;)t.b="0"+t.b;else t.a=s;if(t.b&&!this.keep&&(t.b=t.b.replace(new RegExp("0+$"),"")),this.padding)if(t.b||(t.b=""),this.padding>t.b.length)for(;this.padding>t.b.length;)t.b=t.b+"0";else this.padding<t.b.length&&(t.b=t.b.slice(0,this.padding));return t},display:function(){for(var t={a:[],b:[]},a=this.step1.a;3<a.length;)t.a.unshift(a.slice(-3)),a=a.slice(0,a.length-3);a.length&&t.a.unshift(a);var b=this.step1.b;if(b){for(;3<b.length;)t.b.push(b.slice(0,3)),b=b.slice(3);b.length&&t.b.push(b)}return 0===t.a.length&&(t.a=["0"]),t.a=t.a.join(","),t}}},c=(n(840),n(5)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"cbn-number"},[n("span",{staticClass:"cbn-integer"},[t._v(t._s(t.display.a))]),t.display.b.length?n("span",{staticClass:"cbn-dot"},[t._v(".")]):t._e(),t._l(t.display.b,(function(e){return n("span",{staticClass:"cbn-decimal"},[t._v(t._s(e))])}))],2)}),[],!1,null,"77384a03",null);e.default=component.exports},837:function(t,e,n){"use strict";var r=n(10),c=n(833).trim;r({target:"String",proto:!0,forced:n(838)("trim")},{trim:function(){return c(this)}})},838:function(t,e,n){var r=n(152).PROPER,c=n(16),o=n(832);t.exports=function(t){return c((function(){return!!o[t]()||"​᠎"!=="​᠎"[t]()||r&&o[t].name!==t}))}},839:function(t,e,n){var r=n(13);t.exports=r(1..valueOf)},840:function(t,e,n){"use strict";n(834)},841:function(t,e,n){var r=n(64)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.cbn-decimal[data-v-77384a03]{\n  margin-right:.2rem;\n  font-size:90%\n}\n.cbn-decimal[data-v-77384a03]:last-child{\n  margin-right:0\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},844:function(t,e,n){"use strict";n.r(e);var r,c=n(0),o=(n(45),n(24),{name:"CAddress",data:function(){return{displayText:""}},props:{value:{type:String,required:!0}},mounted:(r=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setDisplayText();case 2:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)}),methods:{presetName:function(address){switch(address){case this.$store.state.bsc.globalAccounts.pair:return"liquidity";case this.$store.state.bsc.globalAccounts.buffer:return"buffer";case this.$store.state.bsc.globalAccounts.ido:return"ido";case this.$store.state.bsc.globalAccounts.genesis:return"genesis";case this.$store.state.bsc.globalAccounts.zero:return"zero";case this.$store.state.bsc.globalAccounts.burn:return"burn";case this.$store.state.bsc.globalAccounts.airdrop:return"airdrop";case this.$store.state.bsc.globalAccounts.tax:return"farm";case"0x99999999f678F56beF0Da5EB96F4c1300Cf8D69a":return"mainContract";default:return null}},setDisplayText:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var text,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(text=t.presetName(t.value))){e.next=4;break}return t.displayText=t.$t("user."+text),e.abrupt("return");case 4:return e.next=6,t.$nuxt.context.app.db.holder.where("address").equals(t.value).first();case 6:if(!(n=e.sent)||!n.username){e.next=10;break}return t.displayText="@"+n.username+": "+t.value.slice(0,8)+"..."+t.value.slice(-4),e.abrupt("return");case 10:return e.abrupt("return",t.displayText=t.value);case 11:case"end":return e.stop()}}),e)})))()}}}),l=n(5),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v(t._s(t.displayText))])}),[],!1,null,"4c435680",null);e.default=component.exports},999:function(t,e,n){"use strict";n.r(e);var r=n(81),c={name:"CTableFomo",props:{transactions:{type:Array,required:!0}},computed:{hpLink:function(){return r.a}}},o=n(5),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.transactions.length?n("div",{staticClass:"overflow-x-auto"},[n("div",{staticClass:"align-middle inline-block min-w-full"},[n("div",{staticClass:"shadow overflow-hidden border-b border-gray-700"},[n("table",{staticClass:"table-history"},[n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.block"))+"\n          ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.type"))+"\n          ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.addressOrHash"))+"\n          ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.amount"))+"\n          ")])])]),t._v(" "),n("tbody",t._l(t.transactions,(function(e){return n("tr",[n("td",[n("a",{attrs:{target:"_blank",href:t.hpLink.exploreTx(e.txHash)}},[t._v("\n              #"),n("CBN",{attrs:{value:e.blockNumber}})],1)]),t._v(" "),e.sender===t.$store.state.bsc.globalAccounts.fomo?n("td",{staticClass:"text-emerald-400"},[t._v("\n            "+t._s(t.$t("txTable.winner"))+"\n          ")]):n("td",[t._v("\n            "+t._s(t.$t("txTable.accumulate"))+"\n          ")]),t._v(" "),e.sender===t.$store.state.bsc.globalAccounts.fomo?n("td",{staticClass:"font-mono text-emerald-400"},[n("a",{attrs:{target:"_blank",href:t.hpLink.exploreTx(e.txHash)}},[n("CAddress",{attrs:{value:e.recipient}})],1)]):n("td",{staticClass:"font-mono"},[n("a",{attrs:{target:"_blank",href:t.hpLink.exploreTx(e.txHash)}},[t._v("\n              "+t._s(e.txHash.slice(0,44))+"..."+t._s(e.txHash.slice(-4))+"\n            ")])]),t._v(" "),n("td",[n("CBN",{attrs:{value:e.amount,token:!0,padding:2}}),t._v("\n            HyperDeFi\n          ")],1)])})),0)])])])]):t._e()}),[],!1,null,"d539c806",null);e.default=component.exports;installComponents(component,{CBN:n(836).default,CAddress:n(844).default})}}]);