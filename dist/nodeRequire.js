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

var _require2 = _interopRequireDefault(require("./require"));

var NodeRequire =
/*#__PURE__*/
function (_Require) {
  (0, _inherits2.default)(NodeRequire, _Require);

  function NodeRequire(dep) {
    var _this;

    (0, _classCallCheck2.default)(this, NodeRequire);
    _this = (0, _possibleConstructorReturn2.default)(this, (NodeRequire.__proto__ || (0, _getPrototypeOf.default)(NodeRequire)).call(this));
    _this.dep = dep;
    return _this;
  }

  (0, _createClass2.default)(NodeRequire, [{
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
  return NodeRequire;
}(_require2.default);

exports.default = NodeRequire;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ub2RlUmVxdWlyZS5qcyJdLCJuYW1lcyI6WyJOb2RlUmVxdWlyZSIsImRlcCIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFDcUJBLFc7Ozs7O0FBQ3BCLHVCQUFZQyxHQUFaLEVBQWdCO0FBQUE7O0FBQUE7QUFDZjtBQUNBLFVBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUZlO0FBR2Y7Ozs7Ozs7Ozs7Ozs7O2tCQUNRO0FBQ1IsYUFBT0MsUUFBUSxLQUFLRCxHQUFiLENBQVA7QUFDQSxLIiwiZmlsZSI6Im5vZGVSZXF1aXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlcXVpcmUgZnJvbSAnLi9yZXF1aXJlJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZVJlcXVpcmUgZXh0ZW5kcyBSZXF1aXJle1xuXHRjb25zdHJ1Y3RvcihkZXApe1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5kZXAgPSBkZXA7XG5cdH1cblx0cmVxdWlyZSgpe1xuXHRcdHJldHVybiByZXF1aXJlKHRoaXMuZGVwKTtcblx0fVxufVxuIl19