
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const path = require('path');

module.exports = merge(common, {
  mode: "development",
  devtool: false,
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[contenthash][ext][query]',
  }
});