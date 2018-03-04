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
  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.jsx'
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        use: {
          loader: 'awesome-typescript-loader'
        }
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  devServer: {
    hot: true,
    inline: true,
    contentBase: '.'
  }
}