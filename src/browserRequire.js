import Require from './require'
export default class BrowserRequire extends Require{
	constructor(dep, requires = []){
		super();
		this.dep = dep;
		this.requires = requires;
	}
	require(){
		return this.requires[this.dep];
	}
}
