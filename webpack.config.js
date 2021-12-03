var path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development" || "production",
  entry: {
    alpha: "./src/alpha",
    beta: "./src/beta"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    library: ["@alfa-code/react-components", "[name]"],
    libraryTarget: "umd"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: "./package.json", to: "." },
        { from: "./LICENSE", to: "." },
        { from: "./README.md", to: "." },
      ],
    }),
  ]
};
