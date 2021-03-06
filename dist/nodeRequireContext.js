"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _stackTrace = _interopRequireDefault(require("stack-trace"));

// based on require-webpack-compat
function getFolderContents(folder, recursive) {
  return _fs.default.readdirSync(folder).reduce(function (list, file) {
    var name = _path.default.resolve(folder, file);

    var isDir = _fs.default.statSync(name).isDirectory();

    return list.concat(isDir && recursive ? getFolderContents(name, recursive) : [name]);
  }, []);
}

;

function _default(folder) {
  var recursive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var pattern = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : /^\.\//;
  var parentDir = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;

  if (!parentDir) {
    parentDir = _path.default.dirname(_stackTrace.default.get()[1].getFileName());
  }

  var contextDir = _path.default.join(parentDir, folder);

  var contextDirLen = contextDir.length + 1;

  var normalizedFolder = _path.default.resolve(parentDir, folder);

  var folderContents = getFolderContents(normalizedFolder, recursive).filter(function (item) {
    return pattern.test(item);
  }).map(function (item) {
    return './' + item.substr(contextDirLen);
  });

  var keys = function keys() {
    return folderContents;
  };

  var returnContext = function returnContext(item) {
    return require(_path.default.resolve(normalizedFolder, item));
  };

  returnContext.keys = keys;
  return returnContext;
}

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ub2RlUmVxdWlyZUNvbnRleHQuanMiXSwibmFtZXMiOlsiZ2V0Rm9sZGVyQ29udGVudHMiLCJmb2xkZXIiLCJyZWN1cnNpdmUiLCJyZWFkZGlyU3luYyIsInJlZHVjZSIsImxpc3QiLCJmaWxlIiwibmFtZSIsInJlc29sdmUiLCJpc0RpciIsInN0YXRTeW5jIiwiaXNEaXJlY3RvcnkiLCJjb25jYXQiLCJwYXR0ZXJuIiwicGFyZW50RGlyIiwidW5kZWZpbmVkIiwiZGlybmFtZSIsImdldCIsImdldEZpbGVOYW1lIiwiY29udGV4dERpciIsImpvaW4iLCJjb250ZXh0RGlyTGVuIiwibGVuZ3RoIiwibm9ybWFsaXplZEZvbGRlciIsImZvbGRlckNvbnRlbnRzIiwiZmlsdGVyIiwidGVzdCIsIml0ZW0iLCJtYXAiLCJzdWJzdHIiLCJrZXlzIiwicmV0dXJuQ29udGV4dCIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUpBO0FBTUEsU0FBU0EsaUJBQVQsQ0FBMkJDLE1BQTNCLEVBQW1DQyxTQUFuQyxFQUE4QztBQUU3QyxTQUFPLFlBQUdDLFdBQUgsQ0FBZUYsTUFBZixFQUF1QkcsTUFBdkIsQ0FBOEIsVUFBU0MsSUFBVCxFQUFlQyxJQUFmLEVBQXFCO0FBRXpELFFBQU1DLE9BQU8sY0FBS0MsT0FBTCxDQUFhUCxNQUFiLEVBQXFCSyxJQUFyQixDQUFiOztBQUNBLFFBQU1HLFFBQVEsWUFBR0MsUUFBSCxDQUFZSCxJQUFaLEVBQWtCSSxXQUFsQixFQUFkOztBQUVBLFdBQU9OLEtBQUtPLE1BQUwsQ0FBYUgsU0FBU1AsU0FBVixHQUF1QkYsa0JBQWtCTyxJQUFsQixFQUF3QkwsU0FBeEIsQ0FBdkIsR0FBNEQsQ0FBQ0ssSUFBRCxDQUF4RSxDQUFQO0FBQ0EsR0FOTSxFQU1KLEVBTkksQ0FBUDtBQU9BOztBQUFBOztBQUVjLGtCQUFTTixNQUFULEVBQStFO0FBQUEsTUFBOURDLFNBQThELHVFQUFsRCxLQUFrRDtBQUFBLE1BQTNDVyxPQUEyQyx1RUFBaEMsT0FBZ0M7QUFBQSxNQUF2QkMsU0FBdUIsdUVBQVhDLFNBQVc7O0FBQzdGLE1BQUcsQ0FBQ0QsU0FBSixFQUFjO0FBQ2JBLGdCQUFZLGNBQUtFLE9BQUwsQ0FBYSxvQkFBV0MsR0FBWCxHQUFpQixDQUFqQixFQUFvQkMsV0FBcEIsRUFBYixDQUFaO0FBQ0E7O0FBQ0QsTUFBTUMsYUFBYSxjQUFLQyxJQUFMLENBQVVOLFNBQVYsRUFBcUJiLE1BQXJCLENBQW5COztBQUNBLE1BQU1vQixnQkFBZ0JGLFdBQVdHLE1BQVgsR0FBa0IsQ0FBeEM7O0FBQ0EsTUFBTUMsbUJBQW1CLGNBQUtmLE9BQUwsQ0FBYU0sU0FBYixFQUF3QmIsTUFBeEIsQ0FBekI7O0FBQ0EsTUFBTXVCLGlCQUFpQnhCLGtCQUFrQnVCLGdCQUFsQixFQUFvQ3JCLFNBQXBDLEVBQ3JCdUIsTUFEcUIsQ0FDZCxnQkFBTTtBQUNiLFdBQU9aLFFBQVFhLElBQVIsQ0FBYUMsSUFBYixDQUFQO0FBQ0EsR0FIcUIsRUFJckJDLEdBSnFCLENBSWpCLGdCQUFNO0FBQ1YsV0FBTyxPQUFLRCxLQUFLRSxNQUFMLENBQVlSLGFBQVosQ0FBWjtBQUNBLEdBTnFCLENBQXZCOztBQVNBLE1BQU1TLE9BQU8sU0FBUEEsSUFBTyxHQUFXO0FBQ3ZCLFdBQU9OLGNBQVA7QUFDQSxHQUZEOztBQUlBLE1BQU1PLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ0osSUFBRCxFQUFRO0FBQzdCLFdBQU9LLFFBQVEsY0FBS3hCLE9BQUwsQ0FBYWUsZ0JBQWIsRUFBK0JJLElBQS9CLENBQVIsQ0FBUDtBQUNBLEdBRkQ7O0FBSUFJLGdCQUFjRCxJQUFkLEdBQXFCQSxJQUFyQjtBQUVBLFNBQU9DLGFBQVA7QUFDQTs7QUFBQSIsImZpbGUiOiJub2RlUmVxdWlyZUNvbnRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBiYXNlZCBvbiByZXF1aXJlLXdlYnBhY2stY29tcGF0XG5cbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQgc3RhY2tUcmFjZSBmcm9tICdzdGFjay10cmFjZSdcblxuZnVuY3Rpb24gZ2V0Rm9sZGVyQ29udGVudHMoZm9sZGVyLCByZWN1cnNpdmUpIHtcblxuXHRyZXR1cm4gZnMucmVhZGRpclN5bmMoZm9sZGVyKS5yZWR1Y2UoZnVuY3Rpb24obGlzdCwgZmlsZSkge1xuXG5cdFx0Y29uc3QgbmFtZSA9IHBhdGgucmVzb2x2ZShmb2xkZXIsIGZpbGUpO1xuXHRcdGNvbnN0IGlzRGlyID0gZnMuc3RhdFN5bmMobmFtZSkuaXNEaXJlY3RvcnkoKTtcblxuXHRcdHJldHVybiBsaXN0LmNvbmNhdCgoaXNEaXIgJiYgcmVjdXJzaXZlKSA/IGdldEZvbGRlckNvbnRlbnRzKG5hbWUsIHJlY3Vyc2l2ZSkgOiBbbmFtZV0pO1xuXHR9LCBbXSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihmb2xkZXIsIHJlY3Vyc2l2ZSA9IGZhbHNlLCBwYXR0ZXJuID0gIC9eXFwuXFwvLywgcGFyZW50RGlyID0gdW5kZWZpbmVkKSB7XG5cdGlmKCFwYXJlbnREaXIpe1xuXHRcdHBhcmVudERpciA9IHBhdGguZGlybmFtZShzdGFja1RyYWNlLmdldCgpWzFdLmdldEZpbGVOYW1lKCkpO1xuXHR9XG5cdGNvbnN0IGNvbnRleHREaXIgPSBwYXRoLmpvaW4ocGFyZW50RGlyLCBmb2xkZXIpO1xuXHRjb25zdCBjb250ZXh0RGlyTGVuID0gY29udGV4dERpci5sZW5ndGgrMTtcblx0Y29uc3Qgbm9ybWFsaXplZEZvbGRlciA9IHBhdGgucmVzb2x2ZShwYXJlbnREaXIsIGZvbGRlcik7XG5cdGNvbnN0IGZvbGRlckNvbnRlbnRzID0gZ2V0Rm9sZGVyQ29udGVudHMobm9ybWFsaXplZEZvbGRlciwgcmVjdXJzaXZlKVxuXHRcdC5maWx0ZXIoaXRlbT0+e1xuXHRcdFx0cmV0dXJuIHBhdHRlcm4udGVzdChpdGVtKTtcblx0XHR9KVxuXHRcdC5tYXAoaXRlbT0+e1xuXHRcdFx0cmV0dXJuICcuLycraXRlbS5zdWJzdHIoY29udGV4dERpckxlbik7XG5cdFx0fSlcblx0O1xuXG5cdGNvbnN0IGtleXMgPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gZm9sZGVyQ29udGVudHM7XG5cdH07XG5cblx0Y29uc3QgcmV0dXJuQ29udGV4dCA9IChpdGVtKT0+e1xuXHRcdHJldHVybiByZXF1aXJlKHBhdGgucmVzb2x2ZShub3JtYWxpemVkRm9sZGVyLCBpdGVtKSk7XG5cdH07XG5cblx0cmV0dXJuQ29udGV4dC5rZXlzID0ga2V5cztcblxuXHRyZXR1cm4gcmV0dXJuQ29udGV4dDtcbn07XG4iXX0=