"use strict";
exports.id = 143;
exports.ids = [143];
exports.modules = {

/***/ 8143:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getAllPosts": () => (/* binding */ getAllPosts),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7555);
/* harmony import */ var _components_segment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9458);
/* harmony import */ var react_notion_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5574);
/* harmony import */ var react_notion_x_build_third_party_collection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(635);
/* harmony import */ var notion_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8751);
/* harmony import */ var notion_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(743);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_notion_x__WEBPACK_IMPORTED_MODULE_4__, notion_utils__WEBPACK_IMPORTED_MODULE_5__, notion_client__WEBPACK_IMPORTED_MODULE_6__, react_notion_x_build_third_party_collection__WEBPACK_IMPORTED_MODULE_7__]);
([react_notion_x__WEBPACK_IMPORTED_MODULE_4__, notion_utils__WEBPACK_IMPORTED_MODULE_5__, notion_client__WEBPACK_IMPORTED_MODULE_6__, react_notion_x_build_third_party_collection__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const SLUG_ID = "3x=Q";
const DATE_ID = "S)s,";
const NOTION_BLOG_ID = "a77b23577e1d47a9b06cba6e0202369d";
// const NOTION_BLOG_ID = '1099525da7e5405c961706de56622ccd';

const notion = new notion_client__WEBPACK_IMPORTED_MODULE_6__.NotionAPI();
const getAllPosts = async ()=>{
    return await fetch(`https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`).then((res)=>res.json());
};
//TODO: Export so getAllPosts is no longer needed
async function getStaticProps() {
    //getRecordMap
    const recordMap = await notion.getPage(NOTION_BLOG_ID);
    //getTableOfPages 
    let posts = [];
    for (var [id, block] of Object.entries(recordMap.block)){
        let blockProperties = block.value.properties;
        if (block.value.type == "page" && SLUG_ID in blockProperties) {
            posts.push({
                "id": id,
                "title": blockProperties.title[0][0],
                "slug": blockProperties[SLUG_ID][0][0],
                "date": DATE_ID in blockProperties ? blockProperties[DATE_ID][0][1][0][1].start_date : ""
            });
        }
    }
    return {
        props: {
            posts,
            recordMap
        }
    };
}
function HomePage({ posts , recordMap  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_segment__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            color: "white",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-4xl font-bold",
                    children: "Blog"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-2xl text-gray-600",
                    children: "Here is some content"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_notion_x__WEBPACK_IMPORTED_MODULE_4__.NotionRenderer, {
                    recordMap: recordMap,
                    components: {
                        Collection: react_notion_x_build_third_party_collection__WEBPACK_IMPORTED_MODULE_7__/* .Collection */ .F
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "grid grid-cols-1 sm:grid-cols-3 gap-4 my-4",
                    children: posts.map((post)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "blog/[slug]",
                                as: `blog/${post.slug}`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "rounded h-72 bg-green-light",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "rounded h-2/3 bg-green-secondary justify-items-center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: "IMG"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "h-1/3 p-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "font-bold",
                                                    children: post.title
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: "Lorem Ipsum dolor sit amet. Eliumqam est."
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }, post.slug))
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;