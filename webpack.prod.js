const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge').merge;

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "index.[contentHash].js",
    path: path.join(__dirname, "dist")
  }
});