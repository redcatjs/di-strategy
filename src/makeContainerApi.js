export default function makeContainerApi(container){
	const di = (...args)=>{
		return container.inject(...args);
	};
	di.container = container;
	di.get = container.get.bind(container);
	di.exists = container.exists.bind(container);
	di.factory = container.factory.bind(container);
	di.value = container.value.bind(container);
	di.interface = container.interface.bind(container);
	return di;
}
