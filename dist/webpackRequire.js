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

var WebpackRequire =
/*#__PURE__*/
function (_Require) {
  (0, _inherits2.default)(WebpackRequire, _Require);

  function WebpackRequire(dep) {
    var _this;

    var requires = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    (0, _classCallCheck2.default)(this, WebpackRequire);
    _this = (0, _possibleConstructorReturn2.default)(this, (WebpackRequire.__proto__ || (0, _getPrototypeOf.default)(WebpackRequire)).call(this));
    _this.dep = dep;
    return _this;
  }

  (0, _createClass2.default)(WebpackRequire, [{
    key: "require",
    value: function require() {
      return requires[this.dep];
    }
  }]);
  return WebpackRequire;
}(_require.default);

exports.default = WebpackRequire;