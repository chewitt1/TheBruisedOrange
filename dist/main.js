/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/home.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/home.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/produce.jpg */ "./src/images/produce.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home_banner.jpg */ "./src/images/home_banner.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*Welcome*/
#welcome-txt{
    margin-top: 100px;
    font-size: 30px; text-align: center;
    color: transparent; text-shadow: 0 0 5px black;
    text-transform: uppercase;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: #db9407;
}

#foodMenu{
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
    height: 450px;
}
#tastingMenu{
    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: cover;
    height: 450px;
}
.colorOverlay{
    height: 100%; width: 100%; background-color: #aa750c; opacity: 0.9;
    display: flex; justify-content: center; align-items: center;
}
.colorOverlay2{
    height: 100%; width: 100%; background-color: #9fab4e; opacity: 0.9;
    display: flex; justify-content: center; align-items: center;
}
#foodMenuTxt, #tastingMenuTxt{
    background-color: #dbd2c0; color: #241a06;
    height: 250px; width: 500px;
    display: flex; flex-direction: column; align-items: center; text-align: center; justify-content: center;
    padding: 40px 0; gap: 50px;
}
#foodMenuTxt > button, #tastingMenuTxt > button{
    font-size: 20px;
    height: 40px; width: 200px;
    border-radius: 0;
    border: 3px solid #aa750c;
    background-color: rgba(240, 234, 223, 0.9);
    font-family: 'Playfair Display', serif;
    z-index: 3;
}

#foodMenuTxt > button:hover, #tastingMenuTxt > button:hover{
    cursor: pointer;
    background-color: #aa750c;
    color: #dbd2c0;
}

#tastingImg{
    width: 300px;
    object-fit: cover;
    z-index: 1;
}

section{
    height: 200vh;
    text-align: center;
    background: #403840;
    display: flex; flex-direction: column; align-items: center; text-align: center;
    padding: 40px;
    box-shadow: 0 0 10px red;
}

#traits{
    width: 100%;
    box-sizing: border-box;
    display: flex; justify-content: center; align-items: start; text-align: center; 
    gap: 30px;
    margin-top: 100px;
}
.trait{
    display: flex; flex-direction: column; align-items: center; text-align: center;
    gap: 10px;
    font-size: 20px;
    color: transparent; text-shadow: 0 0 5px black;
    text-transform: uppercase;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: #db9407;
}
.trait > img{
    width: 350px;
    height: 480px;
    object-fit: cover;
}
#foodImg{
    height: 440px;
}

#sectionMessage{
    color: #aa750c;
    font-size: 24px;
    text-transform: uppercase;
    height: 250px;
}

