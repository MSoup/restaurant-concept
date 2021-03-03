/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayContact\": () => (/* binding */ displayContact)\n/* harmony export */ });\nfunction displayContact() {\r\n  let container = document.createElement(\"div\");\r\n  let header = document.createElement(\"h2\");\r\n  let contents = document.createElement(\"div\");\r\n\r\n  header.textContent = \"Contact\";\r\n  contents.className = \"home-body\";\r\n\r\n  contents.textContent = \"Placeholder text, hi.\";\r\n  //need to work on implementation of this\r\n  fetch(\"/restaurant/src/contact.txt\")\r\n    .then((response) => response.text())\r\n    .then((textString) => (contents.textContent = textString))\r\n    .then(console.log(contents.textContent));\r\n\r\n  container.appendChild(header);\r\n  container.appendChild(contents);\r\n\r\n  const content = document.querySelector(\".content-page\");\r\n  content.appendChild(container);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/hero-header.js":
/*!****************************!*\
  !*** ./src/hero-header.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getHeader\": () => (/* binding */ getHeader)\n/* harmony export */ });\nfunction getHeader() {\r\n  // holds hero image and title\r\n  let imgContainer = document.createElement(\"div\");\r\n  imgContainer.className = \"image-container\";\r\n\r\n  let img = document.createElement(\"img\");\r\n  img.setAttribute(\"src\", \"./bg.jpg\");\r\n  img.setAttribute(\"class\", \"main-image\");\r\n  img.setAttribute(\"alt\", \"header hero image\");\r\n\r\n  let titleContainer = document.createElement(\"div\");\r\n  titleContainer.className = \"title\";\r\n  let title = document.createElement(\"h1\");\r\n  title.className = \"title-text\";\r\n  title.textContent = \"MajesticSoup's\";\r\n  titleContainer.appendChild(title);\r\n\r\n  // attach image and title div to img container\r\n  imgContainer.appendChild(img);\r\n  imgContainer.appendChild(titleContainer);\r\n\r\n  console.log(\"getHeader executed\");\r\n  return imgContainer;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/hero-header.js?");

/***/ }),

