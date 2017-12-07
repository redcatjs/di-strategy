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
    (0, _classCallCheck2.default)(this, NodeRequire);
    return (0, _possibleConstructorReturn2.default)(this, (NodeRequire.__proto__ || (0, _getPrototypeOf.default)(NodeRequire)).call(this, dep));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ub2RlUmVxdWlyZS5qcyJdLCJuYW1lcyI6WyJOb2RlUmVxdWlyZSIsImRlcCIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFDcUJBLFc7Ozs7O0FBQ3BCLHVCQUFZQyxHQUFaLEVBQWdCO0FBQUE7QUFBQSwwSUFDVEEsR0FEUztBQUVmOzs7Ozs7Ozs7Ozs7OztrQkFDUTtBQUNSLGFBQU9DLFFBQVEsS0FBS0QsR0FBYixDQUFQO0FBQ0EsSyIsImZpbGUiOiJub2RlUmVxdWlyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXF1aXJlIGZyb20gJy4vcmVxdWlyZSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGVSZXF1aXJlIGV4dGVuZHMgUmVxdWlyZXtcblx0Y29uc3RydWN0b3IoZGVwKXtcblx0XHRzdXBlcihkZXApO1xuXHR9XG5cdHJlcXVpcmUoKXtcblx0XHRyZXR1cm4gcmVxdWlyZSh0aGlzLmRlcCk7XG5cdH1cbn1cbiJdfQ==