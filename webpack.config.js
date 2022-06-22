const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { basename } = require("path");
const path = require("path");
const { Chunk } = require("webpack");

const base = require('./webpack.config.base.js')

module.exports = {
  ...base, // 把所有的base里的配置都加载进来
  mode: "development",
  module: {
      rules: [
          {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader']
          }
      ]
  }
}
