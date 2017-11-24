import Var from './var'
import Factory from './factory'
import Value from './value'
import Interface from './interface'
import Require from './require'

import SharedInstance from './sharedInstance'

import ClassDef from './classDef'

import makeContainerApi from './makeContainerApi'

import Sync from './sync'
import structredHasPromise from './structredHasPromise'
import structuredPromiseAllRecursive from './structuredPromiseAllRecursive'
import structuredResolveParamsInterface from './structuredResolveParamsInterface'

export default class Container{

	constructor({
		rules,
		
		autodecorate = false,
		
		autoload = false,
		autoloadFailOnMissingFile = 'path',
		autoloadDirs = [],
		autoloadExtensions = ['js'],
		
		rootPath = null,
		appRoot = '/',
		
		defaultVar = 'interface',
		defaultRuleVar = null,
		defaultDecoratorVar = null,
		defaultArgsVar = null,
		
		globalKey = false,
		resolveAsync = false,
	}){
		
		this.symClassName = Symbol('className');
		this.symInterfaces = Symbol('types');
		this.providerRegistry = {};
		this.instanceRegistry = {};
		this.lazyCallsStack =  [];
		
		this.requires = {};
		this.autodecorate = autodecorate;
		this.autoloadExtensions = autoloadExtensions;
		this.autoload = autoload;
		this.autoloadDirs = autoloadDirs;
		this.loadExtensionRegex = new RegExp('\.('+this.autoloadExtensions.join('|')+')$');
		
		this.rootPath = rootPath;
		this.setAppRoot(appRoot);
		
		this.defaultRuleVar = defaultRuleVar || defaultVar;
		this.defaultDecoratorVar = defaultDecoratorVar || defaultVar;
		this.defaultArgsVar = defaultArgsVar || defaultVar;
		
		this.allowedDefaultVars = ['interface','value'];
		this._validateDefaultVar(defaultVar, 'defaultVar');
		this._validateDefaultVar(this.defaultRuleVar, 'defaultRuleVar');
		this._validateDefaultVar(this.defaultDecoratorVar, 'defaultDecoratorVar');
		this._validateDefaultVar(this.defaultArgsVar, 'defaultArgsVar');
		
		if(globalKey){
			global[globalKey] = makeContainerApi(this);
		}
		
		this.rules = {
			'*': {
				interfaceName: '*',
				shared: false,
				inherit: true,
				instanceOf: null,
				classDef: null,
				params: null,
				calls: [],
				lazyCalls: [],
				substitutions: [],
				shareInstances: [],
				singleton: null,
				async: resolveAsync,
			}
		};
		
		if(typeof rules == 'function'){
			rules = rules(this);
		}
		
		this.rules = this._mergeRules(this.rules,rules);
		
		Object.keys(rules).forEach((interfaceName)=>{
			const rule = rules[interfaceName];
			const { instance, params } = rule;
			if(instance){
				this.registerInstance(interfaceName, instance);
			}
		});
		
	}
	
	setAppRoot(appRoot){
		this.appRoot = appRoot;
		this.appRootStrLen = appRoot.length;
	}
	
	_validateDefaultVar(value, property){
		if(this.allowedDefaultVars.indexOf(value)===-1){
			throw new Error('invalid type "'+value+'" specified for '+property+', possibles values: '+this.allowedDefaultVars.join(' | '));
		}
	}
	
	runAutoloader(){
		this.loadDirs(this.autoloadDirs);
		this.processRules();
		if(this.autodecorate){
			this.autodecorateRequireMap(this.requires);
		}
		
		this.autodecorateClassDefs();
	}
	
	autodecorateClassDefs(){
		const classDefinitions = {};
		Object.entries(this.rules).forEach( ( [name, {classDef}] ) => {
			if(classDef){
				if(classDef instanceof ClassDef){
					classDef = classDef.getClassDef();
				}
				classDefinitions[name] = classDef;
			}
		});
		this.autodecorateRequireMap(classDefinitions);
	}
	
	processRules(){
		Object.keys(this.rules).forEach(key=>{
			this.processRule(key);
		});
	}
	processRule(key, stack = []){
		const rule = this.rules[key] || this.rules['*'];
		if(rule.instanceOf){
			if(stack.indexOf(key)!==-1){
				throw new Error('Cyclic interface definition error in '+JSON.stringify(stack.concat(key),null,2));
			}
			stack.push(key);
			this.processRule(rule.instanceOf, stack);
		}
		if(rule.singleton){
			rule.classDef = function(){
				return rule.singleton;
			};
		}
		if(typeof rule.classDef == 'string'){
			const classDefName = rule.classDef;
			rule.classDef = (...args)=>{
				const classDefinition = this.get(classDefName);
				return new classDefinition(...args);
			};
		}
		if(this.validateAutoloadFileName(key)){
			let autoload = this.autoload;
			if(typeof rule.autoload !== 'undefined'){
				autoload = rule.autoload;
			}
			if(autoload === 'path'){
				autoload = Boolean(rule.path);
			}
			if(autoload){
				const path = rule.path || key;
				this.requireDep(key, path);
			}
		}
	}
	
