export default ({di, expect})=>{
	
	return function(){
		
		function A(b, c){
			this.b = b;
			this.c = c;
		}
		
		async function B(){
			return 'b';
		}
		async function C(){
			return 'c';
		}
		
		di.addRules({
			'A': {
				classDef: A,
				params: ['B','C'],
			},
			'B': {
				classDef: B,
				asyncResolve: false, //default
			},
			'C': {
				classDef: C,
				asyncResolve: true,
			},
		});
		
		describe('simple async',async function(){
			
			const waitA = di.get('A');
			
			it('waitA sould be promise',function(){
				expect(waitA).instanceof(Promise);
			});
			
			const a = await waitA;
			
			it('a.b sould be promise',function(){
				expect(a.b).instanceof(Promise);
			});
			it('a.c should be resolved value of promise',function(){
				expect(a.c).not.instanceof(Promise);
				expect(a.c).equal('c');
			});
			
		});
		
		
	};
	
}
