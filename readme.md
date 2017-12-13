# DI-Strategy

High level and universal javascript Dependency-Injection (DI) container for node and browser.

## Installation
```
$ npm i di-strategy
```

## Motivation
Implement [Composition Root](http://blog.ploeh.dk/2011/07/28/CompositionRoot/) and [IoC](https://en.wikipedia.org/wiki/Inversion_of_control) design patterns, helping developers to keep all things decoupled and wire application components and config at one root place.

Allowing developers to write good [SOLID](https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)) Object Oriented (OO) design
and encouraging [Composite Reuse](https://en.wikipedia.org/wiki/Composition_over_inheritance).

## Documentation

### Getting started
```javascript
import container from 'di-strategy'

const di = container();

di.addRules(rules);

di.get('MyClassName');
```


### Composition Root

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

### Iversion of Control (IoC)
#### with direct class definition
```javascript
@di('A',[ B ])
class A{
	constructor(b){
		this.b = b;
	}
}

di.get('A')
```
#### with abstract class definition based on rules
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


### Rules config

### Container config



## About
Built with babel but use is unopinionated. Browser usage is optimized for webpack.
Can be used with [interface-prototype](https://github.com/redcatjs/interface-prototype),
you can get pre-wired implementation from [omniverse](https://github.com/redcatjs/omniverse) library.
