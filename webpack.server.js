const { merge } = require('webpack-merge');
const webpackBase = require('./webpack.base');
const path = require('path');
/**
 * @type {import("webpack").Configuration}
 */
const clientConfig = {
	mode: 'production',
	entry: './server/utils.js',
	output: {
		filename: 'util5.js',
		path: path.join(__dirname, 'server'),
	},
};

module.exports = merge(
	{
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-react', '@babel/preset-env'],
						},
					},
				},
			],
		},
	},
	clientConfig,
);
