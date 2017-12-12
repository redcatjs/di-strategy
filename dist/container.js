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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250YWluZXIuanMiXSwibmFtZXMiOlsiaW50ZXJmYWNlUHJvdG90eXBlRGVmYXVsdCIsIkNvbnRhaW5lciIsImludGVyZmFjZVByb3RvdHlwZSIsInJ1bGVzIiwicnVsZXNEZWZhdWx0IiwiYXV0b2xvYWRGYWlsT25NaXNzaW5nRmlsZSIsImRlcGVuZGVuY2llcyIsImF1dG9sb2FkRXh0ZW5zaW9ucyIsImF1dG9sb2FkUGF0aFJlc29sdmVyIiwicGF0aCIsImRlZmF1bHRWYXIiLCJkZWZhdWx0UnVsZVZhciIsImRlZmF1bHREZWNvcmF0b3JWYXIiLCJkZWZhdWx0QXJnc1ZhciIsImRlZmF1bHRGYWN0b3J5IiwiZGVmYXVsdEZ1bmN0aW9uV3JhcHBlciIsImdsb2JhbEtleSIsInByb21pc2VGYWN0b3J5IiwicHJvbWlzZUludGVyZmFjZXMiLCJ1bmRlZmluZWQiLCJzeW1DbGFzc05hbWUiLCJzeW1JbnRlcmZhY2VzIiwicHJvdmlkZXJSZWdpc3RyeSIsImluc3RhbmNlUmVnaXN0cnkiLCJyZXF1aXJlcyIsInNldEF1dG9sb2FkUGF0aFJlc29sdmVyIiwibG9hZEV4dGVuc2lvblJlZ2V4IiwiUmVnRXhwIiwiam9pbiIsImFsbG93ZWREZWZhdWx0VmFycyIsInZhbGlkYXRlRGVmYXVsdFZhciIsImluZGV4T2YiLCJ1bnNoaWZ0IiwiUHJvbWlzZUludGVyZmFjZSIsIlByb21pc2VGYWN0b3J5Iiwic2V0R2xvYmFsS2V5IiwiaW5oZXJpdEluc3RhbmNlT2YiLCJpbmhlcml0UHJvdG90eXBlIiwiaW5oZXJpdE1peGlucyIsInNoYXJlZCIsImluc3RhbmNlT2YiLCJjbGFzc0RlZiIsInBhcmFtcyIsImNhbGxzIiwibGF6eUNhbGxzIiwic3Vic3RpdHV0aW9ucyIsInNoYXJlZEluVHJlZSIsInNpbmdsZXRvbiIsImFzeW5jUmVzb2x2ZSIsImFzeW5jQ2FsbHNTZXJpZSIsImRlY29yYXRvciIsImF1dG9sb2FkIiwic2V0UnVsZXNEZWZhdWx0IiwibG9hZERlcGVuZGVuY2llcyIsImFkZFJ1bGVzIiwia2V5IiwidmFsdWUiLCJmb3JFYWNoIiwiY29uZmlnIiwiayIsIkVycm9yIiwiYWxpYXNNYXAiLCJyZWFsUGF0aCIsImFsaWFzIiwic3Vic3RyIiwibGVuZ3RoIiwiZ2xvYmFsIiwiZGlycyIsImNvbnRleHQiLCJkaXJLZXkiLCJnZXREZXBlbmRlbmN5Iiwia2V5cyIsImZpbGVuYW1lIiwibGFzdEluZGV4T2YiLCJzcGxpdCIsInBvcCIsImFkZFJ1bGUiLCJpbnRlcmZhY2VOYW1lIiwicnVsZXNEZXRlY3RMYXp5TG9hZCIsInJ1bGUiLCJkZXRlY3RMYXp5TG9hZCIsIm1lcmdlUnVsZSIsInByb2Nlc3NSdWxlIiwiZ2V0Q2xhc3NEZWYiLCJyZWdpc3RlclJlcXVpcmUiLCJwcm9wZXJ0eSIsImxvYWRQYXRocyIsInJlZ2lzdGVyUmVxdWlyZU1hcCIsInJ1bGVMYXp5TG9hZCIsInN0YWNrIiwiY2FsbFZhbCIsIm1ldGhvZCIsInJ1bGVDaGVja0N5Y2xpY0xvYWQiLCJwdXNoIiwiY29uY2F0Iiwic29tZSIsInBhcmFtIiwidiIsIndyYXBWYXJUeXBlIiwiZ2V0TmFtZSIsInJlc29sdmVJbnN0YW5jZU9mIiwicGFyYW1SdWxlIiwiZ2V0UnVsZSIsImN5Y2xpYyIsImNhbGxWIiwiY2xhc3NEZWZOYW1lIiwiY2xhc3NEZWZpbml0aW9uIiwiZ2V0IiwiYXJncyIsInZhbGlkYXRlQXV0b2xvYWRGaWxlTmFtZSIsInJlcSIsInJlcXVpcmVEZXAiLCJuYW1lIiwicmVxdWlyZVBhdGgiLCJmb3VuZCIsInBhdGhGcmFnbWVudHMiLCJzaGlmdCIsImV4dCIsImRlcEV4aXN0cyIsInJlcXVpcmVkIiwiZGVwUmVxdWlyZSIsInN1YktleSIsInIiLCJkZWZhdWx0IiwiZ2V0UnVsZUJhc2UiLCJyZWdpc3RlckNsYXNzIiwiY2xhc3NOYW1lIiwidHlwZXMiLCJ0YXJnZXQiLCJkZWZpbmVTeW0iLCJtYXAiLCJ0eXBlIiwiQm9vbGVhbiIsImludGVyZmFjZURlZiIsInNoYXJlZEluc3RhbmNlcyIsInByb3ZpZGVyIiwiY29uc3RydWN0b3IiLCJtYWtlUHJvdmlkZXIiLCJzaGFyZUludGVyZmFjZSIsInJlc29sdmVkUGFyYW1zIiwiaW5kZXgiLCJnZXRQYXJhbSIsIm1ha2VJbnN0YW5jZSIsImluc3RhbmNlIiwiZmluYWxpemVJbnN0YW5jZUNyZWF0aW9uIiwicmVnaXN0ZXJJbnN0YW5jZSIsImNhbGxzUmV0dXJuIiwicnVuQ2FsbHMiLCJ0aGVuIiwiZ2V0U3Vic3RpdHV0aW9uUGFyYW0iLCJjYWxsYmFjayIsImdldFZhbHVlIiwicmVxdWlyZSIsInNsaWNlIiwiaW5zdGFuY2VSdWxlIiwibyIsInJlc29sdmVGdW5jdGlvbiIsImlzSW50ZXJmYWNlUHJvdG90eXBlIiwiaW50ZXJmYWNlIiwidG9TdHJpbmciLCJwcm90b3R5cGUiLCJydWxlQmFzZSIsImZ1bGxTdGFjayIsInJldmVyc2UiLCJjIiwicGFyZW50UHJvdG8iLCJhZGQiLCJtaXhpbnNSdWxlIiwibWl4aW5zR3JvdXAiLCJtaXhpbnNHcm91cHMiLCJydWxlQ29sbGVjdEV4dGVuZHNSZWN1cnNpdmUiLCJtaXhpbkdyb3VwIiwibWl4aW4iLCJBcnJheSIsIm1peGlucyIsImV4dGVuZFJ1bGUiLCJtZXJnZUV4dGVuZCIsImFzeW5jQ2FsbHNQYXJhbXNTZXJpZSIsImV4dGVuZFJ1bGVzIiwiaGFzQXN5bmMiLCJjYWxsZXJzIiwibWFrZUNhbGwiLCJjYWxsUmV0dXJuIiwibWFrZUNhbGxzIiwiY2FsbGVyc1JldHVybiIsImNhbGxlciIsImFsbCIsImNhbGxlclJldHVybiIsInN5bW5hbWUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwic3RyIiwicmVzb2x2ZWQiLCJkZXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7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SSxHQUFQLEtBQWMsUUFBZCxHQUF5QixRQUF6QixHQUFvQyxNQUFJQSxHQUFKLEdBQVEsR0FBckUsSUFBMkUsNkJBQTNFLEdBQXlHLHdCQUFldEcsS0FBZixFQUFzQixJQUF0QixFQUE0QixDQUE1QixDQUFuSCxDQUFOO0FBQ0E7O0FBQ0QsZUFBTyxLQUFLVyxpQkFBTCxDQUF1QjRGLFFBQXZCLEVBQWlDdkcsS0FBakMsRUFBd0M4QixRQUF4QyxDQUFQO0FBQ0E7O0FBQ0Q5QixZQUFNSSxJQUFOLENBQVdrRyxHQUFYO0FBQ0EsYUFBT0EsR0FBUDtBQUNBOzs7NEJBRU96QyxRLEVBQVM7QUFDaEIsYUFBTyxJQUFJLEtBQUt4SSxjQUFULENBQXdCd0ksUUFBeEIsQ0FBUDtBQUNBOzs7aUNBQ1lBLFEsRUFBUztBQUNyQixhQUFPLDBCQUFpQkEsUUFBakIsQ0FBUDtBQUNBOzs7aUNBQ1lBLFEsRUFBUztBQUNyQixhQUFPLDBCQUFpQkEsUUFBakIsQ0FBUDtBQUNBOzs7K0JBQ1N0QyxJLEVBQUs7QUFDZCxhQUFPLHdCQUFjQSxJQUFkLENBQVA7QUFDQTs7OzBCQUNLeEQsTSxFQUFNO0FBQ1gsYUFBTyxvQkFBVUEsTUFBVixDQUFQO0FBQ0E7Ozs0QkFDT3lJLEcsRUFBSTtBQUNYLGFBQU8scUJBQVlBLEdBQVosQ0FBUDtBQUNBOzs7K0JBRVVBLEcsRUFBSTtBQUNkLGFBQU8sd0JBQWVBLEdBQWYsQ0FBUDtBQUNBOzs7NkJBRVEzQyxRLEVBQVM7QUFDakIsYUFBTyxzQkFBYUEsUUFBYixDQUFQO0FBQ0EiLCJmaWxlIjoiY29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1hcFNlcmllIGZyb20gJy4vbWFwU2VyaWUnXG5cbmltcG9ydCBWYXIgZnJvbSAnLi92YXInXG5pbXBvcnQgRmFjdG9yeSBmcm9tICcuL2ZhY3RvcnknXG5pbXBvcnQgVmFsdWVGYWN0b3J5IGZyb20gJy4vdmFsdWVGYWN0b3J5J1xuaW1wb3J0IENsYXNzRmFjdG9yeSBmcm9tICcuL2NsYXNzRmFjdG9yeSdcbmltcG9ydCBWYWx1ZSBmcm9tICcuL3ZhbHVlJ1xuaW1wb3J0IEludGVyZmFjZSBmcm9tICcuL2ludGVyZmFjZSdcbmltcG9ydCBSZXF1aXJlIGZyb20gJy4vcmVxdWlyZSdcblxuaW1wb3J0IFNoYXJlZEluc3RhbmNlIGZyb20gJy4vc2hhcmVkSW5zdGFuY2UnXG5cbmltcG9ydCBDbGFzc0RlZiBmcm9tICcuL2NsYXNzRGVmJ1xuXG5pbXBvcnQgRGVwZW5kZW5jeSBmcm9tICcuL2RlcGVuZGVuY3knXG5cbmltcG9ydCBtYWtlQ29udGFpbmVyQXBpIGZyb20gJy4vbWFrZUNvbnRhaW5lckFwaSdcblxuaW1wb3J0IFN5bmMgZnJvbSAnLi9zeW5jJ1xuaW1wb3J0IHN0cnVjdHVyZWRIYXNQcm9taXNlIGZyb20gJy4vc3RydWN0dXJlZEhhc1Byb21pc2UnXG5pbXBvcnQgc3RydWN0dXJlZFByb21pc2VBbGxSZWN1cnNpdmUgZnJvbSAnLi9zdHJ1Y3R1cmVkUHJvbWlzZUFsbFJlY3Vyc2l2ZSdcbmltcG9ydCBzdHJ1Y3R1cmVkUmVzb2x2ZVBhcmFtc0ludGVyZmFjZSBmcm9tICcuL3N0cnVjdHVyZWRSZXNvbHZlUGFyYW1zSW50ZXJmYWNlJ1xuXG5pbXBvcnQgcHJvbWlzZUludGVyZmFjZSBmcm9tICcuL3Byb21pc2VJbnRlcmZhY2UnXG5cbmxldCBpbnRlcmZhY2VQcm90b3R5cGVEZWZhdWx0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWluZXJ7XG5cdFxuXHRzdGF0aWMgc2V0SW50ZXJmYWNlUHJvdG90eXBlRGVmYXVsdChpbnRlcmZhY2VQcm90b3R5cGUpe1xuXHRcdGludGVyZmFjZVByb3RvdHlwZURlZmF1bHQgPSBpbnRlcmZhY2VQcm90b3R5cGU7XG5cdH1cblx0c3RhdGljIGdldEludGVyZmFjZVByb3RvdHlwZURlZmF1bHQoaW50ZXJmYWNlUHJvdG90eXBlKXtcblx0XHRyZXR1cm4gaW50ZXJmYWNlUHJvdG90eXBlRGVmYXVsdDtcblx0fVxuXHRcblx0Y29uc3RydWN0b3Ioe1xuXHRcdHJ1bGVzID0ge30sXG5cdFx0XG5cdFx0cnVsZXNEZWZhdWx0ID0ge30sXG5cdFx0XG5cdFx0YXV0b2xvYWRGYWlsT25NaXNzaW5nRmlsZSA9ICdwYXRoJyxcblx0XHRkZXBlbmRlbmNpZXMgPSB7fSxcblx0XHRhdXRvbG9hZEV4dGVuc2lvbnMgPSBbJ2pzJ10sXG5cdFx0YXV0b2xvYWRQYXRoUmVzb2x2ZXIgPSAocGF0aCk9PnBhdGgsXG5cdFx0XG5cdFx0ZGVmYXVsdFZhciA9ICdpbnRlcmZhY2UnLFxuXHRcdGRlZmF1bHRSdWxlVmFyID0gbnVsbCxcblx0XHRkZWZhdWx0RGVjb3JhdG9yVmFyID0gbnVsbCxcblx0XHRkZWZhdWx0QXJnc1ZhciA9IG51bGwsXG5cdFx0XG5cdFx0ZGVmYXVsdEZhY3RvcnkgPSBWYWx1ZUZhY3RvcnksXG5cdFx0ZGVmYXVsdEZ1bmN0aW9uV3JhcHBlciA9IENsYXNzRmFjdG9yeSxcblx0XHRcblx0XHRnbG9iYWxLZXkgPSBmYWxzZSxcblx0XHRcblx0XHRwcm9taXNlRmFjdG9yeSA9IFByb21pc2UsXG5cdFx0cHJvbWlzZUludGVyZmFjZXMgPSBbIFByb21pc2UgXSxcblx0XHRcblx0XHRpbnRlcmZhY2VQcm90b3R5cGUgPSB1bmRlZmluZWQsXG5cdFx0XG5cdH0gPSB7fSl7XG5cdFx0XG5cdFx0dGhpcy5zeW1DbGFzc05hbWUgPSBTeW1ib2woJ2NsYXNzTmFtZScpO1xuXHRcdHRoaXMuc3ltSW50ZXJmYWNlcyA9IFN5bWJvbCgndHlwZXMnKTtcblx0XHR0aGlzLnByb3ZpZGVyUmVnaXN0cnkgPSB7fTtcblx0XHR0aGlzLmluc3RhbmNlUmVnaXN0cnkgPSB7fTtcblx0XHRcblx0XHR0aGlzLnJlcXVpcmVzID0ge307XG5cdFx0dGhpcy5hdXRvbG9hZEV4dGVuc2lvbnMgPSBhdXRvbG9hZEV4dGVuc2lvbnM7XG5cdFx0dGhpcy5hdXRvbG9hZEZhaWxPbk1pc3NpbmdGaWxlID0gYXV0b2xvYWRGYWlsT25NaXNzaW5nRmlsZTtcblx0XHR0aGlzLmRlcGVuZGVuY2llcyA9IGRlcGVuZGVuY2llcztcblx0XHR0aGlzLnNldEF1dG9sb2FkUGF0aFJlc29sdmVyKGF1dG9sb2FkUGF0aFJlc29sdmVyKTtcblx0XHR0aGlzLmxvYWRFeHRlbnNpb25SZWdleCA9IG5ldyBSZWdFeHAoJ1xcLignK3RoaXMuYXV0b2xvYWRFeHRlbnNpb25zLmpvaW4oJ3wnKSsnKSQnKTtcblx0XHRcblx0XHR0aGlzLmRlZmF1bHRSdWxlVmFyID0gZGVmYXVsdFJ1bGVWYXIgfHwgZGVmYXVsdFZhcjtcblx0XHR0aGlzLmRlZmF1bHREZWNvcmF0b3JWYXIgPSBkZWZhdWx0RGVjb3JhdG9yVmFyIHx8IGRlZmF1bHRWYXI7XG5cdFx0dGhpcy5kZWZhdWx0QXJnc1ZhciA9IGRlZmF1bHRBcmdzVmFyIHx8IGRlZmF1bHRWYXI7XG5cdFx0XG5cdFx0dGhpcy5kZWZhdWx0RmFjdG9yeSA9IGRlZmF1bHRGYWN0b3J5O1xuXHRcdHRoaXMuZGVmYXVsdEZ1bmN0aW9uV3JhcHBlciA9IGRlZmF1bHRGdW5jdGlvbldyYXBwZXI7XG5cdFx0XG5cdFx0dGhpcy5hbGxvd2VkRGVmYXVsdFZhcnMgPSBbJ2ludGVyZmFjZScsJ3ZhbHVlJ107XG5cdFx0dGhpcy52YWxpZGF0ZURlZmF1bHRWYXIoZGVmYXVsdFZhciwgJ2RlZmF1bHRWYXInKTtcblx0XHR0aGlzLnZhbGlkYXRlRGVmYXVsdFZhcih0aGlzLmRlZmF1bHRSdWxlVmFyLCAnZGVmYXVsdFJ1bGVWYXInKTtcblx0XHR0aGlzLnZhbGlkYXRlRGVmYXVsdFZhcih0aGlzLmRlZmF1bHREZWNvcmF0b3JWYXIsICdkZWZhdWx0RGVjb3JhdG9yVmFyJyk7XG5cdFx0dGhpcy52YWxpZGF0ZURlZmF1bHRWYXIodGhpcy5kZWZhdWx0QXJnc1ZhciwgJ2RlZmF1bHRBcmdzVmFyJyk7XG5cdFx0XG5cdFx0aWYocHJvbWlzZUludGVyZmFjZXMuaW5kZXhPZihwcm9taXNlRmFjdG9yeSkgPT09IC0xKXtcblx0XHRcdHByb21pc2VJbnRlcmZhY2VzLnVuc2hpZnQocHJvbWlzZUZhY3RvcnkpO1xuXHRcdH1cblx0XHR0aGlzLlByb21pc2VJbnRlcmZhY2UgPSBwcm9taXNlSW50ZXJmYWNlKHByb21pc2VJbnRlcmZhY2VzKTtcblx0XHR0aGlzLlByb21pc2VGYWN0b3J5ID0gcHJvbWlzZUZhY3Rvcnk7XG5cdFx0XG5cdFx0dGhpcy5pbnRlcmZhY2VQcm90b3R5cGUgPSBpbnRlcmZhY2VQcm90b3R5cGUgfHwgaW50ZXJmYWNlUHJvdG90eXBlRGVmYXVsdDtcblx0XHRcblx0XHRpZihnbG9iYWxLZXkpe1xuXHRcdFx0dGhpcy5zZXRHbG9iYWxLZXkoZ2xvYmFsS2V5KTtcblx0XHR9XG5cdFx0XG5cdFx0dGhpcy5ydWxlc0RlZmF1bHQgPSB7XG5cdFx0XHRcblx0XHRcdGluaGVyaXRJbnN0YW5jZU9mOiB0cnVlLFxuXHRcdFx0aW5oZXJpdFByb3RvdHlwZTogZmFsc2UsXG5cdFx0XHRpbmhlcml0TWl4aW5zOiBbXSxcblx0XHRcdFxuXHRcdFx0c2hhcmVkOiBmYWxzZSxcblx0XHRcdGluc3RhbmNlT2Y6IHVuZGVmaW5lZCxcblx0XHRcdGNsYXNzRGVmOiB1bmRlZmluZWQsXG5cdFx0XHRwYXJhbXM6IHVuZGVmaW5lZCxcblx0XHRcdFxuXHRcdFx0Y2FsbHM6IFtdLFxuXHRcdFx0bGF6eUNhbGxzOiBbXSxcblx0XHRcdFxuXHRcdFx0c3Vic3RpdHV0aW9uczogW10sXG5cdFx0XHRzaGFyZWRJblRyZWU6IFtdLFxuXHRcdFx0XG5cdFx0XHRzaW5nbGV0b246IHVuZGVmaW5lZCxcblx0XHRcdFxuXHRcdFx0YXN5bmNSZXNvbHZlOiBmYWxzZSxcblx0XHRcdGFzeW5jQ2FsbHNTZXJpZTogZmFsc2UsXG5cdFx0XHRcblx0XHRcdGRlY29yYXRvcjogZmFsc2UsXG5cdFx0XHRcblx0XHRcdGF1dG9sb2FkOiBmYWxzZSxcblx0XHRcdHBhdGg6IHVuZGVmaW5lZCxcblx0XHRcdFxuXHRcdH07XG5cdFx0dGhpcy5zZXRSdWxlc0RlZmF1bHQocnVsZXNEZWZhdWx0KTtcblx0XHR0aGlzLnJ1bGVzID0ge307XG5cdFx0XG5cdFx0dGhpcy5sb2FkRGVwZW5kZW5jaWVzKCk7XG5cdFx0dGhpcy5hZGRSdWxlcyhydWxlcyk7XG5cdFx0XG5cdH1cblx0XG5cdGNvbmZpZyhrZXksIHZhbHVlKXtcblx0XHRpZih0eXBlb2Yga2V5ID09PSAnb2JqZWN0Jyl7XG5cdFx0XHRPYmplY3Qua2V5cyhrZXkpLmZvckVhY2goaz0+dGhpcy5jb25maWcoaywga2V5W2tdKSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHN3aXRjaChrZXkpe1xuXHRcdFx0Y2FzZSAnYXV0b2xvYWRGYWlsT25NaXNzaW5nRmlsZSAnOlxuXHRcdFx0Y2FzZSAnYXV0b2xvYWRFeHRlbnNpb25zJzpcblx0XHRcdGNhc2UgJ2RlZmF1bHRWYXInOlxuXHRcdFx0Y2FzZSAnZGVmYXVsdFJ1bGVWYXInOlxuXHRcdFx0Y2FzZSAnZGVmYXVsdERlY29yYXRvclZhcic6XG5cdFx0XHRjYXNlICdkZWZhdWx0QXJnc1Zhcic6XG5cdFx0XHRjYXNlICdpbnRlcmZhY2VQcm90b3R5cGUnOlxuXHRcdFx0XHR0aGlzW2tleV0gPSB2YWx1ZTtcblx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnZ2xvYmFsa2V5Jzpcblx0XHRcdFx0dGhpcy5zZXRHbG9iYWxLZXkodmFsdWUpO1xuXHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdhdXRvbG9hZFBhdGhSZXNvbHZlcic6XG5cdFx0XHRcdHRoaXMuc2V0QXV0b2xvYWRQYXRoUmVzb2x2ZXIodmFsdWUpO1xuXHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdydWxlc0RlZmF1bHQnOlxuXHRcdFx0XHR0aGlzLnNldFJ1bGVzRGVmYXVsdCh2YWx1ZSk7XG5cdFx0XHRicmVhaztcblx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIGNvbmZpZyBrZXkgJytrZXkpO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cdFxuXHRzZXRSdWxlc0RlZmF1bHQocnVsZXNEZWZhdWx0KXtcblx0XHR0aGlzLnJ1bGVzRGVmYXVsdCA9IHtcblx0XHRcdC4uLnRoaXMucnVsZXNEZWZhdWx0LFxuXHRcdFx0Li4ucnVsZXNEZWZhdWx0LFxuXHRcdH07XG5cdH1cblx0XG5cdHNldEF1dG9sb2FkUGF0aFJlc29sdmVyKGF1dG9sb2FkUGF0aFJlc29sdmVyKXtcblx0XHRcblx0XHRpZih0eXBlb2YgYXV0b2xvYWRQYXRoUmVzb2x2ZXIgPT0gJ29iamVjdCcpe1xuXHRcdFx0XG5cdFx0XHRjb25zdCBhbGlhc01hcCA9IGF1dG9sb2FkUGF0aFJlc29sdmVyO1xuXHRcdFx0YXV0b2xvYWRQYXRoUmVzb2x2ZXIgPSAocGF0aCk9Pntcblx0XHRcdFx0T2JqZWN0LmtleXMoYWxpYXNNYXApLmZvckVhY2goYWxpYXM9Pntcblx0XHRcdFx0XHRjb25zdCByZWFsUGF0aCA9IGFsaWFzTWFwW2FsaWFzXTtcblx0XHRcdFx0XHRpZihwYXRoID09IGFsaWFzKXtcblx0XHRcdFx0XHRcdHBhdGggPSByZWFsUGF0aDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSBpZihwYXRoLnN1YnN0cigwLGFsaWFzLmxlbmd0aCsxKT09YWxpYXMrJy8nKXtcblx0XHRcdFx0XHRcdHBhdGggPSByZWFsUGF0aCtwYXRoLnN1YnN0cihhbGlhcy5sZW5ndGgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybiBwYXRoO1xuXHRcdFx0fTtcblx0XHR9XG5cdFx0XG5cdFx0dGhpcy5hdXRvbG9hZFBhdGhSZXNvbHZlciA9IGF1dG9sb2FkUGF0aFJlc29sdmVyO1xuXHR9XG5cdFxuXHRzZXRHbG9iYWxLZXkoZ2xvYmFsS2V5KXtcblx0XHRpZihnbG9iYWxLZXk9PT10cnVlKXtcblx0XHRcdGdsb2JhbEtleSA9ICdkaSc7XG5cdFx0fVxuXHRcdGdsb2JhbFtnbG9iYWxLZXldID0gbWFrZUNvbnRhaW5lckFwaSh0aGlzKTtcblx0fVxuXHRcblx0bG9hZFBhdGhzKGRpcnMpe1xuXHRcdE9iamVjdC5rZXlzKGRpcnMpLmZvckVhY2goZGlyS2V5PT57XG5cdFx0XHRjb25zdCBjb250ZXh0ID0gZGlyc1tkaXJLZXldO1xuXHRcdFx0XG5cdFx0XHRpZihjb250ZXh0IGluc3RhbmNlb2YgRGVwZW5kZW5jeSl7XG5cdFx0XHRcdHRoaXMucmVxdWlyZXNbZGlyS2V5XSA9IGNvbnRleHQuZ2V0RGVwZW5kZW5jeSgpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XHRcdGNvbnRleHQua2V5cygpLmZvckVhY2goKGZpbGVuYW1lKT0+e1xuXHRcdFx0XHRcblx0XHRcdFx0bGV0IGtleSA9IGZpbGVuYW1lO1xuXHRcdFx0XHRpZihrZXkuc3Vic3RyKDAsMik9PScuLycpe1xuXHRcdFx0XHRcdGtleSA9IGtleS5zdWJzdHIoMik7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdGtleSA9IGRpcktleSsnLycra2V5LnN1YnN0cigwLCBrZXkubGFzdEluZGV4T2YoJy4nKSB8fCBrZXkubGVuZ3RoKTtcblx0XHRcdFx0aWYoa2V5LnNwbGl0KCcvJykucG9wKCk9PSdpbmRleCcpe1xuXHRcdFx0XHRcdGtleSA9IGtleS5zdWJzdHIoMCwga2V5Lmxhc3RJbmRleE9mKCcvJykpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMucmVxdWlyZXNba2V5XSA9IGNvbnRleHQoZmlsZW5hbWUpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblx0XG5cdFxuXHRhZGRSdWxlcyhydWxlcyl7XG5cdFx0aWYodHlwZW9mIHJ1bGVzID09ICdmdW5jdGlvbicpe1xuXHRcdFx0cnVsZXMgPSBydWxlcyh0aGlzKTtcblx0XHR9XG5cdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocnVsZXMpLmZvckVhY2goaW50ZXJmYWNlTmFtZSA9PiB0aGlzLmFkZFJ1bGUoaW50ZXJmYWNlTmFtZSwgcnVsZXNbaW50ZXJmYWNlTmFtZV0sIGZhbHNlKSk7XG5cdFx0T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhydWxlcykuZm9yRWFjaChpbnRlcmZhY2VOYW1lID0+IHRoaXMuYWRkUnVsZShpbnRlcmZhY2VOYW1lLCBydWxlc1tpbnRlcmZhY2VOYW1lXSwgZmFsc2UpKTtcblx0XHR0aGlzLnJ1bGVzRGV0ZWN0TGF6eUxvYWQoKTtcblx0fVxuXHRhZGRSdWxlKGludGVyZmFjZU5hbWUsIHJ1bGUsIGRldGVjdExhenlMb2FkID0gdHJ1ZSl7XG5cdFx0aWYodHlwZW9mIHJ1bGUgPT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRydWxlID0gcnVsZSh0aGlzKTtcblx0XHR9XG5cdFx0XG5cdFx0aWYodGhpcy5ydWxlc1tpbnRlcmZhY2VOYW1lXSA9PT0gdW5kZWZpbmVkKXtcblx0XHRcdHRoaXMucnVsZXNbaW50ZXJmYWNlTmFtZV0gPSB0aGlzLm1lcmdlUnVsZSh7fSwgdGhpcy5ydWxlc0RlZmF1bHQpO1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLnJ1bGVzW2ludGVyZmFjZU5hbWVdID0gdGhpcy5tZXJnZVJ1bGUodGhpcy5ydWxlc1tpbnRlcmZhY2VOYW1lXSwgcnVsZSk7XG5cdFx0dGhpcy5wcm9jZXNzUnVsZShpbnRlcmZhY2VOYW1lKTtcblx0XHRcblx0XHRydWxlID0gdGhpcy5ydWxlc1tpbnRlcmZhY2VOYW1lXTtcblx0XHRcblx0XHRsZXQgeyBjbGFzc0RlZiB9ID0gcnVsZTtcblx0XHRpZihjbGFzc0RlZil7XG5cdFx0XHRpZihjbGFzc0RlZiBpbnN0YW5jZW9mIENsYXNzRGVmKXtcblx0XHRcdFx0Y2xhc3NEZWYgPSBjbGFzc0RlZi5nZXRDbGFzc0RlZigpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5yZWdpc3RlclJlcXVpcmUoaW50ZXJmYWNlTmFtZSwgY2xhc3NEZWYpO1xuXHRcdH1cblx0XHRcblx0XHRpZihkZXRlY3RMYXp5TG9hZCl7XG5cdFx0XHR0aGlzLnJ1bGVzRGV0ZWN0TGF6eUxvYWQoKTtcblx0XHR9XG5cdFx0XG5cdH1cblx0XG5cdHZhbGlkYXRlRGVmYXVsdFZhcih2YWx1ZSwgcHJvcGVydHkpe1xuXHRcdGlmKHRoaXMuYWxsb3dlZERlZmF1bHRWYXJzLmluZGV4T2YodmFsdWUpPT09LTEpe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIHR5cGUgXCInK3ZhbHVlKydcIiBzcGVjaWZpZWQgZm9yICcrcHJvcGVydHkrJywgcG9zc2libGVzIHZhbHVlczogJyt0aGlzLmFsbG93ZWREZWZhdWx0VmFycy5qb2luKCcgfCAnKSk7XG5cdFx0fVxuXHR9XG5cdFxuXHRsb2FkRGVwZW5kZW5jaWVzKCl7XG5cdFx0dGhpcy5sb2FkUGF0aHModGhpcy5kZXBlbmRlbmNpZXMpO1xuXHRcdHRoaXMucmVnaXN0ZXJSZXF1aXJlTWFwKHRoaXMucmVxdWlyZXMpO1xuXHR9XG5cdHJ1bGVzRGV0ZWN0TGF6eUxvYWQoKXtcblx0XHRPYmplY3Qua2V5cyh0aGlzLnJ1bGVzKS5mb3JFYWNoKGtleT0+e1xuXHRcdFx0dGhpcy5ydWxlTGF6eUxvYWQoa2V5KTtcblx0XHR9KTtcblx0fVxuXHRcblx0cnVsZUxhenlMb2FkKGtleSwgc3RhY2s9W10pe1xuXHRcdGNvbnN0IGNhbGxzID0gW107XG5cdFx0Y29uc3QgbGF6eUNhbGxzID0gW107XG5cdFx0XG5cdFx0Y29uc3QgcnVsZSA9IHRoaXMucnVsZXNba2V5XTtcblx0XHRcblx0XHRpZighcnVsZS5jYWxscyl7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdFxuXHRcdHJ1bGUuY2FsbHMuZm9yRWFjaChjYWxsVmFsID0+IHtcblx0XHRcdGlmKHR5cGVvZiBjYWxsVmFsID09ICdmdW5jdGlvbicpe1xuXHRcdFx0XHRjYWxsVmFsID0gW2NhbGxWYWxdO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgW21ldGhvZCwgcGFyYW1zID0gW11dID0gY2FsbFZhbDtcblx0XHRcdGlmKCB0aGlzLnJ1bGVDaGVja0N5Y2xpY0xvYWQocGFyYW1zLCBbIGtleSBdKSApe1xuXHRcdFx0XHRsYXp5Q2FsbHMucHVzaChjYWxsVmFsKTtcblx0XHRcdH1cblx0XHRcdGVsc2V7XG5cdFx0XHRcdGNhbGxzLnB1c2goY2FsbFZhbCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0XG5cdFx0cnVsZS5jYWxscyA9IGNhbGxzO1xuXHRcdHJ1bGUubGF6eUNhbGxzID0gKHJ1bGUubGF6eUNhbGxzIHx8IFtdKS5jb25jYXQobGF6eUNhbGxzKTtcblx0fVxuXHRydWxlQ2hlY2tDeWNsaWNMb2FkKHBhcmFtcywgc3RhY2s9W10pe1x0XHRcblx0XHRyZXR1cm4gT2JqZWN0LmtleXMocGFyYW1zKS5zb21lKGs9Pntcblx0XHRcdGNvbnN0IHBhcmFtID0gcGFyYW1zW2tdO1xuXHRcdFx0Y29uc3QgdiA9IHRoaXMud3JhcFZhclR5cGUocGFyYW0sIHRoaXMuZGVmYXVsdFJ1bGVWYXIpO1xuXHRcdFx0aWYodiBpbnN0YW5jZW9mIEludGVyZmFjZSl7XG5cdFx0XHRcdGNvbnN0IGludGVyZmFjZU5hbWUgPSB2LmdldE5hbWUoKTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmKCF0aGlzLnJlc29sdmVJbnN0YW5jZU9mKGludGVyZmFjZU5hbWUsIFtdLCBmYWxzZSkpe1xuXHRcdFx0XHRcdC8vbm90IGZvdW5kLCB1bmFibGUgdG8gY2hlY2sgbm93XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRjb25zdCBwYXJhbVJ1bGUgPSB0aGlzLmdldFJ1bGUoaW50ZXJmYWNlTmFtZSk7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZihzdGFjay5pbmRleE9mKGludGVyZmFjZU5hbWUpIT09LTEpe1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRzdGFjay5wdXNoKGludGVyZmFjZU5hbWUpO1xuXHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRsZXQgY3ljbGljO1xuXG5cdFx0XHRcdGlmKHBhcmFtUnVsZS5wYXJhbXMpe1xuXHRcdFx0XHRcdGN5Y2xpYyA9IHRoaXMucnVsZUNoZWNrQ3ljbGljTG9hZChwYXJhbVJ1bGUucGFyYW1zLCBzdGFjayk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZighY3ljbGljKXtcblx0XHRcdFx0XHRjeWNsaWMgPSBwYXJhbVJ1bGUuY2FsbHMuc29tZShjYWxsVj0+e1xuXHRcdFx0XHRcdFx0Y29uc3QgW21ldGhvZCwgcGFyYW1zID0gW10gXSA9IGNhbGxWO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMucnVsZUNoZWNrQ3ljbGljTG9hZChwYXJhbXMsIHN0YWNrKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0cmV0dXJuIGN5Y2xpYztcblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0XHRpZih0eXBlb2YgdiA9PSAnb2JqZWN0JyAmJiB2ICE9PSBudWxsICYmICEodiBpbnN0YW5jZW9mIFZhcikpe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5ydWxlQ2hlY2tDeWNsaWNMb2FkKHYsIHN0YWNrKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXHRcblx0cHJvY2Vzc1J1bGUoa2V5LCBzdGFjayA9IFtdKXtcblx0XHRpZih0aGlzLnJ1bGVzW2tleV0gPT09IHVuZGVmaW5lZCl7XG5cdFx0XHR0aGlzLnJ1bGVzW2tleV0gPSB0aGlzLm1lcmdlUnVsZSh7fSwgdGhpcy5ydWxlc0RlZmF1bHQpO1xuXHRcdH1cblx0XHRjb25zdCBydWxlID0gdGhpcy5ydWxlc1trZXldO1xuXHRcdGlmKHJ1bGUuaW5zdGFuY2VPZil7XG5cdFx0XHRpZihzdGFjay5pbmRleE9mKGtleSkhPT0tMSl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignQ3ljbGljIGludGVyZmFjZSBkZWZpbml0aW9uIGVycm9yIGluICcrSlNPTi5zdHJpbmdpZnkoc3RhY2suY29uY2F0KGtleSksbnVsbCwyKSk7XG5cdFx0XHR9XG5cdFx0XHRzdGFjay5wdXNoKGtleSk7XG5cdFx0XHR0aGlzLnByb2Nlc3NSdWxlKHJ1bGUuaW5zdGFuY2VPZiwgc3RhY2spO1xuXHRcdH1cblx0XHRpZihydWxlLnNpbmdsZXRvbil7XG5cdFx0XHRydWxlLmNsYXNzRGVmID0gZnVuY3Rpb24oKXtcblx0XHRcdFx0cmV0dXJuIHJ1bGUuc2luZ2xldG9uO1xuXHRcdFx0fTtcblx0XHR9XG5cdFx0aWYodHlwZW9mIHJ1bGUuY2xhc3NEZWYgPT0gJ3N0cmluZycpe1xuXHRcdFx0Y29uc3QgY2xhc3NEZWZOYW1lID0gcnVsZS5jbGFzc0RlZjtcblx0XHRcdHJ1bGUuY2xhc3NEZWYgPSAoLi4uYXJncyk9Pntcblx0XHRcdFx0Y29uc3QgY2xhc3NEZWZpbml0aW9uID0gdGhpcy5nZXQoY2xhc3NEZWZOYW1lKTtcblx0XHRcdFx0cmV0dXJuIG5ldyBjbGFzc0RlZmluaXRpb24oLi4uYXJncyk7XG5cdFx0XHR9O1xuXHRcdH1cblx0XHRpZih0aGlzLnZhbGlkYXRlQXV0b2xvYWRGaWxlTmFtZShrZXkpKXtcblx0XHRcdGlmKHJ1bGUuYXV0b2xvYWQpe1xuXHRcdFx0XHRjb25zdCBwYXRoID0gcnVsZS5wYXRoIHx8IGtleTtcblx0XHRcdFx0Y29uc3QgcmVxID0gdGhpcy5yZXF1aXJlRGVwKGtleSwgcGF0aCk7XG5cdFx0XHRcdGlmKHJlcSl7XG5cdFx0XHRcdFx0dGhpcy5yZWdpc3RlclJlcXVpcmUoa2V5LCByZXEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdFxuXHR2YWxpZGF0ZUF1dG9sb2FkRmlsZU5hbWUobmFtZSl7XG5cdFx0aWYodHlwZW9mIG5hbWUgPT0gJ3N0cmluZycgJiYgbmFtZS5zdWJzdHIoMCwxKT09PScjJyl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdFxuXHRyZXF1aXJlRGVwKGtleSwgcmVxdWlyZVBhdGgpe1xuXHRcdGlmKHRoaXMucmVxdWlyZXNba2V5XSl7XG5cdFx0XHRyZXR1cm4gdGhpcy5yZXF1aXJlc1trZXldO1xuXHRcdH1cblx0XHRcblx0XHRyZXF1aXJlUGF0aCA9IHRoaXMuYXV0b2xvYWRQYXRoUmVzb2x2ZXIocmVxdWlyZVBhdGgpO1xuXHRcdFxuXHRcdGNvbnN0IGZvdW5kID0gdGhpcy5hdXRvbG9hZEV4dGVuc2lvbnMuY29uY2F0KCcnKS5zb21lKCBleHQgPT4ge1xuXHRcdFx0XG5cdFx0XHRjb25zdCBwYXRoRnJhZ21lbnRzID0gcmVxdWlyZVBhdGguc3BsaXQoJzonKTtcblx0XHRcdFxuXHRcdFx0XG5cdFx0XHRsZXQgcGF0aCA9IHBhdGhGcmFnbWVudHMuc2hpZnQoKTtcblx0XHRcdGlmKGV4dCl7XG5cdFx0XHRcdHBhdGggKz0gJy4nK2V4dDtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0XG5cdFx0XHRpZih0aGlzLmRlcEV4aXN0cyhwYXRoKSl7XG5cdFx0XHRcdGxldCByZXF1aXJlZCA9IHRoaXMuZGVwUmVxdWlyZShwYXRoKTtcblx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0aWYocGF0aEZyYWdtZW50cy5sZW5ndGgpe1xuXHRcdFx0XHRcdHBhdGhGcmFnbWVudHMuZm9yRWFjaCggc3ViS2V5ID0+IHtcblx0XHRcdFx0XHRcdGlmKHR5cGVvZiByZXF1aXJlZCAhPT0gJ3VuZGVmaW5lZCcgJiYgcmVxdWlyZWQgIT09IG51bGwpe1xuXHRcdFx0XHRcdFx0XHRyZXF1aXJlZCA9IHJlcXVpcmVkW3N1YktleV07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdFxuXHRcdFx0XHR0aGlzLnJlcXVpcmVzW2tleV0gPSByZXF1aXJlZDtcblx0XHRcdFx0XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fSk7XG5cdFx0aWYoICEgZm91bmQgJiYgKCh0aGlzLmF1dG9sb2FkRmFpbE9uTWlzc2luZ0ZpbGU9PT0ncGF0aCcgJiYgcmVxdWlyZVBhdGgpIHx8IHRoaXMuYXV0b2xvYWRGYWlsT25NaXNzaW5nRmlsZT09PXRydWUpICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgZXhwZWN0ZWQgZGVwZW5kZW5jeSBpbmplY3Rpb24gZmlsZSBcIicrcmVxdWlyZVBhdGgrJ1wiJyk7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiB0aGlzLnJlcXVpcmVzW2tleV07XG5cdH1cblx0XG5cdFxuXHRyZWdpc3RlclJlcXVpcmVNYXAocmVxdWlyZXMpe1xuXHRcdE9iamVjdC5rZXlzKHJlcXVpcmVzKS5mb3JFYWNoKChuYW1lKT0+e1xuXHRcdFx0dGhpcy5yZWdpc3RlclJlcXVpcmUobmFtZSxyZXF1aXJlc1tuYW1lXSk7XG5cdFx0fSk7XG5cdH1cblx0cmVnaXN0ZXJSZXF1aXJlKG5hbWUscil7XG5cdFx0aWYodHlwZW9mIHIgPT0gJ29iamVjdCcgJiYgdHlwZW9mIHIuZGVmYXVsdCA9PSAnZnVuY3Rpb24nKXtcblx0XHRcdHIgPSByLmRlZmF1bHQ7XG5cdFx0fVxuXHRcdGlmKHR5cGVvZiByICE9PSAnZnVuY3Rpb24nKXtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgcnVsZSA9IHRoaXMuZ2V0UnVsZUJhc2UobmFtZSk7XG5cdFx0aWYocnVsZS5kZWNvcmF0b3IgJiYgclt0aGlzLnN5bUNsYXNzTmFtZV0pe1xuXHRcdFx0ciA9IGNsYXNzIGV4dGVuZHMgcnt9O1xuXHRcdH1cblx0XHRcblx0XHRpZihydWxlLmRlY29yYXRvcil7XG5cdFx0XHR0aGlzLmRlY29yYXRvcihuYW1lKShyKTtcblx0XHR9XG5cdFx0ZWxzZXtcblx0XHRcdHRoaXMucmVnaXN0ZXJDbGFzcyhuYW1lLCByKTtcblx0XHR9XG5cdH1cblx0XG5cdFxuXHRkZWNvcmF0b3IoY2xhc3NOYW1lLCB0eXBlcyA9IFtdKXtcblx0XHRyZXR1cm4gKHRhcmdldCk9Pntcblx0XHRcdFxuXHRcdFx0dGhpcy5kZWZpbmVTeW0odGFyZ2V0LCB0aGlzLnN5bUNsYXNzTmFtZSwgY2xhc3NOYW1lKTtcblx0XHRcdFxuXHRcdFx0dGhpcy5yZWdpc3RlckNsYXNzKGNsYXNzTmFtZSwgdGFyZ2V0KTtcblx0XHRcdFxuXHRcdFx0aWYodHlwZW9mIHR5cGVzID09ICdmdW5jdGlvbicpe1xuXHRcdFx0XHR0eXBlcyA9IHR5cGVzKCk7XG5cdFx0XHR9XG5cdFx0XHR0eXBlcyA9IHR5cGVzLm1hcCh0eXBlID0+IHRoaXMud3JhcFZhclR5cGUodHlwZSwgdGhpcy5kZWZhdWx0RGVjb3JhdG9yVmFyKSk7XG5cdFx0XHRcblx0XHRcdGlmICh0YXJnZXRbdGhpcy5zeW1JbnRlcmZhY2VzXSkge1xuXHRcdFx0XHR0eXBlcyA9IHR5cGVzLmNvbmNhdCh0YXJnZXRbdGhpcy5zeW1JbnRlcmZhY2VzXSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmRlZmluZVN5bSh0YXJnZXQsIHRoaXMuc3ltSW50ZXJmYWNlcywgdHlwZXMpO1xuXHRcdFx0XG5cdFx0XHRyZXR1cm4gdGFyZ2V0O1xuXHRcdH07XG5cdH1cblx0XG5cdGV4aXN0cyhuYW1lKXtcblx0XHRyZXR1cm4gQm9vbGVhbih0aGlzLnJ1bGVzW25hbWVdKTtcblx0fVxuXHRcblx0Z2V0KGludGVyZmFjZURlZiwgYXJncywgc2hhcmVkSW5zdGFuY2VzID0ge30sIHN0YWNrID0gW10pe1xuXHRcdHJldHVybiB0aGlzLnByb3ZpZGVyKGludGVyZmFjZURlZikoYXJncywgc2hhcmVkSW5zdGFuY2VzLCBzdGFjayk7XG5cdH1cblx0cHJvdmlkZXIoaW50ZXJmYWNlTmFtZSl7XG5cdFx0XG5cdFx0aWYodHlwZW9mIGludGVyZmFjZU5hbWUgPT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRpbnRlcmZhY2VOYW1lID0gaW50ZXJmYWNlTmFtZVt0aGlzLnN5bUNsYXNzTmFtZV07XG5cdFx0XHRpZighaW50ZXJmYWNlTmFtZSl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignVW5yZWdpc3RyZWQgY2xhc3MgJytpbnRlcmZhY2VOYW1lLmNvbnN0cnVjdG9yLm5hbWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHRpZihpbnRlcmZhY2VOYW1lIGluc3RhbmNlb2YgSW50ZXJmYWNlKXtcblx0XHRcdGludGVyZmFjZU5hbWUgPSBpbnRlcmZhY2VOYW1lLmdldE5hbWUoKTtcblx0XHR9XG5cdFx0XG5cdFx0XG5cdFx0aWYoIXRoaXMucHJvdmlkZXJSZWdpc3RyeVtpbnRlcmZhY2VOYW1lXSl7XG5cdFx0XHR0aGlzLnByb3ZpZGVyUmVnaXN0cnlbaW50ZXJmYWNlTmFtZV0gPSB0aGlzLm1ha2VQcm92aWRlcihpbnRlcmZhY2VOYW1lKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMucHJvdmlkZXJSZWdpc3RyeVtpbnRlcmZhY2VOYW1lXTtcblx0fVxuXHRcblx0bWFrZVByb3ZpZGVyKGludGVyZmFjZU5hbWUpe1xuXHRcdGNvbnN0IHJ1bGUgPSB0aGlzLmdldFJ1bGUoaW50ZXJmYWNlTmFtZSk7XG5cdFx0Y29uc3QgY2xhc3NEZWYgPSB0aGlzLnJlc29sdmVJbnN0YW5jZU9mKGludGVyZmFjZU5hbWUpO1xuXHRcdHJldHVybiAoYXJncywgc2hhcmVkSW5zdGFuY2VzLCBzdGFjayk9Pntcblx0XHRcdFxuXHRcdFx0Ly9jaGVjayBmb3Igc2hhcmVkIGFmdGVyIHBhcmFtcyBsb2FkXG5cdFx0XHRpZih0aGlzLmluc3RhbmNlUmVnaXN0cnlbaW50ZXJmYWNlTmFtZV0pe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZVJlZ2lzdHJ5W2ludGVyZmFjZU5hbWVdO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRzaGFyZWRJbnN0YW5jZXMgPSBPYmplY3QuYXNzaWduKHt9LCBzaGFyZWRJbnN0YW5jZXMpO1xuXHRcdFx0cnVsZS5zaGFyZWRJblRyZWUuZm9yRWFjaChzaGFyZUludGVyZmFjZSA9PiB7XG5cdFx0XHRcdGlmKCFzaGFyZWRJbnN0YW5jZXNbc2hhcmVJbnRlcmZhY2VdKXtcblx0XHRcdFx0XHRzaGFyZWRJbnN0YW5jZXNbc2hhcmVJbnRlcmZhY2VdID0gbmV3IFNoYXJlZEluc3RhbmNlKHNoYXJlSW50ZXJmYWNlLCB0aGlzKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRcblx0XHRcdGxldCBwYXJhbXM7XG5cdFx0XHRsZXQgZGVmYXVsdFZhcjtcblx0XHRcdGlmKGFyZ3Mpe1xuXHRcdFx0XHRwYXJhbXMgPSBhcmdzO1xuXHRcdFx0XHRkZWZhdWx0VmFyID0gdGhpcy5kZWZhdWx0QXJnc1Zhcjtcblx0XHRcdH1cblx0XHRcdGVsc2V7XG5cdFx0XHRcdHBhcmFtcyA9IHJ1bGUucGFyYW1zIHx8IGNsYXNzRGVmW3RoaXMuc3ltSW50ZXJmYWNlc10gfHwgW107XG5cdFx0XHRcdGRlZmF1bHRWYXIgPSB0aGlzLmRlZmF1bHRSdWxlVmFyO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRjb25zdCByZXNvbHZlZFBhcmFtcyA9IHBhcmFtcy5tYXAoKGludGVyZmFjZURlZiwgaW5kZXgpPT57XG5cdFx0XHRcdHJldHVybiB0aGlzLmdldFBhcmFtKGludGVyZmFjZURlZiwgcnVsZSwgc2hhcmVkSW5zdGFuY2VzLCBkZWZhdWx0VmFyLCBpbmRleCwgc3RhY2spO1xuXHRcdFx0fSk7XG5cdFx0XHRcblx0XHRcdC8vcmVjaGVjayBmb3Igc2hhcmVkIGFmdGVyIHBhcmFtcyBsb2FkXG5cdFx0XHRpZih0aGlzLmluc3RhbmNlUmVnaXN0cnlbaW50ZXJmYWNlTmFtZV0pe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZVJlZ2lzdHJ5W2ludGVyZmFjZU5hbWVdO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRjb25zdCBtYWtlSW5zdGFuY2UgPSAocmVzb2x2ZWRQYXJhbXMpPT57XG5cdFx0XHRcdFxuXHRcdFx0XHRyZXNvbHZlZFBhcmFtcyA9IHN0cnVjdHVyZWRSZXNvbHZlUGFyYW1zSW50ZXJmYWNlKHBhcmFtcywgcmVzb2x2ZWRQYXJhbXMpO1xuXHRcdFx0XHRcblx0XHRcdFx0Y29uc3QgaW5zdGFuY2UgPSBuZXcgY2xhc3NEZWYoLi4ucmVzb2x2ZWRQYXJhbXMpO1xuXHRcdFx0XHRcblx0XHRcdFx0Y29uc3QgZmluYWxpemVJbnN0YW5jZUNyZWF0aW9uID0gKCk9Pntcblx0XHRcdFx0XHRpZihydWxlLnNoYXJlZCl7XG5cdFx0XHRcdFx0XHR0aGlzLnJlZ2lzdGVySW5zdGFuY2UoaW50ZXJmYWNlTmFtZSwgaW5zdGFuY2UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHRjb25zdCBjYWxsc1JldHVybiA9IHRoaXMucnVuQ2FsbHMocnVsZS5sYXp5Q2FsbHMsIGluc3RhbmNlLCBydWxlLCBzaGFyZWRJbnN0YW5jZXMpO1xuXHRcdFx0XHRcdGlmKGNhbGxzUmV0dXJuIGluc3RhbmNlb2YgdGhpcy5Qcm9taXNlSW50ZXJmYWNlKXtcblx0XHRcdFx0XHRcdHJldHVybiBjYWxsc1JldHVybi50aGVuKCgpPT5pbnN0YW5jZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHJldHVybiBpbnN0YW5jZTtcblx0XHRcdFx0fTtcblx0XHRcdFx0XG5cdFx0XHRcdGNvbnN0IGNhbGxzUmV0dXJuID0gdGhpcy5ydW5DYWxscyhydWxlLmNhbGxzLCBpbnN0YW5jZSwgcnVsZSwgc2hhcmVkSW5zdGFuY2VzKTtcblx0XHRcdFx0aWYoY2FsbHNSZXR1cm4gaW5zdGFuY2VvZiB0aGlzLlByb21pc2VJbnRlcmZhY2Upe1xuXHRcdFx0XHRcdHJldHVybiBjYWxsc1JldHVybi50aGVuKCgpPT5maW5hbGl6ZUluc3RhbmNlQ3JlYXRpb24oKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdHJldHVybiBmaW5hbGl6ZUluc3RhbmNlQ3JlYXRpb24oKTtcblx0XHRcdH07XG5cdFx0XHRpZihzdHJ1Y3R1cmVkSGFzUHJvbWlzZShwYXJhbXMsIHJlc29sdmVkUGFyYW1zLCB0aGlzLlByb21pc2VJbnRlcmZhY2UpKXtcblx0XHRcdFx0cmV0dXJuIHN0cnVjdHVyZWRQcm9taXNlQWxsUmVjdXJzaXZlKHBhcmFtcywgcmVzb2x2ZWRQYXJhbXMsIHRoaXMuUHJvbWlzZUludGVyZmFjZSwgdGhpcy5Qcm9taXNlRmFjdG9yeSApLnRoZW4ocmVzb2x2ZWRQYXJhbXM9Pntcblx0XHRcdFx0XHRyZXR1cm4gbWFrZUluc3RhbmNlKHJlc29sdmVkUGFyYW1zKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHJldHVybiBtYWtlSW5zdGFuY2UocmVzb2x2ZWRQYXJhbXMpO1xuXHRcdH07XG5cdH1cblx0XG5cdGdldFN1YnN0aXR1dGlvblBhcmFtKGludGVyZmFjZURlZiwgcnVsZSwgaW5kZXgpe1xuXHRcdGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLndyYXBWYXJUeXBlKHJ1bGUuc3Vic3RpdHV0aW9ucywgdGhpcy5kZWZhdWx0UnVsZVZhcik7XG5cdFx0XG5cdFx0aWYodHlwZW9mIGluZGV4ICE9PSAndW5kZWZpbmVkJyAmJiBzdWJzdGl0dXRpb25zW2luZGV4XSl7XG5cdFx0XHRpbnRlcmZhY2VEZWYgPSBzdWJzdGl0dXRpb25zW2luZGV4XTtcblx0XHRcdGludGVyZmFjZURlZiA9IHRoaXMud3JhcFZhclR5cGUoaW50ZXJmYWNlRGVmLCB0aGlzLmRlZmF1bHRSdWxlVmFyLCB0cnVlKTtcblx0XHR9XG5cdFx0XG5cdFx0aWYoaW50ZXJmYWNlRGVmIGluc3RhbmNlb2YgSW50ZXJmYWNlKXtcblx0XHRcdGNvbnN0IGludGVyZmFjZU5hbWUgPSBpbnRlcmZhY2VEZWYuZ2V0TmFtZSgpO1xuXHRcdFx0aWYoc3Vic3RpdHV0aW9uc1tpbnRlcmZhY2VOYW1lXSl7XG5cdFx0XHRcdGludGVyZmFjZURlZiA9IHN1YnN0aXR1dGlvbnNbaW50ZXJmYWNlTmFtZV07XG5cdFx0XHRcdGludGVyZmFjZURlZiA9IHRoaXMud3JhcFZhclR5cGUoaW50ZXJmYWNlRGVmLCB0aGlzLmRlZmF1bHRSdWxlVmFyLCB0cnVlKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdH1cblx0XHRyZXR1cm4gaW50ZXJmYWNlRGVmO1xuXHR9XG5cdGdldFBhcmFtKGludGVyZmFjZURlZiwgcnVsZSwgc2hhcmVkSW5zdGFuY2VzLCBkZWZhdWx0VmFyID0gJ2ludGVyZmFjZScsIGluZGV4ID0gdW5kZWZpbmVkLCBzdGFjayA9IFtdKXtcblx0XHRcblx0XHRpbnRlcmZhY2VEZWYgPSB0aGlzLndyYXBWYXJUeXBlKGludGVyZmFjZURlZiwgZGVmYXVsdFZhcik7XG5cdFx0XG5cdFx0aW50ZXJmYWNlRGVmID0gdGhpcy5nZXRTdWJzdGl0dXRpb25QYXJhbShpbnRlcmZhY2VEZWYsIHJ1bGUsIGluZGV4KTtcblx0XHRcblx0XHRpZihpbnRlcmZhY2VEZWYgaW5zdGFuY2VvZiBGYWN0b3J5KXtcblx0XHRcdHJldHVybiBpbnRlcmZhY2VEZWYuY2FsbGJhY2soc2hhcmVkSW5zdGFuY2VzKTtcblx0XHR9XG5cdFx0aWYoaW50ZXJmYWNlRGVmIGluc3RhbmNlb2YgVmFsdWUpe1xuXHRcdFx0cmV0dXJuIGludGVyZmFjZURlZi5nZXRWYWx1ZSgpO1xuXHRcdH1cblx0XHRpZihpbnRlcmZhY2VEZWYgaW5zdGFuY2VvZiBSZXF1aXJlKXtcblx0XHRcdHJldHVybiBpbnRlcmZhY2VEZWYucmVxdWlyZSgpO1xuXHRcdH1cblx0XHRcblx0XHRpZihpbnRlcmZhY2VEZWYgaW5zdGFuY2VvZiBJbnRlcmZhY2Upe1xuXHRcdFx0XG5cdFx0XHRjb25zdCBpbnRlcmZhY2VOYW1lID0gaW50ZXJmYWNlRGVmLmdldE5hbWUoKTtcblx0XHRcdFxuXHRcdFx0XG5cdFx0XHRzdGFjayA9IHN0YWNrLnNsaWNlKDApO1xuXHRcdFx0aWYoc3RhY2suaW5kZXhPZihpbnRlcmZhY2VOYW1lKSE9PS0xKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdDeWNsaWMgZGVwZW5kZW5jeSBlcnJvciBpbiAnK0pTT04uc3RyaW5naWZ5KHN0YWNrLmNvbmNhdChpbnRlcmZhY2VOYW1lKSxudWxsLDIpKTtcblx0XHRcdH1cblx0XHRcdHN0YWNrLnB1c2goaW50ZXJmYWNlTmFtZSk7XG5cdFx0XHRcblx0XHRcdGxldCBpbnN0YW5jZTtcblx0XHRcdFxuXHRcdFx0aWYoc2hhcmVkSW5zdGFuY2VzW2ludGVyZmFjZU5hbWVdKXtcblx0XHRcdFx0aW5zdGFuY2UgPSBzaGFyZWRJbnN0YW5jZXNbaW50ZXJmYWNlTmFtZV0uZ2V0KHNoYXJlZEluc3RhbmNlcywgc3RhY2spO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZXtcblx0XHRcdFx0aW5zdGFuY2UgPSB0aGlzLmdldChpbnRlcmZhY2VOYW1lLCB1bmRlZmluZWQsIHNoYXJlZEluc3RhbmNlcywgc3RhY2spO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRjb25zdCBpbnN0YW5jZVJ1bGUgPSB0aGlzLmdldFJ1bGUoaW50ZXJmYWNlTmFtZSk7XG5cdFx0XHRcblx0XHRcdC8vaWYoIWluc3RhbmNlUnVsZS5hc3luY1Jlc29sdmUgJiYgaW5zdGFuY2UgaW5zdGFuY2VvZiB0aGlzLlByb21pc2VJbnRlcmZhY2Upe1xuXHRcdFx0aWYoIWluc3RhbmNlUnVsZS5hc3luY1Jlc29sdmUpe1xuXHRcdFx0XHRyZXR1cm4gbmV3IFN5bmMoaW5zdGFuY2UpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRyZXR1cm4gaW5zdGFuY2U7XG5cdFx0fVxuXHRcdFxuXHRcdGlmKHR5cGVvZiBpbnRlcmZhY2VEZWYgPT0gJ29iamVjdCcgJiYgIShpbnRlcmZhY2VEZWYgaW5zdGFuY2VvZiBWYXIpKXtcblx0XHRcdGNvbnN0IG8gPSB7fTtcblx0XHRcdE9iamVjdC5rZXlzKGludGVyZmFjZURlZikuZm9yRWFjaChrID0+IHtcblx0XHRcdFx0b1trXSA9IHRoaXMuZ2V0UGFyYW0oaW50ZXJmYWNlRGVmW2tdLCBydWxlLCBzaGFyZWRJbnN0YW5jZXMsIGRlZmF1bHRWYXIsIHVuZGVmaW5lZCwgc3RhY2spO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gbztcblx0XHR9XG5cdFxuXHRcdHJldHVybiBpbnRlcmZhY2VEZWY7XG5cdH1cblx0XG5cdHdyYXBWYXJUeXBlKHR5cGUsIGRlZmF1bHRWYXIsIHJlc29sdmVGdW5jdGlvbil7XG5cdFx0aWYocmVzb2x2ZUZ1bmN0aW9uICYmIHR5cGVvZiB0eXBlID09ICdmdW5jdGlvbicpe1xuXHRcdFx0dHlwZSA9IHR5cGUoKTtcblx0XHR9XG5cdFx0aWYodHlwZSBpbnN0YW5jZW9mIFZhcil7XG5cdFx0XHRyZXR1cm4gdHlwZTtcblx0XHR9XG5cdFx0aWYodGhpcy5pc0ludGVyZmFjZVByb3RvdHlwZSh0eXBlKSl7XG5cdFx0XHRyZXR1cm4gdGhpcy5pbnRlcmZhY2UoIHR5cGUudG9TdHJpbmcoKSApO1xuXHRcdH1cblx0XHRzd2l0Y2goZGVmYXVsdFZhcil7XG5cdFx0XHRjYXNlICdpbnRlcmZhY2UnOlxuXHRcdFx0XHRpZih0eXBlb2YgdHlwZSA9PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKXtcblx0XHRcdFx0XHRjb25zdCBvID0ge307XG5cdFx0XHRcdFx0T2JqZWN0LmtleXModHlwZSkuZm9yRWFjaChrZXk9Pntcblx0XHRcdFx0XHRcdGNvbnN0IHYgPSB0eXBlW2tleV07XG5cdFx0XHRcdFx0XHRvW2tleV0gPSB0eXBlb2YgdiA9PSAnb2JqZWN0JyAmJiB2ICE9PSBudWxsICYmICEodiBpbnN0YW5jZW9mIFZhcikgPyB0aGlzLndyYXBWYXJUeXBlKHYsIGRlZmF1bHRWYXIpIDogdjtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRyZXR1cm4gbztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZih0eXBlb2YgdHlwZSA9PSAnZnVuY3Rpb24nKXtcblx0XHRcdFx0XHRyZXR1cm4gbmV3IHRoaXMuZGVmYXVsdEZ1bmN0aW9uV3JhcHBlcih0eXBlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcy5pbnRlcmZhY2UodHlwZSk7XG5cdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3ZhbHVlJzpcblx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWUodHlwZSk7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdFx0cmV0dXJuIHR5cGU7XG5cdH1cblx0XG5cdGlzSW50ZXJmYWNlUHJvdG90eXBlKHR5cGUpe1xuXHRcdHJldHVybiB0aGlzLmludGVyZmFjZVByb3RvdHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUucHJvdG90eXBlIGluc3RhbmNlb2YgdGhpcy5pbnRlcmZhY2VQcm90b3R5cGU7XG5cdH1cblx0XG5cdHJlZ2lzdGVySW5zdGFuY2UobmFtZSwgaW5zdGFuY2Upe1xuXHRcdHRoaXMuaW5zdGFuY2VSZWdpc3RyeVtuYW1lXSA9IGluc3RhbmNlO1xuXHR9XG5cdFxuXHRnZXRSdWxlQmFzZShpbnRlcmZhY2VOYW1lKXtcblx0XHRjb25zdCBydWxlQmFzZSA9IHRoaXMubWVyZ2VSdWxlKHt9LCB0aGlzLnJ1bGVzRGVmYXVsdCk7XG5cdFx0cnVsZUJhc2UuaW50ZXJmYWNlTmFtZSA9IGludGVyZmFjZU5hbWU7IC8vZm9yIGluZm9cblx0XHR0aGlzLm1lcmdlUnVsZShydWxlQmFzZSwgdGhpcy5ydWxlc1tpbnRlcmZhY2VOYW1lXSB8fCB7fSk7XG5cdFx0cmV0dXJuIHJ1bGVCYXNlO1xuXHR9XG5cdFxuXHRnZXRSdWxlKGludGVyZmFjZU5hbWUpe1xuXHRcdGNvbnN0IHJ1bGUgPSB0aGlzLm1lcmdlUnVsZSh7fSwgdGhpcy5ydWxlc0RlZmF1bHQpO1xuXHRcdHJ1bGUuaW50ZXJmYWNlTmFtZSA9IGludGVyZmFjZU5hbWU7IC8vZm9yIGluZm9cblx0XHRpZighaW50ZXJmYWNlTmFtZSl7XG5cdFx0XHRyZXR1cm4gcnVsZTtcblx0XHR9XG5cdFx0XG5cdFx0Y29uc3QgcnVsZUJhc2UgPSB0aGlzLmdldFJ1bGVCYXNlKGludGVyZmFjZU5hbWUpO1xuXHRcdFxuXHRcdGxldCBzdGFjayA9IFtdO1xuXHRcdFxuXHRcdHRoaXMucmVzb2x2ZUluc3RhbmNlT2YoaW50ZXJmYWNlTmFtZSwgc3RhY2spO1xuXHRcdFxuXHRcdGNvbnN0IHJ1bGVzID0gW107XG5cdFx0XG5cdFx0bGV0IGZ1bGxTdGFjaztcblx0XHRcblx0XHRpZihydWxlQmFzZS5pbmhlcml0SW5zdGFuY2VPZil7IFxuXHRcdFx0ZnVsbFN0YWNrID0gbmV3IFNldCggc3RhY2suc2xpY2UoMCwgLTEpICk7XG5cdFx0fVxuXHRcdGVsc2V7XG5cdFx0XHRmdWxsU3RhY2sgPSBuZXcgU2V0KCBzdGFjay5zbGljZSgwLCAxKSApO1xuXHRcdH1cblx0XHRcblx0XHRcblx0XHRpZihydWxlQmFzZS5pbmhlcml0UHJvdG90eXBlKXtcblx0XHRcdHN0YWNrLnJldmVyc2UoKS5mb3JFYWNoKChjKT0+e1xuXHRcdFx0XHRpZih0eXBlb2YgYyA9PSAnZnVuY3Rpb24nKXtcblx0XHRcdFx0XHRsZXQgcGFyZW50UHJvdG8gPSBjO1xuXHRcdFx0XHRcdGxldCBjbGFzc05hbWU7XG5cdFx0XHRcdFx0d2hpbGUocGFyZW50UHJvdG8pe1xuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lID0gcGFyZW50UHJvdG9bdGhpcy5zeW1DbGFzc05hbWVdO1xuXHRcdFx0XHRcdFx0aWYoY2xhc3NOYW1lKXtcblx0XHRcdFx0XHRcdFx0ZnVsbFN0YWNrLmFkZChjbGFzc05hbWUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cGFyZW50UHJvdG8gPSBSZWZsZWN0LmdldFByb3RvdHlwZU9mKHBhcmVudFByb3RvKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0XHRmdWxsU3RhY2sgPSBBcnJheS5mcm9tKGZ1bGxTdGFjaykucmV2ZXJzZSgpO1xuXHRcdFxuXHRcdGZ1bGxTdGFjay5mb3JFYWNoKChjbGFzc05hbWUpPT57XG5cdFx0XHRjb25zdCBtZXJnZVJ1bGUgPSB0aGlzLnJ1bGVzW2NsYXNzTmFtZV07XG5cdFx0XHRcdFxuXHRcdFx0aWYobWVyZ2VSdWxlLmluaGVyaXRNaXhpbnMpe1xuXHRcdFx0XHR0aGlzLm1peGluc1J1bGUocnVsZSwgbWVyZ2VSdWxlLmluaGVyaXRNaXhpbnMpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHR0aGlzLm1lcmdlUnVsZShydWxlLCBtZXJnZVJ1bGUpO1xuXHRcdH0pO1xuXHRcdFxuXHRcdHJldHVybiBydWxlO1xuXHR9XG5cdFxuXHRtaXhpbnNSdWxlKHJ1bGUsIG1peGluc0dyb3VwKXtcblx0XHRjb25zdCBtaXhpbnNHcm91cHMgPSB0aGlzLnJ1bGVDb2xsZWN0RXh0ZW5kc1JlY3Vyc2l2ZShtaXhpbnNHcm91cCkucmV2ZXJzZSgpO1xuXHRcdG1peGluc0dyb3Vwcy5mb3JFYWNoKG1peGluR3JvdXAgPT5cblx0XHRcdG1peGluR3JvdXAuZm9yRWFjaCggbWl4aW4gPT4ge1xuXHRcdFx0XHRjb25zdCBtZXJnZVJ1bGUgPSB0aGlzLnJ1bGVzW21peGluXTtcblx0XHRcdFx0dGhpcy5tZXJnZVJ1bGUocnVsZSwgbWVyZ2VSdWxlLCBmYWxzZSlcblx0XHRcdH0gKVxuXHRcdCk7XG5cdH1cblx0cnVsZUNvbGxlY3RFeHRlbmRzUmVjdXJzaXZlKG1peGluR3JvdXAsIG1peGluc0dyb3VwcyA9IFtdKXtcblx0XHRpZighKG1peGluR3JvdXAgaW5zdGFuY2VvZiBBcnJheSkpe1xuXHRcdFx0bWl4aW5Hcm91cCA9IFttaXhpbkdyb3VwXTtcblx0XHR9XG5cdFx0bWl4aW5zR3JvdXBzLnB1c2gobWl4aW5Hcm91cCk7XG5cdFx0bWl4aW5Hcm91cC5mb3JFYWNoKG1peGluID0+IHtcblx0XHRcdGNvbnN0IHJ1bGUgPSB0aGlzLnJ1bGVzW21peGluXTtcblx0XHRcdGlmKHJ1bGUgJiYgcnVsZS5taXhpbnMpe1xuXHRcdFx0XHR0aGlzLnJ1bGVDb2xsZWN0RXh0ZW5kc1JlY3Vyc2l2ZShydWxlLm1peGlucywgbWl4aW5zR3JvdXBzKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRyZXR1cm4gbWl4aW5zR3JvdXBzO1xuXHR9XG5cblx0cmVnaXN0ZXJDbGFzcyhuYW1lLCB0YXJnZXQpe1xuXHRcdGlmKCF0aGlzLnJ1bGVzW25hbWVdKXtcblx0XHRcdHRoaXMucnVsZXNbbmFtZV0gPSB7fTtcblx0XHR9XG5cdFx0dGhpcy5ydWxlc1tuYW1lXS5jbGFzc0RlZiA9IHRhcmdldDtcblx0fVxuXHRcblx0bWVyZ2VSdWxlKGV4dGVuZFJ1bGUsIHJ1bGUsIG1lcmdlRXh0ZW5kID0gdHJ1ZSl7XG5cdFx0bGV0IHtcblx0XHRcdHNoYXJlZCxcblx0XHRcdGluaGVyaXRJbnN0YW5jZU9mLFxuXHRcdFx0aW5oZXJpdFByb3RvdHlwZSxcblx0XHRcdGluaGVyaXRNaXhpbnMsXG5cdFx0XHRpbnN0YW5jZU9mLFxuXHRcdFx0cGFyYW1zLFxuXHRcdFx0Y2FsbHMsXG5cdFx0XHRsYXp5Q2FsbHMsXG5cdFx0XHRzdWJzdGl0dXRpb25zLFxuXHRcdFx0c2hhcmVkSW5UcmVlLFxuXHRcdFx0Y2xhc3NEZWYsXG5cdFx0XHRzaW5nbGV0b24sXG5cdFx0XHRhc3luY1Jlc29sdmUsXG5cdFx0XHRhc3luY0NhbGxzU2VyaWUsXG5cdFx0XHRhc3luY0NhbGxzUGFyYW1zU2VyaWUsXG5cdFx0XHRkZWNvcmF0b3IsXG5cdFx0XHRhdXRvbG9hZCxcblx0XHRcdHBhdGgsXG5cdFx0fSA9IHJ1bGU7XG5cdFx0aWYoY2xhc3NEZWYgIT09IHVuZGVmaW5lZCl7XG5cdFx0XHRleHRlbmRSdWxlLmNsYXNzRGVmID0gY2xhc3NEZWY7XG5cdFx0fVxuXHRcdGlmKHNoYXJlZCAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUuc2hhcmVkID0gc2hhcmVkO1xuXHRcdH1cblx0XHRpZihpbmhlcml0SW5zdGFuY2VPZiAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUuaW5oZXJpdEluc3RhbmNlT2YgPSBpbmhlcml0SW5zdGFuY2VPZjtcblx0XHR9XG5cdFx0aWYoaW5oZXJpdFByb3RvdHlwZSAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUuaW5oZXJpdFByb3RvdHlwZSA9IGluaGVyaXRQcm90b3R5cGU7XG5cdFx0fVxuXHRcdGlmKGRlY29yYXRvciAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUuZGVjb3JhdG9yID0gZGVjb3JhdG9yO1xuXHRcdH1cblx0XHRpZihhdXRvbG9hZCAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUuYXV0b2xvYWQgPSBhdXRvbG9hZDtcblx0XHR9XG5cdFx0aWYocGF0aCAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUucGF0aCA9IHBhdGg7XG5cdFx0fVxuXHRcdGlmKGluc3RhbmNlT2YgIT09IHVuZGVmaW5lZCl7XG5cdFx0XHRleHRlbmRSdWxlLmluc3RhbmNlT2YgPSBpbnN0YW5jZU9mO1xuXHRcdH1cblx0XHRpZihhc3luY1Jlc29sdmUgIT09IHVuZGVmaW5lZCl7XG5cdFx0XHRleHRlbmRSdWxlLmFzeW5jUmVzb2x2ZSA9IGFzeW5jUmVzb2x2ZTtcblx0XHR9XG5cdFx0aWYoYXN5bmNDYWxsc1NlcmllICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5hc3luY0NhbGxzU2VyaWUgPSBhc3luY0NhbGxzU2VyaWU7XG5cdFx0fVxuXHRcdGlmKGFzeW5jQ2FsbHNQYXJhbXNTZXJpZSAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUuYXN5bmNDYWxsc1BhcmFtc1NlcmllID0gYXN5bmNDYWxsc1BhcmFtc1NlcmllO1xuXHRcdH1cblxuXHRcdGlmKGNhbGxzICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5jYWxscyA9ICggZXh0ZW5kUnVsZS5jYWxscyB8fCBbXSApLmNvbmNhdChjYWxscyk7XG5cdFx0fVxuXHRcdGlmKGxhenlDYWxscyAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUubGF6eUNhbGxzID0gKCBleHRlbmRSdWxlLmxhenlDYWxscyB8fCBbXSApLmNvbmNhdChsYXp5Q2FsbHMpO1xuXHRcdH1cblx0XHRcblx0XHRpZihtZXJnZUV4dGVuZCAmJiBpbmhlcml0TWl4aW5zICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5pbmhlcml0TWl4aW5zID0gaW5oZXJpdE1peGlucy5zbGljZSgwKTtcblx0XHR9XG5cdFx0XG5cdFx0aWYocGFyYW1zICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5wYXJhbXMgPSBwYXJhbXM7XG5cdFx0fVxuXHRcdGlmKHN1YnN0aXR1dGlvbnMgIT09IHVuZGVmaW5lZCl7XG5cdFx0XHRpZighZXh0ZW5kUnVsZS5zdWJzdGl0dXRpb25zKXtcblx0XHRcdFx0ZXh0ZW5kUnVsZS5zdWJzdGl0dXRpb25zID0ge307XG5cdFx0XHR9XG5cdFx0XHRPYmplY3QuYXNzaWduKGV4dGVuZFJ1bGUuc3Vic3RpdHV0aW9ucywgc3Vic3RpdHV0aW9ucyk7XG5cdFx0fVxuXHRcdGlmKHNoYXJlZEluVHJlZSAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGlmKCFleHRlbmRSdWxlLnNoYXJlZEluVHJlZSl7XG5cdFx0XHRcdGV4dGVuZFJ1bGUuc2hhcmVkSW5UcmVlID0gW107XG5cdFx0XHR9XG5cdFx0XHRleHRlbmRSdWxlLnNoYXJlZEluVHJlZSA9IEFycmF5LmZyb20oIG5ldyBTZXQoWy4uLmV4dGVuZFJ1bGUuc2hhcmVkSW5UcmVlLCAuLi5zaGFyZWRJblRyZWVdKSApO1xuXHRcdH1cblx0XHRleHRlbmRSdWxlLnNpbmdsZXRvbiA9IHNpbmdsZXRvbjtcblx0XHRyZXR1cm4gZXh0ZW5kUnVsZTtcblx0fVxuXHRcblx0bWVyZ2VSdWxlcyhleHRlbmRSdWxlcywgcnVsZXMpe1xuXHRcdE9iamVjdC5rZXlzKHJ1bGVzKS5mb3JFYWNoKChrKT0+e1xuXHRcdFx0aWYoIWV4dGVuZFJ1bGVzW2tdKXtcblx0XHRcdFx0ZXh0ZW5kUnVsZXNba10gPSB7fTtcblx0XHRcdH1cblx0XHRcdGV4dGVuZFJ1bGVzW2tdID0gdGhpcy5tZXJnZVJ1bGUoZXh0ZW5kUnVsZXNba10sIHJ1bGVzW2tdKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gZXh0ZW5kUnVsZXM7XG5cdH1cblx0XG5cdHJ1bkNhbGxzKGNhbGxzLCBpbnN0YW5jZSwgcnVsZSwgc2hhcmVkSW5zdGFuY2VzKXtcblx0XHRsZXQgaGFzQXN5bmM7XG5cdFx0XG5cdFx0bGV0IGNhbGxlcnMgPSBjYWxscy5tYXAoKGMpPT4gKCk9PiB7XG5cdFx0XHRcblx0XHRcdGlmKHR5cGVvZiBjID09ICdmdW5jdGlvbicpe1xuXHRcdFx0XHRjID0gW2NdO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgWyBtZXRob2QsIHBhcmFtcyA9IFtdLCBhc3luY1Jlc29sdmUgPSBydWxlLmFzeW5jUmVzb2x2ZSAgXSA9IGM7XG5cdFx0XHRcblx0XHRcdGNvbnN0IG1ha2VDYWxsID0gKHJlc29sdmVkUGFyYW1zKT0+e1x0XHRcdFx0XG5cdFx0XHRcdHJlc29sdmVkUGFyYW1zID0gc3RydWN0dXJlZFJlc29sdmVQYXJhbXNJbnRlcmZhY2UocGFyYW1zLCByZXNvbHZlZFBhcmFtcyk7XG5cdFx0XHRcdGxldCBjYWxsUmV0dXJuO1xuXHRcdFx0XHRpZih0eXBlb2YgbWV0aG9kID09ICdmdW5jdGlvbicpe1xuXHRcdFx0XHRcdGNhbGxSZXR1cm4gPSBtZXRob2QoaW5zdGFuY2UsIC4uLnJlc29sdmVkUGFyYW1zKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNle1xuXHRcdFx0XHRcdGNhbGxSZXR1cm4gPSBpbnN0YW5jZVttZXRob2RdKC4uLnJlc29sdmVkUGFyYW1zKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZighYXN5bmNSZXNvbHZlKXtcblx0XHRcdFx0XHRjYWxsUmV0dXJuID0gbmV3IFN5bmMoY2FsbFJldHVybik7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGNhbGxSZXR1cm47XG5cdFx0XHR9O1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRjb25zdCByZXNvbHZlZFBhcmFtcyA9IHBhcmFtcy5tYXAocGFyYW0gPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5nZXRQYXJhbShwYXJhbSwgcnVsZSwgc2hhcmVkSW5zdGFuY2VzLCB0aGlzLmRlZmF1bHRSdWxlVmFyKTtcblx0XHRcdH0pO1xuXHRcdFx0aWYoc3RydWN0dXJlZEhhc1Byb21pc2UocGFyYW1zLCByZXNvbHZlZFBhcmFtcywgdGhpcy5Qcm9taXNlSW50ZXJmYWNlKSl7XG5cdFx0XHRcdGhhc0FzeW5jID0gdHJ1ZTtcblx0XHRcdFx0cmV0dXJuICgpID0+IHN0cnVjdHVyZWRQcm9taXNlQWxsUmVjdXJzaXZlKHBhcmFtcywgcmVzb2x2ZWRQYXJhbXMsIHRoaXMuUHJvbWlzZUludGVyZmFjZSwgdGhpcy5Qcm9taXNlRmFjdG9yeSkudGhlbihyZXNvbHZlZFBhcmFtcz0+e1xuXHRcdFx0XHRcdHJldHVybiBtYWtlQ2FsbChyZXNvbHZlZFBhcmFtcyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZXtcblx0XHRcdFx0cmV0dXJuICgpID0+IG1ha2VDYWxsKHJlc29sdmVkUGFyYW1zKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdH0pO1xuXHRcdFxuXHRcdGNvbnN0IGFzeW5jQ2FsbHNQYXJhbXNTZXJpZSA9IHJ1bGUuYXN5bmNDYWxsc1BhcmFtc1NlcmllO1xuXHRcdGNvbnN0IGFzeW5jQ2FsbHNTZXJpZSA9IHJ1bGUuYXN5bmNDYWxsc1NlcmllIHx8IGFzeW5jQ2FsbHNQYXJhbXNTZXJpZTtcblx0XHRcblx0XHRjb25zdCBtYWtlQ2FsbHMgPSAoY2FsbGVycyk9Pntcblx0XHRcdFxuXHRcdFx0bGV0IGNhbGxlcnNSZXR1cm47XG5cdFx0XHRpZihoYXNBc3luYyl7XG5cdFx0XHRcdGlmKGFzeW5jQ2FsbHNTZXJpZSl7XG5cdFx0XHRcdFx0Y2FsbGVyc1JldHVybiA9IG1hcFNlcmllKGNhbGxlcnMsIChjYWxsZXIpPT57XG5cdFx0XHRcdFx0XHRyZXR1cm4gY2FsbGVyKCk7XG5cdFx0XHRcdFx0fSwgdGhpcy5Qcm9taXNlSW50ZXJmYWNlLCB0aGlzLlByb21pc2VGYWN0b3J5KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNle1xuXHRcdFx0XHRcdGNhbGxlcnNSZXR1cm4gPSB0aGlzLlByb21pc2VGYWN0b3J5LmFsbCggY2FsbGVycy5tYXAoKGNhbGxlcik9Pntcblx0XHRcdFx0XHRcdHJldHVybiBjYWxsZXIoKTtcblx0XHRcdFx0XHR9KSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbHNle1xuXHRcdFx0XHRjYWxsZXJzUmV0dXJuID0gY2FsbGVycy5tYXAoKGNhbGxlcik9Pntcblx0XHRcdFx0XHRjb25zdCBjYWxsZXJSZXR1cm4gPSBjYWxsZXIoKTtcblx0XHRcdFx0XHRpZihjYWxsZXJSZXR1cm4gaW5zdGFuY2VvZiB0aGlzLlByb21pc2VJbnRlcmZhY2Upe1xuXHRcdFx0XHRcdFx0aGFzQXN5bmMgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gY2FsbGVyUmV0dXJuO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0aWYoaGFzQXN5bmMpe1xuXHRcdFx0XHRcdGNhbGxlcnNSZXR1cm4gPSB0aGlzLlByb21pc2VGYWN0b3J5LmFsbChjYWxsZXJzUmV0dXJuKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNhbGxlcnNSZXR1cm47XG5cdFx0fVxuXHRcdFxuXHRcdGlmKGFzeW5jQ2FsbHNQYXJhbXNTZXJpZSl7XG5cdFx0XHRjYWxsZXJzID0gbWFwU2VyaWUoY2FsbGVycywgKGNhbGxlcik9Pntcblx0XHRcdFx0Y2FsbGVyID0gY2FsbGVyKCkoKTtcblx0XHRcdFx0cmV0dXJuIGNhbGxlcjtcblx0XHRcdH0sIHRoaXMuUHJvbWlzZUludGVyZmFjZSwgdGhpcy5Qcm9taXNlRmFjdG9yeSk7XG5cdFx0XHRyZXR1cm4gY2FsbGVycy50aGVuKCBjYWxsZXJzID0+IG1ha2VDYWxscyggY2FsbGVycy5tYXAoY2FsbGVyID0+ICgpID0+IGNhbGxlciApICkgKSA7XG5cdFx0fVxuXHRcdGVsc2V7XG5cdFx0XHRjYWxsZXJzID0gY2FsbGVycy5tYXAoKGNhbGxlcik9PmNhbGxlcigpKTtcblx0XHRcdHJldHVybiBtYWtlQ2FsbHMoY2FsbGVycyk7XG5cdFx0fVxuXHRcdFxuXHR9XG5cdFx0XG5cdGRlZmluZVN5bSh0YXJnZXQsIHN5bW5hbWUsIHZhbHVlKXtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBzeW1uYW1lLCB7XG5cdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHR9KTtcblx0fVxuXHRcblx0cmVzb2x2ZUluc3RhbmNlT2Yoc3RyLCBzdGFjayA9IFtdLCByZXF1aXJlZCA9IHRydWUpe1xuXHRcdGlmKHR5cGVvZiBzdHIgPT0gJ3N0cmluZycgfHwgdHlwZW9mIHN0ciA9PSAnc3ltYm9sJyl7XG5cdFx0XHRpZihzdGFjay5pbmRleE9mKHN0cikhPT0tMSl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignQ3ljbGljIGludGVyZmFjZSBkZWZpbml0aW9uIGVycm9yIGluICcrSlNPTi5zdHJpbmdpZnkoc3RhY2suY29uY2F0KHN0ciksbnVsbCwyKSk7XG5cdFx0XHR9XG5cdFx0XHRzdGFjay5wdXNoKHN0cik7XG5cdFx0XHRjb25zdCBydWxlID0gdGhpcy5ydWxlc1tzdHJdO1xuXHRcdFx0bGV0IHJlc29sdmVkID0gZmFsc2U7XG5cdFx0XHRpZihydWxlKXtcblx0XHRcdFx0aWYocnVsZS5pbnN0YW5jZU9mKXtcblx0XHRcdFx0XHRyZXNvbHZlZCA9IHJ1bGUuaW5zdGFuY2VPZjtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmKHJ1bGUuY2xhc3NEZWYpe1xuXHRcdFx0XHRcdHJlc29sdmVkID0gcnVsZS5jbGFzc0RlZjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYoIXJlc29sdmVkKXtcblx0XHRcdFx0aWYoIXJlcXVpcmVkKXtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdJbnRlcmZhY2UgZGVmaW5pdGlvbiAnKyh0eXBlb2Ygc3RyID09ICdzeW1ib2wnID8gJ3N5bWJvbCcgOiAnXCInK3N0cisnXCInICkrJyBub3QgZm91bmQsIGRpIGxvYWQgc3RhY2s6ICcrSlNPTi5zdHJpbmdpZnkoc3RhY2ssIG51bGwsIDIpKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLnJlc29sdmVJbnN0YW5jZU9mKHJlc29sdmVkLCBzdGFjaywgcmVxdWlyZWQpO1xuXHRcdH1cblx0XHRzdGFjay5wdXNoKHN0cik7XG5cdFx0cmV0dXJuIHN0cjtcblx0fVxuXHRcblx0ZmFjdG9yeShjYWxsYmFjayl7XG5cdFx0cmV0dXJuIG5ldyB0aGlzLmRlZmF1bHRGYWN0b3J5KGNhbGxiYWNrKTtcblx0fVxuXHR2YWx1ZUZhY3RvcnkoY2FsbGJhY2spe1xuXHRcdHJldHVybiBuZXcgVmFsdWVGYWN0b3J5KGNhbGxiYWNrKTtcblx0fVxuXHRjbGFzc0ZhY3RvcnkoY2FsbGJhY2spe1xuXHRcdHJldHVybiBuZXcgQ2xhc3NGYWN0b3J5KGNhbGxiYWNrKTtcblx0fVxuXHRpbnRlcmZhY2UobmFtZSl7XG5cdFx0cmV0dXJuIG5ldyBJbnRlcmZhY2UobmFtZSk7XG5cdH1cblx0dmFsdWUodmFsdWUpe1xuXHRcdHJldHVybiBuZXcgVmFsdWUodmFsdWUpO1xuXHR9XG5cdHJlcXVpcmUoZGVwKXtcblx0XHRyZXR1cm4gbmV3IFJlcXVpcmUoZGVwKTtcblx0fVxuXHRcblx0ZGVwZW5kZW5jeShkZXApe1xuXHRcdHJldHVybiBuZXcgRGVwZW5kZW5jeShkZXApO1xuXHR9XG5cdFxuXHRjbGFzc0RlZihjYWxsYmFjayl7XG5cdFx0cmV0dXJuIG5ldyBDbGFzc0RlZihjYWxsYmFjayk7XG5cdH1cbn1cbiJdfQ==