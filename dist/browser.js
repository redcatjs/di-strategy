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

var _dependency = _interopRequireDefault(require("./dependency"));

function makeContainer(config) {
  var container = new BrowserContainer(config);
  return (0, _makeContainerApi.default)(container);
}

function requireFile() {
  throw new Error('The method requireContext is only for implemented node, in webpack use require api');
}

function requireContext() {
  throw new Error('The method requireContext is only for implemented node, in webpack use require.context api');
}

function dependency(dep) {
  return new _dependency.default(dep);
}

makeContainer.dependency = dependency;
makeContainer.context = requireContext;
makeContainer.require = requireFile;
makeContainer.setInterfacePrototypeDefault = _container.default.setInterfacePrototypeDefault;
makeContainer.getInterfacePrototypeDefault = _container.default.getInterfacePrototypeDefault;

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

var _default = makeContainer;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9icm93c2VyLmpzIl0sIm5hbWVzIjpbIm1ha2VDb250YWluZXIiLCJjb25maWciLCJjb250YWluZXIiLCJCcm93c2VyQ29udGFpbmVyIiwicmVxdWlyZUZpbGUiLCJFcnJvciIsInJlcXVpcmVDb250ZXh0IiwiZGVwZW5kZW5jeSIsImRlcCIsImNvbnRleHQiLCJyZXF1aXJlIiwic2V0SW50ZXJmYWNlUHJvdG90eXBlRGVmYXVsdCIsImdldEludGVyZmFjZVByb3RvdHlwZURlZmF1bHQiLCJyZXF1aXJlUGF0aCIsInJlcXVpcmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxDQUF1QkMsTUFBdkIsRUFBOEI7QUFDN0IsTUFBTUMsWUFBWSxJQUFJQyxnQkFBSixDQUFxQkYsTUFBckIsQ0FBbEI7QUFDQSxTQUFPLCtCQUFpQkMsU0FBakIsQ0FBUDtBQUNBOztBQUVELFNBQVNFLFdBQVQsR0FBc0I7QUFDckIsUUFBTSxJQUFJQyxLQUFKLENBQVUsb0ZBQVYsQ0FBTjtBQUNBOztBQUNELFNBQVNDLGNBQVQsR0FBeUI7QUFDeEIsUUFBTSxJQUFJRCxLQUFKLENBQVUsNEZBQVYsQ0FBTjtBQUNBOztBQUNELFNBQVNFLFVBQVQsQ0FBb0JDLEdBQXBCLEVBQXdCO0FBQ3ZCLFNBQU8sd0JBQWVBLEdBQWYsQ0FBUDtBQUNBOztBQUVEUixjQUFjTyxVQUFkLEdBQTJCQSxVQUEzQjtBQUNBUCxjQUFjUyxPQUFkLEdBQXdCSCxjQUF4QjtBQUNBTixjQUFjVSxPQUFkLEdBQXdCTixXQUF4QjtBQUNBSixjQUFjVyw0QkFBZCxHQUE2QyxtQkFBVUEsNEJBQXZEO0FBQ0FYLGNBQWNZLDRCQUFkLEdBQTZDLG1CQUFVQSw0QkFBdkQ7O0lBRU1ULGdCOzs7Ozs7Ozs7Ozs7OEJBR0tVLFcsRUFBWTtBQUNyQixhQUFPLENBQUMsQ0FBQyxLQUFLQyxRQUFMLENBQWNELFdBQWQsQ0FBVDtBQUNBOzs7K0JBQ1VBLFcsRUFBWTtBQUN0QixhQUFPLEtBQUtDLFFBQUwsQ0FBY0QsV0FBZCxDQUFQO0FBQ0E7Ozs0QkFFT0wsRyxFQUFJO0FBQ1gsYUFBTyw0QkFBbUJBLEdBQW5CLEVBQXdCLEtBQUtNLFFBQTdCLENBQVA7QUFDQTs7Ozs7ZUFJYWQsYSIsImZpbGUiOiJicm93c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lcidcbmltcG9ydCBtYWtlQ29udGFpbmVyQXBpIGZyb20gJy4vbWFrZUNvbnRhaW5lckFwaSdcblxuaW1wb3J0IEJyb3dzZXJSZXF1aXJlIGZyb20gJy4vYnJvd3NlclJlcXVpcmUnXG5pbXBvcnQgRGVwZW5kZW5jeSBmcm9tICcuL2RlcGVuZGVuY3knXG5cbmZ1bmN0aW9uIG1ha2VDb250YWluZXIoY29uZmlnKXtcblx0Y29uc3QgY29udGFpbmVyID0gbmV3IEJyb3dzZXJDb250YWluZXIoY29uZmlnKTtcblx0cmV0dXJuIG1ha2VDb250YWluZXJBcGkoY29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gcmVxdWlyZUZpbGUoKXtcblx0dGhyb3cgbmV3IEVycm9yKCdUaGUgbWV0aG9kIHJlcXVpcmVDb250ZXh0IGlzIG9ubHkgZm9yIGltcGxlbWVudGVkIG5vZGUsIGluIHdlYnBhY2sgdXNlIHJlcXVpcmUgYXBpJyk7XG59XG5mdW5jdGlvbiByZXF1aXJlQ29udGV4dCgpe1xuXHR0aHJvdyBuZXcgRXJyb3IoJ1RoZSBtZXRob2QgcmVxdWlyZUNvbnRleHQgaXMgb25seSBmb3IgaW1wbGVtZW50ZWQgbm9kZSwgaW4gd2VicGFjayB1c2UgcmVxdWlyZS5jb250ZXh0IGFwaScpO1xufVxuZnVuY3Rpb24gZGVwZW5kZW5jeShkZXApe1xuXHRyZXR1cm4gbmV3IERlcGVuZGVuY3koZGVwKTtcbn1cblxubWFrZUNvbnRhaW5lci5kZXBlbmRlbmN5ID0gZGVwZW5kZW5jeTtcbm1ha2VDb250YWluZXIuY29udGV4dCA9IHJlcXVpcmVDb250ZXh0O1xubWFrZUNvbnRhaW5lci5yZXF1aXJlID0gcmVxdWlyZUZpbGU7XG5tYWtlQ29udGFpbmVyLnNldEludGVyZmFjZVByb3RvdHlwZURlZmF1bHQgPSBDb250YWluZXIuc2V0SW50ZXJmYWNlUHJvdG90eXBlRGVmYXVsdDtcbm1ha2VDb250YWluZXIuZ2V0SW50ZXJmYWNlUHJvdG90eXBlRGVmYXVsdCA9IENvbnRhaW5lci5nZXRJbnRlcmZhY2VQcm90b3R5cGVEZWZhdWx0O1xuXG5jbGFzcyBCcm93c2VyQ29udGFpbmVyIGV4dGVuZHMgQ29udGFpbmVye1xuXHRcblx0XG5cdGRlcEV4aXN0cyhyZXF1aXJlUGF0aCl7XG5cdFx0cmV0dXJuICEhdGhpcy5yZXF1aXJlc1tyZXF1aXJlUGF0aF07XG5cdH1cblx0ZGVwUmVxdWlyZShyZXF1aXJlUGF0aCl7XG5cdFx0cmV0dXJuIHRoaXMucmVxdWlyZXNbcmVxdWlyZVBhdGhdO1xuXHR9XG5cdFxuXHRyZXF1aXJlKGRlcCl7XG5cdFx0cmV0dXJuIG5ldyBCcm93c2VyUmVxdWlyZShkZXAsIHRoaXMucmVxdWlyZXMpO1xuXHR9XG5cdFxufVxuXG5leHBvcnQgZGVmYXVsdCBtYWtlQ29udGFpbmVyO1xuIl19