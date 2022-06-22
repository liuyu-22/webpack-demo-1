const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const { Chunk } = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "lynn喜欢Isabella22",
      template: "src/assets/index.html",
    }),],

    module: {
      rules: [
          {
              test: /\.s[ac]ss$/i,
              use: [
                // Creates `style` nodes from JS strings
                  'style-loader',
                 // Translates CSS into CommonJS
                  'css-loader',
                  {	
                    // Compiles Sass to CSS
                      loader: 'sass-loader',
                      options: {
                          implementation: require('dart-sass'),
                      }
                  }
              ],
          }
      ]}
};
