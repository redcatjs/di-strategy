export function makeContainer(rules){
	const container = new Container(rules);
	const di = (...args)=>{
		return container.inject(...args);
	};
	di.container = container;
	di.factory = container.factory.bind(container);
	di.get = container.get.bind(container);
	return di;
}

export class Container{

	constructor(rules){
		this.rules = this._mergeRules({
			'*': {
				shared: false,
				inherit: true,
				instanceOf: null,
				constructorParams: null,
				calls: [],
				substitutions: [],
				shareInstances: [],
			}
		},rules);
		this.symClassName = Symbol('className');
		this.symInterfaces = Symbol('types');
		this.providerRegistry = {};
		this.instanceRegistry = {};
		Object.keys(rules).forEach((interfaceName)=>{
			const rule = rules[interfaceName];
			const { instance, constructorParams } = rule;
			if(instance){
				this.registerInstance(interfaceName, instance);
			}
		});
	}
	
	inject(className, types = []){
		return (target)=>{
			
			this._defineSym(target, this.symClassName, className);
			this.registerClass(className, target);
			
			if (target[this.symInterfaces]) {
				types = types.concat(target[this.symInterfaces]);
			}
			this._defineSym(target, this.symInterfaces, types);
		};
	}
	
	factory(callback){
		return new Factory(callback);
	}
	
	get(interfaceDef, args, shareInstances = {}){
		return this._provider(interfaceDef)(args, shareInstances);
	}
	
	_provider(interfaceDef){
		
		if(typeof interfaceDef == 'object'){
			
			if(interfaceDef instanceof Factory){
				return (args, shareInstances) => interfaceDef.callback(args, shareInstances);
			}
			
			return (args, shareInstances)=>{
				return this._recurse(interfaceDef,(str)=>{
					return this._provider(str)(args, shareInstances);
				});
			};
		}
		
		if(!this.providerRegistry[interfaceDef]){
			this.providerRegistry[interfaceDef] = this._makeProvider(interfaceDef);
		}
		return this.providerRegistry[interfaceDef];
	}
	
	_makeProvider(interfaceDef){
		const rule = this.getRule(interfaceDef);
		const classDef = this._resolveInstanceOf(interfaceDef);
		return (args, shareInstances)=>{
			
			shareInstances = Object.assign({}, shareInstances);
			
			args = this._resolveArgs(classDef, rule, args, shareInstances);
			
			if(shareInstances[interfaceDef]){
				return shareInstances[interfaceDef];
			}
			
			if(this.instanceRegistry[interfaceDef]){
				return this.instanceRegistry[interfaceDef];
			}
							
			const instance = new classDef(...args);
			
			if(rule.calls){
				this._runCalls(instance, rule.calls);
			}
			
			if(rule.shared){
				this.registerInstance(interfaceDef, instance);
			}
			
			return  instance;
		};
	}
	
	_resolveArgs(classDef, rule, args, shareInstances){
		if(args){
			return args;
		}
		let interfaces = rule.constructorParams || classDef[this.symInterfaces] || [];
		if(typeof interfaces == 'function'){
			interfaces = interfaces();
		}
		
		const substitutions = rule.substitutions || {};
		
		return interfaces.map((interfaceDef, i)=>{
			
			if(typeof interfaceDef == 'string' && shareInstances[interfaceDef]){
				return shareInstances[interfaceDef];
			}
			
			if(substitutions[i]){
				interfaceDef = substitutions[i];
			}
			
			if(typeof interfaceDef == 'string' && substitutions[interfaceDef]){
				interfaceDef = substitutions[interfaceDef];
			}
			if(typeof interfaceDef =='function'){
				interfaceDef = interfaceDef();
			}
			
			const shareInstance = typeof interfaceDef == 'string' && rule.shareInstances && rule.shareInstances.indexOf(interfaceDef) !== -1;
			
			const instance = this.get(interfaceDef, undefined, shareInstances);
			
			if(shareInstance){
				shareInstances[interfaceDef] = instance;
			}
			
			return instance;
		});
	}
	
	registerInstance(name, instance){
		this.instanceRegistry[name] = instance;
	}
	
	getRule(interfaceName){
		if(!interfaceName){
			return this.rules['*'];
		}
		
		let rule = Object.assign({}, this.rules[interfaceName] ? this.rules[interfaceName] : this.rules['*']);
		
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
		let { shared, inherit, instanceOf, constructorParams, calls, substitutions, shareInstances } = rule;
		if(typeof shared !== 'undefined'){
			extendRule.shared = shared;
		}
		if(typeof inherit !== 'undefined'){
			extendRule.inherit = inherit;
		}
		if(typeof instanceOf !== 'undefined' && typeof extendRule.instanceOf === 'undefined'){
			extendRule.instanceOf = instanceOf;
		}
		if(typeof calls !== 'undefined'){
			extendRule.calls = this._assocCallsToArray(extendRule.calls);
			calls = this._assocCallsToArray(calls);
			extendRule.calls = extendRule.calls.concat(calls);
		}
		if(typeof constructorParams !== 'undefined'){
			extendRule.constructorParams = constructorParams;
		}
		if(typeof substitutions !== 'undefined'){
			if(!extendRule.substitutions){
				extendRule.substitutions = {};
			}
			Object.assign(extendRule.substitutions, substitutions);
		}
		if(typeof shareInstances !== 'undefined'){
			if(!extendRule.shareInstances){
				extendRule.shareInstances = [];
			}
			extendRule.shareInstances = [...new Set([...extendRule.shareInstances, ...shareInstances])];
		}
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
	
	_runCalls(instance, calls){
		if(typeof calls == 'function'){
			calls = calls();
		}
		calls = this._assocCallsToArray(calls);
		calls.forEach((c)=>{
			const [method, args] = c;
			instance[method](...args);
		});
	}
		
	_defineSym(target, symname, value){
		Object.defineProperty(target, symname, {
			value: value,
			enumerable: false,
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
				throw new Error('Interface definition "'+str+'" not found');
			}
			return this._resolveInstanceOf(resolved, stack);
		}
		stack.push(str);
		return str;
	}

	_recurse(mixed, callback, result = {}){
		if(typeof mixed == 'object'){
			Object.keys(mixed).forEach((key)=>{
				result[key] = this._recurse( mixed[key], callback );
			});
			return result;
		}
		return callback(mixed);
	}
	
}

export class Factory {
	constructor(callback){
		this.callback = callback;
	}
	callback(args, shareInstances){
		return this.callback(args, shareInstances);
	}
}

export default makeContainer;
