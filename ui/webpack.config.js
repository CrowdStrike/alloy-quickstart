const glob = require("glob");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

var entry = {};
var plugins = [];

glob.sync("./src/extensions/*/index.tsx").forEach((e) => {
  const name = e.split("/").reverse()[1];
  entry[name] = e;
  plugins.push(
    new HtmlWebpackPlugin({
      chunks: [name],
      filename: name + ".html",
      template: "public/index.html",
    })
  );
});

module.exports = {
  entry: entry,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: plugins,
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 4000,
  },
};
