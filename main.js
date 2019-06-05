/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/npm-ccjs-ay/src/ccjs/cc.js":
/*!*************************************************!*\
  !*** ./node_modules/npm-ccjs-ay/src/ccjs/cc.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dom = __webpack_require__(/*! ./dom/dom */ "./node_modules/npm-ccjs-ay/src/ccjs/dom/dom.js");

var _dom2 = _interopRequireDefault(_dom);

var _storage = __webpack_require__(/*! ./storage/storage */ "./node_modules/npm-ccjs-ay/src/ccjs/storage/storage.js");

var _storage2 = _interopRequireDefault(_storage);

var _raf = __webpack_require__(/*! ./common/raf */ "./node_modules/npm-ccjs-ay/src/ccjs/common/raf.js");

var _raf2 = _interopRequireDefault(_raf);

var _common = __webpack_require__(/*! ./common/common */ "./node_modules/npm-ccjs-ay/src/ccjs/common/common.js");

var _common2 = _interopRequireDefault(_common);

var _xhr = __webpack_require__(/*! ./xhr/xhr */ "./node_modules/npm-ccjs-ay/src/ccjs/xhr/xhr.js");

var _xhr2 = _interopRequireDefault(_xhr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IS_WORKER = self.window === undefined;
var CONTEXT = IS_WORKER ? self : window;

var cc;
window.cc = cc = {
    utils: _common2.default,
    load: function load() {
        var addOns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    },
    select: function select(selector) {
        return _dom2.default.select(selector);
    },
    createElement: function createElement(tagName, id, options) {
        return _dom2.default.createElement(tagName, id, options);
    },
    createElementNS: function createElementNS(tagName, id) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        options.NS = true;
        return _dom2.default.createElement(tagName, id, options);
    },
    setValue: function setValue(key, value) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        options.reset = true;
        return _storage2.default.setValue(key, value, options);
    },
    saveArray: function saveArray(key) {
        var arr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var idkey = arguments[2];

        if (idkey !== undefined && idkey !== '' && key !== undefined) {
            arr.forEach(function (item) {
                cc.updateValue(item[idkey], item);
            });
        }
        return cc.setValue(key, arr);
    },
    updateValue: function updateValue(key, value) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        return _storage2.default.setValue(key, value, options);
    },
    getValue: function getValue(key) {
        return _storage2.default.getValue(key);
    },
    setTimer: function setTimer(fn, delay) {
        return _raf2.default.requestTimeout(fn, delay);
    },
    cancelTimer: function cancelTimer(handle) {
        _raf2.default.clearRequestTimeout(handle);
    },
    request: function request() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return _xhr2.default.ajax(params);
    }

};

if (IS_WORKER) {
    delete cc.select;
    delete cc.createElement;
    delete cc.createElementNS;
} else {
    var last = 0;
    var frameTicker = function frameTicker(timestamp) {
        cc.setValue('frame', timestamp, { immediately: true });
        //console.log(timestamp - last);
        last = timestamp;
        _raf2.default.requestTimeout(frameTicker, 16);
    };
    frameTicker(0);
}

exports.default = cc;

/***/ }),

/***/ "./node_modules/npm-ccjs-ay/src/ccjs/common/common.js":
/*!************************************************************!*\
  !*** ./node_modules/npm-ccjs-ay/src/ccjs/common/common.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var IS_WORKER = self.window === undefined;
var CONTEXT = IS_WORKER ? self : window;
var common = {};

common.objectforEach = function (obj, fn) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            fn(obj[key], key, obj);
        }
    }
};

common.objectAssign = function (target, source) {
    for (var key in source) {
        if (source.hasOwnProperty(key)) {
            target[key] = source[key];
        }
    }
    return target;
};

common.createId = function () {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

common.isObject = function (item) {
    return item !== undefined && item === Object(item) && !(item instanceof Array);
};

common.getBrowser = function () {
    var isIE = false;
    var isChrome = false;
    var isOpera = false;
    if (!!CONTEXT.opr && !!opr.addons || !!CONTEXT.opera || navigator.userAgent.indexOf(' OPR/') >= 0) {
        isOpera = true;
        return 'opera';
    }
    if (typeof InstallTrigger !== 'undefined') {
        return 'firefox';
    }
    if (/constructor/i.test(CONTEXT.HTMLElement) || function (p) {
        return p.toString() === "[object SafariRemoteNotification]";
    }(!CONTEXT['safari'] || safari.pushNotification)) {
        return 'safari';
    }
    if ( false || !!document.documentMode) {
        Object.assign = function () {
            var output = arguments[0];
            for (var i = 1; i < arguments.length; i++) {
                for (var key in arguments[i]) {
                    var obj = arguments[i];
                    if (obj.hasOwnProperty(key)) output[key] = obj[key];
                }
            }
            return output;
        };
        if (!('remove' in Element.prototype)) {
            Element.prototype.remove = function () {
                if (this.parentNode) {
                    this.parentNode.removeChild(this);
                }
            };
        }
        isIE = true;
        return 'ie';
    }
    if (!isIE && !!CONTEXT.StyleMedia) {
        return 'edge';
    }
    if (!!CONTEXT.chrome && !!CONTEXT.chrome.webstore) {
        isChrome = true;
        return 'chrome';
    }
    if ((isChrome || isOpera) && !!CONTEXT.CSS) {
        return 'blink';
    }
};

common.readValue = function (value) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (typeof value === "function") {
        return value(options);
    } else {
        return value;
    }
};

common.getUrlVar = function (key, defaultValue) {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars[key] === undefined ? defaultValue : vars[key];
};

exports.default = common;

/***/ }),

/***/ "./node_modules/npm-ccjs-ay/src/ccjs/common/raf.js":
/*!*********************************************************!*\
  !*** ./node_modules/npm-ccjs-ay/src/ccjs/common/raf.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var IS_WORKER = self.window === undefined;
var CONTEXT = IS_WORKER ? self : window;
var raf = {
    requestTimeout: function requestTimeout(fn, delay) {
        if (!CONTEXT.requestAnimationFrame) return setTimeout(fn, delay);

        var start = Date.now(),
            handle = new Object();

        function loop(timestamp) {
            Date.now() - start >= delay ? fn(timestamp) : handle.value = CONTEXT.requestAnimationFrame(loop);
        };

        handle.value = CONTEXT.requestAnimationFrame(loop);
        return handle;
    },
    clearRequestTimeout: function clearRequestTimeout(handle) {
        CONTEXT.cancelAnimationFrame ? CONTEXT.cancelAnimationFrame(handle.value) : clearTimeout(handle);
    }
};

exports.default = raf;

/***/ }),

/***/ "./node_modules/npm-ccjs-ay/src/ccjs/dom/dom.js":
/*!******************************************************!*\
  !*** ./node_modules/npm-ccjs-ay/src/ccjs/dom/dom.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _common = __webpack_require__(/*! ../common/common */ "./node_modules/npm-ccjs-ay/src/ccjs/common/common.js");

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dom = {
    select: function select(selector) {
        if (selector === undefined) {
            return;
        }

        var _selector = selector.charAt(0);
        var name = selector.substring(1);
        var doms = [];
        switch (_selector) {
            case '#':
                return document.getElementById(name);
            default:
                doms = document.querySelectorAll(selector) || [];
        }

        return doms;
    },
    createElement: function createElement(tag) {
        var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var element = document.createElement(tag);

        var elementId = id || tag + '_' + _common2.default.createId();
        element.setAttribute('id', elementId);

        setupElementMethods(element, options);

        return element;
    }
};

