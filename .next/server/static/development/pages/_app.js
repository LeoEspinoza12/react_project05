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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

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

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
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
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_context_stateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/context/stateContext */ "./src/utils/context/stateContext.js");
/* harmony import */ var _styles_global_styleOne_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/global/styleOne.css */ "./styles/global/styleOne.css");
/* harmony import */ var _styles_global_styleOne_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_global_styleOne_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_global_styleTwo_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/global/styleTwo.css */ "./styles/global/styleTwo.css");
/* harmony import */ var _styles_global_styleTwo_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_global_styleTwo_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_toplayover_toplayover_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/toplayover/toplayover.css */ "./styles/toplayover/toplayover.css");
/* harmony import */ var _styles_toplayover_toplayover_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_toplayover_toplayover_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_navbar_navbar_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/navbar/navbar.css */ "./styles/navbar/navbar.css");
/* harmony import */ var _styles_navbar_navbar_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_navbar_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_navbar_navbarlogo_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/navbar/navbarlogo.css */ "./styles/navbar/navbarlogo.css");
/* harmony import */ var _styles_navbar_navbarlogo_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_navbarlogo_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_navbar_navbarmenu_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/navbar/navbarmenu.css */ "./styles/navbar/navbarmenu.css");
/* harmony import */ var _styles_navbar_navbarmenu_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_navbarmenu_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_menu_menucontainer_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../styles/menu/menucontainer.css */ "./styles/menu/menucontainer.css");
/* harmony import */ var _styles_menu_menucontainer_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_menu_menucontainer_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_menu_menuwrapper_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../styles/menu/menuwrapper.css */ "./styles/menu/menuwrapper.css");
/* harmony import */ var _styles_menu_menuwrapper_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_menu_menuwrapper_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles_menu_menurunner_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../styles/menu/menurunner.css */ "./styles/menu/menurunner.css");
/* harmony import */ var _styles_menu_menurunner_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_menu_menurunner_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _styles_menu_menu_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../styles/menu/menu.css */ "./styles/menu/menu.css");
/* harmony import */ var _styles_menu_menu_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_menu_menu_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _styles_footer_copyright_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../styles/footer/copyright.css */ "./styles/footer/copyright.css");
/* harmony import */ var _styles_footer_copyright_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_copyright_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _styles_footer_socialIcons_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../styles/footer/socialIcons.css */ "./styles/footer/socialIcons.css");
/* harmony import */ var _styles_footer_socialIcons_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_socialIcons_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _styles_footer_footermenu_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../styles/footer/footermenu.css */ "./styles/footer/footermenu.css");
/* harmony import */ var _styles_footer_footermenu_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_footermenu_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _styles_footer_footer_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../styles/footer/footer.css */ "./styles/footer/footer.css");
/* harmony import */ var _styles_footer_footer_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_footer_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _styles_header_header_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../styles/header/header.css */ "./styles/header/header.css");
/* harmony import */ var _styles_header_header_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_styles_header_header_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _styles_header_hero_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../styles/header/hero.css */ "./styles/header/hero.css");
/* harmony import */ var _styles_header_hero_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_styles_header_hero_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _styles_header_headertextblock_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../styles/header/headertextblock.css */ "./styles/header/headertextblock.css");
/* harmony import */ var _styles_header_headertextblock_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_styles_header_headertextblock_css__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _styles_header_subparagraph_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../styles/header/subparagraph.css */ "./styles/header/subparagraph.css");
/* harmony import */ var _styles_header_subparagraph_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_styles_header_subparagraph_css__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _styles_header_credentials_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../styles/header/credentials.css */ "./styles/header/credentials.css");
/* harmony import */ var _styles_header_credentials_css__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_styles_header_credentials_css__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _styles_privacy_privacy_css__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../styles/privacy/privacy.css */ "./styles/privacy/privacy.css");
/* harmony import */ var _styles_privacy_privacy_css__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_styles_privacy_privacy_css__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _styles_notfound_notfound_css__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../styles/notfound/notfound.css */ "./styles/notfound/notfound.css");
/* harmony import */ var _styles_notfound_notfound_css__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_styles_notfound_notfound_css__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _styles_sectionblocks_sectionblocks_css__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../styles/sectionblocks/sectionblocks.css */ "./styles/sectionblocks/sectionblocks.css");
/* harmony import */ var _styles_sectionblocks_sectionblocks_css__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_styles_sectionblocks_sectionblocks_css__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _styles_shortprojectview_shortprojectview_css__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../styles/shortprojectview/shortprojectview.css */ "./styles/shortprojectview/shortprojectview.css");
/* harmony import */ var _styles_shortprojectview_shortprojectview_css__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_styles_shortprojectview_shortprojectview_css__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _styles_needhelp_needhelp_css__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../styles/needhelp/needhelp.css */ "./styles/needhelp/needhelp.css");
/* harmony import */ var _styles_needhelp_needhelp_css__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_styles_needhelp_needhelp_css__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _styles_about_skills_css__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../styles/about/skills.css */ "./styles/about/skills.css");
/* harmony import */ var _styles_about_skills_css__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_styles_about_skills_css__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _styles_about_myreads_css__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../styles/about/myreads.css */ "./styles/about/myreads.css");
/* harmony import */ var _styles_about_myreads_css__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_styles_about_myreads_css__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _styles_contacts_message_css__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../styles/contacts/message.css */ "./styles/contacts/message.css");
/* harmony import */ var _styles_contacts_message_css__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_styles_contacts_message_css__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _styles_projects_projectheader_css__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../styles/projects/projectheader.css */ "./styles/projects/projectheader.css");
/* harmony import */ var _styles_projects_projectheader_css__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_styles_projects_projectheader_css__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _styles_projects_otherprojects_css__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../styles/projects/otherprojects.css */ "./styles/projects/otherprojects.css");
/* harmony import */ var _styles_projects_otherprojects_css__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_styles_projects_otherprojects_css__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _styles_individualproject_header_css__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../styles/individualproject/header.css */ "./styles/individualproject/header.css");
/* harmony import */ var _styles_individualproject_header_css__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_styles_individualproject_header_css__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _styles_individualproject_projectbody_css__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../styles/individualproject/projectbody.css */ "./styles/individualproject/projectbody.css");
/* harmony import */ var _styles_individualproject_projectbody_css__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_styles_individualproject_projectbody_css__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _styles_individualproject_about_css__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../styles/individualproject/about.css */ "./styles/individualproject/about.css");
/* harmony import */ var _styles_individualproject_about_css__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_styles_individualproject_about_css__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _styles_individualproject_categories_css__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../styles/individualproject/categories.css */ "./styles/individualproject/categories.css");
/* harmony import */ var _styles_individualproject_categories_css__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_styles_individualproject_categories_css__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _styles_individualproject_launchlinks_css__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../styles/individualproject/launchlinks.css */ "./styles/individualproject/launchlinks.css");
/* harmony import */ var _styles_individualproject_launchlinks_css__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_styles_individualproject_launchlinks_css__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _styles_individualproject_screens_css__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../styles/individualproject/screens.css */ "./styles/individualproject/screens.css");
/* harmony import */ var _styles_individualproject_screens_css__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(_styles_individualproject_screens_css__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _styles_individualproject_tools_css__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../styles/individualproject/tools.css */ "./styles/individualproject/tools.css");
/* harmony import */ var _styles_individualproject_tools_css__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_styles_individualproject_tools_css__WEBPACK_IMPORTED_MODULE_39__);
var _jsxFileName = "C:\\Projects\\Web Dev\\Main Files\\Official Website\\newdesign\\Main\\src\\pages\\_app.js";

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
  return __jsx(_utils_context_stateContext__WEBPACK_IMPORTED_MODULE_3__["StateProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["AnimatePresence"], {
    exitBeforeEnter: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, __jsx(Component, _extends({}, pageProps, {
    key: router.route,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

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

/***/ "./styles/about/myreads.css":
/*!**********************************!*\
  !*** ./styles/about/myreads.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/about/skills.css":
/*!*********************************!*\
  !*** ./styles/about/skills.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/contacts/message.css":
/*!*************************************!*\
  !*** ./styles/contacts/message.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/footer/copyright.css":
/*!*************************************!*\
  !*** ./styles/footer/copyright.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/footer/footer.css":
/*!**********************************!*\
  !*** ./styles/footer/footer.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/footer/footermenu.css":
/*!**************************************!*\
  !*** ./styles/footer/footermenu.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/footer/socialIcons.css":
/*!***************************************!*\
  !*** ./styles/footer/socialIcons.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/global/styleOne.css":
/*!************************************!*\
  !*** ./styles/global/styleOne.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/global/styleTwo.css":
/*!************************************!*\
  !*** ./styles/global/styleTwo.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/header/credentials.css":
/*!***************************************!*\
  !*** ./styles/header/credentials.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/header/header.css":
/*!**********************************!*\
  !*** ./styles/header/header.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/header/headertextblock.css":
/*!*******************************************!*\
  !*** ./styles/header/headertextblock.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/header/hero.css":
/*!********************************!*\
  !*** ./styles/header/hero.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/header/subparagraph.css":
/*!****************************************!*\
  !*** ./styles/header/subparagraph.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/individualproject/about.css":
/*!********************************************!*\
  !*** ./styles/individualproject/about.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/individualproject/categories.css":
/*!*************************************************!*\
  !*** ./styles/individualproject/categories.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/individualproject/header.css":
/*!*********************************************!*\
  !*** ./styles/individualproject/header.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/individualproject/launchlinks.css":
/*!**************************************************!*\
  !*** ./styles/individualproject/launchlinks.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/individualproject/projectbody.css":
/*!**************************************************!*\
  !*** ./styles/individualproject/projectbody.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/individualproject/screens.css":
/*!**********************************************!*\
  !*** ./styles/individualproject/screens.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/individualproject/tools.css":
/*!********************************************!*\
  !*** ./styles/individualproject/tools.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/menu/menu.css":
/*!******************************!*\
  !*** ./styles/menu/menu.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/menu/menucontainer.css":
/*!***************************************!*\
  !*** ./styles/menu/menucontainer.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/menu/menurunner.css":
/*!************************************!*\
  !*** ./styles/menu/menurunner.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/menu/menuwrapper.css":
/*!*************************************!*\
  !*** ./styles/menu/menuwrapper.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/navbar/navbar.css":
/*!**********************************!*\
  !*** ./styles/navbar/navbar.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/navbar/navbarlogo.css":
/*!**************************************!*\
  !*** ./styles/navbar/navbarlogo.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/navbar/navbarmenu.css":
/*!**************************************!*\
  !*** ./styles/navbar/navbarmenu.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/needhelp/needhelp.css":
/*!**************************************!*\
  !*** ./styles/needhelp/needhelp.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/notfound/notfound.css":
/*!**************************************!*\
  !*** ./styles/notfound/notfound.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/privacy/privacy.css":
/*!************************************!*\
  !*** ./styles/privacy/privacy.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/projects/otherprojects.css":
/*!*******************************************!*\
  !*** ./styles/projects/otherprojects.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/projects/projectheader.css":
/*!*******************************************!*\
  !*** ./styles/projects/projectheader.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/sectionblocks/sectionblocks.css":
/*!************************************************!*\
  !*** ./styles/sectionblocks/sectionblocks.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/shortprojectview/shortprojectview.css":
/*!******************************************************!*\
  !*** ./styles/shortprojectview/shortprojectview.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/toplayover/toplayover.css":
/*!******************************************!*\
  !*** ./styles/toplayover/toplayover.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./src/pages/_app.js");


/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb250ZXh0L3N0YXRlQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvcGFnZWFuaW1hdGlvbnMvbW90aW9uL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcmFtZXItbW90aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJwYWdlUHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZENhdGNoIiwicmVuZGVyIiwiX19OX1NTRyIsInVybCIsImNyZWF0ZVVybCIsIkFwcCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwiY29uc29sZSIsIndhcm5VcmwiLCJwIiwiYmFjayIsInJvdXRlciIsInB1c2giLCJwdXNoVG8iLCJwdXNoUm91dGUiLCJhcyIsInB1c2hVcmwiLCJyZXBsYWNlIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCIsIk15QXBwIiwicm91dGUiLCJTdGF0ZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiU3RhdGVQcm92aWRlciIsImFjdGl2ZVJvdXRlIiwibWVudUlzT3BlbiIsIm1lbnVJc0FuaW1hdGluZyIsImlzVHJhbnNpdGlvbmluZyIsImV4aXRNb2RlIiwiYW5pbWF0aW9uIiwibmV3U3RhdGUiLCJzZXRTdGF0ZSIsInN0YXRlIiwiZnJvbSIsIm1vZGUiLCJzZXRUcmFuc2l0aW9uU3RhdGUiLCJhbmltbW9kZSIsInNldEFwcGxpY2F0aW9uU3RhdGUiLCJzZXRBY3RpdmVSb3V0ZSIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSwrRDs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7OztBQ05BLGlCQUFpQixtQkFBTyxDQUFDLGlFQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E1Qzs7QUFDQTs7O0FBZUE7Ozs7O0FBSUEsa0NBQWtDO0FBQUE7QUFBbEM7QUFBa0MsQ0FBbEMsRUFHeUM7QUFDdkMsUUFB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QUssWUFBZCxFQUE0QixPQUFPLFlBQVA7QUFDNUIsTUFBSUEsS0FBSyxLQUFLLFlBQWQsRUFBNEIsT0FBTyxZQUFQOztBQUM1QixNQUFJQSxLQUFLLEtBQUssWUFBVixJQUEwQkEsS0FBSyxLQUFLLFlBQXhDLEVBQXNEO0FBQ3BELFdBQU8sWUFBUDtBQUNEO0FBQ0YsQ0FOTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xQLDBDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIiwiaW1wb3J0IFJlYWN0LCB7IEVycm9ySW5mbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZSxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vY2xpZW50L3JvdXRlcidcblxuZXhwb3J0IHsgQXBwSW5pdGlhbFByb3BzIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcblxuICB3YXJuVXJsID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3VybC1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcbn1cblxuLy8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIocDogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuQ29udGFpbmVyKClcbiAgcmV0dXJuIHAuY2hpbGRyZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXI6IFJvdXRlcikge1xuICAvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxuICBjb25zdCB7IHBhdGhuYW1lLCBhc1BhdGgsIHF1ZXJ5IH0gPSByb3V0ZXJcbiAgcmV0dXJuIHtcbiAgICBnZXQgcXVlcnkoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9LFxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBwYXRobmFtZVxuICAgIH0sXG4gICAgZ2V0IGFzUGF0aCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBhc1BhdGhcbiAgICB9LFxuICAgIGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJvdXRlci5iYWNrKClcbiAgICB9LFxuICAgIHB1c2g6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGFzKVxuICAgIH0sXG4gICAgcHVzaFRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcHVzaFJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHB1c2hVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUsIHB1c2hVcmwpXG4gICAgfSxcbiAgICByZXBsYWNlOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLCBhcylcbiAgICB9LFxuICAgIHJlcGxhY2VUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHJlcGxhY2VSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCByZXBsYWNlVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKVxuICAgIH0sXG4gIH1cbn1cbiIsImltcG9ydCBBcHAgZnJvbSduZXh0L2FwcCdcclxuaW1wb3J0IHtBbmltYXRlUHJlc2VuY2V9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXHJcbmltcG9ydCB7U3RhdGVQcm92aWRlcn0gZnJvbSAnLi4vdXRpbHMvY29udGV4dC9zdGF0ZUNvbnRleHQnXHJcblxyXG4vLyBnbG9iYWwgY3NzXHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzL2dsb2JhbC9zdHlsZU9uZS5jc3MnXHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzL2dsb2JhbC9zdHlsZVR3by5jc3MnXHJcblxyXG4vLyBjc3MgZm9yIHRoZSB0b3BsYXlvdmVyXHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzL3RvcGxheW92ZXIvdG9wbGF5b3Zlci5jc3MnXHJcblxyXG4vLyBjc3MgZm9yIG5hdmJhclxyXG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9uYXZiYXIvbmF2YmFyLmNzcydcclxuaW1wb3J0ICcuLi8uLi9zdHlsZXMvbmF2YmFyL25hdmJhcmxvZ28uY3NzJ1xyXG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9uYXZiYXIvbmF2YmFybWVudS5jc3MnXHJcblxyXG4vLyBjc3MgZm9yIG1lbnUsIG1lbnUgcnVubmVyIGFuZCBtZW51IGxpc3RcclxuaW1wb3J0ICcuLi8uLi9zdHlsZXMvbWVudS9tZW51Y29udGFpbmVyLmNzcydcclxuaW1wb3J0ICcuLi8uLi9zdHlsZXMvbWVudS9tZW51d3JhcHBlci5jc3MnXHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzL21lbnUvbWVudXJ1bm5lci5jc3MnXHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzL21lbnUvbWVudS5jc3MnXHJcblxyXG4vLyBjc3MgZm9yIHRoZSBmb290ZXIgYW5kIGNvcHlyaWdodCBpdGVtXHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzL2Zvb3Rlci9jb3B5cmlnaHQuY3NzJ1xyXG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9mb290ZXIvc29jaWFsSWNvbnMuY3NzJ1xyXG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9mb290ZXIvZm9vdGVybWVudS5jc3MnXHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzL2Zvb3Rlci9mb290ZXIuY3NzJ1xyXG5cclxuLy8gY3NzIGZvciBoZWFkZXJcclxuaW1wb3J0ICcuLi8uLi9zdHlsZXMvaGVhZGVyL2hlYWRlci5jc3MnXHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzL2hlYWRlci9oZXJvLmNzcydcclxuaW1wb3J0ICcuLi8uLi9zdHlsZXMvaGVhZGVyL2hlYWRlcnRleHRibG9jay5jc3MnXHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzL2hlYWRlci9zdWJwYXJhZ3JhcGguY3NzJ1xyXG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9oZWFkZXIvY3JlZGVudGlhbHMuY3NzJ1xyXG5cclxuLy8gcHJpdmFjeSBcclxuaW1wb3J0ICcuLi8uLi9zdHlsZXMvcHJpdmFjeS9wcml2YWN5LmNzcydcclxuXHJcbi8vIG5vdCBmb3VuZFxyXG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9ub3Rmb3VuZC9ub3Rmb3VuZC5jc3MnXHJcblxyXG4vLyBzZWN0aW9uIGJsb2Nrc1xyXG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9zZWN0aW9uYmxvY2tzL3NlY3Rpb25ibG9ja3MuY3NzJ1xyXG5cclxuLy8gc2hvcnQgcHJvamVjdCB2aWV3XHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzL3Nob3J0cHJvamVjdHZpZXcvc2hvcnRwcm9qZWN0dmlldy5jc3MnXHJcblxyXG4vLyBuZWVkaGVscCBcclxuaW1wb3J0ICcuLi8uLi9zdHlsZXMvbmVlZGhlbHAvbmVlZGhlbHAuY3NzJ1xyXG5cclxuLy8gY3NzIGZvciBhYm91dCBwYWdlIGFuZCBzZWN0aW9ucyBcclxuaW1wb3J0ICcuLi8uLi9zdHlsZXMvYWJvdXQvc2tpbGxzLmNzcydcclxuaW1wb3J0ICcuLi8uLi9zdHlsZXMvYWJvdXQvbXlyZWFkcy5jc3MnXHJcblxyXG4vLyBjc3MgZm9yIG1lc3NhZ2UgZm9ybVxyXG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9jb250YWN0cy9tZXNzYWdlLmNzcydcclxuXHJcbi8vIGNzcyBmb3IgcHJvamVjdCBoZWFkZXJcclxuaW1wb3J0ICcuLi8uLi9zdHlsZXMvcHJvamVjdHMvcHJvamVjdGhlYWRlci5jc3MnXHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzL3Byb2plY3RzL290aGVycHJvamVjdHMuY3NzJ1xyXG5cclxuLy8gY3NzIGZvciBpbmRpdmlkdWFsIHByb2plY3RcclxuaW1wb3J0ICcuLi8uLi9zdHlsZXMvaW5kaXZpZHVhbHByb2plY3QvaGVhZGVyLmNzcydcclxuaW1wb3J0ICcuLi8uLi9zdHlsZXMvaW5kaXZpZHVhbHByb2plY3QvcHJvamVjdGJvZHkuY3NzJ1xyXG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9pbmRpdmlkdWFscHJvamVjdC9hYm91dC5jc3MnXHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzL2luZGl2aWR1YWxwcm9qZWN0L2NhdGVnb3JpZXMuY3NzJ1xyXG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9pbmRpdmlkdWFscHJvamVjdC9sYXVuY2hsaW5rcy5jc3MnXHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzL2luZGl2aWR1YWxwcm9qZWN0L3NjcmVlbnMuY3NzJ1xyXG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9pbmRpdmlkdWFscHJvamVjdC90b29scy5jc3MnXHJcblxyXG5mdW5jdGlvbiBNeUFwcCAoe0NvbXBvbmVudCwgcGFnZVByb3BzLCByb3V0ZXJ9KXtcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPFN0YXRlUHJvdmlkZXI+XHJcbiAgICAgIDxBbmltYXRlUHJlc2VuY2UgZXhpdEJlZm9yZUVudGVyPlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30ga2V5PXtyb3V0ZXIucm91dGV9Lz5cclxuICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XHJcbiAgICA8L1N0YXRlUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBjcmVhdGVDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtzZXRUcmFuc2l0aW9uU3RhdGV9IGZyb20gJy4uL3BhZ2VhbmltYXRpb25zL21vdGlvbi9jb21tb24nXHJcblxyXG4vLyBnbG9iYWwgc3RhdGUgY29udGV4dCByb3V0ZVxyXG5leHBvcnQgY29uc3QgU3RhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXHJcblxyXG4vLyBzdGF0ZSBwcm92ZGVyXHJcbmV4cG9ydCBjbGFzcyBTdGF0ZVByb3ZpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBcclxuICAvLyBpbml0aWFsXHJcbiAgc3RhdGUgPSB7XHJcbiAgICBhY3RpdmVSb3V0ZTogJ2hvbWUnLFxyXG4gICAgbWVudUlzT3BlbjogZmFsc2UsXHJcbiAgICBtZW51SXNBbmltYXRpbmc6IGZhbHNlLFxyXG4gICAgaXNUcmFuc2l0aW9uaW5nOiAnaW5pdGlhbCcsXHJcbiAgICBleGl0TW9kZTogZmFsc2UsXHJcbiAgICBhbmltYXRpb246ICdpbml0aWFsJyxcclxuICB9XHJcblxyXG4gIC8vIGZ1bmN0aW9uIHRoYXQgd2lsbCBzZXQgdXBkYXRlIHRoZSBzdGF0ZVxyXG4gIHNldEFwcGxpY2F0aW9uU3RhdGUgPSAobmV3U3RhdGUpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAuLi5uZXdTdGF0ZVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vIHRoaXMgZnVuY3Rpb24gd2lsbCB1cGRhdGUgdGhlIHN0YXRlIGJhc2VkIGZyb20gXHJcbiAgLy8gd2hlcmUgdGhlIGJ1dHRvbiBpcyBjbGlja2VkXHJcbiAgc2V0VHJhbnNpdGlvblN0YXRlID0gKGZyb20pID0+IHtcclxuICAgIGlmKGZyb20gPT09ICd0b3AnKXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgbWVudUlzT3BlbjogIXRoaXMuc3RhdGUubWVudUlzT3BlbixcclxuICAgICAgICBleGl0TW9kZTogbW9kZShmcm9tKSxcclxuICAgICAgICBpc1RyYW5zaXRpb25pbmc6IHNldFRyYW5zaXRpb25TdGF0ZSh0aGlzLnN0YXRlLmlzVHJhbnNpdGlvbmluZyksXHJcbiAgICAgICAgYW5pbWF0aW9uOiBhbmltbW9kZShmcm9tKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgaWYoZnJvbSA9PT0gJ2JvdHRvbScpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZXhpdE1vZGU6IG1vZGUoZnJvbSksXHJcbiAgICAgICAgaXNUcmFuc2l0aW9uaW5nOiBzZXRUcmFuc2l0aW9uU3RhdGUodGhpcy5zdGF0ZS5pc1RyYW5zaXRpb25pbmcpLFxyXG4gICAgICAgIGFuaW1hdGlvbjogYW5pbW1vZGUoZnJvbSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGZ1bmN0aW9uIHRvIGdldCB0aGUgY3VycmVudCByb3V0ZVxyXG4gIHNldEFjdGl2ZVJvdXRlID0gKHJvdXRlKSA9PiB7XHJcbiAgICAvLyBpZiB0aGUgY3VycmVudCByb3V0ZSBkb2VzIG5vdCBtYXRjaCB0byB0aGUgb2xkIHJvdXRlXHJcbiAgICAvLyB0aGVuIHVwZGF0ZSB0aGUgYWN0aXZlIHJvdXRlIHN0YXRlXHJcbiAgICBpZihyb3V0ZSAhPSB0aGlzLnN0YXRlLmFjdGl2ZVJvdXRlKXtcclxuICAgICAgdGhpcy5zZXRBcHBsaWNhdGlvblN0YXRlKHsgYWN0aXZlUm91dGU6IHJvdXRlIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKXtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxTdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcclxuICAgICAgICBzdGF0ZTogdGhpcy5zdGF0ZSxcclxuICAgICAgICBzZXRTdGF0ZTogdGhpcy5zZXRBcHBsaWNhdGlvblN0YXRlLFxyXG4gICAgICAgIHNldEFjdGl2ZVJvdXRlOiB0aGlzLnNldEFjdGl2ZVJvdXRlLFxyXG4gICAgICAgIHNldFRyYW5zaXRpb25TdGF0ZTogdGhpcy5zZXRUcmFuc2l0aW9uU3RhdGVcclxuICAgICAgfX0+XHJcbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgIDwvU3RhdGVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuLy8gdGhpcyBmdW5jdGlvbiBjaGVja3MgaWYgdGhlIG1lbnUgYnV0dG9uIGlzIGNsaWNrXHJcbi8vIGFuZCB3aWxsIHJldHVybiBhIHN0cmluZyB0aGF0IHdpbGwgYW5pbWF0ZSBmcm9tIHRoZSB0b3BcclxuY29uc3QgbW9kZSA9IChmcm9tKSA9PiB7XHJcbiAgcmV0dXJuIGZyb20gPT09ICd0b3AnID8gJ3RvcEV4aXQnIDogJ2JvdHRvbUV4aXQnXHJcbn1cclxuXHJcbi8vIHRoaXMgZnVuY3Rpb24gY2hlY2tzIGlmIGFueSBvZiB0aGUgYnV0dG9uIGxpbmtzIFxyXG4vLyBpbiB0aGUgYm90dG9tIGlzIGNsaWNrIHRoYXQgd2lsbCBydW4gdGhlIHRyYW5zaXRpb25cclxuY29uc3QgYW5pbW1vZGUgPSAoZnJvbSkgPT4ge1xyXG4gIHJldHVybiBmcm9tID09PSAnYm90dG9tJyA/ICd0b3BBbmltYXRpb24nIDogJ2JvdHRvbUFuaW1hdGlvbidcclxufSIsIlxyXG4vLyB0aGlzIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIGEgc3RyaWluZyB0aGF0IHdpbGxcclxuLy8gZGV0ZXJtaW5lIG9mIHRoZSBjdXJyZW50IHN0YXRlIGhhcyB0byBiZSBpbml0aWFsIG9yIGluaXRpYWwgdHdvLlxyXG4vLyB0aGUgc3RyaW5nIHdpbGwgYmUgdXNlZCBhcyBhbiBpbml0aWFsIHZhbHVlIGZvciB0aGUgZnJhbWVyIG1vdGlvblxyXG4vLyBpbiBhbmltYXRpbmcgdGhlIHRyYW5zaXRpb25cclxuZXhwb3J0IGNvbnN0IHNldFRyYW5zaXRpb25TdGF0ZSA9IChzdGF0ZSkgPT4ge1xyXG4gIGlmIChzdGF0ZSA9PT0gJ2luaXRpYWxPbmUnKSByZXR1cm4gJ2luaXRpYWxUd28nXHJcbiAgaWYgKHN0YXRlID09PSAnaW5pdGlhbFR3bycpIHJldHVybiAnaW5pdGlhbE9uZSdcclxuICBpZiAoc3RhdGUgIT09ICdpbml0aWFsT25lJyB8fCBzdGF0ZSAhPT0gJ2luaXRpYWxUd28nKSB7XHJcbiAgICByZXR1cm4gJ2luaXRpYWxPbmUnXHJcbiAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9