/***/ "./src/home-about.js":
/*!***************************!*\
  !*** ./src/home-about.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayHome\": () => (/* binding */ displayHome)\n/* harmony export */ });\nfunction displayHome() {\r\n  let container = document.createElement(\"div\");\r\n  let header = document.createElement(\"h2\");\r\n  let subHeader = document.createElement(\"h2\");\r\n  let contents = document.createElement(\"div\");\r\n\r\n  header.textContent = \"Welcome to MajesticSoup's\";\r\n  subHeader.textContent = \"Home of dem chickens\";\r\n  contents.className = \"home-body\";\r\n\r\n  contents.textContent = \"Placeholder text, hi.\";\r\n  //need to work on implementation of this\r\n  fetch(\"/restaurant/src/contents.txt\")\r\n    .then((response) => response.text())\r\n    .then((textString) => (contents.textContent = textString))\r\n    .then(console.log(contents.textContent));\r\n\r\n  container.appendChild(header);\r\n  container.appendChild(subHeader);\r\n  container.appendChild(contents);\r\n\r\n  const content = document.querySelector(\".content-page\");\r\n  content.appendChild(container);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/home-about.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hero_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero-header */ \"./src/hero-header.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n/* harmony import */ var _home_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-about */ \"./src/home-about.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\nconst container = document.createElement(\"div\");\r\nconst contentDiv = document.createElement(\"div\");\r\n\r\nfunction loadContainer() {\r\n  // home-bg selected by default\r\n  container.className = \"page-container home-bg\";\r\n  contentDiv.className = \"content-page\";\r\n  container.appendChild(contentDiv);\r\n  return container;\r\n}\r\n\r\nconst content = document.querySelector(\"#content\");\r\ncontent.appendChild((0,_hero_header__WEBPACK_IMPORTED_MODULE_0__.getHeader)());\r\ncontent.appendChild((0,_nav__WEBPACK_IMPORTED_MODULE_1__.getNav)());\r\ncontent.appendChild(loadContainer());\r\n(0,_home_about__WEBPACK_IMPORTED_MODULE_2__.displayHome)();\r\n// select home by default\r\ndocument.querySelector(\".home\").classList.add(\"selected\");\r\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayMenu\": () => (/* binding */ displayMenu)\n/* harmony export */ });\nfunction generateCard(title, subtitle, img) {\r\n  let cardContainer = document.createElement(\"div\");\r\n\r\n  let cardTitle = document.createElement(\"h2\");\r\n  let cardSubtitle = document.createElement(\"p\");\r\n  let imgContainer = document.createElement(\"div\");\r\n  let cardimg = document.createElement(\"img\");\r\n\r\n  cardTitle.textContent = title;\r\n  cardSubtitle.textContent = subtitle;\r\n\r\n  cardContainer.className = \"card-container\";\r\n  cardTitle.className = \"menu-item-title\";\r\n  cardSubtitle.className = \"menu-item-description\";\r\n  imgContainer.className = \"img-container\";\r\n  cardimg.className = \"menu-image\";\r\n  cardimg.src = img;\r\n  cardContainer.appendChild(cardTitle);\r\n  imgContainer.appendChild(cardimg);\r\n  imgContainer.appendChild(cardSubtitle);\r\n  cardContainer.appendChild(imgContainer);\r\n\r\n  const content = document.querySelector(\".content-page\");\r\n  content.appendChild(cardContainer);\r\n}\r\n\r\nfunction displayMenu() {\r\n  // make heading then display cards\r\n  const content = document.querySelector(\".content-page\");\r\n\r\n  let heading = document.createElement(\"h2\");\r\n  heading.textContent = \"Menu\";\r\n\r\n  content.appendChild(heading);\r\n\r\n  generateCard(\r\n    \"Pizza\",\r\n    \"Tomatoes, Cheese, Pepperoni\",\r\n    \"https://d1ralsognjng37.cloudfront.net/a40b7e44-7dd7-4ab9-bc40-9e530e0bbfda.jpeg\"\r\n  );\r\n\r\n  generateCard(\r\n    \"Fries\",\r\n    \"Delicately crafted french fries from Amsterdam\",\r\n    \"https://d1ralsognjng37.cloudfront.net/a40b7e44-7dd7-4ab9-bc40-9e530e0bbfda.jpeg\"\r\n  );\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getNav\": () => (/* binding */ getNav)\n/* harmony export */ });\n/* harmony import */ var _home_about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-about */ \"./src/home-about.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\nfunction getNav() {\r\n  let nav = document.createElement(\"nav\");\r\n  let navOptions = [\"home\", \"menu\", \"contact\"];\r\n  let option;\r\n  let text;\r\n  let textNode;\r\n  for (let i = 0; i < navOptions.length; i++) {\r\n    option = document.createElement(\"div\");\r\n    option.className = navOptions[i];\r\n    textNode = document.createElement(\"p\");\r\n    text = document.createTextNode(navOptions[i].toUpperCase());\r\n    textNode.className = \"navText\";\r\n    // option.textContent = ;\r\n    textNode.appendChild(text);\r\n    option.appendChild(textNode);\r\n    option.addEventListener(\"click\", handleClick);\r\n    nav.appendChild(option);\r\n  }\r\n\r\n  return nav;\r\n}\r\n\r\nfunction handleClick(event) {\r\n  // clear all selected first, then toggle current selected\r\n  let navOptions = event.currentTarget.parentElement.children;\r\n\r\n  for (let i = 0; i < navOptions.length; i++) {\r\n    navOptions[i].classList.remove(\"selected\");\r\n  }\r\n\r\n  let selectedOption = event.currentTarget.className;\r\n  let pageContainer = document.querySelector(\".page-container\");\r\n\r\n  // change bg color of page container\r\n  pageContainer.className = `page-container ${selectedOption}-bg`;\r\n  event.currentTarget.classList.add(\"selected\");\r\n\r\n  if (selectedOption === \"home\") {\r\n    // stuff\r\n    clearPage();\r\n    (0,_home_about__WEBPACK_IMPORTED_MODULE_0__.displayHome)();\r\n  } else if (selectedOption === \"menu\") {\r\n    // stuff\r\n    clearPage();\r\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.displayMenu)();\r\n  }\r\n  // contact was clicked\r\n  else {\r\n    clearPage();\r\n    (0,_contact__WEBPACK_IMPORTED_MODULE_2__.displayContact)();\r\n  }\r\n}\r\n\r\nfunction clearPage() {\r\n  const contentDiv = document.querySelector(\".content-page\");\r\n  while (contentDiv.firstChild) {\r\n    contentDiv.removeChild(contentDiv.lastChild);\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/nav.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;