function setupElementMethods(element, options) {
    element._eventListeners = new Map();
    element._bound = new Map();

    element.add = function (tag, id, options) {
        var child = dom.createElement(tag, id, options);
        return this.addElement(child);
    };

    element.addElement = function (child) {
        this.appendChild(child);
        return child;
    };

    element.addClass = function (className) {
        this.classList.add(className);
        return this;
    };

    element.removeClass = function (className) {
        this.classList.remove(className);
        return this;
    };

    element.getAttr = function (key) {
        return element.getAttribute(key);
    };

    element.attr = function (key, value) {
        this._setElement('attr', key, value);
        return this;
    };

    element.getData = function () {
        return this._data;
    };

    element.data = function (any) {
        this._data = any;
        return this;
    };

    element.getProp = function (key) {
        return element[key];
    };

    element.prop = function (key, value) {
        this._setElement('prop', key, value);
        return this;
    };

    element.css = function (key, value) {
        this._setElement('css', key, value);
        return this;
    };

    element.bind = function (key, fn) {
        if (key) {
            var self = this;
            this._bound.set(key, fn);
            this.classList.add('storage_' + key);
        }
        return this;
    };
    element.unbind = function (key) {
        var self = this;
        this._bound.delete(key);
        this.classList.remove('storage_' + key);
        return this;
    };

    element._react = function (key, value) {
        var fn = this._bound.get(key);
        if (fn) {
            if (fn.call(this, value, this._data) === false) {
                this.unbind(key);
            }
        }
    };

    element.on = function (eventName, fn) {
        var tag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

        var self = this;
        var eventTag = eventName + tag;
        var _eventHandler = element._eventListeners.get(eventTag);
        if (_eventHandler) {
            this.removeEventListener(eventName, _eventHandler);
            element._eventListeners.delete(eventTag);
        }
        if (fn) {
            _eventHandler = function eventHandler(e) {
                if (fn.call(self, e, self._data) === false) {
                    self.removeEventListener(eventName, _eventHandler);
                }
            };
            element._eventListeners.set(eventTag, _eventHandler);
            this.addEventListener(eventName, _eventHandler, false);
        }
        return self;
    };

    element.content = function (str) {
        this.innerText = str;
        return this;
    };

    element.removeSelf = function () {
        this.removeAllChildren();
        if (this.remove) {
            this.remove();
        } else {
            this.parentNode.removeChild(this);
        }
    };

    element.removeAllChildren = function () {
        while (this.firstChild) {
            this.removeChild(this.firstChild);
        }
    };

    element._setElement = function (type, key, value) {
        var self = this;
        if (key === undefined) {
            return this;
        }
        if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
            _common2.default.objectforEach(key, function (item, key) {
                self[type](key, item);
            });
            return this;
        }

        var v = _common2.default.readValue(value);

        switch (type) {
            case 'prop':
                this[key] = value;
                break;
            case 'attr':
                if (value === false) {
                    this.removeAttribute(key);
                } else {
                    this.setAttribute(key, value);
                }
                break;
            case 'css':
                this.style[key] = value;
                break;
        }
        return this;
    };

    element.isInViewport = function () {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var offsetX = options.offsetX || 0;
        var offsetY = options.offsetY || 0;

        var _getBoundingClientRec = this.getBoundingClientRect(),
            x = _getBoundingClientRec.x,
            y = _getBoundingClientRec.y,
            width = _getBoundingClientRec.width,
            height = _getBoundingClientRec.height; //IE not support bottom right


        var x2 = x + width;
        var y2 = y + height;
        var innerWidth = window.innerWidth;
        var innerHeight = window.innerHeight;
        return !(x2 <= 0 + offsetX || x >= innerWidth - offsetX || y2 <= 0 + offsetY || y >= innerHeight - offsetY);
    };
}

exports.default = dom;

/***/ }),

/***/ "./node_modules/npm-ccjs-ay/src/ccjs/storage/storage.js":
/*!**************************************************************!*\
  !*** ./node_modules/npm-ccjs-ay/src/ccjs/storage/storage.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _common = __webpack_require__(/*! ../common/common */ "./node_modules/npm-ccjs-ay/src/ccjs/common/common.js");

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storage = {
    dataMap: new Map(),
    timerMap: new Map(),
    setValue: function setValue(key, value) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var self = this;
        var dataMap = this.dataMap;
        var reset = options.reset;

        var shouldReact = false;
        var oldValue = dataMap.get(key);
        if (_common2.default.isObject(value) && _common2.default.isObject(oldValue) && reset !== true) {
            _common2.default.objectforEach(value, function (item, key, obj) {
                if (item !== value) {
                    shouldReact = true;
                }
                obj[key] = value[key];
            });
        } else {
            shouldReact = true;
            dataMap.set(key, value);
        }

        var newValue = dataMap.get(key);

        if (shouldReact) {
            this.broadcast(key, newValue, options);
        }

        return newValue;
    },
    broadcast: function broadcast(key, newValue) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var self = this;
        var timer = this.timerMap.get(key);

        if (timer) {
            cc.cancelTimer(timer);
        }

        timer = cc.setTimer(function () {
            var doms = document.getElementsByClassName('storage_' + key) || [];
            for (var i = 0; i < doms.length; i++) {
                var dom = doms[i];
                dom._react && dom._react(key, newValue);
            }
            self.timerMap.delete(key);
        }, options.immediately ? 0 : 10);

        this.timerMap.set(key, timer);
    },
    getValue: function getValue(key) {
        return this.dataMap.get(key);
    }
};

exports.default = storage;

/***/ }),

/***/ "./node_modules/npm-ccjs-ay/src/ccjs/xhr/xhr.js":
/*!******************************************************!*\
  !*** ./node_modules/npm-ccjs-ay/src/ccjs/xhr/xhr.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var xhr = {
    ajax: function ajax() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var promise = new Promise(function (resolve, reject) {
            var _ref = params || {},
                url = _ref.url,
                method = _ref.method,
                data = _ref.data,
                async = _ref.async,
                xhr = _ref.xhr,
                contentType = _ref.contentType,
                dataType = _ref.dataType,
                done = _ref.done,
                fail = _ref.fail;

            var header = params.header,
                onProgress = params.onProgress,
                beforeSend = params.beforeSend;

            var request = new XMLHttpRequest();
            request.open(method || 'GET', url, async === undefined ? true : async);

            for (var key in header || {}) {
                if ((header || {}).hasOwnProperty(key)) {
                    request.setRequestHeader(key, header[key]);
                }
            }
            if (cc.getValue('Authorization')) {
                request.setRequestHeader('Authorization', cc.getValue('Authorization'));
            }
            request.onload = function () {
                if (request.status >= 200 && request.status < 400) {
                    done && done(parseData(request.responseText), request);
                    resolve(parseData(request.responseText), request);
                } else {
                    fail && fail(parseData(request.responseText), request);
                    reject(parseData(request.responseText));
                }
            };

            request.onerror = function () {
                fail && fail(parseData(request.responseText), request);
                reject(parseData(request.responseText));
            };

            request.upload.onprogress = function (e) {
                var p = Math.floor(e.loaded / e.total * 100);
                onProgress && onProgress(p, e);
            };

            var _data = void 0;
            switch (dataType) {
                case 'file':
                    _data = data;
                    break;
                case 'json':
                default:
                    request.setRequestHeader('Content-Type', contentType === undefined ? "application/json; charset=utf-8" : contentType);
                    _data = JSON.stringify(data);
            }

            beforeSend && beforeSend(request);

            request.send(_data);
        });

        return promise;
    }
};

function parseData(data) {
    try {
        return JSON.parse(data || '');
    } catch (e) {
        return undefined;
    }
}

exports.default = xhr;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _npmCcjsAy = __webpack_require__(/*! npm-ccjs-ay */ "./node_modules/npm-ccjs-ay/src/ccjs/cc.js");

var _npmCcjsAy2 = _interopRequireDefault(_npmCcjsAy);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

_npmCcjsAy2.default.setValue('viewport', { width: window.innerWidth, height: window.innerHeight });
window.addEventListener('resize', function () {
    _npmCcjsAy2.default.updateValue('viewport', { width: window.innerWidth, height: window.innerHeight });
});

function setupSW() {
    if ('serviceWorker' in navigator) {
        console.log('Service worker supported!');
        try {
            navigator.serviceWorker.register('service.js');
            console.log('Service worker registered.');
        } catch (e) {
            console.log('Service worker failed to register. - WTH!?');
        }
    } else {
        console.log('Service worker not supported! - Dude, buy a new phone.');
    }
}

