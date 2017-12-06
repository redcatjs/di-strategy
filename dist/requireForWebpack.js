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

var _var = _interopRequireDefault(require("./var"));

var Require =
/*#__PURE__*/
function (_Var) {
  (0, _inherits2.default)(Require, _Var);

  function Require(dep) {
    var _this;

    (0, _classCallCheck2.default)(this, Require);
    _this = (0, _possibleConstructorReturn2.default)(this, (Require.__proto__ || (0, _getPrototypeOf.default)(Require)).call(this));
    _this.dep = dep;
    return _this;
  }

  (0, _createClass2.default)(Require, [{
    key: "require",
    value: function (_require) {
      function require() {
        return _require.apply(this, arguments);
      }

      require.toString = function () {
        return _require.toString();
      };

      return require;
    }(function () {
      return require(this.dep);
    })
  }]);
  return Require;
}(_var.default);

exports.default = Require;