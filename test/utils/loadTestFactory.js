import { expect } from 'chai'
import sinon from 'sinon'

export default function loadTestFactory(container, requireCaller){
	
	return function loadTest(test){
		
		const di = container();
		const factory = requireCaller(test);
		
		const fn = factory({
			di,
			expect,
			sinon,
		});
		
		
		describe( test, fn );
		
	};
};
