(window.webpackJsonp=window.webpackJsonp||[]).push([[77,29,51,53],{740:function(t,e,n){var content=n(748);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(79).default)("09dabbb3",content,!0,{sourceMap:!1})},743:function(t,e,n){"use strict";n.r(e);n(744),n(48),n(91),n(745),n(233),n(90),n(49),n(164);var r={name:"CBN",props:{value:{type:[String,Number],required:!0},decimals:{type:Number,default:0},padding:{type:Number,default:0},keep:{type:Boolean,default:!1},price:{type:Boolean,default:!1},token:{type:Boolean,default:!1}},computed:{numDecimals:function(){return this.token?parseInt(this.$store.state.bsc.metadata.tokenDecimals):this.price?parseInt(this.$store.state.bsc.metadata.priceDecimals):this.decimals},step1:function(){var s=String(this.value).trim().replace(new RegExp("^0+"),""),t={a:"0",b:null};if(this.numDecimals>0)if(this.numDecimals<s.length){var e=s.length-this.numDecimals;t.a=s.slice(0,e),t.b=s.slice(e)}else for(t.b=s;this.numDecimals>t.b.length;)t.b="0"+t.b;else t.a=s;if(t.b&&!this.keep&&(t.b=t.b.replace(new RegExp("0+$"),"")),this.padding)if(t.b||(t.b=""),this.padding>t.b.length)for(;this.padding>t.b.length;)t.b=t.b+"0";else this.padding<t.b.length&&(t.b=t.b.slice(0,this.padding));return t},display:function(){for(var t={a:[],b:[]},a=this.step1.a;3<a.length;)t.a.unshift(a.slice(-3)),a=a.slice(0,a.length-3);a.length&&t.a.unshift(a);var b=this.step1.b;if(b){for(;3<b.length;)t.b.push(b.slice(0,3)),b=b.slice(3);b.length&&t.b.push(b)}return 0===t.a.length&&(t.a=["0"]),t.a=t.a.join(","),t}}},o=(n(747),n(7)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"cbn-number"},[n("span",{staticClass:"cbn-integer"},[t._v(t._s(t.display.a))]),t.display.b.length?n("span",{staticClass:"cbn-dot"},[t._v(".")]):t._e(),t._l(t.display.b,(function(e){return n("span",{staticClass:"cbn-decimal"},[t._v(t._s(e))])}))],2)}),[],!1,null,"711baa99",null);e.default=component.exports},745:function(t,e,n){"use strict";var r=n(10),o=n(742).trim;r({target:"String",proto:!0,forced:n(746)("trim")},{trim:function(){return o(this)}})},746:function(t,e,n){var r=n(15),o=n(741);t.exports=function(t){return r((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},747:function(t,e,n){"use strict";n(740)},748:function(t,e,n){var r=n(78)((function(i){return i[1]}));r.push([t.i,".cbn-decimal[data-v-711baa99]{\n  margin-right:.2rem;\n  font-size:90%\n}\n.cbn-decimal[data-v-711baa99]:last-child{\n  margin-right:0\n}",""]),r.locals={},t.exports=r},750:function(t,e,n){"use strict";n.r(e);var r={name:"HeroIconSolidCursorClick"},o=n(7),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z","clip-rule":"evenodd"}})])}),[],!1,null,"32f487c0",null);e.default=component.exports},896:function(t,e,n){var map={"./af":752,"./af.js":752,"./ar":753,"./ar-dz":754,"./ar-dz.js":754,"./ar-kw":755,"./ar-kw.js":755,"./ar-ly":756,"./ar-ly.js":756,"./ar-ma":757,"./ar-ma.js":757,"./ar-sa":758,"./ar-sa.js":758,"./ar-tn":759,"./ar-tn.js":759,"./ar.js":753,"./az":760,"./az.js":760,"./be":761,"./be.js":761,"./bg":762,"./bg.js":762,"./bm":763,"./bm.js":763,"./bn":764,"./bn-bd":765,"./bn-bd.js":765,"./bn.js":764,"./bo":766,"./bo.js":766,"./br":767,"./br.js":767,"./bs":768,"./bs.js":768,"./ca":769,"./ca.js":769,"./cs":770,"./cs.js":770,"./cv":771,"./cv.js":771,"./cy":772,"./cy.js":772,"./da":773,"./da.js":773,"./de":774,"./de-at":775,"./de-at.js":775,"./de-ch":776,"./de-ch.js":776,"./de.js":774,"./dv":777,"./dv.js":777,"./el":778,"./el.js":778,"./en-au":779,"./en-au.js":779,"./en-ca":780,"./en-ca.js":780,"./en-gb":781,"./en-gb.js":781,"./en-ie":782,"./en-ie.js":782,"./en-il":783,"./en-il.js":783,"./en-in":784,"./en-in.js":784,"./en-nz":785,"./en-nz.js":785,"./en-sg":786,"./en-sg.js":786,"./eo":787,"./eo.js":787,"./es":788,"./es-do":789,"./es-do.js":789,"./es-mx":790,"./es-mx.js":790,"./es-us":791,"./es-us.js":791,"./es.js":788,"./et":792,"./et.js":792,"./eu":793,"./eu.js":793,"./fa":794,"./fa.js":794,"./fi":795,"./fi.js":795,"./fil":796,"./fil.js":796,"./fo":797,"./fo.js":797,"./fr":798,"./fr-ca":799,"./fr-ca.js":799,"./fr-ch":800,"./fr-ch.js":800,"./fr.js":798,"./fy":801,"./fy.js":801,"./ga":802,"./ga.js":802,"./gd":803,"./gd.js":803,"./gl":804,"./gl.js":804,"./gom-deva":805,"./gom-deva.js":805,"./gom-latn":806,"./gom-latn.js":806,"./gu":807,"./gu.js":807,"./he":808,"./he.js":808,"./hi":809,"./hi.js":809,"./hr":810,"./hr.js":810,"./hu":811,"./hu.js":811,"./hy-am":812,"./hy-am.js":812,"./id":813,"./id.js":813,"./is":814,"./is.js":814,"./it":815,"./it-ch":816,"./it-ch.js":816,"./it.js":815,"./ja":817,"./ja.js":817,"./jv":818,"./jv.js":818,"./ka":819,"./ka.js":819,"./kk":820,"./kk.js":820,"./km":821,"./km.js":821,"./kn":822,"./kn.js":822,"./ko":823,"./ko.js":823,"./ku":824,"./ku.js":824,"./ky":825,"./ky.js":825,"./lb":826,"./lb.js":826,"./lo":827,"./lo.js":827,"./lt":828,"./lt.js":828,"./lv":829,"./lv.js":829,"./me":830,"./me.js":830,"./mi":831,"./mi.js":831,"./mk":832,"./mk.js":832,"./ml":833,"./ml.js":833,"./mn":834,"./mn.js":834,"./mr":835,"./mr.js":835,"./ms":836,"./ms-my":837,"./ms-my.js":837,"./ms.js":836,"./mt":838,"./mt.js":838,"./my":839,"./my.js":839,"./nb":840,"./nb.js":840,"./ne":841,"./ne.js":841,"./nl":842,"./nl-be":843,"./nl-be.js":843,"./nl.js":842,"./nn":844,"./nn.js":844,"./oc-lnc":845,"./oc-lnc.js":845,"./pa-in":846,"./pa-in.js":846,"./pl":847,"./pl.js":847,"./pt":848,"./pt-br":849,"./pt-br.js":849,"./pt.js":848,"./ro":850,"./ro.js":850,"./ru":851,"./ru.js":851,"./sd":852,"./sd.js":852,"./se":853,"./se.js":853,"./si":854,"./si.js":854,"./sk":855,"./sk.js":855,"./sl":856,"./sl.js":856,"./sq":857,"./sq.js":857,"./sr":858,"./sr-cyrl":859,"./sr-cyrl.js":859,"./sr.js":858,"./ss":860,"./ss.js":860,"./sv":861,"./sv.js":861,"./sw":862,"./sw.js":862,"./ta":863,"./ta.js":863,"./te":864,"./te.js":864,"./tet":865,"./tet.js":865,"./tg":866,"./tg.js":866,"./th":867,"./th.js":867,"./tk":868,"./tk.js":868,"./tl-ph":869,"./tl-ph.js":869,"./tlh":870,"./tlh.js":870,"./tr":871,"./tr.js":871,"./tzl":872,"./tzl.js":872,"./tzm":873,"./tzm-latn":874,"./tzm-latn.js":874,"./tzm.js":873,"./ug-cn":875,"./ug-cn.js":875,"./uk":876,"./uk.js":876,"./ur":877,"./ur.js":877,"./uz":878,"./uz-latn":879,"./uz-latn.js":879,"./uz.js":878,"./vi":880,"./vi.js":880,"./x-pseudo":881,"./x-pseudo.js":881,"./yo":882,"./yo.js":882,"./zh-cn":883,"./zh-cn.js":883,"./zh-hk":884,"./zh-hk.js":884,"./zh-mo":885,"./zh-mo.js":885,"./zh-tw":886,"./zh-tw.js":886};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=896},897:function(t,e,n){"use strict";n.r(e);var r={name:"HeroIconOutlineClock"},o=n(7),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"}})])}),[],!1,null,"1976f32a",null);e.default=component.exports},899:function(t,e,n){"use strict";n.r(e);var r={name:"HeroIconSolidBadgeCheck"},o=n(7),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"}})])}),[],!1,null,"03c350e6",null);e.default=component.exports},908:function(t,e,n){var content=n(942);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(79).default)("7634ac64",content,!0,{sourceMap:!1})},941:function(t,e,n){"use strict";n(908)},942:function(t,e,n){var r=n(78)((function(i){return i[1]}));r.push([t.i,".hdf-stat div dt[data-v-87d788d0]{\n  --tw-text-opacity:1;\n  color:rgba(253, 230, 138, var(--tw-text-opacity))\n}\ntbody tr[data-v-87d788d0]:nth-child(odd){\n  --tw-bg-opacity:1;\n  background-color:rgba(55, 65, 81, var(--tw-bg-opacity))\n}\ntbody tr[data-v-87d788d0]:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(124, 45, 18, var(--tw-bg-opacity))\n}\ntbody tr:hover td[data-v-87d788d0]{\n  --tw-text-opacity:1;\n  color:rgba(254, 215, 170, var(--tw-text-opacity))\n}",""]),r.locals={},t.exports=r},982:function(t,e,n){"use strict";n.r(e);var r,o=n(1),l=(n(21),n(90),n(22),n(38)),c=n.n(l),d=n(739),m=n.n(d),f=n(68),h=c.a.utils.BN,v={name:"SFeeFomo",data:function(){return{oCounter:0,oAmount:"0",oMarketValue:"0",oTransactions:[],iCounter:0,iAmount:"0",iMarketValue:"0",timerStep:{h:"0",m:"0",s:"0"}}},computed:{explorer:function(){return f.a},next:function(){return this.isZero(this.$store.state.bsc.fomo.next)?"0x...":this.$store.state.bsc.fomo.next},fomo:function(){return this.$store.state.bsc.fomo}},watch:{"$store.state.bsc.blockNumber":(r=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.load();case 2:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.load();case 2:case"end":return e.stop()}}),e)})))()},methods:{isZero:function(address){return address===this.$store.state.bsc.globalAccounts.zero},load:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,l,c,i,d,f,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=m.a.duration(1e3*t.$store.state.bsc.fomo.timestampStep),t.timerStep.s=n.seconds(),t.timerStep.m=n.minutes(),t.timerStep.h=n.hours(),e.next=6,t.$nuxt.context.app.token.getPastEvents("Transfer",{filter:{from:t.$store.state.bsc.globalAccounts.fomo},fromBlock:0,toBlock:"latest"}).catch(function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.error(">>> SFeeFomo:",e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 6:if(r=e.sent){for(r.reverse(),l=new h,c=[],i=0;i<r.length;i++)l=l.add(new h(r[i].returnValues.value)),i<10&&c.push({blockNumber:String(r[i].blockNumber),txHash:r[i].transactionHash,account:r[i].returnValues.to,amount:r[i].returnValues.value});t.oTransactions=c,t.oCounter=r.length,t.oAmount=l.toString()}return e.next=10,t.$nuxt.context.app.token.getPastEvents("Transfer",{filter:{to:t.$store.state.bsc.globalAccounts.fomo},fromBlock:0,toBlock:"latest"}).catch(function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.error(">>> SFeeFomo:",e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 10:if(d=e.sent){for(d.reverse(),f=new h,v=0;v<d.length;v++)f=f.add(new h(d[v].returnValues.value));t.iCounter=d.length,t.iAmount=f.toString(),t.iMarketValue=f.mul(t.$store.state.bsc.metadata.bnPrice).div(t.$store.state.bsc.metadata.bnDiv).toString()}case 12:case"end":return e.stop()}}),e)})))()}}},j=(n(941),n(7)),component=Object(j.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hdf-section-fee"},[n("div",{staticClass:"text-center"},[n("span",{staticClass:"span-icon bg-orange-50 text-orange-700"},[n("HeroIconOutlineClock",{staticClass:"h-8 w-8"})],1)]),t._v(" "),n("LAutoWidth",{staticClass:"auto-layout"},[n("main",[n("div",{staticClass:"header1"},[n("h2",{staticClass:"text-orange-400"},[t._v("\n            "+t._s(t.$t("sFeeFomo.title"))+"\n          ")]),t._v(" "),n("p",[t._v("\n            "+t._s(t.$t("sFeeFomo.text"))+"\n          ")])]),t._v(" "),n("div",{staticClass:"body2 to-orange-900 from-yellow-800 text-orange-300"},[n("h3",[t._v("\n            "+t._s(t.$t("sFee.forEachTransaction"))+"\n          ")]),t._v(" "),n("p",[t._v("\n            "+t._s(t.$t("sFee.take"))+"\n            "),t.$store.state.bsc.takerFee.fomo>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.takerFee.fomo)+"%\n              "+t._s(t.$t("sFee.fromTaker"))+"\n            ")]):t._e(),t._v(" "),t.$store.state.bsc.makerFee.fomo>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.makerFee.fomo)+"%\n              "+t._s(t.$t("sFee.fromMaker"))+"\n            ")]):t._e(),t._v(" "),t.$store.state.bsc.whaleFee.fomo>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.whaleFee.fomo)+"%\n              "+t._s(t.$t("sFee.fromWhale"))+"\n            ")]):t._e(),t._v("\n            "+t._s(t.$t("sFeeFomo.thenDeposit__"))+"\n            "),t.timerStep.h>"0"?n("span",[t._v(t._s(t.timerStep.h)+" "+t._s(t.$t("sFeeFomo.hours")))]):t._e(),t._v(" "),t.timerStep.m>"0"?n("span",[t._v(t._s(t.timerStep.m)+" "+t._s(t.$t("sFeeFomo.minutes")))]):t._e(),t._v(" "),t.timerStep.s>"0"?n("span",[t._v(t._s(t.timerStep.s)+" "+t._s(t.$t("sFeeFomo.seconds")))]):t._e(),t._v("\n            "+t._s(t.$t("sFeeFomo.ifNoOther__"))+"\n          ")]),t._v(" "),t.$store.state.bsc.supply.fomo>"0"?n("div",{staticClass:"mt-5 inline-flex rounded-md shadow"},[n("a",{staticClass:"hdf-a-track bg-yellow-700 hover:bg-yellow-600 space-x-2",attrs:{target:"_blank",href:t.explorer.exploreToken4address(t.$store.state.bsc.globalAccounts.fomo)}},[n("HeroIconSolidCursorClick",{staticClass:"h-5 w-5"}),t._v(" "),n("span",[t._v("\n                "+t._s(t.$t("sFee.trackAll"))+"\n                "+t._s(t.oCounter+t.iCounter)+"\n                "+t._s(t.$t("sFeeFomo.trackFomoTransfers"))+"\n              ")])],1)]):t._e()])]),t._v(" "),t.oCounter>"0"?n("dl",{staticClass:"hdf-stat lg:max-w-6xl grid grid-cols-1 lg:grid-cols-2"},[n("div",[n("dt",[t._v("\n            "+t._s(t.$t("sFeeFomo.statFomoPool"))+"\n          ")]),t._v(" "),n("dd",[n("CBN",{attrs:{value:t.$store.state.bsc.supply.fomo,token:!0}})],1)]),t._v(" "),n("div",[n("dt",{staticClass:"order-2 mt-1 text-base leading-6 font-medium text-yellow-100"},[t._v("\n            "+t._s(t.$t("sFeeFomo.statFomoPrizeTransfers"))+"\n          ")]),t._v(" "),n("dd",{staticClass:"order-1 text-3xl font-extrabold text-white"},[n("CBN",{attrs:{value:t.oCounter}})],1)])]):t._e(),t._v(" "),t.oTransactions.length?n("div",[n("h6",{staticClass:"mt-12 md:mt-16 ml-2 text-sm font-semibold text-orange-400 tracking-wide uppercase"},[t._v("\n          "+t._s(t.$t("txTable.latest"))+"\n          "+t._s(t.oTransactions.length)+"\n          "+t._s(t.$t("sFeeFomo.fomoPrizeHistory"))+"\n        ")]),t._v(" "),n("div",{staticClass:"md:hidden mt-4"},[n("ul",{staticClass:"hdf-tx-ul"},t._l(t.oTransactions,(function(e){return n("li",[n("span",{staticClass:"span-icon-wrap"},[n("HeroIconSolidBadgeCheck")],1),t._v(" "),n("div",{staticClass:"div-body"},[n("div",[n("h4",[n("CBN",{attrs:{value:e.amount}}),t._v("\n                    HyperDeFi\n                  ")],1),t._v(" "),n("p",[n("a",{attrs:{target:"_blank",href:t.explorer.exploreTx(e.txHash)}},[t._v("\n                      #"),n("CBN",{attrs:{value:e.blockNumber}})],1)])]),t._v(" "),n("p",{staticClass:"p-tx"},[n("a",{attrs:{target:"_blank",href:t.explorer.exploreToken4address(e.account)}},[t._v("\n                    "+t._s(e.account.slice(0,8))+"..."+t._s(e.account.slice(-4))+"\n                  ")])])])])})),0)]),t._v(" "),n("div",{staticClass:"hidden mt-4 overflow-x-auto md:block"},[n("div",{staticClass:"align-middle inline-block min-w-full"},[n("div",{staticClass:"shadow overflow-hidden border-b border-gray-700"},[n("table",{staticClass:"hdf-tx-table"},[n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("\n                    "+t._s(t.$t("txTable.block"))+"\n                  ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n                    "+t._s(t.$t("txTable.address"))+"\n                  ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n                    "+t._s(t.$t("txTable.amount"))+"\n                  ")])])]),t._v(" "),n("tbody",t._l(t.oTransactions,(function(e){return n("tr",[n("td",[n("a",{attrs:{target:"_blank",href:t.explorer.exploreTx(e.txHash)}},[t._v("\n                      #"),n("CBN",{attrs:{value:e.blockNumber}})],1)]),t._v(" "),n("td",{staticClass:"font-mono"},[n("a",{attrs:{target:"_blank",href:t.explorer.exploreToken4address(e.account)}},[t._v(t._s(e.account))])]),t._v(" "),n("td",[n("CBN",{attrs:{value:e.amount,token:!0,padding:2}}),t._v("\n                    HyperDeFi\n                  ")],1)])})),0)])])])])]):t._e()])],1)}),[],!1,null,"87d788d0",null);e.default=component.exports;installComponents(component,{HeroIconOutlineClock:n(897).default,HeroIconSolidCursorClick:n(750).default,CBN:n(743).default,HeroIconSolidBadgeCheck:n(899).default,LAutoWidth:n(163).default})}}]);