export default ({di, expect})=>{
	
	return function(){		
		
		di.config('rulesDefault',{
			'decorator': true,
		});
		
		
		class B{}
		
		function A(B){
			this.B = B;
		}
		di('A',['B'])(A);
		
		
		@di('C')
		class C{
			@di(['B'])
			method(b){
				this.B = b;
			}
		}
		
		di.addRules({
			'A':{
				classDef: A,
			},
			'B':{
				classDef: B,
			},
			'C':{
				calls:[
					[ 'method' ],
				],
			},
		});
		
		it('should return an instance of B',function(){
			const instance = di.get('A');
			expect(instance.B).instanceof( B );
		});
		
		
		
		
		
		it('should return an instance of B',function(){
			const instance = di.get('C');
			//instance.method();
			expect(instance.B).instanceof( B );
		});
		
	};
	
}
