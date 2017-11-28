export default function mapSerie(funcs, callback){
	return funcs.reduce(
		(promise, func) =>
		promise.then(result => {
			let promise;
			func = callback(func);
			if(!(promise instanceof Promise)){
				promise = Promise.resolve(promise);
			}
			return promise.then(Array.prototype.concat.bind(result))
		}),
		Promise.resolve([])
	);
}
