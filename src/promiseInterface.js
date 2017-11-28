export default (promiseInterfaces = [ Promise ])=>{
	return class PromiseInterface {
		static [Symbol.hasInstance](instance) {
			return promiseInterfaces.some( promiseInterface => instance instanceof promiseInterface);
		}
	}
}
