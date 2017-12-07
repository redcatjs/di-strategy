"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeContainerApi;

function makeContainerApi(container) {
  var di = function di() {
    return container.decorator.apply(container, arguments);
  };

  di.container = container;
  di.get = container.get.bind(container);
  di.exists = container.exists.bind(container);
  di.factory = container.factory.bind(container);
  di.value = container.value.bind(container);
  di.interface = container.interface.bind(container);
  di.require = container.require.bind(container);
  di.addRule = container.addRule.bind(container);
  di.addRules = container.addRules.bind(container);
  di.config = container.config.bind(container);
  return di;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWtlQ29udGFpbmVyQXBpLmpzIl0sIm5hbWVzIjpbIm1ha2VDb250YWluZXJBcGkiLCJjb250YWluZXIiLCJkaSIsImRlY29yYXRvciIsImdldCIsImJpbmQiLCJleGlzdHMiLCJmYWN0b3J5IiwidmFsdWUiLCJpbnRlcmZhY2UiLCJyZXF1aXJlIiwiYWRkUnVsZSIsImFkZFJ1bGVzIiwiY29uZmlnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWUsU0FBU0EsZ0JBQVQsQ0FBMEJDLFNBQTFCLEVBQW9DO0FBQ2xELE1BQU1DLEtBQUssU0FBTEEsRUFBSyxHQUFXO0FBQ3JCLFdBQU9ELFVBQVVFLFNBQVYsNEJBQVA7QUFDQSxHQUZEOztBQUdBRCxLQUFHRCxTQUFILEdBQWVBLFNBQWY7QUFDQUMsS0FBR0UsR0FBSCxHQUFTSCxVQUFVRyxHQUFWLENBQWNDLElBQWQsQ0FBbUJKLFNBQW5CLENBQVQ7QUFDQUMsS0FBR0ksTUFBSCxHQUFZTCxVQUFVSyxNQUFWLENBQWlCRCxJQUFqQixDQUFzQkosU0FBdEIsQ0FBWjtBQUNBQyxLQUFHSyxPQUFILEdBQWFOLFVBQVVNLE9BQVYsQ0FBa0JGLElBQWxCLENBQXVCSixTQUF2QixDQUFiO0FBQ0FDLEtBQUdNLEtBQUgsR0FBV1AsVUFBVU8sS0FBVixDQUFnQkgsSUFBaEIsQ0FBcUJKLFNBQXJCLENBQVg7QUFDQUMsS0FBR08sU0FBSCxHQUFlUixVQUFVUSxTQUFWLENBQW9CSixJQUFwQixDQUF5QkosU0FBekIsQ0FBZjtBQUNBQyxLQUFHUSxPQUFILEdBQWFULFVBQVVTLE9BQVYsQ0FBa0JMLElBQWxCLENBQXVCSixTQUF2QixDQUFiO0FBQ0FDLEtBQUdTLE9BQUgsR0FBYVYsVUFBVVUsT0FBVixDQUFrQk4sSUFBbEIsQ0FBdUJKLFNBQXZCLENBQWI7QUFDQUMsS0FBR1UsUUFBSCxHQUFjWCxVQUFVVyxRQUFWLENBQW1CUCxJQUFuQixDQUF3QkosU0FBeEIsQ0FBZDtBQUNBQyxLQUFHVyxNQUFILEdBQVlaLFVBQVVZLE1BQVYsQ0FBaUJSLElBQWpCLENBQXNCSixTQUF0QixDQUFaO0FBQ0EsU0FBT0MsRUFBUDtBQUNBIiwiZmlsZSI6Im1ha2VDb250YWluZXJBcGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWtlQ29udGFpbmVyQXBpKGNvbnRhaW5lcil7XG5cdGNvbnN0IGRpID0gKC4uLmFyZ3MpPT57XG5cdFx0cmV0dXJuIGNvbnRhaW5lci5kZWNvcmF0b3IoLi4uYXJncyk7XG5cdH07XG5cdGRpLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblx0ZGkuZ2V0ID0gY29udGFpbmVyLmdldC5iaW5kKGNvbnRhaW5lcik7XG5cdGRpLmV4aXN0cyA9IGNvbnRhaW5lci5leGlzdHMuYmluZChjb250YWluZXIpO1xuXHRkaS5mYWN0b3J5ID0gY29udGFpbmVyLmZhY3RvcnkuYmluZChjb250YWluZXIpO1xuXHRkaS52YWx1ZSA9IGNvbnRhaW5lci52YWx1ZS5iaW5kKGNvbnRhaW5lcik7XG5cdGRpLmludGVyZmFjZSA9IGNvbnRhaW5lci5pbnRlcmZhY2UuYmluZChjb250YWluZXIpO1xuXHRkaS5yZXF1aXJlID0gY29udGFpbmVyLnJlcXVpcmUuYmluZChjb250YWluZXIpO1xuXHRkaS5hZGRSdWxlID0gY29udGFpbmVyLmFkZFJ1bGUuYmluZChjb250YWluZXIpO1xuXHRkaS5hZGRSdWxlcyA9IGNvbnRhaW5lci5hZGRSdWxlcy5iaW5kKGNvbnRhaW5lcik7XG5cdGRpLmNvbmZpZyA9IGNvbnRhaW5lci5jb25maWcuYmluZChjb250YWluZXIpO1xuXHRyZXR1cm4gZGk7XG59XG4iXX0=