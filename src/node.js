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
		} = config;
		
		let rootPath = this.rootPath;
		if(!rootPath){
			rootPath = PATH.dirname(require.main.filename);
		}
		this.rootPath = rootPath;
		
		this.runAutoloader();
	}
	
	depExists(requirePath){
		try{
			require.resolve(requirePath);
			return true;
		}
		catch(e){
			return false;
		}
	}
	depRequire(requirePath){
		return require(requirePath);
	}
	
	loadDirs(dirs){
		dirs.forEach(dir => {
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
		
		let rootPathAbsolute;
		let rootPathRelative;
		if(this.isAppRoot){
			path = this.replaceAppRootByAbsolute(path);
			rootPathAbsolute = this.rootPath;
			rootPathRelative = this.appRoot;
		}
		else{
			rootPathRelative = path;
			rootPathAbsolute = PATH.dirname( require.resolve(path) );
			path = rootPathAbsolute;
		}
		
		const fileList = this.walkSync(path, recursive, [], rootPathAbsolute, rootPathRelative, this.loadExtensionRegex);
		
		fileList.forEach(filename => {
			const key = filename.substr(0, filename.lastIndexOf('.') || filename.length);
			filename = this.resolveAppRoot(filename);
			this.requires[key] = require( filename );
		});
		
	}
	walkSync(dir, recursive, filelist = [], rootPathAbsolute, rootPathRelative, exts) {
		if( dir[dir.length-1] != '/'){
			dir += '/';
		}
		const files = FS.readdirSync(dir);
		files.forEach((file)=>{
			if(FS.statSync(dir + file).isDirectory()){
				if(recursive){
					filelist = this.walkSync(dir + file, recursive, filelist, rootPathAbsolute, rootPathRelative, exts);
				}
			}
			else{
				if(exts.test(file)){
					filelist.push( rootPathRelative+(dir+file).substr(rootPathAbsolute.length) );
				}
			}
		});
		return filelist;
	}
	
}
