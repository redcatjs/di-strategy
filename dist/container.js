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
      instanceOf: null,
      classDef: null,
      params: null,
      calls: [],
      lazyCalls: [],
      substitutions: [],
      sharedInTree: [],
      singleton: null,
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

      this.rules[interfaceName] = this.mergeRule(this.rules[interfaceName] || {}, rule);
      this.processRule(interfaceName);
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
      var rule = this.rules[key] || this.rulesDefault;

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

      if (instanceOf !== undefined && extendRule.instanceOf === undefined) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250YWluZXIuanMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwicnVsZXMiLCJydWxlc0RlZmF1bHQiLCJhdXRvbG9hZEZhaWxPbk1pc3NpbmdGaWxlIiwiYXV0b2xvYWREaXJzIiwiYXV0b2xvYWRFeHRlbnNpb25zIiwiYXV0b2xvYWRQYXRoUmVzb2x2ZXIiLCJwYXRoIiwiZGVmYXVsdFZhciIsImRlZmF1bHRSdWxlVmFyIiwiZGVmYXVsdERlY29yYXRvclZhciIsImRlZmF1bHRBcmdzVmFyIiwiZ2xvYmFsS2V5IiwicHJvbWlzZUZhY3RvcnkiLCJwcm9taXNlSW50ZXJmYWNlcyIsInN5bUNsYXNzTmFtZSIsInN5bUludGVyZmFjZXMiLCJwcm92aWRlclJlZ2lzdHJ5IiwiaW5zdGFuY2VSZWdpc3RyeSIsInJlcXVpcmVzIiwic2V0QXV0b2xvYWRQYXRoUmVzb2x2ZXIiLCJsb2FkRXh0ZW5zaW9uUmVnZXgiLCJSZWdFeHAiLCJqb2luIiwiYWxsb3dlZERlZmF1bHRWYXJzIiwidmFsaWRhdGVEZWZhdWx0VmFyIiwiaW5kZXhPZiIsInVuc2hpZnQiLCJQcm9taXNlSW50ZXJmYWNlIiwiUHJvbWlzZUZhY3RvcnkiLCJzZXRHbG9iYWxLZXkiLCJpbmhlcml0SW5zdGFuY2VPZiIsImluaGVyaXRQcm90b3R5cGUiLCJpbmhlcml0TWl4aW5zIiwic2hhcmVkIiwiaW5zdGFuY2VPZiIsImNsYXNzRGVmIiwicGFyYW1zIiwiY2FsbHMiLCJsYXp5Q2FsbHMiLCJzdWJzdGl0dXRpb25zIiwic2hhcmVkSW5UcmVlIiwic2luZ2xldG9uIiwiYXN5bmNSZXNvbHZlIiwiYXN5bmNDYWxsc1NlcmllIiwiZGVjb3JhdG9yIiwiYXV0b2xvYWQiLCJ1bmRlZmluZWQiLCJzZXRSdWxlc0RlZmF1bHQiLCJydW5BdXRvbG9hZERpcnMiLCJhZGRSdWxlcyIsImtleSIsInZhbHVlIiwiZm9yRWFjaCIsImNvbmZpZyIsImsiLCJFcnJvciIsImFsaWFzTWFwIiwicmVhbFBhdGgiLCJhbGlhcyIsInN1YnN0ciIsImxlbmd0aCIsImdsb2JhbCIsImRpcnMiLCJjb250ZXh0IiwiZGlyS2V5Iiwia2V5cyIsImZpbGVuYW1lIiwibGFzdEluZGV4T2YiLCJzcGxpdCIsInBvcCIsImFkZFJ1bGUiLCJpbnRlcmZhY2VOYW1lIiwicnVsZXNEZXRlY3RMYXp5TG9hZCIsInJ1bGUiLCJkZXRlY3RMYXp5TG9hZCIsIm1lcmdlUnVsZSIsInByb2Nlc3NSdWxlIiwiZ2V0Q2xhc3NEZWYiLCJyZWdpc3RlclJlcXVpcmUiLCJwcm9wZXJ0eSIsImxvYWREaXJzIiwicmVnaXN0ZXJSZXF1aXJlTWFwIiwicnVsZUxhenlMb2FkIiwic3RhY2siLCJjYWxsVmFsIiwibWV0aG9kIiwicnVsZUNoZWNrQ3ljbGljTG9hZCIsInB1c2giLCJjb25jYXQiLCJzb21lIiwicGFyYW0iLCJ2Iiwid3JhcFZhclR5cGUiLCJnZXROYW1lIiwicmVzb2x2ZUluc3RhbmNlT2YiLCJwYXJhbVJ1bGUiLCJnZXRSdWxlIiwiY3ljbGljIiwiY2FsbFYiLCJjbGFzc0RlZk5hbWUiLCJjbGFzc0RlZmluaXRpb24iLCJnZXQiLCJhcmdzIiwidmFsaWRhdGVBdXRvbG9hZEZpbGVOYW1lIiwicmVxIiwicmVxdWlyZURlcCIsIm5hbWUiLCJyZXF1aXJlUGF0aCIsImZvdW5kIiwicGF0aEZyYWdtZW50cyIsInNoaWZ0IiwiZXh0IiwiZGVwRXhpc3RzIiwicmVxdWlyZWQiLCJkZXBSZXF1aXJlIiwic3ViS2V5IiwiciIsImRlZmF1bHQiLCJnZXRSdWxlQmFzZSIsInJlZ2lzdGVyQ2xhc3MiLCJjbGFzc05hbWUiLCJ0eXBlcyIsInRhcmdldCIsImRlZmluZVN5bSIsIm1hcCIsInR5cGUiLCJCb29sZWFuIiwiaW50ZXJmYWNlRGVmIiwic2hhcmVkSW5zdGFuY2VzIiwicHJvdmlkZXIiLCJjb25zdHJ1Y3RvciIsIm1ha2VQcm92aWRlciIsInNoYXJlSW50ZXJmYWNlIiwicmVzb2x2ZWRQYXJhbXMiLCJpbmRleCIsImdldFBhcmFtIiwibWFrZUluc3RhbmNlIiwiaW5zdGFuY2UiLCJmaW5hbGl6ZUluc3RhbmNlQ3JlYXRpb24iLCJyZWdpc3Rlckluc3RhbmNlIiwiY2FsbHNSZXR1cm4iLCJydW5DYWxscyIsInRoZW4iLCJnZXRTdWJzdGl0dXRpb25QYXJhbSIsImNhbGxiYWNrIiwiZ2V0VmFsdWUiLCJyZXF1aXJlIiwic2xpY2UiLCJpbnN0YW5jZVJ1bGUiLCJvIiwicmVzb2x2ZUZ1bmN0aW9uIiwiZmFjdG9yeSIsImludGVyZmFjZSIsInJ1bGVCYXNlIiwiZnVsbFN0YWNrIiwicmV2ZXJzZSIsImMiLCJwYXJlbnRQcm90byIsImFkZCIsIm1peGluc1J1bGUiLCJtaXhpbnNHcm91cCIsIm1peGluc0dyb3VwcyIsInJ1bGVDb2xsZWN0RXh0ZW5kc1JlY3Vyc2l2ZSIsIm1peGluR3JvdXAiLCJtaXhpbiIsIkFycmF5IiwibWl4aW5zIiwiZXh0ZW5kUnVsZSIsIm1lcmdlRXh0ZW5kIiwiYXN5bmNDYWxsc1BhcmFtc1NlcmllIiwiZXh0ZW5kUnVsZXMiLCJoYXNBc3luYyIsImNhbGxlcnMiLCJtYWtlQ2FsbCIsImNhbGxSZXR1cm4iLCJtYWtlQ2FsbHMiLCJjYWxsZXJzUmV0dXJuIiwiY2FsbGVyIiwiYWxsIiwiY2FsbGVyUmV0dXJuIiwic3ltbmFtZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJzdHIiLCJyZXNvbHZlZCIsImRlcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0lBRXFCQSxTOzs7QUFFcEIsdUJBb0JPO0FBQUEsbUZBQUgsRUFBRztBQUFBLDBCQW5CTkMsS0FtQk07QUFBQSxRQW5CTkEsS0FtQk0sMkJBbkJFLEVBbUJGO0FBQUEsaUNBakJOQyxZQWlCTTtBQUFBLFFBakJOQSxZQWlCTSxrQ0FqQlMsRUFpQlQ7QUFB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YUEsUUFBYixDQUFQO0FBQ0EiLCJmaWxlIjoiY29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1hcFNlcmllIGZyb20gJy4vbWFwU2VyaWUnXG5cbmltcG9ydCBWYXIgZnJvbSAnLi92YXInXG5pbXBvcnQgRmFjdG9yeSBmcm9tICcuL2ZhY3RvcnknXG5pbXBvcnQgVmFsdWUgZnJvbSAnLi92YWx1ZSdcbmltcG9ydCBJbnRlcmZhY2UgZnJvbSAnLi9pbnRlcmZhY2UnXG5pbXBvcnQgUmVxdWlyZSBmcm9tICcuL3JlcXVpcmUnXG5cbmltcG9ydCBTaGFyZWRJbnN0YW5jZSBmcm9tICcuL3NoYXJlZEluc3RhbmNlJ1xuXG5pbXBvcnQgQ2xhc3NEZWYgZnJvbSAnLi9jbGFzc0RlZidcblxuaW1wb3J0IG1ha2VDb250YWluZXJBcGkgZnJvbSAnLi9tYWtlQ29udGFpbmVyQXBpJ1xuXG5pbXBvcnQgU3luYyBmcm9tICcuL3N5bmMnXG5pbXBvcnQgc3RydWN0dXJlZEhhc1Byb21pc2UgZnJvbSAnLi9zdHJ1Y3R1cmVkSGFzUHJvbWlzZSdcbmltcG9ydCBzdHJ1Y3R1cmVkUHJvbWlzZUFsbFJlY3Vyc2l2ZSBmcm9tICcuL3N0cnVjdHVyZWRQcm9taXNlQWxsUmVjdXJzaXZlJ1xuaW1wb3J0IHN0cnVjdHVyZWRSZXNvbHZlUGFyYW1zSW50ZXJmYWNlIGZyb20gJy4vc3RydWN0dXJlZFJlc29sdmVQYXJhbXNJbnRlcmZhY2UnXG5cbmltcG9ydCBwcm9taXNlSW50ZXJmYWNlIGZyb20gJy4vcHJvbWlzZUludGVyZmFjZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFpbmVye1xuXG5cdGNvbnN0cnVjdG9yKHtcblx0XHRydWxlcyA9IHt9LFxuXHRcdFxuXHRcdHJ1bGVzRGVmYXVsdCA9IHt9LFxuXHRcdFxuXHRcdGF1dG9sb2FkRmFpbE9uTWlzc2luZ0ZpbGUgPSAncGF0aCcsXG5cdFx0YXV0b2xvYWREaXJzID0ge30sXG5cdFx0YXV0b2xvYWRFeHRlbnNpb25zID0gWydqcyddLFxuXHRcdGF1dG9sb2FkUGF0aFJlc29sdmVyID0gKHBhdGgpPT5wYXRoLFxuXHRcdFxuXHRcdGRlZmF1bHRWYXIgPSAnaW50ZXJmYWNlJyxcblx0XHRkZWZhdWx0UnVsZVZhciA9IG51bGwsXG5cdFx0ZGVmYXVsdERlY29yYXRvclZhciA9IG51bGwsXG5cdFx0ZGVmYXVsdEFyZ3NWYXIgPSBudWxsLFxuXHRcdFxuXHRcdGdsb2JhbEtleSA9IGZhbHNlLFxuXHRcdFxuXHRcdHByb21pc2VGYWN0b3J5ID0gUHJvbWlzZSxcblx0XHRwcm9taXNlSW50ZXJmYWNlcyA9IFsgUHJvbWlzZSBdLFxuXHRcdFxuXHR9ID0ge30pe1xuXHRcdFxuXHRcdHRoaXMuc3ltQ2xhc3NOYW1lID0gU3ltYm9sKCdjbGFzc05hbWUnKTtcblx0XHR0aGlzLnN5bUludGVyZmFjZXMgPSBTeW1ib2woJ3R5cGVzJyk7XG5cdFx0dGhpcy5wcm92aWRlclJlZ2lzdHJ5ID0ge307XG5cdFx0dGhpcy5pbnN0YW5jZVJlZ2lzdHJ5ID0ge307XG5cdFx0XG5cdFx0dGhpcy5yZXF1aXJlcyA9IHt9O1xuXHRcdHRoaXMuYXV0b2xvYWRFeHRlbnNpb25zID0gYXV0b2xvYWRFeHRlbnNpb25zO1xuXHRcdHRoaXMuYXV0b2xvYWRGYWlsT25NaXNzaW5nRmlsZSA9IGF1dG9sb2FkRmFpbE9uTWlzc2luZ0ZpbGU7XG5cdFx0dGhpcy5hdXRvbG9hZERpcnMgPSBhdXRvbG9hZERpcnM7XG5cdFx0dGhpcy5zZXRBdXRvbG9hZFBhdGhSZXNvbHZlcihhdXRvbG9hZFBhdGhSZXNvbHZlcik7XG5cdFx0dGhpcy5sb2FkRXh0ZW5zaW9uUmVnZXggPSBuZXcgUmVnRXhwKCdcXC4oJyt0aGlzLmF1dG9sb2FkRXh0ZW5zaW9ucy5qb2luKCd8JykrJykkJyk7XG5cdFx0XG5cdFx0dGhpcy5kZWZhdWx0UnVsZVZhciA9IGRlZmF1bHRSdWxlVmFyIHx8IGRlZmF1bHRWYXI7XG5cdFx0dGhpcy5kZWZhdWx0RGVjb3JhdG9yVmFyID0gZGVmYXVsdERlY29yYXRvclZhciB8fCBkZWZhdWx0VmFyO1xuXHRcdHRoaXMuZGVmYXVsdEFyZ3NWYXIgPSBkZWZhdWx0QXJnc1ZhciB8fCBkZWZhdWx0VmFyO1xuXHRcdFxuXHRcdHRoaXMuYWxsb3dlZERlZmF1bHRWYXJzID0gWydpbnRlcmZhY2UnLCd2YWx1ZSddO1xuXHRcdHRoaXMudmFsaWRhdGVEZWZhdWx0VmFyKGRlZmF1bHRWYXIsICdkZWZhdWx0VmFyJyk7XG5cdFx0dGhpcy52YWxpZGF0ZURlZmF1bHRWYXIodGhpcy5kZWZhdWx0UnVsZVZhciwgJ2RlZmF1bHRSdWxlVmFyJyk7XG5cdFx0dGhpcy52YWxpZGF0ZURlZmF1bHRWYXIodGhpcy5kZWZhdWx0RGVjb3JhdG9yVmFyLCAnZGVmYXVsdERlY29yYXRvclZhcicpO1xuXHRcdHRoaXMudmFsaWRhdGVEZWZhdWx0VmFyKHRoaXMuZGVmYXVsdEFyZ3NWYXIsICdkZWZhdWx0QXJnc1ZhcicpO1xuXHRcdFxuXHRcdGlmKHByb21pc2VJbnRlcmZhY2VzLmluZGV4T2YocHJvbWlzZUZhY3RvcnkpID09PSAtMSl7XG5cdFx0XHRwcm9taXNlSW50ZXJmYWNlcy51bnNoaWZ0KHByb21pc2VGYWN0b3J5KTtcblx0XHR9XG5cdFx0dGhpcy5Qcm9taXNlSW50ZXJmYWNlID0gcHJvbWlzZUludGVyZmFjZShwcm9taXNlSW50ZXJmYWNlcyk7XG5cdFx0dGhpcy5Qcm9taXNlRmFjdG9yeSA9IHByb21pc2VGYWN0b3J5O1xuXHRcdFxuXHRcdGlmKGdsb2JhbEtleSl7XG5cdFx0XHR0aGlzLnNldEdsb2JhbEtleShnbG9iYWxLZXkpO1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLnJ1bGVzRGVmYXVsdCA9IHtcblx0XHRcdFxuXHRcdFx0aW5oZXJpdEluc3RhbmNlT2Y6IHRydWUsXG5cdFx0XHRpbmhlcml0UHJvdG90eXBlOiBmYWxzZSxcblx0XHRcdGluaGVyaXRNaXhpbnM6IFtdLFxuXHRcdFx0XG5cdFx0XHRzaGFyZWQ6IGZhbHNlLFxuXHRcdFx0aW5zdGFuY2VPZjogbnVsbCxcblx0XHRcdGNsYXNzRGVmOiBudWxsLFxuXHRcdFx0cGFyYW1zOiBudWxsLFxuXHRcdFx0XG5cdFx0XHRjYWxsczogW10sXG5cdFx0XHRsYXp5Q2FsbHM6IFtdLFxuXHRcdFx0XG5cdFx0XHRzdWJzdGl0dXRpb25zOiBbXSxcblx0XHRcdHNoYXJlZEluVHJlZTogW10sXG5cdFx0XHRcblx0XHRcdHNpbmdsZXRvbjogbnVsbCxcblx0XHRcdFxuXHRcdFx0YXN5bmNSZXNvbHZlOiBmYWxzZSxcblx0XHRcdGFzeW5jQ2FsbHNTZXJpZTogZmFsc2UsXG5cdFx0XHRcblx0XHRcdGRlY29yYXRvcjogZmFsc2UsXG5cdFx0XHRcblx0XHRcdGF1dG9sb2FkOiBmYWxzZSxcblx0XHRcdHBhdGg6IHVuZGVmaW5lZCxcblx0XHRcdFxuXHRcdH07XG5cdFx0dGhpcy5zZXRSdWxlc0RlZmF1bHQocnVsZXNEZWZhdWx0KTtcblx0XHR0aGlzLnJ1bGVzID0ge307XG5cdFx0XG5cdFx0dGhpcy5ydW5BdXRvbG9hZERpcnMoKTtcblx0XHR0aGlzLmFkZFJ1bGVzKHJ1bGVzKTtcblx0XHRcblx0fVxuXHRcblx0Y29uZmlnKGtleSwgdmFsdWUpe1xuXHRcdGlmKHR5cGVvZiBrZXkgPT09ICdvYmplY3QnKXtcblx0XHRcdE9iamVjdC5rZXlzKGtleSkuZm9yRWFjaChrPT50aGlzLmNvbmZpZyhrLCBrZXlba10pKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0c3dpdGNoKGtleSl7XG5cdFx0XHRjYXNlICdhdXRvbG9hZEZhaWxPbk1pc3NpbmdGaWxlICc6XG5cdFx0XHRjYXNlICdhdXRvbG9hZEV4dGVuc2lvbnMnOlxuXHRcdFx0Y2FzZSAnZGVmYXVsdFZhcic6XG5cdFx0XHRjYXNlICdkZWZhdWx0UnVsZVZhcic6XG5cdFx0XHRjYXNlICdkZWZhdWx0RGVjb3JhdG9yVmFyJzpcblx0XHRcdGNhc2UgJ2RlZmF1bHRBcmdzVmFyJzpcblx0XHRcdFx0dGhpc1trZXldID0gdmFsdWU7XG5cdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2dsb2JhbGtleSc6XG5cdFx0XHRcdHRoaXMuc2V0R2xvYmFsS2V5KHZhbHVlKTtcblx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnYXV0b2xvYWRQYXRoUmVzb2x2ZXInOlxuXHRcdFx0XHR0aGlzLnNldEF1dG9sb2FkUGF0aFJlc29sdmVyKHZhbHVlKTtcblx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAncnVsZXNEZWZhdWx0Jzpcblx0XHRcdFx0dGhpcy5zZXRSdWxlc0RlZmF1bHQodmFsdWUpO1xuXHRcdFx0YnJlYWs7XG5cdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBjb25maWcga2V5ICcra2V5KTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXHRcblx0c2V0UnVsZXNEZWZhdWx0KHJ1bGVzRGVmYXVsdCl7XG5cdFx0dGhpcy5ydWxlc0RlZmF1bHQgPSB7XG5cdFx0XHQuLi50aGlzLnJ1bGVzRGVmYXVsdCxcblx0XHRcdC4uLnJ1bGVzRGVmYXVsdCxcblx0XHR9O1xuXHR9XG5cdFxuXHRzZXRBdXRvbG9hZFBhdGhSZXNvbHZlcihhdXRvbG9hZFBhdGhSZXNvbHZlcil7XG5cdFx0XG5cdFx0aWYodHlwZW9mIGF1dG9sb2FkUGF0aFJlc29sdmVyID09ICdvYmplY3QnKXtcblx0XHRcdFxuXHRcdFx0Y29uc3QgYWxpYXNNYXAgPSBhdXRvbG9hZFBhdGhSZXNvbHZlcjtcblx0XHRcdGF1dG9sb2FkUGF0aFJlc29sdmVyID0gKHBhdGgpPT57XG5cdFx0XHRcdE9iamVjdC5rZXlzKGFsaWFzTWFwKS5mb3JFYWNoKGFsaWFzPT57XG5cdFx0XHRcdFx0Y29uc3QgcmVhbFBhdGggPSBhbGlhc01hcFthbGlhc107XG5cdFx0XHRcdFx0aWYocGF0aCA9PSBhbGlhcyl7XG5cdFx0XHRcdFx0XHRwYXRoID0gcmVhbFBhdGg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2UgaWYocGF0aC5zdWJzdHIoMCxhbGlhcy5sZW5ndGgrMSk9PWFsaWFzKycvJyl7XG5cdFx0XHRcdFx0XHRwYXRoID0gcmVhbFBhdGgrcGF0aC5zdWJzdHIoYWxpYXMubGVuZ3RoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm4gcGF0aDtcblx0XHRcdH07XG5cdFx0fVxuXHRcdFxuXHRcdHRoaXMuYXV0b2xvYWRQYXRoUmVzb2x2ZXIgPSBhdXRvbG9hZFBhdGhSZXNvbHZlcjtcblx0fVxuXHRcblx0c2V0R2xvYmFsS2V5KGdsb2JhbEtleSl7XG5cdFx0aWYoZ2xvYmFsS2V5PT09dHJ1ZSl7XG5cdFx0XHRnbG9iYWxLZXkgPSAnZGknO1xuXHRcdH1cblx0XHRnbG9iYWxbZ2xvYmFsS2V5XSA9IG1ha2VDb250YWluZXJBcGkodGhpcyk7XG5cdH1cblx0XG5cdGxvYWREaXJzKGRpcnMpe1xuXHRcdE9iamVjdC5rZXlzKGRpcnMpLmZvckVhY2goZGlyS2V5PT57XG5cdFx0XHRjb25zdCBjb250ZXh0ID0gZGlyc1tkaXJLZXldO1xuXHRcdFx0Y29udGV4dC5rZXlzKCkuZm9yRWFjaCgoZmlsZW5hbWUpPT57XG5cdFx0XHRcdFxuXHRcdFx0XHRsZXQga2V5ID0gZmlsZW5hbWU7XG5cdFx0XHRcdGlmKGtleS5zdWJzdHIoMCwyKT09Jy4vJyl7XG5cdFx0XHRcdFx0a2V5ID0ga2V5LnN1YnN0cigyKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0a2V5ID0gZGlyS2V5KycvJytrZXkuc3Vic3RyKDAsIGtleS5sYXN0SW5kZXhPZignLicpIHx8IGtleS5sZW5ndGgpO1xuXHRcdFx0XHRpZihrZXkuc3BsaXQoJy8nKS5wb3AoKT09J2luZGV4Jyl7XG5cdFx0XHRcdFx0a2V5ID0ga2V5LnN1YnN0cigwLCBrZXkubGFzdEluZGV4T2YoJy8nKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5yZXF1aXJlc1trZXldID0gY29udGV4dChmaWxlbmFtZSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXHRcblx0YWRkUnVsZXMocnVsZXMpe1xuXHRcdGlmKHR5cGVvZiBydWxlcyA9PSAnZnVuY3Rpb24nKXtcblx0XHRcdHJ1bGVzID0gcnVsZXModGhpcyk7XG5cdFx0fVxuXHRcdE9iamVjdC5rZXlzKHJ1bGVzKS5mb3JFYWNoKGludGVyZmFjZU5hbWUgPT4gdGhpcy5hZGRSdWxlKGludGVyZmFjZU5hbWUsIHJ1bGVzW2ludGVyZmFjZU5hbWVdLCBmYWxzZSkpO1xuXHRcdHRoaXMucnVsZXNEZXRlY3RMYXp5TG9hZCgpO1xuXHR9XG5cdGFkZFJ1bGUoaW50ZXJmYWNlTmFtZSwgcnVsZSwgZGV0ZWN0TGF6eUxvYWQgPSB0cnVlKXtcblx0XHRpZih0eXBlb2YgcnVsZSA9PSAnZnVuY3Rpb24nKXtcblx0XHRcdHJ1bGUgPSBydWxlKHRoaXMpO1xuXHRcdH1cblx0XHR0aGlzLnJ1bGVzW2ludGVyZmFjZU5hbWVdID0gdGhpcy5tZXJnZVJ1bGUodGhpcy5ydWxlc1tpbnRlcmZhY2VOYW1lXSB8fCB7fSwgcnVsZSk7XG5cdFx0dGhpcy5wcm9jZXNzUnVsZShpbnRlcmZhY2VOYW1lKTtcblx0XHRcblx0XHRsZXQgeyBjbGFzc0RlZiB9ID0gcnVsZTtcblx0XHRpZihjbGFzc0RlZil7XG5cdFx0XHRpZihjbGFzc0RlZiBpbnN0YW5jZW9mIENsYXNzRGVmKXtcblx0XHRcdFx0Y2xhc3NEZWYgPSBjbGFzc0RlZi5nZXRDbGFzc0RlZigpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5yZWdpc3RlclJlcXVpcmUoaW50ZXJmYWNlTmFtZSwgY2xhc3NEZWYpO1xuXHRcdH1cblx0XHRcblx0XHRpZihkZXRlY3RMYXp5TG9hZCl7XG5cdFx0XHR0aGlzLnJ1bGVzRGV0ZWN0TGF6eUxvYWQoKTtcblx0XHR9XG5cdFx0XG5cdH1cblx0XG5cdHZhbGlkYXRlRGVmYXVsdFZhcih2YWx1ZSwgcHJvcGVydHkpe1xuXHRcdGlmKHRoaXMuYWxsb3dlZERlZmF1bHRWYXJzLmluZGV4T2YodmFsdWUpPT09LTEpe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIHR5cGUgXCInK3ZhbHVlKydcIiBzcGVjaWZpZWQgZm9yICcrcHJvcGVydHkrJywgcG9zc2libGVzIHZhbHVlczogJyt0aGlzLmFsbG93ZWREZWZhdWx0VmFycy5qb2luKCcgfCAnKSk7XG5cdFx0fVxuXHR9XG5cdFxuXHRydW5BdXRvbG9hZERpcnMoKXtcblx0XHR0aGlzLmxvYWREaXJzKHRoaXMuYXV0b2xvYWREaXJzKTtcblx0XHR0aGlzLnJlZ2lzdGVyUmVxdWlyZU1hcCh0aGlzLnJlcXVpcmVzKTtcblx0fVxuXHRydWxlc0RldGVjdExhenlMb2FkKCl7XG5cdFx0T2JqZWN0LmtleXModGhpcy5ydWxlcykuZm9yRWFjaChrZXk9Pntcblx0XHRcdHRoaXMucnVsZUxhenlMb2FkKGtleSk7XG5cdFx0fSk7XG5cdH1cblx0XG5cdHJ1bGVMYXp5TG9hZChrZXksIHN0YWNrPVtdKXtcblx0XHRjb25zdCBjYWxscyA9IFtdO1xuXHRcdGNvbnN0IGxhenlDYWxscyA9IFtdO1xuXHRcdFxuXHRcdGNvbnN0IHJ1bGUgPSB0aGlzLnJ1bGVzW2tleV07XG5cdFx0XG5cdFx0aWYoIXJ1bGUuY2FsbHMpe1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRcblx0XHRydWxlLmNhbGxzLmZvckVhY2goY2FsbFZhbCA9PiB7XG5cdFx0XHRpZih0eXBlb2YgY2FsbFZhbCA9PSAnZnVuY3Rpb24nKXtcblx0XHRcdFx0Y2FsbFZhbCA9IFtjYWxsVmFsXTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IFttZXRob2QsIHBhcmFtcyA9IFtdXSA9IGNhbGxWYWw7XG5cdFx0XHRpZiggdGhpcy5ydWxlQ2hlY2tDeWNsaWNMb2FkKHBhcmFtcywgWyBrZXkgXSkgKXtcblx0XHRcdFx0bGF6eUNhbGxzLnB1c2goY2FsbFZhbCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNle1xuXHRcdFx0XHRjYWxscy5wdXNoKGNhbGxWYWwpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdFxuXHRcdHJ1bGUuY2FsbHMgPSBjYWxscztcblx0XHRydWxlLmxhenlDYWxscyA9IChydWxlLmxhenlDYWxscyB8fCBbXSkuY29uY2F0KGxhenlDYWxscyk7XHRcdFxuXHR9XG5cdHJ1bGVDaGVja0N5Y2xpY0xvYWQocGFyYW1zLCBzdGFjaz1bXSl7XHRcdFxuXHRcdHJldHVybiBPYmplY3Qua2V5cyhwYXJhbXMpLnNvbWUoaz0+e1xuXHRcdFx0Y29uc3QgcGFyYW0gPSBwYXJhbXNba107XG5cdFx0XHRjb25zdCB2ID0gdGhpcy53cmFwVmFyVHlwZShwYXJhbSwgdGhpcy5kZWZhdWx0UnVsZVZhcik7XG5cdFx0XHRpZih2IGluc3RhbmNlb2YgSW50ZXJmYWNlKXtcblx0XHRcdFx0Y29uc3QgaW50ZXJmYWNlTmFtZSA9IHYuZ2V0TmFtZSgpO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYoIXRoaXMucmVzb2x2ZUluc3RhbmNlT2YoaW50ZXJmYWNlTmFtZSwgW10sIGZhbHNlKSl7XG5cdFx0XHRcdFx0Ly9ub3QgZm91bmQsIHVuYWJsZSB0byBjaGVjayBub3dcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdGNvbnN0IHBhcmFtUnVsZSA9IHRoaXMuZ2V0UnVsZShpbnRlcmZhY2VOYW1lKTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmKHN0YWNrLmluZGV4T2YoaW50ZXJmYWNlTmFtZSkhPT0tMSl7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdHN0YWNrLnB1c2goaW50ZXJmYWNlTmFtZSk7XG5cdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdGxldCBjeWNsaWM7XG5cblx0XHRcdFx0aWYocGFyYW1SdWxlLnBhcmFtcyl7XG5cdFx0XHRcdFx0Y3ljbGljID0gdGhpcy5ydWxlQ2hlY2tDeWNsaWNMb2FkKHBhcmFtUnVsZS5wYXJhbXMsIHN0YWNrKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0aWYoIWN5Y2xpYyl7XG5cdFx0XHRcdFx0Y3ljbGljID0gcGFyYW1SdWxlLmNhbGxzLnNvbWUoY2FsbFY9Pntcblx0XHRcdFx0XHRcdGNvbnN0IFttZXRob2QsIHBhcmFtcyA9IFtdIF0gPSBjYWxsVjtcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLnJ1bGVDaGVja0N5Y2xpY0xvYWQocGFyYW1zLCBzdGFjayk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdHJldHVybiBjeWNsaWM7XG5cdFx0XHRcdFxuXHRcdFx0fVxuXHRcdFx0aWYodHlwZW9mIHYgPT0gJ29iamVjdCcgJiYgdiAhPT0gbnVsbCAmJiAhKHYgaW5zdGFuY2VvZiBWYXIpKXtcblx0XHRcdFx0cmV0dXJuIHRoaXMucnVsZUNoZWNrQ3ljbGljTG9hZCh2LCBzdGFjayk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblx0XG5cdHByb2Nlc3NSdWxlKGtleSwgc3RhY2sgPSBbXSl7XG5cdFx0Y29uc3QgcnVsZSA9IHRoaXMucnVsZXNba2V5XSB8fCB0aGlzLnJ1bGVzRGVmYXVsdDtcblx0XHRpZihydWxlLmluc3RhbmNlT2Ype1xuXHRcdFx0aWYoc3RhY2suaW5kZXhPZihrZXkpIT09LTEpe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0N5Y2xpYyBpbnRlcmZhY2UgZGVmaW5pdGlvbiBlcnJvciBpbiAnK0pTT04uc3RyaW5naWZ5KHN0YWNrLmNvbmNhdChrZXkpLG51bGwsMikpO1xuXHRcdFx0fVxuXHRcdFx0c3RhY2sucHVzaChrZXkpO1xuXHRcdFx0dGhpcy5wcm9jZXNzUnVsZShydWxlLmluc3RhbmNlT2YsIHN0YWNrKTtcblx0XHR9XG5cdFx0aWYocnVsZS5zaW5nbGV0b24pe1xuXHRcdFx0cnVsZS5jbGFzc0RlZiA9IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHJldHVybiBydWxlLnNpbmdsZXRvbjtcblx0XHRcdH07XG5cdFx0fVxuXHRcdGlmKHR5cGVvZiBydWxlLmNsYXNzRGVmID09ICdzdHJpbmcnKXtcblx0XHRcdGNvbnN0IGNsYXNzRGVmTmFtZSA9IHJ1bGUuY2xhc3NEZWY7XG5cdFx0XHRydWxlLmNsYXNzRGVmID0gKC4uLmFyZ3MpPT57XG5cdFx0XHRcdGNvbnN0IGNsYXNzRGVmaW5pdGlvbiA9IHRoaXMuZ2V0KGNsYXNzRGVmTmFtZSk7XG5cdFx0XHRcdHJldHVybiBuZXcgY2xhc3NEZWZpbml0aW9uKC4uLmFyZ3MpO1xuXHRcdFx0fTtcblx0XHR9XG5cdFx0aWYodGhpcy52YWxpZGF0ZUF1dG9sb2FkRmlsZU5hbWUoa2V5KSl7XG5cdFx0XHRpZihydWxlLmF1dG9sb2FkKXtcblx0XHRcdFx0Y29uc3QgcGF0aCA9IHJ1bGUucGF0aCB8fCBrZXk7XG5cdFx0XHRcdGNvbnN0IHJlcSA9IHRoaXMucmVxdWlyZURlcChrZXksIHBhdGgpO1xuXHRcdFx0XHRpZihyZXEpe1xuXHRcdFx0XHRcdHRoaXMucmVnaXN0ZXJSZXF1aXJlKGtleSwgcmVxKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRcblx0dmFsaWRhdGVBdXRvbG9hZEZpbGVOYW1lKG5hbWUpe1xuXHRcdGlmKG5hbWUuc3Vic3RyKDAsMSk9PT0nIycpe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRcblx0cmVxdWlyZURlcChrZXksIHJlcXVpcmVQYXRoKXtcblx0XHRpZih0aGlzLnJlcXVpcmVzW2tleV0pe1xuXHRcdFx0cmV0dXJuIHRoaXMucmVxdWlyZXNba2V5XTtcblx0XHR9XG5cdFx0XG5cdFx0cmVxdWlyZVBhdGggPSB0aGlzLmF1dG9sb2FkUGF0aFJlc29sdmVyKHJlcXVpcmVQYXRoKTtcblx0XHRcblx0XHRjb25zdCBmb3VuZCA9IHRoaXMuYXV0b2xvYWRFeHRlbnNpb25zLmNvbmNhdCgnJykuc29tZSggZXh0ID0+IHtcblx0XHRcdFxuXHRcdFx0Y29uc3QgcGF0aEZyYWdtZW50cyA9IHJlcXVpcmVQYXRoLnNwbGl0KCc6Jyk7XG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0bGV0IHBhdGggPSBwYXRoRnJhZ21lbnRzLnNoaWZ0KCk7XG5cdFx0XHRpZihleHQpe1xuXHRcdFx0XHRwYXRoICs9ICcuJytleHQ7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0aWYodGhpcy5kZXBFeGlzdHMocGF0aCkpe1xuXHRcdFx0XHRsZXQgcmVxdWlyZWQgPSB0aGlzLmRlcFJlcXVpcmUocGF0aCk7XG5cdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdGlmKHBhdGhGcmFnbWVudHMubGVuZ3RoKXtcblx0XHRcdFx0XHRwYXRoRnJhZ21lbnRzLmZvckVhY2goIHN1YktleSA9PiB7XG5cdFx0XHRcdFx0XHRpZih0eXBlb2YgcmVxdWlyZWQgIT09ICd1bmRlZmluZWQnICYmIHJlcXVpcmVkICE9PSBudWxsKXtcblx0XHRcdFx0XHRcdFx0cmVxdWlyZWQgPSByZXF1aXJlZFtzdWJLZXldO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRcblx0XHRcdFx0dGhpcy5yZXF1aXJlc1trZXldID0gcmVxdWlyZWQ7XG5cdFx0XHRcdFxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdH0pO1xuXHRcdGlmKCAhIGZvdW5kICYmICgodGhpcy5hdXRvbG9hZEZhaWxPbk1pc3NpbmdGaWxlPT09J3BhdGgnICYmIHJlcXVpcmVQYXRoKSB8fCB0aGlzLmF1dG9sb2FkRmFpbE9uTWlzc2luZ0ZpbGU9PT10cnVlKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGV4cGVjdGVkIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGZpbGUgXCInK3JlcXVpcmVQYXRoKydcIicpO1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gdGhpcy5yZXF1aXJlc1trZXldO1xuXHR9XG5cdFxuXHRcblx0cmVnaXN0ZXJSZXF1aXJlTWFwKHJlcXVpcmVzKXtcblx0XHRPYmplY3Qua2V5cyhyZXF1aXJlcykuZm9yRWFjaCgobmFtZSk9Pntcblx0XHRcdHRoaXMucmVnaXN0ZXJSZXF1aXJlKG5hbWUscmVxdWlyZXNbbmFtZV0pO1xuXHRcdH0pO1xuXHR9XG5cdHJlZ2lzdGVyUmVxdWlyZShuYW1lLHIpe1xuXHRcdGlmKHR5cGVvZiByID09ICdvYmplY3QnICYmIHR5cGVvZiByLmRlZmF1bHQgPT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRyID0gci5kZWZhdWx0O1xuXHRcdH1cblx0XHRpZih0eXBlb2YgciAhPT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHJ1bGUgPSB0aGlzLmdldFJ1bGVCYXNlKG5hbWUpO1xuXHRcdGlmKHJ1bGUuZGVjb3JhdG9yICYmIHJbdGhpcy5zeW1DbGFzc05hbWVdKXtcblx0XHRcdHIgPSBjbGFzcyBleHRlbmRzIHJ7fTtcblx0XHR9XG5cdFx0XG5cdFx0aWYocnVsZS5kZWNvcmF0b3Ipe1xuXHRcdFx0dGhpcy5kZWNvcmF0b3IobmFtZSkocik7XG5cdFx0fVxuXHRcdGVsc2V7XG5cdFx0XHR0aGlzLnJlZ2lzdGVyQ2xhc3MobmFtZSwgcik7XG5cdFx0fVxuXHR9XG5cdFxuXHRcblx0ZGVjb3JhdG9yKGNsYXNzTmFtZSwgdHlwZXMgPSBbXSl7XG5cdFx0cmV0dXJuICh0YXJnZXQpPT57XG5cdFx0XHRcblx0XHRcdHRoaXMuZGVmaW5lU3ltKHRhcmdldCwgdGhpcy5zeW1DbGFzc05hbWUsIGNsYXNzTmFtZSk7XG5cdFx0XHRcblx0XHRcdHRoaXMucmVnaXN0ZXJDbGFzcyhjbGFzc05hbWUsIHRhcmdldCk7XG5cdFx0XHRcblx0XHRcdGlmKHR5cGVvZiB0eXBlcyA9PSAnZnVuY3Rpb24nKXtcblx0XHRcdFx0dHlwZXMgPSB0eXBlcygpO1xuXHRcdFx0fVxuXHRcdFx0dHlwZXMgPSB0eXBlcy5tYXAodHlwZSA9PiB0aGlzLndyYXBWYXJUeXBlKHR5cGUsIHRoaXMuZGVmYXVsdERlY29yYXRvclZhcikpO1xuXHRcdFx0XG5cdFx0XHRpZiAodGFyZ2V0W3RoaXMuc3ltSW50ZXJmYWNlc10pIHtcblx0XHRcdFx0dHlwZXMgPSB0eXBlcy5jb25jYXQodGFyZ2V0W3RoaXMuc3ltSW50ZXJmYWNlc10pO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5kZWZpbmVTeW0odGFyZ2V0LCB0aGlzLnN5bUludGVyZmFjZXMsIHR5cGVzKTtcblx0XHRcdFxuXHRcdFx0cmV0dXJuIHRhcmdldDtcblx0XHR9O1xuXHR9XG5cdFxuXHRleGlzdHMobmFtZSl7XG5cdFx0cmV0dXJuIEJvb2xlYW4odGhpcy5ydWxlc1tuYW1lXSk7XG5cdH1cblx0XG5cdGdldChpbnRlcmZhY2VEZWYsIGFyZ3MsIHNoYXJlZEluc3RhbmNlcyA9IHt9LCBzdGFjayA9IFtdKXtcblx0XHRyZXR1cm4gdGhpcy5wcm92aWRlcihpbnRlcmZhY2VEZWYpKGFyZ3MsIHNoYXJlZEluc3RhbmNlcywgc3RhY2spO1xuXHR9XG5cdHByb3ZpZGVyKGludGVyZmFjZU5hbWUpe1xuXHRcdFxuXHRcdGlmKHR5cGVvZiBpbnRlcmZhY2VOYW1lID09ICdmdW5jdGlvbicpe1xuXHRcdFx0aW50ZXJmYWNlTmFtZSA9IGludGVyZmFjZU5hbWVbdGhpcy5zeW1DbGFzc05hbWVdO1xuXHRcdFx0aWYoIWludGVyZmFjZU5hbWUpe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1VucmVnaXN0cmVkIGNsYXNzICcraW50ZXJmYWNlTmFtZS5jb25zdHJ1Y3Rvci5uYW1lKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0aWYoaW50ZXJmYWNlTmFtZSBpbnN0YW5jZW9mIEludGVyZmFjZSl7XG5cdFx0XHRpbnRlcmZhY2VOYW1lID0gaW50ZXJmYWNlTmFtZS5nZXROYW1lKCk7XG5cdFx0fVxuXHRcdFxuXHRcdGlmKCF0aGlzLnByb3ZpZGVyUmVnaXN0cnlbaW50ZXJmYWNlTmFtZV0pe1xuXHRcdFx0dGhpcy5wcm92aWRlclJlZ2lzdHJ5W2ludGVyZmFjZU5hbWVdID0gdGhpcy5tYWtlUHJvdmlkZXIoaW50ZXJmYWNlTmFtZSk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnByb3ZpZGVyUmVnaXN0cnlbaW50ZXJmYWNlTmFtZV07XG5cdH1cblx0XG5cdG1ha2VQcm92aWRlcihpbnRlcmZhY2VOYW1lKXtcblx0XHRjb25zdCBydWxlID0gdGhpcy5nZXRSdWxlKGludGVyZmFjZU5hbWUpO1xuXHRcdGNvbnN0IGNsYXNzRGVmID0gdGhpcy5yZXNvbHZlSW5zdGFuY2VPZihpbnRlcmZhY2VOYW1lKTtcblx0XHRyZXR1cm4gKGFyZ3MsIHNoYXJlZEluc3RhbmNlcywgc3RhY2spPT57XG5cdFx0XHRcblx0XHRcdC8vY2hlY2sgZm9yIHNoYXJlZCBhZnRlciBwYXJhbXMgbG9hZFxuXHRcdFx0aWYodGhpcy5pbnN0YW5jZVJlZ2lzdHJ5W2ludGVyZmFjZU5hbWVdKXtcblx0XHRcdFx0cmV0dXJuIHRoaXMuaW5zdGFuY2VSZWdpc3RyeVtpbnRlcmZhY2VOYW1lXTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0c2hhcmVkSW5zdGFuY2VzID0gT2JqZWN0LmFzc2lnbih7fSwgc2hhcmVkSW5zdGFuY2VzKTtcblx0XHRcdHJ1bGUuc2hhcmVkSW5UcmVlLmZvckVhY2goc2hhcmVJbnRlcmZhY2UgPT4ge1xuXHRcdFx0XHRpZighc2hhcmVkSW5zdGFuY2VzW3NoYXJlSW50ZXJmYWNlXSl7XG5cdFx0XHRcdFx0c2hhcmVkSW5zdGFuY2VzW3NoYXJlSW50ZXJmYWNlXSA9IG5ldyBTaGFyZWRJbnN0YW5jZShzaGFyZUludGVyZmFjZSwgdGhpcyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0XG5cdFx0XHRsZXQgcGFyYW1zO1xuXHRcdFx0bGV0IGRlZmF1bHRWYXI7XG5cdFx0XHRpZihhcmdzKXtcblx0XHRcdFx0cGFyYW1zID0gYXJncztcblx0XHRcdFx0ZGVmYXVsdFZhciA9IHRoaXMuZGVmYXVsdEFyZ3NWYXI7XG5cdFx0XHR9XG5cdFx0XHRlbHNle1xuXHRcdFx0XHRwYXJhbXMgPSBydWxlLnBhcmFtcyB8fCBjbGFzc0RlZlt0aGlzLnN5bUludGVyZmFjZXNdIHx8IFtdO1xuXHRcdFx0XHRkZWZhdWx0VmFyID0gdGhpcy5kZWZhdWx0UnVsZVZhcjtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Y29uc3QgcmVzb2x2ZWRQYXJhbXMgPSBwYXJhbXMubWFwKChpbnRlcmZhY2VEZWYsIGluZGV4KT0+e1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5nZXRQYXJhbShpbnRlcmZhY2VEZWYsIHJ1bGUsIHNoYXJlZEluc3RhbmNlcywgZGVmYXVsdFZhciwgaW5kZXgsIHN0YWNrKTtcblx0XHRcdH0pO1xuXHRcdFx0XG5cdFx0XHQvL3JlY2hlY2sgZm9yIHNoYXJlZCBhZnRlciBwYXJhbXMgbG9hZFxuXHRcdFx0aWYodGhpcy5pbnN0YW5jZVJlZ2lzdHJ5W2ludGVyZmFjZU5hbWVdKXtcblx0XHRcdFx0cmV0dXJuIHRoaXMuaW5zdGFuY2VSZWdpc3RyeVtpbnRlcmZhY2VOYW1lXTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Y29uc3QgbWFrZUluc3RhbmNlID0gKHJlc29sdmVkUGFyYW1zKT0+e1xuXHRcdFx0XHRcblx0XHRcdFx0cmVzb2x2ZWRQYXJhbXMgPSBzdHJ1Y3R1cmVkUmVzb2x2ZVBhcmFtc0ludGVyZmFjZShwYXJhbXMsIHJlc29sdmVkUGFyYW1zKTtcblx0XHRcdFx0XG5cdFx0XHRcdGNvbnN0IGluc3RhbmNlID0gbmV3IGNsYXNzRGVmKC4uLnJlc29sdmVkUGFyYW1zKTtcblx0XHRcdFx0XG5cdFx0XHRcdGNvbnN0IGZpbmFsaXplSW5zdGFuY2VDcmVhdGlvbiA9ICgpPT57XG5cdFx0XHRcdFx0aWYocnVsZS5zaGFyZWQpe1xuXHRcdFx0XHRcdFx0dGhpcy5yZWdpc3Rlckluc3RhbmNlKGludGVyZmFjZU5hbWUsIGluc3RhbmNlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0Y29uc3QgY2FsbHNSZXR1cm4gPSB0aGlzLnJ1bkNhbGxzKHJ1bGUubGF6eUNhbGxzLCBpbnN0YW5jZSwgcnVsZSwgc2hhcmVkSW5zdGFuY2VzKTtcblx0XHRcdFx0XHRpZihjYWxsc1JldHVybiBpbnN0YW5jZW9mIHRoaXMuUHJvbWlzZUludGVyZmFjZSl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gY2FsbHNSZXR1cm4udGhlbigoKT0+aW5zdGFuY2UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHRyZXR1cm4gaW5zdGFuY2U7XG5cdFx0XHRcdH07XG5cdFx0XHRcdFxuXHRcdFx0XHRjb25zdCBjYWxsc1JldHVybiA9IHRoaXMucnVuQ2FsbHMocnVsZS5jYWxscywgaW5zdGFuY2UsIHJ1bGUsIHNoYXJlZEluc3RhbmNlcyk7XG5cdFx0XHRcdGlmKGNhbGxzUmV0dXJuIGluc3RhbmNlb2YgdGhpcy5Qcm9taXNlSW50ZXJmYWNlKXtcblx0XHRcdFx0XHRyZXR1cm4gY2FsbHNSZXR1cm4udGhlbigoKT0+ZmluYWxpemVJbnN0YW5jZUNyZWF0aW9uKCkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRyZXR1cm4gZmluYWxpemVJbnN0YW5jZUNyZWF0aW9uKCk7XG5cdFx0XHR9O1xuXHRcdFx0aWYoc3RydWN0dXJlZEhhc1Byb21pc2UocGFyYW1zLCByZXNvbHZlZFBhcmFtcywgdGhpcy5Qcm9taXNlSW50ZXJmYWNlKSl7XG5cdFx0XHRcdHJldHVybiBzdHJ1Y3R1cmVkUHJvbWlzZUFsbFJlY3Vyc2l2ZShwYXJhbXMsIHJlc29sdmVkUGFyYW1zLCB0aGlzLlByb21pc2VJbnRlcmZhY2UsIHRoaXMuUHJvbWlzZUZhY3RvcnkgKS50aGVuKHJlc29sdmVkUGFyYW1zPT57XG5cdFx0XHRcdFx0cmV0dXJuIG1ha2VJbnN0YW5jZShyZXNvbHZlZFBhcmFtcyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRyZXR1cm4gbWFrZUluc3RhbmNlKHJlc29sdmVkUGFyYW1zKTtcblx0XHR9O1xuXHR9XG5cdFxuXHRnZXRTdWJzdGl0dXRpb25QYXJhbShpbnRlcmZhY2VEZWYsIHJ1bGUsIGluZGV4KXtcblx0XHRjb25zdCBzdWJzdGl0dXRpb25zID0gdGhpcy53cmFwVmFyVHlwZShydWxlLnN1YnN0aXR1dGlvbnMsIHRoaXMuZGVmYXVsdFJ1bGVWYXIpO1xuXHRcdFxuXHRcdGlmKHR5cGVvZiBpbmRleCAhPT0gJ3VuZGVmaW5lZCcgJiYgc3Vic3RpdHV0aW9uc1tpbmRleF0pe1xuXHRcdFx0aW50ZXJmYWNlRGVmID0gc3Vic3RpdHV0aW9uc1tpbmRleF07XG5cdFx0XHRpbnRlcmZhY2VEZWYgPSB0aGlzLndyYXBWYXJUeXBlKGludGVyZmFjZURlZiwgdGhpcy5kZWZhdWx0UnVsZVZhciwgdHJ1ZSk7XG5cdFx0fVxuXHRcdFxuXHRcdGlmKGludGVyZmFjZURlZiBpbnN0YW5jZW9mIEludGVyZmFjZSl7XG5cdFx0XHRjb25zdCBpbnRlcmZhY2VOYW1lID0gaW50ZXJmYWNlRGVmLmdldE5hbWUoKTtcblx0XHRcdGlmKHN1YnN0aXR1dGlvbnNbaW50ZXJmYWNlTmFtZV0pe1xuXHRcdFx0XHRpbnRlcmZhY2VEZWYgPSBzdWJzdGl0dXRpb25zW2ludGVyZmFjZU5hbWVdO1xuXHRcdFx0XHRpbnRlcmZhY2VEZWYgPSB0aGlzLndyYXBWYXJUeXBlKGludGVyZmFjZURlZiwgdGhpcy5kZWZhdWx0UnVsZVZhciwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9XG5cdFx0cmV0dXJuIGludGVyZmFjZURlZjtcblx0fVxuXHRnZXRQYXJhbShpbnRlcmZhY2VEZWYsIHJ1bGUsIHNoYXJlZEluc3RhbmNlcywgZGVmYXVsdFZhciA9ICdpbnRlcmZhY2UnLCBpbmRleCA9IHVuZGVmaW5lZCwgc3RhY2sgPSBbXSl7XG5cdFx0XG5cdFx0aW50ZXJmYWNlRGVmID0gdGhpcy53cmFwVmFyVHlwZShpbnRlcmZhY2VEZWYsIGRlZmF1bHRWYXIpO1xuXHRcdFxuXHRcdGludGVyZmFjZURlZiA9IHRoaXMuZ2V0U3Vic3RpdHV0aW9uUGFyYW0oaW50ZXJmYWNlRGVmLCBydWxlLCBpbmRleCk7XG5cdFx0XG5cdFx0aWYoaW50ZXJmYWNlRGVmIGluc3RhbmNlb2YgRmFjdG9yeSl7XG5cdFx0XHRyZXR1cm4gaW50ZXJmYWNlRGVmLmNhbGxiYWNrKHNoYXJlZEluc3RhbmNlcyk7XG5cdFx0fVxuXHRcdGlmKGludGVyZmFjZURlZiBpbnN0YW5jZW9mIFZhbHVlKXtcblx0XHRcdHJldHVybiBpbnRlcmZhY2VEZWYuZ2V0VmFsdWUoKTtcblx0XHR9XG5cdFx0aWYoaW50ZXJmYWNlRGVmIGluc3RhbmNlb2YgUmVxdWlyZSl7XG5cdFx0XHRyZXR1cm4gaW50ZXJmYWNlRGVmLnJlcXVpcmUoKTtcblx0XHR9XG5cdFx0XG5cdFx0aWYoaW50ZXJmYWNlRGVmIGluc3RhbmNlb2YgSW50ZXJmYWNlKXtcblx0XHRcdFxuXHRcdFx0Y29uc3QgaW50ZXJmYWNlTmFtZSA9IGludGVyZmFjZURlZi5nZXROYW1lKCk7XG5cdFx0XHRcblx0XHRcdHN0YWNrID0gc3RhY2suc2xpY2UoMCk7XG5cdFx0XHRpZihzdGFjay5pbmRleE9mKGludGVyZmFjZU5hbWUpIT09LTEpe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0N5Y2xpYyBkZXBlbmRlbmN5IGVycm9yIGluICcrSlNPTi5zdHJpbmdpZnkoc3RhY2suY29uY2F0KGludGVyZmFjZU5hbWUpLG51bGwsMikpO1xuXHRcdFx0fVxuXHRcdFx0c3RhY2sucHVzaChpbnRlcmZhY2VOYW1lKTtcblx0XHRcdFxuXHRcdFx0bGV0IGluc3RhbmNlO1xuXHRcdFx0XG5cdFx0XHRpZihzaGFyZWRJbnN0YW5jZXNbaW50ZXJmYWNlTmFtZV0pe1xuXHRcdFx0XHRpbnN0YW5jZSA9IHNoYXJlZEluc3RhbmNlc1tpbnRlcmZhY2VOYW1lXS5nZXQoc2hhcmVkSW5zdGFuY2VzLCBzdGFjayk7XG5cdFx0XHR9XG5cdFx0XHRlbHNle1xuXHRcdFx0XHRpbnN0YW5jZSA9IHRoaXMuZ2V0KGludGVyZmFjZU5hbWUsIHVuZGVmaW5lZCwgc2hhcmVkSW5zdGFuY2VzLCBzdGFjayk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGNvbnN0IGluc3RhbmNlUnVsZSA9IHRoaXMuZ2V0UnVsZShpbnRlcmZhY2VOYW1lKTtcblx0XHRcdFxuXHRcdFx0Ly9pZighaW5zdGFuY2VSdWxlLmFzeW5jUmVzb2x2ZSAmJiBpbnN0YW5jZSBpbnN0YW5jZW9mIHRoaXMuUHJvbWlzZUludGVyZmFjZSl7XG5cdFx0XHRpZighaW5zdGFuY2VSdWxlLmFzeW5jUmVzb2x2ZSl7XG5cdFx0XHRcdHJldHVybiBuZXcgU3luYyhpbnN0YW5jZSk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHJldHVybiBpbnN0YW5jZTtcblx0XHR9XG5cdFx0XG5cdFx0aWYodHlwZW9mIGludGVyZmFjZURlZiA9PSAnb2JqZWN0JyAmJiAhKGludGVyZmFjZURlZiBpbnN0YW5jZW9mIFZhcikpe1xuXHRcdFx0Y29uc3QgbyA9IHt9O1xuXHRcdFx0T2JqZWN0LmtleXMoaW50ZXJmYWNlRGVmKS5mb3JFYWNoKGsgPT4ge1xuXHRcdFx0XHRvW2tdID0gdGhpcy5nZXRQYXJhbShpbnRlcmZhY2VEZWZba10sIHJ1bGUsIHNoYXJlZEluc3RhbmNlcywgZGVmYXVsdFZhciwgdW5kZWZpbmVkLCBzdGFjayk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBvO1xuXHRcdH1cblx0XG5cdFx0cmV0dXJuIGludGVyZmFjZURlZjtcblx0fVxuXHRcblx0d3JhcFZhclR5cGUodHlwZSwgZGVmYXVsdFZhciwgcmVzb2x2ZUZ1bmN0aW9uKXtcblx0XHRpZihyZXNvbHZlRnVuY3Rpb24gJiYgdHlwZW9mIHR5cGUgPT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHR0eXBlID0gdHlwZSgpO1xuXHRcdH1cblx0XHRpZih0eXBlIGluc3RhbmNlb2YgVmFyKXtcblx0XHRcdHJldHVybiB0eXBlO1xuXHRcdH1cblx0XHRzd2l0Y2goZGVmYXVsdFZhcil7XG5cdFx0XHRjYXNlICdpbnRlcmZhY2UnOlxuXHRcdFx0XHRpZih0eXBlb2YgdHlwZSA9PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKXtcblx0XHRcdFx0XHRjb25zdCBvID0ge307XG5cdFx0XHRcdFx0T2JqZWN0LmtleXModHlwZSkuZm9yRWFjaChrZXk9Pntcblx0XHRcdFx0XHRcdGNvbnN0IHYgPSB0eXBlW2tleV07XG5cdFx0XHRcdFx0XHRvW2tleV0gPSB0eXBlb2YgdiA9PSAnb2JqZWN0JyAmJiB2ICE9PSBudWxsICYmICEodiBpbnN0YW5jZW9mIFZhcikgPyB0aGlzLndyYXBWYXJUeXBlKHYsIGRlZmF1bHRWYXIpIDogdjtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRyZXR1cm4gbztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZih0eXBlb2YgdHlwZSA9PSAnZnVuY3Rpb24nKXtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5mYWN0b3J5KHR5cGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0aGlzLmludGVyZmFjZSh0eXBlKTtcblx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAndmFsdWUnOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy52YWx1ZSh0eXBlKTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRyZXR1cm4gdHlwZTtcblx0fVxuXHRcblx0cmVnaXN0ZXJJbnN0YW5jZShuYW1lLCBpbnN0YW5jZSl7XG5cdFx0dGhpcy5pbnN0YW5jZVJlZ2lzdHJ5W25hbWVdID0gaW5zdGFuY2U7XG5cdH1cblx0XG5cdGdldFJ1bGVCYXNlKGludGVyZmFjZU5hbWUpe1xuXHRcdGNvbnN0IHJ1bGVCYXNlID0gdGhpcy5tZXJnZVJ1bGUoe30sIHRoaXMucnVsZXNEZWZhdWx0KTtcblx0XHRydWxlQmFzZS5pbnRlcmZhY2VOYW1lID0gaW50ZXJmYWNlTmFtZTsgLy9mb3IgaW5mb1xuXHRcdHRoaXMubWVyZ2VSdWxlKHJ1bGVCYXNlLCB0aGlzLnJ1bGVzW2ludGVyZmFjZU5hbWVdIHx8IHt9KTtcblx0XHRyZXR1cm4gcnVsZUJhc2U7XG5cdH1cblx0XG5cdGdldFJ1bGUoaW50ZXJmYWNlTmFtZSl7XG5cdFx0Y29uc3QgcnVsZSA9IHRoaXMubWVyZ2VSdWxlKHt9LCB0aGlzLnJ1bGVzRGVmYXVsdCk7XG5cdFx0cnVsZS5pbnRlcmZhY2VOYW1lID0gaW50ZXJmYWNlTmFtZTsgLy9mb3IgaW5mb1xuXHRcdGlmKCFpbnRlcmZhY2VOYW1lKXtcblx0XHRcdHJldHVybiBydWxlO1xuXHRcdH1cblx0XHRcblx0XHRjb25zdCBydWxlQmFzZSA9IHRoaXMuZ2V0UnVsZUJhc2UoaW50ZXJmYWNlTmFtZSk7XG5cdFx0XG5cdFx0bGV0IHN0YWNrID0gW107XG5cdFx0XG5cdFx0dGhpcy5yZXNvbHZlSW5zdGFuY2VPZihpbnRlcmZhY2VOYW1lLCBzdGFjayk7XG5cdFx0XG5cdFx0Y29uc3QgcnVsZXMgPSBbXTtcblx0XHRcblx0XHRsZXQgZnVsbFN0YWNrO1xuXHRcdFxuXHRcdGlmKHJ1bGVCYXNlLmluaGVyaXRJbnN0YW5jZU9mKXsgXG5cdFx0XHRmdWxsU3RhY2sgPSBuZXcgU2V0KCBzdGFjay5zbGljZSgwLCAtMSkgKTtcblx0XHR9XG5cdFx0ZWxzZXtcblx0XHRcdGZ1bGxTdGFjayA9IG5ldyBTZXQoIHN0YWNrLnNsaWNlKDAsIDEpICk7XG5cdFx0fVxuXHRcdFxuXHRcdFxuXHRcdGlmKHJ1bGVCYXNlLmluaGVyaXRQcm90b3R5cGUpe1xuXHRcdFx0c3RhY2sucmV2ZXJzZSgpLmZvckVhY2goKGMpPT57XG5cdFx0XHRcdGlmKHR5cGVvZiBjID09ICdmdW5jdGlvbicpe1xuXHRcdFx0XHRcdGxldCBwYXJlbnRQcm90byA9IGM7XG5cdFx0XHRcdFx0bGV0IGNsYXNzTmFtZTtcblx0XHRcdFx0XHR3aGlsZShwYXJlbnRQcm90byl7XG5cdFx0XHRcdFx0XHRjbGFzc05hbWUgPSBwYXJlbnRQcm90b1t0aGlzLnN5bUNsYXNzTmFtZV07XG5cdFx0XHRcdFx0XHRpZihjbGFzc05hbWUpe1xuXHRcdFx0XHRcdFx0XHRmdWxsU3RhY2suYWRkKGNsYXNzTmFtZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRwYXJlbnRQcm90byA9IFJlZmxlY3QuZ2V0UHJvdG90eXBlT2YocGFyZW50UHJvdG8pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGZ1bGxTdGFjayA9IEFycmF5LmZyb20oZnVsbFN0YWNrKS5yZXZlcnNlKCk7XG5cdFx0XG5cdFx0ZnVsbFN0YWNrLmZvckVhY2goKGNsYXNzTmFtZSk9Pntcblx0XHRcdGNvbnN0IG1lcmdlUnVsZSA9IHRoaXMucnVsZXNbY2xhc3NOYW1lXTtcblx0XHRcdFx0XG5cdFx0XHRpZihtZXJnZVJ1bGUuaW5oZXJpdE1peGlucyl7XG5cdFx0XHRcdHRoaXMubWl4aW5zUnVsZShydWxlLCBtZXJnZVJ1bGUuaW5oZXJpdE1peGlucyk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHRoaXMubWVyZ2VSdWxlKHJ1bGUsIG1lcmdlUnVsZSk7XG5cdFx0fSk7XG5cdFx0XG5cdFx0cmV0dXJuIHJ1bGU7XG5cdH1cblx0XG5cdG1peGluc1J1bGUocnVsZSwgbWl4aW5zR3JvdXApe1xuXHRcdGNvbnN0IG1peGluc0dyb3VwcyA9IHRoaXMucnVsZUNvbGxlY3RFeHRlbmRzUmVjdXJzaXZlKG1peGluc0dyb3VwKS5yZXZlcnNlKCk7XG5cdFx0bWl4aW5zR3JvdXBzLmZvckVhY2gobWl4aW5Hcm91cCA9PlxuXHRcdFx0bWl4aW5Hcm91cC5mb3JFYWNoKCBtaXhpbiA9PiB7XG5cdFx0XHRcdGNvbnN0IG1lcmdlUnVsZSA9IHRoaXMucnVsZXNbbWl4aW5dO1xuXHRcdFx0XHR0aGlzLm1lcmdlUnVsZShydWxlLCBtZXJnZVJ1bGUsIGZhbHNlKVxuXHRcdFx0fSApXG5cdFx0KTtcblx0fVxuXHRydWxlQ29sbGVjdEV4dGVuZHNSZWN1cnNpdmUobWl4aW5Hcm91cCwgbWl4aW5zR3JvdXBzID0gW10pe1xuXHRcdGlmKCEobWl4aW5Hcm91cCBpbnN0YW5jZW9mIEFycmF5KSl7XG5cdFx0XHRtaXhpbkdyb3VwID0gW21peGluR3JvdXBdO1xuXHRcdH1cblx0XHRtaXhpbnNHcm91cHMucHVzaChtaXhpbkdyb3VwKTtcblx0XHRtaXhpbkdyb3VwLmZvckVhY2gobWl4aW4gPT4ge1xuXHRcdFx0Y29uc3QgcnVsZSA9IHRoaXMucnVsZXNbbWl4aW5dO1xuXHRcdFx0aWYocnVsZSAmJiBydWxlLm1peGlucyl7XG5cdFx0XHRcdHRoaXMucnVsZUNvbGxlY3RFeHRlbmRzUmVjdXJzaXZlKHJ1bGUubWl4aW5zLCBtaXhpbnNHcm91cHMpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHJldHVybiBtaXhpbnNHcm91cHM7XG5cdH1cblxuXHRyZWdpc3RlckNsYXNzKG5hbWUsIHRhcmdldCl7XG5cdFx0aWYoIXRoaXMucnVsZXNbbmFtZV0pe1xuXHRcdFx0dGhpcy5ydWxlc1tuYW1lXSA9IHt9O1xuXHRcdH1cblx0XHR0aGlzLnJ1bGVzW25hbWVdLmNsYXNzRGVmID0gdGFyZ2V0O1xuXHR9XG5cdFxuXHRtZXJnZVJ1bGUoZXh0ZW5kUnVsZSwgcnVsZSwgbWVyZ2VFeHRlbmQgPSB0cnVlKXtcblx0XHRsZXQge1xuXHRcdFx0c2hhcmVkLFxuXHRcdFx0aW5oZXJpdEluc3RhbmNlT2YsXG5cdFx0XHRpbmhlcml0UHJvdG90eXBlLFxuXHRcdFx0aW5oZXJpdE1peGlucyxcblx0XHRcdGluc3RhbmNlT2YsXG5cdFx0XHRwYXJhbXMsXG5cdFx0XHRjYWxscyxcblx0XHRcdGxhenlDYWxscyxcblx0XHRcdHN1YnN0aXR1dGlvbnMsXG5cdFx0XHRzaGFyZWRJblRyZWUsXG5cdFx0XHRjbGFzc0RlZixcblx0XHRcdHNpbmdsZXRvbixcblx0XHRcdGFzeW5jUmVzb2x2ZSxcblx0XHRcdGFzeW5jQ2FsbHNTZXJpZSxcblx0XHRcdGFzeW5jQ2FsbHNQYXJhbXNTZXJpZSxcblx0XHRcdGRlY29yYXRvcixcblx0XHRcdGF1dG9sb2FkLFxuXHRcdFx0cGF0aCxcblx0XHR9ID0gcnVsZTtcblx0XHRpZihjbGFzc0RlZiAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUuY2xhc3NEZWYgPSBjbGFzc0RlZjtcblx0XHR9XG5cdFx0aWYoc2hhcmVkICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5zaGFyZWQgPSBzaGFyZWQ7XG5cdFx0fVxuXHRcdGlmKGluaGVyaXRJbnN0YW5jZU9mICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5pbmhlcml0SW5zdGFuY2VPZiA9IGluaGVyaXRJbnN0YW5jZU9mO1xuXHRcdH1cblx0XHRpZihpbmhlcml0UHJvdG90eXBlICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5pbmhlcml0UHJvdG90eXBlID0gaW5oZXJpdFByb3RvdHlwZTtcblx0XHR9XG5cdFx0aWYoZGVjb3JhdG9yICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5kZWNvcmF0b3IgPSBkZWNvcmF0b3I7XG5cdFx0fVxuXHRcdGlmKGF1dG9sb2FkICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5hdXRvbG9hZCA9IGF1dG9sb2FkO1xuXHRcdH1cblx0XHRpZihwYXRoICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5wYXRoID0gcGF0aDtcblx0XHR9XG5cdFx0aWYoaW5zdGFuY2VPZiAhPT0gdW5kZWZpbmVkICYmIGV4dGVuZFJ1bGUuaW5zdGFuY2VPZiA9PT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUuaW5zdGFuY2VPZiA9IGluc3RhbmNlT2Y7XG5cdFx0fVxuXHRcdGlmKGFzeW5jUmVzb2x2ZSAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUuYXN5bmNSZXNvbHZlID0gYXN5bmNSZXNvbHZlO1xuXHRcdH1cblx0XHRpZihhc3luY0NhbGxzU2VyaWUgIT09IHVuZGVmaW5lZCl7XG5cdFx0XHRleHRlbmRSdWxlLmFzeW5jQ2FsbHNTZXJpZSA9IGFzeW5jQ2FsbHNTZXJpZTtcblx0XHR9XG5cdFx0aWYoYXN5bmNDYWxsc1BhcmFtc1NlcmllICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5hc3luY0NhbGxzUGFyYW1zU2VyaWUgPSBhc3luY0NhbGxzUGFyYW1zU2VyaWU7XG5cdFx0fVxuXG5cdFx0aWYoY2FsbHMgIT09IHVuZGVmaW5lZCl7XG5cdFx0XHRleHRlbmRSdWxlLmNhbGxzID0gKCBleHRlbmRSdWxlLmNhbGxzIHx8IFtdICkuY29uY2F0KGNhbGxzKTtcblx0XHR9XG5cdFx0aWYobGF6eUNhbGxzICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5sYXp5Q2FsbHMgPSAoIGV4dGVuZFJ1bGUubGF6eUNhbGxzIHx8IFtdICkuY29uY2F0KGxhenlDYWxscyk7XG5cdFx0fVxuXHRcdFxuXHRcdGlmKG1lcmdlRXh0ZW5kICYmIGluaGVyaXRNaXhpbnMgIT09IHVuZGVmaW5lZCl7XG5cdFx0XHRleHRlbmRSdWxlLmluaGVyaXRNaXhpbnMgPSBpbmhlcml0TWl4aW5zLnNsaWNlKDApO1xuXHRcdH1cblx0XHRcblx0XHRpZihwYXJhbXMgIT09IHVuZGVmaW5lZCl7XG5cdFx0XHRleHRlbmRSdWxlLnBhcmFtcyA9IHBhcmFtcztcblx0XHR9XG5cdFx0aWYoc3Vic3RpdHV0aW9ucyAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGlmKCFleHRlbmRSdWxlLnN1YnN0aXR1dGlvbnMpe1xuXHRcdFx0XHRleHRlbmRSdWxlLnN1YnN0aXR1dGlvbnMgPSB7fTtcblx0XHRcdH1cblx0XHRcdE9iamVjdC5hc3NpZ24oZXh0ZW5kUnVsZS5zdWJzdGl0dXRpb25zLCBzdWJzdGl0dXRpb25zKTtcblx0XHR9XG5cdFx0aWYoc2hhcmVkSW5UcmVlICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0aWYoIWV4dGVuZFJ1bGUuc2hhcmVkSW5UcmVlKXtcblx0XHRcdFx0ZXh0ZW5kUnVsZS5zaGFyZWRJblRyZWUgPSBbXTtcblx0XHRcdH1cblx0XHRcdGV4dGVuZFJ1bGUuc2hhcmVkSW5UcmVlID0gQXJyYXkuZnJvbSggbmV3IFNldChbLi4uZXh0ZW5kUnVsZS5zaGFyZWRJblRyZWUsIC4uLnNoYXJlZEluVHJlZV0pICk7XG5cdFx0fVxuXHRcdGV4dGVuZFJ1bGUuc2luZ2xldG9uID0gc2luZ2xldG9uO1xuXHRcdHJldHVybiBleHRlbmRSdWxlO1xuXHR9XG5cdFxuXHRtZXJnZVJ1bGVzKGV4dGVuZFJ1bGVzLCBydWxlcyl7XG5cdFx0T2JqZWN0LmtleXMocnVsZXMpLmZvckVhY2goKGspPT57XG5cdFx0XHRpZighZXh0ZW5kUnVsZXNba10pe1xuXHRcdFx0XHRleHRlbmRSdWxlc1trXSA9IHt9O1xuXHRcdFx0fVxuXHRcdFx0ZXh0ZW5kUnVsZXNba10gPSB0aGlzLm1lcmdlUnVsZShleHRlbmRSdWxlc1trXSwgcnVsZXNba10pO1xuXHRcdH0pO1xuXHRcdHJldHVybiBleHRlbmRSdWxlcztcblx0fVxuXHRcblx0cnVuQ2FsbHMoY2FsbHMsIGluc3RhbmNlLCBydWxlLCBzaGFyZWRJbnN0YW5jZXMpe1xuXHRcdGxldCBoYXNBc3luYztcblx0XHRcblx0XHRsZXQgY2FsbGVycyA9IGNhbGxzLm1hcCgoYyk9PiAoKT0+IHtcblx0XHRcdFxuXHRcdFx0aWYodHlwZW9mIGMgPT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRcdGMgPSBbY107XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBbIG1ldGhvZCwgcGFyYW1zID0gW10sIGFzeW5jUmVzb2x2ZSA9IHJ1bGUuYXN5bmNSZXNvbHZlICBdID0gYztcblx0XHRcdFxuXHRcdFx0Y29uc3QgbWFrZUNhbGwgPSAocmVzb2x2ZWRQYXJhbXMpPT57XHRcdFx0XHRcblx0XHRcdFx0cmVzb2x2ZWRQYXJhbXMgPSBzdHJ1Y3R1cmVkUmVzb2x2ZVBhcmFtc0ludGVyZmFjZShwYXJhbXMsIHJlc29sdmVkUGFyYW1zKTtcblx0XHRcdFx0bGV0IGNhbGxSZXR1cm47XG5cdFx0XHRcdGlmKHR5cGVvZiBtZXRob2QgPT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRcdFx0Y2FsbFJldHVybiA9IG1ldGhvZChpbnN0YW5jZSwgLi4ucmVzb2x2ZWRQYXJhbXMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2V7XG5cdFx0XHRcdFx0Y2FsbFJldHVybiA9IGluc3RhbmNlW21ldGhvZF0oLi4ucmVzb2x2ZWRQYXJhbXMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKCFhc3luY1Jlc29sdmUpe1xuXHRcdFx0XHRcdGNhbGxSZXR1cm4gPSBuZXcgU3luYyhjYWxsUmV0dXJuKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gY2FsbFJldHVybjtcblx0XHRcdH07XG5cdFx0XHRcdFx0XHRcblx0XHRcdGNvbnN0IHJlc29sdmVkUGFyYW1zID0gcGFyYW1zLm1hcChwYXJhbSA9PiB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmdldFBhcmFtKHBhcmFtLCBydWxlLCBzaGFyZWRJbnN0YW5jZXMsIHRoaXMuZGVmYXVsdFJ1bGVWYXIpO1xuXHRcdFx0fSk7XG5cdFx0XHRpZihzdHJ1Y3R1cmVkSGFzUHJvbWlzZShwYXJhbXMsIHJlc29sdmVkUGFyYW1zLCB0aGlzLlByb21pc2VJbnRlcmZhY2UpKXtcblx0XHRcdFx0aGFzQXN5bmMgPSB0cnVlO1xuXHRcdFx0XHRyZXR1cm4gKCkgPT4gc3RydWN0dXJlZFByb21pc2VBbGxSZWN1cnNpdmUocGFyYW1zLCByZXNvbHZlZFBhcmFtcywgdGhpcy5Qcm9taXNlSW50ZXJmYWNlLCB0aGlzLlByb21pc2VGYWN0b3J5KS50aGVuKHJlc29sdmVkUGFyYW1zPT57XG5cdFx0XHRcdFx0cmV0dXJuIG1ha2VDYWxsKHJlc29sdmVkUGFyYW1zKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNle1xuXHRcdFx0XHRyZXR1cm4gKCkgPT4gbWFrZUNhbGwocmVzb2x2ZWRQYXJhbXMpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fSk7XG5cdFx0XG5cdFx0Y29uc3QgYXN5bmNDYWxsc1BhcmFtc1NlcmllID0gcnVsZS5hc3luY0NhbGxzUGFyYW1zU2VyaWU7XG5cdFx0Y29uc3QgYXN5bmNDYWxsc1NlcmllID0gcnVsZS5hc3luY0NhbGxzU2VyaWUgfHwgYXN5bmNDYWxsc1BhcmFtc1NlcmllO1xuXHRcdFxuXHRcdGNvbnN0IG1ha2VDYWxscyA9IChjYWxsZXJzKT0+e1xuXHRcdFx0XG5cdFx0XHRsZXQgY2FsbGVyc1JldHVybjtcblx0XHRcdGlmKGhhc0FzeW5jKXtcblx0XHRcdFx0aWYoYXN5bmNDYWxsc1NlcmllKXtcblx0XHRcdFx0XHRjYWxsZXJzUmV0dXJuID0gbWFwU2VyaWUoY2FsbGVycywgKGNhbGxlcik9Pntcblx0XHRcdFx0XHRcdHJldHVybiBjYWxsZXIoKTtcblx0XHRcdFx0XHR9LCB0aGlzLlByb21pc2VJbnRlcmZhY2UsIHRoaXMuUHJvbWlzZUZhY3RvcnkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2V7XG5cdFx0XHRcdFx0Y2FsbGVyc1JldHVybiA9IHRoaXMuUHJvbWlzZUZhY3RvcnkuYWxsKCBjYWxsZXJzLm1hcCgoY2FsbGVyKT0+e1xuXHRcdFx0XHRcdFx0cmV0dXJuIGNhbGxlcigpO1xuXHRcdFx0XHRcdH0pICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGVsc2V7XG5cdFx0XHRcdGNhbGxlcnNSZXR1cm4gPSBjYWxsZXJzLm1hcCgoY2FsbGVyKT0+e1xuXHRcdFx0XHRcdGNvbnN0IGNhbGxlclJldHVybiA9IGNhbGxlcigpO1xuXHRcdFx0XHRcdGlmKGNhbGxlclJldHVybiBpbnN0YW5jZW9mIHRoaXMuUHJvbWlzZUludGVyZmFjZSl7XG5cdFx0XHRcdFx0XHRoYXNBc3luYyA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBjYWxsZXJSZXR1cm47XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRpZihoYXNBc3luYyl7XG5cdFx0XHRcdFx0Y2FsbGVyc1JldHVybiA9IHRoaXMuUHJvbWlzZUZhY3RvcnkuYWxsKGNhbGxlcnNSZXR1cm4pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY2FsbGVyc1JldHVybjtcblx0XHR9XG5cdFx0XG5cdFx0aWYoYXN5bmNDYWxsc1BhcmFtc1NlcmllKXtcblx0XHRcdGNhbGxlcnMgPSBtYXBTZXJpZShjYWxsZXJzLCAoY2FsbGVyKT0+e1xuXHRcdFx0XHRjYWxsZXIgPSBjYWxsZXIoKSgpO1xuXHRcdFx0XHRyZXR1cm4gY2FsbGVyO1xuXHRcdFx0fSwgdGhpcy5Qcm9taXNlSW50ZXJmYWNlLCB0aGlzLlByb21pc2VGYWN0b3J5KTtcblx0XHRcdHJldHVybiBjYWxsZXJzLnRoZW4oIGNhbGxlcnMgPT4gbWFrZUNhbGxzKCBjYWxsZXJzLm1hcChjYWxsZXIgPT4gKCkgPT4gY2FsbGVyICkgKSApIDtcblx0XHR9XG5cdFx0ZWxzZXtcblx0XHRcdGNhbGxlcnMgPSBjYWxsZXJzLm1hcCgoY2FsbGVyKT0+Y2FsbGVyKCkpO1xuXHRcdFx0cmV0dXJuIG1ha2VDYWxscyhjYWxsZXJzKTtcblx0XHR9XG5cdFx0XG5cdH1cblx0XHRcblx0ZGVmaW5lU3ltKHRhcmdldCwgc3ltbmFtZSwgdmFsdWUpe1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHN5bW5hbWUsIHtcblx0XHRcdHZhbHVlOiB2YWx1ZSxcblx0XHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdH0pO1xuXHR9XG5cdFxuXHRyZXNvbHZlSW5zdGFuY2VPZihzdHIsIHN0YWNrID0gW10sIHJlcXVpcmVkID0gdHJ1ZSl7XG5cdFx0aWYodHlwZW9mIHN0ciA9PSAnc3RyaW5nJyl7XG5cdFx0XHRpZihzdGFjay5pbmRleE9mKHN0cikhPT0tMSl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignQ3ljbGljIGludGVyZmFjZSBkZWZpbml0aW9uIGVycm9yIGluICcrSlNPTi5zdHJpbmdpZnkoc3RhY2suY29uY2F0KHN0ciksbnVsbCwyKSk7XG5cdFx0XHR9XG5cdFx0XHRzdGFjay5wdXNoKHN0cik7XG5cdFx0XHRjb25zdCBydWxlID0gdGhpcy5ydWxlc1tzdHJdO1xuXHRcdFx0bGV0IHJlc29sdmVkID0gZmFsc2U7XG5cdFx0XHRpZihydWxlKXtcblx0XHRcdFx0aWYocnVsZS5pbnN0YW5jZU9mKXtcblx0XHRcdFx0XHRyZXNvbHZlZCA9IHJ1bGUuaW5zdGFuY2VPZjtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmKHJ1bGUuY2xhc3NEZWYpe1xuXHRcdFx0XHRcdHJlc29sdmVkID0gcnVsZS5jbGFzc0RlZjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYoIXJlc29sdmVkKXtcblx0XHRcdFx0aWYoIXJlcXVpcmVkKXtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdJbnRlcmZhY2UgZGVmaW5pdGlvbiBcIicrc3RyKydcIiBub3QgZm91bmQsIGRpIGxvYWQgc3RhY2s6ICcrSlNPTi5zdHJpbmdpZnkoc3RhY2ssIG51bGwsIDIpKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLnJlc29sdmVJbnN0YW5jZU9mKHJlc29sdmVkLCBzdGFjaywgcmVxdWlyZWQpO1xuXHRcdH1cblx0XHRzdGFjay5wdXNoKHN0cik7XG5cdFx0cmV0dXJuIHN0cjtcblx0fVxuXHRcblx0ZmFjdG9yeShjYWxsYmFjayl7XG5cdFx0cmV0dXJuIG5ldyBGYWN0b3J5KGNhbGxiYWNrKTtcblx0fVxuXHRpbnRlcmZhY2UobmFtZSl7XG5cdFx0cmV0dXJuIG5ldyBJbnRlcmZhY2UobmFtZSk7XG5cdH1cblx0dmFsdWUodmFsdWUpe1xuXHRcdHJldHVybiBuZXcgVmFsdWUodmFsdWUpO1xuXHR9XG5cdHJlcXVpcmUoZGVwKXtcblx0XHRyZXR1cm4gbmV3IFJlcXVpcmUoZGVwKTtcblx0fVxuXHRcblx0Y2xhc3NEZWYoY2FsbGJhY2spe1xuXHRcdHJldHVybiBuZXcgQ2xhc3NEZWYoY2FsbGJhY2spO1xuXHR9XG59XG4iXX0=