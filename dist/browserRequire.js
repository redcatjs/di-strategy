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
    _this = (0, _possibleConstructorReturn2.default)(this, (BrowserRequire.__proto__ || (0, _getPrototypeOf.default)(BrowserRequire)).call(this));
    _this.dep = dep;
    return _this;
  }

  (0, _createClass2.default)(BrowserRequire, [{
    key: "require",
    value: function require() {
      return requires[this.dep];
    }
  }]);
  return BrowserRequire;
}(_require.default);

exports.default = BrowserRequire;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9icm93c2VyUmVxdWlyZS5qcyJdLCJuYW1lcyI6WyJCcm93c2VyUmVxdWlyZSIsImRlcCIsInJlcXVpcmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBQ3FCQSxjOzs7OztBQUNwQiwwQkFBWUMsR0FBWixFQUErQjtBQUFBOztBQUFBLFFBQWRDLFFBQWMsdUVBQUgsRUFBRztBQUFBO0FBQzlCO0FBQ0EsVUFBS0QsR0FBTCxHQUFXQSxHQUFYO0FBRjhCO0FBRzlCOzs7OzhCQUNRO0FBQ1IsYUFBT0MsU0FBUyxLQUFLRCxHQUFkLENBQVA7QUFDQSIsImZpbGUiOiJicm93c2VyUmVxdWlyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXF1aXJlIGZyb20gJy4vcmVxdWlyZSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyb3dzZXJSZXF1aXJlIGV4dGVuZHMgUmVxdWlyZXtcblx0Y29uc3RydWN0b3IoZGVwLCByZXF1aXJlcyA9IFtdKXtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuZGVwID0gZGVwO1xuXHR9XG5cdHJlcXVpcmUoKXtcblx0XHRyZXR1cm4gcmVxdWlyZXNbdGhpcy5kZXBdO1xuXHR9XG59XG4iXX0=