/*!
* Vue Material v0.7.1
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=410)})({0:function(e,t){e.exports=function(e,t,r,n){var a,o=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(a=e,o=e.default);var c="function"==typeof o?o.options:o;if(t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns),r&&(c._scopeId=r),n){var d=Object.create(c.computed||null);Object.keys(n).forEach((function(e){var t=n[e];d[e]=function(){return t}})),c.computed=d}return{esModule:a,exports:o,options:c}}},1:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdTheme:String},data:function(){return{closestThemedParent:!1}},methods:{getClosestThemedParent:function(e){return!(!e||!e.$el||0===e._uid)&&(e.mdTheme||e.mdName?e:this.getClosestThemedParent(e.$parent))}},computed:{themeClass:function(){if(this.mdTheme)return"md-theme-"+this.mdTheme;var e=this.closestThemedParent.mdTheme;return e||(e=this.closestThemedParent?this.closestThemedParent.mdName:this.$material.currentTheme),"md-theme-"+e}},mounted:function(){this.closestThemedParent=this.getClosestThemedParent(this.$parent),this.$material.currentTheme||this.$material.setCurrentTheme("default")}},e.exports=t.default},116:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),o=n(a);t.default={name:"md-avatar",mixins:[o.default]},e.exports=t.default},224:function(e,t){},244:function(e,t){e.exports=".THEME_NAME.md-avatar.md-primary.md-avatar-icon{background-color:PRIMARY-COLOR}.THEME_NAME.md-avatar.md-primary.md-avatar-icon .md-icon{color:PRIMARY-CONTRAST-0.99999}.THEME_NAME.md-avatar.md-accent.md-avatar-icon{background-color:ACCENT-COLOR}.THEME_NAME.md-avatar.md-accent.md-avatar-icon .md-icon{color:ACCENT-CONTRAST-0.99999}.THEME_NAME.md-avatar.md-warn.md-avatar-icon{background-color:WARN-COLOR}.THEME_NAME.md-avatar.md-warn.md-avatar-icon .md-icon{color:WARN-CONTRAST-0.99999}\n"},272:function(e,t,r){r(224);var n=r(0)(r(116),r(377),null,null);e.exports=n.exports},377:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"md-avatar",class:[e.themeClass]},[e._t("default")],2)},staticRenderFns:[]}},410:function(e,t,r){e.exports=r(75)},75:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){e.component("md-avatar",u.default),e.material.styles.push(d.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var o=r(272),u=n(o),c=r(244),d=n(c);e.exports=t.default}})}));