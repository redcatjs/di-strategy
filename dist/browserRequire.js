"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getPrototypeOf = _interopRequireDefault(require("babel-runtime/core-js/object/get-prototype-of"));

var _classCallCheck2 = _interopRequireDefault(require("babel-runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("babel-runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("babel-runtime/helpers/possibleConstructorReturn"));

var _inherits2 = _interopRequireDefault(require("babel-runtime/helpers/inherits"));

var _require = _interopRequireDefault(require("./require"));

var BrowserRequire =
/*#__PURE__*/
function (_Require) {
  (0, _inherits2.default)(BrowserRequire, _Require);

  function BrowserRequire(dep) {
    var _this;

    var requires = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    (0, _classCallCheck2.default)(this, BrowserRequire);
    _this = (0, _possibleConstructorReturn2.default)(this, (BrowserRequire.__proto__ || (0, _getPrototypeOf.default)(BrowserRequire)).call(this, dep));
    _this.requires = requires;
    return _this;
  }

  (0, _createClass2.default)(BrowserRequire, [{
    key: "require",
    value: function require() {
      return this.requires[this.dep];
    }
  }]);
  return BrowserRequire;
}(_require.default);

exports.default = BrowserRequire;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9icm93c2VyUmVxdWlyZS5qcyJdLCJuYW1lcyI6WyJCcm93c2VyUmVxdWlyZSIsImRlcCIsInJlcXVpcmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBQ3FCQSxjOzs7OztBQUNwQiwwQkFBWUMsR0FBWixFQUErQjtBQUFBOztBQUFBLFFBQWRDLFFBQWMsdUVBQUgsRUFBRztBQUFBO0FBQzlCLGlKQUFNRCxHQUFOO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFGOEI7QUFHOUI7Ozs7OEJBQ1E7QUFDUixhQUFPLEtBQUtBLFFBQUwsQ0FBYyxLQUFLRCxHQUFuQixDQUFQO0FBQ0EiLCJmaWxlIjoiYnJvd3NlclJlcXVpcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVxdWlyZSBmcm9tICcuL3JlcXVpcmUnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcm93c2VyUmVxdWlyZSBleHRlbmRzIFJlcXVpcmV7XG5cdGNvbnN0cnVjdG9yKGRlcCwgcmVxdWlyZXMgPSBbXSl7XG5cdFx0c3VwZXIoZGVwKTtcblx0XHR0aGlzLnJlcXVpcmVzID0gcmVxdWlyZXM7XG5cdH1cblx0cmVxdWlyZSgpe1xuXHRcdHJldHVybiB0aGlzLnJlcXVpcmVzW3RoaXMuZGVwXTtcblx0fVxufVxuIl19