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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXF1aXJlRm9yV2VicGFjay5qcyJdLCJuYW1lcyI6WyJSZXF1aXJlIiwiZGVwIiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUNxQkEsTzs7Ozs7QUFDcEIsbUJBQVlDLEdBQVosRUFBZ0I7QUFBQTs7QUFBQTtBQUNmO0FBQ0EsVUFBS0EsR0FBTCxHQUFXQSxHQUFYO0FBRmU7QUFHZjs7Ozs7Ozs7Ozs7Ozs7a0JBQ1E7QUFDUixhQUFPQyxRQUFRLEtBQUtELEdBQWIsQ0FBUDtBQUNBLEsiLCJmaWxlIjoicmVxdWlyZUZvcldlYnBhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmFyIGZyb20gJy4vdmFyJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVxdWlyZSBleHRlbmRzIFZhcntcblx0Y29uc3RydWN0b3IoZGVwKXtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuZGVwID0gZGVwO1xuXHR9XG5cdHJlcXVpcmUoKXtcblx0XHRyZXR1cm4gcmVxdWlyZSh0aGlzLmRlcCk7XG5cdH1cbn1cbiJdfQ==