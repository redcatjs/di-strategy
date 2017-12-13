const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry:{
		'browser':['./src/browser.js'],
		'test/browser.dist':['./test/browser.js'],
	},
	output: {
		filename: '[name].js',
		library: "di-strategy",
		libraryTarget: "umd"
	},
    module: {
		rules : [
			{
				test: /\.(js)?$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
		],
    },
    devtool: 'source-map',
};
