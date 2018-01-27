const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const commonConfig = require("./webpack.config.common");

const PORT = process.env.PORT || 3000;

module.exports = merge(commonConfig, {
  // dev only
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    compress: true,
    hot: true,
    port: PORT,
    open: true,
    inline: true,
    historyApiFallback: true
  },

  entry: [
    "react-hot-loader/patch",
    `webpack-dev-server/client?http://localhost:${PORT}/`,
    // dev-server: 遇到错误会重新刷新浏览器
    // only-dev-server: 遇到错误不会重新刷新浏览器，React App推荐使用。因为不会重置状态
    "webpack/hot/only-dev-server",
    "./index"
  ],

  plugins: [
    new webpack.NamedModulesPlugin(),

    // dev only
    new webpack.HotModuleReplacementPlugin(),

    new webpack.NoEmitOnErrorsPlugin(),

    // NODE_ENV should be production so that modules do not perform certain development checks
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    }),

    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ]
});
