const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: "./src/bootstrap.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bootstrap.js",
  },
  mode: "development",
  devServer: {
    watchFiles: ["src/index.html"],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: ["./src/index.html", { from: "static", to: "static" }],
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  experiments: {
    asyncWebAssembly: true,
  },
};
