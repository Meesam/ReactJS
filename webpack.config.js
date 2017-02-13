var webpack = require('webpack');
var path=require('path');

module.exports = {
  entry:{
     'webpack-dev-server/client?http://localhost:8090'
     './src/main.js'
  },
  output: {
    path:'./dist',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test:/\.css$/,
        loader:'css-loader!style-loader',
        include: [
                    path.resolve(__dirname, "not_exist_path")
                ],
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
      { test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass'] },
      { test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery' }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  watch:true
}