function setupInputs(mainContainer) {
    var display = mainContainer.add('div').addClass('display');

    var subTotalDiv = display.add('div', 'subTotal').css({
        padding: '8px',
        fontSize: '24px'
    });
    subTotalDiv.add('strong').content('Subtotal:');
    subTotalDiv.add('input').attr('type', 'number').addClass('mainNumber').addClass('mainNumberBackground').on('change', function () {
        this.prop('value', (+this.value).toFixed(2));
        _npmCcjsAy2.default.setValue('subtotal', Math.abs(+this.value));
    });

    var TotalDiv = display.add('div', 'Total').css({
        padding: '8px',
        fontSize: '24px'
    });
    TotalDiv.add('strong').content('Total:');
    TotalDiv.add('input').attr('type', 'number').addClass('mainNumber').addClass('mainNumberBackground').on('change', function () {
        this.prop('value', (+this.value).toFixed(2));
        _npmCcjsAy2.default.setValue('total', Math.abs(+this.value));
    });

    var tipDiv = display.add('div', 'Total').css({
        padding: '8px',
        fontSize: '24px'
    });
    tipDiv.add('strong').content('Tip:');
    tipDiv.add('span').attr('type', 'number').addClass('mainNumber').content('0.00').bind('total', function (d) {
        var subtotal = _npmCcjsAy2.default.getValue('subtotal') || 0;
        var total = _npmCcjsAy2.default.getValue('total') || subtotal;
        var tip = (total - subtotal).toFixed(2);
        this.content(tip + ' (' + (+tip * 100 / subtotal).toFixed(2) + '%)');
    });
}

function setupTable(mainContainer) {
    var tableDiv = mainContainer.add('div').addClass('advice');
    var tipTable = tableDiv.add('table').css({
        width: '100%'
    });
    var tipRange = [8, 25];
    var header = tipTable.add('tr');
    header.add('th').content('Percentage').css({
        textAlign: 'center',
        width: '100px'
    });
    header.add('th').content('Tip').css({
        textAlign: 'center',
        width: 'calc(50% - 50px)'
    });
    header.add('th').content('Total').css({
        textAlign: 'center',
        width: 'calc(50% - 50px)'
    });

    var _loop = function _loop(i) {
        var tipRow = tipTable.add('tr');
        tipRow.add('td').content(i + '%').css({
            textAlign: 'center'
        });
        tipRow.add('td').css({
            textAlign: 'center'
        }).bind('subtotal', function (d) {
            this.content((d * i / 100).toFixed(2));
        });
        tipRow.add('td').css({
            textAlign: 'center'
        }).bind('subtotal', function (d) {
            this.content((d + d * i / 100).toFixed(2));
        });
    };

    for (var i = tipRange[0]; i <= tipRange[1]; i++) {
        _loop(i);
    }
}

function index() {
    var root = _npmCcjsAy2.default.select('#body');
    var mainContainer = _npmCcjsAy2.default.createElement('div', 'test').addClass('main-container');
    root.appendChild(mainContainer);

    mainContainer.add('h2').content('Thank you').addClass('header');

    setupInputs(mainContainer);
    setupTable(mainContainer);
}

