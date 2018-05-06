var path = require('path');
var webpack = require('webpack');
var zipObject = require('lodash/zipObject');

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
    alias: (function() {
      var list = [
        'stores',
        'actions',
        'factories',
        'dispatcher',
        'models',
        'states',
        'handlers',
        'views',
        'utils',
      ];
      var pathList = list.map(function(item) {
        return path.join(__dirname, '/js/' + item);
      });
      var aliasObj = zipObject(list, pathList);
      return aliasObj;
    })(),
  },
  devServer: {
    hot: true,
    inline: true,
    contentBase: '.'
  }
}