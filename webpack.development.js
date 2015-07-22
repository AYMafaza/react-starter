var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    path.resolve(ROOT_PATH, 'client/app.js')
  ],
  output: {
    path: path.resolve(ROOT_PATH, 'client/dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
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
      { test: /\.js?$/, loaders: ['react-hot', 'babel', 'flowcheck'], exclude: /node_modules/ }
    ]
  }
};
