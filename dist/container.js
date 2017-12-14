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
    key: "wrap",
    value: function wrap() {
      var _this10 = this;

      var types = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var _wrap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var interfaceName = arguments[2];
      return function (target, method) {
        target[method] = _this10.decoratorMethod(target, method, types, _wrap);
        return target;
      };
    }
  }, {
    key: "decorator",
    value: function decorator() {
      var _this11 = this;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return function (target, method) {
        if (method === undefined) {
          var className = args[0],
              _args$ = args[1],
              types = _args$ === void 0 ? [] : _args$;

          _this11.decoratorClass(target, className, types);
        } else {
          var _args$2 = args[0],
              _types = _args$2 === void 0 ? [] : _args$2,
              _args$3 = args[1],
              wrap = _args$3 === void 0 ? false : _args$3,
              interfaceName = args[2];

          target[method] = _this11.decoratorMethod(target, method, _types, wrap);
        }

        return target;
      };
    }
  }, {
    key: "decoratorClass",
    value: function decoratorClass(target, className, types) {
      var _this12 = this;

      this.defineSym(target, this.symClassName, className);
      this.registerClass(className, target);

      if (typeof types == 'function') {
        types = types();
      }

      types = types.map(function (type) {
        return _this12.wrapVarType(type, _this12.defaultDecoratorVar);
      });

      if (target[this.symInterfaces]) {
        types = types.concat(target[this.symInterfaces]);
      }

      this.defineSym(target, this.symInterfaces, types);
      return target;
    }
  }, {
    key: "decoratorMethod",
    value: function decoratorMethod(target, method, types, wrap, interfaceName) {
      var _this13 = this;

      if (typeof types == 'function') {
        types = types();
      }

      types = types.map(function (type) {
        return _this13.wrapVarType(type, _this13.defaultDecoratorVar);
      });
      var fn = target[method];

      if (wrap) {
        var self = this;
        return function () {
          var rule = self.getRuleBase(interfaceName || target[self.symClassName]);
          var params = types.map(function (param) {
            return self.getParam(param, rule, {}, self.defaultRuleVar);
          });
          var resolvedParams = (0, _structuredResolveParamsInterface.default)(types, params);
          return fn.apply(this, resolvedParams);
        };
      } else {
        if (fn[this.symInterfaces]) {
          types = types.concat(fn[this.symInterfaces]);
        }

        this.defineSym(fn, this.symInterfaces, types);
        return fn;
      }
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
      var _this14 = this;

      var rule = this.getRule(interfaceName);
      var classDef = this.resolveInstanceOf(interfaceName);
      return function (args, sharedInstances, stack) {
        //check for shared after params load
        if (_this14.instanceRegistry[interfaceName]) {
          return _this14.instanceRegistry[interfaceName];
        }

        sharedInstances = (0, _assign.default)({}, sharedInstances);
        rule.sharedInTree.forEach(function (shareInterface) {
          if (!sharedInstances[shareInterface]) {
            sharedInstances[shareInterface] = new _sharedInstance.default(shareInterface, _this14);
          }
        });
        var params;
        var defaultVar;

        if (args) {
          params = args;
          defaultVar = _this14.defaultArgsVar;
        } else {
          params = rule.params || classDef[_this14.symInterfaces] || [];
          defaultVar = _this14.defaultRuleVar;
        }

        var resolvedParams = params.map(function (interfaceDef, index) {
          return _this14.getParam(interfaceDef, rule, sharedInstances, defaultVar, index, stack);
        }); //recheck for shared after params load

        if (_this14.instanceRegistry[interfaceName]) {
          return _this14.instanceRegistry[interfaceName];
        }

        var makeInstance = function makeInstance(resolvedParams) {
          resolvedParams = (0, _structuredResolveParamsInterface.default)(params, resolvedParams);

          if (_this14.interfaceTypeCheck) {
            (0, _structuredInterfacePrototype.default)(rule.params || classDef[_this14.symInterfaces] || [], resolvedParams);
          }

          var instance = new (Function.prototype.bind.apply(classDef, [null].concat((0, _toConsumableArray2.default)(resolvedParams))))();

          var finalizeInstanceCreation = function finalizeInstanceCreation() {
            if (rule.shared) {
              _this14.registerInstance(interfaceName, instance);
            }

            var callsReturn = _this14.runCalls(rule.lazyCalls, instance, rule, sharedInstances);

            if (callsReturn instanceof _this14.PromiseInterface) {
              return callsReturn.then(function () {
                return instance;
              });
            }

            return instance;
          };

          var callsReturn = _this14.runCalls(rule.calls, instance, rule, sharedInstances);

          if (callsReturn instanceof _this14.PromiseInterface) {
            return callsReturn.then(function () {
              return finalizeInstanceCreation();
            });
          }

          return finalizeInstanceCreation();
        };

        if ((0, _structuredHasPromise.default)(params, resolvedParams, _this14.PromiseInterface)) {
          return (0, _structuredPromiseAllRecursive.default)(params, resolvedParams, _this14.PromiseInterface, _this14.PromiseFactory).then(function (resolvedParams) {
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
    value: function getParam(interfaceDef, rule) {
      var _this15 = this;

      var sharedInstances = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
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
          o[k] = _this15.getParam(interfaceDef[k], rule, sharedInstances, defaultVar, undefined, stack);
        });
        return o;
      }

      return interfaceDef;
    }
  }, {
    key: "wrapVarType",
    value: function wrapVarType(type, defaultVar, resolveFunction) {
      var _this16 = this;

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
              o[key] = (0, _typeof2.default)(v) == 'object' && v !== null && !(v instanceof _var.default) ? _this16.wrapVarType(v, defaultVar) : v;
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

      if (interfaceName) {
        this.mergeRule(ruleBase, this.rules[interfaceName] || {});
      }

      return ruleBase;
    }
  }, {
    key: "getRule",
    value: function getRule(interfaceName) {
      var _this17 = this;

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
              className = parentProto[_this17.symClassName];

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
        var mergeRule = _this17.rules[className];

        if (mergeRule.inheritMixins) {
          _this17.mixinsRule(rule, mergeRule.inheritMixins);
        }

        _this17.mergeRule(rule, mergeRule);
      });
      return rule;
    }
  }, {
    key: "mixinsRule",
    value: function mixinsRule(rule, mixinsGroup) {
      var _this18 = this;

      var mixinsGroups = this.ruleCollectExtendsRecursive(mixinsGroup).reverse();
      mixinsGroups.forEach(function (mixinGroup) {
        return mixinGroup.forEach(function (mixin) {
          var mergeRule = _this18.rules[mixin];

          _this18.mergeRule(rule, mergeRule, false);
        });
      });
    }
  }, {
    key: "ruleCollectExtendsRecursive",
    value: function ruleCollectExtendsRecursive(mixinGroup) {
      var _this19 = this;

      var mixinsGroups = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      if (!(mixinGroup instanceof Array)) {
        mixinGroup = [mixinGroup];
      }

      mixinsGroups.push(mixinGroup);
      mixinGroup.forEach(function (mixin) {
        var rule = _this19.rules[mixin];

        if (rule && rule.mixins) {
          _this19.ruleCollectExtendsRecursive(rule.mixins, mixinsGroups);
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
      var _this20 = this;

      (0, _keys.default)(rules).forEach(function (k) {
        if (!extendRules[k]) {
          extendRules[k] = {};
        }

        extendRules[k] = _this20.mergeRule(extendRules[k], rules[k]);
      });
      return extendRules;
    }
  }, {
    key: "runCalls",
    value: function runCalls(calls, instance, rule, sharedInstances) {
      var _this21 = this;

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
              params = _c2$ === void 0 ? instance[method][_this21.symInterfaces] || [] : _c2$,
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
            return _this21.getParam(param, rule, sharedInstances, _this21.defaultRuleVar);
          });

          if ((0, _structuredHasPromise.default)(params, resolvedParams, _this21.PromiseInterface)) {
            hasAsync = true;
            return function () {
              return (0, _structuredPromiseAllRecursive.default)(params, resolvedParams, _this21.PromiseInterface, _this21.PromiseFactory).then(function (resolvedParams) {
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
            }, _this21.PromiseInterface, _this21.PromiseFactory);
          } else {
            callersReturn = _this21.PromiseFactory.all(callers.map(function (caller) {
              return caller();
            }));
          }
        } else {
          callersReturn = callers.map(function (caller) {
            var callerReturn = caller();

            if (callerReturn instanceof _this21.PromiseInterface) {
              hasAsync = true;
            }

            return callerReturn;
          });

          if (hasAsync) {
            callersReturn = _this21.PromiseFactory.all(callersReturn);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250YWluZXIuanMiXSwibmFtZXMiOlsiaW50ZXJmYWNlUHJvdG90eXBlRGVmYXVsdCIsIkNvbnRhaW5lciIsImludGVyZmFjZVByb3RvdHlwZSIsInJ1bGVzIiwicnVsZXNEZWZhdWx0IiwiYXV0b2xvYWRGYWlsT25NaXNzaW5nRmlsZSIsImRlcGVuZGVuY2llcyIsImF1dG9sb2FkRXh0ZW5zaW9ucyIsImF1dG9sb2FkUGF0aFJlc29sdmVyIiwicGF0aCIsImRlZmF1bHRWYXIiLCJkZWZhdWx0UnVsZVZhciIsImRlZmF1bHREZWNvcmF0b3JWYXIiLCJkZWZhdWx0QXJnc1ZhciIsImRlZmF1bHRGYWN0b3J5IiwiZGVmYXVsdEZ1bmN0aW9uV3JhcHBlciIsImdsb2JhbEtleSIsInByb21pc2VGYWN0b3J5IiwicHJvbWlzZUludGVyZmFjZXMiLCJ1bmRlZmluZWQiLCJpbnRlcmZhY2VUeXBlQ2hlY2siLCJzeW1DbGFzc05hbWUiLCJzeW1JbnRlcmZhY2VzIiwicHJvdmlkZXJSZWdpc3RyeSIsImluc3RhbmNlUmVnaXN0cnkiLCJyZXF1aXJlcyIsInNldEF1dG9sb2FkUGF0aFJlc29sdmVyIiwibG9hZEV4dGVuc2lvblJlZ2V4IiwiUmVnRXhwIiwiam9pbiIsImFsbG93ZWREZWZhdWx0VmFycyIsInZhbGlkYXRlRGVmYXVsdFZhciIsImluZGV4T2YiLCJ1bnNoaWZ0IiwiUHJvbWlzZUludGVyZmFjZSIsIlByb21pc2VGYWN0b3J5Iiwic2V0R2xvYmFsS2V5IiwiaW5oZXJpdEluc3RhbmNlT2YiLCJpbmhlcml0UHJvdG90eXBlIiwiaW5oZXJpdE1peGlucyIsInNoYXJlZCIsImluc3RhbmNlT2YiLCJjbGFzc0RlZiIsInBhcmFtcyIsImNhbGxzIiwibGF6eUNhbGxzIiwic3Vic3RpdHV0aW9ucyIsInNoYXJlZEluVHJlZSIsInNpbmdsZXRvbiIsImFzeW5jUmVzb2x2ZSIsImFzeW5jQ2FsbHNTZXJpZSIsImRlY29yYXRvciIsImF1dG9sb2FkIiwic2V0UnVsZXNEZWZhdWx0IiwibG9hZERlcGVuZGVuY2llcyIsImFkZFJ1bGVzIiwia2V5IiwidmFsdWUiLCJmb3JFYWNoIiwiY29uZmlnIiwiayIsIkVycm9yIiwiYWxpYXNNYXAiLCJyZWFsUGF0aCIsImFsaWFzIiwic3Vic3RyIiwibGVuZ3RoIiwiZ2xvYmFsIiwiZGlycyIsImNvbnRleHQiLCJkaXJLZXkiLCJnZXREZXBlbmRlbmN5Iiwia2V5cyIsImZpbGVuYW1lIiwibGFzdEluZGV4T2YiLCJzcGxpdCIsInBvcCIsImFkZFJ1bGUiLCJpbnRlcmZhY2VOYW1lIiwicnVsZXNEZXRlY3RMYXp5TG9hZCIsInJ1bGUiLCJkZXRlY3RMYXp5TG9hZCIsIm1lcmdlUnVsZSIsInByb2Nlc3NSdWxlIiwiZ2V0Q2xhc3NEZWYiLCJyZWdpc3RlclJlcXVpcmUiLCJwcm9wZXJ0eSIsImxvYWRQYXRocyIsInJlZ2lzdGVyUmVxdWlyZU1hcCIsInJ1bGVMYXp5TG9hZCIsInN0YWNrIiwiY2FsbFZhbCIsIm1ldGhvZCIsInJ1bGVDaGVja0N5Y2xpY0xvYWQiLCJwdXNoIiwiY29uY2F0Iiwic29tZSIsInBhcmFtIiwidiIsIndyYXBWYXJUeXBlIiwiZ2V0TmFtZSIsInJlc29sdmVJbnN0YW5jZU9mIiwicGFyYW1SdWxlIiwiZ2V0UnVsZSIsImN5Y2xpYyIsImNhbGxWIiwiY2xhc3NEZWZOYW1lIiwiY2xhc3NEZWZpbml0aW9uIiwiZ2V0IiwiYXJncyIsInZhbGlkYXRlQXV0b2xvYWRGaWxlTmFtZSIsInJlcSIsInJlcXVpcmVEZXAiLCJuYW1lIiwicmVxdWlyZVBhdGgiLCJmb3VuZCIsInBhdGhGcmFnbWVudHMiLCJzaGlmdCIsImV4dCIsImRlcEV4aXN0cyIsInJlcXVpcmVkIiwiZGVwUmVxdWlyZSIsInN1YktleSIsInIiLCJkZWZhdWx0IiwiZ2V0UnVsZUJhc2UiLCJyZWdpc3RlckNsYXNzIiwidHlwZXMiLCJ3cmFwIiwidGFyZ2V0IiwiZGVjb3JhdG9yTWV0aG9kIiwiY2xhc3NOYW1lIiwiZGVjb3JhdG9yQ2xhc3MiLCJkZWZpbmVTeW0iLCJtYXAiLCJ0eXBlIiwiZm4iLCJzZWxmIiwiZ2V0UGFyYW0iLCJyZXNvbHZlZFBhcmFtcyIsImFwcGx5IiwiQm9vbGVhbiIsImludGVyZmFjZURlZiIsInNoYXJlZEluc3RhbmNlcyIsInByb3ZpZGVyIiwiY29uc3RydWN0b3IiLCJtYWtlUHJvdmlkZXIiLCJzaGFyZUludGVyZmFjZSIsImluZGV4IiwibWFrZUluc3RhbmNlIiwiaW5zdGFuY2UiLCJmaW5hbGl6ZUluc3RhbmNlQ3JlYXRpb24iLCJyZWdpc3Rlckluc3RhbmNlIiwiY2FsbHNSZXR1cm4iLCJydW5DYWxscyIsInRoZW4iLCJnZXRTdWJzdGl0dXRpb25QYXJhbSIsImNhbGxiYWNrIiwiZ2V0VmFsdWUiLCJyZXF1aXJlIiwic2xpY2UiLCJpbnN0YW5jZVJ1bGUiLCJvIiwicmVzb2x2ZUZ1bmN0aW9uIiwiaXNJbnRlcmZhY2VQcm90b3R5cGUiLCJpbnRlcmZhY2VDbGFzcyIsInRvU3RyaW5nIiwiaW50ZXJmYWNlIiwicHJvdG90eXBlIiwicnVsZUJhc2UiLCJmdWxsU3RhY2siLCJyZXZlcnNlIiwiYyIsInBhcmVudFByb3RvIiwiYWRkIiwibWl4aW5zUnVsZSIsIm1peGluc0dyb3VwIiwibWl4aW5zR3JvdXBzIiwicnVsZUNvbGxlY3RFeHRlbmRzUmVjdXJzaXZlIiwibWl4aW5Hcm91cCIsIm1peGluIiwiQXJyYXkiLCJtaXhpbnMiLCJleHRlbmRSdWxlIiwibWVyZ2VFeHRlbmQiLCJhc3luY0NhbGxzUGFyYW1zU2VyaWUiLCJleHRlbmRSdWxlcyIsImhhc0FzeW5jIiwiY2FsbGVycyIsIm1ha2VDYWxsIiwiY2FsbFJldHVybiIsIm1ha2VDYWxscyIsImNhbGxlcnNSZXR1cm4iLCJjYWxsZXIiLCJhbGwiLCJjYWxsZXJSZXR1cm4iLCJzeW1uYW1lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsInN0ciIsInJlc29sdmVkIiwiZGVwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUNBOzs7NkJBRVE1QyxRLEVBQVM7QUFDakIsYUFBTyxzQkFBYUEsUUFBYixDQUFQO0FBQ0EiLCJmaWxlIjoiY29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1hcFNlcmllIGZyb20gJy4vbWFwU2VyaWUnXG5cbmltcG9ydCBWYXIgZnJvbSAnLi92YXInXG5pbXBvcnQgRmFjdG9yeSBmcm9tICcuL2ZhY3RvcnknXG5pbXBvcnQgVmFsdWVGYWN0b3J5IGZyb20gJy4vdmFsdWVGYWN0b3J5J1xuaW1wb3J0IENsYXNzRmFjdG9yeSBmcm9tICcuL2NsYXNzRmFjdG9yeSdcbmltcG9ydCBWYWx1ZSBmcm9tICcuL3ZhbHVlJ1xuaW1wb3J0IEludGVyZmFjZSBmcm9tICcuL2ludGVyZmFjZSdcbmltcG9ydCBJbnRlcmZhY2VDbGFzcyBmcm9tICcuL2ludGVyZmFjZUNsYXNzJ1xuaW1wb3J0IFJlcXVpcmUgZnJvbSAnLi9yZXF1aXJlJ1xuXG5pbXBvcnQgU2hhcmVkSW5zdGFuY2UgZnJvbSAnLi9zaGFyZWRJbnN0YW5jZSdcblxuaW1wb3J0IENsYXNzRGVmIGZyb20gJy4vY2xhc3NEZWYnXG5cbmltcG9ydCBEZXBlbmRlbmN5IGZyb20gJy4vZGVwZW5kZW5jeSdcblxuaW1wb3J0IG1ha2VDb250YWluZXJBcGkgZnJvbSAnLi9tYWtlQ29udGFpbmVyQXBpJ1xuXG5pbXBvcnQgU3luYyBmcm9tICcuL3N5bmMnXG5pbXBvcnQgc3RydWN0dXJlZEhhc1Byb21pc2UgZnJvbSAnLi9zdHJ1Y3R1cmVkSGFzUHJvbWlzZSdcbmltcG9ydCBzdHJ1Y3R1cmVkUHJvbWlzZUFsbFJlY3Vyc2l2ZSBmcm9tICcuL3N0cnVjdHVyZWRQcm9taXNlQWxsUmVjdXJzaXZlJ1xuaW1wb3J0IHN0cnVjdHVyZWRSZXNvbHZlUGFyYW1zSW50ZXJmYWNlIGZyb20gJy4vc3RydWN0dXJlZFJlc29sdmVQYXJhbXNJbnRlcmZhY2UnXG5cbmltcG9ydCBzdHJ1Y3R1cmVkSW50ZXJmYWNlUHJvdG90eXBlIGZyb20gJy4vc3RydWN0dXJlZEludGVyZmFjZVByb3RvdHlwZSdcblxuaW1wb3J0IHByb21pc2VJbnRlcmZhY2UgZnJvbSAnLi9wcm9taXNlSW50ZXJmYWNlJ1xuXG5sZXQgaW50ZXJmYWNlUHJvdG90eXBlRGVmYXVsdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFpbmVye1xuXHRcblx0c3RhdGljIHNldEludGVyZmFjZVByb3RvdHlwZURlZmF1bHQoaW50ZXJmYWNlUHJvdG90eXBlKXtcblx0XHRpbnRlcmZhY2VQcm90b3R5cGVEZWZhdWx0ID0gaW50ZXJmYWNlUHJvdG90eXBlO1xuXHR9XG5cdHN0YXRpYyBnZXRJbnRlcmZhY2VQcm90b3R5cGVEZWZhdWx0KGludGVyZmFjZVByb3RvdHlwZSl7XG5cdFx0cmV0dXJuIGludGVyZmFjZVByb3RvdHlwZURlZmF1bHQ7XG5cdH1cblx0XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRydWxlcyA9IHt9LFxuXHRcdFxuXHRcdHJ1bGVzRGVmYXVsdCA9IHt9LFxuXHRcdFxuXHRcdGF1dG9sb2FkRmFpbE9uTWlzc2luZ0ZpbGUgPSAncGF0aCcsXG5cdFx0ZGVwZW5kZW5jaWVzID0ge30sXG5cdFx0YXV0b2xvYWRFeHRlbnNpb25zID0gWydqcyddLFxuXHRcdGF1dG9sb2FkUGF0aFJlc29sdmVyID0gKHBhdGgpPT5wYXRoLFxuXHRcdFxuXHRcdGRlZmF1bHRWYXIgPSAnaW50ZXJmYWNlJyxcblx0XHRkZWZhdWx0UnVsZVZhciA9IG51bGwsXG5cdFx0ZGVmYXVsdERlY29yYXRvclZhciA9IG51bGwsXG5cdFx0ZGVmYXVsdEFyZ3NWYXIgPSBudWxsLFxuXHRcdFxuXHRcdGRlZmF1bHRGYWN0b3J5ID0gVmFsdWVGYWN0b3J5LFxuXHRcdGRlZmF1bHRGdW5jdGlvbldyYXBwZXIgPSBDbGFzc0ZhY3RvcnksXG5cdFx0XG5cdFx0Z2xvYmFsS2V5ID0gZmFsc2UsXG5cdFx0XG5cdFx0cHJvbWlzZUZhY3RvcnkgPSBQcm9taXNlLFxuXHRcdHByb21pc2VJbnRlcmZhY2VzID0gWyBQcm9taXNlIF0sXG5cdFx0XG5cdFx0aW50ZXJmYWNlUHJvdG90eXBlID0gdW5kZWZpbmVkLFxuXHRcdGludGVyZmFjZVR5cGVDaGVjayA9IGZhbHNlLFxuXHRcdFxuXHR9ID0ge30pe1xuXHRcdFxuXHRcdHRoaXMuc3ltQ2xhc3NOYW1lID0gU3ltYm9sKCdjbGFzc05hbWUnKTtcblx0XHR0aGlzLnN5bUludGVyZmFjZXMgPSBTeW1ib2woJ3R5cGVzJyk7XG5cdFx0dGhpcy5wcm92aWRlclJlZ2lzdHJ5ID0ge307XG5cdFx0dGhpcy5pbnN0YW5jZVJlZ2lzdHJ5ID0ge307XG5cdFx0XG5cdFx0dGhpcy5yZXF1aXJlcyA9IHt9O1xuXHRcdHRoaXMuYXV0b2xvYWRFeHRlbnNpb25zID0gYXV0b2xvYWRFeHRlbnNpb25zO1xuXHRcdHRoaXMuYXV0b2xvYWRGYWlsT25NaXNzaW5nRmlsZSA9IGF1dG9sb2FkRmFpbE9uTWlzc2luZ0ZpbGU7XG5cdFx0dGhpcy5kZXBlbmRlbmNpZXMgPSBkZXBlbmRlbmNpZXM7XG5cdFx0dGhpcy5zZXRBdXRvbG9hZFBhdGhSZXNvbHZlcihhdXRvbG9hZFBhdGhSZXNvbHZlcik7XG5cdFx0dGhpcy5sb2FkRXh0ZW5zaW9uUmVnZXggPSBuZXcgUmVnRXhwKCdcXC4oJyt0aGlzLmF1dG9sb2FkRXh0ZW5zaW9ucy5qb2luKCd8JykrJykkJyk7XG5cdFx0XG5cdFx0dGhpcy5kZWZhdWx0UnVsZVZhciA9IGRlZmF1bHRSdWxlVmFyIHx8IGRlZmF1bHRWYXI7XG5cdFx0dGhpcy5kZWZhdWx0RGVjb3JhdG9yVmFyID0gZGVmYXVsdERlY29yYXRvclZhciB8fCBkZWZhdWx0VmFyO1xuXHRcdHRoaXMuZGVmYXVsdEFyZ3NWYXIgPSBkZWZhdWx0QXJnc1ZhciB8fCBkZWZhdWx0VmFyO1xuXHRcdFxuXHRcdHRoaXMuZGVmYXVsdEZhY3RvcnkgPSBkZWZhdWx0RmFjdG9yeTtcblx0XHR0aGlzLmRlZmF1bHRGdW5jdGlvbldyYXBwZXIgPSBkZWZhdWx0RnVuY3Rpb25XcmFwcGVyO1xuXHRcdFxuXHRcdHRoaXMuYWxsb3dlZERlZmF1bHRWYXJzID0gWydpbnRlcmZhY2UnLCd2YWx1ZSddO1xuXHRcdHRoaXMudmFsaWRhdGVEZWZhdWx0VmFyKGRlZmF1bHRWYXIsICdkZWZhdWx0VmFyJyk7XG5cdFx0dGhpcy52YWxpZGF0ZURlZmF1bHRWYXIodGhpcy5kZWZhdWx0UnVsZVZhciwgJ2RlZmF1bHRSdWxlVmFyJyk7XG5cdFx0dGhpcy52YWxpZGF0ZURlZmF1bHRWYXIodGhpcy5kZWZhdWx0RGVjb3JhdG9yVmFyLCAnZGVmYXVsdERlY29yYXRvclZhcicpO1xuXHRcdHRoaXMudmFsaWRhdGVEZWZhdWx0VmFyKHRoaXMuZGVmYXVsdEFyZ3NWYXIsICdkZWZhdWx0QXJnc1ZhcicpO1xuXHRcdFxuXHRcdGlmKHByb21pc2VJbnRlcmZhY2VzLmluZGV4T2YocHJvbWlzZUZhY3RvcnkpID09PSAtMSl7XG5cdFx0XHRwcm9taXNlSW50ZXJmYWNlcy51bnNoaWZ0KHByb21pc2VGYWN0b3J5KTtcblx0XHR9XG5cdFx0dGhpcy5Qcm9taXNlSW50ZXJmYWNlID0gcHJvbWlzZUludGVyZmFjZShwcm9taXNlSW50ZXJmYWNlcyk7XG5cdFx0dGhpcy5Qcm9taXNlRmFjdG9yeSA9IHByb21pc2VGYWN0b3J5O1xuXHRcdFxuXHRcdHRoaXMuaW50ZXJmYWNlUHJvdG90eXBlID0gaW50ZXJmYWNlUHJvdG90eXBlIHx8IGludGVyZmFjZVByb3RvdHlwZURlZmF1bHQ7XG5cdFx0XG5cdFx0aWYoZ2xvYmFsS2V5KXtcblx0XHRcdHRoaXMuc2V0R2xvYmFsS2V5KGdsb2JhbEtleSk7XG5cdFx0fVxuXHRcdFxuXHRcdHRoaXMucnVsZXNEZWZhdWx0ID0ge1xuXHRcdFx0XG5cdFx0XHRpbmhlcml0SW5zdGFuY2VPZjogdHJ1ZSxcblx0XHRcdGluaGVyaXRQcm90b3R5cGU6IGZhbHNlLFxuXHRcdFx0aW5oZXJpdE1peGluczogW10sXG5cdFx0XHRcblx0XHRcdHNoYXJlZDogZmFsc2UsXG5cdFx0XHRpbnN0YW5jZU9mOiB1bmRlZmluZWQsXG5cdFx0XHRjbGFzc0RlZjogdW5kZWZpbmVkLFxuXHRcdFx0cGFyYW1zOiB1bmRlZmluZWQsXG5cdFx0XHRcblx0XHRcdGNhbGxzOiBbXSxcblx0XHRcdGxhenlDYWxsczogW10sXG5cdFx0XHRcblx0XHRcdHN1YnN0aXR1dGlvbnM6IFtdLFxuXHRcdFx0c2hhcmVkSW5UcmVlOiBbXSxcblx0XHRcdFxuXHRcdFx0c2luZ2xldG9uOiB1bmRlZmluZWQsXG5cdFx0XHRcblx0XHRcdGFzeW5jUmVzb2x2ZTogZmFsc2UsXG5cdFx0XHRhc3luY0NhbGxzU2VyaWU6IGZhbHNlLFxuXHRcdFx0XG5cdFx0XHRkZWNvcmF0b3I6IGZhbHNlLFxuXHRcdFx0XG5cdFx0XHRhdXRvbG9hZDogZmFsc2UsXG5cdFx0XHRwYXRoOiB1bmRlZmluZWQsXG5cdFx0XHRcblx0XHR9O1xuXHRcdHRoaXMuc2V0UnVsZXNEZWZhdWx0KHJ1bGVzRGVmYXVsdCk7XG5cdFx0dGhpcy5ydWxlcyA9IHt9O1xuXHRcdFxuXHRcdHRoaXMubG9hZERlcGVuZGVuY2llcygpO1xuXHRcdHRoaXMuYWRkUnVsZXMocnVsZXMpO1xuXHRcdFxuXHR9XG5cdFxuXHRjb25maWcoa2V5LCB2YWx1ZSl7XG5cdFx0aWYodHlwZW9mIGtleSA9PT0gJ29iamVjdCcpe1xuXHRcdFx0T2JqZWN0LmtleXMoa2V5KS5mb3JFYWNoKGs9PnRoaXMuY29uZmlnKGssIGtleVtrXSkpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRzd2l0Y2goa2V5KXtcblx0XHRcdGNhc2UgJ2F1dG9sb2FkRmFpbE9uTWlzc2luZ0ZpbGUgJzpcblx0XHRcdGNhc2UgJ2F1dG9sb2FkRXh0ZW5zaW9ucyc6XG5cdFx0XHRjYXNlICdkZWZhdWx0VmFyJzpcblx0XHRcdGNhc2UgJ2RlZmF1bHRSdWxlVmFyJzpcblx0XHRcdGNhc2UgJ2RlZmF1bHREZWNvcmF0b3JWYXInOlxuXHRcdFx0Y2FzZSAnZGVmYXVsdEFyZ3NWYXInOlxuXHRcdFx0Y2FzZSAnaW50ZXJmYWNlUHJvdG90eXBlJzpcblx0XHRcdGNhc2UgJ2ludGVyZmFjZVR5cGVDaGVjayc6XG5cdFx0XHRcdHRoaXNba2V5XSA9IHZhbHVlO1xuXHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdnbG9iYWxrZXknOlxuXHRcdFx0XHR0aGlzLnNldEdsb2JhbEtleSh2YWx1ZSk7XG5cdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2F1dG9sb2FkUGF0aFJlc29sdmVyJzpcblx0XHRcdFx0dGhpcy5zZXRBdXRvbG9hZFBhdGhSZXNvbHZlcih2YWx1ZSk7XG5cdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3J1bGVzRGVmYXVsdCc6XG5cdFx0XHRcdHRoaXMuc2V0UnVsZXNEZWZhdWx0KHZhbHVlKTtcblx0XHRcdGJyZWFrO1xuXHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgY29uZmlnIGtleSAnK2tleSk7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblx0XG5cdHNldFJ1bGVzRGVmYXVsdChydWxlc0RlZmF1bHQpe1xuXHRcdHRoaXMucnVsZXNEZWZhdWx0ID0ge1xuXHRcdFx0Li4udGhpcy5ydWxlc0RlZmF1bHQsXG5cdFx0XHQuLi5ydWxlc0RlZmF1bHQsXG5cdFx0fTtcblx0fVxuXHRcblx0c2V0QXV0b2xvYWRQYXRoUmVzb2x2ZXIoYXV0b2xvYWRQYXRoUmVzb2x2ZXIpe1xuXHRcdFxuXHRcdGlmKHR5cGVvZiBhdXRvbG9hZFBhdGhSZXNvbHZlciA9PSAnb2JqZWN0Jyl7XG5cdFx0XHRcblx0XHRcdGNvbnN0IGFsaWFzTWFwID0gYXV0b2xvYWRQYXRoUmVzb2x2ZXI7XG5cdFx0XHRhdXRvbG9hZFBhdGhSZXNvbHZlciA9IChwYXRoKT0+e1xuXHRcdFx0XHRPYmplY3Qua2V5cyhhbGlhc01hcCkuZm9yRWFjaChhbGlhcz0+e1xuXHRcdFx0XHRcdGNvbnN0IHJlYWxQYXRoID0gYWxpYXNNYXBbYWxpYXNdO1xuXHRcdFx0XHRcdGlmKHBhdGggPT0gYWxpYXMpe1xuXHRcdFx0XHRcdFx0cGF0aCA9IHJlYWxQYXRoO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGlmKHBhdGguc3Vic3RyKDAsYWxpYXMubGVuZ3RoKzEpPT1hbGlhcysnLycpe1xuXHRcdFx0XHRcdFx0cGF0aCA9IHJlYWxQYXRoK3BhdGguc3Vic3RyKGFsaWFzLmxlbmd0aCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuIHBhdGg7XG5cdFx0XHR9O1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLmF1dG9sb2FkUGF0aFJlc29sdmVyID0gYXV0b2xvYWRQYXRoUmVzb2x2ZXI7XG5cdH1cblx0XG5cdHNldEdsb2JhbEtleShnbG9iYWxLZXkpe1xuXHRcdGlmKGdsb2JhbEtleT09PXRydWUpe1xuXHRcdFx0Z2xvYmFsS2V5ID0gJ2RpJztcblx0XHR9XG5cdFx0Z2xvYmFsW2dsb2JhbEtleV0gPSBtYWtlQ29udGFpbmVyQXBpKHRoaXMpO1xuXHR9XG5cdFxuXHRsb2FkUGF0aHMoZGlycyl7XG5cdFx0T2JqZWN0LmtleXMoZGlycykuZm9yRWFjaChkaXJLZXk9Pntcblx0XHRcdGNvbnN0IGNvbnRleHQgPSBkaXJzW2RpcktleV07XG5cdFx0XHRcblx0XHRcdGlmKGNvbnRleHQgaW5zdGFuY2VvZiBEZXBlbmRlbmN5KXtcblx0XHRcdFx0dGhpcy5yZXF1aXJlc1tkaXJLZXldID0gY29udGV4dC5nZXREZXBlbmRlbmN5KCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdFx0XHRcdFxuXHRcdFx0Y29udGV4dC5rZXlzKCkuZm9yRWFjaCgoZmlsZW5hbWUpPT57XG5cdFx0XHRcdFxuXHRcdFx0XHRsZXQga2V5ID0gZmlsZW5hbWU7XG5cdFx0XHRcdGlmKGtleS5zdWJzdHIoMCwyKT09Jy4vJyl7XG5cdFx0XHRcdFx0a2V5ID0ga2V5LnN1YnN0cigyKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0a2V5ID0gZGlyS2V5KycvJytrZXkuc3Vic3RyKDAsIGtleS5sYXN0SW5kZXhPZignLicpIHx8IGtleS5sZW5ndGgpO1xuXHRcdFx0XHRpZihrZXkuc3BsaXQoJy8nKS5wb3AoKT09J2luZGV4Jyl7XG5cdFx0XHRcdFx0a2V5ID0ga2V5LnN1YnN0cigwLCBrZXkubGFzdEluZGV4T2YoJy8nKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5yZXF1aXJlc1trZXldID0gY29udGV4dChmaWxlbmFtZSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXHRcblx0XG5cdGFkZFJ1bGVzKHJ1bGVzKXtcblx0XHRpZih0eXBlb2YgcnVsZXMgPT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRydWxlcyA9IHJ1bGVzKHRoaXMpO1xuXHRcdH1cblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhydWxlcykuZm9yRWFjaChpbnRlcmZhY2VOYW1lID0+IHRoaXMuYWRkUnVsZShpbnRlcmZhY2VOYW1lLCBydWxlc1tpbnRlcmZhY2VOYW1lXSwgZmFsc2UpKTtcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHJ1bGVzKS5mb3JFYWNoKGludGVyZmFjZU5hbWUgPT4gdGhpcy5hZGRSdWxlKGludGVyZmFjZU5hbWUsIHJ1bGVzW2ludGVyZmFjZU5hbWVdLCBmYWxzZSkpO1xuXHRcdHRoaXMucnVsZXNEZXRlY3RMYXp5TG9hZCgpO1xuXHR9XG5cdGFkZFJ1bGUoaW50ZXJmYWNlTmFtZSwgcnVsZSwgZGV0ZWN0TGF6eUxvYWQgPSB0cnVlKXtcblx0XHRpZih0eXBlb2YgcnVsZSA9PSAnZnVuY3Rpb24nKXtcblx0XHRcdHJ1bGUgPSBydWxlKHRoaXMpO1xuXHRcdH1cblx0XHRcblx0XHRpZih0aGlzLnJ1bGVzW2ludGVyZmFjZU5hbWVdID09PSB1bmRlZmluZWQpe1xuXHRcdFx0dGhpcy5ydWxlc1tpbnRlcmZhY2VOYW1lXSA9IHRoaXMubWVyZ2VSdWxlKHt9LCB0aGlzLnJ1bGVzRGVmYXVsdCk7XG5cdFx0fVxuXHRcdFxuXHRcdHRoaXMucnVsZXNbaW50ZXJmYWNlTmFtZV0gPSB0aGlzLm1lcmdlUnVsZSh0aGlzLnJ1bGVzW2ludGVyZmFjZU5hbWVdLCBydWxlKTtcblx0XHR0aGlzLnByb2Nlc3NSdWxlKGludGVyZmFjZU5hbWUpO1xuXHRcdFxuXHRcdHJ1bGUgPSB0aGlzLnJ1bGVzW2ludGVyZmFjZU5hbWVdO1xuXHRcdFxuXHRcdGxldCB7IGNsYXNzRGVmIH0gPSBydWxlO1xuXHRcdGlmKGNsYXNzRGVmKXtcblx0XHRcdGlmKGNsYXNzRGVmIGluc3RhbmNlb2YgQ2xhc3NEZWYpe1xuXHRcdFx0XHRjbGFzc0RlZiA9IGNsYXNzRGVmLmdldENsYXNzRGVmKCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnJlZ2lzdGVyUmVxdWlyZShpbnRlcmZhY2VOYW1lLCBjbGFzc0RlZik7XG5cdFx0fVxuXHRcdFxuXHRcdGlmKGRldGVjdExhenlMb2FkKXtcblx0XHRcdHRoaXMucnVsZXNEZXRlY3RMYXp5TG9hZCgpO1xuXHRcdH1cblx0XHRcblx0fVxuXHRcblx0dmFsaWRhdGVEZWZhdWx0VmFyKHZhbHVlLCBwcm9wZXJ0eSl7XG5cdFx0aWYodGhpcy5hbGxvd2VkRGVmYXVsdFZhcnMuaW5kZXhPZih2YWx1ZSk9PT0tMSl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgdHlwZSBcIicrdmFsdWUrJ1wiIHNwZWNpZmllZCBmb3IgJytwcm9wZXJ0eSsnLCBwb3NzaWJsZXMgdmFsdWVzOiAnK3RoaXMuYWxsb3dlZERlZmF1bHRWYXJzLmpvaW4oJyB8ICcpKTtcblx0XHR9XG5cdH1cblx0XG5cdGxvYWREZXBlbmRlbmNpZXMoKXtcblx0XHR0aGlzLmxvYWRQYXRocyh0aGlzLmRlcGVuZGVuY2llcyk7XG5cdFx0dGhpcy5yZWdpc3RlclJlcXVpcmVNYXAodGhpcy5yZXF1aXJlcyk7XG5cdH1cblx0cnVsZXNEZXRlY3RMYXp5TG9hZCgpe1xuXHRcdE9iamVjdC5rZXlzKHRoaXMucnVsZXMpLmZvckVhY2goa2V5PT57XG5cdFx0XHR0aGlzLnJ1bGVMYXp5TG9hZChrZXkpO1xuXHRcdH0pO1xuXHR9XG5cdFxuXHRydWxlTGF6eUxvYWQoa2V5LCBzdGFjaz1bXSl7XG5cdFx0Y29uc3QgY2FsbHMgPSBbXTtcblx0XHRjb25zdCBsYXp5Q2FsbHMgPSBbXTtcblx0XHRcblx0XHRjb25zdCBydWxlID0gdGhpcy5ydWxlc1trZXldO1xuXHRcdFxuXHRcdGlmKCFydWxlLmNhbGxzKXtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0XG5cdFx0cnVsZS5jYWxscy5mb3JFYWNoKGNhbGxWYWwgPT4ge1xuXHRcdFx0aWYodHlwZW9mIGNhbGxWYWwgPT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRcdGNhbGxWYWwgPSBbY2FsbFZhbF07XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBbbWV0aG9kLCBwYXJhbXMgPSBbXV0gPSBjYWxsVmFsO1xuXHRcdFx0aWYoIHRoaXMucnVsZUNoZWNrQ3ljbGljTG9hZChwYXJhbXMsIFsga2V5IF0pICl7XG5cdFx0XHRcdGxhenlDYWxscy5wdXNoKGNhbGxWYWwpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZXtcblx0XHRcdFx0Y2FsbHMucHVzaChjYWxsVmFsKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRcblx0XHRydWxlLmNhbGxzID0gY2FsbHM7XG5cdFx0cnVsZS5sYXp5Q2FsbHMgPSAocnVsZS5sYXp5Q2FsbHMgfHwgW10pLmNvbmNhdChsYXp5Q2FsbHMpO1xuXHR9XG5cdHJ1bGVDaGVja0N5Y2xpY0xvYWQocGFyYW1zLCBzdGFjaz1bXSl7XHRcdFxuXHRcdHJldHVybiBPYmplY3Qua2V5cyhwYXJhbXMpLnNvbWUoaz0+e1xuXHRcdFx0Y29uc3QgcGFyYW0gPSBwYXJhbXNba107XG5cdFx0XHRjb25zdCB2ID0gdGhpcy53cmFwVmFyVHlwZShwYXJhbSwgdGhpcy5kZWZhdWx0UnVsZVZhcik7XG5cdFx0XHRpZih2IGluc3RhbmNlb2YgSW50ZXJmYWNlKXtcblx0XHRcdFx0Y29uc3QgaW50ZXJmYWNlTmFtZSA9IHYuZ2V0TmFtZSgpO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYoIXRoaXMucmVzb2x2ZUluc3RhbmNlT2YoaW50ZXJmYWNlTmFtZSwgW10sIGZhbHNlKSl7XG5cdFx0XHRcdFx0Ly9ub3QgZm91bmQsIHVuYWJsZSB0byBjaGVjayBub3dcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdGNvbnN0IHBhcmFtUnVsZSA9IHRoaXMuZ2V0UnVsZShpbnRlcmZhY2VOYW1lKTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmKHN0YWNrLmluZGV4T2YoaW50ZXJmYWNlTmFtZSkhPT0tMSl7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdHN0YWNrLnB1c2goaW50ZXJmYWNlTmFtZSk7XG5cdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdGxldCBjeWNsaWM7XG5cblx0XHRcdFx0aWYocGFyYW1SdWxlLnBhcmFtcyl7XG5cdFx0XHRcdFx0Y3ljbGljID0gdGhpcy5ydWxlQ2hlY2tDeWNsaWNMb2FkKHBhcmFtUnVsZS5wYXJhbXMsIHN0YWNrKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKCFjeWNsaWMpe1xuXHRcdFx0XHRcdGN5Y2xpYyA9IHBhcmFtUnVsZS5jYWxscy5zb21lKGNhbGxWPT57XG5cdFx0XHRcdFx0XHRjb25zdCBbbWV0aG9kLCBwYXJhbXMgPSBbXSBdID0gY2FsbFY7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5ydWxlQ2hlY2tDeWNsaWNMb2FkKHBhcmFtcywgc3RhY2spO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRyZXR1cm4gY3ljbGljO1xuXHRcdFx0XHRcblx0XHRcdH1cblx0XHRcdGlmKHR5cGVvZiB2ID09ICdvYmplY3QnICYmIHYgIT09IG51bGwgJiYgISh2IGluc3RhbmNlb2YgVmFyKSl7XG5cdFx0XHRcdHJldHVybiB0aGlzLnJ1bGVDaGVja0N5Y2xpY0xvYWQodiwgc3RhY2spO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cdFxuXHRwcm9jZXNzUnVsZShrZXksIHN0YWNrID0gW10pe1xuXHRcdGlmKHRoaXMucnVsZXNba2V5XSA9PT0gdW5kZWZpbmVkKXtcblx0XHRcdHRoaXMucnVsZXNba2V5XSA9IHRoaXMubWVyZ2VSdWxlKHt9LCB0aGlzLnJ1bGVzRGVmYXVsdCk7XG5cdFx0fVxuXHRcdGNvbnN0IHJ1bGUgPSB0aGlzLnJ1bGVzW2tleV07XG5cdFx0aWYocnVsZS5pbnN0YW5jZU9mKXtcblx0XHRcdGlmKHN0YWNrLmluZGV4T2Yoa2V5KSE9PS0xKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdDeWNsaWMgaW50ZXJmYWNlIGRlZmluaXRpb24gZXJyb3IgaW4gJytKU09OLnN0cmluZ2lmeShzdGFjay5jb25jYXQoa2V5KSxudWxsLDIpKTtcblx0XHRcdH1cblx0XHRcdHN0YWNrLnB1c2goa2V5KTtcblx0XHRcdHRoaXMucHJvY2Vzc1J1bGUocnVsZS5pbnN0YW5jZU9mLCBzdGFjayk7XG5cdFx0fVxuXHRcdGlmKHJ1bGUuc2luZ2xldG9uKXtcblx0XHRcdHJ1bGUuY2xhc3NEZWYgPSBmdW5jdGlvbigpe1xuXHRcdFx0XHRyZXR1cm4gcnVsZS5zaW5nbGV0b247XG5cdFx0XHR9O1xuXHRcdH1cblx0XHRpZih0eXBlb2YgcnVsZS5jbGFzc0RlZiA9PSAnc3RyaW5nJyl7XG5cdFx0XHRjb25zdCBjbGFzc0RlZk5hbWUgPSBydWxlLmNsYXNzRGVmO1xuXHRcdFx0cnVsZS5jbGFzc0RlZiA9ICguLi5hcmdzKT0+e1xuXHRcdFx0XHRjb25zdCBjbGFzc0RlZmluaXRpb24gPSB0aGlzLmdldChjbGFzc0RlZk5hbWUpO1xuXHRcdFx0XHRyZXR1cm4gbmV3IGNsYXNzRGVmaW5pdGlvbiguLi5hcmdzKTtcblx0XHRcdH07XG5cdFx0fVxuXHRcdGlmKHRoaXMudmFsaWRhdGVBdXRvbG9hZEZpbGVOYW1lKGtleSkpe1xuXHRcdFx0aWYocnVsZS5hdXRvbG9hZCl7XG5cdFx0XHRcdGNvbnN0IHBhdGggPSBydWxlLnBhdGggfHwga2V5O1xuXHRcdFx0XHRjb25zdCByZXEgPSB0aGlzLnJlcXVpcmVEZXAoa2V5LCBwYXRoKTtcblx0XHRcdFx0aWYocmVxKXtcblx0XHRcdFx0XHR0aGlzLnJlZ2lzdGVyUmVxdWlyZShrZXksIHJlcSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0XG5cdHZhbGlkYXRlQXV0b2xvYWRGaWxlTmFtZShuYW1lKXtcblx0XHRpZih0eXBlb2YgbmFtZSA9PSAnc3RyaW5nJyAmJiBuYW1lLnN1YnN0cigwLDEpPT09JyMnKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0XG5cdHJlcXVpcmVEZXAoa2V5LCByZXF1aXJlUGF0aCl7XG5cdFx0aWYodGhpcy5yZXF1aXJlc1trZXldKXtcblx0XHRcdHJldHVybiB0aGlzLnJlcXVpcmVzW2tleV07XG5cdFx0fVxuXHRcdFxuXHRcdHJlcXVpcmVQYXRoID0gdGhpcy5hdXRvbG9hZFBhdGhSZXNvbHZlcihyZXF1aXJlUGF0aCk7XG5cdFx0XG5cdFx0Y29uc3QgZm91bmQgPSB0aGlzLmF1dG9sb2FkRXh0ZW5zaW9ucy5jb25jYXQoJycpLnNvbWUoIGV4dCA9PiB7XG5cdFx0XHRcblx0XHRcdGNvbnN0IHBhdGhGcmFnbWVudHMgPSByZXF1aXJlUGF0aC5zcGxpdCgnOicpO1xuXHRcdFx0XG5cdFx0XHRcblx0XHRcdGxldCBwYXRoID0gcGF0aEZyYWdtZW50cy5zaGlmdCgpO1xuXHRcdFx0aWYoZXh0KXtcblx0XHRcdFx0cGF0aCArPSAnLicrZXh0O1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRcblx0XHRcdGlmKHRoaXMuZGVwRXhpc3RzKHBhdGgpKXtcblx0XHRcdFx0bGV0IHJlcXVpcmVkID0gdGhpcy5kZXBSZXF1aXJlKHBhdGgpO1xuXHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRpZihwYXRoRnJhZ21lbnRzLmxlbmd0aCl7XG5cdFx0XHRcdFx0cGF0aEZyYWdtZW50cy5mb3JFYWNoKCBzdWJLZXkgPT4ge1xuXHRcdFx0XHRcdFx0aWYodHlwZW9mIHJlcXVpcmVkICE9PSAndW5kZWZpbmVkJyAmJiByZXF1aXJlZCAhPT0gbnVsbCl7XG5cdFx0XHRcdFx0XHRcdHJlcXVpcmVkID0gcmVxdWlyZWRbc3ViS2V5XTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0XG5cdFx0XHRcdHRoaXMucmVxdWlyZXNba2V5XSA9IHJlcXVpcmVkO1xuXHRcdFx0XHRcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9KTtcblx0XHRpZiggISBmb3VuZCAmJiAoKHRoaXMuYXV0b2xvYWRGYWlsT25NaXNzaW5nRmlsZT09PSdwYXRoJyAmJiByZXF1aXJlUGF0aCkgfHwgdGhpcy5hdXRvbG9hZEZhaWxPbk1pc3NpbmdGaWxlPT09dHJ1ZSkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvcignTWlzc2luZyBleHBlY3RlZCBkZXBlbmRlbmN5IGluamVjdGlvbiBmaWxlIFwiJytyZXF1aXJlUGF0aCsnXCInKTtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIHRoaXMucmVxdWlyZXNba2V5XTtcblx0fVxuXHRcblx0XG5cdHJlZ2lzdGVyUmVxdWlyZU1hcChyZXF1aXJlcyl7XG5cdFx0T2JqZWN0LmtleXMocmVxdWlyZXMpLmZvckVhY2goKG5hbWUpPT57XG5cdFx0XHR0aGlzLnJlZ2lzdGVyUmVxdWlyZShuYW1lLHJlcXVpcmVzW25hbWVdKTtcblx0XHR9KTtcblx0fVxuXHRyZWdpc3RlclJlcXVpcmUobmFtZSxyKXtcblx0XHRpZih0eXBlb2YgciA9PSAnb2JqZWN0JyAmJiB0eXBlb2Ygci5kZWZhdWx0ID09ICdmdW5jdGlvbicpe1xuXHRcdFx0ciA9IHIuZGVmYXVsdDtcblx0XHR9XG5cdFx0aWYodHlwZW9mIHIgIT09ICdmdW5jdGlvbicpe1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBydWxlID0gdGhpcy5nZXRSdWxlQmFzZShuYW1lKTtcblx0XHRpZihydWxlLmRlY29yYXRvciAmJiByW3RoaXMuc3ltQ2xhc3NOYW1lXSl7XG5cdFx0XHRyID0gY2xhc3MgZXh0ZW5kcyBye307XG5cdFx0fVxuXHRcdFxuXHRcdGlmKHJ1bGUuZGVjb3JhdG9yKXtcblx0XHRcdHRoaXMuZGVjb3JhdG9yKG5hbWUpKHIpO1xuXHRcdH1cblx0XHRlbHNle1xuXHRcdFx0dGhpcy5yZWdpc3RlckNsYXNzKG5hbWUsIHIpO1xuXHRcdH1cblx0fVxuXHRcblx0d3JhcCh0eXBlcyA9IFtdLCB3cmFwID0gdHJ1ZSwgaW50ZXJmYWNlTmFtZSl7XG5cdFx0cmV0dXJuICh0YXJnZXQsIG1ldGhvZCk9Pntcblx0XHRcdHRhcmdldFttZXRob2RdID0gdGhpcy5kZWNvcmF0b3JNZXRob2QodGFyZ2V0LCBtZXRob2QsIHR5cGVzLCB3cmFwKTtcblx0XHRcdHJldHVybiB0YXJnZXQ7XG5cdFx0fTtcblx0fVxuXHRkZWNvcmF0b3IoLi4uYXJncyl7XG5cdFx0cmV0dXJuICh0YXJnZXQsIG1ldGhvZCk9Pntcblx0XHRcdGlmKG1ldGhvZCA9PT0gdW5kZWZpbmVkKXtcblx0XHRcdFx0Y29uc3QgWyBjbGFzc05hbWUsIHR5cGVzID0gW10gXSA9IGFyZ3M7XG5cdFx0XHRcdHRoaXMuZGVjb3JhdG9yQ2xhc3ModGFyZ2V0LCBjbGFzc05hbWUsIHR5cGVzKTtcblx0XHRcdH1cblx0XHRcdGVsc2V7XG5cdFx0XHRcdGNvbnN0IFsgdHlwZXMgPSBbXSwgd3JhcCA9IGZhbHNlLCBpbnRlcmZhY2VOYW1lIF0gPSBhcmdzO1xuXHRcdFx0XHR0YXJnZXRbbWV0aG9kXSA9IHRoaXMuZGVjb3JhdG9yTWV0aG9kKHRhcmdldCwgbWV0aG9kLCB0eXBlcywgd3JhcCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGFyZ2V0O1xuXHRcdH07XG5cdH1cblx0ZGVjb3JhdG9yQ2xhc3ModGFyZ2V0LCBjbGFzc05hbWUsIHR5cGVzKXtcblx0XHR0aGlzLmRlZmluZVN5bSh0YXJnZXQsIHRoaXMuc3ltQ2xhc3NOYW1lLCBjbGFzc05hbWUpO1xuXHRcdFxuXHRcdHRoaXMucmVnaXN0ZXJDbGFzcyhjbGFzc05hbWUsIHRhcmdldCk7XG5cdFx0XG5cdFx0aWYodHlwZW9mIHR5cGVzID09ICdmdW5jdGlvbicpe1xuXHRcdFx0dHlwZXMgPSB0eXBlcygpO1xuXHRcdH1cblx0XHR0eXBlcyA9IHR5cGVzLm1hcCh0eXBlID0+IHRoaXMud3JhcFZhclR5cGUodHlwZSwgdGhpcy5kZWZhdWx0RGVjb3JhdG9yVmFyKSk7XG5cdFx0XG5cdFx0aWYgKHRhcmdldFt0aGlzLnN5bUludGVyZmFjZXNdKSB7XG5cdFx0XHR0eXBlcyA9IHR5cGVzLmNvbmNhdCh0YXJnZXRbdGhpcy5zeW1JbnRlcmZhY2VzXSk7XG5cdFx0fVxuXHRcdHRoaXMuZGVmaW5lU3ltKHRhcmdldCwgdGhpcy5zeW1JbnRlcmZhY2VzLCB0eXBlcyk7XG5cdFx0XG5cdFx0cmV0dXJuIHRhcmdldDtcblx0fVxuXHRkZWNvcmF0b3JNZXRob2QodGFyZ2V0LCBtZXRob2QsIHR5cGVzLCB3cmFwLCBpbnRlcmZhY2VOYW1lKXtcblx0XHRpZih0eXBlb2YgdHlwZXMgPT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHR0eXBlcyA9IHR5cGVzKCk7XG5cdFx0fVxuXHRcdHR5cGVzID0gdHlwZXMubWFwKHR5cGUgPT4gdGhpcy53cmFwVmFyVHlwZSh0eXBlLCB0aGlzLmRlZmF1bHREZWNvcmF0b3JWYXIpKTtcblx0XHRcblx0XHRjb25zdCBmbiA9IHRhcmdldFttZXRob2RdO1xuXHRcdFxuXHRcdGlmKHdyYXApe1xuXHRcdFx0XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdHJldHVybiBmdW5jdGlvbigpe1xuXHRcdFx0XHRjb25zdCBydWxlID0gIHNlbGYuZ2V0UnVsZUJhc2UoaW50ZXJmYWNlTmFtZSB8fCB0YXJnZXRbc2VsZi5zeW1DbGFzc05hbWVdKTtcblx0XHRcdFx0Y29uc3QgcGFyYW1zID0gdHlwZXMubWFwKCBwYXJhbSA9PiBzZWxmLmdldFBhcmFtKHBhcmFtLCBydWxlLCB7fSwgc2VsZi5kZWZhdWx0UnVsZVZhcikgKTtcblx0XHRcdFx0Y29uc3QgcmVzb2x2ZWRQYXJhbXMgPSBzdHJ1Y3R1cmVkUmVzb2x2ZVBhcmFtc0ludGVyZmFjZSh0eXBlcywgcGFyYW1zKTtcblx0XHRcdFx0cmV0dXJuIGZuLmFwcGx5KHRoaXMsIHJlc29sdmVkUGFyYW1zKTtcblx0XHRcdH07XG5cdFx0XHRcblx0XHR9XG5cdFx0ZWxzZXtcblx0XHRcblx0XHRcdGlmIChmblt0aGlzLnN5bUludGVyZmFjZXNdKSB7XG5cdFx0XHRcdHR5cGVzID0gdHlwZXMuY29uY2F0KGZuW3RoaXMuc3ltSW50ZXJmYWNlc10pO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5kZWZpbmVTeW0oZm4sIHRoaXMuc3ltSW50ZXJmYWNlcywgdHlwZXMpO1xuXHRcdFxuXHRcdFx0cmV0dXJuIGZuO1xuXHRcdH1cblx0fVxuXHRcblx0ZXhpc3RzKG5hbWUpe1xuXHRcdHJldHVybiBCb29sZWFuKHRoaXMucnVsZXNbbmFtZV0pO1xuXHR9XG5cdFxuXHRnZXQoaW50ZXJmYWNlRGVmLCBhcmdzLCBzaGFyZWRJbnN0YW5jZXMgPSB7fSwgc3RhY2sgPSBbXSl7XG5cdFx0cmV0dXJuIHRoaXMucHJvdmlkZXIoaW50ZXJmYWNlRGVmKShhcmdzLCBzaGFyZWRJbnN0YW5jZXMsIHN0YWNrKTtcblx0fVxuXHRwcm92aWRlcihpbnRlcmZhY2VOYW1lKXtcblx0XHRcblx0XHRpZih0eXBlb2YgaW50ZXJmYWNlTmFtZSA9PSAnZnVuY3Rpb24nKXtcblx0XHRcdGludGVyZmFjZU5hbWUgPSBpbnRlcmZhY2VOYW1lW3RoaXMuc3ltQ2xhc3NOYW1lXTtcblx0XHRcdGlmKCFpbnRlcmZhY2VOYW1lKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdVbnJlZ2lzdHJlZCBjbGFzcyAnK2ludGVyZmFjZU5hbWUuY29uc3RydWN0b3IubmFtZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdGlmKGludGVyZmFjZU5hbWUgaW5zdGFuY2VvZiBJbnRlcmZhY2Upe1xuXHRcdFx0aW50ZXJmYWNlTmFtZSA9IGludGVyZmFjZU5hbWUuZ2V0TmFtZSgpO1xuXHRcdH1cblx0XHRcblx0XHRcblx0XHRpZighdGhpcy5wcm92aWRlclJlZ2lzdHJ5W2ludGVyZmFjZU5hbWVdKXtcblx0XHRcdHRoaXMucHJvdmlkZXJSZWdpc3RyeVtpbnRlcmZhY2VOYW1lXSA9IHRoaXMubWFrZVByb3ZpZGVyKGludGVyZmFjZU5hbWUpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5wcm92aWRlclJlZ2lzdHJ5W2ludGVyZmFjZU5hbWVdO1xuXHR9XG5cdFxuXHRtYWtlUHJvdmlkZXIoaW50ZXJmYWNlTmFtZSl7XG5cdFx0Y29uc3QgcnVsZSA9IHRoaXMuZ2V0UnVsZShpbnRlcmZhY2VOYW1lKTtcblx0XHRjb25zdCBjbGFzc0RlZiA9IHRoaXMucmVzb2x2ZUluc3RhbmNlT2YoaW50ZXJmYWNlTmFtZSk7XG5cdFx0cmV0dXJuIChhcmdzLCBzaGFyZWRJbnN0YW5jZXMsIHN0YWNrKT0+e1xuXHRcdFx0XG5cdFx0XHQvL2NoZWNrIGZvciBzaGFyZWQgYWZ0ZXIgcGFyYW1zIGxvYWRcblx0XHRcdGlmKHRoaXMuaW5zdGFuY2VSZWdpc3RyeVtpbnRlcmZhY2VOYW1lXSl7XG5cdFx0XHRcdHJldHVybiB0aGlzLmluc3RhbmNlUmVnaXN0cnlbaW50ZXJmYWNlTmFtZV07XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHNoYXJlZEluc3RhbmNlcyA9IE9iamVjdC5hc3NpZ24oe30sIHNoYXJlZEluc3RhbmNlcyk7XG5cdFx0XHRydWxlLnNoYXJlZEluVHJlZS5mb3JFYWNoKHNoYXJlSW50ZXJmYWNlID0+IHtcblx0XHRcdFx0aWYoIXNoYXJlZEluc3RhbmNlc1tzaGFyZUludGVyZmFjZV0pe1xuXHRcdFx0XHRcdHNoYXJlZEluc3RhbmNlc1tzaGFyZUludGVyZmFjZV0gPSBuZXcgU2hhcmVkSW5zdGFuY2Uoc2hhcmVJbnRlcmZhY2UsIHRoaXMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdFxuXHRcdFx0bGV0IHBhcmFtcztcblx0XHRcdGxldCBkZWZhdWx0VmFyO1xuXHRcdFx0aWYoYXJncyl7XG5cdFx0XHRcdHBhcmFtcyA9IGFyZ3M7XG5cdFx0XHRcdGRlZmF1bHRWYXIgPSB0aGlzLmRlZmF1bHRBcmdzVmFyO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZXtcblx0XHRcdFx0cGFyYW1zID0gcnVsZS5wYXJhbXMgfHwgY2xhc3NEZWZbdGhpcy5zeW1JbnRlcmZhY2VzXSB8fCBbXTtcblx0XHRcdFx0ZGVmYXVsdFZhciA9IHRoaXMuZGVmYXVsdFJ1bGVWYXI7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGNvbnN0IHJlc29sdmVkUGFyYW1zID0gcGFyYW1zLm1hcCgoaW50ZXJmYWNlRGVmLCBpbmRleCk9Pntcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0UGFyYW0oaW50ZXJmYWNlRGVmLCBydWxlLCBzaGFyZWRJbnN0YW5jZXMsIGRlZmF1bHRWYXIsIGluZGV4LCBzdGFjayk7XG5cdFx0XHR9KTtcblx0XHRcdFxuXHRcdFx0Ly9yZWNoZWNrIGZvciBzaGFyZWQgYWZ0ZXIgcGFyYW1zIGxvYWRcblx0XHRcdGlmKHRoaXMuaW5zdGFuY2VSZWdpc3RyeVtpbnRlcmZhY2VOYW1lXSl7XG5cdFx0XHRcdHJldHVybiB0aGlzLmluc3RhbmNlUmVnaXN0cnlbaW50ZXJmYWNlTmFtZV07XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGNvbnN0IG1ha2VJbnN0YW5jZSA9IChyZXNvbHZlZFBhcmFtcyk9Pntcblx0XHRcdFx0XG5cdFx0XHRcdHJlc29sdmVkUGFyYW1zID0gc3RydWN0dXJlZFJlc29sdmVQYXJhbXNJbnRlcmZhY2UocGFyYW1zLCByZXNvbHZlZFBhcmFtcyk7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZih0aGlzLmludGVyZmFjZVR5cGVDaGVjayl7XG5cdFx0XHRcdFx0c3RydWN0dXJlZEludGVyZmFjZVByb3RvdHlwZShydWxlLnBhcmFtcyB8fCBjbGFzc0RlZlt0aGlzLnN5bUludGVyZmFjZXNdIHx8IFtdLCByZXNvbHZlZFBhcmFtcyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdFxuXHRcdFx0XHRjb25zdCBpbnN0YW5jZSA9IG5ldyBjbGFzc0RlZiguLi5yZXNvbHZlZFBhcmFtcyk7XG5cdFx0XHRcdFxuXHRcdFx0XHRjb25zdCBmaW5hbGl6ZUluc3RhbmNlQ3JlYXRpb24gPSAoKT0+e1xuXHRcdFx0XHRcdGlmKHJ1bGUuc2hhcmVkKXtcblx0XHRcdFx0XHRcdHRoaXMucmVnaXN0ZXJJbnN0YW5jZShpbnRlcmZhY2VOYW1lLCBpbnN0YW5jZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGNvbnN0IGNhbGxzUmV0dXJuID0gdGhpcy5ydW5DYWxscyhydWxlLmxhenlDYWxscywgaW5zdGFuY2UsIHJ1bGUsIHNoYXJlZEluc3RhbmNlcyk7XG5cdFx0XHRcdFx0aWYoY2FsbHNSZXR1cm4gaW5zdGFuY2VvZiB0aGlzLlByb21pc2VJbnRlcmZhY2Upe1xuXHRcdFx0XHRcdFx0cmV0dXJuIGNhbGxzUmV0dXJuLnRoZW4oKCk9Pmluc3RhbmNlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0cmV0dXJuIGluc3RhbmNlO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHRcblx0XHRcdFx0Y29uc3QgY2FsbHNSZXR1cm4gPSB0aGlzLnJ1bkNhbGxzKHJ1bGUuY2FsbHMsIGluc3RhbmNlLCBydWxlLCBzaGFyZWRJbnN0YW5jZXMpO1xuXHRcdFx0XHRpZihjYWxsc1JldHVybiBpbnN0YW5jZW9mIHRoaXMuUHJvbWlzZUludGVyZmFjZSl7XG5cdFx0XHRcdFx0cmV0dXJuIGNhbGxzUmV0dXJuLnRoZW4oKCk9PmZpbmFsaXplSW5zdGFuY2VDcmVhdGlvbigpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0cmV0dXJuIGZpbmFsaXplSW5zdGFuY2VDcmVhdGlvbigpO1xuXHRcdFx0fTtcblx0XHRcdGlmKHN0cnVjdHVyZWRIYXNQcm9taXNlKHBhcmFtcywgcmVzb2x2ZWRQYXJhbXMsIHRoaXMuUHJvbWlzZUludGVyZmFjZSkpe1xuXHRcdFx0XHRyZXR1cm4gc3RydWN0dXJlZFByb21pc2VBbGxSZWN1cnNpdmUocGFyYW1zLCByZXNvbHZlZFBhcmFtcywgdGhpcy5Qcm9taXNlSW50ZXJmYWNlLCB0aGlzLlByb21pc2VGYWN0b3J5ICkudGhlbihyZXNvbHZlZFBhcmFtcz0+e1xuXHRcdFx0XHRcdHJldHVybiBtYWtlSW5zdGFuY2UocmVzb2x2ZWRQYXJhbXMpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0cmV0dXJuIG1ha2VJbnN0YW5jZShyZXNvbHZlZFBhcmFtcyk7XG5cdFx0fTtcblx0fVxuXHRcblx0Z2V0U3Vic3RpdHV0aW9uUGFyYW0oaW50ZXJmYWNlRGVmLCBydWxlLCBpbmRleCl7XG5cdFx0Y29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMud3JhcFZhclR5cGUocnVsZS5zdWJzdGl0dXRpb25zLCB0aGlzLmRlZmF1bHRSdWxlVmFyKTtcblx0XHRcblx0XHRpZih0eXBlb2YgaW5kZXggIT09ICd1bmRlZmluZWQnICYmIHN1YnN0aXR1dGlvbnNbaW5kZXhdKXtcblx0XHRcdGludGVyZmFjZURlZiA9IHN1YnN0aXR1dGlvbnNbaW5kZXhdO1xuXHRcdFx0aW50ZXJmYWNlRGVmID0gdGhpcy53cmFwVmFyVHlwZShpbnRlcmZhY2VEZWYsIHRoaXMuZGVmYXVsdFJ1bGVWYXIsIHRydWUpO1xuXHRcdH1cblx0XHRcblx0XHRpZihpbnRlcmZhY2VEZWYgaW5zdGFuY2VvZiBJbnRlcmZhY2Upe1xuXHRcdFx0Y29uc3QgaW50ZXJmYWNlTmFtZSA9IGludGVyZmFjZURlZi5nZXROYW1lKCk7XG5cdFx0XHRpZihzdWJzdGl0dXRpb25zW2ludGVyZmFjZU5hbWVdKXtcblx0XHRcdFx0aW50ZXJmYWNlRGVmID0gc3Vic3RpdHV0aW9uc1tpbnRlcmZhY2VOYW1lXTtcblx0XHRcdFx0aW50ZXJmYWNlRGVmID0gdGhpcy53cmFwVmFyVHlwZShpbnRlcmZhY2VEZWYsIHRoaXMuZGVmYXVsdFJ1bGVWYXIsIHRydWUpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fVxuXHRcdHJldHVybiBpbnRlcmZhY2VEZWY7XG5cdH1cblx0Z2V0UGFyYW0oaW50ZXJmYWNlRGVmLCBydWxlLCBzaGFyZWRJbnN0YW5jZXMgPSB7fSwgZGVmYXVsdFZhciA9ICdpbnRlcmZhY2UnLCBpbmRleCA9IHVuZGVmaW5lZCwgc3RhY2sgPSBbXSl7XG5cdFx0XG5cdFx0aW50ZXJmYWNlRGVmID0gdGhpcy53cmFwVmFyVHlwZShpbnRlcmZhY2VEZWYsIGRlZmF1bHRWYXIpO1xuXHRcdFxuXHRcdGludGVyZmFjZURlZiA9IHRoaXMuZ2V0U3Vic3RpdHV0aW9uUGFyYW0oaW50ZXJmYWNlRGVmLCBydWxlLCBpbmRleCk7XG5cdFx0XG5cdFx0aWYoaW50ZXJmYWNlRGVmIGluc3RhbmNlb2YgRmFjdG9yeSl7XG5cdFx0XHRyZXR1cm4gaW50ZXJmYWNlRGVmLmNhbGxiYWNrKHNoYXJlZEluc3RhbmNlcyk7XG5cdFx0fVxuXHRcdGlmKGludGVyZmFjZURlZiBpbnN0YW5jZW9mIFZhbHVlKXtcblx0XHRcdHJldHVybiBpbnRlcmZhY2VEZWYuZ2V0VmFsdWUoKTtcblx0XHR9XG5cdFx0aWYoaW50ZXJmYWNlRGVmIGluc3RhbmNlb2YgUmVxdWlyZSl7XG5cdFx0XHRyZXR1cm4gaW50ZXJmYWNlRGVmLnJlcXVpcmUoKTtcblx0XHR9XG5cdFx0XG5cdFx0aWYoaW50ZXJmYWNlRGVmIGluc3RhbmNlb2YgSW50ZXJmYWNlKXtcblx0XHRcdFxuXHRcdFx0Y29uc3QgaW50ZXJmYWNlTmFtZSA9IGludGVyZmFjZURlZi5nZXROYW1lKCk7XG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0c3RhY2sgPSBzdGFjay5zbGljZSgwKTtcblx0XHRcdGlmKHN0YWNrLmluZGV4T2YoaW50ZXJmYWNlTmFtZSkhPT0tMSl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignQ3ljbGljIGRlcGVuZGVuY3kgZXJyb3IgaW4gJytKU09OLnN0cmluZ2lmeShzdGFjay5jb25jYXQoaW50ZXJmYWNlTmFtZSksbnVsbCwyKSk7XG5cdFx0XHR9XG5cdFx0XHRzdGFjay5wdXNoKGludGVyZmFjZU5hbWUpO1xuXHRcdFx0XG5cdFx0XHRsZXQgaW5zdGFuY2U7XG5cdFx0XHRcblx0XHRcdGlmKHNoYXJlZEluc3RhbmNlc1tpbnRlcmZhY2VOYW1lXSl7XG5cdFx0XHRcdGluc3RhbmNlID0gc2hhcmVkSW5zdGFuY2VzW2ludGVyZmFjZU5hbWVdLmdldChzaGFyZWRJbnN0YW5jZXMsIHN0YWNrKTtcblx0XHRcdH1cblx0XHRcdGVsc2V7XG5cdFx0XHRcdGluc3RhbmNlID0gdGhpcy5nZXQoaW50ZXJmYWNlTmFtZSwgdW5kZWZpbmVkLCBzaGFyZWRJbnN0YW5jZXMsIHN0YWNrKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Y29uc3QgaW5zdGFuY2VSdWxlID0gdGhpcy5nZXRSdWxlKGludGVyZmFjZU5hbWUpO1xuXHRcdFx0XG5cdFx0XHQvL2lmKCFpbnN0YW5jZVJ1bGUuYXN5bmNSZXNvbHZlICYmIGluc3RhbmNlIGluc3RhbmNlb2YgdGhpcy5Qcm9taXNlSW50ZXJmYWNlKXtcblx0XHRcdGlmKCFpbnN0YW5jZVJ1bGUuYXN5bmNSZXNvbHZlKXtcblx0XHRcdFx0cmV0dXJuIG5ldyBTeW5jKGluc3RhbmNlKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0cmV0dXJuIGluc3RhbmNlO1xuXHRcdH1cblx0XHRcblx0XHRpZih0eXBlb2YgaW50ZXJmYWNlRGVmID09ICdvYmplY3QnICYmICEoaW50ZXJmYWNlRGVmIGluc3RhbmNlb2YgVmFyKSl7XG5cdFx0XHRjb25zdCBvID0ge307XG5cdFx0XHRPYmplY3Qua2V5cyhpbnRlcmZhY2VEZWYpLmZvckVhY2goayA9PiB7XG5cdFx0XHRcdG9ba10gPSB0aGlzLmdldFBhcmFtKGludGVyZmFjZURlZltrXSwgcnVsZSwgc2hhcmVkSW5zdGFuY2VzLCBkZWZhdWx0VmFyLCB1bmRlZmluZWQsIHN0YWNrKTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIG87XG5cdFx0fVxuXHRcblx0XHRyZXR1cm4gaW50ZXJmYWNlRGVmO1xuXHR9XG5cdFxuXHR3cmFwVmFyVHlwZSh0eXBlLCBkZWZhdWx0VmFyLCByZXNvbHZlRnVuY3Rpb24pe1xuXHRcdGlmKHJlc29sdmVGdW5jdGlvbiAmJiB0eXBlb2YgdHlwZSA9PSAnZnVuY3Rpb24nKXtcblx0XHRcdHR5cGUgPSB0eXBlKCk7XG5cdFx0fVxuXHRcdGlmKHR5cGUgaW5zdGFuY2VvZiBWYXIpe1xuXHRcdFx0cmV0dXJuIHR5cGU7XG5cdFx0fVxuXHRcdGlmKHRoaXMuaXNJbnRlcmZhY2VQcm90b3R5cGUodHlwZSkpe1xuXHRcdFx0cmV0dXJuIHRoaXMuaW50ZXJmYWNlQ2xhc3MoIHR5cGUudG9TdHJpbmcoKSwgdHlwZSApO1xuXHRcdH1cblx0XHRzd2l0Y2goZGVmYXVsdFZhcil7XG5cdFx0XHRjYXNlICdpbnRlcmZhY2UnOlxuXHRcdFx0XHRpZih0eXBlb2YgdHlwZSA9PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKXtcblx0XHRcdFx0XHRjb25zdCBvID0ge307XG5cdFx0XHRcdFx0T2JqZWN0LmtleXModHlwZSkuZm9yRWFjaChrZXk9Pntcblx0XHRcdFx0XHRcdGNvbnN0IHYgPSB0eXBlW2tleV07XG5cdFx0XHRcdFx0XHRvW2tleV0gPSB0eXBlb2YgdiA9PSAnb2JqZWN0JyAmJiB2ICE9PSBudWxsICYmICEodiBpbnN0YW5jZW9mIFZhcikgPyB0aGlzLndyYXBWYXJUeXBlKHYsIGRlZmF1bHRWYXIpIDogdjtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRyZXR1cm4gbztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZih0eXBlb2YgdHlwZSA9PSAnZnVuY3Rpb24nKXtcblx0XHRcdFx0XHRyZXR1cm4gbmV3IHRoaXMuZGVmYXVsdEZ1bmN0aW9uV3JhcHBlcih0eXBlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcy5pbnRlcmZhY2UodHlwZSk7XG5cdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3ZhbHVlJzpcblx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWUodHlwZSk7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdFx0cmV0dXJuIHR5cGU7XG5cdH1cblx0XG5cdGlzSW50ZXJmYWNlUHJvdG90eXBlKHR5cGUpe1xuXHRcdHJldHVybiB0aGlzLmludGVyZmFjZVByb3RvdHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUucHJvdG90eXBlIGluc3RhbmNlb2YgdGhpcy5pbnRlcmZhY2VQcm90b3R5cGU7XG5cdH1cblx0XG5cdHJlZ2lzdGVySW5zdGFuY2UobmFtZSwgaW5zdGFuY2Upe1xuXHRcdHRoaXMuaW5zdGFuY2VSZWdpc3RyeVtuYW1lXSA9IGluc3RhbmNlO1xuXHR9XG5cdFxuXHRnZXRSdWxlQmFzZShpbnRlcmZhY2VOYW1lKXtcblx0XHRjb25zdCBydWxlQmFzZSA9IHRoaXMubWVyZ2VSdWxlKHt9LCB0aGlzLnJ1bGVzRGVmYXVsdCk7XG5cdFx0cnVsZUJhc2UuaW50ZXJmYWNlTmFtZSA9IGludGVyZmFjZU5hbWU7IC8vZm9yIGluZm9cblx0XHRpZihpbnRlcmZhY2VOYW1lKXtcblx0XHRcdHRoaXMubWVyZ2VSdWxlKHJ1bGVCYXNlLCB0aGlzLnJ1bGVzW2ludGVyZmFjZU5hbWVdIHx8IHt9KTtcblx0XHR9XG5cdFx0cmV0dXJuIHJ1bGVCYXNlO1xuXHR9XG5cdFxuXHRnZXRSdWxlKGludGVyZmFjZU5hbWUpe1xuXHRcdGNvbnN0IHJ1bGUgPSB0aGlzLm1lcmdlUnVsZSh7fSwgdGhpcy5ydWxlc0RlZmF1bHQpO1xuXHRcdHJ1bGUuaW50ZXJmYWNlTmFtZSA9IGludGVyZmFjZU5hbWU7IC8vZm9yIGluZm9cblx0XHRpZighaW50ZXJmYWNlTmFtZSl7XG5cdFx0XHRyZXR1cm4gcnVsZTtcblx0XHR9XG5cdFx0XG5cdFx0Y29uc3QgcnVsZUJhc2UgPSB0aGlzLmdldFJ1bGVCYXNlKGludGVyZmFjZU5hbWUpO1xuXHRcdFxuXHRcdGxldCBzdGFjayA9IFtdO1xuXHRcdFxuXHRcdHRoaXMucmVzb2x2ZUluc3RhbmNlT2YoaW50ZXJmYWNlTmFtZSwgc3RhY2spO1xuXHRcdFxuXHRcdGNvbnN0IHJ1bGVzID0gW107XG5cdFx0XG5cdFx0bGV0IGZ1bGxTdGFjaztcblx0XHRcblx0XHRpZihydWxlQmFzZS5pbmhlcml0SW5zdGFuY2VPZil7IFxuXHRcdFx0ZnVsbFN0YWNrID0gbmV3IFNldCggc3RhY2suc2xpY2UoMCwgLTEpICk7XG5cdFx0fVxuXHRcdGVsc2V7XG5cdFx0XHRmdWxsU3RhY2sgPSBuZXcgU2V0KCBzdGFjay5zbGljZSgwLCAxKSApO1xuXHRcdH1cblx0XHRcblx0XHRcblx0XHRpZihydWxlQmFzZS5pbmhlcml0UHJvdG90eXBlKXtcblx0XHRcdHN0YWNrLnJldmVyc2UoKS5mb3JFYWNoKChjKT0+e1xuXHRcdFx0XHRpZih0eXBlb2YgYyA9PSAnZnVuY3Rpb24nKXtcblx0XHRcdFx0XHRsZXQgcGFyZW50UHJvdG8gPSBjO1xuXHRcdFx0XHRcdGxldCBjbGFzc05hbWU7XG5cdFx0XHRcdFx0d2hpbGUocGFyZW50UHJvdG8pe1xuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lID0gcGFyZW50UHJvdG9bdGhpcy5zeW1DbGFzc05hbWVdO1xuXHRcdFx0XHRcdFx0aWYoY2xhc3NOYW1lKXtcblx0XHRcdFx0XHRcdFx0ZnVsbFN0YWNrLmFkZChjbGFzc05hbWUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cGFyZW50UHJvdG8gPSBSZWZsZWN0LmdldFByb3RvdHlwZU9mKHBhcmVudFByb3RvKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0XHRmdWxsU3RhY2sgPSBBcnJheS5mcm9tKGZ1bGxTdGFjaykucmV2ZXJzZSgpO1xuXHRcdFxuXHRcdGZ1bGxTdGFjay5mb3JFYWNoKChjbGFzc05hbWUpPT57XG5cdFx0XHRjb25zdCBtZXJnZVJ1bGUgPSB0aGlzLnJ1bGVzW2NsYXNzTmFtZV07XG5cdFx0XHRcdFxuXHRcdFx0aWYobWVyZ2VSdWxlLmluaGVyaXRNaXhpbnMpe1xuXHRcdFx0XHR0aGlzLm1peGluc1J1bGUocnVsZSwgbWVyZ2VSdWxlLmluaGVyaXRNaXhpbnMpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHR0aGlzLm1lcmdlUnVsZShydWxlLCBtZXJnZVJ1bGUpO1xuXHRcdH0pO1xuXHRcdFxuXHRcdHJldHVybiBydWxlO1xuXHR9XG5cdFxuXHRtaXhpbnNSdWxlKHJ1bGUsIG1peGluc0dyb3VwKXtcblx0XHRjb25zdCBtaXhpbnNHcm91cHMgPSB0aGlzLnJ1bGVDb2xsZWN0RXh0ZW5kc1JlY3Vyc2l2ZShtaXhpbnNHcm91cCkucmV2ZXJzZSgpO1xuXHRcdG1peGluc0dyb3Vwcy5mb3JFYWNoKG1peGluR3JvdXAgPT5cblx0XHRcdG1peGluR3JvdXAuZm9yRWFjaCggbWl4aW4gPT4ge1xuXHRcdFx0XHRjb25zdCBtZXJnZVJ1bGUgPSB0aGlzLnJ1bGVzW21peGluXTtcblx0XHRcdFx0dGhpcy5tZXJnZVJ1bGUocnVsZSwgbWVyZ2VSdWxlLCBmYWxzZSlcblx0XHRcdH0gKVxuXHRcdCk7XG5cdH1cblx0cnVsZUNvbGxlY3RFeHRlbmRzUmVjdXJzaXZlKG1peGluR3JvdXAsIG1peGluc0dyb3VwcyA9IFtdKXtcblx0XHRpZighKG1peGluR3JvdXAgaW5zdGFuY2VvZiBBcnJheSkpe1xuXHRcdFx0bWl4aW5Hcm91cCA9IFttaXhpbkdyb3VwXTtcblx0XHR9XG5cdFx0bWl4aW5zR3JvdXBzLnB1c2gobWl4aW5Hcm91cCk7XG5cdFx0bWl4aW5Hcm91cC5mb3JFYWNoKG1peGluID0+IHtcblx0XHRcdGNvbnN0IHJ1bGUgPSB0aGlzLnJ1bGVzW21peGluXTtcblx0XHRcdGlmKHJ1bGUgJiYgcnVsZS5taXhpbnMpe1xuXHRcdFx0XHR0aGlzLnJ1bGVDb2xsZWN0RXh0ZW5kc1JlY3Vyc2l2ZShydWxlLm1peGlucywgbWl4aW5zR3JvdXBzKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRyZXR1cm4gbWl4aW5zR3JvdXBzO1xuXHR9XG5cblx0cmVnaXN0ZXJDbGFzcyhuYW1lLCB0YXJnZXQpe1xuXHRcdGlmKCF0aGlzLnJ1bGVzW25hbWVdKXtcblx0XHRcdHRoaXMucnVsZXNbbmFtZV0gPSB7fTtcblx0XHR9XG5cdFx0dGhpcy5ydWxlc1tuYW1lXS5jbGFzc0RlZiA9IHRhcmdldDtcblx0fVxuXHRcblx0bWVyZ2VSdWxlKGV4dGVuZFJ1bGUsIHJ1bGUsIG1lcmdlRXh0ZW5kID0gdHJ1ZSl7XG5cdFx0bGV0IHtcblx0XHRcdHNoYXJlZCxcblx0XHRcdGluaGVyaXRJbnN0YW5jZU9mLFxuXHRcdFx0aW5oZXJpdFByb3RvdHlwZSxcblx0XHRcdGluaGVyaXRNaXhpbnMsXG5cdFx0XHRpbnN0YW5jZU9mLFxuXHRcdFx0cGFyYW1zLFxuXHRcdFx0Y2FsbHMsXG5cdFx0XHRsYXp5Q2FsbHMsXG5cdFx0XHRzdWJzdGl0dXRpb25zLFxuXHRcdFx0c2hhcmVkSW5UcmVlLFxuXHRcdFx0Y2xhc3NEZWYsXG5cdFx0XHRzaW5nbGV0b24sXG5cdFx0XHRhc3luY1Jlc29sdmUsXG5cdFx0XHRhc3luY0NhbGxzU2VyaWUsXG5cdFx0XHRhc3luY0NhbGxzUGFyYW1zU2VyaWUsXG5cdFx0XHRkZWNvcmF0b3IsXG5cdFx0XHRhdXRvbG9hZCxcblx0XHRcdHBhdGgsXG5cdFx0fSA9IHJ1bGU7XG5cdFx0aWYoY2xhc3NEZWYgIT09IHVuZGVmaW5lZCl7XG5cdFx0XHRleHRlbmRSdWxlLmNsYXNzRGVmID0gY2xhc3NEZWY7XG5cdFx0fVxuXHRcdGlmKHNoYXJlZCAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUuc2hhcmVkID0gc2hhcmVkO1xuXHRcdH1cblx0XHRpZihpbmhlcml0SW5zdGFuY2VPZiAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUuaW5oZXJpdEluc3RhbmNlT2YgPSBpbmhlcml0SW5zdGFuY2VPZjtcblx0XHR9XG5cdFx0aWYoaW5oZXJpdFByb3RvdHlwZSAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUuaW5oZXJpdFByb3RvdHlwZSA9IGluaGVyaXRQcm90b3R5cGU7XG5cdFx0fVxuXHRcdGlmKGRlY29yYXRvciAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUuZGVjb3JhdG9yID0gZGVjb3JhdG9yO1xuXHRcdH1cblx0XHRpZihhdXRvbG9hZCAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUuYXV0b2xvYWQgPSBhdXRvbG9hZDtcblx0XHR9XG5cdFx0aWYocGF0aCAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUucGF0aCA9IHBhdGg7XG5cdFx0fVxuXHRcdGlmKGluc3RhbmNlT2YgIT09IHVuZGVmaW5lZCl7XG5cdFx0XHRleHRlbmRSdWxlLmluc3RhbmNlT2YgPSBpbnN0YW5jZU9mO1xuXHRcdH1cblx0XHRpZihhc3luY1Jlc29sdmUgIT09IHVuZGVmaW5lZCl7XG5cdFx0XHRleHRlbmRSdWxlLmFzeW5jUmVzb2x2ZSA9IGFzeW5jUmVzb2x2ZTtcblx0XHR9XG5cdFx0aWYoYXN5bmNDYWxsc1NlcmllICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5hc3luY0NhbGxzU2VyaWUgPSBhc3luY0NhbGxzU2VyaWU7XG5cdFx0fVxuXHRcdGlmKGFzeW5jQ2FsbHNQYXJhbXNTZXJpZSAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUuYXN5bmNDYWxsc1BhcmFtc1NlcmllID0gYXN5bmNDYWxsc1BhcmFtc1NlcmllO1xuXHRcdH1cblxuXHRcdGlmKGNhbGxzICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5jYWxscyA9ICggZXh0ZW5kUnVsZS5jYWxscyB8fCBbXSApLmNvbmNhdChjYWxscyk7XG5cdFx0fVxuXHRcdGlmKGxhenlDYWxscyAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUubGF6eUNhbGxzID0gKCBleHRlbmRSdWxlLmxhenlDYWxscyB8fCBbXSApLmNvbmNhdChsYXp5Q2FsbHMpO1xuXHRcdH1cblx0XHRcblx0XHRpZihtZXJnZUV4dGVuZCAmJiBpbmhlcml0TWl4aW5zICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5pbmhlcml0TWl4aW5zID0gaW5oZXJpdE1peGlucy5zbGljZSgwKTtcblx0XHR9XG5cdFx0XG5cdFx0aWYocGFyYW1zICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5wYXJhbXMgPSBwYXJhbXM7XG5cdFx0fVxuXHRcdGlmKHN1YnN0aXR1dGlvbnMgIT09IHVuZGVmaW5lZCl7XG5cdFx0XHRpZighZXh0ZW5kUnVsZS5zdWJzdGl0dXRpb25zKXtcblx0XHRcdFx0ZXh0ZW5kUnVsZS5zdWJzdGl0dXRpb25zID0ge307XG5cdFx0XHR9XG5cdFx0XHRPYmplY3QuYXNzaWduKGV4dGVuZFJ1bGUuc3Vic3RpdHV0aW9ucywgc3Vic3RpdHV0aW9ucyk7XG5cdFx0fVxuXHRcdGlmKHNoYXJlZEluVHJlZSAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGlmKCFleHRlbmRSdWxlLnNoYXJlZEluVHJlZSl7XG5cdFx0XHRcdGV4dGVuZFJ1bGUuc2hhcmVkSW5UcmVlID0gW107XG5cdFx0XHR9XG5cdFx0XHRleHRlbmRSdWxlLnNoYXJlZEluVHJlZSA9IEFycmF5LmZyb20oIG5ldyBTZXQoWy4uLmV4dGVuZFJ1bGUuc2hhcmVkSW5UcmVlLCAuLi5zaGFyZWRJblRyZWVdKSApO1xuXHRcdH1cblx0XHRleHRlbmRSdWxlLnNpbmdsZXRvbiA9IHNpbmdsZXRvbjtcblx0XHRyZXR1cm4gZXh0ZW5kUnVsZTtcblx0fVxuXHRcblx0bWVyZ2VSdWxlcyhleHRlbmRSdWxlcywgcnVsZXMpe1xuXHRcdE9iamVjdC5rZXlzKHJ1bGVzKS5mb3JFYWNoKChrKT0+e1xuXHRcdFx0aWYoIWV4dGVuZFJ1bGVzW2tdKXtcblx0XHRcdFx0ZXh0ZW5kUnVsZXNba10gPSB7fTtcblx0XHRcdH1cblx0XHRcdGV4dGVuZFJ1bGVzW2tdID0gdGhpcy5tZXJnZVJ1bGUoZXh0ZW5kUnVsZXNba10sIHJ1bGVzW2tdKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gZXh0ZW5kUnVsZXM7XG5cdH1cblx0XG5cdHJ1bkNhbGxzKGNhbGxzLCBpbnN0YW5jZSwgcnVsZSwgc2hhcmVkSW5zdGFuY2VzKXtcblx0XHRsZXQgaGFzQXN5bmM7XG5cdFx0XG5cdFx0bGV0IGNhbGxlcnMgPSBjYWxscy5tYXAoKGMpPT4gKCk9PiB7XG5cdFx0XHRcblx0XHRcdGlmKHR5cGVvZiBjID09ICdmdW5jdGlvbicpe1xuXHRcdFx0XHRjID0gW2NdO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRjb25zdCBbXG5cdFx0XHRcdG1ldGhvZCxcblx0XHRcdFx0cGFyYW1zID0gaW5zdGFuY2VbbWV0aG9kXVt0aGlzLnN5bUludGVyZmFjZXNdIHx8IFtdLFxuXHRcdFx0XHRhc3luY1Jlc29sdmUgPSBydWxlLmFzeW5jUmVzb2x2ZSBcblx0XHRcdF0gPSBjO1xuXHRcdFx0XG5cdFx0XHRjb25zdCBtYWtlQ2FsbCA9IChyZXNvbHZlZFBhcmFtcyk9PntcdFx0XHRcdFxuXHRcdFx0XHRyZXNvbHZlZFBhcmFtcyA9IHN0cnVjdHVyZWRSZXNvbHZlUGFyYW1zSW50ZXJmYWNlKHBhcmFtcywgcmVzb2x2ZWRQYXJhbXMpO1xuXHRcdFx0XHRsZXQgY2FsbFJldHVybjtcblx0XHRcdFx0aWYodHlwZW9mIG1ldGhvZCA9PSAnZnVuY3Rpb24nKXtcblx0XHRcdFx0XHRjYWxsUmV0dXJuID0gbWV0aG9kKGluc3RhbmNlLCAuLi5yZXNvbHZlZFBhcmFtcyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZXtcblx0XHRcdFx0XHRjYWxsUmV0dXJuID0gaW5zdGFuY2VbbWV0aG9kXSguLi5yZXNvbHZlZFBhcmFtcyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYoIWFzeW5jUmVzb2x2ZSl7XG5cdFx0XHRcdFx0Y2FsbFJldHVybiA9IG5ldyBTeW5jKGNhbGxSZXR1cm4pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBjYWxsUmV0dXJuO1xuXHRcdFx0fTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0Y29uc3QgcmVzb2x2ZWRQYXJhbXMgPSBwYXJhbXMubWFwKHBhcmFtID0+IHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0UGFyYW0ocGFyYW0sIHJ1bGUsIHNoYXJlZEluc3RhbmNlcywgdGhpcy5kZWZhdWx0UnVsZVZhcik7XG5cdFx0XHR9KTtcblx0XHRcdGlmKHN0cnVjdHVyZWRIYXNQcm9taXNlKHBhcmFtcywgcmVzb2x2ZWRQYXJhbXMsIHRoaXMuUHJvbWlzZUludGVyZmFjZSkpe1xuXHRcdFx0XHRoYXNBc3luYyA9IHRydWU7XG5cdFx0XHRcdHJldHVybiAoKSA9PiBzdHJ1Y3R1cmVkUHJvbWlzZUFsbFJlY3Vyc2l2ZShwYXJhbXMsIHJlc29sdmVkUGFyYW1zLCB0aGlzLlByb21pc2VJbnRlcmZhY2UsIHRoaXMuUHJvbWlzZUZhY3RvcnkpLnRoZW4ocmVzb2x2ZWRQYXJhbXM9Pntcblx0XHRcdFx0XHRyZXR1cm4gbWFrZUNhbGwocmVzb2x2ZWRQYXJhbXMpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdGVsc2V7XG5cdFx0XHRcdHJldHVybiAoKSA9PiBtYWtlQ2FsbChyZXNvbHZlZFBhcmFtcyk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9KTtcblx0XHRcblx0XHRjb25zdCBhc3luY0NhbGxzUGFyYW1zU2VyaWUgPSBydWxlLmFzeW5jQ2FsbHNQYXJhbXNTZXJpZTtcblx0XHRjb25zdCBhc3luY0NhbGxzU2VyaWUgPSBydWxlLmFzeW5jQ2FsbHNTZXJpZSB8fCBhc3luY0NhbGxzUGFyYW1zU2VyaWU7XG5cdFx0XG5cdFx0Y29uc3QgbWFrZUNhbGxzID0gKGNhbGxlcnMpPT57XG5cdFx0XHRcblx0XHRcdGxldCBjYWxsZXJzUmV0dXJuO1xuXHRcdFx0aWYoaGFzQXN5bmMpe1xuXHRcdFx0XHRpZihhc3luY0NhbGxzU2VyaWUpe1xuXHRcdFx0XHRcdGNhbGxlcnNSZXR1cm4gPSBtYXBTZXJpZShjYWxsZXJzLCAoY2FsbGVyKT0+e1xuXHRcdFx0XHRcdFx0cmV0dXJuIGNhbGxlcigpO1xuXHRcdFx0XHRcdH0sIHRoaXMuUHJvbWlzZUludGVyZmFjZSwgdGhpcy5Qcm9taXNlRmFjdG9yeSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZXtcblx0XHRcdFx0XHRjYWxsZXJzUmV0dXJuID0gdGhpcy5Qcm9taXNlRmFjdG9yeS5hbGwoIGNhbGxlcnMubWFwKChjYWxsZXIpPT57XG5cdFx0XHRcdFx0XHRyZXR1cm4gY2FsbGVyKCk7XG5cdFx0XHRcdFx0fSkgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZWxzZXtcblx0XHRcdFx0Y2FsbGVyc1JldHVybiA9IGNhbGxlcnMubWFwKChjYWxsZXIpPT57XG5cdFx0XHRcdFx0Y29uc3QgY2FsbGVyUmV0dXJuID0gY2FsbGVyKCk7XG5cdFx0XHRcdFx0aWYoY2FsbGVyUmV0dXJuIGluc3RhbmNlb2YgdGhpcy5Qcm9taXNlSW50ZXJmYWNlKXtcblx0XHRcdFx0XHRcdGhhc0FzeW5jID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIGNhbGxlclJldHVybjtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGlmKGhhc0FzeW5jKXtcblx0XHRcdFx0XHRjYWxsZXJzUmV0dXJuID0gdGhpcy5Qcm9taXNlRmFjdG9yeS5hbGwoY2FsbGVyc1JldHVybik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBjYWxsZXJzUmV0dXJuO1xuXHRcdH1cblx0XHRcblx0XHRpZihhc3luY0NhbGxzUGFyYW1zU2VyaWUpe1xuXHRcdFx0Y2FsbGVycyA9IG1hcFNlcmllKGNhbGxlcnMsIChjYWxsZXIpPT57XG5cdFx0XHRcdGNhbGxlciA9IGNhbGxlcigpKCk7XG5cdFx0XHRcdHJldHVybiBjYWxsZXI7XG5cdFx0XHR9LCB0aGlzLlByb21pc2VJbnRlcmZhY2UsIHRoaXMuUHJvbWlzZUZhY3RvcnkpO1xuXHRcdFx0cmV0dXJuIGNhbGxlcnMudGhlbiggY2FsbGVycyA9PiBtYWtlQ2FsbHMoIGNhbGxlcnMubWFwKGNhbGxlciA9PiAoKSA9PiBjYWxsZXIgKSApICkgO1xuXHRcdH1cblx0XHRlbHNle1xuXHRcdFx0Y2FsbGVycyA9IGNhbGxlcnMubWFwKChjYWxsZXIpPT5jYWxsZXIoKSk7XG5cdFx0XHRyZXR1cm4gbWFrZUNhbGxzKGNhbGxlcnMpO1xuXHRcdH1cblx0XHRcblx0fVxuXHRcdFxuXHRkZWZpbmVTeW0odGFyZ2V0LCBzeW1uYW1lLCB2YWx1ZSl7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgc3ltbmFtZSwge1xuXHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0fSk7XG5cdH1cblx0XG5cdHJlc29sdmVJbnN0YW5jZU9mKHN0ciwgc3RhY2sgPSBbXSwgcmVxdWlyZWQgPSB0cnVlKXtcblx0XHRpZih0eXBlb2Ygc3RyID09ICdzdHJpbmcnIHx8IHR5cGVvZiBzdHIgPT0gJ3N5bWJvbCcpe1xuXHRcdFx0aWYoc3RhY2suaW5kZXhPZihzdHIpIT09LTEpe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0N5Y2xpYyBpbnRlcmZhY2UgZGVmaW5pdGlvbiBlcnJvciBpbiAnK0pTT04uc3RyaW5naWZ5KHN0YWNrLmNvbmNhdChzdHIpLG51bGwsMikpO1xuXHRcdFx0fVxuXHRcdFx0c3RhY2sucHVzaChzdHIpO1xuXHRcdFx0Y29uc3QgcnVsZSA9IHRoaXMucnVsZXNbc3RyXTtcblx0XHRcdGxldCByZXNvbHZlZCA9IGZhbHNlO1xuXHRcdFx0aWYocnVsZSl7XG5cdFx0XHRcdGlmKHJ1bGUuaW5zdGFuY2VPZil7XG5cdFx0XHRcdFx0cmVzb2x2ZWQgPSBydWxlLmluc3RhbmNlT2Y7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZihydWxlLmNsYXNzRGVmKXtcblx0XHRcdFx0XHRyZXNvbHZlZCA9IHJ1bGUuY2xhc3NEZWY7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmKCFyZXNvbHZlZCl7XG5cdFx0XHRcdGlmKCFyZXF1aXJlZCl7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignSW50ZXJmYWNlIGRlZmluaXRpb24gJysodHlwZW9mIHN0ciA9PSAnc3ltYm9sJyA/ICdzeW1ib2wnIDogJ1wiJytzdHIrJ1wiJyApKycgbm90IGZvdW5kLCBkaSBsb2FkIHN0YWNrOiAnK0pTT04uc3RyaW5naWZ5KHN0YWNrLCBudWxsLCAyKSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5yZXNvbHZlSW5zdGFuY2VPZihyZXNvbHZlZCwgc3RhY2ssIHJlcXVpcmVkKTtcblx0XHR9XG5cdFx0c3RhY2sucHVzaChzdHIpO1xuXHRcdHJldHVybiBzdHI7XG5cdH1cblx0XG5cdGZhY3RvcnkoY2FsbGJhY2spe1xuXHRcdHJldHVybiBuZXcgdGhpcy5kZWZhdWx0RmFjdG9yeShjYWxsYmFjayk7XG5cdH1cblx0dmFsdWVGYWN0b3J5KGNhbGxiYWNrKXtcblx0XHRyZXR1cm4gbmV3IFZhbHVlRmFjdG9yeShjYWxsYmFjayk7XG5cdH1cblx0Y2xhc3NGYWN0b3J5KGNhbGxiYWNrKXtcblx0XHRyZXR1cm4gbmV3IENsYXNzRmFjdG9yeShjYWxsYmFjayk7XG5cdH1cblx0aW50ZXJmYWNlKG5hbWUpe1xuXHRcdHJldHVybiBuZXcgSW50ZXJmYWNlKG5hbWUpO1xuXHR9XG5cdGludGVyZmFjZUNsYXNzKG5hbWUsaW50ZXJmYWNlQ2xhc3Mpe1xuXHRcdHJldHVybiBuZXcgSW50ZXJmYWNlQ2xhc3MobmFtZSwgaW50ZXJmYWNlQ2xhc3MpO1xuXHR9XG5cdHZhbHVlKHZhbHVlKXtcblx0XHRyZXR1cm4gbmV3IFZhbHVlKHZhbHVlKTtcblx0fVxuXHRyZXF1aXJlKGRlcCl7XG5cdFx0cmV0dXJuIG5ldyBSZXF1aXJlKGRlcCk7XG5cdH1cblx0XG5cdGRlcGVuZGVuY3koZGVwKXtcblx0XHRyZXR1cm4gbmV3IERlcGVuZGVuY3koZGVwKTtcblx0fVxuXHRcblx0Y2xhc3NEZWYoY2FsbGJhY2spe1xuXHRcdHJldHVybiBuZXcgQ2xhc3NEZWYoY2FsbGJhY2spO1xuXHR9XG59XG4iXX0=