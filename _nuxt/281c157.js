(window.webpackJsonp=window.webpackJsonp||[]).push([[110,53],{1e3:function(t,e,n){"use strict";n.r(e);var r={name:"HeroIconOutlineCode"},o=n(5),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"flex-shrink-0",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"}})])}),[],!1,null,"55181df1",null);e.default=component.exports},1093:function(t,e,n){"use strict";n.r(e);var r={name:"STaxFund"},o=n(5),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hdf-section-fee"},[n("div",{staticClass:"text-center"},[n("span",{staticClass:"span-icon bg-cool-gray-50 text-cool-gray-700"},[n("HeroIconOutlineCode",{staticClass:"h-8 w-8"})],1)]),t._v(" "),n("LAutoWidth",{staticClass:"auto-layout"},[n("main",[n("div",{staticClass:"header1"},[n("h2",{staticClass:"text-cool-gray-400"},[t._v("\n          "+t._s(t.$t("sTaxFund.title"))+"\n        ")]),t._v(" "),n("p",[t._v("\n          "+t._s(t.$t("sTaxFund.text"))+"\n        ")])]),t._v(" "),n("div",{staticClass:"body2 to-cool-gray-900 from-gray-900 text-gray-400"},[n("h3",[t._v("\n          "+t._s(t.$t("sTax.forEachTransaction"))+"\n        ")]),t._v(" "),n("p",[t._v("\n          "+t._s(t.$t("sTax.takeOnly"))+"\n          "),t.$store.state.bsc.takerTax.fund===t.$store.state.bsc.makerTax.fund&&t.$store.state.bsc.makerTax.fund===t.$store.state.bsc.whaleTax.fund?n("span",[t._v("\n            "+t._s(t.$store.state.bsc.takerTax.fund)+"%\n            "+t._s(t.$t("sTax.fromTakerMakerWhale"))+"\n          ")]):n("span",[t.$store.state.bsc.takerTax.fund>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.takerTax.fund)+"%\n              "+t._s(t.$t("sTax.fromTaker"))+"\n            ")]):t._e(),t._v(" "),t.$store.state.bsc.makerTax.fund>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.makerTax.fund)+"%\n              "+t._s(t.$t("sTax.fromMaker"))+"\n            ")]):t._e(),t._v(" "),t.$store.state.bsc.whaleTax.fund>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.whaleTax.fund)+"%\n              "+t._s(t.$t("sTax.fromWhale"))+"\n            ")]):t._e()]),t._v("\n          "+t._s(t.$t("sTaxFund.thenDeposit__"))+"\n        ")])])])])],1)}),[],!1,null,"8d0abe96",null);e.default=component.exports;installComponents(component,{HeroIconOutlineCode:n(1e3).default,LAutoWidth:n(151).default})}}]);