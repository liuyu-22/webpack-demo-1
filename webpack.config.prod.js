const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const { Chunk } = require("webpack");

// 引入Base
const base = require('./webpack.config.base')

module.exports = {
    ...base,
    mode: "production",
    plugins: [
       // 先继承需要的
        ...base.plugins,
       // 再叠加我自己的， 这样就不会用我自己的这个配置覆盖掉之前的所有配置
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
        })
    ],

    module: {
        rules: [
           // 先继承需要的
           ...base.module.rules,
          // 再叠加我自己的， 这样就不会用我自己的这个配置覆盖掉之前的所有配置
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    }
}
