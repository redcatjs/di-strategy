import {
	expect,
	should,
	assert,
	
} from 'chai'

import sinon from 'sinon'

import {
	makeContainer
} from '../src/di'

describe('di.get()',function(){
	
	describe('rules',function(){
		
		class A{
			constructor(...params){
				this.params = params;
			}
			getParams(){
				return this.params;
			}
		}
		class B{
			constructor(...params){
				this.params = params;
			}
			getParams(){
				return this.params;
			}
		}
		class C{
			constructor(...params){
				this.params = params;
			}
			getParams(){
				return this.params;
			}
		}
		class D{
			constructor(...params){
				this.params = params;
			}
			getParams(){
				return this.params;
			}
		}
		class E{
			constructor(...params){
				this.params = params;
			}
			getParams(){
				return this.params;
			}
		}
		class F{
			constructor(...params){
				this.params = params;
			}
			getParams(){
				return this.params;
			}
		}
		class G{
			constructor(...params){
				this.params = params;
			}
			getParams(){
				return this.params;
			}
		}
		class H{
			constructor(...params){
				this.params = params;
			}
			getParams(){
				return this.params;
			}
		}
		class I{
			constructor(...params){
				this.params = params;
			}
			getParams(){
				return this.params;
			}
		}
		class J{
			constructor(...params){
				this.params = params;
			}
			getParams(){
				return this.params;
			}
		}
		class K{
			constructor(...params){
				this.params = params;
			}
			getParams(){
				return this.params;
			}
		}
		class L{
			constructor(...params){
				this.params = params;
			}
			getParams(){
				return this.params;
			}
			setParams(params){
				this.params = params;
			}
		}
		class M{
			constructor(...params){
				this.params = params;
			}
			getParams(){
				return this.params;
			}
			setParams(params){
				this.params = params;
			}
		}
		class N{
			constructor(...params){
				this.params = params;
			}
			getParams(){
				return this.params;
			}
		}
		class O{
			constructor(...params){
				this.params = params;
			}
			getParams(){
				return this.params;
			}
			setParams(params){
				this.params = params;
			}
		}
		
		class P{
			constructor(...params){
				this.params = params;
			}
			getParams(){
				return this.params;
			}
		}
		class Q{
			constructor(...params){
				this.params = params;
			}
			getParams(){
				return this.params;
			}
			setParams(params){
				this.params = params;
			}
		}
		
		class R{
			constructor(...params){
				this.params = params;
			}
			getParams(){
				return this.params;
			}
			setParams(params){
				this.params = params;
			}
		}
		class S{
			constructor(...params){
				this.params = params;
			}
			getParams(){
				return this.params;
			}
			setParams(params){
				this.params = params;
			}
		}
		class T{
			constructor(...params){
				this.params = params;
			}
			getParams(){
				return this.params;
			}
			setParams(params){
				this.params = params;
			}
		}
		
		class U{
			constructor(...params){
				this.params = params;
			}
			getParams(){
				return this.params;
			}
			setParams(params){
				this.params = params;
			}
		}
		class V{
			constructor(...params){
				this.params = params;
			}
			getParams(){
				return this.params;
			}
			setParams(params){
				this.params = params;
			}
		}
		class W{
			constructor(...params){
				this.params = params;
			}
			getParams(){
				return this.params;
			}
			setParams(params){
				this.params = params;
			}
		}
		class X{
			constructor(...params){
				this.params = params;
			}
			getParams(){
				return this.params;
			}
			setParams(params){
				this.params = params;
			}
		}
		class Y{
			constructor(...params){
				this.params = params;
			}
			getParams(){
				return this.params;
			}
			setParams(params){
				this.params = params;
			}
		}
		
		
		const di = makeContainer({
			rules: (di)=>({
				'A': {
					classDef: A,
					params: [ di.value(1), di.value(2), di.value(3) ],
				},
				
				'akaOfA': {
					instanceOf: 'A'
				},
				'recursiveAkaOfA': {
					instanceOf: 'akaOfA'
				},
				
				
				'Shared': {
					classDef: A,
					shared: true,
				},
				
				'NotShared': {
					classDef: A,
				},
				
				'B': {
					classDef: B,
				},
				
				'C': {
					classDef: C,
					params: ['A','B'],
				},
				
				'D': {
					classDef: D,
					params: ['C'],
				},
				
				'Singleton': {
					singleton: new A(),
				},
				
				'SubstitutionsParentIndex': {
					classDef: C,
					params: ['A','B'],
					substitutions: ['E','F'],
				},
				'SubstitutionsParentAssoc': {
					classDef: C,
					params: ['A','B'],
					substitutions: {
						B:'F',
						A:'E',
					},
				},
				
				'SubstitutionsParentIndexWithValue': {
					classDef: C,
					params: ['A','B'],
					substitutions: [di.value('E'),di.value('F')],
				},
				'SubstitutionsParentAssocWithValue': {
					classDef: C,
					params: ['A','B'],
					substitutions: {
						B:di.value('F'),
						A:di.value('E'),
					},
				},
				
				'SubstitutionsParentAssocInSubkey': {
					classDef: C,
					params: [{
						subkey: {
							A:'A',
							B:'B'
						},
					}],
					substitutions: {
						B:di.value('F'),
						A:di.value('E'),
					},
				},
				
				'E':{
					classDef: E,
				},
				'F':{
					classDef: F,
				},
				
				'G':{
					classDef: G,
					params: [di.factory(()=>'A'),di.factory(()=>new B())]
				},
				
				'H':{
					classDef: H,
					shareInstances: ['A'],
					params: [{a: 'A', i: 'I'}],
				},
				'I':{
					classDef: I,
					params: [{a: 'A', j: 'J'}],
				},
				'J':{
					classDef: J,
					params: ['A'],
				},
				'K':{
					classDef: K,
					shareInstances: ['A'],
					params: [{i: 'I'}],
				},
				'L':{
					classDef: L,
					calls: [
						[ 'setParams', [ { foo: di.value('bar') } ] ]
					],
				},
				'M':{
					classDef: M,
					calls: [
						[ 'setParams', [ { a: 'A' } ] ]
					],
				},
				
				'N':{
					shared: true,
					classDef: N,
					params: [ { o: 'O' } ],
				},
				'O':{
					shared: true,
					classDef: O,
					lazyCalls: [
						[ 'setParams', [ { n: 'N' } ] ]
					],
				},
				
				
				'P':{
					shared: true,
					classDef: Q,
					params: [ { q: 'Q' } ],
				},
				'Q':{
					shared: true,
					classDef: Q,
					calls: [
						[ 'setParams', [ { p: 'P' } ] ]
					],
				},
				
				
				'R':{
					shared: true,
					classDef: R,
					params: [ { s: 'S' } ],
				},
				'S':{
					shared: true,
					classDef: S,
					params: [ { t: 'T' } ],
				},
				'T':{
					shared: true,
					classDef: T,
					calls: [
						[ 'setParams', [ { r : 'R' } ] ]
					],
				},
				
				'U':{
					shared: true,
					classDef: U,
					params: [ { v: 'V' } ],
				},
				'V':{
					shared: true,
					classDef: V,
					params: [ { w: 'W' } ],
				},
				'W':{
					shared: true,
					classDef: W,
					calls: [
						[ 'setParams', [ { u : 'U' } ] ]
					],
				},
				
				'X':{
					classDef: X,
					params: [di.value('x')],
				},
				'Y':{
					classDef: Y,
					params: [di.value('y')],
				},
				'X2':{
					instanceOf: 'X',
					inherit: true,
				},
				'Y2':{
					instanceOf: 'Y',
					inherit: false,
				},
				
			}),
			
		});
		describe('classDef',function(){
			it('should return an instance of A',function(){
				const instance = di.get('A');
				expect(instance).instanceof(A);
			});
		});
		
		describe('instanceOf',function(){
		
			describe('instanceOf',function(){
				it('should return an instance of A',function(){
					const instance = di.get('akaOfA');
					expect(instance).instanceof(A);
				});
			});
			describe('instanceOf recursive',function(){
				it('should return an instance of A',function(){
					const instance = di.get('recursiveAkaOfA');
					expect(instance).instanceof(A);
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
					expect(a).instanceof(A);
					expect(b).instanceof(B);
				});
			});
			
			describe('interfaces from manual call',function(){
				it('sould return instances from call\'s params',function(){
					const instance = di.get('C', ['A','B']);
					const [ a, b ] = instance.getParams();
					expect(a).instanceof(A);
					expect(b).instanceof(B);
				});
			});
			
			describe('recursive interfaces from rule',function(){
				it('sould return sub instances from rule\'s params',function(){
					const instance = di.get('D');
					const [ c ] = instance.getParams();
					const [ a, b ] = c.getParams();
					expect(a).instanceof(A);
					expect(b).instanceof(B);
				});
			});
			
			describe('recursive interfaces from manual call',function(){
				it('sould return sub instances from call\'s params',function(){
					const instance = di.get('D', ['C']);
					const [ c ] = instance.getParams();
					const [ a, b ] = c.getParams();
					expect(a).instanceof(A);
					expect(b).instanceof(B);
				});
			});
			
			describe('factory from rule',function(){
				it('sould return values from factories from call\'s params',function(){
					const instance = di.get('G');
					const [ a, b ] = instance.getParams();
					expect(a).equal('A');
					expect(b).instanceof(B);
				});
			});
			
			describe('factory from manual call',function(){
				it('sould return values from factories from call\'s params',function(){
					const instance = di.get('G', [di.factory(()=>new A()),di.factory(()=>'B')]);
					const [ a, b ] = instance.getParams();
					expect(a).instanceof(A);
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
					expect(e).instanceof(E);
					expect(f).instanceof(F);
				});
				
			});
			
			describe('substitutions by associative keys',function(){
						
				it('should return substituted instances',function(){
					const instance = di.get('SubstitutionsParentAssoc');
					const [ e, f ] = instance.getParams();
					expect(e).instanceof(E);
					expect(f).instanceof(F);
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
		
		describe('shareInstances',function(){
			
			describe('shareInstances accross tree with direct child param dependency',function(){
						
				it('sharedInstances should be the sames accross the tree',function(){
					const instance = di.get('H');
					const [ {a, i} ] = instance.getParams();
					const [ {a: a2, j} ] = i.getParams();
					const [ a3 ] = j.getParams();
					expect(a).equal(a2).equal(a3);
				});
				
			});
			
			describe('shareInstances accross tree without direct child param dependency',function(){
						
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
					expect(a).instanceof(A);
				});
				
			});
			
		});
		
		describe('lazyCalls',function(){
			
			describe('cyclic dependency via lazy call: n -> o -> n',function(){
						
				it('should return params passed to method configured by the rule',function(){
					const instance = di.get('N');
					const [{ o }] = instance.getParams();
					expect(o).instanceof(O);
					const { n } = o.getParams();
					expect(n).equal(instance);
				});
				
			});
			
			describe('cyclic dependency via call (implicit, cylic detected and turned into lazyCall): p -> q -> p',function(){
						
				it('should return params passed to method configured by the rule',function(){
					const instance = di.get('P');
					const [{ q }] = instance.getParams();
					expect(q).instanceof(Q);
					const { p } = q.getParams();
					expect(p).equal(instance);
				});
				
			});
			
			
			describe('recursive cyclic dependency via lazy call: r -> s -> t',function(){
						
				it('should return params passed to method configured by the rule',function(){
					const instance = di.get('R');
					const [{ s }] = instance.getParams();
					expect(s).instanceof(S);
					const [{ t }] = s.getParams();
					expect(t).instanceof(T);
					const { r } = t.getParams();
					expect(r).equal(instance);
				});
				
			});
			
			describe('recursive cyclic dependency via call (implicit, cylic detected and turned into lazyCall): u -> v -> w',function(){
						
				it('should return params passed to method configured by the rule',function(){
					const instance = di.get('U');
					const [{ v }] = instance.getParams();
					expect(v).instanceof(V);
					const [{ w }] = v.getParams();
					expect(w).instanceof(W);
					const { u } = w.getParams();
					expect(u).equal(instance);
				});
				
			});
			
		});
		
		describe('inherit',function(){
			
			describe('inherit true (default)',function(){
				
				it('should be same configuration as X',function(){
					
					const x = di.get('X');
					const x2 = di.get('X2');
					expect(x2).eql(x);
					
				});
				
				
			});
			
			describe('inherit false',function(){
				
				it('should not be same configuration as Y',function(){
					const y = di.get('Y');
					const y2 = di.get('Y2');
					expect(y2).not.eql(y);
				});
				
			});
			
		});
		
		describe('extends',function(){
			
			
		});
		
		
		/*			
			async: resolveAsync,
			runCallsAsync: true,
		*/
		
	});
	
	describe('decorator',function(){
		
	});

	describe('autoloadDirs',function(){
	
	});
	
});
