const path = require('path')
const webpack = require('webpack')
//const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.config.base')

module.exports = Object.assign({
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      __DEV__: true,
      'process.env': { NODE_ENV: '"development"' }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // new HtmlWebpackPlugin({
    //   template: 'templates/index.html',
    //   filename: 'index.html'
    // })
  ]
}, baseConfig)