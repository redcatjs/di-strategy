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

var _webpackRequire = _interopRequireDefault(require("./webpackRequire"));

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

var _default = makeWebpackContainer;
exports.default = _default;