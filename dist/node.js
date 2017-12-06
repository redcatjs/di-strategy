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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ub2RlLmpzIl0sIm5hbWVzIjpbIm1ha2VDb250YWluZXIiLCJjb25maWciLCJjb250YWluZXIiLCJOb2RlQ29udGFpbmVyIiwiZGVwZW5kZW5jeSIsImRlcCIsImNvbnRleHQiLCJyZXF1aXJlIiwicmVxdWlyZVBhdGgiLCJ1bmRlZmluZWQiLCJyZXF1aXJlcyIsInJlc29sdmUiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOztBQUVBOztBQUNBOztBQUVBOztBQUNBOztlQUVlQSxhOzs7QUFFUixTQUFTQSxhQUFULENBQXVCQyxNQUF2QixFQUE4QjtBQUNwQyxNQUFNQyxZQUFZLElBQUlDLGFBQUosQ0FBa0JGLE1BQWxCLENBQWxCO0FBQ0EsU0FBTywrQkFBaUJDLFNBQWpCLENBQVA7QUFDQTs7QUFFRCxTQUFTRSxVQUFULENBQW9CQyxHQUFwQixFQUF3QjtBQUN2QixTQUFPLHdCQUFlQSxHQUFmLENBQVA7QUFDQTs7QUFFREwsY0FBY0ksVUFBZCxHQUEyQkEsVUFBM0I7QUFDQUosY0FBY00sT0FBZDtBQUNBTixjQUFjTyxPQUFkOztJQUVhSixhOzs7Ozs7Ozs7Ozs7OEJBR0ZLLFcsRUFBWTtBQUNyQixVQUFHQyxjQUFjLEtBQUtDLFFBQUwsQ0FBY0YsV0FBZCxDQUFqQixFQUE0QztBQUMzQyxlQUFPLElBQVA7QUFDQTs7QUFFRCxVQUFHO0FBQ0ZELGdCQUFRSSxPQUFSLENBQWdCSCxXQUFoQjs7QUFDQSxlQUFPLElBQVA7QUFDQSxPQUhELENBSUEsT0FBTUksQ0FBTixFQUFRO0FBQ1AsZUFBTyxLQUFQO0FBQ0E7QUFDRDs7OytCQUNVSixXLEVBQVk7QUFDdEIsVUFBR0MsY0FBYyxLQUFLQyxRQUFMLENBQWNGLFdBQWQsQ0FBakIsRUFBNEM7QUFDM0MsZUFBTyxLQUFLRSxRQUFMLENBQWNGLFdBQWQsQ0FBUDtBQUNBOztBQUNELGFBQU9ELFFBQVFDLFdBQVIsQ0FBUDtBQUNBOzs7NEJBRU9ILEcsRUFBSTtBQUNYLGFBQU8seUJBQWdCQSxHQUFoQixDQUFQO0FBQ0EiLCJmaWxlIjoibm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQQVRIIGZyb20gJ3BhdGgnXG5pbXBvcnQgRlMgZnJvbSAnZnMnXG5cbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi9jb250YWluZXInXG5pbXBvcnQgbWFrZUNvbnRhaW5lckFwaSBmcm9tICcuL21ha2VDb250YWluZXJBcGknXG5cbmltcG9ydCBOb2RlUmVxdWlyZSBmcm9tICcuL25vZGVSZXF1aXJlJ1xuaW1wb3J0IG5vZGVSZXF1aXJlQ29udGV4dCBmcm9tICcuL25vZGVSZXF1aXJlQ29udGV4dCdcblxuaW1wb3J0IERlcGVuZGVuY3kgZnJvbSAnLi9kZXBlbmRlbmN5J1xuaW1wb3J0IHJlcXVpcmVGaWxlIGZyb20gJy4vbm9kZVJlcXVpcmVGaWxlJ1xuXG5leHBvcnQgZGVmYXVsdCBtYWtlQ29udGFpbmVyO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUNvbnRhaW5lcihjb25maWcpe1xuXHRjb25zdCBjb250YWluZXIgPSBuZXcgTm9kZUNvbnRhaW5lcihjb25maWcpO1xuXHRyZXR1cm4gbWFrZUNvbnRhaW5lckFwaShjb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBkZXBlbmRlbmN5KGRlcCl7XG5cdHJldHVybiBuZXcgRGVwZW5kZW5jeShkZXApO1xufVxuXG5tYWtlQ29udGFpbmVyLmRlcGVuZGVuY3kgPSBkZXBlbmRlbmN5O1xubWFrZUNvbnRhaW5lci5jb250ZXh0ID0gbm9kZVJlcXVpcmVDb250ZXh0O1xubWFrZUNvbnRhaW5lci5yZXF1aXJlID0gcmVxdWlyZUZpbGU7XG5cbmV4cG9ydCBjbGFzcyBOb2RlQ29udGFpbmVyIGV4dGVuZHMgQ29udGFpbmVyIHtcblx0XG5cdFxuXHRkZXBFeGlzdHMocmVxdWlyZVBhdGgpe1xuXHRcdGlmKHVuZGVmaW5lZCAhPT0gdGhpcy5yZXF1aXJlc1tyZXF1aXJlUGF0aF0pe1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdFxuXHRcdHRyeXtcblx0XHRcdHJlcXVpcmUucmVzb2x2ZShyZXF1aXJlUGF0aCk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0Y2F0Y2goZSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cdGRlcFJlcXVpcmUocmVxdWlyZVBhdGgpe1xuXHRcdGlmKHVuZGVmaW5lZCAhPT0gdGhpcy5yZXF1aXJlc1tyZXF1aXJlUGF0aF0pe1xuXHRcdFx0cmV0dXJuIHRoaXMucmVxdWlyZXNbcmVxdWlyZVBhdGhdO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVxdWlyZShyZXF1aXJlUGF0aCk7XG5cdH1cblx0XG5cdHJlcXVpcmUoZGVwKXtcblx0XHRyZXR1cm4gbmV3IE5vZGVSZXF1aXJlKGRlcCk7XG5cdH1cblx0XG59XG4iXX0=