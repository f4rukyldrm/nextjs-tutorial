"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./src/app/dashboard/page.js":
/*!***********************************!*\
  !*** ./src/app/dashboard/page.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/dashboard/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"(app-pages-browser)/./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Dashboard() {\n    var _session_data, _session;\n    _s();\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const fetcher = function() {\n        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n            args[_key] = arguments[_key];\n        }\n        return fetch(...args).then((res)=>res.json());\n    };\n    const { data, mutate, error, isLoading } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/api/posts?username=\".concat((_session = session) === null || _session === void 0 ? void 0 : (_session_data = _session.data) === null || _session_data === void 0 ? void 0 : _session_data.user.name), fetcher);\n    if (session.status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/home/faruk/web_projeler/mern/nextjs-tutorial/src/app/dashboard/page.js\",\n            lineNumber: 20,\n            columnNumber: 16\n        }, this);\n    }\n    if (session.status === \"unauthenticated\") {\n        var _router;\n        (_router = router) === null || _router === void 0 ? void 0 : _router.push(\"/dashboard/login\");\n    }\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const title = e.target[0].value;\n        const desc = e.target[1].value;\n        const img = e.target[2].value;\n        const content = e.target[3].value;\n        try {\n            await fetch(\"/api/posts\", {\n                method: \"POST\",\n                body: JSON.stringify({\n                    title,\n                    desc,\n                    img,\n                    content,\n                    username: session.data.user.name\n                })\n            });\n            mutate();\n        } catch (err) {}\n    };\n    if (session.status === \"authenticated\") {\n        var _data;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().posts),\n                    children: isLoading ? \"loading\" : (_data = data) === null || _data === void 0 ? void 0 : _data.map((post1)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().post),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().imgContainer),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        src: post1.img,\n                                        alt: \"\",\n                                        width: 200,\n                                        height: 100,\n                                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().img)\n                                    }, void 0, false, {\n                                        fileName: \"/home/faruk/web_projeler/mern/nextjs-tutorial/src/app/dashboard/page.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 37\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/faruk/web_projeler/mern/nextjs-tutorial/src/app/dashboard/page.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 33\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().postTitle),\n                                    children: post1.title\n                                }, void 0, false, {\n                                    fileName: \"/home/faruk/web_projeler/mern/nextjs-tutorial/src/app/dashboard/page.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 33\n                                }, this),\n                                \"))\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default()[\"delete\"]),\n                                    children: \"X\"\n                                }, void 0, false, {\n                                    fileName: \"/home/faruk/web_projeler/mern/nextjs-tutorial/src/app/dashboard/page.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 33\n                                }, this)\n                            ]\n                        }, post1._id, true, {\n                            fileName: \"/home/faruk/web_projeler/mern/nextjs-tutorial/src/app/dashboard/page.js\",\n                            lineNumber: 56,\n                            columnNumber: 29\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/home/faruk/web_projeler/mern/nextjs-tutorial/src/app/dashboard/page.js\",\n                    lineNumber: 53,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default()[\"new\"]),\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"Add New Post\"\n                        }, void 0, false, {\n                            fileName: \"/home/faruk/web_projeler/mern/nextjs-tutorial/src/app/dashboard/page.js\",\n                            lineNumber: 68,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Title\",\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().input)\n                        }, void 0, false, {\n                            fileName: \"/home/faruk/web_projeler/mern/nextjs-tutorial/src/app/dashboard/page.js\",\n                            lineNumber: 69,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Description\",\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().input)\n                        }, void 0, false, {\n                            fileName: \"/home/faruk/web_projeler/mern/nextjs-tutorial/src/app/dashboard/page.js\",\n                            lineNumber: 70,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Image\",\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().input)\n                        }, void 0, false, {\n                            fileName: \"/home/faruk/web_projeler/mern/nextjs-tutorial/src/app/dashboard/page.js\",\n                            lineNumber: 71,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            placeholder: \"Content\",\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().textArea),\n                            cols: \"30\",\n                            rows: \"10\"\n                        }, void 0, false, {\n                            fileName: \"/home/faruk/web_projeler/mern/nextjs-tutorial/src/app/dashboard/page.js\",\n                            lineNumber: 73,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),\n                            onClick: ()=>handleDelete(post._id),\n                            children: \"Send\"\n                        }, void 0, false, {\n                            fileName: \"/home/faruk/web_projeler/mern/nextjs-tutorial/src/app/dashboard/page.js\",\n                            lineNumber: 74,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/faruk/web_projeler/mern/nextjs-tutorial/src/app/dashboard/page.js\",\n                    lineNumber: 67,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/faruk/web_projeler/mern/nextjs-tutorial/src/app/dashboard/page.js\",\n            lineNumber: 52,\n            columnNumber: 13\n        }, this);\n    }\n// const [data, setData] = useState([]);\n// const [err, setErr] = useState(false);\n// const [isLoading, setIsLoading] = useState(false);\n// useEffect(() => {\n//     const getData = async () => {\n//         setIsLoading(true);\n//         const res = await fetch(\"https://jsonplaceholder.typicode.com/posts\", {\n//             cache: \"no-store\",\n//         });\n//         if (!res.ok) {\n//             setErr(true);\n//         }\n//         const data = await res.json();\n//         setData(data);\n//         setIsLoading(false);\n//     }\n//     getData();\n// }, []);\n}\n_s(Dashboard, \"uMf7jkJO4wD4IHoeUqqvgKzxYuA=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRWtEO0FBQ1g7QUFDZDtBQUNvQjtBQUNEO0FBQ2I7QUFFL0IsU0FBU1E7UUFNb0VDLGVBQUFBOztJQUp6RSxNQUFNQSxVQUFVSiwyREFBVUE7SUFDMUIsTUFBTUssU0FBU0osMERBQVNBO0lBRXhCLE1BQU1LLFVBQVU7eUNBQUlDO1lBQUFBOztlQUFTQyxTQUFTRCxNQUFNRSxJQUFJLENBQUNDLENBQUFBLE1BQU9BLElBQUlDLElBQUk7SUFBRTtJQUNsRSxNQUFNLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFNBQVMsRUFBRSxHQUFHaEIsK0NBQU1BLENBQUMsdUJBQWdELFFBQXpCSyxXQUFBQSxxQkFBQUEsZ0NBQUFBLGdCQUFBQSxTQUFTUSxJQUFJLGNBQWJSLG9DQUFBQSxjQUFlWSxJQUFJLENBQUNDLElBQUksR0FBSVg7SUFHckcsSUFBSUYsUUFBUWMsTUFBTSxLQUFLLFdBQVc7UUFDOUIscUJBQU8sOERBQUNDO3NCQUFFOzs7Ozs7SUFDZDtJQUNBLElBQUlmLFFBQVFjLE1BQU0sS0FBSyxtQkFBbUI7WUFDdENiO1NBQUFBLFVBQUFBLG9CQUFBQSw4QkFBQUEsUUFBUWUsSUFBSSxDQUFDO0lBQ2pCO0lBR0EsTUFBTUMsZUFBZSxPQUFPQztRQUN4QkEsRUFBRUMsY0FBYztRQUVoQixNQUFNQyxRQUFRRixFQUFFRyxNQUFNLENBQUMsRUFBRSxDQUFDQyxLQUFLO1FBQy9CLE1BQU1DLE9BQU9MLEVBQUVHLE1BQU0sQ0FBQyxFQUFFLENBQUNDLEtBQUs7UUFDOUIsTUFBTUUsTUFBTU4sRUFBRUcsTUFBTSxDQUFDLEVBQUUsQ0FBQ0MsS0FBSztRQUM3QixNQUFNRyxVQUFVUCxFQUFFRyxNQUFNLENBQUMsRUFBRSxDQUFDQyxLQUFLO1FBRWpDLElBQUk7WUFFQSxNQUFNbEIsTUFBTSxjQUFjO2dCQUN0QnNCLFFBQVE7Z0JBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFDakJUO29CQUFPRztvQkFBTUM7b0JBQUtDO29CQUFTSyxVQUFVOUIsUUFBUVEsSUFBSSxDQUFDSSxJQUFJLENBQUNDLElBQUk7Z0JBQy9EO1lBQ0o7WUFDQUo7UUFFSixFQUFFLE9BQU9zQixLQUFLLENBRWQ7SUFDSjtJQUVBLElBQUkvQixRQUFRYyxNQUFNLEtBQUssaUJBQWlCO1lBS0lOO1FBSnhDLHFCQUNJLDhEQUFDd0I7WUFBSUMsV0FBV3ZDLG1FQUFnQjs7OEJBQzVCLDhEQUFDc0M7b0JBQUlDLFdBQVd2QywrREFBWTs4QkFFcEJpQixZQUFZLGFBQVlILFFBQUFBLGtCQUFBQSw0QkFBQUEsTUFBTTRCLEdBQUcsQ0FBQ0MsQ0FBQUEsc0JBQzlCLDhEQUFDTDs0QkFBSUMsV0FBV3ZDLDhEQUFXOzs4Q0FDdkIsOERBQUNzQztvQ0FBSUMsV0FBV3ZDLHNFQUFtQjs4Q0FDL0IsNEVBQUNJLG1EQUFLQTt3Q0FBQ3lDLEtBQUtGLE1BQUtiLEdBQUc7d0NBQUVnQixLQUFJO3dDQUFHQyxPQUFPO3dDQUFLQyxRQUFRO3dDQUFLVCxXQUFXdkMsNkRBQVU7Ozs7Ozs7Ozs7OzhDQUUvRSw4REFBQ2lEO29DQUFHVixXQUFXdkMsbUVBQWdCOzhDQUFHMkMsTUFBS2pCLEtBQUs7Ozs7OztnQ0FBTTs4Q0FFbEQsOERBQUN5QjtvQ0FBS1osV0FBV3ZDLG1FQUFhOzhDQUFFOzs7Ozs7OzJCQU5GMkMsTUFBS1UsR0FBRzs7Ozs7Ozs7Ozs4QkFXdEQsOERBQUNDO29CQUFLZixXQUFXdkMsZ0VBQVU7b0JBQUV3RCxVQUFVakM7O3NDQUNuQyw4REFBQ2tDO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNDOzRCQUFNQyxNQUFLOzRCQUFPQyxhQUFZOzRCQUFRckIsV0FBV3ZDLCtEQUFZOzs7Ozs7c0NBQzlELDhEQUFDMEQ7NEJBQU1DLE1BQUs7NEJBQU9DLGFBQVk7NEJBQWNyQixXQUFXdkMsK0RBQVk7Ozs7OztzQ0FDcEUsOERBQUMwRDs0QkFBTUMsTUFBSzs0QkFBT0MsYUFBWTs0QkFBUXJCLFdBQVd2QywrREFBWTs7Ozs7O3NDQUU5RCw4REFBQzZEOzRCQUFTRCxhQUFZOzRCQUFVckIsV0FBV3ZDLGtFQUFlOzRCQUFFK0QsTUFBSzs0QkFBS0MsTUFBSzs7Ozs7O3NDQUMzRSw4REFBQ0M7NEJBQU8xQixXQUFXdkMsZ0VBQWE7NEJBQUVrRSxTQUFTLElBQU1DLGFBQWF4QixLQUFLVSxHQUFHO3NDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJekY7QUFFQSx3Q0FBd0M7QUFDeEMseUNBQXlDO0FBQ3pDLHFEQUFxRDtBQUVyRCxvQkFBb0I7QUFDcEIsb0NBQW9DO0FBQ3BDLDhCQUE4QjtBQUU5QixrRkFBa0Y7QUFDbEYsaUNBQWlDO0FBQ2pDLGNBQWM7QUFFZCx5QkFBeUI7QUFDekIsNEJBQTRCO0FBQzVCLFlBQVk7QUFFWix5Q0FBeUM7QUFFekMseUJBQXlCO0FBQ3pCLCtCQUErQjtBQUMvQixRQUFRO0FBQ1IsaUJBQWlCO0FBQ2pCLFVBQVU7QUFDZDtHQTdGU2hEOztRQUVXSCx1REFBVUE7UUFDWEMsc0RBQVNBO1FBR21CRiwyQ0FBTUE7OztLQU41Q0k7QUErRlQsK0RBQWVBLFNBQVNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9kYXNoYm9hcmQvcGFnZS5qcz9kMmI4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcGFnZS5tb2R1bGUuY3NzJztcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xuXG4gICAgY29uc3Qgc2Vzc2lvbiA9IHVzZVNlc3Npb24oKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGNvbnN0IGZldGNoZXIgPSAoLi4uYXJncykgPT4gZmV0Y2goLi4uYXJncykudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XG4gICAgY29uc3QgeyBkYXRhLCBtdXRhdGUsIGVycm9yLCBpc0xvYWRpbmcgfSA9IHVzZVNXUihgL2FwaS9wb3N0cz91c2VybmFtZT0ke3Nlc3Npb24/LmRhdGE/LnVzZXIubmFtZX1gLCBmZXRjaGVyKTtcblxuXG4gICAgaWYgKHNlc3Npb24uc3RhdHVzID09PSAnbG9hZGluZycpIHtcbiAgICAgICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICAgIH1cbiAgICBpZiAoc2Vzc2lvbi5zdGF0dXMgPT09ICd1bmF1dGhlbnRpY2F0ZWQnKSB7XG4gICAgICAgIHJvdXRlcj8ucHVzaCgnL2Rhc2hib2FyZC9sb2dpbicpO1xuICAgIH1cblxuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZS50YXJnZXRbMF0udmFsdWU7XG4gICAgICAgIGNvbnN0IGRlc2MgPSBlLnRhcmdldFsxXS52YWx1ZTtcbiAgICAgICAgY29uc3QgaW1nID0gZS50YXJnZXRbMl0udmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBlLnRhcmdldFszXS52YWx1ZTtcblxuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICBhd2FpdCBmZXRjaCgnL2FwaS9wb3N0cycsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlLCBkZXNjLCBpbWcsIGNvbnRlbnQsIHVzZXJuYW1lOiBzZXNzaW9uLmRhdGEudXNlci5uYW1lXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBtdXRhdGUoKTtcblxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNlc3Npb24uc3RhdHVzID09PSAnYXV0aGVudGljYXRlZCcpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RzfT5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nID8gJ2xvYWRpbmcnIDogZGF0YT8ubWFwKHBvc3QgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdH0ga2V5PXtwb3N0Ll9pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1nQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3Bvc3QuaW1nfSBhbHQ9Jycgd2lkdGg9ezIwMH0gaGVpZ2h0PXsxMDB9IGNsYXNzTmFtZT17c3R5bGVzLmltZ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0VGl0bGV9Pntwb3N0LnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRlbGV0ZX0+WDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5uZXd9IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICA8aDE+QWRkIE5ldyBQb3N0PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9J1RpdGxlJyBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9J0Rlc2NyaXB0aW9uJyBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9J0ltYWdlJyBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0gLz5cblxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcGxhY2Vob2xkZXI9J0NvbnRlbnQnIGNsYXNzTmFtZT17c3R5bGVzLnRleHRBcmVhfSBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKHBvc3QuX2lkKX0+U2VuZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2ID5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIC8vIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgICAvLyBjb25zdCBbZXJyLCBzZXRFcnJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIC8vIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vICAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuXG4gICAgLy8gICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0c1wiLCB7XG4gICAgLy8gICAgICAgICAgICAgY2FjaGU6IFwibm8tc3RvcmVcIixcbiAgICAvLyAgICAgICAgIH0pO1xuXG4gICAgLy8gICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgIC8vICAgICAgICAgICAgIHNldEVycih0cnVlKTtcbiAgICAvLyAgICAgICAgIH1cblxuICAgIC8vICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICAvLyAgICAgICAgIHNldERhdGEoZGF0YSk7XG4gICAgLy8gICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGdldERhdGEoKTtcbiAgICAvLyB9LCBbXSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwidXNlU1dSIiwidXNlU2Vzc2lvbiIsInVzZVJvdXRlciIsIkltYWdlIiwiRGFzaGJvYXJkIiwic2Vzc2lvbiIsInJvdXRlciIsImZldGNoZXIiLCJhcmdzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJtdXRhdGUiLCJlcnJvciIsImlzTG9hZGluZyIsInVzZXIiLCJuYW1lIiwic3RhdHVzIiwicCIsInB1c2giLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0aXRsZSIsInRhcmdldCIsInZhbHVlIiwiZGVzYyIsImltZyIsImNvbnRlbnQiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInVzZXJuYW1lIiwiZXJyIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwicG9zdHMiLCJtYXAiLCJwb3N0IiwiaW1nQ29udGFpbmVyIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJoMiIsInBvc3RUaXRsZSIsInNwYW4iLCJkZWxldGUiLCJfaWQiLCJmb3JtIiwibmV3Iiwib25TdWJtaXQiLCJoMSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidGV4dGFyZWEiLCJ0ZXh0QXJlYSIsImNvbHMiLCJyb3dzIiwiYnV0dG9uIiwib25DbGljayIsImhhbmRsZURlbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/page.js\n"));

/***/ })

});