/*!
* Vue Material v0.7.1
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueMaterial=e():t.VueMaterial=e()})(this,(function(){return (function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=423)})({0:function(t,e){t.exports=function(t,e,n,i){var o,s=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(o=t,s=t.default);var d="function"==typeof s?s.options:s;if(e&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns),n&&(d._scopeId=n),i){var u=Object.create(d.computed||null);Object.keys(i).forEach((function(t){var e=i[t];u[t]=function(){return e}})),d.computed=u}return{esModule:o,exports:s,options:d}}},1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{mdTheme:String},data:function(){return{closestThemedParent:!1}},methods:{getClosestThemedParent:function(t){return!(!t||!t.$el||0===t._uid)&&(t.mdTheme||t.mdName?t:this.getClosestThemedParent(t.$parent))}},computed:{themeClass:function(){if(this.mdTheme)return"md-theme-"+this.mdTheme;var t=this.closestThemedParent.mdTheme;return t||(t=this.closestThemedParent?this.closestThemedParent.mdName:this.$material.currentTheme),"md-theme-"+t}},mounted:function(){this.closestThemedParent=this.getClosestThemedParent(this.$parent),this.$material.currentTheme||this.$material.setCurrentTheme("default")}},t.exports=e.default},114:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t,e,n){var i=e.top,o=e.left,s=e.right,r=e.bottom,d=e.width,u=e.height,l=getComputedStyle(t),a=8+Math.abs(parseInt(l.marginTop,10)),h=8+Math.abs(parseInt(l.marginLeft,10)),m=8+Math.abs(parseInt(l.marginRight,10)),c=8+Math.abs(parseInt(l.marginBottom,10)),f=n.includes("top")?i+u-parseInt(l.height,10):i,p=n.includes("left")?o+d-parseInt(l.width,10):o,g=n.includes("right")?s+d-parseInt(l.width,10):s,C=n.includes("bottom")?r+u-parseInt(l.height,10):r,b=e.top-Math.abs(C)-a,v=e.left-Math.abs(g)-h,y=e.right-Math.abs(p)-m,w=e.bottom-Math.abs(f)-c;return p<h&&(e.left=h,e.right=e.right>m&&e.right>Math.abs(p)?y:m),g<m&&(e.right=m,e.left=e.left>h&&e.left>Math.abs(g)?v:h),f<a&&(e.top=a,e.bottom=e.bottom>c&&e.bottom>Math.abs(f)?w:c),C<c&&(e.bottom=c,e.top=e.top>a&&e.top>Math.abs(C)?b:a),window.innerWidth<=e.width+h+m&&(e.width=0),e};e.default=i,t.exports=e.default},157:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(38),s=i(o),r=n(114),d=i(r);e.default={name:"md-menu",props:{mdSize:{type:[Number,String],default:0},mdDirection:{type:String,default:"bottom right"},mdAlignTrigger:{type:Boolean,default:!1},mdOffsetX:{type:[Number,String],default:0},mdOffsetY:{type:[Number,String],default:0},mdCloseOnSelect:{type:Boolean,default:!0},mdFullWidth:{type:Boolean,default:!1}},data:function(){return{margin:8,active:!1}},watch:{mdSize:function(t,e){t>=1&&t<=7&&(this.removeLastSizeMenuContentClass(e),this.addNewSizeMenuContentClass(t))},mdDirection:function(t,e){this.removeLastDirectionMenuContentClass(e),this.addNewDirectionMenuContentClass(t)},mdAlignTrigger:function(t){this.handleAlignTriggerClass(t)}},methods:{validateMenu:function(){if(!this.menuContent)throw this.$destroy(),new Error("You must have a md-menu-content inside your menu.");if(!this.menuTrigger)throw this.$destroy(),new Error("You must have an element with a md-menu-trigger attribute inside your menu.")},removeLastSizeMenuContentClass:function(t){this.menuContent.classList.remove("md-size-"+t)},removeLastDirectionMenuContentClass:function(t){this.menuContent.classList.remove("md-direction-"+t.replace(/ /g,"-"))},addNewSizeMenuContentClass:function(t){this.menuContent.classList.add("md-size-"+t)},addNewDirectionMenuContentClass:function(t){this.menuContent.classList.add("md-direction-"+t.replace(/ /g,"-"))},handleAlignTriggerClass:function(t){t&&this.menuContent.classList.add("md-align-trigger")},getPosition:function(t){var e=this.menuTrigger.getBoundingClientRect(),n=e.top,i=e.left,o=window.innerWidth-e.right,s=window.innerHeight-e.bottom;return n+=parseInt(this.mdOffsetY,10),i+=parseInt(this.mdOffsetX,10),o+=parseInt(this.mdOffsetX,10),s+=parseInt(this.mdOffsetY,10),this.mdAlignTrigger&&("top"!==t?n+=e.height:s+=e.height),{top:n,left:i,right:o,bottom:s,width:e.width+2*this.margin,height:e.height}},calculateMenuContentPos:function(){var t=this.mdDirection.trim().split(" "),e=this.getPosition.apply(this,t);e=(0,d.default)(this.menuContent,e,t),this.mdFullWidth?this.menuContent.style.width=e.width+"px":this.menuContent.style.minWidth=e.width+"px",this.menuContent.style.top=e.top+window.pageYOffset+"px",this.menuContent.style.left=e.left+window.pageXOffset+"px",this.menuContent.style.right=e.right+window.pageXOffset+"px",this.menuContent.style.bottom=e.bottom+window.pageYOffset+"px"},recalculateOnResize:function(){window.requestAnimationFrame(this.calculateMenuContentPos)},open:function(){document.body.contains(this.menuContent)&&document.body.removeChild(this.menuContent),document.body.appendChild(this.menuContent),document.body.appendChild(this.backdropElement),window.addEventListener("resize",this.recalculateOnResize),this.calculateMenuContentPos(),getComputedStyle(this.menuContent).top,this.menuContent.classList.add("md-active"),this.menuContent.focus(),this.active=!0,this.$emit("open")},close:function t(){var e=this,t=function t(n){if(e.menuContent&&n.target===e.menuContent){var i=e.menuContent.querySelector(".md-ripple.md-active");e.menuContent.removeEventListener(s.default,t),e.menuTrigger.focus(),e.active=!1,i&&i.classList.remove("md-active"),document.body.removeChild(e.menuContent),document.body.removeChild(e.backdropElement),window.removeEventListener("resize",e.recalculateOnResize)}};this.menuContent.addEventListener(s.default,t),this.menuContent.classList.remove("md-active"),this.$emit("close")},toggle:function(t){t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),this.active?this.close():this.open()}},mounted:function(){var t=this;this.$nextTick((function(){t.menuTrigger=t.$el.querySelector("[md-menu-trigger]"),t.menuContent=t.$el.querySelector(".md-menu-content"),t.backdropElement=t.$refs.backdrop.$el,t.validateMenu(),t.handleAlignTriggerClass(t.mdAlignTrigger),t.addNewSizeMenuContentClass(t.mdSize),t.addNewDirectionMenuContentClass(t.mdDirection),t.$el.removeChild(t.$refs.backdrop.$el),t.menuContent.parentNode.removeChild(t.menuContent),t.menuTrigger.addEventListener("click",t.toggle)}))},beforeDestroy:function(){document.body.contains(this.menuContent)&&(document.body.removeChild(this.menuContent),document.body.removeChild(this.backdropElement)),this.menuTrigger.removeEventListener("click",this.toggle),window.removeEventListener("resize",this.recalculateOnResize)}},t.exports=e.default},158:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),s=i(o);e.default={name:"md-menu-content",mixins:[s.default],data:function(){return{oldHighlight:!1,highlighted:!1,itemsAmount:0}},methods:{close:function(){this.highlighted=!1,this.$parent.close()},highlightItem:function(t){this.oldHighlight=this.highlighted,"up"===t&&(1===this.highlighted?this.highlighted=this.itemsAmount:this.highlighted--),"down"===t&&(this.highlighted===this.itemsAmount?this.highlighted=1:this.highlighted++)},fireClick:function(){this.highlighted>0&&this.$children[0].$children[this.highlighted-1].$el.click()}},mounted:function(){if(!this.$parent.$el.classList.contains("md-menu"))throw this.$destroy(),new Error("You must wrap the md-menu-content in a md-menu")}},t.exports=e.default},159:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(29),s=i(o);n(208),e.default={name:"md-menu-item",props:{href:String,target:String,disabled:Boolean},data:function(){return{parentContent:{},index:0}},computed:{classes:function(){return{"md-highlighted":this.highlighted}},highlighted:function(){return this.index===this.parentContent.highlighted&&(this.disabled&&(this.parentContent.oldHighlight>this.parentContent.highlighted?this.parentContent.highlighted--:this.parentContent.highlighted++),1===this.index?this.parentContent.$el.scrollTop=0:this.index===this.parentContent.itemsAmount?this.parentContent.$el.scrollTop=this.parentContent.$el.scrollHeight:this.$el.scrollIntoViewIfNeeded(!1),!0)}},methods:{close:function(t){this.disabled||(this.parentMenu.mdCloseOnSelect&&this.parentContent.close(),this.$emit("selected",t))}},mounted:function(){if(this.parentContent=(0,s.default)(this.$parent,"md-menu-content"),this.parentMenu=(0,s.default)(this.$parent,"md-menu"),!this.parentContent)throw this.$destroy(),new Error("You must wrap the md-menu-item in a md-menu-content");this.parentContent.itemsAmount++,this.index=this.parentContent.itemsAmount}},t.exports=e.default},208:function(t,e){Element.prototype.scrollIntoViewIfNeeded||(Element.prototype.scrollIntoViewIfNeeded=function(t){t=0===arguments.length||!!t;var e=this.parentNode,n=window.getComputedStyle(e,null),i=parseInt(n.getPropertyValue("border-top-width")),o=parseInt(n.getPropertyValue("border-left-width")),s=this.offsetTop-e.offsetTop<e.scrollTop,r=this.offsetTop-e.offsetTop+this.clientHeight-i>e.scrollTop+e.clientHeight,d=this.offsetLeft-e.offsetLeft<e.scrollLeft,u=this.offsetLeft-e.offsetLeft+this.clientWidth-o>e.scrollLeft+e.clientWidth,l=s&&!r;(s||r)&&t&&(e.scrollTop=this.offsetTop-e.offsetTop-e.clientHeight/2-i+this.clientHeight/2),(d||u)&&t&&(e.scrollLeft=this.offsetLeft-e.offsetLeft-e.clientWidth/2-o+this.clientWidth/2),(s||r||d||u)&&!t&&this.scrollIntoView(l)})},240:function(t,e){},255:function(t,e){t.exports=".THEME_NAME.md-menu-content{background-color:BACKGROUND-COLOR;color:BACKGROUND-CONTRAST}.THEME_NAME.md-menu-content .md-list .md-menu-item:hover .md-button:not([disabled]),.THEME_NAME.md-menu-content .md-list .md-menu-item:focus .md-button:not([disabled]),.THEME_NAME.md-menu-content .md-list .md-menu-item.md-highlighted .md-button:not([disabled]){background-color:BACKGROUND-CONTRAST-0.04}.THEME_NAME.md-menu-content .md-list .md-menu-item[disabled]{color:BACKGROUND-CONTRAST-0.38}\n"},29:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function t(e,n){return!(!e||!e.$el)&&(0!==e._uid&&(e.$el.classList.contains(n)?e:t(e.$parent,n)))};e.default=i,t.exports=e.default},310:function(t,e,n){n(240);var i=n(0)(n(157),n(401),null,null);t.exports=i.exports},311:function(t,e,n){var i=n(0)(n(158),n(394),null,null);t.exports=i.exports},312:function(t,e,n){var i=n(0)(n(159),n(352),null,null);t.exports=i.exports},352:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("md-list-item",{staticClass:"md-menu-item",class:t.classes,attrs:{href:t.href,target:t.target,disabled:t.disabled},nativeOn:{click:function(e){t.close(e)}}},[t._t("default")],2)},staticRenderFns:[]}},38:function(t,e,n){"use strict";function i(){var t=document.createElement("span"),e={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(var n in e)if(void 0!==t.style[n])return e[n]}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i(),t.exports=e.default},394:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:[t.themeClass,"md-menu-content"],attrs:{tabindex:"-1"},on:{keydown:[function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27))return null;e.preventDefault(),t.close(e)},function(e){if(!("button"in e)&&t._k(e.keyCode,"tab",9))return null;e.preventDefault(),t.close(e)},function(e){if(!("button"in e)&&t._k(e.keyCode,"up",38))return null;e.preventDefault(),t.highlightItem("up")},function(e){if(!("button"in e)&&t._k(e.keyCode,"down",40))return null;e.preventDefault(),t.highlightItem("down")},function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.fireClick(e)},function(e){if(!("button"in e)&&t._k(e.keyCode,"space",32))return null;t.fireClick(e)}]}},[n("md-list",[t._t("default")],2)],1)},staticRenderFns:[]}},401:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md-menu"},[t._t("default"),t._v(" "),n("md-backdrop",{ref:"backdrop",staticClass:"md-menu-backdrop md-transparent md-active",on:{close:t.close}})],2)},staticRenderFns:[]}},423:function(t,e,n){t.exports=n(91)},91:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t){t.component("md-menu",r.default),t.component("md-menu-item",u.default),t.component("md-menu-content",a.default),t.material.styles.push(m.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var s=n(310),r=i(s),d=n(312),u=i(d),l=n(311),a=i(l),h=n(255),m=i(h);t.exports=e.default}})}));