	validateAutoloadFileName(name){
		if(name=='*'){
			return false;
		}
		if(name.substr(0,1)==='#'){
			return false;
		}
		return true;
	}
	
	requireDep(key, requirePath){
		if(this.requires[key]){
			return;
		}
		
		requirePath = this.resolveAppRoot(requirePath);
		const found = this.autoloadExtensions.concat('').some( ext => {
			
			const pathFragments = requirePath.split(':');
			
			
			let path = pathFragments.shift();
			if(ext){
				path += '.'+ext;
			}
			
			
			if(this.depExists(path)){
				let required = this.depRequire(path);
								
				if(pathFragments.length){
					pathFragments.forEach( subKey => {
						if(typeof required !== 'undefined' && required !== null){
							required = required[subKey];
						}
					});
				}
				
				
				this.requires[key] = required;
				
				return true;
			}
			
		});
		if( ! found && ((this.autoloadFailOnMissingFile==='path' && rule.path) || this.autoloadFailOnMissingFile===true) ){
			throw new Error('Missing expected dependency injection file "'+requirePath+'"');
		}
	}
	
	isAppRoot(path){
		return path.substr(0,this.appRootStrLen)==this.appRoot;
	}
	replaceAppRootByAbsolute(path){
		return this.rootPath+path.substr(this.appRootStrLen);
	}
	resolveAppRoot(path){
		if(this.isAppRoot(path)){
			return this.replaceAppRootByAbsolute(path);
		}
		return path;
	}
	
	autodecorateRequireMap(requires){
		Object.keys(requires).forEach((name)=>{
			this.autodecorateRequire(name,requires[name]);
		});
	}
	autodecorateRequire(name,r){
		if(typeof r == 'object' && typeof r.default == 'function'){
			r = r.default;
		}
		if(typeof r !== 'function'){
			return;
		}
		if(r[this.symClassName]){
			r = class extends r{};
		}
		this.inject(name)(r);
	}
	
	inject(className, types = []){
		return (target)=>{
			
			this._defineSym(target, this.symClassName, className);
			this.registerClass(className, target);

			if(typeof types == 'function'){
				types = types();
			}
			types = types.map(type => this._wrapVarType(type, this.defaultDecoratorVar));
			
			if (target[this.symInterfaces]) {
				types = types.concat(target[this.symInterfaces]);
			}
			this._defineSym(target, this.symInterfaces, types);
			
			return target;
		};
	}
	
	exists(name){
		return Boolean(this.rules[name]);
	}
	
	get(interfaceDef, args, sharedInstances = {}, stack = []){
		const instance = this.provider(interfaceDef)(args, sharedInstances, stack);
		this._runLazyCalls();
		return instance;
	}
	provider(interfaceName){
		
		if(typeof interfaceName == 'function'){
			interfaceName = interfaceName[this.symClassName];
			if(!interfaceName){
				throw new Error('Unregistred class '+interfaceName.constructor.name);
			}
		}
		
		if(interfaceName instanceof Interface){
			interfaceName = interfaceName.getName();
		}
		
		if(!this.providerRegistry[interfaceName]){
			this.providerRegistry[interfaceName] = this._makeProvider(interfaceName);
		}
		return this.providerRegistry[interfaceName];
	}
	
