(window.webpackJsonp=window.webpackJsonp||[]).push([[98,16,23,76],{1055:function(t,e,n){"use strict";n.r(e);var o=n(802),l=n.n(o),r=n(74),d=(n(2),{name:"SDataBoard",data:function(){return{launchCountdownFinished:!1,genesisStartedCountdownFinished:!1,genesisEndedCountdownFinished:!1}},computed:{moment:function(){return l.a},tokenAddress:function(){return"0xA53E10e33fA5bd63A4232d42D675dC47BFb4DC1e"},hdfLink:function(){return r.a},tradeAllowed:function(){return"0"!==this.$store.state.bsc.genesis.liquidityCreatedTimestamp}},methods:{setLaunchCountdownFinished:function(t){this.launchCountdownFinished=t},setGenesisStartedCountdownFinished:function(t){this.genesisStartedCountdownFinished=t},setGenesisEndedCountdownFinished:function(t){this.genesisEndedCountdownFinished=t}}}),c=n(5),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("LAutoWidth",{staticClass:"relative py-12 pt-24 px-4 sm:px-8",class:{"sm:py-24":!t.$store.state.wallet.account}},[t.genesisStartedCountdownFinished?t.genesisEndedCountdownFinished?t.launchCountdownFinished?t._e():n("div",{staticClass:"mb-12 md:mb-20 text-center"},[n("h2",{staticClass:"text-base text-violet-300 font-semibold tracking-wide uppercase"},[t._v("\n        "+t._s(t.$t("sDataBoard.launchTag"))+"\n      ")]),t._v(" "),n("h3",{staticClass:"mt-2 text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl text-gray-200"},[n("CCountdown",{attrs:{timestamp:1e3*t.$store.state.bsc.global.launchTimestamp,"show-ds":!0},on:{finished:t.setLaunchCountdownFinished}})],1),t._v(" "),t.tradeAllowed?t._e():n("p",{staticClass:"mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto"},[n("span",[t._v("\n          "+t._s(t.$t("pGenesis.nowTheLastDeposit"))+"\n        ")]),t._v(" "),n("nuxt-link",{staticClass:"hdf-a-colored",attrs:{to:t.localePath("/genesis")}},[t._v("\n          "+t._s(t.$t("sDataBoard.visitGenesis"))+"\n        ")])],1)]):n("div",{staticClass:"mb-12 md:mb-20 text-center"},[n("h2",{staticClass:"text-base text-violet-300 font-semibold tracking-wide uppercase"},[t._v("\n        "+t._s(t.$t("sDataBoard.genesisTag"))+"\n      ")]),t._v(" "),n("h3",{staticClass:"mt-2 text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl text-gray-200"},[n("CCountdown",{attrs:{timestamp:1e3*t.$store.state.bsc.genesis.endTimestamp,"show-ds":!0},on:{finished:t.setGenesisEndedCountdownFinished}})],1),t._v(" "),n("p",{staticClass:"mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto"},[n("span",[t._v("\n          "+t._s(t.$t("sDataBoard.genesisEndText"))+"\n          "+t._s(t.moment(1e3*t.$store.state.bsc.genesis.endTimestamp))+"\n        ")]),t._v(" "),n("nuxt-link",{staticClass:"hdf-a-colored",attrs:{to:t.localePath("/genesis")}},[t._v("\n          "+t._s(t.$t("sDataBoard.visitGenesis"))+"\n        ")])],1)]):n("div",{staticClass:"mb-12 md:mb-20 text-center"},[n("h2",{staticClass:"text-base text-violet-300 font-semibold tracking-wide uppercase"},[t._v("\n        "+t._s(t.$t("sDataBoard.genesisTag"))+"\n      ")]),t._v(" "),n("h3",{staticClass:"mt-2 text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl text-gray-200"},[n("CCountdown",{attrs:{timestamp:1e3*t.$store.state.bsc.genesis.startTimestamp,"show-ds":!0},on:{finished:t.setGenesisStartedCountdownFinished}})],1),t._v(" "),n("p",{staticClass:"mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto"},[n("span",[t._v("\n          "+t._s(t.$t("sDataBoard.genesisStartText"))+"\n          "+t._s(t.moment(1e3*t.$store.state.bsc.genesis.startTimestamp))+"\n        ")]),t._v(" "),n("nuxt-link",{staticClass:"hdf-a-colored",attrs:{to:t.localePath("/genesis")}},[t._v("\n          "+t._s(t.$t("sDataBoard.visitGenesis"))+"\n        ")])],1)]),t._v(" "),n("h2",{staticClass:"text-sm font-semibold text-violet-300 tracking-wide uppercase"},[t._v("\n      "+t._s(t.$t("sDataBoard.tag"))+"\n    ")]),t._v(" "),n("p",{staticClass:"mt-3 text-2xl font-extrabold text-white break-all"},[t._v("\n      "+t._s(t.$t("sDataBoard.contractAddress_"))+t._s(t.tokenAddress)+"\n    ")]),t._v(" "),n("p",{staticClass:"mt-2 text-base text-gray-400 break-all"},[t._v("\n      "+t._s(t.$t("sDataBoard.launchTime"))+"\n      "+t._s(t.moment(1e3*t.$store.state.bsc.global.launchTimestamp))+"\n    ")]),t._v(" "),n("p",{staticClass:"mt-2 text-base text-gray-400 break-all"},[t._v("\n      "+t._s(t.$t("sDataBoard.tokenNameSymbol_"))+"\n      "),n("span",{staticClass:"font-bold text-white"},[t._v(t._s(t.$store.state.bsc.metadata.tokenSymbol))]),t._v("\n      "+t._s(t.$t("sDataBoard.with"))+"\n      "),n("span",{staticClass:"font-bold text-white"},[t._v("\n        "+t._s(t.$store.state.bsc.metadata.tokenDecimals)+"\n        "+t._s(t.$t("sDataBoard.decimals"))+"\n      ")])]),t._v(" "),n("div",{staticClass:"mt-5 inline-flex rounded-md shadow"},[n("a",{staticClass:"hdf-a-track bg-violet-600 hover:bg-violet-700 space-x-2",attrs:{target:"_blank",href:t.hdfLink.exploreToken(t.tokenAddress)}},[n("HeroIconSolidCursorClick",{staticClass:"h-5 w-5"}),t._v(" "),n("span",[t._v("\n          "+t._s(t.$t("global.trackWithBSCScan"))+"\n        ")])],1)]),t._v(" "),n("div",{staticClass:"mt-12 grid grid-cols-1 gap-y-12 gap-x-6 lg:grid-cols-2"},[n("p",[n("span",{staticClass:"block text-2xl font-bold text-violet-300"},[t._v("\n          $"),n("CBN",{attrs:{value:String(t.$store.state.bsc.metadata.price),price:!0,padding:18}}),t._v(" USD\n        ")],1),t._v(" "),n("span",{staticClass:"mt-1 block text-base text-gray-300"},[n("span",{staticClass:"font-medium text-white"},[t._v("\n            "+t._s(t.$t("sDataBoard.latestPrice_"))+"\n          ")]),t._v("\n          "+t._s(t.$t("sDataBoard.providedBy"))+"\n          "),t.$store.state.bsc.genesis.liquidityCreatedTimestamp>"0"?n("CPancakeTo",{staticClass:"font-medium text-violet-300"},[t._v("\n            PancakeSwap Finance\n          ")]):n("nuxt-link",{staticClass:"font-medium text-violet-300",attrs:{to:t.localePath("/genesis")}},[t._v("\n            "+t._s(t.$t("siteNav.genesis"))+"\n          ")])],1)]),t._v(" "),n("p",[n("span",{staticClass:"block text-2xl font-bold text-violet-300"},[t._v("\n          $"),n("CBN",{attrs:{value:String(t.$store.state.bsc.marketValue.cap),price:!0,padding:6}}),t._v(" USD\n        ")],1),t._v(" "),n("span",{staticClass:"mt-1 block text-base text-gray-300"},[n("span",{staticClass:"font-medium text-white"},[t._v("\n            "+t._s(t.$t("sDataBoard.totalMarketValue_"))+"\n          ")]),t._v("\n          "+t._s(t.$t("sDataBoard.ofTotalSupplyCap"))+"\n        ")])]),t._v(" "),n("p",[n("span",{staticClass:"block text-2xl font-bold text-violet-300"},[n("CBN",{attrs:{value:String(t.$store.state.bsc.supply.totalSupply),token:!0}}),t._v(" HyperDeFi\n        ")],1),t._v(" "),n("span",{staticClass:"mt-1 block text-base text-gray-300"},[n("span",{staticClass:"font-medium text-white"},[t._v("\n            "+t._s(t.$t("sDataBoard.currentSupply_"))+"\n          ")]),t._v("\n          "+t._s(t.$t("sDataBoard.blackHoleIncluded"))+"\n        ")])]),t._v(" "),n("p",[n("span",{staticClass:"block text-2xl font-bold text-violet-300"},[n("CBN",{attrs:{value:t.$store.state.bsc.supply.circulating,token:!0}}),t._v(" HyperDeFi\n        ")],1),t._v(" "),n("span",{staticClass:"mt-1 block text-base text-gray-300"},[n("span",{staticClass:"font-medium text-white"},[t._v("\n            "+t._s(t.$t("sDataBoard.currentCirculating"))+"\n          ")])])]),t._v(" "),n("p",[n("span",{staticClass:"block text-2xl font-bold text-violet-300"},[n("CBN",{attrs:{value:t.$store.state.bsc.supply.cap,token:!0}}),t._v(" HyperDeFi\n        ")],1),t._v(" "),n("span",{staticClass:"mt-1 block text-base text-gray-300"},[n("span",{staticClass:"font-medium text-white"},[t._v("\n            "+t._s(t.$t("sDataBoard.totalSupply_"))+"\n          ")]),t._v("\n          "+t._s(t.$t("sDataBoard.fixed"))+"\n        ")])]),t._v(" "),n("p",[n("span",{staticClass:"block text-2xl font-bold text-violet-300"},[n("CBN",{attrs:{value:t.$store.state.bsc.supply.burnedRatio,decimals:3,padding:3}}),t._v(" %\n\n        ")],1),t._v(" "),n("span",{staticClass:"mt-1 block text-base text-gray-300"},[n("span",{staticClass:"font-medium text-white"},[t._v("\n            "+t._s(t.$t("sDataBoard.burned"))+"\n          ")]),t._v(" "),n("CBN",{attrs:{value:t.$store.state.bsc.supply.burned,token:!0}}),t._v(" HyperDeFi\n          "+t._s(t.$t("sDataBoard.held__"))+"\n          "),n("a",{staticClass:"hdf-a-colored",attrs:{target:"_blank",href:t.hdfLink.exploreToken4address(t.$store.state.bsc.globalAccounts.burn)}},[t._v("\n            "+t._s(t.$t("sDataBoard.blackHole"))+"\n          ")]),t._v("\n          "+t._s(t.$t("sDataBoard.increasing_"))+"\n        ")],1)])]),t._v(" "),n("div",{staticClass:"mt-6 border-l-8 border-gray-700 py-4 px-4 leading-6 text-base text-gray-500"},[n("p",[t._v("\n        "+t._s(t.$t("sDataBoard.thereIsA__"))+"\n        "),n("CBN",{attrs:{value:t.$store.state.bsc.supply.gate,token:!0}}),t._v(" HyperDeFi\n        "+t._s(t.$t("sDataBoard.willBeMinted__"))+"\n        "),n("CBN",{attrs:{value:t.$store.state.bsc.global.initLiquidity,token:!0}}),t._v(" HyperDeFi\n        "+t._s(t.$t("sDataBoard.executeByContract__"))+"\n        "),n("a",{staticClass:"hover:text-gray-300",attrs:{target:"_blank",href:t.hdfLink.exploreToken4address(t.$store.state.bsc.globalAccounts.zero)}},[t._v("\n          "+t._s(t.$t("sDataBoard.clickToMintHistory"))+"\n        ")])],1)]),t._v(" "),t.$store.state.bsc.metadata.holders>"1"||!t.$store.state.wallet.account?n("div",{staticClass:"mt-12 grid grid-cols-1 gap-y-12 gap-x-6 lg:grid-cols-2"},[t.$store.state.bsc.metadata.holders>"1"?n("p",[n("span",{staticClass:"block text-2xl font-bold text-violet-300"},[n("CBN",{attrs:{value:String(t.$store.state.bsc.metadata.holders)}})],1),t._v(" "),n("span",{staticClass:"mt-1 block text-base text-gray-300"},[n("span",{staticClass:"font-medium text-white"},[t._v("\n            "+t._s(t.$t("sDataBoard.holders_"))+"\n          ")]),t._v("\n          "+t._s(t.$t("sDataBoard._holding_"))+"\n        ")])]):t._e(),t._v(" "),t.$store.state.wallet.account?t._e():n("p",{staticClass:"transition duration-300 ease-out"},[n("span",{staticClass:"block inline-flex items-center space-x-2 text-2xl font-bold text-violet-300"},[n("HeroIconSolidFire",{staticClass:"inline w-6 h-6"}),t._v(" "),n("span",[t._v("\n            "+t._s(t.$t("sDataBoard.checkYour"))+"\n            "),n("span",{staticClass:"text-gray-200"},[t._v("\n              "+t._s(t.$t("sDataBoard.harvest_"))+"\n            ")])])],1),t._v(" "),n("span",{staticClass:"mt-1 block text-base text-gray-300"},[n("BtnConnectWallet",{staticClass:"inline-flex text-base focus:outline-none"},[n("span",{staticClass:"font-medium text-white"},[t._v("\n              "+t._s(t.$t("sDataBoard.clickHere"))+"\n            ")]),t._v(" "),n("span",{staticClass:"text-violet-300"},[t._v("\n              "+t._s(t.$t("sDataBoard.toConnectWallet_"))+"\n            ")])])],1)])]):t._e()]),t._v(" "),t.$store.state.wallet.account?n("SHarvest"):t._e()],1)}),[],!1,null,"2d6ca86b",null);e.default=component.exports;installComponents(component,{CCountdown:n(960).default,HeroIconSolidCursorClick:n(819).default,CBN:n(807).default,CPancakeTo:n(957).default,HeroIconSolidFire:n(961).default,BtnConnectWallet:n(413).default,LAutoWidth:n(143).default,SHarvest:n(1056).default})},819:function(t,e,n){"use strict";n.r(e);var o={name:"HeroIconSolidCursorClick"},l=n(5),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z","clip-rule":"evenodd"}})])}),[],!1,null,"32f487c0",null);e.default=component.exports},821:function(t,e,n){var content=n(959);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("1cf913f8",content,!0,{sourceMap:!1})},957:function(t,e,n){"use strict";n.r(e);var o=n(74),l={name:"CPancakeTo",computed:{hdfLink:function(){return o.a}}},r=n(5),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("a",{attrs:{target:"_blank",href:t.hdfLink.pancakeSwapTo()}},[t._t("default")],2)}),[],!1,null,"5c94d5aa",null);e.default=component.exports},958:function(t,e,n){"use strict";n(821)},959:function(t,e,n){var o=n(57)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\n.ds[data-v-d20d4ce2]{\n  font-size:80%\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},960:function(t,e,n){"use strict";n.r(e);var o=n(1),l=(n(22),n(806),n(89),n(802)),r=n.n(l),d={name:"CCountdown",props:{timestamp:{type:Number,required:!0},mayHideHours:{type:Boolean,default:!1},showDs:{type:Boolean,default:!1}},data:function(){return{interval:null,finished:!1,h:0,m:0,s:0,ds:0,hh:"00",mm:"00",ss:"00"}},computed:{showHours:function(){return this.h>0||!this.mayHideHours}},watch:{timestamp:function(){this.resetInterval(),this.setCountdownInterval()}},mounted:function(){this.setCountdownInterval()},methods:{resetInterval:function(){this.interval&&(clearInterval(this.interval),this.interval=null)},clearDisplay:function(){this.ds=0,this.s=0,this.m=0,this.h=0,this.ss="00",this.mm="00",this.hh="00"},touchCountdown:function(){this.finished=!1;var t=r.a.duration(r()(this.timestamp).diff(r()()));if(t.asMilliseconds()>0){if(this.finished)return null;this.$emit("finished",!1),this.ds=Math.floor(t.milliseconds()/100),this.s=t.seconds(),this.m=t.minutes(),this.h=Math.floor(t.asHours()),this.ss=this.s<10?"0"+this.s:this.s,this.mm=this.m<10?"0"+this.m:this.m,this.hh=this.h<10?"0"+this.h:this.h}else this.finished=!0,clearInterval(this.interval),this.$emit("finished",!0),this.clearDisplay(),window.setTimeout(this.clearDisplay,1e3)},setCountdownInterval:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.interval||(t.showDs?t.interval=window.setInterval(t.touchCountdown,100):t.interval=window.setInterval(t.touchCountdown,1e3));case 1:case"end":return e.stop()}}),e)})))()}}},c=(n(958),n(5)),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"inline-flex items-baseline"},[t.showHours?n("span",[t._v("\n    "+t._s(t.hh)+":\n  ")]):t._e(),t._v(" "),n("span",[t._v("\n    "+t._s(t.mm)+":\n  ")]),t._v(" "),n("span",[t._v("\n    "+t._s(t.ss)+"\n  ")]),t._v(" "),t.showDs?n("span",{staticClass:"ds"},[t._v("\n    ."+t._s(t.ds)+"\n  ")]):t._e()])}),[],!1,null,"d20d4ce2",null);e.default=component.exports},964:function(t,e,n){var map={"./af":822,"./af.js":822,"./ar":823,"./ar-dz":824,"./ar-dz.js":824,"./ar-kw":825,"./ar-kw.js":825,"./ar-ly":826,"./ar-ly.js":826,"./ar-ma":827,"./ar-ma.js":827,"./ar-sa":828,"./ar-sa.js":828,"./ar-tn":829,"./ar-tn.js":829,"./ar.js":823,"./az":830,"./az.js":830,"./be":831,"./be.js":831,"./bg":832,"./bg.js":832,"./bm":833,"./bm.js":833,"./bn":834,"./bn-bd":835,"./bn-bd.js":835,"./bn.js":834,"./bo":836,"./bo.js":836,"./br":837,"./br.js":837,"./bs":838,"./bs.js":838,"./ca":839,"./ca.js":839,"./cs":840,"./cs.js":840,"./cv":841,"./cv.js":841,"./cy":842,"./cy.js":842,"./da":843,"./da.js":843,"./de":844,"./de-at":845,"./de-at.js":845,"./de-ch":846,"./de-ch.js":846,"./de.js":844,"./dv":847,"./dv.js":847,"./el":848,"./el.js":848,"./en-au":849,"./en-au.js":849,"./en-ca":850,"./en-ca.js":850,"./en-gb":851,"./en-gb.js":851,"./en-ie":852,"./en-ie.js":852,"./en-il":853,"./en-il.js":853,"./en-in":854,"./en-in.js":854,"./en-nz":855,"./en-nz.js":855,"./en-sg":856,"./en-sg.js":856,"./eo":857,"./eo.js":857,"./es":858,"./es-do":859,"./es-do.js":859,"./es-mx":860,"./es-mx.js":860,"./es-us":861,"./es-us.js":861,"./es.js":858,"./et":862,"./et.js":862,"./eu":863,"./eu.js":863,"./fa":864,"./fa.js":864,"./fi":865,"./fi.js":865,"./fil":866,"./fil.js":866,"./fo":867,"./fo.js":867,"./fr":868,"./fr-ca":869,"./fr-ca.js":869,"./fr-ch":870,"./fr-ch.js":870,"./fr.js":868,"./fy":871,"./fy.js":871,"./ga":872,"./ga.js":872,"./gd":873,"./gd.js":873,"./gl":874,"./gl.js":874,"./gom-deva":875,"./gom-deva.js":875,"./gom-latn":876,"./gom-latn.js":876,"./gu":877,"./gu.js":877,"./he":878,"./he.js":878,"./hi":879,"./hi.js":879,"./hr":880,"./hr.js":880,"./hu":881,"./hu.js":881,"./hy-am":882,"./hy-am.js":882,"./id":883,"./id.js":883,"./is":884,"./is.js":884,"./it":885,"./it-ch":886,"./it-ch.js":886,"./it.js":885,"./ja":887,"./ja.js":887,"./jv":888,"./jv.js":888,"./ka":889,"./ka.js":889,"./kk":890,"./kk.js":890,"./km":891,"./km.js":891,"./kn":892,"./kn.js":892,"./ko":893,"./ko.js":893,"./ku":894,"./ku.js":894,"./ky":895,"./ky.js":895,"./lb":896,"./lb.js":896,"./lo":897,"./lo.js":897,"./lt":898,"./lt.js":898,"./lv":899,"./lv.js":899,"./me":900,"./me.js":900,"./mi":901,"./mi.js":901,"./mk":902,"./mk.js":902,"./ml":903,"./ml.js":903,"./mn":904,"./mn.js":904,"./mr":905,"./mr.js":905,"./ms":906,"./ms-my":907,"./ms-my.js":907,"./ms.js":906,"./mt":908,"./mt.js":908,"./my":909,"./my.js":909,"./nb":910,"./nb.js":910,"./ne":911,"./ne.js":911,"./nl":912,"./nl-be":913,"./nl-be.js":913,"./nl.js":912,"./nn":914,"./nn.js":914,"./oc-lnc":915,"./oc-lnc.js":915,"./pa-in":916,"./pa-in.js":916,"./pl":917,"./pl.js":917,"./pt":918,"./pt-br":919,"./pt-br.js":919,"./pt.js":918,"./ro":920,"./ro.js":920,"./ru":921,"./ru.js":921,"./sd":922,"./sd.js":922,"./se":923,"./se.js":923,"./si":924,"./si.js":924,"./sk":925,"./sk.js":925,"./sl":926,"./sl.js":926,"./sq":927,"./sq.js":927,"./sr":928,"./sr-cyrl":929,"./sr-cyrl.js":929,"./sr.js":928,"./ss":930,"./ss.js":930,"./sv":931,"./sv.js":931,"./sw":932,"./sw.js":932,"./ta":933,"./ta.js":933,"./te":934,"./te.js":934,"./tet":935,"./tet.js":935,"./tg":936,"./tg.js":936,"./th":937,"./th.js":937,"./tk":938,"./tk.js":938,"./tl-ph":939,"./tl-ph.js":939,"./tlh":940,"./tlh.js":940,"./tr":941,"./tr.js":941,"./tzl":942,"./tzl.js":942,"./tzm":943,"./tzm-latn":944,"./tzm-latn.js":944,"./tzm.js":943,"./ug-cn":945,"./ug-cn.js":945,"./uk":946,"./uk.js":946,"./ur":947,"./ur.js":947,"./uz":948,"./uz-latn":949,"./uz-latn.js":949,"./uz.js":948,"./vi":950,"./vi.js":950,"./x-pseudo":951,"./x-pseudo.js":951,"./yo":952,"./yo.js":952,"./zh-cn":953,"./zh-cn.js":953,"./zh-hk":954,"./zh-hk.js":954,"./zh-mo":955,"./zh-mo.js":955,"./zh-tw":956,"./zh-tw.js":956};function o(t){var e=l(t);return n(e)}function l(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=l,t.exports=o,o.id=964}}]);