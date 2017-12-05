"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = structuredHasPromise;

var _keys = _interopRequireDefault(require("babel-runtime/core-js/object/keys"));

var _typeof2 = _interopRequireDefault(require("babel-runtime/helpers/typeof"));

var _promise = _interopRequireDefault(require("babel-runtime/core-js/promise"));

var _var = _interopRequireDefault(require("./var"));

var nativePromise = _promise.default;

function structuredHasPromise(structure, mixed) {
  var PromiseInterface = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : nativePromise;

  if (mixed instanceof PromiseInterface) {
    return true;
  }

  if ((0, _typeof2.default)(structure) == 'object' && structure !== null && !(structure instanceof _var.default)) {
    return (0, _keys.default)(structure).some(function (key) {
      return structuredHasPromise(structure[key], mixed[key], PromiseInterface);
    });
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdHJ1Y3R1cmVkSGFzUHJvbWlzZS5qcyJdLCJuYW1lcyI6WyJuYXRpdmVQcm9taXNlIiwic3RydWN0dXJlZEhhc1Byb21pc2UiLCJzdHJ1Y3R1cmUiLCJtaXhlZCIsIlByb21pc2VJbnRlcmZhY2UiLCJzb21lIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxnQ0FBTjs7QUFFZSxTQUFTQyxvQkFBVCxDQUE4QkMsU0FBOUIsRUFBeUNDLEtBQXpDLEVBQWlGO0FBQUEsTUFBakNDLGdCQUFpQyx1RUFBZEosYUFBYzs7QUFFL0YsTUFBR0csaUJBQWlCQyxnQkFBcEIsRUFBcUM7QUFDcEMsV0FBTyxJQUFQO0FBQ0E7O0FBQ0QsTUFBRyxzQkFBT0YsU0FBUCxLQUFvQixRQUFwQixJQUFnQ0EsY0FBYyxJQUE5QyxJQUFzRCxFQUFFQSxpQ0FBRixDQUF6RCxFQUFxRjtBQUNwRixXQUFPLG1CQUFZQSxTQUFaLEVBQXVCRyxJQUF2QixDQUE0QixlQUFLO0FBQ3ZDLGFBQU9KLHFCQUFxQkMsVUFBVUksR0FBVixDQUFyQixFQUFxQ0gsTUFBTUcsR0FBTixDQUFyQyxFQUFpREYsZ0JBQWpELENBQVA7QUFDQSxLQUZNLENBQVA7QUFHQTtBQUVEIiwiZmlsZSI6InN0cnVjdHVyZWRIYXNQcm9taXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZhciBmcm9tICcuL3ZhcidcblxuY29uc3QgbmF0aXZlUHJvbWlzZSA9IFByb21pc2U7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0cnVjdHVyZWRIYXNQcm9taXNlKHN0cnVjdHVyZSwgbWl4ZWQsIFByb21pc2VJbnRlcmZhY2UgPSBuYXRpdmVQcm9taXNlKXtcblx0XG5cdGlmKG1peGVkIGluc3RhbmNlb2YgUHJvbWlzZUludGVyZmFjZSl7XG5cdFx0cmV0dXJuIHRydWVcblx0fVxuXHRpZih0eXBlb2Ygc3RydWN0dXJlID09ICdvYmplY3QnICYmIHN0cnVjdHVyZSAhPT0gbnVsbCAmJiAhKHN0cnVjdHVyZSBpbnN0YW5jZW9mIFZhcikpe1xuXHRcdHJldHVybiBPYmplY3Qua2V5cyhzdHJ1Y3R1cmUpLnNvbWUoa2V5PT57XG5cdFx0XHRyZXR1cm4gc3RydWN0dXJlZEhhc1Byb21pc2Uoc3RydWN0dXJlW2tleV0sIG1peGVkW2tleV0sIFByb21pc2VJbnRlcmZhY2UpXG5cdFx0fSlcblx0fVxuXHRcbn1cbiJdfQ==