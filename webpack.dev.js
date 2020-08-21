/**
 * 
 * Development webpack configuration
 * 
 */

const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge').merge;

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
    stats: "errors-only",
    hot: true,
    compress: true,
    port: 3000,
    open: true,
    overlay: true
  }
});