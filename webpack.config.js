var path = require("path");

module.exports = {
  mode: "development", //还可以填另一个值：production所有代码最小化 给用户用的 。 development模式是给开发者用的
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
  },
};
