const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge').merge;
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "index.[contentHash].js",
    path: path.join(__dirname, "dist")
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
});