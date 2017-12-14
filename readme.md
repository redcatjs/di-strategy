# DI-Strategy

High level and universal javascript Dependency-Injection (DI) container for node and browser.

## Installation
```
$ npm i di-strategy
```

## Motivation
Implement [Composition Root](http://blog.ploeh.dk/2011/07/28/CompositionRoot/) and [IoC](https://en.wikipedia.org/wiki/Inversion_of_control) design patterns, helping developers to keep all things decoupled and wire application components and config at one root place.

Allowing developers to write good [SOLID](https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)) Object Oriented (OO) design
and encouraging [Composite Reuse](https://en.wikipedia.org/wiki/Composition_over_inheritance) without needing TypeScript (because some of us, including myself, prefer Babel) or other transpiller dependency.

## Documentation

### Summary

1. [Getting Started](#1-getting-started)

2. [Dependencies declarations approaches](#2-dependencies-declarations-approaches)
	1. [Composition Root](#21-composition-root)
	2. [Inversion of Control (IoC)](#22-inversion-of-control-ioc)

3. [Dependencies Resolution](#3-dependencies-resolution)
	1. [Recursive classes or factories]
	2. [Recursive params]
	3. [Types of params]
		1. [interface]
		2. [value]
		3. [factory]
		4. [require]

4. [Rules](#4-rules)

5. [Container](#5-container)
	
	

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


### 4. Rules

### 5. Container



## About
Built with babel but use is unopinionated. Browser usage is optimized for webpack.
Can be used with [interface-prototype](https://github.com/redcatjs/interface-prototype),
you can get pre-wired implementation from [omniverse](https://github.com/redcatjs/omniverse) library.
Inspired by [Strategy](https://github.com/redcatphp/strategy) for PHP, itself based on [Dice](https://r.je/dice.html) design.
