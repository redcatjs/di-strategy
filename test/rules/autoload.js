import path from 'path'

export default ({di, expect})=>{
	
	return function(){
		
		//di.setAppRoot('app');
		
		di.addRule('app/A',{
			autoload: true,
			path: path.resolve(__dirname, '../autoload/A'),
		});
		
		it('should return an instance of A',function(){
			const instance = di.get('app/A');
			expect(instance).instanceof( require('../autoload/A').default );
		});
		
	};
	
}
