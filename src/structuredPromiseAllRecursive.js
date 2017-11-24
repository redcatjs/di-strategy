import Var from './var'

function structuredPromiseAllRecursive(structure, value) {

	
	if (value instanceof Promise) {
		return value
	}
	
	if(!(typeof structure == 'object' && structure !== null && !(structure instanceof Var))){
		return Promise.resolve(value);
	}

	if (value instanceof Array) {
		return Promise.all(value.map((val, key)=>{
			return structuredPromiseAllRecursive(structure[key], val)
		}))
	}

	if (typeof value === 'object' && value !== null) {
		return resolveObject(structure, value)
	}

	return Promise.resolve(value)
}

function resolveObject(structure, object) {
	const promises = Object.keys(object).map(key => {
		
		return structuredPromiseAllRecursive(structure[key], object[key]).then(value => ({ key, value }));
		
	});

	return Promise.all(promises).then(results => {
		return results.reduce((obj, pair) => {
			obj[pair.key] = pair.value;
			return obj;
		}, {});
	});
}

export default structuredPromiseAllRecursive;
