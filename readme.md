# DI-Strategy [![DI-Strategy ICON](https://raw.githubusercontent.com/redcatjs/di-strategy/master/icon/icon.png)](https://github.com/redcatjs/di-strategy#)

High level and universal javascript Dependency-Injection (DI) container for node and browser.

## Installation
```
$ npm i di-strategy
```

## Motivations
Implement [Composition Root](http://blog.ploeh.dk/2011/07/28/CompositionRoot/) and [IoC](https://en.wikipedia.org/wiki/Inversion_of_control) design patterns, helping developers to keep all things decoupled and wire application components and config at one root place.

Allowing developers to write good [SOLID](https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)) Object Oriented (OO) design
and encouraging [Composite Reuse](https://en.wikipedia.org/wiki/Composition_over_inheritance) without needing TypeScript (because some of us, including myself, prefer Babel) or other specific transpiller dependency.

Refacto singleton anti-pattern to dependency injection with export classes and factories instead of instance.

Improve whole code testability.

## Documentation

### Summary

1. [Getting Started](#1-getting-started)

2. [Dependencies declarations approaches](#2-dependencies-declarations-approaches)
	1. [Composition Root](#21-composition-root)
	2. [Inversion of Control (IoC)](#22-inversion-of-control-ioc)

3. [Dependencies Resolution](#3-dependencies-resolution)
	1. [Recursive classes or factories](#31-recursive-classes-or-factories)
	2. [Recursive params](#32-recursive-params)
	3. [Types of params](#33-types-of-params)
		1. [interface](#331-interface)
		2. [value](#332-value)
		3. [factory](#333-factory)
		4. [require](#334-require)

4. [Rules](#4-rules)
	
	1. [dependencies](#41-dependencies)
		1. [params](#411-params)
		2. [calls](#412-calls)
		3. [lazyCalls](#413-lazycalls)
	
	2. [instance](#42-instance)
		1. [classDef](#421-classdef)
		2. [instanceOf](#422-instanceof)
		3. [substitutions](#423-substitutions)
	
	3. [single instance](#43-single-instance)
		1. [shared](#431-shared)
		2. [singleton](#432-singleton)
		3. [sharedInTree](#433-sharedintree)
	
	4. [rule inheritance](#44-rule-inheritance)
		1. [inheritInstanceOf](#441-inheritinstanceof)
		2. [inheritPrototype](#442-inheritprototype)
		3. [inheritMixins](#443-inheritmixins)
		4. [decorator](#444-decorator)

	5. [asynchrone dependencies resolution](#45-asynchrone-dependencies-resolution)
		1. [asyncResolve](#451-asyncresolve)
		2. [asyncCallsSerie](#452-asynccallsserie)
		
	6. [dependency file location](#46-dependency-file-location)
		1. [autoload](#461-autoload)
		2. [path](#462-path)


5. [Container](#5-container)

	1. [rules](#51-rules)
	2. [rulesDefault](#52-rulesdefault)
	
	3. [autoloadFailOnMissingFile](#53-autoloadfailonmissingfile)
	4. [dependencies](#54-dependencies)
	5. [autoloadExtensions](#55-autoloadextensions)
	6. [autoloadPathResolver](#56-autoloadpathresolver)
	
	7. [defaultVar](#57-defaultvar)
	8. [defaultRuleVar](#58-defaultrulevar)
	9. [defaultDecoratorVar](#59-defaultdecoratorvar)
	10. [defaultArgsVar](#510-defaultargsvar)
	
	11. [defaultFactory](#511-defaultfactory)
	12. [defaultFunctionWrapper](#512-defaultfunctionwrapper)
	
	13. [promiseFactory](#513-promisefactory)
	14. [promiseInterfaces](#514-promiseinterfaces)
	
	15. [interfacePrototype](#515-interfaceprototype)
	16. [interfaceTypeCheck](#516-interfacetypecheck)
	
	17. [globalKey](#517-globalkey)
	

### 1. Getting Started
```javascript
import container from 'di-strategy'

const di = container();

di.addRules(rules);

di.get('MyClassName');
```


### 2. Dependencies declarations approaches

To define dependencies, you can use Composition-Root or IoC approach for each components individually.

Differents approaches can be used for differents methods injections on same component.

Dependencies definition can be overrided, the last call of addRule or @di decorator will take precedence.


#### 2.1 Composition-Root

The Composition Root is the highest level of your application, the top overlay.
It's here that you will configure many rules for your components and wire them together.
Using only the Composition Root design pattern has the advantage to let you have totaly unopinionated components,
all your classes and factories can keep uncoupled from the dependency injector (di-strategy).


```javascript
di.addRules({
    'A': {
      classDef: A,
      params: [ 'B' ],
    },
    'B': {
      classDef: B,
    },
  }
})

di.get('A')
```

#### 2.2 Inversion of Control (IoC)

The IoC design pattern let your components define their own dependencies.
These dependencies declarations can rely on container level defined abstractions (recommanded),
or on direct class or factory definition.
It can be used in addition to the Composition-Root and replace the rule's key "params" and also the parameters of call argument for rule's key "calls".

##### with abstract class definition based on rules
```javascript
di.addRule('B',{
  classDef: B,
})

@di('A',[ 'B' ])
class A{
  constructor(b){
    this.b = b;
  }
}

di.get('A')
```

##### with direct class definition
```javascript
@di('A',[ B ])
class A{
  constructor(b){
    this.b = b;
  }
}

di.get('A')
```

### 3. Dependencies Resolution
...

#### 3.1 Recursive classes or factories
...

#### 3.2 Recursive params
...

#### 3.3. Types of params
...

##### 3.3.1 interface
...

##### 3.3.2 value
...

##### 3.3.3 factory
...

##### 3.3.4 require
...


### 4. Rules
...

#### 4.1. dependencies
...

##### 4.1.1 params
...

##### 4.1.2 calls
...

##### 4.1.3 lazyCalls
...


#### 4.2. instance
...

##### 4.2.1 classDef
...

##### 4.2.2 instanceOf
...

##### 4.2.3 substitutions
...


#### 4.3. single instance
...

##### 4.3.1 shared
...

##### 4.3.2 singleton
...

##### 4.3.3 sharedInTree
...


#### 4.4. rule inheritance
...

##### 4.4.1 inheritInstanceOf
...

##### 4.4.2 inheritPrototype
...

##### 4.4.3 inheritMixins
...

##### 4.4.4 decorator
...

#### 4.5. asynchrone dependencies resolution
...

##### 4.5.1 asyncResolve
...

##### 4.5.2 asyncCallsSerie
...

#### 4.6 dependency file location
...

##### 4.6.1 autoload
...

##### 4.6.2 path
...


### 5. Container
...

#### 5.1 rules
...

#### 5.2 rulesDefault
...

#### 5.3 autoloadFailOnMissingFile
...

#### 5.4 dependencies
...

#### 5.5 autoloadExtensions
...

#### 5.6 autoloadPathResolver
...

#### 5.7 defaultVar
...

#### 5.8 defaultRuleVar
...

#### 5.9 defaultDecoratorVar
...

#### 5.10 defaultArgsVar
...

#### 5.11 defaultFactory
...

#### 5.12 defaultFunctionWrapper
...

#### 5.13 promiseFactory
...

#### 5.14 promiseInterfaces
...

#### 5.15 interfacePrototype
...

#### 5.16 interfaceTypeCheck
...

#### 15.7 globalKey
...


## About
Built with babel but use is unopinionated. Browser usage is optimized for webpack.
Can be used with [interface-prototype](https://github.com/redcatjs/interface-prototype),
you can get pre-wired implementation from [omniverse](https://github.com/redcatjs/omniverse) library.
Inspired by [strategy](https://github.com/redcatphp/strategy) for PHP, itself based on [dice](https://r.je/dice.html) design.
