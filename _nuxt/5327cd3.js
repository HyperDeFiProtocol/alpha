(window.webpackJsonp=window.webpackJsonp||[]).push([[16,104],{810:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},811:function(t,e,n){var r=n(13),c=n(50),l=n(26),o=n(810),f=r("".replace),h="["+o+"]",d=RegExp("^"+h+h+"*"),m=RegExp(h+h+"*$"),v=function(t){return function(e){var n=l(c(e));return 1&t&&(n=f(n,d,"")),2&t&&(n=f(n,m,"")),n}};t.exports={start:v(1),end:v(2),trim:v(3)}},812:function(t,e,n){var content=n(819);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("7f27037d",content,!0,{sourceMap:!1})},813:function(t,e,n){"use strict";var r=n(28),c=n(7),l=n(13),o=n(151),f=n(40),h=n(29),d=n(262),m=n(92),v=n(188),N=n(417),I=n(17),E=n(122).f,_=n(77).f,y=n(39).f,x=n(817),w=n(811).trim,k="Number",S=c.Number,A=S.prototype,R=c.TypeError,C=l("".slice),D=l("".charCodeAt),T=function(t){var e=N(t,"number");return"bigint"==typeof e?e:F(e)},F=function(t){var e,n,r,c,l,o,f,code,h=N(t,"number");if(v(h))throw R("Cannot convert a Symbol value to a number");if("string"==typeof h&&h.length>2)if(h=w(h),43===(e=D(h,0))||45===e){if(88===(n=D(h,2))||120===n)return NaN}else if(48===e){switch(D(h,1)){case 66:case 98:r=2,c=49;break;case 79:case 111:r=8,c=55;break;default:return+h}for(o=(l=C(h,2)).length,f=0;f<o;f++)if((code=D(l,f))<48||code>c)return NaN;return parseInt(l,r)}return+h};if(o(k,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var M,O=function(t){var e=arguments.length<1?0:S(T(t)),n=this;return m(A,n)&&I((function(){x(n)}))?d(Object(e),n,O):e},$=r?E(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),B=0;$.length>B;B++)h(S,M=$[B])&&!h(O,M)&&y(O,M,_(S,M));O.prototype=A,A.constructor=O,f(c,k,O)}},814:function(t,e,n){"use strict";n.r(e);n(813),n(49),n(91),n(815),n(261),n(61),n(48),n(189);var r={name:"CBN",props:{value:{required:!0},decimals:{type:Number,default:0},padding:{type:Number,default:0},keep:{type:Boolean,default:!1},price:{type:Boolean,default:!1},token:{type:Boolean,default:!1}},computed:{numDecimals:function(){return this.token?parseInt(this.$store.state.bsc.metadata.tokenDecimals):this.price?parseInt(this.$store.state.bsc.metadata.priceDecimals):this.decimals},step1:function(){var s=String(this.value).trim().replace(new RegExp("^0+"),""),t={a:"0",b:null};if(this.numDecimals>0)if(this.numDecimals<s.length){var e=s.length-this.numDecimals;t.a=s.slice(0,e),t.b=s.slice(e)}else for(t.b=s;this.numDecimals>t.b.length;)t.b="0"+t.b;else t.a=s;if(t.b&&!this.keep&&(t.b=t.b.replace(new RegExp("0+$"),"")),this.padding)if(t.b||(t.b=""),this.padding>t.b.length)for(;this.padding>t.b.length;)t.b=t.b+"0";else this.padding<t.b.length&&(t.b=t.b.slice(0,this.padding));return t},display:function(){for(var t={a:[],b:[]},a=this.step1.a;3<a.length;)t.a.unshift(a.slice(-3)),a=a.slice(0,a.length-3);a.length&&t.a.unshift(a);var b=this.step1.b;if(b){for(;3<b.length;)t.b.push(b.slice(0,3)),b=b.slice(3);b.length&&t.b.push(b)}return 0===t.a.length&&(t.a=["0"]),t.a=t.a.join(","),t}}},c=(n(818),n(5)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"cbn-number"},[n("span",{staticClass:"cbn-integer"},[t._v(t._s(t.display.a))]),t.display.b.length?n("span",{staticClass:"cbn-dot"},[t._v(".")]):t._e(),t._l(t.display.b,(function(e){return n("span",{staticClass:"cbn-decimal"},[t._v(t._s(e))])}))],2)}),[],!1,null,"77384a03",null);e.default=component.exports},815:function(t,e,n){"use strict";var r=n(10),c=n(811).trim;r({target:"String",proto:!0,forced:n(816)("trim")},{trim:function(){return c(this)}})},816:function(t,e,n){var r=n(150).PROPER,c=n(17),l=n(810);t.exports=function(t){return c((function(){return!!l[t]()||"​᠎"!=="​᠎"[t]()||r&&l[t].name!==t}))}},817:function(t,e,n){var r=n(13);t.exports=r(1..valueOf)},818:function(t,e,n){"use strict";n(812)},819:function(t,e,n){var r=n(59)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.cbn-decimal[data-v-77384a03]{\n  margin-right:.2rem;\n  font-size:90%\n}\n.cbn-decimal[data-v-77384a03]:last-child{\n  margin-right:0\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r}}]);