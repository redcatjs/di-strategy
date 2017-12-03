import { expect } from 'chai'
import sinon from 'sinon'

export default function loadTestFactory(type){
	let containerType;
	switch(type){
		default:
		case 'node':
			containerType = 'node';
		break;
		case 'webpack':
			containerType = 'webpack';
		break;
	}
	
	const container = require('../../src/'+containerType).default;
	
	return function loadTest(test){
		
		const di = container();
		const factory = require('../'+type+'/'+test).default;
		const fn = factory({
			di,
			expect,
			sinon,
		});
		describe( test, fn );
	};
};
