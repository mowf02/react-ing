var path = require("path");
var webpack = require("webpack");
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build/',
    filename: "bundle.js"
  },
  resolve: {
    alias: {
        App: './src/components/App/App'
    },
    extensions: ['*', '.js', '.jsx', '.png', '.json']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss: [
          autoprefixer
        ]
      }
    })
  ],
  module: {
      rules: [
     {
       test: /\.jsx?$/,
       exclude: /node_modules/,
       loaders: ['react-hot-loader', 'babel-loader']
     },
     {
       test: /\.s?css$/,
       use: ['style-loader', 'css-loader', 'sass-loader' , 'postcss-loader']
     },
     {
       test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
       loader: 'url-loader?limit=10000',
     }
   ]
  }
};
