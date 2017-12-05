import PATH from 'path'
import FS from 'fs'

import Container from './container'
import makeContainerApi from './makeContainerApi'

import NodeRequire from './nodeRequire'
import nodeRequireContext from './nodeRequireContext'

export default makeContainer;

export function makeContainer(config){
	const container = new NodeContainer(config);
	return makeContainerApi(container);
}
makeContainer.requireContext = nodeRequireContext;

export class NodeContainer extends Container {
	
	
	depExists(requirePath){
		if(undefined !== this.requires[requirePath]){
			return true;
		}
		
		try{
			require.resolve(requirePath);
			return true;
		}
		catch(e){
			return false;
		}
	}
	depRequire(requirePath){
		if(undefined !== this.requires[requirePath]){
			return this.requires[requirePath];
		}
		return require(requirePath);
	}
	
	require(dep){
		return new NodeRequire(dep);
	}
	
}
