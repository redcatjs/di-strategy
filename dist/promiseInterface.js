"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _hasInstance = _interopRequireDefault(require("babel-runtime/core-js/symbol/has-instance"));

var _classCallCheck2 = _interopRequireDefault(require("babel-runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("babel-runtime/helpers/createClass"));

var _promise = _interopRequireDefault(require("babel-runtime/core-js/promise"));

var _default = function _default() {
  var promiseInterfaces = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [_promise.default];
  return (
    /*#__PURE__*/
    function () {
      function PromiseInterface() {
        (0, _classCallCheck2.default)(this, PromiseInterface);
      }

      (0, _createClass2.default)(PromiseInterface, null, [{
        key: _hasInstance.default,
        value: function value(instance) {
          return promiseInterfaces.some(function (promiseInterface) {
            return instance instanceof promiseInterface;
          });
        }
      }]);
      return PromiseInterface;
    }()
  );
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9taXNlSW50ZXJmYWNlLmpzIl0sIm5hbWVzIjpbInByb21pc2VJbnRlcmZhY2VzIiwiaW5zdGFuY2UiLCJzb21lIiwicHJvbWlzZUludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFBZSxvQkFBbUM7QUFBQSxNQUFsQ0EsaUJBQWtDLHVFQUFkLGtCQUFjO0FBQ2pEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsOEJBQzZCQyxRQUQ3QixFQUN1QztBQUNyQyxpQkFBT0Qsa0JBQWtCRSxJQUFsQixDQUF3QjtBQUFBLG1CQUFvQkQsb0JBQW9CRSxnQkFBeEM7QUFBQSxXQUF4QixDQUFQO0FBQ0E7QUFIRjtBQUFBO0FBQUE7QUFBQTtBQUtBLEMiLCJmaWxlIjoicHJvbWlzZUludGVyZmFjZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IChwcm9taXNlSW50ZXJmYWNlcyA9IFsgUHJvbWlzZSBdKT0+e1xuXHRyZXR1cm4gY2xhc3MgUHJvbWlzZUludGVyZmFjZSB7XG5cdFx0c3RhdGljIFtTeW1ib2wuaGFzSW5zdGFuY2VdKGluc3RhbmNlKSB7XG5cdFx0XHRyZXR1cm4gcHJvbWlzZUludGVyZmFjZXMuc29tZSggcHJvbWlzZUludGVyZmFjZSA9PiBpbnN0YW5jZSBpbnN0YW5jZW9mIHByb21pc2VJbnRlcmZhY2UpO1xuXHRcdH1cblx0fVxufVxuIl19