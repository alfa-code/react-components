const path = require('path');
const fs = require('fs');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

/**
 * Returns array of components directories names
 */
function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(function (file) {
      return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}

let entry = {};
var componentsNames = getDirectories("./src/components");
for (var i = 0; i < componentsNames.length; i++) {
  entry[componentsNames[i]] = "./src/components/" + componentsNames[i] + "/" +"index.ts";
}

module.exports = {
  devtool: 'source-map',
  mode: 'production',
  entry,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]/index.js',
    library: ['@alfa-code/react-components', '[name]'],
    libraryTarget: 'umd',
    globalObject: 'this',
    assetModuleFilename: 'assets/[hash][ext][query]',
    publicPath: '',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
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
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          // "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          'sass-loader',
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",
          'css-loader',
          'sass-loader'
        ],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.png/,
        type: 'asset/inline'
      },
      {
        test: /\.svg/,
        type: 'asset/inline'
      },
    ]
  },
  externals: {
    'react': 'react',
    'formik': 'formik',
    'next': 'next'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new RemovePlugin({
      before: {
        include: [
          './dist'
        ]
      },
      watch: {
          // parameters for "before watch compilation" stage.
      },
      after: {
          // parameters for "after normal and watch compilation" stage.
      }
    }),
    new CopyPlugin({
      patterns: [
        { from: './package.json', to: '.' },
        { from: './LICENSE', to: '.' },
        { from: './README.md', to: '.' },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: '[name]/[name].css',
      ignoreOrder: true,
    }),
  ],
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`)
      `...`,
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          type: "css/mini-extract",
          chunks: "all",
          enforce: true,
        },
      },
    },
  },
};
