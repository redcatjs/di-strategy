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
		
		
		di.addRules({
			'A':{
				classDef: A,
			},
			'B':{
				classDef: B,
			},
		});
		
		it('should return an instance of B',function(){
			const instance = di.get('A');
			expect(instance.B).instanceof( B );
		});
		
	};
	
}
