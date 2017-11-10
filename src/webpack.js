import Container, { makeContainerApi } from './container'

export default makeWebpackContainer;

export function makeWebpackContainer(config){
	const container = new WebpackContainer(config);
	return makeContainerApi(container);
}

export class WebpackContainer extends Container{

	constructor(config){
		super(config);
		this.runAutoloader();
	}
	
	depExists(requirePath){
		return !!this.requires[requirePath];
	}
	depRequire(requirePath){
		return this.requires[requirePath];
	}
	
	loadDirs(dirs){
		Object.keys(dirs).forEach(dirKey=>{
			const context = dirs[dirKey];
			context.keys().forEach((filename)=>{
				let key = filename;
				if(key.substr(0,2)=='./'){
					key = key.substr(2);
				}
				key = dirKey+'/'+key.substr(0, key.lastIndexOf('.') || key.length);
				this.requires[key] = context(filename);
			});
		});
	}
	
}
