const path = require('path');
const fs = require('fs');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const glob = require("glob");

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(function (file) {
      return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}

var entry = {
  // app: "./src/app.ts",
  // vendor: ["angular", "oclazyload", "angular-new-router", "lodash"]
};

var components = getDirectories("./src/components");

for (var i = 0; i < components.length; i++) {
  entry[components[i]] = "./src/components/" + components[i] + "/" + /*components[i]*/ "index" + ".tsx";
}
console.log('entry:', entry);

module.exports = {
  devtool: 'source-map',
  mode: 'development' || 'production',
  entry,
  // entry: {
    // alpha: './src/alpha.ts',
    // beta: './src/beta.ts',
    // button: './src/components/button/index.tsx',
    // js: glob.sync("./src/components/**/*.tsx"),
  // },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]/index.js',
    library: ['@alfa-code/react-components', '[name]'],
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
        ]
      },
      {
        test: /\.css$/,
        use: [
          // MiniCssExtractPlugin.loader,
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: [
          // MiniCssExtractPlugin.loader,
          "style-loader",
          "css-loader"
        ],
        exclude: /\.module\.css$/,
      },

    ]
  },
  externals: {
    "react": "react",
    "formik": "formik"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: './package.json', to: '.' },
        { from: './LICENSE', to: '.' },
        { from: './README.md', to: '.' },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: '[name]/[name].css',
    }),
  ]
};
