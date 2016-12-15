var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	entry: './fe/js/index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'js/bundle.js',
		publicPath: '/'
	},
	plugins: process.env.NODE_ENV == 'production' ? [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new ExtractTextPlugin('css/[name].[chunkhash].css', {allChunks:true}),
		new HtmlWebpackPlugin({
		     template:'fe/index.html',
		     minify:{removeComments: true, collapseWhitespace: true},
		     inject:true		//注入资源到body
		   })
		]
		: [
			new ExtractTextPlugin('css/[name].[chunkhash].css', {allChunks:true}),
			new HtmlWebpackPlugin({
			     template:'fe/index.html',
			     inject:true
			   })
		],
	module: {
		loaders: [{
		      test: /\.js?$/,
		      loaders: ['babel'],
		      exclude: /node_modules/
		    },{
		      test: /\.css$/,
		      loader: ExtractTextPlugin.extract('css?modules'),
		    },{
		      test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
		      loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]',
		      exclude: /node_modules/
		    }
		]
	}

}