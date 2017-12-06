"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = requireFile;

var _path = _interopRequireDefault(require("path"));

var _stackTrace = _interopRequireDefault(require("stack-trace"));

var _dependency = _interopRequireDefault(require("./dependency"));

function requireFile(dep) {
  var parentDir = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

  if (!parentDir) {
    parentDir = _path.default.dirname(_stackTrace.default.get()[1].getFileName());
  }

  var depFile = _path.default.resolve(parentDir, dep);

  return new _dependency.default(require(depFile));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ub2RlUmVxdWlyZUZpbGUuanMiXSwibmFtZXMiOlsicmVxdWlyZUZpbGUiLCJkZXAiLCJwYXJlbnREaXIiLCJ1bmRlZmluZWQiLCJkaXJuYW1lIiwiZ2V0IiwiZ2V0RmlsZU5hbWUiLCJkZXBGaWxlIiwicmVzb2x2ZSIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUVBOztBQUVlLFNBQVNBLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQWdEO0FBQUEsTUFBdEJDLFNBQXNCLHVFQUFWQyxTQUFVOztBQUM5RCxNQUFHLENBQUNELFNBQUosRUFBYztBQUNiQSxnQkFBWSxjQUFLRSxPQUFMLENBQWEsb0JBQVdDLEdBQVgsR0FBaUIsQ0FBakIsRUFBb0JDLFdBQXBCLEVBQWIsQ0FBWjtBQUNBOztBQUNELE1BQU1DLFVBQVUsY0FBS0MsT0FBTCxDQUFhTixTQUFiLEVBQXdCRCxHQUF4QixDQUFoQjs7QUFDQSxTQUFPLHdCQUFnQlEsUUFBU0YsT0FBVCxDQUFoQixDQUFQO0FBQ0EiLCJmaWxlIjoibm9kZVJlcXVpcmVGaWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuaW1wb3J0IHN0YWNrVHJhY2UgZnJvbSAnc3RhY2stdHJhY2UnXG5cbmltcG9ydCBEZXBlbmRlbmN5IGZyb20gJy4vZGVwZW5kZW5jeSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZUZpbGUoZGVwLCBwYXJlbnREaXIgPSB1bmRlZmluZWQpe1xuXHRpZighcGFyZW50RGlyKXtcblx0XHRwYXJlbnREaXIgPSBwYXRoLmRpcm5hbWUoc3RhY2tUcmFjZS5nZXQoKVsxXS5nZXRGaWxlTmFtZSgpKTtcblx0fVxuXHRjb25zdCBkZXBGaWxlID0gcGF0aC5yZXNvbHZlKHBhcmVudERpciwgZGVwKTtcblx0cmV0dXJuIG5ldyBEZXBlbmRlbmN5KCByZXF1aXJlKCBkZXBGaWxlICkgKTtcbn1cbiJdfQ==