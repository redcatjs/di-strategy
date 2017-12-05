"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _keys = _interopRequireDefault(require("babel-runtime/core-js/object/keys"));

var _typeof2 = _interopRequireDefault(require("babel-runtime/helpers/typeof"));

var _promise = _interopRequireDefault(require("babel-runtime/core-js/promise"));

var _var = _interopRequireDefault(require("./var"));

var nativePromise = _promise.default;

function structuredPromiseAllRecursive(structure, value) {
  var PromiseInterface = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : nativePromise;
  var PromiseFactory = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : nativePromise;

  if (value instanceof PromiseInterface) {
    return value;
  }

  if (!((0, _typeof2.default)(structure) == 'object' && structure !== null && !(structure instanceof _var.default))) {
    return PromiseFactory.resolve(value);
  }

  if (value instanceof Array) {
    return PromiseFactory.all(value.map(function (val, key) {
      return structuredPromiseAllRecursive(structure[key], val, PromiseInterface, PromiseFactory);
    }));
  }

  if ((0, _typeof2.default)(value) === 'object' && value !== null) {
    return resolveObject(structure, value, PromiseInterface, PromiseFactory);
  }

  return PromiseFactory.resolve(value);
}

function resolveObject(structure, object, PromiseInterface, PromiseFactory) {
  var promises = (0, _keys.default)(object).map(function (key) {
    return structuredPromiseAllRecursive(structure[key], object[key], PromiseInterface, PromiseFactory).then(function (value) {
      return {
        key: key,
        value: value
      };
    });
  });
  return PromiseFactory.all(promises).then(function (results) {
    return results.reduce(function (obj, pair) {
      obj[pair.key] = pair.value;
      return obj;
    }, {});
  });
}

