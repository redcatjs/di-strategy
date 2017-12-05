"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _keys = _interopRequireDefault(require("babel-runtime/core-js/object/keys"));

var _typeof2 = _interopRequireDefault(require("babel-runtime/helpers/typeof"));

var _var = _interopRequireDefault(require("./var"));

var _sync = _interopRequireDefault(require("./sync"));

function structuredResolveParamsInterface(structure, value) {
  if (value instanceof _sync.default) {
    return value.getInstance();
  }

  if (!((0, _typeof2.default)(structure) == 'object' && structure !== null && !(structure instanceof _var.default))) {
    return value;
  }

  if (value instanceof Array) {
    return value.map(function (val, key) {
      return structuredResolveParamsInterface(structure[key], val);
    });
  }

  if ((0, _typeof2.default)(value) === 'object' && value !== null) {
    var o = {};
    (0, _keys.default)(value).map(function (key) {
      o[key] = structuredResolveParamsInterface(structure[key], value[key]);
    });
    return o;
  }

  return value;
}

var _default = structuredResolveParamsInterface;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdHJ1Y3R1cmVkUmVzb2x2ZVBhcmFtc0ludGVyZmFjZS5qcyJdLCJuYW1lcyI6WyJzdHJ1Y3R1cmVkUmVzb2x2ZVBhcmFtc0ludGVyZmFjZSIsInN0cnVjdHVyZSIsInZhbHVlIiwiZ2V0SW5zdGFuY2UiLCJBcnJheSIsIm1hcCIsInZhbCIsImtleSIsIm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQSxTQUFTQSxnQ0FBVCxDQUEwQ0MsU0FBMUMsRUFBcURDLEtBQXJELEVBQTREO0FBRzNELE1BQUlBLDhCQUFKLEVBQTJCO0FBQzFCLFdBQU9BLE1BQU1DLFdBQU4sRUFBUDtBQUNBOztBQUVELE1BQUcsRUFBRSxzQkFBT0YsU0FBUCxLQUFvQixRQUFwQixJQUFnQ0EsY0FBYyxJQUE5QyxJQUFzRCxFQUFFQSxpQ0FBRixDQUF4RCxDQUFILEVBQXdGO0FBQ3ZGLFdBQU9DLEtBQVA7QUFDQTs7QUFFRCxNQUFJQSxpQkFBaUJFLEtBQXJCLEVBQTRCO0FBQzNCLFdBQU9GLE1BQU1HLEdBQU4sQ0FBVSxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBWTtBQUM1QixhQUFPUCxpQ0FBaUNDLFVBQVVNLEdBQVYsQ0FBakMsRUFBaURELEdBQWpELENBQVA7QUFDQSxLQUZNLENBQVA7QUFHQTs7QUFFRCxNQUFJLHNCQUFPSixLQUFQLE1BQWlCLFFBQWpCLElBQTZCQSxVQUFVLElBQTNDLEVBQWlEO0FBQ2hELFFBQU1NLElBQUksRUFBVjtBQUNBLHVCQUFZTixLQUFaLEVBQW1CRyxHQUFuQixDQUF1QixlQUFPO0FBQzdCRyxRQUFFRCxHQUFGLElBQVNQLGlDQUFpQ0MsVUFBVU0sR0FBVixDQUFqQyxFQUFpREwsTUFBTUssR0FBTixDQUFqRCxDQUFUO0FBQ0EsS0FGRDtBQUdBLFdBQU9DLENBQVA7QUFDQTs7QUFFRCxTQUFPTixLQUFQO0FBQ0E7O2VBRWNGLGdDIiwiZmlsZSI6InN0cnVjdHVyZWRSZXNvbHZlUGFyYW1zSW50ZXJmYWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZhciBmcm9tICcuL3ZhcidcbmltcG9ydCBTeW5jIGZyb20gJy4vc3luYydcblxuZnVuY3Rpb24gc3RydWN0dXJlZFJlc29sdmVQYXJhbXNJbnRlcmZhY2Uoc3RydWN0dXJlLCB2YWx1ZSkge1xuXG5cdFxuXHRpZiAodmFsdWUgaW5zdGFuY2VvZiBTeW5jKSB7XG5cdFx0cmV0dXJuIHZhbHVlLmdldEluc3RhbmNlKClcblx0fVxuXHRcblx0aWYoISh0eXBlb2Ygc3RydWN0dXJlID09ICdvYmplY3QnICYmIHN0cnVjdHVyZSAhPT0gbnVsbCAmJiAhKHN0cnVjdHVyZSBpbnN0YW5jZW9mIFZhcikpKXtcblx0XHRyZXR1cm4gdmFsdWVcblx0fVxuXG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XG5cdFx0cmV0dXJuIHZhbHVlLm1hcCgodmFsLCBrZXkpPT57XG5cdFx0XHRyZXR1cm4gc3RydWN0dXJlZFJlc29sdmVQYXJhbXNJbnRlcmZhY2Uoc3RydWN0dXJlW2tleV0sIHZhbClcblx0XHR9KVxuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwpIHtcblx0XHRjb25zdCBvID0ge307XG5cdFx0T2JqZWN0LmtleXModmFsdWUpLm1hcChrZXkgPT4ge1xuXHRcdFx0b1trZXldID0gc3RydWN0dXJlZFJlc29sdmVQYXJhbXNJbnRlcmZhY2Uoc3RydWN0dXJlW2tleV0sIHZhbHVlW2tleV0pO1xuXHRcdH0pO1xuXHRcdHJldHVybiBvO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cnVjdHVyZWRSZXNvbHZlUGFyYW1zSW50ZXJmYWNlO1xuIl19