#homeSection{
    display: flex; flex-direction: column; justify-content: space-between;
}
`, "",{"version":3,"sources":["webpack://./src/home.css"],"names":[],"mappings":"AACA,UAAU;AACV;IACI,iBAAiB;IACjB,eAAe,EAAE,kBAAkB;IACnC,kBAAkB,EAAE,0BAA0B;IAC9C,yBAAyB;IACzB,gCAAgC;IAChC,kCAAkC;AACtC;;AAEA;IACI,mDAAuC;IACvC,sBAAsB;IACtB,aAAa;AACjB;AACA;IACI,mDAA2C;IAC3C,sBAAsB;IACtB,aAAa;AACjB;AACA;IACI,YAAY,EAAE,WAAW,EAAE,yBAAyB,EAAE,YAAY;IAClE,aAAa,EAAE,uBAAuB,EAAE,mBAAmB;AAC/D;AACA;IACI,YAAY,EAAE,WAAW,EAAE,yBAAyB,EAAE,YAAY;IAClE,aAAa,EAAE,uBAAuB,EAAE,mBAAmB;AAC/D;AACA;IACI,yBAAyB,EAAE,cAAc;IACzC,aAAa,EAAE,YAAY;IAC3B,aAAa,EAAE,sBAAsB,EAAE,mBAAmB,EAAE,kBAAkB,EAAE,uBAAuB;IACvG,eAAe,EAAE,SAAS;AAC9B;AACA;IACI,eAAe;IACf,YAAY,EAAE,YAAY;IAC1B,gBAAgB;IAChB,yBAAyB;IACzB,0CAA0C;IAC1C,sCAAsC;IACtC,UAAU;AACd;;AAEA;IACI,eAAe;IACf,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,aAAa,EAAE,sBAAsB,EAAE,mBAAmB,EAAE,kBAAkB;IAC9E,aAAa;IACb,wBAAwB;AAC5B;;AAEA;IACI,WAAW;IACX,sBAAsB;IACtB,aAAa,EAAE,uBAAuB,EAAE,kBAAkB,EAAE,kBAAkB;IAC9E,SAAS;IACT,iBAAiB;AACrB;AACA;IACI,aAAa,EAAE,sBAAsB,EAAE,mBAAmB,EAAE,kBAAkB;IAC9E,SAAS;IACT,eAAe;IACf,kBAAkB,EAAE,0BAA0B;IAC9C,yBAAyB;IACzB,gCAAgC;IAChC,kCAAkC;AACtC;AACA;IACI,YAAY;IACZ,aAAa;IACb,iBAAiB;AACrB;AACA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,eAAe;IACf,yBAAyB;IACzB,aAAa;AACjB;;AAEA;IACI,aAAa,EAAE,sBAAsB,EAAE,8BAA8B;AACzE","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&display=swap');\r\n/*Welcome*/\r\n#welcome-txt{\r\n    margin-top: 100px;\r\n    font-size: 30px; text-align: center;\r\n    color: transparent; text-shadow: 0 0 5px black;\r\n    text-transform: uppercase;\r\n    -webkit-text-stroke-width: 0.5px;\r\n    -webkit-text-stroke-color: #db9407;\r\n}\r\n\r\n#foodMenu{\r\n    background: url(\"./images/produce.jpg\");\r\n    background-size: cover;\r\n    height: 450px;\r\n}\r\n#tastingMenu{\r\n    background: url(\"./images/home_banner.jpg\");\r\n    background-size: cover;\r\n    height: 450px;\r\n}\r\n.colorOverlay{\r\n    height: 100%; width: 100%; background-color: #aa750c; opacity: 0.9;\r\n    display: flex; justify-content: center; align-items: center;\r\n}\r\n.colorOverlay2{\r\n    height: 100%; width: 100%; background-color: #9fab4e; opacity: 0.9;\r\n    display: flex; justify-content: center; align-items: center;\r\n}\r\n#foodMenuTxt, #tastingMenuTxt{\r\n    background-color: #dbd2c0; color: #241a06;\r\n    height: 250px; width: 500px;\r\n    display: flex; flex-direction: column; align-items: center; text-align: center; justify-content: center;\r\n    padding: 40px 0; gap: 50px;\r\n}\r\n#foodMenuTxt > button, #tastingMenuTxt > button{\r\n    font-size: 20px;\r\n    height: 40px; width: 200px;\r\n    border-radius: 0;\r\n    border: 3px solid #aa750c;\r\n    background-color: rgba(240, 234, 223, 0.9);\r\n    font-family: 'Playfair Display', serif;\r\n    z-index: 3;\r\n}\r\n\r\n#foodMenuTxt > button:hover, #tastingMenuTxt > button:hover{\r\n    cursor: pointer;\r\n    background-color: #aa750c;\r\n    color: #dbd2c0;\r\n}\r\n\r\n#tastingImg{\r\n    width: 300px;\r\n    object-fit: cover;\r\n    z-index: 1;\r\n}\r\n\r\nsection{\r\n    height: 200vh;\r\n    text-align: center;\r\n    background: #403840;\r\n    display: flex; flex-direction: column; align-items: center; text-align: center;\r\n    padding: 40px;\r\n    box-shadow: 0 0 10px red;\r\n}\r\n\r\n#traits{\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    display: flex; justify-content: center; align-items: start; text-align: center; \r\n    gap: 30px;\r\n    margin-top: 100px;\r\n}\r\n.trait{\r\n    display: flex; flex-direction: column; align-items: center; text-align: center;\r\n    gap: 10px;\r\n    font-size: 20px;\r\n    color: transparent; text-shadow: 0 0 5px black;\r\n    text-transform: uppercase;\r\n    -webkit-text-stroke-width: 0.5px;\r\n    -webkit-text-stroke-color: #db9407;\r\n}\r\n.trait > img{\r\n    width: 350px;\r\n    height: 480px;\r\n    object-fit: cover;\r\n}\r\n#foodImg{\r\n    height: 440px;\r\n}\r\n\r\n#sectionMessage{\r\n    color: #aa750c;\r\n    font-size: 24px;\r\n    text-transform: uppercase;\r\n    height: 250px;\r\n}\r\n\r\n#homeSection{\r\n    display: flex; flex-direction: column; justify-content: space-between;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    margin: 0; padding: 0;
}
body{
    background-color: #403840;
    color: rgb(216, 220, 222);
    font-family: 'Playfair Display', serif;
}
/*Parallax*/
#content{
    height: 100vh;
    overflow-y: auto; overflow-x: hidden;
    perspective: 10px;
}
.home{
    position: relative; 
    display: flex; justify-content: center;
    height: 620px;
    transform-style: preserve-3d;
    z-index: -1;
}
.background{
    position: absolute; height: 100%; width: 105%; 
    object-fit: cover;
    transform: translateZ(-10px) scale(2);
    filter: grayscale(0.8);
}

/*HEADER*/
header{
    text-align: center;
    z-index: 1;
    background-color: #40383e;
    height: 100px; width: 100%;
}
nav{
    margin: 10px;
}
nav > ul{
    list-style: none;
    display: flex; justify-content: center;
    gap: 100px;
    cursor: default;
}
.navItem{
    text-shadow: 0 0 5px black;
    text-transform: uppercase;
}
.navItem:hover{
    cursor: pointer;
    color: olive;
}
.curr{
    color: olive;
    border-bottom: 2px solid olive;
    text-shadow: none;
}
#titleBox{
    width: 100%;
    display: flex; justify-content: center; align-items: center;
    gap: 5px;
    cursor: default;
}
#titleBox h1{
    z-index: 2;
    text-transform: uppercase;
}
#titleBox h1:hover{
    cursor: pointer;
    color: olive;
}
#logo{
    height: 24px;
    width: 24px;
    z-index: 1;
    margin-left: -15px;
    margin-top: 2px;
    transform: rotate(30deg);
}

footer{
    height: 100vh; width: 100%;
    padding-top: 100px;
    background-color: #40383e; border-top: 2px solid #db9407;
    display: flex; flex-direction: column; align-items: center; text-align: center; justify-content: center;
    gap: 50px;
}
#footerBottom{
    width: 100%;
    display: flex; justify-content: center; text-align: center;
    gap: 100px;
}
footer h1, h2{
    color: transparent; text-shadow: 0 0 5px black;
    text-transform: uppercase;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: #ba7f09;
}
footer h1{
    font-size: 50px;
}
footer h2{
    font-size: 30px;
    margin-bottom: 10px;
}
footer hr{
    width: 100%;
    border: none;
    border-bottom: 2px solid #db9407;
}
#myInfo{
    align-self: center;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACA;IACI,SAAS,EAAE,UAAU;AACzB;AACA;IACI,yBAAyB;IACzB,yBAAyB;IACzB,sCAAsC;AAC1C;AACA,WAAW;AACX;IACI,aAAa;IACb,gBAAgB,EAAE,kBAAkB;IACpC,iBAAiB;AACrB;AACA;IACI,kBAAkB;IAClB,aAAa,EAAE,uBAAuB;IACtC,aAAa;IACb,4BAA4B;IAC5B,WAAW;AACf;AACA;IACI,kBAAkB,EAAE,YAAY,EAAE,WAAW;IAC7C,iBAAiB;IACjB,qCAAqC;IACrC,sBAAsB;AAC1B;;AAEA,SAAS;AACT;IACI,kBAAkB;IAClB,UAAU;IACV,yBAAyB;IACzB,aAAa,EAAE,WAAW;AAC9B;AACA;IACI,YAAY;AAChB;AACA;IACI,gBAAgB;IAChB,aAAa,EAAE,uBAAuB;IACtC,UAAU;IACV,eAAe;AACnB;AACA;IACI,0BAA0B;IAC1B,yBAAyB;AAC7B;AACA;IACI,eAAe;IACf,YAAY;AAChB;AACA;IACI,YAAY;IACZ,8BAA8B;IAC9B,iBAAiB;AACrB;AACA;IACI,WAAW;IACX,aAAa,EAAE,uBAAuB,EAAE,mBAAmB;IAC3D,QAAQ;IACR,eAAe;AACnB;AACA;IACI,UAAU;IACV,yBAAyB;AAC7B;AACA;IACI,eAAe;IACf,YAAY;AAChB;AACA;IACI,YAAY;IACZ,WAAW;IACX,UAAU;IACV,kBAAkB;IAClB,eAAe;IACf,wBAAwB;AAC5B;;AAEA;IACI,aAAa,EAAE,WAAW;IAC1B,kBAAkB;IAClB,yBAAyB,EAAE,6BAA6B;IACxD,aAAa,EAAE,sBAAsB,EAAE,mBAAmB,EAAE,kBAAkB,EAAE,uBAAuB;IACvG,SAAS;AACb;AACA;IACI,WAAW;IACX,aAAa,EAAE,uBAAuB,EAAE,kBAAkB;IAC1D,UAAU;AACd;AACA;IACI,kBAAkB,EAAE,0BAA0B;IAC9C,yBAAyB;IACzB,gCAAgC;IAChC,kCAAkC;AACtC;AACA;IACI,eAAe;AACnB;AACA;IACI,eAAe;IACf,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,YAAY;IACZ,gCAAgC;AACpC;AACA;IACI,kBAAkB;AACtB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&display=swap');\r\n*{\r\n    margin: 0; padding: 0;\r\n}\r\nbody{\r\n    background-color: #403840;\r\n    color: rgb(216, 220, 222);\r\n    font-family: 'Playfair Display', serif;\r\n}\r\n/*Parallax*/\r\n#content{\r\n    height: 100vh;\r\n    overflow-y: auto; overflow-x: hidden;\r\n    perspective: 10px;\r\n}\r\n.home{\r\n    position: relative; \r\n    display: flex; justify-content: center;\r\n    height: 620px;\r\n    transform-style: preserve-3d;\r\n    z-index: -1;\r\n}\r\n.background{\r\n    position: absolute; height: 100%; width: 105%; \r\n    object-fit: cover;\r\n    transform: translateZ(-10px) scale(2);\r\n    filter: grayscale(0.8);\r\n}\r\n\r\n/*HEADER*/\r\nheader{\r\n    text-align: center;\r\n    z-index: 1;\r\n    background-color: #40383e;\r\n    height: 100px; width: 100%;\r\n}\r\nnav{\r\n    margin: 10px;\r\n}\r\nnav > ul{\r\n    list-style: none;\r\n    display: flex; justify-content: center;\r\n    gap: 100px;\r\n    cursor: default;\r\n}\r\n.navItem{\r\n    text-shadow: 0 0 5px black;\r\n    text-transform: uppercase;\r\n}\r\n.navItem:hover{\r\n    cursor: pointer;\r\n    color: olive;\r\n}\r\n.curr{\r\n    color: olive;\r\n    border-bottom: 2px solid olive;\r\n    text-shadow: none;\r\n}\r\n#titleBox{\r\n    width: 100%;\r\n    display: flex; justify-content: center; align-items: center;\r\n    gap: 5px;\r\n    cursor: default;\r\n}\r\n#titleBox h1{\r\n    z-index: 2;\r\n    text-transform: uppercase;\r\n}\r\n#titleBox h1:hover{\r\n    cursor: pointer;\r\n    color: olive;\r\n}\r\n#logo{\r\n    height: 24px;\r\n    width: 24px;\r\n    z-index: 1;\r\n    margin-left: -15px;\r\n    margin-top: 2px;\r\n    transform: rotate(30deg);\r\n}\r\n\r\nfooter{\r\n    height: 100vh; width: 100%;\r\n    padding-top: 100px;\r\n    background-color: #40383e; border-top: 2px solid #db9407;\r\n    display: flex; flex-direction: column; align-items: center; text-align: center; justify-content: center;\r\n    gap: 50px;\r\n}\r\n#footerBottom{\r\n    width: 100%;\r\n    display: flex; justify-content: center; text-align: center;\r\n    gap: 100px;\r\n}\r\nfooter h1, h2{\r\n    color: transparent; text-shadow: 0 0 5px black;\r\n    text-transform: uppercase;\r\n    -webkit-text-stroke-width: 0.5px;\r\n    -webkit-text-stroke-color: #ba7f09;\r\n}\r\nfooter h1{\r\n    font-size: 50px;\r\n}\r\nfooter h2{\r\n    font-size: 30px;\r\n    margin-bottom: 10px;\r\n}\r\nfooter hr{\r\n    width: 100%;\r\n    border: none;\r\n    border-bottom: 2px solid #db9407;\r\n}\r\n#myInfo{\r\n    align-self: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/home.css":
/*!**********************!*\
  !*** ./src/home.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./home.css */ "./node_modules/css-loader/dist/cjs.js!./src/home.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/shell.js":
/*!**********************!*\
  !*** ./src/shell.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   About: () => (/* binding */ About),
/* harmony export */   Footer: () => (/* binding */ Footer),
/* harmony export */   Home: () => (/* binding */ Home),
/* harmony export */   Menu: () => (/* binding */ Menu),
/* harmony export */   NavBar: () => (/* binding */ NavBar),
/* harmony export */   Reservations: () => (/* binding */ Reservations)
/* harmony export */ });
/* harmony import */ var _images_home_banner_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/home_banner.jpg */ "./src/images/home_banner.jpg");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/logo.png */ "./src/images/logo.png");
/* harmony import */ var _images_food_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/food.jpg */ "./src/images/food.jpg");
/* harmony import */ var _images_drinks_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/drinks.jpg */ "./src/images/drinks.jpg");
/* harmony import */ var _images_logo_big_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/logo_big.png */ "./src/images/logo_big.png");
/* harmony import */ var _images_jazz_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/jazz.jpg */ "./src/images/jazz.jpg");
/* harmony import */ var _images_drink_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/drink.jpg */ "./src/images/drink.jpg");
/* harmony import */ var _images_meal_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/meal.jpg */ "./src/images/meal.jpg");









function NavBar(){
    let navBar = document.createElement("header");
    let titleBox = document.createElement("div");
    titleBox.id = "titleBox";
    let title = document.createElement("h1"); title.innerHTML = "<i>Bruised</i>";
    titleBox.appendChild(title);
    let logoImg = new Image();
    logoImg.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_1__;
    logoImg.id = "logo";
    titleBox.appendChild(logoImg);
    navBar.appendChild(titleBox);

    let nav = document.createElement("nav"); 
    let ul = document.createElement("ul");
    ul.appendChild(NavItem("Home", 1));
    ul.appendChild(NavItem("Menu", 2));
    ul.appendChild(NavItem("About", 3));
    ul.appendChild(NavItem("Reservations", 4));
    nav.appendChild(ul);
    navBar.appendChild(nav);
    return navBar;
}

function NavItem(txt, val){
    let item = document.createElement("li");
    item.classList.add("navItem");
    if(val == 1){item.classList.add("curr");}
    item.innerHTML = txt;
    item.setAttribute("data-tab" , val);
    return item;
}

function Home(){
    //Tab
    let tab = document.createElement("div");
    
    tab.classList.add("home");

    let banner = new Image();
    banner.src = _images_home_banner_jpg__WEBPACK_IMPORTED_MODULE_0__;
    banner.classList.add("background");
    tab.appendChild(banner);

    let textDiv = document.createElement("div");
    textDiv.id = "welcome-txt";

    let homeTag = document.createElement("h1");
    homeTag.innerHTML = "Where jazz meets <br>sustainability";
    textDiv.appendChild(homeTag);
    tab.appendChild(textDiv);

    //Food Menu Section
    let foodMenu = document.createElement("div");
    foodMenu.id = "foodMenu";

    let foodSection = document.createElement("div");
    foodSection.classList.add("colorOverlay");

    let foodImg = new Image(); foodImg.src = _images_food_jpg__WEBPACK_IMPORTED_MODULE_2__; 
    foodImg.style.height = "300px";
    foodSection.appendChild(foodImg);

    let foodTxt = document.createElement("div");
    foodTxt.id = "foodMenuTxt";

    let foodTxtTitle = document.createElement("h2");
    foodTxtTitle.innerHTML = "FOOD MENU"
    foodTxt.appendChild(foodTxtTitle);

    let foodTxtP = document.createElement("p");
    foodTxtP.innerHTML = "Experience ingredient-first dining"
    foodTxt.appendChild(foodTxtP);

    let foodTxtBtn = document.createElement("button");
    foodTxtBtn.innerHTML = "View Menu";
    foodTxt.appendChild(foodTxtBtn);

    foodSection.appendChild(foodTxt);
    foodMenu.appendChild(foodSection);

    //Section 1
    let section1 = document.createElement("section");
    section1.id = "homeSection";
    let sectionTop = document.createElement("div");
    let logoImg = new Image();
    logoImg.src = _images_logo_big_png__WEBPACK_IMPORTED_MODULE_4__;
    sectionTop.appendChild(logoImg);

    let traits = document.createElement("div");
    traits.id = "traits";

    let trait1 = document.createElement("div");
    trait1.classList.add("trait");
    let traitTxt1 = document.createElement("h2"); traitTxt1.innerHTML = "JAZZ";
    let traitImg1 = new Image(); traitImg1.src = _images_jazz_jpg__WEBPACK_IMPORTED_MODULE_5__;
    trait1.appendChild(traitTxt1); trait1.appendChild(traitImg1);
    traits.appendChild(trait1);

    let trait2 = document.createElement("div");
    trait2.classList.add("trait");
    let traitTxt2 = document.createElement("h2"); traitTxt2.innerHTML = "FOOD";
    let traitImg2 = new Image(); traitImg2.src = _images_meal_jpg__WEBPACK_IMPORTED_MODULE_7__;
    traitImg2.id = "foodImg";
    trait2.appendChild(traitTxt2); trait2.appendChild(traitImg2);
    traits.appendChild(trait2);

    let trait3 = document.createElement("div");
    trait3.classList.add("trait");
    let traitTxt3 = document.createElement("h2"); traitTxt3.innerHTML = "DRINKS";
    let traitImg3 = new Image(); traitImg3.src = _images_drink_jpg__WEBPACK_IMPORTED_MODULE_6__;
    trait3.appendChild(traitTxt3); trait3.appendChild(traitImg3);
    traits.appendChild(trait3);

    sectionTop.appendChild(traits);
    section1.appendChild(sectionTop);

    let section1Message = document.createElement("div");
    section1Message.id = "sectionMessage";
    section1Message.innerHTML = "Our weekly rotating menu is curated using sustainable methodologies with the help from local farmers and suppliers."
    section1.appendChild(section1Message);

    //Tasting Menu Section
    let tastingMenu = document.createElement("div");
    tastingMenu.id = "tastingMenu";
 
    let tastingSection = document.createElement("div");
    tastingSection.classList.add("colorOverlay2");
 
    let tastingTxt = document.createElement("div");
    tastingTxt.id = "tastingMenuTxt";
 
    let tastingTxtTitle = document.createElement("h2");
    tastingTxtTitle.innerHTML = "TASTING MENU"
    tastingTxt.appendChild(tastingTxtTitle);
 
    let tastingTxtP = document.createElement("p");
    tastingTxtP.innerHTML = "Taste our unique liqueur combinations"
    tastingTxt.appendChild(tastingTxtP);
 
    let tastingTxtBtn = document.createElement("button");
    tastingTxtBtn.innerHTML = "View Menu";
    tastingTxt.appendChild(tastingTxtBtn);
    tastingSection.appendChild(tastingTxt);

    let tastingImg = new Image(); tastingImg.src = _images_drinks_jpg__WEBPACK_IMPORTED_MODULE_3__; 
    tastingImg.id = "tastingImg"
    tastingSection.appendChild(tastingImg);
    tastingMenu.appendChild(tastingSection);

    return {tab, foodMenu, section1, tastingMenu};
}

function Menu(){
    let tab = document.createElement("div");

    let homeTitle = document.createElement("h1");
    homeTitle.innerHTML = "Menu";
    tab.appendChild(homeTitle);

    let homeTag = document.createElement("h3");
    homeTag.innerHTML = "Item Name";
    tab.appendChild(homeTag);
    return tab;
}

function About(){
    let tab = document.createElement("div");

    let homeTitle = document.createElement("h1");
    homeTitle.innerHTML = "About";
    tab.appendChild(homeTitle);

    let homeTag = document.createElement("h3");
    homeTag.innerHTML = "The Bruised Orange Jazz Bar";
    tab.appendChild(homeTag);
    return tab;
}

function Reservations(){
    let tab = document.createElement("div");

    let homeTitle = document.createElement("h1");
    homeTitle.innerHTML = "Reservations";
    tab.appendChild(homeTitle);

    let homeTag = document.createElement("h3");
    homeTag.innerHTML = "The Bruised Orange Jazz Bar";
    tab.appendChild(homeTag);
    return tab;
}

function Footer(){
    let footer = document.createElement("footer");
    let infoTitle = document.createElement("h1"); infoTitle.innerHTML = "THE BRUISED ORANGE";
    footer.appendChild(infoTitle);
    let footerBottom = document.createElement("div"); footerBottom.id = "footerBottom";

    let location = document.createElement("div");
    let locationTitle = document.createElement("h2"); locationTitle.innerHTML = "LOCATION";
    let locationAddress = document.createElement("p"); locationAddress.innerHTML = "123 REAL PLACE STREET <br>CITY, ST 12345";
    location.appendChild(locationTitle); location.appendChild(locationAddress);
    footerBottom.appendChild(location);


    let contact = document.createElement("p");
    let contactTitle = document.createElement("h2"); contactTitle.innerHTML = "CONTACT";
    let contactAddress = document.createElement("p"); contactAddress.innerHTML = "(123) 456-7890 <br> INFO@THEBRUISEDORANGE.COM";
    contact.appendChild(contactTitle); contact.appendChild(contactAddress);
    footerBottom.appendChild(contact);

    let visit = document.createElement("div");
    let visitTitle = document.createElement("h2"); visitTitle.innerHTML = "HOURS";
    let visitWeekDay = document.createElement("p"); visitWeekDay.innerHTML = "MONDAY - THURSDAY <br> 11AM - 11PM";
    let visitWeekEnd = document.createElement("p"); visitWeekEnd.innerHTML = "FRIDAY - SUNDAY <br> 5PM - 2AM";
    visit.appendChild(visitTitle); visit.appendChild(visitWeekDay); visit.appendChild(visitWeekEnd);
    footerBottom.appendChild(visit);

    footer.appendChild(footerBottom);

    footer.appendChild(document.createElement("hr"));
    let myInfo = document.createElement("p"); myInfo.innerHTML = "The Bruised Orange - A Odin Restaurant - Created By Carrima Hewitt - Copyright 2023";
    myInfo.id = "myInfo";
    footer.appendChild(myInfo);
    return footer;
}

//Initial Page Load setup
let content = document.querySelector("#content");
content.appendChild(NavBar());
content.appendChild(Home().tab);
content.appendChild(Home().foodMenu);
content.appendChild(Home().section1);
content.appendChild(Home().tastingMenu);
content.appendChild(Footer());

/***/ }),

/***/ "./src/images/drink.jpg":
/*!******************************!*\
  !*** ./src/images/drink.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8ccf4b4b1b5ace614f49.jpg";

/***/ }),

/***/ "./src/images/drinks.jpg":
/*!*******************************!*\
  !*** ./src/images/drinks.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3fa3db8672d25508ee89.jpg";

/***/ }),

/***/ "./src/images/food.jpg":
/*!*****************************!*\
  !*** ./src/images/food.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6529e15c46bdfa270507.jpg";

/***/ }),

/***/ "./src/images/home_banner.jpg":
/*!************************************!*\
  !*** ./src/images/home_banner.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "18daf7d17792d2b26935.jpg";

/***/ }),

/***/ "./src/images/jazz.jpg":
/*!*****************************!*\
  !*** ./src/images/jazz.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b124e6cab454e40744c5.jpg";

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b000ee1abd563f60ea05.png";

/***/ }),

/***/ "./src/images/logo_big.png":
/*!*********************************!*\
  !*** ./src/images/logo_big.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "10aad02d990a88c67998.png";

/***/ }),

/***/ "./src/images/meal.jpg":
/*!*****************************!*\
  !*** ./src/images/meal.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "049c017ddb4a190ab501.jpg";

/***/ }),

/***/ "./src/images/produce.jpg":
/*!********************************!*\
  !*** ./src/images/produce.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b6a47b9424c7aa6a88c0.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.css */ "./src/home.css");
/* harmony import */ var _shell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shell */ "./src/shell.js");




let navItems = document.querySelectorAll(".navItem");
let content = document.querySelector("#content");
let currPage = 1;

navItems.forEach((item) =>{
    item.addEventListener("click", ()=>{
        setPage(item.getAttribute("data-tab"));
        document.querySelector(".curr").classList.remove("curr");
        item.classList.add("curr");
    })
});

function setPage(page){
    console.log(page);
    while (content.children[1]) {
        content.removeChild(content.children[1])
    }
    if(page == 1){
        content.appendChild((0,_shell__WEBPACK_IMPORTED_MODULE_2__.Home)().tab);
        content.appendChild((0,_shell__WEBPACK_IMPORTED_MODULE_2__.Home)().foodMenu);
        content.appendChild((0,_shell__WEBPACK_IMPORTED_MODULE_2__.Home)().section1);
        content.appendChild((0,_shell__WEBPACK_IMPORTED_MODULE_2__.Home)().tastingMenu);
    }
    else if(page == 2){
        content.append((0,_shell__WEBPACK_IMPORTED_MODULE_2__.Menu)());
    }
    else if(page == 3){
        content.append((0,_shell__WEBPACK_IMPORTED_MODULE_2__.About)());
    }
    else if(page == 4){
        content.append((0,_shell__WEBPACK_IMPORTED_MODULE_2__.Reservations)());
    }
    content.appendChild((0,_shell__WEBPACK_IMPORTED_MODULE_2__.Footer)());
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y3NzIiwid2VicGFjazovL29kaW5yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGlucmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2RpbnJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW5yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2RpbnJlc3RhdXJhbnQvLi9zcmMvaG9tZS5jc3M/N2Y5YyIsIndlYnBhY2s6Ly9vZGlucmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGlucmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGlucmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2RpbnJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2RpbnJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2RpbnJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGlucmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW5yZXN0YXVyYW50Ly4vc3JjL3NoZWxsLmpzIiwid2VicGFjazovL29kaW5yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW5yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW5yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGlucmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW5yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2RpbnJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGlucmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGlucmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGlucmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2RpbnJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3Byb2R1Y2UuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvaG9tZV9iYW5uZXIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5Oml0YWxAMDsxJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKldlbGNvbWUqL1xyXG4jd2VsY29tZS10eHR7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDsgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50OyB0ZXh0LXNoYWRvdzogMCAwIDVweCBibGFjaztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAwLjVweDtcclxuICAgIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6ICNkYjk0MDc7XHJcbn1cclxuXHJcbiNmb29kTWVudXtcclxuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDQ1MHB4O1xyXG59XHJcbiN0YXN0aW5nTWVudXtcclxuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDQ1MHB4O1xyXG59XHJcbi5jb2xvck92ZXJsYXl7XHJcbiAgICBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyBiYWNrZ3JvdW5kLWNvbG9yOiAjYWE3NTBjOyBvcGFjaXR5OiAwLjk7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uY29sb3JPdmVybGF5MntcclxuICAgIGhlaWdodDogMTAwJTsgd2lkdGg6IDEwMCU7IGJhY2tncm91bmQtY29sb3I6ICM5ZmFiNGU7IG9wYWNpdHk6IDAuOTtcclxuICAgIGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiNmb29kTWVudVR4dCwgI3Rhc3RpbmdNZW51VHh0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZDJjMDsgY29sb3I6ICMyNDFhMDY7XHJcbiAgICBoZWlnaHQ6IDI1MHB4OyB3aWR0aDogNTAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogY2VudGVyOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNDBweCAwOyBnYXA6IDUwcHg7XHJcbn1cclxuI2Zvb2RNZW51VHh0ID4gYnV0dG9uLCAjdGFzdGluZ01lbnVUeHQgPiBidXR0b257XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7IHdpZHRoOiAyMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjYWE3NTBjO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDIzNCwgMjIzLCAwLjkpO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWY7XHJcbiAgICB6LWluZGV4OiAzO1xyXG59XHJcblxyXG4jZm9vZE1lbnVUeHQgPiBidXR0b246aG92ZXIsICN0YXN0aW5nTWVudVR4dCA+IGJ1dHRvbjpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYTc1MGM7XHJcbiAgICBjb2xvcjogI2RiZDJjMDtcclxufVxyXG5cclxuI3Rhc3RpbmdJbWd7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbnNlY3Rpb257XHJcbiAgICBoZWlnaHQ6IDIwMHZoO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogIzQwMzg0MDtcclxuICAgIGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZWQ7XHJcbn1cclxuXHJcbiN0cmFpdHN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IHN0YXJ0OyB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgZ2FwOiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuLnRyYWl0e1xyXG4gICAgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50OyB0ZXh0LXNoYWRvdzogMCAwIDVweCBibGFjaztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAwLjVweDtcclxuICAgIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6ICNkYjk0MDc7XHJcbn1cclxuLnRyYWl0ID4gaW1ne1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgaGVpZ2h0OiA0ODBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbiNmb29kSW1ne1xyXG4gICAgaGVpZ2h0OiA0NDBweDtcclxufVxyXG5cclxuI3NlY3Rpb25NZXNzYWdle1xyXG4gICAgY29sb3I6ICNhYTc1MGM7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxufVxyXG5cclxuI2hvbWVTZWN0aW9ue1xyXG4gICAgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2hvbWUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBLFVBQVU7QUFDVjtJQUNJLGlCQUFpQjtJQUNqQixlQUFlLEVBQUUsa0JBQWtCO0lBQ25DLGtCQUFrQixFQUFFLDBCQUEwQjtJQUM5Qyx5QkFBeUI7SUFDekIsZ0NBQWdDO0lBQ2hDLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLG1EQUF1QztJQUN2QyxzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksbURBQTJDO0lBQzNDLHNCQUFzQjtJQUN0QixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZLEVBQUUsV0FBVyxFQUFFLHlCQUF5QixFQUFFLFlBQVk7SUFDbEUsYUFBYSxFQUFFLHVCQUF1QixFQUFFLG1CQUFtQjtBQUMvRDtBQUNBO0lBQ0ksWUFBWSxFQUFFLFdBQVcsRUFBRSx5QkFBeUIsRUFBRSxZQUFZO0lBQ2xFLGFBQWEsRUFBRSx1QkFBdUIsRUFBRSxtQkFBbUI7QUFDL0Q7QUFDQTtJQUNJLHlCQUF5QixFQUFFLGNBQWM7SUFDekMsYUFBYSxFQUFFLFlBQVk7SUFDM0IsYUFBYSxFQUFFLHNCQUFzQixFQUFFLG1CQUFtQixFQUFFLGtCQUFrQixFQUFFLHVCQUF1QjtJQUN2RyxlQUFlLEVBQUUsU0FBUztBQUM5QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVksRUFBRSxZQUFZO0lBQzFCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsMENBQTBDO0lBQzFDLHNDQUFzQztJQUN0QyxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWEsRUFBRSxzQkFBc0IsRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0I7SUFDOUUsYUFBYTtJQUNiLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsYUFBYSxFQUFFLHVCQUF1QixFQUFFLGtCQUFrQixFQUFFLGtCQUFrQjtJQUM5RSxTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhLEVBQUUsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCO0lBQzlFLFNBQVM7SUFDVCxlQUFlO0lBQ2Ysa0JBQWtCLEVBQUUsMEJBQTBCO0lBQzlDLHlCQUF5QjtJQUN6QixnQ0FBZ0M7SUFDaEMsa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhLEVBQUUsc0JBQXNCLEVBQUUsOEJBQThCO0FBQ3pFXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXk6aXRhbEAwOzEmZGlzcGxheT1zd2FwJyk7XFxyXFxuLypXZWxjb21lKi9cXHJcXG4jd2VsY29tZS10eHR7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7IHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50OyB0ZXh0LXNoYWRvdzogMCAwIDVweCBibGFjaztcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMC41cHg7XFxyXFxuICAgIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6ICNkYjk0MDc7XFxyXFxufVxcclxcblxcclxcbiNmb29kTWVudXtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFxcXCIuL2ltYWdlcy9wcm9kdWNlLmpwZ1xcXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBoZWlnaHQ6IDQ1MHB4O1xcclxcbn1cXHJcXG4jdGFzdGluZ01lbnV7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcXFwiLi9pbWFnZXMvaG9tZV9iYW5uZXIuanBnXFxcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGhlaWdodDogNDUwcHg7XFxyXFxufVxcclxcbi5jb2xvck92ZXJsYXl7XFxyXFxuICAgIGhlaWdodDogMTAwJTsgd2lkdGg6IDEwMCU7IGJhY2tncm91bmQtY29sb3I6ICNhYTc1MGM7IG9wYWNpdHk6IDAuOTtcXHJcXG4gICAgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5jb2xvck92ZXJsYXkye1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyBiYWNrZ3JvdW5kLWNvbG9yOiAjOWZhYjRlOyBvcGFjaXR5OiAwLjk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4jZm9vZE1lbnVUeHQsICN0YXN0aW5nTWVudVR4dHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZDJjMDsgY29sb3I6ICMyNDFhMDY7XFxyXFxuICAgIGhlaWdodDogMjUwcHg7IHdpZHRoOiA1MDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgdGV4dC1hbGlnbjogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogNDBweCAwOyBnYXA6IDUwcHg7XFxyXFxufVxcclxcbiNmb29kTWVudVR4dCA+IGJ1dHRvbiwgI3Rhc3RpbmdNZW51VHh0ID4gYnV0dG9ue1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDsgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjYWE3NTBjO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjM0LCAyMjMsIDAuOSk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIHNlcmlmO1xcclxcbiAgICB6LWluZGV4OiAzO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9vZE1lbnVUeHQgPiBidXR0b246aG92ZXIsICN0YXN0aW5nTWVudVR4dCA+IGJ1dHRvbjpob3ZlcntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWE3NTBjO1xcclxcbiAgICBjb2xvcjogI2RiZDJjMDtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc3RpbmdJbWd7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb257XFxyXFxuICAgIGhlaWdodDogMjAwdmg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogIzQwMzg0MDtcXHJcXG4gICAgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiA0MHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZWQ7XFxyXFxufVxcclxcblxcclxcbiN0cmFpdHN7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IHN0YXJ0OyB0ZXh0LWFsaWduOiBjZW50ZXI7IFxcclxcbiAgICBnYXA6IDMwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcclxcbn1cXHJcXG4udHJhaXR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDsgdGV4dC1zaGFkb3c6IDAgMCA1cHggYmxhY2s7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDAuNXB4O1xcclxcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiAjZGI5NDA3O1xcclxcbn1cXHJcXG4udHJhaXQgPiBpbWd7XFxyXFxuICAgIHdpZHRoOiAzNTBweDtcXHJcXG4gICAgaGVpZ2h0OiA0ODBweDtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcbiNmb29kSW1ne1xcclxcbiAgICBoZWlnaHQ6IDQ0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2VjdGlvbk1lc3NhZ2V7XFxyXFxuICAgIGNvbG9yOiAjYWE3NTBjO1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGhlaWdodDogMjUwcHg7XFxyXFxufVxcclxcblxcclxcbiNob21lU2VjdGlvbntcXHJcXG4gICAgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5Oml0YWxAMDsxJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcclxuICAgIG1hcmdpbjogMDsgcGFkZGluZzogMDtcclxufVxyXG5ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQwMzg0MDtcclxuICAgIGNvbG9yOiByZ2IoMjE2LCAyMjAsIDIyMik7XHJcbiAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcclxufVxyXG4vKlBhcmFsbGF4Ki9cclxuI2NvbnRlbnR7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bzsgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgcGVyc3BlY3RpdmU6IDEwcHg7XHJcbn1cclxuLmhvbWV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxyXG4gICAgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDYyMHB4O1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcbi5iYWNrZ3JvdW5ke1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDUlOyBcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0xMHB4KSBzY2FsZSgyKTtcclxuICAgIGZpbHRlcjogZ3JheXNjYWxlKDAuOCk7XHJcbn1cclxuXHJcbi8qSEVBREVSKi9cclxuaGVhZGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDM4M2U7XHJcbiAgICBoZWlnaHQ6IDEwMHB4OyB3aWR0aDogMTAwJTtcclxufVxyXG5uYXZ7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxubmF2ID4gdWx7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDEwMHB4O1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcbi5uYXZJdGVte1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggYmxhY2s7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5uYXZJdGVtOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IG9saXZlO1xyXG59XHJcbi5jdXJye1xyXG4gICAgY29sb3I6IG9saXZlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIG9saXZlO1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuI3RpdGxlQm94e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogNXB4O1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcbiN0aXRsZUJveCBoMXtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbiN0aXRsZUJveCBoMTpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiBvbGl2ZTtcclxufVxyXG4jbG9nb3tcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcclxufVxyXG5cclxuZm9vdGVye1xyXG4gICAgaGVpZ2h0OiAxMDB2aDsgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDAzODNlOyBib3JkZXItdG9wOiAycHggc29saWQgI2RiOTQwNztcclxuICAgIGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IHRleHQtYWxpZ246IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDUwcHg7XHJcbn1cclxuI2Zvb3RlckJvdHRvbXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGdhcDogMTAwcHg7XHJcbn1cclxuZm9vdGVyIGgxLCBoMntcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDsgdGV4dC1zaGFkb3c6IDAgMCA1cHggYmxhY2s7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMC41cHg7XHJcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiAjYmE3ZjA5O1xyXG59XHJcbmZvb3RlciBoMXtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxufVxyXG5mb290ZXIgaDJ7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbmZvb3RlciBocntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkYjk0MDc7XHJcbn1cclxuI215SW5mb3tcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtJQUNJLFNBQVMsRUFBRSxVQUFVO0FBQ3pCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHNDQUFzQztBQUMxQztBQUNBLFdBQVc7QUFDWDtJQUNJLGFBQWE7SUFDYixnQkFBZ0IsRUFBRSxrQkFBa0I7SUFDcEMsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYSxFQUFFLHVCQUF1QjtJQUN0QyxhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCLEVBQUUsWUFBWSxFQUFFLFdBQVc7SUFDN0MsaUJBQWlCO0lBQ2pCLHFDQUFxQztJQUNyQyxzQkFBc0I7QUFDMUI7O0FBRUEsU0FBUztBQUNUO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsYUFBYSxFQUFFLFdBQVc7QUFDOUI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhLEVBQUUsdUJBQXVCO0lBQ3RDLFVBQVU7SUFDVixlQUFlO0FBQ25CO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhLEVBQUUsdUJBQXVCLEVBQUUsbUJBQW1CO0lBQzNELFFBQVE7SUFDUixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxVQUFVO0lBQ1YseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhLEVBQUUsV0FBVztJQUMxQixrQkFBa0I7SUFDbEIseUJBQXlCLEVBQUUsNkJBQTZCO0lBQ3hELGFBQWEsRUFBRSxzQkFBc0IsRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSx1QkFBdUI7SUFDdkcsU0FBUztBQUNiO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYSxFQUFFLHVCQUF1QixFQUFFLGtCQUFrQjtJQUMxRCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQixFQUFFLDBCQUEwQjtJQUM5Qyx5QkFBeUI7SUFDekIsZ0NBQWdDO0lBQ2hDLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5Oml0YWxAMDsxJmRpc3BsYXk9c3dhcCcpO1xcclxcbip7XFxyXFxuICAgIG1hcmdpbjogMDsgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuYm9keXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQwMzg0MDtcXHJcXG4gICAgY29sb3I6IHJnYigyMTYsIDIyMCwgMjIyKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWY7XFxyXFxufVxcclxcbi8qUGFyYWxsYXgqL1xcclxcbiNjb250ZW50e1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvOyBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICAgIHBlcnNwZWN0aXZlOiAxMHB4O1xcclxcbn1cXHJcXG4uaG9tZXtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcXHJcXG4gICAgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogNjIwcHg7XFxyXFxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxuICAgIHotaW5kZXg6IC0xO1xcclxcbn1cXHJcXG4uYmFja2dyb3VuZHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDUlOyBcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMTBweCkgc2NhbGUoMik7XFxyXFxuICAgIGZpbHRlcjogZ3JheXNjYWxlKDAuOCk7XFxyXFxufVxcclxcblxcclxcbi8qSEVBREVSKi9cXHJcXG5oZWFkZXJ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQwMzgzZTtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDsgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbm5hdntcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5uYXYgPiB1bHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTAwcHg7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuLm5hdkl0ZW17XFxyXFxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IGJsYWNrO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbn1cXHJcXG4ubmF2SXRlbTpob3ZlcntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBjb2xvcjogb2xpdmU7XFxyXFxufVxcclxcbi5jdXJye1xcclxcbiAgICBjb2xvcjogb2xpdmU7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBvbGl2ZTtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcbiN0aXRsZUJveHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG4jdGl0bGVCb3ggaDF7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcbiN0aXRsZUJveCBoMTpob3ZlcntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBjb2xvcjogb2xpdmU7XFxyXFxufVxcclxcbiNsb2dve1xcclxcbiAgICBoZWlnaHQ6IDI0cHg7XFxyXFxuICAgIHdpZHRoOiAyNHB4O1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDJweDtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXJ7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7IHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDM4M2U7IGJvcmRlci10b3A6IDJweCBzb2xpZCAjZGI5NDA3O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogY2VudGVyOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDUwcHg7XFxyXFxufVxcclxcbiNmb290ZXJCb3R0b217XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBnYXA6IDEwMHB4O1xcclxcbn1cXHJcXG5mb290ZXIgaDEsIGgye1xcclxcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7IHRleHQtc2hhZG93OiAwIDAgNXB4IGJsYWNrO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAwLjVweDtcXHJcXG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvcjogI2JhN2YwOTtcXHJcXG59XFxyXFxuZm9vdGVyIGgxe1xcclxcbiAgICBmb250LXNpemU6IDUwcHg7XFxyXFxufVxcclxcbmZvb3RlciBoMntcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5mb290ZXIgaHJ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGI5NDA3O1xcclxcbn1cXHJcXG4jbXlJbmZve1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBCYW5uZXIgZnJvbSBcIi4vaW1hZ2VzL2hvbWVfYmFubmVyLmpwZ1wiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi9pbWFnZXMvbG9nby5wbmdcIjtcclxuaW1wb3J0IEZvb2QgZnJvbSBcIi4vaW1hZ2VzL2Zvb2QuanBnXCI7XHJcbmltcG9ydCBEcmlua3MgZnJvbSBcIi4vaW1hZ2VzL2RyaW5rcy5qcGdcIjtcclxuaW1wb3J0IEJpZ0xvZ28gZnJvbSBcIi4vaW1hZ2VzL2xvZ29fYmlnLnBuZ1wiO1xyXG5pbXBvcnQgSmF6eiBmcm9tIFwiLi9pbWFnZXMvamF6ei5qcGdcIjtcclxuaW1wb3J0IERyaW5rIGZyb20gXCIuL2ltYWdlcy9kcmluay5qcGdcIjtcclxuaW1wb3J0IE1lYWwgZnJvbSBcIi4vaW1hZ2VzL21lYWwuanBnXCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOYXZCYXIoKXtcclxuICAgIGxldCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG4gICAgbGV0IHRpdGxlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRpdGxlQm94LmlkID0gXCJ0aXRsZUJveFwiO1xyXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpOyB0aXRsZS5pbm5lckhUTUwgPSBcIjxpPkJydWlzZWQ8L2k+XCI7XHJcbiAgICB0aXRsZUJveC5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICBsZXQgbG9nb0ltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgbG9nb0ltZy5zcmMgPSBMb2dvO1xyXG4gICAgbG9nb0ltZy5pZCA9IFwibG9nb1wiO1xyXG4gICAgdGl0bGVCb3guYXBwZW5kQ2hpbGQobG9nb0ltZyk7XHJcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQodGl0bGVCb3gpO1xyXG5cclxuICAgIGxldCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpOyBcclxuICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIHVsLmFwcGVuZENoaWxkKE5hdkl0ZW0oXCJIb21lXCIsIDEpKTtcclxuICAgIHVsLmFwcGVuZENoaWxkKE5hdkl0ZW0oXCJNZW51XCIsIDIpKTtcclxuICAgIHVsLmFwcGVuZENoaWxkKE5hdkl0ZW0oXCJBYm91dFwiLCAzKSk7XHJcbiAgICB1bC5hcHBlbmRDaGlsZChOYXZJdGVtKFwiUmVzZXJ2YXRpb25zXCIsIDQpKTtcclxuICAgIG5hdi5hcHBlbmRDaGlsZCh1bCk7XHJcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobmF2KTtcclxuICAgIHJldHVybiBuYXZCYXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE5hdkl0ZW0odHh0LCB2YWwpe1xyXG4gICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJuYXZJdGVtXCIpO1xyXG4gICAgaWYodmFsID09IDEpe2l0ZW0uY2xhc3NMaXN0LmFkZChcImN1cnJcIik7fVxyXG4gICAgaXRlbS5pbm5lckhUTUwgPSB0eHQ7XHJcbiAgICBpdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtdGFiXCIgLCB2YWwpO1xyXG4gICAgcmV0dXJuIGl0ZW07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBIb21lKCl7XHJcbiAgICAvL1RhYlxyXG4gICAgbGV0IHRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBcclxuICAgIHRhYi5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcclxuXHJcbiAgICBsZXQgYmFubmVyID0gbmV3IEltYWdlKCk7XHJcbiAgICBiYW5uZXIuc3JjID0gQmFubmVyO1xyXG4gICAgYmFubmVyLmNsYXNzTGlzdC5hZGQoXCJiYWNrZ3JvdW5kXCIpO1xyXG4gICAgdGFiLmFwcGVuZENoaWxkKGJhbm5lcik7XHJcblxyXG4gICAgbGV0IHRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGV4dERpdi5pZCA9IFwid2VsY29tZS10eHRcIjtcclxuXHJcbiAgICBsZXQgaG9tZVRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIGhvbWVUYWcuaW5uZXJIVE1MID0gXCJXaGVyZSBqYXp6IG1lZXRzIDxicj5zdXN0YWluYWJpbGl0eVwiO1xyXG4gICAgdGV4dERpdi5hcHBlbmRDaGlsZChob21lVGFnKTtcclxuICAgIHRhYi5hcHBlbmRDaGlsZCh0ZXh0RGl2KTtcclxuXHJcbiAgICAvL0Zvb2QgTWVudSBTZWN0aW9uXHJcbiAgICBsZXQgZm9vZE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZm9vZE1lbnUuaWQgPSBcImZvb2RNZW51XCI7XHJcblxyXG4gICAgbGV0IGZvb2RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGZvb2RTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJjb2xvck92ZXJsYXlcIik7XHJcblxyXG4gICAgbGV0IGZvb2RJbWcgPSBuZXcgSW1hZ2UoKTsgZm9vZEltZy5zcmMgPSBGb29kOyBcclxuICAgIGZvb2RJbWcuc3R5bGUuaGVpZ2h0ID0gXCIzMDBweFwiO1xyXG4gICAgZm9vZFNlY3Rpb24uYXBwZW5kQ2hpbGQoZm9vZEltZyk7XHJcblxyXG4gICAgbGV0IGZvb2RUeHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZm9vZFR4dC5pZCA9IFwiZm9vZE1lbnVUeHRcIjtcclxuXHJcbiAgICBsZXQgZm9vZFR4dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgZm9vZFR4dFRpdGxlLmlubmVySFRNTCA9IFwiRk9PRCBNRU5VXCJcclxuICAgIGZvb2RUeHQuYXBwZW5kQ2hpbGQoZm9vZFR4dFRpdGxlKTtcclxuXHJcbiAgICBsZXQgZm9vZFR4dFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGZvb2RUeHRQLmlubmVySFRNTCA9IFwiRXhwZXJpZW5jZSBpbmdyZWRpZW50LWZpcnN0IGRpbmluZ1wiXHJcbiAgICBmb29kVHh0LmFwcGVuZENoaWxkKGZvb2RUeHRQKTtcclxuXHJcbiAgICBsZXQgZm9vZFR4dEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBmb29kVHh0QnRuLmlubmVySFRNTCA9IFwiVmlldyBNZW51XCI7XHJcbiAgICBmb29kVHh0LmFwcGVuZENoaWxkKGZvb2RUeHRCdG4pO1xyXG5cclxuICAgIGZvb2RTZWN0aW9uLmFwcGVuZENoaWxkKGZvb2RUeHQpO1xyXG4gICAgZm9vZE1lbnUuYXBwZW5kQ2hpbGQoZm9vZFNlY3Rpb24pO1xyXG5cclxuICAgIC8vU2VjdGlvbiAxXHJcbiAgICBsZXQgc2VjdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICAgIHNlY3Rpb24xLmlkID0gXCJob21lU2VjdGlvblwiO1xyXG4gICAgbGV0IHNlY3Rpb25Ub3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IGxvZ29JbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGxvZ29JbWcuc3JjID0gQmlnTG9nbztcclxuICAgIHNlY3Rpb25Ub3AuYXBwZW5kQ2hpbGQobG9nb0ltZyk7XHJcblxyXG4gICAgbGV0IHRyYWl0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0cmFpdHMuaWQgPSBcInRyYWl0c1wiO1xyXG5cclxuICAgIGxldCB0cmFpdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdHJhaXQxLmNsYXNzTGlzdC5hZGQoXCJ0cmFpdFwiKTtcclxuICAgIGxldCB0cmFpdFR4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7IHRyYWl0VHh0MS5pbm5lckhUTUwgPSBcIkpBWlpcIjtcclxuICAgIGxldCB0cmFpdEltZzEgPSBuZXcgSW1hZ2UoKTsgdHJhaXRJbWcxLnNyYyA9IEpheno7XHJcbiAgICB0cmFpdDEuYXBwZW5kQ2hpbGQodHJhaXRUeHQxKTsgdHJhaXQxLmFwcGVuZENoaWxkKHRyYWl0SW1nMSk7XHJcbiAgICB0cmFpdHMuYXBwZW5kQ2hpbGQodHJhaXQxKTtcclxuXHJcbiAgICBsZXQgdHJhaXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRyYWl0Mi5jbGFzc0xpc3QuYWRkKFwidHJhaXRcIik7XHJcbiAgICBsZXQgdHJhaXRUeHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpOyB0cmFpdFR4dDIuaW5uZXJIVE1MID0gXCJGT09EXCI7XHJcbiAgICBsZXQgdHJhaXRJbWcyID0gbmV3IEltYWdlKCk7IHRyYWl0SW1nMi5zcmMgPSBNZWFsO1xyXG4gICAgdHJhaXRJbWcyLmlkID0gXCJmb29kSW1nXCI7XHJcbiAgICB0cmFpdDIuYXBwZW5kQ2hpbGQodHJhaXRUeHQyKTsgdHJhaXQyLmFwcGVuZENoaWxkKHRyYWl0SW1nMik7XHJcbiAgICB0cmFpdHMuYXBwZW5kQ2hpbGQodHJhaXQyKTtcclxuXHJcbiAgICBsZXQgdHJhaXQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRyYWl0My5jbGFzc0xpc3QuYWRkKFwidHJhaXRcIik7XHJcbiAgICBsZXQgdHJhaXRUeHQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpOyB0cmFpdFR4dDMuaW5uZXJIVE1MID0gXCJEUklOS1NcIjtcclxuICAgIGxldCB0cmFpdEltZzMgPSBuZXcgSW1hZ2UoKTsgdHJhaXRJbWczLnNyYyA9IERyaW5rO1xyXG4gICAgdHJhaXQzLmFwcGVuZENoaWxkKHRyYWl0VHh0Myk7IHRyYWl0My5hcHBlbmRDaGlsZCh0cmFpdEltZzMpO1xyXG4gICAgdHJhaXRzLmFwcGVuZENoaWxkKHRyYWl0Myk7XHJcblxyXG4gICAgc2VjdGlvblRvcC5hcHBlbmRDaGlsZCh0cmFpdHMpO1xyXG4gICAgc2VjdGlvbjEuYXBwZW5kQ2hpbGQoc2VjdGlvblRvcCk7XHJcblxyXG4gICAgbGV0IHNlY3Rpb24xTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzZWN0aW9uMU1lc3NhZ2UuaWQgPSBcInNlY3Rpb25NZXNzYWdlXCI7XHJcbiAgICBzZWN0aW9uMU1lc3NhZ2UuaW5uZXJIVE1MID0gXCJPdXIgd2Vla2x5IHJvdGF0aW5nIG1lbnUgaXMgY3VyYXRlZCB1c2luZyBzdXN0YWluYWJsZSBtZXRob2RvbG9naWVzIHdpdGggdGhlIGhlbHAgZnJvbSBsb2NhbCBmYXJtZXJzIGFuZCBzdXBwbGllcnMuXCJcclxuICAgIHNlY3Rpb24xLmFwcGVuZENoaWxkKHNlY3Rpb24xTWVzc2FnZSk7XHJcblxyXG4gICAgLy9UYXN0aW5nIE1lbnUgU2VjdGlvblxyXG4gICAgbGV0IHRhc3RpbmdNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRhc3RpbmdNZW51LmlkID0gXCJ0YXN0aW5nTWVudVwiO1xyXG4gXHJcbiAgICBsZXQgdGFzdGluZ1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGFzdGluZ1NlY3Rpb24uY2xhc3NMaXN0LmFkZChcImNvbG9yT3ZlcmxheTJcIik7XHJcbiBcclxuICAgIGxldCB0YXN0aW5nVHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRhc3RpbmdUeHQuaWQgPSBcInRhc3RpbmdNZW51VHh0XCI7XHJcbiBcclxuICAgIGxldCB0YXN0aW5nVHh0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICB0YXN0aW5nVHh0VGl0bGUuaW5uZXJIVE1MID0gXCJUQVNUSU5HIE1FTlVcIlxyXG4gICAgdGFzdGluZ1R4dC5hcHBlbmRDaGlsZCh0YXN0aW5nVHh0VGl0bGUpO1xyXG4gXHJcbiAgICBsZXQgdGFzdGluZ1R4dFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHRhc3RpbmdUeHRQLmlubmVySFRNTCA9IFwiVGFzdGUgb3VyIHVuaXF1ZSBsaXF1ZXVyIGNvbWJpbmF0aW9uc1wiXHJcbiAgICB0YXN0aW5nVHh0LmFwcGVuZENoaWxkKHRhc3RpbmdUeHRQKTtcclxuIFxyXG4gICAgbGV0IHRhc3RpbmdUeHRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgdGFzdGluZ1R4dEJ0bi5pbm5lckhUTUwgPSBcIlZpZXcgTWVudVwiO1xyXG4gICAgdGFzdGluZ1R4dC5hcHBlbmRDaGlsZCh0YXN0aW5nVHh0QnRuKTtcclxuICAgIHRhc3RpbmdTZWN0aW9uLmFwcGVuZENoaWxkKHRhc3RpbmdUeHQpO1xyXG5cclxuICAgIGxldCB0YXN0aW5nSW1nID0gbmV3IEltYWdlKCk7IHRhc3RpbmdJbWcuc3JjID0gRHJpbmtzOyBcclxuICAgIHRhc3RpbmdJbWcuaWQgPSBcInRhc3RpbmdJbWdcIlxyXG4gICAgdGFzdGluZ1NlY3Rpb24uYXBwZW5kQ2hpbGQodGFzdGluZ0ltZyk7XHJcbiAgICB0YXN0aW5nTWVudS5hcHBlbmRDaGlsZCh0YXN0aW5nU2VjdGlvbik7XHJcblxyXG4gICAgcmV0dXJuIHt0YWIsIGZvb2RNZW51LCBzZWN0aW9uMSwgdGFzdGluZ01lbnV9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTWVudSgpe1xyXG4gICAgbGV0IHRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgbGV0IGhvbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIGhvbWVUaXRsZS5pbm5lckhUTUwgPSBcIk1lbnVcIjtcclxuICAgIHRhYi5hcHBlbmRDaGlsZChob21lVGl0bGUpO1xyXG5cclxuICAgIGxldCBob21lVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgaG9tZVRhZy5pbm5lckhUTUwgPSBcIkl0ZW0gTmFtZVwiO1xyXG4gICAgdGFiLmFwcGVuZENoaWxkKGhvbWVUYWcpO1xyXG4gICAgcmV0dXJuIHRhYjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFib3V0KCl7XHJcbiAgICBsZXQgdGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBsZXQgaG9tZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgaG9tZVRpdGxlLmlubmVySFRNTCA9IFwiQWJvdXRcIjtcclxuICAgIHRhYi5hcHBlbmRDaGlsZChob21lVGl0bGUpO1xyXG5cclxuICAgIGxldCBob21lVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgaG9tZVRhZy5pbm5lckhUTUwgPSBcIlRoZSBCcnVpc2VkIE9yYW5nZSBKYXp6IEJhclwiO1xyXG4gICAgdGFiLmFwcGVuZENoaWxkKGhvbWVUYWcpO1xyXG4gICAgcmV0dXJuIHRhYjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlc2VydmF0aW9ucygpe1xyXG4gICAgbGV0IHRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgbGV0IGhvbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIGhvbWVUaXRsZS5pbm5lckhUTUwgPSBcIlJlc2VydmF0aW9uc1wiO1xyXG4gICAgdGFiLmFwcGVuZENoaWxkKGhvbWVUaXRsZSk7XHJcblxyXG4gICAgbGV0IGhvbWVUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICBob21lVGFnLmlubmVySFRNTCA9IFwiVGhlIEJydWlzZWQgT3JhbmdlIEphenogQmFyXCI7XHJcbiAgICB0YWIuYXBwZW5kQ2hpbGQoaG9tZVRhZyk7XHJcbiAgICByZXR1cm4gdGFiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRm9vdGVyKCl7XHJcbiAgICBsZXQgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxuICAgIGxldCBpbmZvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7IGluZm9UaXRsZS5pbm5lckhUTUwgPSBcIlRIRSBCUlVJU0VEIE9SQU5HRVwiO1xyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGluZm9UaXRsZSk7XHJcbiAgICBsZXQgZm9vdGVyQm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgZm9vdGVyQm90dG9tLmlkID0gXCJmb290ZXJCb3R0b21cIjtcclxuXHJcbiAgICBsZXQgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IGxvY2F0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7IGxvY2F0aW9uVGl0bGUuaW5uZXJIVE1MID0gXCJMT0NBVElPTlwiO1xyXG4gICAgbGV0IGxvY2F0aW9uQWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpOyBsb2NhdGlvbkFkZHJlc3MuaW5uZXJIVE1MID0gXCIxMjMgUkVBTCBQTEFDRSBTVFJFRVQgPGJyPkNJVFksIFNUIDEyMzQ1XCI7XHJcbiAgICBsb2NhdGlvbi5hcHBlbmRDaGlsZChsb2NhdGlvblRpdGxlKTsgbG9jYXRpb24uYXBwZW5kQ2hpbGQobG9jYXRpb25BZGRyZXNzKTtcclxuICAgIGZvb3RlckJvdHRvbS5hcHBlbmRDaGlsZChsb2NhdGlvbik7XHJcblxyXG5cclxuICAgIGxldCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBsZXQgY29udGFjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpOyBjb250YWN0VGl0bGUuaW5uZXJIVE1MID0gXCJDT05UQUNUXCI7XHJcbiAgICBsZXQgY29udGFjdEFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTsgY29udGFjdEFkZHJlc3MuaW5uZXJIVE1MID0gXCIoMTIzKSA0NTYtNzg5MCA8YnI+IElORk9AVEhFQlJVSVNFRE9SQU5HRS5DT01cIjtcclxuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlKTsgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0QWRkcmVzcyk7XHJcbiAgICBmb290ZXJCb3R0b20uYXBwZW5kQ2hpbGQoY29udGFjdCk7XHJcblxyXG4gICAgbGV0IHZpc2l0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCB2aXNpdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpOyB2aXNpdFRpdGxlLmlubmVySFRNTCA9IFwiSE9VUlNcIjtcclxuICAgIGxldCB2aXNpdFdlZWtEYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTsgdmlzaXRXZWVrRGF5LmlubmVySFRNTCA9IFwiTU9OREFZIC0gVEhVUlNEQVkgPGJyPiAxMUFNIC0gMTFQTVwiO1xyXG4gICAgbGV0IHZpc2l0V2Vla0VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpOyB2aXNpdFdlZWtFbmQuaW5uZXJIVE1MID0gXCJGUklEQVkgLSBTVU5EQVkgPGJyPiA1UE0gLSAyQU1cIjtcclxuICAgIHZpc2l0LmFwcGVuZENoaWxkKHZpc2l0VGl0bGUpOyB2aXNpdC5hcHBlbmRDaGlsZCh2aXNpdFdlZWtEYXkpOyB2aXNpdC5hcHBlbmRDaGlsZCh2aXNpdFdlZWtFbmQpO1xyXG4gICAgZm9vdGVyQm90dG9tLmFwcGVuZENoaWxkKHZpc2l0KTtcclxuXHJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyQm90dG9tKTtcclxuXHJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpKTtcclxuICAgIGxldCBteUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTsgbXlJbmZvLmlubmVySFRNTCA9IFwiVGhlIEJydWlzZWQgT3JhbmdlIC0gQSBPZGluIFJlc3RhdXJhbnQgLSBDcmVhdGVkIEJ5IENhcnJpbWEgSGV3aXR0IC0gQ29weXJpZ2h0IDIwMjNcIjtcclxuICAgIG15SW5mby5pZCA9IFwibXlJbmZvXCI7XHJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQobXlJbmZvKTtcclxuICAgIHJldHVybiBmb290ZXI7XHJcbn1cclxuXHJcbi8vSW5pdGlhbCBQYWdlIExvYWQgc2V0dXBcclxubGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoTmF2QmFyKCkpO1xyXG5jb250ZW50LmFwcGVuZENoaWxkKEhvbWUoKS50YWIpO1xyXG5jb250ZW50LmFwcGVuZENoaWxkKEhvbWUoKS5mb29kTWVudSk7XHJcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoSG9tZSgpLnNlY3Rpb24xKTtcclxuY29udGVudC5hcHBlbmRDaGlsZChIb21lKCkudGFzdGluZ01lbnUpO1xyXG5jb250ZW50LmFwcGVuZENoaWxkKEZvb3RlcigpKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBcIi4vaG9tZS5jc3NcIlxyXG5pbXBvcnQgXCIuL3NoZWxsXCI7XHJcbmltcG9ydCB7IE5hdkJhciwgSG9tZSwgTWVudSwgQWJvdXQsIFJlc2VydmF0aW9ucywgRm9vdGVyIH0gZnJvbSBcIi4vc2hlbGxcIjtcclxubGV0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZJdGVtXCIpO1xyXG5sZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxubGV0IGN1cnJQYWdlID0gMTtcclxuXHJcbm5hdkl0ZW1zLmZvckVhY2goKGl0ZW0pID0+e1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcclxuICAgICAgICBzZXRQYWdlKGl0ZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS10YWJcIikpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VyclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiY3VyclwiKTtcclxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJjdXJyXCIpO1xyXG4gICAgfSlcclxufSk7XHJcblxyXG5mdW5jdGlvbiBzZXRQYWdlKHBhZ2Upe1xyXG4gICAgY29uc29sZS5sb2cocGFnZSk7XHJcbiAgICB3aGlsZSAoY29udGVudC5jaGlsZHJlblsxXSkge1xyXG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5jaGlsZHJlblsxXSlcclxuICAgIH1cclxuICAgIGlmKHBhZ2UgPT0gMSl7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChIb21lKCkudGFiKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKEhvbWUoKS5mb29kTWVudSk7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChIb21lKCkuc2VjdGlvbjEpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoSG9tZSgpLnRhc3RpbmdNZW51KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYocGFnZSA9PSAyKXtcclxuICAgICAgICBjb250ZW50LmFwcGVuZChNZW51KCkpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihwYWdlID09IDMpe1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKEFib3V0KCkpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihwYWdlID09IDQpe1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKFJlc2VydmF0aW9ucygpKTtcclxuICAgIH1cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoRm9vdGVyKCkpO1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9