setupSW();
index();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25wbS1jY2pzLWF5L3NyYy9jY2pzL2NjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ucG0tY2Nqcy1heS9zcmMvY2Nqcy9jb21tb24vY29tbW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ucG0tY2Nqcy1heS9zcmMvY2Nqcy9jb21tb24vcmFmLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ucG0tY2Nqcy1heS9zcmMvY2Nqcy9kb20vZG9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ucG0tY2Nqcy1heS9zcmMvY2Nqcy9zdG9yYWdlL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25wbS1jY2pzLWF5L3NyYy9jY2pzL3hoci94aHIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIklTX1dPUktFUiIsInNlbGYiLCJ3aW5kb3ciLCJ1bmRlZmluZWQiLCJDT05URVhUIiwiY2MiLCJ1dGlscyIsImNvbW1vbiIsImxvYWQiLCJhZGRPbnMiLCJvcHRpb25zIiwic2VsZWN0Iiwic2VsZWN0b3IiLCJkb20iLCJjcmVhdGVFbGVtZW50IiwidGFnTmFtZSIsImlkIiwiY3JlYXRlRWxlbWVudE5TIiwiTlMiLCJzZXRWYWx1ZSIsImtleSIsInZhbHVlIiwicmVzZXQiLCJzdG9yYWdlIiwic2F2ZUFycmF5IiwiYXJyIiwiaWRrZXkiLCJmb3JFYWNoIiwiaXRlbSIsInVwZGF0ZVZhbHVlIiwiZ2V0VmFsdWUiLCJzZXRUaW1lciIsImZuIiwiZGVsYXkiLCJyYWYiLCJyZXF1ZXN0VGltZW91dCIsImNhbmNlbFRpbWVyIiwiaGFuZGxlIiwiY2xlYXJSZXF1ZXN0VGltZW91dCIsInJlcXVlc3QiLCJwYXJhbXMiLCJ4aHIiLCJhamF4IiwibGFzdCIsImZyYW1lVGlja2VyIiwidGltZXN0YW1wIiwiaW1tZWRpYXRlbHkiLCJvYmplY3Rmb3JFYWNoIiwib2JqIiwiaGFzT3duUHJvcGVydHkiLCJvYmplY3RBc3NpZ24iLCJ0YXJnZXQiLCJzb3VyY2UiLCJjcmVhdGVJZCIsInM0IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJpc09iamVjdCIsIk9iamVjdCIsIkFycmF5IiwiZ2V0QnJvd3NlciIsImlzSUUiLCJpc0Nocm9tZSIsImlzT3BlcmEiLCJvcHIiLCJhZGRvbnMiLCJvcGVyYSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImluZGV4T2YiLCJJbnN0YWxsVHJpZ2dlciIsInRlc3QiLCJIVE1MRWxlbWVudCIsInAiLCJzYWZhcmkiLCJwdXNoTm90aWZpY2F0aW9uIiwiZG9jdW1lbnQiLCJkb2N1bWVudE1vZGUiLCJhc3NpZ24iLCJvdXRwdXQiLCJhcmd1bWVudHMiLCJpIiwibGVuZ3RoIiwiRWxlbWVudCIsInByb3RvdHlwZSIsInJlbW92ZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIlN0eWxlTWVkaWEiLCJjaHJvbWUiLCJ3ZWJzdG9yZSIsIkNTUyIsInJlYWRWYWx1ZSIsImdldFVybFZhciIsImRlZmF1bHRWYWx1ZSIsInZhcnMiLCJwYXJ0cyIsImxvY2F0aW9uIiwiaHJlZiIsInJlcGxhY2UiLCJtIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2V0VGltZW91dCIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsImxvb3AiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNsZWFyVGltZW91dCIsIl9zZWxlY3RvciIsImNoYXJBdCIsIm5hbWUiLCJkb21zIiwiZ2V0RWxlbWVudEJ5SWQiLCJxdWVyeVNlbGVjdG9yQWxsIiwidGFnIiwiZWxlbWVudCIsImVsZW1lbnRJZCIsInNldEF0dHJpYnV0ZSIsInNldHVwRWxlbWVudE1ldGhvZHMiLCJfZXZlbnRMaXN0ZW5lcnMiLCJNYXAiLCJfYm91bmQiLCJhZGQiLCJjaGlsZCIsImFkZEVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImFkZENsYXNzIiwiY2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwicmVtb3ZlQ2xhc3MiLCJnZXRBdHRyIiwiZ2V0QXR0cmlidXRlIiwiYXR0ciIsIl9zZXRFbGVtZW50IiwiZ2V0RGF0YSIsIl9kYXRhIiwiZGF0YSIsImFueSIsImdldFByb3AiLCJwcm9wIiwiY3NzIiwiYmluZCIsInNldCIsInVuYmluZCIsImRlbGV0ZSIsIl9yZWFjdCIsImdldCIsImNhbGwiLCJvbiIsImV2ZW50TmFtZSIsImV2ZW50VGFnIiwiZXZlbnRIYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImUiLCJhZGRFdmVudExpc3RlbmVyIiwiY29udGVudCIsInN0ciIsImlubmVyVGV4dCIsInJlbW92ZVNlbGYiLCJyZW1vdmVBbGxDaGlsZHJlbiIsImZpcnN0Q2hpbGQiLCJ0eXBlIiwidiIsInJlbW92ZUF0dHJpYnV0ZSIsInN0eWxlIiwiaXNJblZpZXdwb3J0Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwieDIiLCJ5MiIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImRhdGFNYXAiLCJ0aW1lck1hcCIsInNob3VsZFJlYWN0Iiwib2xkVmFsdWUiLCJuZXdWYWx1ZSIsImJyb2FkY2FzdCIsInRpbWVyIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInVybCIsIm1ldGhvZCIsImFzeW5jIiwiY29udGVudFR5cGUiLCJkYXRhVHlwZSIsImRvbmUiLCJmYWlsIiwiaGVhZGVyIiwib25Qcm9ncmVzcyIsImJlZm9yZVNlbmQiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwib25sb2FkIiwic3RhdHVzIiwicGFyc2VEYXRhIiwicmVzcG9uc2VUZXh0Iiwib25lcnJvciIsInVwbG9hZCIsIm9ucHJvZ3Jlc3MiLCJsb2FkZWQiLCJ0b3RhbCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZW5kIiwicGFyc2UiLCJjb25zb2xlIiwiZGlzcGxheSIsIm1haW5Db250YWluZXIiLCJzdWJUb3RhbERpdiIsInBhZGRpbmciLCJmb250U2l6ZSIsIlRvdGFsRGl2IiwidGlwRGl2Iiwic3VidG90YWwiLCJ0aXAiLCJ0YWJsZURpdiIsInRpcFRhYmxlIiwidGlwUmFuZ2UiLCJ0ZXh0QWxpZ24iLCJ0aXBSb3ciLCJkIiwicm9vdCIsInNldHVwSW5wdXRzIiwic2V0dXBUYWJsZSIsInNldHVwU1ciLCJpbmRleCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxLQUFLQyxNQUFMLEtBQWdCQyxTQUFsQztBQUNBLElBQU1DLFVBQVVKLFlBQVlDLElBQVosR0FBbUJDLE1B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Qi9CLFNBQUksSUFBSXJKLElBQUltSixTQUFaLENBQVlBLENBQVosRUFBeUJuSixLQUFHbUosU0FBNUIsQ0FBNEJBLENBQTVCLE9BQTZDO0FBQUEsY0FBckNuSixDQUFxQztBQXFCNUM7QUFDSjs7QUFFRCxpQkFBaUI7QUFDYixRQUFJdUosT0FBT3RPLDJCQUFYLE9BQVdBLENBQVg7QUFDQSxRQUFJd04sZ0JBQWdCeE4sMERBQXBCLGdCQUFvQkEsQ0FBcEI7QUFFQXNPOztBQUVBZDs7QUFFQWU7QUFDQUM7QUFHSDs7QUFHREM7QUFDQUMsUSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgZG9tIGZyb20gJy4vZG9tL2RvbSc7XHJcbmltcG9ydCBzdG9yYWdlIGZyb20gJy4vc3RvcmFnZS9zdG9yYWdlJztcclxuaW1wb3J0IHJhZiBmcm9tICcuL2NvbW1vbi9yYWYnO1xyXG5pbXBvcnQgY29tbW9uIGZyb20gJy4vY29tbW9uL2NvbW1vbic7XHJcbmltcG9ydCB4aHIgZnJvbSAnLi94aHIveGhyJztcclxuXHJcbmNvbnN0IElTX1dPUktFUiA9IHNlbGYud2luZG93ID09PSB1bmRlZmluZWQ7XHJcbmNvbnN0IENPTlRFWFQgPSBJU19XT1JLRVIgPyBzZWxmIDogd2luZG93O1xyXG5cclxudmFyIGNjO1xyXG53aW5kb3cuY2MgPSBjYyA9IHtcclxuICAgIHV0aWxzOiBjb21tb24sXHJcbiAgICBsb2FkOiBmdW5jdGlvbihhZGRPbnMgPSBbXSwgb3B0aW9ucyA9IHt9KXtcclxuXHJcbiAgICB9LFxyXG4gICAgc2VsZWN0OiBmdW5jdGlvbihzZWxlY3Rvcil7XHJcbiAgICAgICAgcmV0dXJuIGRvbS5zZWxlY3Qoc2VsZWN0b3IpXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlRWxlbWVudDogZnVuY3Rpb24gKHRhZ05hbWUsIGlkLCBvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvbS5jcmVhdGVFbGVtZW50KHRhZ05hbWUsIGlkLCBvcHRpb25zKVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZUVsZW1lbnROUzogZnVuY3Rpb24gKHRhZ05hbWUsIGlkLCBvcHRpb25zID0ge30pIHtcclxuICAgICAgICBvcHRpb25zLk5TID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gZG9tLmNyZWF0ZUVsZW1lbnQodGFnTmFtZSwgaWQsIG9wdGlvbnMpXHJcbiAgICB9LFxyXG4gICAgc2V0VmFsdWU6IGZ1bmN0aW9uIChrZXksIHZhbHVlLCBvcHRpb25zID0ge30pIHtcclxuICAgICAgICBvcHRpb25zLnJlc2V0ID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gc3RvcmFnZS5zZXRWYWx1ZShrZXksIHZhbHVlLCBvcHRpb25zKVxyXG4gICAgfSxcclxuICAgIHNhdmVBcnJheTogZnVuY3Rpb24oa2V5LCBhcnIgPSBbXSwgaWRrZXkpe1xyXG4gICAgICAgIGlmKGlka2V5ICE9PSB1bmRlZmluZWQgJiYgaWRrZXkgIT09ICcnICYmIGtleSAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgYXJyLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGNjLnVwZGF0ZVZhbHVlKGl0ZW1baWRrZXldLCBpdGVtKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNjLnNldFZhbHVlKGtleSwgYXJyKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVWYWx1ZTogZnVuY3Rpb24oa2V5LCB2YWx1ZSwgb3B0aW9ucyA9IHt9KXtcclxuICAgICAgICByZXR1cm4gc3RvcmFnZS5zZXRWYWx1ZShrZXksIHZhbHVlLCBvcHRpb25zKVxyXG4gICAgfSxcclxuICAgIGdldFZhbHVlOiAgZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIHJldHVybiBzdG9yYWdlLmdldFZhbHVlKGtleSk7XHJcbiAgICB9LFxyXG4gICAgc2V0VGltZXI6IGZ1bmN0aW9uIChmbiwgZGVsYXkpIHtcclxuICAgICAgICByZXR1cm4gcmFmLnJlcXVlc3RUaW1lb3V0KGZuLCBkZWxheSlcclxuICAgIH0sXHJcbiAgICBjYW5jZWxUaW1lcjogZnVuY3Rpb24gKGhhbmRsZSkge1xyXG4gICAgICAgIHJhZi5jbGVhclJlcXVlc3RUaW1lb3V0KGhhbmRsZSk7XHJcbiAgICB9LFxyXG4gICAgcmVxdWVzdDogZnVuY3Rpb24gKHBhcmFtcyA9IHt9KSB7XHJcbiAgICAgICAgcmV0dXJuIHhoci5hamF4KHBhcmFtcyk7XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuaWYoSVNfV09SS0VSKXtcclxuICAgIGRlbGV0ZSBjYy5zZWxlY3Q7XHJcbiAgICBkZWxldGUgY2MuY3JlYXRlRWxlbWVudDtcclxuICAgIGRlbGV0ZSBjYy5jcmVhdGVFbGVtZW50TlM7XHJcbn1lbHNle1xyXG4gICAgbGV0IGxhc3QgPSAwXHJcbiAgICBsZXQgZnJhbWVUaWNrZXIgPSBmdW5jdGlvbiAodGltZXN0YW1wKSB7XHJcbiAgICAgICAgY2Muc2V0VmFsdWUoJ2ZyYW1lJywgdGltZXN0YW1wLCB7aW1tZWRpYXRlbHk6IHRydWV9KTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRpbWVzdGFtcCAtIGxhc3QpO1xyXG4gICAgICAgIGxhc3QgPSB0aW1lc3RhbXA7XHJcbiAgICAgICAgcmFmLnJlcXVlc3RUaW1lb3V0KGZyYW1lVGlja2VyLCAxNilcclxuICAgIH07XHJcbiAgICBmcmFtZVRpY2tlcigwKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNjOyIsImNvbnN0IElTX1dPUktFUiA9IHNlbGYud2luZG93ID09PSB1bmRlZmluZWQ7XHJcbmNvbnN0IENPTlRFWFQgPSBJU19XT1JLRVIgPyBzZWxmIDogd2luZG93O1xyXG5jb25zdCBjb21tb24gPSB7fTtcclxuXHJcbmNvbW1vbi5vYmplY3Rmb3JFYWNoID0gZnVuY3Rpb24ob2JqLGZuKXtcclxuICAgIGZvcih2YXIga2V5IGluIG9iaikge1xyXG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICBmbihvYmpba2V5XSwga2V5LCBvYmopO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmNvbW1vbi5vYmplY3RBc3NpZ24gPSBmdW5jdGlvbih0YXJnZXQsIHNvdXJjZSl7XHJcbiAgICBmb3IobGV0IGtleSBpbiBzb3VyY2UpIHtcclxuICAgICAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbn07XHJcblxyXG5jb21tb24uY3JlYXRlSWQgPSBmdW5jdGlvbigpe1xyXG4gICAgZnVuY3Rpb24gczQoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXHJcbiAgICAgICAgICAgIC50b1N0cmluZygxNilcclxuICAgICAgICAgICAgLnN1YnN0cmluZygxKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzNCgpICsgczQoKSArICctJyArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyBzNCgpICsgczQoKTtcclxufTtcclxuXHJcbmNvbW1vbi5pc09iamVjdCA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICByZXR1cm4gKGl0ZW0hPT11bmRlZmluZWQgJiYgaXRlbSA9PT0gT2JqZWN0KGl0ZW0pICYmICEoaXRlbSBpbnN0YW5jZW9mIEFycmF5KSlcclxufTtcclxuXHJcbmNvbW1vbi5nZXRCcm93c2VyID0gZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgaXNJRSA9IGZhbHNlO1xyXG4gICAgbGV0IGlzQ2hyb21lID0gZmFsc2U7XHJcbiAgICBsZXQgaXNPcGVyYSA9IGZhbHNlO1xyXG4gICAgaWYgKCghIUNPTlRFWFQub3ByICYmICEhb3ByLmFkZG9ucykgfHwgISFDT05URVhULm9wZXJhIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignIE9QUi8nKSA+PSAwKSB7XHJcbiAgICAgICAgaXNPcGVyYSA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuICdvcGVyYSc7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIEluc3RhbGxUcmlnZ2VyICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiAnZmlyZWZveCc7XHJcbiAgICB9XHJcbiAgICBpZiAoL2NvbnN0cnVjdG9yL2kudGVzdChDT05URVhULkhUTUxFbGVtZW50KSB8fCAoZnVuY3Rpb24gKHApIHtcclxuICAgICAgICByZXR1cm4gcC50b1N0cmluZygpID09PSBcIltvYmplY3QgU2FmYXJpUmVtb3RlTm90aWZpY2F0aW9uXVwiO1xyXG4gICAgfSkoIUNPTlRFWFRbJ3NhZmFyaSddIHx8IHNhZmFyaS5wdXNoTm90aWZpY2F0aW9uKSkge1xyXG4gICAgICAgIHJldHVybiAnc2FmYXJpJztcclxuICAgIH1cclxuICAgIGlmIChmYWxzZSB8fCAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSkge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBvdXRwdXQgPSBhcmd1bWVudHNbMF07XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gYXJndW1lbnRzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9iaiA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dFtrZXldID0gb2JqW2tleV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICghKCdyZW1vdmUnIGluIEVsZW1lbnQucHJvdG90eXBlKSkge1xyXG4gICAgICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpc0lFID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gJ2llJztcclxuICAgIH1cclxuICAgIGlmICghaXNJRSAmJiAhIUNPTlRFWFQuU3R5bGVNZWRpYSkge1xyXG4gICAgICAgIHJldHVybiAnZWRnZSc7XHJcbiAgICB9XHJcbiAgICBpZiAoISFDT05URVhULmNocm9tZSAmJiAhIUNPTlRFWFQuY2hyb21lLndlYnN0b3JlKSB7XHJcbiAgICAgICAgaXNDaHJvbWUgPSB0cnVlXHJcbiAgICAgICAgcmV0dXJuICdjaHJvbWUnO1xyXG4gICAgfVxyXG4gICAgaWYgKChpc0Nocm9tZSB8fCBpc09wZXJhKSAmJiAhIUNPTlRFWFQuQ1NTKSB7XHJcbiAgICAgICAgcmV0dXJuICdibGluayc7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb21tb24ucmVhZFZhbHVlID0gZnVuY3Rpb24odmFsdWUsIG9wdGlvbnMgPSB7fSl7XHJcbiAgICBpZih0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIil7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlKG9wdGlvbnMpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuY29tbW9uLmdldFVybFZhciA9IGZ1bmN0aW9uIChrZXksIGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgdmFyIHZhcnMgPSB7fTtcclxuICAgIHZhciBwYXJ0cyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoL1s/Jl0rKFtePSZdKyk9KFteJl0qKS9naSwgZnVuY3Rpb24gKG0sIGtleSwgdmFsdWUpIHtcclxuICAgICAgICB2YXJzW2tleV0gPSB2YWx1ZTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuICh2YXJzW2tleV0gPT09IHVuZGVmaW5lZD8gZGVmYXVsdFZhbHVlOiB2YXJzW2tleV0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tbW9uOyIsImNvbnN0IElTX1dPUktFUiA9IHNlbGYud2luZG93ID09PSB1bmRlZmluZWQ7XHJcbmNvbnN0IENPTlRFWFQgPSBJU19XT1JLRVIgPyBzZWxmIDogd2luZG93O1xyXG52YXIgcmFmID0ge1xyXG4gICAgcmVxdWVzdFRpbWVvdXQ6IGZ1bmN0aW9uIChmbiwgZGVsYXkpIHtcclxuICAgICAgICBpZiAoIUNPTlRFWFQucmVxdWVzdEFuaW1hdGlvbkZyYW1lKVxyXG4gICAgICAgICAgICByZXR1cm4gc2V0VGltZW91dChmbiwgZGVsYXkpO1xyXG5cclxuICAgICAgICB2YXIgc3RhcnQgPSBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICBoYW5kbGUgPSBuZXcgT2JqZWN0KCk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGxvb3AodGltZXN0YW1wKSB7XHJcbiAgICAgICAgICAgIChEYXRlLm5vdygpIC0gc3RhcnQpID49IGRlbGF5ID8gZm4odGltZXN0YW1wKSA6IGhhbmRsZS52YWx1ZSA9IENPTlRFWFQucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGhhbmRsZS52YWx1ZSA9IENPTlRFWFQucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xyXG4gICAgICAgIHJldHVybiBoYW5kbGU7XHJcbiAgICB9LFxyXG4gICAgY2xlYXJSZXF1ZXN0VGltZW91dDogZnVuY3Rpb24gKGhhbmRsZSkge1xyXG4gICAgICAgIENPTlRFWFQuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPyBDT05URVhULmNhbmNlbEFuaW1hdGlvbkZyYW1lKGhhbmRsZS52YWx1ZSk6Y2xlYXJUaW1lb3V0KGhhbmRsZSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByYWY7IiwiaW1wb3J0IGNvbW1vbiBmcm9tICcuLi9jb21tb24vY29tbW9uJ1xyXG52YXIgZG9tID0ge1xyXG4gICAgc2VsZWN0OiBmdW5jdGlvbihzZWxlY3Rvcil7XHJcbiAgICAgICAgaWYoc2VsZWN0b3I9PT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgX3NlbGVjdG9yID0gc2VsZWN0b3IuY2hhckF0KDApO1xyXG4gICAgICAgIGxldCBuYW1lID0gc2VsZWN0b3Iuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIGxldCBkb21zID0gW107XHJcbiAgICAgICAgc3dpdGNoIChfc2VsZWN0b3Ipe1xyXG4gICAgICAgICAgICBjYXNlICcjJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYW1lKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGRvbXMgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikgfHwgW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZG9tcztcclxuICAgIH0sXHJcbiAgICBjcmVhdGVFbGVtZW50OiBmdW5jdGlvbiAodGFnLCBpZCA9ICcnLCBvcHRpb25zID0ge30pIHtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuXHJcbiAgICAgICAgbGV0IGVsZW1lbnRJZCA9IGlkIHx8ICh0YWcgKyAnXycgKyBjb21tb24uY3JlYXRlSWQoKSk7XHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgZWxlbWVudElkKTtcclxuXHJcbiAgICAgICAgc2V0dXBFbGVtZW50TWV0aG9kcyhlbGVtZW50LCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9LFxyXG59O1xyXG5cclxuZnVuY3Rpb24gc2V0dXBFbGVtZW50TWV0aG9kcyhlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICBlbGVtZW50Ll9ldmVudExpc3RlbmVycyA9IG5ldyBNYXAoKTtcclxuICAgIGVsZW1lbnQuX2JvdW5kID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIGVsZW1lbnQuYWRkID0gZnVuY3Rpb24gKHRhZywgaWQsIG9wdGlvbnMpIHtcclxuICAgICAgICBsZXQgY2hpbGQgPSBkb20uY3JlYXRlRWxlbWVudCh0YWcsIGlkLCBvcHRpb25zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5hZGRFbGVtZW50KGNoaWxkKTtcclxuICAgIH07XHJcblxyXG4gICAgZWxlbWVudC5hZGRFbGVtZW50ID0gZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChjaGlsZCk7XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkXHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQuYWRkQ2xhc3MgPSBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQuZ2V0QXR0ciA9IGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKGtleSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQuYXR0ciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0RWxlbWVudCgnYXR0cicsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuXHJcbiAgICBlbGVtZW50LmdldERhdGEgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhXHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQuZGF0YSA9IGZ1bmN0aW9uKGFueSl7XHJcbiAgICAgICAgdGhpcy5fZGF0YSA9IGFueTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG4gICAgZWxlbWVudC5nZXRQcm9wID0gZnVuY3Rpb24oa2V5KXtcclxuICAgICAgICByZXR1cm4gZWxlbWVudFtrZXldO1xyXG4gICAgfTtcclxuXHJcbiAgICBlbGVtZW50LnByb3AgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3NldEVsZW1lbnQoJ3Byb3AnLCBrZXksIHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG4gICAgZWxlbWVudC5jc3MgPSBmdW5jdGlvbihrZXksIHZhbHVlKXtcclxuICAgICAgICB0aGlzLl9zZXRFbGVtZW50KCdjc3MnLCBrZXksIHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG4gICAgZWxlbWVudC5iaW5kID0gZnVuY3Rpb24oa2V5LCBmbil7XHJcbiAgICAgICAgaWYoa2V5KSB7XHJcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgdGhpcy5fYm91bmQuc2V0KGtleSwgZm4pO1xyXG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ3N0b3JhZ2VfJyArIGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIGVsZW1lbnQudW5iaW5kID0gZnVuY3Rpb24oa2V5KXtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fYm91bmQuZGVsZXRlKGtleSk7XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdzdG9yYWdlXycgKyBrZXkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuXHJcbiAgICBlbGVtZW50Ll9yZWFjdCA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xyXG4gICAgICAgIGxldCBmbiA9IHRoaXMuX2JvdW5kLmdldChrZXkpO1xyXG4gICAgICAgIGlmKGZuKXtcclxuICAgICAgICAgICAgaWYoZm4uY2FsbCh0aGlzLCB2YWx1ZSwgdGhpcy5fZGF0YSkgPT09IGZhbHNlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5iaW5kKGtleSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZWxlbWVudC5vbiAgPSBmdW5jdGlvbihldmVudE5hbWUsIGZuLCB0YWcgPSAnJyl7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBldmVudFRhZyA9IGV2ZW50TmFtZSArIHRhZztcclxuICAgICAgICBsZXQgZXZlbnRIYW5kbGVyID0gZWxlbWVudC5fZXZlbnRMaXN0ZW5lcnMuZ2V0KGV2ZW50VGFnKTtcclxuICAgICAgICBpZihldmVudEhhbmRsZXIpe1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudEhhbmRsZXIpO1xyXG4gICAgICAgICAgICBlbGVtZW50Ll9ldmVudExpc3RlbmVycy5kZWxldGUoZXZlbnRUYWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihmbikge1xyXG4gICAgICAgICAgICBldmVudEhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgaWYoZm4uY2FsbChzZWxmLCBlLCBzZWxmLl9kYXRhKSA9PT0gZmFsc2Upe1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50SGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGVsZW1lbnQuX2V2ZW50TGlzdGVuZXJzLnNldChldmVudFRhZywgZXZlbnRIYW5kbGVyKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzZWxmO1xyXG4gICAgfTtcclxuXHJcbiAgICBlbGVtZW50LmNvbnRlbnQgPSBmdW5jdGlvbiAoc3RyKSB7XHJcbiAgICAgICAgdGhpcy5pbm5lclRleHQgPSBzdHI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQucmVtb3ZlU2VsZiA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIGlmKHRoaXMucmVtb3ZlKXtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmUoKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBlbGVtZW50LnJlbW92ZUFsbENoaWxkcmVuID0gZnVuY3Rpb24oKXtcclxuICAgICAgICB3aGlsZSAodGhpcy5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5maXJzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQuX3NldEVsZW1lbnQgPSBmdW5jdGlvbih0eXBlLCBrZXkgLCB2YWx1ZSl7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGNvbW1vbi5vYmplY3Rmb3JFYWNoKGtleSAsZnVuY3Rpb24gKGl0ZW0sIGtleSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZlt0eXBlXShrZXksIGl0ZW0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB2ID0gY29tbW9uLnJlYWRWYWx1ZSh2YWx1ZSk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdwcm9wJzpcclxuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9ICB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdhdHRyJzpcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShrZXkpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnY3NzJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGVba2V5XSA9ICB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50LmlzSW5WaWV3cG9ydCA9IGZ1bmN0aW9uIChvcHRpb25zID0ge30pIHtcclxuICAgICAgICBsZXQgb2Zmc2V0WCA9IG9wdGlvbnMub2Zmc2V0WCB8fCAwO1xyXG4gICAgICAgIGxldCBvZmZzZXRZID0gb3B0aW9ucy5vZmZzZXRZIHx8IDA7XHJcbiAgICAgICAgbGV0IHt4LCB5LCB3aWR0aCwgaGVpZ2h0fSA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7IC8vSUUgbm90IHN1cHBvcnQgYm90dG9tIHJpZ2h0XHJcbiAgICAgICAgbGV0IHgyID0geCArIHdpZHRoO1xyXG4gICAgICAgIGxldCB5MiA9IHkgKyBoZWlnaHQ7XHJcbiAgICAgICAgbGV0IGlubmVyV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICBsZXQgaW5uZXJIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgcmV0dXJuICEoeDIgPD0gKDAgKyBvZmZzZXRYKXx8IHggPj0gKGlubmVyV2lkdGggLSBvZmZzZXRYKSB8fCB5MiA8PSAoMCArIG9mZnNldFkpIHx8IHkgPj0gKGlubmVySGVpZ2h0IC0gb2Zmc2V0WSkpXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkb207IiwiaW1wb3J0IGNvbW1vbiBmcm9tICcuLi9jb21tb24vY29tbW9uJztcclxuXHJcbnZhciBzdG9yYWdlID0ge1xyXG4gICAgZGF0YU1hcDogbmV3IE1hcCgpLFxyXG4gICAgdGltZXJNYXA6ICBuZXcgTWFwKCksXHJcbiAgICBzZXRWYWx1ZTogZnVuY3Rpb24gKGtleSwgdmFsdWUsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgZGF0YU1hcCA9IHRoaXMuZGF0YU1hcDtcclxuICAgICAgICBsZXQge3Jlc2V0fSA9IG9wdGlvbnM7XHJcbiAgICAgICAgbGV0IHNob3VsZFJlYWN0ID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IG9sZFZhbHVlID0gZGF0YU1hcC5nZXQoa2V5KTtcclxuICAgICAgICBpZihjb21tb24uaXNPYmplY3QodmFsdWUpICYmIGNvbW1vbi5pc09iamVjdChvbGRWYWx1ZSkgJiYgcmVzZXQgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgY29tbW9uLm9iamVjdGZvckVhY2godmFsdWUsIGZ1bmN0aW9uIChpdGVtLCBrZXksIG9iaikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdWxkUmVhY3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb2JqW2tleV0gPSB2YWx1ZVtrZXldXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgc2hvdWxkUmVhY3QgPSB0cnVlO1xyXG4gICAgICAgICAgICBkYXRhTWFwLnNldChrZXksIHZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IGRhdGFNYXAuZ2V0KGtleSk7XHJcblxyXG4gICAgICAgIGlmKHNob3VsZFJlYWN0KSB7XHJcbiAgICAgICAgICAgdGhpcy5icm9hZGNhc3Qoa2V5LCBuZXdWYWx1ZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XHJcbiAgICB9LFxyXG4gICAgYnJvYWRjYXN0OiBmdW5jdGlvbihrZXksIG5ld1ZhbHVlLCBvcHRpb25zID0ge30pe1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgdGltZXIgPSB0aGlzLnRpbWVyTWFwLmdldChrZXkpO1xyXG5cclxuICAgICAgICBpZiAodGltZXIpIHtcclxuICAgICAgICAgICAgY2MuY2FuY2VsVGltZXIodGltZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGltZXIgPSBjYy5zZXRUaW1lcihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBkb21zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RvcmFnZV8nICsga2V5KSB8fCBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkb21zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZG9tID0gZG9tc1tpXTtcclxuICAgICAgICAgICAgICAgIGRvbS5fcmVhY3QgJiYgZG9tLl9yZWFjdChrZXksIG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZWxmLnRpbWVyTWFwLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgIH0sIG9wdGlvbnMuaW1tZWRpYXRlbHk/IDA6IDEwKTtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lck1hcC5zZXQoa2V5LCB0aW1lcik7XHJcbiAgICB9LFxyXG4gICAgZ2V0VmFsdWU6IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhTWFwLmdldChrZXkpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmFnZTsiLCJjb25zdCB4aHIgPSB7XHJcbiAgICBhamF4OiBmdW5jdGlvbiAocGFyYW1zID0ge30pIHtcclxuICAgICAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgbGV0IHt1cmwsIG1ldGhvZCwgZGF0YSwgYXN5bmMsIHhociwgY29udGVudFR5cGUsIGRhdGFUeXBlLCBkb25lLCBmYWlsfSA9IHBhcmFtcyB8fCB7fTtcclxuICAgICAgICAgICAgbGV0IHtoZWFkZXIsIG9uUHJvZ3Jlc3MsIGJlZm9yZVNlbmR9ID0gcGFyYW1zO1xyXG4gICAgICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICByZXF1ZXN0Lm9wZW4oKG1ldGhvZCB8fCAnR0VUJyksIHVybCwgYXN5bmMgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBhc3luYyk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gKGhlYWRlciB8fCB7fSkpIHtcclxuICAgICAgICAgICAgICAgIGlmICgoaGVhZGVyIHx8IHt9KS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgaGVhZGVyW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGNjLmdldFZhbHVlKCdBdXRob3JpemF0aW9uJykpe1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgY2MuZ2V0VmFsdWUoJ0F1dGhvcml6YXRpb24nKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPj0gMjAwICYmIHJlcXVlc3Quc3RhdHVzIDwgNDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSAmJiBkb25lKHBhcnNlRGF0YShyZXF1ZXN0LnJlc3BvbnNlVGV4dCksIHJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocGFyc2VEYXRhKHJlcXVlc3QucmVzcG9uc2VUZXh0KSwgcmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZhaWwgJiYgZmFpbChwYXJzZURhdGEocmVxdWVzdC5yZXNwb25zZVRleHQpLCByZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QocGFyc2VEYXRhKHJlcXVlc3QucmVzcG9uc2VUZXh0KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBmYWlsICYmIGZhaWwocGFyc2VEYXRhKHJlcXVlc3QucmVzcG9uc2VUZXh0KSwgcmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICByZWplY3QocGFyc2VEYXRhKHJlcXVlc3QucmVzcG9uc2VUZXh0KSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0LnVwbG9hZC5vbnByb2dyZXNzID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwID0gTWF0aC5mbG9vcihlLmxvYWRlZCAvIGUudG90YWwgKiAxMDApO1xyXG4gICAgICAgICAgICAgICAgb25Qcm9ncmVzcyAmJiBvblByb2dyZXNzKHAsIGUpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgbGV0IF9kYXRhO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGRhdGFUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdmaWxlJzpcclxuICAgICAgICAgICAgICAgICAgICBfZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdqc29uJzpcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCBjb250ZW50VHlwZSA9PT0gdW5kZWZpbmVkID8gXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIgOiBjb250ZW50VHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2RhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYmVmb3JlU2VuZCAmJiBiZWZvcmVTZW5kKHJlcXVlc3QpO1xyXG5cclxuICAgICAgICAgICAgcmVxdWVzdC5zZW5kKF9kYXRhKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9LFxyXG59O1xyXG5cclxuZnVuY3Rpb24gcGFyc2VEYXRhKGRhdGEpIHtcclxuICAgIHRyeXtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhIHx8ICcnKVxyXG4gICAgfWNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB4aHI7XHJcbiIsImltcG9ydCBjYyBmcm9tICducG0tY2Nqcy1heSc7XHJcblxyXG5cclxuY2Muc2V0VmFsdWUoJ3ZpZXdwb3J0Jywge3dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCwgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHR9KTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNjLnVwZGF0ZVZhbHVlKCd2aWV3cG9ydCcsIHt3aWR0aDogd2luZG93LmlubmVyV2lkdGgsIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0fSk7XHJcbn0pO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHNldHVwU1coKSB7XHJcbiAgICBpZignc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2Ugd29ya2VyIHN1cHBvcnRlZCEnKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3Rlcignc2VydmljZS5qcycpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2VydmljZSB3b3JrZXIgcmVnaXN0ZXJlZC4nKVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2Ugd29ya2VyIGZhaWxlZCB0byByZWdpc3Rlci4gLSBXVEghPycpXHJcbiAgICAgICAgfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2Ugd29ya2VyIG5vdCBzdXBwb3J0ZWQhIC0gRHVkZSwgYnV5IGEgbmV3IHBob25lLicpXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldHVwSW5wdXRzKG1haW5Db250YWluZXIpIHtcclxuICAgIGxldCBkaXNwbGF5ID0gbWFpbkNvbnRhaW5lci5hZGQoJ2RpdicpXHJcbiAgICAgICAgLmFkZENsYXNzKCdkaXNwbGF5Jyk7XHJcblxyXG4gICAgbGV0IHN1YlRvdGFsRGl2ID0gZGlzcGxheS5hZGQoJ2RpdicsICdzdWJUb3RhbCcpXHJcbiAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6ICc4cHgnLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogJzI0cHgnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgc3ViVG90YWxEaXYuYWRkKCdzdHJvbmcnKVxyXG4gICAgICAgIC5jb250ZW50KCdTdWJ0b3RhbDonKTtcclxuICAgIHN1YlRvdGFsRGl2LmFkZCgnaW5wdXQnKVxyXG4gICAgICAgIC5hdHRyKCd0eXBlJywgJ251bWJlcicpXHJcbiAgICAgICAgLmFkZENsYXNzKCdtYWluTnVtYmVyJylcclxuICAgICAgICAuYWRkQ2xhc3MoJ21haW5OdW1iZXJCYWNrZ3JvdW5kJylcclxuICAgICAgICAub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wKCd2YWx1ZScsKCt0aGlzLnZhbHVlKS50b0ZpeGVkKDIpKVxyXG4gICAgICAgICAgICBjYy5zZXRWYWx1ZSgnc3VidG90YWwnLCAgTWF0aC5hYnMoK3RoaXMudmFsdWUpIClcclxuICAgICAgICB9KTtcclxuXHJcbiAgICBsZXQgVG90YWxEaXYgPSBkaXNwbGF5LmFkZCgnZGl2JywgJ1RvdGFsJylcclxuICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICAgcGFkZGluZzogJzhweCcsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMjRweCcsXHJcbiAgICAgICAgfSk7XHJcbiAgICBUb3RhbERpdi5hZGQoJ3N0cm9uZycpXHJcbiAgICAgICAgLmNvbnRlbnQoJ1RvdGFsOicpO1xyXG4gICAgVG90YWxEaXYuYWRkKCdpbnB1dCcpXHJcbiAgICAgICAgLmF0dHIoJ3R5cGUnLCAnbnVtYmVyJylcclxuICAgICAgICAuYWRkQ2xhc3MoJ21haW5OdW1iZXInKVxyXG4gICAgICAgIC5hZGRDbGFzcygnbWFpbk51bWJlckJhY2tncm91bmQnKVxyXG4gICAgICAgIC5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb3AoJ3ZhbHVlJywoK3RoaXMudmFsdWUpLnRvRml4ZWQoMikpXHJcbiAgICAgICAgICAgIGNjLnNldFZhbHVlKCd0b3RhbCcsIE1hdGguYWJzKCt0aGlzLnZhbHVlKSApXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgbGV0IHRpcERpdiA9IGRpc3BsYXkuYWRkKCdkaXYnLCAnVG90YWwnKVxyXG4gICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAnOHB4JyxcclxuICAgICAgICAgICAgZm9udFNpemU6ICcyNHB4JyxcclxuICAgICAgICB9KTtcclxuICAgIHRpcERpdi5hZGQoJ3N0cm9uZycpXHJcbiAgICAgICAgLmNvbnRlbnQoJ1RpcDonKTtcclxuICAgIHRpcERpdi5hZGQoJ3NwYW4nKVxyXG4gICAgICAgIC5hdHRyKCd0eXBlJywgJ251bWJlcicpXHJcbiAgICAgICAgLmFkZENsYXNzKCdtYWluTnVtYmVyJylcclxuICAgICAgICAuY29udGVudCgnMC4wMCcpXHJcbiAgICAgICAgLmJpbmQoJ3RvdGFsJywgZnVuY3Rpb24gKGQpIHtcclxuICAgICAgICAgICAgbGV0IHN1YnRvdGFsID0gY2MuZ2V0VmFsdWUoJ3N1YnRvdGFsJykgfHwgMDtcclxuICAgICAgICAgICAgbGV0IHRvdGFsID0gY2MuZ2V0VmFsdWUoJ3RvdGFsJykgfHwgc3VidG90YWw7XHJcbiAgICAgICAgICAgIGxldCB0aXAgPSAodG90YWwtc3VidG90YWwpLnRvRml4ZWQoMik7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudChgJHt0aXB9ICgkeygrdGlwKjEwMC9zdWJ0b3RhbCkudG9GaXhlZCgyKX0lKWApXHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldHVwVGFibGUobWFpbkNvbnRhaW5lcikge1xyXG4gICAgbGV0IHRhYmxlRGl2ID0gbWFpbkNvbnRhaW5lci5hZGQoJ2RpdicpXHJcbiAgICAgICAgLmFkZENsYXNzKCdhZHZpY2UnKTtcclxuICAgIGxldCB0aXBUYWJsZSA9IHRhYmxlRGl2LmFkZCgndGFibGUnKVxyXG4gICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnXHJcbiAgICAgICAgfSk7XHJcbiAgICBsZXQgdGlwUmFuZ2UgPSBbOCwgMjVdO1xyXG4gICAgbGV0IGhlYWRlciA9IHRpcFRhYmxlLmFkZCgndHInKTtcclxuICAgIGhlYWRlci5hZGQoJ3RoJykuY29udGVudCgnUGVyY2VudGFnZScpLmNzcyh7XHJcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICB3aWR0aDogJzEwMHB4J1xyXG4gICAgfSk7XHJcbiAgICBoZWFkZXIuYWRkKCd0aCcpLmNvbnRlbnQoJ1RpcCcpLmNzcyh7XHJcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICB3aWR0aDogJ2NhbGMoNTAlIC0gNTBweCknXHJcbiAgICB9KTtcclxuICAgIGhlYWRlci5hZGQoJ3RoJykuY29udGVudCgnVG90YWwnKS5jc3Moe1xyXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgd2lkdGg6ICdjYWxjKDUwJSAtIDUwcHgpJ1xyXG4gICAgfSk7XHJcbiAgICBmb3IobGV0IGkgPSB0aXBSYW5nZVswXTsgaTw9dGlwUmFuZ2VbMV07IGkrKyl7XHJcbiAgICAgICAgbGV0IHRpcFJvdyA9ICB0aXBUYWJsZS5hZGQoJ3RyJyk7XHJcbiAgICAgICAgdGlwUm93LmFkZCgndGQnKVxyXG4gICAgICAgICAgICAuY29udGVudChgJHtpfSVgKVxyXG4gICAgICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgdGlwUm93LmFkZCgndGQnKVxyXG4gICAgICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmJpbmQoJ3N1YnRvdGFsJywgZnVuY3Rpb24gKGQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudCgoZCppLzEwMCkudG9GaXhlZCgyKSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgdGlwUm93LmFkZCgndGQnKVxyXG4gICAgICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmJpbmQoJ3N1YnRvdGFsJywgZnVuY3Rpb24gKGQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudCgoZCsoZCppLzEwMCkpLnRvRml4ZWQoMikpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluZGV4KCkge1xyXG4gICAgbGV0IHJvb3QgPSBjYy5zZWxlY3QoJyNib2R5Jyk7XHJcbiAgICBsZXQgbWFpbkNvbnRhaW5lciA9IGNjLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0ZXN0JylcclxuICAgICAgICAuYWRkQ2xhc3MoJ21haW4tY29udGFpbmVyJyk7XHJcbiAgICByb290LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xyXG5cclxuICAgIG1haW5Db250YWluZXIuYWRkKCdoMicpLmNvbnRlbnQoJ1RoYW5rIHlvdScpLmFkZENsYXNzKCdoZWFkZXInKTtcclxuXHJcbiAgICBzZXR1cElucHV0cyhtYWluQ29udGFpbmVyKTtcclxuICAgIHNldHVwVGFibGUobWFpbkNvbnRhaW5lcik7XHJcblxyXG5cclxufVxyXG5cclxuXHJcbnNldHVwU1coKTtcclxuaW5kZXgoKTsiXSwic291cmNlUm9vdCI6IiJ9