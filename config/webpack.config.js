const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PORT = 3000;

module.exports = {
  // devtool: "cheap-eval-source-map",
  devtool: "source-map",

  context: path.resolve(__dirname, "../src"),

  entry: [
    "./index.js",
    // 'webpack/hot/dev-server',
    `webpack-dev-server/client?http://localhost:${PORT}`
  ],

  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "[name].js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /(node_modules)/
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [require("autoprefixer")]
            }
          }
        ]
      },
      {
        test: /\.scss/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [require("autoprefixer")]
            }
          },
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),

    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    contentBase: path.resolve(__dirname, "./build"),
    port: PORT,
    open: true
  }
};
