const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const commonConfig = {
  // absolute path for project root
  context: path.resolve(__dirname, "../src"),

  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js"
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
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      }
    ]
  },

  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ]

  // externals: Object.keys(externals || {})
};

module.exports = commonConfig;
