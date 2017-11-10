import Container, {makeContainerApi} from './container'
import {makeContainer, NodeContainer} from './node'
import {makeWebpackContainer, WebpackContainer} from './webpack'
import Factory from './factory'

export{
	Container, makeContainerApi,
	makeContainer, NodeContainer,
	makeWebpackContainer, WebpackContainer,
	Factory,
}

export default makeContainer;