	_makeProvider(interfaceName){
		const rule = this.getRule(interfaceName);
		const classDef = this._resolveInstanceOf(interfaceName);
		return (args, sharedInstances, stack)=>{
			
			//check for shared after params load
			if(this.instanceRegistry[interfaceName]){
				return this.instanceRegistry[interfaceName];
			}
			
			sharedInstances = Object.assign({}, sharedInstances);
			rule.shareInstances.forEach(shareInterface => {
				if(!sharedInstances[shareInterface]){
					sharedInstances[shareInterface] = new SharedInstance(shareInterface, this);
				}
			});
			
			let params;
			let defaultVar;
			if(args){
				params = args;
				defaultVar = this.defaultArgsVar;
			}
			else{
				params = rule.params || classDef[this.symInterfaces] || [];
				defaultVar = this.defaultRuleVar;
			}
			
			const resolvedParams = params.map((interfaceDef, index)=>{
				return this.getParam(interfaceDef, rule, sharedInstances, defaultVar, index, stack);
			});
			
			//recheck for shared after params load
			if(this.instanceRegistry[interfaceName]){
				return this.instanceRegistry[interfaceName];
			}
			
			const makeInstance = (resolvedParams)=>{
				
				resolvedParams = structuredResolveParamsInterface(params, resolvedParams);
				
				let instance = new classDef(...resolvedParams);
				
				if(rule.shared){
					this.registerInstance(interfaceName, instance);
				}

				this._runCalls(rule.calls, instance, rule, sharedInstances);
				
				if(rule.lazyCalls.length){
					this.lazyCallsStack.push(()=>{
						this._runCalls(rule.lazyCalls, instance, rule, sharedInstances);
					});
				}
				
				
				return instance;
			};
			
			if(structredHasPromise(params, resolvedParams)){
				return structuredPromiseAllRecursive(params, resolvedParams).then(params=>{
					return makeInstance(params);
				});
			}
			
			return makeInstance(resolvedParams);
		};
	}
	
	getParamSubstitution(interfaceDef, rule, index){
		const substitutions = this._wrapVarType(rule.substitutions, this.defaultRuleVar);
		
		if(typeof index !== 'undefined' && substitutions[index]){
			interfaceDef = substitutions[index];
			interfaceDef = this._wrapVarType(interfaceDef, this.defaultRuleVar, true);
		}
		
		if(interfaceDef instanceof Interface){
			const interfaceName = interfaceDef.getName();
			if(substitutions[interfaceName]){
				interfaceDef = substitutions[interfaceName];
				interfaceDef = this._wrapVarType(interfaceDef, this.defaultRuleVar, true);
			}
			
		}
		return interfaceDef;
	}
	getParam(interfaceDef, rule, sharedInstances, defaultVar = 'interface', index = undefined, stack = []){
		
		interfaceDef = this._wrapVarType(interfaceDef, defaultVar);
		
		interfaceDef = this.getParamSubstitution(interfaceDef, rule, index);
		
		if(interfaceDef instanceof Factory){
			return interfaceDef.callback(sharedInstances);
		}
		if(interfaceDef instanceof Value){
			return interfaceDef.getValue();
		}
		if(interfaceDef instanceof Require){
			return interfaceDef.require();
		}
		
		if(interfaceDef instanceof Interface){
			
			const interfaceName = interfaceDef.getName();
			
			stack = stack.slice(0);
			if(stack.indexOf(interfaceName)!==-1){
				throw new Error('Cyclic dependency error in '+JSON.stringify(stack.concat(interfaceName),null,2));
			}
			stack.push(interfaceName);
			
			let instance;
			
			if(sharedInstances[interfaceName]){
				instance = sharedInstances[interfaceName].get(sharedInstances, stack);
			}
			else{
				instance = this.get(interfaceName, undefined, sharedInstances, stack);
			}
			
			const instanceRule = this.getRule(interfaceName);
			
			if(!instanceRule.async){
				return new Sync(instance);
			}
			
			return instance;
		}
		
		if(typeof interfaceDef == 'object' && !(interfaceDef instanceof Var)){
			const o = {};
			Object.keys(interfaceDef).forEach(k => {
				o[k] = this.getParam(interfaceDef[k], rule, sharedInstances, defaultVar, undefined, stack);
			});
			return o;
		}
	
		return interfaceDef;
	}
	
