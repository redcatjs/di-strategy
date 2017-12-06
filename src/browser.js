import Container from './container'
import makeContainerApi from './makeContainerApi'

import BrowserRequire from './browserRequire'


function makeBrowserContainer(config){
	const container = new BrowserContainer(config);
	return makeContainerApi(container);
}

class BrowserContainer extends Container{
	
	depExists(requirePath){
		return !!this.requires[requirePath];
	}
	depRequire(requirePath){
		return this.requires[requirePath];
	}
	
	require(dep){
		return new BrowserRequire(dep, this.requires);
	}
	
}

export default makeBrowserContainer;
