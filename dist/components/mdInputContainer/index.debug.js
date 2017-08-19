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
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 454);
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
// Theme mixin

// Grab the closest ancestor component's `md-theme` attribute OR grab the
// `md-name` attribute from an `<md-theme>` component.
function getAncestorThemeName(component) {
  if (!component) {
    return null;
  }

  var name = component.mdTheme;

  if (!name && component.$options._componentTag === 'md-theme') {
    name = component.mdName;
  }

  return name || getAncestorThemeName(component.$parent);
}

exports.default = {
  props: {
    mdTheme: String
  },
  computed: {
    mdEffectiveTheme: function mdEffectiveTheme() {
      return getAncestorThemeName(this) || this.$material.currentTheme;
    },
    themeClass: function themeClass() {
      return this.$material.prefix + this.mdEffectiveTheme;
    }
  },
  watch: {
    mdTheme: function mdTheme(value) {
      this.$material.useTheme(value);
    }
  },
  beforeMount: function beforeMount() {
    var localTheme = this.mdTheme;

    this.$material.useTheme(localTheme ? localTheme : 'default');
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(7)
  , createDesc = __webpack_require__(16);
module.exports = __webpack_require__(3) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Autosize 3.0.21
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

			// Using offsetHeight as a replacement for computed.height in IE, because IE does not account use of border-box
			var actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(computed.height)) : ta.offsetHeight;

			// The actual height not matching the style height (set via the resize method) indicates that
			// the max-height has been exceeded, in which case the overflow should be allowed.
			if (actualHeight !== styleHeight) {
				if (computed.overflowY === 'hidden') {
					changeOverflow('scroll');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			} else {
				// Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
				if (computed.overflowY !== 'hidden') {
					changeOverflow('hidden');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
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

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    debounce: {
      type: Number,
      default: 1E3
    },
    disabled: Boolean,
    fetch: {
      type: Function
    },
    filterList: Function,
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    minChars: {
      type: Number,
      default: 1
    },
    name: String,
    prepareResponseData: Function,
    printAttribute: {
      type: String,
      default: 'name'
    },
    queryParam: {
      type: String,
      default: 'q'
    },
    required: Boolean
  },
  methods: {
    onFocus: function onFocus() {
      if (this.parentContainer) {
        this.parentContainer.isFocused = true;
      }
    },
    onBlur: function onBlur() {
      this.parentContainer.isFocused = false;
      this.setParentValue();
    },
    verifyProps: function verifyProps() {
      if (!this.parentContainer) {
        return this.throwErrorDestroy('You should wrap the md-input in a md-input-container');
      } else if (this.listIsEmpty && this.filterList) {
        return this.throwErrorDestroy('You should use a `filterList` function prop with the `list` prop');
      } else if (!this.fetch && this.listIsEmpty) {
        return this.throwErrorDestroy('You should use a `fetch` function prop');
      }
    },
    throwErrorDestroy: function throwErrorDestroy(errorMessage) {
      this.$destroy();
      throw new Error(errorMessage);
    }
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(2)
  , core      = __webpack_require__(4)
  , ctx       = __webpack_require__(26)
  , hide      = __webpack_require__(11)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(202);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = __webpack_require__(57);

var _assign2 = _interopRequireDefault(_assign);

var _autocompleteCommon = __webpack_require__(120);

var _autocompleteCommon2 = _interopRequireDefault(_autocompleteCommon);

var _common = __webpack_require__(58);

var _common2 = _interopRequireDefault(_common);

var _getClosestVueParent = __webpack_require__(20);

var _getClosestVueParent2 = _interopRequireDefault(_getClosestVueParent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mixins: [_common2.default, _autocompleteCommon2.default],
  data: function data() {
    return {
      items: [],
      loading: false,
      query: '',
      selected: null,
      timeout: 0,
      parentContainer: null,
      searchButton: null
    };
  },

  computed: {
    listIsEmpty: function listIsEmpty() {
      return this.list.length === 0;
    }
  },
  watch: {
    list: function list(value) {
      this.items = (0, _assign2.default)([], value);
    },
    query: function query(value) {
      this.$refs.input.value = value;
      this.setParentUpdateValue(value);
    },
    value: function value(_value) {
      this.query = _value;
      this.setParentUpdateValue(_value);
    }
  },
  methods: {
    debounceUpdate: function debounceUpdate() {
      var _this = this;

      this.onInput();

      if (this.timeout) {
        window.clearTimeout(this.timeout);
      }

      this.timeout = window.setTimeout((function () {
        if (!_this.listIsEmpty) {
          _this.renderFilteredList();
          return;
        }
        _this.update();
      }), this.debounce);
    },
    hit: function hit(item) {
      this.query = item[this.printAttribute];
      this.$refs.input.value = item[this.printAttribute];
      this.selected = item;
      this.onInput();
      this.$emit('selected', this.selected, this.$refs.input.value);
    },
    makeFetchRequest: function makeFetchRequest(queryObject) {
      var _this2 = this;

      return this.fetch(queryObject).then((function (response) {
        var data = response || response.data || response.body;

        data = _this2.prepareResponseData ? _this2.prepareResponseData(data) : data;
        _this2.items = _this2.limit ? data.slice(0, _this2.limit) : data;

        _this2.loading = false;

        _this2.toggleMenu();
      }));
    },
    onFocus: function onFocus() {
      if (this.parentContainer) {
        this.parentContainer.isFocused = true;
      }
      this.$refs.input.focus();
    },
    onInput: function onInput() {
      this.updateValues();
      this.$emit('change', this.$refs.input.value);
      this.$emit('input', this.$refs.input.value);
    },
    renderFilteredList: function renderFilteredList() {
      if (this.filterList) {
        this.items = this.filterList((0, _assign2.default)([], this.list), this.query);
      }
      this.toggleMenu();
    },
    reset: function reset() {
      this.items = [];
      this.query = '';
      this.loading = false;
    },
    setParentValue: function setParentValue(value) {
      this.parentContainer.setValue(value || this.$refs.input.value);
    },
    setParentDisabled: function setParentDisabled() {
      this.parentContainer.isDisabled = this.disabled;
    },
    setParentRequired: function setParentRequired() {
      this.parentContainer.isRequired = this.required;
    },
    setParentPlaceholder: function setParentPlaceholder() {
      this.parentContainer.hasPlaceholder = !!this.placeholder;
    },
    setParentUpdateValue: function setParentUpdateValue(value) {
      this.setParentValue(value);
      this.updateValues(value);
    },
    setSearchButton: function setSearchButton() {
      this.searchButton = this.parentContainer.$el.querySelector('[md-autocomplete-search]');

      if (this.searchButton) {
        this.searchButton.addEventListener('click', this.makeFetchRequest);
      }
    },
    update: function update() {
      if (!this.query && !this.list.length) {
        return this.reset();
      }

      if (this.minChars && this.query.length < this.minChars) {
        return;
      }

      this.loading = true;

      var queryObject = (0, _defineProperty3.default)({}, this.queryParam, this.query);

      return this.makeFetchRequest(queryObject);
    },
    toggleMenu: function toggleMenu() {
      if (this.items.length) {
        this.$refs.menu.toggle();
      }
    },
    updateValues: function updateValues(value) {
      var newValue = value || this.$refs.input.value || this.value;

      this.setParentValue(newValue);
      this.parentContainer.inputLength = newValue ? newValue.length : 0;
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.searchButton) {
      this.searchButton.removeEventListener('click', this.makeFetchRequest);
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.$nextTick((function () {
      _this3.parentContainer = (0, _getClosestVueParent2.default)(_this3.$parent, 'md-input-container');

      if (!_this3.listIsEmpty) {
        _this3.items = (0, _assign2.default)([], _this3.list);
      }

      _this3.query = _this3.value;

      _this3.verifyProps();
      _this3.setSearchButton();

      _this3.setParentDisabled();
      _this3.setParentRequired();
      _this3.setParentPlaceholder();
      _this3.handleMaxLength();
      _this3.updateValues();
    }));
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

module.exports = exports['default'];

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__(58);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'md-input',
  mixins: [_common2.default],
  props: {
    type: {
      type: String,
      default: 'text'
    },
    min: [String, Number],
    max: [String, Number]
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
//
//
//

module.exports = exports['default'];

/***/ }),

/***/ 154:
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

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _autosize = __webpack_require__(111);

var _autosize2 = _interopRequireDefault(_autosize);

var _common = __webpack_require__(58);

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

/***/ 16:
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(31)
  , enumBugKeys = __webpack_require__(22);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(23)('keys')
  , uid    = __webpack_require__(19);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(205), __esModule: true };

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getClosestVueParent = function getClosestVueParent($parent, cssClass) {
  if (!$parent || !$parent.$el) {
    return false;
  }

  if ($parent._uid === 0) {
    return false;
  }

  if ($parent.$el.classList.contains(cssClass)) {
    return $parent;
  }

  return getClosestVueParent($parent.$parent, cssClass);
};

exports.default = getClosestVueParent;
module.exports = exports["default"];

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(199);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(218);
var $Object = __webpack_require__(4).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(13);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(15);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(3), 'Object', {defineProperty: __webpack_require__(7).f});

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),

/***/ 233:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6)
  , document = __webpack_require__(2).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(32);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(24);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),

/***/ 273:
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-input-container .md-field:before {\n  background-color: BACKGROUND-CONTRAST-0.12; }\n\n.THEME_NAME.md-input-container label,\n.THEME_NAME.md-input-container .md-icon {\n  color: BACKGROUND-CONTRAST-0.54; }\n\n.THEME_NAME.md-input-container.md-input-invalid .md-field:before {\n  background-color: WARN-COLOR; }\n\n.THEME_NAME.md-input-container.md-input-invalid label,\n.THEME_NAME.md-input-container.md-input-invalid .md-field,\n.THEME_NAME.md-input-container.md-input-invalid .md-error,\n.THEME_NAME.md-input-container.md-input-invalid .md-count,\n.THEME_NAME.md-input-container.md-input-invalid .md-icon {\n  color: WARN-COLOR; }\n\n.THEME_NAME.md-input-container.md-input-focused.md-input-required label:after {\n  color: WARN-COLOR; }\n\n.THEME_NAME.md-input-container.md-input-focused .md-field {\n  text-shadow: 0 0 0 BACKGROUND-CONTRAST; }\n  .THEME_NAME.md-input-container.md-input-focused .md-field:after {\n    background-color: PRIMARY-COLOR; }\n\n.THEME_NAME.md-input-container.md-input-focused label,\n.THEME_NAME.md-input-container.md-input-focused .md-icon {\n  color: PRIMARY-COLOR; }\n\n.THEME_NAME.md-input-container.md-input-disabled .md-field:before {\n  background-color: transparent;\n  background-image: linear-gradient(to right, BACKGROUND-CONTRAST-0.38 0%, BACKGROUND-CONTRAST-0.38 33%, transparent 0%); }\n\n.THEME_NAME.md-input-container.md-input-disabled label,\n.THEME_NAME.md-input-container.md-input-disabled .md-field,\n.THEME_NAME.md-input-container.md-input-disabled .md-error,\n.THEME_NAME.md-input-container.md-input-disabled .md-count,\n.THEME_NAME.md-input-container.md-input-disabled .md-icon,\n.THEME_NAME.md-input-container.md-input-disabled ::-webkit-input-placeholder {\n  color: BACKGROUND-CONTRAST-0.38; }\n\n.THEME_NAME.md-input-container.md-has-password.md-input-focused .md-toggle-password {\n  color: BACKGROUND-CONTRAST-0.54; }\n\n.THEME_NAME.md-input-container.md-has-password .md-toggle-password {\n  color: BACKGROUND-CONTRAST-0.38; }\n  .THEME_NAME.md-input-container.md-has-password .md-toggle-password .md-ink-ripple {\n    color: BACKGROUND-CONTRAST-0.87; }\n\n.THEME_NAME.md-input-container.md-clearable.md-input-focused .md-clear-input {\n  color: BACKGROUND-CONTRAST-0.54; }\n\n.THEME_NAME.md-input-container.md-clearable .md-clear-input {\n  color: BACKGROUND-CONTRAST-0.38; }\n  .THEME_NAME.md-input-container.md-clearable .md-clear-input .md-ink-ripple {\n    color: BACKGROUND-CONTRAST-0.87; }\n\n.THEME_NAME.md-input-container.md-has-select:hover .md-select:not(.md-disabled) {\n  color: BACKGROUND-CONTRAST-0.54; }\n  .THEME_NAME.md-input-container.md-has-select:hover .md-select:not(.md-disabled) .md-field:before {\n    color: BACKGROUND-CONTRAST-0.87; }\n"

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(14)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(6);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(5)((function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
}));

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(3) && !__webpack_require__(5)((function(){
  return Object.defineProperty(__webpack_require__(25)('div'), 'a', {get: function(){ return 7; }}).a != 7;
}));

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(8)
  , toIObject    = __webpack_require__(9)
  , arrayIndexOf = __webpack_require__(33)(false)
  , IE_PROTO     = __webpack_require__(18)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(152),
  /* template */
  __webpack_require__(387),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/PavelCSS/Projects/VueJS/vue-material/src/components/mdInputContainer/mdAutocomplete.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key !== "__esModule"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdAutocomplete.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-27018515", Component.options)
  } else {
    hotAPI.reload("data-v-27018515", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(153),
  /* template */
  __webpack_require__(385),
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

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(233)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(154),
  /* template */
  __webpack_require__(388),
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

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(155),
  /* template */
  __webpack_require__(419),
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

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(9)
  , toLength  = __webpack_require__(28)
  , toIndex   = __webpack_require__(35);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(14)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),

/***/ 385:
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
      "min": _vm.min,
      "max": _vm.max,
      "type": _vm.type,
      "readonly": _vm.readonly,
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
    staticClass: "md-icon-button md-icon-input md-dense",
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

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-autocomplete",
    on: {
      "focus": _vm.onFocus,
      "blur": _vm.onBlur
    }
  }, [_c('md-menu', {
    ref: "menu",
    staticClass: "md-autocomplete-menu",
    attrs: {
      "md-offset-x": 8,
      "md-offset-y": "45"
    }
  }, [_c('span', {
    attrs: {
      "md-menu-trigger": ""
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.query),
      expression: "query"
    }],
    ref: "input",
    staticClass: "md-input",
    attrs: {
      "type": "text",
      "disabled": _vm.disabled,
      "required": _vm.required,
      "placeholder": _vm.placeholder,
      "maxlength": _vm.maxlength,
      "name": _vm.name
    },
    domProps: {
      "value": (_vm.query)
    },
    on: {
      "focus": _vm.onFocus,
      "blur": _vm.onBlur,
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.query = $event.target.value
      }, _vm.debounceUpdate]
    }
  }), _vm._v(" "), _c('md-menu-content', _vm._l((_vm.items), (function(item) {
    return (_vm.items.length) ? _c('md-menu-item', {
      on: {
        "keyup": function($event) {
          if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
          _vm.hit(item)
        }
      },
      nativeOn: {
        "click": function($event) {
          _vm.hit(item)
        }
      }
    }, [_vm._v("\n        " + _vm._s(item[_vm.printAttribute]) + "\n      ")]) : _vm._e()
  })))], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-27018515", module.exports)
  }
}

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['md-input-container', _vm.classes]
  }, [_vm._t("default"), _vm._v(" "), (_vm.counterLength > 0) ? _c('span', {
    staticClass: "md-count"
  }, [_vm._v("\n    " + _vm._s(_vm.inputLength) + " / " + _vm._s(_vm.counterLength) + "\n  ")]) : _vm._e(), _vm._v(" "), (_vm.mdClearable && _vm.hasValue) ? _c('md-button', {
    staticClass: "md-icon-button md-icon-input md-dense",
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

/***/ 4:
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('md-input-container', {
    class: _vm.themeClass,
    attrs: {
      "mdClearable": _vm.mdClearable,
      "isFocused": _vm.focused,
      "isDisabled": _vm.disabled,
      "isRequired": _vm.required,
      "readonly": _vm.readonly,
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

/***/ 45:
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(90);


/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(61), __esModule: true };

/***/ }),

/***/ 58:
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
    readonly: Boolean,
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
      this.$emit('focus');
    },
    onBlur: function onBlur() {
      this.focused = false;
      this.$emit('blur');
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
        _this.$emit('clear', null);
      }));
    },
    focus: function focus() {
      this.field.focus();
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

/***/ 6:
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(72);
module.exports = __webpack_require__(4).Object.assign;

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(17)
  , gOPS     = __webpack_require__(45)
  , pIE      = __webpack_require__(40)
  , toObject = __webpack_require__(21)
  , IObject  = __webpack_require__(27)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(5)((function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach((function(k){ B[k] = k; }));
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
})) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(12)
  , IE8_DOM_DEFINE = __webpack_require__(30)
  , toPrimitive    = __webpack_require__(29)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(3) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(15);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(67)});

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(27)
  , defined = __webpack_require__(13);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdInputContainer = __webpack_require__(323);

var _mdInputContainer2 = _interopRequireDefault(_mdInputContainer);

var _mdInput = __webpack_require__(322);

var _mdInput2 = _interopRequireDefault(_mdInput);

var _mdAutocomplete = __webpack_require__(321);

var _mdAutocomplete2 = _interopRequireDefault(_mdAutocomplete);

var _mdTextarea = __webpack_require__(324);

var _mdTextarea2 = _interopRequireDefault(_mdTextarea);

var _mdInputContainer3 = __webpack_require__(273);

var _mdInputContainer4 = _interopRequireDefault(_mdInputContainer3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('md-input-container', _mdInputContainer2.default);
  Vue.component('md-input', _mdInput2.default);
  Vue.component('md-autocomplete', _mdAutocomplete2.default);
  Vue.component('md-textarea', _mdTextarea2.default);

  Vue.material.styles.push(_mdInputContainer4.default);
}
module.exports = exports['default'];

/***/ })

/******/ });
}));