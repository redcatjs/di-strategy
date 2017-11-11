import Container from './container'
import makeContainerApi from './makeContainerApi'
import {makeContainer, NodeContainer} from './node'
import {makeWebpackContainer, WebpackContainer} from './webpack'
import Factory from './factory'
import Value from './value'
import Interface from './interface'
import Var from './var'
import ClassDef from './classDef'

export{
	Container,
	makeContainerApi,
	makeContainer, NodeContainer,
	makeWebpackContainer, WebpackContainer,
	Var,
	Factory,
	Value,
	Interface,
	ClassDef,
}

export default makeContainer;
