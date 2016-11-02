var webpack = require('webpack');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:8080',
		'webpack/hot/only-dev-server',
		'./app/bootstrap.jsx' ],
	output: {
		filename: 'build/bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loader: 'style!css?sourceMap!sass?sourceMap'
			}, {
				test: /\.jsx?$/,
				loaders: [ 'babel' ],
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	devServer: {
		historyApiFallback: true
	}
};
