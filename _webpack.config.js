"use strict";

const debug = process.env.NODE_ENV !== "production";

const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputPath = path.resolve(__dirname, './portfolioProd');

module.exports = {
	// context: __dirname + '/portfolioDev',

  entry: {
    main: "./portfolioDev/main.js",
		base: "./portfolioDev/scss/base.scss"
  },

  output: {
    path: outputPath,
    filename: "[name].js"
	},

	devtool: debug ? 'inline-source-map' : null,

  devServer: {
		contentBase: __dirname + "/portfolioProd",
		inline: true,
		// openPage: "",
		historyApiFallback: true,
		hot: true,
		// host:'0.0.0.0',
		open: true,
		port: 3000
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
		// }),

		new HtmlWebpackPlugin({
			template: path.join( __dirname, "/portfolioProd/index.html" ),
			filename: 'index.html',
			path: outputPath
		}),

		new webpack.HotModuleReplacementPlugin()

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