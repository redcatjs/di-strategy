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

var _dependency = _interopRequireDefault(require("./dependency"));

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
        _ref$dependencies = _ref.dependencies,
        dependencies = _ref$dependencies === void 0 ? {} : _ref$dependencies,
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
    this.dependencies = dependencies;
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
    this.loadDependencies();
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
    key: "loadPaths",
    value: function loadPaths(dirs) {
      var _this2 = this;

      (0, _keys.default)(dirs).forEach(function (dirKey) {
        var context = dirs[dirKey];

        if (context instanceof _dependency.default) {
          _this2.requires[dirKey] = context.getDependency();
          return;
        }

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
    key: "loadDependencies",
    value: function loadDependencies() {
      this.loadPaths(this.dependencies);
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
    key: "dependency",
    value: function dependency(dep) {
      return new _dependency.default(dep);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250YWluZXIuanMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwicnVsZXMiLCJydWxlc0RlZmF1bHQiLCJhdXRvbG9hZEZhaWxPbk1pc3NpbmdGaWxlIiwiZGVwZW5kZW5jaWVzIiwiYXV0b2xvYWRFeHRlbnNpb25zIiwiYXV0b2xvYWRQYXRoUmVzb2x2ZXIiLCJwYXRoIiwiZGVmYXVsdFZhciIsImRlZmF1bHRSdWxlVmFyIiwiZGVmYXVsdERlY29yYXRvclZhciIsImRlZmF1bHRBcmdzVmFyIiwiZ2xvYmFsS2V5IiwicHJvbWlzZUZhY3RvcnkiLCJwcm9taXNlSW50ZXJmYWNlcyIsInN5bUNsYXNzTmFtZSIsInN5bUludGVyZmFjZXMiLCJwcm92aWRlclJlZ2lzdHJ5IiwiaW5zdGFuY2VSZWdpc3RyeSIsInJlcXVpcmVzIiwic2V0QXV0b2xvYWRQYXRoUmVzb2x2ZXIiLCJsb2FkRXh0ZW5zaW9uUmVnZXgiLCJSZWdFeHAiLCJqb2luIiwiYWxsb3dlZERlZmF1bHRWYXJzIiwidmFsaWRhdGVEZWZhdWx0VmFyIiwiaW5kZXhPZiIsInVuc2hpZnQiLCJQcm9taXNlSW50ZXJmYWNlIiwiUHJvbWlzZUZhY3RvcnkiLCJzZXRHbG9iYWxLZXkiLCJpbmhlcml0SW5zdGFuY2VPZiIsImluaGVyaXRQcm90b3R5cGUiLCJpbmhlcml0TWl4aW5zIiwic2hhcmVkIiwiaW5zdGFuY2VPZiIsInVuZGVmaW5lZCIsImNsYXNzRGVmIiwicGFyYW1zIiwiY2FsbHMiLCJsYXp5Q2FsbHMiLCJzdWJzdGl0dXRpb25zIiwic2hhcmVkSW5UcmVlIiwic2luZ2xldG9uIiwiYXN5bmNSZXNvbHZlIiwiYXN5bmNDYWxsc1NlcmllIiwiZGVjb3JhdG9yIiwiYXV0b2xvYWQiLCJzZXRSdWxlc0RlZmF1bHQiLCJsb2FkRGVwZW5kZW5jaWVzIiwiYWRkUnVsZXMiLCJrZXkiLCJ2YWx1ZSIsImZvckVhY2giLCJjb25maWciLCJrIiwiRXJyb3IiLCJhbGlhc01hcCIsInJlYWxQYXRoIiwiYWxpYXMiLCJzdWJzdHIiLCJsZW5ndGgiLCJnbG9iYWwiLCJkaXJzIiwiY29udGV4dCIsImRpcktleSIsImdldERlcGVuZGVuY3kiLCJrZXlzIiwiZmlsZW5hbWUiLCJsYXN0SW5kZXhPZiIsInNwbGl0IiwicG9wIiwiYWRkUnVsZSIsImludGVyZmFjZU5hbWUiLCJydWxlc0RldGVjdExhenlMb2FkIiwicnVsZSIsImRldGVjdExhenlMb2FkIiwibWVyZ2VSdWxlIiwicHJvY2Vzc1J1bGUiLCJnZXRDbGFzc0RlZiIsInJlZ2lzdGVyUmVxdWlyZSIsInByb3BlcnR5IiwibG9hZFBhdGhzIiwicmVnaXN0ZXJSZXF1aXJlTWFwIiwicnVsZUxhenlMb2FkIiwic3RhY2siLCJjYWxsVmFsIiwibWV0aG9kIiwicnVsZUNoZWNrQ3ljbGljTG9hZCIsInB1c2giLCJjb25jYXQiLCJzb21lIiwicGFyYW0iLCJ2Iiwid3JhcFZhclR5cGUiLCJnZXROYW1lIiwicmVzb2x2ZUluc3RhbmNlT2YiLCJwYXJhbVJ1bGUiLCJnZXRSdWxlIiwiY3ljbGljIiwiY2FsbFYiLCJjbGFzc0RlZk5hbWUiLCJjbGFzc0RlZmluaXRpb24iLCJnZXQiLCJhcmdzIiwidmFsaWRhdGVBdXRvbG9hZEZpbGVOYW1lIiwicmVxIiwicmVxdWlyZURlcCIsIm5hbWUiLCJyZXF1aXJlUGF0aCIsImZvdW5kIiwicGF0aEZyYWdtZW50cyIsInNoaWZ0IiwiZXh0IiwiZGVwRXhpc3RzIiwicmVxdWlyZWQiLCJkZXBSZXF1aXJlIiwic3ViS2V5IiwiciIsImRlZmF1bHQiLCJnZXRSdWxlQmFzZSIsInJlZ2lzdGVyQ2xhc3MiLCJjbGFzc05hbWUiLCJ0eXBlcyIsInRhcmdldCIsImRlZmluZVN5bSIsIm1hcCIsInR5cGUiLCJCb29sZWFuIiwiaW50ZXJmYWNlRGVmIiwic2hhcmVkSW5zdGFuY2VzIiwicHJvdmlkZXIiLCJjb25zdHJ1Y3RvciIsIm1ha2VQcm92aWRlciIsInNoYXJlSW50ZXJmYWNlIiwicmVzb2x2ZWRQYXJhbXMiLCJpbmRleCIsImdldFBhcmFtIiwibWFrZUluc3RhbmNlIiwiaW5zdGFuY2UiLCJmaW5hbGl6ZUluc3RhbmNlQ3JlYXRpb24iLCJyZWdpc3Rlckluc3RhbmNlIiwiY2FsbHNSZXR1cm4iLCJydW5DYWxscyIsInRoZW4iLCJnZXRTdWJzdGl0dXRpb25QYXJhbSIsImNhbGxiYWNrIiwiZ2V0VmFsdWUiLCJyZXF1aXJlIiwic2xpY2UiLCJpbnN0YW5jZVJ1bGUiLCJvIiwicmVzb2x2ZUZ1bmN0aW9uIiwiZmFjdG9yeSIsImludGVyZmFjZSIsInJ1bGVCYXNlIiwiZnVsbFN0YWNrIiwicmV2ZXJzZSIsImMiLCJwYXJlbnRQcm90byIsImFkZCIsIm1peGluc1J1bGUiLCJtaXhpbnNHcm91cCIsIm1peGluc0dyb3VwcyIsInJ1bGVDb2xsZWN0RXh0ZW5kc1JlY3Vyc2l2ZSIsIm1peGluR3JvdXAiLCJtaXhpbiIsIkFycmF5IiwibWl4aW5zIiwiZXh0ZW5kUnVsZSIsIm1lcmdlRXh0ZW5kIiwiYXN5bmNDYWxsc1BhcmFtc1NlcmllIiwiZXh0ZW5kUnVsZXMiLCJoYXNBc3luYyIsImNhbGxlcnMiLCJtYWtlQ2FsbCIsImNhbGxSZXR1cm4iLCJtYWtlQ2FsbHMiLCJjYWxsZXJzUmV0dXJuIiwiY2FsbGVyIiwiYWxsIiwiY2FsbGVyUmV0dXJuIiwic3ltbmFtZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJzdHIiLCJyZXNvbHZlZCIsImRlcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0lBRXFCQSxTOzs7QUFFcEIsdUJBb0JPO0FBQUEsbUZBQUgsRUFBRztBQUFBLDBCQW5CTkMsS0FtQk07QUFBQSxRQW5CTkEsS0FtQk0sMkJBbkJFLEVBbUJGO0FBQUEsaUNBakJOQyxZQWlCTTtBQUFBLFFBakJOQSxZQWlCTSxrQ0FqQlMsRUFpQlQ7QUFBQSxxQ0FmTkMseUJBZU07QUFBQSxRQWZOQSx5QkFlTSxzQ0Fmc0IsTUFldEI7QUFBQSxpQ0FkTkMsWUFjTTtBQUFBLFFBZE5BLFlBY00sa0NBZFMsRUFjVDtBQUFBLHFDQWJOQyxrQkFhTTtBQUFBLFFBYk5BLGtCQWFNLHNDQWJlLENBQUMsSUFBRCxDQWFmO0FBQUEscUNBWk5DLG9CQVlNO0FBQUEsUUFaTkEsb0JBWU0sc0NBWmlCLFVBQUNDLElBQUQ7QUFBQSxhQUFRQSxJQUFSO0FBQUEsS0FZakI7QUFBQSwrQkFWTkMsVUFVTTtBQUFBLFFBVk5BLFVBVU0sZ0NBVk8sV0FVUDtBQUFBLG1DQVROQyxjQVNNO0FBQUEsUUFUTkEsY0FTTSxvQ0FUVyxJQVNYO0FBQUEscUNBUk5DLG1CQVFNO0FBQUEsUUFSTkEsbUJBUU0sc0NBUmdCLElBUWhCO0FBQUEsbUNBUE5DLGNBT007QUFBQSxRQVBOQSxjQU9NLG9DQVBXLElBT1g7QUFBQSw4QkFMTkMsU0FLTTtBQUFBLFFBTE5BLFNBS00sK0JBTE0sS0FLTjtBQUFBLG1DQUhOQyxjQUdNO0FBQUEsUUFITkEsY0FHTTtBQUFBLHFDQUZOQyxpQkFFTTtBQUFBLFFBRk5BLGlCQUVNLHNDQUZjLGtCQUVkOztBQUFBO0FBRU4sU0FBS0MsWUFBTCxHQUFvQixxQkFBTyxXQUFQLENBQXBCO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQixxQkFBTyxPQUFQLENBQXJCO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0IsRUFBeEI7QUFDQSxTQUFLQyxnQkFBTCxHQUF3QixFQUF4QjtBQUVBLFNBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxTQUFLZCxrQkFBTCxHQUEwQkEsa0JBQTFCO0FBQ0EsU0FBS0YseUJBQUwsR0FBaUNBLHlCQUFqQztBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsU0FBS2dCLHVCQUFMLENBQTZCZCxvQkFBN0I7QUFDQSxTQUFLZSxrQkFBTCxHQUEwQixJQUFJQyxNQUFKLENBQVcsUUFBTSxLQUFLakIsa0JBQUwsQ0FBd0JrQixJQUF4QixDQUE2QixHQUE3QixDQUFOLEdBQXdDLElBQW5ELENBQTFCO0FBRUEsU0FBS2QsY0FBTCxHQUFzQkEsa0JBQWtCRCxVQUF4QztBQUNBLFNBQUtFLG1CQUFMLEdBQTJCQSx1QkFBdUJGLFVBQWxEO0FBQ0EsU0FBS0csY0FBTCxHQUFzQkEsa0JBQWtCSCxVQUF4QztBQUVBLFNBQUtnQixrQkFBTCxHQUEwQixDQUFDLFdBQUQsRUFBYSxPQUFiLENBQTFCO0FBQ0EsU0FBS0Msa0JBQUwsQ0FBd0JqQixVQUF4QixFQUFvQyxZQUFwQztBQUNBLFNBQUtpQixrQkFBTCxDQUF3QixLQUFLaEIsY0FBN0IsRUFBNkMsZ0JBQTdDO0FBQ0EsU0FBS2dCLGtCQUFMLENBQXdCLEtBQUtmLG1CQUE3QixFQUFrRCxxQkFBbEQ7QUFDQSxTQUFLZSxrQkFBTCxDQUF3QixLQUFLZCxjQUE3QixFQUE2QyxnQkFBN0M7O0FBRUEsUUFBR0csa0JBQWtCWSxPQUFsQixDQUEwQmIsY0FBMUIsTUFBOEMsQ0FBQyxDQUFsRCxFQUFvRDtBQUNuREMsd0JBQWtCYSxPQUFsQixDQUEwQmQsY0FBMUI7QUFDQTs7QUFDRCxTQUFLZSxnQkFBTCxHQUF3QiwrQkFBaUJkLGlCQUFqQixDQUF4QjtBQUNBLFNBQUtlLGNBQUwsR0FBc0JoQixjQUF0Qjs7QUFFQSxRQUFHRCxTQUFILEVBQWE7QUFDWixXQUFLa0IsWUFBTCxDQUFrQmxCLFNBQWxCO0FBQ0E7O0FBRUQsU0FBS1YsWUFBTCxHQUFvQjtBQUVuQjZCLHlCQUFtQixJQUZBO0FBR25CQyx3QkFBa0IsS0FIQztBQUluQkMscUJBQWUsRUFKSTtBQU1uQkMsY0FBUSxLQU5XO0FBT25CQyxrQkFBWUMsU0FQTztBQVFuQkMsZ0JBQVVELFNBUlM7QUFTbkJFLGNBQVFGLFNBVFc7QUFXbkJHLGFBQU8sRUFYWTtBQVluQkMsaUJBQVcsRUFaUTtBQWNuQkMscUJBQWUsRUFkSTtBQWVuQkMsb0JBQWMsRUFmSztBQWlCbkJDLGlCQUFXUCxTQWpCUTtBQW1CbkJRLG9CQUFjLEtBbkJLO0FBb0JuQkMsdUJBQWlCLEtBcEJFO0FBc0JuQkMsaUJBQVcsS0F0QlE7QUF3Qm5CQyxnQkFBVSxLQXhCUztBQXlCbkJ4QyxZQUFNNkI7QUF6QmEsS0FBcEI7QUE0QkEsU0FBS1ksZUFBTCxDQUFxQjlDLFlBQXJCO0FBQ0EsU0FBS0QsS0FBTCxHQUFhLEVBQWI7QUFFQSxTQUFLZ0QsZ0JBQUw7QUFDQSxTQUFLQyxRQUFMLENBQWNqRCxLQUFkO0FBRUE7Ozs7MkJBRU1rRCxHLEVBQUtDLEssRUFBTTtBQUFBOztBQUNqQixVQUFHLHNCQUFPRCxHQUFQLE1BQWUsUUFBbEIsRUFBMkI7QUFDMUIsMkJBQVlBLEdBQVosRUFBaUJFLE9BQWpCLENBQXlCO0FBQUEsaUJBQUcsTUFBS0MsTUFBTCxDQUFZQyxDQUFaLEVBQWVKLElBQUlJLENBQUosQ0FBZixDQUFIO0FBQUEsU0FBekI7QUFDQTtBQUNBOztBQUNELGNBQU9KLEdBQVA7QUFDQyxhQUFLLDRCQUFMO0FBQ0EsYUFBSyxvQkFBTDtBQUNBLGFBQUssWUFBTDtBQUNBLGFBQUssZ0JBQUw7QUFDQSxhQUFLLHFCQUFMO0FBQ0EsYUFBSyxnQkFBTDtBQUNDLGVBQUtBLEdBQUwsSUFBWUMsS0FBWjtBQUNEOztBQUNBLGFBQUssV0FBTDtBQUNDLGVBQUt0QixZQUFMLENBQWtCc0IsS0FBbEI7QUFDRDs7QUFDQSxhQUFLLHNCQUFMO0FBQ0MsZUFBS2hDLHVCQUFMLENBQTZCZ0MsS0FBN0I7QUFDRDs7QUFDQSxhQUFLLGNBQUw7QUFDQyxlQUFLSixlQUFMLENBQXFCSSxLQUFyQjtBQUNEO0FBQ0E7O0FBQ0E7QUFDQyxnQkFBTSxJQUFJSSxLQUFKLENBQVUsMkJBQXlCTCxHQUFuQyxDQUFOO0FBQ0Q7QUFyQkQ7QUF1QkE7OztvQ0FFZWpELFksRUFBYTtBQUM1QixXQUFLQSxZQUFMLDhCQUNJLEtBQUtBLFlBRFQsRUFFSUEsWUFGSjtBQUlBOzs7NENBRXVCSSxvQixFQUFxQjtBQUU1QyxVQUFHLHNCQUFPQSxvQkFBUCxLQUErQixRQUFsQyxFQUEyQztBQUUxQyxZQUFNbUQsV0FBV25ELG9CQUFqQjs7QUFDQUEsK0JBQXVCLDhCQUFDQyxJQUFELEVBQVE7QUFDOUIsNkJBQVlrRCxRQUFaLEVBQXNCSixPQUF0QixDQUE4QixpQkFBTztBQUNwQyxnQkFBTUssV0FBV0QsU0FBU0UsS0FBVCxDQUFqQjs7QUFDQSxnQkFBR3BELFFBQVFvRCxLQUFYLEVBQWlCO0FBQ2hCcEQscUJBQU9tRCxRQUFQO0FBQ0EsYUFGRCxNQUdLLElBQUduRCxLQUFLcUQsTUFBTCxDQUFZLENBQVosRUFBY0QsTUFBTUUsTUFBTixHQUFhLENBQTNCLEtBQStCRixRQUFNLEdBQXhDLEVBQTRDO0FBQ2hEcEQscUJBQU9tRCxXQUFTbkQsS0FBS3FELE1BQUwsQ0FBWUQsTUFBTUUsTUFBbEIsQ0FBaEI7QUFDQTtBQUNELFdBUkQ7QUFTQSxpQkFBT3RELElBQVA7QUFDQSxTQVhEO0FBWUE7O0FBRUQsV0FBS0Qsb0JBQUwsR0FBNEJBLG9CQUE1QjtBQUNBOzs7aUNBRVlNLFMsRUFBVTtBQUN0QixVQUFHQSxjQUFZLElBQWYsRUFBb0I7QUFDbkJBLG9CQUFZLElBQVo7QUFDQTs7QUFDRGtELGFBQU9sRCxTQUFQLElBQW9CLCtCQUFpQixJQUFqQixDQUFwQjtBQUNBOzs7OEJBRVNtRCxJLEVBQUs7QUFBQTs7QUFDZCx5QkFBWUEsSUFBWixFQUFrQlYsT0FBbEIsQ0FBMEIsa0JBQVE7QUFDakMsWUFBTVcsVUFBVUQsS0FBS0UsTUFBTCxDQUFoQjs7QUFFQSxZQUFHRCxzQ0FBSCxFQUFpQztBQUNoQyxpQkFBSzdDLFFBQUwsQ0FBYzhDLE1BQWQsSUFBd0JELFFBQVFFLGFBQVIsRUFBeEI7QUFDQTtBQUNBOztBQUVERixnQkFBUUcsSUFBUixHQUFlZCxPQUFmLENBQXVCLFVBQUNlLFFBQUQsRUFBWTtBQUVsQyxjQUFJakIsTUFBTWlCLFFBQVY7O0FBQ0EsY0FBR2pCLElBQUlTLE1BQUosQ0FBVyxDQUFYLEVBQWEsQ0FBYixLQUFpQixJQUFwQixFQUF5QjtBQUN4QlQsa0JBQU1BLElBQUlTLE1BQUosQ0FBVyxDQUFYLENBQU47QUFDQTs7QUFFRFQsZ0JBQU1jLFNBQU8sR0FBUCxHQUFXZCxJQUFJUyxNQUFKLENBQVcsQ0FBWCxFQUFjVCxJQUFJa0IsV0FBSixDQUFnQixHQUFoQixLQUF3QmxCLElBQUlVLE1BQTFDLENBQWpCOztBQUNBLGNBQUdWLElBQUltQixLQUFKLENBQVUsR0FBVixFQUFlQyxHQUFmLE1BQXNCLE9BQXpCLEVBQWlDO0FBQ2hDcEIsa0JBQU1BLElBQUlTLE1BQUosQ0FBVyxDQUFYLEVBQWNULElBQUlrQixXQUFKLENBQWdCLEdBQWhCLENBQWQsQ0FBTjtBQUNBOztBQUNELGlCQUFLbEQsUUFBTCxDQUFjZ0MsR0FBZCxJQUFxQmEsUUFBUUksUUFBUixDQUFyQjtBQUNBLFNBWkQ7QUFhQSxPQXJCRDtBQXNCQTs7OzZCQUdRbkUsSyxFQUFNO0FBQUE7O0FBQ2QsVUFBRyxPQUFPQSxLQUFQLElBQWdCLFVBQW5CLEVBQThCO0FBQzdCQSxnQkFBUUEsTUFBTSxJQUFOLENBQVI7QUFDQTs7QUFDRCx5QkFBWUEsS0FBWixFQUFtQm9ELE9BQW5CLENBQTJCO0FBQUEsZUFBaUIsT0FBS21CLE9BQUwsQ0FBYUMsYUFBYixFQUE0QnhFLE1BQU13RSxhQUFOLENBQTVCLEVBQWtELEtBQWxELENBQWpCO0FBQUEsT0FBM0I7QUFDQSxXQUFLQyxtQkFBTDtBQUNBOzs7NEJBQ09ELGEsRUFBZUUsSSxFQUE0QjtBQUFBLFVBQXRCQyxjQUFzQix1RUFBTCxJQUFLOztBQUNsRCxVQUFHLE9BQU9ELElBQVAsSUFBZSxVQUFsQixFQUE2QjtBQUM1QkEsZUFBT0EsS0FBSyxJQUFMLENBQVA7QUFDQTs7QUFFRCxVQUFHLEtBQUsxRSxLQUFMLENBQVd3RSxhQUFYLE1BQThCckMsU0FBakMsRUFBMkM7QUFDMUMsYUFBS25DLEtBQUwsQ0FBV3dFLGFBQVgsSUFBNEIsS0FBS0ksU0FBTCxDQUFlLEVBQWYsRUFBbUIsS0FBSzNFLFlBQXhCLENBQTVCO0FBQ0E7O0FBRUQsV0FBS0QsS0FBTCxDQUFXd0UsYUFBWCxJQUE0QixLQUFLSSxTQUFMLENBQWUsS0FBSzVFLEtBQUwsQ0FBV3dFLGFBQVgsQ0FBZixFQUEwQ0UsSUFBMUMsQ0FBNUI7QUFDQSxXQUFLRyxXQUFMLENBQWlCTCxhQUFqQjtBQUVBRSxhQUFPLEtBQUsxRSxLQUFMLENBQVd3RSxhQUFYLENBQVA7QUFaa0Qsa0JBYy9CRSxJQWQrQjtBQUFBLFVBYzVDdEMsUUFkNEMsU0FjNUNBLFFBZDRDOztBQWVsRCxVQUFHQSxRQUFILEVBQVk7QUFDWCxZQUFHQSxxQ0FBSCxFQUFnQztBQUMvQkEscUJBQVdBLFNBQVMwQyxXQUFULEVBQVg7QUFDQTs7QUFDRCxhQUFLQyxlQUFMLENBQXFCUCxhQUFyQixFQUFvQ3BDLFFBQXBDO0FBQ0E7O0FBRUQsVUFBR3VDLGNBQUgsRUFBa0I7QUFDakIsYUFBS0YsbUJBQUw7QUFDQTtBQUVEOzs7dUNBRWtCdEIsSyxFQUFPNkIsUSxFQUFTO0FBQ2xDLFVBQUcsS0FBS3pELGtCQUFMLENBQXdCRSxPQUF4QixDQUFnQzBCLEtBQWhDLE1BQXlDLENBQUMsQ0FBN0MsRUFBK0M7QUFDOUMsY0FBTSxJQUFJSSxLQUFKLENBQVUsbUJBQWlCSixLQUFqQixHQUF1QixrQkFBdkIsR0FBMEM2QixRQUExQyxHQUFtRCxzQkFBbkQsR0FBMEUsS0FBS3pELGtCQUFMLENBQXdCRCxJQUF4QixDQUE2QixLQUE3QixDQUFwRixDQUFOO0FBQ0E7QUFDRDs7O3VDQUVpQjtBQUNqQixXQUFLMkQsU0FBTCxDQUFlLEtBQUs5RSxZQUFwQjtBQUNBLFdBQUsrRSxrQkFBTCxDQUF3QixLQUFLaEUsUUFBN0I7QUFDQTs7OzBDQUNvQjtBQUFBOztBQUNwQix5QkFBWSxLQUFLbEIsS0FBakIsRUFBd0JvRCxPQUF4QixDQUFnQyxlQUFLO0FBQ3BDLGVBQUsrQixZQUFMLENBQWtCakMsR0FBbEI7QUFDQSxPQUZEO0FBR0E7OztpQ0FFWUEsRyxFQUFjO0FBQUE7O0FBQUEsVUFBVGtDLEtBQVMsdUVBQUgsRUFBRztBQUMxQixVQUFNOUMsUUFBUSxFQUFkO0FBQ0EsVUFBTUMsWUFBWSxFQUFsQjtBQUVBLFVBQU1tQyxPQUFPLEtBQUsxRSxLQUFMLENBQVdrRCxHQUFYLENBQWI7O0FBRUEsVUFBRyxDQUFDd0IsS0FBS3BDLEtBQVQsRUFBZTtBQUNkO0FBQ0E7O0FBRURvQyxXQUFLcEMsS0FBTCxDQUFXYyxPQUFYLENBQW1CLG1CQUFXO0FBQzdCLFlBQUcsT0FBT2lDLE9BQVAsSUFBa0IsVUFBckIsRUFBZ0M7QUFDL0JBLG9CQUFVLENBQUNBLE9BQUQsQ0FBVjtBQUNBOztBQUg0Qix1QkFJQ0EsT0FKRDtBQUFBO0FBQUEsWUFJdEJDLE1BSnNCO0FBQUE7QUFBQSxZQUlkakQsTUFKYywyQkFJTCxFQUpLOztBQUs3QixZQUFJLE9BQUtrRCxtQkFBTCxDQUF5QmxELE1BQXpCLEVBQWlDLENBQUVhLEdBQUYsQ0FBakMsQ0FBSixFQUErQztBQUM5Q1gsb0JBQVVpRCxJQUFWLENBQWVILE9BQWY7QUFDQSxTQUZELE1BR0k7QUFDSC9DLGdCQUFNa0QsSUFBTixDQUFXSCxPQUFYO0FBQ0E7QUFDRCxPQVhEO0FBYUFYLFdBQUtwQyxLQUFMLEdBQWFBLEtBQWI7QUFDQW9DLFdBQUtuQyxTQUFMLEdBQWlCLENBQUNtQyxLQUFLbkMsU0FBTCxJQUFrQixFQUFuQixFQUF1QmtELE1BQXZCLENBQThCbEQsU0FBOUIsQ0FBakI7QUFDQTs7O3dDQUNtQkYsTSxFQUFpQjtBQUFBOztBQUFBLFVBQVQrQyxLQUFTLHVFQUFILEVBQUc7QUFDcEMsYUFBTyxtQkFBWS9DLE1BQVosRUFBb0JxRCxJQUFwQixDQUF5QixhQUFHO0FBQ2xDLFlBQU1DLFFBQVF0RCxPQUFPaUIsQ0FBUCxDQUFkOztBQUNBLFlBQU1zQyxJQUFJLE9BQUtDLFdBQUwsQ0FBaUJGLEtBQWpCLEVBQXdCLE9BQUtuRixjQUE3QixDQUFWOztBQUNBLFlBQUdvRixnQ0FBSCxFQUEwQjtBQUN6QixjQUFNcEIsZ0JBQWdCb0IsRUFBRUUsT0FBRixFQUF0Qjs7QUFFQSxjQUFHLENBQUMsT0FBS0MsaUJBQUwsQ0FBdUJ2QixhQUF2QixFQUFzQyxFQUF0QyxFQUEwQyxLQUExQyxDQUFKLEVBQXFEO0FBQ3BEO0FBQ0EsbUJBQU8sS0FBUDtBQUNBOztBQUVELGNBQU13QixZQUFZLE9BQUtDLE9BQUwsQ0FBYXpCLGFBQWIsQ0FBbEI7O0FBRUEsY0FBR1ksTUFBTTNELE9BQU4sQ0FBYytDLGFBQWQsTUFBK0IsQ0FBQyxDQUFuQyxFQUFxQztBQUNwQyxtQkFBTyxJQUFQO0FBQ0E7O0FBRURZLGdCQUFNSSxJQUFOLENBQVdoQixhQUFYO0FBRUEsY0FBSTBCLE1BQUo7O0FBRUEsY0FBR0YsVUFBVTNELE1BQWIsRUFBb0I7QUFDbkI2RCxxQkFBUyxPQUFLWCxtQkFBTCxDQUF5QlMsVUFBVTNELE1BQW5DLEVBQTJDK0MsS0FBM0MsQ0FBVDtBQUNBOztBQUVELGNBQUcsQ0FBQ2MsTUFBSixFQUFXO0FBQ1ZBLHFCQUFTRixVQUFVMUQsS0FBVixDQUFnQm9ELElBQWhCLENBQXFCLGlCQUFPO0FBQUEsd0RBQ0xTLEtBREs7QUFBQSxrQkFDN0JiLE1BRDZCO0FBQUE7QUFBQSxrQkFDckJqRCxNQURxQix3QkFDWixFQURZOztBQUVwQyxxQkFBTyxPQUFLa0QsbUJBQUwsQ0FBeUJsRCxNQUF6QixFQUFpQytDLEtBQWpDLENBQVA7QUFDQSxhQUhRLENBQVQ7QUFJQTs7QUFFRCxpQkFBT2MsTUFBUDtBQUVBOztBQUNELFlBQUcsc0JBQU9OLENBQVAsS0FBWSxRQUFaLElBQXdCQSxNQUFNLElBQTlCLElBQXNDLEVBQUVBLHlCQUFGLENBQXpDLEVBQTZEO0FBQzVELGlCQUFPLE9BQUtMLG1CQUFMLENBQXlCSyxDQUF6QixFQUE0QlIsS0FBNUIsQ0FBUDtBQUNBO0FBQ0QsT0F0Q00sQ0FBUDtBQXVDQTs7O2dDQUVXbEMsRyxFQUFnQjtBQUFBOztBQUFBLFVBQVhrQyxLQUFXLHVFQUFILEVBQUc7O0FBQzNCLFVBQUcsS0FBS3BGLEtBQUwsQ0FBV2tELEdBQVgsTUFBb0JmLFNBQXZCLEVBQWlDO0FBQ2hDLGFBQUtuQyxLQUFMLENBQVdrRCxHQUFYLElBQWtCLEtBQUswQixTQUFMLENBQWUsRUFBZixFQUFtQixLQUFLM0UsWUFBeEIsQ0FBbEI7QUFDQTs7QUFDRCxVQUFNeUUsT0FBTyxLQUFLMUUsS0FBTCxDQUFXa0QsR0FBWCxDQUFiOztBQUNBLFVBQUd3QixLQUFLeEMsVUFBUixFQUFtQjtBQUNsQixZQUFHa0QsTUFBTTNELE9BQU4sQ0FBY3lCLEdBQWQsTUFBcUIsQ0FBQyxDQUF6QixFQUEyQjtBQUMxQixnQkFBTSxJQUFJSyxLQUFKLENBQVUsMENBQXdDLHdCQUFlNkIsTUFBTUssTUFBTixDQUFhdkMsR0FBYixDQUFmLEVBQWlDLElBQWpDLEVBQXNDLENBQXRDLENBQWxELENBQU47QUFDQTs7QUFDRGtDLGNBQU1JLElBQU4sQ0FBV3RDLEdBQVg7QUFDQSxhQUFLMkIsV0FBTCxDQUFpQkgsS0FBS3hDLFVBQXRCLEVBQWtDa0QsS0FBbEM7QUFDQTs7QUFDRCxVQUFHVixLQUFLaEMsU0FBUixFQUFrQjtBQUNqQmdDLGFBQUt0QyxRQUFMLEdBQWdCLFlBQVU7QUFDekIsaUJBQU9zQyxLQUFLaEMsU0FBWjtBQUNBLFNBRkQ7QUFHQTs7QUFDRCxVQUFHLE9BQU9nQyxLQUFLdEMsUUFBWixJQUF3QixRQUEzQixFQUFvQztBQUNuQyxZQUFNZ0UsZUFBZTFCLEtBQUt0QyxRQUExQjs7QUFDQXNDLGFBQUt0QyxRQUFMLEdBQWdCLFlBQVc7QUFDMUIsY0FBTWlFLGtCQUFrQixPQUFLQyxHQUFMLENBQVNGLFlBQVQsQ0FBeEI7O0FBRDBCLDRDQUFQRyxJQUFPO0FBQVBBLGdCQUFPO0FBQUE7O0FBRTFCLG9EQUFXRixlQUFYLGdCQUE4QkUsSUFBOUI7QUFDQSxTQUhEO0FBSUE7O0FBQ0QsVUFBRyxLQUFLQyx3QkFBTCxDQUE4QnRELEdBQTlCLENBQUgsRUFBc0M7QUFDckMsWUFBR3dCLEtBQUs1QixRQUFSLEVBQWlCO0FBQ2hCLGNBQU14QyxPQUFPb0UsS0FBS3BFLElBQUwsSUFBYTRDLEdBQTFCO0FBQ0EsY0FBTXVELE1BQU0sS0FBS0MsVUFBTCxDQUFnQnhELEdBQWhCLEVBQXFCNUMsSUFBckIsQ0FBWjs7QUFDQSxjQUFHbUcsR0FBSCxFQUFPO0FBQ04saUJBQUsxQixlQUFMLENBQXFCN0IsR0FBckIsRUFBMEJ1RCxHQUExQjtBQUNBO0FBQ0Q7QUFDRDtBQUNEOzs7NkNBRXdCRSxJLEVBQUs7QUFDN0IsVUFBR0EsS0FBS2hELE1BQUwsQ0FBWSxDQUFaLEVBQWMsQ0FBZCxNQUFtQixHQUF0QixFQUEwQjtBQUN6QixlQUFPLEtBQVA7QUFDQTs7QUFDRCxhQUFPLElBQVA7QUFDQTs7OytCQUVVVCxHLEVBQUswRCxXLEVBQVk7QUFBQTs7QUFDM0IsVUFBRyxLQUFLMUYsUUFBTCxDQUFjZ0MsR0FBZCxDQUFILEVBQXNCO0FBQ3JCLGVBQU8sS0FBS2hDLFFBQUwsQ0FBY2dDLEdBQWQsQ0FBUDtBQUNBOztBQUVEMEQsb0JBQWMsS0FBS3ZHLG9CQUFMLENBQTBCdUcsV0FBMUIsQ0FBZDtBQUVBLFVBQU1DLFFBQVEsS0FBS3pHLGtCQUFMLENBQXdCcUYsTUFBeEIsQ0FBK0IsRUFBL0IsRUFBbUNDLElBQW5DLENBQXlDLGVBQU87QUFFN0QsWUFBTW9CLGdCQUFnQkYsWUFBWXZDLEtBQVosQ0FBa0IsR0FBbEIsQ0FBdEI7QUFHQSxZQUFJL0QsT0FBT3dHLGNBQWNDLEtBQWQsRUFBWDs7QUFDQSxZQUFHQyxHQUFILEVBQU87QUFDTjFHLGtCQUFRLE1BQUkwRyxHQUFaO0FBQ0E7O0FBR0QsWUFBRyxPQUFLQyxTQUFMLENBQWUzRyxJQUFmLENBQUgsRUFBd0I7QUFDdkIsY0FBSTRHLFdBQVcsT0FBS0MsVUFBTCxDQUFnQjdHLElBQWhCLENBQWY7O0FBRUEsY0FBR3dHLGNBQWNsRCxNQUFqQixFQUF3QjtBQUN2QmtELDBCQUFjMUQsT0FBZCxDQUF1QixrQkFBVTtBQUNoQyxrQkFBRyxPQUFPOEQsUUFBUCxLQUFvQixXQUFwQixJQUFtQ0EsYUFBYSxJQUFuRCxFQUF3RDtBQUN2REEsMkJBQVdBLFNBQVNFLE1BQVQsQ0FBWDtBQUNBO0FBQ0QsYUFKRDtBQUtBOztBQUdELGlCQUFLbEcsUUFBTCxDQUFjZ0MsR0FBZCxJQUFxQmdFLFFBQXJCO0FBRUEsaUJBQU8sSUFBUDtBQUNBO0FBRUQsT0E1QmEsQ0FBZDs7QUE2QkEsVUFBSSxDQUFFTCxLQUFGLEtBQWEsS0FBSzNHLHlCQUFMLEtBQWlDLE1BQWpDLElBQTJDMEcsV0FBNUMsSUFBNEQsS0FBSzFHLHlCQUFMLEtBQWlDLElBQXpHLENBQUosRUFBb0g7QUFDbkgsY0FBTSxJQUFJcUQsS0FBSixDQUFVLGlEQUErQ3FELFdBQS9DLEdBQTJELEdBQXJFLENBQU47QUFDQTs7QUFFRCxhQUFPLEtBQUsxRixRQUFMLENBQWNnQyxHQUFkLENBQVA7QUFDQTs7O3VDQUdrQmhDLFEsRUFBUztBQUFBOztBQUMzQix5QkFBWUEsUUFBWixFQUFzQmtDLE9BQXRCLENBQThCLFVBQUN1RCxJQUFELEVBQVE7QUFDckMsZUFBSzVCLGVBQUwsQ0FBcUI0QixJQUFyQixFQUEwQnpGLFNBQVN5RixJQUFULENBQTFCO0FBQ0EsT0FGRDtBQUdBOzs7b0NBQ2VBLEksRUFBS1UsRSxFQUFFO0FBQ3RCLFVBQUcsc0JBQU9BLEVBQVAsS0FBWSxRQUFaLElBQXdCLE9BQU9BLEdBQUVDLE9BQVQsSUFBb0IsVUFBL0MsRUFBMEQ7QUFDekRELGFBQUlBLEdBQUVDLE9BQU47QUFDQTs7QUFDRCxVQUFHLE9BQU9ELEVBQVAsS0FBYSxVQUFoQixFQUEyQjtBQUMxQjtBQUNBOztBQUNELFVBQU0zQyxPQUFPLEtBQUs2QyxXQUFMLENBQWlCWixJQUFqQixDQUFiOztBQUNBLFVBQUdqQyxLQUFLN0IsU0FBTCxJQUFrQndFLEdBQUUsS0FBS3ZHLFlBQVAsQ0FBckIsRUFBMEM7QUFDekN1RztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLFVBQWtCQSxFQUFsQjtBQUNBOztBQUVELFVBQUczQyxLQUFLN0IsU0FBUixFQUFrQjtBQUNqQixhQUFLQSxTQUFMLENBQWU4RCxJQUFmLEVBQXFCVSxFQUFyQjtBQUNBLE9BRkQsTUFHSTtBQUNILGFBQUtHLGFBQUwsQ0FBbUJiLElBQW5CLEVBQXlCVSxFQUF6QjtBQUNBO0FBQ0Q7Ozs4QkFHU0ksUyxFQUFzQjtBQUFBOztBQUFBLFVBQVhDLEtBQVcsdUVBQUgsRUFBRztBQUMvQixhQUFPLFVBQUNDLE1BQUQsRUFBVTtBQUVoQixnQkFBS0MsU0FBTCxDQUFlRCxNQUFmLEVBQXVCLFFBQUs3RyxZQUE1QixFQUEwQzJHLFNBQTFDOztBQUVBLGdCQUFLRCxhQUFMLENBQW1CQyxTQUFuQixFQUE4QkUsTUFBOUI7O0FBRUEsWUFBRyxPQUFPRCxLQUFQLElBQWdCLFVBQW5CLEVBQThCO0FBQzdCQSxrQkFBUUEsT0FBUjtBQUNBOztBQUNEQSxnQkFBUUEsTUFBTUcsR0FBTixDQUFVO0FBQUEsaUJBQVEsUUFBS2hDLFdBQUwsQ0FBaUJpQyxJQUFqQixFQUF1QixRQUFLckgsbUJBQTVCLENBQVI7QUFBQSxTQUFWLENBQVI7O0FBRUEsWUFBSWtILE9BQU8sUUFBSzVHLGFBQVosQ0FBSixFQUFnQztBQUMvQjJHLGtCQUFRQSxNQUFNakMsTUFBTixDQUFha0MsT0FBTyxRQUFLNUcsYUFBWixDQUFiLENBQVI7QUFDQTs7QUFDRCxnQkFBSzZHLFNBQUwsQ0FBZUQsTUFBZixFQUF1QixRQUFLNUcsYUFBNUIsRUFBMkMyRyxLQUEzQzs7QUFFQSxlQUFPQyxNQUFQO0FBQ0EsT0FqQkQ7QUFrQkE7OzsyQkFFTWhCLEksRUFBSztBQUNYLGFBQU9vQixRQUFRLEtBQUsvSCxLQUFMLENBQVcyRyxJQUFYLENBQVIsQ0FBUDtBQUNBOzs7d0JBRUdxQixZLEVBQWN6QixJLEVBQXVDO0FBQUEsVUFBakMwQixlQUFpQyx1RUFBZixFQUFlO0FBQUEsVUFBWDdDLEtBQVcsdUVBQUgsRUFBRztBQUN4RCxhQUFPLEtBQUs4QyxRQUFMLENBQWNGLFlBQWQsRUFBNEJ6QixJQUE1QixFQUFrQzBCLGVBQWxDLEVBQW1EN0MsS0FBbkQsQ0FBUDtBQUNBOzs7NkJBQ1FaLGEsRUFBYztBQUV0QixVQUFHLE9BQU9BLGFBQVAsSUFBd0IsVUFBM0IsRUFBc0M7QUFDckNBLHdCQUFnQkEsY0FBYyxLQUFLMUQsWUFBbkIsQ0FBaEI7O0FBQ0EsWUFBRyxDQUFDMEQsYUFBSixFQUFrQjtBQUNqQixnQkFBTSxJQUFJakIsS0FBSixDQUFVLHVCQUFxQmlCLGNBQWMyRCxXQUFkLENBQTBCeEIsSUFBekQsQ0FBTjtBQUNBO0FBQ0Q7O0FBRUQsVUFBR25DLDRDQUFILEVBQXNDO0FBQ3JDQSx3QkFBZ0JBLGNBQWNzQixPQUFkLEVBQWhCO0FBQ0E7O0FBRUQsVUFBRyxDQUFDLEtBQUs5RSxnQkFBTCxDQUFzQndELGFBQXRCLENBQUosRUFBeUM7QUFDeEMsYUFBS3hELGdCQUFMLENBQXNCd0QsYUFBdEIsSUFBdUMsS0FBSzRELFlBQUwsQ0FBa0I1RCxhQUFsQixDQUF2QztBQUNBOztBQUNELGFBQU8sS0FBS3hELGdCQUFMLENBQXNCd0QsYUFBdEIsQ0FBUDtBQUNBOzs7aUNBRVlBLGEsRUFBYztBQUFBOztBQUMxQixVQUFNRSxPQUFPLEtBQUt1QixPQUFMLENBQWF6QixhQUFiLENBQWI7QUFDQSxVQUFNcEMsV0FBVyxLQUFLMkQsaUJBQUwsQ0FBdUJ2QixhQUF2QixDQUFqQjtBQUNBLGFBQU8sVUFBQytCLElBQUQsRUFBTzBCLGVBQVAsRUFBd0I3QyxLQUF4QixFQUFnQztBQUV0QztBQUNBLFlBQUcsUUFBS25FLGdCQUFMLENBQXNCdUQsYUFBdEIsQ0FBSCxFQUF3QztBQUN2QyxpQkFBTyxRQUFLdkQsZ0JBQUwsQ0FBc0J1RCxhQUF0QixDQUFQO0FBQ0E7O0FBRUR5RCwwQkFBa0IscUJBQWMsRUFBZCxFQUFrQkEsZUFBbEIsQ0FBbEI7QUFDQXZELGFBQUtqQyxZQUFMLENBQWtCVyxPQUFsQixDQUEwQiwwQkFBa0I7QUFDM0MsY0FBRyxDQUFDNkUsZ0JBQWdCSSxjQUFoQixDQUFKLEVBQW9DO0FBQ25DSiw0QkFBZ0JJLGNBQWhCLElBQWtDLDRCQUFtQkEsY0FBbkIsVUFBbEM7QUFDQTtBQUNELFNBSkQ7QUFNQSxZQUFJaEcsTUFBSjtBQUNBLFlBQUk5QixVQUFKOztBQUNBLFlBQUdnRyxJQUFILEVBQVE7QUFDUGxFLG1CQUFTa0UsSUFBVDtBQUNBaEcsdUJBQWEsUUFBS0csY0FBbEI7QUFDQSxTQUhELE1BSUk7QUFDSDJCLG1CQUFTcUMsS0FBS3JDLE1BQUwsSUFBZUQsU0FBUyxRQUFLckIsYUFBZCxDQUFmLElBQStDLEVBQXhEO0FBQ0FSLHVCQUFhLFFBQUtDLGNBQWxCO0FBQ0E7O0FBRUQsWUFBTThILGlCQUFpQmpHLE9BQU93RixHQUFQLENBQVcsVUFBQ0csWUFBRCxFQUFlTyxLQUFmLEVBQXVCO0FBQ3hELGlCQUFPLFFBQUtDLFFBQUwsQ0FBY1IsWUFBZCxFQUE0QnRELElBQTVCLEVBQWtDdUQsZUFBbEMsRUFBbUQxSCxVQUFuRCxFQUErRGdJLEtBQS9ELEVBQXNFbkQsS0FBdEUsQ0FBUDtBQUNBLFNBRnNCLENBQXZCLENBekJzQyxDQTZCdEM7O0FBQ0EsWUFBRyxRQUFLbkUsZ0JBQUwsQ0FBc0J1RCxhQUF0QixDQUFILEVBQXdDO0FBQ3ZDLGlCQUFPLFFBQUt2RCxnQkFBTCxDQUFzQnVELGFBQXRCLENBQVA7QUFDQTs7QUFFRCxZQUFNaUUsZUFBZSxTQUFmQSxZQUFlLENBQUNILGNBQUQsRUFBa0I7QUFFdENBLDJCQUFpQiwrQ0FBaUNqRyxNQUFqQyxFQUF5Q2lHLGNBQXpDLENBQWpCO0FBRUEsY0FBTUksOENBQWV0RyxRQUFmLGlEQUEyQmtHLGNBQTNCLE1BQU47O0FBRUEsY0FBTUssMkJBQTJCLFNBQTNCQSx3QkFBMkIsR0FBSTtBQUNwQyxnQkFBR2pFLEtBQUt6QyxNQUFSLEVBQWU7QUFDZCxzQkFBSzJHLGdCQUFMLENBQXNCcEUsYUFBdEIsRUFBcUNrRSxRQUFyQztBQUNBOztBQUVELGdCQUFNRyxjQUFjLFFBQUtDLFFBQUwsQ0FBY3BFLEtBQUtuQyxTQUFuQixFQUE4Qm1HLFFBQTlCLEVBQXdDaEUsSUFBeEMsRUFBOEN1RCxlQUE5QyxDQUFwQjs7QUFDQSxnQkFBR1ksdUJBQXVCLFFBQUtsSCxnQkFBL0IsRUFBZ0Q7QUFDL0MscUJBQU9rSCxZQUFZRSxJQUFaLENBQWlCO0FBQUEsdUJBQUlMLFFBQUo7QUFBQSxlQUFqQixDQUFQO0FBQ0E7O0FBRUQsbUJBQU9BLFFBQVA7QUFDQSxXQVhEOztBQWFBLGNBQU1HLGNBQWMsUUFBS0MsUUFBTCxDQUFjcEUsS0FBS3BDLEtBQW5CLEVBQTBCb0csUUFBMUIsRUFBb0NoRSxJQUFwQyxFQUEwQ3VELGVBQTFDLENBQXBCOztBQUNBLGNBQUdZLHVCQUF1QixRQUFLbEgsZ0JBQS9CLEVBQWdEO0FBQy9DLG1CQUFPa0gsWUFBWUUsSUFBWixDQUFpQjtBQUFBLHFCQUFJSiwwQkFBSjtBQUFBLGFBQWpCLENBQVA7QUFDQTs7QUFFRCxpQkFBT0EsMEJBQVA7QUFDQSxTQXpCRDs7QUEwQkEsWUFBRyxtQ0FBcUJ0RyxNQUFyQixFQUE2QmlHLGNBQTdCLEVBQTZDLFFBQUszRyxnQkFBbEQsQ0FBSCxFQUF1RTtBQUN0RSxpQkFBTyw0Q0FBOEJVLE1BQTlCLEVBQXNDaUcsY0FBdEMsRUFBc0QsUUFBSzNHLGdCQUEzRCxFQUE2RSxRQUFLQyxjQUFsRixFQUFtR21ILElBQW5HLENBQXdHLDBCQUFnQjtBQUM5SCxtQkFBT04sYUFBYUgsY0FBYixDQUFQO0FBQ0EsV0FGTSxDQUFQO0FBR0E7O0FBRUQsZUFBT0csYUFBYUgsY0FBYixDQUFQO0FBQ0EsT0FuRUQ7QUFvRUE7Ozt5Q0FFb0JOLFksRUFBY3RELEksRUFBTTZELEssRUFBTTtBQUM5QyxVQUFNL0YsZ0JBQWdCLEtBQUtxRCxXQUFMLENBQWlCbkIsS0FBS2xDLGFBQXRCLEVBQXFDLEtBQUtoQyxjQUExQyxDQUF0Qjs7QUFFQSxVQUFHLE9BQU8rSCxLQUFQLEtBQWlCLFdBQWpCLElBQWdDL0YsY0FBYytGLEtBQWQsQ0FBbkMsRUFBd0Q7QUFDdkRQLHVCQUFleEYsY0FBYytGLEtBQWQsQ0FBZjtBQUNBUCx1QkFBZSxLQUFLbkMsV0FBTCxDQUFpQm1DLFlBQWpCLEVBQStCLEtBQUt4SCxjQUFwQyxFQUFvRCxJQUFwRCxDQUFmO0FBQ0E7O0FBRUQsVUFBR3dILDJDQUFILEVBQXFDO0FBQ3BDLFlBQU14RCxnQkFBZ0J3RCxhQUFhbEMsT0FBYixFQUF0Qjs7QUFDQSxZQUFHdEQsY0FBY2dDLGFBQWQsQ0FBSCxFQUFnQztBQUMvQndELHlCQUFleEYsY0FBY2dDLGFBQWQsQ0FBZjtBQUNBd0QseUJBQWUsS0FBS25DLFdBQUwsQ0FBaUJtQyxZQUFqQixFQUErQixLQUFLeEgsY0FBcEMsRUFBb0QsSUFBcEQsQ0FBZjtBQUNBO0FBRUQ7O0FBQ0QsYUFBT3dILFlBQVA7QUFDQTs7OzZCQUNRQSxZLEVBQWN0RCxJLEVBQU11RCxlLEVBQXlFO0FBQUE7O0FBQUEsVUFBeEQxSCxVQUF3RCx1RUFBM0MsV0FBMkM7QUFBQSxVQUE5QmdJLEtBQThCLHVFQUF0QnBHLFNBQXNCO0FBQUEsVUFBWGlELEtBQVcsdUVBQUgsRUFBRztBQUVyRzRDLHFCQUFlLEtBQUtuQyxXQUFMLENBQWlCbUMsWUFBakIsRUFBK0J6SCxVQUEvQixDQUFmO0FBRUF5SCxxQkFBZSxLQUFLZ0Isb0JBQUwsQ0FBMEJoQixZQUExQixFQUF3Q3RELElBQXhDLEVBQThDNkQsS0FBOUMsQ0FBZjs7QUFFQSxVQUFHUCx3Q0FBSCxFQUFtQztBQUNsQyxlQUFPQSxhQUFhaUIsUUFBYixDQUFzQmhCLGVBQXRCLENBQVA7QUFDQTs7QUFDRCxVQUFHRCx1Q0FBSCxFQUFpQztBQUNoQyxlQUFPQSxhQUFha0IsUUFBYixFQUFQO0FBQ0E7O0FBQ0QsVUFBR2xCLHdDQUFILEVBQW1DO0FBQ2xDLGVBQU9BLGFBQWFtQixPQUFiLEVBQVA7QUFDQTs7QUFFRCxVQUFHbkIsMkNBQUgsRUFBcUM7QUFFcEMsWUFBTXhELGdCQUFnQndELGFBQWFsQyxPQUFiLEVBQXRCO0FBRUFWLGdCQUFRQSxNQUFNZ0UsS0FBTixDQUFZLENBQVosQ0FBUjs7QUFDQSxZQUFHaEUsTUFBTTNELE9BQU4sQ0FBYytDLGFBQWQsTUFBK0IsQ0FBQyxDQUFuQyxFQUFxQztBQUNwQyxnQkFBTSxJQUFJakIsS0FBSixDQUFVLGdDQUE4Qix3QkFBZTZCLE1BQU1LLE1BQU4sQ0FBYWpCLGFBQWIsQ0FBZixFQUEyQyxJQUEzQyxFQUFnRCxDQUFoRCxDQUF4QyxDQUFOO0FBQ0E7O0FBQ0RZLGNBQU1JLElBQU4sQ0FBV2hCLGFBQVg7QUFFQSxZQUFJa0UsUUFBSjs7QUFFQSxZQUFHVCxnQkFBZ0J6RCxhQUFoQixDQUFILEVBQWtDO0FBQ2pDa0UscUJBQVdULGdCQUFnQnpELGFBQWhCLEVBQStCOEIsR0FBL0IsQ0FBbUMyQixlQUFuQyxFQUFvRDdDLEtBQXBELENBQVg7QUFDQSxTQUZELE1BR0k7QUFDSHNELHFCQUFXLEtBQUtwQyxHQUFMLENBQVM5QixhQUFULEVBQXdCckMsU0FBeEIsRUFBbUM4RixlQUFuQyxFQUFvRDdDLEtBQXBELENBQVg7QUFDQTs7QUFFRCxZQUFNaUUsZUFBZSxLQUFLcEQsT0FBTCxDQUFhekIsYUFBYixDQUFyQixDQW5Cb0MsQ0FxQnBDOztBQUNBLFlBQUcsQ0FBQzZFLGFBQWExRyxZQUFqQixFQUE4QjtBQUM3QixpQkFBTyxrQkFBUytGLFFBQVQsQ0FBUDtBQUNBOztBQUVELGVBQU9BLFFBQVA7QUFDQTs7QUFFRCxVQUFHLHNCQUFPVixZQUFQLEtBQXVCLFFBQXZCLElBQW1DLEVBQUVBLG9DQUFGLENBQXRDLEVBQXFFO0FBQ3BFLFlBQU1zQixJQUFJLEVBQVY7QUFDQSwyQkFBWXRCLFlBQVosRUFBMEI1RSxPQUExQixDQUFrQyxhQUFLO0FBQ3RDa0csWUFBRWhHLENBQUYsSUFBTyxRQUFLa0YsUUFBTCxDQUFjUixhQUFhMUUsQ0FBYixDQUFkLEVBQStCb0IsSUFBL0IsRUFBcUN1RCxlQUFyQyxFQUFzRDFILFVBQXRELEVBQWtFNEIsU0FBbEUsRUFBNkVpRCxLQUE3RSxDQUFQO0FBQ0EsU0FGRDtBQUdBLGVBQU9rRSxDQUFQO0FBQ0E7O0FBRUQsYUFBT3RCLFlBQVA7QUFDQTs7O2dDQUVXRixJLEVBQU12SCxVLEVBQVlnSixlLEVBQWdCO0FBQUE7O0FBQzdDLFVBQUdBLG1CQUFtQixPQUFPekIsSUFBUCxJQUFlLFVBQXJDLEVBQWdEO0FBQy9DQSxlQUFPQSxNQUFQO0FBQ0E7O0FBQ0QsVUFBR0EsNEJBQUgsRUFBdUI7QUFDdEIsZUFBT0EsSUFBUDtBQUNBOztBQUNELGNBQU92SCxVQUFQO0FBQ0MsYUFBSyxXQUFMO0FBQ0MsY0FBRyxzQkFBT3VILElBQVAsS0FBZSxRQUFmLElBQTJCQSxTQUFTLElBQXZDLEVBQTRDO0FBQzNDLGdCQUFNd0IsSUFBSSxFQUFWO0FBQ0EsK0JBQVl4QixJQUFaLEVBQWtCMUUsT0FBbEIsQ0FBMEIsZUFBSztBQUM5QixrQkFBTXdDLElBQUlrQyxLQUFLNUUsR0FBTCxDQUFWO0FBQ0FvRyxnQkFBRXBHLEdBQUYsSUFBUyxzQkFBTzBDLENBQVAsS0FBWSxRQUFaLElBQXdCQSxNQUFNLElBQTlCLElBQXNDLEVBQUVBLHlCQUFGLENBQXRDLEdBQTRELFFBQUtDLFdBQUwsQ0FBaUJELENBQWpCLEVBQW9CckYsVUFBcEIsQ0FBNUQsR0FBOEZxRixDQUF2RztBQUNBLGFBSEQ7QUFJQSxtQkFBTzBELENBQVA7QUFDQTs7QUFDRCxjQUFHLE9BQU94QixJQUFQLElBQWUsVUFBbEIsRUFBNkI7QUFDNUIsbUJBQU8sS0FBSzBCLE9BQUwsQ0FBYTFCLElBQWIsQ0FBUDtBQUNBOztBQUNELGlCQUFPLEtBQUsyQixTQUFMLENBQWUzQixJQUFmLENBQVA7QUFDRDs7QUFDQSxhQUFLLE9BQUw7QUFDQyxpQkFBTyxLQUFLM0UsS0FBTCxDQUFXMkUsSUFBWCxDQUFQO0FBQ0Q7QUFqQkQ7O0FBbUJBLGFBQU9BLElBQVA7QUFDQTs7O3FDQUVnQm5CLEksRUFBTStCLFEsRUFBUztBQUMvQixXQUFLekgsZ0JBQUwsQ0FBc0IwRixJQUF0QixJQUE4QitCLFFBQTlCO0FBQ0E7OztnQ0FFV2xFLGEsRUFBYztBQUN6QixVQUFNa0YsV0FBVyxLQUFLOUUsU0FBTCxDQUFlLEVBQWYsRUFBbUIsS0FBSzNFLFlBQXhCLENBQWpCO0FBQ0F5SixlQUFTbEYsYUFBVCxHQUF5QkEsYUFBekIsQ0FGeUIsQ0FFZTs7QUFDeEMsV0FBS0ksU0FBTCxDQUFlOEUsUUFBZixFQUF5QixLQUFLMUosS0FBTCxDQUFXd0UsYUFBWCxLQUE2QixFQUF0RDtBQUNBLGFBQU9rRixRQUFQO0FBQ0E7Ozs0QkFFT2xGLGEsRUFBYztBQUFBOztBQUNyQixVQUFNRSxPQUFPLEtBQUtFLFNBQUwsQ0FBZSxFQUFmLEVBQW1CLEtBQUszRSxZQUF4QixDQUFiO0FBQ0F5RSxXQUFLRixhQUFMLEdBQXFCQSxhQUFyQixDQUZxQixDQUVlOztBQUNwQyxVQUFHLENBQUNBLGFBQUosRUFBa0I7QUFDakIsZUFBT0UsSUFBUDtBQUNBOztBQUVELFVBQU1nRixXQUFXLEtBQUtuQyxXQUFMLENBQWlCL0MsYUFBakIsQ0FBakI7QUFFQSxVQUFJWSxRQUFRLEVBQVo7QUFFQSxXQUFLVyxpQkFBTCxDQUF1QnZCLGFBQXZCLEVBQXNDWSxLQUF0QztBQUVBLFVBQU1wRixRQUFRLEVBQWQ7QUFFQSxVQUFJMkosU0FBSjs7QUFFQSxVQUFHRCxTQUFTNUgsaUJBQVosRUFBOEI7QUFDN0I2SCxvQkFBWSxpQkFBU3ZFLE1BQU1nRSxLQUFOLENBQVksQ0FBWixFQUFlLENBQUMsQ0FBaEIsQ0FBVCxDQUFaO0FBQ0EsT0FGRCxNQUdJO0FBQ0hPLG9CQUFZLGlCQUFTdkUsTUFBTWdFLEtBQU4sQ0FBWSxDQUFaLEVBQWUsQ0FBZixDQUFULENBQVo7QUFDQTs7QUFHRCxVQUFHTSxTQUFTM0gsZ0JBQVosRUFBNkI7QUFDNUJxRCxjQUFNd0UsT0FBTixHQUFnQnhHLE9BQWhCLENBQXdCLFVBQUN5RyxDQUFELEVBQUs7QUFDNUIsY0FBRyxPQUFPQSxDQUFQLElBQVksVUFBZixFQUEwQjtBQUN6QixnQkFBSUMsY0FBY0QsQ0FBbEI7QUFDQSxnQkFBSXBDLFNBQUo7O0FBQ0EsbUJBQU1xQyxXQUFOLEVBQWtCO0FBQ2pCckMsMEJBQVlxQyxZQUFZLFFBQUtoSixZQUFqQixDQUFaOztBQUNBLGtCQUFHMkcsU0FBSCxFQUFhO0FBQ1prQywwQkFBVUksR0FBVixDQUFjdEMsU0FBZDtBQUNBOztBQUNEcUMsNEJBQWMsNkJBQXVCQSxXQUF2QixDQUFkO0FBQ0E7QUFDRDtBQUNELFNBWkQ7QUFhQTs7QUFDREgsa0JBQVksbUJBQVdBLFNBQVgsRUFBc0JDLE9BQXRCLEVBQVo7QUFFQUQsZ0JBQVV2RyxPQUFWLENBQWtCLFVBQUNxRSxTQUFELEVBQWE7QUFDOUIsWUFBTTdDLFlBQVksUUFBSzVFLEtBQUwsQ0FBV3lILFNBQVgsQ0FBbEI7O0FBRUEsWUFBRzdDLFVBQVU1QyxhQUFiLEVBQTJCO0FBQzFCLGtCQUFLZ0ksVUFBTCxDQUFnQnRGLElBQWhCLEVBQXNCRSxVQUFVNUMsYUFBaEM7QUFDQTs7QUFFRCxnQkFBSzRDLFNBQUwsQ0FBZUYsSUFBZixFQUFxQkUsU0FBckI7QUFDQSxPQVJEO0FBVUEsYUFBT0YsSUFBUDtBQUNBOzs7K0JBRVVBLEksRUFBTXVGLFcsRUFBWTtBQUFBOztBQUM1QixVQUFNQyxlQUFlLEtBQUtDLDJCQUFMLENBQWlDRixXQUFqQyxFQUE4Q0wsT0FBOUMsRUFBckI7QUFDQU0sbUJBQWE5RyxPQUFiLENBQXFCO0FBQUEsZUFDcEJnSCxXQUFXaEgsT0FBWCxDQUFvQixpQkFBUztBQUM1QixjQUFNd0IsWUFBWSxRQUFLNUUsS0FBTCxDQUFXcUssS0FBWCxDQUFsQjs7QUFDQSxrQkFBS3pGLFNBQUwsQ0FBZUYsSUFBZixFQUFxQkUsU0FBckIsRUFBZ0MsS0FBaEM7QUFDQSxTQUhELENBRG9CO0FBQUEsT0FBckI7QUFNQTs7O2dEQUMyQndGLFUsRUFBOEI7QUFBQTs7QUFBQSxVQUFsQkYsWUFBa0IsdUVBQUgsRUFBRzs7QUFDekQsVUFBRyxFQUFFRSxzQkFBc0JFLEtBQXhCLENBQUgsRUFBa0M7QUFDakNGLHFCQUFhLENBQUNBLFVBQUQsQ0FBYjtBQUNBOztBQUNERixtQkFBYTFFLElBQWIsQ0FBa0I0RSxVQUFsQjtBQUNBQSxpQkFBV2hILE9BQVgsQ0FBbUIsaUJBQVM7QUFDM0IsWUFBTXNCLE9BQU8sUUFBSzFFLEtBQUwsQ0FBV3FLLEtBQVgsQ0FBYjs7QUFDQSxZQUFHM0YsUUFBUUEsS0FBSzZGLE1BQWhCLEVBQXVCO0FBQ3RCLGtCQUFLSiwyQkFBTCxDQUFpQ3pGLEtBQUs2RixNQUF0QyxFQUE4Q0wsWUFBOUM7QUFDQTtBQUNELE9BTEQ7QUFNQSxhQUFPQSxZQUFQO0FBQ0E7OztrQ0FFYXZELEksRUFBTWdCLE0sRUFBTztBQUMxQixVQUFHLENBQUMsS0FBSzNILEtBQUwsQ0FBVzJHLElBQVgsQ0FBSixFQUFxQjtBQUNwQixhQUFLM0csS0FBTCxDQUFXMkcsSUFBWCxJQUFtQixFQUFuQjtBQUNBOztBQUNELFdBQUszRyxLQUFMLENBQVcyRyxJQUFYLEVBQWlCdkUsUUFBakIsR0FBNEJ1RixNQUE1QjtBQUNBOzs7OEJBRVM2QyxVLEVBQVk5RixJLEVBQXlCO0FBQUEsVUFBbkIrRixXQUFtQix1RUFBTCxJQUFLO0FBQUEsVUFFN0N4SSxNQUY2QyxHQW9CMUN5QyxJQXBCMEMsQ0FFN0N6QyxNQUY2QztBQUFBLFVBRzdDSCxpQkFINkMsR0FvQjFDNEMsSUFwQjBDLENBRzdDNUMsaUJBSDZDO0FBQUEsVUFJN0NDLGdCQUo2QyxHQW9CMUMyQyxJQXBCMEMsQ0FJN0MzQyxnQkFKNkM7QUFBQSxVQUs3Q0MsYUFMNkMsR0FvQjFDMEMsSUFwQjBDLENBSzdDMUMsYUFMNkM7QUFBQSxVQU03Q0UsVUFONkMsR0FvQjFDd0MsSUFwQjBDLENBTTdDeEMsVUFONkM7QUFBQSxVQU83Q0csTUFQNkMsR0FvQjFDcUMsSUFwQjBDLENBTzdDckMsTUFQNkM7QUFBQSxVQVE3Q0MsS0FSNkMsR0FvQjFDb0MsSUFwQjBDLENBUTdDcEMsS0FSNkM7QUFBQSxVQVM3Q0MsU0FUNkMsR0FvQjFDbUMsSUFwQjBDLENBUzdDbkMsU0FUNkM7QUFBQSxVQVU3Q0MsYUFWNkMsR0FvQjFDa0MsSUFwQjBDLENBVTdDbEMsYUFWNkM7QUFBQSxVQVc3Q0MsWUFYNkMsR0FvQjFDaUMsSUFwQjBDLENBVzdDakMsWUFYNkM7QUFBQSxVQVk3Q0wsUUFaNkMsR0FvQjFDc0MsSUFwQjBDLENBWTdDdEMsUUFaNkM7QUFBQSxVQWE3Q00sU0FiNkMsR0FvQjFDZ0MsSUFwQjBDLENBYTdDaEMsU0FiNkM7QUFBQSxVQWM3Q0MsWUFkNkMsR0FvQjFDK0IsSUFwQjBDLENBYzdDL0IsWUFkNkM7QUFBQSxVQWU3Q0MsZUFmNkMsR0FvQjFDOEIsSUFwQjBDLENBZTdDOUIsZUFmNkM7QUFBQSxVQWdCN0M4SCxxQkFoQjZDLEdBb0IxQ2hHLElBcEIwQyxDQWdCN0NnRyxxQkFoQjZDO0FBQUEsVUFpQjdDN0gsU0FqQjZDLEdBb0IxQzZCLElBcEIwQyxDQWlCN0M3QixTQWpCNkM7QUFBQSxVQWtCN0NDLFFBbEI2QyxHQW9CMUM0QixJQXBCMEMsQ0FrQjdDNUIsUUFsQjZDO0FBQUEsVUFtQjdDeEMsSUFuQjZDLEdBb0IxQ29FLElBcEIwQyxDQW1CN0NwRSxJQW5CNkM7O0FBcUI5QyxVQUFHOEIsYUFBYUQsU0FBaEIsRUFBMEI7QUFDekJxSSxtQkFBV3BJLFFBQVgsR0FBc0JBLFFBQXRCO0FBQ0E7O0FBQ0QsVUFBR0gsV0FBV0UsU0FBZCxFQUF3QjtBQUN2QnFJLG1CQUFXdkksTUFBWCxHQUFvQkEsTUFBcEI7QUFDQTs7QUFDRCxVQUFHSCxzQkFBc0JLLFNBQXpCLEVBQW1DO0FBQ2xDcUksbUJBQVcxSSxpQkFBWCxHQUErQkEsaUJBQS9CO0FBQ0E7O0FBQ0QsVUFBR0MscUJBQXFCSSxTQUF4QixFQUFrQztBQUNqQ3FJLG1CQUFXekksZ0JBQVgsR0FBOEJBLGdCQUE5QjtBQUNBOztBQUNELFVBQUdjLGNBQWNWLFNBQWpCLEVBQTJCO0FBQzFCcUksbUJBQVczSCxTQUFYLEdBQXVCQSxTQUF2QjtBQUNBOztBQUNELFVBQUdDLGFBQWFYLFNBQWhCLEVBQTBCO0FBQ3pCcUksbUJBQVcxSCxRQUFYLEdBQXNCQSxRQUF0QjtBQUNBOztBQUNELFVBQUd4QyxTQUFTNkIsU0FBWixFQUFzQjtBQUNyQnFJLG1CQUFXbEssSUFBWCxHQUFrQkEsSUFBbEI7QUFDQTs7QUFDRCxVQUFHNEIsZUFBZUMsU0FBbEIsRUFBNEI7QUFDM0JxSSxtQkFBV3RJLFVBQVgsR0FBd0JBLFVBQXhCO0FBQ0E7O0FBQ0QsVUFBR1MsaUJBQWlCUixTQUFwQixFQUE4QjtBQUM3QnFJLG1CQUFXN0gsWUFBWCxHQUEwQkEsWUFBMUI7QUFDQTs7QUFDRCxVQUFHQyxvQkFBb0JULFNBQXZCLEVBQWlDO0FBQ2hDcUksbUJBQVc1SCxlQUFYLEdBQTZCQSxlQUE3QjtBQUNBOztBQUNELFVBQUc4SCwwQkFBMEJ2SSxTQUE3QixFQUF1QztBQUN0Q3FJLG1CQUFXRSxxQkFBWCxHQUFtQ0EscUJBQW5DO0FBQ0E7O0FBRUQsVUFBR3BJLFVBQVVILFNBQWIsRUFBdUI7QUFDdEJxSSxtQkFBV2xJLEtBQVgsR0FBbUIsQ0FBRWtJLFdBQVdsSSxLQUFYLElBQW9CLEVBQXRCLEVBQTJCbUQsTUFBM0IsQ0FBa0NuRCxLQUFsQyxDQUFuQjtBQUNBOztBQUNELFVBQUdDLGNBQWNKLFNBQWpCLEVBQTJCO0FBQzFCcUksbUJBQVdqSSxTQUFYLEdBQXVCLENBQUVpSSxXQUFXakksU0FBWCxJQUF3QixFQUExQixFQUErQmtELE1BQS9CLENBQXNDbEQsU0FBdEMsQ0FBdkI7QUFDQTs7QUFFRCxVQUFHa0ksZUFBZXpJLGtCQUFrQkcsU0FBcEMsRUFBOEM7QUFDN0NxSSxtQkFBV3hJLGFBQVgsR0FBMkJBLGNBQWNvSCxLQUFkLENBQW9CLENBQXBCLENBQTNCO0FBQ0E7O0FBRUQsVUFBRy9HLFdBQVdGLFNBQWQsRUFBd0I7QUFDdkJxSSxtQkFBV25JLE1BQVgsR0FBb0JBLE1BQXBCO0FBQ0E7O0FBQ0QsVUFBR0csa0JBQWtCTCxTQUFyQixFQUErQjtBQUM5QixZQUFHLENBQUNxSSxXQUFXaEksYUFBZixFQUE2QjtBQUM1QmdJLHFCQUFXaEksYUFBWCxHQUEyQixFQUEzQjtBQUNBOztBQUNELDZCQUFjZ0ksV0FBV2hJLGFBQXpCLEVBQXdDQSxhQUF4QztBQUNBOztBQUNELFVBQUdDLGlCQUFpQk4sU0FBcEIsRUFBOEI7QUFDN0IsWUFBRyxDQUFDcUksV0FBVy9ILFlBQWYsRUFBNEI7QUFDM0IrSCxxQkFBVy9ILFlBQVgsR0FBMEIsRUFBMUI7QUFDQTs7QUFDRCtILG1CQUFXL0gsWUFBWCxHQUEwQixtQkFBWSw0REFBWStILFdBQVcvSCxZQUF2QixvQ0FBd0NBLFlBQXhDLEdBQVosQ0FBMUI7QUFDQTs7QUFDRCtILGlCQUFXOUgsU0FBWCxHQUF1QkEsU0FBdkI7QUFDQSxhQUFPOEgsVUFBUDtBQUNBOzs7K0JBRVVHLFcsRUFBYTNLLEssRUFBTTtBQUFBOztBQUM3Qix5QkFBWUEsS0FBWixFQUFtQm9ELE9BQW5CLENBQTJCLFVBQUNFLENBQUQsRUFBSztBQUMvQixZQUFHLENBQUNxSCxZQUFZckgsQ0FBWixDQUFKLEVBQW1CO0FBQ2xCcUgsc0JBQVlySCxDQUFaLElBQWlCLEVBQWpCO0FBQ0E7O0FBQ0RxSCxvQkFBWXJILENBQVosSUFBaUIsUUFBS3NCLFNBQUwsQ0FBZStGLFlBQVlySCxDQUFaLENBQWYsRUFBK0J0RCxNQUFNc0QsQ0FBTixDQUEvQixDQUFqQjtBQUNBLE9BTEQ7QUFNQSxhQUFPcUgsV0FBUDtBQUNBOzs7NkJBRVFySSxLLEVBQU9vRyxRLEVBQVVoRSxJLEVBQU11RCxlLEVBQWdCO0FBQUE7O0FBQy9DLFVBQUkyQyxRQUFKO0FBRUEsVUFBSUMsVUFBVXZJLE1BQU11RixHQUFOLENBQVUsVUFBQ2dDLENBQUQ7QUFBQSxlQUFNLFlBQUs7QUFFbEMsY0FBRyxPQUFPQSxDQUFQLElBQVksVUFBZixFQUEwQjtBQUN6QkEsZ0JBQUksQ0FBQ0EsQ0FBRCxDQUFKO0FBQ0E7O0FBSmlDLG1CQUtpQ0EsQ0FMakM7QUFBQTtBQUFBLGNBSzFCdkUsTUFMMEI7QUFBQTtBQUFBLGNBS2xCakQsTUFMa0IscUJBS1QsRUFMUztBQUFBO0FBQUEsY0FLTE0sWUFMSyxzQkFLVStCLEtBQUsvQixZQUxmOztBQU9sQyxjQUFNbUksV0FBVyxTQUFYQSxRQUFXLENBQUN4QyxjQUFELEVBQWtCO0FBQ2xDQSw2QkFBaUIsK0NBQWlDakcsTUFBakMsRUFBeUNpRyxjQUF6QyxDQUFqQjtBQUNBLGdCQUFJeUMsVUFBSjs7QUFDQSxnQkFBRyxPQUFPekYsTUFBUCxJQUFpQixVQUFwQixFQUErQjtBQUM5QnlGLDJCQUFhekYsc0JBQU9vRCxRQUFQLDBDQUFvQkosY0FBcEIsR0FBYjtBQUNBLGFBRkQsTUFHSTtBQUNIeUMsMkJBQWFyQyxTQUFTcEQsTUFBVCxtREFBb0JnRCxjQUFwQixFQUFiO0FBQ0E7O0FBQ0QsZ0JBQUcsQ0FBQzNGLFlBQUosRUFBaUI7QUFDaEJvSSwyQkFBYSxrQkFBU0EsVUFBVCxDQUFiO0FBQ0E7O0FBQ0QsbUJBQU9BLFVBQVA7QUFDQSxXQWJEOztBQWVBLGNBQU16QyxpQkFBaUJqRyxPQUFPd0YsR0FBUCxDQUFXLGlCQUFTO0FBQzFDLG1CQUFPLFFBQUtXLFFBQUwsQ0FBYzdDLEtBQWQsRUFBcUJqQixJQUFyQixFQUEyQnVELGVBQTNCLEVBQTRDLFFBQUt6SCxjQUFqRCxDQUFQO0FBQ0EsV0FGc0IsQ0FBdkI7O0FBR0EsY0FBRyxtQ0FBcUI2QixNQUFyQixFQUE2QmlHLGNBQTdCLEVBQTZDLFFBQUszRyxnQkFBbEQsQ0FBSCxFQUF1RTtBQUN0RWlKLHVCQUFXLElBQVg7QUFDQSxtQkFBTztBQUFBLHFCQUFNLDRDQUE4QnZJLE1BQTlCLEVBQXNDaUcsY0FBdEMsRUFBc0QsUUFBSzNHLGdCQUEzRCxFQUE2RSxRQUFLQyxjQUFsRixFQUFrR21ILElBQWxHLENBQXVHLDBCQUFnQjtBQUNuSSx1QkFBTytCLFNBQVN4QyxjQUFULENBQVA7QUFDQSxlQUZZLENBQU47QUFBQSxhQUFQO0FBR0EsV0FMRCxNQU1JO0FBQ0gsbUJBQU87QUFBQSxxQkFBTXdDLFNBQVN4QyxjQUFULENBQU47QUFBQSxhQUFQO0FBQ0E7QUFFRCxTQW5DdUI7QUFBQSxPQUFWLENBQWQ7QUFxQ0EsVUFBTW9DLHdCQUF3QmhHLEtBQUtnRyxxQkFBbkM7QUFDQSxVQUFNOUgsa0JBQWtCOEIsS0FBSzlCLGVBQUwsSUFBd0I4SCxxQkFBaEQ7O0FBRUEsVUFBTU0sWUFBWSxTQUFaQSxTQUFZLENBQUNILE9BQUQsRUFBVztBQUU1QixZQUFJSSxhQUFKOztBQUNBLFlBQUdMLFFBQUgsRUFBWTtBQUNYLGNBQUdoSSxlQUFILEVBQW1CO0FBQ2xCcUksNEJBQWdCLHVCQUFTSixPQUFULEVBQWtCLFVBQUNLLE1BQUQsRUFBVTtBQUMzQyxxQkFBT0EsUUFBUDtBQUNBLGFBRmUsRUFFYixRQUFLdkosZ0JBRlEsRUFFVSxRQUFLQyxjQUZmLENBQWhCO0FBR0EsV0FKRCxNQUtJO0FBQ0hxSiw0QkFBZ0IsUUFBS3JKLGNBQUwsQ0FBb0J1SixHQUFwQixDQUF5Qk4sUUFBUWhELEdBQVIsQ0FBWSxVQUFDcUQsTUFBRCxFQUFVO0FBQzlELHFCQUFPQSxRQUFQO0FBQ0EsYUFGd0MsQ0FBekIsQ0FBaEI7QUFHQTtBQUNELFNBWEQsTUFZSTtBQUNIRCwwQkFBZ0JKLFFBQVFoRCxHQUFSLENBQVksVUFBQ3FELE1BQUQsRUFBVTtBQUNyQyxnQkFBTUUsZUFBZUYsUUFBckI7O0FBQ0EsZ0JBQUdFLHdCQUF3QixRQUFLekosZ0JBQWhDLEVBQWlEO0FBQ2hEaUoseUJBQVcsSUFBWDtBQUNBOztBQUNELG1CQUFPUSxZQUFQO0FBQ0EsV0FOZSxDQUFoQjs7QUFPQSxjQUFHUixRQUFILEVBQVk7QUFDWEssNEJBQWdCLFFBQUtySixjQUFMLENBQW9CdUosR0FBcEIsQ0FBd0JGLGFBQXhCLENBQWhCO0FBQ0E7QUFDRDs7QUFDRCxlQUFPQSxhQUFQO0FBQ0EsT0E1QkQ7O0FBOEJBLFVBQUdQLHFCQUFILEVBQXlCO0FBQ3hCRyxrQkFBVSx1QkFBU0EsT0FBVCxFQUFrQixVQUFDSyxNQUFELEVBQVU7QUFDckNBLG1CQUFTQSxVQUFUO0FBQ0EsaUJBQU9BLE1BQVA7QUFDQSxTQUhTLEVBR1AsS0FBS3ZKLGdCQUhFLEVBR2dCLEtBQUtDLGNBSHJCLENBQVY7QUFJQSxlQUFPaUosUUFBUTlCLElBQVIsQ0FBYztBQUFBLGlCQUFXaUMsVUFBV0gsUUFBUWhELEdBQVIsQ0FBWTtBQUFBLG1CQUFVO0FBQUEscUJBQU1xRCxNQUFOO0FBQUEsYUFBVjtBQUFBLFdBQVosQ0FBWCxDQUFYO0FBQUEsU0FBZCxDQUFQO0FBQ0EsT0FORCxNQU9JO0FBQ0hMLGtCQUFVQSxRQUFRaEQsR0FBUixDQUFZLFVBQUNxRCxNQUFEO0FBQUEsaUJBQVVBLFFBQVY7QUFBQSxTQUFaLENBQVY7QUFDQSxlQUFPRixVQUFVSCxPQUFWLENBQVA7QUFDQTtBQUVEOzs7OEJBRVNsRCxNLEVBQVEwRCxPLEVBQVNsSSxLLEVBQU07QUFDaEMsbUNBQXNCd0UsTUFBdEIsRUFBOEIwRCxPQUE5QixFQUF1QztBQUN0Q2xJLGVBQU9BLEtBRCtCO0FBRXRDbUksb0JBQVksS0FGMEI7QUFHdENDLHNCQUFjO0FBSHdCLE9BQXZDO0FBS0E7OztzQ0FFaUJDLEcsRUFBaUM7QUFBQSxVQUE1QnBHLEtBQTRCLHVFQUFwQixFQUFvQjtBQUFBLFVBQWhCOEIsUUFBZ0IsdUVBQUwsSUFBSzs7QUFDbEQsVUFBRyxPQUFPc0UsR0FBUCxJQUFjLFFBQWpCLEVBQTBCO0FBQ3pCLFlBQUdwRyxNQUFNM0QsT0FBTixDQUFjK0osR0FBZCxNQUFxQixDQUFDLENBQXpCLEVBQTJCO0FBQzFCLGdCQUFNLElBQUlqSSxLQUFKLENBQVUsMENBQXdDLHdCQUFlNkIsTUFBTUssTUFBTixDQUFhK0YsR0FBYixDQUFmLEVBQWlDLElBQWpDLEVBQXNDLENBQXRDLENBQWxELENBQU47QUFDQTs7QUFDRHBHLGNBQU1JLElBQU4sQ0FBV2dHLEdBQVg7QUFDQSxZQUFNOUcsT0FBTyxLQUFLMUUsS0FBTCxDQUFXd0wsR0FBWCxDQUFiO0FBQ0EsWUFBSUMsV0FBVyxLQUFmOztBQUNBLFlBQUcvRyxJQUFILEVBQVE7QUFDUCxjQUFHQSxLQUFLeEMsVUFBUixFQUFtQjtBQUNsQnVKLHVCQUFXL0csS0FBS3hDLFVBQWhCO0FBQ0EsV0FGRCxNQUdLLElBQUd3QyxLQUFLdEMsUUFBUixFQUFpQjtBQUNyQnFKLHVCQUFXL0csS0FBS3RDLFFBQWhCO0FBQ0E7QUFDRDs7QUFDRCxZQUFHLENBQUNxSixRQUFKLEVBQWE7QUFDWixjQUFHLENBQUN2RSxRQUFKLEVBQWE7QUFDWixtQkFBTyxLQUFQO0FBQ0E7O0FBQ0QsZ0JBQU0sSUFBSTNELEtBQUosQ0FBVSwyQkFBeUJpSSxHQUF6QixHQUE2Qiw4QkFBN0IsR0FBNEQsd0JBQWVwRyxLQUFmLEVBQXNCLElBQXRCLEVBQTRCLENBQTVCLENBQXRFLENBQU47QUFDQTs7QUFDRCxlQUFPLEtBQUtXLGlCQUFMLENBQXVCMEYsUUFBdkIsRUFBaUNyRyxLQUFqQyxFQUF3QzhCLFFBQXhDLENBQVA7QUFDQTs7QUFDRDlCLFlBQU1JLElBQU4sQ0FBV2dHLEdBQVg7QUFDQSxhQUFPQSxHQUFQO0FBQ0E7Ozs0QkFFT3ZDLFEsRUFBUztBQUNoQixhQUFPLHFCQUFZQSxRQUFaLENBQVA7QUFDQTs7OytCQUNTdEMsSSxFQUFLO0FBQ2QsYUFBTyx3QkFBY0EsSUFBZCxDQUFQO0FBQ0E7OzswQkFDS3hELE0sRUFBTTtBQUNYLGFBQU8sb0JBQVVBLE1BQVYsQ0FBUDtBQUNBOzs7NEJBQ091SSxHLEVBQUk7QUFDWCxhQUFPLHFCQUFZQSxHQUFaLENBQVA7QUFDQTs7OytCQUVVQSxHLEVBQUk7QUFDZCxhQUFPLHdCQUFlQSxHQUFmLENBQVA7QUFDQTs7OzZCQUVRekMsUSxFQUFTO0FBQ2pCLGFBQU8sc0JBQWFBLFFBQWIsQ0FBUDtBQUNBIiwiZmlsZSI6ImNvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtYXBTZXJpZSBmcm9tICcuL21hcFNlcmllJ1xuXG5pbXBvcnQgVmFyIGZyb20gJy4vdmFyJ1xuaW1wb3J0IEZhY3RvcnkgZnJvbSAnLi9mYWN0b3J5J1xuaW1wb3J0IFZhbHVlIGZyb20gJy4vdmFsdWUnXG5pbXBvcnQgSW50ZXJmYWNlIGZyb20gJy4vaW50ZXJmYWNlJ1xuaW1wb3J0IFJlcXVpcmUgZnJvbSAnLi9yZXF1aXJlJ1xuXG5pbXBvcnQgU2hhcmVkSW5zdGFuY2UgZnJvbSAnLi9zaGFyZWRJbnN0YW5jZSdcblxuaW1wb3J0IENsYXNzRGVmIGZyb20gJy4vY2xhc3NEZWYnXG5cbmltcG9ydCBEZXBlbmRlbmN5IGZyb20gJy4vZGVwZW5kZW5jeSdcblxuaW1wb3J0IG1ha2VDb250YWluZXJBcGkgZnJvbSAnLi9tYWtlQ29udGFpbmVyQXBpJ1xuXG5pbXBvcnQgU3luYyBmcm9tICcuL3N5bmMnXG5pbXBvcnQgc3RydWN0dXJlZEhhc1Byb21pc2UgZnJvbSAnLi9zdHJ1Y3R1cmVkSGFzUHJvbWlzZSdcbmltcG9ydCBzdHJ1Y3R1cmVkUHJvbWlzZUFsbFJlY3Vyc2l2ZSBmcm9tICcuL3N0cnVjdHVyZWRQcm9taXNlQWxsUmVjdXJzaXZlJ1xuaW1wb3J0IHN0cnVjdHVyZWRSZXNvbHZlUGFyYW1zSW50ZXJmYWNlIGZyb20gJy4vc3RydWN0dXJlZFJlc29sdmVQYXJhbXNJbnRlcmZhY2UnXG5cbmltcG9ydCBwcm9taXNlSW50ZXJmYWNlIGZyb20gJy4vcHJvbWlzZUludGVyZmFjZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFpbmVye1xuXG5cdGNvbnN0cnVjdG9yKHtcblx0XHRydWxlcyA9IHt9LFxuXHRcdFxuXHRcdHJ1bGVzRGVmYXVsdCA9IHt9LFxuXHRcdFxuXHRcdGF1dG9sb2FkRmFpbE9uTWlzc2luZ0ZpbGUgPSAncGF0aCcsXG5cdFx0ZGVwZW5kZW5jaWVzID0ge30sXG5cdFx0YXV0b2xvYWRFeHRlbnNpb25zID0gWydqcyddLFxuXHRcdGF1dG9sb2FkUGF0aFJlc29sdmVyID0gKHBhdGgpPT5wYXRoLFxuXHRcdFxuXHRcdGRlZmF1bHRWYXIgPSAnaW50ZXJmYWNlJyxcblx0XHRkZWZhdWx0UnVsZVZhciA9IG51bGwsXG5cdFx0ZGVmYXVsdERlY29yYXRvclZhciA9IG51bGwsXG5cdFx0ZGVmYXVsdEFyZ3NWYXIgPSBudWxsLFxuXHRcdFxuXHRcdGdsb2JhbEtleSA9IGZhbHNlLFxuXHRcdFxuXHRcdHByb21pc2VGYWN0b3J5ID0gUHJvbWlzZSxcblx0XHRwcm9taXNlSW50ZXJmYWNlcyA9IFsgUHJvbWlzZSBdLFxuXHRcdFxuXHR9ID0ge30pe1xuXHRcdFxuXHRcdHRoaXMuc3ltQ2xhc3NOYW1lID0gU3ltYm9sKCdjbGFzc05hbWUnKTtcblx0XHR0aGlzLnN5bUludGVyZmFjZXMgPSBTeW1ib2woJ3R5cGVzJyk7XG5cdFx0dGhpcy5wcm92aWRlclJlZ2lzdHJ5ID0ge307XG5cdFx0dGhpcy5pbnN0YW5jZVJlZ2lzdHJ5ID0ge307XG5cdFx0XG5cdFx0dGhpcy5yZXF1aXJlcyA9IHt9O1xuXHRcdHRoaXMuYXV0b2xvYWRFeHRlbnNpb25zID0gYXV0b2xvYWRFeHRlbnNpb25zO1xuXHRcdHRoaXMuYXV0b2xvYWRGYWlsT25NaXNzaW5nRmlsZSA9IGF1dG9sb2FkRmFpbE9uTWlzc2luZ0ZpbGU7XG5cdFx0dGhpcy5kZXBlbmRlbmNpZXMgPSBkZXBlbmRlbmNpZXM7XG5cdFx0dGhpcy5zZXRBdXRvbG9hZFBhdGhSZXNvbHZlcihhdXRvbG9hZFBhdGhSZXNvbHZlcik7XG5cdFx0dGhpcy5sb2FkRXh0ZW5zaW9uUmVnZXggPSBuZXcgUmVnRXhwKCdcXC4oJyt0aGlzLmF1dG9sb2FkRXh0ZW5zaW9ucy5qb2luKCd8JykrJykkJyk7XG5cdFx0XG5cdFx0dGhpcy5kZWZhdWx0UnVsZVZhciA9IGRlZmF1bHRSdWxlVmFyIHx8IGRlZmF1bHRWYXI7XG5cdFx0dGhpcy5kZWZhdWx0RGVjb3JhdG9yVmFyID0gZGVmYXVsdERlY29yYXRvclZhciB8fCBkZWZhdWx0VmFyO1xuXHRcdHRoaXMuZGVmYXVsdEFyZ3NWYXIgPSBkZWZhdWx0QXJnc1ZhciB8fCBkZWZhdWx0VmFyO1xuXHRcdFxuXHRcdHRoaXMuYWxsb3dlZERlZmF1bHRWYXJzID0gWydpbnRlcmZhY2UnLCd2YWx1ZSddO1xuXHRcdHRoaXMudmFsaWRhdGVEZWZhdWx0VmFyKGRlZmF1bHRWYXIsICdkZWZhdWx0VmFyJyk7XG5cdFx0dGhpcy52YWxpZGF0ZURlZmF1bHRWYXIodGhpcy5kZWZhdWx0UnVsZVZhciwgJ2RlZmF1bHRSdWxlVmFyJyk7XG5cdFx0dGhpcy52YWxpZGF0ZURlZmF1bHRWYXIodGhpcy5kZWZhdWx0RGVjb3JhdG9yVmFyLCAnZGVmYXVsdERlY29yYXRvclZhcicpO1xuXHRcdHRoaXMudmFsaWRhdGVEZWZhdWx0VmFyKHRoaXMuZGVmYXVsdEFyZ3NWYXIsICdkZWZhdWx0QXJnc1ZhcicpO1xuXHRcdFxuXHRcdGlmKHByb21pc2VJbnRlcmZhY2VzLmluZGV4T2YocHJvbWlzZUZhY3RvcnkpID09PSAtMSl7XG5cdFx0XHRwcm9taXNlSW50ZXJmYWNlcy51bnNoaWZ0KHByb21pc2VGYWN0b3J5KTtcblx0XHR9XG5cdFx0dGhpcy5Qcm9taXNlSW50ZXJmYWNlID0gcHJvbWlzZUludGVyZmFjZShwcm9taXNlSW50ZXJmYWNlcyk7XG5cdFx0dGhpcy5Qcm9taXNlRmFjdG9yeSA9IHByb21pc2VGYWN0b3J5O1xuXHRcdFxuXHRcdGlmKGdsb2JhbEtleSl7XG5cdFx0XHR0aGlzLnNldEdsb2JhbEtleShnbG9iYWxLZXkpO1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLnJ1bGVzRGVmYXVsdCA9IHtcblx0XHRcdFxuXHRcdFx0aW5oZXJpdEluc3RhbmNlT2Y6IHRydWUsXG5cdFx0XHRpbmhlcml0UHJvdG90eXBlOiBmYWxzZSxcblx0XHRcdGluaGVyaXRNaXhpbnM6IFtdLFxuXHRcdFx0XG5cdFx0XHRzaGFyZWQ6IGZhbHNlLFxuXHRcdFx0aW5zdGFuY2VPZjogdW5kZWZpbmVkLFxuXHRcdFx0Y2xhc3NEZWY6IHVuZGVmaW5lZCxcblx0XHRcdHBhcmFtczogdW5kZWZpbmVkLFxuXHRcdFx0XG5cdFx0XHRjYWxsczogW10sXG5cdFx0XHRsYXp5Q2FsbHM6IFtdLFxuXHRcdFx0XG5cdFx0XHRzdWJzdGl0dXRpb25zOiBbXSxcblx0XHRcdHNoYXJlZEluVHJlZTogW10sXG5cdFx0XHRcblx0XHRcdHNpbmdsZXRvbjogdW5kZWZpbmVkLFxuXHRcdFx0XG5cdFx0XHRhc3luY1Jlc29sdmU6IGZhbHNlLFxuXHRcdFx0YXN5bmNDYWxsc1NlcmllOiBmYWxzZSxcblx0XHRcdFxuXHRcdFx0ZGVjb3JhdG9yOiBmYWxzZSxcblx0XHRcdFxuXHRcdFx0YXV0b2xvYWQ6IGZhbHNlLFxuXHRcdFx0cGF0aDogdW5kZWZpbmVkLFxuXHRcdFx0XG5cdFx0fTtcblx0XHR0aGlzLnNldFJ1bGVzRGVmYXVsdChydWxlc0RlZmF1bHQpO1xuXHRcdHRoaXMucnVsZXMgPSB7fTtcblx0XHRcblx0XHR0aGlzLmxvYWREZXBlbmRlbmNpZXMoKTtcblx0XHR0aGlzLmFkZFJ1bGVzKHJ1bGVzKTtcblx0XHRcblx0fVxuXHRcblx0Y29uZmlnKGtleSwgdmFsdWUpe1xuXHRcdGlmKHR5cGVvZiBrZXkgPT09ICdvYmplY3QnKXtcblx0XHRcdE9iamVjdC5rZXlzKGtleSkuZm9yRWFjaChrPT50aGlzLmNvbmZpZyhrLCBrZXlba10pKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0c3dpdGNoKGtleSl7XG5cdFx0XHRjYXNlICdhdXRvbG9hZEZhaWxPbk1pc3NpbmdGaWxlICc6XG5cdFx0XHRjYXNlICdhdXRvbG9hZEV4dGVuc2lvbnMnOlxuXHRcdFx0Y2FzZSAnZGVmYXVsdFZhcic6XG5cdFx0XHRjYXNlICdkZWZhdWx0UnVsZVZhcic6XG5cdFx0XHRjYXNlICdkZWZhdWx0RGVjb3JhdG9yVmFyJzpcblx0XHRcdGNhc2UgJ2RlZmF1bHRBcmdzVmFyJzpcblx0XHRcdFx0dGhpc1trZXldID0gdmFsdWU7XG5cdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2dsb2JhbGtleSc6XG5cdFx0XHRcdHRoaXMuc2V0R2xvYmFsS2V5KHZhbHVlKTtcblx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnYXV0b2xvYWRQYXRoUmVzb2x2ZXInOlxuXHRcdFx0XHR0aGlzLnNldEF1dG9sb2FkUGF0aFJlc29sdmVyKHZhbHVlKTtcblx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAncnVsZXNEZWZhdWx0Jzpcblx0XHRcdFx0dGhpcy5zZXRSdWxlc0RlZmF1bHQodmFsdWUpO1xuXHRcdFx0YnJlYWs7XG5cdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBjb25maWcga2V5ICcra2V5KTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXHRcblx0c2V0UnVsZXNEZWZhdWx0KHJ1bGVzRGVmYXVsdCl7XG5cdFx0dGhpcy5ydWxlc0RlZmF1bHQgPSB7XG5cdFx0XHQuLi50aGlzLnJ1bGVzRGVmYXVsdCxcblx0XHRcdC4uLnJ1bGVzRGVmYXVsdCxcblx0XHR9O1xuXHR9XG5cdFxuXHRzZXRBdXRvbG9hZFBhdGhSZXNvbHZlcihhdXRvbG9hZFBhdGhSZXNvbHZlcil7XG5cdFx0XG5cdFx0aWYodHlwZW9mIGF1dG9sb2FkUGF0aFJlc29sdmVyID09ICdvYmplY3QnKXtcblx0XHRcdFxuXHRcdFx0Y29uc3QgYWxpYXNNYXAgPSBhdXRvbG9hZFBhdGhSZXNvbHZlcjtcblx0XHRcdGF1dG9sb2FkUGF0aFJlc29sdmVyID0gKHBhdGgpPT57XG5cdFx0XHRcdE9iamVjdC5rZXlzKGFsaWFzTWFwKS5mb3JFYWNoKGFsaWFzPT57XG5cdFx0XHRcdFx0Y29uc3QgcmVhbFBhdGggPSBhbGlhc01hcFthbGlhc107XG5cdFx0XHRcdFx0aWYocGF0aCA9PSBhbGlhcyl7XG5cdFx0XHRcdFx0XHRwYXRoID0gcmVhbFBhdGg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2UgaWYocGF0aC5zdWJzdHIoMCxhbGlhcy5sZW5ndGgrMSk9PWFsaWFzKycvJyl7XG5cdFx0XHRcdFx0XHRwYXRoID0gcmVhbFBhdGgrcGF0aC5zdWJzdHIoYWxpYXMubGVuZ3RoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm4gcGF0aDtcblx0XHRcdH07XG5cdFx0fVxuXHRcdFxuXHRcdHRoaXMuYXV0b2xvYWRQYXRoUmVzb2x2ZXIgPSBhdXRvbG9hZFBhdGhSZXNvbHZlcjtcblx0fVxuXHRcblx0c2V0R2xvYmFsS2V5KGdsb2JhbEtleSl7XG5cdFx0aWYoZ2xvYmFsS2V5PT09dHJ1ZSl7XG5cdFx0XHRnbG9iYWxLZXkgPSAnZGknO1xuXHRcdH1cblx0XHRnbG9iYWxbZ2xvYmFsS2V5XSA9IG1ha2VDb250YWluZXJBcGkodGhpcyk7XG5cdH1cblx0XG5cdGxvYWRQYXRocyhkaXJzKXtcblx0XHRPYmplY3Qua2V5cyhkaXJzKS5mb3JFYWNoKGRpcktleT0+e1xuXHRcdFx0Y29uc3QgY29udGV4dCA9IGRpcnNbZGlyS2V5XTtcblx0XHRcdFxuXHRcdFx0aWYoY29udGV4dCBpbnN0YW5jZW9mIERlcGVuZGVuY3kpe1xuXHRcdFx0XHR0aGlzLnJlcXVpcmVzW2RpcktleV0gPSBjb250ZXh0LmdldERlcGVuZGVuY3koKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0XHRcdFx0XG5cdFx0XHRjb250ZXh0LmtleXMoKS5mb3JFYWNoKChmaWxlbmFtZSk9Pntcblx0XHRcdFx0XG5cdFx0XHRcdGxldCBrZXkgPSBmaWxlbmFtZTtcblx0XHRcdFx0aWYoa2V5LnN1YnN0cigwLDIpPT0nLi8nKXtcblx0XHRcdFx0XHRrZXkgPSBrZXkuc3Vic3RyKDIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRrZXkgPSBkaXJLZXkrJy8nK2tleS5zdWJzdHIoMCwga2V5Lmxhc3RJbmRleE9mKCcuJykgfHwga2V5Lmxlbmd0aCk7XG5cdFx0XHRcdGlmKGtleS5zcGxpdCgnLycpLnBvcCgpPT0naW5kZXgnKXtcblx0XHRcdFx0XHRrZXkgPSBrZXkuc3Vic3RyKDAsIGtleS5sYXN0SW5kZXhPZignLycpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnJlcXVpcmVzW2tleV0gPSBjb250ZXh0KGZpbGVuYW1lKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cdFxuXHRcblx0YWRkUnVsZXMocnVsZXMpe1xuXHRcdGlmKHR5cGVvZiBydWxlcyA9PSAnZnVuY3Rpb24nKXtcblx0XHRcdHJ1bGVzID0gcnVsZXModGhpcyk7XG5cdFx0fVxuXHRcdE9iamVjdC5rZXlzKHJ1bGVzKS5mb3JFYWNoKGludGVyZmFjZU5hbWUgPT4gdGhpcy5hZGRSdWxlKGludGVyZmFjZU5hbWUsIHJ1bGVzW2ludGVyZmFjZU5hbWVdLCBmYWxzZSkpO1xuXHRcdHRoaXMucnVsZXNEZXRlY3RMYXp5TG9hZCgpO1xuXHR9XG5cdGFkZFJ1bGUoaW50ZXJmYWNlTmFtZSwgcnVsZSwgZGV0ZWN0TGF6eUxvYWQgPSB0cnVlKXtcblx0XHRpZih0eXBlb2YgcnVsZSA9PSAnZnVuY3Rpb24nKXtcblx0XHRcdHJ1bGUgPSBydWxlKHRoaXMpO1xuXHRcdH1cblx0XHRcblx0XHRpZih0aGlzLnJ1bGVzW2ludGVyZmFjZU5hbWVdID09PSB1bmRlZmluZWQpe1xuXHRcdFx0dGhpcy5ydWxlc1tpbnRlcmZhY2VOYW1lXSA9IHRoaXMubWVyZ2VSdWxlKHt9LCB0aGlzLnJ1bGVzRGVmYXVsdCk7XG5cdFx0fVxuXHRcdFxuXHRcdHRoaXMucnVsZXNbaW50ZXJmYWNlTmFtZV0gPSB0aGlzLm1lcmdlUnVsZSh0aGlzLnJ1bGVzW2ludGVyZmFjZU5hbWVdLCBydWxlKTtcblx0XHR0aGlzLnByb2Nlc3NSdWxlKGludGVyZmFjZU5hbWUpO1xuXHRcdFxuXHRcdHJ1bGUgPSB0aGlzLnJ1bGVzW2ludGVyZmFjZU5hbWVdO1xuXHRcdFxuXHRcdGxldCB7IGNsYXNzRGVmIH0gPSBydWxlO1xuXHRcdGlmKGNsYXNzRGVmKXtcblx0XHRcdGlmKGNsYXNzRGVmIGluc3RhbmNlb2YgQ2xhc3NEZWYpe1xuXHRcdFx0XHRjbGFzc0RlZiA9IGNsYXNzRGVmLmdldENsYXNzRGVmKCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnJlZ2lzdGVyUmVxdWlyZShpbnRlcmZhY2VOYW1lLCBjbGFzc0RlZik7XG5cdFx0fVxuXHRcdFxuXHRcdGlmKGRldGVjdExhenlMb2FkKXtcblx0XHRcdHRoaXMucnVsZXNEZXRlY3RMYXp5TG9hZCgpO1xuXHRcdH1cblx0XHRcblx0fVxuXHRcblx0dmFsaWRhdGVEZWZhdWx0VmFyKHZhbHVlLCBwcm9wZXJ0eSl7XG5cdFx0aWYodGhpcy5hbGxvd2VkRGVmYXVsdFZhcnMuaW5kZXhPZih2YWx1ZSk9PT0tMSl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgdHlwZSBcIicrdmFsdWUrJ1wiIHNwZWNpZmllZCBmb3IgJytwcm9wZXJ0eSsnLCBwb3NzaWJsZXMgdmFsdWVzOiAnK3RoaXMuYWxsb3dlZERlZmF1bHRWYXJzLmpvaW4oJyB8ICcpKTtcblx0XHR9XG5cdH1cblx0XG5cdGxvYWREZXBlbmRlbmNpZXMoKXtcblx0XHR0aGlzLmxvYWRQYXRocyh0aGlzLmRlcGVuZGVuY2llcyk7XG5cdFx0dGhpcy5yZWdpc3RlclJlcXVpcmVNYXAodGhpcy5yZXF1aXJlcyk7XG5cdH1cblx0cnVsZXNEZXRlY3RMYXp5TG9hZCgpe1xuXHRcdE9iamVjdC5rZXlzKHRoaXMucnVsZXMpLmZvckVhY2goa2V5PT57XG5cdFx0XHR0aGlzLnJ1bGVMYXp5TG9hZChrZXkpO1xuXHRcdH0pO1xuXHR9XG5cdFxuXHRydWxlTGF6eUxvYWQoa2V5LCBzdGFjaz1bXSl7XG5cdFx0Y29uc3QgY2FsbHMgPSBbXTtcblx0XHRjb25zdCBsYXp5Q2FsbHMgPSBbXTtcblx0XHRcblx0XHRjb25zdCBydWxlID0gdGhpcy5ydWxlc1trZXldO1xuXHRcdFxuXHRcdGlmKCFydWxlLmNhbGxzKXtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0XG5cdFx0cnVsZS5jYWxscy5mb3JFYWNoKGNhbGxWYWwgPT4ge1xuXHRcdFx0aWYodHlwZW9mIGNhbGxWYWwgPT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRcdGNhbGxWYWwgPSBbY2FsbFZhbF07XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBbbWV0aG9kLCBwYXJhbXMgPSBbXV0gPSBjYWxsVmFsO1xuXHRcdFx0aWYoIHRoaXMucnVsZUNoZWNrQ3ljbGljTG9hZChwYXJhbXMsIFsga2V5IF0pICl7XG5cdFx0XHRcdGxhenlDYWxscy5wdXNoKGNhbGxWYWwpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZXtcblx0XHRcdFx0Y2FsbHMucHVzaChjYWxsVmFsKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRcblx0XHRydWxlLmNhbGxzID0gY2FsbHM7XG5cdFx0cnVsZS5sYXp5Q2FsbHMgPSAocnVsZS5sYXp5Q2FsbHMgfHwgW10pLmNvbmNhdChsYXp5Q2FsbHMpO1xuXHR9XG5cdHJ1bGVDaGVja0N5Y2xpY0xvYWQocGFyYW1zLCBzdGFjaz1bXSl7XHRcdFxuXHRcdHJldHVybiBPYmplY3Qua2V5cyhwYXJhbXMpLnNvbWUoaz0+e1xuXHRcdFx0Y29uc3QgcGFyYW0gPSBwYXJhbXNba107XG5cdFx0XHRjb25zdCB2ID0gdGhpcy53cmFwVmFyVHlwZShwYXJhbSwgdGhpcy5kZWZhdWx0UnVsZVZhcik7XG5cdFx0XHRpZih2IGluc3RhbmNlb2YgSW50ZXJmYWNlKXtcblx0XHRcdFx0Y29uc3QgaW50ZXJmYWNlTmFtZSA9IHYuZ2V0TmFtZSgpO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYoIXRoaXMucmVzb2x2ZUluc3RhbmNlT2YoaW50ZXJmYWNlTmFtZSwgW10sIGZhbHNlKSl7XG5cdFx0XHRcdFx0Ly9ub3QgZm91bmQsIHVuYWJsZSB0byBjaGVjayBub3dcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdGNvbnN0IHBhcmFtUnVsZSA9IHRoaXMuZ2V0UnVsZShpbnRlcmZhY2VOYW1lKTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmKHN0YWNrLmluZGV4T2YoaW50ZXJmYWNlTmFtZSkhPT0tMSl7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdHN0YWNrLnB1c2goaW50ZXJmYWNlTmFtZSk7XG5cdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdGxldCBjeWNsaWM7XG5cblx0XHRcdFx0aWYocGFyYW1SdWxlLnBhcmFtcyl7XG5cdFx0XHRcdFx0Y3ljbGljID0gdGhpcy5ydWxlQ2hlY2tDeWNsaWNMb2FkKHBhcmFtUnVsZS5wYXJhbXMsIHN0YWNrKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKCFjeWNsaWMpe1xuXHRcdFx0XHRcdGN5Y2xpYyA9IHBhcmFtUnVsZS5jYWxscy5zb21lKGNhbGxWPT57XG5cdFx0XHRcdFx0XHRjb25zdCBbbWV0aG9kLCBwYXJhbXMgPSBbXSBdID0gY2FsbFY7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5ydWxlQ2hlY2tDeWNsaWNMb2FkKHBhcmFtcywgc3RhY2spO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRyZXR1cm4gY3ljbGljO1xuXHRcdFx0XHRcblx0XHRcdH1cblx0XHRcdGlmKHR5cGVvZiB2ID09ICdvYmplY3QnICYmIHYgIT09IG51bGwgJiYgISh2IGluc3RhbmNlb2YgVmFyKSl7XG5cdFx0XHRcdHJldHVybiB0aGlzLnJ1bGVDaGVja0N5Y2xpY0xvYWQodiwgc3RhY2spO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cdFxuXHRwcm9jZXNzUnVsZShrZXksIHN0YWNrID0gW10pe1xuXHRcdGlmKHRoaXMucnVsZXNba2V5XSA9PT0gdW5kZWZpbmVkKXtcblx0XHRcdHRoaXMucnVsZXNba2V5XSA9IHRoaXMubWVyZ2VSdWxlKHt9LCB0aGlzLnJ1bGVzRGVmYXVsdCk7XG5cdFx0fVxuXHRcdGNvbnN0IHJ1bGUgPSB0aGlzLnJ1bGVzW2tleV07XG5cdFx0aWYocnVsZS5pbnN0YW5jZU9mKXtcblx0XHRcdGlmKHN0YWNrLmluZGV4T2Yoa2V5KSE9PS0xKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdDeWNsaWMgaW50ZXJmYWNlIGRlZmluaXRpb24gZXJyb3IgaW4gJytKU09OLnN0cmluZ2lmeShzdGFjay5jb25jYXQoa2V5KSxudWxsLDIpKTtcblx0XHRcdH1cblx0XHRcdHN0YWNrLnB1c2goa2V5KTtcblx0XHRcdHRoaXMucHJvY2Vzc1J1bGUocnVsZS5pbnN0YW5jZU9mLCBzdGFjayk7XG5cdFx0fVxuXHRcdGlmKHJ1bGUuc2luZ2xldG9uKXtcblx0XHRcdHJ1bGUuY2xhc3NEZWYgPSBmdW5jdGlvbigpe1xuXHRcdFx0XHRyZXR1cm4gcnVsZS5zaW5nbGV0b247XG5cdFx0XHR9O1xuXHRcdH1cblx0XHRpZih0eXBlb2YgcnVsZS5jbGFzc0RlZiA9PSAnc3RyaW5nJyl7XG5cdFx0XHRjb25zdCBjbGFzc0RlZk5hbWUgPSBydWxlLmNsYXNzRGVmO1xuXHRcdFx0cnVsZS5jbGFzc0RlZiA9ICguLi5hcmdzKT0+e1xuXHRcdFx0XHRjb25zdCBjbGFzc0RlZmluaXRpb24gPSB0aGlzLmdldChjbGFzc0RlZk5hbWUpO1xuXHRcdFx0XHRyZXR1cm4gbmV3IGNsYXNzRGVmaW5pdGlvbiguLi5hcmdzKTtcblx0XHRcdH07XG5cdFx0fVxuXHRcdGlmKHRoaXMudmFsaWRhdGVBdXRvbG9hZEZpbGVOYW1lKGtleSkpe1xuXHRcdFx0aWYocnVsZS5hdXRvbG9hZCl7XG5cdFx0XHRcdGNvbnN0IHBhdGggPSBydWxlLnBhdGggfHwga2V5O1xuXHRcdFx0XHRjb25zdCByZXEgPSB0aGlzLnJlcXVpcmVEZXAoa2V5LCBwYXRoKTtcblx0XHRcdFx0aWYocmVxKXtcblx0XHRcdFx0XHR0aGlzLnJlZ2lzdGVyUmVxdWlyZShrZXksIHJlcSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0XG5cdHZhbGlkYXRlQXV0b2xvYWRGaWxlTmFtZShuYW1lKXtcblx0XHRpZihuYW1lLnN1YnN0cigwLDEpPT09JyMnKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0XG5cdHJlcXVpcmVEZXAoa2V5LCByZXF1aXJlUGF0aCl7XG5cdFx0aWYodGhpcy5yZXF1aXJlc1trZXldKXtcblx0XHRcdHJldHVybiB0aGlzLnJlcXVpcmVzW2tleV07XG5cdFx0fVxuXHRcdFxuXHRcdHJlcXVpcmVQYXRoID0gdGhpcy5hdXRvbG9hZFBhdGhSZXNvbHZlcihyZXF1aXJlUGF0aCk7XG5cdFx0XG5cdFx0Y29uc3QgZm91bmQgPSB0aGlzLmF1dG9sb2FkRXh0ZW5zaW9ucy5jb25jYXQoJycpLnNvbWUoIGV4dCA9PiB7XG5cdFx0XHRcblx0XHRcdGNvbnN0IHBhdGhGcmFnbWVudHMgPSByZXF1aXJlUGF0aC5zcGxpdCgnOicpO1xuXHRcdFx0XG5cdFx0XHRcblx0XHRcdGxldCBwYXRoID0gcGF0aEZyYWdtZW50cy5zaGlmdCgpO1xuXHRcdFx0aWYoZXh0KXtcblx0XHRcdFx0cGF0aCArPSAnLicrZXh0O1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRcblx0XHRcdGlmKHRoaXMuZGVwRXhpc3RzKHBhdGgpKXtcblx0XHRcdFx0bGV0IHJlcXVpcmVkID0gdGhpcy5kZXBSZXF1aXJlKHBhdGgpO1xuXHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRpZihwYXRoRnJhZ21lbnRzLmxlbmd0aCl7XG5cdFx0XHRcdFx0cGF0aEZyYWdtZW50cy5mb3JFYWNoKCBzdWJLZXkgPT4ge1xuXHRcdFx0XHRcdFx0aWYodHlwZW9mIHJlcXVpcmVkICE9PSAndW5kZWZpbmVkJyAmJiByZXF1aXJlZCAhPT0gbnVsbCl7XG5cdFx0XHRcdFx0XHRcdHJlcXVpcmVkID0gcmVxdWlyZWRbc3ViS2V5XTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0XG5cdFx0XHRcdHRoaXMucmVxdWlyZXNba2V5XSA9IHJlcXVpcmVkO1xuXHRcdFx0XHRcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9KTtcblx0XHRpZiggISBmb3VuZCAmJiAoKHRoaXMuYXV0b2xvYWRGYWlsT25NaXNzaW5nRmlsZT09PSdwYXRoJyAmJiByZXF1aXJlUGF0aCkgfHwgdGhpcy5hdXRvbG9hZEZhaWxPbk1pc3NpbmdGaWxlPT09dHJ1ZSkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvcignTWlzc2luZyBleHBlY3RlZCBkZXBlbmRlbmN5IGluamVjdGlvbiBmaWxlIFwiJytyZXF1aXJlUGF0aCsnXCInKTtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIHRoaXMucmVxdWlyZXNba2V5XTtcblx0fVxuXHRcblx0XG5cdHJlZ2lzdGVyUmVxdWlyZU1hcChyZXF1aXJlcyl7XG5cdFx0T2JqZWN0LmtleXMocmVxdWlyZXMpLmZvckVhY2goKG5hbWUpPT57XG5cdFx0XHR0aGlzLnJlZ2lzdGVyUmVxdWlyZShuYW1lLHJlcXVpcmVzW25hbWVdKTtcblx0XHR9KTtcblx0fVxuXHRyZWdpc3RlclJlcXVpcmUobmFtZSxyKXtcblx0XHRpZih0eXBlb2YgciA9PSAnb2JqZWN0JyAmJiB0eXBlb2Ygci5kZWZhdWx0ID09ICdmdW5jdGlvbicpe1xuXHRcdFx0ciA9IHIuZGVmYXVsdDtcblx0XHR9XG5cdFx0aWYodHlwZW9mIHIgIT09ICdmdW5jdGlvbicpe1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBydWxlID0gdGhpcy5nZXRSdWxlQmFzZShuYW1lKTtcblx0XHRpZihydWxlLmRlY29yYXRvciAmJiByW3RoaXMuc3ltQ2xhc3NOYW1lXSl7XG5cdFx0XHRyID0gY2xhc3MgZXh0ZW5kcyBye307XG5cdFx0fVxuXHRcdFxuXHRcdGlmKHJ1bGUuZGVjb3JhdG9yKXtcblx0XHRcdHRoaXMuZGVjb3JhdG9yKG5hbWUpKHIpO1xuXHRcdH1cblx0XHRlbHNle1xuXHRcdFx0dGhpcy5yZWdpc3RlckNsYXNzKG5hbWUsIHIpO1xuXHRcdH1cblx0fVxuXHRcblx0XG5cdGRlY29yYXRvcihjbGFzc05hbWUsIHR5cGVzID0gW10pe1xuXHRcdHJldHVybiAodGFyZ2V0KT0+e1xuXHRcdFx0XG5cdFx0XHR0aGlzLmRlZmluZVN5bSh0YXJnZXQsIHRoaXMuc3ltQ2xhc3NOYW1lLCBjbGFzc05hbWUpO1xuXHRcdFx0XG5cdFx0XHR0aGlzLnJlZ2lzdGVyQ2xhc3MoY2xhc3NOYW1lLCB0YXJnZXQpO1xuXHRcdFx0XG5cdFx0XHRpZih0eXBlb2YgdHlwZXMgPT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRcdHR5cGVzID0gdHlwZXMoKTtcblx0XHRcdH1cblx0XHRcdHR5cGVzID0gdHlwZXMubWFwKHR5cGUgPT4gdGhpcy53cmFwVmFyVHlwZSh0eXBlLCB0aGlzLmRlZmF1bHREZWNvcmF0b3JWYXIpKTtcblx0XHRcdFxuXHRcdFx0aWYgKHRhcmdldFt0aGlzLnN5bUludGVyZmFjZXNdKSB7XG5cdFx0XHRcdHR5cGVzID0gdHlwZXMuY29uY2F0KHRhcmdldFt0aGlzLnN5bUludGVyZmFjZXNdKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuZGVmaW5lU3ltKHRhcmdldCwgdGhpcy5zeW1JbnRlcmZhY2VzLCB0eXBlcyk7XG5cdFx0XHRcblx0XHRcdHJldHVybiB0YXJnZXQ7XG5cdFx0fTtcblx0fVxuXHRcblx0ZXhpc3RzKG5hbWUpe1xuXHRcdHJldHVybiBCb29sZWFuKHRoaXMucnVsZXNbbmFtZV0pO1xuXHR9XG5cdFxuXHRnZXQoaW50ZXJmYWNlRGVmLCBhcmdzLCBzaGFyZWRJbnN0YW5jZXMgPSB7fSwgc3RhY2sgPSBbXSl7XG5cdFx0cmV0dXJuIHRoaXMucHJvdmlkZXIoaW50ZXJmYWNlRGVmKShhcmdzLCBzaGFyZWRJbnN0YW5jZXMsIHN0YWNrKTtcblx0fVxuXHRwcm92aWRlcihpbnRlcmZhY2VOYW1lKXtcblx0XHRcblx0XHRpZih0eXBlb2YgaW50ZXJmYWNlTmFtZSA9PSAnZnVuY3Rpb24nKXtcblx0XHRcdGludGVyZmFjZU5hbWUgPSBpbnRlcmZhY2VOYW1lW3RoaXMuc3ltQ2xhc3NOYW1lXTtcblx0XHRcdGlmKCFpbnRlcmZhY2VOYW1lKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdVbnJlZ2lzdHJlZCBjbGFzcyAnK2ludGVyZmFjZU5hbWUuY29uc3RydWN0b3IubmFtZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdGlmKGludGVyZmFjZU5hbWUgaW5zdGFuY2VvZiBJbnRlcmZhY2Upe1xuXHRcdFx0aW50ZXJmYWNlTmFtZSA9IGludGVyZmFjZU5hbWUuZ2V0TmFtZSgpO1xuXHRcdH1cblx0XHRcblx0XHRpZighdGhpcy5wcm92aWRlclJlZ2lzdHJ5W2ludGVyZmFjZU5hbWVdKXtcblx0XHRcdHRoaXMucHJvdmlkZXJSZWdpc3RyeVtpbnRlcmZhY2VOYW1lXSA9IHRoaXMubWFrZVByb3ZpZGVyKGludGVyZmFjZU5hbWUpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5wcm92aWRlclJlZ2lzdHJ5W2ludGVyZmFjZU5hbWVdO1xuXHR9XG5cdFxuXHRtYWtlUHJvdmlkZXIoaW50ZXJmYWNlTmFtZSl7XG5cdFx0Y29uc3QgcnVsZSA9IHRoaXMuZ2V0UnVsZShpbnRlcmZhY2VOYW1lKTtcblx0XHRjb25zdCBjbGFzc0RlZiA9IHRoaXMucmVzb2x2ZUluc3RhbmNlT2YoaW50ZXJmYWNlTmFtZSk7XG5cdFx0cmV0dXJuIChhcmdzLCBzaGFyZWRJbnN0YW5jZXMsIHN0YWNrKT0+e1xuXHRcdFx0XG5cdFx0XHQvL2NoZWNrIGZvciBzaGFyZWQgYWZ0ZXIgcGFyYW1zIGxvYWRcblx0XHRcdGlmKHRoaXMuaW5zdGFuY2VSZWdpc3RyeVtpbnRlcmZhY2VOYW1lXSl7XG5cdFx0XHRcdHJldHVybiB0aGlzLmluc3RhbmNlUmVnaXN0cnlbaW50ZXJmYWNlTmFtZV07XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHNoYXJlZEluc3RhbmNlcyA9IE9iamVjdC5hc3NpZ24oe30sIHNoYXJlZEluc3RhbmNlcyk7XG5cdFx0XHRydWxlLnNoYXJlZEluVHJlZS5mb3JFYWNoKHNoYXJlSW50ZXJmYWNlID0+IHtcblx0XHRcdFx0aWYoIXNoYXJlZEluc3RhbmNlc1tzaGFyZUludGVyZmFjZV0pe1xuXHRcdFx0XHRcdHNoYXJlZEluc3RhbmNlc1tzaGFyZUludGVyZmFjZV0gPSBuZXcgU2hhcmVkSW5zdGFuY2Uoc2hhcmVJbnRlcmZhY2UsIHRoaXMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdFxuXHRcdFx0bGV0IHBhcmFtcztcblx0XHRcdGxldCBkZWZhdWx0VmFyO1xuXHRcdFx0aWYoYXJncyl7XG5cdFx0XHRcdHBhcmFtcyA9IGFyZ3M7XG5cdFx0XHRcdGRlZmF1bHRWYXIgPSB0aGlzLmRlZmF1bHRBcmdzVmFyO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZXtcblx0XHRcdFx0cGFyYW1zID0gcnVsZS5wYXJhbXMgfHwgY2xhc3NEZWZbdGhpcy5zeW1JbnRlcmZhY2VzXSB8fCBbXTtcblx0XHRcdFx0ZGVmYXVsdFZhciA9IHRoaXMuZGVmYXVsdFJ1bGVWYXI7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGNvbnN0IHJlc29sdmVkUGFyYW1zID0gcGFyYW1zLm1hcCgoaW50ZXJmYWNlRGVmLCBpbmRleCk9Pntcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0UGFyYW0oaW50ZXJmYWNlRGVmLCBydWxlLCBzaGFyZWRJbnN0YW5jZXMsIGRlZmF1bHRWYXIsIGluZGV4LCBzdGFjayk7XG5cdFx0XHR9KTtcblx0XHRcdFxuXHRcdFx0Ly9yZWNoZWNrIGZvciBzaGFyZWQgYWZ0ZXIgcGFyYW1zIGxvYWRcblx0XHRcdGlmKHRoaXMuaW5zdGFuY2VSZWdpc3RyeVtpbnRlcmZhY2VOYW1lXSl7XG5cdFx0XHRcdHJldHVybiB0aGlzLmluc3RhbmNlUmVnaXN0cnlbaW50ZXJmYWNlTmFtZV07XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGNvbnN0IG1ha2VJbnN0YW5jZSA9IChyZXNvbHZlZFBhcmFtcyk9Pntcblx0XHRcdFx0XG5cdFx0XHRcdHJlc29sdmVkUGFyYW1zID0gc3RydWN0dXJlZFJlc29sdmVQYXJhbXNJbnRlcmZhY2UocGFyYW1zLCByZXNvbHZlZFBhcmFtcyk7XG5cdFx0XHRcdFxuXHRcdFx0XHRjb25zdCBpbnN0YW5jZSA9IG5ldyBjbGFzc0RlZiguLi5yZXNvbHZlZFBhcmFtcyk7XG5cdFx0XHRcdFxuXHRcdFx0XHRjb25zdCBmaW5hbGl6ZUluc3RhbmNlQ3JlYXRpb24gPSAoKT0+e1xuXHRcdFx0XHRcdGlmKHJ1bGUuc2hhcmVkKXtcblx0XHRcdFx0XHRcdHRoaXMucmVnaXN0ZXJJbnN0YW5jZShpbnRlcmZhY2VOYW1lLCBpbnN0YW5jZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGNvbnN0IGNhbGxzUmV0dXJuID0gdGhpcy5ydW5DYWxscyhydWxlLmxhenlDYWxscywgaW5zdGFuY2UsIHJ1bGUsIHNoYXJlZEluc3RhbmNlcyk7XG5cdFx0XHRcdFx0aWYoY2FsbHNSZXR1cm4gaW5zdGFuY2VvZiB0aGlzLlByb21pc2VJbnRlcmZhY2Upe1xuXHRcdFx0XHRcdFx0cmV0dXJuIGNhbGxzUmV0dXJuLnRoZW4oKCk9Pmluc3RhbmNlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0cmV0dXJuIGluc3RhbmNlO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHRcblx0XHRcdFx0Y29uc3QgY2FsbHNSZXR1cm4gPSB0aGlzLnJ1bkNhbGxzKHJ1bGUuY2FsbHMsIGluc3RhbmNlLCBydWxlLCBzaGFyZWRJbnN0YW5jZXMpO1xuXHRcdFx0XHRpZihjYWxsc1JldHVybiBpbnN0YW5jZW9mIHRoaXMuUHJvbWlzZUludGVyZmFjZSl7XG5cdFx0XHRcdFx0cmV0dXJuIGNhbGxzUmV0dXJuLnRoZW4oKCk9PmZpbmFsaXplSW5zdGFuY2VDcmVhdGlvbigpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0cmV0dXJuIGZpbmFsaXplSW5zdGFuY2VDcmVhdGlvbigpO1xuXHRcdFx0fTtcblx0XHRcdGlmKHN0cnVjdHVyZWRIYXNQcm9taXNlKHBhcmFtcywgcmVzb2x2ZWRQYXJhbXMsIHRoaXMuUHJvbWlzZUludGVyZmFjZSkpe1xuXHRcdFx0XHRyZXR1cm4gc3RydWN0dXJlZFByb21pc2VBbGxSZWN1cnNpdmUocGFyYW1zLCByZXNvbHZlZFBhcmFtcywgdGhpcy5Qcm9taXNlSW50ZXJmYWNlLCB0aGlzLlByb21pc2VGYWN0b3J5ICkudGhlbihyZXNvbHZlZFBhcmFtcz0+e1xuXHRcdFx0XHRcdHJldHVybiBtYWtlSW5zdGFuY2UocmVzb2x2ZWRQYXJhbXMpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0cmV0dXJuIG1ha2VJbnN0YW5jZShyZXNvbHZlZFBhcmFtcyk7XG5cdFx0fTtcblx0fVxuXHRcblx0Z2V0U3Vic3RpdHV0aW9uUGFyYW0oaW50ZXJmYWNlRGVmLCBydWxlLCBpbmRleCl7XG5cdFx0Y29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMud3JhcFZhclR5cGUocnVsZS5zdWJzdGl0dXRpb25zLCB0aGlzLmRlZmF1bHRSdWxlVmFyKTtcblx0XHRcblx0XHRpZih0eXBlb2YgaW5kZXggIT09ICd1bmRlZmluZWQnICYmIHN1YnN0aXR1dGlvbnNbaW5kZXhdKXtcblx0XHRcdGludGVyZmFjZURlZiA9IHN1YnN0aXR1dGlvbnNbaW5kZXhdO1xuXHRcdFx0aW50ZXJmYWNlRGVmID0gdGhpcy53cmFwVmFyVHlwZShpbnRlcmZhY2VEZWYsIHRoaXMuZGVmYXVsdFJ1bGVWYXIsIHRydWUpO1xuXHRcdH1cblx0XHRcblx0XHRpZihpbnRlcmZhY2VEZWYgaW5zdGFuY2VvZiBJbnRlcmZhY2Upe1xuXHRcdFx0Y29uc3QgaW50ZXJmYWNlTmFtZSA9IGludGVyZmFjZURlZi5nZXROYW1lKCk7XG5cdFx0XHRpZihzdWJzdGl0dXRpb25zW2ludGVyZmFjZU5hbWVdKXtcblx0XHRcdFx0aW50ZXJmYWNlRGVmID0gc3Vic3RpdHV0aW9uc1tpbnRlcmZhY2VOYW1lXTtcblx0XHRcdFx0aW50ZXJmYWNlRGVmID0gdGhpcy53cmFwVmFyVHlwZShpbnRlcmZhY2VEZWYsIHRoaXMuZGVmYXVsdFJ1bGVWYXIsIHRydWUpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fVxuXHRcdHJldHVybiBpbnRlcmZhY2VEZWY7XG5cdH1cblx0Z2V0UGFyYW0oaW50ZXJmYWNlRGVmLCBydWxlLCBzaGFyZWRJbnN0YW5jZXMsIGRlZmF1bHRWYXIgPSAnaW50ZXJmYWNlJywgaW5kZXggPSB1bmRlZmluZWQsIHN0YWNrID0gW10pe1xuXHRcdFxuXHRcdGludGVyZmFjZURlZiA9IHRoaXMud3JhcFZhclR5cGUoaW50ZXJmYWNlRGVmLCBkZWZhdWx0VmFyKTtcblx0XHRcblx0XHRpbnRlcmZhY2VEZWYgPSB0aGlzLmdldFN1YnN0aXR1dGlvblBhcmFtKGludGVyZmFjZURlZiwgcnVsZSwgaW5kZXgpO1xuXHRcdFxuXHRcdGlmKGludGVyZmFjZURlZiBpbnN0YW5jZW9mIEZhY3Rvcnkpe1xuXHRcdFx0cmV0dXJuIGludGVyZmFjZURlZi5jYWxsYmFjayhzaGFyZWRJbnN0YW5jZXMpO1xuXHRcdH1cblx0XHRpZihpbnRlcmZhY2VEZWYgaW5zdGFuY2VvZiBWYWx1ZSl7XG5cdFx0XHRyZXR1cm4gaW50ZXJmYWNlRGVmLmdldFZhbHVlKCk7XG5cdFx0fVxuXHRcdGlmKGludGVyZmFjZURlZiBpbnN0YW5jZW9mIFJlcXVpcmUpe1xuXHRcdFx0cmV0dXJuIGludGVyZmFjZURlZi5yZXF1aXJlKCk7XG5cdFx0fVxuXHRcdFxuXHRcdGlmKGludGVyZmFjZURlZiBpbnN0YW5jZW9mIEludGVyZmFjZSl7XG5cdFx0XHRcblx0XHRcdGNvbnN0IGludGVyZmFjZU5hbWUgPSBpbnRlcmZhY2VEZWYuZ2V0TmFtZSgpO1xuXHRcdFx0XG5cdFx0XHRzdGFjayA9IHN0YWNrLnNsaWNlKDApO1xuXHRcdFx0aWYoc3RhY2suaW5kZXhPZihpbnRlcmZhY2VOYW1lKSE9PS0xKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdDeWNsaWMgZGVwZW5kZW5jeSBlcnJvciBpbiAnK0pTT04uc3RyaW5naWZ5KHN0YWNrLmNvbmNhdChpbnRlcmZhY2VOYW1lKSxudWxsLDIpKTtcblx0XHRcdH1cblx0XHRcdHN0YWNrLnB1c2goaW50ZXJmYWNlTmFtZSk7XG5cdFx0XHRcblx0XHRcdGxldCBpbnN0YW5jZTtcblx0XHRcdFxuXHRcdFx0aWYoc2hhcmVkSW5zdGFuY2VzW2ludGVyZmFjZU5hbWVdKXtcblx0XHRcdFx0aW5zdGFuY2UgPSBzaGFyZWRJbnN0YW5jZXNbaW50ZXJmYWNlTmFtZV0uZ2V0KHNoYXJlZEluc3RhbmNlcywgc3RhY2spO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZXtcblx0XHRcdFx0aW5zdGFuY2UgPSB0aGlzLmdldChpbnRlcmZhY2VOYW1lLCB1bmRlZmluZWQsIHNoYXJlZEluc3RhbmNlcywgc3RhY2spO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRjb25zdCBpbnN0YW5jZVJ1bGUgPSB0aGlzLmdldFJ1bGUoaW50ZXJmYWNlTmFtZSk7XG5cdFx0XHRcblx0XHRcdC8vaWYoIWluc3RhbmNlUnVsZS5hc3luY1Jlc29sdmUgJiYgaW5zdGFuY2UgaW5zdGFuY2VvZiB0aGlzLlByb21pc2VJbnRlcmZhY2Upe1xuXHRcdFx0aWYoIWluc3RhbmNlUnVsZS5hc3luY1Jlc29sdmUpe1xuXHRcdFx0XHRyZXR1cm4gbmV3IFN5bmMoaW5zdGFuY2UpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRyZXR1cm4gaW5zdGFuY2U7XG5cdFx0fVxuXHRcdFxuXHRcdGlmKHR5cGVvZiBpbnRlcmZhY2VEZWYgPT0gJ29iamVjdCcgJiYgIShpbnRlcmZhY2VEZWYgaW5zdGFuY2VvZiBWYXIpKXtcblx0XHRcdGNvbnN0IG8gPSB7fTtcblx0XHRcdE9iamVjdC5rZXlzKGludGVyZmFjZURlZikuZm9yRWFjaChrID0+IHtcblx0XHRcdFx0b1trXSA9IHRoaXMuZ2V0UGFyYW0oaW50ZXJmYWNlRGVmW2tdLCBydWxlLCBzaGFyZWRJbnN0YW5jZXMsIGRlZmF1bHRWYXIsIHVuZGVmaW5lZCwgc3RhY2spO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gbztcblx0XHR9XG5cdFxuXHRcdHJldHVybiBpbnRlcmZhY2VEZWY7XG5cdH1cblx0XG5cdHdyYXBWYXJUeXBlKHR5cGUsIGRlZmF1bHRWYXIsIHJlc29sdmVGdW5jdGlvbil7XG5cdFx0aWYocmVzb2x2ZUZ1bmN0aW9uICYmIHR5cGVvZiB0eXBlID09ICdmdW5jdGlvbicpe1xuXHRcdFx0dHlwZSA9IHR5cGUoKTtcblx0XHR9XG5cdFx0aWYodHlwZSBpbnN0YW5jZW9mIFZhcil7XG5cdFx0XHRyZXR1cm4gdHlwZTtcblx0XHR9XG5cdFx0c3dpdGNoKGRlZmF1bHRWYXIpe1xuXHRcdFx0Y2FzZSAnaW50ZXJmYWNlJzpcblx0XHRcdFx0aWYodHlwZW9mIHR5cGUgPT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCl7XG5cdFx0XHRcdFx0Y29uc3QgbyA9IHt9O1xuXHRcdFx0XHRcdE9iamVjdC5rZXlzKHR5cGUpLmZvckVhY2goa2V5PT57XG5cdFx0XHRcdFx0XHRjb25zdCB2ID0gdHlwZVtrZXldO1xuXHRcdFx0XHRcdFx0b1trZXldID0gdHlwZW9mIHYgPT0gJ29iamVjdCcgJiYgdiAhPT0gbnVsbCAmJiAhKHYgaW5zdGFuY2VvZiBWYXIpID8gdGhpcy53cmFwVmFyVHlwZSh2LCBkZWZhdWx0VmFyKSA6IHY7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0cmV0dXJuIG87XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYodHlwZW9mIHR5cGUgPT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZmFjdG9yeSh0eXBlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcy5pbnRlcmZhY2UodHlwZSk7XG5cdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3ZhbHVlJzpcblx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWUodHlwZSk7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdFx0cmV0dXJuIHR5cGU7XG5cdH1cblx0XG5cdHJlZ2lzdGVySW5zdGFuY2UobmFtZSwgaW5zdGFuY2Upe1xuXHRcdHRoaXMuaW5zdGFuY2VSZWdpc3RyeVtuYW1lXSA9IGluc3RhbmNlO1xuXHR9XG5cdFxuXHRnZXRSdWxlQmFzZShpbnRlcmZhY2VOYW1lKXtcblx0XHRjb25zdCBydWxlQmFzZSA9IHRoaXMubWVyZ2VSdWxlKHt9LCB0aGlzLnJ1bGVzRGVmYXVsdCk7XG5cdFx0cnVsZUJhc2UuaW50ZXJmYWNlTmFtZSA9IGludGVyZmFjZU5hbWU7IC8vZm9yIGluZm9cblx0XHR0aGlzLm1lcmdlUnVsZShydWxlQmFzZSwgdGhpcy5ydWxlc1tpbnRlcmZhY2VOYW1lXSB8fCB7fSk7XG5cdFx0cmV0dXJuIHJ1bGVCYXNlO1xuXHR9XG5cdFxuXHRnZXRSdWxlKGludGVyZmFjZU5hbWUpe1xuXHRcdGNvbnN0IHJ1bGUgPSB0aGlzLm1lcmdlUnVsZSh7fSwgdGhpcy5ydWxlc0RlZmF1bHQpO1xuXHRcdHJ1bGUuaW50ZXJmYWNlTmFtZSA9IGludGVyZmFjZU5hbWU7IC8vZm9yIGluZm9cblx0XHRpZighaW50ZXJmYWNlTmFtZSl7XG5cdFx0XHRyZXR1cm4gcnVsZTtcblx0XHR9XG5cdFx0XG5cdFx0Y29uc3QgcnVsZUJhc2UgPSB0aGlzLmdldFJ1bGVCYXNlKGludGVyZmFjZU5hbWUpO1xuXHRcdFxuXHRcdGxldCBzdGFjayA9IFtdO1xuXHRcdFxuXHRcdHRoaXMucmVzb2x2ZUluc3RhbmNlT2YoaW50ZXJmYWNlTmFtZSwgc3RhY2spO1xuXHRcdFxuXHRcdGNvbnN0IHJ1bGVzID0gW107XG5cdFx0XG5cdFx0bGV0IGZ1bGxTdGFjaztcblx0XHRcblx0XHRpZihydWxlQmFzZS5pbmhlcml0SW5zdGFuY2VPZil7IFxuXHRcdFx0ZnVsbFN0YWNrID0gbmV3IFNldCggc3RhY2suc2xpY2UoMCwgLTEpICk7XG5cdFx0fVxuXHRcdGVsc2V7XG5cdFx0XHRmdWxsU3RhY2sgPSBuZXcgU2V0KCBzdGFjay5zbGljZSgwLCAxKSApO1xuXHRcdH1cblx0XHRcblx0XHRcblx0XHRpZihydWxlQmFzZS5pbmhlcml0UHJvdG90eXBlKXtcblx0XHRcdHN0YWNrLnJldmVyc2UoKS5mb3JFYWNoKChjKT0+e1xuXHRcdFx0XHRpZih0eXBlb2YgYyA9PSAnZnVuY3Rpb24nKXtcblx0XHRcdFx0XHRsZXQgcGFyZW50UHJvdG8gPSBjO1xuXHRcdFx0XHRcdGxldCBjbGFzc05hbWU7XG5cdFx0XHRcdFx0d2hpbGUocGFyZW50UHJvdG8pe1xuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lID0gcGFyZW50UHJvdG9bdGhpcy5zeW1DbGFzc05hbWVdO1xuXHRcdFx0XHRcdFx0aWYoY2xhc3NOYW1lKXtcblx0XHRcdFx0XHRcdFx0ZnVsbFN0YWNrLmFkZChjbGFzc05hbWUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cGFyZW50UHJvdG8gPSBSZWZsZWN0LmdldFByb3RvdHlwZU9mKHBhcmVudFByb3RvKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0XHRmdWxsU3RhY2sgPSBBcnJheS5mcm9tKGZ1bGxTdGFjaykucmV2ZXJzZSgpO1xuXHRcdFxuXHRcdGZ1bGxTdGFjay5mb3JFYWNoKChjbGFzc05hbWUpPT57XG5cdFx0XHRjb25zdCBtZXJnZVJ1bGUgPSB0aGlzLnJ1bGVzW2NsYXNzTmFtZV07XG5cdFx0XHRcdFxuXHRcdFx0aWYobWVyZ2VSdWxlLmluaGVyaXRNaXhpbnMpe1xuXHRcdFx0XHR0aGlzLm1peGluc1J1bGUocnVsZSwgbWVyZ2VSdWxlLmluaGVyaXRNaXhpbnMpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHR0aGlzLm1lcmdlUnVsZShydWxlLCBtZXJnZVJ1bGUpO1xuXHRcdH0pO1xuXHRcdFxuXHRcdHJldHVybiBydWxlO1xuXHR9XG5cdFxuXHRtaXhpbnNSdWxlKHJ1bGUsIG1peGluc0dyb3VwKXtcblx0XHRjb25zdCBtaXhpbnNHcm91cHMgPSB0aGlzLnJ1bGVDb2xsZWN0RXh0ZW5kc1JlY3Vyc2l2ZShtaXhpbnNHcm91cCkucmV2ZXJzZSgpO1xuXHRcdG1peGluc0dyb3Vwcy5mb3JFYWNoKG1peGluR3JvdXAgPT5cblx0XHRcdG1peGluR3JvdXAuZm9yRWFjaCggbWl4aW4gPT4ge1xuXHRcdFx0XHRjb25zdCBtZXJnZVJ1bGUgPSB0aGlzLnJ1bGVzW21peGluXTtcblx0XHRcdFx0dGhpcy5tZXJnZVJ1bGUocnVsZSwgbWVyZ2VSdWxlLCBmYWxzZSlcblx0XHRcdH0gKVxuXHRcdCk7XG5cdH1cblx0cnVsZUNvbGxlY3RFeHRlbmRzUmVjdXJzaXZlKG1peGluR3JvdXAsIG1peGluc0dyb3VwcyA9IFtdKXtcblx0XHRpZighKG1peGluR3JvdXAgaW5zdGFuY2VvZiBBcnJheSkpe1xuXHRcdFx0bWl4aW5Hcm91cCA9IFttaXhpbkdyb3VwXTtcblx0XHR9XG5cdFx0bWl4aW5zR3JvdXBzLnB1c2gobWl4aW5Hcm91cCk7XG5cdFx0bWl4aW5Hcm91cC5mb3JFYWNoKG1peGluID0+IHtcblx0XHRcdGNvbnN0IHJ1bGUgPSB0aGlzLnJ1bGVzW21peGluXTtcblx0XHRcdGlmKHJ1bGUgJiYgcnVsZS5taXhpbnMpe1xuXHRcdFx0XHR0aGlzLnJ1bGVDb2xsZWN0RXh0ZW5kc1JlY3Vyc2l2ZShydWxlLm1peGlucywgbWl4aW5zR3JvdXBzKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRyZXR1cm4gbWl4aW5zR3JvdXBzO1xuXHR9XG5cblx0cmVnaXN0ZXJDbGFzcyhuYW1lLCB0YXJnZXQpe1xuXHRcdGlmKCF0aGlzLnJ1bGVzW25hbWVdKXtcblx0XHRcdHRoaXMucnVsZXNbbmFtZV0gPSB7fTtcblx0XHR9XG5cdFx0dGhpcy5ydWxlc1tuYW1lXS5jbGFzc0RlZiA9IHRhcmdldDtcblx0fVxuXHRcblx0bWVyZ2VSdWxlKGV4dGVuZFJ1bGUsIHJ1bGUsIG1lcmdlRXh0ZW5kID0gdHJ1ZSl7XG5cdFx0bGV0IHtcblx0XHRcdHNoYXJlZCxcblx0XHRcdGluaGVyaXRJbnN0YW5jZU9mLFxuXHRcdFx0aW5oZXJpdFByb3RvdHlwZSxcblx0XHRcdGluaGVyaXRNaXhpbnMsXG5cdFx0XHRpbnN0YW5jZU9mLFxuXHRcdFx0cGFyYW1zLFxuXHRcdFx0Y2FsbHMsXG5cdFx0XHRsYXp5Q2FsbHMsXG5cdFx0XHRzdWJzdGl0dXRpb25zLFxuXHRcdFx0c2hhcmVkSW5UcmVlLFxuXHRcdFx0Y2xhc3NEZWYsXG5cdFx0XHRzaW5nbGV0b24sXG5cdFx0XHRhc3luY1Jlc29sdmUsXG5cdFx0XHRhc3luY0NhbGxzU2VyaWUsXG5cdFx0XHRhc3luY0NhbGxzUGFyYW1zU2VyaWUsXG5cdFx0XHRkZWNvcmF0b3IsXG5cdFx0XHRhdXRvbG9hZCxcblx0XHRcdHBhdGgsXG5cdFx0fSA9IHJ1bGU7XG5cdFx0aWYoY2xhc3NEZWYgIT09IHVuZGVmaW5lZCl7XG5cdFx0XHRleHRlbmRSdWxlLmNsYXNzRGVmID0gY2xhc3NEZWY7XG5cdFx0fVxuXHRcdGlmKHNoYXJlZCAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUuc2hhcmVkID0gc2hhcmVkO1xuXHRcdH1cblx0XHRpZihpbmhlcml0SW5zdGFuY2VPZiAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUuaW5oZXJpdEluc3RhbmNlT2YgPSBpbmhlcml0SW5zdGFuY2VPZjtcblx0XHR9XG5cdFx0aWYoaW5oZXJpdFByb3RvdHlwZSAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUuaW5oZXJpdFByb3RvdHlwZSA9IGluaGVyaXRQcm90b3R5cGU7XG5cdFx0fVxuXHRcdGlmKGRlY29yYXRvciAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUuZGVjb3JhdG9yID0gZGVjb3JhdG9yO1xuXHRcdH1cblx0XHRpZihhdXRvbG9hZCAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUuYXV0b2xvYWQgPSBhdXRvbG9hZDtcblx0XHR9XG5cdFx0aWYocGF0aCAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUucGF0aCA9IHBhdGg7XG5cdFx0fVxuXHRcdGlmKGluc3RhbmNlT2YgIT09IHVuZGVmaW5lZCl7XG5cdFx0XHRleHRlbmRSdWxlLmluc3RhbmNlT2YgPSBpbnN0YW5jZU9mO1xuXHRcdH1cblx0XHRpZihhc3luY1Jlc29sdmUgIT09IHVuZGVmaW5lZCl7XG5cdFx0XHRleHRlbmRSdWxlLmFzeW5jUmVzb2x2ZSA9IGFzeW5jUmVzb2x2ZTtcblx0XHR9XG5cdFx0aWYoYXN5bmNDYWxsc1NlcmllICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5hc3luY0NhbGxzU2VyaWUgPSBhc3luY0NhbGxzU2VyaWU7XG5cdFx0fVxuXHRcdGlmKGFzeW5jQ2FsbHNQYXJhbXNTZXJpZSAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUuYXN5bmNDYWxsc1BhcmFtc1NlcmllID0gYXN5bmNDYWxsc1BhcmFtc1NlcmllO1xuXHRcdH1cblxuXHRcdGlmKGNhbGxzICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5jYWxscyA9ICggZXh0ZW5kUnVsZS5jYWxscyB8fCBbXSApLmNvbmNhdChjYWxscyk7XG5cdFx0fVxuXHRcdGlmKGxhenlDYWxscyAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUubGF6eUNhbGxzID0gKCBleHRlbmRSdWxlLmxhenlDYWxscyB8fCBbXSApLmNvbmNhdChsYXp5Q2FsbHMpO1xuXHRcdH1cblx0XHRcblx0XHRpZihtZXJnZUV4dGVuZCAmJiBpbmhlcml0TWl4aW5zICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5pbmhlcml0TWl4aW5zID0gaW5oZXJpdE1peGlucy5zbGljZSgwKTtcblx0XHR9XG5cdFx0XG5cdFx0aWYocGFyYW1zICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5wYXJhbXMgPSBwYXJhbXM7XG5cdFx0fVxuXHRcdGlmKHN1YnN0aXR1dGlvbnMgIT09IHVuZGVmaW5lZCl7XG5cdFx0XHRpZighZXh0ZW5kUnVsZS5zdWJzdGl0dXRpb25zKXtcblx0XHRcdFx0ZXh0ZW5kUnVsZS5zdWJzdGl0dXRpb25zID0ge307XG5cdFx0XHR9XG5cdFx0XHRPYmplY3QuYXNzaWduKGV4dGVuZFJ1bGUuc3Vic3RpdHV0aW9ucywgc3Vic3RpdHV0aW9ucyk7XG5cdFx0fVxuXHRcdGlmKHNoYXJlZEluVHJlZSAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGlmKCFleHRlbmRSdWxlLnNoYXJlZEluVHJlZSl7XG5cdFx0XHRcdGV4dGVuZFJ1bGUuc2hhcmVkSW5UcmVlID0gW107XG5cdFx0XHR9XG5cdFx0XHRleHRlbmRSdWxlLnNoYXJlZEluVHJlZSA9IEFycmF5LmZyb20oIG5ldyBTZXQoWy4uLmV4dGVuZFJ1bGUuc2hhcmVkSW5UcmVlLCAuLi5zaGFyZWRJblRyZWVdKSApO1xuXHRcdH1cblx0XHRleHRlbmRSdWxlLnNpbmdsZXRvbiA9IHNpbmdsZXRvbjtcblx0XHRyZXR1cm4gZXh0ZW5kUnVsZTtcblx0fVxuXHRcblx0bWVyZ2VSdWxlcyhleHRlbmRSdWxlcywgcnVsZXMpe1xuXHRcdE9iamVjdC5rZXlzKHJ1bGVzKS5mb3JFYWNoKChrKT0+e1xuXHRcdFx0aWYoIWV4dGVuZFJ1bGVzW2tdKXtcblx0XHRcdFx0ZXh0ZW5kUnVsZXNba10gPSB7fTtcblx0XHRcdH1cblx0XHRcdGV4dGVuZFJ1bGVzW2tdID0gdGhpcy5tZXJnZVJ1bGUoZXh0ZW5kUnVsZXNba10sIHJ1bGVzW2tdKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gZXh0ZW5kUnVsZXM7XG5cdH1cblx0XG5cdHJ1bkNhbGxzKGNhbGxzLCBpbnN0YW5jZSwgcnVsZSwgc2hhcmVkSW5zdGFuY2VzKXtcblx0XHRsZXQgaGFzQXN5bmM7XG5cdFx0XG5cdFx0bGV0IGNhbGxlcnMgPSBjYWxscy5tYXAoKGMpPT4gKCk9PiB7XG5cdFx0XHRcblx0XHRcdGlmKHR5cGVvZiBjID09ICdmdW5jdGlvbicpe1xuXHRcdFx0XHRjID0gW2NdO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgWyBtZXRob2QsIHBhcmFtcyA9IFtdLCBhc3luY1Jlc29sdmUgPSBydWxlLmFzeW5jUmVzb2x2ZSAgXSA9IGM7XG5cdFx0XHRcblx0XHRcdGNvbnN0IG1ha2VDYWxsID0gKHJlc29sdmVkUGFyYW1zKT0+e1x0XHRcdFx0XG5cdFx0XHRcdHJlc29sdmVkUGFyYW1zID0gc3RydWN0dXJlZFJlc29sdmVQYXJhbXNJbnRlcmZhY2UocGFyYW1zLCByZXNvbHZlZFBhcmFtcyk7XG5cdFx0XHRcdGxldCBjYWxsUmV0dXJuO1xuXHRcdFx0XHRpZih0eXBlb2YgbWV0aG9kID09ICdmdW5jdGlvbicpe1xuXHRcdFx0XHRcdGNhbGxSZXR1cm4gPSBtZXRob2QoaW5zdGFuY2UsIC4uLnJlc29sdmVkUGFyYW1zKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNle1xuXHRcdFx0XHRcdGNhbGxSZXR1cm4gPSBpbnN0YW5jZVttZXRob2RdKC4uLnJlc29sdmVkUGFyYW1zKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZighYXN5bmNSZXNvbHZlKXtcblx0XHRcdFx0XHRjYWxsUmV0dXJuID0gbmV3IFN5bmMoY2FsbFJldHVybik7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGNhbGxSZXR1cm47XG5cdFx0XHR9O1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRjb25zdCByZXNvbHZlZFBhcmFtcyA9IHBhcmFtcy5tYXAocGFyYW0gPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5nZXRQYXJhbShwYXJhbSwgcnVsZSwgc2hhcmVkSW5zdGFuY2VzLCB0aGlzLmRlZmF1bHRSdWxlVmFyKTtcblx0XHRcdH0pO1xuXHRcdFx0aWYoc3RydWN0dXJlZEhhc1Byb21pc2UocGFyYW1zLCByZXNvbHZlZFBhcmFtcywgdGhpcy5Qcm9taXNlSW50ZXJmYWNlKSl7XG5cdFx0XHRcdGhhc0FzeW5jID0gdHJ1ZTtcblx0XHRcdFx0cmV0dXJuICgpID0+IHN0cnVjdHVyZWRQcm9taXNlQWxsUmVjdXJzaXZlKHBhcmFtcywgcmVzb2x2ZWRQYXJhbXMsIHRoaXMuUHJvbWlzZUludGVyZmFjZSwgdGhpcy5Qcm9taXNlRmFjdG9yeSkudGhlbihyZXNvbHZlZFBhcmFtcz0+e1xuXHRcdFx0XHRcdHJldHVybiBtYWtlQ2FsbChyZXNvbHZlZFBhcmFtcyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZXtcblx0XHRcdFx0cmV0dXJuICgpID0+IG1ha2VDYWxsKHJlc29sdmVkUGFyYW1zKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdH0pO1xuXHRcdFxuXHRcdGNvbnN0IGFzeW5jQ2FsbHNQYXJhbXNTZXJpZSA9IHJ1bGUuYXN5bmNDYWxsc1BhcmFtc1NlcmllO1xuXHRcdGNvbnN0IGFzeW5jQ2FsbHNTZXJpZSA9IHJ1bGUuYXN5bmNDYWxsc1NlcmllIHx8IGFzeW5jQ2FsbHNQYXJhbXNTZXJpZTtcblx0XHRcblx0XHRjb25zdCBtYWtlQ2FsbHMgPSAoY2FsbGVycyk9Pntcblx0XHRcdFxuXHRcdFx0bGV0IGNhbGxlcnNSZXR1cm47XG5cdFx0XHRpZihoYXNBc3luYyl7XG5cdFx0XHRcdGlmKGFzeW5jQ2FsbHNTZXJpZSl7XG5cdFx0XHRcdFx0Y2FsbGVyc1JldHVybiA9IG1hcFNlcmllKGNhbGxlcnMsIChjYWxsZXIpPT57XG5cdFx0XHRcdFx0XHRyZXR1cm4gY2FsbGVyKCk7XG5cdFx0XHRcdFx0fSwgdGhpcy5Qcm9taXNlSW50ZXJmYWNlLCB0aGlzLlByb21pc2VGYWN0b3J5KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNle1xuXHRcdFx0XHRcdGNhbGxlcnNSZXR1cm4gPSB0aGlzLlByb21pc2VGYWN0b3J5LmFsbCggY2FsbGVycy5tYXAoKGNhbGxlcik9Pntcblx0XHRcdFx0XHRcdHJldHVybiBjYWxsZXIoKTtcblx0XHRcdFx0XHR9KSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbHNle1xuXHRcdFx0XHRjYWxsZXJzUmV0dXJuID0gY2FsbGVycy5tYXAoKGNhbGxlcik9Pntcblx0XHRcdFx0XHRjb25zdCBjYWxsZXJSZXR1cm4gPSBjYWxsZXIoKTtcblx0XHRcdFx0XHRpZihjYWxsZXJSZXR1cm4gaW5zdGFuY2VvZiB0aGlzLlByb21pc2VJbnRlcmZhY2Upe1xuXHRcdFx0XHRcdFx0aGFzQXN5bmMgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gY2FsbGVyUmV0dXJuO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0aWYoaGFzQXN5bmMpe1xuXHRcdFx0XHRcdGNhbGxlcnNSZXR1cm4gPSB0aGlzLlByb21pc2VGYWN0b3J5LmFsbChjYWxsZXJzUmV0dXJuKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNhbGxlcnNSZXR1cm47XG5cdFx0fVxuXHRcdFxuXHRcdGlmKGFzeW5jQ2FsbHNQYXJhbXNTZXJpZSl7XG5cdFx0XHRjYWxsZXJzID0gbWFwU2VyaWUoY2FsbGVycywgKGNhbGxlcik9Pntcblx0XHRcdFx0Y2FsbGVyID0gY2FsbGVyKCkoKTtcblx0XHRcdFx0cmV0dXJuIGNhbGxlcjtcblx0XHRcdH0sIHRoaXMuUHJvbWlzZUludGVyZmFjZSwgdGhpcy5Qcm9taXNlRmFjdG9yeSk7XG5cdFx0XHRyZXR1cm4gY2FsbGVycy50aGVuKCBjYWxsZXJzID0+IG1ha2VDYWxscyggY2FsbGVycy5tYXAoY2FsbGVyID0+ICgpID0+IGNhbGxlciApICkgKSA7XG5cdFx0fVxuXHRcdGVsc2V7XG5cdFx0XHRjYWxsZXJzID0gY2FsbGVycy5tYXAoKGNhbGxlcik9PmNhbGxlcigpKTtcblx0XHRcdHJldHVybiBtYWtlQ2FsbHMoY2FsbGVycyk7XG5cdFx0fVxuXHRcdFxuXHR9XG5cdFx0XG5cdGRlZmluZVN5bSh0YXJnZXQsIHN5bW5hbWUsIHZhbHVlKXtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBzeW1uYW1lLCB7XG5cdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHR9KTtcblx0fVxuXHRcblx0cmVzb2x2ZUluc3RhbmNlT2Yoc3RyLCBzdGFjayA9IFtdLCByZXF1aXJlZCA9IHRydWUpe1xuXHRcdGlmKHR5cGVvZiBzdHIgPT0gJ3N0cmluZycpe1xuXHRcdFx0aWYoc3RhY2suaW5kZXhPZihzdHIpIT09LTEpe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0N5Y2xpYyBpbnRlcmZhY2UgZGVmaW5pdGlvbiBlcnJvciBpbiAnK0pTT04uc3RyaW5naWZ5KHN0YWNrLmNvbmNhdChzdHIpLG51bGwsMikpO1xuXHRcdFx0fVxuXHRcdFx0c3RhY2sucHVzaChzdHIpO1xuXHRcdFx0Y29uc3QgcnVsZSA9IHRoaXMucnVsZXNbc3RyXTtcblx0XHRcdGxldCByZXNvbHZlZCA9IGZhbHNlO1xuXHRcdFx0aWYocnVsZSl7XG5cdFx0XHRcdGlmKHJ1bGUuaW5zdGFuY2VPZil7XG5cdFx0XHRcdFx0cmVzb2x2ZWQgPSBydWxlLmluc3RhbmNlT2Y7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZihydWxlLmNsYXNzRGVmKXtcblx0XHRcdFx0XHRyZXNvbHZlZCA9IHJ1bGUuY2xhc3NEZWY7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmKCFyZXNvbHZlZCl7XG5cdFx0XHRcdGlmKCFyZXF1aXJlZCl7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignSW50ZXJmYWNlIGRlZmluaXRpb24gXCInK3N0cisnXCIgbm90IGZvdW5kLCBkaSBsb2FkIHN0YWNrOiAnK0pTT04uc3RyaW5naWZ5KHN0YWNrLCBudWxsLCAyKSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5yZXNvbHZlSW5zdGFuY2VPZihyZXNvbHZlZCwgc3RhY2ssIHJlcXVpcmVkKTtcblx0XHR9XG5cdFx0c3RhY2sucHVzaChzdHIpO1xuXHRcdHJldHVybiBzdHI7XG5cdH1cblx0XG5cdGZhY3RvcnkoY2FsbGJhY2spe1xuXHRcdHJldHVybiBuZXcgRmFjdG9yeShjYWxsYmFjayk7XG5cdH1cblx0aW50ZXJmYWNlKG5hbWUpe1xuXHRcdHJldHVybiBuZXcgSW50ZXJmYWNlKG5hbWUpO1xuXHR9XG5cdHZhbHVlKHZhbHVlKXtcblx0XHRyZXR1cm4gbmV3IFZhbHVlKHZhbHVlKTtcblx0fVxuXHRyZXF1aXJlKGRlcCl7XG5cdFx0cmV0dXJuIG5ldyBSZXF1aXJlKGRlcCk7XG5cdH1cblx0XG5cdGRlcGVuZGVuY3koZGVwKXtcblx0XHRyZXR1cm4gbmV3IERlcGVuZGVuY3koZGVwKTtcblx0fVxuXHRcblx0Y2xhc3NEZWYoY2FsbGJhY2spe1xuXHRcdHJldHVybiBuZXcgQ2xhc3NEZWYoY2FsbGJhY2spO1xuXHR9XG59XG4iXX0=