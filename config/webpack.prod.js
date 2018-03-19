const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
  devtool: "cheap-module-source-map",

  entry: ["./index"],

  output: {
    path: path.join(__dirname, "../dist"),
    publicPath: "../dist/",
  },

  plugins: [
    new CleanWebpackPlugin(["dist"], {
      root: path.resolve(__dirname, "../"),
    }),

    // https://webpack.github.io/docs/list-of-plugins.html#occurrenceorderplugin
    // https://github.com/webpack/webpack/issues/864
    new webpack.optimize.OccurrenceOrderPlugin(),

    // NODE_ENV should be production so that modules do not perform certain development checks
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),

    // new ExtractTextPlugin('style.css'),
  ],
});
