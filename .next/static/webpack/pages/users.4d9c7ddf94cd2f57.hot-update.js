"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users",{

/***/ "./pages/users.js":
/*!************************!*\
  !*** ./pages/users.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Maincontainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Maincontainer */ \"./components/Maincontainer.js\");\nvar _this = undefined;\n\n\n\nvar Users = function(param) {\n    var users = param.users;\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Maincontainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        keyword: \"mainpage\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"users\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mrR\\\\Documents\\\\next\\\\pages\\\\users.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: users.map(function(user) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/users/\".concat(user.id),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: [\n                                    \" \",\n                                    user.name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\mrR\\\\Documents\\\\next\\\\pages\\\\users.js\",\n                                lineNumber: 12,\n                                columnNumber: 15\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mrR\\\\Documents\\\\next\\\\pages\\\\users.js\",\n                            lineNumber: 11,\n                            columnNumber: 13\n                        }, _this1)\n                    }, user.id, false, {\n                        fileName: \"C:\\\\Users\\\\mrR\\\\Documents\\\\next\\\\pages\\\\users.js\",\n                        lineNumber: 10,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mrR\\\\Documents\\\\next\\\\pages\\\\users.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mrR\\\\Documents\\\\next\\\\pages\\\\users.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, _this);\n};\n_c = Users;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBNEI7QUFDNEI7QUFDeEQsSUFBTUUsS0FBSyxHQUFHLGdCQUFhO1FBQVhDLEtBQUssU0FBTEEsS0FBSzs7SUFFbkIscUJBQ0UsOERBQUNGLGlFQUFhO1FBQUVHLE9BQU8sRUFBRSxVQUFVOzswQkFDakMsOERBQUNDLElBQUU7MEJBQUMsT0FBSzs7Ozs7cUJBQUs7MEJBQ2QsOERBQUNDLElBQUU7MEJBQ0FILEtBQUssQ0FBQ0ksR0FBRyxDQUFDLFNBQUNDLElBQUk7eUNBQ2QsOERBQUNDLElBQUU7a0NBQ0QsNEVBQUNULGtEQUFJOzRCQUFDVSxJQUFJLEVBQUUsU0FBUSxDQUFVLE9BQVJGLElBQUksQ0FBQ0csRUFBRSxDQUFFO3NDQUM3Qiw0RUFBQ0MsR0FBQzs7b0NBQUMsR0FBQztvQ0FBQ0osSUFBSSxDQUFDSyxJQUFJOzs7Ozs7c0NBQUs7Ozs7O2tDQUNkO3VCQUhBTCxJQUFJLENBQUNHLEVBQUU7Ozs7OEJBSVg7aUJBQ04sQ0FBQzs7Ozs7cUJBQ0M7Ozs7OzthQUNTLENBQ2hCO0NBQ0g7QUFoQktULEtBQUFBLEtBQUs7O0FBa0JYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMuanM/MDA2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IE1haW5jb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTWFpbmNvbnRhaW5lclwiO1xyXG5jb25zdCBVc2VycyA9ICh7dXNlcnN9KSA9PiB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TWFpbmNvbnRhaW5lciAga2V5d29yZD17XCJtYWlucGFnZVwifT5cclxuICAgICAgPGgxPnVzZXJzPC9oMT5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHt1c2Vycy5tYXAoKHVzZXIpID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e3VzZXIuaWR9PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL3VzZXJzLyR7dXNlci5pZH1gfT5cclxuICAgICAgICAgICAgICA8YT4ge3VzZXIubmFtZX08L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L01haW5jb250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJzO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCByZXNwb25jZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzXCIpO1xyXG4gIGNvbnN0IHVzZXJzID0gYXdhaXQgcmVzcG9uY2UuanNvbigpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge3VzZXJzfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIkxpbmsiLCJNYWluY29udGFpbmVyIiwiVXNlcnMiLCJ1c2VycyIsImtleXdvcmQiLCJoMSIsInVsIiwibWFwIiwidXNlciIsImxpIiwiaHJlZiIsImlkIiwiYSIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/users.js\n");

/***/ })

});