webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/PageIndex/components/Map/Map.js":
/*!*********************************************!*\
  !*** ./src/PageIndex/components/Map/Map.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(useRef, useEffect) {/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _jsxFileName = "/Users/studmuffin/Documents/Apps/maptivist/src/PageIndex/components/Map/Map.js";



var PageIndex_Map = function PageIndex_Map(props) {
  var map = useRef();

  var initialize = function initialize() {
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var newMap;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!map.current) {
                // NOTE: Publically available access token. ~ RM
                // https://docs.mapbox.com/mapbox-gl-js/example/simple-map/
                // TODO: Hide access token. ~ RM
                mapboxgl.accessToken = 'pk.eyJ1Ijoicm1vcmFudGVzIiwiYSI6ImNqYTRtaWp5MzRjcXEzMXBveWViOGNjYm0ifQ.lt1qdGpfbbrT328BOUhIpQ';
                newMap = new mapboxgl.Map({
                  center: [0, 0],
                  container: 'listing-map',
                  style: 'mapbox://styles/mapbox/streets-v11',
                  zoom: 1
                }); // TODO: Add user location icons. ~ RM

                map.current = newMap;
                startGeotracking();
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  };

  var startGeotracking = function startGeotracking() {
    var success = function success(position) {
      map.current.flyTo({
        center: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        },
        zoom: 15
      });
    };

    var error = function error(_error) {
      console.warn('ERROR(' + _error.code + '): ' + _error.message);
    };

    var id = navigator.geolocation.watchPosition(success, error); // TODO: Cleanup. ~ RM
    // navigator.geolocation.clearWatch(id)
  };

  useEffect(initialize);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Wrapper, {
    id: "listing-map",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  });
};

var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Map__Wrapper",
  componentId: "mlhxr6-0"
})(["height:100vh;width:100vw;"]);
/* harmony default export */ __webpack_exports__["default"] = (PageIndex_Map);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")["useRef"], __webpack_require__(/*! react */ "./node_modules/react/index.js")["useEffect"]))

/***/ })

})
//# sourceMappingURL=index.js.386f77368d046e0dbadb.hot-update.js.map