const webpack = require('webpack');
const path = require('path');

module.exports = {
	context: path.resolve(__dirname, 'test'),
	entry:{
		'browser':['./browser.js'],
	},
	output: {
		path: path.resolve('test'),
		filename: '[name].dist.js',
	},
    module: {
		rules : [
			{
				test: /\.(js)?$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					babelrc: true,
				}
			},
		],
    },
    devtool: 'source-map',
};
