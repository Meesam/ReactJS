var webpack = require('webpack');
var path=require('path');

module.exports = {
  entry: './public/src/main.js',
  output: {
    path:'./public/dist',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test:/\.css$/,
        loader:'css-loader!style-loader',
        exclude:'/node_module/'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      { test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf$/,    loader: "file-loader" },
      { test: /\.eot$/,    loader: "file-loader" },
      { test: /\.svg$/,    loader: "file-loader" },
      { test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery' }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    }),
    /*new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),*/
    new webpack.HotModuleReplacementPlugin()
  ],
  watch:true
}

