function promiseAllRecursive(value) {

	if (value instanceof Promise) {
		return value;
	}

	if (value instanceof Array) {
		return Promise.all(value.map(promiseAllRecursive));
	}

	if (typeof value === 'object' && value !== null) {
		return resolveObject(value);
	}

	return Promise.resolve(value);
	//return value;
}

function resolveObject(object) {
	const promises = Object.keys(object).map(key => {
		
		return promiseAllRecursive(object[key]).then(value => ({ key, value }));
		//const mixed = promiseAllRecursive(object[key]);
		//if(!(mixed instanceof Promise)){
			//return new Promise((resolve)=>{
				//resolve({ key, value: mixed });
			//});
		//}
		//else{
			//return mixed.then(value => ({ key, value }));
		//}
		
	});

	return Promise.all(promises).then(results => {
		return results.reduce((obj, pair) => {
			obj[pair.key] = pair.value;
			return obj;
		}, {});
	});
}

export default promiseAllRecursive;
