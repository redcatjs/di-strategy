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

makeContainer.requireContext = function (folder, recursive, pattern) {
  var mod = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : module.parent;
  return (0, _nodeRequireContext.default)(folder, recursive, pattern, mod);
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ub2RlLmpzIl0sIm5hbWVzIjpbIm1ha2VDb250YWluZXIiLCJjb25maWciLCJjb250YWluZXIiLCJOb2RlQ29udGFpbmVyIiwicmVxdWlyZUNvbnRleHQiLCJmb2xkZXIiLCJyZWN1cnNpdmUiLCJwYXR0ZXJuIiwibW9kIiwibW9kdWxlIiwicGFyZW50IiwicmVxdWlyZVBhdGgiLCJ1bmRlZmluZWQiLCJyZXF1aXJlcyIsInJlcXVpcmUiLCJyZXNvbHZlIiwiZSIsImRlcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7ZUFFZUEsYTs7O0FBRVIsU0FBU0EsYUFBVCxDQUF1QkMsTUFBdkIsRUFBOEI7QUFDcEMsTUFBTUMsWUFBWSxJQUFJQyxhQUFKLENBQWtCRixNQUFsQixDQUFsQjtBQUNBLFNBQU8sK0JBQWlCQyxTQUFqQixDQUFQO0FBQ0E7O0FBQ0RGLGNBQWNJLGNBQWQsR0FBK0IsVUFBQ0MsTUFBRCxFQUFTQyxTQUFULEVBQW9CQyxPQUFwQjtBQUFBLE1BQTZCQyxHQUE3Qix1RUFBbUNDLE9BQU9DLE1BQTFDO0FBQUEsU0FBcUQsaUNBQW1CTCxNQUFuQixFQUEyQkMsU0FBM0IsRUFBc0NDLE9BQXRDLEVBQStDQyxHQUEvQyxDQUFyRDtBQUFBLENBQS9COztJQUVhTCxhOzs7Ozs7Ozs7Ozs7OEJBR0ZRLFcsRUFBWTtBQUNyQixVQUFHQyxjQUFjLEtBQUtDLFFBQUwsQ0FBY0YsV0FBZCxDQUFqQixFQUE0QztBQUMzQyxlQUFPLElBQVA7QUFDQTs7QUFFRCxVQUFHO0FBQ0ZHLGdCQUFRQyxPQUFSLENBQWdCSixXQUFoQjs7QUFDQSxlQUFPLElBQVA7QUFDQSxPQUhELENBSUEsT0FBTUssQ0FBTixFQUFRO0FBQ1AsZUFBTyxLQUFQO0FBQ0E7QUFDRDs7OytCQUNVTCxXLEVBQVk7QUFDdEIsVUFBR0MsY0FBYyxLQUFLQyxRQUFMLENBQWNGLFdBQWQsQ0FBakIsRUFBNEM7QUFDM0MsZUFBTyxLQUFLRSxRQUFMLENBQWNGLFdBQWQsQ0FBUDtBQUNBOztBQUNELGFBQU9HLFFBQVFILFdBQVIsQ0FBUDtBQUNBOzs7NEJBRU9NLEcsRUFBSTtBQUNYLGFBQU8seUJBQWdCQSxHQUFoQixDQUFQO0FBQ0EiLCJmaWxlIjoibm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQQVRIIGZyb20gJ3BhdGgnXG5pbXBvcnQgRlMgZnJvbSAnZnMnXG5cbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi9jb250YWluZXInXG5pbXBvcnQgbWFrZUNvbnRhaW5lckFwaSBmcm9tICcuL21ha2VDb250YWluZXJBcGknXG5cbmltcG9ydCBOb2RlUmVxdWlyZSBmcm9tICcuL25vZGVSZXF1aXJlJ1xuaW1wb3J0IG5vZGVSZXF1aXJlQ29udGV4dCBmcm9tICcuL25vZGVSZXF1aXJlQ29udGV4dCdcblxuZXhwb3J0IGRlZmF1bHQgbWFrZUNvbnRhaW5lcjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VDb250YWluZXIoY29uZmlnKXtcblx0Y29uc3QgY29udGFpbmVyID0gbmV3IE5vZGVDb250YWluZXIoY29uZmlnKTtcblx0cmV0dXJuIG1ha2VDb250YWluZXJBcGkoY29udGFpbmVyKTtcbn1cbm1ha2VDb250YWluZXIucmVxdWlyZUNvbnRleHQgPSAoZm9sZGVyLCByZWN1cnNpdmUsIHBhdHRlcm4sIG1vZCA9IG1vZHVsZS5wYXJlbnQpID0+IG5vZGVSZXF1aXJlQ29udGV4dChmb2xkZXIsIHJlY3Vyc2l2ZSwgcGF0dGVybiwgbW9kKTtcblxuZXhwb3J0IGNsYXNzIE5vZGVDb250YWluZXIgZXh0ZW5kcyBDb250YWluZXIge1xuXHRcblx0XG5cdGRlcEV4aXN0cyhyZXF1aXJlUGF0aCl7XG5cdFx0aWYodW5kZWZpbmVkICE9PSB0aGlzLnJlcXVpcmVzW3JlcXVpcmVQYXRoXSl7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0XG5cdFx0dHJ5e1xuXHRcdFx0cmVxdWlyZS5yZXNvbHZlKHJlcXVpcmVQYXRoKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRjYXRjaChlKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblx0ZGVwUmVxdWlyZShyZXF1aXJlUGF0aCl7XG5cdFx0aWYodW5kZWZpbmVkICE9PSB0aGlzLnJlcXVpcmVzW3JlcXVpcmVQYXRoXSl7XG5cdFx0XHRyZXR1cm4gdGhpcy5yZXF1aXJlc1tyZXF1aXJlUGF0aF07XG5cdFx0fVxuXHRcdHJldHVybiByZXF1aXJlKHJlcXVpcmVQYXRoKTtcblx0fVxuXHRcblx0cmVxdWlyZShkZXApe1xuXHRcdHJldHVybiBuZXcgTm9kZVJlcXVpcmUoZGVwKTtcblx0fVxuXHRcbn1cbiJdfQ==