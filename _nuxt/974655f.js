(window.webpackJsonp=window.webpackJsonp||[]).push([[28,15,16,104],{1008:function(t,e,n){"use strict";n.r(e);var r=n(78),l={name:"CTableAirdrop",props:{transactions:{type:Array,required:!0},hash:{type:Boolean,default:!1}},computed:{hpLink:function(){return r.a}}},c=n(5),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.transactions.length?n("div",{staticClass:"overflow-x-auto"},[n("div",{staticClass:"align-middle inline-block min-w-full"},[n("div",{staticClass:"shadow overflow-hidden border-b border-gray-700"},[n("table",{staticClass:"table-history"},[n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.block"))+"\n          ")]),t._v(" "),t.hash?n("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.txHash"))+"\n          ")]):n("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.address"))+"\n          ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.amount"))+"\n          ")])])]),t._v(" "),n("tbody",t._l(t.transactions,(function(e){return n("tr",[n("td",[n("a",{attrs:{target:"_blank",href:t.hpLink.exploreTx(e.txHash)}},[t._v("\n              #"),n("CBN",{attrs:{value:e.blockNumber}})],1)]),t._v(" "),t.hash?n("td",{staticClass:"font-mono"},[n("a",{attrs:{target:"_blank",href:t.hpLink.exploreTx(e.txHash)}},[t._v("\n              "+t._s(e.txHash.slice(0,44))+"...\n            ")])]):n("td",{staticClass:"font-mono"},[n("a",{attrs:{target:"_blank",href:t.hpLink.exploreTx(e.txHash)}},[n("CAddress",{attrs:{value:e.account}})],1)]),t._v(" "),n("td",[n("CBN",{attrs:{value:e.amount,token:!0,padding:2}}),t._v("\n            HyperDeFi\n          ")],1)])})),0)])])])]):t._e()}),[],!1,null,"f527ba38",null);e.default=component.exports;installComponents(component,{CBN:n(835).default,CAddress:n(843).default})},831:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},832:function(t,e,n){var r=n(13),l=n(51),c=n(26),o=n(831),f=r("".replace),d="["+o+"]",h=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),v=function(t){return function(e){var n=c(l(e));return 1&t&&(n=f(n,h,"")),2&t&&(n=f(n,m,"")),n}};t.exports={start:v(1),end:v(2),trim:v(3)}},833:function(t,e,n){var content=n(840);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("7f27037d",content,!0,{sourceMap:!1})},834:function(t,e,n){"use strict";var r=n(28),l=n(7),c=n(13),o=n(153),f=n(41),d=n(29),h=n(268),m=n(97),v=n(191),x=n(424),_=n(16),y=n(126).f,N=n(79).f,k=n(40).f,C=n(838),A=n(832).trim,E="Number",T=l.Number,w=T.prototype,I=l.TypeError,$=c("".slice),B=c("".charCodeAt),R=function(t){var e=x(t,"number");return"bigint"==typeof e?e:D(e)},D=function(t){var e,n,r,l,c,o,f,code,d=x(t,"number");if(v(d))throw I("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=A(d),43===(e=B(d,0))||45===e){if(88===(n=B(d,2))||120===n)return NaN}else if(48===e){switch(B(d,1)){case 66:case 98:r=2,l=49;break;case 79:case 111:r=8,l=55;break;default:return+d}for(o=(c=$(d,2)).length,f=0;f<o;f++)if((code=B(c,f))<48||code>l)return NaN;return parseInt(c,r)}return+d};if(o(E,!T(" 0o1")||!T("0b1")||T("+0x1"))){for(var O,S=function(t){var e=arguments.length<1?0:T(R(t)),n=this;return m(w,n)&&_((function(){C(n)}))?h(Object(e),n,S):e},j=r?y(T):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),F=0;j.length>F;F++)d(T,O=j[F])&&!d(S,O)&&k(S,O,N(T,O));S.prototype=w,w.constructor=S,f(l,E,S)}},835:function(t,e,n){"use strict";n.r(e);n(834),n(50),n(96),n(836),n(267),n(66),n(45),n(192);var r={name:"CBN",props:{value:{required:!0},decimals:{type:Number,default:0},padding:{type:Number,default:0},keep:{type:Boolean,default:!1},price:{type:Boolean,default:!1},token:{type:Boolean,default:!1}},computed:{numDecimals:function(){return this.token?parseInt(this.$store.state.bsc.metadata.tokenDecimals):this.price?parseInt(this.$store.state.bsc.metadata.priceDecimals):this.decimals},step1:function(){var s=String(this.value).trim().replace(new RegExp("^0+"),""),t={a:"0",b:null};if(this.numDecimals>0)if(this.numDecimals<s.length){var e=s.length-this.numDecimals;t.a=s.slice(0,e),t.b=s.slice(e)}else for(t.b=s;this.numDecimals>t.b.length;)t.b="0"+t.b;else t.a=s;if(t.b&&!this.keep&&(t.b=t.b.replace(new RegExp("0+$"),"")),this.padding)if(t.b||(t.b=""),this.padding>t.b.length)for(;this.padding>t.b.length;)t.b=t.b+"0";else this.padding<t.b.length&&(t.b=t.b.slice(0,this.padding));return t},display:function(){for(var t={a:[],b:[]},a=this.step1.a;3<a.length;)t.a.unshift(a.slice(-3)),a=a.slice(0,a.length-3);a.length&&t.a.unshift(a);var b=this.step1.b;if(b){for(;3<b.length;)t.b.push(b.slice(0,3)),b=b.slice(3);b.length&&t.b.push(b)}return 0===t.a.length&&(t.a=["0"]),t.a=t.a.join(","),t}}},l=(n(839),n(5)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"cbn-number"},[n("span",{staticClass:"cbn-integer"},[t._v(t._s(t.display.a))]),t.display.b.length?n("span",{staticClass:"cbn-dot"},[t._v(".")]):t._e(),t._l(t.display.b,(function(e){return n("span",{staticClass:"cbn-decimal"},[t._v(t._s(e))])}))],2)}),[],!1,null,"77384a03",null);e.default=component.exports},836:function(t,e,n){"use strict";var r=n(10),l=n(832).trim;r({target:"String",proto:!0,forced:n(837)("trim")},{trim:function(){return l(this)}})},837:function(t,e,n){var r=n(152).PROPER,l=n(16),c=n(831);t.exports=function(t){return l((function(){return!!c[t]()||"​᠎"!=="​᠎"[t]()||r&&c[t].name!==t}))}},838:function(t,e,n){var r=n(13);t.exports=r(1..valueOf)},839:function(t,e,n){"use strict";n(833)},840:function(t,e,n){var r=n(64)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.cbn-decimal[data-v-77384a03]{\n  margin-right:.2rem;\n  font-size:90%\n}\n.cbn-decimal[data-v-77384a03]:last-child{\n  margin-right:0\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},843:function(t,e,n){"use strict";n.r(e);var r,l=n(1),c=(n(45),n(24),{name:"CAddress",data:function(){return{displayText:""}},props:{value:{type:String,required:!0}},mounted:(r=Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setDisplayText();case 2:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)}),methods:{presetName:function(address){switch(address){case this.$store.state.bsc.globalAccounts.pair:return"liquidity";case this.$store.state.bsc.globalAccounts.buffer:return"buffer";case this.$store.state.bsc.globalAccounts.genesis:return"genesis";case this.$store.state.bsc.globalAccounts.burn:return"burn";case this.$store.state.bsc.globalAccounts.airdrop:return"airdrop";case this.$store.state.bsc.globalAccounts.tax:return"farm";case"0xCBA6e270969B1390C89eB6a18594cDBA6EB52A28":return"mainContract";default:return null}},setDisplayText:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var text,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(text=t.presetName(t.value))){e.next=4;break}return t.displayText=t.$t("user."+text),e.abrupt("return");case 4:return e.next=6,t.$nuxt.context.app.db.holder.where("address").equals(t.value).first();case 6:if(!(n=e.sent)||!n.username){e.next=10;break}return t.displayText="@"+n.username+": "+t.value.slice(0,8)+"..."+t.value.slice(-4),e.abrupt("return");case 10:return e.abrupt("return",t.displayText=t.value);case 11:case"end":return e.stop()}}),e)})))()}}}),o=n(5),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v(t._s(t.displayText))])}),[],!1,null,"6b1e9b3d",null);e.default=component.exports}}]);