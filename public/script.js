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

/***/ "./src/script.ts":
/*!***********************!*\
  !*** ./src/script.ts ***!
  \***********************/
/***/ (() => {

eval("\r\n(function () {\r\n    document.getElementById('guess-form').addEventListener(\"submit\", compareUserGuess);\r\n    function compareUserGuess(event) {\r\n        event.preventDefault();\r\n        var secretNumber = generateSecretNumber();\r\n        var userNumber = document.getElementById('guess');\r\n        var userGuess = userNumber.value;\r\n        if (secretNumber == userGuess) {\r\n            alert(\"Awesome! You number \" + userGuess + \" was correct. You can be named many things, hungry not being one of them.\");\r\n        }\r\n        else {\r\n            alert(\"Bummer... You guessed \" + userGuess + \" and the secret number was \" + secretNumber + \".\");\r\n        }\r\n    }\r\n    function generateSecretNumber() {\r\n        var secretNumber = getRandomArbitrary(1, 22);\r\n        return secretNumber;\r\n    }\r\n    function getRandomArbitrary(min, max) {\r\n        return Math.round(Math.random() * (max - min) + min);\r\n    }\r\n})();\r\n\n\n//# sourceURL=webpack://intro-typescript/./src/script.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script.ts"]();
/******/ 	
/******/ })()
;