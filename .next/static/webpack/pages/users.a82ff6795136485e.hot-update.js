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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var C_Users_mrR_Documents_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_mrR_Documents_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_mrR_Documents_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Users = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        {\n            id: 1,\n            name: \"name\"\n        },\n        {\n            id: 2,\n            name: \"surname\"\n        }, \n    ]), users = ref[0], setUsers = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(_asyncToGenerator(C_Users_mrR_Documents_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return C_Users_mrR_Documents_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"users\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mrR\\\\Documents\\\\next\\\\pages\\\\users.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                children: users.map(function(user) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/users/\".concat(user.id),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                children: [\n                                    \" \",\n                                    user.name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\mrR\\\\Documents\\\\next\\\\pages\\\\users.js\",\n                                lineNumber: 22,\n                                columnNumber: 15\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mrR\\\\Documents\\\\next\\\\pages\\\\users.js\",\n                            lineNumber: 21,\n                            columnNumber: 13\n                        }, _this1)\n                    }, user.id, false, {\n                        fileName: \"C:\\\\Users\\\\mrR\\\\Documents\\\\next\\\\pages\\\\users.js\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mrR\\\\Documents\\\\next\\\\pages\\\\users.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mrR\\\\Documents\\\\next\\\\pages\\\\users.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this);\n};\n_s(Users, \"J6e2EcDyZ7/9VBum2r3BiaIBp5E=\");\n_c = Users;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDZjs7QUFFNUIsSUFBTUcsS0FBSyxHQUFHLFdBQU07OztJQUNsQixJQUEwQkgsR0FHeEIsR0FId0JBLCtDQUFRLENBQUM7UUFDakM7WUFBRUksRUFBRSxFQUFFLENBQUM7WUFBRUMsSUFBSSxFQUFFLE1BQU07U0FBRTtRQUN2QjtZQUFFRCxFQUFFLEVBQUUsQ0FBQztZQUFFQyxJQUFJLEVBQUUsU0FBUztTQUFFO0tBQzNCLENBQUMsRUFQSixLQUljLEdBQWNMLEdBR3hCLEdBSFUsRUFKZCxRQUl3QixHQUFJQSxHQUd4QixHQUhvQjtJQUt4QkMsZ0RBQVMsQ0FBQywyS0FBVzs7Ozs7Ozs7S0FHcEIsSUFBRSxFQUFFLENBQUM7SUFFSixxQkFDRSw4REFBQ08sS0FBRzs7MEJBQ0YsOERBQUNDLElBQUU7MEJBQUMsT0FBSzs7Ozs7cUJBQUs7MEJBQ2QsOERBQUNDLElBQUU7MEJBQ0FKLEtBQUssQ0FBQ0ssR0FBRyxDQUFDLFNBQUNDLElBQUk7eUNBQ2QsOERBQUNDLElBQUU7a0NBQ0QsNEVBQUNYLGtEQUFJOzRCQUFDWSxJQUFJLEVBQUUsU0FBUSxDQUFVLE9BQVJGLElBQUksQ0FBQ1IsRUFBRSxDQUFFO3NDQUM3Qiw0RUFBQ1csR0FBQzs7b0NBQUMsR0FBQztvQ0FBQ0gsSUFBSSxDQUFDUCxJQUFJOzs7Ozs7c0NBQUs7Ozs7O2tDQUNkO3VCQUhBTyxJQUFJLENBQUNSLEVBQUU7Ozs7OEJBSVg7aUJBQ04sQ0FBQzs7Ozs7cUJBQ0M7Ozs7OzthQUNELENBQ047Q0FDSDtHQXpCS0QsS0FBSztBQUFMQSxLQUFBQSxLQUFLOztBQTJCWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXJzLmpzPzAwNjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5cclxuY29uc3QgVXNlcnMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSB1c2VTdGF0ZShbXHJcbiAgICB7IGlkOiAxLCBuYW1lOiBcIm5hbWVcIiB9LFxyXG4gICAgeyBpZDogMiwgbmFtZTogXCJzdXJuYW1lXCIgfSxcclxuICBdKTtcclxuXHJcbnVzZUVmZmVjdChhc3luYygpID0+IHtcclxuXHJcblxyXG59LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT51c2VyczwvaDE+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7dXNlcnMubWFwKCh1c2VyKSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXt1c2VyLmlkfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC91c2Vycy8ke3VzZXIuaWR9YH0+XHJcbiAgICAgICAgICAgICAgPGE+IHt1c2VyLm5hbWV9PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJzO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCByZXNwb25jZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzXCIpO1xyXG4gIGNvbnN0IHVzZXJzID0gYXdhaXQgcmVzcG9uY2UuanNvbigpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge30sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJVc2VycyIsImlkIiwibmFtZSIsInVzZXJzIiwic2V0VXNlcnMiLCJkaXYiLCJoMSIsInVsIiwibWFwIiwidXNlciIsImxpIiwiaHJlZiIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/users.js\n");

/***/ })

});