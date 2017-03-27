var HTMLWebpackPlugin = require('html-webpack-plugin');

HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle_index.js',
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
    ]
  },
  plugins: [
    HTMLWebpackPluginConfig,
  ]
};
