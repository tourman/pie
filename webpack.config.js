var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    path.join(__dirname, '/js/index.js')
  ],
  output: {
    path: path.join(__dirname, '/js/'),
    filename: 'bundle.js',
    publicPath: '/js/'
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      }
    ]
  },
  resolve: {
    alias: {
      factories: path.join(__dirname, '/js/factories/'),
    },
  },
  devServer: {
    hot: true,
    inline: true,
    contentBase: '.'
  }
}