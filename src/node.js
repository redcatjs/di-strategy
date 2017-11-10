import PATH from 'path'
import FS from 'fs'

import Container from './container'
import makeContainerApi from './makeContainerApi'

export default makeContainer;

export function makeContainer(config){
	const container = new NodeContainer(config);
	return makeContainerApi(container);
}


export class NodeContainer extends Container {

	constructor(config){
		super(config);
		
		let {
			autoloadDirsRecursive = true,
			rootPath = null,
		} = config;
		
		if(!rootPath){
			 rootPath = PATH.dirname(require.main.filename);
		}
		if( rootPath[rootPath.length-1] != '/'){
			rootPath += '/';
		}
		this.rootPath = rootPath;
		
		this.runAutoloader();
	}
	
	depExists(requirePath){
		return FS.existsSync(requirePath);
	}
	depRequire(requirePath){
		return require(requirePath);
	}
	
	loadDirs(dirs){
		dirs.forEach(dir=>{
			let recursive = this.autoloadDirsRecursive;
			let path;
			if(typeof dir == 'object'){
				path = dir.path;
				if(typeof dir.recursive !== 'undefined'){
					recursive = dir.recursive;
				}
			}
			else{
				path = dir;
			}
			this.nodeRequire(path, recursive);
		});
	}
	
	nodeRequire(path, recursive){
		const fileList = this.walkSync(this.rootPath+path, recursive, [], this.rootPath);
		fileList.forEach(filename=>{
			if(this.loadExtensionRegex.test(filename)){
				const key = filename.substr(0, filename.lastIndexOf('.') || filename.length);
				this.requires[key] = require(this.rootPath+filename);
			}
		});
	}
	walkSync(dir, recursive, filelist = [], root) {
		if( dir[dir.length-1] != '/'){
			dir += '/';
		}
		if(!root){
			root = dir;
		}
		const files = FS.readdirSync(dir);
		files.forEach((file)=>{
			if (FS.statSync(dir + file).isDirectory()) {
				if(recursive){
					filelist = this.walkSync(dir + file + '/', recursive, filelist, root);
				}
			}
			else {
				filelist.push( (dir+file).substr(root.length) );
			}
		});
		return filelist;
	}
	
}
