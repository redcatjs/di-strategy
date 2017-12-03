import { expect } from 'chai'
import sinon from 'sinon'
import container from '../../src/node'
export default function loadTest(test){
	const di = container();
	const factory = require('../abstract/'+test).default;
	const fn = factory({
		di,
		expect,
		sinon,
	});
	describe( test, fn );
}
