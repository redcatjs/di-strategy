import loadTestFactory from './utils/loadTestFactory'
import container from '../src/webpack'

const requires = {};

const loadTest = loadTestFactory(container,(name)=>{
	const path = name.split('/');
	const root = path.shift();
	switch(root){
		case 'rules':
			return require('./rules/'+path).default;
		break;
	}
});

describe('rules',function(){		
	
	
	loadTest('rules/classDef');
	loadTest('rules/instanceOf');
	loadTest('rules/shared');
	loadTest('rules/params');
	loadTest('rules/singleton');
	loadTest('rules/substitutions');
	loadTest('rules/sharedInTree');
	loadTest('rules/calls');
	loadTest('rules/lazyCalls');
	loadTest('rules/inheritInstanceOf');
	loadTest('rules/inheritPrototype-decorator');
	loadTest('rules/inheritMixins');
	loadTest('rules/asyncResolve');
	loadTest('rules/asyncCallsSeries');
	loadTest('rules/asyncCallsParamsSerie');

});


describe('autoloadDirs',function(){

});
