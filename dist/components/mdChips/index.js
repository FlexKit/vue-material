/*!
* Vue Material v0.7.1
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(n){if(i[n])return i[n].exports;var d=i[n]={i:n,l:!1,exports:{}};return e[n].call(d.exports,d,d.exports,t),d.l=!0,d.exports}var i={};return t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=414)})({0:function(e,t){e.exports=function(e,t,i,n){var d,s=e=e||{},r=typeof e.default;"object"!==r&&"function"!==r||(d=e,s=e.default);var c="function"==typeof s?s.options:s;if(t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns),i&&(c._scopeId=i),n){var l=Object.create(c.computed||null);Object.keys(n).forEach((function(e){var t=n[e];l[e]=function(){return t}})),c.computed=l}return{esModule:d,exports:s,options:c}}},1:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdTheme:String},data:function(){return{closestThemedParent:!1}},methods:{getClosestThemedParent:function(e){return!(!e||!e.$el||0===e._uid)&&(e.mdTheme||e.mdName?e:this.getClosestThemedParent(e.$parent))}},computed:{themeClass:function(){if(this.mdTheme)return"md-theme-"+this.mdTheme;var e=this.closestThemedParent.mdTheme;return e||(e=this.closestThemedParent?this.closestThemedParent.mdName:this.$material.currentTheme),"md-theme-"+e}},mounted:function(){this.closestThemedParent=this.getClosestThemedParent(this.$parent),this.$material.currentTheme||this.$material.setCurrentTheme("default")}},e.exports=t.default},133:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var d=i(1),s=n(d);t.default={name:"md-chip",props:{disabled:Boolean,mdDeletable:Boolean,mdEditable:Boolean},mixins:[s.default],computed:{classes:function(){return{"md-deletable":this.mdDeletable,"md-disabled":this.disabled,"md-editable":this.mdEditable}}}},e.exports=t.default},134:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var d=i(1),s=n(d),r=i(44),c=n(r);t.default={name:"md-chips",props:{value:Array,disabled:Boolean,mdInputId:String,mdInputName:String,mdInputPlaceholder:String,mdInputType:{type:String,default:"text"},mdStatic:Boolean,mdMax:{type:Number,default:1/0}},mixins:[s.default],data:function(){return{currentChip:null,selectedChips:this.value,inputId:this.mdInputId||"chips-"+(0,c.default)()}},watch:{value:function(e){this.selectedChips=e}},computed:{classes:function(){return{"md-static":this.mdStatic,"md-disabled":this.disabled}}},methods:{applyInputFocus:function(){var e=this;this.$nextTick((function(){e.$refs.input.$el.focus()}))},addChip:function(){if(this.currentChip&&this.selectedChips.length<this.mdMax){var e=this.currentChip.trim();this.selectedChips.indexOf(e)<0&&(this.selectedChips.push(e),this.currentChip=null,this.$emit("input",this.selectedChips),this.$emit("change",this.selectedChips),this.applyInputFocus())}},deleteChip:function(e){var t=this.selectedChips.indexOf(e);t>=0&&this.selectedChips.splice(t,1),this.$emit("change",this.selectedChips),this.applyInputFocus()},editChip:function(e){var t=this.selectedChips.indexOf(e);t>=0&&this.selectedChips.splice(t,1),this.currentChip=e,this.$emit("change",this.selectedChips),this.applyInputFocus()},deleteLastChip:function(){this.currentChip||(this.selectedChips.pop(),this.$emit("change",this.selectedChips),this.applyInputFocus())}}},e.exports=t.default},228:function(e,t){},248:function(e,t){e.exports=".THEME_NAME.md-chip{background-color:BACKGROUND-CONTRAST-0.12}.THEME_NAME.md-chip.md-deletable:hover,.THEME_NAME.md-chip.md-deletable:focus,.THEME_NAME.md-chip.md-editable:hover,.THEME_NAME.md-chip.md-editable:focus{background-color:BACKGROUND-CONTRAST-0.54;color:BACKGROUND-COLOR}.THEME_NAME.md-chip.md-deletable:hover .md-delete,.THEME_NAME.md-chip.md-deletable:focus .md-delete,.THEME_NAME.md-chip.md-editable:hover .md-delete,.THEME_NAME.md-chip.md-editable:focus .md-delete{color:BACKGROUND-COLOR}.THEME_NAME.md-chip .md-delete{color:BACKGROUND-CONTRAST-0.38}.THEME_NAME.md-chip .md-delete .md-ripple{color:BACKGROUND-COLOR}.THEME_NAME.md-chip.md-primary{color:PRIMARY-CONTRAST;background-color:PRIMARY-COLOR}.THEME_NAME.md-chip.md-accent{color:ACCENT-CONTRAST;background-color:ACCENT-COLOR}.THEME_NAME.md-chip.md-warn{color:WARN-CONTRAST;background-color:WARN-COLOR}\n"},286:function(e,t,i){var n=i(0)(i(133),i(362),null,null);e.exports=n.exports},287:function(e,t,i){i(228);var n=i(0)(i(134),i(379),null,null);e.exports=n.exports},362:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"md-chip",class:[e.themeClass,e.classes],attrs:{tabindex:"0"}},[i("div",{staticClass:"md-chip-container",on:{click:function(t){!e.disabled&&e.mdEditable&&e.$emit("edit")}}},[e._t("default")],2),e._v(" "),e.mdDeletable?i("md-button",{staticClass:"md-icon-button md-dense md-delete",attrs:{tabindex:"-1"},nativeOn:{click:function(t){!e.disabled&&e.$emit("delete")},keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"delete",[8,46]))return null;!e.disabled&&e.$emit("delete")}}},[i("md-icon",{staticClass:"md-icon-delete"},[e._v("cancel")])],1):e._e()],1)},staticRenderFns:[]}},379:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"md-chips",class:[e.themeClass,e.classes]},[i("md-input-container",{nativeOn:{click:function(t){e.applyInputFocus(t)}}},[e._l(e.selectedChips,(function(t){return i("md-chip",{key:t,attrs:{"md-deletable":!e.mdStatic,"md-editable":!e.mdStatic,disabled:e.disabled},on:{delete:function(i){e.deleteChip(t)},edit:function(i){e.editChip(t)}}},[e._t("default",null,{value:t})],2)})),e._v(" "),i("md-input",{directives:[{name:"show",rawName:"v-show",value:!e.mdStatic,expression:"!mdStatic"}],ref:"input",attrs:{type:e.mdInputType,placeholder:e.mdInputPlaceholder,id:e.inputId,name:e.mdInputName,disabled:e.disabled,tabindex:"0"},nativeOn:{keydown:[function(t){if(!("button"in t)&&e._k(t.keyCode,"delete",[8,46]))return null;e.deleteLastChip(t)},function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;t.preventDefault(),e.addChip(t)}]},model:{value:e.currentChip,callback:function(t){e.currentChip=t},expression:"currentChip"}})],2)],1)},staticRenderFns:[]}},414:function(e,t,i){e.exports=i(82)},44:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){return Math.random().toString(36).slice(4)};t.default=n,e.exports=t.default},82:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function d(e){e.component("md-chips",r.default),e.component("md-chip",l.default),e.material.styles.push(u.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=d;var s=i(287),r=n(s),c=i(286),l=n(c),o=i(248),u=n(o);e.exports=t.default}})}));