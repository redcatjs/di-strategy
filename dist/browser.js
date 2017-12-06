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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9icm93c2VyLmpzIl0sIm5hbWVzIjpbIm1ha2VDb250YWluZXIiLCJjb25maWciLCJjb250YWluZXIiLCJCcm93c2VyQ29udGFpbmVyIiwicmVxdWlyZUZpbGUiLCJFcnJvciIsInJlcXVpcmVDb250ZXh0IiwiZGVwZW5kZW5jeSIsImRlcCIsImNvbnRleHQiLCJyZXF1aXJlIiwicmVxdWlyZVBhdGgiLCJyZXF1aXJlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOztBQUVBLFNBQVNBLGFBQVQsQ0FBdUJDLE1BQXZCLEVBQThCO0FBQzdCLE1BQU1DLFlBQVksSUFBSUMsZ0JBQUosQ0FBcUJGLE1BQXJCLENBQWxCO0FBQ0EsU0FBTywrQkFBaUJDLFNBQWpCLENBQVA7QUFDQTs7QUFFRCxTQUFTRSxXQUFULEdBQXNCO0FBQ3JCLFFBQU0sSUFBSUMsS0FBSixDQUFVLG9GQUFWLENBQU47QUFDQTs7QUFDRCxTQUFTQyxjQUFULEdBQXlCO0FBQ3hCLFFBQU0sSUFBSUQsS0FBSixDQUFVLDRGQUFWLENBQU47QUFDQTs7QUFDRCxTQUFTRSxVQUFULENBQW9CQyxHQUFwQixFQUF3QjtBQUN2QixTQUFPLHdCQUFlQSxHQUFmLENBQVA7QUFDQTs7QUFFRFIsY0FBY08sVUFBZCxHQUEyQkEsVUFBM0I7QUFDQVAsY0FBY1MsT0FBZCxHQUF3QkgsY0FBeEI7QUFDQU4sY0FBY1UsT0FBZCxHQUF3Qk4sV0FBeEI7O0lBRU1ELGdCOzs7Ozs7Ozs7Ozs7OEJBR0tRLFcsRUFBWTtBQUNyQixhQUFPLENBQUMsQ0FBQyxLQUFLQyxRQUFMLENBQWNELFdBQWQsQ0FBVDtBQUNBOzs7K0JBQ1VBLFcsRUFBWTtBQUN0QixhQUFPLEtBQUtDLFFBQUwsQ0FBY0QsV0FBZCxDQUFQO0FBQ0E7Ozs0QkFFT0gsRyxFQUFJO0FBQ1gsYUFBTyw0QkFBbUJBLEdBQW5CLEVBQXdCLEtBQUtJLFFBQTdCLENBQVA7QUFDQTs7Ozs7ZUFJYVosYSIsImZpbGUiOiJicm93c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lcidcbmltcG9ydCBtYWtlQ29udGFpbmVyQXBpIGZyb20gJy4vbWFrZUNvbnRhaW5lckFwaSdcblxuaW1wb3J0IEJyb3dzZXJSZXF1aXJlIGZyb20gJy4vYnJvd3NlclJlcXVpcmUnXG5pbXBvcnQgRGVwZW5kZW5jeSBmcm9tICcuL2RlcGVuZGVuY3knXG5cbmZ1bmN0aW9uIG1ha2VDb250YWluZXIoY29uZmlnKXtcblx0Y29uc3QgY29udGFpbmVyID0gbmV3IEJyb3dzZXJDb250YWluZXIoY29uZmlnKTtcblx0cmV0dXJuIG1ha2VDb250YWluZXJBcGkoY29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gcmVxdWlyZUZpbGUoKXtcblx0dGhyb3cgbmV3IEVycm9yKCdUaGUgbWV0aG9kIHJlcXVpcmVDb250ZXh0IGlzIG9ubHkgZm9yIGltcGxlbWVudGVkIG5vZGUsIGluIHdlYnBhY2sgdXNlIHJlcXVpcmUgYXBpJyk7XG59XG5mdW5jdGlvbiByZXF1aXJlQ29udGV4dCgpe1xuXHR0aHJvdyBuZXcgRXJyb3IoJ1RoZSBtZXRob2QgcmVxdWlyZUNvbnRleHQgaXMgb25seSBmb3IgaW1wbGVtZW50ZWQgbm9kZSwgaW4gd2VicGFjayB1c2UgcmVxdWlyZS5jb250ZXh0IGFwaScpO1xufVxuZnVuY3Rpb24gZGVwZW5kZW5jeShkZXApe1xuXHRyZXR1cm4gbmV3IERlcGVuZGVuY3koZGVwKTtcbn1cblxubWFrZUNvbnRhaW5lci5kZXBlbmRlbmN5ID0gZGVwZW5kZW5jeTtcbm1ha2VDb250YWluZXIuY29udGV4dCA9IHJlcXVpcmVDb250ZXh0O1xubWFrZUNvbnRhaW5lci5yZXF1aXJlID0gcmVxdWlyZUZpbGU7XG5cbmNsYXNzIEJyb3dzZXJDb250YWluZXIgZXh0ZW5kcyBDb250YWluZXJ7XG5cdFxuXHRcblx0ZGVwRXhpc3RzKHJlcXVpcmVQYXRoKXtcblx0XHRyZXR1cm4gISF0aGlzLnJlcXVpcmVzW3JlcXVpcmVQYXRoXTtcblx0fVxuXHRkZXBSZXF1aXJlKHJlcXVpcmVQYXRoKXtcblx0XHRyZXR1cm4gdGhpcy5yZXF1aXJlc1tyZXF1aXJlUGF0aF07XG5cdH1cblx0XG5cdHJlcXVpcmUoZGVwKXtcblx0XHRyZXR1cm4gbmV3IEJyb3dzZXJSZXF1aXJlKGRlcCwgdGhpcy5yZXF1aXJlcyk7XG5cdH1cblx0XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VDb250YWluZXI7XG4iXX0=