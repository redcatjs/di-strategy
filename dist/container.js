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

var _getOwnPropertySymbols = _interopRequireDefault(require("babel-runtime/core-js/object/get-own-property-symbols"));

var _getOwnPropertyNames = _interopRequireDefault(require("babel-runtime/core-js/object/get-own-property-names"));

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

var _valueFactory = _interopRequireDefault(require("./valueFactory"));

var _classFactory = _interopRequireDefault(require("./classFactory"));

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
        _ref$defaultFactory = _ref.defaultFactory,
        defaultFactory = _ref$defaultFactory === void 0 ? _valueFactory.default : _ref$defaultFactory,
        _ref$defaultFunctionW = _ref.defaultFunctionWrapper,
        defaultFunctionWrapper = _ref$defaultFunctionW === void 0 ? _classFactory.default : _ref$defaultFunctionW,
        _ref$globalKey = _ref.globalKey,
        globalKey = _ref$globalKey === void 0 ? false : _ref$globalKey,
        _ref$promiseFactory = _ref.promiseFactory,
        promiseFactory = _ref$promiseFactory === void 0 ? _promise.default : _ref$promiseFactory,
        _ref$promiseInterface = _ref.promiseInterfaces,
        promiseInterfaces = _ref$promiseInterface === void 0 ? [_promise.default] : _ref$promiseInterface,
        _ref$interfacePrototy = _ref.interfacePrototype,
        interfacePrototype = _ref$interfacePrototy === void 0 ? undefined : _ref$interfacePrototy;

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
    this.defaultFactory = defaultFactory;
    this.defaultFunctionWrapper = defaultFunctionWrapper;
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
    this.interfacePrototype = interfacePrototype;

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
        case 'interfacePrototype':
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

      (0, _getOwnPropertyNames.default)(rules).forEach(function (interfaceName) {
        return _this3.addRule(interfaceName, rules[interfaceName], false);
      });
      (0, _getOwnPropertySymbols.default)(rules).forEach(function (interfaceName) {
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
      if (typeof name == 'string' && name.substr(0, 1) === '#') {
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

      if (this.isInterfacePrototype(type)) {
        return this.interface(type.toString());
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
            return new this.defaultFunctionWrapper(type);
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
    key: "isInterfacePrototype",
    value: function isInterfacePrototype(type) {
      return this.interfacePrototype !== undefined && type.prototype instanceof this.interfacePrototype;
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

      if (typeof str == 'string' || (0, _typeof2.default)(str) == 'symbol') {
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

          throw new Error('Interface definition ' + ((0, _typeof2.default)(str) == 'symbol' ? 'symbol' : '"' + str + '"') + ' not found, di load stack: ' + (0, _stringify.default)(stack, null, 2));
        }

        return this.resolveInstanceOf(resolved, stack, required);
      }

      stack.push(str);
      return str;
    }
  }, {
    key: "factory",
    value: function factory(callback) {
      return new this.defaultFactory(callback);
    }
  }, {
    key: "valueFactory",
    value: function valueFactory(callback) {
      return new _valueFactory.default(callback);
    }
  }, {
    key: "classFactory",
    value: function classFactory(callback) {
      return new _classFactory.default(callback);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250YWluZXIuanMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwicnVsZXMiLCJydWxlc0RlZmF1bHQiLCJhdXRvbG9hZEZhaWxPbk1pc3NpbmdGaWxlIiwiZGVwZW5kZW5jaWVzIiwiYXV0b2xvYWRFeHRlbnNpb25zIiwiYXV0b2xvYWRQYXRoUmVzb2x2ZXIiLCJwYXRoIiwiZGVmYXVsdFZhciIsImRlZmF1bHRSdWxlVmFyIiwiZGVmYXVsdERlY29yYXRvclZhciIsImRlZmF1bHRBcmdzVmFyIiwiZGVmYXVsdEZhY3RvcnkiLCJkZWZhdWx0RnVuY3Rpb25XcmFwcGVyIiwiZ2xvYmFsS2V5IiwicHJvbWlzZUZhY3RvcnkiLCJwcm9taXNlSW50ZXJmYWNlcyIsImludGVyZmFjZVByb3RvdHlwZSIsInVuZGVmaW5lZCIsInN5bUNsYXNzTmFtZSIsInN5bUludGVyZmFjZXMiLCJwcm92aWRlclJlZ2lzdHJ5IiwiaW5zdGFuY2VSZWdpc3RyeSIsInJlcXVpcmVzIiwic2V0QXV0b2xvYWRQYXRoUmVzb2x2ZXIiLCJsb2FkRXh0ZW5zaW9uUmVnZXgiLCJSZWdFeHAiLCJqb2luIiwiYWxsb3dlZERlZmF1bHRWYXJzIiwidmFsaWRhdGVEZWZhdWx0VmFyIiwiaW5kZXhPZiIsInVuc2hpZnQiLCJQcm9taXNlSW50ZXJmYWNlIiwiUHJvbWlzZUZhY3RvcnkiLCJzZXRHbG9iYWxLZXkiLCJpbmhlcml0SW5zdGFuY2VPZiIsImluaGVyaXRQcm90b3R5cGUiLCJpbmhlcml0TWl4aW5zIiwic2hhcmVkIiwiaW5zdGFuY2VPZiIsImNsYXNzRGVmIiwicGFyYW1zIiwiY2FsbHMiLCJsYXp5Q2FsbHMiLCJzdWJzdGl0dXRpb25zIiwic2hhcmVkSW5UcmVlIiwic2luZ2xldG9uIiwiYXN5bmNSZXNvbHZlIiwiYXN5bmNDYWxsc1NlcmllIiwiZGVjb3JhdG9yIiwiYXV0b2xvYWQiLCJzZXRSdWxlc0RlZmF1bHQiLCJsb2FkRGVwZW5kZW5jaWVzIiwiYWRkUnVsZXMiLCJrZXkiLCJ2YWx1ZSIsImZvckVhY2giLCJjb25maWciLCJrIiwiRXJyb3IiLCJhbGlhc01hcCIsInJlYWxQYXRoIiwiYWxpYXMiLCJzdWJzdHIiLCJsZW5ndGgiLCJnbG9iYWwiLCJkaXJzIiwiY29udGV4dCIsImRpcktleSIsImdldERlcGVuZGVuY3kiLCJrZXlzIiwiZmlsZW5hbWUiLCJsYXN0SW5kZXhPZiIsInNwbGl0IiwicG9wIiwiYWRkUnVsZSIsImludGVyZmFjZU5hbWUiLCJydWxlc0RldGVjdExhenlMb2FkIiwicnVsZSIsImRldGVjdExhenlMb2FkIiwibWVyZ2VSdWxlIiwicHJvY2Vzc1J1bGUiLCJnZXRDbGFzc0RlZiIsInJlZ2lzdGVyUmVxdWlyZSIsInByb3BlcnR5IiwibG9hZFBhdGhzIiwicmVnaXN0ZXJSZXF1aXJlTWFwIiwicnVsZUxhenlMb2FkIiwic3RhY2siLCJjYWxsVmFsIiwibWV0aG9kIiwicnVsZUNoZWNrQ3ljbGljTG9hZCIsInB1c2giLCJjb25jYXQiLCJzb21lIiwicGFyYW0iLCJ2Iiwid3JhcFZhclR5cGUiLCJnZXROYW1lIiwicmVzb2x2ZUluc3RhbmNlT2YiLCJwYXJhbVJ1bGUiLCJnZXRSdWxlIiwiY3ljbGljIiwiY2FsbFYiLCJjbGFzc0RlZk5hbWUiLCJjbGFzc0RlZmluaXRpb24iLCJnZXQiLCJhcmdzIiwidmFsaWRhdGVBdXRvbG9hZEZpbGVOYW1lIiwicmVxIiwicmVxdWlyZURlcCIsIm5hbWUiLCJyZXF1aXJlUGF0aCIsImZvdW5kIiwicGF0aEZyYWdtZW50cyIsInNoaWZ0IiwiZXh0IiwiZGVwRXhpc3RzIiwicmVxdWlyZWQiLCJkZXBSZXF1aXJlIiwic3ViS2V5IiwiciIsImRlZmF1bHQiLCJnZXRSdWxlQmFzZSIsInJlZ2lzdGVyQ2xhc3MiLCJjbGFzc05hbWUiLCJ0eXBlcyIsInRhcmdldCIsImRlZmluZVN5bSIsIm1hcCIsInR5cGUiLCJCb29sZWFuIiwiaW50ZXJmYWNlRGVmIiwic2hhcmVkSW5zdGFuY2VzIiwicHJvdmlkZXIiLCJjb25zdHJ1Y3RvciIsIm1ha2VQcm92aWRlciIsInNoYXJlSW50ZXJmYWNlIiwicmVzb2x2ZWRQYXJhbXMiLCJpbmRleCIsImdldFBhcmFtIiwibWFrZUluc3RhbmNlIiwiaW5zdGFuY2UiLCJmaW5hbGl6ZUluc3RhbmNlQ3JlYXRpb24iLCJyZWdpc3Rlckluc3RhbmNlIiwiY2FsbHNSZXR1cm4iLCJydW5DYWxscyIsInRoZW4iLCJnZXRTdWJzdGl0dXRpb25QYXJhbSIsImNhbGxiYWNrIiwiZ2V0VmFsdWUiLCJyZXF1aXJlIiwic2xpY2UiLCJpbnN0YW5jZVJ1bGUiLCJvIiwicmVzb2x2ZUZ1bmN0aW9uIiwiaXNJbnRlcmZhY2VQcm90b3R5cGUiLCJpbnRlcmZhY2UiLCJ0b1N0cmluZyIsInByb3RvdHlwZSIsInJ1bGVCYXNlIiwiZnVsbFN0YWNrIiwicmV2ZXJzZSIsImMiLCJwYXJlbnRQcm90byIsImFkZCIsIm1peGluc1J1bGUiLCJtaXhpbnNHcm91cCIsIm1peGluc0dyb3VwcyIsInJ1bGVDb2xsZWN0RXh0ZW5kc1JlY3Vyc2l2ZSIsIm1peGluR3JvdXAiLCJtaXhpbiIsIkFycmF5IiwibWl4aW5zIiwiZXh0ZW5kUnVsZSIsIm1lcmdlRXh0ZW5kIiwiYXN5bmNDYWxsc1BhcmFtc1NlcmllIiwiZXh0ZW5kUnVsZXMiLCJoYXNBc3luYyIsImNhbGxlcnMiLCJtYWtlQ2FsbCIsImNhbGxSZXR1cm4iLCJtYWtlQ2FsbHMiLCJjYWxsZXJzUmV0dXJuIiwiY2FsbGVyIiwiYWxsIiwiY2FsbGVyUmV0dXJuIiwic3ltbmFtZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJzdHIiLCJyZXNvbHZlZCIsImRlcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztJQUVx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LGlCQUFMLENBQXVCNEYsUUFBdkIsRUFBaUN2RyxLQUFqQyxFQUF3QzhCLFFBQXhDLENBQVA7QUFDQTs7QUFDRDlCLFlBQU1JLElBQU4sQ0FBV2tHLEdBQVg7QUFDQSxhQUFPQSxHQUFQO0FBQ0E7Ozs0QkFFT3pDLFEsRUFBUztBQUNoQixhQUFPLElBQUksS0FBS3pJLGNBQVQsQ0FBd0J5SSxRQUF4QixDQUFQO0FBQ0E7OztpQ0FDWUEsUSxFQUFTO0FBQ3JCLGFBQU8sMEJBQWlCQSxRQUFqQixDQUFQO0FBQ0E7OztpQ0FDWUEsUSxFQUFTO0FBQ3JCLGFBQU8sMEJBQWlCQSxRQUFqQixDQUFQO0FBQ0E7OzsrQkFDU3RDLEksRUFBSztBQUNkLGFBQU8sd0JBQWNBLElBQWQsQ0FBUDtBQUNBOzs7MEJBQ0t4RCxNLEVBQU07QUFDWCxhQUFPLG9CQUFVQSxNQUFWLENBQVA7QUFDQTs7OzRCQUNPeUksRyxFQUFJO0FBQ1gsYUFBTyxxQkFBWUEsR0FBWixDQUFQO0FBQ0E7OzsrQkFFVUEsRyxFQUFJO0FBQ2QsYUFBTyx3QkFBZUEsR0FBZixDQUFQO0FBQ0E7Ozs2QkFFUTNDLFEsRUFBUztBQUNqQixhQUFPLHNCQUFhQSxRQUFiLENBQVA7QUFDQSIsImZpbGUiOiJjb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWFwU2VyaWUgZnJvbSAnLi9tYXBTZXJpZSdcblxuaW1wb3J0IFZhciBmcm9tICcuL3ZhcidcbmltcG9ydCBGYWN0b3J5IGZyb20gJy4vZmFjdG9yeSdcbmltcG9ydCBWYWx1ZUZhY3RvcnkgZnJvbSAnLi92YWx1ZUZhY3RvcnknXG5pbXBvcnQgQ2xhc3NGYWN0b3J5IGZyb20gJy4vY2xhc3NGYWN0b3J5J1xuaW1wb3J0IFZhbHVlIGZyb20gJy4vdmFsdWUnXG5pbXBvcnQgSW50ZXJmYWNlIGZyb20gJy4vaW50ZXJmYWNlJ1xuaW1wb3J0IFJlcXVpcmUgZnJvbSAnLi9yZXF1aXJlJ1xuXG5pbXBvcnQgU2hhcmVkSW5zdGFuY2UgZnJvbSAnLi9zaGFyZWRJbnN0YW5jZSdcblxuaW1wb3J0IENsYXNzRGVmIGZyb20gJy4vY2xhc3NEZWYnXG5cbmltcG9ydCBEZXBlbmRlbmN5IGZyb20gJy4vZGVwZW5kZW5jeSdcblxuaW1wb3J0IG1ha2VDb250YWluZXJBcGkgZnJvbSAnLi9tYWtlQ29udGFpbmVyQXBpJ1xuXG5pbXBvcnQgU3luYyBmcm9tICcuL3N5bmMnXG5pbXBvcnQgc3RydWN0dXJlZEhhc1Byb21pc2UgZnJvbSAnLi9zdHJ1Y3R1cmVkSGFzUHJvbWlzZSdcbmltcG9ydCBzdHJ1Y3R1cmVkUHJvbWlzZUFsbFJlY3Vyc2l2ZSBmcm9tICcuL3N0cnVjdHVyZWRQcm9taXNlQWxsUmVjdXJzaXZlJ1xuaW1wb3J0IHN0cnVjdHVyZWRSZXNvbHZlUGFyYW1zSW50ZXJmYWNlIGZyb20gJy4vc3RydWN0dXJlZFJlc29sdmVQYXJhbXNJbnRlcmZhY2UnXG5cbmltcG9ydCBwcm9taXNlSW50ZXJmYWNlIGZyb20gJy4vcHJvbWlzZUludGVyZmFjZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFpbmVye1xuXG5cdGNvbnN0cnVjdG9yKHtcblx0XHRydWxlcyA9IHt9LFxuXHRcdFxuXHRcdHJ1bGVzRGVmYXVsdCA9IHt9LFxuXHRcdFxuXHRcdGF1dG9sb2FkRmFpbE9uTWlzc2luZ0ZpbGUgPSAncGF0aCcsXG5cdFx0ZGVwZW5kZW5jaWVzID0ge30sXG5cdFx0YXV0b2xvYWRFeHRlbnNpb25zID0gWydqcyddLFxuXHRcdGF1dG9sb2FkUGF0aFJlc29sdmVyID0gKHBhdGgpPT5wYXRoLFxuXHRcdFxuXHRcdGRlZmF1bHRWYXIgPSAnaW50ZXJmYWNlJyxcblx0XHRkZWZhdWx0UnVsZVZhciA9IG51bGwsXG5cdFx0ZGVmYXVsdERlY29yYXRvclZhciA9IG51bGwsXG5cdFx0ZGVmYXVsdEFyZ3NWYXIgPSBudWxsLFxuXHRcdFxuXHRcdGRlZmF1bHRGYWN0b3J5ID0gVmFsdWVGYWN0b3J5LFxuXHRcdGRlZmF1bHRGdW5jdGlvbldyYXBwZXIgPSBDbGFzc0ZhY3RvcnksXG5cdFx0XG5cdFx0Z2xvYmFsS2V5ID0gZmFsc2UsXG5cdFx0XG5cdFx0cHJvbWlzZUZhY3RvcnkgPSBQcm9taXNlLFxuXHRcdHByb21pc2VJbnRlcmZhY2VzID0gWyBQcm9taXNlIF0sXG5cdFx0XG5cdFx0aW50ZXJmYWNlUHJvdG90eXBlID0gdW5kZWZpbmVkLFxuXHRcdFxuXHR9ID0ge30pe1xuXHRcdFxuXHRcdHRoaXMuc3ltQ2xhc3NOYW1lID0gU3ltYm9sKCdjbGFzc05hbWUnKTtcblx0XHR0aGlzLnN5bUludGVyZmFjZXMgPSBTeW1ib2woJ3R5cGVzJyk7XG5cdFx0dGhpcy5wcm92aWRlclJlZ2lzdHJ5ID0ge307XG5cdFx0dGhpcy5pbnN0YW5jZVJlZ2lzdHJ5ID0ge307XG5cdFx0XG5cdFx0dGhpcy5yZXF1aXJlcyA9IHt9O1xuXHRcdHRoaXMuYXV0b2xvYWRFeHRlbnNpb25zID0gYXV0b2xvYWRFeHRlbnNpb25zO1xuXHRcdHRoaXMuYXV0b2xvYWRGYWlsT25NaXNzaW5nRmlsZSA9IGF1dG9sb2FkRmFpbE9uTWlzc2luZ0ZpbGU7XG5cdFx0dGhpcy5kZXBlbmRlbmNpZXMgPSBkZXBlbmRlbmNpZXM7XG5cdFx0dGhpcy5zZXRBdXRvbG9hZFBhdGhSZXNvbHZlcihhdXRvbG9hZFBhdGhSZXNvbHZlcik7XG5cdFx0dGhpcy5sb2FkRXh0ZW5zaW9uUmVnZXggPSBuZXcgUmVnRXhwKCdcXC4oJyt0aGlzLmF1dG9sb2FkRXh0ZW5zaW9ucy5qb2luKCd8JykrJykkJyk7XG5cdFx0XG5cdFx0dGhpcy5kZWZhdWx0UnVsZVZhciA9IGRlZmF1bHRSdWxlVmFyIHx8IGRlZmF1bHRWYXI7XG5cdFx0dGhpcy5kZWZhdWx0RGVjb3JhdG9yVmFyID0gZGVmYXVsdERlY29yYXRvclZhciB8fCBkZWZhdWx0VmFyO1xuXHRcdHRoaXMuZGVmYXVsdEFyZ3NWYXIgPSBkZWZhdWx0QXJnc1ZhciB8fCBkZWZhdWx0VmFyO1xuXHRcdFxuXHRcdHRoaXMuZGVmYXVsdEZhY3RvcnkgPSBkZWZhdWx0RmFjdG9yeTtcblx0XHR0aGlzLmRlZmF1bHRGdW5jdGlvbldyYXBwZXIgPSBkZWZhdWx0RnVuY3Rpb25XcmFwcGVyO1xuXHRcdFxuXHRcdHRoaXMuYWxsb3dlZERlZmF1bHRWYXJzID0gWydpbnRlcmZhY2UnLCd2YWx1ZSddO1xuXHRcdHRoaXMudmFsaWRhdGVEZWZhdWx0VmFyKGRlZmF1bHRWYXIsICdkZWZhdWx0VmFyJyk7XG5cdFx0dGhpcy52YWxpZGF0ZURlZmF1bHRWYXIodGhpcy5kZWZhdWx0UnVsZVZhciwgJ2RlZmF1bHRSdWxlVmFyJyk7XG5cdFx0dGhpcy52YWxpZGF0ZURlZmF1bHRWYXIodGhpcy5kZWZhdWx0RGVjb3JhdG9yVmFyLCAnZGVmYXVsdERlY29yYXRvclZhcicpO1xuXHRcdHRoaXMudmFsaWRhdGVEZWZhdWx0VmFyKHRoaXMuZGVmYXVsdEFyZ3NWYXIsICdkZWZhdWx0QXJnc1ZhcicpO1xuXHRcdFxuXHRcdGlmKHByb21pc2VJbnRlcmZhY2VzLmluZGV4T2YocHJvbWlzZUZhY3RvcnkpID09PSAtMSl7XG5cdFx0XHRwcm9taXNlSW50ZXJmYWNlcy51bnNoaWZ0KHByb21pc2VGYWN0b3J5KTtcblx0XHR9XG5cdFx0dGhpcy5Qcm9taXNlSW50ZXJmYWNlID0gcHJvbWlzZUludGVyZmFjZShwcm9taXNlSW50ZXJmYWNlcyk7XG5cdFx0dGhpcy5Qcm9taXNlRmFjdG9yeSA9IHByb21pc2VGYWN0b3J5O1xuXHRcdFxuXHRcdHRoaXMuaW50ZXJmYWNlUHJvdG90eXBlID0gaW50ZXJmYWNlUHJvdG90eXBlO1xuXHRcdFxuXHRcdGlmKGdsb2JhbEtleSl7XG5cdFx0XHR0aGlzLnNldEdsb2JhbEtleShnbG9iYWxLZXkpO1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLnJ1bGVzRGVmYXVsdCA9IHtcblx0XHRcdFxuXHRcdFx0aW5oZXJpdEluc3RhbmNlT2Y6IHRydWUsXG5cdFx0XHRpbmhlcml0UHJvdG90eXBlOiBmYWxzZSxcblx0XHRcdGluaGVyaXRNaXhpbnM6IFtdLFxuXHRcdFx0XG5cdFx0XHRzaGFyZWQ6IGZhbHNlLFxuXHRcdFx0aW5zdGFuY2VPZjogdW5kZWZpbmVkLFxuXHRcdFx0Y2xhc3NEZWY6IHVuZGVmaW5lZCxcblx0XHRcdHBhcmFtczogdW5kZWZpbmVkLFxuXHRcdFx0XG5cdFx0XHRjYWxsczogW10sXG5cdFx0XHRsYXp5Q2FsbHM6IFtdLFxuXHRcdFx0XG5cdFx0XHRzdWJzdGl0dXRpb25zOiBbXSxcblx0XHRcdHNoYXJlZEluVHJlZTogW10sXG5cdFx0XHRcblx0XHRcdHNpbmdsZXRvbjogdW5kZWZpbmVkLFxuXHRcdFx0XG5cdFx0XHRhc3luY1Jlc29sdmU6IGZhbHNlLFxuXHRcdFx0YXN5bmNDYWxsc1NlcmllOiBmYWxzZSxcblx0XHRcdFxuXHRcdFx0ZGVjb3JhdG9yOiBmYWxzZSxcblx0XHRcdFxuXHRcdFx0YXV0b2xvYWQ6IGZhbHNlLFxuXHRcdFx0cGF0aDogdW5kZWZpbmVkLFxuXHRcdFx0XG5cdFx0fTtcblx0XHR0aGlzLnNldFJ1bGVzRGVmYXVsdChydWxlc0RlZmF1bHQpO1xuXHRcdHRoaXMucnVsZXMgPSB7fTtcblx0XHRcblx0XHR0aGlzLmxvYWREZXBlbmRlbmNpZXMoKTtcblx0XHR0aGlzLmFkZFJ1bGVzKHJ1bGVzKTtcblx0XHRcblx0fVxuXHRcblx0Y29uZmlnKGtleSwgdmFsdWUpe1xuXHRcdGlmKHR5cGVvZiBrZXkgPT09ICdvYmplY3QnKXtcblx0XHRcdE9iamVjdC5rZXlzKGtleSkuZm9yRWFjaChrPT50aGlzLmNvbmZpZyhrLCBrZXlba10pKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0c3dpdGNoKGtleSl7XG5cdFx0XHRjYXNlICdhdXRvbG9hZEZhaWxPbk1pc3NpbmdGaWxlICc6XG5cdFx0XHRjYXNlICdhdXRvbG9hZEV4dGVuc2lvbnMnOlxuXHRcdFx0Y2FzZSAnZGVmYXVsdFZhcic6XG5cdFx0XHRjYXNlICdkZWZhdWx0UnVsZVZhcic6XG5cdFx0XHRjYXNlICdkZWZhdWx0RGVjb3JhdG9yVmFyJzpcblx0XHRcdGNhc2UgJ2RlZmF1bHRBcmdzVmFyJzpcblx0XHRcdGNhc2UgJ2ludGVyZmFjZVByb3RvdHlwZSc6XG5cdFx0XHRcdHRoaXNba2V5XSA9IHZhbHVlO1xuXHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdnbG9iYWxrZXknOlxuXHRcdFx0XHR0aGlzLnNldEdsb2JhbEtleSh2YWx1ZSk7XG5cdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2F1dG9sb2FkUGF0aFJlc29sdmVyJzpcblx0XHRcdFx0dGhpcy5zZXRBdXRvbG9hZFBhdGhSZXNvbHZlcih2YWx1ZSk7XG5cdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3J1bGVzRGVmYXVsdCc6XG5cdFx0XHRcdHRoaXMuc2V0UnVsZXNEZWZhdWx0KHZhbHVlKTtcblx0XHRcdGJyZWFrO1xuXHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgY29uZmlnIGtleSAnK2tleSk7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblx0XG5cdHNldFJ1bGVzRGVmYXVsdChydWxlc0RlZmF1bHQpe1xuXHRcdHRoaXMucnVsZXNEZWZhdWx0ID0ge1xuXHRcdFx0Li4udGhpcy5ydWxlc0RlZmF1bHQsXG5cdFx0XHQuLi5ydWxlc0RlZmF1bHQsXG5cdFx0fTtcblx0fVxuXHRcblx0c2V0QXV0b2xvYWRQYXRoUmVzb2x2ZXIoYXV0b2xvYWRQYXRoUmVzb2x2ZXIpe1xuXHRcdFxuXHRcdGlmKHR5cGVvZiBhdXRvbG9hZFBhdGhSZXNvbHZlciA9PSAnb2JqZWN0Jyl7XG5cdFx0XHRcblx0XHRcdGNvbnN0IGFsaWFzTWFwID0gYXV0b2xvYWRQYXRoUmVzb2x2ZXI7XG5cdFx0XHRhdXRvbG9hZFBhdGhSZXNvbHZlciA9IChwYXRoKT0+e1xuXHRcdFx0XHRPYmplY3Qua2V5cyhhbGlhc01hcCkuZm9yRWFjaChhbGlhcz0+e1xuXHRcdFx0XHRcdGNvbnN0IHJlYWxQYXRoID0gYWxpYXNNYXBbYWxpYXNdO1xuXHRcdFx0XHRcdGlmKHBhdGggPT0gYWxpYXMpe1xuXHRcdFx0XHRcdFx0cGF0aCA9IHJlYWxQYXRoO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGlmKHBhdGguc3Vic3RyKDAsYWxpYXMubGVuZ3RoKzEpPT1hbGlhcysnLycpe1xuXHRcdFx0XHRcdFx0cGF0aCA9IHJlYWxQYXRoK3BhdGguc3Vic3RyKGFsaWFzLmxlbmd0aCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuIHBhdGg7XG5cdFx0XHR9O1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLmF1dG9sb2FkUGF0aFJlc29sdmVyID0gYXV0b2xvYWRQYXRoUmVzb2x2ZXI7XG5cdH1cblx0XG5cdHNldEdsb2JhbEtleShnbG9iYWxLZXkpe1xuXHRcdGlmKGdsb2JhbEtleT09PXRydWUpe1xuXHRcdFx0Z2xvYmFsS2V5ID0gJ2RpJztcblx0XHR9XG5cdFx0Z2xvYmFsW2dsb2JhbEtleV0gPSBtYWtlQ29udGFpbmVyQXBpKHRoaXMpO1xuXHR9XG5cdFxuXHRsb2FkUGF0aHMoZGlycyl7XG5cdFx0T2JqZWN0LmtleXMoZGlycykuZm9yRWFjaChkaXJLZXk9Pntcblx0XHRcdGNvbnN0IGNvbnRleHQgPSBkaXJzW2RpcktleV07XG5cdFx0XHRcblx0XHRcdGlmKGNvbnRleHQgaW5zdGFuY2VvZiBEZXBlbmRlbmN5KXtcblx0XHRcdFx0dGhpcy5yZXF1aXJlc1tkaXJLZXldID0gY29udGV4dC5nZXREZXBlbmRlbmN5KCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdFx0XHRcdFxuXHRcdFx0Y29udGV4dC5rZXlzKCkuZm9yRWFjaCgoZmlsZW5hbWUpPT57XG5cdFx0XHRcdFxuXHRcdFx0XHRsZXQga2V5ID0gZmlsZW5hbWU7XG5cdFx0XHRcdGlmKGtleS5zdWJzdHIoMCwyKT09Jy4vJyl7XG5cdFx0XHRcdFx0a2V5ID0ga2V5LnN1YnN0cigyKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0a2V5ID0gZGlyS2V5KycvJytrZXkuc3Vic3RyKDAsIGtleS5sYXN0SW5kZXhPZignLicpIHx8IGtleS5sZW5ndGgpO1xuXHRcdFx0XHRpZihrZXkuc3BsaXQoJy8nKS5wb3AoKT09J2luZGV4Jyl7XG5cdFx0XHRcdFx0a2V5ID0ga2V5LnN1YnN0cigwLCBrZXkubGFzdEluZGV4T2YoJy8nKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5yZXF1aXJlc1trZXldID0gY29udGV4dChmaWxlbmFtZSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXHRcblx0XG5cdGFkZFJ1bGVzKHJ1bGVzKXtcblx0XHRpZih0eXBlb2YgcnVsZXMgPT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRydWxlcyA9IHJ1bGVzKHRoaXMpO1xuXHRcdH1cblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhydWxlcykuZm9yRWFjaChpbnRlcmZhY2VOYW1lID0+IHRoaXMuYWRkUnVsZShpbnRlcmZhY2VOYW1lLCBydWxlc1tpbnRlcmZhY2VOYW1lXSwgZmFsc2UpKTtcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHJ1bGVzKS5mb3JFYWNoKGludGVyZmFjZU5hbWUgPT4gdGhpcy5hZGRSdWxlKGludGVyZmFjZU5hbWUsIHJ1bGVzW2ludGVyZmFjZU5hbWVdLCBmYWxzZSkpO1xuXHRcdHRoaXMucnVsZXNEZXRlY3RMYXp5TG9hZCgpO1xuXHR9XG5cdGFkZFJ1bGUoaW50ZXJmYWNlTmFtZSwgcnVsZSwgZGV0ZWN0TGF6eUxvYWQgPSB0cnVlKXtcblx0XHRpZih0eXBlb2YgcnVsZSA9PSAnZnVuY3Rpb24nKXtcblx0XHRcdHJ1bGUgPSBydWxlKHRoaXMpO1xuXHRcdH1cblx0XHRcblx0XHRpZih0aGlzLnJ1bGVzW2ludGVyZmFjZU5hbWVdID09PSB1bmRlZmluZWQpe1xuXHRcdFx0dGhpcy5ydWxlc1tpbnRlcmZhY2VOYW1lXSA9IHRoaXMubWVyZ2VSdWxlKHt9LCB0aGlzLnJ1bGVzRGVmYXVsdCk7XG5cdFx0fVxuXHRcdFxuXHRcdHRoaXMucnVsZXNbaW50ZXJmYWNlTmFtZV0gPSB0aGlzLm1lcmdlUnVsZSh0aGlzLnJ1bGVzW2ludGVyZmFjZU5hbWVdLCBydWxlKTtcblx0XHR0aGlzLnByb2Nlc3NSdWxlKGludGVyZmFjZU5hbWUpO1xuXHRcdFxuXHRcdHJ1bGUgPSB0aGlzLnJ1bGVzW2ludGVyZmFjZU5hbWVdO1xuXHRcdFxuXHRcdGxldCB7IGNsYXNzRGVmIH0gPSBydWxlO1xuXHRcdGlmKGNsYXNzRGVmKXtcblx0XHRcdGlmKGNsYXNzRGVmIGluc3RhbmNlb2YgQ2xhc3NEZWYpe1xuXHRcdFx0XHRjbGFzc0RlZiA9IGNsYXNzRGVmLmdldENsYXNzRGVmKCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnJlZ2lzdGVyUmVxdWlyZShpbnRlcmZhY2VOYW1lLCBjbGFzc0RlZik7XG5cdFx0fVxuXHRcdFxuXHRcdGlmKGRldGVjdExhenlMb2FkKXtcblx0XHRcdHRoaXMucnVsZXNEZXRlY3RMYXp5TG9hZCgpO1xuXHRcdH1cblx0XHRcblx0fVxuXHRcblx0dmFsaWRhdGVEZWZhdWx0VmFyKHZhbHVlLCBwcm9wZXJ0eSl7XG5cdFx0aWYodGhpcy5hbGxvd2VkRGVmYXVsdFZhcnMuaW5kZXhPZih2YWx1ZSk9PT0tMSl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgdHlwZSBcIicrdmFsdWUrJ1wiIHNwZWNpZmllZCBmb3IgJytwcm9wZXJ0eSsnLCBwb3NzaWJsZXMgdmFsdWVzOiAnK3RoaXMuYWxsb3dlZERlZmF1bHRWYXJzLmpvaW4oJyB8ICcpKTtcblx0XHR9XG5cdH1cblx0XG5cdGxvYWREZXBlbmRlbmNpZXMoKXtcblx0XHR0aGlzLmxvYWRQYXRocyh0aGlzLmRlcGVuZGVuY2llcyk7XG5cdFx0dGhpcy5yZWdpc3RlclJlcXVpcmVNYXAodGhpcy5yZXF1aXJlcyk7XG5cdH1cblx0cnVsZXNEZXRlY3RMYXp5TG9hZCgpe1xuXHRcdE9iamVjdC5rZXlzKHRoaXMucnVsZXMpLmZvckVhY2goa2V5PT57XG5cdFx0XHR0aGlzLnJ1bGVMYXp5TG9hZChrZXkpO1xuXHRcdH0pO1xuXHR9XG5cdFxuXHRydWxlTGF6eUxvYWQoa2V5LCBzdGFjaz1bXSl7XG5cdFx0Y29uc3QgY2FsbHMgPSBbXTtcblx0XHRjb25zdCBsYXp5Q2FsbHMgPSBbXTtcblx0XHRcblx0XHRjb25zdCBydWxlID0gdGhpcy5ydWxlc1trZXldO1xuXHRcdFxuXHRcdGlmKCFydWxlLmNhbGxzKXtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0XG5cdFx0cnVsZS5jYWxscy5mb3JFYWNoKGNhbGxWYWwgPT4ge1xuXHRcdFx0aWYodHlwZW9mIGNhbGxWYWwgPT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRcdGNhbGxWYWwgPSBbY2FsbFZhbF07XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBbbWV0aG9kLCBwYXJhbXMgPSBbXV0gPSBjYWxsVmFsO1xuXHRcdFx0aWYoIHRoaXMucnVsZUNoZWNrQ3ljbGljTG9hZChwYXJhbXMsIFsga2V5IF0pICl7XG5cdFx0XHRcdGxhenlDYWxscy5wdXNoKGNhbGxWYWwpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZXtcblx0XHRcdFx0Y2FsbHMucHVzaChjYWxsVmFsKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRcblx0XHRydWxlLmNhbGxzID0gY2FsbHM7XG5cdFx0cnVsZS5sYXp5Q2FsbHMgPSAocnVsZS5sYXp5Q2FsbHMgfHwgW10pLmNvbmNhdChsYXp5Q2FsbHMpO1xuXHR9XG5cdHJ1bGVDaGVja0N5Y2xpY0xvYWQocGFyYW1zLCBzdGFjaz1bXSl7XHRcdFxuXHRcdHJldHVybiBPYmplY3Qua2V5cyhwYXJhbXMpLnNvbWUoaz0+e1xuXHRcdFx0Y29uc3QgcGFyYW0gPSBwYXJhbXNba107XG5cdFx0XHRjb25zdCB2ID0gdGhpcy53cmFwVmFyVHlwZShwYXJhbSwgdGhpcy5kZWZhdWx0UnVsZVZhcik7XG5cdFx0XHRpZih2IGluc3RhbmNlb2YgSW50ZXJmYWNlKXtcblx0XHRcdFx0Y29uc3QgaW50ZXJmYWNlTmFtZSA9IHYuZ2V0TmFtZSgpO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYoIXRoaXMucmVzb2x2ZUluc3RhbmNlT2YoaW50ZXJmYWNlTmFtZSwgW10sIGZhbHNlKSl7XG5cdFx0XHRcdFx0Ly9ub3QgZm91bmQsIHVuYWJsZSB0byBjaGVjayBub3dcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdGNvbnN0IHBhcmFtUnVsZSA9IHRoaXMuZ2V0UnVsZShpbnRlcmZhY2VOYW1lKTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmKHN0YWNrLmluZGV4T2YoaW50ZXJmYWNlTmFtZSkhPT0tMSl7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdHN0YWNrLnB1c2goaW50ZXJmYWNlTmFtZSk7XG5cdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdGxldCBjeWNsaWM7XG5cblx0XHRcdFx0aWYocGFyYW1SdWxlLnBhcmFtcyl7XG5cdFx0XHRcdFx0Y3ljbGljID0gdGhpcy5ydWxlQ2hlY2tDeWNsaWNMb2FkKHBhcmFtUnVsZS5wYXJhbXMsIHN0YWNrKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKCFjeWNsaWMpe1xuXHRcdFx0XHRcdGN5Y2xpYyA9IHBhcmFtUnVsZS5jYWxscy5zb21lKGNhbGxWPT57XG5cdFx0XHRcdFx0XHRjb25zdCBbbWV0aG9kLCBwYXJhbXMgPSBbXSBdID0gY2FsbFY7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5ydWxlQ2hlY2tDeWNsaWNMb2FkKHBhcmFtcywgc3RhY2spO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRyZXR1cm4gY3ljbGljO1xuXHRcdFx0XHRcblx0XHRcdH1cblx0XHRcdGlmKHR5cGVvZiB2ID09ICdvYmplY3QnICYmIHYgIT09IG51bGwgJiYgISh2IGluc3RhbmNlb2YgVmFyKSl7XG5cdFx0XHRcdHJldHVybiB0aGlzLnJ1bGVDaGVja0N5Y2xpY0xvYWQodiwgc3RhY2spO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cdFxuXHRwcm9jZXNzUnVsZShrZXksIHN0YWNrID0gW10pe1xuXHRcdGlmKHRoaXMucnVsZXNba2V5XSA9PT0gdW5kZWZpbmVkKXtcblx0XHRcdHRoaXMucnVsZXNba2V5XSA9IHRoaXMubWVyZ2VSdWxlKHt9LCB0aGlzLnJ1bGVzRGVmYXVsdCk7XG5cdFx0fVxuXHRcdGNvbnN0IHJ1bGUgPSB0aGlzLnJ1bGVzW2tleV07XG5cdFx0aWYocnVsZS5pbnN0YW5jZU9mKXtcblx0XHRcdGlmKHN0YWNrLmluZGV4T2Yoa2V5KSE9PS0xKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdDeWNsaWMgaW50ZXJmYWNlIGRlZmluaXRpb24gZXJyb3IgaW4gJytKU09OLnN0cmluZ2lmeShzdGFjay5jb25jYXQoa2V5KSxudWxsLDIpKTtcblx0XHRcdH1cblx0XHRcdHN0YWNrLnB1c2goa2V5KTtcblx0XHRcdHRoaXMucHJvY2Vzc1J1bGUocnVsZS5pbnN0YW5jZU9mLCBzdGFjayk7XG5cdFx0fVxuXHRcdGlmKHJ1bGUuc2luZ2xldG9uKXtcblx0XHRcdHJ1bGUuY2xhc3NEZWYgPSBmdW5jdGlvbigpe1xuXHRcdFx0XHRyZXR1cm4gcnVsZS5zaW5nbGV0b247XG5cdFx0XHR9O1xuXHRcdH1cblx0XHRpZih0eXBlb2YgcnVsZS5jbGFzc0RlZiA9PSAnc3RyaW5nJyl7XG5cdFx0XHRjb25zdCBjbGFzc0RlZk5hbWUgPSBydWxlLmNsYXNzRGVmO1xuXHRcdFx0cnVsZS5jbGFzc0RlZiA9ICguLi5hcmdzKT0+e1xuXHRcdFx0XHRjb25zdCBjbGFzc0RlZmluaXRpb24gPSB0aGlzLmdldChjbGFzc0RlZk5hbWUpO1xuXHRcdFx0XHRyZXR1cm4gbmV3IGNsYXNzRGVmaW5pdGlvbiguLi5hcmdzKTtcblx0XHRcdH07XG5cdFx0fVxuXHRcdGlmKHRoaXMudmFsaWRhdGVBdXRvbG9hZEZpbGVOYW1lKGtleSkpe1xuXHRcdFx0aWYocnVsZS5hdXRvbG9hZCl7XG5cdFx0XHRcdGNvbnN0IHBhdGggPSBydWxlLnBhdGggfHwga2V5O1xuXHRcdFx0XHRjb25zdCByZXEgPSB0aGlzLnJlcXVpcmVEZXAoa2V5LCBwYXRoKTtcblx0XHRcdFx0aWYocmVxKXtcblx0XHRcdFx0XHR0aGlzLnJlZ2lzdGVyUmVxdWlyZShrZXksIHJlcSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0XG5cdHZhbGlkYXRlQXV0b2xvYWRGaWxlTmFtZShuYW1lKXtcblx0XHRpZih0eXBlb2YgbmFtZSA9PSAnc3RyaW5nJyAmJiBuYW1lLnN1YnN0cigwLDEpPT09JyMnKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0XG5cdHJlcXVpcmVEZXAoa2V5LCByZXF1aXJlUGF0aCl7XG5cdFx0aWYodGhpcy5yZXF1aXJlc1trZXldKXtcblx0XHRcdHJldHVybiB0aGlzLnJlcXVpcmVzW2tleV07XG5cdFx0fVxuXHRcdFxuXHRcdHJlcXVpcmVQYXRoID0gdGhpcy5hdXRvbG9hZFBhdGhSZXNvbHZlcihyZXF1aXJlUGF0aCk7XG5cdFx0XG5cdFx0Y29uc3QgZm91bmQgPSB0aGlzLmF1dG9sb2FkRXh0ZW5zaW9ucy5jb25jYXQoJycpLnNvbWUoIGV4dCA9PiB7XG5cdFx0XHRcblx0XHRcdGNvbnN0IHBhdGhGcmFnbWVudHMgPSByZXF1aXJlUGF0aC5zcGxpdCgnOicpO1xuXHRcdFx0XG5cdFx0XHRcblx0XHRcdGxldCBwYXRoID0gcGF0aEZyYWdtZW50cy5zaGlmdCgpO1xuXHRcdFx0aWYoZXh0KXtcblx0XHRcdFx0cGF0aCArPSAnLicrZXh0O1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRcblx0XHRcdGlmKHRoaXMuZGVwRXhpc3RzKHBhdGgpKXtcblx0XHRcdFx0bGV0IHJlcXVpcmVkID0gdGhpcy5kZXBSZXF1aXJlKHBhdGgpO1xuXHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRpZihwYXRoRnJhZ21lbnRzLmxlbmd0aCl7XG5cdFx0XHRcdFx0cGF0aEZyYWdtZW50cy5mb3JFYWNoKCBzdWJLZXkgPT4ge1xuXHRcdFx0XHRcdFx0aWYodHlwZW9mIHJlcXVpcmVkICE9PSAndW5kZWZpbmVkJyAmJiByZXF1aXJlZCAhPT0gbnVsbCl7XG5cdFx0XHRcdFx0XHRcdHJlcXVpcmVkID0gcmVxdWlyZWRbc3ViS2V5XTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0XG5cdFx0XHRcdHRoaXMucmVxdWlyZXNba2V5XSA9IHJlcXVpcmVkO1xuXHRcdFx0XHRcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9KTtcblx0XHRpZiggISBmb3VuZCAmJiAoKHRoaXMuYXV0b2xvYWRGYWlsT25NaXNzaW5nRmlsZT09PSdwYXRoJyAmJiByZXF1aXJlUGF0aCkgfHwgdGhpcy5hdXRvbG9hZEZhaWxPbk1pc3NpbmdGaWxlPT09dHJ1ZSkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvcignTWlzc2luZyBleHBlY3RlZCBkZXBlbmRlbmN5IGluamVjdGlvbiBmaWxlIFwiJytyZXF1aXJlUGF0aCsnXCInKTtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIHRoaXMucmVxdWlyZXNba2V5XTtcblx0fVxuXHRcblx0XG5cdHJlZ2lzdGVyUmVxdWlyZU1hcChyZXF1aXJlcyl7XG5cdFx0T2JqZWN0LmtleXMocmVxdWlyZXMpLmZvckVhY2goKG5hbWUpPT57XG5cdFx0XHR0aGlzLnJlZ2lzdGVyUmVxdWlyZShuYW1lLHJlcXVpcmVzW25hbWVdKTtcblx0XHR9KTtcblx0fVxuXHRyZWdpc3RlclJlcXVpcmUobmFtZSxyKXtcblx0XHRpZih0eXBlb2YgciA9PSAnb2JqZWN0JyAmJiB0eXBlb2Ygci5kZWZhdWx0ID09ICdmdW5jdGlvbicpe1xuXHRcdFx0ciA9IHIuZGVmYXVsdDtcblx0XHR9XG5cdFx0aWYodHlwZW9mIHIgIT09ICdmdW5jdGlvbicpe1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBydWxlID0gdGhpcy5nZXRSdWxlQmFzZShuYW1lKTtcblx0XHRpZihydWxlLmRlY29yYXRvciAmJiByW3RoaXMuc3ltQ2xhc3NOYW1lXSl7XG5cdFx0XHRyID0gY2xhc3MgZXh0ZW5kcyBye307XG5cdFx0fVxuXHRcdFxuXHRcdGlmKHJ1bGUuZGVjb3JhdG9yKXtcblx0XHRcdHRoaXMuZGVjb3JhdG9yKG5hbWUpKHIpO1xuXHRcdH1cblx0XHRlbHNle1xuXHRcdFx0dGhpcy5yZWdpc3RlckNsYXNzKG5hbWUsIHIpO1xuXHRcdH1cblx0fVxuXHRcblx0XG5cdGRlY29yYXRvcihjbGFzc05hbWUsIHR5cGVzID0gW10pe1xuXHRcdHJldHVybiAodGFyZ2V0KT0+e1xuXHRcdFx0XG5cdFx0XHR0aGlzLmRlZmluZVN5bSh0YXJnZXQsIHRoaXMuc3ltQ2xhc3NOYW1lLCBjbGFzc05hbWUpO1xuXHRcdFx0XG5cdFx0XHR0aGlzLnJlZ2lzdGVyQ2xhc3MoY2xhc3NOYW1lLCB0YXJnZXQpO1xuXHRcdFx0XG5cdFx0XHRpZih0eXBlb2YgdHlwZXMgPT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRcdHR5cGVzID0gdHlwZXMoKTtcblx0XHRcdH1cblx0XHRcdHR5cGVzID0gdHlwZXMubWFwKHR5cGUgPT4gdGhpcy53cmFwVmFyVHlwZSh0eXBlLCB0aGlzLmRlZmF1bHREZWNvcmF0b3JWYXIpKTtcblx0XHRcdFxuXHRcdFx0aWYgKHRhcmdldFt0aGlzLnN5bUludGVyZmFjZXNdKSB7XG5cdFx0XHRcdHR5cGVzID0gdHlwZXMuY29uY2F0KHRhcmdldFt0aGlzLnN5bUludGVyZmFjZXNdKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuZGVmaW5lU3ltKHRhcmdldCwgdGhpcy5zeW1JbnRlcmZhY2VzLCB0eXBlcyk7XG5cdFx0XHRcblx0XHRcdHJldHVybiB0YXJnZXQ7XG5cdFx0fTtcblx0fVxuXHRcblx0ZXhpc3RzKG5hbWUpe1xuXHRcdHJldHVybiBCb29sZWFuKHRoaXMucnVsZXNbbmFtZV0pO1xuXHR9XG5cdFxuXHRnZXQoaW50ZXJmYWNlRGVmLCBhcmdzLCBzaGFyZWRJbnN0YW5jZXMgPSB7fSwgc3RhY2sgPSBbXSl7XG5cdFx0cmV0dXJuIHRoaXMucHJvdmlkZXIoaW50ZXJmYWNlRGVmKShhcmdzLCBzaGFyZWRJbnN0YW5jZXMsIHN0YWNrKTtcblx0fVxuXHRwcm92aWRlcihpbnRlcmZhY2VOYW1lKXtcblx0XHRcblx0XHRpZih0eXBlb2YgaW50ZXJmYWNlTmFtZSA9PSAnZnVuY3Rpb24nKXtcblx0XHRcdGludGVyZmFjZU5hbWUgPSBpbnRlcmZhY2VOYW1lW3RoaXMuc3ltQ2xhc3NOYW1lXTtcblx0XHRcdGlmKCFpbnRlcmZhY2VOYW1lKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdVbnJlZ2lzdHJlZCBjbGFzcyAnK2ludGVyZmFjZU5hbWUuY29uc3RydWN0b3IubmFtZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdGlmKGludGVyZmFjZU5hbWUgaW5zdGFuY2VvZiBJbnRlcmZhY2Upe1xuXHRcdFx0aW50ZXJmYWNlTmFtZSA9IGludGVyZmFjZU5hbWUuZ2V0TmFtZSgpO1xuXHRcdH1cblx0XHRcblx0XHRcblx0XHRpZighdGhpcy5wcm92aWRlclJlZ2lzdHJ5W2ludGVyZmFjZU5hbWVdKXtcblx0XHRcdHRoaXMucHJvdmlkZXJSZWdpc3RyeVtpbnRlcmZhY2VOYW1lXSA9IHRoaXMubWFrZVByb3ZpZGVyKGludGVyZmFjZU5hbWUpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5wcm92aWRlclJlZ2lzdHJ5W2ludGVyZmFjZU5hbWVdO1xuXHR9XG5cdFxuXHRtYWtlUHJvdmlkZXIoaW50ZXJmYWNlTmFtZSl7XG5cdFx0Y29uc3QgcnVsZSA9IHRoaXMuZ2V0UnVsZShpbnRlcmZhY2VOYW1lKTtcblx0XHRjb25zdCBjbGFzc0RlZiA9IHRoaXMucmVzb2x2ZUluc3RhbmNlT2YoaW50ZXJmYWNlTmFtZSk7XG5cdFx0cmV0dXJuIChhcmdzLCBzaGFyZWRJbnN0YW5jZXMsIHN0YWNrKT0+e1xuXHRcdFx0XG5cdFx0XHQvL2NoZWNrIGZvciBzaGFyZWQgYWZ0ZXIgcGFyYW1zIGxvYWRcblx0XHRcdGlmKHRoaXMuaW5zdGFuY2VSZWdpc3RyeVtpbnRlcmZhY2VOYW1lXSl7XG5cdFx0XHRcdHJldHVybiB0aGlzLmluc3RhbmNlUmVnaXN0cnlbaW50ZXJmYWNlTmFtZV07XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHNoYXJlZEluc3RhbmNlcyA9IE9iamVjdC5hc3NpZ24oe30sIHNoYXJlZEluc3RhbmNlcyk7XG5cdFx0XHRydWxlLnNoYXJlZEluVHJlZS5mb3JFYWNoKHNoYXJlSW50ZXJmYWNlID0+IHtcblx0XHRcdFx0aWYoIXNoYXJlZEluc3RhbmNlc1tzaGFyZUludGVyZmFjZV0pe1xuXHRcdFx0XHRcdHNoYXJlZEluc3RhbmNlc1tzaGFyZUludGVyZmFjZV0gPSBuZXcgU2hhcmVkSW5zdGFuY2Uoc2hhcmVJbnRlcmZhY2UsIHRoaXMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdFxuXHRcdFx0bGV0IHBhcmFtcztcblx0XHRcdGxldCBkZWZhdWx0VmFyO1xuXHRcdFx0aWYoYXJncyl7XG5cdFx0XHRcdHBhcmFtcyA9IGFyZ3M7XG5cdFx0XHRcdGRlZmF1bHRWYXIgPSB0aGlzLmRlZmF1bHRBcmdzVmFyO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZXtcblx0XHRcdFx0cGFyYW1zID0gcnVsZS5wYXJhbXMgfHwgY2xhc3NEZWZbdGhpcy5zeW1JbnRlcmZhY2VzXSB8fCBbXTtcblx0XHRcdFx0ZGVmYXVsdFZhciA9IHRoaXMuZGVmYXVsdFJ1bGVWYXI7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGNvbnN0IHJlc29sdmVkUGFyYW1zID0gcGFyYW1zLm1hcCgoaW50ZXJmYWNlRGVmLCBpbmRleCk9Pntcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0UGFyYW0oaW50ZXJmYWNlRGVmLCBydWxlLCBzaGFyZWRJbnN0YW5jZXMsIGRlZmF1bHRWYXIsIGluZGV4LCBzdGFjayk7XG5cdFx0XHR9KTtcblx0XHRcdFxuXHRcdFx0Ly9yZWNoZWNrIGZvciBzaGFyZWQgYWZ0ZXIgcGFyYW1zIGxvYWRcblx0XHRcdGlmKHRoaXMuaW5zdGFuY2VSZWdpc3RyeVtpbnRlcmZhY2VOYW1lXSl7XG5cdFx0XHRcdHJldHVybiB0aGlzLmluc3RhbmNlUmVnaXN0cnlbaW50ZXJmYWNlTmFtZV07XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGNvbnN0IG1ha2VJbnN0YW5jZSA9IChyZXNvbHZlZFBhcmFtcyk9Pntcblx0XHRcdFx0XG5cdFx0XHRcdHJlc29sdmVkUGFyYW1zID0gc3RydWN0dXJlZFJlc29sdmVQYXJhbXNJbnRlcmZhY2UocGFyYW1zLCByZXNvbHZlZFBhcmFtcyk7XG5cdFx0XHRcdFxuXHRcdFx0XHRjb25zdCBpbnN0YW5jZSA9IG5ldyBjbGFzc0RlZiguLi5yZXNvbHZlZFBhcmFtcyk7XG5cdFx0XHRcdFxuXHRcdFx0XHRjb25zdCBmaW5hbGl6ZUluc3RhbmNlQ3JlYXRpb24gPSAoKT0+e1xuXHRcdFx0XHRcdGlmKHJ1bGUuc2hhcmVkKXtcblx0XHRcdFx0XHRcdHRoaXMucmVnaXN0ZXJJbnN0YW5jZShpbnRlcmZhY2VOYW1lLCBpbnN0YW5jZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGNvbnN0IGNhbGxzUmV0dXJuID0gdGhpcy5ydW5DYWxscyhydWxlLmxhenlDYWxscywgaW5zdGFuY2UsIHJ1bGUsIHNoYXJlZEluc3RhbmNlcyk7XG5cdFx0XHRcdFx0aWYoY2FsbHNSZXR1cm4gaW5zdGFuY2VvZiB0aGlzLlByb21pc2VJbnRlcmZhY2Upe1xuXHRcdFx0XHRcdFx0cmV0dXJuIGNhbGxzUmV0dXJuLnRoZW4oKCk9Pmluc3RhbmNlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0cmV0dXJuIGluc3RhbmNlO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHRcblx0XHRcdFx0Y29uc3QgY2FsbHNSZXR1cm4gPSB0aGlzLnJ1bkNhbGxzKHJ1bGUuY2FsbHMsIGluc3RhbmNlLCBydWxlLCBzaGFyZWRJbnN0YW5jZXMpO1xuXHRcdFx0XHRpZihjYWxsc1JldHVybiBpbnN0YW5jZW9mIHRoaXMuUHJvbWlzZUludGVyZmFjZSl7XG5cdFx0XHRcdFx0cmV0dXJuIGNhbGxzUmV0dXJuLnRoZW4oKCk9PmZpbmFsaXplSW5zdGFuY2VDcmVhdGlvbigpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0cmV0dXJuIGZpbmFsaXplSW5zdGFuY2VDcmVhdGlvbigpO1xuXHRcdFx0fTtcblx0XHRcdGlmKHN0cnVjdHVyZWRIYXNQcm9taXNlKHBhcmFtcywgcmVzb2x2ZWRQYXJhbXMsIHRoaXMuUHJvbWlzZUludGVyZmFjZSkpe1xuXHRcdFx0XHRyZXR1cm4gc3RydWN0dXJlZFByb21pc2VBbGxSZWN1cnNpdmUocGFyYW1zLCByZXNvbHZlZFBhcmFtcywgdGhpcy5Qcm9taXNlSW50ZXJmYWNlLCB0aGlzLlByb21pc2VGYWN0b3J5ICkudGhlbihyZXNvbHZlZFBhcmFtcz0+e1xuXHRcdFx0XHRcdHJldHVybiBtYWtlSW5zdGFuY2UocmVzb2x2ZWRQYXJhbXMpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0cmV0dXJuIG1ha2VJbnN0YW5jZShyZXNvbHZlZFBhcmFtcyk7XG5cdFx0fTtcblx0fVxuXHRcblx0Z2V0U3Vic3RpdHV0aW9uUGFyYW0oaW50ZXJmYWNlRGVmLCBydWxlLCBpbmRleCl7XG5cdFx0Y29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMud3JhcFZhclR5cGUocnVsZS5zdWJzdGl0dXRpb25zLCB0aGlzLmRlZmF1bHRSdWxlVmFyKTtcblx0XHRcblx0XHRpZih0eXBlb2YgaW5kZXggIT09ICd1bmRlZmluZWQnICYmIHN1YnN0aXR1dGlvbnNbaW5kZXhdKXtcblx0XHRcdGludGVyZmFjZURlZiA9IHN1YnN0aXR1dGlvbnNbaW5kZXhdO1xuXHRcdFx0aW50ZXJmYWNlRGVmID0gdGhpcy53cmFwVmFyVHlwZShpbnRlcmZhY2VEZWYsIHRoaXMuZGVmYXVsdFJ1bGVWYXIsIHRydWUpO1xuXHRcdH1cblx0XHRcblx0XHRpZihpbnRlcmZhY2VEZWYgaW5zdGFuY2VvZiBJbnRlcmZhY2Upe1xuXHRcdFx0Y29uc3QgaW50ZXJmYWNlTmFtZSA9IGludGVyZmFjZURlZi5nZXROYW1lKCk7XG5cdFx0XHRpZihzdWJzdGl0dXRpb25zW2ludGVyZmFjZU5hbWVdKXtcblx0XHRcdFx0aW50ZXJmYWNlRGVmID0gc3Vic3RpdHV0aW9uc1tpbnRlcmZhY2VOYW1lXTtcblx0XHRcdFx0aW50ZXJmYWNlRGVmID0gdGhpcy53cmFwVmFyVHlwZShpbnRlcmZhY2VEZWYsIHRoaXMuZGVmYXVsdFJ1bGVWYXIsIHRydWUpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fVxuXHRcdHJldHVybiBpbnRlcmZhY2VEZWY7XG5cdH1cblx0Z2V0UGFyYW0oaW50ZXJmYWNlRGVmLCBydWxlLCBzaGFyZWRJbnN0YW5jZXMsIGRlZmF1bHRWYXIgPSAnaW50ZXJmYWNlJywgaW5kZXggPSB1bmRlZmluZWQsIHN0YWNrID0gW10pe1xuXHRcdFxuXHRcdGludGVyZmFjZURlZiA9IHRoaXMud3JhcFZhclR5cGUoaW50ZXJmYWNlRGVmLCBkZWZhdWx0VmFyKTtcblx0XHRcblx0XHRpbnRlcmZhY2VEZWYgPSB0aGlzLmdldFN1YnN0aXR1dGlvblBhcmFtKGludGVyZmFjZURlZiwgcnVsZSwgaW5kZXgpO1xuXHRcdFxuXHRcdGlmKGludGVyZmFjZURlZiBpbnN0YW5jZW9mIEZhY3Rvcnkpe1xuXHRcdFx0cmV0dXJuIGludGVyZmFjZURlZi5jYWxsYmFjayhzaGFyZWRJbnN0YW5jZXMpO1xuXHRcdH1cblx0XHRpZihpbnRlcmZhY2VEZWYgaW5zdGFuY2VvZiBWYWx1ZSl7XG5cdFx0XHRyZXR1cm4gaW50ZXJmYWNlRGVmLmdldFZhbHVlKCk7XG5cdFx0fVxuXHRcdGlmKGludGVyZmFjZURlZiBpbnN0YW5jZW9mIFJlcXVpcmUpe1xuXHRcdFx0cmV0dXJuIGludGVyZmFjZURlZi5yZXF1aXJlKCk7XG5cdFx0fVxuXHRcdFxuXHRcdGlmKGludGVyZmFjZURlZiBpbnN0YW5jZW9mIEludGVyZmFjZSl7XG5cdFx0XHRcblx0XHRcdGNvbnN0IGludGVyZmFjZU5hbWUgPSBpbnRlcmZhY2VEZWYuZ2V0TmFtZSgpO1xuXHRcdFx0XG5cdFx0XHRcblx0XHRcdHN0YWNrID0gc3RhY2suc2xpY2UoMCk7XG5cdFx0XHRpZihzdGFjay5pbmRleE9mKGludGVyZmFjZU5hbWUpIT09LTEpe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0N5Y2xpYyBkZXBlbmRlbmN5IGVycm9yIGluICcrSlNPTi5zdHJpbmdpZnkoc3RhY2suY29uY2F0KGludGVyZmFjZU5hbWUpLG51bGwsMikpO1xuXHRcdFx0fVxuXHRcdFx0c3RhY2sucHVzaChpbnRlcmZhY2VOYW1lKTtcblx0XHRcdFxuXHRcdFx0bGV0IGluc3RhbmNlO1xuXHRcdFx0XG5cdFx0XHRpZihzaGFyZWRJbnN0YW5jZXNbaW50ZXJmYWNlTmFtZV0pe1xuXHRcdFx0XHRpbnN0YW5jZSA9IHNoYXJlZEluc3RhbmNlc1tpbnRlcmZhY2VOYW1lXS5nZXQoc2hhcmVkSW5zdGFuY2VzLCBzdGFjayk7XG5cdFx0XHR9XG5cdFx0XHRlbHNle1xuXHRcdFx0XHRpbnN0YW5jZSA9IHRoaXMuZ2V0KGludGVyZmFjZU5hbWUsIHVuZGVmaW5lZCwgc2hhcmVkSW5zdGFuY2VzLCBzdGFjayk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGNvbnN0IGluc3RhbmNlUnVsZSA9IHRoaXMuZ2V0UnVsZShpbnRlcmZhY2VOYW1lKTtcblx0XHRcdFxuXHRcdFx0Ly9pZighaW5zdGFuY2VSdWxlLmFzeW5jUmVzb2x2ZSAmJiBpbnN0YW5jZSBpbnN0YW5jZW9mIHRoaXMuUHJvbWlzZUludGVyZmFjZSl7XG5cdFx0XHRpZighaW5zdGFuY2VSdWxlLmFzeW5jUmVzb2x2ZSl7XG5cdFx0XHRcdHJldHVybiBuZXcgU3luYyhpbnN0YW5jZSk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHJldHVybiBpbnN0YW5jZTtcblx0XHR9XG5cdFx0XG5cdFx0aWYodHlwZW9mIGludGVyZmFjZURlZiA9PSAnb2JqZWN0JyAmJiAhKGludGVyZmFjZURlZiBpbnN0YW5jZW9mIFZhcikpe1xuXHRcdFx0Y29uc3QgbyA9IHt9O1xuXHRcdFx0T2JqZWN0LmtleXMoaW50ZXJmYWNlRGVmKS5mb3JFYWNoKGsgPT4ge1xuXHRcdFx0XHRvW2tdID0gdGhpcy5nZXRQYXJhbShpbnRlcmZhY2VEZWZba10sIHJ1bGUsIHNoYXJlZEluc3RhbmNlcywgZGVmYXVsdFZhciwgdW5kZWZpbmVkLCBzdGFjayk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBvO1xuXHRcdH1cblx0XG5cdFx0cmV0dXJuIGludGVyZmFjZURlZjtcblx0fVxuXHRcblx0d3JhcFZhclR5cGUodHlwZSwgZGVmYXVsdFZhciwgcmVzb2x2ZUZ1bmN0aW9uKXtcblx0XHRpZihyZXNvbHZlRnVuY3Rpb24gJiYgdHlwZW9mIHR5cGUgPT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHR0eXBlID0gdHlwZSgpO1xuXHRcdH1cblx0XHRpZih0eXBlIGluc3RhbmNlb2YgVmFyKXtcblx0XHRcdHJldHVybiB0eXBlO1xuXHRcdH1cblx0XHRpZih0aGlzLmlzSW50ZXJmYWNlUHJvdG90eXBlKHR5cGUpKXtcblx0XHRcdHJldHVybiB0aGlzLmludGVyZmFjZSggdHlwZS50b1N0cmluZygpICk7XG5cdFx0fVxuXHRcdHN3aXRjaChkZWZhdWx0VmFyKXtcblx0XHRcdGNhc2UgJ2ludGVyZmFjZSc6XG5cdFx0XHRcdGlmKHR5cGVvZiB0eXBlID09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpe1xuXHRcdFx0XHRcdGNvbnN0IG8gPSB7fTtcblx0XHRcdFx0XHRPYmplY3Qua2V5cyh0eXBlKS5mb3JFYWNoKGtleT0+e1xuXHRcdFx0XHRcdFx0Y29uc3QgdiA9IHR5cGVba2V5XTtcblx0XHRcdFx0XHRcdG9ba2V5XSA9IHR5cGVvZiB2ID09ICdvYmplY3QnICYmIHYgIT09IG51bGwgJiYgISh2IGluc3RhbmNlb2YgVmFyKSA/IHRoaXMud3JhcFZhclR5cGUodiwgZGVmYXVsdFZhcikgOiB2O1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHJldHVybiBvO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKHR5cGVvZiB0eXBlID09ICdmdW5jdGlvbicpe1xuXHRcdFx0XHRcdHJldHVybiBuZXcgdGhpcy5kZWZhdWx0RnVuY3Rpb25XcmFwcGVyKHR5cGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0aGlzLmludGVyZmFjZSh0eXBlKTtcblx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAndmFsdWUnOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy52YWx1ZSh0eXBlKTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRyZXR1cm4gdHlwZTtcblx0fVxuXHRcblx0aXNJbnRlcmZhY2VQcm90b3R5cGUodHlwZSl7XG5cdFx0cmV0dXJuIHRoaXMuaW50ZXJmYWNlUHJvdG90eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS5wcm90b3R5cGUgaW5zdGFuY2VvZiB0aGlzLmludGVyZmFjZVByb3RvdHlwZTtcblx0fVxuXHRcblx0cmVnaXN0ZXJJbnN0YW5jZShuYW1lLCBpbnN0YW5jZSl7XG5cdFx0dGhpcy5pbnN0YW5jZVJlZ2lzdHJ5W25hbWVdID0gaW5zdGFuY2U7XG5cdH1cblx0XG5cdGdldFJ1bGVCYXNlKGludGVyZmFjZU5hbWUpe1xuXHRcdGNvbnN0IHJ1bGVCYXNlID0gdGhpcy5tZXJnZVJ1bGUoe30sIHRoaXMucnVsZXNEZWZhdWx0KTtcblx0XHRydWxlQmFzZS5pbnRlcmZhY2VOYW1lID0gaW50ZXJmYWNlTmFtZTsgLy9mb3IgaW5mb1xuXHRcdHRoaXMubWVyZ2VSdWxlKHJ1bGVCYXNlLCB0aGlzLnJ1bGVzW2ludGVyZmFjZU5hbWVdIHx8IHt9KTtcblx0XHRyZXR1cm4gcnVsZUJhc2U7XG5cdH1cblx0XG5cdGdldFJ1bGUoaW50ZXJmYWNlTmFtZSl7XG5cdFx0Y29uc3QgcnVsZSA9IHRoaXMubWVyZ2VSdWxlKHt9LCB0aGlzLnJ1bGVzRGVmYXVsdCk7XG5cdFx0cnVsZS5pbnRlcmZhY2VOYW1lID0gaW50ZXJmYWNlTmFtZTsgLy9mb3IgaW5mb1xuXHRcdGlmKCFpbnRlcmZhY2VOYW1lKXtcblx0XHRcdHJldHVybiBydWxlO1xuXHRcdH1cblx0XHRcblx0XHRjb25zdCBydWxlQmFzZSA9IHRoaXMuZ2V0UnVsZUJhc2UoaW50ZXJmYWNlTmFtZSk7XG5cdFx0XG5cdFx0bGV0IHN0YWNrID0gW107XG5cdFx0XG5cdFx0dGhpcy5yZXNvbHZlSW5zdGFuY2VPZihpbnRlcmZhY2VOYW1lLCBzdGFjayk7XG5cdFx0XG5cdFx0Y29uc3QgcnVsZXMgPSBbXTtcblx0XHRcblx0XHRsZXQgZnVsbFN0YWNrO1xuXHRcdFxuXHRcdGlmKHJ1bGVCYXNlLmluaGVyaXRJbnN0YW5jZU9mKXsgXG5cdFx0XHRmdWxsU3RhY2sgPSBuZXcgU2V0KCBzdGFjay5zbGljZSgwLCAtMSkgKTtcblx0XHR9XG5cdFx0ZWxzZXtcblx0XHRcdGZ1bGxTdGFjayA9IG5ldyBTZXQoIHN0YWNrLnNsaWNlKDAsIDEpICk7XG5cdFx0fVxuXHRcdFxuXHRcdFxuXHRcdGlmKHJ1bGVCYXNlLmluaGVyaXRQcm90b3R5cGUpe1xuXHRcdFx0c3RhY2sucmV2ZXJzZSgpLmZvckVhY2goKGMpPT57XG5cdFx0XHRcdGlmKHR5cGVvZiBjID09ICdmdW5jdGlvbicpe1xuXHRcdFx0XHRcdGxldCBwYXJlbnRQcm90byA9IGM7XG5cdFx0XHRcdFx0bGV0IGNsYXNzTmFtZTtcblx0XHRcdFx0XHR3aGlsZShwYXJlbnRQcm90byl7XG5cdFx0XHRcdFx0XHRjbGFzc05hbWUgPSBwYXJlbnRQcm90b1t0aGlzLnN5bUNsYXNzTmFtZV07XG5cdFx0XHRcdFx0XHRpZihjbGFzc05hbWUpe1xuXHRcdFx0XHRcdFx0XHRmdWxsU3RhY2suYWRkKGNsYXNzTmFtZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRwYXJlbnRQcm90byA9IFJlZmxlY3QuZ2V0UHJvdG90eXBlT2YocGFyZW50UHJvdG8pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGZ1bGxTdGFjayA9IEFycmF5LmZyb20oZnVsbFN0YWNrKS5yZXZlcnNlKCk7XG5cdFx0XG5cdFx0ZnVsbFN0YWNrLmZvckVhY2goKGNsYXNzTmFtZSk9Pntcblx0XHRcdGNvbnN0IG1lcmdlUnVsZSA9IHRoaXMucnVsZXNbY2xhc3NOYW1lXTtcblx0XHRcdFx0XG5cdFx0XHRpZihtZXJnZVJ1bGUuaW5oZXJpdE1peGlucyl7XG5cdFx0XHRcdHRoaXMubWl4aW5zUnVsZShydWxlLCBtZXJnZVJ1bGUuaW5oZXJpdE1peGlucyk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHRoaXMubWVyZ2VSdWxlKHJ1bGUsIG1lcmdlUnVsZSk7XG5cdFx0fSk7XG5cdFx0XG5cdFx0cmV0dXJuIHJ1bGU7XG5cdH1cblx0XG5cdG1peGluc1J1bGUocnVsZSwgbWl4aW5zR3JvdXApe1xuXHRcdGNvbnN0IG1peGluc0dyb3VwcyA9IHRoaXMucnVsZUNvbGxlY3RFeHRlbmRzUmVjdXJzaXZlKG1peGluc0dyb3VwKS5yZXZlcnNlKCk7XG5cdFx0bWl4aW5zR3JvdXBzLmZvckVhY2gobWl4aW5Hcm91cCA9PlxuXHRcdFx0bWl4aW5Hcm91cC5mb3JFYWNoKCBtaXhpbiA9PiB7XG5cdFx0XHRcdGNvbnN0IG1lcmdlUnVsZSA9IHRoaXMucnVsZXNbbWl4aW5dO1xuXHRcdFx0XHR0aGlzLm1lcmdlUnVsZShydWxlLCBtZXJnZVJ1bGUsIGZhbHNlKVxuXHRcdFx0fSApXG5cdFx0KTtcblx0fVxuXHRydWxlQ29sbGVjdEV4dGVuZHNSZWN1cnNpdmUobWl4aW5Hcm91cCwgbWl4aW5zR3JvdXBzID0gW10pe1xuXHRcdGlmKCEobWl4aW5Hcm91cCBpbnN0YW5jZW9mIEFycmF5KSl7XG5cdFx0XHRtaXhpbkdyb3VwID0gW21peGluR3JvdXBdO1xuXHRcdH1cblx0XHRtaXhpbnNHcm91cHMucHVzaChtaXhpbkdyb3VwKTtcblx0XHRtaXhpbkdyb3VwLmZvckVhY2gobWl4aW4gPT4ge1xuXHRcdFx0Y29uc3QgcnVsZSA9IHRoaXMucnVsZXNbbWl4aW5dO1xuXHRcdFx0aWYocnVsZSAmJiBydWxlLm1peGlucyl7XG5cdFx0XHRcdHRoaXMucnVsZUNvbGxlY3RFeHRlbmRzUmVjdXJzaXZlKHJ1bGUubWl4aW5zLCBtaXhpbnNHcm91cHMpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHJldHVybiBtaXhpbnNHcm91cHM7XG5cdH1cblxuXHRyZWdpc3RlckNsYXNzKG5hbWUsIHRhcmdldCl7XG5cdFx0aWYoIXRoaXMucnVsZXNbbmFtZV0pe1xuXHRcdFx0dGhpcy5ydWxlc1tuYW1lXSA9IHt9O1xuXHRcdH1cblx0XHR0aGlzLnJ1bGVzW25hbWVdLmNsYXNzRGVmID0gdGFyZ2V0O1xuXHR9XG5cdFxuXHRtZXJnZVJ1bGUoZXh0ZW5kUnVsZSwgcnVsZSwgbWVyZ2VFeHRlbmQgPSB0cnVlKXtcblx0XHRsZXQge1xuXHRcdFx0c2hhcmVkLFxuXHRcdFx0aW5oZXJpdEluc3RhbmNlT2YsXG5cdFx0XHRpbmhlcml0UHJvdG90eXBlLFxuXHRcdFx0aW5oZXJpdE1peGlucyxcblx0XHRcdGluc3RhbmNlT2YsXG5cdFx0XHRwYXJhbXMsXG5cdFx0XHRjYWxscyxcblx0XHRcdGxhenlDYWxscyxcblx0XHRcdHN1YnN0aXR1dGlvbnMsXG5cdFx0XHRzaGFyZWRJblRyZWUsXG5cdFx0XHRjbGFzc0RlZixcblx0XHRcdHNpbmdsZXRvbixcblx0XHRcdGFzeW5jUmVzb2x2ZSxcblx0XHRcdGFzeW5jQ2FsbHNTZXJpZSxcblx0XHRcdGFzeW5jQ2FsbHNQYXJhbXNTZXJpZSxcblx0XHRcdGRlY29yYXRvcixcblx0XHRcdGF1dG9sb2FkLFxuXHRcdFx0cGF0aCxcblx0XHR9ID0gcnVsZTtcblx0XHRpZihjbGFzc0RlZiAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUuY2xhc3NEZWYgPSBjbGFzc0RlZjtcblx0XHR9XG5cdFx0aWYoc2hhcmVkICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5zaGFyZWQgPSBzaGFyZWQ7XG5cdFx0fVxuXHRcdGlmKGluaGVyaXRJbnN0YW5jZU9mICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5pbmhlcml0SW5zdGFuY2VPZiA9IGluaGVyaXRJbnN0YW5jZU9mO1xuXHRcdH1cblx0XHRpZihpbmhlcml0UHJvdG90eXBlICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5pbmhlcml0UHJvdG90eXBlID0gaW5oZXJpdFByb3RvdHlwZTtcblx0XHR9XG5cdFx0aWYoZGVjb3JhdG9yICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5kZWNvcmF0b3IgPSBkZWNvcmF0b3I7XG5cdFx0fVxuXHRcdGlmKGF1dG9sb2FkICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5hdXRvbG9hZCA9IGF1dG9sb2FkO1xuXHRcdH1cblx0XHRpZihwYXRoICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5wYXRoID0gcGF0aDtcblx0XHR9XG5cdFx0aWYoaW5zdGFuY2VPZiAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUuaW5zdGFuY2VPZiA9IGluc3RhbmNlT2Y7XG5cdFx0fVxuXHRcdGlmKGFzeW5jUmVzb2x2ZSAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUuYXN5bmNSZXNvbHZlID0gYXN5bmNSZXNvbHZlO1xuXHRcdH1cblx0XHRpZihhc3luY0NhbGxzU2VyaWUgIT09IHVuZGVmaW5lZCl7XG5cdFx0XHRleHRlbmRSdWxlLmFzeW5jQ2FsbHNTZXJpZSA9IGFzeW5jQ2FsbHNTZXJpZTtcblx0XHR9XG5cdFx0aWYoYXN5bmNDYWxsc1BhcmFtc1NlcmllICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5hc3luY0NhbGxzUGFyYW1zU2VyaWUgPSBhc3luY0NhbGxzUGFyYW1zU2VyaWU7XG5cdFx0fVxuXG5cdFx0aWYoY2FsbHMgIT09IHVuZGVmaW5lZCl7XG5cdFx0XHRleHRlbmRSdWxlLmNhbGxzID0gKCBleHRlbmRSdWxlLmNhbGxzIHx8IFtdICkuY29uY2F0KGNhbGxzKTtcblx0XHR9XG5cdFx0aWYobGF6eUNhbGxzICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5sYXp5Q2FsbHMgPSAoIGV4dGVuZFJ1bGUubGF6eUNhbGxzIHx8IFtdICkuY29uY2F0KGxhenlDYWxscyk7XG5cdFx0fVxuXHRcdFxuXHRcdGlmKG1lcmdlRXh0ZW5kICYmIGluaGVyaXRNaXhpbnMgIT09IHVuZGVmaW5lZCl7XG5cdFx0XHRleHRlbmRSdWxlLmluaGVyaXRNaXhpbnMgPSBpbmhlcml0TWl4aW5zLnNsaWNlKDApO1xuXHRcdH1cblx0XHRcblx0XHRpZihwYXJhbXMgIT09IHVuZGVmaW5lZCl7XG5cdFx0XHRleHRlbmRSdWxlLnBhcmFtcyA9IHBhcmFtcztcblx0XHR9XG5cdFx0aWYoc3Vic3RpdHV0aW9ucyAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGlmKCFleHRlbmRSdWxlLnN1YnN0aXR1dGlvbnMpe1xuXHRcdFx0XHRleHRlbmRSdWxlLnN1YnN0aXR1dGlvbnMgPSB7fTtcblx0XHRcdH1cblx0XHRcdE9iamVjdC5hc3NpZ24oZXh0ZW5kUnVsZS5zdWJzdGl0dXRpb25zLCBzdWJzdGl0dXRpb25zKTtcblx0XHR9XG5cdFx0aWYoc2hhcmVkSW5UcmVlICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0aWYoIWV4dGVuZFJ1bGUuc2hhcmVkSW5UcmVlKXtcblx0XHRcdFx0ZXh0ZW5kUnVsZS5zaGFyZWRJblRyZWUgPSBbXTtcblx0XHRcdH1cblx0XHRcdGV4dGVuZFJ1bGUuc2hhcmVkSW5UcmVlID0gQXJyYXkuZnJvbSggbmV3IFNldChbLi4uZXh0ZW5kUnVsZS5zaGFyZWRJblRyZWUsIC4uLnNoYXJlZEluVHJlZV0pICk7XG5cdFx0fVxuXHRcdGV4dGVuZFJ1bGUuc2luZ2xldG9uID0gc2luZ2xldG9uO1xuXHRcdHJldHVybiBleHRlbmRSdWxlO1xuXHR9XG5cdFxuXHRtZXJnZVJ1bGVzKGV4dGVuZFJ1bGVzLCBydWxlcyl7XG5cdFx0T2JqZWN0LmtleXMocnVsZXMpLmZvckVhY2goKGspPT57XG5cdFx0XHRpZighZXh0ZW5kUnVsZXNba10pe1xuXHRcdFx0XHRleHRlbmRSdWxlc1trXSA9IHt9O1xuXHRcdFx0fVxuXHRcdFx0ZXh0ZW5kUnVsZXNba10gPSB0aGlzLm1lcmdlUnVsZShleHRlbmRSdWxlc1trXSwgcnVsZXNba10pO1xuXHRcdH0pO1xuXHRcdHJldHVybiBleHRlbmRSdWxlcztcblx0fVxuXHRcblx0cnVuQ2FsbHMoY2FsbHMsIGluc3RhbmNlLCBydWxlLCBzaGFyZWRJbnN0YW5jZXMpe1xuXHRcdGxldCBoYXNBc3luYztcblx0XHRcblx0XHRsZXQgY2FsbGVycyA9IGNhbGxzLm1hcCgoYyk9PiAoKT0+IHtcblx0XHRcdFxuXHRcdFx0aWYodHlwZW9mIGMgPT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRcdGMgPSBbY107XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBbIG1ldGhvZCwgcGFyYW1zID0gW10sIGFzeW5jUmVzb2x2ZSA9IHJ1bGUuYXN5bmNSZXNvbHZlICBdID0gYztcblx0XHRcdFxuXHRcdFx0Y29uc3QgbWFrZUNhbGwgPSAocmVzb2x2ZWRQYXJhbXMpPT57XHRcdFx0XHRcblx0XHRcdFx0cmVzb2x2ZWRQYXJhbXMgPSBzdHJ1Y3R1cmVkUmVzb2x2ZVBhcmFtc0ludGVyZmFjZShwYXJhbXMsIHJlc29sdmVkUGFyYW1zKTtcblx0XHRcdFx0bGV0IGNhbGxSZXR1cm47XG5cdFx0XHRcdGlmKHR5cGVvZiBtZXRob2QgPT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRcdFx0Y2FsbFJldHVybiA9IG1ldGhvZChpbnN0YW5jZSwgLi4ucmVzb2x2ZWRQYXJhbXMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2V7XG5cdFx0XHRcdFx0Y2FsbFJldHVybiA9IGluc3RhbmNlW21ldGhvZF0oLi4ucmVzb2x2ZWRQYXJhbXMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKCFhc3luY1Jlc29sdmUpe1xuXHRcdFx0XHRcdGNhbGxSZXR1cm4gPSBuZXcgU3luYyhjYWxsUmV0dXJuKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gY2FsbFJldHVybjtcblx0XHRcdH07XG5cdFx0XHRcdFx0XHRcblx0XHRcdGNvbnN0IHJlc29sdmVkUGFyYW1zID0gcGFyYW1zLm1hcChwYXJhbSA9PiB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmdldFBhcmFtKHBhcmFtLCBydWxlLCBzaGFyZWRJbnN0YW5jZXMsIHRoaXMuZGVmYXVsdFJ1bGVWYXIpO1xuXHRcdFx0fSk7XG5cdFx0XHRpZihzdHJ1Y3R1cmVkSGFzUHJvbWlzZShwYXJhbXMsIHJlc29sdmVkUGFyYW1zLCB0aGlzLlByb21pc2VJbnRlcmZhY2UpKXtcblx0XHRcdFx0aGFzQXN5bmMgPSB0cnVlO1xuXHRcdFx0XHRyZXR1cm4gKCkgPT4gc3RydWN0dXJlZFByb21pc2VBbGxSZWN1cnNpdmUocGFyYW1zLCByZXNvbHZlZFBhcmFtcywgdGhpcy5Qcm9taXNlSW50ZXJmYWNlLCB0aGlzLlByb21pc2VGYWN0b3J5KS50aGVuKHJlc29sdmVkUGFyYW1zPT57XG5cdFx0XHRcdFx0cmV0dXJuIG1ha2VDYWxsKHJlc29sdmVkUGFyYW1zKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNle1xuXHRcdFx0XHRyZXR1cm4gKCkgPT4gbWFrZUNhbGwocmVzb2x2ZWRQYXJhbXMpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fSk7XG5cdFx0XG5cdFx0Y29uc3QgYXN5bmNDYWxsc1BhcmFtc1NlcmllID0gcnVsZS5hc3luY0NhbGxzUGFyYW1zU2VyaWU7XG5cdFx0Y29uc3QgYXN5bmNDYWxsc1NlcmllID0gcnVsZS5hc3luY0NhbGxzU2VyaWUgfHwgYXN5bmNDYWxsc1BhcmFtc1NlcmllO1xuXHRcdFxuXHRcdGNvbnN0IG1ha2VDYWxscyA9IChjYWxsZXJzKT0+e1xuXHRcdFx0XG5cdFx0XHRsZXQgY2FsbGVyc1JldHVybjtcblx0XHRcdGlmKGhhc0FzeW5jKXtcblx0XHRcdFx0aWYoYXN5bmNDYWxsc1NlcmllKXtcblx0XHRcdFx0XHRjYWxsZXJzUmV0dXJuID0gbWFwU2VyaWUoY2FsbGVycywgKGNhbGxlcik9Pntcblx0XHRcdFx0XHRcdHJldHVybiBjYWxsZXIoKTtcblx0XHRcdFx0XHR9LCB0aGlzLlByb21pc2VJbnRlcmZhY2UsIHRoaXMuUHJvbWlzZUZhY3RvcnkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2V7XG5cdFx0XHRcdFx0Y2FsbGVyc1JldHVybiA9IHRoaXMuUHJvbWlzZUZhY3RvcnkuYWxsKCBjYWxsZXJzLm1hcCgoY2FsbGVyKT0+e1xuXHRcdFx0XHRcdFx0cmV0dXJuIGNhbGxlcigpO1xuXHRcdFx0XHRcdH0pICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGVsc2V7XG5cdFx0XHRcdGNhbGxlcnNSZXR1cm4gPSBjYWxsZXJzLm1hcCgoY2FsbGVyKT0+e1xuXHRcdFx0XHRcdGNvbnN0IGNhbGxlclJldHVybiA9IGNhbGxlcigpO1xuXHRcdFx0XHRcdGlmKGNhbGxlclJldHVybiBpbnN0YW5jZW9mIHRoaXMuUHJvbWlzZUludGVyZmFjZSl7XG5cdFx0XHRcdFx0XHRoYXNBc3luYyA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBjYWxsZXJSZXR1cm47XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRpZihoYXNBc3luYyl7XG5cdFx0XHRcdFx0Y2FsbGVyc1JldHVybiA9IHRoaXMuUHJvbWlzZUZhY3RvcnkuYWxsKGNhbGxlcnNSZXR1cm4pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY2FsbGVyc1JldHVybjtcblx0XHR9XG5cdFx0XG5cdFx0aWYoYXN5bmNDYWxsc1BhcmFtc1NlcmllKXtcblx0XHRcdGNhbGxlcnMgPSBtYXBTZXJpZShjYWxsZXJzLCAoY2FsbGVyKT0+e1xuXHRcdFx0XHRjYWxsZXIgPSBjYWxsZXIoKSgpO1xuXHRcdFx0XHRyZXR1cm4gY2FsbGVyO1xuXHRcdFx0fSwgdGhpcy5Qcm9taXNlSW50ZXJmYWNlLCB0aGlzLlByb21pc2VGYWN0b3J5KTtcblx0XHRcdHJldHVybiBjYWxsZXJzLnRoZW4oIGNhbGxlcnMgPT4gbWFrZUNhbGxzKCBjYWxsZXJzLm1hcChjYWxsZXIgPT4gKCkgPT4gY2FsbGVyICkgKSApIDtcblx0XHR9XG5cdFx0ZWxzZXtcblx0XHRcdGNhbGxlcnMgPSBjYWxsZXJzLm1hcCgoY2FsbGVyKT0+Y2FsbGVyKCkpO1xuXHRcdFx0cmV0dXJuIG1ha2VDYWxscyhjYWxsZXJzKTtcblx0XHR9XG5cdFx0XG5cdH1cblx0XHRcblx0ZGVmaW5lU3ltKHRhcmdldCwgc3ltbmFtZSwgdmFsdWUpe1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHN5bW5hbWUsIHtcblx0XHRcdHZhbHVlOiB2YWx1ZSxcblx0XHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdH0pO1xuXHR9XG5cdFxuXHRyZXNvbHZlSW5zdGFuY2VPZihzdHIsIHN0YWNrID0gW10sIHJlcXVpcmVkID0gdHJ1ZSl7XG5cdFx0aWYodHlwZW9mIHN0ciA9PSAnc3RyaW5nJyB8fCB0eXBlb2Ygc3RyID09ICdzeW1ib2wnKXtcblx0XHRcdGlmKHN0YWNrLmluZGV4T2Yoc3RyKSE9PS0xKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdDeWNsaWMgaW50ZXJmYWNlIGRlZmluaXRpb24gZXJyb3IgaW4gJytKU09OLnN0cmluZ2lmeShzdGFjay5jb25jYXQoc3RyKSxudWxsLDIpKTtcblx0XHRcdH1cblx0XHRcdHN0YWNrLnB1c2goc3RyKTtcblx0XHRcdGNvbnN0IHJ1bGUgPSB0aGlzLnJ1bGVzW3N0cl07XG5cdFx0XHRsZXQgcmVzb2x2ZWQgPSBmYWxzZTtcblx0XHRcdGlmKHJ1bGUpe1xuXHRcdFx0XHRpZihydWxlLmluc3RhbmNlT2Ype1xuXHRcdFx0XHRcdHJlc29sdmVkID0gcnVsZS5pbnN0YW5jZU9mO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYocnVsZS5jbGFzc0RlZil7XG5cdFx0XHRcdFx0cmVzb2x2ZWQgPSBydWxlLmNsYXNzRGVmO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZighcmVzb2x2ZWQpe1xuXHRcdFx0XHRpZighcmVxdWlyZWQpe1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ludGVyZmFjZSBkZWZpbml0aW9uICcrKHR5cGVvZiBzdHIgPT0gJ3N5bWJvbCcgPyAnc3ltYm9sJyA6ICdcIicrc3RyKydcIicgKSsnIG5vdCBmb3VuZCwgZGkgbG9hZCBzdGFjazogJytKU09OLnN0cmluZ2lmeShzdGFjaywgbnVsbCwgMikpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMucmVzb2x2ZUluc3RhbmNlT2YocmVzb2x2ZWQsIHN0YWNrLCByZXF1aXJlZCk7XG5cdFx0fVxuXHRcdHN0YWNrLnB1c2goc3RyKTtcblx0XHRyZXR1cm4gc3RyO1xuXHR9XG5cdFxuXHRmYWN0b3J5KGNhbGxiYWNrKXtcblx0XHRyZXR1cm4gbmV3IHRoaXMuZGVmYXVsdEZhY3RvcnkoY2FsbGJhY2spO1xuXHR9XG5cdHZhbHVlRmFjdG9yeShjYWxsYmFjayl7XG5cdFx0cmV0dXJuIG5ldyBWYWx1ZUZhY3RvcnkoY2FsbGJhY2spO1xuXHR9XG5cdGNsYXNzRmFjdG9yeShjYWxsYmFjayl7XG5cdFx0cmV0dXJuIG5ldyBDbGFzc0ZhY3RvcnkoY2FsbGJhY2spO1xuXHR9XG5cdGludGVyZmFjZShuYW1lKXtcblx0XHRyZXR1cm4gbmV3IEludGVyZmFjZShuYW1lKTtcblx0fVxuXHR2YWx1ZSh2YWx1ZSl7XG5cdFx0cmV0dXJuIG5ldyBWYWx1ZSh2YWx1ZSk7XG5cdH1cblx0cmVxdWlyZShkZXApe1xuXHRcdHJldHVybiBuZXcgUmVxdWlyZShkZXApO1xuXHR9XG5cdFxuXHRkZXBlbmRlbmN5KGRlcCl7XG5cdFx0cmV0dXJuIG5ldyBEZXBlbmRlbmN5KGRlcCk7XG5cdH1cblx0XG5cdGNsYXNzRGVmKGNhbGxiYWNrKXtcblx0XHRyZXR1cm4gbmV3IENsYXNzRGVmKGNhbGxiYWNrKTtcblx0fVxufVxuIl19