const path = require("path");
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js','.css','.png'],
  },
  devtool: 'eval',
  output: {
    filename: "bundle.js",
    //path: path.resolve("dist"),
    //publicPath: "/dist",
    publicPath: "/",
    //sourceMapFilename: 'bundle.js.map',
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
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: [
          /node_modules/,
          /html-entities/ // Specifically exclude html-entities from source map generation
        ],
        use: ['source-map-loader', "babel-loader"],
        //use: "babel-loader"
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
    //historyApiFallback: true,
    allowedHosts: 'all',
    host: '0.0.0.0',
    port: 8080, // Ensure this matches your dev server's port
  },
  ignoreWarnings: [
    {
      module: /node_modules[\\\/]html-entities[\\\/]/,
      message: /source map/i,
    },
  ],
  plugins:[
     new Dotenv(),
     new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      inject: false
    }),
  ],
  optimization: {
    minimize: false,
    //minimize: true, /* Comment this out when you want to debug from VS Code! */
    /*minimizer: [
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
    ],*/
  },
}

