const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const environment = process.env.NODE_ENV;

const config = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js',
  },
  mode: environment || "development",
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          rootMode: "upward",
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // Must be set to true if using source-maps in production
        terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        },
      }),
    ],
  },
};

module.exports = config;
