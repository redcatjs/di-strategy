import {
	expect,
	should,
	assert,
	
} from 'chai'

import sinon from 'sinon'

import {
	makeContainer
} from '../src/di'

class Server{

}

const di = makeContainer({
	rules: {
		'Server': {
			classDef: Server
		}
	}
});

describe('simple sync di call',function(){
	
	it('should return an instance of server',function(){
		const instance = di.get('Server');
		expect(instance).to.be.an.instanceof(Server);
		
	});
	
});
