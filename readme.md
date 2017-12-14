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

2. [Approaches](#2-approaches)
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


### 2. Approaches

#### 2.1 Composition Root

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

### 3. Dependencies Resolution


### 4. Rules

### 5. Container



## About
Built with babel but use is unopinionated. Browser usage is optimized for webpack.
Can be used with [interface-prototype](https://github.com/redcatjs/interface-prototype),
you can get pre-wired implementation from [omniverse](https://github.com/redcatjs/omniverse) library.
Inspired by [Strategy](https://github.com/redcatphp/strategy) for PHP itself based on [Dice](https://r.je/dice.html) design.
