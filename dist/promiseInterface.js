"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(require("babel-runtime/helpers/typeof"));

var _hasInstance = _interopRequireDefault(require("babel-runtime/core-js/symbol/has-instance"));

var _classCallCheck2 = _interopRequireDefault(require("babel-runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("babel-runtime/helpers/createClass"));

var _promise = _interopRequireDefault(require("babel-runtime/core-js/promise"));

var _default = function _default() {
  var promiseInterfaces = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [_promise.default];
  var checkThenMethod = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return (
    /*#__PURE__*/
    function () {
      function PromiseInterface() {
        (0, _classCallCheck2.default)(this, PromiseInterface);
      }

      (0, _createClass2.default)(PromiseInterface, null, [{
        key: _hasInstance.default,
        value: function value(instance) {
          if (promiseInterfaces.some(function (promiseInterface) {
            return instance instanceof promiseInterface;
          })) {
            return true;
          }

          if (checkThenMethod && (0, _typeof2.default)(instance) == 'object' && instance !== null && typeof instance.then === 'function') {
            return true;
          }

          return false;
        }
      }]);
      return PromiseInterface;
    }()
  );
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9taXNlSW50ZXJmYWNlLmpzIl0sIm5hbWVzIjpbInByb21pc2VJbnRlcmZhY2VzIiwiY2hlY2tUaGVuTWV0aG9kIiwiaW5zdGFuY2UiLCJzb21lIiwicHJvbWlzZUludGVyZmFjZSIsInRoZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFBZSxvQkFBMkQ7QUFBQSxNQUExREEsaUJBQTBELHVFQUF0QyxrQkFBc0M7QUFBQSxNQUF6QkMsZUFBeUIsdUVBQVAsSUFBTztBQUN6RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDhCQUM2QkMsUUFEN0IsRUFDdUM7QUFDckMsY0FBSUYsa0JBQWtCRyxJQUFsQixDQUF3QjtBQUFBLG1CQUFvQkQsb0JBQW9CRSxnQkFBeEM7QUFBQSxXQUF4QixDQUFKLEVBQXVGO0FBQ3RGLG1CQUFPLElBQVA7QUFDQTs7QUFDRCxjQUFJSCxtQkFBbUIsc0JBQU9DLFFBQVAsS0FBbUIsUUFBdEMsSUFBa0RBLGFBQWEsSUFBL0QsSUFBdUUsT0FBT0EsU0FBU0csSUFBaEIsS0FBeUIsVUFBcEcsRUFBZ0g7QUFDL0csbUJBQU8sSUFBUDtBQUNBOztBQUNELGlCQUFPLEtBQVA7QUFDQTtBQVRGO0FBQUE7QUFBQTtBQUFBO0FBV0EsQyIsImZpbGUiOiJwcm9taXNlSW50ZXJmYWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKHByb21pc2VJbnRlcmZhY2VzID0gWyBQcm9taXNlIF0sIGNoZWNrVGhlbk1ldGhvZCA9IHRydWUpPT57XG5cdHJldHVybiBjbGFzcyBQcm9taXNlSW50ZXJmYWNlIHtcblx0XHRzdGF0aWMgW1N5bWJvbC5oYXNJbnN0YW5jZV0oaW5zdGFuY2UpIHtcblx0XHRcdGlmKCBwcm9taXNlSW50ZXJmYWNlcy5zb21lKCBwcm9taXNlSW50ZXJmYWNlID0+IGluc3RhbmNlIGluc3RhbmNlb2YgcHJvbWlzZUludGVyZmFjZSkgKXtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRpZiggY2hlY2tUaGVuTWV0aG9kICYmIHR5cGVvZiBpbnN0YW5jZSA9PSAnb2JqZWN0JyAmJiBpbnN0YW5jZSAhPT0gbnVsbCAmJiB0eXBlb2YgaW5zdGFuY2UudGhlbiA9PT0gJ2Z1bmN0aW9uJyApe1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==