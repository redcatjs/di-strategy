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

var _container = _interopRequireDefault(require("./container"));

var _makeContainerApi = _interopRequireDefault(require("./makeContainerApi"));

var _browserRequire = _interopRequireDefault(require("./browserRequire"));

function makeBrowserContainer(config) {
  var container = new BrowserContainer(config);
  return (0, _makeContainerApi.default)(container);
}

var BrowserContainer =
/*#__PURE__*/
function (_Container) {
  (0, _inherits2.default)(BrowserContainer, _Container);

  function BrowserContainer() {
    (0, _classCallCheck2.default)(this, BrowserContainer);
    return (0, _possibleConstructorReturn2.default)(this, (BrowserContainer.__proto__ || (0, _getPrototypeOf.default)(BrowserContainer)).apply(this, arguments));
  }

  (0, _createClass2.default)(BrowserContainer, [{
    key: "depExists",
    value: function depExists(requirePath) {
      return !!this.requires[requirePath];
    }
  }, {
    key: "depRequire",
    value: function depRequire(requirePath) {
      return this.requires[requirePath];
    }
  }, {
    key: "require",
    value: function require(dep) {
      return new _browserRequire.default(dep, this.requires);
    }
  }]);
  return BrowserContainer;
}(_container.default);

var _default = makeBrowserContainer;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9icm93c2VyLmpzIl0sIm5hbWVzIjpbIm1ha2VCcm93c2VyQ29udGFpbmVyIiwiY29uZmlnIiwiY29udGFpbmVyIiwiQnJvd3NlckNvbnRhaW5lciIsInJlcXVpcmVQYXRoIiwicmVxdWlyZXMiLCJkZXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFHQSxTQUFTQSxvQkFBVCxDQUE4QkMsTUFBOUIsRUFBcUM7QUFDcEMsTUFBTUMsWUFBWSxJQUFJQyxnQkFBSixDQUFxQkYsTUFBckIsQ0FBbEI7QUFDQSxTQUFPLCtCQUFpQkMsU0FBakIsQ0FBUDtBQUNBOztJQUVLQyxnQjs7Ozs7Ozs7Ozs7OzhCQUVLQyxXLEVBQVk7QUFDckIsYUFBTyxDQUFDLENBQUMsS0FBS0MsUUFBTCxDQUFjRCxXQUFkLENBQVQ7QUFDQTs7OytCQUNVQSxXLEVBQVk7QUFDdEIsYUFBTyxLQUFLQyxRQUFMLENBQWNELFdBQWQsQ0FBUDtBQUNBOzs7NEJBRU9FLEcsRUFBSTtBQUNYLGFBQU8sNEJBQW1CQSxHQUFuQixFQUF3QixLQUFLRCxRQUE3QixDQUFQO0FBQ0E7Ozs7O2VBSWFMLG9CIiwiZmlsZSI6ImJyb3dzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vY29udGFpbmVyJ1xuaW1wb3J0IG1ha2VDb250YWluZXJBcGkgZnJvbSAnLi9tYWtlQ29udGFpbmVyQXBpJ1xuXG5pbXBvcnQgQnJvd3NlclJlcXVpcmUgZnJvbSAnLi9icm93c2VyUmVxdWlyZSdcblxuXG5mdW5jdGlvbiBtYWtlQnJvd3NlckNvbnRhaW5lcihjb25maWcpe1xuXHRjb25zdCBjb250YWluZXIgPSBuZXcgQnJvd3NlckNvbnRhaW5lcihjb25maWcpO1xuXHRyZXR1cm4gbWFrZUNvbnRhaW5lckFwaShjb250YWluZXIpO1xufVxuXG5jbGFzcyBCcm93c2VyQ29udGFpbmVyIGV4dGVuZHMgQ29udGFpbmVye1xuXHRcblx0ZGVwRXhpc3RzKHJlcXVpcmVQYXRoKXtcblx0XHRyZXR1cm4gISF0aGlzLnJlcXVpcmVzW3JlcXVpcmVQYXRoXTtcblx0fVxuXHRkZXBSZXF1aXJlKHJlcXVpcmVQYXRoKXtcblx0XHRyZXR1cm4gdGhpcy5yZXF1aXJlc1tyZXF1aXJlUGF0aF07XG5cdH1cblx0XG5cdHJlcXVpcmUoZGVwKXtcblx0XHRyZXR1cm4gbmV3IEJyb3dzZXJSZXF1aXJlKGRlcCwgdGhpcy5yZXF1aXJlcyk7XG5cdH1cblx0XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VCcm93c2VyQ29udGFpbmVyO1xuIl19