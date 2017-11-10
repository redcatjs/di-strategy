export default class SharedInstance{
	constructor(interfaceName, container){
		this.container = container;
		this.interfaceName = interfaceName;
	}
	get(shareInstances){
		if(!this.instance){
			this.instance = this.container.get(this.interfaceName, undefined, shareInstances);
		}
		return this.instance;
	}
}
