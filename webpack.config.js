const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const entryFile = path.resolve(__dirname, 'src/main.js');
const outputPath = path.resolve(__dirname, 'public');
const outputFile = 'bundle.js';

module.exports = {
  entry: entryFile,
  output: {
    path: outputPath,
    filename: outputFile
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      }
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body'
    }),
    new CopyWebpackPlugin(
      [
        { from: 'src/robots.txt' },
        { from: 'src/assets/', to: 'assets/' }
      ],
      { ignore: ['.gitkeep'] }
    )
  ]
};
