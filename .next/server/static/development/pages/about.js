module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__(/*! url */ "url");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/vercel/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__(/*! url */ "url");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./src/components/Buttons/Buttons.js":
/*!*******************************************!*\
  !*** ./src/components/Buttons/Buttons.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Svgs_Logos_Logos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Svgs/Logos/Logos */ "./src/components/Svgs/Logos/Logos.js");
/* harmony import */ var _WithBox_WithBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WithBox/WithBox */ "./src/components/Buttons/WithBox/WithBox.js");
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\Buttons\\Buttons.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Buttons(props) {
  let button;

  if (props.type === 'withText') {
    button = __jsx(_Svgs_Logos_Logos__WEBPACK_IMPORTED_MODULE_1__["default"], {
      type: props.type,
      colors: props.colors,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 14
      }
    });
  }

  if (props.type === 'withBox') {
    button = __jsx(_WithBox_WithBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
      btnType: props.btnType,
      link: props.link,
      text: props.text,
      withSvg: props.withSvg,
      colors: props.colors,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }
    });
  }

  if (props.type === 'arrow') {
    button = __jsx(_Svgs_Logos_Logos__WEBPACK_IMPORTED_MODULE_1__["default"], {
      colors: props.colors,
      type: props.type,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 7
      }
    });
  }

  return button;
}

/* harmony default export */ __webpack_exports__["default"] = (Buttons);

/***/ }),

/***/ "./src/components/Buttons/WithBox/WithBox.js":
/*!***************************************************!*\
  !*** ./src/components/Buttons/WithBox/WithBox.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_context_stateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/context/stateContext */ "./src/utils/context/stateContext.js");
/* harmony import */ var _Svgs_Logos_Logos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Svgs/Logos/Logos */ "./src/components/Svgs/Logos/Logos.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\Buttons\\WithBox\\WithBox.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function WithBox(props) {
  const {
    setTransitionState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_utils_context_stateContext__WEBPACK_IMPORTED_MODULE_1__["StateContext"]);
  let svg = props.withSvg ? __jsx(_Svgs_Logos_Logos__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "envelop",
    colors: props.colors,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }) : null; // when the button link is clicked
  // we will update the transition state

  const click = () => {
    setTransitionState('bottom');
  };

  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: props.link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("button", {
    onClick: click,
    className: `content-center ${props.btnType}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, svg, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, props.text))));
}

/* harmony default export */ __webpack_exports__["default"] = (WithBox);

/***/ }),

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_context_pageContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/context/pageContext */ "./src/utils/context/pageContext.js");
/* harmony import */ var _MenuList_FooterMenu_FooterMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MenuList/FooterMenu/FooterMenu */ "./src/components/MenuList/FooterMenu/FooterMenu.js");
/* harmony import */ var _FooterItem_CopyRight_CopyRight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FooterItem/CopyRight/CopyRight */ "./src/components/FooterItem/CopyRight/CopyRight.js");
/* harmony import */ var _FooterItem_SocialIcons_SocialIcons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FooterItem/SocialIcons/SocialIcons */ "./src/components/FooterItem/SocialIcons/SocialIcons.js");
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\Footer\\Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Footer() {
  const {
    quotes
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_utils_context_pageContext__WEBPACK_IMPORTED_MODULE_1__["PageData"]);
  return __jsx("footer", {
    className: "content-center footer-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: `show-container ${quotes.show ? 'show' : null}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: `${quotes.show ? 'reveal' : null}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "content-center quote-p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "quote",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, quotes.quote), __jsx("span", {
    className: "author",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, "-\xA0 ", quotes.author, " \xA0-"))), __jsx("div", {
    className: `${quotes.show ? 'runner' : null}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  })), __jsx(_MenuList_FooterMenu_FooterMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), __jsx(_FooterItem_CopyRight_CopyRight__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fromTop: false,
    pColor: "#A7A7A7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "footer-socialIcons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(_FooterItem_SocialIcons_SocialIcons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    container: "footer-navicons",
    colorMode: "#116864",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/FooterItem/CopyRight/CopyRight.js":
/*!**********************************************************!*\
  !*** ./src/components/FooterItem/CopyRight/CopyRight.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_context_stateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/context/stateContext */ "./src/utils/context/stateContext.js");
/* harmony import */ var _utils_pageanimations_navbarmenu_menuClickEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/pageanimations/navbarmenu/menuClickEvents */ "./src/utils/pageanimations/navbarmenu/menuClickEvents.js");
/* harmony import */ var _utils_pageanimations_navbarmenu_navbartransition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/pageanimations/navbarmenu/navbartransition */ "./src/utils/pageanimations/navbarmenu/navbartransition.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\FooterItem\\CopyRight\\CopyRight.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function CopyRight(props) {
  const {
    setTransitionState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_utils_context_stateContext__WEBPACK_IMPORTED_MODULE_1__["StateContext"]); // check if the button click is from the top nav
  // or from the bottom nav to return a string
  // that will update the state transition

  let from = props.fromTop ? 'top' : 'bottom'; // if the privacy button clicked is from the top navbar
  // then we will call this function to close the navbar

  const closenavbar = () => {
    Object(_utils_pageanimations_navbarmenu_menuClickEvents__WEBPACK_IMPORTED_MODULE_2__["closeMenu"])();
    Object(_utils_pageanimations_navbarmenu_navbartransition__WEBPACK_IMPORTED_MODULE_3__["fadeNavbar"])();
  };

  const click = () => {
    props.fromTop ? closenavbar() : null;
    setTransitionState(from);
  };

  return __jsx("div", {
    className: "copyright",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "content-center copyright-runner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx("p", {
    style: {
      color: props.pColor
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, "\xA9 Aiman Adlawan 2020. All rights reserved."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/privacy",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("span", {
    onClick: click,
    className: "privacy",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "Privacy Policy.")))));
}

/* harmony default export */ __webpack_exports__["default"] = (CopyRight);

/***/ }),

/***/ "./src/components/FooterItem/SocialIcons/SocialIcons.js":
/*!**************************************************************!*\
  !*** ./src/components/FooterItem/SocialIcons/SocialIcons.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_context_pageContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/context/pageContext */ "./src/utils/context/pageContext.js");
/* harmony import */ var _Svgs_Socials_Socials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Svgs/Socials/Socials */ "./src/components/Svgs/Socials/Socials.js");
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\FooterItem\\SocialIcons\\SocialIcons.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function SocialIcons(props) {
  const {
    socials
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_utils_context_pageContext__WEBPACK_IMPORTED_MODULE_1__["PageData"]);

  const socialsIcon = () => {
    return socials.map((social, i) => {
      return __jsx("a", {
        href: social.link,
        key: i,
        rel: "noopener noreferrer",
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 9
        }
      }, __jsx(_Svgs_Socials_Socials__WEBPACK_IMPORTED_MODULE_2__["default"], {
        icon: social.name,
        color: props.colorMode,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }
      }));
    });
  };

  return __jsx("div", {
    className: `content-center ${props.container}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, socialsIcon());
}

/* harmony default export */ __webpack_exports__["default"] = (SocialIcons);

/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ScrollBtn_ScrollBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScrollBtn/ScrollBtn */ "./src/components/Header/ScrollBtn/ScrollBtn.js");
/* harmony import */ var _SocialIcon_SocialIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SocialIcon/SocialIcon */ "./src/components/Header/SocialIcon/SocialIcon.js");
/* harmony import */ var _HeaderTextBlock_HeaderTextBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../HeaderTextBlock/HeaderTextBlock */ "./src/components/HeaderTextBlock/HeaderTextBlock.js");
/* harmony import */ var _SubParagraphs_Subparagraphs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SubParagraphs/Subparagraphs */ "./src/components/SubParagraphs/Subparagraphs.js");
/* harmony import */ var _containers_Credential_Credential__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../containers/Credential/Credential */ "./src/containers/Credential/Credential.js");
/* harmony import */ var _Hero_Hero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Hero/Hero */ "./src/components/Header/Hero/Hero.js");
/* harmony import */ var _utils_context_pageContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/context/pageContext */ "./src/utils/context/pageContext.js");
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\Header\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function Header() {
  const {
    headers
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_utils_context_pageContext__WEBPACK_IMPORTED_MODULE_7__["PageData"]);

  let headerContent = __jsx("div", {
    className: "top-background-container",
    style: {
      background: `url('/images/${headers.background}.png') repeat center top`
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("article", {
    className: "header-text-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "header-title-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, headers.withImage.isTrue ? __jsx(_Hero_Hero__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 39
    }
  }) : null, __jsx(_HeaderTextBlock_HeaderTextBlock__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }), headers.subParagraph.isTrue ? __jsx(_SubParagraphs_Subparagraphs__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 42
    }
  }) : null, headers.withCredentials.isTrue ? __jsx(_containers_Credential_Credential__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 45
    }
  }) : null)), headers.withSocials ? __jsx(_SocialIcon_SocialIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 30
    }
  }) : null, headers.withScrollButton.isTrue ? __jsx(_ScrollBtn_ScrollBtn__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: headers.withScrollButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }) : null);

  return __jsx("header", {
    className: "top",
    style: {
      'background': headers.colormodes.close.background
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "top-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, headerContent));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Header/Hero/Hero.js":
/*!********************************************!*\
  !*** ./src/components/Header/Hero/Hero.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_context_pageContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/context/pageContext */ "./src/utils/context/pageContext.js");
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\Header\\Hero\\Hero.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Hero extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    let img = this.context.headers.withImage.image;
    return __jsx("figure", {
      className: "hero-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 7
      }
    }, __jsx("span", {
      className: "show-container hero-cover show",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }, __jsx("img", {
      className: "reveal img-reveal",
      src: img,
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }
    }), __jsx("div", {
      className: "runner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }
    })));
  }

}

_defineProperty(Hero, "contextType", _utils_context_pageContext__WEBPACK_IMPORTED_MODULE_1__["PageData"]);

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./src/components/Header/ScrollBtn/ScrollBtn.js":
/*!******************************************************!*\
  !*** ./src/components/Header/ScrollBtn/ScrollBtn.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_pageanimations_scrollanimation_scrollDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/pageanimations/scrollanimation/scrollDown */ "./src/utils/pageanimations/scrollanimation/scrollDown.js");
/* harmony import */ var _Buttons_Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Buttons/Buttons */ "./src/components/Buttons/Buttons.js");
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\Header\\ScrollBtn\\ScrollBtn.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function ScrollBtn(props) {
  return __jsx("aside", {
    className: "right-align scroll-btn-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("div", {
    onClick: _utils_pageanimations_scrollanimation_scrollDown__WEBPACK_IMPORTED_MODULE_1__["scrollDown"],
    className: "scroll-cover show",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx(_Buttons_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: props.data.type,
    colors: props.data.colors,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (ScrollBtn);

/***/ }),

/***/ "./src/components/Header/SocialIcon/SocialIcon.js":
/*!********************************************************!*\
  !*** ./src/components/Header/SocialIcon/SocialIcon.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FooterItem_SocialIcons_SocialIcons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../FooterItem/SocialIcons/SocialIcons */ "./src/components/FooterItem/SocialIcons/SocialIcons.js");
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\Header\\SocialIcon\\SocialIcon.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function SocialIcon() {
  return __jsx("aside", {
    className: "left-align left-icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "header-social-container show",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx(_FooterItem_SocialIcons_SocialIcons__WEBPACK_IMPORTED_MODULE_1__["default"], {
    container: "header-social-icons",
    colorMode: "#0C5D5A",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SocialIcon);

/***/ }),

/***/ "./src/components/HeaderTextBlock/HeaderTextBlock.js":
/*!***********************************************************!*\
  !*** ./src/components/HeaderTextBlock/HeaderTextBlock.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_context_pageContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/context/pageContext */ "./src/utils/context/pageContext.js");
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\HeaderTextBlock\\HeaderTextBlock.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function HeaderTextBlock() {
  const {
    headers
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_utils_context_pageContext__WEBPACK_IMPORTED_MODULE_1__["PageData"]);
  let headerText = headers.title.map((text, i) => {
    return __jsx("span", {
      className: "show-container show",
      key: i,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "reveal",
      style: {
        color: headers.textColors.primary
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }
    }, text), __jsx("div", {
      className: "runner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }
    }));
  });
  return __jsx("div", {
    className: "header-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "header-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, headerText), __jsx("p", {
    className: "sub-reveal-container desc show",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "sub-reveal",
    style: {
      color: headers.textColors.secondary,
      fontWeight: headers.title[0] === 'About me.' ? 500 : 600
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, headers.shortDesc)));
}

/* harmony default export */ __webpack_exports__["default"] = (HeaderTextBlock);

/***/ }),

/***/ "./src/components/MenuContainer/MenuContainer.js":
/*!*******************************************************!*\
  !*** ./src/components/MenuContainer/MenuContainer.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MenuWrapper_MenuWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuWrapper/MenuWrapper */ "./src/components/MenuContainer/MenuWrapper/MenuWrapper.js");
/* harmony import */ var _MenuRunner_MenuRunner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuRunner/MenuRunner */ "./src/components/MenuContainer/MenuRunner/MenuRunner.js");
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\MenuContainer\\MenuContainer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function MenuContainer() {
  return __jsx("div", {
    className: "menu-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(_MenuWrapper_MenuWrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), __jsx(_MenuRunner_MenuRunner__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MenuContainer);

/***/ }),

/***/ "./src/components/MenuContainer/MenuRunner/MenuRunner.js":
/*!***************************************************************!*\
  !*** ./src/components/MenuContainer/MenuRunner/MenuRunner.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\MenuContainer\\MenuRunner\\MenuRunner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function MenuRunner() {
  return __jsx("div", {
    className: "menu-runner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "menu-runner-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "menu-runners",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "menu-runners",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "menu-runners",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "menu-runners",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (MenuRunner);

/***/ }),

/***/ "./src/components/MenuContainer/MenuWrapper/MenuWrapper.js":
/*!*****************************************************************!*\
  !*** ./src/components/MenuContainer/MenuWrapper/MenuWrapper.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MenuList_TopMenuList_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../MenuList/TopMenuList/Menu */ "./src/components/MenuList/TopMenuList/Menu.js");
/* harmony import */ var _FooterItem_CopyRight_CopyRight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../FooterItem/CopyRight/CopyRight */ "./src/components/FooterItem/CopyRight/CopyRight.js");
/* harmony import */ var _FooterItem_SocialIcons_SocialIcons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../FooterItem/SocialIcons/SocialIcons */ "./src/components/FooterItem/SocialIcons/SocialIcons.js");
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\MenuContainer\\MenuWrapper\\MenuWrapper.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function MenuWrapper() {
  return __jsx("div", {
    className: "menu-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("aside", {
    className: "menu-s menu-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "square-img",
    src: '/images/menu-dots.png',
    alt: "square-dots",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "menu-s menu-middle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: " content-center nav-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx(_MenuList_TopMenuList_Menu__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "content-center nav-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(_FooterItem_CopyRight_CopyRight__WEBPACK_IMPORTED_MODULE_2__["default"], {
    fromTop: true,
    pColor: "#C6C4AF",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }))), __jsx("aside", {
    className: "menu-s menu-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "right-icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(_FooterItem_SocialIcons_SocialIcons__WEBPACK_IMPORTED_MODULE_3__["default"], {
    container: "social-navicons",
    colorMode: "#313D43",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (MenuWrapper);

/***/ }),

/***/ "./src/components/MenuList/FooterMenu/FooterMenu.js":
/*!**********************************************************!*\
  !*** ./src/components/MenuList/FooterMenu/FooterMenu.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_context_stateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/context/stateContext */ "./src/utils/context/stateContext.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\MenuList\\FooterMenu\\FooterMenu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import {setTransitionState} from '../../../utils/pageanimations/motion/common'



function FooterMenu() {
  const {
    setTransitionState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_utils_context_stateContext__WEBPACK_IMPORTED_MODULE_1__["StateContext"]);
  const menus = ['home', 'about', 'projects', 'contacts']; // update the state for the transition

  const click = () => {
    setTransitionState('bottom');
  };

  let menusList = menus.map((menu, i) => {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      key: menu === 'home' ? '/' : `/${menu}`,
      as: menu === 'home' ? '/' : `/${menu}`,
      href: `/${menu === 'home' ? '' : menu}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }
    }, __jsx("li", {
      className: "footer-menu",
      onClick: click,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }
    }, menu))), i < 3 ? __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 16
      }
    }, "|") : null);
  });
  return __jsx("nav", {
    className: "content-center footer-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx("ul", {
    className: "content-center footer-nav-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, menusList));
}

/* harmony default export */ __webpack_exports__["default"] = (FooterMenu);

/***/ }),

/***/ "./src/components/MenuList/TopMenuList/Menu.js":
/*!*****************************************************!*\
  !*** ./src/components/MenuList/TopMenuList/Menu.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_context_stateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/context/stateContext */ "./src/utils/context/stateContext.js");
/* harmony import */ var _utils_common_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/common/common */ "./src/utils/common/common.js");
/* harmony import */ var _utils_pageanimations_navbarmenu_menuListEvents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/pageanimations/navbarmenu/menuListEvents */ "./src/utils/pageanimations/navbarmenu/menuListEvents.js");
/* harmony import */ var _utils_pageanimations_motion_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/pageanimations/motion/common */ "./src/utils/pageanimations/motion/common.js");
/* harmony import */ var _utils_pageanimations_navbarmenu_menuClickEvents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/pageanimations/navbarmenu/menuClickEvents */ "./src/utils/pageanimations/navbarmenu/menuClickEvents.js");
/* harmony import */ var _utils_pageanimations_navbarmenu_navbartransition__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/pageanimations/navbarmenu/navbartransition */ "./src/utils/pageanimations/navbarmenu/navbartransition.js");
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\MenuList\\TopMenuList\\Menu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










function Menu() {
  let menus = ['home', 'about', 'projects', 'contacts'];
  const {
    state,
    setActiveRoute,
    setTransitionState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_utils_context_stateContext__WEBPACK_IMPORTED_MODULE_3__["StateContext"]);
  const currentRoute = Object(_utils_common_common__WEBPACK_IMPORTED_MODULE_4__["checkRoute"])(Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])().pathname); // set active route to the current route

  setTimeout(() => {
    setActiveRoute(currentRoute);
  }, 300); // click events

  const click = () => {
    Object(_utils_pageanimations_navbarmenu_navbartransition__WEBPACK_IMPORTED_MODULE_8__["fadeNavbar"])();
    Object(_utils_pageanimations_navbarmenu_menuClickEvents__WEBPACK_IMPORTED_MODULE_7__["closeMenu"])();
    setTransitionState('top');
  };

  const menuList = () => {
    return menus.map((menu, i) => {
      return __jsx("li", {
        className: "menu-list",
        key: i,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "menu-list-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: `content-center list-front
            ${menu === state.activeRoute ? 'active' : ''}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        key: menu === 'home' ? '/' : `/${menu}`,
        href: menu === 'home' ? '/' : `/${menu}`,
        as: menu === 'home' ? '/' : `/${menu}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 13
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 15
        }
      }, __jsx("span", {
        className: "menu-list-text",
        onMouseEnter: e => Object(_utils_pageanimations_navbarmenu_menuListEvents__WEBPACK_IMPORTED_MODULE_5__["mouseEnter"])(e, 'hoverIn'),
        onMouseOut: e => Object(_utils_pageanimations_navbarmenu_menuListEvents__WEBPACK_IMPORTED_MODULE_5__["mouseOut"])(e),
        onClick: click,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 17
        }
      }, menu)))), __jsx("div", {
        className: `content-center list-back 
            ${menu === state.activeRoute ? 'active' : ''}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }
      }, __jsx("span", {
        className: "menu-list-backer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }
      }, menu))));
    });
  };

  return __jsx("nav", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, menuList()));
}

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./src/components/Navbar/Navbar.js":
/*!*****************************************!*\
  !*** ./src/components/Navbar/Navbar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavbarLogo_NavbarLogo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavbarLogo/NavbarLogo */ "./src/components/Navbar/NavbarLogo/NavbarLogo.js");
/* harmony import */ var _NavbarMenu_NavbarMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavbarMenu/NavbarMenu */ "./src/components/Navbar/NavbarMenu/NavbarMenu.js");
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\Navbar\\Navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Navbar() {
  return __jsx("div", {
    className: "navbar-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(_NavbarLogo_NavbarLogo__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }), __jsx(_NavbarMenu_NavbarMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/components/Navbar/NavbarLogo/NavbarLogo.js":
/*!********************************************************!*\
  !*** ./src/components/Navbar/NavbarLogo/NavbarLogo.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Svgs_BrandLogo_BrandLogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Svgs/BrandLogo/BrandLogo */ "./src/components/Svgs/BrandLogo/BrandLogo.js");
/* harmony import */ var _utils_context_pageContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/context/pageContext */ "./src/utils/context/pageContext.js");
/* harmony import */ var _utils_context_stateContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/context/stateContext */ "./src/utils/context/stateContext.js");
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\Navbar\\NavbarLogo\\NavbarLogo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function NavbarLogo() {
  const {
    headers
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_utils_context_pageContext__WEBPACK_IMPORTED_MODULE_3__["PageData"]);
  const {
    state
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_utils_context_stateContext__WEBPACK_IMPORTED_MODULE_4__["StateContext"]);
  let color = state.menuIsOpen ? headers.colormodes.open.foreground : headers.colormodes.close.foreground;
  return __jsx("div", {
    className: "navbar-logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(_components_Svgs_BrandLogo_BrandLogo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    colorMode: color,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 12
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (NavbarLogo);

/***/ }),

/***/ "./src/components/Navbar/NavbarMenu/NavbarMenu.js":
/*!********************************************************!*\
  !*** ./src/components/Navbar/NavbarMenu/NavbarMenu.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Svgs_Close_Close__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Svgs/Close/Close */ "./src/components/Svgs/Close/Close.js");
/* harmony import */ var _utils_pageanimations_navbarmenu_menuHoverEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/pageanimations/navbarmenu/menuHoverEvents */ "./src/utils/pageanimations/navbarmenu/menuHoverEvents.js");
/* harmony import */ var _utils_pageanimations_navbarmenu_menuClickEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/pageanimations/navbarmenu/menuClickEvents */ "./src/utils/pageanimations/navbarmenu/menuClickEvents.js");
/* harmony import */ var _utils_pageanimations_navbarmenu_navbartransition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/pageanimations/navbarmenu/navbartransition */ "./src/utils/pageanimations/navbarmenu/navbartransition.js");
/* harmony import */ var _utils_context_pageContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/context/pageContext */ "./src/utils/context/pageContext.js");
/* harmony import */ var _utils_context_stateContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/context/stateContext */ "./src/utils/context/stateContext.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\Navbar\\NavbarMenu\\NavbarMenu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function NavbarMenu() {
  const {
    headers
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_utils_context_pageContext__WEBPACK_IMPORTED_MODULE_5__["PageData"]);
  const {
    state,
    setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_utils_context_stateContext__WEBPACK_IMPORTED_MODULE_6__["StateContext"]); // hover in functions and to set specific assigned colors

  const hoverIn = () => {
    state.menuIsOpen ? Object(_utils_pageanimations_navbarmenu_menuHoverEvents__WEBPACK_IMPORTED_MODULE_2__["mouseEnter"])(headers.colormodes.open, 'open') : Object(_utils_pageanimations_navbarmenu_menuHoverEvents__WEBPACK_IMPORTED_MODULE_2__["mouseEnter"])(headers.colormodes.close, 'close');
  }; // hover out functions and to set specific assigned colors


  const hoverOut = () => {
    state.menuIsOpen ? Object(_utils_pageanimations_navbarmenu_menuHoverEvents__WEBPACK_IMPORTED_MODULE_2__["mouseOut"])(headers.colormodes.open, 'open') : Object(_utils_pageanimations_navbarmenu_menuHoverEvents__WEBPACK_IMPORTED_MODULE_2__["mouseOut"])(headers.colormodes.close, 'close');
  }; // click events


  const click = () => {
    // fade the navbar
    Object(_utils_pageanimations_navbarmenu_navbartransition__WEBPACK_IMPORTED_MODULE_4__["fadeNavbar"])(); //check if menu is not animating. if false then
    // execute the animation

    if (!state.menuIsAnimating) {
      // change the global state after 200ms fade transition
      // from the navbar
      setTimeout(() => {
        setState({
          menuIsOpen: !state.menuIsOpen,
          menuIsAnimating: true
        });
      }, 200); // then call the animation whether the close or open the menu

      state.menuIsOpen ? Object(_utils_pageanimations_navbarmenu_menuClickEvents__WEBPACK_IMPORTED_MODULE_3__["closeMenu"])(true) : Object(_utils_pageanimations_navbarmenu_menuClickEvents__WEBPACK_IMPORTED_MODULE_3__["openMenu"])(); // the set timeout will make a set the menuIsAnimating
      // state back to false after 1700ms.

      setTimeout(() => {
        setState({
          menuIsAnimating: false
        });
      }, 1700);
    }
  };

  return __jsx("div", {
    className: "navbar-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "front content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_7__["motion"].span, {
    className: "content-center front-text",
    style: {
      'color': headers.colormodes.close.foreground
    },
    onMouseOver: hoverIn,
    onMouseLeave: hoverOut,
    whileTap: {
      scale: 0.95
    },
    onClick: click,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, state.menuIsOpen ? __jsx(_Svgs_Close_Close__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 33
    }
  }) : 'Menu')), __jsx("div", {
    className: "middle content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "middle-span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "back content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "back-span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (NavbarMenu);

/***/ }),

/***/ "./src/components/SectionBlocks/Components/Description.js":
/*!****************************************************************!*\
  !*** ./src/components/SectionBlocks/Components/Description.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_context_stateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/context/stateContext */ "./src/utils/context/stateContext.js");
/* harmony import */ var _Buttons_Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Buttons/Buttons */ "./src/components/Buttons/Buttons.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\SectionBlocks\\Components\\Description.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Description(props) {
  const {
    setTransitionState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_utils_context_stateContext__WEBPACK_IMPORTED_MODULE_1__["StateContext"]); // set transition state

  const click = () => {
    setTransitionState('bottom');
  };

  return __jsx("div", {
    className: "section-block-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "right-align right-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "show-container show",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "reveal desc",
    style: {
      color: props.textcolor
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, props.desc), props.withArrow ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/projects",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "block-arrow",
    onClick: click,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 19
    }
  }, __jsx(_Buttons_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "arrow",
    colors: props.colors,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  })))) : null), __jsx("div", {
    className: "runner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Description);

/***/ }),

/***/ "./src/components/SectionBlocks/Components/Title.js":
/*!**********************************************************!*\
  !*** ./src/components/SectionBlocks/Components/Title.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\SectionBlocks\\Components\\Title.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Title(props) {
  return __jsx("div", {
    className: "section-block-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "left-align left-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "head2",
    style: {
      color: props.textcolor
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "show-container show",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "reveal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 15
    }
  }, props.title)), __jsx("div", {
    className: "runner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./src/components/SectionBlocks/SectionBlocks.js":
/*!*******************************************************!*\
  !*** ./src/components/SectionBlocks/SectionBlocks.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_context_pageContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/context/pageContext */ "./src/utils/context/pageContext.js");
/* harmony import */ var _Components_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/Title */ "./src/components/SectionBlocks/Components/Title.js");
/* harmony import */ var _Components_Description__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Description */ "./src/components/SectionBlocks/Components/Description.js");
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\SectionBlocks\\SectionBlocks.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function SectionBlocks(props) {
  const {
    withBlocks,
    projectBlocks
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_utils_context_pageContext__WEBPACK_IMPORTED_MODULE_1__["PageData"]);
  let data = findData(props.title, withBlocks, projectBlocks);

  let blocks = __jsx("div", {
    className: "section-block-background",
    style: {
      background: `url('${data.background}') repeat center top`
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(_Components_Title__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: data.blockTitle,
    textcolor: data.textcolor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), __jsx(_Components_Description__WEBPACK_IMPORTED_MODULE_3__["default"], {
    textcolor: data.textcolor,
    desc: data.blockDesc,
    withArrow: data.withArrow,
    colors: data.textcolor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }));

  return __jsx("section", {
    className: "section-block-container",
    style: {
      backgroundColor: data.backgroundColor
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, blocks);
}

/* harmony default export */ __webpack_exports__["default"] = (SectionBlocks);

const findData = (title, withBlocks, projectBlocks) => {
  if (title === 'project' || title === 'skills') return withBlocks;
  if (title === 'view more') return projectBlocks;
};

/***/ }),

/***/ "./src/components/SubParagraphs/ParagraphLinks/ParagraphLinks.js":
/*!***********************************************************************!*\
  !*** ./src/components/SubParagraphs/ParagraphLinks/ParagraphLinks.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_context_stateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/context/stateContext */ "./src/utils/context/stateContext.js");
/* harmony import */ var _utils_pageanimations_motion_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/pageanimations/motion/common */ "./src/utils/pageanimations/motion/common.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\SubParagraphs\\ParagraphLinks\\ParagraphLinks.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function ParagraphLinks(props) {
  const {
    state,
    setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_utils_context_stateContext__WEBPACK_IMPORTED_MODULE_1__["StateContext"]);

  const click = () => {
    setState({
      exitMode: 'bottomExit',
      isTransitioning: Object(_utils_pageanimations_motion_common__WEBPACK_IMPORTED_MODULE_2__["setTransitionState"])(state.isTransitioning),
      animation: 'bottomAnimation'
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("h3", {
    className: "p-wrapper head3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "show-container p-container show",
    style: {
      color: props.colors.primary
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "reveal p-reveal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, "Connect with me"), __jsx("div", {
    className: "runner p-runner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }))), __jsx("p", {
    className: "sub-reveal-container p-desc p-links desc show",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "sub-reveal p-desc-content",
    style: {
      color: props.colors.secondary,
      fontWeight: 500
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, " I'm excited to", __jsx("a", {
    href: "https://www.linkedin.com/",
    rel: "noopener noreferrer",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "links",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, " connect")), " with you great people like you. Click", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/credentials",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "links",
    onClick: click,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, " here"))), " to see some of my credentials.")));
}

/* harmony default export */ __webpack_exports__["default"] = (ParagraphLinks);

/***/ }),

/***/ "./src/components/SubParagraphs/Subparagraphs.js":
/*!*******************************************************!*\
  !*** ./src/components/SubParagraphs/Subparagraphs.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ParagraphLinks_ParagraphLinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParagraphLinks/ParagraphLinks */ "./src/components/SubParagraphs/ParagraphLinks/ParagraphLinks.js");
/* harmony import */ var _utils_context_pageContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/context/pageContext */ "./src/utils/context/pageContext.js");
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\SubParagraphs\\Subparagraphs.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Subparagraphs() {
  const {
    headers
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_utils_context_pageContext__WEBPACK_IMPORTED_MODULE_2__["PageData"]);
  let sections = headers.subParagraph.content.map((text, i) => {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 7
      }
    }, __jsx("h3", {
      className: "p-wrapper head3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }, __jsx("span", {
      className: "show-container p-container show",
      style: {
        color: headers.textColors.primary
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "reveal p-reveal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }
    }, text.title), __jsx("div", {
      className: "runner p-runner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }
    }))), __jsx("p", {
      className: "sub-reveal-container p-desc desc show",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }
    }, __jsx("span", {
      className: "sub-reveal p-desc-content",
      style: {
        color: headers.textColors.secondary,
        fontWeight: headers.title[0] === 'About me.' ? 500 : 600
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }
    }, text.text)));
  });
  return __jsx("div", {
    className: "paragraphs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, sections, headers.subParagraph.specialLinks.isTrue ? __jsx(_ParagraphLinks_ParagraphLinks__WEBPACK_IMPORTED_MODULE_1__["default"], {
    colors: headers.textColors,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }) : null);
}

/* harmony default export */ __webpack_exports__["default"] = (Subparagraphs);

/***/ }),

/***/ "./src/components/Svgs/BrandLogo/BrandLogo.js":
/*!****************************************************!*\
  !*** ./src/components/Svgs/BrandLogo/BrandLogo.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\Svgs\\BrandLogo\\BrandLogo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function BrandLogo(props) {
  return __jsx("svg", {
    className: "navbar-logo-svg",
    width: "224",
    height: "225",
    viewBox: "0 0 224 225",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("g", {
    clipPath: "url(#clip0)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("path", {
    d: "M58.8879 134.302H61.6318C67.4012 134.302 72.4671 132.367 76.8293 128.498C81.2618 124.557 83.4781 120.018 83.4781 114.882L83.6892 113.51V112.137L83.9003 108.866V102.85C83.9003 98.7681 81.8247 96.7284 77.6736 96.7284H72.9244L72.1856 96.8335L68.0697 97.1499C66.0997 97.4319 64.6925 97.5724 63.8482 97.5724C58.1491 97.5724 52.8723 99.7182 48.0175 104.011C44.6404 107.036 42.9518 111.329 42.9518 116.887V118.998C42.9518 123.713 44.4645 127.441 47.4899 130.186C50.5857 132.93 54.3849 134.302 58.8879 134.302ZM35.3531 66.8587C30.6391 66.8587 28.2821 63.833 28.2821 57.7818C28.2821 53.2785 32.0814 49.3732 39.6801 46.0662C47.3492 42.6888 55.2996 41 63.5315 41H68.8084C75.9146 41 82.1765 42.3369 87.594 45.0107C93.0117 47.6142 97.1276 51.1675 99.9415 55.6708C102.827 60.1741 104.586 66.0495 105.218 73.2969C105.36 74.9857 105.43 83.183 105.43 97.8887C105.43 112.595 105.605 121.074 105.957 123.326C106.38 125.507 107.505 128.18 109.335 131.347C111.235 134.514 112.184 137.116 112.184 139.157C112.184 141.198 111.2 142.957 109.23 144.434C107.33 145.842 104.55 146.546 100.892 146.546C97.2331 146.546 93.2579 145.666 88.966 143.907C84.6742 142.077 81.5433 141.162 79.5733 141.162C79.3621 141.162 75.8442 142.429 69.0195 144.962C62.1948 147.425 56.4254 148.656 51.7114 148.656H49.3895C41.5095 148.656 34.7902 146.159 29.2319 141.162C23.744 136.167 21 129.061 21 119.842C21 110.625 24.0255 103.448 30.0762 98.3112C36.1271 93.1048 43.4795 89.551 52.1335 87.6511C54.7368 87.0882 59.0638 86.3494 65.1146 85.4346C71.1654 84.5199 75.2814 83.57 77.4624 82.5849C81.2618 80.8259 83.1615 77.5188 83.1615 72.6637C83.1615 67.7382 81.5433 63.9034 78.3068 61.1592C75.0703 58.3446 71.2006 56.9374 66.6977 56.9374C62.2651 56.9374 56.4254 58.591 49.1785 61.898C41.9316 65.2051 37.3231 66.8587 35.3531 66.8587ZM148.933 134.302H151.677C157.446 134.302 162.511 132.367 166.873 128.498C171.306 124.557 173.523 120.018 173.523 114.882L173.734 113.51V112.137L173.945 108.866V102.85C173.945 98.7681 171.869 96.7284 167.718 96.7284H162.969L162.23 96.8335L158.114 97.1499C156.144 97.4319 154.737 97.5724 153.892 97.5724C148.194 97.5724 142.917 99.7182 138.062 104.011C134.685 107.036 132.996 111.329 132.996 116.887V118.998C132.996 123.713 134.509 127.441 137.534 130.186C140.63 132.93 144.429 134.302 148.933 134.302ZM125.398 66.8587C120.683 66.8587 118.326 63.833 118.326 57.7818C118.326 53.2785 122.125 49.3732 129.725 46.0662C137.394 42.6888 145.344 41 153.576 41H158.853C165.959 41 172.221 42.3369 177.638 45.0107C183.056 47.6142 187.172 51.1675 189.987 55.6708C192.871 60.1741 194.63 66.0495 195.263 73.2969C195.404 74.9857 195.475 83.183 195.475 97.8887C195.475 112.595 195.65 121.074 196.002 123.326C196.424 125.507 197.55 128.18 199.379 131.347C201.279 134.514 202.229 137.116 202.229 139.157C202.229 141.198 201.244 142.957 199.274 144.434C197.374 145.842 194.594 146.546 190.937 146.546C187.278 146.546 183.302 145.666 179.011 143.907C174.718 142.077 171.588 141.162 169.617 141.162C169.406 141.162 165.889 142.429 159.064 144.962C152.24 147.425 146.47 148.656 141.756 148.656H139.434C131.554 148.656 124.835 146.159 119.276 141.162C113.788 136.167 111.044 129.061 111.044 119.842C111.044 110.625 114.07 103.448 120.12 98.3112C126.171 93.1048 133.524 89.551 142.178 87.6511C144.781 87.0882 149.109 86.3494 155.16 85.4346C161.209 84.5199 165.326 83.57 167.507 82.5849C171.306 80.8259 173.206 77.5188 173.206 72.6637C173.206 67.7382 171.588 63.9034 168.351 61.1592C165.115 58.3446 161.245 56.9374 156.742 56.9374C152.309 56.9374 146.47 58.591 139.223 61.898C131.976 65.2051 127.368 66.8587 125.398 66.8587Z",
    fill: props.colorMode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M40.2497 167.724V167.908C40.2497 168.43 40.0962 168.875 39.7892 169.243C39.4924 169.602 39.0319 169.781 38.4076 169.781H38.162L37.6861 169.72C37.4097 169.72 37.1437 169.592 36.8879 169.335C36.632 169.08 36.504 168.696 36.504 168.184V168L36.5808 167.447C36.5808 167.233 36.7088 166.967 36.9646 166.649C37.2306 166.332 37.5684 166.173 37.9777 166.173L38.3308 166.126H38.6378L39.0676 166.188C39.3338 166.188 39.5947 166.321 39.8506 166.587C40.1166 166.844 40.2497 167.222 40.2497 167.724ZM39.5282 174.202L39.3593 178.331L39.3286 178.746L39.2826 180.006V180.604C39.2826 182.078 39.3235 183.045 39.4054 183.506C39.4975 183.966 39.6663 184.416 39.912 184.856C40.1576 185.286 40.2804 185.598 40.2804 185.793V185.931C40.2804 186.432 40.0246 186.831 39.5129 187.129C39.0011 187.426 38.3053 187.574 37.4252 187.574H37.0413C36.5297 187.574 36.1408 187.461 35.8747 187.236C35.6086 187 35.4756 186.75 35.4756 186.484V186.147C35.4756 186.013 35.5933 185.542 35.8287 184.734C36.064 183.915 36.1817 182.804 36.1817 181.402C36.2124 181.003 36.2278 180.727 36.2278 180.574L36.2738 179.729L36.3045 179.314C36.3557 178.598 36.3812 178.041 36.3812 177.641L36.3966 177.027C36.3966 176.259 36.2687 175.578 36.0128 174.985C35.7672 174.392 35.6444 174.023 35.6444 173.88C35.6444 173.143 36.3403 172.774 37.7321 172.774H38.2848C38.8067 172.774 39.1445 172.913 39.2979 173.189C39.4514 173.455 39.5282 173.793 39.5282 174.202ZM47.943 173.481C48.731 173.184 49.5394 173.036 50.3683 173.036C51.1973 173.036 52.057 173.281 52.9473 173.773C53.8479 174.264 54.3391 174.509 54.421 174.509C54.5029 174.509 55.0555 174.259 56.0789 173.757C57.1023 173.256 58.0233 173.004 58.842 173.004C59.671 173.004 60.3516 173.179 60.8838 173.527C61.4261 173.865 61.8355 174.269 62.1118 174.739C62.6337 175.64 62.8947 177.641 62.8947 180.743C62.8947 182.134 62.9049 182.933 62.9254 183.137C62.9561 183.332 63.0277 183.684 63.1403 184.196C63.2631 184.698 63.3245 185.112 63.3245 185.44C63.3245 185.757 63.1915 186.09 62.9254 186.437C62.6593 186.786 62.3063 186.96 61.8662 186.96C60.9963 186.96 60.4795 186.606 60.3157 185.901C60.1929 185.389 60.0497 183.895 59.8859 181.418C59.7324 178.941 59.5635 177.487 59.3793 177.058C59.0109 176.157 58.228 175.706 57.0307 175.706C56.2631 175.706 55.6645 176.188 55.2346 177.15C54.6103 178.532 54.2982 180.497 54.2982 183.045L54.4517 185.255C54.4517 186.034 54.1651 186.622 53.5921 187.021C53.2237 187.277 52.7324 187.405 52.1184 187.405C51.5146 187.405 51.1154 187.343 50.921 187.22C50.5833 187.016 50.4144 186.581 50.4144 185.916C50.4144 185.793 50.5117 185.292 50.7061 184.411C50.9108 183.521 51.0131 182.078 51.0131 180.082C51.0131 178.076 50.8647 176.802 50.568 176.259C50.2712 175.706 49.7543 175.43 49.0175 175.43C48.2806 175.43 47.6257 175.681 47.0526 176.183C46.4897 176.684 46.0752 177.232 45.8092 177.825C45.5533 178.419 45.323 179.831 45.1184 182.062C44.924 184.294 44.7857 185.573 44.7039 185.901C44.5606 186.463 44.1462 186.745 43.4605 186.745C42.7851 186.745 42.3194 186.545 42.0635 186.147C41.8179 185.737 41.6951 185.241 41.6951 184.657L41.7719 184.12L42.0635 183.06C42.1863 182.569 42.258 181.996 42.2785 181.341C42.432 177.277 42.5497 174.959 42.6315 174.387C42.7134 173.813 43.0819 173.527 43.7368 173.527L46.0241 173.91C46.5153 173.91 47.1549 173.768 47.943 173.481ZM69.5134 185.747H69.9125C70.7517 185.747 71.4885 185.466 72.1231 184.903C72.7678 184.33 73.0901 183.67 73.0901 182.922L73.1208 182.722V182.523L73.1515 182.047V181.172C73.1515 180.579 72.8496 180.282 72.2459 180.282H71.555L71.4476 180.297L70.8489 180.343C70.5623 180.384 70.3577 180.405 70.2349 180.405C69.4059 180.405 68.6384 180.716 67.9322 181.341C67.441 181.781 67.1954 182.405 67.1954 183.214V183.521C67.1954 184.207 67.4154 184.749 67.8555 185.148C68.3057 185.547 68.8584 185.747 69.5134 185.747ZM66.0901 175.937C65.4044 175.937 65.0617 175.497 65.0617 174.617C65.0617 173.961 65.6143 173.393 66.7196 172.913C67.835 172.422 68.9915 172.176 70.1888 172.176H70.9564C71.9899 172.176 72.9008 172.37 73.6888 172.759C74.4768 173.138 75.0755 173.655 75.4848 174.31C75.9044 174.964 76.1603 175.819 76.2524 176.873C76.2729 177.119 76.2831 178.312 76.2831 180.451C76.2831 182.59 76.3087 183.823 76.3599 184.15C76.4213 184.467 76.585 184.856 76.8511 185.317C77.1274 185.777 77.2655 186.156 77.2655 186.453C77.2655 186.75 77.1223 187.005 76.8357 187.22C76.5594 187.426 76.1552 187.528 75.6231 187.528C75.0909 187.528 74.5126 187.4 73.8883 187.144C73.2641 186.878 72.8087 186.745 72.5221 186.745C72.4915 186.745 71.9797 186.929 70.987 187.297C69.9944 187.656 69.1552 187.835 68.4695 187.835H68.1318C66.9856 187.835 66.0083 187.471 65.1998 186.745C64.4016 186.018 64.0024 184.984 64.0024 183.644C64.0024 182.303 64.4424 181.259 65.3226 180.512C66.2027 179.754 67.2722 179.237 68.5309 178.961C68.9095 178.88 69.5389 178.772 70.4191 178.639C71.2992 178.505 71.8979 178.368 72.2151 178.224C72.7677 177.969 73.0441 177.487 73.0441 176.781C73.0441 176.065 72.8087 175.507 72.3379 175.108C71.8671 174.698 71.3043 174.494 70.6494 174.494C70.0046 174.494 69.1552 174.734 68.1011 175.215C67.047 175.696 66.3767 175.937 66.0901 175.937ZM92.4193 185.839C92.4193 186.597 91.7592 186.975 90.4391 186.975C89.692 186.975 89.1905 186.796 88.9347 186.437C88.8118 186.263 88.7504 185.855 88.7504 185.209L88.7044 184.227C88.6327 183.153 88.597 182.073 88.597 180.988C88.597 178.644 88.3922 177.073 87.9829 176.275C87.5838 175.466 86.9083 175.062 85.9566 175.062C85.3221 175.062 84.7337 175.251 84.1913 175.63C83.6591 176.009 83.2498 176.535 82.9632 177.211C82.3696 178.593 82.0728 181.146 82.0728 184.872C82.0728 185.721 81.9091 186.32 81.5816 186.668C81.2643 187.016 80.855 187.19 80.3535 187.19H80.0465C78.9003 187.19 78.3272 186.734 78.3272 185.823V185.455C78.3272 185.343 78.3886 185.097 78.5114 184.718L78.757 184.012C79.0026 183.183 79.1254 181.408 79.1254 178.685L79.2022 174.125C79.2022 173.542 79.5195 173.25 80.154 173.25C80.7885 173.25 81.4128 173.46 82.0268 173.88C82.6511 174.299 83.045 174.509 83.2088 174.509C83.3828 174.509 83.6847 174.392 84.1145 174.156C85.5575 173.368 86.7139 172.974 87.5838 172.974H87.9829C89.5487 172.974 90.6488 173.68 91.2833 175.093C91.5903 175.758 91.7439 177.191 91.7439 179.391V179.499C91.7439 179.682 91.7388 179.867 91.7286 180.051C91.7286 180.553 91.7286 180.813 91.7286 180.834C91.7286 181.029 91.7286 181.218 91.7286 181.402C91.7286 181.545 91.7286 181.684 91.7286 181.817C91.7286 182.605 91.7541 183.142 91.8053 183.429C91.8769 183.818 91.9946 184.222 92.1584 184.641C92.3324 185.102 92.4193 185.501 92.4193 185.839Z",
    fill: props.colorMode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M116.498 180.236V181.402C116.498 182.62 116.774 183.638 117.327 184.457C117.89 185.266 118.551 185.67 119.308 185.67H119.737C120.903 185.67 121.804 185.204 122.439 184.273C123.084 183.341 123.406 181.955 123.406 180.113C123.426 179.888 123.437 179.724 123.437 179.621L123.468 179.314L123.483 178.669V177.58C123.483 175.492 122.649 174.447 120.981 174.447H120.382C119.297 174.447 118.377 174.996 117.619 176.09C116.871 177.186 116.498 178.567 116.498 180.236ZM113.551 180.942C113.551 179.877 113.74 178.792 114.119 177.687C114.498 176.581 115.029 175.64 115.715 174.862C116.401 174.074 117.174 173.506 118.034 173.158C118.893 172.8 119.911 172.621 121.088 172.621C122.275 172.621 123.012 172.406 123.299 171.976C123.586 171.536 123.729 170.568 123.729 169.074C123.729 168.798 123.683 168.429 123.59 167.97C123.498 167.509 123.452 167.242 123.452 167.171C123.452 166.731 123.642 166.332 124.02 165.973C124.399 165.605 124.895 165.421 125.509 165.421H125.816C126.297 165.421 126.656 165.533 126.891 165.759C127.126 165.984 127.244 166.455 127.244 167.171V168.598L127.213 169.32C127.203 169.565 127.198 169.924 127.198 170.394C127.198 170.855 127.121 172.339 126.967 174.847C126.814 177.355 126.737 179.079 126.737 180.02L126.722 180.389C126.712 180.634 126.707 180.87 126.707 181.095L126.691 181.448C126.691 181.448 126.691 181.847 126.691 182.646C126.691 183.679 126.773 184.457 126.937 184.979C127.101 185.501 127.182 185.874 127.182 186.1C127.182 186.325 127.055 186.56 126.798 186.806C126.543 187.051 126.144 187.174 125.602 187.174C125.069 187.174 124.552 187.088 124.051 186.914C123.549 186.729 123.181 186.638 122.946 186.638C122.71 186.638 122.404 186.708 122.024 186.852C120.878 187.271 119.83 187.482 118.878 187.482C118.857 187.482 118.836 187.482 118.817 187.482H118.463C116.918 187.482 115.71 186.919 114.841 185.793C113.981 184.657 113.551 183.167 113.551 181.325V180.942ZM129.503 166.342C129.503 165.595 130.204 165.221 131.606 165.221H131.882C132.466 165.221 132.865 165.364 133.08 165.651C133.294 165.927 133.402 166.469 133.402 167.278L133.279 169.565C133.249 169.924 133.233 170.118 133.233 170.149L133.203 170.732C133.182 171.111 133.162 171.495 133.141 171.884L133.095 172.468L133.049 173.342C132.886 176.454 132.803 178.751 132.803 180.236C132.803 181.709 132.87 182.768 133.003 183.413C133.136 184.058 133.345 184.606 133.632 185.056C133.919 185.506 134.062 185.804 134.062 185.946V186.131C134.062 186.581 133.837 186.939 133.387 187.206C132.946 187.471 132.348 187.605 131.591 187.605H130.793C130.321 187.605 129.907 187.471 129.549 187.206C129.201 186.929 129.027 186.617 129.027 186.268V185.855L129.119 185.209C129.242 184.319 129.313 183.654 129.334 183.214C129.364 182.764 129.411 182.145 129.472 181.356C129.533 180.558 129.631 178.864 129.764 176.275C129.907 173.675 129.978 172.278 129.978 172.083L130.04 170.932L130.071 169.796C130.071 168.711 129.974 167.938 129.779 167.478C129.595 167.007 129.503 166.628 129.503 166.342ZM140.067 185.747H140.466C141.305 185.747 142.042 185.466 142.677 184.903C143.321 184.33 143.643 183.669 143.643 182.922L143.674 182.722V182.523L143.705 182.047V181.172C143.705 180.578 143.403 180.282 142.799 180.282H142.109L142.001 180.296L141.402 180.343C141.116 180.384 140.911 180.405 140.788 180.405C139.959 180.405 139.192 180.716 138.486 181.341C137.994 181.781 137.749 182.405 137.749 183.214V183.521C137.749 184.207 137.969 184.749 138.409 185.148C138.859 185.547 139.412 185.747 140.067 185.747ZM136.643 175.937C135.958 175.937 135.615 175.497 135.615 174.616C135.615 173.961 136.168 173.393 137.273 172.913C138.388 172.421 139.545 172.176 140.742 172.176H141.51C142.543 172.176 143.454 172.37 144.243 172.758C145.031 173.138 145.629 173.655 146.039 174.31C146.458 174.964 146.714 175.819 146.806 176.873C146.827 177.119 146.836 178.312 146.836 180.451C146.836 182.59 146.862 183.823 146.913 184.15C146.975 184.467 147.138 184.856 147.404 185.317C147.681 185.777 147.819 186.156 147.819 186.453C147.819 186.75 147.675 187.005 147.39 187.22C147.112 187.426 146.709 187.528 146.176 187.528C145.645 187.528 145.066 187.4 144.442 187.144C143.817 186.877 143.362 186.745 143.076 186.745C143.045 186.745 142.533 186.929 141.541 187.297C140.548 187.656 139.709 187.834 139.023 187.834H138.685C137.539 187.834 136.562 187.471 135.753 186.745C134.955 186.018 134.556 184.984 134.556 183.644C134.556 182.303 134.996 181.259 135.876 180.512C136.756 179.754 137.825 179.237 139.085 178.961C139.463 178.88 140.093 178.772 140.972 178.639C141.852 178.505 142.452 178.368 142.769 178.224C143.321 177.969 143.597 177.487 143.597 176.781C143.597 176.065 143.362 175.507 142.892 175.108C142.42 174.698 141.857 174.494 141.203 174.494C140.558 174.494 139.709 174.734 138.655 175.215C137.6 175.696 136.93 175.937 136.643 175.937ZM163.218 186.898C162.492 186.898 161.862 186.443 161.331 185.531C160.982 184.928 160.43 183.7 159.672 181.847C158.926 179.985 158.5 179.054 158.398 179.054C158.367 179.054 157.943 179.923 157.124 181.663C156.305 183.392 155.696 184.58 155.297 185.225C154.663 186.238 154.054 186.745 153.471 186.745C153.102 186.745 152.713 186.601 152.304 186.314C151.905 186.018 151.583 185.537 151.337 184.872C151.306 184.79 151.071 183.909 150.631 182.231C150.2 180.553 149.755 178.977 149.295 177.503C148.845 176.029 148.62 175.031 148.62 174.509C148.62 173.987 148.733 173.613 148.958 173.388C149.183 173.163 149.412 173.05 149.648 173.05C150.6 173.05 151.27 173.444 151.659 174.232C151.803 174.519 151.986 175.235 152.211 176.382C153.286 180.588 154.007 182.82 154.376 183.075C154.765 183.075 155.333 181.776 156.08 179.176C156.387 178.111 156.586 177.154 156.679 176.305C156.781 175.455 156.848 174.964 156.878 174.832L157.017 174.34C157.323 173.532 157.932 173.128 158.843 173.128C159.765 173.128 160.404 173.593 160.762 174.524C160.905 174.903 161.039 175.568 161.162 176.521C161.284 177.462 161.458 178.408 161.683 179.36C162.246 181.796 162.691 183.014 163.018 183.014C163.418 183.014 164.042 181.74 164.892 179.191C165.157 178.393 165.434 177.416 165.72 176.259C166.017 175.103 166.222 174.407 166.334 174.171C166.703 173.444 167.286 173.082 168.085 173.082C168.504 173.082 168.714 173.49 168.714 174.31C168.714 174.79 168.192 176.623 167.148 179.805C166.104 182.979 165.475 184.794 165.26 185.255C165.045 185.706 164.738 186.094 164.339 186.423C163.94 186.74 163.567 186.898 163.218 186.898ZM174.181 185.747H174.581C175.42 185.747 176.157 185.466 176.791 184.903C177.436 184.33 177.758 183.669 177.758 182.922L177.789 182.722V182.523L177.819 182.047V181.172C177.819 180.578 177.518 180.282 176.914 180.282H176.223L176.116 180.296L175.517 180.343C175.23 180.384 175.026 180.405 174.903 180.405C174.074 180.405 173.307 180.716 172.6 181.341C172.109 181.781 171.863 182.405 171.863 183.214V183.521C171.863 184.207 172.084 184.749 172.524 185.148C172.974 185.547 173.527 185.747 174.181 185.747ZM170.758 175.937C170.072 175.937 169.73 175.497 169.73 174.616C169.73 173.961 170.283 173.393 171.388 172.913C172.503 172.421 173.659 172.176 174.857 172.176H175.624C176.658 172.176 177.569 172.37 178.357 172.758C179.144 173.138 179.744 173.655 180.152 174.31C180.572 174.964 180.828 175.819 180.921 176.873C180.94 177.119 180.951 178.312 180.951 180.451C180.951 182.59 180.977 183.823 181.028 184.15C181.09 184.467 181.253 184.856 181.519 185.317C181.795 185.777 181.934 186.156 181.934 186.453C181.934 186.75 181.79 187.005 181.503 187.22C181.227 187.426 180.823 187.528 180.291 187.528C179.758 187.528 179.181 187.4 178.556 187.144C177.932 186.877 177.476 186.745 177.19 186.745C177.16 186.745 176.648 186.929 175.655 187.297C174.662 187.656 173.823 187.834 173.138 187.834H172.8C171.653 187.834 170.677 187.471 169.868 186.745C169.069 186.018 168.671 184.984 168.671 183.644C168.671 182.303 169.111 181.259 169.991 180.512C170.87 179.754 171.94 179.237 173.199 178.961C173.578 178.88 174.207 178.772 175.087 178.639C175.967 178.505 176.566 178.368 176.883 178.224C177.436 177.969 177.712 177.487 177.712 176.781C177.712 176.065 177.476 175.507 177.006 175.108C176.535 174.698 175.972 174.494 175.318 174.494C174.672 174.494 173.823 174.734 172.769 175.215C171.715 175.696 171.045 175.937 170.758 175.937ZM197.087 185.839C197.087 186.596 196.427 186.975 195.107 186.975C194.36 186.975 193.859 186.796 193.602 186.437C193.479 186.263 193.419 185.855 193.419 185.209L193.372 184.227C193.301 183.153 193.265 182.073 193.265 180.988C193.265 178.644 193.06 177.073 192.651 176.275C192.251 175.466 191.576 175.062 190.624 175.062C189.99 175.062 189.401 175.251 188.859 175.629C188.327 176.009 187.918 176.535 187.631 177.211C187.038 178.593 186.741 181.146 186.741 184.872C186.741 185.721 186.577 186.32 186.25 186.668C185.932 187.016 185.523 187.19 185.022 187.19H184.714C183.568 187.19 182.995 186.734 182.995 185.823V185.455C182.995 185.343 183.057 185.097 183.179 184.718L183.425 184.012C183.671 183.183 183.793 181.408 183.793 178.685L183.87 174.125C183.87 173.542 184.187 173.25 184.822 173.25C185.457 173.25 186.081 173.46 186.695 173.88C187.319 174.299 187.713 174.509 187.877 174.509C188.05 174.509 188.353 174.391 188.782 174.156C190.226 173.368 191.382 172.974 192.251 172.974H192.651C194.216 172.974 195.317 173.68 195.951 175.093C196.258 175.758 196.412 177.191 196.412 179.391V179.499C196.412 179.682 196.407 179.867 196.396 180.051C196.396 180.553 196.396 180.813 196.396 180.834C196.396 181.028 196.396 181.218 196.396 181.402C196.396 181.545 196.396 181.684 196.396 181.816C196.396 182.604 196.422 183.142 196.473 183.429C196.545 183.818 196.663 184.222 196.827 184.641C197.001 185.102 197.087 185.501 197.087 185.839Z",
    fill: props.colorMode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }), __jsx("path", {
    className: "top-line",
    d: "M12.7715 4.42139L209.262 4.87417",
    stroke: props.colorMode,
    strokeWidth: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }), __jsx("path", {
    className: "right-line",
    d: "M219.579 13.2642L220.033 209.77",
    stroke: props.colorMode,
    strokeWidth: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx("path", {
    className: "bottom-line",
    d: "M210.737 221.07H14.2461",
    stroke: props.colorMode,
    strokeWidth: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }), __jsx("path", {
    className: "left-line",
    d: "M4.4209 211.736V15.2292",
    stroke: props.colorMode,
    strokeWidth: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  })), __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("clipPath", {
    id: "clip0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("rect", {
    width: "224",
    height: "225",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (BrandLogo);

/***/ }),

/***/ "./src/components/Svgs/Close/Close.js":
/*!********************************************!*\
  !*** ./src/components/Svgs/Close/Close.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\Svgs\\Close\\Close.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Close() {
  return __jsx("svg", {
    className: "menu-close",
    width: "34",
    height: "34",
    viewBox: "0 0 34 34",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.56073 29.6523C0.698801 30.5143 0.698802 31.9117 1.56073 32.7736C2.42266 33.6356 3.82011 33.6356 4.68204 32.7736L17.1671 20.2886L29.6523 32.7739C30.5143 33.6358 31.9117 33.6358 32.7736 32.7739C33.6356 31.912 33.6356 30.5145 32.7736 29.6526L20.2884 17.1673L32.7739 4.68182C33.6358 3.81989 33.6358 2.42244 32.7739 1.56051C31.9119 0.698583 30.5145 0.698579 29.6526 1.56051L17.1671 14.046L4.68182 1.56075C3.8199 0.698824 2.42244 0.698825 1.56051 1.56075C0.698583 2.42268 0.698579 3.82014 1.56051 4.68206L14.0458 17.1673L1.56073 29.6523Z",
    fill: "#EBE9CD",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Close);

/***/ }),

/***/ "./src/components/Svgs/Logos/Logos.js":
/*!********************************************!*\
  !*** ./src/components/Svgs/Logos/Logos.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ScrollSvgs_WithTexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScrollSvgs/WithTexts */ "./src/components/Svgs/Logos/ScrollSvgs/WithTexts.js");
/* harmony import */ var _ScrollSvgs_ArrowRight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScrollSvgs/ArrowRight */ "./src/components/Svgs/Logos/ScrollSvgs/ArrowRight.js");
/* harmony import */ var _ScrollSvgs_Envelop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ScrollSvgs/Envelop */ "./src/components/Svgs/Logos/ScrollSvgs/Envelop.js");
/* harmony import */ var _ScrollSvgs_Dribbble__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ScrollSvgs/Dribbble */ "./src/components/Svgs/Logos/ScrollSvgs/Dribbble.js");
/* harmony import */ var _ScrollSvgs_Github__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ScrollSvgs/Github */ "./src/components/Svgs/Logos/ScrollSvgs/Github.js");
/* harmony import */ var _ScrollSvgs_Behance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ScrollSvgs/Behance */ "./src/components/Svgs/Logos/ScrollSvgs/Behance.js");
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\Svgs\\Logos\\Logos.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function Scroll(props) {
  let svg;

  if (props.type === 'withText') {
    svg = __jsx(_ScrollSvgs_WithTexts__WEBPACK_IMPORTED_MODULE_1__["default"], {
      colors: props.colors,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }
    });
  }

  if (props.type === 'arrow') {
    svg = __jsx(_ScrollSvgs_ArrowRight__WEBPACK_IMPORTED_MODULE_2__["default"], {
      colors: props.colors,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }
    });
  }

  if (props.type === 'envelop') {
    svg = __jsx(_ScrollSvgs_Envelop__WEBPACK_IMPORTED_MODULE_3__["default"], {
      colors: props.colors,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }
    });
  }

  if (props.type === 'behance') svg = __jsx(_ScrollSvgs_Behance__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 38
    }
  });
  if (props.type === 'dribbble') svg = __jsx(_ScrollSvgs_Dribbble__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 39
    }
  });
  if (props.type === 'github') svg = __jsx(_ScrollSvgs_Github__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 37
    }
  });
  return svg;
}

/* harmony default export */ __webpack_exports__["default"] = (Scroll);

/***/ }),

/***/ "./src/components/Svgs/Logos/ScrollSvgs/ArrowRight.js":
/*!************************************************************!*\
  !*** ./src/components/Svgs/Logos/ScrollSvgs/ArrowRight.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\Svgs\\Logos\\ScrollSvgs\\ArrowRight.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function WithoutText(props) {
  return __jsx("svg", {
    width: "10",
    height: "16",
    viewBox: "0 0 10 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("path", {
    d: "M9.64165 8.62196L2.37798 15.7425C2.02778 16.0858 1.4597 16.0858 1.1095 15.7425L0.262228 14.9119C-0.087594 14.5689 -0.0879669 14.0135 0.260734 13.6698L6.01748 8.00018L0.261106 2.33019C-0.0879679 1.98651 -0.0872202 1.43106 0.262602 1.08811L1.10988 0.257485C1.46007 -0.0858288 2.02816 -0.0858288 2.37835 0.257485L9.64165 7.37841C9.99185 7.72172 9.99185 8.27865 9.64165 8.62196Z",
    fill: props.colors,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (WithoutText);

/***/ }),

/***/ "./src/components/Svgs/Logos/ScrollSvgs/Behance.js":
/*!*********************************************************!*\
  !*** ./src/components/Svgs/Logos/ScrollSvgs/Behance.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\Svgs\\Logos\\ScrollSvgs\\Behance.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Behance() {
  return __jsx("svg", {
    width: "40",
    height: "25",
    viewBox: "0 0 40 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("path", {
    d: "M15.7496 11.2019C17.9084 10.1495 19.0353 8.55719 19.0353 6.07865C19.0353 1.19081 15.4645 0 11.3438 0H0V24.5361H11.6629C16.0348 24.5361 20.1419 22.3968 20.1419 17.4121C20.1419 14.3312 18.7095 12.0534 15.7496 11.2019V11.2019ZM5.28835 4.18859H10.2508C12.1585 4.18859 13.876 4.73553 13.876 6.99252C13.876 9.07643 12.5386 9.91415 10.6514 9.91415H5.28835V4.18859V4.18859ZM10.9433 20.3683H5.28835V13.6112H11.0519C13.3804 13.6112 14.8535 14.6012 14.8535 17.1144C14.8535 19.5929 13.0953 20.3683 10.9433 20.3683V20.3683ZM35.2806 3.70396H25.5253V1.28773H35.2806V3.70396V3.70396ZM39.1026 15.9097C39.1026 10.6549 36.0884 6.2725 30.6236 6.2725C25.3148 6.2725 21.7101 10.3434 21.7101 15.6743C21.7101 21.206 25.1248 25 30.6236 25C34.785 25 37.4801 23.0892 38.7767 19.0252H34.5542C34.0993 20.5414 32.2257 21.3445 30.7729 21.3445C27.9692 21.3445 26.4961 19.6691 26.4961 16.8236H39.0618C39.0822 16.5328 39.1026 16.2213 39.1026 15.9097ZM26.5029 13.7497C26.659 11.4165 28.1796 9.95569 30.4742 9.95569C32.8774 9.95569 34.0858 11.3957 34.2894 13.7497H26.5029Z",
    fill: "#3786CE",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Behance);

/***/ }),

/***/ "./src/components/Svgs/Logos/ScrollSvgs/Dribbble.js":
/*!**********************************************************!*\
  !*** ./src/components/Svgs/Logos/ScrollSvgs/Dribbble.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\Svgs\\Logos\\ScrollSvgs\\Dribbble.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Dribbble() {
  return __jsx("svg", {
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("path", {
    d: "M12.5 0C5.60746 0 0 5.60746 0 12.5C0 19.3925 5.60746 25 12.5 25C19.3925 25 25 19.3925 25 12.5C25 5.60746 19.3925 0 12.5 0ZM20.7646 5.76442C22.2517 7.58125 23.1522 9.89531 23.1757 12.4154C22.8236 12.3409 19.2937 11.6249 15.7411 12.0717C15.4512 11.364 15.1775 10.7414 14.8027 9.97424C18.7504 8.3625 20.5395 6.0689 20.7646 5.76442V5.76442ZM19.5777 4.52974C19.3856 4.80328 17.7784 6.96351 13.9819 8.38654C12.2323 5.17203 10.2931 2.5313 9.99798 2.13614C13.3839 1.31996 16.9519 2.20015 19.5777 4.52974V4.52974ZM7.96074 2.85383C8.24224 3.23987 10.1502 5.88387 11.9193 9.02868C6.92495 10.3549 2.52611 10.3358 2.04859 10.3295C2.74093 7.01638 4.97369 4.26275 7.96074 2.85383ZM1.82308 12.5163C1.82308 12.4071 1.82525 12.2984 1.82853 12.19C2.29567 12.1996 7.46966 12.2663 12.8016 10.6706C13.1073 11.2687 13.3992 11.876 13.6672 12.4825C9.8064 13.57 6.29859 16.6925 4.56789 19.6552C2.8626 17.7623 1.82308 15.2586 1.82308 12.5163ZM5.94642 20.9393C7.06169 18.6594 10.0885 15.7164 14.3929 14.248C15.8919 18.1433 16.5118 21.4079 16.6706 22.3447C13.2376 23.807 9.10937 23.4058 5.94642 20.9393V20.9393ZM18.4656 21.3672C18.3561 20.7177 17.7879 17.5921 16.3914 13.7546C19.7371 13.2191 22.6767 14.0958 23.0419 14.211C22.566 17.1819 20.8608 19.7475 18.4656 21.3672Z",
    fill: "#C466A4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Dribbble);

/***/ }),

/***/ "./src/components/Svgs/Logos/ScrollSvgs/Envelop.js":
/*!*********************************************************!*\
  !*** ./src/components/Svgs/Logos/ScrollSvgs/Envelop.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\Svgs\\Logos\\ScrollSvgs\\Envelop.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Envelop(props) {
  return __jsx("svg", {
    width: "36",
    height: "27",
    viewBox: "0 0 36 27",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("path", {
    d: "M32.3851 0H3.35018C1.49991 0 0 1.51102 0 3.375V23.625C0 25.489 1.49991 27 3.35018 27H32.3851C34.2354 27 35.7353 25.489 35.7353 23.625V3.375C35.7353 1.51102 34.2354 0 32.3851 0ZM32.3851 3.375V6.2441C30.8202 7.52794 28.3252 9.52425 22.9915 13.7317C21.8161 14.6631 19.4877 16.9008 17.8676 16.8747C16.2478 16.9011 13.9187 14.6628 12.7438 13.7317C7.41089 9.52488 4.91535 7.52815 3.35018 6.2441V3.375H32.3851ZM3.35018 23.625V10.5749C4.94948 11.8581 7.21748 13.6589 10.6744 16.3859C12.1999 17.5956 14.8715 20.2662 17.8676 20.2499C20.8491 20.2662 23.4868 17.6344 25.0603 16.3865C28.5171 13.6595 30.7857 11.8583 32.3851 10.5749V23.625H3.35018Z",
    fill: props.colors,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Envelop);

/***/ }),

/***/ "./src/components/Svgs/Logos/ScrollSvgs/Github.js":
/*!********************************************************!*\
  !*** ./src/components/Svgs/Logos/ScrollSvgs/Github.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\Svgs\\Logos\\ScrollSvgs\\Github.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Github() {
  return __jsx("svg", {
    width: "34",
    height: "27",
    viewBox: "0 0 34 27",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("path", {
    d: "M12.8838 18.6112C12.8838 20.0807 12.1292 22.4853 10.3431 22.4853C8.55692 22.4853 7.80231 20.0807 7.80231 18.6112C7.80231 17.1417 8.55692 14.7371 10.3431 14.7371C12.1292 14.7371 12.8838 17.1417 12.8838 18.6112ZM33.2308 15.0605C33.2308 17.3034 33.0092 19.6799 32.0192 21.74C29.3954 27.1258 22.1815 26.9992 17.0169 26.9992C11.7692 26.9992 4.12615 27.189 1.39846 21.74C0.387692 19.701 0 17.3034 0 15.0605C0 12.1145 0.962308 9.33019 2.87308 7.07323C2.51308 5.96232 2.34 4.79517 2.34 3.64208C2.34 2.13041 2.67923 1.37105 3.35077 0C6.48692 0 8.49461 0.632794 10.8831 2.53117C12.8908 2.04603 14.9538 1.82807 17.0238 1.82807C18.8931 1.82807 20.7762 2.03197 22.59 2.47493C24.9438 0.597638 26.9515 0 30.0531 0C30.7315 1.37105 31.0638 2.13041 31.0638 3.64208C31.0638 4.79517 30.8838 5.94123 30.5308 7.03104C32.4346 9.3091 33.2308 12.1145 33.2308 15.0605ZM28.7792 18.6112C28.7792 15.5245 26.9308 12.8035 23.6908 12.8035C22.3823 12.8035 21.1292 13.0426 19.8138 13.2254C18.7823 13.3871 17.7508 13.4504 16.6915 13.4504C15.6392 13.4504 14.6077 13.3871 13.5692 13.2254C12.2746 13.0426 11.0077 12.8035 9.69231 12.8035C6.45231 12.8035 4.60385 15.5245 4.60385 18.6112C4.60385 24.7844 10.17 25.7336 15.0162 25.7336H18.3531C23.22 25.7336 28.7792 24.7915 28.7792 18.6112ZM23.0608 14.7371C21.2746 14.7371 20.52 17.1417 20.52 18.6112C20.52 20.0807 21.2746 22.4853 23.0608 22.4853C24.8469 22.4853 25.6015 20.0807 25.6015 18.6112C25.6015 17.1417 24.8469 14.7371 23.0608 14.7371Z",
    fill: "#ABA98F",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Github);

/***/ }),

/***/ "./src/components/Svgs/Logos/ScrollSvgs/WithTexts.js":
/*!***********************************************************!*\
  !*** ./src/components/Svgs/Logos/ScrollSvgs/WithTexts.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\Svgs\\Logos\\ScrollSvgs\\WithTexts.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function WithTexts(props) {
  return __jsx("svg", {
    className: "sub-reveal",
    width: "20",
    height: "121",
    viewBox: "0 0 20 121",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("path", {
    d: "M6.8418 54.8604L6.8418 120C7.09464 115.629 12.3681 99.0622 15.2628 99.0622",
    stroke: props.colors.darkColor,
    strokeWidth: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M3.838 7.14937C3.838 6.39337 3.964 5.71537 4.216 5.11537C4.48 4.51537 4.84 4.04137 5.296 3.69337C5.764 3.34537 6.298 3.15337 6.898 3.11737V4.80937C6.406 4.85737 6.004 5.08537 5.692 5.49337C5.38 5.91337 5.224 6.45937 5.224 7.13137C5.224 7.75537 5.362 8.24737 5.638 8.60737C5.914 8.96737 6.262 9.14737 6.682 9.14737C7.114 9.14737 7.432 8.95537 7.636 8.57137C7.852 8.18737 8.062 7.59337 8.266 6.78937C8.458 6.05737 8.65 5.45737 8.842 4.98937C9.046 4.53337 9.34 4.13737 9.724 3.80137C10.12 3.47737 10.636 3.31537 11.272 3.31537C11.776 3.31537 12.238 3.46537 12.658 3.76537C13.078 4.06537 13.408 4.49137 13.648 5.04337C13.9 5.59537 14.026 6.22537 14.026 6.93337C14.026 8.02537 13.75 8.90737 13.198 9.57937C12.646 10.2514 11.89 10.6114 10.93 10.6594V9.02137C11.446 8.98537 11.86 8.77537 12.172 8.39137C12.484 8.01937 12.64 7.51537 12.64 6.87937C12.64 6.29137 12.514 5.82337 12.262 5.47537C12.01 5.12737 11.68 4.95337 11.272 4.95337C10.948 4.95337 10.678 5.05537 10.462 5.25937C10.258 5.47537 10.09 5.73937 9.958 6.05137C9.838 6.37537 9.7 6.81937 9.544 7.38337C9.352 8.09137 9.16 8.66737 8.968 9.11137C8.788 9.55537 8.512 9.93337 8.14 10.2454C7.768 10.5694 7.282 10.7374 6.682 10.7494C6.142 10.7494 5.656 10.5994 5.224 10.2994C4.792 9.99937 4.45 9.57337 4.198 9.02137C3.958 8.48137 3.838 7.85737 3.838 7.14937ZM8.95 12.4497C9.97 12.4497 10.858 12.6537 11.614 13.0617C12.382 13.4697 12.976 14.0337 13.396 14.7537C13.816 15.4857 14.026 16.3197 14.026 17.2557C14.026 18.4677 13.732 19.4637 13.144 20.2437C12.556 21.0357 11.74 21.5577 10.696 21.8097V20.0457C11.296 19.8777 11.77 19.5477 12.118 19.0557C12.466 18.5757 12.64 17.9757 12.64 17.2557C12.64 16.3197 12.316 15.5637 11.668 14.9877C11.032 14.4117 10.126 14.1237 8.95 14.1237C7.762 14.1237 6.844 14.4117 6.196 14.9877C5.548 15.5637 5.224 16.3197 5.224 17.2557C5.224 17.9757 5.392 18.5757 5.728 19.0557C6.064 19.5357 6.544 19.8657 7.168 20.0457V21.8097C6.16 21.5457 5.35 21.0177 4.738 20.2257C4.138 19.4337 3.838 18.4437 3.838 17.2557C3.838 16.3197 4.048 15.4857 4.468 14.7537C4.888 14.0337 5.482 13.4697 6.25 13.0617C7.018 12.6537 7.918 12.4497 8.95 12.4497ZM12.262 25.6333C12.826 25.9213 13.264 26.3293 13.576 26.8573C13.888 27.3973 14.044 28.0513 14.044 28.8193H12.352V28.3873C12.352 26.5513 11.356 25.6333 9.364 25.6333H4V23.9953H13.864V25.6333H12.262ZM3.838 35.0121C3.838 34.0881 4.048 33.2481 4.468 32.4921C4.888 31.7481 5.482 31.1601 6.25 30.7281C7.03 30.3081 7.93 30.0981 8.95 30.0981C9.958 30.0981 10.846 30.3141 11.614 30.7461C12.394 31.1901 12.988 31.7901 13.396 32.5461C13.816 33.3021 14.026 34.1481 14.026 35.0841C14.026 36.0201 13.816 36.8661 13.396 37.6221C12.988 38.3781 12.4 38.9721 11.632 39.4041C10.864 39.8481 9.97 40.0701 8.95 40.0701C7.93 40.0701 7.03 39.8421 6.25 39.3861C5.482 38.9421 4.888 38.3361 4.468 37.5681C4.048 36.8001 3.838 35.9481 3.838 35.0121ZM5.278 35.0121C5.278 35.6001 5.416 36.1521 5.692 36.6681C5.968 37.1841 6.382 37.5981 6.934 37.9101C7.486 38.2341 8.158 38.3961 8.95 38.3961C9.742 38.3961 10.414 38.2401 10.966 37.9281C11.518 37.6161 11.926 37.2081 12.19 36.7041C12.466 36.2001 12.604 35.6541 12.604 35.0661C12.604 34.4661 12.466 33.9141 12.19 33.4101C11.926 32.9181 11.518 32.5221 10.966 32.2221C10.414 31.9221 9.742 31.7721 8.95 31.7721C8.146 31.7721 7.468 31.9161 6.916 32.2041C6.364 32.5041 5.95 32.9001 5.674 33.3921C5.41 33.8841 5.278 34.4241 5.278 35.0121ZM17.32 43.8618H4L4 42.2238H17.32V43.8618ZM17.32 48.2915H4V46.6535H17.32V48.2915Z",
    fill: props.colors.lightColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (WithTexts);

/***/ }),

/***/ "./src/components/Svgs/Socials/Social/Behance.js":
/*!*******************************************************!*\
  !*** ./src/components/Svgs/Socials/Social/Behance.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\Svgs\\Socials\\Social\\Behance.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Behance(props) {
  return __jsx("svg", {
    width: "100",
    height: "100",
    viewBox: "0 0 100 100",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("circle", {
    cx: "50",
    cy: "50",
    r: "50",
    fill: props.color,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M47.1389 48.0451C49.8993 46.7257 51.3403 44.7292 51.3403 41.6215C51.3403 35.4931 46.7743 34 41.5052 34H27V64.7639H41.9132C47.5035 64.7639 52.7552 62.0816 52.7552 55.8316C52.7552 51.9688 50.9236 49.1129 47.1389 48.0451ZM33.7622 39.2517H40.1076C42.5469 39.2517 44.7431 39.9375 44.7431 42.7674C44.7431 45.3802 43.033 46.4306 40.6198 46.4306H33.7622V39.2517ZM40.9931 59.5382H33.7622V51.066H41.1319C44.1094 51.066 45.9931 52.3073 45.9931 55.4583C45.9931 58.566 43.7448 59.5382 40.9931 59.5382ZM72.1128 38.6441H59.6389V35.6146H72.1128V38.6441ZM77 53.9479C77 47.3594 73.1458 41.8646 66.158 41.8646C59.3698 41.8646 54.7604 46.9688 54.7604 53.6528C54.7604 60.5885 59.1267 65.3455 66.158 65.3455C71.4792 65.3455 74.9253 62.9497 76.5833 57.8542H71.184C70.6024 59.7552 68.2066 60.7622 66.349 60.7622C62.7639 60.7622 60.8802 58.6615 60.8802 55.0938H76.9479C76.974 54.7292 77 54.3385 77 53.9479ZM60.8889 51.2396C61.0885 48.3142 63.033 46.4826 65.967 46.4826C69.0399 46.4826 70.5851 48.2882 70.8455 51.2396H60.8889Z",
    fill: "#DBDAC7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Behance);

/***/ }),

/***/ "./src/components/Svgs/Socials/Social/Dribbble.js":
/*!********************************************************!*\
  !*** ./src/components/Svgs/Socials/Social/Dribbble.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\Svgs\\Socials\\Social\\Dribbble.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Dribbble(props) {
  return __jsx("svg", {
    width: "100",
    height: "100",
    viewBox: "0 0 100 100",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("circle", {
    cx: "50",
    cy: "50",
    r: "50",
    fill: props.color,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M50 26C36.7663 26 26 36.7663 26 50C26 63.2337 36.7663 74 50 74C63.2337 74 74 63.2337 74 50C74 36.7663 63.2337 26 50 26ZM65.8681 37.0677C68.7232 40.556 70.4522 44.999 70.4973 49.8375C69.8214 49.6946 63.0439 48.3199 56.2229 49.1777C55.6662 47.8189 55.1408 46.6235 54.4212 45.1505C62.0007 42.056 65.4359 37.6523 65.8681 37.0677ZM63.5891 34.6971C63.2204 35.2223 60.1346 39.3699 52.8452 42.1022C49.4859 35.9303 45.7627 30.8601 45.1961 30.1014C51.697 28.5343 58.5477 30.2243 63.5891 34.6971ZM41.2846 31.4794C41.8251 32.2205 45.4883 37.297 48.885 43.3351C39.2959 45.8815 30.8501 45.8448 29.9333 45.8327C31.2626 39.4715 35.5495 34.1845 41.2846 31.4794ZM29.5003 50.0313C29.5003 49.8216 29.5045 49.613 29.5108 49.4048C30.4077 49.4232 40.3417 49.5513 50.5791 46.4875C51.1659 47.636 51.7265 48.8018 52.2411 49.9664C44.8283 52.0543 38.0933 58.0497 34.7704 63.738C31.4962 60.1037 29.5003 55.2965 29.5003 50.0313ZM37.4171 66.2035C39.5585 61.8261 45.3698 56.1755 53.6345 53.3561C56.5125 60.8351 57.7027 67.1032 58.0076 68.9017C51.4161 71.7094 43.49 70.9391 37.4171 66.2035ZM61.4539 67.025C61.2438 65.778 60.1527 59.7769 57.4714 52.4089C63.8953 51.3806 69.5392 53.0639 70.2405 53.2852C69.3268 58.9892 66.0528 63.9153 61.4539 67.025Z",
    fill: "#DBDAC7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Dribbble);

/***/ }),

/***/ "./src/components/Svgs/Socials/Social/Goodreads.js":
/*!*********************************************************!*\
  !*** ./src/components/Svgs/Socials/Social/Goodreads.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\Svgs\\Socials\\Social\\Goodreads.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Goodreads(props) {
  return __jsx("svg", {
    width: "100",
    height: "100",
    viewBox: "0 0 100 100",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("circle", {
    cx: "50",
    cy: "50",
    r: "50",
    fill: props.color,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M36.0884 63.0873H36.3181C37.36 63.0873 38.4101 63.0873 39.452 63.0955C39.5833 63.0955 39.7064 63.0627 39.7474 63.2678C40.3299 66.131 42.2086 67.7472 44.9077 68.5102C47.1146 69.1337 49.3462 69.1501 51.5777 68.6579C54.3506 68.0508 56.172 66.3361 57.1564 63.7026C57.8128 61.9388 58.0343 60.1092 58.0589 58.2469C58.0671 57.7711 58.0835 54.391 58.0425 53.9152L57.9686 53.8905C57.903 54.0136 57.8292 54.1285 57.7635 54.2515C55.9504 57.7875 52.7344 59.7811 49.1164 59.9205C40.6662 60.2487 35.2187 55.2442 35.0054 45.4649C34.9644 43.5206 35.1531 41.6172 35.6864 39.7467C37.3764 33.9136 41.8066 30.0495 48.3124 30.0002C53.3415 29.9674 56.6396 33.1752 57.8456 35.7677C57.8866 35.858 57.9522 35.9564 58.0425 35.9236V30.8699H61.6769C61.6769 53.8659 61.6851 58.1239 61.6851 58.1239C61.6769 64.5641 59.4946 69.9131 53.2349 71.4309C47.5331 72.8174 40.1904 71.8247 37.1549 66.7381C36.4986 65.6306 36.1868 64.4164 36.0884 63.0873ZM48.0909 32.9947C43.7838 32.9537 39.1895 36.3338 38.6562 43.9718C38.3199 48.8122 39.8704 53.9972 44.5222 56.1631C46.7865 57.2214 50.6178 57.3937 53.4072 55.4493C57.3123 52.7256 58.5511 47.4914 57.903 42.815C57.1072 36.9819 53.9815 32.9701 48.0909 32.9947Z",
    fill: "#DBDAC7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Goodreads);

/***/ }),

/***/ "./src/components/Svgs/Socials/Social/Linkedin.js":
/*!********************************************************!*\
  !*** ./src/components/Svgs/Socials/Social/Linkedin.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\Svgs\\Socials\\Social\\Linkedin.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Linked(props) {
  return __jsx("svg", {
    width: "100",
    height: "100",
    viewBox: "0 0 100 100",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("circle", {
    cx: "50",
    cy: "50",
    r: "50",
    fill: props.color,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M39.4012 69.9991H30.6938V41.9584H39.4012V69.9991ZM35.0428 38.1334C32.2584 38.1334 30 35.8272 30 33.0428C30 31.7054 30.5313 30.4227 31.477 29.477C32.4227 28.5313 33.7054 28 35.0428 28C36.3802 28 37.6629 28.5313 38.6086 29.477C39.5543 30.4227 40.0856 31.7054 40.0856 33.0428C40.0856 35.8272 37.8263 38.1334 35.0428 38.1334ZM71.9906 69.9991H63.3019V56.3491C63.3019 53.0959 63.2362 48.9241 58.7747 48.9241C54.2475 48.9241 53.5538 52.4584 53.5538 56.1147V69.9991H44.8556V41.9584H53.2069V45.7834H53.3288C54.4912 43.5803 57.3309 41.2553 61.5675 41.2553C70.38 41.2553 72 47.0584 72 54.5959V69.9991H71.9906Z",
    fill: "#DBDAC7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Linked);

/***/ }),

/***/ "./src/components/Svgs/Socials/Social/Twitter.js":
/*!*******************************************************!*\
  !*** ./src/components/Svgs/Socials/Social/Twitter.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\Svgs\\Socials\\Social\\Twitter.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Twitter(props) {
  return __jsx("svg", {
    width: "100",
    height: "100",
    viewBox: "0 0 100 100",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("circle", {
    cx: "50",
    cy: "50",
    r: "50",
    fill: props.color,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M69.1689 41.5133C69.1987 41.9308 69.1987 42.3484 69.1987 42.7659C69.1987 55.5 59.5065 70.1727 41.7919 70.1727C36.3344 70.1727 31.2646 68.592 27 65.8485C27.7754 65.9379 28.5209 65.9677 29.3261 65.9677C33.8293 65.9677 37.9746 64.4468 41.2849 61.8523C37.0501 61.7628 33.5013 58.9893 32.2785 55.172C32.875 55.2614 33.4714 55.3211 34.0978 55.3211C34.9626 55.3211 35.8275 55.2017 36.6327 54.9931C32.2189 54.0983 28.9086 50.2215 28.9086 45.5394V45.4201C30.1909 46.1358 31.6821 46.5832 33.2626 46.6428C30.668 44.913 28.9682 41.9606 28.9682 38.6205C28.9682 36.8312 29.4453 35.191 30.2804 33.7595C35.0222 39.6047 42.1498 43.4219 50.1421 43.8394C49.993 43.1237 49.9035 42.3782 49.9035 41.6326C49.9035 36.3242 54.198 32 59.5362 32C62.3096 32 64.8147 33.1631 66.5742 35.0419C68.7512 34.6244 70.8388 33.8191 72.6879 32.7157C71.972 34.9525 70.4511 36.8313 68.4531 38.0241C70.3915 37.8154 72.2704 37.2785 74 36.533C72.688 38.4416 71.0477 40.1414 69.1689 41.5133Z",
    fill: "#DBDAC7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Twitter);

/***/ }),

/***/ "./src/components/Svgs/Socials/Socials.js":
/*!************************************************!*\
  !*** ./src/components/Svgs/Socials/Socials.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Social_Behance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Social/Behance */ "./src/components/Svgs/Socials/Social/Behance.js");
/* harmony import */ var _Social_Dribbble__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Social/Dribbble */ "./src/components/Svgs/Socials/Social/Dribbble.js");
/* harmony import */ var _Social_Goodreads__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Social/Goodreads */ "./src/components/Svgs/Socials/Social/Goodreads.js");
/* harmony import */ var _Social_Linkedin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Social/Linkedin */ "./src/components/Svgs/Socials/Social/Linkedin.js");
/* harmony import */ var _Social_Twitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Social/Twitter */ "./src/components/Svgs/Socials/Social/Twitter.js");
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\Svgs\\Socials\\Socials.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function Socials(props) {
  const soc = () => {
    let s = props.icon;
    return s === 'behance' ? __jsx(_Social_Behance__WEBPACK_IMPORTED_MODULE_1__["default"], {
      color: props.color,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 23
      }
    }) : s === 'dribbble' ? __jsx(_Social_Dribbble__WEBPACK_IMPORTED_MODULE_2__["default"], {
      color: props.color,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 24
      }
    }) : s === 'goodreads' ? __jsx(_Social_Goodreads__WEBPACK_IMPORTED_MODULE_3__["default"], {
      color: props.color,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 25
      }
    }) : s === 'linkedin' ? __jsx(_Social_Linkedin__WEBPACK_IMPORTED_MODULE_4__["default"], {
      color: props.color,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 24
      }
    }) : s === 'twitter' ? __jsx(_Social_Twitter__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: props.color,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 23
      }
    }) : null;
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, soc());
}

/* harmony default export */ __webpack_exports__["default"] = (Socials);

/***/ }),

/***/ "./src/components/TopLayover/TopLayover.js":
/*!*************************************************!*\
  !*** ./src/components/TopLayover/TopLayover.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_context_stateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/context/stateContext */ "./src/utils/context/stateContext.js");
/* harmony import */ var _Svgs_BrandLogo_BrandLogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Svgs/BrandLogo/BrandLogo */ "./src/components/Svgs/BrandLogo/BrandLogo.js");
/* harmony import */ var _utils_pageanimations_toplayover_toplayover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/pageanimations/toplayover/toplayover */ "./src/utils/pageanimations/toplayover/toplayover.js");
/* harmony import */ var _utils_sessiondata_sessionStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/sessiondata/sessionStorage */ "./src/utils/sessiondata/sessionStorage.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_pageanimations_motion_toplayer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/pageanimations/motion/toplayer */ "./src/utils/pageanimations/motion/toplayer.js");
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\TopLayover\\TopLayover.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const TopLayover = () => {
  const {
    state
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_utils_context_stateContext__WEBPACK_IMPORTED_MODULE_1__["StateContext"]); // checkforsession()

  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div, {
    variants: _utils_pageanimations_motion_toplayer__WEBPACK_IMPORTED_MODULE_6__["topAnim"],
    initial: state.isTransitioning,
    animate: state.animation,
    exit: state.exitMode,
    className: "content-center top-layover",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div, {
    variants: _utils_pageanimations_motion_toplayer__WEBPACK_IMPORTED_MODULE_6__["logoAnim"],
    initial: state.isTransitioning,
    animate: state.animation,
    exit: state.exitMode,
    className: "top-layover-logo content-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx(_Svgs_BrandLogo_BrandLogo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    colorMode: '#E3E1C3',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (TopLayover);

/***/ }),

/***/ "./src/containers/About/MyReads/Components/Books.js":
/*!**********************************************************!*\
  !*** ./src/containers/About/MyReads/Components/Books.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\containers\\About\\MyReads\\Components\\Books.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Books(props) {
  let books = props.books.map((book, i) => {
    return __jsx("div", {
      className: "book-wrapper",
      key: i,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 7
      }
    }, __jsx("span", {
      className: "show-container show",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }
    }, __jsx("a", {
      href: `https://${book.link}`,
      className: "reveal book-link",
      rel: "noopener noreferrer",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }, __jsx("img", {
      className: "book-icon",
      src: `/images/${book.img}.png`,
      alt: `${book.alt} icon`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 15
      }
    }), __jsx("span", {
      className: "book-name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    }, book.name)), __jsx("div", {
      className: "runner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    }))));
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, books);
}

/* harmony default export */ __webpack_exports__["default"] = (Books);

/***/ }),

/***/ "./src/containers/About/MyReads/Components/BottomDesc.js":
/*!***************************************************************!*\
  !*** ./src/containers/About/MyReads/Components/BottomDesc.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\containers\\About\\MyReads\\Components\\BottomDesc.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function BottomDesc(props) {
  return __jsx("span", {
    className: "sub-reveal",
    style: {
      color: '#6B6F71',
      fontWeight: 500
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, props.desc, __jsx("a", {
    href: `${props.link}`,
    rel: "noopener noreferrer",
    target: "_blank",
    className: "links",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, " here"), ".");
}

/* harmony default export */ __webpack_exports__["default"] = (BottomDesc);

/***/ }),

/***/ "./src/containers/About/MyReads/Components/Title.js":
/*!**********************************************************!*\
  !*** ./src/containers/About/MyReads/Components/Title.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\containers\\About\\MyReads\\Components\\Title.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Title(props) {
  return __jsx("div", {
    className: "reveal ",
    style: {
      color: '#41474A'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, props.title);
}

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./src/containers/About/MyReads/Components/TopDesc.js":
/*!************************************************************!*\
  !*** ./src/containers/About/MyReads/Components/TopDesc.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\containers\\About\\MyReads\\Components\\TopDesc.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function TopDesc(props) {
  return __jsx("span", {
    className: "sub-reveal",
    style: {
      color: '#6B6F71',
      fontWeight: 500
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, props.desc);
}

/* harmony default export */ __webpack_exports__["default"] = (TopDesc);

/***/ }),

/***/ "./src/containers/About/MyReads/MyReads.js":
/*!*************************************************!*\
  !*** ./src/containers/About/MyReads/MyReads.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_context_pageContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/context/pageContext */ "./src/utils/context/pageContext.js");
/* harmony import */ var _Components_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/Title */ "./src/containers/About/MyReads/Components/Title.js");
/* harmony import */ var _Components_TopDesc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/TopDesc */ "./src/containers/About/MyReads/Components/TopDesc.js");
/* harmony import */ var _Components_Books__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/Books */ "./src/containers/About/MyReads/Components/Books.js");
/* harmony import */ var _Components_BottomDesc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/BottomDesc */ "./src/containers/About/MyReads/Components/BottomDesc.js");
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\containers\\About\\MyReads\\MyReads.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class FollowMyReads extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    let data = this.context.followMyReads;
    return __jsx("section", {
      className: "section-container myreads",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "section-background",
      style: {
        background: `url('${data.background}') repeat center top`
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "section-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }
    }, __jsx("article", {
      className: "section-article-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }
    }, __jsx("h2", {
      className: "head3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: "show-container show",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }, __jsx(_Components_Title__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: data.title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 19
      }
    }), __jsx("div", {
      className: "runner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 19
      }
    }))), __jsx("p", {
      className: "sub-reveal-container desc show",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 15
      }
    }, __jsx(_Components_TopDesc__WEBPACK_IMPORTED_MODULE_3__["default"], {
      desc: data.topDesc,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }
    })), __jsx("figure", {
      className: "section-article-wrapper book-icons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "content-center books-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }
    }, __jsx(_Components_Books__WEBPACK_IMPORTED_MODULE_4__["default"], {
      books: data.books,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 19
      }
    }))), __jsx("p", {
      className: "sub-reveal-container desc show",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 15
      }
    }, __jsx(_Components_BottomDesc__WEBPACK_IMPORTED_MODULE_5__["default"], {
      link: data.goodreadsLink,
      desc: data.bottomDesc,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }
    }))))));
  }

}

_defineProperty(FollowMyReads, "contextType", _utils_context_pageContext__WEBPACK_IMPORTED_MODULE_1__["PageData"]);

/* harmony default export */ __webpack_exports__["default"] = (FollowMyReads);

/***/ }),

/***/ "./src/containers/About/Skills/Skill/Skill.js":
/*!****************************************************!*\
  !*** ./src/containers/About/Skills/Skill/Skill.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\containers\\About\\Skills\\Skill\\Skill.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import './Skill.css'

function Skill(props) {
  let skills = props.skills.skills.map((skill, i) => {
    return __jsx("div", {
      className: "icon-wrapper",
      key: i,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }
    }, __jsx("span", {
      className: "sub-reveal-container show",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "sub-reveal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 11
      }
    }, __jsx("img", {
      className: "skill-icon",
      src: `/images/${skill.img}.png`,
      alt: `small ${skill.alt} logo`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }
    }), __jsx("span", {
      className: "skill-name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }
    }, skill.name))));
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx("article", {
    className: "section-article-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "head3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "show-container show",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "reveal ",
    style: {
      color: '#EBE9CD'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, props.skills.title), __jsx("div", {
    className: "runner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }))), __jsx("p", {
    className: "sub-reveal-container desc show",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "sub-reveal",
    style: {
      color: '#ABA98F',
      fontWeight: 500
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, props.skills.description))), __jsx("figure", {
    className: "section-article-wrapper figure-icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "icons-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, " ", skills)));
}

/* harmony default export */ __webpack_exports__["default"] = (Skill);

/***/ }),

/***/ "./src/containers/About/Skills/Skills.js":
/*!***********************************************!*\
  !*** ./src/containers/About/Skills/Skills.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_context_pageContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/context/pageContext */ "./src/utils/context/pageContext.js");
/* harmony import */ var _components_Buttons_Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Buttons/Buttons */ "./src/components/Buttons/Buttons.js");
/* harmony import */ var _Skill_Skill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Skill/Skill */ "./src/containers/About/Skills/Skill/Skill.js");
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\containers\\About\\Skills\\Skills.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // import {connect} from 'react-redux'
// import './Skills.css'

class Skills extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    let data = this.context.skills;

    let createDesign = __jsx(_Skill_Skill__WEBPACK_IMPORTED_MODULE_3__["default"], {
      skills: data.creativeDesign,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 24
      }
    });

    let frontend = __jsx(_Skill_Skill__WEBPACK_IMPORTED_MODULE_3__["default"], {
      skills: data.frontend,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 20
      }
    });

    let backend = __jsx(_Skill_Skill__WEBPACK_IMPORTED_MODULE_3__["default"], {
      skills: data.backend,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 19
      }
    });

    return __jsx("section", {
      className: "section-container skills",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "section-background",
      style: {
        background: `url('${data.background}') repeat center top`
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "section-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }
    }, createDesign, frontend, backend, __jsx("article", {
      className: "section-article-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "sub-reveal-container desc show",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: "sub-reveal btn",
      style: {
        color: '#ABA98F'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }
    }, __jsx(_components_Buttons_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: data.messagetext,
      type: data.type,
      withSvg: data.withSvg,
      btnType: data.btnType,
      link: data.link,
      colors: data.color,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 19
      }
    })))))));
  }

} // const mapStateToProps = (state) => {
//   return {
//     pageData: state.state.pageData
//   }
// }
// export default connect(mapStateToProps)(Skills)


_defineProperty(Skills, "contextType", _utils_context_pageContext__WEBPACK_IMPORTED_MODULE_1__["PageData"]);

/* harmony default export */ __webpack_exports__["default"] = (Skills);

/***/ }),

/***/ "./src/containers/Credential/Credential.js":
/*!*************************************************!*\
  !*** ./src/containers/Credential/Credential.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_QrCode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/QrCode */ "./src/containers/Credential/components/QrCode.js");
/* harmony import */ var _components_Credential__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Credential */ "./src/containers/Credential/components/Credential.js");
/* harmony import */ var _utils_context_pageContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/context/pageContext */ "./src/utils/context/pageContext.js");
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\containers\\Credential\\Credential.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Credential extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    let data = this.context;
    let credentials = data.courses.map((course, i) => {
      return __jsx("article", {
        className: "credential-cont",
        key: i,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "credential-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }
      }, __jsx(_components_QrCode__WEBPACK_IMPORTED_MODULE_1__["default"], {
        certLink: course.certLink,
        qrCode: course.qrCode,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }
      }), __jsx(_components_Credential__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: course.name,
        school: course.school,
        taken: course.taken,
        date: course.date,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 13
        }
      })));
    });
    return __jsx("div", {
      className: "credential-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }
    }, credentials);
  }

}

_defineProperty(Credential, "contextType", _utils_context_pageContext__WEBPACK_IMPORTED_MODULE_3__["PageData"]);

/* harmony default export */ __webpack_exports__["default"] = (Credential);

/***/ }),

/***/ "./src/containers/Credential/components/Credential.js":
/*!************************************************************!*\
  !*** ./src/containers/Credential/components/Credential.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\containers\\Credential\\components\\Credential.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Credential(props) {
  return __jsx("div", {
    className: "content-center credential-desc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("h4", {
    className: "p-wrapper head4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "show-container p-container show",
    style: {
      color: '#2C6664'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "reveal p-reveal",
    style: {
      fontWeight: 500
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, props.name), __jsx("div", {
    className: "runner p-runner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }))), __jsx("h4", {
    className: "sub-reveal-container head4 show",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "reveal",
    style: {
      fontWeight: 500,
      color: '#0C7CB0'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, props.school)), __jsx("span", {
    className: "sub-reveal-container p-desc desc show through",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "sub-reveal p-desc-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "through")), __jsx("h4", {
    className: "sub-reveal-container head4 show",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "reveal",
    style: {
      fontWeight: 500,
      color: '#0C7CB0'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, props.taken)), __jsx("span", {
    className: "sub-reveal-container p-desc desc show date",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "sub-reveal p-desc-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, props.date)));
}

/* harmony default export */ __webpack_exports__["default"] = (Credential);

/***/ }),

/***/ "./src/containers/Credential/components/QrCode.js":
/*!********************************************************!*\
  !*** ./src/containers/Credential/components/QrCode.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\containers\\Credential\\components\\QrCode.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function QrCode(props) {
  // aiman please provide a link for the certificate
  // and alternative name
  return __jsx("div", {
    className: "content-center credential-qr",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: "sub-reveal-container show",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "reveal ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: props.certLink,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: `/images/${props.qrCode}.png`,
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  })), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, "scan or click to see certificate"))));
}

/* harmony default export */ __webpack_exports__["default"] = (QrCode);

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_TopLayover_TopLayover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TopLayover/TopLayover */ "./src/components/TopLayover/TopLayover.js");
/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar/Navbar */ "./src/components/Navbar/Navbar.js");
/* harmony import */ var _components_MenuContainer_MenuContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MenuContainer/MenuContainer */ "./src/components/MenuContainer/MenuContainer.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header/Header */ "./src/components/Header/Header.js");
/* harmony import */ var _components_SectionBlocks_SectionBlocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SectionBlocks/SectionBlocks */ "./src/components/SectionBlocks/SectionBlocks.js");
/* harmony import */ var _containers_About_Skills_Skills__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../containers/About/Skills/Skills */ "./src/containers/About/Skills/Skills.js");
/* harmony import */ var _containers_About_MyReads_MyReads__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../containers/About/MyReads/MyReads */ "./src/containers/About/MyReads/MyReads.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Footer/Footer */ "./src/components/Footer/Footer.js");
/* harmony import */ var _utils_common_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/common/common */ "./src/utils/common/common.js");
/* harmony import */ var _utils_pageanimations_scrollanimation_scrollanimation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/pageanimations/scrollanimation/scrollanimation */ "./src/utils/pageanimations/scrollanimation/scrollanimation.js");
/* harmony import */ var _utils_context_pageContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/context/pageContext */ "./src/utils/context/pageContext.js");
/* harmony import */ var _utils_context_stateContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/context/stateContext */ "./src/utils/context/stateContext.js");
/* harmony import */ var _utils_pageanimations_motion_mainvariant__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/pageanimations/motion/mainvariant */ "./src/utils/pageanimations/motion/mainvariant.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_15__);
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\pages\\about.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

















function About() {
  const {
    state
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_utils_context_stateContext__WEBPACK_IMPORTED_MODULE_13__["StateContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // resize event to when the browser is resized
    Object(_utils_common_common__WEBPACK_IMPORTED_MODULE_10__["resize"])(); // scroll event

    setTimeout(() => {
      Object(_utils_pageanimations_scrollanimation_scrollanimation__WEBPACK_IMPORTED_MODULE_11__["scrollAnimation"])();
    }, 300);
    window.addEventListener('scroll', Object(_utils_pageanimations_scrollanimation_scrollanimation__WEBPACK_IMPORTED_MODULE_11__["debounce"])(_utils_pageanimations_scrollanimation_scrollanimation__WEBPACK_IMPORTED_MODULE_11__["scrollAnimation"], 40)); // return () => {
    //   window.removeEventListener('scroll', scroll)
    // }
  });
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_15__["motion"].div, {
    variants: _utils_pageanimations_motion_mainvariant__WEBPACK_IMPORTED_MODULE_14__["variants"],
    initial: "initial",
    animate: "enter",
    exit: state.exitMode,
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, "Aiman Adlawan | About Me"), __jsx("link", {
    rel: "icon",
    href: "/images/brand-icon-logo.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx(_components_TopLayover_TopLayover__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "main-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(_utils_context_pageContext__WEBPACK_IMPORTED_MODULE_12__["PageDataContext"], {
    pagesets: 'about',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }), __jsx(_components_MenuContainer_MenuContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }), __jsx("main", {
    className: "main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }), __jsx(_components_SectionBlocks_SectionBlocks__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "skills",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }), __jsx(_containers_About_Skills_Skills__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }), __jsx(_containers_About_MyReads_MyReads__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }), __jsx(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/utils/common/common.js":
/*!************************************!*\
  !*** ./src/utils/common/common.js ***!
  \************************************/
/*! exports provided: resize, checkRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resize", function() { return resize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkRoute", function() { return checkRoute; });
/* harmony import */ var _elementSorter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementSorter */ "./src/utils/common/elementSorter.js");
 // function to run for resizing or when page loads

function resize() {
  resizeEl();
  window.addEventListener('resize', resizeEl);
  return () => {
    window.removeEventListener('resize', resizeEl);
  };
} // function that will resize elements

function resizeEl() {
  const el = Object(_elementSorter__WEBPACK_IMPORTED_MODULE_0__["resizeElements"])();
  let w = window.innerWidth;

  if (w - 20 <= 1600) {
    el.main_container.style.width = '100%';
    el.navbar_container.style.width = '100%';
    el.menu_container.style.width = '100%';
    el.menu_wrapper.style.width = '100%';
    el.menu_runner.style.width = '100%';
    el.top_container.style.width = '100%';
  } else {
    el.main_container.style.width = `1600px`;
    el.navbar_container.style.width = `1600px`;
    el.menu_container.style.width = '1600px';
    el.menu_wrapper.style.width = '1600px';
    el.menu_runner.style.width = '1600px';
    el.top_container.style.width = '1600px';
  }
}

let routes = ['home', 'about', 'projects', 'contacts', 'privacy', 'credentials', 'projects/projects/music-app', 'projects/reservation-app', 'projects/electric-bill', 'projects/music-player3', 'projects/music-player4', 'projects/music-player5']; // this function will generate a return the current route
// for the state

const checkRoute = route => {
  let r = route.slice(1, 50);
  let url = r === '' ? 'home' : r;
  let b;
  let a = routes.filter(route => {
    return route === url;
  });

  if (a[0] === undefined) {
    b = 'notFound';
  } else {
    b = a[0];
  }

  return b;
};

/***/ }),

/***/ "./src/utils/common/elementSorter.js":
/*!*******************************************!*\
  !*** ./src/utils/common/elementSorter.js ***!
  \*******************************************/
/*! exports provided: resizeElements, navHoverElements, logoElements, menuClickElements, topLayoverElements, projectResizeEl, hoverProjectEl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeElements", function() { return resizeElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navHoverElements", function() { return navHoverElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoElements", function() { return logoElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuClickElements", function() { return menuClickElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topLayoverElements", function() { return topLayoverElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectResizeEl", function() { return projectResizeEl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hoverProjectEl", function() { return hoverProjectEl; });
// function to queryelements
function qEl(el, all) {
  if (all) {
    return document.querySelectorAll(`.${el}`);
  } else {
    return document.querySelector(`.${el}`);
  }
} // elements that needs to be resized


function resizeElements() {
  return {
    main_container: qEl('main-container', 0),
    navbar_container: qEl('navbar-container', 0),
    menu_container: qEl('menu-container', 0),
    menu_wrapper: qEl('menu-wrapper', 0),
    menu_runner: qEl('menu-runner', 0),
    top_container: qEl('top-container', 0)
  };
} // elements for the menu items

function navHoverElements() {
  return {
    middle: qEl('middle-span', 0),
    close_paths: qEl('menu-close path', 0),
    back: qEl('back-span', 0),
    front: qEl('front-text', 0)
  };
} // logo element animation

function logoElements() {
  return {
    t: qEl('navbar-logo .top-line', 0),
    r: qEl('navbar-logo .right-line', 0),
    b: qEl('navbar-logo .bottom-line', 0),
    l: qEl('navbar-logo .left-line', 0)
  };
} // menu click animation elements

function menuClickElements() {
  return {
    container: qEl('container', 0),
    menu_runners: qEl('menu-runners', 1),
    square_img: qEl('square-img', 0),
    right_icons: qEl('right-icons', 0),
    menu_list_container: qEl('menu-list-container', 1),
    copyright_runner: qEl('copyright-runner', 0),
    social_navicons: qEl('social-navicons', 0),
    menu_container: qEl('menu-container', 0),
    text_active: qEl('active .menu-list-text', 0),
    backer_active: qEl('active .menu-list-backer', 0),
    section_block: qEl('section-block-container', 0),
    short_project: qEl('short-project-container', 0)
  };
}
function topLayoverElements() {
  return {
    svg: qEl('top-layover-logo svg', 0),
    text: qEl('top-loading', 0),
    runner: qEl('top-runner', 0),
    top: qEl('top-layover', 0),
    container: qEl('container', 0)
  };
}
function projectResizeEl() {
  return {
    img_desc: qEl('project-img-desc', 1),
    project_img: qEl('project-image', 1),
    img_backer: qEl('img-backer', 1),
    project_text_desc: qEl('project-text-desc', 1)
  };
}
function hoverProjectEl(el) {
  let parent = el.closest('.projects-wrapper');
  return {
    img: parent.querySelector('.project-img'),
    img_backer: parent.querySelector('.img-backer'),
    title: parent.querySelector('.p-reveal'),
    desc: parent.querySelector('.p-desc-content'),
    button: parent.querySelector('.button-wrapper')
  };
}

/***/ }),

/***/ "./src/utils/context/pageContext.js":
/*!******************************************!*\
  !*** ./src/utils/context/pageContext.js ***!
  \******************************************/
/*! exports provided: PageData, PageDataContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageData", function() { return PageData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageDataContext", function() { return PageDataContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/index */ "./src/utils/data/index.js");
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\utils\\context\\pageContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // export PageData for contextapi access

const PageData = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(); // the props is received and has a value that references
// the page data sets and returns data for that page

function PageDataContext(props) {
  let data = sortProps(props);
  return __jsx(PageData.Provider, {
    value: data,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, props.children);
} // this function will sort the data provided in the props
// it will return a set of data from the data page

function sortProps(props) {
  if (props.pagesets) {
    return Object(_data_index__WEBPACK_IMPORTED_MODULE_1__["findData"])(props.pagesets);
  } else if (props.projectsets) {
    let data = Object(_data_index__WEBPACK_IMPORTED_MODULE_1__["findData"])('projectlists').listofprojects.filter(proj => {
      return proj.title === props.projectsets;
    });
    return _objectSpread(_objectSpread({}, data[0]), Object(_data_index__WEBPACK_IMPORTED_MODULE_1__["findData"])('socials'));
  }
}

/***/ }),

/***/ "./src/utils/context/stateContext.js":
/*!*******************************************!*\
  !*** ./src/utils/context/stateContext.js ***!
  \*******************************************/
/*! exports provided: StateContext, StateProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateContext", function() { return StateContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateProvider", function() { return StateProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pageanimations_motion_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pageanimations/motion/common */ "./src/utils/pageanimations/motion/common.js");
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\utils\\context\\stateContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // global state context route

const StateContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(); // state provder

class StateProvider extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      activeRoute: 'home',
      menuIsOpen: false,
      menuIsAnimating: false,
      isTransitioning: 'initial',
      exitMode: false,
      animation: 'initial'
    });

    _defineProperty(this, "setApplicationState", newState => {
      this.setState(_objectSpread(_objectSpread({}, this.state), newState));
    });

    _defineProperty(this, "setTransitionState", from => {
      if (from === 'top') {
        this.setState({
          menuIsOpen: !this.state.menuIsOpen,
          exitMode: mode(from),
          isTransitioning: Object(_pageanimations_motion_common__WEBPACK_IMPORTED_MODULE_1__["setTransitionState"])(this.state.isTransitioning),
          animation: animmode(from)
        });
      }

      if (from === 'bottom') {
        this.setState({
          exitMode: mode(from),
          isTransitioning: Object(_pageanimations_motion_common__WEBPACK_IMPORTED_MODULE_1__["setTransitionState"])(this.state.isTransitioning),
          animation: animmode(from)
        });
      }
    });

    _defineProperty(this, "setActiveRoute", route => {
      // if the current route does not match to the old route
      // then update the active route state
      if (route != this.state.activeRoute) {
        this.setApplicationState({
          activeRoute: route
        });
      }
    });
  }

  render() {
    return __jsx(StateContext.Provider, {
      value: {
        state: this.state,
        setState: this.setApplicationState,
        setActiveRoute: this.setActiveRoute,
        setTransitionState: this.setTransitionState
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 7
      }
    }, this.props.children);
  }

} // this function checks if the menu button is click
// and will return a string that will animate from the top

const mode = from => {
  return from === 'top' ? 'topExit' : 'bottomExit';
}; // this function checks if any of the button links 
// in the bottom is click that will run the transition


const animmode = from => {
  return from === 'bottom' ? 'topAnimation' : 'bottomAnimation';
};

/***/ }),

/***/ "./src/utils/data/index.js":
/*!*********************************!*\
  !*** ./src/utils/data/index.js ***!
  \*********************************/
/*! exports provided: findData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findData", function() { return findData; });
/* harmony import */ var _pagedata_home_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagedata/home.json */ "./src/utils/data/pagedata/home.json");
var _pagedata_home_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./pagedata/home.json */ "./src/utils/data/pagedata/home.json", 1);
/* harmony import */ var _pagedata_about_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagedata/about.json */ "./src/utils/data/pagedata/about.json");
var _pagedata_about_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./pagedata/about.json */ "./src/utils/data/pagedata/about.json", 1);
/* harmony import */ var _pagedata_projects_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagedata/projects.json */ "./src/utils/data/pagedata/projects.json");
var _pagedata_projects_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./pagedata/projects.json */ "./src/utils/data/pagedata/projects.json", 1);
/* harmony import */ var _pagedata_contact_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagedata/contact.json */ "./src/utils/data/pagedata/contact.json");
var _pagedata_contact_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./pagedata/contact.json */ "./src/utils/data/pagedata/contact.json", 1);
/* harmony import */ var _pagedata_credentials_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagedata/credentials.json */ "./src/utils/data/pagedata/credentials.json");
var _pagedata_credentials_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./pagedata/credentials.json */ "./src/utils/data/pagedata/credentials.json", 1);
/* harmony import */ var _pagedata_privacy_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pagedata/privacy.json */ "./src/utils/data/pagedata/privacy.json");
var _pagedata_privacy_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./pagedata/privacy.json */ "./src/utils/data/pagedata/privacy.json", 1);
/* harmony import */ var _pagedata_notFound_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pagedata/notFound.json */ "./src/utils/data/pagedata/notFound.json");
var _pagedata_notFound_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./pagedata/notFound.json */ "./src/utils/data/pagedata/notFound.json", 1);
/* harmony import */ var _pagedata_listOfProjects_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pagedata/listOfProjects.json */ "./src/utils/data/pagedata/listOfProjects.json");
var _pagedata_listOfProjects_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./pagedata/listOfProjects.json */ "./src/utils/data/pagedata/listOfProjects.json", 1);
/* harmony import */ var _pagedata_socials_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pagedata/socials.json */ "./src/utils/data/pagedata/socials.json");
var _pagedata_socials_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./pagedata/socials.json */ "./src/utils/data/pagedata/socials.json", 1);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const s = lists => {
  return lists.listofprojects.filter((list, i) => {
    return i < 4;
  });
}; // this function will return the json file whenever 
// the route string matches its value.
// this function is called every age initial get props.


const findData = data => {
  switch (data) {
    case 'home':
      return _objectSpread(_objectSpread({}, _pagedata_home_json__WEBPACK_IMPORTED_MODULE_0__), {}, {
        listofprojects: s(_pagedata_listOfProjects_json__WEBPACK_IMPORTED_MODULE_7__)
      }, _pagedata_socials_json__WEBPACK_IMPORTED_MODULE_8__);

    case 'about':
      return _objectSpread(_objectSpread({}, _pagedata_about_json__WEBPACK_IMPORTED_MODULE_1__), _pagedata_socials_json__WEBPACK_IMPORTED_MODULE_8__);

    case 'projects':
      return _objectSpread(_objectSpread(_objectSpread({}, _pagedata_projects_json__WEBPACK_IMPORTED_MODULE_2__), _pagedata_listOfProjects_json__WEBPACK_IMPORTED_MODULE_7__), _pagedata_socials_json__WEBPACK_IMPORTED_MODULE_8__);

    case 'contacts':
      return _objectSpread(_objectSpread({}, _pagedata_contact_json__WEBPACK_IMPORTED_MODULE_3__), _pagedata_socials_json__WEBPACK_IMPORTED_MODULE_8__);

    case 'privacy':
      return _objectSpread(_objectSpread({}, _pagedata_privacy_json__WEBPACK_IMPORTED_MODULE_5__), _pagedata_socials_json__WEBPACK_IMPORTED_MODULE_8__);

    case 'notfound':
      return _objectSpread(_objectSpread({}, _pagedata_notFound_json__WEBPACK_IMPORTED_MODULE_6__), _pagedata_socials_json__WEBPACK_IMPORTED_MODULE_8__);

    case 'credentials':
      return _objectSpread(_objectSpread({}, _pagedata_credentials_json__WEBPACK_IMPORTED_MODULE_4__), _pagedata_socials_json__WEBPACK_IMPORTED_MODULE_8__);

    case 'projectlists':
      return _objectSpread(_objectSpread({}, _pagedata_listOfProjects_json__WEBPACK_IMPORTED_MODULE_7__), _pagedata_socials_json__WEBPACK_IMPORTED_MODULE_8__);

    case 'socials':
      return _pagedata_socials_json__WEBPACK_IMPORTED_MODULE_8__;

    default:
      return null;
  }
};

/***/ }),

/***/ "./src/utils/data/pagedata/about.json":
/*!********************************************!*\
  !*** ./src/utils/data/pagedata/about.json ***!
  \********************************************/
/*! exports provided: headers, withBlocks, skills, followMyReads, quotes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"headers\":{\"title\":[\"About me.\"],\"shortDesc\":\"Building things using modern technology such as programming gave me the ability to actualize my ideas and help individuals and organizations.\",\"textColors\":{\"primary\":\"#41474A\",\"secondary\":\"#6B6F71\"},\"colormodes\":{\"open\":{\"foreground\":\"#EBE9CD\",\"background\":\"#0C5D5A\"},\"close\":{\"foreground\":\"#0C5D5A\",\"background\":\"#CDCDCD\"}},\"background\":\"gray-dotted-background-whole\",\"withSocials\":true,\"withScrollButton\":{\"isTrue\":true,\"type\":\"withText\",\"colors\":{\"lightColor\":\"#35827F\",\"darkColor\":\"#2C6664\"}},\"withImage\":{\"isTrue\":true,\"image\":\"/images/aiman-hero-img.png\"},\"subParagraph\":{\"isTrue\":true,\"content\":[{\"title\":\"Background\",\"text\":\"I grew up in Cebu, Philippines. I speak Tagalog, Cebuano, and English. In college, I studied Philosophy and went to work in hospitality industry for seven years. When I came to the United States, I was so curious about technology that I decided to study web development online. In there, learned various programming languages and frameworks which empowered me to turn my ideas into a reality.  It has also helped me get familiarized to alot of software applications that are essential to building websites and native applications.\"},{\"title\":\"Dream\",\"text\":\"I see myself as a full-stack developer with a strength in front-end and ux/ui design. I like writing clean codes and great ui/ux design. I build fully responsive web applications from designing to code implementation with high quality codes that is scalable and maintainable. I believe that creating a well planned tools and applications can drive a greater impact to growing an organization. My goal is to be a great web/app developer and help organizations and individuals.\"},{\"title\":\"Facts about me\",\"text\":\"I like asian food. I drink tea and coffee. I trade stocks and I like collecting vintage foreign currencies. I do wood working. I read non-fiction books. I have tried biking 130 kms in one day.\"}],\"specialLinks\":{\"isTrue\":true}},\"withCredentials\":{\"isTrue\":false}},\"withBlocks\":{\"background\":\"/images/gray-dotted-background-half.png\",\"blockTitle\":\"skills sets\",\"blockDesc\":\"Even the simplest tools can empower people to do great things. - Biz Stone.\",\"backgroundColor\":\"#F0F0F0\",\"withArrow\":false,\"textcolor\":\"#0C5D5A\"},\"skills\":{\"background\":\"/images/dark-green-dotted-whole.png\",\"messagetext\":\"View projects\",\"withSvg\":false,\"link\":\"/projects\",\"btnType\":\"box-button\",\"color\":\"#347A78\",\"type\":\"withBox\",\"creativeDesign\":{\"title\":\"Creative Design Tools\",\"description\":\"I use various design tools to build prototypes and wireframes easier. These tools also allow me to visualize ideas faster and efficiently. These are the tools I am quite comfortable using with.\",\"skills\":[{\"name\":\"Figma\",\"img\":\"figma\",\"alt\":\"figma\"},{\"name\":\"Webflow\",\"img\":\"webflow\",\"alt\":\"webflow\"},{\"name\":\"Adobe PS\",\"img\":\"adobe ps\",\"alt\":\"adobe photoshop\"},{\"name\":\"Adobe AI\",\"img\":\"adobe ai\",\"alt\":\"adobe illustrator\"},{\"name\":\"Adobe AE\",\"img\":\"adobe ae\",\"alt\":\"adobe after effects\"},{\"name\":\"Adobe XD\",\"img\":\"adobe xd\",\"alt\":\"adobe xd\"}]},\"frontend\":{\"title\":\"Frontend Tools\",\"description\":\"For developing frontend applications I use technologies that allow me build scalable and agile applications. These are the essential tools and frontend frameworks in my tool kit for developing applications and websites. \",\"skills\":[{\"name\":\"Python\",\"img\":\"python\",\"alt\":\"python\"},{\"name\":\"Javascript\",\"img\":\"javascript\",\"alt\":\"javascript\"},{\"name\":\"Php\",\"img\":\"php\",\"alt\":\"php\"},{\"name\":\"NodeJS\",\"img\":\"nodejs\",\"alt\":\"nodejs\"},{\"name\":\"ReactJS\",\"img\":\"reactjs\",\"alt\":\"reactjs\"},{\"name\":\"Django\",\"img\":\"django\",\"alt\":\"django\"},{\"name\":\"VueJS\",\"img\":\"vuejs\",\"alt\":\"vuejs\"},{\"name\":\"GraphQL\",\"img\":\"graphql\",\"alt\":\"graphql\"},{\"name\":\"Gitbash\",\"img\":\"gitbash\",\"alt\":\"gitbash\"},{\"name\":\"HTML5\",\"img\":\"html5\",\"alt\":\"html5\"},{\"name\":\"CSS3\",\"img\":\"css3\",\"alt\":\"css3\"},{\"name\":\"Redux\",\"img\":\"redux\",\"alt\":\"redux\"},{\"name\":\"NPM\",\"img\":\"npm\",\"alt\":\"npm\"},{\"name\":\"jQuery\",\"img\":\"jquery\",\"alt\":\"jquery\"},{\"name\":\"Github\",\"img\":\"github\",\"alt\":\"github\"},{\"name\":\"VSCode\",\"img\":\"vscode\",\"alt\":\"vs code\"},{\"name\":\"Atom\",\"img\":\"atom\",\"alt\":\"atom\"},{\"name\":\"Seo\",\"img\":\"seo\",\"alt\":\"seo\"}]},\"backend\":{\"title\":\"Backend Tools\",\"description\":\"Serving data from the backend is important for building web applications and these are the server-side tools I use to store data and serve it back to the front-end code. \",\"skills\":[{\"name\":\"Firebase\",\"img\":\"firebase\",\"alt\":\"firebase\"},{\"name\":\"MongoDB\",\"img\":\"mongodb\",\"alt\":\"mongodb\"},{\"name\":\"MySQL\",\"img\":\"mysql\",\"alt\":\"mysql\"},{\"name\":\"Express\",\"img\":\"express\",\"alt\":\"express\"}]}},\"followMyReads\":{\"background\":\"/images/light-dotted-background-whole.png\",\"title\":\"Follow my reads.\",\"topDesc\":\"Reading is one of the things that I do to satisfy my curiosity. It helps me understand the world around me better than any social media feeds. Here are some of my reads I recommend to those who share the same curiosity with me.\",\"bottomDesc\":\"Goodreads is an amazon social media platform for book readers. It allows you to share the books that you have read, share your comments and opinions about some books, and follow your favorite authors and readers. I currently have 132 reads. If we share the same curiousity, you can follow all of them\",\"goodreadsLink\":\"https://www.goodreads.com/user/show/84826805-aiman-adlawan\",\"books\":[{\"name\":\"The world as I see it.\",\"img\":\"the world as i see it\",\"alt\":\"the world as i see it\",\"link\":\"www.amazon.com/World-As-I-See/dp/1494877066\"},{\"name\":\"Reluctant Genius.\",\"img\":\"reluctant genius\",\"alt\":\"reluctant genius\",\"link\":\"www.amazon.com/Reluctant-Genius-Alexander-Passion-Invention/dp/1611450608\"},{\"name\":\"Telsa Man out of time.\",\"img\":\"tesla man out of time\",\"alt\":\"telsa man out of time\",\"link\":\"www.amazon.com/Tesla-Time-Cheney-Margaret/dp/B011MF5QTQ\"},{\"name\":\"The boy who invented the television.\",\"img\":\"the boy who invented the television\",\"alt\":\"the boy who invented the television.\",\"link\":\"www.amazon.com/Boy-Who-Invented-Television-Inspiration/dp/0976200007\"}]},\"quotes\":{\"author\":\"Albert Einstein\",\"quote\":\"I have no special talents. I am only passionately curious.\",\"show\":true}}");

/***/ }),

/***/ "./src/utils/data/pagedata/contact.json":
/*!**********************************************!*\
  !*** ./src/utils/data/pagedata/contact.json ***!
  \**********************************************/
/*! exports provided: headers, message, quotes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"headers\":{\"title\":[\"Get in touch.\"],\"shortDesc\":\"Tell me how I can be of help to you, or if you just want to say hi, drop me a message below.\",\"textColors\":{\"primary\":\"#C6C4AF\",\"secondary\":\"#AAA88B\"},\"colormodes\":{\"open\":{\"foreground\":\"#EBE9CD\",\"background\":\"#0C5D5A\"},\"close\":{\"foreground\":\"#EBE9CD\",\"background\":\"#313D43\"}},\"background\":\"dark-dotted-background-whole\",\"withSocials\":true,\"withScrollButton\":{\"isTrue\":true,\"type\":\"withText\",\"colors\":{\"lightColor\":\"#EBE9CD\",\"darkColor\":\"#AAA88B\"}},\"withImage\":{\"isTrue\":false},\"subParagraph\":{\"isTrue\":false},\"withCredentials\":{\"isTrue\":false},\"specialLinks\":{\"isTrue\":false,\"content\":\"about\"}},\"message\":{\"title\":\"Message me.\",\"shortDesc\":\"Few details should be good enough.\",\"background\":\"/images/light-dotted-background-whole.png\"},\"quotes\":{\"author\":\"Henry Ford\",\"quote\":\"Nothing is particularly hard if you divide it into small tasks.\",\"show\":true}}");

/***/ }),

/***/ "./src/utils/data/pagedata/credentials.json":
/*!**************************************************!*\
  !*** ./src/utils/data/pagedata/credentials.json ***!
  \**************************************************/
/*! exports provided: headers, courses, quotes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"headers\":{\"title\":[\"Credentials.\"],\"shortDesc\":\"A creative person is motivated by the desire to achieve not by the desire to beat others.\",\"textColors\":{\"primary\":\"#41474A\",\"secondary\":\"#6B6F71\"},\"colormodes\":{\"open\":{\"foreground\":\"#EBE9CD\",\"background\":\"#0C5D5A\"},\"close\":{\"foreground\":\"#0C5D5A\",\"background\":\"#CDCDCD\"}},\"background\":\"gray-dotted-background-100\",\"withSocials\":true,\"withScrollButton\":{\"isTrue\":true,\"type\":\"withText\",\"colors\":{\"lightColor\":\"#35827F\",\"darkColor\":\"#2C6664\"}},\"withImage\":{\"isTrue\":false},\"subParagraph\":{\"isTrue\":false},\"withCredentials\":{\"isTrue\":true}},\"courses\":[{\"name\":\"Web Application Development with JS and MongoDB\",\"school\":\"University of London and Goldsmith\",\"taken\":\"Coursera\",\"date\":\"July 2019\",\"link\":\"www.coursera.org/account/accomplishments/certificate/X2SAXFKDG6B6\",\"qrCode\":\"web application development\",\"certLink\":\"/\"},{\"name\":\"Server-side Development with NodeJS, Express and MongoDB\",\"school\":\"The Hong Kong University of Science and Technology\",\"taken\":\"Coursera\",\"date\":\"Sept 2019\",\"link\":\"www.coursera.org/account/accomplishments/certificate/XV8FLU36M238\",\"qrCode\":\"server side\",\"certLink\":\"/\"},{\"name\":\"Responsive Website Tutorial and Examples\",\"school\":\"University of London and Goldsmith\",\"taken\":\"Coursera\",\"date\":\"July 2019\",\"link\":\"www.coursera.org/account/accomplishments/certificate/3Z8EH8PHQXFY\",\"qrCode\":\"responsive website\",\"certLink\":\"/\"},{\"name\":\"Introduction to MeteorJS Development\",\"school\":\"University of London and Goldsmith\",\"taken\":\"Coursera\",\"date\":\"June 2019\",\"link\":\"www.coursera.org/account/accomplishments/certificate/65753VXRTTWZ\",\"qrCode\":\"meteorjs development\",\"certLink\":\"/\"},{\"name\":\"Responsive Web Design\",\"school\":\"University of London and Goldsmith\",\"taken\":\"Coursera\",\"date\":\"May 2019\",\"link\":\"www.coursera.org/account/accomplishments/certificate/H8QJYUNS7WDK\",\"qrCode\":\"responsive web design\",\"certLink\":\"/\"},{\"name\":\"Responsive Website Basics\",\"school\":\"University of London and Goldsmith\",\"taken\":\"Coursera\",\"date\":\"July 2018\",\"link\":\"www.coursera.org/account/accomplishments/certificate/JJJ362PLQKJ6\",\"qrCode\":\"responsive website basics\",\"certLink\":\"/\"}],\"quotes\":{\"author\":\"Leonardo da Vinci\",\"quote\":\"Learning never exhausts the mind.\",\"show\":true}}");

/***/ }),

/***/ "./src/utils/data/pagedata/home.json":
/*!*******************************************!*\
  !*** ./src/utils/data/pagedata/home.json ***!
  \*******************************************/
/*! exports provided: headers, withBlocks, projectBlocks, needHelp, quotes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"headers\":{\"title\":[\"web/App developer\",\"& ui designer.\"],\"shortDesc\":\"Hi! I'm Aiman Adlawan, a passionate Front-end Developer and UI Designer based in Bensenville, Illinios.\",\"textColors\":{\"primary\":\"#C6C4AF\",\"secondary\":\"#AAA88B\"},\"colormodes\":{\"open\":{\"foreground\":\"#EBE9CD\",\"background\":\"#0C5D5A\"},\"close\":{\"foreground\":\"#EBE9CD\",\"background\":\"#313D43\"}},\"background\":\"dark-dotted-background-whole\",\"withSocials\":true,\"withScrollButton\":{\"isTrue\":true,\"type\":\"withText\",\"colors\":{\"lightColor\":\"#EBE9CD\",\"darkColor\":\"#AAA88B\"}},\"withImage\":{\"isTrue\":false},\"subParagraph\":{\"isTrue\":false},\"withCredentials\":{\"isTrue\":false},\"specialLinks\":{\"isTrue\":false,\"content\":\"about\"}},\"withBlocks\":{\"background\":\"/images/gray-dotted-background-half.png\",\"blockTitle\":\"projects\",\"backgroundColor\":\"#F0F0F0\",\"blockDesc\":\"These are some of the recent projects and designs I have made.\",\"withArrow\":false,\"textcolor\":\"#0C5D5A\"},\"projectBlocks\":{\"background\":\"/images/green-dotted-background-half.png\",\"blockTitle\":\"view more\",\"backgroundColor\":\"#145250\",\"blockDesc\":\"These are some of the recent projects and designs I have made.\",\"withArrow\":true,\"textcolor\":\"#D3D2C2\",\"link\":\"/projects\"},\"needHelp\":{\"title\":[\"Need help with building\",\"your project?\"],\"shortDesc\":\"If you have a project that you want to get started, or you need  help on your website, or just want to say hi, let’s get in touch.\",\"background\":\"/images/light-dotted-background-whole.png\",\"messagetext\":\"Message me\",\"type\":\"withBox\",\"withSvg\":true,\"btnType\":\"box-button\",\"link\":\"/contacts\",\"color\":\"#347A78\",\"textColors\":{\"primary\":\"#347A78\",\"secondary\":\"#5D8785\"}},\"quotes\":{\"author\":\"Henry Royce\",\"quote\":\"Take the best that exist and make it better.\",\"show\":true}}");

/***/ }),

/***/ "./src/utils/data/pagedata/listOfProjects.json":
/*!*****************************************************!*\
  !*** ./src/utils/data/pagedata/listOfProjects.json ***!
  \*****************************************************/
/*! exports provided: listofprojects, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"listofprojects\":[{\"headers\":{\"colormodes\":{\"open\":{\"foreground\":\"#EBE9CD\",\"background\":\"#0C5D5A\"},\"close\":{\"foreground\":\"#EBE9CD\",\"background\":\"#0C5D5A\"}}},\"title\":\"music-app\",\"shortDesc\":\"a music player app for ios.\",\"desc\":\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, obcaecati. Asperiores voluptate saepe consectetur tenetur quisquam. Harum incidunt sunt, quia aliquam sapiente minus consectetur dignissimos facere error illo natus quisquam!\",\"projectlinks\":{\"internal\":\"/projects/music-app\",\"appLinks\":[{\"text\":\"View source code\",\"link\":\"/github.com\"},{\"text\":\"Launch app\",\"link\":\"aimanski12.web.app\"}]},\"textColors\":{\"primary\":\"#D7D5C2\",\"secondary\":\"#C6C4AF\"},\"bkgColor\":\"#2C6F6C\",\"btnTextColor\":\"#F0EED4\",\"theme\":\"/images/green-header.png\",\"bodybackground\":\"/images/light-dotted-background-whole.png\",\"photo\":{\"teaser\":\"/images/project-one-teaser.png\",\"landing\":\"/images/project-one-image-header.png\",\"screens\":[{\"title\":\"Une Screen Maine\",\"desc\":\"Este tarpa esta para primiera pelicula de la guatsi.\",\"img\":\"/images/project-one-image-header.png\",\"alt\":\"sample-file-alt\"},{\"title\":false,\"desc\":false,\"img\":\"/images/project-one-image-header.png\",\"alt\":\"sample-file-alt\"},{\"title\":false,\"desc\":\"c'est norriture est pour mon ami et mon maman. Tous les jours mangeons une pizza de pomme.\",\"img\":\"/images/project-one-image-header.png\",\"alt\":\"sample-file-alt\"}]},\"categories\":[{\"name\":\"Platform\",\"value\":\"Mobile\"},{\"name\":\"Category\",\"value\":\"Entertainment\"},{\"name\":\"Developer\",\"value\":\"Aiman Adlawan\"}],\"tools\":[\"HTML5\",\"CSS3\",\"Figma\",\"AdobePS\",\"MusicAPI\",\"CrossBiking\",\"Gaussian Math\",\"Combinatorics\",\"Calculus\"],\"quotes\":{\"author\":\"Stephen Hawking\",\"quote\":\"Intelligence is the ability to adapt change.\",\"show\":true}},{\"headers\":{\"colormodes\":{\"open\":{\"foreground\":\"#EBE9CD\",\"background\":\"#0C5D5A\"},\"close\":{\"foreground\":\"#0C5D5A\",\"background\":\"#CDCDCD\"}}},\"title\":\"reservation-app\",\"shortDesc\":\"a reactjs app.\",\"desc\":\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, obcaecati. Asperiores voluptate saepe consectetur tenetur quisquam. Harum incidunt sunt, quia aliquam sapiente minus consectetur dignissimos facere error illo natus quisquam!\",\"projectlinks\":{\"internal\":\"/projects/reservation-app\",\"appLinks\":[{\"text\":\"View source code\",\"link\":\"/github.com\"},{\"text\":\"Launch app\",\"link\":\"aimanski12.web.app\"}]},\"textColors\":{\"primary\":\"#C6C4AF\",\"secondary\":\"#AAA88B\"},\"bkgColor\":\"#DBD9BF\",\"btnTextColor\":\"red\",\"theme\":\"/images/theme-two.png\",\"bodybackground\":\"/images/light-dotted-background-whole.png\",\"photo\":{\"teaser\":\"/images/project-two-teaser.png\",\"landing\":\"/images/project-one-image-header.png\",\"screens\":[{\"title\":\"Une Screen Maine\",\"desc\":\"Este tarpa esta para primiera pelicula de la guatsi.\",\"img\":\"/images/project-one-image-header.png\",\"alt\":\"sample image alt\"},{\"title\":false,\"desc\":false,\"img\":\"/images/project-one-image-header.png\",\"alt\":\"sample image alt\"},{\"title\":false,\"desc\":\"c'est norriture est pour mon ami et mon maman. Tous les jours mangeons une pizza de pomme.\",\"img\":\"/images/project-one-image-header.png\",\"alt\":\"sample image alt\"}]},\"categories\":[{\"name\":\"Platform\",\"value\":\"Mobile\"},{\"name\":\"Category\",\"value\":\"Entertainment\"},{\"name\":\"Developer\",\"value\":\"Aiman Adlawan\"}],\"tools\":[\"HTML5\",\"CSS3\",\"Figma\",\"AdobePS\",\"MusicAPI\",\"CrossBiking\",\"Gaussian Math\",\"Combinatorics\",\"Calculus\"],\"quotes\":{\"author\":\"Stephen Hawking\",\"quote\":\"Intelligence is the ability to adapt change.\",\"show\":true}},{\"headers\":{\"colormodes\":{\"open\":{\"foreground\":\"#EBE9CD\",\"background\":\"#0C5D5A\"},\"close\":{\"foreground\":\"#0C5D5A\",\"background\":\"#EBE9CD\"}}},\"title\":\"electric-bill\",\"shortDesc\":\"online-app-inquiry\",\"desc\":\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, obcaecati. Asperiores voluptate saepe consectetur tenetur quisquam. Harum incidunt sunt, quia aliquam sapiente minus consectetur dignissimos facere error illo natus quisquam!\",\"projectlinks\":{\"internal\":\"/projects/electric-bill\",\"appLinks\":[{\"text\":\"View source code\",\"link\":\"/github.com\"},{\"text\":\"Launch app\",\"link\":\"aimanski12.web.app\"}]},\"textColors\":{\"primary\":\"#C6C4AF\",\"secondary\":\"#AAA88B\"},\"bkgColor\":\"#CCD3D3\",\"btnTextColor\":\"red\",\"theme\":\"/images/theme-three.png\",\"bodybackground\":\"/images/light-dotted-background-whole.png\",\"photo\":{\"teaser\":\"/images/project-three-teaser.png\",\"landing\":\"/images/project-one-image-header.png\",\"screens\":[{\"title\":\"Une Screen Maine\",\"desc\":\"Este tarpa esta para primiera pelicula de la guatsi.\",\"img\":\"/images/project-one-image-header.png\",\"alt\":\"sample image alt\"},{\"title\":false,\"desc\":false,\"img\":\"/images/project-one-image-header.png\",\"alt\":\"sample image alt\"},{\"title\":false,\"desc\":\"c'est norriture est pour mon ami et mon maman. Tous les jours mangeons une pizza de pomme.\",\"img\":\"/images/project-one-image-header.png\",\"alt\":\"sample image alt\"}]},\"categories\":[{\"name\":\"Platform\",\"value\":\"Mobile\"},{\"name\":\"Category\",\"value\":\"Entertainment\"},{\"name\":\"Developer\",\"value\":\"Aiman Adlawan\"}],\"tools\":[\"HTML5\",\"CSS3\",\"Figma\",\"AdobePS\",\"MusicAPI\",\"CrossBiking\",\"Gaussian Math\",\"Combinatorics\",\"Calculus\"],\"quotes\":{\"author\":\"Stephen Hawking\",\"quote\":\"Intelligence is the ability to adapt change.\",\"show\":true}},{\"headers\":{\"colormodes\":{\"open\":{\"foreground\":\"#EBE9CD\",\"background\":\"#0C5D5A\"},\"close\":{\"foreground\":\"#EBE9CD\",\"background\":\"#0C5D5A\"}}},\"title\":\"music-player3\",\"shortDesc\":\"a music player app for ios.\",\"desc\":\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, obcaecati. Asperiores voluptate saepe consectetur tenetur quisquam. Harum incidunt sunt, quia aliquam sapiente minus consectetur dignissimos facere error illo natus quisquam!\",\"projectlinks\":{\"internal\":\"/projects/music-player3\",\"appLinks\":[{\"text\":\"View source code\",\"link\":\"/github.com\"},{\"text\":\"Launch app\",\"link\":\"aimanski12.web.app\"}]},\"textColors\":{\"primary\":\"#C6C4AF\",\"secondary\":\"#AAA88B\"},\"bkgColor\":\"#2C6F6C\",\"btnTextColor\":\"red\",\"theme\":\"/images/theme-one.png\",\"bodybackground\":\"/images/light-dotted-background-whole.png\",\"photo\":{\"teaser\":\"/images/project-one-teaser.png\",\"landing\":\"/images/project-one-image-header.png\",\"screens\":[{\"title\":\"Une Screen Maine\",\"desc\":\"Este tarpa esta para primiera pelicula de la guatsi.\",\"img\":\"/images/project-one-image-header.png\",\"alt\":\"sample image alt\"},{\"title\":false,\"desc\":false,\"img\":\"/images/project-one-image-header.png\",\"alt\":\"sample image alt\"},{\"title\":false,\"desc\":\"c'est norriture est pour mon ami et mon maman. Tous les jours mangeons une pizza de pomme.\",\"img\":\"/images/project-one-image-header.png\",\"alt\":\"sample image alt\"}]},\"categories\":[{\"name\":\"Platform\",\"value\":\"Mobile\"},{\"name\":\"Category\",\"value\":\"Entertainment\"},{\"name\":\"Developer\",\"value\":\"Aiman Adlawan\"}],\"tools\":[\"HTML5\",\"CSS3\",\"Figma\",\"AdobePS\",\"MusicAPI\",\"CrossBiking\",\"Gaussian Math\",\"Combinatorics\",\"Calculus\"],\"quotes\":{\"author\":\"Stephen Hawking\",\"quote\":\"Intelligence is the ability to adapt change.\",\"show\":true}},{\"headers\":{\"colormodes\":{\"open\":{\"foreground\":\"#EBE9CD\",\"background\":\"#0C5D5A\"},\"close\":{\"foreground\":\"#0C5D5A\",\"background\":\"#CDCDCD\"}}},\"title\":\"music-player4\",\"shortDesc\":\"a music player app for ios.\",\"desc\":\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, obcaecati. Asperiores voluptate saepe consectetur tenetur quisquam. Harum incidunt sunt, quia aliquam sapiente minus consectetur dignissimos facere error illo natus quisquam!\",\"projectlinks\":{\"internal\":\"/projects/music-player4\",\"appLinks\":[{\"text\":\"View source code\",\"link\":\"/github.com\"},{\"text\":\"Launch app\",\"link\":\"aimanski12.web.app\"}]},\"textColors\":{\"primary\":\"#C6C4AF\",\"secondary\":\"#AAA88B\"},\"bkgColor\":\"#DBD9BF\",\"btnTextColor\":\"red\",\"theme\":\"/images/theme-two.png\",\"bodybackground\":\"/images/light-dotted-background-whole.png\",\"photo\":{\"teaser\":\"/images/project-two-teaser.png\",\"landing\":\"/images/project-one-image-header.png\",\"screens\":[{\"title\":\"Une Screen Maine\",\"desc\":\"Este tarpa esta para primiera pelicula de la guatsi.\",\"img\":\"/images/project-one-image-header.png\",\"alt\":\"sample image alt\"},{\"title\":false,\"desc\":false,\"img\":\"/images/project-one-image-header.png\",\"alt\":\"sample image alt\"},{\"title\":false,\"desc\":\"c'est norriture est pour mon ami et mon maman. Tous les jours mangeons une pizza de pomme.\",\"img\":\"/images/project-one-image-header.png\",\"alt\":\"sample image alt\"}]},\"categories\":[{\"name\":\"Platform\",\"value\":\"Mobile\"},{\"name\":\"Category\",\"value\":\"Entertainment\"},{\"name\":\"Developer\",\"value\":\"Aiman Adlawan\"}],\"tools\":[\"HTML5\",\"CSS3\",\"Figma\",\"AdobePS\",\"MusicAPI\",\"CrossBiking\",\"Gaussian Math\",\"Combinatorics\",\"Calculus\"],\"quotes\":{\"author\":\"Stephen Hawking\",\"quote\":\"Intelligence is the ability to adapt change.\",\"show\":true}},{\"headers\":{\"colormodes\":{\"open\":{\"foreground\":\"#EBE9CD\",\"background\":\"#0C5D5A\"},\"close\":{\"foreground\":\"#EBE9CD\",\"background\":\"#0C5D5A\"}}},\"title\":\"music-player5\",\"shortDesc\":\"a music player app for ios.\",\"desc\":\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, obcaecati. Asperiores voluptate saepe consectetur tenetur quisquam. Harum incidunt sunt, quia aliquam sapiente minus consectetur dignissimos facere error illo natus quisquam!\",\"projectlinks\":{\"internal\":\"/projects/music-player5\",\"appLinks\":[{\"text\":\"View source code\",\"link\":\"/github.com\"},{\"text\":\"Launch app\",\"link\":\"aimanski12.web.app\"}]},\"textColors\":{\"primary\":\"#C6C4AF\",\"secondary\":\"#AAA88B\"},\"bkgColor\":\"#CCD3D3\",\"btnTextColor\":\"red\",\"theme\":\"/images/theme-three.png\",\"bodybackground\":\"/images/light-dotted-background-whole.png\",\"photo\":{\"teaser\":\"/images/project-three-teaser.png\",\"landing\":\"/images/project-one-image-header.png\",\"screens\":[{\"title\":\"Une Screen Maine\",\"desc\":\"Este tarpa esta para primiera pelicula de la guatsi.\",\"img\":\"/images/project-one-image-header.png\",\"alt\":\"sample image alt\"},{\"title\":false,\"desc\":false,\"img\":\"/images/project-one-image-header.png\",\"alt\":\"sample image alt\"},{\"title\":false,\"desc\":\"c'est norriture est pour mon ami et mon maman. Tous les jours mangeons une pizza de pomme.\",\"img\":\"/images/project-one-image-header.png\",\"alt\":\"sample image alt\"}]},\"categories\":[{\"name\":\"Platform\",\"value\":\"Mobile\"},{\"name\":\"Category\",\"value\":\"Entertainment\"},{\"name\":\"Developer\",\"value\":\"Aiman Adlawan\"}],\"tools\":[\"HTML5\",\"CSS3\",\"Figma\",\"AdobePS\",\"MusicAPI\",\"CrossBiking\",\"Gaussian Math\",\"Combinatorics\",\"Calculus\"],\"quotes\":{\"author\":\"Stephen Hawking\",\"quote\":\"Intelligence is the ability to adapt change.\",\"show\":true}}]}");

/***/ }),

/***/ "./src/utils/data/pagedata/notFound.json":
/*!***********************************************!*\
  !*** ./src/utils/data/pagedata/notFound.json ***!
  \***********************************************/
/*! exports provided: headers, quotes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"headers\":{\"title\":[\"Your lost mate!\"],\"shortDesc\":\"Sorry, this page is not available.\",\"button\":{\"text\":\"Go back to main\",\"withSvg\":false,\"type\":\"withBox\",\"backgroundColor\":\"#347A78\",\"textColor\":\"#C6C4AF\"},\"colormodes\":{\"open\":{\"foreground\":\"#EBE9CD\",\"background\":\"#0C5D5A\"},\"close\":{\"foreground\":\"#EBE9CD\",\"background\":\"#313D43\"}},\"background\":{\"giff\":\"/images/typing.gif\",\"color\":\"#2C6664\"}},\"quotes\":{\"author\":\"Stephen Hawking\",\"quote\":\"Intelligence is the ability to adapt change.\",\"show\":false}}");

/***/ }),

/***/ "./src/utils/data/pagedata/privacy.json":
/*!**********************************************!*\
  !*** ./src/utils/data/pagedata/privacy.json ***!
  \**********************************************/
/*! exports provided: headers, quotes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"headers\":{\"title\":[\"Privacy Policy\"],\"shortDesc\":\"This Privacy Policy describes how your personal information is collected, used and shared when you visit from\",\"paragraphs\":[{\"title\":\"Personal information I collect.\",\"desc\":\"When you visit the ‘Site’,  I automatically collect certain information about your device, including information about your web browser, IP address and time zone. Additionally, as you browse the ‘Site’, I collect information about the individual web pages that you view and information about how you interact with the ‘Site’. I refer to this automatically-collected information as “Device Information.”\"},{\"title\":\"How do we use your personal information?\",\"desc\":\"I use the Device Information that I collect to help screen for potential risk (in particular, your IP address), and more generally to improve and optimize my Site (for example, by generating analytics about how visitors browse and interact with the ‘Site’).\"},{\"title\":\"Do not track.\",\"desc\":\"I do not alter any data collection and usage when I see a ‘Do Not Track’ signal from your browser. This is to protect the user's privacy and to ensure no privacy is breached.\"},{\"title\":\"How I share your personal information?\",\"desc\":\"I only use your personal information to gather analytics about how users interact with the ‘Site’ and to response to your inquiries from the contacts page. Moreover, I do not share any of your information to other third parties except only when I comply to applicable laws and regulations, search warrant or other lawful request for information I receive.\"},{\"title\":\"Data retention.\",\"desc\":\"When you contact me through the Message Me Form from the contacts page, the information you provide will be kept for future correspondence or any other communication purposes. I will only delete it until I receive a request from you with and by using the same information you initially provide.\"},{\"title\":\"Policy change.\",\"desc\":\"I may update this privacy policy from time to time in order to reflect changes according to standard practices or other operational, legal or regulatory reasons. The date stated below indicates the latest revision of this privacy policy.\"}],\"date\":\"February 10, 2020\",\"textColors\":{\"primary\":\"#448683\",\"secondary\":\"#7C7C7C\"},\"colormodes\":{\"open\":{\"foreground\":\"#EBE9CD\",\"background\":\"#0C5D5A\"},\"close\":{\"foreground\":\"#448683\",\"background\":\"#F4F4F4\"}},\"background\":\"\",\"withSocials\":false,\"withScrollButton\":{\"isTrue\":false},\"withImage\":{\"isTrue\":false},\"subParagraph\":{\"isTrue\":false},\"withCredentials\":{\"isTrue\":false}},\"quotes\":{\"author\":\"Vincent van Gogh\",\"quote\":\"Great things are done by a series of small things brought together.\",\"show\":false}}");

/***/ }),

/***/ "./src/utils/data/pagedata/projects.json":
/*!***********************************************!*\
  !*** ./src/utils/data/pagedata/projects.json ***!
  \***********************************************/
/*! exports provided: headers, withBlocks, otherProjects, quotes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"headers\":{\"title\":[\"My projects.\"],\"shortDesc\":\"Hi! I'm Aiman Adlawan, a passionate Front-end Developer and UI Designer based in Bensenville, Illinios.\",\"textColors\":{\"primary\":\"#C6C4AF\",\"secondary\":\"#AAA88B\"},\"colormodes\":{\"open\":{\"foreground\":\"#EBE9CD\",\"background\":\"#0C5D5A\"},\"close\":{\"foreground\":\"#EBE9CD\",\"background\":\"#145250\"}},\"background\":\"\",\"withSocials\":false,\"withScrollButton\":{\"isTrue\":false},\"withImage\":{\"isTrue\":false},\"subParagraph\":{\"isTrue\":false},\"withCredentials\":{\"isTrue\":false},\"specialLinks\":{\"isTrue\":false,\"content\":\"about\"},\"withShortProjects\":true},\"withBlocks\":{\"background\":\"gray-dotted-background-half\",\"blockTitle\":\"projects\",\"blockDesc\":\"These are some of the recent projects and designs I have made.\",\"withArrow\":false},\"otherProjects\":{\"github\":{\"title\":\"Github projects\",\"desc\":\"Interested to see some of my repositories? Here are some of them, or you can see all of them in my\",\"withLinks\":true,\"otherProjects\":[{\"name\":\"Pandora\",\"link\":\"/\",\"num\":53},{\"name\":\"Barcode-Scanner\",\"link\":\"/\",\"num\":52},{\"name\":\"Face-Detect\",\"link\":\"/\",\"num\":51},{\"name\":\"Word-clock\",\"link\":\"/\",\"num\":50},{\"name\":\"Analogue-Clock\",\"link\":\"/\",\"num\":49},{\"name\":\"World-Clock\",\"link\":\"/\",\"num\":48},{\"name\":\"Currency-converter\",\"link\":\"/\",\"num\":47},{\"name\":\"Twitter-Finder\",\"link\":\"/\",\"num\":46},{\"name\":\"Rock-Paper-Scissors\",\"link\":\"/\",\"num\":45},{\"name\":\"Quotes-Generator\",\"link\":\"/\",\"num\":44}]},\"designs\":{\"title\":\"UX/UI Designs\",\"desc\":\"You can also view my creative design from any of these creative design platforms\",\"withLinks\":false,\"platforms\":[{\"name\":\"Behance\",\"link\":\"https://www.behance.net/aimanadlawan\",\"type\":\"behance\"},{\"name\":\"Dribbble\",\"link\":\"https://dribbble.com/aimanadlawan\",\"type\":\"dribbble\"}]}},\"quotes\":{\"author\":\"George Bernard Shaw\",\"quote\":\"Life isn't about finding yourself. Life is about creating yourself.\",\"show\":true}}");

/***/ }),

/***/ "./src/utils/data/pagedata/socials.json":
/*!**********************************************!*\
  !*** ./src/utils/data/pagedata/socials.json ***!
  \**********************************************/
/*! exports provided: socials, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"socials\":[{\"name\":\"behance\",\"data_name\":\"behance icon\",\"link\":\"https://www.behance.net/aimanadlawan\"},{\"name\":\"dribbble\",\"data_name\":\"dribbble icon\",\"link\":\"https://dribbble.com/aimanadlawan\"},{\"name\":\"goodreads\",\"data_name\":\"goodreads icon\",\"link\":\"https://www.goodreads.com/user/show/84826805-aiman-adlawan\"},{\"name\":\"twitter\",\"data_name\":\"twitter icon\",\"link\":\"https://twitter.com/aimanski12\"},{\"name\":\"linkedin\",\"data_name\":\"behance icon\",\"link\":\"https://www.linkedin.com/\"}]}");

/***/ }),

/***/ "./src/utils/pageanimations/motion/common.js":
/*!***************************************************!*\
  !*** ./src/utils/pageanimations/motion/common.js ***!
  \***************************************************/
/*! exports provided: setTransitionState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTransitionState", function() { return setTransitionState; });
// this function will return a striing that will
// determine of the current state has to be initial or initial two.
// the string will be used as an initial value for the framer motion
// in animating the transition
const setTransitionState = state => {
  if (state === 'initialOne') return 'initialTwo';
  if (state === 'initialTwo') return 'initialOne';

  if (state !== 'initialOne' || state !== 'initialTwo') {
    return 'initialOne';
  }
};

/***/ }),

/***/ "./src/utils/pageanimations/motion/mainvariant.js":
/*!********************************************************!*\
  !*** ./src/utils/pageanimations/motion/mainvariant.js ***!
  \********************************************************/
/*! exports provided: variants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variants", function() { return variants; });
const variants = {
  initial: {// opacity: 1,
  },
  enter: {// opacity: 1,
    // transition: {
    //   duration: 0.25,
    // },
  },
  topExit: {
    opacity: 1,
    transition: {
      delay: .5 // duration: 5

    }
  },
  bottomExit: {
    opacity: 1,
    transition: {
      // delay: .3
      duration: .3
    }
  }
};

/***/ }),

/***/ "./src/utils/pageanimations/motion/toplayer.js":
/*!*****************************************************!*\
  !*** ./src/utils/pageanimations/motion/toplayer.js ***!
  \*****************************************************/
/*! exports provided: logoAnim, topAnim */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoAnim", function() { return logoAnim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topAnim", function() { return topAnim; });
let easing = [0.6, 0.05, 0.01, 0.99];
const logoAnim = {
  initial: {
    opacity: 0
  },
  initAnimate: {
    opacity: 0
  },
  initialOne: {
    opacity: 0.7
  },
  initialTwo: {
    opacity: 0.7
  },
  topAnimation: {
    opacity: 0,
    transition: {
      delay: 0.35,
      duration: .15
    }
  },
  bottomAnimation: {
    opacity: 0,
    transition: {
      delay: 0.35,
      duration: .25
    }
  },
  topExit: {
    opacity: 0.7,
    transition: {
      delay: .7,
      duration: .1,
      ease: easing
    }
  },
  bottomExit: {
    opacity: 0.7,
    transition: {
      delay: .1,
      duration: .05,
      ease: easing
    }
  }
};
const topAnim = {
  initial: {
    width: '0%',
    right: 0
  },
  initAnimate: {
    width: '0%'
  },
  initialOne: {
    width: '100%',
    left: 0
  },
  initialTwo: {
    width: '100%',
    right: 0
  },
  topAnimation: {
    width: '0%',
    float: 'right',
    // right: 0,
    transition: {
      delay: 0.2,
      duration: .3,
      ease: easing
    }
  },
  bottomAnimation: {
    width: '0%',
    float: 'right',
    // right: 0,
    transition: {
      delay: .2,
      duration: .3,
      ease: easing
    }
  },
  topExit: {
    width: '100%',
    left: 0,
    transition: {
      delay: 0.8,
      duration: .4,
      ease: easing
    }
  },
  bottomExit: {
    width: '100%',
    left: 0,
    transition: {
      // delay: ,
      duration: .4,
      ease: easing
    }
  }
};

/***/ }),

/***/ "./src/utils/pageanimations/navbarmenu/menuClickEvents.js":
/*!****************************************************************!*\
  !*** ./src/utils/pageanimations/navbarmenu/menuClickEvents.js ***!
  \****************************************************************/
/*! exports provided: openMenu, closeMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openMenu", function() { return openMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeMenu", function() { return closeMenu; });
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs */ "animejs");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_elementSorter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/elementSorter */ "./src/utils/common/elementSorter.js");

 // this function is for the dark green menu background
// this will run when the use clicks the menu icon

function openMenu() {
  const el = Object(_common_elementSorter__WEBPACK_IMPORTED_MODULE_1__["menuClickElements"])();
  el.container.style.overflow = 'hidden';
  el.menu_container.style.display = 'block';
  el.social_navicons.style.transform = 'translateY(100%)';
  el.copyright_runner.style.transform = 'translateY(100%)';
  setDisplay(el.section_block, 'none');
  setDisplay(el.short_project, 'none');

  if (el.text_active && el.backer_active) {
    el.backer_active.style.transform = 'translateY(-15px)';
    el.text_active.style.color = '#C6C4AF';
    el.backer_active.style.color = '#267572';
  }

  for (let x = 0; x < 4; x++) {
    el.menu_list_container[x].style.transform = 'translateY(100%)';
  } // run the the dark green background


  animejs__WEBPACK_IMPORTED_MODULE_0___default()({
    targets: el.menu_runners,
    duration: 400,
    width: '100%',
    easing: 'easeInOutQuad',
    delay: (el, i) => {
      return i * 160;
    },
    complete: function (anim) {
      show(el);
    }
  });
} // this will show the other element for menu page.
// these elements are the social icons, square image, privacy

function show(el) {
  animejs__WEBPACK_IMPORTED_MODULE_0___default()({
    targets: el.menu_list_container,
    opacity: 1,
    easing: 'easeOutCubic',
    duration: 450,
    translateY: '0%',
    delay: (el, i) => {
      return i * 120;
    }
  });
  animejs__WEBPACK_IMPORTED_MODULE_0___default()({
    targets: [el.social_navicons, el.copyright_runner],
    easing: 'easeOutCubic',
    opacity: 1,
    duration: 450,
    translateY: '0%'
  });
  animejs__WEBPACK_IMPORTED_MODULE_0___default()({
    targets: el.square_img,
    easing: 'linear',
    duration: 450,
    opacity: 1,
    complete: function (anim) {
      el.right_icons.style.overflow = 'visible';
    }
  });
} // this function is for the menu item. this will 
// close the menu when the user clicks any of the item


function closeMenu(closeContainer) {
  const el = Object(_common_elementSorter__WEBPACK_IMPORTED_MODULE_1__["menuClickElements"])();
  el.right_icons.style.overflow = 'hidden';
  let tl = animejs__WEBPACK_IMPORTED_MODULE_0___default.a.timeline({
    easing: 'linear'
  });
  tl.add({
    targets: [el.social_navicons, el.copyright_runner, el.square_img, el.menu_list_container],
    duration: 400,
    opacity: 0
  }).add({
    targets: el.menu_runners,
    duration: 275,
    width: '0%',
    delay: (el, i) => {
      return i * 120;
    },
    complete: function (anim) {
      el.menu_container.style.display = 'none';

      if (closeContainer) {
        el.container.style.overflow = 'visible';
      }

      if (el.text_active && el.backer_active) {
        el.text_active.style.color = '#2C6664';
        el.backer_active.style.color = '#0C5D5A';
      }

      setDisplay(el.section_block, 'block');
      setDisplay(el.short_project, 'block');
    }
  });
}

function setDisplay(el, display) {
  if (el) {
    el.style.display = display;
  }
}

/***/ }),

/***/ "./src/utils/pageanimations/navbarmenu/menuHoverEvents.js":
/*!****************************************************************!*\
  !*** ./src/utils/pageanimations/navbarmenu/menuHoverEvents.js ***!
  \****************************************************************/
/*! exports provided: mouseEnter, mouseOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseEnter", function() { return mouseEnter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseOut", function() { return mouseOut; });
/* harmony import */ var _common_elementSorter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/elementSorter */ "./src/utils/common/elementSorter.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animejs */ "animejs");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_1__);

 // function to run when mouse enter on menu a

function mouseEnter(colorModes, event) {
  const el = Object(_common_elementSorter__WEBPACK_IMPORTED_MODULE_0__["navHoverElements"])();
  let front;
  if (event === 'close') front = el.front;
  if (event === 'open') front = el.close_paths;
  animejs__WEBPACK_IMPORTED_MODULE_1___default()({
    targets: front,
    color: colorModes.background,
    fill: colorModes.background,
    duration: 200,
    easing: 'easeInQuad',
    begin: function (anim) {
      el.middle.style.width = 0;
      el.middle.style.height = 0;
      el.middle.style.opacity = 1;
    }
  });
  animejs__WEBPACK_IMPORTED_MODULE_1___default()({
    targets: el.back,
    background: colorModes.foreground,
    duration: 150,
    width: '90%',
    height: '90%',
    easing: 'easeOutSine'
  });
} // function to run when mouse moves out of the menu area

function mouseOut(colorModes, event) {
  const el = Object(_common_elementSorter__WEBPACK_IMPORTED_MODULE_0__["navHoverElements"])();
  let front;
  if (event === 'close') front = el.front;
  if (event === 'open') front = el.close_paths;
  animejs__WEBPACK_IMPORTED_MODULE_1___default()({
    targets: front,
    color: colorModes.foreground,
    fill: colorModes.foreground,
    duration: 200,
    easing: 'easeInQuad'
  });
  animejs__WEBPACK_IMPORTED_MODULE_1___default()({
    targets: el.middle,
    background: colorModes.background,
    duration: 200,
    width: '100%',
    height: '100%',
    easing: 'easeInQuad',
    complete: function (anim) {
      el.back.style.width = 0;
      el.back.style.height = 0;
      setTimeout(function () {
        el.middle.style.opacity = 0;
      }, 50);
    }
  });
}

/***/ }),

/***/ "./src/utils/pageanimations/navbarmenu/menuListEvents.js":
/*!***************************************************************!*\
  !*** ./src/utils/pageanimations/navbarmenu/menuListEvents.js ***!
  \***************************************************************/
/*! exports provided: mouseEnter, mouseOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseEnter", function() { return mouseEnter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseOut", function() { return mouseOut; });
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs */ "animejs");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_0__);

function mouseEnter(e, event) {
  let parent = e.target.closest('.menu-list-container');
  let backer = parent.querySelector('.menu-list-backer');
  let elementParent = e.target.closest('.list-front');

  if (!elementParent.classList.contains('active')) {
    if (event === 'hoverIn') {
      animateFonts(backer, '#267572', -20);
      animateFonts(e.target.parentElement, '#C6C4AF', -7);
      animateFonts(e.target, '#C6C4AF', -7);
    } else {
      animateFonts(e.target, '#2C6664', -5);
      animateFonts(backer, '#0C5D5A', -20);
    }
  }
}
function mouseOut(e) {
  let elementParent = e.target.closest('.list-front');
  let parent = e.target.closest('.menu-list-container');
  let backer = parent.querySelector('.menu-list-backer');

  if (!elementParent.classList.contains('active')) {
    // let b = el.nextElementSibling.firstElementChild 
    animateFonts(e.target.parentElement, '#267572', 0);
    animateFonts(e.target, '#267572', 0);
    animateFonts(backer, '#0C5D5A', 0);
  }
}

function animateFonts(el, color, y) {
  animejs__WEBPACK_IMPORTED_MODULE_0___default()({
    targets: el,
    duration: 200,
    color: color,
    translateY: `${y}px`,
    easing: 'easeInQuad'
  });
}

/***/ }),

/***/ "./src/utils/pageanimations/navbarmenu/navbartransition.js":
/*!*****************************************************************!*\
  !*** ./src/utils/pageanimations/navbarmenu/navbartransition.js ***!
  \*****************************************************************/
/*! exports provided: fadeNavbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeNavbar", function() { return fadeNavbar; });
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs */ "animejs");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_0__);

function fadeNavbar() {
  const n = document.querySelector('.navbar-container');
  let tl = animejs__WEBPACK_IMPORTED_MODULE_0___default.a.timeline({
    easing: 'easeInQuad',
    duration: 200
  });
  tl.add({
    targets: n,
    opacity: 0
  }).add({
    duration: 200
  }).add({
    targets: n,
    opacity: 1
  });
}

/***/ }),

/***/ "./src/utils/pageanimations/scrollanimation/scrollDown.js":
/*!****************************************************************!*\
  !*** ./src/utils/pageanimations/scrollanimation/scrollDown.js ***!
  \****************************************************************/
/*! exports provided: scrollDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollDown", function() { return scrollDown; });
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs */ "animejs");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_0__);

function scrollDown() {
  const html = document.querySelector('html');
  const body = document.querySelector('body');
  const moveTo = window.innerHeight; // we need the html and the body to make the animation more smoother

  animejs__WEBPACK_IMPORTED_MODULE_0___default()({
    targets: [html, body],
    scrollTop: moveTo,
    duration: 1500,
    easing: 'easeInOutQuad'
  });
}

/***/ }),

/***/ "./src/utils/pageanimations/scrollanimation/scrollanimation.js":
/*!*********************************************************************!*\
  !*** ./src/utils/pageanimations/scrollanimation/scrollanimation.js ***!
  \*********************************************************************/
/*! exports provided: scrollAnimation, debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollAnimation", function() { return scrollAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs */ "animejs");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_0__);

function scrollAnimation() {
  // console.log(page)
  if (window.innerWidth > 768) {
    // slideInElementsOnScroll(wait)
    slideInAnimation();
  }
}
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
; // function that will debounce the scroll event to every
// 70ms so to avoid performance issue
// export function debounce (func, wait = 100, immediate = true){
//   let timeout;
//   return function() {
//     let context = this, args = arguments;
//     let later = function () {
//       timeout = null;
//       if(!immediate) {
//         func.apply(context, args)
//       }
//     }
//     let callNow = immediate && timeout
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait)
//     if(callNow) {
//       func.apply(context, args)
//     }
//   }
// }
// function for slide animation

function slideInAnimation() {
  let els = document.querySelectorAll('.show');
  els.forEach(el => {
    // const slideInAt = (window.scrollY + window.innerHeight) - (el.clientHeight/2)
    const slideInAt = window.scrollY + window.innerHeight - 60;
    const clientHeight = el.getBoundingClientRect().top + window.scrollY;
    const isPassed = slideInAt > clientHeight;
    const elIsNotDone = !el.classList.contains('done');
    const elChildren = el.children;
    const isProjectImage = el.classList.contains('project-image');
    const isMessageCont = el.classList.contains('message-container');

    if (isPassed && elIsNotDone) {
      removeOverlay(el);

      if (elChildren.length === 2) {
        showSlider(elChildren);
      } else if (elChildren.length === 1) {
        // check if this element has a class of project-image
        if (isProjectImage) setTimer(showOpacity, elChildren[0], el); // check if this class has a message-container

        if (isMessageCont) {
          el.classList.add('done');
          showOpacity(elChildren[0]);
        } // check if the element does not contain both the class names


        if (!isProjectImage && !isMessageCont) {
          setTimer(slideUp, elChildren[0], el);
        }
      }
    }
  });
}

function setTimer(func, child, el) {
  setTimeout(() => {
    func(child);
    el.classList.add('done');
  }, 600);
}

function removeOverlay(el) {
  const hasHeaderClass = el.classList.contains('header-social-container');
  const hasScrollClass = el.classList.contains('scroll-cover');

  if (hasHeaderClass || hasScrollClass) {
    setTimeout(() => {
      el.style.overflow = 'visible';
    }, 1200);
  }
} // animation that will run the slider and we are using the 
// timeline animation make a smooth effect


function showSlider(el) {
  let tl = animejs__WEBPACK_IMPORTED_MODULE_0___default.a.timeline({});
  const parent = el[1].closest('.show');
  parent.classList.add('done');
  tl.add({
    targets: el[1],
    width: '100%',
    easing: 'easeInSine',
    duration: 300
  }).add({
    targets: el[1],
    duration: 400,
    complete: function (anim) {
      el[1].style.right = 0;
    }
  }).add({
    targets: el[1],
    width: '0%',
    easing: 'easeInSine',
    duration: 300,
    begin: function (anim) {
      slideUp(el[0]);
    }
  });
} // function that will make the image opacity from 
// 0 to 1 to make the image visible


function showOpacity(el) {
  // el.style.opacity = 0
  animejs__WEBPACK_IMPORTED_MODULE_0___default()({
    targets: el,
    opacity: {
      duration: 500,
      value: 1,
      delay: 200,
      easing: 'easeInSine'
    }
  });
} // this will make the text or paragraphs visible
// this slide up the text


function slideUp(el) {
  let tl = animejs__WEBPACK_IMPORTED_MODULE_0___default.a.timeline({});
  el.style.transform = 'translateY(60px)';
  tl.add({
    targets: el,
    opacity: {
      duration: 550,
      value: 1,
      delay: 200,
      easing: 'linear'
    },
    translateY: {
      value: 0,
      easing: 'easeOutElastic(10, 2)',
      duration: 700
    }
  });
} // call the animation function when we are scrolling the page
// export function slideInElementsOnScroll(wait) {
//   debounce(slideInAnimation(), wait)
// }

/***/ }),

/***/ "./src/utils/pageanimations/toplayover/toplayover.js":
/*!***********************************************************!*\
  !*** ./src/utils/pageanimations/toplayover/toplayover.js ***!
  \***********************************************************/
/*! exports provided: introAnim, openTopLayer, closeTopLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "introAnim", function() { return introAnim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openTopLayer", function() { return openTopLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeTopLayer", function() { return closeTopLayer; });
/* harmony import */ var _common_elementSorter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/elementSorter */ "./src/utils/common/elementSorter.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animejs */ "animejs");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_1__);

 // function for intro animation

function introAnim(hasSession) {
  const el = Object(_common_elementSorter__WEBPACK_IMPORTED_MODULE_0__["topLayoverElements"])(); // if it has a session no animation to run

  if (hasSession === true) {
    el.top.style.display = 'none';
  } // if it has no session then we will run the animation


  if (hasSession === false) {
    el.top.style.display = 'block';
    el.container.style.overflow = 'hidden';
    el.svg.style.opacity = 0;
    el.text.style.opacity = 0;
    el.top.style.display = 'block';
    el.runner.style.height = '100vh';
    el.runner.style.width = '100%';
    runTopAnimation(el);
  }
} // function to run if the browser has no sessions

function runTopAnimation(el) {
  let tl = animejs__WEBPACK_IMPORTED_MODULE_1___default.a.timeline({
    easing: 'easeInSine'
  });
  tl.add({
    targets: [el.svg, el.text],
    opacity: 1,
    duration: 1000
  }).add({
    duration: 500
  }).add({
    targets: [el.text],
    opacity: 0,
    duration: 400
  }).add({
    targets: [el.text],
    opacity: 1,
    duration: 400
  }).add({
    duration: 700
  }).add({
    targets: [el.text],
    opacity: 0,
    duration: 400
  }).add({
    targets: [el.text],
    opacity: 1,
    duration: 400
  }).add({
    duration: 700
  }).add({
    targets: [el.text],
    opacity: 0,
    duration: 400
  }).add({
    targets: [el.text],
    opacity: 1,
    duration: 400
  }).add({
    duration: 700
  }).add({
    targets: [el.text, el.svg],
    opacity: 0,
    duration: 800
  }).add({
    duration: 700
  }).add({
    targets: [el.runner],
    height: 0,
    easing: 'easeInSine',
    duration: 500
  }).add({
    duration: 100,
    complete: function (anim) {
      el.top.style.display = 'none';
      el.runner.style.height = '100vh';
      el.runner.style.width = '0';
      el.container.style.overflow = 'visible';
    }
  });
} // function to open and run the top layer animation


function openTopLayer() {
  const el = Object(_common_elementSorter__WEBPACK_IMPORTED_MODULE_0__["topLayoverElements"])();
  el.top.style.display = 'block';
  el.container.style.overflow = 'hidden';
  el.runner.style.height = '100vh';
  el.runner.style.width = '0';
  el.svg.style.width = '70%';
  let tl = animejs__WEBPACK_IMPORTED_MODULE_1___default.a.timeline();
  tl.add({
    targets: el.runner,
    duration: 500,
    width: '100%',
    easing: 'linear' // complete: function (anim) {
    //   anime({
    //     targets: el.svg,
    //     opacity: 1,
    //     duration: 500,
    //   })
    // } 

  }); // .add({
  //   duration: 500,
  //   begin: function (anim) {
  //     el.runner.style.right = 0
  //     el.runner.style.float = 'right'
  //   }
  // })
} // function for closing the top layer

function closeTopLayer() {
  const el = Object(_common_elementSorter__WEBPACK_IMPORTED_MODULE_0__["topLayoverElements"])();
  el.top.style.display = 'block';
  el.container.style.overflow = 'hidden';
  el.runner.style.height = '100vh';
  el.runner.style.width = '100%';
  el.runner.style.right = 0;
  el.runner.style.float = 'right';
  el.svg.style.width = '70%';
  const nav = document.querySelector('.navbar-container');
  let tl = animejs__WEBPACK_IMPORTED_MODULE_1___default.a.timeline({
    easing: 'easeInSine'
  });
  tl.add({
    duration: 400
  }).add({
    targets: el.runner,
    duration: 400,
    width: '0%',
    begin: function (anim) {
      el.svg.style.opacity = 0;
    }
  }).add({
    duration: 40,
    complete: function (anim) {
      el.top.style.display = 'none';
      el.container.style.overflow = 'visible';
      el.runner.style.height = '100vh';
      el.runner.style.width = '100%';
      el.runner.style.left = 0;
      el.runner.style.float = 'left';
      nav.style.opacity = 1;
    }
  });
}

/***/ }),

/***/ "./src/utils/sessiondata/commonfunctions.js":
/*!**************************************************!*\
  !*** ./src/utils/sessiondata/commonfunctions.js ***!
  \**************************************************/
/*! exports provided: sessionStore, generateUrl, getUserData, getIP, checkIfExp, getTime, checkRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sessionStore", function() { return sessionStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateUrl", function() { return generateUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserData", function() { return getUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIP", function() { return getIP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIfExp", function() { return checkIfExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTime", function() { return getTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkRoute", function() { return checkRoute; });
/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ua-parser-js */ "ua-parser-js");
/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ua_parser_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);

 // get sessionStorage
// export const sessionStore = JSON.parse(sessionStore.getItem('websession'))

function sessionStore() {
  let session = window.sessionStorage.websession;

  if (session === undefined) {
    return false;
  } else {
    return JSON.parse(session);
  }
} // firebase url

const firebaseUrl = 'https://aimanadlawansite.firebaseio.com'; // function to generate firebase url

function generateUrl(urlDirection) {
  const d = getTime('url');
  let url = `${firebaseUrl}/${urlDirection}/${d.y}/${d.m}/${d.dy}_${d.de}`;
  return url;
} // function to get user data

const getUserData = () => {
  let parser = new ua_parser_js__WEBPACK_IMPORTED_MODULE_0__["UAParser"]();
  return parser.getResult();
}; // get user device data

const getIP = async () => {
  let userIp;
  await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://ipapi.co/json/').then(res => {
    if (res.status === 200) {
      if (res.data) {
        let data = res.data;
        userIp = {
          cap: data.country_capital,
          city: data.city,
          country: data.country_name,
          ip: data.ip,
          lat: data.latitude,
          long: data.longitude,
          timeZ: data.timezone,
          region: data.region,
          postC: data.postal,
          internet: data.org
        };
      }
    }
  }).catch(err => {
    if (err) {
      userIp = {
        blocked: 'User blocked this data.'
      };
    }
  });
  return await userIp;
}; // check if the session has expired

function checkIfExp(time) {
  let now = getTime('now');
  let runTime = Math.floor((now - time) / 1000 / 60);

  if (runTime >= 60) {
    return true;
  } else {
    return false;
  }
} // function to get time

const getTime = url => {
  const date = new Date();
  let d = date.getDate();
  let month = date.getMonth(); // get time for url structure query

  if (url === 'url') {
    return {
      y: date.getFullYear(),
      m: `${n(month + 1)}_${mn[date.getMonth()]}`,
      dy: n(d),
      de: dt[date.getDay()]
    };
  } else if (url === 'timeOfVisit') {
    // get time for the time of visit
    return {
      time: `${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`
    };
  } else if (url === 'now') {
    // get time for the time of visit
    return date.getTime();
  }
}; // filter number if data is single digit

const n = d => {
  return d < 10 ? `0${d}` : d;
}; // set the month to the exact number index of the array


const mn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; // set the day to the exact number index of the array

const dt = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let routes = ['home', 'about', 'projects', 'contacts', 'privacy', 'credentials', 'projects/projects/music-app', 'projects/reservation-app', 'projects/electric-bill', 'projects/music-player3', 'projects/music-player4', 'projects/music-player5']; // this function will generate a return the current route
// for the state

const checkRoute = route => {
  let r = route.slice(1, 50);
  let url = r === '' ? 'home' : r;
  let b;
  let a = routes.filter(route => {
    return route === url;
  });

  if (a[0] === undefined) {
    b = 'notFound';
  } else {
    b = a[0];
  }

  return b;
};

/***/ }),

/***/ "./src/utils/sessiondata/sessionStorage.js":
/*!*************************************************!*\
  !*** ./src/utils/sessiondata/sessionStorage.js ***!
  \*************************************************/
/*! exports provided: checkforsession, setSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkforsession", function() { return checkforsession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSession", function() { return setSession; });
/* harmony import */ var _commonfunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commonfunctions */ "./src/utils/sessiondata/commonfunctions.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/common */ "./src/utils/common/common.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


 // function to check page session. return boolean

async function checkforsession() {
  const session = Object(_commonfunctions__WEBPACK_IMPORTED_MODULE_0__["sessionStore"])();
  let route = Object(_common_common__WEBPACK_IMPORTED_MODULE_1__["checkRoute"])(window.location.pathname);
  let hasSession;

  if (session) {
    let isExp = Object(_commonfunctions__WEBPACK_IMPORTED_MODULE_0__["checkIfExp"])(session.timeStamp);

    if (isExp) {
      hasSession = false;
      updateSession(session._id, route, true);
    } else {
      hasSession = true;
      updateSession(session._id, route, false);
    }
  } else {
    hasSession = false;

    let _id = await saveDataToFirebase(route);

    setSession(_id);
  }

  return hasSession;
} // functionto update the session

async function updateSession(id, route, exp) {
  let url = Object(_commonfunctions__WEBPACK_IMPORTED_MODULE_0__["generateUrl"])('visitor');
  let routeUrl = `${url}/${id}/routesVisited/routesSeen.json`;
  let routes = await getRoutesVisited(routeUrl);
  routes.push(route);
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.put(`${url}/${id}/routesVisited/routesSeen.json`, routes).then(res => {
    if (res.data) {
      if (exp) setSession(id);
    }
  }).catch(err => {
    if (err) {
      new Promise.reject(err);
      if (exp) setSession(id);
    }
  });
} // function to collect the visited routes from firebase


async function getRoutesVisited(routeUrl) {
  let routes = [];
  await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(routeUrl).then(res => {
    if (res.data) {
      routes = res.data;
    }
  }).catch(err => {
    if (err) {
      routes = ['there was an error'];
    }
  });
  return await routes;
}

async function saveDataToFirebase(route) {
  let _id = false;
  let userIp = await Object(_commonfunctions__WEBPACK_IMPORTED_MODULE_0__["getIP"])();
  let user = Object(_commonfunctions__WEBPACK_IMPORTED_MODULE_0__["getUserData"])();
  let time = Object(_commonfunctions__WEBPACK_IMPORTED_MODULE_0__["getTime"])('timeOfVisit');
  let routesVisited = {
    initial: route,
    routesSeen: [route]
  }; // generate visited url

  let url = Object(_commonfunctions__WEBPACK_IMPORTED_MODULE_0__["generateUrl"])('visitor');
  await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`${url}.json`, {
    userIp,
    user,
    time,
    routesVisited
  }).then(res => {
    if (res.data) _id = res.data.name;
  }).catch(err => {
    if (err) new Promise.reject(err);
  });
  return await _id;
}

function setSession(id) {
  let data = {
    _isVisited: true,
    _id: id,
    timeStamp: Object(_commonfunctions__WEBPACK_IMPORTED_MODULE_0__["getTime"])('now')
  };
  sessionStorage.setItem('websession', JSON.stringify(data));
}

/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./src/pages/about.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\Web Dev\Main Files\Official Website\newdesign\Main\src\pages\about.js */"./src/pages/about.js");


/***/ }),

/***/ "animejs":
/*!**************************!*\
  !*** external "animejs" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("animejs");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "ua-parser-js":
/*!*******************************!*\
  !*** external "ua-parser-js" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ua-parser-js");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9ucy9CdXR0b25zLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0J1dHRvbnMvV2l0aEJveC9XaXRoQm94LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVySXRlbS9Db3B5UmlnaHQvQ29weVJpZ2h0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlckl0ZW0vU29jaWFsSWNvbnMvU29jaWFsSWNvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVyby9IZXJvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9TY3JvbGxCdG4vU2Nyb2xsQnRuLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9Tb2NpYWxJY29uL1NvY2lhbEljb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyVGV4dEJsb2NrL0hlYWRlclRleHRCbG9jay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NZW51Q29udGFpbmVyL01lbnVDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVudUNvbnRhaW5lci9NZW51UnVubmVyL01lbnVSdW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVudUNvbnRhaW5lci9NZW51V3JhcHBlci9NZW51V3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NZW51TGlzdC9Gb290ZXJNZW51L0Zvb3Rlck1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVudUxpc3QvVG9wTWVudUxpc3QvTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdmJhci9OYXZiYXJMb2dvL05hdmJhckxvZ28uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhck1lbnUvTmF2YmFyTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uQmxvY2tzL0NvbXBvbmVudHMvRGVzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbkJsb2Nrcy9Db21wb25lbnRzL1RpdGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb25CbG9ja3MvU2VjdGlvbkJsb2Nrcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdWJQYXJhZ3JhcGhzL1BhcmFncmFwaExpbmtzL1BhcmFncmFwaExpbmtzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1N1YlBhcmFncmFwaHMvU3VicGFyYWdyYXBocy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdmdzL0JyYW5kTG9nby9CcmFuZExvZ28uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3Zncy9DbG9zZS9DbG9zZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdmdzL0xvZ29zL0xvZ29zLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1N2Z3MvTG9nb3MvU2Nyb2xsU3Zncy9BcnJvd1JpZ2h0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1N2Z3MvTG9nb3MvU2Nyb2xsU3Zncy9CZWhhbmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1N2Z3MvTG9nb3MvU2Nyb2xsU3Zncy9EcmliYmJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdmdzL0xvZ29zL1Njcm9sbFN2Z3MvRW52ZWxvcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdmdzL0xvZ29zL1Njcm9sbFN2Z3MvR2l0aHViLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1N2Z3MvTG9nb3MvU2Nyb2xsU3Zncy9XaXRoVGV4dHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3Zncy9Tb2NpYWxzL1NvY2lhbC9CZWhhbmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1N2Z3MvU29jaWFscy9Tb2NpYWwvRHJpYmJibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3Zncy9Tb2NpYWxzL1NvY2lhbC9Hb29kcmVhZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3Zncy9Tb2NpYWxzL1NvY2lhbC9MaW5rZWRpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdmdzL1NvY2lhbHMvU29jaWFsL1R3aXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3Zncy9Tb2NpYWxzL1NvY2lhbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVG9wTGF5b3Zlci9Ub3BMYXlvdmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL0Fib3V0L015UmVhZHMvQ29tcG9uZW50cy9Cb29rcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9BYm91dC9NeVJlYWRzL0NvbXBvbmVudHMvQm90dG9tRGVzYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9BYm91dC9NeVJlYWRzL0NvbXBvbmVudHMvVGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvQWJvdXQvTXlSZWFkcy9Db21wb25lbnRzL1RvcERlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvQWJvdXQvTXlSZWFkcy9NeVJlYWRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL0Fib3V0L1NraWxscy9Ta2lsbC9Ta2lsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9BYm91dC9Ta2lsbHMvU2tpbGxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL0NyZWRlbnRpYWwvQ3JlZGVudGlhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9DcmVkZW50aWFsL2NvbXBvbmVudHMvQ3JlZGVudGlhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9DcmVkZW50aWFsL2NvbXBvbmVudHMvUXJDb2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY29tbW9uL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY29tbW9uL2VsZW1lbnRTb3J0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NvbnRleHQvcGFnZUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NvbnRleHQvc3RhdGVDb250ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9kYXRhL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9wYWdlYW5pbWF0aW9ucy9tb3Rpb24vY29tbW9uLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9wYWdlYW5pbWF0aW9ucy9tb3Rpb24vbWFpbnZhcmlhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3BhZ2VhbmltYXRpb25zL21vdGlvbi90b3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvcGFnZWFuaW1hdGlvbnMvbmF2YmFybWVudS9tZW51Q2xpY2tFdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3BhZ2VhbmltYXRpb25zL25hdmJhcm1lbnUvbWVudUhvdmVyRXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9wYWdlYW5pbWF0aW9ucy9uYXZiYXJtZW51L21lbnVMaXN0RXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9wYWdlYW5pbWF0aW9ucy9uYXZiYXJtZW51L25hdmJhcnRyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3BhZ2VhbmltYXRpb25zL3Njcm9sbGFuaW1hdGlvbi9zY3JvbGxEb3duLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9wYWdlYW5pbWF0aW9ucy9zY3JvbGxhbmltYXRpb24vc2Nyb2xsYW5pbWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9wYWdlYW5pbWF0aW9ucy90b3BsYXlvdmVyL3RvcGxheW92ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3Nlc3Npb25kYXRhL2NvbW1vbmZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc2Vzc2lvbmRhdGEvc2Vzc2lvblN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5pbWVqc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnJhbWVyLW1vdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidWEtcGFyc2VyLWpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiXSwibmFtZXMiOlsidXJsIiwib3JpZ2luIiwibGFzdEhyZWYiLCJsYXN0QXMiLCJsYXN0UmVzdWx0IiwiaHJlZiIsImFzIiwicmVzdWx0IiwiZm9ybWF0RnVuYyIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsIm9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zb2xlIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRVcmwiLCJhc0hyZWYiLCJlIiwibm9kZU5hbWUiLCJ0YXJnZXQiLCJpc0xvY2FsIiwic2Nyb2xsIiwiUm91dGVyIiwic2hhbGxvdyIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsInByb3BzIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRQYXRocyIsInJlc29sdmVkSHJlZiIsInBhcnNlZEFzIiwiaGFuZGxlUmVmIiwicmVmIiwiaXNQcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJwYXRocyIsImVyciIsInJlbmRlciIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsImVsIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJvbkNsaWNrIiwicHJvY2VzcyIsIlJlYWN0Iiwid2FybiIsIlByb3BUeXBlcyIsInJlcXVpcmUiLCJleGFjdCIsIkxpbmsiLCJyZXBsYWNlIiwicGFzc0hyZWYiLCJ2YWx1ZSIsInNpbmdsZXRvblJvdXRlciIsInJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJnZXQiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50IiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJwYXRoIiwicHJlcGFyZVJvdXRlIiwidG9Sb3V0ZSIsImF0dGVtcHRzIiwiaXNTZXJ2ZXJSZW5kZXIiLCJwYXRobmFtZSIsImFkZEJhc2VQYXRoIiwiX19ORVhUX0RBVEFfXyIsImJ1aWxkSWQiLCJkZWxCYXNlUGF0aCIsImNyZWRlbnRpYWxzIiwicmVzIiwiZ2V0UmVzcG9uc2UiLCJkYXRhIiwicm91dGUiLCJxdWVyeSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiUHJvbWlzZSIsImZldGNoTmV4dERhdGEiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsInVwZGF0ZSIsIm1vZCIsIm5ld0RhdGEiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsIm9wdGlvbnMiLCJjaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwicmVzb2x2ZSIsIm1ldGhvZCIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwibWlzc2luZ1BhcmFtcyIsInBhcmFtIiwicmVqZWN0IiwiYXNQYXRobmFtZSIsInJvdXRlSW5mbyIsImVycm9yIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwiaGFuZGxlRXJyb3IiLCJwYWdlIiwiZ2lwRXJyIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJjYW5jZWxsZWQiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsIlRFU1RfUk9VVEUiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcmFtcyIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJlc2NhcGVkUm91dGUiLCJlc2NhcGVSZWdleCIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJpc09wdGlvbmFsIiwiJDEiLCJpc0NhdGNoQWxsIiwicG9zIiwicmVwZWF0IiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJrZXkiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInByb3RvY29sIiwiaG9zdG5hbWUiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJCdXR0b25zIiwiYnV0dG9uIiwidHlwZSIsImNvbG9ycyIsImJ0blR5cGUiLCJsaW5rIiwidGV4dCIsIndpdGhTdmciLCJXaXRoQm94Iiwic2V0VHJhbnNpdGlvblN0YXRlIiwidXNlQ29udGV4dCIsIlN0YXRlQ29udGV4dCIsInN2ZyIsImNsaWNrIiwiRm9vdGVyIiwicXVvdGVzIiwiUGFnZURhdGEiLCJzaG93IiwicXVvdGUiLCJhdXRob3IiLCJDb3B5UmlnaHQiLCJmcm9tIiwiZnJvbVRvcCIsImNsb3NlbmF2YmFyIiwiY2xvc2VNZW51IiwiZmFkZU5hdmJhciIsImNvbG9yIiwicENvbG9yIiwiU29jaWFsSWNvbnMiLCJzb2NpYWxzIiwic29jaWFsc0ljb24iLCJtYXAiLCJzb2NpYWwiLCJpIiwiY29sb3JNb2RlIiwiY29udGFpbmVyIiwiSGVhZGVyIiwiaGVhZGVycyIsImhlYWRlckNvbnRlbnQiLCJiYWNrZ3JvdW5kIiwid2l0aEltYWdlIiwiaXNUcnVlIiwic3ViUGFyYWdyYXBoIiwid2l0aENyZWRlbnRpYWxzIiwid2l0aFNvY2lhbHMiLCJ3aXRoU2Nyb2xsQnV0dG9uIiwiY29sb3Jtb2RlcyIsImNsb3NlIiwiSGVybyIsImltZyIsImNvbnRleHQiLCJpbWFnZSIsIlNjcm9sbEJ0biIsInNjcm9sbERvd24iLCJTb2NpYWxJY29uIiwiSGVhZGVyVGV4dEJsb2NrIiwiaGVhZGVyVGV4dCIsInRpdGxlIiwidGV4dENvbG9ycyIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJmb250V2VpZ2h0Iiwic2hvcnREZXNjIiwiTWVudUNvbnRhaW5lciIsIk1lbnVSdW5uZXIiLCJNZW51V3JhcHBlciIsIkZvb3Rlck1lbnUiLCJtZW51cyIsIm1lbnVzTGlzdCIsIm1lbnUiLCJNZW51Iiwic3RhdGUiLCJzZXRBY3RpdmVSb3V0ZSIsImN1cnJlbnRSb3V0ZSIsImNoZWNrUm91dGUiLCJ1c2VSb3V0ZXIiLCJzZXRUaW1lb3V0IiwibWVudUxpc3QiLCJhY3RpdmVSb3V0ZSIsIm1vdXNlRW50ZXIiLCJtb3VzZU91dCIsIk5hdmJhciIsIk5hdmJhckxvZ28iLCJtZW51SXNPcGVuIiwib3BlbiIsImZvcmVncm91bmQiLCJOYXZiYXJNZW51Iiwic2V0U3RhdGUiLCJob3ZlckluIiwiaG92ZXJPdXQiLCJtZW51SXNBbmltYXRpbmciLCJvcGVuTWVudSIsInNjYWxlIiwiRGVzY3JpcHRpb24iLCJ0ZXh0Y29sb3IiLCJkZXNjIiwid2l0aEFycm93IiwiVGl0bGUiLCJTZWN0aW9uQmxvY2tzIiwid2l0aEJsb2NrcyIsInByb2plY3RCbG9ja3MiLCJmaW5kRGF0YSIsImJsb2NrcyIsImJsb2NrVGl0bGUiLCJibG9ja0Rlc2MiLCJiYWNrZ3JvdW5kQ29sb3IiLCJQYXJhZ3JhcGhMaW5rcyIsImV4aXRNb2RlIiwiaXNUcmFuc2l0aW9uaW5nIiwiYW5pbWF0aW9uIiwiU3VicGFyYWdyYXBocyIsInNlY3Rpb25zIiwiY29udGVudCIsInNwZWNpYWxMaW5rcyIsIkJyYW5kTG9nbyIsIkNsb3NlIiwiU2Nyb2xsIiwiV2l0aG91dFRleHQiLCJCZWhhbmNlIiwiRHJpYmJibGUiLCJFbnZlbG9wIiwiR2l0aHViIiwiV2l0aFRleHRzIiwiZGFya0NvbG9yIiwibGlnaHRDb2xvciIsIkdvb2RyZWFkcyIsIkxpbmtlZCIsIlR3aXR0ZXIiLCJTb2NpYWxzIiwic29jIiwicyIsImljb24iLCJUb3BMYXlvdmVyIiwidG9wQW5pbSIsImxvZ29BbmltIiwiQm9va3MiLCJib29rcyIsImJvb2siLCJhbHQiLCJCb3R0b21EZXNjIiwiVG9wRGVzYyIsIkZvbGxvd015UmVhZHMiLCJmb2xsb3dNeVJlYWRzIiwidG9wRGVzYyIsImdvb2RyZWFkc0xpbmsiLCJib3R0b21EZXNjIiwiU2tpbGwiLCJza2lsbHMiLCJza2lsbCIsImRlc2NyaXB0aW9uIiwiU2tpbGxzIiwiY3JlYXRlRGVzaWduIiwiY3JlYXRpdmVEZXNpZ24iLCJmcm9udGVuZCIsImJhY2tlbmQiLCJtZXNzYWdldGV4dCIsIkNyZWRlbnRpYWwiLCJjb3Vyc2VzIiwiY291cnNlIiwiY2VydExpbmsiLCJxckNvZGUiLCJzY2hvb2wiLCJ0YWtlbiIsImRhdGUiLCJRckNvZGUiLCJBYm91dCIsInVzZUVmZmVjdCIsInJlc2l6ZSIsInNjcm9sbEFuaW1hdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZWJvdW5jZSIsInZhcmlhbnRzIiwicmVzaXplRWwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVzaXplRWxlbWVudHMiLCJ3IiwiaW5uZXJXaWR0aCIsIm1haW5fY29udGFpbmVyIiwic3R5bGUiLCJ3aWR0aCIsIm5hdmJhcl9jb250YWluZXIiLCJtZW51X2NvbnRhaW5lciIsIm1lbnVfd3JhcHBlciIsIm1lbnVfcnVubmVyIiwidG9wX2NvbnRhaW5lciIsInJvdXRlcyIsInIiLCJzbGljZSIsImIiLCJhIiwiZmlsdGVyIiwidW5kZWZpbmVkIiwicUVsIiwicXVlcnlTZWxlY3RvckFsbCIsInF1ZXJ5U2VsZWN0b3IiLCJuYXZIb3ZlckVsZW1lbnRzIiwibWlkZGxlIiwiY2xvc2VfcGF0aHMiLCJmcm9udCIsImxvZ29FbGVtZW50cyIsInQiLCJsIiwibWVudUNsaWNrRWxlbWVudHMiLCJtZW51X3J1bm5lcnMiLCJzcXVhcmVfaW1nIiwicmlnaHRfaWNvbnMiLCJtZW51X2xpc3RfY29udGFpbmVyIiwiY29weXJpZ2h0X3J1bm5lciIsInNvY2lhbF9uYXZpY29ucyIsInRleHRfYWN0aXZlIiwiYmFja2VyX2FjdGl2ZSIsInNlY3Rpb25fYmxvY2siLCJzaG9ydF9wcm9qZWN0IiwidG9wTGF5b3ZlckVsZW1lbnRzIiwicnVubmVyIiwidG9wIiwicHJvamVjdFJlc2l6ZUVsIiwiaW1nX2Rlc2MiLCJwcm9qZWN0X2ltZyIsImltZ19iYWNrZXIiLCJwcm9qZWN0X3RleHRfZGVzYyIsImhvdmVyUHJvamVjdEVsIiwicGFyZW50IiwiY2xvc2VzdCIsImNyZWF0ZUNvbnRleHQiLCJQYWdlRGF0YUNvbnRleHQiLCJzb3J0UHJvcHMiLCJwYWdlc2V0cyIsInByb2plY3RzZXRzIiwibGlzdG9mcHJvamVjdHMiLCJwcm9qIiwiU3RhdGVQcm92aWRlciIsIm5ld1N0YXRlIiwibW9kZSIsImFuaW1tb2RlIiwic2V0QXBwbGljYXRpb25TdGF0ZSIsImxpc3RzIiwibGlzdCIsImhvbWUiLCJhYm91dCIsInByb2plY3RzIiwiY29udGFjdHMiLCJwcml2YWN5Iiwibm90Zm91bmQiLCJpbml0aWFsIiwiZW50ZXIiLCJ0b3BFeGl0Iiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJkZWxheSIsImJvdHRvbUV4aXQiLCJkdXJhdGlvbiIsImVhc2luZyIsImluaXRBbmltYXRlIiwiaW5pdGlhbE9uZSIsImluaXRpYWxUd28iLCJ0b3BBbmltYXRpb24iLCJib3R0b21BbmltYXRpb24iLCJlYXNlIiwicmlnaHQiLCJsZWZ0IiwiZmxvYXQiLCJvdmVyZmxvdyIsImRpc3BsYXkiLCJ0cmFuc2Zvcm0iLCJzZXREaXNwbGF5IiwieCIsImFuaW1lIiwidGFyZ2V0cyIsImNvbXBsZXRlIiwiYW5pbSIsInRyYW5zbGF0ZVkiLCJjbG9zZUNvbnRhaW5lciIsInRsIiwidGltZWxpbmUiLCJhZGQiLCJjb2xvck1vZGVzIiwiZmlsbCIsImJlZ2luIiwiaGVpZ2h0IiwiYmFja2VyIiwiZWxlbWVudFBhcmVudCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYW5pbWF0ZUZvbnRzIiwicGFyZW50RWxlbWVudCIsInkiLCJuIiwiaHRtbCIsImJvZHkiLCJtb3ZlVG8iLCJpbm5lckhlaWdodCIsInNjcm9sbFRvcCIsInNsaWRlSW5BbmltYXRpb24iLCJmdW5jIiwid2FpdCIsInRpbWVvdXQiLCJleGVjdXRlZEZ1bmN0aW9uIiwiYXJncyIsImxhdGVyIiwiY2xlYXJUaW1lb3V0IiwiZWxzIiwiZm9yRWFjaCIsInNsaWRlSW5BdCIsInNjcm9sbFkiLCJjbGllbnRIZWlnaHQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJpc1Bhc3NlZCIsImVsSXNOb3REb25lIiwiZWxDaGlsZHJlbiIsImlzUHJvamVjdEltYWdlIiwiaXNNZXNzYWdlQ29udCIsInJlbW92ZU92ZXJsYXkiLCJsZW5ndGgiLCJzaG93U2xpZGVyIiwic2V0VGltZXIiLCJzaG93T3BhY2l0eSIsInNsaWRlVXAiLCJoYXNIZWFkZXJDbGFzcyIsImhhc1Njcm9sbENsYXNzIiwiaW50cm9BbmltIiwiaGFzU2Vzc2lvbiIsInJ1blRvcEFuaW1hdGlvbiIsIm9wZW5Ub3BMYXllciIsImNsb3NlVG9wTGF5ZXIiLCJuYXYiLCJzZXNzaW9uU3RvcmUiLCJzZXNzaW9uIiwic2Vzc2lvblN0b3JhZ2UiLCJ3ZWJzZXNzaW9uIiwiSlNPTiIsInBhcnNlIiwiZmlyZWJhc2VVcmwiLCJnZW5lcmF0ZVVybCIsInVybERpcmVjdGlvbiIsImQiLCJnZXRUaW1lIiwiZHkiLCJkZSIsImdldFVzZXJEYXRhIiwicGFyc2VyIiwiVUFQYXJzZXIiLCJnZXRSZXN1bHQiLCJnZXRJUCIsInVzZXJJcCIsImF4aW9zIiwidGhlbiIsInN0YXR1cyIsImNhcCIsImNvdW50cnlfY2FwaXRhbCIsImNpdHkiLCJjb3VudHJ5IiwiY291bnRyeV9uYW1lIiwiaXAiLCJsYXQiLCJsYXRpdHVkZSIsImxvbmciLCJsb25naXR1ZGUiLCJ0aW1lWiIsInRpbWV6b25lIiwicmVnaW9uIiwicG9zdEMiLCJwb3N0YWwiLCJpbnRlcm5ldCIsIm9yZyIsImNhdGNoIiwiYmxvY2tlZCIsImNoZWNrSWZFeHAiLCJ0aW1lIiwibm93IiwicnVuVGltZSIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJnZXREYXRlIiwibW9udGgiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwibW4iLCJkdCIsImdldERheSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJjaGVja2ZvcnNlc3Npb24iLCJsb2NhdGlvbiIsImlzRXhwIiwidGltZVN0YW1wIiwidXBkYXRlU2Vzc2lvbiIsIl9pZCIsInNhdmVEYXRhVG9GaXJlYmFzZSIsInNldFNlc3Npb24iLCJpZCIsImV4cCIsInJvdXRlVXJsIiwiZ2V0Um91dGVzVmlzaXRlZCIsInB1dCIsInVzZXIiLCJyb3V0ZXNWaXNpdGVkIiwicm91dGVzU2VlbiIsInBvc3QiLCJfaXNWaXNpdGVkIiwic2V0SXRlbSIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztR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LEdBQWI7QUFDRDs7QUFFTSxTQUFTRSxVQUFULENBQW9CQyxFQUFwQixFQUF3QjtBQUM3QixNQUFJOWUsSUFBSSxHQUFHO0FBQ1R1ZixjQUFVLEVBQUUsSUFESDtBQUVUWixPQUFHLEVBQUVHLEVBRkk7QUFHVEwsYUFBUyxFQUFFbkQsZ0VBQU8sQ0FBQyxLQUFEO0FBSFQsR0FBWDtBQUtBUixnQkFBYyxDQUFDMEUsT0FBZixDQUF1QixZQUF2QixFQUFxQ3hFLElBQUksQ0FBQ3lFLFNBQUwsQ0FBZXpmLElBQWYsQ0FBckM7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFHRCxvQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiZGVjbGFyZSBjb25zdCBfX05FWFRfREFUQV9fOiBhbnlcblxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCByZXNvbHZlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQcmVmZXRjaE9wdGlvbnMgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyBhZGRCYXNlUGF0aCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuXG5mdW5jdGlvbiBpc0xvY2FsKGhyZWY6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCB1cmwgPSBwYXJzZShocmVmLCBmYWxzZSwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gcGFyc2UoZ2V0TG9jYXRpb25PcmlnaW4oKSwgZmFsc2UsIHRydWUpXG5cbiAgcmV0dXJuIChcbiAgICAhdXJsLmhvc3QgfHwgKHVybC5wcm90b2NvbCA9PT0gb3JpZ2luLnByb3RvY29sICYmIHVybC5ob3N0ID09PSBvcmlnaW4uaG9zdClcbiAgKVxufVxuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBGb3JtYXRSZXN1bHQgPSB7IGhyZWY6IHN0cmluZzsgYXM/OiBzdHJpbmcgfVxuXG5mdW5jdGlvbiBtZW1vaXplZEZvcm1hdFVybChmb3JtYXRGdW5jOiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4gRm9ybWF0UmVzdWx0KSB7XG4gIGxldCBsYXN0SHJlZjogbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RBczogdW5kZWZpbmVkIHwgbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RSZXN1bHQ6IG51bGwgfCBGb3JtYXRSZXN1bHQgPSBudWxsXG4gIHJldHVybiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4ge1xuICAgIGlmIChsYXN0UmVzdWx0ICYmIGhyZWYgPT09IGxhc3RIcmVmICYmIGFzID09PSBsYXN0QXMpIHtcbiAgICAgIHJldHVybiBsYXN0UmVzdWx0XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gZm9ybWF0RnVuYyhocmVmLCBhcylcbiAgICBsYXN0SHJlZiA9IGhyZWZcbiAgICBsYXN0QXMgPSBhc1xuICAgIGxhc3RSZXN1bHQgPSByZXN1bHRcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0VXJsKHVybDogVXJsKTogc3RyaW5nIHtcbiAgcmV0dXJuIHVybCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCkgOiB1cmxcbn1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG5cbmxldCBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChvYnNlcnZlcikge1xuICAgIHJldHVybiBvYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBDb21wb25lbnQ8TGlua1Byb3BzPiB7XG4gIHA6IGJvb2xlYW5cblxuICBjb25zdHJ1Y3Rvcihwcm9wczogTGlua1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuICB9XG5cbiAgY2xlYW5VcExpc3RlbmVycyA9ICgpID0+IHt9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcbiAgfVxuXG4gIGdldFBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBjb25zdCB7IGhyZWY6IHBhcnNlZEhyZWYsIGFzOiBwYXJzZWRBcyB9ID0gdGhpcy5mb3JtYXRVcmxzKFxuICAgICAgdGhpcy5wcm9wcy5ocmVmLFxuICAgICAgdGhpcy5wcm9wcy5hc1xuICAgIClcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBwYXJzZWRIcmVmKVxuICAgIHJldHVybiBbcmVzb2x2ZWRIcmVmLCBwYXJzZWRBcyA/IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEFzKSA6IHJlc29sdmVkSHJlZl1cbiAgfVxuXG4gIGhhbmRsZVJlZihyZWY6IEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wICYmIEludGVyc2VjdGlvbk9ic2VydmVyICYmIHJlZiAmJiByZWYudGFnTmFtZSkge1xuICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcblxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgICAgcHJlZmV0Y2hlZFtcbiAgICAgICAgICB0aGlzLmdldFBhdGhzKCkuam9pbihcbiAgICAgICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICAgICAnJSdcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycyA9IGxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnByZWZldGNoKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbiAgLy8gYXMgcGVyIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sXG4gIGZvcm1hdFVybHMgPSBtZW1vaXplZEZvcm1hdFVybCgoaHJlZiwgYXNIcmVmKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IGFkZEJhc2VQYXRoKGZvcm1hdFVybChocmVmKSksXG4gICAgICBhczogYXNIcmVmID8gYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGFzSHJlZikpIDogYXNIcmVmLFxuICAgIH1cbiAgfSlcblxuICBsaW5rQ2xpY2tlZCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyBub2RlTmFtZSwgdGFyZ2V0IH0gPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgICBpZiAoXG4gICAgICBub2RlTmFtZSA9PT0gJ0EnICYmXG4gICAgICAoKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgICAgIGUubWV0YUtleSB8fFxuICAgICAgICBlLmN0cmxLZXkgfHxcbiAgICAgICAgZS5zaGlmdEtleSB8fFxuICAgICAgICAoZS5uYXRpdmVFdmVudCAmJiBlLm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKSlcbiAgICApIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuXG4gICAgaWYgKCFpc0xvY2FsKGhyZWYpKSB7XG4gICAgICAvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBocmVmID0gcmVzb2x2ZShwYXRobmFtZSwgaHJlZilcbiAgICBhcyA9IGFzID8gcmVzb2x2ZShwYXRobmFtZSwgYXMpIDogaHJlZlxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBsZXQgeyBzY3JvbGwgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgICB9XG5cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICBSb3V0ZXJbdGhpcy5wcm9wcy5yZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgc2hhbGxvdzogdGhpcy5wcm9wcy5zaGFsbG93LFxuICAgIH0pLnRoZW4oKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcHJlZmV0Y2gob3B0aW9ucz86IFByZWZldGNoT3B0aW9ucyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wIHx8IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgY29uc3QgcGF0aHMgPSB0aGlzLmdldFBhdGhzKClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgUm91dGVyLnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8gMF0sIHBhdGhzWy8qIGFzUGF0aCAqLyAxXSwgb3B0aW9ucykuY2F0Y2goXG4gICAgICAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgIHRocm93IGVyclxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICAgIHByZWZldGNoZWRbXG4gICAgICBwYXRocy5qb2luKFxuICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICAnJSdcbiAgICAgIClcbiAgICBdID0gdHJ1ZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBocmVmLCBhcyB9ID0gdGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy5hcylcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICAgIH1cblxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICAgIGNvbnN0IHByb3BzOiB7XG4gICAgICBvbk1vdXNlRW50ZXI6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgICAgaHJlZj86IHN0cmluZ1xuICAgICAgcmVmPzogYW55XG4gICAgfSA9IHtcbiAgICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVSZWYoZWwpXG5cbiAgICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uTW91c2VFbnRlcjogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZWZldGNoKHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICAgIH0sXG4gICAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICB0aGlzLmxpbmtDbGlja2VkKGUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfVxuXG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKFxuICAgICAgdGhpcy5wcm9wcy5wYXNzSHJlZiB8fFxuICAgICAgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpXG4gICAgKSB7XG4gICAgICBwcm9wcy5ocmVmID0gYXMgfHwgaHJlZlxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICBpZiAoXG4gICAgICAgIHByb3BzLmhyZWYgJiZcbiAgICAgICAgdHlwZW9mIF9fTkVYVF9EQVRBX18gIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydFxuICAgICAgKSB7XG4gICAgICAgIHByb3BzLmhyZWYgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChwcm9wcy5ocmVmKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHByb3BzKVxuICB9XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCB3YXJuID0gZXhlY09uY2UoY29uc29sZS5lcnJvcilcblxuICAvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbiAgY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpXG4gIGNvbnN0IGV4YWN0ID0gcmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpXG4gIC8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbiAgTGluay5wcm9wVHlwZXMgPSBleGFjdCh7XG4gICAgaHJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsXG4gICAgYXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBwcmVmZXRjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hhbGxvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGFzc0hyZWY6IFByb3BUeXBlcy5ib29sLFxuICAgIHNjcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAocHJvcHM6IGFueSwgcHJvcE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIGBXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9LFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgOiBwYXRoXG59XG5cbmZ1bmN0aW9uIHRvUm91dGUocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLydcbn1cblxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGg6IHN0cmluZykgPT5cbiAgdG9Sb3V0ZSghcGF0aCB8fCBwYXRoID09PSAnLycgPyAnL2luZGV4JyA6IHBhdGgpXG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbnR5cGUgQ29tcG9uZW50UmVzID0geyBwYWdlOiBDb21wb25lbnRUeXBlOyBtb2Q6IGFueSB9XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG50eXBlIFJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogYW55XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFJvdXRlSW5mbywgQXBwPzogQ29tcG9uZW50VHlwZSkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IGFueSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5IHwgbnVsbCxcbiAgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4sXG4gIGNiPzogKC4uLmFyZ3M6IGFueSkgPT4gYW55XG4pIHtcbiAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMVxuICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBmZXRjaChcbiAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgX19ORVhUX0RBVEFfX1xuICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmBcbiAgICAgICAgKSxcbiAgICAgICAgcXVlcnksXG4gICAgICB9KSxcbiAgICAgIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICB9XG4gICAgKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGNiID8gY2IoZGF0YSkgOiBkYXRhXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgIC8vIGxvb3AuXG4gICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgIDsoZXJyIGFzIGFueSkuY29kZSA9ICdQQUdFX0xPQURfRVJST1InXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQ29tcG9uZW50VHlwZVxuICAgICAgd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBhc1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcbiAgICB9XG4gIH1cblxuICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAoXG4gICAgICBlLnN0YXRlICYmXG4gICAgICB0aGlzLmlzU3NyICYmXG4gICAgICBlLnN0YXRlLmFzID09PSB0aGlzLmFzUGF0aCAmJlxuICAgICAgcGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lXG4gICAgKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5J1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgdXBkYXRlKHJvdXRlOiBzdHJpbmcsIG1vZDogYW55KSB7XG4gICAgY29uc3QgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlID0gbW9kLmRlZmF1bHQgfHwgbW9kXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBDb21wb25lbnQsXG4gICAgICBfX05fU1NHOiBtb2QuX19OX1NTRyxcbiAgICAgIF9fTl9TU1A6IG1vZC5fX05fU1NQLFxuICAgIH0pXG4gICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGFcblxuICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICBfdXJsOiBVcmwsXG4gICAgX2FzOiBVcmwsXG4gICAgb3B0aW9uczogYW55XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgICB9XG4gICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICBpZiAoU1QpIHtcbiAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsXG4gICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXNcblxuICAgICAgdXJsID0gYWRkQmFzZVBhdGgodXJsKVxuICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcylcblxuICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpXG5cbiAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChhcylcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSBwYXJzZSh1cmwsIHRydWUpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgIH1cblxuICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuICAgICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZShhcylcbiAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgICApXG5cbiAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZWplY3QoXG4gICAgICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4oXG4gICAgICAgIChyb3V0ZUluZm8pID0+IHtcbiAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgYXMpXG4gICAgICAgICAgICAgIHRocm93IGVycm9yXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVFcnJvciA9IChcbiAgICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICAgICkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXNcbiAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvOiBSb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIH0gYXMgYW55KS50aGVuKFxuICAgICAgICAgICAgICAgICAgKHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAoZ2lwRXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsXG4gICAgICAgICAgICAgICAgICAgICAgZ2lwRXJyXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGhhbmRsZUVycm9yKGVyciwgdHJ1ZSkpXG4gICAgICAgIClcbiAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgIH1cblxuICAgIHJldHVybiAobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKGNhY2hlZFJvdXRlSW5mbykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oXG4gICAgICAgIChyZXMpID0+XG4gICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pLFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz4pXG4gICAgICAudGhlbigocm91dGVJbmZvOiBSb3V0ZUluZm8pID0+IHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YTxSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICAgIClcbiAgICAgICAgKS50aGVuKChwcm9wcykgPT4ge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpXG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybClcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNvbnN0IHJvdXRlID0gZGVsQmFzZVBhdGgodG9Sb3V0ZShwYXRobmFtZSkpXG4gICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBkZWxCYXNlUGF0aChhc1BhdGgpKSxcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdClcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Q29tcG9uZW50UmVzPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG4gICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGFyc2UoYXNQYXRoKS5wYXRobmFtZSEpXG5cbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1twYXRobmFtZV1cbiAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgIDogZmV0Y2hOZXh0RGF0YShcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHRoaXMuaXNTc3IsXG4gICAgICAgICAgKGRhdGEpID0+ICh0aGlzLnNkY1twYXRobmFtZV0gPSBkYXRhKVxuICAgICAgICApXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZShhc1BhdGgsIHRydWUpXG4gICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUhKVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJylcbiAgICAgIDsoZSBhcyBhbnkpLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfVxufSB7XG4gIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG5cbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAoXywgJDEpID0+IHtcbiAgICAgIGNvbnN0IGlzT3B0aW9uYWwgPSAvXlxcXFxcXFsuKlxcXFxcXF0kLy50ZXN0KCQxKVxuICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSgyLCAtMilcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgIGlmIChpc0NhdGNoQWxsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoNilcbiAgICAgIH1cbiAgICAgIGdyb3Vwc1tcbiAgICAgICAgJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9XG4gICAgICByZXR1cm4gaXNDYXRjaEFsbCA/IChpc09wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgfVxuICApXG5cbiAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgICAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG5cbiAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksXG4gICAgZ3JvdXBzLFxuICAgIG5hbWVkUmVnZXg6IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICA/IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYFxuICAgICAgOiB1bmRlZmluZWQsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZvcm1hdCwgVVJMRm9ybWF0T3B0aW9ucywgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBhbnlcbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBzdGF0aWNNYXJrdXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkZXZGaWxlczogc3RyaW5nW11cbiAgZmlsZXM6IHN0cmluZ1tdXG4gIGxvd1ByaW9yaXR5RmlsZXM6IHN0cmluZ1tdXG4gIHBvbHlmaWxsRmlsZXM6IHN0cmluZ1tdXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaHRtbFByb3BzOiBhbnlcbiAgYm9keVRhZ3M6IGFueVtdXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICB1cmw6IFVybE9iamVjdCxcbiAgb3B0aW9ucz86IFVSTEZvcm1hdE9wdGlvbnNcbik6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXQodXJsIGFzIFVSTCwgb3B0aW9ucylcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9TdmdzL0xvZ29zL0xvZ29zJ1xyXG5pbXBvcnQgV2l0aEJveCBmcm9tICcuL1dpdGhCb3gvV2l0aEJveCdcclxuXHJcbmZ1bmN0aW9uIEJ1dHRvbnMgKHByb3BzKXtcclxuXHJcbiAgbGV0IGJ1dHRvbjtcclxuICBpZihwcm9wcy50eXBlID09PSAnd2l0aFRleHQnKSB7XHJcbiAgICBidXR0b24gPSA8QnV0dG9uIHR5cGU9e3Byb3BzLnR5cGV9IGNvbG9ycz17cHJvcHMuY29sb3JzfS8+IFxyXG4gIH1cclxuICBcclxuICBpZihwcm9wcy50eXBlID09PSAnd2l0aEJveCcpIHtcclxuICAgIGJ1dHRvbiA9IFxyXG4gICAgICA8V2l0aEJveCBcclxuICAgICAgICBidG5UeXBlPXtwcm9wcy5idG5UeXBlfVxyXG4gICAgICAgIGxpbms9e3Byb3BzLmxpbmt9XHJcbiAgICAgICAgdGV4dD17cHJvcHMudGV4dH0gXHJcbiAgICAgICAgd2l0aFN2Zz17cHJvcHMud2l0aFN2Z30gXHJcbiAgICAgICAgY29sb3JzPXtwcm9wcy5jb2xvcnN9IC8+XHJcbiAgfVxyXG4gIFxyXG4gIGlmKHByb3BzLnR5cGUgPT09ICdhcnJvdycpIHtcclxuICAgIGJ1dHRvbiA9IFxyXG4gICAgICA8QnV0dG9uIGNvbG9ycz17cHJvcHMuY29sb3JzfSB0eXBlPXtwcm9wcy50eXBlfS8+IFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgKGJ1dHRvbilcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbnM7XHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7U3RhdGVDb250ZXh0fSBmcm9tICcuLi8uLi8uLi91dGlscy9jb250ZXh0L3N0YXRlQ29udGV4dCdcclxuaW1wb3J0IEVudmVsb3AgZnJvbSAnLi4vLi4vU3Zncy9Mb2dvcy9Mb2dvcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZnVuY3Rpb24gV2l0aEJveChwcm9wcykge1xyXG4gIGNvbnN0IHtzZXRUcmFuc2l0aW9uU3RhdGV9ID0gdXNlQ29udGV4dChTdGF0ZUNvbnRleHQpXHJcblxyXG4gIGxldCBzdmcgPSBwcm9wcy53aXRoU3ZnID8gXHJcbiAgICAoIDxFbnZlbG9wIHR5cGU9J2VudmVsb3AnIGNvbG9ycz17cHJvcHMuY29sb3JzfSAvPiApIDogbnVsbFxyXG5cclxuICAvLyB3aGVuIHRoZSBidXR0b24gbGluayBpcyBjbGlja2VkXHJcbiAgLy8gd2Ugd2lsbCB1cGRhdGUgdGhlIHRyYW5zaXRpb24gc3RhdGVcclxuICBjb25zdCBjbGljayA9ICgpID0+IHtcclxuICAgIHNldFRyYW5zaXRpb25TdGF0ZSgnYm90dG9tJylcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGluayBocmVmPXtwcm9wcy5saW5rfT5cclxuICAgICAgPGE+XHJcbiAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgY29udGVudC1jZW50ZXIgJHtwcm9wcy5idG5UeXBlfWB9Pntzdmd9XHJcbiAgICAgICAgICA8c3Bhbj57cHJvcHMudGV4dH08L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvTGluaz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpdGhCb3g7XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1BhZ2VEYXRhfSBmcm9tICcuLi8uLi91dGlscy9jb250ZXh0L3BhZ2VDb250ZXh0J1xyXG5pbXBvcnQgRm9vdGVyTWVudSBmcm9tICcuLi9NZW51TGlzdC9Gb290ZXJNZW51L0Zvb3Rlck1lbnUnXHJcbmltcG9ydCBDb3B5cmlnaHQgZnJvbSAnLi4vRm9vdGVySXRlbS9Db3B5UmlnaHQvQ29weVJpZ2h0J1xyXG5pbXBvcnQgU29jaWFsSWNvbnMgZnJvbSAnLi4vRm9vdGVySXRlbS9Tb2NpYWxJY29ucy9Tb2NpYWxJY29ucydcclxuXHJcbmZ1bmN0aW9uIEZvb3RlciAoKSB7XHJcbiAgY29uc3Qge3F1b3Rlc30gPSB1c2VDb250ZXh0KFBhZ2VEYXRhKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBjbGFzc05hbWU9J2NvbnRlbnQtY2VudGVyIGZvb3Rlci13cmFwcGVyJz5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgc2hvdy1jb250YWluZXIgJHtxdW90ZXMuc2hvdyA/ICdzaG93JyA6IG51bGx9YH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3F1b3Rlcy5zaG93ID8gJ3JldmVhbCcgOiBudWxsfWB9PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdjb250ZW50LWNlbnRlciBxdW90ZS1wJz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdxdW90ZSc+e3F1b3Rlcy5xdW90ZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYXV0aG9yJz4tJm5ic3A7IHtxdW90ZXMuYXV0aG9yfSAmbmJzcDstPC9zcGFuPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtxdW90ZXMuc2hvdyA/ICdydW5uZXInIDogbnVsbH1gfT48L2Rpdj5cclxuICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgPEZvb3Rlck1lbnUgLz5cclxuXHJcbiAgICAgIDxDb3B5cmlnaHQgZnJvbVRvcD17ZmFsc2V9IHBDb2xvcj0nI0E3QTdBNycvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItc29jaWFsSWNvbnNcIj5cclxuICAgICAgICA8U29jaWFsSWNvbnMgXHJcbiAgICAgICAgICBjb250YWluZXI9J2Zvb3Rlci1uYXZpY29ucydcclxuICAgICAgICAgIGNvbG9yTW9kZT0nIzExNjg2NCcgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtTdGF0ZUNvbnRleHR9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvbnRleHQvc3RhdGVDb250ZXh0J1xyXG5pbXBvcnQgeyBjbG9zZU1lbnUgfSBmcm9tICcuLi8uLi8uLi91dGlscy9wYWdlYW5pbWF0aW9ucy9uYXZiYXJtZW51L21lbnVDbGlja0V2ZW50cydcclxuaW1wb3J0IHtmYWRlTmF2YmFyfSBmcm9tICcuLi8uLi8uLi91dGlscy9wYWdlYW5pbWF0aW9ucy9uYXZiYXJtZW51L25hdmJhcnRyYW5zaXRpb24nXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmZ1bmN0aW9uIENvcHlSaWdodChwcm9wcykge1xyXG4gIGNvbnN0IHtzZXRUcmFuc2l0aW9uU3RhdGV9ID0gdXNlQ29udGV4dChTdGF0ZUNvbnRleHQpXHJcblxyXG4gIC8vIGNoZWNrIGlmIHRoZSBidXR0b24gY2xpY2sgaXMgZnJvbSB0aGUgdG9wIG5hdlxyXG4gIC8vIG9yIGZyb20gdGhlIGJvdHRvbSBuYXYgdG8gcmV0dXJuIGEgc3RyaW5nXHJcbiAgLy8gdGhhdCB3aWxsIHVwZGF0ZSB0aGUgc3RhdGUgdHJhbnNpdGlvblxyXG4gIGxldCBmcm9tID0gcHJvcHMuZnJvbVRvcCA/ICd0b3AnIDogJ2JvdHRvbSdcclxuXHJcbiAgLy8gaWYgdGhlIHByaXZhY3kgYnV0dG9uIGNsaWNrZWQgaXMgZnJvbSB0aGUgdG9wIG5hdmJhclxyXG4gIC8vIHRoZW4gd2Ugd2lsbCBjYWxsIHRoaXMgZnVuY3Rpb24gdG8gY2xvc2UgdGhlIG5hdmJhclxyXG4gIGNvbnN0IGNsb3NlbmF2YmFyID0gKCkgPT4ge1xyXG4gICAgY2xvc2VNZW51KClcclxuICAgIGZhZGVOYXZiYXIoKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2xpY2sgPSAoKSA9PiB7XHJcbiAgICBwcm9wcy5mcm9tVG9wID8gY2xvc2VuYXZiYXIoKSA6IG51bGxcclxuICAgIHNldFRyYW5zaXRpb25TdGF0ZShmcm9tKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29weXJpZ2h0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jZW50ZXIgY29weXJpZ2h0LXJ1bm5lclwiPlxyXG4gICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6IHByb3BzLnBDb2xvcn19PsKpIEFpbWFuIEFkbGF3YW4gMjAyMC4gQWxsIHJpZ2h0cyByZXNlcnZlZC48L3A+XHJcbiAgICAgICAgPExpbmsgaHJlZj0nL3ByaXZhY3knPlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxzcGFuIFxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ncHJpdmFjeSc+UHJpdmFjeSBQb2xpY3kuPC9zcGFuPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvcHlSaWdodDsiLCJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtQYWdlRGF0YX0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29udGV4dC9wYWdlQ29udGV4dCdcclxuaW1wb3J0IFNvY2lhbCBmcm9tICcuLi8uLi9TdmdzL1NvY2lhbHMvU29jaWFscydcclxuXHJcbmZ1bmN0aW9uIFNvY2lhbEljb25zIChwcm9wcykge1xyXG4gIGNvbnN0IHtzb2NpYWxzfSA9IHVzZUNvbnRleHQoUGFnZURhdGEpXHJcblxyXG4gIGNvbnN0IHNvY2lhbHNJY29uID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHNvY2lhbHMubWFwKChzb2NpYWwsIGkpID0+IHtcclxuICAgICAgcmV0dXJuICggIFxyXG4gICAgICAgIDxhIGhyZWY9e3NvY2lhbC5saW5rfSBrZXk9e2l9XHJcbiAgICAgICAgICByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInXHJcbiAgICAgICAgICB0YXJnZXQ9J19ibGFuaycgPlxyXG4gICAgICAgICAgPFNvY2lhbCBcclxuICAgICAgICAgICAgaWNvbj17c29jaWFsLm5hbWV9XHJcbiAgICAgICAgICAgIGNvbG9yPXtwcm9wcy5jb2xvck1vZGV9Lz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbnRlbnQtY2VudGVyICR7cHJvcHMuY29udGFpbmVyfWB9PlxyXG4gICAgICB7c29jaWFsc0ljb24oKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29jaWFsSWNvbnNcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTY3JvbGxCdG4gZnJvbSAnLi9TY3JvbGxCdG4vU2Nyb2xsQnRuJ1xyXG5pbXBvcnQgU29jaWFsSWNvbnMgZnJvbSAnLi9Tb2NpYWxJY29uL1NvY2lhbEljb24nXHJcbmltcG9ydCBIZWFkZXJUZXh0IGZyb20gJy4uL0hlYWRlclRleHRCbG9jay9IZWFkZXJUZXh0QmxvY2snXHJcbmltcG9ydCBTdWJwYXJhZ3JhcGhzIGZyb20gJy4uL1N1YlBhcmFncmFwaHMvU3VicGFyYWdyYXBocydcclxuaW1wb3J0IENyZWRlbnRpYWxzIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvQ3JlZGVudGlhbC9DcmVkZW50aWFsJ1xyXG5pbXBvcnQgSGVybyBmcm9tICcuL0hlcm8vSGVybydcclxuaW1wb3J0IHtQYWdlRGF0YX0gZnJvbSAnLi4vLi4vdXRpbHMvY29udGV4dC9wYWdlQ29udGV4dCdcclxuXHJcbmZ1bmN0aW9uIEhlYWRlciAoKSB7XHJcbiAgY29uc3Qge2hlYWRlcnN9ID0gdXNlQ29udGV4dChQYWdlRGF0YSlcclxuICAgIFxyXG4gIGxldCBoZWFkZXJDb250ZW50ID0gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3RvcC1iYWNrZ3JvdW5kLWNvbnRhaW5lcidcclxuICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kOiBcclxuICAgICAgYHVybCgnL2ltYWdlcy8ke2hlYWRlcnMuYmFja2dyb3VuZH0ucG5nJykgcmVwZWF0IGNlbnRlciB0b3BgfX0gPlxyXG5cclxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPSdoZWFkZXItdGV4dC1ibG9jayc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItdGl0bGUtYmxvY2tcIj5cclxuICAgICAgICAgIHtoZWFkZXJzLndpdGhJbWFnZS5pc1RydWUgPyA8SGVyby8+IDogbnVsbCB9XHJcbiAgICAgICAgICA8SGVhZGVyVGV4dCAvPlxyXG4gICAgICAgICAge2hlYWRlcnMuc3ViUGFyYWdyYXBoLmlzVHJ1ZSA/IDxTdWJwYXJhZ3JhcGhzIC8+IDogbnVsbCB9XHJcbiAgICAgICAgICB7aGVhZGVycy53aXRoQ3JlZGVudGlhbHMuaXNUcnVlID8gPENyZWRlbnRpYWxzIC8+IDogbnVsbCB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgXHJcbiAgICAgIHsvKiByZW5kZXIgc29jaWFsIGljb25zICovfVxyXG4gICAgICB7aGVhZGVycy53aXRoU29jaWFscyA/IDxTb2NpYWxJY29ucyAvPiA6IG51bGwgfVxyXG5cclxuICAgICAgey8qIHJlbmRlciBzY3JvbGwgYnV0dG9uICovfVxyXG4gICAgICB7aGVhZGVycy53aXRoU2Nyb2xsQnV0dG9uLmlzVHJ1ZSA/IFxyXG4gICAgICA8U2Nyb2xsQnRuIGRhdGE9e2hlYWRlcnMud2l0aFNjcm9sbEJ1dHRvbn0vPiA6IG51bGx9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT0ndG9wJyBcclxuICAgICAgc3R5bGU9e3snYmFja2dyb3VuZCc6IGhlYWRlcnMuY29sb3Jtb2Rlcy5jbG9zZS5iYWNrZ3JvdW5kfX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIHtoZWFkZXJDb250ZW50fVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHtQYWdlRGF0YX0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29udGV4dC9wYWdlQ29udGV4dCdcclxuXHJcbmNsYXNzIEhlcm8gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IFBhZ2VEYXRhXHJcbiAgcmVuZGVyKCl7XHJcbiAgICBsZXQgaW1nID0gdGhpcy5jb250ZXh0LmhlYWRlcnMud2l0aEltYWdlLmltYWdlXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZmlndXJlIGNsYXNzTmFtZT0naGVyby13cmFwcGVyJz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3Nob3ctY29udGFpbmVyIGhlcm8tY292ZXIgc2hvdyc+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0ncmV2ZWFsIGltZy1yZXZlYWwnIHNyYz17aW1nfSBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1bm5lclwiPjwvZGl2PlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9maWd1cmU+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7c2Nyb2xsRG93bn0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvcGFnZWFuaW1hdGlvbnMvc2Nyb2xsYW5pbWF0aW9uL3Njcm9sbERvd24nXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vQnV0dG9ucy9CdXR0b25zJ1xyXG5cclxuZnVuY3Rpb24gU2Nyb2xsQnRuKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxhc2lkZSBjbGFzc05hbWU9J3JpZ2h0LWFsaWduIHNjcm9sbC1idG4tY29udGFpbmVyJz5cclxuICAgICAgPGRpdiBcclxuICAgICAgICBvbkNsaWNrPXtzY3JvbGxEb3dufVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInNjcm9sbC1jb3ZlciBzaG93XCI+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPXtwcm9wcy5kYXRhLnR5cGV9XHJcbiAgICAgICAgICBjb2xvcnM9e3Byb3BzLmRhdGEuY29sb3JzfS8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9hc2lkZT5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjcm9sbEJ0blxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTb2NpYWxJY29ucyBmcm9tICcuLi8uLi9Gb290ZXJJdGVtL1NvY2lhbEljb25zL1NvY2lhbEljb25zJ1xyXG5cclxuZnVuY3Rpb24gU29jaWFsSWNvbigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGFzaWRlIGNsYXNzTmFtZT0nbGVmdC1hbGlnbiBsZWZ0LWljb25zJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItc29jaWFsLWNvbnRhaW5lciBzaG93XCI+XHJcbiAgICAgICAgPFNvY2lhbEljb25zIFxyXG4gICAgICAgICAgY29udGFpbmVyPSdoZWFkZXItc29jaWFsLWljb25zJ1xyXG4gICAgICAgICAgY29sb3JNb2RlPScjMEM1RDVBJyAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYXNpZGU+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb2NpYWxJY29uXHJcbiIsImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1BhZ2VEYXRhfSBmcm9tICcuLi8uLi91dGlscy9jb250ZXh0L3BhZ2VDb250ZXh0J1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyVGV4dEJsb2NrICgpIHtcclxuICBjb25zdCB7aGVhZGVyc30gPSB1c2VDb250ZXh0KFBhZ2VEYXRhKVxyXG5cclxuICBsZXQgaGVhZGVyVGV4dCA9IGhlYWRlcnMudGl0bGUubWFwKCh0ZXh0LCBpKT0+e1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2hvdy1jb250YWluZXIgc2hvd1wiIGtleT17aX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZlYWxcIlxyXG4gICAgICAgIHN0eWxlPXt7Y29sb3I6IGhlYWRlcnMudGV4dENvbG9ycy5wcmltYXJ5fX0+e3RleHR9PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydW5uZXJcIj48L2Rpdj5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgKVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci13cmFwcGVyXCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkZXItdGV4dFwiPlxyXG4gICAgICAgIHtoZWFkZXJUZXh0fVxyXG4gICAgICA8L2gxPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJzdWItcmV2ZWFsLWNvbnRhaW5lciBkZXNjIHNob3dcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWItcmV2ZWFsXCJcclxuICAgICAgICAgIHN0eWxlPXt7Y29sb3I6IGhlYWRlcnMudGV4dENvbG9ycy5zZWNvbmRhcnksIGZvbnRXZWlnaHQ6IGhlYWRlcnMudGl0bGVbMF0gPT09ICAnQWJvdXQgbWUuJyA/IDUwMCA6IDYwMH19PlxyXG4gICAgICAgICAge2hlYWRlcnMuc2hvcnREZXNjfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJUZXh0QmxvY2tcclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE1lbnVXcmFwcGVyIGZyb20gJy4vTWVudVdyYXBwZXIvTWVudVdyYXBwZXInXHJcbmltcG9ydCBNZW51UnVubmVyIGZyb20gJy4vTWVudVJ1bm5lci9NZW51UnVubmVyJ1xyXG5cclxuZnVuY3Rpb24gTWVudUNvbnRhaW5lcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWNvbnRhaW5lclwiPlxyXG4gICAgICA8TWVudVdyYXBwZXIgLz5cclxuICAgICAgPE1lbnVSdW5uZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudUNvbnRhaW5lclxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBNZW51UnVubmVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtcnVubmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1ydW5uZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtZW51LXJ1bm5lcnMnPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21lbnUtcnVubmVycyc+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbWVudS1ydW5uZXJzJz48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtZW51LXJ1bm5lcnMnPjwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVSdW5uZXJcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTWVudUxpc3QgZnJvbSAnLi4vLi4vTWVudUxpc3QvVG9wTWVudUxpc3QvTWVudSdcclxuaW1wb3J0IENvcHlyaWdodCBmcm9tICcuLi8uLi9Gb290ZXJJdGVtL0NvcHlSaWdodC9Db3B5UmlnaHQnXHJcbmltcG9ydCBTb2NpYWxJY29ucyBmcm9tICcuLi8uLi9Gb290ZXJJdGVtL1NvY2lhbEljb25zL1NvY2lhbEljb25zJ1xyXG5cclxuZnVuY3Rpb24gTWVudVdyYXBwZXIoKSB7XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS13cmFwcGVyXCI+XHJcbiAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJtZW51LXMgbWVudS1sZWZ0XCI+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9J3NxdWFyZS1pbWcnIHNyYz17Jy9pbWFnZXMvbWVudS1kb3RzLnBuZyd9IGFsdD1cInNxdWFyZS1kb3RzXCIvPlxyXG4gICAgICA8L2FzaWRlPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtcyBtZW51LW1pZGRsZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGNvbnRlbnQtY2VudGVyIG5hdi1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxNZW51TGlzdCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jZW50ZXIgbmF2LWZvb3RlclwiPlxyXG4gICAgICAgICAgPENvcHlyaWdodCBmcm9tVG9wPXt0cnVlfSBwQ29sb3I9JyNDNkM0QUYnIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YXNpZGUgY2xhc3NOYW1lPVwibWVudS1zIG1lbnUtcmlnaHRcIj5cclxuICAgICAgICB7LyogYXJyYW5nZW1lbnQgaXMgZm9yIHRoZSBsZWZ0IG9yIHJpZ2h0IGxvY2F0aW9uc1xyXG4gICAgICAgIGNvbnRhaW5lciBpcyBmb3IgdGhlIHNvY2lhbCBuYXZpY29ucyAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmlnaHQtaWNvbnMnPlxyXG4gICAgICAgICAgPFNvY2lhbEljb25zIFxyXG4gICAgICAgICAgICBjb250YWluZXI9J3NvY2lhbC1uYXZpY29ucydcclxuICAgICAgICAgICAgY29sb3JNb2RlPScjMzEzRDQzJyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2FzaWRlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51V3JhcHBlclxyXG4iLCJpbXBvcnQgUmVhY3QsIHtGcmFnbWVudCwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7U3RhdGVDb250ZXh0fSBmcm9tICcuLi8uLi8uLi91dGlscy9jb250ZXh0L3N0YXRlQ29udGV4dCdcclxuLy8gaW1wb3J0IHtzZXRUcmFuc2l0aW9uU3RhdGV9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3BhZ2VhbmltYXRpb25zL21vdGlvbi9jb21tb24nXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmZ1bmN0aW9uIEZvb3Rlck1lbnUoKSB7XHJcbiAgY29uc3Qge3NldFRyYW5zaXRpb25TdGF0ZX0gPSB1c2VDb250ZXh0KFN0YXRlQ29udGV4dClcclxuICBjb25zdCBtZW51cyA9IFsnaG9tZScsICdhYm91dCcsICdwcm9qZWN0cycsICdjb250YWN0cyddXHJcblxyXG4gIC8vIHVwZGF0ZSB0aGUgc3RhdGUgZm9yIHRoZSB0cmFuc2l0aW9uXHJcbiAgY29uc3QgY2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRUcmFuc2l0aW9uU3RhdGUoJ2JvdHRvbScpXHJcbiAgfVxyXG5cclxuICBsZXQgbWVudXNMaXN0ID0gbWVudXMubWFwKChtZW51LCBpKT0+e1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZyYWdtZW50IGtleT17aX0+XHJcbiAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICBrZXk9e21lbnUgPT09ICdob21lJyA/ICcvJyA6IGAvJHttZW51fWB9XHJcbiAgICAgICAgICBhcz17bWVudSA9PT0gJ2hvbWUnID8gJy8nIDogYC8ke21lbnV9YH1cclxuICAgICAgICAgIGhyZWY9e2AvJHttZW51ID09PSAnaG9tZScgPyAnJyA6IG1lbnV9YH0+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPGxpIFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9vdGVyLW1lbnUnXHJcbiAgICAgICAgICAgICAgb25DbGljaz17Y2xpY2t9PnttZW51fTwvbGk+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICB7aSA8IDMgPyA8c3Bhbj58PC9zcGFuPiA6IG51bGwgfVxyXG4gICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT0nY29udGVudC1jZW50ZXIgZm9vdGVyLW5hdic+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9J2NvbnRlbnQtY2VudGVyIGZvb3Rlci1uYXYtd3JhcHBlcic+XHJcbiAgICAgICAge21lbnVzTGlzdH1cclxuICAgICAgPC91bD5cclxuICAgIDwvbmF2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyTWVudTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQge1N0YXRlQ29udGV4dH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29udGV4dC9zdGF0ZUNvbnRleHQnXHJcbmltcG9ydCB7Y2hlY2tSb3V0ZX0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29tbW9uL2NvbW1vbidcclxuaW1wb3J0IHttb3VzZUVudGVyLCBtb3VzZU91dH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvcGFnZWFuaW1hdGlvbnMvbmF2YmFybWVudS9tZW51TGlzdEV2ZW50cydcclxuaW1wb3J0IHtzZXRUcmFuc2l0aW9uU3RhdGV9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3BhZ2VhbmltYXRpb25zL21vdGlvbi9jb21tb24nXHJcbmltcG9ydCB7IGNsb3NlTWVudSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3BhZ2VhbmltYXRpb25zL25hdmJhcm1lbnUvbWVudUNsaWNrRXZlbnRzJ1xyXG5pbXBvcnQge2ZhZGVOYXZiYXJ9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3BhZ2VhbmltYXRpb25zL25hdmJhcm1lbnUvbmF2YmFydHJhbnNpdGlvbidcclxuXHJcbmZ1bmN0aW9uIE1lbnUoKSB7XHJcbiAgbGV0IG1lbnVzID0gWydob21lJywgJ2Fib3V0JywgJ3Byb2plY3RzJywgJ2NvbnRhY3RzJ11cclxuICBjb25zdCB7IHN0YXRlLCBzZXRBY3RpdmVSb3V0ZSwgc2V0VHJhbnNpdGlvblN0YXRlIH0gPSB1c2VDb250ZXh0KFN0YXRlQ29udGV4dClcclxuICBjb25zdCBjdXJyZW50Um91dGUgPSBjaGVja1JvdXRlKHVzZVJvdXRlcigpLnBhdGhuYW1lKVxyXG5cclxuICAvLyBzZXQgYWN0aXZlIHJvdXRlIHRvIHRoZSBjdXJyZW50IHJvdXRlXHJcbiAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgc2V0QWN0aXZlUm91dGUoY3VycmVudFJvdXRlKVxyXG4gIH0sMzAwKVxyXG5cclxuICAvLyBjbGljayBldmVudHNcclxuICBjb25zdCBjbGljayA9ICgpID0+IHtcclxuICAgIGZhZGVOYXZiYXIoKVxyXG4gICAgY2xvc2VNZW51KClcclxuICAgIHNldFRyYW5zaXRpb25TdGF0ZSgndG9wJylcclxuICB9XHJcblxyXG5cclxuICBjb25zdCBtZW51TGlzdCA9ICgpID0+IHtcclxuICByZXR1cm4gbWVudXMubWFwKChtZW51LCBpICk9PntcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxsaSBjbGFzc05hbWU9J21lbnUtbGlzdCcga2V5PXtpfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVudS1saXN0LWNvbnRhaW5lcic+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbnRlbnQtY2VudGVyIGxpc3QtZnJvbnRcclxuICAgICAgICAgICAgJHttZW51ID09PSBzdGF0ZS5hY3RpdmVSb3V0ZSA/ICdhY3RpdmUnIDogJyd9YH0+XHJcbiAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgIGtleT17bWVudSA9PT0gJ2hvbWUnID8gJy8nIDogYC8ke21lbnV9YH1cclxuICAgICAgICAgICAgICBocmVmPXttZW51ID09PSAnaG9tZScgPyAnLycgOiBgLyR7bWVudX1gfVxyXG4gICAgICAgICAgICAgIGFzPXttZW51ID09PSAnaG9tZScgPyAnLycgOiBgLyR7bWVudX1gfT5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbWVudS1saXN0LXRleHQnXHJcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KGUpPT5tb3VzZUVudGVyKGUsICdob3ZlckluJyl9XHJcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VPdXQ9eyhlKT0+bW91c2VPdXQoZSl9IFxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbGlja30+e21lbnV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbnRlbnQtY2VudGVyIGxpc3QtYmFjayBcclxuICAgICAgICAgICAgJHttZW51ID09PSBzdGF0ZS5hY3RpdmVSb3V0ZSA/ICdhY3RpdmUnIDogJyd9YH0+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbWVudS1saXN0LWJhY2tlcic+e21lbnV9PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbGk+IClcclxuICAgIH0pXHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2PlxyXG4gICAgICA8dWw+e21lbnVMaXN0KCl9PC91bD5cclxuICAgIDwvbmF2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IE5hdmJhckxvZ28gZnJvbSAnLi9OYXZiYXJMb2dvL05hdmJhckxvZ28nXHJcbmltcG9ydCBOYXZiYXJNZW51IGZyb20gJy4vTmF2YmFyTWVudS9OYXZiYXJNZW51J1xyXG5cclxuZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1jb250YWluZXJcIj5cclxuICAgICAgPE5hdmJhckxvZ28vPlxyXG4gICAgICA8TmF2YmFyTWVudS8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhciIsImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBCcmFuZExvZ28gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9TdmdzL0JyYW5kTG9nby9CcmFuZExvZ28nXHJcbmltcG9ydCB7UGFnZURhdGF9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvbnRleHQvcGFnZUNvbnRleHQnXHJcbmltcG9ydCB7U3RhdGVDb250ZXh0fSBmcm9tICcuLi8uLi8uLi91dGlscy9jb250ZXh0L3N0YXRlQ29udGV4dCdcclxuXHJcbmZ1bmN0aW9uIE5hdmJhckxvZ28gKCkge1xyXG4gIGNvbnN0IHtoZWFkZXJzfSA9IHVzZUNvbnRleHQoUGFnZURhdGEpXHJcbiAgY29uc3Qge3N0YXRlfSA9IHVzZUNvbnRleHQoU3RhdGVDb250ZXh0KVxyXG4gIFxyXG4gIGxldCBjb2xvciA9IHN0YXRlLm1lbnVJc09wZW4gPyBcclxuICAgIGhlYWRlcnMuY29sb3Jtb2Rlcy5vcGVuLmZvcmVncm91bmQgOiBcclxuICAgIGhlYWRlcnMuY29sb3Jtb2Rlcy5jbG9zZS5mb3JlZ3JvdW5kXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItbG9nb1wiPlxyXG4gICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICA8YT48QnJhbmRMb2dvIGNvbG9yTW9kZT17Y29sb3J9Lz48L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyTG9nb1xyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDbG9zZSBmcm9tICcuLi8uLi9TdmdzL0Nsb3NlL0Nsb3NlJ1xyXG5pbXBvcnQge21vdXNlRW50ZXIsIG1vdXNlT3V0fSBmcm9tICcuLi8uLi8uLi91dGlscy9wYWdlYW5pbWF0aW9ucy9uYXZiYXJtZW51L21lbnVIb3ZlckV2ZW50cydcclxuaW1wb3J0IHtvcGVuTWVudSwgY2xvc2VNZW51fSBmcm9tICcuLi8uLi8uLi91dGlscy9wYWdlYW5pbWF0aW9ucy9uYXZiYXJtZW51L21lbnVDbGlja0V2ZW50cydcclxuaW1wb3J0IHtmYWRlTmF2YmFyfSBmcm9tICcuLi8uLi8uLi91dGlscy9wYWdlYW5pbWF0aW9ucy9uYXZiYXJtZW51L25hdmJhcnRyYW5zaXRpb24nXHJcbmltcG9ydCB7UGFnZURhdGF9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvbnRleHQvcGFnZUNvbnRleHQnXHJcbmltcG9ydCB7U3RhdGVDb250ZXh0fSBmcm9tICcuLi8uLi8uLi91dGlscy9jb250ZXh0L3N0YXRlQ29udGV4dCdcclxuaW1wb3J0IHttb3Rpb259IGZyb20gJ2ZyYW1lci1tb3Rpb24nXHJcblxyXG5mdW5jdGlvbiBOYXZiYXJNZW51ICgpIHtcclxuICBjb25zdCB7aGVhZGVyc30gPSB1c2VDb250ZXh0KFBhZ2VEYXRhKVxyXG4gIGNvbnN0IHtzdGF0ZSwgc2V0U3RhdGV9ID0gdXNlQ29udGV4dChTdGF0ZUNvbnRleHQpXHJcblxyXG4gIC8vIGhvdmVyIGluIGZ1bmN0aW9ucyBhbmQgdG8gc2V0IHNwZWNpZmljIGFzc2lnbmVkIGNvbG9yc1xyXG4gIGNvbnN0IGhvdmVySW4gPSAoKSA9PiB7XHJcbiAgICBzdGF0ZS5tZW51SXNPcGVuID8gbW91c2VFbnRlcihoZWFkZXJzLmNvbG9ybW9kZXMub3BlbiwgJ29wZW4nKSA6XHJcbiAgICAgbW91c2VFbnRlcihoZWFkZXJzLmNvbG9ybW9kZXMuY2xvc2UsICdjbG9zZScpXHJcbiAgfVxyXG5cclxuICAvLyBob3ZlciBvdXQgZnVuY3Rpb25zIGFuZCB0byBzZXQgc3BlY2lmaWMgYXNzaWduZWQgY29sb3JzXHJcbiAgY29uc3QgaG92ZXJPdXQgPSAoKSA9PiB7XHJcbiAgICBzdGF0ZS5tZW51SXNPcGVuID8gbW91c2VPdXQoaGVhZGVycy5jb2xvcm1vZGVzLm9wZW4sICdvcGVuJykgOlxyXG4gICAgICBtb3VzZU91dChoZWFkZXJzLmNvbG9ybW9kZXMuY2xvc2UsICdjbG9zZScpXHJcbiAgfVxyXG5cclxuICAvLyBjbGljayBldmVudHNcclxuICBjb25zdCBjbGljayA9ICgpID0+IHtcclxuICAgIC8vIGZhZGUgdGhlIG5hdmJhclxyXG4gICAgZmFkZU5hdmJhcigpXHJcbiAgICAvL2NoZWNrIGlmIG1lbnUgaXMgbm90IGFuaW1hdGluZy4gaWYgZmFsc2UgdGhlblxyXG4gICAgLy8gZXhlY3V0ZSB0aGUgYW5pbWF0aW9uXHJcbiAgICBpZighc3RhdGUubWVudUlzQW5pbWF0aW5nKXtcclxuICAgICAgLy8gY2hhbmdlIHRoZSBnbG9iYWwgc3RhdGUgYWZ0ZXIgMjAwbXMgZmFkZSB0cmFuc2l0aW9uXHJcbiAgICAgIC8vIGZyb20gdGhlIG5hdmJhclxyXG4gICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgc2V0U3RhdGUoe1xyXG4gICAgICAgICAgbWVudUlzT3BlbjogIXN0YXRlLm1lbnVJc09wZW4sXHJcbiAgICAgICAgICBtZW51SXNBbmltYXRpbmc6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9LCAyMDApXHJcbiAgICAgIC8vIHRoZW4gY2FsbCB0aGUgYW5pbWF0aW9uIHdoZXRoZXIgdGhlIGNsb3NlIG9yIG9wZW4gdGhlIG1lbnVcclxuICAgICAgc3RhdGUubWVudUlzT3BlbiA/IGNsb3NlTWVudSh0cnVlKSA6IG9wZW5NZW51KClcclxuICAgICAgLy8gdGhlIHNldCB0aW1lb3V0IHdpbGwgbWFrZSBhIHNldCB0aGUgbWVudUlzQW5pbWF0aW5nXHJcbiAgICAgIC8vIHN0YXRlIGJhY2sgdG8gZmFsc2UgYWZ0ZXIgMTcwMG1zLlxyXG4gICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgc2V0U3RhdGUoeyBtZW51SXNBbmltYXRpbmc6IGZhbHNlIH0pXHJcbiAgICAgIH0sIDE3MDApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItbWVudVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyb250IGNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgPG1vdGlvbi5zcGFuIGNsYXNzTmFtZT1cImNvbnRlbnQtY2VudGVyIGZyb250LXRleHRcIlxyXG4gICAgICAgICAgc3R5bGU9e3snY29sb3InOiBoZWFkZXJzLmNvbG9ybW9kZXMuY2xvc2UuZm9yZWdyb3VuZH19XHJcbiAgICAgICAgICBvbk1vdXNlT3Zlcj17aG92ZXJJbn1cclxuICAgICAgICAgIG9uTW91c2VMZWF2ZT17aG92ZXJPdXR9XHJcbiAgICAgICAgICB3aGlsZVRhcD17e3NjYWxlOiAwLjk1fX1cclxuICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrfT5cclxuICAgICAgICAgICAge3N0YXRlLm1lbnVJc09wZW4gPyA8Q2xvc2UgLz4gOiAnTWVudSd9PC9tb3Rpb24uc3Bhbj4gIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaWRkbGUgY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtaWRkbGUtc3BhblwiPjwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFjayBjb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhY2stc3BhblwiPjwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhck1lbnUiLCJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtTdGF0ZUNvbnRleHR9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvbnRleHQvc3RhdGVDb250ZXh0J1xyXG5pbXBvcnQgQXJyb3cgZnJvbSAnLi4vLi4vQnV0dG9ucy9CdXR0b25zJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5mdW5jdGlvbiBEZXNjcmlwdGlvbihwcm9wcykge1xyXG4gIGNvbnN0IHtzZXRUcmFuc2l0aW9uU3RhdGV9ID0gdXNlQ29udGV4dChTdGF0ZUNvbnRleHQpXHJcblxyXG4gIC8vIHNldCB0cmFuc2l0aW9uIHN0YXRlXHJcbiAgY29uc3QgY2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRUcmFuc2l0aW9uU3RhdGUoJ2JvdHRvbScpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWJsb2NrLXJpZ2h0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtYWxpZ24gcmlnaHQtYmxvY2tcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2hvdy1jb250YWluZXIgc2hvdyc+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3JldmVhbCBkZXNjJ1xyXG4gICAgICAgICAgICBzdHlsZT17e2NvbG9yOiBwcm9wcy50ZXh0Y29sb3J9fT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPScnPntwcm9wcy5kZXNjfTwvc3Bhbj5cclxuICAgICAgICAgICAge3Byb3BzLndpdGhBcnJvdyA/IFxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9wcm9qZWN0cyc+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdibG9jay1hcnJvdydcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFycm93IHR5cGU9J2Fycm93JyBjb2xvcnM9e3Byb3BzLmNvbG9yc30vPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+IFxyXG4gICAgICAgICAgICAgIDwvTGluaz4gOiBudWxsIH1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVubmVyXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXNjcmlwdGlvblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBUaXRsZShwcm9wcykge1xyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbi1ibG9jay1sZWZ0Jz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LWFsaWduIGxlZnQtYmxvY2tcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPSdoZWFkMidcclxuICAgICAgICAgIHN0eWxlPXt7Y29sb3I6IHByb3BzLnRleHRjb2xvcn19PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzaG93LWNvbnRhaW5lciBzaG93Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JldmVhbCc+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e3Byb3BzLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdydW5uZXInPjwvZGl2PlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaXRsZVxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtQYWdlRGF0YX0gZnJvbSAnLi4vLi4vdXRpbHMvY29udGV4dC9wYWdlQ29udGV4dCdcclxuaW1wb3J0IFRpdGxlIGZyb20gJy4vQ29tcG9uZW50cy9UaXRsZSdcclxuaW1wb3J0IERlc2NyaXB0aW9uIGZyb20gJy4vQ29tcG9uZW50cy9EZXNjcmlwdGlvbidcclxuXHJcblxyXG5mdW5jdGlvbiBTZWN0aW9uQmxvY2tzIChwcm9wcykge1xyXG4gIGNvbnN0IHt3aXRoQmxvY2tzLCBwcm9qZWN0QmxvY2tzfSA9IHVzZUNvbnRleHQoUGFnZURhdGEpXHJcbiAgbGV0IGRhdGEgPSBmaW5kRGF0YShwcm9wcy50aXRsZSwgd2l0aEJsb2NrcywgcHJvamVjdEJsb2NrcylcclxuXHJcbiAgbGV0IGJsb2NrcyA9IFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb24tYmxvY2stYmFja2dyb3VuZCdcclxuICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kOiBgdXJsKCcke2RhdGEuYmFja2dyb3VuZH0nKSByZXBlYXQgY2VudGVyIHRvcGB9fT5cclxuICAgICAgPFRpdGxlIFxyXG4gICAgICAgIHRpdGxlPXtkYXRhLmJsb2NrVGl0bGV9XHJcbiAgICAgICAgdGV4dGNvbG9yPXtkYXRhLnRleHRjb2xvcn0vPlxyXG4gICAgICA8RGVzY3JpcHRpb24gXHJcbiAgICAgICAgdGV4dGNvbG9yPXtkYXRhLnRleHRjb2xvcn1cclxuICAgICAgICBkZXNjPXtkYXRhLmJsb2NrRGVzY31cclxuICAgICAgICB3aXRoQXJyb3c9e2RhdGEud2l0aEFycm93fVxyXG4gICAgICAgIGNvbG9ycz17ZGF0YS50ZXh0Y29sb3J9Lz5cclxuICAgIDwvZGl2PlxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdzZWN0aW9uLWJsb2NrLWNvbnRhaW5lcicgXHJcbiAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBkYXRhLmJhY2tncm91bmRDb2xvcn19PlxyXG4gICAgICB7YmxvY2tzfVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbkJsb2NrcztcclxuXHJcblxyXG5jb25zdCBmaW5kRGF0YSA9ICh0aXRsZSwgd2l0aEJsb2NrcywgcHJvamVjdEJsb2NrcykgPT4ge1xyXG4gIGlmKHRpdGxlID09PSAncHJvamVjdCcgIHx8IHRpdGxlID09PSAnc2tpbGxzJykgcmV0dXJuIHdpdGhCbG9ja3MgXHJcbiAgaWYodGl0bGUgPT09ICd2aWV3IG1vcmUnKSByZXR1cm4gcHJvamVjdEJsb2Nrc1xyXG59IiwiaW1wb3J0IFJlYWN0LCB7RnJhZ21lbnQsIHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1N0YXRlQ29udGV4dH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29udGV4dC9zdGF0ZUNvbnRleHQnXHJcbmltcG9ydCB7c2V0VHJhbnNpdGlvblN0YXRlfSBmcm9tICcuLi8uLi8uLi91dGlscy9wYWdlYW5pbWF0aW9ucy9tb3Rpb24vY29tbW9uJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5mdW5jdGlvbiBQYXJhZ3JhcGhMaW5rcyhwcm9wcykge1xyXG4gIGNvbnN0IHtzdGF0ZSwgc2V0U3RhdGV9ID0gdXNlQ29udGV4dChTdGF0ZUNvbnRleHQpXHJcblxyXG4gIGNvbnN0IGNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0U3RhdGUoe1xyXG4gICAgICBleGl0TW9kZTogJ2JvdHRvbUV4aXQnLFxyXG4gICAgICBpc1RyYW5zaXRpb25pbmc6IHNldFRyYW5zaXRpb25TdGF0ZShzdGF0ZS5pc1RyYW5zaXRpb25pbmcpLFxyXG4gICAgICBhbmltYXRpb246ICdib3R0b21BbmltYXRpb24nXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPGgzIGNsYXNzTmFtZT1cInAtd3JhcHBlciBoZWFkM1wiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNob3ctY29udGFpbmVyIHAtY29udGFpbmVyIHNob3dcIlxyXG4gICAgICAgICAgc3R5bGU9e3tjb2xvcjogcHJvcHMuY29sb3JzLnByaW1hcnl9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2ZWFsIHAtcmV2ZWFsXCI+Q29ubmVjdCB3aXRoIG1lPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1bm5lciBwLXJ1bm5lclwiPjwvZGl2PlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9oMz5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwic3ViLXJldmVhbC1jb250YWluZXIgcC1kZXNjIHAtbGlua3MgZGVzYyBzaG93XCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViLXJldmVhbCBwLWRlc2MtY29udGVudFwiXHJcbiAgICAgICAgICBzdHlsZT17e2NvbG9yOiBwcm9wcy5jb2xvcnMuc2Vjb25kYXJ5LCBmb250V2VpZ2h0OiA1MDB9fT4gSSdtIGV4Y2l0ZWQgdG9cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vXCIgXHJcbiAgICAgICAgICAgIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcidcclxuICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2xpbmtzJz4gY29ubmVjdDwvc3Bhbj5cclxuICAgICAgICAgIDwvYT4gd2l0aCB5b3UgZ3JlYXQgcGVvcGxlIGxpa2UgeW91LiBDbGljayBcclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3JlZGVudGlhbHNcIj5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgPHNwYW4gXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xpbmtzJ1xyXG4gICAgICAgICAgICAgICAgb25DbGljaz17Y2xpY2t9PiBoZXJlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+IFxyXG4gICAgICAgICAgPC9MaW5rPiB0byBzZWUgc29tZSBvZiBteSBjcmVkZW50aWFscy5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvcD5cclxuICAgICAgey8qIDxwIGNsYXNzTmFtZT1cInN1Yi1yZXZlYWwtY29udGFpbmVyIHAtZGVzYyBwLWxpbmtzIGRlc2Mgc2hvd1wiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1Yi1yZXZlYWwgcC1kZXNjLWNvbnRlbnRcIlxyXG4gICAgICAgICAgc3R5bGU9e3tjb2xvcjogcHJvcHMuY29sb3JzLnNlY29uZGFyeSwgZm9udFdlaWdodDogNTAwfX0+IENsaWNrIFxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jcmVkZW50aWFsc1wiPlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2xpbmtzJz4gaGVyZTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9hPiBcclxuICAgICAgICAgIDwvTGluaz4gdG8gc2VlIHNvbWUgb2YgbXkgY3JlZGVudGlhbHMuXHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L3A+ICAqL31cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXJhZ3JhcGhMaW5rcyIsImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIEZyYWdtZW50fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFBhcmFncmFwaExpbmtzIGZyb20gJy4vUGFyYWdyYXBoTGlua3MvUGFyYWdyYXBoTGlua3MnXHJcbmltcG9ydCB7UGFnZURhdGF9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnRleHQvcGFnZUNvbnRleHQnXHJcblxyXG5mdW5jdGlvbiBTdWJwYXJhZ3JhcGhzICgpIHtcclxuICBjb25zdCB7aGVhZGVyc30gPSB1c2VDb250ZXh0KFBhZ2VEYXRhKVxyXG5cclxuICBsZXQgc2VjdGlvbnMgPSBoZWFkZXJzLnN1YlBhcmFncmFwaC5jb250ZW50Lm1hcCgodGV4dCwgaSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZyYWdtZW50IGtleT17aX0+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInAtd3JhcHBlciBoZWFkM1wiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2hvdy1jb250YWluZXIgcC1jb250YWluZXIgc2hvd1wiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6IGhlYWRlcnMudGV4dENvbG9ycy5wcmltYXJ5fX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2ZWFsIHAtcmV2ZWFsXCI+e3RleHQudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVubmVyIHAtcnVubmVyXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWItcmV2ZWFsLWNvbnRhaW5lciBwLWRlc2MgZGVzYyBzaG93XCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWItcmV2ZWFsIHAtZGVzYy1jb250ZW50XCJcclxuICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjogaGVhZGVycy50ZXh0Q29sb3JzLnNlY29uZGFyeSwgXHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IGhlYWRlcnMudGl0bGVbMF0gPT09ICAnQWJvdXQgbWUuJyA/IDUwMCA6IDYwMH19PiBcclxuICAgICAgICAgICAge3RleHQudGV4dH08L3NwYW4+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncGFyYWdyYXBocyc+XHJcbiAgICAgIHtzZWN0aW9uc31cclxuICAgICAge2hlYWRlcnMuc3ViUGFyYWdyYXBoLnNwZWNpYWxMaW5rcy5pc1RydWUgPyBcclxuICAgICAgICA8UGFyYWdyYXBoTGlua3MgY29sb3JzPXtoZWFkZXJzLnRleHRDb2xvcnN9IC8+IDogbnVsbH1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3VicGFyYWdyYXBocztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gQnJhbmRMb2dvKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPSduYXZiYXItbG9nby1zdmcnIHdpZHRoPVwiMjI0XCIgaGVpZ2h0PVwiMjI1XCIgdmlld0JveD1cIjAgMCAyMjQgMjI1XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgIDxnIGNsaXBQYXRoPVwidXJsKCNjbGlwMClcIj5cclxuICAgICAgICA8cGF0aCBkPVwiTTU4Ljg4NzkgMTM0LjMwMkg2MS42MzE4QzY3LjQwMTIgMTM0LjMwMiA3Mi40NjcxIDEzMi4zNjcgNzYuODI5MyAxMjguNDk4QzgxLjI2MTggMTI0LjU1NyA4My40NzgxIDEyMC4wMTggODMuNDc4MSAxMTQuODgyTDgzLjY4OTIgMTEzLjUxVjExMi4xMzdMODMuOTAwMyAxMDguODY2VjEwMi44NUM4My45MDAzIDk4Ljc2ODEgODEuODI0NyA5Ni43Mjg0IDc3LjY3MzYgOTYuNzI4NEg3Mi45MjQ0TDcyLjE4NTYgOTYuODMzNUw2OC4wNjk3IDk3LjE0OTlDNjYuMDk5NyA5Ny40MzE5IDY0LjY5MjUgOTcuNTcyNCA2My44NDgyIDk3LjU3MjRDNTguMTQ5MSA5Ny41NzI0IDUyLjg3MjMgOTkuNzE4MiA0OC4wMTc1IDEwNC4wMTFDNDQuNjQwNCAxMDcuMDM2IDQyLjk1MTggMTExLjMyOSA0Mi45NTE4IDExNi44ODdWMTE4Ljk5OEM0Mi45NTE4IDEyMy43MTMgNDQuNDY0NSAxMjcuNDQxIDQ3LjQ4OTkgMTMwLjE4NkM1MC41ODU3IDEzMi45MyA1NC4zODQ5IDEzNC4zMDIgNTguODg3OSAxMzQuMzAyWk0zNS4zNTMxIDY2Ljg1ODdDMzAuNjM5MSA2Ni44NTg3IDI4LjI4MjEgNjMuODMzIDI4LjI4MjEgNTcuNzgxOEMyOC4yODIxIDUzLjI3ODUgMzIuMDgxNCA0OS4zNzMyIDM5LjY4MDEgNDYuMDY2MkM0Ny4zNDkyIDQyLjY4ODggNTUuMjk5NiA0MSA2My41MzE1IDQxSDY4LjgwODRDNzUuOTE0NiA0MSA4Mi4xNzY1IDQyLjMzNjkgODcuNTk0IDQ1LjAxMDdDOTMuMDExNyA0Ny42MTQyIDk3LjEyNzYgNTEuMTY3NSA5OS45NDE1IDU1LjY3MDhDMTAyLjgyNyA2MC4xNzQxIDEwNC41ODYgNjYuMDQ5NSAxMDUuMjE4IDczLjI5NjlDMTA1LjM2IDc0Ljk4NTcgMTA1LjQzIDgzLjE4MyAxMDUuNDMgOTcuODg4N0MxMDUuNDMgMTEyLjU5NSAxMDUuNjA1IDEyMS4wNzQgMTA1Ljk1NyAxMjMuMzI2QzEwNi4zOCAxMjUuNTA3IDEwNy41MDUgMTI4LjE4IDEwOS4zMzUgMTMxLjM0N0MxMTEuMjM1IDEzNC41MTQgMTEyLjE4NCAxMzcuMTE2IDExMi4xODQgMTM5LjE1N0MxMTIuMTg0IDE0MS4xOTggMTExLjIgMTQyLjk1NyAxMDkuMjMgMTQ0LjQzNEMxMDcuMzMgMTQ1Ljg0MiAxMDQuNTUgMTQ2LjU0NiAxMDAuODkyIDE0Ni41NDZDOTcuMjMzMSAxNDYuNTQ2IDkzLjI1NzkgMTQ1LjY2NiA4OC45NjYgMTQzLjkwN0M4NC42NzQyIDE0Mi4wNzcgODEuNTQzMyAxNDEuMTYyIDc5LjU3MzMgMTQxLjE2MkM3OS4zNjIxIDE0MS4xNjIgNzUuODQ0MiAxNDIuNDI5IDY5LjAxOTUgMTQ0Ljk2MkM2Mi4xOTQ4IDE0Ny40MjUgNTYuNDI1NCAxNDguNjU2IDUxLjcxMTQgMTQ4LjY1Nkg0OS4zODk1QzQxLjUwOTUgMTQ4LjY1NiAzNC43OTAyIDE0Ni4xNTkgMjkuMjMxOSAxNDEuMTYyQzIzLjc0NCAxMzYuMTY3IDIxIDEyOS4wNjEgMjEgMTE5Ljg0MkMyMSAxMTAuNjI1IDI0LjAyNTUgMTAzLjQ0OCAzMC4wNzYyIDk4LjMxMTJDMzYuMTI3MSA5My4xMDQ4IDQzLjQ3OTUgODkuNTUxIDUyLjEzMzUgODcuNjUxMUM1NC43MzY4IDg3LjA4ODIgNTkuMDYzOCA4Ni4zNDk0IDY1LjExNDYgODUuNDM0NkM3MS4xNjU0IDg0LjUxOTkgNzUuMjgxNCA4My41NyA3Ny40NjI0IDgyLjU4NDlDODEuMjYxOCA4MC44MjU5IDgzLjE2MTUgNzcuNTE4OCA4My4xNjE1IDcyLjY2MzdDODMuMTYxNSA2Ny43MzgyIDgxLjU0MzMgNjMuOTAzNCA3OC4zMDY4IDYxLjE1OTJDNzUuMDcwMyA1OC4zNDQ2IDcxLjIwMDYgNTYuOTM3NCA2Ni42OTc3IDU2LjkzNzRDNjIuMjY1MSA1Ni45Mzc0IDU2LjQyNTQgNTguNTkxIDQ5LjE3ODUgNjEuODk4QzQxLjkzMTYgNjUuMjA1MSAzNy4zMjMxIDY2Ljg1ODcgMzUuMzUzMSA2Ni44NTg3Wk0xNDguOTMzIDEzNC4zMDJIMTUxLjY3N0MxNTcuNDQ2IDEzNC4zMDIgMTYyLjUxMSAxMzIuMzY3IDE2Ni44NzMgMTI4LjQ5OEMxNzEuMzA2IDEyNC41NTcgMTczLjUyMyAxMjAuMDE4IDE3My41MjMgMTE0Ljg4MkwxNzMuNzM0IDExMy41MVYxMTIuMTM3TDE3My45NDUgMTA4Ljg2NlYxMDIuODVDMTczLjk0NSA5OC43NjgxIDE3MS44NjkgOTYuNzI4NCAxNjcuNzE4IDk2LjcyODRIMTYyLjk2OUwxNjIuMjMgOTYuODMzNUwxNTguMTE0IDk3LjE0OTlDMTU2LjE0NCA5Ny40MzE5IDE1NC43MzcgOTcuNTcyNCAxNTMuODkyIDk3LjU3MjRDMTQ4LjE5NCA5Ny41NzI0IDE0Mi45MTcgOTkuNzE4MiAxMzguMDYyIDEwNC4wMTFDMTM0LjY4NSAxMDcuMDM2IDEzMi45OTYgMTExLjMyOSAxMzIuOTk2IDExNi44ODdWMTE4Ljk5OEMxMzIuOTk2IDEyMy43MTMgMTM0LjUwOSAxMjcuNDQxIDEzNy41MzQgMTMwLjE4NkMxNDAuNjMgMTMyLjkzIDE0NC40MjkgMTM0LjMwMiAxNDguOTMzIDEzNC4zMDJaTTEyNS4zOTggNjYuODU4N0MxMjAuNjgzIDY2Ljg1ODcgMTE4LjMyNiA2My44MzMgMTE4LjMyNiA1Ny43ODE4QzExOC4zMjYgNTMuMjc4NSAxMjIuMTI1IDQ5LjM3MzIgMTI5LjcyNSA0Ni4wNjYyQzEzNy4zOTQgNDIuNjg4OCAxNDUuMzQ0IDQxIDE1My41NzYgNDFIMTU4Ljg1M0MxNjUuOTU5IDQxIDE3Mi4yMjEgNDIuMzM2OSAxNzcuNjM4IDQ1LjAxMDdDMTgzLjA1NiA0Ny42MTQyIDE4Ny4xNzIgNTEuMTY3NSAxODkuOTg3IDU1LjY3MDhDMTkyLjg3MSA2MC4xNzQxIDE5NC42MyA2Ni4wNDk1IDE5NS4yNjMgNzMuMjk2OUMxOTUuNDA0IDc0Ljk4NTcgMTk1LjQ3NSA4My4xODMgMTk1LjQ3NSA5Ny44ODg3QzE5NS40NzUgMTEyLjU5NSAxOTUuNjUgMTIxLjA3NCAxOTYuMDAyIDEyMy4zMjZDMTk2LjQyNCAxMjUuNTA3IDE5Ny41NSAxMjguMTggMTk5LjM3OSAxMzEuMzQ3QzIwMS4yNzkgMTM0LjUxNCAyMDIuMjI5IDEzNy4xMTYgMjAyLjIyOSAxMzkuMTU3QzIwMi4yMjkgMTQxLjE5OCAyMDEuMjQ0IDE0Mi45NTcgMTk5LjI3NCAxNDQuNDM0QzE5Ny4zNzQgMTQ1Ljg0MiAxOTQuNTk0IDE0Ni41NDYgMTkwLjkzNyAxNDYuNTQ2QzE4Ny4yNzggMTQ2LjU0NiAxODMuMzAyIDE0NS42NjYgMTc5LjAxMSAxNDMuOTA3QzE3NC43MTggMTQyLjA3NyAxNzEuNTg4IDE0MS4xNjIgMTY5LjYxNyAxNDEuMTYyQzE2OS40MDYgMTQxLjE2MiAxNjUuODg5IDE0Mi40MjkgMTU5LjA2NCAxNDQuOTYyQzE1Mi4yNCAxNDcuNDI1IDE0Ni40NyAxNDguNjU2IDE0MS43NTYgMTQ4LjY1NkgxMzkuNDM0QzEzMS41NTQgMTQ4LjY1NiAxMjQuODM1IDE0Ni4xNTkgMTE5LjI3NiAxNDEuMTYyQzExMy43ODggMTM2LjE2NyAxMTEuMDQ0IDEyOS4wNjEgMTExLjA0NCAxMTkuODQyQzExMS4wNDQgMTEwLjYyNSAxMTQuMDcgMTAzLjQ0OCAxMjAuMTIgOTguMzExMkMxMjYuMTcxIDkzLjEwNDggMTMzLjUyNCA4OS41NTEgMTQyLjE3OCA4Ny42NTExQzE0NC43ODEgODcuMDg4MiAxNDkuMTA5IDg2LjM0OTQgMTU1LjE2IDg1LjQzNDZDMTYxLjIwOSA4NC41MTk5IDE2NS4zMjYgODMuNTcgMTY3LjUwNyA4Mi41ODQ5QzE3MS4zMDYgODAuODI1OSAxNzMuMjA2IDc3LjUxODggMTczLjIwNiA3Mi42NjM3QzE3My4yMDYgNjcuNzM4MiAxNzEuNTg4IDYzLjkwMzQgMTY4LjM1MSA2MS4xNTkyQzE2NS4xMTUgNTguMzQ0NiAxNjEuMjQ1IDU2LjkzNzQgMTU2Ljc0MiA1Ni45Mzc0QzE1Mi4zMDkgNTYuOTM3NCAxNDYuNDcgNTguNTkxIDEzOS4yMjMgNjEuODk4QzEzMS45NzYgNjUuMjA1MSAxMjcuMzY4IDY2Ljg1ODcgMTI1LjM5OCA2Ni44NTg3WlwiIGZpbGw9e3Byb3BzLmNvbG9yTW9kZX0vPlxyXG4gICAgICAgIDxwYXRoIGQ9XCJNNDAuMjQ5NyAxNjcuNzI0VjE2Ny45MDhDNDAuMjQ5NyAxNjguNDMgNDAuMDk2MiAxNjguODc1IDM5Ljc4OTIgMTY5LjI0M0MzOS40OTI0IDE2OS42MDIgMzkuMDMxOSAxNjkuNzgxIDM4LjQwNzYgMTY5Ljc4MUgzOC4xNjJMMzcuNjg2MSAxNjkuNzJDMzcuNDA5NyAxNjkuNzIgMzcuMTQzNyAxNjkuNTkyIDM2Ljg4NzkgMTY5LjMzNUMzNi42MzIgMTY5LjA4IDM2LjUwNCAxNjguNjk2IDM2LjUwNCAxNjguMTg0VjE2OEwzNi41ODA4IDE2Ny40NDdDMzYuNTgwOCAxNjcuMjMzIDM2LjcwODggMTY2Ljk2NyAzNi45NjQ2IDE2Ni42NDlDMzcuMjMwNiAxNjYuMzMyIDM3LjU2ODQgMTY2LjE3MyAzNy45Nzc3IDE2Ni4xNzNMMzguMzMwOCAxNjYuMTI2SDM4LjYzNzhMMzkuMDY3NiAxNjYuMTg4QzM5LjMzMzggMTY2LjE4OCAzOS41OTQ3IDE2Ni4zMjEgMzkuODUwNiAxNjYuNTg3QzQwLjExNjYgMTY2Ljg0NCA0MC4yNDk3IDE2Ny4yMjIgNDAuMjQ5NyAxNjcuNzI0Wk0zOS41MjgyIDE3NC4yMDJMMzkuMzU5MyAxNzguMzMxTDM5LjMyODYgMTc4Ljc0NkwzOS4yODI2IDE4MC4wMDZWMTgwLjYwNEMzOS4yODI2IDE4Mi4wNzggMzkuMzIzNSAxODMuMDQ1IDM5LjQwNTQgMTgzLjUwNkMzOS40OTc1IDE4My45NjYgMzkuNjY2MyAxODQuNDE2IDM5LjkxMiAxODQuODU2QzQwLjE1NzYgMTg1LjI4NiA0MC4yODA0IDE4NS41OTggNDAuMjgwNCAxODUuNzkzVjE4NS45MzFDNDAuMjgwNCAxODYuNDMyIDQwLjAyNDYgMTg2LjgzMSAzOS41MTI5IDE4Ny4xMjlDMzkuMDAxMSAxODcuNDI2IDM4LjMwNTMgMTg3LjU3NCAzNy40MjUyIDE4Ny41NzRIMzcuMDQxM0MzNi41Mjk3IDE4Ny41NzQgMzYuMTQwOCAxODcuNDYxIDM1Ljg3NDcgMTg3LjIzNkMzNS42MDg2IDE4NyAzNS40NzU2IDE4Ni43NSAzNS40NzU2IDE4Ni40ODRWMTg2LjE0N0MzNS40NzU2IDE4Ni4wMTMgMzUuNTkzMyAxODUuNTQyIDM1LjgyODcgMTg0LjczNEMzNi4wNjQgMTgzLjkxNSAzNi4xODE3IDE4Mi44MDQgMzYuMTgxNyAxODEuNDAyQzM2LjIxMjQgMTgxLjAwMyAzNi4yMjc4IDE4MC43MjcgMzYuMjI3OCAxODAuNTc0TDM2LjI3MzggMTc5LjcyOUwzNi4zMDQ1IDE3OS4zMTRDMzYuMzU1NyAxNzguNTk4IDM2LjM4MTIgMTc4LjA0MSAzNi4zODEyIDE3Ny42NDFMMzYuMzk2NiAxNzcuMDI3QzM2LjM5NjYgMTc2LjI1OSAzNi4yNjg3IDE3NS41NzggMzYuMDEyOCAxNzQuOTg1QzM1Ljc2NzIgMTc0LjM5MiAzNS42NDQ0IDE3NC4wMjMgMzUuNjQ0NCAxNzMuODhDMzUuNjQ0NCAxNzMuMTQzIDM2LjM0MDMgMTcyLjc3NCAzNy43MzIxIDE3Mi43NzRIMzguMjg0OEMzOC44MDY3IDE3Mi43NzQgMzkuMTQ0NSAxNzIuOTEzIDM5LjI5NzkgMTczLjE4OUMzOS40NTE0IDE3My40NTUgMzkuNTI4MiAxNzMuNzkzIDM5LjUyODIgMTc0LjIwMlpNNDcuOTQzIDE3My40ODFDNDguNzMxIDE3My4xODQgNDkuNTM5NCAxNzMuMDM2IDUwLjM2ODMgMTczLjAzNkM1MS4xOTczIDE3My4wMzYgNTIuMDU3IDE3My4yODEgNTIuOTQ3MyAxNzMuNzczQzUzLjg0NzkgMTc0LjI2NCA1NC4zMzkxIDE3NC41MDkgNTQuNDIxIDE3NC41MDlDNTQuNTAyOSAxNzQuNTA5IDU1LjA1NTUgMTc0LjI1OSA1Ni4wNzg5IDE3My43NTdDNTcuMTAyMyAxNzMuMjU2IDU4LjAyMzMgMTczLjAwNCA1OC44NDIgMTczLjAwNEM1OS42NzEgMTczLjAwNCA2MC4zNTE2IDE3My4xNzkgNjAuODgzOCAxNzMuNTI3QzYxLjQyNjEgMTczLjg2NSA2MS44MzU1IDE3NC4yNjkgNjIuMTExOCAxNzQuNzM5QzYyLjYzMzcgMTc1LjY0IDYyLjg5NDcgMTc3LjY0MSA2Mi44OTQ3IDE4MC43NDNDNjIuODk0NyAxODIuMTM0IDYyLjkwNDkgMTgyLjkzMyA2Mi45MjU0IDE4My4xMzdDNjIuOTU2MSAxODMuMzMyIDYzLjAyNzcgMTgzLjY4NCA2My4xNDAzIDE4NC4xOTZDNjMuMjYzMSAxODQuNjk4IDYzLjMyNDUgMTg1LjExMiA2My4zMjQ1IDE4NS40NEM2My4zMjQ1IDE4NS43NTcgNjMuMTkxNSAxODYuMDkgNjIuOTI1NCAxODYuNDM3QzYyLjY1OTMgMTg2Ljc4NiA2Mi4zMDYzIDE4Ni45NiA2MS44NjYyIDE4Ni45NkM2MC45OTYzIDE4Ni45NiA2MC40Nzk1IDE4Ni42MDYgNjAuMzE1NyAxODUuOTAxQzYwLjE5MjkgMTg1LjM4OSA2MC4wNDk3IDE4My44OTUgNTkuODg1OSAxODEuNDE4QzU5LjczMjQgMTc4Ljk0MSA1OS41NjM1IDE3Ny40ODcgNTkuMzc5MyAxNzcuMDU4QzU5LjAxMDkgMTc2LjE1NyA1OC4yMjggMTc1LjcwNiA1Ny4wMzA3IDE3NS43MDZDNTYuMjYzMSAxNzUuNzA2IDU1LjY2NDUgMTc2LjE4OCA1NS4yMzQ2IDE3Ny4xNUM1NC42MTAzIDE3OC41MzIgNTQuMjk4MiAxODAuNDk3IDU0LjI5ODIgMTgzLjA0NUw1NC40NTE3IDE4NS4yNTVDNTQuNDUxNyAxODYuMDM0IDU0LjE2NTEgMTg2LjYyMiA1My41OTIxIDE4Ny4wMjFDNTMuMjIzNyAxODcuMjc3IDUyLjczMjQgMTg3LjQwNSA1Mi4xMTg0IDE4Ny40MDVDNTEuNTE0NiAxODcuNDA1IDUxLjExNTQgMTg3LjM0MyA1MC45MjEgMTg3LjIyQzUwLjU4MzMgMTg3LjAxNiA1MC40MTQ0IDE4Ni41ODEgNTAuNDE0NCAxODUuOTE2QzUwLjQxNDQgMTg1Ljc5MyA1MC41MTE3IDE4NS4yOTIgNTAuNzA2MSAxODQuNDExQzUwLjkxMDggMTgzLjUyMSA1MS4wMTMxIDE4Mi4wNzggNTEuMDEzMSAxODAuMDgyQzUxLjAxMzEgMTc4LjA3NiA1MC44NjQ3IDE3Ni44MDIgNTAuNTY4IDE3Ni4yNTlDNTAuMjcxMiAxNzUuNzA2IDQ5Ljc1NDMgMTc1LjQzIDQ5LjAxNzUgMTc1LjQzQzQ4LjI4MDYgMTc1LjQzIDQ3LjYyNTcgMTc1LjY4MSA0Ny4wNTI2IDE3Ni4xODNDNDYuNDg5NyAxNzYuNjg0IDQ2LjA3NTIgMTc3LjIzMiA0NS44MDkyIDE3Ny44MjVDNDUuNTUzMyAxNzguNDE5IDQ1LjMyMyAxNzkuODMxIDQ1LjExODQgMTgyLjA2MkM0NC45MjQgMTg0LjI5NCA0NC43ODU3IDE4NS41NzMgNDQuNzAzOSAxODUuOTAxQzQ0LjU2MDYgMTg2LjQ2MyA0NC4xNDYyIDE4Ni43NDUgNDMuNDYwNSAxODYuNzQ1QzQyLjc4NTEgMTg2Ljc0NSA0Mi4zMTk0IDE4Ni41NDUgNDIuMDYzNSAxODYuMTQ3QzQxLjgxNzkgMTg1LjczNyA0MS42OTUxIDE4NS4yNDEgNDEuNjk1MSAxODQuNjU3TDQxLjc3MTkgMTg0LjEyTDQyLjA2MzUgMTgzLjA2QzQyLjE4NjMgMTgyLjU2OSA0Mi4yNTggMTgxLjk5NiA0Mi4yNzg1IDE4MS4zNDFDNDIuNDMyIDE3Ny4yNzcgNDIuNTQ5NyAxNzQuOTU5IDQyLjYzMTUgMTc0LjM4N0M0Mi43MTM0IDE3My44MTMgNDMuMDgxOSAxNzMuNTI3IDQzLjczNjggMTczLjUyN0w0Ni4wMjQxIDE3My45MUM0Ni41MTUzIDE3My45MSA0Ny4xNTQ5IDE3My43NjggNDcuOTQzIDE3My40ODFaTTY5LjUxMzQgMTg1Ljc0N0g2OS45MTI1QzcwLjc1MTcgMTg1Ljc0NyA3MS40ODg1IDE4NS40NjYgNzIuMTIzMSAxODQuOTAzQzcyLjc2NzggMTg0LjMzIDczLjA5MDEgMTgzLjY3IDczLjA5MDEgMTgyLjkyMkw3My4xMjA4IDE4Mi43MjJWMTgyLjUyM0w3My4xNTE1IDE4Mi4wNDdWMTgxLjE3MkM3My4xNTE1IDE4MC41NzkgNzIuODQ5NiAxODAuMjgyIDcyLjI0NTkgMTgwLjI4Mkg3MS41NTVMNzEuNDQ3NiAxODAuMjk3TDcwLjg0ODkgMTgwLjM0M0M3MC41NjIzIDE4MC4zODQgNzAuMzU3NyAxODAuNDA1IDcwLjIzNDkgMTgwLjQwNUM2OS40MDU5IDE4MC40MDUgNjguNjM4NCAxODAuNzE2IDY3LjkzMjIgMTgxLjM0MUM2Ny40NDEgMTgxLjc4MSA2Ny4xOTU0IDE4Mi40MDUgNjcuMTk1NCAxODMuMjE0VjE4My41MjFDNjcuMTk1NCAxODQuMjA3IDY3LjQxNTQgMTg0Ljc0OSA2Ny44NTU1IDE4NS4xNDhDNjguMzA1NyAxODUuNTQ3IDY4Ljg1ODQgMTg1Ljc0NyA2OS41MTM0IDE4NS43NDdaTTY2LjA5MDEgMTc1LjkzN0M2NS40MDQ0IDE3NS45MzcgNjUuMDYxNyAxNzUuNDk3IDY1LjA2MTcgMTc0LjYxN0M2NS4wNjE3IDE3My45NjEgNjUuNjE0MyAxNzMuMzkzIDY2LjcxOTYgMTcyLjkxM0M2Ny44MzUgMTcyLjQyMiA2OC45OTE1IDE3Mi4xNzYgNzAuMTg4OCAxNzIuMTc2SDcwLjk1NjRDNzEuOTg5OSAxNzIuMTc2IDcyLjkwMDggMTcyLjM3IDczLjY4ODggMTcyLjc1OUM3NC40NzY4IDE3My4xMzggNzUuMDc1NSAxNzMuNjU1IDc1LjQ4NDggMTc0LjMxQzc1LjkwNDQgMTc0Ljk2NCA3Ni4xNjAzIDE3NS44MTkgNzYuMjUyNCAxNzYuODczQzc2LjI3MjkgMTc3LjExOSA3Ni4yODMxIDE3OC4zMTIgNzYuMjgzMSAxODAuNDUxQzc2LjI4MzEgMTgyLjU5IDc2LjMwODcgMTgzLjgyMyA3Ni4zNTk5IDE4NC4xNUM3Ni40MjEzIDE4NC40NjcgNzYuNTg1IDE4NC44NTYgNzYuODUxMSAxODUuMzE3Qzc3LjEyNzQgMTg1Ljc3NyA3Ny4yNjU1IDE4Ni4xNTYgNzcuMjY1NSAxODYuNDUzQzc3LjI2NTUgMTg2Ljc1IDc3LjEyMjMgMTg3LjAwNSA3Ni44MzU3IDE4Ny4yMkM3Ni41NTk0IDE4Ny40MjYgNzYuMTU1MiAxODcuNTI4IDc1LjYyMzEgMTg3LjUyOEM3NS4wOTA5IDE4Ny41MjggNzQuNTEyNiAxODcuNCA3My44ODgzIDE4Ny4xNDRDNzMuMjY0MSAxODYuODc4IDcyLjgwODcgMTg2Ljc0NSA3Mi41MjIxIDE4Ni43NDVDNzIuNDkxNSAxODYuNzQ1IDcxLjk3OTcgMTg2LjkyOSA3MC45ODcgMTg3LjI5N0M2OS45OTQ0IDE4Ny42NTYgNjkuMTU1MiAxODcuODM1IDY4LjQ2OTUgMTg3LjgzNUg2OC4xMzE4QzY2Ljk4NTYgMTg3LjgzNSA2Ni4wMDgzIDE4Ny40NzEgNjUuMTk5OCAxODYuNzQ1QzY0LjQwMTYgMTg2LjAxOCA2NC4wMDI0IDE4NC45ODQgNjQuMDAyNCAxODMuNjQ0QzY0LjAwMjQgMTgyLjMwMyA2NC40NDI0IDE4MS4yNTkgNjUuMzIyNiAxODAuNTEyQzY2LjIwMjcgMTc5Ljc1NCA2Ny4yNzIyIDE3OS4yMzcgNjguNTMwOSAxNzguOTYxQzY4LjkwOTUgMTc4Ljg4IDY5LjUzODkgMTc4Ljc3MiA3MC40MTkxIDE3OC42MzlDNzEuMjk5MiAxNzguNTA1IDcxLjg5NzkgMTc4LjM2OCA3Mi4yMTUxIDE3OC4yMjRDNzIuNzY3NyAxNzcuOTY5IDczLjA0NDEgMTc3LjQ4NyA3My4wNDQxIDE3Ni43ODFDNzMuMDQ0MSAxNzYuMDY1IDcyLjgwODcgMTc1LjUwNyA3Mi4zMzc5IDE3NS4xMDhDNzEuODY3MSAxNzQuNjk4IDcxLjMwNDMgMTc0LjQ5NCA3MC42NDk0IDE3NC40OTRDNzAuMDA0NiAxNzQuNDk0IDY5LjE1NTIgMTc0LjczNCA2OC4xMDExIDE3NS4yMTVDNjcuMDQ3IDE3NS42OTYgNjYuMzc2NyAxNzUuOTM3IDY2LjA5MDEgMTc1LjkzN1pNOTIuNDE5MyAxODUuODM5QzkyLjQxOTMgMTg2LjU5NyA5MS43NTkyIDE4Ni45NzUgOTAuNDM5MSAxODYuOTc1Qzg5LjY5MiAxODYuOTc1IDg5LjE5MDUgMTg2Ljc5NiA4OC45MzQ3IDE4Ni40MzdDODguODExOCAxODYuMjYzIDg4Ljc1MDQgMTg1Ljg1NSA4OC43NTA0IDE4NS4yMDlMODguNzA0NCAxODQuMjI3Qzg4LjYzMjcgMTgzLjE1MyA4OC41OTcgMTgyLjA3MyA4OC41OTcgMTgwLjk4OEM4OC41OTcgMTc4LjY0NCA4OC4zOTIyIDE3Ny4wNzMgODcuOTgyOSAxNzYuMjc1Qzg3LjU4MzggMTc1LjQ2NiA4Ni45MDgzIDE3NS4wNjIgODUuOTU2NiAxNzUuMDYyQzg1LjMyMjEgMTc1LjA2MiA4NC43MzM3IDE3NS4yNTEgODQuMTkxMyAxNzUuNjNDODMuNjU5MSAxNzYuMDA5IDgzLjI0OTggMTc2LjUzNSA4Mi45NjMyIDE3Ny4yMTFDODIuMzY5NiAxNzguNTkzIDgyLjA3MjggMTgxLjE0NiA4Mi4wNzI4IDE4NC44NzJDODIuMDcyOCAxODUuNzIxIDgxLjkwOTEgMTg2LjMyIDgxLjU4MTYgMTg2LjY2OEM4MS4yNjQzIDE4Ny4wMTYgODAuODU1IDE4Ny4xOSA4MC4zNTM1IDE4Ny4xOUg4MC4wNDY1Qzc4LjkwMDMgMTg3LjE5IDc4LjMyNzIgMTg2LjczNCA3OC4zMjcyIDE4NS44MjNWMTg1LjQ1NUM3OC4zMjcyIDE4NS4zNDMgNzguMzg4NiAxODUuMDk3IDc4LjUxMTQgMTg0LjcxOEw3OC43NTcgMTg0LjAxMkM3OS4wMDI2IDE4My4xODMgNzkuMTI1NCAxODEuNDA4IDc5LjEyNTQgMTc4LjY4NUw3OS4yMDIyIDE3NC4xMjVDNzkuMjAyMiAxNzMuNTQyIDc5LjUxOTUgMTczLjI1IDgwLjE1NCAxNzMuMjVDODAuNzg4NSAxNzMuMjUgODEuNDEyOCAxNzMuNDYgODIuMDI2OCAxNzMuODhDODIuNjUxMSAxNzQuMjk5IDgzLjA0NSAxNzQuNTA5IDgzLjIwODggMTc0LjUwOUM4My4zODI4IDE3NC41MDkgODMuNjg0NyAxNzQuMzkyIDg0LjExNDUgMTc0LjE1NkM4NS41NTc1IDE3My4zNjggODYuNzEzOSAxNzIuOTc0IDg3LjU4MzggMTcyLjk3NEg4Ny45ODI5Qzg5LjU0ODcgMTcyLjk3NCA5MC42NDg4IDE3My42OCA5MS4yODMzIDE3NS4wOTNDOTEuNTkwMyAxNzUuNzU4IDkxLjc0MzkgMTc3LjE5MSA5MS43NDM5IDE3OS4zOTFWMTc5LjQ5OUM5MS43NDM5IDE3OS42ODIgOTEuNzM4OCAxNzkuODY3IDkxLjcyODYgMTgwLjA1MUM5MS43Mjg2IDE4MC41NTMgOTEuNzI4NiAxODAuODEzIDkxLjcyODYgMTgwLjgzNEM5MS43Mjg2IDE4MS4wMjkgOTEuNzI4NiAxODEuMjE4IDkxLjcyODYgMTgxLjQwMkM5MS43Mjg2IDE4MS41NDUgOTEuNzI4NiAxODEuNjg0IDkxLjcyODYgMTgxLjgxN0M5MS43Mjg2IDE4Mi42MDUgOTEuNzU0MSAxODMuMTQyIDkxLjgwNTMgMTgzLjQyOUM5MS44NzY5IDE4My44MTggOTEuOTk0NiAxODQuMjIyIDkyLjE1ODQgMTg0LjY0MUM5Mi4zMzI0IDE4NS4xMDIgOTIuNDE5MyAxODUuNTAxIDkyLjQxOTMgMTg1LjgzOVpcIiBmaWxsPXtwcm9wcy5jb2xvck1vZGV9Lz5cclxuICAgICAgICA8cGF0aCBkPVwiTTExNi40OTggMTgwLjIzNlYxODEuNDAyQzExNi40OTggMTgyLjYyIDExNi43NzQgMTgzLjYzOCAxMTcuMzI3IDE4NC40NTdDMTE3Ljg5IDE4NS4yNjYgMTE4LjU1MSAxODUuNjcgMTE5LjMwOCAxODUuNjdIMTE5LjczN0MxMjAuOTAzIDE4NS42NyAxMjEuODA0IDE4NS4yMDQgMTIyLjQzOSAxODQuMjczQzEyMy4wODQgMTgzLjM0MSAxMjMuNDA2IDE4MS45NTUgMTIzLjQwNiAxODAuMTEzQzEyMy40MjYgMTc5Ljg4OCAxMjMuNDM3IDE3OS43MjQgMTIzLjQzNyAxNzkuNjIxTDEyMy40NjggMTc5LjMxNEwxMjMuNDgzIDE3OC42NjlWMTc3LjU4QzEyMy40ODMgMTc1LjQ5MiAxMjIuNjQ5IDE3NC40NDcgMTIwLjk4MSAxNzQuNDQ3SDEyMC4zODJDMTE5LjI5NyAxNzQuNDQ3IDExOC4zNzcgMTc0Ljk5NiAxMTcuNjE5IDE3Ni4wOUMxMTYuODcxIDE3Ny4xODYgMTE2LjQ5OCAxNzguNTY3IDExNi40OTggMTgwLjIzNlpNMTEzLjU1MSAxODAuOTQyQzExMy41NTEgMTc5Ljg3NyAxMTMuNzQgMTc4Ljc5MiAxMTQuMTE5IDE3Ny42ODdDMTE0LjQ5OCAxNzYuNTgxIDExNS4wMjkgMTc1LjY0IDExNS43MTUgMTc0Ljg2MkMxMTYuNDAxIDE3NC4wNzQgMTE3LjE3NCAxNzMuNTA2IDExOC4wMzQgMTczLjE1OEMxMTguODkzIDE3Mi44IDExOS45MTEgMTcyLjYyMSAxMjEuMDg4IDE3Mi42MjFDMTIyLjI3NSAxNzIuNjIxIDEyMy4wMTIgMTcyLjQwNiAxMjMuMjk5IDE3MS45NzZDMTIzLjU4NiAxNzEuNTM2IDEyMy43MjkgMTcwLjU2OCAxMjMuNzI5IDE2OS4wNzRDMTIzLjcyOSAxNjguNzk4IDEyMy42ODMgMTY4LjQyOSAxMjMuNTkgMTY3Ljk3QzEyMy40OTggMTY3LjUwOSAxMjMuNDUyIDE2Ny4yNDIgMTIzLjQ1MiAxNjcuMTcxQzEyMy40NTIgMTY2LjczMSAxMjMuNjQyIDE2Ni4zMzIgMTI0LjAyIDE2NS45NzNDMTI0LjM5OSAxNjUuNjA1IDEyNC44OTUgMTY1LjQyMSAxMjUuNTA5IDE2NS40MjFIMTI1LjgxNkMxMjYuMjk3IDE2NS40MjEgMTI2LjY1NiAxNjUuNTMzIDEyNi44OTEgMTY1Ljc1OUMxMjcuMTI2IDE2NS45ODQgMTI3LjI0NCAxNjYuNDU1IDEyNy4yNDQgMTY3LjE3MVYxNjguNTk4TDEyNy4yMTMgMTY5LjMyQzEyNy4yMDMgMTY5LjU2NSAxMjcuMTk4IDE2OS45MjQgMTI3LjE5OCAxNzAuMzk0QzEyNy4xOTggMTcwLjg1NSAxMjcuMTIxIDE3Mi4zMzkgMTI2Ljk2NyAxNzQuODQ3QzEyNi44MTQgMTc3LjM1NSAxMjYuNzM3IDE3OS4wNzkgMTI2LjczNyAxODAuMDJMMTI2LjcyMiAxODAuMzg5QzEyNi43MTIgMTgwLjYzNCAxMjYuNzA3IDE4MC44NyAxMjYuNzA3IDE4MS4wOTVMMTI2LjY5MSAxODEuNDQ4QzEyNi42OTEgMTgxLjQ0OCAxMjYuNjkxIDE4MS44NDcgMTI2LjY5MSAxODIuNjQ2QzEyNi42OTEgMTgzLjY3OSAxMjYuNzczIDE4NC40NTcgMTI2LjkzNyAxODQuOTc5QzEyNy4xMDEgMTg1LjUwMSAxMjcuMTgyIDE4NS44NzQgMTI3LjE4MiAxODYuMUMxMjcuMTgyIDE4Ni4zMjUgMTI3LjA1NSAxODYuNTYgMTI2Ljc5OCAxODYuODA2QzEyNi41NDMgMTg3LjA1MSAxMjYuMTQ0IDE4Ny4xNzQgMTI1LjYwMiAxODcuMTc0QzEyNS4wNjkgMTg3LjE3NCAxMjQuNTUyIDE4Ny4wODggMTI0LjA1MSAxODYuOTE0QzEyMy41NDkgMTg2LjcyOSAxMjMuMTgxIDE4Ni42MzggMTIyLjk0NiAxODYuNjM4QzEyMi43MSAxODYuNjM4IDEyMi40MDQgMTg2LjcwOCAxMjIuMDI0IDE4Ni44NTJDMTIwLjg3OCAxODcuMjcxIDExOS44MyAxODcuNDgyIDExOC44NzggMTg3LjQ4MkMxMTguODU3IDE4Ny40ODIgMTE4LjgzNiAxODcuNDgyIDExOC44MTcgMTg3LjQ4MkgxMTguNDYzQzExNi45MTggMTg3LjQ4MiAxMTUuNzEgMTg2LjkxOSAxMTQuODQxIDE4NS43OTNDMTEzLjk4MSAxODQuNjU3IDExMy41NTEgMTgzLjE2NyAxMTMuNTUxIDE4MS4zMjVWMTgwLjk0MlpNMTI5LjUwMyAxNjYuMzQyQzEyOS41MDMgMTY1LjU5NSAxMzAuMjA0IDE2NS4yMjEgMTMxLjYwNiAxNjUuMjIxSDEzMS44ODJDMTMyLjQ2NiAxNjUuMjIxIDEzMi44NjUgMTY1LjM2NCAxMzMuMDggMTY1LjY1MUMxMzMuMjk0IDE2NS45MjcgMTMzLjQwMiAxNjYuNDY5IDEzMy40MDIgMTY3LjI3OEwxMzMuMjc5IDE2OS41NjVDMTMzLjI0OSAxNjkuOTI0IDEzMy4yMzMgMTcwLjExOCAxMzMuMjMzIDE3MC4xNDlMMTMzLjIwMyAxNzAuNzMyQzEzMy4xODIgMTcxLjExMSAxMzMuMTYyIDE3MS40OTUgMTMzLjE0MSAxNzEuODg0TDEzMy4wOTUgMTcyLjQ2OEwxMzMuMDQ5IDE3My4zNDJDMTMyLjg4NiAxNzYuNDU0IDEzMi44MDMgMTc4Ljc1MSAxMzIuODAzIDE4MC4yMzZDMTMyLjgwMyAxODEuNzA5IDEzMi44NyAxODIuNzY4IDEzMy4wMDMgMTgzLjQxM0MxMzMuMTM2IDE4NC4wNTggMTMzLjM0NSAxODQuNjA2IDEzMy42MzIgMTg1LjA1NkMxMzMuOTE5IDE4NS41MDYgMTM0LjA2MiAxODUuODA0IDEzNC4wNjIgMTg1Ljk0NlYxODYuMTMxQzEzNC4wNjIgMTg2LjU4MSAxMzMuODM3IDE4Ni45MzkgMTMzLjM4NyAxODcuMjA2QzEzMi45NDYgMTg3LjQ3MSAxMzIuMzQ4IDE4Ny42MDUgMTMxLjU5MSAxODcuNjA1SDEzMC43OTNDMTMwLjMyMSAxODcuNjA1IDEyOS45MDcgMTg3LjQ3MSAxMjkuNTQ5IDE4Ny4yMDZDMTI5LjIwMSAxODYuOTI5IDEyOS4wMjcgMTg2LjYxNyAxMjkuMDI3IDE4Ni4yNjhWMTg1Ljg1NUwxMjkuMTE5IDE4NS4yMDlDMTI5LjI0MiAxODQuMzE5IDEyOS4zMTMgMTgzLjY1NCAxMjkuMzM0IDE4My4yMTRDMTI5LjM2NCAxODIuNzY0IDEyOS40MTEgMTgyLjE0NSAxMjkuNDcyIDE4MS4zNTZDMTI5LjUzMyAxODAuNTU4IDEyOS42MzEgMTc4Ljg2NCAxMjkuNzY0IDE3Ni4yNzVDMTI5LjkwNyAxNzMuNjc1IDEyOS45NzggMTcyLjI3OCAxMjkuOTc4IDE3Mi4wODNMMTMwLjA0IDE3MC45MzJMMTMwLjA3MSAxNjkuNzk2QzEzMC4wNzEgMTY4LjcxMSAxMjkuOTc0IDE2Ny45MzggMTI5Ljc3OSAxNjcuNDc4QzEyOS41OTUgMTY3LjAwNyAxMjkuNTAzIDE2Ni42MjggMTI5LjUwMyAxNjYuMzQyWk0xNDAuMDY3IDE4NS43NDdIMTQwLjQ2NkMxNDEuMzA1IDE4NS43NDcgMTQyLjA0MiAxODUuNDY2IDE0Mi42NzcgMTg0LjkwM0MxNDMuMzIxIDE4NC4zMyAxNDMuNjQzIDE4My42NjkgMTQzLjY0MyAxODIuOTIyTDE0My42NzQgMTgyLjcyMlYxODIuNTIzTDE0My43MDUgMTgyLjA0N1YxODEuMTcyQzE0My43MDUgMTgwLjU3OCAxNDMuNDAzIDE4MC4yODIgMTQyLjc5OSAxODAuMjgySDE0Mi4xMDlMMTQyLjAwMSAxODAuMjk2TDE0MS40MDIgMTgwLjM0M0MxNDEuMTE2IDE4MC4zODQgMTQwLjkxMSAxODAuNDA1IDE0MC43ODggMTgwLjQwNUMxMzkuOTU5IDE4MC40MDUgMTM5LjE5MiAxODAuNzE2IDEzOC40ODYgMTgxLjM0MUMxMzcuOTk0IDE4MS43ODEgMTM3Ljc0OSAxODIuNDA1IDEzNy43NDkgMTgzLjIxNFYxODMuNTIxQzEzNy43NDkgMTg0LjIwNyAxMzcuOTY5IDE4NC43NDkgMTM4LjQwOSAxODUuMTQ4QzEzOC44NTkgMTg1LjU0NyAxMzkuNDEyIDE4NS43NDcgMTQwLjA2NyAxODUuNzQ3Wk0xMzYuNjQzIDE3NS45MzdDMTM1Ljk1OCAxNzUuOTM3IDEzNS42MTUgMTc1LjQ5NyAxMzUuNjE1IDE3NC42MTZDMTM1LjYxNSAxNzMuOTYxIDEzNi4xNjggMTczLjM5MyAxMzcuMjczIDE3Mi45MTNDMTM4LjM4OCAxNzIuNDIxIDEzOS41NDUgMTcyLjE3NiAxNDAuNzQyIDE3Mi4xNzZIMTQxLjUxQzE0Mi41NDMgMTcyLjE3NiAxNDMuNDU0IDE3Mi4zNyAxNDQuMjQzIDE3Mi43NThDMTQ1LjAzMSAxNzMuMTM4IDE0NS42MjkgMTczLjY1NSAxNDYuMDM5IDE3NC4zMUMxNDYuNDU4IDE3NC45NjQgMTQ2LjcxNCAxNzUuODE5IDE0Ni44MDYgMTc2Ljg3M0MxNDYuODI3IDE3Ny4xMTkgMTQ2LjgzNiAxNzguMzEyIDE0Ni44MzYgMTgwLjQ1MUMxNDYuODM2IDE4Mi41OSAxNDYuODYyIDE4My44MjMgMTQ2LjkxMyAxODQuMTVDMTQ2Ljk3NSAxODQuNDY3IDE0Ny4xMzggMTg0Ljg1NiAxNDcuNDA0IDE4NS4zMTdDMTQ3LjY4MSAxODUuNzc3IDE0Ny44MTkgMTg2LjE1NiAxNDcuODE5IDE4Ni40NTNDMTQ3LjgxOSAxODYuNzUgMTQ3LjY3NSAxODcuMDA1IDE0Ny4zOSAxODcuMjJDMTQ3LjExMiAxODcuNDI2IDE0Ni43MDkgMTg3LjUyOCAxNDYuMTc2IDE4Ny41MjhDMTQ1LjY0NSAxODcuNTI4IDE0NS4wNjYgMTg3LjQgMTQ0LjQ0MiAxODcuMTQ0QzE0My44MTcgMTg2Ljg3NyAxNDMuMzYyIDE4Ni43NDUgMTQzLjA3NiAxODYuNzQ1QzE0My4wNDUgMTg2Ljc0NSAxNDIuNTMzIDE4Ni45MjkgMTQxLjU0MSAxODcuMjk3QzE0MC41NDggMTg3LjY1NiAxMzkuNzA5IDE4Ny44MzQgMTM5LjAyMyAxODcuODM0SDEzOC42ODVDMTM3LjUzOSAxODcuODM0IDEzNi41NjIgMTg3LjQ3MSAxMzUuNzUzIDE4Ni43NDVDMTM0Ljk1NSAxODYuMDE4IDEzNC41NTYgMTg0Ljk4NCAxMzQuNTU2IDE4My42NDRDMTM0LjU1NiAxODIuMzAzIDEzNC45OTYgMTgxLjI1OSAxMzUuODc2IDE4MC41MTJDMTM2Ljc1NiAxNzkuNzU0IDEzNy44MjUgMTc5LjIzNyAxMzkuMDg1IDE3OC45NjFDMTM5LjQ2MyAxNzguODggMTQwLjA5MyAxNzguNzcyIDE0MC45NzIgMTc4LjYzOUMxNDEuODUyIDE3OC41MDUgMTQyLjQ1MiAxNzguMzY4IDE0Mi43NjkgMTc4LjIyNEMxNDMuMzIxIDE3Ny45NjkgMTQzLjU5NyAxNzcuNDg3IDE0My41OTcgMTc2Ljc4MUMxNDMuNTk3IDE3Ni4wNjUgMTQzLjM2MiAxNzUuNTA3IDE0Mi44OTIgMTc1LjEwOEMxNDIuNDIgMTc0LjY5OCAxNDEuODU3IDE3NC40OTQgMTQxLjIwMyAxNzQuNDk0QzE0MC41NTggMTc0LjQ5NCAxMzkuNzA5IDE3NC43MzQgMTM4LjY1NSAxNzUuMjE1QzEzNy42IDE3NS42OTYgMTM2LjkzIDE3NS45MzcgMTM2LjY0MyAxNzUuOTM3Wk0xNjMuMjE4IDE4Ni44OThDMTYyLjQ5MiAxODYuODk4IDE2MS44NjIgMTg2LjQ0MyAxNjEuMzMxIDE4NS41MzFDMTYwLjk4MiAxODQuOTI4IDE2MC40MyAxODMuNyAxNTkuNjcyIDE4MS44NDdDMTU4LjkyNiAxNzkuOTg1IDE1OC41IDE3OS4wNTQgMTU4LjM5OCAxNzkuMDU0QzE1OC4zNjcgMTc5LjA1NCAxNTcuOTQzIDE3OS45MjMgMTU3LjEyNCAxODEuNjYzQzE1Ni4zMDUgMTgzLjM5MiAxNTUuNjk2IDE4NC41OCAxNTUuMjk3IDE4NS4yMjVDMTU0LjY2MyAxODYuMjM4IDE1NC4wNTQgMTg2Ljc0NSAxNTMuNDcxIDE4Ni43NDVDMTUzLjEwMiAxODYuNzQ1IDE1Mi43MTMgMTg2LjYwMSAxNTIuMzA0IDE4Ni4zMTRDMTUxLjkwNSAxODYuMDE4IDE1MS41ODMgMTg1LjUzNyAxNTEuMzM3IDE4NC44NzJDMTUxLjMwNiAxODQuNzkgMTUxLjA3MSAxODMuOTA5IDE1MC42MzEgMTgyLjIzMUMxNTAuMiAxODAuNTUzIDE0OS43NTUgMTc4Ljk3NyAxNDkuMjk1IDE3Ny41MDNDMTQ4Ljg0NSAxNzYuMDI5IDE0OC42MiAxNzUuMDMxIDE0OC42MiAxNzQuNTA5QzE0OC42MiAxNzMuOTg3IDE0OC43MzMgMTczLjYxMyAxNDguOTU4IDE3My4zODhDMTQ5LjE4MyAxNzMuMTYzIDE0OS40MTIgMTczLjA1IDE0OS42NDggMTczLjA1QzE1MC42IDE3My4wNSAxNTEuMjcgMTczLjQ0NCAxNTEuNjU5IDE3NC4yMzJDMTUxLjgwMyAxNzQuNTE5IDE1MS45ODYgMTc1LjIzNSAxNTIuMjExIDE3Ni4zODJDMTUzLjI4NiAxODAuNTg4IDE1NC4wMDcgMTgyLjgyIDE1NC4zNzYgMTgzLjA3NUMxNTQuNzY1IDE4My4wNzUgMTU1LjMzMyAxODEuNzc2IDE1Ni4wOCAxNzkuMTc2QzE1Ni4zODcgMTc4LjExMSAxNTYuNTg2IDE3Ny4xNTQgMTU2LjY3OSAxNzYuMzA1QzE1Ni43ODEgMTc1LjQ1NSAxNTYuODQ4IDE3NC45NjQgMTU2Ljg3OCAxNzQuODMyTDE1Ny4wMTcgMTc0LjM0QzE1Ny4zMjMgMTczLjUzMiAxNTcuOTMyIDE3My4xMjggMTU4Ljg0MyAxNzMuMTI4QzE1OS43NjUgMTczLjEyOCAxNjAuNDA0IDE3My41OTMgMTYwLjc2MiAxNzQuNTI0QzE2MC45MDUgMTc0LjkwMyAxNjEuMDM5IDE3NS41NjggMTYxLjE2MiAxNzYuNTIxQzE2MS4yODQgMTc3LjQ2MiAxNjEuNDU4IDE3OC40MDggMTYxLjY4MyAxNzkuMzZDMTYyLjI0NiAxODEuNzk2IDE2Mi42OTEgMTgzLjAxNCAxNjMuMDE4IDE4My4wMTRDMTYzLjQxOCAxODMuMDE0IDE2NC4wNDIgMTgxLjc0IDE2NC44OTIgMTc5LjE5MUMxNjUuMTU3IDE3OC4zOTMgMTY1LjQzNCAxNzcuNDE2IDE2NS43MiAxNzYuMjU5QzE2Ni4wMTcgMTc1LjEwMyAxNjYuMjIyIDE3NC40MDcgMTY2LjMzNCAxNzQuMTcxQzE2Ni43MDMgMTczLjQ0NCAxNjcuMjg2IDE3My4wODIgMTY4LjA4NSAxNzMuMDgyQzE2OC41MDQgMTczLjA4MiAxNjguNzE0IDE3My40OSAxNjguNzE0IDE3NC4zMUMxNjguNzE0IDE3NC43OSAxNjguMTkyIDE3Ni42MjMgMTY3LjE0OCAxNzkuODA1QzE2Ni4xMDQgMTgyLjk3OSAxNjUuNDc1IDE4NC43OTQgMTY1LjI2IDE4NS4yNTVDMTY1LjA0NSAxODUuNzA2IDE2NC43MzggMTg2LjA5NCAxNjQuMzM5IDE4Ni40MjNDMTYzLjk0IDE4Ni43NCAxNjMuNTY3IDE4Ni44OTggMTYzLjIxOCAxODYuODk4Wk0xNzQuMTgxIDE4NS43NDdIMTc0LjU4MUMxNzUuNDIgMTg1Ljc0NyAxNzYuMTU3IDE4NS40NjYgMTc2Ljc5MSAxODQuOTAzQzE3Ny40MzYgMTg0LjMzIDE3Ny43NTggMTgzLjY2OSAxNzcuNzU4IDE4Mi45MjJMMTc3Ljc4OSAxODIuNzIyVjE4Mi41MjNMMTc3LjgxOSAxODIuMDQ3VjE4MS4xNzJDMTc3LjgxOSAxODAuNTc4IDE3Ny41MTggMTgwLjI4MiAxNzYuOTE0IDE4MC4yODJIMTc2LjIyM0wxNzYuMTE2IDE4MC4yOTZMMTc1LjUxNyAxODAuMzQzQzE3NS4yMyAxODAuMzg0IDE3NS4wMjYgMTgwLjQwNSAxNzQuOTAzIDE4MC40MDVDMTc0LjA3NCAxODAuNDA1IDE3My4zMDcgMTgwLjcxNiAxNzIuNiAxODEuMzQxQzE3Mi4xMDkgMTgxLjc4MSAxNzEuODYzIDE4Mi40MDUgMTcxLjg2MyAxODMuMjE0VjE4My41MjFDMTcxLjg2MyAxODQuMjA3IDE3Mi4wODQgMTg0Ljc0OSAxNzIuNTI0IDE4NS4xNDhDMTcyLjk3NCAxODUuNTQ3IDE3My41MjcgMTg1Ljc0NyAxNzQuMTgxIDE4NS43NDdaTTE3MC43NTggMTc1LjkzN0MxNzAuMDcyIDE3NS45MzcgMTY5LjczIDE3NS40OTcgMTY5LjczIDE3NC42MTZDMTY5LjczIDE3My45NjEgMTcwLjI4MyAxNzMuMzkzIDE3MS4zODggMTcyLjkxM0MxNzIuNTAzIDE3Mi40MjEgMTczLjY1OSAxNzIuMTc2IDE3NC44NTcgMTcyLjE3NkgxNzUuNjI0QzE3Ni42NTggMTcyLjE3NiAxNzcuNTY5IDE3Mi4zNyAxNzguMzU3IDE3Mi43NThDMTc5LjE0NCAxNzMuMTM4IDE3OS43NDQgMTczLjY1NSAxODAuMTUyIDE3NC4zMUMxODAuNTcyIDE3NC45NjQgMTgwLjgyOCAxNzUuODE5IDE4MC45MjEgMTc2Ljg3M0MxODAuOTQgMTc3LjExOSAxODAuOTUxIDE3OC4zMTIgMTgwLjk1MSAxODAuNDUxQzE4MC45NTEgMTgyLjU5IDE4MC45NzcgMTgzLjgyMyAxODEuMDI4IDE4NC4xNUMxODEuMDkgMTg0LjQ2NyAxODEuMjUzIDE4NC44NTYgMTgxLjUxOSAxODUuMzE3QzE4MS43OTUgMTg1Ljc3NyAxODEuOTM0IDE4Ni4xNTYgMTgxLjkzNCAxODYuNDUzQzE4MS45MzQgMTg2Ljc1IDE4MS43OSAxODcuMDA1IDE4MS41MDMgMTg3LjIyQzE4MS4yMjcgMTg3LjQyNiAxODAuODIzIDE4Ny41MjggMTgwLjI5MSAxODcuNTI4QzE3OS43NTggMTg3LjUyOCAxNzkuMTgxIDE4Ny40IDE3OC41NTYgMTg3LjE0NEMxNzcuOTMyIDE4Ni44NzcgMTc3LjQ3NiAxODYuNzQ1IDE3Ny4xOSAxODYuNzQ1QzE3Ny4xNiAxODYuNzQ1IDE3Ni42NDggMTg2LjkyOSAxNzUuNjU1IDE4Ny4yOTdDMTc0LjY2MiAxODcuNjU2IDE3My44MjMgMTg3LjgzNCAxNzMuMTM4IDE4Ny44MzRIMTcyLjhDMTcxLjY1MyAxODcuODM0IDE3MC42NzcgMTg3LjQ3MSAxNjkuODY4IDE4Ni43NDVDMTY5LjA2OSAxODYuMDE4IDE2OC42NzEgMTg0Ljk4NCAxNjguNjcxIDE4My42NDRDMTY4LjY3MSAxODIuMzAzIDE2OS4xMTEgMTgxLjI1OSAxNjkuOTkxIDE4MC41MTJDMTcwLjg3IDE3OS43NTQgMTcxLjk0IDE3OS4yMzcgMTczLjE5OSAxNzguOTYxQzE3My41NzggMTc4Ljg4IDE3NC4yMDcgMTc4Ljc3MiAxNzUuMDg3IDE3OC42MzlDMTc1Ljk2NyAxNzguNTA1IDE3Ni41NjYgMTc4LjM2OCAxNzYuODgzIDE3OC4yMjRDMTc3LjQzNiAxNzcuOTY5IDE3Ny43MTIgMTc3LjQ4NyAxNzcuNzEyIDE3Ni43ODFDMTc3LjcxMiAxNzYuMDY1IDE3Ny40NzYgMTc1LjUwNyAxNzcuMDA2IDE3NS4xMDhDMTc2LjUzNSAxNzQuNjk4IDE3NS45NzIgMTc0LjQ5NCAxNzUuMzE4IDE3NC40OTRDMTc0LjY3MiAxNzQuNDk0IDE3My44MjMgMTc0LjczNCAxNzIuNzY5IDE3NS4yMTVDMTcxLjcxNSAxNzUuNjk2IDE3MS4wNDUgMTc1LjkzNyAxNzAuNzU4IDE3NS45MzdaTTE5Ny4wODcgMTg1LjgzOUMxOTcuMDg3IDE4Ni41OTYgMTk2LjQyNyAxODYuOTc1IDE5NS4xMDcgMTg2Ljk3NUMxOTQuMzYgMTg2Ljk3NSAxOTMuODU5IDE4Ni43OTYgMTkzLjYwMiAxODYuNDM3QzE5My40NzkgMTg2LjI2MyAxOTMuNDE5IDE4NS44NTUgMTkzLjQxOSAxODUuMjA5TDE5My4zNzIgMTg0LjIyN0MxOTMuMzAxIDE4My4xNTMgMTkzLjI2NSAxODIuMDczIDE5My4yNjUgMTgwLjk4OEMxOTMuMjY1IDE3OC42NDQgMTkzLjA2IDE3Ny4wNzMgMTkyLjY1MSAxNzYuMjc1QzE5Mi4yNTEgMTc1LjQ2NiAxOTEuNTc2IDE3NS4wNjIgMTkwLjYyNCAxNzUuMDYyQzE4OS45OSAxNzUuMDYyIDE4OS40MDEgMTc1LjI1MSAxODguODU5IDE3NS42MjlDMTg4LjMyNyAxNzYuMDA5IDE4Ny45MTggMTc2LjUzNSAxODcuNjMxIDE3Ny4yMTFDMTg3LjAzOCAxNzguNTkzIDE4Ni43NDEgMTgxLjE0NiAxODYuNzQxIDE4NC44NzJDMTg2Ljc0MSAxODUuNzIxIDE4Ni41NzcgMTg2LjMyIDE4Ni4yNSAxODYuNjY4QzE4NS45MzIgMTg3LjAxNiAxODUuNTIzIDE4Ny4xOSAxODUuMDIyIDE4Ny4xOUgxODQuNzE0QzE4My41NjggMTg3LjE5IDE4Mi45OTUgMTg2LjczNCAxODIuOTk1IDE4NS44MjNWMTg1LjQ1NUMxODIuOTk1IDE4NS4zNDMgMTgzLjA1NyAxODUuMDk3IDE4My4xNzkgMTg0LjcxOEwxODMuNDI1IDE4NC4wMTJDMTgzLjY3MSAxODMuMTgzIDE4My43OTMgMTgxLjQwOCAxODMuNzkzIDE3OC42ODVMMTgzLjg3IDE3NC4xMjVDMTgzLjg3IDE3My41NDIgMTg0LjE4NyAxNzMuMjUgMTg0LjgyMiAxNzMuMjVDMTg1LjQ1NyAxNzMuMjUgMTg2LjA4MSAxNzMuNDYgMTg2LjY5NSAxNzMuODhDMTg3LjMxOSAxNzQuMjk5IDE4Ny43MTMgMTc0LjUwOSAxODcuODc3IDE3NC41MDlDMTg4LjA1IDE3NC41MDkgMTg4LjM1MyAxNzQuMzkxIDE4OC43ODIgMTc0LjE1NkMxOTAuMjI2IDE3My4zNjggMTkxLjM4MiAxNzIuOTc0IDE5Mi4yNTEgMTcyLjk3NEgxOTIuNjUxQzE5NC4yMTYgMTcyLjk3NCAxOTUuMzE3IDE3My42OCAxOTUuOTUxIDE3NS4wOTNDMTk2LjI1OCAxNzUuNzU4IDE5Ni40MTIgMTc3LjE5MSAxOTYuNDEyIDE3OS4zOTFWMTc5LjQ5OUMxOTYuNDEyIDE3OS42ODIgMTk2LjQwNyAxNzkuODY3IDE5Ni4zOTYgMTgwLjA1MUMxOTYuMzk2IDE4MC41NTMgMTk2LjM5NiAxODAuODEzIDE5Ni4zOTYgMTgwLjgzNEMxOTYuMzk2IDE4MS4wMjggMTk2LjM5NiAxODEuMjE4IDE5Ni4zOTYgMTgxLjQwMkMxOTYuMzk2IDE4MS41NDUgMTk2LjM5NiAxODEuNjg0IDE5Ni4zOTYgMTgxLjgxNkMxOTYuMzk2IDE4Mi42MDQgMTk2LjQyMiAxODMuMTQyIDE5Ni40NzMgMTgzLjQyOUMxOTYuNTQ1IDE4My44MTggMTk2LjY2MyAxODQuMjIyIDE5Ni44MjcgMTg0LjY0MUMxOTcuMDAxIDE4NS4xMDIgMTk3LjA4NyAxODUuNTAxIDE5Ny4wODcgMTg1LjgzOVpcIiBmaWxsPXtwcm9wcy5jb2xvck1vZGV9Lz5cclxuICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJ0b3AtbGluZVwiIGQ9XCJNMTIuNzcxNSA0LjQyMTM5TDIwOS4yNjIgNC44NzQxN1wiIHN0cm9rZT17cHJvcHMuY29sb3JNb2RlfSBzdHJva2VXaWR0aD1cIjRcIi8+XHJcbiAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwicmlnaHQtbGluZVwiIGQ9XCJNMjE5LjU3OSAxMy4yNjQyTDIyMC4wMzMgMjA5Ljc3XCIgc3Ryb2tlPXtwcm9wcy5jb2xvck1vZGV9IHN0cm9rZVdpZHRoPVwiNFwiLz5cclxuICAgICAgICA8cGF0aCBjbGFzc05hbWU9J2JvdHRvbS1saW5lJyBkPVwiTTIxMC43MzcgMjIxLjA3SDE0LjI0NjFcIiBzdHJva2U9e3Byb3BzLmNvbG9yTW9kZX0gc3Ryb2tlV2lkdGg9XCI0XCIvPlxyXG4gICAgICAgIDxwYXRoIGNsYXNzTmFtZT0nbGVmdC1saW5lJyBkPVwiTTQuNDIwOSAyMTEuNzM2VjE1LjIyOTJcIiBzdHJva2U9e3Byb3BzLmNvbG9yTW9kZX0gc3Ryb2tlV2lkdGg9XCI0XCIvPlxyXG4gICAgICA8L2c+XHJcbiAgICA8ZGVmcz5cclxuICAgIDxjbGlwUGF0aCBpZD1cImNsaXAwXCI+XHJcbiAgICAgIDxyZWN0IHdpZHRoPVwiMjI0XCIgaGVpZ2h0PVwiMjI1XCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgPC9jbGlwUGF0aD5cclxuICAgIDwvZGVmcz5cclxuICA8L3N2Zz5cclxuXHJcblxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnJhbmRMb2dvXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIENsb3NlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGNsYXNzTmFtZT0nbWVudS1jbG9zZScgd2lkdGg9XCIzNFwiIGhlaWdodD1cIjM0XCIgdmlld0JveD1cIjAgMCAzNCAzNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEuNTYwNzMgMjkuNjUyM0MwLjY5ODgwMSAzMC41MTQzIDAuNjk4ODAyIDMxLjkxMTcgMS41NjA3MyAzMi43NzM2QzIuNDIyNjYgMzMuNjM1NiAzLjgyMDExIDMzLjYzNTYgNC42ODIwNCAzMi43NzM2TDE3LjE2NzEgMjAuMjg4NkwyOS42NTIzIDMyLjc3MzlDMzAuNTE0MyAzMy42MzU4IDMxLjkxMTcgMzMuNjM1OCAzMi43NzM2IDMyLjc3MzlDMzMuNjM1NiAzMS45MTIgMzMuNjM1NiAzMC41MTQ1IDMyLjc3MzYgMjkuNjUyNkwyMC4yODg0IDE3LjE2NzNMMzIuNzczOSA0LjY4MTgyQzMzLjYzNTggMy44MTk4OSAzMy42MzU4IDIuNDIyNDQgMzIuNzczOSAxLjU2MDUxQzMxLjkxMTkgMC42OTg1ODMgMzAuNTE0NSAwLjY5ODU3OSAyOS42NTI2IDEuNTYwNTFMMTcuMTY3MSAxNC4wNDZMNC42ODE4MiAxLjU2MDc1QzMuODE5OSAwLjY5ODgyNCAyLjQyMjQ0IDAuNjk4ODI1IDEuNTYwNTEgMS41NjA3NUMwLjY5ODU4MyAyLjQyMjY4IDAuNjk4NTc5IDMuODIwMTQgMS41NjA1MSA0LjY4MjA2TDE0LjA0NTggMTcuMTY3M0wxLjU2MDczIDI5LjY1MjNaXCIgZmlsbD1cIiNFQkU5Q0RcIi8+XHJcbiAgICA8L3N2Zz5cclxuXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbG9zZVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBXaXRoVGV4dHMgZnJvbSAnLi9TY3JvbGxTdmdzL1dpdGhUZXh0cydcclxuaW1wb3J0IEFycm93cmlnaHQgZnJvbSAnLi9TY3JvbGxTdmdzL0Fycm93UmlnaHQnXHJcbmltcG9ydCBFbnZlbG9wIGZyb20gJy4vU2Nyb2xsU3Zncy9FbnZlbG9wJ1xyXG5pbXBvcnQgRHJpYmJibGUgZnJvbSAnLi9TY3JvbGxTdmdzL0RyaWJiYmxlJ1xyXG5pbXBvcnQgR2l0aHViIGZyb20gJy4vU2Nyb2xsU3Zncy9HaXRodWInXHJcbmltcG9ydCBCZWhhbmNlIGZyb20gJy4vU2Nyb2xsU3Zncy9CZWhhbmNlJ1xyXG5cclxuZnVuY3Rpb24gU2Nyb2xsKHByb3BzKSB7XHJcbiAgbGV0IHN2ZztcclxuXHJcbiAgaWYocHJvcHMudHlwZSA9PT0gJ3dpdGhUZXh0Jyl7XHJcbiAgICBzdmcgPSA8V2l0aFRleHRzIGNvbG9ycz17cHJvcHMuY29sb3JzfSAvPlxyXG4gIH0gXHJcbiAgXHJcbiAgaWYocHJvcHMudHlwZSA9PT0gJ2Fycm93Jykge1xyXG4gICAgc3ZnID0gPEFycm93cmlnaHQgY29sb3JzPXtwcm9wcy5jb2xvcnN9IC8+XHJcbiAgfVxyXG5cclxuICBpZihwcm9wcy50eXBlID09PSAnZW52ZWxvcCcpIHtcclxuICAgIHN2ZyA9IDxFbnZlbG9wIGNvbG9ycz17cHJvcHMuY29sb3JzfSAvPlxyXG4gIH1cclxuXHJcbiAgaWYocHJvcHMudHlwZSA9PT0gJ2JlaGFuY2UnKSBzdmcgPSA8QmVoYW5jZSAvPlxyXG5cclxuICBpZihwcm9wcy50eXBlID09PSAnZHJpYmJibGUnKSBzdmcgPSA8RHJpYmJibGUgLz5cclxuXHJcbiAgaWYocHJvcHMudHlwZSA9PT0gJ2dpdGh1YicpIHN2ZyA9IDxHaXRodWIvPlxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgKHN2ZylcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjcm9sbFxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBXaXRob3V0VGV4dChwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTAgMTZcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgPHBhdGggZD1cIk05LjY0MTY1IDguNjIxOTZMMi4zNzc5OCAxNS43NDI1QzIuMDI3NzggMTYuMDg1OCAxLjQ1OTcgMTYuMDg1OCAxLjEwOTUgMTUuNzQyNUwwLjI2MjIyOCAxNC45MTE5Qy0wLjA4NzU5NCAxNC41Njg5IC0wLjA4Nzk2NjkgMTQuMDEzNSAwLjI2MDczNCAxMy42Njk4TDYuMDE3NDggOC4wMDAxOEwwLjI2MTEwNiAyLjMzMDE5Qy0wLjA4Nzk2NzkgMS45ODY1MSAtMC4wODcyMjAyIDEuNDMxMDYgMC4yNjI2MDIgMS4wODgxMUwxLjEwOTg4IDAuMjU3NDg1QzEuNDYwMDcgLTAuMDg1ODI4OCAyLjAyODE2IC0wLjA4NTgyODggMi4zNzgzNSAwLjI1NzQ4NUw5LjY0MTY1IDcuMzc4NDFDOS45OTE4NSA3LjcyMTcyIDkuOTkxODUgOC4yNzg2NSA5LjY0MTY1IDguNjIxOTZaXCIgZmlsbD17cHJvcHMuY29sb3JzfS8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpdGhvdXRUZXh0XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIEJlaGFuY2UoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgd2lkdGg9XCI0MFwiIGhlaWdodD1cIjI1XCIgdmlld0JveD1cIjAgMCA0MCAyNVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICA8cGF0aCBkPVwiTTE1Ljc0OTYgMTEuMjAxOUMxNy45MDg0IDEwLjE0OTUgMTkuMDM1MyA4LjU1NzE5IDE5LjAzNTMgNi4wNzg2NUMxOS4wMzUzIDEuMTkwODEgMTUuNDY0NSAwIDExLjM0MzggMEgwVjI0LjUzNjFIMTEuNjYyOUMxNi4wMzQ4IDI0LjUzNjEgMjAuMTQxOSAyMi4zOTY4IDIwLjE0MTkgMTcuNDEyMUMyMC4xNDE5IDE0LjMzMTIgMTguNzA5NSAxMi4wNTM0IDE1Ljc0OTYgMTEuMjAxOVYxMS4yMDE5Wk01LjI4ODM1IDQuMTg4NTlIMTAuMjUwOEMxMi4xNTg1IDQuMTg4NTkgMTMuODc2IDQuNzM1NTMgMTMuODc2IDYuOTkyNTJDMTMuODc2IDkuMDc2NDMgMTIuNTM4NiA5LjkxNDE1IDEwLjY1MTQgOS45MTQxNUg1LjI4ODM1VjQuMTg4NTlWNC4xODg1OVpNMTAuOTQzMyAyMC4zNjgzSDUuMjg4MzVWMTMuNjExMkgxMS4wNTE5QzEzLjM4MDQgMTMuNjExMiAxNC44NTM1IDE0LjYwMTIgMTQuODUzNSAxNy4xMTQ0QzE0Ljg1MzUgMTkuNTkyOSAxMy4wOTUzIDIwLjM2ODMgMTAuOTQzMyAyMC4zNjgzVjIwLjM2ODNaTTM1LjI4MDYgMy43MDM5NkgyNS41MjUzVjEuMjg3NzNIMzUuMjgwNlYzLjcwMzk2VjMuNzAzOTZaTTM5LjEwMjYgMTUuOTA5N0MzOS4xMDI2IDEwLjY1NDkgMzYuMDg4NCA2LjI3MjUgMzAuNjIzNiA2LjI3MjVDMjUuMzE0OCA2LjI3MjUgMjEuNzEwMSAxMC4zNDM0IDIxLjcxMDEgMTUuNjc0M0MyMS43MTAxIDIxLjIwNiAyNS4xMjQ4IDI1IDMwLjYyMzYgMjVDMzQuNzg1IDI1IDM3LjQ4MDEgMjMuMDg5MiAzOC43NzY3IDE5LjAyNTJIMzQuNTU0MkMzNC4wOTkzIDIwLjU0MTQgMzIuMjI1NyAyMS4zNDQ1IDMwLjc3MjkgMjEuMzQ0NUMyNy45NjkyIDIxLjM0NDUgMjYuNDk2MSAxOS42NjkxIDI2LjQ5NjEgMTYuODIzNkgzOS4wNjE4QzM5LjA4MjIgMTYuNTMyOCAzOS4xMDI2IDE2LjIyMTMgMzkuMTAyNiAxNS45MDk3Wk0yNi41MDI5IDEzLjc0OTdDMjYuNjU5IDExLjQxNjUgMjguMTc5NiA5Ljk1NTY5IDMwLjQ3NDIgOS45NTU2OUMzMi44Nzc0IDkuOTU1NjkgMzQuMDg1OCAxMS4zOTU3IDM0LjI4OTQgMTMuNzQ5N0gyNi41MDI5WlwiIGZpbGw9XCIjMzc4NkNFXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCZWhhbmNlIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gRHJpYmJibGUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgdmlld0JveD1cIjAgMCAyNSAyNVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgPHBhdGggZD1cIk0xMi41IDBDNS42MDc0NiAwIDAgNS42MDc0NiAwIDEyLjVDMCAxOS4zOTI1IDUuNjA3NDYgMjUgMTIuNSAyNUMxOS4zOTI1IDI1IDI1IDE5LjM5MjUgMjUgMTIuNUMyNSA1LjYwNzQ2IDE5LjM5MjUgMCAxMi41IDBaTTIwLjc2NDYgNS43NjQ0MkMyMi4yNTE3IDcuNTgxMjUgMjMuMTUyMiA5Ljg5NTMxIDIzLjE3NTcgMTIuNDE1NEMyMi44MjM2IDEyLjM0MDkgMTkuMjkzNyAxMS42MjQ5IDE1Ljc0MTEgMTIuMDcxN0MxNS40NTEyIDExLjM2NCAxNS4xNzc1IDEwLjc0MTQgMTQuODAyNyA5Ljk3NDI0QzE4Ljc1MDQgOC4zNjI1IDIwLjUzOTUgNi4wNjg5IDIwLjc2NDYgNS43NjQ0MlY1Ljc2NDQyWk0xOS41Nzc3IDQuNTI5NzRDMTkuMzg1NiA0LjgwMzI4IDE3Ljc3ODQgNi45NjM1MSAxMy45ODE5IDguMzg2NTRDMTIuMjMyMyA1LjE3MjAzIDEwLjI5MzEgMi41MzEzIDkuOTk3OTggMi4xMzYxNEMxMy4zODM5IDEuMzE5OTYgMTYuOTUxOSAyLjIwMDE1IDE5LjU3NzcgNC41Mjk3NFY0LjUyOTc0Wk03Ljk2MDc0IDIuODUzODNDOC4yNDIyNCAzLjIzOTg3IDEwLjE1MDIgNS44ODM4NyAxMS45MTkzIDkuMDI4NjhDNi45MjQ5NSAxMC4zNTQ5IDIuNTI2MTEgMTAuMzM1OCAyLjA0ODU5IDEwLjMyOTVDMi43NDA5MyA3LjAxNjM4IDQuOTczNjkgNC4yNjI3NSA3Ljk2MDc0IDIuODUzODNaTTEuODIzMDggMTIuNTE2M0MxLjgyMzA4IDEyLjQwNzEgMS44MjUyNSAxMi4yOTg0IDEuODI4NTMgMTIuMTlDMi4yOTU2NyAxMi4xOTk2IDcuNDY5NjYgMTIuMjY2MyAxMi44MDE2IDEwLjY3MDZDMTMuMTA3MyAxMS4yNjg3IDEzLjM5OTIgMTEuODc2IDEzLjY2NzIgMTIuNDgyNUM5LjgwNjQgMTMuNTcgNi4yOTg1OSAxNi42OTI1IDQuNTY3ODkgMTkuNjU1MkMyLjg2MjYgMTcuNzYyMyAxLjgyMzA4IDE1LjI1ODYgMS44MjMwOCAxMi41MTYzWk01Ljk0NjQyIDIwLjkzOTNDNy4wNjE2OSAxOC42NTk0IDEwLjA4ODUgMTUuNzE2NCAxNC4zOTI5IDE0LjI0OEMxNS44OTE5IDE4LjE0MzMgMTYuNTExOCAyMS40MDc5IDE2LjY3MDYgMjIuMzQ0N0MxMy4yMzc2IDIzLjgwNyA5LjEwOTM3IDIzLjQwNTggNS45NDY0MiAyMC45MzkzVjIwLjkzOTNaTTE4LjQ2NTYgMjEuMzY3MkMxOC4zNTYxIDIwLjcxNzcgMTcuNzg3OSAxNy41OTIxIDE2LjM5MTQgMTMuNzU0NkMxOS43MzcxIDEzLjIxOTEgMjIuNjc2NyAxNC4wOTU4IDIzLjA0MTkgMTQuMjExQzIyLjU2NiAxNy4xODE5IDIwLjg2MDggMTkuNzQ3NSAxOC40NjU2IDIxLjM2NzJaXCIgZmlsbD1cIiNDNDY2QTRcIi8+XHJcbiAgICA8L3N2Zz5cclxuXHJcblxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJpYmJibGUiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBFbnZlbG9wKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgd2lkdGg9XCIzNlwiIGhlaWdodD1cIjI3XCIgdmlld0JveD1cIjAgMCAzNiAyN1wiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICA8cGF0aCBkPVwiTTMyLjM4NTEgMEgzLjM1MDE4QzEuNDk5OTEgMCAwIDEuNTExMDIgMCAzLjM3NVYyMy42MjVDMCAyNS40ODkgMS40OTk5MSAyNyAzLjM1MDE4IDI3SDMyLjM4NTFDMzQuMjM1NCAyNyAzNS43MzUzIDI1LjQ4OSAzNS43MzUzIDIzLjYyNVYzLjM3NUMzNS43MzUzIDEuNTExMDIgMzQuMjM1NCAwIDMyLjM4NTEgMFpNMzIuMzg1MSAzLjM3NVY2LjI0NDFDMzAuODIwMiA3LjUyNzk0IDI4LjMyNTIgOS41MjQyNSAyMi45OTE1IDEzLjczMTdDMjEuODE2MSAxNC42NjMxIDE5LjQ4NzcgMTYuOTAwOCAxNy44Njc2IDE2Ljg3NDdDMTYuMjQ3OCAxNi45MDExIDEzLjkxODcgMTQuNjYyOCAxMi43NDM4IDEzLjczMTdDNy40MTA4OSA5LjUyNDg4IDQuOTE1MzUgNy41MjgxNSAzLjM1MDE4IDYuMjQ0MVYzLjM3NUgzMi4zODUxWk0zLjM1MDE4IDIzLjYyNVYxMC41NzQ5QzQuOTQ5NDggMTEuODU4MSA3LjIxNzQ4IDEzLjY1ODkgMTAuNjc0NCAxNi4zODU5QzEyLjE5OTkgMTcuNTk1NiAxNC44NzE1IDIwLjI2NjIgMTcuODY3NiAyMC4yNDk5QzIwLjg0OTEgMjAuMjY2MiAyMy40ODY4IDE3LjYzNDQgMjUuMDYwMyAxNi4zODY1QzI4LjUxNzEgMTMuNjU5NSAzMC43ODU3IDExLjg1ODMgMzIuMzg1MSAxMC41NzQ5VjIzLjYyNUgzLjM1MDE4WlwiIFxyXG4gICAgICBmaWxsPXtwcm9wcy5jb2xvcnN9Lz5cclxuICAgIDwvc3ZnPlxyXG5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVudmVsb3AiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBHaXRodWIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgd2lkdGg9XCIzNFwiIGhlaWdodD1cIjI3XCIgdmlld0JveD1cIjAgMCAzNCAyN1wiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICA8cGF0aCBkPVwiTTEyLjg4MzggMTguNjExMkMxMi44ODM4IDIwLjA4MDcgMTIuMTI5MiAyMi40ODUzIDEwLjM0MzEgMjIuNDg1M0M4LjU1NjkyIDIyLjQ4NTMgNy44MDIzMSAyMC4wODA3IDcuODAyMzEgMTguNjExMkM3LjgwMjMxIDE3LjE0MTcgOC41NTY5MiAxNC43MzcxIDEwLjM0MzEgMTQuNzM3MUMxMi4xMjkyIDE0LjczNzEgMTIuODgzOCAxNy4xNDE3IDEyLjg4MzggMTguNjExMlpNMzMuMjMwOCAxNS4wNjA1QzMzLjIzMDggMTcuMzAzNCAzMy4wMDkyIDE5LjY3OTkgMzIuMDE5MiAyMS43NEMyOS4zOTU0IDI3LjEyNTggMjIuMTgxNSAyNi45OTkyIDE3LjAxNjkgMjYuOTk5MkMxMS43NjkyIDI2Ljk5OTIgNC4xMjYxNSAyNy4xODkgMS4zOTg0NiAyMS43NEMwLjM4NzY5MiAxOS43MDEgMCAxNy4zMDM0IDAgMTUuMDYwNUMwIDEyLjExNDUgMC45NjIzMDggOS4zMzAxOSAyLjg3MzA4IDcuMDczMjNDMi41MTMwOCA1Ljk2MjMyIDIuMzQgNC43OTUxNyAyLjM0IDMuNjQyMDhDMi4zNCAyLjEzMDQxIDIuNjc5MjMgMS4zNzEwNSAzLjM1MDc3IDBDNi40ODY5MiAwIDguNDk0NjEgMC42MzI3OTQgMTAuODgzMSAyLjUzMTE3QzEyLjg5MDggMi4wNDYwMyAxNC45NTM4IDEuODI4MDcgMTcuMDIzOCAxLjgyODA3QzE4Ljg5MzEgMS44MjgwNyAyMC43NzYyIDIuMDMxOTcgMjIuNTkgMi40NzQ5M0MyNC45NDM4IDAuNTk3NjM4IDI2Ljk1MTUgMCAzMC4wNTMxIDBDMzAuNzMxNSAxLjM3MTA1IDMxLjA2MzggMi4xMzA0MSAzMS4wNjM4IDMuNjQyMDhDMzEuMDYzOCA0Ljc5NTE3IDMwLjg4MzggNS45NDEyMyAzMC41MzA4IDcuMDMxMDRDMzIuNDM0NiA5LjMwOTEgMzMuMjMwOCAxMi4xMTQ1IDMzLjIzMDggMTUuMDYwNVpNMjguNzc5MiAxOC42MTEyQzI4Ljc3OTIgMTUuNTI0NSAyNi45MzA4IDEyLjgwMzUgMjMuNjkwOCAxMi44MDM1QzIyLjM4MjMgMTIuODAzNSAyMS4xMjkyIDEzLjA0MjYgMTkuODEzOCAxMy4yMjU0QzE4Ljc4MjMgMTMuMzg3MSAxNy43NTA4IDEzLjQ1MDQgMTYuNjkxNSAxMy40NTA0QzE1LjYzOTIgMTMuNDUwNCAxNC42MDc3IDEzLjM4NzEgMTMuNTY5MiAxMy4yMjU0QzEyLjI3NDYgMTMuMDQyNiAxMS4wMDc3IDEyLjgwMzUgOS42OTIzMSAxMi44MDM1QzYuNDUyMzEgMTIuODAzNSA0LjYwMzg1IDE1LjUyNDUgNC42MDM4NSAxOC42MTEyQzQuNjAzODUgMjQuNzg0NCAxMC4xNyAyNS43MzM2IDE1LjAxNjIgMjUuNzMzNkgxOC4zNTMxQzIzLjIyIDI1LjczMzYgMjguNzc5MiAyNC43OTE1IDI4Ljc3OTIgMTguNjExMlpNMjMuMDYwOCAxNC43MzcxQzIxLjI3NDYgMTQuNzM3MSAyMC41MiAxNy4xNDE3IDIwLjUyIDE4LjYxMTJDMjAuNTIgMjAuMDgwNyAyMS4yNzQ2IDIyLjQ4NTMgMjMuMDYwOCAyMi40ODUzQzI0Ljg0NjkgMjIuNDg1MyAyNS42MDE1IDIwLjA4MDcgMjUuNjAxNSAxOC42MTEyQzI1LjYwMTUgMTcuMTQxNyAyNC44NDY5IDE0LjczNzEgMjMuMDYwOCAxNC43MzcxWlwiIGZpbGw9XCIjQUJBOThGXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHaXRodWIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBXaXRoVGV4dHMocHJvcHMpIHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPSdzdWItcmV2ZWFsJyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMTIxXCIgdmlld0JveD1cIjAgMCAyMCAxMjFcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgPHBhdGggZD1cIk02Ljg0MTggNTQuODYwNEw2Ljg0MTggMTIwQzcuMDk0NjQgMTE1LjYyOSAxMi4zNjgxIDk5LjA2MjIgMTUuMjYyOCA5OS4wNjIyXCIgc3Ryb2tlPXtwcm9wcy5jb2xvcnMuZGFya0NvbG9yfSBzdHJva2VXaWR0aD1cIjNcIi8+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMy44MzggNy4xNDkzN0MzLjgzOCA2LjM5MzM3IDMuOTY0IDUuNzE1MzcgNC4yMTYgNS4xMTUzN0M0LjQ4IDQuNTE1MzcgNC44NCA0LjA0MTM3IDUuMjk2IDMuNjkzMzdDNS43NjQgMy4zNDUzNyA2LjI5OCAzLjE1MzM3IDYuODk4IDMuMTE3MzdWNC44MDkzN0M2LjQwNiA0Ljg1NzM3IDYuMDA0IDUuMDg1MzcgNS42OTIgNS40OTMzN0M1LjM4IDUuOTEzMzcgNS4yMjQgNi40NTkzNyA1LjIyNCA3LjEzMTM3QzUuMjI0IDcuNzU1MzcgNS4zNjIgOC4yNDczNyA1LjYzOCA4LjYwNzM3QzUuOTE0IDguOTY3MzcgNi4yNjIgOS4xNDczNyA2LjY4MiA5LjE0NzM3QzcuMTE0IDkuMTQ3MzcgNy40MzIgOC45NTUzNyA3LjYzNiA4LjU3MTM3QzcuODUyIDguMTg3MzcgOC4wNjIgNy41OTMzNyA4LjI2NiA2Ljc4OTM3QzguNDU4IDYuMDU3MzcgOC42NSA1LjQ1NzM3IDguODQyIDQuOTg5MzdDOS4wNDYgNC41MzMzNyA5LjM0IDQuMTM3MzcgOS43MjQgMy44MDEzN0MxMC4xMiAzLjQ3NzM3IDEwLjYzNiAzLjMxNTM3IDExLjI3MiAzLjMxNTM3QzExLjc3NiAzLjMxNTM3IDEyLjIzOCAzLjQ2NTM3IDEyLjY1OCAzLjc2NTM3QzEzLjA3OCA0LjA2NTM3IDEzLjQwOCA0LjQ5MTM3IDEzLjY0OCA1LjA0MzM3QzEzLjkgNS41OTUzNyAxNC4wMjYgNi4yMjUzNyAxNC4wMjYgNi45MzMzN0MxNC4wMjYgOC4wMjUzNyAxMy43NSA4LjkwNzM3IDEzLjE5OCA5LjU3OTM3QzEyLjY0NiAxMC4yNTE0IDExLjg5IDEwLjYxMTQgMTAuOTMgMTAuNjU5NFY5LjAyMTM3QzExLjQ0NiA4Ljk4NTM3IDExLjg2IDguNzc1MzcgMTIuMTcyIDguMzkxMzdDMTIuNDg0IDguMDE5MzcgMTIuNjQgNy41MTUzNyAxMi42NCA2Ljg3OTM3QzEyLjY0IDYuMjkxMzcgMTIuNTE0IDUuODIzMzcgMTIuMjYyIDUuNDc1MzdDMTIuMDEgNS4xMjczNyAxMS42OCA0Ljk1MzM3IDExLjI3MiA0Ljk1MzM3QzEwLjk0OCA0Ljk1MzM3IDEwLjY3OCA1LjA1NTM3IDEwLjQ2MiA1LjI1OTM3QzEwLjI1OCA1LjQ3NTM3IDEwLjA5IDUuNzM5MzcgOS45NTggNi4wNTEzN0M5LjgzOCA2LjM3NTM3IDkuNyA2LjgxOTM3IDkuNTQ0IDcuMzgzMzdDOS4zNTIgOC4wOTEzNyA5LjE2IDguNjY3MzcgOC45NjggOS4xMTEzN0M4Ljc4OCA5LjU1NTM3IDguNTEyIDkuOTMzMzcgOC4xNCAxMC4yNDU0QzcuNzY4IDEwLjU2OTQgNy4yODIgMTAuNzM3NCA2LjY4MiAxMC43NDk0QzYuMTQyIDEwLjc0OTQgNS42NTYgMTAuNTk5NCA1LjIyNCAxMC4yOTk0QzQuNzkyIDkuOTk5MzcgNC40NSA5LjU3MzM3IDQuMTk4IDkuMDIxMzdDMy45NTggOC40ODEzNyAzLjgzOCA3Ljg1NzM3IDMuODM4IDcuMTQ5MzdaTTguOTUgMTIuNDQ5N0M5Ljk3IDEyLjQ0OTcgMTAuODU4IDEyLjY1MzcgMTEuNjE0IDEzLjA2MTdDMTIuMzgyIDEzLjQ2OTcgMTIuOTc2IDE0LjAzMzcgMTMuMzk2IDE0Ljc1MzdDMTMuODE2IDE1LjQ4NTcgMTQuMDI2IDE2LjMxOTcgMTQuMDI2IDE3LjI1NTdDMTQuMDI2IDE4LjQ2NzcgMTMuNzMyIDE5LjQ2MzcgMTMuMTQ0IDIwLjI0MzdDMTIuNTU2IDIxLjAzNTcgMTEuNzQgMjEuNTU3NyAxMC42OTYgMjEuODA5N1YyMC4wNDU3QzExLjI5NiAxOS44Nzc3IDExLjc3IDE5LjU0NzcgMTIuMTE4IDE5LjA1NTdDMTIuNDY2IDE4LjU3NTcgMTIuNjQgMTcuOTc1NyAxMi42NCAxNy4yNTU3QzEyLjY0IDE2LjMxOTcgMTIuMzE2IDE1LjU2MzcgMTEuNjY4IDE0Ljk4NzdDMTEuMDMyIDE0LjQxMTcgMTAuMTI2IDE0LjEyMzcgOC45NSAxNC4xMjM3QzcuNzYyIDE0LjEyMzcgNi44NDQgMTQuNDExNyA2LjE5NiAxNC45ODc3QzUuNTQ4IDE1LjU2MzcgNS4yMjQgMTYuMzE5NyA1LjIyNCAxNy4yNTU3QzUuMjI0IDE3Ljk3NTcgNS4zOTIgMTguNTc1NyA1LjcyOCAxOS4wNTU3QzYuMDY0IDE5LjUzNTcgNi41NDQgMTkuODY1NyA3LjE2OCAyMC4wNDU3VjIxLjgwOTdDNi4xNiAyMS41NDU3IDUuMzUgMjEuMDE3NyA0LjczOCAyMC4yMjU3QzQuMTM4IDE5LjQzMzcgMy44MzggMTguNDQzNyAzLjgzOCAxNy4yNTU3QzMuODM4IDE2LjMxOTcgNC4wNDggMTUuNDg1NyA0LjQ2OCAxNC43NTM3QzQuODg4IDE0LjAzMzcgNS40ODIgMTMuNDY5NyA2LjI1IDEzLjA2MTdDNy4wMTggMTIuNjUzNyA3LjkxOCAxMi40NDk3IDguOTUgMTIuNDQ5N1pNMTIuMjYyIDI1LjYzMzNDMTIuODI2IDI1LjkyMTMgMTMuMjY0IDI2LjMyOTMgMTMuNTc2IDI2Ljg1NzNDMTMuODg4IDI3LjM5NzMgMTQuMDQ0IDI4LjA1MTMgMTQuMDQ0IDI4LjgxOTNIMTIuMzUyVjI4LjM4NzNDMTIuMzUyIDI2LjU1MTMgMTEuMzU2IDI1LjYzMzMgOS4zNjQgMjUuNjMzM0g0VjIzLjk5NTNIMTMuODY0VjI1LjYzMzNIMTIuMjYyWk0zLjgzOCAzNS4wMTIxQzMuODM4IDM0LjA4ODEgNC4wNDggMzMuMjQ4MSA0LjQ2OCAzMi40OTIxQzQuODg4IDMxLjc0ODEgNS40ODIgMzEuMTYwMSA2LjI1IDMwLjcyODFDNy4wMyAzMC4zMDgxIDcuOTMgMzAuMDk4MSA4Ljk1IDMwLjA5ODFDOS45NTggMzAuMDk4MSAxMC44NDYgMzAuMzE0MSAxMS42MTQgMzAuNzQ2MUMxMi4zOTQgMzEuMTkwMSAxMi45ODggMzEuNzkwMSAxMy4zOTYgMzIuNTQ2MUMxMy44MTYgMzMuMzAyMSAxNC4wMjYgMzQuMTQ4MSAxNC4wMjYgMzUuMDg0MUMxNC4wMjYgMzYuMDIwMSAxMy44MTYgMzYuODY2MSAxMy4zOTYgMzcuNjIyMUMxMi45ODggMzguMzc4MSAxMi40IDM4Ljk3MjEgMTEuNjMyIDM5LjQwNDFDMTAuODY0IDM5Ljg0ODEgOS45NyA0MC4wNzAxIDguOTUgNDAuMDcwMUM3LjkzIDQwLjA3MDEgNy4wMyAzOS44NDIxIDYuMjUgMzkuMzg2MUM1LjQ4MiAzOC45NDIxIDQuODg4IDM4LjMzNjEgNC40NjggMzcuNTY4MUM0LjA0OCAzNi44MDAxIDMuODM4IDM1Ljk0ODEgMy44MzggMzUuMDEyMVpNNS4yNzggMzUuMDEyMUM1LjI3OCAzNS42MDAxIDUuNDE2IDM2LjE1MjEgNS42OTIgMzYuNjY4MUM1Ljk2OCAzNy4xODQxIDYuMzgyIDM3LjU5ODEgNi45MzQgMzcuOTEwMUM3LjQ4NiAzOC4yMzQxIDguMTU4IDM4LjM5NjEgOC45NSAzOC4zOTYxQzkuNzQyIDM4LjM5NjEgMTAuNDE0IDM4LjI0MDEgMTAuOTY2IDM3LjkyODFDMTEuNTE4IDM3LjYxNjEgMTEuOTI2IDM3LjIwODEgMTIuMTkgMzYuNzA0MUMxMi40NjYgMzYuMjAwMSAxMi42MDQgMzUuNjU0MSAxMi42MDQgMzUuMDY2MUMxMi42MDQgMzQuNDY2MSAxMi40NjYgMzMuOTE0MSAxMi4xOSAzMy40MTAxQzExLjkyNiAzMi45MTgxIDExLjUxOCAzMi41MjIxIDEwLjk2NiAzMi4yMjIxQzEwLjQxNCAzMS45MjIxIDkuNzQyIDMxLjc3MjEgOC45NSAzMS43NzIxQzguMTQ2IDMxLjc3MjEgNy40NjggMzEuOTE2MSA2LjkxNiAzMi4yMDQxQzYuMzY0IDMyLjUwNDEgNS45NSAzMi45MDAxIDUuNjc0IDMzLjM5MjFDNS40MSAzMy44ODQxIDUuMjc4IDM0LjQyNDEgNS4yNzggMzUuMDEyMVpNMTcuMzIgNDMuODYxOEg0TDQgNDIuMjIzOEgxNy4zMlY0My44NjE4Wk0xNy4zMiA0OC4yOTE1SDRWNDYuNjUzNUgxNy4zMlY0OC4yOTE1WlwiIGZpbGw9e3Byb3BzLmNvbG9ycy5saWdodENvbG9yfS8+XHJcbiAgICA8L3N2Zz5cclxuXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaXRoVGV4dHNcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gQmVoYW5jZShwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIFxyXG4gICAgICB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICA8Y2lyY2xlIGN4PVwiNTBcIiBjeT1cIjUwXCIgcj1cIjUwXCIgZmlsbD17cHJvcHMuY29sb3J9Lz5cclxuICAgICAgPHBhdGggZD1cIk00Ny4xMzg5IDQ4LjA0NTFDNDkuODk5MyA0Ni43MjU3IDUxLjM0MDMgNDQuNzI5MiA1MS4zNDAzIDQxLjYyMTVDNTEuMzQwMyAzNS40OTMxIDQ2Ljc3NDMgMzQgNDEuNTA1MiAzNEgyN1Y2NC43NjM5SDQxLjkxMzJDNDcuNTAzNSA2NC43NjM5IDUyLjc1NTIgNjIuMDgxNiA1Mi43NTUyIDU1LjgzMTZDNTIuNzU1MiA1MS45Njg4IDUwLjkyMzYgNDkuMTEyOSA0Ny4xMzg5IDQ4LjA0NTFaTTMzLjc2MjIgMzkuMjUxN0g0MC4xMDc2QzQyLjU0NjkgMzkuMjUxNyA0NC43NDMxIDM5LjkzNzUgNDQuNzQzMSA0Mi43Njc0QzQ0Ljc0MzEgNDUuMzgwMiA0My4wMzMgNDYuNDMwNiA0MC42MTk4IDQ2LjQzMDZIMzMuNzYyMlYzOS4yNTE3Wk00MC45OTMxIDU5LjUzODJIMzMuNzYyMlY1MS4wNjZINDEuMTMxOUM0NC4xMDk0IDUxLjA2NiA0NS45OTMxIDUyLjMwNzMgNDUuOTkzMSA1NS40NTgzQzQ1Ljk5MzEgNTguNTY2IDQzLjc0NDggNTkuNTM4MiA0MC45OTMxIDU5LjUzODJaTTcyLjExMjggMzguNjQ0MUg1OS42Mzg5VjM1LjYxNDZINzIuMTEyOFYzOC42NDQxWk03NyA1My45NDc5Qzc3IDQ3LjM1OTQgNzMuMTQ1OCA0MS44NjQ2IDY2LjE1OCA0MS44NjQ2QzU5LjM2OTggNDEuODY0NiA1NC43NjA0IDQ2Ljk2ODggNTQuNzYwNCA1My42NTI4QzU0Ljc2MDQgNjAuNTg4NSA1OS4xMjY3IDY1LjM0NTUgNjYuMTU4IDY1LjM0NTVDNzEuNDc5MiA2NS4zNDU1IDc0LjkyNTMgNjIuOTQ5NyA3Ni41ODMzIDU3Ljg1NDJINzEuMTg0QzcwLjYwMjQgNTkuNzU1MiA2OC4yMDY2IDYwLjc2MjIgNjYuMzQ5IDYwLjc2MjJDNjIuNzYzOSA2MC43NjIyIDYwLjg4MDIgNTguNjYxNSA2MC44ODAyIDU1LjA5MzhINzYuOTQ3OUM3Ni45NzQgNTQuNzI5MiA3NyA1NC4zMzg1IDc3IDUzLjk0NzlaTTYwLjg4ODkgNTEuMjM5NkM2MS4wODg1IDQ4LjMxNDIgNjMuMDMzIDQ2LjQ4MjYgNjUuOTY3IDQ2LjQ4MjZDNjkuMDM5OSA0Ni40ODI2IDcwLjU4NTEgNDguMjg4MiA3MC44NDU1IDUxLjIzOTZINjAuODg4OVpcIiBmaWxsPVwiI0RCREFDN1wiLz5cclxuICAgIDwvc3ZnPlxyXG5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJlaGFuY2VcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gRHJpYmJibGUocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICA8Y2lyY2xlIGN4PVwiNTBcIiBjeT1cIjUwXCIgcj1cIjUwXCIgZmlsbD17cHJvcHMuY29sb3J9IC8+XHJcbiAgICAgIDxwYXRoIGQ9XCJNNTAgMjZDMzYuNzY2MyAyNiAyNiAzNi43NjYzIDI2IDUwQzI2IDYzLjIzMzcgMzYuNzY2MyA3NCA1MCA3NEM2My4yMzM3IDc0IDc0IDYzLjIzMzcgNzQgNTBDNzQgMzYuNzY2MyA2My4yMzM3IDI2IDUwIDI2Wk02NS44NjgxIDM3LjA2NzdDNjguNzIzMiA0MC41NTYgNzAuNDUyMiA0NC45OTkgNzAuNDk3MyA0OS44Mzc1QzY5LjgyMTQgNDkuNjk0NiA2My4wNDM5IDQ4LjMxOTkgNTYuMjIyOSA0OS4xNzc3QzU1LjY2NjIgNDcuODE4OSA1NS4xNDA4IDQ2LjYyMzUgNTQuNDIxMiA0NS4xNTA1QzYyLjAwMDcgNDIuMDU2IDY1LjQzNTkgMzcuNjUyMyA2NS44NjgxIDM3LjA2NzdaTTYzLjU4OTEgMzQuNjk3MUM2My4yMjA0IDM1LjIyMjMgNjAuMTM0NiAzOS4zNjk5IDUyLjg0NTIgNDIuMTAyMkM0OS40ODU5IDM1LjkzMDMgNDUuNzYyNyAzMC44NjAxIDQ1LjE5NjEgMzAuMTAxNEM1MS42OTcgMjguNTM0MyA1OC41NDc3IDMwLjIyNDMgNjMuNTg5MSAzNC42OTcxWk00MS4yODQ2IDMxLjQ3OTRDNDEuODI1MSAzMi4yMjA1IDQ1LjQ4ODMgMzcuMjk3IDQ4Ljg4NSA0My4zMzUxQzM5LjI5NTkgNDUuODgxNSAzMC44NTAxIDQ1Ljg0NDggMjkuOTMzMyA0NS44MzI3QzMxLjI2MjYgMzkuNDcxNSAzNS41NDk1IDM0LjE4NDUgNDEuMjg0NiAzMS40Nzk0Wk0yOS41MDAzIDUwLjAzMTNDMjkuNTAwMyA0OS44MjE2IDI5LjUwNDUgNDkuNjEzIDI5LjUxMDggNDkuNDA0OEMzMC40MDc3IDQ5LjQyMzIgNDAuMzQxNyA0OS41NTEzIDUwLjU3OTEgNDYuNDg3NUM1MS4xNjU5IDQ3LjYzNiA1MS43MjY1IDQ4LjgwMTggNTIuMjQxMSA0OS45NjY0QzQ0LjgyODMgNTIuMDU0MyAzOC4wOTMzIDU4LjA0OTcgMzQuNzcwNCA2My43MzhDMzEuNDk2MiA2MC4xMDM3IDI5LjUwMDMgNTUuMjk2NSAyOS41MDAzIDUwLjAzMTNaTTM3LjQxNzEgNjYuMjAzNUMzOS41NTg1IDYxLjgyNjEgNDUuMzY5OCA1Ni4xNzU1IDUzLjYzNDUgNTMuMzU2MUM1Ni41MTI1IDYwLjgzNTEgNTcuNzAyNyA2Ny4xMDMyIDU4LjAwNzYgNjguOTAxN0M1MS40MTYxIDcxLjcwOTQgNDMuNDkgNzAuOTM5MSAzNy40MTcxIDY2LjIwMzVaTTYxLjQ1MzkgNjcuMDI1QzYxLjI0MzggNjUuNzc4IDYwLjE1MjcgNTkuNzc2OSA1Ny40NzE0IDUyLjQwODlDNjMuODk1MyA1MS4zODA2IDY5LjUzOTIgNTMuMDYzOSA3MC4yNDA1IDUzLjI4NTJDNjkuMzI2OCA1OC45ODkyIDY2LjA1MjggNjMuOTE1MyA2MS40NTM5IDY3LjAyNVpcIiBmaWxsPVwiI0RCREFDN1wiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJpYmJibGVcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gR29vZHJlYWRzKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgPGNpcmNsZSBjeD1cIjUwXCIgY3k9XCI1MFwiIHI9XCI1MFwiIGZpbGw9e3Byb3BzLmNvbG9yfS8+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMzYuMDg4NCA2My4wODczSDM2LjMxODFDMzcuMzYgNjMuMDg3MyAzOC40MTAxIDYzLjA4NzMgMzkuNDUyIDYzLjA5NTVDMzkuNTgzMyA2My4wOTU1IDM5LjcwNjQgNjMuMDYyNyAzOS43NDc0IDYzLjI2NzhDNDAuMzI5OSA2Ni4xMzEgNDIuMjA4NiA2Ny43NDcyIDQ0LjkwNzcgNjguNTEwMkM0Ny4xMTQ2IDY5LjEzMzcgNDkuMzQ2MiA2OS4xNTAxIDUxLjU3NzcgNjguNjU3OUM1NC4zNTA2IDY4LjA1MDggNTYuMTcyIDY2LjMzNjEgNTcuMTU2NCA2My43MDI2QzU3LjgxMjggNjEuOTM4OCA1OC4wMzQzIDYwLjEwOTIgNTguMDU4OSA1OC4yNDY5QzU4LjA2NzEgNTcuNzcxMSA1OC4wODM1IDU0LjM5MSA1OC4wNDI1IDUzLjkxNTJMNTcuOTY4NiA1My44OTA1QzU3LjkwMyA1NC4wMTM2IDU3LjgyOTIgNTQuMTI4NSA1Ny43NjM1IDU0LjI1MTVDNTUuOTUwNCA1Ny43ODc1IDUyLjczNDQgNTkuNzgxMSA0OS4xMTY0IDU5LjkyMDVDNDAuNjY2MiA2MC4yNDg3IDM1LjIxODcgNTUuMjQ0MiAzNS4wMDU0IDQ1LjQ2NDlDMzQuOTY0NCA0My41MjA2IDM1LjE1MzEgNDEuNjE3MiAzNS42ODY0IDM5Ljc0NjdDMzcuMzc2NCAzMy45MTM2IDQxLjgwNjYgMzAuMDQ5NSA0OC4zMTI0IDMwLjAwMDJDNTMuMzQxNSAyOS45Njc0IDU2LjYzOTYgMzMuMTc1MiA1Ny44NDU2IDM1Ljc2NzdDNTcuODg2NiAzNS44NTggNTcuOTUyMiAzNS45NTY0IDU4LjA0MjUgMzUuOTIzNlYzMC44Njk5SDYxLjY3NjlDNjEuNjc2OSA1My44NjU5IDYxLjY4NTEgNTguMTIzOSA2MS42ODUxIDU4LjEyMzlDNjEuNjc2OSA2NC41NjQxIDU5LjQ5NDYgNjkuOTEzMSA1My4yMzQ5IDcxLjQzMDlDNDcuNTMzMSA3Mi44MTc0IDQwLjE5MDQgNzEuODI0NyAzNy4xNTQ5IDY2LjczODFDMzYuNDk4NiA2NS42MzA2IDM2LjE4NjggNjQuNDE2NCAzNi4wODg0IDYzLjA4NzNaTTQ4LjA5MDkgMzIuOTk0N0M0My43ODM4IDMyLjk1MzcgMzkuMTg5NSAzNi4zMzM4IDM4LjY1NjIgNDMuOTcxOEMzOC4zMTk5IDQ4LjgxMjIgMzkuODcwNCA1My45OTcyIDQ0LjUyMjIgNTYuMTYzMUM0Ni43ODY1IDU3LjIyMTQgNTAuNjE3OCA1Ny4zOTM3IDUzLjQwNzIgNTUuNDQ5M0M1Ny4zMTIzIDUyLjcyNTYgNTguNTUxMSA0Ny40OTE0IDU3LjkwMyA0Mi44MTVDNTcuMTA3MiAzNi45ODE5IDUzLjk4MTUgMzIuOTcwMSA0OC4wOTA5IDMyLjk5NDdaXCIgZmlsbD1cIiNEQkRBQzdcIi8+XHJcbiAgICA8L3N2Zz5cclxuXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHb29kcmVhZHNcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gTGlua2VkKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgPGNpcmNsZSBjeD1cIjUwXCIgY3k9XCI1MFwiIHI9XCI1MFwiIGZpbGw9e3Byb3BzLmNvbG9yfSAvPlxyXG4gICAgICA8cGF0aCBkPVwiTTM5LjQwMTIgNjkuOTk5MUgzMC42OTM4VjQxLjk1ODRIMzkuNDAxMlY2OS45OTkxWk0zNS4wNDI4IDM4LjEzMzRDMzIuMjU4NCAzOC4xMzM0IDMwIDM1LjgyNzIgMzAgMzMuMDQyOEMzMCAzMS43MDU0IDMwLjUzMTMgMzAuNDIyNyAzMS40NzcgMjkuNDc3QzMyLjQyMjcgMjguNTMxMyAzMy43MDU0IDI4IDM1LjA0MjggMjhDMzYuMzgwMiAyOCAzNy42NjI5IDI4LjUzMTMgMzguNjA4NiAyOS40NzdDMzkuNTU0MyAzMC40MjI3IDQwLjA4NTYgMzEuNzA1NCA0MC4wODU2IDMzLjA0MjhDNDAuMDg1NiAzNS44MjcyIDM3LjgyNjMgMzguMTMzNCAzNS4wNDI4IDM4LjEzMzRaTTcxLjk5MDYgNjkuOTk5MUg2My4zMDE5VjU2LjM0OTFDNjMuMzAxOSA1My4wOTU5IDYzLjIzNjIgNDguOTI0MSA1OC43NzQ3IDQ4LjkyNDFDNTQuMjQ3NSA0OC45MjQxIDUzLjU1MzggNTIuNDU4NCA1My41NTM4IDU2LjExNDdWNjkuOTk5MUg0NC44NTU2VjQxLjk1ODRINTMuMjA2OVY0NS43ODM0SDUzLjMyODhDNTQuNDkxMiA0My41ODAzIDU3LjMzMDkgNDEuMjU1MyA2MS41Njc1IDQxLjI1NTNDNzAuMzggNDEuMjU1MyA3MiA0Ny4wNTg0IDcyIDU0LjU5NTlWNjkuOTk5MUg3MS45OTA2WlwiIGZpbGw9XCIjREJEQUM3XCIvPlxyXG4gICAgPC9zdmc+XHJcblxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlua2VkXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIFR3aXR0ZXIocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICA8Y2lyY2xlIGN4PVwiNTBcIiBjeT1cIjUwXCIgcj1cIjUwXCIgZmlsbD17cHJvcHMuY29sb3J9Lz5cclxuICAgICAgPHBhdGggZD1cIk02OS4xNjg5IDQxLjUxMzNDNjkuMTk4NyA0MS45MzA4IDY5LjE5ODcgNDIuMzQ4NCA2OS4xOTg3IDQyLjc2NTlDNjkuMTk4NyA1NS41IDU5LjUwNjUgNzAuMTcyNyA0MS43OTE5IDcwLjE3MjdDMzYuMzM0NCA3MC4xNzI3IDMxLjI2NDYgNjguNTkyIDI3IDY1Ljg0ODVDMjcuNzc1NCA2NS45Mzc5IDI4LjUyMDkgNjUuOTY3NyAyOS4zMjYxIDY1Ljk2NzdDMzMuODI5MyA2NS45Njc3IDM3Ljk3NDYgNjQuNDQ2OCA0MS4yODQ5IDYxLjg1MjNDMzcuMDUwMSA2MS43NjI4IDMzLjUwMTMgNTguOTg5MyAzMi4yNzg1IDU1LjE3MkMzMi44NzUgNTUuMjYxNCAzMy40NzE0IDU1LjMyMTEgMzQuMDk3OCA1NS4zMjExQzM0Ljk2MjYgNTUuMzIxMSAzNS44Mjc1IDU1LjIwMTcgMzYuNjMyNyA1NC45OTMxQzMyLjIxODkgNTQuMDk4MyAyOC45MDg2IDUwLjIyMTUgMjguOTA4NiA0NS41Mzk0VjQ1LjQyMDFDMzAuMTkwOSA0Ni4xMzU4IDMxLjY4MjEgNDYuNTgzMiAzMy4yNjI2IDQ2LjY0MjhDMzAuNjY4IDQ0LjkxMyAyOC45NjgyIDQxLjk2MDYgMjguOTY4MiAzOC42MjA1QzI4Ljk2ODIgMzYuODMxMiAyOS40NDUzIDM1LjE5MSAzMC4yODA0IDMzLjc1OTVDMzUuMDIyMiAzOS42MDQ3IDQyLjE0OTggNDMuNDIxOSA1MC4xNDIxIDQzLjgzOTRDNDkuOTkzIDQzLjEyMzcgNDkuOTAzNSA0Mi4zNzgyIDQ5LjkwMzUgNDEuNjMyNkM0OS45MDM1IDM2LjMyNDIgNTQuMTk4IDMyIDU5LjUzNjIgMzJDNjIuMzA5NiAzMiA2NC44MTQ3IDMzLjE2MzEgNjYuNTc0MiAzNS4wNDE5QzY4Ljc1MTIgMzQuNjI0NCA3MC44Mzg4IDMzLjgxOTEgNzIuNjg3OSAzMi43MTU3QzcxLjk3MiAzNC45NTI1IDcwLjQ1MTEgMzYuODMxMyA2OC40NTMxIDM4LjAyNDFDNzAuMzkxNSAzNy44MTU0IDcyLjI3MDQgMzcuMjc4NSA3NCAzNi41MzNDNzIuNjg4IDM4LjQ0MTYgNzEuMDQ3NyA0MC4xNDE0IDY5LjE2ODkgNDEuNTEzM1pcIiBmaWxsPVwiI0RCREFDN1wiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHdpdHRlclxyXG4iLCJpbXBvcnQgUmVhY3QsIHtGcmFnbWVudH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBCZWhhbmNlIGZyb20gJy4vU29jaWFsL0JlaGFuY2UnXHJcbmltcG9ydCBEcmliYmJsZSBmcm9tICcuL1NvY2lhbC9EcmliYmJsZSdcclxuaW1wb3J0IEdvb2RyZWFkcyBmcm9tICcuL1NvY2lhbC9Hb29kcmVhZHMnXHJcbmltcG9ydCBMaW5rZWRpbiBmcm9tICcuL1NvY2lhbC9MaW5rZWRpbidcclxuaW1wb3J0IFR3aXR0ZXIgZnJvbSAnLi9Tb2NpYWwvVHdpdHRlcidcclxuXHJcbmZ1bmN0aW9uIFNvY2lhbHMocHJvcHMpIHtcclxuICBjb25zdCBzb2MgPSAoKSA9PiB7XHJcbiAgICBsZXQgcyA9IHByb3BzLmljb25cclxuICAgIHJldHVybiAoXHJcbiAgICBzID09PSAnYmVoYW5jZScgPyA8QmVoYW5jZSBjb2xvcj17cHJvcHMuY29sb3J9IC8+IDpcclxuICAgIHMgPT09ICdkcmliYmJsZScgPyA8RHJpYmJibGUgY29sb3I9e3Byb3BzLmNvbG9yfSAvPiA6XHJcbiAgICBzID09PSAnZ29vZHJlYWRzJyA/IDxHb29kcmVhZHMgY29sb3I9e3Byb3BzLmNvbG9yfSAvPiA6XHJcbiAgICBzID09PSAnbGlua2VkaW4nID8gPExpbmtlZGluIGNvbG9yPXtwcm9wcy5jb2xvcn0gLz4gOlxyXG4gICAgcyA9PT0gJ3R3aXR0ZXInID8gPFR3aXR0ZXIgY29sb3I9e3Byb3BzLmNvbG9yfSAvPiA6IG51bGwgKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAge3NvYygpfVxyXG4gICAgPC9GcmFnbWVudD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNvY2lhbHNcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtTdGF0ZUNvbnRleHR9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnRleHQvc3RhdGVDb250ZXh0J1xyXG5pbXBvcnQgQnJhbmRMb2dvIGZyb20gJy4uL1N2Z3MvQnJhbmRMb2dvL0JyYW5kTG9nbydcclxuaW1wb3J0IHtpbnRyb0FuaW0sIG9wZW5Ub3BMYXllciwgY2xvc2VUb3BMYXllcn0gZnJvbSAnLi4vLi4vdXRpbHMvcGFnZWFuaW1hdGlvbnMvdG9wbGF5b3Zlci90b3BsYXlvdmVyJ1xyXG5pbXBvcnQge2NoZWNrZm9yc2Vzc2lvbn0gZnJvbSAnLi4vLi4vdXRpbHMvc2Vzc2lvbmRhdGEvc2Vzc2lvblN0b3JhZ2UnXHJcbmltcG9ydCB7bW90aW9ufSBmcm9tICdmcmFtZXItbW90aW9uJ1xyXG5pbXBvcnQge3RvcEFuaW0sIGxvZ29BbmltfSBmcm9tICcuLi8uLi91dGlscy9wYWdlYW5pbWF0aW9ucy9tb3Rpb24vdG9wbGF5ZXInXHJcblxyXG5cclxuY29uc3QgVG9wTGF5b3ZlciA9ICgpID0+e1xyXG4gIGNvbnN0IHtzdGF0ZX0gPSB1c2VDb250ZXh0KFN0YXRlQ29udGV4dClcclxuICAvLyBjaGVja2ZvcnNlc3Npb24oKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1vdGlvbi5kaXYgXHJcbiAgICAgIHZhcmlhbnRzPXt0b3BBbmltfVxyXG4gICAgICBpbml0aWFsPXtzdGF0ZS5pc1RyYW5zaXRpb25pbmd9XHJcbiAgICAgIGFuaW1hdGU9e3N0YXRlLmFuaW1hdGlvbn1cclxuICAgICAgZXhpdD17c3RhdGUuZXhpdE1vZGV9XHJcbiAgICAgIGNsYXNzTmFtZT1cImNvbnRlbnQtY2VudGVyIHRvcC1sYXlvdmVyXCI+XHJcbiAgICAgICAgPG1vdGlvbi5kaXYgXHJcbiAgICAgICAgICB2YXJpYW50cz17bG9nb0FuaW19XHJcbiAgICAgICAgICBpbml0aWFsPXtzdGF0ZS5pc1RyYW5zaXRpb25pbmd9XHJcbiAgICAgICAgICBhbmltYXRlPXtzdGF0ZS5hbmltYXRpb259XHJcbiAgICAgICAgICBleGl0PXtzdGF0ZS5leGl0TW9kZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRvcC1sYXlvdmVyLWxvZ28gY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxCcmFuZExvZ28gY29sb3JNb2RlPXsnI0UzRTFDMyd9Lz5cclxuICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICA8L21vdGlvbi5kaXY+IFxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9wTGF5b3ZlclxyXG4iLCJpbXBvcnQgUmVhY3QsIHtGcmFnbWVudH0gZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBCb29rcyhwcm9wcykge1xyXG4gIGxldCBib29rcyA9IHByb3BzLmJvb2tzLm1hcCgoYm9vaywgaSk9PntcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9vay13cmFwcGVyXCIga2V5PXtpfT5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaG93LWNvbnRhaW5lciBzaG93XCI+XHJcbiAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6Ly8ke2Jvb2subGlua31gfSBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdyZXZlYWwgYm9vay1saW5rJ1xyXG4gICAgICAgICAgICByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInXHJcbiAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nYm9vay1pY29uJyBcclxuICAgICAgICAgICAgICAgIHNyYz17YC9pbWFnZXMvJHtib29rLmltZ30ucG5nYH0gXHJcbiAgICAgICAgICAgICAgICBhbHQ9e2Ake2Jvb2suYWx0fSBpY29uYH0vPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdib29rLW5hbWUnPntib29rLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydW5uZXJcIj48L2Rpdj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L3NwYW4+IFxyXG4gICAgICA8L2Rpdj4gKVxyXG4gICAgfSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAge2Jvb2tzfVxyXG4gICAgPC9GcmFnbWVudD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvb2tzXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIEJvdHRvbURlc2MocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViLXJldmVhbFwiXHJcbiAgICAgIHN0eWxlPXt7Y29sb3I6ICcjNkI2RjcxJywgZm9udFdlaWdodDogNTAwfX0+XHJcbiAgICAgICAge3Byb3BzLmRlc2N9IFxyXG4gICAgICAgIDxhIGhyZWY9e2Ake3Byb3BzLmxpbmt9YH0gXHJcbiAgICAgICAgICAgIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcidcclxuICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nbGlua3MnPiBoZXJlXHJcbiAgICAgICAgPC9hPi5cclxuICAgIDwvc3Bhbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvdHRvbURlc2NcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gVGl0bGUocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZXZlYWwgXCJcclxuICAgICAgc3R5bGU9e3tjb2xvcjogJyM0MTQ3NEEnfX0+XHJcbiAgICAgIHtwcm9wcy50aXRsZX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGl0bGVcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gVG9wRGVzYyhwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWItcmV2ZWFsXCJcclxuICAgICAgc3R5bGU9e3tjb2xvcjogJyM2QjZGNzEnLCBmb250V2VpZ2h0OiA1MDB9fT5cclxuICAgICAge3Byb3BzLmRlc2N9XHJcbiAgICA8L3NwYW4+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BEZXNjXHJcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7UGFnZURhdGF9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvbnRleHQvcGFnZUNvbnRleHQnXHJcbmltcG9ydCBUaXRsZSBmcm9tICcuL0NvbXBvbmVudHMvVGl0bGUnXHJcbmltcG9ydCBUb3BEZXNjIGZyb20gJy4vQ29tcG9uZW50cy9Ub3BEZXNjJ1xyXG5pbXBvcnQgQm9va3MgZnJvbSAnLi9Db21wb25lbnRzL0Jvb2tzJ1xyXG5pbXBvcnQgQm90dG9tRGVzYyBmcm9tICcuL0NvbXBvbmVudHMvQm90dG9tRGVzYydcclxuXHJcbmNsYXNzIEZvbGxvd015UmVhZHMgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgc3RhdGljIGNvbnRleHRUeXBlID0gUGFnZURhdGFcclxuXHJcbiAgcmVuZGVyICgpIHtcclxuXHJcbiAgICBsZXQgZGF0YSA9IHRoaXMuY29udGV4dC5mb2xsb3dNeVJlYWRzXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbi1jb250YWluZXIgbXlyZWFkc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1iYWNrZ3JvdW5kXCJcclxuICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZDogYHVybCgnJHtkYXRhLmJhY2tncm91bmR9JykgcmVwZWF0IGNlbnRlciB0b3BgfX0+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXdyYXBwZXJcIj5cclxuXHJcbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT0nc2VjdGlvbi1hcnRpY2xlLXdyYXBwZXInPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkM1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2hvdy1jb250YWluZXIgc2hvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8VGl0bGUgdGl0bGU9e2RhdGEudGl0bGV9Lz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydW5uZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1Yi1yZXZlYWwtY29udGFpbmVyIGRlc2Mgc2hvd1wiPlxyXG4gICAgICAgICAgICAgICAgPFRvcERlc2MgZGVzYz17ZGF0YS50b3BEZXNjfS8+XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxmaWd1cmUgIGNsYXNzTmFtZT0nc2VjdGlvbi1hcnRpY2xlLXdyYXBwZXIgYm9vay1pY29ucyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudC1jZW50ZXIgYm9va3MtY29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgPEJvb2tzIGJvb2tzPXtkYXRhLmJvb2tzfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuXHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3ViLXJldmVhbC1jb250YWluZXIgZGVzYyBzaG93XCI+XHJcbiAgICAgICAgICAgICAgICA8Qm90dG9tRGVzYyBcclxuICAgICAgICAgICAgICAgICAgbGluaz17ZGF0YS5nb29kcmVhZHNMaW5rfVxyXG4gICAgICAgICAgICAgICAgICBkZXNjPXtkYXRhLmJvdHRvbURlc2N9Lz5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9sbG93TXlSZWFkcyIsImltcG9ydCBSZWFjdCwge0ZyYWdtZW50fSBmcm9tICdyZWFjdCdcclxuLy8gaW1wb3J0ICcuL1NraWxsLmNzcydcclxuXHJcbmZ1bmN0aW9uIFNraWxsKHByb3BzKSB7XHJcblxyXG4gIGxldCBza2lsbHMgPSBwcm9wcy5za2lsbHMuc2tpbGxzLm1hcCgoc2tpbGwsIGkpID0+e1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLXdyYXBwZXJcIiBrZXk9e2l9PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1Yi1yZXZlYWwtY29udGFpbmVyIHNob3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLXJldmVhbFwiPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nc2tpbGwtaWNvbicgXHJcbiAgICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy8ke3NraWxsLmltZ30ucG5nYH0gXHJcbiAgICAgICAgICAgICAgYWx0PXtgc21hbGwgJHtza2lsbC5hbHR9IGxvZ29gfS8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2tpbGwtbmFtZSc+e3NraWxsLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJydW5uZXJcIj48L2Rpdj4gKi99XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9KVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuXHJcbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT0nc2VjdGlvbi1hcnRpY2xlLXdyYXBwZXInPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkM1wiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2hvdy1jb250YWluZXIgc2hvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmVhbCBcIlxyXG4gICAgICAgICAgICBzdHlsZT17e2NvbG9yOiAnI0VCRTlDRCd9fT57cHJvcHMuc2tpbGxzLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1bm5lclwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwic3ViLXJldmVhbC1jb250YWluZXIgZGVzYyBzaG93XCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWItcmV2ZWFsXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjogJyNBQkE5OEYnLCBmb250V2VpZ2h0OiA1MDB9fT57cHJvcHMuc2tpbGxzLmRlc2NyaXB0aW9ufTwvc3Bhbj5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvYXJ0aWNsZT5cclxuXHJcbiAgICAgIDxmaWd1cmUgIGNsYXNzTmFtZT0nc2VjdGlvbi1hcnRpY2xlLXdyYXBwZXIgZmlndXJlLWljb25zJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naWNvbnMtY29udGFpbmVyJz4ge3NraWxsc308L2Rpdj5cclxuICAgICAgPC9maWd1cmU+XHJcblxyXG4gICAgPC9GcmFnbWVudD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNraWxsIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtQYWdlRGF0YX0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29udGV4dC9wYWdlQ29udGV4dCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0J1dHRvbnMvQnV0dG9ucydcclxuaW1wb3J0IFNraWxsIGZyb20gJy4vU2tpbGwvU2tpbGwnXHJcbi8vIGltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbi8vIGltcG9ydCAnLi9Ta2lsbHMuY3NzJ1xyXG5cclxuY2xhc3MgU2tpbGxzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgY29udGV4dFR5cGUgPSBQYWdlRGF0YVxyXG5cclxuICByZW5kZXIgKCkge1xyXG5cclxuICAgIGxldCBkYXRhID0gdGhpcy5jb250ZXh0LnNraWxsc1xyXG4gICAgXHJcbiAgICBsZXQgY3JlYXRlRGVzaWduID0gPFNraWxsIHNraWxscz17ZGF0YS5jcmVhdGl2ZURlc2lnbn0gLz5cclxuICAgIGxldCBmcm9udGVuZCA9IDxTa2lsbCBza2lsbHM9e2RhdGEuZnJvbnRlbmR9IC8+XHJcbiAgICBsZXQgYmFja2VuZCA9IDxTa2lsbCBza2lsbHM9e2RhdGEuYmFja2VuZH0gLz5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRhaW5lciBza2lsbHNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tYmFja2dyb3VuZFwiXHJcbiAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmQ6IFxyXG4gICAgICAgIGB1cmwoJyR7ZGF0YS5iYWNrZ3JvdW5kfScpIHJlcGVhdCBjZW50ZXIgdG9wYH19PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIHtjcmVhdGVEZXNpZ259XHJcbiAgICAgICAgICAgIHtmcm9udGVuZH1cclxuICAgICAgICAgICAge2JhY2tlbmR9XHJcbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT0nc2VjdGlvbi1hcnRpY2xlLXdyYXBwZXInPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLXJldmVhbC1jb250YWluZXIgZGVzYyBzaG93XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWItcmV2ZWFsIGJ0blwiIHN0eWxlPXt7Y29sb3I6ICcjQUJBOThGJ319PlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9e2RhdGEubWVzc2FnZXRleHR9IFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e2RhdGEudHlwZX1cclxuICAgICAgICAgICAgICAgICAgICB3aXRoU3ZnPXtkYXRhLndpdGhTdmd9XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuVHlwZT17ZGF0YS5idG5UeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms9e2RhdGEubGlua31cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcnM9e2RhdGEuY29sb3J9IC8+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuLy8gY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHBhZ2VEYXRhOiBzdGF0ZS5zdGF0ZS5wYWdlRGF0YVxyXG4vLyAgIH1cclxuLy8gfVxyXG4vLyBleHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoU2tpbGxzKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2tpbGxzXHJcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBRckNvZGUgZnJvbSAnLi9jb21wb25lbnRzL1FyQ29kZSdcclxuaW1wb3J0IERlc2MgZnJvbSAnLi9jb21wb25lbnRzL0NyZWRlbnRpYWwnXHJcbmltcG9ydCB7UGFnZURhdGF9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnRleHQvcGFnZUNvbnRleHQnXHJcblxyXG5jbGFzcyBDcmVkZW50aWFsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgY29udGV4dFR5cGUgPSBQYWdlRGF0YVxyXG5cclxuICByZW5kZXIoKXtcclxuICAgIGxldCBkYXRhID0gdGhpcy5jb250ZXh0XHJcblxyXG4gICAgbGV0IGNyZWRlbnRpYWxzID0gZGF0YS5jb3Vyc2VzLm1hcCgoY291cnNlLCBpKT0+e1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImNyZWRlbnRpYWwtY29udFwiIGtleT17aX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWRlbnRpYWwtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8UXJDb2RlIGNlcnRMaW5rPXtjb3Vyc2UuY2VydExpbmt9IHFyQ29kZT17Y291cnNlLnFyQ29kZX0vPlxyXG4gICAgICAgICAgICA8RGVzYyBcclxuICAgICAgICAgICAgICBuYW1lPXtjb3Vyc2UubmFtZX1cclxuICAgICAgICAgICAgICBzY2hvb2w9e2NvdXJzZS5zY2hvb2x9XHJcbiAgICAgICAgICAgICAgdGFrZW49e2NvdXJzZS50YWtlbn1cclxuICAgICAgICAgICAgICBkYXRlPXtjb3Vyc2UuZGF0ZX0vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICApXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JlZGVudGlhbC1jb250YWluZXJcIj5cclxuICAgICAgICB7Y3JlZGVudGlhbHN9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlZGVudGlhbCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIENyZWRlbnRpYWwocHJvcHMpIHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jZW50ZXIgY3JlZGVudGlhbC1kZXNjXCI+XHJcbiAgICAgIDxoNCBjbGFzc05hbWU9XCJwLXdyYXBwZXIgaGVhZDRcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaG93LWNvbnRhaW5lciBwLWNvbnRhaW5lciBzaG93XCJcclxuICAgICAgICAgIHN0eWxlPXt7Y29sb3I6ICcjMkM2NjY0J319PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZlYWwgcC1yZXZlYWxcIlxyXG4gICAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0OiA1MDB9fT57cHJvcHMubmFtZX08L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVubmVyIHAtcnVubmVyXCI+PC9kaXY+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2g0PlxyXG4gICAgICB7LyogPGg0IGNsYXNzTmFtZT1cInAtd3JhcHBlciBoZWFkNFwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNob3ctY29udGFpbmVyIHAtY29udGFpbmVyIHNob3dcIlxyXG4gICAgICAgICAgc3R5bGU9e3tjb2xvcjogJyMwQzdDQjAnfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmVhbCBwLXJldmVhbFwiXHJcbiAgICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6IDUwMH19Pntwcm9wcy5zY2hvb2x9PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1bm5lciBwLXJ1bm5lclwiPjwvZGl2PlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9oND4gKi99XHJcbiAgICAgIDxoNCBjbGFzc05hbWU9XCJzdWItcmV2ZWFsLWNvbnRhaW5lciBoZWFkNCBzaG93XCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmV2ZWFsXCJcclxuICAgICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDogNTAwLGNvbG9yOiAnIzBDN0NCMCd9fT57cHJvcHMuc2Nob29sfTwvc3Bhbj5cclxuICAgICAgPC9oND5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViLXJldmVhbC1jb250YWluZXIgcC1kZXNjIGRlc2Mgc2hvdyB0aHJvdWdoXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViLXJldmVhbCBwLWRlc2MtY29udGVudFwiPnRocm91Z2g8L3NwYW4+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgey8qIDxoNCBjbGFzc05hbWU9XCJwLXdyYXBwZXIgaGVhZDQgY2RcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaG93LWNvbnRhaW5lciBwLWNvbnRhaW5lciBzaG93XCJcclxuICAgICAgICAgIHN0eWxlPXt7Y29sb3I6ICcjMEM3Q0IwJ319PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZlYWwgcC1yZXZlYWxcIlxyXG4gICAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0OiA1MDB9fT57cHJvcHMudGFrZW59PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1bm5lciBwLXJ1bm5lclwiPjwvZGl2PlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9oND4gKi99XHJcbiAgICAgIDxoNCBjbGFzc05hbWU9XCJzdWItcmV2ZWFsLWNvbnRhaW5lciBoZWFkNCBzaG93XCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmV2ZWFsXCJcclxuICAgICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDogNTAwLGNvbG9yOiAnIzBDN0NCMCd9fT57cHJvcHMudGFrZW59PC9zcGFuPlxyXG4gICAgICA8L2g0PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWItcmV2ZWFsLWNvbnRhaW5lciBwLWRlc2MgZGVzYyBzaG93IGRhdGVcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWItcmV2ZWFsIHAtZGVzYy1jb250ZW50XCI+e3Byb3BzLmRhdGV9PC9zcGFuPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyZWRlbnRpYWxcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gUXJDb2RlKHByb3BzKSB7XHJcblxyXG4gIC8vIGFpbWFuIHBsZWFzZSBwcm92aWRlIGEgbGluayBmb3IgdGhlIGNlcnRpZmljYXRlXHJcbiAgLy8gYW5kIGFsdGVybmF0aXZlIG5hbWVcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jZW50ZXIgY3JlZGVudGlhbC1xclwiPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWItcmV2ZWFsLWNvbnRhaW5lciBzaG93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZlYWwgXCI+XHJcbiAgICAgICAgICA8YSBocmVmPXtwcm9wcy5jZXJ0TGlua30+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtgL2ltYWdlcy8ke3Byb3BzLnFyQ29kZX0ucG5nYH0gYWx0PVwiXCIvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPHNwYW4+c2NhbiBvciBjbGljayB0byBzZWUgY2VydGlmaWNhdGU8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicnVubmVyXCI+PC9kaXY+ICovfVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFFyQ29kZVxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBUb3BMYXlvdmVyIGZyb20gJy4uL2NvbXBvbmVudHMvVG9wTGF5b3Zlci9Ub3BMYXlvdmVyJ1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhcidcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51Q29udGFpbmVyL01lbnVDb250YWluZXInXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyJ1xyXG5pbXBvcnQgU2VjdGlvbkJsb2NrcyBmcm9tICcuLi9jb21wb25lbnRzL1NlY3Rpb25CbG9ja3MvU2VjdGlvbkJsb2NrcydcclxuaW1wb3J0IFNraWxscyBmcm9tICcuLi9jb250YWluZXJzL0Fib3V0L1NraWxscy9Ta2lsbHMnXHJcbmltcG9ydCBNeVJlYWRzIGZyb20gJy4uL2NvbnRhaW5lcnMvQWJvdXQvTXlSZWFkcy9NeVJlYWRzJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlcidcclxuaW1wb3J0IHtyZXNpemV9IGZyb20gJy4uL3V0aWxzL2NvbW1vbi9jb21tb24nXHJcbmltcG9ydCB7c2Nyb2xsQW5pbWF0aW9uLCBkZWJvdW5jZX0gZnJvbSAnLi4vdXRpbHMvcGFnZWFuaW1hdGlvbnMvc2Nyb2xsYW5pbWF0aW9uL3Njcm9sbGFuaW1hdGlvbidcclxuaW1wb3J0IHtQYWdlRGF0YUNvbnRleHR9IGZyb20gJy4uL3V0aWxzL2NvbnRleHQvcGFnZUNvbnRleHQnXHJcbmltcG9ydCB7U3RhdGVDb250ZXh0fSBmcm9tICcuLi91dGlscy9jb250ZXh0L3N0YXRlQ29udGV4dCdcclxuaW1wb3J0IHt2YXJpYW50c30gZnJvbSAnLi4vdXRpbHMvcGFnZWFuaW1hdGlvbnMvbW90aW9uL21haW52YXJpYW50J1xyXG5pbXBvcnQge21vdGlvbn0gZnJvbSAnZnJhbWVyLW1vdGlvbidcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gQWJvdXQgKCkge1xyXG4gIGNvbnN0IHtzdGF0ZX0gPSB1c2VDb250ZXh0KFN0YXRlQ29udGV4dClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+e1xyXG4gICAgLy8gcmVzaXplIGV2ZW50IHRvIHdoZW4gdGhlIGJyb3dzZXIgaXMgcmVzaXplZFxyXG4gICAgcmVzaXplKClcclxuICAgIC8vIHNjcm9sbCBldmVudFxyXG4gICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICBzY3JvbGxBbmltYXRpb24oKVxyXG4gICAgfSwgMzAwKVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlKHNjcm9sbEFuaW1hdGlvbiwgNDApKVxyXG4gICAgLy8gcmV0dXJuICgpID0+IHtcclxuICAgIC8vICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbClcclxuICAgIC8vIH1cclxuICB9KVxyXG4gIFxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8bW90aW9uLmRpdiBcclxuICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxyXG4gICAgICBpbml0aWFsPSdpbml0aWFsJ1xyXG4gICAgICBhbmltYXRlPSdlbnRlcidcclxuICAgICAgZXhpdD17c3RhdGUuZXhpdE1vZGV9XHJcbiAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+QWltYW4gQWRsYXdhbiB8IEFib3V0IE1lPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9pbWFnZXMvYnJhbmQtaWNvbi1sb2dvLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8VG9wTGF5b3Zlci8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPFBhZ2VEYXRhQ29udGV4dCBwYWdlc2V0cz17J2Fib3V0J30+XHJcbiAgICAgICAgICAgIDxOYXZiYXIgLz4gICAgICAgXHJcbiAgICAgICAgICAgIDxNZW51IC8+XHJcbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT0nbWFpbic+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyLz5cclxuICAgICAgICAgICAgICAgIDxTZWN0aW9uQmxvY2tzIHRpdGxlPSdza2lsbHMnIC8+XHJcbiAgICAgICAgICAgICAgICA8U2tpbGxzIC8+XHJcbiAgICAgICAgICAgICAgICA8TXlSZWFkcyAvPlxyXG4gICAgICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICA8L1BhZ2VEYXRhQ29udGV4dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21vdGlvbi5kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dFxyXG4iLCJpbXBvcnQge3Jlc2l6ZUVsZW1lbnRzIH0gZnJvbSAnLi9lbGVtZW50U29ydGVyJ1xyXG5cclxuLy8gZnVuY3Rpb24gdG8gcnVuIGZvciByZXNpemluZyBvciB3aGVuIHBhZ2UgbG9hZHNcclxuZXhwb3J0IGZ1bmN0aW9uIHJlc2l6ZSgpe1xyXG4gIHJlc2l6ZUVsKClcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplRWwpXHJcbiAgcmV0dXJuICgpPT4geyBcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVFbClcclxuICB9XHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIHRoYXQgd2lsbCByZXNpemUgZWxlbWVudHNcclxuZnVuY3Rpb24gcmVzaXplRWwgKCkge1xyXG4gIGNvbnN0IGVsID0gcmVzaXplRWxlbWVudHMoKVxyXG4gIGxldCB3ID0gd2luZG93LmlubmVyV2lkdGhcclxuICBpZih3LTIwIDw9IDE2MDApe1xyXG4gICAgZWwubWFpbl9jb250YWluZXIuc3R5bGUud2lkdGggPSAnMTAwJSdcclxuICAgIGVsLm5hdmJhcl9jb250YWluZXIuc3R5bGUud2lkdGggPSAnMTAwJSdcclxuICAgIGVsLm1lbnVfY29udGFpbmVyLnN0eWxlLndpZHRoID0gJzEwMCUnXHJcbiAgICBlbC5tZW51X3dyYXBwZXIuc3R5bGUud2lkdGggPSAnMTAwJSdcclxuICAgIGVsLm1lbnVfcnVubmVyLnN0eWxlLndpZHRoID0gJzEwMCUnXHJcbiAgICBlbC50b3BfY29udGFpbmVyLnN0eWxlLndpZHRoID0gJzEwMCUnXHJcbiAgfSBlbHNlIHtcclxuICAgIGVsLm1haW5fY29udGFpbmVyLnN0eWxlLndpZHRoID0gYDE2MDBweGBcclxuICAgIGVsLm5hdmJhcl9jb250YWluZXIuc3R5bGUud2lkdGggPSBgMTYwMHB4YFxyXG4gICAgZWwubWVudV9jb250YWluZXIuc3R5bGUud2lkdGggPSAnMTYwMHB4J1xyXG4gICAgZWwubWVudV93cmFwcGVyLnN0eWxlLndpZHRoID0gJzE2MDBweCdcclxuICAgIGVsLm1lbnVfcnVubmVyLnN0eWxlLndpZHRoID0gJzE2MDBweCdcclxuICAgIGVsLnRvcF9jb250YWluZXIuc3R5bGUud2lkdGggPSAnMTYwMHB4J1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmxldCByb3V0ZXMgPSBbXHJcbiAgJ2hvbWUnLCAnYWJvdXQnLCAncHJvamVjdHMnLCAnY29udGFjdHMnLCAncHJpdmFjeScsICdjcmVkZW50aWFscycsICdwcm9qZWN0cy9wcm9qZWN0cy9tdXNpYy1hcHAnLCAncHJvamVjdHMvcmVzZXJ2YXRpb24tYXBwJywgJ3Byb2plY3RzL2VsZWN0cmljLWJpbGwnLCAncHJvamVjdHMvbXVzaWMtcGxheWVyMycsICdwcm9qZWN0cy9tdXNpYy1wbGF5ZXI0JywgJ3Byb2plY3RzL211c2ljLXBsYXllcjUnXHJcbl1cclxuXHJcbi8vIHRoaXMgZnVuY3Rpb24gd2lsbCBnZW5lcmF0ZSBhIHJldHVybiB0aGUgY3VycmVudCByb3V0ZVxyXG4vLyBmb3IgdGhlIHN0YXRlXHJcbmV4cG9ydCBjb25zdCBjaGVja1JvdXRlID0gKHJvdXRlKSA9PiB7XHJcbiAgbGV0IHIgPSByb3V0ZS5zbGljZSgxLCA1MClcclxuICBsZXQgdXJsID0gciA9PT0gJycgPyAnaG9tZScgOiByXHJcbiAgbGV0IGI7XHJcbiAgbGV0IGEgPSByb3V0ZXMuZmlsdGVyKHJvdXRlID0+IHtcclxuICAgIHJldHVybiByb3V0ZSA9PT0gdXJsXHJcbiAgfSlcclxuXHJcbiAgaWYgKGFbMF0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgYiA9ICdub3RGb3VuZCdcclxuICB9IGVsc2Uge1xyXG4gICAgYiA9IGFbMF1cclxuICB9XHJcblxyXG4gIHJldHVybiBiXHJcbn1cclxuXHJcbiIsIlxyXG4vLyBmdW5jdGlvbiB0byBxdWVyeWVsZW1lbnRzXHJcbmZ1bmN0aW9uIHFFbChlbCwgYWxsKXtcclxuICBpZihhbGwpe1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2VsfWApXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtlbH1gKVxyXG4gIH1cclxufVxyXG5cclxuLy8gZWxlbWVudHMgdGhhdCBuZWVkcyB0byBiZSByZXNpemVkXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNpemVFbGVtZW50cygpIHtcclxuICByZXR1cm4ge1xyXG4gICAgbWFpbl9jb250YWluZXI6IHFFbCgnbWFpbi1jb250YWluZXInLCAwKSxcclxuICAgIG5hdmJhcl9jb250YWluZXI6IHFFbCgnbmF2YmFyLWNvbnRhaW5lcicsIDApLFxyXG4gICAgbWVudV9jb250YWluZXI6IHFFbCgnbWVudS1jb250YWluZXInLCAwKSxcclxuICAgIG1lbnVfd3JhcHBlcjogcUVsKCdtZW51LXdyYXBwZXInLCAwKSxcclxuICAgIG1lbnVfcnVubmVyOiBxRWwoJ21lbnUtcnVubmVyJywgMCksXHJcbiAgICB0b3BfY29udGFpbmVyOiBxRWwoJ3RvcC1jb250YWluZXInLCAwKVxyXG4gIH1cclxufVxyXG5cclxuLy8gZWxlbWVudHMgZm9yIHRoZSBtZW51IGl0ZW1zXHJcbmV4cG9ydCBmdW5jdGlvbiBuYXZIb3ZlckVsZW1lbnRzKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBtaWRkbGU6IHFFbCgnbWlkZGxlLXNwYW4nLCAwKSxcclxuICAgIGNsb3NlX3BhdGhzOiBxRWwoJ21lbnUtY2xvc2UgcGF0aCcsIDApLFxyXG4gICAgYmFjazogcUVsKCdiYWNrLXNwYW4nLCAwKSxcclxuICAgIGZyb250OiBxRWwoJ2Zyb250LXRleHQnLCAwKVxyXG4gIH1cclxufVxyXG5cclxuLy8gbG9nbyBlbGVtZW50IGFuaW1hdGlvblxyXG5leHBvcnQgZnVuY3Rpb24gbG9nb0VsZW1lbnRzKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0OiBxRWwoJ25hdmJhci1sb2dvIC50b3AtbGluZScsIDApLFxyXG4gICAgcjogcUVsKCduYXZiYXItbG9nbyAucmlnaHQtbGluZScsIDApLFxyXG4gICAgYjogcUVsKCduYXZiYXItbG9nbyAuYm90dG9tLWxpbmUnLCAwKSxcclxuICAgIGw6IHFFbCgnbmF2YmFyLWxvZ28gLmxlZnQtbGluZScsIDApLFxyXG4gIH1cclxufVxyXG5cclxuLy8gbWVudSBjbGljayBhbmltYXRpb24gZWxlbWVudHNcclxuZXhwb3J0IGZ1bmN0aW9uIG1lbnVDbGlja0VsZW1lbnRzICgpIHtcclxuICByZXR1cm4ge1xyXG4gICAgY29udGFpbmVyOiBxRWwoJ2NvbnRhaW5lcicsIDApLFxyXG4gICAgbWVudV9ydW5uZXJzOiBxRWwoJ21lbnUtcnVubmVycycsIDEpLFxyXG4gICAgc3F1YXJlX2ltZzogcUVsKCdzcXVhcmUtaW1nJywgMCksXHJcbiAgICByaWdodF9pY29uczogcUVsKCdyaWdodC1pY29ucycsIDApLFxyXG4gICAgbWVudV9saXN0X2NvbnRhaW5lcjogcUVsKCdtZW51LWxpc3QtY29udGFpbmVyJywgMSksXHJcbiAgICBjb3B5cmlnaHRfcnVubmVyOiBxRWwoJ2NvcHlyaWdodC1ydW5uZXInLCAwKSxcclxuICAgIHNvY2lhbF9uYXZpY29uczogcUVsKCdzb2NpYWwtbmF2aWNvbnMnLCAwKSxcclxuICAgIG1lbnVfY29udGFpbmVyOiBxRWwoJ21lbnUtY29udGFpbmVyJywgMCksXHJcbiAgICB0ZXh0X2FjdGl2ZTogcUVsKCdhY3RpdmUgLm1lbnUtbGlzdC10ZXh0JywgMCksXHJcbiAgICBiYWNrZXJfYWN0aXZlOiBxRWwoJ2FjdGl2ZSAubWVudS1saXN0LWJhY2tlcicsIDApLFxyXG4gICAgc2VjdGlvbl9ibG9jazogcUVsKCdzZWN0aW9uLWJsb2NrLWNvbnRhaW5lcicsIDApLFxyXG4gICAgc2hvcnRfcHJvamVjdDogcUVsKCdzaG9ydC1wcm9qZWN0LWNvbnRhaW5lcicsIDApXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvcExheW92ZXJFbGVtZW50cygpIHtcclxuICByZXR1cm4ge1xyXG4gICAgc3ZnOiBxRWwoJ3RvcC1sYXlvdmVyLWxvZ28gc3ZnJywgMCksXHJcbiAgICB0ZXh0OiBxRWwoJ3RvcC1sb2FkaW5nJywgMCksXHJcbiAgICBydW5uZXI6IHFFbCgndG9wLXJ1bm5lcicsIDApLFxyXG4gICAgdG9wOiBxRWwoJ3RvcC1sYXlvdmVyJywgMCksXHJcbiAgICBjb250YWluZXI6IHFFbCgnY29udGFpbmVyJywgMClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0UmVzaXplRWwoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGltZ19kZXNjOiBxRWwoJ3Byb2plY3QtaW1nLWRlc2MnLCAxKSxcclxuICAgIHByb2plY3RfaW1nOiBxRWwoJ3Byb2plY3QtaW1hZ2UnLCAxKSxcclxuICAgIGltZ19iYWNrZXI6IHFFbCgnaW1nLWJhY2tlcicsIDEpLFxyXG4gICAgcHJvamVjdF90ZXh0X2Rlc2M6IHFFbCgncHJvamVjdC10ZXh0LWRlc2MnLCAxKSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBob3ZlclByb2plY3RFbCAoZWwpIHtcclxuICBsZXQgcGFyZW50ID0gZWwuY2xvc2VzdCgnLnByb2plY3RzLXdyYXBwZXInKVxyXG4gIHJldHVybiB7XHJcbiAgICBpbWcgOiBwYXJlbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtaW1nJyksXHJcbiAgICBpbWdfYmFja2VyIDogcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWctYmFja2VyJyksXHJcbiAgICB0aXRsZSA6IHBhcmVudC5xdWVyeVNlbGVjdG9yKCcucC1yZXZlYWwnKSxcclxuICAgIGRlc2MgOiBwYXJlbnQucXVlcnlTZWxlY3RvcignLnAtZGVzYy1jb250ZW50JyksXHJcbiAgICBidXR0b24gOiBwYXJlbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi13cmFwcGVyJylcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtmaW5kRGF0YX0gZnJvbSAnLi4vZGF0YS9pbmRleCdcclxuXHJcbi8vIGV4cG9ydCBQYWdlRGF0YSBmb3IgY29udGV4dGFwaSBhY2Nlc3NcclxuZXhwb3J0IGNvbnN0IFBhZ2VEYXRhID0gY3JlYXRlQ29udGV4dCgpXHJcblxyXG4vLyB0aGUgcHJvcHMgaXMgcmVjZWl2ZWQgYW5kIGhhcyBhIHZhbHVlIHRoYXQgcmVmZXJlbmNlc1xyXG4vLyB0aGUgcGFnZSBkYXRhIHNldHMgYW5kIHJldHVybnMgZGF0YSBmb3IgdGhhdCBwYWdlXHJcbmV4cG9ydCBmdW5jdGlvbiBQYWdlRGF0YUNvbnRleHQgKHByb3BzKSB7XHJcbiAgbGV0IGRhdGEgPSBzb3J0UHJvcHMocHJvcHMpXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdlRGF0YS5Qcm92aWRlciB2YWx1ZT17ZGF0YX0+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvUGFnZURhdGEuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG4vLyB0aGlzIGZ1bmN0aW9uIHdpbGwgc29ydCB0aGUgZGF0YSBwcm92aWRlZCBpbiB0aGUgcHJvcHNcclxuLy8gaXQgd2lsbCByZXR1cm4gYSBzZXQgb2YgZGF0YSBmcm9tIHRoZSBkYXRhIHBhZ2VcclxuZnVuY3Rpb24gc29ydFByb3BzIChwcm9wcykge1xyXG4gIGlmKHByb3BzLnBhZ2VzZXRzKSB7XHJcbiAgICByZXR1cm4gZmluZERhdGEocHJvcHMucGFnZXNldHMpXHJcbiAgfSBlbHNlIGlmKHByb3BzLnByb2plY3RzZXRzKXtcclxuICAgIGxldCBkYXRhID0gZmluZERhdGEoJ3Byb2plY3RsaXN0cycpLmxpc3RvZnByb2plY3RzLmZpbHRlcihwcm9qID0+IHtcclxuICAgICAgcmV0dXJuIHByb2oudGl0bGUgPT09IHByb3BzLnByb2plY3RzZXRzXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHsuLi5kYXRhWzBdLCAuLi5maW5kRGF0YSgnc29jaWFscycpfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIGNyZWF0ZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge3NldFRyYW5zaXRpb25TdGF0ZX0gZnJvbSAnLi4vcGFnZWFuaW1hdGlvbnMvbW90aW9uL2NvbW1vbidcclxuXHJcbi8vIGdsb2JhbCBzdGF0ZSBjb250ZXh0IHJvdXRlXHJcbmV4cG9ydCBjb25zdCBTdGF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcclxuXHJcbi8vIHN0YXRlIHByb3ZkZXJcclxuZXhwb3J0IGNsYXNzIFN0YXRlUHJvdmlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIFxyXG4gIC8vIGluaXRpYWxcclxuICBzdGF0ZSA9IHtcclxuICAgIGFjdGl2ZVJvdXRlOiAnaG9tZScsXHJcbiAgICBtZW51SXNPcGVuOiBmYWxzZSxcclxuICAgIG1lbnVJc0FuaW1hdGluZzogZmFsc2UsXHJcbiAgICBpc1RyYW5zaXRpb25pbmc6ICdpbml0aWFsJyxcclxuICAgIGV4aXRNb2RlOiBmYWxzZSxcclxuICAgIGFuaW1hdGlvbjogJ2luaXRpYWwnLFxyXG4gIH1cclxuXHJcbiAgLy8gZnVuY3Rpb24gdGhhdCB3aWxsIHNldCB1cGRhdGUgdGhlIHN0YXRlXHJcbiAgc2V0QXBwbGljYXRpb25TdGF0ZSA9IChuZXdTdGF0ZSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgIC4uLm5ld1N0YXRlXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy8gdGhpcyBmdW5jdGlvbiB3aWxsIHVwZGF0ZSB0aGUgc3RhdGUgYmFzZWQgZnJvbSBcclxuICAvLyB3aGVyZSB0aGUgYnV0dG9uIGlzIGNsaWNrZWRcclxuICBzZXRUcmFuc2l0aW9uU3RhdGUgPSAoZnJvbSkgPT4ge1xyXG4gICAgaWYoZnJvbSA9PT0gJ3RvcCcpe1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBtZW51SXNPcGVuOiAhdGhpcy5zdGF0ZS5tZW51SXNPcGVuLFxyXG4gICAgICAgIGV4aXRNb2RlOiBtb2RlKGZyb20pLFxyXG4gICAgICAgIGlzVHJhbnNpdGlvbmluZzogc2V0VHJhbnNpdGlvblN0YXRlKHRoaXMuc3RhdGUuaXNUcmFuc2l0aW9uaW5nKSxcclxuICAgICAgICBhbmltYXRpb246IGFuaW1tb2RlKGZyb20pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBpZihmcm9tID09PSAnYm90dG9tJykge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBleGl0TW9kZTogbW9kZShmcm9tKSxcclxuICAgICAgICBpc1RyYW5zaXRpb25pbmc6IHNldFRyYW5zaXRpb25TdGF0ZSh0aGlzLnN0YXRlLmlzVHJhbnNpdGlvbmluZyksXHJcbiAgICAgICAgYW5pbWF0aW9uOiBhbmltbW9kZShmcm9tKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gZnVuY3Rpb24gdG8gZ2V0IHRoZSBjdXJyZW50IHJvdXRlXHJcbiAgc2V0QWN0aXZlUm91dGUgPSAocm91dGUpID0+IHtcclxuICAgIC8vIGlmIHRoZSBjdXJyZW50IHJvdXRlIGRvZXMgbm90IG1hdGNoIHRvIHRoZSBvbGQgcm91dGVcclxuICAgIC8vIHRoZW4gdXBkYXRlIHRoZSBhY3RpdmUgcm91dGUgc3RhdGVcclxuICAgIGlmKHJvdXRlICE9IHRoaXMuc3RhdGUuYWN0aXZlUm91dGUpe1xyXG4gICAgICB0aGlzLnNldEFwcGxpY2F0aW9uU3RhdGUoeyBhY3RpdmVSb3V0ZTogcm91dGUgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpe1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgPFN0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xyXG4gICAgICAgIHN0YXRlOiB0aGlzLnN0YXRlLFxyXG4gICAgICAgIHNldFN0YXRlOiB0aGlzLnNldEFwcGxpY2F0aW9uU3RhdGUsXHJcbiAgICAgICAgc2V0QWN0aXZlUm91dGU6IHRoaXMuc2V0QWN0aXZlUm91dGUsXHJcbiAgICAgICAgc2V0VHJhbnNpdGlvblN0YXRlOiB0aGlzLnNldFRyYW5zaXRpb25TdGF0ZVxyXG4gICAgICB9fT5cclxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgPC9TdGF0ZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG4vLyB0aGlzIGZ1bmN0aW9uIGNoZWNrcyBpZiB0aGUgbWVudSBidXR0b24gaXMgY2xpY2tcclxuLy8gYW5kIHdpbGwgcmV0dXJuIGEgc3RyaW5nIHRoYXQgd2lsbCBhbmltYXRlIGZyb20gdGhlIHRvcFxyXG5jb25zdCBtb2RlID0gKGZyb20pID0+IHtcclxuICByZXR1cm4gZnJvbSA9PT0gJ3RvcCcgPyAndG9wRXhpdCcgOiAnYm90dG9tRXhpdCdcclxufVxyXG5cclxuLy8gdGhpcyBmdW5jdGlvbiBjaGVja3MgaWYgYW55IG9mIHRoZSBidXR0b24gbGlua3MgXHJcbi8vIGluIHRoZSBib3R0b20gaXMgY2xpY2sgdGhhdCB3aWxsIHJ1biB0aGUgdHJhbnNpdGlvblxyXG5jb25zdCBhbmltbW9kZSA9IChmcm9tKSA9PiB7XHJcbiAgcmV0dXJuIGZyb20gPT09ICdib3R0b20nID8gJ3RvcEFuaW1hdGlvbicgOiAnYm90dG9tQW5pbWF0aW9uJ1xyXG59IiwiaW1wb3J0IGhvbWUgZnJvbSAnLi9wYWdlZGF0YS9ob21lLmpzb24nXHJcbmltcG9ydCBhYm91dCBmcm9tICcuL3BhZ2VkYXRhL2Fib3V0Lmpzb24nXHJcbmltcG9ydCBwcm9qZWN0cyBmcm9tICcuL3BhZ2VkYXRhL3Byb2plY3RzLmpzb24nXHJcbmltcG9ydCBjb250YWN0cyBmcm9tICcuL3BhZ2VkYXRhL2NvbnRhY3QuanNvbidcclxuaW1wb3J0IGNyZWRlbnRpYWxzIGZyb20gJy4vcGFnZWRhdGEvY3JlZGVudGlhbHMuanNvbidcclxuaW1wb3J0IHByaXZhY3kgZnJvbSAnLi9wYWdlZGF0YS9wcml2YWN5Lmpzb24nXHJcbmltcG9ydCBub3Rmb3VuZCBmcm9tICcuL3BhZ2VkYXRhL25vdEZvdW5kLmpzb24nXHJcbmltcG9ydCBsaXN0b2Zwcm9qZWN0cyBmcm9tICcuL3BhZ2VkYXRhL2xpc3RPZlByb2plY3RzLmpzb24nXHJcbmltcG9ydCBzb2NpYWxzIGZyb20gJy4vcGFnZWRhdGEvc29jaWFscy5qc29uJ1xyXG5cclxuY29uc3QgcyA9IChsaXN0cykgPT4ge1xyXG4gIHJldHVybiAoIFxyXG4gICAgbGlzdHMubGlzdG9mcHJvamVjdHMuZmlsdGVyKChsaXN0LCBpKT0+e1xyXG4gICAgICByZXR1cm4gaSA8IDRcclxuICAgIH0pXHJcbiAgKVxyXG59XHJcblxyXG4vLyB0aGlzIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIHRoZSBqc29uIGZpbGUgd2hlbmV2ZXIgXHJcbi8vIHRoZSByb3V0ZSBzdHJpbmcgbWF0Y2hlcyBpdHMgdmFsdWUuXHJcbi8vIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGV2ZXJ5IGFnZSBpbml0aWFsIGdldCBwcm9wcy5cclxuZXhwb3J0IGNvbnN0IGZpbmREYXRhID0gKGRhdGEpID0+IHtcclxuICBzd2l0Y2goZGF0YSkge1xyXG4gICAgY2FzZSAoJ2hvbWUnKTogcmV0dXJuIHsuLi5ob21lLCBsaXN0b2Zwcm9qZWN0czogcyhsaXN0b2Zwcm9qZWN0cyksIC4uLnNvY2lhbHN9O1xyXG4gICAgY2FzZSAoJ2Fib3V0Jyk6IHJldHVybiB7Li4uYWJvdXQsIC4uLnNvY2lhbHN9XHJcbiAgICBjYXNlICgncHJvamVjdHMnKTogcmV0dXJuIHsuLi5wcm9qZWN0cywgLi4ubGlzdG9mcHJvamVjdHMsIC4uLnNvY2lhbHN9XHJcbiAgICBjYXNlICgnY29udGFjdHMnKTogcmV0dXJuIHsuLi5jb250YWN0cywgLi4uc29jaWFsc31cclxuICAgIGNhc2UgKCdwcml2YWN5Jyk6IHJldHVybiB7Li4ucHJpdmFjeSwgLi4uc29jaWFsc31cclxuICAgIGNhc2UgKCdub3Rmb3VuZCcpOiByZXR1cm4gey4uLm5vdGZvdW5kLCAuLi5zb2NpYWxzfVxyXG4gICAgY2FzZSAoJ2NyZWRlbnRpYWxzJyk6IHJldHVybiB7Li4uY3JlZGVudGlhbHMsIC4uLnNvY2lhbHN9XHJcbiAgICBjYXNlICgncHJvamVjdGxpc3RzJyk6IHJldHVybiB7Li4ubGlzdG9mcHJvamVjdHMsIC4uLnNvY2lhbHN9XHJcbiAgICBjYXNlICgnc29jaWFscycpOiByZXR1cm4gc29jaWFsc1xyXG4gICAgZGVmYXVsdDogcmV0dXJuIG51bGxcclxuICB9XHJcbn1cclxuIiwiXHJcbi8vIHRoaXMgZnVuY3Rpb24gd2lsbCByZXR1cm4gYSBzdHJpaW5nIHRoYXQgd2lsbFxyXG4vLyBkZXRlcm1pbmUgb2YgdGhlIGN1cnJlbnQgc3RhdGUgaGFzIHRvIGJlIGluaXRpYWwgb3IgaW5pdGlhbCB0d28uXHJcbi8vIHRoZSBzdHJpbmcgd2lsbCBiZSB1c2VkIGFzIGFuIGluaXRpYWwgdmFsdWUgZm9yIHRoZSBmcmFtZXIgbW90aW9uXHJcbi8vIGluIGFuaW1hdGluZyB0aGUgdHJhbnNpdGlvblxyXG5leHBvcnQgY29uc3Qgc2V0VHJhbnNpdGlvblN0YXRlID0gKHN0YXRlKSA9PiB7XHJcbiAgaWYgKHN0YXRlID09PSAnaW5pdGlhbE9uZScpIHJldHVybiAnaW5pdGlhbFR3bydcclxuICBpZiAoc3RhdGUgPT09ICdpbml0aWFsVHdvJykgcmV0dXJuICdpbml0aWFsT25lJ1xyXG4gIGlmIChzdGF0ZSAhPT0gJ2luaXRpYWxPbmUnIHx8IHN0YXRlICE9PSAnaW5pdGlhbFR3bycpIHtcclxuICAgIHJldHVybiAnaW5pdGlhbE9uZSdcclxuICB9XHJcbn0iLCJcclxuXHJcbmV4cG9ydCBjb25zdCB2YXJpYW50cyA9IHtcclxuICBpbml0aWFsOiB7XHJcbiAgICAvLyBvcGFjaXR5OiAxLFxyXG4gIH0sXHJcbiAgZW50ZXI6IHtcclxuICAgIC8vIG9wYWNpdHk6IDEsXHJcbiAgICAvLyB0cmFuc2l0aW9uOiB7XHJcbiAgICAvLyAgIGR1cmF0aW9uOiAwLjI1LFxyXG4gICAgLy8gfSxcclxuICB9LFxyXG4gIHRvcEV4aXQ6IHtcclxuICAgIG9wYWNpdHk6IDEsXHJcbiAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgIGRlbGF5OiAuNSxcclxuICAgICAgLy8gZHVyYXRpb246IDVcclxuICAgIH0sXHJcbiAgfSxcclxuICBib3R0b21FeGl0OiB7XHJcbiAgICBvcGFjaXR5OiAxLFxyXG4gICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAvLyBkZWxheTogLjNcclxuICAgICAgZHVyYXRpb246IC4zXHJcbiAgICB9LFxyXG4gIH1cclxufSIsIlxyXG5sZXQgZWFzaW5nID0gWzAuNiwgMC4wNSwgMC4wMSwgMC45OV07XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb0FuaW0gPSB7XHJcbiAgaW5pdGlhbDoge1xyXG4gICAgb3BhY2l0eTogMFxyXG4gIH0sXHJcbiAgaW5pdEFuaW1hdGU6IHtcclxuICAgIG9wYWNpdHk6IDBcclxuICB9LFxyXG4gIGluaXRpYWxPbmU6e1xyXG4gICAgb3BhY2l0eTogMC43IFxyXG4gIH0sXHJcbiAgaW5pdGlhbFR3bzoge1xyXG4gICAgb3BhY2l0eTogMC43XHJcbiAgfSxcclxuICB0b3BBbmltYXRpb246IHtcclxuICAgIG9wYWNpdHk6IDAsXHJcbiAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgIGRlbGF5OiAwLjM1LFxyXG4gICAgICBkdXJhdGlvbjogLjE1LFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgYm90dG9tQW5pbWF0aW9uOiB7XHJcbiAgICBvcGFjaXR5OiAwLFxyXG4gICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICBkZWxheTogMC4zNSxcclxuICAgICAgZHVyYXRpb246IC4yNSxcclxuICAgIH1cclxuICB9LFxyXG4gIHRvcEV4aXQ6IHtcclxuICAgIG9wYWNpdHk6IDAuNywgXHJcbiAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgIGRlbGF5OiAuNyxcclxuICAgICAgZHVyYXRpb246IC4xLFxyXG4gICAgICBlYXNlOiBlYXNpbmdcclxuICAgIH1cclxuICB9LFxyXG4gIGJvdHRvbUV4aXQ6IHtcclxuICAgIG9wYWNpdHk6IDAuNywgXHJcbiAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgIGRlbGF5OiAuMSxcclxuICAgICAgZHVyYXRpb246IC4wNSxcclxuICAgICAgZWFzZTogZWFzaW5nXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHRvcEFuaW0gPSB7XHJcbiAgaW5pdGlhbDoge1xyXG4gICAgd2lkdGg6ICcwJScsXHJcbiAgICByaWdodDogMFxyXG4gIH0sXHJcbiAgaW5pdEFuaW1hdGU6IHtcclxuICAgIHdpZHRoOiAnMCUnLFxyXG4gIH0sXHJcbiAgaW5pdGlhbE9uZToge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGxlZnQ6IDBcclxuICB9LFxyXG4gIGluaXRpYWxUd286IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICByaWdodDogMFxyXG4gIH0sXHJcbiAgdG9wQW5pbWF0aW9uOiB7XHJcbiAgICB3aWR0aDogJzAlJyxcclxuICAgIGZsb2F0OiAncmlnaHQnLFxyXG4gICAgLy8gcmlnaHQ6IDAsXHJcbiAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgIGRlbGF5OiAwLjIsXHJcbiAgICAgIGR1cmF0aW9uOiAuMyxcclxuICAgICAgZWFzZTogZWFzaW5nXHJcbiAgICB9XHJcbiAgfSxcclxuICBib3R0b21BbmltYXRpb246IHtcclxuICAgIHdpZHRoOiAnMCUnLFxyXG4gICAgZmxvYXQ6ICdyaWdodCcsXHJcbiAgICAvLyByaWdodDogMCxcclxuICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgZGVsYXk6IC4yLFxyXG4gICAgICBkdXJhdGlvbjogLjMsXHJcbiAgICAgIGVhc2U6IGVhc2luZ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgdG9wRXhpdDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgIGRlbGF5OiAwLjgsXHJcbiAgICAgIGR1cmF0aW9uOiAuNCxcclxuICAgICAgZWFzZTogZWFzaW5nXHJcbiAgICB9XHJcbiAgfSxcclxuICBib3R0b21FeGl0OiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgLy8gZGVsYXk6ICxcclxuICAgICAgZHVyYXRpb246IC40LFxyXG4gICAgICBlYXNlOiBlYXNpbmdcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IGFuaW1lIGZyb20gJ2FuaW1lanMnXHJcbmltcG9ydCB7bWVudUNsaWNrRWxlbWVudHN9IGZyb20gJy4uLy4uL2NvbW1vbi9lbGVtZW50U29ydGVyJ1xyXG5cclxuLy8gdGhpcyBmdW5jdGlvbiBpcyBmb3IgdGhlIGRhcmsgZ3JlZW4gbWVudSBiYWNrZ3JvdW5kXHJcbi8vIHRoaXMgd2lsbCBydW4gd2hlbiB0aGUgdXNlIGNsaWNrcyB0aGUgbWVudSBpY29uXHJcbmV4cG9ydCBmdW5jdGlvbiBvcGVuTWVudSAoKSB7XHJcbiAgY29uc3QgZWwgPSBtZW51Q2xpY2tFbGVtZW50cygpXHJcbiAgICBcclxuICBlbC5jb250YWluZXIuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xyXG4gIGVsLm1lbnVfY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgID0gJ2Jsb2NrJ1xyXG4gIGVsLnNvY2lhbF9uYXZpY29ucy5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgxMDAlKSdcclxuICBlbC5jb3B5cmlnaHRfcnVubmVyLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKDEwMCUpJ1xyXG5cclxuICBzZXREaXNwbGF5KGVsLnNlY3Rpb25fYmxvY2ssICdub25lJylcclxuICBzZXREaXNwbGF5KGVsLnNob3J0X3Byb2plY3QsICdub25lJylcclxuXHJcblxyXG4gIFxyXG4gIGlmKGVsLnRleHRfYWN0aXZlICYmIGVsLmJhY2tlcl9hY3RpdmUpe1xyXG4gICAgZWwuYmFja2VyX2FjdGl2ZS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgtMTVweCknXHJcbiAgICBlbC50ZXh0X2FjdGl2ZS5zdHlsZS5jb2xvciA9ICcjQzZDNEFGJ1xyXG4gICAgZWwuYmFja2VyX2FjdGl2ZS5zdHlsZS5jb2xvciA9ICcjMjY3NTcyJ1xyXG4gIH1cclxuXHJcbiAgZm9yKGxldCB4PTA7IHg8NDsgeCsrKXtcclxuICAgIGVsLm1lbnVfbGlzdF9jb250YWluZXJbeF0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoMTAwJSknXHJcbiAgfVxyXG5cclxuICAvLyBydW4gdGhlIHRoZSBkYXJrIGdyZWVuIGJhY2tncm91bmRcclxuICBhbmltZSh7XHJcbiAgICB0YXJnZXRzOiBlbC5tZW51X3J1bm5lcnMsXHJcbiAgICBkdXJhdGlvbjogNDAwLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGVhc2luZzogJ2Vhc2VJbk91dFF1YWQnLFxyXG4gICAgZGVsYXk6IChlbCwgaSkgPT4geyByZXR1cm4gaSAqIDE2MCB9LFxyXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIChhbmltKSB7XHJcbiAgICAgIHNob3coZWwpXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLy8gdGhpcyB3aWxsIHNob3cgdGhlIG90aGVyIGVsZW1lbnQgZm9yIG1lbnUgcGFnZS5cclxuLy8gdGhlc2UgZWxlbWVudHMgYXJlIHRoZSBzb2NpYWwgaWNvbnMsIHNxdWFyZSBpbWFnZSwgcHJpdmFjeVxyXG5mdW5jdGlvbiBzaG93IChlbCkge1xyXG4gIGFuaW1lKHtcclxuICAgIHRhcmdldHM6IGVsLm1lbnVfbGlzdF9jb250YWluZXIsXHJcbiAgICBvcGFjaXR5OiAxLFxyXG4gICAgZWFzaW5nOiAnZWFzZU91dEN1YmljJyxcclxuICAgIGR1cmF0aW9uOiA0NTAsXHJcbiAgICB0cmFuc2xhdGVZOiAnMCUnLFxyXG4gICAgZGVsYXk6IChlbCwgaSkgPT4geyByZXR1cm4gaSAqIDEyMCB9XHJcbiAgfSlcclxuICBhbmltZSh7XHJcbiAgICB0YXJnZXRzOiBbZWwuc29jaWFsX25hdmljb25zICxlbC5jb3B5cmlnaHRfcnVubmVyXSxcclxuICAgIGVhc2luZzogJ2Vhc2VPdXRDdWJpYycsXHJcbiAgICBvcGFjaXR5OiAxLFxyXG4gICAgZHVyYXRpb246IDQ1MCxcclxuICAgIHRyYW5zbGF0ZVk6ICcwJScsXHJcbiAgfSlcclxuICBhbmltZSh7XHJcbiAgICB0YXJnZXRzOiBlbC5zcXVhcmVfaW1nLFxyXG4gICAgZWFzaW5nOiAnbGluZWFyJyxcclxuICAgIGR1cmF0aW9uOiA0NTAsXHJcbiAgICBvcGFjaXR5OiAxLFxyXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIChhbmltKSB7XHJcbiAgICAgIGVsLnJpZ2h0X2ljb25zLnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLy8gdGhpcyBmdW5jdGlvbiBpcyBmb3IgdGhlIG1lbnUgaXRlbS4gdGhpcyB3aWxsIFxyXG4vLyBjbG9zZSB0aGUgbWVudSB3aGVuIHRoZSB1c2VyIGNsaWNrcyBhbnkgb2YgdGhlIGl0ZW1cclxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlTWVudSAoY2xvc2VDb250YWluZXIpIHtcclxuICBjb25zdCBlbCA9IG1lbnVDbGlja0VsZW1lbnRzKClcclxuICBlbC5yaWdodF9pY29ucy5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXHJcblxyXG4gIGxldCB0bCA9IGFuaW1lLnRpbWVsaW5lKHtlYXNpbmc6ICdsaW5lYXInfSlcclxuXHJcbiAgdGwuYWRkKHtcclxuICAgIHRhcmdldHM6IFtlbC5zb2NpYWxfbmF2aWNvbnMsIGVsLmNvcHlyaWdodF9ydW5uZXIsIGVsLnNxdWFyZV9pbWcsIGVsLm1lbnVfbGlzdF9jb250YWluZXJdLFxyXG4gICAgZHVyYXRpb246IDQwMCxcclxuICAgIG9wYWNpdHk6IDAsXHJcbiAgfSkgICAgXHJcbiAgLmFkZCh7XHJcbiAgICB0YXJnZXRzOiBlbC5tZW51X3J1bm5lcnMsXHJcbiAgICBkdXJhdGlvbjogMjc1LFxyXG4gICAgd2lkdGg6ICcwJScsXHJcbiAgICBkZWxheTogKGVsLCBpKSA9PiB7IHJldHVybiBpICogMTIwIH0sXHJcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gKGFuaW0pIHtcclxuICAgICAgZWwubWVudV9jb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICBpZihjbG9zZUNvbnRhaW5lcikge1xyXG4gICAgICAgIGVsLmNvbnRhaW5lci5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJ1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZWwudGV4dF9hY3RpdmUgJiYgZWwuYmFja2VyX2FjdGl2ZSkge1xyXG4gICAgICAgIGVsLnRleHRfYWN0aXZlLnN0eWxlLmNvbG9yID0gJyMyQzY2NjQnXHJcbiAgICAgICAgZWwuYmFja2VyX2FjdGl2ZS5zdHlsZS5jb2xvciA9ICcjMEM1RDVBJ1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXREaXNwbGF5KGVsLnNlY3Rpb25fYmxvY2ssICdibG9jaycpXHJcbiAgICAgIHNldERpc3BsYXkoZWwuc2hvcnRfcHJvamVjdCwgJ2Jsb2NrJylcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2V0RGlzcGxheSAoZWwsIGRpc3BsYXkpIHtcclxuICBpZihlbCkge1xyXG4gICAgZWwuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXlcclxuICB9XHJcbn0iLCJpbXBvcnQge25hdkhvdmVyRWxlbWVudHN9IGZyb20gJy4uLy4uL2NvbW1vbi9lbGVtZW50U29ydGVyJ1xyXG5pbXBvcnQgYW5pbWUgZnJvbSAnYW5pbWVqcydcclxuXHJcbi8vIGZ1bmN0aW9uIHRvIHJ1biB3aGVuIG1vdXNlIGVudGVyIG9uIG1lbnUgYVxyXG5leHBvcnQgZnVuY3Rpb24gbW91c2VFbnRlciAoY29sb3JNb2RlcywgZXZlbnQpIHtcclxuICBjb25zdCBlbCA9IG5hdkhvdmVyRWxlbWVudHMoKVxyXG5cclxuICBsZXQgZnJvbnQ7XHJcbiAgaWYoZXZlbnQgPT09ICdjbG9zZScpIGZyb250ID0gZWwuZnJvbnRcclxuICBpZihldmVudCA9PT0gJ29wZW4nKSBmcm9udCA9IGVsLmNsb3NlX3BhdGhzXHJcbiAgYW5pbWUoe1xyXG4gICAgdGFyZ2V0czogZnJvbnQsXHJcbiAgICBjb2xvcjogY29sb3JNb2Rlcy5iYWNrZ3JvdW5kLFxyXG4gICAgZmlsbDogY29sb3JNb2Rlcy5iYWNrZ3JvdW5kLFxyXG4gICAgZHVyYXRpb246IDIwMCxcclxuICAgIGVhc2luZzogJ2Vhc2VJblF1YWQnLFxyXG4gICAgYmVnaW46IGZ1bmN0aW9uIChhbmltKSB7XHJcbiAgICAgIGVsLm1pZGRsZS5zdHlsZS53aWR0aCA9IDBcclxuICAgICAgZWwubWlkZGxlLnN0eWxlLmhlaWdodCA9IDBcclxuICAgICAgZWwubWlkZGxlLnN0eWxlLm9wYWNpdHkgPSAxXHJcbiAgICB9XHJcbiAgfSlcclxuICBhbmltZSh7XHJcbiAgICB0YXJnZXRzOiBlbC5iYWNrLFxyXG4gICAgYmFja2dyb3VuZDogY29sb3JNb2Rlcy5mb3JlZ3JvdW5kLFxyXG4gICAgZHVyYXRpb246IDE1MCxcclxuICAgIHdpZHRoOiAnOTAlJyxcclxuICAgIGhlaWdodDogJzkwJScsXHJcbiAgICBlYXNpbmc6ICdlYXNlT3V0U2luZSdcclxuICB9KVxyXG59XHJcblxyXG4vLyBmdW5jdGlvbiB0byBydW4gd2hlbiBtb3VzZSBtb3ZlcyBvdXQgb2YgdGhlIG1lbnUgYXJlYVxyXG5leHBvcnQgZnVuY3Rpb24gbW91c2VPdXQgKGNvbG9yTW9kZXMsIGV2ZW50KSB7XHJcbiAgY29uc3QgZWwgPSBuYXZIb3ZlckVsZW1lbnRzKClcclxuICBsZXQgZnJvbnQ7XHJcbiAgaWYgKGV2ZW50ID09PSAnY2xvc2UnKSBmcm9udCA9IGVsLmZyb250XHJcbiAgaWYgKGV2ZW50ID09PSAnb3BlbicpIGZyb250ID0gZWwuY2xvc2VfcGF0aHNcclxuICBcclxuICBhbmltZSh7XHJcbiAgICB0YXJnZXRzOiBmcm9udCxcclxuICAgIGNvbG9yOiBjb2xvck1vZGVzLmZvcmVncm91bmQsXHJcbiAgICBmaWxsOiBjb2xvck1vZGVzLmZvcmVncm91bmQsXHJcbiAgICBkdXJhdGlvbjogMjAwLFxyXG4gICAgZWFzaW5nOiAnZWFzZUluUXVhZCdcclxuICB9KVxyXG4gIGFuaW1lKHtcclxuICAgIHRhcmdldHM6IGVsLm1pZGRsZSxcclxuICAgIGJhY2tncm91bmQ6IGNvbG9yTW9kZXMuYmFja2dyb3VuZCxcclxuICAgIGR1cmF0aW9uOiAyMDAsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBlYXNpbmc6ICdlYXNlSW5RdWFkJyxcclxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoYW5pbSkge1xyXG4gICAgICBlbC5iYWNrLnN0eWxlLndpZHRoID0gMFxyXG4gICAgICBlbC5iYWNrLnN0eWxlLmhlaWdodCA9IDBcclxuICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgZWwubWlkZGxlLnN0eWxlLm9wYWNpdHkgPSAwXHJcbiAgICAgIH0sIDUwKVxyXG4gICAgfVxyXG4gIH0pXHJcbn0iLCJpbXBvcnQgYW5pbWUgZnJvbSAnYW5pbWVqcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtb3VzZUVudGVyIChlLCBldmVudCkge1xyXG4gIGxldCBwYXJlbnQgPSBlLnRhcmdldC5jbG9zZXN0KCcubWVudS1saXN0LWNvbnRhaW5lcicpXHJcbiAgbGV0IGJhY2tlciA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1saXN0LWJhY2tlcicpXHJcblxyXG4gIGxldCBlbGVtZW50UGFyZW50ID0gZS50YXJnZXQuY2xvc2VzdCgnLmxpc3QtZnJvbnQnKVxyXG4gIFxyXG4gIGlmKCFlbGVtZW50UGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpe1xyXG4gICAgaWYoZXZlbnQgPT09ICdob3ZlckluJyl7XHJcbiAgICAgIGFuaW1hdGVGb250cyhiYWNrZXIsICcjMjY3NTcyJywgLTIwKVxyXG4gICAgICBhbmltYXRlRm9udHMoZS50YXJnZXQucGFyZW50RWxlbWVudCwgJyNDNkM0QUYnLCAtNylcclxuICAgICAgYW5pbWF0ZUZvbnRzKGUudGFyZ2V0LCAnI0M2QzRBRicsIC03KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYW5pbWF0ZUZvbnRzKGUudGFyZ2V0LCAnIzJDNjY2NCcsIC01KVxyXG4gICAgICBhbmltYXRlRm9udHMoYmFja2VyLCAnIzBDNUQ1QScsIC0yMClcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtb3VzZU91dChlKSB7XHJcbiAgbGV0IGVsZW1lbnRQYXJlbnQgPSBlLnRhcmdldC5jbG9zZXN0KCcubGlzdC1mcm9udCcpXHJcbiAgbGV0IHBhcmVudCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5tZW51LWxpc3QtY29udGFpbmVyJylcclxuICBsZXQgYmFja2VyID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWxpc3QtYmFja2VyJylcclxuICBcclxuXHJcbiAgaWYoIWVsZW1lbnRQYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSl7XHJcbiAgICAvLyBsZXQgYiA9IGVsLm5leHRFbGVtZW50U2libGluZy5maXJzdEVsZW1lbnRDaGlsZCBcclxuICAgIGFuaW1hdGVGb250cyhlLnRhcmdldC5wYXJlbnRFbGVtZW50LCAnIzI2NzU3MicsIDApXHJcbiAgICBhbmltYXRlRm9udHMoZS50YXJnZXQsICcjMjY3NTcyJywgMClcclxuICAgIGFuaW1hdGVGb250cyhiYWNrZXIsICcjMEM1RDVBJywgMClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFuaW1hdGVGb250cyhlbCwgY29sb3IsIHkpIHtcclxuICBhbmltZSh7XHJcbiAgICB0YXJnZXRzOiBlbCxcclxuICAgIGR1cmF0aW9uOiAyMDAsXHJcbiAgICBjb2xvcjogY29sb3IsXHJcbiAgICB0cmFuc2xhdGVZOiBgJHt5fXB4YCxcclxuICAgIGVhc2luZzogJ2Vhc2VJblF1YWQnXHJcbiAgfSlcclxufVxyXG4iLCJpbXBvcnQgYW5pbWUgZnJvbSAnYW5pbWVqcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmYWRlTmF2YmFyICgpIHtcclxuICBjb25zdCBuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci1jb250YWluZXInKVxyXG4gICAgICBcclxuICBsZXQgdGwgPSBhbmltZS50aW1lbGluZSh7XHJcbiAgICBlYXNpbmc6ICdlYXNlSW5RdWFkJyxcclxuICAgIGR1cmF0aW9uOiAyMDAsXHJcbiAgfSlcclxuICB0bC5hZGQoe1xyXG4gICAgdGFyZ2V0czogbixcclxuICAgIG9wYWNpdHk6IDAsXHJcbiAgfSlcclxuICAuYWRkKHtcclxuICAgIGR1cmF0aW9uOiAyMDAsXHJcbiAgfSlcclxuICAuYWRkKHtcclxuICAgIHRhcmdldHM6IG4sXHJcbiAgICBvcGFjaXR5OiAxLFxyXG4gIH0pXHJcbn0iLCJpbXBvcnQgYW5pbWUgZnJvbSAnYW5pbWVqcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzY3JvbGxEb3duKCkge1xyXG4gIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJylcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXHJcblxyXG4gIGNvbnN0IG1vdmVUbyA9IHdpbmRvdy5pbm5lckhlaWdodFxyXG5cclxuICAvLyB3ZSBuZWVkIHRoZSBodG1sIGFuZCB0aGUgYm9keSB0byBtYWtlIHRoZSBhbmltYXRpb24gbW9yZSBzbW9vdGhlclxyXG4gIGFuaW1lKHtcclxuICAgIHRhcmdldHM6IFtodG1sLCBib2R5XSxcclxuICAgIHNjcm9sbFRvcDogbW92ZVRvLFxyXG4gICAgZHVyYXRpb246IDE1MDAsXHJcbiAgICBlYXNpbmc6ICdlYXNlSW5PdXRRdWFkJ1xyXG4gIH0pXHJcblxyXG59IiwiaW1wb3J0IGFuaW1lIGZyb20gJ2FuaW1lanMnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsQW5pbWF0aW9uKCkge1xyXG4gIC8vIGNvbnNvbGUubG9nKHBhZ2UpXHJcbiAgaWYod2luZG93LmlubmVyV2lkdGggPiA3NjgpIHtcclxuICAgIC8vIHNsaWRlSW5FbGVtZW50c09uU2Nyb2xsKHdhaXQpXHJcbiAgICBzbGlkZUluQW5pbWF0aW9uKClcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2UgKGZ1bmMsIHdhaXQpIHtcclxuICBsZXQgdGltZW91dDtcclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uIGV4ZWN1dGVkRnVuY3Rpb24oLi4uYXJncykge1xyXG4gICAgY29uc3QgbGF0ZXIgPSAoKSA9PiB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgZnVuYyguLi5hcmdzKTtcclxuICAgIH07XHJcblxyXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xyXG4gIH07XHJcbn07XHJcblxyXG5cclxuLy8gZnVuY3Rpb24gdGhhdCB3aWxsIGRlYm91bmNlIHRoZSBzY3JvbGwgZXZlbnQgdG8gZXZlcnlcclxuLy8gNzBtcyBzbyB0byBhdm9pZCBwZXJmb3JtYW5jZSBpc3N1ZVxyXG4vLyBleHBvcnQgZnVuY3Rpb24gZGVib3VuY2UgKGZ1bmMsIHdhaXQgPSAxMDAsIGltbWVkaWF0ZSA9IHRydWUpe1xyXG4vLyAgIGxldCB0aW1lb3V0O1xyXG4vLyAgIHJldHVybiBmdW5jdGlvbigpIHtcclxuLy8gICAgIGxldCBjb250ZXh0ID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcclxuLy8gICAgIGxldCBsYXRlciA9IGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICAgdGltZW91dCA9IG51bGw7XHJcbi8vICAgICAgIGlmKCFpbW1lZGlhdGUpIHtcclxuLy8gICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICAgIGxldCBjYWxsTm93ID0gaW1tZWRpYXRlICYmIHRpbWVvdXRcclxuLy8gICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuLy8gICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KVxyXG4vLyAgICAgaWYoY2FsbE5vdykge1xyXG4vLyAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBmb3Igc2xpZGUgYW5pbWF0aW9uXHJcbmZ1bmN0aW9uIHNsaWRlSW5BbmltYXRpb24oKXtcclxuICBsZXQgZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNob3cnKVxyXG5cclxuICBlbHMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAvLyBjb25zdCBzbGlkZUluQXQgPSAod2luZG93LnNjcm9sbFkgKyB3aW5kb3cuaW5uZXJIZWlnaHQpIC0gKGVsLmNsaWVudEhlaWdodC8yKVxyXG4gICAgY29uc3Qgc2xpZGVJbkF0ID0gKHdpbmRvdy5zY3JvbGxZICsgd2luZG93LmlubmVySGVpZ2h0KSAtICg2MClcclxuICAgIGNvbnN0IGNsaWVudEhlaWdodCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHdpbmRvdy5zY3JvbGxZXHJcblxyXG4gICAgY29uc3QgaXNQYXNzZWQgPSBzbGlkZUluQXQgPiBjbGllbnRIZWlnaHRcclxuICAgIGNvbnN0IGVsSXNOb3REb25lID0gIWVsLmNsYXNzTGlzdC5jb250YWlucygnZG9uZScpXHJcbiAgICBjb25zdCBlbENoaWxkcmVuID0gZWwuY2hpbGRyZW5cclxuICAgIGNvbnN0IGlzUHJvamVjdEltYWdlID0gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0LWltYWdlJylcclxuICAgIGNvbnN0IGlzTWVzc2FnZUNvbnQgPSBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ21lc3NhZ2UtY29udGFpbmVyJylcclxuICAgIFxyXG4gICAgICBpZihpc1Bhc3NlZCAmJiBlbElzTm90RG9uZSkge1xyXG4gICAgICAgIHJlbW92ZU92ZXJsYXkoZWwpXHJcbiAgICAgICAgaWYoZWxDaGlsZHJlbi5sZW5ndGggPT09IDIpe1xyXG4gICAgICAgICAgc2hvd1NsaWRlcihlbENoaWxkcmVuKVxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGVsQ2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XHJcblxyXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhpcyBlbGVtZW50IGhhcyBhIGNsYXNzIG9mIHByb2plY3QtaW1hZ2VcclxuICAgICAgICAgIGlmKGlzUHJvamVjdEltYWdlKSBzZXRUaW1lcihzaG93T3BhY2l0eSwgZWxDaGlsZHJlblswXSwgZWwpXHJcblxyXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhpcyBjbGFzcyBoYXMgYSBtZXNzYWdlLWNvbnRhaW5lclxyXG4gICAgICAgICAgaWYoaXNNZXNzYWdlQ29udCkge1xyXG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdkb25lJylcclxuICAgICAgICAgICAgc2hvd09wYWNpdHkoZWxDaGlsZHJlblswXSlcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgZWxlbWVudCBkb2VzIG5vdCBjb250YWluIGJvdGggdGhlIGNsYXNzIG5hbWVzXHJcbiAgICAgICAgICBpZighaXNQcm9qZWN0SW1hZ2UgJiYgIWlzTWVzc2FnZUNvbnQpIHtcclxuICAgICAgICAgICAgc2V0VGltZXIoc2xpZGVVcCwgZWxDaGlsZHJlblswXSwgZWwpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgfSkgIFxyXG59ICBcclxuXHJcbmZ1bmN0aW9uIHNldFRpbWVyKGZ1bmMsIGNoaWxkLCBlbCkge1xyXG4gIHNldFRpbWVvdXQoKCk9PntcclxuICAgIGZ1bmMoY2hpbGQpXHJcbiAgICBlbC5jbGFzc0xpc3QuYWRkKCdkb25lJylcclxuICB9LCA2MDApXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlT3ZlcmxheSAoZWwpe1xyXG4gIGNvbnN0IGhhc0hlYWRlckNsYXNzID0gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdoZWFkZXItc29jaWFsLWNvbnRhaW5lcicpXHJcbiAgY29uc3QgaGFzU2Nyb2xsQ2xhc3MgPSBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3Njcm9sbC1jb3ZlcicpXHJcbiAgaWYoaGFzSGVhZGVyQ2xhc3MgfHwgaGFzU2Nyb2xsQ2xhc3Mpe1xyXG4gICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICBlbC5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJ1xyXG4gICAgfSwgMTIwMClcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbi8vIGFuaW1hdGlvbiB0aGF0IHdpbGwgcnVuIHRoZSBzbGlkZXIgYW5kIHdlIGFyZSB1c2luZyB0aGUgXHJcbi8vIHRpbWVsaW5lIGFuaW1hdGlvbiBtYWtlIGEgc21vb3RoIGVmZmVjdFxyXG5mdW5jdGlvbiBzaG93U2xpZGVyIChlbCkge1xyXG4gIGxldCB0bCA9IGFuaW1lLnRpbWVsaW5lKHt9KVxyXG4gIGNvbnN0IHBhcmVudCA9IGVsWzFdLmNsb3Nlc3QoJy5zaG93JylcclxuICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnZG9uZScpXHJcbiAgXHJcbiAgdGwuYWRkKHtcclxuICAgIHRhcmdldHM6IGVsWzFdLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGVhc2luZzogICdlYXNlSW5TaW5lJyxcclxuICAgIGR1cmF0aW9uOiAzMDAsXHJcbiAgfSlcclxuICAuYWRkKHtcclxuICAgIHRhcmdldHM6IGVsWzFdLFxyXG4gICAgZHVyYXRpb246IDQwMCxcclxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoYW5pbSkge1xyXG4gICAgICBlbFsxXS5zdHlsZS5yaWdodCA9IDBcclxuICAgIH1cclxuICB9KVxyXG4gIC5hZGQoe1xyXG4gICAgdGFyZ2V0czogZWxbMV0sXHJcbiAgICB3aWR0aDogJzAlJyxcclxuICAgIGVhc2luZzogICdlYXNlSW5TaW5lJyxcclxuICAgIGR1cmF0aW9uOiAzMDAsXHJcbiAgICBiZWdpbjogZnVuY3Rpb24gKGFuaW0pIHtcclxuICAgICAgc2xpZGVVcChlbFswXSlcclxuICAgIH1cclxuICB9KVxyXG5cclxufVxyXG5cclxuLy8gZnVuY3Rpb24gdGhhdCB3aWxsIG1ha2UgdGhlIGltYWdlIG9wYWNpdHkgZnJvbSBcclxuLy8gMCB0byAxIHRvIG1ha2UgdGhlIGltYWdlIHZpc2libGVcclxuZnVuY3Rpb24gc2hvd09wYWNpdHkoZWwpIHtcclxuICAvLyBlbC5zdHlsZS5vcGFjaXR5ID0gMFxyXG5cclxuICBhbmltZSh7XHJcbiAgICB0YXJnZXRzOiBlbCxcclxuICAgIG9wYWNpdHk6IHtcclxuICAgICAgZHVyYXRpb246IDUwMCxcclxuICAgICAgdmFsdWU6IDEsXHJcbiAgICAgIGRlbGF5OiAyMDAsXHJcbiAgICAgIGVhc2luZzogJ2Vhc2VJblNpbmUnXHJcbiAgICB9XHJcbiAgICBcclxuICB9KVxyXG59XHJcblxyXG4vLyB0aGlzIHdpbGwgbWFrZSB0aGUgdGV4dCBvciBwYXJhZ3JhcGhzIHZpc2libGVcclxuLy8gdGhpcyBzbGlkZSB1cCB0aGUgdGV4dFxyXG5mdW5jdGlvbiBzbGlkZVVwIChlbCkge1xyXG4gIGxldCB0bCA9IGFuaW1lLnRpbWVsaW5lKHt9KVxyXG4gIGVsLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKDYwcHgpJ1xyXG5cclxuICB0bC5hZGQoe1xyXG4gICAgdGFyZ2V0czogZWwsXHJcbiAgICBvcGFjaXR5OiB7XHJcbiAgICAgIGR1cmF0aW9uOiA1NTAsXHJcbiAgICAgIHZhbHVlOiAxLFxyXG4gICAgICBkZWxheTogMjAwLFxyXG4gICAgICBlYXNpbmc6ICdsaW5lYXInXHJcbiAgICB9LFxyXG4gICAgdHJhbnNsYXRlWToge1xyXG4gICAgICB2YWx1ZTogMCxcclxuICAgICAgZWFzaW5nOiAnZWFzZU91dEVsYXN0aWMoMTAsIDIpJyxcclxuICAgICAgZHVyYXRpb246IDcwMFxyXG4gICAgfSxcclxuICB9KVxyXG59XHJcblxyXG5cclxuLy8gY2FsbCB0aGUgYW5pbWF0aW9uIGZ1bmN0aW9uIHdoZW4gd2UgYXJlIHNjcm9sbGluZyB0aGUgcGFnZVxyXG4vLyBleHBvcnQgZnVuY3Rpb24gc2xpZGVJbkVsZW1lbnRzT25TY3JvbGwod2FpdCkge1xyXG4vLyAgIGRlYm91bmNlKHNsaWRlSW5BbmltYXRpb24oKSwgd2FpdClcclxuLy8gfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7dG9wTGF5b3ZlckVsZW1lbnRzfSBmcm9tICcuLi8uLi9jb21tb24vZWxlbWVudFNvcnRlcidcclxuaW1wb3J0IGFuaW1lIGZyb20gJ2FuaW1lanMnXHJcblxyXG4vLyBmdW5jdGlvbiBmb3IgaW50cm8gYW5pbWF0aW9uXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnRyb0FuaW0gKGhhc1Nlc3Npb24pIHtcclxuICBjb25zdCBlbCA9IHRvcExheW92ZXJFbGVtZW50cygpXHJcblxyXG4gIC8vIGlmIGl0IGhhcyBhIHNlc3Npb24gbm8gYW5pbWF0aW9uIHRvIHJ1blxyXG4gIGlmKGhhc1Nlc3Npb24gPT09IHRydWUpe1xyXG4gICAgZWwudG9wLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICB9IFxyXG5cclxuICAvLyBpZiBpdCBoYXMgbm8gc2Vzc2lvbiB0aGVuIHdlIHdpbGwgcnVuIHRoZSBhbmltYXRpb25cclxuICBpZihoYXNTZXNzaW9uID09PSBmYWxzZSkge1xyXG4gICAgZWwudG9wLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICBlbC5jb250YWluZXIuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xyXG4gICAgZWwuc3ZnLnN0eWxlLm9wYWNpdHkgPSAwXHJcbiAgICBlbC50ZXh0LnN0eWxlLm9wYWNpdHkgPSAwXHJcbiAgICBlbC50b3Auc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICAgIGVsLnJ1bm5lci5zdHlsZS5oZWlnaHQgPSAnMTAwdmgnXHJcbiAgICBlbC5ydW5uZXIuc3R5bGUud2lkdGggPSAnMTAwJSdcclxuICAgIHJ1blRvcEFuaW1hdGlvbihlbClcclxuICB9XHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIHRvIHJ1biBpZiB0aGUgYnJvd3NlciBoYXMgbm8gc2Vzc2lvbnNcclxuZnVuY3Rpb24gcnVuVG9wQW5pbWF0aW9uIChlbCkge1xyXG4gIGxldCB0bCA9IGFuaW1lLnRpbWVsaW5lKHtlYXNpbmc6ICdlYXNlSW5TaW5lJ30pXHJcbiAgXHJcbiAgdGwuYWRkKHtcclxuICAgIHRhcmdldHM6IFtlbC5zdmcsIGVsLnRleHRdLFxyXG4gICAgb3BhY2l0eTogMSxcclxuICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gIH0pXHJcbiAgLmFkZCh7XHJcbiAgICBkdXJhdGlvbjogNTAwLFxyXG4gIH0pXHJcbiAgLmFkZCh7XHJcbiAgICB0YXJnZXRzOiBbZWwudGV4dF0sXHJcbiAgICBvcGFjaXR5OiAwLFxyXG4gICAgZHVyYXRpb246IDQwMCxcclxuICB9KVxyXG4gIC5hZGQoe1xyXG4gICAgdGFyZ2V0czogW2VsLnRleHRdLFxyXG4gICAgb3BhY2l0eTogMSxcclxuICAgIGR1cmF0aW9uOiA0MDAsXHJcbiAgfSlcclxuICAuYWRkKHtcclxuICAgIGR1cmF0aW9uOiA3MDAsXHJcbiAgfSlcclxuICAuYWRkKHtcclxuICAgIHRhcmdldHM6IFtlbC50ZXh0XSxcclxuICAgIG9wYWNpdHk6IDAsXHJcbiAgICBkdXJhdGlvbjogNDAwLFxyXG4gIH0pXHJcbiAgLmFkZCh7XHJcbiAgICB0YXJnZXRzOiBbZWwudGV4dF0sXHJcbiAgICBvcGFjaXR5OiAxLFxyXG4gICAgZHVyYXRpb246IDQwMCxcclxuICB9KVxyXG4gIC5hZGQoe1xyXG4gICAgZHVyYXRpb246IDcwMCxcclxuICB9KVxyXG4gIC5hZGQoe1xyXG4gICAgdGFyZ2V0czogW2VsLnRleHRdLFxyXG4gICAgb3BhY2l0eTogMCxcclxuICAgIGR1cmF0aW9uOiA0MDAsXHJcbiAgfSlcclxuICAuYWRkKHtcclxuICAgIHRhcmdldHM6IFtlbC50ZXh0XSxcclxuICAgIG9wYWNpdHk6IDEsXHJcbiAgICBkdXJhdGlvbjogNDAwLFxyXG4gIH0pXHJcbiAgLmFkZCh7XHJcbiAgICBkdXJhdGlvbjogNzAwLFxyXG4gIH0pXHJcbiAgLmFkZCh7XHJcbiAgICB0YXJnZXRzOiBbZWwudGV4dCwgZWwuc3ZnXSxcclxuICAgIG9wYWNpdHk6IDAsXHJcbiAgICBkdXJhdGlvbjogODAwLFxyXG4gIH0pXHJcbiAgLmFkZCh7XHJcbiAgICBkdXJhdGlvbjogNzAwLFxyXG4gIH0pXHJcbiAgLmFkZCh7XHJcbiAgICB0YXJnZXRzOiBbZWwucnVubmVyXSxcclxuICAgIGhlaWdodDogMCxcclxuICAgIGVhc2luZzogJ2Vhc2VJblNpbmUnLFxyXG4gICAgZHVyYXRpb246IDUwMCxcclxuICB9KVxyXG4gIC5hZGQoe1xyXG4gICAgZHVyYXRpb246IDEwMCxcclxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoYW5pbSkge1xyXG4gICAgICBlbC50b3Auc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICBlbC5ydW5uZXIuc3R5bGUuaGVpZ2h0ID0gJzEwMHZoJ1xyXG4gICAgICBlbC5ydW5uZXIuc3R5bGUud2lkdGggPSAnMCdcclxuICAgICAgZWwuY29udGFpbmVyLnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbn1cclxuXHJcblxyXG4vLyBmdW5jdGlvbiB0byBvcGVuIGFuZCBydW4gdGhlIHRvcCBsYXllciBhbmltYXRpb25cclxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5Ub3BMYXllciAoKSB7XHJcbiAgY29uc3QgZWwgPSB0b3BMYXlvdmVyRWxlbWVudHMoKVxyXG4gIGVsLnRvcC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gIGVsLmNvbnRhaW5lci5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXHJcbiAgZWwucnVubmVyLnN0eWxlLmhlaWdodCA9ICcxMDB2aCdcclxuICBlbC5ydW5uZXIuc3R5bGUud2lkdGggPSAnMCdcclxuICBlbC5zdmcuc3R5bGUud2lkdGggPSAnNzAlJ1xyXG5cclxuICBsZXQgdGwgPSBhbmltZS50aW1lbGluZSgpXHJcbiAgdGxcclxuICAuYWRkKHtcclxuICAgIHRhcmdldHM6IGVsLnJ1bm5lcixcclxuICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZWFzaW5nOiAnbGluZWFyJ1xyXG4gICAgLy8gY29tcGxldGU6IGZ1bmN0aW9uIChhbmltKSB7XHJcbiAgICAvLyAgIGFuaW1lKHtcclxuICAgIC8vICAgICB0YXJnZXRzOiBlbC5zdmcsXHJcbiAgICAvLyAgICAgb3BhY2l0eTogMSxcclxuICAgIC8vICAgICBkdXJhdGlvbjogNTAwLFxyXG4gICAgLy8gICB9KVxyXG4gICAgLy8gfSBcclxuICB9KVxyXG4gIC8vIC5hZGQoe1xyXG4gIC8vICAgZHVyYXRpb246IDUwMCxcclxuICAvLyAgIGJlZ2luOiBmdW5jdGlvbiAoYW5pbSkge1xyXG4gIC8vICAgICBlbC5ydW5uZXIuc3R5bGUucmlnaHQgPSAwXHJcbiAgLy8gICAgIGVsLnJ1bm5lci5zdHlsZS5mbG9hdCA9ICdyaWdodCdcclxuICAvLyAgIH1cclxuICAvLyB9KVxyXG59XHJcblxyXG5cclxuLy8gZnVuY3Rpb24gZm9yIGNsb3NpbmcgdGhlIHRvcCBsYXllclxyXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VUb3BMYXllciAoKSB7XHJcbiAgY29uc3QgZWwgPSB0b3BMYXlvdmVyRWxlbWVudHMoKVxyXG4gIGVsLnRvcC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gIGVsLmNvbnRhaW5lci5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXHJcbiAgZWwucnVubmVyLnN0eWxlLmhlaWdodCA9ICcxMDB2aCdcclxuICBlbC5ydW5uZXIuc3R5bGUud2lkdGggPSAnMTAwJSdcclxuICBlbC5ydW5uZXIuc3R5bGUucmlnaHQgPSAwXHJcbiAgZWwucnVubmVyLnN0eWxlLmZsb2F0ID0gJ3JpZ2h0J1xyXG4gIGVsLnN2Zy5zdHlsZS53aWR0aCA9ICc3MCUnXHJcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci1jb250YWluZXInKVxyXG5cclxubGV0IHRsID0gYW5pbWUudGltZWxpbmUoe2Vhc2luZzogJ2Vhc2VJblNpbmUnfSlcclxuICB0bFxyXG4gIC5hZGQoe1xyXG4gICAgZHVyYXRpb246IDQwMCxcclxuICB9KVxyXG4gIC5hZGQoe1xyXG4gICAgdGFyZ2V0czogZWwucnVubmVyLFxyXG4gICAgZHVyYXRpb246IDQwMCxcclxuICAgIHdpZHRoOiAnMCUnLFxyXG4gICAgYmVnaW46IGZ1bmN0aW9uIChhbmltKSB7XHJcbiAgICAgIGVsLnN2Zy5zdHlsZS5vcGFjaXR5ID0gMFxyXG4gICAgfSBcclxuICB9KVxyXG4gIC5hZGQoe1xyXG4gICAgZHVyYXRpb246IDQwLFxyXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIChhbmltKSB7XHJcbiAgICAgIGVsLnRvcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgIGVsLmNvbnRhaW5lci5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJ1xyXG4gICAgICBlbC5ydW5uZXIuc3R5bGUuaGVpZ2h0ID0gJzEwMHZoJ1xyXG4gICAgICBlbC5ydW5uZXIuc3R5bGUud2lkdGggPSAnMTAwJSdcclxuICAgICAgZWwucnVubmVyLnN0eWxlLmxlZnQgPSAwXHJcbiAgICAgIGVsLnJ1bm5lci5zdHlsZS5mbG9hdCA9ICdsZWZ0J1xyXG4gICAgICBuYXYuc3R5bGUub3BhY2l0eSA9IDFcclxuICAgIH1cclxuICB9KVxyXG59IiwiaW1wb3J0IHtVQVBhcnNlcn0gZnJvbSAndWEtcGFyc2VyLWpzJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG4vLyBnZXQgc2Vzc2lvblN0b3JhZ2VcclxuLy8gZXhwb3J0IGNvbnN0IHNlc3Npb25TdG9yZSA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JlLmdldEl0ZW0oJ3dlYnNlc3Npb24nKSlcclxuZXhwb3J0IGZ1bmN0aW9uIHNlc3Npb25TdG9yZSAoKSB7XHJcbiAgbGV0IHNlc3Npb24gPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uud2Vic2Vzc2lvblxyXG4gIGlmKHNlc3Npb24gPT09IHVuZGVmaW5lZCl7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2Uoc2Vzc2lvbilcclxuICB9XHJcbn1cclxuXHJcbi8vIGZpcmViYXNlIHVybFxyXG5jb25zdCBmaXJlYmFzZVVybCA9ICdodHRwczovL2FpbWFuYWRsYXdhbnNpdGUuZmlyZWJhc2Vpby5jb20nXHJcblxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIGZpcmViYXNlIHVybFxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVVcmwodXJsRGlyZWN0aW9uKSB7XHJcbiAgY29uc3QgZCA9IGdldFRpbWUoJ3VybCcpXHJcbiAgbGV0IHVybCA9IGAke2ZpcmViYXNlVXJsfS8ke3VybERpcmVjdGlvbn0vJHtkLnl9LyR7ZC5tfS8ke2QuZHl9XyR7ZC5kZX1gXHJcbiAgcmV0dXJuIHVybFxyXG59XHJcblxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIHRvIGdldCB1c2VyIGRhdGFcclxuZXhwb3J0IGNvbnN0IGdldFVzZXJEYXRhID0gKCkgPT4ge1xyXG4gIGxldCBwYXJzZXIgPSBuZXcgVUFQYXJzZXIoKVxyXG4gIHJldHVybiBwYXJzZXIuZ2V0UmVzdWx0KClcclxufVxyXG5cclxuXHJcblxyXG4vLyBnZXQgdXNlciBkZXZpY2UgZGF0YVxyXG5leHBvcnQgY29uc3QgZ2V0SVAgPSBhc3luYyAoKSA9PiB7XHJcbiAgbGV0IHVzZXJJcFxyXG5cclxuICBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vaXBhcGkuY28vanNvbi8nKVxyXG4gICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGlmIChyZXMuZGF0YSkge1xyXG4gICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YVxyXG4gICAgICAgICAgdXNlcklwID0ge1xyXG4gICAgICAgICAgICBjYXA6IGRhdGEuY291bnRyeV9jYXBpdGFsLFxyXG4gICAgICAgICAgICBjaXR5OiBkYXRhLmNpdHksXHJcbiAgICAgICAgICAgIGNvdW50cnk6IGRhdGEuY291bnRyeV9uYW1lLFxyXG4gICAgICAgICAgICBpcDogZGF0YS5pcCxcclxuICAgICAgICAgICAgbGF0OiBkYXRhLmxhdGl0dWRlLFxyXG4gICAgICAgICAgICBsb25nOiBkYXRhLmxvbmdpdHVkZSxcclxuICAgICAgICAgICAgdGltZVo6IGRhdGEudGltZXpvbmUsXHJcbiAgICAgICAgICAgIHJlZ2lvbjogZGF0YS5yZWdpb24sXHJcbiAgICAgICAgICAgIHBvc3RDOiBkYXRhLnBvc3RhbCxcclxuICAgICAgICAgICAgaW50ZXJuZXQ6IGRhdGEub3JnLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgdXNlcklwID0ge1xyXG4gICAgICAgICAgYmxvY2tlZDogJ1VzZXIgYmxvY2tlZCB0aGlzIGRhdGEuJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICByZXR1cm4gYXdhaXQgdXNlcklwXHJcbn1cclxuXHJcblxyXG5cclxuLy8gY2hlY2sgaWYgdGhlIHNlc3Npb24gaGFzIGV4cGlyZWRcclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSWZFeHAodGltZSkge1xyXG4gIGxldCBub3cgPSBnZXRUaW1lKCdub3cnKVxyXG4gIGxldCBydW5UaW1lID0gTWF0aC5mbG9vcigoKG5vdyAtIHRpbWUpIC8gMTAwMCkgLyA2MClcclxuICBpZiAocnVuVGltZSA+PSA2MCkge1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIHRvIGdldCB0aW1lXHJcbmV4cG9ydCBjb25zdCBnZXRUaW1lID0gKHVybCkgPT4ge1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgbGV0IGQgPSBkYXRlLmdldERhdGUoKVxyXG4gIGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKVxyXG5cclxuICAvLyBnZXQgdGltZSBmb3IgdXJsIHN0cnVjdHVyZSBxdWVyeVxyXG4gIGlmICh1cmwgPT09ICd1cmwnKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB5OiBkYXRlLmdldEZ1bGxZZWFyKCksXHJcbiAgICAgIG06IGAke24obW9udGgrMSl9XyR7bW5bZGF0ZS5nZXRNb250aCgpXX1gLFxyXG4gICAgICBkeTogbihkKSxcclxuICAgICAgZGU6IGR0W2RhdGUuZ2V0RGF5KCldLFxyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAodXJsID09PSAndGltZU9mVmlzaXQnKSB7XHJcbiAgICAvLyBnZXQgdGltZSBmb3IgdGhlIHRpbWUgb2YgdmlzaXRcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRpbWU6IGAke2RhdGUuZ2V0SG91cnMoKX06ICR7ZGF0ZS5nZXRNaW51dGVzKCl9OiAke2RhdGUuZ2V0U2Vjb25kcygpfWBcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKHVybCA9PT0gJ25vdycpIHtcclxuICAgIC8vIGdldCB0aW1lIGZvciB0aGUgdGltZSBvZiB2aXNpdFxyXG4gICAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpXHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIGZpbHRlciBudW1iZXIgaWYgZGF0YSBpcyBzaW5nbGUgZGlnaXRcclxuY29uc3QgbiA9IChkKSA9PiB7XHJcbiAgcmV0dXJuIGQgPCAxMCA/IGAwJHtkfWAgOiBkXHJcbn1cclxuXHJcblxyXG5cclxuLy8gc2V0IHRoZSBtb250aCB0byB0aGUgZXhhY3QgbnVtYmVyIGluZGV4IG9mIHRoZSBhcnJheVxyXG5jb25zdCBtbiA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXVxyXG5cclxuLy8gc2V0IHRoZSBkYXkgdG8gdGhlIGV4YWN0IG51bWJlciBpbmRleCBvZiB0aGUgYXJyYXlcclxuY29uc3QgZHQgPSBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddXHJcblxyXG5cclxuXHJcbmxldCByb3V0ZXMgPSBbXHJcbiAgICdob21lJywgJ2Fib3V0JywgJ3Byb2plY3RzJywgJ2NvbnRhY3RzJywgJ3ByaXZhY3knLCAnY3JlZGVudGlhbHMnLCAncHJvamVjdHMvcHJvamVjdHMvbXVzaWMtYXBwJywgJ3Byb2plY3RzL3Jlc2VydmF0aW9uLWFwcCcsICdwcm9qZWN0cy9lbGVjdHJpYy1iaWxsJywgJ3Byb2plY3RzL211c2ljLXBsYXllcjMnLCAncHJvamVjdHMvbXVzaWMtcGxheWVyNCcsICdwcm9qZWN0cy9tdXNpYy1wbGF5ZXI1J11cclxuXHJcbi8vIHRoaXMgZnVuY3Rpb24gd2lsbCBnZW5lcmF0ZSBhIHJldHVybiB0aGUgY3VycmVudCByb3V0ZVxyXG4vLyBmb3IgdGhlIHN0YXRlXHJcbmV4cG9ydCBjb25zdCBjaGVja1JvdXRlID0gKHJvdXRlKSA9PiB7XHJcbiAgIGxldCByID0gcm91dGUuc2xpY2UoMSwgNTApXHJcbiAgIGxldCB1cmwgPSByID09PSAnJyA/ICdob21lJyA6IHJcclxuICAgbGV0IGI7XHJcbiAgIGxldCBhID0gcm91dGVzLmZpbHRlcihyb3V0ZSA9PiB7XHJcbiAgICAgICAgICAgcmV0dXJuIHJvdXRlID09PSB1cmxcclxuICAgICAgICAgfSlcclxuICAgXHJcbiAgIGlmKGFbMF0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBiID0gJ25vdEZvdW5kJ1xyXG4gICB9IGVsc2Uge1xyXG4gICAgICBiID0gYVswXVxyXG4gICB9XHJcbiAgIFxyXG4gICByZXR1cm4gYlxyXG59XHJcbiIsImltcG9ydCB7c2Vzc2lvblN0b3JlLCBnZXRVc2VyRGF0YSwgZ2V0SVAsIGdlbmVyYXRlVXJsLCBnZXRUaW1lLCBjaGVja0lmRXhwfSBmcm9tICcuL2NvbW1vbmZ1bmN0aW9ucydcclxuaW1wb3J0IHtjaGVja1JvdXRlfSBmcm9tICcuLi9jb21tb24vY29tbW9uJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG4vLyBmdW5jdGlvbiB0byBjaGVjayBwYWdlIHNlc3Npb24uIHJldHVybiBib29sZWFuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja2ZvcnNlc3Npb24gKCkge1xyXG4gIFxyXG4gIGNvbnN0IHNlc3Npb24gPSBzZXNzaW9uU3RvcmUoKVxyXG5cclxuICBsZXQgcm91dGUgPSBjaGVja1JvdXRlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSlcclxuICBsZXQgaGFzU2Vzc2lvbjtcclxuICBcclxuICBpZihzZXNzaW9uKSB7XHJcbiAgICBsZXQgaXNFeHAgPSBjaGVja0lmRXhwKHNlc3Npb24udGltZVN0YW1wKVxyXG4gICAgaWYoaXNFeHApe1xyXG4gICAgICBoYXNTZXNzaW9uID0gZmFsc2VcclxuICAgICAgdXBkYXRlU2Vzc2lvbihzZXNzaW9uLl9pZCwgcm91dGUsIHRydWUpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBoYXNTZXNzaW9uID0gdHJ1ZVxyXG4gICAgICB1cGRhdGVTZXNzaW9uKHNlc3Npb24uX2lkLCByb3V0ZSwgZmFsc2UpXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGhhc1Nlc3Npb24gPSBmYWxzZVxyXG4gICAgbGV0IF9pZCA9IGF3YWl0IHNhdmVEYXRhVG9GaXJlYmFzZShyb3V0ZSlcclxuICAgIHNldFNlc3Npb24oX2lkKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGhhc1Nlc3Npb25cclxufVxyXG5cclxuLy8gZnVuY3Rpb250byB1cGRhdGUgdGhlIHNlc3Npb25cclxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlU2Vzc2lvbihpZCwgcm91dGUsIGV4cCkge1xyXG4gIGxldCB1cmwgPSBnZW5lcmF0ZVVybCgndmlzaXRvcicpXHJcbiAgbGV0IHJvdXRlVXJsID0gYCR7dXJsfS8ke2lkfS9yb3V0ZXNWaXNpdGVkL3JvdXRlc1NlZW4uanNvbmBcclxuXHJcbiAgbGV0IHJvdXRlcyA9IGF3YWl0IGdldFJvdXRlc1Zpc2l0ZWQocm91dGVVcmwpXHJcbiAgcm91dGVzLnB1c2gocm91dGUpXHJcblxyXG4gIGF4aW9zLnB1dChgJHt1cmx9LyR7aWR9L3JvdXRlc1Zpc2l0ZWQvcm91dGVzU2Vlbi5qc29uYCwgcm91dGVzKVxyXG4gICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgaWYgKHJlcy5kYXRhKSB7XHJcbiAgICAgICAgaWYgKGV4cCkgc2V0U2Vzc2lvbihpZClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgbmV3IFByb21pc2UucmVqZWN0KGVycilcclxuICAgICAgICBpZiAoZXhwKSBzZXRTZXNzaW9uKGlkKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG4vLyBmdW5jdGlvbiB0byBjb2xsZWN0IHRoZSB2aXNpdGVkIHJvdXRlcyBmcm9tIGZpcmViYXNlXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFJvdXRlc1Zpc2l0ZWQocm91dGVVcmwpIHtcclxuICBsZXQgcm91dGVzID0gW11cclxuICBhd2FpdCBheGlvcy5nZXQocm91dGVVcmwpXHJcbiAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICBpZiAocmVzLmRhdGEpIHtcclxuICAgICAgICByb3V0ZXMgPSByZXMuZGF0YVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICByb3V0ZXMgPSBbJ3RoZXJlIHdhcyBhbiBlcnJvciddXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgcmV0dXJuIGF3YWl0IHJvdXRlc1xyXG59XHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2F2ZURhdGFUb0ZpcmViYXNlKHJvdXRlKSB7XHJcbiAgbGV0IF9pZCA9IGZhbHNlXHJcbiAgbGV0IHVzZXJJcCA9IGF3YWl0IGdldElQKClcclxuICBsZXQgdXNlciA9IGdldFVzZXJEYXRhKClcclxuICBsZXQgdGltZSA9IGdldFRpbWUoJ3RpbWVPZlZpc2l0JylcclxuICBsZXQgcm91dGVzVmlzaXRlZCA9IHtcclxuICAgIGluaXRpYWw6IHJvdXRlLFxyXG4gICAgcm91dGVzU2VlbjogW3JvdXRlXVxyXG4gIH1cclxuXHJcbiAgLy8gZ2VuZXJhdGUgdmlzaXRlZCB1cmxcclxuICBsZXQgdXJsID0gZ2VuZXJhdGVVcmwoJ3Zpc2l0b3InKVxyXG5cclxuICBhd2FpdCBheGlvcy5wb3N0KGAke3VybH0uanNvbmAsIHtcclxuICAgICAgdXNlcklwLFxyXG4gICAgICB1c2VyLFxyXG4gICAgICB0aW1lLFxyXG4gICAgICByb3V0ZXNWaXNpdGVkXHJcbiAgICB9KVxyXG4gICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgaWYgKHJlcy5kYXRhKVxyXG4gICAgICAgIF9pZCA9IHJlcy5kYXRhLm5hbWVcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgaWYgKGVycikgbmV3IFByb21pc2UucmVqZWN0KGVycilcclxuICAgIH0pXHJcbiAgcmV0dXJuIGF3YWl0IF9pZFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U2Vzc2lvbihpZCkge1xyXG4gIGxldCBkYXRhID0ge1xyXG4gICAgX2lzVmlzaXRlZDogdHJ1ZSxcclxuICAgIF9pZDogaWQsXHJcbiAgICB0aW1lU3RhbXA6IGdldFRpbWUoJ25vdycpLFxyXG4gIH1cclxuICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd3ZWJzZXNzaW9uJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5pbWVqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcmFtZXItbW90aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidWEtcGFyc2VyLWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9