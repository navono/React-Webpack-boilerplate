const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
  devtool: "cheap-module-source-map",

  // entry: ["./index"],
  // 上述的entry，输出的bundle名称为`main`。
  // 如果要指定输出的名称，可以使用以下方法
  entry: {
    name: ["./components/index"],
  },

  output: {
    publicPath: "../dist/",
    filename: "[name].bundle.js",
    libraryTarget: "amd",
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

    // 将 CSS 文件输出到指定的文件
    // new ExtractTextPlugin('style.css'),
  ],
});
