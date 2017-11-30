import {
	expect,
	should,
	assert,
	
} from 'chai'

import sinon from 'sinon'

import {
	makeContainer
} from '../src/di'


import A from './abstract/A'

const di = makeContainer({
	rules: {
		'A': {
			classDef: A
		}
	}
});

describe('simple sync di call',function(){
	
	it('should return an instance of A',function(){
		const instance = di.get('A');
		expect(instance).to.be.an.instanceof(A);
		
	});
	
});
