(window.webpackJsonp=window.webpackJsonp||[]).push([[121,16,19,92],{1124:function(t,e,n){"use strict";n.r(e);var r,c=n(1),l=(n(22),n(0),{name:"demo",data:function(){return{show:!0}},mounted:(r=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$nuxt.context.app.sync.genesisDeposit();case 2:console.log(this.$store.state.bsc.metadata);case 3:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})}),o=n(5),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("SLoading"),t._v(" "),n("LAutoWidth",{staticClass:"py-16 px-4"},[n("CH3",{scopedSlots:t._u([{key:"tag",fn:function(){return[t._v("\n        Developing\n      ")]},proxy:!0}])},[n("span",[t._v("\n        Demo Page for DEBUG\n      ")])]),t._v(" "),n("div",{staticClass:"mt-24 flex justify-center text-4xl"},[n("CCountdown",{attrs:{timestamp:16345761e5,"show-ds":!0}})],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"mt-24 flex justify-center",on:{click:function(e){t.show=!t.show}}},[n("IconPancakeSwap",{staticClass:"w-80 h-80"})],1),t._v(" "),n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"mt-24 flex justify-center test"},[n("IconPancakeSwap",{staticClass:"w-80 h-80"})],1)])],1)],1)}),[],!1,null,"3633434c",null);e.default=component.exports;installComponents(component,{SLoading:n(258).default,CH3:n(816).default,CCountdown:n(963).default,IconPancakeSwap:n(970).default,LAutoWidth:n(143).default})},816:function(t,e,n){"use strict";n.r(e);var r={name:"CH3"},c=n(5),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hdf-ch3"},[t.$slots.tag?n("header",[t._t("tag")],2):t._e(),t._v(" "),n("h3",[t._t("default")],2),t._v(" "),t.$slots.desc?n("main",[t._t("desc")],2):t._e()])}),[],!1,null,"31b9e2c9",null);e.default=component.exports},824:function(t,e,n){var content=n(962);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(59).default)("1cf913f8",content,!0,{sourceMap:!1})},961:function(t,e,n){"use strict";n(824)},962:function(t,e,n){var r=n(58)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.ds[data-v-d20d4ce2]{\n  font-size:80%\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},963:function(t,e,n){"use strict";n.r(e);var r=n(1),c=(n(22),n(809),n(101),n(805)),l=n.n(c),o={name:"CCountdown",props:{timestamp:{type:Number,required:!0},mayHideHours:{type:Boolean,default:!1},showDs:{type:Boolean,default:!1}},data:function(){return{interval:null,finished:!1,h:0,m:0,s:0,ds:0,hh:"00",mm:"00",ss:"00"}},computed:{showHours:function(){return this.h>0||!this.mayHideHours}},watch:{timestamp:function(){this.resetInterval(),this.setCountdownInterval()}},mounted:function(){this.setCountdownInterval()},methods:{resetInterval:function(){this.interval&&(clearInterval(this.interval),this.interval=null)},clearDisplay:function(){this.ds=0,this.s=0,this.m=0,this.h=0,this.ss="00",this.mm="00",this.hh="00"},touchCountdown:function(){this.finished=!1;var t=l.a.duration(l()(this.timestamp).diff(l()()));if(t.asMilliseconds()>0){if(this.finished)return null;this.$emit("finished",!1),this.ds=Math.floor(t.milliseconds()/100),this.s=t.seconds(),this.m=t.minutes(),this.h=Math.floor(t.asHours()),this.ss=this.s<10?"0"+this.s:this.s,this.mm=this.m<10?"0"+this.m:this.m,this.hh=this.h<10?"0"+this.h:this.h}else this.finished=!0,clearInterval(this.interval),this.$emit("finished",!0),this.clearDisplay(),window.setTimeout(this.clearDisplay,1e3)},setCountdownInterval:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.interval||(t.showDs?t.interval=window.setInterval(t.touchCountdown,100):t.interval=window.setInterval(t.touchCountdown,1e3));case 1:case"end":return e.stop()}}),e)})))()}}},j=(n(961),n(5)),component=Object(j.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"inline-flex items-baseline"},[t.showHours?n("span",[t._v("\n    "+t._s(t.hh)+":\n  ")]):t._e(),t._v(" "),n("span",[t._v("\n    "+t._s(t.mm)+":\n  ")]),t._v(" "),n("span",[t._v("\n    "+t._s(t.ss)+"\n  ")]),t._v(" "),t.showDs?n("span",{staticClass:"ds"},[t._v("\n    ."+t._s(t.ds)+"\n  ")]):t._e()])}),[],!1,null,"d20d4ce2",null);e.default=component.exports},968:function(t,e,n){var map={"./af":825,"./af.js":825,"./ar":826,"./ar-dz":827,"./ar-dz.js":827,"./ar-kw":828,"./ar-kw.js":828,"./ar-ly":829,"./ar-ly.js":829,"./ar-ma":830,"./ar-ma.js":830,"./ar-sa":831,"./ar-sa.js":831,"./ar-tn":832,"./ar-tn.js":832,"./ar.js":826,"./az":833,"./az.js":833,"./be":834,"./be.js":834,"./bg":835,"./bg.js":835,"./bm":836,"./bm.js":836,"./bn":837,"./bn-bd":838,"./bn-bd.js":838,"./bn.js":837,"./bo":839,"./bo.js":839,"./br":840,"./br.js":840,"./bs":841,"./bs.js":841,"./ca":842,"./ca.js":842,"./cs":843,"./cs.js":843,"./cv":844,"./cv.js":844,"./cy":845,"./cy.js":845,"./da":846,"./da.js":846,"./de":847,"./de-at":848,"./de-at.js":848,"./de-ch":849,"./de-ch.js":849,"./de.js":847,"./dv":850,"./dv.js":850,"./el":851,"./el.js":851,"./en-au":852,"./en-au.js":852,"./en-ca":853,"./en-ca.js":853,"./en-gb":854,"./en-gb.js":854,"./en-ie":855,"./en-ie.js":855,"./en-il":856,"./en-il.js":856,"./en-in":857,"./en-in.js":857,"./en-nz":858,"./en-nz.js":858,"./en-sg":859,"./en-sg.js":859,"./eo":860,"./eo.js":860,"./es":861,"./es-do":862,"./es-do.js":862,"./es-mx":863,"./es-mx.js":863,"./es-us":864,"./es-us.js":864,"./es.js":861,"./et":865,"./et.js":865,"./eu":866,"./eu.js":866,"./fa":867,"./fa.js":867,"./fi":868,"./fi.js":868,"./fil":869,"./fil.js":869,"./fo":870,"./fo.js":870,"./fr":871,"./fr-ca":872,"./fr-ca.js":872,"./fr-ch":873,"./fr-ch.js":873,"./fr.js":871,"./fy":874,"./fy.js":874,"./ga":875,"./ga.js":875,"./gd":876,"./gd.js":876,"./gl":877,"./gl.js":877,"./gom-deva":878,"./gom-deva.js":878,"./gom-latn":879,"./gom-latn.js":879,"./gu":880,"./gu.js":880,"./he":881,"./he.js":881,"./hi":882,"./hi.js":882,"./hr":883,"./hr.js":883,"./hu":884,"./hu.js":884,"./hy-am":885,"./hy-am.js":885,"./id":886,"./id.js":886,"./is":887,"./is.js":887,"./it":888,"./it-ch":889,"./it-ch.js":889,"./it.js":888,"./ja":890,"./ja.js":890,"./jv":891,"./jv.js":891,"./ka":892,"./ka.js":892,"./kk":893,"./kk.js":893,"./km":894,"./km.js":894,"./kn":895,"./kn.js":895,"./ko":896,"./ko.js":896,"./ku":897,"./ku.js":897,"./ky":898,"./ky.js":898,"./lb":899,"./lb.js":899,"./lo":900,"./lo.js":900,"./lt":901,"./lt.js":901,"./lv":902,"./lv.js":902,"./me":903,"./me.js":903,"./mi":904,"./mi.js":904,"./mk":905,"./mk.js":905,"./ml":906,"./ml.js":906,"./mn":907,"./mn.js":907,"./mr":908,"./mr.js":908,"./ms":909,"./ms-my":910,"./ms-my.js":910,"./ms.js":909,"./mt":911,"./mt.js":911,"./my":912,"./my.js":912,"./nb":913,"./nb.js":913,"./ne":914,"./ne.js":914,"./nl":915,"./nl-be":916,"./nl-be.js":916,"./nl.js":915,"./nn":917,"./nn.js":917,"./oc-lnc":918,"./oc-lnc.js":918,"./pa-in":919,"./pa-in.js":919,"./pl":920,"./pl.js":920,"./pt":921,"./pt-br":922,"./pt-br.js":922,"./pt.js":921,"./ro":923,"./ro.js":923,"./ru":924,"./ru.js":924,"./sd":925,"./sd.js":925,"./se":926,"./se.js":926,"./si":927,"./si.js":927,"./sk":928,"./sk.js":928,"./sl":929,"./sl.js":929,"./sq":930,"./sq.js":930,"./sr":931,"./sr-cyrl":932,"./sr-cyrl.js":932,"./sr.js":931,"./ss":933,"./ss.js":933,"./sv":934,"./sv.js":934,"./sw":935,"./sw.js":935,"./ta":936,"./ta.js":936,"./te":937,"./te.js":937,"./tet":938,"./tet.js":938,"./tg":939,"./tg.js":939,"./th":940,"./th.js":940,"./tk":941,"./tk.js":941,"./tl-ph":942,"./tl-ph.js":942,"./tlh":943,"./tlh.js":943,"./tr":944,"./tr.js":944,"./tzl":945,"./tzl.js":945,"./tzm":946,"./tzm-latn":947,"./tzm-latn.js":947,"./tzm.js":946,"./ug-cn":948,"./ug-cn.js":948,"./uk":949,"./uk.js":949,"./ur":950,"./ur.js":950,"./uz":951,"./uz-latn":952,"./uz-latn.js":952,"./uz.js":951,"./vi":953,"./vi.js":953,"./x-pseudo":954,"./x-pseudo.js":954,"./yo":955,"./yo.js":955,"./zh-cn":956,"./zh-cn.js":956,"./zh-hk":957,"./zh-hk.js":957,"./zh-mo":958,"./zh-mo.js":958,"./zh-tw":959,"./zh-tw.js":959};function r(t){var e=c(t);return n(e)}function c(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=c,t.exports=r,r.id=968},970:function(t,e,n){"use strict";n.r(e);var r={name:"IconPancakeSwap"},c=n(5),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"}},[n("path",{attrs:{fill:"#633001",d:"M6.38,5.584c-0.46,-2.462 1.429,-4.737 3.934,-4.737c2.21,-0 4.002,1.792 4.002,4.002l0,4.935c0.553,-0.039 1.115,-0.06 1.684,-0.06c0.547,0 1.087,0.019 1.619,0.055l-0,-4.93c-0,-2.21 1.791,-4.002 4.002,-4.002c2.505,-0 4.394,2.275 3.934,4.737l-1.083,5.8c3.717,1.623 6.528,4.441 6.528,7.983l0,2.143c0,2.913 -1.927,5.352 -4.621,6.998c-2.715,1.659 -6.387,2.645 -10.379,2.645c-3.992,0 -7.664,-0.986 -10.379,-2.645c-2.694,-1.646 -4.621,-4.085 -4.621,-6.998l0,-2.143c0,-3.523 2.782,-6.331 6.468,-7.957l-1.088,-5.826Zm16.704,6.562l1.268,-6.787c0.319,-1.709 -0.993,-3.288 -2.731,-3.288c-1.534,0 -2.778,1.244 -2.778,2.778l-0,6.279c-0.402,-0.051 -0.81,-0.092 -1.224,-0.122c-0.531,-0.037 -1.071,-0.057 -1.619,-0.057c-0.57,0 -1.132,0.021 -1.684,0.062c-0.414,0.031 -0.822,0.073 -1.224,0.126l-0,-6.288c-0,-1.534 -1.244,-2.778 -2.778,-2.778c-1.738,0 -3.05,1.579 -2.731,3.288l1.272,6.809c-3.975,1.477 -6.631,4.149 -6.631,7.199l0,2.143c0,4.65 6.168,8.419 13.776,8.419c7.608,-0 13.776,-3.769 13.776,-8.419l-0,-2.143c-0,-3.066 -2.683,-5.749 -6.692,-7.221Z"}}),t._v(" "),n("path",{attrs:{fill:"#fedc90",d:"M29.776,21.51c-0,4.65 -6.168,8.419 -13.776,8.419c-7.608,-0 -13.775,-3.769 -13.775,-8.419l-0,-2.143l27.551,0l-0,2.143Z"}}),t._v(" "),n("path",{attrs:{fill:"#d1884f",d:"M7.583,5.359c-0.319,-1.709 0.993,-3.288 2.731,-3.288c1.534,0 2.778,1.244 2.778,2.778l-0,6.288c0.937,-0.123 1.91,-0.188 2.908,-0.188c0.975,0 1.926,0.062 2.843,0.179l-0,-6.279c-0,-1.534 1.244,-2.778 2.778,-2.778c1.738,0 3.05,1.579 2.731,3.288l-1.268,6.787c4.009,1.472 6.692,4.155 6.692,7.221c-0,4.65 -6.168,8.419 -13.776,8.419c-7.608,-0 -13.775,-3.769 -13.775,-8.419c-0,-3.05 2.655,-5.722 6.63,-7.199l-1.272,-6.809Z"}}),t._v(" "),n("path",{attrs:{fill:"#633001",d:"M12.173,18.755c0,1.268 -0.685,2.296 -1.53,2.296c-0.846,-0 -1.531,-1.028 -1.531,-2.296c0,-1.268 0.685,-2.296 1.531,-2.296c0.845,0 1.53,1.028 1.53,2.296Z"}}),t._v(" "),n("path",{attrs:{fill:"#633001",d:"M22.735,18.755c-0,1.268 -0.686,2.296 -1.531,2.296c-0.845,-0 -1.531,-1.028 -1.531,-2.296c0,-1.268 0.686,-2.296 1.531,-2.296c0.845,0 1.531,1.028 1.531,2.296Z"}})])}),[],!1,null,"d7c42476",null);e.default=component.exports}}]);