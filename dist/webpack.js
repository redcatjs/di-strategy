"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeWebpackContainer = makeWebpackContainer;
exports.WebpackContainer = exports.default = void 0;

var _getPrototypeOf = _interopRequireDefault(require("babel-runtime/core-js/object/get-prototype-of"));

var _classCallCheck2 = _interopRequireDefault(require("babel-runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("babel-runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("babel-runtime/helpers/possibleConstructorReturn"));

var _inherits2 = _interopRequireDefault(require("babel-runtime/helpers/inherits"));

var _container = _interopRequireDefault(require("./container"));

var _makeContainerApi = _interopRequireDefault(require("./makeContainerApi"));

var _webpackRequire = _interopRequireDefault(require("./webpackRequire"));

var _default = makeWebpackContainer;
exports.default = _default;

function makeWebpackContainer(config) {
  var container = new WebpackContainer(config);
  return (0, _makeContainerApi.default)(container);
}

var WebpackContainer =
/*#__PURE__*/
function (_Container) {
  (0, _inherits2.default)(WebpackContainer, _Container);

  function WebpackContainer() {
    (0, _classCallCheck2.default)(this, WebpackContainer);
    return (0, _possibleConstructorReturn2.default)(this, (WebpackContainer.__proto__ || (0, _getPrototypeOf.default)(WebpackContainer)).apply(this, arguments));
  }

  (0, _createClass2.default)(WebpackContainer, [{
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
      return new _webpackRequire.default(dep, this.requires);
    }
  }]);
  return WebpackContainer;
}(_container.default);

exports.WebpackContainer = WebpackContainer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93ZWJwYWNrLmpzIl0sIm5hbWVzIjpbIm1ha2VXZWJwYWNrQ29udGFpbmVyIiwiY29uZmlnIiwiY29udGFpbmVyIiwiV2VicGFja0NvbnRhaW5lciIsInJlcXVpcmVQYXRoIiwicmVxdWlyZXMiLCJkZXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O2VBRWVBLG9COzs7QUFFUixTQUFTQSxvQkFBVCxDQUE4QkMsTUFBOUIsRUFBcUM7QUFDM0MsTUFBTUMsWUFBWSxJQUFJQyxnQkFBSixDQUFxQkYsTUFBckIsQ0FBbEI7QUFDQSxTQUFPLCtCQUFpQkMsU0FBakIsQ0FBUDtBQUNBOztJQUVZQyxnQjs7Ozs7Ozs7Ozs7OzhCQUVGQyxXLEVBQVk7QUFDckIsYUFBTyxDQUFDLENBQUMsS0FBS0MsUUFBTCxDQUFjRCxXQUFkLENBQVQ7QUFDQTs7OytCQUNVQSxXLEVBQVk7QUFDdEIsYUFBTyxLQUFLQyxRQUFMLENBQWNELFdBQWQsQ0FBUDtBQUNBOzs7NEJBRU9FLEcsRUFBSTtBQUNYLGFBQU8sNEJBQW1CQSxHQUFuQixFQUF3QixLQUFLRCxRQUE3QixDQUFQO0FBQ0EiLCJmaWxlIjoid2VicGFjay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250YWluZXIgZnJvbSAnLi9jb250YWluZXInXG5pbXBvcnQgbWFrZUNvbnRhaW5lckFwaSBmcm9tICcuL21ha2VDb250YWluZXJBcGknXG5cbmltcG9ydCBXZWJwYWNrUmVxdWlyZSBmcm9tICcuL3dlYnBhY2tSZXF1aXJlJ1xuXG5leHBvcnQgZGVmYXVsdCBtYWtlV2VicGFja0NvbnRhaW5lcjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VXZWJwYWNrQ29udGFpbmVyKGNvbmZpZyl7XG5cdGNvbnN0IGNvbnRhaW5lciA9IG5ldyBXZWJwYWNrQ29udGFpbmVyKGNvbmZpZyk7XG5cdHJldHVybiBtYWtlQ29udGFpbmVyQXBpKGNvbnRhaW5lcik7XG59XG5cbmV4cG9ydCBjbGFzcyBXZWJwYWNrQ29udGFpbmVyIGV4dGVuZHMgQ29udGFpbmVye1xuXHRcblx0ZGVwRXhpc3RzKHJlcXVpcmVQYXRoKXtcblx0XHRyZXR1cm4gISF0aGlzLnJlcXVpcmVzW3JlcXVpcmVQYXRoXTtcblx0fVxuXHRkZXBSZXF1aXJlKHJlcXVpcmVQYXRoKXtcblx0XHRyZXR1cm4gdGhpcy5yZXF1aXJlc1tyZXF1aXJlUGF0aF07XG5cdH1cblx0XG5cdHJlcXVpcmUoZGVwKXtcblx0XHRyZXR1cm4gbmV3IFdlYnBhY2tSZXF1aXJlKGRlcCwgdGhpcy5yZXF1aXJlcyk7XG5cdH1cblx0XG59XG4iXX0=