var _default = structuredPromiseAllRecursive;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdHJ1Y3R1cmVkUHJvbWlzZUFsbFJlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJuYXRpdmVQcm9taXNlIiwic3RydWN0dXJlZFByb21pc2VBbGxSZWN1cnNpdmUiLCJzdHJ1Y3R1cmUiLCJ2YWx1ZSIsIlByb21pc2VJbnRlcmZhY2UiLCJQcm9taXNlRmFjdG9yeSIsInJlc29sdmUiLCJBcnJheSIsImFsbCIsIm1hcCIsInZhbCIsImtleSIsInJlc29sdmVPYmplY3QiLCJvYmplY3QiLCJwcm9taXNlcyIsInRoZW4iLCJyZXN1bHRzIiwicmVkdWNlIiwib2JqIiwicGFpciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsZ0NBQU47O0FBRUEsU0FBU0MsNkJBQVQsQ0FBdUNDLFNBQXZDLEVBQWtEQyxLQUFsRCxFQUEySDtBQUFBLE1BQWxFQyxnQkFBa0UsdUVBQS9DSixhQUErQztBQUFBLE1BQWhDSyxjQUFnQyx1RUFBZkwsYUFBZTs7QUFFMUgsTUFBSUcsaUJBQWlCQyxnQkFBckIsRUFBdUM7QUFDdEMsV0FBT0QsS0FBUDtBQUNBOztBQUVELE1BQUcsRUFBRSxzQkFBT0QsU0FBUCxLQUFvQixRQUFwQixJQUFnQ0EsY0FBYyxJQUE5QyxJQUFzRCxFQUFFQSxpQ0FBRixDQUF4RCxDQUFILEVBQXdGO0FBQ3ZGLFdBQU9HLGVBQWVDLE9BQWYsQ0FBdUJILEtBQXZCLENBQVA7QUFDQTs7QUFFRCxNQUFJQSxpQkFBaUJJLEtBQXJCLEVBQTRCO0FBQzNCLFdBQU9GLGVBQWVHLEdBQWYsQ0FBbUJMLE1BQU1NLEdBQU4sQ0FBVSxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBWTtBQUMvQyxhQUFPViw4QkFBOEJDLFVBQVVTLEdBQVYsQ0FBOUIsRUFBOENELEdBQTlDLEVBQW1ETixnQkFBbkQsRUFBcUVDLGNBQXJFLENBQVA7QUFDQSxLQUZ5QixDQUFuQixDQUFQO0FBR0E7O0FBRUQsTUFBSSxzQkFBT0YsS0FBUCxNQUFpQixRQUFqQixJQUE2QkEsVUFBVSxJQUEzQyxFQUFpRDtBQUNoRCxXQUFPUyxjQUFjVixTQUFkLEVBQXlCQyxLQUF6QixFQUFnQ0MsZ0JBQWhDLEVBQWtEQyxjQUFsRCxDQUFQO0FBQ0E7O0FBRUQsU0FBT0EsZUFBZUMsT0FBZixDQUF1QkgsS0FBdkIsQ0FBUDtBQUNBOztBQUVELFNBQVNTLGFBQVQsQ0FBdUJWLFNBQXZCLEVBQWtDVyxNQUFsQyxFQUEwQ1QsZ0JBQTFDLEVBQTREQyxjQUE1RCxFQUE0RTtBQUMzRSxNQUFNUyxXQUFXLG1CQUFZRCxNQUFaLEVBQW9CSixHQUFwQixDQUF3QixlQUFPO0FBQy9DLFdBQU9SLDhCQUE4QkMsVUFBVVMsR0FBVixDQUE5QixFQUE4Q0UsT0FBT0YsR0FBUCxDQUE5QyxFQUEyRFAsZ0JBQTNELEVBQTZFQyxjQUE3RSxFQUE2RlUsSUFBN0YsQ0FBa0c7QUFBQSxhQUFVO0FBQUVKLGdCQUFGO0FBQU9SO0FBQVAsT0FBVjtBQUFBLEtBQWxHLENBQVA7QUFDQSxHQUZnQixDQUFqQjtBQUlBLFNBQU9FLGVBQWVHLEdBQWYsQ0FBbUJNLFFBQW5CLEVBQTZCQyxJQUE3QixDQUFrQyxtQkFBVztBQUNuRCxXQUFPQyxRQUFRQyxNQUFSLENBQWUsVUFBQ0MsR0FBRCxFQUFNQyxJQUFOLEVBQWU7QUFDcENELFVBQUlDLEtBQUtSLEdBQVQsSUFBZ0JRLEtBQUtoQixLQUFyQjtBQUNBLGFBQU9lLEdBQVA7QUFDQSxLQUhNLEVBR0osRUFISSxDQUFQO0FBSUEsR0FMTSxDQUFQO0FBTUE7O2VBRWNqQiw2QiIsImZpbGUiOiJzdHJ1Y3R1cmVkUHJvbWlzZUFsbFJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWYXIgZnJvbSAnLi92YXInXG5cbmNvbnN0IG5hdGl2ZVByb21pc2UgPSBQcm9taXNlO1xuXG5mdW5jdGlvbiBzdHJ1Y3R1cmVkUHJvbWlzZUFsbFJlY3Vyc2l2ZShzdHJ1Y3R1cmUsIHZhbHVlLCBQcm9taXNlSW50ZXJmYWNlID0gbmF0aXZlUHJvbWlzZSwgUHJvbWlzZUZhY3RvcnkgPSBuYXRpdmVQcm9taXNlKSB7XG5cblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZUludGVyZmFjZSkge1xuXHRcdHJldHVybiB2YWx1ZVxuXHR9XG5cdFxuXHRpZighKHR5cGVvZiBzdHJ1Y3R1cmUgPT0gJ29iamVjdCcgJiYgc3RydWN0dXJlICE9PSBudWxsICYmICEoc3RydWN0dXJlIGluc3RhbmNlb2YgVmFyKSkpe1xuXHRcdHJldHVybiBQcm9taXNlRmFjdG9yeS5yZXNvbHZlKHZhbHVlKTtcblx0fVxuXG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XG5cdFx0cmV0dXJuIFByb21pc2VGYWN0b3J5LmFsbCh2YWx1ZS5tYXAoKHZhbCwga2V5KT0+e1xuXHRcdFx0cmV0dXJuIHN0cnVjdHVyZWRQcm9taXNlQWxsUmVjdXJzaXZlKHN0cnVjdHVyZVtrZXldLCB2YWwsIFByb21pc2VJbnRlcmZhY2UsIFByb21pc2VGYWN0b3J5KVxuXHRcdH0pKVxuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwpIHtcblx0XHRyZXR1cm4gcmVzb2x2ZU9iamVjdChzdHJ1Y3R1cmUsIHZhbHVlLCBQcm9taXNlSW50ZXJmYWNlLCBQcm9taXNlRmFjdG9yeSlcblx0fVxuXG5cdHJldHVybiBQcm9taXNlRmFjdG9yeS5yZXNvbHZlKHZhbHVlKVxufVxuXG5mdW5jdGlvbiByZXNvbHZlT2JqZWN0KHN0cnVjdHVyZSwgb2JqZWN0LCBQcm9taXNlSW50ZXJmYWNlLCBQcm9taXNlRmFjdG9yeSkge1xuXHRjb25zdCBwcm9taXNlcyA9IE9iamVjdC5rZXlzKG9iamVjdCkubWFwKGtleSA9PiB7XHRcdFxuXHRcdHJldHVybiBzdHJ1Y3R1cmVkUHJvbWlzZUFsbFJlY3Vyc2l2ZShzdHJ1Y3R1cmVba2V5XSwgb2JqZWN0W2tleV0sIFByb21pc2VJbnRlcmZhY2UsIFByb21pc2VGYWN0b3J5KS50aGVuKHZhbHVlID0+ICh7IGtleSwgdmFsdWUgfSkpO1xuXHR9KTtcblxuXHRyZXR1cm4gUHJvbWlzZUZhY3RvcnkuYWxsKHByb21pc2VzKS50aGVuKHJlc3VsdHMgPT4ge1xuXHRcdHJldHVybiByZXN1bHRzLnJlZHVjZSgob2JqLCBwYWlyKSA9PiB7XG5cdFx0XHRvYmpbcGFpci5rZXldID0gcGFpci52YWx1ZTtcblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fSwge30pO1xuXHR9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RydWN0dXJlZFByb21pc2VBbGxSZWN1cnNpdmU7XG4iXX0=