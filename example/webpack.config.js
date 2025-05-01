const path = require("path");
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  mode: "production",
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js','.css','.png'],
  },
  output: {
    filename: "bundle.js",
    //path: path.resolve("dist"),
    //publicPath: "/dist",
    publicPath: "/",
  },
  module: {
    rules:[
      {
        test: /\.csv$/,
        use: 'raw-loader'
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ], 
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins:[
     new Dotenv(),
     new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      inject: false
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // remove console.* calls
          },
          format: {
            comments: false, // remove comments
          },
        },
        extractComments: false, // don't generate separate LICENSE.txt
      }),
    ],
  },
}

