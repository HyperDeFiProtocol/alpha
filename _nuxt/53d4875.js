(window.webpackJsonp=window.webpackJsonp||[]).push([[100,16,19,35],{1056:function(t,e,n){"use strict";n.r(e);var r=n(804),o=n.n(r),l={name:"SFomo",data:function(){return{countdownFinished:!1}},watch:{"$store.state.bsc.fomo.timestamp":function(){this.countdownFinished=!1}},computed:{step:function(){var t={hh:"00",mm:"00",ss:"00"},e=o.a.duration(1e3*this.$store.state.bsc.fomo.timestampStep),s=e.seconds(),n=e.minutes(),r=Math.floor(e.asHours());return t.ss=s<10?"0"+s:s,t.mm=n<10?"0"+n:n,t.hh=r<10?"0"+r:r,t}},methods:{isZero:function(address){return address===this.$store.state.bsc.globalAccounts.zero},setCountdownFinished:function(t){this.countdownFinished=t}}},c=n(5),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("LAutoWidth",{staticClass:"py-16 px-4 sm:py-24 sm:px-6 lg:px-8"},[n("CH3",{scopedSlots:t._u([{key:"tag",fn:function(){return[t._v("\n        "+t._s(t.$t("sFomo.tag"))+"\n      ")]},proxy:!0}])},[t._v("\n      "+t._s(t.$t("sFomo.title"))+"\n\n      ")]),t._v(" "),n("div",{staticClass:"mt-10 sm:mt-16 lg:text-center"},[n("div",{staticClass:"text-lg text-gray-500"},[n("span",[t._v("\n          "+t._s(t.$t("sFomo.countdown"))+"\n        ")]),t._v(" "),this.isZero(t.$store.state.bsc.fomo.next)?n("span",[t._v("\n          "+t._s(t.$t("sFomo.waitForStarting"))+"\n        ")]):t._e()]),t._v(" "),n("h4",{staticClass:"mt-2 lg:mt-3 lg:w-full lg:mx-auto text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl text-gray-200"},[t.isZero(t.$store.state.bsc.fomo.next)?n("CTimeDuration",{attrs:{milliseconds:1e3*t.$store.state.bsc.fomo.timestampStep,"may-hide-hours":!0}}):n("CCountdown",{staticClass:"lg:justify-center",attrs:{timestamp:1e3*t.$store.state.bsc.fomo.timestamp,"may-hide-hours":!0,"show-ds":!0},on:{finished:t.setCountdownFinished}})],1),t._v(" "),n("div",{staticClass:"mt-10 sm:mt-16 text-lg text-gray-500"},[t._v("\n        "+t._s(t.$t("sFomo.latestBuyerWin"))+"\n      ")]),t._v(" "),n("h5",{staticClass:"mt-2 lg:mt-3 w-full mx-auto text-2xl tracking-tight font-extrabold sm:text-3xl md:text-4xl text-gray-200"},[n("CBN",{attrs:{value:t.$store.state.bsc.fomo.amount,token:!0}}),t._v(" HyperDeFi\n      ")],1)]),t._v(" "),n("div",{staticClass:"mt-10 sm:mt-16"},[n("div",{staticClass:"mx-auto max-w-2xl flex rounded-md shadow-sm"},[n("span",{staticClass:"inline-flex items-center px-4 lg:px-8 rounded-l-md border border-r-0 border-violet-300 bg-violet-50 font-bold text-lg text-violet-600"},[this.countdownFinished?n("span",[t._v("\n            "+t._s(t.$t("sFomo.winner"))+"\n          ")]):n("span",[t._v("\n            "+t._s(t.$t("sFomo.current"))+"\n          ")])]),t._v(" "),n("div",{staticClass:"flex-1 min-w-0 block w-full p-4 border border-violet-300 bg-white text-lg rounded-none rounded-r-md border-gray-300 truncate"},[this.isZero(t.$store.state.bsc.fomo.next)?n("span",{staticClass:"font-normal text-gray-400"},[t._v("\n            "+t._s(t.$t("sFomo.nextBuyer"))+" 0x...\n          ")]):n("span",{staticClass:"font-bold text-violet-700"},[t._v("\n            "+t._s(t.$store.state.bsc.fomo.next)+"\n          ")])])])])],1)],1)}),[],!1,null,"53ebfd42",null);e.default=component.exports;installComponents(component,{CH3:n(815).default,CTimeDuration:n(996).default,CCountdown:n(962).default,CBN:n(809).default,LAutoWidth:n(143).default})},807:function(t,e,n){var content=n(814);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("7f27037d",content,!0,{sourceMap:!1})},809:function(t,e,n){"use strict";n.r(e);n(808),n(47),n(88),n(810),n(254),n(59),n(46),n(182);var r={name:"CBN",props:{value:{required:!0},decimals:{type:Number,default:0},padding:{type:Number,default:0},keep:{type:Boolean,default:!1},price:{type:Boolean,default:!1},token:{type:Boolean,default:!1}},computed:{numDecimals:function(){return this.token?parseInt(this.$store.state.bsc.metadata.tokenDecimals):this.price?parseInt(this.$store.state.bsc.metadata.priceDecimals):this.decimals},step1:function(){var s=String(this.value).trim().replace(new RegExp("^0+"),""),t={a:"0",b:null};if(this.numDecimals>0)if(this.numDecimals<s.length){var e=s.length-this.numDecimals;t.a=s.slice(0,e),t.b=s.slice(e)}else for(t.b=s;this.numDecimals>t.b.length;)t.b="0"+t.b;else t.a=s;if(t.b&&!this.keep&&(t.b=t.b.replace(new RegExp("0+$"),"")),this.padding)if(t.b||(t.b=""),this.padding>t.b.length)for(;this.padding>t.b.length;)t.b=t.b+"0";else this.padding<t.b.length&&(t.b=t.b.slice(0,this.padding));return t},display:function(){for(var t={a:[],b:[]},a=this.step1.a;3<a.length;)t.a.unshift(a.slice(-3)),a=a.slice(0,a.length-3);a.length&&t.a.unshift(a);var b=this.step1.b;if(b){for(;3<b.length;)t.b.push(b.slice(0,3)),b=b.slice(3);b.length&&t.b.push(b)}return 0===t.a.length&&(t.a=["0"]),t.a=t.a.join(","),t}}},o=(n(813),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"cbn-number"},[n("span",{staticClass:"cbn-integer"},[t._v(t._s(t.display.a))]),t.display.b.length?n("span",{staticClass:"cbn-dot"},[t._v(".")]):t._e(),t._l(t.display.b,(function(e){return n("span",{staticClass:"cbn-decimal"},[t._v(t._s(e))])}))],2)}),[],!1,null,"77384a03",null);e.default=component.exports},810:function(t,e,n){"use strict";var r=n(9),o=n(806).trim;r({target:"String",proto:!0,forced:n(811)("trim")},{trim:function(){return o(this)}})},811:function(t,e,n){var r=n(144).PROPER,o=n(15),l=n(805);t.exports=function(t){return o((function(){return!!l[t]()||"​᠎"!=="​᠎"[t]()||r&&l[t].name!==t}))}},813:function(t,e,n){"use strict";n(807)},814:function(t,e,n){var r=n(57)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.cbn-decimal[data-v-77384a03]{\n  margin-right:.2rem;\n  font-size:90%\n}\n.cbn-decimal[data-v-77384a03]:last-child{\n  margin-right:0\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},815:function(t,e,n){"use strict";n.r(e);var r={name:"CH3"},o=n(5),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hdf-ch3"},[t.$slots.tag?n("header",[t._t("tag")],2):t._e(),t._v(" "),n("h3",[t._t("default")],2),t._v(" "),t.$slots.desc?n("main",[t._t("desc")],2):t._e()])}),[],!1,null,"31b9e2c9",null);e.default=component.exports},823:function(t,e,n){var content=n(961);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("1cf913f8",content,!0,{sourceMap:!1})},960:function(t,e,n){"use strict";n(823)},961:function(t,e,n){var r=n(57)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.ds[data-v-d20d4ce2]{\n  font-size:80%\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},962:function(t,e,n){"use strict";n.r(e);var r=n(1),o=(n(22),n(808),n(101),n(804)),l=n.n(o),c={name:"CCountdown",props:{timestamp:{type:Number,required:!0},mayHideHours:{type:Boolean,default:!1},showDs:{type:Boolean,default:!1}},data:function(){return{interval:null,finished:!1,h:0,m:0,s:0,ds:0,hh:"00",mm:"00",ss:"00"}},computed:{showHours:function(){return this.h>0||!this.mayHideHours}},watch:{timestamp:function(){this.resetInterval(),this.setCountdownInterval()}},mounted:function(){this.setCountdownInterval()},methods:{resetInterval:function(){this.interval&&(clearInterval(this.interval),this.interval=null)},clearDisplay:function(){this.ds=0,this.s=0,this.m=0,this.h=0,this.ss="00",this.mm="00",this.hh="00"},touchCountdown:function(){this.finished=!1;var t=l.a.duration(l()(this.timestamp).diff(l()()));if(t.asMilliseconds()>0){if(this.finished)return null;this.$emit("finished",!1),this.ds=Math.floor(t.milliseconds()/100),this.s=t.seconds(),this.m=t.minutes(),this.h=Math.floor(t.asHours()),this.ss=this.s<10?"0"+this.s:this.s,this.mm=this.m<10?"0"+this.m:this.m,this.hh=this.h<10?"0"+this.h:this.h}else this.finished=!0,clearInterval(this.interval),this.$emit("finished",!0),this.clearDisplay(),window.setTimeout(this.clearDisplay,1e3)},setCountdownInterval:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.interval||(t.showDs?t.interval=window.setInterval(t.touchCountdown,100):t.interval=window.setInterval(t.touchCountdown,1e3));case 1:case"end":return e.stop()}}),e)})))()}}},h=(n(960),n(5)),component=Object(h.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"inline-flex items-baseline"},[t.showHours?n("span",[t._v("\n    "+t._s(t.hh)+":\n  ")]):t._e(),t._v(" "),n("span",[t._v("\n    "+t._s(t.mm)+":\n  ")]),t._v(" "),n("span",[t._v("\n    "+t._s(t.ss)+"\n  ")]),t._v(" "),t.showDs?n("span",{staticClass:"ds"},[t._v("\n    ."+t._s(t.ds)+"\n  ")]):t._e()])}),[],!1,null,"d20d4ce2",null);e.default=component.exports},970:function(t,e,n){var map={"./af":824,"./af.js":824,"./ar":825,"./ar-dz":826,"./ar-dz.js":826,"./ar-kw":827,"./ar-kw.js":827,"./ar-ly":828,"./ar-ly.js":828,"./ar-ma":829,"./ar-ma.js":829,"./ar-sa":830,"./ar-sa.js":830,"./ar-tn":831,"./ar-tn.js":831,"./ar.js":825,"./az":832,"./az.js":832,"./be":833,"./be.js":833,"./bg":834,"./bg.js":834,"./bm":835,"./bm.js":835,"./bn":836,"./bn-bd":837,"./bn-bd.js":837,"./bn.js":836,"./bo":838,"./bo.js":838,"./br":839,"./br.js":839,"./bs":840,"./bs.js":840,"./ca":841,"./ca.js":841,"./cs":842,"./cs.js":842,"./cv":843,"./cv.js":843,"./cy":844,"./cy.js":844,"./da":845,"./da.js":845,"./de":846,"./de-at":847,"./de-at.js":847,"./de-ch":848,"./de-ch.js":848,"./de.js":846,"./dv":849,"./dv.js":849,"./el":850,"./el.js":850,"./en-au":851,"./en-au.js":851,"./en-ca":852,"./en-ca.js":852,"./en-gb":853,"./en-gb.js":853,"./en-ie":854,"./en-ie.js":854,"./en-il":855,"./en-il.js":855,"./en-in":856,"./en-in.js":856,"./en-nz":857,"./en-nz.js":857,"./en-sg":858,"./en-sg.js":858,"./eo":859,"./eo.js":859,"./es":860,"./es-do":861,"./es-do.js":861,"./es-mx":862,"./es-mx.js":862,"./es-us":863,"./es-us.js":863,"./es.js":860,"./et":864,"./et.js":864,"./eu":865,"./eu.js":865,"./fa":866,"./fa.js":866,"./fi":867,"./fi.js":867,"./fil":868,"./fil.js":868,"./fo":869,"./fo.js":869,"./fr":870,"./fr-ca":871,"./fr-ca.js":871,"./fr-ch":872,"./fr-ch.js":872,"./fr.js":870,"./fy":873,"./fy.js":873,"./ga":874,"./ga.js":874,"./gd":875,"./gd.js":875,"./gl":876,"./gl.js":876,"./gom-deva":877,"./gom-deva.js":877,"./gom-latn":878,"./gom-latn.js":878,"./gu":879,"./gu.js":879,"./he":880,"./he.js":880,"./hi":881,"./hi.js":881,"./hr":882,"./hr.js":882,"./hu":883,"./hu.js":883,"./hy-am":884,"./hy-am.js":884,"./id":885,"./id.js":885,"./is":886,"./is.js":886,"./it":887,"./it-ch":888,"./it-ch.js":888,"./it.js":887,"./ja":889,"./ja.js":889,"./jv":890,"./jv.js":890,"./ka":891,"./ka.js":891,"./kk":892,"./kk.js":892,"./km":893,"./km.js":893,"./kn":894,"./kn.js":894,"./ko":895,"./ko.js":895,"./ku":896,"./ku.js":896,"./ky":897,"./ky.js":897,"./lb":898,"./lb.js":898,"./lo":899,"./lo.js":899,"./lt":900,"./lt.js":900,"./lv":901,"./lv.js":901,"./me":902,"./me.js":902,"./mi":903,"./mi.js":903,"./mk":904,"./mk.js":904,"./ml":905,"./ml.js":905,"./mn":906,"./mn.js":906,"./mr":907,"./mr.js":907,"./ms":908,"./ms-my":909,"./ms-my.js":909,"./ms.js":908,"./mt":910,"./mt.js":910,"./my":911,"./my.js":911,"./nb":912,"./nb.js":912,"./ne":913,"./ne.js":913,"./nl":914,"./nl-be":915,"./nl-be.js":915,"./nl.js":914,"./nn":916,"./nn.js":916,"./oc-lnc":917,"./oc-lnc.js":917,"./pa-in":918,"./pa-in.js":918,"./pl":919,"./pl.js":919,"./pt":920,"./pt-br":921,"./pt-br.js":921,"./pt.js":920,"./ro":922,"./ro.js":922,"./ru":923,"./ru.js":923,"./sd":924,"./sd.js":924,"./se":925,"./se.js":925,"./si":926,"./si.js":926,"./sk":927,"./sk.js":927,"./sl":928,"./sl.js":928,"./sq":929,"./sq.js":929,"./sr":930,"./sr-cyrl":931,"./sr-cyrl.js":931,"./sr.js":930,"./ss":932,"./ss.js":932,"./sv":933,"./sv.js":933,"./sw":934,"./sw.js":934,"./ta":935,"./ta.js":935,"./te":936,"./te.js":936,"./tet":937,"./tet.js":937,"./tg":938,"./tg.js":938,"./th":939,"./th.js":939,"./tk":940,"./tk.js":940,"./tl-ph":941,"./tl-ph.js":941,"./tlh":942,"./tlh.js":942,"./tr":943,"./tr.js":943,"./tzl":944,"./tzl.js":944,"./tzm":945,"./tzm-latn":946,"./tzm-latn.js":946,"./tzm.js":945,"./ug-cn":947,"./ug-cn.js":947,"./uk":948,"./uk.js":948,"./ur":949,"./ur.js":949,"./uz":950,"./uz-latn":951,"./uz-latn.js":951,"./uz.js":950,"./vi":952,"./vi.js":952,"./x-pseudo":953,"./x-pseudo.js":953,"./yo":954,"./yo.js":954,"./zh-cn":955,"./zh-cn.js":955,"./zh-hk":956,"./zh-hk.js":956,"./zh-mo":957,"./zh-mo.js":957,"./zh-tw":958,"./zh-tw.js":958};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=970},971:function(t,e,n){var content=n(986);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("392719a5",content,!0,{sourceMap:!1})},985:function(t,e,n){"use strict";n(971)},986:function(t,e,n){var r=n(57)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.ds[data-v-397473ca]{\n  font-size:80%\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},996:function(t,e,n){"use strict";n.r(e);n(808);var r=n(804),o=n.n(r),l={name:"CTimeDuration",props:{milliseconds:{type:Number,required:!0},mayHideHours:{type:Boolean,default:!1},showDs:{type:Boolean,default:!1}},data:function(){return{interval:null}},computed:{duration:function(){return o.a.duration(this.milliseconds)},s:function(){return this.duration.seconds()},m:function(){return this.duration.minutes()},h:function(){return this.duration.hours()},ds:function(){return Math.floor(this.duration.milliseconds()/100)},ss:function(){return this.s<10?"0"+this.s:this.s},mm:function(){return this.m<10?"0"+this.m:this.m},hh:function(){return this.h<10?"0"+this.h:this.h},showHours:function(){return!!this.h||!this.mayHideHours}}},c=(n(985),n(5)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"inline-flex items-end"},[t.showHours?n("span",[t._v("\n    "+t._s(t.hh)+":\n  ")]):t._e(),t._v(" "),n("span",[t._v("\n    "+t._s(t.mm)+":\n  ")]),t._v(" "),n("span",[t._v("\n    "+t._s(t.ss)+"\n  ")]),t._v(" "),t.showDs?n("span",{staticClass:"ds"},[t._v("\n    ."+t._s(t.ds)+"\n  ")]):t._e()])}),[],!1,null,"397473ca",null);e.default=component.exports}}]);