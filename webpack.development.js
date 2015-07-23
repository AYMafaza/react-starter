var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
  devtool: 'eval',
  entry: [
    path.resolve(ROOT_PATH, 'client/app.js')
  ],
  output: {
    path: path.resolve(ROOT_PATH, 'client/dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    preLoaders: [
      {
        test: /\.js?$/,
        loader: 'eslint-loader',
        include: path.resolve(ROOT_PATH),
        exclude: path.resolve(ROOT_PATH, 'client/dist')
      }
    ],
    loaders: [
      { test: /\.js?$/, loaders: ['babel', 'flowcheck'], exclude: /node_modules/ }
    ]
  }
};
