"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("babel-runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("babel-runtime/helpers/createClass"));

var SharedInstance =
/*#__PURE__*/
function () {
  function SharedInstance(interfaceName, container) {
    (0, _classCallCheck2.default)(this, SharedInstance);
    this.container = container;
    this.interfaceName = interfaceName;
  }

  (0, _createClass2.default)(SharedInstance, [{
    key: "get",
    value: function get(shareInstances) {
      var stack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      if (!this.instance) {
        this.instance = this.container.get(this.interfaceName, undefined, shareInstances, stack);
      }

      return this.instance;
    }
  }]);
  return SharedInstance;
}();

exports.default = SharedInstance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zaGFyZWRJbnN0YW5jZS5qcyJdLCJuYW1lcyI6WyJTaGFyZWRJbnN0YW5jZSIsImludGVyZmFjZU5hbWUiLCJjb250YWluZXIiLCJzaGFyZUluc3RhbmNlcyIsInN0YWNrIiwiaW5zdGFuY2UiLCJnZXQiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFBcUJBLGM7OztBQUNwQiwwQkFBWUMsYUFBWixFQUEyQkMsU0FBM0IsRUFBcUM7QUFBQTtBQUNwQyxTQUFLQSxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtELGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0E7Ozs7d0JBQ0dFLGMsRUFBMkI7QUFBQSxVQUFYQyxLQUFXLHVFQUFILEVBQUc7O0FBQzlCLFVBQUcsQ0FBQyxLQUFLQyxRQUFULEVBQWtCO0FBQ2pCLGFBQUtBLFFBQUwsR0FBZ0IsS0FBS0gsU0FBTCxDQUFlSSxHQUFmLENBQW1CLEtBQUtMLGFBQXhCLEVBQXVDTSxTQUF2QyxFQUFrREosY0FBbEQsRUFBa0VDLEtBQWxFLENBQWhCO0FBQ0E7O0FBQ0QsYUFBTyxLQUFLQyxRQUFaO0FBQ0EiLCJmaWxlIjoic2hhcmVkSW5zdGFuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFyZWRJbnN0YW5jZXtcblx0Y29uc3RydWN0b3IoaW50ZXJmYWNlTmFtZSwgY29udGFpbmVyKXtcblx0XHR0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblx0XHR0aGlzLmludGVyZmFjZU5hbWUgPSBpbnRlcmZhY2VOYW1lO1xuXHR9XG5cdGdldChzaGFyZUluc3RhbmNlcywgc3RhY2sgPSBbXSl7XG5cdFx0aWYoIXRoaXMuaW5zdGFuY2Upe1xuXHRcdFx0dGhpcy5pbnN0YW5jZSA9IHRoaXMuY29udGFpbmVyLmdldCh0aGlzLmludGVyZmFjZU5hbWUsIHVuZGVmaW5lZCwgc2hhcmVJbnN0YW5jZXMsIHN0YWNrKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuaW5zdGFuY2U7XG5cdH1cbn1cbiJdfQ==