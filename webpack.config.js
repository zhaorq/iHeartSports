const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: ['./client/index.js'],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query:
        {
          presets:['react'],
        },
      },
    ],
  },
};
