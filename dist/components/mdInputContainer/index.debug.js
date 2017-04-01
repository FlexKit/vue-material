(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueMaterial"] = factory();
	else
		root["VueMaterial"] = factory();
})(this, (function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 420);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach((function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    }))
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    mdTheme: String
  },
  data: function data() {
    return {
      closestThemedParent: false
    };
  },
  methods: {
    getClosestThemedParent: function getClosestThemedParent($parent) {
      if (!$parent || !$parent.$el || $parent._uid === 0) {
        return false;
      }

      if ($parent.mdTheme || $parent.mdName) {
        return $parent;
      }

      return this.getClosestThemedParent($parent.$parent);
    }
  },
  computed: {
    themeClass: function themeClass() {
      if (this.mdTheme) {
        return 'md-theme-' + this.mdTheme;
      }

      var theme = this.closestThemedParent.mdTheme;

      if (!theme) {
        if (this.closestThemedParent) {
          theme = this.closestThemedParent.mdName;
        } else {
          theme = this.$material.currentTheme;
        }
      }

      return 'md-theme-' + theme;
    }
  },
  mounted: function mounted() {
    this.closestThemedParent = this.getClosestThemedParent(this.$parent);

    if (!this.$material.currentTheme) {
      this.$material.setCurrentTheme('default');
    }
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Autosize 3.0.20
	license: MIT
	http://www.jacklmoore.com/autosize
*/
(function (global, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		factory(exports, module);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, mod);
		global.autosize = mod.exports;
	}
})(this, (function (exports, module) {
	'use strict';

	var map = typeof Map === "function" ? new Map() : (function () {
		var keys = [];
		var values = [];

		return {
			has: function has(key) {
				return keys.indexOf(key) > -1;
			},
			get: function get(key) {
				return values[keys.indexOf(key)];
			},
			set: function set(key, value) {
				if (keys.indexOf(key) === -1) {
					keys.push(key);
					values.push(value);
				}
			},
			'delete': function _delete(key) {
				var index = keys.indexOf(key);
				if (index > -1) {
					keys.splice(index, 1);
					values.splice(index, 1);
				}
			}
		};
	})();

	var createEvent = function createEvent(name) {
		return new Event(name, { bubbles: true });
	};
	try {
		new Event('test');
	} catch (e) {
		// IE does not support `new Event()`
		createEvent = function (name) {
			var evt = document.createEvent('Event');
			evt.initEvent(name, true, false);
			return evt;
		};
	}

	function assign(ta) {
		if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

		var heightOffset = null;
		var clientWidth = ta.clientWidth;
		var cachedHeight = null;

		function init() {
			var style = window.getComputedStyle(ta, null);

			if (style.resize === 'vertical') {
				ta.style.resize = 'none';
			} else if (style.resize === 'both') {
				ta.style.resize = 'horizontal';
			}

			if (style.boxSizing === 'content-box') {
				heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
			} else {
				heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
			}
			// Fix when a textarea is not on document body and heightOffset is Not a Number
			if (isNaN(heightOffset)) {
				heightOffset = 0;
			}

			update();
		}

		function changeOverflow(value) {
			{
				// Chrome/Safari-specific fix:
				// When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
				// made available by removing the scrollbar. The following forces the necessary text reflow.
				var width = ta.style.width;
				ta.style.width = '0px';
				// Force reflow:
				/* jshint ignore:start */
				ta.offsetWidth;
				/* jshint ignore:end */
				ta.style.width = width;
			}

			ta.style.overflowY = value;
		}

		function getParentOverflows(el) {
			var arr = [];

			while (el && el.parentNode && el.parentNode instanceof Element) {
				if (el.parentNode.scrollTop) {
					arr.push({
						node: el.parentNode,
						scrollTop: el.parentNode.scrollTop
					});
				}
				el = el.parentNode;
			}

			return arr;
		}

		function resize() {
			var originalHeight = ta.style.height;
			var overflows = getParentOverflows(ta);
			var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

			ta.style.height = 'auto';

			var endHeight = ta.scrollHeight + heightOffset;

			if (ta.scrollHeight === 0) {
				// If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
				ta.style.height = originalHeight;
				return;
			}

			ta.style.height = endHeight + 'px';

			// used to check if an update is actually necessary on window.resize
			clientWidth = ta.clientWidth;

			// prevents scroll-position jumping
			overflows.forEach((function (el) {
				el.node.scrollTop = el.scrollTop;
			}));

			if (docTop) {
				document.documentElement.scrollTop = docTop;
			}
		}

		function update() {
			resize();

			var styleHeight = Math.round(parseFloat(ta.style.height));
			var computed = window.getComputedStyle(ta, null);
			var actualHeight = Math.round(parseFloat(computed.height));

			// The actual height not matching the style height (set via the resize method) indicates that
			// the max-height has been exceeded, in which case the overflow should be set to visible.
			if (actualHeight !== styleHeight) {
				if (computed.overflowY !== 'visible') {
					changeOverflow('visible');
					resize();
					actualHeight = Math.round(parseFloat(window.getComputedStyle(ta, null).height));
				}
			} else {
				// Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
				if (computed.overflowY !== 'hidden') {
					changeOverflow('hidden');
					resize();
					actualHeight = Math.round(parseFloat(window.getComputedStyle(ta, null).height));
				}
			}

			if (cachedHeight !== actualHeight) {
				cachedHeight = actualHeight;
				var evt = createEvent('autosize:resized');
				try {
					ta.dispatchEvent(evt);
				} catch (err) {
					// Firefox will throw an error on dispatchEvent for a detached element
					// https://bugzilla.mozilla.org/show_bug.cgi?id=889376
				}
			}
		}

		var pageResize = function pageResize() {
			if (ta.clientWidth !== clientWidth) {
				update();
			}
		};

		var destroy = (function (style) {
			window.removeEventListener('resize', pageResize, false);
			ta.removeEventListener('input', update, false);
			ta.removeEventListener('keyup', update, false);
			ta.removeEventListener('autosize:destroy', destroy, false);
			ta.removeEventListener('autosize:update', update, false);

			Object.keys(style).forEach((function (key) {
				ta.style[key] = style[key];
			}));

			map['delete'](ta);
		}).bind(ta, {
			height: ta.style.height,
			resize: ta.style.resize,
			overflowY: ta.style.overflowY,
			overflowX: ta.style.overflowX,
			wordWrap: ta.style.wordWrap
		});

		ta.addEventListener('autosize:destroy', destroy, false);

		// IE9 does not fire onpropertychange or oninput for deletions,
		// so binding to onkeyup to catch most of those events.
		// There is no way that I know of to detect something like 'cut' in IE9.
		if ('onpropertychange' in ta && 'oninput' in ta) {
			ta.addEventListener('keyup', update, false);
		}

		window.addEventListener('resize', pageResize, false);
		ta.addEventListener('input', update, false);
		ta.addEventListener('autosize:update', update, false);
		ta.style.overflowX = 'hidden';
		ta.style.wordWrap = 'break-word';

		map.set(ta, {
			destroy: destroy,
			update: update
		});

		init();
	}

	function destroy(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.destroy();
		}
	}

	function update(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.update();
		}
	}

	var autosize = null;

	// Do nothing in Node.js environment and IE8 (or lower)
	if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
		autosize = function (el) {
			return el;
		};
		autosize.destroy = function (el) {
			return el;
		};
		autosize.update = function (el) {
			return el;
		};
	} else {
		autosize = function (el, options) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], (function (x) {
					return assign(x, options);
				}));
			}
			return el;
		};
		autosize.destroy = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], destroy);
			}
			return el;
		};
		autosize.update = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], update);
			}
			return el;
		};
	}

	module.exports = autosize;
}));

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__(69);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'md-input',
  mixins: [_common2.default],
  props: {
    type: {
      type: String,
      default: 'text'
    }
  },
  data: function data() {
    return {
      showPassword: false,
      isInputPassword: false
    };
  },

  computed: {
    classes: function classes() {
      return {
        'md-has-password': this.isInputPassword
      };
    }
  },
  methods: {
    handleTogglePasswordType: function handleTogglePasswordType() {
      if (this.field.type === 'password') {
        this.field.type = 'text';
        this.showPassword = true;
      } else {
        this.field.type = 'password';
        this.showPassword = false;
      }

      this.field.focus();
    }
  },
  mounted: function mounted() {
    this.isInputPassword = this.type === 'password';

    if (this.type === 'file') {
      this.$destroy();

      throw new Error('You should use the md-file');
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'md-input-container',
  props: {
    mdClearable: Boolean,

    hasFile: Boolean,
    hasValue: Boolean,
    hasPlaceholder: Boolean,

    isFocused: Boolean,
    isDisabled: Boolean,
    isRequired: Boolean,

    inputLength: Number,
    counterLength: Number
  },
  computed: {
    classes: function classes() {
      return {
        'md-clearable': this.mdClearable,
        'md-has-value': this.hasValue,
        'md-input-placeholder': this.hasPlaceholder,
        'md-input-disabled': this.isDisabled,
        'md-input-required': this.isRequired,
        'md-input-focused': this.isFocused
      };
    }
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _autosize = __webpack_require__(107);

var _autosize2 = _interopRequireDefault(_autosize);

var _common = __webpack_require__(69);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'md-textarea',
  mixins: [_common2.default],
  watch: {
    value: function value() {
      _autosize2.default.update(this.field);
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (!this.field.getAttribute('rows')) {
      this.field.setAttribute('rows', '1');
    }

    (0, _autosize2.default)(this.field);
    setTimeout((function () {
      return _autosize2.default.update(_this.field);
    }), 200);
  },
  beforeDestroy: function beforeDestroy() {
    _autosize2.default.destroy(this.field);
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 217:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 253:
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-input-container .md-field:after {\n  background-color: BACKGROUND-CONTRAST-0.12; }\n\n.THEME_NAME.md-input-container label,\n.THEME_NAME.md-input-container .md-icon {\n  color: BACKGROUND-CONTRAST-0.54; }\n\n.THEME_NAME.md-input-container.md-input-invalid .md-field:after {\n  background-color: WARN-COLOR; }\n\n.THEME_NAME.md-input-container.md-input-invalid label,\n.THEME_NAME.md-input-container.md-input-invalid input,\n.THEME_NAME.md-input-container.md-input-invalid textarea,\n.THEME_NAME.md-input-container.md-input-invalid .md-error,\n.THEME_NAME.md-input-container.md-input-invalid .md-count,\n.THEME_NAME.md-input-container.md-input-invalid .md-icon {\n  color: WARN-COLOR; }\n\n.THEME_NAME.md-input-container.md-input-focused.md-input-required label:after {\n  color: WARN-COLOR; }\n\n.THEME_NAME.md-input-container.md-input-focused .md-field:after {\n  height: 2px;\n  background-color: PRIMARY-COLOR; }\n\n.THEME_NAME.md-input-container.md-input-focused input,\n.THEME_NAME.md-input-container.md-input-focused textarea {\n  color: PRIMARY-COLOR;\n  text-shadow: 0 0 0 BACKGROUND-CONTRAST;\n  -webkit-text-fill-color: transparent; }\n\n.THEME_NAME.md-input-container.md-input-focused label,\n.THEME_NAME.md-input-container.md-input-focused .md-icon {\n  color: PRIMARY-COLOR; }\n\n.THEME_NAME.md-input-container.md-input-disabled .md-field:after {\n  background-color: transparent;\n  background-image: linear-gradient(to right, BACKGROUND-CONTRAST-0.38 0%, BACKGROUND-CONTRAST-0.38 33%, transparent 0%); }\n\n.THEME_NAME.md-input-container.md-input-disabled label,\n.THEME_NAME.md-input-container.md-input-disabled input,\n.THEME_NAME.md-input-container.md-input-disabled textarea,\n.THEME_NAME.md-input-container.md-input-disabled .md-error,\n.THEME_NAME.md-input-container.md-input-disabled .md-count,\n.THEME_NAME.md-input-container.md-input-disabled .md-icon,\n.THEME_NAME.md-input-container.md-input-disabled ::-webkit-input-placeholder {\n  color: BACKGROUND-CONTRAST-0.38; }\n\n.THEME_NAME.md-input-container.md-has-password.md-input-focused .md-toggle-password {\n  color: BACKGROUND-CONTRAST-0.54; }\n\n.THEME_NAME.md-input-container.md-has-password .md-toggle-password {\n  color: BACKGROUND-CONTRAST-0.38; }\n  .THEME_NAME.md-input-container.md-has-password .md-toggle-password .md-ink-ripple {\n    color: BACKGROUND-CONTRAST-0.87; }\n\n.THEME_NAME.md-input-container.md-clearable.md-input-focused .md-clear-input {\n  color: BACKGROUND-CONTRAST-0.54; }\n\n.THEME_NAME.md-input-container.md-clearable .md-clear-input {\n  color: BACKGROUND-CONTRAST-0.38; }\n  .THEME_NAME.md-input-container.md-clearable .md-clear-input .md-ink-ripple {\n    color: BACKGROUND-CONTRAST-0.87; }\n\n.THEME_NAME.md-input-container.md-has-select:hover .md-select:not(.md-disabled) {\n  color: BACKGROUND-CONTRAST-0.54; }\n  .THEME_NAME.md-input-container.md-has-select:hover .md-select:not(.md-disabled) .md-field:after {\n    color: BACKGROUND-CONTRAST-0.87; }\n"

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(146),
  /* template */
  __webpack_require__(357),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/PavelCSS/Projects/VueJS/vue-material/src/components/mdInputContainer/mdInput.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key !== "__esModule"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdInput.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-22df0c6d", Component.options)
  } else {
    hotAPI.reload("data-v-22df0c6d", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(217)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(147),
  /* template */
  __webpack_require__(359),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/PavelCSS/Projects/VueJS/vue-material/src/components/mdInputContainer/mdInputContainer.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key !== "__esModule"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdInputContainer.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-271c2778", Component.options)
  } else {
    hotAPI.reload("data-v-271c2778", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(148),
  /* template */
  __webpack_require__(386),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/PavelCSS/Projects/VueJS/vue-material/src/components/mdInputContainer/mdTextarea.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key !== "__esModule"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdTextarea.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6243e5e7", Component.options)
  } else {
    hotAPI.reload("data-v-6243e5e7", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('md-input-container', {
    class: [_vm.themeClass, _vm.classes],
    attrs: {
      "mdClearable": _vm.mdClearable,
      "isFocused": _vm.focused,
      "isDisabled": _vm.disabled,
      "isRequired": _vm.required,
      "inputLength": _vm.inputLength,
      "counterLength": _vm.counterLength,
      "hasValue": !!_vm.currentValue,
      "hasPlaceholder": !!_vm.placeholder
    },
    on: {
      "clear": _vm.clearValue
    }
  }, [_vm._t("before"), _vm._v(" "), _c('div', {
    staticClass: "md-field"
  }, [(_vm.label) ? _c('label', [_vm._v(_vm._s(_vm.label))]) : _vm._e(), _vm._v(" "), _c('input', {
    ref: "field",
    staticClass: "md-input",
    attrs: {
      "type": _vm.type,
      "disabled": _vm.disabled,
      "required": _vm.required,
      "autofocus": _vm.autofocus,
      "maxlength": _vm.maxlength,
      "placeholder": _vm.placeholder
    },
    domProps: {
      "value": _vm.currentValue
    },
    on: {
      "blur": _vm.onBlur,
      "focus": _vm.onFocus,
      "input": _vm.onInput,
      "change": _vm.onChange
    }
  })]), _vm._v(" "), (_vm.isInputPassword) ? _c('md-button', {
    staticClass: "md-icon-button md-toggle-password",
    nativeOn: {
      "click": function($event) {
        _vm.handleTogglePasswordType($event)
      }
    }
  }, [_c('md-icon', [_vm._v(_vm._s(_vm.showPassword ? 'visibility_off' : 'visibility'))])], 1) : _vm._e(), _vm._v(" "), _vm._t("after")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-22df0c6d", module.exports)
  }
}

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['md-input-container', _vm.classes]
  }, [_vm._t("default"), _vm._v(" "), (_vm.counterLength > 0) ? _c('span', {
    staticClass: "md-count"
  }, [_vm._v("\n    " + _vm._s(_vm.inputLength) + " / " + _vm._s(_vm.counterLength) + "\n  ")]) : _vm._e(), _vm._v(" "), (_vm.mdClearable && _vm.hasValue) ? _c('md-button', {
    staticClass: "md-icon-button md-clear-input md-dense",
    nativeOn: {
      "click": function($event) {
        _vm.$emit('clear')
      }
    }
  }, [_c('md-icon', [_vm._v("clear")])], 1) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-271c2778", module.exports)
  }
}

/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('md-input-container', {
    class: _vm.themeClass,
    attrs: {
      "mdClearable": _vm.mdClearable,
      "isFocused": _vm.focused,
      "isDisabled": _vm.disabled,
      "isRequired": _vm.required,
      "inputLength": _vm.inputLength,
      "counterLength": _vm.counterLength,
      "hasValue": !!_vm.currentValue,
      "hasPlaceholder": !!_vm.placeholder
    },
    on: {
      "clear": _vm.clearValue
    }
  }, [_vm._t("before"), _vm._v(" "), _c('div', {
    staticClass: "md-field"
  }, [(_vm.label) ? _c('label', [_vm._v(_vm._s(_vm.label))]) : _vm._e(), _vm._v(" "), _c('textarea', {
    ref: "field",
    staticClass: "md-input",
    attrs: {
      "disabled": _vm.disabled,
      "required": _vm.required,
      "autofocus": _vm.autofocus,
      "maxlength": _vm.maxlength,
      "placeholder": _vm.placeholder
    },
    domProps: {
      "value": _vm.currentValue
    },
    on: {
      "blur": _vm.onBlur,
      "focus": _vm.onFocus,
      "input": _vm.onInput,
      "change": _vm.onChange
    }
  })]), _vm._v(" "), _vm._t("after")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6243e5e7", module.exports)
  }
}

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(88);


/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mixin = __webpack_require__(1);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mixins: [_mixin2.default],
  data: function data() {
    return {
      field: null,
      focused: false,
      currentValue: null
    };
  },

  props: {
    // for container
    mdClearable: Boolean,

    // for field
    label: [String, Number],
    value: [String, Number],
    placeholder: String,
    maxlength: [Number, String],
    required: Boolean,
    disabled: Boolean,
    autofocus: Boolean
  },
  computed: {
    inputLength: function inputLength() {
      return this.currentValue ? this.currentValue.length : 0;
    },
    counterLength: function counterLength() {
      return Number(this.maxlength, 10);
    }
  },
  watch: {
    value: function value(_value) {
      this.currentValue = _value;
    }
  },
  methods: {
    updateValue: function updateValue() {
      this.currentValue = this.field.value || this.value;
    },
    onFocus: function onFocus() {
      this.focused = true;
    },
    onBlur: function onBlur() {
      this.focused = false;
    },
    onInput: function onInput() {
      this.updateValue();
      this.$emit('input', this.field.value);
    },
    onChange: function onChange() {
      this.updateValue();
      this.$emit('change', this.field.value);
    },
    clearValue: function clearValue() {
      var _this = this;

      this.field.value = null;

      this.$nextTick((function () {
        _this.onInput();
        _this.onChange();
      }));
    }
  },
  mounted: function mounted() {
    this.field = this.$refs.field;
    this.focused = this.autofocus;
    this.currentValue = this.value;
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdInputContainer = __webpack_require__(300);

var _mdInputContainer2 = _interopRequireDefault(_mdInputContainer);

var _mdInput = __webpack_require__(299);

var _mdInput2 = _interopRequireDefault(_mdInput);

var _mdTextarea = __webpack_require__(301);

var _mdTextarea2 = _interopRequireDefault(_mdTextarea);

var _mdInputContainer3 = __webpack_require__(253);

var _mdInputContainer4 = _interopRequireDefault(_mdInputContainer3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('md-input-container', _mdInputContainer2.default);
  Vue.component('md-input', _mdInput2.default);
  Vue.component('md-textarea', _mdTextarea2.default);

  Vue.material.styles.push(_mdInputContainer4.default);
}
module.exports = exports['default'];

/***/ })

/******/ });
}));