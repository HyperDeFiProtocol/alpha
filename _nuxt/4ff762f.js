(window.webpackJsonp=window.webpackJsonp||[]).push([[91,8,14,68,84],{741:function(t,e,n){var content=n(749);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(78).default)("09dabbb3",content,!0,{sourceMap:!1})},742:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},743:function(t,e,n){var l=n(43),c=n(22),r="["+n(742)+"]",o=RegExp("^"+r+r+"*"),f=RegExp(r+r+"*$"),m=function(t){return function(e){var n=c(l(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(f,"")),n}};t.exports={start:m(1),end:m(2),trim:m(3)}},744:function(t,e,n){"use strict";n.r(e);n(745),n(48),n(90),n(746),n(233),n(89),n(49),n(164);var l={name:"CBN",props:{value:{type:[String,Number],required:!0},decimals:{type:Number,default:0},padding:{type:Number,default:0},keep:{type:Boolean,default:!1},price:{type:Boolean,default:!1},token:{type:Boolean,default:!1}},computed:{numDecimals:function(){return this.token?parseInt(this.$store.state.bsc.metadata.tokenDecimals):this.price?parseInt(this.$store.state.bsc.metadata.priceDecimals):this.decimals},step1:function(){var s=String(this.value).trim().replace(new RegExp("^0+"),""),t={a:"0",b:null};if(this.numDecimals>0)if(this.numDecimals<s.length){var e=s.length-this.numDecimals;t.a=s.slice(0,e),t.b=s.slice(e)}else for(t.b=s;this.numDecimals>t.b.length;)t.b="0"+t.b;else t.a=s;if(t.b&&!this.keep&&(t.b=t.b.replace(new RegExp("0+$"),"")),this.padding)if(t.b||(t.b=""),this.padding>t.b.length)for(;this.padding>t.b.length;)t.b=t.b+"0";else this.padding<t.b.length&&(t.b=t.b.slice(0,this.padding));return t},display:function(){for(var t={a:[],b:[]},a=this.step1.a;3<a.length;)t.a.unshift(a.slice(-3)),a=a.slice(0,a.length-3);a.length&&t.a.unshift(a);var b=this.step1.b;if(b){for(;3<b.length;)t.b.push(b.slice(0,3)),b=b.slice(3);b.length&&t.b.push(b)}return 0===t.a.length&&(t.a=["0"]),t.a=t.a.join(","),t}}},c=(n(748),n(6)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"cbn-number"},[n("span",{staticClass:"cbn-integer"},[t._v(t._s(t.display.a))]),t.display.b.length?n("span",{staticClass:"cbn-dot"},[t._v(".")]):t._e(),t._l(t.display.b,(function(e){return n("span",{staticClass:"cbn-decimal"},[t._v(t._s(e))])}))],2)}),[],!1,null,"711baa99",null);e.default=component.exports},745:function(t,e,n){"use strict";var l=n(25),c=n(17),r=n(132),o=n(36),f=n(26),m=n(91),d=n(234),h=n(131),v=n(370),x=n(14),_=n(92),w=n(108).f,C=n(68).f,y=n(32).f,k=n(743).trim,N="Number",I=c.Number,$=I.prototype,S=m(_($))==N,E=function(t){if(h(t))throw TypeError("Cannot convert a Symbol value to a number");var e,n,l,c,r,o,f,code,m=v(t,"number");if("string"==typeof m&&m.length>2)if(43===(e=(m=k(m)).charCodeAt(0))||45===e){if(88===(n=m.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(m.charCodeAt(1)){case 66:case 98:l=2,c=49;break;case 79:case 111:l=8,c=55;break;default:return+m}for(o=(r=m.slice(2)).length,f=0;f<o;f++)if((code=r.charCodeAt(f))<48||code>c)return NaN;return parseInt(r,l)}return+m};if(r(N,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var T,P=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof P&&(S?x((function(){$.valueOf.call(n)})):m(n)!=N)?d(new I(E(e)),n,P):E(e)},W=l?w(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),A=0;W.length>A;A++)f(I,T=W[A])&&!f(P,T)&&y(P,T,C(I,T));P.prototype=$,$.constructor=P,o(c,N,P)}},746:function(t,e,n){"use strict";var l=n(9),c=n(743).trim;l({target:"String",proto:!0,forced:n(747)("trim")},{trim:function(){return c(this)}})},747:function(t,e,n){var l=n(14),c=n(742);t.exports=function(t){return l((function(){return!!c[t]()||"​᠎"!="​᠎"[t]()||c[t].name!==t}))}},748:function(t,e,n){"use strict";n(741)},749:function(t,e,n){var l=n(77)((function(i){return i[1]}));l.push([t.i,"/*purgecss start ignore*/\n.cbn-decimal[data-v-711baa99]{\n  margin-right:.2rem;\n  font-size:90%\n}\n.cbn-decimal[data-v-711baa99]:last-child{\n  margin-right:0\n}\n\n/*purgecss end ignore*/",""]),l.locals={},t.exports=l},889:function(t,e,n){"use strict";n.r(e);var l=n(67),c={name:"CPancakeTo",computed:{hdfLink:function(){return l.a}}},r=n(6),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("a",{attrs:{target:"_blank",href:t.hdfLink.pancakeSwapTo()}},[t._t("default")],2)}),[],!1,null,"5c94d5aa",null);e.default=component.exports},896:function(t,e,n){"use strict";n.r(e);var l={name:"IconPancakeSwap"},c=n(6),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"}},[n("path",{attrs:{fill:"#633001",d:"M6.38,5.584c-0.46,-2.462 1.429,-4.737 3.934,-4.737c2.21,-0 4.002,1.792 4.002,4.002l0,4.935c0.553,-0.039 1.115,-0.06 1.684,-0.06c0.547,0 1.087,0.019 1.619,0.055l-0,-4.93c-0,-2.21 1.791,-4.002 4.002,-4.002c2.505,-0 4.394,2.275 3.934,4.737l-1.083,5.8c3.717,1.623 6.528,4.441 6.528,7.983l0,2.143c0,2.913 -1.927,5.352 -4.621,6.998c-2.715,1.659 -6.387,2.645 -10.379,2.645c-3.992,0 -7.664,-0.986 -10.379,-2.645c-2.694,-1.646 -4.621,-4.085 -4.621,-6.998l0,-2.143c0,-3.523 2.782,-6.331 6.468,-7.957l-1.088,-5.826Zm16.704,6.562l1.268,-6.787c0.319,-1.709 -0.993,-3.288 -2.731,-3.288c-1.534,0 -2.778,1.244 -2.778,2.778l-0,6.279c-0.402,-0.051 -0.81,-0.092 -1.224,-0.122c-0.531,-0.037 -1.071,-0.057 -1.619,-0.057c-0.57,0 -1.132,0.021 -1.684,0.062c-0.414,0.031 -0.822,0.073 -1.224,0.126l-0,-6.288c-0,-1.534 -1.244,-2.778 -2.778,-2.778c-1.738,0 -3.05,1.579 -2.731,3.288l1.272,6.809c-3.975,1.477 -6.631,4.149 -6.631,7.199l0,2.143c0,4.65 6.168,8.419 13.776,8.419c7.608,-0 13.776,-3.769 13.776,-8.419l-0,-2.143c-0,-3.066 -2.683,-5.749 -6.692,-7.221Z"}}),t._v(" "),n("path",{attrs:{fill:"#fedc90",d:"M29.776,21.51c-0,4.65 -6.168,8.419 -13.776,8.419c-7.608,-0 -13.775,-3.769 -13.775,-8.419l-0,-2.143l27.551,0l-0,2.143Z"}}),t._v(" "),n("path",{attrs:{fill:"#d1884f",d:"M7.583,5.359c-0.319,-1.709 0.993,-3.288 2.731,-3.288c1.534,0 2.778,1.244 2.778,2.778l-0,6.288c0.937,-0.123 1.91,-0.188 2.908,-0.188c0.975,0 1.926,0.062 2.843,0.179l-0,-6.279c-0,-1.534 1.244,-2.778 2.778,-2.778c1.738,0 3.05,1.579 2.731,3.288l-1.268,6.787c4.009,1.472 6.692,4.155 6.692,7.221c-0,4.65 -6.168,8.419 -13.776,8.419c-7.608,-0 -13.775,-3.769 -13.775,-8.419c-0,-3.05 2.655,-5.722 6.63,-7.199l-1.272,-6.809Z"}}),t._v(" "),n("path",{attrs:{fill:"#633001",d:"M12.173,18.755c0,1.268 -0.685,2.296 -1.53,2.296c-0.846,-0 -1.531,-1.028 -1.531,-2.296c0,-1.268 0.685,-2.296 1.531,-2.296c0.845,0 1.53,1.028 1.53,2.296Z"}}),t._v(" "),n("path",{attrs:{fill:"#633001",d:"M22.735,18.755c-0,1.268 -0.686,2.296 -1.531,2.296c-0.845,-0 -1.531,-1.028 -1.531,-2.296c0,-1.268 0.686,-2.296 1.531,-2.296c0.845,0 1.531,1.028 1.531,2.296Z"}})])}),[],!1,null,"d7c42476",null);e.default=component.exports},973:function(t,e,n){"use strict";n.r(e);var l={name:"SWelcome",computed:{chainName:function(){return"BSC Chain Testnet"},chainId:function(){return 97}}},c=n(6),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden"},[n("LAutoWidth",{staticClass:"lg:px-8"},[n("div",{staticClass:"lg:grid lg:grid-cols-2 lg:gap-8"},[n("div",{staticClass:"mx-auto max-w-lg px-4 sm:max-w-3xl sm:px-6 md:text-center lg:px-0 lg:text-left lg:flex lg:items-center"},[n("div",{staticClass:"lg:py-24"},[n("CPancakeTo",{staticClass:"inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"},[n("span",{staticClass:"px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-violet-600 rounded-full"},[t._v("\n              "+t._s(t.$t("sWelcome.pancakeSwap"))+"\n            ")]),t._v(" "),n("span",{staticClass:"ml-4 text-sm"},[t._v("\n              "+t._s(t.$t("sWelcome.tradeHyperDeFi"))+"\n            ")]),t._v(" "),n("svg",{staticClass:"ml-2 w-5 h-5 text-gray-500",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])]),t._v(" "),n("h1",{staticClass:"mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl"},[n("span",{staticClass:"block"},[t._v("\n              "+t._s(t.$t("sWelcome.welcomeTo"))+"\n            ")]),t._v(" "),n("span",{staticClass:"block mt-1 md:mt-2 text-violet-400"},[t._v("\n              "+t._s(t.$t("sWelcome.hyperDeFiProtocol"))+"\n            ")])]),t._v(" "),n("p",{staticClass:"mt-3 leading-loose lg:leading-extra-loose xl:leading-extra-loose text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"},[t._v("\n            "+t._s(t.$t("sWelcome.text"))+"\n          ")]),t._v(" "),n("div",{staticClass:"mt-10 sm:mt-12"},[n("div",{staticClass:"md:max-w-3xl sm:mx-auto lg:mx-0"},[n("div",{staticClass:"xl:flex space-y-3 xl:space-x-3 xl:space-y-0"},[n("div",{staticClass:"min-w-0 flex-1"},[n("div",{staticClass:"block w-full px-4 py-3 rounded-md border-0 bg-white font-mono text-base text-gray-900 hover:bg-violet-600 hover:text-white"},[t._v("\n                    $ "),n("CBN",{attrs:{value:String(t.$store.state.bsc.metadata.price),price:!0,padding:18}}),t._v(" USD\n                  ")],1)]),t._v(" "),n("div",[t.$store.state.bsc.presale.liquidityCreatedTimestamp>"0"?n("CPancakeTo",{staticClass:"w-full inline-flex justify-center space-x-2 py-3 px-4 rounded-md shadow bg-violet-600 text-white font-medium hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-300 focus:ring-offset-gray-900"},[n("IconPancakeSwap",{staticClass:"inline w-6 h-6"}),t._v(" "),n("span",[t._v("\n                      "+t._s(t.$t("sWelcome.buyOnPancakeSwap"))+"\n                    ")])],1):n("nuxt-link",{staticClass:"w-full inline-flex justify-center space-x-2 py-3 px-10 rounded-md shadow bg-violet-600 text-white font-medium hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-300 focus:ring-offset-gray-900",attrs:{to:t.localePath("/presale")}},[t._v("\n                    "+t._s(t.$t("sWelcome.visitPresale"))+"\n                  ")])],1)]),t._v(" "),n("p",{staticClass:"mt-3 text-sm text-gray-300 sm:mt-4"},[t._v("\n                "+t._s(t.$t("sWelcome._providedBy"))+"\n                "),n("CPancakeTo",{staticClass:"hdf-a-colored"},[t._v("\n                  PancakeSwap Finance\n                ")]),t._v("\n                "+t._s(t.$t("sWelcome.onBlockNumber"))+"\n                #"),n("CBN",{attrs:{value:String(t.$store.state.bsc.blockNumber)}}),t._v("\n                "+t._s(t.$t("sWelcome.of"))+"\n                "+t._s(t.chainName)+",\n                "+t._s(t.$t("sWelcome.chainId"))+"\n                #"+t._s(t.chainId)+"\n              ")],1)])])],1)]),t._v(" "),n("div",{staticClass:"mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative"},[n("div",{staticClass:"mx-auto max-w-md px-4 sm:max-w-4xl sm:px-6 lg:max-w-none lg:px-0"},[n("img",{staticClass:"w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none",attrs:{src:"https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg",alt:""}})])])])])],1)}),[],!1,null,"34f3c1ea",null);e.default=component.exports;installComponents(component,{CPancakeTo:n(889).default,CBN:n(744).default,IconPancakeSwap:n(896).default,LAutoWidth:n(163).default})}}]);