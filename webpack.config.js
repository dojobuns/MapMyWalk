const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/map_my_walk.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name][md5:hash].[ext]",
            outputPath: "webpack-assets/",
            publicPath: "/assets/webpack-assets/",
          },
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"],
    alias: {
      assets: path.resolve(__dirname, "app", "assets"),
      images: path.resolve(__dirname, "app", "assets", "images"),
    },
  }
};


