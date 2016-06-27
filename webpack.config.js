let webpack           = require('webpack'),
    path              = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports  = {
  devtool : 'inline-source-map',

  entry   : {
    app     : path.resolve(__dirname, 'app/index.js')
  },

  output  : {
    path      : path.join(__dirname, 'public'),
    filename  : 'bundle.js'
  },

  module  : {
    loaders : [
      {
        test   : /\.js$/,
        loader : 'babel',
        query  :  {
          presets : ['es2015', 'react']
        }
      }
    ]
  },

  plugins : [
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      title     : 'test1',
      template  : 'app/index.html'
    })
  ]
}
