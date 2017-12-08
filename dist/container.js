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
        console.log('Factory !!!!!!!!!!!!!!');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250YWluZXIuanMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwicnVsZXMiLCJydWxlc0RlZmF1bHQiLCJhdXRvbG9hZEZhaWxPbk1pc3NpbmdGaWxlIiwiZGVwZW5kZW5jaWVzIiwiYXV0b2xvYWRFeHRlbnNpb25zIiwiYXV0b2xvYWRQYXRoUmVzb2x2ZXIiLCJwYXRoIiwiZGVmYXVsdFZhciIsImRlZmF1bHRSdWxlVmFyIiwiZGVmYXVsdERlY29yYXRvclZhciIsImRlZmF1bHRBcmdzVmFyIiwiZGVmYXVsdEZhY3RvcnkiLCJkZWZhdWx0RnVuY3Rpb25XcmFwcGVyIiwiZ2xvYmFsS2V5IiwicHJvbWlzZUZhY3RvcnkiLCJwcm9taXNlSW50ZXJmYWNlcyIsInN5bUNsYXNzTmFtZSIsInN5bUludGVyZmFjZXMiLCJwcm92aWRlclJlZ2lzdHJ5IiwiaW5zdGFuY2VSZWdpc3RyeSIsInJlcXVpcmVzIiwic2V0QXV0b2xvYWRQYXRoUmVzb2x2ZXIiLCJsb2FkRXh0ZW5zaW9uUmVnZXgiLCJSZWdFeHAiLCJqb2luIiwiYWxsb3dlZERlZmF1bHRWYXJzIiwidmFsaWRhdGVEZWZhdWx0VmFyIiwiaW5kZXhPZiIsInVuc2hpZnQiLCJQcm9taXNlSW50ZXJmYWNlIiwiUHJvbWlzZUZhY3RvcnkiLCJzZXRHbG9iYWxLZXkiLCJpbmhlcml0SW5zdGFuY2VPZiIsImluaGVyaXRQcm90b3R5cGUiLCJpbmhlcml0TWl4aW5zIiwic2hhcmVkIiwiaW5zdGFuY2VPZiIsInVuZGVmaW5lZCIsImNsYXNzRGVmIiwicGFyYW1zIiwiY2FsbHMiLCJsYXp5Q2FsbHMiLCJzdWJzdGl0dXRpb25zIiwic2hhcmVkSW5UcmVlIiwic2luZ2xldG9uIiwiYXN5bmNSZXNvbHZlIiwiYXN5bmNDYWxsc1NlcmllIiwiZGVjb3JhdG9yIiwiYXV0b2xvYWQiLCJzZXRSdWxlc0RlZmF1bHQiLCJsb2FkRGVwZW5kZW5jaWVzIiwiYWRkUnVsZXMiLCJrZXkiLCJ2YWx1ZSIsImZvckVhY2giLCJjb25maWciLCJrIiwiRXJyb3IiLCJhbGlhc01hcCIsInJlYWxQYXRoIiwiYWxpYXMiLCJzdWJzdHIiLCJsZW5ndGgiLCJnbG9iYWwiLCJkaXJzIiwiY29udGV4dCIsImRpcktleSIsImdldERlcGVuZGVuY3kiLCJrZXlzIiwiZmlsZW5hbWUiLCJsYXN0SW5kZXhPZiIsInNwbGl0IiwicG9wIiwiYWRkUnVsZSIsImludGVyZmFjZU5hbWUiLCJydWxlc0RldGVjdExhenlMb2FkIiwicnVsZSIsImRldGVjdExhenlMb2FkIiwibWVyZ2VSdWxlIiwicHJvY2Vzc1J1bGUiLCJnZXRDbGFzc0RlZiIsInJlZ2lzdGVyUmVxdWlyZSIsInByb3BlcnR5IiwibG9hZFBhdGhzIiwicmVnaXN0ZXJSZXF1aXJlTWFwIiwicnVsZUxhenlMb2FkIiwic3RhY2siLCJjYWxsVmFsIiwibWV0aG9kIiwicnVsZUNoZWNrQ3ljbGljTG9hZCIsInB1c2giLCJjb25jYXQiLCJzb21lIiwicGFyYW0iLCJ2Iiwid3JhcFZhclR5cGUiLCJnZXROYW1lIiwicmVzb2x2ZUluc3RhbmNlT2YiLCJwYXJhbVJ1bGUiLCJnZXRSdWxlIiwiY3ljbGljIiwiY2FsbFYiLCJjbGFzc0RlZk5hbWUiLCJjbGFzc0RlZmluaXRpb24iLCJnZXQiLCJhcmdzIiwidmFsaWRhdGVBdXRvbG9hZEZpbGVOYW1lIiwicmVxIiwicmVxdWlyZURlcCIsIm5hbWUiLCJyZXF1aXJlUGF0aCIsImZvdW5kIiwicGF0aEZyYWdtZW50cyIsInNoaWZ0IiwiZXh0IiwiZGVwRXhpc3RzIiwicmVxdWlyZWQiLCJkZXBSZXF1aXJlIiwic3ViS2V5IiwiciIsImRlZmF1bHQiLCJnZXRSdWxlQmFzZSIsInJlZ2lzdGVyQ2xhc3MiLCJjbGFzc05hbWUiLCJ0eXBlcyIsInRhcmdldCIsImRlZmluZVN5bSIsIm1hcCIsInR5cGUiLCJCb29sZWFuIiwiaW50ZXJmYWNlRGVmIiwic2hhcmVkSW5zdGFuY2VzIiwicHJvdmlkZXIiLCJjb25zdHJ1Y3RvciIsIm1ha2VQcm92aWRlciIsInNoYXJlSW50ZXJmYWNlIiwicmVzb2x2ZWRQYXJhbXMiLCJpbmRleCIsImdldFBhcmFtIiwibWFrZUluc3RhbmNlIiwiaW5zdGFuY2UiLCJmaW5hbGl6ZUluc3RhbmNlQ3JlYXRpb24iLCJyZWdpc3Rlckluc3RhbmNlIiwiY2FsbHNSZXR1cm4iLCJydW5DYWxscyIsInRoZW4iLCJnZXRTdWJzdGl0dXRpb25QYXJhbSIsImNvbnNvbGUiLCJsb2ciLCJjYWxsYmFjayIsImdldFZhbHVlIiwicmVxdWlyZSIsInNsaWNlIiwiaW5zdGFuY2VSdWxlIiwibyIsInJlc29sdmVGdW5jdGlvbiIsImludGVyZmFjZSIsInJ1bGVCYXNlIiwiZnVsbFN0YWNrIiwicmV2ZXJzZSIsImMiLCJwYXJlbnRQcm90byIsImFkZCIsIm1peGluc1J1bGUiLCJtaXhpbnNHcm91cCIsIm1peGluc0dyb3VwcyIsInJ1bGVDb2xsZWN0RXh0ZW5kc1JlY3Vyc2l2ZSIsIm1peGluR3JvdXAiLCJtaXhpbiIsIkFycmF5IiwibWl4aW5zIiwiZXh0ZW5kUnVsZSIsIm1lcmdlRXh0ZW5kIiwiYXN5bmNDYWxsc1BhcmFtc1NlcmllIiwiZXh0ZW5kUnVsZXMiLCJoYXNBc3luYyIsImNhbGxlcnMiLCJtYWtlQ2FsbCIsImNhbGxSZXR1cm4iLCJtYWtlQ2FsbHMiLCJjYWxsZXJzUmV0dXJuIiwiY2FsbGVyIiwiYWxsIiwiY2FsbGVyUmV0dXJuIiwic3ltbmFtZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJzdHIiLCJyZXNvbHZlZCIsImRlcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0lBRXFCQSxTOzs7QUFFcEIsdUJBdUJPO0FBQUEsbUZBQUgsRUFBRztBQUFBLDBCQXRCTkMsS0FzQk07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SCxLQUFLeEMsVUFBaEI7QUFDQSxXQUZELE1BR0ssSUFBR3dDLEtBQUt0QyxRQUFSLEVBQWlCO0FBQ3JCc0osdUJBQVdoSCxLQUFLdEMsUUFBaEI7QUFDQTtBQUNEOztBQUNELFlBQUcsQ0FBQ3NKLFFBQUosRUFBYTtBQUNaLGNBQUcsQ0FBQ3hFLFFBQUosRUFBYTtBQUNaLG1CQUFPLEtBQVA7QUFDQTs7QUFDRCxnQkFBTSxJQUFJM0QsS0FBSixDQUFVLDJCQUF5QmtJLEdBQXpCLEdBQTZCLDhCQUE3QixHQUE0RCx3QkFBZXJHLEtBQWYsRUFBc0IsSUFBdEIsRUFBNEIsQ0FBNUIsQ0FBdEUsQ0FBTjtBQUNBOztBQUNELGVBQU8sS0FBS1csaUJBQUwsQ0FBdUIyRixRQUF2QixFQUFpQ3RHLEtBQWpDLEVBQXdDOEIsUUFBeEMsQ0FBUDtBQUNBOztBQUNEOUIsWUFBTUksSUFBTixDQUFXaUcsR0FBWDtBQUNBLGFBQU9BLEdBQVA7QUFDQTs7OzRCQUVPdEMsUSxFQUFTO0FBQ2hCLGFBQU8sSUFBSSxLQUFLMUksY0FBVCxDQUF3QjBJLFFBQXhCLENBQVA7QUFDQTs7O2lDQUNZQSxRLEVBQVM7QUFDckIsYUFBTywwQkFBaUJBLFFBQWpCLENBQVA7QUFDQTs7O2lDQUNZQSxRLEVBQVM7QUFDckIsYUFBTywwQkFBaUJBLFFBQWpCLENBQVA7QUFDQTs7OytCQUNTeEMsSSxFQUFLO0FBQ2QsYUFBTyx3QkFBY0EsSUFBZCxDQUFQO0FBQ0E7OzswQkFDS3hELE0sRUFBTTtBQUNYLGFBQU8sb0JBQVVBLE1BQVYsQ0FBUDtBQUNBOzs7NEJBQ093SSxHLEVBQUk7QUFDWCxhQUFPLHFCQUFZQSxHQUFaLENBQVA7QUFDQTs7OytCQUVVQSxHLEVBQUk7QUFDZCxhQUFPLHdCQUFlQSxHQUFmLENBQVA7QUFDQTs7OzZCQUVReEMsUSxFQUFTO0FBQ2pCLGFBQU8sc0JBQWFBLFFBQWIsQ0FBUDtBQUNBIiwiZmlsZSI6ImNvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtYXBTZXJpZSBmcm9tICcuL21hcFNlcmllJ1xuXG5pbXBvcnQgVmFyIGZyb20gJy4vdmFyJ1xuaW1wb3J0IEZhY3RvcnkgZnJvbSAnLi9mYWN0b3J5J1xuaW1wb3J0IFZhbHVlRmFjdG9yeSBmcm9tICcuL3ZhbHVlRmFjdG9yeSdcbmltcG9ydCBDbGFzc0ZhY3RvcnkgZnJvbSAnLi9jbGFzc0ZhY3RvcnknXG5pbXBvcnQgVmFsdWUgZnJvbSAnLi92YWx1ZSdcbmltcG9ydCBJbnRlcmZhY2UgZnJvbSAnLi9pbnRlcmZhY2UnXG5pbXBvcnQgUmVxdWlyZSBmcm9tICcuL3JlcXVpcmUnXG5cbmltcG9ydCBTaGFyZWRJbnN0YW5jZSBmcm9tICcuL3NoYXJlZEluc3RhbmNlJ1xuXG5pbXBvcnQgQ2xhc3NEZWYgZnJvbSAnLi9jbGFzc0RlZidcblxuaW1wb3J0IERlcGVuZGVuY3kgZnJvbSAnLi9kZXBlbmRlbmN5J1xuXG5pbXBvcnQgbWFrZUNvbnRhaW5lckFwaSBmcm9tICcuL21ha2VDb250YWluZXJBcGknXG5cbmltcG9ydCBTeW5jIGZyb20gJy4vc3luYydcbmltcG9ydCBzdHJ1Y3R1cmVkSGFzUHJvbWlzZSBmcm9tICcuL3N0cnVjdHVyZWRIYXNQcm9taXNlJ1xuaW1wb3J0IHN0cnVjdHVyZWRQcm9taXNlQWxsUmVjdXJzaXZlIGZyb20gJy4vc3RydWN0dXJlZFByb21pc2VBbGxSZWN1cnNpdmUnXG5pbXBvcnQgc3RydWN0dXJlZFJlc29sdmVQYXJhbXNJbnRlcmZhY2UgZnJvbSAnLi9zdHJ1Y3R1cmVkUmVzb2x2ZVBhcmFtc0ludGVyZmFjZSdcblxuaW1wb3J0IHByb21pc2VJbnRlcmZhY2UgZnJvbSAnLi9wcm9taXNlSW50ZXJmYWNlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWluZXJ7XG5cblx0Y29uc3RydWN0b3Ioe1xuXHRcdHJ1bGVzID0ge30sXG5cdFx0XG5cdFx0cnVsZXNEZWZhdWx0ID0ge30sXG5cdFx0XG5cdFx0YXV0b2xvYWRGYWlsT25NaXNzaW5nRmlsZSA9ICdwYXRoJyxcblx0XHRkZXBlbmRlbmNpZXMgPSB7fSxcblx0XHRhdXRvbG9hZEV4dGVuc2lvbnMgPSBbJ2pzJ10sXG5cdFx0YXV0b2xvYWRQYXRoUmVzb2x2ZXIgPSAocGF0aCk9PnBhdGgsXG5cdFx0XG5cdFx0ZGVmYXVsdFZhciA9ICdpbnRlcmZhY2UnLFxuXHRcdGRlZmF1bHRSdWxlVmFyID0gbnVsbCxcblx0XHRkZWZhdWx0RGVjb3JhdG9yVmFyID0gbnVsbCxcblx0XHRkZWZhdWx0QXJnc1ZhciA9IG51bGwsXG5cdFx0XG5cdFx0ZGVmYXVsdEZhY3RvcnkgPSBWYWx1ZUZhY3RvcnksXG5cdFx0ZGVmYXVsdEZ1bmN0aW9uV3JhcHBlciA9IENsYXNzRmFjdG9yeSxcblx0XHRcblx0XHRnbG9iYWxLZXkgPSBmYWxzZSxcblx0XHRcblx0XHRwcm9taXNlRmFjdG9yeSA9IFByb21pc2UsXG5cdFx0cHJvbWlzZUludGVyZmFjZXMgPSBbIFByb21pc2UgXSxcblx0XHRcblx0fSA9IHt9KXtcblx0XHRcblx0XHR0aGlzLnN5bUNsYXNzTmFtZSA9IFN5bWJvbCgnY2xhc3NOYW1lJyk7XG5cdFx0dGhpcy5zeW1JbnRlcmZhY2VzID0gU3ltYm9sKCd0eXBlcycpO1xuXHRcdHRoaXMucHJvdmlkZXJSZWdpc3RyeSA9IHt9O1xuXHRcdHRoaXMuaW5zdGFuY2VSZWdpc3RyeSA9IHt9O1xuXHRcdFxuXHRcdHRoaXMucmVxdWlyZXMgPSB7fTtcblx0XHR0aGlzLmF1dG9sb2FkRXh0ZW5zaW9ucyA9IGF1dG9sb2FkRXh0ZW5zaW9ucztcblx0XHR0aGlzLmF1dG9sb2FkRmFpbE9uTWlzc2luZ0ZpbGUgPSBhdXRvbG9hZEZhaWxPbk1pc3NpbmdGaWxlO1xuXHRcdHRoaXMuZGVwZW5kZW5jaWVzID0gZGVwZW5kZW5jaWVzO1xuXHRcdHRoaXMuc2V0QXV0b2xvYWRQYXRoUmVzb2x2ZXIoYXV0b2xvYWRQYXRoUmVzb2x2ZXIpO1xuXHRcdHRoaXMubG9hZEV4dGVuc2lvblJlZ2V4ID0gbmV3IFJlZ0V4cCgnXFwuKCcrdGhpcy5hdXRvbG9hZEV4dGVuc2lvbnMuam9pbignfCcpKycpJCcpO1xuXHRcdFxuXHRcdHRoaXMuZGVmYXVsdFJ1bGVWYXIgPSBkZWZhdWx0UnVsZVZhciB8fCBkZWZhdWx0VmFyO1xuXHRcdHRoaXMuZGVmYXVsdERlY29yYXRvclZhciA9IGRlZmF1bHREZWNvcmF0b3JWYXIgfHwgZGVmYXVsdFZhcjtcblx0XHR0aGlzLmRlZmF1bHRBcmdzVmFyID0gZGVmYXVsdEFyZ3NWYXIgfHwgZGVmYXVsdFZhcjtcblx0XHRcblx0XHR0aGlzLmRlZmF1bHRGYWN0b3J5ID0gZGVmYXVsdEZhY3Rvcnk7XG5cdFx0dGhpcy5kZWZhdWx0RnVuY3Rpb25XcmFwcGVyID0gZGVmYXVsdEZ1bmN0aW9uV3JhcHBlcjtcblx0XHRcblx0XHR0aGlzLmFsbG93ZWREZWZhdWx0VmFycyA9IFsnaW50ZXJmYWNlJywndmFsdWUnXTtcblx0XHR0aGlzLnZhbGlkYXRlRGVmYXVsdFZhcihkZWZhdWx0VmFyLCAnZGVmYXVsdFZhcicpO1xuXHRcdHRoaXMudmFsaWRhdGVEZWZhdWx0VmFyKHRoaXMuZGVmYXVsdFJ1bGVWYXIsICdkZWZhdWx0UnVsZVZhcicpO1xuXHRcdHRoaXMudmFsaWRhdGVEZWZhdWx0VmFyKHRoaXMuZGVmYXVsdERlY29yYXRvclZhciwgJ2RlZmF1bHREZWNvcmF0b3JWYXInKTtcblx0XHR0aGlzLnZhbGlkYXRlRGVmYXVsdFZhcih0aGlzLmRlZmF1bHRBcmdzVmFyLCAnZGVmYXVsdEFyZ3NWYXInKTtcblx0XHRcblx0XHRpZihwcm9taXNlSW50ZXJmYWNlcy5pbmRleE9mKHByb21pc2VGYWN0b3J5KSA9PT0gLTEpe1xuXHRcdFx0cHJvbWlzZUludGVyZmFjZXMudW5zaGlmdChwcm9taXNlRmFjdG9yeSk7XG5cdFx0fVxuXHRcdHRoaXMuUHJvbWlzZUludGVyZmFjZSA9IHByb21pc2VJbnRlcmZhY2UocHJvbWlzZUludGVyZmFjZXMpO1xuXHRcdHRoaXMuUHJvbWlzZUZhY3RvcnkgPSBwcm9taXNlRmFjdG9yeTtcblx0XHRcblx0XHRpZihnbG9iYWxLZXkpe1xuXHRcdFx0dGhpcy5zZXRHbG9iYWxLZXkoZ2xvYmFsS2V5KTtcblx0XHR9XG5cdFx0XG5cdFx0dGhpcy5ydWxlc0RlZmF1bHQgPSB7XG5cdFx0XHRcblx0XHRcdGluaGVyaXRJbnN0YW5jZU9mOiB0cnVlLFxuXHRcdFx0aW5oZXJpdFByb3RvdHlwZTogZmFsc2UsXG5cdFx0XHRpbmhlcml0TWl4aW5zOiBbXSxcblx0XHRcdFxuXHRcdFx0c2hhcmVkOiBmYWxzZSxcblx0XHRcdGluc3RhbmNlT2Y6IHVuZGVmaW5lZCxcblx0XHRcdGNsYXNzRGVmOiB1bmRlZmluZWQsXG5cdFx0XHRwYXJhbXM6IHVuZGVmaW5lZCxcblx0XHRcdFxuXHRcdFx0Y2FsbHM6IFtdLFxuXHRcdFx0bGF6eUNhbGxzOiBbXSxcblx0XHRcdFxuXHRcdFx0c3Vic3RpdHV0aW9uczogW10sXG5cdFx0XHRzaGFyZWRJblRyZWU6IFtdLFxuXHRcdFx0XG5cdFx0XHRzaW5nbGV0b246IHVuZGVmaW5lZCxcblx0XHRcdFxuXHRcdFx0YXN5bmNSZXNvbHZlOiBmYWxzZSxcblx0XHRcdGFzeW5jQ2FsbHNTZXJpZTogZmFsc2UsXG5cdFx0XHRcblx0XHRcdGRlY29yYXRvcjogZmFsc2UsXG5cdFx0XHRcblx0XHRcdGF1dG9sb2FkOiBmYWxzZSxcblx0XHRcdHBhdGg6IHVuZGVmaW5lZCxcblx0XHRcdFxuXHRcdH07XG5cdFx0dGhpcy5zZXRSdWxlc0RlZmF1bHQocnVsZXNEZWZhdWx0KTtcblx0XHR0aGlzLnJ1bGVzID0ge307XG5cdFx0XG5cdFx0dGhpcy5sb2FkRGVwZW5kZW5jaWVzKCk7XG5cdFx0dGhpcy5hZGRSdWxlcyhydWxlcyk7XG5cdFx0XG5cdH1cblx0XG5cdGNvbmZpZyhrZXksIHZhbHVlKXtcblx0XHRpZih0eXBlb2Yga2V5ID09PSAnb2JqZWN0Jyl7XG5cdFx0XHRPYmplY3Qua2V5cyhrZXkpLmZvckVhY2goaz0+dGhpcy5jb25maWcoaywga2V5W2tdKSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHN3aXRjaChrZXkpe1xuXHRcdFx0Y2FzZSAnYXV0b2xvYWRGYWlsT25NaXNzaW5nRmlsZSAnOlxuXHRcdFx0Y2FzZSAnYXV0b2xvYWRFeHRlbnNpb25zJzpcblx0XHRcdGNhc2UgJ2RlZmF1bHRWYXInOlxuXHRcdFx0Y2FzZSAnZGVmYXVsdFJ1bGVWYXInOlxuXHRcdFx0Y2FzZSAnZGVmYXVsdERlY29yYXRvclZhcic6XG5cdFx0XHRjYXNlICdkZWZhdWx0QXJnc1Zhcic6XG5cdFx0XHRcdHRoaXNba2V5XSA9IHZhbHVlO1xuXHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdnbG9iYWxrZXknOlxuXHRcdFx0XHR0aGlzLnNldEdsb2JhbEtleSh2YWx1ZSk7XG5cdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2F1dG9sb2FkUGF0aFJlc29sdmVyJzpcblx0XHRcdFx0dGhpcy5zZXRBdXRvbG9hZFBhdGhSZXNvbHZlcih2YWx1ZSk7XG5cdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3J1bGVzRGVmYXVsdCc6XG5cdFx0XHRcdHRoaXMuc2V0UnVsZXNEZWZhdWx0KHZhbHVlKTtcblx0XHRcdGJyZWFrO1xuXHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgY29uZmlnIGtleSAnK2tleSk7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblx0XG5cdHNldFJ1bGVzRGVmYXVsdChydWxlc0RlZmF1bHQpe1xuXHRcdHRoaXMucnVsZXNEZWZhdWx0ID0ge1xuXHRcdFx0Li4udGhpcy5ydWxlc0RlZmF1bHQsXG5cdFx0XHQuLi5ydWxlc0RlZmF1bHQsXG5cdFx0fTtcblx0fVxuXHRcblx0c2V0QXV0b2xvYWRQYXRoUmVzb2x2ZXIoYXV0b2xvYWRQYXRoUmVzb2x2ZXIpe1xuXHRcdFxuXHRcdGlmKHR5cGVvZiBhdXRvbG9hZFBhdGhSZXNvbHZlciA9PSAnb2JqZWN0Jyl7XG5cdFx0XHRcblx0XHRcdGNvbnN0IGFsaWFzTWFwID0gYXV0b2xvYWRQYXRoUmVzb2x2ZXI7XG5cdFx0XHRhdXRvbG9hZFBhdGhSZXNvbHZlciA9IChwYXRoKT0+e1xuXHRcdFx0XHRPYmplY3Qua2V5cyhhbGlhc01hcCkuZm9yRWFjaChhbGlhcz0+e1xuXHRcdFx0XHRcdGNvbnN0IHJlYWxQYXRoID0gYWxpYXNNYXBbYWxpYXNdO1xuXHRcdFx0XHRcdGlmKHBhdGggPT0gYWxpYXMpe1xuXHRcdFx0XHRcdFx0cGF0aCA9IHJlYWxQYXRoO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGlmKHBhdGguc3Vic3RyKDAsYWxpYXMubGVuZ3RoKzEpPT1hbGlhcysnLycpe1xuXHRcdFx0XHRcdFx0cGF0aCA9IHJlYWxQYXRoK3BhdGguc3Vic3RyKGFsaWFzLmxlbmd0aCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuIHBhdGg7XG5cdFx0XHR9O1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLmF1dG9sb2FkUGF0aFJlc29sdmVyID0gYXV0b2xvYWRQYXRoUmVzb2x2ZXI7XG5cdH1cblx0XG5cdHNldEdsb2JhbEtleShnbG9iYWxLZXkpe1xuXHRcdGlmKGdsb2JhbEtleT09PXRydWUpe1xuXHRcdFx0Z2xvYmFsS2V5ID0gJ2RpJztcblx0XHR9XG5cdFx0Z2xvYmFsW2dsb2JhbEtleV0gPSBtYWtlQ29udGFpbmVyQXBpKHRoaXMpO1xuXHR9XG5cdFxuXHRsb2FkUGF0aHMoZGlycyl7XG5cdFx0T2JqZWN0LmtleXMoZGlycykuZm9yRWFjaChkaXJLZXk9Pntcblx0XHRcdGNvbnN0IGNvbnRleHQgPSBkaXJzW2RpcktleV07XG5cdFx0XHRcblx0XHRcdGlmKGNvbnRleHQgaW5zdGFuY2VvZiBEZXBlbmRlbmN5KXtcblx0XHRcdFx0dGhpcy5yZXF1aXJlc1tkaXJLZXldID0gY29udGV4dC5nZXREZXBlbmRlbmN5KCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdFx0XHRcdFxuXHRcdFx0Y29udGV4dC5rZXlzKCkuZm9yRWFjaCgoZmlsZW5hbWUpPT57XG5cdFx0XHRcdFxuXHRcdFx0XHRsZXQga2V5ID0gZmlsZW5hbWU7XG5cdFx0XHRcdGlmKGtleS5zdWJzdHIoMCwyKT09Jy4vJyl7XG5cdFx0XHRcdFx0a2V5ID0ga2V5LnN1YnN0cigyKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0a2V5ID0gZGlyS2V5KycvJytrZXkuc3Vic3RyKDAsIGtleS5sYXN0SW5kZXhPZignLicpIHx8IGtleS5sZW5ndGgpO1xuXHRcdFx0XHRpZihrZXkuc3BsaXQoJy8nKS5wb3AoKT09J2luZGV4Jyl7XG5cdFx0XHRcdFx0a2V5ID0ga2V5LnN1YnN0cigwLCBrZXkubGFzdEluZGV4T2YoJy8nKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5yZXF1aXJlc1trZXldID0gY29udGV4dChmaWxlbmFtZSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXHRcblx0XG5cdGFkZFJ1bGVzKHJ1bGVzKXtcblx0XHRpZih0eXBlb2YgcnVsZXMgPT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRydWxlcyA9IHJ1bGVzKHRoaXMpO1xuXHRcdH1cblx0XHRPYmplY3Qua2V5cyhydWxlcykuZm9yRWFjaChpbnRlcmZhY2VOYW1lID0+IHRoaXMuYWRkUnVsZShpbnRlcmZhY2VOYW1lLCBydWxlc1tpbnRlcmZhY2VOYW1lXSwgZmFsc2UpKTtcblx0XHR0aGlzLnJ1bGVzRGV0ZWN0TGF6eUxvYWQoKTtcblx0fVxuXHRhZGRSdWxlKGludGVyZmFjZU5hbWUsIHJ1bGUsIGRldGVjdExhenlMb2FkID0gdHJ1ZSl7XG5cdFx0aWYodHlwZW9mIHJ1bGUgPT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRydWxlID0gcnVsZSh0aGlzKTtcblx0XHR9XG5cdFx0XG5cdFx0aWYodGhpcy5ydWxlc1tpbnRlcmZhY2VOYW1lXSA9PT0gdW5kZWZpbmVkKXtcblx0XHRcdHRoaXMucnVsZXNbaW50ZXJmYWNlTmFtZV0gPSB0aGlzLm1lcmdlUnVsZSh7fSwgdGhpcy5ydWxlc0RlZmF1bHQpO1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLnJ1bGVzW2ludGVyZmFjZU5hbWVdID0gdGhpcy5tZXJnZVJ1bGUodGhpcy5ydWxlc1tpbnRlcmZhY2VOYW1lXSwgcnVsZSk7XG5cdFx0dGhpcy5wcm9jZXNzUnVsZShpbnRlcmZhY2VOYW1lKTtcblx0XHRcblx0XHRydWxlID0gdGhpcy5ydWxlc1tpbnRlcmZhY2VOYW1lXTtcblx0XHRcblx0XHRsZXQgeyBjbGFzc0RlZiB9ID0gcnVsZTtcblx0XHRpZihjbGFzc0RlZil7XG5cdFx0XHRpZihjbGFzc0RlZiBpbnN0YW5jZW9mIENsYXNzRGVmKXtcblx0XHRcdFx0Y2xhc3NEZWYgPSBjbGFzc0RlZi5nZXRDbGFzc0RlZigpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5yZWdpc3RlclJlcXVpcmUoaW50ZXJmYWNlTmFtZSwgY2xhc3NEZWYpO1xuXHRcdH1cblx0XHRcblx0XHRpZihkZXRlY3RMYXp5TG9hZCl7XG5cdFx0XHR0aGlzLnJ1bGVzRGV0ZWN0TGF6eUxvYWQoKTtcblx0XHR9XG5cdFx0XG5cdH1cblx0XG5cdHZhbGlkYXRlRGVmYXVsdFZhcih2YWx1ZSwgcHJvcGVydHkpe1xuXHRcdGlmKHRoaXMuYWxsb3dlZERlZmF1bHRWYXJzLmluZGV4T2YodmFsdWUpPT09LTEpe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIHR5cGUgXCInK3ZhbHVlKydcIiBzcGVjaWZpZWQgZm9yICcrcHJvcGVydHkrJywgcG9zc2libGVzIHZhbHVlczogJyt0aGlzLmFsbG93ZWREZWZhdWx0VmFycy5qb2luKCcgfCAnKSk7XG5cdFx0fVxuXHR9XG5cdFxuXHRsb2FkRGVwZW5kZW5jaWVzKCl7XG5cdFx0dGhpcy5sb2FkUGF0aHModGhpcy5kZXBlbmRlbmNpZXMpO1xuXHRcdHRoaXMucmVnaXN0ZXJSZXF1aXJlTWFwKHRoaXMucmVxdWlyZXMpO1xuXHR9XG5cdHJ1bGVzRGV0ZWN0TGF6eUxvYWQoKXtcblx0XHRPYmplY3Qua2V5cyh0aGlzLnJ1bGVzKS5mb3JFYWNoKGtleT0+e1xuXHRcdFx0dGhpcy5ydWxlTGF6eUxvYWQoa2V5KTtcblx0XHR9KTtcblx0fVxuXHRcblx0cnVsZUxhenlMb2FkKGtleSwgc3RhY2s9W10pe1xuXHRcdGNvbnN0IGNhbGxzID0gW107XG5cdFx0Y29uc3QgbGF6eUNhbGxzID0gW107XG5cdFx0XG5cdFx0Y29uc3QgcnVsZSA9IHRoaXMucnVsZXNba2V5XTtcblx0XHRcblx0XHRpZighcnVsZS5jYWxscyl7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdFxuXHRcdHJ1bGUuY2FsbHMuZm9yRWFjaChjYWxsVmFsID0+IHtcblx0XHRcdGlmKHR5cGVvZiBjYWxsVmFsID09ICdmdW5jdGlvbicpe1xuXHRcdFx0XHRjYWxsVmFsID0gW2NhbGxWYWxdO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgW21ldGhvZCwgcGFyYW1zID0gW11dID0gY2FsbFZhbDtcblx0XHRcdGlmKCB0aGlzLnJ1bGVDaGVja0N5Y2xpY0xvYWQocGFyYW1zLCBbIGtleSBdKSApe1xuXHRcdFx0XHRsYXp5Q2FsbHMucHVzaChjYWxsVmFsKTtcblx0XHRcdH1cblx0XHRcdGVsc2V7XG5cdFx0XHRcdGNhbGxzLnB1c2goY2FsbFZhbCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0XG5cdFx0cnVsZS5jYWxscyA9IGNhbGxzO1xuXHRcdHJ1bGUubGF6eUNhbGxzID0gKHJ1bGUubGF6eUNhbGxzIHx8IFtdKS5jb25jYXQobGF6eUNhbGxzKTtcblx0fVxuXHRydWxlQ2hlY2tDeWNsaWNMb2FkKHBhcmFtcywgc3RhY2s9W10pe1x0XHRcblx0XHRyZXR1cm4gT2JqZWN0LmtleXMocGFyYW1zKS5zb21lKGs9Pntcblx0XHRcdGNvbnN0IHBhcmFtID0gcGFyYW1zW2tdO1xuXHRcdFx0Y29uc3QgdiA9IHRoaXMud3JhcFZhclR5cGUocGFyYW0sIHRoaXMuZGVmYXVsdFJ1bGVWYXIpO1xuXHRcdFx0aWYodiBpbnN0YW5jZW9mIEludGVyZmFjZSl7XG5cdFx0XHRcdGNvbnN0IGludGVyZmFjZU5hbWUgPSB2LmdldE5hbWUoKTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmKCF0aGlzLnJlc29sdmVJbnN0YW5jZU9mKGludGVyZmFjZU5hbWUsIFtdLCBmYWxzZSkpe1xuXHRcdFx0XHRcdC8vbm90IGZvdW5kLCB1bmFibGUgdG8gY2hlY2sgbm93XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRjb25zdCBwYXJhbVJ1bGUgPSB0aGlzLmdldFJ1bGUoaW50ZXJmYWNlTmFtZSk7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZihzdGFjay5pbmRleE9mKGludGVyZmFjZU5hbWUpIT09LTEpe1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRzdGFjay5wdXNoKGludGVyZmFjZU5hbWUpO1xuXHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRsZXQgY3ljbGljO1xuXG5cdFx0XHRcdGlmKHBhcmFtUnVsZS5wYXJhbXMpe1xuXHRcdFx0XHRcdGN5Y2xpYyA9IHRoaXMucnVsZUNoZWNrQ3ljbGljTG9hZChwYXJhbVJ1bGUucGFyYW1zLCBzdGFjayk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZighY3ljbGljKXtcblx0XHRcdFx0XHRjeWNsaWMgPSBwYXJhbVJ1bGUuY2FsbHMuc29tZShjYWxsVj0+e1xuXHRcdFx0XHRcdFx0Y29uc3QgW21ldGhvZCwgcGFyYW1zID0gW10gXSA9IGNhbGxWO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMucnVsZUNoZWNrQ3ljbGljTG9hZChwYXJhbXMsIHN0YWNrKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0cmV0dXJuIGN5Y2xpYztcblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0XHRpZih0eXBlb2YgdiA9PSAnb2JqZWN0JyAmJiB2ICE9PSBudWxsICYmICEodiBpbnN0YW5jZW9mIFZhcikpe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5ydWxlQ2hlY2tDeWNsaWNMb2FkKHYsIHN0YWNrKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXHRcblx0cHJvY2Vzc1J1bGUoa2V5LCBzdGFjayA9IFtdKXtcblx0XHRpZih0aGlzLnJ1bGVzW2tleV0gPT09IHVuZGVmaW5lZCl7XG5cdFx0XHR0aGlzLnJ1bGVzW2tleV0gPSB0aGlzLm1lcmdlUnVsZSh7fSwgdGhpcy5ydWxlc0RlZmF1bHQpO1xuXHRcdH1cblx0XHRjb25zdCBydWxlID0gdGhpcy5ydWxlc1trZXldO1xuXHRcdGlmKHJ1bGUuaW5zdGFuY2VPZil7XG5cdFx0XHRpZihzdGFjay5pbmRleE9mKGtleSkhPT0tMSl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignQ3ljbGljIGludGVyZmFjZSBkZWZpbml0aW9uIGVycm9yIGluICcrSlNPTi5zdHJpbmdpZnkoc3RhY2suY29uY2F0KGtleSksbnVsbCwyKSk7XG5cdFx0XHR9XG5cdFx0XHRzdGFjay5wdXNoKGtleSk7XG5cdFx0XHR0aGlzLnByb2Nlc3NSdWxlKHJ1bGUuaW5zdGFuY2VPZiwgc3RhY2spO1xuXHRcdH1cblx0XHRpZihydWxlLnNpbmdsZXRvbil7XG5cdFx0XHRydWxlLmNsYXNzRGVmID0gZnVuY3Rpb24oKXtcblx0XHRcdFx0cmV0dXJuIHJ1bGUuc2luZ2xldG9uO1xuXHRcdFx0fTtcblx0XHR9XG5cdFx0aWYodHlwZW9mIHJ1bGUuY2xhc3NEZWYgPT0gJ3N0cmluZycpe1xuXHRcdFx0Y29uc3QgY2xhc3NEZWZOYW1lID0gcnVsZS5jbGFzc0RlZjtcblx0XHRcdHJ1bGUuY2xhc3NEZWYgPSAoLi4uYXJncyk9Pntcblx0XHRcdFx0Y29uc3QgY2xhc3NEZWZpbml0aW9uID0gdGhpcy5nZXQoY2xhc3NEZWZOYW1lKTtcblx0XHRcdFx0cmV0dXJuIG5ldyBjbGFzc0RlZmluaXRpb24oLi4uYXJncyk7XG5cdFx0XHR9O1xuXHRcdH1cblx0XHRpZih0aGlzLnZhbGlkYXRlQXV0b2xvYWRGaWxlTmFtZShrZXkpKXtcblx0XHRcdGlmKHJ1bGUuYXV0b2xvYWQpe1xuXHRcdFx0XHRjb25zdCBwYXRoID0gcnVsZS5wYXRoIHx8IGtleTtcblx0XHRcdFx0Y29uc3QgcmVxID0gdGhpcy5yZXF1aXJlRGVwKGtleSwgcGF0aCk7XG5cdFx0XHRcdGlmKHJlcSl7XG5cdFx0XHRcdFx0dGhpcy5yZWdpc3RlclJlcXVpcmUoa2V5LCByZXEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdFxuXHR2YWxpZGF0ZUF1dG9sb2FkRmlsZU5hbWUobmFtZSl7XG5cdFx0aWYobmFtZS5zdWJzdHIoMCwxKT09PScjJyl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdFxuXHRyZXF1aXJlRGVwKGtleSwgcmVxdWlyZVBhdGgpe1xuXHRcdGlmKHRoaXMucmVxdWlyZXNba2V5XSl7XG5cdFx0XHRyZXR1cm4gdGhpcy5yZXF1aXJlc1trZXldO1xuXHRcdH1cblx0XHRcblx0XHRyZXF1aXJlUGF0aCA9IHRoaXMuYXV0b2xvYWRQYXRoUmVzb2x2ZXIocmVxdWlyZVBhdGgpO1xuXHRcdFxuXHRcdGNvbnN0IGZvdW5kID0gdGhpcy5hdXRvbG9hZEV4dGVuc2lvbnMuY29uY2F0KCcnKS5zb21lKCBleHQgPT4ge1xuXHRcdFx0XG5cdFx0XHRjb25zdCBwYXRoRnJhZ21lbnRzID0gcmVxdWlyZVBhdGguc3BsaXQoJzonKTtcblx0XHRcdFxuXHRcdFx0XG5cdFx0XHRsZXQgcGF0aCA9IHBhdGhGcmFnbWVudHMuc2hpZnQoKTtcblx0XHRcdGlmKGV4dCl7XG5cdFx0XHRcdHBhdGggKz0gJy4nK2V4dDtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0XG5cdFx0XHRpZih0aGlzLmRlcEV4aXN0cyhwYXRoKSl7XG5cdFx0XHRcdGxldCByZXF1aXJlZCA9IHRoaXMuZGVwUmVxdWlyZShwYXRoKTtcblx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0aWYocGF0aEZyYWdtZW50cy5sZW5ndGgpe1xuXHRcdFx0XHRcdHBhdGhGcmFnbWVudHMuZm9yRWFjaCggc3ViS2V5ID0+IHtcblx0XHRcdFx0XHRcdGlmKHR5cGVvZiByZXF1aXJlZCAhPT0gJ3VuZGVmaW5lZCcgJiYgcmVxdWlyZWQgIT09IG51bGwpe1xuXHRcdFx0XHRcdFx0XHRyZXF1aXJlZCA9IHJlcXVpcmVkW3N1YktleV07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdFxuXHRcdFx0XHR0aGlzLnJlcXVpcmVzW2tleV0gPSByZXF1aXJlZDtcblx0XHRcdFx0XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fSk7XG5cdFx0aWYoICEgZm91bmQgJiYgKCh0aGlzLmF1dG9sb2FkRmFpbE9uTWlzc2luZ0ZpbGU9PT0ncGF0aCcgJiYgcmVxdWlyZVBhdGgpIHx8IHRoaXMuYXV0b2xvYWRGYWlsT25NaXNzaW5nRmlsZT09PXRydWUpICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgZXhwZWN0ZWQgZGVwZW5kZW5jeSBpbmplY3Rpb24gZmlsZSBcIicrcmVxdWlyZVBhdGgrJ1wiJyk7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiB0aGlzLnJlcXVpcmVzW2tleV07XG5cdH1cblx0XG5cdFxuXHRyZWdpc3RlclJlcXVpcmVNYXAocmVxdWlyZXMpe1xuXHRcdE9iamVjdC5rZXlzKHJlcXVpcmVzKS5mb3JFYWNoKChuYW1lKT0+e1xuXHRcdFx0dGhpcy5yZWdpc3RlclJlcXVpcmUobmFtZSxyZXF1aXJlc1tuYW1lXSk7XG5cdFx0fSk7XG5cdH1cblx0cmVnaXN0ZXJSZXF1aXJlKG5hbWUscil7XG5cdFx0aWYodHlwZW9mIHIgPT0gJ29iamVjdCcgJiYgdHlwZW9mIHIuZGVmYXVsdCA9PSAnZnVuY3Rpb24nKXtcblx0XHRcdHIgPSByLmRlZmF1bHQ7XG5cdFx0fVxuXHRcdGlmKHR5cGVvZiByICE9PSAnZnVuY3Rpb24nKXtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgcnVsZSA9IHRoaXMuZ2V0UnVsZUJhc2UobmFtZSk7XG5cdFx0aWYocnVsZS5kZWNvcmF0b3IgJiYgclt0aGlzLnN5bUNsYXNzTmFtZV0pe1xuXHRcdFx0ciA9IGNsYXNzIGV4dGVuZHMgcnt9O1xuXHRcdH1cblx0XHRcblx0XHRpZihydWxlLmRlY29yYXRvcil7XG5cdFx0XHR0aGlzLmRlY29yYXRvcihuYW1lKShyKTtcblx0XHR9XG5cdFx0ZWxzZXtcblx0XHRcdHRoaXMucmVnaXN0ZXJDbGFzcyhuYW1lLCByKTtcblx0XHR9XG5cdH1cblx0XG5cdFxuXHRkZWNvcmF0b3IoY2xhc3NOYW1lLCB0eXBlcyA9IFtdKXtcblx0XHRyZXR1cm4gKHRhcmdldCk9Pntcblx0XHRcdFxuXHRcdFx0dGhpcy5kZWZpbmVTeW0odGFyZ2V0LCB0aGlzLnN5bUNsYXNzTmFtZSwgY2xhc3NOYW1lKTtcblx0XHRcdFxuXHRcdFx0dGhpcy5yZWdpc3RlckNsYXNzKGNsYXNzTmFtZSwgdGFyZ2V0KTtcblx0XHRcdFxuXHRcdFx0aWYodHlwZW9mIHR5cGVzID09ICdmdW5jdGlvbicpe1xuXHRcdFx0XHR0eXBlcyA9IHR5cGVzKCk7XG5cdFx0XHR9XG5cdFx0XHR0eXBlcyA9IHR5cGVzLm1hcCh0eXBlID0+IHRoaXMud3JhcFZhclR5cGUodHlwZSwgdGhpcy5kZWZhdWx0RGVjb3JhdG9yVmFyKSk7XG5cdFx0XHRcblx0XHRcdGlmICh0YXJnZXRbdGhpcy5zeW1JbnRlcmZhY2VzXSkge1xuXHRcdFx0XHR0eXBlcyA9IHR5cGVzLmNvbmNhdCh0YXJnZXRbdGhpcy5zeW1JbnRlcmZhY2VzXSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmRlZmluZVN5bSh0YXJnZXQsIHRoaXMuc3ltSW50ZXJmYWNlcywgdHlwZXMpO1xuXHRcdFx0XG5cdFx0XHRyZXR1cm4gdGFyZ2V0O1xuXHRcdH07XG5cdH1cblx0XG5cdGV4aXN0cyhuYW1lKXtcblx0XHRyZXR1cm4gQm9vbGVhbih0aGlzLnJ1bGVzW25hbWVdKTtcblx0fVxuXHRcblx0Z2V0KGludGVyZmFjZURlZiwgYXJncywgc2hhcmVkSW5zdGFuY2VzID0ge30sIHN0YWNrID0gW10pe1xuXHRcdHJldHVybiB0aGlzLnByb3ZpZGVyKGludGVyZmFjZURlZikoYXJncywgc2hhcmVkSW5zdGFuY2VzLCBzdGFjayk7XG5cdH1cblx0cHJvdmlkZXIoaW50ZXJmYWNlTmFtZSl7XG5cdFx0XG5cdFx0aWYodHlwZW9mIGludGVyZmFjZU5hbWUgPT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRpbnRlcmZhY2VOYW1lID0gaW50ZXJmYWNlTmFtZVt0aGlzLnN5bUNsYXNzTmFtZV07XG5cdFx0XHRpZighaW50ZXJmYWNlTmFtZSl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignVW5yZWdpc3RyZWQgY2xhc3MgJytpbnRlcmZhY2VOYW1lLmNvbnN0cnVjdG9yLm5hbWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHRpZihpbnRlcmZhY2VOYW1lIGluc3RhbmNlb2YgSW50ZXJmYWNlKXtcblx0XHRcdGludGVyZmFjZU5hbWUgPSBpbnRlcmZhY2VOYW1lLmdldE5hbWUoKTtcblx0XHR9XG5cdFx0XG5cdFx0aWYoIXRoaXMucHJvdmlkZXJSZWdpc3RyeVtpbnRlcmZhY2VOYW1lXSl7XG5cdFx0XHR0aGlzLnByb3ZpZGVyUmVnaXN0cnlbaW50ZXJmYWNlTmFtZV0gPSB0aGlzLm1ha2VQcm92aWRlcihpbnRlcmZhY2VOYW1lKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMucHJvdmlkZXJSZWdpc3RyeVtpbnRlcmZhY2VOYW1lXTtcblx0fVxuXHRcblx0bWFrZVByb3ZpZGVyKGludGVyZmFjZU5hbWUpe1xuXHRcdGNvbnN0IHJ1bGUgPSB0aGlzLmdldFJ1bGUoaW50ZXJmYWNlTmFtZSk7XG5cdFx0Y29uc3QgY2xhc3NEZWYgPSB0aGlzLnJlc29sdmVJbnN0YW5jZU9mKGludGVyZmFjZU5hbWUpO1xuXHRcdHJldHVybiAoYXJncywgc2hhcmVkSW5zdGFuY2VzLCBzdGFjayk9Pntcblx0XHRcdFxuXHRcdFx0Ly9jaGVjayBmb3Igc2hhcmVkIGFmdGVyIHBhcmFtcyBsb2FkXG5cdFx0XHRpZih0aGlzLmluc3RhbmNlUmVnaXN0cnlbaW50ZXJmYWNlTmFtZV0pe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZVJlZ2lzdHJ5W2ludGVyZmFjZU5hbWVdO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRzaGFyZWRJbnN0YW5jZXMgPSBPYmplY3QuYXNzaWduKHt9LCBzaGFyZWRJbnN0YW5jZXMpO1xuXHRcdFx0cnVsZS5zaGFyZWRJblRyZWUuZm9yRWFjaChzaGFyZUludGVyZmFjZSA9PiB7XG5cdFx0XHRcdGlmKCFzaGFyZWRJbnN0YW5jZXNbc2hhcmVJbnRlcmZhY2VdKXtcblx0XHRcdFx0XHRzaGFyZWRJbnN0YW5jZXNbc2hhcmVJbnRlcmZhY2VdID0gbmV3IFNoYXJlZEluc3RhbmNlKHNoYXJlSW50ZXJmYWNlLCB0aGlzKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRcblx0XHRcdGxldCBwYXJhbXM7XG5cdFx0XHRsZXQgZGVmYXVsdFZhcjtcblx0XHRcdGlmKGFyZ3Mpe1xuXHRcdFx0XHRwYXJhbXMgPSBhcmdzO1xuXHRcdFx0XHRkZWZhdWx0VmFyID0gdGhpcy5kZWZhdWx0QXJnc1Zhcjtcblx0XHRcdH1cblx0XHRcdGVsc2V7XG5cdFx0XHRcdHBhcmFtcyA9IHJ1bGUucGFyYW1zIHx8IGNsYXNzRGVmW3RoaXMuc3ltSW50ZXJmYWNlc10gfHwgW107XG5cdFx0XHRcdGRlZmF1bHRWYXIgPSB0aGlzLmRlZmF1bHRSdWxlVmFyO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRjb25zdCByZXNvbHZlZFBhcmFtcyA9IHBhcmFtcy5tYXAoKGludGVyZmFjZURlZiwgaW5kZXgpPT57XG5cdFx0XHRcdHJldHVybiB0aGlzLmdldFBhcmFtKGludGVyZmFjZURlZiwgcnVsZSwgc2hhcmVkSW5zdGFuY2VzLCBkZWZhdWx0VmFyLCBpbmRleCwgc3RhY2spO1xuXHRcdFx0fSk7XG5cdFx0XHRcblx0XHRcdC8vcmVjaGVjayBmb3Igc2hhcmVkIGFmdGVyIHBhcmFtcyBsb2FkXG5cdFx0XHRpZih0aGlzLmluc3RhbmNlUmVnaXN0cnlbaW50ZXJmYWNlTmFtZV0pe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZVJlZ2lzdHJ5W2ludGVyZmFjZU5hbWVdO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRjb25zdCBtYWtlSW5zdGFuY2UgPSAocmVzb2x2ZWRQYXJhbXMpPT57XG5cdFx0XHRcdFxuXHRcdFx0XHRyZXNvbHZlZFBhcmFtcyA9IHN0cnVjdHVyZWRSZXNvbHZlUGFyYW1zSW50ZXJmYWNlKHBhcmFtcywgcmVzb2x2ZWRQYXJhbXMpO1xuXHRcdFx0XHRcblx0XHRcdFx0Y29uc3QgaW5zdGFuY2UgPSBuZXcgY2xhc3NEZWYoLi4ucmVzb2x2ZWRQYXJhbXMpO1xuXHRcdFx0XHRcblx0XHRcdFx0Y29uc3QgZmluYWxpemVJbnN0YW5jZUNyZWF0aW9uID0gKCk9Pntcblx0XHRcdFx0XHRpZihydWxlLnNoYXJlZCl7XG5cdFx0XHRcdFx0XHR0aGlzLnJlZ2lzdGVySW5zdGFuY2UoaW50ZXJmYWNlTmFtZSwgaW5zdGFuY2UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHRjb25zdCBjYWxsc1JldHVybiA9IHRoaXMucnVuQ2FsbHMocnVsZS5sYXp5Q2FsbHMsIGluc3RhbmNlLCBydWxlLCBzaGFyZWRJbnN0YW5jZXMpO1xuXHRcdFx0XHRcdGlmKGNhbGxzUmV0dXJuIGluc3RhbmNlb2YgdGhpcy5Qcm9taXNlSW50ZXJmYWNlKXtcblx0XHRcdFx0XHRcdHJldHVybiBjYWxsc1JldHVybi50aGVuKCgpPT5pbnN0YW5jZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHJldHVybiBpbnN0YW5jZTtcblx0XHRcdFx0fTtcblx0XHRcdFx0XG5cdFx0XHRcdGNvbnN0IGNhbGxzUmV0dXJuID0gdGhpcy5ydW5DYWxscyhydWxlLmNhbGxzLCBpbnN0YW5jZSwgcnVsZSwgc2hhcmVkSW5zdGFuY2VzKTtcblx0XHRcdFx0aWYoY2FsbHNSZXR1cm4gaW5zdGFuY2VvZiB0aGlzLlByb21pc2VJbnRlcmZhY2Upe1xuXHRcdFx0XHRcdHJldHVybiBjYWxsc1JldHVybi50aGVuKCgpPT5maW5hbGl6ZUluc3RhbmNlQ3JlYXRpb24oKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdHJldHVybiBmaW5hbGl6ZUluc3RhbmNlQ3JlYXRpb24oKTtcblx0XHRcdH07XG5cdFx0XHRpZihzdHJ1Y3R1cmVkSGFzUHJvbWlzZShwYXJhbXMsIHJlc29sdmVkUGFyYW1zLCB0aGlzLlByb21pc2VJbnRlcmZhY2UpKXtcblx0XHRcdFx0cmV0dXJuIHN0cnVjdHVyZWRQcm9taXNlQWxsUmVjdXJzaXZlKHBhcmFtcywgcmVzb2x2ZWRQYXJhbXMsIHRoaXMuUHJvbWlzZUludGVyZmFjZSwgdGhpcy5Qcm9taXNlRmFjdG9yeSApLnRoZW4ocmVzb2x2ZWRQYXJhbXM9Pntcblx0XHRcdFx0XHRyZXR1cm4gbWFrZUluc3RhbmNlKHJlc29sdmVkUGFyYW1zKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHJldHVybiBtYWtlSW5zdGFuY2UocmVzb2x2ZWRQYXJhbXMpO1xuXHRcdH07XG5cdH1cblx0XG5cdGdldFN1YnN0aXR1dGlvblBhcmFtKGludGVyZmFjZURlZiwgcnVsZSwgaW5kZXgpe1xuXHRcdGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLndyYXBWYXJUeXBlKHJ1bGUuc3Vic3RpdHV0aW9ucywgdGhpcy5kZWZhdWx0UnVsZVZhcik7XG5cdFx0XG5cdFx0aWYodHlwZW9mIGluZGV4ICE9PSAndW5kZWZpbmVkJyAmJiBzdWJzdGl0dXRpb25zW2luZGV4XSl7XG5cdFx0XHRpbnRlcmZhY2VEZWYgPSBzdWJzdGl0dXRpb25zW2luZGV4XTtcblx0XHRcdGludGVyZmFjZURlZiA9IHRoaXMud3JhcFZhclR5cGUoaW50ZXJmYWNlRGVmLCB0aGlzLmRlZmF1bHRSdWxlVmFyLCB0cnVlKTtcblx0XHR9XG5cdFx0XG5cdFx0aWYoaW50ZXJmYWNlRGVmIGluc3RhbmNlb2YgSW50ZXJmYWNlKXtcblx0XHRcdGNvbnN0IGludGVyZmFjZU5hbWUgPSBpbnRlcmZhY2VEZWYuZ2V0TmFtZSgpO1xuXHRcdFx0aWYoc3Vic3RpdHV0aW9uc1tpbnRlcmZhY2VOYW1lXSl7XG5cdFx0XHRcdGludGVyZmFjZURlZiA9IHN1YnN0aXR1dGlvbnNbaW50ZXJmYWNlTmFtZV07XG5cdFx0XHRcdGludGVyZmFjZURlZiA9IHRoaXMud3JhcFZhclR5cGUoaW50ZXJmYWNlRGVmLCB0aGlzLmRlZmF1bHRSdWxlVmFyLCB0cnVlKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdH1cblx0XHRyZXR1cm4gaW50ZXJmYWNlRGVmO1xuXHR9XG5cdGdldFBhcmFtKGludGVyZmFjZURlZiwgcnVsZSwgc2hhcmVkSW5zdGFuY2VzLCBkZWZhdWx0VmFyID0gJ2ludGVyZmFjZScsIGluZGV4ID0gdW5kZWZpbmVkLCBzdGFjayA9IFtdKXtcblx0XHRcblx0XHRpbnRlcmZhY2VEZWYgPSB0aGlzLndyYXBWYXJUeXBlKGludGVyZmFjZURlZiwgZGVmYXVsdFZhcik7XG5cdFx0XG5cdFx0aW50ZXJmYWNlRGVmID0gdGhpcy5nZXRTdWJzdGl0dXRpb25QYXJhbShpbnRlcmZhY2VEZWYsIHJ1bGUsIGluZGV4KTtcblx0XHRcblx0XHRpZihpbnRlcmZhY2VEZWYgaW5zdGFuY2VvZiBGYWN0b3J5KXtcblx0XHRcdGNvbnNvbGUubG9nKCdGYWN0b3J5ICEhISEhISEhISEhISEhJyk7XG5cdFx0XHRyZXR1cm4gaW50ZXJmYWNlRGVmLmNhbGxiYWNrKHNoYXJlZEluc3RhbmNlcyk7XG5cdFx0fVxuXHRcdGlmKGludGVyZmFjZURlZiBpbnN0YW5jZW9mIFZhbHVlKXtcblx0XHRcdHJldHVybiBpbnRlcmZhY2VEZWYuZ2V0VmFsdWUoKTtcblx0XHR9XG5cdFx0aWYoaW50ZXJmYWNlRGVmIGluc3RhbmNlb2YgUmVxdWlyZSl7XG5cdFx0XHRyZXR1cm4gaW50ZXJmYWNlRGVmLnJlcXVpcmUoKTtcblx0XHR9XG5cdFx0XG5cdFx0aWYoaW50ZXJmYWNlRGVmIGluc3RhbmNlb2YgSW50ZXJmYWNlKXtcblx0XHRcdFxuXHRcdFx0Y29uc3QgaW50ZXJmYWNlTmFtZSA9IGludGVyZmFjZURlZi5nZXROYW1lKCk7XG5cdFx0XHRcblx0XHRcdHN0YWNrID0gc3RhY2suc2xpY2UoMCk7XG5cdFx0XHRpZihzdGFjay5pbmRleE9mKGludGVyZmFjZU5hbWUpIT09LTEpe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0N5Y2xpYyBkZXBlbmRlbmN5IGVycm9yIGluICcrSlNPTi5zdHJpbmdpZnkoc3RhY2suY29uY2F0KGludGVyZmFjZU5hbWUpLG51bGwsMikpO1xuXHRcdFx0fVxuXHRcdFx0c3RhY2sucHVzaChpbnRlcmZhY2VOYW1lKTtcblx0XHRcdFxuXHRcdFx0bGV0IGluc3RhbmNlO1xuXHRcdFx0XG5cdFx0XHRpZihzaGFyZWRJbnN0YW5jZXNbaW50ZXJmYWNlTmFtZV0pe1xuXHRcdFx0XHRpbnN0YW5jZSA9IHNoYXJlZEluc3RhbmNlc1tpbnRlcmZhY2VOYW1lXS5nZXQoc2hhcmVkSW5zdGFuY2VzLCBzdGFjayk7XG5cdFx0XHR9XG5cdFx0XHRlbHNle1xuXHRcdFx0XHRpbnN0YW5jZSA9IHRoaXMuZ2V0KGludGVyZmFjZU5hbWUsIHVuZGVmaW5lZCwgc2hhcmVkSW5zdGFuY2VzLCBzdGFjayk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGNvbnN0IGluc3RhbmNlUnVsZSA9IHRoaXMuZ2V0UnVsZShpbnRlcmZhY2VOYW1lKTtcblx0XHRcdFxuXHRcdFx0Ly9pZighaW5zdGFuY2VSdWxlLmFzeW5jUmVzb2x2ZSAmJiBpbnN0YW5jZSBpbnN0YW5jZW9mIHRoaXMuUHJvbWlzZUludGVyZmFjZSl7XG5cdFx0XHRpZighaW5zdGFuY2VSdWxlLmFzeW5jUmVzb2x2ZSl7XG5cdFx0XHRcdHJldHVybiBuZXcgU3luYyhpbnN0YW5jZSk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHJldHVybiBpbnN0YW5jZTtcblx0XHR9XG5cdFx0XG5cdFx0aWYodHlwZW9mIGludGVyZmFjZURlZiA9PSAnb2JqZWN0JyAmJiAhKGludGVyZmFjZURlZiBpbnN0YW5jZW9mIFZhcikpe1xuXHRcdFx0Y29uc3QgbyA9IHt9O1xuXHRcdFx0T2JqZWN0LmtleXMoaW50ZXJmYWNlRGVmKS5mb3JFYWNoKGsgPT4ge1xuXHRcdFx0XHRvW2tdID0gdGhpcy5nZXRQYXJhbShpbnRlcmZhY2VEZWZba10sIHJ1bGUsIHNoYXJlZEluc3RhbmNlcywgZGVmYXVsdFZhciwgdW5kZWZpbmVkLCBzdGFjayk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBvO1xuXHRcdH1cblx0XG5cdFx0cmV0dXJuIGludGVyZmFjZURlZjtcblx0fVxuXHRcblx0d3JhcFZhclR5cGUodHlwZSwgZGVmYXVsdFZhciwgcmVzb2x2ZUZ1bmN0aW9uKXtcblx0XHRpZihyZXNvbHZlRnVuY3Rpb24gJiYgdHlwZW9mIHR5cGUgPT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHR0eXBlID0gdHlwZSgpO1xuXHRcdH1cblx0XHRpZih0eXBlIGluc3RhbmNlb2YgVmFyKXtcblx0XHRcdHJldHVybiB0eXBlO1xuXHRcdH1cblx0XHRzd2l0Y2goZGVmYXVsdFZhcil7XG5cdFx0XHRjYXNlICdpbnRlcmZhY2UnOlxuXHRcdFx0XHRpZih0eXBlb2YgdHlwZSA9PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKXtcblx0XHRcdFx0XHRjb25zdCBvID0ge307XG5cdFx0XHRcdFx0T2JqZWN0LmtleXModHlwZSkuZm9yRWFjaChrZXk9Pntcblx0XHRcdFx0XHRcdGNvbnN0IHYgPSB0eXBlW2tleV07XG5cdFx0XHRcdFx0XHRvW2tleV0gPSB0eXBlb2YgdiA9PSAnb2JqZWN0JyAmJiB2ICE9PSBudWxsICYmICEodiBpbnN0YW5jZW9mIFZhcikgPyB0aGlzLndyYXBWYXJUeXBlKHYsIGRlZmF1bHRWYXIpIDogdjtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRyZXR1cm4gbztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZih0eXBlb2YgdHlwZSA9PSAnZnVuY3Rpb24nKXtcblx0XHRcdFx0XHRyZXR1cm4gbmV3IHRoaXMuZGVmYXVsdEZ1bmN0aW9uV3JhcHBlcih0eXBlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcy5pbnRlcmZhY2UodHlwZSk7XG5cdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3ZhbHVlJzpcblx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWUodHlwZSk7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdFx0cmV0dXJuIHR5cGU7XG5cdH1cblx0XG5cdHJlZ2lzdGVySW5zdGFuY2UobmFtZSwgaW5zdGFuY2Upe1xuXHRcdHRoaXMuaW5zdGFuY2VSZWdpc3RyeVtuYW1lXSA9IGluc3RhbmNlO1xuXHR9XG5cdFxuXHRnZXRSdWxlQmFzZShpbnRlcmZhY2VOYW1lKXtcblx0XHRjb25zdCBydWxlQmFzZSA9IHRoaXMubWVyZ2VSdWxlKHt9LCB0aGlzLnJ1bGVzRGVmYXVsdCk7XG5cdFx0cnVsZUJhc2UuaW50ZXJmYWNlTmFtZSA9IGludGVyZmFjZU5hbWU7IC8vZm9yIGluZm9cblx0XHR0aGlzLm1lcmdlUnVsZShydWxlQmFzZSwgdGhpcy5ydWxlc1tpbnRlcmZhY2VOYW1lXSB8fCB7fSk7XG5cdFx0cmV0dXJuIHJ1bGVCYXNlO1xuXHR9XG5cdFxuXHRnZXRSdWxlKGludGVyZmFjZU5hbWUpe1xuXHRcdGNvbnN0IHJ1bGUgPSB0aGlzLm1lcmdlUnVsZSh7fSwgdGhpcy5ydWxlc0RlZmF1bHQpO1xuXHRcdHJ1bGUuaW50ZXJmYWNlTmFtZSA9IGludGVyZmFjZU5hbWU7IC8vZm9yIGluZm9cblx0XHRpZighaW50ZXJmYWNlTmFtZSl7XG5cdFx0XHRyZXR1cm4gcnVsZTtcblx0XHR9XG5cdFx0XG5cdFx0Y29uc3QgcnVsZUJhc2UgPSB0aGlzLmdldFJ1bGVCYXNlKGludGVyZmFjZU5hbWUpO1xuXHRcdFxuXHRcdGxldCBzdGFjayA9IFtdO1xuXHRcdFxuXHRcdHRoaXMucmVzb2x2ZUluc3RhbmNlT2YoaW50ZXJmYWNlTmFtZSwgc3RhY2spO1xuXHRcdFxuXHRcdGNvbnN0IHJ1bGVzID0gW107XG5cdFx0XG5cdFx0bGV0IGZ1bGxTdGFjaztcblx0XHRcblx0XHRpZihydWxlQmFzZS5pbmhlcml0SW5zdGFuY2VPZil7IFxuXHRcdFx0ZnVsbFN0YWNrID0gbmV3IFNldCggc3RhY2suc2xpY2UoMCwgLTEpICk7XG5cdFx0fVxuXHRcdGVsc2V7XG5cdFx0XHRmdWxsU3RhY2sgPSBuZXcgU2V0KCBzdGFjay5zbGljZSgwLCAxKSApO1xuXHRcdH1cblx0XHRcblx0XHRcblx0XHRpZihydWxlQmFzZS5pbmhlcml0UHJvdG90eXBlKXtcblx0XHRcdHN0YWNrLnJldmVyc2UoKS5mb3JFYWNoKChjKT0+e1xuXHRcdFx0XHRpZih0eXBlb2YgYyA9PSAnZnVuY3Rpb24nKXtcblx0XHRcdFx0XHRsZXQgcGFyZW50UHJvdG8gPSBjO1xuXHRcdFx0XHRcdGxldCBjbGFzc05hbWU7XG5cdFx0XHRcdFx0d2hpbGUocGFyZW50UHJvdG8pe1xuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lID0gcGFyZW50UHJvdG9bdGhpcy5zeW1DbGFzc05hbWVdO1xuXHRcdFx0XHRcdFx0aWYoY2xhc3NOYW1lKXtcblx0XHRcdFx0XHRcdFx0ZnVsbFN0YWNrLmFkZChjbGFzc05hbWUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cGFyZW50UHJvdG8gPSBSZWZsZWN0LmdldFByb3RvdHlwZU9mKHBhcmVudFByb3RvKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0XHRmdWxsU3RhY2sgPSBBcnJheS5mcm9tKGZ1bGxTdGFjaykucmV2ZXJzZSgpO1xuXHRcdFxuXHRcdGZ1bGxTdGFjay5mb3JFYWNoKChjbGFzc05hbWUpPT57XG5cdFx0XHRjb25zdCBtZXJnZVJ1bGUgPSB0aGlzLnJ1bGVzW2NsYXNzTmFtZV07XG5cdFx0XHRcdFxuXHRcdFx0aWYobWVyZ2VSdWxlLmluaGVyaXRNaXhpbnMpe1xuXHRcdFx0XHR0aGlzLm1peGluc1J1bGUocnVsZSwgbWVyZ2VSdWxlLmluaGVyaXRNaXhpbnMpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHR0aGlzLm1lcmdlUnVsZShydWxlLCBtZXJnZVJ1bGUpO1xuXHRcdH0pO1xuXHRcdFxuXHRcdHJldHVybiBydWxlO1xuXHR9XG5cdFxuXHRtaXhpbnNSdWxlKHJ1bGUsIG1peGluc0dyb3VwKXtcblx0XHRjb25zdCBtaXhpbnNHcm91cHMgPSB0aGlzLnJ1bGVDb2xsZWN0RXh0ZW5kc1JlY3Vyc2l2ZShtaXhpbnNHcm91cCkucmV2ZXJzZSgpO1xuXHRcdG1peGluc0dyb3Vwcy5mb3JFYWNoKG1peGluR3JvdXAgPT5cblx0XHRcdG1peGluR3JvdXAuZm9yRWFjaCggbWl4aW4gPT4ge1xuXHRcdFx0XHRjb25zdCBtZXJnZVJ1bGUgPSB0aGlzLnJ1bGVzW21peGluXTtcblx0XHRcdFx0dGhpcy5tZXJnZVJ1bGUocnVsZSwgbWVyZ2VSdWxlLCBmYWxzZSlcblx0XHRcdH0gKVxuXHRcdCk7XG5cdH1cblx0cnVsZUNvbGxlY3RFeHRlbmRzUmVjdXJzaXZlKG1peGluR3JvdXAsIG1peGluc0dyb3VwcyA9IFtdKXtcblx0XHRpZighKG1peGluR3JvdXAgaW5zdGFuY2VvZiBBcnJheSkpe1xuXHRcdFx0bWl4aW5Hcm91cCA9IFttaXhpbkdyb3VwXTtcblx0XHR9XG5cdFx0bWl4aW5zR3JvdXBzLnB1c2gobWl4aW5Hcm91cCk7XG5cdFx0bWl4aW5Hcm91cC5mb3JFYWNoKG1peGluID0+IHtcblx0XHRcdGNvbnN0IHJ1bGUgPSB0aGlzLnJ1bGVzW21peGluXTtcblx0XHRcdGlmKHJ1bGUgJiYgcnVsZS5taXhpbnMpe1xuXHRcdFx0XHR0aGlzLnJ1bGVDb2xsZWN0RXh0ZW5kc1JlY3Vyc2l2ZShydWxlLm1peGlucywgbWl4aW5zR3JvdXBzKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRyZXR1cm4gbWl4aW5zR3JvdXBzO1xuXHR9XG5cblx0cmVnaXN0ZXJDbGFzcyhuYW1lLCB0YXJnZXQpe1xuXHRcdGlmKCF0aGlzLnJ1bGVzW25hbWVdKXtcblx0XHRcdHRoaXMucnVsZXNbbmFtZV0gPSB7fTtcblx0XHR9XG5cdFx0dGhpcy5ydWxlc1tuYW1lXS5jbGFzc0RlZiA9IHRhcmdldDtcblx0fVxuXHRcblx0bWVyZ2VSdWxlKGV4dGVuZFJ1bGUsIHJ1bGUsIG1lcmdlRXh0ZW5kID0gdHJ1ZSl7XG5cdFx0bGV0IHtcblx0XHRcdHNoYXJlZCxcblx0XHRcdGluaGVyaXRJbnN0YW5jZU9mLFxuXHRcdFx0aW5oZXJpdFByb3RvdHlwZSxcblx0XHRcdGluaGVyaXRNaXhpbnMsXG5cdFx0XHRpbnN0YW5jZU9mLFxuXHRcdFx0cGFyYW1zLFxuXHRcdFx0Y2FsbHMsXG5cdFx0XHRsYXp5Q2FsbHMsXG5cdFx0XHRzdWJzdGl0dXRpb25zLFxuXHRcdFx0c2hhcmVkSW5UcmVlLFxuXHRcdFx0Y2xhc3NEZWYsXG5cdFx0XHRzaW5nbGV0b24sXG5cdFx0XHRhc3luY1Jlc29sdmUsXG5cdFx0XHRhc3luY0NhbGxzU2VyaWUsXG5cdFx0XHRhc3luY0NhbGxzUGFyYW1zU2VyaWUsXG5cdFx0XHRkZWNvcmF0b3IsXG5cdFx0XHRhdXRvbG9hZCxcblx0XHRcdHBhdGgsXG5cdFx0fSA9IHJ1bGU7XG5cdFx0aWYoY2xhc3NEZWYgIT09IHVuZGVmaW5lZCl7XG5cdFx0XHRleHRlbmRSdWxlLmNsYXNzRGVmID0gY2xhc3NEZWY7XG5cdFx0fVxuXHRcdGlmKHNoYXJlZCAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUuc2hhcmVkID0gc2hhcmVkO1xuXHRcdH1cblx0XHRpZihpbmhlcml0SW5zdGFuY2VPZiAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUuaW5oZXJpdEluc3RhbmNlT2YgPSBpbmhlcml0SW5zdGFuY2VPZjtcblx0XHR9XG5cdFx0aWYoaW5oZXJpdFByb3RvdHlwZSAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUuaW5oZXJpdFByb3RvdHlwZSA9IGluaGVyaXRQcm90b3R5cGU7XG5cdFx0fVxuXHRcdGlmKGRlY29yYXRvciAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUuZGVjb3JhdG9yID0gZGVjb3JhdG9yO1xuXHRcdH1cblx0XHRpZihhdXRvbG9hZCAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUuYXV0b2xvYWQgPSBhdXRvbG9hZDtcblx0XHR9XG5cdFx0aWYocGF0aCAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUucGF0aCA9IHBhdGg7XG5cdFx0fVxuXHRcdGlmKGluc3RhbmNlT2YgIT09IHVuZGVmaW5lZCl7XG5cdFx0XHRleHRlbmRSdWxlLmluc3RhbmNlT2YgPSBpbnN0YW5jZU9mO1xuXHRcdH1cblx0XHRpZihhc3luY1Jlc29sdmUgIT09IHVuZGVmaW5lZCl7XG5cdFx0XHRleHRlbmRSdWxlLmFzeW5jUmVzb2x2ZSA9IGFzeW5jUmVzb2x2ZTtcblx0XHR9XG5cdFx0aWYoYXN5bmNDYWxsc1NlcmllICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5hc3luY0NhbGxzU2VyaWUgPSBhc3luY0NhbGxzU2VyaWU7XG5cdFx0fVxuXHRcdGlmKGFzeW5jQ2FsbHNQYXJhbXNTZXJpZSAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUuYXN5bmNDYWxsc1BhcmFtc1NlcmllID0gYXN5bmNDYWxsc1BhcmFtc1NlcmllO1xuXHRcdH1cblxuXHRcdGlmKGNhbGxzICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5jYWxscyA9ICggZXh0ZW5kUnVsZS5jYWxscyB8fCBbXSApLmNvbmNhdChjYWxscyk7XG5cdFx0fVxuXHRcdGlmKGxhenlDYWxscyAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGV4dGVuZFJ1bGUubGF6eUNhbGxzID0gKCBleHRlbmRSdWxlLmxhenlDYWxscyB8fCBbXSApLmNvbmNhdChsYXp5Q2FsbHMpO1xuXHRcdH1cblx0XHRcblx0XHRpZihtZXJnZUV4dGVuZCAmJiBpbmhlcml0TWl4aW5zICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5pbmhlcml0TWl4aW5zID0gaW5oZXJpdE1peGlucy5zbGljZSgwKTtcblx0XHR9XG5cdFx0XG5cdFx0aWYocGFyYW1zICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0ZXh0ZW5kUnVsZS5wYXJhbXMgPSBwYXJhbXM7XG5cdFx0fVxuXHRcdGlmKHN1YnN0aXR1dGlvbnMgIT09IHVuZGVmaW5lZCl7XG5cdFx0XHRpZighZXh0ZW5kUnVsZS5zdWJzdGl0dXRpb25zKXtcblx0XHRcdFx0ZXh0ZW5kUnVsZS5zdWJzdGl0dXRpb25zID0ge307XG5cdFx0XHR9XG5cdFx0XHRPYmplY3QuYXNzaWduKGV4dGVuZFJ1bGUuc3Vic3RpdHV0aW9ucywgc3Vic3RpdHV0aW9ucyk7XG5cdFx0fVxuXHRcdGlmKHNoYXJlZEluVHJlZSAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGlmKCFleHRlbmRSdWxlLnNoYXJlZEluVHJlZSl7XG5cdFx0XHRcdGV4dGVuZFJ1bGUuc2hhcmVkSW5UcmVlID0gW107XG5cdFx0XHR9XG5cdFx0XHRleHRlbmRSdWxlLnNoYXJlZEluVHJlZSA9IEFycmF5LmZyb20oIG5ldyBTZXQoWy4uLmV4dGVuZFJ1bGUuc2hhcmVkSW5UcmVlLCAuLi5zaGFyZWRJblRyZWVdKSApO1xuXHRcdH1cblx0XHRleHRlbmRSdWxlLnNpbmdsZXRvbiA9IHNpbmdsZXRvbjtcblx0XHRyZXR1cm4gZXh0ZW5kUnVsZTtcblx0fVxuXHRcblx0bWVyZ2VSdWxlcyhleHRlbmRSdWxlcywgcnVsZXMpe1xuXHRcdE9iamVjdC5rZXlzKHJ1bGVzKS5mb3JFYWNoKChrKT0+e1xuXHRcdFx0aWYoIWV4dGVuZFJ1bGVzW2tdKXtcblx0XHRcdFx0ZXh0ZW5kUnVsZXNba10gPSB7fTtcblx0XHRcdH1cblx0XHRcdGV4dGVuZFJ1bGVzW2tdID0gdGhpcy5tZXJnZVJ1bGUoZXh0ZW5kUnVsZXNba10sIHJ1bGVzW2tdKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gZXh0ZW5kUnVsZXM7XG5cdH1cblx0XG5cdHJ1bkNhbGxzKGNhbGxzLCBpbnN0YW5jZSwgcnVsZSwgc2hhcmVkSW5zdGFuY2VzKXtcblx0XHRsZXQgaGFzQXN5bmM7XG5cdFx0XG5cdFx0bGV0IGNhbGxlcnMgPSBjYWxscy5tYXAoKGMpPT4gKCk9PiB7XG5cdFx0XHRcblx0XHRcdGlmKHR5cGVvZiBjID09ICdmdW5jdGlvbicpe1xuXHRcdFx0XHRjID0gW2NdO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgWyBtZXRob2QsIHBhcmFtcyA9IFtdLCBhc3luY1Jlc29sdmUgPSBydWxlLmFzeW5jUmVzb2x2ZSAgXSA9IGM7XG5cdFx0XHRcblx0XHRcdGNvbnN0IG1ha2VDYWxsID0gKHJlc29sdmVkUGFyYW1zKT0+e1x0XHRcdFx0XG5cdFx0XHRcdHJlc29sdmVkUGFyYW1zID0gc3RydWN0dXJlZFJlc29sdmVQYXJhbXNJbnRlcmZhY2UocGFyYW1zLCByZXNvbHZlZFBhcmFtcyk7XG5cdFx0XHRcdGxldCBjYWxsUmV0dXJuO1xuXHRcdFx0XHRpZih0eXBlb2YgbWV0aG9kID09ICdmdW5jdGlvbicpe1xuXHRcdFx0XHRcdGNhbGxSZXR1cm4gPSBtZXRob2QoaW5zdGFuY2UsIC4uLnJlc29sdmVkUGFyYW1zKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNle1xuXHRcdFx0XHRcdGNhbGxSZXR1cm4gPSBpbnN0YW5jZVttZXRob2RdKC4uLnJlc29sdmVkUGFyYW1zKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZighYXN5bmNSZXNvbHZlKXtcblx0XHRcdFx0XHRjYWxsUmV0dXJuID0gbmV3IFN5bmMoY2FsbFJldHVybik7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGNhbGxSZXR1cm47XG5cdFx0XHR9O1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRjb25zdCByZXNvbHZlZFBhcmFtcyA9IHBhcmFtcy5tYXAocGFyYW0gPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5nZXRQYXJhbShwYXJhbSwgcnVsZSwgc2hhcmVkSW5zdGFuY2VzLCB0aGlzLmRlZmF1bHRSdWxlVmFyKTtcblx0XHRcdH0pO1xuXHRcdFx0aWYoc3RydWN0dXJlZEhhc1Byb21pc2UocGFyYW1zLCByZXNvbHZlZFBhcmFtcywgdGhpcy5Qcm9taXNlSW50ZXJmYWNlKSl7XG5cdFx0XHRcdGhhc0FzeW5jID0gdHJ1ZTtcblx0XHRcdFx0cmV0dXJuICgpID0+IHN0cnVjdHVyZWRQcm9taXNlQWxsUmVjdXJzaXZlKHBhcmFtcywgcmVzb2x2ZWRQYXJhbXMsIHRoaXMuUHJvbWlzZUludGVyZmFjZSwgdGhpcy5Qcm9taXNlRmFjdG9yeSkudGhlbihyZXNvbHZlZFBhcmFtcz0+e1xuXHRcdFx0XHRcdHJldHVybiBtYWtlQ2FsbChyZXNvbHZlZFBhcmFtcyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZXtcblx0XHRcdFx0cmV0dXJuICgpID0+IG1ha2VDYWxsKHJlc29sdmVkUGFyYW1zKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdH0pO1xuXHRcdFxuXHRcdGNvbnN0IGFzeW5jQ2FsbHNQYXJhbXNTZXJpZSA9IHJ1bGUuYXN5bmNDYWxsc1BhcmFtc1NlcmllO1xuXHRcdGNvbnN0IGFzeW5jQ2FsbHNTZXJpZSA9IHJ1bGUuYXN5bmNDYWxsc1NlcmllIHx8IGFzeW5jQ2FsbHNQYXJhbXNTZXJpZTtcblx0XHRcblx0XHRjb25zdCBtYWtlQ2FsbHMgPSAoY2FsbGVycyk9Pntcblx0XHRcdFxuXHRcdFx0bGV0IGNhbGxlcnNSZXR1cm47XG5cdFx0XHRpZihoYXNBc3luYyl7XG5cdFx0XHRcdGlmKGFzeW5jQ2FsbHNTZXJpZSl7XG5cdFx0XHRcdFx0Y2FsbGVyc1JldHVybiA9IG1hcFNlcmllKGNhbGxlcnMsIChjYWxsZXIpPT57XG5cdFx0XHRcdFx0XHRyZXR1cm4gY2FsbGVyKCk7XG5cdFx0XHRcdFx0fSwgdGhpcy5Qcm9taXNlSW50ZXJmYWNlLCB0aGlzLlByb21pc2VGYWN0b3J5KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNle1xuXHRcdFx0XHRcdGNhbGxlcnNSZXR1cm4gPSB0aGlzLlByb21pc2VGYWN0b3J5LmFsbCggY2FsbGVycy5tYXAoKGNhbGxlcik9Pntcblx0XHRcdFx0XHRcdHJldHVybiBjYWxsZXIoKTtcblx0XHRcdFx0XHR9KSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbHNle1xuXHRcdFx0XHRjYWxsZXJzUmV0dXJuID0gY2FsbGVycy5tYXAoKGNhbGxlcik9Pntcblx0XHRcdFx0XHRjb25zdCBjYWxsZXJSZXR1cm4gPSBjYWxsZXIoKTtcblx0XHRcdFx0XHRpZihjYWxsZXJSZXR1cm4gaW5zdGFuY2VvZiB0aGlzLlByb21pc2VJbnRlcmZhY2Upe1xuXHRcdFx0XHRcdFx0aGFzQXN5bmMgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gY2FsbGVyUmV0dXJuO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0aWYoaGFzQXN5bmMpe1xuXHRcdFx0XHRcdGNhbGxlcnNSZXR1cm4gPSB0aGlzLlByb21pc2VGYWN0b3J5LmFsbChjYWxsZXJzUmV0dXJuKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNhbGxlcnNSZXR1cm47XG5cdFx0fVxuXHRcdFxuXHRcdGlmKGFzeW5jQ2FsbHNQYXJhbXNTZXJpZSl7XG5cdFx0XHRjYWxsZXJzID0gbWFwU2VyaWUoY2FsbGVycywgKGNhbGxlcik9Pntcblx0XHRcdFx0Y2FsbGVyID0gY2FsbGVyKCkoKTtcblx0XHRcdFx0cmV0dXJuIGNhbGxlcjtcblx0XHRcdH0sIHRoaXMuUHJvbWlzZUludGVyZmFjZSwgdGhpcy5Qcm9taXNlRmFjdG9yeSk7XG5cdFx0XHRyZXR1cm4gY2FsbGVycy50aGVuKCBjYWxsZXJzID0+IG1ha2VDYWxscyggY2FsbGVycy5tYXAoY2FsbGVyID0+ICgpID0+IGNhbGxlciApICkgKSA7XG5cdFx0fVxuXHRcdGVsc2V7XG5cdFx0XHRjYWxsZXJzID0gY2FsbGVycy5tYXAoKGNhbGxlcik9PmNhbGxlcigpKTtcblx0XHRcdHJldHVybiBtYWtlQ2FsbHMoY2FsbGVycyk7XG5cdFx0fVxuXHRcdFxuXHR9XG5cdFx0XG5cdGRlZmluZVN5bSh0YXJnZXQsIHN5bW5hbWUsIHZhbHVlKXtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBzeW1uYW1lLCB7XG5cdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHR9KTtcblx0fVxuXHRcblx0cmVzb2x2ZUluc3RhbmNlT2Yoc3RyLCBzdGFjayA9IFtdLCByZXF1aXJlZCA9IHRydWUpe1xuXHRcdGlmKHR5cGVvZiBzdHIgPT0gJ3N0cmluZycpe1xuXHRcdFx0aWYoc3RhY2suaW5kZXhPZihzdHIpIT09LTEpe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0N5Y2xpYyBpbnRlcmZhY2UgZGVmaW5pdGlvbiBlcnJvciBpbiAnK0pTT04uc3RyaW5naWZ5KHN0YWNrLmNvbmNhdChzdHIpLG51bGwsMikpO1xuXHRcdFx0fVxuXHRcdFx0c3RhY2sucHVzaChzdHIpO1xuXHRcdFx0Y29uc3QgcnVsZSA9IHRoaXMucnVsZXNbc3RyXTtcblx0XHRcdGxldCByZXNvbHZlZCA9IGZhbHNlO1xuXHRcdFx0aWYocnVsZSl7XG5cdFx0XHRcdGlmKHJ1bGUuaW5zdGFuY2VPZil7XG5cdFx0XHRcdFx0cmVzb2x2ZWQgPSBydWxlLmluc3RhbmNlT2Y7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZihydWxlLmNsYXNzRGVmKXtcblx0XHRcdFx0XHRyZXNvbHZlZCA9IHJ1bGUuY2xhc3NEZWY7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmKCFyZXNvbHZlZCl7XG5cdFx0XHRcdGlmKCFyZXF1aXJlZCl7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignSW50ZXJmYWNlIGRlZmluaXRpb24gXCInK3N0cisnXCIgbm90IGZvdW5kLCBkaSBsb2FkIHN0YWNrOiAnK0pTT04uc3RyaW5naWZ5KHN0YWNrLCBudWxsLCAyKSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5yZXNvbHZlSW5zdGFuY2VPZihyZXNvbHZlZCwgc3RhY2ssIHJlcXVpcmVkKTtcblx0XHR9XG5cdFx0c3RhY2sucHVzaChzdHIpO1xuXHRcdHJldHVybiBzdHI7XG5cdH1cblx0XG5cdGZhY3RvcnkoY2FsbGJhY2spe1xuXHRcdHJldHVybiBuZXcgdGhpcy5kZWZhdWx0RmFjdG9yeShjYWxsYmFjayk7XG5cdH1cblx0dmFsdWVGYWN0b3J5KGNhbGxiYWNrKXtcblx0XHRyZXR1cm4gbmV3IFZhbHVlRmFjdG9yeShjYWxsYmFjayk7XG5cdH1cblx0Y2xhc3NGYWN0b3J5KGNhbGxiYWNrKXtcblx0XHRyZXR1cm4gbmV3IENsYXNzRmFjdG9yeShjYWxsYmFjayk7XG5cdH1cblx0aW50ZXJmYWNlKG5hbWUpe1xuXHRcdHJldHVybiBuZXcgSW50ZXJmYWNlKG5hbWUpO1xuXHR9XG5cdHZhbHVlKHZhbHVlKXtcblx0XHRyZXR1cm4gbmV3IFZhbHVlKHZhbHVlKTtcblx0fVxuXHRyZXF1aXJlKGRlcCl7XG5cdFx0cmV0dXJuIG5ldyBSZXF1aXJlKGRlcCk7XG5cdH1cblx0XG5cdGRlcGVuZGVuY3koZGVwKXtcblx0XHRyZXR1cm4gbmV3IERlcGVuZGVuY3koZGVwKTtcblx0fVxuXHRcblx0Y2xhc3NEZWYoY2FsbGJhY2spe1xuXHRcdHJldHVybiBuZXcgQ2xhc3NEZWYoY2FsbGJhY2spO1xuXHR9XG59XG4iXX0=