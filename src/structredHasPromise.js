import Var from './var'

export default function structredHasPromise(structure, mixed){
	
	if(mixed instanceof Promise){
		return true
	}
	if(typeof structure == 'object' && structure !== null && !(structure instanceof Var)){
		return Object.keys(structure).some(key=>{
			return structredHasPromise(structure[key], mixed[key])
		})
	}
	
}
