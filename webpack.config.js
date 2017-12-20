const path = require('path');

module.exports = {
	entry: './index.tsx',
	output: {
		filename: 'bundle.js'
	},
	devtool: "source-map",
	resolve: {
		extensions: ['.tsx', '.js']
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [{
					loader: 'babel-loader',
					options: { presets: ['es2015', 'stage-2', 'react'] }
				}, {
					loader:'ts-loader'
				}],
				exclude: /node_modules/
			}
		]
	}
};
