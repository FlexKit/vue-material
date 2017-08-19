/*!
* Vue Material v0.7.1
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(n){if(i[n])return i[n].exports;var d=i[n]={i:n,l:!1,exports:{}};return e[n].call(d.exports,d,d.exports,t),d.l=!0,d.exports}var i={};return t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=448)})({0:function(e,t){e.exports=function(e,t,i,n){var d,s=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(d=e,s=e.default);var u="function"==typeof s?s.options:s;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),i&&(u._scopeId=i),n){var o=Object.create(u.computed||null);Object.keys(n).forEach((function(e){var t=n[e];o[e]=function(){return t}})),u.computed=o}return{esModule:d,exports:s,options:u}}},1:function(e,t,i){"use strict";function n(e){if(!e)return null;var t=e.mdTheme;return t||"md-theme"!==e.$options._componentTag||(t=e.mdName),t||n(e.$parent)}Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdTheme:String},computed:{mdEffectiveTheme:function(){return n(this)||this.$material.currentTheme},themeClass:function(){return this.$material.prefix+this.mdEffectiveTheme}},watch:{mdTheme:function(e){this.$material.useTheme(e)}},beforeMount:function(){var e=this.mdTheme;this.$material.useTheme(e||"default")}},e.exports=t.default},138:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),d=(function(e){return e&&e.__esModule?e:{default:e}})(n);t.default={name:"md-chip",props:{disabled:Boolean,mdDeletable:Boolean,mdEditable:Boolean},mixins:[d.default],computed:{classes:function(){return{"md-deletable":this.mdDeletable,"md-disabled":this.disabled,"md-editable":this.mdEditable}}}},e.exports=t.default},139:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var d=i(1),s=n(d),c=i(36),u=n(c);t.default={name:"md-chips",props:{value:Array,disabled:Boolean,mdInputId:String,mdInputName:String,mdInputPlaceholder:String,mdInputType:{type:String,default:"text"},mdStatic:Boolean,mdMax:{type:Number,default:1/0}},mixins:[s.default],data:function(){return{currentChip:null,selectedChips:this.value,inputId:this.mdInputId||"chips-"+(0,u.default)()}},watch:{value:function(e){this.selectedChips=e}},computed:{classes:function(){return{"md-static":this.mdStatic,"md-disabled":this.disabled,"md-chips":!0}}},methods:{applyInputFocus:function(){var e=this;this.$nextTick((function(){e.$refs.input.$el.focus()}))},addChip:function(){if(this.currentChip&&this.selectedChips.length<this.mdMax){var e=this.currentChip.trim();this.selectedChips.indexOf(e)<0&&(this.selectedChips.push(e),this.currentChip=null,this.$emit("input",this.selectedChips),this.$emit("change",this.selectedChips),this.applyInputFocus())}},deleteChip:function(e){var t=this.selectedChips.indexOf(e);t>=0&&this.selectedChips.splice(t,1),this.$emit("change",this.selectedChips),this.applyInputFocus()},editChip:function(e){var t=this.selectedChips.indexOf(e);t>=0&&this.selectedChips.splice(t,1),this.currentChip=e,this.$emit("change",this.selectedChips),this.applyInputFocus()},deleteLastChip:function(){this.currentChip||(this.selectedChips.pop(),this.$emit("change",this.selectedChips),this.applyInputFocus())}}},e.exports=t.default},244:function(e,t){},267:function(e,t){e.exports=".THEME_NAME.md-chip{background-color:BACKGROUND-CONTRAST-0.12}.THEME_NAME.md-chip.md-deletable:hover,.THEME_NAME.md-chip.md-deletable:focus,.THEME_NAME.md-chip.md-editable:hover,.THEME_NAME.md-chip.md-editable:focus{background-color:BACKGROUND-CONTRAST-0.54;color:BACKGROUND-COLOR}.THEME_NAME.md-chip.md-deletable:hover .md-delete,.THEME_NAME.md-chip.md-deletable:focus .md-delete,.THEME_NAME.md-chip.md-editable:hover .md-delete,.THEME_NAME.md-chip.md-editable:focus .md-delete{color:BACKGROUND-COLOR}.THEME_NAME.md-chip .md-delete{color:BACKGROUND-CONTRAST-0.38}.THEME_NAME.md-chip .md-delete .md-ripple{color:BACKGROUND-COLOR}.THEME_NAME.md-chip.md-primary{color:PRIMARY-CONTRAST;background-color:PRIMARY-COLOR}.THEME_NAME.md-chip.md-accent{color:ACCENT-CONTRAST;background-color:ACCENT-COLOR}.THEME_NAME.md-chip.md-warn{color:WARN-CONTRAST;background-color:WARN-COLOR}\n"},308:function(e,t,i){var n=i(0)(i(138),i(391),null,null);e.exports=n.exports},309:function(e,t,i){i(244);var n=i(0)(i(139),i(412),null,null);e.exports=n.exports},36:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){return Math.random().toString(36).slice(4)};t.default=n,e.exports=t.default},391:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"md-chip",class:[e.themeClass,e.classes],attrs:{tabindex:"0"}},[i("div",{staticClass:"md-chip-container",on:{click:function(t){!e.disabled&&e.mdEditable&&e.$emit("edit")}}},[e._t("default")],2),e._v(" "),e.mdDeletable?i("md-button",{staticClass:"md-icon-button md-dense md-delete",attrs:{tabindex:"-1"},nativeOn:{click:function(t){!e.disabled&&e.$emit("delete")},keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"delete",[8,46]))return null;!e.disabled&&e.$emit("delete")}}},[i("md-icon",{staticClass:"md-icon-delete"},[e._v("cancel")])],1):e._e()],1)},staticRenderFns:[]}},412:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("md-input-container",{staticClass:"md-chips",class:[e.themeClass,e.classes],nativeOn:{click:function(t){e.applyInputFocus(t)}}},[e._l(e.selectedChips,(function(t){return i("md-chip",{key:t,attrs:{"md-editable":!e.mdStatic,"md-deletable":!e.mdStatic,disabled:e.disabled},on:{edit:function(i){e.editChip(t)},delete:function(i){e.deleteChip(t)}}},[e._t("chip",[e._v(e._s(t))],{value:t})],2)})),e._v(" "),i("md-input",{directives:[{name:"show",rawName:"v-show",value:!e.mdStatic,expression:"!mdStatic"}],ref:"input",attrs:{type:e.mdInputType,placeholder:e.mdInputPlaceholder,id:e.inputId,name:e.mdInputName,disabled:e.disabled,tabindex:"0"},nativeOn:{keydown:[function(t){if(!("button"in t)&&e._k(t.keyCode,"delete",[8,46]))return null;e.deleteLastChip(t)},function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;t.preventDefault(),e.addChip(t)},function(t){if(!("button"in t)&&186!==t.keyCode)return null;t.preventDefault(),e.addChip(t)}]},model:{value:e.currentChip,callback:function(t){e.currentChip=t},expression:"currentChip"}}),e._v(" "),e._t("default")],2)},staticRenderFns:[]}},448:function(e,t,i){e.exports=i(83)},83:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function d(e){e.component("md-chips",c.default),e.component("md-chip",o.default),e.material.styles.push(l.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=d;var s=i(309),c=n(s),u=i(308),o=n(u),r=i(267),l=n(r);e.exports=t.default}})}));