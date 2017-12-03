import loadTest from './utils/loadTest'

describe('di.get()',function(){
	
	describe('rules',function(){		
		
		
		loadTest('classDef');
		loadTest('instanceOf');
		loadTest('shared');
		loadTest('params');
		loadTest('singleton');
		loadTest('substitutions');
		loadTest('sharedInTree');
		loadTest('calls');
		loadTest('lazyCalls');
		loadTest('inheritInstanceOf');
		loadTest('inheritPrototype-decorator');
		loadTest('inheritMixins');
		loadTest('asyncResolve');
		loadTest('asyncCallsSeries');
		loadTest('asyncCallsParamsSerie');

	});

	describe('autoloadDirs',function(){
	
	});
	
});
