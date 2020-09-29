/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function () {
  var siblings = function siblings(n) {
    return _toConsumableArray(n.parentNode.children).filter(function (v) {
      return n !== v;
    });
  };

  var titleListItem = document.querySelectorAll(".title-list li");
  var time = new Date();
  var mainobject = {};
  var add = document.querySelectorAll(".settings-container .add")[0];
  var remove = document.querySelectorAll(".settings-container .delete")[0];
  var titleList = document.querySelector(".title-list ");
  var bodyList = document.querySelector(".body-list");
  titleList.addEventListener("click", function (item) {
    var targetElement = item.target;
    var selector = ".title-list-item";

    while (targetElement !== titleList) {
      if (targetElement.matches(selector)) {
        var eachItem = item.target.closest("".concat(selector));
        var hour = eachItem.querySelector(".hour").innerText = time.getHours();
        var minutes = eachItem.querySelector(".minute").innerHTML = time.getMinutes();

        if (!eachItem.classList.contains("active")) {
          eachItem.classList.add("active");
          var index = eachItem.getAttribute("data-title-index");
          var bodyItem = document.querySelector(".body-list-item[data-body-index=\"".concat(index, "\"]"));
          bodyItem.classList.add("active");
          var siblingsArrayBody = siblings(bodyItem);
          siblingsArrayBody.forEach(function (eachSibling) {
            if (eachSibling.classList.contains("active")) {
              eachSibling.classList.remove("active");
            }
          });
          var siblingsArray = siblings(eachItem);
          siblingsArray.forEach(function (eachSibling) {
            if (eachSibling.classList.contains("active")) {
              eachSibling.classList.remove("active");
            }
          });
        }

        return;
      }

      targetElement = targetElement.parentElement;
    }
  });
  bodyList.addEventListener("input", function (item) {
    var targetElement = item.target;
    var selector = ".body-text";

    while (targetElement !== bodyList) {
      if (targetElement.matches(selector)) {
        var eachItem = item.target.closest("".concat(selector));
        var index = eachItem.closest('.body-list-item').getAttribute('data-body-index');
        var titleItem = document.querySelector(".title-list-item[data-title-index=\"".concat(index, "\"]"));
        var value = eachItem.value;

        if (value.length < 10) {
          titleItem.querySelector(".title").innerHTML = value;
        }

        return;
      }

      targetElement = targetElement.parentElement;
    }
  });
  var i = 0;
  var y = 0;
  add.addEventListener("click", function (item) {
    var titleLi = document.createElement("li");
    titleLi.innerHTML = "\n                <div class=\"time-container\"><span class=\"hour\">-- </span>: <span class=\"minute\">-- </span></div>\n                <h2 class=\"title\">untitled</h2>\n        ";
    titleLi.setAttribute("data-title-index", ++i);
    titleLi.classList.add("title-list-item");
    titleList.appendChild(titleLi);
    var bodyLi = document.createElement("li");
    bodyLi.innerHTML = "\n                <div class=\"content-container\">\n                    <form action=\"\">\n                        <textarea class=\"body-text\" name=\"text\"></textarea>\n                    </form>\n                </div>";
    bodyLi.setAttribute("data-body-index", ++y);
    bodyLi.classList.add("body-list-item");
    bodyList.appendChild(bodyLi);
  });
  remove.addEventListener('click', function (item) {
    var toRemovetitle = document.querySelector(".title-list-item.active");
    var toRemovebody = document.querySelector(".body-list-item.active");

    if (toRemovetitle != "undefined" && toRemovebody != "undefined") {
      toRemovetitle.parentNode.removeChild(toRemovetitle);
      toRemovebody.parentNode.removeChild(toRemovebody);
    }
  });
})();

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./src/js/app.js ./src/scss/app.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\gamespace\Documents\github\Notes\src\js\app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! C:\Users\gamespace\Documents\github\Notes\src\scss\app.scss */"./src/scss/app.scss");


/***/ })

/******/ });