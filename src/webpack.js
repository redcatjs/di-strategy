import Container from './container'
import makeContainerApi from './makeContainerApi'

import WebpackRequire from './webpackRequire'

export default makeWebpackContainer;

export function makeWebpackContainer(config){
	const container = new WebpackContainer(config);
	return makeContainerApi(container);
}

export class WebpackContainer extends Container{
	
	depExists(requirePath){
		return !!this.requires[requirePath];
	}
	depRequire(requirePath){
		return this.requires[requirePath];
	}
	
	require(dep){
		return new WebpackRequire(dep, this.requires);
	}
	
}
