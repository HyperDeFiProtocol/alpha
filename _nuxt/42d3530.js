(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{901:function(n,t,e){var content=e(931);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(79).default)("d2504a38",content,!0,{sourceMap:!1})},930:function(n,t,e){"use strict";e(901)},931:function(n,t,e){var o=e(78)((function(i){return i[1]}));o.push([n.i,'.loading-text[data-v-5eb87f76]{\n  display:flex;\n  width:100%\n}\n.loading-text[data-v-5eb87f76] > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse:0;\n  margin-right:calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left:calc(0.5rem * calc(1 - var(--tw-space-x-reverse)))\n}\n.loading-text[data-v-5eb87f76]{\n  padding-left:1.5rem;\n  margin-top:0.5rem;\n  display:flex;\n  justify-content:center;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:1rem;\n  line-height:1.5rem\n}\n@media (min-width: 640px){\n.loading-text[data-v-5eb87f76]{\n    font-size:1.125rem;\n    line-height:1.75rem\n}\n}\n@media (min-width: 768px){\n.loading-text[data-v-5eb87f76]{\n    margin-top:0.75rem;\n    font-size:1.5rem;\n    line-height:2rem\n}\n}\n@media (min-width: 1024px){\n.loading-text[data-v-5eb87f76]{\n    margin-top:1rem;\n    font-size:1.875rem;\n    line-height:2.25rem\n}\n}\n.loading-text div[data-v-5eb87f76]{\n  flex:1 1 0%;\n  --tw-text-opacity:1;\n  color:rgba(75, 85, 99, var(--tw-text-opacity))\n}\n.loading-text div[data-v-5eb87f76]:first-child{\n  text-align:right\n}',""]),o.locals={},n.exports=o},962:function(n,t,e){"use strict";e.r(t);e(92);var o={name:"CLoading",props:{show:{type:Boolean,required:!0}},data:function(){return{i:0,dots:[".","..","...","...."],interval:null}},mounted:function(){this.setIntervalTouch()},methods:{touch:function(){this.i=this.i>2?0:this.i+1},setIntervalTouch:function(){this.interval||(this.interval=window.setInterval(this.touch,319))}}},r=(e(930),e(7)),component=Object(r.a)(o,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.show?e("div",{staticClass:"transform-gpu transition duration-500 ease-in-out"},[e("div",{staticClass:"mt-2 sm:mt-3 lg:mt-4 flex justify-center"},[e("IconDiceHyper",{staticClass:"animate-bounce w-10 h-10 text-violet-500 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"})],1),n._v(" "),e("div",{staticClass:"loading-text"},[e("div",[n._v("\n      Loading\n    ")]),n._v(" "),e("div",[n._v("\n      "+n._s(n.dots[n.i])+"\n    ")])])]):n._e()}),[],!1,null,"5eb87f76",null);t.default=component.exports;installComponents(component,{IconDiceHyper:e(376).default})}}]);