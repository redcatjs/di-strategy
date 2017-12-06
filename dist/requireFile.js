"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("babel-runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("babel-runtime/helpers/createClass"));

var RequireFile =
/*#__PURE__*/
function () {
  function RequireFile(dep) {
    (0, _classCallCheck2.default)(this, RequireFile);
    this.required = require(dep);
  }

  (0, _createClass2.default)(RequireFile, [{
    key: "getRequired",
    value: function getRequired() {
      return this.required;
    }
  }]);
  return RequireFile;
}();

exports.default = RequireFile;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXF1aXJlRmlsZS5qcyJdLCJuYW1lcyI6WyJSZXF1aXJlRmlsZSIsImRlcCIsInJlcXVpcmVkIiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUFxQkEsVzs7O0FBQ3BCLHVCQUFZQyxHQUFaLEVBQWdCO0FBQUE7QUFDZixTQUFLQyxRQUFMLEdBQWdCQyxRQUFRRixHQUFSLENBQWhCO0FBQ0E7Ozs7a0NBQ1k7QUFDWixhQUFPLEtBQUtDLFFBQVo7QUFDQSIsImZpbGUiOiJyZXF1aXJlRmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcXVpcmVGaWxle1xuXHRjb25zdHJ1Y3RvcihkZXApe1xuXHRcdHRoaXMucmVxdWlyZWQgPSByZXF1aXJlKGRlcCk7XG5cdH1cblx0Z2V0UmVxdWlyZWQoKXtcblx0XHRyZXR1cm4gdGhpcy5yZXF1aXJlZDtcblx0fVxufVxuIl19