"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeContainer = makeContainer;
exports.NodeContainer = exports.default = void 0;

var _getPrototypeOf = _interopRequireDefault(require("babel-runtime/core-js/object/get-prototype-of"));

var _classCallCheck2 = _interopRequireDefault(require("babel-runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("babel-runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("babel-runtime/helpers/possibleConstructorReturn"));

var _inherits2 = _interopRequireDefault(require("babel-runtime/helpers/inherits"));

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _container = _interopRequireDefault(require("./container"));

var _makeContainerApi = _interopRequireDefault(require("./makeContainerApi"));

var _nodeRequire = _interopRequireDefault(require("./nodeRequire"));

var _nodeRequireContext = _interopRequireDefault(require("./nodeRequireContext"));

var _default = makeContainer;
exports.default = _default;

function makeContainer(config) {
  var container = new NodeContainer(config);
  return (0, _makeContainerApi.default)(container);
}

makeContainer.requireContext = _nodeRequireContext.default;

var NodeContainer =
/*#__PURE__*/
function (_Container) {
  (0, _inherits2.default)(NodeContainer, _Container);

  function NodeContainer() {
    (0, _classCallCheck2.default)(this, NodeContainer);
    return (0, _possibleConstructorReturn2.default)(this, (NodeContainer.__proto__ || (0, _getPrototypeOf.default)(NodeContainer)).apply(this, arguments));
  }

  (0, _createClass2.default)(NodeContainer, [{
    key: "depExists",
    value: function depExists(requirePath) {
      if (undefined !== this.requires[requirePath]) {
        return true;
      }

      try {
        require.resolve(requirePath);

        return true;
      } catch (e) {
        return false;
      }
    }
  }, {
    key: "depRequire",
    value: function depRequire(requirePath) {
      if (undefined !== this.requires[requirePath]) {
        return this.requires[requirePath];
      }

      return require(requirePath);
    }
  }, {
    key: "require",
    value: function require(dep) {
      return new _nodeRequire.default(dep);
    }
  }]);
  return NodeContainer;
}(_container.default);

exports.NodeContainer = NodeContainer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ub2RlLmpzIl0sIm5hbWVzIjpbIm1ha2VDb250YWluZXIiLCJjb25maWciLCJjb250YWluZXIiLCJOb2RlQ29udGFpbmVyIiwicmVxdWlyZUNvbnRleHQiLCJyZXF1aXJlUGF0aCIsInVuZGVmaW5lZCIsInJlcXVpcmVzIiwicmVxdWlyZSIsInJlc29sdmUiLCJlIiwiZGVwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOztBQUVBOztBQUNBOztlQUVlQSxhOzs7QUFFUixTQUFTQSxhQUFULENBQXVCQyxNQUF2QixFQUE4QjtBQUNwQyxNQUFNQyxZQUFZLElBQUlDLGFBQUosQ0FBa0JGLE1BQWxCLENBQWxCO0FBQ0EsU0FBTywrQkFBaUJDLFNBQWpCLENBQVA7QUFDQTs7QUFDREYsY0FBY0ksY0FBZDs7SUFFYUQsYTs7Ozs7Ozs7Ozs7OzhCQUdGRSxXLEVBQVk7QUFDckIsVUFBR0MsY0FBYyxLQUFLQyxRQUFMLENBQWNGLFdBQWQsQ0FBakIsRUFBNEM7QUFDM0MsZUFBTyxJQUFQO0FBQ0E7O0FBRUQsVUFBRztBQUNGRyxnQkFBUUMsT0FBUixDQUFnQkosV0FBaEI7O0FBQ0EsZUFBTyxJQUFQO0FBQ0EsT0FIRCxDQUlBLE9BQU1LLENBQU4sRUFBUTtBQUNQLGVBQU8sS0FBUDtBQUNBO0FBQ0Q7OzsrQkFDVUwsVyxFQUFZO0FBQ3RCLFVBQUdDLGNBQWMsS0FBS0MsUUFBTCxDQUFjRixXQUFkLENBQWpCLEVBQTRDO0FBQzNDLGVBQU8sS0FBS0UsUUFBTCxDQUFjRixXQUFkLENBQVA7QUFDQTs7QUFDRCxhQUFPRyxRQUFRSCxXQUFSLENBQVA7QUFDQTs7OzRCQUVPTSxHLEVBQUk7QUFDWCxhQUFPLHlCQUFnQkEsR0FBaEIsQ0FBUDtBQUNBIiwiZmlsZSI6Im5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUEFUSCBmcm9tICdwYXRoJ1xuaW1wb3J0IEZTIGZyb20gJ2ZzJ1xuXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vY29udGFpbmVyJ1xuaW1wb3J0IG1ha2VDb250YWluZXJBcGkgZnJvbSAnLi9tYWtlQ29udGFpbmVyQXBpJ1xuXG5pbXBvcnQgTm9kZVJlcXVpcmUgZnJvbSAnLi9ub2RlUmVxdWlyZSdcbmltcG9ydCBub2RlUmVxdWlyZUNvbnRleHQgZnJvbSAnLi9ub2RlUmVxdWlyZUNvbnRleHQnXG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VDb250YWluZXI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ29udGFpbmVyKGNvbmZpZyl7XG5cdGNvbnN0IGNvbnRhaW5lciA9IG5ldyBOb2RlQ29udGFpbmVyKGNvbmZpZyk7XG5cdHJldHVybiBtYWtlQ29udGFpbmVyQXBpKGNvbnRhaW5lcik7XG59XG5tYWtlQ29udGFpbmVyLnJlcXVpcmVDb250ZXh0ID0gbm9kZVJlcXVpcmVDb250ZXh0O1xuXG5leHBvcnQgY2xhc3MgTm9kZUNvbnRhaW5lciBleHRlbmRzIENvbnRhaW5lciB7XG5cdFxuXHRcblx0ZGVwRXhpc3RzKHJlcXVpcmVQYXRoKXtcblx0XHRpZih1bmRlZmluZWQgIT09IHRoaXMucmVxdWlyZXNbcmVxdWlyZVBhdGhdKXtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRcblx0XHR0cnl7XG5cdFx0XHRyZXF1aXJlLnJlc29sdmUocmVxdWlyZVBhdGgpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGNhdGNoKGUpe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXHRkZXBSZXF1aXJlKHJlcXVpcmVQYXRoKXtcblx0XHRpZih1bmRlZmluZWQgIT09IHRoaXMucmVxdWlyZXNbcmVxdWlyZVBhdGhdKXtcblx0XHRcdHJldHVybiB0aGlzLnJlcXVpcmVzW3JlcXVpcmVQYXRoXTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlcXVpcmUocmVxdWlyZVBhdGgpO1xuXHR9XG5cdFxuXHRyZXF1aXJlKGRlcCl7XG5cdFx0cmV0dXJuIG5ldyBOb2RlUmVxdWlyZShkZXApO1xuXHR9XG5cdFxufVxuIl19