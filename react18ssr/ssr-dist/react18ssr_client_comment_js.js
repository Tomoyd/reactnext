"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkssr_test"] = self["webpackChunkssr_test"] || []).push([["react18ssr_client_comment_js"],{

/***/ "./react18ssr/client/comment.js":
/*!**************************************!*\
  !*** ./react18ssr/client/comment.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useData */ \"./react18ssr/hooks/useData.js\");\n\n\n\nvar Comment = function Comment() {\n  var data = (0,_hooks_useData__WEBPACK_IMPORTED_MODULE_1__.useData)();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"Comment \", data);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comment);\n\n//# sourceURL=webpack://ssr-test/./react18ssr/client/comment.js?");

/***/ }),

/***/ "./react18ssr/hooks/useData.js":
/*!*************************************!*\
  !*** ./react18ssr/hooks/useData.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useData\": () => (/* binding */ useData)\n/* harmony export */ });\nvar createServerFetch = function createServerFetch() {\n  var promise = null;\n  var done = false;\n  var data;\n  return function fetchData() {\n    if (done) {\n      return data;\n    }\n\n    if (promise) {\n      throw promise;\n    }\n\n    promise = new Promise(function (resolve, reject) {\n      setTimeout(function () {\n        promise = null;\n        done = true;\n        data = [1, 2, 3, 4];\n        resolve();\n      }, 5 * 1000);\n    });\n    throw promise;\n  };\n};\n\nvar useData = createServerFetch();\n\n//# sourceURL=webpack://ssr-test/./react18ssr/hooks/useData.js?");

/***/ })

}]);