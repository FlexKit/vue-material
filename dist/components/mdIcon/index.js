/*!
* Vue Material v0.7.1
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueMaterial=e():t.VueMaterial=e()})(this,(function(){return (function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=421)})({0:function(t,e){t.exports=function(t,e,n,r){var o,i=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(o=t,i=t.default);var u="function"==typeof i?i.options:i;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),n&&(u._scopeId=n),r){var c=Object.create(u.computed||null);Object.keys(r).forEach((function(t){var e=r[t];c[t]=function(){return e}})),u.computed=c}return{esModule:o,exports:i,options:u}}},1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{mdTheme:String},data:function(){return{closestThemedParent:!1}},methods:{getClosestThemedParent:function(t){return!(!t||!t.$el||0===t._uid)&&(t.mdTheme||t.mdName?t:this.getClosestThemedParent(t.$parent))}},computed:{themeClass:function(){if(this.mdTheme)return"md-theme-"+this.mdTheme;var t=this.closestThemedParent.mdTheme;return t||(t=this.closestThemedParent?this.closestThemedParent.mdName:this.$material.currentTheme),"md-theme-"+t}},mounted:function(){this.closestThemedParent=this.getClosestThemedParent(this.$parent),this.$material.currentTheme||this.$material.setCurrentTheme("default")}},t.exports=e.default},144:function(t,e,n){"use strict";(function(r){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(242),s=o(i),u=n(1),c=o(u),a={};e.default={name:"md-icon",props:{mdSrc:String,mdIconset:{type:String,default:"material-icons"},mdSvgContent:String},data:function(){return{svgContent:null,imageSrc:null}},mixins:[c.default],watch:{mdSrc:function(){this.svgContent=null,this.imageSrc=null,this.checkSrc()}},methods:{isImage:function(t){return t.indexOf("image")>=0},isSVG:function(t){return t.indexOf("svg")>=0},setSVGContent:function(t){var e=this;this.svgContent=t,this.$nextTick((function(){e.$el.children[0].removeAttribute("fill")}))},loadSVG:function(){if(a[this.mdSrc])this.setSVGContent(a[this.mdSrc]);else{var t=new XMLHttpRequest,e=this;t.open("GET",s.default.join(r,this.mdSrc),!0),t.onload=function(){var t=this.getResponseHeader("content-type");this.status>=200&&this.status<400&&e.isImage(t)?e.isSVG(t)?(a[e.mdSrc]=this.response,e.setSVGContent(this.response)):e.loadImage():console.warn("The file "+e.mdSrc+" is not a valid image.")},t.send()}},loadImage:function(){this.imageSrc=this.mdSrc},checkSrc:function(){this.mdSrc&&(this.mdSrc.indexOf(".svg")>=0?this.loadSVG():this.loadImage())}},mounted:function(){this.checkSrc()}},t.exports=e.default}).call(e,"/")},216:function(t,e){},242:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var o=t[r];"."===o?t.splice(r,1):".."===o?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}var o=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,i=function(t){return o.exec(t).slice(1)};e.resolve=function(){for(var e="",o=!1,i=arguments.length-1;i>=-1&&!o;i--){var s=i>=0?arguments[i]:t.cwd();if("string"!=typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(e=s+"/"+e,o="/"===s.charAt(0))}return e=n(r(e.split("/"),(function(t){return!!t})),!o).join("/"),(o?"/":"")+e||"."},e.normalize=function(t){var o=e.isAbsolute(t),i="/"===s(t,-1);return t=n(r(t.split("/"),(function(t){return!!t})),!o).join("/"),t||o||(t="."),t&&i&&(t+="/"),(o?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(r(t,(function(t,e){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length&&""===t[e];e++);for(var n=t.length-1;n>=0&&""===t[n];n--);return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var o=r(t.split("/")),i=r(n.split("/")),s=Math.min(o.length,i.length),u=s,c=0;c<s;c++)if(o[c]!==i[c]){u=c;break}for(var a=[],c=u;c<o.length;c++)a.push("..");return a=a.concat(i.slice(u)),a.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var e=i(t),n=e[0],r=e[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},e.basename=function(t,e){var n=i(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){return i(t)[3]};var s="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(e,n(243))},243:function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(l===setTimeout)return setTimeout(t,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function i(t){if(f===clearTimeout)return clearTimeout(t);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function s(){p&&m&&(p=!1,m.length?h=m.concat(h):g=-1,h.length&&u())}function u(){if(!p){var t=o(s);p=!0;for(var e=h.length;e;){for(m=h,h=[];++g<e;)m&&m[g].run();g=-1,e=h.length}m=null,p=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function a(){}var l,f,d=t.exports={};!(function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(t){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(t){f=r}})();var m,h=[],p=!1,g=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];h.push(new c(t,e)),1!==h.length||p||o(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=a,d.addListener=a,d.once=a,d.off=a,d.removeListener=a,d.removeAllListeners=a,d.emit=a,d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},254:function(t,e){t.exports=".THEME_NAME.md-icon.md-primary{color:PRIMARY-COLOR}.THEME_NAME.md-icon.md-accent{color:ACCENT-COLOR}.THEME_NAME.md-icon.md-warn{color:WARN-COLOR}\n"},300:function(t,e,n){n(216);var r=n(0)(n(144),n(361),null,null);t.exports=r.exports},361:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.svgContent||t.mdSvgContent?n("i",{staticClass:"md-icon",class:[t.themeClass],domProps:{innerHTML:t._s(t.mdSvgContent||t.svgContent)}}):t.imageSrc?n("md-image",{staticClass:"md-icon",class:[t.themeClass],attrs:{"md-src":t.imageSrc}}):n("i",{staticClass:"md-icon",class:[t.themeClass,t.mdIconset],attrs:{"aria-hidden":!!t.mdIconset}},[t._t("default")],2)},staticRenderFns:[]}},421:function(t,e,n){t.exports=n(86)},86:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){t.component("md-icon",s.default),t.material.styles.push(c.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var i=n(300),s=r(i),u=n(254),c=r(u);t.exports=e.default}})}));