import Require from './require'
export default class NodeRequire extends Require{
	constructor(dep){
		super();
		this.dep = dep;
	}
	require(){
		return require(this.dep);
	}
}
