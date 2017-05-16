/*!
* Vue Material v0.7.1
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueMaterial=e():t.VueMaterial=e()})(this,(function(){return (function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=429)})({0:function(t,e){t.exports=function(t,e,n,r){var o,i=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(o=t,i=t.default);var c="function"==typeof i?i.options:i;if(e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),n&&(c._scopeId=n),r){var s=Object.create(c.computed||null);Object.keys(r).forEach((function(t){var e=r[t];s[t]=function(){return e}})),c.computed=s}return{esModule:o,exports:i,options:c}}},1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{mdTheme:String},data:function(){return{closestThemedParent:!1}},methods:{getClosestThemedParent:function(t){return!(!t||!t.$el||0===t._uid)&&(t.mdTheme||t.mdName?t:this.getClosestThemedParent(t.$parent))}},computed:{themeClass:function(){if(this.mdTheme)return"md-theme-"+this.mdTheme;var t=this.closestThemedParent.mdTheme;return t||(t=this.closestThemedParent?this.closestThemedParent.mdName:this.$material.currentTheme),"md-theme-"+t}},mounted:function(){this.closestThemedParent=this.getClosestThemedParent(this.$parent),this.$material.currentTheme||this.$material.setCurrentTheme("default")}},t.exports=e.default},10:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},11:function(t,e,n){var r=n(30),o=n(13);t.exports=function(t){return r(o(t))}},12:function(t,e,n){var r=n(10);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},13:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},14:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},15:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},16:function(t,e,n){var r=n(2),o=n(5),i=n(26),u=n(9),c=function(t,e,n){var s,a,l,f=t&c.F,d=t&c.G,p=t&c.S,h=t&c.P,m=t&c.B,v=t&c.W,x=d?o:o[e]||(o[e]={}),y=x.prototype,_=d?r:p?r[e]:(r[e]||{}).prototype;d&&(n=e);for(s in n)(a=!f&&_&&void 0!==_[s])&&s in x||(l=a?_[s]:n[s],x[s]=d&&"function"!=typeof _[s]?n[s]:m&&a?i(l,r):v&&_[s]==l?(function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e})(l):h&&"function"==typeof l?i(Function.call,l):l,h&&((x.virtual||(x.virtual={}))[s]=l,t&c.R&&y&&!y[s]&&u(y,s,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},162:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"md-option",props:{value:{required:!0},multiple:Boolean,selected:Boolean,disabled:Boolean},computed:{classes:function(){return{"md-selected":this.selected,"md-checked":this.multiple&&this.selected}}},watch:{selected:function(t){this.updateSelectedText(this.$el.innerText,t)}},methods:{normalizeText:function(t){return t.trim().replace(/\n|\t/g," ").replace(/\s+/g," ")},updateSelectedText:function(t,e){var n=this.normalizeText(t);this.$emit("updateText",n,e)}},mounted:function(){this.selected&&this.updateSelectedText(this.$el.innerText,this.selected)}},t.exports=e.default},163:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(68),i=r(o),u=function t(e,n,r){var o=e.data,u=e.componentOptions;if(!u||"md-option"!==u.tag)return e.children&&(e.children=e.children.map((function(e){return t(e,n,r)}))),e;var c=u.children,s=u.listeners,a=u.propsData;return n("md-option",(0,i.default)({},o,{props:(0,i.default)({},a,{multiple:r.parent.multiple,selected:r.parent.checkSelected(a.value)}),on:(0,i.default)({},s,{selected:r.parent.changeValue,updateText:r.parent.updateSelectedText})}),c)};e.default={functional:!0,render:function(t,e){return t("md-menu-content",e.data,e.children.map((function(n){return u(n,t,e)})))}},t.exports=e.default},164:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(46),i=r(o),u=n(1),c=r(u),s=n(319),a=r(s);e.default={name:"md-select",model:{prop:"value",event:"change"},props:{required:Boolean,disabled:Boolean,label:[String,Number],items:[Array,Object],value:[String,Number,Array,Object],valueKey:String,multiple:Boolean,placeholder:String,mdMenuClass:String},mixins:[c.default],components:{mdOptionList:a.default},data:function(){return{selectedText:""}},computed:{validValue:function(){return this.multiple&&!Array.isArray(this.value)?[]:this.value},hasValue:function(){return this.multiple?!(!this.validValue||!this.validValue.length):!!this.validValue},classes:function(){return{"md-disabled":this.disabled}},contentClasses:function(){return["md-select-content",this.themeClass,this.mdMenuClass,{"md-multiple":this.multiple}]},textValue:function(){return this.multiple&&this.selectedText?this.selectedText.join(", "):this.selectedText}},methods:{getValue:function(t){return this.valueKey?t[this.valueKey]:t},checkSelected:function(t){var e=this.getValue(t);return this.multiple?this.validValue.includes(e):this.validValue===e},changeValue:function(t,e){this.multiple&&e&&(t=this.validValue.filter((function(e){return e!==t}))),this.multiple&&!e&&(t=[].concat((0,i.default)(this.validValue),[t])),this.$emit("change",t),this.$emit("selected",t)},updateSelectedText:function(t,e){return this.multiple&&!e&&this.selectedText?this.selectedText=this.selectedText.filter((function(e){return e!==t})):this.multiple&&e?this.selectedText=[].concat((0,i.default)(this.selectedText),[t]):(this.hasValue&&e&&(this.selectedText=t),void(this.hasValue||(this.selectedText=null)))}},mounted:function(){if(this.items&&!this.$scopedSlots.default)throw new Error("Missing options template inside md-select")}},t.exports=e.default},17:function(t,e,n){var r=n(32),o=n(21);t.exports=Object.keys||function(t){return r(t,o)}},18:function(t,e,n){var r=n(22)("keys"),o=n(19);t.exports=function(t){return r[t]||(r[t]=o(t))}},19:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},2:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},20:function(t,e,n){var r=n(13);t.exports=function(t){return Object(r(t))}},21:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},22:function(t,e,n){var r=n(2),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},23:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},235:function(t,e){},24:function(t,e){t.exports={}},25:function(t,e,n){var r=n(10),o=n(2).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},26:function(t,e,n){var r=n(34);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},261:function(t,e){t.exports=".THEME_NAME>.md-select:after{border-color:BACKGROUND-CONTRAST-0.54}.THEME_NAME.md-select-content .md-menu-item.md-selected,.THEME_NAME.md-select-content .md-menu-item.md-checked{color:PRIMARY-COLOR}\n"},27:function(t,e,n){var r=n(15),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},28:function(t,e,n){var r=n(10);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},3:function(t,e,n){var r=n(22)("wks"),o=n(19),i=n(2).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},30:function(t,e,n){var r=n(23);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},31:function(t,e,n){t.exports=!n(4)&&!n(8)((function(){return 7!=Object.defineProperty(n(25)("div"),"a",{get:function(){return 7}}).a}))},318:function(t,e,n){var r=n(0)(n(162),n(387),null,null);t.exports=r.exports},319:function(t,e,n){var r=n(0)(n(163),null,null,null);t.exports=r.exports},32:function(t,e,n){var r=n(6),o=n(11),i=n(35)(!1),u=n(18)("IE_PROTO");t.exports=function(t,e){var n,c=o(t),s=0,a=[];for(n in c)n!=u&&r(c,n)&&a.push(n);for(;e.length>s;)r(c,n=e[s++])&&(~i(a,n)||a.push(n));return a}},320:function(t,e,n){n(235);var r=n(0)(n(164),n(400),null,null);t.exports=r.exports},33:function(t,e,n){var r=n(7).f,o=n(6),i=n(3)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},34:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},35:function(t,e,n){var r=n(11),o=n(27),i=n(36);t.exports=function(t){return function(e,n,u){var c,s=r(e),a=o(s.length),l=i(u,a);if(t&&n!=n){for(;a>l;)if((c=s[l++])!=c)return!0}else for(;a>l;l++)if((t||l in s)&&s[l]===n)return t||l||0;return!t&&-1}}},36:function(t,e,n){var r=n(15),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},37:function(t,e){t.exports=!0},387:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-menu-item",{class:["md-option",t.classes],attrs:{disabled:t.disabled,tabindex:"-1"},nativeOn:{click:function(e){t.$emit("selected",t.value,t.selected,t.$el.innerText,e)}}},[t.multiple?n("md-checkbox",{staticClass:"md-primary",attrs:{checked:t.selected}},[t._t("default")],2):t._t("default")],2)},staticRenderFns:[]}},39:function(t,e,n){"use strict";var r=n(37),o=n(16),i=n(42),u=n(9),c=n(6),s=n(24),a=n(48),l=n(33),f=n(51),d=n(3)("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,e,n,m,v,x,y){a(n,e,m);var _,b,g,T=function(t){if(!p&&t in S)return S[t];switch(t){case"keys":return function(){return new n(this,t)};case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},O=e+" Iterator",j="values"==v,w=!1,S=t.prototype,M=S[d]||S["@@iterator"]||v&&S[v],P=M||T(v),A=v?j?T("entries"):P:void 0,E="Array"==e?S.entries||M:M;if(E&&(g=f(E.call(new t)))!==Object.prototype&&(l(g,O,!0),r||c(g,d)||u(g,d,h)),j&&M&&"values"!==M.name&&(w=!0,P=function(){return M.call(this)}),r&&!y||!p&&!w&&S[d]||u(S,d,P),s[e]=P,s[O]=h,v)if(_={values:j?P:T("values"),keys:x?P:T("keys"),entries:A},y)for(b in _)b in S||i(S,b,_[b]);else o(o.P+o.F*(p||w),e,_);return _}},4:function(t,e,n){t.exports=!n(8)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},40:function(t,e,n){var r=n(12),o=n(49),i=n(21),u=n(18)("IE_PROTO"),c=function(){},s=function(){var t,e=n(25)("iframe"),r=i.length;for(e.style.display="none",n(47).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object</script>"),t.close(),s=t.F;r--;)delete s.prototype[i[r]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(c.prototype=r(t),n=new c,c.prototype=null,n[u]=t):n=s(),void 0===e?n:o(n,e)}},400:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-input-container",{class:t.themeClass,attrs:{hasValue:t.hasValue,hasPlaceholder:!!t.placeholder,isDisabled:!!t.disabled,isRequired:!!t.required}},[t._t("before"),t._v(" "),n("div",{staticClass:"md-select",class:t.classes},[t.label?n("label",[t._v(t._s(t.label))]):t._e(),t._v(" "),n("md-menu",{attrs:{"md-full-width":"","md-close-on-select":!t.multiple},on:{open:function(e){t.$emit("opened")},close:function(e){t.$emit("closed")}}},[n("div",{staticClass:"md-field md-select-value",attrs:{"md-menu-trigger":""}},[t.$scopedSlots.selection?[t._l(t.validValue,(function(e,n){return t.multiple?t._t("selection",null,{item:e,text:t.selectedText[n]}):t._e()})),t._v(" "),t.multiple?t._e():t._t("selection",null,{item:t.validValue,text:t.selectedText})]:n("div",{staticClass:"value"},[t._v(t._s(t.textValue||t.placeholder))])],2),t._v(" "),t.items?n("md-menu-content",{class:t.contentClasses},[t._l(t.items,(function(e){return n("md-option",{key:t.getValue(e),attrs:{value:t.getValue(e),selectedText:t.selectedText,multiple:t.multiple,selected:t.checkSelected(e)},on:{selected:t.changeValue,updateText:t.updateSelectedText}},[t._t("default",null,{item:e})],2)}))],2):n("md-option-list",{class:t.contentClasses},[t._t("default")],2)],1)],1),t._v(" "),t._t("after")],2)},staticRenderFns:[]}},41:function(t,e){e.f={}.propertyIsEnumerable},42:function(t,e,n){t.exports=n(9)},429:function(t,e,n){t.exports=n(94)},43:function(t,e,n){"use strict";var r=n(52)(!0);n(39)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})}))},46:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(53),i=r(o);e.default=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,i.default)(t)}},47:function(t,e,n){t.exports=n(2).document&&document.documentElement},48:function(t,e,n){"use strict";var r=n(40),o=n(14),i=n(33),u={};n(9)(u,n(3)("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},49:function(t,e,n){var r=n(7),o=n(12),i=n(17);t.exports=n(4)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),c=u.length,s=0;c>s;)r.f(t,n=u[s++],e[n]);return t}},5:function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},50:function(t,e){e.f=Object.getOwnPropertySymbols},51:function(t,e,n){var r=n(6),o=n(20),i=n(18)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},52:function(t,e,n){var r=n(15),o=n(13);t.exports=function(t){return function(e,n){var i,u,c=String(o(e)),s=r(n),a=c.length;return s<0||s>=a?t?"":void 0:(i=c.charCodeAt(s),i<55296||i>56319||s+1===a||(u=c.charCodeAt(s+1))<56320||u>57343?t?c.charAt(s):i:t?c.slice(s,s+2):u-56320+(i-55296<<10)+65536)}}},53:function(t,e,n){t.exports={default:n(54),__esModule:!0}},54:function(t,e,n){n(43),n(65),t.exports=n(5).Array.from},56:function(t,e,n){var r=n(23),o=n(3)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=Object(t),o))?n:i?r(e):"Object"==(c=r(e))&&"function"==typeof e.callee?"Arguments":c}},57:function(t,e,n){"use strict";var r=n(7),o=n(14);t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},58:function(t,e,n){var r=n(24),o=n(3)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},59:function(t,e,n){var r=n(12);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},6:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},60:function(t,e,n){var r=n(3)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:n=!0}},i[r]=function(){return u},t(i)}catch(t){}return n}},64:function(t,e,n){var r=n(56),o=n(3)("iterator"),i=n(24);t.exports=n(5).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},65:function(t,e,n){"use strict";var r=n(26),o=n(16),i=n(20),u=n(59),c=n(58),s=n(27),a=n(57),l=n(64);o(o.S+o.F*!n(60)((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,o,f,d=i(t),p="function"==typeof this?this:Array,h=arguments.length,m=h>1?arguments[1]:void 0,v=void 0!==m,x=0,y=l(d);if(v&&(m=r(m,h>2?arguments[2]:void 0,2)),void 0==y||p==Array&&c(y))for(e=s(d.length),n=new p(e);e>x;x++)a(n,x,v?m(d[x],x):d[x]);else for(f=y.call(d),n=new p;!(o=f.next()).done;x++)a(n,x,v?u(f,m,[o.value,x],!0):o.value);return n.length=x,n}})},68:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(70),i=r(o);e.default=i.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},7:function(t,e,n){var r=n(12),o=n(31),i=n(28),u=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},70:function(t,e,n){t.exports={default:n(71),__esModule:!0}},71:function(t,e,n){n(74),t.exports=n(5).Object.assign},72:function(t,e,n){"use strict";var r=n(17),o=n(50),i=n(41),u=n(20),c=n(30),s=Object.assign;t.exports=!s||n(8)((function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=s({},t)[n]||Object.keys(s({},e)).join("")!=r}))?function(t,e){for(var n=u(t),s=arguments.length,a=1,l=o.f,f=i.f;s>a;)for(var d,p=c(arguments[a++]),h=l?r(p).concat(l(p)):r(p),m=h.length,v=0;m>v;)f.call(p,d=h[v++])&&(n[d]=p[d]);return n}:s},74:function(t,e,n){var r=n(16);r(r.S+r.F,"Object",{assign:n(72)})},8:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},9:function(t,e,n){var r=n(7),o=n(14);t.exports=n(4)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},94:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){t.component("md-select",u.default),t.component("md-option",s.default),t.material.styles.push(l.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var i=n(320),u=r(i),c=n(318),s=r(c),a=n(261),l=r(a);t.exports=e.default}})}));