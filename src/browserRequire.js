import Require from './require'
export default class BrowserRequire extends Require{
	constructor(dep, requires = []){
		super();
		this.dep = dep;
	}
	require(){
		return requires[this.dep];
	}
}
