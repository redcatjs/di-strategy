"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getPrototypeOf = _interopRequireDefault(require("babel-runtime/core-js/object/get-prototype-of"));

var _classCallCheck2 = _interopRequireDefault(require("babel-runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("babel-runtime/helpers/possibleConstructorReturn"));

var _inherits2 = _interopRequireDefault(require("babel-runtime/helpers/inherits"));

var _var = _interopRequireDefault(require("./var"));

var Factory =
/*#__PURE__*/
function (_Var) {
  (0, _inherits2.default)(Factory, _Var);

  function Factory(callback) {
    var _this;

    var shareInstances = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    (0, _classCallCheck2.default)(this, Factory);
    _this = (0, _possibleConstructorReturn2.default)(this, (Factory.__proto__ || (0, _getPrototypeOf.default)(Factory)).call(this));
    _this.callbackDef = callback;
    _this.shareInstances = shareInstances;
    return _this;
  }

  return Factory;
}(_var.default);

exports.default = Factory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mYWN0b3J5LmpzIl0sIm5hbWVzIjpbIkZhY3RvcnkiLCJjYWxsYmFjayIsInNoYXJlSW5zdGFuY2VzIiwiY2FsbGJhY2tEZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBQ3FCQSxPOzs7OztBQUNwQixtQkFBWUMsUUFBWixFQUE2QztBQUFBOztBQUFBLFFBQXZCQyxjQUF1Qix1RUFBTixLQUFNO0FBQUE7QUFDNUM7QUFDQSxVQUFLQyxXQUFMLEdBQW1CRixRQUFuQjtBQUNBLFVBQUtDLGNBQUwsR0FBc0JBLGNBQXRCO0FBSDRDO0FBSTVDIiwiZmlsZSI6ImZhY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmFyIGZyb20gJy4vdmFyJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjdG9yeSBleHRlbmRzIFZhciB7XG5cdGNvbnN0cnVjdG9yKGNhbGxiYWNrLCBzaGFyZUluc3RhbmNlcyA9IGZhbHNlKXtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuY2FsbGJhY2tEZWYgPSBjYWxsYmFjaztcblx0XHR0aGlzLnNoYXJlSW5zdGFuY2VzID0gc2hhcmVJbnN0YW5jZXM7XG5cdH1cbn1cbiJdfQ==