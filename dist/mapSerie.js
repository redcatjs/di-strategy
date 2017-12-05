"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mapSerie;

var _promise = _interopRequireDefault(require("babel-runtime/core-js/promise"));

var nativePromise = _promise.default;

function mapSerie(arr, callback) {
  var PromiseInterface = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : nativePromise;
  var PromiseFactory = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : nativePromise;
  return arr.reduce(function (promise, item) {
    return promise.then(function (result) {
      var promise = callback(item);

      if (!(promise instanceof PromiseInterface)) {
        promise = PromiseFactory.resolve(promise);
      }

      return promise.then(Array.prototype.concat.bind(result));
    });
  }, PromiseFactory.resolve([]));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYXBTZXJpZS5qcyJdLCJuYW1lcyI6WyJuYXRpdmVQcm9taXNlIiwibWFwU2VyaWUiLCJhcnIiLCJjYWxsYmFjayIsIlByb21pc2VJbnRlcmZhY2UiLCJQcm9taXNlRmFjdG9yeSIsInJlZHVjZSIsInByb21pc2UiLCJpdGVtIiwidGhlbiIsInJlc29sdmUiLCJBcnJheSIsInByb3RvdHlwZSIsImNvbmNhdCIsImJpbmQiLCJyZXN1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsZ0NBQU47O0FBRWUsU0FBU0MsUUFBVCxDQUFrQkMsR0FBbEIsRUFBdUJDLFFBQXZCLEVBQWtHO0FBQUEsTUFBakVDLGdCQUFpRSx1RUFBOUNKLGFBQThDO0FBQUEsTUFBL0JLLGNBQStCLHVFQUFkTCxhQUFjO0FBQ2hILFNBQU9FLElBQUlJLE1BQUosQ0FDTixVQUFDQyxPQUFELEVBQVVDLElBQVY7QUFBQSxXQUNDRCxRQUFRRSxJQUFSLENBQWEsa0JBQVU7QUFDdEIsVUFBSUYsVUFBVUosU0FBU0ssSUFBVCxDQUFkOztBQUNBLFVBQUcsRUFBRUQsbUJBQW1CSCxnQkFBckIsQ0FBSCxFQUEwQztBQUN6Q0csa0JBQVVGLGVBQWVLLE9BQWYsQ0FBdUJILE9BQXZCLENBQVY7QUFDQTs7QUFDRCxhQUFPQSxRQUFRRSxJQUFSLENBQWFFLE1BQU1DLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQyxJQUF2QixDQUE0QkMsTUFBNUIsQ0FBYixDQUFQO0FBQ0EsS0FORCxDQUREO0FBQUEsR0FETSxFQVNOVixlQUFlSyxPQUFmLENBQXVCLEVBQXZCLENBVE0sQ0FBUDtBQVdBIiwiZmlsZSI6Im1hcFNlcmllLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbmF0aXZlUHJvbWlzZSA9IFByb21pc2U7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1hcFNlcmllKGFyciwgY2FsbGJhY2ssIFByb21pc2VJbnRlcmZhY2UgPSBuYXRpdmVQcm9taXNlLCBQcm9taXNlRmFjdG9yeSA9IG5hdGl2ZVByb21pc2Upe1xuXHRyZXR1cm4gYXJyLnJlZHVjZShcblx0XHQocHJvbWlzZSwgaXRlbSkgPT5cblx0XHRcdHByb21pc2UudGhlbihyZXN1bHQgPT4ge1xuXHRcdFx0XHRsZXQgcHJvbWlzZSA9IGNhbGxiYWNrKGl0ZW0pO1xuXHRcdFx0XHRpZighKHByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlSW50ZXJmYWNlKSl7XG5cdFx0XHRcdFx0cHJvbWlzZSA9IFByb21pc2VGYWN0b3J5LnJlc29sdmUocHJvbWlzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHByb21pc2UudGhlbihBcnJheS5wcm90b3R5cGUuY29uY2F0LmJpbmQocmVzdWx0KSlcblx0XHRcdH0pLFxuXHRcdFByb21pc2VGYWN0b3J5LnJlc29sdmUoW10pXG5cdCk7XG59XG4iXX0=