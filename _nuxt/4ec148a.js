/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[121,16,20,51,90,104],{1003:function(t,e,n){"use strict";n.r(e);var o={name:"HeroIconOutlineClipboardCopy"},r=n(5),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"flex-shrink-0",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"}})])}),[],!1,null,"65abb548",null);e.default=component.exports},1063:function(t,e,n){var content=n(1125);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("64a86cce",content,!0,{sourceMap:!1})},1123:function(t,e){function n(){return new DOMException("The request is not allowed","NotAllowedError")}t.exports=async function(text){try{await async function(text){if(!navigator.clipboard)throw n();return navigator.clipboard.writeText(text)}(text)}catch(t){try{await async function(text){const span=document.createElement("span");span.textContent=text,span.style.whiteSpace="pre",span.style.webkitUserSelect="auto",span.style.userSelect="all",document.body.appendChild(span);const t=window.getSelection(),e=window.document.createRange();t.removeAllRanges(),e.selectNode(span),t.addRange(e);let o=!1;try{o=window.document.execCommand("copy")}finally{t.removeAllRanges(),window.document.body.removeChild(span)}if(!o)throw n()}(text)}catch(e){throw e||t||n()}}}},1124:function(t,e,n){"use strict";n(1063)},1125:function(t,e,n){var o=n(64)((function(i){return i[1]}));o.push([t.i,'/*purgecss start ignore*/\nh2[data-v-05f1189b]{\n  font-size:1.875rem;\n  line-height:2.25rem;\n  font-weight:800;\n  letter-spacing:-0.025em\n}\n@media (min-width: 640px){\nh2[data-v-05f1189b]{\n    font-size:2.25rem;\n    line-height:2.5rem\n}\n}\np[data-v-05f1189b]{\n  --tw-text-opacity:1;\n  color:rgba(156, 163, 175, var(--tw-text-opacity))\n}\ntable[data-v-05f1189b]{\n  height:1px;\n  width:100%;\n  table-layout:fixed;\n  font-size:1.125rem;\n  line-height:1.75rem\n}\ntable thead tr th[data-v-05f1189b]{\n  padding-top:1rem;\n  padding-bottom:1rem;\n  text-align:center;\n  font-weight:500;\n  line-height:1.5rem;\n  --tw-text-opacity:1;\n  color:rgba(229, 231, 235, var(--tw-text-opacity))\n}\ntable thead tr th[data-v-05f1189b]:first-child{\n  --tw-bg-opacity:1;\n  background-color:rgba(31, 41, 55, var(--tw-bg-opacity));\n  font-size:1rem;\n  line-height:1.5rem\n}\ntable thead tr th[data-v-05f1189b]:last-child{\n  --tw-bg-opacity:1;\n  background-color:rgba(76, 29, 149, var(--tw-bg-opacity))\n}\ntable tbody tr td[data-v-05f1189b]{\n  padding-top:1.25rem;\n  padding-bottom:1.25rem;\n  text-align:center\n}\ntable tbody tr td[data-v-05f1189b]:first-child{\n  --tw-bg-opacity:1;\n  background-color:rgba(31, 41, 55, var(--tw-bg-opacity));\n  font-size:1rem;\n  line-height:1.5rem\n}\ntable tbody tr td[data-v-05f1189b]:last-child{\n  --tw-bg-opacity:1;\n  background-color:rgba(76, 29, 149, var(--tw-bg-opacity));\n  font-weight:800\n}\ntable tbody tr[data-v-05f1189b]:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(55, 65, 81, var(--tw-bg-opacity))\n}\ntable tbody tr:hover td[data-v-05f1189b]{\n  --tw-bg-opacity:1;\n  background-color:rgba(55, 65, 81, var(--tw-bg-opacity));\n  font-weight:400\n}\ntable tbody tr:hover td[data-v-05f1189b]:last-child{\n  --tw-bg-opacity:1;\n  background-color:rgba(109, 40, 217, var(--tw-bg-opacity));\n  font-weight:800;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n.tableTax tbody tr:hover td[data-v-05f1189b]:nth-child(2){\n  text-decoration:line-through\n}\n.inputs[data-v-05f1189b]{\n  margin-top:0.25rem;\n  display:grid;\n  grid-template-columns:repeat(6, minmax(0, 1fr));\n  gap:0.5rem\n}\n@media (min-width: 640px){\n.inputs[data-v-05f1189b]{\n    grid-template-columns:none;\n    display:flex;\n    align-items:center\n}\n}\n.input-code[data-v-05f1189b]{\n  display:block;\n  width:100%;\n  border-radius:0.375rem;\n  border-width:0px;\n  --tw-bg-opacity:1;\n  background-color:rgba(209, 213, 219, var(--tw-bg-opacity));\n  padding-top:1rem;\n  padding-bottom:1rem;\n  text-align:center;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:800;\n  --tw-text-opacity:1;\n  color:rgba(17, 24, 39, var(--tw-text-opacity))\n}\n.input-code[data-v-05f1189b]::-moz-placeholder{\n  --tw-placeholder-opacity:1;\n  color:rgba(229, 231, 235, var(--tw-placeholder-opacity))\n}\n.input-code[data-v-05f1189b]:-ms-input-placeholder{\n  --tw-placeholder-opacity:1;\n  color:rgba(229, 231, 235, var(--tw-placeholder-opacity))\n}\n.input-code[data-v-05f1189b]::placeholder{\n  --tw-placeholder-opacity:1;\n  color:rgba(229, 231, 235, var(--tw-placeholder-opacity))\n}\n.input-code[data-v-05f1189b]{\n  --tw-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n@media (min-width: 360px){\n.input-code[data-v-05f1189b]{\n    padding-top:1.25rem;\n    padding-bottom:1.25rem;\n    font-size:3rem;\n    line-height:1\n}\n}\n@media (min-width: 640px){\n.input-code[data-v-05f1189b]{\n    padding-top:1rem;\n    padding-bottom:1rem;\n    font-size:2.25rem;\n    line-height:2.5rem\n}\n}\n.input-code[data-v-05f1189b]:focus{\n  border-color:transparent;\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n  outline:2px solid transparent;\n  outline-offset:2px;\n  --tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n  --tw-ring-opacity:1;\n  --tw-ring-color:rgba(255, 255, 255, var(--tw-ring-opacity));\n  --tw-ring-offset-width:2px;\n  --tw-ring-offset-color:#7c3aed\n}\n.coupon[data-v-05f1189b]{\n  width:100%;\n  border-radius:0.375rem;\n  border-width:0px;\n  padding-top:1rem;\n  padding-bottom:1rem;\n  --tw-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  background-image:linear-gradient(to bottom right, var(--tw-gradient-stops));\n  --tw-gradient-from:#9ca3af;\n  --tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(156, 163, 175, 0));\n  --tw-gradient-stops:var(--tw-gradient-from), #d1d5db, var(--tw-gradient-to, rgba(209, 213, 219, 0));\n  --tw-gradient-to:#9ca3af;\n  text-align:center;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:800;\n  --tw-text-opacity:1;\n  color:rgba(17, 24, 39, var(--tw-text-opacity))\n}\n@media (min-width: 640px){\n.coupon[data-v-05f1189b]{\n    font-size:2.25rem;\n    line-height:2.5rem\n}\n}\n.coupon[data-v-05f1189b]{\n  letter-spacing:.3em\n}\n\n/*purgecss end ignore*/',""]),o.locals={},t.exports=o},1160:function(t,e,n){"use strict";n.r(e);var o=n(0),r=(n(24),n(21),n(66),n(2)),c=n.n(r),d=n(72),l=n(1123),f=n.n(l),m={scrollToTop:!0,name:"coupon",data:function(){return{code0:"",code1:"",code2:"",code3:"",code4:"",code5:"",code6:"",code7:"",binding:!1,generating:!1}},watch:{code0:function(){this.code0=d.a.onlyHexString(this.code0),this.code0&&this.$refs.code1.focus()},code1:function(){this.code1=d.a.onlyHexString(this.code1),this.code1&&this.$refs.code2.focus()},code2:function(){this.code2=d.a.onlyHexString(this.code2),this.code2&&this.$refs.code3.focus()},code3:function(){this.code3=d.a.onlyHexString(this.code3),this.code3&&this.$refs.code4.focus()},code4:function(){this.code4=d.a.onlyHexString(this.code4),this.code4&&this.$refs.code5.focus()},code5:function(){this.code5=d.a.onlyHexString(this.code5),this.code5&&this.$refs.code6.focus()},code6:function(){this.code6=d.a.onlyHexString(this.code6),this.code6&&this.$refs.code7.focus()},code7:function(){this.code7=d.a.onlyHexString(this.code7),this.code7&&this.$refs.use.focus()}},computed:{takerTax:function(){return this.couponUsed?new c.a(this.$store.state.bsc.takerTax.total).subn(1).toString():this.$store.state.bsc.takerTax.total},makerTax:function(){return this.couponUsed?new c.a(this.$store.state.bsc.makerTax.total).subn(1).toString():this.$store.state.bsc.makerTax.total},whaleTax:function(){return this.couponUsed?new c.a(this.$store.state.bsc.whaleTax.total).subn(1).toString():this.$store.state.bsc.whaleTax.total},code:function(){return this.code0+this.code1+this.code2+this.code3+this.code4+this.code5+this.code6+this.code7},codeDec:function(){return d.a.hex2dec(this.code)},coupon:function(){return d.a.dec2coupon(this.$store.state.wallet.coupon).toUpperCase()},couponUsed:function(){return d.a.dec2coupon(this.$store.state.wallet.couponUsed).toUpperCase()}},methods:{codeFocus:function(t){this.$refs["code"+t].focus(),this.$refs["code"+t].select()},use:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.binding=!0,t.code&&8===t.code.length){e.next=6;break}return e.next=4,t.$store.dispatch("warning/SET_WARNING",{title:t.$t("modal.info"),message:t.$t("pCoupon.codeEmpty__")});case 4:return t.binding=!1,e.abrupt("return");case 6:if("0"!==t.codeDec){e.next=11;break}return e.next=9,t.$store.dispatch("warning/SET_WARNING",{title:t.$t("modal.info"),message:t.$t("pCoupon.codeInvalid__")});case 9:return t.binding=!1,e.abrupt("return");case 11:return e.next=13,t.$nuxt.context.app.token.methods.getCoupon(t.codeDec).call().catch(t.onVerifyError);case 13:if(n=e.sent){e.next=19;break}return e.next=17,t.$store.dispatch("warning/SET_WARNING",{title:t.$t("modal.info"),message:t.$t("pCoupon.codeVerify__")+t.code});case 17:return t.binding=!1,e.abrupt("return");case 19:if(n.valid){e.next=24;break}return e.next=22,t.$store.dispatch("warning/SET_WARNING",{title:t.$t("modal.info"),message:t.$t("pCoupon.codeInvalid__")});case 22:return t.binding=!1,e.abrupt("return");case 24:if(t.codeDec!==t.$store.state.wallet.coupon){e.next=29;break}return e.next=27,t.$store.dispatch("warning/SET_WARNING",{title:t.$t("modal.info"),message:t.$t("pCoupon.codeYourOwn__")+t.code});case 27:return t.binding=!1,e.abrupt("return");case 29:return e.next=31,t.$nuxt.context.app.token.methods.useCoupon(t.codeDec).send({from:t.$store.state.wallet.account}).on("receipt",t.onUseReceipt).on("error",t.onUseError).catch(t.onUseError);case 31:case"end":return e.stop()}}),e)})))()},onVerifyError:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.error(">>> Page[coupon] getCoupon:",t.message);case 1:case"end":return e.stop()}}),e)})))()},onUseReceipt:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.status){n.next=4;break}return n.next=3,e.$nuxt.context.app.conn.tokenSync();case 3:e.binding=!1;case 4:case"end":return n.stop()}}),n)})))()},onUseError:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.binding=!1,n.next=3,e.$store.dispatch("warning/SET_WARNING",{title:e.$t("modal.txError")+" #"+t.code,message:t.message});case 3:case"end":return n.stop()}}),n)})))()},generate:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.generating=!0,"0"!==t.$store.state.wallet.balance||"0"!==t.$store.state.wallet.genesisDeposit){e.next=6;break}return e.next=4,t.$store.dispatch("warning/SET_WARNING",{title:t.$t("modal.info"),message:"Not holding HyperDeFi"});case 4:return t.generating=!1,e.abrupt("return");case 6:if(!t.coupon){e.next=11;break}return e.next=9,t.$store.dispatch("warning/SET_WARNING",{title:t.$t("modal.info"),message:"Already generated: "+t.coupon});case 9:return t.generating=!1,e.abrupt("return");case 11:return e.next=13,t.$nuxt.context.app.token.methods.genConpon().send({from:t.$store.state.wallet.account}).on("receipt",t.onGenerateReceipt).on("error",t.onGenerateError).catch(t.onGenerateError);case 13:case"end":return e.stop()}}),e)})))()},onGenerateReceipt:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.status){n.next=4;break}return n.next=3,e.$nuxt.context.app.conn.tokenSync();case 3:e.generating=!1;case 4:case"end":return n.stop()}}),n)})))()},onGenerateError:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.generating=!1,n.next=3,e.$store.dispatch("warning/SET_WARNING",{title:e.$t("modal.txError")+" #"+t.code,message:t.message});case 3:case"end":return n.stop()}}),n)})))()},copyCoupon:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()(t.coupon);case 2:case"end":return e.stop()}}),e)})))()}}},v=(n(1124),n(5)),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("LAutoWidth",{staticClass:"py-10 md:py-20"},[n("CH3",{scopedSlots:t._u([{key:"tag",fn:function(){return[t._v("\n      "+t._s(t.$t("pCoupon.tag"))+"\n    ")]},proxy:!0}])},[n("span",[t._v("\n      "+t._s(t.$t("pCoupon.title"))+"\n    ")])]),t._v(" "),n("LAutoWidth",{staticClass:"px-4 sm:px-6 lg:px-8"},[t.couponUsed?n("div",{staticClass:"mt-12 md:mt-24"},[n("h2",[t._v("\n        "+t._s(t.$t("pCoupon.used"))+"\n      ")]),t._v(" "),n("p",{staticClass:"mt-6"},[t._v("\n        "+t._s(t.$t("pCoupon.you_veAlreadyUsed__"))+"\n        "),n("span",{staticClass:"ml-2 font-mono font-extrabold text-2xl text-gray-300 tracking-wider"},[t._v(t._s(t.couponUsed))])]),t._v(" "),n("p",{staticClass:"mt-3"},[t._v("\n        "+t._s(t.$t("pCoupon.WalletAddress"))+"\n        "),n("span",{staticClass:"font-mono"},[t._v(t._s(t.$store.state.wallet.account))]),t._v("\n        "+t._s(t.$t("pCoupon.canGetA"))+"\n        "),n("span",{staticClass:"font-bold text-gray-300"},[t._v("\n          "+t._s(t.$t("pCoupon.permanent__"))+"\n        ")]),t._v("\n        "+t._s(t.$t("pCoupon.forFutureTransactions_"))+"\n      ")]),t._v(" "),n("div",{staticClass:"max-w-xl mx-auto mt-8 sm:mt-16"},[n("table",{staticClass:"tableTax"},[n("thead",[n("tr",[n("th",{staticClass:"w-1/3",attrs:{scope:"col"}},[t._v("\n              "+t._s(t.$t("sTax.type"))+"\n            ")]),t._v(" "),n("th",{staticClass:"w-1/3",attrs:{scope:"col"}},[t._v("\n              "+t._s(t.$t("pCoupon.DefaultTax"))+"\n            ")]),t._v(" "),n("th",{staticClass:"w-1/3",attrs:{scope:"col"}},[t._v("\n              "+t._s(t.$t("pCoupon.DiscountedTax"))+"\n            ")])])]),t._v(" "),n("tbody",{staticClass:"border-t border-gray-600 divide-y divide-gray-600"},[n("tr",[n("td",[t._v("\n              "+t._s(t.$t("sTax.taker"))+"\n            ")]),t._v(" "),n("td",[t._v("\n               "+t._s(t.$store.state.bsc.takerTax.total)+"% \n            ")]),t._v(" "),n("td",[t._v("\n              "+t._s(t.takerTax)+"%\n            ")])]),t._v(" "),n("tr",[n("td",[t._v("\n              "+t._s(t.$t("sTax.maker"))+"\n            ")]),t._v(" "),n("td",[t._v("\n               "+t._s(t.$store.state.bsc.makerTax.total)+"% \n            ")]),t._v(" "),n("td",[t._v("\n              "+t._s(t.makerTax)+"%\n            ")])]),t._v(" "),n("tr",[n("td",[t._v("\n              "+t._s(t.$t("sTax.whale"))+"\n            ")]),t._v(" "),n("td",[t._v("\n               "+t._s(t.$store.state.bsc.whaleTax.total)+"% \n            ")]),t._v(" "),n("td",[t._v("\n              "+t._s(t.whaleTax)+"%\n            ")])])])])])]):n("div",{staticClass:"mt-12 md:mt-24"},[n("h2",[t._v("\n        "+t._s(t.$t("pCoupon.use"))+"\n      ")]),t._v(" "),n("p",{staticClass:"mt-6"},[t._v("\n        "+t._s(t.$t("pCoupon.IfYouHaveACoupon__"))+"\n      ")]),t._v(" "),n("div",{staticClass:"mt-12 mx-auto max-w-xl"},[n("div",{staticClass:"space-y-2"},[n("label",{attrs:{for:"input-code0"}},[t._v("\n            "+t._s(t.$t("pCoupon.couponCode"))+"\n          ")]),t._v(" "),n("div",{staticClass:"space-y-4"},[n("div",{staticClass:"inputs"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.code0,expression:"code0"}],ref:"code0",staticClass:"input-code",attrs:{id:"input-code0",type:"text",autocomplete:"off",maxlength:"1"},domProps:{value:t.code0},on:{input:function(e){e.target.composing||(t.code0=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.code1,expression:"code1"}],ref:"code1",staticClass:"input-code",attrs:{id:"input-code1",type:"text",autocomplete:"off",maxlength:"1"},domProps:{value:t.code1},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete","Del"])?null:t.codeFocus(0)},input:function(e){e.target.composing||(t.code1=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.code2,expression:"code2"}],ref:"code2",staticClass:"input-code",attrs:{id:"input-code2",type:"text",autocomplete:"off",maxlength:"1"},domProps:{value:t.code2},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete","Del"])?null:t.codeFocus(1)},input:function(e){e.target.composing||(t.code2=e.target.value)}}}),t._v(" "),n("div",{staticClass:"block sm:hidden"}),t._v(" "),n("div",{staticClass:"block sm:hidden"}),t._v(" "),n("div",{staticClass:"block sm:hidden"}),t._v(" "),n("div",{staticClass:"block sm:hidden h-full flex items-center justify-end pr-1 font-mono font-extrabold text-4xl text-gray-500"},[t._v("-")]),t._v(" "),n("div",{staticClass:"hidden sm:block sm:font-mono sm:font-extrabold sm:text-4xl sm:text-gray-500"},[t._v("-")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.code3,expression:"code3"}],ref:"code3",staticClass:"input-code",attrs:{id:"input-code3",type:"text",autocomplete:"off",maxlength:"1"},domProps:{value:t.code3},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete","Del"])?null:t.codeFocus(2)},input:function(e){e.target.composing||(t.code3=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.code4,expression:"code4"}],ref:"code4",staticClass:"input-code",attrs:{id:"input-code4",type:"text",autocomplete:"off",maxlength:"1"},domProps:{value:t.code4},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete","Del"])?null:t.codeFocus(3)},input:function(e){e.target.composing||(t.code4=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.code5,expression:"code5"}],ref:"code5",staticClass:"input-code",attrs:{id:"input-code5",type:"text",autocomplete:"off",maxlength:"1"},domProps:{value:t.code5},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete","Del"])?null:t.codeFocus(4)},input:function(e){e.target.composing||(t.code5=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.code6,expression:"code6"}],ref:"code6",staticClass:"input-code",attrs:{id:"input-code6",type:"text",autocomplete:"off",maxlength:"1"},domProps:{value:t.code6},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete","Del"])?null:t.codeFocus(5)},input:function(e){e.target.composing||(t.code6=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.code7,expression:"code7"}],ref:"code7",staticClass:"input-code",attrs:{id:"input-code7",type:"text",autocomplete:"off",maxlength:"1"},domProps:{value:t.code7},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete","Del"])?null:t.codeFocus(6)},input:function(e){e.target.composing||(t.code7=e.target.value)}}})]),t._v(" "),t.$store.state.wallet.account?n("div",[n("button",{ref:"use",staticClass:"hp-btn-lg hp-btn-violet hp-btn-center space-x-3",on:{click:t.use}},[n("span",[t._v("\n                  "+t._s(t.$t("pCoupon.bindCouponCode"))+"\n                ")]),t._v(" "),n("IconDiceHyperSpin",{directives:[{name:"show",rawName:"v-show",value:t.binding,expression:"binding"}],staticClass:"inline w-7 h-7"})],1)]):n("div",[n("BtnConnectWallet",{staticClass:"hp-btn-md hp-btn-violet hp-btn-center"})],1)])])])]),t._v(" "),n("div",{staticClass:"mt-16 sm:mt-24"},[n("h2",[t._v("\n        "+t._s(t.$t("pCoupon.ShareCouponCode"))+"\n      ")]),t._v(" "),n("p",{staticClass:"mt-6"},[t._v("\n        "+t._s(t.$t("pCoupon.YouCanPromote__"))+"\n      ")]),t._v(" "),n("p",{staticClass:"mt-3"},[t._v("\n        "+t._s(t.$t("pCoupon.StartWithHolding__"))+"\n      ")]),t._v(" "),n("div",{staticClass:"mt-12 max-w-xl mx-auto"},[t.coupon?n("div",[n("div",[t._v("\n            "+t._s(t.$t("pCoupon.couponCode"))+"\n          ")]),t._v(" "),n("div",{staticClass:"mt-2 coupon"},[t._v("\n            "+t._s(t.coupon)+"\n          ")]),t._v(" "),n("div",{staticClass:"mt-1 text-right"},[t._v("\n            "+t._s(t.$t("pCoupon.Counter_"))+"\n            "),n("CBN",{attrs:{value:t.$store.state.wallet.visitors}})],1),t._v(" "),n("button",{staticClass:"mt-4 hp-btn-xl hp-btn-rose hp-btn-center space-x-3",on:{click:t.copyCoupon}},[n("HeroIconOutlineClipboardCopy",{staticClass:"w-7 h-7 text-rose-300"}),t._v(" "),n("span",[t._v("\n              "+t._s(t.$t("pCoupon.copy__"))+"\n            ")])],1)]):n("div",[t.$store.state.wallet.account?n("div",[n("button",{staticClass:"hp-btn-lg hp-btn-emerald hp-btn-center space-x-3",on:{click:t.generate}},[n("span",[t._v("\n                "+t._s(t.$t("pCoupon.generate"))+"\n              ")]),t._v(" "),n("IconDiceHyperSpin",{directives:[{name:"show",rawName:"v-show",value:t.generating,expression:"generating"}],staticClass:"inline w-7 h-7"})],1)]):n("div",[n("BtnConnectWallet",{staticClass:"hp-btn-md hp-btn-violet hp-btn-center"})],1)])])]),t._v(" "),n("div",{staticClass:"mt-16 sm:mt-24"},[n("h2",[t._v("\n        "+t._s(t.$t("pCoupon.PromotionBonus"))+"\n        "+t._s(t.$store.state.bsc.global.bonus.total)+"%\n        "+t._s(t.$t("pCoupon.in3Levels"))+"\n      ")]),t._v(" "),n("p",{staticClass:"mt-6"},[t._v("\n        "+t._s(t.$store.state.bsc.global.bonus.level0)+"%\n        "+t._s(t.$t("pCoupon.fromDirect__"))+"\n        "+t._s(t.$store.state.bsc.global.bonus.level1)+"% + "+t._s(t.$store.state.bsc.global.bonus.level2)+"%\n        "+t._s(t.$t("pCoupon.fromIndirect__"))+"\n      ")]),t._v(" "),n("div",{staticClass:"max-w-xl mx-auto mt-8 sm:mt-16"},[n("table",[n("thead",[n("tr",[n("th",{staticClass:"w-3/5",attrs:{scope:"col"}},[t._v("\n              "+t._s(t.$t("pCoupon.From"))+"\n            ")]),t._v(" "),n("th",{staticClass:"w-2/5",attrs:{scope:"col"}},[t._v("\n              "+t._s(t.$t("pCoupon.ShareAirdrop"))+"\n            ")])])]),t._v(" "),n("tbody",{staticClass:"border-t border-gray-600 divide-y divide-gray-600"},[n("tr",[n("td",[t._v("\n              "+t._s(t.$t("pCoupon._level0"))+"\n            ")]),t._v(" "),n("td",[t._v("\n              "+t._s(t.$store.state.bsc.global.bonus.level0)+"%\n            ")])]),t._v(" "),n("tr",[n("td",[t._v("\n              "+t._s(t.$t("pCoupon._level1"))+"\n            ")]),t._v(" "),n("td",[t._v("\n              "+t._s(t.$store.state.bsc.global.bonus.level1)+"%\n            ")])]),t._v(" "),n("tr",[n("td",[t._v("\n              "+t._s(t.$t("pCoupon._level2"))+"\n            ")]),t._v(" "),n("td",[t._v("\n              "+t._s(t.$store.state.bsc.global.bonus.level2)+"%\n            ")])])])])])])])],1)}),[],!1,null,"05f1189b",null);e.default=component.exports;installComponents(component,{CH3:n(842).default,IconDiceHyperSpin:n(847).default,BtnConnectWallet:n(428).default,CBN:n(836).default,HeroIconOutlineClipboardCopy:n(1003).default,LAutoWidth:n(151).default})},832:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},833:function(t,e,n){var o=n(13),r=n(51),c=n(27),d=n(832),l=o("".replace),f="["+d+"]",m=RegExp("^"+f+f+"*"),v=RegExp(f+f+"*$"),h=function(t){return function(e){var n=c(r(e));return 1&t&&(n=l(n,m,"")),2&t&&(n=l(n,v,"")),n}};t.exports={start:h(1),end:h(2),trim:h(3)}},834:function(t,e,n){var content=n(841);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("7f27037d",content,!0,{sourceMap:!1})},835:function(t,e,n){"use strict";var o=n(29),r=n(6),c=n(13),d=n(153),l=n(41),f=n(30),m=n(269),v=n(97),h=n(193),_=n(426),w=n(16),x=n(127).f,y=n(82).f,C=n(40).f,k=n(839),$=n(833).trim,N="Number",S=r.Number,E=S.prototype,T=r.TypeError,R=c("".slice),I=c("".charCodeAt),D=function(t){var e=_(t,"number");return"bigint"==typeof e?e:O(e)},O=function(t){var e,n,o,r,c,d,l,code,f=_(t,"number");if(h(f))throw T("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=$(f),43===(e=I(f,0))||45===e){if(88===(n=I(f,2))||120===n)return NaN}else if(48===e){switch(I(f,1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+f}for(d=(c=R(f,2)).length,l=0;l<d;l++)if((code=I(c,l))<48||code>r)return NaN;return parseInt(c,o)}return+f};if(d(N,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var A,H=function(t){var e=arguments.length<1?0:S(D(t)),n=this;return v(E,n)&&w((function(){k(n)}))?m(Object(e),n,H):e},M=o?x(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),B=0;M.length>B;B++)f(S,A=M[B])&&!f(H,A)&&C(H,A,y(S,A));H.prototype=E,E.constructor=H,l(r,N,H)}},836:function(t,e,n){"use strict";n.r(e);n(835),n(50),n(96),n(837),n(268),n(66),n(45),n(194);var o={name:"CBN",props:{value:{required:!0},decimals:{type:Number,default:0},padding:{type:Number,default:0},keep:{type:Boolean,default:!1},price:{type:Boolean,default:!1},token:{type:Boolean,default:!1}},computed:{numDecimals:function(){return this.token?parseInt(this.$store.state.bsc.metadata.tokenDecimals):this.price?parseInt(this.$store.state.bsc.metadata.priceDecimals):this.decimals},step1:function(){var s=String(this.value).trim().replace(new RegExp("^0+"),""),t={a:"0",b:null};if(this.numDecimals>0)if(this.numDecimals<s.length){var e=s.length-this.numDecimals;t.a=s.slice(0,e),t.b=s.slice(e)}else for(t.b=s;this.numDecimals>t.b.length;)t.b="0"+t.b;else t.a=s;if(t.b&&!this.keep&&(t.b=t.b.replace(new RegExp("0+$"),"")),this.padding)if(t.b||(t.b=""),this.padding>t.b.length)for(;this.padding>t.b.length;)t.b=t.b+"0";else this.padding<t.b.length&&(t.b=t.b.slice(0,this.padding));return t},display:function(){for(var t={a:[],b:[]},a=this.step1.a;3<a.length;)t.a.unshift(a.slice(-3)),a=a.slice(0,a.length-3);a.length&&t.a.unshift(a);var b=this.step1.b;if(b){for(;3<b.length;)t.b.push(b.slice(0,3)),b=b.slice(3);b.length&&t.b.push(b)}return 0===t.a.length&&(t.a=["0"]),t.a=t.a.join(","),t}}},r=(n(840),n(5)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"cbn-number"},[n("span",{staticClass:"cbn-integer"},[t._v(t._s(t.display.a))]),t.display.b.length?n("span",{staticClass:"cbn-dot"},[t._v(".")]):t._e(),t._l(t.display.b,(function(e){return n("span",{staticClass:"cbn-decimal"},[t._v(t._s(e))])}))],2)}),[],!1,null,"77384a03",null);e.default=component.exports},837:function(t,e,n){"use strict";var o=n(10),r=n(833).trim;o({target:"String",proto:!0,forced:n(838)("trim")},{trim:function(){return r(this)}})},838:function(t,e,n){var o=n(152).PROPER,r=n(16),c=n(832);t.exports=function(t){return r((function(){return!!c[t]()||"​᠎"!=="​᠎"[t]()||o&&c[t].name!==t}))}},839:function(t,e,n){var o=n(13);t.exports=o(1..valueOf)},840:function(t,e,n){"use strict";n(834)},841:function(t,e,n){var o=n(64)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\n.cbn-decimal[data-v-77384a03]{\n  margin-right:.2rem;\n  font-size:90%\n}\n.cbn-decimal[data-v-77384a03]:last-child{\n  margin-right:0\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},842:function(t,e,n){"use strict";n.r(e);var o={name:"CH3"},r=n(5),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hdf-ch3"},[t.$slots.tag?n("header",[t._t("tag")],2):t._e(),t._v(" "),n("h3",[t._t("default")],2),t._v(" "),t.$slots.desc?n("main",[t._t("desc")],2):t._e()])}),[],!1,null,"31b9e2c9",null);e.default=component.exports},847:function(t,e,n){"use strict";n.r(e);var o={name:"IconDiceHyperSpin"},r=n(5),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"flex-shrink-0",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"}},[e("g",{staticStyle:{"transform-origin":"50% 50%",transform:"rotate(0deg) scale(0.8, 0.8)"}},[e("g",{staticStyle:{"transform-origin":"512px 512px",transform:"rotate(0deg)",animation:"1.66667s linear 0s infinite normal forwards running spin-1c9b16c3-3b0c-4d0f-8d7b-bf997165f8c8"}},[e("path",{attrs:{fill:"currentColor",d:"M769.143,152l-514.286,-0c-56.812,-0 -102.857,46.045 -102.857,102.857l-0,514.286c-0,56.812 46.045,102.857 102.857,102.857l514.286,0c56.812,0 102.857,-46.045 102.857,-102.857l0,-514.286c0,-56.812 -46.045,-102.857 -102.857,-102.857Zm-385.714,617.143c-28.399,-0 -77.143,-48.745 -77.143,-77.143c-0,-28.398 48.744,-77.143 77.143,-77.143c28.398,0 77.142,48.745 77.142,77.143c0,28.398 -48.744,77.143 -77.142,77.143Zm257.142,-154.286c-28.398,0 -77.142,-48.745 -77.142,-77.143c-0,-28.398 48.744,-77.143 77.142,-77.143c28.399,0 77.143,48.745 77.143,77.143c0,28.399 -48.744,77.143 -77.143,77.143Zm0,-205.714c-28.398,-0 -77.142,-48.745 -77.142,-77.143c-0,-28.398 48.744,-77.143 77.142,-77.143c28.399,0 77.143,48.745 77.143,77.143c0,28.398 -48.744,77.143 -77.143,77.143Z"}})])])])}),[],!1,null,"7c38ba44",null);e.default=component.exports}}]);