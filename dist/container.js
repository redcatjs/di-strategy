"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty = _interopRequireDefault(require("babel-runtime/core-js/object/define-property"));

var _from = _interopRequireDefault(require("babel-runtime/core-js/array/from"));

var _getPrototypeOf = _interopRequireDefault(require("babel-runtime/core-js/reflect/get-prototype-of"));

var _set = _interopRequireDefault(require("babel-runtime/core-js/set"));

var _toConsumableArray2 = _interopRequireDefault(require("babel-runtime/helpers/toConsumableArray"));

var _assign = _interopRequireDefault(require("babel-runtime/core-js/object/assign"));

var _getPrototypeOf2 = _interopRequireDefault(require("babel-runtime/core-js/object/get-prototype-of"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("babel-runtime/helpers/possibleConstructorReturn"));

var _inherits2 = _interopRequireDefault(require("babel-runtime/helpers/inherits"));

var _stringify = _interopRequireDefault(require("babel-runtime/core-js/json/stringify"));

var _slicedToArray2 = _interopRequireDefault(require("babel-runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("babel-runtime/helpers/extends"));

var _keys = _interopRequireDefault(require("babel-runtime/core-js/object/keys"));

var _typeof2 = _interopRequireDefault(require("babel-runtime/helpers/typeof"));

var _symbol = _interopRequireDefault(require("babel-runtime/core-js/symbol"));

var _promise = _interopRequireDefault(require("babel-runtime/core-js/promise"));

var _classCallCheck2 = _interopRequireDefault(require("babel-runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("babel-runtime/helpers/createClass"));

var _mapSerie = _interopRequireDefault(require("./mapSerie"));

var _var = _interopRequireDefault(require("./var"));

var _factory = _interopRequireDefault(require("./factory"));

var _value2 = _interopRequireDefault(require("./value"));

var _interface2 = _interopRequireDefault(require("./interface"));

var _require = _interopRequireDefault(require("./require"));

var _sharedInstance = _interopRequireDefault(require("./sharedInstance"));

var _classDef = _interopRequireDefault(require("./classDef"));

var _makeContainerApi = _interopRequireDefault(require("./makeContainerApi"));

var _sync = _interopRequireDefault(require("./sync"));

var _structuredHasPromise = _interopRequireDefault(require("./structuredHasPromise"));

var _structuredPromiseAllRecursive = _interopRequireDefault(require("./structuredPromiseAllRecursive"));

var _structuredResolveParamsInterface = _interopRequireDefault(require("./structuredResolveParamsInterface"));

var _promiseInterface = _interopRequireDefault(require("./promiseInterface"));

var Container =
/*#__PURE__*/
function () {
  function Container() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$rules = _ref.rules,
        rules = _ref$rules === void 0 ? {} : _ref$rules,
        _ref$rulesDefault = _ref.rulesDefault,
        rulesDefault = _ref$rulesDefault === void 0 ? {} : _ref$rulesDefault,
        _ref$autoloadFailOnMi = _ref.autoloadFailOnMissingFile,
        autoloadFailOnMissingFile = _ref$autoloadFailOnMi === void 0 ? 'path' : _ref$autoloadFailOnMi,
        _ref$autoloadDirs = _ref.autoloadDirs,
        autoloadDirs = _ref$autoloadDirs === void 0 ? {} : _ref$autoloadDirs,
        _ref$autoloadExtensio = _ref.autoloadExtensions,
        autoloadExtensions = _ref$autoloadExtensio === void 0 ? ['js'] : _ref$autoloadExtensio,
        _ref$autoloadPathReso = _ref.autoloadPathResolver,
        autoloadPathResolver = _ref$autoloadPathReso === void 0 ? function (path) {
      return path;
    } : _ref$autoloadPathReso,
        _ref$defaultVar = _ref.defaultVar,
        defaultVar = _ref$defaultVar === void 0 ? 'interface' : _ref$defaultVar,
        _ref$defaultRuleVar = _ref.defaultRuleVar,
        defaultRuleVar = _ref$defaultRuleVar === void 0 ? null : _ref$defaultRuleVar,
        _ref$defaultDecorator = _ref.defaultDecoratorVar,
        defaultDecoratorVar = _ref$defaultDecorator === void 0 ? null : _ref$defaultDecorator,
        _ref$defaultArgsVar = _ref.defaultArgsVar,
        defaultArgsVar = _ref$defaultArgsVar === void 0 ? null : _ref$defaultArgsVar,
        _ref$globalKey = _ref.globalKey,
        globalKey = _ref$globalKey === void 0 ? false : _ref$globalKey,
        _ref$promiseFactory = _ref.promiseFactory,
        promiseFactory = _ref$promiseFactory === void 0 ? _promise.default : _ref$promiseFactory,
        _ref$promiseInterface = _ref.promiseInterfaces,
        promiseInterfaces = _ref$promiseInterface === void 0 ? [_promise.default] : _ref$promiseInterface;

    (0, _classCallCheck2.default)(this, Container);
    this.symClassName = (0, _symbol.default)('className');
    this.symInterfaces = (0, _symbol.default)('types');
    this.providerRegistry = {};
    this.instanceRegistry = {};
    this.requires = {};
    this.autoloadExtensions = autoloadExtensions;
    this.autoloadFailOnMissingFile = autoloadFailOnMissingFile;
    this.autoloadDirs = autoloadDirs;
    this.setAutoloadPathResolver(autoloadPathResolver);
    this.loadExtensionRegex = new RegExp('\.(' + this.autoloadExtensions.join('|') + ')$');
    this.defaultRuleVar = defaultRuleVar || defaultVar;
    this.defaultDecoratorVar = defaultDecoratorVar || defaultVar;
    this.defaultArgsVar = defaultArgsVar || defaultVar;
    this.allowedDefaultVars = ['interface', 'value'];
    this.validateDefaultVar(defaultVar, 'defaultVar');
    this.validateDefaultVar(this.defaultRuleVar, 'defaultRuleVar');
    this.validateDefaultVar(this.defaultDecoratorVar, 'defaultDecoratorVar');
    this.validateDefaultVar(this.defaultArgsVar, 'defaultArgsVar');

    if (promiseInterfaces.indexOf(promiseFactory) === -1) {
      promiseInterfaces.unshift(promiseFactory);
    }

    this.PromiseInterface = (0, _promiseInterface.default)(promiseInterfaces);
    this.PromiseFactory = promiseFactory;

    if (globalKey) {
      this.setGlobalKey(globalKey);
    }

    this.rulesDefault = {
      inheritInstanceOf: true,
      inheritPrototype: false,
      inheritMixins: [],
      shared: false,
      instanceOf: undefined,
      classDef: undefined,
      params: undefined,
      calls: [],
      lazyCalls: [],
      substitutions: [],
      sharedInTree: [],
      singleton: undefined,
      asyncResolve: false,
      asyncCallsSerie: false,
      decorator: false,
      autoload: false,
      path: undefined
    };
    this.setRulesDefault(rulesDefault);
    this.rules = {};
    this.runAutoloadDirs();
    this.addRules(rules);
  }

  (0, _createClass2.default)(Container, [{
    key: "config",
    value: function config(key, value) {
      var _this = this;

      if ((0, _typeof2.default)(key) === 'object') {
        (0, _keys.default)(key).forEach(function (k) {
          return _this.config(k, key[k]);
        });
        return;
      }

      switch (key) {
        case 'autoloadFailOnMissingFile ':
        case 'autoloadExtensions':
        case 'defaultVar':
        case 'defaultRuleVar':
        case 'defaultDecoratorVar':
        case 'defaultArgsVar':
          this[key] = value;
          break;

        case 'globalkey':
          this.setGlobalKey(value);
          break;

        case 'autoloadPathResolver':
          this.setAutoloadPathResolver(value);
          break;

        case 'rulesDefault':
          this.setRulesDefault(value);
          break;
          break;

        default:
          throw new Error('Unexpected config key ' + key);
          break;
      }
    }
  }, {
    key: "setRulesDefault",
    value: function setRulesDefault(rulesDefault) {
      this.rulesDefault = (0, _extends2.default)({}, this.rulesDefault, rulesDefault);
    }
  }, {
    key: "setAutoloadPathResolver",
    value: function setAutoloadPathResolver(autoloadPathResolver) {
      if ((0, _typeof2.default)(autoloadPathResolver) == 'object') {
        var aliasMap = autoloadPathResolver;

        autoloadPathResolver = function autoloadPathResolver(path) {
          (0, _keys.default)(aliasMap).forEach(function (alias) {
            var realPath = aliasMap[alias];

            if (path == alias) {
              path = realPath;
            } else if (path.substr(0, alias.length + 1) == alias + '/') {
              path = realPath + path.substr(alias.length);
            }
          });
          return path;
        };
      }

      this.autoloadPathResolver = autoloadPathResolver;
    }
  }, {
    key: "setGlobalKey",
    value: function setGlobalKey(globalKey) {
      if (globalKey === true) {
        globalKey = 'di';
      }

      global[globalKey] = (0, _makeContainerApi.default)(this);
    }
  }, {
    key: "loadDirs",
    value: function loadDirs(dirs) {
      var _this2 = this;

      (0, _keys.default)(dirs).forEach(function (dirKey) {
        var context = dirs[dirKey];
        context.keys().forEach(function (filename) {
          var key = filename;

          if (key.substr(0, 2) == './') {
            key = key.substr(2);
          }

          key = dirKey + '/' + key.substr(0, key.lastIndexOf('.') || key.length);

          if (key.split('/').pop() == 'index') {
            key = key.substr(0, key.lastIndexOf('/'));
          }

          _this2.requires[key] = context(filename);
        });
      });
    }
  }, {
    key: "addRules",
    value: function addRules(rules) {
      var _this3 = this;

      if (typeof rules == 'function') {
        rules = rules(this);
      }

      (0, _keys.default)(rules).forEach(function (interfaceName) {
        return _this3.addRule(interfaceName, rules[interfaceName], false);
      });
      this.rulesDetectLazyLoad();
    }
  }, {
    key: "addRule",
    value: function addRule(interfaceName, rule) {
      var detectLazyLoad = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (typeof rule == 'function') {
        rule = rule(this);
      }

      if (this.rules[interfaceName] === undefined) {
        this.rules[interfaceName] = this.mergeRule({}, this.rulesDefault);
      }

      this.rules[interfaceName] = this.mergeRule(this.rules[interfaceName], rule);
      this.processRule(interfaceName);
      rule = this.rules[interfaceName];
      var _rule = rule,
          classDef = _rule.classDef;

      if (classDef) {
        if (classDef instanceof _classDef.default) {
          classDef = classDef.getClassDef();
        }

        this.registerRequire(interfaceName, classDef);
      }

      if (detectLazyLoad) {
        this.rulesDetectLazyLoad();
      }
    }
  }, {
    key: "validateDefaultVar",
    value: function validateDefaultVar(value, property) {
      if (this.allowedDefaultVars.indexOf(value) === -1) {
        throw new Error('invalid type "' + value + '" specified for ' + property + ', possibles values: ' + this.allowedDefaultVars.join(' | '));
      }
    }
  }, {
    key: "runAutoloadDirs",
    value: function runAutoloadDirs() {
      this.loadDirs(this.autoloadDirs);
      this.registerRequireMap(this.requires);
    }
  }, {
    key: "rulesDetectLazyLoad",
    value: function rulesDetectLazyLoad() {
      var _this4 = this;

      (0, _keys.default)(this.rules).forEach(function (key) {
        _this4.ruleLazyLoad(key);
      });
    }
  }, {
    key: "ruleLazyLoad",
    value: function ruleLazyLoad(key) {
      var _this5 = this;

      var stack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var calls = [];
      var lazyCalls = [];
      var rule = this.rules[key];

      if (!rule.calls) {
        return;
      }

      rule.calls.forEach(function (callVal) {
        if (typeof callVal == 'function') {
          callVal = [callVal];
        }

        var _callVal = callVal,
            _callVal2 = (0, _slicedToArray2.default)(_callVal, 2),
            method = _callVal2[0],
            _callVal2$ = _callVal2[1],
            params = _callVal2$ === void 0 ? [] : _callVal2$;

        if (_this5.ruleCheckCyclicLoad(params, [key])) {
          lazyCalls.push(callVal);
        } else {
          calls.push(callVal);
        }
      });
      rule.calls = calls;
      rule.lazyCalls = (rule.lazyCalls || []).concat(lazyCalls);
    }
  }, {
    key: "ruleCheckCyclicLoad",
    value: function ruleCheckCyclicLoad(params) {
      var _this6 = this;

      var stack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      return (0, _keys.default)(params).some(function (k) {
        var param = params[k];

        var v = _this6.wrapVarType(param, _this6.defaultRuleVar);

        if (v instanceof _interface2.default) {
          var interfaceName = v.getName();

          if (!_this6.resolveInstanceOf(interfaceName, [], false)) {
            //not found, unable to check now
            return false;
          }

          var paramRule = _this6.getRule(interfaceName);

          if (stack.indexOf(interfaceName) !== -1) {
            return true;
          }

          stack.push(interfaceName);
          var cyclic;

          if (paramRule.params) {
            cyclic = _this6.ruleCheckCyclicLoad(paramRule.params, stack);
          }

          if (!cyclic) {
            cyclic = paramRule.calls.some(function (callV) {
              var _callV = (0, _slicedToArray2.default)(callV, 2),
                  method = _callV[0],
                  _callV$ = _callV[1],
                  params = _callV$ === void 0 ? [] : _callV$;

              return _this6.ruleCheckCyclicLoad(params, stack);
            });
          }

          return cyclic;
        }

        if ((0, _typeof2.default)(v) == 'object' && v !== null && !(v instanceof _var.default)) {
          return _this6.ruleCheckCyclicLoad(v, stack);
        }
      });
    }
  }, {
    key: "processRule",
    value: function processRule(key) {
      var _this7 = this;

      var stack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      if (this.rules[key] === undefined) {
        this.rules[key] = this.mergeRule({}, this.rulesDefault);
      }

      var rule = this.rules[key];

      if (rule.instanceOf) {
        if (stack.indexOf(key) !== -1) {
          throw new Error('Cyclic interface definition error in ' + (0, _stringify.default)(stack.concat(key), null, 2));
        }

        stack.push(key);
        this.processRule(rule.instanceOf, stack);
      }

      if (rule.singleton) {
        rule.classDef = function () {
          return rule.singleton;
        };
      }

      if (typeof rule.classDef == 'string') {
        var classDefName = rule.classDef;

        rule.classDef = function () {
          var classDefinition = _this7.get(classDefName);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return new (Function.prototype.bind.apply(classDefinition, [null].concat(args)))();
        };
      }

      if (this.validateAutoloadFileName(key)) {
        if (rule.autoload) {
          var path = rule.path || key;
          var req = this.requireDep(key, path);

          if (req) {
            this.registerRequire(key, req);
          }
        }
      }
    }
  }, {
    key: "validateAutoloadFileName",
    value: function validateAutoloadFileName(name) {
      if (name.substr(0, 1) === '#') {
        return false;
      }

      return true;
    }
  }, {
    key: "requireDep",
    value: function requireDep(key, requirePath) {
      var _this8 = this;

      if (this.requires[key]) {
        return this.requires[key];
      }

      requirePath = this.autoloadPathResolver(requirePath);
      var found = this.autoloadExtensions.concat('').some(function (ext) {
        var pathFragments = requirePath.split(':');
        var path = pathFragments.shift();

        if (ext) {
          path += '.' + ext;
        }

        if (_this8.depExists(path)) {
          var required = _this8.depRequire(path);

          if (pathFragments.length) {
            pathFragments.forEach(function (subKey) {
              if (typeof required !== 'undefined' && required !== null) {
                required = required[subKey];
              }
            });
          }

          _this8.requires[key] = required;
          return true;
        }
      });

      if (!found && (this.autoloadFailOnMissingFile === 'path' && requirePath || this.autoloadFailOnMissingFile === true)) {
        throw new Error('Missing expected dependency injection file "' + requirePath + '"');
      }

      return this.requires[key];
    }
  }, {
    key: "registerRequireMap",
    value: function registerRequireMap(requires) {
      var _this9 = this;

      (0, _keys.default)(requires).forEach(function (name) {
        _this9.registerRequire(name, requires[name]);
      });
    }
  }, {
    key: "registerRequire",
    value: function registerRequire(name, _r) {
      if ((0, _typeof2.default)(_r) == 'object' && typeof _r.default == 'function') {
        _r = _r.default;
      }

      if (typeof _r !== 'function') {
        return;
      }

      var rule = this.getRuleBase(name);

      if (rule.decorator && _r[this.symClassName]) {
        _r =
        /*#__PURE__*/
        function (_r2) {
          (0, _inherits2.default)(r, _r2);

          function r() {
            (0, _classCallCheck2.default)(this, r);
            return (0, _possibleConstructorReturn2.default)(this, (r.__proto__ || (0, _getPrototypeOf2.default)(r)).apply(this, arguments));
          }

          return r;
        }(_r);
      }

      if (rule.decorator) {
        this.decorator(name)(_r);
      } else {
        this.registerClass(name, _r);
      }
    }
  }, {
    key: "decorator",
    value: function decorator(className) {
      var _this10 = this;

      var types = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      return function (target) {
        _this10.defineSym(target, _this10.symClassName, className);

        _this10.registerClass(className, target);

        if (typeof types == 'function') {
          types = types();
        }

        types = types.map(function (type) {
          return _this10.wrapVarType(type, _this10.defaultDecoratorVar);
        });

        if (target[_this10.symInterfaces]) {
          types = types.concat(target[_this10.symInterfaces]);
        }

        _this10.defineSym(target, _this10.symInterfaces, types);

        return target;
      };
    }
  }, {
    key: "exists",
    value: function exists(name) {
      return Boolean(this.rules[name]);
    }
  }, {
    key: "get",
    value: function get(interfaceDef, args) {
      var sharedInstances = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var stack = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      return this.provider(interfaceDef)(args, sharedInstances, stack);
    }
  }, {
    key: "provider",
    value: function provider(interfaceName) {
      if (typeof interfaceName == 'function') {
        interfaceName = interfaceName[this.symClassName];

        if (!interfaceName) {
          throw new Error('Unregistred class ' + interfaceName.constructor.name);
        }
      }

      if (interfaceName instanceof _interface2.default) {
        interfaceName = interfaceName.getName();
      }

      if (!this.providerRegistry[interfaceName]) {
        this.providerRegistry[interfaceName] = this.makeProvider(interfaceName);
      }

      return this.providerRegistry[interfaceName];
    }
  }, {
    key: "makeProvider",
    value: function makeProvider(interfaceName) {
      var _this11 = this;

      var rule = this.getRule(interfaceName);
      var classDef = this.resolveInstanceOf(interfaceName);
      return function (args, sharedInstances, stack) {
        //check for shared after params load
        if (_this11.instanceRegistry[interfaceName]) {
          return _this11.instanceRegistry[interfaceName];
        }

        sharedInstances = (0, _assign.default)({}, sharedInstances);
        rule.sharedInTree.forEach(function (shareInterface) {
          if (!sharedInstances[shareInterface]) {
            sharedInstances[shareInterface] = new _sharedInstance.default(shareInterface, _this11);
          }
        });
        var params;
        var defaultVar;

        if (args) {
          params = args;
          defaultVar = _this11.defaultArgsVar;
        } else {
          params = rule.params || classDef[_this11.symInterfaces] || [];
          defaultVar = _this11.defaultRuleVar;
        }

        var resolvedParams = params.map(function (interfaceDef, index) {
          return _this11.getParam(interfaceDef, rule, sharedInstances, defaultVar, index, stack);
        }); //recheck for shared after params load

        if (_this11.instanceRegistry[interfaceName]) {
          return _this11.instanceRegistry[interfaceName];
        }

        var makeInstance = function makeInstance(resolvedParams) {
          resolvedParams = (0, _structuredResolveParamsInterface.default)(params, resolvedParams);
          var instance = new (Function.prototype.bind.apply(classDef, [null].concat((0, _toConsumableArray2.default)(resolvedParams))))();

          var finalizeInstanceCreation = function finalizeInstanceCreation() {
            if (rule.shared) {
              _this11.registerInstance(interfaceName, instance);
            }

            var callsReturn = _this11.runCalls(rule.lazyCalls, instance, rule, sharedInstances);

            if (callsReturn instanceof _this11.PromiseInterface) {
              return callsReturn.then(function () {
                return instance;
              });
            }

            return instance;
          };

          var callsReturn = _this11.runCalls(rule.calls, instance, rule, sharedInstances);

          if (callsReturn instanceof _this11.PromiseInterface) {
            return callsReturn.then(function () {
              return finalizeInstanceCreation();
            });
          }

          return finalizeInstanceCreation();
        };

        if ((0, _structuredHasPromise.default)(params, resolvedParams, _this11.PromiseInterface)) {
          return (0, _structuredPromiseAllRecursive.default)(params, resolvedParams, _this11.PromiseInterface, _this11.PromiseFactory).then(function (resolvedParams) {
            return makeInstance(resolvedParams);
          });
        }

        return makeInstance(resolvedParams);
      };
    }
  }, {
    key: "getSubstitutionParam",
    value: function getSubstitutionParam(interfaceDef, rule, index) {
      var substitutions = this.wrapVarType(rule.substitutions, this.defaultRuleVar);

      if (typeof index !== 'undefined' && substitutions[index]) {
        interfaceDef = substitutions[index];
        interfaceDef = this.wrapVarType(interfaceDef, this.defaultRuleVar, true);
      }

      if (interfaceDef instanceof _interface2.default) {
        var interfaceName = interfaceDef.getName();

        if (substitutions[interfaceName]) {
          interfaceDef = substitutions[interfaceName];
          interfaceDef = this.wrapVarType(interfaceDef, this.defaultRuleVar, true);
        }
      }

      return interfaceDef;
    }
  }, {
    key: "getParam",
    value: function getParam(interfaceDef, rule, sharedInstances) {
      var _this12 = this;

      var defaultVar = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'interface';
      var index = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
      var stack = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
      interfaceDef = this.wrapVarType(interfaceDef, defaultVar);
      interfaceDef = this.getSubstitutionParam(interfaceDef, rule, index);

      if (interfaceDef instanceof _factory.default) {
        return interfaceDef.callback(sharedInstances);
      }

      if (interfaceDef instanceof _value2.default) {
        return interfaceDef.getValue();
      }

      if (interfaceDef instanceof _require.default) {
        return interfaceDef.require();
      }

      if (interfaceDef instanceof _interface2.default) {
        var interfaceName = interfaceDef.getName();
        stack = stack.slice(0);

        if (stack.indexOf(interfaceName) !== -1) {
          throw new Error('Cyclic dependency error in ' + (0, _stringify.default)(stack.concat(interfaceName), null, 2));
        }

        stack.push(interfaceName);
        var instance;

        if (sharedInstances[interfaceName]) {
          instance = sharedInstances[interfaceName].get(sharedInstances, stack);
        } else {
          instance = this.get(interfaceName, undefined, sharedInstances, stack);
        }

        var instanceRule = this.getRule(interfaceName); //if(!instanceRule.asyncResolve && instance instanceof this.PromiseInterface){

        if (!instanceRule.asyncResolve) {
          return new _sync.default(instance);
        }

        return instance;
      }

      if ((0, _typeof2.default)(interfaceDef) == 'object' && !(interfaceDef instanceof _var.default)) {
        var o = {};
        (0, _keys.default)(interfaceDef).forEach(function (k) {
          o[k] = _this12.getParam(interfaceDef[k], rule, sharedInstances, defaultVar, undefined, stack);
        });
        return o;
      }

      return interfaceDef;
    }
  }, {
    key: "wrapVarType",
    value: function wrapVarType(type, defaultVar, resolveFunction) {
      var _this13 = this;

      if (resolveFunction && typeof type == 'function') {
        type = type();
      }

      if (type instanceof _var.default) {
        return type;
      }

      switch (defaultVar) {
        case 'interface':
          if ((0, _typeof2.default)(type) == 'object' && type !== null) {
            var o = {};
            (0, _keys.default)(type).forEach(function (key) {
              var v = type[key];
              o[key] = (0, _typeof2.default)(v) == 'object' && v !== null && !(v instanceof _var.default) ? _this13.wrapVarType(v, defaultVar) : v;
            });
            return o;
          }

          if (typeof type == 'function') {
            return this.factory(type);
          }

          return this.interface(type);
          break;

        case 'value':
          return this.value(type);
          break;
      }

      return type;
    }
  }, {
    key: "registerInstance",
    value: function registerInstance(name, instance) {
      this.instanceRegistry[name] = instance;
    }
  }, {
    key: "getRuleBase",
    value: function getRuleBase(interfaceName) {
      var ruleBase = this.mergeRule({}, this.rulesDefault);
      ruleBase.interfaceName = interfaceName; //for info

      this.mergeRule(ruleBase, this.rules[interfaceName] || {});
      return ruleBase;
    }
  }, {
    key: "getRule",
    value: function getRule(interfaceName) {
      var _this14 = this;

      var rule = this.mergeRule({}, this.rulesDefault);
      rule.interfaceName = interfaceName; //for info

      if (!interfaceName) {
        return rule;
      }

      var ruleBase = this.getRuleBase(interfaceName);
      var stack = [];
      this.resolveInstanceOf(interfaceName, stack);
      var rules = [];
      var fullStack;

      if (ruleBase.inheritInstanceOf) {
        fullStack = new _set.default(stack.slice(0, -1));
      } else {
        fullStack = new _set.default(stack.slice(0, 1));
      }

      if (ruleBase.inheritPrototype) {
        stack.reverse().forEach(function (c) {
          if (typeof c == 'function') {
            var parentProto = c;
            var className;

            while (parentProto) {
              className = parentProto[_this14.symClassName];

              if (className) {
                fullStack.add(className);
              }

              parentProto = (0, _getPrototypeOf.default)(parentProto);
            }
          }
        });
      }

      fullStack = (0, _from.default)(fullStack).reverse();
      fullStack.forEach(function (className) {
        var mergeRule = _this14.rules[className];

        if (mergeRule.inheritMixins) {
          _this14.mixinsRule(rule, mergeRule.inheritMixins);
        }

        _this14.mergeRule(rule, mergeRule);
      });
      return rule;
    }
  }, {
    key: "mixinsRule",
    value: function mixinsRule(rule, mixinsGroup) {
      var _this15 = this;

      var mixinsGroups = this.ruleCollectExtendsRecursive(mixinsGroup).reverse();
      mixinsGroups.forEach(function (mixinGroup) {
        return mixinGroup.forEach(function (mixin) {
          var mergeRule = _this15.rules[mixin];

          _this15.mergeRule(rule, mergeRule, false);
        });
      });
    }
  }, {
    key: "ruleCollectExtendsRecursive",
    value: function ruleCollectExtendsRecursive(mixinGroup) {
      var _this16 = this;

      var mixinsGroups = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      if (!(mixinGroup instanceof Array)) {
        mixinGroup = [mixinGroup];
      }

      mixinsGroups.push(mixinGroup);
      mixinGroup.forEach(function (mixin) {
        var rule = _this16.rules[mixin];

        if (rule && rule.mixins) {
          _this16.ruleCollectExtendsRecursive(rule.mixins, mixinsGroups);
        }
      });
      return mixinsGroups;
    }
  }, {
    key: "registerClass",
    value: function registerClass(name, target) {
      if (!this.rules[name]) {
        this.rules[name] = {};
      }

      this.rules[name].classDef = target;
    }
  }, {
    key: "mergeRule",
    value: function mergeRule(extendRule, rule) {
      var mergeExtend = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var shared = rule.shared,
          inheritInstanceOf = rule.inheritInstanceOf,
          inheritPrototype = rule.inheritPrototype,
          inheritMixins = rule.inheritMixins,
          instanceOf = rule.instanceOf,
          params = rule.params,
          calls = rule.calls,
          lazyCalls = rule.lazyCalls,
          substitutions = rule.substitutions,
          sharedInTree = rule.sharedInTree,
          classDef = rule.classDef,
          singleton = rule.singleton,
          asyncResolve = rule.asyncResolve,
          asyncCallsSerie = rule.asyncCallsSerie,
          asyncCallsParamsSerie = rule.asyncCallsParamsSerie,
          decorator = rule.decorator,
          autoload = rule.autoload,
          path = rule.path;

      if (classDef !== undefined) {
        extendRule.classDef = classDef;
      }

      if (shared !== undefined) {
        extendRule.shared = shared;
      }

      if (inheritInstanceOf !== undefined) {
        extendRule.inheritInstanceOf = inheritInstanceOf;
      }

      if (inheritPrototype !== undefined) {
        extendRule.inheritPrototype = inheritPrototype;
      }

      if (decorator !== undefined) {
        extendRule.decorator = decorator;
      }

      if (autoload !== undefined) {
        extendRule.autoload = autoload;
      }

      if (path !== undefined) {
        extendRule.path = path;
      }

      if (instanceOf !== undefined) {
        extendRule.instanceOf = instanceOf;
      }

      if (asyncResolve !== undefined) {
        extendRule.asyncResolve = asyncResolve;
      }

      if (asyncCallsSerie !== undefined) {
        extendRule.asyncCallsSerie = asyncCallsSerie;
      }

      if (asyncCallsParamsSerie !== undefined) {
        extendRule.asyncCallsParamsSerie = asyncCallsParamsSerie;
      }

      if (calls !== undefined) {
        extendRule.calls = (extendRule.calls || []).concat(calls);
      }

      if (lazyCalls !== undefined) {
        extendRule.lazyCalls = (extendRule.lazyCalls || []).concat(lazyCalls);
      }

      if (mergeExtend && inheritMixins !== undefined) {
        extendRule.inheritMixins = inheritMixins.slice(0);
      }

      if (params !== undefined) {
        extendRule.params = params;
      }

      if (substitutions !== undefined) {
        if (!extendRule.substitutions) {
          extendRule.substitutions = {};
        }

        (0, _assign.default)(extendRule.substitutions, substitutions);
      }

      if (sharedInTree !== undefined) {
        if (!extendRule.sharedInTree) {
          extendRule.sharedInTree = [];
        }

        extendRule.sharedInTree = (0, _from.default)(new _set.default([].concat((0, _toConsumableArray2.default)(extendRule.sharedInTree), (0, _toConsumableArray2.default)(sharedInTree))));
      }

      extendRule.singleton = singleton;
      return extendRule;
    }
  }, {
    key: "mergeRules",
    value: function mergeRules(extendRules, rules) {
      var _this17 = this;

      (0, _keys.default)(rules).forEach(function (k) {
        if (!extendRules[k]) {
          extendRules[k] = {};
        }

        extendRules[k] = _this17.mergeRule(extendRules[k], rules[k]);
      });
      return extendRules;
    }
  }, {
    key: "runCalls",
    value: function runCalls(calls, instance, rule, sharedInstances) {
      var _this18 = this;

      var hasAsync;
      var callers = calls.map(function (c) {
        return function () {
          if (typeof c == 'function') {
            c = [c];
          }

          var _c = c,
              _c2 = (0, _slicedToArray2.default)(_c, 3),
              method = _c2[0],
              _c2$ = _c2[1],
              params = _c2$ === void 0 ? [] : _c2$,
              _c2$2 = _c2[2],
              asyncResolve = _c2$2 === void 0 ? rule.asyncResolve : _c2$2;

          var makeCall = function makeCall(resolvedParams) {
            resolvedParams = (0, _structuredResolveParamsInterface.default)(params, resolvedParams);
            var callReturn;

            if (typeof method == 'function') {
              callReturn = method.apply(void 0, [instance].concat((0, _toConsumableArray2.default)(resolvedParams)));
            } else {
              callReturn = instance[method].apply(instance, (0, _toConsumableArray2.default)(resolvedParams));
            }

            if (!asyncResolve) {
              callReturn = new _sync.default(callReturn);
            }

            return callReturn;
          };

          var resolvedParams = params.map(function (param) {
            return _this18.getParam(param, rule, sharedInstances, _this18.defaultRuleVar);
          });

          if ((0, _structuredHasPromise.default)(params, resolvedParams, _this18.PromiseInterface)) {
            hasAsync = true;
            return function () {
              return (0, _structuredPromiseAllRecursive.default)(params, resolvedParams, _this18.PromiseInterface, _this18.PromiseFactory).then(function (resolvedParams) {
                return makeCall(resolvedParams);
              });
            };
          } else {
            return function () {
              return makeCall(resolvedParams);
            };
          }
        };
      });
      var asyncCallsParamsSerie = rule.asyncCallsParamsSerie;
      var asyncCallsSerie = rule.asyncCallsSerie || asyncCallsParamsSerie;

      var makeCalls = function makeCalls(callers) {
        var callersReturn;

        if (hasAsync) {
          if (asyncCallsSerie) {
            callersReturn = (0, _mapSerie.default)(callers, function (caller) {
              return caller();
            }, _this18.PromiseInterface, _this18.PromiseFactory);
          } else {
            callersReturn = _this18.PromiseFactory.all(callers.map(function (caller) {
              return caller();
            }));
          }
        } else {
          callersReturn = callers.map(function (caller) {
            var callerReturn = caller();

            if (callerReturn instanceof _this18.PromiseInterface) {
              hasAsync = true;
            }

            return callerReturn;
          });

          if (hasAsync) {
            callersReturn = _this18.PromiseFactory.all(callersReturn);
          }
        }

        return callersReturn;
      };

      if (asyncCallsParamsSerie) {
        callers = (0, _mapSerie.default)(callers, function (caller) {
          caller = caller()();
          return caller;
        }, this.PromiseInterface, this.PromiseFactory);
        return callers.then(function (callers) {
          return makeCalls(callers.map(function (caller) {
            return function () {
              return caller;
            };
          }));
        });
      } else {
        callers = callers.map(function (caller) {
          return caller();
        });
        return makeCalls(callers);
      }
    }
  }, {
    key: "defineSym",
    value: function defineSym(target, symname, value) {
      (0, _defineProperty.default)(target, symname, {
        value: value,
        enumerable: false,
        configurable: true
      });
    }
  }, {
    key: "resolveInstanceOf",
    value: function resolveInstanceOf(str) {
      var stack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var required = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (typeof str == 'string') {
        if (stack.indexOf(str) !== -1) {
          throw new Error('Cyclic interface definition error in ' + (0, _stringify.default)(stack.concat(str), null, 2));
        }

        stack.push(str);
        var rule = this.rules[str];
        var resolved = false;

        if (rule) {
          if (rule.instanceOf) {
            resolved = rule.instanceOf;
          } else if (rule.classDef) {
            resolved = rule.classDef;
          }
        }

        if (!resolved) {
          if (!required) {
            return false;
          }

          throw new Error('Interface definition "' + str + '" not found, di load stack: ' + (0, _stringify.default)(stack, null, 2));
        }

        return this.resolveInstanceOf(resolved, stack, required);
      }

      stack.push(str);
      return str;
    }
  }, {
    key: "factory",
    value: function factory(callback) {
      return new _factory.default(callback);
    }
  }, {
    key: "interface",
    value: function _interface(name) {
      return new _interface2.default(name);
    }
  }, {
    key: "value",
    value: function value(_value) {
      return new _value2.default(_value);
    }
  }, {
    key: "require",
    value: function require(dep) {
      return new _require.default(dep);
    }
  }, {
    key: "classDef",
    value: function classDef(callback) {
      return new _classDef.default(callback);
    }
  }]);
  return Container;
}();

exports.default = Container;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250YWluZXIuanMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwicnVsZXMiLCJydWxlc0RlZmF1bHQiLCJhdXRvbG9hZEZhaWxPbk1pc3NpbmdGaWxlIiwiYXV0b2xvYWREaXJzIiwiYXV0b2xvYWRFeHRlbnNpb25zIiwiYXV0b2xvYWRQYXRoUmVzb2x2ZXIiLCJwYXRoIiwiZGVmYXVsdFZhciIsImRlZmF1bHRSdWxlVmFyIiwiZGVmYXVsdERlY29yYXRvclZhciIsImRlZmF1bHRBcmdzVmFyIiwiZ2xvYmFsS2V5IiwicHJvbWlzZUZhY3RvcnkiLCJwcm9taXNlSW50ZXJmYWNlcyIsInN5bUNsYXNzTmFtZSIsInN5bUludGVyZmFjZXMiLCJwcm92aWRlclJlZ2lzdHJ5IiwiaW5zdGFuY2VSZWdpc3RyeSIsInJlcXVpcmVzIiwic2V0QXV0b2xvYWRQYXRoUmVzb2x2ZXIiLCJsb2FkRXh0ZW5zaW9uUmVnZXgiLCJSZWdFeHAiLCJqb2luIiwiYWxsb3dlZERlZmF1bHRWYXJzIiwidmFsaWRhdGVEZWZhdWx0VmFyIiwiaW5kZXhPZiIsInVuc2hpZnQiLCJQcm9taXNlSW50ZXJmYWNlIiwiUHJvbWlzZUZhY3RvcnkiLCJzZXRHbG9iYWxLZXkiLCJpbmhlcml0SW5zdGFuY2VPZiIsImluaGVyaXRQcm90b3R5cGUiLCJpbmhlcml0TWl4aW5zIiwic2hhcmVkIiwiaW5zdGFuY2VPZiIsInVuZGVmaW5lZCIsImNsYXNzRGVmIiwicGFyYW1zIiwiY2FsbHMiLCJsYXp5Q2FsbHMiLCJzdWJzdGl0dXRpb25zIiwic2hhcmVkSW5UcmVlIiwic2luZ2xldG9uIiwiYXN5bmNSZXNvbHZlIiwiYXN5bmNDYWxsc1NlcmllIiwiZGVjb3JhdG9yIiwiYXV0b2xvYWQiLCJzZXRSdWxlc0RlZmF1bHQiLCJydW5BdXRvbG9hZERpcnMiLCJhZGRSdWxlcyIsImtleSIsInZhbHVlIiwiZm9yRWFjaCIsImNvbmZpZyIsImsiLCJFcnJvciIsImFsaWFzTWFwIiwicmVhbFBhdGgiLCJhbGlhcyIsInN1YnN0ciIsImxlbmd0aCIsImdsb2JhbCIsImRpcnMiLCJjb250ZXh0IiwiZGlyS2V5Iiwia2V5cyIsImZpbGVuYW1lIiwibGFzdEluZGV4T2YiLCJzcGxpdCIsInBvcCIsImFkZFJ1bGUiLCJpbnRlcmZhY2VOYW1lIiwicnVsZXNEZXRlY3RMYXp5TG9hZCIsInJ1bGUiLCJkZXRlY3RMYXp5TG9hZCIsIm1lcmdlUnVsZSIsInByb2Nlc3NSdWxlIiwiZ2V0Q2xhc3NEZWYiLCJyZWdpc3RlclJlcXVpcmUiLCJwcm9wZXJ0eSIsImxvYWREaXJzIiwicmVnaXN0ZXJSZXF1aXJlTWFwIiwicnVsZUxhenlMb2FkIiwic3RhY2siLCJjYWxsVmFsIiwibWV0aG9kIiwicnVsZUNoZWNrQ3ljbGljTG9hZCIsInB1c2giLCJjb25jYXQiLCJzb21lIiwicGFyYW0iLCJ2Iiwid3JhcFZhclR5cGUiLCJnZXROYW1lIiwicmVzb2x2ZUluc3RhbmNlT2YiLCJwYXJhbVJ1bGUiLCJnZXRSdWxlIiwiY3ljbGljIiwiY2FsbFYiLCJjbGFzc0RlZk5hbWUiLCJjbGFzc0RlZmluaXRpb24iLCJnZXQiLCJhcmdzIiwidmFsaWRhdGVBdXRvbG9hZEZpbGVOYW1lIiwicmVxIiwicmVxdWlyZURlcCIsIm5hbWUiLCJyZXF1aXJlUGF0aCIsImZvdW5kIiwicGF0aEZyYWdtZW50cyIsInNoaWZ0IiwiZXh0IiwiZGVwRXhpc3RzIiwicmVxdWlyZWQiLCJkZXBSZXF1aXJlIiwic3ViS2V5IiwiciIsImRlZmF1bHQiLCJnZXRSdWxlQmFzZSIsInJlZ2lzdGVyQ2xhc3MiLCJjbGFzc05hbWUiLCJ0eXBlcyIsInRhcmdldCIsImRlZmluZVN5bSIsIm1hcCIsInR5cGUiLCJCb29sZWFuIiwiaW50ZXJmYWNlRGVmIiwic2hhcmVkSW5zdGFuY2VzIiwicHJvdmlkZXIiLCJjb25zdHJ1Y3RvciIsIm1ha2VQcm92aWRlciIsInNoYXJlSW50ZXJmYWNlIiwicmVzb2x2ZWRQYXJhbXMiLCJpbmRleCIsImdldFBhcmFtIiwibWFrZUluc3RhbmNlIiwiaW5zdGFuY2UiLCJmaW5hbGl6ZUluc3RhbmNlQ3JlYXRpb24iLCJyZWdpc3Rlckluc3RhbmNlIiwiY2FsbHNSZXR1cm4iLCJydW5DYWxscyIsInRoZW4iLCJnZXRTdWJzdGl0dXRpb25QYXJhbSIsImNhbGxiYWNrIiwiZ2V0VmFsdWUiLCJyZXF1aXJlIiwic2xpY2UiLCJpbnN0YW5jZVJ1bGUiLCJvIiwicmVzb2x2ZUZ1bmN0aW9uIiwiZmFjdG9yeSIsImludGVyZmFjZSIsInJ1bGVCYXNlIiwiZnVsbFN0YWNrIiwicmV2ZXJzZSIsImMiLCJwYXJlbnRQcm90byIsImFkZCIsIm1peGluc1J1bGUiLCJtaXhpbnNHcm91cCIsIm1peGluc0dyb3VwcyIsInJ1bGVDb2xsZWN0RXh0ZW5kc1JlY3Vyc2l2ZSIsIm1peGluR3JvdXAiLCJtaXhpbiIsIkFycmF5IiwibWl4aW5zIiwiZXh0ZW5kUnVsZSIsIm1lcmdlRXh0ZW5kIiwiYXN5bmNDYWxsc1BhcmFtc1NlcmllIiwiZXh0ZW5kUnVsZXMiLCJoYXNBc3luYyIsImNhbGxlcnMiLCJtYWtlQ2FsbCIsImNhbGxSZXR1cm4iLCJtYWtlQ2FsbHMiLCJjYWxsZXJzUmV0dXJuIiwiY2FsbGVyIiwiYWxsIiwiY2FsbGVyUmV0dXJuIiwic3ltbmFtZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJzdHIiLCJyZXNvbHZlZCIsImRlcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0lBRXFCQSxTOzs7QUFFcEIsdUJBb0JPO0FBQUEsbUZBQUgsRUFBRztBQUFBLDBCQW5CTkMsS0FtQk07QUFBQSxRQW5CTkEsS0FtQk0sMkJBbkJFLEVBbUJGO0FBQUEsaUNBakJOQyxZQWlCTTtBQUFBLFFBakJOQSxZQWlCTSxrQ0FqQlMsRUFpQlQ7QUFB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QixZQUFNSSxJQUFOLENBQVdnRyxHQUFYO0FBQ0EsYUFBT0EsR0FBUDtBQUNBOzs7NEJBRU92QyxRLEVBQVM7QUFDaEIsYUFBTyxxQkFBWUEsUUFBWixDQUFQO0FBQ0E7OzsrQkFDU3RDLEksRUFBSztBQUNkLGFBQU8sd0JBQWNBLElBQWQsQ0FBUDtBQUNBOzs7MEJBQ0t2RCxNLEVBQU07QUFDWCxhQUFPLG9CQUFVQSxNQUFWLENBQVA7QUFDQTs7OzRCQUNPc0ksRyxFQUFJO0FBQ1gsYUFBTyxxQkFBWUEsR0FBWixDQUFQO0FBQ0E7Ozs2QkFFUXpDLFEsRUFBUztBQUNqQixhQUFPLHNCQUFhQSxRQUFiLENBQVA7QUFDQSIsImZpbGUiOiJjb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWFwU2VyaWUgZnJvbSAnLi9tYXBTZXJpZSdcblxuaW1wb3J0IFZhciBmcm9tICcuL3ZhcidcbmltcG9ydCBGYWN0b3J5IGZyb20gJy4vZmFjdG9yeSdcbmltcG9ydCBWYWx1ZSBmcm9tICcuL3ZhbHVlJ1xuaW1wb3J0IEludGVyZmFjZSBmcm9tICcuL2ludGVyZmFjZSdcbmltcG9ydCBSZXF1aXJlIGZyb20gJy4vcmVxdWlyZSdcblxuaW1wb3J0IFNoYXJlZEluc3RhbmNlIGZyb20gJy4vc2hhcmVkSW5zdGFuY2UnXG5cbmltcG9ydCBDbGFzc0RlZiBmcm9tICcuL2NsYXNzRGVmJ1xuXG5pbXBvcnQgbWFrZUNvbnRhaW5lckFwaSBmcm9tICcuL21ha2VDb250YWluZXJBcGknXG5cbmltcG9ydCBTeW5jIGZyb20gJy4vc3luYydcbmltcG9ydCBzdHJ1Y3R1cmVkSGFzUHJvbWlzZSBmcm9tICcuL3N0cnVjdHVyZWRIYXNQcm9taXNlJ1xuaW1wb3J0IHN0cnVjdHVyZWRQcm9taXNlQWxsUmVjdXJzaXZlIGZyb20gJy4vc3RydWN0dXJlZFByb21pc2VBbGxSZWN1cnNpdmUnXG5pbXBvcnQgc3RydWN0dXJlZFJlc29sdmVQYXJhbXNJbnRlcmZhY2UgZnJvbSAnLi9zdHJ1Y3R1cmVkUmVzb2x2ZVBhcmFtc0ludGVyZmFjZSdcblxuaW1wb3J0IHByb21pc2VJbnRlcmZhY2UgZnJvbSAnLi9wcm9taXNlSW50ZXJmYWNlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWluZXJ7XG5cblx0Y29uc3RydWN0b3Ioe1xuXHRcdHJ1bGVzID0ge30sXG5cdFx0XG5cdFx0cnVsZXNEZWZhdWx0ID0ge30sXG5cdFx0XG5cdFx0YXV0b2xvYWRGYWlsT25NaXNzaW5nRmlsZSA9ICdwYXRoJyxcblx0XHRhdXRvbG9hZERpcnMgPSB7fSxcblx0XHRhdXRvbG9hZEV4dGVuc2lvbnMgPSBbJ2pzJ10sXG5cdFx0YXV0b2xvYWRQYXRoUmVzb2x2ZXIgPSAocGF0aCk9PnBhdGgsXG5cdFx0XG5cdFx0ZGVmYXVsdFZhciA9ICdpbnRlcmZhY2UnLFxuXHRcdGRlZmF1bHRSdWxlVmFyID0gbnVsbCxcblx0XHRkZWZhdWx0RGVjb3JhdG9yVmFyID0gbnVsbCxcblx0XHRkZWZhdWx0QXJnc1ZhciA9IG51bGwsXG5cdFx0XG5cdFx0Z2xvYmFsS2V5ID0gZmFsc2UsXG5cdFx0XG5cdFx0cHJvbWlzZUZhY3RvcnkgPSBQcm9taXNlLFxuXHRcdHByb21pc2VJbnRlcmZhY2VzID0gWyBQcm9taXNlIF0sXG5cdFx0XG5cdH0gPSB7fSl7XG5cdFx0XG5cdFx0dGhpcy5zeW1DbGFzc05hbWUgPSBTeW1ib2woJ2NsYXNzTmFtZScpO1xuXHRcdHRoaXMuc3ltSW50ZXJmYWNlcyA9IFN5bWJvbCgndHlwZXMnKTtcblx0XHR0aGlzLnByb3ZpZGVyUmVnaXN0cnkgPSB7fTtcblx0XHR0aGlzLmluc3RhbmNlUmVnaXN0cnkgPSB7fTtcblx0XHRcblx0XHR0aGlzLnJlcXVpcmVzID0ge307XG5cdFx0dGhpcy5hdXRvbG9hZEV4dGVuc2lvbnMgPSBhdXRvbG9hZEV4dGVuc2lvbnM7XG5cdFx0dGhpcy5hdXRvbG9hZEZhaWxPbk1pc3NpbmdGaWxlID0gYXV0b2xvYWRGYWlsT25NaXNzaW5nRmlsZTtcblx0XHR0aGlzLmF1dG9sb2FkRGlycyA9IGF1dG9sb2FkRGlycztcblx0XHR0aGlzLnNldEF1dG9sb2FkUGF0aFJlc29sdmVyKGF1dG9sb2FkUGF0aFJlc29sdmVyKTtcblx0XHR0aGlzLmxvYWRFeHRlbnNpb25SZWdleCA9IG5ldyBSZWdFeHAoJ1xcLignK3RoaXMuYXV0b2xvYWRFeHRlbnNpb25zLmpvaW4oJ3wnKSsnKSQnKTtcblx0XHRcblx0XHR0aGlzLmRlZmF1bHRSdWxlVmFyID0gZGVmYXVsdFJ1bGVWYXIgfHwgZGVmYXVsdFZhcjtcblx0XHR0aGlzLmRlZmF1bHREZWNvcmF0b3JWYXIgPSBkZWZhdWx0RGVjb3JhdG9yVmFyIHx8IGRlZmF1bHRWYXI7XG5cdFx0dGhpcy5kZWZhdWx0QXJnc1ZhciA9IGRlZmF1bHRBcmdzVmFyIHx8IGRlZmF1bHRWYXI7XG5cdFx0XG5cdFx0dGhpcy5hbGxvd2VkRGVmYXVsdFZhcnMgPSBbJ2ludGVyZmFjZScsJ3ZhbHVlJ107XG5cdFx0dGhpcy52YWxpZGF0ZURlZmF1bHRWYXIoZGVmYXVsdFZhciwgJ2RlZmF1bHRWYXInKTtcblx0XHR0aGlzLnZhbGlkYXRlRGVmYXVsdFZhcih0aGlzLmRlZmF1bHRSdWxlVmFyLCAnZGVmYXVsdFJ1bGVWYXInKTtcblx0XHR0aGlzLnZhbGlkYXRlRGVmYXVsdFZhcih0aGlzLmRlZmF1bHREZWNvcmF0b3JWYXIsICdkZWZhdWx0RGVjb3JhdG9yVmFyJyk7XG5cdFx0dGhpcy52YWxpZGF0ZURlZmF1bHRWYXIodGhpcy5kZWZhdWx0QXJnc1ZhciwgJ2RlZmF1bHRBcmdzVmFyJyk7XG5cdFx0XG5cdFx0aWYocHJvbWlzZUludGVyZmFjZXMuaW5kZXhPZihwcm9taXNlRmFjdG9yeSkgPT09IC0xKXtcblx0XHRcdHByb21pc2VJbnRlcmZhY2VzLnVuc2hpZnQocHJvbWlzZUZhY3RvcnkpO1xuXHRcdH1cblx0XHR0aGlzLlByb21pc2VJbnRlcmZhY2UgPSBwcm9taXNlSW50ZXJmYWNlKHByb21pc2VJbnRlcmZhY2VzKTtcblx0XHR0aGlzLlByb21pc2VGYWN0b3J5ID0gcHJvbWlzZUZhY3Rvcnk7XG5cdFx0XG5cdFx0aWYoZ2xvYmFsS2V5KXtcblx0XHRcdHRoaXMuc2V0R2xvYmFsS2V5KGdsb2JhbEtleSk7XG5cdFx0fVxuXHRcdFxuXHRcdHRoaXMucnVsZXNEZWZhdWx0ID0ge1xuXHRcdFx0XG5cdFx0XHRpbmhlcml0SW5zdGFuY2VPZjogdHJ1ZSxcblx0XHRcdGluaGVyaXRQcm90b3R5cGU6IGZhbHNlLFxuXHRcdFx0aW5oZXJpdE1peGluczogW10sXG5cdFx0XHRcblx0XHRcdHNoYXJlZDogZmFsc2UsXG5cdFx0XHRpbnN0YW5jZU9mOiB1bmRlZmluZWQsXG5cdFx0XHRjbGFzc0RlZjogdW5kZWZpbmVkLFxuXHRcdFx0cGFyYW1zOiB1bmRlZmluZWQsXG5cdFx0XHRcblx0XHRcdGNhbGxzOiBbXSxcblx0XHRcdGxhenlDYWxsczogW10sXG5cdFx0XHRcblx0XHRcdHN1YnN0aXR1dGlvbnM6IFtdLFxuXHRcdFx0c2hhcmVkSW5UcmVlOiBbXSxcblx0XHRcdFxuXHRcdFx0c2luZ2xldG9uOiB1bmRlZmluZWQsXG5cdFx0XHRcblx0XHRcdGFzeW5jUmVzb2x2ZTogZmFsc2UsXG5cdFx0XHRhc3luY0NhbGxzU2VyaWU6IGZhbHNlLFxuXHRcdFx0XG5cdFx0XHRkZWNvcmF0b3I6IGZhbHNlLFxuXHRcdFx0XG5cdFx0XHRhdXRvbG9hZDogZmFsc2UsXG5cdFx0XHRwYXRoOiB1bmRlZmluZWQsXG5cdFx0XHRcblx0XHR9O1xuXHRcdHRoaXMuc2V0UnVsZXNEZWZhdWx0KHJ1bGVzRGVmYXVsdCk7XG5cdFx0dGhpcy5ydWxlcyA9IHt9O1xuXHRcdFxuXHRcdHRoaXMucnVuQXV0b2xvYWREaXJzKCk7XG5cdFx0dGhpcy5hZGRSdWxlcyhydWxlcyk7XG5cdFx0XG5cdH1cblx0XG5cdGNvbmZpZyhrZXksIHZhbHVlKXtcblx0XHRpZih0eXBlb2Yga2V5ID09PSAnb2JqZWN0Jyl7XG5cdFx0XHRPYmplY3Qua2V5cyhrZXkpLmZvckVhY2goaz0+dGhpcy5jb25maWcoaywga2V5W2tdKSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHN3aXRjaChrZXkpe1xuXHRcdFx0Y2FzZSAnYXV0b2xvYWRGYWlsT25NaXNzaW5nRmlsZSAnOlxuXHRcdFx0Y2FzZSAnYXV0b2xvYWRFeHRlbnNpb25zJzpcblx0XHRcdGNhc2UgJ2RlZmF1bHRWYXInOlxuXHRcdFx0Y2FzZSAnZGVmYXVsdFJ1bGVWYXInOlxuXHRcdFx0Y2FzZSAnZGVmYXVsdERlY29yYXRvclZhcic6XG5cdFx0XHRjYXNlICdkZWZhdWx0QXJnc1Zhcic6XG5cdFx0XHRcdHRoaXNba2V5XSA9IHZhbHVlO1xuXHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdnbG9iYWxrZXknOlxuXHRcdFx0XHR0aGlzLnNldEdsb2JhbEtleSh2YWx1ZSk7XG5cdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2F1dG9sb2FkUGF0aFJlc29sdmVyJzpcblx0XHRcdFx0dGhpcy5zZXRBdXRvbG9hZFBhdGhSZXNvbHZlcih2YWx1ZSk7XG5cdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3J1bGVzRGVmYXVsdCc6XG5cdFx0XHRcdHRoaXMuc2V0UnVsZXNEZWZhdWx0KHZhbHVlKTtcblx0XHRcdGJyZWFrO1xuXHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgY29uZmlnIGtleSAnK2tleSk7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblx0XG5cdHNldFJ1bGVzRGVmYXVsdChydWxlc0RlZmF1bHQpe1xuXHRcdHRoaXMucnVsZXNEZWZhdWx0ID0ge1xuXHRcdFx0Li4udGhpcy5ydWxlc0RlZmF1bHQsXG5cdFx0XHQuLi5ydWxlc0RlZmF1bHQsXG5cdFx0fTtcblx0fVxuXHRcblx0c2V0QXV0b2xvYWRQYXRoUmVzb2x2ZXIoYXV0b2xvYWRQYXRoUmVzb2x2ZXIpe1xuXHRcdFxuXHRcdGlmKHR5cGVvZiBhdXRvbG9hZFBhdGhSZXNvbHZlciA9PSAnb2JqZWN0Jyl7XG5cdFx0XHRcblx0XHRcdGNvbnN0IGFsaWFzTWFwID0gYXV0b2xvYWRQYXRoUmVzb2x2ZXI7XG5cdFx0XHRhdXRvbG9hZFBhdGhSZXNvbHZlciA9IChwYXRoKT0+e1xuXHRcdFx0XHRPYmplY3Qua2V5cyhhbGlhc01hcCkuZm9yRWFjaChhbGlhcz0+e1xuXHRcdFx0XHRcdGNvbnN0IHJlYWxQYXRoID0gYWxpYXNNYXBbYWxpYXNdO1xuXHRcdFx0XHRcdGlmKHBhdGggPT0gYWxpYXMpe1xuXHRcdFx0XHRcdFx0cGF0aCA9IHJlYWxQYXRoO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGlmKHBhdGguc3Vic3RyKDAsYWxpYXMubGVuZ3RoKzEpPT1hbGlhcysnLycpe1xuXHRcdFx0XHRcdFx0cGF0aCA9IHJlYWxQYXRoK3BhdGguc3Vic3RyKGFsaWFzLmxlbmd0aCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuIHBhdGg7XG5cdFx0XHR9O1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLmF1dG9sb2FkUGF0aFJlc29sdmVyID0gYXV0b2xvYWRQYXRoUmVzb2x2ZXI7XG5cdH1cblx0XG5cdHNldEdsb2JhbEtleShnbG9iYWxLZXkpe1xuXHRcdGlmKGdsb2JhbEtleT09PXRydWUpe1xuXHRcdFx0Z2xvYmFsS2V5ID0gJ2RpJztcblx0XHR9XG5cdFx0Z2xvYmFsW2dsb2JhbEtleV0gPSBtYWtlQ29udGFpbmVyQXBpKHRoaXMpO1xuXHR9XG5cdFxuXHRsb2FkRGlycyhkaXJzKXtcblx0XHRPYmplY3Qua2V5cyhkaXJzKS5mb3JFYWNoKGRpcktleT0+e1xuXHRcdFx0Y29uc3QgY29udGV4dCA9IGRpcnNbZGlyS2V5XTtcblx0XHRcdGNvbnRleHQua2V5cygpLmZvckVhY2goKGZpbGVuYW1lKT0+e1xuXHRcdFx0XHRcblx0XHRcdFx0bGV0IGtleSA9IGZpbGVuYW1lO1xuXHRcdFx0XHRpZihrZXkuc3Vic3RyKDAsMik9PScuLycpe1xuXHRcdFx0XHRcdGtleSA9IGtleS5zdWJzdHIoMik7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdGtleSA9IGRpcktleSsnLycra2V5LnN1YnN0cigwLCBrZXkubGFzdEluZGV4T2YoJy4nKSB8fCBrZXkubGVuZ3RoKTtcblx0XHRcdFx0aWYoa2V5LnNwbGl0KCcvJykucG9wKCk9PSdpbmRleCcpe1xuXHRcdFx0XHRcdGtleSA9IGtleS5zdWJzdHIoMCwga2V5Lmxhc3RJbmRleE9mKCcvJykpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMucmVxdWlyZXNba2V5XSA9IGNvbnRleHQoZmlsZW5hbWUpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblx0XG5cdGFkZFJ1bGVzKHJ1bGVzKXtcblx0XHRpZih0eXBlb2YgcnVsZXMgPT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRydWxlcyA9IHJ1bGVzKHRoaXMpO1xuXHRcdH1cblx0XHRPYmplY3Qua2V5cyhydWxlcykuZm9yRWFjaChpbnRlcmZhY2VOYW1lID0+IHRoaXMuYWRkUnVsZShpbnRlcmZhY2VOYW1lLCBydWxlc1tpbnRlcmZhY2VOYW1lXSwgZmFsc2UpKTtcblx0XHR0aGlzLnJ1bGVzRGV0ZWN0TGF6eUxvYWQoKTtcblx0fVxuXHRhZGRSdWxlKGludGVyZmFjZU5hbWUsIHJ1bGUsIGRldGVjdExhenlMb2FkID0gdHJ1ZSl7XG5cdFx0aWYodHlwZW9mIHJ1bGUgPT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRydWxlID0gcnVsZSh0aGlzKTtcblx0XHR9XG5cdFx0XG5cdFx0aWYodGhpcy5ydWxlc1tpbnRlcmZhY2VOYW1lXSA9PT0gdW5kZWZpbmVkKXtcblx0XHRcdHRoaXMucnVsZXNbaW50ZXJmYWNlTmFtZV0gPSB0aGlzLm1lcmdlUnVsZSh7fSwgdGhpcy5ydWxlc0RlZmF1bHQpO1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLnJ1bGVzW2ludGVyZmFjZU5hbWVdID0gdGhpcy5tZXJnZVJ1bGUodGhpcy5ydWxlc1tpbnRlcmZhY2VOYW1lXSwgcnVsZSk7XG5cdFx0dGhpcy5wcm9jZXNzUnVsZShpbnRlcmZhY2VOYW1lKTtcblx0XHRcblx0XHRydWxlID0gdGhpcy5ydWxlc1tpbnRlcmZhY2VOYW1lXTtcblx0XHRcblx0XHRsZXQgeyBjbGFzc0RlZiB9ID0gcnVsZTtcblx0XHRpZihjbGFzc0RlZil7XG5cdFx0XHRpZihjbGFzc0RlZiBpbnN0YW5jZW9mIENsYXNzRGVmKXtcblx0XHRcdFx0Y2xhc3NEZWYgPSBjbGFzc0RlZi5nZXRDbGFzc0RlZigpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5yZWdpc3RlclJlcXVpcmUoaW50ZXJmYWNlTmFtZSwgY2xhc3NEZWYpO1xuXHRcdH1cblx0XHRcblx0XHRpZihkZXRlY3RMYXp5TG9hZCl7XG5cdFx0XHR0aGlzLnJ1bGVzRGV0ZWN0TGF6eUxvYWQoKTtcblx0XHR9XG5cdFx0XG5cdH1cblx0XG5cdHZhbGlkYXRlRGVmYXVsdFZhcih2YWx1ZSwgcHJvcGVydHkpe1xuXHRcdGlmKHRoaXMuYWxsb3dlZERlZmF1bHRWYXJzLmluZGV4T2YodmFsdWUpPT09LTEpe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIHR5cGUgXCInK3ZhbHVlKydcIiBzcGVjaWZpZWQgZm9yICcrcHJvcGVydHkrJywgcG9zc2libGVzIHZhbHVlczogJyt0aGlzLmFsbG93ZWREZWZhdWx0VmFycy5qb2luKCcgfCAnKSk7XG5cdFx0fVxuXHR9XG5cdFxuXHRydW5BdXRvbG9hZERpcnMoKXtcblx0XHR0aGlzLmxvYWREaXJzKHRoaXMuYXV0b2xvYWREaXJzKTtcblx0XHR0aGlzLnJlZ2lzdGVyUmVxdWlyZU1hcCh0aGlzLnJlcXVpcmVzKTtcblx0fVxuXHRydWxlc0RldGVjdExhenlMb2FkKCl7XG5cdFx0T2JqZWN0LmtleXModGhpcy5ydWxlcykuZm9yRWFjaChrZXk9Pntcblx0XHRcdHRoaXMucnVsZUxhenlMb2FkKGtleSk7XG5cdFx0fSk7XG5cdH1cblx0XG5cdHJ1bGVMYXp5TG9hZChrZXksIHN0YWNrPVtdKXtcblx0XHRjb25zdCBjYWxscyA9IFtdO1xuXHRcdGNvbnN0IGxhenlDYWxscyA9IFtdO1xuXHRcdFxuXHRcdGNvbnN0IHJ1bGUgPSB0aGlzLnJ1bGVzW2tleV07XG5cdFx0XG5cdFx0aWYoIXJ1bGUuY2FsbHMpe1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRcblx0XHRydWxlLmNhbGxzLmZvckVhY2goY2FsbFZhbCA9PiB7XG5cdFx0XHRpZih0eXBlb2YgY2FsbFZhbCA9PSAnZnVuY3Rpb24nKXtcblx0XHRcdFx0Y2FsbFZhbCA9IFtjYWxsVmFsXTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IFttZXRob2QsIHBhcmFtcyA9IFtdXSA9IGNhbGxWYWw7XG5cdFx0XHRpZiggdGhpcy5ydWxlQ2hlY2tDeWNsaWNMb2FkKHBhcmFtcywgWyBrZXkgXSkgKXtcblx0XHRcdFx0bGF6eUNhbGxzLnB1c2goY2FsbFZhbCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNle1xuXHRcdFx0XHRjYWxscy5wdXNoKGNhbGxWYWwpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdFxuXHRcdHJ1bGUuY2FsbHMgPSBjYWxscztcblx0XHRydWxlLmxhenlDYWxscyA9IChydWxlLmxhenlDYWxscyB8fCBbXSkuY29uY2F0KGxhenlDYWxscyk7XG5cdH1cblx0cnVsZUNoZWNrQ3ljbGljTG9hZChwYXJhbXMsIHN0YWNrPVtdKXtcdFx0XG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKHBhcmFtcykuc29tZShrPT57XG5cdFx0XHRjb25zdCBwYXJhbSA9IHBhcmFtc1trXTtcblx0XHRcdGNvbnN0IHYgPSB0aGlzLndyYXBWYXJUeXBlKHBhcmFtLCB0aGlzLmRlZmF1bHRSdWxlVmFyKTtcblx0XHRcdGlmKHYgaW5zdGFuY2VvZiBJbnRlcmZhY2Upe1xuXHRcdFx0XHRjb25zdCBpbnRlcmZhY2VOYW1lID0gdi5nZXROYW1lKCk7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZighdGhpcy5yZXNvbHZlSW5zdGFuY2VPZihpbnRlcmZhY2VOYW1lLCBbXSwgZmFsc2UpKXtcblx0XHRcdFx0XHQvL25vdCBmb3VuZCwgdW5hYmxlIHRvIGNoZWNrIG5vd1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0Y29uc3QgcGFyYW1SdWxlID0gdGhpcy5nZXRSdWxlKGludGVyZmFjZU5hbWUpO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYoc3RhY2suaW5kZXhPZihpbnRlcmZhY2VOYW1lKSE9PS0xKXtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0c3RhY2sucHVzaChpbnRlcmZhY2VOYW1lKTtcblx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0bGV0IGN5Y2xpYztcblxuXHRcdFx0XHRpZihwYXJhbVJ1bGUucGFyYW1zKXtcblx0XHRcdFx0XHRjeWNsaWMgPSB0aGlzLnJ1bGVDaGVja0N5Y2xpY0xvYWQocGFyYW1SdWxlLnBhcmFtcywgc3RhY2spO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoIWN5Y2xpYyl7XG5cdFx0XHRcdFx0Y3ljbGljID0gcGFyYW1SdWxlLmNhbGxzLnNvbWUoY2FsbFY9Pntcblx0XHRcdFx0XHRcdGNvbnN0IFttZXRob2QsIHBhcmFtcyA9IFtdIF0gPSBjYWxsVjtcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLnJ1bGVDaGVja0N5Y2xpY0xvYWQocGFyYW1zLCBzdGFjayk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdHJldHVybiBjeWNsaWM7XG5cdFx0XHRcdFxuXHRcdFx0fVxuXHRcdFx0aWYodHlwZW9mIHYgPT0gJ29iamVjdCcgJiYgdiAhPT0gbnVsbCAmJiAhKHYgaW5zdGFuY2VvZiBWYXIpKXtcblx0XHRcdFx0cmV0dXJuIHRoaXMucnVsZUNoZWNrQ3ljbGljTG9hZCh2LCBzdGFjayk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblx0XG5cdHByb2Nlc3NSdWxlKGtleSwgc3RhY2sgPSBbXSl7XG5cdFx0aWYodGhpcy5ydWxlc1trZXldID09PSB1bmRlZmluZWQpe1xuXHRcdFx0dGhpcy5ydWxlc1trZXldID0gdGhpcy5tZXJnZVJ1bGUoe30sIHRoaXMucnVsZXNEZWZhdWx0KTtcblx0XHR9XG5cdFx0Y29uc3QgcnVsZSA9IHRoaXMucnVsZXNba2V5XTtcblx0XHRpZihydWxlLmluc3RhbmNlT2Ype1xuXHRcdFx0aWYoc3RhY2suaW5kZXhPZihrZXkpIT09LTEpe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0N5Y2xpYyBpbnRlcmZhY2UgZGVmaW5pdGlvbiBlcnJvciBpbiAnK0pTT04uc3RyaW5naWZ5KHN0YWNrLmNvbmNhdChrZXkpLG51bGwsMikpO1xuXHRcdFx0fVxuXHRcdFx0c3RhY2sucHVzaChrZXkpO1xuXHRcdFx0dGhpcy5wcm9jZXNzUnVsZShydWxlLmluc3RhbmNlT2YsIHN0YWNrKTtcblx0XHR9XG5cdFx0aWYocnVsZS5zaW5nbGV0b24pe1xuXHRcdFx0cnVsZS5jbGFzc0RlZiA9IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHJldHVybiBydWxlLnNpbmdsZXRvbjtcblx0XHRcdH07XG5cdFx0fVxuXHRcdGlmKHR5cGVvZiBydWxlLmNsYXNzRGVmID09ICdzdHJpbmcnKXtcblx0XHRcdGNvbnN0IGNsYXNzRGVmTmFtZSA9IHJ1bGUuY2xhc3NEZWY7XG5cdFx0XHRydWxlLmNsYXNzRGVmID0gKC4uLmFyZ3MpPT57XG5cdFx0XHRcdGNvbnN0IGNsYXNzRGVmaW5pdGlvbiA9IHRoaXMuZ2V0KGNsYXNzRGVmTmFtZSk7XG5cdFx0XHRcdHJldHVybiBuZXcgY2xhc3NEZWZpbml0aW9uKC4uLmFyZ3MpO1xuXHRcdFx0fTtcblx0XHR9XG5cdFx0aWYodGhpcy52YWxpZGF0ZUF1dG9sb2FkRmlsZU5hbWUoa2V5KSl7XG5cdFx0XHRpZihydWxlLmF1dG9sb2FkKXtcblx0XHRcdFx0Y29uc3QgcGF0aCA9IHJ1bGUucGF0aCB8fCBrZXk7XG5cdFx0XHRcdGNvbnN0IHJlcSA9IHRoaXMucmVxdWlyZURlcChrZXksIHBhdGgpO1xuXHRcdFx0XHRpZihyZXEpe1xuXHRcdFx0XHRcdHRoaXMucmVnaXN0ZXJSZXF1aXJlKGtleSwgcmVxKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRcblx0dmFsaWRhdGVBdXRvbG9hZEZpbGVOYW1lKG5hbWUpe1xuXHRcdGlmKG5hbWUuc3Vic3RyKDAsMSk9PT0nIycpe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRcblx0cmVxdWlyZURlcChrZXksIHJlcXVpcmVQYXRoKXtcblx0XHRpZih0aGlzLnJlcXVpcmVzW2tleV0pe1xuXHRcdFx0cmV0dXJuIHRoaXMucmVxdWlyZXNba2V5XTtcblx0XHR9XG5cdFx0XG5cdFx0cmVxdWlyZVBhdGggPSB0aGlzLmF1dG9sb2FkUGF0aFJlc29sdmVyKHJlcXVpcmVQYXRoKTtcblx0XHRcblx0XHRjb25zdCBmb3VuZCA9IHRoaXMuYXV0b2xvYWRFeHRlbnNpb25zLmNvbmNhdCgnJykuc29tZSggZXh0ID0+IHtcblx0XHRcdFxuXHRcdFx0Y29uc3QgcGF0aEZyYWdtZW50cyA9IHJlcXVpcmVQYXRoLnNwbGl0KCc6Jyk7XG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0bGV0IHBhdGggPSBwYXRoRnJhZ21lbnRzLnNoaWZ0KCk7XG5cdFx0XHRpZihleHQpe1xuXHRcdFx0XHRwYXRoICs9ICcuJytleHQ7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0aWYodGhpcy5kZXBFeGlzdHMocGF0aCkpe1xuXHRcdFx0XHRsZXQgcmVxdWlyZWQgPSB0aGlzLmRlcFJlcXVpcmUocGF0aCk7XG5cdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdGlmKHBhdGhGcmFnbWVudHMubGVuZ3RoKXtcblx0XHRcdFx0XHRwYXRoRnJhZ21lbnRzLmZvckVhY2goIHN1YktleSA9PiB7XG5cdFx0XHRcdFx0XHRpZih0eXBlb2YgcmVxdWlyZWQgIT09ICd1bmRlZmluZWQnICYmIHJlcXVpcmVkICE9PSBudWxsKXtcblx0XHRcdFx0XHRcdFx0cmVxdWlyZWQgPSByZXF1aXJlZFtzdWJLZXldO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRcblx0XHRcdFx0dGhpcy5yZXF1aXJlc1trZXldID0gcmVxdWlyZWQ7XG5cdFx0XHRcdFxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdH0pO1xuXHRcdGlmKCAhIGZvdW5kICYmICgodGhpcy5hdXRvbG9hZEZhaWxPbk1pc3NpbmdGaWxlPT09J3BhdGgnICYmIHJlcXVpcmVQYXRoKSB8fCB0aGlzLmF1dG9sb2FkRmFpbE9uTWlzc2luZ0ZpbGU9PT10cnVlKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGV4cGVjdGVkIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGZpbGUgXCInK3JlcXVpcmVQYXRoKydcIicpO1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gdGhpcy5yZXF1aXJlc1trZXldO1xuXHR9XG5cdFxuXHRcblx0cmVnaXN0ZXJSZXF1aXJlTWFwKHJlcXVpcmVzKXtcblx0XHRPYmplY3Qua2V5cyhyZXF1aXJlcykuZm9yRWFjaCgobmFtZSk9Pntcblx0XHRcdHRoaXMucmVnaXN0ZXJSZXF1aXJlKG5hbWUscmVxdWlyZXNbbmFtZV0pO1xuXHRcdH0pO1xuXHR9XG5cdHJlZ2lzdGVyUmVxdWlyZShuYW1lLHIpe1xuXHRcdGlmKHR5cGVvZiByID09ICdvYmplY3QnICYmIHR5cGVvZiByLmRlZmF1bHQgPT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRyID0gci5kZWZhdWx0O1xuXHRcdH1cblx0XHRpZih0eXBlb2YgciAhPT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHJ1bGUgPSB0aGlzLmdldFJ1bGVCYXNlKG5hbWUpO1xuXHRcdGlmKHJ1bGUuZGVjb3JhdG9yICYmIHJbdGhpcy5zeW1DbGFzc05hbWVdKXtcblx0XHRcdHIgPSBjbGFzcyBleHRlbmRzIHJ7fTtcblx0XHR9XG5cdFx0XG5cdFx0aWYocnVsZS5kZWNvcmF0b3Ipe1xuXHRcdFx0dGhpcy5kZWNvcmF0b3IobmFtZSkocik7XG5cdFx0fVxuXHRcdGVsc2V7XG5cdFx0XHR0aGlzLnJlZ2lzdGVyQ2xhc3MobmFtZSwgcik7XG5cdFx0fVxuXHR9XG5cdFxuXHRcblx0ZGVjb3JhdG9yKGNsYXNzTmFtZSwgdHlwZXMgPSBbXSl7XG5cdFx0cmV0dXJuICh0YXJnZXQpPT57XG5cdFx0XHRcblx0XHRcdHRoaXMuZGVmaW5lU3ltKHRhcmdldCwgdGhpcy5zeW1DbGFzc05hbWUsIGNsYXNzTmFtZSk7XG5cdFx0XHRcblx0XHRcdHRoaXMucmVnaXN0ZXJDbGFzcyhjbGFzc05hbWUsIHRhcmdldCk7XG5cdFx0XHRcblx0XHRcdGlmKHR5cGVvZiB0eXBlcyA9PSAnZnVuY3Rpb24nKXtcblx0XHRcdFx0dHlwZXMgPSB0eXBlcygpO1xuXHRcdFx0fVxuXHRcdFx0dHlwZXMgPSB0eXBlcy5tYXAodHlwZSA9PiB0aGlzLndyYXBWYXJUeXBlKHR5cGUsIHRoaXMuZGVmYXVsdERlY29yYXRvclZhcikpO1xuXHRcdFx0XG5cdFx0XHRpZiAodGFyZ2V0W3RoaXMuc3ltSW50ZXJmYWNlc10pIHtcblx0XHRcdFx0dHlwZXMgPSB0eXBlcy5jb25jYXQodGFyZ2V0W3RoaXMuc3ltSW50ZXJmYWNlc10pO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5kZWZpbmVTeW0odGFyZ2V0LCB0aGlzLnN5bUludGVyZmFjZXMsIHR5cGVzKTtcblx0XHRcdFxuXHRcdFx0cmV0dXJuIHRhcmdldDtcblx0XHR9O1xuXHR9XG5cdFxuXHRleGlzdHMobmFtZSl7XG5cdFx0cmV0dXJuIEJvb2xlYW4odGhpcy5ydWxlc1tuYW1lXSk7XG5cdH1cblx0XG5cdGdldChpbnRlcmZhY2VEZWYsIGFyZ3MsIHNoYXJlZEluc3RhbmNlcyA9IHt9LCBzdGFjayA9IFtdKXtcblx0XHRyZXR1cm4gdGhpcy5wcm92aWRlcihpbnRlcmZhY2VEZWYpKGFyZ3MsIHNoYXJlZEluc3RhbmNlcywgc3RhY2spO1xuXHR9XG5cdHByb3ZpZGVyKGludGVyZmFjZU5hbWUpe1xuXHRcdFxuXHRcdGlmKHR5cGVvZiBpbnRlcmZhY2VOYW1lID09ICdmdW5jdGlvbicpe1xuXHRcdFx0aW50ZXJmYWNlTmFtZSA9IGludGVyZmFjZU5hbWVbdGhpcy5zeW1DbGFzc05hbWVdO1xuXHRcdFx0aWYoIWludGVyZmFjZU5hbWUpe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1VucmVnaXN0cmVkIGNsYXNzICcraW50ZXJmYWNlTmFtZS5jb25zdHJ1Y3Rvci5uYW1lKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0aWYoaW50ZXJmYWNlTmFtZSBpbnN0YW5jZW9mIEludGVyZmFjZSl7XG5cdFx0XHRpbnRlcmZhY2VOYW1lID0gaW50ZXJmYWNlTmFtZS5nZXROYW1lKCk7XG5cdFx0fVxuXHRcdFxuXHRcdGlmKCF0aGlzLnByb3ZpZGVyUmVnaXN0cnlbaW50ZXJmYWNlTmFtZV0pe1xuXHRcdFx0dGhpcy5wcm92aWRlclJlZ2lzdHJ5W2ludGVyZmFjZU5hbWVdID0gdGhpcy5tYWtlUHJvdmlkZXIoaW50ZXJmYWNlTmFtZSk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnByb3ZpZGVyUmVnaXN0cnlbaW50ZXJmYWNlTmFtZV07XG5cdH1cblx0XG5cdG1ha2VQcm92aWRlcihpbnRlcmZhY2VOYW1lKXtcblx0XHRjb25zdCBydWxlID0gdGhpcy5nZXRSdWxlKGludGVyZmFjZU5hbWUpO1xuXHRcdGNvbnN0IGNsYXNzRGVmID0gdGhpcy5yZXNvbHZlSW5zdGFuY2VPZihpbnRlcmZhY2VOYW1lKTtcblx0XHRyZXR1cm4gKGFyZ3MsIHNoYXJlZEluc3RhbmNlcywgc3RhY2spPT57XG5cdFx0XHRcblx0XHRcdC8vY2hlY2sgZm9yIHNoYXJlZCBhZnRlciBwYXJhbXMgbG9hZFxuXHRcdFx0aWYodGhpcy5pbnN0YW5jZVJlZ2lzdHJ5W2ludGVyZmFjZU5hbWVdKXtcblx0XHRcdFx0cmV0dXJuIHRoaXMuaW5zdGFuY2VSZWdpc3RyeVtpbnRlcmZhY2VOYW1lXTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0c2hhcmVkSW5zdGFuY2VzID0gT2JqZWN0LmFzc2lnbih7fSwgc2hhcmVkSW5zdGFuY2VzKTtcblx0XHRcdHJ1bGUuc2hhcmVkSW5UcmVlLmZvckVhY2goc2hhcmVJbnRlcmZhY2UgPT4ge1xuXHRcdFx0XHRpZighc2hhcmVkSW5zdGFuY2VzW3NoYXJlSW50ZXJmYWNlXSl7XG5cdFx0XHRcdFx0c2hhcmVkSW5zdGFuY2VzW3NoYXJlSW50ZXJmYWNlXSA9IG5ldyBTaGFyZWRJbnN0YW5jZShzaGFyZUludGVyZmFjZSwgdGhpcyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0XG5cdFx0XHRsZXQgcGFyYW1zO1xuXHRcdFx0bGV0IGRlZmF1bHRWYXI7XG5cdFx0XHRpZihhcmdzKXtcblx0XHRcdFx0cGFyYW1zID0gYXJncztcblx0XHRcdFx0ZGVmYXVsdFZhciA9IHRoaXMuZGVmYXVsdEFyZ3NWYXI7XG5cdFx0XHR9XG5cdFx0XHRlbHNle1xuXHRcdFx0XHRwYXJhbXMgPSBydWxlLnBhcmFtcyB8fCBjbGFzc0RlZlt0aGlzLnN5bUludGVyZmFjZXNdIHx8IFtdO1xuXHRcdFx0XHRkZWZhdWx0VmFyID0gdGhpcy5kZWZhdWx0UnVsZVZhcjtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Y29uc3QgcmVzb2x2ZWRQYXJhbXMgPSBwYXJhbXMubWFwKChpbnRlcmZhY2VEZWYsIGluZGV4KT0+e1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5nZXRQYXJhbShpbnRlcmZhY2VEZWYsIHJ1bGUsIHNoYXJlZEluc3RhbmNlcywgZGVmYXVsdFZhciwgaW5kZXgsIHN0YWNrKTtcblx0XHRcdH0pO1xuXHRcdFx0XG5cdFx0XHQvL3JlY2hlY2sgZm9yIHNoYXJlZCBhZnRlciBwYXJhbXMgbG9hZFxuXHRcdFx0aWYodGhpcy5pbnN0YW5jZVJlZ2lzdHJ5W2ludGVyZmFjZU5hbWVdKXtcblx0XHRcdFx0cmV0dXJuIHRoaXMuaW5zdGFuY2VSZWdpc3RyeVtpbnRlcmZhY2VOYW1lXTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Y29uc3QgbWFrZUluc3RhbmNlID0gKHJlc29sdmVkUGFyYW1zKT0+e1xuXHRcdFx0XHRcblx0XHRcdFx0cmVzb2x2ZWRQYXJhbXMgPSBzdHJ1Y3R1cmVkUmVzb2x2ZVBhcmFtc0ludGVyZmFjZShwYXJhbXMsIHJlc29sdmVkUGFyYW1zKTtcblx0XHRcdFx0XG5cdFx0XHRcdGNvbnN0IGluc3RhbmNlID0gbmV3IGNsYXNzRGVmKC4uLnJlc29sdmVkUGFyYW1zKTtcblx0XHRcdFx0XG5cdFx0XHRcdGNvbnN0IGZpbmFsaXplSW5zdGFuY2VDcmVhdGlvbiA9ICgpPT57XG5cdFx0XHRcdFx0aWYocnVsZS5zaGFyZWQpe1xuXHRcdFx0XHRcdFx0dGhpcy5yZWdpc3Rlckluc3RhbmNlKGludGVyZmFjZU5hbWUsIGluc3RhbmNlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0Y29uc3QgY2FsbHNSZXR1cm4gPSB0aGlzLnJ1bkNhbGxzKHJ1bGUubGF6eUNhbGxzLCBpbnN0YW5jZSwgcnVsZSwgc2hhcmVkSW5zdGFuY2VzKTtcblx0XHRcdFx0XHRpZihjYWxsc1JldHVybiBpbnN0YW5jZW9mIHRoaXMuUHJvbWlzZUludGVyZmFjZSl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gY2FsbHNSZXR1cm4udGhlbigoKT0+aW5zdGFuY2UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHRyZXR1cm4gaW5zdGFuY2U7XG5cdFx0XHRcdH07XG5cdFx0XHRcdFxuXHRcdFx0XHRjb25zdCBjYWxsc1JldHVybiA9IHRoaXMucnVuQ2FsbHMocnVsZS5jYWxscywgaW5zdGFuY2UsIHJ1bGUsIHNoYXJlZEluc3RhbmNlcyk7XG5cdFx0XHRcdGlmKGNhbGxzUmV0dXJuIGluc3RhbmNlb2YgdGhpcy5Qcm9taXNlSW50ZXJmYWNlKXtcblx0XHRcdFx0XHRyZXR1cm4gY2FsbHNSZXR1cm4udGhlbigoKT0+ZmluYWxpemVJbnN0YW5jZUNyZWF0aW9uKCkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRyZXR1cm4gZmluYWxpemVJbnN0YW5jZUNyZWF0aW9uKCk7XG5cdFx0XHR9O1xuXHRcdFx0aWYoc3RydWN0dXJlZEhhc1Byb21pc2UocGFyYW1zLCByZXNvbHZlZFBhcmFtcywgdGhpcy5Qcm9taXNlSW50ZXJmYWNlKSl7XG5cdFx0XHRcdHJldHVybiBzdHJ1Y3R1cmVkUHJvbWlzZUFsbFJlY3Vyc2l2ZShwYXJhbXMsIHJlc29sdmVkUGFyYW1zLCB0aGlzLlByb21pc2VJbnRlcmZhY2UsIHRoaXMuUHJvbWlzZUZhY3RvcnkgKS50aGVuKHJlc29sdmVkUGFyYW1zPT57XG5cdFx0XHRcdFx0cmV0dXJuIG1ha2VJbnN0YW5jZShyZXNvbHZlZFBhcmFtcyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRyZXR1cm4gbWFrZUluc3RhbmNlKHJlc29sdmVkUGFyYW1zKTtcblx0XHR9O1xuXHR9XG5cdFxuXHRnZXRTdWJzdGl0dXRpb25QYXJhbShpbnRlcmZhY2VEZWYsIHJ1bGUsIGluZGV4KXtcblx0XHRjb25zdCBzdWJzdGl0dXRpb25zID0gdGhpcy53cmFwVmFyVHlwZShydWxlLnN1YnN0aXR1dGlvbnMsIHRoaXMuZGVmYXVsdFJ1bGVWYXIpO1xuXHRcdFxuXHRcdGlmKHR5cGVvZiBpbmRleCAhPT0gJ3VuZGVmaW5lZCcgJiYgc3Vic3RpdHV0aW9uc1tpbmRleF0pe1xuXHRcdFx0aW50ZXJmYWNlRGVmID0gc3Vic3RpdHV0aW9uc1tpbmRleF07XG5cdFx0XHRpbnRlcmZhY2VEZWYgPSB0aGlzLndyYXBWYXJUeXBlKGludGVyZmFjZURlZiwgdGhpcy5kZWZhdWx0UnVsZVZhciwgdHJ1ZSk7XG5cdFx0fVxuXHRcdFxuXHRcdGlmKGludGVyZmFjZURlZiBpbnN0YW5jZW9mIEludGVyZmFjZSl7XG5cdFx0XHRjb25zdCBpbnRlcmZhY2VOYW1lID0gaW50ZXJmYWNlRGVmLmdldE5hbWUoKTtcblx0XHRcdGlmKHN1YnN0aXR1dGlvbnNbaW50ZXJmYWNlTmFtZV0pe1xuXHRcdFx0XHRpbnRlcmZhY2VEZWYgPSBzdWJzdGl0dXRpb25zW2ludGVyZmFjZU5hbWVdO1xuXHRcdFx0XHRpbnRlcmZhY2VEZWYgPSB0aGlzLndyYXBWYXJUeXBlKGludGVyZmFjZURlZiwgdGhpcy5kZWZhdWx0UnVsZVZhciwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9XG5cdFx0cmV0dXJuIGludGVyZmFjZURlZjtcblx0fVxuXHRnZXRQYXJhbShpbnRlcmZhY2VEZWYsIHJ1bGUsIHNoYXJlZEluc3RhbmNlcywgZGVmYXVsdFZhciA9ICdpbnRlcmZhY2UnLCBpbmRleCA9IHVuZGVmaW5lZCwgc3RhY2sgPSBbXSl7XG5cdFx0XG5cdFx0aW50ZXJmYWNlRGVmID0gdGhpcy53cmFwVmFyVHlwZShpbnRlcmZhY2VEZWYsIGRlZmF1bHRWYXIpO1xuXHRcdFxuXHRcdGludGVyZmFjZURlZiA9IHRoaXMuZ2V0U3Vic3RpdHV0aW9uUGFyYW0oaW50ZXJmYWNlRGVmLCBydWxlLCBpbmRleCk7XG5cdFx0XG5cdFx0aWYoaW50ZXJmYWNlRGVmIGluc3RhbmNlb2YgRmFjdG9yeSl7XG5cdFx0XHRyZXR1cm4gaW50ZXJmYWNlRGVmLmNhbGxiYWNrKHNoYXJlZEluc3RhbmNlcyk7XG5cdFx0fVxuXHRcdGlmKGludGVyZmFjZURlZiBpbnN0YW5jZW9mIFZhbHVlKXtcblx0XHRcdHJldHVybiBpbnRlcmZhY2VEZWYuZ2V0VmFsdWUoKTtcblx0XHR9XG5cdFx0aWYoaW50ZXJmYWNlRGVmIGluc3RhbmNlb2YgUmVxdWlyZSl7XG5cdFx0XHRyZXR1cm4gaW50ZXJmYWNlRGVmLnJlcXVpcmUoKTtcblx0XHR9XG5cdFx0XG5cdFx0aWYoaW50ZXJmYWNlRGVmIGluc3RhbmNlb2YgSW50ZXJmYWNlKXtcblx0XHRcdFxuXHRcdFx0Y29uc3QgaW50ZXJmYWNlTmFtZSA9IGludGVyZmFjZURlZi5nZXROYW1lKCk7XG5cdFx0XHRcblx0XHRcdHN0YWNrID0gc3RhY2suc2xpY2UoMCk7XG5cdFx0XHRpZihzdGFjay5pbmRleE9mKGludGVyZmFjZU5hbWUpIT09LTEpe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0N5Y2xpYyBkZXBlbmRlbmN5IGVycm9yIGluICcrSlNPTi5zdHJpbmdpZnkoc3RhY2suY29uY2F0KGludGVyZmFjZU5hbWUpLG51bGwsMikpO1xuXHRcdFx0fVxuXHRcdFx0c3RhY2sucHVzaChpbnRlcmZhY2VOYW1lKTtcblx0XHRcdFxuXHRcdFx0bGV0IGluc3RhbmNlO1xuXHRcdFx0XG5cdFx0XHRpZihzaGFyZWRJbnN0YW5jZXNbaW50ZXJmYWNlTmFtZV0pe1xuXHRcdFx0XHRpbnN0YW5jZSA9IHNoYXJlZEluc3RhbmNlc1tpbnRlcmZhY2VOYW1lXS5nZXQoc2hhcmVkSW5zdGFuY2VzLCBzdGFjayk7XG5cdFx0XHR9XG5cdFx0XHRlbHNle1xuXHRcdFx0XHRpbnN0YW5jZSA9IHRoaXMuZ2V0KGludGVyZmFjZU5hbWUsIHVuZGVmaW5lZCwgc2hhcmVkSW5zdGFuY2VzLCBzdGFjayk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGNvbnN0IGluc3RhbmNlUnVsZSA9IHRoaXMuZ2V0UnVsZShpbnRlcmZhY2VOYW1lKTtcblx0XHRcdFxuXHRcdFx0Ly9pZighaW5zdGFuY2VSdWxlLmFzeW5jUmVzb2x2ZSAmJiBpbnN0YW5jZSBpbnN0YW5jZW9mIHRoaXMuUHJvbWlzZUludGVyZmFjZSl7XG5cdFx0XHRpZighaW5zdGFuY2VSdWxlLmFzeW5jUmVzb2x2ZSl7XG5cdFx0XHRcdHJldHVybiBuZXcgU3luYyhpbnN0YW5jZSk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHJldHVybiBpbnN0YW5jZTtcblx0XHR9XG5cdFx0XG5cdFx0aWYodHlwZW9mIGludGVyZmFjZURlZiA9PSAnb2JqZWN0JyAmJiAhKGludGVyZmFjZURlZiBpbnN0YW5jZW9mIFZhcikpe1xuXHRcdFx0Y29uc3QgbyA9IHt9O1xuXHRcdFx0T2JqZWN0LmtleXMoaW50ZXJmYWNlRGVmKS5mb3JFYWNoKGsgPT4ge1xuXHRcdFx0XHRvW2tdID0gdGhpcy5nZXRQYXJhbShpbnRlcmZhY2VEZWZba10sIHJ1bGUsIHNoYXJlZEluc3RhbmNlcywgZGVmYXVsdFZhciwgdW5kZWZpbmVkLCBzdGFjayk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBvO1xuXHRcdH1cblx0XG5cdFx0cmV0dXJuIGludGVyZmFjZURlZjtcblx0fVxuXHRcblx0d3JhcFZhclR5cGUodHlwZSwgZGVmYXVsdFZhciwgcmVzb2x2ZUZ1bmN0aW9uKXtcblx0XHRpZihyZXNvbHZlRnVuY3Rpb24gJiYgdHlwZW9mIHR5cGUgPT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHR0eXBlID0gdHlwZSgpO1xuXHRcdH1cblx0XHRpZih0eXBlIGluc3RhbmNlb2YgVmFyKXtcblx0XHRcdHJldHVybiB0eXBlO1xuXHRcdH1cblx0XHRzd2l0Y2goZGVmYXVsdFZhcil7XG5cdFx0XHRjYXNlICdpbnRlcmZhY2UnOlxuXHRcdFx0XHRpZih0eXBlb2YgdHlwZSA9PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKXtcblx0XHRcdFx0XHRjb25zdCBvID0ge307XG5cdFx0XHRcdFx0T2JqZWN0LmtleXModHlwZSkuZm9yRWFjaChrZXk9Pntcblx0XHRcdFx0XHRcdGNvbnN0IHYgPSB0eXBlW2tleV07XG5cdFx0XHRcdFx0XHRvW2tleV0gPSB0eXBlb2YgdiA9PSAnb2JqZWN0JyAmJiB2ICE9PSBudWxsICYmICEodiBpbnN0YW5jZW9mIFZhcikgPyB0aGlzLndyYXBWYXJUeXBlKHYsIGRlZmF1bHRWYXIpIDogdjtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRyZXR1cm4gbztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZih0eXBlb2YgdHlwZSA9PSAnZnVuY3Rpb24nKXtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5mYWN0b3J5KHR5cGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0aGlzLmludGVyZmFjZSh0eXBlKTtcblx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAndmFsdWUnOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy52YWx1ZSh0eXBlKTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRyZXR1cm4gdHlwZTtcblx0fVxuXHRcblx0cmVnaXN0ZXJJbnN0YW5jZShuYW1lLCBpbnN0YW5jZSl7XG5cdFx0dGhpcy5pbnN0YW5jZVJlZ2lzdHJ5W25hbWVdID0gaW5zdGFuY2U7XG5cdH1cblx0XG5cdGdldFJ1bGVCYXNlKGludGVyZmFjZU5hbWUpe1xuXHRcdGNvbnN0IHJ1bGVCYXNlID0gdGhpcy5tZXJnZVJ1bGUoe30sIHRoaXMucnVsZXNEZWZhdWx0KTtcblx0XHRydWxlQmFzZS5pbnRlcmZhY2VOYW1lID0gaW50ZXJmYWNlTmFtZTsgLy9mb3IgaW5mb1xuXHRcdHRoaXMubWVyZ2VSdWxlKHJ1bGVCYXNlLCB0aGlzLnJ1bGVzW2ludGVyZmFjZU5hbWVdIHx8IHt9KTtcblx0XHRyZXR1cm4gcnVsZUJhc2U7XG5cdH1cblx0XG5cdGdldFJ1bGUoaW50ZXJmYWNlTmFtZSl7XG5cdFx0Y29uc3QgcnVsZSA9IHRoaXMubWVyZ2VSdWxlKHt9LCB0aGlzLnJ1bGVzRGVmYXVsdCk7XG5cdFx0cnVsZS5pbnRlcmZhY2VOYW1lID0gaW50ZXJmYWNlTmFtZTsgLy9mb3IgaW5mb1xuXHRcdGlmKCFpbnRlcmZhY2VOYW1lKXtcblx0XHRcdHJldHVybiBydWxlO1xuXHRcdH1cblx0XHRcblx0XHRjb25zdCBydWxlQmFzZSA9IHRoaXMuZ2V0UnVsZUJhc2UoaW50ZXJmYWNlTmFtZSk7XG5cdFx0XG5cdFx0bGV0IHN0YWNrID0gW107XG5cdFx0XG5cdFx0dGhpcy5yZXNvbHZlSW5zdGFuY2VPZihpbnRlcmZhY2VOYW1lLCBzdGFjayk7XG5cdFx0XG5cdFx0Y29uc3QgcnVsZXMgPSBbXTtcblx0XHRcblx0XHRsZXQgZnVsbFN0YWNrO1xuXHRcdFxuXHRcdGlmKHJ1bGVCYXNlLmluaGVyaXRJbnN0YW5jZU9mKXsgXG5cdFx0XHRmdWxsU3RhY2sgPSBuZXcgU2V0KCBzdGFjay5zbGljZSgwLCAtMSkgKTtcblx0XHR9XG5cdFx0ZWxzZXtcblx0XHRcdGZ1bGxTdGFjayA9IG5ldyBTZXQoIHN0YWNrLnNsaWNlKDAsIDEpICk7XG5cdFx0fVxuXHRcdFxuXHRcdFxuXHRcdGlmKHJ1bGVCYXNlLmluaGVyaXRQcm90b3R5cGUpe1xuXHRcdFx0c3RhY2sucmV2ZXJzZSgpLmZvckVhY2goKGMpPT57XG5cdFx0XHRcdGlmKHR5cGVvZiBjID09ICdmdW5jdGlvbicpe1xuXHRcdFx0XHRcdGxldCBwYXJlbnRQcm90byA9IGM7XG5cdFx0XHRcdFx0bGV0IGNsYXNzTmFtZTtcblx0XHRcdFx0XHR3aGlsZShwYXJlbnRQcm90byl7XG5cdFx0XHRcdFx0XHRjbGFzc05hbWUgPSBwYXJlbnRQcm90b1t0aGlzLnN5bUNsYXNzTmFtZV07XG5cdFx0XHRcdFx0XHRpZihjbGFzc05hbWUpe1xuXHRcdFx0XHRcdFx0XHRmdWxsU3RhY2suYWRkKGNsYXNzTmFtZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRwYXJlbnRQcm90byA9IFJlZmxlY3QuZ2V0UHJvdG90eXBlT2YocGFyZW50UHJvdG8pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGZ1bGxTdGFjayA9IEFycmF5LmZyb20oZnVsbFN0YWNrKS5yZXZlcnNlKCk7XG5cdFx0XG5cdFx0ZnVsbFN0YWNrLmZvckVhY2goKGNsYXNzTmFtZSk9Pntcblx0XHRcdGNvbnN0IG1lcmdlUnVsZSA9IHRoaXMucnVsZXNbY2xhc3NOYW1lXTtcblx0XHRcdFx0XG5cdFx0XHRpZihtZXJnZVJ1bGUuaW5oZXJpdE1peGlucyl7XG5cdFx0XHRcdHRoaXMubWl4aW5zUnVsZShydWxlLCBtZXJnZVJ1bGUuaW5oZXJpdE1peGlucyk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHRoaXMubWVyZ2VSdWxlKHJ1bGUsIG1lcmdlUnVsZSk7XG5cdFx0fSk7XG5cdFx0XG5cdFx0cmV0dXJuIHJ1bGU7XG5cdH1cblx0XG5cdG1peGluc1J1bGUocnVsZSwgbWl4aW5zR3JvdXApe1xuXHRcdGNvbnN0IG1peGluc0dyb3VwcyA9IHRoaXMucnVsZUNvbGxlY3RFeHRlbmRzUmVjdXJzaXZlKG1peGluc0dyb3VwKS5yZXZlcnNlKCk7XG5cdFx0bWl4aW5zR3JvdXBzLmZvckVhY2gobWl4aW5Hcm91cCA9PlxuXHRcdFx0bWl4aW5Hcm91cC5mb3JFYWNoKCBtaXhpbiA9PiB7XG5cdFx0XHRcdGNvbnN0IG1lcmdlUnVsZSA9IHRoaXMucnVsZXNbbWl4aW5dO1xuXHRcdFx0XHR0aGlzLm1lcmdlUnVsZShydWxlLCBtZXJnZVJ1bGUsIGZhbHNlKVxuXHRcdFx0fSApXG5cdFx0KTtcblx0fVxuXHRydWxlQ29sbGVjdEV4dGVuZHNSZWN1cnNpdmUobWl4aW5Hcm91cCwgbWl4aW5zR3JvdXBzID0gW10pe1xuXHRcdGlmKCEobWl4aW5Hcm91cCBpbnN0YW5jZW9mIEFycmF5KSl7XG5cdFx0XHRtaXhpbkdyb3VwID0gW21peGluR3JvdXBdO1xuXHRcdH1cblx0XHRtaXhpbnNHcm91cHMucHVzaChtaXhpbkdyb3VwKTtcblx0XHRtaXhpbkdyb3VwLmZvckVhY2gobWl4aW4gPT4ge1xuXHRcdFx0Y29uc3QgcnVsZSA9IHRoaXMucnVsZXNbbWl4aW5dO1xuXHRcdFx0aWYocnVsZSAmJiBydWxlLm1peGlucyl7XG5cdFx0XHRcdHRoaXMucnVsZUNvbGxlY3RFeHRlbmRzUmVjdXJzaXZlKHJ1bGUubWl4aW5zLCBtaXhpbnNHcm91cHMpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHJldHVybiBtaXhpbnNHcm91cHM7XG5cdH1cblxuXHRyZWdpc3RlckNsYXNzKG5hbWUsIHRhcmdldCl7XG5cdFx0aWYoIXRoaXMucnVsZXNbbmFtZV0pe1xuXHRcdFx0dGhpcy5ydWxlc1tuYW1lXSA9IHt9O1xuXHRcdH1cblx0XHR0aGlzLnJ1bGVzW25hbWVdLmNsYXNzRGVmID0gdGFyZ2V0O1xuXHR9XG5cdFxuXHRtZXJnZVJ1bGUoZXh0ZW5kUnVsZSwgcnVsZSwgbWVyZ2VFeHRlbmQgPSB0cnVlKXtcblx0XHRsZXQge1xuXHRcdFx0c2hhcmVkLFxuXHRcdFx0aW5oZXJpdEluc3RhbmNlT2YsXG5cdFx0XHRpbmhlcml0UHJvdG90eXBlLFxuXHRcdFx0aW5oZXJpdE1peGlucyxcblx0XHRcdGluc3RhbmNlT2YsXG5cdFx0XHRwYXJhbXMsXG5cdFx0XHRjYWxscyxcblx0XHRcdGxhenlDYWxscyxcblx0XHRcdHN1YnN0aXR1dGlvbnMsXG5cdFx0XHRzaGFyZWRJblRyZWUsXG5cdFx0XHRjbGFzc0RlZixcblx0XHRcdHNpbmdsZXRvbixcblx0XHRcdGFzeW5jUmVzb2x2ZSxcblx0XHRcdGFzeW5jQ2FsbHNTZXJpZSxcblx0XHRcdGFzeW5jQ2FsbHNQYXJhbXNTZXJpZSxcblx0XHRcdGRlY29yYXRvcixcblx0XHRcdGF1dG9sb2FkLFxuXHRcdFx0cGF0aCxcblx0XHR9ID0gcnVsZTtcblx0XHRpZihjbGFzc0RlZiAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUuY2xhc3NEZWYgPSBjbGFzc0RlZjtcblx0XHR9XG5cdFx0aWYoc2hhcmVkICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5zaGFyZWQgPSBzaGFyZWQ7XG5cdFx0fVxuXHRcdGlmKGluaGVyaXRJbnN0YW5jZU9mICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5pbmhlcml0SW5zdGFuY2VPZiA9IGluaGVyaXRJbnN0YW5jZU9mO1xuXHRcdH1cblx0XHRpZihpbmhlcml0UHJvdG90eXBlICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5pbmhlcml0UHJvdG90eXBlID0gaW5oZXJpdFByb3RvdHlwZTtcblx0XHR9XG5cdFx0aWYoZGVjb3JhdG9yICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5kZWNvcmF0b3IgPSBkZWNvcmF0b3I7XG5cdFx0fVxuXHRcdGlmKGF1dG9sb2FkICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5hdXRvbG9hZCA9IGF1dG9sb2FkO1xuXHRcdH1cblx0XHRpZihwYXRoICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5wYXRoID0gcGF0aDtcblx0XHR9XG5cdFx0aWYoaW5zdGFuY2VPZiAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUuaW5zdGFuY2VPZiA9IGluc3RhbmNlT2Y7XG5cdFx0fVxuXHRcdGlmKGFzeW5jUmVzb2x2ZSAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUuYXN5bmNSZXNvbHZlID0gYXN5bmNSZXNvbHZlO1xuXHRcdH1cblx0XHRpZihhc3luY0NhbGxzU2VyaWUgIT09IHVuZGVmaW5lZCl7XG5cdFx0XHRleHRlbmRSdWxlLmFzeW5jQ2FsbHNTZXJpZSA9IGFzeW5jQ2FsbHNTZXJpZTtcblx0XHR9XG5cdFx0aWYoYXN5bmNDYWxsc1BhcmFtc1NlcmllICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5hc3luY0NhbGxzUGFyYW1zU2VyaWUgPSBhc3luY0NhbGxzUGFyYW1zU2VyaWU7XG5cdFx0fVxuXG5cdFx0aWYoY2FsbHMgIT09IHVuZGVmaW5lZCl7XG5cdFx0XHRleHRlbmRSdWxlLmNhbGxzID0gKCBleHRlbmRSdWxlLmNhbGxzIHx8IFtdICkuY29uY2F0KGNhbGxzKTtcblx0XHR9XG5cdFx0aWYobGF6eUNhbGxzICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5sYXp5Q2FsbHMgPSAoIGV4dGVuZFJ1bGUubGF6eUNhbGxzIHx8IFtdICkuY29uY2F0KGxhenlDYWxscyk7XG5cdFx0fVxuXHRcdFxuXHRcdGlmKG1lcmdlRXh0ZW5kICYmIGluaGVyaXRNaXhpbnMgIT09IHVuZGVmaW5lZCl7XG5cdFx0XHRleHRlbmRSdWxlLmluaGVyaXRNaXhpbnMgPSBpbmhlcml0TWl4aW5zLnNsaWNlKDApO1xuXHRcdH1cblx0XHRcblx0XHRpZihwYXJhbXMgIT09IHVuZGVmaW5lZCl7XG5cdFx0XHRleHRlbmRSdWxlLnBhcmFtcyA9IHBhcmFtcztcblx0XHR9XG5cdFx0aWYoc3Vic3RpdHV0aW9ucyAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGlmKCFleHRlbmRSdWxlLnN1YnN0aXR1dGlvbnMpe1xuXHRcdFx0XHRleHRlbmRSdWxlLnN1YnN0aXR1dGlvbnMgPSB7fTtcblx0XHRcdH1cblx0XHRcdE9iamVjdC5hc3NpZ24oZXh0ZW5kUnVsZS5zdWJzdGl0dXRpb25zLCBzdWJzdGl0dXRpb25zKTtcblx0XHR9XG5cdFx0aWYoc2hhcmVkSW5UcmVlICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0aWYoIWV4dGVuZFJ1bGUuc2hhcmVkSW5UcmVlKXtcblx0XHRcdFx0ZXh0ZW5kUnVsZS5zaGFyZWRJblRyZWUgPSBbXTtcblx0XHRcdH1cblx0XHRcdGV4dGVuZFJ1bGUuc2hhcmVkSW5UcmVlID0gQXJyYXkuZnJvbSggbmV3IFNldChbLi4uZXh0ZW5kUnVsZS5zaGFyZWRJblRyZWUsIC4uLnNoYXJlZEluVHJlZV0pICk7XG5cdFx0fVxuXHRcdGV4dGVuZFJ1bGUuc2luZ2xldG9uID0gc2luZ2xldG9uO1xuXHRcdHJldHVybiBleHRlbmRSdWxlO1xuXHR9XG5cdFxuXHRtZXJnZVJ1bGVzKGV4dGVuZFJ1bGVzLCBydWxlcyl7XG5cdFx0T2JqZWN0LmtleXMocnVsZXMpLmZvckVhY2goKGspPT57XG5cdFx0XHRpZighZXh0ZW5kUnVsZXNba10pe1xuXHRcdFx0XHRleHRlbmRSdWxlc1trXSA9IHt9O1xuXHRcdFx0fVxuXHRcdFx0ZXh0ZW5kUnVsZXNba10gPSB0aGlzLm1lcmdlUnVsZShleHRlbmRSdWxlc1trXSwgcnVsZXNba10pO1xuXHRcdH0pO1xuXHRcdHJldHVybiBleHRlbmRSdWxlcztcblx0fVxuXHRcblx0cnVuQ2FsbHMoY2FsbHMsIGluc3RhbmNlLCBydWxlLCBzaGFyZWRJbnN0YW5jZXMpe1xuXHRcdGxldCBoYXNBc3luYztcblx0XHRcblx0XHRsZXQgY2FsbGVycyA9IGNhbGxzLm1hcCgoYyk9PiAoKT0+IHtcblx0XHRcdFxuXHRcdFx0aWYodHlwZW9mIGMgPT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRcdGMgPSBbY107XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBbIG1ldGhvZCwgcGFyYW1zID0gW10sIGFzeW5jUmVzb2x2ZSA9IHJ1bGUuYXN5bmNSZXNvbHZlICBdID0gYztcblx0XHRcdFxuXHRcdFx0Y29uc3QgbWFrZUNhbGwgPSAocmVzb2x2ZWRQYXJhbXMpPT57XHRcdFx0XHRcblx0XHRcdFx0cmVzb2x2ZWRQYXJhbXMgPSBzdHJ1Y3R1cmVkUmVzb2x2ZVBhcmFtc0ludGVyZmFjZShwYXJhbXMsIHJlc29sdmVkUGFyYW1zKTtcblx0XHRcdFx0bGV0IGNhbGxSZXR1cm47XG5cdFx0XHRcdGlmKHR5cGVvZiBtZXRob2QgPT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRcdFx0Y2FsbFJldHVybiA9IG1ldGhvZChpbnN0YW5jZSwgLi4ucmVzb2x2ZWRQYXJhbXMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2V7XG5cdFx0XHRcdFx0Y2FsbFJldHVybiA9IGluc3RhbmNlW21ldGhvZF0oLi4ucmVzb2x2ZWRQYXJhbXMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKCFhc3luY1Jlc29sdmUpe1xuXHRcdFx0XHRcdGNhbGxSZXR1cm4gPSBuZXcgU3luYyhjYWxsUmV0dXJuKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gY2FsbFJldHVybjtcblx0XHRcdH07XG5cdFx0XHRcdFx0XHRcblx0XHRcdGNvbnN0IHJlc29sdmVkUGFyYW1zID0gcGFyYW1zLm1hcChwYXJhbSA9PiB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmdldFBhcmFtKHBhcmFtLCBydWxlLCBzaGFyZWRJbnN0YW5jZXMsIHRoaXMuZGVmYXVsdFJ1bGVWYXIpO1xuXHRcdFx0fSk7XG5cdFx0XHRpZihzdHJ1Y3R1cmVkSGFzUHJvbWlzZShwYXJhbXMsIHJlc29sdmVkUGFyYW1zLCB0aGlzLlByb21pc2VJbnRlcmZhY2UpKXtcblx0XHRcdFx0aGFzQXN5bmMgPSB0cnVlO1xuXHRcdFx0XHRyZXR1cm4gKCkgPT4gc3RydWN0dXJlZFByb21pc2VBbGxSZWN1cnNpdmUocGFyYW1zLCByZXNvbHZlZFBhcmFtcywgdGhpcy5Qcm9taXNlSW50ZXJmYWNlLCB0aGlzLlByb21pc2VGYWN0b3J5KS50aGVuKHJlc29sdmVkUGFyYW1zPT57XG5cdFx0XHRcdFx0cmV0dXJuIG1ha2VDYWxsKHJlc29sdmVkUGFyYW1zKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNle1xuXHRcdFx0XHRyZXR1cm4gKCkgPT4gbWFrZUNhbGwocmVzb2x2ZWRQYXJhbXMpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fSk7XG5cdFx0XG5cdFx0Y29uc3QgYXN5bmNDYWxsc1BhcmFtc1NlcmllID0gcnVsZS5hc3luY0NhbGxzUGFyYW1zU2VyaWU7XG5cdFx0Y29uc3QgYXN5bmNDYWxsc1NlcmllID0gcnVsZS5hc3luY0NhbGxzU2VyaWUgfHwgYXN5bmNDYWxsc1BhcmFtc1NlcmllO1xuXHRcdFxuXHRcdGNvbnN0IG1ha2VDYWxscyA9IChjYWxsZXJzKT0+e1xuXHRcdFx0XG5cdFx0XHRsZXQgY2FsbGVyc1JldHVybjtcblx0XHRcdGlmKGhhc0FzeW5jKXtcblx0XHRcdFx0aWYoYXN5bmNDYWxsc1NlcmllKXtcblx0XHRcdFx0XHRjYWxsZXJzUmV0dXJuID0gbWFwU2VyaWUoY2FsbGVycywgKGNhbGxlcik9Pntcblx0XHRcdFx0XHRcdHJldHVybiBjYWxsZXIoKTtcblx0XHRcdFx0XHR9LCB0aGlzLlByb21pc2VJbnRlcmZhY2UsIHRoaXMuUHJvbWlzZUZhY3RvcnkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2V7XG5cdFx0XHRcdFx0Y2FsbGVyc1JldHVybiA9IHRoaXMuUHJvbWlzZUZhY3RvcnkuYWxsKCBjYWxsZXJzLm1hcCgoY2FsbGVyKT0+e1xuXHRcdFx0XHRcdFx0cmV0dXJuIGNhbGxlcigpO1xuXHRcdFx0XHRcdH0pICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGVsc2V7XG5cdFx0XHRcdGNhbGxlcnNSZXR1cm4gPSBjYWxsZXJzLm1hcCgoY2FsbGVyKT0+e1xuXHRcdFx0XHRcdGNvbnN0IGNhbGxlclJldHVybiA9IGNhbGxlcigpO1xuXHRcdFx0XHRcdGlmKGNhbGxlclJldHVybiBpbnN0YW5jZW9mIHRoaXMuUHJvbWlzZUludGVyZmFjZSl7XG5cdFx0XHRcdFx0XHRoYXNBc3luYyA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBjYWxsZXJSZXR1cm47XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRpZihoYXNBc3luYyl7XG5cdFx0XHRcdFx0Y2FsbGVyc1JldHVybiA9IHRoaXMuUHJvbWlzZUZhY3RvcnkuYWxsKGNhbGxlcnNSZXR1cm4pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY2FsbGVyc1JldHVybjtcblx0XHR9XG5cdFx0XG5cdFx0aWYoYXN5bmNDYWxsc1BhcmFtc1NlcmllKXtcblx0XHRcdGNhbGxlcnMgPSBtYXBTZXJpZShjYWxsZXJzLCAoY2FsbGVyKT0+e1xuXHRcdFx0XHRjYWxsZXIgPSBjYWxsZXIoKSgpO1xuXHRcdFx0XHRyZXR1cm4gY2FsbGVyO1xuXHRcdFx0fSwgdGhpcy5Qcm9taXNlSW50ZXJmYWNlLCB0aGlzLlByb21pc2VGYWN0b3J5KTtcblx0XHRcdHJldHVybiBjYWxsZXJzLnRoZW4oIGNhbGxlcnMgPT4gbWFrZUNhbGxzKCBjYWxsZXJzLm1hcChjYWxsZXIgPT4gKCkgPT4gY2FsbGVyICkgKSApIDtcblx0XHR9XG5cdFx0ZWxzZXtcblx0XHRcdGNhbGxlcnMgPSBjYWxsZXJzLm1hcCgoY2FsbGVyKT0+Y2FsbGVyKCkpO1xuXHRcdFx0cmV0dXJuIG1ha2VDYWxscyhjYWxsZXJzKTtcblx0XHR9XG5cdFx0XG5cdH1cblx0XHRcblx0ZGVmaW5lU3ltKHRhcmdldCwgc3ltbmFtZSwgdmFsdWUpe1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHN5bW5hbWUsIHtcblx0XHRcdHZhbHVlOiB2YWx1ZSxcblx0XHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdH0pO1xuXHR9XG5cdFxuXHRyZXNvbHZlSW5zdGFuY2VPZihzdHIsIHN0YWNrID0gW10sIHJlcXVpcmVkID0gdHJ1ZSl7XG5cdFx0aWYodHlwZW9mIHN0ciA9PSAnc3RyaW5nJyl7XG5cdFx0XHRpZihzdGFjay5pbmRleE9mKHN0cikhPT0tMSl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignQ3ljbGljIGludGVyZmFjZSBkZWZpbml0aW9uIGVycm9yIGluICcrSlNPTi5zdHJpbmdpZnkoc3RhY2suY29uY2F0KHN0ciksbnVsbCwyKSk7XG5cdFx0XHR9XG5cdFx0XHRzdGFjay5wdXNoKHN0cik7XG5cdFx0XHRjb25zdCBydWxlID0gdGhpcy5ydWxlc1tzdHJdO1xuXHRcdFx0bGV0IHJlc29sdmVkID0gZmFsc2U7XG5cdFx0XHRpZihydWxlKXtcblx0XHRcdFx0aWYocnVsZS5pbnN0YW5jZU9mKXtcblx0XHRcdFx0XHRyZXNvbHZlZCA9IHJ1bGUuaW5zdGFuY2VPZjtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmKHJ1bGUuY2xhc3NEZWYpe1xuXHRcdFx0XHRcdHJlc29sdmVkID0gcnVsZS5jbGFzc0RlZjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYoIXJlc29sdmVkKXtcblx0XHRcdFx0aWYoIXJlcXVpcmVkKXtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdJbnRlcmZhY2UgZGVmaW5pdGlvbiBcIicrc3RyKydcIiBub3QgZm91bmQsIGRpIGxvYWQgc3RhY2s6ICcrSlNPTi5zdHJpbmdpZnkoc3RhY2ssIG51bGwsIDIpKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLnJlc29sdmVJbnN0YW5jZU9mKHJlc29sdmVkLCBzdGFjaywgcmVxdWlyZWQpO1xuXHRcdH1cblx0XHRzdGFjay5wdXNoKHN0cik7XG5cdFx0cmV0dXJuIHN0cjtcblx0fVxuXHRcblx0ZmFjdG9yeShjYWxsYmFjayl7XG5cdFx0cmV0dXJuIG5ldyBGYWN0b3J5KGNhbGxiYWNrKTtcblx0fVxuXHRpbnRlcmZhY2UobmFtZSl7XG5cdFx0cmV0dXJuIG5ldyBJbnRlcmZhY2UobmFtZSk7XG5cdH1cblx0dmFsdWUodmFsdWUpe1xuXHRcdHJldHVybiBuZXcgVmFsdWUodmFsdWUpO1xuXHR9XG5cdHJlcXVpcmUoZGVwKXtcblx0XHRyZXR1cm4gbmV3IFJlcXVpcmUoZGVwKTtcblx0fVxuXHRcblx0Y2xhc3NEZWYoY2FsbGJhY2spe1xuXHRcdHJldHVybiBuZXcgQ2xhc3NEZWYoY2FsbGJhY2spO1xuXHR9XG59XG4iXX0=