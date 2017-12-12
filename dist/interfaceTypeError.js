"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _create = _interopRequireDefault(require("babel-runtime/core-js/object/create"));

var _setPrototypeOf = _interopRequireDefault(require("babel-runtime/core-js/object/set-prototype-of"));

var _from = _interopRequireDefault(require("babel-runtime/core-js/array/from"));

var _construct = _interopRequireDefault(require("babel-runtime/core-js/reflect/construct"));

var _getPrototypeOf = _interopRequireDefault(require("babel-runtime/core-js/object/get-prototype-of"));

var _classCallCheck2 = _interopRequireDefault(require("babel-runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("babel-runtime/helpers/possibleConstructorReturn"));

var _inherits2 = _interopRequireDefault(require("babel-runtime/helpers/inherits"));

function _extendableBuiltin(cls) {
  function ExtendableBuiltin() {
    var instance = (0, _construct.default)(cls, (0, _from.default)(arguments));
    (0, _setPrototypeOf.default)(instance, (0, _getPrototypeOf.default)(this));
    return instance;
  }

  ExtendableBuiltin.prototype = (0, _create.default)(cls.prototype, {
    constructor: {
      value: cls,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  if (_setPrototypeOf.default) {
    (0, _setPrototypeOf.default)(ExtendableBuiltin, cls);
  } else {
    ExtendableBuiltin.__proto__ = cls;
  }

  return ExtendableBuiltin;
}

var interfaceTypeError =
/*#__PURE__*/
function (_extendableBuiltin2) {
  (0, _inherits2.default)(interfaceTypeError, _extendableBuiltin2);

  function interfaceTypeError() {
    var _ref;

    var _temp, _this;

    (0, _classCallCheck2.default)(this, interfaceTypeError);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = interfaceTypeError.__proto__ || (0, _getPrototypeOf.default)(interfaceTypeError)).call.apply(_ref, [this].concat(args))), _this.errorName = 'interfaceTypeError', _temp));
  }

  return interfaceTypeError;
}(_extendableBuiltin(Error));

exports.default = interfaceTypeError;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbnRlcmZhY2VUeXBlRXJyb3IuanMiXSwibmFtZXMiOlsiaW50ZXJmYWNlVHlwZUVycm9yIiwiZXJyb3JOYW1lIiwiRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQXFCQSxrQjs7Ozs7Ozs7Ozs7Ozs7OzttUUFDcEJDLFMsR0FBWSxvQjs7OztxQkFEbUNDLEsiLCJmaWxlIjoiaW50ZXJmYWNlVHlwZUVycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgaW50ZXJmYWNlVHlwZUVycm9yIGV4dGVuZHMgRXJyb3J7XG5cdGVycm9yTmFtZSA9ICdpbnRlcmZhY2VUeXBlRXJyb3InO1xufVxuIl19