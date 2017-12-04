// based on require-webpack-compat

import path from 'path'
import fs from 'fs'

function getFolderContents(folder, recursive) {

	return fs.readdirSync(folder).reduce(function(list, file) {

		const name = path.resolve(folder, file);
		const isDir = fs.statSync(name).isDirectory();

		return list.concat((isDir && recursive) ? getFolderContents(name, recursive) : [name]);
	}, []);
};

export default function(folder, recursive, pattern, mod = module.parent) {
	const parentDir = path.dirname(mod.filename);
	const contextDir = path.join(parentDir, folder);
	const contextDirLen = contextDir.length+1;
	const normalizedFolder = path.resolve(parentDir, folder);
	const folderContents = getFolderContents(normalizedFolder, recursive)
		.filter(item=>{
			return pattern.test(item);
		})
		.map(item=>{
			return './'+item.substr(contextDirLen);
		})
	;

	const keys = function() {
		return folderContents;
	};

	const returnContext = (item)=>{
		return require(path.resolve(normalizedFolder, item));
	};

	returnContext.keys = keys;

	return returnContext;
};
