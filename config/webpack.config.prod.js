const webpack = require('webpack')
const baseConfig = require('./webpack.config.base')

module.exports = Object.assign({
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: false,
      'process.env': { NODE_ENV: '"production"' }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: true,
      acorn: true
    })
  ]
}, baseConfig)