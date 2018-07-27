(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VKMusic"] = factory();
	else
		root["VKMusic"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * Configuration
 */

var secure = window.location.protocol === 'https:';

module.exports = {
    name: 'likely',
    prefix: 'likely__',
    secure: secure,
    protocol: secure ? 'https:' : 'http:',
    storageKey: 'likelyServices',
    breakpoint: 680
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var config = __webpack_require__(0);

var div = document.createElement('div'),
    gid = 0;

var dom = module.exports = {
    /**
     * Wrap SVG coords from data object into SVG tag
     *
     * @param {String} coords
     */
    wrapSVG: function (coords) {
        return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" ' + 'viewBox="0 0 16 16"><path d="M' + coords + 'z"/></svg>';
    },

    /**
     * Create node from HTML
     *
     * @param {String} html
     */
    createNode: function (html) {
        div.innerHTML = html;

        return div.children[0];
    },

    /**
     * Load script
     *
     * @param {String} url
     */
    getScript: function (url) {
        var script = document.createElement('script'),
            head   = document.head;

        script.type = 'text/javascript';
        script.src  = url;

        head.appendChild(script);
        head.removeChild(script);
    },

    /**
     * Get JSON
     *
     * @param {String} url
     * @param {Function} callback
     */
    getJSON: function (url, callback) {
        var name = encodeURIComponent('random_fun_' + (++gid));

        url = url.replace(
            /callback=(\?)/,
            'callback=' + name
        );

        window[name] = callback;

        dom.getScript(url);
    },

    /**
     * Find first node by selector
     *
     * @param {String} selector
     * @param {Node} node
     * @return {Node}
     */
    find: function (selector, node) {
        return (node || document).querySelector(selector);
    },

    /**
     * Find all nodes by selector
     *
     * @param {String} selector
     * @param {Node} node
     * @return {NodeList}
     */
    findAll: function (selector, node) {
        return (node || document).querySelectorAll(selector);
    },

    /**
     * Check mobile media query
     */
    isMobile: function() {
        return !window.matchMedia('(min-width: ' + config.breakpoint + 'px)').matches;
    },

    /**
     * Open the popup
     *
     * @param {String} url
     * @param {String} winId
     * @param {Number} width,
     * @param {Number} height
     */
    openPopup: function (url, winId, width, height) {
        var left = Math.round(screen.width / 2 - width / 2),
            top  = 0;

        if (screen.height > height) {
            top = Math.round(screen.height / 3 - height / 2);
        }

        var options = 'left='    + left +
                      ',top='    + top +
                      ',width='  + width +
                      ',height=' + height +
                      ',personalbar=0,toolbar=0,scrollbars=1,resizable=1';

        var win = window.open(url, winId, options);

        // if (!win) {
        //     location.href = url;
        //     return location.href;
        // }

        // win.focus();

        return win;
    }
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var bool = {yes: true, no: false},
    rUrl = /(https?|ftp):\/\/[^\s\/$.?#].[^\s]*/gi;

/**
 * @internal
 */
var utils = {
    /**
     * Simple $.each, only for objects
     *
     * @param {Object} object
     * @param {Function} callback
     */
    each: function (object, callback) {
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                callback(object[key], key);
            }
        }
    },

    /**
     * Convert array-like object to array
     *
     * @param {Object} arrayLike
     * @return {Array}
     */
    toArray: function (arrayLike) {
        return Array.prototype.slice.call(arrayLike);
    },

    /**
     * Merge given dictionaries (objects) into one object
     *
     * @param {Object} ...objects
     * @return {Object}
     */
    merge: function () {
        var result = {};

        for (var i = 0; i < arguments.length; i ++) {
            var arg = arguments[i];

            if (arg) {
                for (var key in arg) {
                    result[key] = arg[key];
                }
            }
        }

        return result;
    },

    /**
     * Extend one (target) object by other (subject)
     *
     * @param {Object} target
     * @param {Object} subject
     */
    extend: function (target, subject) {
        for (var key in subject) {
            target[key] = subject[key];
        }
    },

    /**
     * Check new flexbox syntax support
     */
    flexboxSupport: function(element, name){
        var d = document, f = 'flex', fw = '-webkit-'+f, e = d.createElement('b'), c;

        try {
            e.style.display = fw;
            e.style.display = f;
            c = (e.style.display == f || e.style.display == fw) ? f : 'no-'+f;
        } catch(e) {
            c = 'no-'+f;
        }

        element.className += ' ' + name + '--' + c;
    },

    /**
     * Return node.dataset or plain object for IE 10without setters
     * based on https://gist.github.com/brettz9/4093766#file_html5_dataset.js
     *
     * @param {Node} node
     * @return {Object}
     */
    getDataset: function (node) {
        if (typeof node.dataset === 'object') {
            return node.dataset;
        }

        var i,
            dataset = {},
            attributes = node.attributes,
            attribute,
            attributeName;

        var toUpperCase = function (n0) {
            return n0.charAt(1).toUpperCase();
        };

        for (i = attributes.length - 1; i >= 0; i--) {
            attribute = attributes[i];
            if (attribute && attribute.name &&
                (/^data-\w[\w\-]*$/).test(attribute.name)) {
                    attributeName = attribute.name.substr(5).replace(/-./g, toUpperCase);
                    dataset[attributeName] = attribute.value;
                }
        }

        return dataset;
    },

    /**
     * Convert "yes" and "no" to true and false.
     *
     * @param {Node} node
     */
    bools: function (node) {
        var result = {},
            data   = utils.getDataset(node);

        for (var key in data) {
            var value = data[key];

            result[key] = bool[value] || value;
        }

        return result;
    },

    /**
     * Map object keys in string to its values
     *
     * @param {String} text
     * @param {Object} data
     * @return {String}
     */
    template: function (text, data) {
        return !text ? '' : text.replace(/\{([^\}]+)\}/g, function (value, key) {
            return key in data ? data[key] : value;
        });
    },

    /**
     * Map object keys in URL to its values
     *
     * @param {String} text
     * @param {Object} data
     * @return {String}
     */
    makeUrl: function (text, data) {
        for (var key in data) {
            data[key] = encodeURIComponent(data[key]);
        }

        return utils.template(text, data);
    },

    /**
     * Create query string out of data
     *
     * @param {Object} data
     * @return {String}
     */
    query: function (data) {
        var filter = encodeURIComponent,
            query  = [];

        for (var key in data) {
            if (typeof data[key] === 'object') continue;

            query.push(filter(key) + '=' + filter(data[key]));
        }

        return query.join('&');
    },

    /**
     * Set value in object using dot-notation
     *
     * @param {Object} object
     * @param {String} key
     * @param {Object} value
     */
    set: function (object, key, value) {
        var frags = key.split('.'),
            last  = null;

        frags.forEach(function (key, index) {
            if (typeof object[key] === 'undefined') {
                object[key] = {};
            }

            if (index !== frags.length - 1) {
                object = object[key];
            }

            last = key;
        });

        object[last] = value;
    }
};

module.exports = utils;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendPageView = exports.sendEvent = undefined;

var _config = __webpack_require__(6);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CONSOLE_STYLE = 'color: #E87E04';

/**
 * Send analytics events via GTM
 * @param {String} label - event label
 * @param {String} action - event action ("Click" by default)
 */
var sendEvent = exports.sendEvent = function sendEvent(label) {
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Click';

    var value = _config2.default.analyticsCategory + ' \u2014 ' + label + ' \u2014 ' + action;

    if (true) {
        console.log('Analytics: %c' + value, CONSOLE_STYLE);
    }

    if (window.dataLayer !== undefined && _config2.default.analyticsCategory) {
        window.dataLayer.push({
            event: 'data_event',
            data_description: value
        });
    }
};

/**
 * Send pageview event via GTM
 */
var sendPageView = exports.sendPageView = function sendPageView() {
    if (true) {
        console.log('Analytics: %cPage — View', CONSOLE_STYLE);
    }

    if (window.dataLayer !== undefined) {
        window.dataLayer.push({
            event: 'Page — View',
            post_details: {},
            section: 'special',
            tags: [],
            title: document.title,
            url: window.location.pathname
        });
    }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Social network services
 */

var Service = __webpack_require__(18),
    utils   = __webpack_require__(2),
    svg     = __webpack_require__(19);

var services = {
    odnoklassniki: __webpack_require__(20),
    vkontakte:     __webpack_require__(21),
    facebook:      __webpack_require__(22),
    twitter:       __webpack_require__(23),
    gplus:         __webpack_require__(24),
    pocket:        __webpack_require__(25),
    telegram:      __webpack_require__(26),
    whatsapp:      __webpack_require__(27),
    viber:         __webpack_require__(28),
    email:         __webpack_require__(29),
    more:          __webpack_require__(30)
};

utils.each(services, function (service, key) {
    Service(service);

    service.svgi = svg[key];
    service.name = key;
});

module.exports = services;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Make html element
 * @param {String} tagName
 * @param {Array|String} classNames - array of classnames or string for single classname
 * @param {Object} attributes - object with html attributes
 */
var makeElement = exports.makeElement = function makeElement(tagName) {
    var classNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    tagName = tagName.toLowerCase();

    var element = document.createElement(tagName);

    if (classNames) {
        if ((typeof classNames === 'undefined' ? 'undefined' : _typeof(classNames)) === 'object') {
            classNames.forEach(function (cname) {
                element.classList.add(cname);
            });
        } else if (typeof classNames === 'string') {
            element.classList.add(classNames);
        }
    }

    for (var attr in attributes) {
        if (attr === 'data') {
            var dataAttributes = attributes[attr];

            for (var _attr in dataAttributes) {
                element.dataset[_attr] = dataAttributes[_attr];
            }
        } else {
            element[attr] = attributes[attr];
        }
    }

    return element;
};

/**
 * Cache elements with [data-view] attribute and put them in given object
 * @param {Object} obj - object
 */
var cacheElements = exports.cacheElements = function cacheElements(obj) {
    var attr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'view';

    var newObj = {},
        elements = document.querySelectorAll('[data-' + attr + ']');

    Array.prototype.forEach.call(elements, function (el) {
        var name = el.dataset[attr];
        newObj[name] = el;
    });

    _extends(obj, newObj);
};

/**
 * Get all siblings of specified element, excluding this element
 * @param {Element} element
 */
var getSiblings = exports.getSiblings = function getSiblings(element) {
    var siblings = [],
        sibling = element.parentNode.firstChild;

    for (; sibling; sibling = sibling.nextSibling) {
        if (sibling.nodeType !== 1 || sibling === element) continue;
        siblings.push(sibling);
    }

    return siblings;
};

/**
 * Remove all children from element
 * @param {Element} parent
 */
var removeChildren = exports.removeChildren = function removeChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

/**
 * Remove specified element from its parent
 * @param {Element} element
 */
var removeElement = exports.removeElement = function removeElement(element) {
    if (element) {
        element.parentNode.removeChild(element);
    }
};

/**
 * Transform html string to node
 * @param {String} html
 */
var htmlStringToNode = exports.htmlStringToNode = function htmlStringToNode(html) {
    var el = document.createElement('div');

    el.innerHTML = html;

    return el.firstChild;
};

/**
 * Prepend source element before first child of target element
 * @param {Element} parent
 * @param {Element} el
 */
var prepend = exports.prepend = function prepend(parent, el) {
    parent.insertBefore(el, parent.firstChild);
};

/** Quick check if element is in DOM */
var isElementInDom = exports.isElementInDom = function isElementInDom(el) {
    return el.parentNode;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'VKMusic', // уникальное имя спецпроекта. Оно же — название главного класса. Используется на странице, куда интегрируется спецпроект
    analyticsCategory: '',
    sendPageView: true, // отключаем, если спецпроект не на отдельной странице
    listenedEvents: ['click', 'input'] // слушаем события (click, input, change, etc.). Обычно нужен только click
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var isAvailable = function() {

    try {
        window.localStorage.setItem('isStorageAvailable', 1);
        window.localStorage.removeItem('isStorageAvailable');
        return true;
    } catch (e) {
        return false;
    }

};

var storage = {

    /**
     * Get item from localStorage
     * @param {String} key
     */
    getItem: function(key){

        if (isAvailable()) {

            var item = window.localStorage.getItem(key);

            try {
                JSON.parse(item);
            } catch (e) {
                return item;
            }

            return JSON.parse(item);

        }

    },

    /**
     * Save item in localStorage
     * @param {String} key
     * @param {String} value
     */
    setItem: function(key, value) {

        value = (typeof value === 'string') ? value : JSON.stringify(value);

        if (isAvailable()) {
            window.localStorage.setItem(key, value);
        }

    },

    /**
     * Remove item from localStorage
     * @param {String} key
     */
    removeItem: function(key) {

        if (isAvailable()) {
            window.localStorage.removeItem(key);
        }

    }

};

module.exports = storage;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _special = __webpack_require__(9);

var _special2 = _interopRequireDefault(_special);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports.Special = _special2.default; // Тут используется CommonJS модуль, чтобы можно было использовать название класса как глобальную переменную
/**
 * Entry point
 */

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(10);

var _base = __webpack_require__(11);

var _base2 = _interopRequireDefault(_base);

var _data = __webpack_require__(12);

var _data2 = _interopRequireDefault(_data);

var _svg = __webpack_require__(13);

var _svg2 = _interopRequireDefault(_svg);

var _share = __webpack_require__(14);

var Share = _interopRequireWildcard(_share);

var _analytics = __webpack_require__(3);

var Analytics = _interopRequireWildcard(_analytics);

var _dom = __webpack_require__(5);

var _player = __webpack_require__(33);

var _player2 = _interopRequireDefault(_player);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CSS = {
    main: 'VKMusic'
};

var EL = {};

var Special = function (_BaseSpecial) {
    _inherits(Special, _BaseSpecial);

    function Special() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Special);

        var _this = _possibleConstructorReturn(this, (Special.__proto__ || Object.getPrototypeOf(Special)).call(this));

        _extends(_this.params, params);
        _this.saveParams();

        if (_data2.default && params.data) {
            _extends(_data2.default, params.data);
        }

        _this.loadStyles(_this.params.css).then(function () {
            return _this.init();
        });
        return _this;
    }

    _createClass(Special, [{
        key: 'createElements',
        value: function createElements() {

            EL.logo = (0, _dom.makeElement)('div', CSS.main + '-logo', {
                innerHTML: _svg2.default.vkmusic
            });

            EL.icons = (0, _dom.makeElement)('div', CSS.main + '-icons');
            for (var key in _svg2.default.icons) {
                EL.icons.innerHTML += '<div class="' + (CSS.main + '-icons__item') + '">' + _svg2.default.icons[key] + '</div>';
            }

            EL.slider = (0, _dom.makeElement)('div', CSS.main + '-slider');
            EL.sliderLine = (0, _dom.makeElement)('div', CSS.main + '-slider__line');
            EL.slider.appendChild(EL.sliderLine);

            EL.art = (0, _dom.makeElement)('div', CSS.main + '-art');

            EL.dots = (0, _dom.makeElement)('div', CSS.main + '-dots');
            EL.dotsTitle = (0, _dom.makeElement)('div', CSS.main + '-dots__title', {
                textContent: 'сэмплы'
            });
            EL.dotsList = (0, _dom.makeElement)('div', CSS.main + '-dots__list');
            EL.dots.appendChild(EL.dotsTitle);
            EL.dots.appendChild(EL.dotsList);

            // question
            EL.question = (0, _dom.makeElement)('div', CSS.main + '-question');
            EL.qText = (0, _dom.makeElement)('div', CSS.main + '-question__text');
            EL.qTextDiv = (0, _dom.makeElement)('div');
            EL.qAudio = (0, _dom.makeElement)('div', CSS.main + '-question__audio');
            EL.qOptions = (0, _dom.makeElement)('div', CSS.main + '-question__options');
            EL.qUserAnswer = (0, _dom.makeElement)('div', CSS.main + '-question__user-answer');
            EL.qAnswer = (0, _dom.makeElement)('div', CSS.main + '-question__answer');
            EL.qNextBtn = (0, _dom.makeElement)('div', CSS.main + '-question__next-btn', {
                innerHTML: '<span>Продолжить</span>' + _svg2.default.arrowNext,
                data: {
                    click: 'continue'
                }
            });
            EL.qResultBtn = (0, _dom.makeElement)('div', CSS.main + '-question__next-btn', {
                textContent: 'Результат',
                data: {
                    click: 'showResult'
                }
            });

            EL.qText.appendChild(EL.qTextDiv);
            EL.question.appendChild(EL.qText);
            EL.question.appendChild(EL.qAudio);
            // question end

            this.container.appendChild(EL.logo);
            this.container.appendChild(EL.icons);
            this.container.appendChild(EL.slider);
            this.container.appendChild(EL.art);
        }
    }, {
        key: 'createEnter',
        value: function createEnter() {
            EL.enter = (0, _dom.makeElement)('div', CSS.main + '-enter');
            EL.title = (0, _dom.makeElement)('div', CSS.main + '-enter__title', {
                textContent: _data2.default.title
            });
            EL.subtitle = (0, _dom.makeElement)('div', CSS.main + '-enter__subtitle', {
                textContent: _data2.default.subtitle
            });
            EL.desc = (0, _dom.makeElement)('div', CSS.main + '-enter__desc', {
                innerHTML: _data2.default.description
            });
            EL.startBtn = (0, _dom.makeElement)('button', CSS.main + '-enter__start-btn', {
                type: 'button',
                innerHTML: '<span>Начать</span>' + _svg2.default.arrowStart,
                data: {
                    click: 'start'
                }
            });

            EL.enter.appendChild(EL.title);
            EL.enter.appendChild(EL.subtitle);
            EL.enter.appendChild(EL.desc);
            EL.enter.appendChild(EL.startBtn);

            this.container.appendChild(EL.enter);
        }
    }, {
        key: 'createResult',
        value: function createResult() {
            EL.result = (0, _dom.makeElement)('div', CSS.main + '-result');
            EL.rImg = (0, _dom.makeElement)('img', CSS.main + '-result__img');
            EL.rHead = (0, _dom.makeElement)('div', CSS.main + '-result__head');
            EL.rResult = (0, _dom.makeElement)('div', CSS.main + '-result__result');
            EL.rTitle = (0, _dom.makeElement)('div', CSS.main + '-result__title');
            EL.rSubtitle = (0, _dom.makeElement)('div', CSS.main + '-result__subtitle');
            EL.rShare = (0, _dom.makeElement)('div', CSS.main + '-result__share');
            EL.rRestartBtn = (0, _dom.makeElement)('div', CSS.main + '-result__restart-btn', {
                innerHTML: '<span>Пройти еще раз</span>' + _svg2.default.refresh,
                data: {
                    click: 'restart'
                }
            });

            EL.rBottom = (0, _dom.makeElement)('div', CSS.main + '-result__bottom');
            EL.subscribeVK = (0, _dom.makeElement)('div', CSS.main + '-subscribe', {
                innerHTML: '<div class="VKMusic-subscribe"><div class="VKMusic-subscribe__title"><span>Подписка на Boom и<br>музыку «ВКонтакте»</span>' + _svg2.default.note + '</div></div><button class="VKMusic-subscribe__btn VKMusic-subscribe__btn--vk">Получить</button>'
            });

            EL.rHead.appendChild(EL.rImg);
            EL.rHead.appendChild(EL.rResult);
            EL.rHead.appendChild(EL.rTitle);
            EL.rHead.appendChild(EL.rSubtitle);
            EL.rHead.appendChild(EL.rShare);
            EL.rHead.appendChild(EL.rRestartBtn);

            EL.rBottom.appendChild(EL.subscribeVK);

            EL.result.appendChild(EL.rHead);
            EL.result.appendChild(EL.rBottom);

            Share.make(EL.rShare);
        }
    }, {
        key: 'drawArt',
        value: function drawArt(data) {
            EL.art.innerHTML = '';
            data.forEach(function (row) {
                var line = (0, _dom.makeElement)('div', CSS.main + '-art__line', {
                    data: {
                        x: row.x,
                        y: row.y,
                        size: row.size,
                        color: row.color
                    }
                });

                if (row.odd) {
                    line.dataset.odd = true;
                    [].concat(_toConsumableArray(Array(parseInt(row.size)))).forEach(function (col, i) {
                        if (!(i % 2)) {
                            var ceil = (0, _dom.makeElement)('div', CSS.main + '-art__line-ceil', {
                                data: {
                                    x: i
                                }
                            });
                            line.appendChild(ceil);
                        }
                    });
                }

                EL.art.appendChild(line);
            });
        }
    }, {
        key: 'createDots',
        value: function createDots() {
            (0, _dom.removeChildren)(EL.dotsList);
            EL.dotsTitle.textContent = this.questions.title;

            for (var i = 0; i < this.questions.list.length; i++) {
                var dot = (0, _dom.makeElement)('div', CSS.main + '-dots__item');
                EL.dotsList.appendChild(dot);
            }
        }
    }, {
        key: 'fillDot',
        value: function fillDot() {
            EL.dotsList.children[this.activeIndex].classList.add('is-filled');
            EL.dotsList.children[this.activeIndex].classList.add('is-active');

            if (EL.dotsList.children[this.activeIndex - 1]) {
                EL.dotsList.children[this.activeIndex - 1].classList.remove('is-active');
            }
        }
    }, {
        key: 'setSliderPosition',
        value: function setSliderPosition(progress) {
            EL.sliderLine.style.left = progress + '%';
        }
    }, {
        key: 'start',
        value: function start() {
            this.container.removeChild(EL.enter);
            this.container.appendChild(EL.dots);
            this.container.appendChild(EL.question);

            EL.art.classList.add(CSS.main + '-art--question');

            this.createDots();
            this.makeNextQuestion();
        }
    }, {
        key: 'restart',
        value: function restart() {
            this.setInitialParams();

            this.container.classList.remove(CSS.main + '--result');
            this.container.removeChild(EL.result);

            this.container.appendChild(EL.logo);
            this.container.appendChild(EL.icons);
            this.container.appendChild(EL.slider);
            this.container.appendChild(EL.art);

            this.container.appendChild(EL.dots);
            this.container.appendChild(EL.question);

            this.createDots();
            this.continue();
        }
    }, {
        key: 'continue',
        value: function _continue() {
            document.body.classList.remove('is-blurred');
            EL.qText.classList.remove(CSS.main + '-question__text--a');

            EL.question.removeChild(EL.qUserAnswer);
            EL.question.removeChild(EL.qAnswer);

            EL.question.contains(EL.qNextBtn) ? EL.question.removeChild(EL.qNextBtn) : EL.question.contains(EL.qResultBtn) ? EL.question.removeChild(EL.qResultBtn) : '';

            this.makeNextQuestion();
        }
    }, {
        key: 'makeNextQuestion',
        value: function makeNextQuestion() {
            var question = this.questions.list[this.activeIndex];

            this.setSliderPosition(0);
            this.drawArt(question.art);
            this.fillDot();

            EL.qTextDiv.textContent = question.text;
            EL.question.appendChild(EL.qOptions);

            this.makeOptions(question.options);
            this.player.setTrack(question.track);
        }
    }, {
        key: 'makeOptions',
        value: function makeOptions(options) {
            (0, _dom.removeChildren)(EL.qOptions);

            options.forEach(function (item, i) {
                var optionWrap = (0, _dom.makeElement)('div', CSS.main + '-question__options-item');
                var option = (0, _dom.makeElement)('button', CSS.main + '-question__option', {
                    textContent: item.text,
                    data: {
                        id: i,
                        click: 'makeAnswer'
                    }
                });
                optionWrap.appendChild(option);

                EL.qOptions.appendChild(optionWrap);
            });
        }
    }, {
        key: 'makeAnswer',
        value: function makeAnswer(el) {
            var id = el.dataset.id,
                question = this.questions.list[this.activeIndex];

            EL.question.removeChild(EL.qOptions);
            document.body.classList.add('is-blurred');
            EL.qText.classList.add(CSS.main + '-question__text--a');
            EL.qUserAnswer.textContent = question.options[id].text;
            EL.question.appendChild(EL.qUserAnswer);
            EL.qAnswer.textContent = question.options[id].msg;
            EL.question.appendChild(EL.qAnswer);

            if (question.options[id].isCorrect) {
                EL.qUserAnswer.classList.add(CSS.main + '-question__user-answer--correct');
                this.correctAnswers++;
            } else {
                EL.qUserAnswer.classList.remove(CSS.main + '-question__user-answer--correct');
            }

            if (this.activeIndex < this.questions.list.length - 1) {
                this.activeIndex++;
                EL.question.appendChild(EL.qNextBtn);
            } else if (this.activeGroupIndex < _data2.default.questions.length - 1) {
                this.activeGroupIndex++;
                this.activeIndex = 0;
                this.questions = _data2.default.questions[this.activeGroupIndex];
                this.createDots();
                EL.question.appendChild(EL.qNextBtn);
            } else {
                EL.question.appendChild(EL.qResultBtn);
            }
        }
    }, {
        key: 'showResult',
        value: function showResult() {
            var _this2 = this;

            var count = _data2.default.questions.reduce(function (oldValue, item) {
                return oldValue + item.list.length;
            }, 0);

            document.body.classList.remove('is-blurred');
            (0, _dom.removeChildren)(this.container);
            this.container.classList.add(CSS.main + '--result');
            this.container.appendChild(EL.result);
            EL.rResult.textContent = this.correctAnswers + ' из ' + count + ' правильных ответов';;

            _data2.default.results.some(function (item, index) {
                if (item.range[0] <= _this2.correctAnswers && item.range[1] >= _this2.correctAnswers) {
                    EL.rTitle.textContent = item.title;
                    EL.rSubtitle.textContent = item.subtitle;
                    EL.rImg.src = item.img;
                    EL.rImg.className = '';
                    EL.rImg.classList.add(CSS.main + '-result__img');
                    EL.rImg.classList.add(CSS.main + '-result__img--' + (index + 1));

                    return true;
                }
            });

            Share.init();
        }
    }, {
        key: 'setInitialParams',
        value: function setInitialParams() {
            this.activeGroupIndex = 0;
            this.activeIndex = 0;
            this.correctAnswers = 0;
            this.questions = _data2.default.questions[this.activeGroupIndex];
        }
    }, {
        key: 'init',
        value: function init() {
            this.createElements();
            this.createEnter();
            this.createResult();
            this.drawArt(_data2.default.art);

            this.player = new _player2.default(EL.qAudio, {
                on: {
                    progress: this.setSliderPosition
                }
            });

            this.setInitialParams();
        }
    }]);

    return Special;
}(_base2.default);

exports.default = Special;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(6);

var _config2 = _interopRequireDefault(_config);

var _analytics = __webpack_require__(3);

var Analytics = _interopRequireWildcard(_analytics);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Base special constructor with common methods
 */
var BaseSpecial = function () {
    function BaseSpecial() {
        _classCallCheck(this, BaseSpecial);

        this.keyCodes = {
            enter: 13
        };
        this.params = {
            container: document.body
        };

        if (_config2.default.sendPageView) {
            Analytics.sendPageView();
        }
    }

    /**
     * Save custom params
     * @param {Object} params - params object with custom values
     */


    _createClass(BaseSpecial, [{
        key: 'saveParams',
        value: function saveParams() {
            _extends(this.params, _config2.default);
            this.container = this.params.container;

            this.addEventListeners();
        }

        /**
         * Load css file
         * @param {String} path
         */

    }, {
        key: 'loadStyles',
        value: function loadStyles(path) {
            return new Promise(function (resolve, reject) {
                var link = document.createElement('link');

                link.rel = 'stylesheet';
                link.href = path;

                link.onload = function () {
                    return resolve();
                };
                link.onerror = function () {
                    return reject();
                };

                document.body.appendChild(link);
            });
        }

        /**
         * Add event listeners to document
         */

    }, {
        key: 'addEventListeners',
        value: function addEventListeners() {
            var _this = this;

            this.params.listenedEvents.forEach(function (eventName) {
                _this.container.addEventListener(eventName, function (event) {
                    return _this.defaultEventHandler(event, eventName);
                });
            });
        }

        /**
         * Default events handler
         * @param {Object} event
         * @param {String} eventName
         */

    }, {
        key: 'defaultEventHandler',
        value: function defaultEventHandler(event, eventName) {
            var target = event.target;
            var action = void 0;

            while (target.parentNode && target !== event.currentTarget) {
                action = target.dataset[eventName];

                /** Send all links clicks to analytics */
                if (eventName === 'click' && target.tagName.toLowerCase() === 'a') {
                    Analytics.sendEvent(target.href);
                }

                if (action) break;
                target = target.parentNode;
            }

            action = target.dataset[eventName];

            if (action && this[action]) {
                this[action](event.target, event);
            }
        }
    }]);

    return BaseSpecial;
}();

exports.default = BaseSpecial;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    title: "Угадай мелодию",
    subtitle: "Проверьте, насколько хорошо вы знаете треки и семплы.",
    description: "<p>Во «ВКонтакте» регулярно появляются молодые инди&#8209;музыканты, которые затем вырастают до звёзд, о которых говорят чуть ли не все.</p><p>Вместе с некоторыми из них мы сделали подборку семплов и треков, а ваша задача — их угадать.<br>Если справитесь с большей частью вопросов, получите <b>подписку на Boom или TJournal</b>.</p>",
    art: [{
        x: 12,
        y: 5,
        size: 4,
        color: "green"
    }, {
        x: 9,
        y: 7,
        size: 8,
        color: "red"
    }, {
        x: 5,
        y: 9,
        size: 12,
        color: "blue"
    }],
    questions: [{
        title: "сэмплы",
        list: [{
            text: "Какой трек начинается с этого семпла?",
            track: "audio/1.mp3",
            art: [{
                x: 0,
                y: 0,
                size: 14,
                color: "blue"
            }, {
                x: 0,
                y: 1,
                size: 14,
                color: "green"
            }, {
                x: 0,
                y: 2,
                size: 14,
                color: "purple"
            }, {
                x: 0,
                y: 3,
                size: 14,
                color: "red"
            }, {
                x: 0,
                y: 7,
                size: 14,
                color: "blue"
            }],
            options: [{
                text: "Smack My Bitch Up",
                msg: "Да, это трек Prodigy, которые, кстати, первыми из музыкантов получили галочку верификации «ВКонтакте».",
                isCorrect: true
            }, {
                text: "Reptilia",
                msg: "Нет, это трек Prodigy, которые, кстати, первыми  из музыкантов получили галочку верификации «ВКонтакте»."
            }, {
                text: "Behind Blue Eyes",
                msg: "Нет, это трек Prodigy, которые, кстати, первыми  из музыкантов получили галочку верификации «ВКонтакте»."
            }, {
                text: "«Ага, ну»",
                msg: "Нет, это трек Prodigy, которые, кстати, первыми  из музыкантов получили галочку верификации «ВКонтакте»."
            }]
        }, {
            text: "Этот семпл в своей песне использовал известный инди-исполнитель.",
            track: "https://freemusicarchive.org/file/music/WFMU/John_Wesley_Coleman/Live_at_WFMUs_Cherry_Blossom_Clinic_1092010/John_Wesley_Coleman_-_07_-_Tequila_10_Seconds.mp3",
            art: [{
                x: 0,
                y: 0,
                size: 14,
                color: "blue"
            }],
            options: [{
                text: "Feduk",
                msg: "Нет, это известнейший трек Gotye."
            }, {
                text: "Gotye",
                msg: "Да, это известнейший трек Gotye.",
                isCorrect: true
            }, {
                text: "Lil Pump",
                msg: "Нет, это известнейший трек Gotye."
            }, {
                text: "grandson",
                msg: "Нет, это известнейший трек Gotye."
            }]
        }, {
            text: "Этого исполнителя вы точно знаете, а вот трек, в котором он использовал этот семпл, можете и не вспомнить.",
            track: "https://freemusicarchive.org/file/music/WFMU/Eric_Carlson/Free_Matter_for_the_Blind_Volume_6_Mysterious_Worldz_Dark_Side/Eric_Carlson_-_Tunnel_Birds.mp3",
            art: [{
                x: 1,
                y: 3,
                size: 13,
                color: "red",
                odd: true
            }, {
                x: 0,
                y: 5,
                size: 14,
                color: "blue"
            }],
            options: [{
                text: "Face",
                msg: "Нет, это «Признаки жизни» Оксимирона."
            }, {
                text: "Элджей",
                msg: "Нет, это «Признаки жизни» Оксимирона."
            }, {
                text: "Oxxxymiron",
                msg: "Да, это «Признаки жизни».",
                isCorrect: true
            }, {
                text: "Баста",
                msg: "Нет, это «Признаки жизни» Оксимирона."
            }]
        }, {
            text: "Угадаете, какой поп-певец использовал эти турецкие мотивы в своей песне?",
            track: "https://freemusicarchive.org/file/music/True_Chip_Till_Death/Norrin_Radd/Anomaly/Norrin_Radd_-_09_-_Quantum_Uncertainty.mp3",
            art: [{
                x: 0,
                y: 2,
                size: 14,
                color: "purple"
            }, {
                x: 0,
                y: 3,
                size: 14,
                color: "red"
            }, {
                x: 1,
                y: 6,
                size: 13,
                color: "blue"
            }, {
                x: 0,
                y: 8,
                size: 13,
                color: "green",
                odd: true
            }],
            options: [{
                text: "Валерий Леонтьев",
                msg: "Нет, это песня «Вот мы какие», которую Киркоров выпустил в 1998 году. Но теперь-то вы знаете другой его трек."
            }, {
                text: "Филипп Киркоров",
                msg: "Да, это песня «Вот мы какие», которую Киркоров выпустил в 1998 году. Но теперь-то вы знаете другой его трек.",
                isCorrect: true
            }, {
                text: "Леонид Агутин",
                msg: "Нет, это песня «Вот мы какие», которую Киркоров выпустил в 1998 году. Но теперь-то вы знаете другой его трек."
            }, {
                text: "Валерий Меладзе",
                msg: "Нет, это песня «Вот мы какие», которую Киркоров выпустил в 1998 году. Но теперь-то вы знаете другой его трек."
            }]
        }]
    }, {
        title: "треки",
        list: [{
            text: "Кто исполнил оригинал этой песни? Подсказка: не Фред Дёрст из Limp Bizkit",
            track: "https://freemusicarchive.org/file/music/dublab/Fulgeance/INTO_INFINITY_an_exploration_of_on_and_on_and_on_and_on/Fulgeance_-_Into_Infinity_ear_loop.mp3",
            art: [{
                x: 0,
                y: 0,
                size: 14,
                color: "blue"
            }, {
                x: 0,
                y: 3,
                size: 14,
                color: "red"
            }],
            options: [{
                text: "Фред Дёрст",
                msg: "Вы серьёзно?"
            }, {
                text: "The Cure",
                msg: "Нет, это одна из самых известных песен The Who."
            }, {
                text: "The Who",
                msg: "Да, это одна из самых известных песен The Who, а Фред Дёрст сделал на неё не менее известный кавер.",
                isCorrect: true
            }, {
                text: "Билли Холидей",
                msg: "Нет, это одна из самых известных песен The Who."
            }]
        }, {
            text: "Die Antwoord или Little Big?",
            track: "https://freemusicarchive.org/file/music/Faux_Fetus_Collective/The_Riffingtons/Three_Inches_of_PAIN/The_Riffingtons_-_01_-_The_Mystery_Behind_the_Meat_Cloak.mp3",
            art: [{
                x: 0,
                y: 1,
                size: 14,
                color: "blue"
            }, {
                x: 1,
                y: 2,
                size: 13,
                color: "purple"
            }, {
                x: 0,
                y: 3,
                size: 13,
                color: "red"
            }, {
                x: 0,
                y: 8,
                size: 13,
                color: "green"
            }],
            options: [{
                text: "Die Antwoord",
                msg: "Угадать действительно сложно."
            }, {
                text: "Little Big",
                msg: "Вас не проведёшь!",
                isCorrect: true
            }]
        }, {
            text: "Ностальгический трек, вспомните исполнителя?",
            track: "https://freemusicarchive.org/file/music/Third_Coast_International_Audio_Festival/The_Books/ShortDocs_2010_sonic_doodads/The_Books_-_clarinet_clock_loop.mp3",
            art: [{
                x: 7,
                y: 0,
                size: 7,
                color: "blue"
            }, {
                x: 0,
                y: 1,
                size: 14,
                color: "green"
            }, {
                x: 0,
                y: 3,
                size: 14,
                color: "red"
            }],
            options: [{
                text: "Валентин Стрыкало",
                msg: "Ха-ха, нет. Этим треком «Звери» закрывали VK Fest 2015."
            }, {
                text: "«Звери»",
                msg: "Да, они! Этим треком «Звери» закрывали VK Fest 2015.",
                isCorrect: true
            }, {
                text: "«Мумий Тролль»",
                msg: "Ха-ха, нет. Этим треком «Звери» закрывали VK Fest 2015."
            }, {
                text: "Руки Вверх!",
                msg: "Ха-ха, нет. Этим треком «Звери» закрывали VK Fest 2015."
            }]
        }, {
            text: "Если не разбираетесь в трэпе, то будет очень сложно.",
            track: "https://freemusicarchive.org/file/music/WFMU/Ergo_Phizmiz/Outtakes_from_The_Snow_Flea/Ergo_Phizmiz_-_03_-_Wayne_The_Seagull.mp3",
            art: [{
                x: 8,
                y: 3,
                size: 7,
                color: "red"
            }, {
                x: 0,
                y: 5,
                size: 15,
                color: "purple"
            }, {
                x: 0,
                y: 6,
                size: 15,
                color: "blue"
            }, {
                x: 8,
                y: 8,
                size: 7,
                color: "green"
            }],
            options: [{
                text: "Face",
                msg: "Ну, эщкере, что уж тут.",
                isCorrect: true
            }, {
                text: "Lil Yachty",
                msg: "Нет, это был Face!"
            }, {
                text: "Mnogoznaal",
                msg: "Нет, это был Face!"
            }, {
                text: "Элджей",
                msg: "Нет, это был Face!"
            }]
        }, {
            text: "Это Armin Van Buren, но какой микс?",
            track: "https://freemusicarchive.org/file/music/no_curator/Cindy_Sizer/Cindy_Sizer/Cindy_Sizer_-_09_-_Mario_Paint_Interlude.mp3",
            art: [{
                x: 0,
                y: 0,
                size: 14,
                color: "blue"
            }, {
                x: 0,
                y: 1,
                size: 14,
                color: "green"
            }, {
                x: 0,
                y: 2,
                size: 14,
                color: "purple"
            }, {
                x: 0,
                y: 3,
                size: 14,
                color: "red"
            }, {
                x: 0,
                y: 4,
                size: 14,
                color: "blue"
            }, {
                x: 0,
                y: 5,
                size: 14,
                color: "purple"
            }, {
                x: 0,
                y: 6,
                size: 14,
                color: "red"
            }, {
                x: 0,
                y: 7,
                size: 14,
                color: "blue"
            }, {
                x: 0,
                y: 8,
                size: 14,
                color: "green"
            }, {
                x: 0,
                y: 9,
                size: 14,
                color: "purple"
            }],
            options: [{
                text: "A State Of Trance 257",
                msg: "Это 858, но мы всё понимаем."
            }, {
                text: "A State Of Trance 821",
                msg: "Это 858, но мы всё понимаем."
            }, {
                text: "A State Of Trance 858",
                msg: "Невероятно.",
                isCorrect: true
            }, {
                text: "A State Of Trance 921",
                msg: "Это 858, но мы всё понимаем."
            }]
        }, {
            text: "Этот трек играет в обратном направлении. Иначе вы бы сразу его отгадали.",
            track: "https://freemusicarchive.org/file/music/WFMU/junior85/Remixes_ish/junior85_-_07_-_Function.mp3",
            art: [{
                x: 4,
                y: 2,
                size: 10,
                color: "blue"
            }, {
                x: 0,
                y: 3,
                size: 14,
                color: "red"
            }, {
                x: 0,
                y: 4,
                size: 14,
                color: "purple"
            }, {
                x: 0,
                y: 8,
                size: 14,
                color: "green"
            }, {
                x: 2,
                y: 9,
                size: 12,
                color: "blue"
            }],
            options: [{
                text: "«Я роняю Запад»",
                msg: "Нет, это «Розовое вино» — самый популярный трек во «ВКонтакте» за 2017 год. Его прослушали более 200 млн раз."
            }, {
                text: "«Монетка»",
                msg: "Нет, это «Розовое вино» — самый популярный трек во «ВКонтакте» за 2017 год. Его прослушали более 200 млн раз."
            }, {
                text: "«Розовое вино»",
                msg: "Да, это самый популярный трек во «ВКонтакте» за 2017 год. Его прослушали более 200 млн раз.",
                isCorrect: true
            }, {
                text: "«Оптимист»",
                msg: "Нет, это «Розовое вино» — самый популярный трек во «ВКонтакте» за 2017 год. Его прослушали более 200 млн раз."
            }]
        }]
    }],
    results: [{
        range: [0, 2],
        title: "Пропускаю, пропускаю!",
        subtitle: "На шоу Валдиса Пельша вам лучше не ходить",
        img: "img/results/1.png"
    }, {
        range: [3, 5],
        title: "Ага, ну",
        subtitle: "Вы больше по классике",
        img: "img/results/2.png"
    }, {
        range: [6, 8],
        title: "Реп — мой хлеб",
        subtitle: "Вы знаете всех Lil’ов",
        img: "img/results/3.png"
    }, {
        range: [9, 10],
        title: "Меломан",
        subtitle: "Знаете всю музыку — от йодля до трип-хопа",
        img: "img/results/4.png"
    }]
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Все svg-иконки рекомендуется хранить здесь,
 * предварительно прогнав их через https://jakearchibald.github.io/svgomg/
 */
exports.default = {
  vkmusic: '<svg width="105" height="28"><path d="M51.81 7.4A5.75 5.75 0 0 0 48 9.13a4.4 4.4 0 0 0-3.89-1.73A4.66 4.66 0 0 0 41 8.83l-.64-1.28h-2.42v13.17h3.31v-7.6a2.33 2.33 0 0 1 2.17-2.57 2.31 2.31 0 0 1 2.17 2.57v7.6h3.31v-7.6a2.2 2.2 0 1 1 4.34 0v7.6h3.31v-7.89c0-3.55-1.88-5.43-4.74-5.43zM68.19 14.85a2.72 2.72 0 1 1-5.43 0v-7.3h-3.3v7.75c0 3.4 2.12 5.58 5.33 5.58a6.09 6.09 0 0 0 3.7-1.43l.59 1.28h2.42V7.55h-3.31v7.3zM77.47 11.45A1.4 1.4 0 0 1 79 10.16a1.9 1.9 0 0 1 1.88 1.28h3.16c-.25-2.27-2-4-5.13-4-2.86 0-4.74 1.83-4.74 4 0 4.59 6.71 3.4 6.71 5.28A1.67 1.67 0 0 1 79 18.16a1.92 1.92 0 0 1-2-1.58h-3.13c.3 2.57 2 4.29 5.43 4.29 3 0 4.88-1.83 4.88-4 0-4.68-6.71-3.55-6.71-5.42zM86.64 7.55h3.31v13.17h-3.31zM88.37 2.07a1.91 1.91 0 0 0-1.87 1.88 1.88 1.88 0 1 0 3.75 0 1.91 1.91 0 0 0-1.88-1.88zM98.83 17.81a3.33 3.33 0 0 1-3.31-3.6 3.33 3.33 0 0 1 3.31-3.6 3.06 3.06 0 0 1 2.86 1.88H105a6.47 6.47 0 0 0-6.17-5 6.71 6.71 0 0 0 0 13.42 6.52 6.52 0 0 0 6.17-4.97h-3.28a3.06 3.06 0 0 1-2.89 1.87zM105 15.94v-.1.1zM18.26 0H9.72C1.88 0 0 1.87 0 9.67v8.59C0 26.1 1.83 28 9.67 28h8.59C26.1 28 28 26.15 28 18.31V9.72C28 1.87 26.05 0 18.26 0zm4.24 20.13h-2c-.74 0-1-.64-2.37-2-1.18-1.18-1.73-1.33-2-1.33s-.54.1-.54.69v1.83c0 .49-.2.79-1.48.79a7.94 7.94 0 0 1-6.22-3.75c-2.52-3.55-3.21-6.22-3.21-6.76a.55.55 0 0 1 .65-.6h2a.9.9 0 0 1 .94.79c1 2.91 2.66 5.43 3.36 5.43.3 0 .39-.15.39-.79v-3c0-1.38-.79-1.48-.79-2a.51.51 0 0 1 .54-.49H15c.44 0 .59.2.59.74v4c0 .44.15.59.3.59a1.5 1.5 0 0 0 .94-.64 17.49 17.49 0 0 0 2.52-4.19.89.89 0 0 1 .89-.59h2c.64 0 .79.3.64.74-.25 1.18-2.71 4.69-2.81 4.88a.62.62 0 0 0 0 .89c.2.3.89.94 1.38 1.48a8.56 8.56 0 0 1 1.73 2.37c.21.63-.09.92-.68.92z"/></svg>',
  arrowStart: '<svg width="11" height="13"><path d="M9.617 5.579L1.632.129C1.396-.025 1.103.001.882.001-.004.002 0 .742 0 .93v11.14c0 .159-.004.928.882.928.221 0 .514.026.75-.127l7.985-5.45c.656-.422.543-.921.543-.921s.113-.499-.543-.921z"/></svg>',
  arrowNext: '<svg width="14" height="25"><path d="M2.55 23.767l11.21-11.21a.76.76 0 0 0 .24-.553.76.76 0 0 0-.24-.554L2.55.24A.76.76 0 0 0 1.996 0a.76.76 0 0 0-.553.24L.241 1.444a.76.76 0 0 0-.24.553c0 .209.08.393.24.554l9.453 9.454L.24 21.458a.76.76 0 0 0-.24.553c0 .209.08.393.24.553l1.203 1.203a.76.76 0 0 0 1.107 0z"/></svg>',
  refresh: '<svg width="15" height="15"><path d="M14.62.674c-.268-.11-.495-.065-.684.136l-1.27 1.26A7.58 7.58 0 0 0 10.278.542 7.357 7.357 0 0 0 7.5 0a7.298 7.298 0 0 0-2.91.596 7.565 7.565 0 0 0-2.393 1.601A7.567 7.567 0 0 0 .596 4.59 7.298 7.298 0 0 0 0 7.5c0 1.015.199 1.986.596 2.91a7.567 7.567 0 0 0 1.601 2.393 7.57 7.57 0 0 0 2.393 1.601A7.298 7.298 0 0 0 7.5 15c1.12 0 2.185-.236 3.194-.708a7.333 7.333 0 0 0 2.578-1.997.32.32 0 0 0 .073-.22.27.27 0 0 0-.093-.2l-1.338-1.348a.376.376 0 0 0-.244-.087c-.104.013-.179.052-.224.117a4.904 4.904 0 0 1-1.748 1.436A4.925 4.925 0 0 1 7.5 12.5a4.87 4.87 0 0 1-1.938-.395 5.034 5.034 0 0 1-1.597-1.07A5.038 5.038 0 0 1 2.896 9.44 4.87 4.87 0 0 1 2.5 7.5c0-.677.132-1.323.396-1.938a5.036 5.036 0 0 1 1.07-1.597c.449-.45.98-.806 1.596-1.07A4.87 4.87 0 0 1 7.5 2.5c1.309 0 2.445.446 3.409 1.338L9.56 5.186c-.202.195-.248.42-.137.674.11.26.303.39.576.39h4.375a.6.6 0 0 0 .44-.185.6.6 0 0 0 .185-.44V1.25a.584.584 0 0 0-.38-.576z"/></svg>',
  note: '<svg width="21" height="30"><path d="M19.098 19.079c.932-1.56 1.55-3.533 1.67-5.486.077-1.253-.202-2.569-.807-3.806-.949-1.943-2.578-3.034-4.152-4.09-1.175-.786-2.285-1.53-3.07-2.59l-.14-.19c-.464-.623-.988-1.33-1.071-1.923a1.167 1.167 0 0 0-1.223-.992 1.15 1.15 0 0 0-1.073 1.15v20.563a6.675 6.675 0 0 0-3.462-.947c-3.18 0-5.77 2.07-5.77 4.616S2.59 30 5.77 30c3.18 0 5.77-2.07 5.77-4.616v-13.45c1.733.662 4.57 2.35 5.35 6.289-.146.214-.285.445-.446.63a1.15 1.15 0 0 0 .104 1.627 1.15 1.15 0 0 0 1.627-.104c.309-.35.584-.762.847-1.19a.722.722 0 0 0 .076-.107z"/></svg>',
  icons: {
    'guitar': '<svg width="40" height="40"><path d="M7.42 26.47a.77.77 0 0 0-1.09 0 .77.77 0 0 0 0 1.09l6.11 6.11a.77.77 0 0 0 1.09 0 .77.77 0 0 0 0-1.09z"/><path d="M39.94 4.6a3.81 3.81 0 0 0-1.14-3.4A3.81 3.81 0 0 0 35.4.06a.65.65 0 0 0-.31.17l-.25.25-.15-.15a.65.65 0 0 0-.91.91l.15.15-.69.69-.15-.15a.65.65 0 0 0-.91.91l.15.16-.69.69-.14-.17a.65.65 0 1 0-.91.91l.28.28-1 1.93L23 13.33c-1.42-1.1-4.23-2.69-7.16-1.12a5.84 5.84 0 0 0-2.93 3.54 4.82 4.82 0 0 1-1.67 2.47 6.48 6.48 0 0 1-2.29.7c-2.45.49-5.81 1.16-8 5.24C-1.75 29 2.15 33.73 4 35.54l.47.46c1.37 1.37 4.42 4 7.95 4a7.11 7.11 0 0 0 3.43-.89c4.08-2.21 4.75-5.57 5.24-8a6.48 6.48 0 0 1 .7-2.29 4.82 4.82 0 0 1 2.47-1.67 5.84 5.84 0 0 0 3.54-2.93c1.57-2.93 0-5.74-1.12-7.16l6.69-6.95 1.93-1 .28.28a.65.65 0 0 0 .91-.91l-.15-.15.66-.67.15.15a.65.65 0 0 0 .91-.91l-.15-.15.69-.69.15.15a.65.65 0 0 0 .91-.91l-.15-.15.25-.25a.65.65 0 0 0 .18-.3zm-13.29 19a4.58 4.58 0 0 1-2.87 2.34 6.09 6.09 0 0 0-3 2.1 7.11 7.11 0 0 0-.93 2.8c-.46 2.32-1 5.22-4.59 7.13-4.14 2.23-8.26-1.24-9.88-2.83l-.51-.51C3.27 33-.2 28.87 2 24.77c1.92-3.55 4.81-4.12 7.14-4.59a7.12 7.12 0 0 0 2.8-.93 6.1 6.1 0 0 0 2.1-3 4.58 4.58 0 0 1 2.34-2.87c2.19-1.17 4.39 0 5.61.89l-4.18 4h-.17a4.1 4.1 0 1 0 4.1 4.11v-.19l4-4.18c.93 1.2 2.09 3.4.92 5.59zm-8.66-4a2.8 2.8 0 0 1 2.44 2.4 2.88 2.88 0 0 1 0 .34 2.81 2.81 0 1 1-2.81-2.81h.34zm3.39 1.11a4.09 4.09 0 0 0-2.06-2.06l11.1-10.72 1.65 1.65zM38.71 4.15l-.55.55-1.6 1.6L35 7.82l-1.94 1-1.85-1.92 1-1.94 3.67-3.68a2.61 2.61 0 0 1 2 .82 2.61 2.61 0 0 1 .83 2.05z"/></svg>',
    'drum': '<svg width="33" height="35"><path d="M27.466 8.728c-2.917-1.309-6.777-2.03-10.87-2.03-1.295 0-2.566.073-3.792.213L7.515.293a.78.78 0 1 0-1.219.974l4.718 5.904c-1.765.31-3.402.769-4.834 1.362L1.257 4.729a.78.78 0 0 0-.954 1.234l4.301 3.325C2.201 10.622.894 12.33.894 14.175v13.348c0 2.115 1.716 4.049 4.83 5.447C8.643 34.28 12.503 35 16.596 35c4.094 0 7.954-.721 10.871-2.03 3.115-1.398 4.831-3.332 4.831-5.447V14.175c0-2.114-1.715-4.049-4.831-5.447zM5.964 10.34l6.316 4.883a.777.777 0 0 0 1.094-.14.78.78 0 0 0-.14-1.095L7.624 9.65c1.356-.481 2.88-.845 4.51-1.08l3.614 4.523a.779.779 0 0 0 1.096.123.78.78 0 0 0 .122-1.097l-2.999-3.753c.858-.07 1.736-.107 2.629-.107 3.878 0 7.511.672 10.231 1.893 2.485 1.115 3.91 2.581 3.91 4.023 0 1.442-1.425 2.908-3.91 4.023-2.72 1.22-6.354 1.893-10.232 1.893-3.877 0-7.511-.672-10.231-1.893-2.485-1.115-3.91-2.581-3.91-4.023 0-1.363 1.273-2.747 3.51-3.836zm20.863 21.208c-2.72 1.22-6.354 1.893-10.232 1.893-3.877 0-7.511-.673-10.231-1.893-2.485-1.116-3.91-2.582-3.91-4.024v-5.25c3.098 2.19 8.324 3.511 14.141 3.511 5.74 0 11.047-1.35 14.142-3.518v5.257c0 1.442-1.425 2.908-3.91 4.024zm3.91-11.283c-2.533 2.41-8.041 3.96-14.141 3.96-6.082 0-11.608-1.552-14.142-3.96v-2.767c.802.792 1.901 1.51 3.271 2.125 2.917 1.309 6.777 2.03 10.87 2.03 4.094 0 7.954-.721 10.871-2.03 1.37-.615 2.469-1.333 3.27-2.125v2.767z"/></svg>',
    'tambourine': '<svg width="35" height="35"><path d="M17.55 4.89a12.66 12.66 0 1 0 12.66 12.66A12.68 12.68 0 0 0 17.55 4.89zm0 24.16a11.53 11.53 0 1 1 11.5-11.5 11.54 11.54 0 0 1-11.5 11.5z"/><path d="M32.26 14a15 15 0 0 0-1.8-4.33 3.64 3.64 0 0 0-5-5 15 15 0 0 0-4.33-1.8 3.64 3.64 0 0 0-7.1 0 15 15 0 0 0-4.33 1.8 3.64 3.64 0 0 0-5 5A15 15 0 0 0 2.9 14a3.64 3.64 0 0 0 0 7.1 15 15 0 0 0 1.8 4.33 3.64 3.64 0 0 0 5 5 15 15 0 0 0 4.33 1.8 3.64 3.64 0 0 0 7.1 0 15 15 0 0 0 4.33-1.8 3.64 3.64 0 0 0 5-5 15 15 0 0 0 1.8-4.33 3.64 3.64 0 0 0 0-7.1zM2.57 19.71a2.41 2.41 0 0 1 0-4.32 15.2 15.2 0 0 0 0 4.32zM29.05 6.05a2.4 2.4 0 0 1 .58 2.48 15.26 15.26 0 0 0-3.06-3.06 2.4 2.4 0 0 1 2.48.58zm-11.5-4.82a2.4 2.4 0 0 1 2.16 1.34 15.2 15.2 0 0 0-4.32 0 2.4 2.4 0 0 1 2.16-1.34zM6.05 6.05a2.4 2.4 0 0 1 2.48-.58 15.26 15.26 0 0 0-3.09 3.02 2.4 2.4 0 0 1 .61-2.44zm0 23a2.4 2.4 0 0 1-.58-2.48 15.26 15.26 0 0 0 3.06 3.06 2.4 2.4 0 0 1-2.48-.58zm11.5 4.82a2.4 2.4 0 0 1-2.16-1.34 15.2 15.2 0 0 0 4.32 0 2.4 2.4 0 0 1-2.16 1.34zm11.5-4.82a2.4 2.4 0 0 1-2.48.58 15.26 15.26 0 0 0 3.06-3.06 2.4 2.4 0 0 1-.58 2.48zm-11.5 2.4a13.9 13.9 0 1 1 13.9-13.9 13.91 13.91 0 0 1-13.9 13.9zm15-11.74a15.2 15.2 0 0 0 0-4.32 2.41 2.41 0 0 1-.02 4.32z"/></svg>',
    'electric-guitar': '<svg width="41" height="40"><path d="M8.25 26.853a.894.894 0 0 0-1.264 1.263l4.886 4.886a.89.89 0 0 0 1.263 0 .893.893 0 0 0 0-1.263L8.25 26.853zM13.252 24.367a.893.893 0 0 0-1.263 1.264l2.369 2.368a.89.89 0 0 0 1.263 0 .893.893 0 0 0 0-1.263l-2.369-2.369z"/><path d="M39.897 2.843c-.2-.87-.427-1.437-.675-1.684C38.894.83 38.488.65 38.078.65c-.21 0-.412.046-.604.136-.2.093-.415.198-.641.311l-.836-.835a.894.894 0 0 0-1.263 1.263l.44.439c-.39.21-.784.425-1.165.636l-.495-.495a.894.894 0 0 0-1.263 1.264l.14.14c-.763.435-1.3.747-1.36.782a.893.893 0 0 0-.18.14 1.6 1.6 0 0 0-.396 1.585L19.542 16.929a24.296 24.296 0 0 0-.22-.105c-.473-.223-.882-.415-1.266-.8-.344-.343.54-1.774 1.015-2.543.828-1.342 1.685-2.73.7-3.715-.187-.187-.521-.41-1.052-.41-1.403 0-3.348 1.641-3.755 2.048-1.56 1.561-2.19 2.78-2.799 3.958-.536 1.037-1.042 2.017-2.241 3.216-.895.895-2.07 1.34-3.314 1.812-1.432.543-2.913 1.104-4.19 2.38-5.522 5.523-.147 10.898 1.877 12.922C6.302 37.698 8.996 40 12.046 40c1.818 0 3.558-.819 5.172-2.433 1.276-1.276 1.838-2.757 2.38-4.189.472-1.244.918-2.419 1.813-3.313.865-.866 1.543-1.184 2.328-1.553.815-.382 1.739-.816 2.818-1.895 2.663-2.663 2.48-3.965 1.856-4.589-.335-.334-.78-.504-1.325-.504-.616 0-1.29.217-2.003.447-.71.227-1.442.463-2.052.463-.402 0-.682-.1-.908-.326a2.198 2.198 0 0 1-.329-.398L33.972 9.534c.148.043.303.067.461.067.426 0 .826-.165 1.124-.463l4.165-4.165c.389-.389.438-.986.175-2.13zm-8.325 4.582l.991.991-10.746 10.746c-.113-.38-.342-.788-.768-1.213L31.572 7.425zm-8.539 16.796c.89 0 1.798-.292 2.598-.55.461-.148.936-.3 1.275-.346-.24.465-.836 1.253-1.612 2.029-.858.858-1.533 1.174-2.314 1.541-.819.384-1.746.82-2.833 1.906-1.166 1.167-1.701 2.578-2.219 3.944-.498 1.313-.968 2.554-1.974 3.559-1.284 1.285-2.563 1.91-3.909 1.91-2.394 0-4.723-2.023-6.485-3.785-1.347-1.347-2.968-3.138-3.557-5.047-.582-1.886-.032-3.635 1.68-5.348 1.006-1.005 2.247-1.476 3.56-1.974 1.366-.518 2.778-1.053 3.944-2.219 1.395-1.396 1.99-2.546 2.565-3.66.571-1.105 1.11-2.15 2.475-3.514.535-.535 1.454-1.145 2.054-1.4-.182.387-.508.914-.73 1.275-.887 1.436-2.102 3.402-.759 4.745.605.605 1.222.896 1.767 1.153.462.218.86.406 1.227.772.415.416.375.576.244 1.11-.175.708-.44 1.778.832 3.05.564.563 1.294.849 2.171.849zM34.421 7.747l-2.124-2.124c1.01-.583 3.88-2.225 5.661-3.089.13.379.284 1.028.312 1.365L34.42 7.747z"/></svg>',
    'console-panel': '<svg width="35" height="35"><path d="M7.552 8.994v-.848a.78.78 0 1 0-1.56 0v.848a2.862 2.862 0 0 0-2.079 2.748c0 1.306.88 2.409 2.078 2.75v12.362a.78.78 0 1 0 1.56 0V14.49a2.862 2.862 0 0 0 2.079-2.749c0-1.305-.88-2.408-2.078-2.748zm-.78 4.046a1.299 1.299 0 0 1-1.298-1.298c0-.715.582-1.297 1.297-1.297.716 0 1.298.582 1.298 1.297 0 .716-.582 1.298-1.298 1.298zM18.28 20.216V8.146a.78.78 0 1 0-1.56 0v12.07a2.862 2.862 0 0 0-2.078 2.75c0 1.304.88 2.407 2.078 2.748v1.14a.78.78 0 1 0 1.56 0v-1.14a2.862 2.862 0 0 0 2.078-2.749c0-1.305-.88-2.408-2.078-2.749zm-.78 4.047a1.299 1.299 0 0 1-1.298-1.298c0-.715.582-1.298 1.298-1.298a1.299 1.299 0 0 1 0 2.595zM29.009 13.429V8.146a.78.78 0 1 0-1.56 0v5.283a2.862 2.862 0 0 0-2.079 2.748c0 1.306.88 2.409 2.078 2.75v7.927a.78.78 0 1 0 1.56 0v-7.928a2.863 2.863 0 0 0 2.079-2.749c0-1.305-.88-2.408-2.078-2.748zm-.78 4.046a1.299 1.299 0 0 1-1.298-1.298c0-.715.582-1.297 1.297-1.297.716 0 1.298.582 1.298 1.297 0 .716-.582 1.298-1.298 1.298z"/><path d="M32.24 0H2.76A2.758 2.758 0 0 0 0 2.749V32.25A2.758 2.758 0 0 0 2.76 35h29.48A2.758 2.758 0 0 0 35 32.251V2.75A2.758 2.758 0 0 0 32.24 0zm1.2 32.251c0 .656-.539 1.189-1.2 1.189H2.76c-.661 0-1.2-.533-1.2-1.189V2.75c0-.656.539-1.188 1.2-1.188h29.48c.661 0 1.2.532 1.2 1.188V32.25z"></svg>',
    'piano-keys': '<svg width="35" height="29"><path d="M34.22 0H.78A.78.78 0 0 0 0 .78v27.303c0 .431.35.78.78.78h33.44a.78.78 0 0 0 .78-.78V.78a.78.78 0 0 0-.78-.78zm-6.315 1.56v14.858h-3.186V1.561h3.186zM11.06 17.98a.78.78 0 0 0 .78-.78V1.56h2.505v15.638c0 .43.35.78.78.78h1.594v9.324H9.469v-9.324h1.592zm7.22 0h1.592c.431 0 .78-.35.78-.78V1.56h2.505v15.638c0 .43.35.78.78.78h1.594v9.324H18.28v-9.324zm.812-16.418v14.857h-3.186V1.561h3.186zm-8.812 0v14.857H7.095V1.561h3.186zm-8.72 0h3.974v15.638c0 .43.35.78.78.78h1.593v9.324H1.561V1.56zM33.44 27.303h-6.348v-9.324h1.593c.43 0 .78-.35.78-.78V1.56h3.975v25.742z"/></svg>',
    'violin': '<svg width="40" height="40"><path d="M16.774 21.23c.262-.76-.001-1.518-.64-1.844-.437-.223-1.613-.514-3.09 1.594-.242.344-.447.57-.607.717a.892.892 0 0 0-1.664.056c-.262.76.001 1.518.64 1.844.144.074.368.154.657.154.588 0 1.443-.334 2.434-1.748.241-.344.446-.57.606-.717a.891.891 0 0 0 1.664-.056zM18.997 23.453a.892.892 0 0 0-.056 1.664c-.147.16-.373.365-.717.606-2.108 1.478-1.817 2.654-1.594 3.091.242.474.72.741 1.261.741.19 0 .386-.033.583-.1a.892.892 0 0 0 .056-1.665 4.38 4.38 0 0 1 .717-.606c2.108-1.478 1.817-2.654 1.594-3.09-.326-.64-1.085-.903-1.844-.64zM12.331 27.06a2.178 2.178 0 0 0-1.55-.642c-.585 0-1.136.228-1.55.642a.903.903 0 0 0-.086.1l-3.22 4.359c-.331.38-.397.92-.173 1.46.32.772 1.235 1.597 2.09 1.597.313 0 .606-.108.834-.306l4.359-3.219a.895.895 0 0 0 .1-.087 2.195 2.195 0 0 0 0-3.1l-.804-.805zm-.424 2.607L7.77 32.722a1.55 1.55 0 0 1-.297-.297l3.055-4.137a.407.407 0 0 1 .541.033l.804.804a.41.41 0 0 1 .033.542z"/><path d="M39.897.87a.892.892 0 0 0-.768-.767c-2.368-.311-4.083.086-5.085 1.168a3.137 3.137 0 0 0-.6.931l-.225-.225a.892.892 0 0 0-1.26 1.26l.508.51-.63.583-.6-.6a.892.892 0 0 0-1.261 1.26l.553.553a855.685 855.685 0 0 0-5.36 5.013c-1.978-1.384-3.907-1.958-5.744-1.702-1.941.271-3.685 1.451-5.183 3.507-.452.619-.246 1.305-.096 1.807.232.775.433 1.445-.825 2.535-1.898 1.646-2.363 1.556-3.207 1.392a7.403 7.403 0 0 0-1.242-.157c-1.418 0-6.41 2.165-8.228 6.333-1.954 4.482.906 8.693 3.65 11.436C6.404 37.819 9.386 40 12.692 40c.988 0 2.005-.195 3.036-.644 4.216-1.839 6.383-6.925 6.333-8.276a7.384 7.384 0 0 0-.157-1.194c-.164-.844-.255-1.309 1.392-3.208 1.09-1.257 1.76-1.056 2.535-.824.502.15 1.188.355 1.807-.096 2.056-1.498 3.236-3.242 3.506-5.183.257-1.837-.317-3.766-1.7-5.744a866.047 866.047 0 0 0 5.012-5.36l.559.56a.89.89 0 0 0 1.261 0 .892.892 0 0 0 0-1.262l-.607-.606.583-.63.515.515a.89.89 0 0 0 1.261 0 .892.892 0 0 0 0-1.261l-.233-.234a3.142 3.142 0 0 0 1.168-.839c.906-1.033 1.22-2.662.933-4.843zM29.38 20.33c-.197 1.413-1.101 2.729-2.688 3.912a4.903 4.903 0 0 1-.348-.095c-.89-.267-2.548-.764-4.394 1.364-2.066 2.383-2.056 3.372-1.795 4.717.058.296.112.576.125.917 0 .716-1.87 5.173-5.371 6.623-2.831 1.172-5.978.055-9.354-3.321-3.376-3.376-4.493-6.523-3.321-9.354 1.45-3.502 5.907-5.371 6.62-5.371.344.012.624.067.92.124 1.346.262 2.334.272 4.716-1.795 2.128-1.845 1.632-3.503 1.365-4.394a5.029 5.029 0 0 1-.095-.348c1.183-1.586 2.499-2.49 3.912-2.688 1.29-.18 2.69.223 4.175 1.193-.716.685-1.335 1.285-1.788 1.738l-2.197 2.197a2.178 2.178 0 0 0-.642 1.55c0 .586.228 1.136.642 1.55l1.291 1.291c.414.414.964.642 1.55.642.585 0 1.136-.228 1.55-.642l2.197-2.197c.453-.453 1.053-1.071 1.738-1.788.97 1.485 1.372 2.886 1.192 4.175zm8.244-15.79a1.408 1.408 0 0 1-1.025.479.833.833 0 0 0-.714.286C35.804 5.39 27.87 14 25.188 16.68l-2.197 2.197a.407.407 0 0 1-.578 0l-1.291-1.291a.407.407 0 0 1 0-.578l2.197-2.197c2.68-2.68 11.29-10.617 11.377-10.696a.832.832 0 0 0 .286-.716c-.001-.07.008-.54.388-.936.498-.518 1.48-.75 2.829-.663.104 1.578-.242 2.357-.576 2.737z"/></svg>',
    'trumpet': '<svg width="40" height="27"><path d="M39.91 13.276c.003-.331.09-9.59.09-11.176C40 .65 39.184 0 38.375 0c-.74 0-1.435.54-1.727 1.344-.172.45-1.896 2.847-4.64 5.116-2.374 1.962-6.087 4.302-10.296 4.302h-.927V8.73h.256a.892.892 0 0 0 0-1.783h-2.297a.892.892 0 1 0 0 1.783h.257v2.033h-3.309V8.73h.257a.892.892 0 1 0 0-1.783h-2.297a.892.892 0 1 0 0 1.783h.257v2.033h-3.31V8.73h.258a.892.892 0 1 0 0-1.783H8.559a.892.892 0 1 0 0 1.783h.257v2.033h-4.25L1.354 8.818A.891.891 0 0 0 0 9.58v7.39a.892.892 0 0 0 1.353.764l3.212-1.945h.94v3.142a5.455 5.455 0 0 0 5.448 5.448h7.695a5.41 5.41 0 0 0 3.85-1.597 5.412 5.412 0 0 0 1.598-3.851v-2.897c3.213.648 5.998 2.476 7.913 4.058 2.744 2.269 4.467 4.665 4.639 5.115.292.804.986 1.345 1.727 1.345.809 0 1.625-.65 1.625-2.1 0-1.587-.087-10.845-.09-11.177zM1.783 11.163l1.642.994v2.239l-1.642.993v-4.226zm20.529 7.769a3.64 3.64 0 0 1-1.075 2.59 3.64 3.64 0 0 1-2.59 1.075h-7.694a3.67 3.67 0 0 1-3.665-3.665V15.79h1.504v3.142c0 1.192.97 2.16 2.16 2.16h7.696c1.19 0 2.16-.969 2.16-2.16V15.79h.904c.202 0 .401.007.6.018v3.124zM10.576 15.79h8.449v3.142c0 .208-.17.378-.377.378h-7.695a.378.378 0 0 1-.378-.378V15.79zm22.598 2.952c-2.606-2.16-6.71-4.735-11.462-4.735H5.208v-1.461h16.504c4.753 0 8.856-2.575 11.462-4.736 2.57-2.13 4.495-4.526 5.042-5.613-.003 1.853-.089 10.977-.09 11.07v.017c.001.094.087 9.22.09 11.071-.546-1.085-2.472-3.482-5.042-5.613z"/></svg>',
    'drum-machine': '<svg width="37" height="35"><path d="M14.743 12.446a2.83 2.83 0 0 0-2.827 2.826 2.83 2.83 0 0 0 2.827 2.827 2.83 2.83 0 0 0 2.827-2.827 2.83 2.83 0 0 0-2.827-2.826zm0 4.435a1.61 1.61 0 0 1-1.608-1.608 1.61 1.61 0 0 1 1.608-1.609 1.61 1.61 0 0 1 1.608 1.609 1.61 1.61 0 0 1-1.608 1.608zM5.071 15.272c0 1.11.903 2.014 2.013 2.014 1.11 0 2.013-.904 2.013-2.014 0-1.11-.903-2.013-2.013-2.013-1.11 0-2.013.903-2.013 2.013zm3.052 0a1.04 1.04 0 0 1-2.077 0 1.039 1.039 0 0 1 2.077 0zM14.743 19.61a2.83 2.83 0 0 0-2.827 2.826 2.83 2.83 0 0 0 2.827 2.827 2.83 2.83 0 0 0 2.827-2.827 2.83 2.83 0 0 0-2.827-2.827zm0 4.434a1.61 1.61 0 0 1-1.608-1.608 1.61 1.61 0 0 1 1.608-1.608 1.61 1.61 0 0 1 1.608 1.608 1.61 1.61 0 0 1-1.608 1.608zM14.743 26.773a2.83 2.83 0 0 0-2.827 2.826 2.83 2.83 0 0 0 2.827 2.827 2.83 2.83 0 0 0 2.827-2.827 2.83 2.83 0 0 0-2.827-2.826zm0 4.435a1.61 1.61 0 0 1-1.608-1.609 1.61 1.61 0 0 1 1.608-1.608 1.61 1.61 0 0 1 1.608 1.608 1.61 1.61 0 0 1-1.608 1.609zM21.99 12.446a2.83 2.83 0 0 0-2.827 2.826A2.83 2.83 0 0 0 21.99 18.1a2.83 2.83 0 0 0 2.827-2.827 2.83 2.83 0 0 0-2.827-2.826zm0 4.435a1.61 1.61 0 0 1-1.608-1.608 1.61 1.61 0 0 1 1.608-1.609 1.61 1.61 0 0 1 1.608 1.609 1.61 1.61 0 0 1-1.608 1.608zM21.99 19.61a2.83 2.83 0 0 0-2.827 2.826 2.83 2.83 0 0 0 2.827 2.827 2.83 2.83 0 0 0 2.827-2.827 2.83 2.83 0 0 0-2.827-2.827zm0 4.434a1.61 1.61 0 0 1-1.608-1.608 1.61 1.61 0 0 1 1.608-1.608 1.61 1.61 0 0 1 1.608 1.608 1.61 1.61 0 0 1-1.608 1.608zM21.99 26.773a2.83 2.83 0 0 0-2.827 2.826 2.83 2.83 0 0 0 2.827 2.827 2.83 2.83 0 0 0 2.827-2.827 2.83 2.83 0 0 0-2.827-2.826zm0 4.435a1.61 1.61 0 0 1-1.608-1.609 1.61 1.61 0 0 1 1.608-1.608 1.61 1.61 0 0 1 1.608 1.608 1.61 1.61 0 0 1-1.608 1.609zM29.237 12.446a2.83 2.83 0 0 0-2.827 2.826 2.83 2.83 0 0 0 2.827 2.827 2.83 2.83 0 0 0 2.826-2.827 2.83 2.83 0 0 0-2.826-2.826zm0 4.435a1.61 1.61 0 0 1-1.609-1.608 1.61 1.61 0 0 1 1.609-1.609 1.61 1.61 0 0 1 1.608 1.609 1.61 1.61 0 0 1-1.608 1.608zM29.237 19.61a2.83 2.83 0 0 0-2.827 2.826 2.83 2.83 0 0 0 2.827 2.827 2.83 2.83 0 0 0 2.826-2.827 2.83 2.83 0 0 0-2.826-2.827zm0 4.434a1.61 1.61 0 0 1-1.609-1.608 1.61 1.61 0 0 1 1.609-1.608 1.61 1.61 0 0 1 1.608 1.608 1.61 1.61 0 0 1-1.608 1.608zM29.237 26.773a2.83 2.83 0 0 0-2.827 2.826 2.83 2.83 0 0 0 2.827 2.827 2.83 2.83 0 0 0 2.826-2.827 2.83 2.83 0 0 0-2.826-2.826zm0 4.435a1.61 1.61 0 0 1-1.609-1.609 1.61 1.61 0 0 1 1.609-1.608 1.61 1.61 0 0 1 1.608 1.608 1.61 1.61 0 0 1-1.608 1.609zM8.616 21.781H7.612v-1.969a.528.528 0 1 0-1.056 0v1.97H5.552c-.717 0-1.3.583-1.3 1.3v.974c0 .717.583 1.3 1.3 1.3h1.004v6.055a.528.528 0 1 0 1.056 0v-6.055h1.004c.717 0 1.3-.583 1.3-1.3v-.975c0-.716-.583-1.3-1.3-1.3zm.082 2.275a.082.082 0 0 1-.082.081H5.553a.082.082 0 0 1-.082-.081v-.975c0-.045.037-.081.082-.081h3.063c.045 0 .082.036.082.081v.975zM4.861 10.514h7.594c.336 0 .609-.273.609-.61V3.751a.609.609 0 0 0-.61-.61H4.862a.609.609 0 0 0-.609.61v6.153c0 .337.273.61.61.61zm.61-6.154h6.374v4.935H5.471V4.36z"/><path d="M33.134 0H3.418A3.422 3.422 0 0 0 0 3.418v28.164A3.422 3.422 0 0 0 3.418 35h29.716a3.422 3.422 0 0 0 3.418-3.418V3.418A3.422 3.422 0 0 0 33.134 0zm1.794 31.582c0 .989-.805 1.794-1.794 1.794H3.418a1.796 1.796 0 0 1-1.793-1.794V3.418c0-.989.804-1.793 1.793-1.793h29.716c.99 0 1.794.804 1.794 1.793v28.164z"/></svg>',
    'marimba': '<svg width="35" height="29"><path d="M34.24 10.652a.761.761 0 0 0 0-1.522h-2.284V4.565h2.283a.761.761 0 0 0 0-1.522h-2.282V.761c0-.42-.341-.761-.761-.761h-6.087c-.42 0-.761.34-.761.76v2.283h-3.044V.761c0-.42-.34-.761-.76-.761h-6.088c-.42 0-.76.34-.76.76v2.283h-3.044V.761c0-.42-.34-.761-.76-.761H3.803c-.42 0-.76.34-.76.76v2.283H.76a.761.761 0 0 0 0 1.522h2.282V9.13H.761a.761.761 0 0 0 0 1.522h2.282v4.565H.761a.761.761 0 0 0 0 1.522h2.282v5.326c0 .42.341.761.761.761h6.087c.42 0 .761-.34.761-.76v-5.327h3.044v8.37c0 .42.34.76.76.76h6.088c.42 0 .76-.34.76-.76v-8.37h3.044v11.413c0 .42.34.761.76.761h6.088c.42 0 .76-.34.76-.76V16.738h2.283a.761.761 0 0 0 0-1.522h-2.282v-4.565h2.282zM9.13 21.304H4.565V1.522H9.13v19.782zm4.566-6.087h-3.044v-4.565h3.044v4.565zm0-6.087h-3.044V4.565h3.044V9.13zm6.087 15.218h-4.566V1.522h4.566v22.826zm4.565-9.13h-3.044v-4.566h3.044v4.565zm0-6.088h-3.044V4.565h3.044V9.13zm6.087 18.261H25.87V1.521h4.565v25.87z"/></svg>'
  }
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.make = exports.init = undefined;

var _cmttLikely = __webpack_require__(15);

var _cmttLikely2 = _interopRequireDefault(_cmttLikely);

var _dom = __webpack_require__(5);

var _analytics = __webpack_require__(3);

var Analytics = _interopRequireWildcard(_analytics);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CSS = {
    likely: 'likely',
    likelyCustom: 'likely--custom'
};

var init = exports.init = function init() {
    _cmttLikely2.default.initate();
};

/**
 * Make likely buttons and append to specified element
 * @param {Element} parentContainer - likely container will be placed here
 * @param {Object} set - object with optional params (title, url, twitter)
 */
var make = exports.make = function make(parentContainer) {
    var set = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var likelyContainer = (0, _dom.makeElement)('div', [CSS.likely, CSS.likelyCustom]);
    var socials = ['facebook', 'vkontakte', 'twitter'];

    socials.forEach(function (social) {
        var button = (0, _dom.makeElement)('div', social);

        if (social === 'facebook') button.innerHTML = 'Поделиться';

        button.addEventListener('click', function () {
            Analytics.sendEvent('Share ' + social);
        });

        likelyContainer.appendChild(button);
    });

    parentContainer.appendChild(likelyContainer);

    if (set.url) likelyContainer.dataset.url = set.url;
    if (set.twitter) likelyContainer.dataset.twitter = set.twitter;
    if (set.title) likelyContainer.dataset.title = set.title;

    init();
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// 'use strict';

var Likely = __webpack_require__(16),
    config = __webpack_require__(0),
    utils = __webpack_require__(2),
    dom = __webpack_require__(1);

/**
 * @param {Node} node
 * @param {Object} options
 */
var likely = function (node, options) {
    options = options || {};

    var widget = node[config.name];

    if (widget) {
        widget.update(options);
    }
    else {
        node[config.name] = new Likely(node, utils.merge(
            {}, likely.defaults,
            options, utils.bools(node)
        ));
    }

    return widget;
};

/**
 * Initiate Likely buttons on load
 */
likely.initiate = likely.initate = function () {
    var widgets = dom.findAll('.' + config.name);

    utils.toArray(widgets).forEach(likely);
};

/**
 * Defaults options for likely
 */
likely.defaults = {
    counters: true,
    timeout:  1e3,
    zeroes:   false,
    title:    document.title,
    wait:     0.5e3,
    url:      window.location.href.replace(window.location.hash, '')
};

module.exports = likely;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var Button = __webpack_require__(17);

var services = __webpack_require__(4),
    config   = __webpack_require__(0),
    utils = __webpack_require__(2),
    dom = __webpack_require__(1),
    storage = __webpack_require__(7);

/**
 * Main widget view
 *
 * @param {Node} container
 * @param {Object} options
 */
function Likely(container, options) {
    this.isSmartOrder = container.dataset.smart !== undefined ? true : false;
    this.container = container;
    this.options   = options;

    this.countersLeft = 0;
    this.buttons      = [];
    this.number       = 0;

    this.init();
}

Likely.prototype = {

    /**
     * Change buttons order, if previous clicks were saved
     * @param {Array} children
     */
    reorder: function (children) {
        var savedServices = storage.getItem(config.storageKey);

        if (savedServices) {
            savedServices.reverse();

            savedServices.forEach(function (service) {

                var button = dom.find('.' + service);

                if (button) {
                    button.parentNode.insertBefore(button, button.parentNode.firstChild);
                }

            });
        }
    },

    /**
     * Initiate the social buttons widget
     */
    init: function () {

        var buttons = utils.toArray(this.container.children);

        if (dom.isMobile() && this.isSmartOrder) {
            this.reorder(buttons);
        }

        buttons.forEach(this.addButton.bind(this));

        if (this.options.counters) {
            this.timer   = setTimeout(this.appear.bind(this), this.options.wait);
            this.timeout = setTimeout(this.ready.bind(this),  this.options.timeout);
        }
        else {
            this.appear();
        }

        utils.flexboxSupport(this.container, config.name);
    },

    /**
     * Add a button
     *
     * @param {Node} node
     */
    addButton: function (node) {
        var button = new Button(node, this, this.options);

        this.buttons.push(button);

        if (button.options.counterUrl) {
            this.countersLeft++;
        }
    },

    /**
     * Update the timer with URL
     *
     * @param {Object} options
     */
    update: function (options) {
        if (
            options.forceUpdate ||
            options.url !== this.options.url
        ) {
            this.countersLeft = this.buttons.length;
            this.number = 0;

            this.buttons.forEach(function (button) {
                button.update(options);
            });
        }
    },

    /**
     * Update counter
     *
     * @param {String} service
     * @param {Number} counter
     */
    updateCounter: function (service, counter) {
        if (counter) {
            this.number += counter;
        }

        this.countersLeft--;

        if (this.countersLeft === 0) {
            this.appear();
            this.ready();
        }
    },

    /**
     * Show the buttons with smooth animation
     */
    appear: function () {
        this.container.classList.add(config.name + '--visible');
    },

    /**
     * Get. Set. Ready.
     */
    ready: function () {
        if (this.timeout) {
            clearTimeout(this.timeout);

            this.container.classList.add(config.name + '--ready');
        }
    }
};

module.exports = Likely;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var services = __webpack_require__(4),
    config = __webpack_require__(0),
    fetch = __webpack_require__(31),
    utils = __webpack_require__(2),
    dom = __webpack_require__(1),
    storage = __webpack_require__(7);

var htmlSpan = '<span class="{className}">{content}</span>';

/**
 * Separate social link widget
 *
 * @param {Node} widget
 * @param {Likely} likely
 * @param {Object} options
 */
function LikelyButton (widget, likely, options) {
    this.widget  = widget;
    this.likely  = likely;
    this.options = utils.merge(options);

    this.init();
}

LikelyButton.prototype = {
    /**
     * Initiate the button
     */
    init: function () {
        this.detectService();
        this.detectParams();

        if (this.service) {
            this.initHtml();

            setTimeout(this.initCounter.bind(this), 0);
        }
    },

    /**
     * Update the counter
     *
     * @param {Object} options
     */
    update: function (options) {
        var className = '.' + config.prefix + 'counter';
            counters  = dom.findAll(className, this.widget);

        utils.extend(this.options, utils.merge({forceUpdate: false}, options));
        utils.toArray(counters).forEach(function (node) {
            node.parentNode.removeChild(node);
        });

        this.initCounter();
    },

    /**
     * Get the config.name of service and its options
     */
    detectService: function () {
        var widget  = this.widget,
            service = utils.getDataset(widget).service;

        if (!service) {
            var classes = widget.className.split(' ');

            for (var i = 0; i < classes.length; i++) {
                if (classes[i] in services) break;
            }

            service = classes[i];
        }

        if (service) {
            this.service = service;

            utils.extend(this.options, services[service]);
        }
    },

    /**
     * Merge params from data-* attributes into options hash map
     */
    detectParams: function () {
        var options = this.options,
            data    = utils.getDataset(this.widget);

        if (data.counter) {
            var counter = parseInt(data.counter, 10);

            if (isNaN(counter)) {
                options.counterUrl = data.counter;
            }
            else {
                options.counterNumber = counter;
            }
        }

        options.title = data.title || options.title;
        options.url   = data.url   || options.url;
    },

    /**
     * Inititate button's HTML
     */
    initHtml: function () {
        var options = this.options,
            widget  = this.widget,
            text    = widget.innerHTML;

        widget.addEventListener('click', this.click.bind(this));
        widget.classList.remove(this.service);
        widget.className += (' ' + this.className('widget'));

        var button = utils.template(htmlSpan, {
            className: this.className('button'),
            content:   text
        });

        var icon = utils.template(htmlSpan, {
            className: this.className('icon'),
            content:   dom.wrapSVG(options.svgi)
        });

        widget.innerHTML = icon + button;
    },

    /**
     * Fetch or get cached counter value and update the counter
     */
    initCounter: function () {
        var options = this.options;

        if (options.counters && options.counterNumber) {
            this.updateCounter(options.counterNumber);
        }
        else if (options.counterUrl) {
            fetch(
                this.service,
                options.url,
                options
            )(this.updateCounter.bind(this));
        }
    },

    /**
     * @param {String} className
     * @return {String}
     */
    className: function (className) {
        var fullClass = config.prefix + className;

        return fullClass + ' ' + fullClass + '--' + this.service;
    },

    /**
     * Update counter
     *
     * @param {String} e
     */
    updateCounter: function (counter) {
        counter = parseInt(counter, 10) || 0;

        var counterElement = dom.find('.' + config.name + '__counter', this.widget);

        if (counterElement) {
            counterElement.parentNode.removeChild(counterElement);
        }

        var options = {
            className: this.className('counter'),
            content:   counter
        };

        if (!counter && !this.options.zeroes) {
            options.className += ' ' + config.prefix + 'counter--empty';
            options.content = '';
        }

        this.widget.appendChild(
            dom.createNode(utils.template(htmlSpan, options))
        );

        this.likely.updateCounter(this.service, counter);
    },

    /**
     * Click event listener
     */
    click: function () {
        var options = this.options;

        if ( this.service == 'more' ){

            this.widget.classList.toggle('active');
            this.widget.parentElement.classList.toggle(this.options.className);

        } else if (this.service == 'email'){

            var url = utils.makeUrl(options.popupUrl, {
                url: options.url,
                title: options.title
            });

            window.location = url;

            this.rememberClicked(this.service);

        } else {

            if (options.click.call(this)) {

                var twitterText = this.likely.container.dataset.twitter,
                    twitterUrl = this.likely.container.dataset.twitterUrl;

                var window_url = utils.makeUrl(options.popupUrl, {
                    url:   (this.service === 'twitter' && twitterUrl !== '' && twitterUrl !== undefined) ? twitterUrl : options.url,
                    title: (this.service === 'twitter' && twitterText !== '' && twitterText !== undefined) ? twitterText : options.title
                });

                dom.openPopup(
                    this.addAdditionalParamsToUrl(window_url),
                    config.prefix + this.service,
                    options.popupWidth,
                    options.popupHeight
                );

                this.rememberClicked(this.service);
            }

        }

        return false;
    },

    /**
     * Append service data to URL
     *
     * @param {String} url
     */
    addAdditionalParamsToUrl: function (url) {
        var parameters = utils.query(utils.merge(
                this.widget.dataset,
                this.options.data
            )),
            delimeter = url.indexOf('?') === -1 ? '?' : '&';

        return (parameters === '') ? url : (url + delimeter + parameters);
    },

    /**
     * Remember last clicked button and save to storage
     */
    rememberClicked: function (service) {
        var services = storage.getItem(config.storageKey) || [],
            serviceIndex = services.indexOf(service);

        if (serviceIndex !== -1) {
            services.splice(serviceIndex, 1);
        }

        services.splice(0, 0, service);

        storage.setItem(config.storageKey, services);
    }
};

module.exports = LikelyButton;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var dom = __webpack_require__(1);

/**
 * @param {String} url
 * @param {Function} factory
 */
var counter = function (url, factory) {
    var self = this;
    
    dom.getJSON(url, function (count) {
        try {
            if (typeof self.convertNumber === 'function') {
                count = self.convertNumber(count);
            } 
            
            factory(count);
        } 
        catch (e) {}
    });
};

/**
 * @param {Object} options
 */
module.exports = function (options) {
    options.counter = options.counter || counter;
    options.click   = options.click   || function () { return true; };
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = {"facebook":"5.9 16h3.3V8h2.2l.3-2.8H9.2V3.8c0-.7.1-1.1 1.1-1.1h1.4V0H9.5C6.9 0 5.9 1.3 5.9 3.6v1.7H4.3V8H6v8","twitter":"15.96 3.42c-.04.153-.144.31-.237.414l-.118.058v.118l-.59.532-.237.295c-.05.036-.398.21-.413.237V6.49h-.06v.473h-.058v.294h-.058v.296h-.06v.235h-.06v.237h-.058c-.1.355-.197.71-.295 1.064h-.06v.116h-.06c-.02.1-.04.197-.058.296h-.06c-.04.118-.08.237-.118.355h-.06c-.038.118-.078.236-.117.353l-.118.06-.06.235-.117.06v.116l-.118.06v.12h-.06c-.02.057-.038.117-.058.175l-.118.06v.117c-.06.04-.118.08-.177.118v.118l-.237.177v.118l-.59.53-.532.592h-.117c-.06.078-.118.156-.177.236l-.177.06-.06.117h-.118l-.06.118-.176.06v.058h-.118l-.06.118-.353.12-.06.117c-.078.02-.156.04-.235.058v.06c-.118.038-.236.078-.354.118v.058H8.76v.06h-.12v.06h-.176v.058h-.118v.06H8.17v.058H7.99v.06l-.413.058v.06h-.237c-.667.22-1.455.293-2.36.293h-.886v-.058h-.53v-.06H3.27v-.06h-.295v-.06H2.68v-.057h-.177v-.06h-.236v-.058H2.09v-.06h-.177v-.058h-.177v-.06H1.56v-.058h-.12v-.06l-.294-.06v-.057c-.118-.04-.236-.08-.355-.118v-.06H.674v-.058H.555v-.06H.437v-.058H.32l-.06-.12H.142v-.058c-.13-.08-.083.026-.177-.118H1.56v-.06c.294-.04.59-.077.884-.117v-.06h.177v-.058h.237v-.06h.118v-.06h.177v-.057h.118v-.06h.177v-.058l.236-.06v-.058l.236-.06c.02-.038.04-.078.058-.117l.237-.06c.02-.04.04-.077.058-.117h.118l.06-.118h.118c.036-.025.047-.078.118-.118V12.1c-1.02-.08-1.84-.54-2.303-1.183-.08-.058-.157-.118-.236-.176v-.117l-.118-.06v-.117c-.115-.202-.268-.355-.296-.65.453.004.987.008 1.354-.06v-.06c-.254-.008-.47-.08-.65-.175v-.058H2.32v-.06c-.08-.02-.157-.04-.236-.058l-.06-.118h-.117l-.118-.178h-.12c-.077-.098-.156-.196-.235-.294l-.118-.06v-.117l-.177-.12c-.35-.502-.6-1.15-.59-2.006h.06c.204.234.948.377 1.357.415v-.06c-.257-.118-.676-.54-.827-.768V5.9l-.118-.06c-.04-.117-.08-.236-.118-.354h-.06v-.118H.787c-.04-.196-.08-.394-.118-.59-.06-.19-.206-.697-.118-1.005h.06V3.36h.058v-.177h.06v-.177h.057V2.83h.06c.04-.118.078-.236.117-.355h.118v.06c.12.097.237.196.355.295v.118l.118.058c.08.098.157.197.236.295l.176.06.354.413h.118l.177.236h.118l.06.117h.117c.04.06.08.118.118.177h.118l.06.118.235.06.06.117.356.12.06.117.53.176v.06h.118v.058l.236.06v.06c.118.02.236.04.355.058v.06h.177v.058h.177v.06h.176v.058h.236v.06l.472.057v.06l1.417.18v-.237c-.1-.112-.058-.442-.057-.65 0-.573.15-.99.354-1.358v-.117l.118-.06.06-.235.176-.118v-.118c.14-.118.276-.236.414-.355l.06-.117h.117l.12-.177.235-.06.06-.117h.117v-.058H9.7v-.058h.177v-.06h.177v-.058h.177v-.06h.296v-.058h1.063v.058h.294v.06h.177v.058h.178v.06h.177v.058h.118v.06h.118l.06.117c.08.018.158.038.236.058.04.06.08.118.118.177h.118l.06.117c.142.133.193.163.472.178.136-.12.283-.05.472-.118v-.06h.177v-.058h.177v-.06l.236-.058v-.06h.177l.59-.352v.176h-.058l-.06.295h-.058v.117h-.06v.118l-.117.06v.118l-.177.118v.117l-.118.06-.354.412h-.117l-.177.236h.06c.13-.112.402-.053.59-.117l1.063-.353","vkontakte":"15.4 12.8h-1.8c-.7 0-.9-.5-2.1-1.7-1-1-1.5-1.1-1.7-1.1-.4 0-.5.1-.5.6v1.6c0 .4-.1.7-1.3.7-1.9 0-3.9-1.1-5.3-3.2C.6 6.5 0 4.2 0 3.7c0-.3.1-.5.6-.5h1.8c.4 0 .6.2.8.7C4 6.4 5.4 8.6 6 8.6c.2 0 .3-.1.3-.7V5.4c0-1.2-.6-1.3-.6-1.7 0-.2.2-.4.4-.4h2.8c.4 0 .5.2.5.6v3.5c0 .4.2.5.3.5.2 0 .4-.1.8-.5 1.3-1.4 2.2-3.6 2.2-3.6.1-.3.3-.5.8-.5h1.8c.5 0 .6.3.5.6-.2 1-2.4 4-2.4 4-.2.3-.3.4 0 .8.2.3.8.8 1.2 1.3.8.8 1.3 1.6 1.5 2.1 0 .4-.2.7-.7.7","gplus":"8,6.5v3h4.291c-0.526,2.01-2.093,3.476-4.315,3.476C5.228,12.976,3,10.748,3,8c0-2.748,2.228-4.976,4.976-4.976c1.442,0,2.606,0.623,3.397,1.603L13.52,2.48C12.192,0.955,10.276,0,8,0C3.582,0,0,3.582,0,8s3.582,8,8,8s7.5-3.582,7.5-8V6.5H8","odnoklassniki":"8 2.6c.9 0 1.7.7 1.7 1.7C9.7 5.2 9 6 8 6c-.9 0-1.7-.7-1.7-1.7S7.1 2.6 8 2.6zm0 5.7c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm1.6 3.2c.8-.2 1.6-.5 2.3-1 .5-.3.7-1.1.4-1.6-.3-.6-1.1-.7-1.6-.4-1.6 1-3.8 1-5.4 0-.6-.3-1.3-.1-1.6.4-.4.6-.2 1.3.3 1.7.7.5 1.5.8 2.3 1l-2.2 2.2c-.5.5-.5 1.2 0 1.7.2.2.5.3.8.3.3 0 .6-.1.8-.3L8 13.2l2.2 2.2c.5.5 1.2.5 1.7 0s.5-1.2 0-1.7l-2.3-2.2","pocket":"12.533 6.864L8.77 10.4c-.213.2-.486.3-.76.3-.273 0-.547-.1-.76-.3L3.488 6.865c-.437-.41-.45-1.09-.032-1.52.42-.428 1.114-.443 1.55-.032l3.006 2.823 3.004-2.823c.438-.41 1.132-.396 1.55.032.42.43.406 1.11-.03 1.52zm3.388-4.928c-.207-.56-.755-.936-1.363-.936H1.45C.854 1 .31 1.368.096 1.917.032 2.08 0 2.25 0 2.422v4.73l.055.94c.232 2.14 1.366 4.01 3.12 5.314.03.024.063.047.094.07l.02.013c.94.673 1.992 1.13 3.128 1.353.524.104 1.06.157 1.592.157.492 0 .986-.045 1.472-.133.058-.01.116-.022.175-.034.016-.003.033-.01.05-.018 1.088-.233 2.098-.677 3.003-1.326l.02-.015c.032-.022.064-.045.096-.07 1.753-1.303 2.887-3.173 3.12-5.312l.054-.94v-4.73c0-.165-.02-.327-.08-.487","telegram":"12.4 4.2L6.6 9.6c-.2.2-.3.4-.4.7L6 11.8c0 .2-.3.2-.3 0l-.8-2.6c-.1-.4.1-.7.3-.8l7-4.3c.2-.2.4 0 .2.1zm2.9-3L.5 6.9c-.4.1-.4.7 0 .8L4.1 9l1.4 4.5c.1.3.4.4.7.2l2-1.6c.2-.2.5-.2.7 0l3.6 2.6c.3.2.6 0 .7-.3l2.6-12.8c.1-.2-.2-.5-.5-.4","whatsapp":"15.8 7.8c0 4.2-3.4 7.6-7.6 7.6-1.3 0-2.6-.3-3.7-.9L.3 15.8l1.4-4.1C1 10.6.6 9.2.6 7.8.6 3.6 4 .2 8.2.2c4.2 0 7.6 3.4 7.6 7.6M8.1 1.4c-3.5 0-6.4 2.9-6.4 6.4 0 1.4.5 2.7 1.2 3.7l-.8 2.4 2.5-.8c1 .7 2.2 1.1 3.5 1.1 3.5 0 6.4-2.9 6.4-6.4.1-3.5-2.8-6.4-6.4-6.4M12 9.5c0-.1-.2-.1-.4-.2s-1.1-.5-1.3-.6c-.2-.1-.3-.1-.4.1-.1.2-.4.6-.6.7-.1.1-.2.1-.4 0-.1 0-.8-.2-1.5-.8-.6-.5-.9-1.1-1-1.3-.1-.2 0-.3.1-.4l.3-.3c.1-.1.1-.2.2-.3 0-.2 0-.3-.1-.4 0-.1-.4-1-.6-1.4-.1-.3-.3-.2-.4-.2h-.4c-.1 0-.3 0-.5.2-.1.2-.6.6-.6 1.5s.7 1.8.8 1.9c.1.1 1.3 2.1 3.2 2.8 1.9.7 1.9.5 2.2.5.3 0 1.1-.4 1.3-.9.1-.4.1-.8.1-.9","viber":"13.7 6.7c0 .3.1.7-.3.8-.6.1-.5-.4-.5-.8-.4-2.3-1.2-3.2-3.5-3.7-.4-.1-.9 0-.8-.5.1-.5.5-.4.9-.3 2.3.3 4.2 2.3 4.2 4.5zM8.8 1.2c3.7.6 5.5 2.4 5.9 6.1 0 .3-.1.9.4.9s.4-.5.4-.9c0-3.6-3.1-6.8-6.7-7-.2.1-.8-.1-.8.5 0 .4.4.3.8.4zm5.7 10.2c-.5-.4-1-.7-1.5-1.1-1-.7-1.9-.7-2.6.4-.4.6-1 .6-1.6.4-1.7-.8-2.9-1.9-3.7-3.6-.3-.7-.3-1.4.5-1.9.4-.3.8-.6.8-1.2 0-.8-2-3.5-2.7-3.7-.3-.1-.6-.1-1 0C.9 1.2.2 2.7.9 4.4c2.1 5.2 5.8 8.8 11 11 .3.1.6.2.8.2 1.2 0 2.5-1.1 2.9-2.2.3-1-.5-1.5-1.1-2zM9.7 4c-.2 0-.5 0-.6.3-.1.4.2.5.5.5.9.2 1.4.7 1.5 1.7 0 .3.2.5.4.4.3 0 .4-.3.4-.6 0-1.1-1.2-2.3-2.2-2.3","email":"12.7 1c1 .5 1.8 1.2 2.3 2.2.5.9.8 1.9.8 3.1 0 .9-.1 1.8-.5 2.7-.3.9-.8 1.6-1.4 2.2-.6.6-1.4.9-2.3.9-.6 0-1.1-.2-1.5-.5-.4-.3-.6-.7-.7-1.2-.6 1.1-1.5 1.6-2.5 1.6-.8 0-1.5-.3-1.9-.8-.5-.6-.7-1.3-.7-2.2 0-.8.1-1.6.4-2.5S5.5 5 6.1 4.4c.7-.6 1.5-.8 2.6-.8.5 0 1 .1 1.4.2.5.1.9.3 1.3.6l-.7 4.9v.3c0 .2 0 .4.1.5.1.1.3.2.5.2.4 0 .8-.2 1.1-.7.3-.4.5-1 .7-1.6.1-.7.2-1.3.2-1.9 0-1.3-.4-2.3-1.1-3-.8-.7-1.9-1-3.4-1s-2.7.4-3.7 1.1c-.9.7-1.6 1.6-2 2.6S2.6 7.9 2.6 9c0 .9.2 1.8.6 2.5.4.7 1 1.3 1.7 1.7.7.4 1.7.6 2.7.6.5 0 1-.1 1.6-.2.6-.1 1.1-.3 1.5-.4l.4 1.9c-.6.2-1.2.4-1.8.5-.7.1-1.3.2-1.9.2-1.4 0-2.7-.3-3.8-.9s-1.9-1.4-2.5-2.4S.2 10.3.2 9c0-1.3.3-2.7 1-4 .6-1.4 1.6-2.5 3-3.4C5.5.7 7.2.2 9.2.2c1.3 0 2.5.3 3.5.8zm-4 8.4l.6-3.9c-.3-.1-.5-.2-.7-.2-.7 0-1.2.4-1.5 1.2-.3.8-.5 1.7-.5 2.6 0 .8.3 1.2.8 1.2s.9-.3 1.3-.9","more":"14.725 6.667H9.333V1.275C9.333.57 8.738 0 8 0S6.667.57 6.667 1.275v5.392H1.275C.57 6.667 0 7.262 0 8s.57 1.334 1.275 1.334h5.392v5.393C6.667 15.43 7.262 16 8 16s1.333-.57 1.333-1.273V9.334h5.392C15.43 9.334 16 8.738 16 8s-.57-1.333-1.275-1.333"}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Odnoklassniki service provider
 */

var config = __webpack_require__(0),
    utils  = __webpack_require__(2),
    dom    = __webpack_require__(1);

var odnoklassniki = {
    counterUrl: config.secure 
        ? undefined 
        : 'http://connect.ok.ru/dk?st.cmd=extLike&ref={url}&uid={index}',
    counter: function (url, promise) {
        this.promises.push(promise);
        
        dom.getScript(utils.makeUrl(url, {
            index: this.promises.length - 1
        }));
    },
    promises: [],
    popupUrl: 'http://connect.ok.ru/dk?st.cmd=WidgetSharePreview&service=odnoklassniki&st.shareUrl={url}',
    popupWidth: 640,
    popupHeight: 400
};

utils.set(window, 'ODKL.updateCount', function (index, counter) {
    odnoklassniki.promises[index](counter);
});

module.exports = odnoklassniki;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Vkontakte service provider
 */

var config = __webpack_require__(0),
    utils  = __webpack_require__(2),
    dom    = __webpack_require__(1);

var vkontakte = {
    counterUrl: 'https://vk.com/share.php?act=count&url={url}&index={index}',
    counter: function (url, promise) {
        this.promises.push(promise);
        
        dom.getScript(utils.makeUrl(url, {
            index: this.promises.length - 1
        }));
    },
    promises: [],
    popupUrl: config.protocol + '//vk.com/share.php?url={url}&title={title}',
    popupWidth: 550,
    popupHeight: 330
};

utils.set(window, 'VK.Share.count', function (index, count) {
    vkontakte.promises[index](count);
});

module.exports = vkontakte;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

/**
 * Facebook service provider
 */

module.exports = {
    counterUrl: 'https://graph.facebook.com/?fields=share,og_object{likes.limit(0).summary(true),comments.limit(0).summary(true)}&id={url}&callback=?',
    convertNumber: function (counter) {
        return counter.share.share_count;
    },
    popupUrl: 'https://www.facebook.com/sharer/sharer.php?u={url}',
    popupWidth: 600,
    popupHeight: 500
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Twitter service provider
 */

var config = __webpack_require__(0);

var twitter = {
    popupUrl: config.protocol + '//twitter.com/intent/tweet?url={url}&text={title}',
    popupWidth: 600,
    popupHeight: 450,
    click: function () {
        if (!/[\.\?:\-–—]\s*$/.test(this.options.title)) {
            this.options.title += ':';
        }

        return true;
    }
};

module.exports = twitter;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Google+ service provider
 */

var config = __webpack_require__(0),
    utils  = __webpack_require__(2),
    dom    = __webpack_require__(1);

var gplus = {
    gid: 0,
    promises: {},
    popupUrl: 'https://plus.google.com/share?url={url}',
    popupWidth: 700,
    popupHeight: 500
};

module.exports = gplus;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Pocket service provider
 */

var config = __webpack_require__(0);

var pocket = {
    popupUrl: config.protocol + '//getpocket.com/save?url={url}&format=json&callback=?',
    popupWidth: 600,
    popupHeight: 300
};

module.exports = pocket;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

/**
 * Telegram service provider
 */

module.exports = {
    popupUrl: 'tg://msg?text={title}%0A{url}',
    popupWidth: 600,
    popupHeight: 450
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

/**
 * WhatsApp service provider
 */

module.exports = {
    popupUrl: 'whatsapp://send?text={title}%0A{url}',
    popupWidth: 600,
    popupHeight: 450
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

/**
 * Viber service provider
 */

module.exports = {
    popupUrl: 'viber://forward?text={title}%0A{url}',
    popupWidth: 600,
    popupHeight: 450
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * E-mail service provider
 */

var config = __webpack_require__(0);

var email = {
    popupUrl: 'mailto:?subject={title}&body={url}',
    popupWidth: 0,
    popupHeight: 0
};

module.exports = email;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var config = __webpack_require__(0);

module.exports = {
	parent: config.name,
    className: config.name + '--expanded'
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var services = __webpack_require__(4),
    Factory  = __webpack_require__(32),
    utils    = __webpack_require__(2),
    dom      = __webpack_require__(1);

var factories = {};

/**
 * Fetch data
 *
 * @param {String} service
 * @param {String} url
 * @param {Object} options
 * @return {Promise}
 */
module.exports = function (service, url, options) {
    if (!factories[service]) {
        factories[service] = {};
    }

    var counters = factories[service],
        counter  = counters[url];

    if (!options.forceUpdate && counter) {
        return counter;
    }

    counter = Factory();

    var href = utils.makeUrl(options.counterUrl, {
        url: url
    });

    services[service].counter(href, counter, url);

    counters[url] = counter;

    return counters[url];
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

/**
 * Factory function
 * 
 * This function returns function with following API:
 * 
 * - if passed argument is callback, then this callback would be callled
 *   if the value was changed
 * - if passed argument is anything but undefined or function, then this 
 *   function behaves like setter
 * - if argument isn't provided, then return value stored in closure
 * 
 * @param {Object} value
 * @return {Function}
 */
module.exports = function (value) {
    var listeners = [];
    
    return function (argument) {
        var type = typeof argument;
        
        if (type == 'undefined') {
            return value;
        }
        else if (type == 'function') {
            listeners.push(argument);
        }
        else {
            value = argument;
            
            listeners.forEach(function (listener) {
                listener(argument);
            });
        }
    };
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dom = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EL = {};

function formatTime(time) {
    var min = Math.floor(time / 60);
    var sec = Math.floor(time % 60);
    return min + ':' + (sec < 10 ? '0' + sec : sec);
}

var Player = function () {
    function Player(el) {
        var _this = this;

        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Player);

        if (el instanceof HTMLElement === false) {
            return undefined;
        }

        this.el = el;
        this.params = params;
        this.eventsListeners = {};

        if (this.params && this.params.on) {
            Object.keys(this.params.on).forEach(function (eventName) {
                _this.on(eventName, _this.params.on[eventName]);
            });
        }

        this.init();

        return this;
    }

    _createClass(Player, [{
        key: 'on',
        value: function on(events, handler, priority) {
            var self = this;
            if (typeof handler !== 'function') return self;
            var method = priority ? 'unshift' : 'push';
            events.split(' ').forEach(function (event) {
                if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                self.eventsListeners[event][method](handler);
            });
            return self;
        }
    }, {
        key: 'emit',
        value: function emit() {
            var self = this;
            if (!self.eventsListeners) return self;
            var events = void 0;
            var data = void 0;
            var context = void 0;

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            if (typeof args[0] === 'string' || Array.isArray(args[0])) {
                events = args[0];
                data = args.slice(1, args.length);
                context = self;
            } else {
                events = args[0].events;
                data = args[0].data;
                context = args[0].context || self;
            }
            var eventsArray = Array.isArray(events) ? events : events.split(' ');
            eventsArray.forEach(function (event) {
                if (self.eventsListeners && self.eventsListeners[event]) {
                    var handlers = [];
                    self.eventsListeners[event].forEach(function (eventHandler) {
                        handlers.push(eventHandler);
                    });
                    handlers.forEach(function (eventHandler) {
                        eventHandler.apply(context, data);
                    });
                }
            });
            return self;
        }
    }, {
        key: 'createPlayer',
        value: function createPlayer() {
            EL.player = (0, _dom.makeElement)('div', 'VKMusic-audio'), EL.btn = (0, _dom.makeElement)('div', 'VKMusic-audio__btn'), EL.path = (0, _dom.makeElement)('div', 'VKMusic-audio__path'), EL.pathProgress = (0, _dom.makeElement)('div', 'VKMusic-audio__path-progress'), EL.time = (0, _dom.makeElement)('div', 'VKMusic-audio__time', {
                textContent: '0:00'
            }), EL.path.appendChild(EL.pathProgress);
            EL.player.appendChild(EL.btn);
            EL.player.appendChild(EL.path);
            EL.player.appendChild(EL.time);

            this.el.appendChild(EL.player);
            this.audio = new Audio();
        }
    }, {
        key: 'setPathProgress',
        value: function setPathProgress(num) {
            EL.pathProgress.style.width = num + '%';
        }
    }, {
        key: 'setCurrentTime',
        value: function setCurrentTime(time) {
            EL.time.textContent = formatTime(time);
        }
    }, {
        key: 'setTrack',
        value: function setTrack(link) {
            EL.btn.classList.remove('VKMusic-audio__btn--pause');

            this.setPathProgress(0);
            this.setCurrentTime(0);
            this.audio.src = link;
            this.audio.load();
        }
    }, {
        key: 'onClick',
        value: function onClick() {
            this.audio.paused ? this.audio.play() : this.audio.pause();
        }
    }, {
        key: 'onPlay',
        value: function onPlay() {
            EL.btn.classList.add('VKMusic-audio__btn--pause');
            this.startProgress();
        }
    }, {
        key: 'onPause',
        value: function onPause() {
            EL.btn.classList.remove('VKMusic-audio__btn--pause');
        }
    }, {
        key: 'onEnded',
        value: function onEnded() {
            EL.btn.classList.remove('VKMusic-audio__btn--pause');
        }
    }, {
        key: 'startProgress',
        value: function startProgress() {
            var _this2 = this;

            var animationHandler = function animationHandler() {
                if (_this2.audio.paused) return;

                var num = Math.round(100 / _this2.audio.duration * _this2.audio.currentTime * 10000) / 10000;
                _this2.setPathProgress(num);
                _this2.setCurrentTime(_this2.audio.currentTime);

                _this2.emit('progress', num);

                requestAnimationFrame(animationHandler);
            };

            requestAnimationFrame(animationHandler);
        }
    }, {
        key: 'initEvents',
        value: function initEvents() {
            EL.btn.addEventListener('click', this.onClick.bind(this));

            this.audio.addEventListener('playing', this.onPlay.bind(this));
            this.audio.addEventListener('pause', this.onPause.bind(this));
            this.audio.addEventListener('ended', this.onEnded.bind(this));
        }
    }, {
        key: 'init',
        value: function init() {
            this.createPlayer();
            this.initEvents();
        }
    }]);

    return Player;
}();

exports.default = Player;

/***/ })
/******/ ]);
});
//# sourceMappingURL=all.js.map