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

var ClassFactory =
/*#__PURE__*/
function (_Factory) {
  (0, _inherits2.default)(ClassFactory, _Factory);

  function ClassFactory() {
    (0, _classCallCheck2.default)(this, ClassFactory);
    return (0, _possibleConstructorReturn2.default)(this, (ClassFactory.__proto__ || (0, _getPrototypeOf.default)(ClassFactory)).apply(this, arguments));
  }

  (0, _createClass2.default)(ClassFactory, [{
    key: "callback",
    value: function callback(shareInstances) {
      if (this.shareInstances) {
        return new this.callbackDef(shareInstances);
      }

      return new this.callbackDef();
    }
  }]);
  return ClassFactory;
}(_factory.default);

exports.default = ClassFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGFzc0ZhY3RvcnkuanMiXSwibmFtZXMiOlsiQ2xhc3NGYWN0b3J5Iiwic2hhcmVJbnN0YW5jZXMiLCJjYWxsYmFja0RlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUNxQkEsWTs7Ozs7Ozs7Ozs7OzZCQUNYQyxjLEVBQWU7QUFDdkIsVUFBRyxLQUFLQSxjQUFSLEVBQXVCO0FBQ3RCLGVBQU8sSUFBSSxLQUFLQyxXQUFULENBQXFCRCxjQUFyQixDQUFQO0FBQ0E7O0FBQ0QsYUFBTyxJQUFJLEtBQUtDLFdBQVQsRUFBUDtBQUNBIiwiZmlsZSI6ImNsYXNzRmFjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGYWN0b3J5IGZyb20gJy4vZmFjdG9yeSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsYXNzRmFjdG9yeSBleHRlbmRzIEZhY3Rvcnkge1xuXHRjYWxsYmFjayhzaGFyZUluc3RhbmNlcyl7XG5cdFx0aWYodGhpcy5zaGFyZUluc3RhbmNlcyl7XG5cdFx0XHRyZXR1cm4gbmV3IHRoaXMuY2FsbGJhY2tEZWYoc2hhcmVJbnN0YW5jZXMpO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3IHRoaXMuY2FsbGJhY2tEZWYoKTtcblx0fVxufVxuIl19