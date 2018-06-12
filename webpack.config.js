"use strict";

const debug = process.env.NODE_ENV !== "production";

const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// context: __dirname + '/portfolioDev',

  entry: {
  	app: "./ITVDN/src/index.js"
		// app: "./myDone/src/index.js"
    // main: "./main.js"
		// base: "./portfolioDev/scss/base.scss"
  },

  output: {
		path: path.resolve( __dirname + "/ITVDN/dist" ),
    filename: "bundle.js",
		publicPath: '/',
		// chunkFilename: '[id].js',
		// library:  "app"
	},

	devtool: debug ? 'inline-source-map' : null,

  devServer: {
    inline: true,
    // contentBase: __dirname + "/crashCourse",
    port: 5000,
		open: true,
		// openPage: "",
		historyApiFallback: true,
		hot: true,
		// host:'0.0.0.0'
  },

	module: {
		rules: [
			{
				test: /\.html$/,
				loader: "raw-loader"
			},
			{
				test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
				use: [
					{
						loader: 'file-loader',
						options: {}
					}
				]
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['react', 'latest', 'es2015', 'stage-0'],
					}
				}
			},
			{
				test: /\.jade$/,
				use: {
					loader: 'pug-loader'
				}
			},
			// {
			// 	test: /\.css$/,
			// 	use: [ 'style-loader', 'css-loader' ]
			// },
			{
				test: /\.scss$/,
				use: debug ?
						//development
						[{
							loader: "style-loader"
						}, {
							loader: "css-loader",
							options: {
								sourceMap: true
							}
						}, {
							loader: "sass-loader",
							options: {
								sourceMap: true
							}
						}] :
						//production
						ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: [ { loader: 'css-loader'},{ loader: 'sass-loader?resolve url'} ]
				})
			}

		]
	},

	plugins: debug ? [
		//development plugins


		// new webpack.optimize.CommonsChunkPlugin({
		// 	name: 'common'
		// })

		new webpack.HotModuleReplacementPlugin(),

		new HtmlWebpackPlugin({
			template: './ITVDN/dist/index.html'
		})

	] : [
		//production plugins
		new ExtractTextPlugin({
			filename: '[name].css',
			allChunks: true,
			disable: true
		}),

		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: fale})

	]

};