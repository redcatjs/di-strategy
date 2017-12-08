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

var _factory = _interopRequireDefault(require("./factory"));

var ValueFactory =
/*#__PURE__*/
function (_Factory) {
  (0, _inherits2.default)(ValueFactory, _Factory);

  function ValueFactory() {
    (0, _classCallCheck2.default)(this, ValueFactory);
    return (0, _possibleConstructorReturn2.default)(this, (ValueFactory.__proto__ || (0, _getPrototypeOf.default)(ValueFactory)).apply(this, arguments));
  }

  (0, _createClass2.default)(ValueFactory, [{
    key: "callback",
    value: function callback(shareInstances) {
      if (this.shareInstances) {
        return this.callbackDef(shareInstances);
      }

      return this.callbackDef();
    }
  }]);
  return ValueFactory;
}(_factory.default);

exports.default = ValueFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92YWx1ZUZhY3RvcnkuanMiXSwibmFtZXMiOlsiVmFsdWVGYWN0b3J5Iiwic2hhcmVJbnN0YW5jZXMiLCJjYWxsYmFja0RlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUNxQkEsWTs7Ozs7Ozs7Ozs7OzZCQUNYQyxjLEVBQWU7QUFDdkIsVUFBRyxLQUFLQSxjQUFSLEVBQXVCO0FBQ3RCLGVBQU8sS0FBS0MsV0FBTCxDQUFpQkQsY0FBakIsQ0FBUDtBQUNBOztBQUNELGFBQU8sS0FBS0MsV0FBTCxFQUFQO0FBQ0EiLCJmaWxlIjoidmFsdWVGYWN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZhY3RvcnkgZnJvbSAnLi9mYWN0b3J5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsdWVGYWN0b3J5IGV4dGVuZHMgRmFjdG9yeSB7XG5cdGNhbGxiYWNrKHNoYXJlSW5zdGFuY2VzKXtcblx0XHRpZih0aGlzLnNoYXJlSW5zdGFuY2VzKXtcblx0XHRcdHJldHVybiB0aGlzLmNhbGxiYWNrRGVmKHNoYXJlSW5zdGFuY2VzKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuY2FsbGJhY2tEZWYoKTtcblx0fVxufVxuIl19