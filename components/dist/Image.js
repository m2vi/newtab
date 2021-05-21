"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.imageConfig = exports.Image = void 0;
var react_1 = require("react");
exports.Image = function (_a) {
    var props = __rest(_a, []);
    var getIndex = function (max) {
        return Math.floor(Math.random() * max);
    };
    var _b = exports.imageConfig[getIndex(exports.imageConfig.length)], src = _b.src, alt = _b.alt, className = _b.className, css = _b.css, bodyCSS = _b.bodyCSS, hasImage = _b.hasImage;
    var setBodyStyle = function (style) {
        for (var i in style) {
            document.body.style[i] = style[i];
        }
    };
    var cn = 'pointer-events-none absolute z-n1 select-none';
    react_1.useEffect(function () {
        setBodyStyle(bodyCSS);
    }, []);
    return (react_1["default"].createElement("img", __assign({ src: hasImage ? src : null, alt: alt, className: cn + " " + (!hasImage && 'hidden opacity-0') + " " + (hasImage ? 'bottom-0 right-0 top-0 left-0 h-full w-full' : className), style: css, key: alt }, props)));
};
exports["default"] = exports.Image;
// export const imageConfig: ImageItemProps = [
//   {
//     hasImage: false,
//     bodyCSS: {
//       backgroundColor: '#aab9c7',
//       backgroundImage: "url('/bg/valley.webp')",
//       backgroundRepeat: 'no-repeat',
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//     },
//     className: 'bottom-0 right-0 top-0 left-0 h-full w-full',
//   },
// ];
exports.imageConfig = {
    "default": {
        hasImage: false,
        bodyCSS: {
            background: 'linear-gradient(to right bottom, rgba(113,150,255,1) 0%, rgba(48,110,232,1) 70%) center center'
        }
    },
    children: [
        {
            hasImage: false,
            bodyCSS: {
                backgroundColor: '#CFC3B3',
                backgroundImage: 'url(/bg/sand.avif)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            },
            className: 'bottom-0 right-0 top-0 left-0 h-full w-full'
        },
        {
            hasImage: false,
            bodyCSS: {
                backgroundColor: '#aab9c7',
                backgroundImage: "url('/bg/valley.webp')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            },
            className: 'bottom-0 right-0 top-0 left-0 h-full w-full'
        },
    ]
};
