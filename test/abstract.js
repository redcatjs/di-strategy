import {
	expect,
	should,
	assert,
	
} from 'chai'

import sinon from 'sinon'

import {
	makeContainer
} from '../src/di'

import * as classes from './abstract/classes'

import rules from './abstract/rules'

describe('di.get()',function(){
	
	describe('rules',function(){		
		
		const di = makeContainer({
			rules,
			
			rulesDefault: {
			
			},
		});
		describe('classDef',function(){
			it('should return an instance of A',function(){
				const instance = di.get('A');
				expect(instance).instanceof(classes.A);
			});
		});
		
		describe('instanceOf',function(){
		
			describe('instanceOf',function(){
				it('should return an instance of A',function(){
					const instance = di.get('akaOfA');
					expect(instance).instanceof(classes.A);
				});
			});
			describe('instanceOf recursive',function(){
				it('should return an instance of A',function(){
					const instance = di.get('recursiveAkaOfA');
					expect(instance).instanceof(classes.A);
				});
			});
		
		});
		
		describe('shared',function(){
			
			describe('shared',function(){
				it('should return the same instance',function(){
					const Shared1 = di.get('Shared');
					const Shared2 = di.get('Shared');
					expect(Shared1).equal(Shared2);
				});
			});
			describe('not shared (default)',function(){
				it('should return a new instance',function(){
					const N1 = di.get('NotShared');
					const N2 = di.get('NotShared');
					expect(N1).not.equal(N2);
				});
			});
		
		});
		
		describe('params',function(){
			
			describe('values from rule',function(){
				it('sould return params from rule',function(){
					const instance = di.get('A');
					const paramsOfA = instance.getParams();
					expect(paramsOfA).eql([1, 2, 3]);
				});
			});
			
			describe('values from manual call',function(){
				it('sould return params passed to get call',function(){
					const instance = di.get('A', [di.value(4), di.value(5), di.value(6)]);
					const paramsOfA = instance.getParams();
					expect(paramsOfA).eql([4, 5, 6]);
				});
			});
			
			describe('interfaces from rule',function(){
				it('sould return instances from rule\'s params',function(){
					const instance = di.get('C');
					const [ a, b ] = instance.getParams();
					expect(a).instanceof(classes.A);
					expect(b).instanceof(classes.B);
				});
			});
			
			describe('interfaces from manual call',function(){
				it('sould return instances from call\'s params',function(){
					const instance = di.get('C', ['A','B']);
					const [ a, b ] = instance.getParams();
					expect(a).instanceof(classes.A);
					expect(b).instanceof(classes.B);
				});
			});
			
			describe('recursive interfaces from rule',function(){
				it('sould return sub instances from rule\'s params',function(){
					const instance = di.get('D');
					const [ c ] = instance.getParams();
					const [ a, b ] = c.getParams();
					expect(a).instanceof(classes.A);
					expect(b).instanceof(classes.B);
				});
			});
			
			describe('recursive interfaces from manual call',function(){
				it('sould return sub instances from call\'s params',function(){
					const instance = di.get('D', ['C']);
					const [ c ] = instance.getParams();
					const [ a, b ] = c.getParams();
					expect(a).instanceof(classes.A);
					expect(b).instanceof(classes.B);
				});
			});
			
			describe('factory from rule',function(){
				it('sould return values from factories from call\'s params',function(){
					const instance = di.get('G');
					const [ a, b ] = instance.getParams();
					expect(a).equal('A');
					expect(b).instanceof(classes.B);
				});
			});
			
			describe('factory from manual call',function(){
				it('sould return values from factories from call\'s params',function(){
					const instance = di.get('G', [di.factory(()=>new classes.A()),di.factory(()=>'B')]);
					const [ a, b ] = instance.getParams();
					expect(a).instanceof(classes.A);
					expect(b).equal('B');
				});
			});
			
		});
		
		
		describe('singleton',function(){
						
			it('should return the same instance',function(){
				const Singleton1 = di.get('Singleton');
				const Singleton2 = di.get('Singleton');
				expect(Singleton1).equal(Singleton2);
			});
		
		});
		
		describe('substitutions',function(){
			
			describe('substitutions by index',function(){
						
				it('should return substituted instances',function(){
					const instance = di.get('SubstitutionsParentIndex');
					const [ e, f ] = instance.getParams();
					expect(e).instanceof(classes.E);
					expect(f).instanceof(classes.F);
				});
				
			});
			
			describe('substitutions by associative keys',function(){
						
				it('should return substituted instances',function(){
					const instance = di.get('SubstitutionsParentAssoc');
					const [ e, f ] = instance.getParams();
					expect(e).instanceof(classes.E);
					expect(f).instanceof(classes.F);
				});
				
			});
			
			describe('substitutions by index with value',function(){
						
				it('should return substituted values',function(){
					const instance = di.get('SubstitutionsParentIndexWithValue');
					const [ e, f ] = instance.getParams();
					expect(e).equal('E');
					expect(f).equal('F');
				});
				
			});
			
			describe('substitutions by associative keys with value',function(){
						
				it('should return substituted values',function(){
					const instance = di.get('SubstitutionsParentAssocWithValue');
					const [ e, f ] = instance.getParams();
					expect(e).equal('E');
					expect(f).equal('F');
				});
				
			});
		
			describe('substitutions by associative keys in subkey',function(){
						
				it('should return substituted values',function(){
					const instance = di.get('SubstitutionsParentAssocInSubkey');
					const [ o ] = instance.getParams();
					expect(o.subkey.A).equal('E');
					expect(o.subkey.B).equal('F');
				});
				
			});
		});
		
		describe('sharedInTree',function(){
			
			describe('sharedInTree accross tree with direct child param dependency',function(){
						
				it('sharedInstances should be the sames accross the tree',function(){
					const instance = di.get('H');
					const [ {a, i} ] = instance.getParams();
					const [ {a: a2, j} ] = i.getParams();
					const [ a3 ] = j.getParams();
					expect(a).equal(a2).equal(a3);
				});
				
			});
			
			describe('sharedInTree accross tree without direct child param dependency',function(){
						
				it('sharedInstances should be the sames accross the tree',function(){
					const instance = di.get('K');
					const [ {i} ] = instance.getParams();
					const [ {a, j} ] = i.getParams();
					const [ a2 ] = j.getParams();
					expect(a).equal(a2);
				});
				
			});
			
		});
		
		describe('calls',function(){
			
			describe('pass value to method on instance',function(){
						
				it('should return params passed to method configured by the rule',function(){
					const instance = di.get('L');
					const { foo } = instance.getParams();
					expect(foo).equal('bar');
				});
				
			});
			
			describe('pass instance to method on instance',function(){
				
				it('should return params passed to method configured by the rule',function(){
					const instance = di.get('M');
					const { a } = instance.getParams();
					expect(a).instanceof(classes.A);
				});
				
			});
			
		});
		
		describe('lazyCalls',function(){
			
			describe('cyclic dependency via lazy call: n -> o -> n',function(){
						
				it('should return params passed to method configured by the rule',function(){
					const instance = di.get('N');
					const [{ o }] = instance.getParams();
					expect(o).instanceof(classes.O);
					const { n } = o.getParams();
					expect(n).equal(instance);
				});
				
			});
			
			describe('cyclic dependency via call (implicit, cylic detected and turned into lazyCall): p -> q -> p',function(){
						
				it('should return params passed to method configured by the rule',function(){
					const instance = di.get('P');
					const [{ q }] = instance.getParams();
					expect(q).instanceof(classes.Q);
					const { p } = q.getParams();
					expect(p).equal(instance);
				});
				
			});
			
			
			describe('recursive cyclic dependency via lazy call: r -> s -> t',function(){
						
				it('should return params passed to method configured by the rule',function(){
					const instance = di.get('R');
					const [{ s }] = instance.getParams();
					expect(s).instanceof(classes.S);
					const [{ t }] = s.getParams();
					expect(t).instanceof(classes.T);
					const { r } = t.getParams();
					expect(r).equal(instance);
				});
				
			});
			
			describe('recursive cyclic dependency via call (implicit, cylic detected and turned into lazyCall): u -> v -> w',function(){
						
				it('should return params passed to method configured by the rule',function(){
					const instance = di.get('U');
					const [{ v }] = instance.getParams();
					expect(v).instanceof(classes.V);
					const [{ w }] = v.getParams();
					expect(w).instanceof(classes.W);
					const { u } = w.getParams();
					expect(u).equal(instance);
				});
				
			});
			
		});
		
		describe('inheritInstanceOf',function(){
			
			describe('inheritInstanceOf true (default)',function(){
				
				it('should be same configuration as X',function(){
					
					const x = di.get('X');
					const x2 = di.get('X2');
					expect(x2).eql(x);
					
				});
				
				
			});
			
			describe('inheritInstanceOf false',function(){
				
				it('should not be same configuration as Y',function(){
					const y = di.get('Y');
					const y2 = di.get('Y2');
					expect(y2).not.eql(y);
				});
				
			});
			
		});
		
		describe('inheritPrototype + decorator',function(){
			
			
			describe('inheritPrototype false (default) + parent decorator true',function(){
				
				it('should not be same configuration as Z',function(){
					const z = di.get('Z').getParams();
					const z2 = di.get('Z2').getParams();
					expect(z2).not.eql(z);
				});
				
			});
			
			describe('inheritPrototype true + parent decorator true',function(){
				
				it('should be same configuration as Z',function(){
					
					const z = di.get('Z').getParams();
					const z3 = di.get('Z3').getParams();
					expect(z3).eql(z);
					
				});
				
				
			});
			
			describe('inheritPrototype true + parent decorator false (default)',function(){
				
				it('should not be same configuration as One',function(){
					
					const one = di.get('One').getParams();
					const two = di.get('Two').getParams();
					expect(two).not.eql(one);
					
				});
				
				
			});
			
		});
		
		describe('inheritMixins',function(){
			
			it('should be same configuration as Three',function(){
				
				const three = di.get('Three').getParams();
				const four = di.get('Four').getParams();
				expect(four).eql(three);
				
			});
			
		});
		

		describe('asyncResolve',function(){
			
			
		});
		
		describe('asyncCallsSeries',function(){
			
			
		});
		
		
		
	});

	describe('autoloadDirs',function(){
	
	});
	
});
