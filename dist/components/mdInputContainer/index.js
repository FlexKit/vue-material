/*!
* Vue Material v0.7.1
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=424)})({0:function(e,t){e.exports=function(e,t,n,o){var i,r=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(i=e,r=e.default);var a="function"==typeof r?r.options:r;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),o){var d=Object.create(a.computed||null);Object.keys(o).forEach((function(e){var t=o[e];d[e]=function(){return t}})),a.computed=d}return{esModule:i,exports:r,options:a}}},1:function(e,t,n){"use strict";function o(e){if(!e)return null;var t=e.mdTheme;return t||"md-theme"!==e.$options._componentTag||(t=e.mdName),t||o(e.$parent)}Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdTheme:String},computed:{mdEffectiveTheme:function(){return o(this)||this.$material.currentTheme},themeClass:function(){return this.$material.prefix+this.mdEffectiveTheme}},watch:{mdTheme:function(e){this.$material.useTheme(e)}},beforeMount:function(){var e=this.mdTheme;e&&this.$material.useTheme(e)}},e.exports=t.default},107:function(e,t,n){var o,i,r;!(function(n,u){i=[t,e],o=u,void 0!==(r="function"==typeof o?o.apply(t,i):o)&&(e.exports=r)})(this,(function(e,t){"use strict";function n(e){function t(){var t=window.getComputedStyle(e,null);"vertical"===t.resize?e.style.resize="none":"both"===t.resize&&(e.style.resize="horizontal"),d="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),isNaN(d)&&(d=0),a()}function n(t){var n=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=n,e.style.overflowY=t}function o(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}function i(){var t=e.style.height,n=o(e),i=document.documentElement&&document.documentElement.scrollTop;e.style.height="auto";var r=e.scrollHeight+d;if(0===e.scrollHeight)return void(e.style.height=t);e.style.height=r+"px",l=e.clientWidth,n.forEach((function(e){e.node.scrollTop=e.scrollTop})),i&&(document.documentElement.scrollTop=i)}function a(){i();var t=Math.round(parseFloat(e.style.height)),o=window.getComputedStyle(e,null),r=Math.round(parseFloat(o.height));if(r!==t?"visible"!==o.overflowY&&(n("visible"),i(),r=Math.round(parseFloat(window.getComputedStyle(e,null).height))):"hidden"!==o.overflowY&&(n("hidden"),i(),r=Math.round(parseFloat(window.getComputedStyle(e,null).height))),s!==r){s=r;var a=u("autosize:resized");try{e.dispatchEvent(a)}catch(e){}}}if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!r.has(e)){var d=null,l=e.clientWidth,s=null,c=function(){e.clientWidth!==l&&a()},p=function(t){window.removeEventListener("resize",c,!1),e.removeEventListener("input",a,!1),e.removeEventListener("keyup",a,!1),e.removeEventListener("autosize:destroy",p,!1),e.removeEventListener("autosize:update",a,!1),Object.keys(t).forEach((function(n){e.style[n]=t[n]})),r.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",p,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",a,!1),window.addEventListener("resize",c,!1),e.addEventListener("input",a,!1),e.addEventListener("autosize:update",a,!1),e.style.overflowX="hidden",e.style.wordWrap="break-word",r.set(e,{destroy:p,update:a}),t()}}function o(e){var t=r.get(e);t&&t.destroy()}function i(e){var t=r.get(e);t&&t.update()}var r="function"==typeof Map?new Map:(function(){var e=[],t=[];return{has:function(t){return e.indexOf(t)>-1},get:function(n){return t[e.indexOf(n)]},set:function(n,o){e.indexOf(n)===-1&&(e.push(n),t.push(o))},delete:function(n){var o=e.indexOf(n);o>-1&&(e.splice(o,1),t.splice(o,1))}}})(),u=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){u=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}var a=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?(a=function(e){return e},a.destroy=function(e){return e},a.update=function(e){return e}):(a=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],(function(e){return n(e,t)})),e},a.destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],o),e},a.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],i),e}),t.exports=a}))},147:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(69),r=o(i);t.default={name:"md-input",mixins:[r.default],props:{type:{type:String,default:"text"},min:[String,Number],max:[String,Number]},data:function(){return{showPassword:!1,isInputPassword:!1}},computed:{classes:function(){return{"md-has-password":this.isInputPassword}}},methods:{handleTogglePasswordType:function(){"password"===this.field.type?(this.field.type="text",this.showPassword=!0):(this.field.type="password",this.showPassword=!1),this.field.focus()}},mounted:function(){if(this.isInputPassword="password"===this.type,"file"===this.type)throw this.$destroy(),new Error("You should use the md-file")}},e.exports=t.default},148:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"md-input-container",props:{mdClearable:Boolean,hasFile:Boolean,hasValue:Boolean,hasPlaceholder:Boolean,isFocused:Boolean,isDisabled:Boolean,isRequired:Boolean,inputLength:Number,counterLength:Number},computed:{classes:function(){return{"md-clearable":this.mdClearable,"md-has-value":this.hasValue,"md-input-placeholder":this.hasPlaceholder,"md-input-disabled":this.isDisabled,"md-input-required":this.isRequired,"md-input-focused":this.isFocused}}}},e.exports=t.default},149:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(107),r=o(i),u=n(69),a=o(u);t.default={name:"md-textarea",mixins:[a.default],watch:{value:function(){r.default.update(this.field)}},mounted:function(){var e=this;this.field.getAttribute("rows")||this.field.setAttribute("rows","1"),(0,r.default)(this.field),setTimeout((function(){return r.default.update(e.field)}),200)},beforeDestroy:function(){r.default.destroy(this.field)}},e.exports=t.default},218:function(e,t){},257:function(e,t){e.exports=".THEME_NAME.md-input-container .md-field:before{background-color:BACKGROUND-CONTRAST-0.12}.THEME_NAME.md-input-container label,.THEME_NAME.md-input-container .md-icon{color:BACKGROUND-CONTRAST-0.54}.THEME_NAME.md-input-container.md-input-invalid .md-field:before{background-color:WARN-COLOR}.THEME_NAME.md-input-container.md-input-invalid label,.THEME_NAME.md-input-container.md-input-invalid .md-field,.THEME_NAME.md-input-container.md-input-invalid .md-error,.THEME_NAME.md-input-container.md-input-invalid .md-count,.THEME_NAME.md-input-container.md-input-invalid .md-icon{color:WARN-COLOR}.THEME_NAME.md-input-container.md-input-focused.md-input-required label:after{color:WARN-COLOR}.THEME_NAME.md-input-container.md-input-focused .md-field{text-shadow:0 0 0 BACKGROUND-CONTRAST}.THEME_NAME.md-input-container.md-input-focused .md-field:after{background-color:PRIMARY-COLOR}.THEME_NAME.md-input-container.md-input-focused label,.THEME_NAME.md-input-container.md-input-focused .md-icon{color:PRIMARY-COLOR}.THEME_NAME.md-input-container.md-input-disabled .md-field:before{background-color:transparent;background-image:linear-gradient(to right, BACKGROUND-CONTRAST-0.38 0%, BACKGROUND-CONTRAST-0.38 33%, transparent 0%)}.THEME_NAME.md-input-container.md-input-disabled label,.THEME_NAME.md-input-container.md-input-disabled .md-field,.THEME_NAME.md-input-container.md-input-disabled .md-error,.THEME_NAME.md-input-container.md-input-disabled .md-count,.THEME_NAME.md-input-container.md-input-disabled .md-icon,.THEME_NAME.md-input-container.md-input-disabled ::-webkit-input-placeholder{color:BACKGROUND-CONTRAST-0.38}.THEME_NAME.md-input-container.md-has-password.md-input-focused .md-toggle-password{color:BACKGROUND-CONTRAST-0.54}.THEME_NAME.md-input-container.md-has-password .md-toggle-password{color:BACKGROUND-CONTRAST-0.38}.THEME_NAME.md-input-container.md-has-password .md-toggle-password .md-ink-ripple{color:BACKGROUND-CONTRAST-0.87}.THEME_NAME.md-input-container.md-clearable.md-input-focused .md-clear-input{color:BACKGROUND-CONTRAST-0.54}.THEME_NAME.md-input-container.md-clearable .md-clear-input{color:BACKGROUND-CONTRAST-0.38}.THEME_NAME.md-input-container.md-clearable .md-clear-input .md-ink-ripple{color:BACKGROUND-CONTRAST-0.87}.THEME_NAME.md-input-container.md-has-select:hover .md-select:not(.md-disabled){color:BACKGROUND-CONTRAST-0.54}.THEME_NAME.md-input-container.md-has-select:hover .md-select:not(.md-disabled) .md-field:before{color:BACKGROUND-CONTRAST-0.87}\n"},303:function(e,t,n){var o=n(0)(n(147),n(361),null,null);e.exports=o.exports},304:function(e,t,n){n(218);var o=n(0)(n(148),n(363),null,null);e.exports=o.exports},305:function(e,t,n){var o=n(0)(n(149),n(390),null,null);e.exports=o.exports},361:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("md-input-container",{class:[e.themeClass,e.classes],attrs:{mdClearable:e.mdClearable,isFocused:e.focused,isDisabled:e.disabled,isRequired:e.required,inputLength:e.inputLength,counterLength:e.counterLength,hasValue:!!e.currentValue,hasPlaceholder:!!e.placeholder},on:{clear:e.clearValue}},[e._t("before"),e._v(" "),n("div",{staticClass:"md-field"},[e.label?n("label",[e._v(e._s(e.label))]):e._e(),e._v(" "),n("input",{ref:"field",staticClass:"md-input",attrs:{min:e.min,max:e.max,type:e.type,disabled:e.disabled,required:e.required,autofocus:e.autofocus,maxlength:e.maxlength,placeholder:e.placeholder},domProps:{value:e.currentValue},on:{blur:e.onBlur,focus:e.onFocus,input:e.onInput,change:e.onChange}})]),e._v(" "),e.isInputPassword?n("md-button",{staticClass:"md-icon-button md-icon-input md-dense",nativeOn:{click:function(t){e.handleTogglePasswordType(t)}}},[n("md-icon",[e._v(e._s(e.showPassword?"visibility_off":"visibility"))])],1):e._e(),e._v(" "),e._t("after")],2)},staticRenderFns:[]}},363:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["md-input-container",e.classes]},[e._t("default"),e._v(" "),e.counterLength>0?n("span",{staticClass:"md-count"},[e._v("\n    "+e._s(e.inputLength)+" / "+e._s(e.counterLength)+"\n  ")]):e._e(),e._v(" "),e.mdClearable&&e.hasValue?n("md-button",{staticClass:"md-icon-button md-icon-input md-dense",nativeOn:{click:function(t){e.$emit("clear")}}},[n("md-icon",[e._v("clear")])],1):e._e()],2)},staticRenderFns:[]}},390:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("md-input-container",{class:e.themeClass,attrs:{mdClearable:e.mdClearable,isFocused:e.focused,isDisabled:e.disabled,isRequired:e.required,inputLength:e.inputLength,counterLength:e.counterLength,hasValue:!!e.currentValue,hasPlaceholder:!!e.placeholder},on:{clear:e.clearValue}},[e._t("before"),e._v(" "),n("div",{staticClass:"md-field"},[e.label?n("label",[e._v(e._s(e.label))]):e._e(),e._v(" "),n("textarea",{ref:"field",staticClass:"md-input",attrs:{disabled:e.disabled,required:e.required,autofocus:e.autofocus,maxlength:e.maxlength,placeholder:e.placeholder},domProps:{value:e.currentValue},on:{blur:e.onBlur,focus:e.onFocus,input:e.onInput,change:e.onChange}})]),e._v(" "),e._t("after")],2)},staticRenderFns:[]}},424:function(e,t,n){e.exports=n(88)},69:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),r=o(i);t.default={mixins:[r.default],data:function(){return{field:null,focused:!1,currentValue:null}},props:{mdClearable:Boolean,label:[String,Number],value:[String,Number],placeholder:String,maxlength:[Number,String],required:Boolean,disabled:Boolean,autofocus:Boolean},computed:{inputLength:function(){return this.currentValue?this.currentValue.length:0},counterLength:function(){return Number(this.maxlength,10)}},watch:{value:function(e){this.currentValue=e}},methods:{updateValue:function(){this.currentValue=this.field.value||this.value},onFocus:function(){this.focused=!0,this.$emit("focus")},onBlur:function(){this.focused=!1,this.$emit("blur")},onInput:function(){this.updateValue(),this.$emit("input",this.field.value)},onChange:function(){this.updateValue(),this.$emit("change",this.field.value)},clearValue:function(){var e=this;this.field.value=null,this.$nextTick((function(){e.onInput(),e.onChange(),e.$emit("clear",null)}))},focus:function(){this.field.focus()}},mounted:function(){this.field=this.$refs.field,this.focused=this.autofocus,this.currentValue=this.value}},e.exports=t.default},88:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){e.component("md-input-container",u.default),e.component("md-input",d.default),e.component("md-textarea",s.default),e.material.styles.push(p.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var r=n(304),u=o(r),a=n(303),d=o(a),l=n(305),s=o(l),c=n(257),p=o(c);e.exports=t.default}})}));