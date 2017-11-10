export default class Factory {
	constructor(callback){
		this.callback = callback;
	}
	callback(args, shareInstances){
		return this.callback(args, shareInstances);
	}
}
