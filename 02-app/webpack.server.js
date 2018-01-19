var path = require("path");
var nodeExternals = require('webpack-node-externals');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var webpack = require("webpack");

function createConfig(isDebug){
	const plugins = [];

	if(!isDebug){
		plugins.push(new webpack.optimize.UglifyJsPlugin()); 
	}

	if(isDebug === "BundleAnalyzer"){
		plugins.push(new BundleAnalyzerPlugin());
	}


	// ------------
	// WEBPACK CONFIG
	return {
		target: "node",
		devtool: "source-map",
		entry: "./src/server/server.js",
		output: {
			path: path.join(__dirname, "build"),
			filename: "server.js"
		},
		resolve: {
			alias:{
				shared: path.join(__dirname, "src", "shared")
			}
		},
		module: {
			rules:[
				{test: /\.js$/, use: "babel-loader", exclude: /node_modules/},
				{test: /\.js$/, use: "eslint-loader", exclude: /node_modules/}
			]
		},
		externals:[nodeExternals()],
		plugins: plugins
	};
}

module.exports = createConfig("BundleAnalyzer");