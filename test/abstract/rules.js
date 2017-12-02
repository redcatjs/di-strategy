import * as classes from './classes'

export default (di)=>({
	'A': {
		classDef: classes.A,
		params: [ di.value(1), di.value(2), di.value(3) ],
	},
	
	'akaOfA': {
		instanceOf: 'A'
	},
	'recursiveAkaOfA': {
		instanceOf: 'akaOfA'
	},
	
	
	'Shared': {
		classDef: classes.A,
		shared: true,
	},
	
	'NotShared': {
		classDef: classes.A,
	},
	
	'B': {
		classDef: classes.B,
	},
	
	'C': {
		classDef: classes.C,
		params: ['A','B'],
	},
	
	'D': {
		classDef: classes.D,
		params: ['C'],
	},
	
	'Singleton': {
		singleton: new classes.A(),
	},
	
	'SubstitutionsParentIndex': {
		classDef: classes.C,
		params: ['A','B'],
		substitutions: ['E','F'],
	},
	'SubstitutionsParentAssoc': {
		classDef: classes.C,
		params: ['A','B'],
		substitutions: {
			B:'F',
			A:'E',
		},
	},
	
	'SubstitutionsParentIndexWithValue': {
		classDef: classes.C,
		params: ['A','B'],
		substitutions: [di.value('E'),di.value('F')],
	},
	'SubstitutionsParentAssocWithValue': {
		classDef: classes.C,
		params: ['A','B'],
		substitutions: {
			B:di.value('F'),
			A:di.value('E'),
		},
	},
	
	'SubstitutionsParentAssocInSubkey': {
		classDef: classes.C,
		params: [{
			subkey: {
				A:'A',
				B:'B'
			},
		}],
		substitutions: {
			B:di.value('F'),
			A:di.value('E'),
		},
	},
	
	'E':{
		classDef: classes.E,
	},
	'F':{
		classDef: classes.F,
	},
	
	'G':{
		classDef: classes.G,
		params: [di.factory(()=>'A'),di.factory(()=>new classes.B())]
	},
	
	'H':{
		classDef: classes.H,
		sharedInTree: ['A'],
		params: [{a: 'A', i: 'I'}],
	},
	'I':{
		classDef: classes.I,
		params: [{a: 'A', j: 'J'}],
	},
	'J':{
		classDef: classes.J,
		params: ['A'],
	},
	'K':{
		classDef: classes.K,
		sharedInTree: ['A'],
		params: [{i: 'I'}],
	},
	'L':{
		classDef: classes.L,
		calls: [
			[ 'setParams', [ { foo: di.value('bar') } ] ]
		],
	},
	'M':{
		classDef: classes.M,
		calls: [
			[ 'setParams', [ { a: 'A' } ] ]
		],
	},
	
	'N':{
		shared: true,
		classDef: classes.N,
		params: [ { o: 'O' } ],
	},
	'O':{
		shared: true,
		classDef: classes.O,
		lazyCalls: [
			[ 'setParams', [ { n: 'N' } ] ]
		],
	},
	
	
	'P':{
		shared: true,
		classDef: classes.Q,
		params: [ { q: 'Q' } ],
	},
	'Q':{
		shared: true,
		classDef: classes.Q,
		calls: [
			[ 'setParams', [ { p: 'P' } ] ]
		],
	},
	
	
	'R':{
		shared: true,
		classDef: classes.R,
		params: [ { s: 'S' } ],
	},
	'S':{
		shared: true,
		classDef: classes.S,
		params: [ { t: 'T' } ],
	},
	'T':{
		shared: true,
		classDef: classes.T,
		calls: [
			[ 'setParams', [ { r : 'R' } ] ]
		],
	},
	
	'U':{
		shared: true,
		classDef: classes.U,
		params: [ { v: 'V' } ],
	},
	'V':{
		shared: true,
		classDef: classes.V,
		params: [ { w: 'W' } ],
	},
	'W':{
		shared: true,
		classDef: classes.W,
		calls: [
			[ 'setParams', [ { u : 'U' } ] ]
		],
	},
	
	'X':{
		classDef: classes.X,
		params: [di.value('x')],
	},
	'Y':{
		classDef: classes.Y,
		params: [di.value('y')],
	},
	'X2':{
		instanceOf: 'X',
		inheritInstanceOf: true,
	},
	'Y2':{
		instanceOf: 'Y',
		inheritInstanceOf: false,
	},
	
	'Z':{
		classDef: classes.Z,
		params: [di.value('z')],
		decorator: true, //needed for parent class by extended using inheritPrototype
	},
	'Z2':{
		classDef: classes.ZX,
		inheritPrototype: false,
	},
	'Z3':{
		classDef: classes.ZX,
		inheritPrototype: true,
	},
	
	'One':{
		classDef: classes.One,
		params: [di.value('one')],
		decorator: false,
	},
	'Two':{
		classDef: classes.Two,
		inheritPrototype: true,
	},
	
	'Three':{
		classDef: classes.Three,
		params: [di.value('three')],
	},
	'Four':{
		classDef: classes.Four,
		inheritMixins: [ 'Three' ],
	},
});
