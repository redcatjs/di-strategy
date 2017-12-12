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

var _interface = _interopRequireDefault(require("./interface"));

var InterfaceClass =
/*#__PURE__*/
function (_Interface) {
  (0, _inherits2.default)(InterfaceClass, _Interface);

  function InterfaceClass(name, interfaceClass) {
    var _this;

    (0, _classCallCheck2.default)(this, InterfaceClass);
    _this = (0, _possibleConstructorReturn2.default)(this, (InterfaceClass.__proto__ || (0, _getPrototypeOf.default)(InterfaceClass)).call(this, name));
    _this.interfaceClass = interfaceClass;
    return _this;
  }

  (0, _createClass2.default)(InterfaceClass, [{
    key: "getInterfaceClass",
    value: function getInterfaceClass() {
      return this.interfaceClass;
    }
  }]);
  return InterfaceClass;
}(_interface.default);

exports.default = InterfaceClass;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbnRlcmZhY2VDbGFzcy5qcyJdLCJuYW1lcyI6WyJJbnRlcmZhY2VDbGFzcyIsIm5hbWUiLCJpbnRlcmZhY2VDbGFzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUNxQkEsYzs7Ozs7QUFDcEIsMEJBQVlDLElBQVosRUFBa0JDLGNBQWxCLEVBQWlDO0FBQUE7O0FBQUE7QUFDaEMsaUpBQU1ELElBQU47QUFDQSxVQUFLQyxjQUFMLEdBQXNCQSxjQUF0QjtBQUZnQztBQUdoQzs7Ozt3Q0FDa0I7QUFDbEIsYUFBTyxLQUFLQSxjQUFaO0FBQ0EiLCJmaWxlIjoiaW50ZXJmYWNlQ2xhc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW50ZXJmYWNlIGZyb20gJy4vaW50ZXJmYWNlJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50ZXJmYWNlQ2xhc3MgZXh0ZW5kcyBJbnRlcmZhY2V7XG5cdGNvbnN0cnVjdG9yKG5hbWUsIGludGVyZmFjZUNsYXNzKXtcblx0XHRzdXBlcihuYW1lKTtcblx0XHR0aGlzLmludGVyZmFjZUNsYXNzID0gaW50ZXJmYWNlQ2xhc3M7XG5cdH1cblx0Z2V0SW50ZXJmYWNlQ2xhc3MoKXtcblx0XHRyZXR1cm4gdGhpcy5pbnRlcmZhY2VDbGFzcztcblx0fVxufVxuIl19