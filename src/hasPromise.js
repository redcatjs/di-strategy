export default function hasPromise(mixed, stack=new Set()){
	if(stack.has(mixed)){
		return;
	}
	stack.add(mixed);
	if(mixed instanceof Promise){
		return true;
	}
	if(typeof mixed == 'object' && mixed !== null){
		mixed = Object.values(mixed);
	}
	if(mixed instanceof Array){
		return mixed.some(v=>hasPromise(v, stack));
	}
};
