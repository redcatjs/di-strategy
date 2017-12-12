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

var _interfaceClass2 = _interopRequireDefault(require("./interfaceClass"));

var _require = _interopRequireDefault(require("./require"));

var _sharedInstance = _interopRequireDefault(require("./sharedInstance"));

var _classDef = _interopRequireDefault(require("./classDef"));

var _dependency = _interopRequireDefault(require("./dependency"));

var _makeContainerApi = _interopRequireDefault(require("./makeContainerApi"));

var _sync = _interopRequireDefault(require("./sync"));

var _structuredHasPromise = _interopRequireDefault(require("./structuredHasPromise"));

var _structuredPromiseAllRecursive = _interopRequireDefault(require("./structuredPromiseAllRecursive"));

var _structuredResolveParamsInterface = _interopRequireDefault(require("./structuredResolveParamsInterface"));

var _structuredInterfacePrototype = _interopRequireDefault(require("./structuredInterfacePrototype"));

var _promiseInterface = _interopRequireDefault(require("./promiseInterface"));

var interfacePrototypeDefault;

var Container =
/*#__PURE__*/
function () {
  (0, _createClass2.default)(Container, null, [{
    key: "setInterfacePrototypeDefault",
    value: function setInterfacePrototypeDefault(interfacePrototype) {
      interfacePrototypeDefault = interfacePrototype;
    }
  }, {
    key: "getInterfacePrototypeDefault",
    value: function getInterfacePrototypeDefault(interfacePrototype) {
      return interfacePrototypeDefault;
    }
  }]);

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
        interfacePrototype = _ref$interfacePrototy === void 0 ? undefined : _ref$interfacePrototy,
        _ref$interfaceTypeChe = _ref.interfaceTypeCheck,
        interfaceTypeCheck = _ref$interfaceTypeChe === void 0 ? false : _ref$interfaceTypeChe;

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
    this.interfacePrototype = interfacePrototype || interfacePrototypeDefault;

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
        case 'interfaceTypeCheck':
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

          if (_this11.interfaceTypeCheck) {
            (0, _structuredInterfacePrototype.default)(rule.params || classDef[_this11.symInterfaces] || [], resolvedParams);
          }

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
        return this.interfaceClass(type.toString(), type);
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
    key: "interfaceClass",
    value: function interfaceClass(name, _interfaceClass) {
      return new _interfaceClass2.default(name, _interfaceClass);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250YWluZXIuanMiXSwibmFtZXMiOlsiaW50ZXJmYWNlUHJvdG90eXBlRGVmYXVsdCIsIkNvbnRhaW5lciIsImludGVyZmFjZVByb3RvdHlwZSIsInJ1bGVzIiwicnVsZXNEZWZhdWx0IiwiYXV0b2xvYWRGYWlsT25NaXNzaW5nRmlsZSIsImRlcGVuZGVuY2llcyIsImF1dG9sb2FkRXh0ZW5zaW9ucyIsImF1dG9sb2FkUGF0aFJlc29sdmVyIiwicGF0aCIsImRlZmF1bHRWYXIiLCJkZWZhdWx0UnVsZVZhciIsImRlZmF1bHREZWNvcmF0b3JWYXIiLCJkZWZhdWx0QXJnc1ZhciIsImRlZmF1bHRGYWN0b3J5IiwiZGVmYXVsdEZ1bmN0aW9uV3JhcHBlciIsImdsb2JhbEtleSIsInByb21pc2VGYWN0b3J5IiwicHJvbWlzZUludGVyZmFjZXMiLCJ1bmRlZmluZWQiLCJpbnRlcmZhY2VUeXBlQ2hlY2siLCJzeW1DbGFzc05hbWUiLCJzeW1JbnRlcmZhY2VzIiwicHJvdmlkZXJSZWdpc3RyeSIsImluc3RhbmNlUmVnaXN0cnkiLCJyZXF1aXJlcyIsInNldEF1dG9sb2FkUGF0aFJlc29sdmVyIiwibG9hZEV4dGVuc2lvblJlZ2V4IiwiUmVnRXhwIiwiam9pbiIsImFsbG93ZWREZWZhdWx0VmFycyIsInZhbGlkYXRlRGVmYXVsdFZhciIsImluZGV4T2YiLCJ1bnNoaWZ0IiwiUHJvbWlzZUludGVyZmFjZSIsIlByb21pc2VGYWN0b3J5Iiwic2V0R2xvYmFsS2V5IiwiaW5oZXJpdEluc3RhbmNlT2YiLCJpbmhlcml0UHJvdG90eXBlIiwiaW5oZXJpdE1peGlucyIsInNoYXJlZCIsImluc3RhbmNlT2YiLCJjbGFzc0RlZiIsInBhcmFtcyIsImNhbGxzIiwibGF6eUNhbGxzIiwic3Vic3RpdHV0aW9ucyIsInNoYXJlZEluVHJlZSIsInNpbmdsZXRvbiIsImFzeW5jUmVzb2x2ZSIsImFzeW5jQ2FsbHNTZXJpZSIsImRlY29yYXRvciIsImF1dG9sb2FkIiwic2V0UnVsZXNEZWZhdWx0IiwibG9hZERlcGVuZGVuY2llcyIsImFkZFJ1bGVzIiwia2V5IiwidmFsdWUiLCJmb3JFYWNoIiwiY29uZmlnIiwiayIsIkVycm9yIiwiYWxpYXNNYXAiLCJyZWFsUGF0aCIsImFsaWFzIiwic3Vic3RyIiwibGVuZ3RoIiwiZ2xvYmFsIiwiZGlycyIsImNvbnRleHQiLCJkaXJLZXkiLCJnZXREZXBlbmRlbmN5Iiwia2V5cyIsImZpbGVuYW1lIiwibGFzdEluZGV4T2YiLCJzcGxpdCIsInBvcCIsImFkZFJ1bGUiLCJpbnRlcmZhY2VOYW1lIiwicnVsZXNEZXRlY3RMYXp5TG9hZCIsInJ1bGUiLCJkZXRlY3RMYXp5TG9hZCIsIm1lcmdlUnVsZSIsInByb2Nlc3NSdWxlIiwiZ2V0Q2xhc3NEZWYiLCJyZWdpc3RlclJlcXVpcmUiLCJwcm9wZXJ0eSIsImxvYWRQYXRocyIsInJlZ2lzdGVyUmVxdWlyZU1hcCIsInJ1bGVMYXp5TG9hZCIsInN0YWNrIiwiY2FsbFZhbCIsIm1ldGhvZCIsInJ1bGVDaGVja0N5Y2xpY0xvYWQiLCJwdXNoIiwiY29uY2F0Iiwic29tZSIsInBhcmFtIiwidiIsIndyYXBWYXJUeXBlIiwiZ2V0TmFtZSIsInJlc29sdmVJbnN0YW5jZU9mIiwicGFyYW1SdWxlIiwiZ2V0UnVsZSIsImN5Y2xpYyIsImNhbGxWIiwiY2xhc3NEZWZOYW1lIiwiY2xhc3NEZWZpbml0aW9uIiwiZ2V0IiwiYXJncyIsInZhbGlkYXRlQXV0b2xvYWRGaWxlTmFtZSIsInJlcSIsInJlcXVpcmVEZXAiLCJuYW1lIiwicmVxdWlyZVBhdGgiLCJmb3VuZCIsInBhdGhGcmFnbWVudHMiLCJzaGlmdCIsImV4dCIsImRlcEV4aXN0cyIsInJlcXVpcmVkIiwiZGVwUmVxdWlyZSIsInN1YktleSIsInIiLCJkZWZhdWx0IiwiZ2V0UnVsZUJhc2UiLCJyZWdpc3RlckNsYXNzIiwiY2xhc3NOYW1lIiwidHlwZXMiLCJ0YXJnZXQiLCJkZWZpbmVTeW0iLCJtYXAiLCJ0eXBlIiwiQm9vbGVhbiIsImludGVyZmFjZURlZiIsInNoYXJlZEluc3RhbmNlcyIsInByb3ZpZGVyIiwiY29uc3RydWN0b3IiLCJtYWtlUHJvdmlkZXIiLCJzaGFyZUludGVyZmFjZSIsInJlc29sdmVkUGFyYW1zIiwiaW5kZXgiLCJnZXRQYXJhbSIsIm1ha2VJbnN0YW5jZSIsImluc3RhbmNlIiwiZmluYWxpemVJbnN0YW5jZUNyZWF0aW9uIiwicmVnaXN0ZXJJbnN0YW5jZSIsImNhbGxzUmV0dXJuIiwicnVuQ2FsbHMiLCJ0aGVuIiwiZ2V0U3Vic3RpdHV0aW9uUGFyYW0iLCJjYWxsYmFjayIsImdldFZhbHVlIiwicmVxdWlyZSIsInNsaWNlIiwiaW5zdGFuY2VSdWxlIiwibyIsInJlc29sdmVGdW5jdGlvbiIsImlzSW50ZXJmYWNlUHJvdG90eXBlIiwiaW50ZXJmYWNlQ2xhc3MiLCJ0b1N0cmluZyIsImludGVyZmFjZSIsInByb3RvdHlwZSIsInJ1bGVCYXNlIiwiZnVsbFN0YWNrIiwicmV2ZXJzZSIsImMiLCJwYXJlbnRQcm90byIsImFkZCIsIm1peGluc1J1bGUiLCJtaXhpbnNHcm91cCIsIm1peGluc0dyb3VwcyIsInJ1bGVDb2xsZWN0RXh0ZW5kc1JlY3Vyc2l2ZSIsIm1peGluR3JvdXAiLCJtaXhpbiIsIkFycmF5IiwibWl4aW5zIiwiZXh0ZW5kUnVsZSIsIm1lcmdlRXh0ZW5kIiwiYXN5bmNDYWxsc1BhcmFtc1NlcmllIiwiZXh0ZW5kUnVsZXMiLCJoYXNBc3luYyIsImNhbGxlcnMiLCJtYWtlQ2FsbCIsImNhbGxSZXR1cm4iLCJtYWtlQ2FsbHMiLCJjYWxsZXJzUmV0dXJuIiwiY2FsbGVyIiwiYWxsIiwiY2FsbGVyUmV0dXJuIiwic3ltbmFtZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJzdHIiLCJyZXNvbHZlZCIsImRlcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQUVBLElBQUlBLHlCQUFKOztJQUVxQkMsUzs7Ozs7aURBRWdCQyxrQixFQUFtQjtBQUN0REYsa0NBQTRCRSxrQkFBNUI7QUFDQTs7O2lEQUNtQ0Esa0IsRUFBbUI7QUFDdEQsYUFBT0YseUJBQVA7QUFDQTs7O0FBRUQsdUJBMEJPO0FBQUEsbUZBQUgsRUFBRztBQUFBLDBCQXpCTkcsS0F5Qk07QUFBQSxRQXpCTkEsS0F5Qk0sMkJBekJFLEVBeUJGO0FBQUEsaUNBdkJOQyxZQXVCTTtBQUFBLFFBdkJOQSxZQXVCTSxrQ0F2QlMsRUF1QlQ7QUFBQSxxQ0FyQk5DLHlCQXFCTTtBQUFBLFFBckJOQSx5QkFxQk0sc0NBckJzQixNQXFCdEI7QUFBQSxpQ0FwQk5DLFlBb0JNO0FBQUEsUUFwQk5BLFlBb0JNLGtDQXBCUyxFQW9CVDtBQUFBLHFDQW5CTkMsa0JBbUJNO0FBQUEsUUFuQk5BLGtCQW1CTSxzQ0FuQmUsQ0FBQyxJQUFELENBbUJmO0FBQUEscUNBbEJOQyxvQkFrQk07QUFBQSxRQWxCTkEsb0JBa0JNLHNDQWxCaUIsVUFBQ0MsSUFBRDtBQUFBLGFBQVFBLElBQVI7QUFBQSxLQWtCakI7QUFBQSwrQkFoQk5DLFVBZ0JNO0FBQUEsUUFoQk5BLFVBZ0JNLGdDQWhCTyxXQWdCUDtBQUFBLG1DQWZOQyxjQWVNO0FBQUEsUUFmTkEsY0FlTSxvQ0FmVyxJQWVYO0FBQUEscUNBZE5DLG1CQWNNO0FBQUEsUUFkTkEsbUJBY00sc0NBZGdCLElBY2hCO0FBQUEsbUNBYk5DLGNBYU07QUFBQSxRQWJOQSxjQWFNLG9DQWJXLElBYVg7QUFBQSxtQ0FYTkMsY0FXTTtBQUFBLFFBWE5BLGNBV007QUFBQSxxQ0FWTkMsc0JBVU07QUFBQSxRQVZOQSxzQkFVTTtBQUFBLDhCQVJOQyxTQVFNO0FBQUEsUUFSTkEsU0FRTSwrQkFSTSxLQVFOO0FBQUEsbUNBTk5DLGNBTU07QUFBQSxRQU5OQSxjQU1NO0FBQUEscUNBTE5DLGlCQUtNO0FBQUEsUUFMTkEsaUJBS00sc0NBTGMsa0JBS2Q7QUFBQSxxQ0FITmhCLGtCQUdNO0FBQUEsUUFITkEsa0JBR00sc0NBSGVpQixTQUdmO0FBQUEscUNBRk5DLGtCQUVNO0FBQUEsUUFGTkEsa0JBRU0sc0NBRmUsS0FFZjs7QUFBQTtBQUVOLFNBQUtDLFlBQUwsR0FBb0IscUJBQU8sV0FBUCxDQUFwQjtBQUNBLFNBQUtDLGFBQUwsR0FBcUIscUJBQU8sT0FBUCxDQUFyQjtBQUNBLFNBQUtDLGdCQUFMLEdBQXdCLEVBQXhCO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0IsRUFBeEI7QUFFQSxTQUFLQyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsU0FBS2xCLGtCQUFMLEdBQTBCQSxrQkFBMUI7QUFDQSxTQUFLRix5QkFBTCxHQUFpQ0EseUJBQWpDO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQSxTQUFLb0IsdUJBQUwsQ0FBNkJsQixvQkFBN0I7QUFDQSxTQUFLbUIsa0JBQUwsR0FBMEIsSUFBSUMsTUFBSixDQUFXLFFBQU0sS0FBS3JCLGtCQUFMLENBQXdCc0IsSUFBeEIsQ0FBNkIsR0FBN0IsQ0FBTixHQUF3QyxJQUFuRCxDQUExQjtBQUVBLFNBQUtsQixjQUFMLEdBQXNCQSxrQkFBa0JELFVBQXhDO0FBQ0EsU0FBS0UsbUJBQUwsR0FBMkJBLHVCQUF1QkYsVUFBbEQ7QUFDQSxTQUFLRyxjQUFMLEdBQXNCQSxrQkFBa0JILFVBQXhDO0FBRUEsU0FBS0ksY0FBTCxHQUFzQkEsY0FBdEI7QUFDQSxTQUFLQyxzQkFBTCxHQUE4QkEsc0JBQTlCO0FBRUEsU0FBS2Usa0JBQUwsR0FBMEIsQ0FBQyxXQUFELEVBQWEsT0FBYixDQUExQjtBQUNBLFNBQUtDLGtCQUFMLENBQXdCckIsVUFBeEIsRUFBb0MsWUFBcEM7QUFDQSxTQUFLcUIsa0JBQUwsQ0FBd0IsS0FBS3BCLGNBQTdCLEVBQTZDLGdCQUE3QztBQUNBLFNBQUtvQixrQkFBTCxDQUF3QixLQUFLbkIsbUJBQTdCLEVBQWtELHFCQUFsRDtBQUNBLFNBQUttQixrQkFBTCxDQUF3QixLQUFLbEIsY0FBN0IsRUFBNkMsZ0JBQTdDOztBQUVBLFFBQUdLLGtCQUFrQmMsT0FBbEIsQ0FBMEJmLGNBQTFCLE1BQThDLENBQUMsQ0FBbEQsRUFBb0Q7QUFDbkRDLHdCQUFrQmUsT0FBbEIsQ0FBMEJoQixjQUExQjtBQUNBOztBQUNELFNBQUtpQixnQkFBTCxHQUF3QiwrQkFBaUJoQixpQkFBakIsQ0FBeEI7QUFDQSxTQUFLaUIsY0FBTCxHQUFzQmxCLGNBQXRCO0FBRUEsU0FBS2Ysa0JBQUwsR0FBMEJBLHNCQUFzQkYseUJBQWhEOztBQUVBLFFBQUdnQixTQUFILEVBQWE7QUFDWixXQUFLb0IsWUFBTCxDQUFrQnBCLFNBQWxCO0FBQ0E7O0FBRUQsU0FBS1osWUFBTCxHQUFvQjtBQUVuQmlDLHlCQUFtQixJQUZBO0FBR25CQyx3QkFBa0IsS0FIQztBQUluQkMscUJBQWUsRUFKSTtBQU1uQkMsY0FBUSxLQU5XO0FBT25CQyxrQkFBWXRCLFNBUE87QUFRbkJ1QixnQkFBVXZCLFNBUlM7QUFTbkJ3QixjQUFReEIsU0FUVztBQVduQnlCLGFBQU8sRUFYWTtBQVluQkMsaUJBQVcsRUFaUTtBQWNuQkMscUJBQWUsRUFkSTtBQWVuQkMsb0JBQWMsRUFmSztBQWlCbkJDLGlCQUFXN0IsU0FqQlE7QUFtQm5COEIsb0JBQWMsS0FuQks7QUFvQm5CQyx1QkFBaUIsS0FwQkU7QUFzQm5CQyxpQkFBVyxLQXRCUTtBQXdCbkJDLGdCQUFVLEtBeEJTO0FBeUJuQjNDLFlBQU1VO0FBekJhLEtBQXBCO0FBNEJBLFNBQUtrQyxlQUFMLENBQXFCakQsWUFBckI7QUFDQSxTQUFLRCxLQUFMLEdBQWEsRUFBYjtBQUVBLFNBQUttRCxnQkFBTDtBQUNBLFNBQUtDLFFBQUwsQ0FBY3BELEtBQWQ7QUFFQTs7OzsyQkFFTXFELEcsRUFBS0MsSyxFQUFNO0FBQUE7O0FBQ2pCLFVBQUcsc0JBQU9ELEdBQVAsTUFBZSxRQUFsQixFQUEyQjtBQUMxQiwyQkFBWUEsR0FBWixFQUFpQkUsT0FBakIsQ0FBeUI7QUFBQSxpQkFBRyxNQUFLQyxNQUFMLENBQVlDLENBQVosRUFBZUosSUFBSUksQ0FBSixDQUFmLENBQUg7QUFBQSxTQUF6QjtBQUNBO0FBQ0E7O0FBQ0QsY0FBT0osR0FBUDtBQUNDLGFBQUssNEJBQUw7QUFDQSxhQUFLLG9CQUFMO0FBQ0EsYUFBSyxZQUFMO0FBQ0EsYUFBSyxnQkFBTDtBQUNBLGFBQUsscUJBQUw7QUFDQSxhQUFLLGdCQUFMO0FBQ0EsYUFBSyxvQkFBTDtBQUNBLGFBQUssb0JBQUw7QUFDQyxlQUFLQSxHQUFMLElBQVlDLEtBQVo7QUFDRDs7QUFDQSxhQUFLLFdBQUw7QUFDQyxlQUFLckIsWUFBTCxDQUFrQnFCLEtBQWxCO0FBQ0Q7O0FBQ0EsYUFBSyxzQkFBTDtBQUNDLGVBQUsvQix1QkFBTCxDQUE2QitCLEtBQTdCO0FBQ0Q7O0FBQ0EsYUFBSyxjQUFMO0FBQ0MsZUFBS0osZUFBTCxDQUFxQkksS0FBckI7QUFDRDtBQUNBOztBQUNBO0FBQ0MsZ0JBQU0sSUFBSUksS0FBSixDQUFVLDJCQUF5QkwsR0FBbkMsQ0FBTjtBQUNEO0FBdkJEO0FBeUJBOzs7b0NBRWVwRCxZLEVBQWE7QUFDNUIsV0FBS0EsWUFBTCw4QkFDSSxLQUFLQSxZQURULEVBRUlBLFlBRko7QUFJQTs7OzRDQUV1Qkksb0IsRUFBcUI7QUFFNUMsVUFBRyxzQkFBT0Esb0JBQVAsS0FBK0IsUUFBbEMsRUFBMkM7QUFFMUMsWUFBTXNELFdBQVd0RCxvQkFBakI7O0FBQ0FBLCtCQUF1Qiw4QkFBQ0MsSUFBRCxFQUFRO0FBQzlCLDZCQUFZcUQsUUFBWixFQUFzQkosT0FBdEIsQ0FBOEIsaUJBQU87QUFDcEMsZ0JBQU1LLFdBQVdELFNBQVNFLEtBQVQsQ0FBakI7O0FBQ0EsZ0JBQUd2RCxRQUFRdUQsS0FBWCxFQUFpQjtBQUNoQnZELHFCQUFPc0QsUUFBUDtBQUNBLGFBRkQsTUFHSyxJQUFHdEQsS0FBS3dELE1BQUwsQ0FBWSxDQUFaLEVBQWNELE1BQU1FLE1BQU4sR0FBYSxDQUEzQixLQUErQkYsUUFBTSxHQUF4QyxFQUE0QztBQUNoRHZELHFCQUFPc0QsV0FBU3RELEtBQUt3RCxNQUFMLENBQVlELE1BQU1FLE1BQWxCLENBQWhCO0FBQ0E7QUFDRCxXQVJEO0FBU0EsaUJBQU96RCxJQUFQO0FBQ0EsU0FYRDtBQVlBOztBQUVELFdBQUtELG9CQUFMLEdBQTRCQSxvQkFBNUI7QUFDQTs7O2lDQUVZUSxTLEVBQVU7QUFDdEIsVUFBR0EsY0FBWSxJQUFmLEVBQW9CO0FBQ25CQSxvQkFBWSxJQUFaO0FBQ0E7O0FBQ0RtRCxhQUFPbkQsU0FBUCxJQUFvQiwrQkFBaUIsSUFBakIsQ0FBcEI7QUFDQTs7OzhCQUVTb0QsSSxFQUFLO0FBQUE7O0FBQ2QseUJBQVlBLElBQVosRUFBa0JWLE9BQWxCLENBQTBCLGtCQUFRO0FBQ2pDLFlBQU1XLFVBQVVELEtBQUtFLE1BQUwsQ0FBaEI7O0FBRUEsWUFBR0Qsc0NBQUgsRUFBaUM7QUFDaEMsaUJBQUs1QyxRQUFMLENBQWM2QyxNQUFkLElBQXdCRCxRQUFRRSxhQUFSLEVBQXhCO0FBQ0E7QUFDQTs7QUFFREYsZ0JBQVFHLElBQVIsR0FBZWQsT0FBZixDQUF1QixVQUFDZSxRQUFELEVBQVk7QUFFbEMsY0FBSWpCLE1BQU1pQixRQUFWOztBQUNBLGNBQUdqQixJQUFJUyxNQUFKLENBQVcsQ0FBWCxFQUFhLENBQWIsS0FBaUIsSUFBcEIsRUFBeUI7QUFDeEJULGtCQUFNQSxJQUFJUyxNQUFKLENBQVcsQ0FBWCxDQUFOO0FBQ0E7O0FBRURULGdCQUFNYyxTQUFPLEdBQVAsR0FBV2QsSUFBSVMsTUFBSixDQUFXLENBQVgsRUFBY1QsSUFBSWtCLFdBQUosQ0FBZ0IsR0FBaEIsS0FBd0JsQixJQUFJVSxNQUExQyxDQUFqQjs7QUFDQSxjQUFHVixJQUFJbUIsS0FBSixDQUFVLEdBQVYsRUFBZUMsR0FBZixNQUFzQixPQUF6QixFQUFpQztBQUNoQ3BCLGtCQUFNQSxJQUFJUyxNQUFKLENBQVcsQ0FBWCxFQUFjVCxJQUFJa0IsV0FBSixDQUFnQixHQUFoQixDQUFkLENBQU47QUFDQTs7QUFDRCxpQkFBS2pELFFBQUwsQ0FBYytCLEdBQWQsSUFBcUJhLFFBQVFJLFFBQVIsQ0FBckI7QUFDQSxTQVpEO0FBYUEsT0FyQkQ7QUFzQkE7Ozs2QkFHUXRFLEssRUFBTTtBQUFBOztBQUNkLFVBQUcsT0FBT0EsS0FBUCxJQUFnQixVQUFuQixFQUE4QjtBQUM3QkEsZ0JBQVFBLE1BQU0sSUFBTixDQUFSO0FBQ0E7O0FBQ0Qsd0NBQTJCQSxLQUEzQixFQUFrQ3VELE9BQWxDLENBQTBDO0FBQUEsZUFBaUIsT0FBS21CLE9BQUwsQ0FBYUMsYUFBYixFQUE0QjNFLE1BQU0yRSxhQUFOLENBQTVCLEVBQWtELEtBQWxELENBQWpCO0FBQUEsT0FBMUM7QUFDQSwwQ0FBNkIzRSxLQUE3QixFQUFvQ3VELE9BQXBDLENBQTRDO0FBQUEsZUFBaUIsT0FBS21CLE9BQUwsQ0FBYUMsYUFBYixFQUE0QjNFLE1BQU0yRSxhQUFOLENBQTVCLEVBQWtELEtBQWxELENBQWpCO0FBQUEsT0FBNUM7QUFDQSxXQUFLQyxtQkFBTDtBQUNBOzs7NEJBQ09ELGEsRUFBZUUsSSxFQUE0QjtBQUFBLFVBQXRCQyxjQUFzQix1RUFBTCxJQUFLOztBQUNsRCxVQUFHLE9BQU9ELElBQVAsSUFBZSxVQUFsQixFQUE2QjtBQUM1QkEsZUFBT0EsS0FBSyxJQUFMLENBQVA7QUFDQTs7QUFFRCxVQUFHLEtBQUs3RSxLQUFMLENBQVcyRSxhQUFYLE1BQThCM0QsU0FBakMsRUFBMkM7QUFDMUMsYUFBS2hCLEtBQUwsQ0FBVzJFLGFBQVgsSUFBNEIsS0FBS0ksU0FBTCxDQUFlLEVBQWYsRUFBbUIsS0FBSzlFLFlBQXhCLENBQTVCO0FBQ0E7O0FBRUQsV0FBS0QsS0FBTCxDQUFXMkUsYUFBWCxJQUE0QixLQUFLSSxTQUFMLENBQWUsS0FBSy9FLEtBQUwsQ0FBVzJFLGFBQVgsQ0FBZixFQUEwQ0UsSUFBMUMsQ0FBNUI7QUFDQSxXQUFLRyxXQUFMLENBQWlCTCxhQUFqQjtBQUVBRSxhQUFPLEtBQUs3RSxLQUFMLENBQVcyRSxhQUFYLENBQVA7QUFaa0Qsa0JBYy9CRSxJQWQrQjtBQUFBLFVBYzVDdEMsUUFkNEMsU0FjNUNBLFFBZDRDOztBQWVsRCxVQUFHQSxRQUFILEVBQVk7QUFDWCxZQUFHQSxxQ0FBSCxFQUFnQztBQUMvQkEscUJBQVdBLFNBQVMwQyxXQUFULEVBQVg7QUFDQTs7QUFDRCxhQUFLQyxlQUFMLENBQXFCUCxhQUFyQixFQUFvQ3BDLFFBQXBDO0FBQ0E7O0FBRUQsVUFBR3VDLGNBQUgsRUFBa0I7QUFDakIsYUFBS0YsbUJBQUw7QUFDQTtBQUVEOzs7dUNBRWtCdEIsSyxFQUFPNkIsUSxFQUFTO0FBQ2xDLFVBQUcsS0FBS3hELGtCQUFMLENBQXdCRSxPQUF4QixDQUFnQ3lCLEtBQWhDLE1BQXlDLENBQUMsQ0FBN0MsRUFBK0M7QUFDOUMsY0FBTSxJQUFJSSxLQUFKLENBQVUsbUJBQWlCSixLQUFqQixHQUF1QixrQkFBdkIsR0FBMEM2QixRQUExQyxHQUFtRCxzQkFBbkQsR0FBMEUsS0FBS3hELGtCQUFMLENBQXdCRCxJQUF4QixDQUE2QixLQUE3QixDQUFwRixDQUFOO0FBQ0E7QUFDRDs7O3VDQUVpQjtBQUNqQixXQUFLMEQsU0FBTCxDQUFlLEtBQUtqRixZQUFwQjtBQUNBLFdBQUtrRixrQkFBTCxDQUF3QixLQUFLL0QsUUFBN0I7QUFDQTs7OzBDQUNvQjtBQUFBOztBQUNwQix5QkFBWSxLQUFLdEIsS0FBakIsRUFBd0J1RCxPQUF4QixDQUFnQyxlQUFLO0FBQ3BDLGVBQUsrQixZQUFMLENBQWtCakMsR0FBbEI7QUFDQSxPQUZEO0FBR0E7OztpQ0FFWUEsRyxFQUFjO0FBQUE7O0FBQUEsVUFBVGtDLEtBQVMsdUVBQUgsRUFBRztBQUMxQixVQUFNOUMsUUFBUSxFQUFkO0FBQ0EsVUFBTUMsWUFBWSxFQUFsQjtBQUVBLFVBQU1tQyxPQUFPLEtBQUs3RSxLQUFMLENBQVdxRCxHQUFYLENBQWI7O0FBRUEsVUFBRyxDQUFDd0IsS0FBS3BDLEtBQVQsRUFBZTtBQUNkO0FBQ0E7O0FBRURvQyxXQUFLcEMsS0FBTCxDQUFXYyxPQUFYLENBQW1CLG1CQUFXO0FBQzdCLFlBQUcsT0FBT2lDLE9BQVAsSUFBa0IsVUFBckIsRUFBZ0M7QUFDL0JBLG9CQUFVLENBQUNBLE9BQUQsQ0FBVjtBQUNBOztBQUg0Qix1QkFJQ0EsT0FKRDtBQUFBO0FBQUEsWUFJdEJDLE1BSnNCO0FBQUE7QUFBQSxZQUlkakQsTUFKYywyQkFJTCxFQUpLOztBQUs3QixZQUFJLE9BQUtrRCxtQkFBTCxDQUF5QmxELE1BQXpCLEVBQWlDLENBQUVhLEdBQUYsQ0FBakMsQ0FBSixFQUErQztBQUM5Q1gsb0JBQVVpRCxJQUFWLENBQWVILE9BQWY7QUFDQSxTQUZELE1BR0k7QUFDSC9DLGdCQUFNa0QsSUFBTixDQUFXSCxPQUFYO0FBQ0E7QUFDRCxPQVhEO0FBYUFYLFdBQUtwQyxLQUFMLEdBQWFBLEtBQWI7QUFDQW9DLFdBQUtuQyxTQUFMLEdBQWlCLENBQUNtQyxLQUFLbkMsU0FBTCxJQUFrQixFQUFuQixFQUF1QmtELE1BQXZCLENBQThCbEQsU0FBOUIsQ0FBakI7QUFDQTs7O3dDQUNtQkYsTSxFQUFpQjtBQUFBOztBQUFBLFVBQVQrQyxLQUFTLHVFQUFILEVBQUc7QUFDcEMsYUFBTyxtQkFBWS9DLE1BQVosRUFBb0JxRCxJQUFwQixDQUF5QixhQUFHO0FBQ2xDLFlBQU1DLFFBQVF0RCxPQUFPaUIsQ0FBUCxDQUFkOztBQUNBLFlBQU1zQyxJQUFJLE9BQUtDLFdBQUwsQ0FBaUJGLEtBQWpCLEVBQXdCLE9BQUt0RixjQUE3QixDQUFWOztBQUNBLFlBQUd1RixnQ0FBSCxFQUEwQjtBQUN6QixjQUFNcEIsZ0JBQWdCb0IsRUFBRUUsT0FBRixFQUF0Qjs7QUFFQSxjQUFHLENBQUMsT0FBS0MsaUJBQUwsQ0FBdUJ2QixhQUF2QixFQUFzQyxFQUF0QyxFQUEwQyxLQUExQyxDQUFKLEVBQXFEO0FBQ3BEO0FBQ0EsbUJBQU8sS0FBUDtBQUNBOztBQUVELGNBQU13QixZQUFZLE9BQUtDLE9BQUwsQ0FBYXpCLGFBQWIsQ0FBbEI7O0FBRUEsY0FBR1ksTUFBTTFELE9BQU4sQ0FBYzhDLGFBQWQsTUFBK0IsQ0FBQyxDQUFuQyxFQUFxQztBQUNwQyxtQkFBTyxJQUFQO0FBQ0E7O0FBRURZLGdCQUFNSSxJQUFOLENBQVdoQixhQUFYO0FBRUEsY0FBSTBCLE1BQUo7O0FBRUEsY0FBR0YsVUFBVTNELE1BQWIsRUFBb0I7QUFDbkI2RCxxQkFBUyxPQUFLWCxtQkFBTCxDQUF5QlMsVUFBVTNELE1BQW5DLEVBQTJDK0MsS0FBM0MsQ0FBVDtBQUNBOztBQUVELGNBQUcsQ0FBQ2MsTUFBSixFQUFXO0FBQ1ZBLHFCQUFTRixVQUFVMUQsS0FBVixDQUFnQm9ELElBQWhCLENBQXFCLGlCQUFPO0FBQUEsd0RBQ0xTLEtBREs7QUFBQSxrQkFDN0JiLE1BRDZCO0FBQUE7QUFBQSxrQkFDckJqRCxNQURxQix3QkFDWixFQURZOztBQUVwQyxxQkFBTyxPQUFLa0QsbUJBQUwsQ0FBeUJsRCxNQUF6QixFQUFpQytDLEtBQWpDLENBQVA7QUFDQSxhQUhRLENBQVQ7QUFJQTs7QUFFRCxpQkFBT2MsTUFBUDtBQUVBOztBQUNELFlBQUcsc0JBQU9OLENBQVAsS0FBWSxRQUFaLElBQXdCQSxNQUFNLElBQTlCLElBQXNDLEVBQUVBLHlCQUFGLENBQXpDLEVBQTZEO0FBQzVELGlCQUFPLE9BQUtMLG1CQUFMLENBQXlCSyxDQUF6QixFQUE0QlIsS0FBNUIsQ0FBUDtBQUNBO0FBQ0QsT0F0Q00sQ0FBUDtBQXVDQTs7O2dDQUVXbEMsRyxFQUFnQjtBQUFBOztBQUFBLFVBQVhrQyxLQUFXLHVFQUFILEVBQUc7O0FBQzNCLFVBQUcsS0FBS3ZGLEtBQUwsQ0FBV3FELEdBQVgsTUFBb0JyQyxTQUF2QixFQUFpQztBQUNoQyxhQUFLaEIsS0FBTCxDQUFXcUQsR0FBWCxJQUFrQixLQUFLMEIsU0FBTCxDQUFlLEVBQWYsRUFBbUIsS0FBSzlFLFlBQXhCLENBQWxCO0FBQ0E7O0FBQ0QsVUFBTTRFLE9BQU8sS0FBSzdFLEtBQUwsQ0FBV3FELEdBQVgsQ0FBYjs7QUFDQSxVQUFHd0IsS0FBS3ZDLFVBQVIsRUFBbUI7QUFDbEIsWUFBR2lELE1BQU0xRCxPQUFOLENBQWN3QixHQUFkLE1BQXFCLENBQUMsQ0FBekIsRUFBMkI7QUFDMUIsZ0JBQU0sSUFBSUssS0FBSixDQUFVLDBDQUF3Qyx3QkFBZTZCLE1BQU1LLE1BQU4sQ0FBYXZDLEdBQWIsQ0FBZixFQUFpQyxJQUFqQyxFQUFzQyxDQUF0QyxDQUFsRCxDQUFOO0FBQ0E7O0FBQ0RrQyxjQUFNSSxJQUFOLENBQVd0QyxHQUFYO0FBQ0EsYUFBSzJCLFdBQUwsQ0FBaUJILEtBQUt2QyxVQUF0QixFQUFrQ2lELEtBQWxDO0FBQ0E7O0FBQ0QsVUFBR1YsS0FBS2hDLFNBQVIsRUFBa0I7QUFDakJnQyxhQUFLdEMsUUFBTCxHQUFnQixZQUFVO0FBQ3pCLGlCQUFPc0MsS0FBS2hDLFNBQVo7QUFDQSxTQUZEO0FBR0E7O0FBQ0QsVUFBRyxPQUFPZ0MsS0FBS3RDLFFBQVosSUFBd0IsUUFBM0IsRUFBb0M7QUFDbkMsWUFBTWdFLGVBQWUxQixLQUFLdEMsUUFBMUI7O0FBQ0FzQyxhQUFLdEMsUUFBTCxHQUFnQixZQUFXO0FBQzFCLGNBQU1pRSxrQkFBa0IsT0FBS0MsR0FBTCxDQUFTRixZQUFULENBQXhCOztBQUQwQiw0Q0FBUEcsSUFBTztBQUFQQSxnQkFBTztBQUFBOztBQUUxQixvREFBV0YsZUFBWCxnQkFBOEJFLElBQTlCO0FBQ0EsU0FIRDtBQUlBOztBQUNELFVBQUcsS0FBS0Msd0JBQUwsQ0FBOEJ0RCxHQUE5QixDQUFILEVBQXNDO0FBQ3JDLFlBQUd3QixLQUFLNUIsUUFBUixFQUFpQjtBQUNoQixjQUFNM0MsT0FBT3VFLEtBQUt2RSxJQUFMLElBQWErQyxHQUExQjtBQUNBLGNBQU11RCxNQUFNLEtBQUtDLFVBQUwsQ0FBZ0J4RCxHQUFoQixFQUFxQi9DLElBQXJCLENBQVo7O0FBQ0EsY0FBR3NHLEdBQUgsRUFBTztBQUNOLGlCQUFLMUIsZUFBTCxDQUFxQjdCLEdBQXJCLEVBQTBCdUQsR0FBMUI7QUFDQTtBQUNEO0FBQ0Q7QUFDRDs7OzZDQUV3QkUsSSxFQUFLO0FBQzdCLFVBQUcsT0FBT0EsSUFBUCxJQUFlLFFBQWYsSUFBMkJBLEtBQUtoRCxNQUFMLENBQVksQ0FBWixFQUFjLENBQWQsTUFBbUIsR0FBakQsRUFBcUQ7QUFDcEQsZUFBTyxLQUFQO0FBQ0E7O0FBQ0QsYUFBTyxJQUFQO0FBQ0E7OzsrQkFFVVQsRyxFQUFLMEQsVyxFQUFZO0FBQUE7O0FBQzNCLFVBQUcsS0FBS3pGLFFBQUwsQ0FBYytCLEdBQWQsQ0FBSCxFQUFzQjtBQUNyQixlQUFPLEtBQUsvQixRQUFMLENBQWMrQixHQUFkLENBQVA7QUFDQTs7QUFFRDBELG9CQUFjLEtBQUsxRyxvQkFBTCxDQUEwQjBHLFdBQTFCLENBQWQ7QUFFQSxVQUFNQyxRQUFRLEtBQUs1RyxrQkFBTCxDQUF3QndGLE1BQXhCLENBQStCLEVBQS9CLEVBQW1DQyxJQUFuQyxDQUF5QyxlQUFPO0FBRTdELFlBQU1vQixnQkFBZ0JGLFlBQVl2QyxLQUFaLENBQWtCLEdBQWxCLENBQXRCO0FBR0EsWUFBSWxFLE9BQU8yRyxjQUFjQyxLQUFkLEVBQVg7O0FBQ0EsWUFBR0MsR0FBSCxFQUFPO0FBQ043RyxrQkFBUSxNQUFJNkcsR0FBWjtBQUNBOztBQUdELFlBQUcsT0FBS0MsU0FBTCxDQUFlOUcsSUFBZixDQUFILEVBQXdCO0FBQ3ZCLGNBQUkrRyxXQUFXLE9BQUtDLFVBQUwsQ0FBZ0JoSCxJQUFoQixDQUFmOztBQUVBLGNBQUcyRyxjQUFjbEQsTUFBakIsRUFBd0I7QUFDdkJrRCwwQkFBYzFELE9BQWQsQ0FBdUIsa0JBQVU7QUFDaEMsa0JBQUcsT0FBTzhELFFBQVAsS0FBb0IsV0FBcEIsSUFBbUNBLGFBQWEsSUFBbkQsRUFBd0Q7QUFDdkRBLDJCQUFXQSxTQUFTRSxNQUFULENBQVg7QUFDQTtBQUNELGFBSkQ7QUFLQTs7QUFHRCxpQkFBS2pHLFFBQUwsQ0FBYytCLEdBQWQsSUFBcUJnRSxRQUFyQjtBQUVBLGlCQUFPLElBQVA7QUFDQTtBQUVELE9BNUJhLENBQWQ7O0FBNkJBLFVBQUksQ0FBRUwsS0FBRixLQUFhLEtBQUs5Ryx5QkFBTCxLQUFpQyxNQUFqQyxJQUEyQzZHLFdBQTVDLElBQTRELEtBQUs3Ryx5QkFBTCxLQUFpQyxJQUF6RyxDQUFKLEVBQW9IO0FBQ25ILGNBQU0sSUFBSXdELEtBQUosQ0FBVSxpREFBK0NxRCxXQUEvQyxHQUEyRCxHQUFyRSxDQUFOO0FBQ0E7O0FBRUQsYUFBTyxLQUFLekYsUUFBTCxDQUFjK0IsR0FBZCxDQUFQO0FBQ0E7Ozt1Q0FHa0IvQixRLEVBQVM7QUFBQTs7QUFDM0IseUJBQVlBLFFBQVosRUFBc0JpQyxPQUF0QixDQUE4QixVQUFDdUQsSUFBRCxFQUFRO0FBQ3JDLGVBQUs1QixlQUFMLENBQXFCNEIsSUFBckIsRUFBMEJ4RixTQUFTd0YsSUFBVCxDQUExQjtBQUNBLE9BRkQ7QUFHQTs7O29DQUNlQSxJLEVBQUtVLEUsRUFBRTtBQUN0QixVQUFHLHNCQUFPQSxFQUFQLEtBQVksUUFBWixJQUF3QixPQUFPQSxHQUFFQyxPQUFULElBQW9CLFVBQS9DLEVBQTBEO0FBQ3pERCxhQUFJQSxHQUFFQyxPQUFOO0FBQ0E7O0FBQ0QsVUFBRyxPQUFPRCxFQUFQLEtBQWEsVUFBaEIsRUFBMkI7QUFDMUI7QUFDQTs7QUFDRCxVQUFNM0MsT0FBTyxLQUFLNkMsV0FBTCxDQUFpQlosSUFBakIsQ0FBYjs7QUFDQSxVQUFHakMsS0FBSzdCLFNBQUwsSUFBa0J3RSxHQUFFLEtBQUt0RyxZQUFQLENBQXJCLEVBQTBDO0FBQ3pDc0c7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxVQUFrQkEsRUFBbEI7QUFDQTs7QUFFRCxVQUFHM0MsS0FBSzdCLFNBQVIsRUFBa0I7QUFDakIsYUFBS0EsU0FBTCxDQUFlOEQsSUFBZixFQUFxQlUsRUFBckI7QUFDQSxPQUZELE1BR0k7QUFDSCxhQUFLRyxhQUFMLENBQW1CYixJQUFuQixFQUF5QlUsRUFBekI7QUFDQTtBQUNEOzs7OEJBR1NJLFMsRUFBc0I7QUFBQTs7QUFBQSxVQUFYQyxLQUFXLHVFQUFILEVBQUc7QUFDL0IsYUFBTyxVQUFDQyxNQUFELEVBQVU7QUFFaEIsZ0JBQUtDLFNBQUwsQ0FBZUQsTUFBZixFQUF1QixRQUFLNUcsWUFBNUIsRUFBMEMwRyxTQUExQzs7QUFFQSxnQkFBS0QsYUFBTCxDQUFtQkMsU0FBbkIsRUFBOEJFLE1BQTlCOztBQUVBLFlBQUcsT0FBT0QsS0FBUCxJQUFnQixVQUFuQixFQUE4QjtBQUM3QkEsa0JBQVFBLE9BQVI7QUFDQTs7QUFDREEsZ0JBQVFBLE1BQU1HLEdBQU4sQ0FBVTtBQUFBLGlCQUFRLFFBQUtoQyxXQUFMLENBQWlCaUMsSUFBakIsRUFBdUIsUUFBS3hILG1CQUE1QixDQUFSO0FBQUEsU0FBVixDQUFSOztBQUVBLFlBQUlxSCxPQUFPLFFBQUszRyxhQUFaLENBQUosRUFBZ0M7QUFDL0IwRyxrQkFBUUEsTUFBTWpDLE1BQU4sQ0FBYWtDLE9BQU8sUUFBSzNHLGFBQVosQ0FBYixDQUFSO0FBQ0E7O0FBQ0QsZ0JBQUs0RyxTQUFMLENBQWVELE1BQWYsRUFBdUIsUUFBSzNHLGFBQTVCLEVBQTJDMEcsS0FBM0M7O0FBRUEsZUFBT0MsTUFBUDtBQUNBLE9BakJEO0FBa0JBOzs7MkJBRU1oQixJLEVBQUs7QUFDWCxhQUFPb0IsUUFBUSxLQUFLbEksS0FBTCxDQUFXOEcsSUFBWCxDQUFSLENBQVA7QUFDQTs7O3dCQUVHcUIsWSxFQUFjekIsSSxFQUF1QztBQUFBLFVBQWpDMEIsZUFBaUMsdUVBQWYsRUFBZTtBQUFBLFVBQVg3QyxLQUFXLHVFQUFILEVBQUc7QUFDeEQsYUFBTyxLQUFLOEMsUUFBTCxDQUFjRixZQUFkLEVBQTRCekIsSUFBNUIsRUFBa0MwQixlQUFsQyxFQUFtRDdDLEtBQW5ELENBQVA7QUFDQTs7OzZCQUNRWixhLEVBQWM7QUFFdEIsVUFBRyxPQUFPQSxhQUFQLElBQXdCLFVBQTNCLEVBQXNDO0FBQ3JDQSx3QkFBZ0JBLGNBQWMsS0FBS3pELFlBQW5CLENBQWhCOztBQUNBLFlBQUcsQ0FBQ3lELGFBQUosRUFBa0I7QUFDakIsZ0JBQU0sSUFBSWpCLEtBQUosQ0FBVSx1QkFBcUJpQixjQUFjMkQsV0FBZCxDQUEwQnhCLElBQXpELENBQU47QUFDQTtBQUNEOztBQUVELFVBQUduQyw0Q0FBSCxFQUFzQztBQUNyQ0Esd0JBQWdCQSxjQUFjc0IsT0FBZCxFQUFoQjtBQUNBOztBQUdELFVBQUcsQ0FBQyxLQUFLN0UsZ0JBQUwsQ0FBc0J1RCxhQUF0QixDQUFKLEVBQXlDO0FBQ3hDLGFBQUt2RCxnQkFBTCxDQUFzQnVELGFBQXRCLElBQXVDLEtBQUs0RCxZQUFMLENBQWtCNUQsYUFBbEIsQ0FBdkM7QUFDQTs7QUFDRCxhQUFPLEtBQUt2RCxnQkFBTCxDQUFzQnVELGFBQXRCLENBQVA7QUFDQTs7O2lDQUVZQSxhLEVBQWM7QUFBQTs7QUFDMUIsVUFBTUUsT0FBTyxLQUFLdUIsT0FBTCxDQUFhekIsYUFBYixDQUFiO0FBQ0EsVUFBTXBDLFdBQVcsS0FBSzJELGlCQUFMLENBQXVCdkIsYUFBdkIsQ0FBakI7QUFDQSxhQUFPLFVBQUMrQixJQUFELEVBQU8wQixlQUFQLEVBQXdCN0MsS0FBeEIsRUFBZ0M7QUFFdEM7QUFDQSxZQUFHLFFBQUtsRSxnQkFBTCxDQUFzQnNELGFBQXRCLENBQUgsRUFBd0M7QUFDdkMsaUJBQU8sUUFBS3RELGdCQUFMLENBQXNCc0QsYUFBdEIsQ0FBUDtBQUNBOztBQUVEeUQsMEJBQWtCLHFCQUFjLEVBQWQsRUFBa0JBLGVBQWxCLENBQWxCO0FBQ0F2RCxhQUFLakMsWUFBTCxDQUFrQlcsT0FBbEIsQ0FBMEIsMEJBQWtCO0FBQzNDLGNBQUcsQ0FBQzZFLGdCQUFnQkksY0FBaEIsQ0FBSixFQUFvQztBQUNuQ0osNEJBQWdCSSxjQUFoQixJQUFrQyw0QkFBbUJBLGNBQW5CLFVBQWxDO0FBQ0E7QUFDRCxTQUpEO0FBTUEsWUFBSWhHLE1BQUo7QUFDQSxZQUFJakMsVUFBSjs7QUFDQSxZQUFHbUcsSUFBSCxFQUFRO0FBQ1BsRSxtQkFBU2tFLElBQVQ7QUFDQW5HLHVCQUFhLFFBQUtHLGNBQWxCO0FBQ0EsU0FIRCxNQUlJO0FBQ0g4QixtQkFBU3FDLEtBQUtyQyxNQUFMLElBQWVELFNBQVMsUUFBS3BCLGFBQWQsQ0FBZixJQUErQyxFQUF4RDtBQUNBWix1QkFBYSxRQUFLQyxjQUFsQjtBQUNBOztBQUVELFlBQU1pSSxpQkFBaUJqRyxPQUFPd0YsR0FBUCxDQUFXLFVBQUNHLFlBQUQsRUFBZU8sS0FBZixFQUF1QjtBQUN4RCxpQkFBTyxRQUFLQyxRQUFMLENBQWNSLFlBQWQsRUFBNEJ0RCxJQUE1QixFQUFrQ3VELGVBQWxDLEVBQW1EN0gsVUFBbkQsRUFBK0RtSSxLQUEvRCxFQUFzRW5ELEtBQXRFLENBQVA7QUFDQSxTQUZzQixDQUF2QixDQXpCc0MsQ0E2QnRDOztBQUNBLFlBQUcsUUFBS2xFLGdCQUFMLENBQXNCc0QsYUFBdEIsQ0FBSCxFQUF3QztBQUN2QyxpQkFBTyxRQUFLdEQsZ0JBQUwsQ0FBc0JzRCxhQUF0QixDQUFQO0FBQ0E7O0FBRUQsWUFBTWlFLGVBQWUsU0FBZkEsWUFBZSxDQUFDSCxjQUFELEVBQWtCO0FBRXRDQSwyQkFBaUIsK0NBQWlDakcsTUFBakMsRUFBeUNpRyxjQUF6QyxDQUFqQjs7QUFFQSxjQUFHLFFBQUt4SCxrQkFBUixFQUEyQjtBQUMxQix1REFBNkI0RCxLQUFLckMsTUFBTCxJQUFlRCxTQUFTLFFBQUtwQixhQUFkLENBQWYsSUFBK0MsRUFBNUUsRUFBZ0ZzSCxjQUFoRjtBQUNBOztBQUdELGNBQU1JLDhDQUFldEcsUUFBZixpREFBMkJrRyxjQUEzQixNQUFOOztBQUVBLGNBQU1LLDJCQUEyQixTQUEzQkEsd0JBQTJCLEdBQUk7QUFDcEMsZ0JBQUdqRSxLQUFLeEMsTUFBUixFQUFlO0FBQ2Qsc0JBQUswRyxnQkFBTCxDQUFzQnBFLGFBQXRCLEVBQXFDa0UsUUFBckM7QUFDQTs7QUFFRCxnQkFBTUcsY0FBYyxRQUFLQyxRQUFMLENBQWNwRSxLQUFLbkMsU0FBbkIsRUFBOEJtRyxRQUE5QixFQUF3Q2hFLElBQXhDLEVBQThDdUQsZUFBOUMsQ0FBcEI7O0FBQ0EsZ0JBQUdZLHVCQUF1QixRQUFLakgsZ0JBQS9CLEVBQWdEO0FBQy9DLHFCQUFPaUgsWUFBWUUsSUFBWixDQUFpQjtBQUFBLHVCQUFJTCxRQUFKO0FBQUEsZUFBakIsQ0FBUDtBQUNBOztBQUVELG1CQUFPQSxRQUFQO0FBQ0EsV0FYRDs7QUFhQSxjQUFNRyxjQUFjLFFBQUtDLFFBQUwsQ0FBY3BFLEtBQUtwQyxLQUFuQixFQUEwQm9HLFFBQTFCLEVBQW9DaEUsSUFBcEMsRUFBMEN1RCxlQUExQyxDQUFwQjs7QUFDQSxjQUFHWSx1QkFBdUIsUUFBS2pILGdCQUEvQixFQUFnRDtBQUMvQyxtQkFBT2lILFlBQVlFLElBQVosQ0FBaUI7QUFBQSxxQkFBSUosMEJBQUo7QUFBQSxhQUFqQixDQUFQO0FBQ0E7O0FBRUQsaUJBQU9BLDBCQUFQO0FBQ0EsU0E5QkQ7O0FBK0JBLFlBQUcsbUNBQXFCdEcsTUFBckIsRUFBNkJpRyxjQUE3QixFQUE2QyxRQUFLMUcsZ0JBQWxELENBQUgsRUFBdUU7QUFDdEUsaUJBQU8sNENBQThCUyxNQUE5QixFQUFzQ2lHLGNBQXRDLEVBQXNELFFBQUsxRyxnQkFBM0QsRUFBNkUsUUFBS0MsY0FBbEYsRUFBbUdrSCxJQUFuRyxDQUF3RywwQkFBZ0I7QUFDOUgsbUJBQU9OLGFBQWFILGNBQWIsQ0FBUDtBQUNBLFdBRk0sQ0FBUDtBQUdBOztBQUVELGVBQU9HLGFBQWFILGNBQWIsQ0FBUDtBQUNBLE9BeEVEO0FBeUVBOzs7eUNBRW9CTixZLEVBQWN0RCxJLEVBQU02RCxLLEVBQU07QUFDOUMsVUFBTS9GLGdCQUFnQixLQUFLcUQsV0FBTCxDQUFpQm5CLEtBQUtsQyxhQUF0QixFQUFxQyxLQUFLbkMsY0FBMUMsQ0FBdEI7O0FBRUEsVUFBRyxPQUFPa0ksS0FBUCxLQUFpQixXQUFqQixJQUFnQy9GLGNBQWMrRixLQUFkLENBQW5DLEVBQXdEO0FBQ3ZEUCx1QkFBZXhGLGNBQWMrRixLQUFkLENBQWY7QUFDQVAsdUJBQWUsS0FBS25DLFdBQUwsQ0FBaUJtQyxZQUFqQixFQUErQixLQUFLM0gsY0FBcEMsRUFBb0QsSUFBcEQsQ0FBZjtBQUNBOztBQUVELFVBQUcySCwyQ0FBSCxFQUFxQztBQUNwQyxZQUFNeEQsZ0JBQWdCd0QsYUFBYWxDLE9BQWIsRUFBdEI7O0FBQ0EsWUFBR3RELGNBQWNnQyxhQUFkLENBQUgsRUFBZ0M7QUFDL0J3RCx5QkFBZXhGLGNBQWNnQyxhQUFkLENBQWY7QUFDQXdELHlCQUFlLEtBQUtuQyxXQUFMLENBQWlCbUMsWUFBakIsRUFBK0IsS0FBSzNILGNBQXBDLEVBQW9ELElBQXBELENBQWY7QUFDQTtBQUVEOztBQUNELGFBQU8ySCxZQUFQO0FBQ0E7Ozs2QkFDUUEsWSxFQUFjdEQsSSxFQUFNdUQsZSxFQUF5RTtBQUFBOztBQUFBLFVBQXhEN0gsVUFBd0QsdUVBQTNDLFdBQTJDO0FBQUEsVUFBOUJtSSxLQUE4Qix1RUFBdEIxSCxTQUFzQjtBQUFBLFVBQVh1RSxLQUFXLHVFQUFILEVBQUc7QUFFckc0QyxxQkFBZSxLQUFLbkMsV0FBTCxDQUFpQm1DLFlBQWpCLEVBQStCNUgsVUFBL0IsQ0FBZjtBQUVBNEgscUJBQWUsS0FBS2dCLG9CQUFMLENBQTBCaEIsWUFBMUIsRUFBd0N0RCxJQUF4QyxFQUE4QzZELEtBQTlDLENBQWY7O0FBRUEsVUFBR1Asd0NBQUgsRUFBbUM7QUFDbEMsZUFBT0EsYUFBYWlCLFFBQWIsQ0FBc0JoQixlQUF0QixDQUFQO0FBQ0E7O0FBQ0QsVUFBR0QsdUNBQUgsRUFBaUM7QUFDaEMsZUFBT0EsYUFBYWtCLFFBQWIsRUFBUDtBQUNBOztBQUNELFVBQUdsQix3Q0FBSCxFQUFtQztBQUNsQyxlQUFPQSxhQUFhbUIsT0FBYixFQUFQO0FBQ0E7O0FBRUQsVUFBR25CLDJDQUFILEVBQXFDO0FBRXBDLFlBQU14RCxnQkFBZ0J3RCxhQUFhbEMsT0FBYixFQUF0QjtBQUdBVixnQkFBUUEsTUFBTWdFLEtBQU4sQ0FBWSxDQUFaLENBQVI7O0FBQ0EsWUFBR2hFLE1BQU0xRCxPQUFOLENBQWM4QyxhQUFkLE1BQStCLENBQUMsQ0FBbkMsRUFBcUM7QUFDcEMsZ0JBQU0sSUFBSWpCLEtBQUosQ0FBVSxnQ0FBOEIsd0JBQWU2QixNQUFNSyxNQUFOLENBQWFqQixhQUFiLENBQWYsRUFBMkMsSUFBM0MsRUFBZ0QsQ0FBaEQsQ0FBeEMsQ0FBTjtBQUNBOztBQUNEWSxjQUFNSSxJQUFOLENBQVdoQixhQUFYO0FBRUEsWUFBSWtFLFFBQUo7O0FBRUEsWUFBR1QsZ0JBQWdCekQsYUFBaEIsQ0FBSCxFQUFrQztBQUNqQ2tFLHFCQUFXVCxnQkFBZ0J6RCxhQUFoQixFQUErQjhCLEdBQS9CLENBQW1DMkIsZUFBbkMsRUFBb0Q3QyxLQUFwRCxDQUFYO0FBQ0EsU0FGRCxNQUdJO0FBQ0hzRCxxQkFBVyxLQUFLcEMsR0FBTCxDQUFTOUIsYUFBVCxFQUF3QjNELFNBQXhCLEVBQW1Db0gsZUFBbkMsRUFBb0Q3QyxLQUFwRCxDQUFYO0FBQ0E7O0FBRUQsWUFBTWlFLGVBQWUsS0FBS3BELE9BQUwsQ0FBYXpCLGFBQWIsQ0FBckIsQ0FwQm9DLENBc0JwQzs7QUFDQSxZQUFHLENBQUM2RSxhQUFhMUcsWUFBakIsRUFBOEI7QUFDN0IsaUJBQU8sa0JBQVMrRixRQUFULENBQVA7QUFDQTs7QUFFRCxlQUFPQSxRQUFQO0FBQ0E7O0FBRUQsVUFBRyxzQkFBT1YsWUFBUCxLQUF1QixRQUF2QixJQUFtQyxFQUFFQSxvQ0FBRixDQUF0QyxFQUFxRTtBQUNwRSxZQUFNc0IsSUFBSSxFQUFWO0FBQ0EsMkJBQVl0QixZQUFaLEVBQTBCNUUsT0FBMUIsQ0FBa0MsYUFBSztBQUN0Q2tHLFlBQUVoRyxDQUFGLElBQU8sUUFBS2tGLFFBQUwsQ0FBY1IsYUFBYTFFLENBQWIsQ0FBZCxFQUErQm9CLElBQS9CLEVBQXFDdUQsZUFBckMsRUFBc0Q3SCxVQUF0RCxFQUFrRVMsU0FBbEUsRUFBNkV1RSxLQUE3RSxDQUFQO0FBQ0EsU0FGRDtBQUdBLGVBQU9rRSxDQUFQO0FBQ0E7O0FBRUQsYUFBT3RCLFlBQVA7QUFDQTs7O2dDQUVXRixJLEVBQU0xSCxVLEVBQVltSixlLEVBQWdCO0FBQUE7O0FBQzdDLFVBQUdBLG1CQUFtQixPQUFPekIsSUFBUCxJQUFlLFVBQXJDLEVBQWdEO0FBQy9DQSxlQUFPQSxNQUFQO0FBQ0E7O0FBQ0QsVUFBR0EsNEJBQUgsRUFBdUI7QUFDdEIsZUFBT0EsSUFBUDtBQUNBOztBQUNELFVBQUcsS0FBSzBCLG9CQUFMLENBQTBCMUIsSUFBMUIsQ0FBSCxFQUFtQztBQUNsQyxlQUFPLEtBQUsyQixjQUFMLENBQXFCM0IsS0FBSzRCLFFBQUwsRUFBckIsRUFBc0M1QixJQUF0QyxDQUFQO0FBQ0E7O0FBQ0QsY0FBTzFILFVBQVA7QUFDQyxhQUFLLFdBQUw7QUFDQyxjQUFHLHNCQUFPMEgsSUFBUCxLQUFlLFFBQWYsSUFBMkJBLFNBQVMsSUFBdkMsRUFBNEM7QUFDM0MsZ0JBQU13QixJQUFJLEVBQVY7QUFDQSwrQkFBWXhCLElBQVosRUFBa0IxRSxPQUFsQixDQUEwQixlQUFLO0FBQzlCLGtCQUFNd0MsSUFBSWtDLEtBQUs1RSxHQUFMLENBQVY7QUFDQW9HLGdCQUFFcEcsR0FBRixJQUFTLHNCQUFPMEMsQ0FBUCxLQUFZLFFBQVosSUFBd0JBLE1BQU0sSUFBOUIsSUFBc0MsRUFBRUEseUJBQUYsQ0FBdEMsR0FBNEQsUUFBS0MsV0FBTCxDQUFpQkQsQ0FBakIsRUFBb0J4RixVQUFwQixDQUE1RCxHQUE4RndGLENBQXZHO0FBQ0EsYUFIRDtBQUlBLG1CQUFPMEQsQ0FBUDtBQUNBOztBQUNELGNBQUcsT0FBT3hCLElBQVAsSUFBZSxVQUFsQixFQUE2QjtBQUM1QixtQkFBTyxJQUFJLEtBQUtySCxzQkFBVCxDQUFnQ3FILElBQWhDLENBQVA7QUFDQTs7QUFDRCxpQkFBTyxLQUFLNkIsU0FBTCxDQUFlN0IsSUFBZixDQUFQO0FBQ0Q7O0FBQ0EsYUFBSyxPQUFMO0FBQ0MsaUJBQU8sS0FBSzNFLEtBQUwsQ0FBVzJFLElBQVgsQ0FBUDtBQUNEO0FBakJEOztBQW1CQSxhQUFPQSxJQUFQO0FBQ0E7Ozt5Q0FFb0JBLEksRUFBSztBQUN6QixhQUFPLEtBQUtsSSxrQkFBTCxLQUE0QmlCLFNBQTVCLElBQXlDaUgsS0FBSzhCLFNBQUwsWUFBMEIsS0FBS2hLLGtCQUEvRTtBQUNBOzs7cUNBRWdCK0csSSxFQUFNK0IsUSxFQUFTO0FBQy9CLFdBQUt4SCxnQkFBTCxDQUFzQnlGLElBQXRCLElBQThCK0IsUUFBOUI7QUFDQTs7O2dDQUVXbEUsYSxFQUFjO0FBQ3pCLFVBQU1xRixXQUFXLEtBQUtqRixTQUFMLENBQWUsRUFBZixFQUFtQixLQUFLOUUsWUFBeEIsQ0FBakI7QUFDQStKLGVBQVNyRixhQUFULEdBQXlCQSxhQUF6QixDQUZ5QixDQUVlOztBQUN4QyxXQUFLSSxTQUFMLENBQWVpRixRQUFmLEVBQXlCLEtBQUtoSyxLQUFMLENBQVcyRSxhQUFYLEtBQTZCLEVBQXREO0FBQ0EsYUFBT3FGLFFBQVA7QUFDQTs7OzRCQUVPckYsYSxFQUFjO0FBQUE7O0FBQ3JCLFVBQU1FLE9BQU8sS0FBS0UsU0FBTCxDQUFlLEVBQWYsRUFBbUIsS0FBSzlFLFlBQXhCLENBQWI7QUFDQTRFLFdBQUtGLGFBQUwsR0FBcUJBLGFBQXJCLENBRnFCLENBRWU7O0FBQ3BDLFVBQUcsQ0FBQ0EsYUFBSixFQUFrQjtBQUNqQixlQUFPRSxJQUFQO0FBQ0E7O0FBRUQsVUFBTW1GLFdBQVcsS0FBS3RDLFdBQUwsQ0FBaUIvQyxhQUFqQixDQUFqQjtBQUVBLFVBQUlZLFFBQVEsRUFBWjtBQUVBLFdBQUtXLGlCQUFMLENBQXVCdkIsYUFBdkIsRUFBc0NZLEtBQXRDO0FBRUEsVUFBTXZGLFFBQVEsRUFBZDtBQUVBLFVBQUlpSyxTQUFKOztBQUVBLFVBQUdELFNBQVM5SCxpQkFBWixFQUE4QjtBQUM3QitILG9CQUFZLGlCQUFTMUUsTUFBTWdFLEtBQU4sQ0FBWSxDQUFaLEVBQWUsQ0FBQyxDQUFoQixDQUFULENBQVo7QUFDQSxPQUZELE1BR0k7QUFDSFUsb0JBQVksaUJBQVMxRSxNQUFNZ0UsS0FBTixDQUFZLENBQVosRUFBZSxDQUFmLENBQVQsQ0FBWjtBQUNBOztBQUdELFVBQUdTLFNBQVM3SCxnQkFBWixFQUE2QjtBQUM1Qm9ELGNBQU0yRSxPQUFOLEdBQWdCM0csT0FBaEIsQ0FBd0IsVUFBQzRHLENBQUQsRUFBSztBQUM1QixjQUFHLE9BQU9BLENBQVAsSUFBWSxVQUFmLEVBQTBCO0FBQ3pCLGdCQUFJQyxjQUFjRCxDQUFsQjtBQUNBLGdCQUFJdkMsU0FBSjs7QUFDQSxtQkFBTXdDLFdBQU4sRUFBa0I7QUFDakJ4QywwQkFBWXdDLFlBQVksUUFBS2xKLFlBQWpCLENBQVo7O0FBQ0Esa0JBQUcwRyxTQUFILEVBQWE7QUFDWnFDLDBCQUFVSSxHQUFWLENBQWN6QyxTQUFkO0FBQ0E7O0FBQ0R3Qyw0QkFBYyw2QkFBdUJBLFdBQXZCLENBQWQ7QUFDQTtBQUNEO0FBQ0QsU0FaRDtBQWFBOztBQUNESCxrQkFBWSxtQkFBV0EsU0FBWCxFQUFzQkMsT0FBdEIsRUFBWjtBQUVBRCxnQkFBVTFHLE9BQVYsQ0FBa0IsVUFBQ3FFLFNBQUQsRUFBYTtBQUM5QixZQUFNN0MsWUFBWSxRQUFLL0UsS0FBTCxDQUFXNEgsU0FBWCxDQUFsQjs7QUFFQSxZQUFHN0MsVUFBVTNDLGFBQWIsRUFBMkI7QUFDMUIsa0JBQUtrSSxVQUFMLENBQWdCekYsSUFBaEIsRUFBc0JFLFVBQVUzQyxhQUFoQztBQUNBOztBQUVELGdCQUFLMkMsU0FBTCxDQUFlRixJQUFmLEVBQXFCRSxTQUFyQjtBQUNBLE9BUkQ7QUFVQSxhQUFPRixJQUFQO0FBQ0E7OzsrQkFFVUEsSSxFQUFNMEYsVyxFQUFZO0FBQUE7O0FBQzVCLFVBQU1DLGVBQWUsS0FBS0MsMkJBQUwsQ0FBaUNGLFdBQWpDLEVBQThDTCxPQUE5QyxFQUFyQjtBQUNBTSxtQkFBYWpILE9BQWIsQ0FBcUI7QUFBQSxlQUNwQm1ILFdBQVduSCxPQUFYLENBQW9CLGlCQUFTO0FBQzVCLGNBQU13QixZQUFZLFFBQUsvRSxLQUFMLENBQVcySyxLQUFYLENBQWxCOztBQUNBLGtCQUFLNUYsU0FBTCxDQUFlRixJQUFmLEVBQXFCRSxTQUFyQixFQUFnQyxLQUFoQztBQUNBLFNBSEQsQ0FEb0I7QUFBQSxPQUFyQjtBQU1BOzs7Z0RBQzJCMkYsVSxFQUE4QjtBQUFBOztBQUFBLFVBQWxCRixZQUFrQix1RUFBSCxFQUFHOztBQUN6RCxVQUFHLEVBQUVFLHNCQUFzQkUsS0FBeEIsQ0FBSCxFQUFrQztBQUNqQ0YscUJBQWEsQ0FBQ0EsVUFBRCxDQUFiO0FBQ0E7O0FBQ0RGLG1CQUFhN0UsSUFBYixDQUFrQitFLFVBQWxCO0FBQ0FBLGlCQUFXbkgsT0FBWCxDQUFtQixpQkFBUztBQUMzQixZQUFNc0IsT0FBTyxRQUFLN0UsS0FBTCxDQUFXMkssS0FBWCxDQUFiOztBQUNBLFlBQUc5RixRQUFRQSxLQUFLZ0csTUFBaEIsRUFBdUI7QUFDdEIsa0JBQUtKLDJCQUFMLENBQWlDNUYsS0FBS2dHLE1BQXRDLEVBQThDTCxZQUE5QztBQUNBO0FBQ0QsT0FMRDtBQU1BLGFBQU9BLFlBQVA7QUFDQTs7O2tDQUVhMUQsSSxFQUFNZ0IsTSxFQUFPO0FBQzFCLFVBQUcsQ0FBQyxLQUFLOUgsS0FBTCxDQUFXOEcsSUFBWCxDQUFKLEVBQXFCO0FBQ3BCLGFBQUs5RyxLQUFMLENBQVc4RyxJQUFYLElBQW1CLEVBQW5CO0FBQ0E7O0FBQ0QsV0FBSzlHLEtBQUwsQ0FBVzhHLElBQVgsRUFBaUJ2RSxRQUFqQixHQUE0QnVGLE1BQTVCO0FBQ0E7Ozs4QkFFU2dELFUsRUFBWWpHLEksRUFBeUI7QUFBQSxVQUFuQmtHLFdBQW1CLHVFQUFMLElBQUs7QUFBQSxVQUU3QzFJLE1BRjZDLEdBb0IxQ3dDLElBcEIwQyxDQUU3Q3hDLE1BRjZDO0FBQUEsVUFHN0NILGlCQUg2QyxHQW9CMUMyQyxJQXBCMEMsQ0FHN0MzQyxpQkFINkM7QUFBQSxVQUk3Q0MsZ0JBSjZDLEdBb0IxQzBDLElBcEIwQyxDQUk3QzFDLGdCQUo2QztBQUFBLFVBSzdDQyxhQUw2QyxHQW9CMUN5QyxJQXBCMEMsQ0FLN0N6QyxhQUw2QztBQUFBLFVBTTdDRSxVQU42QyxHQW9CMUN1QyxJQXBCMEMsQ0FNN0N2QyxVQU42QztBQUFBLFVBTzdDRSxNQVA2QyxHQW9CMUNxQyxJQXBCMEMsQ0FPN0NyQyxNQVA2QztBQUFBLFVBUTdDQyxLQVI2QyxHQW9CMUNvQyxJQXBCMEMsQ0FRN0NwQyxLQVI2QztBQUFBLFVBUzdDQyxTQVQ2QyxHQW9CMUNtQyxJQXBCMEMsQ0FTN0NuQyxTQVQ2QztBQUFBLFVBVTdDQyxhQVY2QyxHQW9CMUNrQyxJQXBCMEMsQ0FVN0NsQyxhQVY2QztBQUFBLFVBVzdDQyxZQVg2QyxHQW9CMUNpQyxJQXBCMEMsQ0FXN0NqQyxZQVg2QztBQUFBLFVBWTdDTCxRQVo2QyxHQW9CMUNzQyxJQXBCMEMsQ0FZN0N0QyxRQVo2QztBQUFBLFVBYTdDTSxTQWI2QyxHQW9CMUNnQyxJQXBCMEMsQ0FhN0NoQyxTQWI2QztBQUFBLFVBYzdDQyxZQWQ2QyxHQW9CMUMrQixJQXBCMEMsQ0FjN0MvQixZQWQ2QztBQUFBLFVBZTdDQyxlQWY2QyxHQW9CMUM4QixJQXBCMEMsQ0FlN0M5QixlQWY2QztBQUFBLFVBZ0I3Q2lJLHFCQWhCNkMsR0FvQjFDbkcsSUFwQjBDLENBZ0I3Q21HLHFCQWhCNkM7QUFBQSxVQWlCN0NoSSxTQWpCNkMsR0FvQjFDNkIsSUFwQjBDLENBaUI3QzdCLFNBakI2QztBQUFBLFVBa0I3Q0MsUUFsQjZDLEdBb0IxQzRCLElBcEIwQyxDQWtCN0M1QixRQWxCNkM7QUFBQSxVQW1CN0MzQyxJQW5CNkMsR0FvQjFDdUUsSUFwQjBDLENBbUI3Q3ZFLElBbkI2Qzs7QUFxQjlDLFVBQUdpQyxhQUFhdkIsU0FBaEIsRUFBMEI7QUFDekI4SixtQkFBV3ZJLFFBQVgsR0FBc0JBLFFBQXRCO0FBQ0E7O0FBQ0QsVUFBR0YsV0FBV3JCLFNBQWQsRUFBd0I7QUFDdkI4SixtQkFBV3pJLE1BQVgsR0FBb0JBLE1BQXBCO0FBQ0E7O0FBQ0QsVUFBR0gsc0JBQXNCbEIsU0FBekIsRUFBbUM7QUFDbEM4SixtQkFBVzVJLGlCQUFYLEdBQStCQSxpQkFBL0I7QUFDQTs7QUFDRCxVQUFHQyxxQkFBcUJuQixTQUF4QixFQUFrQztBQUNqQzhKLG1CQUFXM0ksZ0JBQVgsR0FBOEJBLGdCQUE5QjtBQUNBOztBQUNELFVBQUdhLGNBQWNoQyxTQUFqQixFQUEyQjtBQUMxQjhKLG1CQUFXOUgsU0FBWCxHQUF1QkEsU0FBdkI7QUFDQTs7QUFDRCxVQUFHQyxhQUFhakMsU0FBaEIsRUFBMEI7QUFDekI4SixtQkFBVzdILFFBQVgsR0FBc0JBLFFBQXRCO0FBQ0E7O0FBQ0QsVUFBRzNDLFNBQVNVLFNBQVosRUFBc0I7QUFDckI4SixtQkFBV3hLLElBQVgsR0FBa0JBLElBQWxCO0FBQ0E7O0FBQ0QsVUFBR2dDLGVBQWV0QixTQUFsQixFQUE0QjtBQUMzQjhKLG1CQUFXeEksVUFBWCxHQUF3QkEsVUFBeEI7QUFDQTs7QUFDRCxVQUFHUSxpQkFBaUI5QixTQUFwQixFQUE4QjtBQUM3QjhKLG1CQUFXaEksWUFBWCxHQUEwQkEsWUFBMUI7QUFDQTs7QUFDRCxVQUFHQyxvQkFBb0IvQixTQUF2QixFQUFpQztBQUNoQzhKLG1CQUFXL0gsZUFBWCxHQUE2QkEsZUFBN0I7QUFDQTs7QUFDRCxVQUFHaUksMEJBQTBCaEssU0FBN0IsRUFBdUM7QUFDdEM4SixtQkFBV0UscUJBQVgsR0FBbUNBLHFCQUFuQztBQUNBOztBQUVELFVBQUd2SSxVQUFVekIsU0FBYixFQUF1QjtBQUN0QjhKLG1CQUFXckksS0FBWCxHQUFtQixDQUFFcUksV0FBV3JJLEtBQVgsSUFBb0IsRUFBdEIsRUFBMkJtRCxNQUEzQixDQUFrQ25ELEtBQWxDLENBQW5CO0FBQ0E7O0FBQ0QsVUFBR0MsY0FBYzFCLFNBQWpCLEVBQTJCO0FBQzFCOEosbUJBQVdwSSxTQUFYLEdBQXVCLENBQUVvSSxXQUFXcEksU0FBWCxJQUF3QixFQUExQixFQUErQmtELE1BQS9CLENBQXNDbEQsU0FBdEMsQ0FBdkI7QUFDQTs7QUFFRCxVQUFHcUksZUFBZTNJLGtCQUFrQnBCLFNBQXBDLEVBQThDO0FBQzdDOEosbUJBQVcxSSxhQUFYLEdBQTJCQSxjQUFjbUgsS0FBZCxDQUFvQixDQUFwQixDQUEzQjtBQUNBOztBQUVELFVBQUcvRyxXQUFXeEIsU0FBZCxFQUF3QjtBQUN2QjhKLG1CQUFXdEksTUFBWCxHQUFvQkEsTUFBcEI7QUFDQTs7QUFDRCxVQUFHRyxrQkFBa0IzQixTQUFyQixFQUErQjtBQUM5QixZQUFHLENBQUM4SixXQUFXbkksYUFBZixFQUE2QjtBQUM1Qm1JLHFCQUFXbkksYUFBWCxHQUEyQixFQUEzQjtBQUNBOztBQUNELDZCQUFjbUksV0FBV25JLGFBQXpCLEVBQXdDQSxhQUF4QztBQUNBOztBQUNELFVBQUdDLGlCQUFpQjVCLFNBQXBCLEVBQThCO0FBQzdCLFlBQUcsQ0FBQzhKLFdBQVdsSSxZQUFmLEVBQTRCO0FBQzNCa0kscUJBQVdsSSxZQUFYLEdBQTBCLEVBQTFCO0FBQ0E7O0FBQ0RrSSxtQkFBV2xJLFlBQVgsR0FBMEIsbUJBQVksNERBQVlrSSxXQUFXbEksWUFBdkIsb0NBQXdDQSxZQUF4QyxHQUFaLENBQTFCO0FBQ0E7O0FBQ0RrSSxpQkFBV2pJLFNBQVgsR0FBdUJBLFNBQXZCO0FBQ0EsYUFBT2lJLFVBQVA7QUFDQTs7OytCQUVVRyxXLEVBQWFqTCxLLEVBQU07QUFBQTs7QUFDN0IseUJBQVlBLEtBQVosRUFBbUJ1RCxPQUFuQixDQUEyQixVQUFDRSxDQUFELEVBQUs7QUFDL0IsWUFBRyxDQUFDd0gsWUFBWXhILENBQVosQ0FBSixFQUFtQjtBQUNsQndILHNCQUFZeEgsQ0FBWixJQUFpQixFQUFqQjtBQUNBOztBQUNEd0gsb0JBQVl4SCxDQUFaLElBQWlCLFFBQUtzQixTQUFMLENBQWVrRyxZQUFZeEgsQ0FBWixDQUFmLEVBQStCekQsTUFBTXlELENBQU4sQ0FBL0IsQ0FBakI7QUFDQSxPQUxEO0FBTUEsYUFBT3dILFdBQVA7QUFDQTs7OzZCQUVReEksSyxFQUFPb0csUSxFQUFVaEUsSSxFQUFNdUQsZSxFQUFnQjtBQUFBOztBQUMvQyxVQUFJOEMsUUFBSjtBQUVBLFVBQUlDLFVBQVUxSSxNQUFNdUYsR0FBTixDQUFVLFVBQUNtQyxDQUFEO0FBQUEsZUFBTSxZQUFLO0FBRWxDLGNBQUcsT0FBT0EsQ0FBUCxJQUFZLFVBQWYsRUFBMEI7QUFDekJBLGdCQUFJLENBQUNBLENBQUQsQ0FBSjtBQUNBOztBQUppQyxtQkFLaUNBLENBTGpDO0FBQUE7QUFBQSxjQUsxQjFFLE1BTDBCO0FBQUE7QUFBQSxjQUtsQmpELE1BTGtCLHFCQUtULEVBTFM7QUFBQTtBQUFBLGNBS0xNLFlBTEssc0JBS1UrQixLQUFLL0IsWUFMZjs7QUFPbEMsY0FBTXNJLFdBQVcsU0FBWEEsUUFBVyxDQUFDM0MsY0FBRCxFQUFrQjtBQUNsQ0EsNkJBQWlCLCtDQUFpQ2pHLE1BQWpDLEVBQXlDaUcsY0FBekMsQ0FBakI7QUFDQSxnQkFBSTRDLFVBQUo7O0FBQ0EsZ0JBQUcsT0FBTzVGLE1BQVAsSUFBaUIsVUFBcEIsRUFBK0I7QUFDOUI0RiwyQkFBYTVGLHNCQUFPb0QsUUFBUCwwQ0FBb0JKLGNBQXBCLEdBQWI7QUFDQSxhQUZELE1BR0k7QUFDSDRDLDJCQUFheEMsU0FBU3BELE1BQVQsbURBQW9CZ0QsY0FBcEIsRUFBYjtBQUNBOztBQUNELGdCQUFHLENBQUMzRixZQUFKLEVBQWlCO0FBQ2hCdUksMkJBQWEsa0JBQVNBLFVBQVQsQ0FBYjtBQUNBOztBQUNELG1CQUFPQSxVQUFQO0FBQ0EsV0FiRDs7QUFlQSxjQUFNNUMsaUJBQWlCakcsT0FBT3dGLEdBQVAsQ0FBVyxpQkFBUztBQUMxQyxtQkFBTyxRQUFLVyxRQUFMLENBQWM3QyxLQUFkLEVBQXFCakIsSUFBckIsRUFBMkJ1RCxlQUEzQixFQUE0QyxRQUFLNUgsY0FBakQsQ0FBUDtBQUNBLFdBRnNCLENBQXZCOztBQUdBLGNBQUcsbUNBQXFCZ0MsTUFBckIsRUFBNkJpRyxjQUE3QixFQUE2QyxRQUFLMUcsZ0JBQWxELENBQUgsRUFBdUU7QUFDdEVtSix1QkFBVyxJQUFYO0FBQ0EsbUJBQU87QUFBQSxxQkFBTSw0Q0FBOEIxSSxNQUE5QixFQUFzQ2lHLGNBQXRDLEVBQXNELFFBQUsxRyxnQkFBM0QsRUFBNkUsUUFBS0MsY0FBbEYsRUFBa0drSCxJQUFsRyxDQUF1RywwQkFBZ0I7QUFDbkksdUJBQU9rQyxTQUFTM0MsY0FBVCxDQUFQO0FBQ0EsZUFGWSxDQUFOO0FBQUEsYUFBUDtBQUdBLFdBTEQsTUFNSTtBQUNILG1CQUFPO0FBQUEscUJBQU0yQyxTQUFTM0MsY0FBVCxDQUFOO0FBQUEsYUFBUDtBQUNBO0FBRUQsU0FuQ3VCO0FBQUEsT0FBVixDQUFkO0FBcUNBLFVBQU11Qyx3QkFBd0JuRyxLQUFLbUcscUJBQW5DO0FBQ0EsVUFBTWpJLGtCQUFrQjhCLEtBQUs5QixlQUFMLElBQXdCaUkscUJBQWhEOztBQUVBLFVBQU1NLFlBQVksU0FBWkEsU0FBWSxDQUFDSCxPQUFELEVBQVc7QUFFNUIsWUFBSUksYUFBSjs7QUFDQSxZQUFHTCxRQUFILEVBQVk7QUFDWCxjQUFHbkksZUFBSCxFQUFtQjtBQUNsQndJLDRCQUFnQix1QkFBU0osT0FBVCxFQUFrQixVQUFDSyxNQUFELEVBQVU7QUFDM0MscUJBQU9BLFFBQVA7QUFDQSxhQUZlLEVBRWIsUUFBS3pKLGdCQUZRLEVBRVUsUUFBS0MsY0FGZixDQUFoQjtBQUdBLFdBSkQsTUFLSTtBQUNIdUosNEJBQWdCLFFBQUt2SixjQUFMLENBQW9CeUosR0FBcEIsQ0FBeUJOLFFBQVFuRCxHQUFSLENBQVksVUFBQ3dELE1BQUQsRUFBVTtBQUM5RCxxQkFBT0EsUUFBUDtBQUNBLGFBRndDLENBQXpCLENBQWhCO0FBR0E7QUFDRCxTQVhELE1BWUk7QUFDSEQsMEJBQWdCSixRQUFRbkQsR0FBUixDQUFZLFVBQUN3RCxNQUFELEVBQVU7QUFDckMsZ0JBQU1FLGVBQWVGLFFBQXJCOztBQUNBLGdCQUFHRSx3QkFBd0IsUUFBSzNKLGdCQUFoQyxFQUFpRDtBQUNoRG1KLHlCQUFXLElBQVg7QUFDQTs7QUFDRCxtQkFBT1EsWUFBUDtBQUNBLFdBTmUsQ0FBaEI7O0FBT0EsY0FBR1IsUUFBSCxFQUFZO0FBQ1hLLDRCQUFnQixRQUFLdkosY0FBTCxDQUFvQnlKLEdBQXBCLENBQXdCRixhQUF4QixDQUFoQjtBQUNBO0FBQ0Q7O0FBQ0QsZUFBT0EsYUFBUDtBQUNBLE9BNUJEOztBQThCQSxVQUFHUCxxQkFBSCxFQUF5QjtBQUN4Qkcsa0JBQVUsdUJBQVNBLE9BQVQsRUFBa0IsVUFBQ0ssTUFBRCxFQUFVO0FBQ3JDQSxtQkFBU0EsVUFBVDtBQUNBLGlCQUFPQSxNQUFQO0FBQ0EsU0FIUyxFQUdQLEtBQUt6SixnQkFIRSxFQUdnQixLQUFLQyxjQUhyQixDQUFWO0FBSUEsZUFBT21KLFFBQVFqQyxJQUFSLENBQWM7QUFBQSxpQkFBV29DLFVBQVdILFFBQVFuRCxHQUFSLENBQVk7QUFBQSxtQkFBVTtBQUFBLHFCQUFNd0QsTUFBTjtBQUFBLGFBQVY7QUFBQSxXQUFaLENBQVgsQ0FBWDtBQUFBLFNBQWQsQ0FBUDtBQUNBLE9BTkQsTUFPSTtBQUNITCxrQkFBVUEsUUFBUW5ELEdBQVIsQ0FBWSxVQUFDd0QsTUFBRDtBQUFBLGlCQUFVQSxRQUFWO0FBQUEsU0FBWixDQUFWO0FBQ0EsZUFBT0YsVUFBVUgsT0FBVixDQUFQO0FBQ0E7QUFFRDs7OzhCQUVTckQsTSxFQUFRNkQsTyxFQUFTckksSyxFQUFNO0FBQ2hDLG1DQUFzQndFLE1BQXRCLEVBQThCNkQsT0FBOUIsRUFBdUM7QUFDdENySSxlQUFPQSxLQUQrQjtBQUV0Q3NJLG9CQUFZLEtBRjBCO0FBR3RDQyxzQkFBYztBQUh3QixPQUF2QztBQUtBOzs7c0NBRWlCQyxHLEVBQWlDO0FBQUEsVUFBNUJ2RyxLQUE0Qix1RUFBcEIsRUFBb0I7QUFBQSxVQUFoQjhCLFFBQWdCLHVFQUFMLElBQUs7O0FBQ2xELFVBQUcsT0FBT3lFLEdBQVAsSUFBYyxRQUFkLElBQTBCLHNCQUFPQSxHQUFQLEtBQWMsUUFBM0MsRUFBb0Q7QUFDbkQsWUFBR3ZHLE1BQU0xRCxPQUFOLENBQWNpSyxHQUFkLE1BQXFCLENBQUMsQ0FBekIsRUFBMkI7QUFDMUIsZ0JBQU0sSUFBSXBJLEtBQUosQ0FBVSwwQ0FBd0Msd0JBQWU2QixNQUFNSyxNQUFOLENBQWFrRyxHQUFiLENBQWYsRUFBaUMsSUFBakMsRUFBc0MsQ0FBdEMsQ0FBbEQsQ0FBTjtBQUNBOztBQUNEdkcsY0FBTUksSUFBTixDQUFXbUcsR0FBWDtBQUNBLFlBQU1qSCxPQUFPLEtBQUs3RSxLQUFMLENBQVc4TCxHQUFYLENBQWI7QUFDQSxZQUFJQyxXQUFXLEtBQWY7O0FBQ0EsWUFBR2xILElBQUgsRUFBUTtBQUNQLGNBQUdBLEtBQUt2QyxVQUFSLEVBQW1CO0FBQ2xCeUosdUJBQVdsSCxLQUFLdkMsVUFBaEI7QUFDQSxXQUZELE1BR0ssSUFBR3VDLEtBQUt0QyxRQUFSLEVBQWlCO0FBQ3JCd0osdUJBQVdsSCxLQUFLdEMsUUFBaEI7QUFDQTtBQUNEOztBQUNELFlBQUcsQ0FBQ3dKLFFBQUosRUFBYTtBQUNaLGNBQUcsQ0FBQzFFLFFBQUosRUFBYTtBQUNaLG1CQUFPLEtBQVA7QUFDQTs7QUFDRCxnQkFBTSxJQUFJM0QsS0FBSixDQUFVLDJCQUF5QixzQkFBT29JLEdBQVAsS0FBYyxRQUFkLEdBQXlCLFFBQXpCLEdBQW9DLE1BQUlBLEdBQUosR0FBUSxHQUFyRSxJQUEyRSw2QkFBM0UsR0FBeUcsd0JBQWV2RyxLQUFmLEVBQXNCLElBQXRCLEVBQTRCLENBQTVCLENBQW5ILENBQU47QUFDQTs7QUFDRCxlQUFPLEtBQUtXLGlCQUFMLENBQXVCNkYsUUFBdkIsRUFBaUN4RyxLQUFqQyxFQUF3QzhCLFFBQXhDLENBQVA7QUFDQTs7QUFDRDlCLFlBQU1JLElBQU4sQ0FBV21HLEdBQVg7QUFDQSxhQUFPQSxHQUFQO0FBQ0E7Ozs0QkFFTzFDLFEsRUFBUztBQUNoQixhQUFPLElBQUksS0FBS3pJLGNBQVQsQ0FBd0J5SSxRQUF4QixDQUFQO0FBQ0E7OztpQ0FDWUEsUSxFQUFTO0FBQ3JCLGFBQU8sMEJBQWlCQSxRQUFqQixDQUFQO0FBQ0E7OztpQ0FDWUEsUSxFQUFTO0FBQ3JCLGFBQU8sMEJBQWlCQSxRQUFqQixDQUFQO0FBQ0E7OzsrQkFDU3RDLEksRUFBSztBQUNkLGFBQU8sd0JBQWNBLElBQWQsQ0FBUDtBQUNBOzs7bUNBQ2NBLEksRUFBSzhDLGUsRUFBZTtBQUNsQyxhQUFPLDZCQUFtQjlDLElBQW5CLEVBQXlCOEMsZUFBekIsQ0FBUDtBQUNBOzs7MEJBQ0t0RyxNLEVBQU07QUFDWCxhQUFPLG9CQUFVQSxNQUFWLENBQVA7QUFDQTs7OzRCQUNPMEksRyxFQUFJO0FBQ1gsYUFBTyxxQkFBWUEsR0FBWixDQUFQO0FBQ0E7OzsrQkFFVUEsRyxFQUFJO0FBQ2QsYUFBTyx3QkFBZUEsR0FBZixDQUFQO0FBQ0E7Ozs2QkFFUTVDLFEsRUFBUztBQUNqQixhQUFPLHNCQUFhQSxRQUFiLENBQVA7QUFDQSIsImZpbGUiOiJjb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWFwU2VyaWUgZnJvbSAnLi9tYXBTZXJpZSdcblxuaW1wb3J0IFZhciBmcm9tICcuL3ZhcidcbmltcG9ydCBGYWN0b3J5IGZyb20gJy4vZmFjdG9yeSdcbmltcG9ydCBWYWx1ZUZhY3RvcnkgZnJvbSAnLi92YWx1ZUZhY3RvcnknXG5pbXBvcnQgQ2xhc3NGYWN0b3J5IGZyb20gJy4vY2xhc3NGYWN0b3J5J1xuaW1wb3J0IFZhbHVlIGZyb20gJy4vdmFsdWUnXG5pbXBvcnQgSW50ZXJmYWNlIGZyb20gJy4vaW50ZXJmYWNlJ1xuaW1wb3J0IEludGVyZmFjZUNsYXNzIGZyb20gJy4vaW50ZXJmYWNlQ2xhc3MnXG5pbXBvcnQgUmVxdWlyZSBmcm9tICcuL3JlcXVpcmUnXG5cbmltcG9ydCBTaGFyZWRJbnN0YW5jZSBmcm9tICcuL3NoYXJlZEluc3RhbmNlJ1xuXG5pbXBvcnQgQ2xhc3NEZWYgZnJvbSAnLi9jbGFzc0RlZidcblxuaW1wb3J0IERlcGVuZGVuY3kgZnJvbSAnLi9kZXBlbmRlbmN5J1xuXG5pbXBvcnQgbWFrZUNvbnRhaW5lckFwaSBmcm9tICcuL21ha2VDb250YWluZXJBcGknXG5cbmltcG9ydCBTeW5jIGZyb20gJy4vc3luYydcbmltcG9ydCBzdHJ1Y3R1cmVkSGFzUHJvbWlzZSBmcm9tICcuL3N0cnVjdHVyZWRIYXNQcm9taXNlJ1xuaW1wb3J0IHN0cnVjdHVyZWRQcm9taXNlQWxsUmVjdXJzaXZlIGZyb20gJy4vc3RydWN0dXJlZFByb21pc2VBbGxSZWN1cnNpdmUnXG5pbXBvcnQgc3RydWN0dXJlZFJlc29sdmVQYXJhbXNJbnRlcmZhY2UgZnJvbSAnLi9zdHJ1Y3R1cmVkUmVzb2x2ZVBhcmFtc0ludGVyZmFjZSdcblxuaW1wb3J0IHN0cnVjdHVyZWRJbnRlcmZhY2VQcm90b3R5cGUgZnJvbSAnLi9zdHJ1Y3R1cmVkSW50ZXJmYWNlUHJvdG90eXBlJ1xuXG5pbXBvcnQgcHJvbWlzZUludGVyZmFjZSBmcm9tICcuL3Byb21pc2VJbnRlcmZhY2UnXG5cbmxldCBpbnRlcmZhY2VQcm90b3R5cGVEZWZhdWx0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWluZXJ7XG5cdFxuXHRzdGF0aWMgc2V0SW50ZXJmYWNlUHJvdG90eXBlRGVmYXVsdChpbnRlcmZhY2VQcm90b3R5cGUpe1xuXHRcdGludGVyZmFjZVByb3RvdHlwZURlZmF1bHQgPSBpbnRlcmZhY2VQcm90b3R5cGU7XG5cdH1cblx0c3RhdGljIGdldEludGVyZmFjZVByb3RvdHlwZURlZmF1bHQoaW50ZXJmYWNlUHJvdG90eXBlKXtcblx0XHRyZXR1cm4gaW50ZXJmYWNlUHJvdG90eXBlRGVmYXVsdDtcblx0fVxuXHRcblx0Y29uc3RydWN0b3Ioe1xuXHRcdHJ1bGVzID0ge30sXG5cdFx0XG5cdFx0cnVsZXNEZWZhdWx0ID0ge30sXG5cdFx0XG5cdFx0YXV0b2xvYWRGYWlsT25NaXNzaW5nRmlsZSA9ICdwYXRoJyxcblx0XHRkZXBlbmRlbmNpZXMgPSB7fSxcblx0XHRhdXRvbG9hZEV4dGVuc2lvbnMgPSBbJ2pzJ10sXG5cdFx0YXV0b2xvYWRQYXRoUmVzb2x2ZXIgPSAocGF0aCk9PnBhdGgsXG5cdFx0XG5cdFx0ZGVmYXVsdFZhciA9ICdpbnRlcmZhY2UnLFxuXHRcdGRlZmF1bHRSdWxlVmFyID0gbnVsbCxcblx0XHRkZWZhdWx0RGVjb3JhdG9yVmFyID0gbnVsbCxcblx0XHRkZWZhdWx0QXJnc1ZhciA9IG51bGwsXG5cdFx0XG5cdFx0ZGVmYXVsdEZhY3RvcnkgPSBWYWx1ZUZhY3RvcnksXG5cdFx0ZGVmYXVsdEZ1bmN0aW9uV3JhcHBlciA9IENsYXNzRmFjdG9yeSxcblx0XHRcblx0XHRnbG9iYWxLZXkgPSBmYWxzZSxcblx0XHRcblx0XHRwcm9taXNlRmFjdG9yeSA9IFByb21pc2UsXG5cdFx0cHJvbWlzZUludGVyZmFjZXMgPSBbIFByb21pc2UgXSxcblx0XHRcblx0XHRpbnRlcmZhY2VQcm90b3R5cGUgPSB1bmRlZmluZWQsXG5cdFx0aW50ZXJmYWNlVHlwZUNoZWNrID0gZmFsc2UsXG5cdFx0XG5cdH0gPSB7fSl7XG5cdFx0XG5cdFx0dGhpcy5zeW1DbGFzc05hbWUgPSBTeW1ib2woJ2NsYXNzTmFtZScpO1xuXHRcdHRoaXMuc3ltSW50ZXJmYWNlcyA9IFN5bWJvbCgndHlwZXMnKTtcblx0XHR0aGlzLnByb3ZpZGVyUmVnaXN0cnkgPSB7fTtcblx0XHR0aGlzLmluc3RhbmNlUmVnaXN0cnkgPSB7fTtcblx0XHRcblx0XHR0aGlzLnJlcXVpcmVzID0ge307XG5cdFx0dGhpcy5hdXRvbG9hZEV4dGVuc2lvbnMgPSBhdXRvbG9hZEV4dGVuc2lvbnM7XG5cdFx0dGhpcy5hdXRvbG9hZEZhaWxPbk1pc3NpbmdGaWxlID0gYXV0b2xvYWRGYWlsT25NaXNzaW5nRmlsZTtcblx0XHR0aGlzLmRlcGVuZGVuY2llcyA9IGRlcGVuZGVuY2llcztcblx0XHR0aGlzLnNldEF1dG9sb2FkUGF0aFJlc29sdmVyKGF1dG9sb2FkUGF0aFJlc29sdmVyKTtcblx0XHR0aGlzLmxvYWRFeHRlbnNpb25SZWdleCA9IG5ldyBSZWdFeHAoJ1xcLignK3RoaXMuYXV0b2xvYWRFeHRlbnNpb25zLmpvaW4oJ3wnKSsnKSQnKTtcblx0XHRcblx0XHR0aGlzLmRlZmF1bHRSdWxlVmFyID0gZGVmYXVsdFJ1bGVWYXIgfHwgZGVmYXVsdFZhcjtcblx0XHR0aGlzLmRlZmF1bHREZWNvcmF0b3JWYXIgPSBkZWZhdWx0RGVjb3JhdG9yVmFyIHx8IGRlZmF1bHRWYXI7XG5cdFx0dGhpcy5kZWZhdWx0QXJnc1ZhciA9IGRlZmF1bHRBcmdzVmFyIHx8IGRlZmF1bHRWYXI7XG5cdFx0XG5cdFx0dGhpcy5kZWZhdWx0RmFjdG9yeSA9IGRlZmF1bHRGYWN0b3J5O1xuXHRcdHRoaXMuZGVmYXVsdEZ1bmN0aW9uV3JhcHBlciA9IGRlZmF1bHRGdW5jdGlvbldyYXBwZXI7XG5cdFx0XG5cdFx0dGhpcy5hbGxvd2VkRGVmYXVsdFZhcnMgPSBbJ2ludGVyZmFjZScsJ3ZhbHVlJ107XG5cdFx0dGhpcy52YWxpZGF0ZURlZmF1bHRWYXIoZGVmYXVsdFZhciwgJ2RlZmF1bHRWYXInKTtcblx0XHR0aGlzLnZhbGlkYXRlRGVmYXVsdFZhcih0aGlzLmRlZmF1bHRSdWxlVmFyLCAnZGVmYXVsdFJ1bGVWYXInKTtcblx0XHR0aGlzLnZhbGlkYXRlRGVmYXVsdFZhcih0aGlzLmRlZmF1bHREZWNvcmF0b3JWYXIsICdkZWZhdWx0RGVjb3JhdG9yVmFyJyk7XG5cdFx0dGhpcy52YWxpZGF0ZURlZmF1bHRWYXIodGhpcy5kZWZhdWx0QXJnc1ZhciwgJ2RlZmF1bHRBcmdzVmFyJyk7XG5cdFx0XG5cdFx0aWYocHJvbWlzZUludGVyZmFjZXMuaW5kZXhPZihwcm9taXNlRmFjdG9yeSkgPT09IC0xKXtcblx0XHRcdHByb21pc2VJbnRlcmZhY2VzLnVuc2hpZnQocHJvbWlzZUZhY3RvcnkpO1xuXHRcdH1cblx0XHR0aGlzLlByb21pc2VJbnRlcmZhY2UgPSBwcm9taXNlSW50ZXJmYWNlKHByb21pc2VJbnRlcmZhY2VzKTtcblx0XHR0aGlzLlByb21pc2VGYWN0b3J5ID0gcHJvbWlzZUZhY3Rvcnk7XG5cdFx0XG5cdFx0dGhpcy5pbnRlcmZhY2VQcm90b3R5cGUgPSBpbnRlcmZhY2VQcm90b3R5cGUgfHwgaW50ZXJmYWNlUHJvdG90eXBlRGVmYXVsdDtcblx0XHRcblx0XHRpZihnbG9iYWxLZXkpe1xuXHRcdFx0dGhpcy5zZXRHbG9iYWxLZXkoZ2xvYmFsS2V5KTtcblx0XHR9XG5cdFx0XG5cdFx0dGhpcy5ydWxlc0RlZmF1bHQgPSB7XG5cdFx0XHRcblx0XHRcdGluaGVyaXRJbnN0YW5jZU9mOiB0cnVlLFxuXHRcdFx0aW5oZXJpdFByb3RvdHlwZTogZmFsc2UsXG5cdFx0XHRpbmhlcml0TWl4aW5zOiBbXSxcblx0XHRcdFxuXHRcdFx0c2hhcmVkOiBmYWxzZSxcblx0XHRcdGluc3RhbmNlT2Y6IHVuZGVmaW5lZCxcblx0XHRcdGNsYXNzRGVmOiB1bmRlZmluZWQsXG5cdFx0XHRwYXJhbXM6IHVuZGVmaW5lZCxcblx0XHRcdFxuXHRcdFx0Y2FsbHM6IFtdLFxuXHRcdFx0bGF6eUNhbGxzOiBbXSxcblx0XHRcdFxuXHRcdFx0c3Vic3RpdHV0aW9uczogW10sXG5cdFx0XHRzaGFyZWRJblRyZWU6IFtdLFxuXHRcdFx0XG5cdFx0XHRzaW5nbGV0b246IHVuZGVmaW5lZCxcblx0XHRcdFxuXHRcdFx0YXN5bmNSZXNvbHZlOiBmYWxzZSxcblx0XHRcdGFzeW5jQ2FsbHNTZXJpZTogZmFsc2UsXG5cdFx0XHRcblx0XHRcdGRlY29yYXRvcjogZmFsc2UsXG5cdFx0XHRcblx0XHRcdGF1dG9sb2FkOiBmYWxzZSxcblx0XHRcdHBhdGg6IHVuZGVmaW5lZCxcblx0XHRcdFxuXHRcdH07XG5cdFx0dGhpcy5zZXRSdWxlc0RlZmF1bHQocnVsZXNEZWZhdWx0KTtcblx0XHR0aGlzLnJ1bGVzID0ge307XG5cdFx0XG5cdFx0dGhpcy5sb2FkRGVwZW5kZW5jaWVzKCk7XG5cdFx0dGhpcy5hZGRSdWxlcyhydWxlcyk7XG5cdFx0XG5cdH1cblx0XG5cdGNvbmZpZyhrZXksIHZhbHVlKXtcblx0XHRpZih0eXBlb2Yga2V5ID09PSAnb2JqZWN0Jyl7XG5cdFx0XHRPYmplY3Qua2V5cyhrZXkpLmZvckVhY2goaz0+dGhpcy5jb25maWcoaywga2V5W2tdKSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHN3aXRjaChrZXkpe1xuXHRcdFx0Y2FzZSAnYXV0b2xvYWRGYWlsT25NaXNzaW5nRmlsZSAnOlxuXHRcdFx0Y2FzZSAnYXV0b2xvYWRFeHRlbnNpb25zJzpcblx0XHRcdGNhc2UgJ2RlZmF1bHRWYXInOlxuXHRcdFx0Y2FzZSAnZGVmYXVsdFJ1bGVWYXInOlxuXHRcdFx0Y2FzZSAnZGVmYXVsdERlY29yYXRvclZhcic6XG5cdFx0XHRjYXNlICdkZWZhdWx0QXJnc1Zhcic6XG5cdFx0XHRjYXNlICdpbnRlcmZhY2VQcm90b3R5cGUnOlxuXHRcdFx0Y2FzZSAnaW50ZXJmYWNlVHlwZUNoZWNrJzpcblx0XHRcdFx0dGhpc1trZXldID0gdmFsdWU7XG5cdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2dsb2JhbGtleSc6XG5cdFx0XHRcdHRoaXMuc2V0R2xvYmFsS2V5KHZhbHVlKTtcblx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnYXV0b2xvYWRQYXRoUmVzb2x2ZXInOlxuXHRcdFx0XHR0aGlzLnNldEF1dG9sb2FkUGF0aFJlc29sdmVyKHZhbHVlKTtcblx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAncnVsZXNEZWZhdWx0Jzpcblx0XHRcdFx0dGhpcy5zZXRSdWxlc0RlZmF1bHQodmFsdWUpO1xuXHRcdFx0YnJlYWs7XG5cdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBjb25maWcga2V5ICcra2V5KTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXHRcblx0c2V0UnVsZXNEZWZhdWx0KHJ1bGVzRGVmYXVsdCl7XG5cdFx0dGhpcy5ydWxlc0RlZmF1bHQgPSB7XG5cdFx0XHQuLi50aGlzLnJ1bGVzRGVmYXVsdCxcblx0XHRcdC4uLnJ1bGVzRGVmYXVsdCxcblx0XHR9O1xuXHR9XG5cdFxuXHRzZXRBdXRvbG9hZFBhdGhSZXNvbHZlcihhdXRvbG9hZFBhdGhSZXNvbHZlcil7XG5cdFx0XG5cdFx0aWYodHlwZW9mIGF1dG9sb2FkUGF0aFJlc29sdmVyID09ICdvYmplY3QnKXtcblx0XHRcdFxuXHRcdFx0Y29uc3QgYWxpYXNNYXAgPSBhdXRvbG9hZFBhdGhSZXNvbHZlcjtcblx0XHRcdGF1dG9sb2FkUGF0aFJlc29sdmVyID0gKHBhdGgpPT57XG5cdFx0XHRcdE9iamVjdC5rZXlzKGFsaWFzTWFwKS5mb3JFYWNoKGFsaWFzPT57XG5cdFx0XHRcdFx0Y29uc3QgcmVhbFBhdGggPSBhbGlhc01hcFthbGlhc107XG5cdFx0XHRcdFx0aWYocGF0aCA9PSBhbGlhcyl7XG5cdFx0XHRcdFx0XHRwYXRoID0gcmVhbFBhdGg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2UgaWYocGF0aC5zdWJzdHIoMCxhbGlhcy5sZW5ndGgrMSk9PWFsaWFzKycvJyl7XG5cdFx0XHRcdFx0XHRwYXRoID0gcmVhbFBhdGgrcGF0aC5zdWJzdHIoYWxpYXMubGVuZ3RoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm4gcGF0aDtcblx0XHRcdH07XG5cdFx0fVxuXHRcdFxuXHRcdHRoaXMuYXV0b2xvYWRQYXRoUmVzb2x2ZXIgPSBhdXRvbG9hZFBhdGhSZXNvbHZlcjtcblx0fVxuXHRcblx0c2V0R2xvYmFsS2V5KGdsb2JhbEtleSl7XG5cdFx0aWYoZ2xvYmFsS2V5PT09dHJ1ZSl7XG5cdFx0XHRnbG9iYWxLZXkgPSAnZGknO1xuXHRcdH1cblx0XHRnbG9iYWxbZ2xvYmFsS2V5XSA9IG1ha2VDb250YWluZXJBcGkodGhpcyk7XG5cdH1cblx0XG5cdGxvYWRQYXRocyhkaXJzKXtcblx0XHRPYmplY3Qua2V5cyhkaXJzKS5mb3JFYWNoKGRpcktleT0+e1xuXHRcdFx0Y29uc3QgY29udGV4dCA9IGRpcnNbZGlyS2V5XTtcblx0XHRcdFxuXHRcdFx0aWYoY29udGV4dCBpbnN0YW5jZW9mIERlcGVuZGVuY3kpe1xuXHRcdFx0XHR0aGlzLnJlcXVpcmVzW2RpcktleV0gPSBjb250ZXh0LmdldERlcGVuZGVuY3koKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0XHRcdFx0XG5cdFx0XHRjb250ZXh0LmtleXMoKS5mb3JFYWNoKChmaWxlbmFtZSk9Pntcblx0XHRcdFx0XG5cdFx0XHRcdGxldCBrZXkgPSBmaWxlbmFtZTtcblx0XHRcdFx0aWYoa2V5LnN1YnN0cigwLDIpPT0nLi8nKXtcblx0XHRcdFx0XHRrZXkgPSBrZXkuc3Vic3RyKDIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRrZXkgPSBkaXJLZXkrJy8nK2tleS5zdWJzdHIoMCwga2V5Lmxhc3RJbmRleE9mKCcuJykgfHwga2V5Lmxlbmd0aCk7XG5cdFx0XHRcdGlmKGtleS5zcGxpdCgnLycpLnBvcCgpPT0naW5kZXgnKXtcblx0XHRcdFx0XHRrZXkgPSBrZXkuc3Vic3RyKDAsIGtleS5sYXN0SW5kZXhPZignLycpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnJlcXVpcmVzW2tleV0gPSBjb250ZXh0KGZpbGVuYW1lKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cdFxuXHRcblx0YWRkUnVsZXMocnVsZXMpe1xuXHRcdGlmKHR5cGVvZiBydWxlcyA9PSAnZnVuY3Rpb24nKXtcblx0XHRcdHJ1bGVzID0gcnVsZXModGhpcyk7XG5cdFx0fVxuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHJ1bGVzKS5mb3JFYWNoKGludGVyZmFjZU5hbWUgPT4gdGhpcy5hZGRSdWxlKGludGVyZmFjZU5hbWUsIHJ1bGVzW2ludGVyZmFjZU5hbWVdLCBmYWxzZSkpO1xuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocnVsZXMpLmZvckVhY2goaW50ZXJmYWNlTmFtZSA9PiB0aGlzLmFkZFJ1bGUoaW50ZXJmYWNlTmFtZSwgcnVsZXNbaW50ZXJmYWNlTmFtZV0sIGZhbHNlKSk7XG5cdFx0dGhpcy5ydWxlc0RldGVjdExhenlMb2FkKCk7XG5cdH1cblx0YWRkUnVsZShpbnRlcmZhY2VOYW1lLCBydWxlLCBkZXRlY3RMYXp5TG9hZCA9IHRydWUpe1xuXHRcdGlmKHR5cGVvZiBydWxlID09ICdmdW5jdGlvbicpe1xuXHRcdFx0cnVsZSA9IHJ1bGUodGhpcyk7XG5cdFx0fVxuXHRcdFxuXHRcdGlmKHRoaXMucnVsZXNbaW50ZXJmYWNlTmFtZV0gPT09IHVuZGVmaW5lZCl7XG5cdFx0XHR0aGlzLnJ1bGVzW2ludGVyZmFjZU5hbWVdID0gdGhpcy5tZXJnZVJ1bGUoe30sIHRoaXMucnVsZXNEZWZhdWx0KTtcblx0XHR9XG5cdFx0XG5cdFx0dGhpcy5ydWxlc1tpbnRlcmZhY2VOYW1lXSA9IHRoaXMubWVyZ2VSdWxlKHRoaXMucnVsZXNbaW50ZXJmYWNlTmFtZV0sIHJ1bGUpO1xuXHRcdHRoaXMucHJvY2Vzc1J1bGUoaW50ZXJmYWNlTmFtZSk7XG5cdFx0XG5cdFx0cnVsZSA9IHRoaXMucnVsZXNbaW50ZXJmYWNlTmFtZV07XG5cdFx0XG5cdFx0bGV0IHsgY2xhc3NEZWYgfSA9IHJ1bGU7XG5cdFx0aWYoY2xhc3NEZWYpe1xuXHRcdFx0aWYoY2xhc3NEZWYgaW5zdGFuY2VvZiBDbGFzc0RlZil7XG5cdFx0XHRcdGNsYXNzRGVmID0gY2xhc3NEZWYuZ2V0Q2xhc3NEZWYoKTtcblx0XHRcdH1cblx0XHRcdHRoaXMucmVnaXN0ZXJSZXF1aXJlKGludGVyZmFjZU5hbWUsIGNsYXNzRGVmKTtcblx0XHR9XG5cdFx0XG5cdFx0aWYoZGV0ZWN0TGF6eUxvYWQpe1xuXHRcdFx0dGhpcy5ydWxlc0RldGVjdExhenlMb2FkKCk7XG5cdFx0fVxuXHRcdFxuXHR9XG5cdFxuXHR2YWxpZGF0ZURlZmF1bHRWYXIodmFsdWUsIHByb3BlcnR5KXtcblx0XHRpZih0aGlzLmFsbG93ZWREZWZhdWx0VmFycy5pbmRleE9mKHZhbHVlKT09PS0xKXtcblx0XHRcdHRocm93IG5ldyBFcnJvcignaW52YWxpZCB0eXBlIFwiJyt2YWx1ZSsnXCIgc3BlY2lmaWVkIGZvciAnK3Byb3BlcnR5KycsIHBvc3NpYmxlcyB2YWx1ZXM6ICcrdGhpcy5hbGxvd2VkRGVmYXVsdFZhcnMuam9pbignIHwgJykpO1xuXHRcdH1cblx0fVxuXHRcblx0bG9hZERlcGVuZGVuY2llcygpe1xuXHRcdHRoaXMubG9hZFBhdGhzKHRoaXMuZGVwZW5kZW5jaWVzKTtcblx0XHR0aGlzLnJlZ2lzdGVyUmVxdWlyZU1hcCh0aGlzLnJlcXVpcmVzKTtcblx0fVxuXHRydWxlc0RldGVjdExhenlMb2FkKCl7XG5cdFx0T2JqZWN0LmtleXModGhpcy5ydWxlcykuZm9yRWFjaChrZXk9Pntcblx0XHRcdHRoaXMucnVsZUxhenlMb2FkKGtleSk7XG5cdFx0fSk7XG5cdH1cblx0XG5cdHJ1bGVMYXp5TG9hZChrZXksIHN0YWNrPVtdKXtcblx0XHRjb25zdCBjYWxscyA9IFtdO1xuXHRcdGNvbnN0IGxhenlDYWxscyA9IFtdO1xuXHRcdFxuXHRcdGNvbnN0IHJ1bGUgPSB0aGlzLnJ1bGVzW2tleV07XG5cdFx0XG5cdFx0aWYoIXJ1bGUuY2FsbHMpe1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRcblx0XHRydWxlLmNhbGxzLmZvckVhY2goY2FsbFZhbCA9PiB7XG5cdFx0XHRpZih0eXBlb2YgY2FsbFZhbCA9PSAnZnVuY3Rpb24nKXtcblx0XHRcdFx0Y2FsbFZhbCA9IFtjYWxsVmFsXTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IFttZXRob2QsIHBhcmFtcyA9IFtdXSA9IGNhbGxWYWw7XG5cdFx0XHRpZiggdGhpcy5ydWxlQ2hlY2tDeWNsaWNMb2FkKHBhcmFtcywgWyBrZXkgXSkgKXtcblx0XHRcdFx0bGF6eUNhbGxzLnB1c2goY2FsbFZhbCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNle1xuXHRcdFx0XHRjYWxscy5wdXNoKGNhbGxWYWwpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdFxuXHRcdHJ1bGUuY2FsbHMgPSBjYWxscztcblx0XHRydWxlLmxhenlDYWxscyA9IChydWxlLmxhenlDYWxscyB8fCBbXSkuY29uY2F0KGxhenlDYWxscyk7XG5cdH1cblx0cnVsZUNoZWNrQ3ljbGljTG9hZChwYXJhbXMsIHN0YWNrPVtdKXtcdFx0XG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKHBhcmFtcykuc29tZShrPT57XG5cdFx0XHRjb25zdCBwYXJhbSA9IHBhcmFtc1trXTtcblx0XHRcdGNvbnN0IHYgPSB0aGlzLndyYXBWYXJUeXBlKHBhcmFtLCB0aGlzLmRlZmF1bHRSdWxlVmFyKTtcblx0XHRcdGlmKHYgaW5zdGFuY2VvZiBJbnRlcmZhY2Upe1xuXHRcdFx0XHRjb25zdCBpbnRlcmZhY2VOYW1lID0gdi5nZXROYW1lKCk7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZighdGhpcy5yZXNvbHZlSW5zdGFuY2VPZihpbnRlcmZhY2VOYW1lLCBbXSwgZmFsc2UpKXtcblx0XHRcdFx0XHQvL25vdCBmb3VuZCwgdW5hYmxlIHRvIGNoZWNrIG5vd1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0Y29uc3QgcGFyYW1SdWxlID0gdGhpcy5nZXRSdWxlKGludGVyZmFjZU5hbWUpO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYoc3RhY2suaW5kZXhPZihpbnRlcmZhY2VOYW1lKSE9PS0xKXtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0c3RhY2sucHVzaChpbnRlcmZhY2VOYW1lKTtcblx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0bGV0IGN5Y2xpYztcblxuXHRcdFx0XHRpZihwYXJhbVJ1bGUucGFyYW1zKXtcblx0XHRcdFx0XHRjeWNsaWMgPSB0aGlzLnJ1bGVDaGVja0N5Y2xpY0xvYWQocGFyYW1SdWxlLnBhcmFtcywgc3RhY2spO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoIWN5Y2xpYyl7XG5cdFx0XHRcdFx0Y3ljbGljID0gcGFyYW1SdWxlLmNhbGxzLnNvbWUoY2FsbFY9Pntcblx0XHRcdFx0XHRcdGNvbnN0IFttZXRob2QsIHBhcmFtcyA9IFtdIF0gPSBjYWxsVjtcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLnJ1bGVDaGVja0N5Y2xpY0xvYWQocGFyYW1zLCBzdGFjayk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdHJldHVybiBjeWNsaWM7XG5cdFx0XHRcdFxuXHRcdFx0fVxuXHRcdFx0aWYodHlwZW9mIHYgPT0gJ29iamVjdCcgJiYgdiAhPT0gbnVsbCAmJiAhKHYgaW5zdGFuY2VvZiBWYXIpKXtcblx0XHRcdFx0cmV0dXJuIHRoaXMucnVsZUNoZWNrQ3ljbGljTG9hZCh2LCBzdGFjayk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblx0XG5cdHByb2Nlc3NSdWxlKGtleSwgc3RhY2sgPSBbXSl7XG5cdFx0aWYodGhpcy5ydWxlc1trZXldID09PSB1bmRlZmluZWQpe1xuXHRcdFx0dGhpcy5ydWxlc1trZXldID0gdGhpcy5tZXJnZVJ1bGUoe30sIHRoaXMucnVsZXNEZWZhdWx0KTtcblx0XHR9XG5cdFx0Y29uc3QgcnVsZSA9IHRoaXMucnVsZXNba2V5XTtcblx0XHRpZihydWxlLmluc3RhbmNlT2Ype1xuXHRcdFx0aWYoc3RhY2suaW5kZXhPZihrZXkpIT09LTEpe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0N5Y2xpYyBpbnRlcmZhY2UgZGVmaW5pdGlvbiBlcnJvciBpbiAnK0pTT04uc3RyaW5naWZ5KHN0YWNrLmNvbmNhdChrZXkpLG51bGwsMikpO1xuXHRcdFx0fVxuXHRcdFx0c3RhY2sucHVzaChrZXkpO1xuXHRcdFx0dGhpcy5wcm9jZXNzUnVsZShydWxlLmluc3RhbmNlT2YsIHN0YWNrKTtcblx0XHR9XG5cdFx0aWYocnVsZS5zaW5nbGV0b24pe1xuXHRcdFx0cnVsZS5jbGFzc0RlZiA9IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHJldHVybiBydWxlLnNpbmdsZXRvbjtcblx0XHRcdH07XG5cdFx0fVxuXHRcdGlmKHR5cGVvZiBydWxlLmNsYXNzRGVmID09ICdzdHJpbmcnKXtcblx0XHRcdGNvbnN0IGNsYXNzRGVmTmFtZSA9IHJ1bGUuY2xhc3NEZWY7XG5cdFx0XHRydWxlLmNsYXNzRGVmID0gKC4uLmFyZ3MpPT57XG5cdFx0XHRcdGNvbnN0IGNsYXNzRGVmaW5pdGlvbiA9IHRoaXMuZ2V0KGNsYXNzRGVmTmFtZSk7XG5cdFx0XHRcdHJldHVybiBuZXcgY2xhc3NEZWZpbml0aW9uKC4uLmFyZ3MpO1xuXHRcdFx0fTtcblx0XHR9XG5cdFx0aWYodGhpcy52YWxpZGF0ZUF1dG9sb2FkRmlsZU5hbWUoa2V5KSl7XG5cdFx0XHRpZihydWxlLmF1dG9sb2FkKXtcblx0XHRcdFx0Y29uc3QgcGF0aCA9IHJ1bGUucGF0aCB8fCBrZXk7XG5cdFx0XHRcdGNvbnN0IHJlcSA9IHRoaXMucmVxdWlyZURlcChrZXksIHBhdGgpO1xuXHRcdFx0XHRpZihyZXEpe1xuXHRcdFx0XHRcdHRoaXMucmVnaXN0ZXJSZXF1aXJlKGtleSwgcmVxKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRcblx0dmFsaWRhdGVBdXRvbG9hZEZpbGVOYW1lKG5hbWUpe1xuXHRcdGlmKHR5cGVvZiBuYW1lID09ICdzdHJpbmcnICYmIG5hbWUuc3Vic3RyKDAsMSk9PT0nIycpe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRcblx0cmVxdWlyZURlcChrZXksIHJlcXVpcmVQYXRoKXtcblx0XHRpZih0aGlzLnJlcXVpcmVzW2tleV0pe1xuXHRcdFx0cmV0dXJuIHRoaXMucmVxdWlyZXNba2V5XTtcblx0XHR9XG5cdFx0XG5cdFx0cmVxdWlyZVBhdGggPSB0aGlzLmF1dG9sb2FkUGF0aFJlc29sdmVyKHJlcXVpcmVQYXRoKTtcblx0XHRcblx0XHRjb25zdCBmb3VuZCA9IHRoaXMuYXV0b2xvYWRFeHRlbnNpb25zLmNvbmNhdCgnJykuc29tZSggZXh0ID0+IHtcblx0XHRcdFxuXHRcdFx0Y29uc3QgcGF0aEZyYWdtZW50cyA9IHJlcXVpcmVQYXRoLnNwbGl0KCc6Jyk7XG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0bGV0IHBhdGggPSBwYXRoRnJhZ21lbnRzLnNoaWZ0KCk7XG5cdFx0XHRpZihleHQpe1xuXHRcdFx0XHRwYXRoICs9ICcuJytleHQ7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0aWYodGhpcy5kZXBFeGlzdHMocGF0aCkpe1xuXHRcdFx0XHRsZXQgcmVxdWlyZWQgPSB0aGlzLmRlcFJlcXVpcmUocGF0aCk7XG5cdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdGlmKHBhdGhGcmFnbWVudHMubGVuZ3RoKXtcblx0XHRcdFx0XHRwYXRoRnJhZ21lbnRzLmZvckVhY2goIHN1YktleSA9PiB7XG5cdFx0XHRcdFx0XHRpZih0eXBlb2YgcmVxdWlyZWQgIT09ICd1bmRlZmluZWQnICYmIHJlcXVpcmVkICE9PSBudWxsKXtcblx0XHRcdFx0XHRcdFx0cmVxdWlyZWQgPSByZXF1aXJlZFtzdWJLZXldO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRcblx0XHRcdFx0dGhpcy5yZXF1aXJlc1trZXldID0gcmVxdWlyZWQ7XG5cdFx0XHRcdFxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdH0pO1xuXHRcdGlmKCAhIGZvdW5kICYmICgodGhpcy5hdXRvbG9hZEZhaWxPbk1pc3NpbmdGaWxlPT09J3BhdGgnICYmIHJlcXVpcmVQYXRoKSB8fCB0aGlzLmF1dG9sb2FkRmFpbE9uTWlzc2luZ0ZpbGU9PT10cnVlKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGV4cGVjdGVkIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGZpbGUgXCInK3JlcXVpcmVQYXRoKydcIicpO1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gdGhpcy5yZXF1aXJlc1trZXldO1xuXHR9XG5cdFxuXHRcblx0cmVnaXN0ZXJSZXF1aXJlTWFwKHJlcXVpcmVzKXtcblx0XHRPYmplY3Qua2V5cyhyZXF1aXJlcykuZm9yRWFjaCgobmFtZSk9Pntcblx0XHRcdHRoaXMucmVnaXN0ZXJSZXF1aXJlKG5hbWUscmVxdWlyZXNbbmFtZV0pO1xuXHRcdH0pO1xuXHR9XG5cdHJlZ2lzdGVyUmVxdWlyZShuYW1lLHIpe1xuXHRcdGlmKHR5cGVvZiByID09ICdvYmplY3QnICYmIHR5cGVvZiByLmRlZmF1bHQgPT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRyID0gci5kZWZhdWx0O1xuXHRcdH1cblx0XHRpZih0eXBlb2YgciAhPT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHJ1bGUgPSB0aGlzLmdldFJ1bGVCYXNlKG5hbWUpO1xuXHRcdGlmKHJ1bGUuZGVjb3JhdG9yICYmIHJbdGhpcy5zeW1DbGFzc05hbWVdKXtcblx0XHRcdHIgPSBjbGFzcyBleHRlbmRzIHJ7fTtcblx0XHR9XG5cdFx0XG5cdFx0aWYocnVsZS5kZWNvcmF0b3Ipe1xuXHRcdFx0dGhpcy5kZWNvcmF0b3IobmFtZSkocik7XG5cdFx0fVxuXHRcdGVsc2V7XG5cdFx0XHR0aGlzLnJlZ2lzdGVyQ2xhc3MobmFtZSwgcik7XG5cdFx0fVxuXHR9XG5cdFxuXHRcblx0ZGVjb3JhdG9yKGNsYXNzTmFtZSwgdHlwZXMgPSBbXSl7XG5cdFx0cmV0dXJuICh0YXJnZXQpPT57XG5cdFx0XHRcblx0XHRcdHRoaXMuZGVmaW5lU3ltKHRhcmdldCwgdGhpcy5zeW1DbGFzc05hbWUsIGNsYXNzTmFtZSk7XG5cdFx0XHRcblx0XHRcdHRoaXMucmVnaXN0ZXJDbGFzcyhjbGFzc05hbWUsIHRhcmdldCk7XG5cdFx0XHRcblx0XHRcdGlmKHR5cGVvZiB0eXBlcyA9PSAnZnVuY3Rpb24nKXtcblx0XHRcdFx0dHlwZXMgPSB0eXBlcygpO1xuXHRcdFx0fVxuXHRcdFx0dHlwZXMgPSB0eXBlcy5tYXAodHlwZSA9PiB0aGlzLndyYXBWYXJUeXBlKHR5cGUsIHRoaXMuZGVmYXVsdERlY29yYXRvclZhcikpO1xuXHRcdFx0XG5cdFx0XHRpZiAodGFyZ2V0W3RoaXMuc3ltSW50ZXJmYWNlc10pIHtcblx0XHRcdFx0dHlwZXMgPSB0eXBlcy5jb25jYXQodGFyZ2V0W3RoaXMuc3ltSW50ZXJmYWNlc10pO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5kZWZpbmVTeW0odGFyZ2V0LCB0aGlzLnN5bUludGVyZmFjZXMsIHR5cGVzKTtcblx0XHRcdFxuXHRcdFx0cmV0dXJuIHRhcmdldDtcblx0XHR9O1xuXHR9XG5cdFxuXHRleGlzdHMobmFtZSl7XG5cdFx0cmV0dXJuIEJvb2xlYW4odGhpcy5ydWxlc1tuYW1lXSk7XG5cdH1cblx0XG5cdGdldChpbnRlcmZhY2VEZWYsIGFyZ3MsIHNoYXJlZEluc3RhbmNlcyA9IHt9LCBzdGFjayA9IFtdKXtcblx0XHRyZXR1cm4gdGhpcy5wcm92aWRlcihpbnRlcmZhY2VEZWYpKGFyZ3MsIHNoYXJlZEluc3RhbmNlcywgc3RhY2spO1xuXHR9XG5cdHByb3ZpZGVyKGludGVyZmFjZU5hbWUpe1xuXHRcdFxuXHRcdGlmKHR5cGVvZiBpbnRlcmZhY2VOYW1lID09ICdmdW5jdGlvbicpe1xuXHRcdFx0aW50ZXJmYWNlTmFtZSA9IGludGVyZmFjZU5hbWVbdGhpcy5zeW1DbGFzc05hbWVdO1xuXHRcdFx0aWYoIWludGVyZmFjZU5hbWUpe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1VucmVnaXN0cmVkIGNsYXNzICcraW50ZXJmYWNlTmFtZS5jb25zdHJ1Y3Rvci5uYW1lKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0aWYoaW50ZXJmYWNlTmFtZSBpbnN0YW5jZW9mIEludGVyZmFjZSl7XG5cdFx0XHRpbnRlcmZhY2VOYW1lID0gaW50ZXJmYWNlTmFtZS5nZXROYW1lKCk7XG5cdFx0fVxuXHRcdFxuXHRcdFxuXHRcdGlmKCF0aGlzLnByb3ZpZGVyUmVnaXN0cnlbaW50ZXJmYWNlTmFtZV0pe1xuXHRcdFx0dGhpcy5wcm92aWRlclJlZ2lzdHJ5W2ludGVyZmFjZU5hbWVdID0gdGhpcy5tYWtlUHJvdmlkZXIoaW50ZXJmYWNlTmFtZSk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnByb3ZpZGVyUmVnaXN0cnlbaW50ZXJmYWNlTmFtZV07XG5cdH1cblx0XG5cdG1ha2VQcm92aWRlcihpbnRlcmZhY2VOYW1lKXtcblx0XHRjb25zdCBydWxlID0gdGhpcy5nZXRSdWxlKGludGVyZmFjZU5hbWUpO1xuXHRcdGNvbnN0IGNsYXNzRGVmID0gdGhpcy5yZXNvbHZlSW5zdGFuY2VPZihpbnRlcmZhY2VOYW1lKTtcblx0XHRyZXR1cm4gKGFyZ3MsIHNoYXJlZEluc3RhbmNlcywgc3RhY2spPT57XG5cdFx0XHRcblx0XHRcdC8vY2hlY2sgZm9yIHNoYXJlZCBhZnRlciBwYXJhbXMgbG9hZFxuXHRcdFx0aWYodGhpcy5pbnN0YW5jZVJlZ2lzdHJ5W2ludGVyZmFjZU5hbWVdKXtcblx0XHRcdFx0cmV0dXJuIHRoaXMuaW5zdGFuY2VSZWdpc3RyeVtpbnRlcmZhY2VOYW1lXTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0c2hhcmVkSW5zdGFuY2VzID0gT2JqZWN0LmFzc2lnbih7fSwgc2hhcmVkSW5zdGFuY2VzKTtcblx0XHRcdHJ1bGUuc2hhcmVkSW5UcmVlLmZvckVhY2goc2hhcmVJbnRlcmZhY2UgPT4ge1xuXHRcdFx0XHRpZighc2hhcmVkSW5zdGFuY2VzW3NoYXJlSW50ZXJmYWNlXSl7XG5cdFx0XHRcdFx0c2hhcmVkSW5zdGFuY2VzW3NoYXJlSW50ZXJmYWNlXSA9IG5ldyBTaGFyZWRJbnN0YW5jZShzaGFyZUludGVyZmFjZSwgdGhpcyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0XG5cdFx0XHRsZXQgcGFyYW1zO1xuXHRcdFx0bGV0IGRlZmF1bHRWYXI7XG5cdFx0XHRpZihhcmdzKXtcblx0XHRcdFx0cGFyYW1zID0gYXJncztcblx0XHRcdFx0ZGVmYXVsdFZhciA9IHRoaXMuZGVmYXVsdEFyZ3NWYXI7XG5cdFx0XHR9XG5cdFx0XHRlbHNle1xuXHRcdFx0XHRwYXJhbXMgPSBydWxlLnBhcmFtcyB8fCBjbGFzc0RlZlt0aGlzLnN5bUludGVyZmFjZXNdIHx8IFtdO1xuXHRcdFx0XHRkZWZhdWx0VmFyID0gdGhpcy5kZWZhdWx0UnVsZVZhcjtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Y29uc3QgcmVzb2x2ZWRQYXJhbXMgPSBwYXJhbXMubWFwKChpbnRlcmZhY2VEZWYsIGluZGV4KT0+e1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5nZXRQYXJhbShpbnRlcmZhY2VEZWYsIHJ1bGUsIHNoYXJlZEluc3RhbmNlcywgZGVmYXVsdFZhciwgaW5kZXgsIHN0YWNrKTtcblx0XHRcdH0pO1xuXHRcdFx0XG5cdFx0XHQvL3JlY2hlY2sgZm9yIHNoYXJlZCBhZnRlciBwYXJhbXMgbG9hZFxuXHRcdFx0aWYodGhpcy5pbnN0YW5jZVJlZ2lzdHJ5W2ludGVyZmFjZU5hbWVdKXtcblx0XHRcdFx0cmV0dXJuIHRoaXMuaW5zdGFuY2VSZWdpc3RyeVtpbnRlcmZhY2VOYW1lXTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Y29uc3QgbWFrZUluc3RhbmNlID0gKHJlc29sdmVkUGFyYW1zKT0+e1xuXHRcdFx0XHRcblx0XHRcdFx0cmVzb2x2ZWRQYXJhbXMgPSBzdHJ1Y3R1cmVkUmVzb2x2ZVBhcmFtc0ludGVyZmFjZShwYXJhbXMsIHJlc29sdmVkUGFyYW1zKTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmKHRoaXMuaW50ZXJmYWNlVHlwZUNoZWNrKXtcblx0XHRcdFx0XHRzdHJ1Y3R1cmVkSW50ZXJmYWNlUHJvdG90eXBlKHJ1bGUucGFyYW1zIHx8IGNsYXNzRGVmW3RoaXMuc3ltSW50ZXJmYWNlc10gfHwgW10sIHJlc29sdmVkUGFyYW1zKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0XG5cdFx0XHRcdGNvbnN0IGluc3RhbmNlID0gbmV3IGNsYXNzRGVmKC4uLnJlc29sdmVkUGFyYW1zKTtcblx0XHRcdFx0XG5cdFx0XHRcdGNvbnN0IGZpbmFsaXplSW5zdGFuY2VDcmVhdGlvbiA9ICgpPT57XG5cdFx0XHRcdFx0aWYocnVsZS5zaGFyZWQpe1xuXHRcdFx0XHRcdFx0dGhpcy5yZWdpc3Rlckluc3RhbmNlKGludGVyZmFjZU5hbWUsIGluc3RhbmNlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0Y29uc3QgY2FsbHNSZXR1cm4gPSB0aGlzLnJ1bkNhbGxzKHJ1bGUubGF6eUNhbGxzLCBpbnN0YW5jZSwgcnVsZSwgc2hhcmVkSW5zdGFuY2VzKTtcblx0XHRcdFx0XHRpZihjYWxsc1JldHVybiBpbnN0YW5jZW9mIHRoaXMuUHJvbWlzZUludGVyZmFjZSl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gY2FsbHNSZXR1cm4udGhlbigoKT0+aW5zdGFuY2UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHRyZXR1cm4gaW5zdGFuY2U7XG5cdFx0XHRcdH07XG5cdFx0XHRcdFxuXHRcdFx0XHRjb25zdCBjYWxsc1JldHVybiA9IHRoaXMucnVuQ2FsbHMocnVsZS5jYWxscywgaW5zdGFuY2UsIHJ1bGUsIHNoYXJlZEluc3RhbmNlcyk7XG5cdFx0XHRcdGlmKGNhbGxzUmV0dXJuIGluc3RhbmNlb2YgdGhpcy5Qcm9taXNlSW50ZXJmYWNlKXtcblx0XHRcdFx0XHRyZXR1cm4gY2FsbHNSZXR1cm4udGhlbigoKT0+ZmluYWxpemVJbnN0YW5jZUNyZWF0aW9uKCkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRyZXR1cm4gZmluYWxpemVJbnN0YW5jZUNyZWF0aW9uKCk7XG5cdFx0XHR9O1xuXHRcdFx0aWYoc3RydWN0dXJlZEhhc1Byb21pc2UocGFyYW1zLCByZXNvbHZlZFBhcmFtcywgdGhpcy5Qcm9taXNlSW50ZXJmYWNlKSl7XG5cdFx0XHRcdHJldHVybiBzdHJ1Y3R1cmVkUHJvbWlzZUFsbFJlY3Vyc2l2ZShwYXJhbXMsIHJlc29sdmVkUGFyYW1zLCB0aGlzLlByb21pc2VJbnRlcmZhY2UsIHRoaXMuUHJvbWlzZUZhY3RvcnkgKS50aGVuKHJlc29sdmVkUGFyYW1zPT57XG5cdFx0XHRcdFx0cmV0dXJuIG1ha2VJbnN0YW5jZShyZXNvbHZlZFBhcmFtcyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRyZXR1cm4gbWFrZUluc3RhbmNlKHJlc29sdmVkUGFyYW1zKTtcblx0XHR9O1xuXHR9XG5cdFxuXHRnZXRTdWJzdGl0dXRpb25QYXJhbShpbnRlcmZhY2VEZWYsIHJ1bGUsIGluZGV4KXtcblx0XHRjb25zdCBzdWJzdGl0dXRpb25zID0gdGhpcy53cmFwVmFyVHlwZShydWxlLnN1YnN0aXR1dGlvbnMsIHRoaXMuZGVmYXVsdFJ1bGVWYXIpO1xuXHRcdFxuXHRcdGlmKHR5cGVvZiBpbmRleCAhPT0gJ3VuZGVmaW5lZCcgJiYgc3Vic3RpdHV0aW9uc1tpbmRleF0pe1xuXHRcdFx0aW50ZXJmYWNlRGVmID0gc3Vic3RpdHV0aW9uc1tpbmRleF07XG5cdFx0XHRpbnRlcmZhY2VEZWYgPSB0aGlzLndyYXBWYXJUeXBlKGludGVyZmFjZURlZiwgdGhpcy5kZWZhdWx0UnVsZVZhciwgdHJ1ZSk7XG5cdFx0fVxuXHRcdFxuXHRcdGlmKGludGVyZmFjZURlZiBpbnN0YW5jZW9mIEludGVyZmFjZSl7XG5cdFx0XHRjb25zdCBpbnRlcmZhY2VOYW1lID0gaW50ZXJmYWNlRGVmLmdldE5hbWUoKTtcblx0XHRcdGlmKHN1YnN0aXR1dGlvbnNbaW50ZXJmYWNlTmFtZV0pe1xuXHRcdFx0XHRpbnRlcmZhY2VEZWYgPSBzdWJzdGl0dXRpb25zW2ludGVyZmFjZU5hbWVdO1xuXHRcdFx0XHRpbnRlcmZhY2VEZWYgPSB0aGlzLndyYXBWYXJUeXBlKGludGVyZmFjZURlZiwgdGhpcy5kZWZhdWx0UnVsZVZhciwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9XG5cdFx0cmV0dXJuIGludGVyZmFjZURlZjtcblx0fVxuXHRnZXRQYXJhbShpbnRlcmZhY2VEZWYsIHJ1bGUsIHNoYXJlZEluc3RhbmNlcywgZGVmYXVsdFZhciA9ICdpbnRlcmZhY2UnLCBpbmRleCA9IHVuZGVmaW5lZCwgc3RhY2sgPSBbXSl7XG5cdFx0XG5cdFx0aW50ZXJmYWNlRGVmID0gdGhpcy53cmFwVmFyVHlwZShpbnRlcmZhY2VEZWYsIGRlZmF1bHRWYXIpO1xuXHRcdFxuXHRcdGludGVyZmFjZURlZiA9IHRoaXMuZ2V0U3Vic3RpdHV0aW9uUGFyYW0oaW50ZXJmYWNlRGVmLCBydWxlLCBpbmRleCk7XG5cdFx0XG5cdFx0aWYoaW50ZXJmYWNlRGVmIGluc3RhbmNlb2YgRmFjdG9yeSl7XG5cdFx0XHRyZXR1cm4gaW50ZXJmYWNlRGVmLmNhbGxiYWNrKHNoYXJlZEluc3RhbmNlcyk7XG5cdFx0fVxuXHRcdGlmKGludGVyZmFjZURlZiBpbnN0YW5jZW9mIFZhbHVlKXtcblx0XHRcdHJldHVybiBpbnRlcmZhY2VEZWYuZ2V0VmFsdWUoKTtcblx0XHR9XG5cdFx0aWYoaW50ZXJmYWNlRGVmIGluc3RhbmNlb2YgUmVxdWlyZSl7XG5cdFx0XHRyZXR1cm4gaW50ZXJmYWNlRGVmLnJlcXVpcmUoKTtcblx0XHR9XG5cdFx0XG5cdFx0aWYoaW50ZXJmYWNlRGVmIGluc3RhbmNlb2YgSW50ZXJmYWNlKXtcblx0XHRcdFxuXHRcdFx0Y29uc3QgaW50ZXJmYWNlTmFtZSA9IGludGVyZmFjZURlZi5nZXROYW1lKCk7XG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0c3RhY2sgPSBzdGFjay5zbGljZSgwKTtcblx0XHRcdGlmKHN0YWNrLmluZGV4T2YoaW50ZXJmYWNlTmFtZSkhPT0tMSl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignQ3ljbGljIGRlcGVuZGVuY3kgZXJyb3IgaW4gJytKU09OLnN0cmluZ2lmeShzdGFjay5jb25jYXQoaW50ZXJmYWNlTmFtZSksbnVsbCwyKSk7XG5cdFx0XHR9XG5cdFx0XHRzdGFjay5wdXNoKGludGVyZmFjZU5hbWUpO1xuXHRcdFx0XG5cdFx0XHRsZXQgaW5zdGFuY2U7XG5cdFx0XHRcblx0XHRcdGlmKHNoYXJlZEluc3RhbmNlc1tpbnRlcmZhY2VOYW1lXSl7XG5cdFx0XHRcdGluc3RhbmNlID0gc2hhcmVkSW5zdGFuY2VzW2ludGVyZmFjZU5hbWVdLmdldChzaGFyZWRJbnN0YW5jZXMsIHN0YWNrKTtcblx0XHRcdH1cblx0XHRcdGVsc2V7XG5cdFx0XHRcdGluc3RhbmNlID0gdGhpcy5nZXQoaW50ZXJmYWNlTmFtZSwgdW5kZWZpbmVkLCBzaGFyZWRJbnN0YW5jZXMsIHN0YWNrKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Y29uc3QgaW5zdGFuY2VSdWxlID0gdGhpcy5nZXRSdWxlKGludGVyZmFjZU5hbWUpO1xuXHRcdFx0XG5cdFx0XHQvL2lmKCFpbnN0YW5jZVJ1bGUuYXN5bmNSZXNvbHZlICYmIGluc3RhbmNlIGluc3RhbmNlb2YgdGhpcy5Qcm9taXNlSW50ZXJmYWNlKXtcblx0XHRcdGlmKCFpbnN0YW5jZVJ1bGUuYXN5bmNSZXNvbHZlKXtcblx0XHRcdFx0cmV0dXJuIG5ldyBTeW5jKGluc3RhbmNlKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0cmV0dXJuIGluc3RhbmNlO1xuXHRcdH1cblx0XHRcblx0XHRpZih0eXBlb2YgaW50ZXJmYWNlRGVmID09ICdvYmplY3QnICYmICEoaW50ZXJmYWNlRGVmIGluc3RhbmNlb2YgVmFyKSl7XG5cdFx0XHRjb25zdCBvID0ge307XG5cdFx0XHRPYmplY3Qua2V5cyhpbnRlcmZhY2VEZWYpLmZvckVhY2goayA9PiB7XG5cdFx0XHRcdG9ba10gPSB0aGlzLmdldFBhcmFtKGludGVyZmFjZURlZltrXSwgcnVsZSwgc2hhcmVkSW5zdGFuY2VzLCBkZWZhdWx0VmFyLCB1bmRlZmluZWQsIHN0YWNrKTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIG87XG5cdFx0fVxuXHRcblx0XHRyZXR1cm4gaW50ZXJmYWNlRGVmO1xuXHR9XG5cdFxuXHR3cmFwVmFyVHlwZSh0eXBlLCBkZWZhdWx0VmFyLCByZXNvbHZlRnVuY3Rpb24pe1xuXHRcdGlmKHJlc29sdmVGdW5jdGlvbiAmJiB0eXBlb2YgdHlwZSA9PSAnZnVuY3Rpb24nKXtcblx0XHRcdHR5cGUgPSB0eXBlKCk7XG5cdFx0fVxuXHRcdGlmKHR5cGUgaW5zdGFuY2VvZiBWYXIpe1xuXHRcdFx0cmV0dXJuIHR5cGU7XG5cdFx0fVxuXHRcdGlmKHRoaXMuaXNJbnRlcmZhY2VQcm90b3R5cGUodHlwZSkpe1xuXHRcdFx0cmV0dXJuIHRoaXMuaW50ZXJmYWNlQ2xhc3MoIHR5cGUudG9TdHJpbmcoKSwgdHlwZSApO1xuXHRcdH1cblx0XHRzd2l0Y2goZGVmYXVsdFZhcil7XG5cdFx0XHRjYXNlICdpbnRlcmZhY2UnOlxuXHRcdFx0XHRpZih0eXBlb2YgdHlwZSA9PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKXtcblx0XHRcdFx0XHRjb25zdCBvID0ge307XG5cdFx0XHRcdFx0T2JqZWN0LmtleXModHlwZSkuZm9yRWFjaChrZXk9Pntcblx0XHRcdFx0XHRcdGNvbnN0IHYgPSB0eXBlW2tleV07XG5cdFx0XHRcdFx0XHRvW2tleV0gPSB0eXBlb2YgdiA9PSAnb2JqZWN0JyAmJiB2ICE9PSBudWxsICYmICEodiBpbnN0YW5jZW9mIFZhcikgPyB0aGlzLndyYXBWYXJUeXBlKHYsIGRlZmF1bHRWYXIpIDogdjtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRyZXR1cm4gbztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZih0eXBlb2YgdHlwZSA9PSAnZnVuY3Rpb24nKXtcblx0XHRcdFx0XHRyZXR1cm4gbmV3IHRoaXMuZGVmYXVsdEZ1bmN0aW9uV3JhcHBlcih0eXBlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcy5pbnRlcmZhY2UodHlwZSk7XG5cdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3ZhbHVlJzpcblx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWUodHlwZSk7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdFx0cmV0dXJuIHR5cGU7XG5cdH1cblx0XG5cdGlzSW50ZXJmYWNlUHJvdG90eXBlKHR5cGUpe1xuXHRcdHJldHVybiB0aGlzLmludGVyZmFjZVByb3RvdHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUucHJvdG90eXBlIGluc3RhbmNlb2YgdGhpcy5pbnRlcmZhY2VQcm90b3R5cGU7XG5cdH1cblx0XG5cdHJlZ2lzdGVySW5zdGFuY2UobmFtZSwgaW5zdGFuY2Upe1xuXHRcdHRoaXMuaW5zdGFuY2VSZWdpc3RyeVtuYW1lXSA9IGluc3RhbmNlO1xuXHR9XG5cdFxuXHRnZXRSdWxlQmFzZShpbnRlcmZhY2VOYW1lKXtcblx0XHRjb25zdCBydWxlQmFzZSA9IHRoaXMubWVyZ2VSdWxlKHt9LCB0aGlzLnJ1bGVzRGVmYXVsdCk7XG5cdFx0cnVsZUJhc2UuaW50ZXJmYWNlTmFtZSA9IGludGVyZmFjZU5hbWU7IC8vZm9yIGluZm9cblx0XHR0aGlzLm1lcmdlUnVsZShydWxlQmFzZSwgdGhpcy5ydWxlc1tpbnRlcmZhY2VOYW1lXSB8fCB7fSk7XG5cdFx0cmV0dXJuIHJ1bGVCYXNlO1xuXHR9XG5cdFxuXHRnZXRSdWxlKGludGVyZmFjZU5hbWUpe1xuXHRcdGNvbnN0IHJ1bGUgPSB0aGlzLm1lcmdlUnVsZSh7fSwgdGhpcy5ydWxlc0RlZmF1bHQpO1xuXHRcdHJ1bGUuaW50ZXJmYWNlTmFtZSA9IGludGVyZmFjZU5hbWU7IC8vZm9yIGluZm9cblx0XHRpZighaW50ZXJmYWNlTmFtZSl7XG5cdFx0XHRyZXR1cm4gcnVsZTtcblx0XHR9XG5cdFx0XG5cdFx0Y29uc3QgcnVsZUJhc2UgPSB0aGlzLmdldFJ1bGVCYXNlKGludGVyZmFjZU5hbWUpO1xuXHRcdFxuXHRcdGxldCBzdGFjayA9IFtdO1xuXHRcdFxuXHRcdHRoaXMucmVzb2x2ZUluc3RhbmNlT2YoaW50ZXJmYWNlTmFtZSwgc3RhY2spO1xuXHRcdFxuXHRcdGNvbnN0IHJ1bGVzID0gW107XG5cdFx0XG5cdFx0bGV0IGZ1bGxTdGFjaztcblx0XHRcblx0XHRpZihydWxlQmFzZS5pbmhlcml0SW5zdGFuY2VPZil7IFxuXHRcdFx0ZnVsbFN0YWNrID0gbmV3IFNldCggc3RhY2suc2xpY2UoMCwgLTEpICk7XG5cdFx0fVxuXHRcdGVsc2V7XG5cdFx0XHRmdWxsU3RhY2sgPSBuZXcgU2V0KCBzdGFjay5zbGljZSgwLCAxKSApO1xuXHRcdH1cblx0XHRcblx0XHRcblx0XHRpZihydWxlQmFzZS5pbmhlcml0UHJvdG90eXBlKXtcblx0XHRcdHN0YWNrLnJldmVyc2UoKS5mb3JFYWNoKChjKT0+e1xuXHRcdFx0XHRpZih0eXBlb2YgYyA9PSAnZnVuY3Rpb24nKXtcblx0XHRcdFx0XHRsZXQgcGFyZW50UHJvdG8gPSBjO1xuXHRcdFx0XHRcdGxldCBjbGFzc05hbWU7XG5cdFx0XHRcdFx0d2hpbGUocGFyZW50UHJvdG8pe1xuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lID0gcGFyZW50UHJvdG9bdGhpcy5zeW1DbGFzc05hbWVdO1xuXHRcdFx0XHRcdFx0aWYoY2xhc3NOYW1lKXtcblx0XHRcdFx0XHRcdFx0ZnVsbFN0YWNrLmFkZChjbGFzc05hbWUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cGFyZW50UHJvdG8gPSBSZWZsZWN0LmdldFByb3RvdHlwZU9mKHBhcmVudFByb3RvKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0XHRmdWxsU3RhY2sgPSBBcnJheS5mcm9tKGZ1bGxTdGFjaykucmV2ZXJzZSgpO1xuXHRcdFxuXHRcdGZ1bGxTdGFjay5mb3JFYWNoKChjbGFzc05hbWUpPT57XG5cdFx0XHRjb25zdCBtZXJnZVJ1bGUgPSB0aGlzLnJ1bGVzW2NsYXNzTmFtZV07XG5cdFx0XHRcdFxuXHRcdFx0aWYobWVyZ2VSdWxlLmluaGVyaXRNaXhpbnMpe1xuXHRcdFx0XHR0aGlzLm1peGluc1J1bGUocnVsZSwgbWVyZ2VSdWxlLmluaGVyaXRNaXhpbnMpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHR0aGlzLm1lcmdlUnVsZShydWxlLCBtZXJnZVJ1bGUpO1xuXHRcdH0pO1xuXHRcdFxuXHRcdHJldHVybiBydWxlO1xuXHR9XG5cdFxuXHRtaXhpbnNSdWxlKHJ1bGUsIG1peGluc0dyb3VwKXtcblx0XHRjb25zdCBtaXhpbnNHcm91cHMgPSB0aGlzLnJ1bGVDb2xsZWN0RXh0ZW5kc1JlY3Vyc2l2ZShtaXhpbnNHcm91cCkucmV2ZXJzZSgpO1xuXHRcdG1peGluc0dyb3Vwcy5mb3JFYWNoKG1peGluR3JvdXAgPT5cblx0XHRcdG1peGluR3JvdXAuZm9yRWFjaCggbWl4aW4gPT4ge1xuXHRcdFx0XHRjb25zdCBtZXJnZVJ1bGUgPSB0aGlzLnJ1bGVzW21peGluXTtcblx0XHRcdFx0dGhpcy5tZXJnZVJ1bGUocnVsZSwgbWVyZ2VSdWxlLCBmYWxzZSlcblx0XHRcdH0gKVxuXHRcdCk7XG5cdH1cblx0cnVsZUNvbGxlY3RFeHRlbmRzUmVjdXJzaXZlKG1peGluR3JvdXAsIG1peGluc0dyb3VwcyA9IFtdKXtcblx0XHRpZighKG1peGluR3JvdXAgaW5zdGFuY2VvZiBBcnJheSkpe1xuXHRcdFx0bWl4aW5Hcm91cCA9IFttaXhpbkdyb3VwXTtcblx0XHR9XG5cdFx0bWl4aW5zR3JvdXBzLnB1c2gobWl4aW5Hcm91cCk7XG5cdFx0bWl4aW5Hcm91cC5mb3JFYWNoKG1peGluID0+IHtcblx0XHRcdGNvbnN0IHJ1bGUgPSB0aGlzLnJ1bGVzW21peGluXTtcblx0XHRcdGlmKHJ1bGUgJiYgcnVsZS5taXhpbnMpe1xuXHRcdFx0XHR0aGlzLnJ1bGVDb2xsZWN0RXh0ZW5kc1JlY3Vyc2l2ZShydWxlLm1peGlucywgbWl4aW5zR3JvdXBzKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRyZXR1cm4gbWl4aW5zR3JvdXBzO1xuXHR9XG5cblx0cmVnaXN0ZXJDbGFzcyhuYW1lLCB0YXJnZXQpe1xuXHRcdGlmKCF0aGlzLnJ1bGVzW25hbWVdKXtcblx0XHRcdHRoaXMucnVsZXNbbmFtZV0gPSB7fTtcblx0XHR9XG5cdFx0dGhpcy5ydWxlc1tuYW1lXS5jbGFzc0RlZiA9IHRhcmdldDtcblx0fVxuXHRcblx0bWVyZ2VSdWxlKGV4dGVuZFJ1bGUsIHJ1bGUsIG1lcmdlRXh0ZW5kID0gdHJ1ZSl7XG5cdFx0bGV0IHtcblx0XHRcdHNoYXJlZCxcblx0XHRcdGluaGVyaXRJbnN0YW5jZU9mLFxuXHRcdFx0aW5oZXJpdFByb3RvdHlwZSxcblx0XHRcdGluaGVyaXRNaXhpbnMsXG5cdFx0XHRpbnN0YW5jZU9mLFxuXHRcdFx0cGFyYW1zLFxuXHRcdFx0Y2FsbHMsXG5cdFx0XHRsYXp5Q2FsbHMsXG5cdFx0XHRzdWJzdGl0dXRpb25zLFxuXHRcdFx0c2hhcmVkSW5UcmVlLFxuXHRcdFx0Y2xhc3NEZWYsXG5cdFx0XHRzaW5nbGV0b24sXG5cdFx0XHRhc3luY1Jlc29sdmUsXG5cdFx0XHRhc3luY0NhbGxzU2VyaWUsXG5cdFx0XHRhc3luY0NhbGxzUGFyYW1zU2VyaWUsXG5cdFx0XHRkZWNvcmF0b3IsXG5cdFx0XHRhdXRvbG9hZCxcblx0XHRcdHBhdGgsXG5cdFx0fSA9IHJ1bGU7XG5cdFx0aWYoY2xhc3NEZWYgIT09IHVuZGVmaW5lZCl7XG5cdFx0XHRleHRlbmRSdWxlLmNsYXNzRGVmID0gY2xhc3NEZWY7XG5cdFx0fVxuXHRcdGlmKHNoYXJlZCAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUuc2hhcmVkID0gc2hhcmVkO1xuXHRcdH1cblx0XHRpZihpbmhlcml0SW5zdGFuY2VPZiAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUuaW5oZXJpdEluc3RhbmNlT2YgPSBpbmhlcml0SW5zdGFuY2VPZjtcblx0XHR9XG5cdFx0aWYoaW5oZXJpdFByb3RvdHlwZSAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUuaW5oZXJpdFByb3RvdHlwZSA9IGluaGVyaXRQcm90b3R5cGU7XG5cdFx0fVxuXHRcdGlmKGRlY29yYXRvciAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUuZGVjb3JhdG9yID0gZGVjb3JhdG9yO1xuXHRcdH1cblx0XHRpZihhdXRvbG9hZCAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUuYXV0b2xvYWQgPSBhdXRvbG9hZDtcblx0XHR9XG5cdFx0aWYocGF0aCAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUucGF0aCA9IHBhdGg7XG5cdFx0fVxuXHRcdGlmKGluc3RhbmNlT2YgIT09IHVuZGVmaW5lZCl7XG5cdFx0XHRleHRlbmRSdWxlLmluc3RhbmNlT2YgPSBpbnN0YW5jZU9mO1xuXHRcdH1cblx0XHRpZihhc3luY1Jlc29sdmUgIT09IHVuZGVmaW5lZCl7XG5cdFx0XHRleHRlbmRSdWxlLmFzeW5jUmVzb2x2ZSA9IGFzeW5jUmVzb2x2ZTtcblx0XHR9XG5cdFx0aWYoYXN5bmNDYWxsc1NlcmllICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5hc3luY0NhbGxzU2VyaWUgPSBhc3luY0NhbGxzU2VyaWU7XG5cdFx0fVxuXHRcdGlmKGFzeW5jQ2FsbHNQYXJhbXNTZXJpZSAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUuYXN5bmNDYWxsc1BhcmFtc1NlcmllID0gYXN5bmNDYWxsc1BhcmFtc1NlcmllO1xuXHRcdH1cblxuXHRcdGlmKGNhbGxzICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5jYWxscyA9ICggZXh0ZW5kUnVsZS5jYWxscyB8fCBbXSApLmNvbmNhdChjYWxscyk7XG5cdFx0fVxuXHRcdGlmKGxhenlDYWxscyAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUubGF6eUNhbGxzID0gKCBleHRlbmRSdWxlLmxhenlDYWxscyB8fCBbXSApLmNvbmNhdChsYXp5Q2FsbHMpO1xuXHRcdH1cblx0XHRcblx0XHRpZihtZXJnZUV4dGVuZCAmJiBpbmhlcml0TWl4aW5zICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5pbmhlcml0TWl4aW5zID0gaW5oZXJpdE1peGlucy5zbGljZSgwKTtcblx0XHR9XG5cdFx0XG5cdFx0aWYocGFyYW1zICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5wYXJhbXMgPSBwYXJhbXM7XG5cdFx0fVxuXHRcdGlmKHN1YnN0aXR1dGlvbnMgIT09IHVuZGVmaW5lZCl7XG5cdFx0XHRpZighZXh0ZW5kUnVsZS5zdWJzdGl0dXRpb25zKXtcblx0XHRcdFx0ZXh0ZW5kUnVsZS5zdWJzdGl0dXRpb25zID0ge307XG5cdFx0XHR9XG5cdFx0XHRPYmplY3QuYXNzaWduKGV4dGVuZFJ1bGUuc3Vic3RpdHV0aW9ucywgc3Vic3RpdHV0aW9ucyk7XG5cdFx0fVxuXHRcdGlmKHNoYXJlZEluVHJlZSAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGlmKCFleHRlbmRSdWxlLnNoYXJlZEluVHJlZSl7XG5cdFx0XHRcdGV4dGVuZFJ1bGUuc2hhcmVkSW5UcmVlID0gW107XG5cdFx0XHR9XG5cdFx0XHRleHRlbmRSdWxlLnNoYXJlZEluVHJlZSA9IEFycmF5LmZyb20oIG5ldyBTZXQoWy4uLmV4dGVuZFJ1bGUuc2hhcmVkSW5UcmVlLCAuLi5zaGFyZWRJblRyZWVdKSApO1xuXHRcdH1cblx0XHRleHRlbmRSdWxlLnNpbmdsZXRvbiA9IHNpbmdsZXRvbjtcblx0XHRyZXR1cm4gZXh0ZW5kUnVsZTtcblx0fVxuXHRcblx0bWVyZ2VSdWxlcyhleHRlbmRSdWxlcywgcnVsZXMpe1xuXHRcdE9iamVjdC5rZXlzKHJ1bGVzKS5mb3JFYWNoKChrKT0+e1xuXHRcdFx0aWYoIWV4dGVuZFJ1bGVzW2tdKXtcblx0XHRcdFx0ZXh0ZW5kUnVsZXNba10gPSB7fTtcblx0XHRcdH1cblx0XHRcdGV4dGVuZFJ1bGVzW2tdID0gdGhpcy5tZXJnZVJ1bGUoZXh0ZW5kUnVsZXNba10sIHJ1bGVzW2tdKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gZXh0ZW5kUnVsZXM7XG5cdH1cblx0XG5cdHJ1bkNhbGxzKGNhbGxzLCBpbnN0YW5jZSwgcnVsZSwgc2hhcmVkSW5zdGFuY2VzKXtcblx0XHRsZXQgaGFzQXN5bmM7XG5cdFx0XG5cdFx0bGV0IGNhbGxlcnMgPSBjYWxscy5tYXAoKGMpPT4gKCk9PiB7XG5cdFx0XHRcblx0XHRcdGlmKHR5cGVvZiBjID09ICdmdW5jdGlvbicpe1xuXHRcdFx0XHRjID0gW2NdO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgWyBtZXRob2QsIHBhcmFtcyA9IFtdLCBhc3luY1Jlc29sdmUgPSBydWxlLmFzeW5jUmVzb2x2ZSAgXSA9IGM7XG5cdFx0XHRcblx0XHRcdGNvbnN0IG1ha2VDYWxsID0gKHJlc29sdmVkUGFyYW1zKT0+e1x0XHRcdFx0XG5cdFx0XHRcdHJlc29sdmVkUGFyYW1zID0gc3RydWN0dXJlZFJlc29sdmVQYXJhbXNJbnRlcmZhY2UocGFyYW1zLCByZXNvbHZlZFBhcmFtcyk7XG5cdFx0XHRcdGxldCBjYWxsUmV0dXJuO1xuXHRcdFx0XHRpZih0eXBlb2YgbWV0aG9kID09ICdmdW5jdGlvbicpe1xuXHRcdFx0XHRcdGNhbGxSZXR1cm4gPSBtZXRob2QoaW5zdGFuY2UsIC4uLnJlc29sdmVkUGFyYW1zKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNle1xuXHRcdFx0XHRcdGNhbGxSZXR1cm4gPSBpbnN0YW5jZVttZXRob2RdKC4uLnJlc29sdmVkUGFyYW1zKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZighYXN5bmNSZXNvbHZlKXtcblx0XHRcdFx0XHRjYWxsUmV0dXJuID0gbmV3IFN5bmMoY2FsbFJldHVybik7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGNhbGxSZXR1cm47XG5cdFx0XHR9O1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRjb25zdCByZXNvbHZlZFBhcmFtcyA9IHBhcmFtcy5tYXAocGFyYW0gPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5nZXRQYXJhbShwYXJhbSwgcnVsZSwgc2hhcmVkSW5zdGFuY2VzLCB0aGlzLmRlZmF1bHRSdWxlVmFyKTtcblx0XHRcdH0pO1xuXHRcdFx0aWYoc3RydWN0dXJlZEhhc1Byb21pc2UocGFyYW1zLCByZXNvbHZlZFBhcmFtcywgdGhpcy5Qcm9taXNlSW50ZXJmYWNlKSl7XG5cdFx0XHRcdGhhc0FzeW5jID0gdHJ1ZTtcblx0XHRcdFx0cmV0dXJuICgpID0+IHN0cnVjdHVyZWRQcm9taXNlQWxsUmVjdXJzaXZlKHBhcmFtcywgcmVzb2x2ZWRQYXJhbXMsIHRoaXMuUHJvbWlzZUludGVyZmFjZSwgdGhpcy5Qcm9taXNlRmFjdG9yeSkudGhlbihyZXNvbHZlZFBhcmFtcz0+e1xuXHRcdFx0XHRcdHJldHVybiBtYWtlQ2FsbChyZXNvbHZlZFBhcmFtcyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZXtcblx0XHRcdFx0cmV0dXJuICgpID0+IG1ha2VDYWxsKHJlc29sdmVkUGFyYW1zKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdH0pO1xuXHRcdFxuXHRcdGNvbnN0IGFzeW5jQ2FsbHNQYXJhbXNTZXJpZSA9IHJ1bGUuYXN5bmNDYWxsc1BhcmFtc1NlcmllO1xuXHRcdGNvbnN0IGFzeW5jQ2FsbHNTZXJpZSA9IHJ1bGUuYXN5bmNDYWxsc1NlcmllIHx8IGFzeW5jQ2FsbHNQYXJhbXNTZXJpZTtcblx0XHRcblx0XHRjb25zdCBtYWtlQ2FsbHMgPSAoY2FsbGVycyk9Pntcblx0XHRcdFxuXHRcdFx0bGV0IGNhbGxlcnNSZXR1cm47XG5cdFx0XHRpZihoYXNBc3luYyl7XG5cdFx0XHRcdGlmKGFzeW5jQ2FsbHNTZXJpZSl7XG5cdFx0XHRcdFx0Y2FsbGVyc1JldHVybiA9IG1hcFNlcmllKGNhbGxlcnMsIChjYWxsZXIpPT57XG5cdFx0XHRcdFx0XHRyZXR1cm4gY2FsbGVyKCk7XG5cdFx0XHRcdFx0fSwgdGhpcy5Qcm9taXNlSW50ZXJmYWNlLCB0aGlzLlByb21pc2VGYWN0b3J5KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNle1xuXHRcdFx0XHRcdGNhbGxlcnNSZXR1cm4gPSB0aGlzLlByb21pc2VGYWN0b3J5LmFsbCggY2FsbGVycy5tYXAoKGNhbGxlcik9Pntcblx0XHRcdFx0XHRcdHJldHVybiBjYWxsZXIoKTtcblx0XHRcdFx0XHR9KSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbHNle1xuXHRcdFx0XHRjYWxsZXJzUmV0dXJuID0gY2FsbGVycy5tYXAoKGNhbGxlcik9Pntcblx0XHRcdFx0XHRjb25zdCBjYWxsZXJSZXR1cm4gPSBjYWxsZXIoKTtcblx0XHRcdFx0XHRpZihjYWxsZXJSZXR1cm4gaW5zdGFuY2VvZiB0aGlzLlByb21pc2VJbnRlcmZhY2Upe1xuXHRcdFx0XHRcdFx0aGFzQXN5bmMgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gY2FsbGVyUmV0dXJuO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0aWYoaGFzQXN5bmMpe1xuXHRcdFx0XHRcdGNhbGxlcnNSZXR1cm4gPSB0aGlzLlByb21pc2VGYWN0b3J5LmFsbChjYWxsZXJzUmV0dXJuKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNhbGxlcnNSZXR1cm47XG5cdFx0fVxuXHRcdFxuXHRcdGlmKGFzeW5jQ2FsbHNQYXJhbXNTZXJpZSl7XG5cdFx0XHRjYWxsZXJzID0gbWFwU2VyaWUoY2FsbGVycywgKGNhbGxlcik9Pntcblx0XHRcdFx0Y2FsbGVyID0gY2FsbGVyKCkoKTtcblx0XHRcdFx0cmV0dXJuIGNhbGxlcjtcblx0XHRcdH0sIHRoaXMuUHJvbWlzZUludGVyZmFjZSwgdGhpcy5Qcm9taXNlRmFjdG9yeSk7XG5cdFx0XHRyZXR1cm4gY2FsbGVycy50aGVuKCBjYWxsZXJzID0+IG1ha2VDYWxscyggY2FsbGVycy5tYXAoY2FsbGVyID0+ICgpID0+IGNhbGxlciApICkgKSA7XG5cdFx0fVxuXHRcdGVsc2V7XG5cdFx0XHRjYWxsZXJzID0gY2FsbGVycy5tYXAoKGNhbGxlcik9PmNhbGxlcigpKTtcblx0XHRcdHJldHVybiBtYWtlQ2FsbHMoY2FsbGVycyk7XG5cdFx0fVxuXHRcdFxuXHR9XG5cdFx0XG5cdGRlZmluZVN5bSh0YXJnZXQsIHN5bW5hbWUsIHZhbHVlKXtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBzeW1uYW1lLCB7XG5cdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHR9KTtcblx0fVxuXHRcblx0cmVzb2x2ZUluc3RhbmNlT2Yoc3RyLCBzdGFjayA9IFtdLCByZXF1aXJlZCA9IHRydWUpe1xuXHRcdGlmKHR5cGVvZiBzdHIgPT0gJ3N0cmluZycgfHwgdHlwZW9mIHN0ciA9PSAnc3ltYm9sJyl7XG5cdFx0XHRpZihzdGFjay5pbmRleE9mKHN0cikhPT0tMSl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignQ3ljbGljIGludGVyZmFjZSBkZWZpbml0aW9uIGVycm9yIGluICcrSlNPTi5zdHJpbmdpZnkoc3RhY2suY29uY2F0KHN0ciksbnVsbCwyKSk7XG5cdFx0XHR9XG5cdFx0XHRzdGFjay5wdXNoKHN0cik7XG5cdFx0XHRjb25zdCBydWxlID0gdGhpcy5ydWxlc1tzdHJdO1xuXHRcdFx0bGV0IHJlc29sdmVkID0gZmFsc2U7XG5cdFx0XHRpZihydWxlKXtcblx0XHRcdFx0aWYocnVsZS5pbnN0YW5jZU9mKXtcblx0XHRcdFx0XHRyZXNvbHZlZCA9IHJ1bGUuaW5zdGFuY2VPZjtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmKHJ1bGUuY2xhc3NEZWYpe1xuXHRcdFx0XHRcdHJlc29sdmVkID0gcnVsZS5jbGFzc0RlZjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYoIXJlc29sdmVkKXtcblx0XHRcdFx0aWYoIXJlcXVpcmVkKXtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdJbnRlcmZhY2UgZGVmaW5pdGlvbiAnKyh0eXBlb2Ygc3RyID09ICdzeW1ib2wnID8gJ3N5bWJvbCcgOiAnXCInK3N0cisnXCInICkrJyBub3QgZm91bmQsIGRpIGxvYWQgc3RhY2s6ICcrSlNPTi5zdHJpbmdpZnkoc3RhY2ssIG51bGwsIDIpKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLnJlc29sdmVJbnN0YW5jZU9mKHJlc29sdmVkLCBzdGFjaywgcmVxdWlyZWQpO1xuXHRcdH1cblx0XHRzdGFjay5wdXNoKHN0cik7XG5cdFx0cmV0dXJuIHN0cjtcblx0fVxuXHRcblx0ZmFjdG9yeShjYWxsYmFjayl7XG5cdFx0cmV0dXJuIG5ldyB0aGlzLmRlZmF1bHRGYWN0b3J5KGNhbGxiYWNrKTtcblx0fVxuXHR2YWx1ZUZhY3RvcnkoY2FsbGJhY2spe1xuXHRcdHJldHVybiBuZXcgVmFsdWVGYWN0b3J5KGNhbGxiYWNrKTtcblx0fVxuXHRjbGFzc0ZhY3RvcnkoY2FsbGJhY2spe1xuXHRcdHJldHVybiBuZXcgQ2xhc3NGYWN0b3J5KGNhbGxiYWNrKTtcblx0fVxuXHRpbnRlcmZhY2UobmFtZSl7XG5cdFx0cmV0dXJuIG5ldyBJbnRlcmZhY2UobmFtZSk7XG5cdH1cblx0aW50ZXJmYWNlQ2xhc3MobmFtZSxpbnRlcmZhY2VDbGFzcyl7XG5cdFx0cmV0dXJuIG5ldyBJbnRlcmZhY2VDbGFzcyhuYW1lLCBpbnRlcmZhY2VDbGFzcyk7XG5cdH1cblx0dmFsdWUodmFsdWUpe1xuXHRcdHJldHVybiBuZXcgVmFsdWUodmFsdWUpO1xuXHR9XG5cdHJlcXVpcmUoZGVwKXtcblx0XHRyZXR1cm4gbmV3IFJlcXVpcmUoZGVwKTtcblx0fVxuXHRcblx0ZGVwZW5kZW5jeShkZXApe1xuXHRcdHJldHVybiBuZXcgRGVwZW5kZW5jeShkZXApO1xuXHR9XG5cdFxuXHRjbGFzc0RlZihjYWxsYmFjayl7XG5cdFx0cmV0dXJuIG5ldyBDbGFzc0RlZihjYWxsYmFjayk7XG5cdH1cbn1cbiJdfQ==