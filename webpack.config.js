const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const PORT = 9999;

module.exports = {
  // devtool: "cheap-eval-source-map",
  devtool: "source-map",
  entry: [
    path.resolve(__dirname, './src/index.js'),
      // 'webpack/hot/dev-server',
    `webpack-dev-server/client?http://localhost:${PORT}`
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /(node_modules)/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Reddit',
      template: path.resolve(__dirname, './index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({
      url: `http:\\localhost:${PORT}`
    })
  ],
  devServer: {
    historyApiFallback: true,
    // 告诉 dev-server 在使用HMR
    hot: true,
    port: PORT,
  }
}