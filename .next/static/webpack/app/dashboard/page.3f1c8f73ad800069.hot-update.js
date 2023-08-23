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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/dashboard/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"(app-pages-browser)/./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Dashboard() {\n    var _session_data, _session;\n    _s();\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const fetcher = function() {\n        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n            args[_key] = arguments[_key];\n        }\n        return fetch(...args).then((res)=>res.json());\n    };\n    const { data, mutate, error, isLoading } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/api/posts?username=\".concat((_session = session) === null || _session === void 0 ? void 0 : (_session_data = _session.data) === null || _session_data === void 0 ? void 0 : _session_data.user.name), fetcher);\n    if (session.status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/home/faruk/web_projeler/mern/nextjs-tutorial/src/app/dashboard/page.js\",\n            lineNumber: 20,\n            columnNumber: 16\n        }, this);\n    }\n    if (session.status === \"unauthenticated\") {\n        var _router;\n        (_router = router) === null || _router === void 0 ? void 0 : _router.push(\"/dashboard/login\");\n    }\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const title = e.target[0].value;\n        const desc = e.target[1].value;\n        const img = e.target[2].value;\n        const content = e.target[3].value;\n        try {\n            await fetch(\"/api/posts\", {\n                method: \"POST\",\n                body: JSON.stringify({\n                    title,\n                    desc,\n                    img,\n                    content,\n                    username: session.data.user.name\n                })\n            });\n            mutate();\n        } catch (err) {}\n    };\n    const handleDelete = async (id)=>{\n        try {\n            await fetch(\"/api/posts/\".concat(id), {\n                method: \"DELETE\"\n            });\n            mutate();\n        } catch (error) {\n            log;\n        }\n    };\n    if (session.status === \"authenticated\") {\n        var _data;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().posts),\n                    children: isLoading ? \"loading\" : (_data = data) === null || _data === void 0 ? void 0 : _data.map((post1)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().post),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().imgContainer),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        src: post1.img,\n                                        alt: \"\",\n                                        width: 200,\n                                        height: 100,\n                                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().img)\n                                    }, void 0, false, {\n                                        fileName: \"/home/faruk/web_projeler/mern/nextjs-tutorial/src/app/dashboard/page.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 37\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/faruk/web_projeler/mern/nextjs-tutorial/src/app/dashboard/page.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 33\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().postTitle),\n                                    children: post1.title\n                                }, void 0, false, {\n                                    fileName: \"/home/faruk/web_projeler/mern/nextjs-tutorial/src/app/dashboard/page.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 33\n                                }, this),\n                                \"))\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default()[\"delete\"]),\n                                    children: \"X\"\n                                }, void 0, false, {\n                                    fileName: \"/home/faruk/web_projeler/mern/nextjs-tutorial/src/app/dashboard/page.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 33\n                                }, this)\n                            ]\n                        }, post1._id, true, {\n                            fileName: \"/home/faruk/web_projeler/mern/nextjs-tutorial/src/app/dashboard/page.js\",\n                            lineNumber: 67,\n                            columnNumber: 29\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/home/faruk/web_projeler/mern/nextjs-tutorial/src/app/dashboard/page.js\",\n                    lineNumber: 64,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default()[\"new\"]),\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"Add New Post\"\n                        }, void 0, false, {\n                            fileName: \"/home/faruk/web_projeler/mern/nextjs-tutorial/src/app/dashboard/page.js\",\n                            lineNumber: 79,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Title\",\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().input)\n                        }, void 0, false, {\n                            fileName: \"/home/faruk/web_projeler/mern/nextjs-tutorial/src/app/dashboard/page.js\",\n                            lineNumber: 80,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Description\",\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().input)\n                        }, void 0, false, {\n                            fileName: \"/home/faruk/web_projeler/mern/nextjs-tutorial/src/app/dashboard/page.js\",\n                            lineNumber: 81,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Image\",\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().input)\n                        }, void 0, false, {\n                            fileName: \"/home/faruk/web_projeler/mern/nextjs-tutorial/src/app/dashboard/page.js\",\n                            lineNumber: 82,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            placeholder: \"Content\",\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().textArea),\n                            cols: \"30\",\n                            rows: \"10\"\n                        }, void 0, false, {\n                            fileName: \"/home/faruk/web_projeler/mern/nextjs-tutorial/src/app/dashboard/page.js\",\n                            lineNumber: 84,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),\n                            onClick: ()=>handleDelete(post._id),\n                            children: \"Send\"\n                        }, void 0, false, {\n                            fileName: \"/home/faruk/web_projeler/mern/nextjs-tutorial/src/app/dashboard/page.js\",\n                            lineNumber: 85,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/faruk/web_projeler/mern/nextjs-tutorial/src/app/dashboard/page.js\",\n                    lineNumber: 78,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/faruk/web_projeler/mern/nextjs-tutorial/src/app/dashboard/page.js\",\n            lineNumber: 63,\n            columnNumber: 13\n        }, this);\n    }\n// const [data, setData] = useState([]);\n// const [err, setErr] = useState(false);\n// const [isLoading, setIsLoading] = useState(false);\n// useEffect(() => {\n//     const getData = async () => {\n//         setIsLoading(true);\n//         const res = await fetch(\"https://jsonplaceholder.typicode.com/posts\", {\n//             cache: \"no-store\",\n//         });\n//         if (!res.ok) {\n//             setErr(true);\n//         }\n//         const data = await res.json();\n//         setData(data);\n//         setIsLoading(false);\n//     }\n//     getData();\n// }, []);\n}\n_s(Dashboard, \"uMf7jkJO4wD4IHoeUqqvgKzxYuA=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRWtEO0FBQ1g7QUFDZDtBQUNvQjtBQUNEO0FBQ2I7QUFFL0IsU0FBU1E7UUFNb0VDLGVBQUFBOztJQUp6RSxNQUFNQSxVQUFVSiwyREFBVUE7SUFDMUIsTUFBTUssU0FBU0osMERBQVNBO0lBRXhCLE1BQU1LLFVBQVU7eUNBQUlDO1lBQUFBOztlQUFTQyxTQUFTRCxNQUFNRSxJQUFJLENBQUNDLENBQUFBLE1BQU9BLElBQUlDLElBQUk7SUFBRTtJQUNsRSxNQUFNLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFNBQVMsRUFBRSxHQUFHaEIsK0NBQU1BLENBQUMsdUJBQWdELFFBQXpCSyxXQUFBQSxxQkFBQUEsZ0NBQUFBLGdCQUFBQSxTQUFTUSxJQUFJLGNBQWJSLG9DQUFBQSxjQUFlWSxJQUFJLENBQUNDLElBQUksR0FBSVg7SUFHckcsSUFBSUYsUUFBUWMsTUFBTSxLQUFLLFdBQVc7UUFDOUIscUJBQU8sOERBQUNDO3NCQUFFOzs7Ozs7SUFDZDtJQUNBLElBQUlmLFFBQVFjLE1BQU0sS0FBSyxtQkFBbUI7WUFDdENiO1NBQUFBLFVBQUFBLG9CQUFBQSw4QkFBQUEsUUFBUWUsSUFBSSxDQUFDO0lBQ2pCO0lBR0EsTUFBTUMsZUFBZSxPQUFPQztRQUN4QkEsRUFBRUMsY0FBYztRQUVoQixNQUFNQyxRQUFRRixFQUFFRyxNQUFNLENBQUMsRUFBRSxDQUFDQyxLQUFLO1FBQy9CLE1BQU1DLE9BQU9MLEVBQUVHLE1BQU0sQ0FBQyxFQUFFLENBQUNDLEtBQUs7UUFDOUIsTUFBTUUsTUFBTU4sRUFBRUcsTUFBTSxDQUFDLEVBQUUsQ0FBQ0MsS0FBSztRQUM3QixNQUFNRyxVQUFVUCxFQUFFRyxNQUFNLENBQUMsRUFBRSxDQUFDQyxLQUFLO1FBRWpDLElBQUk7WUFFQSxNQUFNbEIsTUFBTSxjQUFjO2dCQUN0QnNCLFFBQVE7Z0JBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFDakJUO29CQUFPRztvQkFBTUM7b0JBQUtDO29CQUFTSyxVQUFVOUIsUUFBUVEsSUFBSSxDQUFDSSxJQUFJLENBQUNDLElBQUk7Z0JBQy9EO1lBQ0o7WUFDQUo7UUFFSixFQUFFLE9BQU9zQixLQUFLLENBRWQ7SUFDSjtJQUVBLE1BQU1DLGVBQWUsT0FBT0M7UUFDeEIsSUFBSTtZQUNBLE1BQU03QixNQUFNLGNBQWlCLE9BQUg2QixLQUFLO2dCQUMzQlAsUUFBTztZQUNYO1lBQ0FqQjtRQUNKLEVBQUUsT0FBT0MsT0FBTztZQUN4QndCO1FBQ1E7SUFDSjtJQUVBLElBQUlsQyxRQUFRYyxNQUFNLEtBQUssaUJBQWlCO1lBS0lOO1FBSnhDLHFCQUNJLDhEQUFDMkI7WUFBSUMsV0FBVzFDLG1FQUFnQjs7OEJBQzVCLDhEQUFDeUM7b0JBQUlDLFdBQVcxQywrREFBWTs4QkFFcEJpQixZQUFZLGFBQVlILFFBQUFBLGtCQUFBQSw0QkFBQUEsTUFBTStCLEdBQUcsQ0FBQ0MsQ0FBQUEsc0JBQzlCLDhEQUFDTDs0QkFBSUMsV0FBVzFDLDhEQUFXOzs4Q0FDdkIsOERBQUN5QztvQ0FBSUMsV0FBVzFDLHNFQUFtQjs4Q0FDL0IsNEVBQUNJLG1EQUFLQTt3Q0FBQzRDLEtBQUtGLE1BQUtoQixHQUFHO3dDQUFFbUIsS0FBSTt3Q0FBR0MsT0FBTzt3Q0FBS0MsUUFBUTt3Q0FBS1QsV0FBVzFDLDZEQUFVOzs7Ozs7Ozs7Ozs4Q0FFL0UsOERBQUNvRDtvQ0FBR1YsV0FBVzFDLG1FQUFnQjs4Q0FBRzhDLE1BQUtwQixLQUFLOzs7Ozs7Z0NBQU07OENBRWxELDhEQUFDNEI7b0NBQUtaLFdBQVcxQyxtRUFBYTs4Q0FBRTs7Ozs7OzsyQkFORjhDLE1BQUtVLEdBQUc7Ozs7Ozs7Ozs7OEJBV3RELDhEQUFDQztvQkFBS2YsV0FBVzFDLGdFQUFVO29CQUFFMkQsVUFBVXBDOztzQ0FDbkMsOERBQUNxQztzQ0FBRzs7Ozs7O3NDQUNKLDhEQUFDQzs0QkFBTUMsTUFBSzs0QkFBT0MsYUFBWTs0QkFBUXJCLFdBQVcxQywrREFBWTs7Ozs7O3NDQUM5RCw4REFBQzZEOzRCQUFNQyxNQUFLOzRCQUFPQyxhQUFZOzRCQUFjckIsV0FBVzFDLCtEQUFZOzs7Ozs7c0NBQ3BFLDhEQUFDNkQ7NEJBQU1DLE1BQUs7NEJBQU9DLGFBQVk7NEJBQVFyQixXQUFXMUMsK0RBQVk7Ozs7OztzQ0FFOUQsOERBQUNnRTs0QkFBU0QsYUFBWTs0QkFBVXJCLFdBQVcxQyxrRUFBZTs0QkFBRWtFLE1BQUs7NEJBQUtDLE1BQUs7Ozs7OztzQ0FDM0UsOERBQUNDOzRCQUFPMUIsV0FBVzFDLGdFQUFhOzRCQUFFcUUsU0FBUyxJQUFNL0IsYUFBYVEsS0FBS1UsR0FBRztzQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSXpGO0FBRUEsd0NBQXdDO0FBQ3hDLHlDQUF5QztBQUN6QyxxREFBcUQ7QUFFckQsb0JBQW9CO0FBQ3BCLG9DQUFvQztBQUNwQyw4QkFBOEI7QUFFOUIsa0ZBQWtGO0FBQ2xGLGlDQUFpQztBQUNqQyxjQUFjO0FBRWQseUJBQXlCO0FBQ3pCLDRCQUE0QjtBQUM1QixZQUFZO0FBRVoseUNBQXlDO0FBRXpDLHlCQUF5QjtBQUN6QiwrQkFBK0I7QUFDL0IsUUFBUTtBQUNSLGlCQUFpQjtBQUNqQixVQUFVO0FBQ2Q7R0F4R1NuRDs7UUFFV0gsdURBQVVBO1FBQ1hDLHNEQUFTQTtRQUdtQkYsMkNBQU1BOzs7S0FONUNJO0FBMEdULCtEQUFlQSxTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UuanM/ZDJiOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3BhZ2UubW9kdWxlLmNzcyc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmZ1bmN0aW9uIERhc2hib2FyZCgpIHtcblxuICAgIGNvbnN0IHNlc3Npb24gPSB1c2VTZXNzaW9uKCk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICBjb25zdCBmZXRjaGVyID0gKC4uLmFyZ3MpID0+IGZldGNoKC4uLmFyZ3MpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xuICAgIGNvbnN0IHsgZGF0YSwgbXV0YXRlLCBlcnJvciwgaXNMb2FkaW5nIH0gPSB1c2VTV1IoYC9hcGkvcG9zdHM/dXNlcm5hbWU9JHtzZXNzaW9uPy5kYXRhPy51c2VyLm5hbWV9YCwgZmV0Y2hlcik7XG5cblxuICAgIGlmIChzZXNzaW9uLnN0YXR1cyA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgICB9XG4gICAgaWYgKHNlc3Npb24uc3RhdHVzID09PSAndW5hdXRoZW50aWNhdGVkJykge1xuICAgICAgICByb3V0ZXI/LnB1c2goJy9kYXNoYm9hcmQvbG9naW4nKTtcbiAgICB9XG5cblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGUudGFyZ2V0WzBdLnZhbHVlO1xuICAgICAgICBjb25zdCBkZXNjID0gZS50YXJnZXRbMV0udmFsdWU7XG4gICAgICAgIGNvbnN0IGltZyA9IGUudGFyZ2V0WzJdLnZhbHVlO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZS50YXJnZXRbM10udmFsdWU7XG5cbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgYXdhaXQgZmV0Y2goJy9hcGkvcG9zdHMnLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZSwgZGVzYywgaW1nLCBjb250ZW50LCB1c2VybmFtZTogc2Vzc2lvbi5kYXRhLnVzZXIubmFtZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgbXV0YXRlKCk7XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jIChpZCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgZmV0Y2goYC9hcGkvcG9zdHMvJHtpZH1gLHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6J0RFTEVURSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbXV0YXRlKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG5sb2dcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzZXNzaW9uLnN0YXR1cyA9PT0gJ2F1dGhlbnRpY2F0ZWQnKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0c30+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZyA/ICdsb2FkaW5nJyA6IGRhdGE/Lm1hcChwb3N0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3R9IGtleT17cG9zdC5faWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltZ0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtwb3N0LmltZ30gYWx0PScnIHdpZHRoPXsyMDB9IGhlaWdodD17MTAwfSBjbGFzc05hbWU9e3N0eWxlcy5pbWd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucG9zdFRpdGxlfT57cG9zdC50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGV9Plg8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMubmV3fSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgPGgxPkFkZCBOZXcgUG9zdDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPSdUaXRsZScgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPSdEZXNjcmlwdGlvbicgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPSdJbWFnZScgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHBsYWNlaG9sZGVyPSdDb250ZW50JyBjbGFzc05hbWU9e3N0eWxlcy50ZXh0QXJlYX0gY29scz1cIjMwXCIgcm93cz1cIjEwXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShwb3N0Ll9pZCl9PlNlbmQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2RpdiA+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICAvLyBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gICAgLy8gY29uc3QgW2Vyciwgc2V0RXJyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICAvLyBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAvLyAgICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcblxuICAgIC8vICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNcIiwge1xuICAgIC8vICAgICAgICAgICAgIGNhY2hlOiBcIm5vLXN0b3JlXCIsXG4gICAgLy8gICAgICAgICB9KTtcblxuICAgIC8vICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAvLyAgICAgICAgICAgICBzZXRFcnIodHJ1ZSk7XG4gICAgLy8gICAgICAgICB9XG5cbiAgICAvLyAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgLy8gICAgICAgICBzZXREYXRhKGRhdGEpO1xuICAgIC8vICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBnZXREYXRhKCk7XG4gICAgLy8gfSwgW10pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsInVzZVNXUiIsInVzZVNlc3Npb24iLCJ1c2VSb3V0ZXIiLCJJbWFnZSIsIkRhc2hib2FyZCIsInNlc3Npb24iLCJyb3V0ZXIiLCJmZXRjaGVyIiwiYXJncyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwibXV0YXRlIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJ1c2VyIiwibmFtZSIsInN0YXR1cyIsInAiLCJwdXNoIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidGl0bGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRlc2MiLCJpbWciLCJjb250ZW50IiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VybmFtZSIsImVyciIsImhhbmRsZURlbGV0ZSIsImlkIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwicG9zdHMiLCJtYXAiLCJwb3N0IiwiaW1nQ29udGFpbmVyIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJoMiIsInBvc3RUaXRsZSIsInNwYW4iLCJkZWxldGUiLCJfaWQiLCJmb3JtIiwibmV3Iiwib25TdWJtaXQiLCJoMSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidGV4dGFyZWEiLCJ0ZXh0QXJlYSIsImNvbHMiLCJyb3dzIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/page.js\n"));

/***/ })

});