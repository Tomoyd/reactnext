const { merge } = require('webpack-merge');
const webpackBase = require('./webpack.base');
const path = require('path');

/**
 * @type {import("webpack").Configuration}
 */
const clientConfig = {
	mode: 'development',
	entry: path.join(__dirname, './client/index.js'),
	output: {
		path: path.join(__dirname, 'ssr-dist'),
	},
};

module.exports = merge(webpackBase, clientConfig);
