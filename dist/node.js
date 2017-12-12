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

var _dependency = _interopRequireDefault(require("./dependency"));

var _nodeRequireFile = _interopRequireDefault(require("./nodeRequireFile"));

var _default = makeContainer;
exports.default = _default;

function makeContainer(config) {
  var container = new NodeContainer(config);
  return (0, _makeContainerApi.default)(container);
}

function dependency(dep) {
  return new _dependency.default(dep);
}

makeContainer.dependency = dependency;
makeContainer.context = _nodeRequireContext.default;
makeContainer.require = _nodeRequireFile.default;
makeContainer.setInterfacePrototypeDefault = _container.default.setInterfacePrototypeDefault;
makeContainer.getInterfacePrototypeDefault = _container.default.getInterfacePrototypeDefault;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ub2RlLmpzIl0sIm5hbWVzIjpbIm1ha2VDb250YWluZXIiLCJjb25maWciLCJjb250YWluZXIiLCJOb2RlQ29udGFpbmVyIiwiZGVwZW5kZW5jeSIsImRlcCIsImNvbnRleHQiLCJyZXF1aXJlIiwic2V0SW50ZXJmYWNlUHJvdG90eXBlRGVmYXVsdCIsImdldEludGVyZmFjZVByb3RvdHlwZURlZmF1bHQiLCJyZXF1aXJlUGF0aCIsInVuZGVmaW5lZCIsInJlcXVpcmVzIiwicmVzb2x2ZSIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O2VBRWVBLGE7OztBQUVSLFNBQVNBLGFBQVQsQ0FBdUJDLE1BQXZCLEVBQThCO0FBQ3BDLE1BQU1DLFlBQVksSUFBSUMsYUFBSixDQUFrQkYsTUFBbEIsQ0FBbEI7QUFDQSxTQUFPLCtCQUFpQkMsU0FBakIsQ0FBUDtBQUNBOztBQUVELFNBQVNFLFVBQVQsQ0FBb0JDLEdBQXBCLEVBQXdCO0FBQ3ZCLFNBQU8sd0JBQWVBLEdBQWYsQ0FBUDtBQUNBOztBQUVETCxjQUFjSSxVQUFkLEdBQTJCQSxVQUEzQjtBQUNBSixjQUFjTSxPQUFkO0FBQ0FOLGNBQWNPLE9BQWQ7QUFDQVAsY0FBY1EsNEJBQWQsR0FBNkMsbUJBQVVBLDRCQUF2RDtBQUNBUixjQUFjUyw0QkFBZCxHQUE2QyxtQkFBVUEsNEJBQXZEOztJQUVhTixhOzs7Ozs7Ozs7Ozs7OEJBR0ZPLFcsRUFBWTtBQUNyQixVQUFHQyxjQUFjLEtBQUtDLFFBQUwsQ0FBY0YsV0FBZCxDQUFqQixFQUE0QztBQUMzQyxlQUFPLElBQVA7QUFDQTs7QUFFRCxVQUFHO0FBQ0ZILGdCQUFRTSxPQUFSLENBQWdCSCxXQUFoQjs7QUFDQSxlQUFPLElBQVA7QUFDQSxPQUhELENBSUEsT0FBTUksQ0FBTixFQUFRO0FBQ1AsZUFBTyxLQUFQO0FBQ0E7QUFDRDs7OytCQUNVSixXLEVBQVk7QUFDdEIsVUFBR0MsY0FBYyxLQUFLQyxRQUFMLENBQWNGLFdBQWQsQ0FBakIsRUFBNEM7QUFDM0MsZUFBTyxLQUFLRSxRQUFMLENBQWNGLFdBQWQsQ0FBUDtBQUNBOztBQUNELGFBQU9ILFFBQVFHLFdBQVIsQ0FBUDtBQUNBOzs7NEJBRU9MLEcsRUFBSTtBQUNYLGFBQU8seUJBQWdCQSxHQUFoQixDQUFQO0FBQ0EiLCJmaWxlIjoibm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQQVRIIGZyb20gJ3BhdGgnXG5pbXBvcnQgRlMgZnJvbSAnZnMnXG5cbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi9jb250YWluZXInXG5pbXBvcnQgbWFrZUNvbnRhaW5lckFwaSBmcm9tICcuL21ha2VDb250YWluZXJBcGknXG5cbmltcG9ydCBOb2RlUmVxdWlyZSBmcm9tICcuL25vZGVSZXF1aXJlJ1xuaW1wb3J0IG5vZGVSZXF1aXJlQ29udGV4dCBmcm9tICcuL25vZGVSZXF1aXJlQ29udGV4dCdcblxuaW1wb3J0IERlcGVuZGVuY3kgZnJvbSAnLi9kZXBlbmRlbmN5J1xuaW1wb3J0IHJlcXVpcmVGaWxlIGZyb20gJy4vbm9kZVJlcXVpcmVGaWxlJ1xuXG5leHBvcnQgZGVmYXVsdCBtYWtlQ29udGFpbmVyO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUNvbnRhaW5lcihjb25maWcpe1xuXHRjb25zdCBjb250YWluZXIgPSBuZXcgTm9kZUNvbnRhaW5lcihjb25maWcpO1xuXHRyZXR1cm4gbWFrZUNvbnRhaW5lckFwaShjb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBkZXBlbmRlbmN5KGRlcCl7XG5cdHJldHVybiBuZXcgRGVwZW5kZW5jeShkZXApO1xufVxuXG5tYWtlQ29udGFpbmVyLmRlcGVuZGVuY3kgPSBkZXBlbmRlbmN5O1xubWFrZUNvbnRhaW5lci5jb250ZXh0ID0gbm9kZVJlcXVpcmVDb250ZXh0O1xubWFrZUNvbnRhaW5lci5yZXF1aXJlID0gcmVxdWlyZUZpbGU7XG5tYWtlQ29udGFpbmVyLnNldEludGVyZmFjZVByb3RvdHlwZURlZmF1bHQgPSBDb250YWluZXIuc2V0SW50ZXJmYWNlUHJvdG90eXBlRGVmYXVsdDtcbm1ha2VDb250YWluZXIuZ2V0SW50ZXJmYWNlUHJvdG90eXBlRGVmYXVsdCA9IENvbnRhaW5lci5nZXRJbnRlcmZhY2VQcm90b3R5cGVEZWZhdWx0O1xuXG5leHBvcnQgY2xhc3MgTm9kZUNvbnRhaW5lciBleHRlbmRzIENvbnRhaW5lciB7XG5cdFxuXHRcblx0ZGVwRXhpc3RzKHJlcXVpcmVQYXRoKXtcblx0XHRpZih1bmRlZmluZWQgIT09IHRoaXMucmVxdWlyZXNbcmVxdWlyZVBhdGhdKXtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRcblx0XHR0cnl7XG5cdFx0XHRyZXF1aXJlLnJlc29sdmUocmVxdWlyZVBhdGgpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGNhdGNoKGUpe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXHRkZXBSZXF1aXJlKHJlcXVpcmVQYXRoKXtcblx0XHRpZih1bmRlZmluZWQgIT09IHRoaXMucmVxdWlyZXNbcmVxdWlyZVBhdGhdKXtcblx0XHRcdHJldHVybiB0aGlzLnJlcXVpcmVzW3JlcXVpcmVQYXRoXTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlcXVpcmUocmVxdWlyZVBhdGgpO1xuXHR9XG5cdFxuXHRyZXF1aXJlKGRlcCl7XG5cdFx0cmV0dXJuIG5ldyBOb2RlUmVxdWlyZShkZXApO1xuXHR9XG5cdFxufVxuIl19