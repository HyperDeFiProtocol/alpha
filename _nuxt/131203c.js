(window.webpackJsonp=window.webpackJsonp||[]).push([[132,18],{1125:function(t,e,n){"use strict";n.r(e);var r,o,c=n(0),l=(n(145),n(51),n(22),n(182)),d={scrollToTop:!0,name:"UserUsername",asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,r=n.username,e.abrupt("return",{username:r});case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{loaded:!1,account:{address:"",isHolder:!1,isWhale:!1,isFlat:!1,isSlot:!1,username:"",balance:"0",harvest:"0",totalHarvest:"0",totalTaxSnap:"0",couponUsed:"0",coupon:"0",visitors:"0",bnbBalance:"0",genesisDeposit:"0",genesisPortion:"0",genesisRedeemed:!1}}},watch:{"$store.state.bsc.blockNumber":(o=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.sync();case 2:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})},computed:{indexedUsername:function(){return this.username.startsWith("@")?this.username.slice(1):""}},mounted:(r=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.wait(500);case 2:return t.next=4,this.sync();case 4:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)}),methods:{sync:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.indexedUsername){e.next=6;break}return e.next=3,t.$nuxt.context.app.token.methods.getAccountByUsername(t.indexedUsername).call().catch((function(t){console.error(">>> P[/user/_username] getAccountByUsername:",t.message)}));case 3:(data=e.sent).account!==t.$store.state.bsc.globalAccounts.zero&&(t.account.username=t.indexedUsername,t.account.address=data.account,t.account.isHolder=data.bools[0],t.account.isWhale=data.bools[1],t.account.isFlat=data.bools[2],t.account.isSlot=data.bools[3],t.account.balance=data.uint256s[0],t.account.harvest=data.uint256s[1],t.account.totalHarvest=data.uint256s[2],t.account.totalTaxSnap=data.uint256s[3],t.account.couponUsed=data.uint256s[4],t.account.coupon=data.uint256s[5],t.account.visitors=data.uint256s[6],t.account.bnbBalance=data.uint256s[7],t.account.genesisDeposit=data.uint256s[8],t.account.genesisPortion=data.uint256s[9],t.account.genesisRedeemed=data.bools[4]),t.loaded=!0;case 6:case"end":return e.stop()}}),e)})))()}}},m=n(4),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.loaded?t.account.username?n("LAutoWidth",{staticClass:"py-16 px-4 sm:py-24 sm:px-6 lg:px-8"},[n("CH3",{scopedSlots:t._u([{key:"tag",fn:function(){return[t._v("\n        User Dashboard\n      ")]},proxy:!0},{key:"desc",fn:function(){return[n("div",{staticClass:"truncate"},[t._v("\n          "+t._s(t.account.address)+"\n        ")])]},proxy:!0}])},[t._v("\n      "+t._s(t.$t("pUser.user"))+'"@'+t._s(t.indexedUsername)+'"\n\n      ')]),t._v(" "),n("SDashboard",{attrs:{account:t.account}})],1):n("LAutoWidth",{staticClass:"p-24 text-gray-500"},[n("div",[n("HeroIconOutlineExclamation",{staticClass:"h-20 w-20"})],1),t._v(" "),t.$route.params.username.startsWith("@")?n("div",[n("h1",{staticClass:"mt-10 font-bold text-4xl"},[t._v("\n        "+t._s(t.$t("pUser.usernameDoesNotExist"))+"\n      ")]),t._v(" "),n("h2",{staticClass:"mt-6 text-2xl"},[t._v("\n        "+t._s(t.$t("pUser.couldNotFound_"))+t._s(t.username)+"\n      ")])]):n("div",[n("h1",{staticClass:"mt-10 font-bold text-4xl"},[t._v("\n        "+t._s(t.$t("pUser.invalidUsername"))+"\n      ")]),t._v(" "),n("h2",{staticClass:"mt-6 text-2xl"},[n("span",[t._v("\n          "+t._s(t.$t("pUser.aUsernameMustStartWith__"))+"\n        ")])])])]):n("LAutoWidth",{staticClass:"p-24 text-gray-500"},[n("h1",{staticClass:"mt-10 font-bold text-4xl animate-pulse"},[t._v("\n      "+t._s(t.$t("global.loading"))+"\n    ")])])],1)}),[],!1,null,"403c445e",null);e.default=component.exports;installComponents(component,{LAutoWidth:n(142).default,CH3:n(810).default,SDashboard:n(1070).default,HeroIconOutlineExclamation:n(183).default})},810:function(t,e,n){"use strict";n.r(e);var r={name:"CH3"},o=n(4),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hdf-ch3"},[t.$slots.tag?n("header",[t._t("tag")],2):t._e(),t._v(" "),n("h3",[t._t("default")],2),t._v(" "),t.$slots.desc?n("main",[t._t("desc")],2):t._e()])}),[],!1,null,"31b9e2c9",null);e.default=component.exports}}]);