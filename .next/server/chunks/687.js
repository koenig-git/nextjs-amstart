"use strict";
exports.id = 687;
exports.ids = [687];
exports.modules = {

/***/ 7555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout),
  "y": () => (/* binding */ siteTitle)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/header.js
// import styles from "./header.module.scss";



const links = [
    {
        "title": "\xdcber uns",
        "menuSlug": "ueber-uns",
        "url": "/ueber-uns"
    },
    {
        "title": "Mitwirken",
        "menuSlug": "mitwirken",
        "url": "/mitwirken"
    },
    {
        "title": "F\xf6rdern",
        "menuSlug": "foerdern",
        "url": "/foerdern"
    },
    {
        "title": "Blog",
        "menuSlug": "blog",
        "url": "/blog"
    },
    {
        "title": "Kontakt",
        "menuSlug": "kontakt",
        "url": "/kontakt"
    }
];
function Header() {
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "bg-green-light",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex items-center justify-between px-12 lg:px-18 xl:px-24 h-24.5 lg:h-25",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex-0",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/svgs/amstart-logo.svg",
                            width: 200,
                            height: 70,
                            alt: "aMStart Logo",
                            className: "w-50 h-15"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex-0",
                    children: links.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: item.url,
                            className: "ml-6 lg:ml-12 text-lg xl:text-2xl font-bold",
                            children: item.title
                        }, item.menuSlug))
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/footer.js


const footerData = {
    "links": [
        {
            "title": "Kontakt",
            "url": "/kontakt.html"
        },
        {
            "title": "Newsletter",
            "url": "/newsletter.html"
        },
        {
            "title": "Notfallhilfe",
            "url": "/notfaelle.html"
        },
        {
            "title": "Datenschutzerkl\xe4rung",
            "url": "/datenschutz.html"
        },
        {
            "title": "Impressum",
            "url": "/impressum.html"
        },
        {
            "title": "Quellen",
            "url": "/quellen.html"
        }
    ],
    "socialLinks": [
        {
            "iconName": "social-instagram.svg",
            "title": "Instagram",
            "url": "https://www.instagram.com/gemeinsam_amstart/"
        },
        {
            "iconName": "social-linkedin.svg",
            "title": "LinkedIn",
            "url": "https://www.linkedin.com/company/gemeinsamamstart/"
        },
        {
            "iconName": "social-facebook.svg",
            "title": "Facebook",
            "url": "https://www.facebook.com/gemeinsamamstart"
        },
        {
            "iconName": "social-spotify.svg",
            "title": "Spotify",
            "url": "https://open.spotify.com/show/3ri3cgAd3EKeCtNgFnv6yl"
        }
    ]
};
function Footer() {
    return /*#__PURE__*/ _jsx("div", {
        className: "section section--green-light",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "footer grid-container",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: styles["footer-left"],
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: styles["footer-logo-wrapper"],
                        children: [
                            /*#__PURE__*/ _jsx("img", {
                                className: styles["footer-logo"],
                                src: "/svgs/amstart-logo.svg",
                                alt: "aMStart Logo"
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: styles["footer-logo-slogan"],
                                children: "mit Dir."
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: styles["footer-right"],
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: styles["footer-links"],
                            children: footerData.links.map((item)=>/*#__PURE__*/ _jsx("a", {
                                    href: item.url,
                                    className: styles["footer-link"],
                                    children: item.title
                                }))
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: styles["footer-social-links"],
                            children: footerData.socialLinks.map((item)=>/*#__PURE__*/ _jsx("a", {
                                    href: item.url,
                                    className: styles["footer-social-link"],
                                    target: "_blank",
                                    children: /*#__PURE__*/ _jsx("img", {
                                        className: styles["footer-social-icon"],
                                        src: `/icons/${item.iconName}`,
                                        alt: item.title
                                    })
                                }))
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layout.js





// import styles from './layout.module.css';

const layout_name = "aMStart";
const siteTitle = "aMStart - jung, digital, unabh\xe4ngig"; //TODO: SEO
function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            })
        ]
    });
}


/***/ }),

/***/ 9458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Segment)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Segment({ children , color  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `p-12 lg:p-18 xl:p-24 bg-${color}`,
        children: children
    });
}


/***/ })

};
;