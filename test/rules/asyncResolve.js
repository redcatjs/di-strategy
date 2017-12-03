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
		
		describe('simple async',function(){
			
			it('waitA sould be promise',async function(){
				const waitA = di.get('A');
				return expect(waitA).instanceof(Promise);
			});
			
			it('a.b sould be promise',async function(){
				const a = await di.get('A');
				return expect(a.b).instanceof(Promise);
			});
			it('a.c should be resolved value of promise',async function(){
				const a = await di.get('A');
				return expect(a.c).equal('c');
			});
			
		});
		
		
	};
	
}
