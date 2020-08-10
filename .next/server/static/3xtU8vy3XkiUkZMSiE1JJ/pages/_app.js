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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+XPH":
/***/ (function(module, exports) {



/***/ }),

/***/ "/HFl":
/***/ (function(module, exports) {



/***/ }),

/***/ "/MDw":
/***/ (function(module, exports) {



/***/ }),

/***/ "0krN":
/***/ (function(module, exports) {



/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("IlR1");


/***/ }),

/***/ "229E":
/***/ (function(module, exports) {



/***/ }),

/***/ "282X":
/***/ (function(module, exports) {



/***/ }),

/***/ "2DE9":
/***/ (function(module, exports) {



/***/ }),

/***/ "3HIf":
/***/ (function(module, exports) {



/***/ }),

/***/ "3NL3":
/***/ (function(module, exports) {



/***/ }),

/***/ "4lcN":
/***/ (function(module, exports) {



/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "9N5s":
/***/ (function(module, exports) {



/***/ }),

/***/ "9NGu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StateProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pageanimations_motion_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("PWWu");
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
          isTransitioning: Object(_pageanimations_motion_common__WEBPACK_IMPORTED_MODULE_1__[/* setTransitionState */ "a"])(this.state.isTransitioning),
          animation: animmode(from)
        });
      }

      if (from === 'bottom') {
        this.setState({
          exitMode: mode(from),
          isTransitioning: Object(_pageanimations_motion_common__WEBPACK_IMPORTED_MODULE_1__[/* setTransitionState */ "a"])(this.state.isTransitioning),
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

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "BsYR":
/***/ (function(module, exports) {



/***/ }),

/***/ "ESXz":
/***/ (function(module, exports) {



/***/ }),

/***/ "G4F6":
/***/ (function(module, exports) {



/***/ }),

/***/ "GmkI":
/***/ (function(module, exports) {



/***/ }),

/***/ "IWlz":
/***/ (function(module, exports) {



/***/ }),

/***/ "IeeD":
/***/ (function(module, exports) {



/***/ }),

/***/ "IlR1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8Bbg");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wmQq");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_context_stateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("9NGu");
/* harmony import */ var _styles_global_styleOne_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("9N5s");
/* harmony import */ var _styles_global_styleOne_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_global_styleOne_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_global_styleTwo_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ESXz");
/* harmony import */ var _styles_global_styleTwo_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_global_styleTwo_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_toplayover_toplayover_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("3HIf");
/* harmony import */ var _styles_toplayover_toplayover_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_toplayover_toplayover_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_navbar_navbar_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("jTTQ");
/* harmony import */ var _styles_navbar_navbar_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_navbar_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_navbar_navbarlogo_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("G4F6");
/* harmony import */ var _styles_navbar_navbarlogo_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_navbarlogo_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_navbar_navbarmenu_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("y8tM");
/* harmony import */ var _styles_navbar_navbarmenu_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_navbarmenu_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_menu_menucontainer_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("q30+");
/* harmony import */ var _styles_menu_menucontainer_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_menu_menucontainer_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_menu_menuwrapper_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("GmkI");
/* harmony import */ var _styles_menu_menuwrapper_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_menu_menuwrapper_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles_menu_menurunner_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("/MDw");
/* harmony import */ var _styles_menu_menurunner_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_menu_menurunner_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _styles_menu_menu_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("wjKv");
/* harmony import */ var _styles_menu_menu_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_menu_menu_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _styles_footer_copyright_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("UkkC");
/* harmony import */ var _styles_footer_copyright_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_copyright_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _styles_footer_socialIcons_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("3NL3");
/* harmony import */ var _styles_footer_socialIcons_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_socialIcons_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _styles_footer_footermenu_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("BsYR");
/* harmony import */ var _styles_footer_footermenu_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_footermenu_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _styles_footer_footer_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("kfaD");
/* harmony import */ var _styles_footer_footer_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_footer_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _styles_header_header_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("oAWL");
/* harmony import */ var _styles_header_header_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_styles_header_header_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _styles_header_hero_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("klHy");
/* harmony import */ var _styles_header_hero_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_styles_header_hero_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _styles_header_headertextblock_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("hNd3");
/* harmony import */ var _styles_header_headertextblock_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_styles_header_headertextblock_css__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _styles_header_subparagraph_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("IeeD");
/* harmony import */ var _styles_header_subparagraph_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_styles_header_subparagraph_css__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _styles_header_credentials_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("nlhC");
/* harmony import */ var _styles_header_credentials_css__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_styles_header_credentials_css__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _styles_privacy_privacy_css__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("2DE9");
/* harmony import */ var _styles_privacy_privacy_css__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_styles_privacy_privacy_css__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _styles_notfound_notfound_css__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("cQ9s");
/* harmony import */ var _styles_notfound_notfound_css__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_styles_notfound_notfound_css__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _styles_sectionblocks_sectionblocks_css__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("s40o");
/* harmony import */ var _styles_sectionblocks_sectionblocks_css__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_styles_sectionblocks_sectionblocks_css__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _styles_shortprojectview_shortprojectview_css__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("KfVH");
/* harmony import */ var _styles_shortprojectview_shortprojectview_css__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_styles_shortprojectview_shortprojectview_css__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _styles_needhelp_needhelp_css__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("+XPH");
/* harmony import */ var _styles_needhelp_needhelp_css__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_styles_needhelp_needhelp_css__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _styles_about_skills_css__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("0krN");
/* harmony import */ var _styles_about_skills_css__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_styles_about_skills_css__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _styles_about_myreads_css__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("/HFl");
/* harmony import */ var _styles_about_myreads_css__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_styles_about_myreads_css__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _styles_contacts_message_css__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("IWlz");
/* harmony import */ var _styles_contacts_message_css__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_styles_contacts_message_css__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _styles_projects_projectheader_css__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("r2Ja");
/* harmony import */ var _styles_projects_projectheader_css__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_styles_projects_projectheader_css__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _styles_projects_otherprojects_css__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("Qnaw");
/* harmony import */ var _styles_projects_otherprojects_css__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_styles_projects_otherprojects_css__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _styles_individualproject_header_css__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("WNvz");
/* harmony import */ var _styles_individualproject_header_css__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_styles_individualproject_header_css__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _styles_individualproject_projectbody_css__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("VWAC");
/* harmony import */ var _styles_individualproject_projectbody_css__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_styles_individualproject_projectbody_css__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _styles_individualproject_about_css__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__("229E");
/* harmony import */ var _styles_individualproject_about_css__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_styles_individualproject_about_css__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _styles_individualproject_categories_css__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__("Oo2i");
/* harmony import */ var _styles_individualproject_categories_css__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_styles_individualproject_categories_css__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _styles_individualproject_launchlinks_css__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__("282X");
/* harmony import */ var _styles_individualproject_launchlinks_css__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_styles_individualproject_launchlinks_css__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _styles_individualproject_screens_css__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__("pQOl");
/* harmony import */ var _styles_individualproject_screens_css__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(_styles_individualproject_screens_css__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _styles_individualproject_tools_css__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__("4lcN");
/* harmony import */ var _styles_individualproject_tools_css__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_styles_individualproject_tools_css__WEBPACK_IMPORTED_MODULE_39__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



 // global css


 // css for the toplayover

 // css for navbar



 // css for menu, menu runner and menu list




 // css for the footer and copyright item




 // css for header





 // privacy 

 // not found

 // section blocks

 // short project view

 // needhelp 

 // css for about page and sections 


 // css for message form

 // css for project header


 // css for individual project









function MyApp({
  Component,
  pageProps,
  router
}) {
  return __jsx(_utils_context_stateContext__WEBPACK_IMPORTED_MODULE_3__[/* StateProvider */ "b"], null, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["AnimatePresence"], {
    exitBeforeEnter: true
  }, __jsx(Component, _extends({}, pageProps, {
    key: router.route
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "KfVH":
/***/ (function(module, exports) {



/***/ }),

/***/ "Oo2i":
/***/ (function(module, exports) {



/***/ }),

/***/ "PWWu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setTransitionState; });
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

/***/ "Qnaw":
/***/ (function(module, exports) {



/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UkkC":
/***/ (function(module, exports) {



/***/ }),

/***/ "VWAC":
/***/ (function(module, exports) {



/***/ }),

/***/ "WNvz":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cQ9s":
/***/ (function(module, exports) {



/***/ }),

/***/ "hNd3":
/***/ (function(module, exports) {



/***/ }),

/***/ "jTTQ":
/***/ (function(module, exports) {



/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "kfaD":
/***/ (function(module, exports) {



/***/ }),

/***/ "klHy":
/***/ (function(module, exports) {



/***/ }),

/***/ "nlhC":
/***/ (function(module, exports) {



/***/ }),

/***/ "oAWL":
/***/ (function(module, exports) {



/***/ }),

/***/ "pQOl":
/***/ (function(module, exports) {



/***/ }),

/***/ "q30+":
/***/ (function(module, exports) {



/***/ }),

/***/ "r2Ja":
/***/ (function(module, exports) {



/***/ }),

/***/ "s40o":
/***/ (function(module, exports) {



/***/ }),

/***/ "wjKv":
/***/ (function(module, exports) {



/***/ }),

/***/ "wmQq":
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "y8tM":
/***/ (function(module, exports) {



/***/ })

/******/ });