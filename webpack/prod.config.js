const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./base.config.js');

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
});

module.exports = merge(baseConfig, {
  output: {
    path: path.resolve('dist'),
    filename: '[name].bundle.[chunkhash].js',
  },
  module: {
    loaders: [
      {test: /\.scss$/, loader: ExtractTextPlugin.extract('css-loader!sass-loader') }
    ],
  },
  plugins:[
    extractSass,
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: true
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ]
});
