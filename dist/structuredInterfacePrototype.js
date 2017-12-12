"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _keys = _interopRequireDefault(require("babel-runtime/core-js/object/keys"));

var _typeof2 = _interopRequireDefault(require("babel-runtime/helpers/typeof"));

var _stringify = _interopRequireDefault(require("babel-runtime/core-js/json/stringify"));

var _interfaceClass = _interopRequireDefault(require("./interfaceClass"));

var _interfaceTypeError = _interopRequireDefault(require("./interfaceTypeError"));

function structuredInterfacePrototype(structure, value) {
  if (structure instanceof _interfaceClass.default) {
    var interfaceClass = structure.getInterfaceClass();

    if (!(value instanceof interfaceClass)) {
      throw new _interfaceTypeError.default('Expected instance of class implementing interface "' + (0, _stringify.default)((0, _typeof2.default)(interfaceClass) === 'symbol' ? 'symbol' : interfaceClass) + '" but got "' + (0, _stringify.default)((0, _typeof2.default)(value) === 'symbol' ? 'symbol' : value) + '"');
    }
  } else if (structure instanceof Array) {
    structure.forEach(function (val, key) {
      return structuredInterfacePrototype(structure[key], value[key]);
    });
  } else if ((0, _typeof2.default)(structure) === 'object' && structure !== null) {
    (0, _keys.default)(structure).map(function (key) {
      return structuredInterfacePrototype(structure[key], value[key]);
    });
  }
}

var _default = structuredInterfacePrototype;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdHJ1Y3R1cmVkSW50ZXJmYWNlUHJvdG90eXBlLmpzIl0sIm5hbWVzIjpbInN0cnVjdHVyZWRJbnRlcmZhY2VQcm90b3R5cGUiLCJzdHJ1Y3R1cmUiLCJ2YWx1ZSIsImludGVyZmFjZUNsYXNzIiwiZ2V0SW50ZXJmYWNlQ2xhc3MiLCJBcnJheSIsImZvckVhY2giLCJ2YWwiLCJrZXkiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBLFNBQVNBLDRCQUFULENBQXNDQyxTQUF0QyxFQUFpREMsS0FBakQsRUFBd0Q7QUFDdkQsTUFBSUQsNENBQUosRUFBeUM7QUFDeEMsUUFBTUUsaUJBQWlCRixVQUFVRyxpQkFBVixFQUF2Qjs7QUFDQSxRQUFHLEVBQUVGLGlCQUFpQkMsY0FBbkIsQ0FBSCxFQUFzQztBQUNyQyxZQUFNLGdDQUF1Qix3REFBc0Qsd0JBQWUsc0JBQU9BLGNBQVAsTUFBMEIsUUFBMUIsR0FBcUMsUUFBckMsR0FBZ0RBLGNBQS9ELENBQXRELEdBQXFJLGFBQXJJLEdBQW1KLHdCQUFlLHNCQUFPRCxLQUFQLE1BQWlCLFFBQWpCLEdBQTRCLFFBQTVCLEdBQXVDQSxLQUF0RCxDQUFuSixHQUFnTixHQUF2TyxDQUFOO0FBQ0E7QUFDRCxHQUxELE1BTUssSUFBSUQscUJBQXFCSSxLQUF6QixFQUFnQztBQUNwQ0osY0FBVUssT0FBVixDQUFtQixVQUFDQyxHQUFELEVBQU1DLEdBQU47QUFBQSxhQUFjUiw2QkFBNkJDLFVBQVVPLEdBQVYsQ0FBN0IsRUFBNkNOLE1BQU1NLEdBQU4sQ0FBN0MsQ0FBZDtBQUFBLEtBQW5CO0FBQ0EsR0FGSSxNQUdBLElBQUksc0JBQU9QLFNBQVAsTUFBcUIsUUFBckIsSUFBaUNBLGNBQWMsSUFBbkQsRUFBeUQ7QUFDN0QsdUJBQVlBLFNBQVosRUFBdUJRLEdBQXZCLENBQTJCO0FBQUEsYUFBT1QsNkJBQTZCQyxVQUFVTyxHQUFWLENBQTdCLEVBQTZDTixNQUFNTSxHQUFOLENBQTdDLENBQVA7QUFBQSxLQUEzQjtBQUNBO0FBQ0Q7O2VBRWNSLDRCIiwiZmlsZSI6InN0cnVjdHVyZWRJbnRlcmZhY2VQcm90b3R5cGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW50ZXJmYWNlQ2xhc3MgZnJvbSAnLi9pbnRlcmZhY2VDbGFzcydcbmltcG9ydCBJbnRlcmZhY2VUeXBlRXJyb3IgZnJvbSAnLi9pbnRlcmZhY2VUeXBlRXJyb3InXG5mdW5jdGlvbiBzdHJ1Y3R1cmVkSW50ZXJmYWNlUHJvdG90eXBlKHN0cnVjdHVyZSwgdmFsdWUpIHtcblx0aWYgKHN0cnVjdHVyZSBpbnN0YW5jZW9mIEludGVyZmFjZUNsYXNzKSB7XG5cdFx0Y29uc3QgaW50ZXJmYWNlQ2xhc3MgPSBzdHJ1Y3R1cmUuZ2V0SW50ZXJmYWNlQ2xhc3MoKTtcblx0XHRpZighKHZhbHVlIGluc3RhbmNlb2YgaW50ZXJmYWNlQ2xhc3MpKXtcblx0XHRcdHRocm93IG5ldyBJbnRlcmZhY2VUeXBlRXJyb3IoJ0V4cGVjdGVkIGluc3RhbmNlIG9mIGNsYXNzIGltcGxlbWVudGluZyBpbnRlcmZhY2UgXCInK0pTT04uc3RyaW5naWZ5KHR5cGVvZiBpbnRlcmZhY2VDbGFzcyA9PT0gJ3N5bWJvbCcgPyAnc3ltYm9sJyA6IGludGVyZmFjZUNsYXNzKSsnXCIgYnV0IGdvdCBcIicrSlNPTi5zdHJpbmdpZnkodHlwZW9mIHZhbHVlID09PSAnc3ltYm9sJyA/ICdzeW1ib2wnIDogdmFsdWUpKydcIicpO1xuXHRcdH1cblx0fVxuXHRlbHNlIGlmIChzdHJ1Y3R1cmUgaW5zdGFuY2VvZiBBcnJheSkge1xuXHRcdHN0cnVjdHVyZS5mb3JFYWNoKCAodmFsLCBrZXkpID0+IHN0cnVjdHVyZWRJbnRlcmZhY2VQcm90b3R5cGUoc3RydWN0dXJlW2tleV0sIHZhbHVlW2tleV0pIClcblx0fVxuXHRlbHNlIGlmICh0eXBlb2Ygc3RydWN0dXJlID09PSAnb2JqZWN0JyAmJiBzdHJ1Y3R1cmUgIT09IG51bGwpIHtcblx0XHRPYmplY3Qua2V5cyhzdHJ1Y3R1cmUpLm1hcChrZXkgPT4gc3RydWN0dXJlZEludGVyZmFjZVByb3RvdHlwZShzdHJ1Y3R1cmVba2V5XSwgdmFsdWVba2V5XSkgKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJ1Y3R1cmVkSW50ZXJmYWNlUHJvdG90eXBlO1xuIl19