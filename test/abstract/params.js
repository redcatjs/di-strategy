export default ({di, expect})=>{
	return function(){
		
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

		
		di.addRules({
			'A': {
				classDef: A,
				params: [ di.value(1), di.value(2), di.value(3) ],
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
			'E':{
				classDef: E,
				params: [di.factory(()=>'A'),di.factory(()=>new B())]
			},
		});
		
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
				const instance = di.get('E');
				const [ a, b ] = instance.getParams();
				expect(a).equal('A');
				expect(b).instanceof(B);
			});
		});
		
		describe('factory from manual call',function(){
			it('sould return values from factories from call\'s params',function(){
				const instance = di.get('E', [di.factory(()=>new A()),di.factory(()=>'B')]);
				const [ a, b ] = instance.getParams();
				expect(a).instanceof(A);
				expect(b).equal('B');
			});
		});
	
	};
	
}
