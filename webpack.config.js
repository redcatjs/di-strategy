const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry:{
		'webpack':['./src/webpack.js'],
		'test/browser.dist':['./test/browser.js'],
	},
	output: {
		filename: '[name].js',
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
