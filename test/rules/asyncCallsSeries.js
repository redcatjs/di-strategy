export default ({di, expect})=>{
	
	return function(){
		
		class A{
			setB(d){
				this.b = ++d.i;
			}
			setC(d){
				this.c = ++d.i;
			}
		}
		
		async function B(d){
			return await new Promise((resolve)=>{
				setTimeout(()=>{
					resolve(d)
				}, 20);
			});
		}
		async function C(d){
			return await new Promise((resolve)=>{
				setTimeout(()=>{
					resolve(d);
				}, 10);
			});
		}
		
		function D(){
			this.i = 0;
		}
		
		di.addRules({
			'A': {
				classDef: A,
				calls: [
					['setB', ['B'] ],
					['setC', ['C'] ],
				],
				sharedInTree: ['D'],
				asyncCallsSerie: false, //default
			},
			'A2': {
				instanceOf: 'A',
				asyncCallsSerie: true,
			},
			
			'B': {
				classDef: B,
				params: ['D'],
				asyncResolve: true,
			},
			'C': {
				classDef: C,
				params: ['D'],
				asyncResolve: true,
			},
			'D':{
				classDef: D,
			},
			
			
		});
		
		describe('run async calls in parallel (default)',function(){
			
			it('a.c should be equal to 1',async function(){
				const a = await di.get('A');
				return expect(a.b).equal(2);
			});
			
			it('a.c should be equal to 2',async function(){
				const a = await di.get('A');
				return expect(a.c).equal(1);
			});
			
		});
		
		describe('run async calls in serie',function(){
			
			it('a.c should be equal to 1',async function(){
				const a = await di.get('A2');
				return expect(a.b).equal(1);
			});
			
			it('a.c should be equal to 2',async function(){
				const a = await di.get('A2');
				return expect(a.c).equal(2);
			});
			
		});
		
	};
	
}
