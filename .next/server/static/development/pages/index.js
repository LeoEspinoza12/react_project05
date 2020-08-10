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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ "./src/components/NeedHelp/NeedHelp.js":
/*!*********************************************!*\
  !*** ./src/components/NeedHelp/NeedHelp.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_context_pageContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/context/pageContext */ "./src/utils/context/pageContext.js");
/* harmony import */ var _TitleBlock_TitleBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TitleBlock/TitleBlock */ "./src/components/NeedHelp/TitleBlock/TitleBlock.js");
/* harmony import */ var _Buttons_Buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Buttons/Buttons */ "./src/components/Buttons/Buttons.js");
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\NeedHelp\\NeedHelp.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function NeedHelp() {
  const {
    needHelp
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_utils_context_pageContext__WEBPACK_IMPORTED_MODULE_1__["PageData"]);
  return __jsx("section", {
    className: "needhelp-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "needhelp-background",
    style: {
      background: `url('${needHelp.background}') repeat center top`
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("article", {
    className: "needhelp-text-block text-span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "needhelp-title-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(_TitleBlock_TitleBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: needHelp,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }), __jsx("p", {
    className: "sub-reveal-container desc show",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "sub-reveal btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }, __jsx(_Buttons_Buttons__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: needHelp.messagetext,
    type: needHelp.type,
    withSvg: needHelp.withSvg,
    btnType: needHelp.btnType,
    link: needHelp.link,
    colors: needHelp.color,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (NeedHelp);

/***/ }),

/***/ "./src/components/NeedHelp/TitleBlock/TitleBlock.js":
/*!**********************************************************!*\
  !*** ./src/components/NeedHelp/TitleBlock/TitleBlock.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\NeedHelp\\TitleBlock\\TitleBlock.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function TitleBlock(props) {
  let title = props.data.title.map((t, i) => {
    return __jsx("span", {
      className: "show-container show",
      key: i,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "reveal",
      style: {
        color: props.data.textColors.primary
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }
    }, t), __jsx("div", {
      className: "runner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }
    }));
  });
  return __jsx("div", {
    className: "needhelp-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: "head2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, title), __jsx("p", {
    className: "sub-reveal-container desc show",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "sub-reveal",
    style: {
      color: props.data.textColors.secondary
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, props.data.shortDesc)));
}

/* harmony default export */ __webpack_exports__["default"] = (TitleBlock);

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

/***/ "./src/components/ShortProjectView/ShortProjectView.js":
/*!*************************************************************!*\
  !*** ./src/components/ShortProjectView/ShortProjectView.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _projects_Projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects/Projects */ "./src/components/ShortProjectView/projects/Projects.js");
/* harmony import */ var _utils_context_pageContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/context/pageContext */ "./src/utils/context/pageContext.js");
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\ShortProjectView\\ShortProjectView.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function ShortProjectView() {
  const {
    listofprojects
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_utils_context_pageContext__WEBPACK_IMPORTED_MODULE_2__["PageData"]);

  let projects = __jsx(_projects_Projects__WEBPACK_IMPORTED_MODULE_1__["default"], {
    projects: listofprojects,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 18
    }
  });

  return __jsx("section", {
    className: "section-container short-project-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, projects);
}

/* harmony default export */ __webpack_exports__["default"] = (ShortProjectView);

/***/ }),

/***/ "./src/components/ShortProjectView/projects/Image.js":
/*!***********************************************************!*\
  !*** ./src/components/ShortProjectView/projects/Image.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\ShortProjectView\\projects\\Image.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Image(props) {
  return __jsx("div", {
    className: "project-img-desc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "sub-reveal-container project-image show",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "sub-reveal project-img",
    style: {
      background: `url('${props.phototeaser}') no-repeat center top`,
      backgroundSize: 'cover'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, " ")), __jsx("div", {
    className: "img-backer",
    style: {
      backgroundColor: props.bkgColor
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/ShortProjectView/projects/ProjectLink.js":
/*!*****************************************************************!*\
  !*** ./src/components/ShortProjectView/projects/ProjectLink.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_context_stateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/context/stateContext */ "./src/utils/context/stateContext.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\ShortProjectView\\projects\\ProjectLink.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function ProjectLink(props) {
  const {
    setTransitionState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_utils_context_stateContext__WEBPACK_IMPORTED_MODULE_1__["StateContext"]); // set transition state

  const click = () => {
    setTransitionState('bottom');
  };

  return __jsx("div", {
    className: "project-text-alignright",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `${props.internallinks}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("button", {
    type: "button",
    className: "content-center button-wrapper",
    onClick: click,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "",
    style: {
      color: props.textcolor
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "View project")))));
}

/* harmony default export */ __webpack_exports__["default"] = (ProjectLink);

/***/ }),

/***/ "./src/components/ShortProjectView/projects/Projects.js":
/*!**************************************************************!*\
  !*** ./src/components/ShortProjectView/projects/Projects.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Image */ "./src/components/ShortProjectView/projects/Image.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Title */ "./src/components/ShortProjectView/projects/Title.js");
/* harmony import */ var _utils_pageanimations_projectHover_ProjectHoverAnimation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/pageanimations/projectHover/ProjectHoverAnimation */ "./src/utils/pageanimations/projectHover/ProjectHoverAnimation.js");
/* harmony import */ var _ProjectLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectLink */ "./src/components/ShortProjectView/projects/ProjectLink.js");
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\ShortProjectView\\projects\\Projects.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Projects(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    resizeEls();
    window.addEventListener('resize', resizeEls);
    return () => {
      window.removeEventListener('resize', resizeEls);
    };
  });
  let projects = props.projects.map((proj, i) => {
    return __jsx("div", {
      className: "short-project-wrapper",
      style: {
        background: `url('${proj.theme}') no-repeat center center`
      },
      key: i,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 8
      }
    }, __jsx("div", {
      className: "projects-wrapper",
      onMouseLeave: e => Object(_utils_pageanimations_projectHover_ProjectHoverAnimation__WEBPACK_IMPORTED_MODULE_3__["mouseOut"])(e),
      onMouseEnter: e => Object(_utils_pageanimations_projectHover_ProjectHoverAnimation__WEBPACK_IMPORTED_MODULE_3__["mouseEnter"])(e, proj.bkgColor),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }
    }, __jsx(_Image__WEBPACK_IMPORTED_MODULE_1__["default"], {
      phototeaser: proj.photo.teaser,
      bkgColor: proj.bkgColor,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }
    }), __jsx("div", {
      className: "project-text-desc",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "project-text-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }
    }, __jsx(_Title__WEBPACK_IMPORTED_MODULE_2__["default"], {
      primarycolor: proj.textColors.primary,
      secondarycolor: proj.textColors.secondary,
      title: proj.title,
      shortDesc: proj.shortDesc,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 15
      }
    }), __jsx(_ProjectLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
      internallinks: proj.projectlinks.internal,
      textcolor: proj.btnTextColor,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 15
      }
    })))));
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, projects);
}

/* harmony default export */ __webpack_exports__["default"] = (Projects);

const resizeEls = () => {
  Object(_utils_pageanimations_projectHover_ProjectHoverAnimation__WEBPACK_IMPORTED_MODULE_3__["resize"])();
};

/***/ }),

/***/ "./src/components/ShortProjectView/projects/Title.js":
/*!***********************************************************!*\
  !*** ./src/components/ShortProjectView/projects/Title.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\components\\ShortProjectView\\projects\\Title.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Title(props) {
  return __jsx("div", {
    className: "project-text-alignleft",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("h3", {
    className: "p-wrapper head2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "show-container p-container show",
    style: {
      color: props.primarycolor
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "reveal p-reveal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, props.title), __jsx("div", {
    className: "runner p-runner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }))), __jsx("p", {
    className: "sub-reveal-container p-desc desc show",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "sub-reveal p-desc-content",
    style: {
      color: props.secondarycolor
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, props.shortDesc)));
}

/* harmony default export */ __webpack_exports__["default"] = (Title);

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

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
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
/* harmony import */ var _components_ShortProjectView_ShortProjectView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ShortProjectView/ShortProjectView */ "./src/components/ShortProjectView/ShortProjectView.js");
/* harmony import */ var _components_NeedHelp_NeedHelp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/NeedHelp/NeedHelp */ "./src/components/NeedHelp/NeedHelp.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Footer/Footer */ "./src/components/Footer/Footer.js");
/* harmony import */ var _utils_common_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/common/common */ "./src/utils/common/common.js");
/* harmony import */ var _utils_pageanimations_scrollanimation_scrollanimation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/pageanimations/scrollanimation/scrollanimation */ "./src/utils/pageanimations/scrollanimation/scrollanimation.js");
/* harmony import */ var _utils_context_pageContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/context/pageContext */ "./src/utils/context/pageContext.js");
/* harmony import */ var _utils_context_stateContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/context/stateContext */ "./src/utils/context/stateContext.js");
/* harmony import */ var _utils_pageanimations_motion_mainvariant__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/pageanimations/motion/mainvariant */ "./src/utils/pageanimations/motion/mainvariant.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_15__);
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

















function Home() {
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
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, "Aiman Adlawan | Official Website"), __jsx("link", {
    rel: "icon",
    href: "/images/brand-icon-logo.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(_components_TopLayover_TopLayover__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "main-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx(_utils_context_pageContext__WEBPACK_IMPORTED_MODULE_12__["PageDataContext"], {
    pagesets: 'home',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, __jsx(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }), __jsx(_components_MenuContainer_MenuContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }), __jsx("main", {
    className: "main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }), __jsx(_components_SectionBlocks_SectionBlocks__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "project",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }), __jsx(_components_ShortProjectView_ShortProjectView__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }), __jsx(_components_SectionBlocks_SectionBlocks__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "view more",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }), __jsx(_components_NeedHelp_NeedHelp__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }), __jsx(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

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

/***/ "./src/utils/pageanimations/projectHover/ProjectHoverAnimation.js":
/*!************************************************************************!*\
  !*** ./src/utils/pageanimations/projectHover/ProjectHoverAnimation.js ***!
  \************************************************************************/
/*! exports provided: mouseEnter, mouseOut, resize, resizeEl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseEnter", function() { return mouseEnter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseOut", function() { return mouseOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resize", function() { return resize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeEl", function() { return resizeEl; });
/* harmony import */ var _common_elementSorter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/elementSorter */ "./src/utils/common/elementSorter.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animejs */ "animejs");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_1__);

 // function to run when mouse enters the project element

function mouseEnter(e, color) {
  e.stopPropagation();
  const el = Object(_common_elementSorter__WEBPACK_IMPORTED_MODULE_0__["hoverProjectEl"])(e.target);

  if (window.innerWidth > 868) {
    animejs__WEBPACK_IMPORTED_MODULE_1___default()({
      targets: el.img,
      scale: 1.05,
      duration: 300,
      easing: 'easeOutSine'
    });
    animejs__WEBPACK_IMPORTED_MODULE_1___default()({
      targets: el.img_backer,
      opacity: 0,
      duration: 300,
      easing: 'easeOutSine'
    });
    animejs__WEBPACK_IMPORTED_MODULE_1___default()({
      targets: [el.title, el.desc],
      opacity: 0,
      translateY: '30%',
      duration: 300,
      easing: 'easeOutSine'
    });
    animejs__WEBPACK_IMPORTED_MODULE_1___default()({
      targets: el.button,
      opacity: 1,
      background: color,
      duration: 300,
      easing: 'easeOutSine'
    });
  }
} // function to run then mouse leaves the project element

function mouseOut(e) {
  e.stopPropagation();
  const el = Object(_common_elementSorter__WEBPACK_IMPORTED_MODULE_0__["hoverProjectEl"])(e.target);

  if (window.innerWidth > 868) {
    animejs__WEBPACK_IMPORTED_MODULE_1___default()({
      targets: el.img,
      scale: 1,
      duration: 300,
      easing: 'easeOutSine'
    });
    animejs__WEBPACK_IMPORTED_MODULE_1___default()({
      targets: el.img_backer,
      opacity: 0.8,
      duration: 300,
      easing: 'easeOutSine'
    });
    animejs__WEBPACK_IMPORTED_MODULE_1___default()({
      targets: [el.title, el.desc],
      opacity: 1,
      translateY: '0%',
      duration: 300,
      easing: 'easeOutSine'
    });
    animejs__WEBPACK_IMPORTED_MODULE_1___default()({
      targets: el.button,
      opacity: 0,
      duration: 300,
      easing: 'easeOutSine'
    });
  }
} // function to run for resizing or when page loads

function resize() {
  resizeEl();
} // resize the elements in the short project page.

function resizeEl() {
  const p = document.querySelectorAll('.projects-wrapper');

  if (window.innerWidth <= 868) {
    for (let x = 0; x < 3; x++) {
      let el = Object(_common_elementSorter__WEBPACK_IMPORTED_MODULE_0__["hoverProjectEl"])(p[x]);
      el.img_backer.style.opacity = 0;
      el.img.style.opacity = 1;
      el.button.style.opacity = 1;
      el.button.style.background = 'none';
    }
  } else {
    const p = document.querySelectorAll('.projects-wrapper');

    for (let x = 0; x < 3; x++) {
      let el = Object(_common_elementSorter__WEBPACK_IMPORTED_MODULE_0__["hoverProjectEl"])(p[x]); // el.img_backer.style.opacity = 0.8
      // el.button.style.opacity = 0
    }
  }
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

/***/ 4:
/*!**********************************!*\
  !*** multi ./src/pages/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\Web Dev\Main Files\Official Website\newdesign\Main\src\pages\index.js */"./src/pages/index.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9ucy9CdXR0b25zLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0J1dHRvbnMvV2l0aEJveC9XaXRoQm94LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVySXRlbS9Db3B5UmlnaHQvQ29weVJpZ2h0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlckl0ZW0vU29jaWFsSWNvbnMvU29jaWFsSWNvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVyby9IZXJvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9TY3JvbGxCdG4vU2Nyb2xsQnRuLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9Tb2NpYWxJY29uL1NvY2lhbEljb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyVGV4dEJsb2NrL0hlYWRlclRleHRCbG9jay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NZW51Q29udGFpbmVyL01lbnVDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVudUNvbnRhaW5lci9NZW51UnVubmVyL01lbnVSdW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVudUNvbnRhaW5lci9NZW51V3JhcHBlci9NZW51V3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NZW51TGlzdC9Gb290ZXJNZW51L0Zvb3Rlck1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVudUxpc3QvVG9wTWVudUxpc3QvTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdmJhci9OYXZiYXJMb2dvL05hdmJhckxvZ28uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhck1lbnUvTmF2YmFyTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OZWVkSGVscC9OZWVkSGVscC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OZWVkSGVscC9UaXRsZUJsb2NrL1RpdGxlQmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbkJsb2Nrcy9Db21wb25lbnRzL0Rlc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb25CbG9ja3MvQ29tcG9uZW50cy9UaXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uQmxvY2tzL1NlY3Rpb25CbG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2hvcnRQcm9qZWN0Vmlldy9TaG9ydFByb2plY3RWaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Nob3J0UHJvamVjdFZpZXcvcHJvamVjdHMvSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2hvcnRQcm9qZWN0Vmlldy9wcm9qZWN0cy9Qcm9qZWN0TGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaG9ydFByb2plY3RWaWV3L3Byb2plY3RzL1Byb2plY3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Nob3J0UHJvamVjdFZpZXcvcHJvamVjdHMvVGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3ViUGFyYWdyYXBocy9QYXJhZ3JhcGhMaW5rcy9QYXJhZ3JhcGhMaW5rcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdWJQYXJhZ3JhcGhzL1N1YnBhcmFncmFwaHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3Zncy9CcmFuZExvZ28vQnJhbmRMb2dvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1N2Z3MvQ2xvc2UvQ2xvc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3Zncy9Mb2dvcy9Mb2dvcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdmdzL0xvZ29zL1Njcm9sbFN2Z3MvQXJyb3dSaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdmdzL0xvZ29zL1Njcm9sbFN2Z3MvQmVoYW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdmdzL0xvZ29zL1Njcm9sbFN2Z3MvRHJpYmJibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3Zncy9Mb2dvcy9TY3JvbGxTdmdzL0VudmVsb3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3Zncy9Mb2dvcy9TY3JvbGxTdmdzL0dpdGh1Yi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdmdzL0xvZ29zL1Njcm9sbFN2Z3MvV2l0aFRleHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1N2Z3MvU29jaWFscy9Tb2NpYWwvQmVoYW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdmdzL1NvY2lhbHMvU29jaWFsL0RyaWJiYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1N2Z3MvU29jaWFscy9Tb2NpYWwvR29vZHJlYWRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1N2Z3MvU29jaWFscy9Tb2NpYWwvTGlua2VkaW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3Zncy9Tb2NpYWxzL1NvY2lhbC9Ud2l0dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1N2Z3MvU29jaWFscy9Tb2NpYWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RvcExheW92ZXIvVG9wTGF5b3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9DcmVkZW50aWFsL0NyZWRlbnRpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvQ3JlZGVudGlhbC9jb21wb25lbnRzL0NyZWRlbnRpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvQ3JlZGVudGlhbC9jb21wb25lbnRzL1FyQ29kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NvbW1vbi9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NvbW1vbi9lbGVtZW50U29ydGVyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb250ZXh0L3BhZ2VDb250ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb250ZXh0L3N0YXRlQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZGF0YS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvcGFnZWFuaW1hdGlvbnMvbW90aW9uL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvcGFnZWFuaW1hdGlvbnMvbW90aW9uL21haW52YXJpYW50LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9wYWdlYW5pbWF0aW9ucy9tb3Rpb24vdG9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3BhZ2VhbmltYXRpb25zL25hdmJhcm1lbnUvbWVudUNsaWNrRXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9wYWdlYW5pbWF0aW9ucy9uYXZiYXJtZW51L21lbnVIb3ZlckV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvcGFnZWFuaW1hdGlvbnMvbmF2YmFybWVudS9tZW51TGlzdEV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvcGFnZWFuaW1hdGlvbnMvbmF2YmFybWVudS9uYXZiYXJ0cmFuc2l0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9wYWdlYW5pbWF0aW9ucy9wcm9qZWN0SG92ZXIvUHJvamVjdEhvdmVyQW5pbWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9wYWdlYW5pbWF0aW9ucy9zY3JvbGxhbmltYXRpb24vc2Nyb2xsRG93bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvcGFnZWFuaW1hdGlvbnMvc2Nyb2xsYW5pbWF0aW9uL3Njcm9sbGFuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvcGFnZWFuaW1hdGlvbnMvdG9wbGF5b3Zlci90b3BsYXlvdmVyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9zZXNzaW9uZGF0YS9jb21tb25mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3Nlc3Npb25kYXRhL3Nlc3Npb25TdG9yYWdlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuaW1lanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZyYW1lci1tb3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVhLXBhcnNlci1qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIl0sIm5hbWVzIjpbInVybCIsIm9yaWdpbiIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImhyZWYiLCJhcyIsInJlc3VsdCIsImZvcm1hdEZ1bmMiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJvYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImdldE9ic2VydmVyIiwiY29uc29sZSIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicCIsIm1lbW9pemVkRm9ybWF0VXJsIiwiZm9ybWF0VXJsIiwiYXNIcmVmIiwiZSIsIm5vZGVOYW1lIiwidGFyZ2V0IiwiaXNMb2NhbCIsInNjcm9sbCIsIlJvdXRlciIsInNoYWxsb3ciLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJwcm9wcyIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0UGF0aHMiLCJyZXNvbHZlZEhyZWYiLCJwYXJzZWRBcyIsImhhbmRsZVJlZiIsInJlZiIsImlzUHJlZmV0Y2hlZCIsInByZWZldGNoIiwicGF0aHMiLCJlcnIiLCJyZW5kZXIiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJlbCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5Iiwib25DbGljayIsInByb2Nlc3MiLCJSZWFjdCIsIndhcm4iLCJQcm9wVHlwZXMiLCJyZXF1aXJlIiwiZXhhY3QiLCJMaW5rIiwicmVwbGFjZSIsInBhc3NIcmVmIiwidmFsdWUiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZ2V0IiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudCIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwicGF0aCIsInByZXBhcmVSb3V0ZSIsInRvUm91dGUiLCJhdHRlbXB0cyIsImlzU2VydmVyUmVuZGVyIiwicGF0aG5hbWUiLCJhZGRCYXNlUGF0aCIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiZGVsQmFzZVBhdGgiLCJjcmVkZW50aWFscyIsInJlcyIsImdldFJlc3BvbnNlIiwiZGF0YSIsInJvdXRlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIlByb21pc2UiLCJmZXRjaE5leHREYXRhIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJ1cGRhdGUiLCJtb2QiLCJuZXdEYXRhIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJvcHRpb25zIiwiY2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJlc29sdmUiLCJtZXRob2QiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsIm1pc3NpbmdQYXJhbXMiLCJwYXJhbSIsInJlamVjdCIsImFzUGF0aG5hbWUiLCJyb3V0ZUluZm8iLCJlcnJvciIsImFwcENvbXAiLCJjaGFuZ2VTdGF0ZSIsImdldFJvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwicGFnZSIsImdpcEVyciIsImlzVmFsaWRFbGVtZW50VHlwZSIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJoYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiY2FuY2VsbGVkIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJURVNUX1JPVVRFIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwiZXNjYXBlZFJvdXRlIiwiZXNjYXBlUmVnZXgiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiaXNPcHRpb25hbCIsIiQxIiwiaXNDYXRjaEFsbCIsInBvcyIsInJlcGVhdCIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwia2V5IiwibmFtZWRSZWdleCIsInVzZWQiLCJwcm90b2NvbCIsImhvc3RuYW1lIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiQnV0dG9ucyIsImJ1dHRvbiIsInR5cGUiLCJjb2xvcnMiLCJidG5UeXBlIiwibGluayIsInRleHQiLCJ3aXRoU3ZnIiwiV2l0aEJveCIsInNldFRyYW5zaXRpb25TdGF0ZSIsInVzZUNvbnRleHQiLCJTdGF0ZUNvbnRleHQiLCJzdmciLCJjbGljayIsIkZvb3RlciIsInF1b3RlcyIsIlBhZ2VEYXRhIiwic2hvdyIsInF1b3RlIiwiYXV0aG9yIiwiQ29weVJpZ2h0IiwiZnJvbSIsImZyb21Ub3AiLCJjbG9zZW5hdmJhciIsImNsb3NlTWVudSIsImZhZGVOYXZiYXIiLCJjb2xvciIsInBDb2xvciIsIlNvY2lhbEljb25zIiwic29jaWFscyIsInNvY2lhbHNJY29uIiwibWFwIiwic29jaWFsIiwiaSIsImNvbG9yTW9kZSIsImNvbnRhaW5lciIsIkhlYWRlciIsImhlYWRlcnMiLCJoZWFkZXJDb250ZW50IiwiYmFja2dyb3VuZCIsIndpdGhJbWFnZSIsImlzVHJ1ZSIsInN1YlBhcmFncmFwaCIsIndpdGhDcmVkZW50aWFscyIsIndpdGhTb2NpYWxzIiwid2l0aFNjcm9sbEJ1dHRvbiIsImNvbG9ybW9kZXMiLCJjbG9zZSIsIkhlcm8iLCJpbWciLCJjb250ZXh0IiwiaW1hZ2UiLCJTY3JvbGxCdG4iLCJzY3JvbGxEb3duIiwiU29jaWFsSWNvbiIsIkhlYWRlclRleHRCbG9jayIsImhlYWRlclRleHQiLCJ0aXRsZSIsInRleHRDb2xvcnMiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwiZm9udFdlaWdodCIsInNob3J0RGVzYyIsIk1lbnVDb250YWluZXIiLCJNZW51UnVubmVyIiwiTWVudVdyYXBwZXIiLCJGb290ZXJNZW51IiwibWVudXMiLCJtZW51c0xpc3QiLCJtZW51IiwiTWVudSIsInN0YXRlIiwic2V0QWN0aXZlUm91dGUiLCJjdXJyZW50Um91dGUiLCJjaGVja1JvdXRlIiwidXNlUm91dGVyIiwic2V0VGltZW91dCIsIm1lbnVMaXN0IiwiYWN0aXZlUm91dGUiLCJtb3VzZUVudGVyIiwibW91c2VPdXQiLCJOYXZiYXIiLCJOYXZiYXJMb2dvIiwibWVudUlzT3BlbiIsIm9wZW4iLCJmb3JlZ3JvdW5kIiwiTmF2YmFyTWVudSIsInNldFN0YXRlIiwiaG92ZXJJbiIsImhvdmVyT3V0IiwibWVudUlzQW5pbWF0aW5nIiwib3Blbk1lbnUiLCJzY2FsZSIsIk5lZWRIZWxwIiwibmVlZEhlbHAiLCJtZXNzYWdldGV4dCIsIlRpdGxlQmxvY2siLCJ0IiwiRGVzY3JpcHRpb24iLCJ0ZXh0Y29sb3IiLCJkZXNjIiwid2l0aEFycm93IiwiVGl0bGUiLCJTZWN0aW9uQmxvY2tzIiwid2l0aEJsb2NrcyIsInByb2plY3RCbG9ja3MiLCJmaW5kRGF0YSIsImJsb2NrcyIsImJsb2NrVGl0bGUiLCJibG9ja0Rlc2MiLCJiYWNrZ3JvdW5kQ29sb3IiLCJTaG9ydFByb2plY3RWaWV3IiwibGlzdG9mcHJvamVjdHMiLCJwcm9qZWN0cyIsIkltYWdlIiwicGhvdG90ZWFzZXIiLCJiYWNrZ3JvdW5kU2l6ZSIsImJrZ0NvbG9yIiwiUHJvamVjdExpbmsiLCJpbnRlcm5hbGxpbmtzIiwiUHJvamVjdHMiLCJ1c2VFZmZlY3QiLCJyZXNpemVFbHMiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInByb2oiLCJ0aGVtZSIsInBob3RvIiwidGVhc2VyIiwicHJvamVjdGxpbmtzIiwiaW50ZXJuYWwiLCJidG5UZXh0Q29sb3IiLCJyZXNpemUiLCJwcmltYXJ5Y29sb3IiLCJzZWNvbmRhcnljb2xvciIsIlBhcmFncmFwaExpbmtzIiwiZXhpdE1vZGUiLCJpc1RyYW5zaXRpb25pbmciLCJhbmltYXRpb24iLCJTdWJwYXJhZ3JhcGhzIiwic2VjdGlvbnMiLCJjb250ZW50Iiwic3BlY2lhbExpbmtzIiwiQnJhbmRMb2dvIiwiQ2xvc2UiLCJTY3JvbGwiLCJXaXRob3V0VGV4dCIsIkJlaGFuY2UiLCJEcmliYmJsZSIsIkVudmVsb3AiLCJHaXRodWIiLCJXaXRoVGV4dHMiLCJkYXJrQ29sb3IiLCJsaWdodENvbG9yIiwiR29vZHJlYWRzIiwiTGlua2VkIiwiVHdpdHRlciIsIlNvY2lhbHMiLCJzb2MiLCJzIiwiaWNvbiIsIlRvcExheW92ZXIiLCJ0b3BBbmltIiwibG9nb0FuaW0iLCJDcmVkZW50aWFsIiwiY291cnNlcyIsImNvdXJzZSIsImNlcnRMaW5rIiwicXJDb2RlIiwic2Nob29sIiwidGFrZW4iLCJkYXRlIiwiUXJDb2RlIiwiSG9tZSIsInNjcm9sbEFuaW1hdGlvbiIsImRlYm91bmNlIiwidmFyaWFudHMiLCJyZXNpemVFbCIsInJlc2l6ZUVsZW1lbnRzIiwidyIsImlubmVyV2lkdGgiLCJtYWluX2NvbnRhaW5lciIsInN0eWxlIiwid2lkdGgiLCJuYXZiYXJfY29udGFpbmVyIiwibWVudV9jb250YWluZXIiLCJtZW51X3dyYXBwZXIiLCJtZW51X3J1bm5lciIsInRvcF9jb250YWluZXIiLCJyb3V0ZXMiLCJyIiwic2xpY2UiLCJiIiwiYSIsImZpbHRlciIsInVuZGVmaW5lZCIsInFFbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJxdWVyeVNlbGVjdG9yIiwibmF2SG92ZXJFbGVtZW50cyIsIm1pZGRsZSIsImNsb3NlX3BhdGhzIiwiZnJvbnQiLCJsb2dvRWxlbWVudHMiLCJsIiwibWVudUNsaWNrRWxlbWVudHMiLCJtZW51X3J1bm5lcnMiLCJzcXVhcmVfaW1nIiwicmlnaHRfaWNvbnMiLCJtZW51X2xpc3RfY29udGFpbmVyIiwiY29weXJpZ2h0X3J1bm5lciIsInNvY2lhbF9uYXZpY29ucyIsInRleHRfYWN0aXZlIiwiYmFja2VyX2FjdGl2ZSIsInNlY3Rpb25fYmxvY2siLCJzaG9ydF9wcm9qZWN0IiwidG9wTGF5b3ZlckVsZW1lbnRzIiwicnVubmVyIiwidG9wIiwicHJvamVjdFJlc2l6ZUVsIiwiaW1nX2Rlc2MiLCJwcm9qZWN0X2ltZyIsImltZ19iYWNrZXIiLCJwcm9qZWN0X3RleHRfZGVzYyIsImhvdmVyUHJvamVjdEVsIiwicGFyZW50IiwiY2xvc2VzdCIsImNyZWF0ZUNvbnRleHQiLCJQYWdlRGF0YUNvbnRleHQiLCJzb3J0UHJvcHMiLCJwYWdlc2V0cyIsInByb2plY3RzZXRzIiwiU3RhdGVQcm92aWRlciIsIm5ld1N0YXRlIiwibW9kZSIsImFuaW1tb2RlIiwic2V0QXBwbGljYXRpb25TdGF0ZSIsImxpc3RzIiwibGlzdCIsImhvbWUiLCJhYm91dCIsImNvbnRhY3RzIiwicHJpdmFjeSIsIm5vdGZvdW5kIiwiaW5pdGlhbCIsImVudGVyIiwidG9wRXhpdCIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJib3R0b21FeGl0IiwiZHVyYXRpb24iLCJlYXNpbmciLCJpbml0QW5pbWF0ZSIsImluaXRpYWxPbmUiLCJpbml0aWFsVHdvIiwidG9wQW5pbWF0aW9uIiwiYm90dG9tQW5pbWF0aW9uIiwiZWFzZSIsInJpZ2h0IiwibGVmdCIsImZsb2F0Iiwib3ZlcmZsb3ciLCJkaXNwbGF5IiwidHJhbnNmb3JtIiwic2V0RGlzcGxheSIsIngiLCJhbmltZSIsInRhcmdldHMiLCJjb21wbGV0ZSIsImFuaW0iLCJ0cmFuc2xhdGVZIiwiY2xvc2VDb250YWluZXIiLCJ0bCIsInRpbWVsaW5lIiwiYWRkIiwiY29sb3JNb2RlcyIsImZpbGwiLCJiZWdpbiIsImhlaWdodCIsImJhY2tlciIsImVsZW1lbnRQYXJlbnQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFuaW1hdGVGb250cyIsInBhcmVudEVsZW1lbnQiLCJ5IiwibiIsInN0b3BQcm9wYWdhdGlvbiIsImh0bWwiLCJib2R5IiwibW92ZVRvIiwiaW5uZXJIZWlnaHQiLCJzY3JvbGxUb3AiLCJzbGlkZUluQW5pbWF0aW9uIiwiZnVuYyIsIndhaXQiLCJ0aW1lb3V0IiwiZXhlY3V0ZWRGdW5jdGlvbiIsImFyZ3MiLCJsYXRlciIsImNsZWFyVGltZW91dCIsImVscyIsImZvckVhY2giLCJzbGlkZUluQXQiLCJzY3JvbGxZIiwiY2xpZW50SGVpZ2h0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaXNQYXNzZWQiLCJlbElzTm90RG9uZSIsImVsQ2hpbGRyZW4iLCJpc1Byb2plY3RJbWFnZSIsImlzTWVzc2FnZUNvbnQiLCJyZW1vdmVPdmVybGF5IiwibGVuZ3RoIiwic2hvd1NsaWRlciIsInNldFRpbWVyIiwic2hvd09wYWNpdHkiLCJzbGlkZVVwIiwiaGFzSGVhZGVyQ2xhc3MiLCJoYXNTY3JvbGxDbGFzcyIsImludHJvQW5pbSIsImhhc1Nlc3Npb24iLCJydW5Ub3BBbmltYXRpb24iLCJvcGVuVG9wTGF5ZXIiLCJjbG9zZVRvcExheWVyIiwibmF2Iiwic2Vzc2lvblN0b3JlIiwic2Vzc2lvbiIsInNlc3Npb25TdG9yYWdlIiwid2Vic2Vzc2lvbiIsIkpTT04iLCJwYXJzZSIsImZpcmViYXNlVXJsIiwiZ2VuZXJhdGVVcmwiLCJ1cmxEaXJlY3Rpb24iLCJkIiwiZ2V0VGltZSIsImR5IiwiZGUiLCJnZXRVc2VyRGF0YSIsInBhcnNlciIsIlVBUGFyc2VyIiwiZ2V0UmVzdWx0IiwiZ2V0SVAiLCJ1c2VySXAiLCJheGlvcyIsInRoZW4iLCJzdGF0dXMiLCJjYXAiLCJjb3VudHJ5X2NhcGl0YWwiLCJjaXR5IiwiY291bnRyeSIsImNvdW50cnlfbmFtZSIsImlwIiwibGF0IiwibGF0aXR1ZGUiLCJsb25nIiwibG9uZ2l0dWRlIiwidGltZVoiLCJ0aW1lem9uZSIsInJlZ2lvbiIsInBvc3RDIiwicG9zdGFsIiwiaW50ZXJuZXQiLCJvcmciLCJjYXRjaCIsImJsb2NrZWQiLCJjaGVja0lmRXhwIiwidGltZSIsIm5vdyIsInJ1blRpbWUiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwiZ2V0RGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsIm1uIiwiZHQiLCJnZXREYXkiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwiY2hlY2tmb3JzZXNzaW9uIiwibG9jYXRpb24iLCJpc0V4cCIsInRpbWVTdGFtcCIsInVwZGF0ZVNlc3Npb24iLCJfaWQiLCJzYXZlRGF0YVRvRmlyZWJhc2UiLCJzZXRTZXNzaW9uIiwiaWQiLCJleHAiLCJyb3V0ZVVybCIsImdldFJvdXRlc1Zpc2l0ZWQiLCJwdXQiLCJ1c2VyIiwicm91dGVzVmlzaXRlZCIsInJvdXRlc1NlZW4iLCJwb3N0IiwiX2lzVmlzaXRlZCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFD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bEIsRUFBMEI7QUFDNUIyaUIsVUFENEI7QUFFNUJxRCxRQUY0QjtBQUc1QjdCLFFBSDRCO0FBSTVCOEI7QUFKNEIsR0FBMUIsRUFNSHBELElBTkcsQ0FNRW5jLEdBQUcsSUFBSTtBQUNYLFFBQUlBLEdBQUcsQ0FBQ0UsSUFBUixFQUNFNGUsR0FBRyxHQUFHOWUsR0FBRyxDQUFDRSxJQUFKLENBQVNwQixJQUFmO0FBQ0gsR0FURyxFQVVId2UsS0FWRyxDQVVHbGhCLEdBQUcsSUFBSTtBQUNaLFFBQUlBLEdBQUosRUFBUyxJQUFJNEUsT0FBTyxDQUFDcUIsTUFBWixDQUFtQmpHLEdBQW5CO0FBQ1YsR0FaRyxDQUFOO0FBYUEsU0FBTyxNQUFNMGlCLEdBQWI7QUFDRDs7QUFFTSxTQUFTRSxVQUFULENBQW9CQyxFQUFwQixFQUF3QjtBQUM3QixNQUFJL2UsSUFBSSxHQUFHO0FBQ1R3ZixjQUFVLEVBQUUsSUFESDtBQUVUWixPQUFHLEVBQUVHLEVBRkk7QUFHVEwsYUFBUyxFQUFFbkQsZ0VBQU8sQ0FBQyxLQUFEO0FBSFQsR0FBWDtBQUtBUixnQkFBYyxDQUFDMEUsT0FBZixDQUF1QixZQUF2QixFQUFxQ3hFLElBQUksQ0FBQ3lFLFNBQUwsQ0FBZTFmLElBQWYsQ0FBckM7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFHRCxvQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiZGVjbGFyZSBjb25zdCBfX05FWFRfREFUQV9fOiBhbnlcblxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCByZXNvbHZlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQcmVmZXRjaE9wdGlvbnMgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyBhZGRCYXNlUGF0aCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuXG5mdW5jdGlvbiBpc0xvY2FsKGhyZWY6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCB1cmwgPSBwYXJzZShocmVmLCBmYWxzZSwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gcGFyc2UoZ2V0TG9jYXRpb25PcmlnaW4oKSwgZmFsc2UsIHRydWUpXG5cbiAgcmV0dXJuIChcbiAgICAhdXJsLmhvc3QgfHwgKHVybC5wcm90b2NvbCA9PT0gb3JpZ2luLnByb3RvY29sICYmIHVybC5ob3N0ID09PSBvcmlnaW4uaG9zdClcbiAgKVxufVxuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBGb3JtYXRSZXN1bHQgPSB7IGhyZWY6IHN0cmluZzsgYXM/OiBzdHJpbmcgfVxuXG5mdW5jdGlvbiBtZW1vaXplZEZvcm1hdFVybChmb3JtYXRGdW5jOiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4gRm9ybWF0UmVzdWx0KSB7XG4gIGxldCBsYXN0SHJlZjogbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RBczogdW5kZWZpbmVkIHwgbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RSZXN1bHQ6IG51bGwgfCBGb3JtYXRSZXN1bHQgPSBudWxsXG4gIHJldHVybiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4ge1xuICAgIGlmIChsYXN0UmVzdWx0ICYmIGhyZWYgPT09IGxhc3RIcmVmICYmIGFzID09PSBsYXN0QXMpIHtcbiAgICAgIHJldHVybiBsYXN0UmVzdWx0XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gZm9ybWF0RnVuYyhocmVmLCBhcylcbiAgICBsYXN0SHJlZiA9IGhyZWZcbiAgICBsYXN0QXMgPSBhc1xuICAgIGxhc3RSZXN1bHQgPSByZXN1bHRcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0VXJsKHVybDogVXJsKTogc3RyaW5nIHtcbiAgcmV0dXJuIHVybCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCkgOiB1cmxcbn1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG5cbmxldCBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChvYnNlcnZlcikge1xuICAgIHJldHVybiBvYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBDb21wb25lbnQ8TGlua1Byb3BzPiB7XG4gIHA6IGJvb2xlYW5cblxuICBjb25zdHJ1Y3Rvcihwcm9wczogTGlua1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuICB9XG5cbiAgY2xlYW5VcExpc3RlbmVycyA9ICgpID0+IHt9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcbiAgfVxuXG4gIGdldFBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBjb25zdCB7IGhyZWY6IHBhcnNlZEhyZWYsIGFzOiBwYXJzZWRBcyB9ID0gdGhpcy5mb3JtYXRVcmxzKFxuICAgICAgdGhpcy5wcm9wcy5ocmVmLFxuICAgICAgdGhpcy5wcm9wcy5hc1xuICAgIClcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBwYXJzZWRIcmVmKVxuICAgIHJldHVybiBbcmVzb2x2ZWRIcmVmLCBwYXJzZWRBcyA/IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEFzKSA6IHJlc29sdmVkSHJlZl1cbiAgfVxuXG4gIGhhbmRsZVJlZihyZWY6IEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wICYmIEludGVyc2VjdGlvbk9ic2VydmVyICYmIHJlZiAmJiByZWYudGFnTmFtZSkge1xuICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcblxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgICAgcHJlZmV0Y2hlZFtcbiAgICAgICAgICB0aGlzLmdldFBhdGhzKCkuam9pbihcbiAgICAgICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICAgICAnJSdcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycyA9IGxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnByZWZldGNoKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbiAgLy8gYXMgcGVyIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sXG4gIGZvcm1hdFVybHMgPSBtZW1vaXplZEZvcm1hdFVybCgoaHJlZiwgYXNIcmVmKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IGFkZEJhc2VQYXRoKGZvcm1hdFVybChocmVmKSksXG4gICAgICBhczogYXNIcmVmID8gYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGFzSHJlZikpIDogYXNIcmVmLFxuICAgIH1cbiAgfSlcblxuICBsaW5rQ2xpY2tlZCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyBub2RlTmFtZSwgdGFyZ2V0IH0gPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgICBpZiAoXG4gICAgICBub2RlTmFtZSA9PT0gJ0EnICYmXG4gICAgICAoKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgICAgIGUubWV0YUtleSB8fFxuICAgICAgICBlLmN0cmxLZXkgfHxcbiAgICAgICAgZS5zaGlmdEtleSB8fFxuICAgICAgICAoZS5uYXRpdmVFdmVudCAmJiBlLm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKSlcbiAgICApIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuXG4gICAgaWYgKCFpc0xvY2FsKGhyZWYpKSB7XG4gICAgICAvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBocmVmID0gcmVzb2x2ZShwYXRobmFtZSwgaHJlZilcbiAgICBhcyA9IGFzID8gcmVzb2x2ZShwYXRobmFtZSwgYXMpIDogaHJlZlxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBsZXQgeyBzY3JvbGwgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgICB9XG5cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICBSb3V0ZXJbdGhpcy5wcm9wcy5yZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgc2hhbGxvdzogdGhpcy5wcm9wcy5zaGFsbG93LFxuICAgIH0pLnRoZW4oKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcHJlZmV0Y2gob3B0aW9ucz86IFByZWZldGNoT3B0aW9ucyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wIHx8IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgY29uc3QgcGF0aHMgPSB0aGlzLmdldFBhdGhzKClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgUm91dGVyLnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8gMF0sIHBhdGhzWy8qIGFzUGF0aCAqLyAxXSwgb3B0aW9ucykuY2F0Y2goXG4gICAgICAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgIHRocm93IGVyclxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICAgIHByZWZldGNoZWRbXG4gICAgICBwYXRocy5qb2luKFxuICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICAnJSdcbiAgICAgIClcbiAgICBdID0gdHJ1ZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBocmVmLCBhcyB9ID0gdGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy5hcylcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICAgIH1cblxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICAgIGNvbnN0IHByb3BzOiB7XG4gICAgICBvbk1vdXNlRW50ZXI6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgICAgaHJlZj86IHN0cmluZ1xuICAgICAgcmVmPzogYW55XG4gICAgfSA9IHtcbiAgICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVSZWYoZWwpXG5cbiAgICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uTW91c2VFbnRlcjogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZWZldGNoKHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICAgIH0sXG4gICAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICB0aGlzLmxpbmtDbGlja2VkKGUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfVxuXG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKFxuICAgICAgdGhpcy5wcm9wcy5wYXNzSHJlZiB8fFxuICAgICAgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpXG4gICAgKSB7XG4gICAgICBwcm9wcy5ocmVmID0gYXMgfHwgaHJlZlxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICBpZiAoXG4gICAgICAgIHByb3BzLmhyZWYgJiZcbiAgICAgICAgdHlwZW9mIF9fTkVYVF9EQVRBX18gIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydFxuICAgICAgKSB7XG4gICAgICAgIHByb3BzLmhyZWYgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChwcm9wcy5ocmVmKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHByb3BzKVxuICB9XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCB3YXJuID0gZXhlY09uY2UoY29uc29sZS5lcnJvcilcblxuICAvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbiAgY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpXG4gIGNvbnN0IGV4YWN0ID0gcmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpXG4gIC8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbiAgTGluay5wcm9wVHlwZXMgPSBleGFjdCh7XG4gICAgaHJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsXG4gICAgYXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBwcmVmZXRjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hhbGxvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGFzc0hyZWY6IFByb3BUeXBlcy5ib29sLFxuICAgIHNjcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAocHJvcHM6IGFueSwgcHJvcE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIGBXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9LFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgOiBwYXRoXG59XG5cbmZ1bmN0aW9uIHRvUm91dGUocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLydcbn1cblxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGg6IHN0cmluZykgPT5cbiAgdG9Sb3V0ZSghcGF0aCB8fCBwYXRoID09PSAnLycgPyAnL2luZGV4JyA6IHBhdGgpXG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbnR5cGUgQ29tcG9uZW50UmVzID0geyBwYWdlOiBDb21wb25lbnRUeXBlOyBtb2Q6IGFueSB9XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG50eXBlIFJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogYW55XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFJvdXRlSW5mbywgQXBwPzogQ29tcG9uZW50VHlwZSkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IGFueSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5IHwgbnVsbCxcbiAgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4sXG4gIGNiPzogKC4uLmFyZ3M6IGFueSkgPT4gYW55XG4pIHtcbiAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMVxuICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBmZXRjaChcbiAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgX19ORVhUX0RBVEFfX1xuICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmBcbiAgICAgICAgKSxcbiAgICAgICAgcXVlcnksXG4gICAgICB9KSxcbiAgICAgIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICB9XG4gICAgKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGNiID8gY2IoZGF0YSkgOiBkYXRhXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgIC8vIGxvb3AuXG4gICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgIDsoZXJyIGFzIGFueSkuY29kZSA9ICdQQUdFX0xPQURfRVJST1InXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQ29tcG9uZW50VHlwZVxuICAgICAgd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBhc1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcbiAgICB9XG4gIH1cblxuICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAoXG4gICAgICBlLnN0YXRlICYmXG4gICAgICB0aGlzLmlzU3NyICYmXG4gICAgICBlLnN0YXRlLmFzID09PSB0aGlzLmFzUGF0aCAmJlxuICAgICAgcGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lXG4gICAgKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5J1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgdXBkYXRlKHJvdXRlOiBzdHJpbmcsIG1vZDogYW55KSB7XG4gICAgY29uc3QgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlID0gbW9kLmRlZmF1bHQgfHwgbW9kXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBDb21wb25lbnQsXG4gICAgICBfX05fU1NHOiBtb2QuX19OX1NTRyxcbiAgICAgIF9fTl9TU1A6IG1vZC5fX05fU1NQLFxuICAgIH0pXG4gICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGFcblxuICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICBfdXJsOiBVcmwsXG4gICAgX2FzOiBVcmwsXG4gICAgb3B0aW9uczogYW55XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgICB9XG4gICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICBpZiAoU1QpIHtcbiAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsXG4gICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXNcblxuICAgICAgdXJsID0gYWRkQmFzZVBhdGgodXJsKVxuICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcylcblxuICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpXG5cbiAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChhcylcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSBwYXJzZSh1cmwsIHRydWUpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgIH1cblxuICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuICAgICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZShhcylcbiAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgICApXG5cbiAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZWplY3QoXG4gICAgICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4oXG4gICAgICAgIChyb3V0ZUluZm8pID0+IHtcbiAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgYXMpXG4gICAgICAgICAgICAgIHRocm93IGVycm9yXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVFcnJvciA9IChcbiAgICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICAgICkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXNcbiAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvOiBSb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIH0gYXMgYW55KS50aGVuKFxuICAgICAgICAgICAgICAgICAgKHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAoZ2lwRXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsXG4gICAgICAgICAgICAgICAgICAgICAgZ2lwRXJyXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGhhbmRsZUVycm9yKGVyciwgdHJ1ZSkpXG4gICAgICAgIClcbiAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgIH1cblxuICAgIHJldHVybiAobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKGNhY2hlZFJvdXRlSW5mbykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oXG4gICAgICAgIChyZXMpID0+XG4gICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pLFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz4pXG4gICAgICAudGhlbigocm91dGVJbmZvOiBSb3V0ZUluZm8pID0+IHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YTxSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICAgIClcbiAgICAgICAgKS50aGVuKChwcm9wcykgPT4ge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpXG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybClcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNvbnN0IHJvdXRlID0gZGVsQmFzZVBhdGgodG9Sb3V0ZShwYXRobmFtZSkpXG4gICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBkZWxCYXNlUGF0aChhc1BhdGgpKSxcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdClcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Q29tcG9uZW50UmVzPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG4gICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGFyc2UoYXNQYXRoKS5wYXRobmFtZSEpXG5cbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1twYXRobmFtZV1cbiAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgIDogZmV0Y2hOZXh0RGF0YShcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHRoaXMuaXNTc3IsXG4gICAgICAgICAgKGRhdGEpID0+ICh0aGlzLnNkY1twYXRobmFtZV0gPSBkYXRhKVxuICAgICAgICApXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZShhc1BhdGgsIHRydWUpXG4gICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUhKVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJylcbiAgICAgIDsoZSBhcyBhbnkpLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfVxufSB7XG4gIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG5cbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAoXywgJDEpID0+IHtcbiAgICAgIGNvbnN0IGlzT3B0aW9uYWwgPSAvXlxcXFxcXFsuKlxcXFxcXF0kLy50ZXN0KCQxKVxuICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSgyLCAtMilcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgIGlmIChpc0NhdGNoQWxsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoNilcbiAgICAgIH1cbiAgICAgIGdyb3Vwc1tcbiAgICAgICAgJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9XG4gICAgICByZXR1cm4gaXNDYXRjaEFsbCA/IChpc09wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgfVxuICApXG5cbiAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgICAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG5cbiAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksXG4gICAgZ3JvdXBzLFxuICAgIG5hbWVkUmVnZXg6IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICA/IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYFxuICAgICAgOiB1bmRlZmluZWQsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZvcm1hdCwgVVJMRm9ybWF0T3B0aW9ucywgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBhbnlcbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBzdGF0aWNNYXJrdXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkZXZGaWxlczogc3RyaW5nW11cbiAgZmlsZXM6IHN0cmluZ1tdXG4gIGxvd1ByaW9yaXR5RmlsZXM6IHN0cmluZ1tdXG4gIHBvbHlmaWxsRmlsZXM6IHN0cmluZ1tdXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaHRtbFByb3BzOiBhbnlcbiAgYm9keVRhZ3M6IGFueVtdXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICB1cmw6IFVybE9iamVjdCxcbiAgb3B0aW9ucz86IFVSTEZvcm1hdE9wdGlvbnNcbik6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXQodXJsIGFzIFVSTCwgb3B0aW9ucylcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9TdmdzL0xvZ29zL0xvZ29zJ1xyXG5pbXBvcnQgV2l0aEJveCBmcm9tICcuL1dpdGhCb3gvV2l0aEJveCdcclxuXHJcbmZ1bmN0aW9uIEJ1dHRvbnMgKHByb3BzKXtcclxuXHJcbiAgbGV0IGJ1dHRvbjtcclxuICBpZihwcm9wcy50eXBlID09PSAnd2l0aFRleHQnKSB7XHJcbiAgICBidXR0b24gPSA8QnV0dG9uIHR5cGU9e3Byb3BzLnR5cGV9IGNvbG9ycz17cHJvcHMuY29sb3JzfS8+IFxyXG4gIH1cclxuICBcclxuICBpZihwcm9wcy50eXBlID09PSAnd2l0aEJveCcpIHtcclxuICAgIGJ1dHRvbiA9IFxyXG4gICAgICA8V2l0aEJveCBcclxuICAgICAgICBidG5UeXBlPXtwcm9wcy5idG5UeXBlfVxyXG4gICAgICAgIGxpbms9e3Byb3BzLmxpbmt9XHJcbiAgICAgICAgdGV4dD17cHJvcHMudGV4dH0gXHJcbiAgICAgICAgd2l0aFN2Zz17cHJvcHMud2l0aFN2Z30gXHJcbiAgICAgICAgY29sb3JzPXtwcm9wcy5jb2xvcnN9IC8+XHJcbiAgfVxyXG4gIFxyXG4gIGlmKHByb3BzLnR5cGUgPT09ICdhcnJvdycpIHtcclxuICAgIGJ1dHRvbiA9IFxyXG4gICAgICA8QnV0dG9uIGNvbG9ycz17cHJvcHMuY29sb3JzfSB0eXBlPXtwcm9wcy50eXBlfS8+IFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgKGJ1dHRvbilcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbnM7XHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7U3RhdGVDb250ZXh0fSBmcm9tICcuLi8uLi8uLi91dGlscy9jb250ZXh0L3N0YXRlQ29udGV4dCdcclxuaW1wb3J0IEVudmVsb3AgZnJvbSAnLi4vLi4vU3Zncy9Mb2dvcy9Mb2dvcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZnVuY3Rpb24gV2l0aEJveChwcm9wcykge1xyXG4gIGNvbnN0IHtzZXRUcmFuc2l0aW9uU3RhdGV9ID0gdXNlQ29udGV4dChTdGF0ZUNvbnRleHQpXHJcblxyXG4gIGxldCBzdmcgPSBwcm9wcy53aXRoU3ZnID8gXHJcbiAgICAoIDxFbnZlbG9wIHR5cGU9J2VudmVsb3AnIGNvbG9ycz17cHJvcHMuY29sb3JzfSAvPiApIDogbnVsbFxyXG5cclxuICAvLyB3aGVuIHRoZSBidXR0b24gbGluayBpcyBjbGlja2VkXHJcbiAgLy8gd2Ugd2lsbCB1cGRhdGUgdGhlIHRyYW5zaXRpb24gc3RhdGVcclxuICBjb25zdCBjbGljayA9ICgpID0+IHtcclxuICAgIHNldFRyYW5zaXRpb25TdGF0ZSgnYm90dG9tJylcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGluayBocmVmPXtwcm9wcy5saW5rfT5cclxuICAgICAgPGE+XHJcbiAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgY29udGVudC1jZW50ZXIgJHtwcm9wcy5idG5UeXBlfWB9Pntzdmd9XHJcbiAgICAgICAgICA8c3Bhbj57cHJvcHMudGV4dH08L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvTGluaz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpdGhCb3g7XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1BhZ2VEYXRhfSBmcm9tICcuLi8uLi91dGlscy9jb250ZXh0L3BhZ2VDb250ZXh0J1xyXG5pbXBvcnQgRm9vdGVyTWVudSBmcm9tICcuLi9NZW51TGlzdC9Gb290ZXJNZW51L0Zvb3Rlck1lbnUnXHJcbmltcG9ydCBDb3B5cmlnaHQgZnJvbSAnLi4vRm9vdGVySXRlbS9Db3B5UmlnaHQvQ29weVJpZ2h0J1xyXG5pbXBvcnQgU29jaWFsSWNvbnMgZnJvbSAnLi4vRm9vdGVySXRlbS9Tb2NpYWxJY29ucy9Tb2NpYWxJY29ucydcclxuXHJcbmZ1bmN0aW9uIEZvb3RlciAoKSB7XHJcbiAgY29uc3Qge3F1b3Rlc30gPSB1c2VDb250ZXh0KFBhZ2VEYXRhKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBjbGFzc05hbWU9J2NvbnRlbnQtY2VudGVyIGZvb3Rlci13cmFwcGVyJz5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgc2hvdy1jb250YWluZXIgJHtxdW90ZXMuc2hvdyA/ICdzaG93JyA6IG51bGx9YH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3F1b3Rlcy5zaG93ID8gJ3JldmVhbCcgOiBudWxsfWB9PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdjb250ZW50LWNlbnRlciBxdW90ZS1wJz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdxdW90ZSc+e3F1b3Rlcy5xdW90ZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYXV0aG9yJz4tJm5ic3A7IHtxdW90ZXMuYXV0aG9yfSAmbmJzcDstPC9zcGFuPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtxdW90ZXMuc2hvdyA/ICdydW5uZXInIDogbnVsbH1gfT48L2Rpdj5cclxuICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgPEZvb3Rlck1lbnUgLz5cclxuXHJcbiAgICAgIDxDb3B5cmlnaHQgZnJvbVRvcD17ZmFsc2V9IHBDb2xvcj0nI0E3QTdBNycvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItc29jaWFsSWNvbnNcIj5cclxuICAgICAgICA8U29jaWFsSWNvbnMgXHJcbiAgICAgICAgICBjb250YWluZXI9J2Zvb3Rlci1uYXZpY29ucydcclxuICAgICAgICAgIGNvbG9yTW9kZT0nIzExNjg2NCcgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtTdGF0ZUNvbnRleHR9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvbnRleHQvc3RhdGVDb250ZXh0J1xyXG5pbXBvcnQgeyBjbG9zZU1lbnUgfSBmcm9tICcuLi8uLi8uLi91dGlscy9wYWdlYW5pbWF0aW9ucy9uYXZiYXJtZW51L21lbnVDbGlja0V2ZW50cydcclxuaW1wb3J0IHtmYWRlTmF2YmFyfSBmcm9tICcuLi8uLi8uLi91dGlscy9wYWdlYW5pbWF0aW9ucy9uYXZiYXJtZW51L25hdmJhcnRyYW5zaXRpb24nXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmZ1bmN0aW9uIENvcHlSaWdodChwcm9wcykge1xyXG4gIGNvbnN0IHtzZXRUcmFuc2l0aW9uU3RhdGV9ID0gdXNlQ29udGV4dChTdGF0ZUNvbnRleHQpXHJcblxyXG4gIC8vIGNoZWNrIGlmIHRoZSBidXR0b24gY2xpY2sgaXMgZnJvbSB0aGUgdG9wIG5hdlxyXG4gIC8vIG9yIGZyb20gdGhlIGJvdHRvbSBuYXYgdG8gcmV0dXJuIGEgc3RyaW5nXHJcbiAgLy8gdGhhdCB3aWxsIHVwZGF0ZSB0aGUgc3RhdGUgdHJhbnNpdGlvblxyXG4gIGxldCBmcm9tID0gcHJvcHMuZnJvbVRvcCA/ICd0b3AnIDogJ2JvdHRvbSdcclxuXHJcbiAgLy8gaWYgdGhlIHByaXZhY3kgYnV0dG9uIGNsaWNrZWQgaXMgZnJvbSB0aGUgdG9wIG5hdmJhclxyXG4gIC8vIHRoZW4gd2Ugd2lsbCBjYWxsIHRoaXMgZnVuY3Rpb24gdG8gY2xvc2UgdGhlIG5hdmJhclxyXG4gIGNvbnN0IGNsb3NlbmF2YmFyID0gKCkgPT4ge1xyXG4gICAgY2xvc2VNZW51KClcclxuICAgIGZhZGVOYXZiYXIoKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2xpY2sgPSAoKSA9PiB7XHJcbiAgICBwcm9wcy5mcm9tVG9wID8gY2xvc2VuYXZiYXIoKSA6IG51bGxcclxuICAgIHNldFRyYW5zaXRpb25TdGF0ZShmcm9tKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29weXJpZ2h0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jZW50ZXIgY29weXJpZ2h0LXJ1bm5lclwiPlxyXG4gICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6IHByb3BzLnBDb2xvcn19PsKpIEFpbWFuIEFkbGF3YW4gMjAyMC4gQWxsIHJpZ2h0cyByZXNlcnZlZC48L3A+XHJcbiAgICAgICAgPExpbmsgaHJlZj0nL3ByaXZhY3knPlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxzcGFuIFxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ncHJpdmFjeSc+UHJpdmFjeSBQb2xpY3kuPC9zcGFuPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvcHlSaWdodDsiLCJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtQYWdlRGF0YX0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29udGV4dC9wYWdlQ29udGV4dCdcclxuaW1wb3J0IFNvY2lhbCBmcm9tICcuLi8uLi9TdmdzL1NvY2lhbHMvU29jaWFscydcclxuXHJcbmZ1bmN0aW9uIFNvY2lhbEljb25zIChwcm9wcykge1xyXG4gIGNvbnN0IHtzb2NpYWxzfSA9IHVzZUNvbnRleHQoUGFnZURhdGEpXHJcblxyXG4gIGNvbnN0IHNvY2lhbHNJY29uID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHNvY2lhbHMubWFwKChzb2NpYWwsIGkpID0+IHtcclxuICAgICAgcmV0dXJuICggIFxyXG4gICAgICAgIDxhIGhyZWY9e3NvY2lhbC5saW5rfSBrZXk9e2l9XHJcbiAgICAgICAgICByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInXHJcbiAgICAgICAgICB0YXJnZXQ9J19ibGFuaycgPlxyXG4gICAgICAgICAgPFNvY2lhbCBcclxuICAgICAgICAgICAgaWNvbj17c29jaWFsLm5hbWV9XHJcbiAgICAgICAgICAgIGNvbG9yPXtwcm9wcy5jb2xvck1vZGV9Lz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbnRlbnQtY2VudGVyICR7cHJvcHMuY29udGFpbmVyfWB9PlxyXG4gICAgICB7c29jaWFsc0ljb24oKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29jaWFsSWNvbnNcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTY3JvbGxCdG4gZnJvbSAnLi9TY3JvbGxCdG4vU2Nyb2xsQnRuJ1xyXG5pbXBvcnQgU29jaWFsSWNvbnMgZnJvbSAnLi9Tb2NpYWxJY29uL1NvY2lhbEljb24nXHJcbmltcG9ydCBIZWFkZXJUZXh0IGZyb20gJy4uL0hlYWRlclRleHRCbG9jay9IZWFkZXJUZXh0QmxvY2snXHJcbmltcG9ydCBTdWJwYXJhZ3JhcGhzIGZyb20gJy4uL1N1YlBhcmFncmFwaHMvU3VicGFyYWdyYXBocydcclxuaW1wb3J0IENyZWRlbnRpYWxzIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvQ3JlZGVudGlhbC9DcmVkZW50aWFsJ1xyXG5pbXBvcnQgSGVybyBmcm9tICcuL0hlcm8vSGVybydcclxuaW1wb3J0IHtQYWdlRGF0YX0gZnJvbSAnLi4vLi4vdXRpbHMvY29udGV4dC9wYWdlQ29udGV4dCdcclxuXHJcbmZ1bmN0aW9uIEhlYWRlciAoKSB7XHJcbiAgY29uc3Qge2hlYWRlcnN9ID0gdXNlQ29udGV4dChQYWdlRGF0YSlcclxuICAgIFxyXG4gIGxldCBoZWFkZXJDb250ZW50ID0gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3RvcC1iYWNrZ3JvdW5kLWNvbnRhaW5lcidcclxuICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kOiBcclxuICAgICAgYHVybCgnL2ltYWdlcy8ke2hlYWRlcnMuYmFja2dyb3VuZH0ucG5nJykgcmVwZWF0IGNlbnRlciB0b3BgfX0gPlxyXG5cclxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPSdoZWFkZXItdGV4dC1ibG9jayc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItdGl0bGUtYmxvY2tcIj5cclxuICAgICAgICAgIHtoZWFkZXJzLndpdGhJbWFnZS5pc1RydWUgPyA8SGVyby8+IDogbnVsbCB9XHJcbiAgICAgICAgICA8SGVhZGVyVGV4dCAvPlxyXG4gICAgICAgICAge2hlYWRlcnMuc3ViUGFyYWdyYXBoLmlzVHJ1ZSA/IDxTdWJwYXJhZ3JhcGhzIC8+IDogbnVsbCB9XHJcbiAgICAgICAgICB7aGVhZGVycy53aXRoQ3JlZGVudGlhbHMuaXNUcnVlID8gPENyZWRlbnRpYWxzIC8+IDogbnVsbCB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgXHJcbiAgICAgIHsvKiByZW5kZXIgc29jaWFsIGljb25zICovfVxyXG4gICAgICB7aGVhZGVycy53aXRoU29jaWFscyA/IDxTb2NpYWxJY29ucyAvPiA6IG51bGwgfVxyXG5cclxuICAgICAgey8qIHJlbmRlciBzY3JvbGwgYnV0dG9uICovfVxyXG4gICAgICB7aGVhZGVycy53aXRoU2Nyb2xsQnV0dG9uLmlzVHJ1ZSA/IFxyXG4gICAgICA8U2Nyb2xsQnRuIGRhdGE9e2hlYWRlcnMud2l0aFNjcm9sbEJ1dHRvbn0vPiA6IG51bGx9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT0ndG9wJyBcclxuICAgICAgc3R5bGU9e3snYmFja2dyb3VuZCc6IGhlYWRlcnMuY29sb3Jtb2Rlcy5jbG9zZS5iYWNrZ3JvdW5kfX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIHtoZWFkZXJDb250ZW50fVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHtQYWdlRGF0YX0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29udGV4dC9wYWdlQ29udGV4dCdcclxuXHJcbmNsYXNzIEhlcm8gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IFBhZ2VEYXRhXHJcbiAgcmVuZGVyKCl7XHJcbiAgICBsZXQgaW1nID0gdGhpcy5jb250ZXh0LmhlYWRlcnMud2l0aEltYWdlLmltYWdlXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZmlndXJlIGNsYXNzTmFtZT0naGVyby13cmFwcGVyJz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3Nob3ctY29udGFpbmVyIGhlcm8tY292ZXIgc2hvdyc+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0ncmV2ZWFsIGltZy1yZXZlYWwnIHNyYz17aW1nfSBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1bm5lclwiPjwvZGl2PlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9maWd1cmU+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7c2Nyb2xsRG93bn0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvcGFnZWFuaW1hdGlvbnMvc2Nyb2xsYW5pbWF0aW9uL3Njcm9sbERvd24nXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vQnV0dG9ucy9CdXR0b25zJ1xyXG5cclxuZnVuY3Rpb24gU2Nyb2xsQnRuKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxhc2lkZSBjbGFzc05hbWU9J3JpZ2h0LWFsaWduIHNjcm9sbC1idG4tY29udGFpbmVyJz5cclxuICAgICAgPGRpdiBcclxuICAgICAgICBvbkNsaWNrPXtzY3JvbGxEb3dufVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInNjcm9sbC1jb3ZlciBzaG93XCI+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPXtwcm9wcy5kYXRhLnR5cGV9XHJcbiAgICAgICAgICBjb2xvcnM9e3Byb3BzLmRhdGEuY29sb3JzfS8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9hc2lkZT5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjcm9sbEJ0blxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTb2NpYWxJY29ucyBmcm9tICcuLi8uLi9Gb290ZXJJdGVtL1NvY2lhbEljb25zL1NvY2lhbEljb25zJ1xyXG5cclxuZnVuY3Rpb24gU29jaWFsSWNvbigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGFzaWRlIGNsYXNzTmFtZT0nbGVmdC1hbGlnbiBsZWZ0LWljb25zJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItc29jaWFsLWNvbnRhaW5lciBzaG93XCI+XHJcbiAgICAgICAgPFNvY2lhbEljb25zIFxyXG4gICAgICAgICAgY29udGFpbmVyPSdoZWFkZXItc29jaWFsLWljb25zJ1xyXG4gICAgICAgICAgY29sb3JNb2RlPScjMEM1RDVBJyAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYXNpZGU+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb2NpYWxJY29uXHJcbiIsImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1BhZ2VEYXRhfSBmcm9tICcuLi8uLi91dGlscy9jb250ZXh0L3BhZ2VDb250ZXh0J1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyVGV4dEJsb2NrICgpIHtcclxuICBjb25zdCB7aGVhZGVyc30gPSB1c2VDb250ZXh0KFBhZ2VEYXRhKVxyXG5cclxuICBsZXQgaGVhZGVyVGV4dCA9IGhlYWRlcnMudGl0bGUubWFwKCh0ZXh0LCBpKT0+e1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2hvdy1jb250YWluZXIgc2hvd1wiIGtleT17aX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZlYWxcIlxyXG4gICAgICAgIHN0eWxlPXt7Y29sb3I6IGhlYWRlcnMudGV4dENvbG9ycy5wcmltYXJ5fX0+e3RleHR9PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydW5uZXJcIj48L2Rpdj5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgKVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci13cmFwcGVyXCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkZXItdGV4dFwiPlxyXG4gICAgICAgIHtoZWFkZXJUZXh0fVxyXG4gICAgICA8L2gxPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJzdWItcmV2ZWFsLWNvbnRhaW5lciBkZXNjIHNob3dcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWItcmV2ZWFsXCJcclxuICAgICAgICAgIHN0eWxlPXt7Y29sb3I6IGhlYWRlcnMudGV4dENvbG9ycy5zZWNvbmRhcnksIGZvbnRXZWlnaHQ6IGhlYWRlcnMudGl0bGVbMF0gPT09ICAnQWJvdXQgbWUuJyA/IDUwMCA6IDYwMH19PlxyXG4gICAgICAgICAge2hlYWRlcnMuc2hvcnREZXNjfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJUZXh0QmxvY2tcclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE1lbnVXcmFwcGVyIGZyb20gJy4vTWVudVdyYXBwZXIvTWVudVdyYXBwZXInXHJcbmltcG9ydCBNZW51UnVubmVyIGZyb20gJy4vTWVudVJ1bm5lci9NZW51UnVubmVyJ1xyXG5cclxuZnVuY3Rpb24gTWVudUNvbnRhaW5lcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWNvbnRhaW5lclwiPlxyXG4gICAgICA8TWVudVdyYXBwZXIgLz5cclxuICAgICAgPE1lbnVSdW5uZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudUNvbnRhaW5lclxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBNZW51UnVubmVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtcnVubmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1ydW5uZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtZW51LXJ1bm5lcnMnPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21lbnUtcnVubmVycyc+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbWVudS1ydW5uZXJzJz48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtZW51LXJ1bm5lcnMnPjwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVSdW5uZXJcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTWVudUxpc3QgZnJvbSAnLi4vLi4vTWVudUxpc3QvVG9wTWVudUxpc3QvTWVudSdcclxuaW1wb3J0IENvcHlyaWdodCBmcm9tICcuLi8uLi9Gb290ZXJJdGVtL0NvcHlSaWdodC9Db3B5UmlnaHQnXHJcbmltcG9ydCBTb2NpYWxJY29ucyBmcm9tICcuLi8uLi9Gb290ZXJJdGVtL1NvY2lhbEljb25zL1NvY2lhbEljb25zJ1xyXG5cclxuZnVuY3Rpb24gTWVudVdyYXBwZXIoKSB7XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS13cmFwcGVyXCI+XHJcbiAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJtZW51LXMgbWVudS1sZWZ0XCI+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9J3NxdWFyZS1pbWcnIHNyYz17Jy9pbWFnZXMvbWVudS1kb3RzLnBuZyd9IGFsdD1cInNxdWFyZS1kb3RzXCIvPlxyXG4gICAgICA8L2FzaWRlPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtcyBtZW51LW1pZGRsZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGNvbnRlbnQtY2VudGVyIG5hdi1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxNZW51TGlzdCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jZW50ZXIgbmF2LWZvb3RlclwiPlxyXG4gICAgICAgICAgPENvcHlyaWdodCBmcm9tVG9wPXt0cnVlfSBwQ29sb3I9JyNDNkM0QUYnIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YXNpZGUgY2xhc3NOYW1lPVwibWVudS1zIG1lbnUtcmlnaHRcIj5cclxuICAgICAgICB7LyogYXJyYW5nZW1lbnQgaXMgZm9yIHRoZSBsZWZ0IG9yIHJpZ2h0IGxvY2F0aW9uc1xyXG4gICAgICAgIGNvbnRhaW5lciBpcyBmb3IgdGhlIHNvY2lhbCBuYXZpY29ucyAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmlnaHQtaWNvbnMnPlxyXG4gICAgICAgICAgPFNvY2lhbEljb25zIFxyXG4gICAgICAgICAgICBjb250YWluZXI9J3NvY2lhbC1uYXZpY29ucydcclxuICAgICAgICAgICAgY29sb3JNb2RlPScjMzEzRDQzJyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2FzaWRlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51V3JhcHBlclxyXG4iLCJpbXBvcnQgUmVhY3QsIHtGcmFnbWVudCwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7U3RhdGVDb250ZXh0fSBmcm9tICcuLi8uLi8uLi91dGlscy9jb250ZXh0L3N0YXRlQ29udGV4dCdcclxuLy8gaW1wb3J0IHtzZXRUcmFuc2l0aW9uU3RhdGV9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3BhZ2VhbmltYXRpb25zL21vdGlvbi9jb21tb24nXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmZ1bmN0aW9uIEZvb3Rlck1lbnUoKSB7XHJcbiAgY29uc3Qge3NldFRyYW5zaXRpb25TdGF0ZX0gPSB1c2VDb250ZXh0KFN0YXRlQ29udGV4dClcclxuICBjb25zdCBtZW51cyA9IFsnaG9tZScsICdhYm91dCcsICdwcm9qZWN0cycsICdjb250YWN0cyddXHJcblxyXG4gIC8vIHVwZGF0ZSB0aGUgc3RhdGUgZm9yIHRoZSB0cmFuc2l0aW9uXHJcbiAgY29uc3QgY2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRUcmFuc2l0aW9uU3RhdGUoJ2JvdHRvbScpXHJcbiAgfVxyXG5cclxuICBsZXQgbWVudXNMaXN0ID0gbWVudXMubWFwKChtZW51LCBpKT0+e1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZyYWdtZW50IGtleT17aX0+XHJcbiAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICBrZXk9e21lbnUgPT09ICdob21lJyA/ICcvJyA6IGAvJHttZW51fWB9XHJcbiAgICAgICAgICBhcz17bWVudSA9PT0gJ2hvbWUnID8gJy8nIDogYC8ke21lbnV9YH1cclxuICAgICAgICAgIGhyZWY9e2AvJHttZW51ID09PSAnaG9tZScgPyAnJyA6IG1lbnV9YH0+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPGxpIFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9vdGVyLW1lbnUnXHJcbiAgICAgICAgICAgICAgb25DbGljaz17Y2xpY2t9PnttZW51fTwvbGk+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICB7aSA8IDMgPyA8c3Bhbj58PC9zcGFuPiA6IG51bGwgfVxyXG4gICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT0nY29udGVudC1jZW50ZXIgZm9vdGVyLW5hdic+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9J2NvbnRlbnQtY2VudGVyIGZvb3Rlci1uYXYtd3JhcHBlcic+XHJcbiAgICAgICAge21lbnVzTGlzdH1cclxuICAgICAgPC91bD5cclxuICAgIDwvbmF2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyTWVudTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQge1N0YXRlQ29udGV4dH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29udGV4dC9zdGF0ZUNvbnRleHQnXHJcbmltcG9ydCB7Y2hlY2tSb3V0ZX0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29tbW9uL2NvbW1vbidcclxuaW1wb3J0IHttb3VzZUVudGVyLCBtb3VzZU91dH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvcGFnZWFuaW1hdGlvbnMvbmF2YmFybWVudS9tZW51TGlzdEV2ZW50cydcclxuaW1wb3J0IHtzZXRUcmFuc2l0aW9uU3RhdGV9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3BhZ2VhbmltYXRpb25zL21vdGlvbi9jb21tb24nXHJcbmltcG9ydCB7IGNsb3NlTWVudSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3BhZ2VhbmltYXRpb25zL25hdmJhcm1lbnUvbWVudUNsaWNrRXZlbnRzJ1xyXG5pbXBvcnQge2ZhZGVOYXZiYXJ9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3BhZ2VhbmltYXRpb25zL25hdmJhcm1lbnUvbmF2YmFydHJhbnNpdGlvbidcclxuXHJcbmZ1bmN0aW9uIE1lbnUoKSB7XHJcbiAgbGV0IG1lbnVzID0gWydob21lJywgJ2Fib3V0JywgJ3Byb2plY3RzJywgJ2NvbnRhY3RzJ11cclxuICBjb25zdCB7IHN0YXRlLCBzZXRBY3RpdmVSb3V0ZSwgc2V0VHJhbnNpdGlvblN0YXRlIH0gPSB1c2VDb250ZXh0KFN0YXRlQ29udGV4dClcclxuICBjb25zdCBjdXJyZW50Um91dGUgPSBjaGVja1JvdXRlKHVzZVJvdXRlcigpLnBhdGhuYW1lKVxyXG5cclxuICAvLyBzZXQgYWN0aXZlIHJvdXRlIHRvIHRoZSBjdXJyZW50IHJvdXRlXHJcbiAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgc2V0QWN0aXZlUm91dGUoY3VycmVudFJvdXRlKVxyXG4gIH0sMzAwKVxyXG5cclxuICAvLyBjbGljayBldmVudHNcclxuICBjb25zdCBjbGljayA9ICgpID0+IHtcclxuICAgIGZhZGVOYXZiYXIoKVxyXG4gICAgY2xvc2VNZW51KClcclxuICAgIHNldFRyYW5zaXRpb25TdGF0ZSgndG9wJylcclxuICB9XHJcblxyXG5cclxuICBjb25zdCBtZW51TGlzdCA9ICgpID0+IHtcclxuICByZXR1cm4gbWVudXMubWFwKChtZW51LCBpICk9PntcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxsaSBjbGFzc05hbWU9J21lbnUtbGlzdCcga2V5PXtpfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVudS1saXN0LWNvbnRhaW5lcic+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbnRlbnQtY2VudGVyIGxpc3QtZnJvbnRcclxuICAgICAgICAgICAgJHttZW51ID09PSBzdGF0ZS5hY3RpdmVSb3V0ZSA/ICdhY3RpdmUnIDogJyd9YH0+XHJcbiAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgIGtleT17bWVudSA9PT0gJ2hvbWUnID8gJy8nIDogYC8ke21lbnV9YH1cclxuICAgICAgICAgICAgICBocmVmPXttZW51ID09PSAnaG9tZScgPyAnLycgOiBgLyR7bWVudX1gfVxyXG4gICAgICAgICAgICAgIGFzPXttZW51ID09PSAnaG9tZScgPyAnLycgOiBgLyR7bWVudX1gfT5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbWVudS1saXN0LXRleHQnXHJcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KGUpPT5tb3VzZUVudGVyKGUsICdob3ZlckluJyl9XHJcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VPdXQ9eyhlKT0+bW91c2VPdXQoZSl9IFxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbGlja30+e21lbnV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbnRlbnQtY2VudGVyIGxpc3QtYmFjayBcclxuICAgICAgICAgICAgJHttZW51ID09PSBzdGF0ZS5hY3RpdmVSb3V0ZSA/ICdhY3RpdmUnIDogJyd9YH0+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbWVudS1saXN0LWJhY2tlcic+e21lbnV9PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbGk+IClcclxuICAgIH0pXHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2PlxyXG4gICAgICA8dWw+e21lbnVMaXN0KCl9PC91bD5cclxuICAgIDwvbmF2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IE5hdmJhckxvZ28gZnJvbSAnLi9OYXZiYXJMb2dvL05hdmJhckxvZ28nXHJcbmltcG9ydCBOYXZiYXJNZW51IGZyb20gJy4vTmF2YmFyTWVudS9OYXZiYXJNZW51J1xyXG5cclxuZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1jb250YWluZXJcIj5cclxuICAgICAgPE5hdmJhckxvZ28vPlxyXG4gICAgICA8TmF2YmFyTWVudS8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhciIsImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBCcmFuZExvZ28gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9TdmdzL0JyYW5kTG9nby9CcmFuZExvZ28nXHJcbmltcG9ydCB7UGFnZURhdGF9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvbnRleHQvcGFnZUNvbnRleHQnXHJcbmltcG9ydCB7U3RhdGVDb250ZXh0fSBmcm9tICcuLi8uLi8uLi91dGlscy9jb250ZXh0L3N0YXRlQ29udGV4dCdcclxuXHJcbmZ1bmN0aW9uIE5hdmJhckxvZ28gKCkge1xyXG4gIGNvbnN0IHtoZWFkZXJzfSA9IHVzZUNvbnRleHQoUGFnZURhdGEpXHJcbiAgY29uc3Qge3N0YXRlfSA9IHVzZUNvbnRleHQoU3RhdGVDb250ZXh0KVxyXG4gIFxyXG4gIGxldCBjb2xvciA9IHN0YXRlLm1lbnVJc09wZW4gPyBcclxuICAgIGhlYWRlcnMuY29sb3Jtb2Rlcy5vcGVuLmZvcmVncm91bmQgOiBcclxuICAgIGhlYWRlcnMuY29sb3Jtb2Rlcy5jbG9zZS5mb3JlZ3JvdW5kXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItbG9nb1wiPlxyXG4gICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICA8YT48QnJhbmRMb2dvIGNvbG9yTW9kZT17Y29sb3J9Lz48L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyTG9nb1xyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDbG9zZSBmcm9tICcuLi8uLi9TdmdzL0Nsb3NlL0Nsb3NlJ1xyXG5pbXBvcnQge21vdXNlRW50ZXIsIG1vdXNlT3V0fSBmcm9tICcuLi8uLi8uLi91dGlscy9wYWdlYW5pbWF0aW9ucy9uYXZiYXJtZW51L21lbnVIb3ZlckV2ZW50cydcclxuaW1wb3J0IHtvcGVuTWVudSwgY2xvc2VNZW51fSBmcm9tICcuLi8uLi8uLi91dGlscy9wYWdlYW5pbWF0aW9ucy9uYXZiYXJtZW51L21lbnVDbGlja0V2ZW50cydcclxuaW1wb3J0IHtmYWRlTmF2YmFyfSBmcm9tICcuLi8uLi8uLi91dGlscy9wYWdlYW5pbWF0aW9ucy9uYXZiYXJtZW51L25hdmJhcnRyYW5zaXRpb24nXHJcbmltcG9ydCB7UGFnZURhdGF9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvbnRleHQvcGFnZUNvbnRleHQnXHJcbmltcG9ydCB7U3RhdGVDb250ZXh0fSBmcm9tICcuLi8uLi8uLi91dGlscy9jb250ZXh0L3N0YXRlQ29udGV4dCdcclxuaW1wb3J0IHttb3Rpb259IGZyb20gJ2ZyYW1lci1tb3Rpb24nXHJcblxyXG5mdW5jdGlvbiBOYXZiYXJNZW51ICgpIHtcclxuICBjb25zdCB7aGVhZGVyc30gPSB1c2VDb250ZXh0KFBhZ2VEYXRhKVxyXG4gIGNvbnN0IHtzdGF0ZSwgc2V0U3RhdGV9ID0gdXNlQ29udGV4dChTdGF0ZUNvbnRleHQpXHJcblxyXG4gIC8vIGhvdmVyIGluIGZ1bmN0aW9ucyBhbmQgdG8gc2V0IHNwZWNpZmljIGFzc2lnbmVkIGNvbG9yc1xyXG4gIGNvbnN0IGhvdmVySW4gPSAoKSA9PiB7XHJcbiAgICBzdGF0ZS5tZW51SXNPcGVuID8gbW91c2VFbnRlcihoZWFkZXJzLmNvbG9ybW9kZXMub3BlbiwgJ29wZW4nKSA6XHJcbiAgICAgbW91c2VFbnRlcihoZWFkZXJzLmNvbG9ybW9kZXMuY2xvc2UsICdjbG9zZScpXHJcbiAgfVxyXG5cclxuICAvLyBob3ZlciBvdXQgZnVuY3Rpb25zIGFuZCB0byBzZXQgc3BlY2lmaWMgYXNzaWduZWQgY29sb3JzXHJcbiAgY29uc3QgaG92ZXJPdXQgPSAoKSA9PiB7XHJcbiAgICBzdGF0ZS5tZW51SXNPcGVuID8gbW91c2VPdXQoaGVhZGVycy5jb2xvcm1vZGVzLm9wZW4sICdvcGVuJykgOlxyXG4gICAgICBtb3VzZU91dChoZWFkZXJzLmNvbG9ybW9kZXMuY2xvc2UsICdjbG9zZScpXHJcbiAgfVxyXG5cclxuICAvLyBjbGljayBldmVudHNcclxuICBjb25zdCBjbGljayA9ICgpID0+IHtcclxuICAgIC8vIGZhZGUgdGhlIG5hdmJhclxyXG4gICAgZmFkZU5hdmJhcigpXHJcbiAgICAvL2NoZWNrIGlmIG1lbnUgaXMgbm90IGFuaW1hdGluZy4gaWYgZmFsc2UgdGhlblxyXG4gICAgLy8gZXhlY3V0ZSB0aGUgYW5pbWF0aW9uXHJcbiAgICBpZighc3RhdGUubWVudUlzQW5pbWF0aW5nKXtcclxuICAgICAgLy8gY2hhbmdlIHRoZSBnbG9iYWwgc3RhdGUgYWZ0ZXIgMjAwbXMgZmFkZSB0cmFuc2l0aW9uXHJcbiAgICAgIC8vIGZyb20gdGhlIG5hdmJhclxyXG4gICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgc2V0U3RhdGUoe1xyXG4gICAgICAgICAgbWVudUlzT3BlbjogIXN0YXRlLm1lbnVJc09wZW4sXHJcbiAgICAgICAgICBtZW51SXNBbmltYXRpbmc6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9LCAyMDApXHJcbiAgICAgIC8vIHRoZW4gY2FsbCB0aGUgYW5pbWF0aW9uIHdoZXRoZXIgdGhlIGNsb3NlIG9yIG9wZW4gdGhlIG1lbnVcclxuICAgICAgc3RhdGUubWVudUlzT3BlbiA/IGNsb3NlTWVudSh0cnVlKSA6IG9wZW5NZW51KClcclxuICAgICAgLy8gdGhlIHNldCB0aW1lb3V0IHdpbGwgbWFrZSBhIHNldCB0aGUgbWVudUlzQW5pbWF0aW5nXHJcbiAgICAgIC8vIHN0YXRlIGJhY2sgdG8gZmFsc2UgYWZ0ZXIgMTcwMG1zLlxyXG4gICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgc2V0U3RhdGUoeyBtZW51SXNBbmltYXRpbmc6IGZhbHNlIH0pXHJcbiAgICAgIH0sIDE3MDApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItbWVudVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyb250IGNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgPG1vdGlvbi5zcGFuIGNsYXNzTmFtZT1cImNvbnRlbnQtY2VudGVyIGZyb250LXRleHRcIlxyXG4gICAgICAgICAgc3R5bGU9e3snY29sb3InOiBoZWFkZXJzLmNvbG9ybW9kZXMuY2xvc2UuZm9yZWdyb3VuZH19XHJcbiAgICAgICAgICBvbk1vdXNlT3Zlcj17aG92ZXJJbn1cclxuICAgICAgICAgIG9uTW91c2VMZWF2ZT17aG92ZXJPdXR9XHJcbiAgICAgICAgICB3aGlsZVRhcD17e3NjYWxlOiAwLjk1fX1cclxuICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrfT5cclxuICAgICAgICAgICAge3N0YXRlLm1lbnVJc09wZW4gPyA8Q2xvc2UgLz4gOiAnTWVudSd9PC9tb3Rpb24uc3Bhbj4gIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaWRkbGUgY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtaWRkbGUtc3BhblwiPjwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFjayBjb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhY2stc3BhblwiPjwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhck1lbnUiLCJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtQYWdlRGF0YX0gZnJvbSAnLi4vLi4vdXRpbHMvY29udGV4dC9wYWdlQ29udGV4dCdcclxuaW1wb3J0IFRpdGxlYmxvY2sgZnJvbSAnLi9UaXRsZUJsb2NrL1RpdGxlQmxvY2snXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9ucy9CdXR0b25zJ1xyXG5cclxuZnVuY3Rpb24gTmVlZEhlbHAgKCkge1xyXG4gIGNvbnN0IHtuZWVkSGVscH0gPSB1c2VDb250ZXh0KFBhZ2VEYXRhKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPSduZWVkaGVscC1jb250YWluZXInPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbmVlZGhlbHAtYmFja2dyb3VuZCdcclxuICAgICAgICBzdHlsZT17e2JhY2tncm91bmQ6IGB1cmwoJyR7bmVlZEhlbHAuYmFja2dyb3VuZH0nKSByZXBlYXQgY2VudGVyIHRvcGB9fT5cclxuXHJcbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT0nbmVlZGhlbHAtdGV4dC1ibG9jayB0ZXh0LXNwYW4nPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmVlZGhlbHAtdGl0bGUtYmxvY2tcIj5cclxuXHJcbiAgICAgICAgICA8VGl0bGVibG9jayBkYXRhPXtuZWVkSGVscH0vPlxyXG5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1Yi1yZXZlYWwtY29udGFpbmVyIGRlc2Mgc2hvd1wiID5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWItcmV2ZWFsIGJ0blwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgdGV4dD17bmVlZEhlbHAubWVzc2FnZXRleHR9IFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPXtuZWVkSGVscC50eXBlfVxyXG4gICAgICAgICAgICAgICAgICB3aXRoU3ZnPXtuZWVkSGVscC53aXRoU3ZnfVxyXG4gICAgICAgICAgICAgICAgICBidG5UeXBlPXtuZWVkSGVscC5idG5UeXBlfVxyXG4gICAgICAgICAgICAgICAgICBsaW5rPXtuZWVkSGVscC5saW5rfVxyXG4gICAgICAgICAgICAgICAgICBjb2xvcnM9e25lZWRIZWxwLmNvbG9yfS8+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2FydGljbGU+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5lZWRIZWxwXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBUaXRsZUJsb2NrKHByb3BzKSB7XHJcbiAgXHJcbiAgbGV0IHRpdGxlID0gcHJvcHMuZGF0YS50aXRsZS5tYXAoKHQsIGkpPT57XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaG93LWNvbnRhaW5lciBzaG93XCIga2V5PXtpfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmVhbFwiXHJcbiAgICAgICAgc3R5bGU9e3tjb2xvcjogcHJvcHMuZGF0YS50ZXh0Q29sb3JzLnByaW1hcnl9fT57dH08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1bm5lclwiPjwvZGl2PlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICApXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmVlZGhlbHAtd3JhcHBlclwiPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwiaGVhZDJcIj5cclxuICAgICAgICB7dGl0bGV9XHJcbiAgICAgIDwvaDI+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInN1Yi1yZXZlYWwtY29udGFpbmVyIGRlc2Mgc2hvd1wiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1Yi1yZXZlYWxcIlxyXG4gICAgICAgICAgc3R5bGU9e3tjb2xvcjogcHJvcHMuZGF0YS50ZXh0Q29sb3JzLnNlY29uZGFyeX19Pntwcm9wcy5kYXRhLnNob3J0RGVzY308L3NwYW4+XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGl0bGVCbG9ja1xyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtTdGF0ZUNvbnRleHR9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvbnRleHQvc3RhdGVDb250ZXh0J1xyXG5pbXBvcnQgQXJyb3cgZnJvbSAnLi4vLi4vQnV0dG9ucy9CdXR0b25zJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5mdW5jdGlvbiBEZXNjcmlwdGlvbihwcm9wcykge1xyXG4gIGNvbnN0IHtzZXRUcmFuc2l0aW9uU3RhdGV9ID0gdXNlQ29udGV4dChTdGF0ZUNvbnRleHQpXHJcblxyXG4gIC8vIHNldCB0cmFuc2l0aW9uIHN0YXRlXHJcbiAgY29uc3QgY2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRUcmFuc2l0aW9uU3RhdGUoJ2JvdHRvbScpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWJsb2NrLXJpZ2h0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtYWxpZ24gcmlnaHQtYmxvY2tcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2hvdy1jb250YWluZXIgc2hvdyc+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3JldmVhbCBkZXNjJ1xyXG4gICAgICAgICAgICBzdHlsZT17e2NvbG9yOiBwcm9wcy50ZXh0Y29sb3J9fT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPScnPntwcm9wcy5kZXNjfTwvc3Bhbj5cclxuICAgICAgICAgICAge3Byb3BzLndpdGhBcnJvdyA/IFxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9wcm9qZWN0cyc+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdibG9jay1hcnJvdydcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFycm93IHR5cGU9J2Fycm93JyBjb2xvcnM9e3Byb3BzLmNvbG9yc30vPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+IFxyXG4gICAgICAgICAgICAgIDwvTGluaz4gOiBudWxsIH1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVubmVyXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXNjcmlwdGlvblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBUaXRsZShwcm9wcykge1xyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbi1ibG9jay1sZWZ0Jz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LWFsaWduIGxlZnQtYmxvY2tcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPSdoZWFkMidcclxuICAgICAgICAgIHN0eWxlPXt7Y29sb3I6IHByb3BzLnRleHRjb2xvcn19PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzaG93LWNvbnRhaW5lciBzaG93Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JldmVhbCc+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e3Byb3BzLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdydW5uZXInPjwvZGl2PlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaXRsZVxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtQYWdlRGF0YX0gZnJvbSAnLi4vLi4vdXRpbHMvY29udGV4dC9wYWdlQ29udGV4dCdcclxuaW1wb3J0IFRpdGxlIGZyb20gJy4vQ29tcG9uZW50cy9UaXRsZSdcclxuaW1wb3J0IERlc2NyaXB0aW9uIGZyb20gJy4vQ29tcG9uZW50cy9EZXNjcmlwdGlvbidcclxuXHJcblxyXG5mdW5jdGlvbiBTZWN0aW9uQmxvY2tzIChwcm9wcykge1xyXG4gIGNvbnN0IHt3aXRoQmxvY2tzLCBwcm9qZWN0QmxvY2tzfSA9IHVzZUNvbnRleHQoUGFnZURhdGEpXHJcbiAgbGV0IGRhdGEgPSBmaW5kRGF0YShwcm9wcy50aXRsZSwgd2l0aEJsb2NrcywgcHJvamVjdEJsb2NrcylcclxuXHJcbiAgbGV0IGJsb2NrcyA9IFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb24tYmxvY2stYmFja2dyb3VuZCdcclxuICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kOiBgdXJsKCcke2RhdGEuYmFja2dyb3VuZH0nKSByZXBlYXQgY2VudGVyIHRvcGB9fT5cclxuICAgICAgPFRpdGxlIFxyXG4gICAgICAgIHRpdGxlPXtkYXRhLmJsb2NrVGl0bGV9XHJcbiAgICAgICAgdGV4dGNvbG9yPXtkYXRhLnRleHRjb2xvcn0vPlxyXG4gICAgICA8RGVzY3JpcHRpb24gXHJcbiAgICAgICAgdGV4dGNvbG9yPXtkYXRhLnRleHRjb2xvcn1cclxuICAgICAgICBkZXNjPXtkYXRhLmJsb2NrRGVzY31cclxuICAgICAgICB3aXRoQXJyb3c9e2RhdGEud2l0aEFycm93fVxyXG4gICAgICAgIGNvbG9ycz17ZGF0YS50ZXh0Y29sb3J9Lz5cclxuICAgIDwvZGl2PlxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdzZWN0aW9uLWJsb2NrLWNvbnRhaW5lcicgXHJcbiAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBkYXRhLmJhY2tncm91bmRDb2xvcn19PlxyXG4gICAgICB7YmxvY2tzfVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbkJsb2NrcztcclxuXHJcblxyXG5jb25zdCBmaW5kRGF0YSA9ICh0aXRsZSwgd2l0aEJsb2NrcywgcHJvamVjdEJsb2NrcykgPT4ge1xyXG4gIGlmKHRpdGxlID09PSAncHJvamVjdCcgIHx8IHRpdGxlID09PSAnc2tpbGxzJykgcmV0dXJuIHdpdGhCbG9ja3MgXHJcbiAgaWYodGl0bGUgPT09ICd2aWV3IG1vcmUnKSByZXR1cm4gcHJvamVjdEJsb2Nrc1xyXG59IiwiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9qZWN0cyBmcm9tICcuL3Byb2plY3RzL1Byb2plY3RzJ1xyXG5pbXBvcnQge1BhZ2VEYXRhfSBmcm9tICcuLi8uLi91dGlscy9jb250ZXh0L3BhZ2VDb250ZXh0J1xyXG5cclxuZnVuY3Rpb24gU2hvcnRQcm9qZWN0VmlldyAoKSB7XHJcbiAgY29uc3Qge2xpc3RvZnByb2plY3RzfSA9IHVzZUNvbnRleHQoUGFnZURhdGEpXHJcbiAgXHJcbiAgbGV0IHByb2plY3RzID0gPFByb2plY3RzIHByb2plY3RzPXtsaXN0b2Zwcm9qZWN0c30gLz5cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbi1jb250YWluZXIgc2hvcnQtcHJvamVjdC1jb250YWluZXJcIj5cclxuICAgICAge3Byb2plY3RzfVxyXG4gICAgPC9zZWN0aW9uPiAgICAgIFxyXG4gIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob3J0UHJvamVjdFZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBJbWFnZShwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtaW1nLWRlc2NcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItcmV2ZWFsLWNvbnRhaW5lciBwcm9qZWN0LWltYWdlIHNob3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3ViLXJldmVhbCBwcm9qZWN0LWltZycgXHJcbiAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kOiBgdXJsKCcke3Byb3BzLnBob3RvdGVhc2VyfScpIG5vLXJlcGVhdCBjZW50ZXIgdG9wYCwgYmFja2dyb3VuZFNpemU6ICdjb3Zlcid9fT4gPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1iYWNrZXJcIlxyXG4gICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IHByb3BzLmJrZ0NvbG9yfX0+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlXHJcbiIsImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1N0YXRlQ29udGV4dH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29udGV4dC9zdGF0ZUNvbnRleHQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmZ1bmN0aW9uIFByb2plY3RMaW5rKHByb3BzKSB7XHJcbiAgY29uc3Qge3NldFRyYW5zaXRpb25TdGF0ZX0gPSB1c2VDb250ZXh0KFN0YXRlQ29udGV4dClcclxuICBcclxuICAvLyBzZXQgdHJhbnNpdGlvbiBzdGF0ZVxyXG4gIGNvbnN0IGNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0VHJhbnNpdGlvblN0YXRlKCdib3R0b20nKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC10ZXh0LWFsaWducmlnaHRcIj5cclxuICAgICAgPExpbmsgaHJlZj17YCR7cHJvcHMuaW50ZXJuYWxsaW5rc31gfT5cclxuICAgICAgICA8YT5cclxuICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgIHR5cGU9J2J1dHRvbicgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nY29udGVudC1jZW50ZXIgYnV0dG9uLXdyYXBwZXInIFxyXG4gICAgICAgICAgICBvbkNsaWNrPXtjbGlja30gPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9JydcclxuICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOiBwcm9wcy50ZXh0Y29sb3J9fT5WaWV3IHByb2plY3Q8L3NwYW4+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdExpbmsiLCJpbXBvcnQgUmVhY3QsIHtGcmFnbWVudCwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UnXHJcbmltcG9ydCBUaXRsZSBmcm9tICcuL1RpdGxlJ1xyXG5pbXBvcnQge21vdXNlRW50ZXIsIG1vdXNlT3V0LCByZXNpemV9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3BhZ2VhbmltYXRpb25zL3Byb2plY3RIb3Zlci9Qcm9qZWN0SG92ZXJBbmltYXRpb24nXHJcbmltcG9ydCBQcm9qZWN0TGluayBmcm9tICcuL1Byb2plY3RMaW5rJ1xyXG5cclxuZnVuY3Rpb24gUHJvamVjdHMocHJvcHMpIHtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+e1xyXG4gICAgcmVzaXplRWxzKClcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVFbHMpXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplRWxzKVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgXHJcbiAgbGV0IHByb2plY3RzID0gcHJvcHMucHJvamVjdHMubWFwKChwcm9qLCBpKT0+e1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcnQtcHJvamVjdC13cmFwcGVyXCJcclxuICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZDogYHVybCgnJHtwcm9qLnRoZW1lfScpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyYH19IGtleT17aX0gPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHMtd3JhcHBlclwiXHJcbiAgICAgICAgICBvbk1vdXNlTGVhdmU9eyhlKT0+bW91c2VPdXQoZSl9XHJcbiAgICAgICAgICBvbk1vdXNlRW50ZXI9eyhlKT0+bW91c2VFbnRlcihlLCBwcm9qLmJrZ0NvbG9yKX0+XHJcblxyXG4gICAgICAgICAgPEltYWdlIFxyXG4gICAgICAgICAgICBwaG90b3RlYXNlcj17cHJvai5waG90by50ZWFzZXJ9XHJcbiAgICAgICAgICAgIGJrZ0NvbG9yPXtwcm9qLmJrZ0NvbG9yfS8+IFxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC10ZXh0LWRlc2NcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LXRleHQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgIDxUaXRsZSBcclxuICAgICAgICAgICAgICAgIHByaW1hcnljb2xvcj17cHJvai50ZXh0Q29sb3JzLnByaW1hcnl9XHJcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnljb2xvcj17cHJvai50ZXh0Q29sb3JzLnNlY29uZGFyeX1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9qLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgc2hvcnREZXNjPXtwcm9qLnNob3J0RGVzY30vPlxyXG4gICAgICAgICAgICAgIDxQcm9qZWN0TGluayBcclxuICAgICAgICAgICAgICAgIGludGVybmFsbGlua3M9e3Byb2oucHJvamVjdGxpbmtzLmludGVybmFsfVxyXG4gICAgICAgICAgICAgICAgdGV4dGNvbG9yPXtwcm9qLmJ0blRleHRDb2xvcn0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfSlcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIHtwcm9qZWN0c31cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcclxuXHJcbmNvbnN0IHJlc2l6ZUVscyA9ICgpID0+IHtcclxuICByZXNpemUoKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gVGl0bGUocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LXRleHQtYWxpZ25sZWZ0XCI+XHJcbiAgICAgIDxoMyBjbGFzc05hbWU9XCJwLXdyYXBwZXIgaGVhZDJcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaG93LWNvbnRhaW5lciBwLWNvbnRhaW5lciBzaG93XCJcclxuICAgICAgICAgIHN0eWxlPXt7Y29sb3I6IHByb3BzLnByaW1hcnljb2xvcn19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZlYWwgcC1yZXZlYWxcIj57cHJvcHMudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1bm5lciBwLXJ1bm5lclwiPjwvZGl2PlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9oMz5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwic3ViLXJldmVhbC1jb250YWluZXIgcC1kZXNjIGRlc2Mgc2hvd1wiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1Yi1yZXZlYWwgcC1kZXNjLWNvbnRlbnRcIlxyXG4gICAgICAgICAgc3R5bGU9e3tjb2xvcjogcHJvcHMuc2Vjb25kYXJ5Y29sb3J9fT57cHJvcHMuc2hvcnREZXNjfTwvc3Bhbj5cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaXRsZVxyXG4iLCJpbXBvcnQgUmVhY3QsIHtGcmFnbWVudCwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7U3RhdGVDb250ZXh0fSBmcm9tICcuLi8uLi8uLi91dGlscy9jb250ZXh0L3N0YXRlQ29udGV4dCdcclxuaW1wb3J0IHtzZXRUcmFuc2l0aW9uU3RhdGV9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3BhZ2VhbmltYXRpb25zL21vdGlvbi9jb21tb24nXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmZ1bmN0aW9uIFBhcmFncmFwaExpbmtzKHByb3BzKSB7XHJcbiAgY29uc3Qge3N0YXRlLCBzZXRTdGF0ZX0gPSB1c2VDb250ZXh0KFN0YXRlQ29udGV4dClcclxuXHJcbiAgY29uc3QgY2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRTdGF0ZSh7XHJcbiAgICAgIGV4aXRNb2RlOiAnYm90dG9tRXhpdCcsXHJcbiAgICAgIGlzVHJhbnNpdGlvbmluZzogc2V0VHJhbnNpdGlvblN0YXRlKHN0YXRlLmlzVHJhbnNpdGlvbmluZyksXHJcbiAgICAgIGFuaW1hdGlvbjogJ2JvdHRvbUFuaW1hdGlvbidcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8aDMgY2xhc3NOYW1lPVwicC13cmFwcGVyIGhlYWQzXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2hvdy1jb250YWluZXIgcC1jb250YWluZXIgc2hvd1wiXHJcbiAgICAgICAgICBzdHlsZT17e2NvbG9yOiBwcm9wcy5jb2xvcnMucHJpbWFyeX19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZlYWwgcC1yZXZlYWxcIj5Db25uZWN0IHdpdGggbWU8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVubmVyIHAtcnVubmVyXCI+PC9kaXY+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2gzPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJzdWItcmV2ZWFsLWNvbnRhaW5lciBwLWRlc2MgcC1saW5rcyBkZXNjIHNob3dcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWItcmV2ZWFsIHAtZGVzYy1jb250ZW50XCJcclxuICAgICAgICAgIHN0eWxlPXt7Y29sb3I6IHByb3BzLmNvbG9ycy5zZWNvbmRhcnksIGZvbnRXZWlnaHQ6IDUwMH19PiBJJ20gZXhjaXRlZCB0b1xyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9cIiBcclxuICAgICAgICAgICAgcmVsPSdub29wZW5lciBub3JlZmVycmVyJ1xyXG4gICAgICAgICAgICB0YXJnZXQ9J19ibGFuayc+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbGlua3MnPiBjb25uZWN0PC9zcGFuPlxyXG4gICAgICAgICAgPC9hPiB3aXRoIHlvdSBncmVhdCBwZW9wbGUgbGlrZSB5b3UuIENsaWNrIFxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jcmVkZW50aWFsc1wiPlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICA8c3BhbiBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbGlua3MnXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbGlja30+IGhlcmU8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYT4gXHJcbiAgICAgICAgICA8L0xpbms+IHRvIHNlZSBzb21lIG9mIG15IGNyZWRlbnRpYWxzLlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9wPlxyXG4gICAgICB7LyogPHAgY2xhc3NOYW1lPVwic3ViLXJldmVhbC1jb250YWluZXIgcC1kZXNjIHAtbGlua3MgZGVzYyBzaG93XCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViLXJldmVhbCBwLWRlc2MtY29udGVudFwiXHJcbiAgICAgICAgICBzdHlsZT17e2NvbG9yOiBwcm9wcy5jb2xvcnMuc2Vjb25kYXJ5LCBmb250V2VpZ2h0OiA1MDB9fT4gQ2xpY2sgXHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2NyZWRlbnRpYWxzXCI+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbGlua3MnPiBoZXJlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+IFxyXG4gICAgICAgICAgPC9MaW5rPiB0byBzZWUgc29tZSBvZiBteSBjcmVkZW50aWFscy5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvcD4gICovfVxyXG4gICAgPC9GcmFnbWVudD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhcmFncmFwaExpbmtzIiwiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgRnJhZ21lbnR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUGFyYWdyYXBoTGlua3MgZnJvbSAnLi9QYXJhZ3JhcGhMaW5rcy9QYXJhZ3JhcGhMaW5rcydcclxuaW1wb3J0IHtQYWdlRGF0YX0gZnJvbSAnLi4vLi4vdXRpbHMvY29udGV4dC9wYWdlQ29udGV4dCdcclxuXHJcbmZ1bmN0aW9uIFN1YnBhcmFncmFwaHMgKCkge1xyXG4gIGNvbnN0IHtoZWFkZXJzfSA9IHVzZUNvbnRleHQoUGFnZURhdGEpXHJcblxyXG4gIGxldCBzZWN0aW9ucyA9IGhlYWRlcnMuc3ViUGFyYWdyYXBoLmNvbnRlbnQubWFwKCh0ZXh0LCBpKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RnJhZ21lbnQga2V5PXtpfT5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwicC13cmFwcGVyIGhlYWQzXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaG93LWNvbnRhaW5lciBwLWNvbnRhaW5lciBzaG93XCJcclxuICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjogaGVhZGVycy50ZXh0Q29sb3JzLnByaW1hcnl9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZlYWwgcC1yZXZlYWxcIj57dGV4dC50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydW5uZXIgcC1ydW5uZXJcIj48L2Rpdj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2gzPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInN1Yi1yZXZlYWwtY29udGFpbmVyIHAtZGVzYyBkZXNjIHNob3dcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1Yi1yZXZlYWwgcC1kZXNjLWNvbnRlbnRcIlxyXG4gICAgICAgICAgICBzdHlsZT17e2NvbG9yOiBoZWFkZXJzLnRleHRDb2xvcnMuc2Vjb25kYXJ5LCBcclxuICAgICAgICAgICAgZm9udFdlaWdodDogaGVhZGVycy50aXRsZVswXSA9PT0gICdBYm91dCBtZS4nID8gNTAwIDogNjAwfX0+IFxyXG4gICAgICAgICAgICB7dGV4dC50ZXh0fTwvc3Bhbj5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICApXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdwYXJhZ3JhcGhzJz5cclxuICAgICAge3NlY3Rpb25zfVxyXG4gICAgICB7aGVhZGVycy5zdWJQYXJhZ3JhcGguc3BlY2lhbExpbmtzLmlzVHJ1ZSA/IFxyXG4gICAgICAgIDxQYXJhZ3JhcGhMaW5rcyBjb2xvcnM9e2hlYWRlcnMudGV4dENvbG9yc30gLz4gOiBudWxsfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdWJwYXJhZ3JhcGhzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBCcmFuZExvZ28ocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9J25hdmJhci1sb2dvLXN2Zycgd2lkdGg9XCIyMjRcIiBoZWlnaHQ9XCIyMjVcIiB2aWV3Qm94PVwiMCAwIDIyNCAyMjVcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgPGcgY2xpcFBhdGg9XCJ1cmwoI2NsaXAwKVwiPlxyXG4gICAgICAgIDxwYXRoIGQ9XCJNNTguODg3OSAxMzQuMzAySDYxLjYzMThDNjcuNDAxMiAxMzQuMzAyIDcyLjQ2NzEgMTMyLjM2NyA3Ni44MjkzIDEyOC40OThDODEuMjYxOCAxMjQuNTU3IDgzLjQ3ODEgMTIwLjAxOCA4My40NzgxIDExNC44ODJMODMuNjg5MiAxMTMuNTFWMTEyLjEzN0w4My45MDAzIDEwOC44NjZWMTAyLjg1QzgzLjkwMDMgOTguNzY4MSA4MS44MjQ3IDk2LjcyODQgNzcuNjczNiA5Ni43Mjg0SDcyLjkyNDRMNzIuMTg1NiA5Ni44MzM1TDY4LjA2OTcgOTcuMTQ5OUM2Ni4wOTk3IDk3LjQzMTkgNjQuNjkyNSA5Ny41NzI0IDYzLjg0ODIgOTcuNTcyNEM1OC4xNDkxIDk3LjU3MjQgNTIuODcyMyA5OS43MTgyIDQ4LjAxNzUgMTA0LjAxMUM0NC42NDA0IDEwNy4wMzYgNDIuOTUxOCAxMTEuMzI5IDQyLjk1MTggMTE2Ljg4N1YxMTguOTk4QzQyLjk1MTggMTIzLjcxMyA0NC40NjQ1IDEyNy40NDEgNDcuNDg5OSAxMzAuMTg2QzUwLjU4NTcgMTMyLjkzIDU0LjM4NDkgMTM0LjMwMiA1OC44ODc5IDEzNC4zMDJaTTM1LjM1MzEgNjYuODU4N0MzMC42MzkxIDY2Ljg1ODcgMjguMjgyMSA2My44MzMgMjguMjgyMSA1Ny43ODE4QzI4LjI4MjEgNTMuMjc4NSAzMi4wODE0IDQ5LjM3MzIgMzkuNjgwMSA0Ni4wNjYyQzQ3LjM0OTIgNDIuNjg4OCA1NS4yOTk2IDQxIDYzLjUzMTUgNDFINjguODA4NEM3NS45MTQ2IDQxIDgyLjE3NjUgNDIuMzM2OSA4Ny41OTQgNDUuMDEwN0M5My4wMTE3IDQ3LjYxNDIgOTcuMTI3NiA1MS4xNjc1IDk5Ljk0MTUgNTUuNjcwOEMxMDIuODI3IDYwLjE3NDEgMTA0LjU4NiA2Ni4wNDk1IDEwNS4yMTggNzMuMjk2OUMxMDUuMzYgNzQuOTg1NyAxMDUuNDMgODMuMTgzIDEwNS40MyA5Ny44ODg3QzEwNS40MyAxMTIuNTk1IDEwNS42MDUgMTIxLjA3NCAxMDUuOTU3IDEyMy4zMjZDMTA2LjM4IDEyNS41MDcgMTA3LjUwNSAxMjguMTggMTA5LjMzNSAxMzEuMzQ3QzExMS4yMzUgMTM0LjUxNCAxMTIuMTg0IDEzNy4xMTYgMTEyLjE4NCAxMzkuMTU3QzExMi4xODQgMTQxLjE5OCAxMTEuMiAxNDIuOTU3IDEwOS4yMyAxNDQuNDM0QzEwNy4zMyAxNDUuODQyIDEwNC41NSAxNDYuNTQ2IDEwMC44OTIgMTQ2LjU0NkM5Ny4yMzMxIDE0Ni41NDYgOTMuMjU3OSAxNDUuNjY2IDg4Ljk2NiAxNDMuOTA3Qzg0LjY3NDIgMTQyLjA3NyA4MS41NDMzIDE0MS4xNjIgNzkuNTczMyAxNDEuMTYyQzc5LjM2MjEgMTQxLjE2MiA3NS44NDQyIDE0Mi40MjkgNjkuMDE5NSAxNDQuOTYyQzYyLjE5NDggMTQ3LjQyNSA1Ni40MjU0IDE0OC42NTYgNTEuNzExNCAxNDguNjU2SDQ5LjM4OTVDNDEuNTA5NSAxNDguNjU2IDM0Ljc5MDIgMTQ2LjE1OSAyOS4yMzE5IDE0MS4xNjJDMjMuNzQ0IDEzNi4xNjcgMjEgMTI5LjA2MSAyMSAxMTkuODQyQzIxIDExMC42MjUgMjQuMDI1NSAxMDMuNDQ4IDMwLjA3NjIgOTguMzExMkMzNi4xMjcxIDkzLjEwNDggNDMuNDc5NSA4OS41NTEgNTIuMTMzNSA4Ny42NTExQzU0LjczNjggODcuMDg4MiA1OS4wNjM4IDg2LjM0OTQgNjUuMTE0NiA4NS40MzQ2QzcxLjE2NTQgODQuNTE5OSA3NS4yODE0IDgzLjU3IDc3LjQ2MjQgODIuNTg0OUM4MS4yNjE4IDgwLjgyNTkgODMuMTYxNSA3Ny41MTg4IDgzLjE2MTUgNzIuNjYzN0M4My4xNjE1IDY3LjczODIgODEuNTQzMyA2My45MDM0IDc4LjMwNjggNjEuMTU5MkM3NS4wNzAzIDU4LjM0NDYgNzEuMjAwNiA1Ni45Mzc0IDY2LjY5NzcgNTYuOTM3NEM2Mi4yNjUxIDU2LjkzNzQgNTYuNDI1NCA1OC41OTEgNDkuMTc4NSA2MS44OThDNDEuOTMxNiA2NS4yMDUxIDM3LjMyMzEgNjYuODU4NyAzNS4zNTMxIDY2Ljg1ODdaTTE0OC45MzMgMTM0LjMwMkgxNTEuNjc3QzE1Ny40NDYgMTM0LjMwMiAxNjIuNTExIDEzMi4zNjcgMTY2Ljg3MyAxMjguNDk4QzE3MS4zMDYgMTI0LjU1NyAxNzMuNTIzIDEyMC4wMTggMTczLjUyMyAxMTQuODgyTDE3My43MzQgMTEzLjUxVjExMi4xMzdMMTczLjk0NSAxMDguODY2VjEwMi44NUMxNzMuOTQ1IDk4Ljc2ODEgMTcxLjg2OSA5Ni43Mjg0IDE2Ny43MTggOTYuNzI4NEgxNjIuOTY5TDE2Mi4yMyA5Ni44MzM1TDE1OC4xMTQgOTcuMTQ5OUMxNTYuMTQ0IDk3LjQzMTkgMTU0LjczNyA5Ny41NzI0IDE1My44OTIgOTcuNTcyNEMxNDguMTk0IDk3LjU3MjQgMTQyLjkxNyA5OS43MTgyIDEzOC4wNjIgMTA0LjAxMUMxMzQuNjg1IDEwNy4wMzYgMTMyLjk5NiAxMTEuMzI5IDEzMi45OTYgMTE2Ljg4N1YxMTguOTk4QzEzMi45OTYgMTIzLjcxMyAxMzQuNTA5IDEyNy40NDEgMTM3LjUzNCAxMzAuMTg2QzE0MC42MyAxMzIuOTMgMTQ0LjQyOSAxMzQuMzAyIDE0OC45MzMgMTM0LjMwMlpNMTI1LjM5OCA2Ni44NTg3QzEyMC42ODMgNjYuODU4NyAxMTguMzI2IDYzLjgzMyAxMTguMzI2IDU3Ljc4MThDMTE4LjMyNiA1My4yNzg1IDEyMi4xMjUgNDkuMzczMiAxMjkuNzI1IDQ2LjA2NjJDMTM3LjM5NCA0Mi42ODg4IDE0NS4zNDQgNDEgMTUzLjU3NiA0MUgxNTguODUzQzE2NS45NTkgNDEgMTcyLjIyMSA0Mi4zMzY5IDE3Ny42MzggNDUuMDEwN0MxODMuMDU2IDQ3LjYxNDIgMTg3LjE3MiA1MS4xNjc1IDE4OS45ODcgNTUuNjcwOEMxOTIuODcxIDYwLjE3NDEgMTk0LjYzIDY2LjA0OTUgMTk1LjI2MyA3My4yOTY5QzE5NS40MDQgNzQuOTg1NyAxOTUuNDc1IDgzLjE4MyAxOTUuNDc1IDk3Ljg4ODdDMTk1LjQ3NSAxMTIuNTk1IDE5NS42NSAxMjEuMDc0IDE5Ni4wMDIgMTIzLjMyNkMxOTYuNDI0IDEyNS41MDcgMTk3LjU1IDEyOC4xOCAxOTkuMzc5IDEzMS4zNDdDMjAxLjI3OSAxMzQuNTE0IDIwMi4yMjkgMTM3LjExNiAyMDIuMjI5IDEzOS4xNTdDMjAyLjIyOSAxNDEuMTk4IDIwMS4yNDQgMTQyLjk1NyAxOTkuMjc0IDE0NC40MzRDMTk3LjM3NCAxNDUuODQyIDE5NC41OTQgMTQ2LjU0NiAxOTAuOTM3IDE0Ni41NDZDMTg3LjI3OCAxNDYuNTQ2IDE4My4zMDIgMTQ1LjY2NiAxNzkuMDExIDE0My45MDdDMTc0LjcxOCAxNDIuMDc3IDE3MS41ODggMTQxLjE2MiAxNjkuNjE3IDE0MS4xNjJDMTY5LjQwNiAxNDEuMTYyIDE2NS44ODkgMTQyLjQyOSAxNTkuMDY0IDE0NC45NjJDMTUyLjI0IDE0Ny40MjUgMTQ2LjQ3IDE0OC42NTYgMTQxLjc1NiAxNDguNjU2SDEzOS40MzRDMTMxLjU1NCAxNDguNjU2IDEyNC44MzUgMTQ2LjE1OSAxMTkuMjc2IDE0MS4xNjJDMTEzLjc4OCAxMzYuMTY3IDExMS4wNDQgMTI5LjA2MSAxMTEuMDQ0IDExOS44NDJDMTExLjA0NCAxMTAuNjI1IDExNC4wNyAxMDMuNDQ4IDEyMC4xMiA5OC4zMTEyQzEyNi4xNzEgOTMuMTA0OCAxMzMuNTI0IDg5LjU1MSAxNDIuMTc4IDg3LjY1MTFDMTQ0Ljc4MSA4Ny4wODgyIDE0OS4xMDkgODYuMzQ5NCAxNTUuMTYgODUuNDM0NkMxNjEuMjA5IDg0LjUxOTkgMTY1LjMyNiA4My41NyAxNjcuNTA3IDgyLjU4NDlDMTcxLjMwNiA4MC44MjU5IDE3My4yMDYgNzcuNTE4OCAxNzMuMjA2IDcyLjY2MzdDMTczLjIwNiA2Ny43MzgyIDE3MS41ODggNjMuOTAzNCAxNjguMzUxIDYxLjE1OTJDMTY1LjExNSA1OC4zNDQ2IDE2MS4yNDUgNTYuOTM3NCAxNTYuNzQyIDU2LjkzNzRDMTUyLjMwOSA1Ni45Mzc0IDE0Ni40NyA1OC41OTEgMTM5LjIyMyA2MS44OThDMTMxLjk3NiA2NS4yMDUxIDEyNy4zNjggNjYuODU4NyAxMjUuMzk4IDY2Ljg1ODdaXCIgZmlsbD17cHJvcHMuY29sb3JNb2RlfS8+XHJcbiAgICAgICAgPHBhdGggZD1cIk00MC4yNDk3IDE2Ny43MjRWMTY3LjkwOEM0MC4yNDk3IDE2OC40MyA0MC4wOTYyIDE2OC44NzUgMzkuNzg5MiAxNjkuMjQzQzM5LjQ5MjQgMTY5LjYwMiAzOS4wMzE5IDE2OS43ODEgMzguNDA3NiAxNjkuNzgxSDM4LjE2MkwzNy42ODYxIDE2OS43MkMzNy40MDk3IDE2OS43MiAzNy4xNDM3IDE2OS41OTIgMzYuODg3OSAxNjkuMzM1QzM2LjYzMiAxNjkuMDggMzYuNTA0IDE2OC42OTYgMzYuNTA0IDE2OC4xODRWMTY4TDM2LjU4MDggMTY3LjQ0N0MzNi41ODA4IDE2Ny4yMzMgMzYuNzA4OCAxNjYuOTY3IDM2Ljk2NDYgMTY2LjY0OUMzNy4yMzA2IDE2Ni4zMzIgMzcuNTY4NCAxNjYuMTczIDM3Ljk3NzcgMTY2LjE3M0wzOC4zMzA4IDE2Ni4xMjZIMzguNjM3OEwzOS4wNjc2IDE2Ni4xODhDMzkuMzMzOCAxNjYuMTg4IDM5LjU5NDcgMTY2LjMyMSAzOS44NTA2IDE2Ni41ODdDNDAuMTE2NiAxNjYuODQ0IDQwLjI0OTcgMTY3LjIyMiA0MC4yNDk3IDE2Ny43MjRaTTM5LjUyODIgMTc0LjIwMkwzOS4zNTkzIDE3OC4zMzFMMzkuMzI4NiAxNzguNzQ2TDM5LjI4MjYgMTgwLjAwNlYxODAuNjA0QzM5LjI4MjYgMTgyLjA3OCAzOS4zMjM1IDE4My4wNDUgMzkuNDA1NCAxODMuNTA2QzM5LjQ5NzUgMTgzLjk2NiAzOS42NjYzIDE4NC40MTYgMzkuOTEyIDE4NC44NTZDNDAuMTU3NiAxODUuMjg2IDQwLjI4MDQgMTg1LjU5OCA0MC4yODA0IDE4NS43OTNWMTg1LjkzMUM0MC4yODA0IDE4Ni40MzIgNDAuMDI0NiAxODYuODMxIDM5LjUxMjkgMTg3LjEyOUMzOS4wMDExIDE4Ny40MjYgMzguMzA1MyAxODcuNTc0IDM3LjQyNTIgMTg3LjU3NEgzNy4wNDEzQzM2LjUyOTcgMTg3LjU3NCAzNi4xNDA4IDE4Ny40NjEgMzUuODc0NyAxODcuMjM2QzM1LjYwODYgMTg3IDM1LjQ3NTYgMTg2Ljc1IDM1LjQ3NTYgMTg2LjQ4NFYxODYuMTQ3QzM1LjQ3NTYgMTg2LjAxMyAzNS41OTMzIDE4NS41NDIgMzUuODI4NyAxODQuNzM0QzM2LjA2NCAxODMuOTE1IDM2LjE4MTcgMTgyLjgwNCAzNi4xODE3IDE4MS40MDJDMzYuMjEyNCAxODEuMDAzIDM2LjIyNzggMTgwLjcyNyAzNi4yMjc4IDE4MC41NzRMMzYuMjczOCAxNzkuNzI5TDM2LjMwNDUgMTc5LjMxNEMzNi4zNTU3IDE3OC41OTggMzYuMzgxMiAxNzguMDQxIDM2LjM4MTIgMTc3LjY0MUwzNi4zOTY2IDE3Ny4wMjdDMzYuMzk2NiAxNzYuMjU5IDM2LjI2ODcgMTc1LjU3OCAzNi4wMTI4IDE3NC45ODVDMzUuNzY3MiAxNzQuMzkyIDM1LjY0NDQgMTc0LjAyMyAzNS42NDQ0IDE3My44OEMzNS42NDQ0IDE3My4xNDMgMzYuMzQwMyAxNzIuNzc0IDM3LjczMjEgMTcyLjc3NEgzOC4yODQ4QzM4LjgwNjcgMTcyLjc3NCAzOS4xNDQ1IDE3Mi45MTMgMzkuMjk3OSAxNzMuMTg5QzM5LjQ1MTQgMTczLjQ1NSAzOS41MjgyIDE3My43OTMgMzkuNTI4MiAxNzQuMjAyWk00Ny45NDMgMTczLjQ4MUM0OC43MzEgMTczLjE4NCA0OS41Mzk0IDE3My4wMzYgNTAuMzY4MyAxNzMuMDM2QzUxLjE5NzMgMTczLjAzNiA1Mi4wNTcgMTczLjI4MSA1Mi45NDczIDE3My43NzNDNTMuODQ3OSAxNzQuMjY0IDU0LjMzOTEgMTc0LjUwOSA1NC40MjEgMTc0LjUwOUM1NC41MDI5IDE3NC41MDkgNTUuMDU1NSAxNzQuMjU5IDU2LjA3ODkgMTczLjc1N0M1Ny4xMDIzIDE3My4yNTYgNTguMDIzMyAxNzMuMDA0IDU4Ljg0MiAxNzMuMDA0QzU5LjY3MSAxNzMuMDA0IDYwLjM1MTYgMTczLjE3OSA2MC44ODM4IDE3My41MjdDNjEuNDI2MSAxNzMuODY1IDYxLjgzNTUgMTc0LjI2OSA2Mi4xMTE4IDE3NC43MzlDNjIuNjMzNyAxNzUuNjQgNjIuODk0NyAxNzcuNjQxIDYyLjg5NDcgMTgwLjc0M0M2Mi44OTQ3IDE4Mi4xMzQgNjIuOTA0OSAxODIuOTMzIDYyLjkyNTQgMTgzLjEzN0M2Mi45NTYxIDE4My4zMzIgNjMuMDI3NyAxODMuNjg0IDYzLjE0MDMgMTg0LjE5NkM2My4yNjMxIDE4NC42OTggNjMuMzI0NSAxODUuMTEyIDYzLjMyNDUgMTg1LjQ0QzYzLjMyNDUgMTg1Ljc1NyA2My4xOTE1IDE4Ni4wOSA2Mi45MjU0IDE4Ni40MzdDNjIuNjU5MyAxODYuNzg2IDYyLjMwNjMgMTg2Ljk2IDYxLjg2NjIgMTg2Ljk2QzYwLjk5NjMgMTg2Ljk2IDYwLjQ3OTUgMTg2LjYwNiA2MC4zMTU3IDE4NS45MDFDNjAuMTkyOSAxODUuMzg5IDYwLjA0OTcgMTgzLjg5NSA1OS44ODU5IDE4MS40MThDNTkuNzMyNCAxNzguOTQxIDU5LjU2MzUgMTc3LjQ4NyA1OS4zNzkzIDE3Ny4wNThDNTkuMDEwOSAxNzYuMTU3IDU4LjIyOCAxNzUuNzA2IDU3LjAzMDcgMTc1LjcwNkM1Ni4yNjMxIDE3NS43MDYgNTUuNjY0NSAxNzYuMTg4IDU1LjIzNDYgMTc3LjE1QzU0LjYxMDMgMTc4LjUzMiA1NC4yOTgyIDE4MC40OTcgNTQuMjk4MiAxODMuMDQ1TDU0LjQ1MTcgMTg1LjI1NUM1NC40NTE3IDE4Ni4wMzQgNTQuMTY1MSAxODYuNjIyIDUzLjU5MjEgMTg3LjAyMUM1My4yMjM3IDE4Ny4yNzcgNTIuNzMyNCAxODcuNDA1IDUyLjExODQgMTg3LjQwNUM1MS41MTQ2IDE4Ny40MDUgNTEuMTE1NCAxODcuMzQzIDUwLjkyMSAxODcuMjJDNTAuNTgzMyAxODcuMDE2IDUwLjQxNDQgMTg2LjU4MSA1MC40MTQ0IDE4NS45MTZDNTAuNDE0NCAxODUuNzkzIDUwLjUxMTcgMTg1LjI5MiA1MC43MDYxIDE4NC40MTFDNTAuOTEwOCAxODMuNTIxIDUxLjAxMzEgMTgyLjA3OCA1MS4wMTMxIDE4MC4wODJDNTEuMDEzMSAxNzguMDc2IDUwLjg2NDcgMTc2LjgwMiA1MC41NjggMTc2LjI1OUM1MC4yNzEyIDE3NS43MDYgNDkuNzU0MyAxNzUuNDMgNDkuMDE3NSAxNzUuNDNDNDguMjgwNiAxNzUuNDMgNDcuNjI1NyAxNzUuNjgxIDQ3LjA1MjYgMTc2LjE4M0M0Ni40ODk3IDE3Ni42ODQgNDYuMDc1MiAxNzcuMjMyIDQ1LjgwOTIgMTc3LjgyNUM0NS41NTMzIDE3OC40MTkgNDUuMzIzIDE3OS44MzEgNDUuMTE4NCAxODIuMDYyQzQ0LjkyNCAxODQuMjk0IDQ0Ljc4NTcgMTg1LjU3MyA0NC43MDM5IDE4NS45MDFDNDQuNTYwNiAxODYuNDYzIDQ0LjE0NjIgMTg2Ljc0NSA0My40NjA1IDE4Ni43NDVDNDIuNzg1MSAxODYuNzQ1IDQyLjMxOTQgMTg2LjU0NSA0Mi4wNjM1IDE4Ni4xNDdDNDEuODE3OSAxODUuNzM3IDQxLjY5NTEgMTg1LjI0MSA0MS42OTUxIDE4NC42NTdMNDEuNzcxOSAxODQuMTJMNDIuMDYzNSAxODMuMDZDNDIuMTg2MyAxODIuNTY5IDQyLjI1OCAxODEuOTk2IDQyLjI3ODUgMTgxLjM0MUM0Mi40MzIgMTc3LjI3NyA0Mi41NDk3IDE3NC45NTkgNDIuNjMxNSAxNzQuMzg3QzQyLjcxMzQgMTczLjgxMyA0My4wODE5IDE3My41MjcgNDMuNzM2OCAxNzMuNTI3TDQ2LjAyNDEgMTczLjkxQzQ2LjUxNTMgMTczLjkxIDQ3LjE1NDkgMTczLjc2OCA0Ny45NDMgMTczLjQ4MVpNNjkuNTEzNCAxODUuNzQ3SDY5LjkxMjVDNzAuNzUxNyAxODUuNzQ3IDcxLjQ4ODUgMTg1LjQ2NiA3Mi4xMjMxIDE4NC45MDNDNzIuNzY3OCAxODQuMzMgNzMuMDkwMSAxODMuNjcgNzMuMDkwMSAxODIuOTIyTDczLjEyMDggMTgyLjcyMlYxODIuNTIzTDczLjE1MTUgMTgyLjA0N1YxODEuMTcyQzczLjE1MTUgMTgwLjU3OSA3Mi44NDk2IDE4MC4yODIgNzIuMjQ1OSAxODAuMjgySDcxLjU1NUw3MS40NDc2IDE4MC4yOTdMNzAuODQ4OSAxODAuMzQzQzcwLjU2MjMgMTgwLjM4NCA3MC4zNTc3IDE4MC40MDUgNzAuMjM0OSAxODAuNDA1QzY5LjQwNTkgMTgwLjQwNSA2OC42Mzg0IDE4MC43MTYgNjcuOTMyMiAxODEuMzQxQzY3LjQ0MSAxODEuNzgxIDY3LjE5NTQgMTgyLjQwNSA2Ny4xOTU0IDE4My4yMTRWMTgzLjUyMUM2Ny4xOTU0IDE4NC4yMDcgNjcuNDE1NCAxODQuNzQ5IDY3Ljg1NTUgMTg1LjE0OEM2OC4zMDU3IDE4NS41NDcgNjguODU4NCAxODUuNzQ3IDY5LjUxMzQgMTg1Ljc0N1pNNjYuMDkwMSAxNzUuOTM3QzY1LjQwNDQgMTc1LjkzNyA2NS4wNjE3IDE3NS40OTcgNjUuMDYxNyAxNzQuNjE3QzY1LjA2MTcgMTczLjk2MSA2NS42MTQzIDE3My4zOTMgNjYuNzE5NiAxNzIuOTEzQzY3LjgzNSAxNzIuNDIyIDY4Ljk5MTUgMTcyLjE3NiA3MC4xODg4IDE3Mi4xNzZINzAuOTU2NEM3MS45ODk5IDE3Mi4xNzYgNzIuOTAwOCAxNzIuMzcgNzMuNjg4OCAxNzIuNzU5Qzc0LjQ3NjggMTczLjEzOCA3NS4wNzU1IDE3My42NTUgNzUuNDg0OCAxNzQuMzFDNzUuOTA0NCAxNzQuOTY0IDc2LjE2MDMgMTc1LjgxOSA3Ni4yNTI0IDE3Ni44NzNDNzYuMjcyOSAxNzcuMTE5IDc2LjI4MzEgMTc4LjMxMiA3Ni4yODMxIDE4MC40NTFDNzYuMjgzMSAxODIuNTkgNzYuMzA4NyAxODMuODIzIDc2LjM1OTkgMTg0LjE1Qzc2LjQyMTMgMTg0LjQ2NyA3Ni41ODUgMTg0Ljg1NiA3Ni44NTExIDE4NS4zMTdDNzcuMTI3NCAxODUuNzc3IDc3LjI2NTUgMTg2LjE1NiA3Ny4yNjU1IDE4Ni40NTNDNzcuMjY1NSAxODYuNzUgNzcuMTIyMyAxODcuMDA1IDc2LjgzNTcgMTg3LjIyQzc2LjU1OTQgMTg3LjQyNiA3Ni4xNTUyIDE4Ny41MjggNzUuNjIzMSAxODcuNTI4Qzc1LjA5MDkgMTg3LjUyOCA3NC41MTI2IDE4Ny40IDczLjg4ODMgMTg3LjE0NEM3My4yNjQxIDE4Ni44NzggNzIuODA4NyAxODYuNzQ1IDcyLjUyMjEgMTg2Ljc0NUM3Mi40OTE1IDE4Ni43NDUgNzEuOTc5NyAxODYuOTI5IDcwLjk4NyAxODcuMjk3QzY5Ljk5NDQgMTg3LjY1NiA2OS4xNTUyIDE4Ny44MzUgNjguNDY5NSAxODcuODM1SDY4LjEzMThDNjYuOTg1NiAxODcuODM1IDY2LjAwODMgMTg3LjQ3MSA2NS4xOTk4IDE4Ni43NDVDNjQuNDAxNiAxODYuMDE4IDY0LjAwMjQgMTg0Ljk4NCA2NC4wMDI0IDE4My42NDRDNjQuMDAyNCAxODIuMzAzIDY0LjQ0MjQgMTgxLjI1OSA2NS4zMjI2IDE4MC41MTJDNjYuMjAyNyAxNzkuNzU0IDY3LjI3MjIgMTc5LjIzNyA2OC41MzA5IDE3OC45NjFDNjguOTA5NSAxNzguODggNjkuNTM4OSAxNzguNzcyIDcwLjQxOTEgMTc4LjYzOUM3MS4yOTkyIDE3OC41MDUgNzEuODk3OSAxNzguMzY4IDcyLjIxNTEgMTc4LjIyNEM3Mi43Njc3IDE3Ny45NjkgNzMuMDQ0MSAxNzcuNDg3IDczLjA0NDEgMTc2Ljc4MUM3My4wNDQxIDE3Ni4wNjUgNzIuODA4NyAxNzUuNTA3IDcyLjMzNzkgMTc1LjEwOEM3MS44NjcxIDE3NC42OTggNzEuMzA0MyAxNzQuNDk0IDcwLjY0OTQgMTc0LjQ5NEM3MC4wMDQ2IDE3NC40OTQgNjkuMTU1MiAxNzQuNzM0IDY4LjEwMTEgMTc1LjIxNUM2Ny4wNDcgMTc1LjY5NiA2Ni4zNzY3IDE3NS45MzcgNjYuMDkwMSAxNzUuOTM3Wk05Mi40MTkzIDE4NS44MzlDOTIuNDE5MyAxODYuNTk3IDkxLjc1OTIgMTg2Ljk3NSA5MC40MzkxIDE4Ni45NzVDODkuNjkyIDE4Ni45NzUgODkuMTkwNSAxODYuNzk2IDg4LjkzNDcgMTg2LjQzN0M4OC44MTE4IDE4Ni4yNjMgODguNzUwNCAxODUuODU1IDg4Ljc1MDQgMTg1LjIwOUw4OC43MDQ0IDE4NC4yMjdDODguNjMyNyAxODMuMTUzIDg4LjU5NyAxODIuMDczIDg4LjU5NyAxODAuOTg4Qzg4LjU5NyAxNzguNjQ0IDg4LjM5MjIgMTc3LjA3MyA4Ny45ODI5IDE3Ni4yNzVDODcuNTgzOCAxNzUuNDY2IDg2LjkwODMgMTc1LjA2MiA4NS45NTY2IDE3NS4wNjJDODUuMzIyMSAxNzUuMDYyIDg0LjczMzcgMTc1LjI1MSA4NC4xOTEzIDE3NS42M0M4My42NTkxIDE3Ni4wMDkgODMuMjQ5OCAxNzYuNTM1IDgyLjk2MzIgMTc3LjIxMUM4Mi4zNjk2IDE3OC41OTMgODIuMDcyOCAxODEuMTQ2IDgyLjA3MjggMTg0Ljg3MkM4Mi4wNzI4IDE4NS43MjEgODEuOTA5MSAxODYuMzIgODEuNTgxNiAxODYuNjY4QzgxLjI2NDMgMTg3LjAxNiA4MC44NTUgMTg3LjE5IDgwLjM1MzUgMTg3LjE5SDgwLjA0NjVDNzguOTAwMyAxODcuMTkgNzguMzI3MiAxODYuNzM0IDc4LjMyNzIgMTg1LjgyM1YxODUuNDU1Qzc4LjMyNzIgMTg1LjM0MyA3OC4zODg2IDE4NS4wOTcgNzguNTExNCAxODQuNzE4TDc4Ljc1NyAxODQuMDEyQzc5LjAwMjYgMTgzLjE4MyA3OS4xMjU0IDE4MS40MDggNzkuMTI1NCAxNzguNjg1TDc5LjIwMjIgMTc0LjEyNUM3OS4yMDIyIDE3My41NDIgNzkuNTE5NSAxNzMuMjUgODAuMTU0IDE3My4yNUM4MC43ODg1IDE3My4yNSA4MS40MTI4IDE3My40NiA4Mi4wMjY4IDE3My44OEM4Mi42NTExIDE3NC4yOTkgODMuMDQ1IDE3NC41MDkgODMuMjA4OCAxNzQuNTA5QzgzLjM4MjggMTc0LjUwOSA4My42ODQ3IDE3NC4zOTIgODQuMTE0NSAxNzQuMTU2Qzg1LjU1NzUgMTczLjM2OCA4Ni43MTM5IDE3Mi45NzQgODcuNTgzOCAxNzIuOTc0SDg3Ljk4MjlDODkuNTQ4NyAxNzIuOTc0IDkwLjY0ODggMTczLjY4IDkxLjI4MzMgMTc1LjA5M0M5MS41OTAzIDE3NS43NTggOTEuNzQzOSAxNzcuMTkxIDkxLjc0MzkgMTc5LjM5MVYxNzkuNDk5QzkxLjc0MzkgMTc5LjY4MiA5MS43Mzg4IDE3OS44NjcgOTEuNzI4NiAxODAuMDUxQzkxLjcyODYgMTgwLjU1MyA5MS43Mjg2IDE4MC44MTMgOTEuNzI4NiAxODAuODM0QzkxLjcyODYgMTgxLjAyOSA5MS43Mjg2IDE4MS4yMTggOTEuNzI4NiAxODEuNDAyQzkxLjcyODYgMTgxLjU0NSA5MS43Mjg2IDE4MS42ODQgOTEuNzI4NiAxODEuODE3QzkxLjcyODYgMTgyLjYwNSA5MS43NTQxIDE4My4xNDIgOTEuODA1MyAxODMuNDI5QzkxLjg3NjkgMTgzLjgxOCA5MS45OTQ2IDE4NC4yMjIgOTIuMTU4NCAxODQuNjQxQzkyLjMzMjQgMTg1LjEwMiA5Mi40MTkzIDE4NS41MDEgOTIuNDE5MyAxODUuODM5WlwiIGZpbGw9e3Byb3BzLmNvbG9yTW9kZX0vPlxyXG4gICAgICAgIDxwYXRoIGQ9XCJNMTE2LjQ5OCAxODAuMjM2VjE4MS40MDJDMTE2LjQ5OCAxODIuNjIgMTE2Ljc3NCAxODMuNjM4IDExNy4zMjcgMTg0LjQ1N0MxMTcuODkgMTg1LjI2NiAxMTguNTUxIDE4NS42NyAxMTkuMzA4IDE4NS42N0gxMTkuNzM3QzEyMC45MDMgMTg1LjY3IDEyMS44MDQgMTg1LjIwNCAxMjIuNDM5IDE4NC4yNzNDMTIzLjA4NCAxODMuMzQxIDEyMy40MDYgMTgxLjk1NSAxMjMuNDA2IDE4MC4xMTNDMTIzLjQyNiAxNzkuODg4IDEyMy40MzcgMTc5LjcyNCAxMjMuNDM3IDE3OS42MjFMMTIzLjQ2OCAxNzkuMzE0TDEyMy40ODMgMTc4LjY2OVYxNzcuNThDMTIzLjQ4MyAxNzUuNDkyIDEyMi42NDkgMTc0LjQ0NyAxMjAuOTgxIDE3NC40NDdIMTIwLjM4MkMxMTkuMjk3IDE3NC40NDcgMTE4LjM3NyAxNzQuOTk2IDExNy42MTkgMTc2LjA5QzExNi44NzEgMTc3LjE4NiAxMTYuNDk4IDE3OC41NjcgMTE2LjQ5OCAxODAuMjM2Wk0xMTMuNTUxIDE4MC45NDJDMTEzLjU1MSAxNzkuODc3IDExMy43NCAxNzguNzkyIDExNC4xMTkgMTc3LjY4N0MxMTQuNDk4IDE3Ni41ODEgMTE1LjAyOSAxNzUuNjQgMTE1LjcxNSAxNzQuODYyQzExNi40MDEgMTc0LjA3NCAxMTcuMTc0IDE3My41MDYgMTE4LjAzNCAxNzMuMTU4QzExOC44OTMgMTcyLjggMTE5LjkxMSAxNzIuNjIxIDEyMS4wODggMTcyLjYyMUMxMjIuMjc1IDE3Mi42MjEgMTIzLjAxMiAxNzIuNDA2IDEyMy4yOTkgMTcxLjk3NkMxMjMuNTg2IDE3MS41MzYgMTIzLjcyOSAxNzAuNTY4IDEyMy43MjkgMTY5LjA3NEMxMjMuNzI5IDE2OC43OTggMTIzLjY4MyAxNjguNDI5IDEyMy41OSAxNjcuOTdDMTIzLjQ5OCAxNjcuNTA5IDEyMy40NTIgMTY3LjI0MiAxMjMuNDUyIDE2Ny4xNzFDMTIzLjQ1MiAxNjYuNzMxIDEyMy42NDIgMTY2LjMzMiAxMjQuMDIgMTY1Ljk3M0MxMjQuMzk5IDE2NS42MDUgMTI0Ljg5NSAxNjUuNDIxIDEyNS41MDkgMTY1LjQyMUgxMjUuODE2QzEyNi4yOTcgMTY1LjQyMSAxMjYuNjU2IDE2NS41MzMgMTI2Ljg5MSAxNjUuNzU5QzEyNy4xMjYgMTY1Ljk4NCAxMjcuMjQ0IDE2Ni40NTUgMTI3LjI0NCAxNjcuMTcxVjE2OC41OThMMTI3LjIxMyAxNjkuMzJDMTI3LjIwMyAxNjkuNTY1IDEyNy4xOTggMTY5LjkyNCAxMjcuMTk4IDE3MC4zOTRDMTI3LjE5OCAxNzAuODU1IDEyNy4xMjEgMTcyLjMzOSAxMjYuOTY3IDE3NC44NDdDMTI2LjgxNCAxNzcuMzU1IDEyNi43MzcgMTc5LjA3OSAxMjYuNzM3IDE4MC4wMkwxMjYuNzIyIDE4MC4zODlDMTI2LjcxMiAxODAuNjM0IDEyNi43MDcgMTgwLjg3IDEyNi43MDcgMTgxLjA5NUwxMjYuNjkxIDE4MS40NDhDMTI2LjY5MSAxODEuNDQ4IDEyNi42OTEgMTgxLjg0NyAxMjYuNjkxIDE4Mi42NDZDMTI2LjY5MSAxODMuNjc5IDEyNi43NzMgMTg0LjQ1NyAxMjYuOTM3IDE4NC45NzlDMTI3LjEwMSAxODUuNTAxIDEyNy4xODIgMTg1Ljg3NCAxMjcuMTgyIDE4Ni4xQzEyNy4xODIgMTg2LjMyNSAxMjcuMDU1IDE4Ni41NiAxMjYuNzk4IDE4Ni44MDZDMTI2LjU0MyAxODcuMDUxIDEyNi4xNDQgMTg3LjE3NCAxMjUuNjAyIDE4Ny4xNzRDMTI1LjA2OSAxODcuMTc0IDEyNC41NTIgMTg3LjA4OCAxMjQuMDUxIDE4Ni45MTRDMTIzLjU0OSAxODYuNzI5IDEyMy4xODEgMTg2LjYzOCAxMjIuOTQ2IDE4Ni42MzhDMTIyLjcxIDE4Ni42MzggMTIyLjQwNCAxODYuNzA4IDEyMi4wMjQgMTg2Ljg1MkMxMjAuODc4IDE4Ny4yNzEgMTE5LjgzIDE4Ny40ODIgMTE4Ljg3OCAxODcuNDgyQzExOC44NTcgMTg3LjQ4MiAxMTguODM2IDE4Ny40ODIgMTE4LjgxNyAxODcuNDgySDExOC40NjNDMTE2LjkxOCAxODcuNDgyIDExNS43MSAxODYuOTE5IDExNC44NDEgMTg1Ljc5M0MxMTMuOTgxIDE4NC42NTcgMTEzLjU1MSAxODMuMTY3IDExMy41NTEgMTgxLjMyNVYxODAuOTQyWk0xMjkuNTAzIDE2Ni4zNDJDMTI5LjUwMyAxNjUuNTk1IDEzMC4yMDQgMTY1LjIyMSAxMzEuNjA2IDE2NS4yMjFIMTMxLjg4MkMxMzIuNDY2IDE2NS4yMjEgMTMyLjg2NSAxNjUuMzY0IDEzMy4wOCAxNjUuNjUxQzEzMy4yOTQgMTY1LjkyNyAxMzMuNDAyIDE2Ni40NjkgMTMzLjQwMiAxNjcuMjc4TDEzMy4yNzkgMTY5LjU2NUMxMzMuMjQ5IDE2OS45MjQgMTMzLjIzMyAxNzAuMTE4IDEzMy4yMzMgMTcwLjE0OUwxMzMuMjAzIDE3MC43MzJDMTMzLjE4MiAxNzEuMTExIDEzMy4xNjIgMTcxLjQ5NSAxMzMuMTQxIDE3MS44ODRMMTMzLjA5NSAxNzIuNDY4TDEzMy4wNDkgMTczLjM0MkMxMzIuODg2IDE3Ni40NTQgMTMyLjgwMyAxNzguNzUxIDEzMi44MDMgMTgwLjIzNkMxMzIuODAzIDE4MS43MDkgMTMyLjg3IDE4Mi43NjggMTMzLjAwMyAxODMuNDEzQzEzMy4xMzYgMTg0LjA1OCAxMzMuMzQ1IDE4NC42MDYgMTMzLjYzMiAxODUuMDU2QzEzMy45MTkgMTg1LjUwNiAxMzQuMDYyIDE4NS44MDQgMTM0LjA2MiAxODUuOTQ2VjE4Ni4xMzFDMTM0LjA2MiAxODYuNTgxIDEzMy44MzcgMTg2LjkzOSAxMzMuMzg3IDE4Ny4yMDZDMTMyLjk0NiAxODcuNDcxIDEzMi4zNDggMTg3LjYwNSAxMzEuNTkxIDE4Ny42MDVIMTMwLjc5M0MxMzAuMzIxIDE4Ny42MDUgMTI5LjkwNyAxODcuNDcxIDEyOS41NDkgMTg3LjIwNkMxMjkuMjAxIDE4Ni45MjkgMTI5LjAyNyAxODYuNjE3IDEyOS4wMjcgMTg2LjI2OFYxODUuODU1TDEyOS4xMTkgMTg1LjIwOUMxMjkuMjQyIDE4NC4zMTkgMTI5LjMxMyAxODMuNjU0IDEyOS4zMzQgMTgzLjIxNEMxMjkuMzY0IDE4Mi43NjQgMTI5LjQxMSAxODIuMTQ1IDEyOS40NzIgMTgxLjM1NkMxMjkuNTMzIDE4MC41NTggMTI5LjYzMSAxNzguODY0IDEyOS43NjQgMTc2LjI3NUMxMjkuOTA3IDE3My42NzUgMTI5Ljk3OCAxNzIuMjc4IDEyOS45NzggMTcyLjA4M0wxMzAuMDQgMTcwLjkzMkwxMzAuMDcxIDE2OS43OTZDMTMwLjA3MSAxNjguNzExIDEyOS45NzQgMTY3LjkzOCAxMjkuNzc5IDE2Ny40NzhDMTI5LjU5NSAxNjcuMDA3IDEyOS41MDMgMTY2LjYyOCAxMjkuNTAzIDE2Ni4zNDJaTTE0MC4wNjcgMTg1Ljc0N0gxNDAuNDY2QzE0MS4zMDUgMTg1Ljc0NyAxNDIuMDQyIDE4NS40NjYgMTQyLjY3NyAxODQuOTAzQzE0My4zMjEgMTg0LjMzIDE0My42NDMgMTgzLjY2OSAxNDMuNjQzIDE4Mi45MjJMMTQzLjY3NCAxODIuNzIyVjE4Mi41MjNMMTQzLjcwNSAxODIuMDQ3VjE4MS4xNzJDMTQzLjcwNSAxODAuNTc4IDE0My40MDMgMTgwLjI4MiAxNDIuNzk5IDE4MC4yODJIMTQyLjEwOUwxNDIuMDAxIDE4MC4yOTZMMTQxLjQwMiAxODAuMzQzQzE0MS4xMTYgMTgwLjM4NCAxNDAuOTExIDE4MC40MDUgMTQwLjc4OCAxODAuNDA1QzEzOS45NTkgMTgwLjQwNSAxMzkuMTkyIDE4MC43MTYgMTM4LjQ4NiAxODEuMzQxQzEzNy45OTQgMTgxLjc4MSAxMzcuNzQ5IDE4Mi40MDUgMTM3Ljc0OSAxODMuMjE0VjE4My41MjFDMTM3Ljc0OSAxODQuMjA3IDEzNy45NjkgMTg0Ljc0OSAxMzguNDA5IDE4NS4xNDhDMTM4Ljg1OSAxODUuNTQ3IDEzOS40MTIgMTg1Ljc0NyAxNDAuMDY3IDE4NS43NDdaTTEzNi42NDMgMTc1LjkzN0MxMzUuOTU4IDE3NS45MzcgMTM1LjYxNSAxNzUuNDk3IDEzNS42MTUgMTc0LjYxNkMxMzUuNjE1IDE3My45NjEgMTM2LjE2OCAxNzMuMzkzIDEzNy4yNzMgMTcyLjkxM0MxMzguMzg4IDE3Mi40MjEgMTM5LjU0NSAxNzIuMTc2IDE0MC43NDIgMTcyLjE3NkgxNDEuNTFDMTQyLjU0MyAxNzIuMTc2IDE0My40NTQgMTcyLjM3IDE0NC4yNDMgMTcyLjc1OEMxNDUuMDMxIDE3My4xMzggMTQ1LjYyOSAxNzMuNjU1IDE0Ni4wMzkgMTc0LjMxQzE0Ni40NTggMTc0Ljk2NCAxNDYuNzE0IDE3NS44MTkgMTQ2LjgwNiAxNzYuODczQzE0Ni44MjcgMTc3LjExOSAxNDYuODM2IDE3OC4zMTIgMTQ2LjgzNiAxODAuNDUxQzE0Ni44MzYgMTgyLjU5IDE0Ni44NjIgMTgzLjgyMyAxNDYuOTEzIDE4NC4xNUMxNDYuOTc1IDE4NC40NjcgMTQ3LjEzOCAxODQuODU2IDE0Ny40MDQgMTg1LjMxN0MxNDcuNjgxIDE4NS43NzcgMTQ3LjgxOSAxODYuMTU2IDE0Ny44MTkgMTg2LjQ1M0MxNDcuODE5IDE4Ni43NSAxNDcuNjc1IDE4Ny4wMDUgMTQ3LjM5IDE4Ny4yMkMxNDcuMTEyIDE4Ny40MjYgMTQ2LjcwOSAxODcuNTI4IDE0Ni4xNzYgMTg3LjUyOEMxNDUuNjQ1IDE4Ny41MjggMTQ1LjA2NiAxODcuNCAxNDQuNDQyIDE4Ny4xNDRDMTQzLjgxNyAxODYuODc3IDE0My4zNjIgMTg2Ljc0NSAxNDMuMDc2IDE4Ni43NDVDMTQzLjA0NSAxODYuNzQ1IDE0Mi41MzMgMTg2LjkyOSAxNDEuNTQxIDE4Ny4yOTdDMTQwLjU0OCAxODcuNjU2IDEzOS43MDkgMTg3LjgzNCAxMzkuMDIzIDE4Ny44MzRIMTM4LjY4NUMxMzcuNTM5IDE4Ny44MzQgMTM2LjU2MiAxODcuNDcxIDEzNS43NTMgMTg2Ljc0NUMxMzQuOTU1IDE4Ni4wMTggMTM0LjU1NiAxODQuOTg0IDEzNC41NTYgMTgzLjY0NEMxMzQuNTU2IDE4Mi4zMDMgMTM0Ljk5NiAxODEuMjU5IDEzNS44NzYgMTgwLjUxMkMxMzYuNzU2IDE3OS43NTQgMTM3LjgyNSAxNzkuMjM3IDEzOS4wODUgMTc4Ljk2MUMxMzkuNDYzIDE3OC44OCAxNDAuMDkzIDE3OC43NzIgMTQwLjk3MiAxNzguNjM5QzE0MS44NTIgMTc4LjUwNSAxNDIuNDUyIDE3OC4zNjggMTQyLjc2OSAxNzguMjI0QzE0My4zMjEgMTc3Ljk2OSAxNDMuNTk3IDE3Ny40ODcgMTQzLjU5NyAxNzYuNzgxQzE0My41OTcgMTc2LjA2NSAxNDMuMzYyIDE3NS41MDcgMTQyLjg5MiAxNzUuMTA4QzE0Mi40MiAxNzQuNjk4IDE0MS44NTcgMTc0LjQ5NCAxNDEuMjAzIDE3NC40OTRDMTQwLjU1OCAxNzQuNDk0IDEzOS43MDkgMTc0LjczNCAxMzguNjU1IDE3NS4yMTVDMTM3LjYgMTc1LjY5NiAxMzYuOTMgMTc1LjkzNyAxMzYuNjQzIDE3NS45MzdaTTE2My4yMTggMTg2Ljg5OEMxNjIuNDkyIDE4Ni44OTggMTYxLjg2MiAxODYuNDQzIDE2MS4zMzEgMTg1LjUzMUMxNjAuOTgyIDE4NC45MjggMTYwLjQzIDE4My43IDE1OS42NzIgMTgxLjg0N0MxNTguOTI2IDE3OS45ODUgMTU4LjUgMTc5LjA1NCAxNTguMzk4IDE3OS4wNTRDMTU4LjM2NyAxNzkuMDU0IDE1Ny45NDMgMTc5LjkyMyAxNTcuMTI0IDE4MS42NjNDMTU2LjMwNSAxODMuMzkyIDE1NS42OTYgMTg0LjU4IDE1NS4yOTcgMTg1LjIyNUMxNTQuNjYzIDE4Ni4yMzggMTU0LjA1NCAxODYuNzQ1IDE1My40NzEgMTg2Ljc0NUMxNTMuMTAyIDE4Ni43NDUgMTUyLjcxMyAxODYuNjAxIDE1Mi4zMDQgMTg2LjMxNEMxNTEuOTA1IDE4Ni4wMTggMTUxLjU4MyAxODUuNTM3IDE1MS4zMzcgMTg0Ljg3MkMxNTEuMzA2IDE4NC43OSAxNTEuMDcxIDE4My45MDkgMTUwLjYzMSAxODIuMjMxQzE1MC4yIDE4MC41NTMgMTQ5Ljc1NSAxNzguOTc3IDE0OS4yOTUgMTc3LjUwM0MxNDguODQ1IDE3Ni4wMjkgMTQ4LjYyIDE3NS4wMzEgMTQ4LjYyIDE3NC41MDlDMTQ4LjYyIDE3My45ODcgMTQ4LjczMyAxNzMuNjEzIDE0OC45NTggMTczLjM4OEMxNDkuMTgzIDE3My4xNjMgMTQ5LjQxMiAxNzMuMDUgMTQ5LjY0OCAxNzMuMDVDMTUwLjYgMTczLjA1IDE1MS4yNyAxNzMuNDQ0IDE1MS42NTkgMTc0LjIzMkMxNTEuODAzIDE3NC41MTkgMTUxLjk4NiAxNzUuMjM1IDE1Mi4yMTEgMTc2LjM4MkMxNTMuMjg2IDE4MC41ODggMTU0LjAwNyAxODIuODIgMTU0LjM3NiAxODMuMDc1QzE1NC43NjUgMTgzLjA3NSAxNTUuMzMzIDE4MS43NzYgMTU2LjA4IDE3OS4xNzZDMTU2LjM4NyAxNzguMTExIDE1Ni41ODYgMTc3LjE1NCAxNTYuNjc5IDE3Ni4zMDVDMTU2Ljc4MSAxNzUuNDU1IDE1Ni44NDggMTc0Ljk2NCAxNTYuODc4IDE3NC44MzJMMTU3LjAxNyAxNzQuMzRDMTU3LjMyMyAxNzMuNTMyIDE1Ny45MzIgMTczLjEyOCAxNTguODQzIDE3My4xMjhDMTU5Ljc2NSAxNzMuMTI4IDE2MC40MDQgMTczLjU5MyAxNjAuNzYyIDE3NC41MjRDMTYwLjkwNSAxNzQuOTAzIDE2MS4wMzkgMTc1LjU2OCAxNjEuMTYyIDE3Ni41MjFDMTYxLjI4NCAxNzcuNDYyIDE2MS40NTggMTc4LjQwOCAxNjEuNjgzIDE3OS4zNkMxNjIuMjQ2IDE4MS43OTYgMTYyLjY5MSAxODMuMDE0IDE2My4wMTggMTgzLjAxNEMxNjMuNDE4IDE4My4wMTQgMTY0LjA0MiAxODEuNzQgMTY0Ljg5MiAxNzkuMTkxQzE2NS4xNTcgMTc4LjM5MyAxNjUuNDM0IDE3Ny40MTYgMTY1LjcyIDE3Ni4yNTlDMTY2LjAxNyAxNzUuMTAzIDE2Ni4yMjIgMTc0LjQwNyAxNjYuMzM0IDE3NC4xNzFDMTY2LjcwMyAxNzMuNDQ0IDE2Ny4yODYgMTczLjA4MiAxNjguMDg1IDE3My4wODJDMTY4LjUwNCAxNzMuMDgyIDE2OC43MTQgMTczLjQ5IDE2OC43MTQgMTc0LjMxQzE2OC43MTQgMTc0Ljc5IDE2OC4xOTIgMTc2LjYyMyAxNjcuMTQ4IDE3OS44MDVDMTY2LjEwNCAxODIuOTc5IDE2NS40NzUgMTg0Ljc5NCAxNjUuMjYgMTg1LjI1NUMxNjUuMDQ1IDE4NS43MDYgMTY0LjczOCAxODYuMDk0IDE2NC4zMzkgMTg2LjQyM0MxNjMuOTQgMTg2Ljc0IDE2My41NjcgMTg2Ljg5OCAxNjMuMjE4IDE4Ni44OThaTTE3NC4xODEgMTg1Ljc0N0gxNzQuNTgxQzE3NS40MiAxODUuNzQ3IDE3Ni4xNTcgMTg1LjQ2NiAxNzYuNzkxIDE4NC45MDNDMTc3LjQzNiAxODQuMzMgMTc3Ljc1OCAxODMuNjY5IDE3Ny43NTggMTgyLjkyMkwxNzcuNzg5IDE4Mi43MjJWMTgyLjUyM0wxNzcuODE5IDE4Mi4wNDdWMTgxLjE3MkMxNzcuODE5IDE4MC41NzggMTc3LjUxOCAxODAuMjgyIDE3Ni45MTQgMTgwLjI4MkgxNzYuMjIzTDE3Ni4xMTYgMTgwLjI5NkwxNzUuNTE3IDE4MC4zNDNDMTc1LjIzIDE4MC4zODQgMTc1LjAyNiAxODAuNDA1IDE3NC45MDMgMTgwLjQwNUMxNzQuMDc0IDE4MC40MDUgMTczLjMwNyAxODAuNzE2IDE3Mi42IDE4MS4zNDFDMTcyLjEwOSAxODEuNzgxIDE3MS44NjMgMTgyLjQwNSAxNzEuODYzIDE4My4yMTRWMTgzLjUyMUMxNzEuODYzIDE4NC4yMDcgMTcyLjA4NCAxODQuNzQ5IDE3Mi41MjQgMTg1LjE0OEMxNzIuOTc0IDE4NS41NDcgMTczLjUyNyAxODUuNzQ3IDE3NC4xODEgMTg1Ljc0N1pNMTcwLjc1OCAxNzUuOTM3QzE3MC4wNzIgMTc1LjkzNyAxNjkuNzMgMTc1LjQ5NyAxNjkuNzMgMTc0LjYxNkMxNjkuNzMgMTczLjk2MSAxNzAuMjgzIDE3My4zOTMgMTcxLjM4OCAxNzIuOTEzQzE3Mi41MDMgMTcyLjQyMSAxNzMuNjU5IDE3Mi4xNzYgMTc0Ljg1NyAxNzIuMTc2SDE3NS42MjRDMTc2LjY1OCAxNzIuMTc2IDE3Ny41NjkgMTcyLjM3IDE3OC4zNTcgMTcyLjc1OEMxNzkuMTQ0IDE3My4xMzggMTc5Ljc0NCAxNzMuNjU1IDE4MC4xNTIgMTc0LjMxQzE4MC41NzIgMTc0Ljk2NCAxODAuODI4IDE3NS44MTkgMTgwLjkyMSAxNzYuODczQzE4MC45NCAxNzcuMTE5IDE4MC45NTEgMTc4LjMxMiAxODAuOTUxIDE4MC40NTFDMTgwLjk1MSAxODIuNTkgMTgwLjk3NyAxODMuODIzIDE4MS4wMjggMTg0LjE1QzE4MS4wOSAxODQuNDY3IDE4MS4yNTMgMTg0Ljg1NiAxODEuNTE5IDE4NS4zMTdDMTgxLjc5NSAxODUuNzc3IDE4MS45MzQgMTg2LjE1NiAxODEuOTM0IDE4Ni40NTNDMTgxLjkzNCAxODYuNzUgMTgxLjc5IDE4Ny4wMDUgMTgxLjUwMyAxODcuMjJDMTgxLjIyNyAxODcuNDI2IDE4MC44MjMgMTg3LjUyOCAxODAuMjkxIDE4Ny41MjhDMTc5Ljc1OCAxODcuNTI4IDE3OS4xODEgMTg3LjQgMTc4LjU1NiAxODcuMTQ0QzE3Ny45MzIgMTg2Ljg3NyAxNzcuNDc2IDE4Ni43NDUgMTc3LjE5IDE4Ni43NDVDMTc3LjE2IDE4Ni43NDUgMTc2LjY0OCAxODYuOTI5IDE3NS42NTUgMTg3LjI5N0MxNzQuNjYyIDE4Ny42NTYgMTczLjgyMyAxODcuODM0IDE3My4xMzggMTg3LjgzNEgxNzIuOEMxNzEuNjUzIDE4Ny44MzQgMTcwLjY3NyAxODcuNDcxIDE2OS44NjggMTg2Ljc0NUMxNjkuMDY5IDE4Ni4wMTggMTY4LjY3MSAxODQuOTg0IDE2OC42NzEgMTgzLjY0NEMxNjguNjcxIDE4Mi4zMDMgMTY5LjExMSAxODEuMjU5IDE2OS45OTEgMTgwLjUxMkMxNzAuODcgMTc5Ljc1NCAxNzEuOTQgMTc5LjIzNyAxNzMuMTk5IDE3OC45NjFDMTczLjU3OCAxNzguODggMTc0LjIwNyAxNzguNzcyIDE3NS4wODcgMTc4LjYzOUMxNzUuOTY3IDE3OC41MDUgMTc2LjU2NiAxNzguMzY4IDE3Ni44ODMgMTc4LjIyNEMxNzcuNDM2IDE3Ny45NjkgMTc3LjcxMiAxNzcuNDg3IDE3Ny43MTIgMTc2Ljc4MUMxNzcuNzEyIDE3Ni4wNjUgMTc3LjQ3NiAxNzUuNTA3IDE3Ny4wMDYgMTc1LjEwOEMxNzYuNTM1IDE3NC42OTggMTc1Ljk3MiAxNzQuNDk0IDE3NS4zMTggMTc0LjQ5NEMxNzQuNjcyIDE3NC40OTQgMTczLjgyMyAxNzQuNzM0IDE3Mi43NjkgMTc1LjIxNUMxNzEuNzE1IDE3NS42OTYgMTcxLjA0NSAxNzUuOTM3IDE3MC43NTggMTc1LjkzN1pNMTk3LjA4NyAxODUuODM5QzE5Ny4wODcgMTg2LjU5NiAxOTYuNDI3IDE4Ni45NzUgMTk1LjEwNyAxODYuOTc1QzE5NC4zNiAxODYuOTc1IDE5My44NTkgMTg2Ljc5NiAxOTMuNjAyIDE4Ni40MzdDMTkzLjQ3OSAxODYuMjYzIDE5My40MTkgMTg1Ljg1NSAxOTMuNDE5IDE4NS4yMDlMMTkzLjM3MiAxODQuMjI3QzE5My4zMDEgMTgzLjE1MyAxOTMuMjY1IDE4Mi4wNzMgMTkzLjI2NSAxODAuOTg4QzE5My4yNjUgMTc4LjY0NCAxOTMuMDYgMTc3LjA3MyAxOTIuNjUxIDE3Ni4yNzVDMTkyLjI1MSAxNzUuNDY2IDE5MS41NzYgMTc1LjA2MiAxOTAuNjI0IDE3NS4wNjJDMTg5Ljk5IDE3NS4wNjIgMTg5LjQwMSAxNzUuMjUxIDE4OC44NTkgMTc1LjYyOUMxODguMzI3IDE3Ni4wMDkgMTg3LjkxOCAxNzYuNTM1IDE4Ny42MzEgMTc3LjIxMUMxODcuMDM4IDE3OC41OTMgMTg2Ljc0MSAxODEuMTQ2IDE4Ni43NDEgMTg0Ljg3MkMxODYuNzQxIDE4NS43MjEgMTg2LjU3NyAxODYuMzIgMTg2LjI1IDE4Ni42NjhDMTg1LjkzMiAxODcuMDE2IDE4NS41MjMgMTg3LjE5IDE4NS4wMjIgMTg3LjE5SDE4NC43MTRDMTgzLjU2OCAxODcuMTkgMTgyLjk5NSAxODYuNzM0IDE4Mi45OTUgMTg1LjgyM1YxODUuNDU1QzE4Mi45OTUgMTg1LjM0MyAxODMuMDU3IDE4NS4wOTcgMTgzLjE3OSAxODQuNzE4TDE4My40MjUgMTg0LjAxMkMxODMuNjcxIDE4My4xODMgMTgzLjc5MyAxODEuNDA4IDE4My43OTMgMTc4LjY4NUwxODMuODcgMTc0LjEyNUMxODMuODcgMTczLjU0MiAxODQuMTg3IDE3My4yNSAxODQuODIyIDE3My4yNUMxODUuNDU3IDE3My4yNSAxODYuMDgxIDE3My40NiAxODYuNjk1IDE3My44OEMxODcuMzE5IDE3NC4yOTkgMTg3LjcxMyAxNzQuNTA5IDE4Ny44NzcgMTc0LjUwOUMxODguMDUgMTc0LjUwOSAxODguMzUzIDE3NC4zOTEgMTg4Ljc4MiAxNzQuMTU2QzE5MC4yMjYgMTczLjM2OCAxOTEuMzgyIDE3Mi45NzQgMTkyLjI1MSAxNzIuOTc0SDE5Mi42NTFDMTk0LjIxNiAxNzIuOTc0IDE5NS4zMTcgMTczLjY4IDE5NS45NTEgMTc1LjA5M0MxOTYuMjU4IDE3NS43NTggMTk2LjQxMiAxNzcuMTkxIDE5Ni40MTIgMTc5LjM5MVYxNzkuNDk5QzE5Ni40MTIgMTc5LjY4MiAxOTYuNDA3IDE3OS44NjcgMTk2LjM5NiAxODAuMDUxQzE5Ni4zOTYgMTgwLjU1MyAxOTYuMzk2IDE4MC44MTMgMTk2LjM5NiAxODAuODM0QzE5Ni4zOTYgMTgxLjAyOCAxOTYuMzk2IDE4MS4yMTggMTk2LjM5NiAxODEuNDAyQzE5Ni4zOTYgMTgxLjU0NSAxOTYuMzk2IDE4MS42ODQgMTk2LjM5NiAxODEuODE2QzE5Ni4zOTYgMTgyLjYwNCAxOTYuNDIyIDE4My4xNDIgMTk2LjQ3MyAxODMuNDI5QzE5Ni41NDUgMTgzLjgxOCAxOTYuNjYzIDE4NC4yMjIgMTk2LjgyNyAxODQuNjQxQzE5Ny4wMDEgMTg1LjEwMiAxOTcuMDg3IDE4NS41MDEgMTk3LjA4NyAxODUuODM5WlwiIGZpbGw9e3Byb3BzLmNvbG9yTW9kZX0vPlxyXG4gICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cInRvcC1saW5lXCIgZD1cIk0xMi43NzE1IDQuNDIxMzlMMjA5LjI2MiA0Ljg3NDE3XCIgc3Ryb2tlPXtwcm9wcy5jb2xvck1vZGV9IHN0cm9rZVdpZHRoPVwiNFwiLz5cclxuICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJyaWdodC1saW5lXCIgZD1cIk0yMTkuNTc5IDEzLjI2NDJMMjIwLjAzMyAyMDkuNzdcIiBzdHJva2U9e3Byb3BzLmNvbG9yTW9kZX0gc3Ryb2tlV2lkdGg9XCI0XCIvPlxyXG4gICAgICAgIDxwYXRoIGNsYXNzTmFtZT0nYm90dG9tLWxpbmUnIGQ9XCJNMjEwLjczNyAyMjEuMDdIMTQuMjQ2MVwiIHN0cm9rZT17cHJvcHMuY29sb3JNb2RlfSBzdHJva2VXaWR0aD1cIjRcIi8+XHJcbiAgICAgICAgPHBhdGggY2xhc3NOYW1lPSdsZWZ0LWxpbmUnIGQ9XCJNNC40MjA5IDIxMS43MzZWMTUuMjI5MlwiIHN0cm9rZT17cHJvcHMuY29sb3JNb2RlfSBzdHJva2VXaWR0aD1cIjRcIi8+XHJcbiAgICAgIDwvZz5cclxuICAgIDxkZWZzPlxyXG4gICAgPGNsaXBQYXRoIGlkPVwiY2xpcDBcIj5cclxuICAgICAgPHJlY3Qgd2lkdGg9XCIyMjRcIiBoZWlnaHQ9XCIyMjVcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICA8L2NsaXBQYXRoPlxyXG4gICAgPC9kZWZzPlxyXG4gIDwvc3ZnPlxyXG5cclxuXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCcmFuZExvZ29cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gQ2xvc2UoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPSdtZW51LWNsb3NlJyB3aWR0aD1cIjM0XCIgaGVpZ2h0PVwiMzRcIiB2aWV3Qm94PVwiMCAwIDM0IDM0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMS41NjA3MyAyOS42NTIzQzAuNjk4ODAxIDMwLjUxNDMgMC42OTg4MDIgMzEuOTExNyAxLjU2MDczIDMyLjc3MzZDMi40MjI2NiAzMy42MzU2IDMuODIwMTEgMzMuNjM1NiA0LjY4MjA0IDMyLjc3MzZMMTcuMTY3MSAyMC4yODg2TDI5LjY1MjMgMzIuNzczOUMzMC41MTQzIDMzLjYzNTggMzEuOTExNyAzMy42MzU4IDMyLjc3MzYgMzIuNzczOUMzMy42MzU2IDMxLjkxMiAzMy42MzU2IDMwLjUxNDUgMzIuNzczNiAyOS42NTI2TDIwLjI4ODQgMTcuMTY3M0wzMi43NzM5IDQuNjgxODJDMzMuNjM1OCAzLjgxOTg5IDMzLjYzNTggMi40MjI0NCAzMi43NzM5IDEuNTYwNTFDMzEuOTExOSAwLjY5ODU4MyAzMC41MTQ1IDAuNjk4NTc5IDI5LjY1MjYgMS41NjA1MUwxNy4xNjcxIDE0LjA0Nkw0LjY4MTgyIDEuNTYwNzVDMy44MTk5IDAuNjk4ODI0IDIuNDIyNDQgMC42OTg4MjUgMS41NjA1MSAxLjU2MDc1QzAuNjk4NTgzIDIuNDIyNjggMC42OTg1NzkgMy44MjAxNCAxLjU2MDUxIDQuNjgyMDZMMTQuMDQ1OCAxNy4xNjczTDEuNTYwNzMgMjkuNjUyM1pcIiBmaWxsPVwiI0VCRTlDRFwiLz5cclxuICAgIDwvc3ZnPlxyXG5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsb3NlXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFdpdGhUZXh0cyBmcm9tICcuL1Njcm9sbFN2Z3MvV2l0aFRleHRzJ1xyXG5pbXBvcnQgQXJyb3dyaWdodCBmcm9tICcuL1Njcm9sbFN2Z3MvQXJyb3dSaWdodCdcclxuaW1wb3J0IEVudmVsb3AgZnJvbSAnLi9TY3JvbGxTdmdzL0VudmVsb3AnXHJcbmltcG9ydCBEcmliYmJsZSBmcm9tICcuL1Njcm9sbFN2Z3MvRHJpYmJibGUnXHJcbmltcG9ydCBHaXRodWIgZnJvbSAnLi9TY3JvbGxTdmdzL0dpdGh1YidcclxuaW1wb3J0IEJlaGFuY2UgZnJvbSAnLi9TY3JvbGxTdmdzL0JlaGFuY2UnXHJcblxyXG5mdW5jdGlvbiBTY3JvbGwocHJvcHMpIHtcclxuICBsZXQgc3ZnO1xyXG5cclxuICBpZihwcm9wcy50eXBlID09PSAnd2l0aFRleHQnKXtcclxuICAgIHN2ZyA9IDxXaXRoVGV4dHMgY29sb3JzPXtwcm9wcy5jb2xvcnN9IC8+XHJcbiAgfSBcclxuICBcclxuICBpZihwcm9wcy50eXBlID09PSAnYXJyb3cnKSB7XHJcbiAgICBzdmcgPSA8QXJyb3dyaWdodCBjb2xvcnM9e3Byb3BzLmNvbG9yc30gLz5cclxuICB9XHJcblxyXG4gIGlmKHByb3BzLnR5cGUgPT09ICdlbnZlbG9wJykge1xyXG4gICAgc3ZnID0gPEVudmVsb3AgY29sb3JzPXtwcm9wcy5jb2xvcnN9IC8+XHJcbiAgfVxyXG5cclxuICBpZihwcm9wcy50eXBlID09PSAnYmVoYW5jZScpIHN2ZyA9IDxCZWhhbmNlIC8+XHJcblxyXG4gIGlmKHByb3BzLnR5cGUgPT09ICdkcmliYmJsZScpIHN2ZyA9IDxEcmliYmJsZSAvPlxyXG5cclxuICBpZihwcm9wcy50eXBlID09PSAnZ2l0aHViJykgc3ZnID0gPEdpdGh1Yi8+XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAoc3ZnKVxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIFdpdGhvdXRUZXh0KHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxMCAxNlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICA8cGF0aCBkPVwiTTkuNjQxNjUgOC42MjE5NkwyLjM3Nzk4IDE1Ljc0MjVDMi4wMjc3OCAxNi4wODU4IDEuNDU5NyAxNi4wODU4IDEuMTA5NSAxNS43NDI1TDAuMjYyMjI4IDE0LjkxMTlDLTAuMDg3NTk0IDE0LjU2ODkgLTAuMDg3OTY2OSAxNC4wMTM1IDAuMjYwNzM0IDEzLjY2OThMNi4wMTc0OCA4LjAwMDE4TDAuMjYxMTA2IDIuMzMwMTlDLTAuMDg3OTY3OSAxLjk4NjUxIC0wLjA4NzIyMDIgMS40MzEwNiAwLjI2MjYwMiAxLjA4ODExTDEuMTA5ODggMC4yNTc0ODVDMS40NjAwNyAtMC4wODU4Mjg4IDIuMDI4MTYgLTAuMDg1ODI4OCAyLjM3ODM1IDAuMjU3NDg1TDkuNjQxNjUgNy4zNzg0MUM5Ljk5MTg1IDcuNzIxNzIgOS45OTE4NSA4LjI3ODY1IDkuNjQxNjUgOC42MjE5NlpcIiBmaWxsPXtwcm9wcy5jb2xvcnN9Lz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2l0aG91dFRleHRcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gQmVoYW5jZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiMjVcIiB2aWV3Qm94PVwiMCAwIDQwIDI1XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTUuNzQ5NiAxMS4yMDE5QzE3LjkwODQgMTAuMTQ5NSAxOS4wMzUzIDguNTU3MTkgMTkuMDM1MyA2LjA3ODY1QzE5LjAzNTMgMS4xOTA4MSAxNS40NjQ1IDAgMTEuMzQzOCAwSDBWMjQuNTM2MUgxMS42NjI5QzE2LjAzNDggMjQuNTM2MSAyMC4xNDE5IDIyLjM5NjggMjAuMTQxOSAxNy40MTIxQzIwLjE0MTkgMTQuMzMxMiAxOC43MDk1IDEyLjA1MzQgMTUuNzQ5NiAxMS4yMDE5VjExLjIwMTlaTTUuMjg4MzUgNC4xODg1OUgxMC4yNTA4QzEyLjE1ODUgNC4xODg1OSAxMy44NzYgNC43MzU1MyAxMy44NzYgNi45OTI1MkMxMy44NzYgOS4wNzY0MyAxMi41Mzg2IDkuOTE0MTUgMTAuNjUxNCA5LjkxNDE1SDUuMjg4MzVWNC4xODg1OVY0LjE4ODU5Wk0xMC45NDMzIDIwLjM2ODNINS4yODgzNVYxMy42MTEySDExLjA1MTlDMTMuMzgwNCAxMy42MTEyIDE0Ljg1MzUgMTQuNjAxMiAxNC44NTM1IDE3LjExNDRDMTQuODUzNSAxOS41OTI5IDEzLjA5NTMgMjAuMzY4MyAxMC45NDMzIDIwLjM2ODNWMjAuMzY4M1pNMzUuMjgwNiAzLjcwMzk2SDI1LjUyNTNWMS4yODc3M0gzNS4yODA2VjMuNzAzOTZWMy43MDM5NlpNMzkuMTAyNiAxNS45MDk3QzM5LjEwMjYgMTAuNjU0OSAzNi4wODg0IDYuMjcyNSAzMC42MjM2IDYuMjcyNUMyNS4zMTQ4IDYuMjcyNSAyMS43MTAxIDEwLjM0MzQgMjEuNzEwMSAxNS42NzQzQzIxLjcxMDEgMjEuMjA2IDI1LjEyNDggMjUgMzAuNjIzNiAyNUMzNC43ODUgMjUgMzcuNDgwMSAyMy4wODkyIDM4Ljc3NjcgMTkuMDI1MkgzNC41NTQyQzM0LjA5OTMgMjAuNTQxNCAzMi4yMjU3IDIxLjM0NDUgMzAuNzcyOSAyMS4zNDQ1QzI3Ljk2OTIgMjEuMzQ0NSAyNi40OTYxIDE5LjY2OTEgMjYuNDk2MSAxNi44MjM2SDM5LjA2MThDMzkuMDgyMiAxNi41MzI4IDM5LjEwMjYgMTYuMjIxMyAzOS4xMDI2IDE1LjkwOTdaTTI2LjUwMjkgMTMuNzQ5N0MyNi42NTkgMTEuNDE2NSAyOC4xNzk2IDkuOTU1NjkgMzAuNDc0MiA5Ljk1NTY5QzMyLjg3NzQgOS45NTU2OSAzNC4wODU4IDExLjM5NTcgMzQuMjg5NCAxMy43NDk3SDI2LjUwMjlaXCIgZmlsbD1cIiMzNzg2Q0VcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJlaGFuY2UiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBEcmliYmJsZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiB2aWV3Qm94PVwiMCAwIDI1IDI1XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICA8cGF0aCBkPVwiTTEyLjUgMEM1LjYwNzQ2IDAgMCA1LjYwNzQ2IDAgMTIuNUMwIDE5LjM5MjUgNS42MDc0NiAyNSAxMi41IDI1QzE5LjM5MjUgMjUgMjUgMTkuMzkyNSAyNSAxMi41QzI1IDUuNjA3NDYgMTkuMzkyNSAwIDEyLjUgMFpNMjAuNzY0NiA1Ljc2NDQyQzIyLjI1MTcgNy41ODEyNSAyMy4xNTIyIDkuODk1MzEgMjMuMTc1NyAxMi40MTU0QzIyLjgyMzYgMTIuMzQwOSAxOS4yOTM3IDExLjYyNDkgMTUuNzQxMSAxMi4wNzE3QzE1LjQ1MTIgMTEuMzY0IDE1LjE3NzUgMTAuNzQxNCAxNC44MDI3IDkuOTc0MjRDMTguNzUwNCA4LjM2MjUgMjAuNTM5NSA2LjA2ODkgMjAuNzY0NiA1Ljc2NDQyVjUuNzY0NDJaTTE5LjU3NzcgNC41Mjk3NEMxOS4zODU2IDQuODAzMjggMTcuNzc4NCA2Ljk2MzUxIDEzLjk4MTkgOC4zODY1NEMxMi4yMzIzIDUuMTcyMDMgMTAuMjkzMSAyLjUzMTMgOS45OTc5OCAyLjEzNjE0QzEzLjM4MzkgMS4zMTk5NiAxNi45NTE5IDIuMjAwMTUgMTkuNTc3NyA0LjUyOTc0VjQuNTI5NzRaTTcuOTYwNzQgMi44NTM4M0M4LjI0MjI0IDMuMjM5ODcgMTAuMTUwMiA1Ljg4Mzg3IDExLjkxOTMgOS4wMjg2OEM2LjkyNDk1IDEwLjM1NDkgMi41MjYxMSAxMC4zMzU4IDIuMDQ4NTkgMTAuMzI5NUMyLjc0MDkzIDcuMDE2MzggNC45NzM2OSA0LjI2Mjc1IDcuOTYwNzQgMi44NTM4M1pNMS44MjMwOCAxMi41MTYzQzEuODIzMDggMTIuNDA3MSAxLjgyNTI1IDEyLjI5ODQgMS44Mjg1MyAxMi4xOUMyLjI5NTY3IDEyLjE5OTYgNy40Njk2NiAxMi4yNjYzIDEyLjgwMTYgMTAuNjcwNkMxMy4xMDczIDExLjI2ODcgMTMuMzk5MiAxMS44NzYgMTMuNjY3MiAxMi40ODI1QzkuODA2NCAxMy41NyA2LjI5ODU5IDE2LjY5MjUgNC41Njc4OSAxOS42NTUyQzIuODYyNiAxNy43NjIzIDEuODIzMDggMTUuMjU4NiAxLjgyMzA4IDEyLjUxNjNaTTUuOTQ2NDIgMjAuOTM5M0M3LjA2MTY5IDE4LjY1OTQgMTAuMDg4NSAxNS43MTY0IDE0LjM5MjkgMTQuMjQ4QzE1Ljg5MTkgMTguMTQzMyAxNi41MTE4IDIxLjQwNzkgMTYuNjcwNiAyMi4zNDQ3QzEzLjIzNzYgMjMuODA3IDkuMTA5MzcgMjMuNDA1OCA1Ljk0NjQyIDIwLjkzOTNWMjAuOTM5M1pNMTguNDY1NiAyMS4zNjcyQzE4LjM1NjEgMjAuNzE3NyAxNy43ODc5IDE3LjU5MjEgMTYuMzkxNCAxMy43NTQ2QzE5LjczNzEgMTMuMjE5MSAyMi42NzY3IDE0LjA5NTggMjMuMDQxOSAxNC4yMTFDMjIuNTY2IDE3LjE4MTkgMjAuODYwOCAxOS43NDc1IDE4LjQ2NTYgMjEuMzY3MlpcIiBmaWxsPVwiI0M0NjZBNFwiLz5cclxuICAgIDwvc3ZnPlxyXG5cclxuXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcmliYmJsZSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIEVudmVsb3AocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyB3aWR0aD1cIjM2XCIgaGVpZ2h0PVwiMjdcIiB2aWV3Qm94PVwiMCAwIDM2IDI3XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMzIuMzg1MSAwSDMuMzUwMThDMS40OTk5MSAwIDAgMS41MTEwMiAwIDMuMzc1VjIzLjYyNUMwIDI1LjQ4OSAxLjQ5OTkxIDI3IDMuMzUwMTggMjdIMzIuMzg1MUMzNC4yMzU0IDI3IDM1LjczNTMgMjUuNDg5IDM1LjczNTMgMjMuNjI1VjMuMzc1QzM1LjczNTMgMS41MTEwMiAzNC4yMzU0IDAgMzIuMzg1MSAwWk0zMi4zODUxIDMuMzc1VjYuMjQ0MUMzMC44MjAyIDcuNTI3OTQgMjguMzI1MiA5LjUyNDI1IDIyLjk5MTUgMTMuNzMxN0MyMS44MTYxIDE0LjY2MzEgMTkuNDg3NyAxNi45MDA4IDE3Ljg2NzYgMTYuODc0N0MxNi4yNDc4IDE2LjkwMTEgMTMuOTE4NyAxNC42NjI4IDEyLjc0MzggMTMuNzMxN0M3LjQxMDg5IDkuNTI0ODggNC45MTUzNSA3LjUyODE1IDMuMzUwMTggNi4yNDQxVjMuMzc1SDMyLjM4NTFaTTMuMzUwMTggMjMuNjI1VjEwLjU3NDlDNC45NDk0OCAxMS44NTgxIDcuMjE3NDggMTMuNjU4OSAxMC42NzQ0IDE2LjM4NTlDMTIuMTk5OSAxNy41OTU2IDE0Ljg3MTUgMjAuMjY2MiAxNy44Njc2IDIwLjI0OTlDMjAuODQ5MSAyMC4yNjYyIDIzLjQ4NjggMTcuNjM0NCAyNS4wNjAzIDE2LjM4NjVDMjguNTE3MSAxMy42NTk1IDMwLjc4NTcgMTEuODU4MyAzMi4zODUxIDEwLjU3NDlWMjMuNjI1SDMuMzUwMThaXCIgXHJcbiAgICAgIGZpbGw9e3Byb3BzLmNvbG9yc30vPlxyXG4gICAgPC9zdmc+XHJcblxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW52ZWxvcCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIEdpdGh1YigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyB3aWR0aD1cIjM0XCIgaGVpZ2h0PVwiMjdcIiB2aWV3Qm94PVwiMCAwIDM0IDI3XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTIuODgzOCAxOC42MTEyQzEyLjg4MzggMjAuMDgwNyAxMi4xMjkyIDIyLjQ4NTMgMTAuMzQzMSAyMi40ODUzQzguNTU2OTIgMjIuNDg1MyA3LjgwMjMxIDIwLjA4MDcgNy44MDIzMSAxOC42MTEyQzcuODAyMzEgMTcuMTQxNyA4LjU1NjkyIDE0LjczNzEgMTAuMzQzMSAxNC43MzcxQzEyLjEyOTIgMTQuNzM3MSAxMi44ODM4IDE3LjE0MTcgMTIuODgzOCAxOC42MTEyWk0zMy4yMzA4IDE1LjA2MDVDMzMuMjMwOCAxNy4zMDM0IDMzLjAwOTIgMTkuNjc5OSAzMi4wMTkyIDIxLjc0QzI5LjM5NTQgMjcuMTI1OCAyMi4xODE1IDI2Ljk5OTIgMTcuMDE2OSAyNi45OTkyQzExLjc2OTIgMjYuOTk5MiA0LjEyNjE1IDI3LjE4OSAxLjM5ODQ2IDIxLjc0QzAuMzg3NjkyIDE5LjcwMSAwIDE3LjMwMzQgMCAxNS4wNjA1QzAgMTIuMTE0NSAwLjk2MjMwOCA5LjMzMDE5IDIuODczMDggNy4wNzMyM0MyLjUxMzA4IDUuOTYyMzIgMi4zNCA0Ljc5NTE3IDIuMzQgMy42NDIwOEMyLjM0IDIuMTMwNDEgMi42NzkyMyAxLjM3MTA1IDMuMzUwNzcgMEM2LjQ4NjkyIDAgOC40OTQ2MSAwLjYzMjc5NCAxMC44ODMxIDIuNTMxMTdDMTIuODkwOCAyLjA0NjAzIDE0Ljk1MzggMS44MjgwNyAxNy4wMjM4IDEuODI4MDdDMTguODkzMSAxLjgyODA3IDIwLjc3NjIgMi4wMzE5NyAyMi41OSAyLjQ3NDkzQzI0Ljk0MzggMC41OTc2MzggMjYuOTUxNSAwIDMwLjA1MzEgMEMzMC43MzE1IDEuMzcxMDUgMzEuMDYzOCAyLjEzMDQxIDMxLjA2MzggMy42NDIwOEMzMS4wNjM4IDQuNzk1MTcgMzAuODgzOCA1Ljk0MTIzIDMwLjUzMDggNy4wMzEwNEMzMi40MzQ2IDkuMzA5MSAzMy4yMzA4IDEyLjExNDUgMzMuMjMwOCAxNS4wNjA1Wk0yOC43NzkyIDE4LjYxMTJDMjguNzc5MiAxNS41MjQ1IDI2LjkzMDggMTIuODAzNSAyMy42OTA4IDEyLjgwMzVDMjIuMzgyMyAxMi44MDM1IDIxLjEyOTIgMTMuMDQyNiAxOS44MTM4IDEzLjIyNTRDMTguNzgyMyAxMy4zODcxIDE3Ljc1MDggMTMuNDUwNCAxNi42OTE1IDEzLjQ1MDRDMTUuNjM5MiAxMy40NTA0IDE0LjYwNzcgMTMuMzg3MSAxMy41NjkyIDEzLjIyNTRDMTIuMjc0NiAxMy4wNDI2IDExLjAwNzcgMTIuODAzNSA5LjY5MjMxIDEyLjgwMzVDNi40NTIzMSAxMi44MDM1IDQuNjAzODUgMTUuNTI0NSA0LjYwMzg1IDE4LjYxMTJDNC42MDM4NSAyNC43ODQ0IDEwLjE3IDI1LjczMzYgMTUuMDE2MiAyNS43MzM2SDE4LjM1MzFDMjMuMjIgMjUuNzMzNiAyOC43NzkyIDI0Ljc5MTUgMjguNzc5MiAxOC42MTEyWk0yMy4wNjA4IDE0LjczNzFDMjEuMjc0NiAxNC43MzcxIDIwLjUyIDE3LjE0MTcgMjAuNTIgMTguNjExMkMyMC41MiAyMC4wODA3IDIxLjI3NDYgMjIuNDg1MyAyMy4wNjA4IDIyLjQ4NTNDMjQuODQ2OSAyMi40ODUzIDI1LjYwMTUgMjAuMDgwNyAyNS42MDE1IDE4LjYxMTJDMjUuNjAxNSAxNy4xNDE3IDI0Ljg0NjkgMTQuNzM3MSAyMy4wNjA4IDE0LjczNzFaXCIgZmlsbD1cIiNBQkE5OEZcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdpdGh1YiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIFdpdGhUZXh0cyhwcm9wcykge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9J3N1Yi1yZXZlYWwnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIxMjFcIiB2aWV3Qm94PVwiMCAwIDIwIDEyMVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICA8cGF0aCBkPVwiTTYuODQxOCA1NC44NjA0TDYuODQxOCAxMjBDNy4wOTQ2NCAxMTUuNjI5IDEyLjM2ODEgOTkuMDYyMiAxNS4yNjI4IDk5LjA2MjJcIiBzdHJva2U9e3Byb3BzLmNvbG9ycy5kYXJrQ29sb3J9IHN0cm9rZVdpZHRoPVwiM1wiLz5cclxuICAgICAgPHBhdGggZD1cIk0zLjgzOCA3LjE0OTM3QzMuODM4IDYuMzkzMzcgMy45NjQgNS43MTUzNyA0LjIxNiA1LjExNTM3QzQuNDggNC41MTUzNyA0Ljg0IDQuMDQxMzcgNS4yOTYgMy42OTMzN0M1Ljc2NCAzLjM0NTM3IDYuMjk4IDMuMTUzMzcgNi44OTggMy4xMTczN1Y0LjgwOTM3QzYuNDA2IDQuODU3MzcgNi4wMDQgNS4wODUzNyA1LjY5MiA1LjQ5MzM3QzUuMzggNS45MTMzNyA1LjIyNCA2LjQ1OTM3IDUuMjI0IDcuMTMxMzdDNS4yMjQgNy43NTUzNyA1LjM2MiA4LjI0NzM3IDUuNjM4IDguNjA3MzdDNS45MTQgOC45NjczNyA2LjI2MiA5LjE0NzM3IDYuNjgyIDkuMTQ3MzdDNy4xMTQgOS4xNDczNyA3LjQzMiA4Ljk1NTM3IDcuNjM2IDguNTcxMzdDNy44NTIgOC4xODczNyA4LjA2MiA3LjU5MzM3IDguMjY2IDYuNzg5MzdDOC40NTggNi4wNTczNyA4LjY1IDUuNDU3MzcgOC44NDIgNC45ODkzN0M5LjA0NiA0LjUzMzM3IDkuMzQgNC4xMzczNyA5LjcyNCAzLjgwMTM3QzEwLjEyIDMuNDc3MzcgMTAuNjM2IDMuMzE1MzcgMTEuMjcyIDMuMzE1MzdDMTEuNzc2IDMuMzE1MzcgMTIuMjM4IDMuNDY1MzcgMTIuNjU4IDMuNzY1MzdDMTMuMDc4IDQuMDY1MzcgMTMuNDA4IDQuNDkxMzcgMTMuNjQ4IDUuMDQzMzdDMTMuOSA1LjU5NTM3IDE0LjAyNiA2LjIyNTM3IDE0LjAyNiA2LjkzMzM3QzE0LjAyNiA4LjAyNTM3IDEzLjc1IDguOTA3MzcgMTMuMTk4IDkuNTc5MzdDMTIuNjQ2IDEwLjI1MTQgMTEuODkgMTAuNjExNCAxMC45MyAxMC42NTk0VjkuMDIxMzdDMTEuNDQ2IDguOTg1MzcgMTEuODYgOC43NzUzNyAxMi4xNzIgOC4zOTEzN0MxMi40ODQgOC4wMTkzNyAxMi42NCA3LjUxNTM3IDEyLjY0IDYuODc5MzdDMTIuNjQgNi4yOTEzNyAxMi41MTQgNS44MjMzNyAxMi4yNjIgNS40NzUzN0MxMi4wMSA1LjEyNzM3IDExLjY4IDQuOTUzMzcgMTEuMjcyIDQuOTUzMzdDMTAuOTQ4IDQuOTUzMzcgMTAuNjc4IDUuMDU1MzcgMTAuNDYyIDUuMjU5MzdDMTAuMjU4IDUuNDc1MzcgMTAuMDkgNS43MzkzNyA5Ljk1OCA2LjA1MTM3QzkuODM4IDYuMzc1MzcgOS43IDYuODE5MzcgOS41NDQgNy4zODMzN0M5LjM1MiA4LjA5MTM3IDkuMTYgOC42NjczNyA4Ljk2OCA5LjExMTM3QzguNzg4IDkuNTU1MzcgOC41MTIgOS45MzMzNyA4LjE0IDEwLjI0NTRDNy43NjggMTAuNTY5NCA3LjI4MiAxMC43Mzc0IDYuNjgyIDEwLjc0OTRDNi4xNDIgMTAuNzQ5NCA1LjY1NiAxMC41OTk0IDUuMjI0IDEwLjI5OTRDNC43OTIgOS45OTkzNyA0LjQ1IDkuNTczMzcgNC4xOTggOS4wMjEzN0MzLjk1OCA4LjQ4MTM3IDMuODM4IDcuODU3MzcgMy44MzggNy4xNDkzN1pNOC45NSAxMi40NDk3QzkuOTcgMTIuNDQ5NyAxMC44NTggMTIuNjUzNyAxMS42MTQgMTMuMDYxN0MxMi4zODIgMTMuNDY5NyAxMi45NzYgMTQuMDMzNyAxMy4zOTYgMTQuNzUzN0MxMy44MTYgMTUuNDg1NyAxNC4wMjYgMTYuMzE5NyAxNC4wMjYgMTcuMjU1N0MxNC4wMjYgMTguNDY3NyAxMy43MzIgMTkuNDYzNyAxMy4xNDQgMjAuMjQzN0MxMi41NTYgMjEuMDM1NyAxMS43NCAyMS41NTc3IDEwLjY5NiAyMS44MDk3VjIwLjA0NTdDMTEuMjk2IDE5Ljg3NzcgMTEuNzcgMTkuNTQ3NyAxMi4xMTggMTkuMDU1N0MxMi40NjYgMTguNTc1NyAxMi42NCAxNy45NzU3IDEyLjY0IDE3LjI1NTdDMTIuNjQgMTYuMzE5NyAxMi4zMTYgMTUuNTYzNyAxMS42NjggMTQuOTg3N0MxMS4wMzIgMTQuNDExNyAxMC4xMjYgMTQuMTIzNyA4Ljk1IDE0LjEyMzdDNy43NjIgMTQuMTIzNyA2Ljg0NCAxNC40MTE3IDYuMTk2IDE0Ljk4NzdDNS41NDggMTUuNTYzNyA1LjIyNCAxNi4zMTk3IDUuMjI0IDE3LjI1NTdDNS4yMjQgMTcuOTc1NyA1LjM5MiAxOC41NzU3IDUuNzI4IDE5LjA1NTdDNi4wNjQgMTkuNTM1NyA2LjU0NCAxOS44NjU3IDcuMTY4IDIwLjA0NTdWMjEuODA5N0M2LjE2IDIxLjU0NTcgNS4zNSAyMS4wMTc3IDQuNzM4IDIwLjIyNTdDNC4xMzggMTkuNDMzNyAzLjgzOCAxOC40NDM3IDMuODM4IDE3LjI1NTdDMy44MzggMTYuMzE5NyA0LjA0OCAxNS40ODU3IDQuNDY4IDE0Ljc1MzdDNC44ODggMTQuMDMzNyA1LjQ4MiAxMy40Njk3IDYuMjUgMTMuMDYxN0M3LjAxOCAxMi42NTM3IDcuOTE4IDEyLjQ0OTcgOC45NSAxMi40NDk3Wk0xMi4yNjIgMjUuNjMzM0MxMi44MjYgMjUuOTIxMyAxMy4yNjQgMjYuMzI5MyAxMy41NzYgMjYuODU3M0MxMy44ODggMjcuMzk3MyAxNC4wNDQgMjguMDUxMyAxNC4wNDQgMjguODE5M0gxMi4zNTJWMjguMzg3M0MxMi4zNTIgMjYuNTUxMyAxMS4zNTYgMjUuNjMzMyA5LjM2NCAyNS42MzMzSDRWMjMuOTk1M0gxMy44NjRWMjUuNjMzM0gxMi4yNjJaTTMuODM4IDM1LjAxMjFDMy44MzggMzQuMDg4MSA0LjA0OCAzMy4yNDgxIDQuNDY4IDMyLjQ5MjFDNC44ODggMzEuNzQ4MSA1LjQ4MiAzMS4xNjAxIDYuMjUgMzAuNzI4MUM3LjAzIDMwLjMwODEgNy45MyAzMC4wOTgxIDguOTUgMzAuMDk4MUM5Ljk1OCAzMC4wOTgxIDEwLjg0NiAzMC4zMTQxIDExLjYxNCAzMC43NDYxQzEyLjM5NCAzMS4xOTAxIDEyLjk4OCAzMS43OTAxIDEzLjM5NiAzMi41NDYxQzEzLjgxNiAzMy4zMDIxIDE0LjAyNiAzNC4xNDgxIDE0LjAyNiAzNS4wODQxQzE0LjAyNiAzNi4wMjAxIDEzLjgxNiAzNi44NjYxIDEzLjM5NiAzNy42MjIxQzEyLjk4OCAzOC4zNzgxIDEyLjQgMzguOTcyMSAxMS42MzIgMzkuNDA0MUMxMC44NjQgMzkuODQ4MSA5Ljk3IDQwLjA3MDEgOC45NSA0MC4wNzAxQzcuOTMgNDAuMDcwMSA3LjAzIDM5Ljg0MjEgNi4yNSAzOS4zODYxQzUuNDgyIDM4Ljk0MjEgNC44ODggMzguMzM2MSA0LjQ2OCAzNy41NjgxQzQuMDQ4IDM2LjgwMDEgMy44MzggMzUuOTQ4MSAzLjgzOCAzNS4wMTIxWk01LjI3OCAzNS4wMTIxQzUuMjc4IDM1LjYwMDEgNS40MTYgMzYuMTUyMSA1LjY5MiAzNi42NjgxQzUuOTY4IDM3LjE4NDEgNi4zODIgMzcuNTk4MSA2LjkzNCAzNy45MTAxQzcuNDg2IDM4LjIzNDEgOC4xNTggMzguMzk2MSA4Ljk1IDM4LjM5NjFDOS43NDIgMzguMzk2MSAxMC40MTQgMzguMjQwMSAxMC45NjYgMzcuOTI4MUMxMS41MTggMzcuNjE2MSAxMS45MjYgMzcuMjA4MSAxMi4xOSAzNi43MDQxQzEyLjQ2NiAzNi4yMDAxIDEyLjYwNCAzNS42NTQxIDEyLjYwNCAzNS4wNjYxQzEyLjYwNCAzNC40NjYxIDEyLjQ2NiAzMy45MTQxIDEyLjE5IDMzLjQxMDFDMTEuOTI2IDMyLjkxODEgMTEuNTE4IDMyLjUyMjEgMTAuOTY2IDMyLjIyMjFDMTAuNDE0IDMxLjkyMjEgOS43NDIgMzEuNzcyMSA4Ljk1IDMxLjc3MjFDOC4xNDYgMzEuNzcyMSA3LjQ2OCAzMS45MTYxIDYuOTE2IDMyLjIwNDFDNi4zNjQgMzIuNTA0MSA1Ljk1IDMyLjkwMDEgNS42NzQgMzMuMzkyMUM1LjQxIDMzLjg4NDEgNS4yNzggMzQuNDI0MSA1LjI3OCAzNS4wMTIxWk0xNy4zMiA0My44NjE4SDRMNCA0Mi4yMjM4SDE3LjMyVjQzLjg2MThaTTE3LjMyIDQ4LjI5MTVINFY0Ni42NTM1SDE3LjMyVjQ4LjI5MTVaXCIgZmlsbD17cHJvcHMuY29sb3JzLmxpZ2h0Q29sb3J9Lz5cclxuICAgIDwvc3ZnPlxyXG5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpdGhUZXh0c1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBCZWhhbmNlKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgXHJcbiAgICAgIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgIDxjaXJjbGUgY3g9XCI1MFwiIGN5PVwiNTBcIiByPVwiNTBcIiBmaWxsPXtwcm9wcy5jb2xvcn0vPlxyXG4gICAgICA8cGF0aCBkPVwiTTQ3LjEzODkgNDguMDQ1MUM0OS44OTkzIDQ2LjcyNTcgNTEuMzQwMyA0NC43MjkyIDUxLjM0MDMgNDEuNjIxNUM1MS4zNDAzIDM1LjQ5MzEgNDYuNzc0MyAzNCA0MS41MDUyIDM0SDI3VjY0Ljc2MzlINDEuOTEzMkM0Ny41MDM1IDY0Ljc2MzkgNTIuNzU1MiA2Mi4wODE2IDUyLjc1NTIgNTUuODMxNkM1Mi43NTUyIDUxLjk2ODggNTAuOTIzNiA0OS4xMTI5IDQ3LjEzODkgNDguMDQ1MVpNMzMuNzYyMiAzOS4yNTE3SDQwLjEwNzZDNDIuNTQ2OSAzOS4yNTE3IDQ0Ljc0MzEgMzkuOTM3NSA0NC43NDMxIDQyLjc2NzRDNDQuNzQzMSA0NS4zODAyIDQzLjAzMyA0Ni40MzA2IDQwLjYxOTggNDYuNDMwNkgzMy43NjIyVjM5LjI1MTdaTTQwLjk5MzEgNTkuNTM4MkgzMy43NjIyVjUxLjA2Nkg0MS4xMzE5QzQ0LjEwOTQgNTEuMDY2IDQ1Ljk5MzEgNTIuMzA3MyA0NS45OTMxIDU1LjQ1ODNDNDUuOTkzMSA1OC41NjYgNDMuNzQ0OCA1OS41MzgyIDQwLjk5MzEgNTkuNTM4MlpNNzIuMTEyOCAzOC42NDQxSDU5LjYzODlWMzUuNjE0Nkg3Mi4xMTI4VjM4LjY0NDFaTTc3IDUzLjk0NzlDNzcgNDcuMzU5NCA3My4xNDU4IDQxLjg2NDYgNjYuMTU4IDQxLjg2NDZDNTkuMzY5OCA0MS44NjQ2IDU0Ljc2MDQgNDYuOTY4OCA1NC43NjA0IDUzLjY1MjhDNTQuNzYwNCA2MC41ODg1IDU5LjEyNjcgNjUuMzQ1NSA2Ni4xNTggNjUuMzQ1NUM3MS40NzkyIDY1LjM0NTUgNzQuOTI1MyA2Mi45NDk3IDc2LjU4MzMgNTcuODU0Mkg3MS4xODRDNzAuNjAyNCA1OS43NTUyIDY4LjIwNjYgNjAuNzYyMiA2Ni4zNDkgNjAuNzYyMkM2Mi43NjM5IDYwLjc2MjIgNjAuODgwMiA1OC42NjE1IDYwLjg4MDIgNTUuMDkzOEg3Ni45NDc5Qzc2Ljk3NCA1NC43MjkyIDc3IDU0LjMzODUgNzcgNTMuOTQ3OVpNNjAuODg4OSA1MS4yMzk2QzYxLjA4ODUgNDguMzE0MiA2My4wMzMgNDYuNDgyNiA2NS45NjcgNDYuNDgyNkM2OS4wMzk5IDQ2LjQ4MjYgNzAuNTg1MSA0OC4yODgyIDcwLjg0NTUgNTEuMjM5Nkg2MC44ODg5WlwiIGZpbGw9XCIjREJEQUM3XCIvPlxyXG4gICAgPC9zdmc+XHJcblxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmVoYW5jZVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBEcmliYmJsZShwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgIDxjaXJjbGUgY3g9XCI1MFwiIGN5PVwiNTBcIiByPVwiNTBcIiBmaWxsPXtwcm9wcy5jb2xvcn0gLz5cclxuICAgICAgPHBhdGggZD1cIk01MCAyNkMzNi43NjYzIDI2IDI2IDM2Ljc2NjMgMjYgNTBDMjYgNjMuMjMzNyAzNi43NjYzIDc0IDUwIDc0QzYzLjIzMzcgNzQgNzQgNjMuMjMzNyA3NCA1MEM3NCAzNi43NjYzIDYzLjIzMzcgMjYgNTAgMjZaTTY1Ljg2ODEgMzcuMDY3N0M2OC43MjMyIDQwLjU1NiA3MC40NTIyIDQ0Ljk5OSA3MC40OTczIDQ5LjgzNzVDNjkuODIxNCA0OS42OTQ2IDYzLjA0MzkgNDguMzE5OSA1Ni4yMjI5IDQ5LjE3NzdDNTUuNjY2MiA0Ny44MTg5IDU1LjE0MDggNDYuNjIzNSA1NC40MjEyIDQ1LjE1MDVDNjIuMDAwNyA0Mi4wNTYgNjUuNDM1OSAzNy42NTIzIDY1Ljg2ODEgMzcuMDY3N1pNNjMuNTg5MSAzNC42OTcxQzYzLjIyMDQgMzUuMjIyMyA2MC4xMzQ2IDM5LjM2OTkgNTIuODQ1MiA0Mi4xMDIyQzQ5LjQ4NTkgMzUuOTMwMyA0NS43NjI3IDMwLjg2MDEgNDUuMTk2MSAzMC4xMDE0QzUxLjY5NyAyOC41MzQzIDU4LjU0NzcgMzAuMjI0MyA2My41ODkxIDM0LjY5NzFaTTQxLjI4NDYgMzEuNDc5NEM0MS44MjUxIDMyLjIyMDUgNDUuNDg4MyAzNy4yOTcgNDguODg1IDQzLjMzNTFDMzkuMjk1OSA0NS44ODE1IDMwLjg1MDEgNDUuODQ0OCAyOS45MzMzIDQ1LjgzMjdDMzEuMjYyNiAzOS40NzE1IDM1LjU0OTUgMzQuMTg0NSA0MS4yODQ2IDMxLjQ3OTRaTTI5LjUwMDMgNTAuMDMxM0MyOS41MDAzIDQ5LjgyMTYgMjkuNTA0NSA0OS42MTMgMjkuNTEwOCA0OS40MDQ4QzMwLjQwNzcgNDkuNDIzMiA0MC4zNDE3IDQ5LjU1MTMgNTAuNTc5MSA0Ni40ODc1QzUxLjE2NTkgNDcuNjM2IDUxLjcyNjUgNDguODAxOCA1Mi4yNDExIDQ5Ljk2NjRDNDQuODI4MyA1Mi4wNTQzIDM4LjA5MzMgNTguMDQ5NyAzNC43NzA0IDYzLjczOEMzMS40OTYyIDYwLjEwMzcgMjkuNTAwMyA1NS4yOTY1IDI5LjUwMDMgNTAuMDMxM1pNMzcuNDE3MSA2Ni4yMDM1QzM5LjU1ODUgNjEuODI2MSA0NS4zNjk4IDU2LjE3NTUgNTMuNjM0NSA1My4zNTYxQzU2LjUxMjUgNjAuODM1MSA1Ny43MDI3IDY3LjEwMzIgNTguMDA3NiA2OC45MDE3QzUxLjQxNjEgNzEuNzA5NCA0My40OSA3MC45MzkxIDM3LjQxNzEgNjYuMjAzNVpNNjEuNDUzOSA2Ny4wMjVDNjEuMjQzOCA2NS43NzggNjAuMTUyNyA1OS43NzY5IDU3LjQ3MTQgNTIuNDA4OUM2My44OTUzIDUxLjM4MDYgNjkuNTM5MiA1My4wNjM5IDcwLjI0MDUgNTMuMjg1MkM2OS4zMjY4IDU4Ljk4OTIgNjYuMDUyOCA2My45MTUzIDYxLjQ1MzkgNjcuMDI1WlwiIGZpbGw9XCIjREJEQUM3XCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcmliYmJsZVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBHb29kcmVhZHMocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICA8Y2lyY2xlIGN4PVwiNTBcIiBjeT1cIjUwXCIgcj1cIjUwXCIgZmlsbD17cHJvcHMuY29sb3J9Lz5cclxuICAgICAgPHBhdGggZD1cIk0zNi4wODg0IDYzLjA4NzNIMzYuMzE4MUMzNy4zNiA2My4wODczIDM4LjQxMDEgNjMuMDg3MyAzOS40NTIgNjMuMDk1NUMzOS41ODMzIDYzLjA5NTUgMzkuNzA2NCA2My4wNjI3IDM5Ljc0NzQgNjMuMjY3OEM0MC4zMjk5IDY2LjEzMSA0Mi4yMDg2IDY3Ljc0NzIgNDQuOTA3NyA2OC41MTAyQzQ3LjExNDYgNjkuMTMzNyA0OS4zNDYyIDY5LjE1MDEgNTEuNTc3NyA2OC42NTc5QzU0LjM1MDYgNjguMDUwOCA1Ni4xNzIgNjYuMzM2MSA1Ny4xNTY0IDYzLjcwMjZDNTcuODEyOCA2MS45Mzg4IDU4LjAzNDMgNjAuMTA5MiA1OC4wNTg5IDU4LjI0NjlDNTguMDY3MSA1Ny43NzExIDU4LjA4MzUgNTQuMzkxIDU4LjA0MjUgNTMuOTE1Mkw1Ny45Njg2IDUzLjg5MDVDNTcuOTAzIDU0LjAxMzYgNTcuODI5MiA1NC4xMjg1IDU3Ljc2MzUgNTQuMjUxNUM1NS45NTA0IDU3Ljc4NzUgNTIuNzM0NCA1OS43ODExIDQ5LjExNjQgNTkuOTIwNUM0MC42NjYyIDYwLjI0ODcgMzUuMjE4NyA1NS4yNDQyIDM1LjAwNTQgNDUuNDY0OUMzNC45NjQ0IDQzLjUyMDYgMzUuMTUzMSA0MS42MTcyIDM1LjY4NjQgMzkuNzQ2N0MzNy4zNzY0IDMzLjkxMzYgNDEuODA2NiAzMC4wNDk1IDQ4LjMxMjQgMzAuMDAwMkM1My4zNDE1IDI5Ljk2NzQgNTYuNjM5NiAzMy4xNzUyIDU3Ljg0NTYgMzUuNzY3N0M1Ny44ODY2IDM1Ljg1OCA1Ny45NTIyIDM1Ljk1NjQgNTguMDQyNSAzNS45MjM2VjMwLjg2OTlINjEuNjc2OUM2MS42NzY5IDUzLjg2NTkgNjEuNjg1MSA1OC4xMjM5IDYxLjY4NTEgNTguMTIzOUM2MS42NzY5IDY0LjU2NDEgNTkuNDk0NiA2OS45MTMxIDUzLjIzNDkgNzEuNDMwOUM0Ny41MzMxIDcyLjgxNzQgNDAuMTkwNCA3MS44MjQ3IDM3LjE1NDkgNjYuNzM4MUMzNi40OTg2IDY1LjYzMDYgMzYuMTg2OCA2NC40MTY0IDM2LjA4ODQgNjMuMDg3M1pNNDguMDkwOSAzMi45OTQ3QzQzLjc4MzggMzIuOTUzNyAzOS4xODk1IDM2LjMzMzggMzguNjU2MiA0My45NzE4QzM4LjMxOTkgNDguODEyMiAzOS44NzA0IDUzLjk5NzIgNDQuNTIyMiA1Ni4xNjMxQzQ2Ljc4NjUgNTcuMjIxNCA1MC42MTc4IDU3LjM5MzcgNTMuNDA3MiA1NS40NDkzQzU3LjMxMjMgNTIuNzI1NiA1OC41NTExIDQ3LjQ5MTQgNTcuOTAzIDQyLjgxNUM1Ny4xMDcyIDM2Ljk4MTkgNTMuOTgxNSAzMi45NzAxIDQ4LjA5MDkgMzIuOTk0N1pcIiBmaWxsPVwiI0RCREFDN1wiLz5cclxuICAgIDwvc3ZnPlxyXG5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdvb2RyZWFkc1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBMaW5rZWQocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICA8Y2lyY2xlIGN4PVwiNTBcIiBjeT1cIjUwXCIgcj1cIjUwXCIgZmlsbD17cHJvcHMuY29sb3J9IC8+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMzkuNDAxMiA2OS45OTkxSDMwLjY5MzhWNDEuOTU4NEgzOS40MDEyVjY5Ljk5OTFaTTM1LjA0MjggMzguMTMzNEMzMi4yNTg0IDM4LjEzMzQgMzAgMzUuODI3MiAzMCAzMy4wNDI4QzMwIDMxLjcwNTQgMzAuNTMxMyAzMC40MjI3IDMxLjQ3NyAyOS40NzdDMzIuNDIyNyAyOC41MzEzIDMzLjcwNTQgMjggMzUuMDQyOCAyOEMzNi4zODAyIDI4IDM3LjY2MjkgMjguNTMxMyAzOC42MDg2IDI5LjQ3N0MzOS41NTQzIDMwLjQyMjcgNDAuMDg1NiAzMS43MDU0IDQwLjA4NTYgMzMuMDQyOEM0MC4wODU2IDM1LjgyNzIgMzcuODI2MyAzOC4xMzM0IDM1LjA0MjggMzguMTMzNFpNNzEuOTkwNiA2OS45OTkxSDYzLjMwMTlWNTYuMzQ5MUM2My4zMDE5IDUzLjA5NTkgNjMuMjM2MiA0OC45MjQxIDU4Ljc3NDcgNDguOTI0MUM1NC4yNDc1IDQ4LjkyNDEgNTMuNTUzOCA1Mi40NTg0IDUzLjU1MzggNTYuMTE0N1Y2OS45OTkxSDQ0Ljg1NTZWNDEuOTU4NEg1My4yMDY5VjQ1Ljc4MzRINTMuMzI4OEM1NC40OTEyIDQzLjU4MDMgNTcuMzMwOSA0MS4yNTUzIDYxLjU2NzUgNDEuMjU1M0M3MC4zOCA0MS4yNTUzIDcyIDQ3LjA1ODQgNzIgNTQuNTk1OVY2OS45OTkxSDcxLjk5MDZaXCIgZmlsbD1cIiNEQkRBQzdcIi8+XHJcbiAgICA8L3N2Zz5cclxuXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaW5rZWRcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gVHdpdHRlcihwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgIDxjaXJjbGUgY3g9XCI1MFwiIGN5PVwiNTBcIiByPVwiNTBcIiBmaWxsPXtwcm9wcy5jb2xvcn0vPlxyXG4gICAgICA8cGF0aCBkPVwiTTY5LjE2ODkgNDEuNTEzM0M2OS4xOTg3IDQxLjkzMDggNjkuMTk4NyA0Mi4zNDg0IDY5LjE5ODcgNDIuNzY1OUM2OS4xOTg3IDU1LjUgNTkuNTA2NSA3MC4xNzI3IDQxLjc5MTkgNzAuMTcyN0MzNi4zMzQ0IDcwLjE3MjcgMzEuMjY0NiA2OC41OTIgMjcgNjUuODQ4NUMyNy43NzU0IDY1LjkzNzkgMjguNTIwOSA2NS45Njc3IDI5LjMyNjEgNjUuOTY3N0MzMy44MjkzIDY1Ljk2NzcgMzcuOTc0NiA2NC40NDY4IDQxLjI4NDkgNjEuODUyM0MzNy4wNTAxIDYxLjc2MjggMzMuNTAxMyA1OC45ODkzIDMyLjI3ODUgNTUuMTcyQzMyLjg3NSA1NS4yNjE0IDMzLjQ3MTQgNTUuMzIxMSAzNC4wOTc4IDU1LjMyMTFDMzQuOTYyNiA1NS4zMjExIDM1LjgyNzUgNTUuMjAxNyAzNi42MzI3IDU0Ljk5MzFDMzIuMjE4OSA1NC4wOTgzIDI4LjkwODYgNTAuMjIxNSAyOC45MDg2IDQ1LjUzOTRWNDUuNDIwMUMzMC4xOTA5IDQ2LjEzNTggMzEuNjgyMSA0Ni41ODMyIDMzLjI2MjYgNDYuNjQyOEMzMC42NjggNDQuOTEzIDI4Ljk2ODIgNDEuOTYwNiAyOC45NjgyIDM4LjYyMDVDMjguOTY4MiAzNi44MzEyIDI5LjQ0NTMgMzUuMTkxIDMwLjI4MDQgMzMuNzU5NUMzNS4wMjIyIDM5LjYwNDcgNDIuMTQ5OCA0My40MjE5IDUwLjE0MjEgNDMuODM5NEM0OS45OTMgNDMuMTIzNyA0OS45MDM1IDQyLjM3ODIgNDkuOTAzNSA0MS42MzI2QzQ5LjkwMzUgMzYuMzI0MiA1NC4xOTggMzIgNTkuNTM2MiAzMkM2Mi4zMDk2IDMyIDY0LjgxNDcgMzMuMTYzMSA2Ni41NzQyIDM1LjA0MTlDNjguNzUxMiAzNC42MjQ0IDcwLjgzODggMzMuODE5MSA3Mi42ODc5IDMyLjcxNTdDNzEuOTcyIDM0Ljk1MjUgNzAuNDUxMSAzNi44MzEzIDY4LjQ1MzEgMzguMDI0MUM3MC4zOTE1IDM3LjgxNTQgNzIuMjcwNCAzNy4yNzg1IDc0IDM2LjUzM0M3Mi42ODggMzguNDQxNiA3MS4wNDc3IDQwLjE0MTQgNjkuMTY4OSA0MS41MTMzWlwiIGZpbGw9XCIjREJEQUM3XCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUd2l0dGVyXHJcbiIsImltcG9ydCBSZWFjdCwge0ZyYWdtZW50fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEJlaGFuY2UgZnJvbSAnLi9Tb2NpYWwvQmVoYW5jZSdcclxuaW1wb3J0IERyaWJiYmxlIGZyb20gJy4vU29jaWFsL0RyaWJiYmxlJ1xyXG5pbXBvcnQgR29vZHJlYWRzIGZyb20gJy4vU29jaWFsL0dvb2RyZWFkcydcclxuaW1wb3J0IExpbmtlZGluIGZyb20gJy4vU29jaWFsL0xpbmtlZGluJ1xyXG5pbXBvcnQgVHdpdHRlciBmcm9tICcuL1NvY2lhbC9Ud2l0dGVyJ1xyXG5cclxuZnVuY3Rpb24gU29jaWFscyhwcm9wcykge1xyXG4gIGNvbnN0IHNvYyA9ICgpID0+IHtcclxuICAgIGxldCBzID0gcHJvcHMuaWNvblxyXG4gICAgcmV0dXJuIChcclxuICAgIHMgPT09ICdiZWhhbmNlJyA/IDxCZWhhbmNlIGNvbG9yPXtwcm9wcy5jb2xvcn0gLz4gOlxyXG4gICAgcyA9PT0gJ2RyaWJiYmxlJyA/IDxEcmliYmJsZSBjb2xvcj17cHJvcHMuY29sb3J9IC8+IDpcclxuICAgIHMgPT09ICdnb29kcmVhZHMnID8gPEdvb2RyZWFkcyBjb2xvcj17cHJvcHMuY29sb3J9IC8+IDpcclxuICAgIHMgPT09ICdsaW5rZWRpbicgPyA8TGlua2VkaW4gY29sb3I9e3Byb3BzLmNvbG9yfSAvPiA6XHJcbiAgICBzID09PSAndHdpdHRlcicgPyA8VHdpdHRlciBjb2xvcj17cHJvcHMuY29sb3J9IC8+IDogbnVsbCApXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICB7c29jKCl9XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29jaWFsc1xyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1N0YXRlQ29udGV4dH0gZnJvbSAnLi4vLi4vdXRpbHMvY29udGV4dC9zdGF0ZUNvbnRleHQnXHJcbmltcG9ydCBCcmFuZExvZ28gZnJvbSAnLi4vU3Zncy9CcmFuZExvZ28vQnJhbmRMb2dvJ1xyXG5pbXBvcnQge2ludHJvQW5pbSwgb3BlblRvcExheWVyLCBjbG9zZVRvcExheWVyfSBmcm9tICcuLi8uLi91dGlscy9wYWdlYW5pbWF0aW9ucy90b3BsYXlvdmVyL3RvcGxheW92ZXInXHJcbmltcG9ydCB7Y2hlY2tmb3JzZXNzaW9ufSBmcm9tICcuLi8uLi91dGlscy9zZXNzaW9uZGF0YS9zZXNzaW9uU3RvcmFnZSdcclxuaW1wb3J0IHttb3Rpb259IGZyb20gJ2ZyYW1lci1tb3Rpb24nXHJcbmltcG9ydCB7dG9wQW5pbSwgbG9nb0FuaW19IGZyb20gJy4uLy4uL3V0aWxzL3BhZ2VhbmltYXRpb25zL21vdGlvbi90b3BsYXllcidcclxuXHJcblxyXG5jb25zdCBUb3BMYXlvdmVyID0gKCkgPT57XHJcbiAgY29uc3Qge3N0YXRlfSA9IHVzZUNvbnRleHQoU3RhdGVDb250ZXh0KVxyXG4gIC8vIGNoZWNrZm9yc2Vzc2lvbigpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bW90aW9uLmRpdiBcclxuICAgICAgdmFyaWFudHM9e3RvcEFuaW19XHJcbiAgICAgIGluaXRpYWw9e3N0YXRlLmlzVHJhbnNpdGlvbmluZ31cclxuICAgICAgYW5pbWF0ZT17c3RhdGUuYW5pbWF0aW9ufVxyXG4gICAgICBleGl0PXtzdGF0ZS5leGl0TW9kZX1cclxuICAgICAgY2xhc3NOYW1lPVwiY29udGVudC1jZW50ZXIgdG9wLWxheW92ZXJcIj5cclxuICAgICAgICA8bW90aW9uLmRpdiBcclxuICAgICAgICAgIHZhcmlhbnRzPXtsb2dvQW5pbX1cclxuICAgICAgICAgIGluaXRpYWw9e3N0YXRlLmlzVHJhbnNpdGlvbmluZ31cclxuICAgICAgICAgIGFuaW1hdGU9e3N0YXRlLmFuaW1hdGlvbn1cclxuICAgICAgICAgIGV4aXQ9e3N0YXRlLmV4aXRNb2RlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidG9wLWxheW92ZXItbG9nbyBjb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgPEJyYW5kTG9nbyBjb2xvck1vZGU9eycjRTNFMUMzJ30vPlxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgIDwvbW90aW9uLmRpdj4gXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BMYXlvdmVyXHJcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBRckNvZGUgZnJvbSAnLi9jb21wb25lbnRzL1FyQ29kZSdcclxuaW1wb3J0IERlc2MgZnJvbSAnLi9jb21wb25lbnRzL0NyZWRlbnRpYWwnXHJcbmltcG9ydCB7UGFnZURhdGF9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnRleHQvcGFnZUNvbnRleHQnXHJcblxyXG5jbGFzcyBDcmVkZW50aWFsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgY29udGV4dFR5cGUgPSBQYWdlRGF0YVxyXG5cclxuICByZW5kZXIoKXtcclxuICAgIGxldCBkYXRhID0gdGhpcy5jb250ZXh0XHJcblxyXG4gICAgbGV0IGNyZWRlbnRpYWxzID0gZGF0YS5jb3Vyc2VzLm1hcCgoY291cnNlLCBpKT0+e1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImNyZWRlbnRpYWwtY29udFwiIGtleT17aX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWRlbnRpYWwtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8UXJDb2RlIGNlcnRMaW5rPXtjb3Vyc2UuY2VydExpbmt9IHFyQ29kZT17Y291cnNlLnFyQ29kZX0vPlxyXG4gICAgICAgICAgICA8RGVzYyBcclxuICAgICAgICAgICAgICBuYW1lPXtjb3Vyc2UubmFtZX1cclxuICAgICAgICAgICAgICBzY2hvb2w9e2NvdXJzZS5zY2hvb2x9XHJcbiAgICAgICAgICAgICAgdGFrZW49e2NvdXJzZS50YWtlbn1cclxuICAgICAgICAgICAgICBkYXRlPXtjb3Vyc2UuZGF0ZX0vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICApXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JlZGVudGlhbC1jb250YWluZXJcIj5cclxuICAgICAgICB7Y3JlZGVudGlhbHN9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlZGVudGlhbCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIENyZWRlbnRpYWwocHJvcHMpIHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jZW50ZXIgY3JlZGVudGlhbC1kZXNjXCI+XHJcbiAgICAgIDxoNCBjbGFzc05hbWU9XCJwLXdyYXBwZXIgaGVhZDRcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaG93LWNvbnRhaW5lciBwLWNvbnRhaW5lciBzaG93XCJcclxuICAgICAgICAgIHN0eWxlPXt7Y29sb3I6ICcjMkM2NjY0J319PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZlYWwgcC1yZXZlYWxcIlxyXG4gICAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0OiA1MDB9fT57cHJvcHMubmFtZX08L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVubmVyIHAtcnVubmVyXCI+PC9kaXY+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2g0PlxyXG4gICAgICB7LyogPGg0IGNsYXNzTmFtZT1cInAtd3JhcHBlciBoZWFkNFwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNob3ctY29udGFpbmVyIHAtY29udGFpbmVyIHNob3dcIlxyXG4gICAgICAgICAgc3R5bGU9e3tjb2xvcjogJyMwQzdDQjAnfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmVhbCBwLXJldmVhbFwiXHJcbiAgICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6IDUwMH19Pntwcm9wcy5zY2hvb2x9PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1bm5lciBwLXJ1bm5lclwiPjwvZGl2PlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9oND4gKi99XHJcbiAgICAgIDxoNCBjbGFzc05hbWU9XCJzdWItcmV2ZWFsLWNvbnRhaW5lciBoZWFkNCBzaG93XCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmV2ZWFsXCJcclxuICAgICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDogNTAwLGNvbG9yOiAnIzBDN0NCMCd9fT57cHJvcHMuc2Nob29sfTwvc3Bhbj5cclxuICAgICAgPC9oND5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViLXJldmVhbC1jb250YWluZXIgcC1kZXNjIGRlc2Mgc2hvdyB0aHJvdWdoXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViLXJldmVhbCBwLWRlc2MtY29udGVudFwiPnRocm91Z2g8L3NwYW4+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgey8qIDxoNCBjbGFzc05hbWU9XCJwLXdyYXBwZXIgaGVhZDQgY2RcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaG93LWNvbnRhaW5lciBwLWNvbnRhaW5lciBzaG93XCJcclxuICAgICAgICAgIHN0eWxlPXt7Y29sb3I6ICcjMEM3Q0IwJ319PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZlYWwgcC1yZXZlYWxcIlxyXG4gICAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0OiA1MDB9fT57cHJvcHMudGFrZW59PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1bm5lciBwLXJ1bm5lclwiPjwvZGl2PlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9oND4gKi99XHJcbiAgICAgIDxoNCBjbGFzc05hbWU9XCJzdWItcmV2ZWFsLWNvbnRhaW5lciBoZWFkNCBzaG93XCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmV2ZWFsXCJcclxuICAgICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDogNTAwLGNvbG9yOiAnIzBDN0NCMCd9fT57cHJvcHMudGFrZW59PC9zcGFuPlxyXG4gICAgICA8L2g0PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWItcmV2ZWFsLWNvbnRhaW5lciBwLWRlc2MgZGVzYyBzaG93IGRhdGVcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWItcmV2ZWFsIHAtZGVzYy1jb250ZW50XCI+e3Byb3BzLmRhdGV9PC9zcGFuPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyZWRlbnRpYWxcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gUXJDb2RlKHByb3BzKSB7XHJcblxyXG4gIC8vIGFpbWFuIHBsZWFzZSBwcm92aWRlIGEgbGluayBmb3IgdGhlIGNlcnRpZmljYXRlXHJcbiAgLy8gYW5kIGFsdGVybmF0aXZlIG5hbWVcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jZW50ZXIgY3JlZGVudGlhbC1xclwiPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWItcmV2ZWFsLWNvbnRhaW5lciBzaG93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZlYWwgXCI+XHJcbiAgICAgICAgICA8YSBocmVmPXtwcm9wcy5jZXJ0TGlua30+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtgL2ltYWdlcy8ke3Byb3BzLnFyQ29kZX0ucG5nYH0gYWx0PVwiXCIvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPHNwYW4+c2NhbiBvciBjbGljayB0byBzZWUgY2VydGlmaWNhdGU8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicnVubmVyXCI+PC9kaXY+ICovfVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFFyQ29kZVxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFRvcExheW92ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Ub3BMYXlvdmVyL1RvcExheW92ZXInXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhcidcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudUNvbnRhaW5lci9NZW51Q29udGFpbmVyJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXInXG5pbXBvcnQgU2VjdGlvbkJsb2NrcyBmcm9tICcuLi9jb21wb25lbnRzL1NlY3Rpb25CbG9ja3MvU2VjdGlvbkJsb2NrcydcbmltcG9ydCBTaG9ydFByb2plY3RWaWV3IGZyb20gJy4uL2NvbXBvbmVudHMvU2hvcnRQcm9qZWN0Vmlldy9TaG9ydFByb2plY3RWaWV3J1xuaW1wb3J0IE5lZWRoZWxwIGZyb20gJy4uL2NvbXBvbmVudHMvTmVlZEhlbHAvTmVlZEhlbHAnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlcidcbmltcG9ydCB7cmVzaXplfSBmcm9tICcuLi91dGlscy9jb21tb24vY29tbW9uJ1xuaW1wb3J0IHtzY3JvbGxBbmltYXRpb24sIGRlYm91bmNlfSBmcm9tICcuLi91dGlscy9wYWdlYW5pbWF0aW9ucy9zY3JvbGxhbmltYXRpb24vc2Nyb2xsYW5pbWF0aW9uJ1xuaW1wb3J0IHtQYWdlRGF0YUNvbnRleHR9IGZyb20gJy4uL3V0aWxzL2NvbnRleHQvcGFnZUNvbnRleHQnXG5pbXBvcnQge1N0YXRlQ29udGV4dH0gZnJvbSAnLi4vdXRpbHMvY29udGV4dC9zdGF0ZUNvbnRleHQnXG5pbXBvcnQge3ZhcmlhbnRzfSBmcm9tICcuLi91dGlscy9wYWdlYW5pbWF0aW9ucy9tb3Rpb24vbWFpbnZhcmlhbnQnXG5pbXBvcnQge0FuaW1hdGVQcmVzZWNlLCBtb3Rpb259IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5cbmZ1bmN0aW9uIEhvbWUgKCkge1xuICBjb25zdCB7c3RhdGV9ID0gdXNlQ29udGV4dChTdGF0ZUNvbnRleHQpXG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgLy8gcmVzaXplIGV2ZW50IHRvIHdoZW4gdGhlIGJyb3dzZXIgaXMgcmVzaXplZFxuICAgIHJlc2l6ZSgpXG4gICAgLy8gc2Nyb2xsIGV2ZW50XG4gICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgc2Nyb2xsQW5pbWF0aW9uKClcbiAgICB9LCAzMDApXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlKHNjcm9sbEFuaW1hdGlvbiwgNDApKVxuICAgIC8vIHJldHVybiAoKSA9PiB7XG4gICAgLy8gICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsKVxuICAgIC8vIH1cbiAgfSlcblxuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXYgXG4gICAgICB2YXJpYW50cz17dmFyaWFudHN9XG4gICAgICBpbml0aWFsPSdpbml0aWFsJ1xuICAgICAgYW5pbWF0ZT0nZW50ZXInXG4gICAgICBleGl0PXtzdGF0ZS5leGl0TW9kZX1cbiAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5BaW1hbiBBZGxhd2FuIHwgT2ZmaWNpYWwgV2Vic2l0ZTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2ltYWdlcy9icmFuZC1pY29uLWxvZ28uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxUb3BMYXlvdmVyLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxQYWdlRGF0YUNvbnRleHQgcGFnZXNldHM9eydob21lJ30+XG4gICAgICAgICAgICA8TmF2YmFyIC8+ICAgICAgIFxuICAgICAgICAgICAgPE1lbnUgLz5cbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT0nbWFpbic+XG4gICAgICAgICAgICAgIDxIZWFkZXIvPlxuICAgICAgICAgICAgICA8U2VjdGlvbkJsb2NrcyB0aXRsZT0ncHJvamVjdCcgLz5cbiAgICAgICAgICAgICAgPFNob3J0UHJvamVjdFZpZXcgLz5cbiAgICAgICAgICAgICAgPFNlY3Rpb25CbG9ja3MgdGl0bGU9J3ZpZXcgbW9yZScgLz5cbiAgICAgICAgICAgICAgPE5lZWRoZWxwIC8+XG4gICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICA8L1BhZ2VEYXRhQ29udGV4dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21vdGlvbi5kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIiwiaW1wb3J0IHtyZXNpemVFbGVtZW50cyB9IGZyb20gJy4vZWxlbWVudFNvcnRlcidcclxuXHJcbi8vIGZ1bmN0aW9uIHRvIHJ1biBmb3IgcmVzaXppbmcgb3Igd2hlbiBwYWdlIGxvYWRzXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNpemUoKXtcclxuICByZXNpemVFbCgpXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUVsKVxyXG4gIHJldHVybiAoKT0+IHsgXHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplRWwpXHJcbiAgfVxyXG59XHJcblxyXG4vLyBmdW5jdGlvbiB0aGF0IHdpbGwgcmVzaXplIGVsZW1lbnRzXHJcbmZ1bmN0aW9uIHJlc2l6ZUVsICgpIHtcclxuICBjb25zdCBlbCA9IHJlc2l6ZUVsZW1lbnRzKClcclxuICBsZXQgdyA9IHdpbmRvdy5pbm5lcldpZHRoXHJcbiAgaWYody0yMCA8PSAxNjAwKXtcclxuICAgIGVsLm1haW5fY29udGFpbmVyLnN0eWxlLndpZHRoID0gJzEwMCUnXHJcbiAgICBlbC5uYXZiYXJfY29udGFpbmVyLnN0eWxlLndpZHRoID0gJzEwMCUnXHJcbiAgICBlbC5tZW51X2NvbnRhaW5lci5zdHlsZS53aWR0aCA9ICcxMDAlJ1xyXG4gICAgZWwubWVudV93cmFwcGVyLnN0eWxlLndpZHRoID0gJzEwMCUnXHJcbiAgICBlbC5tZW51X3J1bm5lci5zdHlsZS53aWR0aCA9ICcxMDAlJ1xyXG4gICAgZWwudG9wX2NvbnRhaW5lci5zdHlsZS53aWR0aCA9ICcxMDAlJ1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlbC5tYWluX2NvbnRhaW5lci5zdHlsZS53aWR0aCA9IGAxNjAwcHhgXHJcbiAgICBlbC5uYXZiYXJfY29udGFpbmVyLnN0eWxlLndpZHRoID0gYDE2MDBweGBcclxuICAgIGVsLm1lbnVfY29udGFpbmVyLnN0eWxlLndpZHRoID0gJzE2MDBweCdcclxuICAgIGVsLm1lbnVfd3JhcHBlci5zdHlsZS53aWR0aCA9ICcxNjAwcHgnXHJcbiAgICBlbC5tZW51X3J1bm5lci5zdHlsZS53aWR0aCA9ICcxNjAwcHgnXHJcbiAgICBlbC50b3BfY29udGFpbmVyLnN0eWxlLndpZHRoID0gJzE2MDBweCdcclxuICB9XHJcbn1cclxuXHJcblxyXG5sZXQgcm91dGVzID0gW1xyXG4gICdob21lJywgJ2Fib3V0JywgJ3Byb2plY3RzJywgJ2NvbnRhY3RzJywgJ3ByaXZhY3knLCAnY3JlZGVudGlhbHMnLCAncHJvamVjdHMvcHJvamVjdHMvbXVzaWMtYXBwJywgJ3Byb2plY3RzL3Jlc2VydmF0aW9uLWFwcCcsICdwcm9qZWN0cy9lbGVjdHJpYy1iaWxsJywgJ3Byb2plY3RzL211c2ljLXBsYXllcjMnLCAncHJvamVjdHMvbXVzaWMtcGxheWVyNCcsICdwcm9qZWN0cy9tdXNpYy1wbGF5ZXI1J1xyXG5dXHJcblxyXG4vLyB0aGlzIGZ1bmN0aW9uIHdpbGwgZ2VuZXJhdGUgYSByZXR1cm4gdGhlIGN1cnJlbnQgcm91dGVcclxuLy8gZm9yIHRoZSBzdGF0ZVxyXG5leHBvcnQgY29uc3QgY2hlY2tSb3V0ZSA9IChyb3V0ZSkgPT4ge1xyXG4gIGxldCByID0gcm91dGUuc2xpY2UoMSwgNTApXHJcbiAgbGV0IHVybCA9IHIgPT09ICcnID8gJ2hvbWUnIDogclxyXG4gIGxldCBiO1xyXG4gIGxldCBhID0gcm91dGVzLmZpbHRlcihyb3V0ZSA9PiB7XHJcbiAgICByZXR1cm4gcm91dGUgPT09IHVybFxyXG4gIH0pXHJcblxyXG4gIGlmIChhWzBdID09PSB1bmRlZmluZWQpIHtcclxuICAgIGIgPSAnbm90Rm91bmQnXHJcbiAgfSBlbHNlIHtcclxuICAgIGIgPSBhWzBdXHJcbiAgfVxyXG5cclxuICByZXR1cm4gYlxyXG59XHJcblxyXG4iLCJcclxuLy8gZnVuY3Rpb24gdG8gcXVlcnllbGVtZW50c1xyXG5mdW5jdGlvbiBxRWwoZWwsIGFsbCl7XHJcbiAgaWYoYWxsKXtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtlbH1gKVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7ZWx9YClcclxuICB9XHJcbn1cclxuXHJcbi8vIGVsZW1lbnRzIHRoYXQgbmVlZHMgdG8gYmUgcmVzaXplZFxyXG5leHBvcnQgZnVuY3Rpb24gcmVzaXplRWxlbWVudHMoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG1haW5fY29udGFpbmVyOiBxRWwoJ21haW4tY29udGFpbmVyJywgMCksXHJcbiAgICBuYXZiYXJfY29udGFpbmVyOiBxRWwoJ25hdmJhci1jb250YWluZXInLCAwKSxcclxuICAgIG1lbnVfY29udGFpbmVyOiBxRWwoJ21lbnUtY29udGFpbmVyJywgMCksXHJcbiAgICBtZW51X3dyYXBwZXI6IHFFbCgnbWVudS13cmFwcGVyJywgMCksXHJcbiAgICBtZW51X3J1bm5lcjogcUVsKCdtZW51LXJ1bm5lcicsIDApLFxyXG4gICAgdG9wX2NvbnRhaW5lcjogcUVsKCd0b3AtY29udGFpbmVyJywgMClcclxuICB9XHJcbn1cclxuXHJcbi8vIGVsZW1lbnRzIGZvciB0aGUgbWVudSBpdGVtc1xyXG5leHBvcnQgZnVuY3Rpb24gbmF2SG92ZXJFbGVtZW50cygpIHtcclxuICByZXR1cm4ge1xyXG4gICAgbWlkZGxlOiBxRWwoJ21pZGRsZS1zcGFuJywgMCksXHJcbiAgICBjbG9zZV9wYXRoczogcUVsKCdtZW51LWNsb3NlIHBhdGgnLCAwKSxcclxuICAgIGJhY2s6IHFFbCgnYmFjay1zcGFuJywgMCksXHJcbiAgICBmcm9udDogcUVsKCdmcm9udC10ZXh0JywgMClcclxuICB9XHJcbn1cclxuXHJcbi8vIGxvZ28gZWxlbWVudCBhbmltYXRpb25cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ29FbGVtZW50cygpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdDogcUVsKCduYXZiYXItbG9nbyAudG9wLWxpbmUnLCAwKSxcclxuICAgIHI6IHFFbCgnbmF2YmFyLWxvZ28gLnJpZ2h0LWxpbmUnLCAwKSxcclxuICAgIGI6IHFFbCgnbmF2YmFyLWxvZ28gLmJvdHRvbS1saW5lJywgMCksXHJcbiAgICBsOiBxRWwoJ25hdmJhci1sb2dvIC5sZWZ0LWxpbmUnLCAwKSxcclxuICB9XHJcbn1cclxuXHJcbi8vIG1lbnUgY2xpY2sgYW5pbWF0aW9uIGVsZW1lbnRzXHJcbmV4cG9ydCBmdW5jdGlvbiBtZW51Q2xpY2tFbGVtZW50cyAoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGNvbnRhaW5lcjogcUVsKCdjb250YWluZXInLCAwKSxcclxuICAgIG1lbnVfcnVubmVyczogcUVsKCdtZW51LXJ1bm5lcnMnLCAxKSxcclxuICAgIHNxdWFyZV9pbWc6IHFFbCgnc3F1YXJlLWltZycsIDApLFxyXG4gICAgcmlnaHRfaWNvbnM6IHFFbCgncmlnaHQtaWNvbnMnLCAwKSxcclxuICAgIG1lbnVfbGlzdF9jb250YWluZXI6IHFFbCgnbWVudS1saXN0LWNvbnRhaW5lcicsIDEpLFxyXG4gICAgY29weXJpZ2h0X3J1bm5lcjogcUVsKCdjb3B5cmlnaHQtcnVubmVyJywgMCksXHJcbiAgICBzb2NpYWxfbmF2aWNvbnM6IHFFbCgnc29jaWFsLW5hdmljb25zJywgMCksXHJcbiAgICBtZW51X2NvbnRhaW5lcjogcUVsKCdtZW51LWNvbnRhaW5lcicsIDApLFxyXG4gICAgdGV4dF9hY3RpdmU6IHFFbCgnYWN0aXZlIC5tZW51LWxpc3QtdGV4dCcsIDApLFxyXG4gICAgYmFja2VyX2FjdGl2ZTogcUVsKCdhY3RpdmUgLm1lbnUtbGlzdC1iYWNrZXInLCAwKSxcclxuICAgIHNlY3Rpb25fYmxvY2s6IHFFbCgnc2VjdGlvbi1ibG9jay1jb250YWluZXInLCAwKSxcclxuICAgIHNob3J0X3Byb2plY3Q6IHFFbCgnc2hvcnQtcHJvamVjdC1jb250YWluZXInLCAwKVxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b3BMYXlvdmVyRWxlbWVudHMoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHN2ZzogcUVsKCd0b3AtbGF5b3Zlci1sb2dvIHN2ZycsIDApLFxyXG4gICAgdGV4dDogcUVsKCd0b3AtbG9hZGluZycsIDApLFxyXG4gICAgcnVubmVyOiBxRWwoJ3RvcC1ydW5uZXInLCAwKSxcclxuICAgIHRvcDogcUVsKCd0b3AtbGF5b3ZlcicsIDApLFxyXG4gICAgY29udGFpbmVyOiBxRWwoJ2NvbnRhaW5lcicsIDApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdFJlc2l6ZUVsKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBpbWdfZGVzYzogcUVsKCdwcm9qZWN0LWltZy1kZXNjJywgMSksXHJcbiAgICBwcm9qZWN0X2ltZzogcUVsKCdwcm9qZWN0LWltYWdlJywgMSksXHJcbiAgICBpbWdfYmFja2VyOiBxRWwoJ2ltZy1iYWNrZXInLCAxKSxcclxuICAgIHByb2plY3RfdGV4dF9kZXNjOiBxRWwoJ3Byb2plY3QtdGV4dC1kZXNjJywgMSksXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaG92ZXJQcm9qZWN0RWwgKGVsKSB7XHJcbiAgbGV0IHBhcmVudCA9IGVsLmNsb3Nlc3QoJy5wcm9qZWN0cy13cmFwcGVyJylcclxuICByZXR1cm4ge1xyXG4gICAgaW1nIDogcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWltZycpLFxyXG4gICAgaW1nX2JhY2tlciA6IHBhcmVudC5xdWVyeVNlbGVjdG9yKCcuaW1nLWJhY2tlcicpLFxyXG4gICAgdGl0bGUgOiBwYXJlbnQucXVlcnlTZWxlY3RvcignLnAtcmV2ZWFsJyksXHJcbiAgICBkZXNjIDogcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5wLWRlc2MtY29udGVudCcpLFxyXG4gICAgYnV0dG9uIDogcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24td3JhcHBlcicpXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7ZmluZERhdGF9IGZyb20gJy4uL2RhdGEvaW5kZXgnXHJcblxyXG4vLyBleHBvcnQgUGFnZURhdGEgZm9yIGNvbnRleHRhcGkgYWNjZXNzXHJcbmV4cG9ydCBjb25zdCBQYWdlRGF0YSA9IGNyZWF0ZUNvbnRleHQoKVxyXG5cclxuLy8gdGhlIHByb3BzIGlzIHJlY2VpdmVkIGFuZCBoYXMgYSB2YWx1ZSB0aGF0IHJlZmVyZW5jZXNcclxuLy8gdGhlIHBhZ2UgZGF0YSBzZXRzIGFuZCByZXR1cm5zIGRhdGEgZm9yIHRoYXQgcGFnZVxyXG5leHBvcnQgZnVuY3Rpb24gUGFnZURhdGFDb250ZXh0IChwcm9wcykge1xyXG4gIGxldCBkYXRhID0gc29ydFByb3BzKHByb3BzKVxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZURhdGEuUHJvdmlkZXIgdmFsdWU9e2RhdGF9PlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L1BhZ2VEYXRhLlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuLy8gdGhpcyBmdW5jdGlvbiB3aWxsIHNvcnQgdGhlIGRhdGEgcHJvdmlkZWQgaW4gdGhlIHByb3BzXHJcbi8vIGl0IHdpbGwgcmV0dXJuIGEgc2V0IG9mIGRhdGEgZnJvbSB0aGUgZGF0YSBwYWdlXHJcbmZ1bmN0aW9uIHNvcnRQcm9wcyAocHJvcHMpIHtcclxuICBpZihwcm9wcy5wYWdlc2V0cykge1xyXG4gICAgcmV0dXJuIGZpbmREYXRhKHByb3BzLnBhZ2VzZXRzKVxyXG4gIH0gZWxzZSBpZihwcm9wcy5wcm9qZWN0c2V0cyl7XHJcbiAgICBsZXQgZGF0YSA9IGZpbmREYXRhKCdwcm9qZWN0bGlzdHMnKS5saXN0b2Zwcm9qZWN0cy5maWx0ZXIocHJvaiA9PiB7XHJcbiAgICAgIHJldHVybiBwcm9qLnRpdGxlID09PSBwcm9wcy5wcm9qZWN0c2V0c1xyXG4gICAgfSlcclxuICAgIHJldHVybiB7Li4uZGF0YVswXSwgLi4uZmluZERhdGEoJ3NvY2lhbHMnKX1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBjcmVhdGVDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtzZXRUcmFuc2l0aW9uU3RhdGV9IGZyb20gJy4uL3BhZ2VhbmltYXRpb25zL21vdGlvbi9jb21tb24nXHJcblxyXG4vLyBnbG9iYWwgc3RhdGUgY29udGV4dCByb3V0ZVxyXG5leHBvcnQgY29uc3QgU3RhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXHJcblxyXG4vLyBzdGF0ZSBwcm92ZGVyXHJcbmV4cG9ydCBjbGFzcyBTdGF0ZVByb3ZpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBcclxuICAvLyBpbml0aWFsXHJcbiAgc3RhdGUgPSB7XHJcbiAgICBhY3RpdmVSb3V0ZTogJ2hvbWUnLFxyXG4gICAgbWVudUlzT3BlbjogZmFsc2UsXHJcbiAgICBtZW51SXNBbmltYXRpbmc6IGZhbHNlLFxyXG4gICAgaXNUcmFuc2l0aW9uaW5nOiAnaW5pdGlhbCcsXHJcbiAgICBleGl0TW9kZTogZmFsc2UsXHJcbiAgICBhbmltYXRpb246ICdpbml0aWFsJyxcclxuICB9XHJcblxyXG4gIC8vIGZ1bmN0aW9uIHRoYXQgd2lsbCBzZXQgdXBkYXRlIHRoZSBzdGF0ZVxyXG4gIHNldEFwcGxpY2F0aW9uU3RhdGUgPSAobmV3U3RhdGUpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAuLi5uZXdTdGF0ZVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vIHRoaXMgZnVuY3Rpb24gd2lsbCB1cGRhdGUgdGhlIHN0YXRlIGJhc2VkIGZyb20gXHJcbiAgLy8gd2hlcmUgdGhlIGJ1dHRvbiBpcyBjbGlja2VkXHJcbiAgc2V0VHJhbnNpdGlvblN0YXRlID0gKGZyb20pID0+IHtcclxuICAgIGlmKGZyb20gPT09ICd0b3AnKXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgbWVudUlzT3BlbjogIXRoaXMuc3RhdGUubWVudUlzT3BlbixcclxuICAgICAgICBleGl0TW9kZTogbW9kZShmcm9tKSxcclxuICAgICAgICBpc1RyYW5zaXRpb25pbmc6IHNldFRyYW5zaXRpb25TdGF0ZSh0aGlzLnN0YXRlLmlzVHJhbnNpdGlvbmluZyksXHJcbiAgICAgICAgYW5pbWF0aW9uOiBhbmltbW9kZShmcm9tKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgaWYoZnJvbSA9PT0gJ2JvdHRvbScpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZXhpdE1vZGU6IG1vZGUoZnJvbSksXHJcbiAgICAgICAgaXNUcmFuc2l0aW9uaW5nOiBzZXRUcmFuc2l0aW9uU3RhdGUodGhpcy5zdGF0ZS5pc1RyYW5zaXRpb25pbmcpLFxyXG4gICAgICAgIGFuaW1hdGlvbjogYW5pbW1vZGUoZnJvbSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGZ1bmN0aW9uIHRvIGdldCB0aGUgY3VycmVudCByb3V0ZVxyXG4gIHNldEFjdGl2ZVJvdXRlID0gKHJvdXRlKSA9PiB7XHJcbiAgICAvLyBpZiB0aGUgY3VycmVudCByb3V0ZSBkb2VzIG5vdCBtYXRjaCB0byB0aGUgb2xkIHJvdXRlXHJcbiAgICAvLyB0aGVuIHVwZGF0ZSB0aGUgYWN0aXZlIHJvdXRlIHN0YXRlXHJcbiAgICBpZihyb3V0ZSAhPSB0aGlzLnN0YXRlLmFjdGl2ZVJvdXRlKXtcclxuICAgICAgdGhpcy5zZXRBcHBsaWNhdGlvblN0YXRlKHsgYWN0aXZlUm91dGU6IHJvdXRlIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKXtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxTdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcclxuICAgICAgICBzdGF0ZTogdGhpcy5zdGF0ZSxcclxuICAgICAgICBzZXRTdGF0ZTogdGhpcy5zZXRBcHBsaWNhdGlvblN0YXRlLFxyXG4gICAgICAgIHNldEFjdGl2ZVJvdXRlOiB0aGlzLnNldEFjdGl2ZVJvdXRlLFxyXG4gICAgICAgIHNldFRyYW5zaXRpb25TdGF0ZTogdGhpcy5zZXRUcmFuc2l0aW9uU3RhdGVcclxuICAgICAgfX0+XHJcbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgIDwvU3RhdGVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuLy8gdGhpcyBmdW5jdGlvbiBjaGVja3MgaWYgdGhlIG1lbnUgYnV0dG9uIGlzIGNsaWNrXHJcbi8vIGFuZCB3aWxsIHJldHVybiBhIHN0cmluZyB0aGF0IHdpbGwgYW5pbWF0ZSBmcm9tIHRoZSB0b3BcclxuY29uc3QgbW9kZSA9IChmcm9tKSA9PiB7XHJcbiAgcmV0dXJuIGZyb20gPT09ICd0b3AnID8gJ3RvcEV4aXQnIDogJ2JvdHRvbUV4aXQnXHJcbn1cclxuXHJcbi8vIHRoaXMgZnVuY3Rpb24gY2hlY2tzIGlmIGFueSBvZiB0aGUgYnV0dG9uIGxpbmtzIFxyXG4vLyBpbiB0aGUgYm90dG9tIGlzIGNsaWNrIHRoYXQgd2lsbCBydW4gdGhlIHRyYW5zaXRpb25cclxuY29uc3QgYW5pbW1vZGUgPSAoZnJvbSkgPT4ge1xyXG4gIHJldHVybiBmcm9tID09PSAnYm90dG9tJyA/ICd0b3BBbmltYXRpb24nIDogJ2JvdHRvbUFuaW1hdGlvbidcclxufSIsImltcG9ydCBob21lIGZyb20gJy4vcGFnZWRhdGEvaG9tZS5qc29uJ1xyXG5pbXBvcnQgYWJvdXQgZnJvbSAnLi9wYWdlZGF0YS9hYm91dC5qc29uJ1xyXG5pbXBvcnQgcHJvamVjdHMgZnJvbSAnLi9wYWdlZGF0YS9wcm9qZWN0cy5qc29uJ1xyXG5pbXBvcnQgY29udGFjdHMgZnJvbSAnLi9wYWdlZGF0YS9jb250YWN0Lmpzb24nXHJcbmltcG9ydCBjcmVkZW50aWFscyBmcm9tICcuL3BhZ2VkYXRhL2NyZWRlbnRpYWxzLmpzb24nXHJcbmltcG9ydCBwcml2YWN5IGZyb20gJy4vcGFnZWRhdGEvcHJpdmFjeS5qc29uJ1xyXG5pbXBvcnQgbm90Zm91bmQgZnJvbSAnLi9wYWdlZGF0YS9ub3RGb3VuZC5qc29uJ1xyXG5pbXBvcnQgbGlzdG9mcHJvamVjdHMgZnJvbSAnLi9wYWdlZGF0YS9saXN0T2ZQcm9qZWN0cy5qc29uJ1xyXG5pbXBvcnQgc29jaWFscyBmcm9tICcuL3BhZ2VkYXRhL3NvY2lhbHMuanNvbidcclxuXHJcbmNvbnN0IHMgPSAobGlzdHMpID0+IHtcclxuICByZXR1cm4gKCBcclxuICAgIGxpc3RzLmxpc3RvZnByb2plY3RzLmZpbHRlcigobGlzdCwgaSk9PntcclxuICAgICAgcmV0dXJuIGkgPCA0XHJcbiAgICB9KVxyXG4gIClcclxufVxyXG5cclxuLy8gdGhpcyBmdW5jdGlvbiB3aWxsIHJldHVybiB0aGUganNvbiBmaWxlIHdoZW5ldmVyIFxyXG4vLyB0aGUgcm91dGUgc3RyaW5nIG1hdGNoZXMgaXRzIHZhbHVlLlxyXG4vLyB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBldmVyeSBhZ2UgaW5pdGlhbCBnZXQgcHJvcHMuXHJcbmV4cG9ydCBjb25zdCBmaW5kRGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgc3dpdGNoKGRhdGEpIHtcclxuICAgIGNhc2UgKCdob21lJyk6IHJldHVybiB7Li4uaG9tZSwgbGlzdG9mcHJvamVjdHM6IHMobGlzdG9mcHJvamVjdHMpLCAuLi5zb2NpYWxzfTtcclxuICAgIGNhc2UgKCdhYm91dCcpOiByZXR1cm4gey4uLmFib3V0LCAuLi5zb2NpYWxzfVxyXG4gICAgY2FzZSAoJ3Byb2plY3RzJyk6IHJldHVybiB7Li4ucHJvamVjdHMsIC4uLmxpc3RvZnByb2plY3RzLCAuLi5zb2NpYWxzfVxyXG4gICAgY2FzZSAoJ2NvbnRhY3RzJyk6IHJldHVybiB7Li4uY29udGFjdHMsIC4uLnNvY2lhbHN9XHJcbiAgICBjYXNlICgncHJpdmFjeScpOiByZXR1cm4gey4uLnByaXZhY3ksIC4uLnNvY2lhbHN9XHJcbiAgICBjYXNlICgnbm90Zm91bmQnKTogcmV0dXJuIHsuLi5ub3Rmb3VuZCwgLi4uc29jaWFsc31cclxuICAgIGNhc2UgKCdjcmVkZW50aWFscycpOiByZXR1cm4gey4uLmNyZWRlbnRpYWxzLCAuLi5zb2NpYWxzfVxyXG4gICAgY2FzZSAoJ3Byb2plY3RsaXN0cycpOiByZXR1cm4gey4uLmxpc3RvZnByb2plY3RzLCAuLi5zb2NpYWxzfVxyXG4gICAgY2FzZSAoJ3NvY2lhbHMnKTogcmV0dXJuIHNvY2lhbHNcclxuICAgIGRlZmF1bHQ6IHJldHVybiBudWxsXHJcbiAgfVxyXG59XHJcbiIsIlxyXG4vLyB0aGlzIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIGEgc3RyaWluZyB0aGF0IHdpbGxcclxuLy8gZGV0ZXJtaW5lIG9mIHRoZSBjdXJyZW50IHN0YXRlIGhhcyB0byBiZSBpbml0aWFsIG9yIGluaXRpYWwgdHdvLlxyXG4vLyB0aGUgc3RyaW5nIHdpbGwgYmUgdXNlZCBhcyBhbiBpbml0aWFsIHZhbHVlIGZvciB0aGUgZnJhbWVyIG1vdGlvblxyXG4vLyBpbiBhbmltYXRpbmcgdGhlIHRyYW5zaXRpb25cclxuZXhwb3J0IGNvbnN0IHNldFRyYW5zaXRpb25TdGF0ZSA9IChzdGF0ZSkgPT4ge1xyXG4gIGlmIChzdGF0ZSA9PT0gJ2luaXRpYWxPbmUnKSByZXR1cm4gJ2luaXRpYWxUd28nXHJcbiAgaWYgKHN0YXRlID09PSAnaW5pdGlhbFR3bycpIHJldHVybiAnaW5pdGlhbE9uZSdcclxuICBpZiAoc3RhdGUgIT09ICdpbml0aWFsT25lJyB8fCBzdGF0ZSAhPT0gJ2luaXRpYWxUd28nKSB7XHJcbiAgICByZXR1cm4gJ2luaXRpYWxPbmUnXHJcbiAgfVxyXG59IiwiXHJcblxyXG5leHBvcnQgY29uc3QgdmFyaWFudHMgPSB7XHJcbiAgaW5pdGlhbDoge1xyXG4gICAgLy8gb3BhY2l0eTogMSxcclxuICB9LFxyXG4gIGVudGVyOiB7XHJcbiAgICAvLyBvcGFjaXR5OiAxLFxyXG4gICAgLy8gdHJhbnNpdGlvbjoge1xyXG4gICAgLy8gICBkdXJhdGlvbjogMC4yNSxcclxuICAgIC8vIH0sXHJcbiAgfSxcclxuICB0b3BFeGl0OiB7XHJcbiAgICBvcGFjaXR5OiAxLFxyXG4gICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICBkZWxheTogLjUsXHJcbiAgICAgIC8vIGR1cmF0aW9uOiA1XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYm90dG9tRXhpdDoge1xyXG4gICAgb3BhY2l0eTogMSxcclxuICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgLy8gZGVsYXk6IC4zXHJcbiAgICAgIGR1cmF0aW9uOiAuM1xyXG4gICAgfSxcclxuICB9XHJcbn0iLCJcclxubGV0IGVhc2luZyA9IFswLjYsIDAuMDUsIDAuMDEsIDAuOTldO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ29BbmltID0ge1xyXG4gIGluaXRpYWw6IHtcclxuICAgIG9wYWNpdHk6IDBcclxuICB9LFxyXG4gIGluaXRBbmltYXRlOiB7XHJcbiAgICBvcGFjaXR5OiAwXHJcbiAgfSxcclxuICBpbml0aWFsT25lOntcclxuICAgIG9wYWNpdHk6IDAuNyBcclxuICB9LFxyXG4gIGluaXRpYWxUd286IHtcclxuICAgIG9wYWNpdHk6IDAuN1xyXG4gIH0sXHJcbiAgdG9wQW5pbWF0aW9uOiB7XHJcbiAgICBvcGFjaXR5OiAwLFxyXG4gICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICBkZWxheTogMC4zNSxcclxuICAgICAgZHVyYXRpb246IC4xNSxcclxuICAgIH1cclxuICB9LFxyXG4gIGJvdHRvbUFuaW1hdGlvbjoge1xyXG4gICAgb3BhY2l0eTogMCxcclxuICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgZGVsYXk6IDAuMzUsXHJcbiAgICAgIGR1cmF0aW9uOiAuMjUsXHJcbiAgICB9XHJcbiAgfSxcclxuICB0b3BFeGl0OiB7XHJcbiAgICBvcGFjaXR5OiAwLjcsIFxyXG4gICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICBkZWxheTogLjcsXHJcbiAgICAgIGR1cmF0aW9uOiAuMSxcclxuICAgICAgZWFzZTogZWFzaW5nXHJcbiAgICB9XHJcbiAgfSxcclxuICBib3R0b21FeGl0OiB7XHJcbiAgICBvcGFjaXR5OiAwLjcsIFxyXG4gICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICBkZWxheTogLjEsXHJcbiAgICAgIGR1cmF0aW9uOiAuMDUsXHJcbiAgICAgIGVhc2U6IGVhc2luZ1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB0b3BBbmltID0ge1xyXG4gIGluaXRpYWw6IHtcclxuICAgIHdpZHRoOiAnMCUnLFxyXG4gICAgcmlnaHQ6IDBcclxuICB9LFxyXG4gIGluaXRBbmltYXRlOiB7XHJcbiAgICB3aWR0aDogJzAlJyxcclxuICB9LFxyXG4gIGluaXRpYWxPbmU6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBsZWZ0OiAwXHJcbiAgfSxcclxuICBpbml0aWFsVHdvOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgcmlnaHQ6IDBcclxuICB9LFxyXG4gIHRvcEFuaW1hdGlvbjoge1xyXG4gICAgd2lkdGg6ICcwJScsXHJcbiAgICBmbG9hdDogJ3JpZ2h0JyxcclxuICAgIC8vIHJpZ2h0OiAwLFxyXG4gICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICBkZWxheTogMC4yLFxyXG4gICAgICBkdXJhdGlvbjogLjMsXHJcbiAgICAgIGVhc2U6IGVhc2luZ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYm90dG9tQW5pbWF0aW9uOiB7XHJcbiAgICB3aWR0aDogJzAlJyxcclxuICAgIGZsb2F0OiAncmlnaHQnLFxyXG4gICAgLy8gcmlnaHQ6IDAsXHJcbiAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgIGRlbGF5OiAuMixcclxuICAgICAgZHVyYXRpb246IC4zLFxyXG4gICAgICBlYXNlOiBlYXNpbmdcclxuICAgIH1cclxuICB9LFxyXG4gIHRvcEV4aXQ6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICBkZWxheTogMC44LFxyXG4gICAgICBkdXJhdGlvbjogLjQsXHJcbiAgICAgIGVhc2U6IGVhc2luZ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYm90dG9tRXhpdDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgIC8vIGRlbGF5OiAsXHJcbiAgICAgIGR1cmF0aW9uOiAuNCxcclxuICAgICAgZWFzZTogZWFzaW5nXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBhbmltZSBmcm9tICdhbmltZWpzJ1xyXG5pbXBvcnQge21lbnVDbGlja0VsZW1lbnRzfSBmcm9tICcuLi8uLi9jb21tb24vZWxlbWVudFNvcnRlcidcclxuXHJcbi8vIHRoaXMgZnVuY3Rpb24gaXMgZm9yIHRoZSBkYXJrIGdyZWVuIG1lbnUgYmFja2dyb3VuZFxyXG4vLyB0aGlzIHdpbGwgcnVuIHdoZW4gdGhlIHVzZSBjbGlja3MgdGhlIG1lbnUgaWNvblxyXG5leHBvcnQgZnVuY3Rpb24gb3Blbk1lbnUgKCkge1xyXG4gIGNvbnN0IGVsID0gbWVudUNsaWNrRWxlbWVudHMoKVxyXG4gICAgXHJcbiAgZWwuY29udGFpbmVyLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcclxuICBlbC5tZW51X2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ICA9ICdibG9jaydcclxuICBlbC5zb2NpYWxfbmF2aWNvbnMuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoMTAwJSknXHJcbiAgZWwuY29weXJpZ2h0X3J1bm5lci5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgxMDAlKSdcclxuXHJcbiAgc2V0RGlzcGxheShlbC5zZWN0aW9uX2Jsb2NrLCAnbm9uZScpXHJcbiAgc2V0RGlzcGxheShlbC5zaG9ydF9wcm9qZWN0LCAnbm9uZScpXHJcblxyXG5cclxuICBcclxuICBpZihlbC50ZXh0X2FjdGl2ZSAmJiBlbC5iYWNrZXJfYWN0aXZlKXtcclxuICAgIGVsLmJhY2tlcl9hY3RpdmUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoLTE1cHgpJ1xyXG4gICAgZWwudGV4dF9hY3RpdmUuc3R5bGUuY29sb3IgPSAnI0M2QzRBRidcclxuICAgIGVsLmJhY2tlcl9hY3RpdmUuc3R5bGUuY29sb3IgPSAnIzI2NzU3MidcclxuICB9XHJcblxyXG4gIGZvcihsZXQgeD0wOyB4PDQ7IHgrKyl7XHJcbiAgICBlbC5tZW51X2xpc3RfY29udGFpbmVyW3hdLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKDEwMCUpJ1xyXG4gIH1cclxuXHJcbiAgLy8gcnVuIHRoZSB0aGUgZGFyayBncmVlbiBiYWNrZ3JvdW5kXHJcbiAgYW5pbWUoe1xyXG4gICAgdGFyZ2V0czogZWwubWVudV9ydW5uZXJzLFxyXG4gICAgZHVyYXRpb246IDQwMCxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBlYXNpbmc6ICdlYXNlSW5PdXRRdWFkJyxcclxuICAgIGRlbGF5OiAoZWwsIGkpID0+IHsgcmV0dXJuIGkgKiAxNjAgfSxcclxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoYW5pbSkge1xyXG4gICAgICBzaG93KGVsKVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8vIHRoaXMgd2lsbCBzaG93IHRoZSBvdGhlciBlbGVtZW50IGZvciBtZW51IHBhZ2UuXHJcbi8vIHRoZXNlIGVsZW1lbnRzIGFyZSB0aGUgc29jaWFsIGljb25zLCBzcXVhcmUgaW1hZ2UsIHByaXZhY3lcclxuZnVuY3Rpb24gc2hvdyAoZWwpIHtcclxuICBhbmltZSh7XHJcbiAgICB0YXJnZXRzOiBlbC5tZW51X2xpc3RfY29udGFpbmVyLFxyXG4gICAgb3BhY2l0eTogMSxcclxuICAgIGVhc2luZzogJ2Vhc2VPdXRDdWJpYycsXHJcbiAgICBkdXJhdGlvbjogNDUwLFxyXG4gICAgdHJhbnNsYXRlWTogJzAlJyxcclxuICAgIGRlbGF5OiAoZWwsIGkpID0+IHsgcmV0dXJuIGkgKiAxMjAgfVxyXG4gIH0pXHJcbiAgYW5pbWUoe1xyXG4gICAgdGFyZ2V0czogW2VsLnNvY2lhbF9uYXZpY29ucyAsZWwuY29weXJpZ2h0X3J1bm5lcl0sXHJcbiAgICBlYXNpbmc6ICdlYXNlT3V0Q3ViaWMnLFxyXG4gICAgb3BhY2l0eTogMSxcclxuICAgIGR1cmF0aW9uOiA0NTAsXHJcbiAgICB0cmFuc2xhdGVZOiAnMCUnLFxyXG4gIH0pXHJcbiAgYW5pbWUoe1xyXG4gICAgdGFyZ2V0czogZWwuc3F1YXJlX2ltZyxcclxuICAgIGVhc2luZzogJ2xpbmVhcicsXHJcbiAgICBkdXJhdGlvbjogNDUwLFxyXG4gICAgb3BhY2l0eTogMSxcclxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoYW5pbSkge1xyXG4gICAgICBlbC5yaWdodF9pY29ucy5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJ1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8vIHRoaXMgZnVuY3Rpb24gaXMgZm9yIHRoZSBtZW51IGl0ZW0uIHRoaXMgd2lsbCBcclxuLy8gY2xvc2UgdGhlIG1lbnUgd2hlbiB0aGUgdXNlciBjbGlja3MgYW55IG9mIHRoZSBpdGVtXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9zZU1lbnUgKGNsb3NlQ29udGFpbmVyKSB7XHJcbiAgY29uc3QgZWwgPSBtZW51Q2xpY2tFbGVtZW50cygpXHJcbiAgZWwucmlnaHRfaWNvbnMuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xyXG5cclxuICBsZXQgdGwgPSBhbmltZS50aW1lbGluZSh7ZWFzaW5nOiAnbGluZWFyJ30pXHJcblxyXG4gIHRsLmFkZCh7XHJcbiAgICB0YXJnZXRzOiBbZWwuc29jaWFsX25hdmljb25zLCBlbC5jb3B5cmlnaHRfcnVubmVyLCBlbC5zcXVhcmVfaW1nLCBlbC5tZW51X2xpc3RfY29udGFpbmVyXSxcclxuICAgIGR1cmF0aW9uOiA0MDAsXHJcbiAgICBvcGFjaXR5OiAwLFxyXG4gIH0pICAgIFxyXG4gIC5hZGQoe1xyXG4gICAgdGFyZ2V0czogZWwubWVudV9ydW5uZXJzLFxyXG4gICAgZHVyYXRpb246IDI3NSxcclxuICAgIHdpZHRoOiAnMCUnLFxyXG4gICAgZGVsYXk6IChlbCwgaSkgPT4geyByZXR1cm4gaSAqIDEyMCB9LFxyXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIChhbmltKSB7XHJcbiAgICAgIGVsLm1lbnVfY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgaWYoY2xvc2VDb250YWluZXIpIHtcclxuICAgICAgICBlbC5jb250YWluZXIuc3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSdcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGVsLnRleHRfYWN0aXZlICYmIGVsLmJhY2tlcl9hY3RpdmUpIHtcclxuICAgICAgICBlbC50ZXh0X2FjdGl2ZS5zdHlsZS5jb2xvciA9ICcjMkM2NjY0J1xyXG4gICAgICAgIGVsLmJhY2tlcl9hY3RpdmUuc3R5bGUuY29sb3IgPSAnIzBDNUQ1QSdcclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0RGlzcGxheShlbC5zZWN0aW9uX2Jsb2NrLCAnYmxvY2snKVxyXG4gICAgICBzZXREaXNwbGF5KGVsLnNob3J0X3Byb2plY3QsICdibG9jaycpXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNldERpc3BsYXkgKGVsLCBkaXNwbGF5KSB7XHJcbiAgaWYoZWwpIHtcclxuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5XHJcbiAgfVxyXG59IiwiaW1wb3J0IHtuYXZIb3ZlckVsZW1lbnRzfSBmcm9tICcuLi8uLi9jb21tb24vZWxlbWVudFNvcnRlcidcclxuaW1wb3J0IGFuaW1lIGZyb20gJ2FuaW1lanMnXHJcblxyXG4vLyBmdW5jdGlvbiB0byBydW4gd2hlbiBtb3VzZSBlbnRlciBvbiBtZW51IGFcclxuZXhwb3J0IGZ1bmN0aW9uIG1vdXNlRW50ZXIgKGNvbG9yTW9kZXMsIGV2ZW50KSB7XHJcbiAgY29uc3QgZWwgPSBuYXZIb3ZlckVsZW1lbnRzKClcclxuXHJcbiAgbGV0IGZyb250O1xyXG4gIGlmKGV2ZW50ID09PSAnY2xvc2UnKSBmcm9udCA9IGVsLmZyb250XHJcbiAgaWYoZXZlbnQgPT09ICdvcGVuJykgZnJvbnQgPSBlbC5jbG9zZV9wYXRoc1xyXG4gIGFuaW1lKHtcclxuICAgIHRhcmdldHM6IGZyb250LFxyXG4gICAgY29sb3I6IGNvbG9yTW9kZXMuYmFja2dyb3VuZCxcclxuICAgIGZpbGw6IGNvbG9yTW9kZXMuYmFja2dyb3VuZCxcclxuICAgIGR1cmF0aW9uOiAyMDAsXHJcbiAgICBlYXNpbmc6ICdlYXNlSW5RdWFkJyxcclxuICAgIGJlZ2luOiBmdW5jdGlvbiAoYW5pbSkge1xyXG4gICAgICBlbC5taWRkbGUuc3R5bGUud2lkdGggPSAwXHJcbiAgICAgIGVsLm1pZGRsZS5zdHlsZS5oZWlnaHQgPSAwXHJcbiAgICAgIGVsLm1pZGRsZS5zdHlsZS5vcGFjaXR5ID0gMVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgYW5pbWUoe1xyXG4gICAgdGFyZ2V0czogZWwuYmFjayxcclxuICAgIGJhY2tncm91bmQ6IGNvbG9yTW9kZXMuZm9yZWdyb3VuZCxcclxuICAgIGR1cmF0aW9uOiAxNTAsXHJcbiAgICB3aWR0aDogJzkwJScsXHJcbiAgICBoZWlnaHQ6ICc5MCUnLFxyXG4gICAgZWFzaW5nOiAnZWFzZU91dFNpbmUnXHJcbiAgfSlcclxufVxyXG5cclxuLy8gZnVuY3Rpb24gdG8gcnVuIHdoZW4gbW91c2UgbW92ZXMgb3V0IG9mIHRoZSBtZW51IGFyZWFcclxuZXhwb3J0IGZ1bmN0aW9uIG1vdXNlT3V0IChjb2xvck1vZGVzLCBldmVudCkge1xyXG4gIGNvbnN0IGVsID0gbmF2SG92ZXJFbGVtZW50cygpXHJcbiAgbGV0IGZyb250O1xyXG4gIGlmIChldmVudCA9PT0gJ2Nsb3NlJykgZnJvbnQgPSBlbC5mcm9udFxyXG4gIGlmIChldmVudCA9PT0gJ29wZW4nKSBmcm9udCA9IGVsLmNsb3NlX3BhdGhzXHJcbiAgXHJcbiAgYW5pbWUoe1xyXG4gICAgdGFyZ2V0czogZnJvbnQsXHJcbiAgICBjb2xvcjogY29sb3JNb2Rlcy5mb3JlZ3JvdW5kLFxyXG4gICAgZmlsbDogY29sb3JNb2Rlcy5mb3JlZ3JvdW5kLFxyXG4gICAgZHVyYXRpb246IDIwMCxcclxuICAgIGVhc2luZzogJ2Vhc2VJblF1YWQnXHJcbiAgfSlcclxuICBhbmltZSh7XHJcbiAgICB0YXJnZXRzOiBlbC5taWRkbGUsXHJcbiAgICBiYWNrZ3JvdW5kOiBjb2xvck1vZGVzLmJhY2tncm91bmQsXHJcbiAgICBkdXJhdGlvbjogMjAwLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgZWFzaW5nOiAnZWFzZUluUXVhZCcsXHJcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gKGFuaW0pIHtcclxuICAgICAgZWwuYmFjay5zdHlsZS53aWR0aCA9IDBcclxuICAgICAgZWwuYmFjay5zdHlsZS5oZWlnaHQgPSAwXHJcbiAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGVsLm1pZGRsZS5zdHlsZS5vcGFjaXR5ID0gMFxyXG4gICAgICB9LCA1MClcclxuICAgIH1cclxuICB9KVxyXG59IiwiaW1wb3J0IGFuaW1lIGZyb20gJ2FuaW1lanMnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbW91c2VFbnRlciAoZSwgZXZlbnQpIHtcclxuICBsZXQgcGFyZW50ID0gZS50YXJnZXQuY2xvc2VzdCgnLm1lbnUtbGlzdC1jb250YWluZXInKVxyXG4gIGxldCBiYWNrZXIgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignLm1lbnUtbGlzdC1iYWNrZXInKVxyXG5cclxuICBsZXQgZWxlbWVudFBhcmVudCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5saXN0LWZyb250JylcclxuICBcclxuICBpZighZWxlbWVudFBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKXtcclxuICAgIGlmKGV2ZW50ID09PSAnaG92ZXJJbicpe1xyXG4gICAgICBhbmltYXRlRm9udHMoYmFja2VyLCAnIzI2NzU3MicsIC0yMClcclxuICAgICAgYW5pbWF0ZUZvbnRzKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQsICcjQzZDNEFGJywgLTcpXHJcbiAgICAgIGFuaW1hdGVGb250cyhlLnRhcmdldCwgJyNDNkM0QUYnLCAtNylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFuaW1hdGVGb250cyhlLnRhcmdldCwgJyMyQzY2NjQnLCAtNSlcclxuICAgICAgYW5pbWF0ZUZvbnRzKGJhY2tlciwgJyMwQzVENUEnLCAtMjApXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbW91c2VPdXQoZSkge1xyXG4gIGxldCBlbGVtZW50UGFyZW50ID0gZS50YXJnZXQuY2xvc2VzdCgnLmxpc3QtZnJvbnQnKVxyXG4gIGxldCBwYXJlbnQgPSBlLnRhcmdldC5jbG9zZXN0KCcubWVudS1saXN0LWNvbnRhaW5lcicpXHJcbiAgbGV0IGJhY2tlciA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1saXN0LWJhY2tlcicpXHJcbiAgXHJcblxyXG4gIGlmKCFlbGVtZW50UGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpe1xyXG4gICAgLy8gbGV0IGIgPSBlbC5uZXh0RWxlbWVudFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQgXHJcbiAgICBhbmltYXRlRm9udHMoZS50YXJnZXQucGFyZW50RWxlbWVudCwgJyMyNjc1NzInLCAwKVxyXG4gICAgYW5pbWF0ZUZvbnRzKGUudGFyZ2V0LCAnIzI2NzU3MicsIDApXHJcbiAgICBhbmltYXRlRm9udHMoYmFja2VyLCAnIzBDNUQ1QScsIDApXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhbmltYXRlRm9udHMoZWwsIGNvbG9yLCB5KSB7XHJcbiAgYW5pbWUoe1xyXG4gICAgdGFyZ2V0czogZWwsXHJcbiAgICBkdXJhdGlvbjogMjAwLFxyXG4gICAgY29sb3I6IGNvbG9yLFxyXG4gICAgdHJhbnNsYXRlWTogYCR7eX1weGAsXHJcbiAgICBlYXNpbmc6ICdlYXNlSW5RdWFkJ1xyXG4gIH0pXHJcbn1cclxuIiwiaW1wb3J0IGFuaW1lIGZyb20gJ2FuaW1lanMnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmFkZU5hdmJhciAoKSB7XHJcbiAgY29uc3QgbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItY29udGFpbmVyJylcclxuICAgICAgXHJcbiAgbGV0IHRsID0gYW5pbWUudGltZWxpbmUoe1xyXG4gICAgZWFzaW5nOiAnZWFzZUluUXVhZCcsXHJcbiAgICBkdXJhdGlvbjogMjAwLFxyXG4gIH0pXHJcbiAgdGwuYWRkKHtcclxuICAgIHRhcmdldHM6IG4sXHJcbiAgICBvcGFjaXR5OiAwLFxyXG4gIH0pXHJcbiAgLmFkZCh7XHJcbiAgICBkdXJhdGlvbjogMjAwLFxyXG4gIH0pXHJcbiAgLmFkZCh7XHJcbiAgICB0YXJnZXRzOiBuLFxyXG4gICAgb3BhY2l0eTogMSxcclxuICB9KVxyXG59IiwiaW1wb3J0IHtob3ZlclByb2plY3RFbH0gZnJvbSAnLi4vLi4vY29tbW9uL2VsZW1lbnRTb3J0ZXInXHJcbmltcG9ydCBhbmltZSBmcm9tICdhbmltZWpzJ1xyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIHRvIHJ1biB3aGVuIG1vdXNlIGVudGVycyB0aGUgcHJvamVjdCBlbGVtZW50XHJcbmV4cG9ydCBmdW5jdGlvbiBtb3VzZUVudGVyKGUsIGNvbG9yKSB7XHJcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gIGNvbnN0IGVsID0gaG92ZXJQcm9qZWN0RWwoZS50YXJnZXQpXHJcbiAgaWYod2luZG93LmlubmVyV2lkdGggPiA4NjgpIHtcclxuICAgIGFuaW1lKHtcclxuICAgICAgdGFyZ2V0czogZWwuaW1nLFxyXG4gICAgICBzY2FsZTogMS4wNSxcclxuICAgICAgZHVyYXRpb246IDMwMCxcclxuICAgICAgZWFzaW5nOiAnZWFzZU91dFNpbmUnXHJcbiAgICB9KTtcclxuICAgIGFuaW1lKHtcclxuICAgICAgdGFyZ2V0czogZWwuaW1nX2JhY2tlcixcclxuICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgZHVyYXRpb246IDMwMCxcclxuICAgICAgZWFzaW5nOiAnZWFzZU91dFNpbmUnXHJcbiAgICB9KTtcclxuICAgIGFuaW1lKHtcclxuICAgICAgdGFyZ2V0czogW2VsLnRpdGxlLCBlbC5kZXNjXSxcclxuICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgdHJhbnNsYXRlWTogJzMwJScsXHJcbiAgICAgIGR1cmF0aW9uOiAzMDAsXHJcbiAgICAgIGVhc2luZzogJ2Vhc2VPdXRTaW5lJ1xyXG4gICAgfSk7XHJcbiAgICBhbmltZSh7XHJcbiAgICAgIHRhcmdldHM6IGVsLmJ1dHRvbixcclxuICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgYmFja2dyb3VuZDogY29sb3IsXHJcbiAgICAgIGR1cmF0aW9uOiAzMDAsXHJcbiAgICAgIGVhc2luZzogJ2Vhc2VPdXRTaW5lJ1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG4vLyBmdW5jdGlvbiB0byBydW4gdGhlbiBtb3VzZSBsZWF2ZXMgdGhlIHByb2plY3QgZWxlbWVudFxyXG5leHBvcnQgZnVuY3Rpb24gbW91c2VPdXQoZSkge1xyXG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICBjb25zdCBlbCA9IGhvdmVyUHJvamVjdEVsKGUudGFyZ2V0KVxyXG5cclxuICBpZih3aW5kb3cuaW5uZXJXaWR0aCA+IDg2OCkge1xyXG4gICAgYW5pbWUoe1xyXG4gICAgICB0YXJnZXRzOiBlbC5pbWcsXHJcbiAgICAgIHNjYWxlOiAxLFxyXG4gICAgICBkdXJhdGlvbjogMzAwLFxyXG4gICAgICBlYXNpbmc6ICdlYXNlT3V0U2luZSdcclxuICAgIH0pO1xyXG4gICAgYW5pbWUoe1xyXG4gICAgICB0YXJnZXRzOiBlbC5pbWdfYmFja2VyLFxyXG4gICAgICBvcGFjaXR5OiAwLjgsXHJcbiAgICAgIGR1cmF0aW9uOiAzMDAsXHJcbiAgICAgIGVhc2luZzogJ2Vhc2VPdXRTaW5lJ1xyXG4gICAgfSk7XHJcbiAgICBhbmltZSh7XHJcbiAgICAgIHRhcmdldHM6IFtlbC50aXRsZSwgZWwuZGVzY10sXHJcbiAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgIHRyYW5zbGF0ZVk6ICcwJScsXHJcbiAgICAgIGR1cmF0aW9uOiAzMDAsXHJcbiAgICAgIGVhc2luZzogJ2Vhc2VPdXRTaW5lJ1xyXG4gICAgfSk7XHJcbiAgICBhbmltZSh7XHJcbiAgICAgIHRhcmdldHM6IGVsLmJ1dHRvbixcclxuICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgZHVyYXRpb246IDMwMCxcclxuICAgICAgZWFzaW5nOiAnZWFzZU91dFNpbmUnXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIHRvIHJ1biBmb3IgcmVzaXppbmcgb3Igd2hlbiBwYWdlIGxvYWRzXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNpemUoKSB7XHJcbiAgcmVzaXplRWwoKVxyXG59XHJcblxyXG4vLyByZXNpemUgdGhlIGVsZW1lbnRzIGluIHRoZSBzaG9ydCBwcm9qZWN0IHBhZ2UuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNpemVFbCgpIHtcclxuICBjb25zdCBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RzLXdyYXBwZXInKVxyXG4gIGlmKHdpbmRvdy5pbm5lcldpZHRoIDw9IDg2OCl7XHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDM7IHgrKyl7XHJcbiAgICAgIGxldCBlbCA9IGhvdmVyUHJvamVjdEVsKHBbeF0pXHJcbiAgICAgIGVsLmltZ19iYWNrZXIuc3R5bGUub3BhY2l0eSA9IDBcclxuICAgICAgZWwuaW1nLnN0eWxlLm9wYWNpdHkgPSAxXHJcbiAgICAgIGVsLmJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gMVxyXG4gICAgICBlbC5idXR0b24uc3R5bGUuYmFja2dyb3VuZCA9ICdub25lJ1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RzLXdyYXBwZXInKVxyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCAzOyB4KyspIHtcclxuICAgICAgbGV0IGVsID0gaG92ZXJQcm9qZWN0RWwocFt4XSlcclxuICAgICAgLy8gZWwuaW1nX2JhY2tlci5zdHlsZS5vcGFjaXR5ID0gMC44XHJcbiAgICAgIC8vIGVsLmJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gMFxyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCBhbmltZSBmcm9tICdhbmltZWpzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNjcm9sbERvd24oKSB7XHJcbiAgY29uc3QgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKVxyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcclxuXHJcbiAgY29uc3QgbW92ZVRvID0gd2luZG93LmlubmVySGVpZ2h0XHJcblxyXG4gIC8vIHdlIG5lZWQgdGhlIGh0bWwgYW5kIHRoZSBib2R5IHRvIG1ha2UgdGhlIGFuaW1hdGlvbiBtb3JlIHNtb290aGVyXHJcbiAgYW5pbWUoe1xyXG4gICAgdGFyZ2V0czogW2h0bWwsIGJvZHldLFxyXG4gICAgc2Nyb2xsVG9wOiBtb3ZlVG8sXHJcbiAgICBkdXJhdGlvbjogMTUwMCxcclxuICAgIGVhc2luZzogJ2Vhc2VJbk91dFF1YWQnXHJcbiAgfSlcclxuXHJcbn0iLCJpbXBvcnQgYW5pbWUgZnJvbSAnYW5pbWVqcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzY3JvbGxBbmltYXRpb24oKSB7XHJcbiAgLy8gY29uc29sZS5sb2cocGFnZSlcclxuICBpZih3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OCkge1xyXG4gICAgLy8gc2xpZGVJbkVsZW1lbnRzT25TY3JvbGwod2FpdClcclxuICAgIHNsaWRlSW5BbmltYXRpb24oKVxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZSAoZnVuYywgd2FpdCkge1xyXG4gIGxldCB0aW1lb3V0O1xyXG5cclxuICByZXR1cm4gZnVuY3Rpb24gZXhlY3V0ZWRGdW5jdGlvbiguLi5hcmdzKSB7XHJcbiAgICBjb25zdCBsYXRlciA9ICgpID0+IHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgICBmdW5jKC4uLmFyZ3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XHJcbiAgfTtcclxufTtcclxuXHJcblxyXG4vLyBmdW5jdGlvbiB0aGF0IHdpbGwgZGVib3VuY2UgdGhlIHNjcm9sbCBldmVudCB0byBldmVyeVxyXG4vLyA3MG1zIHNvIHRvIGF2b2lkIHBlcmZvcm1hbmNlIGlzc3VlXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZSAoZnVuYywgd2FpdCA9IDEwMCwgaW1tZWRpYXRlID0gdHJ1ZSl7XHJcbi8vICAgbGV0IHRpbWVvdXQ7XHJcbi8vICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgbGV0IGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xyXG4vLyAgICAgbGV0IGxhdGVyID0gZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgICB0aW1lb3V0ID0gbnVsbDtcclxuLy8gICAgICAgaWYoIWltbWVkaWF0ZSkge1xyXG4vLyAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncylcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgbGV0IGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgdGltZW91dFxyXG4vLyAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4vLyAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpXHJcbi8vICAgICBpZihjYWxsTm93KSB7XHJcbi8vICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncylcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGZvciBzbGlkZSBhbmltYXRpb25cclxuZnVuY3Rpb24gc2xpZGVJbkFuaW1hdGlvbigpe1xyXG4gIGxldCBlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hvdycpXHJcblxyXG4gIGVscy5mb3JFYWNoKGVsID0+IHtcclxuICAgIC8vIGNvbnN0IHNsaWRlSW5BdCA9ICh3aW5kb3cuc2Nyb2xsWSArIHdpbmRvdy5pbm5lckhlaWdodCkgLSAoZWwuY2xpZW50SGVpZ2h0LzIpXHJcbiAgICBjb25zdCBzbGlkZUluQXQgPSAod2luZG93LnNjcm9sbFkgKyB3aW5kb3cuaW5uZXJIZWlnaHQpIC0gKDYwKVxyXG4gICAgY29uc3QgY2xpZW50SGVpZ2h0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgd2luZG93LnNjcm9sbFlcclxuXHJcbiAgICBjb25zdCBpc1Bhc3NlZCA9IHNsaWRlSW5BdCA+IGNsaWVudEhlaWdodFxyXG4gICAgY29uc3QgZWxJc05vdERvbmUgPSAhZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdkb25lJylcclxuICAgIGNvbnN0IGVsQ2hpbGRyZW4gPSBlbC5jaGlsZHJlblxyXG4gICAgY29uc3QgaXNQcm9qZWN0SW1hZ2UgPSBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3QtaW1hZ2UnKVxyXG4gICAgY29uc3QgaXNNZXNzYWdlQ29udCA9IGVsLmNsYXNzTGlzdC5jb250YWlucygnbWVzc2FnZS1jb250YWluZXInKVxyXG4gICAgXHJcbiAgICAgIGlmKGlzUGFzc2VkICYmIGVsSXNOb3REb25lKSB7XHJcbiAgICAgICAgcmVtb3ZlT3ZlcmxheShlbClcclxuICAgICAgICBpZihlbENoaWxkcmVuLmxlbmd0aCA9PT0gMil7XHJcbiAgICAgICAgICBzaG93U2xpZGVyKGVsQ2hpbGRyZW4pXHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoZWxDaGlsZHJlbi5sZW5ndGggPT09IDEpIHtcclxuXHJcbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGlzIGVsZW1lbnQgaGFzIGEgY2xhc3Mgb2YgcHJvamVjdC1pbWFnZVxyXG4gICAgICAgICAgaWYoaXNQcm9qZWN0SW1hZ2UpIHNldFRpbWVyKHNob3dPcGFjaXR5LCBlbENoaWxkcmVuWzBdLCBlbClcclxuXHJcbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGlzIGNsYXNzIGhhcyBhIG1lc3NhZ2UtY29udGFpbmVyXHJcbiAgICAgICAgICBpZihpc01lc3NhZ2VDb250KSB7XHJcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKVxyXG4gICAgICAgICAgICBzaG93T3BhY2l0eShlbENoaWxkcmVuWzBdKVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBlbGVtZW50IGRvZXMgbm90IGNvbnRhaW4gYm90aCB0aGUgY2xhc3MgbmFtZXNcclxuICAgICAgICAgIGlmKCFpc1Byb2plY3RJbWFnZSAmJiAhaXNNZXNzYWdlQ29udCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lcihzbGlkZVVwLCBlbENoaWxkcmVuWzBdLCBlbClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICB9KSAgXHJcbn0gIFxyXG5cclxuZnVuY3Rpb24gc2V0VGltZXIoZnVuYywgY2hpbGQsIGVsKSB7XHJcbiAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgZnVuYyhjaGlsZClcclxuICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKVxyXG4gIH0sIDYwMClcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVPdmVybGF5IChlbCl7XHJcbiAgY29uc3QgaGFzSGVhZGVyQ2xhc3MgPSBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2hlYWRlci1zb2NpYWwtY29udGFpbmVyJylcclxuICBjb25zdCBoYXNTY3JvbGxDbGFzcyA9IGVsLmNsYXNzTGlzdC5jb250YWlucygnc2Nyb2xsLWNvdmVyJylcclxuICBpZihoYXNIZWFkZXJDbGFzcyB8fCBoYXNTY3JvbGxDbGFzcyl7XHJcbiAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgIGVsLnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnXHJcbiAgICB9LCAxMjAwKVxyXG4gIH1cclxuICBcclxufVxyXG5cclxuLy8gYW5pbWF0aW9uIHRoYXQgd2lsbCBydW4gdGhlIHNsaWRlciBhbmQgd2UgYXJlIHVzaW5nIHRoZSBcclxuLy8gdGltZWxpbmUgYW5pbWF0aW9uIG1ha2UgYSBzbW9vdGggZWZmZWN0XHJcbmZ1bmN0aW9uIHNob3dTbGlkZXIgKGVsKSB7XHJcbiAgbGV0IHRsID0gYW5pbWUudGltZWxpbmUoe30pXHJcbiAgY29uc3QgcGFyZW50ID0gZWxbMV0uY2xvc2VzdCgnLnNob3cnKVxyXG4gIHBhcmVudC5jbGFzc0xpc3QuYWRkKCdkb25lJylcclxuICBcclxuICB0bC5hZGQoe1xyXG4gICAgdGFyZ2V0czogZWxbMV0sXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZWFzaW5nOiAgJ2Vhc2VJblNpbmUnLFxyXG4gICAgZHVyYXRpb246IDMwMCxcclxuICB9KVxyXG4gIC5hZGQoe1xyXG4gICAgdGFyZ2V0czogZWxbMV0sXHJcbiAgICBkdXJhdGlvbjogNDAwLFxyXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIChhbmltKSB7XHJcbiAgICAgIGVsWzFdLnN0eWxlLnJpZ2h0ID0gMFxyXG4gICAgfVxyXG4gIH0pXHJcbiAgLmFkZCh7XHJcbiAgICB0YXJnZXRzOiBlbFsxXSxcclxuICAgIHdpZHRoOiAnMCUnLFxyXG4gICAgZWFzaW5nOiAgJ2Vhc2VJblNpbmUnLFxyXG4gICAgZHVyYXRpb246IDMwMCxcclxuICAgIGJlZ2luOiBmdW5jdGlvbiAoYW5pbSkge1xyXG4gICAgICBzbGlkZVVwKGVsWzBdKVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG59XHJcblxyXG4vLyBmdW5jdGlvbiB0aGF0IHdpbGwgbWFrZSB0aGUgaW1hZ2Ugb3BhY2l0eSBmcm9tIFxyXG4vLyAwIHRvIDEgdG8gbWFrZSB0aGUgaW1hZ2UgdmlzaWJsZVxyXG5mdW5jdGlvbiBzaG93T3BhY2l0eShlbCkge1xyXG4gIC8vIGVsLnN0eWxlLm9wYWNpdHkgPSAwXHJcblxyXG4gIGFuaW1lKHtcclxuICAgIHRhcmdldHM6IGVsLFxyXG4gICAgb3BhY2l0eToge1xyXG4gICAgICBkdXJhdGlvbjogNTAwLFxyXG4gICAgICB2YWx1ZTogMSxcclxuICAgICAgZGVsYXk6IDIwMCxcclxuICAgICAgZWFzaW5nOiAnZWFzZUluU2luZSdcclxuICAgIH1cclxuICAgIFxyXG4gIH0pXHJcbn1cclxuXHJcbi8vIHRoaXMgd2lsbCBtYWtlIHRoZSB0ZXh0IG9yIHBhcmFncmFwaHMgdmlzaWJsZVxyXG4vLyB0aGlzIHNsaWRlIHVwIHRoZSB0ZXh0XHJcbmZ1bmN0aW9uIHNsaWRlVXAgKGVsKSB7XHJcbiAgbGV0IHRsID0gYW5pbWUudGltZWxpbmUoe30pXHJcbiAgZWwuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoNjBweCknXHJcblxyXG4gIHRsLmFkZCh7XHJcbiAgICB0YXJnZXRzOiBlbCxcclxuICAgIG9wYWNpdHk6IHtcclxuICAgICAgZHVyYXRpb246IDU1MCxcclxuICAgICAgdmFsdWU6IDEsXHJcbiAgICAgIGRlbGF5OiAyMDAsXHJcbiAgICAgIGVhc2luZzogJ2xpbmVhcidcclxuICAgIH0sXHJcbiAgICB0cmFuc2xhdGVZOiB7XHJcbiAgICAgIHZhbHVlOiAwLFxyXG4gICAgICBlYXNpbmc6ICdlYXNlT3V0RWxhc3RpYygxMCwgMiknLFxyXG4gICAgICBkdXJhdGlvbjogNzAwXHJcbiAgICB9LFxyXG4gIH0pXHJcbn1cclxuXHJcblxyXG4vLyBjYWxsIHRoZSBhbmltYXRpb24gZnVuY3Rpb24gd2hlbiB3ZSBhcmUgc2Nyb2xsaW5nIHRoZSBwYWdlXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBzbGlkZUluRWxlbWVudHNPblNjcm9sbCh3YWl0KSB7XHJcbi8vICAgZGVib3VuY2Uoc2xpZGVJbkFuaW1hdGlvbigpLCB3YWl0KVxyXG4vLyB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHt0b3BMYXlvdmVyRWxlbWVudHN9IGZyb20gJy4uLy4uL2NvbW1vbi9lbGVtZW50U29ydGVyJ1xyXG5pbXBvcnQgYW5pbWUgZnJvbSAnYW5pbWVqcydcclxuXHJcbi8vIGZ1bmN0aW9uIGZvciBpbnRybyBhbmltYXRpb25cclxuZXhwb3J0IGZ1bmN0aW9uIGludHJvQW5pbSAoaGFzU2Vzc2lvbikge1xyXG4gIGNvbnN0IGVsID0gdG9wTGF5b3ZlckVsZW1lbnRzKClcclxuXHJcbiAgLy8gaWYgaXQgaGFzIGEgc2Vzc2lvbiBubyBhbmltYXRpb24gdG8gcnVuXHJcbiAgaWYoaGFzU2Vzc2lvbiA9PT0gdHJ1ZSl7XHJcbiAgICBlbC50b3Auc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gIH0gXHJcblxyXG4gIC8vIGlmIGl0IGhhcyBubyBzZXNzaW9uIHRoZW4gd2Ugd2lsbCBydW4gdGhlIGFuaW1hdGlvblxyXG4gIGlmKGhhc1Nlc3Npb24gPT09IGZhbHNlKSB7XHJcbiAgICBlbC50b3Auc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICAgIGVsLmNvbnRhaW5lci5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXHJcbiAgICBlbC5zdmcuc3R5bGUub3BhY2l0eSA9IDBcclxuICAgIGVsLnRleHQuc3R5bGUub3BhY2l0eSA9IDBcclxuICAgIGVsLnRvcC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gICAgZWwucnVubmVyLnN0eWxlLmhlaWdodCA9ICcxMDB2aCdcclxuICAgIGVsLnJ1bm5lci5zdHlsZS53aWR0aCA9ICcxMDAlJ1xyXG4gICAgcnVuVG9wQW5pbWF0aW9uKGVsKVxyXG4gIH1cclxufVxyXG5cclxuLy8gZnVuY3Rpb24gdG8gcnVuIGlmIHRoZSBicm93c2VyIGhhcyBubyBzZXNzaW9uc1xyXG5mdW5jdGlvbiBydW5Ub3BBbmltYXRpb24gKGVsKSB7XHJcbiAgbGV0IHRsID0gYW5pbWUudGltZWxpbmUoe2Vhc2luZzogJ2Vhc2VJblNpbmUnfSlcclxuICBcclxuICB0bC5hZGQoe1xyXG4gICAgdGFyZ2V0czogW2VsLnN2ZywgZWwudGV4dF0sXHJcbiAgICBvcGFjaXR5OiAxLFxyXG4gICAgZHVyYXRpb246IDEwMDAsXHJcbiAgfSlcclxuICAuYWRkKHtcclxuICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgfSlcclxuICAuYWRkKHtcclxuICAgIHRhcmdldHM6IFtlbC50ZXh0XSxcclxuICAgIG9wYWNpdHk6IDAsXHJcbiAgICBkdXJhdGlvbjogNDAwLFxyXG4gIH0pXHJcbiAgLmFkZCh7XHJcbiAgICB0YXJnZXRzOiBbZWwudGV4dF0sXHJcbiAgICBvcGFjaXR5OiAxLFxyXG4gICAgZHVyYXRpb246IDQwMCxcclxuICB9KVxyXG4gIC5hZGQoe1xyXG4gICAgZHVyYXRpb246IDcwMCxcclxuICB9KVxyXG4gIC5hZGQoe1xyXG4gICAgdGFyZ2V0czogW2VsLnRleHRdLFxyXG4gICAgb3BhY2l0eTogMCxcclxuICAgIGR1cmF0aW9uOiA0MDAsXHJcbiAgfSlcclxuICAuYWRkKHtcclxuICAgIHRhcmdldHM6IFtlbC50ZXh0XSxcclxuICAgIG9wYWNpdHk6IDEsXHJcbiAgICBkdXJhdGlvbjogNDAwLFxyXG4gIH0pXHJcbiAgLmFkZCh7XHJcbiAgICBkdXJhdGlvbjogNzAwLFxyXG4gIH0pXHJcbiAgLmFkZCh7XHJcbiAgICB0YXJnZXRzOiBbZWwudGV4dF0sXHJcbiAgICBvcGFjaXR5OiAwLFxyXG4gICAgZHVyYXRpb246IDQwMCxcclxuICB9KVxyXG4gIC5hZGQoe1xyXG4gICAgdGFyZ2V0czogW2VsLnRleHRdLFxyXG4gICAgb3BhY2l0eTogMSxcclxuICAgIGR1cmF0aW9uOiA0MDAsXHJcbiAgfSlcclxuICAuYWRkKHtcclxuICAgIGR1cmF0aW9uOiA3MDAsXHJcbiAgfSlcclxuICAuYWRkKHtcclxuICAgIHRhcmdldHM6IFtlbC50ZXh0LCBlbC5zdmddLFxyXG4gICAgb3BhY2l0eTogMCxcclxuICAgIGR1cmF0aW9uOiA4MDAsXHJcbiAgfSlcclxuICAuYWRkKHtcclxuICAgIGR1cmF0aW9uOiA3MDAsXHJcbiAgfSlcclxuICAuYWRkKHtcclxuICAgIHRhcmdldHM6IFtlbC5ydW5uZXJdLFxyXG4gICAgaGVpZ2h0OiAwLFxyXG4gICAgZWFzaW5nOiAnZWFzZUluU2luZScsXHJcbiAgICBkdXJhdGlvbjogNTAwLFxyXG4gIH0pXHJcbiAgLmFkZCh7XHJcbiAgICBkdXJhdGlvbjogMTAwLFxyXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIChhbmltKSB7XHJcbiAgICAgIGVsLnRvcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgIGVsLnJ1bm5lci5zdHlsZS5oZWlnaHQgPSAnMTAwdmgnXHJcbiAgICAgIGVsLnJ1bm5lci5zdHlsZS53aWR0aCA9ICcwJ1xyXG4gICAgICBlbC5jb250YWluZXIuc3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSdcclxuICAgIH1cclxuICB9KVxyXG5cclxufVxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIHRvIG9wZW4gYW5kIHJ1biB0aGUgdG9wIGxheWVyIGFuaW1hdGlvblxyXG5leHBvcnQgZnVuY3Rpb24gb3BlblRvcExheWVyICgpIHtcclxuICBjb25zdCBlbCA9IHRvcExheW92ZXJFbGVtZW50cygpXHJcbiAgZWwudG9wLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgZWwuY29udGFpbmVyLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcclxuICBlbC5ydW5uZXIuc3R5bGUuaGVpZ2h0ID0gJzEwMHZoJ1xyXG4gIGVsLnJ1bm5lci5zdHlsZS53aWR0aCA9ICcwJ1xyXG4gIGVsLnN2Zy5zdHlsZS53aWR0aCA9ICc3MCUnXHJcblxyXG4gIGxldCB0bCA9IGFuaW1lLnRpbWVsaW5lKClcclxuICB0bFxyXG4gIC5hZGQoe1xyXG4gICAgdGFyZ2V0czogZWwucnVubmVyLFxyXG4gICAgZHVyYXRpb246IDUwMCxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBlYXNpbmc6ICdsaW5lYXInXHJcbiAgICAvLyBjb21wbGV0ZTogZnVuY3Rpb24gKGFuaW0pIHtcclxuICAgIC8vICAgYW5pbWUoe1xyXG4gICAgLy8gICAgIHRhcmdldHM6IGVsLnN2ZyxcclxuICAgIC8vICAgICBvcGFjaXR5OiAxLFxyXG4gICAgLy8gICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICAvLyAgIH0pXHJcbiAgICAvLyB9IFxyXG4gIH0pXHJcbiAgLy8gLmFkZCh7XHJcbiAgLy8gICBkdXJhdGlvbjogNTAwLFxyXG4gIC8vICAgYmVnaW46IGZ1bmN0aW9uIChhbmltKSB7XHJcbiAgLy8gICAgIGVsLnJ1bm5lci5zdHlsZS5yaWdodCA9IDBcclxuICAvLyAgICAgZWwucnVubmVyLnN0eWxlLmZsb2F0ID0gJ3JpZ2h0J1xyXG4gIC8vICAgfVxyXG4gIC8vIH0pXHJcbn1cclxuXHJcblxyXG4vLyBmdW5jdGlvbiBmb3IgY2xvc2luZyB0aGUgdG9wIGxheWVyXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9zZVRvcExheWVyICgpIHtcclxuICBjb25zdCBlbCA9IHRvcExheW92ZXJFbGVtZW50cygpXHJcbiAgZWwudG9wLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgZWwuY29udGFpbmVyLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcclxuICBlbC5ydW5uZXIuc3R5bGUuaGVpZ2h0ID0gJzEwMHZoJ1xyXG4gIGVsLnJ1bm5lci5zdHlsZS53aWR0aCA9ICcxMDAlJ1xyXG4gIGVsLnJ1bm5lci5zdHlsZS5yaWdodCA9IDBcclxuICBlbC5ydW5uZXIuc3R5bGUuZmxvYXQgPSAncmlnaHQnXHJcbiAgZWwuc3ZnLnN0eWxlLndpZHRoID0gJzcwJSdcclxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLWNvbnRhaW5lcicpXHJcblxyXG5sZXQgdGwgPSBhbmltZS50aW1lbGluZSh7ZWFzaW5nOiAnZWFzZUluU2luZSd9KVxyXG4gIHRsXHJcbiAgLmFkZCh7XHJcbiAgICBkdXJhdGlvbjogNDAwLFxyXG4gIH0pXHJcbiAgLmFkZCh7XHJcbiAgICB0YXJnZXRzOiBlbC5ydW5uZXIsXHJcbiAgICBkdXJhdGlvbjogNDAwLFxyXG4gICAgd2lkdGg6ICcwJScsXHJcbiAgICBiZWdpbjogZnVuY3Rpb24gKGFuaW0pIHtcclxuICAgICAgZWwuc3ZnLnN0eWxlLm9wYWNpdHkgPSAwXHJcbiAgICB9IFxyXG4gIH0pXHJcbiAgLmFkZCh7XHJcbiAgICBkdXJhdGlvbjogNDAsXHJcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gKGFuaW0pIHtcclxuICAgICAgZWwudG9wLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgZWwuY29udGFpbmVyLnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnXHJcbiAgICAgIGVsLnJ1bm5lci5zdHlsZS5oZWlnaHQgPSAnMTAwdmgnXHJcbiAgICAgIGVsLnJ1bm5lci5zdHlsZS53aWR0aCA9ICcxMDAlJ1xyXG4gICAgICBlbC5ydW5uZXIuc3R5bGUubGVmdCA9IDBcclxuICAgICAgZWwucnVubmVyLnN0eWxlLmZsb2F0ID0gJ2xlZnQnXHJcbiAgICAgIG5hdi5zdHlsZS5vcGFjaXR5ID0gMVxyXG4gICAgfVxyXG4gIH0pXHJcbn0iLCJpbXBvcnQge1VBUGFyc2VyfSBmcm9tICd1YS1wYXJzZXItanMnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbi8vIGdldCBzZXNzaW9uU3RvcmFnZVxyXG4vLyBleHBvcnQgY29uc3Qgc2Vzc2lvblN0b3JlID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmUuZ2V0SXRlbSgnd2Vic2Vzc2lvbicpKVxyXG5leHBvcnQgZnVuY3Rpb24gc2Vzc2lvblN0b3JlICgpIHtcclxuICBsZXQgc2Vzc2lvbiA9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS53ZWJzZXNzaW9uXHJcbiAgaWYoc2Vzc2lvbiA9PT0gdW5kZWZpbmVkKXtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShzZXNzaW9uKVxyXG4gIH1cclxufVxyXG5cclxuLy8gZmlyZWJhc2UgdXJsXHJcbmNvbnN0IGZpcmViYXNlVXJsID0gJ2h0dHBzOi8vYWltYW5hZGxhd2Fuc2l0ZS5maXJlYmFzZWlvLmNvbSdcclxuXHJcblxyXG5cclxuLy8gZnVuY3Rpb24gdG8gZ2VuZXJhdGUgZmlyZWJhc2UgdXJsXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVVybCh1cmxEaXJlY3Rpb24pIHtcclxuICBjb25zdCBkID0gZ2V0VGltZSgndXJsJylcclxuICBsZXQgdXJsID0gYCR7ZmlyZWJhc2VVcmx9LyR7dXJsRGlyZWN0aW9ufS8ke2QueX0vJHtkLm19LyR7ZC5keX1fJHtkLmRlfWBcclxuICByZXR1cm4gdXJsXHJcbn1cclxuXHJcblxyXG5cclxuLy8gZnVuY3Rpb24gdG8gZ2V0IHVzZXIgZGF0YVxyXG5leHBvcnQgY29uc3QgZ2V0VXNlckRhdGEgPSAoKSA9PiB7XHJcbiAgbGV0IHBhcnNlciA9IG5ldyBVQVBhcnNlcigpXHJcbiAgcmV0dXJuIHBhcnNlci5nZXRSZXN1bHQoKVxyXG59XHJcblxyXG5cclxuXHJcbi8vIGdldCB1c2VyIGRldmljZSBkYXRhXHJcbmV4cG9ydCBjb25zdCBnZXRJUCA9IGFzeW5jICgpID0+IHtcclxuICBsZXQgdXNlcklwXHJcblxyXG4gIGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9pcGFwaS5jby9qc29uLycpXHJcbiAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgaWYgKHJlcy5kYXRhKSB7XHJcbiAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhXHJcbiAgICAgICAgICB1c2VySXAgPSB7XHJcbiAgICAgICAgICAgIGNhcDogZGF0YS5jb3VudHJ5X2NhcGl0YWwsXHJcbiAgICAgICAgICAgIGNpdHk6IGRhdGEuY2l0eSxcclxuICAgICAgICAgICAgY291bnRyeTogZGF0YS5jb3VudHJ5X25hbWUsXHJcbiAgICAgICAgICAgIGlwOiBkYXRhLmlwLFxyXG4gICAgICAgICAgICBsYXQ6IGRhdGEubGF0aXR1ZGUsXHJcbiAgICAgICAgICAgIGxvbmc6IGRhdGEubG9uZ2l0dWRlLFxyXG4gICAgICAgICAgICB0aW1lWjogZGF0YS50aW1lem9uZSxcclxuICAgICAgICAgICAgcmVnaW9uOiBkYXRhLnJlZ2lvbixcclxuICAgICAgICAgICAgcG9zdEM6IGRhdGEucG9zdGFsLFxyXG4gICAgICAgICAgICBpbnRlcm5ldDogZGF0YS5vcmcsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICB1c2VySXAgPSB7XHJcbiAgICAgICAgICBibG9ja2VkOiAnVXNlciBibG9ja2VkIHRoaXMgZGF0YS4nXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIHJldHVybiBhd2FpdCB1c2VySXBcclxufVxyXG5cclxuXHJcblxyXG4vLyBjaGVjayBpZiB0aGUgc2Vzc2lvbiBoYXMgZXhwaXJlZFxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJZkV4cCh0aW1lKSB7XHJcbiAgbGV0IG5vdyA9IGdldFRpbWUoJ25vdycpXHJcbiAgbGV0IHJ1blRpbWUgPSBNYXRoLmZsb29yKCgobm93IC0gdGltZSkgLyAxMDAwKSAvIDYwKVxyXG4gIGlmIChydW5UaW1lID49IDYwKSB7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gZnVuY3Rpb24gdG8gZ2V0IHRpbWVcclxuZXhwb3J0IGNvbnN0IGdldFRpbWUgPSAodXJsKSA9PiB7XHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcclxuICBsZXQgZCA9IGRhdGUuZ2V0RGF0ZSgpXHJcbiAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpXHJcblxyXG4gIC8vIGdldCB0aW1lIGZvciB1cmwgc3RydWN0dXJlIHF1ZXJ5XHJcbiAgaWYgKHVybCA9PT0gJ3VybCcpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHk6IGRhdGUuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgbTogYCR7bihtb250aCsxKX1fJHttbltkYXRlLmdldE1vbnRoKCldfWAsXHJcbiAgICAgIGR5OiBuKGQpLFxyXG4gICAgICBkZTogZHRbZGF0ZS5nZXREYXkoKV0sXHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmICh1cmwgPT09ICd0aW1lT2ZWaXNpdCcpIHtcclxuICAgIC8vIGdldCB0aW1lIGZvciB0aGUgdGltZSBvZiB2aXNpdFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGltZTogYCR7ZGF0ZS5nZXRIb3VycygpfTogJHtkYXRlLmdldE1pbnV0ZXMoKX06ICR7ZGF0ZS5nZXRTZWNvbmRzKCl9YFxyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAodXJsID09PSAnbm93Jykge1xyXG4gICAgLy8gZ2V0IHRpbWUgZm9yIHRoZSB0aW1lIG9mIHZpc2l0XHJcbiAgICByZXR1cm4gZGF0ZS5nZXRUaW1lKClcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gZmlsdGVyIG51bWJlciBpZiBkYXRhIGlzIHNpbmdsZSBkaWdpdFxyXG5jb25zdCBuID0gKGQpID0+IHtcclxuICByZXR1cm4gZCA8IDEwID8gYDAke2R9YCA6IGRcclxufVxyXG5cclxuXHJcblxyXG4vLyBzZXQgdGhlIG1vbnRoIHRvIHRoZSBleGFjdCBudW1iZXIgaW5kZXggb2YgdGhlIGFycmF5XHJcbmNvbnN0IG1uID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddXHJcblxyXG4vLyBzZXQgdGhlIGRheSB0byB0aGUgZXhhY3QgbnVtYmVyIGluZGV4IG9mIHRoZSBhcnJheVxyXG5jb25zdCBkdCA9IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J11cclxuXHJcblxyXG5cclxubGV0IHJvdXRlcyA9IFtcclxuICAgJ2hvbWUnLCAnYWJvdXQnLCAncHJvamVjdHMnLCAnY29udGFjdHMnLCAncHJpdmFjeScsICdjcmVkZW50aWFscycsICdwcm9qZWN0cy9wcm9qZWN0cy9tdXNpYy1hcHAnLCAncHJvamVjdHMvcmVzZXJ2YXRpb24tYXBwJywgJ3Byb2plY3RzL2VsZWN0cmljLWJpbGwnLCAncHJvamVjdHMvbXVzaWMtcGxheWVyMycsICdwcm9qZWN0cy9tdXNpYy1wbGF5ZXI0JywgJ3Byb2plY3RzL211c2ljLXBsYXllcjUnXVxyXG5cclxuLy8gdGhpcyBmdW5jdGlvbiB3aWxsIGdlbmVyYXRlIGEgcmV0dXJuIHRoZSBjdXJyZW50IHJvdXRlXHJcbi8vIGZvciB0aGUgc3RhdGVcclxuZXhwb3J0IGNvbnN0IGNoZWNrUm91dGUgPSAocm91dGUpID0+IHtcclxuICAgbGV0IHIgPSByb3V0ZS5zbGljZSgxLCA1MClcclxuICAgbGV0IHVybCA9IHIgPT09ICcnID8gJ2hvbWUnIDogclxyXG4gICBsZXQgYjtcclxuICAgbGV0IGEgPSByb3V0ZXMuZmlsdGVyKHJvdXRlID0+IHtcclxuICAgICAgICAgICByZXR1cm4gcm91dGUgPT09IHVybFxyXG4gICAgICAgICB9KVxyXG4gICBcclxuICAgaWYoYVswXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGIgPSAnbm90Rm91bmQnXHJcbiAgIH0gZWxzZSB7XHJcbiAgICAgIGIgPSBhWzBdXHJcbiAgIH1cclxuICAgXHJcbiAgIHJldHVybiBiXHJcbn1cclxuIiwiaW1wb3J0IHtzZXNzaW9uU3RvcmUsIGdldFVzZXJEYXRhLCBnZXRJUCwgZ2VuZXJhdGVVcmwsIGdldFRpbWUsIGNoZWNrSWZFeHB9IGZyb20gJy4vY29tbW9uZnVuY3Rpb25zJ1xyXG5pbXBvcnQge2NoZWNrUm91dGV9IGZyb20gJy4uL2NvbW1vbi9jb21tb24nXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbi8vIGZ1bmN0aW9uIHRvIGNoZWNrIHBhZ2Ugc2Vzc2lvbi4gcmV0dXJuIGJvb2xlYW5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrZm9yc2Vzc2lvbiAoKSB7XHJcbiAgXHJcbiAgY29uc3Qgc2Vzc2lvbiA9IHNlc3Npb25TdG9yZSgpXHJcblxyXG4gIGxldCByb3V0ZSA9IGNoZWNrUm91dGUod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKVxyXG4gIGxldCBoYXNTZXNzaW9uO1xyXG4gIFxyXG4gIGlmKHNlc3Npb24pIHtcclxuICAgIGxldCBpc0V4cCA9IGNoZWNrSWZFeHAoc2Vzc2lvbi50aW1lU3RhbXApXHJcbiAgICBpZihpc0V4cCl7XHJcbiAgICAgIGhhc1Nlc3Npb24gPSBmYWxzZVxyXG4gICAgICB1cGRhdGVTZXNzaW9uKHNlc3Npb24uX2lkLCByb3V0ZSwgdHJ1ZSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGhhc1Nlc3Npb24gPSB0cnVlXHJcbiAgICAgIHVwZGF0ZVNlc3Npb24oc2Vzc2lvbi5faWQsIHJvdXRlLCBmYWxzZSlcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgaGFzU2Vzc2lvbiA9IGZhbHNlXHJcbiAgICBsZXQgX2lkID0gYXdhaXQgc2F2ZURhdGFUb0ZpcmViYXNlKHJvdXRlKVxyXG4gICAgc2V0U2Vzc2lvbihfaWQpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gaGFzU2Vzc2lvblxyXG59XHJcblxyXG4vLyBmdW5jdGlvbnRvIHVwZGF0ZSB0aGUgc2Vzc2lvblxyXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVTZXNzaW9uKGlkLCByb3V0ZSwgZXhwKSB7XHJcbiAgbGV0IHVybCA9IGdlbmVyYXRlVXJsKCd2aXNpdG9yJylcclxuICBsZXQgcm91dGVVcmwgPSBgJHt1cmx9LyR7aWR9L3JvdXRlc1Zpc2l0ZWQvcm91dGVzU2Vlbi5qc29uYFxyXG5cclxuICBsZXQgcm91dGVzID0gYXdhaXQgZ2V0Um91dGVzVmlzaXRlZChyb3V0ZVVybClcclxuICByb3V0ZXMucHVzaChyb3V0ZSlcclxuXHJcbiAgYXhpb3MucHV0KGAke3VybH0vJHtpZH0vcm91dGVzVmlzaXRlZC9yb3V0ZXNTZWVuLmpzb25gLCByb3V0ZXMpXHJcbiAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICBpZiAocmVzLmRhdGEpIHtcclxuICAgICAgICBpZiAoZXhwKSBzZXRTZXNzaW9uKGlkKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICBuZXcgUHJvbWlzZS5yZWplY3QoZXJyKVxyXG4gICAgICAgIGlmIChleHApIHNldFNlc3Npb24oaWQpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIHRvIGNvbGxlY3QgdGhlIHZpc2l0ZWQgcm91dGVzIGZyb20gZmlyZWJhc2VcclxuYXN5bmMgZnVuY3Rpb24gZ2V0Um91dGVzVmlzaXRlZChyb3V0ZVVybCkge1xyXG4gIGxldCByb3V0ZXMgPSBbXVxyXG4gIGF3YWl0IGF4aW9zLmdldChyb3V0ZVVybClcclxuICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGlmIChyZXMuZGF0YSkge1xyXG4gICAgICAgIHJvdXRlcyA9IHJlcy5kYXRhXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIHJvdXRlcyA9IFsndGhlcmUgd2FzIGFuIGVycm9yJ11cclxuICAgICAgfVxyXG4gICAgfSlcclxuICByZXR1cm4gYXdhaXQgcm91dGVzXHJcbn1cclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBzYXZlRGF0YVRvRmlyZWJhc2Uocm91dGUpIHtcclxuICBsZXQgX2lkID0gZmFsc2VcclxuICBsZXQgdXNlcklwID0gYXdhaXQgZ2V0SVAoKVxyXG4gIGxldCB1c2VyID0gZ2V0VXNlckRhdGEoKVxyXG4gIGxldCB0aW1lID0gZ2V0VGltZSgndGltZU9mVmlzaXQnKVxyXG4gIGxldCByb3V0ZXNWaXNpdGVkID0ge1xyXG4gICAgaW5pdGlhbDogcm91dGUsXHJcbiAgICByb3V0ZXNTZWVuOiBbcm91dGVdXHJcbiAgfVxyXG5cclxuICAvLyBnZW5lcmF0ZSB2aXNpdGVkIHVybFxyXG4gIGxldCB1cmwgPSBnZW5lcmF0ZVVybCgndmlzaXRvcicpXHJcblxyXG4gIGF3YWl0IGF4aW9zLnBvc3QoYCR7dXJsfS5qc29uYCwge1xyXG4gICAgICB1c2VySXAsXHJcbiAgICAgIHVzZXIsXHJcbiAgICAgIHRpbWUsXHJcbiAgICAgIHJvdXRlc1Zpc2l0ZWRcclxuICAgIH0pXHJcbiAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICBpZiAocmVzLmRhdGEpXHJcbiAgICAgICAgX2lkID0gcmVzLmRhdGEubmFtZVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICBpZiAoZXJyKSBuZXcgUHJvbWlzZS5yZWplY3QoZXJyKVxyXG4gICAgfSlcclxuICByZXR1cm4gYXdhaXQgX2lkXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTZXNzaW9uKGlkKSB7XHJcbiAgbGV0IGRhdGEgPSB7XHJcbiAgICBfaXNWaXNpdGVkOiB0cnVlLFxyXG4gICAgX2lkOiBpZCxcclxuICAgIHRpbWVTdGFtcDogZ2V0VGltZSgnbm93JyksXHJcbiAgfVxyXG4gIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3dlYnNlc3Npb24nLCBKU09OLnN0cmluZ2lmeShkYXRhKSlcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmltZWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZyYW1lci1tb3Rpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1YS1wYXJzZXItanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=