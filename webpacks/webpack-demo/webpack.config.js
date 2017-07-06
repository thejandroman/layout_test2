const ExtractTextPlugin = require("extract-text-webpack-plugin");
var   path              = require("path");

module.exports = {
  entry: {
    submodule1: "./src/submodule1"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css")
  ]
};
