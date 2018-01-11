const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});
const extractSassDev = new ExtractTextPlugin({
    filename: "bundle.css",
    disable: process.env.NODE_ENV === "production"
});

module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve('dist'),
      filename: 'index_bundle.js'
    },
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
        { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
        {test: /\.scss$/, loader: ExtractTextPlugin.extract('css-loader!sass-loader') }
        //{test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] }
      ]
    },
    plugins: [HtmlWebpackPluginConfig, extractSassDev],
    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    },
}