	_wrapVarType(type, defaultVar, resolveFunction){
		if(resolveFunction && typeof type == 'function'){
			type = type();
		}
		if(type instanceof Var){
			return type;
		}
		switch(defaultVar){
			case 'interface':
				if(typeof type == 'object' && type !== null){
					const o = {};
					Object.keys(type).forEach(key=>{
						const v = type[key];
						o[key] = typeof v == 'object' && v !== null && !(v instanceof Var) ? this._wrapVarType(v, defaultVar) : v;
					});
					return o;
				}
				if(typeof type == 'function'){
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
	
	registerInstance(name, instance){
		this.instanceRegistry[name] = instance;
	}
	
	getRule(interfaceName){
		let rule = Object.assign({}, this.rules['*']);
		
		rule.interfaceName = interfaceName; //for info
		
		if(!interfaceName){
			return rule;
		}
		
		
		let stack = [];
		this._resolveInstanceOf(interfaceName, stack);
		let fullStack = stack.slice(0,-2);
		stack = stack.reverse();
		const rules = [];
		stack.forEach((c)=>{
			if(typeof c == 'function'){
				let parentProto = c;
				let className;
				while(className = parentProto[this.symClassName] ){
					fullStack.push(className);
					parentProto = Reflect.getPrototypeOf(parentProto);
				}
			}
		});
		fullStack = fullStack.reverse();
		
		fullStack.forEach((className)=>{
			const mergeRule = this.rules[className];
			if(mergeRule && mergeRule.inherit !== false){
				rule = this._mergeRule(rule, mergeRule);
			}
		});
		
		return rule;
	}

	registerClass(name, target){
		if(!this.rules[name]){
			this.rules[name] = {};
		}
		this.rules[name].instanceOf = target;
	}
	
	_mergeRule(extendRule, rule){
		let {
			shared,
			inherit,
			instanceOf,
			params,
			calls,
			lazyCalls,
			substitutions,
			shareInstances,
			classDef,
			singleton,
			async,
		} = rule;
		if(shared !== undefined){
			extendRule.shared = shared;
		}
		if(inherit !== undefined){
			extendRule.inherit = inherit;
		}
		if(instanceOf !== undefined && extendRule.instanceOf === undefined){
			extendRule.instanceOf = instanceOf;
		}
		if(async !== undefined){
			extendRule.async = async;
		}

		if(calls !== undefined){
			extendRule.calls = this._assocCallsToArray(extendRule.calls);
			calls = this._assocCallsToArray(calls);
			extendRule.calls = extendRule.calls.concat(calls);
		}
		if(lazyCalls !== undefined){
			extendRule.lazyCalls = this._assocCallsToArray(extendRule.lazyCalls);
			lazyCalls = this._assocCallsToArray(lazyCalls);
			extendRule.lazyCalls = extendRule.lazyCalls.concat(lazyCalls);
		}
		
		if(params !== undefined){
			extendRule.params = params;
		}
		if(substitutions !== undefined){
			if(!extendRule.substitutions){
				extendRule.substitutions = {};
			}
			Object.assign(extendRule.substitutions, substitutions);
		}
		if(shareInstances !== undefined){
			if(!extendRule.shareInstances){
				extendRule.shareInstances = [];
			}
			extendRule.shareInstances = [...new Set([...extendRule.shareInstances, ...shareInstances])];
		}
		extendRule.classDef = classDef;
		extendRule.singleton = singleton;
		return extendRule;
	}
	
	_mergeRules(extendRules, rules){
		Object.keys(rules).forEach((k)=>{
			if(!extendRules[k]){
				extendRules[k] = {};
			}
			extendRules[k] = this._mergeRule(extendRules[k], rules[k]);
		});
		return extendRules;
	}
	
	_assocCallsToArray(calls = []){
		if(typeof calls == 'function'){
			calls = calls();
		}
		if(calls instanceof Array){
			return calls;
		}
		let arrayCalls = [];
		Object.keys(calls).forEach((method)=>{
			arrayCalls.push([ method, calls[method] ]);
		});
		return arrayCalls;
	}
	
	_runLazyCalls(){
		while(this.lazyCallsStack.length){
			this.lazyCallsStack.shift()();
		}
	}
	_runCalls(calls, instance, rule, sharedInstances){
		calls.forEach((c)=>{
			
			if(typeof c == 'function'){
				c(instance);
				return;
			}
			
			const [ method, params = [] ] = c;
			
			let resolvedParams = params.map(param => {
				return this.getParam(param, rule, sharedInstances, this.defaultRuleVar);
			});
			
			resolvedParams = structuredResolveParamsInterface(params, resolvedParams);
			
			instance[method](...resolvedParams);
		});
	}
		
	_defineSym(target, symname, value){
		Object.defineProperty(target, symname, {
			value: value,
			enumerable: false,
			configurable: true,
		});
	}
	
	_resolveInstanceOf(str, stack = []){
		if(typeof str == 'string'){
			if(stack.indexOf(str)!==-1){
				throw new Error('Cyclic interface definition error in '+JSON.stringify(stack.concat(str),null,2));
			}
			stack.push(str);
			const rule = this.rules[str];
			let resolved = rule && rule.instanceOf ? rule.instanceOf : false;
			if(!resolved){
				throw new Error('Interface definition "'+str+'" not found, di load stack: '+JSON.stringify(stack, null, 2));
			}
			return this._resolveInstanceOf(resolved, stack);
		}
		stack.push(str);
		return str;
	}
	
	factory(callback){
		return new Factory(callback);
	}
	interface(name){
		return new Interface(name);
	}
	value(value){
		return new Value(value);
	}
	require(dep){
		return new Require(dep);
	}
	
	classDef(callback){
		return new ClassDef(callback);
	}
}
