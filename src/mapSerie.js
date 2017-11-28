export default function mapSerie(arr, callback){
	return arr.reduce(
		(promise, item) =>
			promise.then(result => {
				let promise = callback(item);
				if(!(promise instanceof Promise)){
					promise = Promise.resolve(promise);
				}
				return promise.then(Array.prototype.concat.bind(result))
			}),
		Promise.resolve([])
	);
}
