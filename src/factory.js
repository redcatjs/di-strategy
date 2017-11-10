import Var from './var'
export default class Factory extends Var {
	constructor(callback){
		super();
		this.callback = callback;
	}
	callback(args, shareInstances){
		return this.callback(args, shareInstances);
	}
}
