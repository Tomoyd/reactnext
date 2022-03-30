const { merge } = require('webpack-merge');
const webpackBase = require('./webpack.base');

/**
 * @type {import("webpack").Configuration}
 */
const clientConfig = {
	mode: 'production',
	entry: './client/index.js',
};

module.exports = merge(webpackBase, clientConfig);
